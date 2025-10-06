goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14171 = (function (f,blockable,meta14172){
this.f = f;
this.blockable = blockable;
this.meta14172 = meta14172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14173,meta14172__$1){
var self__ = this;
var _14173__$1 = this;
return (new cljs.core.async.t_cljs$core$async14171(self__.f,self__.blockable,meta14172__$1));
}));

(cljs.core.async.t_cljs$core$async14171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14173){
var self__ = this;
var _14173__$1 = this;
return self__.meta14172;
}));

(cljs.core.async.t_cljs$core$async14171.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14171.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14171.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14171.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14172","meta14172",1748428645,null)], null);
}));

(cljs.core.async.t_cljs$core$async14171.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14171");

(cljs.core.async.t_cljs$core$async14171.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async14171");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14171.
 */
cljs.core.async.__GT_t_cljs$core$async14171 = (function cljs$core$async$__GT_t_cljs$core$async14171(f,blockable,meta14172){
return (new cljs.core.async.t_cljs$core$async14171(f,blockable,meta14172));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14169 = arguments.length;
switch (G__14169) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14171(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14216 = arguments.length;
switch (G__14216) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14260 = arguments.length;
switch (G__14260) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14306 = arguments.length;
switch (G__14306) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17810 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17810) : fn1.call(null,val_17810));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17810) : fn1.call(null,val_17810));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14368 = arguments.length;
switch (G__14368) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5616__auto___17823 = n;
var x_17825 = (0);
while(true){
if((x_17825 < n__5616__auto___17823)){
(a[x_17825] = x_17825);

var G__17826 = (x_17825 + (1));
x_17825 = G__17826;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14437 = (function (flag,meta14439){
this.flag = flag;
this.meta14439 = meta14439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14440,meta14439__$1){
var self__ = this;
var _14440__$1 = this;
return (new cljs.core.async.t_cljs$core$async14437(self__.flag,meta14439__$1));
}));

(cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14440){
var self__ = this;
var _14440__$1 = this;
return self__.meta14439;
}));

(cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14439","meta14439",-1720832402,null)], null);
}));

(cljs.core.async.t_cljs$core$async14437.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14437");

(cljs.core.async.t_cljs$core$async14437.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async14437");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14437.
 */
cljs.core.async.__GT_t_cljs$core$async14437 = (function cljs$core$async$__GT_t_cljs$core$async14437(flag,meta14439){
return (new cljs.core.async.t_cljs$core$async14437(flag,meta14439));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14437(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14507 = (function (flag,cb,meta14508){
this.flag = flag;
this.cb = cb;
this.meta14508 = meta14508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14509,meta14508__$1){
var self__ = this;
var _14509__$1 = this;
return (new cljs.core.async.t_cljs$core$async14507(self__.flag,self__.cb,meta14508__$1));
}));

(cljs.core.async.t_cljs$core$async14507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14509){
var self__ = this;
var _14509__$1 = this;
return self__.meta14508;
}));

(cljs.core.async.t_cljs$core$async14507.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14507.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14507.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14507.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14507.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14508","meta14508",1612033621,null)], null);
}));

