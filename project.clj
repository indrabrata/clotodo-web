(defproject clotodo-web "0.1.0-SNAPSHOT"
  :description "A collaborative todo app with rooms and authentication"
  :url "http://example.com/clotodo-web"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}

  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/clojurescript "1.11.60"
                  :exclusions [com.fasterxml.jackson.core/jackson-core
                               com.fasterxml.jackson.core/jackson-databind
                               com.fasterxml.jackson.core/jackson-annotations]]

                 [reagent "2.0.0-alpha3"]
                 [re-frame "1.4.3"]
                 [day8.re-frame/http-fx "0.2.4"]
                 [bidi "2.1.6"]
                 [kibu/pushy "0.3.8"]

                 ;; Backend
                 [ring/ring-core "1.15.3"]
                 [ring/ring-jetty-adapter "1.15.3"]
                 [ring/ring-json "0.5.1"]
                 [ring/ring-defaults "0.7.0"]
                 [ring-cors "0.1.13"]
                 [compojure "1.7.2"]
                 [com.stuartsierra/component "1.1.0"]

                 ;; Database
                 [org.postgresql/postgresql "42.7.1"]
                 [seancorfield/next.jdbc "1.2.659"]
                 [migratus "1.6.4"]
                 

                 ;; Auth & Security
                 [buddy/buddy-auth "3.0.323"]
                 [buddy/buddy-sign "3.6.1-359"]
                 [buddy/buddy-hashers "2.0.167"]
                 [crypto-random "1.2.1"]

                 ;; Utils
                 [clj-time "0.15.2"]
                 [environ "1.2.0"]

                 ;; Logger
                 [org.slf4j/slf4j-api "2.0.9"]
                 [org.slf4j/slf4j-simple "2.0.9"]

                 [thheller/shadow-cljs "3.2.1"]
                 [cljs-ajax "0.8.4"]]

  :plugins [[lein-ring "0.12.6"]
            [lein-environ "1.2.0"]
            [migratus-lein "0.7.3"]]

  :source-paths ["src/clj"]
  :test-paths ["test/clj"]

  :main ^:skip-aot clotodo-web.core
  :target-path "target/%s"

  :ring {:handler clotodo-web.handler/app
         :port 3000}

  :migratus {:store :database
             :migration-dir "migrations"
             :db {:dbtype "postgresql"
                  :dbname "clotodo_web"
                  :host "localhost"
                  :port 5432
                  :user "postgres"
                  :password "postgres"}}

  :profiles {:dev {:dependencies [[ring/ring-mock "0.4.0"]
                                  [ring/ring-devel "1.10.0"]]
                   :source-paths ["dev"]
                   :env {:dev true}}
             :uberjar {:aot :all
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]}})