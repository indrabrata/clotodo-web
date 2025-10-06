goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21946 = arguments.length;
var i__5750__auto___21947 = (0);
while(true){
if((i__5750__auto___21947 < len__5749__auto___21946)){
args__5755__auto__.push((arguments[i__5750__auto___21947]));

var G__21948 = (i__5750__auto___21947 + (1));
i__5750__auto___21947 = G__21948;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21252){
var G__21253 = cljs.core.first(seq21252);
var seq21252__$1 = cljs.core.next(seq21252);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21253,seq21252__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21263 = cljs.core.seq(sources);
var chunk__21264 = null;
var count__21265 = (0);
var i__21266 = (0);
while(true){
if((i__21266 < count__21265)){
var map__21279 = chunk__21264.cljs$core$IIndexed$_nth$arity$2(null,i__21266);
var map__21279__$1 = cljs.core.__destructure_map(map__21279);
var src = map__21279__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21279__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21279__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21279__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21279__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21282){var e_21950 = e21282;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21950);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21950.message)].join('')));
}

var G__21955 = seq__21263;
var G__21956 = chunk__21264;
var G__21957 = count__21265;
var G__21958 = (i__21266 + (1));
seq__21263 = G__21955;
chunk__21264 = G__21956;
count__21265 = G__21957;
i__21266 = G__21958;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21263);
if(temp__5823__auto__){
var seq__21263__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21263__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__21263__$1);
var G__21960 = cljs.core.chunk_rest(seq__21263__$1);
var G__21961 = c__5548__auto__;
var G__21962 = cljs.core.count(c__5548__auto__);
var G__21963 = (0);
seq__21263 = G__21960;
chunk__21264 = G__21961;
count__21265 = G__21962;
i__21266 = G__21963;
continue;
} else {
var map__21284 = cljs.core.first(seq__21263__$1);
var map__21284__$1 = cljs.core.__destructure_map(map__21284);
var src = map__21284__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21284__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21284__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21284__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21284__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21289){var e_21965 = e21289;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21965);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21965.message)].join('')));
}

var G__21966 = cljs.core.next(seq__21263__$1);
var G__21967 = null;
var G__21968 = (0);
var G__21969 = (0);
seq__21263 = G__21966;
chunk__21264 = G__21967;
count__21265 = G__21968;
i__21266 = G__21969;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21320 = cljs.core.seq(js_requires);
var chunk__21321 = null;
var count__21322 = (0);
var i__21323 = (0);
while(true){
if((i__21323 < count__21322)){
var js_ns = chunk__21321.cljs$core$IIndexed$_nth$arity$2(null,i__21323);
var require_str_21974 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21974);


var G__21975 = seq__21320;
var G__21976 = chunk__21321;
var G__21977 = count__21322;
var G__21978 = (i__21323 + (1));
seq__21320 = G__21975;
chunk__21321 = G__21976;
count__21322 = G__21977;
i__21323 = G__21978;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21320);
if(temp__5823__auto__){
var seq__21320__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21320__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__21320__$1);
var G__21979 = cljs.core.chunk_rest(seq__21320__$1);
var G__21980 = c__5548__auto__;
var G__21981 = cljs.core.count(c__5548__auto__);
var G__21982 = (0);
seq__21320 = G__21979;
chunk__21321 = G__21980;
count__21322 = G__21981;
i__21323 = G__21982;
continue;
} else {
var js_ns = cljs.core.first(seq__21320__$1);
var require_str_21983 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21983);


