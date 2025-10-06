goog.provide('clotodo_web.views.room');
clotodo_web.views.room.room_page = (function clotodo_web$views$room$room_page(){
var new_todo_title = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var new_todo_desc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var room = cljs.core.deref(clotodo_web.state.current_room);
if(cljs.core.truth_(room)){
clotodo_web.api.get_todos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(room),(function (p1__11949_SHARP_){
return cljs.core.reset_BANG_(clotodo_web.state.todos,p1__11949_SHARP_);
}));
} else {
}

return (function (){
var room__$1 = cljs.core.deref(clotodo_web.state.current_room);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.room-page","div.room-page",850041484),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.room-header","header.room-header",-1951023692),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-back","button.btn-back",1288700220),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(clotodo_web.state.current_page,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508));
})], null),"\u2190 Back"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.room-header-content","div.room-header-content",1848603541),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.room-title","h1.room-title",320269059),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(room__$1)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"is_public","is_public",-1453727950).cljs$core$IFn$_invoke$arity$1(room__$1))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.room-code-display","span.room-code-display",-1376786867),"Code: ",new cljs.core.Keyword(null,"access_code","access_code",1516946670).cljs$core$IFn$_invoke$arity$1(room__$1)], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.room-content","div.room-content",752228608),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.todo-form-card","div.todo-form-card",-187684473),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Add New Todo"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

return clotodo_web.api.create_todo(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(room__$1),cljs.core.deref(new_todo_title),cljs.core.deref(new_todo_desc),(function (resp){
cljs.core.reset_BANG_(new_todo_title,"");

cljs.core.reset_BANG_(new_todo_desc,"");

return clotodo_web.api.get_todos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(room__$1),(function (p1__11950_SHARP_){
return cljs.core.reset_BANG_(clotodo_web.state.todos,p1__11950_SHARP_);
}));
}));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.todo-input","input.todo-input",-326218543),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(new_todo_title),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__11951_SHARP_){
return cljs.core.reset_BANG_(new_todo_title,p1__11951_SHARP_.target.value);
}),new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.todo-textarea","textarea.todo-textarea",2018468425),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Description (optional)",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(new_todo_desc),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__11952_SHARP_){
return cljs.core.reset_BANG_(new_todo_desc,p1__11952_SHARP_.target.value);
}),new cljs.core.Keyword(null,"rows","rows",850049680),(3)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-primary","button.btn-primary",462664968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Add Todo"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.todos-list","div.todos-list",-1618810771),((cljs.core.empty_QMARK_(cljs.core.deref(clotodo_web.state.todos)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.empty-state","div.empty-state",1970626869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No todos yet. Add one above!"], null)], null):(function (){var iter__5503__auto__ = (function clotodo_web$views$room$room_page_$_iter__11953(s__11954){
return (new cljs.core.LazySeq(null,(function (){
var s__11954__$1 = s__11954;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__11954__$1);
if(temp__5823__auto__){
var s__11954__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11954__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__11954__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__11956 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__11955 = (0);
while(true){
if((i__11955 < size__5502__auto__)){
var todo = cljs.core._nth(c__5501__auto__,i__11955);
cljs.core.chunk_append(b__11956,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.todo-item","div.todo-item",-1336987887),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"is_done","is_done",-959513653).cljs$core$IFn$_invoke$arity$1(todo))?"completed":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.todo-checkbox","div.todo-checkbox",428449346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"is_done","is_done",-959513653).cljs$core$IFn$_invoke$arity$1(todo),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__11955,todo,c__5501__auto__,size__5502__auto__,b__11956,s__11954__$2,temp__5823__auto__,room__$1,new_todo_title,new_todo_desc,room){
return (function (){
return clotodo_web.api.toggle_todo(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo),((function (i__11955,todo,c__5501__auto__,size__5502__auto__,b__11956,s__11954__$2,temp__5823__auto__,room__$1,new_todo_title,new_todo_desc,room){
return (function (_){
return clotodo_web.api.get_todos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(room__$1),((function (i__11955,todo,c__5501__auto__,size__5502__auto__,b__11956,s__11954__$2,temp__5823__auto__,room__$1,new_todo_title,new_todo_desc,room){
return (function (todos){
return cljs.core.reset_BANG_(clotodo_web.state.todos,todos);
});})(i__11955,todo,c__5501__auto__,size__5502__auto__,b__11956,s__11954__$2,temp__5823__auto__,room__$1,new_todo_title,new_todo_desc,room))
);
});})(i__11955,todo,c__5501__auto__,size__5502__auto__,b__11956,s__11954__$2,temp__5823__auto__,room__$1,new_todo_title,new_todo_desc,room))
);
});})(i__11955,todo,c__5501__auto__,size__5502__auto__,b__11956,s__11954__$2,temp__5823__auto__,room__$1,new_todo_title,new_todo_desc,room))
], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.todo-content","div.todo-content",-1489769651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.todo-title","h3.todo-title",-1188537511),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(todo)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(todo))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.todo-description","p.todo-description",-1114572711),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(todo)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.todo-creator","span.todo-creator",-473592885),"by ",new cljs.core.Keyword(null,"creator_name","creator_name",568560935).cljs$core$IFn$_invoke$arity$1(todo)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.todo-delete","button.todo-delete",-1330421038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__11955,todo,c__5501__auto__,size__5502__auto__,b__11956,s__11954__$2,temp__5823__auto__,room__$1,new_todo_title,new_todo_desc,room){
return (function (){
if(cljs.core.truth_(confirm("Delete this todo?"))){
return clotodo_web.api.delete_todo(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo),((function (i__11955,todo,c__5501__auto__,size__5502__auto__,b__11956,s__11954__$2,temp__5823__auto__,room__$1,new_todo_title,new_todo_desc,room){
return (function (_){
return clotodo_web.api.get_todos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(room__$1),((function (i__11955,todo,c__5501__auto__,size__5502__auto__,b__11956,s__11954__$2,temp__5823__auto__,room__$1,new_todo_title,new_todo_desc,room){
return (function (todos){
return cljs.core.reset_BANG_(clotodo_web.state.todos,todos);
});})(i__11955,todo,c__5501__auto__,size__5502__auto__,b__11956,s__11954__$2,temp__5823__auto__,room__$1,new_todo_title,new_todo_desc,room))
);
});})(i__11955,todo,c__5501__auto__,size__5502__auto__,b__11956,s__11954__$2,temp__5823__auto__,room__$1,new_todo_title,new_todo_desc,room))
);
} else {
return null;
}
});})(i__11955,todo,c__5501__auto__,size__5502__auto__,b__11956,s__11954__$2,temp__5823__auto__,room__$1,new_todo_title,new_todo_desc,room))
], null),"X"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)));

