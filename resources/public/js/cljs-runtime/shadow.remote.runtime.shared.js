goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13892){
var map__13893 = p__13892;
var map__13893__$1 = cljs.core.__destructure_map(map__13893);
var runtime = map__13893__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13893__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5025__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14222 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14222)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13916 = runtime;
var G__13917 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14222);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13916,G__13917) : shadow.remote.runtime.shared.process.call(null,G__13916,G__13917));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13920,res){
var map__13922 = p__13920;
var map__13922__$1 = cljs.core.__destructure_map(map__13922);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13922__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13922__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13923 = res;
var G__13923__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13923,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13923);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13923__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13923__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13945 = arguments.length;
switch (G__13945) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13970,msg,handlers,timeout_after_ms){
var map__13971 = p__13970;
var map__13971__$1 = cljs.core.__destructure_map(map__13971);
var runtime = map__13971__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13971__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___14261 = arguments.length;
var i__5750__auto___14264 = (0);
while(true){
if((i__5750__auto___14264 < len__5749__auto___14261)){
args__5755__auto__.push((arguments[i__5750__auto___14264]));

var G__14265 = (i__5750__auto___14264 + (1));
i__5750__auto___14264 = G__14265;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14011,ev,args){
var map__14012 = p__14011;
var map__14012__$1 = cljs.core.__destructure_map(map__14012);
var runtime = map__14012__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14012__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14013 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14016 = null;
var count__14017 = (0);
var i__14018 = (0);
while(true){
if((i__14018 < count__14017)){
var ext = chunk__14016.cljs$core$IIndexed$_nth$arity$2(null,i__14018);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14273 = seq__14013;
var G__14274 = chunk__14016;
var G__14275 = count__14017;
var G__14276 = (i__14018 + (1));
seq__14013 = G__14273;
chunk__14016 = G__14274;
count__14017 = G__14275;
i__14018 = G__14276;
continue;
} else {
var G__14278 = seq__14013;
var G__14279 = chunk__14016;
var G__14280 = count__14017;
var G__14281 = (i__14018 + (1));
seq__14013 = G__14278;
chunk__14016 = G__14279;
count__14017 = G__14280;
i__14018 = G__14281;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14013);
if(temp__5823__auto__){
var seq__14013__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14013__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__14013__$1);
var G__14284 = cljs.core.chunk_rest(seq__14013__$1);
var G__14285 = c__5548__auto__;
var G__14286 = cljs.core.count(c__5548__auto__);
var G__14287 = (0);
seq__14013 = G__14284;
chunk__14016 = G__14285;
count__14017 = G__14286;
i__14018 = G__14287;
continue;
} else {
var ext = cljs.core.first(seq__14013__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14294 = cljs.core.next(seq__14013__$1);
var G__14295 = null;
var G__14296 = (0);
var G__14297 = (0);
seq__14013 = G__14294;
chunk__14016 = G__14295;
count__14017 = G__14296;
i__14018 = G__14297;
continue;
} else {
var G__14298 = cljs.core.next(seq__14013__$1);
var G__14299 = null;
var G__14300 = (0);
var G__14301 = (0);
seq__14013 = G__14298;
chunk__14016 = G__14299;
count__14017 = G__14300;
i__14018 = G__14301;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13980){
var G__13981 = cljs.core.first(seq13980);
var seq13980__$1 = cljs.core.next(seq13980);
var G__13982 = cljs.core.first(seq13980__$1);
var seq13980__$2 = cljs.core.next(seq13980__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13981,G__13982,seq13980__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14076,p__14077){
var map__14078 = p__14076;
var map__14078__$1 = cljs.core.__destructure_map(map__14078);
var runtime = map__14078__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14078__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14079 = p__14077;
var map__14079__$1 = cljs.core.__destructure_map(map__14079);
var msg = map__14079__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14079__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14090 = cljs.core.deref(state_ref);
var map__14090__$1 = cljs.core.__destructure_map(map__14090);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14090__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14090__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14107,msg){
var map__14108 = p__14107;
var map__14108__$1 = cljs.core.__destructure_map(map__14108);
var runtime = map__14108__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14108__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14124,key,p__14125){
var map__14127 = p__14124;
var map__14127__$1 = cljs.core.__destructure_map(map__14127);
var state = map__14127__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14127__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14128 = p__14125;
var map__14128__$1 = cljs.core.__destructure_map(map__14128);
var spec = map__14128__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14128__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14128__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14139,key,spec){
var map__14143 = p__14139;
var map__14143__$1 = cljs.core.__destructure_map(map__14143);
var runtime = map__14143__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14143__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___14375 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___14375 == null)){
} else {
var on_welcome_14381 = temp__5827__auto___14375;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14381.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14381.cljs$core$IFn$_invoke$arity$0() : on_welcome_14381.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14149_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14149_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14150_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14150_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14151_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14151_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14152_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14152_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14154_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14154_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14167,key){
var map__14168 = p__14167;
var map__14168__$1 = cljs.core.__destructure_map(map__14168);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14168__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14175,msg){
var map__14176 = p__14175;
var map__14176__$1 = cljs.core.__destructure_map(map__14176);
var runtime = map__14176__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14176__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14179,p__14180){
var map__14181 = p__14179;
var map__14181__$1 = cljs.core.__destructure_map(map__14181);
var runtime = map__14181__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14181__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14182 = p__14180;
var map__14182__$1 = cljs.core.__destructure_map(map__14182);
var msg = map__14182__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14182__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14182__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14192 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14194 = null;
var count__14195 = (0);
var i__14196 = (0);
while(true){
if((i__14196 < count__14195)){
var map__14205 = chunk__14194.cljs$core$IIndexed$_nth$arity$2(null,i__14196);
var map__14205__$1 = cljs.core.__destructure_map(map__14205);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14205__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14463 = seq__14192;
var G__14464 = chunk__14194;
var G__14465 = count__14195;
var G__14466 = (i__14196 + (1));
seq__14192 = G__14463;
chunk__14194 = G__14464;
count__14195 = G__14465;
i__14196 = G__14466;
continue;
} else {
var G__14475 = seq__14192;
var G__14476 = chunk__14194;
var G__14477 = count__14195;
var G__14478 = (i__14196 + (1));
seq__14192 = G__14475;
chunk__14194 = G__14476;
count__14195 = G__14477;
i__14196 = G__14478;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14192);
if(temp__5823__auto__){
var seq__14192__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14192__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__14192__$1);
var G__14482 = cljs.core.chunk_rest(seq__14192__$1);
var G__14483 = c__5548__auto__;
var G__14484 = cljs.core.count(c__5548__auto__);
var G__14485 = (0);
seq__14192 = G__14482;
chunk__14194 = G__14483;
count__14195 = G__14484;
i__14196 = G__14485;
continue;
} else {
var map__14207 = cljs.core.first(seq__14192__$1);
var map__14207__$1 = cljs.core.__destructure_map(map__14207);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14207__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14489 = cljs.core.next(seq__14192__$1);
var G__14490 = null;
var G__14491 = (0);
var G__14492 = (0);
seq__14192 = G__14489;
chunk__14194 = G__14490;
count__14195 = G__14491;
i__14196 = G__14492;
continue;
} else {
var G__14493 = cljs.core.next(seq__14192__$1);
var G__14494 = null;
var G__14495 = (0);
var G__14496 = (0);
seq__14192 = G__14493;
chunk__14194 = G__14494;
count__14195 = G__14495;
i__14196 = G__14496;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