(cljs.core.async.t_cljs$core$async14507.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14507");

(cljs.core.async.t_cljs$core$async14507.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async14507");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14507.
 */
cljs.core.async.__GT_t_cljs$core$async14507 = (function cljs$core$async$__GT_t_cljs$core$async14507(flag,cb,meta14508){
return (new cljs.core.async.t_cljs$core$async14507(flag,cb,meta14508));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14507(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_17836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_17836)){
if((!(((port_17836.cljs$core$IFn$_invoke$arity$1 ? port_17836.cljs$core$IFn$_invoke$arity$1((1)) : port_17836.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__17840 = (i + (1));
i = G__17840;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14537_SHARP_){
var G__14564 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14537_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14564) : fret.call(null,G__14564));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14538_SHARP_){
var G__14572 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14538_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14572) : fret.call(null,G__14572));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17843 = (i + (1));
i = G__17843;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5023__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5023__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___17844 = arguments.length;
var i__5750__auto___17845 = (0);
while(true){
if((i__5750__auto___17845 < len__5749__auto___17844)){
args__5755__auto__.push((arguments[i__5750__auto___17845]));

var G__17846 = (i__5750__auto___17845 + (1));
i__5750__auto___17845 = G__17846;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14591){
var map__14594 = p__14591;
var map__14594__$1 = cljs.core.__destructure_map(map__14594);
var opts = map__14594__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14582){
var G__14583 = cljs.core.first(seq14582);
var seq14582__$1 = cljs.core.next(seq14582);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14583,seq14582__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14608 = arguments.length;
switch (G__14608) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14056__auto___17855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14057__auto__ = (function (){var switch__13305__auto__ = (function (state_14648){
var state_val_14649 = (state_14648[(1)]);
if((state_val_14649 === (7))){
var inst_14644 = (state_14648[(2)]);
var state_14648__$1 = state_14648;
var statearr_14656_17857 = state_14648__$1;
(statearr_14656_17857[(2)] = inst_14644);

(statearr_14656_17857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14649 === (1))){
var state_14648__$1 = state_14648;
var statearr_14664_17858 = state_14648__$1;
(statearr_14664_17858[(2)] = null);

(statearr_14664_17858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14649 === (4))){
var inst_14624 = (state_14648[(7)]);
var inst_14624__$1 = (state_14648[(2)]);
var inst_14628 = (inst_14624__$1 == null);
var state_14648__$1 = (function (){var statearr_14669 = state_14648;
(statearr_14669[(7)] = inst_14624__$1);

return statearr_14669;
})();
if(cljs.core.truth_(inst_14628)){
var statearr_14674_17859 = state_14648__$1;
(statearr_14674_17859[(1)] = (5));

} else {
var statearr_14675_17860 = state_14648__$1;
(statearr_14675_17860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14649 === (13))){
var state_14648__$1 = state_14648;
var statearr_14677_17861 = state_14648__$1;
(statearr_14677_17861[(2)] = null);

(statearr_14677_17861[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14649 === (6))){
var inst_14624 = (state_14648[(7)]);
var state_14648__$1 = state_14648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14648__$1,(11),to,inst_14624);
} else {
if((state_val_14649 === (3))){
var inst_14646 = (state_14648[(2)]);
var state_14648__$1 = state_14648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14648__$1,inst_14646);
} else {
if((state_val_14649 === (12))){
var state_14648__$1 = state_14648;
var statearr_14693_17862 = state_14648__$1;
(statearr_14693_17862[(2)] = null);

(statearr_14693_17862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14649 === (2))){
var state_14648__$1 = state_14648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14648__$1,(4),from);
} else {
if((state_val_14649 === (11))){
var inst_14637 = (state_14648[(2)]);
var state_14648__$1 = state_14648;
if(cljs.core.truth_(inst_14637)){
var statearr_14698_17863 = state_14648__$1;
(statearr_14698_17863[(1)] = (12));

} else {
var statearr_14699_17864 = state_14648__$1;
(statearr_14699_17864[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14649 === (9))){
var state_14648__$1 = state_14648;
var statearr_14701_17865 = state_14648__$1;
(statearr_14701_17865[(2)] = null);

(statearr_14701_17865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14649 === (5))){
var state_14648__$1 = state_14648;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14708_17866 = state_14648__$1;
(statearr_14708_17866[(1)] = (8));

} else {
var statearr_14709_17867 = state_14648__$1;
(statearr_14709_17867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14649 === (14))){
var inst_14642 = (state_14648[(2)]);
var state_14648__$1 = state_14648;
var statearr_14716_17872 = state_14648__$1;
(statearr_14716_17872[(2)] = inst_14642);

(statearr_14716_17872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14649 === (10))){
var inst_14634 = (state_14648[(2)]);
var state_14648__$1 = state_14648;
var statearr_14717_17877 = state_14648__$1;
(statearr_14717_17877[(2)] = inst_14634);

(statearr_14717_17877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14649 === (8))){
var inst_14631 = cljs.core.async.close_BANG_(to);
var state_14648__$1 = state_14648;
var statearr_14718_17878 = state_14648__$1;
(statearr_14718_17878[(2)] = inst_14631);

(statearr_14718_17878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_14723 = [null,null,null,null,null,null,null,null];
(statearr_14723[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_14723[(1)] = (1));

return statearr_14723;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_14648){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_14648);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e14725){var ex__13309__auto__ = e14725;
var statearr_14726_17884 = state_14648;
(statearr_14726_17884[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_14648[(4)]))){
var statearr_14727_17885 = state_14648;
(statearr_14727_17885[(1)] = cljs.core.first((state_14648[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17893 = state_14648;
state_14648 = G__17893;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_14648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_14648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__14058__auto__ = (function (){var statearr_14731 = f__14057__auto__();
(statearr_14731[(6)] = c__14056__auto___17855);

return statearr_14731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14058__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14736){
var vec__14737 = p__14736;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14737,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14737,(1),null);
var job = vec__14737;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14056__auto___17897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14057__auto__ = (function (){var switch__13305__auto__ = (function (state_14744){
var state_val_14745 = (state_14744[(1)]);
if((state_val_14745 === (1))){
var state_14744__$1 = state_14744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14744__$1,(2),res,v);
} else {
if((state_val_14745 === (2))){
var inst_14741 = (state_14744[(2)]);
var inst_14742 = cljs.core.async.close_BANG_(res);
var state_14744__$1 = (function (){var statearr_14747 = state_14744;
(statearr_14747[(7)] = inst_14741);

return statearr_14747;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14744__$1,inst_14742);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0 = (function (){
var statearr_14751 = [null,null,null,null,null,null,null,null];
(statearr_14751[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__);

(statearr_14751[(1)] = (1));

return statearr_14751;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1 = (function (state_14744){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_14744);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e14753){var ex__13309__auto__ = e14753;
var statearr_14754_17898 = state_14744;
(statearr_14754_17898[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_14744[(4)]))){
var statearr_14755_17899 = state_14744;
(statearr_14755_17899[(1)] = cljs.core.first((state_14744[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17903 = state_14744;
state_14744 = G__17903;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__ = function(state_14744){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1.call(this,state_14744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__;
})()
})();
var state__14058__auto__ = (function (){var statearr_14764 = f__14057__auto__();
(statearr_14764[(6)] = c__14056__auto___17897);

return statearr_14764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14058__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14765){
var vec__14766 = p__14765;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14766,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14766,(1),null);
var job = vec__14766;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5616__auto___17906 = n;
var __17907 = (0);
while(true){
if((__17907 < n__5616__auto___17906)){
var G__14774_17908 = type;
var G__14774_17909__$1 = (((G__14774_17908 instanceof cljs.core.Keyword))?G__14774_17908.fqn:null);
switch (G__14774_17909__$1) {
case "compute":
var c__14056__auto___17911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17907,c__14056__auto___17911,G__14774_17908,G__14774_17909__$1,n__5616__auto___17906,jobs,results,process__$1,async){
return (function (){
var f__14057__auto__ = (function (){var switch__13305__auto__ = ((function (__17907,c__14056__auto___17911,G__14774_17908,G__14774_17909__$1,n__5616__auto___17906,jobs,results,process__$1,async){
return (function (state_14792){
var state_val_14793 = (state_14792[(1)]);
if((state_val_14793 === (1))){
var state_14792__$1 = state_14792;
var statearr_14798_17914 = state_14792__$1;
(statearr_14798_17914[(2)] = null);

(statearr_14798_17914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14793 === (2))){
var state_14792__$1 = state_14792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14792__$1,(4),jobs);
} else {
if((state_val_14793 === (3))){
var inst_14790 = (state_14792[(2)]);
var state_14792__$1 = state_14792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14792__$1,inst_14790);
} else {
if((state_val_14793 === (4))){
var inst_14779 = (state_14792[(2)]);
var inst_14780 = process__$1(inst_14779);
var state_14792__$1 = state_14792;
if(cljs.core.truth_(inst_14780)){
var statearr_14802_17918 = state_14792__$1;
(statearr_14802_17918[(1)] = (5));

} else {
var statearr_14803_17919 = state_14792__$1;
(statearr_14803_17919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14793 === (5))){
var state_14792__$1 = state_14792;
var statearr_14804_17920 = state_14792__$1;
(statearr_14804_17920[(2)] = null);

(statearr_14804_17920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14793 === (6))){
var state_14792__$1 = state_14792;
var statearr_14805_17921 = state_14792__$1;
(statearr_14805_17921[(2)] = null);

(statearr_14805_17921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14793 === (7))){
var inst_14788 = (state_14792[(2)]);
var state_14792__$1 = state_14792;
var statearr_14808_17922 = state_14792__$1;
(statearr_14808_17922[(2)] = inst_14788);

(statearr_14808_17922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17907,c__14056__auto___17911,G__14774_17908,G__14774_17909__$1,n__5616__auto___17906,jobs,results,process__$1,async))
;
return ((function (__17907,switch__13305__auto__,c__14056__auto___17911,G__14774_17908,G__14774_17909__$1,n__5616__auto___17906,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0 = (function (){
var statearr_14810 = [null,null,null,null,null,null,null];
(statearr_14810[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__);

(statearr_14810[(1)] = (1));

return statearr_14810;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1 = (function (state_14792){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_14792);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e14812){var ex__13309__auto__ = e14812;
var statearr_14813_17923 = state_14792;
(statearr_14813_17923[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_14792[(4)]))){
var statearr_14815_17926 = state_14792;
(statearr_14815_17926[(1)] = cljs.core.first((state_14792[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17933 = state_14792;
state_14792 = G__17933;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__ = function(state_14792){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1.call(this,state_14792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__;
})()
;})(__17907,switch__13305__auto__,c__14056__auto___17911,G__14774_17908,G__14774_17909__$1,n__5616__auto___17906,jobs,results,process__$1,async))
})();
var state__14058__auto__ = (function (){var statearr_14825 = f__14057__auto__();
(statearr_14825[(6)] = c__14056__auto___17911);

return statearr_14825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14058__auto__);
});})(__17907,c__14056__auto___17911,G__14774_17908,G__14774_17909__$1,n__5616__auto___17906,jobs,results,process__$1,async))
);


break;
case "async":
var c__14056__auto___17935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17907,c__14056__auto___17935,G__14774_17908,G__14774_17909__$1,n__5616__auto___17906,jobs,results,process__$1,async){
return (function (){
var f__14057__auto__ = (function (){var switch__13305__auto__ = ((function (__17907,c__14056__auto___17935,G__14774_17908,G__14774_17909__$1,n__5616__auto___17906,jobs,results,process__$1,async){
return (function (state_14848){
var state_val_14849 = (state_14848[(1)]);
if((state_val_14849 === (1))){
var state_14848__$1 = state_14848;
var statearr_14851_17936 = state_14848__$1;
(statearr_14851_17936[(2)] = null);

(statearr_14851_17936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (2))){
var state_14848__$1 = state_14848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14848__$1,(4),jobs);
} else {
if((state_val_14849 === (3))){
var inst_14846 = (state_14848[(2)]);
var state_14848__$1 = state_14848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14848__$1,inst_14846);
} else {
if((state_val_14849 === (4))){
var inst_14838 = (state_14848[(2)]);
var inst_14839 = async(inst_14838);
var state_14848__$1 = state_14848;
if(cljs.core.truth_(inst_14839)){
var statearr_14858_17938 = state_14848__$1;
(statearr_14858_17938[(1)] = (5));

} else {
var statearr_14859_17939 = state_14848__$1;
(statearr_14859_17939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (5))){
var state_14848__$1 = state_14848;
var statearr_14860_17940 = state_14848__$1;
(statearr_14860_17940[(2)] = null);

(statearr_14860_17940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (6))){
var state_14848__$1 = state_14848;
var statearr_14862_17946 = state_14848__$1;
(statearr_14862_17946[(2)] = null);

(statearr_14862_17946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (7))){
var inst_14844 = (state_14848[(2)]);
var state_14848__$1 = state_14848;
var statearr_14863_17948 = state_14848__$1;
(statearr_14863_17948[(2)] = inst_14844);

(statearr_14863_17948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17907,c__14056__auto___17935,G__14774_17908,G__14774_17909__$1,n__5616__auto___17906,jobs,results,process__$1,async))
;
return ((function (__17907,switch__13305__auto__,c__14056__auto___17935,G__14774_17908,G__14774_17909__$1,n__5616__auto___17906,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0 = (function (){
var statearr_14864 = [null,null,null,null,null,null,null];
(statearr_14864[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__);

(statearr_14864[(1)] = (1));

return statearr_14864;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1 = (function (state_14848){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_14848);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e14865){var ex__13309__auto__ = e14865;
var statearr_14866_17951 = state_14848;
(statearr_14866_17951[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_14848[(4)]))){
var statearr_14871_17952 = state_14848;
(statearr_14871_17952[(1)] = cljs.core.first((state_14848[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17955 = state_14848;
state_14848 = G__17955;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__ = function(state_14848){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1.call(this,state_14848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__;
})()
;})(__17907,switch__13305__auto__,c__14056__auto___17935,G__14774_17908,G__14774_17909__$1,n__5616__auto___17906,jobs,results,process__$1,async))
})();
var state__14058__auto__ = (function (){var statearr_14878 = f__14057__auto__();
(statearr_14878[(6)] = c__14056__auto___17935);

return statearr_14878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14058__auto__);
});})(__17907,c__14056__auto___17935,G__14774_17908,G__14774_17909__$1,n__5616__auto___17906,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14774_17909__$1)].join('')));

}

var G__17957 = (__17907 + (1));
__17907 = G__17957;
continue;
} else {
}
break;
}

var c__14056__auto___17958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14057__auto__ = (function (){var switch__13305__auto__ = (function (state_14906){
var state_val_14907 = (state_14906[(1)]);
if((state_val_14907 === (7))){
var inst_14902 = (state_14906[(2)]);
var state_14906__$1 = state_14906;
var statearr_14909_17959 = state_14906__$1;
(statearr_14909_17959[(2)] = inst_14902);

(statearr_14909_17959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14907 === (1))){
var state_14906__$1 = state_14906;
var statearr_14914_17960 = state_14906__$1;
(statearr_14914_17960[(2)] = null);

(statearr_14914_17960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14907 === (4))){
var inst_14883 = (state_14906[(7)]);
var inst_14883__$1 = (state_14906[(2)]);
var inst_14884 = (inst_14883__$1 == null);
var state_14906__$1 = (function (){var statearr_14915 = state_14906;
(statearr_14915[(7)] = inst_14883__$1);

return statearr_14915;
})();
if(cljs.core.truth_(inst_14884)){
var statearr_14916_17962 = state_14906__$1;
(statearr_14916_17962[(1)] = (5));

} else {
var statearr_14917_17965 = state_14906__$1;
(statearr_14917_17965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14907 === (6))){
var inst_14883 = (state_14906[(7)]);
var inst_14890 = (state_14906[(8)]);
var inst_14890__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14893 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14894 = [inst_14883,inst_14890__$1];
var inst_14895 = (new cljs.core.PersistentVector(null,2,(5),inst_14893,inst_14894,null));
var state_14906__$1 = (function (){var statearr_14924 = state_14906;
(statearr_14924[(8)] = inst_14890__$1);

return statearr_14924;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14906__$1,(8),jobs,inst_14895);
} else {
if((state_val_14907 === (3))){
var inst_14904 = (state_14906[(2)]);
var state_14906__$1 = state_14906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14906__$1,inst_14904);
} else {
if((state_val_14907 === (2))){
var state_14906__$1 = state_14906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14906__$1,(4),from);
} else {
if((state_val_14907 === (9))){
var inst_14899 = (state_14906[(2)]);
var state_14906__$1 = (function (){var statearr_14926 = state_14906;
(statearr_14926[(9)] = inst_14899);

return statearr_14926;
})();
var statearr_14927_17971 = state_14906__$1;
(statearr_14927_17971[(2)] = null);

(statearr_14927_17971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14907 === (5))){
var inst_14887 = cljs.core.async.close_BANG_(jobs);
var state_14906__$1 = state_14906;
var statearr_14928_17977 = state_14906__$1;
(statearr_14928_17977[(2)] = inst_14887);

(statearr_14928_17977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14907 === (8))){
var inst_14890 = (state_14906[(8)]);
var inst_14897 = (state_14906[(2)]);
var state_14906__$1 = (function (){var statearr_14929 = state_14906;
(statearr_14929[(10)] = inst_14897);

return statearr_14929;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14906__$1,(9),results,inst_14890);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0 = (function (){
var statearr_14930 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14930[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__);

(statearr_14930[(1)] = (1));

return statearr_14930;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1 = (function (state_14906){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_14906);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e14931){var ex__13309__auto__ = e14931;
var statearr_14932_17983 = state_14906;
(statearr_14932_17983[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_14906[(4)]))){
var statearr_14933_17984 = state_14906;
(statearr_14933_17984[(1)] = cljs.core.first((state_14906[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17985 = state_14906;
state_14906 = G__17985;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__ = function(state_14906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1.call(this,state_14906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__;
})()
})();
var state__14058__auto__ = (function (){var statearr_14935 = f__14057__auto__();
(statearr_14935[(6)] = c__14056__auto___17958);

return statearr_14935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14058__auto__);
}));


var c__14056__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14057__auto__ = (function (){var switch__13305__auto__ = (function (state_14979){
var state_val_14980 = (state_14979[(1)]);
if((state_val_14980 === (7))){
var inst_14975 = (state_14979[(2)]);
var state_14979__$1 = state_14979;
var statearr_14981_17989 = state_14979__$1;
(statearr_14981_17989[(2)] = inst_14975);

(statearr_14981_17989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14980 === (20))){
var state_14979__$1 = state_14979;
var statearr_14982_17990 = state_14979__$1;
(statearr_14982_17990[(2)] = null);

(statearr_14982_17990[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14980 === (1))){
var state_14979__$1 = state_14979;
var statearr_14984_17991 = state_14979__$1;
(statearr_14984_17991[(2)] = null);

(statearr_14984_17991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14980 === (4))){
var inst_14938 = (state_14979[(7)]);
var inst_14938__$1 = (state_14979[(2)]);
var inst_14939 = (inst_14938__$1 == null);
var state_14979__$1 = (function (){var statearr_14985 = state_14979;
(statearr_14985[(7)] = inst_14938__$1);

return statearr_14985;
})();
if(cljs.core.truth_(inst_14939)){
var statearr_14986_17993 = state_14979__$1;
(statearr_14986_17993[(1)] = (5));

} else {
var statearr_14987_17995 = state_14979__$1;
(statearr_14987_17995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14980 === (15))){
var inst_14957 = (state_14979[(8)]);
var state_14979__$1 = state_14979;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14979__$1,(18),to,inst_14957);
} else {
if((state_val_14980 === (21))){
var inst_14970 = (state_14979[(2)]);
var state_14979__$1 = state_14979;
var statearr_14988_17996 = state_14979__$1;
(statearr_14988_17996[(2)] = inst_14970);

(statearr_14988_17996[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14980 === (13))){
var inst_14972 = (state_14979[(2)]);
var state_14979__$1 = (function (){var statearr_14989 = state_14979;
(statearr_14989[(9)] = inst_14972);

return statearr_14989;
})();
var statearr_14990_18003 = state_14979__$1;
(statearr_14990_18003[(2)] = null);

(statearr_14990_18003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14980 === (6))){
var inst_14938 = (state_14979[(7)]);
var state_14979__$1 = state_14979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14979__$1,(11),inst_14938);
} else {
if((state_val_14980 === (17))){
var inst_14965 = (state_14979[(2)]);
var state_14979__$1 = state_14979;
if(cljs.core.truth_(inst_14965)){
var statearr_14993_18004 = state_14979__$1;
(statearr_14993_18004[(1)] = (19));

} else {
var statearr_14994_18005 = state_14979__$1;
(statearr_14994_18005[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14980 === (3))){
var inst_14977 = (state_14979[(2)]);
var state_14979__$1 = state_14979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14979__$1,inst_14977);
} else {
if((state_val_14980 === (12))){
var inst_14954 = (state_14979[(10)]);
var state_14979__$1 = state_14979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14979__$1,(14),inst_14954);
} else {
if((state_val_14980 === (2))){
var state_14979__$1 = state_14979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14979__$1,(4),results);
} else {
if((state_val_14980 === (19))){
var state_14979__$1 = state_14979;
var statearr_14998_18009 = state_14979__$1;
(statearr_14998_18009[(2)] = null);

(statearr_14998_18009[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14980 === (11))){
var inst_14954 = (state_14979[(2)]);
var state_14979__$1 = (function (){var statearr_14999 = state_14979;
(statearr_14999[(10)] = inst_14954);

return statearr_14999;
})();
var statearr_15001_18010 = state_14979__$1;
(statearr_15001_18010[(2)] = null);

(statearr_15001_18010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14980 === (9))){
var state_14979__$1 = state_14979;
var statearr_15006_18011 = state_14979__$1;
(statearr_15006_18011[(2)] = null);

(statearr_15006_18011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14980 === (5))){
var state_14979__$1 = state_14979;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15008_18016 = state_14979__$1;
(statearr_15008_18016[(1)] = (8));

} else {
var statearr_15009_18017 = state_14979__$1;
(statearr_15009_18017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14980 === (14))){
var inst_14957 = (state_14979[(8)]);
var inst_14959 = (state_14979[(11)]);
var inst_14957__$1 = (state_14979[(2)]);
var inst_14958 = (inst_14957__$1 == null);
var inst_14959__$1 = cljs.core.not(inst_14958);
var state_14979__$1 = (function (){var statearr_15011 = state_14979;
(statearr_15011[(8)] = inst_14957__$1);

(statearr_15011[(11)] = inst_14959__$1);

return statearr_15011;
})();
if(inst_14959__$1){
var statearr_15012_18018 = state_14979__$1;
(statearr_15012_18018[(1)] = (15));

} else {
var statearr_15013_18019 = state_14979__$1;
(statearr_15013_18019[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14980 === (16))){
var inst_14959 = (state_14979[(11)]);
var state_14979__$1 = state_14979;
var statearr_15015_18020 = state_14979__$1;
(statearr_15015_18020[(2)] = inst_14959);

(statearr_15015_18020[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14980 === (10))){
var inst_14951 = (state_14979[(2)]);
var state_14979__$1 = state_14979;
var statearr_15016_18021 = state_14979__$1;
(statearr_15016_18021[(2)] = inst_14951);

(statearr_15016_18021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14980 === (18))){
var inst_14962 = (state_14979[(2)]);
var state_14979__$1 = state_14979;
var statearr_15017_18034 = state_14979__$1;
(statearr_15017_18034[(2)] = inst_14962);

(statearr_15017_18034[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14980 === (8))){
var inst_14948 = cljs.core.async.close_BANG_(to);
var state_14979__$1 = state_14979;
var statearr_15018_18035 = state_14979__$1;
(statearr_15018_18035[(2)] = inst_14948);

(statearr_15018_18035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0 = (function (){
var statearr_15020 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15020[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__);

(statearr_15020[(1)] = (1));

return statearr_15020;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1 = (function (state_14979){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_14979);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e15021){var ex__13309__auto__ = e15021;
var statearr_15023_18042 = state_14979;
(statearr_15023_18042[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_14979[(4)]))){
var statearr_15024_18044 = state_14979;
(statearr_15024_18044[(1)] = cljs.core.first((state_14979[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18045 = state_14979;
state_14979 = G__18045;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__ = function(state_14979){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1.call(this,state_14979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__;
})()
})();
var state__14058__auto__ = (function (){var statearr_15026 = f__14057__auto__();
(statearr_15026[(6)] = c__14056__auto__);

return statearr_15026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14058__auto__);
}));

return c__14056__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15032 = arguments.length;
switch (G__15032) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15044 = arguments.length;
switch (G__15044) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15063 = arguments.length;
switch (G__15063) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14056__auto___18057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14057__auto__ = (function (){var switch__13305__auto__ = (function (state_15100){
var state_val_15101 = (state_15100[(1)]);
if((state_val_15101 === (7))){
var inst_15095 = (state_15100[(2)]);
var state_15100__$1 = state_15100;
var statearr_15104_18058 = state_15100__$1;
(statearr_15104_18058[(2)] = inst_15095);

(statearr_15104_18058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15101 === (1))){
var state_15100__$1 = state_15100;
var statearr_15106_18060 = state_15100__$1;
(statearr_15106_18060[(2)] = null);

(statearr_15106_18060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15101 === (4))){
var inst_15075 = (state_15100[(7)]);
var inst_15075__$1 = (state_15100[(2)]);
var inst_15077 = (inst_15075__$1 == null);
var state_15100__$1 = (function (){var statearr_15110 = state_15100;
(statearr_15110[(7)] = inst_15075__$1);

return statearr_15110;
})();
if(cljs.core.truth_(inst_15077)){
var statearr_15112_18062 = state_15100__$1;
(statearr_15112_18062[(1)] = (5));

} else {
var statearr_15114_18063 = state_15100__$1;
(statearr_15114_18063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15101 === (13))){
var state_15100__$1 = state_15100;
var statearr_15115_18064 = state_15100__$1;
(statearr_15115_18064[(2)] = null);

(statearr_15115_18064[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15101 === (6))){
var inst_15075 = (state_15100[(7)]);
var inst_15082 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15075) : p.call(null,inst_15075));
var state_15100__$1 = state_15100;
if(cljs.core.truth_(inst_15082)){
var statearr_15116_18068 = state_15100__$1;
(statearr_15116_18068[(1)] = (9));

} else {
var statearr_15117_18069 = state_15100__$1;
(statearr_15117_18069[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15101 === (3))){
var inst_15097 = (state_15100[(2)]);
var state_15100__$1 = state_15100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15100__$1,inst_15097);
} else {
if((state_val_15101 === (12))){
var state_15100__$1 = state_15100;
var statearr_15133_18070 = state_15100__$1;
(statearr_15133_18070[(2)] = null);

(statearr_15133_18070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15101 === (2))){
var state_15100__$1 = state_15100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15100__$1,(4),ch);
} else {
if((state_val_15101 === (11))){
var inst_15075 = (state_15100[(7)]);
var inst_15086 = (state_15100[(2)]);
var state_15100__$1 = state_15100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15100__$1,(8),inst_15086,inst_15075);
} else {
if((state_val_15101 === (9))){
var state_15100__$1 = state_15100;
var statearr_15148_18071 = state_15100__$1;
(statearr_15148_18071[(2)] = tc);

(statearr_15148_18071[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15101 === (5))){
var inst_15079 = cljs.core.async.close_BANG_(tc);
var inst_15080 = cljs.core.async.close_BANG_(fc);
var state_15100__$1 = (function (){var statearr_15150 = state_15100;
(statearr_15150[(8)] = inst_15079);

return statearr_15150;
})();
var statearr_15152_18075 = state_15100__$1;
(statearr_15152_18075[(2)] = inst_15080);

(statearr_15152_18075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15101 === (14))){
var inst_15093 = (state_15100[(2)]);
var state_15100__$1 = state_15100;
var statearr_15156_18076 = state_15100__$1;
(statearr_15156_18076[(2)] = inst_15093);

(statearr_15156_18076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15101 === (10))){
var state_15100__$1 = state_15100;
var statearr_15161_18083 = state_15100__$1;
(statearr_15161_18083[(2)] = fc);

(statearr_15161_18083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15101 === (8))){
var inst_15088 = (state_15100[(2)]);
var state_15100__$1 = state_15100;
if(cljs.core.truth_(inst_15088)){
var statearr_15167_18084 = state_15100__$1;
(statearr_15167_18084[(1)] = (12));

} else {
var statearr_15168_18085 = state_15100__$1;
(statearr_15168_18085[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_15174 = [null,null,null,null,null,null,null,null,null];
(statearr_15174[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_15174[(1)] = (1));

return statearr_15174;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_15100){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_15100);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e15177){var ex__13309__auto__ = e15177;
var statearr_15178_18091 = state_15100;
(statearr_15178_18091[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_15100[(4)]))){
var statearr_15186_18094 = state_15100;
(statearr_15186_18094[(1)] = cljs.core.first((state_15100[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18095 = state_15100;
state_15100 = G__18095;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_15100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_15100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__14058__auto__ = (function (){var statearr_15201 = f__14057__auto__();
(statearr_15201[(6)] = c__14056__auto___18057);

return statearr_15201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14058__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14056__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14057__auto__ = (function (){var switch__13305__auto__ = (function (state_15242){
var state_val_15243 = (state_15242[(1)]);
if((state_val_15243 === (7))){
var inst_15237 = (state_15242[(2)]);
var state_15242__$1 = state_15242;
var statearr_15246_18097 = state_15242__$1;
(statearr_15246_18097[(2)] = inst_15237);

(statearr_15246_18097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (1))){
var inst_15207 = init;
var inst_15209 = inst_15207;
var state_15242__$1 = (function (){var statearr_15248 = state_15242;
(statearr_15248[(7)] = inst_15209);

return statearr_15248;
})();
var statearr_15249_18098 = state_15242__$1;
(statearr_15249_18098[(2)] = null);

(statearr_15249_18098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (4))){
var inst_15220 = (state_15242[(8)]);
var inst_15220__$1 = (state_15242[(2)]);
var inst_15221 = (inst_15220__$1 == null);
var state_15242__$1 = (function (){var statearr_15251 = state_15242;
(statearr_15251[(8)] = inst_15220__$1);

return statearr_15251;
})();
if(cljs.core.truth_(inst_15221)){
var statearr_15253_18100 = state_15242__$1;
(statearr_15253_18100[(1)] = (5));

} else {
var statearr_15254_18101 = state_15242__$1;
(statearr_15254_18101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (6))){
var inst_15209 = (state_15242[(7)]);
var inst_15220 = (state_15242[(8)]);
var inst_15227 = (state_15242[(9)]);
var inst_15227__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15209,inst_15220) : f.call(null,inst_15209,inst_15220));
var inst_15228 = cljs.core.reduced_QMARK_(inst_15227__$1);
var state_15242__$1 = (function (){var statearr_15263 = state_15242;
(statearr_15263[(9)] = inst_15227__$1);

return statearr_15263;
})();
if(inst_15228){
var statearr_15264_18102 = state_15242__$1;
(statearr_15264_18102[(1)] = (8));

} else {
var statearr_15267_18103 = state_15242__$1;
(statearr_15267_18103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (3))){
var inst_15239 = (state_15242[(2)]);
var state_15242__$1 = state_15242;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15242__$1,inst_15239);
} else {
if((state_val_15243 === (2))){
var state_15242__$1 = state_15242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15242__$1,(4),ch);
} else {
if((state_val_15243 === (9))){
var inst_15227 = (state_15242[(9)]);
var inst_15209 = inst_15227;
var state_15242__$1 = (function (){var statearr_15270 = state_15242;
(statearr_15270[(7)] = inst_15209);

return statearr_15270;
})();
var statearr_15271_18113 = state_15242__$1;
(statearr_15271_18113[(2)] = null);

(statearr_15271_18113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (5))){
var inst_15209 = (state_15242[(7)]);
var state_15242__$1 = state_15242;
var statearr_15274_18114 = state_15242__$1;
(statearr_15274_18114[(2)] = inst_15209);

(statearr_15274_18114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (10))){
var inst_15235 = (state_15242[(2)]);
var state_15242__$1 = state_15242;
var statearr_15279_18119 = state_15242__$1;
(statearr_15279_18119[(2)] = inst_15235);

(statearr_15279_18119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (8))){
var inst_15227 = (state_15242[(9)]);
var inst_15230 = cljs.core.deref(inst_15227);
var state_15242__$1 = state_15242;
var statearr_15280_18125 = state_15242__$1;
(statearr_15280_18125[(2)] = inst_15230);

(statearr_15280_18125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13306__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13306__auto____0 = (function (){
var statearr_15287 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15287[(0)] = cljs$core$async$reduce_$_state_machine__13306__auto__);

(statearr_15287[(1)] = (1));

return statearr_15287;
});
var cljs$core$async$reduce_$_state_machine__13306__auto____1 = (function (state_15242){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_15242);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e15295){var ex__13309__auto__ = e15295;
var statearr_15296_18126 = state_15242;
(statearr_15296_18126[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_15242[(4)]))){
var statearr_15300_18127 = state_15242;
(statearr_15300_18127[(1)] = cljs.core.first((state_15242[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18128 = state_15242;
state_15242 = G__18128;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13306__auto__ = function(state_15242){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13306__auto____1.call(this,state_15242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13306__auto____0;
cljs$core$async$reduce_$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13306__auto____1;
return cljs$core$async$reduce_$_state_machine__13306__auto__;
})()
})();
var state__14058__auto__ = (function (){var statearr_15318 = f__14057__auto__();
(statearr_15318[(6)] = c__14056__auto__);

return statearr_15318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14058__auto__);
}));

return c__14056__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14056__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14057__auto__ = (function (){var switch__13305__auto__ = (function (state_15351){
var state_val_15352 = (state_15351[(1)]);
if((state_val_15352 === (1))){
var inst_15346 = cljs.core.async.reduce(f__$1,init,ch);
var state_15351__$1 = state_15351;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15351__$1,(2),inst_15346);
} else {
if((state_val_15352 === (2))){
var inst_15348 = (state_15351[(2)]);
var inst_15349 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15348) : f__$1.call(null,inst_15348));
var state_15351__$1 = state_15351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15351__$1,inst_15349);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13306__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13306__auto____0 = (function (){
var statearr_15386 = [null,null,null,null,null,null,null];
(statearr_15386[(0)] = cljs$core$async$transduce_$_state_machine__13306__auto__);

(statearr_15386[(1)] = (1));

return statearr_15386;
});
var cljs$core$async$transduce_$_state_machine__13306__auto____1 = (function (state_15351){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_15351);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e15387){var ex__13309__auto__ = e15387;
var statearr_15388_18142 = state_15351;
(statearr_15388_18142[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_15351[(4)]))){
var statearr_15390_18143 = state_15351;
(statearr_15390_18143[(1)] = cljs.core.first((state_15351[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18145 = state_15351;
state_15351 = G__18145;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13306__auto__ = function(state_15351){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13306__auto____1.call(this,state_15351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13306__auto____0;
cljs$core$async$transduce_$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13306__auto____1;
return cljs$core$async$transduce_$_state_machine__13306__auto__;
})()
})();
var state__14058__auto__ = (function (){var statearr_15396 = f__14057__auto__();
(statearr_15396[(6)] = c__14056__auto__);

return statearr_15396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14058__auto__);
}));

return c__14056__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15402 = arguments.length;
switch (G__15402) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14056__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14057__auto__ = (function (){var switch__13305__auto__ = (function (state_15441){
var state_val_15442 = (state_15441[(1)]);
if((state_val_15442 === (7))){
var inst_15422 = (state_15441[(2)]);
var state_15441__$1 = state_15441;
var statearr_15447_18150 = state_15441__$1;
(statearr_15447_18150[(2)] = inst_15422);

(statearr_15447_18150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (1))){
var inst_15416 = cljs.core.seq(coll);
var inst_15417 = inst_15416;
var state_15441__$1 = (function (){var statearr_15448 = state_15441;
(statearr_15448[(7)] = inst_15417);

return statearr_15448;
})();
var statearr_15453_18152 = state_15441__$1;
(statearr_15453_18152[(2)] = null);

(statearr_15453_18152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (4))){
var inst_15417 = (state_15441[(7)]);
var inst_15420 = cljs.core.first(inst_15417);
var state_15441__$1 = state_15441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15441__$1,(7),ch,inst_15420);
} else {
if((state_val_15442 === (13))){
var inst_15434 = (state_15441[(2)]);
var state_15441__$1 = state_15441;
var statearr_15460_18158 = state_15441__$1;
(statearr_15460_18158[(2)] = inst_15434);

(statearr_15460_18158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (6))){
var inst_15425 = (state_15441[(2)]);
var state_15441__$1 = state_15441;
if(cljs.core.truth_(inst_15425)){
var statearr_15462_18162 = state_15441__$1;
(statearr_15462_18162[(1)] = (8));

} else {
var statearr_15463_18163 = state_15441__$1;
(statearr_15463_18163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (3))){
var inst_15438 = (state_15441[(2)]);
var state_15441__$1 = state_15441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15441__$1,inst_15438);
} else {
if((state_val_15442 === (12))){
var state_15441__$1 = state_15441;
var statearr_15471_18166 = state_15441__$1;
(statearr_15471_18166[(2)] = null);

(statearr_15471_18166[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (2))){
var inst_15417 = (state_15441[(7)]);
var state_15441__$1 = state_15441;
if(cljs.core.truth_(inst_15417)){
var statearr_15481_18168 = state_15441__$1;
(statearr_15481_18168[(1)] = (4));

} else {
var statearr_15486_18169 = state_15441__$1;
(statearr_15486_18169[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (11))){
var inst_15431 = cljs.core.async.close_BANG_(ch);
var state_15441__$1 = state_15441;
var statearr_15495_18171 = state_15441__$1;
(statearr_15495_18171[(2)] = inst_15431);

(statearr_15495_18171[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (9))){
var state_15441__$1 = state_15441;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15501_18174 = state_15441__$1;
(statearr_15501_18174[(1)] = (11));

} else {
var statearr_15502_18175 = state_15441__$1;
(statearr_15502_18175[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (5))){
var inst_15417 = (state_15441[(7)]);
var state_15441__$1 = state_15441;
var statearr_15511_18176 = state_15441__$1;
(statearr_15511_18176[(2)] = inst_15417);

(statearr_15511_18176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (10))){
var inst_15436 = (state_15441[(2)]);
var state_15441__$1 = state_15441;
var statearr_15518_18177 = state_15441__$1;
(statearr_15518_18177[(2)] = inst_15436);

(statearr_15518_18177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (8))){
var inst_15417 = (state_15441[(7)]);
var inst_15427 = cljs.core.next(inst_15417);
var inst_15417__$1 = inst_15427;
var state_15441__$1 = (function (){var statearr_15529 = state_15441;
(statearr_15529[(7)] = inst_15417__$1);

return statearr_15529;
})();
var statearr_15534_18182 = state_15441__$1;
(statearr_15534_18182[(2)] = null);

(statearr_15534_18182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_15538 = [null,null,null,null,null,null,null,null];
(statearr_15538[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_15538[(1)] = (1));

return statearr_15538;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_15441){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_15441);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e15543){var ex__13309__auto__ = e15543;
var statearr_15544_18191 = state_15441;
(statearr_15544_18191[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_15441[(4)]))){
var statearr_15545_18192 = state_15441;
(statearr_15545_18192[(1)] = cljs.core.first((state_15441[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18193 = state_15441;
state_15441 = G__18193;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_15441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_15441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__14058__auto__ = (function (){var statearr_15548 = f__14057__auto__();
(statearr_15548[(6)] = c__14056__auto__);

return statearr_15548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14058__auto__);
}));

return c__14056__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15555 = arguments.length;
switch (G__15555) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18196 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18196(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18201 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5374__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5372__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18201(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18213 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18213(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18215 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18215(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15595 = (function (ch,cs,meta15596){
this.ch = ch;
this.cs = cs;
this.meta15596 = meta15596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15597,meta15596__$1){
var self__ = this;
var _15597__$1 = this;
return (new cljs.core.async.t_cljs$core$async15595(self__.ch,self__.cs,meta15596__$1));
}));

(cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15597){
var self__ = this;
var _15597__$1 = this;
return self__.meta15596;
}));

(cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15596","meta15596",-2126394538,null)], null);
}));

(cljs.core.async.t_cljs$core$async15595.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15595");

(cljs.core.async.t_cljs$core$async15595.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async15595");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15595.
 */
cljs.core.async.__GT_t_cljs$core$async15595 = (function cljs$core$async$__GT_t_cljs$core$async15595(ch,cs,meta15596){
return (new cljs.core.async.t_cljs$core$async15595(ch,cs,meta15596));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15595(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14056__auto___18217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14057__auto__ = (function (){var switch__13305__auto__ = (function (state_15769){
var state_val_15773 = (state_15769[(1)]);
if((state_val_15773 === (7))){
var inst_15762 = (state_15769[(2)]);
var state_15769__$1 = state_15769;
var statearr_15776_18218 = state_15769__$1;
(statearr_15776_18218[(2)] = inst_15762);

(statearr_15776_18218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (20))){
var inst_15650 = (state_15769[(7)]);
var inst_15667 = cljs.core.first(inst_15650);
var inst_15668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15667,(0),null);
var inst_15669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15667,(1),null);
var state_15769__$1 = (function (){var statearr_15786 = state_15769;
(statearr_15786[(8)] = inst_15668);

return statearr_15786;
})();
if(cljs.core.truth_(inst_15669)){
var statearr_15792_18221 = state_15769__$1;
(statearr_15792_18221[(1)] = (22));

} else {
var statearr_15793_18228 = state_15769__$1;
(statearr_15793_18228[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (27))){
var inst_15703 = (state_15769[(9)]);
var inst_15705 = (state_15769[(10)]);
var inst_15710 = (state_15769[(11)]);
var inst_15617 = (state_15769[(12)]);
var inst_15710__$1 = cljs.core._nth(inst_15703,inst_15705);
var inst_15712 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15710__$1,inst_15617,done);
var state_15769__$1 = (function (){var statearr_15805 = state_15769;
(statearr_15805[(11)] = inst_15710__$1);

return statearr_15805;
})();
if(cljs.core.truth_(inst_15712)){
var statearr_15813_18229 = state_15769__$1;
(statearr_15813_18229[(1)] = (30));

} else {
var statearr_15814_18230 = state_15769__$1;
(statearr_15814_18230[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (1))){
var state_15769__$1 = state_15769;
var statearr_15820_18231 = state_15769__$1;
(statearr_15820_18231[(2)] = null);

(statearr_15820_18231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (24))){
var inst_15650 = (state_15769[(7)]);
var inst_15676 = (state_15769[(2)]);
var inst_15677 = cljs.core.next(inst_15650);
var inst_15626 = inst_15677;
var inst_15627 = null;
var inst_15628 = (0);
var inst_15629 = (0);
var state_15769__$1 = (function (){var statearr_15826 = state_15769;
(statearr_15826[(13)] = inst_15676);

(statearr_15826[(14)] = inst_15626);

(statearr_15826[(15)] = inst_15627);

(statearr_15826[(16)] = inst_15628);

(statearr_15826[(17)] = inst_15629);

return statearr_15826;
})();
var statearr_15833_18232 = state_15769__$1;
(statearr_15833_18232[(2)] = null);

(statearr_15833_18232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (39))){
var state_15769__$1 = state_15769;
var statearr_15852_18234 = state_15769__$1;
(statearr_15852_18234[(2)] = null);

(statearr_15852_18234[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (4))){
var inst_15617 = (state_15769[(12)]);
var inst_15617__$1 = (state_15769[(2)]);
var inst_15618 = (inst_15617__$1 == null);
var state_15769__$1 = (function (){var statearr_15864 = state_15769;
(statearr_15864[(12)] = inst_15617__$1);

return statearr_15864;
})();
if(cljs.core.truth_(inst_15618)){
var statearr_15866_18237 = state_15769__$1;
(statearr_15866_18237[(1)] = (5));

} else {
var statearr_15875_18239 = state_15769__$1;
(statearr_15875_18239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (15))){
var inst_15629 = (state_15769[(17)]);
var inst_15626 = (state_15769[(14)]);
var inst_15627 = (state_15769[(15)]);
var inst_15628 = (state_15769[(16)]);
var inst_15644 = (state_15769[(2)]);
var inst_15646 = (inst_15629 + (1));
var tmp15839 = inst_15628;
var tmp15840 = inst_15626;
var tmp15841 = inst_15627;
var inst_15626__$1 = tmp15840;
var inst_15627__$1 = tmp15841;
var inst_15628__$1 = tmp15839;
var inst_15629__$1 = inst_15646;
var state_15769__$1 = (function (){var statearr_15892 = state_15769;
(statearr_15892[(18)] = inst_15644);

(statearr_15892[(14)] = inst_15626__$1);

(statearr_15892[(15)] = inst_15627__$1);

(statearr_15892[(16)] = inst_15628__$1);

(statearr_15892[(17)] = inst_15629__$1);

return statearr_15892;
})();
var statearr_15896_18243 = state_15769__$1;
(statearr_15896_18243[(2)] = null);

(statearr_15896_18243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (21))){
var inst_15680 = (state_15769[(2)]);
var state_15769__$1 = state_15769;
var statearr_15906_18246 = state_15769__$1;
(statearr_15906_18246[(2)] = inst_15680);

(statearr_15906_18246[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (31))){
var inst_15710 = (state_15769[(11)]);
var inst_15715 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15710);
var state_15769__$1 = state_15769;
var statearr_15914_18249 = state_15769__$1;
(statearr_15914_18249[(2)] = inst_15715);

(statearr_15914_18249[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (32))){
var inst_15705 = (state_15769[(10)]);
var inst_15701 = (state_15769[(19)]);
var inst_15703 = (state_15769[(9)]);
var inst_15704 = (state_15769[(20)]);
var inst_15717 = (state_15769[(2)]);
var inst_15718 = (inst_15705 + (1));
var tmp15899 = inst_15701;
var tmp15900 = inst_15704;
var tmp15901 = inst_15703;
var inst_15701__$1 = tmp15899;
var inst_15703__$1 = tmp15901;
var inst_15704__$1 = tmp15900;
var inst_15705__$1 = inst_15718;
var state_15769__$1 = (function (){var statearr_15928 = state_15769;
(statearr_15928[(21)] = inst_15717);

(statearr_15928[(19)] = inst_15701__$1);

(statearr_15928[(9)] = inst_15703__$1);

(statearr_15928[(20)] = inst_15704__$1);

(statearr_15928[(10)] = inst_15705__$1);

return statearr_15928;
})();
var statearr_15934_18252 = state_15769__$1;
(statearr_15934_18252[(2)] = null);

(statearr_15934_18252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (40))){
var inst_15733 = (state_15769[(22)]);
var inst_15739 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15733);
var state_15769__$1 = state_15769;
var statearr_15947_18254 = state_15769__$1;
(statearr_15947_18254[(2)] = inst_15739);

(statearr_15947_18254[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (33))){
var inst_15722 = (state_15769[(23)]);
var inst_15724 = cljs.core.chunked_seq_QMARK_(inst_15722);
var state_15769__$1 = state_15769;
if(inst_15724){
var statearr_15949_18255 = state_15769__$1;
(statearr_15949_18255[(1)] = (36));

} else {
var statearr_15950_18256 = state_15769__$1;
(statearr_15950_18256[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (13))){
var inst_15638 = (state_15769[(24)]);
var inst_15641 = cljs.core.async.close_BANG_(inst_15638);
var state_15769__$1 = state_15769;
var statearr_15955_18259 = state_15769__$1;
(statearr_15955_18259[(2)] = inst_15641);

(statearr_15955_18259[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (22))){
var inst_15668 = (state_15769[(8)]);
var inst_15673 = cljs.core.async.close_BANG_(inst_15668);
var state_15769__$1 = state_15769;
var statearr_15960_18270 = state_15769__$1;
(statearr_15960_18270[(2)] = inst_15673);

(statearr_15960_18270[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (36))){
var inst_15722 = (state_15769[(23)]);
var inst_15727 = cljs.core.chunk_first(inst_15722);
var inst_15729 = cljs.core.chunk_rest(inst_15722);
var inst_15730 = cljs.core.count(inst_15727);
var inst_15701 = inst_15729;
var inst_15703 = inst_15727;
var inst_15704 = inst_15730;
var inst_15705 = (0);
var state_15769__$1 = (function (){var statearr_15962 = state_15769;
(statearr_15962[(19)] = inst_15701);

(statearr_15962[(9)] = inst_15703);

(statearr_15962[(20)] = inst_15704);

(statearr_15962[(10)] = inst_15705);

return statearr_15962;
})();
var statearr_15963_18271 = state_15769__$1;
(statearr_15963_18271[(2)] = null);

(statearr_15963_18271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (41))){
var inst_15722 = (state_15769[(23)]);
var inst_15741 = (state_15769[(2)]);
var inst_15742 = cljs.core.next(inst_15722);
var inst_15701 = inst_15742;
var inst_15703 = null;
var inst_15704 = (0);
var inst_15705 = (0);
var state_15769__$1 = (function (){var statearr_15966 = state_15769;
(statearr_15966[(25)] = inst_15741);

(statearr_15966[(19)] = inst_15701);

(statearr_15966[(9)] = inst_15703);

(statearr_15966[(20)] = inst_15704);

(statearr_15966[(10)] = inst_15705);

return statearr_15966;
})();
var statearr_15969_18273 = state_15769__$1;
(statearr_15969_18273[(2)] = null);

(statearr_15969_18273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (43))){
var state_15769__$1 = state_15769;
var statearr_15971_18274 = state_15769__$1;
(statearr_15971_18274[(2)] = null);

(statearr_15971_18274[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (29))){
var inst_15750 = (state_15769[(2)]);
var state_15769__$1 = state_15769;
var statearr_15975_18275 = state_15769__$1;
(statearr_15975_18275[(2)] = inst_15750);

(statearr_15975_18275[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (44))){
var inst_15759 = (state_15769[(2)]);
var state_15769__$1 = (function (){var statearr_15977 = state_15769;
(statearr_15977[(26)] = inst_15759);

return statearr_15977;
})();
var statearr_15978_18276 = state_15769__$1;
(statearr_15978_18276[(2)] = null);

(statearr_15978_18276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (6))){
var inst_15693 = (state_15769[(27)]);
var inst_15692 = cljs.core.deref(cs);
var inst_15693__$1 = cljs.core.keys(inst_15692);
var inst_15694 = cljs.core.count(inst_15693__$1);
var inst_15695 = cljs.core.reset_BANG_(dctr,inst_15694);
var inst_15700 = cljs.core.seq(inst_15693__$1);
var inst_15701 = inst_15700;
var inst_15703 = null;
var inst_15704 = (0);
var inst_15705 = (0);
var state_15769__$1 = (function (){var statearr_15982 = state_15769;
(statearr_15982[(27)] = inst_15693__$1);

(statearr_15982[(28)] = inst_15695);

(statearr_15982[(19)] = inst_15701);

(statearr_15982[(9)] = inst_15703);

(statearr_15982[(20)] = inst_15704);

(statearr_15982[(10)] = inst_15705);

return statearr_15982;
})();
var statearr_15985_18277 = state_15769__$1;
(statearr_15985_18277[(2)] = null);

(statearr_15985_18277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (28))){
var inst_15701 = (state_15769[(19)]);
var inst_15722 = (state_15769[(23)]);
var inst_15722__$1 = cljs.core.seq(inst_15701);
var state_15769__$1 = (function (){var statearr_15987 = state_15769;
(statearr_15987[(23)] = inst_15722__$1);

return statearr_15987;
})();
if(inst_15722__$1){
var statearr_15989_18279 = state_15769__$1;
(statearr_15989_18279[(1)] = (33));

} else {
var statearr_15990_18281 = state_15769__$1;
(statearr_15990_18281[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (25))){
var inst_15705 = (state_15769[(10)]);
var inst_15704 = (state_15769[(20)]);
var inst_15707 = (inst_15705 < inst_15704);
var inst_15708 = inst_15707;
var state_15769__$1 = state_15769;
if(cljs.core.truth_(inst_15708)){
var statearr_15992_18282 = state_15769__$1;
(statearr_15992_18282[(1)] = (27));

} else {
var statearr_15993_18283 = state_15769__$1;
(statearr_15993_18283[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (34))){
var state_15769__$1 = state_15769;
var statearr_15994_18285 = state_15769__$1;
(statearr_15994_18285[(2)] = null);

(statearr_15994_18285[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (17))){
var state_15769__$1 = state_15769;
var statearr_15995_18286 = state_15769__$1;
(statearr_15995_18286[(2)] = null);

(statearr_15995_18286[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (3))){
var inst_15766 = (state_15769[(2)]);
var state_15769__$1 = state_15769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15769__$1,inst_15766);
} else {
if((state_val_15773 === (12))){
var inst_15685 = (state_15769[(2)]);
var state_15769__$1 = state_15769;
var statearr_15998_18289 = state_15769__$1;
(statearr_15998_18289[(2)] = inst_15685);

(statearr_15998_18289[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (2))){
var state_15769__$1 = state_15769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15769__$1,(4),ch);
} else {
if((state_val_15773 === (23))){
var state_15769__$1 = state_15769;
var statearr_16000_18290 = state_15769__$1;
(statearr_16000_18290[(2)] = null);

(statearr_16000_18290[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (35))){
var inst_15748 = (state_15769[(2)]);
var state_15769__$1 = state_15769;
var statearr_16001_18293 = state_15769__$1;
(statearr_16001_18293[(2)] = inst_15748);

(statearr_16001_18293[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (19))){
var inst_15650 = (state_15769[(7)]);
var inst_15654 = cljs.core.chunk_first(inst_15650);
var inst_15655 = cljs.core.chunk_rest(inst_15650);
var inst_15656 = cljs.core.count(inst_15654);
var inst_15626 = inst_15655;
var inst_15627 = inst_15654;
var inst_15628 = inst_15656;
var inst_15629 = (0);
var state_15769__$1 = (function (){var statearr_16002 = state_15769;
(statearr_16002[(14)] = inst_15626);

(statearr_16002[(15)] = inst_15627);

(statearr_16002[(16)] = inst_15628);

(statearr_16002[(17)] = inst_15629);

return statearr_16002;
})();
var statearr_16004_18297 = state_15769__$1;
(statearr_16004_18297[(2)] = null);

(statearr_16004_18297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (11))){
var inst_15626 = (state_15769[(14)]);
var inst_15650 = (state_15769[(7)]);
var inst_15650__$1 = cljs.core.seq(inst_15626);
var state_15769__$1 = (function (){var statearr_16006 = state_15769;
(statearr_16006[(7)] = inst_15650__$1);

return statearr_16006;
})();
if(inst_15650__$1){
var statearr_16007_18301 = state_15769__$1;
(statearr_16007_18301[(1)] = (16));

} else {
var statearr_16008_18302 = state_15769__$1;
(statearr_16008_18302[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (9))){
var inst_15687 = (state_15769[(2)]);
var state_15769__$1 = state_15769;
var statearr_16009_18304 = state_15769__$1;
(statearr_16009_18304[(2)] = inst_15687);

(statearr_16009_18304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (5))){
var inst_15624 = cljs.core.deref(cs);
var inst_15625 = cljs.core.seq(inst_15624);
var inst_15626 = inst_15625;
var inst_15627 = null;
var inst_15628 = (0);
var inst_15629 = (0);
var state_15769__$1 = (function (){var statearr_16010 = state_15769;
(statearr_16010[(14)] = inst_15626);

(statearr_16010[(15)] = inst_15627);

(statearr_16010[(16)] = inst_15628);

(statearr_16010[(17)] = inst_15629);

return statearr_16010;
})();
var statearr_16013_18308 = state_15769__$1;
(statearr_16013_18308[(2)] = null);

(statearr_16013_18308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (14))){
var state_15769__$1 = state_15769;
var statearr_16014_18310 = state_15769__$1;
(statearr_16014_18310[(2)] = null);

(statearr_16014_18310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (45))){
var inst_15756 = (state_15769[(2)]);
var state_15769__$1 = state_15769;
var statearr_16017_18313 = state_15769__$1;
(statearr_16017_18313[(2)] = inst_15756);

(statearr_16017_18313[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (26))){
var inst_15693 = (state_15769[(27)]);
var inst_15752 = (state_15769[(2)]);
var inst_15753 = cljs.core.seq(inst_15693);
var state_15769__$1 = (function (){var statearr_16021 = state_15769;
(statearr_16021[(29)] = inst_15752);

return statearr_16021;
})();
if(inst_15753){
var statearr_16022_18314 = state_15769__$1;
(statearr_16022_18314[(1)] = (42));

} else {
var statearr_16023_18318 = state_15769__$1;
(statearr_16023_18318[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (16))){
var inst_15650 = (state_15769[(7)]);
var inst_15652 = cljs.core.chunked_seq_QMARK_(inst_15650);
var state_15769__$1 = state_15769;
if(inst_15652){
var statearr_16025_18322 = state_15769__$1;
(statearr_16025_18322[(1)] = (19));

} else {
var statearr_16026_18323 = state_15769__$1;
(statearr_16026_18323[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (38))){
var inst_15745 = (state_15769[(2)]);
var state_15769__$1 = state_15769;
var statearr_16027_18325 = state_15769__$1;
(statearr_16027_18325[(2)] = inst_15745);

(statearr_16027_18325[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (30))){
var state_15769__$1 = state_15769;
var statearr_16028_18328 = state_15769__$1;
(statearr_16028_18328[(2)] = null);

(statearr_16028_18328[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (10))){
var inst_15627 = (state_15769[(15)]);
var inst_15629 = (state_15769[(17)]);
var inst_15637 = cljs.core._nth(inst_15627,inst_15629);
var inst_15638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15637,(0),null);
var inst_15639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15637,(1),null);
var state_15769__$1 = (function (){var statearr_16032 = state_15769;
(statearr_16032[(24)] = inst_15638);

return statearr_16032;
})();
if(cljs.core.truth_(inst_15639)){
var statearr_16033_18330 = state_15769__$1;
(statearr_16033_18330[(1)] = (13));

} else {
var statearr_16034_18331 = state_15769__$1;
(statearr_16034_18331[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (18))){
var inst_15683 = (state_15769[(2)]);
var state_15769__$1 = state_15769;
var statearr_16040_18332 = state_15769__$1;
(statearr_16040_18332[(2)] = inst_15683);

(statearr_16040_18332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (42))){
var state_15769__$1 = state_15769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15769__$1,(45),dchan);
} else {
if((state_val_15773 === (37))){
var inst_15722 = (state_15769[(23)]);
var inst_15733 = (state_15769[(22)]);
var inst_15617 = (state_15769[(12)]);
var inst_15733__$1 = cljs.core.first(inst_15722);
var inst_15736 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15733__$1,inst_15617,done);
var state_15769__$1 = (function (){var statearr_16042 = state_15769;
(statearr_16042[(22)] = inst_15733__$1);

return statearr_16042;
})();
if(cljs.core.truth_(inst_15736)){
var statearr_16043_18333 = state_15769__$1;
(statearr_16043_18333[(1)] = (39));

} else {
var statearr_16044_18334 = state_15769__$1;
(statearr_16044_18334[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (8))){
var inst_15629 = (state_15769[(17)]);
var inst_15628 = (state_15769[(16)]);
var inst_15631 = (inst_15629 < inst_15628);
var inst_15632 = inst_15631;
var state_15769__$1 = state_15769;
if(cljs.core.truth_(inst_15632)){
var statearr_16045_18335 = state_15769__$1;
(statearr_16045_18335[(1)] = (10));

} else {
var statearr_16046_18336 = state_15769__$1;
(statearr_16046_18336[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13306__auto__ = null;
var cljs$core$async$mult_$_state_machine__13306__auto____0 = (function (){
var statearr_16050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16050[(0)] = cljs$core$async$mult_$_state_machine__13306__auto__);

(statearr_16050[(1)] = (1));

return statearr_16050;
});
var cljs$core$async$mult_$_state_machine__13306__auto____1 = (function (state_15769){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_15769);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e16051){var ex__13309__auto__ = e16051;
var statearr_16052_18344 = state_15769;
(statearr_16052_18344[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_15769[(4)]))){
var statearr_16054_18346 = state_15769;
(statearr_16054_18346[(1)] = cljs.core.first((state_15769[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18347 = state_15769;
state_15769 = G__18347;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13306__auto__ = function(state_15769){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13306__auto____1.call(this,state_15769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13306__auto____0;
cljs$core$async$mult_$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13306__auto____1;
return cljs$core$async$mult_$_state_machine__13306__auto__;
})()
})();
var state__14058__auto__ = (function (){var statearr_16056 = f__14057__auto__();
(statearr_16056[(6)] = c__14056__auto___18217);

return statearr_16056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14058__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16066 = arguments.length;
switch (G__16066) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18353 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18353(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18356 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18356(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18357 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18357(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18365 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5374__auto__.call(null,m,state_map));
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5372__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18365(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18368 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5374__auto__.call(null,m,mode));
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5372__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18368(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___18373 = arguments.length;
var i__5750__auto___18374 = (0);
while(true){
if((i__5750__auto___18374 < len__5749__auto___18373)){
args__5755__auto__.push((arguments[i__5750__auto___18374]));

var G__18375 = (i__5750__auto___18374 + (1));
i__5750__auto___18374 = G__18375;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16129){
var map__16130 = p__16129;
var map__16130__$1 = cljs.core.__destructure_map(map__16130);
var opts = map__16130__$1;
var statearr_16132_18381 = state;
(statearr_16132_18381[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16135_18386 = state;
(statearr_16135_18386[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_16137_18387 = state;
(statearr_16137_18387[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16121){
var G__16122 = cljs.core.first(seq16121);
var seq16121__$1 = cljs.core.next(seq16121);
var G__16123 = cljs.core.first(seq16121__$1);
var seq16121__$2 = cljs.core.next(seq16121__$1);
var G__16124 = cljs.core.first(seq16121__$2);
var seq16121__$3 = cljs.core.next(seq16121__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16122,G__16123,G__16124,seq16121__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16161 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16162){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16162 = meta16162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16163,meta16162__$1){
var self__ = this;
var _16163__$1 = this;
return (new cljs.core.async.t_cljs$core$async16161(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16162__$1));
}));

(cljs.core.async.t_cljs$core$async16161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16163){
var self__ = this;
var _16163__$1 = this;
return self__.meta16162;
}));

(cljs.core.async.t_cljs$core$async16161.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16161.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16161.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16161.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16161.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16161.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16161.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16161.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16162","meta16162",-52997858,null)], null);
}));

(cljs.core.async.t_cljs$core$async16161.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16161");

(cljs.core.async.t_cljs$core$async16161.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async16161");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16161.
 */
cljs.core.async.__GT_t_cljs$core$async16161 = (function cljs$core$async$__GT_t_cljs$core$async16161(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16162){
return (new cljs.core.async.t_cljs$core$async16161(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16162));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16161(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14056__auto___18401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14057__auto__ = (function (){var switch__13305__auto__ = (function (state_16269){
var state_val_16271 = (state_16269[(1)]);
if((state_val_16271 === (7))){
var inst_16221 = (state_16269[(2)]);
var state_16269__$1 = state_16269;
if(cljs.core.truth_(inst_16221)){
var statearr_16276_18403 = state_16269__$1;
(statearr_16276_18403[(1)] = (8));

} else {
var statearr_16277_18404 = state_16269__$1;
(statearr_16277_18404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (20))){
var inst_16214 = (state_16269[(7)]);
var state_16269__$1 = state_16269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16269__$1,(23),out,inst_16214);
} else {
if((state_val_16271 === (1))){
var inst_16193 = calc_state();
var inst_16195 = cljs.core.__destructure_map(inst_16193);
var inst_16196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16195,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16195,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16195,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16199 = inst_16193;
var state_16269__$1 = (function (){var statearr_16281 = state_16269;
(statearr_16281[(8)] = inst_16196);

(statearr_16281[(9)] = inst_16197);

(statearr_16281[(10)] = inst_16198);

(statearr_16281[(11)] = inst_16199);

return statearr_16281;
})();
var statearr_16282_18405 = state_16269__$1;
(statearr_16282_18405[(2)] = null);

(statearr_16282_18405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (24))){
var inst_16202 = (state_16269[(12)]);
var inst_16199 = inst_16202;
var state_16269__$1 = (function (){var statearr_16286 = state_16269;
(statearr_16286[(11)] = inst_16199);

return statearr_16286;
})();
var statearr_16287_18406 = state_16269__$1;
(statearr_16287_18406[(2)] = null);

(statearr_16287_18406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (4))){
var inst_16214 = (state_16269[(7)]);
var inst_16216 = (state_16269[(13)]);
var inst_16213 = (state_16269[(2)]);
var inst_16214__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16213,(0),null);
var inst_16215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16213,(1),null);
var inst_16216__$1 = (inst_16214__$1 == null);
var state_16269__$1 = (function (){var statearr_16291 = state_16269;
(statearr_16291[(7)] = inst_16214__$1);

(statearr_16291[(14)] = inst_16215);

(statearr_16291[(13)] = inst_16216__$1);

return statearr_16291;
})();
if(cljs.core.truth_(inst_16216__$1)){
var statearr_16293_18407 = state_16269__$1;
(statearr_16293_18407[(1)] = (5));

} else {
var statearr_16296_18408 = state_16269__$1;
(statearr_16296_18408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (15))){
var inst_16204 = (state_16269[(15)]);
var inst_16238 = (state_16269[(16)]);
var inst_16238__$1 = cljs.core.empty_QMARK_(inst_16204);
var state_16269__$1 = (function (){var statearr_16299 = state_16269;
(statearr_16299[(16)] = inst_16238__$1);

return statearr_16299;
})();
if(inst_16238__$1){
var statearr_16301_18409 = state_16269__$1;
(statearr_16301_18409[(1)] = (17));

} else {
var statearr_16302_18410 = state_16269__$1;
(statearr_16302_18410[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (21))){
var inst_16202 = (state_16269[(12)]);
var inst_16199 = inst_16202;
var state_16269__$1 = (function (){var statearr_16304 = state_16269;
(statearr_16304[(11)] = inst_16199);

return statearr_16304;
})();
var statearr_16305_18411 = state_16269__$1;
(statearr_16305_18411[(2)] = null);

(statearr_16305_18411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (13))){
var inst_16230 = (state_16269[(2)]);
var inst_16231 = calc_state();
var inst_16199 = inst_16231;
var state_16269__$1 = (function (){var statearr_16309 = state_16269;
(statearr_16309[(17)] = inst_16230);

(statearr_16309[(11)] = inst_16199);

return statearr_16309;
})();
var statearr_16310_18414 = state_16269__$1;
(statearr_16310_18414[(2)] = null);

(statearr_16310_18414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (22))){
var inst_16260 = (state_16269[(2)]);
var state_16269__$1 = state_16269;
var statearr_16311_18415 = state_16269__$1;
(statearr_16311_18415[(2)] = inst_16260);

(statearr_16311_18415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (6))){
var inst_16215 = (state_16269[(14)]);
var inst_16219 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16215,change);
var state_16269__$1 = state_16269;
var statearr_16319_18416 = state_16269__$1;
(statearr_16319_18416[(2)] = inst_16219);

(statearr_16319_18416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (25))){
var state_16269__$1 = state_16269;
var statearr_16324_18417 = state_16269__$1;
(statearr_16324_18417[(2)] = null);

(statearr_16324_18417[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (17))){
var inst_16206 = (state_16269[(18)]);
var inst_16215 = (state_16269[(14)]);
var inst_16241 = (inst_16206.cljs$core$IFn$_invoke$arity$1 ? inst_16206.cljs$core$IFn$_invoke$arity$1(inst_16215) : inst_16206.call(null,inst_16215));
var inst_16242 = cljs.core.not(inst_16241);
var state_16269__$1 = state_16269;
var statearr_16327_18418 = state_16269__$1;
(statearr_16327_18418[(2)] = inst_16242);

(statearr_16327_18418[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (3))){
var inst_16265 = (state_16269[(2)]);
var state_16269__$1 = state_16269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16269__$1,inst_16265);
} else {
if((state_val_16271 === (12))){
var state_16269__$1 = state_16269;
var statearr_16337_18419 = state_16269__$1;
(statearr_16337_18419[(2)] = null);

(statearr_16337_18419[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (2))){
var inst_16199 = (state_16269[(11)]);
var inst_16202 = (state_16269[(12)]);
var inst_16202__$1 = cljs.core.__destructure_map(inst_16199);
var inst_16204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16202__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16202__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16202__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16269__$1 = (function (){var statearr_16343 = state_16269;
(statearr_16343[(12)] = inst_16202__$1);

(statearr_16343[(15)] = inst_16204);

(statearr_16343[(18)] = inst_16206);

return statearr_16343;
})();
return cljs.core.async.ioc_alts_BANG_(state_16269__$1,(4),inst_16207);
} else {
if((state_val_16271 === (23))){
var inst_16251 = (state_16269[(2)]);
var state_16269__$1 = state_16269;
if(cljs.core.truth_(inst_16251)){
var statearr_16345_18422 = state_16269__$1;
(statearr_16345_18422[(1)] = (24));

} else {
var statearr_16346_18424 = state_16269__$1;
(statearr_16346_18424[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (19))){
var inst_16245 = (state_16269[(2)]);
var state_16269__$1 = state_16269;
var statearr_16354_18425 = state_16269__$1;
(statearr_16354_18425[(2)] = inst_16245);

(statearr_16354_18425[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (11))){
var inst_16215 = (state_16269[(14)]);
var inst_16227 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16215);
var state_16269__$1 = state_16269;
var statearr_16362_18429 = state_16269__$1;
(statearr_16362_18429[(2)] = inst_16227);

(statearr_16362_18429[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (9))){
var inst_16204 = (state_16269[(15)]);
var inst_16215 = (state_16269[(14)]);
var inst_16234 = (state_16269[(19)]);
var inst_16234__$1 = (inst_16204.cljs$core$IFn$_invoke$arity$1 ? inst_16204.cljs$core$IFn$_invoke$arity$1(inst_16215) : inst_16204.call(null,inst_16215));
var state_16269__$1 = (function (){var statearr_16364 = state_16269;
(statearr_16364[(19)] = inst_16234__$1);

return statearr_16364;
})();
if(cljs.core.truth_(inst_16234__$1)){
var statearr_16365_18430 = state_16269__$1;
(statearr_16365_18430[(1)] = (14));

} else {
var statearr_16366_18431 = state_16269__$1;
(statearr_16366_18431[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (5))){
var inst_16216 = (state_16269[(13)]);
var state_16269__$1 = state_16269;
var statearr_16371_18433 = state_16269__$1;
(statearr_16371_18433[(2)] = inst_16216);

(statearr_16371_18433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (14))){
var inst_16234 = (state_16269[(19)]);
var state_16269__$1 = state_16269;
var statearr_16373_18434 = state_16269__$1;
(statearr_16373_18434[(2)] = inst_16234);

(statearr_16373_18434[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (26))){
var inst_16256 = (state_16269[(2)]);
var state_16269__$1 = state_16269;
var statearr_16380_18436 = state_16269__$1;
(statearr_16380_18436[(2)] = inst_16256);

(statearr_16380_18436[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (16))){
var inst_16248 = (state_16269[(2)]);
var state_16269__$1 = state_16269;
if(cljs.core.truth_(inst_16248)){
var statearr_16382_18437 = state_16269__$1;
(statearr_16382_18437[(1)] = (20));

} else {
var statearr_16383_18438 = state_16269__$1;
(statearr_16383_18438[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (10))){
var inst_16262 = (state_16269[(2)]);
var state_16269__$1 = state_16269;
var statearr_16386_18441 = state_16269__$1;
(statearr_16386_18441[(2)] = inst_16262);

(statearr_16386_18441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (18))){
var inst_16238 = (state_16269[(16)]);
var state_16269__$1 = state_16269;
var statearr_16390_18442 = state_16269__$1;
(statearr_16390_18442[(2)] = inst_16238);

(statearr_16390_18442[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16271 === (8))){
var inst_16214 = (state_16269[(7)]);
var inst_16225 = (inst_16214 == null);
var state_16269__$1 = state_16269;
if(cljs.core.truth_(inst_16225)){
var statearr_16394_18443 = state_16269__$1;
(statearr_16394_18443[(1)] = (11));

} else {
var statearr_16396_18444 = state_16269__$1;
(statearr_16396_18444[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13306__auto__ = null;
var cljs$core$async$mix_$_state_machine__13306__auto____0 = (function (){
var statearr_16398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16398[(0)] = cljs$core$async$mix_$_state_machine__13306__auto__);

(statearr_16398[(1)] = (1));

return statearr_16398;
});
var cljs$core$async$mix_$_state_machine__13306__auto____1 = (function (state_16269){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_16269);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e16400){var ex__13309__auto__ = e16400;
var statearr_16402_18449 = state_16269;
(statearr_16402_18449[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_16269[(4)]))){
var statearr_16405_18450 = state_16269;
(statearr_16405_18450[(1)] = cljs.core.first((state_16269[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18451 = state_16269;
state_16269 = G__18451;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13306__auto__ = function(state_16269){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13306__auto____1.call(this,state_16269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13306__auto____0;
cljs$core$async$mix_$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13306__auto____1;
return cljs$core$async$mix_$_state_machine__13306__auto__;
})()
})();
var state__14058__auto__ = (function (){var statearr_16408 = f__14057__auto__();
(statearr_16408[(6)] = c__14056__auto___18401);

return statearr_16408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14058__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18454 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5374__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5372__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18454(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18458 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5374__auto__.call(null,p,v,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5372__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18458(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18462 = (function() {
var G__18463 = null;
var G__18463__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5374__auto__.call(null,p));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5372__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18463__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5374__auto__.call(null,p,v));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5372__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18463 = function(p,v){
switch(arguments.length){
case 1:
return G__18463__1.call(this,p);
case 2:
return G__18463__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18463.cljs$core$IFn$_invoke$arity$1 = G__18463__1;
G__18463.cljs$core$IFn$_invoke$arity$2 = G__18463__2;
return G__18463;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16492 = arguments.length;
switch (G__16492) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18462(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18462(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16541 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16542){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16542 = meta16542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16543,meta16542__$1){
var self__ = this;
var _16543__$1 = this;
return (new cljs.core.async.t_cljs$core$async16541(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16542__$1));
}));

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16543){
var self__ = this;
var _16543__$1 = this;
return self__.meta16542;
}));

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16541.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16542","meta16542",227112830,null)], null);
}));

(cljs.core.async.t_cljs$core$async16541.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16541");

(cljs.core.async.t_cljs$core$async16541.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async16541");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16541.
 */
cljs.core.async.__GT_t_cljs$core$async16541 = (function cljs$core$async$__GT_t_cljs$core$async16541(ch,topic_fn,buf_fn,mults,ensure_mult,meta16542){
return (new cljs.core.async.t_cljs$core$async16541(ch,topic_fn,buf_fn,mults,ensure_mult,meta16542));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16519 = arguments.length;
switch (G__16519) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16515_SHARP_){
if(cljs.core.truth_((p1__16515_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16515_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16515_SHARP_.call(null,topic)))){
return p1__16515_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16515_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16541(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14056__auto___18475 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14057__auto__ = (function (){var switch__13305__auto__ = (function (state_16633){
var state_val_16634 = (state_16633[(1)]);
if((state_val_16634 === (7))){
var inst_16629 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
var statearr_16635_18476 = state_16633__$1;
(statearr_16635_18476[(2)] = inst_16629);

(statearr_16635_18476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (20))){
var state_16633__$1 = state_16633;
var statearr_16636_18477 = state_16633__$1;
(statearr_16636_18477[(2)] = null);

(statearr_16636_18477[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (1))){
var state_16633__$1 = state_16633;
var statearr_16640_18478 = state_16633__$1;
(statearr_16640_18478[(2)] = null);

(statearr_16640_18478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (24))){
var inst_16611 = (state_16633[(7)]);
var inst_16621 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16611);
var state_16633__$1 = state_16633;
var statearr_16641_18479 = state_16633__$1;
(statearr_16641_18479[(2)] = inst_16621);

(statearr_16641_18479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (4))){
var inst_16561 = (state_16633[(8)]);
var inst_16561__$1 = (state_16633[(2)]);
var inst_16563 = (inst_16561__$1 == null);
var state_16633__$1 = (function (){var statearr_16642 = state_16633;
(statearr_16642[(8)] = inst_16561__$1);

return statearr_16642;
})();
if(cljs.core.truth_(inst_16563)){
var statearr_16643_18480 = state_16633__$1;
(statearr_16643_18480[(1)] = (5));

} else {
var statearr_16644_18481 = state_16633__$1;
(statearr_16644_18481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (15))){
var inst_16605 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
var statearr_16646_18482 = state_16633__$1;
(statearr_16646_18482[(2)] = inst_16605);

(statearr_16646_18482[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (21))){
var inst_16626 = (state_16633[(2)]);
var state_16633__$1 = (function (){var statearr_16648 = state_16633;
(statearr_16648[(9)] = inst_16626);

return statearr_16648;
})();
var statearr_16649_18487 = state_16633__$1;
(statearr_16649_18487[(2)] = null);

(statearr_16649_18487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (13))){
var inst_16587 = (state_16633[(10)]);
var inst_16589 = cljs.core.chunked_seq_QMARK_(inst_16587);
var state_16633__$1 = state_16633;
if(inst_16589){
var statearr_16650_18488 = state_16633__$1;
(statearr_16650_18488[(1)] = (16));

} else {
var statearr_16651_18489 = state_16633__$1;
(statearr_16651_18489[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (22))){
var inst_16617 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
if(cljs.core.truth_(inst_16617)){
var statearr_16652_18490 = state_16633__$1;
(statearr_16652_18490[(1)] = (23));

} else {
var statearr_16653_18491 = state_16633__$1;
(statearr_16653_18491[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (6))){
var inst_16561 = (state_16633[(8)]);
var inst_16611 = (state_16633[(7)]);
var inst_16613 = (state_16633[(11)]);
var inst_16611__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16561) : topic_fn.call(null,inst_16561));
var inst_16612 = cljs.core.deref(mults);
var inst_16613__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16612,inst_16611__$1);
var state_16633__$1 = (function (){var statearr_16661 = state_16633;
(statearr_16661[(7)] = inst_16611__$1);

(statearr_16661[(11)] = inst_16613__$1);

return statearr_16661;
})();
if(cljs.core.truth_(inst_16613__$1)){
var statearr_16664_18495 = state_16633__$1;
(statearr_16664_18495[(1)] = (19));

} else {
var statearr_16665_18496 = state_16633__$1;
(statearr_16665_18496[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (25))){
var inst_16623 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
var statearr_16666_18501 = state_16633__$1;
(statearr_16666_18501[(2)] = inst_16623);

(statearr_16666_18501[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (17))){
var inst_16587 = (state_16633[(10)]);
var inst_16596 = cljs.core.first(inst_16587);
var inst_16597 = cljs.core.async.muxch_STAR_(inst_16596);
var inst_16598 = cljs.core.async.close_BANG_(inst_16597);
var inst_16599 = cljs.core.next(inst_16587);
var inst_16573 = inst_16599;
var inst_16574 = null;
var inst_16575 = (0);
var inst_16576 = (0);
var state_16633__$1 = (function (){var statearr_16667 = state_16633;
(statearr_16667[(12)] = inst_16598);

(statearr_16667[(13)] = inst_16573);

(statearr_16667[(14)] = inst_16574);

(statearr_16667[(15)] = inst_16575);

(statearr_16667[(16)] = inst_16576);

return statearr_16667;
})();
var statearr_16668_18506 = state_16633__$1;
(statearr_16668_18506[(2)] = null);

(statearr_16668_18506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (3))){
var inst_16631 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16633__$1,inst_16631);
} else {
if((state_val_16634 === (12))){
var inst_16607 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
var statearr_16671_18507 = state_16633__$1;
(statearr_16671_18507[(2)] = inst_16607);

(statearr_16671_18507[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (2))){
var state_16633__$1 = state_16633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16633__$1,(4),ch);
} else {
if((state_val_16634 === (23))){
var state_16633__$1 = state_16633;
var statearr_16672_18509 = state_16633__$1;
(statearr_16672_18509[(2)] = null);

(statearr_16672_18509[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (19))){
var inst_16613 = (state_16633[(11)]);
var inst_16561 = (state_16633[(8)]);
var inst_16615 = cljs.core.async.muxch_STAR_(inst_16613);
var state_16633__$1 = state_16633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16633__$1,(22),inst_16615,inst_16561);
} else {
if((state_val_16634 === (11))){
var inst_16573 = (state_16633[(13)]);
var inst_16587 = (state_16633[(10)]);
var inst_16587__$1 = cljs.core.seq(inst_16573);
var state_16633__$1 = (function (){var statearr_16674 = state_16633;
(statearr_16674[(10)] = inst_16587__$1);

return statearr_16674;
})();
if(inst_16587__$1){
var statearr_16676_18514 = state_16633__$1;
(statearr_16676_18514[(1)] = (13));

} else {
var statearr_16678_18515 = state_16633__$1;
(statearr_16678_18515[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (9))){
var inst_16609 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
var statearr_16679_18517 = state_16633__$1;
(statearr_16679_18517[(2)] = inst_16609);

(statearr_16679_18517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (5))){
var inst_16570 = cljs.core.deref(mults);
var inst_16571 = cljs.core.vals(inst_16570);
var inst_16572 = cljs.core.seq(inst_16571);
var inst_16573 = inst_16572;
var inst_16574 = null;
var inst_16575 = (0);
var inst_16576 = (0);
var state_16633__$1 = (function (){var statearr_16680 = state_16633;
(statearr_16680[(13)] = inst_16573);

(statearr_16680[(14)] = inst_16574);

(statearr_16680[(15)] = inst_16575);

(statearr_16680[(16)] = inst_16576);

return statearr_16680;
})();
var statearr_16681_18518 = state_16633__$1;
(statearr_16681_18518[(2)] = null);

(statearr_16681_18518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (14))){
var state_16633__$1 = state_16633;
var statearr_16686_18520 = state_16633__$1;
(statearr_16686_18520[(2)] = null);

(statearr_16686_18520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (16))){
var inst_16587 = (state_16633[(10)]);
var inst_16591 = cljs.core.chunk_first(inst_16587);
var inst_16592 = cljs.core.chunk_rest(inst_16587);
var inst_16593 = cljs.core.count(inst_16591);
var inst_16573 = inst_16592;
var inst_16574 = inst_16591;
var inst_16575 = inst_16593;
var inst_16576 = (0);
var state_16633__$1 = (function (){var statearr_16687 = state_16633;
(statearr_16687[(13)] = inst_16573);

(statearr_16687[(14)] = inst_16574);

(statearr_16687[(15)] = inst_16575);

(statearr_16687[(16)] = inst_16576);

return statearr_16687;
})();
var statearr_16688_18525 = state_16633__$1;
(statearr_16688_18525[(2)] = null);

(statearr_16688_18525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (10))){
var inst_16574 = (state_16633[(14)]);
var inst_16576 = (state_16633[(16)]);
var inst_16573 = (state_16633[(13)]);
var inst_16575 = (state_16633[(15)]);
var inst_16581 = cljs.core._nth(inst_16574,inst_16576);
var inst_16582 = cljs.core.async.muxch_STAR_(inst_16581);
var inst_16583 = cljs.core.async.close_BANG_(inst_16582);
var inst_16584 = (inst_16576 + (1));
var tmp16683 = inst_16575;
var tmp16684 = inst_16573;
var tmp16685 = inst_16574;
var inst_16573__$1 = tmp16684;
var inst_16574__$1 = tmp16685;
var inst_16575__$1 = tmp16683;
var inst_16576__$1 = inst_16584;
var state_16633__$1 = (function (){var statearr_16691 = state_16633;
(statearr_16691[(17)] = inst_16583);

(statearr_16691[(13)] = inst_16573__$1);

(statearr_16691[(14)] = inst_16574__$1);

(statearr_16691[(15)] = inst_16575__$1);

(statearr_16691[(16)] = inst_16576__$1);

return statearr_16691;
})();
var statearr_16694_18529 = state_16633__$1;
(statearr_16694_18529[(2)] = null);

(statearr_16694_18529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (18))){
var inst_16602 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
var statearr_16695_18530 = state_16633__$1;
(statearr_16695_18530[(2)] = inst_16602);

(statearr_16695_18530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (8))){
var inst_16576 = (state_16633[(16)]);
var inst_16575 = (state_16633[(15)]);
var inst_16578 = (inst_16576 < inst_16575);
var inst_16579 = inst_16578;
var state_16633__$1 = state_16633;
if(cljs.core.truth_(inst_16579)){
var statearr_16698_18531 = state_16633__$1;
(statearr_16698_18531[(1)] = (10));

} else {
var statearr_16699_18532 = state_16633__$1;
(statearr_16699_18532[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_16703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16703[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_16703[(1)] = (1));

return statearr_16703;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_16633){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_16633);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e16704){var ex__13309__auto__ = e16704;
var statearr_16706_18540 = state_16633;
(statearr_16706_18540[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_16633[(4)]))){
var statearr_16711_18542 = state_16633;
(statearr_16711_18542[(1)] = cljs.core.first((state_16633[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18545 = state_16633;
state_16633 = G__18545;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_16633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_16633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__14058__auto__ = (function (){var statearr_16714 = f__14057__auto__();
(statearr_16714[(6)] = c__14056__auto___18475);

return statearr_16714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14058__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16721 = arguments.length;
switch (G__16721) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16757 = arguments.length;
switch (G__16757) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16782 = arguments.length;
switch (G__16782) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14056__auto___18566 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14057__auto__ = (function (){var switch__13305__auto__ = (function (state_16856){
var state_val_16857 = (state_16856[(1)]);
if((state_val_16857 === (7))){
var state_16856__$1 = state_16856;
var statearr_16858_18568 = state_16856__$1;
(statearr_16858_18568[(2)] = null);

(statearr_16858_18568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (1))){
var state_16856__$1 = state_16856;
var statearr_16859_18569 = state_16856__$1;
(statearr_16859_18569[(2)] = null);

(statearr_16859_18569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (4))){
var inst_16806 = (state_16856[(7)]);
var inst_16805 = (state_16856[(8)]);
var inst_16808 = (inst_16806 < inst_16805);
var state_16856__$1 = state_16856;
if(cljs.core.truth_(inst_16808)){
var statearr_16864_18570 = state_16856__$1;
(statearr_16864_18570[(1)] = (6));

} else {
var statearr_16865_18571 = state_16856__$1;
(statearr_16865_18571[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (15))){
var inst_16842 = (state_16856[(9)]);
var inst_16847 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16842);
var state_16856__$1 = state_16856;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16856__$1,(17),out,inst_16847);
} else {
if((state_val_16857 === (13))){
var inst_16842 = (state_16856[(9)]);
var inst_16842__$1 = (state_16856[(2)]);
var inst_16843 = cljs.core.some(cljs.core.nil_QMARK_,inst_16842__$1);
var state_16856__$1 = (function (){var statearr_16869 = state_16856;
(statearr_16869[(9)] = inst_16842__$1);

return statearr_16869;
})();
if(cljs.core.truth_(inst_16843)){
var statearr_16870_18574 = state_16856__$1;
(statearr_16870_18574[(1)] = (14));

} else {
var statearr_16871_18578 = state_16856__$1;
(statearr_16871_18578[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (6))){
var state_16856__$1 = state_16856;
var statearr_16878_18579 = state_16856__$1;
(statearr_16878_18579[(2)] = null);

(statearr_16878_18579[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (17))){
var inst_16849 = (state_16856[(2)]);
var state_16856__$1 = (function (){var statearr_16882 = state_16856;
(statearr_16882[(10)] = inst_16849);

return statearr_16882;
})();
var statearr_16883_18581 = state_16856__$1;
(statearr_16883_18581[(2)] = null);

(statearr_16883_18581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (3))){
var inst_16854 = (state_16856[(2)]);
var state_16856__$1 = state_16856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16856__$1,inst_16854);
} else {
if((state_val_16857 === (12))){
var _ = (function (){var statearr_16884 = state_16856;
(statearr_16884[(4)] = cljs.core.rest((state_16856[(4)])));

return statearr_16884;
})();
var state_16856__$1 = state_16856;
var ex16881 = (state_16856__$1[(2)]);
var statearr_16886_18583 = state_16856__$1;
(statearr_16886_18583[(5)] = ex16881);


if((ex16881 instanceof Object)){
var statearr_16893_18584 = state_16856__$1;
(statearr_16893_18584[(1)] = (11));

(statearr_16893_18584[(5)] = null);

} else {
throw ex16881;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (2))){
var inst_16804 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16805 = cnt;
var inst_16806 = (0);
var state_16856__$1 = (function (){var statearr_16895 = state_16856;
(statearr_16895[(11)] = inst_16804);

(statearr_16895[(8)] = inst_16805);

(statearr_16895[(7)] = inst_16806);

return statearr_16895;
})();
var statearr_16896_18588 = state_16856__$1;
(statearr_16896_18588[(2)] = null);

(statearr_16896_18588[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (11))){
var inst_16818 = (state_16856[(2)]);
var inst_16822 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16856__$1 = (function (){var statearr_16901 = state_16856;
(statearr_16901[(12)] = inst_16818);

return statearr_16901;
})();
var statearr_16902_18589 = state_16856__$1;
(statearr_16902_18589[(2)] = inst_16822);

(statearr_16902_18589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (9))){
var inst_16806 = (state_16856[(7)]);
var _ = (function (){var statearr_16903 = state_16856;
(statearr_16903[(4)] = cljs.core.cons((12),(state_16856[(4)])));

return statearr_16903;
})();
var inst_16828 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16806) : chs__$1.call(null,inst_16806));
var inst_16829 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16806) : done.call(null,inst_16806));
var inst_16830 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16828,inst_16829);
var ___$1 = (function (){var statearr_16904 = state_16856;
(statearr_16904[(4)] = cljs.core.rest((state_16856[(4)])));

return statearr_16904;
})();
var state_16856__$1 = state_16856;
var statearr_16905_18602 = state_16856__$1;
(statearr_16905_18602[(2)] = inst_16830);

(statearr_16905_18602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (5))){
var inst_16840 = (state_16856[(2)]);
var state_16856__$1 = (function (){var statearr_16906 = state_16856;
(statearr_16906[(13)] = inst_16840);

return statearr_16906;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16856__$1,(13),dchan);
} else {
if((state_val_16857 === (14))){
var inst_16845 = cljs.core.async.close_BANG_(out);
var state_16856__$1 = state_16856;
var statearr_16907_18608 = state_16856__$1;
(statearr_16907_18608[(2)] = inst_16845);

(statearr_16907_18608[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (16))){
var inst_16852 = (state_16856[(2)]);
var state_16856__$1 = state_16856;
var statearr_16913_18609 = state_16856__$1;
(statearr_16913_18609[(2)] = inst_16852);

(statearr_16913_18609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (10))){
var inst_16806 = (state_16856[(7)]);
var inst_16833 = (state_16856[(2)]);
var inst_16834 = (inst_16806 + (1));
var inst_16806__$1 = inst_16834;
var state_16856__$1 = (function (){var statearr_16914 = state_16856;
(statearr_16914[(14)] = inst_16833);

(statearr_16914[(7)] = inst_16806__$1);

return statearr_16914;
})();
var statearr_16916_18613 = state_16856__$1;
(statearr_16916_18613[(2)] = null);

(statearr_16916_18613[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (8))){
var inst_16838 = (state_16856[(2)]);
var state_16856__$1 = state_16856;
var statearr_16917_18616 = state_16856__$1;
(statearr_16917_18616[(2)] = inst_16838);

(statearr_16917_18616[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_16918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16918[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_16918[(1)] = (1));

return statearr_16918;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_16856){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_16856);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e16919){var ex__13309__auto__ = e16919;
var statearr_16920_18619 = state_16856;
(statearr_16920_18619[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_16856[(4)]))){
var statearr_16921_18621 = state_16856;
(statearr_16921_18621[(1)] = cljs.core.first((state_16856[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18622 = state_16856;
state_16856 = G__18622;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_16856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_16856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__14058__auto__ = (function (){var statearr_16923 = f__14057__auto__();
(statearr_16923[(6)] = c__14056__auto___18566);

return statearr_16923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14058__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16933 = arguments.length;
switch (G__16933) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14056__auto___18636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14057__auto__ = (function (){var switch__13305__auto__ = (function (state_16978){
var state_val_16979 = (state_16978[(1)]);
if((state_val_16979 === (7))){
var inst_16951 = (state_16978[(7)]);
var inst_16953 = (state_16978[(8)]);
var inst_16951__$1 = (state_16978[(2)]);
var inst_16953__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16951__$1,(0),null);
var inst_16954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16951__$1,(1),null);
var inst_16955 = (inst_16953__$1 == null);
var state_16978__$1 = (function (){var statearr_16980 = state_16978;
(statearr_16980[(7)] = inst_16951__$1);

(statearr_16980[(8)] = inst_16953__$1);

(statearr_16980[(9)] = inst_16954);

return statearr_16980;
})();
if(cljs.core.truth_(inst_16955)){
var statearr_16981_18640 = state_16978__$1;
(statearr_16981_18640[(1)] = (8));

} else {
var statearr_16982_18641 = state_16978__$1;
(statearr_16982_18641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (1))){
var inst_16940 = cljs.core.vec(chs);
var inst_16941 = inst_16940;
var state_16978__$1 = (function (){var statearr_16983 = state_16978;
(statearr_16983[(10)] = inst_16941);

return statearr_16983;
})();
var statearr_16984_18642 = state_16978__$1;
(statearr_16984_18642[(2)] = null);

(statearr_16984_18642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (4))){
var inst_16941 = (state_16978[(10)]);
var state_16978__$1 = state_16978;
return cljs.core.async.ioc_alts_BANG_(state_16978__$1,(7),inst_16941);
} else {
if((state_val_16979 === (6))){
var inst_16974 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_16985_18643 = state_16978__$1;
(statearr_16985_18643[(2)] = inst_16974);

(statearr_16985_18643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (3))){
var inst_16976 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16978__$1,inst_16976);
} else {
if((state_val_16979 === (2))){
var inst_16941 = (state_16978[(10)]);
var inst_16944 = cljs.core.count(inst_16941);
var inst_16945 = (inst_16944 > (0));
var state_16978__$1 = state_16978;
if(cljs.core.truth_(inst_16945)){
var statearr_16987_18647 = state_16978__$1;
(statearr_16987_18647[(1)] = (4));

} else {
var statearr_16988_18648 = state_16978__$1;
(statearr_16988_18648[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (11))){
var inst_16941 = (state_16978[(10)]);
var inst_16967 = (state_16978[(2)]);
var tmp16986 = inst_16941;
var inst_16941__$1 = tmp16986;
var state_16978__$1 = (function (){var statearr_16989 = state_16978;
(statearr_16989[(11)] = inst_16967);

(statearr_16989[(10)] = inst_16941__$1);

return statearr_16989;
})();
var statearr_16990_18649 = state_16978__$1;
(statearr_16990_18649[(2)] = null);

(statearr_16990_18649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (9))){
var inst_16953 = (state_16978[(8)]);
var state_16978__$1 = state_16978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16978__$1,(11),out,inst_16953);
} else {
if((state_val_16979 === (5))){
var inst_16972 = cljs.core.async.close_BANG_(out);
var state_16978__$1 = state_16978;
var statearr_16996_18650 = state_16978__$1;
(statearr_16996_18650[(2)] = inst_16972);

(statearr_16996_18650[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (10))){
var inst_16970 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_16999_18651 = state_16978__$1;
(statearr_16999_18651[(2)] = inst_16970);

(statearr_16999_18651[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (8))){
var inst_16941 = (state_16978[(10)]);
var inst_16951 = (state_16978[(7)]);
var inst_16953 = (state_16978[(8)]);
var inst_16954 = (state_16978[(9)]);
var inst_16962 = (function (){var cs = inst_16941;
var vec__16947 = inst_16951;
var v = inst_16953;
var c = inst_16954;
return (function (p1__16930_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16930_SHARP_);
});
})();
var inst_16963 = cljs.core.filterv(inst_16962,inst_16941);
var inst_16941__$1 = inst_16963;
var state_16978__$1 = (function (){var statearr_17007 = state_16978;
(statearr_17007[(10)] = inst_16941__$1);

return statearr_17007;
})();
var statearr_17008_18652 = state_16978__$1;
(statearr_17008_18652[(2)] = null);

(statearr_17008_18652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_17009 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17009[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_17009[(1)] = (1));

return statearr_17009;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_16978){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_16978);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e17011){var ex__13309__auto__ = e17011;
var statearr_17012_18654 = state_16978;
(statearr_17012_18654[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_16978[(4)]))){
var statearr_17013_18655 = state_16978;
(statearr_17013_18655[(1)] = cljs.core.first((state_16978[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18656 = state_16978;
state_16978 = G__18656;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_16978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_16978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__14058__auto__ = (function (){var statearr_17016 = f__14057__auto__();
(statearr_17016[(6)] = c__14056__auto___18636);

return statearr_17016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14058__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17021 = arguments.length;
switch (G__17021) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14056__auto___18661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14057__auto__ = (function (){var switch__13305__auto__ = (function (state_17048){
var state_val_17049 = (state_17048[(1)]);
if((state_val_17049 === (7))){
var inst_17030 = (state_17048[(7)]);
var inst_17030__$1 = (state_17048[(2)]);
var inst_17031 = (inst_17030__$1 == null);
var inst_17032 = cljs.core.not(inst_17031);
var state_17048__$1 = (function (){var statearr_17053 = state_17048;
(statearr_17053[(7)] = inst_17030__$1);

return statearr_17053;
})();
if(inst_17032){
var statearr_17054_18662 = state_17048__$1;
(statearr_17054_18662[(1)] = (8));

} else {
var statearr_17055_18663 = state_17048__$1;
(statearr_17055_18663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17049 === (1))){
var inst_17025 = (0);
var state_17048__$1 = (function (){var statearr_17056 = state_17048;
(statearr_17056[(8)] = inst_17025);

return statearr_17056;
})();
var statearr_17057_18664 = state_17048__$1;
(statearr_17057_18664[(2)] = null);

(statearr_17057_18664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17049 === (4))){
var state_17048__$1 = state_17048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17048__$1,(7),ch);
} else {
if((state_val_17049 === (6))){
var inst_17043 = (state_17048[(2)]);
var state_17048__$1 = state_17048;
var statearr_17058_18665 = state_17048__$1;
(statearr_17058_18665[(2)] = inst_17043);

(statearr_17058_18665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17049 === (3))){
var inst_17045 = (state_17048[(2)]);
var inst_17046 = cljs.core.async.close_BANG_(out);
var state_17048__$1 = (function (){var statearr_17059 = state_17048;
(statearr_17059[(9)] = inst_17045);

return statearr_17059;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17048__$1,inst_17046);
} else {
if((state_val_17049 === (2))){
var inst_17025 = (state_17048[(8)]);
var inst_17027 = (inst_17025 < n);
var state_17048__$1 = state_17048;
if(cljs.core.truth_(inst_17027)){
var statearr_17061_18670 = state_17048__$1;
(statearr_17061_18670[(1)] = (4));

} else {
var statearr_17062_18671 = state_17048__$1;
(statearr_17062_18671[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17049 === (11))){
var inst_17025 = (state_17048[(8)]);
var inst_17035 = (state_17048[(2)]);
var inst_17036 = (inst_17025 + (1));
var inst_17025__$1 = inst_17036;
var state_17048__$1 = (function (){var statearr_17063 = state_17048;
(statearr_17063[(10)] = inst_17035);

(statearr_17063[(8)] = inst_17025__$1);

return statearr_17063;
})();
var statearr_17064_18680 = state_17048__$1;
(statearr_17064_18680[(2)] = null);

(statearr_17064_18680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17049 === (9))){
var state_17048__$1 = state_17048;
var statearr_17065_18681 = state_17048__$1;
(statearr_17065_18681[(2)] = null);

(statearr_17065_18681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17049 === (5))){
var state_17048__$1 = state_17048;
var statearr_17066_18682 = state_17048__$1;
(statearr_17066_18682[(2)] = null);

(statearr_17066_18682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17049 === (10))){
var inst_17040 = (state_17048[(2)]);
var state_17048__$1 = state_17048;
var statearr_17068_18683 = state_17048__$1;
(statearr_17068_18683[(2)] = inst_17040);

(statearr_17068_18683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17049 === (8))){
var inst_17030 = (state_17048[(7)]);
var state_17048__$1 = state_17048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17048__$1,(11),out,inst_17030);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_17071 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17071[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_17071[(1)] = (1));

return statearr_17071;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_17048){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_17048);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e17072){var ex__13309__auto__ = e17072;
var statearr_17074_18689 = state_17048;
(statearr_17074_18689[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_17048[(4)]))){
var statearr_17075_18690 = state_17048;
(statearr_17075_18690[(1)] = cljs.core.first((state_17048[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18694 = state_17048;
state_17048 = G__18694;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_17048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_17048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__14058__auto__ = (function (){var statearr_17077 = f__14057__auto__();
(statearr_17077[(6)] = c__14056__auto___18661);

return statearr_17077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14058__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17090 = (function (f,ch,meta17083,_,fn1,meta17091){
this.f = f;
this.ch = ch;
this.meta17083 = meta17083;
this._ = _;
this.fn1 = fn1;
this.meta17091 = meta17091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17092,meta17091__$1){
var self__ = this;
var _17092__$1 = this;
return (new cljs.core.async.t_cljs$core$async17090(self__.f,self__.ch,self__.meta17083,self__._,self__.fn1,meta17091__$1));
}));

(cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17092){
var self__ = this;
var _17092__$1 = this;
return self__.meta17091;
}));

(cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17080_SHARP_){
var G__17096 = (((p1__17080_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17080_SHARP_) : self__.f.call(null,p1__17080_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17096) : f1.call(null,G__17096));
});
}));

(cljs.core.async.t_cljs$core$async17090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17083","meta17083",53294191,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17082","cljs.core.async/t_cljs$core$async17082",-1208467479,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17091","meta17091",-1501796318,null)], null);
}));

(cljs.core.async.t_cljs$core$async17090.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17090");

(cljs.core.async.t_cljs$core$async17090.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async17090");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17090.
 */
cljs.core.async.__GT_t_cljs$core$async17090 = (function cljs$core$async$__GT_t_cljs$core$async17090(f,ch,meta17083,_,fn1,meta17091){
return (new cljs.core.async.t_cljs$core$async17090(f,ch,meta17083,_,fn1,meta17091));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17082 = (function (f,ch,meta17083){
this.f = f;
this.ch = ch;
this.meta17083 = meta17083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17084,meta17083__$1){
var self__ = this;
var _17084__$1 = this;
return (new cljs.core.async.t_cljs$core$async17082(self__.f,self__.ch,meta17083__$1));
}));

(cljs.core.async.t_cljs$core$async17082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17084){
var self__ = this;
var _17084__$1 = this;
return self__.meta17083;
}));

(cljs.core.async.t_cljs$core$async17082.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17082.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17082.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17082.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17082.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17090(self__.f,self__.ch,self__.meta17083,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17104 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17104) : self__.f.call(null,G__17104));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17082.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17082.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17083","meta17083",53294191,null)], null);
}));

(cljs.core.async.t_cljs$core$async17082.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17082");

(cljs.core.async.t_cljs$core$async17082.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async17082");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17082.
 */
cljs.core.async.__GT_t_cljs$core$async17082 = (function cljs$core$async$__GT_t_cljs$core$async17082(f,ch,meta17083){
return (new cljs.core.async.t_cljs$core$async17082(f,ch,meta17083));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17082(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17110 = (function (f,ch,meta17111){
this.f = f;
this.ch = ch;
this.meta17111 = meta17111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17112,meta17111__$1){
var self__ = this;
var _17112__$1 = this;
return (new cljs.core.async.t_cljs$core$async17110(self__.f,self__.ch,meta17111__$1));
}));

(cljs.core.async.t_cljs$core$async17110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17112){
var self__ = this;
var _17112__$1 = this;
return self__.meta17111;
}));

(cljs.core.async.t_cljs$core$async17110.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17110.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17110.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17110.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17110.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17110.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17111","meta17111",1966898868,null)], null);
}));

(cljs.core.async.t_cljs$core$async17110.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17110");

(cljs.core.async.t_cljs$core$async17110.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async17110");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17110.
 */
cljs.core.async.__GT_t_cljs$core$async17110 = (function cljs$core$async$__GT_t_cljs$core$async17110(f,ch,meta17111){
return (new cljs.core.async.t_cljs$core$async17110(f,ch,meta17111));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17110(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17129 = (function (p,ch,meta17130){
this.p = p;
this.ch = ch;
this.meta17130 = meta17130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17131,meta17130__$1){
var self__ = this;
var _17131__$1 = this;
return (new cljs.core.async.t_cljs$core$async17129(self__.p,self__.ch,meta17130__$1));
}));

(cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17131){
var self__ = this;
var _17131__$1 = this;
return self__.meta17130;
}));

(cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17130","meta17130",1796893147,null)], null);
}));

(cljs.core.async.t_cljs$core$async17129.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17129");

(cljs.core.async.t_cljs$core$async17129.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async17129");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17129.
 */
cljs.core.async.__GT_t_cljs$core$async17129 = (function cljs$core$async$__GT_t_cljs$core$async17129(p,ch,meta17130){
return (new cljs.core.async.t_cljs$core$async17129(p,ch,meta17130));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17129(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17164 = arguments.length;
switch (G__17164) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14056__auto___18730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14057__auto__ = (function (){var switch__13305__auto__ = (function (state_17209){
var state_val_17213 = (state_17209[(1)]);
if((state_val_17213 === (7))){
var inst_17202 = (state_17209[(2)]);
var state_17209__$1 = state_17209;
var statearr_17214_18731 = state_17209__$1;
(statearr_17214_18731[(2)] = inst_17202);

(statearr_17214_18731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (1))){
var state_17209__$1 = state_17209;
var statearr_17219_18732 = state_17209__$1;
(statearr_17219_18732[(2)] = null);

(statearr_17219_18732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (4))){
var inst_17185 = (state_17209[(7)]);
var inst_17185__$1 = (state_17209[(2)]);
var inst_17186 = (inst_17185__$1 == null);
var state_17209__$1 = (function (){var statearr_17221 = state_17209;
(statearr_17221[(7)] = inst_17185__$1);

return statearr_17221;
})();
if(cljs.core.truth_(inst_17186)){
var statearr_17228_18736 = state_17209__$1;
(statearr_17228_18736[(1)] = (5));

} else {
var statearr_17229_18737 = state_17209__$1;
(statearr_17229_18737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (6))){
var inst_17185 = (state_17209[(7)]);
var inst_17190 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17185) : p.call(null,inst_17185));
var state_17209__$1 = state_17209;
if(cljs.core.truth_(inst_17190)){
var statearr_17232_18741 = state_17209__$1;
(statearr_17232_18741[(1)] = (8));

} else {
var statearr_17233_18742 = state_17209__$1;
(statearr_17233_18742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (3))){
var inst_17207 = (state_17209[(2)]);
var state_17209__$1 = state_17209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17209__$1,inst_17207);
} else {
if((state_val_17213 === (2))){
var state_17209__$1 = state_17209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17209__$1,(4),ch);
} else {
if((state_val_17213 === (11))){
var inst_17193 = (state_17209[(2)]);
var state_17209__$1 = state_17209;
var statearr_17237_18746 = state_17209__$1;
(statearr_17237_18746[(2)] = inst_17193);

(statearr_17237_18746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (9))){
var state_17209__$1 = state_17209;
var statearr_17238_18747 = state_17209__$1;
(statearr_17238_18747[(2)] = null);

(statearr_17238_18747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (5))){
var inst_17188 = cljs.core.async.close_BANG_(out);
var state_17209__$1 = state_17209;
var statearr_17242_18748 = state_17209__$1;
(statearr_17242_18748[(2)] = inst_17188);

(statearr_17242_18748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (10))){
var inst_17196 = (state_17209[(2)]);
var state_17209__$1 = (function (){var statearr_17243 = state_17209;
(statearr_17243[(8)] = inst_17196);

return statearr_17243;
})();
var statearr_17244_18753 = state_17209__$1;
(statearr_17244_18753[(2)] = null);

(statearr_17244_18753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (8))){
var inst_17185 = (state_17209[(7)]);
var state_17209__$1 = state_17209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17209__$1,(11),out,inst_17185);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_17250 = [null,null,null,null,null,null,null,null,null];
(statearr_17250[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_17250[(1)] = (1));

return statearr_17250;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_17209){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_17209);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e17254){var ex__13309__auto__ = e17254;
var statearr_17256_18755 = state_17209;
(statearr_17256_18755[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_17209[(4)]))){
var statearr_17259_18756 = state_17209;
(statearr_17259_18756[(1)] = cljs.core.first((state_17209[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18757 = state_17209;
state_17209 = G__18757;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_17209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_17209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__14058__auto__ = (function (){var statearr_17265 = f__14057__auto__();
(statearr_17265[(6)] = c__14056__auto___18730);

return statearr_17265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14058__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17267 = arguments.length;
switch (G__17267) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14056__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14057__auto__ = (function (){var switch__13305__auto__ = (function (state_17349){
var state_val_17350 = (state_17349[(1)]);
if((state_val_17350 === (7))){
var inst_17345 = (state_17349[(2)]);
var state_17349__$1 = state_17349;
var statearr_17351_18763 = state_17349__$1;
(statearr_17351_18763[(2)] = inst_17345);

(statearr_17351_18763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (20))){
var inst_17309 = (state_17349[(7)]);
var inst_17325 = (state_17349[(2)]);
var inst_17326 = cljs.core.next(inst_17309);
var inst_17295 = inst_17326;
var inst_17296 = null;
var inst_17297 = (0);
var inst_17298 = (0);
var state_17349__$1 = (function (){var statearr_17353 = state_17349;
(statearr_17353[(8)] = inst_17325);

(statearr_17353[(9)] = inst_17295);

(statearr_17353[(10)] = inst_17296);

(statearr_17353[(11)] = inst_17297);

(statearr_17353[(12)] = inst_17298);

return statearr_17353;
})();
var statearr_17354_18769 = state_17349__$1;
(statearr_17354_18769[(2)] = null);

(statearr_17354_18769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (1))){
var state_17349__$1 = state_17349;
var statearr_17355_18770 = state_17349__$1;
(statearr_17355_18770[(2)] = null);

(statearr_17355_18770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (4))){
var inst_17284 = (state_17349[(13)]);
var inst_17284__$1 = (state_17349[(2)]);
var inst_17285 = (inst_17284__$1 == null);
var state_17349__$1 = (function (){var statearr_17358 = state_17349;
(statearr_17358[(13)] = inst_17284__$1);

return statearr_17358;
})();
if(cljs.core.truth_(inst_17285)){
var statearr_17359_18774 = state_17349__$1;
(statearr_17359_18774[(1)] = (5));

} else {
var statearr_17360_18775 = state_17349__$1;
(statearr_17360_18775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (15))){
var state_17349__$1 = state_17349;
var statearr_17364_18777 = state_17349__$1;
(statearr_17364_18777[(2)] = null);

(statearr_17364_18777[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (21))){
var state_17349__$1 = state_17349;
var statearr_17368_18778 = state_17349__$1;
(statearr_17368_18778[(2)] = null);

(statearr_17368_18778[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (13))){
var inst_17298 = (state_17349[(12)]);
var inst_17295 = (state_17349[(9)]);
var inst_17296 = (state_17349[(10)]);
var inst_17297 = (state_17349[(11)]);
var inst_17305 = (state_17349[(2)]);
var inst_17306 = (inst_17298 + (1));
var tmp17361 = inst_17295;
var tmp17362 = inst_17296;
var tmp17363 = inst_17297;
var inst_17295__$1 = tmp17361;
var inst_17296__$1 = tmp17362;
var inst_17297__$1 = tmp17363;
var inst_17298__$1 = inst_17306;
var state_17349__$1 = (function (){var statearr_17370 = state_17349;
(statearr_17370[(14)] = inst_17305);

(statearr_17370[(9)] = inst_17295__$1);

(statearr_17370[(10)] = inst_17296__$1);

(statearr_17370[(11)] = inst_17297__$1);

(statearr_17370[(12)] = inst_17298__$1);

return statearr_17370;
})();
var statearr_17378_18780 = state_17349__$1;
(statearr_17378_18780[(2)] = null);

(statearr_17378_18780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (22))){
var state_17349__$1 = state_17349;
var statearr_17382_18782 = state_17349__$1;
(statearr_17382_18782[(2)] = null);

(statearr_17382_18782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (6))){
var inst_17284 = (state_17349[(13)]);
var inst_17293 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17284) : f.call(null,inst_17284));
var inst_17294 = cljs.core.seq(inst_17293);
var inst_17295 = inst_17294;
var inst_17296 = null;
var inst_17297 = (0);
var inst_17298 = (0);
var state_17349__$1 = (function (){var statearr_17383 = state_17349;
(statearr_17383[(9)] = inst_17295);

(statearr_17383[(10)] = inst_17296);

(statearr_17383[(11)] = inst_17297);

(statearr_17383[(12)] = inst_17298);

return statearr_17383;
})();
var statearr_17384_18783 = state_17349__$1;
(statearr_17384_18783[(2)] = null);

(statearr_17384_18783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (17))){
var inst_17309 = (state_17349[(7)]);
var inst_17318 = cljs.core.chunk_first(inst_17309);
var inst_17319 = cljs.core.chunk_rest(inst_17309);
var inst_17320 = cljs.core.count(inst_17318);
var inst_17295 = inst_17319;
var inst_17296 = inst_17318;
var inst_17297 = inst_17320;
var inst_17298 = (0);
var state_17349__$1 = (function (){var statearr_17385 = state_17349;
(statearr_17385[(9)] = inst_17295);

(statearr_17385[(10)] = inst_17296);

(statearr_17385[(11)] = inst_17297);

(statearr_17385[(12)] = inst_17298);

return statearr_17385;
})();
var statearr_17386_18785 = state_17349__$1;
(statearr_17386_18785[(2)] = null);

(statearr_17386_18785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (3))){
var inst_17347 = (state_17349[(2)]);
var state_17349__$1 = state_17349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17349__$1,inst_17347);
} else {
if((state_val_17350 === (12))){
var inst_17334 = (state_17349[(2)]);
var state_17349__$1 = state_17349;
var statearr_17392_18786 = state_17349__$1;
(statearr_17392_18786[(2)] = inst_17334);

(statearr_17392_18786[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (2))){
var state_17349__$1 = state_17349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17349__$1,(4),in$);
} else {
if((state_val_17350 === (23))){
var inst_17343 = (state_17349[(2)]);
var state_17349__$1 = state_17349;
var statearr_17395_18790 = state_17349__$1;
(statearr_17395_18790[(2)] = inst_17343);

(statearr_17395_18790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (19))){
var inst_17329 = (state_17349[(2)]);
var state_17349__$1 = state_17349;
var statearr_17397_18791 = state_17349__$1;
(statearr_17397_18791[(2)] = inst_17329);

(statearr_17397_18791[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (11))){
var inst_17295 = (state_17349[(9)]);
var inst_17309 = (state_17349[(7)]);
var inst_17309__$1 = cljs.core.seq(inst_17295);
var state_17349__$1 = (function (){var statearr_17400 = state_17349;
(statearr_17400[(7)] = inst_17309__$1);

return statearr_17400;
})();
if(inst_17309__$1){
var statearr_17403_18793 = state_17349__$1;
(statearr_17403_18793[(1)] = (14));

} else {
var statearr_17404_18794 = state_17349__$1;
(statearr_17404_18794[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (9))){
var inst_17336 = (state_17349[(2)]);
var inst_17338 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17349__$1 = (function (){var statearr_17407 = state_17349;
(statearr_17407[(15)] = inst_17336);

return statearr_17407;
})();
if(cljs.core.truth_(inst_17338)){
var statearr_17408_18795 = state_17349__$1;
(statearr_17408_18795[(1)] = (21));

} else {
var statearr_17409_18796 = state_17349__$1;
(statearr_17409_18796[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (5))){
var inst_17287 = cljs.core.async.close_BANG_(out);
var state_17349__$1 = state_17349;
var statearr_17410_18797 = state_17349__$1;
(statearr_17410_18797[(2)] = inst_17287);

(statearr_17410_18797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (14))){
var inst_17309 = (state_17349[(7)]);
var inst_17316 = cljs.core.chunked_seq_QMARK_(inst_17309);
var state_17349__$1 = state_17349;
if(inst_17316){
var statearr_17411_18798 = state_17349__$1;
(statearr_17411_18798[(1)] = (17));

} else {
var statearr_17412_18799 = state_17349__$1;
(statearr_17412_18799[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (16))){
var inst_17332 = (state_17349[(2)]);
var state_17349__$1 = state_17349;
var statearr_17414_18800 = state_17349__$1;
(statearr_17414_18800[(2)] = inst_17332);

(statearr_17414_18800[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17350 === (10))){
var inst_17296 = (state_17349[(10)]);
var inst_17298 = (state_17349[(12)]);
var inst_17303 = cljs.core._nth(inst_17296,inst_17298);
var state_17349__$1 = state_17349;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17349__$1,(13),out,inst_17303);
} else {
if((state_val_17350 === (18))){
var inst_17309 = (state_17349[(7)]);
var inst_17323 = cljs.core.first(inst_17309);
var state_17349__$1 = state_17349;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17349__$1,(20),out,inst_17323);
} else {
if((state_val_17350 === (8))){
var inst_17298 = (state_17349[(12)]);
var inst_17297 = (state_17349[(11)]);
var inst_17300 = (inst_17298 < inst_17297);
var inst_17301 = inst_17300;
var state_17349__$1 = state_17349;
if(cljs.core.truth_(inst_17301)){
var statearr_17416_18801 = state_17349__$1;
(statearr_17416_18801[(1)] = (10));

} else {
var statearr_17417_18802 = state_17349__$1;
(statearr_17417_18802[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13306__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13306__auto____0 = (function (){
var statearr_17427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17427[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13306__auto__);

(statearr_17427[(1)] = (1));

return statearr_17427;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13306__auto____1 = (function (state_17349){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_17349);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e17428){var ex__13309__auto__ = e17428;
var statearr_17429_18804 = state_17349;
(statearr_17429_18804[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_17349[(4)]))){
var statearr_17431_18805 = state_17349;
(statearr_17431_18805[(1)] = cljs.core.first((state_17349[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18810 = state_17349;
state_17349 = G__18810;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13306__auto__ = function(state_17349){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13306__auto____1.call(this,state_17349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13306__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13306__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13306__auto__;
})()
})();
var state__14058__auto__ = (function (){var statearr_17436 = f__14057__auto__();
(statearr_17436[(6)] = c__14056__auto__);

return statearr_17436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14058__auto__);
}));

return c__14056__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17439 = arguments.length;
switch (G__17439) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17446 = arguments.length;
switch (G__17446) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17449 = arguments.length;
switch (G__17449) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14056__auto___18821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14057__auto__ = (function (){var switch__13305__auto__ = (function (state_17476){
var state_val_17477 = (state_17476[(1)]);
if((state_val_17477 === (7))){
var inst_17471 = (state_17476[(2)]);
var state_17476__$1 = state_17476;
var statearr_17478_18822 = state_17476__$1;
(statearr_17478_18822[(2)] = inst_17471);

(statearr_17478_18822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17477 === (1))){
var inst_17450 = null;
var state_17476__$1 = (function (){var statearr_17479 = state_17476;
(statearr_17479[(7)] = inst_17450);

return statearr_17479;
})();
var statearr_17480_18823 = state_17476__$1;
(statearr_17480_18823[(2)] = null);

(statearr_17480_18823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17477 === (4))){
var inst_17453 = (state_17476[(8)]);
var inst_17453__$1 = (state_17476[(2)]);
var inst_17457 = (inst_17453__$1 == null);
var inst_17458 = cljs.core.not(inst_17457);
var state_17476__$1 = (function (){var statearr_17481 = state_17476;
(statearr_17481[(8)] = inst_17453__$1);

return statearr_17481;
})();
if(inst_17458){
var statearr_17482_18825 = state_17476__$1;
(statearr_17482_18825[(1)] = (5));

} else {
var statearr_17483_18826 = state_17476__$1;
(statearr_17483_18826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17477 === (6))){
var state_17476__$1 = state_17476;
var statearr_17484_18828 = state_17476__$1;
(statearr_17484_18828[(2)] = null);

(statearr_17484_18828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17477 === (3))){
var inst_17473 = (state_17476[(2)]);
var inst_17474 = cljs.core.async.close_BANG_(out);
var state_17476__$1 = (function (){var statearr_17488 = state_17476;
(statearr_17488[(9)] = inst_17473);

return statearr_17488;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17476__$1,inst_17474);
} else {
if((state_val_17477 === (2))){
var state_17476__$1 = state_17476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17476__$1,(4),ch);
} else {
if((state_val_17477 === (11))){
var inst_17453 = (state_17476[(8)]);
var inst_17465 = (state_17476[(2)]);
var inst_17450 = inst_17453;
var state_17476__$1 = (function (){var statearr_17497 = state_17476;
(statearr_17497[(10)] = inst_17465);

(statearr_17497[(7)] = inst_17450);

return statearr_17497;
})();
var statearr_17501_18833 = state_17476__$1;
(statearr_17501_18833[(2)] = null);

(statearr_17501_18833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17477 === (9))){
var inst_17453 = (state_17476[(8)]);
var state_17476__$1 = state_17476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17476__$1,(11),out,inst_17453);
} else {
if((state_val_17477 === (5))){
var inst_17453 = (state_17476[(8)]);
var inst_17450 = (state_17476[(7)]);
var inst_17460 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17453,inst_17450);
var state_17476__$1 = state_17476;
if(inst_17460){
var statearr_17503_18834 = state_17476__$1;
(statearr_17503_18834[(1)] = (8));

} else {
var statearr_17504_18837 = state_17476__$1;
(statearr_17504_18837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17477 === (10))){
var inst_17468 = (state_17476[(2)]);
var state_17476__$1 = state_17476;
var statearr_17505_18840 = state_17476__$1;
(statearr_17505_18840[(2)] = inst_17468);

(statearr_17505_18840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17477 === (8))){
var inst_17450 = (state_17476[(7)]);
var tmp17502 = inst_17450;
var inst_17450__$1 = tmp17502;
var state_17476__$1 = (function (){var statearr_17507 = state_17476;
(statearr_17507[(7)] = inst_17450__$1);

return statearr_17507;
})();
var statearr_17508_18844 = state_17476__$1;
(statearr_17508_18844[(2)] = null);

(statearr_17508_18844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_17517 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17517[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_17517[(1)] = (1));

return statearr_17517;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_17476){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_17476);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e17521){var ex__13309__auto__ = e17521;
var statearr_17522_18846 = state_17476;
(statearr_17522_18846[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_17476[(4)]))){
var statearr_17523_18851 = state_17476;
(statearr_17523_18851[(1)] = cljs.core.first((state_17476[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18853 = state_17476;
state_17476 = G__18853;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_17476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_17476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__14058__auto__ = (function (){var statearr_17524 = f__14057__auto__();
(statearr_17524[(6)] = c__14056__auto___18821);

return statearr_17524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14058__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17543 = arguments.length;
switch (G__17543) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14056__auto___18856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14057__auto__ = (function (){var switch__13305__auto__ = (function (state_17588){
var state_val_17589 = (state_17588[(1)]);
if((state_val_17589 === (7))){
var inst_17584 = (state_17588[(2)]);
var state_17588__$1 = state_17588;
var statearr_17590_18858 = state_17588__$1;
(statearr_17590_18858[(2)] = inst_17584);

(statearr_17590_18858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17589 === (1))){
var inst_17549 = (new Array(n));
var inst_17550 = inst_17549;
var inst_17551 = (0);
var state_17588__$1 = (function (){var statearr_17591 = state_17588;
(statearr_17591[(7)] = inst_17550);

(statearr_17591[(8)] = inst_17551);

return statearr_17591;
})();
var statearr_17592_18859 = state_17588__$1;
(statearr_17592_18859[(2)] = null);

(statearr_17592_18859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17589 === (4))){
var inst_17554 = (state_17588[(9)]);
var inst_17554__$1 = (state_17588[(2)]);
var inst_17555 = (inst_17554__$1 == null);
var inst_17556 = cljs.core.not(inst_17555);
var state_17588__$1 = (function (){var statearr_17594 = state_17588;
(statearr_17594[(9)] = inst_17554__$1);

return statearr_17594;
})();
if(inst_17556){
var statearr_17595_18863 = state_17588__$1;
(statearr_17595_18863[(1)] = (5));

} else {
var statearr_17596_18864 = state_17588__$1;
(statearr_17596_18864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17589 === (15))){
var inst_17578 = (state_17588[(2)]);
var state_17588__$1 = state_17588;
var statearr_17599_18865 = state_17588__$1;
(statearr_17599_18865[(2)] = inst_17578);

(statearr_17599_18865[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17589 === (13))){
var state_17588__$1 = state_17588;
var statearr_17600_18870 = state_17588__$1;
(statearr_17600_18870[(2)] = null);

(statearr_17600_18870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17589 === (6))){
var inst_17551 = (state_17588[(8)]);
var inst_17574 = (inst_17551 > (0));
var state_17588__$1 = state_17588;
if(cljs.core.truth_(inst_17574)){
var statearr_17601_18872 = state_17588__$1;
(statearr_17601_18872[(1)] = (12));

} else {
var statearr_17602_18873 = state_17588__$1;
(statearr_17602_18873[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17589 === (3))){
var inst_17586 = (state_17588[(2)]);
var state_17588__$1 = state_17588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17588__$1,inst_17586);
} else {
if((state_val_17589 === (12))){
var inst_17550 = (state_17588[(7)]);
var inst_17576 = cljs.core.vec(inst_17550);
var state_17588__$1 = state_17588;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17588__$1,(15),out,inst_17576);
} else {
if((state_val_17589 === (2))){
var state_17588__$1 = state_17588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17588__$1,(4),ch);
} else {
if((state_val_17589 === (11))){
var inst_17568 = (state_17588[(2)]);
var inst_17569 = (new Array(n));
var inst_17550 = inst_17569;
var inst_17551 = (0);
var state_17588__$1 = (function (){var statearr_17610 = state_17588;
(statearr_17610[(10)] = inst_17568);

(statearr_17610[(7)] = inst_17550);

(statearr_17610[(8)] = inst_17551);

return statearr_17610;
})();
var statearr_17611_18877 = state_17588__$1;
(statearr_17611_18877[(2)] = null);

(statearr_17611_18877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17589 === (9))){
var inst_17550 = (state_17588[(7)]);
var inst_17566 = cljs.core.vec(inst_17550);
var state_17588__$1 = state_17588;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17588__$1,(11),out,inst_17566);
} else {
if((state_val_17589 === (5))){
var inst_17550 = (state_17588[(7)]);
var inst_17551 = (state_17588[(8)]);
var inst_17554 = (state_17588[(9)]);
var inst_17560 = (state_17588[(11)]);
var inst_17559 = (inst_17550[inst_17551] = inst_17554);
var inst_17560__$1 = (inst_17551 + (1));
var inst_17561 = (inst_17560__$1 < n);
var state_17588__$1 = (function (){var statearr_17620 = state_17588;
(statearr_17620[(12)] = inst_17559);

(statearr_17620[(11)] = inst_17560__$1);

return statearr_17620;
})();
if(cljs.core.truth_(inst_17561)){
var statearr_17621_18880 = state_17588__$1;
(statearr_17621_18880[(1)] = (8));

} else {
var statearr_17622_18881 = state_17588__$1;
(statearr_17622_18881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17589 === (14))){
var inst_17581 = (state_17588[(2)]);
var inst_17582 = cljs.core.async.close_BANG_(out);
var state_17588__$1 = (function (){var statearr_17626 = state_17588;
(statearr_17626[(13)] = inst_17581);

return statearr_17626;
})();
var statearr_17627_18883 = state_17588__$1;
(statearr_17627_18883[(2)] = inst_17582);

(statearr_17627_18883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17589 === (10))){
var inst_17572 = (state_17588[(2)]);
var state_17588__$1 = state_17588;
var statearr_17628_18884 = state_17588__$1;
(statearr_17628_18884[(2)] = inst_17572);

(statearr_17628_18884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17589 === (8))){
var inst_17550 = (state_17588[(7)]);
var inst_17560 = (state_17588[(11)]);
var tmp17624 = inst_17550;
var inst_17550__$1 = tmp17624;
var inst_17551 = inst_17560;
var state_17588__$1 = (function (){var statearr_17629 = state_17588;
(statearr_17629[(7)] = inst_17550__$1);

(statearr_17629[(8)] = inst_17551);

return statearr_17629;
})();
var statearr_17630_18889 = state_17588__$1;
(statearr_17630_18889[(2)] = null);

(statearr_17630_18889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_17642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17642[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_17642[(1)] = (1));

return statearr_17642;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_17588){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_17588);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e17643){var ex__13309__auto__ = e17643;
var statearr_17644_18895 = state_17588;
(statearr_17644_18895[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_17588[(4)]))){
var statearr_17645_18896 = state_17588;
(statearr_17645_18896[(1)] = cljs.core.first((state_17588[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18901 = state_17588;
state_17588 = G__18901;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_17588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_17588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__14058__auto__ = (function (){var statearr_17647 = f__14057__auto__();
(statearr_17647[(6)] = c__14056__auto___18856);

return statearr_17647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14058__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17653 = arguments.length;
switch (G__17653) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14056__auto___18912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14057__auto__ = (function (){var switch__13305__auto__ = (function (state_17703){
var state_val_17705 = (state_17703[(1)]);
if((state_val_17705 === (7))){
var inst_17699 = (state_17703[(2)]);
var state_17703__$1 = state_17703;
var statearr_17708_18920 = state_17703__$1;
(statearr_17708_18920[(2)] = inst_17699);

(statearr_17708_18920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17705 === (1))){
var inst_17654 = [];
var inst_17655 = inst_17654;
var inst_17656 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17703__$1 = (function (){var statearr_17709 = state_17703;
(statearr_17709[(7)] = inst_17655);

(statearr_17709[(8)] = inst_17656);

return statearr_17709;
})();
var statearr_17710_18921 = state_17703__$1;
(statearr_17710_18921[(2)] = null);

(statearr_17710_18921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17705 === (4))){
var inst_17659 = (state_17703[(9)]);
var inst_17659__$1 = (state_17703[(2)]);
var inst_17662 = (inst_17659__$1 == null);
var inst_17663 = cljs.core.not(inst_17662);
var state_17703__$1 = (function (){var statearr_17711 = state_17703;
(statearr_17711[(9)] = inst_17659__$1);

return statearr_17711;
})();
if(inst_17663){
var statearr_17712_18925 = state_17703__$1;
(statearr_17712_18925[(1)] = (5));

} else {
var statearr_17713_18926 = state_17703__$1;
(statearr_17713_18926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17705 === (15))){
var inst_17655 = (state_17703[(7)]);
var inst_17691 = cljs.core.vec(inst_17655);
var state_17703__$1 = state_17703;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17703__$1,(18),out,inst_17691);
} else {
if((state_val_17705 === (13))){
var inst_17685 = (state_17703[(2)]);
var state_17703__$1 = state_17703;
var statearr_17714_18928 = state_17703__$1;
(statearr_17714_18928[(2)] = inst_17685);

(statearr_17714_18928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17705 === (6))){
var inst_17655 = (state_17703[(7)]);
var inst_17687 = inst_17655.length;
var inst_17688 = (inst_17687 > (0));
var state_17703__$1 = state_17703;
if(cljs.core.truth_(inst_17688)){
var statearr_17715_18929 = state_17703__$1;
(statearr_17715_18929[(1)] = (15));

} else {
var statearr_17719_18930 = state_17703__$1;
(statearr_17719_18930[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17705 === (17))){
var inst_17696 = (state_17703[(2)]);
var inst_17697 = cljs.core.async.close_BANG_(out);
var state_17703__$1 = (function (){var statearr_17720 = state_17703;
(statearr_17720[(10)] = inst_17696);

return statearr_17720;
})();
var statearr_17722_18938 = state_17703__$1;
(statearr_17722_18938[(2)] = inst_17697);

(statearr_17722_18938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17705 === (3))){
var inst_17701 = (state_17703[(2)]);
var state_17703__$1 = state_17703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17703__$1,inst_17701);
} else {
if((state_val_17705 === (12))){
var inst_17655 = (state_17703[(7)]);
var inst_17676 = cljs.core.vec(inst_17655);
var state_17703__$1 = state_17703;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17703__$1,(14),out,inst_17676);
} else {
if((state_val_17705 === (2))){
var state_17703__$1 = state_17703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17703__$1,(4),ch);
} else {
if((state_val_17705 === (11))){
var inst_17655 = (state_17703[(7)]);
var inst_17659 = (state_17703[(9)]);
var inst_17665 = (state_17703[(11)]);
var inst_17673 = inst_17655.push(inst_17659);
var tmp17725 = inst_17655;
var inst_17655__$1 = tmp17725;
var inst_17656 = inst_17665;
var state_17703__$1 = (function (){var statearr_17727 = state_17703;
(statearr_17727[(12)] = inst_17673);

(statearr_17727[(7)] = inst_17655__$1);

(statearr_17727[(8)] = inst_17656);

return statearr_17727;
})();
var statearr_17730_18948 = state_17703__$1;
(statearr_17730_18948[(2)] = null);

(statearr_17730_18948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17705 === (9))){
var inst_17656 = (state_17703[(8)]);
var inst_17669 = cljs.core.keyword_identical_QMARK_(inst_17656,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17703__$1 = state_17703;
var statearr_17732_18953 = state_17703__$1;
(statearr_17732_18953[(2)] = inst_17669);

(statearr_17732_18953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17705 === (5))){
var inst_17659 = (state_17703[(9)]);
var inst_17665 = (state_17703[(11)]);
var inst_17656 = (state_17703[(8)]);
var inst_17666 = (state_17703[(13)]);
var inst_17665__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17659) : f.call(null,inst_17659));
var inst_17666__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17665__$1,inst_17656);
var state_17703__$1 = (function (){var statearr_17734 = state_17703;
(statearr_17734[(11)] = inst_17665__$1);

(statearr_17734[(13)] = inst_17666__$1);

return statearr_17734;
})();
if(inst_17666__$1){
var statearr_17735_18974 = state_17703__$1;
(statearr_17735_18974[(1)] = (8));

} else {
var statearr_17736_18975 = state_17703__$1;
(statearr_17736_18975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17705 === (14))){
var inst_17659 = (state_17703[(9)]);
var inst_17665 = (state_17703[(11)]);
var inst_17678 = (state_17703[(2)]);
var inst_17681 = [];
var inst_17682 = inst_17681.push(inst_17659);
var inst_17655 = inst_17681;
var inst_17656 = inst_17665;
var state_17703__$1 = (function (){var statearr_17737 = state_17703;
(statearr_17737[(14)] = inst_17678);

(statearr_17737[(15)] = inst_17682);

(statearr_17737[(7)] = inst_17655);

(statearr_17737[(8)] = inst_17656);

return statearr_17737;
})();
var statearr_17738_18977 = state_17703__$1;
(statearr_17738_18977[(2)] = null);

(statearr_17738_18977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17705 === (16))){
var state_17703__$1 = state_17703;
var statearr_17739_18982 = state_17703__$1;
(statearr_17739_18982[(2)] = null);

(statearr_17739_18982[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17705 === (10))){
var inst_17671 = (state_17703[(2)]);
var state_17703__$1 = state_17703;
if(cljs.core.truth_(inst_17671)){
var statearr_17749_18983 = state_17703__$1;
(statearr_17749_18983[(1)] = (11));

} else {
var statearr_17750_18984 = state_17703__$1;
(statearr_17750_18984[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17705 === (18))){
var inst_17693 = (state_17703[(2)]);
var state_17703__$1 = state_17703;
var statearr_17751_18985 = state_17703__$1;
(statearr_17751_18985[(2)] = inst_17693);

(statearr_17751_18985[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17705 === (8))){
var inst_17666 = (state_17703[(13)]);
var state_17703__$1 = state_17703;
var statearr_17752_18991 = state_17703__$1;
(statearr_17752_18991[(2)] = inst_17666);

(statearr_17752_18991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_17754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17754[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_17754[(1)] = (1));

return statearr_17754;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_17703){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_17703);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e17755){var ex__13309__auto__ = e17755;
var statearr_17756_18996 = state_17703;
(statearr_17756_18996[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_17703[(4)]))){
var statearr_17757_18998 = state_17703;
(statearr_17757_18998[(1)] = cljs.core.first((state_17703[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18999 = state_17703;
state_17703 = G__18999;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_17703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_17703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__14058__auto__ = (function (){var statearr_17761 = f__14057__auto__();
(statearr_17761[(6)] = c__14056__auto___18912);

return statearr_17761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14058__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
