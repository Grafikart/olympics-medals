const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/easteregg-ENt2YYoK.js","assets/easteregg-r0U9DWwu.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const Ze="modulepreload",et=function(t){return"/"+t},ye={},tt=function(e,n,o){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),s=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));i=Promise.all(n.map(f=>{if(f=et(f),f in ye)return;ye[f]=!0;const c=f.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${u}`))return;const a=document.createElement("link");if(a.rel=c?"stylesheet":Ze,c||(a.as="script",a.crossOrigin=""),a.href=f,s&&a.setAttribute("nonce",s),document.head.appendChild(a),c)return new Promise((_,m)=>{a.addEventListener("load",_),a.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${f}`)))})}))}return i.then(()=>e()).catch(r=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r})};var K,d,Ne,Ae,C,me,Le,ne,ue,ie,oe,F={},Te=[],nt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ce=Array.isArray;function P(t,e){for(var n in e)t[n]=e[n];return t}function Me(t){var e=t.parentNode;e&&e.removeChild(t)}function Oe(t,e,n){var o,i,r,s={};for(r in e)r=="key"?o=e[r]:r=="ref"?i=e[r]:s[r]=e[r];if(arguments.length>2&&(s.children=arguments.length>3?K.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)s[r]===void 0&&(s[r]=t.defaultProps[r]);return B(t,s,o,i,null)}function B(t,e,n,o,i){var r={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i??++Ne,__i:-1,__u:0};return i==null&&d.vnode!=null&&d.vnode(r),r}function Q(t){return t.children}function M(t,e){this.props=t,this.context=e}function U(t,e){if(e==null)return t.__?U(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?U(t):null}function Fe(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Fe(t)}}function ge(t){(!t.__d&&(t.__d=!0)&&C.push(t)&&!j.__r++||me!==d.debounceRendering)&&((me=d.debounceRendering)||Le)(j)}function j(){var t,e,n,o,i,r,s,f;for(C.sort(ne);t=C.shift();)t.__d&&(e=C.length,o=void 0,r=(i=(n=t).__v).__e,s=[],f=[],n.__P&&((o=P({},i)).__v=i.__v+1,d.vnode&&d.vnode(o),le(n.__P,o,i,n.__n,n.__P.namespaceURI,32&i.__u?[r]:null,s,r??U(i),!!(32&i.__u),f),o.__v=i.__v,o.__.__k[o.__i]=o,Re(s,o,f),o.__e!=r&&Fe(o)),C.length>e&&C.sort(ne));j.__r=0}function De(t,e,n,o,i,r,s,f,c,u,a){var _,m,l,g,S,b=o&&o.__k||Te,v=e.length;for(n.__d=c,it(n,e,b),c=n.__d,_=0;_<v;_++)(l=n.__k[_])!=null&&typeof l!="boolean"&&typeof l!="function"&&(m=l.__i===-1?F:b[l.__i]||F,l.__i=_,le(t,l,m,i,r,s,f,c,u,a),g=l.__e,l.ref&&m.ref!=l.ref&&(m.ref&&ae(m.ref,null,l),a.push(l.ref,l.__c||g,l)),S==null&&g!=null&&(S=g),65536&l.__u||m.__k===l.__k?c=Ie(l,c,t):typeof l.type=="function"&&l.__d!==void 0?c=l.__d:g&&(c=g.nextSibling),l.__d=void 0,l.__u&=-196609);n.__d=c,n.__e=S}function it(t,e,n){var o,i,r,s,f,c=e.length,u=n.length,a=u,_=0;for(t.__k=[],o=0;o<c;o++)s=o+_,(i=t.__k[o]=(i=e[o])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?B(null,i,null,null,null):ce(i)?B(Q,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?B(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null?(i.__=t,i.__b=t.__b+1,f=ot(i,n,s,a),i.__i=f,r=null,f!==-1&&(a--,(r=n[f])&&(r.__u|=131072)),r==null||r.__v===null?(f==-1&&_--,typeof i.type!="function"&&(i.__u|=65536)):f!==s&&(f==s-1?_=f-s:f==s+1?_++:f>s?a>c-s?_+=f-s:_--:f<s&&_++,f!==o+_&&(i.__u|=65536))):(r=n[s])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==t.__d&&(t.__d=U(r)),re(r,r,!1),n[s]=null,a--);if(a)for(o=0;o<u;o++)(r=n[o])!=null&&!(131072&r.__u)&&(r.__e==t.__d&&(t.__d=U(r)),re(r,r))}function Ie(t,e,n){var o,i;if(typeof t.type=="function"){for(o=t.__k,i=0;o&&i<o.length;i++)o[i]&&(o[i].__=t,e=Ie(o[i],e,n));return e}t.__e!=e&&(e&&t.type&&!n.contains(e)&&(e=U(t)),n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function ot(t,e,n,o){var i=t.key,r=t.type,s=n-1,f=n+1,c=e[n];if(c===null||c&&i==c.key&&r===c.type&&!(131072&c.__u))return n;if(o>(c!=null&&!(131072&c.__u)?1:0))for(;s>=0||f<e.length;){if(s>=0){if((c=e[s])&&!(131072&c.__u)&&i==c.key&&r===c.type)return s;s--}if(f<e.length){if((c=e[f])&&!(131072&c.__u)&&i==c.key&&r===c.type)return f;f++}}return-1}function be(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||nt.test(e)?n:n+"px"}function z(t,e,n,o,i){var r;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(e in o)n&&e in n||be(t.style,e,"");if(n)for(e in n)o&&n[e]===o[e]||be(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=n,n?o?n.u=o.u:(n.u=ue,t.addEventListener(e,r?oe:ie,r)):t.removeEventListener(e,r?oe:ie,r);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&n==1?"":n))}}function $e(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=ue++;else if(e.t<n.u)return;return n(d.event?d.event(e):e)}}}function le(t,e,n,o,i,r,s,f,c,u){var a,_,m,l,g,S,b,v,p,L,E,I,T,pe,R,Y,x=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),r=[f=e.__e=n.__e]),(a=d.__b)&&a(e);e:if(typeof x=="function")try{if(v=e.props,p="prototype"in x&&x.prototype.render,L=(a=x.contextType)&&o[a.__c],E=a?L?L.props.value:a.__:o,n.__c?b=(_=e.__c=n.__c).__=_.__E:(p?e.__c=_=new x(v,E):(e.__c=_=new M(v,E),_.constructor=x,_.render=_t),L&&L.sub(_),_.props=v,_.state||(_.state={}),_.context=E,_.__n=o,m=_.__d=!0,_.__h=[],_._sb=[]),p&&_.__s==null&&(_.__s=_.state),p&&x.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=P({},_.__s)),P(_.__s,x.getDerivedStateFromProps(v,_.__s))),l=_.props,g=_.state,_.__v=e,m)p&&x.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),p&&_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(p&&x.getDerivedStateFromProps==null&&v!==l&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(v,E),!_.__e&&(_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(v,_.__s,E)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(_.props=v,_.state=_.__s,_.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(q){q&&(q.__=e)}),I=0;I<_._sb.length;I++)_.__h.push(_._sb[I]);_._sb=[],_.__h.length&&s.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(v,_.__s,E),p&&_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(l,g,S)})}if(_.context=E,_.props=v,_.__P=t,_.__e=!1,T=d.__r,pe=0,p){for(_.state=_.__s,_.__d=!1,T&&T(e),a=_.render(_.props,_.state,_.context),R=0;R<_._sb.length;R++)_.__h.push(_._sb[R]);_._sb=[]}else do _.__d=!1,T&&T(e),a=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++pe<25);_.state=_.__s,_.getChildContext!=null&&(o=P(P({},o),_.getChildContext())),p&&!m&&_.getSnapshotBeforeUpdate!=null&&(S=_.getSnapshotBeforeUpdate(l,g)),De(t,ce(Y=a!=null&&a.type===Q&&a.key==null?a.props.children:a)?Y:[Y],e,n,o,i,r,s,f,c,u),_.base=e.__e,e.__u&=-161,_.__h.length&&s.push(_),b&&(_.__E=_.__=null)}catch(q){if(e.__v=null,c||r!=null){for(e.__u|=c?160:32;f&&f.nodeType===8&&f.nextSibling;)f=f.nextSibling;r[r.indexOf(f)]=null,e.__e=f}else e.__e=n.__e,e.__k=n.__k;d.__e(q,e,n)}else r==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=rt(n.__e,e,n,o,i,r,s,c,u);(a=d.diffed)&&a(e)}function Re(t,e,n){e.__d=void 0;for(var o=0;o<n.length;o++)ae(n[o],n[++o],n[++o]);d.__c&&d.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(r){r.call(i)})}catch(r){d.__e(r,i.__v)}})}function rt(t,e,n,o,i,r,s,f,c){var u,a,_,m,l,g,S,b=n.props,v=e.props,p=e.type;if(p==="svg"?i="http://www.w3.org/2000/svg":p==="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),r!=null){for(u=0;u<r.length;u++)if((l=r[u])&&"setAttribute"in l==!!p&&(p?l.localName===p:l.nodeType===3)){t=l,r[u]=null;break}}if(t==null){if(p===null)return document.createTextNode(v);t=document.createElementNS(i,p,v.is&&v),r=null,f=!1}if(p===null)b===v||f&&t.data===v||(t.data=v);else{if(r=r&&K.call(t.childNodes),b=n.props||F,!f&&r!=null)for(b={},u=0;u<t.attributes.length;u++)b[(l=t.attributes[u]).name]=l.value;for(u in b)if(l=b[u],u!="children"){if(u=="dangerouslySetInnerHTML")_=l;else if(u!=="key"&&!(u in v)){if(u=="value"&&"defaultValue"in v||u=="checked"&&"defaultChecked"in v)continue;z(t,u,null,l,i)}}for(u in v)l=v[u],u=="children"?m=l:u=="dangerouslySetInnerHTML"?a=l:u=="value"?g=l:u=="checked"?S=l:u==="key"||f&&typeof l!="function"||b[u]===l||z(t,u,l,b[u],i);if(a)f||_&&(a.__html===_.__html||a.__html===t.innerHTML)||(t.innerHTML=a.__html),e.__k=[];else if(_&&(t.innerHTML=""),De(t,ce(m)?m:[m],e,n,o,p==="foreignObject"?"http://www.w3.org/1999/xhtml":i,r,s,r?r[0]:n.__k&&U(n,0),f,c),r!=null)for(u=r.length;u--;)r[u]!=null&&Me(r[u]);f||(u="value",g!==void 0&&(g!==t[u]||p==="progress"&&!g||p==="option"&&g!==b[u])&&z(t,u,g,b[u],i),u="checked",S!==void 0&&S!==t[u]&&z(t,u,S,b[u],i))}return t}function ae(t,e,n){try{if(typeof t=="function"){var o=typeof t.__u=="function";o&&t.__u(),o&&e==null||(t.__u=t(e))}else t.current=e}catch(i){d.__e(i,n)}}function re(t,e,n){var o,i;if(d.unmount&&d.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||ae(o,null,e)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){d.__e(r,e)}o.base=o.__P=null}if(o=t.__k)for(i=0;i<o.length;i++)o[i]&&re(o[i],e,n||typeof t.type!="function");n||t.__e==null||Me(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function _t(t,e,n){return this.constructor(t,n)}function st(t,e,n){var o,i,r,s;d.__&&d.__(t,e),i=(o=typeof n=="function")?null:e.__k,r=[],s=[],le(e,t=(!o&&n||e).__k=Oe(Q,null,[t]),i||F,F,e.namespaceURI,!o&&n?[n]:i?null:e.firstChild?K.call(e.childNodes):null,r,!o&&n?n:i?i.__e:e.firstChild,o,s),Re(r,t,s)}K=Te.slice,d={__e:function(t,e,n,o){for(var i,r,s;e=e.__;)if((i=e.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(t)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,o||{}),s=i.__d),s)return i.__E=i}catch(f){t=f}throw t}},Ne=0,Ae=function(t){return t!=null&&t.constructor==null},M.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof t=="function"&&(t=t(P({},n),this.props)),t&&P(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),ge(this))},M.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ge(this))},M.prototype.render=Q,C=[],Le=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ne=function(t,e){return t.__v.__b-e.__v.__b},j.__r=0,ue=0,ie=$e(!1),oe=$e(!0);var ft=0;function k(t,e,n,o,i,r){e||(e={});var s,f,c=e;if("ref"in c)for(f in c={},e)f=="ref"?s=e[f]:c[f]=e[f];var u={type:t,props:c,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--ft,__i:-1,__u:0,__source:i,__self:r};if(typeof t=="function"&&(s=t.defaultProps))for(f in s)c[f]===void 0&&(c[f]=s[f]);return d.vnode&&d.vnode(u),u}const we=[{name:"Europe",gold:62,bronze:57,silver:71,total:190},{name:"Asia",gold:40,bronze:35,silver:39,total:114},{name:"America",gold:24,bronze:35,silver:39,total:98},{name:"Oceania",gold:14,bronze:13,silver:8,total:35},{name:"Africa",gold:2,bronze:3,silver:3,total:8}];var V,w,Z,ke,_e=0,qe=[],y=d,Se=y.__b,xe=y.__r,Ee=y.diffed,Pe=y.__c,Ce=y.unmount,Ue=y.__;function ze(t,e){y.__h&&y.__h(w,t,_e||e),_e=0;var n=w.__H||(w.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function ut(t,e){var n=ze(V++,3);!y.__s&&Be(n.__H,e)&&(n.__=t,n.i=e,w.__H.__h.push(n))}function mt(t){return _e=5,X(function(){return{current:t}},[])}function X(t,e){var n=ze(V++,7);return Be(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function ct(){for(var t;t=qe.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(W),t.__H.__h.forEach(se),t.__H.__h=[]}catch(e){t.__H.__h=[],y.__e(e,t.__v)}}y.__b=function(t){w=null,Se&&Se(t)},y.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Ue&&Ue(t,e)},y.__r=function(t){xe&&xe(t),V=0;var e=(w=t.__c).__H;e&&(Z===w?(e.__h=[],w.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(e.__h.forEach(W),e.__h.forEach(se),e.__h=[],V=0)),Z=w},y.diffed=function(t){Ee&&Ee(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(qe.push(e)!==1&&ke===y.requestAnimationFrame||((ke=y.requestAnimationFrame)||lt)(ct)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),Z=w=null},y.__c=function(t,e){e.some(function(n){try{n.__h.forEach(W),n.__h=n.__h.filter(function(o){return!o.__||se(o)})}catch(o){e.some(function(i){i.__h&&(i.__h=[])}),e=[],y.__e(o,n.__v)}}),Pe&&Pe(t,e)},y.unmount=function(t){Ce&&Ce(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{W(o)}catch(i){e=i}}),n.__H=void 0,e&&y.__e(e,n.__v))};var He=typeof requestAnimationFrame=="function";function lt(t){var e,n=function(){clearTimeout(o),He&&cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(n,100);He&&(e=requestAnimationFrame(n))}function W(t){var e=w,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),w=e}function se(t){var e=w;t.__c=t.__(),w=e}function Be(t,e){return!t||t.length!==e.length||e.some(function(n,o){return n!==t[o]})}var at=Symbol.for("preact-signals");function he(){if(H>1)H--;else{for(var t,e=!1;O!==void 0;){var n=O;for(O=void 0,fe++;n!==void 0;){var o=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&Ve(n))try{n.c()}catch(i){e||(t=i,e=!0)}n=o}}if(fe=0,H--,e)throw t}}var h=void 0,O=void 0,H=0,fe=0,G=0;function We(t){if(h!==void 0){var e=t.n;if(e===void 0||e.t!==h)return e={i:0,S:t,p:h.s,n:void 0,t:h,e:void 0,x:void 0,r:e},h.s!==void 0&&(h.s.n=e),h.s=e,t.n=e,32&h.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=h.s,e.n=void 0,h.s.n=e,h.s=e),e}}function $(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}$.prototype.brand=at;$.prototype.h=function(){return!0};$.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};$.prototype.U=function(t){if(this.t!==void 0){var e=t.e,n=t.x;e!==void 0&&(e.x=n,t.e=void 0),n!==void 0&&(n.e=e,t.x=void 0),t===this.t&&(this.t=n)}};$.prototype.subscribe=function(t){var e=this;return ve(function(){var n=e.value,o=h;h=void 0;try{t(n)}finally{h=o}})};$.prototype.valueOf=function(){return this.value};$.prototype.toString=function(){return this.value+""};$.prototype.toJSON=function(){return this.value};$.prototype.peek=function(){var t=h;h=void 0;try{return this.value}finally{h=t}};Object.defineProperty($.prototype,"value",{get:function(){var t=We(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){if(fe>100)throw new Error("Cycle detected");this.v=t,this.i++,G++,H++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{he()}}}});function je(t){return new $(t)}function Ve(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function Ge(t){for(var e=t.s;e!==void 0;e=e.n){var n=e.S.n;if(n!==void 0&&(e.r=n),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function Je(t){for(var e=t.s,n=void 0;e!==void 0;){var o=e.p;e.i===-1?(e.S.U(e),o!==void 0&&(o.n=e.n),e.n!==void 0&&(e.n.p=o)):n=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=o}t.s=n}function N(t){$.call(this,void 0),this.x=t,this.s=void 0,this.g=G-1,this.f=4}(N.prototype=new $).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===G))return!0;if(this.g=G,this.f|=1,this.i>0&&!Ve(this))return this.f&=-2,!0;var t=h;try{Ge(this),h=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return h=t,Je(this),this.f&=-2,!0};N.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}$.prototype.S.call(this,t)};N.prototype.U=function(t){if(this.t!==void 0&&($.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};N.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};Object.defineProperty(N.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var t=We(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function ht(t){return new N(t)}function Ke(t){var e=t.u;if(t.u=void 0,typeof e=="function"){H++;var n=h;h=void 0;try{e()}catch(o){throw t.f&=-2,t.f|=8,de(t),o}finally{h=n,he()}}}function de(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,Ke(t)}function dt(t){if(h!==this)throw new Error("Out-of-order effect");Je(this),h=t,this.f&=-2,8&this.f&&de(this),he()}function D(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}D.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e)}finally{t()}};D.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Ke(this),Ge(this),H++;var t=h;return h=this,dt.bind(this,t)};D.prototype.N=function(){2&this.f||(this.f|=2,this.o=O,O=this)};D.prototype.d=function(){this.f|=8,1&this.f||de(this)};function ve(t){var e=new D(t);try{e.c()}catch(n){throw e.d(),n}return e.d.bind(e)}var ee;function A(t,e){d[t]=e.bind(null,d[t]||function(){})}function J(t){ee&&ee(),ee=t&&t.S()}function Qe(t){var e=this,n=t.data,o=Xe(n);o.value=n;var i=X(function(){for(var r=e.__v;r=r.__;)if(r.__c){r.__c.__$f|=4;break}return e.__$u.c=function(){var s;!Ae(i.peek())&&((s=e.base)==null?void 0:s.nodeType)===3?e.base.data=i.peek():(e.__$f|=1,e.setState({}))},ht(function(){var s=o.value.value;return s===0?0:s===!0?"":s||""})},[]);return i.value}Qe.displayName="_st";Object.defineProperties($.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Qe},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});A("__b",function(t,e){if(typeof e.type=="string"){var n,o=e.props;for(var i in o)if(i!=="children"){var r=o[i];r instanceof $&&(n||(e.__np=n={}),n[i]=r,o[i]=r.peek())}}t(e)});A("__r",function(t,e){J();var n,o=e.__c;o&&(o.__$f&=-2,(n=o.__$u)===void 0&&(o.__$u=n=function(i){var r;return ve(function(){r=this}),r.c=function(){o.__$f|=1,o.setState({})},r}())),J(n),t(e)});A("__e",function(t,e,n,o){J(),t(e,n,o)});A("diffed",function(t,e){J();var n;if(typeof e.type=="string"&&(n=e.__e)){var o=e.__np,i=e.props;if(o){var r=n.U;if(r)for(var s in r){var f=r[s];f!==void 0&&!(s in o)&&(f.d(),r[s]=void 0)}else n.U=r={};for(var c in o){var u=r[c],a=o[c];u===void 0?(u=vt(n,c,a,i),r[c]=u):u.o(a,i)}}}t(e)});function vt(t,e,n,o){var i=e in t&&t.ownerSVGElement===void 0,r=je(n);return{o:function(s,f){r.value=s,o=f},d:ve(function(){var s=r.value.value;o[e]!==s&&(o[e]=s,i?t[e]=s:s?t.setAttribute(e,s):t.removeAttribute(e))})}}A("unmount",function(t,e){if(typeof e.type=="string"){var n=e.__e;if(n){var o=n.U;if(o){n.U=void 0;for(var i in o){var r=o[i];r&&r.d()}}}}else{var s=e.__c;if(s){var f=s.__$u;f&&(s.__$u=void 0,f.d())}}t(e)});A("__h",function(t,e,n,o){(o<3||o===9)&&(e.__$f|=2),t(e,n,o)});M.prototype.shouldComponentUpdate=function(t,e){var n=this.__$u;if(!(n&&n.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var o in e)return!0;for(var i in t)if(i!=="__source"&&t[i]!==this.props[i])return!0;for(var r in this.props)if(!(r in t))return!0;return!1};function Xe(t){return X(function(){return je(t)},[])}function Ye(t,e=1e3,n=0){const o=X(()=>Date.now(),[]),i=Xe(0);return ut(()=>{const r=()=>{const s=Math.max((Date.now()-o-n)/e,0);if(s>=1){i.value=t;return}i.value=Math.floor(t*s),requestAnimationFrame(r)};r()},[]),i}function pt(){const t=we.map(e=>e.total);return k("div",{className:"continents",children:we.map((e,n)=>Oe(yt,{...e,key:e.name,index:n,max:Math.max(...t)}))})}function yt({name:t,gold:e,silver:n,bronze:o,total:i,index:r,max:s}){const f=i/s,c={gridColumnStart:Math.floor(r/2)+1,"--index":r,"--ratio":f,"--color":`var(--ring${r+1})`},u=Ye(i,700,1e3);return k("article",{className:"continent",style:c,onClick:_=>{const m=_.currentTarget;tt(()=>import("./easteregg-ENt2YYoK.js"),__vite__mapDeps([0,1])).then(l=>l.callMascots(m))},children:[k("header",{children:[k("h2",{children:[t,": ",k("strong",{children:u})]}),k("ul",{className:"continent__medals",children:[k(te,{type:"Gold",count:e}),k(te,{type:"Silver",count:n}),k(te,{type:"Bronze",count:o})]})]}),k("div",{className:"ring"})]})}function te({type:t,count:e}){const n=Ye(e,700,1e3);return k("li",{className:"continent__medal "+t.toLowerCase(),"aria-label":`${t} medals`,children:n})}st(k(pt,{}),document.getElementById("graph"));document.querySelectorAll(".cloak").forEach(t=>t.classList.remove("cloak"));export{mt as A,st as B,k as a,Q as k,Xe as u,ut as y};
