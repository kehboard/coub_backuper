/*! jQuery v1.7.1 jquery.com | jquery.org/license */

(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
(function() {
  window.blocks = {
    coub: {},
    clientsideTimeline: {}
  };

  window.channels = {};

  window.pages = {};

  window.pages.bestCoubs2013 = {};

  window.pages.bestCoubs2014 = {};

  window.pages.bestCoubs2015 = {};

  window.pages.bestCoubs2016 = {};

  window.pages.bestCoubs2012 = {};

  window.pages.bestCoubs2017 = {};

  window.pages.bestCoubs2018 = {};

  window.pages.bestCoubs2019 = {};

  window.pages.bestCoubs2020 = {};

  window.pages.bestCoubs2021 = {};

  window.pages.profile = {
    view: {},
    promo: {}
  };

  window.pages.tags = {};

  window.pages.dev_docs = {};

  window.pages.newEditorPromo = {};

  window.pages.findFriends = {};

  window.pages.editAccount = {};

  window.pages.hotPage = {};

  window.widgets = {
    player: {},
    timeline: {},
    transliteration: {},
    hints: {}
  };

  window.siteData = {};

  window.dataProviders = {};

  window.coubEditor = {
    data: {
      typeMatchers: {}
    },
    utils: {},
    widgets: {},
    helpers: {},
    serializers: {},
    functions: {},
    flash: {},
    stateMachines: {},
    animators: {},
    logic: {},
    mixins: {},
    modules: {},
    initializers: {}
  };

  window.helpers = {};

  window.mobile = {
    navigations: {},
    modules: {}
  };

  window.utils = {};

  window.functions = {};

  window.mobilePlayer = {};

  window.html5Player = {};

  window.siteAdmin = {
    moderation: {},
    widgets: {}
  };

  window.initializers = {};

  window.abstract = {};

  window.Banners = {};

}).call(this);
if (!window.console && !document.console) {
  window.console = {
    log: function() {}
  }
}
;
//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r=Array.prototype,e=Object.prototype,u=Function.prototype,i=r.push,a=r.slice,o=r.concat,l=e.toString,c=e.hasOwnProperty,f=Array.isArray,s=Object.keys,p=u.bind,h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=h),exports._=h):n._=h,h.VERSION="1.7.0";var g=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}};h.iteratee=function(n,t,r){return null==n?h.identity:h.isFunction(n)?g(n,t,r):h.isObject(n)?h.matches(n):h.property(n)},h.each=h.forEach=function(n,t,r){if(null==n)return n;t=g(t,r);var e,u=n.length;if(u===+u)for(e=0;u>e;e++)t(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,t,r){if(null==n)return[];t=h.iteratee(t,r);for(var e,u=n.length!==+n.length&&h.keys(n),i=(u||n).length,a=Array(i),o=0;i>o;o++)e=u?u[o]:o,a[o]=t(n[e],e,n);return a};var v="Reduce of empty array with no initial value";h.reduce=h.foldl=h.inject=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length,o=0;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[o++]:o++]}for(;a>o;o++)u=i?i[o]:o,r=t(r,n[u],u,n);return r},h.reduceRight=h.foldr=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[--a]:--a]}for(;a--;)u=i?i[a]:a,r=t(r,n[u],u,n);return r},h.find=h.detect=function(n,t,r){var e;return t=h.iteratee(t,r),h.some(n,function(n,r,u){return t(n,r,u)?(e=n,!0):void 0}),e},h.filter=h.select=function(n,t,r){var e=[];return null==n?e:(t=h.iteratee(t,r),h.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e)},h.reject=function(n,t,r){return h.filter(n,h.negate(h.iteratee(t)),r)},h.every=h.all=function(n,t,r){if(null==n)return!0;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,!t(n[u],u,n))return!1;return!0},h.some=h.any=function(n,t,r){if(null==n)return!1;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,t(n[u],u,n))return!0;return!1},h.contains=h.include=function(n,t){return null==n?!1:(n.length!==+n.length&&(n=h.values(n)),h.indexOf(n,t)>=0)},h.invoke=function(n,t){var r=a.call(arguments,2),e=h.isFunction(t);return h.map(n,function(n){return(e?t:n[t]).apply(n,r)})},h.pluck=function(n,t){return h.map(n,h.property(t))},h.where=function(n,t){return h.filter(n,h.matches(t))},h.findWhere=function(n,t){return h.find(n,h.matches(t))},h.max=function(n,t,r){var e,u,i=-1/0,a=-1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],e>i&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(u>a||u===-1/0&&i===-1/0)&&(i=n,a=u)});return i},h.min=function(n,t,r){var e,u,i=1/0,a=1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],i>e&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(a>u||1/0===u&&1/0===i)&&(i=n,a=u)});return i},h.shuffle=function(n){for(var t,r=n&&n.length===+n.length?n:h.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=h.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},h.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=h.values(n)),n[h.random(n.length-1)]):h.shuffle(n).slice(0,Math.max(0,t))},h.sortBy=function(n,t,r){return t=h.iteratee(t,r),h.pluck(h.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var m=function(n){return function(t,r,e){var u={};return r=h.iteratee(r,e),h.each(t,function(e,i){var a=r(e,i,t);n(u,e,a)}),u}};h.groupBy=m(function(n,t,r){h.has(n,r)?n[r].push(t):n[r]=[t]}),h.indexBy=m(function(n,t,r){n[r]=t}),h.countBy=m(function(n,t,r){h.has(n,r)?n[r]++:n[r]=1}),h.sortedIndex=function(n,t,r,e){r=h.iteratee(r,e,1);for(var u=r(t),i=0,a=n.length;a>i;){var o=i+a>>>1;r(n[o])<u?i=o+1:a=o}return i},h.toArray=function(n){return n?h.isArray(n)?a.call(n):n.length===+n.length?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:n.length===+n.length?n.length:h.keys(n).length},h.partition=function(n,t,r){t=h.iteratee(t,r);var e=[],u=[];return h.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},h.first=h.head=h.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:a.call(n,0,t)},h.initial=function(n,t,r){return a.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},h.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:a.call(n,Math.max(n.length-t,0))},h.rest=h.tail=h.drop=function(n,t,r){return a.call(n,null==t||r?1:t)},h.compact=function(n){return h.filter(n,h.identity)};var y=function(n,t,r,e){if(t&&h.every(n,h.isArray))return o.apply(e,n);for(var u=0,a=n.length;a>u;u++){var l=n[u];h.isArray(l)||h.isArguments(l)?t?i.apply(e,l):y(l,t,r,e):r||e.push(l)}return e};h.flatten=function(n,t){return y(n,t,!1,[])},h.without=function(n){return h.difference(n,a.call(arguments,1))},h.uniq=h.unique=function(n,t,r,e){if(null==n)return[];h.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=h.iteratee(r,e));for(var u=[],i=[],a=0,o=n.length;o>a;a++){var l=n[a];if(t)a&&i===l||u.push(l),i=l;else if(r){var c=r(l,a,n);h.indexOf(i,c)<0&&(i.push(c),u.push(l))}else h.indexOf(u,l)<0&&u.push(l)}return u},h.union=function(){return h.uniq(y(arguments,!0,!0,[]))},h.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;u>e;e++){var i=n[e];if(!h.contains(t,i)){for(var a=1;r>a&&h.contains(arguments[a],i);a++);a===r&&t.push(i)}}return t},h.difference=function(n){var t=y(a.call(arguments,1),!0,!0,[]);return h.filter(n,function(n){return!h.contains(t,n)})},h.zip=function(n){if(null==n)return[];for(var t=h.max(arguments,"length").length,r=Array(t),e=0;t>e;e++)r[e]=h.pluck(arguments,e);return r},h.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},h.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=h.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}for(;u>e;e++)if(n[e]===t)return e;return-1},h.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=n.length;for("number"==typeof r&&(e=0>r?e+r+1:Math.min(e,r+1));--e>=0;)if(n[e]===t)return e;return-1},h.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var d=function(){};h.bind=function(n,t){var r,e;if(p&&n.bind===p)return p.apply(n,a.call(arguments,1));if(!h.isFunction(n))throw new TypeError("Bind must be called on a function");return r=a.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(a.call(arguments)));d.prototype=n.prototype;var u=new d;d.prototype=null;var i=n.apply(u,r.concat(a.call(arguments)));return h.isObject(i)?i:u}},h.partial=function(n){var t=a.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===h&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},h.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=h.bind(n[r],n);return n},h.memoize=function(n,t){var r=function(e){var u=r.cache,i=t?t.apply(this,arguments):e;return h.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},h.delay=function(n,t){var r=a.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},h.defer=function(n){return h.delay.apply(h,[n,1].concat(a.call(arguments,1)))},h.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var l=function(){o=r.leading===!1?0:h.now(),a=null,i=n.apply(e,u),a||(e=u=null)};return function(){var c=h.now();o||r.leading!==!1||(o=c);var f=t-(c-o);return e=this,u=arguments,0>=f||f>t?(clearTimeout(a),a=null,o=c,i=n.apply(e,u),a||(e=u=null)):a||r.trailing===!1||(a=setTimeout(l,f)),i}},h.debounce=function(n,t,r){var e,u,i,a,o,l=function(){var c=h.now()-a;t>c&&c>0?e=setTimeout(l,t-c):(e=null,r||(o=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,a=h.now();var c=r&&!e;return e||(e=setTimeout(l,t)),c&&(o=n.apply(i,u),i=u=null),o}},h.wrap=function(n,t){return h.partial(t,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},h.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},h.before=function(n,t){var r;return function(){return--n>0?r=t.apply(this,arguments):t=null,r}},h.once=h.partial(h.before,2),h.keys=function(n){if(!h.isObject(n))return[];if(s)return s(n);var t=[];for(var r in n)h.has(n,r)&&t.push(r);return t},h.values=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},h.pairs=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},h.invert=function(n){for(var t={},r=h.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},h.functions=h.methods=function(n){var t=[];for(var r in n)h.isFunction(n[r])&&t.push(r);return t.sort()},h.extend=function(n){if(!h.isObject(n))return n;for(var t,r,e=1,u=arguments.length;u>e;e++){t=arguments[e];for(r in t)c.call(t,r)&&(n[r]=t[r])}return n},h.pick=function(n,t,r){var e,u={};if(null==n)return u;if(h.isFunction(t)){t=g(t,r);for(e in n){var i=n[e];t(i,e,n)&&(u[e]=i)}}else{var l=o.apply([],a.call(arguments,1));n=new Object(n);for(var c=0,f=l.length;f>c;c++)e=l[c],e in n&&(u[e]=n[e])}return u},h.omit=function(n,t,r){if(h.isFunction(t))t=h.negate(t);else{var e=h.map(o.apply([],a.call(arguments,1)),String);t=function(n,t){return!h.contains(e,t)}}return h.pick(n,t,r)},h.defaults=function(n){if(!h.isObject(n))return n;for(var t=1,r=arguments.length;r>t;t++){var e=arguments[t];for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,t){return t(n),n};var b=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof h&&(n=n._wrapped),t instanceof h&&(t=t._wrapped);var u=l.call(n);if(u!==l.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]===n)return e[i]===t;var a=n.constructor,o=t.constructor;if(a!==o&&"constructor"in n&&"constructor"in t&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c,f;if("[object Array]"===u){if(c=n.length,f=c===t.length)for(;c--&&(f=b(n[c],t[c],r,e)););}else{var s,p=h.keys(n);if(c=p.length,f=h.keys(t).length===c)for(;c--&&(s=p[c],f=h.has(t,s)&&b(n[s],t[s],r,e)););}return r.pop(),e.pop(),f};h.isEqual=function(n,t){return b(n,t,[],[])},h.isEmpty=function(n){if(null==n)return!0;if(h.isArray(n)||h.isString(n)||h.isArguments(n))return 0===n.length;for(var t in n)if(h.has(n,t))return!1;return!0},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=f||function(n){return"[object Array]"===l.call(n)},h.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp"],function(n){h["is"+n]=function(t){return l.call(t)==="[object "+n+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")}),"function"!=typeof/./&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&n!==+n},h.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===l.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return n===void 0},h.has=function(n,t){return null!=n&&c.call(n,t)},h.noConflict=function(){return n._=t,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(n){return function(t){return t[n]}},h.matches=function(n){var t=h.pairs(n),r=t.length;return function(n){if(null==n)return!r;n=new Object(n);for(var e=0;r>e;e++){var u=t[e],i=u[0];if(u[1]!==n[i]||!(i in n))return!1}return!0}},h.times=function(n,t,r){var e=Array(Math.max(0,n));t=g(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},h.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var _={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},w=h.invert(_),j=function(n){var t=function(t){return n[t]},r="(?:"+h.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=j(_),h.unescape=j(w),h.result=function(n,t){if(null==n)return void 0;var r=n[t];return h.isFunction(r)?n[t]():r};var x=0;h.uniqueId=function(n){var t=++x+"";return n?n+t:t},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var A=/(.)^/,k={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},O=/\\|'|\r|\n|\u2028|\u2029/g,F=function(n){return"\\"+k[n]};h.template=function(n,t,r){!t&&r&&(t=r),t=h.defaults({},t,h.templateSettings);var e=RegExp([(t.escape||A).source,(t.interpolate||A).source,(t.evaluate||A).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(O,F),u=o+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":a&&(i+="';\n"+a+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=new Function(t.variable||"obj","_",i)}catch(o){throw o.source=i,o}var l=function(n){return a.call(this,n,h)},c=t.variable||"obj";return l.source="function("+c+"){\n"+i+"}",l},h.chain=function(n){var t=h(n);return t._chain=!0,t};var E=function(n){return this._chain?h(n).chain():n};h.mixin=function(n){h.each(h.functions(n),function(t){var r=h[t]=n[t];h.prototype[t]=function(){var n=[this._wrapped];return i.apply(n,arguments),E.call(this,r.apply(h,n))}})},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=r[n];h.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],E.call(this,r)}}),h.each(["concat","join","slice"],function(n){var t=r[n];h.prototype[n]=function(){return E.call(this,t.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.URLRepresent = (function() {
    URLRepresent.URL_PATTERN = /(https?:\/\/)(w{3}\.)?([\w\d\-_\.]+\.[\w]{2,5})(:\d+)?(\/[\/\w\d%\-~\.]*)?(\?[;&\w\d%_\.~+=-]*)?(\#[\-\w\d_]*)?/i;

    URLRepresent.URL_PATTERN_INDEXES = {
      PROTOCOL: 1,
      WWW: 2,
      DOMAIN: 3,
      PORT: 4,
      PATH: 5,
      QUERY: 6,
      FRAGMENT: 7
    };

    function URLRepresent(urlString) {
      this.getClearPath = bind(this.getClearPath, this);
      this.getFragment = bind(this.getFragment, this);
      this.getQuery = bind(this.getQuery, this);
      this.getPath = bind(this.getPath, this);
      this.getDomain = bind(this.getDomain, this);
      this.hasWWW = bind(this.hasWWW, this);
      this.getProtocol = bind(this.getProtocol, this);
      this.get = bind(this.get, this);
      var parsed;
      this.url = urlString;
      parsed = urlString.match(URLRepresent.URL_PATTERN);
      if (parsed != null) {
        this.protocol = parsed[URLRepresent.URL_PATTERN_INDEXES.PROTOCOL];
        this.www = parsed[URLRepresent.URL_PATTERN_INDEXES.WWW];
        this.domain = parsed[URLRepresent.URL_PATTERN_INDEXES.DOMAIN];
        this.path = parsed[URLRepresent.URL_PATTERN_INDEXES.PATH];
        this.query = parsed[URLRepresent.URL_PATTERN_INDEXES.QUERY];
        this.fragment = parsed[URLRepresent.URL_PATTERN_INDEXES.FRAGMENT];
      }
    }

    URLRepresent.prototype.get = function() {
      return this.url;
    };

    URLRepresent.prototype.getProtocol = function() {
      return this.protocol;
    };

    URLRepresent.prototype.hasWWW = function() {
      return typeof x !== "undefined" && x.length > 0;
    };

    URLRepresent.prototype.getDomain = function() {
      return this.domain;
    };

    URLRepresent.prototype.getPath = function() {
      return this.path;
    };

    URLRepresent.prototype.getQuery = function() {
      return this.query;
    };

    URLRepresent.prototype.getFragment = function() {
      return this.fragment;
    };

    URLRepresent.prototype.getClearPath = function() {
      if (this.path != null) {
        return this.path.replace(/\/$/, "").toString();
      } else {
        return "";
      }
    };

    return URLRepresent;

  })();

}).call(this);
/*
 CSS Browser Selector 0.81
 Originally written by Rafael Lima (http://rafael.adm.br)
 http://rafael.adm.br/css_browser_selector
 License: http://creativecommons.org/licenses/by/2.5/

 Co-maintained by:
 https://github.com/ridjohansen/css_browser_selector
 https://github.com/delka/css_browser_selector
 https://github.com/verbatim/css_browser_selector
 */

(function() {
var uaInfo = {
	ua : '',
	is : function (t) {
		return RegExp(t, "i").test(uaInfo.ua);
	},
	version : function (p, n) {
		n = n.replace(".", "_");
		var i = n.indexOf('_'),
			ver = "";
		while (i > 0) {
			ver += " " + p + n.substring(0, i);
			i = n.indexOf('_', i + 1);
		}
		ver += " " + p + n;
		return ver;
	},
	getBrowser : function() {
		var g = 'gecko',
			w = 'webkit',
			c = 'chrome',
			f = 'firefox',
			s = 'safari',
			o = 'opera',

			ua = uaInfo.ua,
			is = uaInfo.is;

		return [
			(!(/opera|webtv/i.test(ua)) && /msie\s(\d+)/.test(ua)) ? ('ie ie' + (/trident\/4\.0/.test(ua) ? '8' : RegExp.$1))
				:is('edge\/') ? 'edge ie' + (/edge\/(\d+)\.(\d+)/.test(ua) ? RegExp.$1 + ' ie' + RegExp.$1 + '_' + RegExp.$2 : '') // IE Edge
				:is('trident\/') ? 'ie ie'+ (/trident\/.+rv:(\d+)/i.test(ua) ? RegExp.$1 : '') //ie11+
				:is('firefox/') ? g + " " + f + (/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua) ? ' ' + f + RegExp.$2 + ' ' + f + RegExp.$2 + "_" + RegExp.$4 : '')
				:is('gecko/') ? g
				:is('opera') ? o + (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua) ? ' ' + o + RegExp.$2 + ' ' + o + RegExp.$2 + "_" + RegExp.$4 : (/opera(\s|\/)(\d+)\.(\d+)/.test(ua) ? ' ' + o + RegExp.$2 + " " + o + RegExp.$2 + "_" + RegExp.$3 : ''))
				:is('konqueror') ? 'konqueror'
				:is('chrome') ? w + ' ' + c + (/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua) ? ' ' + c + RegExp.$2 + ((RegExp.$4 > 0) ? ' ' + c + RegExp.$2 + "_" + RegExp.$4 : '') : '')
				:is('iron') ? w + ' iron'
				:is('applewebkit/') ? (w + ' ' + s + (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua) ? ' ' + s + RegExp.$2 + " " + s + RegExp.$2 + RegExp.$3.replace('.', '_') : (/ Safari\/(\d+)/i.test(ua) ? ((RegExp.$1 == "419" || RegExp.$1 == "417" || RegExp.$1 == "416" || RegExp.$1 == "412") ? ' ' + s + '2_0' : RegExp.$1 == "312" ? ' ' + s + '1_3' : RegExp.$1 == "125" ? ' ' + s + '1_2' : RegExp.$1 == "85" ? ' ' + s + '1_0' : '') : ''))) //applewebkit
				:is('mozilla/') ? g : ''
		];
	},
	getPlatform : function() {
		var wp = 'winphone',
			a  = 'android',
			bb = 'blackberry',
			dv = 'device_',

			ua = uaInfo.ua,
			version = uaInfo.version,
			is = uaInfo.is;

		return [
			is('j2me') ? 'j2me'
			:is('windows phone') ? (wp + (/Windows Phone (\d+)(\.(\d+))+/i.test(ua) ? " " + wp + RegExp.$1 + " " + wp + RegExp.$1 + RegExp.$2.replace('.', '_') : (/Windows Phone OS (\d+)(\.(\d+))+/i.test(ua) ? " " + wp + RegExp.$1 + " " + wp + RegExp.$1 + RegExp.$2.replace('.', '_') : ''))) // Windows Phone
			:is('blackberry') ? (bb + (/Version\/(\d+)(\.(\d+)+)/i.test(ua) ? " " + bb + RegExp.$1 + " " + bb + RegExp.$1 + RegExp.$2.replace('.', '_') : (/Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(ua) ? ' ' + bb + RegExp.$2 + (RegExp.$3 ? ' ' + bb + RegExp.$2 + RegExp.$3 : '') : ''))) // blackberry
			:is('android') ? (a + (/Version\/(\d+)(\.(\d+))+/i.test(ua) ? " " + a + RegExp.$1 + " " + a + RegExp.$1 + RegExp.$2.replace('.', '_') : '') + (/Android (.+); (.+) Build/i.test(ua) ? ' ' + dv + ((RegExp.$2).replace(/ /g, "_")).replace(/-/g, "_") : '')) //android
			:is('ipad|ipod|iphone') ? (
			(/CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(ua) ? 'ios' + version('ios', RegExp.$2) : '') + ' ' + (/(ip(ad|od|hone))/gi.test(ua) ? RegExp.$1 : "")) //'iphone'
			//:is('ipod')?'ipod'
			//:is('ipad')?'ipad'
			:is('playbook') ? 'playbook'
			:is('kindle|silk') ? 'kindle'
			:is('playbook') ? 'playbook'
			:is('mac') ? 'mac' + (/mac os x ((\d+)[.|_](\d+))/.test(ua) ? (' mac' + (RegExp.$2) + ' mac' + (RegExp.$1).replace('.', "_")) : '')
			:is('win') ? 'win' + (is('windows nt 10.0') ? ' win10'
			:is('windows nt 6.3') ? ' win8_1'
			:is('windows nt 6.2') ? ' win8'
			:is('windows nt 6.1') ? ' win7'
			:is('windows nt 6.0') ? ' vista'
			:is('windows nt 5.2') || is('windows nt 5.1') ? ' win_xp'
			:is('windows nt 5.0') ? ' win_2k'
			:is('windows nt 4.0') || is('WinNT4.0') ? ' win_nt' : '')
			:is('freebsd') ? 'freebsd'
			:is('x11|linux') ? 'linux' : ''
		];
	},
	getMobile : function() {
		var is = uaInfo.is;
		return [
			is("android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|winphone|playbook|kindle|silk") ? 'mobile' : ''
		];
	},
	getIpadApp : function() {
		var is = uaInfo.is;
		return [
			(is('ipad|iphone|ipod') && !is('safari')) ? 'ipad_app' : ''
		];
	},
	getLang : function() {
		var ua = uaInfo.ua;

		return [
			/[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(ua) ? ('lang_' + RegExp.$2).replace("-", "_") + (RegExp.$3 != '' ? (' ' + 'lang_' + RegExp.$1).replace("-", "_") : '') : ''
		];
	}
}

if (typeof html =='undefined') { 
	html=document.documentElement;
}

var screenInfo = {
	width : (window.outerWidth || html.clientWidth) - 15,
	height : window.outerHeight || html.clientHeight,
	screens : [0, 768, 980, 1200],
	
	screenSize : function () {
		screenInfo.width = (window.outerWidth || html.clientWidth) - 15;
		screenInfo.height = window.outerHeight || html.clientHeight;
			
		var screens = screenInfo.screens,
			i = screens.length,
			arr = [],
			maxw, 
			minw;
		
		while(i--) {
			if (screenInfo.width >= screens[i]) {
				if(i) {
					arr.push("minw_" + screens[(i)]);
				}
				if (i <= 2) {
					arr.push("maxw_" + (screens[(i) + 1] - 1));
				}
				break;
			}
		}
		return arr;
	},
	getOrientation : function() {
		return screenInfo.width < screenInfo.height ? ["orientation_portrait"] : ["orientation_landscape"];
	},
	getInfo : function() {
		var arr = [];
		arr = arr.concat(screenInfo.screenSize());
		arr = arr.concat(screenInfo.getOrientation());
		return  arr;
	},
	getPixelRatio : function() {
		var arr = [],
			pixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;

		if(pixelRatio > 1) {
			arr.push('retina_' + parseInt(pixelRatio) + 'x');
			arr.push('hidpi');
		} else {
			arr.push('no-hidpi');
		}
		return arr;
	}
}

var dataUriInfo = {
	data : new Image(),
	div : document.createElement("div"),
	isIeLessThan9 : false,
	getImg : function() {

		dataUriInfo.data.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
		dataUriInfo.div.innerHTML = "<!--[if lt IE 9]><i></i><![endif]-->";
		dataUriInfo.isIeLessThan9 = dataUriInfo.div.getElementsByTagName("i").length == 1;

		return dataUriInfo.data;
	},
	checkSupport : function() {
		if(dataUriInfo.data.width != 1 || dataUriInfo.data.height != 1 || dataUriInfo.isIeLessThan9) {
			return ["no-datauri"];
		}
		else {
			return ["datauri"];
		}
	}

}

function css_browser_selector(u, ns) {
	var html = document.documentElement,
		b = []
		ns = ns ? ns : "";

	/* ua */
	uaInfo.ua = u.toLowerCase();
	b = b.concat(uaInfo.getBrowser());
	b = b.concat(uaInfo.getPlatform());
	b = b.concat(uaInfo.getMobile());
	b = b.concat(uaInfo.getIpadApp());
	b = b.concat(uaInfo.getLang());


	/* js */
	b = b.concat(['js']);

	/* pixel ratio */
	b = b.concat(screenInfo.getPixelRatio());

	/* screen */
	b = b.concat(screenInfo.getInfo());

	var updateScreen = function() {
		html.className = html.className.replace(/ ?orientation_\w+/g, "").replace(/ [min|max|cl]+[w|h]_\d+/g, "");
		html.className = html.className + ' ' + screenInfo.getInfo().join(' ');
	}

	if (window.addEventListener) {
		window.addEventListener('resize', updateScreen);
		window.addEventListener('orientationchange', updateScreen);
	} else if (window.attachEvent) {
		window.attachEvent('onresize', updateScreen);
	}

	/* dataURI */
	var data = dataUriInfo.getImg();
	data.onload = data.onerror = function(){
		html.className += ' ' + dataUriInfo.checkSupport().join(' ');
	}


	/* save & add existing html classes */
	var classes = html.className;
	var classesArray = classes.split(/ /);

	/* merge existing classes on html tag */
	b = b.concat(classesArray);

	/* removendo itens invalidos do array */
	/* add filter function polyfill for IE8 */
	if (!Array.prototype.filter) {
		Array.prototype.filter = function(fun/*, thisArg*/) {
			'use strict';

			if (this === void 0 || this === null) {
				throw new TypeError();
			}

			var t = Object(this);
			var len = t.length >>> 0;
			if (typeof fun !== 'function') {
				throw new TypeError();
			}

			var res = [];
			var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
			for (var i = 0; i < len; i++) {
				if (i in t) {
					var val = t[i];

					// NOTE: Technically this should Object.defineProperty at
					//			 the next index, as push can be affected by
					//			 properties on Object.prototype and Array.prototype.
					//			 But that method's new, and collisions should be
					//			 rare, so use the more-compatible alternative.
					if (fun.call(thisArg, val, i, t)) {
						res.push(val);
					}
				}
			}

			return res;
		};
	}

	b = b.filter(function(e){
		/* if no-js class exists, remove it */
		if (e === 'no-js') {
			return false;
        }
		return e;
	});

	/* prefixo do namespace */
	b[0] = ns ? ns + b[0] : b[0];
	html.className = b.join(' ' + ns);
	return html.className;
}

// Add css_browser_selector as a global object.
window.css_browser_selector = css_browser_selector;
})();

// define css_browser_selector_ns before loading this script to assign a namespace
var css_browser_selector_ns = css_browser_selector_ns || "";

// init
css_browser_selector(navigator.userAgent, css_browser_selector_ns);
$.fn.extend({
  scrollWidth: function() {
    return this.get(0).scrollWidth;
  },

  scrollHeight: function() {
    return this.get(0).scrollHeight;
  },

  positionedOffset: function() {
    return {
      left: parseInt(this.css("left")),
      right: parseInt(this.css("left")) + this.width()
    }
  },

  groupBind: function(group, cbk) {
    var el = $(this)
    var cbks = {}
    var checkIfAllIsDone = function() {
      var values = _.values(cbks);
      if (_.uniq(values) == [true]) {
        cbk();
      }
    }

    _.each(group, function(g) {
      cbks[group] = false;

      el.bind(group, function() {
        console.log('ckbs is done', group)
        cbks[group] = true;
      })
    })
  },

  getJSON: function() {
    return JSON.parse($(this).html());
  },

  getLeft: function() {
    return parseInt($(this).css('left')) || 0;
  },

  getTop: function() {
    return parseInt($(this).css('top')) || 0;
  },

  reverse: function() {
    return this.pushStack(this.get().reverse(), arguments);
  }
});

$.scrollTo = function(y, duration) {
  $("html, body").stop(true).animate({scrollTop: y, duration: duration});
};

$.handleRedirect = function(u) {
  if (u == window.location.href) {
    window.location.reload();
  } else {
    window.location.href = u;
  }
};

Math.randomFromTwo = function(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
};

(function($){
    $.validator && $.validator.addMethod('clearance_0_16_email', function(value) {
      var re = /^[a-z0-9!#\$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#\$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
      return re.test(value);
    }, "Incorrect email");

    $.fn.serializeObject = function(){
        var self = this,
            json = {},
            push_counters = {},
            patterns = {
                "validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
                "key":      /[a-zA-Z0-9_]+|(?=\[\])/g,
                "push":     /^$/,
                "fixed":    /^\d+$/,
                "named":    /^[a-zA-Z0-9_]+$/
            };


        this.build = function(base, key, value){
            base[key] = value;
            return base;
        };

        this.push_counter = function(key){
            if(push_counters[key] === undefined){
                push_counters[key] = 0;
            }
            return push_counters[key]++;
        };

        $.each($(this).serializeArray(), function(){

            // skip invalid keys
            if(!patterns.validate.test(this.name)){
                return;
            }

            var k,
                keys = this.name.match(patterns.key),
                merge = this.value,
                reverse_key = this.name;

            while((k = keys.pop()) !== undefined){

                // adjust reverse_key
                reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');

                // push
                if(k.match(patterns.push)){
                    merge = self.build([], self.push_counter(reverse_key), merge);
                }

                // fixed
                else if(k.match(patterns.fixed)){
                    merge = self.build([], k, merge);
                }

                // named
                else if(k.match(patterns.named)){
                    merge = self.build({}, k, merge);
                }
            }

            json = $.extend(true, json, merge);
        });

        return json;
    };
})(jQuery);

/*
 * jQuery store - Plugin for persistent data storage using localStorage, userData (and window.name)
 * 
 * Authors: Rodney Rehm
 * Web: http://medialize.github.com/jQuery-store/
 * 
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 */

/**********************************************************************************
 * INITIALIZE EXAMPLES:
 **********************************************************************************
 * 	// automatically detect best suited storage driver and use default serializers
 *	$.storage = new $.store();
 *	// optionally initialize with specific driver and or serializers
 *	$.storage = new $.store( [driver] [, serializers] );
 *		driver		can be the key (e.g. "windowName") or the driver-object itself
 *		serializers	can be a list of named serializers like $.store.serializers
 **********************************************************************************
 * USAGE EXAMPLES:
 **********************************************************************************
 *	$.storage.get( key );			// retrieves a value
 *	$.storage.set( key, value );	// saves a value
 *	$.storage.del( key );			// deletes a value
 *	$.storage.flush();				// deletes aall values
 **********************************************************************************
 */


(function($,undefined){

/**********************************************************************************
 * $.store base and convinience accessor
 **********************************************************************************/

$.store = function( driver, serializers )
{
	var that = this;
	
	if( typeof driver == 'string' )
	{
		if( $.store.drivers[ driver ] )
			this.driver = $.store.drivers[ driver ];
		else
			throw new Error( 'Unknown driver '+ driver );
	}
	else if( typeof driver == 'object' )
	{
		var invalidAPI = !$.isFunction( driver.init )
			|| !$.isFunction( driver.get )
			|| !$.isFunction( driver.set )
			|| !$.isFunction( driver.del )
			|| !$.isFunction( driver.flush );
			
		if( invalidAPI )
			throw new Error( 'The specified driver does not fulfill the API requirements' );
		
		this.driver = driver;
	}
	else
	{
		// detect and initialize storage driver
		$.each( $.store.drivers, function()
		{
			// skip unavailable drivers
			if( !$.isFunction( this.available ) || !this.available() )
				return true; // continue;
			
			that.driver = this;
			if( that.driver.init() === false )
			{
				that.driver = null;
				return true; // continue;
			}
			
			return false; // break;
		});
	}
	
	// use default serializers if not told otherwise
	if( !serializers )
		serializers = $.store.serializers;
	
	// intialize serializers
	this.serializers = {};
	$.each( serializers, function( key, serializer )
	{
		// skip invalid processors
		if( !$.isFunction( this.init ) )
			return true; // continue;
		
		that.serializers[ key ] = this;
		that.serializers[ key ].init( that.encoders, that.decoders );
	});
};


/**********************************************************************************
 * $.store API
 **********************************************************************************/

$.extend( $.store.prototype, {
	get: function( key )
	{
		var value = this.driver.get( key );
		return this.driver.encodes ? value : this.unserialize( value );
	},
	set: function( key, value )
	{
		this.driver.set( key, this.driver.encodes ? value : this.serialize( value ) );
	},
	del: function( key )
	{
		this.driver.del( key );
	},
	flush: function()
	{
		this.driver.flush();
	},
	driver : undefined,
	encoders : [],
	decoders : [],
	serialize: function( value )
	{
		var that = this;
		
		$.each( this.encoders, function()
		{
			var serializer = that.serializers[ this + "" ];
			if( !serializer || !serializer.encode )
				return true; // continue;
			try
			{
				value = serializer.encode( value );
			}
			catch( e ){}
		});

		return value;
	},
	unserialize: function( value )
	{
		var that = this;
		if( !value )
			return value;
		
		$.each( this.decoders, function()
		{
			var serializer = that.serializers[ this + "" ];
			if( !serializer || !serializer.decode )
				return true; // continue;

			value = serializer.decode( value );
		});

		return value;
	}
});


/**********************************************************************************
 * $.store drivers
 **********************************************************************************/

$.store.drivers = {
	// Firefox 3.5, Safari 4.0, Chrome 5, Opera 10.5, IE8
	'localStorage': {
		// see https://developer.mozilla.org/en/dom/storage#localStorage
		ident: "$.store.drivers.localStorage",
		scope: 'browser',
		available: function()
		{
			try
			{
				// Firefox won't allow localStorage if cookies are disabled
				if (!!window.localStorage) {
					// Safari's "Private" mode throws a QUOTA_EXCEEDED_ERR on setItem
					window.localStorage.setItem("jQuery Store Availability test", true);
					window.localStorage.removeItem("jQuery Store Availability test");
					return true;
				};
				return false;
			}
			catch(e)
			{
				return false;
			}
		},
		init: $.noop,
		get: function( key )
		{
			return window.localStorage.getItem( key );
		},
		set: function( key, value )
		{
			window.localStorage.setItem( key, value );
		},
		del: function( key )
		{
			window.localStorage.removeItem( key );
		},
		flush: function()
		{
			window.localStorage.clear();
		}
	},
	
	// IE6, IE7
	'userData': {
		// see http://msdn.microsoft.com/en-us/library/ms531424.aspx
		ident: "$.store.drivers.userData",
		element: null,
		nodeName: 'userdatadriver',
		scope: 'browser',
		initialized: false,
		available: function()
		{
			try
			{
				return !!( document.documentElement && document.documentElement.addBehavior );
			}
			catch(e)
			{
				return false;
			}
		},
		init: function()
		{
			// $.store can only utilize one userData store at a time, thus avoid duplicate initialization
			if( this.initialized )
				return;
			
			try
			{
				// Create a non-existing element and append it to the root element (html)
				this.element = document.createElement( this.nodeName );
				document.documentElement.insertBefore( this.element, document.getElementsByTagName('title')[0] );
				// Apply userData behavior
				this.element.addBehavior( "#default#userData" );
				this.initialized = true;
			}
			catch( e )
			{
				return false; 
			}
		},
		get: function( key )
		{
			this.element.load( this.nodeName );
			return this.element.getAttribute( key );
		},
		set: function( key, value )
		{
			this.element.setAttribute( key, value );
			this.element.save( this.nodeName );
		},
		del: function( key )
		{
			this.element.removeAttribute( key );
			this.element.save( this.nodeName );
			
		},
		flush: function()
		{
			// flush by expiration
			var attrs = this.element.xmlDocument.firstChild.attributes;
			for (var i = attrs.length - 1; i >= 0; i--) {
				this.element.removeAttribute( attrs[i].nodeName );
			}
        		this.element.save( this.nodeName );
		}
	},
	
	// most other browsers
	'windowName': {
		ident: "$.store.drivers.windowName",
		scope: 'window',
		cache: {},
		encodes: true,
		available: function()
		{
			return true;
		},
		init: function()
		{
			this.load();
		},
		save: function()
		{
			window.name = $.store.serializers.json.encode( this.cache );
		},
		load: function()
		{
			try
			{
				this.cache = $.store.serializers.json.decode( window.name + "" );
				if( typeof this.cache != "object" )
					this.cache = {};
			}
			catch(e)
			{
				this.cache = {};
				window.name = "{}";
			}
		},
		get: function( key )
		{
			return this.cache[ key ];
		},
		set: function( key, value )
		{
			this.cache[ key ] = value;
			this.save();
		},
		del: function( key )
		{
			try
			{
				delete this.cache[ key ];
			}
			catch(e)
			{
				this.cache[ key ] = undefined;
			}
			
			this.save();
		},
		flush: function()
		{
			window.name = "{}";
		}
	}
};

/**********************************************************************************
 * $.store serializers
 **********************************************************************************/

$.store.serializers = {
	
	'json': {
		ident: "$.store.serializers.json",
		init: function( encoders, decoders )
		{
			encoders.push( "json" );
			decoders.push( "json" );
		},
		encode: JSON.stringify,
		decode: JSON.parse
	},
	
	// TODO: html serializer
	// 'html' : {},
	
	'xml': {
		ident: "$.store.serializers.xml",
		init: function( encoders, decoders )
		{
			encoders.unshift( "xml" );
			decoders.push( "xml" );
		},
		
		// wouldn't be necessary if jQuery exposed this function
		isXML: function( value )
		{
			var documentElement = ( value ? value.ownerDocument || value : 0 ).documentElement;
			return documentElement ? documentElement.nodeName.toLowerCase() !== "html" : false;
		},

		// encodes a XML node to string (taken from $.jStorage, MIT License)
		encode: function( value )
		{
			if( !value || value._serialized || !this.isXML( value ) )
				return value;

			var _value = { _serialized: this.ident, value: value };
			
			try
			{
				// Mozilla, Webkit, Opera
				_value.value = new XMLSerializer().serializeToString( value );
				return _value;
			}
			catch(E1)
			{
				try
				{
					// Internet Explorer
					_value.value = value.xml;
					return _value;
				}
				catch(E2){}
			}
			
			return value;
		},
		
		// decodes a XML node from string (taken from $.jStorage, MIT License)
		decode: function( value )
		{
			if( !value || !value._serialized || value._serialized != this.ident )
				return value;

			var dom_parser = ( "DOMParser" in window && (new DOMParser()).parseFromString );
			if( !dom_parser && window.ActiveXObject )
			{
				dom_parser = function( _xmlString )
				{
					var xml_doc = new ActiveXObject( 'Microsoft.XMLDOM' );
					xml_doc.async = 'false';
					xml_doc.loadXML( _xmlString );
					return xml_doc;
				}
			}

			if( !dom_parser )
			{
				return undefined;
			}
			
			value.value = dom_parser.call(
				"DOMParser" in window && (new DOMParser()) || window, 
				value.value, 
				'text/xml'
			);
			
			return this.isXML( value.value ) ? value.value : undefined;
		}
	}
};

})(jQuery);
/*!
 * jQuery postMessage - v0.5 - 9/11/2009
 * http://benalman.com/projects/jquery-postmessage-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery postMessage: Cross-domain scripting goodness
//
// *Version: 0.5, Last updated: 9/11/2009*
// 
// Project Home - http://benalman.com/projects/jquery-postmessage-plugin/
// GitHub       - http://github.com/cowboy/jquery-postmessage/
// Source       - http://github.com/cowboy/jquery-postmessage/raw/master/jquery.ba-postmessage.js
// (Minified)   - http://github.com/cowboy/jquery-postmessage/raw/master/jquery.ba-postmessage.min.js (0.9kb)
// 
// About: License
// 
// Copyright (c) 2009 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// This working example, complete with fully commented code, illustrates one
// way in which this plugin can be used.
// 
// Iframe resizing - http://benalman.com/code/projects/jquery-postmessage/examples/iframe/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with and what browsers it has been tested in.
// 
// jQuery Versions - 1.3.2
// Browsers Tested - Internet Explorer 6-8, Firefox 3, Safari 3-4, Chrome, Opera 9.
// 
// About: Release History
// 
// 0.5 - (9/11/2009) Improved cache-busting
// 0.4 - (8/25/2009) Initial release

(function($){
  '$:nomunge'; // Used by YUI compressor.
  
  // A few vars used in non-awesome browsers.
  var interval_id,
    last_hash,
    cache_bust = 1,
    
    // A var used in awesome browsers.
    rm_callback,
    
    // A few convenient shortcuts.
    window = this,
    FALSE = false,
    
    // Reused internal strings.
    postMessage = 'postMessage',
    addEventListener = 'addEventListener',
    
    p_receiveMessage,
    
    // I couldn't get window.postMessage to actually work in Opera 9.64!
    has_postMessage = window[postMessage];
  
  // Method: jQuery.postMessage
  // 
  // This method will call window.postMessage if available, setting the
  // targetOrigin parameter to the base of the target_url parameter for maximum
  // security in browsers that support it. If window.postMessage is not available,
  // the target window's location.hash will be used to pass the message. If an
  // object is passed as the message param, it will be serialized into a string
  // using the jQuery.param method.
  // 
  // Usage:
  // 
  // > jQuery.postMessage( message, target_url [, target ] );
  // 
  // Arguments:
  // 
  //  message - (String) A message to be passed to the other frame.
  //  message - (Object) An object to be serialized into a params string, using
  //    the jQuery.param method.
  //  target_url - (String) The URL of the other frame this window is
  //    attempting to communicate with. This must be the exact URL (including
  //    any query string) of the other window for this script to work in
  //    browsers that don't support window.postMessage.
  //  target - (Object) A reference to the other frame this window is
  //    attempting to communicate with. If omitted, defaults to `parent`.
  // 
  // Returns:
  // 
  //  Nothing.
  
  $[postMessage] = function( message, target_url, target ) {
    if ( !target_url ) { return; }
    
    // Serialize the message if not a string. Note that this is the only real
    // jQuery dependency for this script. If removed, this script could be
    // written as very basic JavaScript.
    message = typeof message === 'string' ? message : $.param( message );
    
    // Default to parent if unspecified.
    target = target || parent;
    
    if ( has_postMessage ) {
      // The browser supports window.postMessage, so call it with a targetOrigin
      // set appropriately, based on the target_url parameter.
      target[postMessage]( message, target_url.replace( /([^:]+:\/\/[^\/]+).*/, '$1' ) );
      
    } else if ( target_url ) {
      // The browser does not support window.postMessage, so set the location
      // of the target to target_url#message. A bit ugly, but it works! A cache
      // bust parameter is added to ensure that repeat messages trigger the
      // callback.
      target.location = target_url.replace( /#.*$/, '' ) + '#' + (+new Date) + (cache_bust++) + '&' + message;
    }
  };
  
  // Method: jQuery.receiveMessage
  // 
  // Register a single callback for either a window.postMessage call, if
  // supported, or if unsupported, for any change in the current window
  // location.hash. If window.postMessage is supported and source_origin is
  // specified, the source window will be checked against this for maximum
  // security. If window.postMessage is unsupported, a polling loop will be
  // started to watch for changes to the location.hash.
  // 
  // Note that for simplicity's sake, only a single callback can be registered
  // at one time. Passing no params will unbind this event (or stop the polling
  // loop), and calling this method a second time with another callback will
  // unbind the event (or stop the polling loop) first, before binding the new
  // callback.
  // 
  // Also note that if window.postMessage is available, the optional
  // source_origin param will be used to test the event.origin property. From
  // the MDC window.postMessage docs: This string is the concatenation of the
  // protocol and "://", the host name if one exists, and ":" followed by a port
  // number if a port is present and differs from the default port for the given
  // protocol. Examples of typical origins are https://example.org (implying
  // port 443), http://example.net (implying port 80), and http://example.com:8080.
  // 
  // Usage:
  // 
  // > jQuery.receiveMessage( callback [, source_origin ] [, delay ] );
  // 
  // Arguments:
  // 
  //  callback - (Function) This callback will execute whenever a <jQuery.postMessage>
  //    message is received, provided the source_origin matches. If callback is
  //    omitted, any existing receiveMessage event bind or polling loop will be
  //    canceled.
  //  source_origin - (String) If window.postMessage is available and this value
  //    is not equal to the event.origin property, the callback will not be
  //    called.
  //  source_origin - (Function) If window.postMessage is available and this
  //    function returns false when passed the event.origin property, the
  //    callback will not be called.
  //  delay - (Number) An optional zero-or-greater delay in milliseconds at
  //    which the polling loop will execute (for browser that don't support
  //    window.postMessage). If omitted, defaults to 100.
  // 
  // Returns:
  // 
  //  Nothing!
  
  $.receiveMessage = p_receiveMessage = function( callback, source_origin, delay ) {
    if ( has_postMessage ) {
      // Since the browser supports window.postMessage, the callback will be
      // bound to the actual event associated with window.postMessage.
      
      if ( callback ) {
        // Unbind an existing callback if it exists.
        rm_callback && p_receiveMessage();
        
        // Bind the callback. A reference to the callback is stored for ease of
        // unbinding.
        rm_callback = function(e) {
          if ( ( typeof source_origin === 'string' && e.origin !== source_origin )
            || ( $.isFunction( source_origin ) && source_origin( e.origin ) === FALSE ) ) {
            return FALSE;
          }
          callback( e );
        };
      }
      
      if ( window[addEventListener] ) {
        window[ callback ? addEventListener : 'removeEventListener' ]( 'message', rm_callback, FALSE );
      } else {
        window[ callback ? 'attachEvent' : 'detachEvent' ]( 'onmessage', rm_callback );
      }
      
    } else {
      // Since the browser sucks, a polling loop will be started, and the
      // callback will be called whenever the location.hash changes.
      
      interval_id && clearInterval( interval_id );
      interval_id = null;
      
      if ( callback ) {
        delay = typeof source_origin === 'number'
          ? source_origin
          : typeof delay === 'number'
            ? delay
            : 100;
        
        interval_id = setInterval(function(){
          var hash = document.location.hash,
            re = /^#?\d+&/;
          if ( hash !== last_hash && re.test( hash ) ) {
            last_hash = hash;
            callback({ data: hash.replace( re, '' ) });
          }
        }, delay );
      }
    }
  };
  
})(jQuery);

(function(c,q){var m="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(f){function n(){var b=c(j),a=c(h);d&&(h.length?d.reject(e,b,a):d.resolve(e));c.isFunction(f)&&f.call(g,e,b,a)}function p(b){k(b.target,"error"===b.type)}function k(b,a){b.src===m||-1!==c.inArray(b,l)||(l.push(b),a?h.push(b):j.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),r&&d.notifyWith(c(b),[a,e,c(j),c(h)]),e.length===l.length&&(setTimeout(n),e.unbind(".imagesLoaded",
p)))}var g=this,d=c.isFunction(c.Deferred)?c.Deferred():0,r=c.isFunction(d.notify),e=g.find("img").add(g.filter("img")),l=[],j=[],h=[];c.isPlainObject(f)&&c.each(f,function(b,a){if("callback"===b)f=a;else if(d)d[b](a)});e.length?e.bind("load.imagesLoaded error.imagesLoaded",p).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)k(a,e.isBroken);else if(a.complete&&a.naturalWidth!==q)k(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=m,a.src=d}):
n();return d?d.promise(g):g}})(jQuery);
/*
 jquery.fullscreen 1.1.5
 https://github.com/kayahr/jquery-fullscreen-plugin
 Copyright (C) 2012-2013 Klaus Reimer <k@ailis.de>
 Licensed under the MIT license
 (See http://www.opensource.org/licenses/mit-license)
*/

function d(c){var b,a;if(!this.length)return this;b=this[0];b.ownerDocument?a=b.ownerDocument:(a=b,b=a.documentElement);if(null==c){if(!a.exitFullscreen&&!a.webkitExitFullscreen&&!a.webkitCancelFullScreen&&!a.msExitFullscreen&&!a.mozCancelFullScreen)return null;c=!!a.fullscreenElement||!!a.msFullscreenElement||!!a.webkitIsFullScreen||!!a.mozFullScreen;return!c?c:a.fullscreenElement||a.webkitFullscreenElement||a.webkitCurrentFullScreenElement||a.msFullscreenElement||a.mozFullScreenElement||c}c?(c=
b.requestFullscreen||b.webkitRequestFullscreen||b.webkitRequestFullScreen||b.msRequestFullscreen||b.mozRequestFullScreen)&&c.call(b):(c=a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.msExitFullscreen||a.mozCancelFullScreen)&&c.call(a);return this}jQuery.fn.fullScreen=d;jQuery.fn.toggleFullScreen=function(){return d.call(this,!d.call(this))};var e,f,g;e=document;
e.webkitCancelFullScreen?(f="webkitfullscreenchange",g="webkitfullscreenerror"):e.msExitFullscreen?(f="MSFullscreenChange",g="MSFullscreenError"):e.mozCancelFullScreen?(f="mozfullscreenchange",g="mozfullscreenerror"):(f="fullscreenchange",g="fullscreenerror");jQuery(document).bind(f,function(){jQuery(document).trigger(new jQuery.Event("fullscreenchange"))});jQuery(document).bind(g,function(){jQuery(document).trigger(new jQuery.Event("fullscreenerror"))});
/*
 *  getQueryParameters.js
 *  Copyright (c) 2014 Nicholas Ortenzio
 *  The MIT License (MIT)
 *
 */


window.getQueryParameters = function(str) {
  return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n=n.split("="),this[n[0]]=n[1],this;}.bind({}))[0];
};

/*
  Main file with namespace and imports
 */

(function() {
  if (window.chms == null) {
    window.chms = {};
  }

  if (window.chms.utils === void 0) {
    window.chms.utils = {};
  }

}).call(this);

/*
  Initialize class on a dom elements.

  Search for a dom element with Class.ATTR_NAME attribute and pass it to
  the class constructor.

  Class must contains a static variable ATTR_NAME in order this to work.

  If class contains static variable ATTR_VALUE it would be used in a
  search selector.

  Also dom node must have a chms.utils.Autoinit.ATTR_NAME attribute
  This attribute indicated that dom element can be autoinited

  @example How to use autoinit
    chms.utils.Autoinit.init(someNs.MyClass);
    chms.utils.Autoinit.init(someNs.MyClass, $(".someElement"));
 */

(function() {
  chms.utils.Autoinit = (function() {
    function Autoinit() {}

    Autoinit.ATTR_NAME = "auto-init";

    Autoinit.init = function(cl, container, initFn) {
      var inited, selector;
      if (!cl.ATTR_NAME) {
        throw "chms.utils.Autoinit: ATTR_NAME in class missing!";
      }
      if (container == null) {
        container = $("body");
      }
      if (cl.ATTR_VALUE != null) {
        selector = "[" + cl.ATTR_NAME + "='" + cl.ATTR_VALUE + "'][" + chms.utils.Autoinit.ATTR_NAME + "]";
      } else {
        selector = "[" + cl.ATTR_NAME + "][" + chms.utils.Autoinit.ATTR_NAME + "]";
      }
      inited = [];
      $(selector, container).each(function() {
        var inst;
        if (initFn != null) {
          inst = initFn($(this), cl);
        } else {
          inst = new cl($(this));
        }
        return inited.push(inst);
      });
      return inited;
    };

    Autoinit.initAfterDom = function(cl, container, initFn) {
      return $(function() {
        return chms.utils.Autoinit.init(cl, container);
      });
    };

    return Autoinit;

  })();

}).call(this);

/*
  Queue
 */

(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  chms.utils.Queue = (function() {
    function Queue() {
      this.clear = bind(this.clear, this);
      this.overwrite = bind(this.overwrite, this);
      this.shiftAndExecute = bind(this.shiftAndExecute, this);
      this.popAndExecute = bind(this.popAndExecute, this);
      this.executeAll = bind(this.executeAll, this);
      this.add = bind(this.add, this);
      this.clear();
    }

    Queue.prototype.add = function(task) {
      return this._queue.push(task);
    };

    Queue.prototype.executeAll = function() {
      var i, len, ref, task;
      ref = this._queue;
      for (i = 0, len = ref.length; i < len; i++) {
        task = ref[i];
        task();
      }
      return this.clear();
    };

    Queue.prototype.popAndExecute = function() {
      var task;
      task = this._queue.pop();
      if (task != null) {
        return task();
      }
    };

    Queue.prototype.shiftAndExecute = function() {
      var task;
      task = this._queue.shift();
      if (task != null) {
        return task();
      }
    };

    Queue.prototype.overwrite = function(queue) {
      return this._queue = queue;
    };

    Queue.prototype.clear = function() {
      return this._queue = [];
    };

    return Queue;

  })();

}).call(this);

/*
  Queue where tasks executed in a time interval
 */

(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  chms.utils.IntervalQueue = (function(superClass) {
    extend(IntervalQueue, superClass);

    IntervalQueue.prototype.DEFAULT_INTERVAL_TIME = 1000;

    function IntervalQueue() {
      this.stop = bind(this.stop, this);
      this.start = bind(this.start, this);
      this.getInterval = bind(this.getInterval, this);
      this.setInterval = bind(this.setInterval, this);
      IntervalQueue.__super__.constructor.apply(this, arguments);
      this.setInterval(this.DEFAULT_INTERVAL_TIME);
    }

    IntervalQueue.prototype.setInterval = function(time) {
      return this.intervalTime = time;
    };

    IntervalQueue.prototype.getInterval = function() {
      return this.intervalTime;
    };

    IntervalQueue.prototype.start = function() {
      return this.executioner = setInterval(this.shiftAndExecute, this.getInterval());
    };

    IntervalQueue.prototype.stop = function() {
      return clearInterval(this.executioner);
    };

    return IntervalQueue;

  })(chms.utils.Queue);

}).call(this);

/*
  It is just a flag what you can lock and unlock.

  For example: you can use it on animation to block UI
  so user can't do anything to break it.

  Also you can pass a element to constructor and locker
  will change chms.utils.Locker.ATTR arttribute on it
  to true of false, depend on lock state.

  @example Usage
    // use a lock method to set lock:
    locker.lock();

    // use a unlock method to unlock it:
    locker.unlock();

    // use a safeExec function to exec givan fucntion only if locker is unlocked:
    locker.safeExec(function(){ console.log("i'm unlocked") });

    // use a isLocked method to check locker locked or unlocked
    locker.isLocked();

    // locker also spawns a chms.utils.Locker.EVENT_LOCK_CHANGED on itself
    // so you can bind and listen it
    $(locker).bind(chms.utils.Locker.EVENT_LOCK_CHANGED, function(){console.log("lock changed");});

  @example Example of use
    var locker = new chms.utils.Locker()

    function setVal(val){
      locker.safeExec(function(){window.val = val});
    }

    function getVal(){return window.val;}

    setVal(0);
    console.log("val is: ", getVal());
    // val is 0

    locker.lock();
    setVal(1);
    console.log("val is: ", getVal());
    // val is 0

    locker.unlock();
    setVal(1);
    console.log("val is: ", getVal());
    // val is 1
 */

(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  chms.utils.Locker = (function() {
    Locker.EVENT_LOCK_CHANGED = "chms.utils.Locker:ChangeLock";

    Locker.ATTR = "lock";

    function Locker(el) {
      this.executeAfterUnlock = bind(this.executeAfterUnlock, this);
      this.safeExec = bind(this.safeExec, this);
      this.isLocked = bind(this.isLocked, this);
      this.updateLock = bind(this.updateLock, this);
      this.unlock = bind(this.unlock, this);
      this.lock = bind(this.lock, this);
      this.ATTR = chms.utils.Locker.ATTR;
      this.s = this.constructor;
      if (el != null) {
        this.el = el;
      }
      this.queue = [];
      this.updateLock(false);
    }

    Locker.prototype.lock = function() {
      return this.updateLock(true);
    };

    Locker.prototype.unlock = function() {
      var fn, i, len, ref;
      this.updateLock(false);
      ref = this.queue;
      for (i = 0, len = ref.length; i < len; i++) {
        fn = ref[i];
        fn();
      }
      return this.queue = [];
    };

    Locker.prototype.updateLock = function(value) {
      var spawner;
      this.locked = value;
      spawner = $(this);
      if (this.el != null) {
        this.el.attr(this.ATTR, value);
        spawner.add(this.el);
      }
      spawner.trigger({
        type: chms.utils.Locker.EVENT_LOCK_CHANGED,
        lock: this.locked
      });
      return this.locked;
    };

    Locker.prototype.isLocked = function() {
      return this.locked;
    };

    Locker.prototype.safeExec = function(fn) {
      if (!this.isLocked()) {
        fn();
        return true;
      } else {
        return false;
      }
    };

    Locker.prototype.executeAfterUnlock = function(fn) {
      if (this.isLocked()) {
        this.queue.push(fn);
        return false;
      } else {
        fn();
        return true;
      }
    };

    return Locker;

  })();

}).call(this);

/*
  Mixins for javascript
 */

(function() {
  chms.utils.Mixin = (function() {
    function Mixin(to) {
      if (to != null) {
        chms.utils.Mixin.mix(to, this);
      }
    }

    Mixin.mix = function(cl, mixin) {
      var name, value;
      for (name in mixin) {
        value = mixin[name];
        if (name !== "constructor") {
          switch (typeof value) {
            case "function":
              cl[name] = value.bind(cl);
              break;
            default:
              cl[name] = value;
          }
        }
      }
      return void 0;
    };

    return Mixin;

  })();

}).call(this);

/*
  Дата сторедж с глобальной точкой доступа
 */

(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  chms.utils.Singletonizer = (function() {
    function Singletonizer() {
      this.touch = bind(this.touch, this);
      this.get = bind(this.get, this);
      this.add = bind(this.add, this);
      if (!chms.utils.Singletonizer.__instance) {
        chms.utils.Singletonizer.__instance = this;
        this._data = {};
      } else {
        return chms.utils.Singletonizer.__instance;
      }
    }

    Singletonizer.prototype.add = function(key, value) {
      return this._data[key] = value;
    };

    Singletonizer.prototype.get = function(key) {
      return this._data[key];
    };

    Singletonizer.prototype.touch = function(key, value) {
      if (this._data[key] == null) {
        this._data[key] = value;
      }
      return this.get(key);
    };

    return Singletonizer;

  })();

}).call(this);

/*
  Generates a uniq number.
 */

(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  chms.utils.Uniq = (function() {
    function Uniq() {
      this.gen = bind(this.gen, this);
      if (chms.utils.Uniq.__instance == null) {
        chms.utils.Uniq.__instance = this;
        this.flows = {
          "default": 0
        };
      } else {
        return chms.utils.Uniq.__instance;
      }
    }

    Uniq.prototype.gen = function(flow) {
      if (flow == null) {
        flow = "default";
      }
      if (this.flows[flow] == null) {
        this.flows[flow] = 0;
      }
      this.flows[flow]++;
      return this.flows[flow];
    };

    return Uniq;

  })();

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice;

  utils.ObservableMixin = (function(superClass) {
    extend(ObservableMixin, superClass);

    function ObservableMixin() {
      return ObservableMixin.__super__.constructor.apply(this, arguments);
    }

    ObservableMixin.prototype.on = function(event, fn) {
      $(this).on(event, (function(_this) {
        return function() {
          var args, e;
          e = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
          return fn.apply(_this, args);
        };
      })(this));
      return this;
    };

    ObservableMixin.prototype.one = function(event, fn) {
      $(this).one(event, (function(_this) {
        return function() {
          var args, e;
          e = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
          return fn.apply(_this, args);
        };
      })(this));
      return this;
    };

    ObservableMixin.prototype.off = function(event, fn) {
      $(this).off(event, fn);
      return this;
    };

    ObservableMixin.prototype.trigger = function() {
      var args, event;
      event = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      $(this).trigger(event, args);
      return this;
    };

    ObservableMixin.prototype.single = function(event, fn, once) {
      this.off(event);
      if (once) {
        this.one(event, fn);
      } else {
        this.on(event, fn);
      }
      return this;
    };

    return ObservableMixin;

  })(chms.utils.Mixin);

}).call(this);

/*
  Функции для определения текущего положения и тд
 */

(function() {
  helpers.Location = {
    isVkontakteWebEmbed: function() {
      var refParam;
      refParam = GlobalState.PAGE.getUrlParam('referrer') || '';
      return GlobalState.PAGE.isEmbed() && !this.isVkontakteApp() && (refParam.indexOf('vk.com') !== -1 || document.referrer.indexOf('vk.com/') !== -1);
    },
    isVkontakteApp: function() {
      var rc;
      rc = window.request_client || '';
      return this._isVkApp || (this._isVkApp = rc.indexOf('com.vkontakte.') !== -1 || rc.indexOf('com.vk.') !== -1 || GlobalState.PLATFORM.isVkIosApp() || GlobalState.PLATFORM.isVkAndroidApp());
    },
    isVkontakteEmbed: function() {
      return this.isVkontakteApp() || this.isVkontakteWebEmbed();
    },
    isRedditEmbed: function() {
      return decodeURIComponent(window.location.search).indexOf("redditmedia.com") !== -1;
    },
    isTwitterEmbed: function() {
      return navigator.userAgent.toLowerCase().indexOf('twitter') !== -1;
    },
    isForcedNoAutoplay: function() {
      return document.referrer && document.referrer.indexOf('marakon.ru') !== -1;
    },
    isFullScreen: function() {
      return !!$(document).fullScreen();
    },
    isIfunnyEmbed: function() {
      return decodeURIComponent(window.location.search).indexOf("ifunny.co") !== -1;
    },
    isAdsDisabled: function() {
      var blackList, i, item, len, referrer;
      referrer = GlobalState.PAGE.getReferrer();
      if (!referrer) {
        return false;
      }
      if (GlobalState.PAGE.forceRoxotAds() || GlobalState.PAGE.forceLocalAdfoxAds()) {
        return false;
      }
      blackList = ['the-village.ru', 'meduza.io', 'vc.ru', 'lenta.ru', 'cosmo.ru', 'wonderzine.com', 'tjournal.ru', '2x2tv.ru', 'kanobu.ru', 'warthunder.com', 'worldoftanks.ru', 'warthunder.ru', 'store.gaijin.net', 'wargag.ru', 'echo.msk.ru', 'worldofwarships.ru', 'afisha.ru', 'coub.com', 'coub.local', 'staging.coub.com', 'halfand.co', 'crossout.net', 'crossout.ru'];
      for (i = 0, len = blackList.length; i < len; i++) {
        item = blackList[i];
        if (referrer.indexOf(item) !== -1) {
          return true;
        }
      }
      return false;
    }
  };

}).call(this);
(function() {
  helpers.Ads = {
    trackStatsPixel: function(src) {
      src += (src.indexOf('?') === -1 && '?' || '&') + "_=" + (Math.random());
      return $("<img src='" + src + "' style='position:absolute;left:-10000px;top:-1000px;' />").appendTo('body').load(function() {
        return $(this).remove();
      });
    },
    getUniqId: function() {
      var t, uid;
      uid = $.cookie('coub_uid');
      if (!uid) {
        t = new Date().getTime();
        uid = t.toString() + _.random(999999999) + _.random(999999999);
        $.cookie('coub_uid', uid, {
          expires: 365 * 5,
          path: '/'
        });
      }
      return uid;
    }
  };

}).call(this);
(function() {
  window.GlobalState = {
    __cache: {},
    __cacheIt: function(fn, key) {
      if (GlobalState.__cache[key] == null) {
        GlobalState.__cache[key] = fn();
      }
      return GlobalState.__cache[key];
    },
    USER: {
      isLogedIn: function() {
        return $.cookie('is_logged_in') === 'true';
      },
      notVerified: function() {
        return $("body").hasClass("notVerified");
      },
      isAdmin: function() {
        return window.is_admin;
      },
      isEditor: function() {
        return window.is_editor;
      },
      followingCount: function() {
        return window.following_count;
      },
      getCurrentUserId: function() {
        return window.gon.current_user.id;
      },
      isOwnerOf: function(channelId) {
        if (!GlobalState.USER.isLogedIn()) {
          return false;
        }
        return _.some(Params.getBranchValue('current_user.channels'), function(c) {
          return c.id === channelId;
        });
      },
      allowAppleAuth: function() {
        return GlobalState.__cacheIt((function() {
          return GlobalState.USER.isAdmin() || location.href.indexOf("apple-auth=1") !== -1 || window.env === "staging";
        }), "ui.allowAppleAuth");
      }
    },
    BROWSER: {
      isChrome: function() {
        return $("html").hasClass("chrome");
      },
      isChromeNative: function() {
        return window.chrome && !GlobalState.BROWSER.isOperaNative();
      },
      isSafari: function() {
        return $("html").hasClass("safari");
      },
      isOpera: function() {
        return $("html").hasClass("opera");
      },
      isOperaNative: function() {
        return window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
      },
      isOpera12: function() {
        return $("html").hasClass("opera12");
      },
      isIE: function() {
        return navigator.userAgent.indexOf('MSIE ') > -1 || navigator.userAgent.indexOf('Trident/') > -1;
      },
      isEdge: function() {
        return navigator.userAgent.indexOf("Edge") > -1;
      },
      isFirefox: function() {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
      },
      isYandex: function() {
        return navigator.userAgent.indexOf('YaBrowser/') > -1;
      },
      hasAdblock: function() {
        return GlobalState.COUNTRY.isExUssr() && !window.Ya;
      },
      hasFlash: function() {
        return GlobalState.__cacheIt(function() {
          if (window.swfobject && window.chrome) {
            swfobject.ua.pv = [11, 4, 0];
            return true;
          } else {
            return (typeof swfobject !== "undefined" && swfobject !== null) && swfobject.hasFlashPlayerVersion("11.4");
          }
        });
      }
    },
    PAGE: {
      isUserTimeline: function() {
        return GlobalState.__cacheIt(((function(_this) {
          return function() {
            return $("body").hasClass('startpage');
          };
        })(this)), "page.isUserTimeline");
      },
      isNotCoubPage: function() {
        return GlobalState.__cacheIt(((function(_this) {
          return function() {
            return $('.coub-page').length === 0;
          };
        })(this)), "page.isNotCoubPage");
      },
      isCoubPage: function() {
        return !GlobalState.PAGE.isNotCoubPage();
      },
      isProfile: function() {
        return GlobalState.__cacheIt(((function(_this) {
          return function() {
            return $("body").hasClass('profile-page');
          };
        })(this)), "page.isProfile");
      },
      isPromoProfile: function() {
        return GlobalState.__cacheIt(((function(_this) {
          return function() {
            return $("body").hasClass('promo-profile-page');
          };
        })(this)), "page.isPromoProfile");
      },
      isPromoCover: function() {
        return GlobalState.__cacheIt(((function(_this) {
          return function() {
            return $("body").hasClass('promo-cover');
          };
        })(this)), "page.isPromoCover");
      },
      isTimeline: function() {
        return GlobalState.__cacheIt(((function(_this) {
          return function() {
            return $(".coubs-list").size() > 0;
          };
        })(this)), "page.isTimeline");
      },
      isHotPage: function() {
        return GlobalState.__cacheIt(((function(_this) {
          return function() {
            return $("body").hasClass('hot-page');
          };
        })(this)), "page.isHotPage");
      },
      isFeaturedPage: function() {
        return GlobalState.__cacheIt(((function(_this) {
          return function() {
            return $("body").hasClass('featured-page');
          };
        })(this)), "page.isFeaturedPage");
      },
      isFeaturedIndexPage: function() {
        return GlobalState.__cacheIt(((function(_this) {
          return function() {
            return $("body").hasClass('featured-index-page');
          };
        })(this)), "page.isFeaturedIndexPage");
      },
      isFeaturedCoubsPage: function() {
        return GlobalState.__cacheIt(((function(_this) {
          return function() {
            return $("body").hasClass('featured-coubs-page');
          };
        })(this)), "page.isFeaturedCoubsPage");
      },
      isFeaturedStoriesPage: function() {
        return GlobalState.__cacheIt(((function(_this) {
          return function() {
            return $("body").hasClass('featured-stories-page');
          };
        })(this)), "page.isFeaturedStoriesPage");
      },
      isWeekly: function() {
        return GlobalState.__cacheIt(((function(_this) {
          return function() {
            return $("body").hasClass('weekly-page');
          };
        })(this)), "page.isWeekly");
      },
      isTagPage: function() {
        return GlobalState.__cacheIt((function() {
          return $("body").hasClass('tag-page');
        }), "page.isTagPage");
      },
      isSearchPage: function() {
        return GlobalState.__cacheIt((function() {
          return $("body").hasClass('search-page');
        }), "page.isSearchPage");
      },
      isBestCoubs2014: function() {
        return GlobalState.__cacheIt((function() {
          return $("body").hasClass('best-2014');
        }), "page.isBestCoubs2014");
      },
      isBestCoubs2015: function() {
        return GlobalState.__cacheIt((function() {
          return $("body").hasClass('best-2015');
        }), "page.isBestCoubs2015");
      },
      isBestCoubs2016: function() {
        return GlobalState.__cacheIt((function() {
          return $("body").hasClass('best-2016-page');
        }), "page.isBestCoubs2016");
      },
      isBestCoubs2017: function() {
        return GlobalState.__cacheIt((function() {
          return $("body").hasClass('best-2017');
        }), "page.isBestCoubs2017");
      },
      isOldSpicePromo2016: function() {
        return GlobalState.__cacheIt((function() {
          return $("body").hasClass('best-2016-oldspice');
        }), "page.isOldSpicePromo2016");
      },
      isBestCoubs2018: function() {
        return GlobalState.__cacheIt((function() {
          return $("body").hasClass('best2018');
        }), "page.isBestCoubs2018");
      },
      isBestCoubs2019: function() {
        return GlobalState.__cacheIt((function() {
          return $("body").hasClass('best2019');
        }), "page.isBestCoubs2019");
      },
      isBestCoubs2021: function() {
        return GlobalState.__cacheIt((function() {
          return $("body").hasClass('best2021');
        }), "page.isBestCoubs2021");
      },
      isLikesPage: function() {
        return GlobalState.__cacheIt((function() {
          return $("body").hasClass('my-likes');
        }), "page.isLikesPage");
      },
      isFavouritesPage: function() {
        return GlobalState.__cacheIt((function() {
          return $("body").hasClass('my-favourites');
        }), "page.isFavouritesPage");
      },
      isEmbed: function() {
        return GlobalState.__cacheIt((function() {
          return $("body").hasClass('coub-embed');
        }), "page.isEmbed");
      },
      isStoryPage: function() {
        return GlobalState.__cacheIt((function() {
          return $("body").hasClass('story-page');
        }), "page.isStoryPage");
      },
      isChatPage: function() {
        return GlobalState.__cacheIt((function() {
          return $("body").hasClass('chat-page');
        }), "page.isChatPage");
      },
      isMegafonTestPage: function() {
        return GlobalState.__cacheIt((function() {
          return location.pathname === "/test_page/megafon_shazam";
        }), "page.isMegafonTestPage");
      },
      getUrlParam: function(q) {
        var re, s, val;
        s = window.location.search;
        s = s.replace(/\+/g, ' ');
        re = new RegExp("(\\?|&){1}" + q + "=([^&#]*)", 'i');
        val = re.exec(s);
        val = val ? decodeURIComponent(val[2]) : null;
        return val;
      },
      isHttps: function() {
        return GlobalState.__cacheIt((function() {
          return window.location.protocol === "https:";
        }), "page.isHttps");
      },
      getReferrer: function() {
        return GlobalState.PAGE.getUrlParam('referrer') || document.referrer || '';
      },
      forceRoxotAds: function() {
        return GlobalState.__cacheIt((function() {
          return location.href.indexOf("roxot_test=1") !== -1;
        }), "page.forceRoxotAds");
      },
      forceLocalAdfoxAds: function() {
        return GlobalState.__cacheIt((function() {
          return location.href.indexOf("local_adfox_test=1") !== -1;
        }), "page.forceLocalAdfoxAds");
      },
      forceRedefineAds: function() {
        return GlobalState.__cacheIt((function() {
          return true || location.href.indexOf("redefine_test=1") !== -1;
        }), "page.forceRedefineAds");
      }
    },
    UI: {
      hasStaticHeader: function() {
        return $('header.header').hasClass('-static');
      },
      hasTransHeader: function() {
        return $('header.header').hasClass('-transparent');
      },
      hasSolidHeader: function() {
        return $('body').hasClass('solid-header');
      }
    },
    COUNTRY: {
      isRussia: function() {
        return (typeof Params !== "undefined" && Params !== null ? Params.get('country_ip') === 'Russian Federation' : ['RU'].indexOf(window.geo_country) !== -1) || window.env === 'development';
      },
      isExUssr: function() {
        return (typeof Params !== "undefined" && Params !== null ? Params.get('ussr_ip') : ['RU', 'UA', 'KZ', 'BY'].indexOf(window.geo_country) !== -1) || window.env === 'development';
      },
      isUS: function() {
        if (typeof Params !== "undefined" && Params !== null) {
          return Params.get('country_ip') === 'United States';
        } else {
          return ['US'].indexOf(window.geo_country) !== -1;
        }
      }
    },
    TIMELINE: {
      type: function() {
        var path, pathParts;
        path = window.location.pathname || '';
        if (path === '/') {
          return 'mainpage';
        } else if (path === '/feed') {
          return 'timeline';
        } else if (GlobalState.PAGE.isHotPage()) {
          pathParts = path.split('/');
          if (path === '/random' || (pathParts[1] === 'community' && pathParts[3] === 'random')) {
            return 'random';
          } else if (path === '/fresh' || (pathParts[1] === 'community' && pathParts[3] === 'fresh')) {
            return 'newest';
          } else if (path === '/rising' || (pathParts[1] === 'community' && pathParts[3] === 'rising')) {
            return 'rising';
          } else {
            return 'hot';
          }
        } else if (GlobalState.PAGE.isFeaturedPage()) {
          return 'explore';
        } else if (path.indexOf('/search') === 0) {
          return 'search';
        } else if (path.indexOf('/weekly') === 0) {
          return 'weekly';
        } else if (GlobalState.PAGE.isProfile()) {
          return 'profile';
        } else if (path.indexOf('/best/2014/hidden-gems') === 0) {
          return 'best2014_gems';
        } else if (path.indexOf('/best/2014/popular-tags') === 0) {
          return 'best2014_tags';
        } else if (path.indexOf('/best/2014') === 0) {
          return 'best2014_likes';
        } else if (path.indexOf('/best/2015/hidden-gems') === 0) {
          return 'best2015_gems';
        } else if (path.indexOf('/best/2015/memes') === 0) {
          return 'best2015_memes';
        } else if (path.indexOf('/best/2015/mybest') === 0) {
          return 'best2015_mybest';
        } else if (path.indexOf('/best/2015') === 0) {
          return 'best2015_likes';
        } else if (path.indexOf('/best/2016/memes') === 0) {
          return 'best2016_memes';
        } else if (path.indexOf('/best/2016/oldspice') === 0) {
          return 'best2016_oldspice';
        } else {
          return 'unknown';
        }
      }
    },
    PLATFORM: {
      isMobile: function() {
        return GlobalState.__cacheIt((function() {
          return $("html").hasClass("mobile");
        }), "platform.isMobile");
      },
      isAndroid: function() {
        return GlobalState.__cacheIt((function() {
          return $("html").hasClass("android");
        }), "platform.isAndroid");
      },
      isAndroidNative: function() {
        return GlobalState.__cacheIt((function() {
          return navigator.userAgent.toLowerCase().indexOf("android") !== -1;
        }), "platform.isAndroidNative");
      },
      isIos: function() {
        return GlobalState.__cacheIt((function() {
          return $("html").hasClass("ios");
        }), "platform.isIos");
      },
      isWindophone: function() {
        return GlobalState.__cacheIt((function() {
          return $("html").hasClass("win") && $("html").hasClass("mobile");
        }), "platform.isWindophone");
      },
      isWindows: function() {
        return GlobalState.__cacheIt((function() {
          return navigator.appVersion.indexOf("Win") !== -1;
        }), "platform.isWindows");
      },
      isVkIosApp: function() {
        return GlobalState.__cacheIt(function() {
          return location.search.indexOf("vk.iphone") !== -1 || location.search.indexOf("vk.ipad") !== -1;
        }, "platform.isVkIosApp");
      },
      isVkAndroidApp: function() {
        return GlobalState.__cacheIt(function() {
          var rc;
          rc = window.request_client || '';
          return rc.indexOf('com.vk.android') !== -1 || rc.indexOf('com.vkontakte.android') !== -1 || location.search.indexOf("vk.android") !== -1;
        }, "platform.isVkAndroidApp");
      },
      hasApp: function() {
        var device;
        device = void 0;
        if (GlobalState.PLATFORM.isIos()) {
          device = 'ios';
        } else if (GlobalState.PLATFORM.isAndroidNative()) {
          device = 'android';
        } else if (GlobalState.PLATFORM.isWindophone()) {
          device = 'win';
        }
        return device;
      }
    },
    SCREEN: {
      isTablet: function() {
        return GlobalState.__cacheIt((function() {
          return Math.max(screen.width, screen.height) / Math.min(screen.width, screen.height) <= 1.6;
        }), 'screen.isTablet');
      }
    },
    EDITOR: {
      isEditing: function() {
        return $(".cb-edtr").attr("editing") === "true";
      },
      isAuthor: function() {
        return $(".cb-edtr").attr("is_author") === "true";
      }
    },
    STATS: {
      getPageSection: function() {
        var path;
        path = window.location.pathname || '';
        if (path.indexOf('/view') === 0) {
          return 'coub_page';
        } else if (path.indexOf('/embed') === 0) {
          return 'embed';
        } else if (path.indexOf('/sources') === 0) {
          return 'make_coub';
        } else if (path.indexOf('/tags') === 0) {
          return 'tags_page';
        } else if (path.indexOf('/search') === 0) {
          return 'search_page';
        } else if (GlobalState.TIMELINE.type() !== 'unknown') {
          return "timeline_" + (GlobalState.TIMELINE.type());
        } else {
          return path;
        }
      }
    }
  };

}).call(this);
(function() {
  window.StatsDataProvider = {
    coubIncrementViews: function(permalink, player, isEmbed) {
      var embed_origin, params, platform, referrer, type, url;
      type = isEmbed ? GlobalState.PLATFORM.isVkIosApp() || GlobalState.PLATFORM.isVkAndroidApp() ? 'app_embed' : 'embed' : 'site';
      platform = GlobalState.PLATFORM.isMobile() ? GlobalState.PLATFORM.isAndroid() ? 'android' : GlobalState.PLATFORM.isIos() ? 'ios' : 'mobile' : 'desktop';
      params = {
        player: player,
        type: type,
        platform: platform
      };
      if (isEmbed) {
        referrer = GlobalState.PAGE.getReferrer();
        embed_origin = new URLRepresent(referrer).getDomain();
        if (!embed_origin && helpers.Location.isVkontakteEmbed()) {
          embed_origin = 'vk.com';
        }
        if (embed_origin != null) {
          params.embed_origin = embed_origin;
        }
      }
      url = "/coubs/" + permalink + "/increment_views?" + ($.param(params));
      $.post(url);
      return console.log("[INCREMENT_VIEW]", url);
    }
  };

}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.SocialSharingDataProvider = (function() {
    SocialSharingDataProvider.TYPES = {
      FACEBOOK: {
        name: "facebook",
        getPopupUrl: function(encoded_title, url) {
          return "https://www.facebook.com/sharer/sharer.php?u=" + (encodeURIComponent(url)) + "&title=" + encoded_title;
        }
      },
      TWITTER: {
        name: "twitter",
        getPopupUrl: function(encoded_title, url) {
          return "https://twitter.com/intent/tweet?text=" + encoded_title + "%20" + (encodeURIComponent(url)) + "%20@coub";
        },
        popupH: 450
      },
      TUMBLR: {
        name: "tumblr",
        getPopupUrl: function(encoded_title, url) {
          return "http://www.tumblr.com/share/video?embed=" + (encodeURIComponent(url)) + "&caption=" + encoded_title;
        }
      },
      STUMBLEUPON: {
        name: "stumbleupon",
        getPopupUrl: function(encoded_title, url) {
          return "http://www.stumbleupon.com/submit?url=" + (encodeURIComponent(url)) + "&title=" + encoded_title;
        },
        popupW: 800,
        popupH: 590
      },
      GOOGLEPLUS: {
        name: "google_plus",
        getPopupUrl: function(encoded_title, url) {
          return "https://plus.google.com/share?url=" + (encodeURIComponent(url));
        },
        popupW: 500
      },
      VKONTAKTE: {
        name: "vkontakte",
        getPopupUrl: function(encoded_title, url) {
          return "http://vk.com/share.php?url=" + (encodeURIComponent(url)) + "&title=" + encoded_title;
        }
      },
      SURFINGBIRD: {
        name: "surfingbird",
        getPopupUrl: function(encoded_title, url) {
          return "http://surfingbird.ru/share?url=" + (encodeURIComponent(url));
        }
      },
      PINTEREST: {
        name: "pinterest",
        getPopupUrl: function(encoded_title, url, img) {
          return "http://www.pinterest.com/pin/create/button/?url=" + (encodeURIComponent(url)) + "&description=" + encoded_title + "&media=" + (encodeURIComponent(img));
        }
      },
      ODNOKLASSNIKI: {
        name: "odnoklassniki",
        getPopupUrl: function(encoded_title, url, img) {
          return "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl=" + (encodeURIComponent(url)) + "&st.comments=" + encoded_title;
        }
      },
      LINKEDIN: {
        name: "linkedin",
        getPopupUrl: function(encoded_title, url, img) {
          return "http://www.linkedin.com/shareArticle?mini=true&url=" + (encodeURIComponent(url)) + "&summary=" + encoded_title + "&source=Coub";
        }
      },
      REDDIT: {
        name: "reddit",
        getPopupUrl: function(encoded_title, url, img) {
          return "http://reddit.com/submit?url=" + (encodeURIComponent(url)) + "&title=" + encoded_title;
        }
      },
      KANOBU: {
        name: "kanobu",
        getPopupUrl: function(encoded_title, url, img) {
          return "http://kanobu.ru/pub/share/?url=" + (encodeURIComponent(url)) + "&title=" + encoded_title;
        }
      },
      WATSAPP: {
        name: "watsapp",
        onClick: function(e, w) {
          var url;
          if (!w.isDisabled()) {
            url = "whatsapp://send?text=" + w.title + "%20" + (encodeURIComponent(w.url || Routes.view_coub_by_permalink_url(w.permalink)));
            window.top.location = url;
            return w.track();
          }
        }
      },
      MESSENGER: {
        name: "messenger",
        onClick: function(e, w) {
          var url;
          if (w.isDisabled()) {
            return;
          }
          url = "fb-messenger://share?link=" + (encodeURIComponent(w.url || Routes.view_coub_by_permalink_url(w.permalink)));
          window.top.location = url;
          return w.track();
        }
      },
      TELEGRAM: {
        name: "telegram",
        getPopupUrl: function(encoded_title, url) {
          return "https://telegram.me/share/url?url=" + url;
        }
      }
    };

    function SocialSharingDataProvider() {
      this.getProviderByName = bind(this.getProviderByName, this);
      if (SocialSharingDataProvider.__instance == null) {
        SocialSharingDataProvider.__instance = this;
        this.TYPES = SocialSharingDataProvider.TYPES;
      } else {
        return SocialSharingDataProvider.__instance;
      }
    }

    SocialSharingDataProvider.prototype.getProviderByName = function(name) {
      var k, ref, v;
      ref = this.TYPES;
      for (k in ref) {
        v = ref[k];
        if (v.name === name) {
          return v;
        }
      }
      return void 0;
    };

    SocialSharingDataProvider.getDefaultProvidersOrder = function() {
      var p;
      p = SocialSharingDataProvider.TYPES;
      if (GlobalState.COUNTRY.isRussia()) {
        return [p.FACEBOOK, p.TWITTER, p.VKONTAKTE, p.SURFINGBIRD, p.GOOGLEPLUS, p.TUMBLR, p.PINTEREST];
      } else {
        return [p.FACEBOOK, p.TWITTER, p.TUMBLR, p.STUMBLEUPON, p.GOOGLEPLUS, p.PINTEREST];
      }
    };

    return SocialSharingDataProvider;

  })();

}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.CoubsChangerDataProvider = (function() {
    function CoubsChangerDataProvider() {
      this.getPage = bind(this.getPage, this);
      this.getInitialPage = bind(this.getInitialPage, this);
    }

    CoubsChangerDataProvider.prototype.getInitialPage = function(channel_id, coub_id, success, error) {
      return $.ajax({
        url: "/api/v2/timeline/changer/" + channel_id + ".json?page_of=" + coub_id + "&per_page=1",
        type: "GET",
        success: success,
        error: error
      });
    };

    CoubsChangerDataProvider.prototype.getPage = function(channel_id, page, per_page, success, error) {
      return $.ajax({
        url: "/api/v2/timeline/changer/" + channel_id + ".json?page=" + page + "&per_page=" + per_page,
        type: "GET",
        success: success,
        error: error
      });
    };

    CoubsChangerDataProvider.prototype.getCoubsBetween = function(channel_id, coub_id, limit, success, error) {
      return $.ajax({
        url: "/api/v2/timeline/changer/" + channel_id + ".json?between=" + coub_id + "&limit=" + limit,
        type: "GET",
        success: success,
        error: error
      });
    };

    CoubsChangerDataProvider.prototype.getCoubsAfter = function(channel_id, coub_id, limit, success, error) {
      return $.ajax({
        url: "/api/v2/timeline/changer/" + channel_id + ".json?after=" + coub_id + "&limit=" + limit,
        type: "GET",
        success: success,
        error: error
      });
    };

    CoubsChangerDataProvider.prototype.getCoubsBefore = function(channel_id, coub_id, limit, success, error) {
      return $.ajax({
        url: "/api/v2/timeline/changer/" + channel_id + ".json?before=" + coub_id + "&limit=" + limit,
        type: "GET",
        success: success,
        error: error
      });
    };

    return CoubsChangerDataProvider;

  })();

}).call(this);
(function() {
  if (typeof I18n === "undefined" || I18n === null) {
    window.I18n = {};
  }

  window.I18n.template = function(localeStr) {
    var fn;
    fn = function(vals) {
      var i, str;
      str = this;
      for (i in vals) {
        str = str.replace('%{' + i + '}', vals[i]);
      }
      return str;
    };
    return fn.bind(localeStr);
  };

  window.I18n.ERRORS = {
    INTERNAL_SERVER_ERROR: {
      SUB: "An unexpected error occurred.",
      TRY_AGAIN: "We are working to solve this issue.<br />Please try again later."
    },
    AUTH_FAILED: {
      HEADER: "Authorization failed",
      SUB: "It seems, that you cancelled authorization process. Please, try again."
    },
    too_fast: {
      follow: 'You are following too fast',
      like: 'You are liking too fast',
      recoub: 'You are reposting too fast',
      slow_down: 'Please slow down'
    }
  };

  window.I18n.CREATE = {
    VIDEO_UPLOAD_ERRORS: {
      CANT_READ: "We could not read this file.",
      EXCEEEDS_DURATION: "Videos must be 20 minutes or shorter."
    },
    MESSAGES: {
      SAVE_SUCCESS: {
        TITLE: "Saved!",
        MESSAGE: "Your coub saved successfuly"
      },
      SAVE_ERROR: {
        TITLE: "Error while saving!",
        MESSAGE: "Error while saving occurred. Try to reload editor."
      }
    }
  };

  window.I18n.CUSTOMIZE_POPUP = {
    AFTER_CREATE: {
      TAGS_PLACEHOLDER: "Use comma or press Enter to separate tags"
    },
    SIMPLE_EDIT: {
      MESSAGE_AFTER_SAVE: {
        HEADER: "Done!",
        MESSAGE: "The changes have been saved."
      }
    },
    ERROR_MESSAGES: {
      TITLE_REQUIRED: "Please write a caption for your coub.",
      TITLE_TOO_LONG: "You've exceeded the 140 character limit."
    }
  };

  window.I18n.AUTH_POPUP = {
    BUTTONS: {
      VIEW_MORE: "Show more",
      VIEW_LESS: "Show fewer"
    }
  };

  window.I18n.PROFILE = {
    ERRORS: {
      PASSWORD_INCORECT: "The password is incorrect",
      EMAIL_IS_INVALID: "Incorrect email",
      EMAIL_IS_REGISTERED: "This email is already registered",
      PERMALINK_UNAVAILABLE: "This URL is unavailable",
      PERMALINK_TOO_SHORT: "The URL must be at least 8 characters long",
      PERMALINK_INVALID: "Use only a-z, 0-9, period (.), or hyphen (-)",
      PERMALINK_ENDS_WITH_DOT: "URL must not end with the dot symbol"
    },
    ADD_COVER: "Edit cover"
  };

  window.I18n.FIND_FRIENDS = {
    INVITE: {
      FACEBOOK: {
        INVITE_MESSAGE: "Join Coub, man"
      }
    }
  };

  window.I18n.sharing = {
    share_vk_short: "VK",
    share_tweeter_short: "Tweet"
  };

  window.I18n.editor = {
    pane: "Editor Control Pane",
    search_tags_pane: "Search Tags Pane",
    editors_stats: "Editors stats",
    banners_page: "translation missing: en.editor.banners_page",
    avatar_moderation: "Avatar Moderation",
    background_moderation: "Background moderation",
    weekly_digests: "Weekly Digests",
    saved_users: "Saved users",
    explore_queue: "Explore queue"
  };

  window.I18n.stats = {
    pane: "Stats pane"
  };

  window.I18n.admin = {
    pane: "Admin Control Pane"
  };

  window.I18n.embed = {
    get_app: "Get app",
    get_app_ru: "Скачать приложение",
    open_in_app: "Open in app",
    open_in_app_ru: "Открыть в приложении",
    views: "views",
    views_count: I18n.template("%{count} views"),
    views_singular_ru: "просмотр",
    views_plural_ru: "просмотров",
    views_double_ru: "просмотра",
    unmute: "Click to Unmute",
    unmute_ru: "Включить звук",
    back: "Back",
    by: I18n.template("by %{link}"),
    video_source: "Original video",
    share_ru: "Поделиться",
    site_name: "Coub",
    hd: "HD",
    open_on_coub: "Open on Coub",
    restart: "Restart",
    edit_coub: "Edit coub",
    edit_info: "Edit info",
    add_community: "Add to community",
    change_community: "Change community",
    delete_coub: "Delete coub",
    download_loops: "Download loops",
    promote_coub: "Promote coub",
    sharing: {
      download: "Download",
      loading: "Loading...",
      facebook: "Facebook",
      twitter: "Twitter",
      vkontakte: "VKontakte",
      more: "More..."
    },
    tooltips: {
      favourites_add: "Bookmark",
      favourites_remove: "Bookmarked",
      fullscreen_on: "Fullscreen",
      fullscreen_off: "Exit fullscreen",
      share: "Share",
      logo: "Watch on coub.com",
      hd_on: "Turn HD on",
      hd_off: "Turn HD off",
      audio_failed: "MP3 is not supported",
      settings: "Settings"
    },
    copy_link: {
      copy: "Copy link",
      copied: "Copied!",
      failed_to_copy: "Can't copy:("
    },
    social_names: {
      facebook: "Facebook",
      twitter: "Twitter",
      messenger: "Messenger",
      watsapp: "WhatsApp",
      link: "Link"
    },
    megafon_shazam: {
      film: "Фильм",
      match: "Совпадение %{secs}с",
      more_sources: "Больше Источников",
      series: "Сериал",
      watch: "Смотреть"
    }
  };

  window.I18n.growl_errors = {
    reload: {
      header: "Page error",
      error: "Please reload this page"
    }
  };

  window.I18n.follow_confirmation = {
    confirm: "Confirm channel following"
  };

  window.I18n.notifications = {
    follow: {
      is_now_following_suffix: 'is now following you',
      follow_back_suffix: 'followed you back'
    },
    likes_recoubs: {
      likes: "You liked %{count} from this channel",
      recoubs: "You recoubed %{count} from this channel",
      likes_recoubs: "You liked & recoubed %{count} coubs from this channel"
    }
  };

  window.I18n.site_notifications = {
    kinds: {
      sn_friend_follow: 'Your %{sn} friend %{nickname} is now following you as %{channel}',
      sn_friend_registered: 'Your %{sn} friend %{nickname} just joined Coub as %{channel}',
      sn_friend_follow_equal_name: 'Your %{sn} friend %{nickname} is now following you',
      sn_friend_registered_equal_name: 'Your %{sn} friend %{nickname} just joined Coub'
    }
  };

}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.CoubEmbed = (function() {
    CoubEmbed.prototype.TIMELINE_PIC_SIZES = [
      {
        v: "big",
        w: 1280,
        h: 1280
      }, {
        v: "med",
        w: 640,
        h: 500
      }, {
        v: "small",
        w: 400,
        h: 400
      }
    ];

    CoubEmbed.prototype.DT = "CoubEmbed";

    CoubEmbed.EVENTS = {
      LIST_NEXT: "CoubEmbed:ListNext",
      LIST_PREV: "CoubEmbed:ListPrev"
    };

    function CoubEmbed(el, opts) {
      this.el = el;
      this.opts = opts != null ? opts : {};
      this.resize = bind(this.resize, this);
      this.getProperTimelinePic = bind(this.getProperTimelinePic, this);
      this.init = bind(this.init, this);
      this.disableChangerButtons = bind(this.disableChangerButtons, this);
      this.enableChangerButtons = bind(this.enableChangerButtons, this);
      this.getChangerButtonsContainer = bind(this.getChangerButtonsContainer, this);
      this.preloadImage = bind(this.preloadImage, this);
      if (this.opts.preloadImageOnly) {
        this.preloadImage();
      } else {
        this.init(this.el);
      }
    }

    CoubEmbed.prototype.preloadImage = function() {
      this.coubData = this.opts.coubJson;
      this.img = this.el;
      return this.img.attr('src', this.coubData.picture);
    };

    CoubEmbed.prototype.getChangerButtonsContainer = function() {
      return $('.viewer__coubs-changer', this.el);
    };

    CoubEmbed.prototype.enableChangerButtons = function(prev, next, animated) {
      if (animated) {
        this.getChangerButtonsContainer().addClass('-animated');
      }
      this.getChangerButtonsContainer().removeClass('-transparent');
      this.btnPrev.removeClass('-disabled').toggleClass('-watch-more', prev !== true).on('click', (function(_this) {
        return function() {
          if (prev === true) {
            $(document).trigger(window.CoubEmbed.EVENTS.LIST_PREV);
          } else {
            _this.navigateTo(prev);
          }
          return Html5Player.sendAnalytics("playing_back");
        };
      })(this));
      return this.btnNext.removeClass('-disabled').toggleClass('-watch-more', next !== true).on('click', (function(_this) {
        return function() {
          if (next === true) {
            $(document).trigger(window.CoubEmbed.EVENTS.LIST_NEXT);
          } else {
            _this.navigateTo(next);
          }
          return Html5Player.sendAnalytics("playing_forward");
        };
      })(this));
    };

    CoubEmbed.prototype.disableChangerButtons = function() {
      var b, i, len, ref, results;
      ref = [this.btnPrev, this.btnNext];
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        b = ref[i];
        results.push(b.off('click'));
      }
      return results;
    };

    CoubEmbed.prototype.navigateTo = function(url) {
      $('.viewer', this.el).triggerHandler('pause');
      return window.open(url, "_blank");
    };

    CoubEmbed.prototype.isMobileEmbed = function() {
      return this.el.find('.viewer.viewer--mobile').length > 0;
    };

    CoubEmbed.prototype.init = function(el) {
      var e, eventMapper, v;
      this.el = el;
      try {
        v = $(".data > script", this.el).text();
        this.coubData = JSON.parse(v);
      } catch (error) {
        e = error;
        console.log('[HB-DEBUG]', "Can't parse coub json", {
          context: {
            json: v
          }
        });
      }
      this.btnPrev = $(".button-prev-next.-prev", this.el);
      this.btnNext = $(".button-prev-next.-next", this.el);
      this.controlsContainer = $('.viewer__controls__container', this.el);
      this.viewer = $('.viewer', this.el);
      this.playerContainer = $('.viewer__player', this.viewer);
      this.img = $('.viewer__img', this.viewer).css('opacity', 1);
      this.params = this.opts.params;
      this.player = new Player(this.viewer, {
        embed: true,
        muted: this.params.muted,
        noControls: this.params.no_controls || this.params.noControls,
        autoplay: this.params.autoplay,
        startWithHD: this.params.startWithHD,
        data: this.coubData,
        withLoopEvent: this.params['with-loop-event']
      });
      eventMapper = {};
      eventMapper[Player.EVENT_READY] = "ready";
      eventMapper[Player.EVENT_PLAYING] = "playStarted";
      eventMapper[Player.EVENT_PAUSED] = "playPaused";
      this.viewer.on(_.keys(eventMapper).join(' '), (function(_this) {
        return function(e) {
          var event;
          event = eventMapper[e.type];
          return $.postMessage(event, "*", parent);
        };
      })(this));
      this.viewer.on(Player.EVENT_HTML5_FALLBACK, (function(_this) {
        return function() {
          return _this.getChangerButtonsContainer().addClass('-force-hidden');
        };
      })(this));
      if (GlobalState.PAGE.getReferrer().indexOf('ahmadteafest2017') !== -1) {
        this.viewer.on(Player.EVENT_AUDIO_TRACK_ENDED, (function(_this) {
          return function() {
            return parent.$('body').trigger('audio-ended-mazafaka');
          };
        })(this));
      }
      if (GlobalState.PAGE.getReferrer().indexOf('hype.mts') !== -1) {
        this.viewer.on(Player.LOOP_OCCURED, (function(_this) {
          return function() {
            return parent.$('body').trigger('loop-occured-mazafaka');
          };
        })(this));
      }
      if (this.opts.updateImage) {
        return _.defer(this.getProperTimelinePic);
      }
    };

    CoubEmbed.prototype.getProperTimelinePic = function() {
      var biggest, dim, dominated, f, isVertical, mapDiff, mapVals, res, t, vh, vw;
      if (this.coubData == null) {
        return;
      }
      vw = this.img.width();
      vh = this.img.height();
      biggest = this.TIMELINE_PIC_SIZES[0];
      isVertical = vh > vw;
      dim = isVertical ? "h" : "w";
      dominated = isVertical ? vh : vw;
      mapVals = (function(_this) {
        return function(e) {
          return [e.v, e[dim]];
        };
      })(this);
      mapDiff = (function(_this) {
        return function(e) {
          return [e[0], e[1] - dominated];
        };
      })(this);
      res = (this.TIMELINE_PIC_SIZES.map((function(_this) {
        return function(e) {
          return mapDiff(mapVals(e));
        };
      })(this)).filter((function(_this) {
        return function(e) {
          return e[1] >= 0;
        };
      })(this)).reduce(((function(_this) {
        return function(f, s) {
          if (f[1] < s[1]) {
            return f;
          } else {
            return s;
          }
        };
      })(this)), mapVals(biggest)))[0];
      t = this.coubData.first_frame_versions.template;
      if (t) {
        f = t.replace("%{version}", res);
        return this.img.attr({
          src: f
        });
      }
    };

    CoubEmbed.prototype.startPlayer = function() {
      return this.viewer.triggerHandler('forceplay');
    };

    CoubEmbed.prototype.mutePlayer = function() {
      return this.player.curHandler.mute();
    };

    CoubEmbed.prototype.unmutePlayer = function() {
      return this.player.curHandler.unmute();
    };

    CoubEmbed.prototype.suspendPlayer = function() {
      return this.viewer.triggerHandler('suspend');
    };

    CoubEmbed.prototype.unembedPlayer = function() {
      return this.viewer.triggerHandler('unembed');
    };

    CoubEmbed.prototype.hideFinger = function() {
      return this.viewer.triggerHandler('hidefinger');
    };

    CoubEmbed.prototype.preloadPlayer = function() {
      return this.viewer.triggerHandler('preload');
    };

    CoubEmbed.prototype.hidePlayerControls = function() {
      if (this.viewer) {
        return this.viewer.triggerHandler(Player.ACTION_HIDE_CONTROLS);
      }
    };

    CoubEmbed.prototype.showPlayerControls = function() {
      if (this.viewer) {
        return this.viewer.triggerHandler(Player.ACTION_SHOW_CONTROLS);
      }
    };

    CoubEmbed.prototype.enableChangerMode = function(visibleControls) {
      var ref, viewerClass;
      viewerClass = visibleControls ? '-changer-mode -visible-controls' : '-changer-mode';
      this.viewer.addClass(viewerClass);
      ref = [], this.initialMouseX = ref[0], this.initialMouseY = ref[1];
      return this.viewer.on('mousemove.changer', (function(_this) {
        return function(e) {
          if (!_this.initialMouseX) {
            _this.initialMouseX = e.pageX;
          }
          if (!_this.initialMouseY) {
            _this.initialMouseY = e.pageY;
          }
          if (Math.abs(e.pageX - _this.initialMouseX) > 100 || Math.abs(e.pageY - _this.initialMouseY) > 100) {
            return _this.disableChangerMode();
          }
        };
      })(this));
    };

    CoubEmbed.prototype.disableChangerMode = function() {
      return this.viewer.removeClass('-changer-mode').off('mousemove.changer');
    };

    CoubEmbed.prototype.resize = function(ww, wh, cw, ch, animated) {
      var controlsMarginLeft, controlsMarginTop, embedProportion, originalHeight, originalProportion, originalWidth, playerHeight, playerMarginLeft, playerMarginTop, playerWidth, rate;
      if (animated == null) {
        animated = false;
      }
      this.windowWidth = ww;
      this.windowHeight = wh;
      if (this.viewer) {
        this.viewer.css({
          width: this.windowWidth,
          height: this.windowHeight
        });
      }
      originalWidth = this.coubData.site_w_h[0];
      originalHeight = this.coubData.site_w_h[1];
      originalProportion = originalWidth / originalHeight;
      embedProportion = this.windowWidth / this.windowHeight;
      rate = embedProportion < originalProportion ? this.windowWidth / originalWidth : this.windowHeight / originalHeight;
      playerWidth = Math.min(this.windowWidth, Math.round(originalWidth * rate));
      playerHeight = Math.min(this.windowHeight, Math.round(originalHeight * rate));
      this.controlsWidth = cw || playerWidth;
      this.controlsHeight = ch || playerHeight;
      this.img.css({
        width: playerWidth,
        height: playerHeight
      });
      if (!this.player) {
        return;
      }
      this.controlsContainer.toggleClass('-animated', animated);
      playerMarginTop = Math.ceil(playerHeight / 2);
      playerMarginLeft = Math.ceil(playerWidth / 2);
      controlsMarginTop = Math.ceil(this.controlsHeight / 2);
      controlsMarginLeft = Math.ceil(this.controlsWidth / 2);
      this.playerContainer.css({
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: "-" + playerMarginTop + "px 0 0 -" + playerMarginLeft + "px",
        width: playerWidth,
        height: playerHeight
      });
      this.controlsContainer.css({
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: "-" + controlsMarginTop + "px 0 0 -" + controlsMarginLeft + "px",
        width: this.controlsWidth,
        height: this.controlsHeight
      });
      return this.viewer.triggerHandler('resize');
    };

    return CoubEmbed;

  })();

}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.CoubsChangerTimelineLoader = (function() {
    CoubsChangerTimelineLoader.EVENTS = {
      LOADED: "CoubsChangerTimelineLoader:DataLoaded"
    };

    CoubsChangerTimelineLoader.LOAD_LIMIT = 25;

    function CoubsChangerTimelineLoader(channelPermalink, coubId) {
      this.channelPermalink = channelPermalink;
      this.coubId = coubId;
      this.onCoubsLoaded = bind(this.onCoubsLoaded, this);
      this.s = this.constructor;
      this.dataProvider = new window.CoubsChangerDataProvider();
      this.dataProvider.getCoubsBetween(this.channelPermalink, this.coubId, this.s.LOAD_LIMIT * 2 + 2, this.onCoubsLoaded, this.onLoadError);
    }

    CoubsChangerTimelineLoader.prototype.onCoubsLoaded = function(json) {
      var channelUrl, coubs, endIndex, initialCoub, initialCoubIndex, startIndex;
      coubs = json.coubs;
      initialCoub = _.findWhere(coubs, {
        id: this.coubId
      });
      initialCoubIndex = coubs.indexOf(initialCoub);
      startIndex = Math.max(initialCoubIndex - this.s.LOAD_LIMIT, 0);
      endIndex = Math.min(initialCoubIndex + this.s.LOAD_LIMIT + 1, coubs.length);
      this.coubsJsons = coubs.slice(startIndex, endIndex);
      this.coubsPermalinks = _.pluck(this.coubsJsons, 'permalink');
      this.index = this.coubsJsons.indexOf(initialCoub);
      channelUrl = "/" + this.channelPermalink;
      this.boundPrev = startIndex > 0 ? "/view/" + coubs[startIndex - 1].permalink : channelUrl;
      this.boundNext = endIndex < coubs.length ? "/view/" + coubs[endIndex].permalink : channelUrl;
      return $(document).trigger(CoubsChangerTimelineLoader.EVENTS.LOADED);
    };

    CoubsChangerTimelineLoader.prototype.onLoadError = function(e) {
      return console.error("CoubsChangerTimelineLoader Error", e);
    };

    return CoubsChangerTimelineLoader;

  })();

}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.EmbedController = (function() {
    EmbedController.prototype.TUMBLR_SAFE_FRAME = 'https://safe.txmblr.com/svc/embed/iframe';

    EmbedController.prototype.TEST_FRAME = 'test_page/tumblr_embeds';

    EmbedController.EVENTS = {
      CHANGER: {
        COUB_STARTED: 'EmbedController::Event::Changer::CoubStarted'
      }
    };

    EmbedController.ACTIONS = {
      CHANGER: {
        SELECT_COUB_BY_INDEX: 'EmbedController::Action::Changer::SelectCoubByIndex'
      }
    };

    function EmbedController() {
      this.initEmbedRunner = bind(this.initEmbedRunner, this);
      this.calculateControls = bind(this.calculateControls, this);
      this.resizeEmbed = bind(this.resizeEmbed, this);
      this.resize = bind(this.resize, this);
      this.setupResize = bind(this.setupResize, this);
      this.amplitudeTrackStart = bind(this.amplitudeTrackStart, this);
      this.amplitudeTrackView = bind(this.amplitudeTrackView, this);
      this.doGaTrack = bind(this.doGaTrack, this);
      this.loadEmbedHtml = bind(this.loadEmbedHtml, this);
      this.onEmbedPreloaded = bind(this.onEmbedPreloaded, this);
      this.onPreloadError = bind(this.onPreloadError, this);
      this.preloadEmbed = bind(this.preloadEmbed, this);
      this.listCoub = bind(this.listCoub, this);
      this.enableChangerButtons = bind(this.enableChangerButtons, this);
      this.returnButtons = bind(this.returnButtons, this);
      this.extractChangerContainer = bind(this.extractChangerContainer, this);
      this.createPreview = bind(this.createPreview, this);
      this.init = bind(this.init, this);
      this.initWithPlaylist = bind(this.initWithPlaylist, this);
      this.onTimelineDataLoaded = bind(this.onTimelineDataLoaded, this);
      this.initChanger = bind(this.initChanger, this);
      var obj;
      $.storage = new $.store();
      this.s = this.constructor;
      $('.coub__embed__preview').remove();
      window.onresize = null;
      this.el = $(".coub__viewer");
      this.embedsContainer = $('.coub__embed');
      this.createViewer(this.el);
      this.viewer = $(".viewer", this.el);
      this.permalink = this.viewer.attr('data-permalink');
      if (helpers.Location.isVkontakteEmbed()) {
        $('body').addClass('-vk-embed');
      }
      new functions.FullscreenBodyClass();
      if (helpers.Location.isIfunnyEmbed()) {
        this.embedsContainer.addClass("-ifunny-embed");
      }
      this.playerParams = this.loadURLParams();
      this.playerParams.autoplay = !this.forcedNoAutoplay() && (this.playerParams.autoplay || this.playerParams.autostart || this.referrerIsSaveFrame() || this.isAutoplayEmbed());
      if (this.isAutoplayEmbed()) {
        this.playerParams.muted = false;
      }
      this.currentEmbed = new window.CoubEmbed(this.el, {
        params: this.playerParams,
        updateImage: true
      });
      this.embeds = (
        obj = {},
        obj["" + this.permalink] = this.currentEmbed,
        obj
      );
      this.setupResize();
      if (!this.forcedNoAutoplay()) {
        this.initEmbedRunner();
      }
      this.trackedPermalinks = {};
      this.amplitudeStartTrackedPermalinks = {};
      this.doGaTrack();
      this.amplitudeTrackView();
      if (this.playerParams.autoplay && this.playerParams.muted) {
        this.viewer.one(Player.EVENT_PLUG_IN_SOUND, (function(_this) {
          return function() {
            _this.playerParams.muted = false;
            return _this.initChanger();
          };
        })(this));
      } else {
        if (this.playerParams.muted) {
          $(document).one("soundlevelchanged", (function(_this) {
            return function() {
              _this.playerParams.muted = false;
              return $(document).triggerHandler("flash_player:unmute");
            };
          })(this));
        }
        this.viewer.one(Player.EVENT_PLAYING, this.initChanger);
      }
    }

    EmbedController.prototype.createViewer = function(embedContainer) {
      var data, dataEl, viewer;
      dataEl = $('#embed-data-json', embedContainer);
      data = JSON.parse(dataEl.text());
      viewer = JST["app/site/templates/coub_block/viewer_block"](data);
      dataEl.remove();
      return embedContainer.append(viewer);
    };

    EmbedController.prototype.initChanger = function() {
      var channelPermalink, coubId, playlist, playlistParam, v;
      playlistParam = GlobalState.PAGE.getUrlParam('playlist');
      if (playlistParam) {
        playlist = playlistParam.split(',');
        this.initWithPlaylist(playlist);
        return;
      }
      if (GlobalState.PAGE.getUrlParam("disable_changer") === 'true' || GlobalState.PLATFORM.isMobile()) {
        return;
      }
      if (helpers.Location.isVkontakteEmbed()) {
        if (window.innerWidth < 300) {
          return;
        }
      } else {
        if ($('.viewer__player', this.viewer).width() < 300) {
          return;
        }
      }
      v = $('.viewer__coubs-changer', this.el);
      channelPermalink = v.attr('data-channel');
      coubId = parseInt(v.attr('data-coub-id'));
      this.amplitudeTrackStart();
      if (!channelPermalink || isNaN(coubId)) {
        return;
      }
      this.timelineLoader = new window.CoubsChangerTimelineLoader(v.attr('data-channel'), parseInt(v.attr('data-coub-id')));
      $(document).one(window.CoubsChangerTimelineLoader.EVENTS.LOADED, this.onTimelineDataLoaded);
      return $('body').mouseleave((function(_this) {
        return function() {
          _this.isMouseLeave = true;
          if (_this.changerButtons) {
            return _this.changerButtons.addClass('-transparent');
          }
        };
      })(this)).mouseenter((function(_this) {
        return function() {
          _this.isMouseLeave = false;
          if (_this.changerButtons) {
            return _this.changerButtons.removeClass('-transparent');
          }
        };
      })(this));
    };

    EmbedController.prototype.onTimelineDataLoaded = function() {
      var obj;
      this.permalinks = this.timelineLoader.coubsPermalinks;
      this.jsons = this.timelineLoader.coubsJsons;
      this.initialIndex = this.index = this.timelineLoader.index;
      this.permalink = this.permalinks[this.index];
      this.loadedHtmls = (
        obj = {},
        obj["" + this.permalink] = true,
        obj
      );
      this.boundNext = this.timelineLoader.boundNext;
      this.boundPrev = this.timelineLoader.boundPrev;
      this.listedIndex = 0;
      return this.init();
    };

    EmbedController.prototype.initWithPlaylist = function(playlist) {
      var i, loadNextJson, obj, onJsonsLoaded;
      this.isPlaylist = true;
      this.permalinks = playlist;
      this.jsons = [];
      this.initialIndex = this.index = 0;
      this.permalink = this.permalinks[this.index];
      this.loadedHtmls = (
        obj = {},
        obj["" + this.permalink] = true,
        obj
      );
      this.boundNext = this.boundPrev = true;
      i = 0;
      onJsonsLoaded = (function(_this) {
        return function() {
          $('body').on(_this.s.ACTIONS.CHANGER.SELECT_COUB_BY_INDEX, function(e, i) {
            return _this.listCoub(e, i);
          });
          return _this.init();
        };
      })(this);
      loadNextJson = (function(_this) {
        return function() {
          var p;
          p = _this.permalinks[i];
          return $.get("/coubs/" + p + ".json").done(function(r) {
            _this.jsons.push(r);
            if (i === _this.permalinks.length - 1) {
              return onJsonsLoaded();
            } else {
              i++;
              return loadNextJson();
            }
          }).fail(function(e) {
            return console.error(e);
          });
        };
      })(this);
      return loadNextJson();
    };

    EmbedController.prototype.init = function() {
      var i, j, jsonsToLoadPreview, len, ref1;
      if (this.permalinks.length === 0) {
        return;
      }
      this.enableChangerButtons(true);
      this.resize(true);
      this.playerParams.autoplay = false;
      jsonsToLoadPreview = [];
      jsonsToLoadPreview.push(this.jsons[this.index - 1]);
      jsonsToLoadPreview.push(this.jsons[this.index + 1]);
      ref1 = _.compact(jsonsToLoadPreview);
      for (j = 0, len = ref1.length; j < len; j++) {
        i = ref1[j];
        this.createPreview(i);
      }
      $(document).on(window.CoubEmbed.EVENTS.LIST_PREV, this.listCoub);
      return $(document).on(window.CoubEmbed.EVENTS.LIST_NEXT, this.listCoub);
    };

    EmbedController.prototype.createPreview = function(json) {
      var t;
      t = $(this.getTemplateForImagePreload(json));
      this.embedsContainer.append(t);
      this.embeds[json.permalink] = new window.CoubEmbed(t, {
        coubJson: json,
        preloadImageOnly: true,
        updateImage: true,
        params: this.playerParams
      });
      return this.resizeEmbed(this.embeds[json.permalink]);
    };

    EmbedController.prototype.remove404Coub = function(p) {
      var i;
      i = this.permalinks.indexOf(p);
      this.permalinks.splice(i, 1);
      this.jsons.splice(i, 1);
      if (this.initialIndex > i) {
        this.initialIndex--;
      }
      if (!this.embeds[p]) {
        return;
      }
      this.embeds[p].el.remove();
      return delete this.embeds[p];
    };

    EmbedController.prototype.extractChangerContainer = function() {
      this.changerButtons = this.currentEmbed.getChangerButtonsContainer();
      this.changerButtons.data('previousElement', this.changerButtons.prev());
      return this.embedsContainer.after(this.changerButtons);
    };

    EmbedController.prototype.returnButtons = function() {
      if (this.changerButtons) {
        this.changerButtons.insertAfter(this.changerButtons.data('previousElement'));
        return this.changerButtons = null;
      }
    };

    EmbedController.prototype.enableChangerButtons = function(animated) {
      var next, prev;
      if (animated == null) {
        animated = false;
      }
      this.returnButtons();
      prev = this.index !== 0 || this.boundPrev;
      next = this.index !== this.jsons.length - 1 || this.boundNext;
      return this.currentEmbed.enableChangerButtons(prev, next, animated);
    };

    EmbedController.prototype.listCoub = function(e, index) {
      var dl, ew, leftContainer, leftNew, newEmbed, oldEmbed, onHtmlLoaded, onLoadError, top, ww;
      if (index == null) {
        index = -1;
      }
      this.currentEmbed.disableChangerButtons();
      this.extractChangerContainer();
      if (!this.isCoubListed) {
        this.isCoubListed = true;
        this.resize();
      }
      $('html, body').addClass('-blackened');
      switch (e.type) {
        case window.CoubEmbed.EVENTS.LIST_NEXT:
          this.index++;
          this.listPrev = false;
          break;
        case window.CoubEmbed.EVENTS.LIST_PREV:
          this.index--;
          this.listPrev = true;
      }
      if (this.isPlaylist) {
        if (index !== -1) {
          this.listPrev = index < this.index;
          this.index = index;
        }
        if (this.index < 0) {
          this.index = this.permalinks.length - 1;
        }
        if (this.index === this.permalinks.length) {
          this.index = 0;
        }
      }
      this.permalink = this.permalinks[this.index];
      if (!this.embeds[this.permalink]) {
        this.createPreview(this.jsons[this.index]);
      }
      oldEmbed = this.currentEmbed.el;
      newEmbed = this.embeds[this.permalink].el;
      ww = this.windowWidth;
      ew = newEmbed.width();
      dl = (ww - ew) / 2;
      top = 0;
      if (this.listPrev) {
        leftNew = dl - ww;
        leftContainer = ww;
      } else {
        leftNew = dl + ww;
        leftContainer = -ww;
      }
      if (this.loadedHtmls[this.permalink]) {
        leftNew -= dl;
      } else {
        top = (this.windowHeight - newEmbed.height()) / 2;
      }
      newEmbed.removeClass('-hidden').css({
        position: 'absolute',
        top: top,
        left: leftNew
      });
      this.embedsContainer.addClass('-animated').css({
        left: leftContainer,
        overflow: 'visible'
      });
      this.currentEmbed.suspendPlayer();
      this.currentEmbed.hidePlayerControls();
      this.currentEmbed.disableChangerMode();
      this.embeds[this.permalink].hidePlayerControls();
      setTimeout((function(_this) {
        return function() {
          _this.animationComplete = true;
          return _this.tryToSwitch();
        };
      })(this), 250);
      if (!this.loadedHtmls[this.permalink]) {
        onHtmlLoaded = (function(_this) {
          return function(html) {
            var embed, vb;
            vb = $(html).find('.coub__viewer');
            vb.css('left', leftNew - dl);
            _this.createViewer(vb);
            _this.embedsContainer.append(vb);
            embed = _this.embeds[_this.permalink];
            embed.el.after(vb);
            embed.init(vb);
            embed.hidePlayerControls();
            embed.hideFinger();
            _this.loadedHtmls[_this.permalink] = true;
            _this.tryToSwitch();
            return _.defer(function() {
              return _this.resizeEmbed(embed);
            });
          };
        })(this);
        onLoadError = (function(_this) {
          return function() {
            _this.remove404Coub(_this.permalink);
            if (_this.listPrev) {
              if (_this.index === 0) {
                _this.startCurrentEmbed();
                return _this.enableChangerButtons();
              } else {
                return _this.listCoub(e);
              }
            } else if (!_this.listPrev) {
              _this.index--;
              if (_this.index === _this.permalinks.length - 1) {
                _this.startCurrentEmbed();
                return _this.enableChangerButtons();
              } else {
                return _this.listCoub(e);
              }
            }
          };
        })(this);
        return this.loadEmbedHtml(this.permalink, onHtmlLoaded, onLoadError);
      }
    };

    EmbedController.prototype.startCurrentEmbed = function() {
      var r;
      this.embedsContainer.removeClass('-animated').css({
        left: 0,
        overflow: 'hidden'
      });
      this.currentEmbed.el.css('left', 0);
      if ((this.listedIndex === 2 && html5Player.Preroll.getShownTimes() === 0) || (this.listedIndex > 0 && (this.listedIndex - 2) % 20 === 0)) {
        html5Player.Preroll.setPrerollType("vast");
        html5Player.Preroll.toggle(true);
      }
      this.currentEmbed.startPlayer();
      this.currentEmbed.enableChangerMode(!this.isMouseLeave);
      this.currentEmbed.showPlayerControls();
      if ((r = GlobalState.PAGE.getReferrer()) && (r.indexOf('ahmadteafest2017') !== -1 || r.indexOf('hype.mts') !== -1)) {
        return parent.$('body').trigger(this.s.EVENTS.CHANGER.COUB_STARTED, [this.index, this.permalink]);
      }
    };

    EmbedController.prototype.tryToSwitch = function() {
      if (!this.animationComplete || !this.loadedHtmls[this.permalink]) {
        return;
      }
      this.animationComplete = false;
      return this.switchEmbeds();
    };

    EmbedController.prototype.switchEmbeds = function() {
      var k, ref1, v;
      this.listedIndex++;
      this.currentEmbed = this.embeds[this.permalink];
      this.startCurrentEmbed();
      ref1 = this.embeds;
      for (k in ref1) {
        v = ref1[k];
        v.el.addClass('-hidden');
      }
      this.currentEmbed.el.removeClass('-hidden');
      this.doGaTrack();
      this.amplitudeTrackStart();
      this.trackGPMD();
      this.embedsContainer.find('> img').remove();
      if (this.currentEmbed.isMobileEmbed()) {
        return;
      }
      return this.preloadEmbed();
    };

    EmbedController.prototype.preloadEmbed = function() {
      var i;
      if (this.listPrev) {
        if (this.index !== 0) {
          i = this.index - 1;
        }
      } else {
        if (this.index !== this.permalinks.length - 1) {
          i = this.index + 1;
        }
      }
      if (i != null) {
        if (this.loadedHtmls[this.permalinks[i]]) {
          return this.enableChangerButtons();
        } else {
          return this.loadEmbedHtml(this.permalinks[i], this.onEmbedPreloaded, this.onPreloadError);
        }
      } else {
        return this.enableChangerButtons();
      }
    };

    EmbedController.prototype.onPreloadError = function() {
      this.remove404Coub(this.loadingPermalink);
      this.index = this.permalinks.indexOf(this.permalink);
      return this.preloadEmbed();
    };

    EmbedController.prototype.onEmbedPreloaded = function(html) {
      var embed, vb;
      this.loadedHtmls[this.loadingPermalink] = true;
      vb = $(html).find('.coub__viewer');
      this.createViewer(vb);
      this.embedsContainer.append(vb);
      embed = new window.CoubEmbed(vb, {
        params: this.playerParams
      });
      this.embeds[this.loadingPermalink] = embed;
      embed.el.addClass('-hidden');
      embed.preloadPlayer();
      embed.hideFinger();
      this.enableChangerButtons();
      return _.defer((function(_this) {
        return function() {
          return _this.resizeEmbed(embed);
        };
      })(this));
    };

    EmbedController.prototype.loadEmbedHtml = function(permalink, success, error) {
      this.loadingPermalink = permalink;
      return $.get("/embed/" + permalink).done(success).fail(error);
    };

    EmbedController.prototype.getTemplateForImagePreload = function(json) {
      return "<img width=\"" + json.site_w_h[0] + "\" height=\"" + json.site_w_h[1] + "\" style=\"position:absolute;left:-10000px\"/>";
    };

    EmbedController.prototype.trackGPMD = function() {
      var p, params;
      if ((this.listedIndex - 2) % 20 === 0) {
        params = {
          Puid1: 69,
          Puid2: 17,
          Puid3: 1,
          Dl: location.href
        };
        if (p = GlobalState.PAGE.getUrlParam('preview')) {
          params.preview = p;
        }
        return $.get('//ad.mail.ru/vast/3930', params);
      }
    };

    EmbedController.prototype.doGaTrack = function() {
      var delta, o, params, track_url;
      if (this.trackedPermalinks[this.permalink]) {
        return;
      }
      this.trackedPermalinks[this.permalink] = true;
      o = helpers.Location.isVkontakteEmbed() ? this.getGaParamsForVkEmbed() : this.getGaParams();
      params = o.params;
      if (getQueryParameters()['ref'] != null) {
        params.ref = getQueryParameters()['ref'];
      }
      delta = Math.abs(this.initialIndex - this.index);
      if (!(delta === 0 || isNaN(delta))) {
        params['changer_index'] = delta;
      }
      track_url = o.base + this.permalink;
      if (!_.isEmpty(params)) {
        track_url += "?" + ($.param(params));
      }
      console.log("[GA TRACK] " + track_url);
      ga('send', 'pageview', track_url);
      return console.log("[DEBUG]", "pageview!", track_url);
    };

    EmbedController.prototype.getGaParams = function() {
      return {
        base: "/embed/",
        params: {}
      };
    };

    EmbedController.prototype.getGaParamsForVkEmbed = function() {
      var currentVkPlace, h, place, ref, vkPlaces, w;
      vkPlaces = [
        {
          size: [537, 302],
          label: "feed"
        }, {
          size: [607, 341],
          label: "post-window"
        }, {
          size: [896, 504],
          label: "post-fullscreen"
        }, {
          size: [337, 189],
          label: "group-feed-small"
        }, {
          size: [350, 196],
          label: "chat"
        }, {
          size: [510, 286],
          label: "feed-new"
        }
      ];
      w = window.innerWidth;
      h = window.innerHeight;
      currentVkPlace = _.find(vkPlaces, function(p) {
        return w === p.size[0] && h === p.size[1];
      });
      place = currentVkPlace ? currentVkPlace.label : "unknown" + w + "x" + h;
      ref = GlobalState.PLATFORM.isVkAndroidApp() ? "vk.android" : GlobalState.PLATFORM.isVkIosApp() ? "vk.ios" : GlobalState.PLATFORM.isMobile() ? "vk.web.mobile" : "vk.web.html5";
      return {
        base: "/fb-embed/vk/",
        params: {
          place: place,
          __ref: ref
        }
      };
    };

    EmbedController.prototype.amplitudeTrackView = function() {
      var domain, params, referrer;
      referrer = GlobalState.PAGE.getReferrer();
      domain = new URLRepresent(referrer).getDomain();
      params = {
        referrer: referrer,
        domain: domain
      };
      return AmplitudeEmbed.track('embed_view_occurred', params);
    };

    EmbedController.prototype.amplitudeTrackStart = function() {
      var params;
      if (this.amplitudeStartTrackedPermalinks[this.permalink]) {
        return;
      }
      this.amplitudeStartTrackedPermalinks[this.permalink] = true;
      params = {
        adwhitelist: !helpers.Location.isAdsDisabled(),
        adblocked: GlobalState.BROWSER.hasAdblock()
      };
      return AmplitudeEmbed.track('embed_player_started', params);
    };

    EmbedController.prototype.setupResize = function() {
      var getParamValue, referrer, resizeFromParams;
      referrer = GlobalState.PAGE.getReferrer();
      resizeFromParams = window.env === 'production' ? referrer.match(this.TUMBLR_SAFE_FRAME) : referrer.match(this.TEST_FRAME);
      getParamValue = (function(_this) {
        return function(str, param) {
          var match;
          match = str.match(param + '=([^&]+)');
          if (match) {
            return match[1];
          } else {
            return '';
          }
        };
      })(this);
      if (resizeFromParams) {
        this.paramWidth = parseInt(getParamValue(referrer, 'w'));
        this.paramHeight = parseInt(getParamValue(referrer, 'h'));
      }
      $(window).on("resize", (function(_this) {
        return function() {
          return _this.resize();
        };
      })(this));
      return this.resize();
    };

    EmbedController.prototype.resize = function(animated) {
      var k, ref1, results, v;
      if (animated == null) {
        animated = false;
      }
      this.windowWidth = this.paramWidth ? this.paramWidth : window.innerWidth;
      this.windowHeight = this.paramHeight ? this.paramHeight : window.innerHeight;
      if (this.isCoubListed || helpers.Location.isVkontakteEmbed()) {
        this.calculateControls();
      }
      ref1 = this.embeds;
      results = [];
      for (k in ref1) {
        v = ref1[k];
        results.push(this.resizeEmbed(v, animated));
      }
      return results;
    };

    EmbedController.prototype.resizeEmbed = function(embed, animated) {
      if (animated == null) {
        animated = false;
      }
      return embed.resize(this.windowWidth, this.windowHeight, this.controlsWidth, this.controlsHeight, animated);
    };

    EmbedController.prototype.calculateControls = function() {
      this.controlsWidth = this.windowWidth;
      return this.controlsHeight = this.windowHeight;
    };

    EmbedController.prototype.loadURLParams = function() {
      var search;
      search = window.location.search.substr(1).replace(/&amp;/, '&');
      return _.reduce(search.split("&"), function(out, p) {
        var splitted;
        splitted = p.split('=');
        out[splitted[0]] = splitted[1] === 'true' || splitted[1] === '1';
        return out;
      }, {});
    };

    EmbedController.prototype.referrerIsSaveFrame = function() {
      var url, urls;
      urls = ['www.tumblr.com/dashboard', 'www.tumblr.com/blog', 'www.tumblr.com/tagged'];
      url = document.referrer;
      url = url.replace(/^http:\/\//, '').replace(/^https:\/\//, '');
      return _.detect(urls, function(el) {
        return url.indexOf(el) === 0;
      });
    };

    EmbedController.prototype.isAutoplayEmbed = function() {
      return helpers.Location.isRedditEmbed() || helpers.Location.isVkontakteEmbed() || helpers.Location.isTwitterEmbed();
    };

    EmbedController.prototype.forcedNoAutoplay = function() {
      return helpers.Location.isForcedNoAutoplay();
    };

    EmbedController.prototype.initEmbedRunner = function() {
      return $.receiveMessage((function(_this) {
        return function(e) {
          var data, msg, ref1;
          if (typeof e.data !== "string") {
            return;
          }
          ref1 = e.data.split('#'), msg = ref1[0], data = ref1[1];
          switch (msg) {
            case 'play':
              _this.currentEmbed.startPlayer();
              break;
            case 'stop':
              _this.currentEmbed.suspendPlayer();
              break;
            case 'mute':
              _this.currentEmbed.mutePlayer();
              break;
            case 'unmute':
              _this.currentEmbed.unmutePlayer();
              break;
            case 'hidefinger':
              _this.currentEmbed.hideFinger();
          }
          if (data === 'runner') {
            return Stats.addPersistentParameters({
              scriptAutoplay: true
            });
          }
        };
      })(this));
    };

    return EmbedController;

  })();

  $(function() {
    if (GlobalState.PLATFORM.isMobile()) {
      return mobilePlayer.SharedAudioElement.testGestureReq().always(function() {
        return new window.EmbedController();
      });
    } else {
      return new window.EmbedController();
    }
  });

}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.EmbedDispatcher = (function() {
    EmbedDispatcher.prototype.key = 'embed_current_playing_coub';

    function EmbedDispatcher(opts) {
      this.checkIfNeedToShut = bind(this.checkIfNeedToShut, this);
      var error;
      try {
        this.latestId = $.storage.get(this.key);
      } catch (error1) {
        error = error1;
        $.storage.set(this.key, '');
        this.latestId = '';
      }
      if (opts == null) {
        opts = {};
      }
      this.opts = opts;
      this.id = this.generateRandID();
      this.checkingInterval = setInterval(this.checkIfNeedToShut, 100);
    }

    EmbedDispatcher.prototype.destroy = function() {
      var ref;
      clearInterval(this.checkingInterval);
      return ref = [], this.opts = ref[0], this.id = ref[1], this.checkingInterval = ref[2], this.latestId = ref[3], ref;
    };

    EmbedDispatcher.prototype.startedPlaying = function() {
      $.storage.set(this.key, this.id);
      return this.latestId = this.id;
    };

    EmbedDispatcher.prototype.checkIfNeedToShut = function() {
      try {
        if (this.latestId !== $.storage.get(this.key)) {
          this.opts.onStop();
        }
        return this.latestId = $.storage.get(this.key);
      } catch (error1) {
        return this.startedPlaying();
      }
    };

    EmbedDispatcher.prototype.generateRandID = function() {
      return "coub_embed_" + Math.round(Math.random() * Math.random() * 10000000);
    };

    return EmbedDispatcher;

  })();

}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.Html5Player = (function() {
    Html5Player.prototype.STATE = {
      UNLOADED: "unloaded",
      LOADING: "loading",
      PLAYING: "playing",
      PAUSED: "paused"
    };

    Html5Player.prototype.STORAGE = {
      SOUND_LEVEL: 'player_sound_level',
      HD_ENABLED: 'player_hd_enabled'
    };

    Html5Player.prototype.DT = "Html5Player";

    function Html5Player(viewerBlock, opts) {
      var e, jsonStr;
      if (opts == null) {
        opts = {};
      }
      this.unmute = bind(this.unmute, this);
      this.mute = bind(this.mute, this);
      this.play = bind(this.play, this);
      this.blurHandler = bind(this.blurHandler, this);
      this.hdHandler = bind(this.hdHandler, this);
      this.soundLevelHandler = bind(this.soundLevelHandler, this);
      this.storageHandler = bind(this.storageHandler, this);
      this.playOnPopupClose = bind(this.playOnPopupClose, this);
      this.suspendOnPopupOpen = bind(this.suspendOnPopupOpen, this);
      this.vb = $(viewerBlock).addClass('viewer--v2');
      this.isEmbed = !!opts.embed;
      this.ui = new html5Player.UI(this, this.isEmbed);
      try {
        this.data = opts.data ? opts.data : (jsonStr = $('.data > script', this.vb).html(), JSON.parse(jsonStr));
      } catch (error) {
        e = error;
        this.ui.setView(html5Player.UI.prototype.VIEW.DISABLED);
        console.log('[HB-DEBUG]', "Something wrong with coub's JSON", {
          context: {
            json: jsonStr
          }
        });
        return;
      }
      this.changeState(this.STATE.UNLOADED);
      this.html5Data = this.data.file_versions.html5;
      this.opts = opts;
      if (!this.html5Data.video) {
        console.log('[PLAYER]', 'no video');
        return this.fallback();
      }
      this.hasSuperHD = !!this.html5Data.video.higher;
      this.hasHD = !!this.html5Data.video.high;
      this.isHD = this.hasHD && (!!opts.startWithHD || this.getHDValue());
      this.hasAudio = !!this.html5Data.audio && !opts.noAudio;
      this.isAutoplay = !!opts.autoplay;
      this.noControls = !!opts.noControls;
      this.isMuted = !!opts.muted;
      if (this.noControls) {
        this.ui.hideControlsPermanently();
      }
      this.ui.setQuality(this.isHD);
      this.ui.setSoundLevel(this.getSoundLevel());
      if (!this.hasHD) {
        this.ui.hideHDControls();
      }
      if (!this.hasAudio) {
        this.ui.hideSoundControls();
      }
      if (helpers.Location.isVkontakteEmbed()) {
        this.ui.hideSharingControls();
      }
      if (!(document.fullscreenEnabled || document.msFullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled)) {
        this.ui.hideFullScreenControls();
      }
      this.ui.setView(html5Player.UI.prototype.VIEW.UNLOADED);
      if (this.data.ahmad_promo) {
        this.ui.setAhmadPromoQuote(this.data.ahmad_promo);
      }
      if ((this.data.promo_data || {}).pelmeshki && !GlobalState.BROWSER.isSafari()) {
        this.pelmeshkiPromoVideo = new html5Player.PelmeshkiPromo(this.ui, this.data.promo_data.pelmeshki);
      }
      this.core = new html5Player.VideoCore(this, this.getVideoData(this.isHD), this.isHD);
      this.attachEvents();
      this.vb.triggerHandler(Player.EVENT_READY);
      if (this.isEmbed) {
        this.dispatcher = new EmbedDispatcher({
          onStop: (function(_this) {
            return function() {
              if (!_this.isAutoplay || !_this.isMuted) {
                return _this.suspend();
              }
            };
          })(this)
        });
      }
      if (this.isAdOverlayEnabled()) {
        this.adManager = new html5Player.EmbedAds(this.ui, this.data);
      }
      if (GlobalState.USER.isLogedIn() || this.isEmbed) {
        this.favourites = new html5Player.Favourites(this.data.id, this.data.permalink, this.data.favourite && !this.isEmbed);
      }
      this.core.notifyAboutReadyState();
      if (this.isAutoplay) {
        this.play();
      }
      if (this.hasAudio && this.isMuted) {
        this.toggleMute(true, false);
      }
      Html5Player.sendAnalytics("load");
    }

    Html5Player.prototype.fallback = function(isPlaying) {
      if (this.fallenBack) {
        return;
      }
      this.fallenBack = true;
      this.vb.triggerHandler(Player.EVENT_HTML5_FALLBACK);
      this.unload();
      this.dispatcher && this.dispatcher.destroy();
      this.vb.removeClass('viewer--v2').off('.player');
      this.ui.setView(html5Player.UI.prototype.VIEW.EMPTY);
      this.opts.skip_html5 = true;
      new Player(this.vb, this.opts);
      if (isPlaying) {
        this.vb.triggerHandler('play');
      }
      if (this.handControlActivated) {
        this.vb.triggerHandler(Player.ACTION_ACTIVATE_HAND_CONTROL);
      }
      return this.pelmeshkiPromoVideo && this.pelmeshkiPromoVideo.destroy();
    };

    Html5Player.prototype.getVideoData = function(isHD) {
      var qualityKeys, videoData;
      qualityKeys = isHD && this.hasSuperHD && (this.vb.width() >= 720 || this.vb.height() >= 720) ? ["higher", "high"] : isHD ? ["high", "high"] : ["med", "med"];
      videoData = {
        duration: this.data.duration,
        videoUrl: this.html5Data.video[qualityKeys[0]].url,
        videoSize: this.html5Data.video[qualityKeys[0]].size
      };
      if (this.hasAudio) {
        videoData.audioUrl = this.html5Data.audio[qualityKeys[1]].url;
        videoData.audioSize = this.html5Data.audio[qualityKeys[1]].size;
        videoData.audioSampleDuration = this.html5Data.audio.sample_duration;
      }
      return videoData;
    };

    Html5Player.prototype.hasFocus = function() {
      return (!document.hidden && (this.isEmbed || document.hasFocus())) || (GlobalState.BROWSER.isSafari() && this.isFullScreen === true);
    };

    Html5Player.prototype.attachEvents = function() {
      if (!this.isEmbed) {
        $(window).on('blur focus', this.blurHandler);
      }
      $(document).on('visibilitychange', this.blurHandler).on('flash_player:mute', this.mute).on('flash_player:unmute', this.unmute).on('flash_player:suspend', this.suspendOnPopupOpen).on('flash_player:play', this.playOnPopupClose);
      $(window).on('storage', this.storageHandler);
      $(document).on('soundlevelchanged', this.soundLevelHandler);
      $(document).on('hdvaluechanged', this.hdHandler);
      this.ui.viewerClick.on('click.player', this.togglePlayState.bind(this));
      this.ui.fullScreenButton.click(this.toggleFullScreen.bind(this));
      this.ui.shareButton.click(this.togglePlayState.bind(this));
      this.ui.muteOverlay.click(this.plugInSound.bind(this));
      this.ui.hdButton.click((function(_this) {
        return function() {
          return _this.toggleQuality(null, true);
        };
      })(this));
      this.ui.soundButton.click(this.toggleMute.bind(this));
      this.ui.mobileMark.click(this.pause.bind(this));
      this.ui.infoBlock.click(this.pause.bind(this));
      this.ui.replayButton.click(this.replay.bind(this));
      this.ui.settingsReplayButton.click(this.replay.bind(this));
      this.ui.favouritesButton.on('click unloged_action:favourites', this.toggleFavourites.bind(this));
      this.vb.on('play.player', this.play.bind(this));
      this.vb.on('pause.player', this.pause.bind(this));
      this.vb.on('suspend.player', this.suspendHandler.bind(this));
      this.vb.on('preload.player', this.preload.bind(this));
      this.vb.on('unembed.player', this.unload.bind(this));
      this.vb.on('forceplay.player', (function(_this) {
        return function() {
          return _this.play(true);
        };
      })(this));
      this.vb.on('hidefinger.player', this.ui.hideFinger.bind(this.ui));
      this.vb.on('resize.player', this.ui.setSizes.bind(this.ui));
      this.vb.on('keyup.player', this.keyHandler.bind(this));
      this.vb.on(Player.ACTION_ACTIVATE_HAND_CONTROL + ".player", (function(_this) {
        return function() {
          _this.handControlActivated = true;
          _this.ui.showFinger();
          _this.dispatcher && _this.dispatcher.destroy();
          return _this.dispatcher = new EmbedDispatcher({
            onStop: function() {
              if (!_this.userPaused) {
                return _this.unload();
              }
            }
          });
        };
      })(this));
      this.vb.on(Player.ACTION_DEACTIVATE_HAND_CONTROL + ".player", (function(_this) {
        return function() {
          _this.handControlActivated = false;
          _this.ui.hideFinger();
          return _this.dispatcher && _this.dispatcher.destroy();
        };
      })(this));
      this.vb.on(Player.ACTION_UNEMBED_IF_NOT_PLAYING + ".player", (function(_this) {
        return function() {
          if (_this.state !== _this.STATE.PLAYING && !_this.userPaused) {
            return _this.unload();
          }
        };
      })(this));
      this.vb.on(Player.ACTION_SET_FULLSCREEN_ELEMENT + ".player", (function(_this) {
        return function(e, el) {
          return _this.ui.setFullScreenElement(el);
        };
      })(this));
      this.vb.on(Player.ACTION_SHOW_CONTROLS + ".player", this.ui.showControls.bind(this.ui));
      this.vb.on(Player.ACTION_HIDE_CONTROLS + ".player", this.ui.hideControls.bind(this.ui));
      this.vb.on(Player.ACTION_TURN_HD_ON + ".player", (function(_this) {
        return function() {
          return _this.toggleQuality(true);
        };
      })(this));
      return this.vb.on("dom_remove", (function(_this) {
        return function() {
          _this.unload();
          _this.dispatcher && _this.dispatcher.destroy();
          $(window).off('blur focus', _this.blurHandler).off('storage', _this.storageHandler);
          return $(document).off('visibilitychange', _this.blurHandler).off('flash_player:mute', _this.mute).off('flash_player:unmute', _this.unmute).off('soundlevelchanged', _this.soundLevelHandler).off('hdvaluechanged', _this.hdHandler).off('flash_player:suspend', _this.suspendOnPopupOpen).off('flash_player:play', _this.playOnPopupClose);
        };
      })(this));
    };

    Html5Player.prototype.suspendOnPopupOpen = function() {
      if ([this.STATE.LOADING, this.STATE.PLAYING].indexOf(this.state) !== -1 && [this.ui.VIEW.UNLOADED, this.ui.VIEW.SUSPENDED].indexOf(this.ui.view) === -1) {
        this.isTemporallySuspended = true;
        return this.suspend();
      }
    };

    Html5Player.prototype.playOnPopupClose = function() {
      if (this.isTemporallySuspended) {
        this.isTemporallySuspended = false;
        return this.play();
      }
    };

    Html5Player.prototype.storageHandler = function(e) {
      if (!this.isMuted && e.originalEvent.key === this.STORAGE.SOUND_LEVEL) {
        this.setSoundLevel(this.getSoundLevel(), false);
      }
      if (this.state === this.STATE.UNLOADED && e.originalEvent.key === this.STORAGE.HD_ENABLED) {
        return this.toggleQuality(this.getHDValue());
      }
    };

    Html5Player.prototype.soundLevelHandler = function(e, sender) {
      if (this.isMuted || sender === this) {
        return;
      }
      return this.setSoundLevel(this.getSoundLevel(), false);
    };

    Html5Player.prototype.hdHandler = function(e, sender) {
      if (this.state !== this.STATE.UNLOADED || sender === this) {
        return;
      }
      return this.toggleQuality(this.getHDValue());
    };

    Html5Player.prototype.blurHandler = function() {
      if (!this.hasFocus()) {
        return;
        if (this.state !== this.STATE.PLAYING) {
          return;
        }
        this.suspend();
        return this.browserPaused = true;
      } else if (this.browserPaused) {
        this.browserPaused = false;
        if (this.state !== this.STATE.UNLOADED) {
          return this.play();
        }
      } else if (this.state === this.STATE.PLAYING) {
        return this.core.sync();
      }
    };

    Html5Player.prototype.togglePlayState = function(e) {
      var isCenterButton, isShareButton, ref, ref1;
      isCenterButton = e && e.target === $(".viewer__click", this.vb).get(0);
      isShareButton = e && e.currentTarget === this.ui.shareButton.get(0);
      if (GlobalState.PAGE.isCoubPage() && isCenterButton) {
        AmplitudeCoub.track(AmplitudeCoub.COUB_PAGE.PLAYER.CENTER_CLICKED);
      }
      if (this.ui.view === html5Player.UI.prototype.VIEW.SUGGESTS) {
        if (isShareButton) {
          this.userPaused = true;
          return this.pause(e);
        } else if ((ref = this.state) === this.STATE.PAUSED || ref === this.STATE.LOADING) {
          this.userPaused = false;
          return this.play();
        }
      } else if ((ref1 = this.state) === this.STATE.PLAYING || ref1 === this.STATE.LOADING) {
        this.userPaused = true;
        return this.pause(e);
      } else {
        this.userPaused = false;
        return this.play();
      }
    };

    Html5Player.prototype.plugInSound = function() {
      var ref;
      if ((ref = this.state) !== this.STATE.PLAYING && ref !== this.STATE.PAUSED) {
        return;
      }
      this.vb.triggerHandler(Player.EVENT_PLUG_IN_SOUND);
      if (this.isMuted) {
        this.toggleMute(false, false);
      } else {
        this.core.rewind();
        this.playLoop();
      }
      return this.dispatcher && this.dispatcher.startedPlaying();
    };

    Html5Player.prototype.suspendHandler = function() {
      this.browserPaused = false;
      return this.suspend();
    };

    Html5Player.prototype.keyHandler = function(e) {
      switch (e.which) {
        case 87:
          return this.core.changeTempo(1.15);
        case 83:
          return this.core.changeTempo(0.87);
        case 82:
          return this.replay(false);
        case 80:
          if (this.state === this.STATE.PLAYING) {
            return this.suspend();
          } else if (this.state === this.STATE.PAUSED) {
            return this.play();
          }
      }
    };

    Html5Player.prototype.play = function(force) {
      if (force == null) {
        force = false;
      }
      if (force === true) {
        this.userPaused = false;
      }
      if (this.state === this.STATE.PLAYING || (this.state === this.STATE.PAUSED && this.userPaused)) {
        return;
      }
      this.suspendOnPreload = false;
      this.ui.setSizes();
      if (this.isPrerollEnabled()) {
        this.vb.on(html5Player.Preroll.prototype.EVENT_PREROLL_COMPLETED, this.play).on(html5Player.Preroll.prototype.EVENT_PREROLL_CLOSED, this.play).on(html5Player.Preroll.prototype.EVENT_PREROLL_FAILED, this.play);
        return this.prerollManager = html5Player.Preroll.getInstance(this.data, this.ui);
      } else if (this.prerollManager && !this.prerollManager.locker.isLocked()) {
        this.prerollManager.destroy();
        this.preloadAndPlay();
        return this.pelmeshkiPromoVideo && this.pelmeshkiPromoVideo.play();
      } else if (!this.prerollManager) {
        this.preloadAndPlay();
        return this.pelmeshkiPromoVideo && this.pelmeshkiPromoVideo.play();
      }
    };

    Html5Player.prototype.pause = function(e) {
      var isShareButton, ref, ref1, sharingShown;
      isShareButton = e && e.currentTarget === this.ui.shareButton.get(0);
      sharingShown = (ref = this.ui.view) === html5Player.UI.prototype.VIEW.SHARING || ref === html5Player.UI.prototype.VIEW.UNLOADED_SHARING;
      if (GlobalState.PAGE.isCoubPage()) {
        if (this.state !== this.STATE.PAUSED) {
          AmplitudeCoub.track(AmplitudeCoub.COUB_PAGE.PLAYER.PAUSE_OCCURED);
        }
        if (isShareButton) {
          AmplitudeCoub.track(AmplitudeCoub.COUB_PAGE.PLAYER.SHARE_BTN_CLICKED);
        }
      }
      if ((ref1 = this.state) === this.STATE.LOADING || ref1 === this.STATE.PAUSED || ref1 === this.STATE.PLAYING) {
        this.changeState(this.STATE.PAUSED);
        if (!this.userPaused) {
          this.userPaused = isShareButton;
        }
        this.core.pause();
        if (isShareButton) {
          this.ui.setView(html5Player.UI.prototype.VIEW.SHARING);
          Html5Player.sendAnalytics("share");
        } else {
          this.ui.setView(html5Player.UI.prototype.VIEW.SUGGESTS);
        }
        return this.pelmeshkiPromoVideo && this.pelmeshkiPromoVideo.pause();
      } else if (this.state === this.STATE.UNLOADED) {
        if (isShareButton) {
          if (sharingShown) {
            return this.ui.setView(html5Player.UI.prototype.VIEW.UNLOADED);
          } else {
            return this.ui.setView(html5Player.UI.prototype.VIEW.UNLOADED_SHARING);
          }
        } else {
          return this.ui.setView(html5Player.UI.prototype.VIEW.UNLOADED);
        }
      }
    };

    Html5Player.prototype.suspend = function() {
      if (this.state === this.STATE.PLAYING) {
        this.changeState(this.STATE.PAUSED);
        this.core.pause();
        return this.ui.setView(html5Player.UI.prototype.VIEW.SUSPENDED);
      } else if (this.state === this.STATE.LOADING) {
        return this.suspendOnPreload = true;
      }
    };

    Html5Player.prototype.replay = function(withAnimation) {
      if (withAnimation == null) {
        withAnimation = true;
      }
      this.play(true);
      if (withAnimation) {
        (this.restartStoredSoundLevel == null) && (this.restartStoredSoundLevel = this.getSoundLevel());
        this.core.setSoundLevel(0);
        this.ui.blackScreenAnimation((function(_this) {
          return function() {
            _this.core.setSoundLevel(_this.restartStoredSoundLevel);
            _this.restartStoredSoundLevel = void 0;
            _this.core.rewind();
            return _this.core.resetTempo();
          };
        })(this));
        return Html5Player.sendAnalytics("restart");
      } else {
        return this.core.rewind();
      }
    };

    Html5Player.prototype.mute = function() {
      return this.toggleMute(true);
    };

    Html5Player.prototype.unmute = function() {
      return this.toggleMute(false);
    };

    Html5Player.prototype.preload = function() {
      var drawProgress, framesDefer, minProgress;
      this.changeState(this.STATE.LOADING);
      if (!this.preloadDefer) {
        minProgress = 0.1;
        drawProgress = (function(_this) {
          return function(p) {
            return _this.ui.framesProgress(Math.max(p, minProgress));
          };
        })(this);
        if (this.hasAudio) {
          this.core.preloadAudio();
        }
        framesDefer = this.core.preloadFrames();
        framesDefer.load.progress(function(p) {
          return drawProgress(p);
        });
        this.ui.framesProgress(minProgress);
        this.preloadDefer = {
          play: $.when(framesDefer.play),
          load: $.when(framesDefer.load)
        };
        this.preloadDefer.play.done(function() {
          drawProgress(1);
          return drawProgress = $.noop;
        });
      }
      return this.preloadDefer;
    };

    Html5Player.prototype.unload = function() {
      var ref;
      if (this.state === this.STATE.UNLOADED) {
        return;
      }
      this.changeState(this.STATE.UNLOADED);
      ref = [], this.preloadDefer = ref[0], this.userPaused = ref[1], this.browserPaused = ref[2], this.suspendOnPreload = ref[3];
      this.core.reinit();
      this.ui.setView(html5Player.UI.prototype.VIEW.UNLOADED);
      return this.pelmeshkiPromoVideo && this.pelmeshkiPromoVideo.stop();
    };

    Html5Player.prototype.toggleFullScreen = function() {
      if (GlobalState.PAGE.isCoubPage()) {
        AmplitudeCoub.track(AmplitudeCoub.COUB_PAGE.PLAYER.FULLSCREEN_CLICKED);
      }
      this.isFullScreen = this.ui.toggleFullScreen();
      if (this.isFullScreen) {
        if (!this.isHD) {
          this.toggleQuality(true);
        }
        if (this.state === this.STATE.UNLOADED) {
          this.play();
        }
      }
      return Html5Player.sendAnalytics("fullscreen");
    };

    Html5Player.prototype.toggleQuality = function(isHD, dispatch) {
      var oldState;
      if (dispatch == null) {
        dispatch = false;
      }
      if (!this.hasHD) {
        return;
      }
      oldState = this.state;
      this.changeState(this.STATE.UNLOADED);
      this.isHD = _.isBoolean(isHD) ? isHD : !this.isHD;
      this.core.reinit(this.getVideoData(this.isHD), this.isHD);
      this.ui.setQuality(this.isHD);
      this.preloadDefer = void 0;
      this.userPaused = false;
      if (oldState !== this.STATE.UNLOADED) {
        this.preloadAndPlay();
      }
      if (dispatch) {
        $.storage.set(this.STORAGE.HD_ENABLED, this.isHD);
        return $(document).triggerHandler('hdvaluechanged', this);
      }
    };

    Html5Player.prototype.setSoundLevel = function(val, dispatch) {
      if (dispatch == null) {
        dispatch = true;
      }
      this.core.setSoundLevel(val);
      this.ui.setSoundLevel(val);
      if (this.isMuted && val) {
        this.isMuted = false;
        this.core.setMuteState(false);
        this.ui.setView(html5Player.UI.prototype.VIEW.PLAYING);
      }
      if (dispatch) {
        $.storage.set(this.STORAGE.SOUND_LEVEL, val);
        $(document).triggerHandler('soundlevelchanged', this);
        return Html5Player.sendAnalytics("volume");
      }
    };

    Html5Player.prototype.getSoundLevel = function() {
      var lvl;
      lvl = $.storage.get(this.STORAGE.SOUND_LEVEL);
      if (lvl == null) {
        lvl = 1;
      }
      return lvl;
    };

    Html5Player.prototype.getHDValue = function() {
      return $.storage.get(this.STORAGE.HD_ENABLED);
    };

    Html5Player.prototype.toggleMute = function(val, dispatch) {
      var lvl, newState;
      if (dispatch == null) {
        dispatch = true;
      }
      lvl = this.getSoundLevel();
      newState = _.isBoolean(val) ? val : this.isMuted ? false : !!lvl;
      if (newState) {
        return this.setSoundLevel(0, dispatch);
      } else {
        return this.setSoundLevel(lvl || 1, dispatch);
      }
    };

    Html5Player.prototype.toggleFavourites = function(e) {
      if (this.favourites) {
        if (e && e.type === 'unloged_action:favourites') {
          this.favourites.isAdded = false;
        }
        if (this.isEmbed && !GlobalState.USER.isLogedIn()) {
          return this.favourites.openLoginPage();
        } else {
          return this.favourites.toggle((function(_this) {
            return function() {
              return _this.ui.toggleFavouritesState(_this.favourites.isAdded);
            };
          })(this));
        }
      }
    };

    Html5Player.prototype.preloadAndPlay = function() {
      this.dispatcher && this.dispatcher.startedPlaying();
      if (this.preload().play.state() === 'pending') {
        this.ui.setView(html5Player.UI.prototype.VIEW.LOADING);
      }
      this.preload().play.fail((function(_this) {
        return function(e) {
          (typeof Honeybadger !== "undefined" && Honeybadger !== null) && Honeybadger.notify("MS Play Error", {
            context: {
              message: e,
              permalink: _this.data.permalink
            }
          });
          return _this.fallback(true);
        };
      })(this));
      return this.preload().play.done((function(_this) {
        return function() {
          if (!_this.userPaused) {
            _this.playLoop();
          }
          if (_this.suspendOnPreload) {
            return _this.suspend();
          } else if (!_this.hasFocus()) {
            _this.suspend();
            return _this.browserPaused = true;
          }
        };
      })(this));
    };

    Html5Player.prototype.playLoop = function() {
      this.changeState(this.STATE.PLAYING);
      if (this.hasAudio) {
        this.core.setSoundLevel(this.getSoundLevel());
        this.core.setMuteState(this.isMuted);
        if (this.isMuted && this.isAutoplay) {
          this.ui.setView(html5Player.UI.prototype.VIEW.AUTOPLAY_MUTED);
        } else {
          this.ui.setView(html5Player.UI.prototype.VIEW.PLAYING);
        }
      } else {
        this.ui.setView(html5Player.UI.prototype.VIEW.PLAYING);
      }
      this.core.single('buffering', (function(_this) {
        return function() {
          _this.ui.setView(html5Player.UI.prototype.VIEW.LOADING);
          return _this.preloadDefer.load.done(function() {
            _this.core.sync();
            if (_this.state === _this.STATE.PLAYING) {
              return _this.playLoop();
            }
          });
        };
      })(this));
      this.core.single("browser-audio-autoplay-blocked", (function(_this) {
        return function() {
          return _this.ui.setView(html5Player.UI.prototype.VIEW.AUTOPLAY_MUTED);
        };
      })(this));
      this.core.single("browser-video-autoplay-blocked", (function(_this) {
        return function() {
          _this.changeState(_this.STATE.PAUSED);
          _this.ui.setView(html5Player.UI.prototype.VIEW.BROWSER_MUTED);
          return _this.ui.showFinger();
        };
      })(this));
      this.core.play();
      this.notifyAboutView();
      return this.dispatcher && this.dispatcher.startedPlaying();
    };

    Html5Player.prototype.changeState = function(state) {
      var key, ref, value;
      console.log(this.DT, "Change state to", state);
      this.state = state;
      ref = this.STATE;
      for (key in ref) {
        value = ref[key];
        this.vb.removeClass("-state-" + value);
      }
      this.vb.addClass("-state-" + state);
      return this.tryToShowAd();
    };

    Html5Player.prototype.tryToShowAd = function() {
      if (this.adManager != null) {
        if (this.state === "playing") {
          return this.adManager.showAd();
        }
      }
    };

    Html5Player.prototype.isEmbedAdsEnabled = function() {
      return this.isEmbed && !helpers.Location.isAdsDisabled();
    };

    Html5Player.prototype.isSiteAdsEnabled = function() {
      return !this.isEmbed;
    };

    Html5Player.prototype.isAdOverlayEnabled = function() {
      var isSmallCard;
      isSmallCard = this.opts && this.opts.cardType === "small";
      return !this.noControls && this.data.is_safe_for_ads && !isSmallCard && !GlobalState.PAGE.isChatPage() && (this.isEmbedAdsEnabled() || helpers.Location.isVkontakteEmbed() || this.isSiteAdsEnabled());
    };

    Html5Player.prototype.isPrerollEnabled = function() {
      return !this.noControls && this.data.is_safe_for_ads && html5Player.Preroll.isEnabled() && ((this.isEmbedAdsEnabled() && !this.isAutoplay) || helpers.Location.isVkontakteEmbed());
    };

    Html5Player.prototype.notifyAboutView = function() {
      var promotedData;
      if (this.notifedAboutView) {
        return;
      }
      this.notifedAboutView = true;
      StatsDataProvider.coubIncrementViews(this.data.permalink, 'html5', this.isEmbed);
      if (this.data && this.data.render && (promotedData = this.data.render.promoted)) {
        return $.post(Routes.increment_views_api_v2_promoted_coub_path(promotedData.id), {
          token: promotedData.token
        });
      }
    };

    Html5Player.sendAnalytics = function(event) {
      var event_name, suffix;
      suffix = GlobalState.PAGE.isEmbed() ? "embed" : "site";
      event_name = "player_" + suffix + "_" + event;
      window.ym && ym(48571952, "reachGoal", event_name);
      return window.ga && ga("send", "event", event_name);
    };

    return Html5Player;

  })();

}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  html5Player.BaseOverlay = (function() {
    function BaseOverlay() {
      this.setElementSize = bind(this.setElementSize, this);
      this.onOverlayClick = bind(this.onOverlayClick, this);
      this.trackStatPixel = bind(this.trackStatPixel, this);
      this.trackStat = bind(this.trackStat, this);
      this.getOverlayTemplate = bind(this.getOverlayTemplate, this);
      this.s = this.constructor;
      this.init();
    }

    BaseOverlay.prototype.getOverlayTemplate = function(w, h) {
      var src;
      src = this.data["img" + w + "x" + h];
      return "<img src=" + src + " width=" + w + " height=" + h + ">";
    };

    BaseOverlay.prototype.trackStat = function(type) {
      var i, len, p, results, stat;
      stat = this.data.pixels[type];
      if (_.isArray(stat)) {
        results = [];
        for (i = 0, len = stat.length; i < len; i++) {
          p = stat[i];
          results.push(this.trackStatPixel(p));
        }
        return results;
      } else {
        if (stat != null) {
          return this.trackStatPixel(stat);
        }
      }
    };

    BaseOverlay.prototype.trackStatPixel = function(url) {
      if (url.indexOf('/api/v2/bs/') !== -1) {
        return $.post(url);
      } else {
        return $('body').append("<img src=" + url + " style='position:absolute;left:-10000px'>");
      }
    };

    BaseOverlay.prototype.onOverlayClick = function() {
      this.trackStat("click");
      return window.open(this.data.clickUrl, '_blank');
    };

    BaseOverlay.prototype.setElementSize = function(w, h) {
      return this.el.css({
        width: w + "px",
        height: h + "px"
      });
    };

    return BaseOverlay;

  })();

}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  html5Player.CustomOverlay = (function(superClass) {
    extend(CustomOverlay, superClass);

    CustomOverlay.SCHEMA = [[600, 100], [400, 100], [240, 100]];

    function CustomOverlay(el, closeBtn, data) {
      this.el = el;
      this.closeBtn = closeBtn;
      this.data = data;
      this.init = bind(this.init, this);
      CustomOverlay.__super__.constructor.apply(this, arguments);
    }

    CustomOverlay.prototype.init = function() {
      var banner, i, j, len, overlay, ref, w;
      w = this.el.width();
      ref = this.s.SCHEMA;
      for (j = 0, len = ref.length; j < len; j++) {
        i = ref[j];
        if (w >= i[0]) {
          overlay = {
            width: i[0],
            height: i[1]
          };
          break;
        }
      }
      if (!overlay) {
        return;
      }
      banner = $(this.getOverlayTemplate(overlay.width, overlay.height));
      this.el.append(banner).append(this.closeBtn);
      this.setElementSize(overlay.width, overlay.height);
      this.trackStat("view");
      return banner.click((function(_this) {
        return function() {
          return _this.onOverlayClick();
        };
      })(this));
    };

    return CustomOverlay;

  })(html5Player.BaseOverlay);

}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  html5Player.EmbedAds = (function() {
    EmbedAds.prototype.EVENT_BANNER_SHOWN = "Html5Player::EmbedAds::BannerShown";

    EmbedAds.prototype.EVENT_BANNER_CLOSED = "Html5Player::EmbedAds::BannerClosed";

    EmbedAds.prototype.EVENT_BANNER_FAIL = "Html5Player::EmbedAds::BannerFail";

    EmbedAds.prototype.OVERLAYS = {};

    function EmbedAds(ui, data1) {
      this.ui = ui;
      this.data = data1;
      this.showCloseButton = bind(this.showCloseButton, this);
      this.clear = bind(this.clear, this);
      this.showNextAd = bind(this.showNextAd, this);
      this.showAd = bind(this.showAd, this);
      this.getAvailableHeight = bind(this.getAvailableHeight, this);
      this.showLocalAdfox = bind(this.showLocalAdfox, this);
      this.showMegaAdfox = bind(this.showMegaAdfox, this);
      this.showRoxot = bind(this.showRoxot, this);
      this.showCoubOverlay = bind(this.showCoubOverlay, this);
      this.showCriteo = bind(this.showCriteo, this);
      this.showAdfoxCustom = bind(this.showAdfoxCustom, this);
      this.showEmbeddedOverlay = bind(this.showEmbeddedOverlay, this);
      this.showGoogleVpaidOverlay = bind(this.showGoogleVpaidOverlay, this);
      this.appearAnimation = bind(this.appearAnimation, this);
      this.initAppearAnimation = bind(this.initAppearAnimation, this);
      this.init = bind(this.init, this);
      this.vb = this.ui.vb;
      this.player = $('.viewer__player', this.vb);
      this.$el = this.ui.adsBlock.find('.viewer__das__banner');
      this.isEmbed = this.ui.isEmbed;
      this.init();
      this.queue = [this.showLocalAdfox];
      if (this.data.permalink === 'cdj3r' || (window.env === 'development' && this.data.permalink === '4ac7')) {
        this.queue = [this.showGoogleVpaidOverlay];
      } else if (GlobalState.PAGE.forceRoxotAds()) {
        this.queue = [this.showRoxot];
      } else if (GlobalState.PAGE.forceLocalAdfoxAds()) {
        this.queue = [this.showLocalAdfox];
      }
    }

    EmbedAds.prototype.init = function() {
      this.$closeBtn = $('.viewer__das__close', this.$el);
      $('div', this.$closeBtn).click((function(_this) {
        return function() {
          _this.$el.hide();
          return _this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_CLOSED);
        };
      })(this));
      this.vb.on(html5Player.EmbedAds.prototype.EVENT_BANNER_FAIL, this.clear);
      this.vb.on(html5Player.EmbedAds.prototype.EVENT_BANNER_SHOWN, this.showCloseButton);
      return this.vb.on(html5Player.EmbedAds.prototype.EVENT_BANNER_SHOWN, this.initAppearAnimation);
    };

    EmbedAds.prototype.initAppearAnimation = function() {
      this.ui.adsBlock.css("margin-bottom", "-" + (this.ui.adsBlock.offsetParent().height() - this.ui.adsBlock.position().top + 100) + "px");
      setTimeout(this.appearAnimation, 50);
      return this.vb.one("hover", this.appearAnimation);
    };

    EmbedAds.prototype.appearAnimation = function() {
      if (this.vb.hasClass("-visible-controls")) {
        this.ui.adsBlock.addClass("viewer__das__animated");
        return this.ui.adsBlock.css("margin-bottom", "0px");
      }
    };

    EmbedAds.prototype.showGoogleVpaidOverlay = function() {
      var adContainerElement, adDisplayContainer, adsLoader, adsRequest, onAdError, onAdsManagerLoaded, videoContent;
      if (!window.google || !window.google.ima) {
        return this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_FAIL);
      }
      onAdError = (function(_this) {
        return function(e) {
          console.log('GoogleVPAID.onAdError', e);
          _this.googleAdsContainer.remove();
          _this.adsManager = null;
          _this.player.trigger('play');
          return _this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_FAIL);
        };
      })(this);
      onAdsManagerLoaded = (function(_this) {
        return function(e) {
          var adsRenderingSettings, mode, onAdEvent;
          console.log('onAdsManagerLoaded', e);
          onAdEvent = function(e) {
            console.log('onAdEvent', e);
            if (e.type === 'loaded') {
              _this.player.trigger('pause');
              return _this.googleAdsContainer.css({
                'pointer-events': 'auto'
              });
            } else if (e.type === 'start') {

            } else if (e.type === 'complete' || e.type === 'skip') {
              _this.googleAdsContainer.remove();
              _this.player.trigger('play');
              return _this.adsManager = null;
            }
          };
          adsRenderingSettings = new google.ima.AdsRenderingSettings();
          adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
          adsRenderingSettings.useStyledNonLinearAds = true;
          _this.adsManager = e.getAdsManager(videoContent, adsRenderingSettings);
          _this.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);
          _this.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, onAdEvent);
          _this.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, onAdEvent);
          _this.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, onAdEvent);
          _this.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, onAdEvent);
          mode = helpers.Location.isFullScreen() ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL;
          _this.adsManager.init(_this.googleAdsContainer.width(), _this.googleAdsContainer.height(), mode);
          return _this.adsManager.start();
        };
      })(this);
      this.googleAdsContainer = $('<div style="width:100%;height:100%;pointer-events:none"/>').appendTo(this.ui.controlsContainer);
      console.log(123123, this.googleAdsContainer);
      google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.INSECURE);
      adContainerElement = this.googleAdsContainer.get(0);
      videoContent = $('video', this.player).get(0);
      adDisplayContainer = new google.ima.AdDisplayContainer(adContainerElement, videoContent);
      adsLoader = new google.ima.AdsLoader(adDisplayContainer);
      adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, onAdsManagerLoaded, false);
      adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError, false);
      adsRequest = new google.ima.AdsRequest();
      adsRequest.adTagUrl = '//ima3vpaid.appspot.com/?adTagUrl=http%3A%2F%2Fgoogleads.g.doubleclick.net%2Fpagead%2Fads%3Fad_type%3Dvideo%26client%3Dca-video-pub-4968145218643279%26videoad_start_delay%3D0%26description_url%3Dhttp%253A%252F%252Fwww.youtube.com%26hl%3Den%26max_ad_duration%3D40000%26adtest%3Don&type=js';
      adsRequest.nonLinearAdSlotWidth = 640;
      adsRequest.nonLinearAdSlotHeight = 100;
      adDisplayContainer.initialize();
      return adsLoader.requestAds(adsRequest);
    };

    EmbedAds.prototype.resize = function() {
      var mode;
      if (this.adsManager) {
        mode = helpers.Location.isFullScreen() ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL;
        return this.adsManager.resize(this.googleAdsContainer.width(), this.googleAdsContainer.height(), mode);
      }
    };

    EmbedAds.prototype.showEmbeddedOverlay = function() {
      var promoWinnerId;
      promoWinnerId = _.chain(this.data.promo_winner_recoubers).last().first().value();
      if (promoWinnerId) {
        return $.get("/api/v2/bg/" + promoWinnerId).done((function(_this) {
          return function(overlay) {
            var data, uid;
            uid = helpers.Ads.getUniqId();
            data = {
              img240x100: overlay.image240x100,
              img400x100: overlay.image400x100,
              img600x100: overlay.image600x100,
              clickUrl: "/api/v2/bc/" + overlay.uuid + "?uid=" + uid,
              pixels: {
                click: null,
                view: "/api/v2/bs/" + overlay.uuid + "?uid=" + uid
              }
            };
            new html5Player.CustomOverlay(_this.ui.customOverlayContainer, _this.$closeBtn, data);
            return _this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_SHOWN);
          };
        })(this)).fail((function(_this) {
          return function() {
            return _this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_FAIL);
          };
        })(this));
      } else {
        return this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_FAIL);
      }
    };

    EmbedAds.prototype.showAdfoxCustom = function() {
      return $.ajax({
        url: '//ads.adfox.ru/214153/getCode?pp=h&ps=bkuu&p2=fmlo',
        dataType: 'xml',
        xhrFields: {
          withCredentials: true
        },
        success: (function(_this) {
          return function(r) {
            var banner, cls, data, h, i, images, j, len, pixels, ref, w;
            banner = $('banner', r);
            switch ($('> type', banner).text()) {
              case 'custom':
                cls = html5Player.CustomOverlay;
                break;
              case 'expanded':
                cls = html5Player.ExpandedOverlay;
                break;
              default:
                _this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_FAIL);
                return;
            }
            console.log("AdfoxCustom", r);
            data = {
              clickUrl: $('> click_url', banner).text(),
              pixels: {
                click: [],
                view: []
              }
            };
            images = $('> images', banner);
            ref = cls.SCHEMA;
            for (j = 0, len = ref.length; j < len; j++) {
              i = ref[j];
              w = i[0];
              h = i[1];
              data["img" + w + "x" + h] = $("> image" + w + "x" + h, images).text();
            }
            pixels = $('> pixels', banner);
            $('> show > pixel', pixels).each(function(i, el) {
              return data.pixels.view.push($(el).text());
            });
            $('> click > pixel', pixels).each(function(i, el) {
              return data.pixels.click.push($(el).text());
            });
            new cls(_this.ui.customOverlayContainer, _this.$closeBtn, data, _this.getAvailableHeight());
            return _this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_SHOWN);
          };
        })(this),
        error: (function(_this) {
          return function(e) {
            console.error(e);
            return _this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_FAIL);
          };
        })(this)
      });
    };

    EmbedAds.prototype.showCriteo = function() {
      if (this.player.width() < 350) {
        this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_FAIL);
        return;
      }
      return $.ajax({
        type: "GET",
        url: '//cas.criteo.com/delivery/0.1/napi.json?zoneid=761457',
        xhrFields: {
          withCredentials: true
        },
        success: (function(_this) {
          return function(r) {
            var data, p;
            console.log("CRITEO", r);
            if (r.response_status !== 0) {
              _this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_FAIL);
              return;
            }
            p = r.products[0];
            data = {
              image_url: p.image.url,
              title: p.title,
              description: p.description,
              bottom_text: p.price,
              criteo_about_text: r.advertiser.legal_text,
              criteo_about_url: r.privacy.optout_click_url,
              click_url: p.click_url,
              view_url: r.impression_pixels
            };
            new html5Player.WhiteOverlay(_this.ui.customOverlayContainer, _this.$closeBtn, data, _this.vb);
            return _this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_SHOWN);
          };
        })(this),
        error: (function(_this) {
          return function() {
            return _this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_FAIL);
          };
        })(this)
      });
    };

    EmbedAds.prototype.createCustomOverlay = function(overlays, cls) {
      var data, h, j, k, len, len1, ref, schema, type, v, w;
      data = {
        clickUrl: overlays[0].urlToNavigateOnClick,
        pixels: {
          click: [],
          view: []
        }
      };
      if (overlays.find((function(_this) {
        return function(v) {
          return v.width === 500;
        };
      })(this))) {
        cls.SCHEMA[1] = [500, 100];
      }
      schema = cls.SCHEMA;
      for (j = 0, len = schema.length; j < len; j++) {
        type = schema[j];
        w = type[0];
        h = type[1];
        data["img" + w + "x" + h] = overlays.find((function(_this) {
          return function(v) {
            return v.width === w && v.height === h;
          };
        })(this)).src;
      }
      ref = overlays[0].statistics;
      for (k = 0, len1 = ref.length; k < len1; k++) {
        v = ref[k];
        switch (v.type) {
          case "playbackStarted":
            data.pixels.view.push(v.url);
            break;
          case "click":
            data.pixels.click.push(v.url);
        }
      }
      new cls(this.ui.customOverlayContainer, this.$closeBtn, data, this.getAvailableHeight());
      return this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_SHOWN);
    };

    EmbedAds.prototype.showCoubOverlay = function() {
      var day, dt, last_show_at, max_shows_per_day, overlay_data, shows, t, uid;
      day = 60 * 60 * 24 * 1000;
      max_shows_per_day = GlobalState.COUNTRY.isRussia() ? 0 : 0;
      t = new Date().getTime();
      uid = helpers.Ads.getUniqId();
      last_show_at = $.cookie('coub_overlay_last_show_at');
      dt = last_show_at ? t - last_show_at : day + 1;
      shows = dt > day ? 0 : parseInt($.cookie('coub_overlay_show')) || 0;
      if (shows >= max_shows_per_day) {
        return this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_FAIL);
      }
      if (!overlay_data) {
        return this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_FAIL);
      }
      overlay_data = $.extend(true, {}, overlay_data);
      overlay_data.clickUrl += uid;
      overlay_data.pixels.view += uid;
      new html5Player.CustomOverlay(this.ui.customOverlayContainer, this.$closeBtn, overlay_data);
      shows++;
      $.cookie('coub_overlay_last_show_at', t, {
        expires: 1,
        path: '/'
      });
      $.cookie('coub_overlay_show', shows, {
        expires: 1,
        path: '/'
      });
      return this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_SHOWN);
    };

    EmbedAds.prototype.showRoxot = function() {
      var bannerHeight, bannerWidth, containerWidth, id, ratio;
      window.rom || (window.rom = {
        cmd: []
      });
      console.log("[DEBUG]", "roxot overlay request");
      id = "roxot-overlay-" + (Date.now());
      this.ui.customOverlayContainer.attr({
        id: id
      });
      this.ui.bannerContainer.css({
        'max-width': 'none'
      });
      bannerWidth = 728;
      bannerHeight = 90;
      containerWidth = this.ui.customOverlayContainer.width();
      if (bannerWidth > containerWidth) {
        ratio = containerWidth / bannerWidth;
        this.ui.customOverlayContainer.css({
          width: bannerWidth + "px",
          transform: "scale(" + ratio + ")",
          'transform-origin': 'bottom left'
        });
        this.$closeBtn.css({
          'margin-top': (bannerHeight * (1 - ratio)) + "px"
        });
      } else {
        this.ui.bannerContainer.css({
          display: 'inline-block'
        });
      }
      setTimeout((function(_this) {
        return function() {
          if (_this.roxotState === "loaded") {
            return;
          }
          _this.roxotState = "failed";
          _this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_FAIL);
          return console.log("[DEBUG]", "roxot overlay failed");
        };
      })(this), 2000);
      return rom.cmd.push((function(_this) {
        return function() {
          if (_this.roxotState === "failed") {
            return;
          }
          rom.displayPlacement(id, '8fc0999b-1c6e-42c3-8391-5e03abea6b80');
          _this.roxotState = "loaded";
          _this.$closeBtn.addClass('-big-area');
          _this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_SHOWN);
          return console.log("[DEBUG]", "roxot overlay shown");
        };
      })(this));
    };

    EmbedAds.prototype.showMegaAdfox = function() {
      var containerId, params, targetWidth, width;
      if (!window.Ya || !window.Ya.adfoxCode) {
        return this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_FAIL);
      }
      containerId = "adfox_" + (Date.now());
      this.ui.customOverlayContainer.attr("id", containerId);
      width = this.ui.customOverlayContainer.width();
      if (width >= 600) {
        targetWidth = 600;
        params = {
          p1: "clpuy",
          p2: "gwqv"
        };
      } else if (width >= 400) {
        targetWidth = 400;
        params = {
          p1: "clpux",
          p2: "gwqu"
        };
      } else if (width >= 240) {
        targetWidth = 240;
        params = {
          p1: "clfyk",
          p2: "gwhs"
        };
      } else {
        return this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_FAIL);
      }
      return window.Ya.adfoxCode.create({
        ownerId: 228129,
        containerId: containerId,
        params: params,
        onRender: (function(_this) {
          return function() {
            return _this.ui.customOverlayContainer.width(targetWidth).append(_this.$closeBtn.removeClass("-hidden"));
          };
        })(this),
        onStub: (function(_this) {
          return function() {
            return _this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_FAIL);
          };
        })(this)
      });
    };

    EmbedAds.prototype.showLocalAdfox = function() {
      var bannerHeight, bannerWidth, containerWidth, id, onRender, onStub, ratio;
      if (!window.Ya || !window.Ya.adfoxCode || !window.Ya.headerBidding) {
        return this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_FAIL);
      }
      id = "adfox_local_overlay_" + (Date.now());
      this.ui.customOverlayContainer.attr({
        id: id
      });
      this.ui.bannerContainer.css({
        'max-width': 'none'
      });
      bannerWidth = 728;
      bannerHeight = 90;
      containerWidth = this.ui.customOverlayContainer.width();
      if (bannerWidth > containerWidth) {
        ratio = containerWidth / bannerWidth;
        this.ui.customOverlayContainer.css({
          width: bannerWidth + "px",
          transform: "scale(" + ratio + ")",
          'transform-origin': 'bottom left'
        });
        this.$closeBtn.css({
          'margin-top': (bannerHeight * (1 - ratio)) + "px"
        });
      } else {
        this.ui.bannerContainer.css({
          display: 'inline-block'
        });
      }
      onRender = (function(_this) {
        return function() {
          console.log('local adfox overlay render');
          _this.$closeBtn.addClass('-big-area');
          return _this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_SHOWN);
        };
      })(this);
      onStub = (function(_this) {
        return function() {
          console.log('local adfox overlay stub');
          _this.ui.customOverlayContainer.removeAttr('id').css({
            width: '',
            transform: '',
            'transform-origin': ''
          });
          _this.$closeBtn.css({
            'margin-top': ''
          });
          _this.ui.bannerContainer.css({
            'max-width': '',
            display: ''
          });
          return _this.vb.triggerHandler(html5Player.EmbedAds.prototype.EVENT_BANNER_FAIL);
        };
      })(this);
      return window.Ya.adfoxCode.create({
        ownerId: 228129,
        containerId: id,
        params: {
          p1: 'cozph',
          p2: 'hfax'
        },
        onRender: onRender,
        onStub: onStub
      });
    };

    EmbedAds.prototype.getAvailableHeight = function() {
      return this.ui.vb.height() - parseInt(this.ui.adsBlock.css('bottom'));
    };

    EmbedAds.prototype.showAd = function() {
      if (!this.isShowed) {
        this.isShowed = true;
        this.vb.on(html5Player.EmbedAds.prototype.EVENT_BANNER_FAIL, this.showNextAd);
        return this.showNextAd();
      }
    };

    EmbedAds.prototype.showNextAd = function() {
      var fn;
      if (this.queue.length === 0) {
        return;
      }
      fn = this.queue.shift();
      return fn();
    };

    EmbedAds.prototype.clear = function() {
      return this.$el.find(".-removeable").remove();
    };

    EmbedAds.prototype.showCloseButton = function() {
      return this.$closeBtn.removeClass('-hidden');
    };

    EmbedAds.prototype.isNSFWCoub = function() {
      return this.data.age_restricted || this.data.age_restricted_by_admin || this.data.not_safe_for_work || _.some(this.data.categories, function(category) {
        return category.permalink === 'nsfw';
      });
    };

    return EmbedAds;

  })();

}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  html5Player.ExpandedOverlay = (function(superClass) {
    extend(ExpandedOverlay, superClass);

    ExpandedOverlay.DT = "html5Player.ExpandedOverlay";

    ExpandedOverlay.SCHEMA = [[600, 300], [600, 100], [400, 200], [400, 100], [240, 160], [240, 100]];

    function ExpandedOverlay(el, closeBtn, data, availableHeight) {
      this.el = el;
      this.closeBtn = closeBtn;
      this.data = data;
      this.availableHeight = availableHeight;
      this.init = bind(this.init, this);
      ExpandedOverlay.__super__.constructor.apply(this, arguments);
    }

    ExpandedOverlay.prototype.init = function() {
      var big, bigOverlay, foldBtn, i, item, len, o, ref, small, smallOverlay, w;
      w = this.el.width();
      ref = this.s.SCHEMA;
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
        if (w >= item[0]) {
          o = _.where(this.s.SCHEMA, {
            0: item[0]
          });
          big = {
            width: o[0][0],
            height: o[0][1]
          };
          small = {
            width: o[1][0],
            height: o[1][1]
          };
          break;
        }
      }
      if (!o) {
        return;
      }
      console.log(this.s.DT, big, small, w, this.availableHeight);
      smallOverlay = $(this.getOverlayTemplate(small.width, small.height));
      smallOverlay.click((function(_this) {
        return function() {
          return _this.onOverlayClick();
        };
      })(this));
      if (this.availableHeight >= big.height) {
        console.log(this.s.DT, "fit");
        bigOverlay = $(this.getOverlayTemplate(big.width, big.height));
        foldBtn = $('.banner-fold', this.el);
        foldBtn.removeClass('-hidden');
        this.closeBtn.addClass('-force-hidden');
        this.setElementSize(big.width, big.height);
        this.el.append(bigOverlay).append(this.closeBtn).append(foldBtn);
        bigOverlay.click((function(_this) {
          return function() {
            return _this.onOverlayClick();
          };
        })(this));
        foldBtn.click((function(_this) {
          return function() {
            foldBtn.addClass('-hidden');
            _this.closeBtn.removeClass('-force-hidden');
            bigOverlay.replaceWith(smallOverlay);
            return _this.setElementSize(small.width, small.height);
          };
        })(this));
      } else {
        console.log(this.s.DT, "not fit");
        this.setElementSize(small.width, small.height);
        this.el.append(smallOverlay).append(this.closeBtn);
      }
      return this.trackStat("view");
    };

    return ExpandedOverlay;

  })(html5Player.BaseOverlay);

}).call(this);
(function() {
  html5Player.Preroll = (function() {
    Preroll.prototype.EVENT_PREROLL_SHOWN = "Html5Player::Preroll::PrerollShown";

    Preroll.prototype.EVENT_PREROLL_CLOSED = "Html5Player::Preroll::PrerollClosed";

    Preroll.prototype.EVENT_PREROLL_FAILED = "Html5Player::Preroll::PrerollFail";

    Preroll.prototype.EVENT_PREROLL_COMPLETED = "Html5Player::Preroll::PrerollCompleted";

    function Preroll(data1, ui1) {
      this.data = data1;
      this.ui = ui1;
      this.vb = this.ui.vb;
      this.locker = new chms.utils.Locker();
      this.prerollBlock = this.ui.prerollBlock;
      this.skipButton = $('.preroll__controls--skip-button', this.controls);
      this.bar = $('.preroll__controls--bar', this.controls);
      this.timer = $('.preroll__controls--timer', this.controls);
      this.init();
      html5Player.Preroll.toggle(false);
    }

    Preroll.prototype.init = function() {
      throw "Not Implemented";
    };

    Preroll.prototype.destroy = function() {
      return true;
    };

    Preroll.prototype.sharedState = {
      prerollType: "vast",
      prerollDisabled: false,
      shownTimes: 0
    };

    Preroll.prototype.dispatchAndUnlock = function(eventName) {
      this.locker.unlock();
      return this.vb.triggerHandler(eventName);
    };

    Preroll.prototype.onAdStart = function() {
      this.sharedState.shownTimes++;
      this.toggleVisibility(true);
      return this.vb.triggerHandler(this.EVENT_PREROLL_SHOWN);
    };

    Preroll.prototype.onAdEnd = function() {
      this.toggleVisibility(false);
      return this.dispatchAndUnlock(this.EVENT_PREROLL_COMPLETED);
    };

    Preroll.prototype.onAdSkip = function() {
      this.toggleVisibility(false);
      return this.dispatchAndUnlock(this.EVENT_PREROLL_CLOSED);
    };

    Preroll.prototype.toggleVisibility = function(val) {
      return this.prerollBlock.add(this.adBlock).toggleClass("-hidden", !val);
    };

    Preroll.getInstance = function(data, ui) {
      return new html5Player.VastPreroll(data, ui);
    };

    Preroll.setPrerollType = function(val) {
      return this.prototype.sharedState.prerollType = val;
    };

    Preroll.toggle = function(val) {
      return this.prototype.sharedState.prerollDisabled = !val;
    };

    Preroll.isEnabled = function() {
      !this.prototype.sharedState.prerollDisabled;
      return false;
    };

    Preroll.getShownTimes = function() {
      return this.prototype.sharedState.shownTimes || 0;
    };

    return Preroll;

  })();

}).call(this);
(function() {
  html5Player.SimpleOverlay = (function() {
    function SimpleOverlay(el, data) {
      var banner;
      this.el = el;
      this.data = data;
      banner = $(this.getTemplate(this.data.img, this.data.title));
      this.el.append(banner);
      banner.click((function(_this) {
        return function() {
          return window.open(_this.data.clickUrl, '_blank');
        };
      })(this));
    }

    SimpleOverlay.prototype.getTemplate = function(src, text) {
      return "<div class=\"html5-player-simple-overlay\">\n  <img src=\"" + src + "\"></img>\n  <p>" + text + "</p>\n</div>";
    };

    return SimpleOverlay;

  })();

}).call(this);
(function() {
  html5Player.WhiteOverlay = (function() {
    function WhiteOverlay(el, closeBtn, data, vb) {
      var banner;
      this.el = el;
      this.closeBtn = closeBtn;
      this.data = data;
      this.vb = vb;
      banner = $(this.getTemplate());
      banner.append(this.closeBtn);
      this.el.append(banner);
      if (!this.data.bottom_img) {
        $('.bottom img', banner).remove();
      }
      if (!this.data.bottom_text) {
        $('.bottom span', banner).remove();
      }
      if (this.data.criteo_about_text) {
        this.initCriteoInfo();
      }
      this.initShowTracking();
    }

    WhiteOverlay.prototype.initCriteoInfo = function() {
      var aboutText, expandedText, info;
      info = $('.criteo-info', this.el);
      info.removeClass('-hidden');
      aboutText = $('.info-text-hoverable', info);
      expandedText = $('.info-expanded', info);
      aboutText.mouseover((function(_this) {
        return function() {
          var p, pMin;
          aboutText.addClass('-hidden');
          expandedText.removeClass('-hidden').css({
            padding: 0,
            width: 'auto'
          });
          pMin = 5;
          p = (expandedText.offset().left - _this.el.offset().left) / 2;
          if (p > pMin) {
            return expandedText.css({
              padding: "5px " + p + "px 5px " + p + "px"
            });
          } else {
            return expandedText.css({
              width: (expandedText.width() + p * 2) + "px",
              padding: "5px " + pMin + "px 5px " + pMin + "px"
            });
          }
        };
      })(this));
      return expandedText.mouseout((function(_this) {
        return function() {
          aboutText.removeClass('-hidden');
          return expandedText.addClass('-hidden');
        };
      })(this));
    };

    WhiteOverlay.prototype.initShowTracking = function() {
      this.vb.on(Player.EVENT_PLAYING, (function(_this) {
        return function() {
          return _this.startVisibilityCheck();
        };
      })(this));
      this.vb.on(Player.EVENT_PAUSED, (function(_this) {
        return function() {
          return _this.stopVisibilityCheck();
        };
      })(this));
      return this.startVisibilityCheck();
    };

    WhiteOverlay.prototype.startVisibilityCheck = function() {
      if (this.hasShowed || this.interval) {
        return;
      }
      return this.interval = setInterval((function(_this) {
        return function() {
          if (_this.isOverlayVisible()) {
            return _this.onShow();
          }
        };
      })(this), 190);
    };

    WhiteOverlay.prototype.stopVisibilityCheck = function() {
      return clearInterval(this.interval);
    };

    WhiteOverlay.prototype.isOverlayVisible = function() {
      return this.vb.hasClass('-visible-controls') && this.vb.filter('.-changer-mode, .-ui-state-autoplay_muted').length === 0;
    };

    WhiteOverlay.prototype.onShow = function() {
      var i, len, p, ref, results;
      this.hasShowed = true;
      this.stopVisibilityCheck();
      if (_.isArray(this.data.view_url)) {
        ref = this.data.view_url;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          p = ref[i];
          results.push(this.trackPixel(p.url));
        }
        return results;
      } else {
        return this.trackPixel(this.data.view_url);
      }
    };

    WhiteOverlay.prototype.trackPixel = function(p) {
      return $('body').append("<img src=" + p + " width=0 height=0/>");
    };

    WhiteOverlay.prototype.getTemplate = function() {
      return "<div class=\"html5-player__white-overlay\">\n  <a href=" + this.data.click_url + " target=\"_blank\">\n    <div class=\"img\" style=\"background-image:url(" + this.data.image_url + ")\"></div>\n    <div class=\"content -color--black\">\n      <div class=\"title hbold\">" + this.data.title + "</div>\n      <div class=\"description\">" + this.data.description + "</div>\n      <div class=\"bottom\">\n        <span>" + this.data.bottom_text + "</span>\n        <img src=" + (this.data.bottom_img || '') + " />\n      </div>\n    </div>\n  </a>\n  <div class=\"criteo-info -hidden\">\n    <a href=" + this.data.criteo_about_url + " target=\"_blank\">\n      <div class=\"info-expanded -hidden\">\n        <div>" + this.data.criteo_about_text + "</div>\n      </div>\n      <div class=\"info-text-hoverable\">О компании</div>\n      <div class=\"info-text\">AdChoices</div>\n      <div class=\"info-icon\"></div>\n    </a>\n  </div>\n</div>";
    };

    return WhiteOverlay;

  })();

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  html5Player.VastPreroll = (function(superClass) {
    extend(VastPreroll, superClass);

    function VastPreroll() {
      return VastPreroll.__super__.constructor.apply(this, arguments);
    }

    VastPreroll.prototype.init = function() {
      if (!window.google || !window.google.ima) {
        _.defer((function(_this) {
          return function() {
            console.error("VAST ERROR", "IMA SDK is absent");
            return _this.dispatchAndUnlock(_this.EVENT_PREROLL_FAILED);
          };
        })(this));
        return;
      }
      this.locker.lock();
      this.adBlock = this.prerollBlock.find(".vast-ad-preroll");
      this.adsQueue = [];
      return this.requestAd(this.getPladformUrl());
    };

    VastPreroll.prototype.requestAd = function(vastUrl) {
      var adDisplayContainer, adsLoader, adsRequest, onAdError, onAdsManagerLoaded;
      this.adBlock.empty();
      adDisplayContainer = new google.ima.AdDisplayContainer(this.adBlock.get(0));
      adDisplayContainer.initialize();
      onAdError = (function(_this) {
        return function(e) {
          console.error("VAST ERROR", e.getError());
          if (_this.adsQueue.length && helpers.Location.isVkontakteEmbed()) {
            return _this.requestAd(_this.adsQueue.shift()());
          } else {
            return _this.dispatchAndUnlock(_this.EVENT_PREROLL_FAILED);
          }
        };
      })(this);
      onAdsManagerLoaded = (function(_this) {
        return function(adsManagerLoadedEvent) {
          var adError, adsManager, adsRenderingSettings;
          adsRenderingSettings = new google.ima.AdsRenderingSettings();
          adsRenderingSettings.uiElements = [google.ima.UiElements.COUNTDOWN, google.ima.UiElements.AD_ATTRIBUTION];
          adsManager = adsManagerLoadedEvent.getAdsManager({
            currentTime: 0
          }, adsRenderingSettings);
          adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);
          adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, _this.onAdEnd.bind(_this));
          adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, function(e) {
            return $(window).on('focus.vastPreroll visibilitychange.vastPreroll', (function() {
              if (document.hidden) {
                return;
              }
              $(window).off('focus.vastPreroll visibilitychange.vastPreroll');
              return this.resume();
            }).bind(e.target));
          });
          adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, function() {
            return $(window).off('focus.vastPreroll visibilitychange.vastPreroll');
          });
          adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, function() {
            return $(window).off('focus.vastPreroll visibilitychange.vastPreroll');
          });
          try {
            adsManager.init(_this.prerollBlock.width(), _this.prerollBlock.height(), google.ima.ViewMode.NORMAL);
            adsManager.start();
            return _this.onAdStart();
          } catch (error) {
            adError = error;
            return console.error("VAST ERROR", adError);
          }
        };
      })(this);
      adsLoader = new google.ima.AdsLoader(adDisplayContainer);
      adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, onAdsManagerLoaded, false);
      adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError, false);
      adsRequest = new google.ima.AdsRequest();
      adsRequest.adTagUrl = vastUrl;
      return adsLoader.requestAds(adsRequest);
    };

    VastPreroll.prototype.makeUrl = function(baseUrl, params) {
      var urlParams;
      urlParams = _.chain(params).map(function(v, k) {
        if ((v == null) || v === "") {
          return;
        }
        return k + "=" + (encodeURIComponent(v));
      }).compact().join("&").value();
      return baseUrl + "&" + urlParams;
    };

    VastPreroll.prototype.getMailUrl = function() {
      return this.makeUrl("https://ad.mail.ru/vast/3930?puid1=69&puid2=17&puid3=1", {
        duration: Math.floor(this.data.duration),
        dl: GlobalState.PAGE.getReferrer(),
        preview: getQueryParameters().preview
      });
    };

    VastPreroll.prototype.getPladformUrl = function() {
      return this.makeUrl("https://out.pladform.ru/getVast?pl=110690&type=preroll&license=3&target=web-html5", {
        age: this.isAgeRestrictedCoub(this.data) ? 5 : 1,
        thematic: this.getPladformThematic(this.data.categories),
        duration: Math.floor(this.data.duration),
        dl: GlobalState.PAGE.getReferrer()
      });
    };

    VastPreroll.prototype.isAgeRestrictedCoub = function(coubData) {
      return coubData.age_restricted || coubData.age_restricted_by_admin || (_.some(coubData.categories, function(coubCategory) {
        return coubCategory.permalink === "nsfw";
      }));
    };

    VastPreroll.prototype.getPladformThematic = function(coubCategories) {
      var thematic, thematicsMap;
      thematicsMap = {
        "funny": 1098,
        "animals-pets": 592,
        "mashup": 1592,
        "anime": 687,
        "movies": 420,
        "gaming": 391,
        "cartoons": 688,
        "tv-series": 1762,
        "art": 8109,
        "music": 585,
        "news": 746,
        "sports": 957,
        "geek": 8110,
        "celebrity": 8109,
        "nature-travel": 8107,
        "fashion": 8106,
        "nsfw": 1196
      };
      thematic = null;
      _.some(coubCategories, function(coubCategory) {
        thematic = thematicsMap[coubCategory.permalink];
        if (thematic != null) {
          return true;
        }
      });
      return thematic;
    };

    return VastPreroll;

  })(html5Player.Preroll);

}).call(this);
(function() {
  html5Player.Favourites = (function() {
    Favourites.prototype.DT = 'html5Player.Favourites';

    function Favourites(coubId, coubPermalink, isAdded) {
      this.coubId = coubId;
      this.coubPermalink = coubPermalink;
      this.isAdded = isAdded;
      this.isLoading = false;
    }

    Favourites.prototype.toggle = function(onToggled) {
      if (this.isLoading) {
        return;
      }
      if (this.isAdded) {
        this.remove(onToggled);
      } else {
        this.add(onToggled);
      }
      return Html5Player.sendAnalytics("bookmark");
    };

    Favourites.prototype.add = function(onComplete) {
      console.log(this.DT, 'add');
      return this.createRequest('POST').done((function(_this) {
        return function(result) {
          console.log(_this.DT, 'add done', result);
          return _this.isAdded = true;
        };
      })(this)).fail((function(_this) {
        return function(error) {
          console.log(_this.DT, 'fail', error);
          if (error) {
            if (error.status === 422) {
              console.log(_this.DT, 'already added');
              return _this.isAdded = true;
            } else if (error.status === 403 || (window.env === 'development' && error.status === 500)) {
              console.log(_this.DT, 'unlogged');
              return _this.openLoginPage();
            }
          }
        };
      })(this)).always(onComplete);
    };

    Favourites.prototype.remove = function(onComplete) {
      console.log(this.DT, 'remove');
      return this.createRequest('DELETE').done((function(_this) {
        return function(result) {
          console.log(_this.DT, 'remove done', result);
          return _this.isAdded = false;
        };
      })(this)).fail((function(_this) {
        return function(error) {
          return console.log(_this.DT, 'remove fail', error);
        };
      })(this)).always(onComplete);
    };

    Favourites.prototype.createRequest = function(type) {
      this.isLoading = true;
      return $.ajax({
        url: '/api/v2/favourites',
        type: type,
        data: {
          id: this.coubId
        }
      }).always((function(_this) {
        return function() {
          return _this.isLoading = false;
        };
      })(this));
    };

    Favourites.prototype.openLoginPage = function() {
      return window.open("/view/" + this.coubPermalink + "#signupAndFav");
    };

    return Favourites;

  })();

}).call(this);
(function() {
  html5Player.MediaElementStrategy = (function() {
    function MediaElementStrategy(kind, isHD, el) {
      this.isHD = isHD;
      this.el = el;
      this.kind = kind;
      this.el || (this.el = this.createElement());
      this.destroyCalls = 0;
      this.setSrcCalls = 0;
    }

    MediaElementStrategy.prototype.destroy = function() {
      var e, ref;
      this.destroyCalls++;
      if (this.mediaSource) {
        this.mediaSource.removeEventListener("sourceopen", this.mediaSourceOpenListener);
      }
      if (this.sourceBuffer) {
        this.sourceBuffer.removeEventListener("updateend", this.bufferUpdateListener);
        if (this.sourceBuffer.updating) {
          this.sourceBuffer.abort();
        }
        try {
          this.mediaSource.removeSourceBuffer(this.sourceBuffer);
        } catch (error) {
          e = error;
          (typeof Honeybadger !== "undefined" && Honeybadger !== null) && Honeybadger.notify(e, {
            context: {
              msBuffers: this.mediaSource.sourceBuffers.length,
              destroyCalls: this.destroyCalls,
              setSrcCalls: this.setSrcCalls
            }
          });
        }
      }
      this.xhr && this.xhr.abort();
      URL.revokeObjectURL && URL.revokeObjectURL(this.el.attr('src'));
      this.el.removeAttr("src");
      this.el.get(0).load();
      this.el.remove();
      return ref = [], this.mediaSource = ref[0], this.sourceBuffer = ref[1], this.xhr = ref[2], this.el = ref[3], ref;
    };

    MediaElementStrategy.prototype.createElement = function() {
      if (this.kind === 'video') {
        return $("<video class='viewer__video' loop='loop' preload='auto' />");
      } else {
        return $("<audio preload='auto'></audio>");
      }
    };

    MediaElementStrategy.prototype.setSrc = function(src, size) {
      var MS, minChunkSize;
      this.setSrcCalls++;
      this.mimeCodec = this.getCodec();
      MS = window.MediaSource;
      if (MS && MS.isTypeSupported(this.mimeCodec)) {
        this.size = size;
        minChunkSize = this.kind === 'video' && 262144 || 131072;
        if (!this.isHD) {
          minChunkSize /= 2;
        }
        this.chunkSize = this.kind === 'video' ? Math.max(Math.ceil(this.size / 4), minChunkSize) : minChunkSize;
        return this.setMediaSource(src);
      } else {
        console.log("[PLAYER]", "media", this.kind, "fallback to media element");
        return this.setSource(src);
      }
    };

    MediaElementStrategy.prototype.getCodec = function() {
      if (this.kind === 'video') {
        return 'video/mp4; codecs="avc1.64001f"';
      } else {
        return 'audio/mpeg';
      }
    };

    MediaElementStrategy.prototype.fetchChunk = function(url, chunkNo, isFinalChunk) {
      var bytesRange, defer;
      defer = $.Deferred();
      this.xhr = new XMLHttpRequest();
      this.xhr.onload = (function(_this) {
        return function() {
          return defer.resolve(_this.xhr.response, chunkNo);
        };
      })(this);
      this.xhr.onerror = function() {
        return defer.reject();
      };
      this.xhr.onprogress = function(e) {
        return defer.notify(e.loaded / e.total);
      };
      bytesRange = ((chunkNo - 1) * this.chunkSize) + "-";
      if (!isFinalChunk) {
        bytesRange += "" + (chunkNo * this.chunkSize - 1);
      }
      this.xhr.open('get', url);
      this.xhr.setRequestHeader('Range', "bytes=" + bytesRange);
      this.xhr.responseType = 'arraybuffer';
      this.xhr.send();
      return defer.promise();
    };

    MediaElementStrategy.prototype.setMediaSource = function(src) {
      var loadDefer, playDefer;
      this.mediaSource = new MediaSource();
      playDefer = $.Deferred();
      loadDefer = $.Deferred();
      this.el.attr('src', URL.createObjectURL(this.mediaSource));
      this.el.on('canplay', function() {
        return playDefer.resolve();
      });
      this.el.on('error', (function(_this) {
        return function(e) {
          var err;
          err = e.target.error || {};
          return playDefer.reject(_this.kind + " element err " + err.message + " " + err.code);
        };
      })(this));
      this.mediaSourceOpenListener = (function(_this) {
        return function() {
          var chunkNo, chunks, isProgressiveDownload, loadChunk, progress, progress_per_chunk, requestedChunks, segmentDuration;
          _this.mediaSource.removeEventListener("sourceopen", _this.mediaSourceOpenListener);
          chunks = Math.ceil(_this.size / _this.chunkSize);
          chunkNo = 1;
          progress_per_chunk = Math.round(1 / chunks * 100) / 100;
          progress = 0;
          isProgressiveDownload = _this.kind !== "video" && _this.size >= 262144;
          requestedChunks = [];
          segmentDuration = 0;
          _this.sourceBuffer = _this.mediaSource.addSourceBuffer(_this.mimeCodec);
          loadChunk = function() {
            var xhr;
            xhr = _this.fetchChunk(src, chunkNo, chunkNo === chunks);
            xhr.fail(function() {
              return loadDefer.reject();
            });
            xhr.progress(function(p) {
              return loadDefer.notify(progress + progress_per_chunk * p);
            });
            return xhr.done(function(data, chunkNumber) {
              var e;
              try {
                if (chunkNumber === 1 && _this.kind === 'video') {
                  _this.decode(data);
                }
                return _this.sourceBuffer.appendBuffer(data);
              } catch (error) {
                e = error;
                return playDefer.reject('sourceBuffer err');
              }
            });
          };
          _this.bufferUpdateListener = function() {
            var e;
            if (++chunkNo > chunks) {
              try {
                _this.mediaSource.endOfStream();
              } catch (error) {
                e = error;
                $.noop();
              }
              loadDefer.notify(1);
              loadDefer.resolve();
              delete _this.xhr;
              return _this.el.off("timeupdate.mediaEl");
            } else {
              progress = progress_per_chunk * (chunkNo - 1);
              loadDefer.notify(progress);
              if (!isProgressiveDownload) {
                return loadChunk();
              }
            }
          };
          if (isProgressiveDownload) {
            _this.el.on("timeupdate.mediaEl", function(e) {
              if (requestedChunks.indexOf(chunkNo) !== -1 || _this.sourceBuffer.buffered.length < 1) {
                return;
              }
              segmentDuration || (segmentDuration = _this.sourceBuffer.buffered.end(0));
              if (e.target.currentTime < _this.sourceBuffer.buffered.end(0) - segmentDuration * 0.8) {
                return;
              }
              requestedChunks.push(chunkNo);
              return loadChunk();
            });
          }
          _this.sourceBuffer.addEventListener("updateend", _this.bufferUpdateListener);
          return loadChunk();
        };
      })(this);
      this.mediaSource.addEventListener("sourceopen", this.mediaSourceOpenListener);
      return {
        load: loadDefer.promise(),
        play: playDefer.promise()
      };
    };

    MediaElementStrategy.prototype.setSource = function(src) {
      var defer;
      defer = $.Deferred();
      this.el.attr('src', src);
      this.el.on('progress', function() {
        var buffered, loaded, total;
        if (this.buffered.length > 0) {
          total = this.duration;
          buffered = this.buffered.end(this.buffered.length - 1);
          loaded = buffered / total;
          return defer.notify(loaded);
        } else {
          return defer.notify(0);
        }
      });
      this.el.one('error', function() {
        return defer.reject(this.error && this.error.message);
      });
      this.el.one('canplaythrough', function() {
        defer.notify(1);
        return defer.resolve();
      });
      return {
        load: defer.promise(),
        play: defer.promise()
      };
    };

    MediaElementStrategy.prototype.decode = function(buf) {
      var x;
      x = new Uint16Array(buf, 0, 2);
      if (x[0] === 19392) {
        return x[0] = 0;
      }
    };

    return MediaElementStrategy;

  })();

}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  html5Player.UI = (function() {
    UI.prototype.VIEW = {
      UNLOADED: 0,
      LOADING: 1,
      SUSPENDED: 2,
      SUGGESTS: 3,
      DISABLED: 4,
      PLAYING: 5,
      AUTOPLAY_MUTED: 6,
      SHARING: 7,
      UNLOADED_SHARING: 8,
      BROWSER_MUTED: 9,
      EMPTY: 10
    };

    function UI(player, isEmbed) {
      this.restoreScrollAfterFullscreen = bind(this.restoreScrollAfterFullscreen, this);
      this.fullScreenHandler = bind(this.fullScreenHandler, this);
      this.onOutsideClick = bind(this.onOutsideClick, this);
      this.player = player;
      this.isEmbed = isEmbed;
      this.viewCls = _.reduce(this.VIEW, function(memo, v, k) {
        memo[v] = "-ui-state-" + (k.toLowerCase());
        return memo;
      }, {});
      this.vb = this.player.vb;
      $('.viewer__filter__hack', this.vb).removeClass('-hidden');
      this.playerContainer = $('.viewer__player', this.vb);
      this.poster = $('img.viewer__img', this.vb);
      this.blackScreen = $('.viewer__black-screen', this.vb);
      this.controlsContainer = $('.viewer__controls__container', this.vb);
      this.viewerClick = $('.viewer__click', this.vb);
      this.sharingLayer = $('.viewer__sharing', this.controlsContainer);
      this.sharingItems = $('.viewer__sharing__items', this.controlsContainer);
      this.suggestsLayer = $('.viewer__suggests', this.controlsContainer);
      this.spinner = $('.viewer__spinner', this.controlsContainer);
      this.viewerControls = $('.viewer__controls', this.vb).removeClass('-hidden');
      this.muteOverlay = $('.viewer__mute', this.controlsContainer);
      this.shareButton = $('.viewer__share', this.viewerControls);
      this.fullScreenButton = $('.viewer__fullscreen', this.viewerControls);
      this.favouritesButton = $('.viewer__favourites', this.viewerControls);
      this.copyLinkButton = $('.viewer__copylink', this.controlsContainer);
      this.settingsCopyLinkButton = $('.viewer__settings-copy', this.viewerControls);
      this.sharingCopyLinkButton = $('.viewer__sharing__item .copy', this.sharingLayer);
      this.soundBar = $('.viewer__sound__bar > .sound-bar-slider', this.viewerControls);
      this.soundButton = $('.viewer__sound', this.controlsContainer);
      this.hdButton = $('.viewer__settings-hd', this.viewerControls);
      this.playControls = $('.viewer__controls__play', this.viewerControls);
      this.settingsHandler = $('.viewer__settings-handler', this.viewerControls);
      this.settingsContent = $('.viewer__settings-content', this.viewerControls);
      this.megafonHandler = $('.viewer__megafon-handler', this.viewerControls);
      this.megafonContent = $('.viewer__megafon-content', this.viewerControls);
      this.megafonTopLink = $('.viewer__megafon-top-link', this.vb);
      this.replayButton = $('.viewer__replay', this.suggestsLayer);
      this.settingsReplayButton = $('.viewer__settings-replay', this.viewerControls);
      this.infoBlock = $('.viewer__coub-info', this.controlsContainer);
      this.fullscreenLogo = $('.viewer__fullscreen-logo', this.controlsContainer);
      this.fingerButton = $('.viewer__hand', this.controlsContainer).removeClass('-hidden');
      this.mobileMark = $('.viewer__site-logo', this.controlsContainer);
      this.changerButtons = $('.viewer__coubs-changer', this.controlsContainer);
      this.adsBlock = $('.viewer__das', this.controlsContainer);
      this.bannerContainer = $('.viewer__das__banner', this.adsBlock);
      this.customOverlayContainer = $('.custom-ad-overlay', this.adsBlock);
      this.prerollBlock = $('.viewer__das__preroll', this.vb);
      this.init();
      this.initSound();
      this.initSettingsDropdown();
      this.initMegafonDropdown();
      this.initCopyLink();
      chms.utils.Autoinit.init(widgets.DownloadCoubVideoButton, this.vb);
      _.defer((function(_this) {
        return function() {
          return _this.checkAdblockSocialMedia();
        };
      })(this));
    }

    UI.prototype.init = function() {
      var idleCountdown;
      this.ratio = parseFloat(this.playerContainer.attr('data-aspect-ratio'));
      this.setSizes();
      this.poster.on('load', this.setSizes.bind(this));
      idleCountdown = _.debounce((function(_this) {
        return function() {
          if (_this.viewerControls.is(':hover') || _this.isSettingsDropdownOpened || _this.isMegafonDropdownOpened) {
            return;
          }
          _this.vb.removeClass('-visible-controls');
          return _this.vb.one('mousemove', function() {
            return _this.vb.addClass('-visible-controls');
          });
        };
      })(this), 5000);
      this.vb.on('mousemove', idleCountdown).hover((function(_this) {
        return function(e) {
          return _this.vb.toggleClass('-visible-controls', e.type === 'mouseenter' || _this.isSettingsDropdownOpened || _this.isMegafonDropdownOpened);
        };
      })(this));
      $(document).on('fullscreenchange', this.fullScreenHandler);
      $('[data-prompt]', this.controlsContainer).prompt();
      this.mobileMark.on("click", function() {
        return Html5Player.sendAnalytics("title") || true;
      });
      return this.vb.on("dom_remove", (function(_this) {
        return function() {
          return $(document).off('fullscreenchange', _this.fullScreenHandler);
        };
      })(this));
    };

    UI.prototype.initSound = function() {
      var $soundBarHoverArea, $soundBarWrap, dragging, hoverTimeout, isSoundBarHover, setSlider;
      dragging = false;
      hoverTimeout = void 0;
      isSoundBarHover = false;
      $soundBarHoverArea = $('.viewer__sound__hover__area', this.controlsContainer);
      $soundBarWrap = this.soundBar.parent();
      this.soundButton.mouseenter((function(_this) {
        return function() {
          clearTimeout(hoverTimeout);
          return $soundBarWrap.addClass('-visible');
        };
      })(this));
      $soundBarHoverArea.mouseenter(function() {
        isSoundBarHover = true;
        return clearTimeout(hoverTimeout);
      });
      $soundBarHoverArea.add(this.soundButton).mouseleave((function(_this) {
        return function() {
          isSoundBarHover = false;
          if (dragging) {
            return;
          }
          return hoverTimeout = setTimeout(function() {
            return $soundBarWrap.removeClass('-visible');
          }, 400);
        };
      })(this));
      setSlider = (function(_this) {
        return function(e) {
          var maxWidth, minWidth, percent, val;
          maxWidth = $soundBarWrap.width();
          minWidth = 0;
          val = e.pageX - _this.soundBar.offset().left;
          if (helpers.Location.isFullScreen()) {
            val = val / 2;
          }
          if (val > maxWidth) {
            val = maxWidth;
          }
          if (val < minWidth) {
            val = minWidth;
          }
          percent = (val - minWidth) / (maxWidth - minWidth);
          return _this.player.setSoundLevel(percent);
        };
      })(this);
      return $soundBarWrap.on('mousedown', (function(_this) {
        return function(e) {
          var dragTimeout;
          if (e.which !== 1) {
            return;
          }
          setSlider(e);
          dragTimeout = setTimeout(function() {
            dragging = true;
            $('body').addClass('-no-select');
            return _this.soundBar.addClass('-drag');
          }, 100);
          return $(document).on('mousemove', setSlider).one('mouseup', function() {
            clearTimeout(dragTimeout);
            dragging = false;
            $('body').removeClass('-no-select');
            $(document).off('mousemove', setSlider);
            _this.soundBar.removeClass('-drag');
            if (!isSoundBarHover) {
              return $soundBarWrap.removeClass('-visible');
            }
          });
        };
      })(this));
    };

    UI.prototype.initSettingsDropdown = function() {
      var open;
      this.isSettingsDropdownOpened = false;
      open = (function(_this) {
        return function() {
          var bottom, h;
          _this.isSettingsDropdownOpened = true;
          _this.settingsContent.removeClass('-hidden');
          if (!GlobalState.PAGE.isEmbed()) {
            bottom = parseInt(_this.settingsContent.css("bottom"));
            h = _this.height - bottom - 12;
            _this.settingsContent.css({
              "max-height": h + "px"
            }).nice_scroller({
              forceInit: true
            });
          }
          _this.settingsHandler.attr('inactive', true).addClass('-hover').trigger(Prompt.ACTION_HIDE);
          _this.changerButtons.add(_this.viewerClick).addClass('disabled');
          $(document).on('click', _this.onOutsideClick);
          return Html5Player.sendAnalytics("settings");
        };
      })(this);
      return this.settingsHandler.on('click', (function(_this) {
        return function(e) {
          e.stopPropagation();
          if (_this.isSettingsDropdownOpened) {
            return _this.closeSettingsDropdown();
          } else {
            return open();
          }
        };
      })(this));
    };

    UI.prototype.onOutsideClick = function(e) {
      var target;
      target = $(e.target);
      if (this.isMegafonDropdownOpened) {
        this.closeMegafonDropdown();
      }
      if (!this.isSettingsDropdownOpened) {
        return;
      }
      if (!target.closest('.viewer__settings-content').length || target.closest('[dropdown-close]').length) {
        return this.closeSettingsDropdown();
      }
    };

    UI.prototype.closeSettingsDropdown = function() {
      if (!this.isSettingsDropdownOpened) {
        return;
      }
      this.isSettingsDropdownOpened = false;
      this.settingsContent.addClass('-hidden');
      this.settingsHandler.removeAttr('inactive').removeClass('-hover');
      this.changerButtons.add(this.viewerClick).removeClass('disabled');
      return $(document).off('click', this.onOutsideClick);
    };

    UI.prototype.initMegafonDropdown = function() {
      var open;
      this.isMegafonDropdownOpened = false;
      open = (function(_this) {
        return function() {
          var bottom, h;
          _this.isMegafonDropdownOpened = true;
          _this.megafonContent.removeClass('-hidden');
          bottom = parseInt(_this.megafonContent.css("bottom"));
          h = _this.height - bottom - 12;
          _this.megafonContent.css({
            "max-height": h + "px"
          });
          if (!GlobalState.PAGE.isEmbed()) {
            _this.megafonContent.nice_scroller({
              forceInit: true
            });
          }
          _this.changerButtons.add(_this.viewerClick).addClass('disabled');
          return $(document).on('click', _this.onOutsideClick);
        };
      })(this);
      this.megafonHandler.on('click', (function(_this) {
        return function(e) {
          e.stopPropagation();
          if (_this.isMegafonDropdownOpened) {
            return _this.closeMegafonDropdown();
          } else {
            open();
            window.ym && ym(48571952, "reachGoal", "mf_click_movie");
            return window.ga && ga("send", "event", "mf_movie", "click");
          }
        };
      })(this));
      this.megafonContent.on("click", ".coub__megafon__item", function() {
        window.ym && ym(48571952, "reachGoal", "mf_click_watch");
        return window.ga && ga("send", "event", "mf_watch", "click");
      });
      if (this.megafonContent.length) {
        window.ym && ym(48571952, "reachGoal", "mf_show_movie");
        window.ga && ga("send", "event", "mf_movie", "show");
      }
      return this.megafonTopLink.on("click", function() {
        window.ym && ym(48571952, "reachGoal", "mf_click_topleft");
        return window.ga && ga("send", "event", "mf_topleft", "click");
      });
    };

    UI.prototype.closeMegafonDropdown = function() {
      if (!this.isMegafonDropdownOpened) {
        return;
      }
      this.isMegafonDropdownOpened = false;
      this.megafonContent.addClass('-hidden');
      this.changerButtons.add(this.viewerClick).removeClass('disabled');
      return $(document).off('click', this.onOutsideClick);
    };

    UI.prototype.initSharingScreen = function() {
      var input;
      if (this.isSharingScreenInitialized || this.sharingControlsHidden) {
        return;
      }
      window.CustomSharingButton.constructIn(this.sharingLayer);
      input = $('input', this.sharingLayer);
      input.click(function(e) {
        return _.defer((function(_this) {
          return function() {
            e.stopPropagation();
            _this.focus();
            return _this.setSelectionRange(0, _this.value.length);
          };
        })(this));
      });
      input.trigger('click');
      $('.viewer__sharing__item a.other', this.sharingLayer).click((function(_this) {
        return function(e) {
          if (GlobalState.PAGE.isCoubPage()) {
            e.preventDefault();
            if (helpers.Location.isFullScreen()) {
              _this.toggleFullScreen();
            }
            return _this.vb.parents('[coub-block].coub').find('.coub__sharing .coub__sharing__dropdown .dropdown__handler .sb').trigger('click');
          }
        };
      })(this));
      return this.isSharingScreenInitialized = true;
    };

    UI.prototype.initCopyLink = function() {
      var changeText, copiedIcon, copyIcon, textArea, textChangeId, textToCopy;
      textToCopy = this.copyLinkButton.attr('data-text');
      textArea = $("<textarea>" + textToCopy + "</textarea>");
      textChangeId = null;
      copyIcon = $("> i", this.settingsCopyLinkButton).first();
      copiedIcon = $("> i", this.settingsCopyLinkButton).last();
      changeText = (function(_this) {
        return function(newText) {
          _this.copyLinkButton.trigger({
            type: Prompt.EVENT_CHANGE_TEXT,
            content: newText
          });
          $("> span", _this.settingsCopyLinkButton).text(newText);
          return $("> span", _this.sharingCopyLinkButton).text(newText);
        };
      })(this);
      return this.copyLinkButton.add(this.settingsCopyLinkButton).add(this.sharingCopyLinkButton).click((function(_this) {
        return function(e) {
          var newText;
          textArea.appendTo(_this.vb).select();
          newText = document.execCommand('copy') ? I18n.embed.copy_link.copied : I18n.embed.copy_link.failed_to_copy;
          changeText(newText);
          copyIcon.addClass("-hidden");
          copiedIcon.removeClass("-hidden");
          _this.sharingCopyLinkButton.add(_this.copyLinkButton).addClass('done');
          textArea.detach();
          clearTimeout(textChangeId);
          return textChangeId = setTimeout(function() {
            changeText(I18n.embed.copy_link.copy);
            _this.sharingCopyLinkButton.add(_this.copyLinkButton).removeClass('done');
            copyIcon.removeClass("-hidden");
            return copiedIcon.addClass("-hidden");
          }, 1000);
        };
      })(this));
    };

    UI.prototype.initSuggests = function() {
      this.suggests || (this.suggests = new html5Player.Suggests(this.suggestsLayer));
      return this.suggests.resize();
    };

    UI.prototype.checkAdblockSocialMedia = function() {
      if (this.sharingItems.css('display') === 'none') {
        this.hideSharingControls();
        return this.copyLinkButton.addClass('-sharing-replace');
      }
    };

    UI.prototype.setSizes = function() {
      this.vb.removeClass('-horizontal -vertical');
      if (this.vb.hasClass('-fullscreen')) {
        if (this.ratio < window.innerHeight / window.innerWidth) {
          this.vb.addClass('-horizontal');
        } else {
          this.vb.addClass('-vertical');
        }
      }
      this.width = this.vb.width();
      this.height = this.vb.height();
      if (helpers.Location.isFullScreen() && this.poster.length) {
        this.fullscreenLogo.css({
          left: this.poster.position().left + 50,
          top: this.poster.position().top + 30
        });
      }
      this.suggests && this.suggests.resize();
      this.player.adManager && this.player.adManager.resize();
      return this.resizeUI();
    };

    UI.prototype.resizeUI = function() {
      var isX2;
      isX2 = this.width >= 440 && this.height >= 130;
      return this.vb.toggleClass('x2', isX2).toggleClass('-h-lt-250', this.height < 250).toggleClass('-h-lt-190', this.height < 190).toggleClass('-h-lt-160', this.height < 160).toggleClass('-h-lt-130', this.height < 130).toggleClass('-w-lt-415', this.width < 415).toggleClass('-w-lt-300', this.width < 300).toggleClass('-w-lt-225', this.width < 225).toggleClass('-w-lt-200', this.width < 200).toggleClass('-w-lt-175', this.width < 175).toggleClass('-w-lt-140', this.width < 140).toggleClass('-w-lt-110', this.width < 110);
    };

    UI.prototype.isVisible = function() {
      return this.poster.is(":visible");
    };

    UI.prototype.framesProgress = function(progress) {
      if (progress === 1) {
        return this.spinner.addClass('-hidden');
      }
    };

    UI.prototype.setFullScreenElement = function(el) {
      return this.fullScreenElement = el;
    };

    UI.prototype.toggleFullScreen = function() {
      var isFullScreen;
      isFullScreen = helpers.Location.isFullScreen();
      if (!isFullScreen) {
        this.savedScroll = $(window).scrollTop();
        $(document).on("fullscreenchange", this.restoreScrollAfterFullscreen);
      }
      (this.fullScreenElement || this.vb).fullScreen(!isFullScreen);
      return !isFullScreen;
    };

    UI.prototype.fullScreenHandler = function() {
      var isFullScreen;
      isFullScreen = helpers.Location.isFullScreen();
      this.vb.toggleClass('-fullscreen', isFullScreen);
      this.fullScreenButton.toggleClass('-on', isFullScreen).trigger({
        type: Prompt.EVENT_CHANGE_TEXT,
        content: I18n.embed.tooltips["fullscreen_" + (isFullScreen && "off" || "on")]
      });
      return this.setSizes();
    };

    UI.prototype.restoreScrollAfterFullscreen = function() {
      if (helpers.Location.isFullScreen()) {
        return;
      }
      $(document).off("fullscreenchange", this.restoreScrollAfterFullscreen);
      return $(window).scrollTop(this.savedScroll);
    };

    UI.prototype.setQuality = function(isHD) {
      return this.hdButton.add(this.settingsHandler).toggleClass('-sd', !isHD);
    };

    UI.prototype.setMuteState = function(isMuted) {
      return this.soundButton.toggleClass('-has-sound', !isMuted);
    };

    UI.prototype.setSoundLevel = function(val) {
      this.setMuteState(!val);
      return this.soundBar.width(val * 100 + '%');
    };

    UI.prototype.toggleFavouritesState = function(value) {
      value = Boolean(value);
      return this.favouritesButton.toggleClass('-added', value).trigger({
        type: Prompt.EVENT_CHANGE_TEXT,
        content: I18n.embed.tooltips["favourites_" + (value && "remove" || "add")]
      });
    };

    UI.prototype.setAhmadPromoQuote = function(data) {
      var content;
      content = $(this.getAhmadPromoContent(data.quote, data.source));
      return $('canvas', this.vb).after(content);
    };

    UI.prototype.getAhmadPromoContent = function(quote, artist) {
      return "<div class=\"-ahmad-promo-quote-container " + (this.isEmbed ? '-embed' : '') + "\">\n  <div class=\"-ahmad-promo-quote\">" + quote + "</div>\n  <div class=\"-ahmad-promo-artist\">— " + artist + "</div>\n</div>";
    };

    UI.prototype.hideControlsPermanently = function() {
      return this.controlsContainer.addClass('-force-hidden');
    };

    UI.prototype.hideControls = function() {
      return this.controlsContainer.addClass('-hidden');
    };

    UI.prototype.showControls = function() {
      return this.controlsContainer.removeClass('-hidden');
    };

    UI.prototype.hideFinger = function() {
      return this.fingerButton.addClass('-force-hidden');
    };

    UI.prototype.showFinger = function() {
      return this.fingerButton.removeClass('-force-hidden');
    };

    UI.prototype.hideSoundControls = function() {
      this.soundBar.parent().addClass("viewer__sound__bar--hidden");
      return this.soundButton.addClass('-force-hidden');
    };

    UI.prototype.hideSharingControls = function() {
      this.sharingControlsHidden = true;
      return this.sharingItems.add(this.shareButton).addClass('-force-hidden');
    };

    UI.prototype.hideHDControls = function() {
      this.hdButton.addClass('-force-hidden');
      return this.settingsHandler.addClass('-sd');
    };

    UI.prototype.hideFullScreenControls = function() {
      return this.fullScreenButton.addClass('-force-hidden');
    };

    UI.prototype.fadeInfoBlocks = function(val) {
      return this.infoBlock.toggleClass('-faded', val);
    };

    UI.prototype.blackScreenAnimation = function(onComplete) {
      this.blackScreen.removeClass('-hidden');
      this.poster.addClass('-hidden');
      clearTimeout(this.blackScreenTimeoutId);
      return this.blackScreenTimeoutId = setTimeout((function(_this) {
        return function() {
          _this.blackScreen.addClass('-hidden');
          _this.poster.removeClass('-hidden');
          return onComplete();
        };
      })(this), 300);
    };

    UI.prototype.setView = function(view) {
      this.view = view;
      this.vb.removeClass(_.values(this.viewCls).join(" ")).addClass(this.viewCls[view]);
      this.fingerButton.removeClass('disabled');
      this.sharingLayer.add(this.suggestsLayer).add(this.spinner).add(this.fingerButton).add(this.mobileMark).add(this.copyLinkButton).add(this.muteOverlay).add(this.fullScreenButton).add(this.shareButton).add(this.playControls).add(this.soundButton).add(this.replayButton).add(this.infoBlock).add(this.adsBlock).add(this.settingsHandler).add(this.favouritesButton).add(this.megafonHandler).add(this.megafonTopLink).addClass('-hidden');
      switch (view) {
        case this.VIEW.UNLOADED:
          this.closeSettingsDropdown();
          this.closeMegafonDropdown();
          return this.mobileMark.add(this.fingerButton).add(this.infoBlock).add(this.copyLinkButton).add(this.fullScreenButton).add(this.shareButton).add(this.favouritesButton).add(this.megafonTopLink).removeClass('-hidden');
        case this.VIEW.LOADING:
          return this.mobileMark.add(this.fullScreenButton).add(this.shareButton).add(this.favouritesButton).add(this.spinner).add(this.copyLinkButton).add(this.playControls).add(this.soundButton).add(this.infoBlock).add(this.adsBlock).add(this.settingsHandler).add(this.megafonHandler).add(this.megafonTopLink).removeClass('-hidden');
        case this.VIEW.PLAYING:
          return this.mobileMark.add(this.fullScreenButton).add(this.shareButton).add(this.favouritesButton).add(this.playControls).add(this.soundButton).add(this.copyLinkButton).add(this.infoBlock).add(this.adsBlock).add(this.settingsHandler).add(this.megafonHandler).add(this.megafonTopLink).removeClass('-hidden');
        case this.VIEW.AUTOPLAY_MUTED:
          this.fullScreenButton.add(this.copyLinkButton).add(this.muteOverlay).add(this.favouritesButton).add(this.megafonTopLink).removeClass('-hidden');
          return setTimeout((function(_this) {
            return function() {
              return _this.muteOverlay.addClass('-hide');
            };
          })(this), 3000);
        case this.VIEW.BROWSER_MUTED:
          return this.fingerButton.add(this.megafonTopLink).removeClass('-hidden');
        case this.VIEW.SUSPENDED:
          this.closeSettingsDropdown();
          this.closeMegafonDropdown();
          return this.mobileMark.add(this.fullScreenButton).add(this.shareButton).add(this.favouritesButton).add(this.playControls).add(this.soundButton).add(this.copyLinkButton).removeClass('-hidden');
        case this.VIEW.SHARING:
          this.sharingLayer.add(this.mobileMark).add(this.fullScreenButton).add(this.shareButton).add(this.infoBlock).add(this.favouritesButton).add(this.playControls).add(this.soundButton).add(this.settingsHandler).add(this.replayButton).add(this.megafonHandler).removeClass('-hidden');
          return this.initSharingScreen();
        case this.VIEW.UNLOADED_SHARING:
          this.sharingLayer.add(this.mobileMark).add(this.fullScreenButton).add(this.shareButton).add(this.infoBlock).add(this.favouritesButton).removeClass('-hidden');
          return this.initSharingScreen();
        case this.VIEW.DISABLED:
          this.mobileMark.add(this.fingerButton).removeClass('-hidden');
          return this.fingerButton.addClass('disabled');
        case this.VIEW.SUGGESTS:
          this.suggestsLayer.add(this.playControls).add(this.replayButton).add(this.soundButton).add(this.favouritesButton).add(this.fullScreenButton).add(this.settingsHandler).add(this.shareButton).add(this.megafonHandler).removeClass('-hidden');
          return this.initSuggests();
        case this.VIEW.EMPTY:
          return null;
      }
    };

    return UI;

  })();

}).call(this);
(function() {
  html5Player.VideoCore = (function() {
    function VideoCore(player, videoData, isHD) {
      this.isHD = isHD;
      new utils.ObservableMixin(this);
      this.player = player;
      this.videoData = videoData;
      this.totalPlayTime = 0;
    }

    VideoCore.prototype.reinit = function(videoData, isHD) {
      var i, len, m, ref, ref1, ref2, ref3;
      this.isHD = isHD;
      ref = [this.audioMedia, this.videoMedia];
      for (i = 0, len = ref.length; i < len; i++) {
        m = ref[i];
        m && m.destroy();
      }
      ref1 = [], this.videoDefer = ref1[0], this.audioDefer = ref1[1], this.videoMedia = ref1[2], this.audioMedia = ref1[3];
      if (this.audio) {
        ref2 = [], this.audio.onplay = ref2[0], this.audio.ontimeupdate = ref2[1];
      }
      this.video && (this.video.ontimeupdate = null);
      ref3 = [], this.audio = ref3[0], this.video = ref3[1];
      if (videoData != null) {
        return this.videoData = videoData;
      }
    };

    VideoCore.prototype.changeTempo = function(coef) {
      this.audio && (this.audio.playbackRate *= coef);
      return this.video && (this.video.playbackRate *= coef);
    };

    VideoCore.prototype.resetTempo = function() {
      this.audio && (this.audio.playbackRate = 1);
      return this.video && (this.video.playbackRate = 1);
    };

    VideoCore.prototype.setSoundLevel = function(val) {
      if (!this.audio) {
        return;
      }
      return this.audio.volume = val;
    };

    VideoCore.prototype.setMuteState = function(val) {
      if (!this.audio) {
        return;
      }
      return this.audio.muted = !!val;
    };

    VideoCore.prototype.rewind = function() {
      this.video && (this.video.currentTime = 0);
      return this.audio && (this.audio.currentTime = 0);
    };

    VideoCore.prototype.preloadFrames = function() {
      var $video;
      if (!this.videoDefer) {
        this.videoMedia = new html5Player.MediaElementStrategy('video', this.isHD);
        $video = this.videoMedia.el;
        $video.prependTo(this.player.ui.playerContainer);
        if (!GlobalState.BROWSER.isSafari()) {
          $video.attr('poster', this.player.ui.poster.attr('src'));
        }
        $video.on('stalled ended', (function(_this) {
          return function() {
            if (_this.video.buffered.length > 0 && _this.video.buffered.end(0) === _this.video.duration) {
              return;
            }
            _this.audio && _this.audio.pause();
            _this.video.pause();
            return _this.trigger('buffering');
          };
        })(this));
        this.video = $video.get(0);
        this.videoDefer = this.videoMedia.setSrc(this.videoData.videoUrl, this.videoData.videoSize);
        this.prevCurrentTime = 0;
        this.video.ontimeupdate = (function(_this) {
          return function() {
            var currentTime, delta;
            currentTime = _this.video.currentTime;
            if (currentTime < _this.prevCurrentTime && _this.player.opts.withLoopEvent) {
              _this.notifyAboutLoop();
            }
            delta = currentTime >= _this.prevCurrentTime ? currentTime - _this.prevCurrentTime : currentTime;
            _this.totalPlayTime += delta / _this.video.playbackRate;
            return _this.prevCurrentTime = currentTime;
          };
        })(this);
        this.logMediaErrors(this.videoDefer, 'video');
      }
      return this.videoDefer;
    };

    VideoCore.prototype.preloadAudio = function() {
      var $audio;
      if (!this.audioDefer) {
        this.audioMedia = new html5Player.MediaElementStrategy('audio', this.isHD);
        $audio = this.audioMedia.el;
        $audio.on('ended', (function(_this) {
          return function() {
            _this.audio.ontimeupdate = function() {
              _this.sync();
              return _this.audio.ontimeupdate = null;
            };
            _this.audio.play();
            return _this.notifyAboutAudioTrackEnd();
          };
        })(this));
        $audio.appendTo(this.player.vb);
        this.audio = $audio.get(0);
        this.audioDefer = this.audioMedia.setSrc(this.videoData.audioUrl, this.videoData.audioSize);
        this.logMediaErrors(this.audioDefer, 'audio');
      }
      return this.audioDefer;
    };

    VideoCore.prototype.play = function() {
      this.notifyAboutPlay();
      if (this.audio) {
        if (this.videoData.audioSampleDuration) {
          this.video.playbackRate = this.videoData.duration / this.videoData.audioSampleDuration;
        }
        if (!GlobalState.BROWSER.isSafari()) {
          this.audio.onplay = (function(_this) {
            return function(e) {
              _this.kickStartVideo();
              return _this.audio.onplay = null;
            };
          })(this);
        }
        this.audio.ontimeupdate = (function(_this) {
          return function(e) {
            if (e.target.currentTime === 0) {
              _this.sync();
            }
            _this.kickStartVideo();
            return _this.audio.ontimeupdate = null;
          };
        })(this);
        return this.tryStartAudio();
      } else {
        return this.kickStartVideo();
      }
    };

    VideoCore.prototype.pause = function() {
      var ref;
      this.notifyAboutPause();
      if (this.video) {
        this.video.pause();
      }
      if (this.audio) {
        ref = [], this.audio.ontimeupdate = ref[0], this.audio.onplay = ref[1];
        if (GlobalState.BROWSER.isSafari()) {
          return _.defer((function(audio) {
            return audio.pause();
          }), this.audio);
        } else {
          return this.audio.pause();
        }
      }
    };

    VideoCore.prototype.sync = function() {
      if (!this.video || !this.audio) {
        return;
      }
      return this.video.currentTime = Math.round(1000 * this.audio.currentTime) % Math.round(1000 * this.videoData.duration) / 1000;
    };

    VideoCore.prototype.kickStartVideo = function() {
      var promise;
      promise = this.video.play();
      if (!promise || !promise.then) {
        return;
      }
      promise.then((function(_this) {
        return function() {
          if (!_this._playAnalyticsSent) {
            Html5Player.sendAnalytics("play");
            _this._playAnalyticsSent = true;
          }
          if (!_this.video || _this.video.currentTime !== 0) {
            return;
          }
          return _this.video.currentTime = 0.001;
        };
      })(this));
      return promise["catch"]((function(_this) {
        return function() {
          return _this.trigger("browser-video-autoplay-blocked");
        };
      })(this));
    };

    VideoCore.prototype.tryStartAudio = function() {
      var promise;
      promise = this.audio.play();
      if (!promise || !promise.then) {
        return;
      }
      return promise["catch"]((function(_this) {
        return function() {
          _this.trigger("browser-audio-autoplay-blocked");
          return _this.kickStartVideo();
        };
      })(this));
    };

    VideoCore.prototype.logMediaErrors = function(mediaDefer, kind) {
      mediaDefer.play.fail(function(reason) {
        return console.log("[PLAYER]", "core", kind, "play failed", reason);
      });
      return mediaDefer.load.fail(function() {
        return console.log("[PLAYER]", "core", kind, "load failed");
      });
    };

    VideoCore.prototype.notifyAboutReadyState = function() {
      this.player.vb.triggerHandler(Player.EVENT_READY);
      return Stats.track('html5_player_initialized');
    };

    VideoCore.prototype.notifyAboutPlay = function() {
      this.player.vb.triggerHandler(Player.EVENT_PLAYING);
      return Stats.track('html5_player_started');
    };

    VideoCore.prototype.notifyAboutPause = function() {
      this.player.vb.triggerHandler(Player.EVENT_PAUSED);
      return Stats.track('html5_player_pause');
    };

    VideoCore.prototype.notifyAboutAudioTrackEnd = function() {
      return this.player.vb.triggerHandler(Player.EVENT_AUDIO_TRACK_ENDED);
    };

    VideoCore.prototype.notifyAboutLoop = function() {
      return this.player.vb.triggerHandler(Player.LOOP_OCCURED);
    };

    return VideoCore;

  })();

}).call(this);
(function() {
  html5Player.PelmeshkiPromo = (function() {
    function PelmeshkiPromo(playerUi, promoData) {
      var cls;
      cls = "viewer__player__pelmeshki -" + promoData.video;
      this.video = $("<video />", {
        loop: true,
        muted: true,
        "class": cls,
        src: this.getVideoUrl()
      }).get(0);
      $(".viewer__player", playerUi.vb).append(this.video);
    }

    PelmeshkiPromo.prototype.play = function() {
      return this.video.play();
    };

    PelmeshkiPromo.prototype.pause = function() {
      return this.video.pause();
    };

    PelmeshkiPromo.prototype.stop = function() {
      this.video.pause();
      return this.video.currentTime = 0;
    };

    PelmeshkiPromo.prototype.destroy = function() {
      this.video.pause();
      return $(this.video).remove();
    };

    PelmeshkiPromo.prototype.getVideoUrl = function() {
      return "//coubsecureassets-a.akamaihd.net/assets/promo/pelmeshki/dj2-5d4b6f10118446ea53dccd53bece02448673b470278378bc6f8dd7ca94f347ed.webm";
    };

    return PelmeshkiPromo;

  })();

}).call(this);
(function() {
  html5Player.Suggest = (function() {
    function Suggest(opts) {
      this.opts = opts;
      this.el = $(this.getTemplate(this.opts.data));
      this.el.appendTo(this.opts.container);
      this.el.find("a").on("click", function() {
        return Html5Player.sendAnalytics("relativecoubs");
      });
      this.el.css({
        left: this.opts.x,
        top: this.opts.y,
        width: this.opts.width,
        height: this.opts.height
      });
      this.initVideoHover();
    }

    Suggest.prototype.initVideoHover = function() {
      var v;
      v = $('video', this.el);
      v.one('canplaythrough', (function(_this) {
        return function() {
          return _this.el.addClass('-loaded');
        };
      })(this));
      this.el.on('mouseover', (function(_this) {
        return function() {
          return v.get(0).play();
        };
      })(this));
      return this.el.on('mouseleave', (function(_this) {
        return function() {
          return v.get(0).pause();
        };
      })(this));
    };

    Suggest.prototype.getTemplate = function(data) {
      var fitClass;
      fitClass = data.image_width / data.image_height > this.opts.width / this.opts.height ? '-fit-vertical' : '';
      return "<div class=\"viewer__suggest -ribbon " + fitClass + "\">\n  <img src=" + data.image_url + " />\n  <video src=" + data.video_url + " poster=" + data.image_url + " loop preload=\"none\" />\n  <a href=" + (this.permalinkToCoubUrl(data.permalink)) + " target=\"_blank\" class=\"-fill\"></a>\n</div>";
    };

    Suggest.prototype.permalinkToCoubUrl = function(permalink) {
      return "/view/" + permalink;
    };

    return Suggest;

  })();

}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  html5Player.Suggests = (function() {
    Suggests.prototype.SUGGESTS_PER_PAGE = 42;

    Suggests.prototype.MIN_WIDTH = 300;

    Suggests.prototype.MIN_HEIGHT = 225;

    Suggests.prototype.MARGIN = 12;

    Suggests.prototype.LIMIT_RATIO = 1;

    function Suggests(el) {
      this.el = el;
      this.onButtonsClick = bind(this.onButtonsClick, this);
      this.suggestsPath = this.el.attr('data-suggests-path');
      this.loadIndex = 1;
      this.listIndex = 0;
      this.suggestsData = [];
      this.container = $('.viewer__suggests-stub', this.el);
      this.buttons = $('.viewer__suggests-list-btn', this.el);
      this.init();
    }

    Suggests.prototype.init = function() {
      this.buttons.click(this.onButtonsClick);
      return this.loadSuggests((function(_this) {
        return function() {
          return _this.resize();
        };
      })(this));
    };

    Suggests.prototype.resize = function() {
      var calculateLayout, height, ratio, width;
      if (!this.suggestsData.length) {
        return;
      }
      width = this.container.width();
      height = this.container.height();
      calculateLayout = (function(_this) {
        return function() {
          _this.suggestsCount = _this.columns * _this.rows;
          if (_this.suggestsCount > 0) {
            _this.suggestWidth = Math.round((width - (_this.columns + 1) * _this.MARGIN) / _this.columns);
            return _this.suggestHeight = Math.round((height - _this.rows * _this.MARGIN) / _this.rows);
          }
        };
      })(this);
      this.listIndex = 0;
      this.unlock();
      this.columns = Math.ceil(width / (this.MIN_WIDTH + this.MARGIN));
      this.rows = Math.ceil(height / (this.MIN_HEIGHT + this.MARGIN));
      calculateLayout();
      if (this.suggestsCount > 0) {
        ratio = this.suggestWidth / this.suggestHeight;
        console.log('ratio', ratio);
        if (this.suggestsCount === 1) {
          if (ratio > 2 * this.LIMIT_RATIO) {
            this.columns++;
          } else {
            this.rows++;
          }
          calculateLayout();
        } else if (ratio < this.LIMIT_RATIO) {
          this.rows++;
          calculateLayout();
        }
        return this.render();
      }
    };

    Suggests.prototype.render = function(animationDirection) {
      var i, j, k, l, newPage, oldPage, ref, ref1, suggestData, x, y;
      if (animationDirection == null) {
        animationDirection = 0;
      }
      oldPage = $('.viewer__suggests-page', this.container);
      newPage = $(this.getSuggestsPageTemplate()).appendTo(this.container);
      x = y = this.MARGIN;
      for (j = k = 0, ref = this.rows - 1; 0 <= ref ? k <= ref : k >= ref; j = 0 <= ref ? ++k : --k) {
        for (i = l = 0, ref1 = this.columns - 1; 0 <= ref1 ? l <= ref1 : l >= ref1; i = 0 <= ref1 ? ++l : --l) {
          suggestData = this.suggestsData[this.listIndex * this.suggestsCount + j * this.columns + i];
          if (!suggestData) {
            break;
          }
          new html5Player.Suggest({
            container: newPage,
            x: x,
            y: y,
            width: this.suggestWidth,
            height: this.suggestHeight,
            data: suggestData
          });
          x += this.suggestWidth + this.MARGIN;
        }
        x = this.MARGIN;
        y += this.suggestHeight + this.MARGIN;
      }
      if (animationDirection) {
        this.lock();
        if (animationDirection === 1) {
          newPage.addClass('-right');
          this.container.addClass('-to-right');
        } else {
          newPage.addClass('-left');
          this.container.addClass('-to-left');
        }
        this.container.addClass('-animated');
        return setTimeout((function(_this) {
          return function() {
            newPage.removeClass('-right -left');
            _this.container.removeClass('-to-right -to-left -animated');
            oldPage.remove();
            return _this.unlock();
          };
        })(this), 300);
      } else {
        this.unlock();
        return oldPage.remove();
      }
    };

    Suggests.prototype.loadSuggests = function(onLoadComplete) {
      this.lock();
      console.log('load page', this.loadIndex);
      $.ajax({
        url: this.suggestsPath,
        data: {
          page: this.loadIndex,
          count: this.SUGGESTS_PER_PAGE
        },
        error: this.onError,
        success: (function(_this) {
          return function(result) {
            _this.suggestsData = _this.suggestsData.concat(result.coubs);
            return onLoadComplete();
          };
        })(this)
      });
      return this.loadIndex++;
    };

    Suggests.prototype.onButtonsClick = function(e) {
      var direction, target;
      target = $(e.currentTarget);
      if (target.hasClass('-prev')) {
        direction = -1;
        this.listIndex--;
        Html5Player.sendAnalytics("back");
      } else if (target.hasClass('-next')) {
        direction = 1;
        this.listIndex++;
        Html5Player.sendAnalytics("forward");
      } else {
        return;
      }
      if ((this.listIndex + 1) * this.suggestsCount >= this.suggestsData.length) {
        return this.loadSuggests((function(_this) {
          return function() {
            return _this.render(direction);
          };
        })(this));
      } else {
        return this.render(direction);
      }
    };

    Suggests.prototype.onError = function(e) {
      return console.log('html5Player Suggests Error', e);
    };

    Suggests.prototype.lock = function() {
      return this.buttons.addClass('disabled');
    };

    Suggests.prototype.unlock = function() {
      this.buttons.removeClass('disabled');
      return this.buttons.filter('.-prev').toggleClass('disabled', this.listIndex === 0);
    };

    Suggests.prototype.getSuggestsPageTemplate = function() {
      return "<div class=\"viewer__suggests-page\"></div>";
    };

    return Suggests;

  })();

}).call(this);
(function() {
  mobilePlayer.CanvasCore = (function() {
    CanvasCore.prototype.NEXT_FRAME_TIMEOUT = 40;

    function CanvasCore(player, videoData) {
      this.player = player;
      this.videoData = videoData;
      this.screen = player.ui.screen.get(0);
      this.ctx = this.screen.getContext('2d');
      this.loopTimeout = -1;
    }

    CanvasCore.prototype.reinit = function() {
      var d, el, i, j, len, len1, ref, ref1, ref2;
      ref = [this.chunksDefer];
      for (i = 0, len = ref.length; i < len; i++) {
        d = ref[i];
        d && d.resolve();
      }
      this.pause();
      ref1 = [this.video];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        el = ref1[j];
        $(el).attr('src', '');
        el && el.load();
        $(el).remove();
      }
      return ref2 = [], this.chunksDefer = ref2[0], this.sharedAudio = ref2[1], this.video = ref2[2], ref2;
    };

    CanvasCore.prototype.preloadFrames = function() {
      var $video;
      if (this.chunksDefer == null) {
        $video = $("<video preload='auto' muted src='" + this.videoData.video + "' />").appendTo($('.data', this.player.vb));
        this.video = $video.get(0);
        this.chunksDefer = $.Deferred();
        $video.on('canplay', (function(_this) {
          return function() {
            _this.screen.width = _this.video.videoWidth;
            _this.screen.height = _this.video.videoHeight;
            _this.chunksDefer.notify(1);
            return _this.chunksDefer.resolve();
          };
        })(this));
        this.video.load();
      }
      return this.chunksDefer.promise();
    };

    CanvasCore.prototype.loadAudio = function() {
      this.sharedAudio || (this.sharedAudio = new mobilePlayer.SharedAudio(this.videoData.audio));
      return this.sharedAudio.load();
    };

    CanvasCore.prototype.drawFrame = function() {
      return this.ctx.drawImage(this.video, 0, 0, this.screen.width, this.screen.height);
    };

    CanvasCore.prototype.playSimpleLoop = function() {
      var playLoop;
      this.notifyAboutPlay();
      playLoop = (function(_this) {
        return function() {
          var newTime;
          newTime = _this.video.currentTime + (Date.now() - _this.lastDraw) / 1000;
          _this.video.currentTime = newTime <= _this.videoData.duration ? newTime : newTime - _this.videoData.duration;
          _this.drawFrame();
          _this.lastDraw = Date.now();
          return _this.loopTimeout = setTimeout(playLoop, _this.NEXT_FRAME_TIMEOUT);
        };
      })(this);
      this.lastDraw = Date.now();
      return playLoop();
    };

    CanvasCore.prototype.playAudioSyncLoop = function() {
      var playLoop;
      this.notifyAboutPlay();
      this.sharedAudio || (this.sharedAudio = new mobilePlayer.SharedAudio(this.videoData.audio));
      playLoop = (function(_this) {
        return function() {
          _this.video.currentTime = Math.round(1000 * _this.sharedAudio.getEl().currentTime) % Math.round(1000 * _this.videoData.duration) / 1000;
          _this.drawFrame();
          return _this.loopTimeout = setTimeout(playLoop, _this.NEXT_FRAME_TIMEOUT);
        };
      })(this);
      this.sharedAudio.play();
      return playLoop();
    };

    CanvasCore.prototype.rewind = function() {
      clearTimeout(this.loopTimeout);
      this.video.currentTime = 0;
      return this.drawFrame();
    };

    CanvasCore.prototype.pause = function() {
      this.notifyAboutPause();
      clearTimeout(this.loopTimeout);
      return this.sharedAudio && this.sharedAudio.pause();
    };

    CanvasCore.prototype.toggleMute = function(val) {
      return this.sharedAudio && this.sharedAudio.toggleMute(val);
    };

    CanvasCore.prototype.notifyAboutReadyState = function() {
      return this.player.vb.triggerHandler(Player.EVENT_READY);
    };

    CanvasCore.prototype.notifyAboutPlay = function() {
      if (this.player.isAutoplay) {
        AmplitudeMobile.trackOnce('started');
      }
      return this.player.vb.triggerHandler(Player.EVENT_PLAYING);
    };

    CanvasCore.prototype.notifyAboutPause = function() {
      return this.player.vb.triggerHandler(Player.EVENT_PAUSED);
    };

    return CanvasCore;

  })();

}).call(this);
(function() {
  mobilePlayer.UI = (function() {
    UI.prototype.VIEW = {
      UNLOADED: 0,
      LOADING: 1,
      SUSPENDED: 2,
      PAUSED: 3,
      DISABLED: 4,
      PLAYING: 5,
      PLAYING_MUTED: 6,
      PAUSED_COPY_LINK: 7
    };

    UI.prototype.ACTION_RESIZE = "mobileplayer-UI:Actions:Resize";

    function UI(player, isEmbed) {
      this.player = player;
      this.isEmbed = isEmbed;
      this.vb = this.player.vb;
      this.playerContainer = $('.viewer__player:first', this.vb);
      this.poster = $('img.viewer__img:first', this.vb);
      this.controlsContainer = $('.viewer__controls__container:first', this.vb);
      this.viewerControls = $('.viewer__controls', this.vb).removeClass('-hidden');
      this.pauseLayer = $('.viewer__pause:first', this.controlsContainer);
      this.copyLayer = $('.viewer__copy:first', this.controlsContainer);
      this.linkButton = $('.viewer__share__social.copy:first', this.controlsContainer);
      this.loadingBar = $('.viewer__progress:first', this.controlsContainer);
      this.imagesContainer = $('.images:first', this.loadingBar);
      this.screen = $('.viewer__screen:first', this.playerContainer).removeClass('-hidden');
      this.muteButton = $('.viewer__mute:first', this.controlsContainer);
      this.fingerButton = $('.viewer__hand:first', this.controlsContainer).removeClass('-hidden');
      this.playButton = $('.viewer__play__mobile:first', this.controlsContainer);
      this.shareButton = $('.viewer__share__mobile:first', this.controlsContainer);
      this.stamp = $('.viewer__stamp:first', this.controlsContainer);
      this.mobileMark = $('.viewer__site-logo:first', this.controlsContainer);
      this.changerButtons = $('.viewer__coubs-changer', this.controlsContainer);
      this.toAppPause = $('.viewer__pause__open-in-app', this.controlsContainer);
      this.toApp = $('.viewer__open-in-app', this.controlsContainer);
      this.getApp = $('.viewer__get-app', this.controlsContainer);
      this.coubLink = $('.viewer__coub-link', this.controlsContainer);
      this.vb.on(this.ACTION_RESIZE, this.setSizes.bind(this));
    }

    UI.prototype.init = function() {
      this.setSizes();
      this.poster.on('load', this.setSizes.bind(this));
      this.mobileMark.click(function() {
        return AmplitudeMobile.track('logo_clicked');
      });
      $('.viewer__pause__play', this.vb).click(function() {
        return AmplitudeMobile.track('pause_button_clicked');
      });
      return this.initOpenInApp();
    };

    UI.prototype.initPauseScreen = function() {
      var $shares;
      if (this.isPauseScreenInitialized) {
        return;
      }
      $shares = $('.viewer__share__social', this.pauseLayer);
      if (helpers.Location.isVkontakteEmbed()) {
        $shares.not('.copy').remove();
      } else {
        if (!GlobalState.PLATFORM.isMobile()) {
          $shares.filter('.watsapp, .messenger').remove();
        }
        window.CustomSharingButton.constructIn(this.pauseLayer);
      }
      $shares.filter('.social').click(function() {
        return AmplitudeMobile.track('sharing_clicked', {
          to: this.getAttribute('data-custom-sharing')
        });
      });
      this.linkButton.click((function(_this) {
        return function() {
          return _this.setView(_this.VIEW.PAUSED_COPY_LINK);
        };
      })(this));
      $('input', this.copyLayer).click(function(e) {
        e.stopPropagation();
        return this.setSelectionRange(0, this.value.length);
      });
      return this.isPauseScreenInitialized = true;
    };

    UI.prototype.initOpenInApp = function() {
      return widgets.AppLink.constructIn(this.controlsContainer);
    };

    UI.prototype.hideToApp = function() {
      return this.toAppPause.add(this.toApp).add(this.getApp).addClass('-force-hidden');
    };

    UI.prototype.setSizes = function() {
      this.width = this.poster.width();
      this.height = this.poster.height();
      return this.screen.css({
        width: this.width,
        height: this.height
      });
    };

    UI.prototype.isVisible = function() {
      return this.poster.is(":visible");
    };

    UI.prototype.loadingProgress = function(progress) {
      this.loadingBar.removeClass("-hidden -progress10 -progress50");
      if (progress <= 0.1) {
        this.loadingBar.addClass("-progress10");
      } else if (progress <= 0.5) {
        this.loadingBar.addClass("-progress50");
      }
      if (progress === 1) {
        return this.loadingBar.addClass('-hidden');
      }
    };

    UI.prototype.setAhmadPromoQuote = function(data) {
      var content;
      content = $(this.getAhmadPromoContent(data.quote, data.source));
      return $('canvas', this.vb).after(content);
    };

    UI.prototype.getAhmadPromoContent = function(quote, artist) {
      return "<div class=\"-ahmad-promo-quote-container\">\n  <div class=\"-ahmad-promo-quote\">" + quote + "</div>\n  <div class=\"-ahmad-promo-artist\">— " + artist + "</div>\n</div>";
    };

    UI.prototype.hideFinger = function() {
      return this.fingerButton.addClass('-force-hidden');
    };

    UI.prototype.hideControlsPermanently = function(keepHand) {
      if (keepHand) {
        return this.controlsContainer.children().not('.viewer__hand').addClass('-force-hidden');
      } else {
        return this.controlsContainer.addClass('-force-hidden');
      }
    };

    UI.prototype.audioFailed = function() {
      return this.muteButton.removeClass('-fill').addClass('-failed').find('> i:first').attr({
        'data-prompt': I18n.embed.tooltips.audio_failed,
        'data-prompt-class': 'hbold',
        'direction': 'below',
        'constraint': 'right'
      }).prompt();
    };

    UI.prototype.setView = function(view) {
      this.pauseLayer.add(this.copyLayer).add(this.toApp).add(this.getApp).add(this.coubLink).add(this.toAppPause).add(this.fingerButton).add(this.mobileMark).add(this.muteButton).add(this.shareButton).add(this.playButton).add(this.loadingBar).add(this.stamp).add(this.changerButtons).addClass('-hidden');
      this.fingerButton.removeClass('disabled');
      this.mobileMark.removeClass('-blue');
      this.getApp.removeClass('-bottom');
      switch (view) {
        case this.VIEW.UNLOADED:
          this.mobileMark.add(this.fingerButton).add(this.shareButton).removeClass('-hidden');
          return this.getApp.addClass('-bottom');
        case this.VIEW.LOADING:
          return this.mobileMark.add(this.loadingBar).add(this.shareButton).removeClass('-hidden');
        case this.VIEW.PLAYING:
          return this.mobileMark.removeClass('-hidden');
        case this.VIEW.PLAYING_MUTED:
          return this.muteButton.add(this.mobileMark).add(this.shareButton).removeClass('-hidden');
        case this.VIEW.SUSPENDED:
          this.mobileMark.add(this.shareButton).add(this.playButton).removeClass('-hidden');
          return this.muteButton.toggleClass('-hidden', this.player.isAudioPreloaded);
        case this.VIEW.PAUSED:
          this.pauseLayer.add(this.toApp).add(this.getApp).add(this.mobileMark).add(this.stamp).removeClass('-hidden');
          this.mobileMark.addClass('-blue');
          return this.initPauseScreen();
        case this.VIEW.PAUSED_COPY_LINK:
          this.copyLayer.add(this.toApp).add(this.getApp).add(this.mobileMark).add(this.stamp).removeClass('-hidden');
          this.mobileMark.addClass('-blue');
          return this.initPauseScreen();
        case this.VIEW.DISABLED:
          this.mobileMark.add(this.fingerButton).add(this.shareButton).removeClass('-hidden');
          return this.fingerButton.addClass('disabled');
      }
    };

    return UI;

  })();

}).call(this);
(function() {
  mobilePlayer.VideoCore = (function() {
    function VideoCore(player, videoData) {
      this.player = player;
      this.videoData = videoData;
    }

    VideoCore.prototype.reinit = function() {
      var d, el, i, j, len, len1, ref, ref1, ref2;
      ref = [this.chunksDefer];
      for (i = 0, len = ref.length; i < len; i++) {
        d = ref[i];
        d && d.resolve();
      }
      this.pause();
      ref1 = [this.video];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        el = ref1[j];
        $(el).attr('src', '');
        el && el.load();
        $(el).remove();
      }
      return ref2 = [], this.chunksDefer = ref2[0], this.sharedAudio = ref2[1], this.video = ref2[2], ref2;
    };

    VideoCore.prototype.preloadFrames = function() {
      var $video, promise;
      if (this.chunksDefer == null) {
        $video = $("<video preload='auto' muted src='" + this.videoData.video + "' loop />");
        $video.prependTo(this.player.ui.playerContainer);
        this.video = $video.get(0);
        this.chunksDefer = $.Deferred();
        $video.one("canplaythrough", (function(_this) {
          return function() {
            _this.video.pause();
            _this.video.currentTime = 0;
            $video.css("visibility", "");
            _this.chunksDefer.notify(1);
            return _this.chunksDefer.resolve();
          };
        })(this));
        $video.css("visibility", "hidden");
        promise = this.video.play();
      }
      return this.chunksDefer.promise();
    };

    VideoCore.prototype.loadAudio = function() {
      this.sharedAudio || (this.sharedAudio = new mobilePlayer.SharedAudio(this.videoData.audio));
      return this.sharedAudio.load();
    };

    VideoCore.prototype.playSimpleLoop = function() {
      this.notifyAboutPlay();
      return this.video.play();
    };

    VideoCore.prototype.playAudioSyncLoop = function() {
      this.notifyAboutPlay();
      this.sharedAudio || (this.sharedAudio = new mobilePlayer.SharedAudio(this.videoData.audio));
      this.video.play();
      return this.sharedAudio.play().done(this.sync.bind(this));
    };

    VideoCore.prototype.rewind = function() {
      return this.video.currentTime = 0;
    };

    VideoCore.prototype.pause = function() {
      this.notifyAboutPause();
      this.video && this.video.pause();
      return this.sharedAudio && this.sharedAudio.pause();
    };

    VideoCore.prototype.sync = function() {
      return this.video.currentTime = Math.round(1000 * this.sharedAudio.getEl().currentTime) % Math.round(1000 * this.videoData.duration) / 1000;
    };

    VideoCore.prototype.toggleMute = function(val) {
      return this.sharedAudio && this.sharedAudio.toggleMute(val);
    };

    VideoCore.prototype.notifyAboutReadyState = function() {
      return this.player.vb.triggerHandler(Player.EVENT_READY);
    };

    VideoCore.prototype.notifyAboutPlay = function() {
      if (this.player.isAutoplay) {
        AmplitudeMobile.trackOnce("started");
      }
      return this.player.vb.triggerHandler(Player.EVENT_PLAYING);
    };

    VideoCore.prototype.notifyAboutPause = function() {
      return this.player.vb.triggerHandler(Player.EVENT_PAUSED);
    };

    return VideoCore;

  })();

}).call(this);
(function() {
  mobilePlayer.SharedAudio = (function() {
    function SharedAudio(sources) {
      this.sharedElement = mobilePlayer.SharedAudioElement.init();
      this.sources = sources;
      this.muted = false;
    }

    SharedAudio.prototype.getEl = function(jqEl) {
      var $audioEl;
      $audioEl = this.sharedElement.getEl();
      return jqEl && $audioEl || $audioEl[0];
    };

    SharedAudio.prototype.isCurrent = function() {
      return this.sources === this.sharedElement.getSources();
    };

    SharedAudio.prototype.toggleMute = function(val) {
      return this.muted = !!val;
    };

    SharedAudio.prototype.load = function() {
      this.sharedElement.setSrc(this.sources);
      this.getEl().muted = true;
      return this.sharedElement.play();
    };

    SharedAudio.prototype.play = function() {
      if (!this.isCurrent()) {
        return this.load().done((function(_this) {
          return function() {
            return _this.getEl().muted = _this.muted;
          };
        })(this));
      } else {
        this.getEl().muted = this.muted;
        return this.sharedElement.play();
      }
    };

    SharedAudio.prototype.pause = function() {
      if (!this.isCurrent()) {
        return;
      }
      return this.getEl().pause();
    };

    return SharedAudio;

  })();

}).call(this);
(function() {
  mobilePlayer.SharedAudioElement = {
    init: function() {
      this.el || (this.el = $('<audio loop preload="metadata" />').appendTo("body"));
      return this;
    },
    getEl: function() {
      return this.el;
    },
    getSources: function() {
      return this.sources;
    },
    setSrc: function(sources) {
      var i, len, versionUrl;
      this.sources = sources;
      this.canPlayFired = false;
      this.el.off().empty();
      for (i = 0, len = sources.length; i < len; i++) {
        versionUrl = sources[i];
        $("<source />", {
          src: versionUrl
        }).appendTo(this.el);
      }
      this.el[0].load();
      this.el.on("pause", function(e) {
        if (!this.ended) {
          return;
        }
        return _.defer(function(audio) {
          if (!audio.ended && audio.paused) {
            return audio.play();
          }
        }, this);
      });
      return this.el.on("ended", function() {
        this.currentTime = 0;
        return this.play();
      });
    },
    play: function() {
      var defer, onPlay;
      defer = $.Deferred();
      this.el.on("progress", function(e) {
        var buffered, total;
        if (this.buffered.length > 0) {
          total = this.duration;
          buffered = this.buffered.end(this.buffered.length - 1);
          return defer.notify(buffered / total);
        } else {
          return defer.notify(0);
        }
      });
      this.el.on("error", (function(_this) {
        return function() {
          defer.notify(1);
          return defer.reject();
        };
      })(this));
      onPlay = function() {
        defer.notify(1);
        return defer.resolve();
      };
      if (this.canPlayFired) {
        this.el.one("play", onPlay);
      } else {
        this.el.one("canplay", (function(_this) {
          return function() {
            _this.hasTouch = true;
            _this.canPlayFired = true;
            return onPlay();
          };
        })(this));
      }
      this.el.get(0).play();
      return defer.promise();
    },
    allowedToPlay: function() {
      return this.hasTouch || this.initGestureNotRequired;
    },
    testGestureReq: function() {
      var audioEl, playPromise;
      if (!this.gestureDefer) {
        this.gestureDefer = $.Deferred();
        audioEl = $("<audio />", {
          preload: "none",
          src: "data:audio/m4a;base64,Q2FsYW1pbmUgLSBUcmFtcG9saW5lCg=="
        }).get(0);
        playPromise = audioEl.play();
        if (!playPromise || !playPromise["catch"]) {
          return this.gestureDefer.reject().promise();
        }
        playPromise["catch"]((function(_this) {
          return function(e) {
            if (e.name && e.name !== "NotAllowedError") {
              _this.initGestureNotRequired = true;
              return _this.gestureDefer.resolve();
            } else {
              return _this.gestureDefer.reject();
            }
          };
        })(this));
      }
      return this.gestureDefer.promise();
    }
  };

}).call(this);
(function() {
  window.MobilePlayer = (function() {
    MobilePlayer.prototype.STATE = {
      UNLOADED: "unloaded",
      LOADING: "loading",
      PLAYING: "playing",
      PAUSED: "paused"
    };

    MobilePlayer.prototype.DT = "MobilePlayer";

    function MobilePlayer(viewerBlock, opts) {
      var e, jsonStr, videoData;
      if (opts == null) {
        opts = {};
      }
      this.vb = $(viewerBlock).addClass('viewer--mobile');
      this.isEmbed = !!opts.embed;
      this.ui = new mobilePlayer.UI(this, this.isEmbed);
      this.ui.init();
      try {
        this.data = opts.data ? opts.data : (jsonStr = $('.data > script', this.vb).html(), JSON.parse(jsonStr));
      } catch (error) {
        e = error;
        this.ui.setView(mobilePlayer.UI.prototype.VIEW.DISABLED);
        console.log('[HB-DEBUG]', "Something wrong with coub's JSON", {
          context: {
            json: jsonStr
          }
        });
        throw e;
      }
      try {
        this.mobileData = this.data.file_versions.mobile;
      } catch (error) {
        e = error;
        this.ui.setView(mobilePlayer.UI.prototype.VIEW.DISABLED);
        console.log('[HB-DEBUG]', "Can't find mobile data in coub's JSON", {
          context: {
            json: JSON.stringify(this.data)
          }
        });
        throw e;
      }
      try {
        videoData = {
          duration: this.data.duration,
          audio: this.mobileData.audio,
          video: this.mobileData.video
        };
      } catch (error) {
        e = error;
        this.ui.setView(mobilePlayer.UI.prototype.VIEW.DISABLED);
        console.log('[HB-DEBUG]', "Something wrong with base64 chunks", {
          context: {
            mobileData: JSON.stringify(this.mobileData)
          }
        });
        throw e;
      }
      this.changeState(this.STATE.UNLOADED);
      this.ui.setView(mobilePlayer.UI.prototype.VIEW.UNLOADED);
      this.hasAudio = !!videoData.audio;
      this.hasSelfSound = this.hasAudio && this.data.has_sound;
      this.isAudioPreloaded = false;
      AmplitudeMobile.init(this.isEmbed, this.hasSelfSound, this.hasAudio, videoData.duration, 1);
      this.core = GlobalState.PLATFORM.isIos() ? (this.ui.vb.addClass('viewer--ios'), new mobilePlayer.CanvasCore(this, videoData)) : new mobilePlayer.VideoCore(this, videoData);
      if (this.data.ahmad_promo) {
        this.ui.setAhmadPromoQuote(this.data.ahmad_promo);
      }
      this.canAutoplay = !GlobalState.PLATFORM.isVkIosApp() && (!GlobalState.PLATFORM.isMobile() || GlobalState.PLATFORM.isIos() || this.data.permalink === "4abl");
      this.isAutoplay = this.canAutoplay && !!opts.autoplay;
      this.noControls = !!opts.noControls;
      if (this.noControls) {
        this.ui.hideControlsPermanently(!this.isAutoplay);
      }
      this.isMuted = (this.canAutoplay || this.noControls) && !!opts.muted;
      this.attachEvents();
      if (this.isAutoplay) {
        this.play();
      }
      this.dispatcher = new EmbedDispatcher({
        onStop: (function(_this) {
          return function() {
            if (!_this.isAutoplay || (_this.hasAudio && _this.isAudioPreloaded)) {
              return _this.suspend();
            }
          };
        })(this)
      });
      this.core.notifyAboutReadyState();
      if (this.isEmbed) {
        this.preload();
      }
      if (this.isAdult()) {
        this.ui.hideToApp();
      }
    }

    MobilePlayer.prototype.isAdult = function() {
      return this.data.age_restricted || this.data.age_restricted_by_admin || this.data.not_safe_for_work;
    };

    MobilePlayer.prototype.attachEvents = function() {
      $(document).on('visibilitychange', (function(_this) {
        return function() {
          if (document.hidden) {
            if (_this.state !== _this.STATE.PLAYING) {
              return;
            }
            _this.suspend();
            return _this.browserPaused = true;
          } else if (_this.browserPaused) {
            _this.play();
            return _this.browserPaused = false;
          }
        };
      })(this));
      this.vb.on('click', '.viewer__click', this.togglePlayState.bind(this));
      this.ui.muteButton.click(this.plugInSound.bind(this));
      this.ui.shareButton.click(this.pause.bind(this));
      this.vb.on('play', (function(_this) {
        return function() {
          _this.play();
          return AmplitudeMobile.track('play_triggered');
        };
      })(this));
      this.vb.on('pause', this.pause.bind(this));
      this.vb.on('suspend', this.suspend.bind(this));
      this.vb.on('resize', this.ui.setSizes.bind(this.ui));
      if (this.canAutoplay) {
        this.vb.on('hidefinger', this.ui.hideFinger.bind(this.ui));
      }
      this.vb.on('suspend.player', this.suspend.bind(this));
      this.vb.on('forceplay.player', (function(_this) {
        return function() {
          return _this.play(true);
        };
      })(this));
      this.vb.on('pluginsound.player', this.plugInSound.bind(this));
      this.vb.on('preload.player', this.preload.bind(this));
      return this.vb.on('unembed.player', this.unload.bind(this));
    };

    MobilePlayer.prototype.togglePlayState = function() {
      if (GlobalState.PAGE.isCoubPage()) {
        AmplitudeCoub.track(AmplitudeCoub.COUB_PAGE.PLAYER.CENTER_CLICKED);
      }
      if (this.state === this.STATE.LOADING) {
        return;
      }
      if (this.state !== this.STATE.PLAYING) {
        this.userPaused = false;
        this.notifyAboutView();
        if (this.isAudioPreloaded || !this.hasAudio) {
          this.play(true);
        } else {
          this.preloadAllAndPlay();
        }
        return AmplitudeMobile.track('play_clicked');
      } else {
        this.userPaused = true;
        this.pause();
        return AmplitudeMobile.track('pause_clicked');
      }
    };

    MobilePlayer.prototype.plugInSound = function() {
      var ref;
      if (GlobalState.PAGE.isCoubPage()) {
        AmplitudeCoub.track(AmplitudeCoub.COUB_PAGE.PLAYER.PLAYER_UNMUTE_CLICKED);
        AmplitudeCoub.track(AmplitudeCoub.COUB_PAGE.PLAYER.CENTER_CLICKED);
      }
      if ((ref = this.state) !== this.STATE.PLAYING && ref !== this.STATE.PAUSED) {
        return;
      }
      if (this.isAudioFailed || !this.hasAudio) {
        return;
      }
      if (this.isAudioPreloaded) {
        this.core.rewind();
        this.playWithAudio();
      } else {
        this.core.pause();
        this.preloadAudioAndPlay();
      }
      return AmplitudeMobile.track('unmute_clicked');
    };

    MobilePlayer.prototype.play = function(isUserIntent) {
      if (this.state === this.STATE.PAUSED && !this.userPaused) {
        if (this.hasAudio && this.canPlayAudio()) {
          return this.playWithAudio();
        } else {
          return this.playMuted();
        }
      } else if (this.state === this.STATE.UNLOADED) {
        if (!this.canAutoplay && !isUserIntent) {
          return;
        }
        if (this.hasAudio && !this.isMuted && (this.canPlayAudio() || isUserIntent || !GlobalState.PLATFORM.isMobile())) {
          this.preloadAllAndPlay();
        } else {
          this.preloadFramesAndPlay();
        }
        return this.notifyAboutView();
      }
    };

    MobilePlayer.prototype.pause = function() {
      var ref, ref1;
      if ((ref = this.state) !== this.STATE.PAUSED && ref !== this.STATE.PLAYING && ref !== this.STATE.UNLOADED) {
        return;
      }
      if (GlobalState.PAGE.isCoubPage()) {
        AmplitudeCoub.track(AmplitudeCoub.COUB_PAGE.PLAYER.PAUSE_OCCURED);
      }
      if ((ref1 = this.state) === this.STATE.PAUSED || ref1 === this.STATE.PLAYING) {
        this.changeState(this.STATE.PAUSED);
        this.core.pause();
      }
      if (helpers.Location.isVkontakteEmbed()) {
        return this.ui.setView(mobilePlayer.UI.prototype.VIEW.PAUSED_COPY_LINK);
      } else {
        return this.ui.setView(mobilePlayer.UI.prototype.VIEW.PAUSED);
      }
    };

    MobilePlayer.prototype.suspend = function() {
      var ref;
      if ((ref = this.state) !== this.STATE.PLAYING) {
        return;
      }
      this.changeState(this.STATE.PAUSED);
      this.core.pause();
      return this.ui.setView(mobilePlayer.UI.prototype.VIEW.SUSPENDED);
    };

    MobilePlayer.prototype.mute = function() {
      return this.core.toggleMute(true);
    };

    MobilePlayer.prototype.unmute = function() {
      return this.core.toggleMute(false);
    };

    MobilePlayer.prototype.preload = function() {
      if (GlobalState.PLATFORM.isIos()) {
        return this.core.preloadFrames();
      }
    };

    MobilePlayer.prototype.unload = function() {
      var ref;
      if (this.state === this.STATE.UNLOADED) {
        return;
      }
      this.core.reinit();
      this.changeState(this.STATE.UNLOADED);
      ref = [], this.userPaused = ref[0], this.browserPaused = ref[1], this.isAudioPreloaded = ref[2];
      return this.ui.setView(mobilePlayer.UI.prototype.VIEW.UNLOADED);
    };

    MobilePlayer.prototype.preloadFramesAndPlay = function() {
      var framesDefer;
      this.changeState(this.STATE.LOADING);
      this.ui.setView(mobilePlayer.UI.prototype.VIEW.LOADING);
      this.ui.loadingProgress(0.1);
      framesDefer = this.core.preloadFrames();
      framesDefer.done((function(_this) {
        return function() {
          return _this.playMuted();
        };
      })(this));
      framesDefer.progress((function(_this) {
        return function(progress) {
          return _this.ui.loadingProgress(Math.max(progress, 0.1));
        };
      })(this));
      return framesDefer.fail((function(_this) {
        return function() {
          return _this.unload();
        };
      })(this));
    };

    MobilePlayer.prototype.preloadAudioAndPlay = function() {
      var audioDefer;
      audioDefer = this.core.loadAudio();
      audioDefer.done((function(_this) {
        return function() {
          _this.isAudioPreloaded = true;
          _this.core.rewind();
          return _this.playWithAudio();
        };
      })(this));
      audioDefer.fail((function(_this) {
        return function() {
          _this.isAudioFailed = true;
          _this.ui.audioFailed();
          _this.core.rewind();
          return _this.playMuted();
        };
      })(this));
      audioDefer.progress((function(_this) {
        return function(progress) {
          return _this.ui.loadingProgress(Math.max(progress, 0.1));
        };
      })(this));
      this.changeState(this.STATE.LOADING);
      this.ui.setView(mobilePlayer.UI.prototype.VIEW.LOADING);
      return this.ui.loadingProgress(0.1);
    };

    MobilePlayer.prototype.preloadAllAndPlay = function() {
      var audioDefer, audioProg, checkAll, drawProgress, framesDefer, framesPreloaded, framesProg;
      framesDefer = this.core.preloadFrames();
      audioDefer = this.core.loadAudio();
      audioProg = 0;
      framesProg = 0;
      framesPreloaded = false;
      checkAll = (function(_this) {
        return function() {
          if (!framesPreloaded) {
            return;
          }
          if (_this.isAudioPreloaded) {
            return _this.playWithAudio();
          } else if (_this.isAudioFailed) {
            _this.ui.audioFailed();
            return _this.playMuted();
          }
        };
      })(this);
      drawProgress = (function(_this) {
        return function() {
          return _this.ui.loadingProgress(Math.max(audioProg * .5 + framesProg * .5, .1));
        };
      })(this);
      audioDefer.done((function(_this) {
        return function() {
          _this.isAudioPreloaded = true;
          return checkAll();
        };
      })(this));
      audioDefer.fail((function(_this) {
        return function() {
          _this.isAudioFailed = true;
          return checkAll();
        };
      })(this));
      framesDefer.done((function(_this) {
        return function() {
          framesPreloaded = true;
          return checkAll();
        };
      })(this));
      audioDefer.progress((function(_this) {
        return function(progress) {
          console.log(_this.DT, 'audio', progress);
          audioProg = progress;
          return drawProgress();
        };
      })(this));
      framesDefer.progress((function(_this) {
        return function(progress) {
          console.log(_this.DT, 'video', progress);
          framesProg = progress;
          return drawProgress();
        };
      })(this));
      this.changeState(this.STATE.LOADING);
      this.ui.setView(mobilePlayer.UI.prototype.VIEW.LOADING);
      return this.ui.loadingProgress(0.1);
    };

    MobilePlayer.prototype.canPlayAudio = function() {
      return this.isAudioPreloaded || mobilePlayer.SharedAudioElement.allowedToPlay();
    };

    MobilePlayer.prototype.playMuted = function() {
      this.changeState(this.STATE.PLAYING);
      this.dispatcher && this.dispatcher.startedPlaying();
      if (this.hasAudio) {
        this.ui.setView(mobilePlayer.UI.prototype.VIEW.PLAYING_MUTED);
      } else {
        this.ui.setView(mobilePlayer.UI.prototype.VIEW.PLAYING);
      }
      return this.core.playSimpleLoop();
    };

    MobilePlayer.prototype.playWithAudio = function() {
      this.changeState(this.STATE.PLAYING);
      this.ui.setView(mobilePlayer.UI.prototype.VIEW.PLAYING);
      this.dispatcher && this.dispatcher.startedPlaying();
      return this.core.playAudioSyncLoop();
    };

    MobilePlayer.prototype.changeState = function(state) {
      var key, ref, value;
      console.log(this.DT, "Change state to", state);
      this.state = state;
      ref = this.STATE;
      for (key in ref) {
        value = ref[key];
        this.vb.removeClass("-state-" + value);
      }
      return this.vb.addClass("-state-" + state);
    };

    MobilePlayer.prototype.notifyAboutView = function() {
      if (this.notifedAboutView) {
        return;
      }
      this.notifedAboutView = true;
      return StatsDataProvider.coubIncrementViews(this.data.permalink, 'mobile', this.isEmbed);
    };

    return MobilePlayer;

  })();

}).call(this);
(function() {
  window.Player = (function() {
    function Player(el, opts) {
      if (opts == null) {
        opts = {};
      }
      if (!opts.skip_html5 && window.MediaSource && !GlobalState.PLATFORM.isMobile()) {
        this.curHandler = new Html5Player(el, opts);
      }
      this.curHandler || (this.curHandler = new MobilePlayer(el, opts));
    }

    return Player;

  })();

  $.fn.player = function(opts) {
    return this.each(function() {
      if (!this.getAttribute('data-player-initialized')) {
        this.setAttribute('data-player-initialized', true);
        return new Player(this, opts);
      }
    });
  };

  Player.ACTION_ACTIVATE_HAND_CONTROL = "Player:Actions:ActivateHandControl";

  Player.ACTION_DEACTIVATE_HAND_CONTROL = "Player:Actions:DeactivateHandControl";

  Player.ACTION_UNEMBED_IF_NOT_PLAYING = "Player:Actions:UnembedIfNotPlaying";


  /* HTML5 Actions */

  Player.ACTION_SET_FULLSCREEN_ELEMENT = "Player:Actions:SetFullscreenElement";

  Player.ACTION_HIDE_CONTROLS = "Player:Actions:HideControls";

  Player.ACTION_SHOW_CONTROLS = "Player:Actions:ShowControls";

  Player.ACTION_TURN_HD_ON = "Player:Actions:TurnHdOn";

  Player.EVENT_READY = "Player:Ready";

  Player.EVENT_PLAYING = "playWasStarted";

  Player.EVENT_PAUSED = "Player:Paused";

  Player.EVENT_PLUG_IN_SOUND = "Player:PlugInSound";

  Player.EVENT_HTML5_FALLBACK = "Player:Html5Fallback";

  Player.EVENT_AUDIO_TRACK_ENDED = "Player::AudioTrackEnded";

  Player.LOOP_OCCURED = "Player::LoopOccured";

}).call(this);
(function() {
  window.Tooltip = (function() {
    function Tooltip(opts) {
      var i, j, k, len, len1, offsetParams, param, ref, v;
      this.element = opts.element;
      if (opts == null) {
        opts = {};
      }
      if (opts.type == null) {
        opts.type = "";
      }
      if (opts.content == null) {
        opts.content = "";
      }
      this.opts = opts;
      this.el = $("<div class=\"tooltip tooltip--simple " + opts.type + "\">\n  <div class=\"tooltip__inner\">\n    " + opts.content + "\n  </div>\n</div>");
      if (this.opts.parent) {
        this.opts.parent.append(this.el);
      } else if (helpers.Location.isFullScreen()) {
        $($(document).fullScreen()).append(this.el);
      } else {
        $("body").append(this.el);
      }
      this.offsets = [];
      offsetParams = ["data-prompt-left", "data-prompt-top"];
      for (j = 0, len = offsetParams.length; j < len; j++) {
        param = offsetParams[j];
        if ((this.element != null) && (v = this.element.attr(param))) {
          this.offsets.push(parseInt(v));
        } else {
          this.offsets.push(0);
        }
      }
      this.fsOffsets = this.offsets.slice();
      i = 0;
      ref = ['data-fs-prompt-left', 'data-fs-prompt-top'];
      for (k = 0, len1 = ref.length; k < len1; k++) {
        param = ref[k];
        if ((this.element != null) && (v = this.element.attr(param))) {
          this.fsOffsets[i] = parseInt(v);
        }
        i++;
      }
    }

    Tooltip.prototype.setContent = function(content) {
      return this.el.find(".tooltip__inner").html(content);
    };

    Tooltip.prototype.remove = function() {
      return this.el.remove();
    };

    Tooltip.prototype.hide = function() {
      if (this.el.is(":visible")) {
        return this.el.hide();
      }
    };

    Tooltip.prototype.show = function() {
      if (!this.el.is(":visible")) {
        return this.el.show();
      }
    };

    Tooltip.prototype.position = function(left, top, direction, constraint) {
      var elWidth, offsets, shift;
      elWidth = this.el.innerWidth();
      shift = 0;
      offsets = helpers.Location.isFullScreen() ? this.fsOffsets : this.offsets;
      if (['above', 'below'].indexOf(direction) !== -1) {
        switch (constraint) {
          case 'left':
            left -= this.element.outerWidth() / 2 - offsets[0];
            break;
          case 'right':
            left -= elWidth - this.element.outerWidth() / 2 - offsets[0];
            break;
          default:
            left = (left - elWidth / 2) + offsets[0];
        }
      }
      switch (direction) {
        case 'above':
          top = (top - this.el.height() + shift) + offsets[1];
          break;
        case 'below':
          shift += 3;
          top = top + this.el.outerHeight() + shift + offsets[1];
          break;
        case 'left':
          top = top + this.el.outerHeight() / 2 + offsets[1];
          left = left - elWidth - 3 + offsets[0];
          break;
        case 'right':
          top = top + this.el.outerHeight() / 2 + offsets[1];
          left = left + elWidth + 3 + offsets[0];
          break;
        default:
          top = (top - this.el.height() + shift) + offsets[1];
          left = (left - elWidth / 2) + offsets[0];
      }
      if (top < 0) {
        top = 0;
      }
      if (left < 0) {
        left = 0;
      }
      return this.el.css({
        top: Math.round(top) + "px",
        left: Math.round(left) + "px"
      });
    };

    Tooltip.prototype.positionDirectly = function(left, top) {
      var elWidth, newLeft, newTop;
      elWidth = this.el.innerWidth();
      newLeft = left - elWidth / 2;
      newTop = top - this.el.height() + 8;
      return this.el.css({
        left: Math.round(newLeft) + "px",
        top: Math.round(newTop) + "px"
      });
    };

    return Tooltip;

  })();

}).call(this);
(function() {
  window.Prompt = (function() {
    Prompt.prototype.DIRECTIONS = {
      ABOVE: 'above',
      BELOW: 'below',
      LEFT: 'left',
      RIGHT: 'right'
    };

    Prompt.prototype.CONSTRAINTS = {
      LEFT: 'left',
      RIGHT: 'right',
      NONE: 'none'
    };

    Prompt.EVENT_CHANGE_TEXT = "prompt:changeText";

    Prompt.ACTION_HIDE = "prompt:Actions:Hide";

    Prompt.ACTION_SHOW = "prompt:Actions:Show";

    function Prompt(el, opts) {
      this.element = $(el);
      this.disableCheckTimer = void 0;
      this.bindedHidePrompt = this.hidePrompt.bind(this);
      this.element.bind("mouseenter.prompt", this.showPrompt.bind(this));
      this.element.bind("mouseleave.prompt hidePrompt.prompt", this.bindedHidePrompt);
      $(window).on("scroll", this.bindedHidePrompt);
      this.element.bind(Prompt.EVENT_CHANGE_TEXT, this.changeText.bind(this));
      this.element.bind(Prompt.ACTION_SHOW, this.showPrompt.bind(this));
      this.element.bind(Prompt.ACTION_HIDE, this.hidePrompt.bind(this));
    }

    Prompt.prototype.destroy = function() {
      this.hidePrompt();
      $(window).off("scroll", this.bindedHidePrompt);
      return this.element.off(".prompt " + Prompt.EVENT_CHANGE_TEXT + " " + Prompt.ACTION_SHOW + " " + Prompt.ACTION_HIDE);
    };

    Prompt.prototype.showPrompt = function(e) {
      if (e != null) {
        e.preventDefault();
      }
      if (this.tooltip == null) {
        if (this.isActive()) {
          this.cssClass = [this.element.attr('data-prompt-class'), this.getDirection()];
          this.getTooltip();
          this.elementPosition();
          return this.startDisableCheckTimer();
        }
      }
    };

    Prompt.prototype.startDisableCheckTimer = function() {
      this.stopDisableCheckTimer();
      return this.disableCheckTimer = setInterval((function(_this) {
        return function() {
          if (_this.tooltip != null) {
            if ((_this.element.attr("disabled") != null) || !_this.isActive()) {
              return _this.hidePrompt();
            }
          } else {
            return _this.stopDisableCheckTimer();
          }
        };
      })(this), 1000);
    };

    Prompt.prototype.stopDisableCheckTimer = function() {
      if (this.disableCheckTimer != null) {
        clearInterval(this.disableCheckTimer);
        return this.disableCheckTimer = void 0;
      }
    };

    Prompt.prototype.getTooltip = function() {
      return this.tooltip = new Tooltip({
        type: this.cssClass.join(' '),
        element: this.element,
        content: this.getContent()
      });
    };

    Prompt.prototype.hidePrompt = function(e) {
      if (e != null) {
        e.preventDefault();
      }
      if (this.tooltip) {
        this.tooltip.remove();
        return this.tooltip = null;
      }
    };

    Prompt.prototype.elementPosition = function() {
      var constraint, defaultLeft, defaultTop, direction, elHeight, elWidth, left, rect, top;
      direction = this.getDirection();
      constraint = this.getConstraint();
      defaultTop = this.element.offset().top;
      defaultLeft = this.element.offset().left;
      rect = this.element.get(0).getBoundingClientRect();
      elWidth = rect.width;
      elHeight = rect.height;
      switch (direction) {
        case this.DIRECTIONS.ABOVE:
          top = defaultTop;
          left = defaultLeft + elWidth / 2;
          break;
        case this.DIRECTIONS.BELOW:
          top = defaultTop + elHeight;
          left = defaultLeft + elWidth / 2;
          break;
        case this.DIRECTIONS.LEFT:
          top = defaultTop + elHeight / 2;
          left = defaultLeft;
          break;
        case this.DIRECTIONS.RIGHT:
          top = defaultTop + elHeight / 2;
          left = defaultLeft + elWidth;
          break;
        default:
          top = defaultTop;
          left = defaultLeft;
      }
      return this.tooltip.position(left, top, direction, constraint);
    };

    Prompt.prototype.getDirection = function() {
      var direction;
      direction = this.element.attr('direction');
      if (direction != null) {
        return this.DIRECTIONS[direction.toUpperCase()];
      } else {
        return this.DIRECTIONS.ABOVE;
      }
    };

    Prompt.prototype.getConstraint = function() {
      var constraint;
      constraint = this.element.attr('constraint');
      if (constraint != null) {
        return this.CONSTRAINTS[constraint.toUpperCase()];
      } else {
        return this.CONSTRAINTS.NONE;
      }
    };

    Prompt.prototype.changeText = function(e, content) {
      this.setContent(content || e.content);
      if ((this.tooltip != null) && (this.tooltip.el != null) && this.tooltip.el.is(":visible")) {
        this.tooltip.setContent(this.getContent());
        return this.elementPosition();
      }
    };

    Prompt.prototype.isActive = function() {
      return this.element.attr('inactive') == null;
    };

    Prompt.prototype.getContent = function() {
      var v;
      if ((v = this.element.attr('data-prompt')) != null) {
        return v;
      } else {
        return "";
      }
    };

    Prompt.prototype.setContent = function(content) {
      if (content == null) {
        content = "";
      }
      return this.element.attr("data-prompt", content);
    };

    return Prompt;

  })();

  $.fn.prompt = function(opts) {
    return this.each(function() {
      if (!this.getAttribute('data-prompt-initialized')) {
        this.setAttribute('data-prompt-initialized', true);
        return new Prompt(this, opts);
      }
    });
  };

}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.AbstractAppSchemeLink = (function() {
    AbstractAppSchemeLink.prototype.schemeLink = 'what://ever';

    AbstractAppSchemeLink.prototype.alternativeLink = 'http://what.ever';

    AbstractAppSchemeLink.prototype.redirectHTPP = 'what_ever_redirect_http';

    AbstractAppSchemeLink.prototype.redirectApp = 'what_ever_redirect_app';

    AbstractAppSchemeLink.prototype.settings = {
      delay: 5000,
      delta: 500
    };

    function AbstractAppSchemeLink(el) {
      this.openAppStore = bind(this.openAppStore, this);
      this.open = bind(this.open, this);
      this.el = $(el);
      this.el.on('click', (function(_this) {
        return function() {
          return _this.open();
        };
      })(this));
    }

    AbstractAppSchemeLink.prototype.open = function() {
      var timeout;
      if (!this.disableAutomaticStoreRedirect()) {
        timeout = setTimeout(this.openAppStore(Date.now()), this.settings.delay);
      }
      return window.location.href = this.schemeLink;
    };

    AbstractAppSchemeLink.prototype.openAppStore = function(ts) {
      return (function(_this) {
        return function() {
          var wait;
          wait = _this.settings.delay + _this.settings.delta;
          if ((Date.now() - ts) < wait) {
            return window.location.href = _this.alternativeLink;
          }
        };
      })(this);
    };

    AbstractAppSchemeLink.prototype.disableAutomaticStoreRedirect = function() {
      var uagent;
      uagent = navigator.userAgent;
      if (uagent.indexOf('Twitter') !== -1) {
        return true;
      }
      if (uagent.indexOf('FBAN/MessengerForiOS') !== -1) {
        return true;
      }
      return false;
    };

    AbstractAppSchemeLink.prototype.getScheme = function() {
      var m;
      m = this.schemeLink.match(/^(\w+):\/\//);
      if (m.length) {
        return m[1];
      } else {
        return void 0;
      }
    };

    return AbstractAppSchemeLink;

  })();

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  widgets.OpenInAppButton = {};

  widgets.OpenInAppButton = {
    constructIn: function($container) {
      var $showInAppBtn;
      $showInAppBtn = $('[show-in-app-btn]', $container);
      if ($showInAppBtn.length === 0) {
        return false;
      }
      return $showInAppBtn.each(function(i, el) {
        var $el;
        $el = $(el);
        if (GlobalState.PLATFORM.isIos()) {
          $el.addClass('-ios');
          return new widgets.OpenInAppButton.IosShowInApp($el);
        } else if (GlobalState.PLATFORM.isWindophone()) {
          $el.addClass('-win');
          return new widgets.OpenInAppButton.WindowsShowInApp($el);
        } else if (GlobalState.PLATFORM.isAndroidNative()) {
          $el.addClass('-android');
          return new widgets.OpenInAppButton.AndroidShowInApp($el);
        } else {
          return $el.remove();
        }
      });
    }
  };

  widgets.OpenInAppButton.IosShowInApp = (function(superClass) {
    extend(IosShowInApp, superClass);

    function IosShowInApp() {
      IosShowInApp.__super__.constructor.apply(this, arguments);
      this.schemeLink = "coub://view/" + (this.el.attr("data-permalink"));
      this.alternativeLink = "itms-apps://itunes.apple.com/app/coub/id714042522";
      this.redirectHTPP = "mobile_player_redirect_http";
      this.redirectApp = "mobile_player_redirect_app";
    }

    return IosShowInApp;

  })(AbstractAppSchemeLink);

  widgets.OpenInAppButton.WindowsShowInApp = (function() {
    function WindowsShowInApp(el) {
      var $el, link;
      $el = $(el);
      link = "coubwp://view/" + ($el.attr("data-permalink"));
      $el.click(function() {
        window.location = link;
        return false;
      });
    }

    return WindowsShowInApp;

  })();

  widgets.OpenInAppButton.AndroidShowInApp = (function(superClass) {
    extend(AndroidShowInApp, superClass);

    function AndroidShowInApp(el) {
      var text;
      AndroidShowInApp.__super__.constructor.apply(this, arguments);
      this.schemeLink = "https://w3jvk.app.goo.gl/?link=http://coub.com/view/" + (this.el.attr('data-permalink')) + "&apn=com.coub.android";
      this.alternativeLink = "https://play.google.com/store/apps/details?id=com.coub.android";
      this.redirectHTPP = 'overlay_wia_redirect_http_android';
      this.redirectApp = 'overlay_wia_redirect_app_android';
      if (window !== window.top || navigator.userAgent.indexOf('FB_IAB') !== -1 || navigator.userAgent.indexOf('Twitter') !== -1) {
        text = I18n.embed["get_app" + (GlobalState.COUNTRY.isRussia() && '_ru' || '')];
        $('span', this.el).html(text);
        this.open = (function(_this) {
          return function() {
            return window.open(_this.alternativeLink);
          };
        })(this);
      }
    }

    return AndroidShowInApp;

  })(AbstractAppSchemeLink);

}).call(this);
(function() {
  widgets.AppLink = {
    get: function(permalink) {
      if (GlobalState.PLATFORM.isWindophone()) {
        return "coubwp://view/" + permalink;
      } else if (GlobalState.PLATFORM.isIos()) {
        return "coub://view/" + permalink;
      } else if (GlobalState.PLATFORM.isAndroid()) {
        return "https://w3jvk.app.goo.gl/?link=http://coub.com/view/" + permalink + "&apn=com.coub.android&ibi=com.coub.app&ius=coub&isi=714042522&at=10l5bB&efr=1";
      } else {
        return "";
      }
    },
    getStore: function() {
      if (GlobalState.PLATFORM.isIos()) {
        return "itms-apps://itunes.apple.com/app/coub/id714042522";
      } else if (GlobalState.PLATFORM.isAndroid()) {
        return "https://play.google.com/store/apps/details?id=com.coub.android";
      } else {
        return "";
      }
    },
    constructIn: function($container) {
      return $('[app-link]', $container).each(function() {
        var $link, link, match, permalink;
        $link = $(this);
        permalink = $link.attr('data-coub-permalink');
        if (!permalink && GlobalState.PLATFORM.isAndroid() && (match = window.location.pathname.match(/(view|embed)\/([a-zA-Z0-9]+)/))) {
          permalink = match[2];
        }
        link = permalink ? widgets.AppLink.get(permalink) : widgets.AppLink.getStore();
        if (link) {
          return $link.attr('href', link);
        } else {
          return $link.remove();
        }
      });
    }
  };

}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.CustomSharingButton = (function() {
    CustomSharingButton.ATTR = "custom-sharing-button";

    function CustomSharingButton(el) {
      this.isDisabled = bind(this.isDisabled, this);
      this.track = bind(this.track, this);
      this.onClick = bind(this.onClick, this);
      this.init = bind(this.init, this);
      this.btn = $(el);
      this.init();
      this.provider = new SocialSharingDataProvider().getProviderByName(this.type);
      if (this.provider != null) {
        this.btn.on("click", this.onClick);
      } else {
        throw "CustomSharingButton: unknown button type " + this.type;
      }
    }

    CustomSharingButton.prototype.init = function() {
      this.type = this.btn.attr("data-custom-sharing");
      this.title = this.btn.attr("data-encoded-title");
      this.url = this.btn.attr("data-url");
      this.permalink = this.btn.attr("data-permalink");
      return this.img = this.btn.attr("data-img");
    };

    CustomSharingButton.prototype.onClick = function(e) {
      var from, h, left, obj, params, top, url, w;
      if (GlobalState.PAGE.isCoubPage()) {
        if (this.btn.parent().hasClass("coub__sharing__list")) {
          from = AmplitudeCoub.PROPS.FROM_COUB_CARD;
        } else {
          from = AmplitudeCoub.PROPS.FROM_PLAYER;
        }
        AmplitudeCoub.track(AmplitudeCoub.COUB_PAGE.SHARE.SHARE_SOCIAL, (
          obj = {},
          obj["" + AmplitudeCoub.PROPS.SOCIAL_SHARE_TARGET] = this.type,
          obj["" + from] = true,
          obj
        ));
      }
      if (this.isDisabled()) {
        return;
      }
      if (this.provider.onClick != null) {
        this.provider.onClick(e, this);
        return;
      }
      w = this.provider.popupW != null ? this.provider.popupW : 640;
      h = this.provider.popupH != null ? this.provider.popupH : 430;
      left = $(window).width() / 2 - w / 2;
      top = $(window).height() / 2 - h / 2;
      params = "menubar=no,toolbar=no,status=no,width=" + w + ",height=" + h + ",toolbar=no,left=" + left + ",top=" + top;
      if (this.url != null) {
        url = this.url;
      } else {
        url = "https://coub.com/view/" + this.permalink;
      }
      window.open(this.provider.getPopupUrl(this.title, url, this.img), "_share_coub_" + this.type, params);
      return this.track();
    };

    CustomSharingButton.prototype.track = function() {
      return Stats.track('social_share', {
        sharing_destination: this.type,
        url: window.location.pathname,
        coubUrl: this.url
      });
    };

    CustomSharingButton.prototype.isDisabled = function() {
      return this.btn.hasClass("disabled");
    };

    CustomSharingButton.constructIn = function(container) {
      if (container == null) {
        container = $("body");
      }
      return container.find("[" + CustomSharingButton.ATTR + "]").each(function() {
        return new CustomSharingButton($(this));
      });
    };

    CustomSharingButton.getAttributes = function(provider, url, title, img) {
      var attrs;
      attrs = [CustomSharingButton.ATTR];
      attrs.push("data-custom-sharing='" + provider + "'");
      attrs.push("data-permalink='" + url + "'");
      attrs.push("data-encoded-title=\"" + (encodeURIComponent(title)) + "\"");
      attrs.push("data-img='" + img + "'");
      return attrs.join(" ");
    };

    CustomSharingButton.getAttributesForCoub = function(provider, coub) {
      var img, imgVersion;
      if (provider === SocialSharingDataProvider.TYPES.PINTEREST.NAME) {
        imgVersion = "pinterest";
      } else {
        imgVersion = "med";
      }
      img = helpers.Coub.getFileVersion(coub.image_versions, imgVersion);
      return CustomSharingButton.getAttributes(provider, coub.permalink, coub.title, img);
    };

    CustomSharingButton.attachTo = function(container, provider, coub, classes, active) {
      var r, t;
      if (classes == null) {
        classes = "";
      }
      if (active == null) {
        active = true;
      }
      t = JST["app/site/templates/coub_block/social_action_buttons/custom_sharing_button"];
      r = $(t({
        provider: provider,
        coub: coub,
        checkFacebook: false,
        active: active,
        classes: classes
      }));
      container.append(r);
      return CustomSharingButton.constructIn(container);
    };

    return CustomSharingButton;

  })();

}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  widgets.GoogleBanner = (function() {
    function GoogleBanner(adUnitPath, size) {
      this.adUnitPath = adUnitPath;
      this.size = size;
      this.onSlotRendered = bind(this.onSlotRendered, this);
      this.id = "div-gpt-ad-" + (Date.now());
      this.provider = "google";
      console.log('[googletag] init', this.adUnitPath, this.size, this.id);
    }

    GoogleBanner.prototype.load = function(onRender, onError) {
      if (!window.googletag || !googletag.cmd || !googletag.cmd.push) {
        onError && onError("google gpt is not loaded");
        console.warn("google gpt is not loaded");
        return;
      }
      console.log('[googletag] load', document.getElementById(this.id));
      this.onRender = onRender;
      this.onError = onError;
      return googletag.cmd.push((function(_this) {
        return function() {
          _this.slot = googletag.defineSlot(_this.adUnitPath, _this.size, _this.id).addService(googletag.pubads());
          googletag.pubads().setCentering(true);
          googletag.pubads().collapseEmptyDivs();
          googletag.enableServices();
          googletag.pubads().addEventListener('slotRenderEnded', _this.onSlotRendered);
          return googletag.display(_this.id);
        };
      })(this));
    };

    GoogleBanner.prototype.reload = function() {
      console.log('[googletag] reload');
      return googletag.pubads().refresh([this.slot]);
    };

    GoogleBanner.prototype.destroy = function() {
      googletag.destroySlots([this.slot]);
      this.onRender = void 0;
      this.onError = void 0;
      return this.slot = void 0;
    };

    GoogleBanner.prototype.onSlotRendered = function(e) {
      var callback;
      if (this.callbackFired || e.slot !== this.slot) {
        return;
      }
      this.callbackFired = true;
      console.log('[googletag] slotRenderEnded', document.getElementById(this.id), e);
      callback = e.isEmpty ? this.onError : this.onRender;
      return callback && callback(e);
    };

    return GoogleBanner;

  })();

}).call(this);
(function() {
  window.Ces = {
    host: 'ces.coub.com',
    init: function() {},
    track: function(evt_name, params, sync) {},
    sendQueue: function(sync) {
      if (this.queue.length === 0) {
        return;
      }
      window.queue = this.queue;
      $.ajax({
        async: !sync,
        type: 'POST',
        url: "//" + this.host + "/rec.json",
        data: {
          data: this.pack(this.queue)
        }
      });
      return this.queue = [];
    },
    pack: function(obj) {
      var string;
      string = JSON.stringify(obj);
      return btoa(string);
    }
  };

}).call(this);
(function() {
  window.Stats = {
    hosts: {
      production: "metrics.coub.com"
    },
    persistentParams: {},
    queue: [],
    init: function() {
      if (this.inited) {
        return;
      }
      setTimeout((function() {
        return $(window).bind('popstate', (function() {
          return Stats.track('pageview', {
            from_popstate: true
          });
        }));
      }), 5000);
      this.inited = true;
      return Stats.track('pageview');
    },
    track: function(evt_name, params, sync) {
      var ext_params, ga_interpolations, ga_virt_interpolations;
      this.init();
      if (params == null) {
        params = {};
      }
      delete params["_type"];
      ga_interpolations = {
        "coub_created": ['Coub', 'Create'],
        "user_created": ['User', 'Create']
      };
      ga_virt_interpolations = {
        "coub_created": "/virt/coub-create",
        "user_created": "/virt/user-create"
      };
      if ((typeof ga !== "undefined" && ga !== null) && ga_interpolations[evt_name]) {
        ga('send', 'pageview', ga_virt_interpolations[evt_name]);
        ga('send', 'event', ga_interpolations[evt_name][0], ga_interpolations[evt_name][1]);
      }
      if ($('html').attr('class')) {
        params['browser'] = $('html').attr('class').split(' ');
      }
      params['screen_resolution'] = [screen.width, screen.height];
      params['user_agent'] = window.navigator.userAgent;
      params['page_url'] = window.location.pathname;
      params['page_params'] = window.location.search;
      params['page_section'] = GlobalState.STATS.getPageSection();
      if (window.signed_in) {
        params['signed_in'] = true;
      } else {
        params['signed_in'] = false;
      }
      _.extend(params, this.persistentParams);
      if (window.is_admin) {
        params['is_admin'] = true;
      }
      if (params['signed_in']) {
        ext_params = _.extend(params, {
          'cur_user_channels_count': Params.getBranchValue("current_user.channels").length,
          'cur_user_coubs_count': this.sumProp(Params.getBranchValue("current_user.channels"), 'simple_coubs_count'),
          'cur_user_recoubs_count': this.sumProp(Params.getBranchValue("current_user.channels"), 'recoubs_count'),
          'cur_user_followers_count': this.sumProp(Params.getBranchValue("current_user.channels"), 'followers_count'),
          'cur_user_following_count': this.sumProp(Params.getBranchValue("current_user.channels"), 'following_count')
        });
      } else {
        ext_params = params;
      }
      if (typeof Ces !== "undefined") {
        return Ces.track(evt_name, ext_params, sync);
      }
    },
    sumProp: function(objects, prop) {
      return _.reduce(objects, (function(memo, obj) {
        return memo + obj[prop];
      }), 0);
    },
    deliverQueue: function() {
      var host, sending_data;
      if (this.queue.length === 0) {
        return;
      }
      if (!this.hosts[window.env]) {
        return;
      }
      host = this.hosts[window.env];
      sending_data = {
        events: encodeURIComponent(JSON.stringify(this.queue))
      };
      $.ajax({
        type: "GET",
        url: "http://" + host + "/events.jsonp",
        dataType: "jsonp",
        data: sending_data
      });
      return this.queue = [];
    },
    addPersistentParameters: function(obj) {
      this.init();
      return _.extend(this.persistentParams, obj);
    }
  };

}).call(this);
(function() {
  window.AmplitudeMobile = {
    get: function() {
      if (this.instance) {
        return this.instance;
      } else {
        AmplitudeCoub.init();
        return this.instance = amplitude;
      }
    },
    oneTimeEvents: {},
    init: function(isEmbed, hasSelfSound, hasAudio, duration, chunksLength) {
      var audioStatParam, domain_match, durationStatParam, statParams, whereStatParam;
      this.isEmbed = isEmbed;
      this.prefix = this.isEmbed && 'mEmbed' || 'mPlayer';
      audioStatParam = hasSelfSound ? 'builtIn' : hasAudio ? 'external' : 'no';
      whereStatParam = window.env === 'development' ? 'dev' : window.request_client ? window.request_client : window.top !== window ? document.referrer ? (domain_match = document.referrer.match(/\/\/(.[^\/]+)/), domain_match && domain_match[1] || document.referrer) : 'no_referrer' : 'site';
      durationStatParam = Math.floor(duration / 0.5) * 0.5;
      if (!this.isEmbed) {
        whereStatParam = this.specifySiteLocation();
      }
      statParams = {
        location: whereStatParam,
        soundtrack: audioStatParam,
        length: durationStatParam + "-" + (durationStatParam + 0.5),
        parts: chunksLength
      };
      return this.track('shown', statParams);
    },
    track: function(event, props) {
      if (this.isEmbed) {
        return;
      }
      console.log('[AMPLITUDE MOBILE]', this.prefix, event, props);
      return this.get().logEvent(this.prefix + "_" + event, props);
    },
    trackOnce: function(event, props) {
      if (this.oneTimeEvents[event]) {
        return;
      }
      this.oneTimeEvents[event] = true;
      return this.track(event, props);
    },
    specifySiteLocation: function() {
      if (GlobalState.PAGE.isCoubPage()) {
        this.prefix = "coubPage_" + this.prefix;
        return 'coub_page';
      } else if (GlobalState.PAGE.isUserTimeline()) {
        this.prefix = "feed_" + this.prefix;
        return 'timeline';
      } else if (GlobalState.PAGE.isTagPage()) {
        this.prefix = "feed_" + this.prefix;
        return 'tag';
      } else if (GlobalState.PAGE.isHotPage()) {
        this.prefix = "feed_" + this.prefix;
        return 'hot';
      } else if (GlobalState.PAGE.isFeaturedPage()) {
        this.prefix = "feed_" + this.prefix;
        return 'featured';
      } else if (GlobalState.PAGE.isProfile()) {
        this.prefix = "feed_" + this.prefix;
        return 'channel';
      } else if (GlobalState.PAGE.isSearchPage()) {
        this.prefix = "feed_" + this.prefix;
        return 'search';
      } else if (GlobalState.PAGE.isWeekly()) {
        this.prefix = "feed_" + this.prefix;
        return 'weeky';
      } else {
        return document.location.pathname;
      }
    }
  };

}).call(this);
(function() {
  window.AmplitudeEmbed = {
    isInited: false,
    init: function() {
      if (this.isInited) {
        return;
      }
      this.isInited = true;
      if (!amplitude) {
        console.warn("Amplitude not supported");
        return;
      }
      amplitude.getInstance().init('23f0c51ed9326c3a178f58f8fd94bea5');
      return console.log("[AMPLITUDE EMBED INIT]");
    },
    track: function(event, props) {
      if (props == null) {
        props = {};
      }
      this.init();
      if (amplitude) {
        console.log("[AMPLITUDE EMBED EVENT]: " + event, props);
        return amplitude.getInstance().logEvent(event, props);
      }
    }
  };

}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/coub_block/viewer_block"] = function anonymous(it) {
  var out='';  var isEmbed = GlobalState.PAGE.isEmbed(), isSharingActive = true; if (!isEmbed) { it = helpers.Coub.calculatePropertiesForViewIfNotComputed(it); isSharingActive = helpers.Coub.isSharingButtonsActive(it); } var originalCoub = helpers.Coub.getOriginalCoub(it), sharingProviders = ['facebook', 'twitter', 'vkontakte'], coubPath = '/view/' + originalCoub.permalink, coubUrl = 'https://coub.com' + coubPath, suggestsPath = '/api/v2/coubs/' + originalCoub.permalink + '/category_suggestions', viewsCount = it.views_count, createdBy = I18n.embed.by({link: "<a target='_blank' class='hbold' href='/" + originalCoub.channel.permalink + "'>" + originalCoub.channel.title + "</a>"}), aspectRatio = it.computed.aspectRatio, dims = it.computed.dims, promotedClickLink = it.render && it.render.promoted && it.render.promoted.click_link, promotedClickLinkText = it.render && it.render.promoted && it.render.promoted.click_link_text, canEdit = !isEmbed && !GlobalState.PAGE.isChatPage() && (helpers.Channel.hasId(it.channel_id) || GlobalState.USER.isAdmin()) && it.type == "Coub::Simple", isPromoteButtonShowed = !isEmbed && !GlobalState.PAGE.isChatPage() && !originalCoub.promoted_id && helpers.PromotedCoubsHelper.coubCanToBePromoted(originalCoub) && GlobalState.USER.isLogedIn(); if (GlobalState.PAGE.isChatPage() && it.render && it.render['max-height'] && it.render['max-width']) { var maxHeight = it.render['max-height']; var maxWidth = it.render['max-width']; var ratio = null; var dimsVal = dims.map(function(d) { return parseInt(d); }); if (dimsVal[1] > maxHeight) { ratio = maxHeight / dimsVal[1]; } else if (dimsVal[0] > maxWidth) { ratio = maxWidth / dimsVal[0]; } if (ratio) { dimsVal[0] *= ratio; dimsVal[1] *= ratio; dims = dimsVal.map(function(d) { return Math.ceil(d) + "px" }); } } var best2019LikeActionIndex = ["1qovxj", "24lt6f", "2386gf", "2333s6", "228xb7", "21s12z"].indexOf(originalCoub.permalink), showMegafonButtons = originalCoub.megafon_contents.length && GlobalState.PAGE.isMegafonTestPage();out+='<div class="viewer '+(isEmbed ? '-embed' : '')+'" data-permalink="'+(it.permalink)+'" style="width:'+(dims[0])+';height:'+(dims[1])+';" tabindex="-1"> <div class="viewer__hand -hidden -fill"></div> <div class="contents"> <img src="'+(it.computed.firstFrameUrl)+'" class="viewer__img" /> <div class="data" style="display:none"> <script type="text/json"> '+( JSON.stringify(originalCoub) )+' </script> </div> <div class="viewer__player -no-select" style="padding-top:'+(aspectRatio.percent)+'" data-aspect-ratio="'+(aspectRatio.val)+'"> <div class="viewer__black-screen -fill -hidden"></div> <canvas class="viewer__screen -hidden"></canvas> </div> <div class="viewer__controls__container -no-select"> ';if(promotedClickLink){out+=' <a class="viewer__click viewer__promoted-link -fill" href="'+(promotedClickLink)+'" target="_blank" rel="noopener noreferrer"> '+(promotedClickLinkText)+' </a> ';}else{out+=' <div class="viewer__shadow viewer__click -fill"></div> ';}out+=' <div class="viewer__progress"> <div class="images -hidden"></div> </div> <div class="viewer__hand viewer__click -hand -fill -hidden"> <i>'+(JST["app/site/templates/svg/icons/html5_player_specific/hand"]())+'</i> </div> <!-- mobile --> ';if(isEmbed){out+='<!-- <div class="viewer__share__mobile -hidden"></div> -->';}out+=' <div class="viewer__pause -fill -hidden"> <div class="viewer__click -fill"></div> <div class="viewer__pause__content"> <div class="viewer__click -fill"></div> <div class="viewer__pause__share"> ';var arr1=['facebook', 'twitter', 'messenger', 'watsapp'];if(arr1){var value,index=-1,l1=arr1.length-1;while(index<l1){value=arr1[index+=1];out+=' <div '+(CustomSharingButton.getAttributesForCoub(value, it))+' class="viewer__share__social box--inline '+(value)+'"> <button class="-ribbon"></button> <span>'+(I18n.embed.social_names[value])+'</span> </div> ';} } out+=' <div class="viewer__share__social copy box--inline"> <button class="-ribbon"></button> <span>'+(I18n.embed.social_names.link)+'</span> </div> </div> ';if(helpers.Coub.showWIAButton()){out+=' <a target="_top" class="viewer__pause__open-in-app -ribbon" app-link data-coub-permalink="'+(originalCoub.permalink)+'">'+(helpers.Coub.getWIAText())+'</a> ';}out+=' </div> </div> <div class="viewer__copy -fill viewer__click -hidden"> <div class="viewer__copy__content"> <input class="viewer__copy__input" value="'+(coubUrl)+'" /> </div> </div> <div class="viewer__play__mobile viewer__click"></div> ';if(isEmbed){out+=' <div class="viewer__stamp -truncate-text -hidden"> ';if(viewsCount > 0){out+=' <span>'+(I18n.embed.views_count({count: viewsCount}))+'</span> &#183; '+(createdBy)+' ';}out+=' </div> <a class="viewer__get-app -hidden" app-link target="_blank">'+(I18n.embed.get_app)+'</a> <a class="viewer__open-in-app -hidden" app-link target="_blank" data-coub-permalink="'+(it.permalink)+'">'+(I18n.embed.open_in_app)+'</a> <a class="viewer__coub-link -hidden" app-link target="_blank" data-coub-permalink="'+(it.permalink)+'" href="'+(coubUrl)+'">'+(I18n.embed.site_name)+'</a> ';}out+=' <!-- //mobile --> <!-- html5 --> <div class="viewer__spinner -hidden"> <div class="viewer__spinner-container"> <div class="viewer__spinner-rotator"> <div class="viewer__spinner-left"> <div class="viewer__spinner-circle"></div> </div> <div class="viewer__spinner-right"> <div class="viewer__spinner-circle"></div> </div> </div> </div> </div> <div class="viewer__coubs-changer" data-channel='+(it.channel.permalink)+' data-coub-id='+(it.id)+'> ';var arr2=["-prev", "-next"];if(arr2){var value,i2=-1,l2=arr2.length-1;while(i2<l2){value=arr2[i2+=1];out+=' <div class="button-prev-next -disabled '+(value)+'"> <span> <i>'+(JST["app/site/templates/svg/icons/html5_player_specific/prev"]())+'</i> <i class="-hidden">'+(JST["app/site/templates/svg/icons/html5_player_specific/prev_hover"]())+'</i> </span> </div> ';} } out+=' </div> <div class="viewer__sharing -fill -hidden"> <div class="-fill viewer__click"></div> <input class="viewer__sharing__coub-url" readonly value="'+(coubUrl)+'"></input> <div class="viewer__sharing__items"> <div class="viewer__sharing__item"> <button class="-ribbon -hidden copy" type="button"> <i>'+(JST["app/site/templates/svg/icons/html5_player_specific/share_copy"]())+'</i> <i class="-hidden">'+(JST["app/site/templates/svg/icons/html5_player_specific/share_copy_done"]())+'</i> <span>'+(I18n.embed.copy_link.copy)+'</span> </button> </div> <div class="viewer__sharing__item"> '+( JST['app/site/templates/coub_block/parts/download_video_button']({ coub: originalCoub, classes: "-ribbon download", isPlayer: true }) )+' </div> ';var arr3=sharingProviders;if(arr3){var value,index=-1,l3=arr3.length-1;while(index<l3){value=arr3[index+=1];out+=' <div class="viewer__sharing__item"> ';if(!isEmbed && value == "twitter"){out+=' <button class="-ribbon -'+(value)+'" '+(widgets.ShareCoubVideoButton.getAttrs(value, originalCoub))+' type="button"> <i>'+(JST["app/site/templates/svg/icons/html5_player_specific/share_" + value]())+'</i> <span>'+(I18n.embed.sharing[value])+'</span> </button> ';}else{out+=' <button '+(CustomSharingButton.getAttributesForCoub(value, it))+' data-url='+(coubUrl)+' class="-ribbon '+(value)+'" type="button"> <i>'+(JST["app/site/templates/svg/icons/html5_player_specific/share_" + value]())+'</i> <span>'+(I18n.embed.sharing[value])+'</span> </button> ';}out+=' </div> ';} } out+=' <div class="viewer__sharing__item"> <a class="-ribbon other" href='+(coubPath + '#openSharingPopup')+' target="_blank"> <i>'+(JST["app/site/templates/svg/icons/html5_player_specific/share_other"]())+'</i> <span>'+(I18n.embed.sharing.more)+'</span> </a> </div> </div> </div> <div class="viewer__suggests -fill -hidden" data-suggests-path="'+(suggestsPath)+'"> <div class="-fill viewer__click"></div> <div class="viewer__suggests-stub"> <div class="-fill viewer__click"></div> </div> <div class="viewer__suggests-controls"> <div class="viewer__suggests-list-btn disabled -prev"> <i>'+(JST["app/site/templates/svg/icons/html5_player_specific/prev"]())+'</i> <i class="-hidden">'+(JST["app/site/templates/svg/icons/html5_player_specific/prev_hover"]())+'</i> </div> <div class="viewer__replay" data-prompt="'+(I18n.embed.restart)+'" direction="above" data-prompt-top="8" data-fs-prompt-top="-2"> <i>'+(JST["app/site/templates/svg/icons/html5_player_specific/replay"]())+'</i> <i class="-hidden">'+(JST["app/site/templates/svg/icons/html5_player_specific/replay_hover"]())+'</i> </div> <div class="viewer__suggests-list-btn disabled -next"> <i>'+(JST["app/site/templates/svg/icons/html5_player_specific/prev"]())+'</i> <i class="-hidden">'+(JST["app/site/templates/svg/icons/html5_player_specific/prev_hover"]())+'</i> </div> </div> </div> <div class="viewer__mute -fill -hidden"> <span> <i>'+(JST["app/site/templates/svg/icons/24/sound-off"]())+'</i> <p>'+(I18n.embed.unmute)+'</p> </span> </div> <div class="viewer__controls -hidden"> ';if(isEmbed){out+=' <div class="viewer__controls-top"> <a class="viewer__site-logo" target="_blank" data-prompt="'+(I18n.embed.tooltips.logo)+'" data-coub-permalink="'+(it.permalink)+'" data-prompt-top="-3" data-fs-prompt-top="-23" direction="below" constraint="left" href="'+(coubPath)+'" app-link> <i>'+(JST["app/site/templates/svg/icons/html5_player_specific/logo"]())+'</i> <i class="-hidden">'+(JST["app/site/templates/svg/icons/html5_player_specific/logo_hover"]())+'</i> </a> <div class="viewer__coub-info -hidden"> <div class="viewer__coub-info__body -allow-select"> <a class="viewer__coub-info__title -truncate-text" target="_blank" href="'+(coubPath)+'">'+(it.title)+'</a> </div> </div> </div> ';}out+=' ';if(best2019LikeActionIndex != -1 && !isEmbed && GlobalState.PAGE.isBestCoubs2019()){out+=' <div class="viewer__best2019__like-action -action'+(best2019LikeActionIndex)+'"></div> ';}out+=' <div class="viewer__controls__play -hidden"> <div class="viewer__sound__hover__area"> <div class="viewer__sound__bar"> <div class="sound-bar sound-bar-slider"></div> <div class="sound-bar sound-bar-bg"></div> </div> <div class="viewer__settings"> <div class="viewer__settings-handler" data-prompt="'+(I18n.embed.tooltips.settings)+'" direction="above" data-prompt-top="8" data-fs-prompt-top="-2"> <i>'+(JST["app/site/templates/svg/icons/24/settings-hd"]())+'</i> <i class="-hidden">'+(JST["app/site/templates/svg/icons/24/settings"]())+'</i> </div> <div class="viewer__settings-content -hidden" data-scroll-type="vertical"> <ul> <li class="viewer__settings-hd">'+(I18n.embed.hd)+'</li> <li class="viewer__settings-replay" dropdown-close> '+(I18n.embed.restart)+' <i>'+(JST["app/site/templates/svg/icons/24/replay"]())+'</i> </li> <li class="viewer__settings-copy"> <span>'+(I18n.embed.copy_link.copy)+'</span> <i>'+(JST["app/site/templates/svg/icons/24/copy_link"]())+'</i> <i class="-hidden">'+(JST["app/site/templates/svg/icons/24/copy_link_done"]())+'</i> </li> ';if(!GlobalState.PAGE.isCoubPage()){out+=' <li class="viewer__settings-open" dropdown-close> <a href="'+(coubPath)+'" target="_blank"> <div class="-fill"></div> </a> <i>'+(JST["app/site/templates/svg/icons/24/open-on-coub"]())+'</i> '+(I18n.embed.open_on_coub)+' </li> ';}out+=' ';if(isPromoteButtonShowed){out+=' <li class="viewer__settings-promote" dropdown-close> <a type="promoteCoub" data-coub-permalink="'+(originalCoub.permalink)+'"> <div class="-fill"></div> </a> <i>'+(JST["app/site/templates/svg/icons/24/promote"]())+'</i> '+(I18n.embed.promote_coub)+' </li> ';}out+=' ';if(canEdit){out+=' <li class="viewer__settings-edit" dropdown-close> <a href="'+(Routes.edit_coub_path(it.permalink))+'"> <div class="-fill"></div> </a> <i>'+(JST["app/site/templates/svg/icons/24/edit-coub"]())+'</i> '+(I18n.embed.edit_coub)+' </li> <li class="viewer__settings-info" open-edit-popup dropdown-close> '+(I18n.embed.edit_info)+' <i>'+(JST["app/site/templates/svg/icons/24/doc"]())+'</i> </li> ';if(!it.categories.length || it.allow_category_change){out+=' <li class="viewer__settings-communities" open-categories-popup dropdown-close> '+(I18n.embed[!it.categories.length ? 'add_community' : 'change_community'])+' <i>'+(JST["app/site/templates/svg/icons/24/add-category"]())+'</i> </li> ';}out+=' <li class="viewer__settings-delete" data-permalink='+(it.permalink)+' widget-delete-coub-button auto-init dropdown-close> '+(I18n.embed.delete_coub)+' <i>'+(JST["app/site/templates/svg/icons/24/delete"]())+'</i> </li> ';}out+=' ';if(GlobalState.USER.isAdmin() || GlobalState.USER.isEditor()){out+=' <li class="viewer__settings-download" data-permalink='+(it.permalink)+' widget-download-coub-loops auto-init> '+(I18n.embed.download_loops)+' </li> ';}out+=' </ul> <div class="viewer__settings-footer"> ';if(viewsCount > 0){out+=' <div class="viewer__settings-views-count">'+(I18n.embed.views_count({count: viewsCount}))+'</div> ';}out+=' <div class="viewer__settings-author" dropdown-close>'+(createdBy)+'</div> </div> </div> </div> ';if(isSharingActive){out+='<!-- <div class="viewer__share -hidden" data-prompt="'+(I18n.embed.tooltips.share)+'" direction="above" data-prompt-top="8" data-fs-prompt-top="-2"> <i>'+(JST["app/site/templates/svg/icons/24/share"]())+'</i> </div> -->';}out+=' ';if(showMegafonButtons){out+=' <div class="viewer__megafon"> <div class="viewer__megafon-handler"> <i class="box--vertical">'+(JST["app/site/templates/svg/icons/16/megafon"]())+'</i> <span class="box--vertical">'+(I18n.embed.megafon_shazam.film)+'</span> </div> <div class="viewer__megafon-content -hidden" data-scroll-type="vertical"> '+( JST["app/site/templates/coub_block/parts/megafon_content"]({megafonContents: originalCoub.megafon_contents}) )+' </div> </div> ';}out+=' </div> </div> <div class="viewer__das -hidden"> <div class="viewer__das__banner"> <div class="viewer__das__close -hidden"> <div></div> </div> <div class="custom-ad-overlay"></div> <div class="banner-fold close-small close-small--round -hidden"></div> </div> </div> <div class="viewer__controls__right-top"> <div class="viewer__fullscreen -hidden" data-prompt="'+(I18n.embed.tooltips.fullscreen_on)+'" data-prompt-top="-3" data-prompt-left="-5" data-fs-prompt-top="-27" direction="left"> <i>'+(JST["app/site/templates/svg/icons/24/fullscreen"]())+'</i> <i class="-hidden">'+(JST["app/site/templates/svg/icons/24/fullscreen-off"]())+'</i> </div> <div class="viewer__copylink -hidden" data-prompt="'+(I18n.embed.copy_link.copy)+'" data-text="'+(coubUrl)+'" data-prompt-top="-3" data-prompt-left="-1" data-fs-prompt-top="-27" direction="left"> <i>'+(JST["app/site/templates/svg/icons/24/copy_link"]())+'</i> <i class="-hidden">'+(JST["app/site/templates/svg/icons/24/copy_link_done"]())+'</i> </div> '+( JST["app/site/templates/coub_block/social_action_buttons/favourites_button"](originalCoub) )+' </div> </div> <div class="viewer__sound -hidden"> <i>'+(JST["app/site/templates/svg/icons/24/sound-off"]())+'</i> <i class="-hidden">'+(JST["app/site/templates/svg/icons/24/sound-on"]())+'</i> </div> <div class="viewer__fullscreen-logo -hidden"> <i>'+(JST["app/site/templates/svg/icons/html5_player_specific/logo"]())+'</i> </div> ';if(showMegafonButtons && !isEmbed){out+=' <a class="viewer__megafon-top-link -hidden" href="'+(originalCoub.megafon_contents[0].content.url)+'" target="_blank" rel="noopener"> <i>'+(JST["app/site/templates/svg/icons/24/megafon_logo"]())+'</i> <p class="hbold">'+(originalCoub.megafon_contents[0].content.title)+'</p> <span class="hbold">Смотреть</span> </a> ';}out+=' <div class="viewer__filter__hack viewer__click -hidden"></div> <!-- //html5 --> </div> ';if(isEmbed){out+=' <div class="viewer__das__preroll -fill -hidden"> <div class="vast-ad-preroll -hidden -fill"></div> <div class="preroll__controls"> <div class="preroll__controls--skip-button -disabled"></div> <div class="preroll__controls--timer"></div> <div class="preroll__controls--bar"></div> </div> </div> ';}out+=' ';if(GlobalState.PAGE.isOldSpicePromo2016()){out+=' ';if(GlobalState.USER.isLogedIn()){out+=' <div class=\'coub__oldspice-vote_btn tablet-mobile-hidden\' data-permalink='+(originalCoub.permalink)+'></div> ';}else{out+=' <div class=\'coub__oldspice-vote_btn toggle-registration tablet-mobile-hidden\' data-action=\'sign_up\'></div> ';}out+=' <div class="coub__oldspice-counter tablet-mobile-hidden"></div> ';}out+=' </div></div>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/coub_block/social_action_buttons/favourites_button"] = function anonymous(it) {
  var out='';  var tooltipVars = 'data-prompt-top="-3" data-prompt-left="-1" data-fs-prompt-top="-27" direction="left" data-prompt=', tooltipAdd = tooltipVars + I18n.embed.tooltips.favourites_add, tooltipRemove = tooltipVars + I18n.embed.tooltips.favourites_remove;if(GlobalState.PAGE.isEmbed()){out+=' <!-- <div class="viewer__favourites -hidden" '+(tooltipAdd)+'> <i>'+(JST["app/site/templates/svg/icons/24/favs_add"]())+'</i> <i class="-hidden">'+(JST["app/site/templates/svg/icons/24/favs_remove"]())+'</i></div>-->';}else if(GlobalState.USER.isLogedIn()){out+=' '; var isInFavourites = it.favourite, tooltip = isInFavourites ? tooltipRemove : tooltipAdd; out+=' <div class="viewer__favourites -hidden '+(isInFavourites ? '-added' : '')+'" data-coub-id='+(it.id)+' '+(tooltip)+'> <i>'+(JST["app/site/templates/svg/icons/24/favs_add"]())+'</i> <i class="-hidden">'+(JST["app/site/templates/svg/icons/24/favs_remove"]())+'</i></div>';}else{out+=' '; var unlogged = {selector: ".viewer__favourites[data-coub-id="+it.id+"]", action: "favourites"}, unloggedAction = 'data-unloged-action-selector='+(unlogged.selector)+' data-unloged-action='+(unlogged.action); out+=' <div class="viewer__favourites -hidden toggle-registration" data-action="sign_in" '+(unloggedAction)+' '+(tooltipAdd)+'> <i>'+(JST["app/site/templates/svg/icons/24/favs_add"]())+'</i> <i class="-hidden">'+(JST["app/site/templates/svg/icons/24/favs_remove"]())+'</i></div>';}return out;
  };
}).call(this);
(function() {
  window.helpers.Coub = {
    getOriginalCoub: function(coub) {
      if (coub.type != null) {
        if (coub.type === 'Coub::Recoub') {
          return coub.recoub_to;
        } else {
          return coub;
        }
      } else {
        return coub;
      }
    },
    isRecoub: function(coub) {
      return coub.type === "Coub::Recoub";
    },

    /*
     Стемп это различные подписи под кобом: когда сделан, кем сделан и тд
     */
    externalDownloadStamp: function(coub) {
      var domain, link, mb, out, sourcePath;
      out = '';
      if (coub.media_blocks.external_raw_videos.length && !coub.media_blocks.remixed_from_coubs.length) {
        mb = coub.media_blocks.external_raw_videos[0];
        if (mb.has_embed) {
          sourcePath = Routes.source_path({
            id: coub.raw_video_id
          }) + ("?from_id=" + coub.id);
          link = $("<a>", {
            text: coub.external_download.service_name,
            href: coub.external_download.url,
            target: "_blank",
            "class": "description__stamp__source",
            type: 'embedPopup',
            source: sourcePath
          })[0].outerHTML;
          out = " from " + link;
        } else {
          domain = helpers.Application.getSecondLevelDomain(coub.external_download.url);
          domain = helpers.Application.capitalize(domain);
          out = I18n.t("coub.external_download.link", {
            url: coub.external_download.url,
            type: domain
          });
        }
      } else if (helpers.Coub.fromMobileApp(coub)) {
        out = helpers.Coub.mobileAppStamp(coub, "_blank");
      } else if (helpers.Coub.fromApplication(coub)) {
        out = I18n.t("coub.external_download.link", {
          url: coub.application.url,
          type: coub.application.name
        });
      }
      return out;
    },
    fromMobileApp: function(coub) {
      return coub.uploaded_by_ios_app || coub.uploaded_by_android_app;
    },
    fromApplication: function(coub) {
      return coub.application != null;
    },
    applicationStamp: function(coub) {
      return I18n.t("coub.external_download.link", {
        url: coub.application.url,
        type: coub.application.name
      });
    },
    mobileAppStamp: function(coub, target) {
      var getStamp, out;
      out = '';
      getStamp = function(os) {
        return I18n.t("coub.from_mobile_app", {
          url: Routes.app_promo_path(),
          target: target,
          os: os
        });
      };
      if (coub.uploaded_by_ios_app) {
        out = getStamp('iPhone');
      } else if (coub.uploaded_by_android_app) {
        out = getStamp('Android');
      }
      return out;
    },
    coubUserStamp: function(coub, smallCardType, isPromoted) {
      var original, p, userLink;
      if (smallCardType == null) {
        smallCardType = false;
      }
      if (isPromoted == null) {
        isPromoted = false;
      }
      original = helpers.Coub.getOriginalCoub(coub);
      userLink = $("<a>", {
        text: original.channel.title,
        href: Routes.channel_path(original.channel.permalink),
        target: "_blank",
        "class": "hbold description__stamp__user",
        title: original.channel.title,
        "widget-channel-dropdown": true,
        "auto-init": true,
        channel: JSON.stringify(original.channel)
      })[0].outerHTML;
      if (isPromoted) {
        return I18n.t('promoted_coubs.coub_by', {
          name: userLink
        });
      } else if ((p = helpers.Coub.getCoubRecoubPermalink(coub))) {
        if (smallCardType) {
          return I18n.t("coub.original_by_small_card", {
            original: userLink
          });
        } else {
          return I18n.t("coub.original_by", {
            original: userLink,
            source: Routes.view_coub_by_permalink_path(p)
          });
        }
      } else {
        if (smallCardType) {
          return I18n.t('coub.by_small_card', {
            name: userLink
          });
        } else {
          return I18n.t('coub.by', {
            name: userLink
          });
        }
      }
    },
    getCoubRecoubPermalink: function(coub) {
      if (coub.media_blocks.remixed_from_coubs.length) {
        return coub.media_blocks.remixed_from_coubs[0].coub_permalink;
      } else {
        return void 0;
      }
    },
    cotdDate: function(coub) {
      coub = helpers.Coub.getOriginalCoub(coub);
      return moment(coub.cotd_at).format('D MMMM YYYY');
    },
    coubPrivacyIcon: function(coub) {
      var isSmallCard, types, visibility;
      visibility = coub.is_done ? coub.visibility_type : coub.original_visibility_type;
      types = ["private", "friends", "unlisted"];
      if (helpers.Coub.isPrivateAndNonAuthor(coub) || !_.contains(types, visibility)) {
        return "";
      }
      isSmallCard = coub.render && coub.render['card-type'] === 'small';
      return JST['app/site/templates/coub_block/parts/coub_stamp/coub_privacy_icon']({
        visibility: visibility,
        isSmallCard: isSmallCard
      });
    },
    coubAudioTrack: function(coub) {
      return (coub.media_blocks != null) && coub.media_blocks.audio_track;
    },
    showNoteSign: function(coub) {
      var media;
      media = coub.media_blocks.audio_track;
      return !_.isEmpty(media);
    },
    showNSFWSign: function(coub) {
      return !helpers.Channel.isMyChannel(coub.channel) && helpers.Coub.isAdult(coub);
    },
    isAdult: function(coub) {
      return coub.age_restricted_by_admin || coub.age_restricted || coub.not_safe_for_work;
    },
    hasAudioAndDetectedByEchonest: function(coub) {
      return helpers.Coub.coubAudioTrack(coub) && coub.media_blocks.audio_track.title !== "Unknown";
    },
    ageRestrictedForCurrentUser: function(coub) {
      var isAdult, isAuthor, isLoggedIn, legalAge, notConfirmedAgeInThisSession;
      coub = helpers.Coub.getOriginalCoub(coub);
      if (!helpers.Coub.isAdult(coub)) {
        return false;
      }
      legalAge = 18;
      isLoggedIn = Params.get("is_logged_in");
      isAdult = isLoggedIn && Params.getBranchValue("current_user.age") >= legalAge;
      if (isAdult) {
        return false;
      }
      isAuthor = isLoggedIn && _.pluck(Params.getBranchValue("current_user.channels"), 'id').indexOf(coub.channel_id) !== -1;
      if (isAuthor) {
        return false;
      }
      notConfirmedAgeInThisSession = !$.cookie('confirmed_age');
      return notConfirmedAgeInThisSession;
    },
    visibleForCurrentUser: function(coub) {
      return (coub.error == null) && !helpers.Coub.isPrivateAndNonAuthor(coub) && !helpers.Coub.isBannedAndNonAuthor(coub);
    },
    isPrivateAndNonAuthor: function(coub) {
      if (Params.getBranchValue("current_user.is_admin")) {
        return false;
      }
      return coub.visibility_type === 'private' && !helpers.Coub.isCurrentUserAuthorOf(coub);
    },
    isBannedAndNonAuthor: function(coub) {
      if (Params.getBranchValue("current_user.is_admin")) {
        return false;
      }
      return coub.banned && !helpers.Coub.isCurrentUserAuthorOf(coub);
    },
    isCoubCanPlaying: function(coub) {
      return coub.is_done && helpers.Coub.visibleForCurrentUser(coub) && !helpers.Coub.ageRestrictedForCurrentUser(coub);
    },
    disabledSocialAction: function(coub, action) {
      var restrictedVisibilityTypes;
      if (!coub.published) {
        return true;
      }
      restrictedVisibilityTypes = (function() {
        switch (action) {
          case 'like':
            return ['private'];
          case 'repost':
            return ['private', 'friends', 'unlisted'];
          default:
            throw 'Unknown action in disabledSocialAction';
        }
      })();
      return restrictedVisibilityTypes.indexOf(coub.visibility_type) !== -1;
    },
    getDraftTitlePrefix: function(coub) {
      var title;
      title = coub.published_at ? "[" + (moment(coub.published_at).format('DD MMM HH:mm')) + "]" : typeof I18n !== "undefined" && I18n !== null ? (I18n.t("coub.visibility.draft")) + ":" : "Draft:";
      return "<span class='-draft'>" + title + "</span> ";
    },
    getTitle: function(coub) {
      var $titleEl, emojis, originalPermalink, title, titleHtml;
      title = utils.stripTags(coub.title);
      titleHtml = title.replace(new RegExp(Params.get("coub_hash_tag_regexp"), "gi"), function(str) {
        var tag, tagPath;
        tag = encodeURIComponent(str.toLowerCase().slice(1));
        tagPath = typeof Routes !== "undefined" && Routes !== null ? Routes.tag_path(tag) : "/tags/" + tag;
        return $("<a/>", {
          text: str,
          href: tagPath,
          "class": "-undr tag-title",
          target: "_blank"
        }).prop("outerHTML");
      });
      $titleEl = $('<div/>').html(titleHtml);
      originalPermalink = helpers.Coub.getOriginalCoub(coub).permalink;
      emojis = ['c3p0', 'r2d2', 'bb8', 'chewbacca', 'resistance', 'stormtrooper', 'captainphasma', 'kyloren', 'firstorder', 'resistancepilot'];
      $titleEl.contents().each(function(i, v) {
        var $node, coubUrl, newText, params, text;
        $node = $(v);
        text = $node.text();
        if ($node.hasClass('tag-title') || text.trim() === '') {
          return;
        }
        newText = text.replace(/\[([a-z0-9]+)\]/g, function(m1, m2) {
          if (emojis.indexOf(m2) !== -1) {
            return "<img src='/images/promo/starwars/bb_" + m2 + ".svg' width='16' height='16' class='emoji-title box--inline' />";
          } else {
            return m1;
          }
        });
        newText = newText.replace(/(\ud83d.|.\ufe0f)/g, '<span class="emoji-font box--inline">$1</span>');
        if (!helpers.Coub.isCurrentPageCoubPage(coub)) {
          coubUrl = typeof Routes !== "undefined" && Routes !== null ? Routes.view_coub_by_permalink_path({
            id: originalPermalink
          }) : "/view/" + originalPermalink;
          params = {
            href: coubUrl,
            html: newText,
            title: text
          };
          if (!GlobalState.PLATFORM.isMobile()) {
            params.target = "_blank";
          }
          return $node.replaceWith($("<a/>", params));
        } else {
          return $node.replaceWith(newText);
        }
      });
      if (!coub.published && helpers.Coub.isCurrentUserAuthorOf(coub)) {
        $titleEl.prepend(this.getDraftTitlePrefix(coub));
      }
      return $titleEl.html();
    },
    isEditable: function(coub) {
      return _.isNumber(coub.raw_video_id);
    },
    isDone: function(coub) {
      return coub.type !== "Coub::Temp" && coub.is_done;
    },
    coubTags: function(coub, type) {
      var tags;
      tags = $.map(coub.tags, function(n) {
        return n.title;
      });
      if (type === 'edit') {
        return tags.join(",");
      } else {
        return tags;
      }
    },
    albumCover: function(coub, link) {
      var cover, coverClass, out, src;
      src = helpers.Application.retinizeImg(coub.media_blocks.audio_track.image, coub.media_blocks.audio_track.image_retina);
      coverClass = link != null ? '-ribbon -rounded' : '';
      cover = "<img " + src + " class='image " + coverClass + "' width='112' height='112'>";
      if (link != null) {
        out = ("<a href='" + link + "' class='-ribbon itunes_link' target='_blank'>") + cover + "</a>";
        return out;
      } else {
        return cover;
      }
    },
    musicStamp: function(coub, link) {
      var artist, out, stamp, title;
      if (coub.media_blocks.audio_track.meta != null) {
        artist = coub.media_blocks.audio_track.meta.artist;
      } else {
        artist = "";
      }
      title = "<span class='hbold -truncate-text'>" + coub.media_blocks.audio_track.title + "</span>";
      stamp = [title, artist].join("");
      if (link != null) {
        out = "<a href='" + link + "' target='_blank' class='itunes_link -ribbon-hvr-text'>" + stamp + "</a>";
        return out;
      } else {
        return stamp;
      }
    },
    mediaThumbnail: function(thumbnail, hdpiThumbnail) {
      var src;
      if (thumbnail != null) {
        src = helpers.Application.retinizeImg(thumbnail, hdpiThumbnail);
        return "<img " + src + " class='image img-placeholder' width='112' height='70'>";
      } else {
        return "<div class='blank'></div>";
      }
    },
    hasAbusesOn: function(coub, reason) {
      var abuses, cuId, reasons;
      coub = helpers.Coub.getOriginalCoub(coub);
      cuId = Params.getBranchValue("current_user.id");
      abuses = $.map(coub.abuses, function(a) {
        return a.channel_id;
      });
      reasons = $.map(coub.abuses, function(a) {
        return a.reason;
      });
      return _.contains(abuses, cuId) && _.contains(reasons, reason);
    },
    showMedia: function(coub) {
      var mb;
      return (mb = coub.media_blocks) && (mb.remixed_from_coubs.length || mb.external_raw_videos.length || mb.uploaded_raw_videos.length);
    },
    imgListenerAttrs: function(coub) {
      var attrs;
      coub = helpers.Coub.getOriginalCoub(coub);
      if (Params.getBranchValue("profile_channel.id") === coub.channel_id) {
        attrs = 'auto-init widget-avatar-change-listener';
      } else {
        attrs = '';
      }
      return attrs;
    },
    getWIAText: function(device) {
      var lang, platform;
      if (device == null) {
        device = void 0;
      }
      lang = GlobalState.COUNTRY.isExUssr() && '_ru' || '';
      platform = device || GlobalState.PLATFORM.hasApp();
      if (platform === 'android' && (navigator.userAgent.indexOf('FB_IAB') !== -1 || navigator.userAgent.indexOf('Twitter') !== -1)) {
        return I18n.embed["get_app" + lang];
      } else {
        return I18n.embed["open_in_app" + lang];
      }
    },
    showWIAButton: function() {
      var device, devices, isPinterest, ref;
      device = GlobalState.PLATFORM;
      devices = (device.isIos() || device.isWindophone() || device.isAndroidNative()) && device.isMobile();
      ref = document.referrer;
      isPinterest = ref && ref.indexOf('pinterest') !== -1;
      return devices && !isPinterest;
    },
    isCurrentPageCoubPage: function(coub) {
      var coubPath;
      coubPath = typeof Routes !== "undefined" && Routes !== null ? Routes.view_coub_by_permalink_path(coub.permalink) : "/view/" + coub.permalink;
      return document.location.pathname.match(coubPath) != null;
    },
    capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    },
    getFileVersion: (function(_this) {
      return function(versions, versionName) {
        if (versions && versions.template) {
          return versions.template.replace(/%{version}/g, versionName);
        } else {
          return "";
        }
      };
    })(this),
    getBigSocialButtonsOrder: (function(_this) {
      return function() {
        var order;
        order = GlobalState.COUNTRY.isExUssr() ? {
          visible: ["vkontakte", "facebook"],
          hidden: ["odnoklassniki", "twitter", "tumblr", "reddit", "pinterest"]
        } : {
          visible: ["facebook", "twitter"],
          hidden: ["tumblr", "reddit", "pinterest"]
        };
        return order;
      };
    })(this),
    isSharingButtonsActive: (function(_this) {
      return function(coub) {
        var ovt;
        ovt = coub.original_visibility_type;
        return !coub.banned && (ovt === "public" || ovt === "unlisted") && coub.is_done && coub.published;
      };
    })(this),
    getAbuseIdForReason: (function(_this) {
      return function(coub, reason) {
        var curAbuse;
        if (!_.isArray(coub.abuses)) {
          return "";
        }
        curAbuse = _.detect(coub.abuses, (function(ab) {
          return ab.reason === reason;
        }));
        if (curAbuse) {
          return curAbuse.id;
        } else {
          return "";
        }
      };
    })(this),
    isCurrentUserAuthorOf: function(coub) {
      return helpers.Channel.hasId(coub.channel_id);
    },
    calculatePropertiesForViewIfNotComputed: function(coub) {
      var aspectRatio;
      if (!coub.computed) {
        coub.computed = {};
        if (!coub.render) {
          coub.render = {};
        }
        if (coub.render["card-type"] != null) {
          coub.computed.cardType = blocks.coub.CardTypes.types[coub.render["card-type"]];
        } else {
          coub.computed.cardType = blocks.coub.CardTypes.getDefaultCardType();
        }
        coub.computed.showSharing = coub.render["no-sharing"] !== "true" && helpers.Coub.visibleForCurrentUser(coub);
        coub.computed.cardClassName = blocks.coub.CardTypes.getClassName(coub.computed.cardType);
        coub.computed.cardStatus = blocks.coub.CardStatuses.getCardStatusByCoub(coub);
        if ((coub.first_frame_versions != null) && (coub.first_frame_versions.template != null)) {
          coub.computed.firstFrameUrl = coub.first_frame_versions.template.replace("%{version}", "med");
        } else {
          coub.computed.firstFrameUrl = "";
        }
        aspectRatio = this.aspectRatio(coub.size[0], coub.size[1]);
        coub.computed.aspectRatio = aspectRatio;
        coub.computed.dims = this.scaleToRect(coub.size, blocks.coub.CardTypes.getSize(coub.computed.cardType)).map((function(_this) {
          return function(v) {
            return v + "px";
          };
        })(this));
      }
      return coub;
    },
    scaleToRect: function(original_size, target_size) {
      var original_ratio, target_ratio;
      original_ratio = original_size[0] / original_size[1];
      target_ratio = target_size[0] / target_size[1];
      if (original_ratio < target_ratio) {
        return [Math.ceil(target_size[1] * original_ratio), target_size[1]];
      } else {
        return [target_size[0], Math.floor(target_size[0] / original_ratio)];
      }
    },
    aspectRatio: function(width, height) {
      var ratio;
      ratio = height / width;
      return {
        percent: (ratio * 100).toFixed(2) + '%',
        val: ratio.toFixed(4)
      };
    },
    isPromoPage: function() {
      return $('body').hasClass('promo-page');
    },
    rightCoubTitle: function(count) {
      if (count === 1) {
        return "1 coub";
      } else {
        return count + " coubs";
      }
    },
    showEditorInfo: function(coub) {
      return Params.getBranchValue("current_user.is_editor") && coub.is_done && coub.type !== "Coub::Temp" && typeof coub.editorial_info.last_moderated_by !== "undefined";
    },
    getCommunityStamp: function(coub, classes, limitTitle) {
      var community, title;
      if (classes == null) {
        classes = '';
      }
      if (limitTitle == null) {
        limitTitle = 0;
      }
      community = coub.categories[0];
      if (!community || ((coub.feed_source != null) && coub.feed_source !== "community")) {
        return '';
      }
      title = community.title;
      if (limitTitle > 0 && title.length > limitTitle) {
        title = title.substr(0, limitTitle) + '...';
      }
      return "<a href=\"" + (Routes.category_hot_path(community.permalink)) + "\" class=\"" + classes + "\" data-prompt=\"" + (I18n.t('trends.community')) + "\" hideable-prompt>" + title + "</a>";
    },
    getCotdStamp: function(coub, iconSize, classes) {
      if (iconSize == null) {
        iconSize = 16;
      }
      if (classes == null) {
        classes = '';
      }
      coub = helpers.Coub.getOriginalCoub(coub);
      if (!coub.cotd || ((coub.feed_source != null) && coub.feed_source !== "cotd")) {
        return '';
      }
      return "<a href=\"/oftheday\" class=\"coub__cotd-badge " + classes + "\" data-prompt=\"" + (I18n.t('coub.cotd')) + " &#183; " + (helpers.Coub.cotdDate(coub)) + "\" hideable-prompt data-prompt-class=\"-full-width\">\n  " + (JST["app/site/templates/svg/icons/" + iconSize + "/cotd"]()) + "\n</a>";
    },
    getFeaturedStamp: function(coub, iconSize, classes) {
      if (iconSize == null) {
        iconSize = 16;
      }
      if (classes == null) {
        classes = '';
      }
      coub = helpers.Coub.getOriginalCoub(coub);
      if (!coub.featured || ((coub.feed_source != null) && coub.feed_source !== "featured")) {
        return '';
      }
      return "<a href=\"/featured\" class=\"coub__featured-badge " + classes + "\" data-prompt=\"" + (I18n.t('coub.featured_badge')) + "\" hideable-prompt>\n  " + (JST["app/site/templates/svg/icons/" + iconSize + "/featured"]()) + "\n</a>";
    },
    getPromotedStamp: function() {
      return "<a href=\"/promote\" class=\"coub__promoted-badge coub__tags-tag\" data-prompt=\"" + (I18n.t('promoted_coubs.promoted')) + "\" hideable-prompt>\n  " + (JST["app/site/templates/svg/icons/24/promote"]()) + "\n</a>";
    }
  };

}).call(this);
(function() {
  functions.FullscreenBodyClass = (function() {
    function FullscreenBodyClass() {
      $(document).on('fullscreenchange', function() {
        return $('body').toggleClass('fullscreen', helpers.Location.isFullScreen());
      });
    }

    return FullscreenBodyClass;

  })();

}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/coub_block/parts/download_video_button"] = function anonymous(it) {
  var out=''; var downloadLink = it.coub.file_versions && it.coub.file_versions.share && it.coub.file_versions.share.default, permalink = it.coub.permalink, isPlayer = it.isPlayer, classes = it.classes || ""; if (isPlayer) classes += " -player"; if (downloadLink) downloadLink += "?dl=1";out+='<a class="'+(classes)+'" href="'+(downloadLink || "#download")+'" download data-permalink='+(permalink)+' ';if(!downloadLink){out+='widget-download-coub-video auto-init';}out+='> ';if(isPlayer){out+=' <i>'+(JST['app/site/templates/svg/icons/html5_player_specific/share_download']())+'</i> <span>'+(I18n.embed.sharing.download)+'</span> ';}else{out+=' <i>'+(JST['app/site/templates/svg/icons/24/download']())+'</i> <span>'+(I18n.t('coub.buttons.download'))+'</span> ';}out+='</a>';return out;
  };
}).call(this);

/*
  Кнопка скачать видео коба, юзается в том числе и в эмбеде
 */

(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  widgets.DownloadCoubVideoButton = (function() {
    DownloadCoubVideoButton.ATTR_NAME = "widget-download-coub-video";

    function DownloadCoubVideoButton(el) {
      this.el = el;
      this.onClick = bind(this.onClick, this);
      this.permalink = this.el.attr("data-permalink");
      this.isPlayer = this.el.hasClass("-player");
      this.el.on("click", this.onClick);
    }

    DownloadCoubVideoButton.prototype.onClick = function(e) {
      e.preventDefault();
      return this.loadStatus();
    };

    DownloadCoubVideoButton.prototype.loadStatus = function() {
      this.startLoadingAnimation();
      return $.get("/api/v2/coubs/" + this.permalink + "/share_video_status").fail((function(_this) {
        return function(e) {
          _this.stopLoadingAnimation();
          return console.error("widgets.DownloadCoubVideoButton LoadError", e);
        };
      })(this)).done((function(_this) {
        return function(r) {
          if (r.status === "ready") {
            _this.stopLoadingAnimation();
            return _this.downloadFile(r.url + "?dl=1");
          } else {
            return setTimeout(function() {
              return _this.loadStatus();
            }, 5000);
          }
        };
      })(this));
    };

    DownloadCoubVideoButton.prototype.startLoadingAnimation = function() {
      if (this.isLoading) {
        return;
      }
      this.isLoading = true;
      this.el.addClass("-loading");
      if (this.isPlayer) {
        return $("> span", this.el).text(I18n.embed.sharing.loading);
      } else {
        $("> i", this.el).addClass("-hidden");
        return LoadIndicator.appendToContainer(this.el, LoadIndicator.SIZE.SMALL);
      }
    };

    DownloadCoubVideoButton.prototype.stopLoadingAnimation = function() {
      this.isLoading = false;
      this.el.removeClass("-loading");
      if (this.isPlayer) {
        return $("> span", this.el).text(I18n.embed.sharing.download);
      } else {
        $("> i", this.el).removeClass("-hidden");
        return LoadIndicator.removeFromContainer(this.el);
      }
    };

    DownloadCoubVideoButton.prototype.downloadFile = function(url) {
      return this.el.off("click").attr("href", url).get(0).click();
    };

    return DownloadCoubVideoButton;

  })();

}).call(this);
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {

  var pluses = /\+/g;

  function encode(s) {
    return config.raw ? s : encodeURIComponent(s);
  }

  function decode(s) {
    return config.raw ? s : decodeURIComponent(s);
  }

  function stringifyCookieValue(value) {
    return encode(config.json ? JSON.stringify(value) : String(value));
  }

  function parseCookieValue(s) {
    if (s.indexOf('"') === 0) {
      // This is a quoted cookie as according to RFC2068, unescape...
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }

    try {
      // Replace server-side written pluses with spaces.
      // If we can't decode the cookie, ignore it, it's unusable.
      // If we can't parse the cookie, ignore it, it's unusable.
      s = decodeURIComponent(s.replace(pluses, ' '));
      return config.json ? JSON.parse(s) : s;
    } catch(e) {}
  }

  function read(s, converter) {
    var value = config.raw ? s : parseCookieValue(s);
    return $.isFunction(converter) ? converter(value) : value;
  }

  var config = $.cookie = function (key, value, options) {

    // Write

    if (value !== undefined && !$.isFunction(value)) {
      options = $.extend({}, config.defaults, options);

      if (typeof options.expires === 'number') {
        var days = options.expires, t = options.expires = new Date();
        t.setTime(+t + days * 864e+5);
      }

      return (document.cookie = [
        encode(key), '=', stringifyCookieValue(value),
        options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
        options.path    ? '; path=' + options.path : '',
        options.domain  ? '; domain=' + options.domain : '',
        options.secure  ? '; secure' : ''
      ].join(''));
    }

    // Read

    var result = key ? undefined : {};

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all. Also prevents odd result when
    // calling $.cookie().
    var cookies = document.cookie ? document.cookie.split('; ') : [];

    for (var i = 0, l = cookies.length; i < l; i++) {
      var parts = cookies[i].split('=');
      var name = decode(parts.shift());
      var cookie = parts.join('=');

      if (key && key === name) {
        // If second argument (value) is a function it's a converter...
        result = read(cookie, value);
        break;
      }

      // Prevent storing a cookie that we couldn't decode.
      if (!key && (cookie = read(cookie)) !== undefined) {
        result[name] = cookie;
      }
    }

    return result;
  };

  config.defaults = {};

  $.removeCookie = function (key, options) {
    if ($.cookie(key) === undefined) {
      return false;
    }

    // Must not alter options, thus extending a fresh object...
    $.cookie(key, '', $.extend({}, options, { expires: -1 }));
    return !$.cookie(key);
  };

}));
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/html5_player_specific/hand"] = function anonymous(it) {
  var out='<svg width="36" height="49" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.72 4.123c.11-1.237-.23-2.302-.932-3.055-.695-.745-1.665-1.099-2.644-1.066C14.14.07 12.232 1.69 11.758 4.58c-.76 4.634-.581 12.421.178 20.094a10.56 10.56 0 00-2.7-1.338c-1.673-.561-3.858-.835-5.67-.489-.91.174-1.813.521-2.495 1.157C.357 24.67-.036 25.586.003 26.7c.029.844.583 1.398 1.08 1.733.501.338 1.135.588 1.732.79.384.13.81.259 1.215.381l.004.002.007.002.623.19c.603.19 1.106.368 1.48.562.618.32 1.248.931 1.912 1.8.659.862 1.287 1.888 1.94 2.965l.08.132v.001c.616 1.017 1.257 2.075 1.931 2.978.445.597.936 1.171 1.484 1.638a.996.996 0 00-.089.412v5.391c0 .95.673 1.792 1.642 1.956 4.742.805 10.791.83 14.354.029.926-.209 1.504-1.037 1.504-1.91v-5.37-.023c.288-.175.554-.389.757-.654.484-.633.99-1.746 1.455-2.991.479-1.282.957-2.818 1.36-4.38.402-1.562.734-3.169.915-4.591.176-1.383.228-2.724-.023-3.678-.18-.69-.644-1.252-1.16-1.7-.525-.455-1.186-.862-1.903-1.225-1.436-.729-3.24-1.355-5.001-1.87-2.848-.83-5.697-1.4-6.959-1.634-.342-1.792-1.195-7.144-.624-13.513zm9.182 36.988c-.18.043-.364.084-.552.122-1.405.284-3.127.441-4.87.484-1.747.043-3.548-.028-5.117-.213-1.085-.128-2.12-.316-2.96-.585v4.747c4.538.767 10.258.771 13.5.057v-4.612zM13.732 4.904c.35-2.14 1.61-2.874 2.48-2.903.457-.015.85.148 1.113.43.256.275.47.75.402 1.513-.692 7.714.622 13.981.782 14.71a1.087 1.087 0 00.879.842c.483.083 3.93.696 7.353 1.695 1.716.5 3.383 1.086 4.657 1.732.638.324 1.142.645 1.498.953.365.317.499.555.536.697.145.553.145 1.56-.027 2.917-.167 1.317-.48 2.839-.868 4.344a42.804 42.804 0 01-1.297 4.18c-.464 1.243-.884 2.103-1.17 2.476-.032.042-.183.18-.59.35-.384.158-.898.306-1.526.433-1.255.253-2.853.404-4.523.445-1.667.04-3.372-.028-4.834-.2-1.499-.177-2.623-.45-3.208-.752-.552-.286-1.137-.864-1.779-1.725-.614-.825-1.21-1.809-1.845-2.855l-.002-.003-.057-.095c-.643-1.061-1.326-2.181-2.06-3.142-.73-.953-1.575-1.84-2.582-2.362-.542-.28-1.19-.502-1.801-.694-.24-.075-.472-.145-.697-.213l-.006-.002a33.796 33.796 0 01-1.103-.346c-.568-.193-.988-.373-1.256-.554a.79.79 0 01-.2-.172c-.013-.543.165-.885.435-1.137.308-.287.809-.521 1.505-.654 1.4-.268 3.231-.059 4.659.42 1.55.52 2.508 1.258 3.067 1.805.28.274.468.508.59.664l.016.021c.043.056.13.17.201.241.023.023.096.097.204.164l.003.001c.05.032.485.301.994.038.482-.25.532-.73.538-.784v-.003c.014-.12.003-.22-.001-.253-.99-8.455-1.282-17.335-.48-22.222zM1.991 26.586l.004.01-.005-.01z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/html5_player_specific/logo"] = function anonymous(it) {
  var out='<svg width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M38 19c0 10.493-8.507 19-19 19-.503 0-1.003-.02-1.496-.058l1.869-5.135c.308-.848 1.336-1.983 2.245-2.986l.007-.007c.52-.573.97-1.07 1.142-1.361a1635.64 1635.64 0 013.329-5.605l.047-.08a74.289 74.289 0 001.864-2.846l2.803-4.553c.513-.833.552-1.877.087-2.328a.803.803 0 00-.285-.178c-.514-.186-1.196.117-1.7.755l-2.816 3.929c-.326.413-.69.753-1.043 1.081-.294.274-.597.558-.868.873l-.288.337a.197.197 0 01-.137.068.363.363 0 01-.15-.02c-.1-.036-.262-.15-.218-.508l.001-.004c.024-.107.48-2.122-.806-2.665l-.057-.022c-.707-.258-1.27.184-1.895.928-.094.112-.286.122-.383.087a.37.37 0 01-.232-.447c.223-.997-.188-1.93-.978-2.217l-.06-.02c-.688-.221-1.517.061-2.014.688a.2.2 0 01-.065.054c-.099.094-.268.225-.453.158-.197-.072-.244-.312-.262-.487l-.022-.217c-.021-.215-.05-.463-.08-.729l-.001-.008c-.1-.869-.222-1.947-.202-2.664l.303-5.112c.021-.747-.322-1.383-.854-1.577a.995.995 0 00-.47-.051c-.752.096-1.398.949-1.47 1.94l-.559 5.17c-.038.523-.026 1.254-.014 1.96v.001c.009.524.017 1.02.005 1.42l-.049 1.648c-.017.555-.194.953-.528 1.183-.183.13-.801.573-1.47 1.197-.063.059-.127.116-.19.171l-.03.027c-.494.437-.92.815-.96 2.069-.022.589.005 1.187.09 2.067.089.923.362 1.502.651 2.115.047.1.099.204.154.314.425.857 1.006 2.028.523 3.356l-1.989 5.464C3.61 31.828 0 25.835 0 19 0 8.507 8.507 0 19 0s19 8.507 19 19z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/html5_player_specific/logo_hover"] = function anonymous(it) {
  var out='<svg width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h38v38H0z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M38 19c0 10.493-8.507 19-19 19-.504 0-1.003-.02-1.496-.058l1.869-5.135c.308-.848 1.336-1.983 2.245-2.986l.007-.007c.52-.573.97-1.07 1.142-1.361.827-1.41 3.35-5.642 3.376-5.685a74.289 74.289 0 001.864-2.846l2.803-4.553c.513-.833.552-1.877.087-2.328a.803.803 0 00-.285-.178c-.514-.186-1.196.117-1.7.755l-2.816 3.929c-.326.414-.69.753-1.044 1.082-.293.273-.596.556-.867.872l-.288.337a.2.2 0 01-.137.068.363.363 0 01-.15-.02c-.1-.036-.262-.15-.218-.508l.001-.004c.024-.107.48-2.122-.806-2.665l-.057-.022c-.707-.258-1.27.184-1.895.928-.094.112-.286.122-.383.087a.37.37 0 01-.232-.447c.223-.997-.188-1.93-.978-2.217l-.06-.02c-.688-.221-1.517.061-2.014.688a.2.2 0 01-.065.054c-.099.094-.268.225-.453.158-.197-.072-.244-.312-.262-.487l-.022-.217c-.021-.215-.05-.463-.08-.729l-.001-.008c-.099-.868-.222-1.947-.202-2.664l.303-5.112c.021-.747-.322-1.383-.854-1.577a.995.995 0 00-.47-.051c-.752.096-1.398.949-1.47 1.94l-.559 5.17c-.038.523-.026 1.254-.014 1.96v.001c.009.524.017 1.02.005 1.42l-.049 1.648c-.017.555-.194.953-.528 1.183-.183.13-.801.573-1.47 1.197-.073.068-.147.134-.22.198-.494.437-.92.815-.96 2.069-.022.589.005 1.187.09 2.067.089.923.362 1.502.651 2.115.047.1.099.204.154.314.425.857 1.006 2.028.523 3.356l-1.989 5.464C3.61 31.828 0 25.835 0 19 0 8.507 8.507 0 19 0s19 8.507 19 19z" fill="#0332FF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.504 37.942l1.869-5.135c.308-.848 1.336-1.983 2.245-2.986l.007-.007c.52-.573.97-1.07 1.142-1.361.827-1.41 3.35-5.642 3.376-5.685a74.132 74.132 0 001.864-2.846l2.803-4.553c.513-.832.552-1.877.087-2.328a.802.802 0 00-.285-.177c-.514-.188-1.196.116-1.7.754l-2.816 3.929c-.326.414-.69.753-1.044 1.082-.293.273-.596.557-.867.872l-.288.337a.196.196 0 01-.137.069.365.365 0 01-.15-.02c-.1-.037-.262-.152-.218-.51l.001-.003c.024-.107.48-2.122-.806-2.665l-.057-.022c-.707-.258-1.27.184-1.895.928-.094.112-.286.122-.383.087a.37.37 0 01-.232-.447c.223-.997-.188-1.93-.978-2.217l-.06-.02c-.688-.221-1.517.061-2.014.688a.2.2 0 01-.065.054c-.099.094-.268.225-.453.158-.197-.072-.244-.312-.262-.487l-.022-.217c-.021-.215-.05-.463-.08-.729l-.001-.008c-.099-.868-.222-1.947-.202-2.664l.303-5.112c.021-.747-.322-1.383-.854-1.577a.995.995 0 00-.47-.051c-.752.096-1.398.949-1.47 1.94l-.559 5.17c-.038.523-.026 1.254-.014 1.96v.001c.009.524.017 1.02.005 1.42l-.049 1.648c-.017.555-.194.953-.528 1.183-.183.13-.801.573-1.47 1.197-.073.068-.147.134-.22.198-.494.437-.92.815-.96 2.069-.022.589.005 1.187.09 2.067.089.923.362 1.502.651 2.115.047.1.099.204.154.314.425.857 1.006 2.028.523 3.356l-1.989 5.464a18.886 18.886 0 008.478 2.767z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M38 19c0 10.493-8.507 19-19 19-.504 0-1.003-.02-1.496-.058l1.869-5.135c.308-.848 1.336-1.983 2.245-2.986l.007-.007c.52-.573.97-1.07 1.142-1.361.827-1.41 3.35-5.642 3.376-5.685a74.289 74.289 0 001.864-2.846l2.803-4.553c.513-.833.552-1.877.087-2.328a.803.803 0 00-.285-.178c-.514-.186-1.196.117-1.7.755l-2.816 3.929c-.326.414-.69.753-1.044 1.082-.293.273-.596.556-.867.872l-.288.337a.2.2 0 01-.137.068.363.363 0 01-.15-.02c-.1-.036-.262-.15-.218-.508l.001-.004c.024-.107.48-2.122-.806-2.665l-.057-.022c-.707-.258-1.27.184-1.895.928-.094.112-.286.122-.383.087a.37.37 0 01-.232-.447c.223-.997-.188-1.93-.978-2.217l-.06-.02c-.688-.221-1.517.061-2.014.688a.2.2 0 01-.065.054c-.099.094-.268.225-.453.158-.197-.072-.244-.312-.262-.487l-.022-.217c-.021-.215-.05-.463-.08-.729l-.001-.008c-.099-.868-.222-1.947-.202-2.664l.303-5.112c.021-.747-.322-1.383-.854-1.577a.995.995 0 00-.47-.051c-.752.096-1.398.949-1.47 1.94l-.559 5.17c-.038.523-.026 1.254-.014 1.96v.001c.009.524.017 1.02.005 1.42l-.049 1.648c-.017.555-.194.953-.528 1.183-.183.13-.801.573-1.47 1.197-.073.068-.147.134-.22.198-.494.437-.92.815-.96 2.069-.022.589.005 1.187.09 2.067.089.923.362 1.502.651 2.115.047.1.099.204.154.314.425.857 1.006 2.028.523 3.356l-1.989 5.464C3.61 31.828 0 25.835 0 19 0 8.507 8.507 0 19 0s19 8.507 19 19z" fill="#0332FF"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/html5_player_specific/prev"] = function anonymous(it) {
  var out='<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.707 11.707a1 1 0 00-1.414-1.414l-5 5a1 1 0 000 1.414l5 5a1 1 0 001.414-1.414L11.414 17H23a1 1 0 100-2H11.414l3.293-3.293z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/html5_player_specific/prev_hover"] = function anonymous(it) {
  var out='<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.293-21.707a1 1 0 010 1.414L11.414 15H23a1 1 0 110 2H11.414l3.293 3.293a1 1 0 11-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/html5_player_specific/replay"] = function anonymous(it) {
  var out='<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.707 8.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L14.414 12H16a5.5 5.5 0 11-5.5 5.5 1 1 0 10-2 0A7.5 7.5 0 1016 10h-1.586l1.293-1.293z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/html5_player_specific/replay_hover"] = function anonymous(it) {
  var out='<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.293-24.707a1 1 0 010 1.414L14.414 10H16a7.5 7.5 0 11-7.5 7.5 1 1 0 112 0A5.5 5.5 0 1016 12h-1.586l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/html5_player_specific/share_copy"] = function anonymous(it) {
  var out='<svg width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 44c12.15 0 22-9.85 22-22S34.15 0 22 0 0 9.85 0 22s9.85 22 22 22zm-2.121-26.95a1 1 0 001.414 1.414l2.828-2.828a2 2 0 012.829 0l1.414 1.414a2 2 0 010 2.829l-2.829 2.828a1 1 0 001.415 1.414l2.828-2.828a4 4 0 000-5.657l-1.414-1.414a4 4 0 00-5.657 0L19.88 17.05zM17.05 19.88a1 1 0 011.415 1.414l-2.829 2.828a2 2 0 000 2.829l1.414 1.414a2 2 0 002.829 0l2.828-2.829a1 1 0 011.414 1.415l-2.828 2.828a4 4 0 01-5.657 0l-1.414-1.414a4 4 0 010-5.657l2.828-2.828zm1.06 6.01a1 1 0 010-1.414l6.365-6.364a1 1 0 111.414 1.414l-6.364 6.364a1 1 0 01-1.414 0z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/html5_player_specific/share_copy_done"] = function anonymous(it) {
  var out='<svg width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 44c12.15 0 22-9.85 22-22S34.15 0 22 0 0 9.85 0 22s9.85 22 22 22zm-2.121-26.95a1 1 0 001.414 1.414l2.828-2.828a2 2 0 012.829 0l1.414 1.414a2 2 0 010 2.829l-.125.124a7.979 7.979 0 012.22.382 4.002 4.002 0 00-.68-4.749l-1.415-1.414a4 4 0 00-5.657 0L19.88 17.05zm.124 11.189c.023.773.155 1.518.382 2.22a4.002 4.002 0 01-4.749-.68l-1.414-1.415a4 4 0 010-5.657l2.828-2.828a1 1 0 011.415 1.414l-2.829 2.828a2 2 0 000 2.829l1.414 1.414a2 2 0 002.829 0l.124-.125zm4.704-7.532a8.031 8.031 0 00-4 4l-1.182 1.182a1 1 0 01-1.414-1.414l6.364-6.364a1 1 0 111.414 1.414l-1.182 1.182zM28 34a6 6 0 100-12 6 6 0 000 12zm3.723-7.31a1 1 0 00-1.446-1.38l-3.095 3.242-1.459-1.528a1 1 0 10-1.446 1.38l2.181 2.287a1 1 0 001.447 0l3.818-4z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/html5_player_specific/share_download"] = function anonymous(it) {
  var out='<svg width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 44c12.15 0 22-9.85 22-22S34.15 0 22 0 0 9.85 0 22s9.85 22 22 22zm-6-14a1 1 0 011-1h10a1 1 0 110 2H17a1 1 0 01-1-1zm1.707-9.207a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414L23 24.086V14a1 1 0 10-2 0v10.086l-3.293-3.293z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/html5_player_specific/share_facebook"] = function anonymous(it) {
  var out='<svg width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 44c12.15 0 22-9.85 22-22S34.15 0 22 0 0 9.85 0 22s9.85 22 22 22zm0-33.5c-6.351 0-11.5 5.149-11.5 11.5 0 5.706 4.156 10.442 9.606 11.345a12.302 12.302 0 01-.137-.024v-8.203H17.93v-2.674h2.039V20.42c0-1.887 1.138-3.783 4.043-3.783.89 0 1.533.063 1.848.093.101.01.168.016.198.016l.054 2.788s-.887-.008-1.855-.008c-1.048 0-1.215.467-1.215 1.242v1.677h3.016v2.674h-3.016v8.335C28.905 32.927 33.5 28 33.5 22c0-6.351-5.149-11.5-11.5-11.5z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/html5_player_specific/share_other"] = function anonymous(it) {
  var out='<svg width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 44c12.15 0 22-9.85 22-22S34.15 0 22 0 0 9.85 0 22s9.85 22 22 22zm-4.5-22a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm6.75 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm4.5 2.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/html5_player_specific/share_twitter"] = function anonymous(it) {
  var out='<svg width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 44c12.15 0 22-9.85 22-22S34.15 0 22 0 0 9.85 0 22s9.85 22 22 22zm8.026-27.281a8.567 8.567 0 002.474-.684 8.788 8.788 0 01-2.15 2.247c.008.186.013.373.013.562 0 5.735-4.334 12.35-12.259 12.35-2.433 0-4.697-.72-6.604-1.951.337.04.68.06 1.028.06a8.603 8.603 0 005.35-1.858 4.317 4.317 0 01-4.024-3.014 4.279 4.279 0 001.946-.074 4.335 4.335 0 01-3.457-4.256v-.055c.582.325 1.246.52 1.952.543a4.347 4.347 0 01-1.916-3.612c0-.796.212-1.542.583-2.183 2.125 2.627 5.3 4.354 8.88 4.535a4.387 4.387 0 01-.111-.989c0-2.397 1.929-4.34 4.308-4.34 1.24 0 2.36.527 3.145 1.37a8.586 8.586 0 002.736-1.053 4.35 4.35 0 01-1.894 2.402z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/html5_player_specific/share_vkontakte"] = function anonymous(it) {
  var out='<svg width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 44c12.15 0 22-9.85 22-22S34.15 0 22 0 0 9.85 0 22s9.85 22 22 22zm8.574-27c.668 0 .809.344.668.813-.28 1.288-2.974 5.081-2.974 5.081-.234.375-.328.563 0 .984.115.162.362.403.644.68.29.283.617.604.878.913.95 1.068 1.665 1.969 1.865 2.59.182.623-.134.939-.765.939h-2.211c-.592 0-.89-.332-1.534-1.048-.274-.304-.609-.677-1.055-1.123-1.311-1.265-1.873-1.429-2.201-1.429-.445 0-.578.126-.614.758v1.982c.036.544-.138.86-1.543.86-2.342 0-4.916-1.422-6.743-4.045-2.74-3.84-3.489-6.744-3.489-7.33 0-.328.126-.625.758-.625h2.21c.565 0 .778.247.99.86 1.08 3.149 2.904 5.901 3.653 5.901.281 0 .41-.13.414-.843v-3.255c-.053-.926-.377-1.327-.617-1.624-.149-.184-.265-.327-.265-.53 0-.248.211-.509.562-.509h3.474c.468 0 .596.25.596.813v4.379c.028.468.239.632.38.632.28 0 .515-.164 1.03-.679 1.592-1.78 2.716-4.52 2.716-4.52.141-.328.4-.625.962-.625h2.21z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/24/open-on-coub"] = function anonymous(it) {
  var out='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.556 8.545a1 1 0 01.07-2l6.14.213h.011a.998.998 0 01.965.965l.212 6.152a1 1 0 01-1.999.069l-.132-3.852-.279.278-.158.158-.043.043-.01.011-.004.003-.708-.706-.707-.707.001-.001.003-.003.01-.011.044-.043.158-.158.278-.278-3.852-.133zm-3.006 6.99l6.364-6.363.707.707.707.707-6.364 6.364a1 1 0 01-1.414-1.414z" fill="#999"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/24/edit-coub"] = function anonymous(it) {
  var out='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 5a1 1 0 012 0v2h8V5a1 1 0 012 0v2h1a3 3 0 013 3v4a3 3 0 01-3 3h-1v2a1 1 0 01-2 0v-2H8v2a1 1 0 01-2 0v-2H5a3 3 0 01-3-3v-4a3 3 0 013-3h1V5zm12 10h1a1 1 0 001-1v-4a1 1 0 00-1-1h-1v6zm-2-6v6H8V9h8zM5 9h1v6H5a1 1 0 01-1-1v-4a1 1 0 011-1z" fill="#999"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/24/doc"] = function anonymous(it) {
  var out='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 5h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1zM3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm5 1a1 1 0 000 2h8a1 1 0 000-2H8zm-1 4a1 1 0 011-1h8a1 1 0 010 2H8a1 1 0 01-1-1zm1 2a1 1 0 000 2h4a1 1 0 000-2H8z" fill="#999"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/24/add-category"] = function anonymous(it) {
  var out='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.801 7.309a6.032 6.032 0 00-1.267 0c-.648.062-1.399.207-2.094.457-.671.243-1.41.626-1.901 1.238-.257.32-.453.711-.517 1.17-.063.45.01.903.19 1.34.11.298.335.614.519.858.226.3.521.655.857 1.04.21.239.44.494.683.76l-1.468 4.212-.661 1.898 1.9-.606 4.34-1.385c.132.122.262.24.39.356.822.744 1.598 1.394 2.12 1.71a1 1 0 00.12.063c.442.19.9.269 1.356.204a2.342 2.342 0 001.16-.521c.605-.496.984-1.243 1.224-1.921.248-.702.392-1.46.452-2.115.04-.423.05-.88.001-1.279a18.31 18.31 0 001.694-1.507c2.283-2.306 2.621-5.341 2.574-7.23-.041-1.687-1.348-3.005-3.017-3.047-1.871-.048-4.883.292-7.163 2.594A18.335 18.335 0 008.8 7.308zm-1.38 2.037c-.434.06-.897.164-1.311.313-.534.193-.871.418-1.026.61a.377.377 0 00-.091.186c-.006.042-.008.134.06.297.012.025.021.051.03.078-.006-.02-.006-.019.01.006.025.04.088.141.221.319.181.24.432.544.742.898a21.87 21.87 0 011.365-2.708zm4.123 8.2c.575.505 1.029.867 1.311 1.05a.488.488 0 00.236.038.371.371 0 00.183-.093c.19-.156.414-.496.604-1.035a6.78 6.78 0 00.31-1.323 21.507 21.507 0 01-2.644 1.363zm-4.728-1.753a78.88 78.88 0 00.915.917l-1.39.443.475-1.36zm5.278-9.138a6.138 6.138 0 00-.394.365c-1.525 1.54-2.581 3.263-3.257 4.61a18.525 18.525 0 00-.73 1.643l-.019.05 2.557 2.583.05-.02c.394-.154.96-.395 1.624-.734 1.332-.681 3.037-1.747 4.567-3.292.128-.13.248-.263.361-.399l-4.759-4.806zm1.726-1.04l4.065 4.106c.51-1.263.625-2.577.599-3.62-.015-.614-.468-1.072-1.078-1.088-1.034-.026-2.337.09-3.586.602z" fill="#999"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/24/delete"] = function anonymous(it) {
  var out='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.392 3.5c.19.148.324.321.42.5H9.188c.096-.179.23-.352.42-.5.313-.246.873-.5 1.892-.5s1.579.254 1.892.5zm2.488.31c.018.064.032.127.043.19H19.5a1 1 0 010 2h-.069c0 .044-.001.088-.004.133L18.622 18.2A3 3 0 0115.63 21H7.37a3 3 0 01-2.993-2.8L3.573 6.133A2.033 2.033 0 013.57 6H3.5a1 1 0 010-2h3.577c.01-.063.025-.126.043-.19a3.64 3.64 0 011.255-1.886C9.113 1.347 10.135 1 11.5 1c1.364 0 2.387.347 3.124.924A3.64 3.64 0 0115.88 3.81zM14.107 6h3.323l-.804 12.067a1 1 0 01-.998.933H7.37a1 1 0 01-.998-.933L5.57 6h8.539zm-5.11 2.438a1 1 0 10-1.996.124l.5 8a1 1 0 101.996-.124l-.5-8zm6.064-.936a1 1 0 00-1.06.936l-.5 8a1 1 0 101.996.124l.5-8a1 1 0 00-.936-1.06zM10.5 8.5a1 1 0 012 0v8a1 1 0 01-2 0v-8z" fill="#999"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/24/replay"] = function anonymous(it) {
  var out='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.707 4.707a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 101.414-1.414L10.414 8H12a5.5 5.5 0 11-5.5 5.5 1 1 0 10-2 0A7.5 7.5 0 1012 6h-1.586l1.293-1.293z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/24/copy_link"] = function anonymous(it) {
  var out='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.879 8.464a1 1 0 010-1.414l2.828-2.828a4 4 0 015.657 0l1.414 1.414a4 4 0 010 5.657L16.95 14.12a1 1 0 01-1.414-1.414l2.828-2.828a2 2 0 000-2.829L16.95 5.636a2 2 0 00-2.829 0l-2.828 2.828a1 1 0 01-1.414 0zM8.464 9.88a1 1 0 00-1.414 0l-2.828 2.828a4 4 0 000 5.657l1.414 1.414a4 4 0 005.657 0l2.828-2.828a1 1 0 00-1.414-1.414l-2.828 2.828a2 2 0 01-2.829 0L5.636 16.95a2 2 0 010-2.829l2.828-2.828a1 1 0 000-1.414zm-.353 4.596a1 1 0 001.414 1.414l6.364-6.364a1 1 0 00-1.414-1.414L8.11 14.475z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/24/copy_link_done"] = function anonymous(it) {
  var out='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.879 8.464a1 1 0 010-1.414l2.828-2.828a4 4 0 015.657 0l1.414 1.414a4.002 4.002 0 01.682 4.75 7.983 7.983 0 00-2.22-.382l.124-.125a2 2 0 000-2.829L16.95 5.636a2 2 0 00-2.829 0l-2.828 2.828a1 1 0 01-1.414 0zm.506 11.996a7.983 7.983 0 01-.381-2.22l-.125.124a2 2 0 01-2.829 0L5.636 16.95a2 2 0 010-2.829l2.828-2.828A1 1 0 007.05 9.879l-2.828 2.828a4 4 0 000 5.657l1.414 1.414a4.002 4.002 0 004.75.682zm.322-5.753a8.03 8.03 0 014-4l1.182-1.182a1 1 0 00-1.414-1.414L8.11 14.475a1 1 0 001.414 1.414l1.182-1.181zM24 18a6 6 0 11-12 0 6 6 0 0112 0zm-2.31-2.723a1 1 0 01.033 1.413l-3.818 4a1.002 1.002 0 01-1.447 0l-2.181-2.285a1 1 0 111.446-1.381l1.459 1.528 3.095-3.242a1 1 0 011.413-.033z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/24/favs_add"] = function anonymous(it) {
  var out='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 4h8a2 2 0 012 2v13.582l-3.995-3.508a3 3 0 00-3.95-.006L6 19.603V6a2 2 0 012-2zM4 6a4 4 0 014-4h8a4 4 0 014 4v14.311c0 1.436-1.693 2.203-2.772 1.255l-4.543-3.989a1 1 0 00-1.317-.002l-4.6 4.012C5.688 22.529 4 21.762 4 20.328V6z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/24/favs_remove"] = function anonymous(it) {
  var out='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 4H8a2 2 0 00-2 2v13.603l4.054-3.535c.074-.065.15-.125.228-.18a8.007 8.007 0 00-.248 2.851l-3.266 2.848C5.688 22.529 4 21.762 4 20.328V6a4 4 0 014-4h8a4 4 0 014 4v4.252A8.012 8.012 0 0018 10V6a2 2 0 00-2-2zm8 14a6 6 0 11-12 0 6 6 0 0112 0zm-2.31-2.723a1 1 0 01.033 1.413l-3.818 4a1 1 0 01-1.447 0l-2.181-2.285a1 1 0 111.446-1.381l1.459 1.528 3.095-3.242a1 1 0 011.413-.033z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/24/fullscreen"] = function anonymous(it) {
  var out='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4a1 1 0 001 1h3.586l-4.293 4.293a1 1 0 001.414 1.414L19 6.414V10a1 1 0 002 0V4a1 1 0 00-1-1h-6a1 1 0 00-1 1zm-2 16a1 1 0 00-1-1H6.414l4.293-4.293a1 1 0 00-1.414-1.414L5 17.586V14a1 1 0 00-2 0v6a1 1 0 001 1h6a1 1 0 001-1z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/24/fullscreen-off"] = function anonymous(it) {
  var out='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 10a1 1 0 00-1-1h-3.586l4.293-4.293a1 1 0 00-1.414-1.414L15 7.586V4a1 1 0 00-2 0v6a1 1 0 001 1h6a1 1 0 001-1zM3 14a1 1 0 001 1h3.586l-4.293 4.293a1 1 0 001.414 1.414L9 16.414V20a1 1 0 002 0v-6a1 1 0 00-1-1H4a1 1 0 00-1 1z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/24/share"] = function anonymous(it) {
  var out='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 6.414V15a1 1 0 002 0V6.414l2.293 2.293a1 1 0 001.414-1.414l-4-4a.997.997 0 00-1.414 0l-4 4a1 1 0 001.414 1.414L11 6.414zM19 13a1 1 0 011 1V18.001A3 3 0 0117 21H7a3 3 0 01-3-3V14a1 1 0 012 0V18.001A1 1 0 007 19h10a1 1 0 001-1V14a1 1 0 011-1z" fill="#999"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/24/sound-off"] = function anonymous(it) {
  var out='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.586 4C11.846 2.74 14 3.632 14 5.414v13.172c0 1.782-2.154 2.674-3.414 1.414l-4-4H4a2 2 0 01-2-2v-4a2 2 0 012-2h2.586l4-4zM12 5.414l-4 4A2 2 0 016.586 10H4v4h2.586A2 2 0 018 14.586l4 4V5.414zm10.293 10.122a1 1 0 001.414-1.415L21.586 12l2.121-2.121a1 1 0 00-1.414-1.414l-2.121 2.12-2.122-2.12a1 1 0 10-1.414 1.414L18.757 12l-2.12 2.121a1 1 0 101.413 1.415l2.122-2.122 2.12 2.122z" fill="#999"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/24/sound-on"] = function anonymous(it) {
  var out='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 5.414C14 3.632 11.846 2.74 10.586 4l-4 4H4a2 2 0 00-2 2v4a2 2 0 002 2h2.586l4 4c1.26 1.26 3.414.368 3.414-1.414V5.414zm-6 4l4-4v13.172l-4-4A2 2 0 006.586 14H4v-4h2.586A2 2 0 008 9.414zm12.652-5.14a1 1 0 10-1.376 1.452C20.962 7.324 22 9.546 22 12s-1.038 4.676-2.724 6.274a1 1 0 101.376 1.452C22.712 17.772 24 15.034 24 12s-1.288-5.772-3.348-7.726zm-2.97 2.875a1 1 0 10-1.363 1.464A4.613 4.613 0 0117.808 12a4.613 4.613 0 01-1.49 3.387 1 1 0 101.363 1.464A6.612 6.612 0 0019.808 12a6.612 6.612 0 00-2.128-4.852z" fill="#999"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/24/settings"] = function anonymous(it) {
  var out='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2a1 1 0 011 1v1.062c1.46.182 2.8.758 3.906 1.618l.75-.751a1 1 0 011.415 1.414l-.751.751A7.962 7.962 0 0119.938 11H21a1 1 0 010 2h-1.062a7.961 7.961 0 01-1.618 3.906l.751.75a1 1 0 11-1.414 1.415l-.751-.751A7.962 7.962 0 0113 19.938V21a1 1 0 01-2 0v-1.062a7.962 7.962 0 01-3.906-1.618l-.75.751a1 1 0 01-1.415-1.414l.751-.751A7.961 7.961 0 014.062 13H3a1 1 0 010-2h1.062c.182-1.46.758-2.8 1.618-3.906l-.751-.75a1 1 0 111.414-1.415l.751.751A7.962 7.962 0 0111 4.062V3a1 1 0 011-1zM6 12a6 6 0 1012 0 6 6 0 00-12 0z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/24/settings-hd"] = function anonymous(it) {
  var out='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2a1 1 0 011 1v1.062c1.46.182 2.8.758 3.906 1.618l.75-.751a1 1 0 111.415 1.414l-.751.751A7.96 7.96 0 0119.938 11H21a1 1 0 010 2h-3.083A6 6 0 1010 17.659v2.089a7.97 7.97 0 01-2.906-1.428l-.75.751a1 1 0 01-1.415-1.414l.751-.751A7.962 7.962 0 014.062 13H3a1 1 0 010-2h1.062c.182-1.46.758-2.8 1.618-3.906l-.751-.75a1 1 0 011.414-1.415l.751.751A7.962 7.962 0 0111 4.062V3a1 1 0 011-1zm-1 14a2 2 0 012-2h7.2a2 2 0 012 2v4a2 2 0 01-2 2H13a2 2 0 01-2-2v-4zm5.626 4v-4H15.61v1.569h-1.594V16H13v4h1.017v-1.61h1.594V20h1.015zm.61-4v4h1.632c1.206 0 1.916-.746 1.916-2.024 0-1.275-.71-1.976-1.916-1.976h-1.632zm1.017.82h.48c.643 0 1.017.408 1.017 1.16 0 .798-.355 1.2-1.017 1.2h-.48v-2.36z" fill="#fff"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/16/megafon"] = function anonymous(it) {
  var out='<svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.49614 7.61565C0.829482 7.9966 0 7.51523 0 6.74741V1.72318C0 0.955359 0.829482 0.47399 1.49614 0.854937L5.89234 3.36705C6.56415 3.75095 6.56415 4.71964 5.89234 5.10354L1.49614 7.61565Z" fill="#00B956"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/svg/icons/16/megafon_2"] = function anonymous(it) {
  var out='<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.49614 11.0422C0.829484 11.4232 0 10.9418 0 10.174V1.72318C0 0.955355 0.829482 0.47399 1.49614 0.854937L8.89057 5.08033C9.56239 5.46422 9.56239 6.43292 8.89057 6.81682L1.49614 11.0422Z" fill="white"/></svg>';return out;
  };
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["app/site/templates/coub_block/parts/megafon_content"] = function anonymous(it) {
  var out='<ul class="coub__megafon__list"> ';var arr1=it.megafonContents;if(arr1){var megafon_content,i1=-1,l1=arr1.length-1;while(i1<l1){megafon_content=arr1[i1+=1];out+=' '; var content = megafon_content.content, safePreviewUrl = content.preview_url.replace(/"/g, '&quot;'); out+=' <li class="coub__megafon__item" style="background-image:url('+(safePreviewUrl)+')"> <div class="coub__megafon__item__description hbold"> ';if(it.isCoubPageBlock){out+=' <h5> '+(content.title)+' <span>'+(content.year)+'</span> <span>'+(content.parental_rating)+'+</span> </h5> ';}else{out+=' <h5>'+(content.title)+'</h5> <p> '+(content.year)+' <span></span> '+(content.parental_rating)+'+ </p> ';}out+=' ';if(false){out+=' <p> '+(I18n.embed.megafon_shazam.match.replace("%{secs}", megafon_content.match_duration))+' </p> ';}out+=' <div class="coub__megafon__item__description__watch"> <i class="box--vertical">'+(JST["app/site/templates/svg/icons/16/megafon_2"]())+'</i> <span class="box--vertical">'+(I18n.embed.megafon_shazam.watch)+'</span> </div> </div> <div class="coub__megafon__item__hover -hidden -fill"></div> <a class="-fill" href="'+(content.url)+'" target="_blank" rel="noopener"></a> ';if(!GlobalState.PAGE.isEmbed() && (GlobalState.USER.isAdmin() || GlobalState.USER.isEditor())){out+=' <div class="coub__megafon__item__flag" data-id="'+(megafon_content.id)+'" widget-sa-flag-megafon-content data-prompt="Flag film" direction="left" data-prompt-top="-9"> '+(JST["app/site/templates/svg/icons/24/flag"]())+' </div> ';}out+=' ';if(false){out+=' <div class="coub__megafon__item__mark" data-value="'+(megafon_content.is_correct)+'" data-id="'+(megafon_content.id)+'" widget-sa-mark-megafon-content auto-init> <span class="-correct">&#x1f44d;</span> <span class="-incorrect">&#x1f44e;</span> </div> ';}out+=' </li> ';} } out+='</ul>';return out;
  };
}).call(this);
(function() {


}).call(this);
