typeof ns_=="undefined"&&(ns_={}),ns_.extend=function(e,t){for(var n in t)e[n]=t[n];return e},ns_.encode=typeof encodeURIComponent=="function"?encodeURIComponent:function(e){return escape(e).replace(/\//g,"%2F")},ns_.b={},ns_.b.ie=/MSIE/.test(navigator.userAgent),ns_.b.ie9=ns_.b.ie&&typeof document.addEventListener=="function",ns_.b.sf=typeof navigator.vendor=="string"?/apple/i.test(navigator.vendor):!1,ns_.b.ch=!!window.chrome,ns_.b.ff=typeof navigator.userAgent=="string"?/firefox/i.test(navigator.userAgent):!1,ns_.b.op=!!window.opera,typeof ns_.ar=="undefined"&&(ns_.ar={push:function(){for(var e=0,t=arguments.length;e<t;e++)this[this.length]=arguments[e]},splice:function(){var e=ns_.ar.create(),t=arguments;if(t.length<=1)return e;if(t.length>2)for(var n=2,r=t.length;n<r;n++)e[e.length]=t[n];var i=this.slice(0,t[0]),s=this.slice(t[0],t[0]+t[1]),o=this.slice(t[0]+t[1]),u=i.concat(e,o);this.length=0;for(var n=0,r=u.length;n<r;n++)this[this.length]=u[n];return s},shift:function(){for(var e=0,t=this[0],n=this.length-1;e<n;e++)this[e]=this[e+1];return this.length--,t}}),ns_.ar.create=function(){var e=[];for(var t in e)delete e[t];for(var n=0,r=arguments.length;n<r;n++)e[e.length]=arguments[n];return e},ns_.ar.indexOf=function(e,t){var n=-1;return ns_.ar.each(e,function(e,i){e==t&&(n=i)},this),n},ns_.ar.merge=function(){var e=ns_.ar.create();return ns_.ar.each(arguments,function(t){ns_.ar.each(t,function(t,n){e[n]=t})},this),e},ns_.ar.pair=function(e,t){var n=ns_.ar.create();return ns_.ar.each(t,function(t,i){n[n.length]=i+e+t},this),n},ns_.ar.each=function(e,t,n){try{if(typeof t=="function"){n=typeof n!="undefined"?n:this.each.caller;if(typeof e["length"]!="number"||typeof e[0]=="undefined"){var r=typeof e.__proto__!="undefined";for(var i in e)(!r||r&&typeof e.__proto__[i]=="undefined")&&typeof e[i]!="function"&&t.call(n,e[i],i)}else for(var i=0,s=e.length;i<s;i++)t.call(n,e[i],i)}}catch(o){}},typeof ns_.dom=="undefined"&&(ns_.dom={cache:{},getElementsByTagName:function(e,t){var n,e=e,t=typeof t!="string"?t:document.getElementById(t)||document;return t.getElementsByTagName?n=t.getElementsByTagName(e):t.all&&t.all.tags&&(n=t.all.tags(e)),n||[]},addEvent:function(e,t,n){var r=!0,i=null;typeof n=="function"&&t=="unload"&&(i=function(){try{n.call(this)}catch(r){}ns_.dom.cache.del(e,t,n)}),i=i||n;if(document.attachEvent)r=e.attachEvent(t.substring(0,1)==t.substring(0,1).toUpperCase()?t:"on"+t,i);else if(document.addEventListener)e.addEventListener(t,i,!1);else{document.layers&&elem==document&&t.toLowerCase()=="click"&&(t="mouseup",elem.captureEvents(Event.MOUSEUP));var s=elem["on"+t];typeof s!="function"?elem["on"+t]=i:elem["on"+t]=function(e){s&&s(e),i(e)}}return r&&ns_.dom.cache&&ns_.dom.cache.add(e,t,n,!1,i),r},removeEvent:function(e,t,n){ns_.dom.cache.del(e,t,n)}}),ns_.dom.cache={_events:ns_.ar.create(),add:function(e,t,n,r){this._events[this._events.length]=arguments},del:function(e,t,n){ns_.ar.each(this._events,function(r,i){if(!n&&r[0]==e&&r[1]==t)throw this.detach(r[0],r[1],r[2],r[3]),this._events.splice(i,1),"Event found";if(!!n&&r[0]==e&&r[1]==t&&r[2]==n)throw this.detach(r[0],r[1],r[2],r[3]),this._events.splice(i,1),"Event found"},ns_.dom.cache)},detach:function(e,t,n,r){typeof n=="function"&&t=="unload"&&ns_.ar.each(this._events,function(r,i){if(r[0]==e&&r[1]==t&&r[2]==n&&typeof r[4]=="function")throw n=r[4],""},ns_.dom.cache),e.detachEvent?e.detachEvent(t.substring(0,1)==t.substring(0,1).toUpperCase()?t:"on"+t,n):typeof e.removeEventListener!="undefined"&&(ns_.b.ie?e.removeEventListener(t,n):e.removeEventListener(t,n,r))},flush:function(){try{ns_.ar.each(this._events,function(e,t){typeof e!="undefined"&&e[1]!="unload"&&this.detach(e[0],e[1],e[2],e[3])},ns_.dom.cache),this._events=[]}catch(e){}}},ns_.dom.addEvent(window,"unload",function(){ns_.dom.cache.flush()}),ns_=self.ns_||{};try{ns_.mymrs=ns_.mym.rs}catch(e){ns_.mymrs=0}ns_.mvce=ns_.mvce||{};if(!ns_.mvce.T||!ns_.mvce.n)ns_.mvce=function(){function on(e){return typeof e=="string"}function un(e){return typeof e=="function"}function an(e){return typeof e=="number"}function fn(e){return typeof e!="undefined"}function ln(e){return!fn(e)}function cn(e){return typeof e=="object"}function hn(t,n){return t&&t[h][e]()==n}function pn(e){return e&&e==e.top}function dn(e){var t=e.ownerDocument;return Ut&&t.parentWindow||t.defaultView}function vn(e,t){e[F]&&e[F](t,"*")}function mn(e){W[F]&&e&&E(W,D,e)}function gn(e,t){var n;ns_.mvce.crossDomain=ns_.mvce.crossDomain||[],n=ns_.mvce.crossDomain;if(ln(n[e]))try{n[e]=ln(t.NaN)}catch(r){n[e]=!0}return n[e]}function yn(e,t,n){if(Wt&&gn(n,e))return!1;try{return e[t]}catch(r){}return!1}function bn(e,t){var n=X.createElement("SCRIPT");n.type="text/javascript",n.src=e,n.async=!0,t.parentNode.insertBefore(n,t)}function wn(e,t){return e[e.length]=t,e}function En(){return X.hasFocus?X.hasFocus():!0}function Sn(){if(!xn){var e=[];for(var t in e)delete e[t];xn=e.slice(0)}else var e=xn.slice(0);for(var r=0,i=arguments.length;r<i;r++)e[e[n]]=arguments[r];return e}function Tn(e,t){var r=window,i=window,s=0;while(r!=rt&&s<10){var o=r.parent;try{if(o.location.href)for(var u=ns_.dom.getElementsByTagName("iframe",o.document.body),a=u[n],f=0;f<a;++f){var l=u[f];if(l.contentWindow==r&&(l[it]==e||Nn(l,it).replace("px","")==e)&&(l[st]==t||Nn(l,st).replace("px","")==t)){i=o;break}}r=o}catch(c){r=rt}++s}return i}function Nn(e,t){var n="";return e.currentStyle?n=e.currentStyle[t]:window.getComputedStyle&&(n=document.defaultView.getComputedStyle(e,null).getPropertyValue(t)),n}function kn(e){var t=X.createElement("a"),n="length";t.href=e;for(var r=0,i=Cn[n];r<i;r++)if(typeof Cn[r]=="string"){if(t.hostname.substr(t.hostname[n]-Cn[r][n])==Cn[r])return!0}else if(Cn[r][n]>1){if(Cn[r][0].test(e)){for(var s=1,o=Cn[r][n];s<o;s++)if(Cn[r][s].test(e))return!1;return!0}}else if(Cn[r].test(e))return!0;return!1}function Ln(e){return e.outerHTML?e.outerHTML:(new XMLSerializer).serializeToString(e)}function An(e){var t=Ln(e).replace(/[\n\r]/g,"").split("<"),n,r,i="length";for(var s=0,o=t[i];s<o;s++){n=t[s],/name=["']movie/i.test(n)?r=n.match(/value=["']([^"']*)/i):/data=["']([^"']*)/i.test(n)&&(r=n.match(/data=["']([^"']*)/i));if(r&&r[i]==2)return r[1]}}function On(e){function i(i,s){var o=r(e,i),u=[i,"=",s].join("");o>=0?t[o]=u:wn(n,u)}function s(){var e=Sn(),r,i;for(var s=0,o=t.length;s<o;s++)(r=t[s])&&e.push(r);return i=n.join("&"),e.length>0&&(i.length>0&&(i+="&"),i+=e.join("&")),i}var t=Sn(),n=Sn(),r=ns_.ar.indexOf;return{pL:i,j:s}}function Mn(e){var t="OBJECT",r="EMBED",i,s,o,u,a;if(hn(e,r)&&hn(e.parentNode,t))Ut||(a=e),e=a.parentNode;else if(!Ut&&hn(e,t)){i=ns_.dom.getElementsByTagName(r,e);for(s=0,o=i[n];s<o;s++){u=i[s].src;if(!u||!kn(u)){a=i[s];break}}}return a&&(e.ns_n=a,e.ns_src=a.src),e}function cr(e,t,n){var r=0,i=0,s,o,u,a,f,l=e;if(!e)return[0,0];t=t||document,n=n||t.defaultView||t.parentWindow,o=t.body||{},u=t.documentElement,ar=ar||1;if(un(e[Tt])&&!hn(e,"EMBED"))s=e[Tt](),a=n.pageXOffset||u.scrollLeft||o.scrollLeft||0,f=n.pageYOffset||u.scrollTop||o.scrollTop||0,Ut&&!en&&(s.left/=ar,s.top/=ar,a/=ar,f/=ar),i=s.left+a,r=s.top+f;else{do{e!=o?e.nodeName!="TABLE"&&(r+=e.offsetTop||0,i+=e.offsetLeft||0):(r+=Math.abs(e.offsetTop)||0,i+=Math.abs(e.offsetLeft)||0);if(e.offsetParent==o&&e.style["position"]=="absolute")break}while(e=e.offsetParent);!t.querySelectorAll&&an(o.clientTop)&&(r+=o.clientTop,i+=o.clientLeft)}var c;if(l.ns_n){var h=l.ns_off;h||(h=cr(l.ns_n,t,n),h=l.ns_off=[h[0]-i,h[1]-r]),c=[i+h[0],r+h[1]]}else c=[i,r];return c}function hr(e){var t=0;e=e||window;while(!pn(e))t++,e=e.parent;return t}function pr(e){var t=X.createElement("iframe"),n,r,i,s=X.body;if(!t)return e;t.style.position="absolute",t.style.top="-32000px";if(s.appendChild(t)){try{if(n=t.contentDocument){n.open(),n.writeln("<!DOCTYPE html><html><head><title></title></head><body></body></html>"),n.close();if(i=n.createElement("script")){i.type="text/javascript",i.text='function m(a,b,c,d){var e;return a.sheet.insertRule("@media ("+c+":"+d+") {div {text-decoration: underline} }",0),e=getComputedStyle(b,null).textDecoration=="underline",a.sheet.deleteRule(0),e}function bs(a,b,c,d,e,f,g,h){var i=(e+f)/2;return g==0||f-e<h?i:m(a,b,c,i+d)?bs(a,b,c,d,i,f,g-1,h):bs(a,b,c,d,e,i,g-1,h)}var doc=document,s=doc.createElement("style");n=doc.createElement("div"),doc.body.appendChild(s);var zoom=bs(s,n,"min--moz-device-pixel-ratio","",.1,10,15,1e-4);',n.body.appendChild(i);if(r=t.contentWindow)e=r.zoom||e}}}catch(o){}s.removeChild(t)}return e}function dr(e){var t=W.devicePixelRatio||1,n=X.createElement("div"),r=X.body;return n.innerHTML=[1,2,3,4,5].join("<br/>"),n.setAttribute("style","font: 100px/1em sans-serif; -webkit-text-size-adjust:none;visibility:hidden; position:absolute;"),r.appendChild(n),e=500/n.clientHeight,r.removeChild(n),e}function vr(){var e=screen,t=window.top,n=hr(),r,i,s,o,u,a=1,f;if(Qt)return pr(a);if(Wt&&!Jt)return dr(a);if(Ut&&!en){if(V&&V[Tt]){s=V[Tt](),u=s.right-s.left;if(o=V.offsetWidth)return u/o}}else if(e.logicalXDPI&&e.deviceXDPI)return e.deviceXDPI/e.logicalXDPI;return r=yn(t,yt,n),i=yn(t,wt,n),f=yn(t,"devicePixelRatio",n)||1,an(r)&&an(i)&&r&&f?(Kt&&nn?i>r&&(a=8/(i-r)):a=i/(r*f),Jt&&(o=Nr()?e[st]:e[it],a=a/(i/o)*f),a):1}function mr(t,n){var r,i,s,o;n=n||document,r=n.defaultView||n.parentWindow,i=n.body||{};if(!t)return[r.pageXOffset||n.documentElement.scrollLeft||i.scrollLeft||0,r.pageYOffset||n.documentElement.scrollTop||i.scrollTop||0];var u=cr(t,n),a=u[1],f=u[0],l=t;if(zt)a-=W.pageYOffset,f-=W.pageXOffset;else do if(!W.opera||l[h]&&l[h][e]()=="BODY")s=l.scrollTop||0,o=l.scrollLeft||0,Ut&&!en&&(s/=ar,o/=ar),a-=s,f-=o;while(l=l[b]);return[f,a]}function gr(e,t){var r=["Width","Height"],i,s=Sn(),o=zt?vr():1;if(t&&t.nodeName!="BODY")return t.ns_n?t.ns_dm||(t.ns_dm=gr(e,t.ns_n)):[t.clientWidth||Number(Nn(t,it).replace("px",""))||Number(t.width)||Number(t.offsetWidth),t.clientHeight||Number(Nn(t,st).replace("px",""))||Number(t.height)||Number(t.offsetHeight)];i=e.document.documentElement;for(var u=r[n],a=r[--u];a;a=r[--u])i&&i["client"+a]?s[u]=lt(i["client"+a]*o):an(e["inner"+a])?s[u]=lt(e["inner"+a]*o):s[u]=lt(document.body["client"+a]*o);return s}function yr(e,t,n,r){return n=n||0,r=r||0,{left:e,top:t,width:n,height:r,area:n*r}}function br(e,t){var n,r,i,s,o={};return t.area?(n=e[nt]+e[it],r=e[rt]+e[st],i=t[nt]+t[it],s=t[rt]+t[st],(t[nt]>=e[nt]&&t[nt]<=n||e[nt]>=t[nt]&&e[nt]<=i)&&(t[rt]>=e[rt]&&t[rt]<=r||e[rt]>=t[rt]&&e[rt]<=s)?(o[nt]=ft(t[nt],e[nt]),o[rt]=ft(t[rt],e[rt]),o[it]=at(i,n)-o[nt],o[st]=at(s,r)-o[rt],o):null):e}function wr(e,t,n,r){var i=ct({},t),s=1;i[Nt]=!1;while(e[nt]+e[it]*s<=i[nt])i[nt]-=n,i[Nt]=!0;while(e[nt]+e[it]*(1-s)>=i[nt]+i[it])i[nt]+=n,i[Nt]=!0;while(e[rt]+e[st]*s<=i[rt])i[rt]-=r,i[Nt]=!0;while(e[rt]+e[st]*(1-s)>=i[rt]+i[st])i[rt]+=r,i[Nt]=!0;return i[Nt]&&(i[it]=n,i[st]=r),i}function Er(e,t){var n=0,r=e.win,i=e.n,s,o=0,u=r,a,l,c,h=0,p,d,v;ar=vr(),p=Cr(r),d=p.box;if(t){t[q+"vsd"]=lt(d[it])+f+lt(d[st]),t[q+"sd"]=lt(p.fw)+f+lt(p.fh);if(d[nt]||d[rt])t[q+"vsp"]=lt(d[nt])+f+lt(d[rt])}ir=["&"];if(zt&&ln(ns_.mvce.operaFirstLoad))return ns_.mvce.operaFirstLoad=!1,0;s=kr(e,n,p);if(!(s.flags&Lt))return s.visible?1:0;v=s[ut];if(s.visible&&v.area){l=s[ut];while(!pn(u)&&l)u=u.parent,a=kr(e,++n,p,u),a.flags&Lt&&(v=a[ut],l=br(l,v),pn(u)&&(d=wr(v,d,p.fw,p.fh)));pn(r)&&(d=wr(v,d,p.fw,p.fh)),l&&(!d[Nt]||v[it]<=d[it]&&v[st]<=d[st])&&(l=br(l,d)),l&&s.box.area&&(o=at(l[it],s.box[it])*at(l[st],s.box[st]))}return t&&u==u[rt]&&(t[q+"vvd"]=lt(v[it])+f+lt(v[st]),t[q+"vvp"]=lt(v[nt])+f+lt(v[rt])),l&&o&&i&&(c=Lr(i,r,s,0),v=c.box,l=br(l,v),l&&v.area&&(h=at(l[it],v[it])*at(l[st],v[st])),t&&(t[q+"vad"]=lt(v[it])+f+lt(v[st]),t[q+"vap"]=lt(v[nt])+f+lt(v[rt]))),i?c&&c.box.area?h/c.box.area:0:s&&s.box.area?o/s.box.area:0}function Sr(e,t){var n;if(pn(e)&&!zt&&!Ut)n=yn(e,St,t)||window[St]||yn(e,Y,t)||window[Y];else if(pn(e)||zt)n=yn(e,St,t),tn?n=n||window[Y]:n=n||yn(e,Y,t);return an(n)&&!zt&&!Wt&&(!Ut||en)&&(n*=ar),n}function xr(e,t){var n;if(pn(e)&&!zt&&!Ut)n=yn(e,xt,t)||window[xt]||yn(e,Z,t)||window[Z];else if(pn(e)||zt)n=yn(e,xt,t),tn?n=n||window[Z]:n=n||yn(e,Z,t);return an(n)&&!zt&&!Wt&&(!Ut||en)&&(n*=ar),n}function Tr(e,t){function n(n,r){return yn(e,n,t)||r}if(!e)return!0;var r=n("PAGE_HIDDEN","hidden"),i=n("PAGE_VISIBLE","visible"),s=n("PAGE_PREVIEW","preview"),o=n("PAGE_PRERENDER","prerender"),u=n("visibilityState")||n(vt+dt)||n(ht+dt)||n("o"+dt)||n("ms"+dt),a=n("hidden")||n(vt+pt)||n(ht+pt)||n("o"+pt)||n("ms"+pt);return a!==void 0?!a:u!==void 0?u==i||u==1:!0}function Nr(){var e=yn(W,"screen",0)||screen;return Jt?pn(W)?yn(W,Ct,0)==90||yn(W,Ct,0)==-90:yn(W,wt,0)>yn(W,Et,0):e[it]>e[st]}function Cr(e){function h(t,n){return yn(e,t,0)||n}function p(t,n){return yn(e.screen,t,0)||n}var t=h("fullScreen",!1),n,r,i,s,o,u,a,f,l,c;n=p(nt,0),r=p(rt,0),o=i=p(it,0),u=s=p(st,0),t||(n=p(gt+"Left",n),r=p(gt+"Top",r),i=p(gt+"Width",i),s=p(gt+"Height",s)),Jt&&(Nr()&&(i+=s,s=i-s,i-=s,o+=u,u=o-u,o-=u),s<u&&r===0&&(r=u-s));if(en||Kt)n*=ar,r*=ar,i*=ar,s*=ar,o*=ar,u*=ar;return wn(ir,Br({fs:t!==void 0?t:"na",l:n,t:r,w:i,h:s},"s_")),{fullScreen:t,fw:o,fh:u,box:yr(n,r,i,s)}}function kr(e,t,n,r){function G(e,n){var r=yn(i,e,t);return r!==!1?r:n||!1}var i=r?r:e.win,s=e.n,o=G("document"),u=yn(o,"compatMode",t)||"CSS1Compat",a=u=="CSS1Compat"?yn(o,"documentElement",t):yn(o,"body",t),f=n.box,l=f.left,c=f.top,h=0,p=0,d=0,v=0,m=0,g=0,y=0,b=0,w=0,S=0,T=0,N=0,k=0,L=0,A=0,O=l,M=c,_,D,P=l,H=c,B,j,F,I,q,R,U,z,W,X,V,$,J,K,Q;(J=G("locationbar"))&&J[ot]&&(A|=Pt),(J=G("menubar"))&&J[ot]&&(A|=Ht),(J=G("personalbar"))&&J[ot]&&(A|=Bt),(J=G("scrollbars"))&&J[ot]&&(A|=jt),(J=G("statusbar"))&&J[ot]&&(A|=Ft),(J=G("toolbar"))&&J[ot]&&(A|=It);if(pn(i)||zt)l=Sr(i,t),c=xr(i,t),an(l)&&an(c)&&(A|=Lt);ns_.mvce.mouseMoveInfo=ns_.mvce.mouseMoveInfo||Sn(),K=ns_.mvce.mouseMoveInfo[t],an(G(ht+"InnerScreenX"))&&(l=G(ht+"InnerScreenX",0),c=G(ht+"InnerScreenY",0),an(c)&&(l*=ar,c*=ar,A|=Lt));if(!pn(i)&&!(A&Lt)){l=c=0,U=i,z=G("parent"),W=t+1;while(z){if((X=yn(U,"frameElement",W-1))&&(V=yn(z,"document",W))&&yn(V,x,W))R=mr(X,V),l+=R[0]*ar,c+=R[1]*ar,A|=Lt;else if(A&Lt){A^=Lt;break}if(pn(z)){parentWindowScreenLeft=Sr(z,W),parentWindowScreenTop=xr(z,W),l+=parentWindowScreenLeft,c+=parentWindowScreenTop;if($=ns_.mvce.mouseMoveInfo[W])$.updateBrowserMargins(parentWindowScreenLeft,parentWindowScreenTop),l+=$[mt+"Left"],c+=$[mt+"Top"];z=null}else U=z,z=yn(z,"parent",W++)}}K||(ns_.mvce.mouseMoveInfo[t]=K={detected:!1,clientX:0,clientY:0,screenX:0,screenY:0,browserMarginTop:0,browserMarginLeft:0,initBrowserMargins:function(){var e=gn(t,i),n=!e,r=0;if(!pn(i)||zt)return;Rt?Wt&&n?r=Jt?75:74:Gt&&e&&(r=85):e?tn?r=54:Qt?r=63:Kt&&(r=107):Wt&&(Xt?r=85:Vt&&(Jt?r=93:r=$t?192:79)),K[mt+"Top"]=r,ns_.mvce[mt+"Top"]=r},updateBrowserMargins:function(e,t){var n=K,r=n[Y]-n[et],s=n[Z]-n[tt];if(!n.detected||Ut)return;!zt&&pn(i)&&A&Lt&&(r!=e||s!=t)&&(n[mt+"Left"]=r-e,n[mt+"Top"]=s-t)},handler:function(e){var t=K;e=e||i.event,t[et]=e[et],t[tt]=e[tt];if(!Ut||en)t[et]*=ar,t[tt]*=ar;t[Y]=e[Y],t[Z]=e[Z];if(zt||en)t[Y]*=ar,t[Z]*=ar;t.detected=!0}},K.initBrowserMargins(),a&&E(a,C,K.handler)),a&&yn(a,"fireEvent",t)&&(ns_.mvce.fireEvent=!0,a.fireEvent("on"+C),ns_.mvce.fireEvent=!1),K.detected&&(K.updateBrowserMargins(l,c),K.detected=!1,Ut&&(l=K[Y]-K[et],c=K[Z]-K[tt],A|=Lt)),!n.fullScreen&&pn(i)&&A&Lt&&(l+=K[mt+"Left"],c+=K[mt+"Top"]);if(pn(i)){h=G(wt,window[wt]),p=G(Et,window[Et]);if(h||p)!zt&&!Wt&&(h*=ar,p*=ar),nn&&l<0&&lt(h+2*l)==lt(f.width)&&(l=0,h=f.width),A|=At}d=yn(a,"clientLeft",t)||0,v=yn(a,"clientTop",t)||0,m=yn(a,"clientWidth",t)||0,g=yn(a,"clientHeight",t)||0;if(m||g){if(!Ut||en||!t&&!pn(window))d*=ar,v*=ar,m*=ar,g*=ar;A|=Ot}y=G("innerWidth",0),b=G("innerHeight",0);if(y||b){if(!zt||pn(i))y*=ar,b*=ar;A|=Mt}if(a&&un(yn(a,Tt,t))){var nt=a[Tt]();if(nt){w=nt.left,S=nt.top;if(!Ut){var rt=gr(i,s);nt.bottom==0||nt.bottom<rt[1]?(T=nt.right-nt.left,N=rt[1]-nt.top):nt.right==0||nt.right<rt[0]?(T=rt[0]-nt.left,N=nt.bottom-nt.top):(T=nt.right-nt.left,N=nt.bottom-nt.top)}else T=yn(a,"scrollWidth",t),N=yn(a,"scrollHeight",t);Ut&&!en&&(w/=ar,S/=ar,T/=ar,N/=ar),A|=_t}}else if(a){w=yn(a,"offsetLeft",t),S=yn(a,"offsetTop",t),T=yn(a,"scrollWidth",t)||yn(a,"offsetWidth",t),N=yn(a,"scrollHeight",t)||yn(a,"offsetHeight",t);if(T||N)A|=_t}return A&_t&&(w*=ar,S*=ar,T*=ar,N*=ar),an(G("pageXOffset"))||an(G("scrollX"))?(k=G("pageXOffset")||G("scrollX",0),L=G("pageYOffset")||G("scrollY",0)):a&&(k=yn(a,"scrollLeft",t)||0,L=yn(a,"scrollTop",t)||0),(k||L)&&(!Ut||en)&&(k*=ar,L*=ar,A|=Dt),Ut&&(w-=k,S-=L),A&Lt&&(O=l,M=c,P=l,H=c,A&Dt&&(P-=k,H-=L)),A&At&&(_&&D?(_=at(h-K[mt+"Left"],_),D=at(p-K[mt+"Top"],D)):(_=h-K[mt+"Left"],D=p-K[mt+"Top"])),A&Mt&&(_=y,D=b),A&Ot&&(O+=d,M+=v,_=m,D=g),A&_t&&(A&Ot||(O+=w,M+=S),B=T,j=N),Q=!t&&an(e.lmPC)?e.mPCC:Tr(yn(i,"document",t),t),wn(ir,Br({v:Q,cmp:u,sX:l,sY:c,oW:h,oH:p,cL:d,cT:v,cW:m,cH:g,iW:y,iH:b,bL:w,bT:S,bW:T,bH:N,scrX:k,scrY:L},"w"+t+"_")),{visible:Q,flags:A,box:yr(P,H,B,j),visibleBox:yr(O,M,_,D)}}function Lr(e,t,n,r){var i=e,s=gr(t,e),o=s[0],u=s[1],a=mr(i,yn(t,"document",r));return hn(i,"BODY")&&i.ownerDocument&&(o=n.visibleBox.width/ar,u=n.visibleBox.height/ar),o*=ar,u*=ar,{box:yr(n.visibleBox.left+a[0]*ar,n.visibleBox.top+a[1]*ar,o,u)}}function Ar(e,t,n){var r=this;if(!e)return;ct(r,{a:e,p:n||e.px.substring(0,e.px.indexOf(".com/")+5)+"p?c1=3&",labels:{}}),ct(r.labels,e.l),ct(r.labels,Hr(t))}function Or(e,t,n){var r=e.D,i=e.n;return t["ns_"+p]="hidden",t[q+"pid"]=Xn,t[R+"mid"]=Vn,t[q+"vw"]=gr(e.win,r.documentElement).join(f),t[q+"sc"]=mr(null,r).join(f),t[q+"sv"]=Qn,t[q+"tn"]=i.ns_n?"EMBED":i.nodeName,new Ar(e,t,n)}function Mr(e,t,n){var r=e.n,i=e.win,o,u;t[q+"id"]=e.i,t[q+"sz"]=gr(i,r).join(f),t[q+"po"]=cr(r,e.D,i).join(f),t[q+"vi"]=lt(Er(e,t)*100),e.h&&!t[U]?(t[U]="qp"+Pn[e.b-1],t[U]=="qp1"&&i[kt]===0&&(t[q+"xx"]="1")):typeof t[U]==s&&(t[U]="show");if(r.ns_src||r.src&&on(r.src)||r[w]&&on(r[w])||r.nodeName=="OBJECT"&&(r.src=An(r)))t[q+"src"]=Q(r.ns_src||r.src||r[w]).substring(0,150);return new Or(e,t,n)}function _r(e,t,n){return t[U]="engaged",new Mr(e,t,n)}function Dr(e,t,n){return t[U]=n?B:P,new Mr(e,t)}function Pr(e,t,n){if(t.ns_ad_vi<50)return;var r=t.vastEventType,i={start:!0,firstQuartile:!0,midpoint:!0,thirdQuartile:!0,complete:!0};if(i[r])return delete t.vastEventType,t[U]="v_"+r,new Mr(e,t,n)}function Hr(e){var t={},r="__p;__n;c1;ax_i;ax_g";if(!e)return t;if(!on(e)&&e[n]){if(!on(e[0])&&e[0][n]==2)for(var i=0,s=e[n],o=e[i];i<s;o=e[++i])t[o[0]]=o[1];else if(on(e[0]))for(var i=0,s=e[n],o=e[i];i<s;o=e[++i])if(o.indexOf("=")!=-1){var u=o.split("=");t[u[0]]=u[1]}}else if(on(e)){var a=e.replace("&amp;","&").split("&");for(var i=0,s=a[n],o=a[i];i<s;o=a[++i])if(o.indexOf("=")!=-1){var u=o.split("=");t[u[0]]=u[1]}}else if(cn(e))for(var i in e)(an(e[i])||on(e[i]))&&r.indexOf(i)==-1&&(t[i]=e[i]);return t}function Br(e,t,n){var r=Sn();t=t||"",n=n||"";for(var i in e)fn(e[i])&&wn(r,t+i+n+"="+e[i]);return r.join("&")}function jr(e,t,r,i){function u(){s.k=!0}function a(){if(ns_.mvce.fireEvent)return;s.o=!0,s.m||(s.m=K(l,zn),s.p=+(new Date))}function f(){s.o=!1,s.m&&J(s.m),s.e&&(s.z+=+(new Date)-s.p),s.m=s.p=0}function l(){if(!s.o)return;s.d++,!s.e&&K(function(){if(!s.o)return;s.e=!0;if(s.xg&&s.xg!="engageurl"){var e=(new _r(s,{},unescape(s.xg))).process(!0);m(e)}},Dn-zn)}function h(e){e.ns__m=e.ns__p,delete e.ns__p,o[o[n]]=e;if(s.zi){var t=s.zi.substr(s.zi.indexOf("?")).split("&"),r={};ns_.ar.each(t,function(e){var t=e.split("=");/^(c\d|ax_|ns_)/.test(t[0])&&(r[t[0]]=t[1])});if(e.ax_i&&e.ax_i!="inviewurl"){var i=ct({},r);ct(i,Hr(e)),r.c1&&(i.c1=e.c1),r.c3&&r.c3.indexOf("_e")==0&&(i.c3=r.c3.substr(0,r.c3.indexOf("_",1)+1)+i.c3),adViz(d(unescape(e.ax_i),i))}}s.zf&&p(s.zf,e)}function p(e,t){var n=e.substr(0,e.indexOf("?")),r=e.substr(e.indexOf("?")+1).split("&"),i={};ns_.ar.each(r,function(e){var t=e.split("=");/^(c\d|ax_|ns_)/.test(t[0])&&(i[t[0]]=t[1])});var s=ct({},i);ct(s,Hr(t)),i.c1&&(s.c1=t.c1),i.c3&&i.c3.indexOf("_e")==0&&(s.c3=i.c3.substr(0,i.c3.indexOf("_",1)+1)+s.c3),adViz(d(n,s))}function d(e,t){var r=On(z),i=r.pL;for(var s in t)switch(s){case"ns__t":i(s,+(new Date));break;case"ns__p":i(I+"_m",t[s]);break;case"ns__m":i(I+"_p",t[s]);break;case"":break;default:i(s,t[s])}return e+(e.charAt(e[n]-1)=="?"?"":"?")+r.j()}function v(e){var t=e.substr(e.indexOf("?")+1).split("&"),n={};ns_.ar.each(t,function(e){var t=e.split("=");/^(c\d|ax_|ns_)/.test(t[0])&&(n[t[0]]=t[1])}),ns_.ar.each(o,function(e){if(e.ax_i&&e.ax_i!="inviewurl"){var t=ct({},n);ct(t,Hr(e)),n.c1&&(t.c1=e.c1),n.c3&&n.c3.indexOf("_e")==0&&(t.c3=n.c3.substr(0,n.c3.indexOf("_",1)+1)+t.c3),adViz(d(unescape(e.ax_i),t))}})}function m(e){var t=e.substr(e.indexOf("?")+1).split("&"),n={};ns_.ar.each(t,function(e){var t=e.split("=");/^(c\d|ax_|ns_)/.test(t[0])&&(n[t[0]]=t[1])}),ns_.ar.each(o,function(e){if(e.ax_g&&e.ax_g!="engageurl"){var t=ct({},n);ct(t,Hr(e)),n.c1&&(t.c1=e.c1),n.c3&&n.c3.indexOf("_e")==0&&(t.c3=n.c3.substr(0,n.c3.indexOf("_",1)+1)+t.c3),adViz(d(unescape(e.ax_g),t))}})}function g(e,t){var n=e.substr(0,e.indexOf("?")),r=e.substr(e.indexOf("?")+1).split("&"),i={};ns_.ar.each(r,function(e){var t=e.split("=");/^(c\d|ax_|ns_)/.test(t[0])&&(i[t[0]]=t[1])}),ns_.ar.each(o,function(e){var t=ct({},i);ct(t,Hr(e)),i.c1&&(t.c1=e.c1),i.c3&&i.c3.indexOf("_e")==0&&(t.c3=i.c3.substr(0,i.c3.indexOf("_",1)+1)+t.c3),adViz(d(n,t))})}var s=this,o=Sn();e.ph||(E(e,N,a),E(e,C,a),E(e,L,u),E(e,k,f)),an(W[kt])&&(s.lmPC=0,s.mPCC=!0),ct(s,{c:0,ds:{},n:e,sn:t.__n,px:t.__p.src,l:Hr(t),f:!!r,i:e.id||e.name||e.nodeName,h:0,b:0,t:0,v:0,s:0,g:0,d:0,x:0,z:0,p:0,m:0,o:!1,e:!1,k:!1,w:!1,xi:t.ax_i||"",xg:t.ax_g||"",V:g,I:v,R:h,RH:p,zi:"",zr:"",zf:"",G:m,X:0,D:e.ownerDocument||X,win:dn(e),erase:function(){s.X=1,c.ph||(S(e,N,a),S(e,k,f),S(e,C,a),S(e,L,u)),s.b=Hn[n],delete s.win,delete s.n}})}function Fr(e){return e&&(e[p]==A||e[p]==D&&e.data&&Bn.test(e.data))}function Ir(e){return e&&(e[p]==O||e[p]==D&&e.data&&jn.test(e.data))}function qr(e,t){e.h==0&&(e.h=+(new Date),e.b=0,e.t=0),e.v!=t&&(e.b=0,e.t=0,e.v=t),e.t++;if(e.b<Hn&&e.t==Pn[e.b])return++e.b}function Rr(e){return e.xi&&e.xi!="inviewurl"?unescape(e.xi):!1}function Ur(e){ns_.ar.each(e,function(e){e.erase(),In.splice(ns_.ar.indexOf(In,e),1)})}function zr(e){var t=Sn();try{ns_.ar.each(In,function(n){var r={},i=r,s,o=Mr;if(an(n.lmPC)){var u=n.win[kt];n.mPCC=u>n.lmPC,n.lmPC=u}s=Er(n)>qn;if(n.D&&!n.D.getElementById(n.n.id))return oi(n);rn&&(s=s&&En());if(Fr(e)||Ir(e)||!n.f&&s&&(n.t||!n.w)){e&&e.data&&Bn.test(e.data)&&(i[q+"href"]=e.data.replace(Bn,"$1"));if(n.b<Hn){i[U]=er?"show":"hide",r=(new o(n,i)).labels;if(!n.w&&!n.t&&Rr(n)&&!n.X){var a=(new o(n,i,Rr(n))).process(!0);n.I(a)}}}if(s){if(!e||e[p]!=M&&e[p]!=_||!n.f)if((r[U]||qr(n,s))&&!n.X){var a=(new o(n,r)).process();n.V(a)}}else if(n.f&&n.b<Hn&&!n.X){i[U]="hide";var a=(new o(n,i)).process();n.V(a)}n.f=s,n.b>=Hn&&wn(t,n)}),Ur(t),In[n]&&Wr()}catch(r){}}function Wr(){nr=K(zr,Rn)}function Xr(){nr&&J(nr)}function Vr(e){if(!er)return;var t=+(new Date);!e||e[p]!=M&&e[p]!=_?t-Yn>Wn&&(Xr(),zr({type:"scroll"}),Yn=t,Zn=null):(Zn&&J(Zn),Zn=K(Vr,Wn))}function $r(e){Kr(ct({},e)),er=!0,e[p]==A&&K(function(){er=!0},100);if(e[p]==D&&e[w]!=W[t])vn(W[t],[A,"&",location.href].join(""));else for(var r=0,i=W.frames[n];r<i;r++)vn(W.frames[r],[A,"&",location.href].join(""))}function Jr(e){Kr(ct({},e)),er=!1;if(e[p]==D&&e[w]!=W[t])vn(W[t],[O,"&",location.href].join(""));else for(var r=0,i=W.frames[n];r<i;r++)vn(W.frames[r],[O,"&",location.href].join(""))}function Kr(e){rr!=null&&J(rr),rr=K(function(){if(lr)return;!er&&nr?(Xr(),zr(e),Xr(),nr=!1):er&&!nr&&zr(e),rr=null},Un)}function Qr(e){if(ns_.mvce.fireEvent)return;tr=!0,S(W,C,Qr),S(W,k,Qr),S(W,N,Qr)}function Gr(e){Xr();for(var t=0,r=In[n],i=In[t];t<r;i=In[++t])if(i.h>0&&i.b<Hn&&!i.X){var s=new Dr(i,{},!0);sr[n]==In[n]&&(s.labels[q+"sz"]=sr[t][0],s.labels[q+"vw"]=sr[t][1],s.labels[q+"vi"]=sr[t][2]);var o=s.process();i.V(o)}}function Yr(e){Xr(),lr=!0;for(var t=0,r=In[n],i=In[t];t<r;i=In[++t])sr[sr[n]]=[gr(i.win,i.n).join(f),gr(i.win).join(f),lt(Er(i)*100)]}function Zr(){fr!=En()&&((fr=!fr)?$r({type:A}):Jr({type:O})),In[n]&&K(Zr,Un)}function ei(){sn||(E(W,A,$r),E(W,O,Jr)),E(W,M,Vr),E(W,_,Vr),E(W,B,Gr),ns_.b.ff&&E(W,j,Yr),E(W,C,Qr),E(W,N,Qr),E(W,k,Qr)}function ti(){ei(),mn(function(e){if(e[w]==W)return!1;Bn.test(e.data)?$r(e):jn.test(e.data)&&Jr(e)}),ns_.ar.each(X.cookie.replace(" ","").split(";"),function(e){if(e.indexOf("viz=")==0)throw _n=!_n,0})}function ni(e,t){var s={},o,u,a=!1;e=on(e)?X.getElementById(e):e;var l=gr(dn(e),e),c=Tn(l[0],l[1]);c[i][r]&&c[i][r]!=X[r]&&(t[q+"rf"]=c[i][r]);var h=t.__n.__uid,p=!1,v=!1,y=!1;for(var b=0,w=In[n];b<w;b++)In[b].n===e&&(p=!0,In[b].ds[h]=t,In[b].R(t));ns_.mymrs&&ns_.mymrs[h]&&(ns_.mymrs[h][0]?y=!0:v=!0);if(p)return f;t[or]&&!Vn&&(Vn=Math.ceil(Math.random()*1e8)+""+Xn%1e8);if(t.__n._csm){a=!0;try{delete t.__n._csm}catch(E){t.__n._csm=G}}if(e[d]===m||e[d]===g){u=new jr(e,t,!1,In[n]),wn(In,u),In[n]==1&&(sn&&Zr(),Wr()),o=new Dr(u,s),a&&(o.labels[U]="late");if(Er(u)>qn&&!v){u.w=!0;if(!u.t&&Rr(u)){var S=o.labels[U];o.labels[U]="show";var x=(new Mr(u,o.labels,Rr(u))).process(!0);u.zi=x,o.labels[U]=S}}if(Fn.test(t.__p.src)){var T=t.__p.src.match(Fn);for(var b=0,w=T.length;b<w;b++){var N=T[b].split("=");o.labels[N[0].substr(1)]=N[1]}}ur=t.ns__p;var C=o.processUrl().split("?"),k=[C[0]+"?uid=",e.id,"&",C[1]].join("");return v||(adViz(k),u.zf=k),u.zr=[k,t.__n],v?si(u.i,ns_.mymrs[h][1],ns_.mymrs[h][2],ns_.mymrs[h][3]):y&&ii(u.i,null,ns_.mymrs[h][1]),u}}function ri(e){e[or]&&(Vn=Math.ceil(Math.random()*1e8)+""+Xn%1e8),e.__n._csm=1}function ii(e,t,n){var r=0;ns_.ar.each(In,function(t){if(!e||t.n.id==e||t.sn.__uid==e)r=1,t.l[R+"bl"]="0",t.l[R+"blt"]=(n||+(new Date))-ur}),!r&&e.indexOf("uid")==0&&(ns_.mymrs[e]=Sn(1,+(new Date)))}function si(e,t,r,i){var s=Sn();ns_.ar.each(In,function(n){if(!e||n.n.id==e||n.sn.__uid==e||n.ds&&n.ds[e]){Xr(),n.m&&J(n.m),Zn&&J(Zn),rr&&J(rr);var o=new Mr(n,ct(Hr(t),{ax_blt:(i||+(new Date))-ur}),n.px.substring(0,n.px.indexOf(".com/")+5)+"p?c1=3&");o.labels.c3="_"+Gn.block+"_"+o.labels.c3;var u=o.processUrl(!0,!0);n.ds[e]?n.RH(u,n.ds[e]):adViz(u);if(typeof r=="function"){var a=gr(n.win,n.n);r(n.i,a[0]+"px",a[1]+"px")}n.erase(),wn(s,n)}}),!s[n]&&e.indexOf("uid")==0&&(ns_.mymrs[e]=Sn(0,t,r,+(new Date))),Ur(s)}function oi(e){Xr(),e.m&&J(e.m),Zn&&J(Zn),rr&&J(rr);var t=(new Dr(e,{},!0)).process();e.V(t),e.erase(),Ur([e])}var e="toUpperCase",t="parent",n="length",r="referrer",i="document",s="undefined",o="string",u="number",a="all",f="x",l="cS",c="node",h=c+"Name",p="type",d=c+"Type",v=3,m=1,g=9,y="nextSibling",b="parentNode",w="source",E=ns_.dom.addEvent,S=ns_.dom.removeEvent,x="getElementsByTagName",T="mouse",N=T+"over",C=T+"move",k=T+"out",L="click",A="focus",O="blur",M="scroll",_="resize",D="message",P="found",H="load",B="un"+H,j="before"+B,F="postMessage",I="ns_",q=I+"ad_",R="ax_",U=q+"event",z=[q+"src","c8","c7","c9"],W=window,X=document,V=X.body,$=X.documentMode,J=clearTimeout,K=setTimeout,Q=W.encodeURIComponent||escape,G=void 0,Y="screenX",Z="screenY",et="clientX",tt="clientY",nt="left",rt="top",it="width",st="height",ot="visible",ut=ot+"Box",at=Math.min,ft=Math.max,lt=Math.round,ct=ns_.extend,ht="moz",pt="Hidden",dt="VisibilityState",vt="webkit",mt="browserMargin",gt="avail",yt="innerWidth",bt="innerHeight",wt="outerWidth",Et="outerHeight",St="screenLeft",xt="screenTop",Tt="getBoundingClientRect",Nt="translated",Ct="orientation",kt="mozPaintCount",Lt=1,At=2,Ot=4,Mt=8,_t=16,Dt=32,Pt=64,Ht=128,Bt=256,jt=512,Ft=1024,It=2048,qt=navigator.userAgent.toLowerCase(),Rt=/mac\sos\sx[;\s]/.test(qt),Ut=!!yn(W,"execScript",0),zt=!Ut&&fn(W.opera),Wt=/ applewebkit\//.test(qt),Xt=Wt&&/chrome\//.test(qt),Vt=Wt&&!Xt&&/safari\//.test(qt),$t=Vt&&/version\/3\./.test(qt),Jt=Wt&&/ip(?:ad|od|hone)/.test(qt),Kt=/ firefox\//.test(qt),Qt=Kt&&an(W[kt]),Gt=Kt&&(/firefox\/3/.test(qt)||Qt),Yt=Kt&&an(W.mozInnerScreenX)&&!Qt,Zt=Kt&&fn(W.localStorage)&&!Yt,en=Ut&&$>=8,tn=Ut&&$>=9,nn=navigator.platform=="Win32",rn=Ut&&X.hasFocus,sn=rn&&pn(W),xn=Sn(),Cn=[".imrworldwide.com",".scorecardresearch.com",".vizu.com","adscale.nuggad.net","btr.sharethis.com","d.agkn.com","data.cmcore.com","dp.specificclick.net","int-t.pictela.net","log.go.com","pixel.adsafeprotected.com","static.adsafeprotected.com","rpt.anchorfree.net","s7.addthis.com","segment-pixel.invitemedia.com","srv.clickfuse.com","t.clickpayz.com","t.mookie1.com",/tag\.admeld\.com\/match/,"trk.tidaltv.com",/(transp?(arent)?|spacer?|empty|blank|dot|pixel|1x1|\/1)\.(gif|jpe?g|png)/,/ads\.motomedia\.nl\/w\/1\.0/,/ads\.rediff\.com.*blank\.gif/,/beacon/,/fw\.adsafeprotected\.com\/rfw\/st/,/pixel\.adsafeprotected\.com/,/sitemeter\.com\/meter\.asp/,/\.doubleclick\.net.*(([^\d]+1x1[^\d]+)|%2Factivity|%2Fimp|%2Fpixel)/,/\.serving-sys\.com.*Res\/Empty_Movie\.swf/,[/^((https?:)?\/\/)?[oa]x-d?/,/\.w55c\.net/],/c\.betrad\.com\/icon/],_n=!1,Dn=500,Pn=[1,5,60],Hn=Pn[n],Bn=/^focus&(.*)/,jn=/^blur&(.*)/,Fn=/&c[7,8,9]=[^&]+/g,In=Sn(),qn=.5,Rn=1e3,Un=300,zn=500,Wn=500,Xn=+(new Date),Vn="",$n=".scorecardresearch.com",Jn="http"+(document.URL.charAt(4)=="s"?"s://sa":"://a"),Kn=Jn+$n+"/e.flow?",Qn="3.1304.18",Gn={qp1:"e1",qp5:"e5",qp60:"e60",block:"e2",show:"es",hide:"eh",unload:"eu"},Yn=0,Zn=0,er=!0,tr=!1,nr=null,rr=null,ir=Sn(),sr=Sn(),or=I+"_p",ur=null,ar=1,fr=!1,lr=!1;return Ar.prototype.processUrl=function(e,t){var n=this,r=On(z),i=r.pL,s=Sn(),o=n.a,u=n.labels,a=n.p,f=lt(ar*100),l;u[U]&&u.c3&&u.c3.charAt(0)!="_"&&(u.c3="_"+(Gn[u[U]]||"e0")+"_"+u.c3),u[q+"ec"]=t?o.c:++o.c;for(var c in u)ln(s[c])&&(i(c,u[c]),s[c]=!0);ns_.mvce[mt+"Top"]&&i(q+"tb",ns_.mvce[mt+"Top"]),f!=100&&i(q+"zm",f);var h=u[U],p=+(new Date)-o.s;return h!="show"&&o.s&&i(R+"vt",p),e||(o.s=+(new Date)),o.e&&(!e&&o.p&&(o.z=+(new Date)-o.p),o.x+=o.z,o.g+=o.d,i(R+"gt",o.z),i(R+"gd",o.d),i(q+"gg",o.x),i(q+"gc",o.g),e?(o.x-=o.z,o.g-=o.d):(o.d=o.z=0,o.p&&(o.p=+(new Date)))),o.k&&i(q+"ck",1),a.lastIndexOf("&")<a.length-1&&(a+="&"),l=(a+r.j()+(ns_.ax_raw||_n?ir.join("&"):"")).replace(/&amp;/gi,"&").replace(/&+/g,"&"),l},Ar.prototype.process=function(e,t){var n=this.processUrl(e,t);return adViz(n),n},ti(),{T:ni,A:ii,K:si,P:vn,L:mn,e:E,s:gr,v:Er,o:cr,n:kn,pO:Mn,eM:An,M:ri}}();(function(){function S(){for(var e=0,t=i.pm[o];e<t;e++)if(!i.pm[e][1])return i.pm[e][1]=!0,i.pm[e];return!1}function x(e,t){var n=e,r=0;t=t||10;while(e!==top&&r<t){try{var i=e.parent;if(i.location.href)for(var s=w("iframe",i.document.body),o=s[L],u=0;u<o;++u){var a=s[u];if(a&&a.contentWindow==e){n=i;break}}e=i}catch(f){e=top}++r}return n}function T(e,t){e.document&&e.document.body&&(e=e.document.body);var n;for(var r=0,i=Math.abs(t);r<i;r++){if(!e||e===n)break;n=e;try{e=t>0?e.firstElementChild:e.parentElement}catch(s){e=n}}return e}function N(e,t){var n;for(var r=0,i=Math.abs(t);r<i;r++){if(!e||e===n)break;n=e;try{e=t>0?e.nextElementSibling:e.previousElementSibling}catch(s){e=n}}return e}var e=null,t=undefined,n=document,r=window,i=ns_.mvce,s=function(){var e=[];for(var t in e)delete e[t];return e},o="length",u="SCRIPT",a="OBJECT",f="previousSibling",l="style",c="_vce_st",h="ax_cid",p=ns_.mvce_m||(ns_.mvce_m=s()),d="ns__t",v=/^(\d+)[^\d]+(\d+)$/,m="=\\W?(\\d+[\\w%]*)\\W?",g=/^0(\w\w|%)?$/,y=new RegExp(" width"+m,"i"),b=new RegExp(" height"+m,"i"),w=ns_.dom.getElementsByTagName,E=0;i.pm=i.pm||s();if(p[c])return!1;p[c]=function(t,c,p){i.pm[i.pm[o]]=[{i:c.x,c:c.i,v:c.v,g:c.g},!1];var d=s(),m,C=S()[0];t[h]=t[h]||C.i,t.ax_i=t.ax_i||C.v,t.ax_g=t.ax_g||C.g;var k=t.__n;t.size&&(t.size=unescape(t.size));var L=t.__p.src,A=/ns__t=([^&]+)/,O=/&c7=([^&]+)/,M=/&c8=([^&]+)/,_=/&c9=([^&]+)/;A.test(L)&&(t.ns__p=L.match(A)[1]),M.test(L)&&(t.c8=L.match(M)[1]),O.test(L)&&(t.c7=L.match(O)[1]),_.test(L)&&(t.c9=L.match(_)[1]);if(p){var D=L.indexOf("?"),P=L.substring(0,D)+"?ns__p="+t.ns__p+"&"+L.substring(L.indexOf("c1="));D=P.indexOf("c3="),P=P.substring(0,D+3)+"_e0_"+P.substring(D+3,P.indexOf("ns_ad_event"))+"ns_ad_event=boot&ns_ad_boot="+(+(new Date)-p),adViz(P)}if(ns_.axbk&&ns_.axbk[o]>0)ns_.ar.each(ns_.axbk,function(e){i.T(e,t)}),ns_.axbk=s();else if(t.size&&v.test(t.size)&&ns_.axph&&ns_.axph[o]>0)ns_.ar.each(ns_.axph,function(e){var r=t.size.match(v),s=n.getElementById(e),o=i.o(s),u={scrollWidth:r[1],scrollHeight:r[2],offsetTop:Math.ceil(o[1])-r[2],offsetLeft:Math.ceil(o[0]),nodeName:"DIV",nodeType:1,id:e,clientWidth:r[1],clientHeight:r[2],ph:s};i.T(u,t)}),ns_.axph=s();else if(t.ax_nb&&Number(t.ax_nb)!=NaN){var H=0,B=Number(t.ax_nb);try{while(k!=e&&H<=B)H<B&&(k=k[f]),k.nodeType==1&&H++}catch(j){k=e}k!=e&&(k.nodeName=="A"&&ns_.ar.each(k.childNodes,function(e){if(e.nodeType==1)throw k=e,0}),i.T(k,t))}else if(t.ax_n&&(m=n.getElementById(t.ax_n)))i.T(m,t);else{var F=i.n,I=0,q=r.parent,R=function(n,s){var c=0,h=ns_.ax_distance||2,p=0,d;E++;if(r!=q&&!I)try{if(q.location.href)for(
var v=w("iframe",q.document.body),m=v[o],S=0;!d&&S<m;++S){var x=v[S];x.contentWindow==r&&(d=x)}}catch(T){}d&&(d[l].display=="none"||g.test(d[l].width)||g.test(d[l].height))?n=I=d:I&&(n=I);try{while(n!=e&&(E>1||c<=h)){if(n&&n.nodeType==1&&n.nodeName!="NO"+u)if(n.nodeName==u)p++;else{c++;var N=ns_.ar.create(),C=!0;/^(object|embed|img|video|iframe)/i.test(n.nodeName)&&(N[N[o]]=[n]),N[N[o]]=w("object",n),N[N[o]]=w("embed",n),N[N[o]]=w("iframe",n),N[N[o]]=w("img",n),N[N[o]]=w("video",n);for(var k=N[o],L=0;L<k;L++){var A=N[L];for(var O=A[o],S=0;S<O;S++){var M=A.item?A.item(S):A[S],_=M.outerHTML?M.outerHTML:(new XMLSerializer).serializeToString(M);if(y.test(_)){var D=Number(_.match(y)[1]);D==NaN||D>5?C=!0:C=!1}if(b.test(_)){var P=Number(_.match(b)[1]);P==NaN||P>5?C=!0:C=!1}if(M.nodeName==a){var H=i.eM(M);H&&F(H)&&(C=!1)}if(M[l].display=="none"||g.test(M[l].width)||g.test(M[l].height))C=!1;if(C&&(!M.src||!F(M.src)))return M=i.pO(M),M.id||(M.id="ns_ad"+t.ns__p),i.T(M,t);c--}}!C&&n=="IMG"&&c--}if(E>1||c<=h)n=s?n.nextSibling:n[f]}}catch(B){}return p},U=c.w,z=c.n,W=c.s,X=c.d;if(U||z||W||X){if(k&&U=="top")k=x(window,0);else if(k&&U&&U.match(/^(parent\.?)+$/)){var V=U.replace(/[^\.]+/g,""),$=V.length+1;k=x(window,$)}else k=window;k&&z&&(k=k.document.getElementById(z)),k&&W&&(k=N(k,W)),k&&X&&(k=T(k,X))}var J=R.call(this,k);isNaN(J)||(i.M(t),setTimeout(function(e,t){var n=0,r=[1,1,2,5],i=function(){isNaN(R.call(e,t))||isNaN(R.call(e,t,!0))||n<r.length&&setTimeout(i,r[n]*1e3),n++};return i}(this,k),1e3))}},p[p[o]]=p[c],ns_.mym.ml(c)})();