goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18752){
var map__18754 = p__18752;
var map__18754__$1 = cljs.core.__destructure_map(map__18754);
var m = map__18754__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18754__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18754__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18764_19267 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18765_19268 = null;
var count__18766_19269 = (0);
var i__18767_19270 = (0);
while(true){
if((i__18767_19270 < count__18766_19269)){
var f_19274 = chunk__18765_19268.cljs$core$IIndexed$_nth$arity$2(null,i__18767_19270);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19274], 0));


var G__19275 = seq__18764_19267;
var G__19276 = chunk__18765_19268;
var G__19277 = count__18766_19269;
var G__19278 = (i__18767_19270 + (1));
seq__18764_19267 = G__19275;
chunk__18765_19268 = G__19276;
count__18766_19269 = G__19277;
i__18767_19270 = G__19278;
continue;
} else {
var temp__5823__auto___19280 = cljs.core.seq(seq__18764_19267);
if(temp__5823__auto___19280){
var seq__18764_19281__$1 = temp__5823__auto___19280;
if(cljs.core.chunked_seq_QMARK_(seq__18764_19281__$1)){
var c__5548__auto___19282 = cljs.core.chunk_first(seq__18764_19281__$1);
var G__19283 = cljs.core.chunk_rest(seq__18764_19281__$1);
var G__19284 = c__5548__auto___19282;
var G__19285 = cljs.core.count(c__5548__auto___19282);
var G__19286 = (0);
seq__18764_19267 = G__19283;
chunk__18765_19268 = G__19284;
count__18766_19269 = G__19285;
i__18767_19270 = G__19286;
continue;
} else {
var f_19287 = cljs.core.first(seq__18764_19281__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19287], 0));


var G__19288 = cljs.core.next(seq__18764_19281__$1);
var G__19289 = null;
var G__19290 = (0);
var G__19291 = (0);
seq__18764_19267 = G__19288;
chunk__18765_19268 = G__19289;
count__18766_19269 = G__19290;
i__18767_19270 = G__19291;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19298 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19298], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19298)))?cljs.core.second(arglists_19298):arglists_19298)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18806_19299 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18807_19300 = null;
var count__18808_19301 = (0);
var i__18809_19302 = (0);
while(true){
if((i__18809_19302 < count__18808_19301)){
var vec__18847_19304 = chunk__18807_19300.cljs$core$IIndexed$_nth$arity$2(null,i__18809_19302);
var name_19305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18847_19304,(0),null);
var map__18850_19306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18847_19304,(1),null);
var map__18850_19307__$1 = cljs.core.__destructure_map(map__18850_19306);
var doc_19308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18850_19307__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18850_19307__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19305], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19309], 0));

if(cljs.core.truth_(doc_19308)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19308], 0));
} else {
}


var G__19313 = seq__18806_19299;
var G__19314 = chunk__18807_19300;
var G__19315 = count__18808_19301;
var G__19316 = (i__18809_19302 + (1));
seq__18806_19299 = G__19313;
chunk__18807_19300 = G__19314;
count__18808_19301 = G__19315;
i__18809_19302 = G__19316;
continue;
} else {
var temp__5823__auto___19317 = cljs.core.seq(seq__18806_19299);
if(temp__5823__auto___19317){
var seq__18806_19318__$1 = temp__5823__auto___19317;
if(cljs.core.chunked_seq_QMARK_(seq__18806_19318__$1)){
var c__5548__auto___19319 = cljs.core.chunk_first(seq__18806_19318__$1);
var G__19320 = cljs.core.chunk_rest(seq__18806_19318__$1);
var G__19321 = c__5548__auto___19319;
var G__19322 = cljs.core.count(c__5548__auto___19319);
var G__19323 = (0);
seq__18806_19299 = G__19320;
chunk__18807_19300 = G__19321;
count__18808_19301 = G__19322;
i__18809_19302 = G__19323;
continue;
} else {
var vec__18866_19327 = cljs.core.first(seq__18806_19318__$1);
var name_19328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18866_19327,(0),null);
var map__18869_19329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18866_19327,(1),null);
var map__18869_19330__$1 = cljs.core.__destructure_map(map__18869_19329);
var doc_19331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18869_19330__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18869_19330__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19328], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19332], 0));

if(cljs.core.truth_(doc_19331)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19331], 0));
} else {
}


var G__19333 = cljs.core.next(seq__18806_19318__$1);
var G__19334 = null;
var G__19335 = (0);
var G__19336 = (0);
seq__18806_19299 = G__19333;
chunk__18807_19300 = G__19334;
count__18808_19301 = G__19335;
i__18809_19302 = G__19336;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18885 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18886 = null;
var count__18887 = (0);
var i__18888 = (0);
while(true){
if((i__18888 < count__18887)){
var role = chunk__18886.cljs$core$IIndexed$_nth$arity$2(null,i__18888);
var temp__5823__auto___19338__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19338__$1)){
var spec_19339 = temp__5823__auto___19338__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19339)], 0));
} else {
}


var G__19340 = seq__18885;
var G__19341 = chunk__18886;
var G__19342 = count__18887;
var G__19343 = (i__18888 + (1));
seq__18885 = G__19340;
chunk__18886 = G__19341;
count__18887 = G__19342;
i__18888 = G__19343;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__18885);
if(temp__5823__auto____$1){
var seq__18885__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18885__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__18885__$1);
var G__19344 = cljs.core.chunk_rest(seq__18885__$1);
var G__19345 = c__5548__auto__;
var G__19346 = cljs.core.count(c__5548__auto__);
var G__19347 = (0);
seq__18885 = G__19344;
chunk__18886 = G__19345;
count__18887 = G__19346;
i__18888 = G__19347;
continue;
} else {
var role = cljs.core.first(seq__18885__$1);
var temp__5823__auto___19348__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19348__$2)){
var spec_19349 = temp__5823__auto___19348__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19349)], 0));
} else {
}


