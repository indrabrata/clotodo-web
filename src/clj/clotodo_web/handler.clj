(ns clotodo-web.handler
  (:require [compojure.core :refer [defroutes POST]]
            [compojure.route :as route]
            [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.util.response :refer [response status]]
            [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
            [clotodo-web.auth :as auth]
            [clotodo-web.db :as db]))

(defn wrap-auth [handler]
  (-> handler
      (wrap-authentication auth/auth-backend)
      (wrap-authorization auth/auth-backend)))

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

(defn app-routes [db-spec]
  (defroutes routes
    (POST "/api/auth/signup" request (signup db-spec request))
    (POST "/api/auth/signin" request (signin db-spec request))
    

    
    (route/not-found {:error "Not found"})))

(defn app [db-spec]
  (-> (app-routes db-spec)
      wrap-auth
      (wrap-defaults api-defaults)
      (wrap-json-body {:keywords? true})
      wrap-json-response
      (wrap-cors
        :access-control-allow-origin [#".*"]
        :access-control-allow-methods [:get :post :put :delete]
        :access-control-allow-headers ["Content-Type" "Authorization"])))
