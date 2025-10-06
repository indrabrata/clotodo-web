goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15027 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_15027(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15030 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_15030(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__13363 = coll;
var G__13364 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__13363,G__13364) : shadow.dom.lazy_native_coll_seq.call(null,G__13363,G__13364));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5025__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__13427 = arguments.length;
switch (G__13427) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__13441 = arguments.length;
switch (G__13441) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__13459 = arguments.length;
switch (G__13459) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__13467 = arguments.length;
switch (G__13467) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__13489 = arguments.length;
switch (G__13489) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__13517 = arguments.length;
switch (G__13517) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e13527){if((e13527 instanceof Object)){
var e = e13527;
return console.log("didnt support attachEvent",el,e);
} else {
throw e13527;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__13540 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__13541 = null;
var count__13542 = (0);
var i__13543 = (0);
while(true){
if((i__13543 < count__13542)){
var el = chunk__13541.cljs$core$IIndexed$_nth$arity$2(null,i__13543);
var handler_15119__$1 = ((function (seq__13540,chunk__13541,count__13542,i__13543,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13540,chunk__13541,count__13542,i__13543,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15119__$1);


var G__15121 = seq__13540;
var G__15122 = chunk__13541;
var G__15123 = count__13542;
var G__15124 = (i__13543 + (1));
seq__13540 = G__15121;
chunk__13541 = G__15122;
count__13542 = G__15123;
i__13543 = G__15124;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13540);
if(temp__5823__auto__){
var seq__13540__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13540__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__13540__$1);
var G__15127 = cljs.core.chunk_rest(seq__13540__$1);
var G__15128 = c__5548__auto__;
var G__15129 = cljs.core.count(c__5548__auto__);
var G__15131 = (0);
seq__13540 = G__15127;
chunk__13541 = G__15128;
count__13542 = G__15129;
i__13543 = G__15131;
continue;
} else {
var el = cljs.core.first(seq__13540__$1);
var handler_15134__$1 = ((function (seq__13540,chunk__13541,count__13542,i__13543,el,seq__13540__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13540,chunk__13541,count__13542,i__13543,el,seq__13540__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15134__$1);


var G__15139 = cljs.core.next(seq__13540__$1);
var G__15140 = null;
var G__15141 = (0);
var G__15142 = (0);
seq__13540 = G__15139;
chunk__13541 = G__15140;
count__13542 = G__15141;
i__13543 = G__15142;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__13567 = arguments.length;
switch (G__13567) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__13584 = cljs.core.seq(events);
var chunk__13585 = null;
var count__13586 = (0);
var i__13587 = (0);
while(true){
if((i__13587 < count__13586)){
var vec__13627 = chunk__13585.cljs$core$IIndexed$_nth$arity$2(null,i__13587);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13627,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13627,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15157 = seq__13584;
var G__15158 = chunk__13585;
var G__15159 = count__13586;
var G__15160 = (i__13587 + (1));
seq__13584 = G__15157;
chunk__13585 = G__15158;
count__13586 = G__15159;
i__13587 = G__15160;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13584);
if(temp__5823__auto__){
var seq__13584__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13584__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__13584__$1);
var G__15162 = cljs.core.chunk_rest(seq__13584__$1);
var G__15163 = c__5548__auto__;
var G__15164 = cljs.core.count(c__5548__auto__);
var G__15165 = (0);
seq__13584 = G__15162;
chunk__13585 = G__15163;
count__13586 = G__15164;
i__13587 = G__15165;
continue;
} else {
var vec__13638 = cljs.core.first(seq__13584__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13638,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13638,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15169 = cljs.core.next(seq__13584__$1);
var G__15170 = null;
var G__15171 = (0);
var G__15172 = (0);
seq__13584 = G__15169;
chunk__13585 = G__15170;
count__13586 = G__15171;
i__13587 = G__15172;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__13659 = cljs.core.seq(styles);
var chunk__13660 = null;
var count__13661 = (0);
var i__13662 = (0);
while(true){
if((i__13662 < count__13661)){
var vec__13687 = chunk__13660.cljs$core$IIndexed$_nth$arity$2(null,i__13662);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13687,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13687,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15182 = seq__13659;
var G__15183 = chunk__13660;
var G__15184 = count__13661;
var G__15185 = (i__13662 + (1));
seq__13659 = G__15182;
chunk__13660 = G__15183;
count__13661 = G__15184;
i__13662 = G__15185;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13659);
if(temp__5823__auto__){
var seq__13659__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13659__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__13659__$1);
var G__15188 = cljs.core.chunk_rest(seq__13659__$1);
var G__15189 = c__5548__auto__;
var G__15190 = cljs.core.count(c__5548__auto__);
var G__15191 = (0);
seq__13659 = G__15188;
chunk__13660 = G__15189;
count__13661 = G__15190;
i__13662 = G__15191;
continue;
} else {
var vec__13691 = cljs.core.first(seq__13659__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13691,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13691,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15193 = cljs.core.next(seq__13659__$1);
var G__15194 = null;
var G__15195 = (0);
var G__15196 = (0);
seq__13659 = G__15193;
chunk__13660 = G__15194;
count__13661 = G__15195;
i__13662 = G__15196;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__13699_15198 = key;
var G__13699_15199__$1 = (((G__13699_15198 instanceof cljs.core.Keyword))?G__13699_15198.fqn:null);
switch (G__13699_15199__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_15215 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_15215,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_15215,"aria-");
}
})())){
el.setAttribute(ks_15215,value);
} else {
(el[ks_15215] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__13727){
var map__13729 = p__13727;
var map__13729__$1 = cljs.core.__destructure_map(map__13729);
var props = map__13729__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13729__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__13731 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13731,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13731,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13731,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__13735 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__13735,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__13735;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__13741 = arguments.length;
switch (G__13741) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__13760){
var vec__13763 = p__13760;
var seq__13764 = cljs.core.seq(vec__13763);
var first__13765 = cljs.core.first(seq__13764);
var seq__13764__$1 = cljs.core.next(seq__13764);
var nn = first__13765;
var first__13765__$1 = cljs.core.first(seq__13764__$1);
var seq__13764__$2 = cljs.core.next(seq__13764__$1);
var np = first__13765__$1;
var nc = seq__13764__$2;
var node = vec__13763;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13770 = nn;
var G__13771 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__13770,G__13771) : create_fn.call(null,G__13770,G__13771));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13772 = nn;
var G__13773 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__13772,G__13773) : create_fn.call(null,G__13772,G__13773));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__13775 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13775,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13775,(1),null);
var seq__13779_15282 = cljs.core.seq(node_children);
var chunk__13780_15283 = null;
var count__13781_15284 = (0);
var i__13782_15285 = (0);
while(true){
if((i__13782_15285 < count__13781_15284)){
var child_struct_15286 = chunk__13780_15283.cljs$core$IIndexed$_nth$arity$2(null,i__13782_15285);
var children_15288 = shadow.dom.dom_node(child_struct_15286);
if(cljs.core.seq_QMARK_(children_15288)){
var seq__13873_15290 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15288));
var chunk__13875_15291 = null;
var count__13876_15292 = (0);
var i__13877_15293 = (0);
while(true){
if((i__13877_15293 < count__13876_15292)){
var child_15299 = chunk__13875_15291.cljs$core$IIndexed$_nth$arity$2(null,i__13877_15293);
if(cljs.core.truth_(child_15299)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15299);


var G__15301 = seq__13873_15290;
var G__15302 = chunk__13875_15291;
var G__15303 = count__13876_15292;
var G__15304 = (i__13877_15293 + (1));
seq__13873_15290 = G__15301;
chunk__13875_15291 = G__15302;
count__13876_15292 = G__15303;
i__13877_15293 = G__15304;
continue;
} else {
var G__15305 = seq__13873_15290;
var G__15306 = chunk__13875_15291;
var G__15307 = count__13876_15292;
var G__15308 = (i__13877_15293 + (1));
seq__13873_15290 = G__15305;
chunk__13875_15291 = G__15306;
count__13876_15292 = G__15307;
i__13877_15293 = G__15308;
continue;
}
} else {
var temp__5823__auto___15309 = cljs.core.seq(seq__13873_15290);
if(temp__5823__auto___15309){
var seq__13873_15310__$1 = temp__5823__auto___15309;
if(cljs.core.chunked_seq_QMARK_(seq__13873_15310__$1)){
var c__5548__auto___15311 = cljs.core.chunk_first(seq__13873_15310__$1);
var G__15312 = cljs.core.chunk_rest(seq__13873_15310__$1);
var G__15313 = c__5548__auto___15311;
var G__15314 = cljs.core.count(c__5548__auto___15311);
var G__15315 = (0);
seq__13873_15290 = G__15312;
chunk__13875_15291 = G__15313;
count__13876_15292 = G__15314;
i__13877_15293 = G__15315;
continue;
} else {
var child_15317 = cljs.core.first(seq__13873_15310__$1);
if(cljs.core.truth_(child_15317)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15317);


var G__15319 = cljs.core.next(seq__13873_15310__$1);
var G__15320 = null;
var G__15321 = (0);
var G__15322 = (0);
seq__13873_15290 = G__15319;
chunk__13875_15291 = G__15320;
count__13876_15292 = G__15321;
i__13877_15293 = G__15322;
continue;
} else {
var G__15323 = cljs.core.next(seq__13873_15310__$1);
var G__15324 = null;
var G__15325 = (0);
var G__15326 = (0);
seq__13873_15290 = G__15323;
chunk__13875_15291 = G__15324;
count__13876_15292 = G__15325;
i__13877_15293 = G__15326;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15288);
}


var G__15328 = seq__13779_15282;
var G__15329 = chunk__13780_15283;
var G__15330 = count__13781_15284;
var G__15331 = (i__13782_15285 + (1));
seq__13779_15282 = G__15328;
chunk__13780_15283 = G__15329;
count__13781_15284 = G__15330;
i__13782_15285 = G__15331;
continue;
} else {
var temp__5823__auto___15333 = cljs.core.seq(seq__13779_15282);
if(temp__5823__auto___15333){
var seq__13779_15334__$1 = temp__5823__auto___15333;
if(cljs.core.chunked_seq_QMARK_(seq__13779_15334__$1)){
var c__5548__auto___15335 = cljs.core.chunk_first(seq__13779_15334__$1);
var G__15336 = cljs.core.chunk_rest(seq__13779_15334__$1);
var G__15337 = c__5548__auto___15335;
var G__15338 = cljs.core.count(c__5548__auto___15335);
var G__15339 = (0);
seq__13779_15282 = G__15336;
chunk__13780_15283 = G__15337;
count__13781_15284 = G__15338;
i__13782_15285 = G__15339;
continue;
} else {
var child_struct_15340 = cljs.core.first(seq__13779_15334__$1);
var children_15341 = shadow.dom.dom_node(child_struct_15340);
if(cljs.core.seq_QMARK_(children_15341)){
var seq__13895_15342 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15341));
var chunk__13897_15343 = null;
var count__13898_15344 = (0);
var i__13899_15345 = (0);
while(true){
if((i__13899_15345 < count__13898_15344)){
var child_15353 = chunk__13897_15343.cljs$core$IIndexed$_nth$arity$2(null,i__13899_15345);
if(cljs.core.truth_(child_15353)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15353);


var G__15354 = seq__13895_15342;
var G__15355 = chunk__13897_15343;
var G__15356 = count__13898_15344;
var G__15357 = (i__13899_15345 + (1));
seq__13895_15342 = G__15354;
chunk__13897_15343 = G__15355;
count__13898_15344 = G__15356;
i__13899_15345 = G__15357;
continue;
} else {
var G__15358 = seq__13895_15342;
var G__15359 = chunk__13897_15343;
var G__15360 = count__13898_15344;
var G__15361 = (i__13899_15345 + (1));
seq__13895_15342 = G__15358;
chunk__13897_15343 = G__15359;
count__13898_15344 = G__15360;
i__13899_15345 = G__15361;
continue;
}
} else {
var temp__5823__auto___15362__$1 = cljs.core.seq(seq__13895_15342);
if(temp__5823__auto___15362__$1){
var seq__13895_15364__$1 = temp__5823__auto___15362__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13895_15364__$1)){
var c__5548__auto___15366 = cljs.core.chunk_first(seq__13895_15364__$1);
var G__15367 = cljs.core.chunk_rest(seq__13895_15364__$1);
var G__15368 = c__5548__auto___15366;
var G__15369 = cljs.core.count(c__5548__auto___15366);
var G__15370 = (0);
seq__13895_15342 = G__15367;
chunk__13897_15343 = G__15368;
count__13898_15344 = G__15369;
i__13899_15345 = G__15370;
continue;
} else {
var child_15371 = cljs.core.first(seq__13895_15364__$1);
if(cljs.core.truth_(child_15371)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15371);


var G__15373 = cljs.core.next(seq__13895_15364__$1);
var G__15374 = null;
var G__15375 = (0);
var G__15376 = (0);
seq__13895_15342 = G__15373;
chunk__13897_15343 = G__15374;
count__13898_15344 = G__15375;
i__13899_15345 = G__15376;
continue;
} else {
var G__15377 = cljs.core.next(seq__13895_15364__$1);
var G__15378 = null;
var G__15379 = (0);
var G__15380 = (0);
seq__13895_15342 = G__15377;
chunk__13897_15343 = G__15378;
count__13898_15344 = G__15379;
i__13899_15345 = G__15380;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15341);
}


var G__15382 = cljs.core.next(seq__13779_15334__$1);
var G__15383 = null;
var G__15384 = (0);
var G__15385 = (0);
seq__13779_15282 = G__15382;
chunk__13780_15283 = G__15383;
count__13781_15284 = G__15384;
i__13782_15285 = G__15385;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__13933 = cljs.core.seq(node);
var chunk__13934 = null;
var count__13935 = (0);
var i__13936 = (0);
while(true){
if((i__13936 < count__13935)){
var n = chunk__13934.cljs$core$IIndexed$_nth$arity$2(null,i__13936);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15398 = seq__13933;
var G__15399 = chunk__13934;
var G__15400 = count__13935;
var G__15401 = (i__13936 + (1));
seq__13933 = G__15398;
chunk__13934 = G__15399;
count__13935 = G__15400;
i__13936 = G__15401;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13933);
if(temp__5823__auto__){
var seq__13933__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13933__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__13933__$1);
var G__15406 = cljs.core.chunk_rest(seq__13933__$1);
var G__15407 = c__5548__auto__;
var G__15408 = cljs.core.count(c__5548__auto__);
var G__15409 = (0);
seq__13933 = G__15406;
chunk__13934 = G__15407;
count__13935 = G__15408;
i__13936 = G__15409;
continue;
} else {
var n = cljs.core.first(seq__13933__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15411 = cljs.core.next(seq__13933__$1);
var G__15412 = null;
var G__15413 = (0);
var G__15414 = (0);
seq__13933 = G__15411;
chunk__13934 = G__15412;
count__13935 = G__15413;
i__13936 = G__15414;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__13979 = arguments.length;
switch (G__13979) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__13997 = arguments.length;
switch (G__13997) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__14043 = arguments.length;
switch (G__14043) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5025__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15465 = arguments.length;
var i__5750__auto___15466 = (0);
while(true){
if((i__5750__auto___15466 < len__5749__auto___15465)){
args__5755__auto__.push((arguments[i__5750__auto___15466]));

var G__15469 = (i__5750__auto___15466 + (1));
i__5750__auto___15466 = G__15469;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__14103_15472 = cljs.core.seq(nodes);
var chunk__14104_15473 = null;
var count__14105_15474 = (0);
var i__14106_15475 = (0);
while(true){
if((i__14106_15475 < count__14105_15474)){
var node_15478 = chunk__14104_15473.cljs$core$IIndexed$_nth$arity$2(null,i__14106_15475);
fragment.appendChild(shadow.dom._to_dom(node_15478));


var G__15482 = seq__14103_15472;
var G__15483 = chunk__14104_15473;
var G__15484 = count__14105_15474;
var G__15485 = (i__14106_15475 + (1));
seq__14103_15472 = G__15482;
chunk__14104_15473 = G__15483;
count__14105_15474 = G__15484;
i__14106_15475 = G__15485;
continue;
} else {
var temp__5823__auto___15487 = cljs.core.seq(seq__14103_15472);
if(temp__5823__auto___15487){
var seq__14103_15488__$1 = temp__5823__auto___15487;
if(cljs.core.chunked_seq_QMARK_(seq__14103_15488__$1)){
var c__5548__auto___15489 = cljs.core.chunk_first(seq__14103_15488__$1);
var G__15490 = cljs.core.chunk_rest(seq__14103_15488__$1);
var G__15491 = c__5548__auto___15489;
var G__15492 = cljs.core.count(c__5548__auto___15489);
var G__15493 = (0);
seq__14103_15472 = G__15490;
chunk__14104_15473 = G__15491;
count__14105_15474 = G__15492;
i__14106_15475 = G__15493;
continue;
} else {
var node_15496 = cljs.core.first(seq__14103_15488__$1);
fragment.appendChild(shadow.dom._to_dom(node_15496));


var G__15497 = cljs.core.next(seq__14103_15488__$1);
var G__15498 = null;
var G__15499 = (0);
var G__15500 = (0);
seq__14103_15472 = G__15497;
chunk__14104_15473 = G__15498;
count__14105_15474 = G__15499;
i__14106_15475 = G__15500;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14080){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14080));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14129_15504 = cljs.core.seq(scripts);
var chunk__14130_15505 = null;
var count__14131_15506 = (0);
var i__14132_15507 = (0);
while(true){
if((i__14132_15507 < count__14131_15506)){
var vec__14146_15508 = chunk__14130_15505.cljs$core$IIndexed$_nth$arity$2(null,i__14132_15507);
var script_tag_15509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14146_15508,(0),null);
var script_body_15510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14146_15508,(1),null);
eval(script_body_15510);


var G__15512 = seq__14129_15504;
var G__15513 = chunk__14130_15505;
var G__15514 = count__14131_15506;
var G__15515 = (i__14132_15507 + (1));
seq__14129_15504 = G__15512;
chunk__14130_15505 = G__15513;
count__14131_15506 = G__15514;
i__14132_15507 = G__15515;
continue;
} else {
var temp__5823__auto___15516 = cljs.core.seq(seq__14129_15504);
if(temp__5823__auto___15516){
var seq__14129_15517__$1 = temp__5823__auto___15516;
if(cljs.core.chunked_seq_QMARK_(seq__14129_15517__$1)){
var c__5548__auto___15519 = cljs.core.chunk_first(seq__14129_15517__$1);
var G__15520 = cljs.core.chunk_rest(seq__14129_15517__$1);
var G__15521 = c__5548__auto___15519;
var G__15522 = cljs.core.count(c__5548__auto___15519);
var G__15523 = (0);
seq__14129_15504 = G__15520;
chunk__14130_15505 = G__15521;
count__14131_15506 = G__15522;
i__14132_15507 = G__15523;
continue;
} else {
var vec__14157_15524 = cljs.core.first(seq__14129_15517__$1);
var script_tag_15525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14157_15524,(0),null);
var script_body_15526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14157_15524,(1),null);
eval(script_body_15526);


var G__15530 = cljs.core.next(seq__14129_15517__$1);
var G__15531 = null;
var G__15532 = (0);
var G__15533 = (0);
seq__14129_15504 = G__15530;
chunk__14130_15505 = G__15531;
count__14131_15506 = G__15532;
i__14132_15507 = G__15533;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14162){
var vec__14163 = p__14162;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14163,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14163,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__14177 = arguments.length;
switch (G__14177) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__14201 = cljs.core.seq(style_keys);
var chunk__14202 = null;
var count__14203 = (0);
var i__14204 = (0);
while(true){
if((i__14204 < count__14203)){
var it = chunk__14202.cljs$core$IIndexed$_nth$arity$2(null,i__14204);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15551 = seq__14201;
var G__15552 = chunk__14202;
var G__15553 = count__14203;
var G__15554 = (i__14204 + (1));
seq__14201 = G__15551;
chunk__14202 = G__15552;
count__14203 = G__15553;
i__14204 = G__15554;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14201);
if(temp__5823__auto__){
var seq__14201__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14201__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__14201__$1);
var G__15557 = cljs.core.chunk_rest(seq__14201__$1);
var G__15558 = c__5548__auto__;
var G__15560 = cljs.core.count(c__5548__auto__);
var G__15561 = (0);
seq__14201 = G__15557;
chunk__14202 = G__15558;
count__14203 = G__15560;
i__14204 = G__15561;
continue;
} else {
var it = cljs.core.first(seq__14201__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15563 = cljs.core.next(seq__14201__$1);
var G__15564 = null;
var G__15565 = (0);
var G__15566 = (0);
seq__14201 = G__15563;
chunk__14202 = G__15564;
count__14203 = G__15565;
i__14204 = G__15566;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k14226,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__14271 = k14226;
var G__14271__$1 = (((G__14271 instanceof cljs.core.Keyword))?G__14271.fqn:null);
switch (G__14271__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14226,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__14288){
var vec__14291 = p__14288;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14291,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14291,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14225){
var self__ = this;
var G__14225__$1 = this;
return (new cljs.core.RecordIter((0),G__14225__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14227,other14228){
var self__ = this;
var this14227__$1 = this;
return (((!((other14228 == null)))) && ((((this14227__$1.constructor === other14228.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14227__$1.x,other14228.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14227__$1.y,other14228.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14227__$1.__extmap,other14228.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k14226){
var self__ = this;
var this__5330__auto____$1 = this;
var G__14400 = k14226;
var G__14400__$1 = (((G__14400 instanceof cljs.core.Keyword))?G__14400.fqn:null);
switch (G__14400__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14226);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__14225){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__14409 = cljs.core.keyword_identical_QMARK_;
var expr__14410 = k__5332__auto__;
if(cljs.core.truth_((pred__14409.cljs$core$IFn$_invoke$arity$2 ? pred__14409.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__14410) : pred__14409.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__14410)))){
return (new shadow.dom.Coordinate(G__14225,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14409.cljs$core$IFn$_invoke$arity$2 ? pred__14409.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__14410) : pred__14409.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__14410)))){
return (new shadow.dom.Coordinate(self__.x,G__14225,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__14225),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__14225){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14225,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14256){
var extmap__5365__auto__ = (function (){var G__14459 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14256,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14256)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14459);
} else {
return G__14459;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14256),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14256),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k14513,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__14526 = k14513;
var G__14526__$1 = (((G__14526 instanceof cljs.core.Keyword))?G__14526.fqn:null);
switch (G__14526__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14513,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__14531){
var vec__14532 = p__14531;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14532,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14532,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Size{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14512){
var self__ = this;
var G__14512__$1 = this;
return (new cljs.core.RecordIter((0),G__14512__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14514,other14515){
var self__ = this;
var this14514__$1 = this;
return (((!((other14515 == null)))) && ((((this14514__$1.constructor === other14515.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14514__$1.w,other14515.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14514__$1.h,other14515.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14514__$1.__extmap,other14515.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k14513){
var self__ = this;
var this__5330__auto____$1 = this;
var G__14589 = k14513;
var G__14589__$1 = (((G__14589 instanceof cljs.core.Keyword))?G__14589.fqn:null);
switch (G__14589__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14513);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__14512){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__14595 = cljs.core.keyword_identical_QMARK_;
var expr__14596 = k__5332__auto__;
if(cljs.core.truth_((pred__14595.cljs$core$IFn$_invoke$arity$2 ? pred__14595.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__14596) : pred__14595.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__14596)))){
return (new shadow.dom.Size(G__14512,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14595.cljs$core$IFn$_invoke$arity$2 ? pred__14595.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__14596) : pred__14595.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__14596)))){
return (new shadow.dom.Size(self__.w,G__14512,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__14512),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__14512){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__14512,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__14518){
var extmap__5365__auto__ = (function (){var G__14612 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14518,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__14518)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14612);
} else {
return G__14612;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__14518),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__14518),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5613__auto__ = opts;
var l__5614__auto__ = a__5613__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5614__auto__)){
var G__15660 = (i + (1));
var G__15661 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__15660;
ret = G__15661;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14665){
var vec__14666 = p__14665;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14666,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14666,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__14678 = arguments.length;
switch (G__14678) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__15763 = ps;
var G__15764 = (i + (1));
el__$1 = G__15763;
i = G__15764;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__14748 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14748,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14748,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14748,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__14756_15782 = cljs.core.seq(props);
var chunk__14757_15783 = null;
var count__14758_15784 = (0);
var i__14759_15785 = (0);
while(true){
if((i__14759_15785 < count__14758_15784)){
var vec__14781_15789 = chunk__14757_15783.cljs$core$IIndexed$_nth$arity$2(null,i__14759_15785);
var k_15790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14781_15789,(0),null);
var v_15791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14781_15789,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_15790);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15790),v_15791);


var G__15797 = seq__14756_15782;
var G__15798 = chunk__14757_15783;
var G__15799 = count__14758_15784;
var G__15800 = (i__14759_15785 + (1));
seq__14756_15782 = G__15797;
chunk__14757_15783 = G__15798;
count__14758_15784 = G__15799;
i__14759_15785 = G__15800;
continue;
} else {
var temp__5823__auto___15801 = cljs.core.seq(seq__14756_15782);
if(temp__5823__auto___15801){
var seq__14756_15802__$1 = temp__5823__auto___15801;
if(cljs.core.chunked_seq_QMARK_(seq__14756_15802__$1)){
var c__5548__auto___15803 = cljs.core.chunk_first(seq__14756_15802__$1);
var G__15806 = cljs.core.chunk_rest(seq__14756_15802__$1);
var G__15807 = c__5548__auto___15803;
var G__15808 = cljs.core.count(c__5548__auto___15803);
var G__15809 = (0);
seq__14756_15782 = G__15806;
chunk__14757_15783 = G__15807;
count__14758_15784 = G__15808;
i__14759_15785 = G__15809;
continue;
} else {
var vec__14799_15810 = cljs.core.first(seq__14756_15802__$1);
var k_15811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14799_15810,(0),null);
var v_15812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14799_15810,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_15811);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15811),v_15812);


var G__15816 = cljs.core.next(seq__14756_15802__$1);
var G__15817 = null;
var G__15818 = (0);
var G__15819 = (0);
seq__14756_15782 = G__15816;
chunk__14757_15783 = G__15817;
count__14758_15784 = G__15818;
i__14759_15785 = G__15819;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__14816 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14816,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14816,(1),null);
var seq__14819_15828 = cljs.core.seq(node_children);
var chunk__14821_15829 = null;
var count__14822_15830 = (0);
var i__14823_15831 = (0);
while(true){
if((i__14823_15831 < count__14822_15830)){
var child_struct_15834 = chunk__14821_15829.cljs$core$IIndexed$_nth$arity$2(null,i__14823_15831);
if((!((child_struct_15834 == null)))){
if(typeof child_struct_15834 === 'string'){
var text_15837 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15837),child_struct_15834].join(''));
} else {
var children_15838 = shadow.dom.svg_node(child_struct_15834);
if(cljs.core.seq_QMARK_(children_15838)){
var seq__14918_15842 = cljs.core.seq(children_15838);
var chunk__14920_15843 = null;
var count__14921_15844 = (0);
var i__14922_15845 = (0);
while(true){
if((i__14922_15845 < count__14921_15844)){
var child_15847 = chunk__14920_15843.cljs$core$IIndexed$_nth$arity$2(null,i__14922_15845);
if(cljs.core.truth_(child_15847)){
node.appendChild(child_15847);


var G__15848 = seq__14918_15842;
var G__15849 = chunk__14920_15843;
var G__15850 = count__14921_15844;
var G__15851 = (i__14922_15845 + (1));
seq__14918_15842 = G__15848;
chunk__14920_15843 = G__15849;
count__14921_15844 = G__15850;
i__14922_15845 = G__15851;
continue;
} else {
var G__15853 = seq__14918_15842;
var G__15854 = chunk__14920_15843;
var G__15855 = count__14921_15844;
var G__15856 = (i__14922_15845 + (1));
seq__14918_15842 = G__15853;
chunk__14920_15843 = G__15854;
count__14921_15844 = G__15855;
i__14922_15845 = G__15856;
continue;
}
} else {
var temp__5823__auto___15857 = cljs.core.seq(seq__14918_15842);
if(temp__5823__auto___15857){
var seq__14918_15858__$1 = temp__5823__auto___15857;
if(cljs.core.chunked_seq_QMARK_(seq__14918_15858__$1)){
var c__5548__auto___15859 = cljs.core.chunk_first(seq__14918_15858__$1);
var G__15860 = cljs.core.chunk_rest(seq__14918_15858__$1);
var G__15861 = c__5548__auto___15859;
var G__15862 = cljs.core.count(c__5548__auto___15859);
var G__15863 = (0);
seq__14918_15842 = G__15860;
chunk__14920_15843 = G__15861;
count__14921_15844 = G__15862;
i__14922_15845 = G__15863;
continue;
} else {
var child_15865 = cljs.core.first(seq__14918_15858__$1);
if(cljs.core.truth_(child_15865)){
node.appendChild(child_15865);


var G__15867 = cljs.core.next(seq__14918_15858__$1);
var G__15868 = null;
var G__15869 = (0);
var G__15870 = (0);
seq__14918_15842 = G__15867;
chunk__14920_15843 = G__15868;
count__14921_15844 = G__15869;
i__14922_15845 = G__15870;
continue;
} else {
var G__15871 = cljs.core.next(seq__14918_15858__$1);
var G__15872 = null;
var G__15873 = (0);
var G__15874 = (0);
seq__14918_15842 = G__15871;
chunk__14920_15843 = G__15872;
count__14921_15844 = G__15873;
i__14922_15845 = G__15874;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15838);
}
}


var G__15876 = seq__14819_15828;
var G__15877 = chunk__14821_15829;
var G__15878 = count__14822_15830;
var G__15879 = (i__14823_15831 + (1));
seq__14819_15828 = G__15876;
chunk__14821_15829 = G__15877;
count__14822_15830 = G__15878;
i__14823_15831 = G__15879;
continue;
} else {
var G__15880 = seq__14819_15828;
var G__15881 = chunk__14821_15829;
var G__15882 = count__14822_15830;
var G__15883 = (i__14823_15831 + (1));
seq__14819_15828 = G__15880;
chunk__14821_15829 = G__15881;
count__14822_15830 = G__15882;
i__14823_15831 = G__15883;
continue;
}
} else {
var temp__5823__auto___15884 = cljs.core.seq(seq__14819_15828);
if(temp__5823__auto___15884){
var seq__14819_15885__$1 = temp__5823__auto___15884;
if(cljs.core.chunked_seq_QMARK_(seq__14819_15885__$1)){
var c__5548__auto___15887 = cljs.core.chunk_first(seq__14819_15885__$1);
var G__15888 = cljs.core.chunk_rest(seq__14819_15885__$1);
var G__15889 = c__5548__auto___15887;
var G__15890 = cljs.core.count(c__5548__auto___15887);
var G__15891 = (0);
seq__14819_15828 = G__15888;
chunk__14821_15829 = G__15889;
count__14822_15830 = G__15890;
i__14823_15831 = G__15891;
continue;
} else {
var child_struct_15894 = cljs.core.first(seq__14819_15885__$1);
if((!((child_struct_15894 == null)))){
if(typeof child_struct_15894 === 'string'){
var text_15897 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15897),child_struct_15894].join(''));
} else {
var children_15898 = shadow.dom.svg_node(child_struct_15894);
if(cljs.core.seq_QMARK_(children_15898)){
var seq__14942_15902 = cljs.core.seq(children_15898);
var chunk__14944_15903 = null;
var count__14945_15904 = (0);
var i__14946_15905 = (0);
while(true){
if((i__14946_15905 < count__14945_15904)){
var child_15908 = chunk__14944_15903.cljs$core$IIndexed$_nth$arity$2(null,i__14946_15905);
if(cljs.core.truth_(child_15908)){
node.appendChild(child_15908);


var G__15910 = seq__14942_15902;
var G__15911 = chunk__14944_15903;
var G__15912 = count__14945_15904;
var G__15913 = (i__14946_15905 + (1));
seq__14942_15902 = G__15910;
chunk__14944_15903 = G__15911;
count__14945_15904 = G__15912;
i__14946_15905 = G__15913;
continue;
} else {
var G__15915 = seq__14942_15902;
var G__15916 = chunk__14944_15903;
var G__15917 = count__14945_15904;
var G__15918 = (i__14946_15905 + (1));
seq__14942_15902 = G__15915;
chunk__14944_15903 = G__15916;
count__14945_15904 = G__15917;
i__14946_15905 = G__15918;
continue;
}
} else {
var temp__5823__auto___15921__$1 = cljs.core.seq(seq__14942_15902);
if(temp__5823__auto___15921__$1){
var seq__14942_15922__$1 = temp__5823__auto___15921__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14942_15922__$1)){
var c__5548__auto___15923 = cljs.core.chunk_first(seq__14942_15922__$1);
var G__15924 = cljs.core.chunk_rest(seq__14942_15922__$1);
var G__15925 = c__5548__auto___15923;
var G__15926 = cljs.core.count(c__5548__auto___15923);
var G__15927 = (0);
seq__14942_15902 = G__15924;
chunk__14944_15903 = G__15925;
count__14945_15904 = G__15926;
i__14946_15905 = G__15927;
continue;
} else {
var child_15929 = cljs.core.first(seq__14942_15922__$1);
if(cljs.core.truth_(child_15929)){
node.appendChild(child_15929);


var G__15930 = cljs.core.next(seq__14942_15922__$1);
var G__15931 = null;
var G__15932 = (0);
var G__15933 = (0);
seq__14942_15902 = G__15930;
chunk__14944_15903 = G__15931;
count__14945_15904 = G__15932;
i__14946_15905 = G__15933;
continue;
} else {
var G__15935 = cljs.core.next(seq__14942_15922__$1);
var G__15936 = null;
var G__15937 = (0);
var G__15938 = (0);
seq__14942_15902 = G__15935;
chunk__14944_15903 = G__15936;
count__14945_15904 = G__15937;
i__14946_15905 = G__15938;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15898);
}
}


var G__15939 = cljs.core.next(seq__14819_15885__$1);
var G__15940 = null;
var G__15941 = (0);
var G__15942 = (0);
seq__14819_15828 = G__15939;
chunk__14821_15829 = G__15940;
count__14822_15830 = G__15941;
i__14823_15831 = G__15942;
continue;
} else {
var G__15943 = cljs.core.next(seq__14819_15885__$1);
var G__15944 = null;
var G__15945 = (0);
var G__15946 = (0);
seq__14819_15828 = G__15943;
chunk__14821_15829 = G__15944;
count__14822_15830 = G__15945;
i__14823_15831 = G__15946;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15958 = arguments.length;
var i__5750__auto___15959 = (0);
while(true){
if((i__5750__auto___15959 < len__5749__auto___15958)){
args__5755__auto__.push((arguments[i__5750__auto___15959]));

var G__15961 = (i__5750__auto___15959 + (1));
i__5750__auto___15959 = G__15961;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15002){
var G__15004 = cljs.core.first(seq15002);
var seq15002__$1 = cljs.core.next(seq15002);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15004,seq15002__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
