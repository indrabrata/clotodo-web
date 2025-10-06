(ns clotodo-web.core
  (:require [ring.adapter.jetty :as jetty]
            [clotodo-web.handler :as handler]
            [clotodo-web.db :as db]
            [com.stuartsierra.component :as component])
  (:gen-class))

(defrecord WebServer [port db-spec]
  component/Lifecycle
  (start [component]
    (println "Starting web server on port" port)
    (let [server (jetty/run-jetty 
                   (handler/app db-spec)
                   {:port port :join? false})]
      (assoc component :server server)))
  (stop [component]
    (when-let [server (:server component)]
      (println "Stopping web server")
      (.stop server))
    (dissoc component :server)))

(defn system [config]
  (component/system-map
   :db-spec (db/make-datasource (:db config))
   :web-server (component/using
                 (map->WebServer {:port (:port config)})
                 [:db-spec])))

(defn -main [& args]
  (let [config {:port 3000
                :db {:host "localhost"
                     :port 5432
                     :database-name "clotodo_web"
                     :username "postgres"
                     :password "postgres"}}]
    (component/start (system config))
    (println "Server started on http://localhost:3000")))
