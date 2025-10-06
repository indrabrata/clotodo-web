goog.provide('clotodo_web.api');
clotodo_web.api.api_url = "http://localhost:3000/api";
clotodo_web.api.auth_header = (function clotodo_web$api$auth_header(){
return new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clotodo_web.state.token))].join('')], null);
});
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
clotodo_web.api.get_rooms = (function clotodo_web$api$get_rooms(callback){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([clotodo_web.api.api_url,"/rooms"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"headers","headers",-835030129),clotodo_web.api.auth_header(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),callback,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return cljs.core.reset_BANG_(clotodo_web.state.error,"Failed to load rooms");
})], null)], 0));
});
clotodo_web.api.create_room = (function clotodo_web$api$create_room(name,is_public,callback){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic([clotodo_web.api.api_url,"/rooms"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"headers","headers",-835030129),clotodo_web.api.auth_header(),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"is_public","is_public",-1453727950),is_public], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),callback,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return cljs.core.reset_BANG_(clotodo_web.state.error,"Failed to create room");
})], null)], 0));
});
clotodo_web.api.join_room = (function clotodo_web$api$join_room(access_code,callback){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic([clotodo_web.api.api_url,"/rooms/join"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"headers","headers",-835030129),clotodo_web.api.auth_header(),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"access_code","access_code",1516946670),access_code], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),callback,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return cljs.core.reset_BANG_(clotodo_web.state.error,"Invalid room code");
})], null)], 0));
});

//# sourceMappingURL=clotodo_web.api.js.map