var G__21984 = cljs.core.next(seq__21320__$1);
var G__21985 = null;
var G__21986 = (0);
var G__21987 = (0);
seq__21320 = G__21984;
chunk__21321 = G__21985;
count__21322 = G__21986;
i__21323 = G__21987;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21355){
var map__21357 = p__21355;
var map__21357__$1 = cljs.core.__destructure_map(map__21357);
var msg = map__21357__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21357__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21357__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21364(s__21365){
return (new cljs.core.LazySeq(null,(function (){
var s__21365__$1 = s__21365;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__21365__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__21370 = cljs.core.first(xs__6383__auto__);
var map__21370__$1 = cljs.core.__destructure_map(map__21370);
var src = map__21370__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21370__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21370__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5499__auto__ = ((function (s__21365__$1,map__21370,map__21370__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21357,map__21357__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21364_$_iter__21366(s__21367){
return (new cljs.core.LazySeq(null,((function (s__21365__$1,map__21370,map__21370__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21357,map__21357__$1,msg,info,reload_info){
return (function (){
var s__21367__$1 = s__21367;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__21367__$1);
if(temp__5823__auto____$1){
var s__21367__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21367__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__21367__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__21369 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__21368 = (0);
while(true){
if((i__21368 < size__5502__auto__)){
var warning = cljs.core._nth(c__5501__auto__,i__21368);
cljs.core.chunk_append(b__21369,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21989 = (i__21368 + (1));
i__21368 = G__21989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21369),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21364_$_iter__21366(cljs.core.chunk_rest(s__21367__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21369),null);
}
} else {
var warning = cljs.core.first(s__21367__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21364_$_iter__21366(cljs.core.rest(s__21367__$2)));
}
} else {
return null;
}
break;
}
});})(s__21365__$1,map__21370,map__21370__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21357,map__21357__$1,msg,info,reload_info))
,null,null));
});})(s__21365__$1,map__21370,map__21370__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21357,map__21357__$1,msg,info,reload_info))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(warnings));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21364(cljs.core.rest(s__21365__$1)));
} else {
var G__21991 = cljs.core.rest(s__21365__$1);
s__21365__$1 = G__21991;
continue;
}
} else {
var G__21992 = cljs.core.rest(s__21365__$1);
s__21365__$1 = G__21992;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21371_21993 = cljs.core.seq(warnings);
var chunk__21372_21994 = null;
var count__21373_21995 = (0);
var i__21374_21996 = (0);
while(true){
if((i__21374_21996 < count__21373_21995)){
var map__21378_21997 = chunk__21372_21994.cljs$core$IIndexed$_nth$arity$2(null,i__21374_21996);
var map__21378_21998__$1 = cljs.core.__destructure_map(map__21378_21997);
var w_21999 = map__21378_21998__$1;
var msg_22000__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378_21998__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378_21998__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378_21998__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378_21998__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22003)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22001),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22002),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22000__$1)].join(''));


var G__22004 = seq__21371_21993;
var G__22005 = chunk__21372_21994;
var G__22006 = count__21373_21995;
var G__22007 = (i__21374_21996 + (1));
seq__21371_21993 = G__22004;
chunk__21372_21994 = G__22005;
count__21373_21995 = G__22006;
i__21374_21996 = G__22007;
continue;
} else {
var temp__5823__auto___22008 = cljs.core.seq(seq__21371_21993);
if(temp__5823__auto___22008){
var seq__21371_22009__$1 = temp__5823__auto___22008;
if(cljs.core.chunked_seq_QMARK_(seq__21371_22009__$1)){
var c__5548__auto___22010 = cljs.core.chunk_first(seq__21371_22009__$1);
var G__22011 = cljs.core.chunk_rest(seq__21371_22009__$1);
var G__22012 = c__5548__auto___22010;
var G__22013 = cljs.core.count(c__5548__auto___22010);
var G__22014 = (0);
seq__21371_21993 = G__22011;
chunk__21372_21994 = G__22012;
count__21373_21995 = G__22013;
i__21374_21996 = G__22014;
continue;
} else {
var map__21379_22015 = cljs.core.first(seq__21371_22009__$1);
var map__21379_22016__$1 = cljs.core.__destructure_map(map__21379_22015);
var w_22017 = map__21379_22016__$1;
var msg_22018__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21379_22016__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21379_22016__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21379_22016__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21379_22016__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22021)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22019),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22020),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22018__$1)].join(''));


var G__22023 = cljs.core.next(seq__21371_22009__$1);
var G__22024 = null;
var G__22025 = (0);
var G__22026 = (0);
seq__21371_21993 = G__22023;
chunk__21372_21994 = G__22024;
count__21373_21995 = G__22025;
i__21374_21996 = G__22026;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21354_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21354_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5023__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21381 = node_uri;
G__21381.setQuery(null);

G__21381.setPath(new$);

