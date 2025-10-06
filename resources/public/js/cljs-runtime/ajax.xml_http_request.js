goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__22554 = e.target.readyState;
var fexpr__22553 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__22553.cljs$core$IFn$_invoke$arity$1 ? fexpr__22553.cljs$core$IFn$_invoke$arity$1(G__22554) : fexpr__22553.call(null,G__22554));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__22562,handler){
var map__22563 = p__22562;
var map__22563__$1 = cljs.core.__destructure_map(map__22563);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22563__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22563__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22563__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22563__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22563__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22563__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22563__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__22559_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__22559_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5823__auto___22600 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5823__auto___22600)){
var response_type_22601 = temp__5823__auto___22600;
(this$__$1.responseType = cljs.core.name(response_type_22601));
} else {
}

var seq__22567_22602 = cljs.core.seq(headers);
var chunk__22568_22603 = null;
var count__22569_22604 = (0);
var i__22570_22605 = (0);
while(true){
if((i__22570_22605 < count__22569_22604)){
var vec__22582_22606 = chunk__22568_22603.cljs$core$IIndexed$_nth$arity$2(null,i__22570_22605);
var k_22607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22582_22606,(0),null);
var v_22608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22582_22606,(1),null);
this$__$1.setRequestHeader(k_22607,v_22608);


var G__22609 = seq__22567_22602;
var G__22610 = chunk__22568_22603;
var G__22611 = count__22569_22604;
var G__22612 = (i__22570_22605 + (1));
seq__22567_22602 = G__22609;
chunk__22568_22603 = G__22610;
count__22569_22604 = G__22611;
i__22570_22605 = G__22612;
continue;
} else {
var temp__5823__auto___22613 = cljs.core.seq(seq__22567_22602);
if(temp__5823__auto___22613){
var seq__22567_22614__$1 = temp__5823__auto___22613;
if(cljs.core.chunked_seq_QMARK_(seq__22567_22614__$1)){
var c__5548__auto___22615 = cljs.core.chunk_first(seq__22567_22614__$1);
var G__22616 = cljs.core.chunk_rest(seq__22567_22614__$1);
var G__22617 = c__5548__auto___22615;
var G__22618 = cljs.core.count(c__5548__auto___22615);
var G__22619 = (0);
seq__22567_22602 = G__22616;
chunk__22568_22603 = G__22617;
count__22569_22604 = G__22618;
i__22570_22605 = G__22619;
continue;
} else {
var vec__22586_22620 = cljs.core.first(seq__22567_22614__$1);
var k_22621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22586_22620,(0),null);
var v_22622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22586_22620,(1),null);
this$__$1.setRequestHeader(k_22621,v_22622);


var G__22623 = cljs.core.next(seq__22567_22614__$1);
var G__22624 = null;
var G__22625 = (0);
var G__22626 = (0);
seq__22567_22602 = G__22623;
chunk__22568_22603 = G__22624;
count__22569_22604 = G__22625;
i__22570_22605 = G__22626;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5025__auto__ = body;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