var G__19350 = cljs.core.next(seq__18885__$1);
var G__19351 = null;
var G__19352 = (0);
var G__19353 = (0);
seq__18885 = G__19350;
chunk__18886 = G__19351;
count__18887 = G__19352;
i__18888 = G__19353;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19041 = datafied_throwable;
var map__19041__$1 = cljs.core.__destructure_map(map__19041);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19041__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19041__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19041__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19042 = cljs.core.last(via);
var map__19042__$1 = cljs.core.__destructure_map(map__19042);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19042__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19042__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19042__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19043 = data;
var map__19043__$1 = cljs.core.__destructure_map(map__19043);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19043__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19043__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19043__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19044 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19044__$1 = cljs.core.__destructure_map(map__19044);
var top_data = map__19044__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19044__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19053 = phase;
var G__19053__$1 = (((G__19053 instanceof cljs.core.Keyword))?G__19053.fqn:null);
switch (G__19053__$1) {
case "read-source":
var map__19056 = data;
var map__19056__$1 = cljs.core.__destructure_map(map__19056);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19056__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19056__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19057 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19057__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19057,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19057);
var G__19057__$2 = (cljs.core.truth_((function (){var fexpr__19060 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19060.cljs$core$IFn$_invoke$arity$1 ? fexpr__19060.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19060.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19057__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19057__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19057__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19057__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19062 = top_data;
var G__19062__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19062,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19062);
var G__19062__$2 = (cljs.core.truth_((function (){var fexpr__19063 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19063.cljs$core$IFn$_invoke$arity$1 ? fexpr__19063.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19063.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19062__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19062__$1);
var G__19062__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19062__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19062__$2);
var G__19062__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19062__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19062__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19062__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19062__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19073 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19073,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19073,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19073,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19073,(3),null);
var G__19078 = top_data;
var G__19078__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19078,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19078);
var G__19078__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19078__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19078__$1);
var G__19078__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19078__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19078__$2);
var G__19078__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19078__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19078__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19078__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19078__$4;
}

break;
case "execution":
var vec__19111 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19111,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19111,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19111,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19111,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19036_SHARP_){
var or__5025__auto__ = (p1__19036_SHARP_ == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var fexpr__19131 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19131.cljs$core$IFn$_invoke$arity$1 ? fexpr__19131.cljs$core$IFn$_invoke$arity$1(p1__19036_SHARP_) : fexpr__19131.call(null,p1__19036_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return line;
}
})();
var G__19137 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19137__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19137,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19137);
var G__19137__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19137__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19137__$1);
var G__19137__$3 = (cljs.core.truth_((function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19137__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19137__$2);
var G__19137__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19137__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19137__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19137__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19137__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19053__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19157){
var map__19166 = p__19157;
var map__19166__$1 = cljs.core.__destructure_map(map__19166);
var triage_data = map__19166__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19166__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19166__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19166__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19166__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19166__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19166__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19166__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19166__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = source;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = line;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5025__auto__ = class$;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19205 = phase;
var G__19205__$1 = (((G__19205 instanceof cljs.core.Keyword))?G__19205.fqn:null);
switch (G__19205__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19207 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19208 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19209 = loc;
var G__19210 = (cljs.core.truth_(spec)?(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19211_19396 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19212_19397 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19213_19398 = true;
var _STAR_print_fn_STAR__temp_val__19214_19399 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19213_19398);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19214_19399);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19143_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19143_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19212_19397);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19211_19396);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19207,G__19208,G__19209,G__19210) : format.call(null,G__19207,G__19208,G__19209,G__19210));

break;
case "macroexpansion":
var G__19223 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19224 = cause_type;
var G__19225 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19226 = loc;
var G__19227 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19223,G__19224,G__19225,G__19226,G__19227) : format.call(null,G__19223,G__19224,G__19225,G__19226,G__19227));

break;
case "compile-syntax-check":
var G__19233 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19234 = cause_type;
var G__19235 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19236 = loc;
var G__19237 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19233,G__19234,G__19235,G__19236,G__19237) : format.call(null,G__19233,G__19234,G__19235,G__19236,G__19237));

break;
case "compilation":
var G__19238 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19239 = cause_type;
var G__19240 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19241 = loc;
var G__19242 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19238,G__19239,G__19240,G__19241,G__19242) : format.call(null,G__19238,G__19239,G__19240,G__19241,G__19242));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19243 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19244 = symbol;
var G__19245 = loc;
var G__19246 = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19249_19403 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19250_19404 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19251_19405 = true;
var _STAR_print_fn_STAR__temp_val__19252_19406 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19251_19405);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19252_19406);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19144_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19144_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19250_19404);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19249_19403);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19243,G__19244,G__19245,G__19246) : format.call(null,G__19243,G__19244,G__19245,G__19246));
} else {
var G__19257 = "Execution error%s at %s(%s).\n%s\n";
var G__19258 = cause_type;
var G__19259 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19260 = loc;
var G__19261 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19257,G__19258,G__19259,G__19260,G__19261) : format.call(null,G__19257,G__19258,G__19259,G__19260,G__19261));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19205__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
