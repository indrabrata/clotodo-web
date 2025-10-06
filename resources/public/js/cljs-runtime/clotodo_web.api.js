goog.provide('clotodo_web.api');
clotodo_web.api.api_url = "http://localhost:3000/api";
clotodo_web.api.signup = (function clotodo_web$api$signup(email,username,password,callback){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic([clotodo_web.api.api_url,"/auth/signup"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"password","password",417022471),password], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),callback,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return cljs.core.reset_BANG_(clotodo_web.state.error,"Signup failed");
})], null)], 0));
});
clotodo_web.api.signin = (function clotodo_web$api$signin(email,password,callback){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic([clotodo_web.api.api_url,"/auth/signin"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"password","password",417022471),password], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),callback,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return cljs.core.reset_BANG_(clotodo_web.state.error,"Invalid credentials");
})], null)], 0));
});

//# sourceMappingURL=clotodo_web.api.js.map
