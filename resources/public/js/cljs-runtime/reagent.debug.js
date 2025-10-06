goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__20271__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20271 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20273__i = 0, G__20273__a = new Array(arguments.length -  0);
while (G__20273__i < G__20273__a.length) {G__20273__a[G__20273__i] = arguments[G__20273__i + 0]; ++G__20273__i;}
  args = new cljs.core.IndexedSeq(G__20273__a,0,null);
} 
return G__20271__delegate.call(this,args);};
G__20271.cljs$lang$maxFixedArity = 0;
G__20271.cljs$lang$applyTo = (function (arglist__20274){
var args = cljs.core.seq(arglist__20274);
return G__20271__delegate(args);
});
G__20271.cljs$core$IFn$_invoke$arity$variadic = G__20271__delegate;
return G__20271;
})()
);

(o.error = (function() { 
var G__20275__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20276__i = 0, G__20276__a = new Array(arguments.length -  0);
while (G__20276__i < G__20276__a.length) {G__20276__a[G__20276__i] = arguments[G__20276__i + 0]; ++G__20276__i;}
  args = new cljs.core.IndexedSeq(G__20276__a,0,null);
} 
return G__20275__delegate.call(this,args);};
G__20275.cljs$lang$maxFixedArity = 0;
G__20275.cljs$lang$applyTo = (function (arglist__20277){
var args = cljs.core.seq(arglist__20277);
return G__20275__delegate(args);
});
G__20275.cljs$core$IFn$_invoke$arity$variadic = G__20275__delegate;
return G__20275;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
