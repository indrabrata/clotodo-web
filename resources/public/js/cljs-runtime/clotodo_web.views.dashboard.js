goog.provide('clotodo_web.views.dashboard');
clotodo_web.views.dashboard.dashboard_page = (function clotodo_web$views$dashboard$dashboard_page(){
var show_create = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var show_join = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var room_name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var is_public = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var join_code = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
clotodo_web.api.get_rooms((function (p1__22762_SHARP_){
return cljs.core.reset_BANG_(clotodo_web.state.rooms,p1__22762_SHARP_);
}));

return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard","div.dashboard",-1667882405),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.dashboard-header","header.dashboard-header",-1213929505),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-content","div.header-content",1909326772),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.header-title","h1.header-title",1743793029),"Clotodo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-user","div.header-user",-285994971),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Welcome, ",new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clotodo_web.state.user))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-secondary","button.btn-secondary",-407689832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),clotodo_web.state.logout_BANG_], null),"Logout"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-content","div.dashboard-content",-1042357329),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-actions","div.dashboard-actions",-1024360489),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-primary","button.btn-primary",462664968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(show_create,true);
})], null),"+ Create Room"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-secondary","button.btn-secondary",-407689832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(show_join,true);
})], null),"Join Room"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rooms-grid","div.rooms-grid",966115774),((cljs.core.empty_QMARK_(cljs.core.deref(clotodo_web.state.rooms)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.empty-state","div.empty-state",1970626869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No rooms yet. Create one to get started!"], null)], null):(function (){var iter__5503__auto__ = (function clotodo_web$views$dashboard$dashboard_page_$_iter__22774(s__22775){
return (new cljs.core.LazySeq(null,(function (){
var s__22775__$1 = s__22775;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__22775__$1);
if(temp__5823__auto__){
var s__22775__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22775__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__22775__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__22777 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__22776 = (0);
while(true){
if((i__22776 < size__5502__auto__)){
var room = cljs.core._nth(c__5501__auto__,i__22776);
cljs.core.chunk_append(b__22777,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.room-card","div.room-card",-376969732),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__22776,room,c__5501__auto__,size__5502__auto__,b__22777,s__22775__$2,temp__5823__auto__,show_create,show_join,room_name,is_public,join_code){
return (function (){
cljs.core.reset_BANG_(clotodo_web.state.current_room,room);

return cljs.core.reset_BANG_(clotodo_web.state.current_page,new cljs.core.Keyword(null,"room","room",536484922));
});})(i__22776,room,c__5501__auto__,size__5502__auto__,b__22777,s__22775__$2,temp__5823__auto__,show_create,show_join,room_name,is_public,join_code))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.room-name","h3.room-name",1513291031),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(room)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.room-info","div.room-info",2101442209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.room-badge","span.room-badge",-977620630),(cljs.core.truth_(new cljs.core.Keyword(null,"is_public","is_public",-1453727950).cljs$core$IFn$_invoke$arity$1(room))?"Public":"Private")], null),(cljs.core.truth_(new cljs.core.Keyword(null,"is_public","is_public",-1453727950).cljs$core$IFn$_invoke$arity$1(room))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.room-code","span.room-code",-386246486),"Code: ",new cljs.core.Keyword(null,"access_code","access_code",1516946670).cljs$core$IFn$_invoke$arity$1(room)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(room)], null)));

var G__22782 = (i__22776 + (1));
i__22776 = G__22782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22777),clotodo_web$views$dashboard$dashboard_page_$_iter__22774(cljs.core.chunk_rest(s__22775__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22777),null);
}
} else {
var room = cljs.core.first(s__22775__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.room-card","div.room-card",-376969732),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (room,s__22775__$2,temp__5823__auto__,show_create,show_join,room_name,is_public,join_code){
return (function (){
cljs.core.reset_BANG_(clotodo_web.state.current_room,room);

return cljs.core.reset_BANG_(clotodo_web.state.current_page,new cljs.core.Keyword(null,"room","room",536484922));
});})(room,s__22775__$2,temp__5823__auto__,show_create,show_join,room_name,is_public,join_code))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.room-name","h3.room-name",1513291031),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(room)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.room-info","div.room-info",2101442209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.room-badge","span.room-badge",-977620630),(cljs.core.truth_(new cljs.core.Keyword(null,"is_public","is_public",-1453727950).cljs$core$IFn$_invoke$arity$1(room))?"Public":"Private")], null),(cljs.core.truth_(new cljs.core.Keyword(null,"is_public","is_public",-1453727950).cljs$core$IFn$_invoke$arity$1(room))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.room-code","span.room-code",-386246486),"Code: ",new cljs.core.Keyword(null,"access_code","access_code",1516946670).cljs$core$IFn$_invoke$arity$1(room)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(room)], null)),clotodo_web$views$dashboard$dashboard_page_$_iter__22774(cljs.core.rest(s__22775__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.deref(clotodo_web.state.rooms));
})())], null)], null),(cljs.core.truth_(cljs.core.deref(show_create))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal","div.modal",-610985484),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Create New Room"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

return clotodo_web.api.create_room(cljs.core.deref(room_name),cljs.core.deref(is_public),(function (resp){
cljs.core.reset_BANG_(show_create,false);

cljs.core.reset_BANG_(room_name,"");

cljs.core.reset_BANG_(is_public,false);

return clotodo_web.api.get_rooms((function (p1__22766_SHARP_){
return cljs.core.reset_BANG_(clotodo_web.state.rooms,p1__22766_SHARP_);
}));
}));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.modal-input","input.modal-input",-1654541497),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Room Name",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(room_name),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22767_SHARP_){
return cljs.core.reset_BANG_(room_name,p1__22767_SHARP_.target.value);
}),new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.checkbox-label","label.checkbox-label",764222037),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref(is_public),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22768_SHARP_){
return cljs.core.reset_BANG_(is_public,p1__22768_SHARP_.target.checked);
})], null)], null),"Make this room public"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-actions","div.modal-actions",-1876505373),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-primary","button.btn-primary",462664968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Create"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-secondary","button.btn-secondary",-407689832),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(show_create,false);
})], null),"Cancel"], null)], null)], null)], null)], null):null),(cljs.core.truth_(cljs.core.deref(show_join))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal","div.modal",-610985484),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Join Room"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

return clotodo_web.api.join_room(cljs.core.deref(join_code),(function (resp){
cljs.core.reset_BANG_(show_join,false);

cljs.core.reset_BANG_(join_code,"");

return clotodo_web.api.get_rooms((function (p1__22769_SHARP_){
return cljs.core.reset_BANG_(clotodo_web.state.rooms,p1__22769_SHARP_);
}));
}));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.modal-input","input.modal-input",-1654541497),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter Room Code",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(join_code),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22771_SHARP_){
return cljs.core.reset_BANG_(join_code,p1__22771_SHARP_.target.value);
}),new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-actions","div.modal-actions",-1876505373),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-primary","button.btn-primary",462664968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Join"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-secondary","button.btn-secondary",-407689832),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(show_join,false);
})], null),"Cancel"], null)], null)], null)], null)], null):null)], null);
});
});

//# sourceMappingURL=clotodo_web.views.dashboard.js.map
