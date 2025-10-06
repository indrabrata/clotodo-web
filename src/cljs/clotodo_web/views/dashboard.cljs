(ns clotodo-web.views.dashboard
 (:require [reagent.core :as r]
           [clotodo-web.state :as state]
           [clotodo-web.api :as api]))


(defn dashboard-page []
 (let [show-create (r/atom false)
       show-join (r/atom false)
       room-name (r/atom "")
       is-public (r/atom false)
       join-code (r/atom "")]
  
   (api/get-rooms #(reset! state/rooms %))
  
   (fn []
     [:div.dashboard
      [:header.dashboard-header
       [:div.header-content
        [:h1.header-title "Clotodo"]
        [:div.header-user
         [:span "Welcome, " (:username @state/user)]
         [:button.btn-secondary
          {:on-click state/logout!}
          "Logout"]]]]
     
      [:div.dashboard-content
       [:div.dashboard-actions
        [:button.btn-primary
         {:on-click #(reset! show-create true)}
         "+ Create Room"]
        [:button.btn-secondary
         {:on-click #(reset! show-join true)}
         "Join Room"]]
      
       [:div.rooms-grid
        (if (empty? @state/rooms)
          [:div.empty-state
           [:p "No rooms yet. Create one to get started!"]]
         
          (for [room @state/rooms]
            ^{:key (:id room)}
            [:div.room-card
             {:on-click #(do
                          (reset! state/current-room room)
                          (reset! state/current-page :room))}
             [:h3.room-name (:name room)]
             [:div.room-info
              [:span.room-badge
               (if (:is_public room) "Public" "Private")]
              (when-not (:is_public room)
                [:span.room-code "Code: " (:access_code room)])]]))]]
     
      (when @show-create
        [:div.modal
         [:div.modal-content
          [:h2 "Create New Room"]
          [:form
           {:on-submit (fn [e]
                        (.preventDefault e)
                        (api/create-room @room-name @is-public
                          (fn [resp]
                            (reset! show-create false)
                            (reset! room-name "")
                            (reset! is-public false)
                            (api/get-rooms #(reset! state/rooms %)))))}
          
           [:input.modal-input
            {:type "text"
             :placeholder "Room Name"
             :value @room-name
             :on-change #(reset! room-name (.. % -target -value))
             :required true}]
          
           [:label.checkbox-label
            [:input
             {:type "checkbox"
              :checked @is-public
              :on-change #(reset! is-public (.. % -target -checked))}]
            "Make this room public"]
          
           [:div.modal-actions
            [:button.btn-primary
             {:type "submit"}
             "Create"]
            [:button.btn-secondary
             {:type "button"
              :on-click #(reset! show-create false)}
             "Cancel"]]]]])
     
      (when @show-join
        [:div.modal
         [:div.modal-content
          [:h2 "Join Room"]
          [:form
           {:on-submit (fn [e]
                        (.preventDefault e)
                        (api/join-room @join-code
                          (fn [resp]
                            (reset! show-join false)
                            (reset! join-code "")
                            (api/get-rooms #(reset! state/rooms %)))))}
          
           [:input.modal-input
            {:type "text"
             :placeholder "Enter Room Code"
             :value @join-code
             :on-change #(reset! join-code (.. % -target -value))
             :required true}]
          
           [:div.modal-actions
            [:button.btn-primary
             {:type "submit"}
             "Join"]
            [:button.btn-secondary
             {:type "button"
              :on-click #(reset! show-join false)}
             "Cancel"]]]]])])))