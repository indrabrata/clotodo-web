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

(defn create-room! [ds {:keys [name owner_id is_public access_code]}]
  (first
    (jdbc/execute! ds
      ["INSERT INTO rooms (name, owner_id, is_public, access_code)
        VALUES (?, ?, ?, ?)
        RETURNING *"
       name owner_id is_public access_code]
      {:builder-fn rs/as-unqualified-lower-maps})))

(defn get-room-by-code [ds access_code]
  (first
    (jdbc/execute! ds
      ["SELECT * FROM rooms WHERE access_code = ?" access_code]
      {:builder-fn rs/as-unqualified-lower-maps})))

(defn get-user-rooms [ds user_id]
  (jdbc/execute! ds
    ["SELECT r.* FROM rooms r
       JOIN room_members rm ON r.id = rm.room_id
       WHERE rm.user_id = ?
       ORDER BY r.created_at DESC"
     user_id]
    {:builder-fn rs/as-unqualified-lower-maps}))

(defn add-room-member! [ds {:keys [room_id user_id]}]
  (jdbc/execute! ds
    ["INSERT INTO room_members (room_id, user_id)
       VALUES (?, ?)
       ON CONFLICT DO NOTHING"
     room_id user_id]
    {:builder-fn rs/as-unqualified-lower-maps}))

