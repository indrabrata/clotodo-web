goog.provide('clotodo_web.core');
clotodo_web.core.app = (function clotodo_web$core$app(){
var current_page = cljs.core.deref(clotodo_web.state.current_page);
var token = cljs.core.deref(clotodo_web.state.token);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),(((token == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clotodo_web.views.auth.auth_page], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_page,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clotodo_web.views.dashboard.dashboard_page], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clotodo_web.views.dashboard.dashboard_page], null)
))], null);
});
clotodo_web.core.init_BANG_ = (function clotodo_web$core$init_BANG_(){
clotodo_web.router.init_BANG_();

clotodo_web.state.load_token_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clotodo_web.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('clotodo_web.core.init_BANG_', clotodo_web.core.init_BANG_);

//# sourceMappingURL=clotodo_web.core.js.map
