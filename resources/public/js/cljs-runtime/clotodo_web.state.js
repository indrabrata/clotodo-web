goog.provide('clotodo_web.state');
if((typeof clotodo_web !== 'undefined') && (typeof clotodo_web.state !== 'undefined') && (typeof clotodo_web.state.token !== 'undefined')){
} else {
clotodo_web.state.token = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof clotodo_web !== 'undefined') && (typeof clotodo_web.state !== 'undefined') && (typeof clotodo_web.state.user !== 'undefined')){
} else {
clotodo_web.state.user = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof clotodo_web !== 'undefined') && (typeof clotodo_web.state !== 'undefined') && (typeof clotodo_web.state.current_page !== 'undefined')){
} else {
clotodo_web.state.current_page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dashboard","dashboard",-631747508));
}
if((typeof clotodo_web !== 'undefined') && (typeof clotodo_web.state !== 'undefined') && (typeof clotodo_web.state.error !== 'undefined')){
} else {
clotodo_web.state.error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
clotodo_web.state.save_token_BANG_ = (function clotodo_web$state$save_token_BANG_(t,u){
cljs.core.reset_BANG_(clotodo_web.state.token,t);

cljs.core.reset_BANG_(clotodo_web.state.user,u);

localStorage.setItem("token",t);

return localStorage.setItem("user",JSON.stringify(cljs.core.clj__GT_js(u)));
});
clotodo_web.state.load_token_BANG_ = (function clotodo_web$state$load_token_BANG_(){
var temp__5823__auto__ = localStorage.getItem("token");
if(cljs.core.truth_(temp__5823__auto__)){
var t = temp__5823__auto__;
var temp__5823__auto____$1 = localStorage.getItem("user");
if(cljs.core.truth_(temp__5823__auto____$1)){
var u = temp__5823__auto____$1;
cljs.core.reset_BANG_(clotodo_web.state.token,t);

return cljs.core.reset_BANG_(clotodo_web.state.user,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(u),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=clotodo_web.state.js.map
