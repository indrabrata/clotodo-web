(ns clotodo-web.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clotodo-web.state :as state]
            [clotodo-web.router :as router]
            [clotodo-web.views.auth :as auth]))

(defn app []
  (let [current-page @state/current-page
        token @state/token]
    [:div.app
     (cond
       (nil? token) [auth/auth-page])]))

(defn ^:export init! []
  (router/init!)
  (state/load-token!)
  (rdom/render [app] (.getElementById js/document "app")))