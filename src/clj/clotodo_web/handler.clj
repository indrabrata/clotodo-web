(ns clotodo-web.handler
  (:require
   [buddy.auth :refer [authenticated?]]
   [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
   [clotodo-web.auth :as auth]
   [clotodo-web.db :as db]
   [compojure.core :refer [defroutes GET POST PUT DELETE]]
   [compojure.route :as route]
   [ring.middleware.cors :refer [wrap-cors]]
   [ring.middleware.defaults :refer [api-defaults wrap-defaults]]
   [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
   [ring.util.response :refer [response status]]))

(defn wrap-auth [handler]
  (-> handler
      (wrap-authentication auth/auth-backend)
      (wrap-authorization auth/auth-backend)))

(defn require-auth [handler]
 (fn [request]
   (if (authenticated? request)
     (handler request)
     (-> (response {:error "Authentication required"})
         (status 401)))))

(defn signup [db-spec request]
  (let [{:keys [email username password]} (:body request)
        password-hash (auth/hash-password password)]
    (try
      (let [user (db/create-user! db-spec {:email email
                                           :username username
                                           :password_hash password-hash})
            token (auth/create-token (:id user))]
          (response {:token token
                     :user (dissoc user :password_hash)})
        )
      (catch Exception e
        (-> (response {:error (.getMessage e)})
            (status 500))))))


(defn signin [db-spec request]
  (let [{:keys [email password]} (:body request)
        user (db/get-user-by-email db-spec email)]
    (if (and user (auth/verify-password password (:password_hash user)))
      (let [token (auth/create-token (:id user))]
        (response {:token token :user (dissoc user :password_hash)}))
      (-> (response {:error "Invalid credentials"})
          (status 401)))))

(defn create-room [db-spec request]
 (let [user-id (get-in request [:identity :user-id])
       {:keys [name is_public]} (:body request)
       access-code (when-not is_public (auth/generate-room-code))
       room (db/create-room! db-spec {:name name
                                       :owner_id user-id
                                       :is_public is_public
                                       :access_code access-code})]
   (db/add-room-member! db-spec {:room_id (:id room) :user_id user-id})
   (response room)))


(defn get-rooms [db-spec request]
 (let [user-id (get-in request [:identity :user-id])
       rooms (db/get-user-rooms db-spec user-id)]
   (response rooms)))


(defn join-room [db-spec request]
  (let [user-id (get-in request [:identity :user-id])
        {:keys [access_code]} (:body request)
        room (db/get-room-by-code db-spec access_code)]
    (if room
      (do
        (db/add-room-member! db-spec {:room_id (:id room) :user_id user-id})
        (response room))
      (-> (response {:error "Room not found"})
          (status 404)))))

(defn create-todo [db-spec request]
 (let [user-id (get-in request [:identity :user-id])
       room-id (Integer/parseInt (get-in request [:params :room-id]))
       {:keys [title description]} (:body request)
       todo (db/create-todo! db-spec {:room_id room-id
                                       :user_id user-id
                                       :title title
                                       :description description})]
   (response todo)))


(defn get-todos [db-spec request]
 (let [room-id (Integer/parseInt (get-in request [:params :room-id]))
       todos (db/get-room-todos db-spec room-id)]
   (response todos)))


(defn toggle-todo [db-spec request]
 (let [todo-id (Integer/parseInt (get-in request [:params :todo-id]))
       todo (db/get-todo db-spec todo-id)
       updated (db/update-todo-status! db-spec {:id todo-id
                                                :is_done (not (:is_done todo))})]
   (response updated)))

(defn delete-todo [db-spec request]
 (let [todo-id (Integer/parseInt (get-in request [:params :todo-id]))]
   (db/delete-todo! db-spec todo-id)
   (response {:success true})))

(defn app-routes [db-spec]
  (defroutes routes
    (POST "/api/auth/signup" request (signup db-spec request))
    (POST "/api/auth/signin" request (signin db-spec request))

    (GET "/api/rooms" request
      ((require-auth #(get-rooms db-spec %)) request))
    (POST "/api/rooms" request
      ((require-auth #(create-room db-spec %)) request))
    (POST "/api/rooms/join" request
      ((require-auth #(join-room db-spec %)) request))

    (GET "/api/rooms/:room-id/todos" request
      ((require-auth #(get-todos db-spec %)) request))
    (POST "/api/rooms/:room-id/todos" request
      ((require-auth #(create-todo db-spec %)) request))
    (PUT "/api/todos/:todo-id/toggle" request
      ((require-auth #(toggle-todo db-spec %)) request))
    (DELETE "/api/todos/:todo-id" request
      ((require-auth #(delete-todo db-spec %)) request))


    (route/not-found {:error "Not found"})))

(defn app [db-spec]
  (-> (app-routes db-spec)
      (wrap-json-body {:keywords? true})
      wrap-json-response
      (wrap-defaults api-defaults)
      wrap-auth
      (wrap-cors
        :access-control-allow-origin [#".*"]
        :access-control-allow-methods [:get :post :put :delete]
        :access-control-allow-headers ["Content-Type" "Authorization"])))
