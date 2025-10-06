(ns clotodo-web.api
  (:require [clotodo-web.state :as state]
            [ajax.core :refer [POST GET PUT DELETE]]))

(def api-url "http://localhost:3000/api")

(defn auth-header []
  {"Authorization" (str "Bearer " @state/token)}) ; Changed from "Token " to "Bearer "

(defn signup [email username password callback]
  (POST (str api-url "/auth/signup")
        {:params {:email email :username username :password password}
         :format :json
         :response-format :json
         :keywords? true
         :handler callback
         :error-handler #(reset! state/error "Signup failed")}))

(defn signin [email password callback]
  (POST (str api-url "/auth/signin")
        {:params {:email email :password password}
         :format :json
         :response-format :json
         :keywords? true
         :handler callback
         :error-handler #(reset! state/error "Invalid credentials")}))

(defn get-rooms [callback]
  (GET (str api-url "/rooms")
       {:headers (auth-header)
        :response-format :json
        :keywords? true
        :handler callback
        :error-handler #(reset! state/error "Failed to load rooms")}))

(defn create-room [name is-public callback]
  (POST (str api-url "/rooms")
        {:headers (auth-header)
         :params {:name name :is_public is-public}
         :format :json
         :response-format :json
         :keywords? true
         :handler callback
         :error-handler #(reset! state/error "Failed to create room")}))

(defn join-room [access-code callback]
  (POST (str api-url "/rooms/join")
        {:headers (auth-header)
         :params {:access_code access-code}
         :format :json
         :response-format :json
         :keywords? true
         :handler callback
         :error-handler #(reset! state/error "Invalid room code")}))

(defn get-todos [room-id callback]
 (GET (str api-url "/rooms/" room-id "/todos")
   {:headers (auth-header)
    :response-format :json
    :keywords? true
    :handler callback
    :error-handler #(reset! state/error "Failed to load todos")}))


(defn create-todo [room-id title description callback]
 (POST (str api-url "/rooms/" room-id "/todos")
   {:headers (auth-header)
    :params {:title title :description description}
    :format :json
    :response-format :json
    :keywords? true
    :handler callback
    :error-handler #(reset! state/error "Failed to create todo")}))


(defn toggle-todo [todo-id callback]
 (PUT (str api-url "/todos/" todo-id "/toggle")
   {:headers (auth-header)
    :response-format :json
    :keywords? true
    :handler callback
    :error-handler #(reset! state/error "Failed to update todo")}))


(defn delete-todo [todo-id callback]
 (DELETE (str api-url "/todos/" todo-id)
   {:headers (auth-header)
    :response-format :json
    :keywords? true
    :handler callback
    :error-handler #(reset! state/error "Failed to delete todo")}))