return G__21381;
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21382){
var map__21383 = p__21382;
var map__21383__$1 = cljs.core.__destructure_map(map__21383);
var msg = map__21383__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21383__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21383__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21384 = cljs.core.seq(updates);
var chunk__21386 = null;
var count__21387 = (0);
var i__21388 = (0);
while(true){
if((i__21388 < count__21387)){
var path = chunk__21386.cljs$core$IIndexed$_nth$arity$2(null,i__21388);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21566_22037 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21570_22038 = null;
var count__21571_22039 = (0);
var i__21572_22040 = (0);
while(true){
if((i__21572_22040 < count__21571_22039)){
var node_22044 = chunk__21570_22038.cljs$core$IIndexed$_nth$arity$2(null,i__21572_22040);
if(cljs.core.not(node_22044.shadow$old)){
var path_match_22045 = shadow.cljs.devtools.client.browser.match_paths(node_22044.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22045)){
var new_link_22047 = (function (){var G__21638 = node_22044.cloneNode(true);
G__21638.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22045),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21638;
})();
(node_22044.shadow$old = true);

(new_link_22047.onload = ((function (seq__21566_22037,chunk__21570_22038,count__21571_22039,i__21572_22040,seq__21384,chunk__21386,count__21387,i__21388,new_link_22047,path_match_22045,node_22044,path,map__21383,map__21383__$1,msg,updates,reload_info){
return (function (e){
var seq__21639_22048 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21641_22049 = null;
var count__21642_22050 = (0);
var i__21643_22051 = (0);
while(true){
if((i__21643_22051 < count__21642_22050)){
var map__21650_22056 = chunk__21641_22049.cljs$core$IIndexed$_nth$arity$2(null,i__21643_22051);
var map__21650_22057__$1 = cljs.core.__destructure_map(map__21650_22056);
var task_22058 = map__21650_22057__$1;
var fn_str_22059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21650_22057__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21650_22057__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22061 = goog.getObjectByName(fn_str_22059,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22060)].join(''));

(fn_obj_22061.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22061.cljs$core$IFn$_invoke$arity$2(path,new_link_22047) : fn_obj_22061.call(null,path,new_link_22047));


var G__22062 = seq__21639_22048;
var G__22063 = chunk__21641_22049;
var G__22064 = count__21642_22050;
var G__22065 = (i__21643_22051 + (1));
seq__21639_22048 = G__22062;
chunk__21641_22049 = G__22063;
count__21642_22050 = G__22064;
i__21643_22051 = G__22065;
continue;
} else {
var temp__5823__auto___22066 = cljs.core.seq(seq__21639_22048);
if(temp__5823__auto___22066){
var seq__21639_22067__$1 = temp__5823__auto___22066;
if(cljs.core.chunked_seq_QMARK_(seq__21639_22067__$1)){
var c__5548__auto___22068 = cljs.core.chunk_first(seq__21639_22067__$1);
var G__22069 = cljs.core.chunk_rest(seq__21639_22067__$1);
var G__22070 = c__5548__auto___22068;
var G__22071 = cljs.core.count(c__5548__auto___22068);
var G__22072 = (0);
seq__21639_22048 = G__22069;
chunk__21641_22049 = G__22070;
count__21642_22050 = G__22071;
i__21643_22051 = G__22072;
continue;
} else {
var map__21652_22077 = cljs.core.first(seq__21639_22067__$1);
var map__21652_22078__$1 = cljs.core.__destructure_map(map__21652_22077);
var task_22079 = map__21652_22078__$1;
var fn_str_22080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21652_22078__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21652_22078__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22082 = goog.getObjectByName(fn_str_22080,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22081)].join(''));

(fn_obj_22082.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22082.cljs$core$IFn$_invoke$arity$2(path,new_link_22047) : fn_obj_22082.call(null,path,new_link_22047));


var G__22084 = cljs.core.next(seq__21639_22067__$1);
var G__22085 = null;
var G__22086 = (0);
var G__22087 = (0);
seq__21639_22048 = G__22084;
chunk__21641_22049 = G__22085;
count__21642_22050 = G__22086;
i__21643_22051 = G__22087;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22044);
});})(seq__21566_22037,chunk__21570_22038,count__21571_22039,i__21572_22040,seq__21384,chunk__21386,count__21387,i__21388,new_link_22047,path_match_22045,node_22044,path,map__21383,map__21383__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22045], 0));

goog.dom.insertSiblingAfter(new_link_22047,node_22044);


var G__22089 = seq__21566_22037;
var G__22090 = chunk__21570_22038;
var G__22091 = count__21571_22039;
var G__22092 = (i__21572_22040 + (1));
seq__21566_22037 = G__22089;
chunk__21570_22038 = G__22090;
count__21571_22039 = G__22091;
i__21572_22040 = G__22092;
continue;
} else {
var G__22093 = seq__21566_22037;
var G__22094 = chunk__21570_22038;
var G__22095 = count__21571_22039;
var G__22096 = (i__21572_22040 + (1));
seq__21566_22037 = G__22093;
chunk__21570_22038 = G__22094;
count__21571_22039 = G__22095;
i__21572_22040 = G__22096;
continue;
}
} else {
var G__22100 = seq__21566_22037;
var G__22101 = chunk__21570_22038;
var G__22102 = count__21571_22039;
var G__22103 = (i__21572_22040 + (1));
seq__21566_22037 = G__22100;
chunk__21570_22038 = G__22101;
count__21571_22039 = G__22102;
i__21572_22040 = G__22103;
continue;
}
} else {
var temp__5823__auto___22104 = cljs.core.seq(seq__21566_22037);
if(temp__5823__auto___22104){
var seq__21566_22105__$1 = temp__5823__auto___22104;
if(cljs.core.chunked_seq_QMARK_(seq__21566_22105__$1)){
var c__5548__auto___22106 = cljs.core.chunk_first(seq__21566_22105__$1);
var G__22107 = cljs.core.chunk_rest(seq__21566_22105__$1);
var G__22108 = c__5548__auto___22106;
var G__22109 = cljs.core.count(c__5548__auto___22106);
var G__22110 = (0);
seq__21566_22037 = G__22107;
chunk__21570_22038 = G__22108;
count__21571_22039 = G__22109;
i__21572_22040 = G__22110;
continue;
} else {
var node_22111 = cljs.core.first(seq__21566_22105__$1);
if(cljs.core.not(node_22111.shadow$old)){
var path_match_22112 = shadow.cljs.devtools.client.browser.match_paths(node_22111.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22112)){
var new_link_22113 = (function (){var G__21657 = node_22111.cloneNode(true);
G__21657.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22112),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21657;
})();
(node_22111.shadow$old = true);

(new_link_22113.onload = ((function (seq__21566_22037,chunk__21570_22038,count__21571_22039,i__21572_22040,seq__21384,chunk__21386,count__21387,i__21388,new_link_22113,path_match_22112,node_22111,seq__21566_22105__$1,temp__5823__auto___22104,path,map__21383,map__21383__$1,msg,updates,reload_info){
return (function (e){
var seq__21662_22114 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21664_22115 = null;
var count__21665_22116 = (0);
var i__21666_22117 = (0);
while(true){
if((i__21666_22117 < count__21665_22116)){
var map__21673_22118 = chunk__21664_22115.cljs$core$IIndexed$_nth$arity$2(null,i__21666_22117);
var map__21673_22119__$1 = cljs.core.__destructure_map(map__21673_22118);
var task_22120 = map__21673_22119__$1;
var fn_str_22121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21673_22119__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21673_22119__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22123 = goog.getObjectByName(fn_str_22121,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22122)].join(''));

(fn_obj_22123.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22123.cljs$core$IFn$_invoke$arity$2(path,new_link_22113) : fn_obj_22123.call(null,path,new_link_22113));


var G__22124 = seq__21662_22114;
var G__22125 = chunk__21664_22115;
var G__22126 = count__21665_22116;
var G__22127 = (i__21666_22117 + (1));
seq__21662_22114 = G__22124;
chunk__21664_22115 = G__22125;
count__21665_22116 = G__22126;
i__21666_22117 = G__22127;
continue;
} else {
var temp__5823__auto___22128__$1 = cljs.core.seq(seq__21662_22114);
if(temp__5823__auto___22128__$1){
var seq__21662_22129__$1 = temp__5823__auto___22128__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21662_22129__$1)){
var c__5548__auto___22130 = cljs.core.chunk_first(seq__21662_22129__$1);
var G__22131 = cljs.core.chunk_rest(seq__21662_22129__$1);
var G__22132 = c__5548__auto___22130;
var G__22133 = cljs.core.count(c__5548__auto___22130);
var G__22134 = (0);
seq__21662_22114 = G__22131;
chunk__21664_22115 = G__22132;
count__21665_22116 = G__22133;
i__21666_22117 = G__22134;
continue;
} else {
var map__21675_22138 = cljs.core.first(seq__21662_22129__$1);
var map__21675_22139__$1 = cljs.core.__destructure_map(map__21675_22138);
var task_22140 = map__21675_22139__$1;
var fn_str_22141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21675_22139__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21675_22139__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22143 = goog.getObjectByName(fn_str_22141,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22142)].join(''));

(fn_obj_22143.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22143.cljs$core$IFn$_invoke$arity$2(path,new_link_22113) : fn_obj_22143.call(null,path,new_link_22113));


var G__22144 = cljs.core.next(seq__21662_22129__$1);
var G__22145 = null;
var G__22146 = (0);
var G__22147 = (0);
seq__21662_22114 = G__22144;
chunk__21664_22115 = G__22145;
count__21665_22116 = G__22146;
i__21666_22117 = G__22147;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22111);
});})(seq__21566_22037,chunk__21570_22038,count__21571_22039,i__21572_22040,seq__21384,chunk__21386,count__21387,i__21388,new_link_22113,path_match_22112,node_22111,seq__21566_22105__$1,temp__5823__auto___22104,path,map__21383,map__21383__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22112], 0));

goog.dom.insertSiblingAfter(new_link_22113,node_22111);


var G__22148 = cljs.core.next(seq__21566_22105__$1);
var G__22149 = null;
var G__22150 = (0);
var G__22151 = (0);
seq__21566_22037 = G__22148;
chunk__21570_22038 = G__22149;
count__21571_22039 = G__22150;
i__21572_22040 = G__22151;
continue;
} else {
var G__22152 = cljs.core.next(seq__21566_22105__$1);
var G__22153 = null;
var G__22154 = (0);
var G__22155 = (0);
seq__21566_22037 = G__22152;
chunk__21570_22038 = G__22153;
count__21571_22039 = G__22154;
i__21572_22040 = G__22155;
continue;
}
} else {
var G__22156 = cljs.core.next(seq__21566_22105__$1);
var G__22157 = null;
var G__22158 = (0);
var G__22159 = (0);
seq__21566_22037 = G__22156;
chunk__21570_22038 = G__22157;
count__21571_22039 = G__22158;
i__21572_22040 = G__22159;
continue;
}
}
} else {
}
}
break;
}


