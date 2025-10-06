(ns clotodo-web.api
  (:require [clotodo-web.state :as state]
            [ajax.core :refer [POST]]))

(def api-url "http://localhost:3000/api")


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
