goog.provide('clotodo_web.views.auth');
clotodo_web.views.auth.auth_page = (function clotodo_web$views$auth$auth_page(){
var is_signin = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var email = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var username = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.auth-container","div.auth-container",-319032841),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.auth-card","div.auth-card",-1909068711),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.auth-title","h1.auth-title",2113118982),"Clotodo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.auth-subtitle","p.auth-subtitle",-1799115445),"Collaborative Todo Management"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.auth-tabs","div.auth-tabs",-1910393890),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.auth-tab","button.auth-tab",302929610),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(is_signin))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(is_signin,true);
})], null),"Sign In"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.auth-tab","button.auth-tab",302929610),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(is_signin))?null:"active"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(is_signin,false);
})], null),"Sign Up"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.auth-form","form.auth-form",1626845298),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

if(cljs.core.truth_(cljs.core.deref(is_signin))){
return clotodo_web.api.signin(cljs.core.deref(email),cljs.core.deref(password),(function (resp){
return clotodo_web.state.save_token_BANG_(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(resp),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(resp));
}));
} else {
return clotodo_web.api.signup(cljs.core.deref(email),cljs.core.deref(username),cljs.core.deref(password),(function (resp){
return clotodo_web.state.save_token_BANG_(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(resp),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(resp));
}));
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.auth-input","input.auth-input",-2136275760),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Email",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(email),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12003_SHARP_){
return cljs.core.reset_BANG_(email,p1__12003_SHARP_.target.value);
}),new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null),(cljs.core.truth_(cljs.core.deref(is_signin))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.auth-input","input.auth-input",-2136275760),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Username",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(username),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12006_SHARP_){
return cljs.core.reset_BANG_(username,p1__12006_SHARP_.target.value);
}),new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.auth-input","input.auth-input",-2136275760),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(password),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12007_SHARP_){
return cljs.core.reset_BANG_(password,p1__12007_SHARP_.target.value);
}),new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.auth-submit","button.auth-submit",-701167618),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),(cljs.core.truth_(cljs.core.deref(is_signin))?"Sign In":"Sign Up")], null)], null),(cljs.core.truth_(cljs.core.deref(clotodo_web.state.error))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.error-message","div.error-message",926006572),cljs.core.deref(clotodo_web.state.error)], null):null)], null)], null);
});
});

//# sourceMappingURL=clotodo_web.views.auth.js.map
