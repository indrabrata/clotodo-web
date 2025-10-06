(ns clotodo-web.views.auth
  (:require [reagent.core :as r]
            [clotodo-web.state :as state]
            [clotodo-web.api :as api]))

(defn auth-page []
  (let [is-signin (r/atom true)
        email (r/atom "")
        username (r/atom "")
        password (r/atom "")]
    (fn []
      [:div.auth-container
       [:div.auth-card
        [:h1.auth-title "Clotodo"]
        [:p.auth-subtitle "Collaborative Todo Management"]
        
        [:div.auth-tabs
         [:button.auth-tab
          {:class (when @is-signin "active")
           :on-click #(reset! is-signin true)}
          "Sign In"]
         [:button.auth-tab
          {:class (when-not @is-signin "active")
           :on-click #(reset! is-signin false)}
          "Sign Up"]]
        
        [:form.auth-form
         {:on-submit (fn [e]
                       (.preventDefault e)
                       (if @is-signin
                         (api/signin @email @password
                           (fn [resp]
                             (state/save-token! (:token resp) (:user resp))))
                         (api/signup @email @username @password
                           (fn [resp]
                             (state/save-token! (:token resp) (:user resp))))))}
         
         [:input.auth-input
          {:type "email"
           :placeholder "Email"
           :value @email
           :on-change #(reset! email (.. % -target -value))
           :required true}]
         
         (when-not @is-signin
           [:input.auth-input
            {:type "text"
             :placeholder "Username"
             :value @username
             :on-change #(reset! username (.. % -target -value))
             :required true}])
         
         [:input.auth-input
          {:type "password"
           :placeholder "Password"
           :value @password
           :on-change #(reset! password (.. % -target -value))
           :required true}]
         
         [:button.auth-submit
          {:type "submit"}
          (if @is-signin "Sign In" "Sign Up")]]
        
        (when @state/error
          [:div.error-message @state/error])]])))