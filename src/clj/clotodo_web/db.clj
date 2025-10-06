(ns clotodo-web.db
  (:require [next.jdbc :as jdbc]
            [next.jdbc.sql :as sql]
            [next.jdbc.result-set :as rs]))

(defn make-datasource [config]
  (jdbc/get-datasource
    {:dbtype "postgresql"
     :host (:host config)
     :port (:port config)
     :dbname (:database-name config)
     :user (:username config)
     :password (:password config)}))


(defn create-user! [ds {:keys [email username password_hash]}]
  (sql/insert! ds
               :users
               {:email email
                :username username
                :password_hash password_hash}
               {:return-keys true
                :builder-fn rs/as-unqualified-lower-maps}))

(defn get-user-by-email [ds email]
  (first
    (jdbc/execute! ds
                   ["SELECT * FROM users WHERE email = ?" email]
                   {:builder-fn rs/as-unqualified-lower-maps})))

