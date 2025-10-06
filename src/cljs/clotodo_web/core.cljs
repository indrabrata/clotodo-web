(ns clotodo-web.core
  (:require
   [clotodo-web.router :as router]
   [clotodo-web.state :as state]
   [clotodo-web.views.auth :as auth]
   [clotodo-web.views.dashboard :as dashboard]
   [reagent.dom :as rdom]))

(defn app []
  (let [current-page @state/current-page
        token @state/token]
    [:div.app
     (cond
       (nil? token) [auth/auth-page]
       (= current-page :dashboard) [dashboard/dashboard-page]
       :else [dashboard/dashboard-page])]))

(defn ^:export init! []
  (router/init!)
  (state/load-token!)
  (rdom/render [app] (.getElementById js/document "app")))