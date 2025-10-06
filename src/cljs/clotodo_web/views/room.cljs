(ns clotodo-web.views.room
 (:require [reagent.core :as r]
           [clotodo-web.state :as state]
           [clotodo-web.api :as api]))


(defn room-page []
 (let [new-todo-title (r/atom "")
       new-todo-desc (r/atom "")
       room @state/current-room]
  
   (when room
     (api/get-todos (:id room) #(reset! state/todos %)))
  
   (fn []
     (let [room @state/current-room]
       [:div.room-page
        [:header.room-header
         [:button.btn-back
          {:on-click #(reset! state/current-page :dashboard)}
          "← Back"]
         [:div.room-header-content
          [:h1.room-title (:name room)]
          (when-not (:is_public room)
            [:span.room-code-display "Code: " (:access_code room)])]]
       
        [:div.room-content
         [:div.todo-form-card
          [:h2 "Add New Todo"]
          [:form
           {:on-submit (fn [e]
                        (.preventDefault e)
                        (api/create-todo (:id room) @new-todo-title @new-todo-desc
                          (fn [resp]
                            (reset! new-todo-title "")
                            (reset! new-todo-desc "")
                            (api/get-todos (:id room) #(reset! state/todos %)))))}
          
           [:input.todo-input
            {:type "text"
             :placeholder "What needs to be done?"
             :value @new-todo-title
             :on-change #(reset! new-todo-title (.. % -target -value))
             :required true}]
          
           [:textarea.todo-textarea
            {:placeholder "Description (optional)"
             :value @new-todo-desc
             :on-change #(reset! new-todo-desc (.. % -target -value))
             :rows 3}]
          
           [:button.btn-primary
            {:type "submit"}
            "Add Todo"]]]
        
         [:div.todos-list
          (if (empty? @state/todos)
            [:div.empty-state
             [:p "No todos yet. Add one above!"]]
           
            (for [todo @state/todos]
              ^{:key (:id todo)}
              [:div.todo-item
               {:class (when (:is_done todo) "completed")}
               [:div.todo-checkbox
                [:input
                 {:type "checkbox"
                  :checked (:is_done todo)
                  :on-change #(api/toggle-todo (:id todo)
                                (fn [_]
                                  (api/get-todos (:id room)
                                    (fn [todos] (reset! state/todos todos)))))}]]
               [:div.todo-content
                [:h3.todo-title (:title todo)]
                (when (:description todo)
                  [:p.todo-description (:description todo)])
                [:span.todo-creator "by " (:creator_name todo)]]
               [:button.todo-delete
                {:on-click #(when (js/confirm "Delete this todo?")
                             (api/delete-todo (:id todo)
                               (fn [_]
                                 (api/get-todos (:id room)
                                   (fn [todos] (reset! state/todos todos))))))}
                "X"]]))]]]))))