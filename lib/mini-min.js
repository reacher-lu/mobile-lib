!function(a){function b(a){var b;return h.each(i.slice.call(arguments,1),function(c){if(c)for(var d in c)void 0!==(b=c[d])&&(a[d]=b)}),a}function c(a){var b=a.match(s);return a?b[0]:a+"/"}function d(a,b){if(b&&/^[\.\/]/.test(a)){for(a=c(b)+a,a=a.replace(t,"/");a.match(u);)a=a.replace(u,"/");a=a.replace(v,"$1/")}return a}function e(a,b){return"/"===a.charAt(a.length-1)?a+="index":/.js$/.test(a)&&(a=a.slice(0,-3)),d(a,b)}function f(a,b,c){var d=h.map(b||[],function(a){return h.require(a,c)});return r(a)?a.apply(h,[h].concat(d)):void 0}function g(a){return r(a)?a.apply(h,[h,h.require]):void 0}var h={version:"0.1.1",Env:{host:a}},i=Array.prototype,j={},l=document;h.map=function(a,b){var c,d,e=[];if(h.isObject(a))for(d in a)c=b(a[d],d),null!==c&&e.push(c);else i.forEach.call(a,function(a,d){c=b(a,d),null!==c&&e.push(c)});return e.length>0?i.concat.apply([],e):e},h.each=function(a,b,c){var d,e,f;if(!a)return a;if(a.forEach===i.forEach)a.forEach(b,c);else if(h.isArray(a)){for(e=0,f=a.length;f>e;e++)if(b.call(c,a[e],e,a)===!1)return}else for(d=Object.keys(a),e=0,f=d.length;f>e;e++)if(b.call(c,a[d[e]],d[e],a)===!1)return;return a},h.mix=b,h.makeArray=function(a){if(null==a)return[];if(h.isArray(a))return a;var b=typeof a.length,c=typeof a;if("number"!==b||a.alert||"string"===c||"function"===c&&!("item"in a&&"number"===b))return[a];for(var d=[],e=0,f=a.length;f>e;e++)d[e]=a[e];return d},h.augment=function(a,b,c){return b instanceof Function&&h.mix(a.prototype,b.prototype),b instanceof Object&&h.mix(a.prototype,b),c instanceof Object&&h.mix(a.prototype,c),a},h.filter=function(a,b,c){return Array.prototype.filter.call(a,b,c||this)},h.clone=function(a,b){var c=a;if(!a)return c;var d=a.constructor;if(h.inArray(d,[Boolean,String,Number,Date,RegExp])?c=a.valueOf():h.isArray(a)?c=b?h.filter(a,b):a.concat():h.isPlainObject(a)&&(c={}),h.isArray(a))for(var e=0;e<c.length;e++)c[e]=h.clone(c[e],b);else if(h.isPlainObject(a))for(k in a)b&&b.call(a,a[k],k,a)===!1||(c[k]=h.clone(a[k],b));return c},h.ucfirst=function(a){return a+="",a.charAt(0).toUpperCase()+a.substring(1)},h.trim=function(a){return null==a?"":String.prototype.trim.call(a)},h.now=Date.now,h.reduce=function(a,b){var c=a.length;if("function"!=typeof b)throw new TypeError("callback is not function!");if(0===c&&2==arguments.length)throw new TypeError("arguments invalid");var d,e=0;if(arguments.length>=3)d=arguments[2];else do{if(e in a){d=a[e++];break}if(e+=1,e>=c)throw new TypeError}while(TRUE);for(;c>e;)e in a&&(d=b.call(void 0,d,a[e],e,a)),e++;return d},h.substitute=function(a,b,c){return"string"==typeof a&&b?a.replace(c||/\\?\{([^{}]+)\}/g,function(a,c){return"\\"===a.charAt(0)?a.slice(1):void 0===b[c]?"":b[c]}):a},h.indexOf=function(a,b){return Array.prototype.indexOf.call(b,a)},h.inArray=function(a,b){return h.indexOf(a,b)>-1},h.merge=function(){var a=i.slice.call(arguments,0);return b.apply(null,[{}].concat(a))},h.extend=function(a,b,c,d){var e,f=b.prototype;return f.constructor=b,e=Object.create(f),e.constructor=a,a.prototype=h.mix(e,a.prototype),a.superclass=f,c&&h.mix(e,c),d&&h.mix(a,d),a},h.type=function(a){return null==a?String(a):j[{}.toString.call(a)]||"object"},h.unique=function(a){return i.filter.call(a,function(b,c){return a.indexOf(b)==c})},h.isWindow=function(a){return a&&a==a.window},h.isPlainObject=function(a){return h.isObject(a)&&!h.isWindow(a)&&Object.getPrototypeOf(a)==Object.prototype},["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error"].forEach(function(a){var b=a.toLowerCase();j["[object "+a+"]"]=b,h["is"+a]=function(a){return h.type(a)===b}}),h.isUndefined=function(a){return void 0===a},h.isNull=function(a){return null===a},h.isArray=Array.isArray||h.isArray,h.startsWith=function(a,b){return 0===a.lastIndexOf(b,0)},h.endsWith=function(a,b){var c=a.length-b.length;return c>=0&&a.indexOf(b,c)===c};var m=0;h.guid=function(a){return(a||"")+m++},h.ready=function(a){return/complete|loaded|interactive/.test(l.readyState)&&l.body?a(h):l.addEventListener("DOMContentLoaded",function(){a(h)},!1),this},function(a){function b(a,b,c){function d(){}var e=[].slice,f=e.call(arguments,3),g=function(){var g=e.call(arguments);return b.apply(this instanceof d?this:c||this,a?g.concat(f):f.concat(g))};return d.prototype=b.prototype,g.prototype=new d,g}a.mix(a,{noop:function(){},bind:b(0,b,null,0),rbind:b(0,b,null,1)})}(h);var n={},o={debug:!1,fns:n};h.Config=o,h.config=function(a,b){var c,d,e,f=this,g=h.Config,i=g.fns;return h.isObject(a)?h.each(a,function(a,b){e=i[b],e?e.call(f,a):g[b]=a}):(c=i[a],void 0===b?d=c?c.call(f):g[a]:c?d=c.call(f,b):g[a]=b),d},h.config("mini",!0);var p={},q=h.isString,r=h.isFunction,s=/[^?#]*\//,t=/\/\.\//g,u=/\/[^/]+\/\.\.\//,v=/([^:/])\/\//g;h.add=function(a,b,c){return q(a)&&(a=e(a),p[a]={factory:b,requires:c&&c.requires}),h},h.require=function(a,b){var c;return q(a)&&(a=e(a,b),c=p[a])?(c.exports||(c.exports=r(c.factory)?c.requires?f(c.factory,c.requires,a):g(c.factory):c.factory),c.exports):void 0},h.use=function(a,b){return h.isObject(b)&&(b=b.success),q(a)&&(a=a.replace(/\s+/g,"").split(",")),f(b,a),h},h.log=function(a,b,c){var d=console;b=b&&d[b]?b:"log",d[b](c?c+": "+a:a)},h.error=function(a){if(h.config("debug"))throw a instanceof Error?a:new Error(a)},a.KISSY=h}(this),function(a,b){function c(a,b){for(var c in b)a[c]=b[c]}function d(a,b){var c,d=[];return a&&O.call(a,function(a,e){c=b(a,e),null!==c&&d.push(c)}),d.length?M.apply([],d):d}function e(a,b){return a&&O.call(a,b),a}function f(a){return a&&a==a.window}function g(a){return a&&9===a.nodeType}function h(a){return a&&1===a.nodeType}function i(a){return a&&"number"==typeof a.length}function j(a){return L.call(a,function(b,c){return a.indexOf(b)==c})}function k(a){var b=F.createElement("script"),c=F.getElementsByTagName("head")[0]||G;b.src=a,c.insertBefore(b,c.firstChild)}function l(a){return function(b){return{}.toString.call(b)=="[object "+a+"]"}}function m(a,b){return 1===b.length?n(a,b[0]):j(d(b,function(b){return n(a,b)}))}function n(a,b){var c,d=a.charAt(0),e="#"===d,f="."===d,i=e||f?a.slice(1):a,j=/^[\w-]*$/.test(i);return g(b)||h(b)?g(b)&&e&&j?(c=b.getElementById(i))?[c]:[]:K.call(!e&&j?f?b.getElementsByClassName(i):b.getElementsByTagName(a):b.querySelectorAll(a)):[]}function o(a,b){if(!a||!b||!h(a))return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!!e;return f||(e=X,e.appendChild(a)),d=~n(b,e).indexOf(a),!f&&e.removeChild(a),d}function p(a){return a in Y?Y[a]:Y[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function q(a,b){return void 0===b?a.className:void(a.className=b)}function r(a){return a.split(/[\.\s]\s*\.?/)}function s(a,b){return d(a,function(a){return a[b]})}function t(a,b,c){null==c?a.removeAttribute(b):a.setAttribute(b,c)}function u(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function v(a){return a.replace(/-+(.)?/g,function(){return arguments[1].toUpperCase()})}function w(a,b){return P(b)&&!ab[u(a)]?b+"px":b}function x(a,b){return E.getComputedStyle(a,null).getPropertyValue(b)}function y(a){if(!bb[a]){var b,c=F.createElement(a);F.body.appendChild(c),b=x(c,"display"),c.parentNode.removeChild(c),"none"==b&&(b="block"),bb[a]=b}return bb[a]}function z(a,b){var c=W(a);return void 0!==b?c.filter(S(b)?function(a){return I.call(b,function(b){return o(a,b)})}:b):c}function A(a){return"children"in a?K.call(a.children):d(a.childNodes,function(a){return h(a)?a:void 0})}function B(a,b,c,d){var e=[],f=S(b);for(a=d?a:a[c];a;)a&&!g(a)&&h(a)&&e.indexOf(a)<0&&e.push(a),a=a[c];return f&&!b.length&&(b=void 0),e=z(e,b),f?e:e.item(0)}function C(a,b){var c=[];return e(a,function(a){var d=a.nodeName,f=a.type,g=[];!d||"SCRIPT"!==d||f&&"text/javascript"!==f?(h(a)&&(e(a.getElementsByTagName("script"),function(a){g.push(a)}),C(g,b)),c.push(a)):(a.parentNode&&a.parentNode.removeChild(a),b&&b.push(a))}),c}function D(a){var b=null;return a&&i(a)&&(b=F.createDocumentFragment(),e(a,function(a){b.appendChild(a)})),b}var E=window,F=document,G=F.documentElement,H=[],I=H.some,J=H.every,K=H.slice,L=H.filter,M=H.concat,N=H.indexOf,O=H.forEach,P=l("Number"),Q=l("String"),R=l("Object"),S=Array.isArray||l("Array"),T=l("Function"),U=function(a){return R(a)&&!f(a)&&Object.getPrototypeOf(a)==Object.prototype},V={};c(V,{indexOf:function(a){return i(a)?N.call(this,a[0]):N.apply(this,arguments)},each:function(a){return J.call(this,function(b,c){return b=W(b),a.call(b,b,c)!==!1}),this},slice:function(){return W(K.apply(this,arguments))},end:function(){return this.__parent||this},getDOMNode:function(){return this[0]}});var W=function(a,b){var c=[];if(a)if(Q(a))a=a.trim(),c="<"==a[0]&&/<([\w:]+)/.test(a)?V.create(a):void 0!==b?m(a,W(b)):n(a,F);else{if(W.isNode(a))return a;a.nodeType||a.setTimeout?c=[a]:S(a)?c=a:a.nodeType||a.setTimeout||!a.item||(c=K.call(a))}return W.node(c)};W.all=function(a,b){return W(a,b)},W.one=function(a,b){return W(a,b).item(0)},W.node=function(a){return a=a||[],a.__proto__=V,a},W.node.prototype=V,W.isNode=function(a){return a instanceof W.node};var X=document.createElement("div");c(b,{query:n}),c(V,{all:function(a){var b,c=this;return b=W(m(a,c)),b.__parent=c,b},one:function(a){var b,c=this;return b=c.all(a),b=b.length?b.slice(0,1):null,b&&(b.__parent=c),b},filter:function(a){return W(T(a)?L.call(this,function(b){return a.call(b,b)}):L.call(this,function(b){return o(b,a)}))}});var Y={};c(V,{addClass:function(a){return a?e(this,function(b){var c=W(b),d=q(b),f=[];e(r(a),function(a){!c.hasClass(a)&&f.push(a)}),f.length&&q(b,d+(d?" ":"")+f.join(" "))}):this},removeClass:function(a){return e(this,function(b){if(void 0===a)return q(b,"");var c=q(b);e(r(a),function(a){c=c.replace(p(a)," ")}),q(b,c.trim())})},toggleClass:function(a,b){return a?e(this,function(c){var d=W(c);e(r(a),function(a){(void 0===b?!d.hasClass(a):b)?d.addClass(a):d.removeClass(a)})}):this},hasClass:function(a){return a?I.call(this,function(a){return J.call(this,function(b){return b?p(b).test(q(a)):!0})},r(a)):!1}});var Z=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,$=["val","css","html","text","data","width","height","offset"],_={hidefocus:"hideFocus",tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"};c(V,{attr:function(a,b){var c,d;if(U(a)){for(c in a)V.attr.call(this,c,a[c]);return this}if(~$.indexOf(a))return W(this)[a](b);if(void 0==b){var f=this[0];f&&h(f)&&(Z.test(a)?d=W(f).prop(a)?a.toLowerCase():void 0:"value"==a&&"INPUT"==f.nodeName?d=this.val():(d=f.getAttribute(a),d=!d&&a in f?f[a]:d))}else d=e(this,function(c){h(c)&&t(c,a,b)});return null===d?void 0:d},removeAttr:function(a){return e(this,function(b){h(b)&&t(b,a)})},hasAttr:function(a){return a?I.call(this,function(b){return h(b)&&b.getAttribute(a)}):!1},prop:function(a,b){return a=_[a]||a,void 0==b?this[0]&&this[0][a]:e(this,function(c){c[a]=b})},hasProp:function(a){return a?(a=_[a]||a,I.call(this,function(b){return h(b)&&b[a]})):!1},val:function(a){var b=this[0];if(!b)return this;if(b.multiple){var c=W("option",b);return void 0==a?K.call(s(c.filter(function(a){return a.selected}),"value")):e(c,function(b){b.selected=~a.indexOf(b.value)})}return void 0==a?b.value:e(this,function(b){b.value=a})},text:function(a){return void 0===a?this.length?this[0].textContent:null:e(this,function(b){b.textContent=void 0===a?"":""+a})}});var ab={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},bb={};c(V,{css:function(a,b){var c,d="";if(void 0==b){if(Q(a)){var f=this[0];return f?f.style[v(a)]||x(f,a):""}if(R(a))for(c in a)d+=u(c)+":"+w(c,a[c])+";"}else d=u(a)+":"+w(a,b)+";";return e(this,function(a){a.style.cssText+=";"+d})},show:function(){return e(this,function(a){"none"==a.style.display&&(a.style.display=""),"none"==x(a,"display")&&(a.style.display=y(a.nodeName))})},hide:function(){return this.css("display","none")},toggle:function(){return e(this,function(a){var b=W(a);"none"==b.css("display")?b.show():b.hide()})}}),e(["width","height"],function(a){V[a]=function(b){var c=this[0];return b?W(this).css(a,b):f(c)?c[v("inner-"+a)]:g(c)?G[v("scroll-"+a)]:this.offset()[a]}}),c(V,{item:function(a){var b=this;return P(a)?a>=b.length?null:W(b[a]):W(a)},first:function(a){return B(this[0]&&this[0].firstChild,a,"nextElementSibling",!0)},last:function(a){return B(this[0]&&this[0].lastChild,a,"previousElementSibling",!0)},next:function(a){return B(this[0],a,"nextElementSibling")},prev:function(a){return B(this[0],a,"previousElementSibling")},parent:function(a){return B(this[0],a,"parentNode")},children:function(a){var b=this[0];return b?z(A(b),a):this},siblings:function(a){var b=this[0];return b?z(L.call(A(b.parentNode),function(a){return a!==b}),a):this},contents:function(){var a=this[0];return a?W(K.call(a.childNodes)):this},contains:function(a){var b=this[0],a=i(a)?a[0]:a;return b&&a?b!==a&&b.contains(a):!1}}),c(V,{wrapAll:function(a){var b=this[0];if(b){var c,d=W(a);for(d.insertBefore(b);(c=d.children()).length;)d=d.first();d.append(this)}return this},wrap:function(a){var b=W(a),c=b[0].parentNode||this.length;return e(this,function(a){W(a).wrapAll(c?b[0].cloneNode(!0):b[0])})},unwrap:function(){return e(this,function(a){var b=W(a),c=b.parent();c.replaceWith(c.children())})},wrapInner:function(a){return e(this,function(b){var c=W(b),d=c.children();d.length?d.wrapAll(a):c.append(a)})},replaceWith:function(a){return this.before(a).remove()}}),e(["after","prepend","before","append"],function(a,b){var c=b%2;V[a]=function(a,d){var f,g,h=Q(a)?V.create(a):a,i=this.length>1;if(d)var j=[];return h.length?(h=D(C(h,j)),e(this,function(a){switch(f=c?a:a.parentNode,b){case 0:g=a.nextSibling;break;case 1:g=a.firstChild;break;case 2:g=a;break;default:g=null}f.insertBefore(i?h.cloneNode(!0):h,g),e(j,function(a){a.src?k(a.src):E.eval.call(E,a.innerHTML)})})):this},V[c?a+"To":"insert"+(b?"Before":"After")]=function(b){return W(b)[a](this),this}}),c(V,{offset:function(a){var b;if(this.length){if(void 0!==a)return e(this,function(b){var c,d,e={},f=W(b),g=f.offset();"static"===f.css("position")&&f.css("position","relative");for(c in a)d=parseFloat(f.css(c))||0,e[c]=d+a[c]-g[c];f.css(e)}),this;var c=this[0].getBoundingClientRect();b={left:c.left+E.pageXOffset,top:c.top+E.pageYOffset,width:Math.round(c.width),height:Math.round(c.height)}}return b}}),e(["scrollTop","scrollLeft"],function(a,b){V[a]=function(c){var d=this[0],f=a in d;return void 0===c?f?d[a]:d["page"+(b?"X":"Y")+"Offset"]:f?e(this,function(b){b[a]=c}):e(this,function(a){b?a.scrollTo(c,a.scrollY):a.scrollTo(a.scrollX,c)})}});var cb=/<([\w:]+)/,db=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,eb=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,fb=F.createElement("div"),gb=F.createElement("table"),hb=F.createElement("tbody"),ib=F.createElement("tr"),jb={"*":fb,thead:gb,tbody:gb,tfoot:gb,tr:hb,th:ib,td:ib};c(V,{create:function(a,b){var c,d,f,g=[];if(!a||!Q(a))return g;if(eb.test(a)?g=W(F.createElement(RegExp.$1)):(a=a.replace(db,"<$1></$2>"),d=cb.test(a)&&RegExp.$1,f=jb[d]||jb["*"],f.innerHTML=a,g=e(K.call(f.childNodes),function(a){f.removeChild(a)})),U(b))for(c in b)g.attr(c,b[c]);return g},html:function(a,b){return void 0===a?this.length?this[0].innerHTML:null:e(this,function(c){W(c).empty().append(a,b)})},remove:function(){var a=this;return a.detach&&a.detach(),e(a,function(a){a.parentNode&&a.parentNode.removeChild(a)})},empty:function(){return e(this,function(a){a.innerHTML=""})},clone:function(a){return W(d(this,function(b){return b.cloneNode(!!a)}))}}),"__proto__"in{}||c(W,{node:function(a){return a=a||[],c(a,V),a.__node=!0,a},isNode:function(a){return S(a)&&"__node"in a}}),c(b,{node:V,Node:W,NodeList:W,one:W.one,all:W.all}),b.add&&b.add("node",function(){return W})}(this,KISSY),function(a){function b(a){return function(){return a}}function c(a){return a._eid||(a._eid=r++)}function d(a){var b=a.split(".");return{e:b[0],ns:b.slice(1).join(" ")}}function e(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |S)")}function f(a,b,f,g,h){var i=d(b);if(i.ns)var j=e(b.ns);return(w[c(a)]||[]).filter(function(a){return!(!a||i.e&&a.e!=i.e||i.ns&&!j.test(a.ns)||f&&a.fn!==f||g&&a.sel!=g||h&&a.scope!==h)})}function g(a,b){return a.del&&!x&&a.e in y||!!b}function h(a){return x&&focusEvnet[a]||a}function i(a){var b,c={originalEvent:a};for(b in a)void 0!==a[b]&&(c[b]=a[b]);return j(c,a)}function j(a,c){return(c||!a.isDefaultPrevented)&&(c||(c=a),u(A,function(d,e){var f=c[e];a[e]=function(){return this[d]=b(!0),f&&f.apply(c,arguments)},a[d]=b(!1)}),a.halt=function(){this.preventDefault(),this.stopPropagation()},(void 0!==c.defaultPrevented?c.defaultPrevented:"returnValue"in c?c.returnValue===!1:c.getPreventDefault&&c.getPreventDefault())&&(a.isDefaultPrevented=b(!0))),a}function k(a,b){var c=document.createEvent(z[a]||"Events"),d=!0;if(b)for(var e in b)"bubbles"==e?d=!!b[e]:c[e]=b[e];return c.initEvent(a,d,!0),j(c)}function l(b,e,f,i,k,l){var m=c(b),n=w[m]||(w[m]=[]);return"ready"==e?a.ready(f):void e.split(/\s/).map(function(c){var e=d(c);e.fn=f,e.sel=i,e.del=k,e.scope=l;var m=k||f;e.proxy=function(a){if(a=j(a),!a.isImmediatePropagationStopped()){var c=m.apply(l||b,void 0==a._args?[a]:[a].concat(a._args));return c===!1&&(a.preventDefault(),a.stopPropagation()),c}},e.i=n.length,n.push(e),b.addEventListener(h(e.e),e.proxy,g(e)),c in a.Event.Special&&a.Event.Special[c].setup.apply(a.one(b,[e.scope]))})}function m(b,d,e,i,j){var k=c(b),l=function(c){c.map(function(c){delete w[k][c.i],b.removeEventListener(h(c.e),c.proxy,g(c)),event in a.Event.Special&&a.Event.Special[event].teardown.apply(a.one(b))})};d?d.split(/\s/).map(function(a){l(f(b,a,e,i,j))}):l(w[k]||[])}function n(a){var b={};return t(b,a),b.__proto__=a.__proto__,b}function o(a){return a.split(" ")}var p=a.all,q=a.node,r=1,s=function(a){return"function"==typeof a},t=function(a,b){for(var c in b)a[c]=b[c]},u=function(a,b,c){Object.keys(a).map(function(d){b.call(c,a[d],d,a)})},v=[].slice,w=[],x="onfocusin"in window,y={focus:"focusin",blur:"focusout"},z={click:"MouseEvent"},A={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};q.on=function(a,b,c,d){var e,f=this;return s(b)&&(d=c,c=b,b=void 0),c===!1&&(c=returnFalse),f.each(function(f){b&&(e=function(a){var e,g,h=f.all(b);if(h&&h.length)return g=h.filter(function(b){return b==a.target||p(b).contains(a.target)})[0],g&&g!==f[0]?(e=i(a),e.currentTarget=g,e.liveFired=f[0],c.apply(d||g,[e].concat(v.call(arguments,1)))):void 0}),l(f[0],a,c,b,e,d)}),f},q.detach=function(a,b,c,d){var e=this;return s(b)&&(d=c,c=b,b=void 0),e.each(function(e){m(e[0],a,c,b,d)}),e},q.delegate=function(a,b,c,d){return this.on(a,b,c,d)},q.undelegate=function(a,b,c,d){return this.detach(a,b,c,d)},q.fire=function(a,b){var c=this;return a.split(/\s/).map(function(d){d=k(d,b),c.each(function(c){"dispatchEvent"in c[0]?c[0].dispatchEvent(d):c.fireHandler(a,b)})}),c},q.fireHandler=function(a,b){var c,d,e=this;return a.split(/\s/).map(function(a){e.each(function(e){c=k(a),c.target=e[0],null===c.target&&(c=n(c)),t(c,b),f(e[0],a).map(function(a){return d=a.proxy(c),c.isImmediatePropagationStopped()?!1:void 0})})}),e},a.Event||(a.Event={}),a.Event.Target={_L:{},on:function(a,b,c){var d=o(a),e=this;return d.map(function(d){var f=d in e._L?e._L[d]:e._L[d]=[];f.push({E:a,F:b,S:c})}),e},fire:function(b,c){var d=o(b),e=this;return d.map(function(b){var d=e._L[b],f=a.mix(c||{},{target:e,currentTarget:e});d&&d.map(function(a){a.F.apply(a.S||e,[f].concat([].slice.call(arguments,2)))})}),e},detach:function(a,b,c){var d=o(a),e=this;return d.map(function(a){var d=e._L[a];if(d&&(b||!(e._L[a]=[])))for(var f=0;f<evT._Length;f++)group.F!=b||group.S!=c?group.F!=b||d.split(f,1):d.split(f,1)}),e}},a.Event.Special={},a.add("event",function(a){return a.Event})}(KISSY),function(a,b){function c(a,b){var c,d;for(d in b)void 0!==(c=b[d])&&(a[d]=c);return a}function d(a,b){return c(c({},a),b)}function e(a){return function(b){return{}.toString.call(b)=="[object "+a+"]"}}function f(a,b,c){var d,e,f=Object.keys(a);for(d=0,e=f.length;e>d;d++)if(b.call(c,a[f[d]],f[d],a)===!1)return}function g(a){a.url||(a.url=u.toString()),a.processData&&v(a.data)&&(a.data=l(a.data,a.serializeArray)),a.type=a.type.toUpperCase(),a.data&&"GET"==a.type&&(a.url=k(a.url,a.data)),a.cache===B&&(a.url=k(a.url,"t="+Date.now()));var b=/^([\w-]+:)?\/\/([^\/]+)/.test(a.url),c=b?RegExp.$1:u.protocol;return a.local="file:"==c,a.context||(a.context=a),a}function h(a,b){i.fire(a,{io:b})}function i(a){var b=this;if(!(b instanceof i))return new i(a);var c=g(d(J,a)),e=c.timeout;b.cfg=c,h("start",b);var f=c.dataType,j=I[f]||I[G],k=new j(b);b.transport=k;var l=c.beforeSend;if(l&&l.call(c.context,b,c)===!1)return b.abort(),b;h("send",b),e>0&&(b._timer=setTimeout(function(){b.abort("timeout")},1e3*e));try{k.send()}catch(m){b._complete(B,m.message)}return b}function j(a,b){I[a]=b}function k(a,b){return(a+"&"+b).replace(/[&?]{1,2}/,"?")}function l(a,b){var c=[];return m(c,a,b),c.join("&")}function m(a,b,c,d){var e=c===!0?K("[]"):G;f(b,function(b,f){d&&(f=d+e),w(b)?m(a,b,c,f):a.push(f+"="+K(b))})}function n(){return new a[L]}function o(a){this.io=a}function p(a){var b=a&&N.test(a),c=b?RegExp.$1:"text";return"javascript"===c?"script":c}function q(a){return JSON.parse(a)}function r(a){this.io=a}function s(a,b){return function(c,d,e,f,g){return x(d)&&(f=e,e=d,d=C),i({type:a||g,url:c,data:d,success:e,dataType:b||f})}}var t=a.document,u=a.location,v=e("Object"),w=Array.isArray||e("Array"),x=e("Function"),y=function(a,b){b=b||{},b instanceof Function&&(b={success:b});var c=t.createElement("script"),d=t.getElementsByTagName("head")[0]||t.documentElement;return c.charset=b.charset||"",c.onload=b.success,c.onerror=b.error,c.src=a,d.insertBefore(c,d.firstChild),c},z=1,A=!0,B=!A,C=null,D="abort",E="success",F="error",G="",H=function(){},I={},J={type:"GET",async:A,serializeArray:A,processData:A,beforeSend:H,success:H,error:H,complete:H,context:C,accepts:{script:"text/javascript,application/javascript",json:"application/json,text/json",xml:"application/xml,text/xml",html:"text/html",text:"text/plain"},timeout:0,cache:A};c(i,b.Event.Target),c(i.prototype,{abort:function(a){this.transport.abort(a)},_complete:function(a,b){var c=this,d=c.cfg,e=d.context,f=[c.responseData,b,c],g=a?E:F,i="complete";c._end||(c._end=A,clearTimeout(c._timer),d[g].apply(e,f),h(g,c),d[i].apply(e,f),h(i,c))}});var K=encodeURIComponent,L="XMLHttpRequest",M=/^\s*$/;c(o.prototype,{_init:function(){var a=this,b=a.io,c=b.cfg,e=c.dataType,g=c.accepts[e],h={},i=n();b.getNativeXhr=function(){return i},c.crossDomain||(h["X-Requested-With"]=L),g&&(h.Accept=g,i.overrideMimeType&&(g.indexOf(",")>-1&&(g=g.split(",",2)[0]),i.overrideMimeType(g))),(c.contentType||c.data&&"GET"!=c.type)&&(h["Content-Type"]=c.contentType||"application/x-www-form-urlencoded"),c.headers=d(h,c.headers||{}),i.onreadystatechange=function(){if(4===i.readyState){var a,d=B;if(i.status>=200&&i.status<300||304==i.status||0==i.status&&c.local){e=e||p(i.getResponseHeader("Content-Type")),a=b.responseText=i.responseText,b.responseXML=i.responseXML;try{"script"==e?(1,eval)(a):"xml"==e?a=i.responseXML:"json"==e&&(a=M.test(a)?C:q(a))}catch(f){d=f}b.responseData=a,d?b._complete(B,"parsererror"):b._complete(A,E)}else b._complete(B,F)}},i.open(c.type,c.url,c.async),f(c.headers,function(a,b){i.setRequestHeader(b,a)}),i.send(c.data?c.data:C)},abort:function(a){var b=this,c=b.xhr,d=b.io;c&&(c.onreadystatechange=H,c.abort()),d._complete(B,a||D)},send:function(){this._init()}}),j(G,o);var N=/^(?:text|application)\/(json|javascript|xml|html)/i;c(r.prototype,{abort:function(a){this._end(B,a||D)},_end:function(b,c){var d=this,e=d.script,f=d.io,g=d._globalVar;a[g]=function(){delete a[g]},e&&(e.src=C,e.onload=e.onerror=H,e.parentNode.removeChild(e)),f._complete(b,c)},send:function(){var b=this,c=b.io,d=c.cfg,e=d.jsonp||"callback",f=d.jsonpCallback||"jsonp"+z++;b._globalVar=f;var g=k(d.url,e+"="+f);a[f]=function(a){c.responseData=a,b._end(A,E)},b.script=y(g,{charset:d.scriptCharset,error:function(){b._end(B,F)}})}}),j("jsonp",r),c(i,{get:s("get"),post:s("post"),jsonp:s(C,"jsonp"),getJSON:s(C,"json"),getScript:y}),c(b,{IO:i,jsonp:i.jsonp,getScript:y}),b.add("io",function(){return i})}(this,KISSY);
document.write("耗时：" + (Date.now()-window.timing));
var perf = Date.now()-window.timing;
var historyPerf = storage.getItem('perf') || perf;
var average = (perf+historyPerf)/2;


document.write("本次耗时：" + perf);
document.write("平均耗时：" + average);

var storage = window.localStorage,
    times = storage.getItem('times') || 0;

document.write("访问次数：" + times);
if(times<10)
{
  storage.setItem('times',++times);
  storage.setItem('perf',historyPerf);
  setTimeout(function(){
    window.location.reload();
  },500);
}







var storage = window.localStorage;
var times = storage.getItem('times') || 0;

var perf = Date.now()-window.timing;
var historyPerf = storage.getItem('perf') || perf;
var average = (perf+historyPerf)/2;


document.write("本次耗时：" + perf);
document.write("平均耗时：" + average);
document.write("访问次数：" + times);

if(times<10)
{
  storage.setItem('times',++times);
  storage.setItem('perf',average);
  setTimeout(function(){
    window.location.reload();
  },500);
}







var storage = window.localStorage;
console.log(storage);
var times = storage.getItem('times') || 0;

var perf = Date.now()-window.timing;
var historyPerf = storage.getItem('perf') || perf;
var average = (perf+historyPerf)/2;


document.write("本次耗时：" + perf);
document.write("平均耗时：" + average);
document.write("访问次数：" + times);

if(times<10)
{
  storage.setItem('times',++times);
  storage.setItem('perf',average);
  setTimeout(function(){
    window.location.reload();
  },500);
}







(function(){
  var storage = window.localStorage;
  var times = storage.getItem('times') || 0;

  var perf = Date.now()-window.timing;
  var historyPerf = parseInt(storage.getItem('perf')) || perf;
  var average = (perf+historyPerf)/2;


  document.write("本次耗时：" + perf);
  document.write("平均耗时：" + average);
  document.write("访问次数：" + times);

  if(times<10)
  {
    storage.setItem('times',++times);
    storage.setItem('perf',average);
    setTimeout(function(){
      window.location.reload();
    },500);
  }

  document.querySelector('#clear').onclick=function(){
    storage.clear();
  }
})(window);






(function(){
  var storage = window.localStorage;
  var times = storage.getItem('times') || 0;

  var perf = Date.now()-window.timing;
  var historyPerf = parseFloat(storage.getItem('perf')) || perf;
  var average = (perf+historyPerf)/2;


  document.write("本次耗时：" + perf);
  document.write("平均耗时：" + average);
  document.write("访问次数：" + times);

  if(times<10)
  {
    storage.setItem('times',++times);
    storage.setItem('perf',average);
    setTimeout(function(){
      window.location.reload();
    },300);
  }

  document.querySelector('#clear').onclick=function(){
    storage.clear();
  }
})(window);






(function(){
  var storage = window.localStorage;
  var times = storage.getItem('times') || 0;

  var perf = Date.now()-window.timing;
  var historyPerf = parseFloat(storage.getItem('perf')) || perf;
  var average = (perf+historyPerf)/2;


  document.write("本次耗时：" + perf);
  document.write("平均耗时：" + average);
  document.write("访问次数：" + times);

  if(times<10)
  {
    storage.setItem('times',++times);
    storage.setItem('perf',average);
    setTimeout(function(){
      window.location.reload();
    },300);
  }

  document.querySelector('#clear').onclick=function(){
    storage.clear();
  }
})(window);






(function(){
  var storage = window.localStorage;
  var times = storage.getItem('times') || 0;

  var perf = Date.now()-window.timing;
  var historyPerf = parseFloat(storage.getItem('perf')) || perf;
  var average = (perf+historyPerf)/2;


  document.write("本次耗时：" + perf);
  document.write("平均耗时：" + average);
  document.write("访问次数：" + times);

  if(times<30)
  {
    storage.setItem('times',++times);
    storage.setItem('perf',average);
    setTimeout(function(){
      window.location.reload();
    },30);
  }else{
    storage.clear();
  }

  document.querySelector('#clear').onclick=function(){
    storage.clear();
  }
})(window);






(function(){
  var storage = window.localStorage;
  var times = storage.getItem('times') || 0;
  var firstPay = storage.getItem('firstPay') || 0;

  var perf = Date.now()-window.timing;
  var historyPerf = parseFloat(storage.getItem('perf')) || perf;
  var average = (perf+historyPerf)/2;


  document.write("<br>首次耗时：" + firstPay);
  document.write("<br>本次耗时：" + perf);
  document.write("<br>平均耗时：" + average);
  document.write("<br>访问次数：" + times);


  if(times==0)
  {
    storage.setItem('firstPay',perf);
  }
  if(times<30)
  {
    storage.setItem('times',++times);
    storage.setItem('perf',average);
    setTimeout(function(){
      window.location.reload();
    },30);
  }else{
    storage.clear();
  }

  document.querySelector('#clear').onclick=function(){
    storage.clear();
  }
})(window);






(function(){
  var storage = window.localStorage;
  var times = storage.getItem('times') || 0;
  var firstPay = storage.getItem('firstPay') || 0;

  var perf = Date.now()-window.timing;
  var historyPerf = parseFloat(storage.getItem('perf')) || perf;
  var average = (perf+historyPerf)/2;


  document.write("<br>首次耗时：" + firstPay);
  document.write("<br>本次耗时：" + perf);
  document.write("<br>平均耗时：" + average);
  document.write("<br>访问次数：" + times);


  if(times==0)
  {
    storage.setItem('firstPay',perf);
  }
  if(times<30)
  {
    storage.setItem('times',++times);
    storage.setItem('perf',average);
    setTimeout(function(){
      window.location.reload();
    },30);
  }else{
    storage.clear();
  }

  document.querySelector('#clear').onclick=function(){
    storage.clear();
  }
})(window);





