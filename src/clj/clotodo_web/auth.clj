(ns clotodo-web.auth
  (:require [buddy.sign.jwt :as jwt]
            [buddy.hashers :as hashers]
            [buddy.auth :refer [authenticated?]]
            [buddy.auth.backends.token :refer [jws-backend]] ; Changed from jwe-backend
            [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
            [clj-time.core :as time]
            [crypto.random :as random]))

(def secret "your-secret-key-change-in-production")

(defn hash-password [password]
  (hashers/derive password))

(defn verify-password [password hash]
  (hashers/check password hash))

(defn create-token [user-id]
  (let [claims {:user-id user-id
                :exp (time/plus (time/now) (time/hours 24))}]
    (jwt/sign claims secret)))

(defn unsign-token [token]
  (try
    (jwt/unsign token secret)
    (catch Exception e nil)))

(def auth-backend
  (jws-backend {:secret secret
                :token-name "Bearer"}))

(defn generate-room-code []
  (random/base32 8))