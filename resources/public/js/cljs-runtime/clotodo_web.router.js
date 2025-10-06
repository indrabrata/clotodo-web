goog.provide('clotodo_web.router');
clotodo_web.router.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, ["",new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),"room/",cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword(null,"room","room",536484922)])], null)], null);
clotodo_web.router.set_page_BANG_ = (function clotodo_web$router$set_page_BANG_(match){
return cljs.core.reset_BANG_(clotodo_web.state.current_page,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(match));
});
clotodo_web.router.history = pushy.core.pushy(clotodo_web.router.set_page_BANG_,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bidi.bidi.match_route,clotodo_web.router.routes));
clotodo_web.router.init_BANG_ = (function clotodo_web$router$init_BANG_(){
return clotodo_web.router.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});

//# sourceMappingURL=clotodo_web.router.js.map
