(ns clotodo-web.router
  (:require [clotodo-web.state :as state]
            [bidi.bidi :as bidi]
            [pushy.core :as pushy]))

(def routes
  ["/" {""           :dashboard
        "room/"      {[:id] :room}}])

(defn set-page! [match]
  (reset! state/current-page (:handler match)))

(def history
  (pushy/pushy set-page! (partial bidi/match-route routes)))

(defn init! []
  (pushy/start! history))