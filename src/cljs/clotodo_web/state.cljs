(ns clotodo-web.state
  (:require [reagent.core :as r]))

(defonce token (r/atom nil))
(defonce user (r/atom nil))
(defonce current-page (r/atom :dashboard))
(defonce current-room (r/atom nil))
(defonce todos (r/atom []))
(defonce loading (r/atom false))
(defonce rooms (r/atom []))
(defonce error (r/atom nil))

(defn save-token! [t u]
  (reset! token t)
  (reset! user u)
  (.setItem js/localStorage "token" t)
  (.setItem js/localStorage "user" (.stringify js/JSON (clj->js u))))

(defn load-token! []
  (when-let [t (.getItem js/localStorage "token")]
    (when-let [u (.getItem js/localStorage "user")]
      (reset! token t)
      (reset! user (js->clj (.parse js/JSON u) :keywordize-keys true)))))

(defn logout! []
 (reset! token nil)
 (reset! user nil)
 (.removeItem js/localStorage "token")
 (.removeItem js/localStorage "user"))