var G__22160 = seq__21384;
var G__22161 = chunk__21386;
var G__22162 = count__21387;
var G__22163 = (i__21388 + (1));
seq__21384 = G__22160;
chunk__21386 = G__22161;
count__21387 = G__22162;
i__21388 = G__22163;
continue;
} else {
var G__22164 = seq__21384;
var G__22165 = chunk__21386;
var G__22166 = count__21387;
var G__22167 = (i__21388 + (1));
seq__21384 = G__22164;
chunk__21386 = G__22165;
count__21387 = G__22166;
i__21388 = G__22167;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21384);
if(temp__5823__auto__){
var seq__21384__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21384__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__21384__$1);
var G__22168 = cljs.core.chunk_rest(seq__21384__$1);
var G__22169 = c__5548__auto__;
var G__22170 = cljs.core.count(c__5548__auto__);
var G__22171 = (0);
seq__21384 = G__22168;
chunk__21386 = G__22169;
count__21387 = G__22170;
i__21388 = G__22171;
continue;
} else {
var path = cljs.core.first(seq__21384__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21684_22173 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21688_22174 = null;
var count__21689_22175 = (0);
var i__21690_22176 = (0);
while(true){
if((i__21690_22176 < count__21689_22175)){
var node_22177 = chunk__21688_22174.cljs$core$IIndexed$_nth$arity$2(null,i__21690_22176);
if(cljs.core.not(node_22177.shadow$old)){
var path_match_22178 = shadow.cljs.devtools.client.browser.match_paths(node_22177.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22178)){
var new_link_22179 = (function (){var G__21792 = node_22177.cloneNode(true);
G__21792.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22178),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21792;
})();
(node_22177.shadow$old = true);

(new_link_22179.onload = ((function (seq__21684_22173,chunk__21688_22174,count__21689_22175,i__21690_22176,seq__21384,chunk__21386,count__21387,i__21388,new_link_22179,path_match_22178,node_22177,path,seq__21384__$1,temp__5823__auto__,map__21383,map__21383__$1,msg,updates,reload_info){
return (function (e){
var seq__21800_22180 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21802_22181 = null;
var count__21803_22182 = (0);
var i__21804_22183 = (0);
while(true){
if((i__21804_22183 < count__21803_22182)){
var map__21818_22185 = chunk__21802_22181.cljs$core$IIndexed$_nth$arity$2(null,i__21804_22183);
var map__21818_22186__$1 = cljs.core.__destructure_map(map__21818_22185);
var task_22187 = map__21818_22186__$1;
var fn_str_22188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21818_22186__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21818_22186__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22190 = goog.getObjectByName(fn_str_22188,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22189)].join(''));

(fn_obj_22190.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22190.cljs$core$IFn$_invoke$arity$2(path,new_link_22179) : fn_obj_22190.call(null,path,new_link_22179));


var G__22191 = seq__21800_22180;
var G__22192 = chunk__21802_22181;
var G__22193 = count__21803_22182;
var G__22194 = (i__21804_22183 + (1));
seq__21800_22180 = G__22191;
chunk__21802_22181 = G__22192;
count__21803_22182 = G__22193;
i__21804_22183 = G__22194;
continue;
} else {
var temp__5823__auto___22195__$1 = cljs.core.seq(seq__21800_22180);
if(temp__5823__auto___22195__$1){
var seq__21800_22196__$1 = temp__5823__auto___22195__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21800_22196__$1)){
var c__5548__auto___22198 = cljs.core.chunk_first(seq__21800_22196__$1);
var G__22199 = cljs.core.chunk_rest(seq__21800_22196__$1);
var G__22200 = c__5548__auto___22198;
var G__22201 = cljs.core.count(c__5548__auto___22198);
var G__22202 = (0);
seq__21800_22180 = G__22199;
chunk__21802_22181 = G__22200;
count__21803_22182 = G__22201;
i__21804_22183 = G__22202;
continue;
} else {
var map__21824_22203 = cljs.core.first(seq__21800_22196__$1);
var map__21824_22204__$1 = cljs.core.__destructure_map(map__21824_22203);
var task_22205 = map__21824_22204__$1;
var fn_str_22206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21824_22204__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21824_22204__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22208 = goog.getObjectByName(fn_str_22206,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22207)].join(''));

(fn_obj_22208.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22208.cljs$core$IFn$_invoke$arity$2(path,new_link_22179) : fn_obj_22208.call(null,path,new_link_22179));


var G__22210 = cljs.core.next(seq__21800_22196__$1);
var G__22211 = null;
var G__22212 = (0);
var G__22213 = (0);
seq__21800_22180 = G__22210;
chunk__21802_22181 = G__22211;
count__21803_22182 = G__22212;
i__21804_22183 = G__22213;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22177);
});})(seq__21684_22173,chunk__21688_22174,count__21689_22175,i__21690_22176,seq__21384,chunk__21386,count__21387,i__21388,new_link_22179,path_match_22178,node_22177,path,seq__21384__$1,temp__5823__auto__,map__21383,map__21383__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22178], 0));

goog.dom.insertSiblingAfter(new_link_22179,node_22177);


var G__22216 = seq__21684_22173;
var G__22217 = chunk__21688_22174;
var G__22218 = count__21689_22175;
var G__22219 = (i__21690_22176 + (1));
seq__21684_22173 = G__22216;
chunk__21688_22174 = G__22217;
count__21689_22175 = G__22218;
i__21690_22176 = G__22219;
continue;
} else {
var G__22220 = seq__21684_22173;
var G__22221 = chunk__21688_22174;
var G__22222 = count__21689_22175;
var G__22223 = (i__21690_22176 + (1));
seq__21684_22173 = G__22220;
chunk__21688_22174 = G__22221;
count__21689_22175 = G__22222;
i__21690_22176 = G__22223;
continue;
}
} else {
var G__22224 = seq__21684_22173;
var G__22225 = chunk__21688_22174;
var G__22226 = count__21689_22175;
var G__22227 = (i__21690_22176 + (1));
seq__21684_22173 = G__22224;
chunk__21688_22174 = G__22225;
count__21689_22175 = G__22226;
i__21690_22176 = G__22227;
continue;
}
} else {
var temp__5823__auto___22228__$1 = cljs.core.seq(seq__21684_22173);
if(temp__5823__auto___22228__$1){
var seq__21684_22229__$1 = temp__5823__auto___22228__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21684_22229__$1)){
var c__5548__auto___22230 = cljs.core.chunk_first(seq__21684_22229__$1);
var G__22231 = cljs.core.chunk_rest(seq__21684_22229__$1);
var G__22232 = c__5548__auto___22230;
var G__22233 = cljs.core.count(c__5548__auto___22230);
var G__22234 = (0);
seq__21684_22173 = G__22231;
chunk__21688_22174 = G__22232;
count__21689_22175 = G__22233;
i__21690_22176 = G__22234;
continue;
} else {
var node_22235 = cljs.core.first(seq__21684_22229__$1);
if(cljs.core.not(node_22235.shadow$old)){
var path_match_22236 = shadow.cljs.devtools.client.browser.match_paths(node_22235.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22236)){
var new_link_22237 = (function (){var G__21838 = node_22235.cloneNode(true);
G__21838.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22236),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21838;
})();
(node_22235.shadow$old = true);

(new_link_22237.onload = ((function (seq__21684_22173,chunk__21688_22174,count__21689_22175,i__21690_22176,seq__21384,chunk__21386,count__21387,i__21388,new_link_22237,path_match_22236,node_22235,seq__21684_22229__$1,temp__5823__auto___22228__$1,path,seq__21384__$1,temp__5823__auto__,map__21383,map__21383__$1,msg,updates,reload_info){
return (function (e){
var seq__21840_22246 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21842_22247 = null;
var count__21843_22248 = (0);
var i__21844_22249 = (0);
while(true){
if((i__21844_22249 < count__21843_22248)){
var map__21856_22255 = chunk__21842_22247.cljs$core$IIndexed$_nth$arity$2(null,i__21844_22249);
var map__21856_22256__$1 = cljs.core.__destructure_map(map__21856_22255);
var task_22257 = map__21856_22256__$1;
var fn_str_22258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21856_22256__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21856_22256__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22266 = goog.getObjectByName(fn_str_22258,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22259)].join(''));

(fn_obj_22266.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22266.cljs$core$IFn$_invoke$arity$2(path,new_link_22237) : fn_obj_22266.call(null,path,new_link_22237));


var G__22270 = seq__21840_22246;
var G__22271 = chunk__21842_22247;
var G__22272 = count__21843_22248;
var G__22273 = (i__21844_22249 + (1));
seq__21840_22246 = G__22270;
chunk__21842_22247 = G__22271;
count__21843_22248 = G__22272;
i__21844_22249 = G__22273;
continue;
} else {
var temp__5823__auto___22274__$2 = cljs.core.seq(seq__21840_22246);
if(temp__5823__auto___22274__$2){
var seq__21840_22279__$1 = temp__5823__auto___22274__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21840_22279__$1)){
var c__5548__auto___22280 = cljs.core.chunk_first(seq__21840_22279__$1);
var G__22281 = cljs.core.chunk_rest(seq__21840_22279__$1);
var G__22282 = c__5548__auto___22280;
var G__22283 = cljs.core.count(c__5548__auto___22280);
var G__22284 = (0);
seq__21840_22246 = G__22281;
chunk__21842_22247 = G__22282;
count__21843_22248 = G__22283;
i__21844_22249 = G__22284;
continue;
} else {
var map__21860_22285 = cljs.core.first(seq__21840_22279__$1);
var map__21860_22286__$1 = cljs.core.__destructure_map(map__21860_22285);
var task_22287 = map__21860_22286__$1;
var fn_str_22288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21860_22286__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21860_22286__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22291 = goog.getObjectByName(fn_str_22288,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22289)].join(''));

(fn_obj_22291.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22291.cljs$core$IFn$_invoke$arity$2(path,new_link_22237) : fn_obj_22291.call(null,path,new_link_22237));


var G__22292 = cljs.core.next(seq__21840_22279__$1);
var G__22293 = null;
var G__22294 = (0);
var G__22295 = (0);
seq__21840_22246 = G__22292;
chunk__21842_22247 = G__22293;
count__21843_22248 = G__22294;
i__21844_22249 = G__22295;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22235);
});})(seq__21684_22173,chunk__21688_22174,count__21689_22175,i__21690_22176,seq__21384,chunk__21386,count__21387,i__21388,new_link_22237,path_match_22236,node_22235,seq__21684_22229__$1,temp__5823__auto___22228__$1,path,seq__21384__$1,temp__5823__auto__,map__21383,map__21383__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22236], 0));