var G__11957 = (i__11955 + (1));
i__11955 = G__11957;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11956),clotodo_web$views$room$room_page_$_iter__11953(cljs.core.chunk_rest(s__11954__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11956),null);
}
} else {
var todo = cljs.core.first(s__11954__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.todo-item","div.todo-item",-1336987887),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"is_done","is_done",-959513653).cljs$core$IFn$_invoke$arity$1(todo))?"completed":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.todo-checkbox","div.todo-checkbox",428449346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"is_done","is_done",-959513653).cljs$core$IFn$_invoke$arity$1(todo),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (todo,s__11954__$2,temp__5823__auto__,room__$1,new_todo_title,new_todo_desc,room){
return (function (){
return clotodo_web.api.toggle_todo(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo),(function (_){
return clotodo_web.api.get_todos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(room__$1),(function (todos){
return cljs.core.reset_BANG_(clotodo_web.state.todos,todos);
}));
}));
});})(todo,s__11954__$2,temp__5823__auto__,room__$1,new_todo_title,new_todo_desc,room))
], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.todo-content","div.todo-content",-1489769651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.todo-title","h3.todo-title",-1188537511),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(todo)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(todo))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.todo-description","p.todo-description",-1114572711),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(todo)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.todo-creator","span.todo-creator",-473592885),"by ",new cljs.core.Keyword(null,"creator_name","creator_name",568560935).cljs$core$IFn$_invoke$arity$1(todo)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.todo-delete","button.todo-delete",-1330421038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (todo,s__11954__$2,temp__5823__auto__,room__$1,new_todo_title,new_todo_desc,room){
return (function (){
if(cljs.core.truth_(confirm("Delete this todo?"))){
return clotodo_web.api.delete_todo(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo),(function (_){
return clotodo_web.api.get_todos(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(room__$1),(function (todos){
return cljs.core.reset_BANG_(clotodo_web.state.todos,todos);
}));
}));
} else {
return null;
}
});})(todo,s__11954__$2,temp__5823__auto__,room__$1,new_todo_title,new_todo_desc,room))
], null),"X"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)),clotodo_web$views$room$room_page_$_iter__11953(cljs.core.rest(s__11954__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.deref(clotodo_web.state.todos));
})())], null)], null)], null);
});
});

//# sourceMappingURL=clotodo_web.views.room.js.map