goog.dom.insertSiblingAfter(new_link_22237,node_22235);


var G__22296 = cljs.core.next(seq__21684_22229__$1);
var G__22297 = null;
var G__22298 = (0);
var G__22299 = (0);
seq__21684_22173 = G__22296;
chunk__21688_22174 = G__22297;
count__21689_22175 = G__22298;
i__21690_22176 = G__22299;
continue;
} else {
var G__22300 = cljs.core.next(seq__21684_22229__$1);
var G__22301 = null;
var G__22302 = (0);
var G__22303 = (0);
seq__21684_22173 = G__22300;
chunk__21688_22174 = G__22301;
count__21689_22175 = G__22302;
i__21690_22176 = G__22303;
continue;
}
} else {
var G__22304 = cljs.core.next(seq__21684_22229__$1);
var G__22305 = null;
var G__22306 = (0);
var G__22307 = (0);
seq__21684_22173 = G__22304;
chunk__21688_22174 = G__22305;
count__21689_22175 = G__22306;
i__21690_22176 = G__22307;
continue;
}
}
} else {
}
}
break;
}


var G__22308 = cljs.core.next(seq__21384__$1);
var G__22309 = null;
var G__22310 = (0);
var G__22311 = (0);
seq__21384 = G__22308;
chunk__21386 = G__22309;
count__21387 = G__22310;
i__21388 = G__22311;
continue;
} else {
var G__22312 = cljs.core.next(seq__21384__$1);
var G__22313 = null;
var G__22314 = (0);
var G__22315 = (0);
seq__21384 = G__22312;
chunk__21386 = G__22313;
count__21387 = G__22314;
i__21388 = G__22315;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21892 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21892) : success.call(null,G__21892));
}catch (e21887){var e = e21887;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21899,success,fail){
var map__21900 = p__21899;
var map__21900__$1 = cljs.core.__destructure_map(map__21900);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21900__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21903 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21903) : success.call(null,G__21903));
}catch (e21902){var e = e21902;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21904,done,error){
var map__21905 = p__21904;
var map__21905__$1 = cljs.core.__destructure_map(map__21905);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21905__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21908,done,error){
var map__21909 = p__21908;
var map__21909__$1 = cljs.core.__destructure_map(map__21909);
var msg = map__21909__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21909__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21909__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21909__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21913){
var map__21916 = p__21913;
var map__21916__$1 = cljs.core.__destructure_map(map__21916);
var src = map__21916__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21916__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5023__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5023__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21918 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21918) : done.call(null,G__21918));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21924){
var map__21925 = p__21924;
var map__21925__$1 = cljs.core.__destructure_map(map__21925);
var msg__$1 = map__21925__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21925__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21927){var ex = e21927;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21928){
var map__21929 = p__21928;
var map__21929__$1 = cljs.core.__destructure_map(map__21929);
var env = map__21929__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21929__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21935){
var map__21936 = p__21935;
var map__21936__$1 = cljs.core.__destructure_map(map__21936);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21936__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21936__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21938){
var map__21939 = p__21938;
var map__21939__$1 = cljs.core.__destructure_map(map__21939);
var svc = map__21939__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21939__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
