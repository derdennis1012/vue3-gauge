function It(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function nr(t){return 
t.length===1&&(t=_l(t)),{left:function(e,n,r,i){for(r==null&&(r=0),i==null&&(i=e.length);r<i;){var 
o=r+i>>>1;t(e[o],n)<0?r=o+1:i=o}return 
r},right:function(e,n,r,i){for(r==null&&(r=0),i==null&&(i=e.length);r<i;){var 
o=r+i>>>1;t(e[o],n)>0?i=o:r=o+1}return r}}}function _l(t){return 
function(e,n){return It(t(e),n)}}var ua=nr(It),wl=ua.right,bl=ua.left;var 
fa=Array.prototype,Sl=fa.slice,Tl=fa.map;var 
v1=Math.sqrt(50),y1=Math.sqrt(10),_1=Math.sqrt(2);function or(t){for(var 
e=t.length,n,r=-1,i=0,o,a;++r<e;)i+=t[r].length;for(o=new 
Array(i);--e>=0;)for(a=t[e],n=a.length;--n>=0;)o[--i]=a[n];return o}var 
Pl=Array.prototype.slice;var Il={value:function(){}};function ca(){for(var 
t=0,e=arguments.length,n={},r;t<e;++t){if(!(r=arguments[t]+"")||r in 
n)throw new Error("illegal type: "+r);n[r]=[]}return new ar(n)}function 
ar(t){this._=t}function zl(t,e){return 
t.trim().split(/^|\s+/).map(function(n){var 
r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!e.hasOwnProperty(n))throw 
new Error("unknown type: 
"+n);return{type:n,name:r}})}ar.prototype=ca.prototype={constructor:ar,on:function(t,e){var 
n=this._,r=zl(t+"",n),i,o=-1,a=r.length;if(arguments.length<2){for(;++o<a;)if((i=(t=r[o]).type)&&(i=Ll(n[i],t.name)))return 
i;return}if(e!=null&&typeof e!="function")throw new Error("invalid 
callback: "+e);for(;++o<a;)if(i=(t=r[o]).type)n[i]=la(n[i],t.name,e);else 
if(e==null)for(i in n)n[i]=la(n[i],t.name,null);return 
this},copy:function(){var t={},e=this._;for(var n in 
e)t[n]=e[n].slice();return new 
ar(t)},call:function(t,e){if((i=arguments.length-2)>0)for(var n=new 
Array(i),r=0,i,o;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(t))throw 
new Error("unknown type: 
"+t);for(o=this._[t],r=0,i=o.length;r<i;++r)o[r].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw 
new Error("unknown type: "+t);for(var 
r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(e,n)}};function 
Ll(t,e){for(var n=0,r=t.length,i;n<r;++n)if((i=t[n]).name===e)return 
i.value}function la(t,e,n){for(var 
r=0,i=t.length;r<i;++r)if(t[r].name===e){t[r]=Il,t=t.slice(0,r).concat(t.slice(r+1));break}return 
n!=null&&t.push({name:e,value:n}),t}var zt=ca;var 
ur="http://www.w3.org/1999/xhtml",fr={svg:"http://www.w3.org/2000/svg",xhtml:ur,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function 
Lt(t){var e=t+="",n=e.indexOf(":");return 
n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),fr.hasOwnProperty(e)?{space:fr[e],local:t}:t}function 
Ol(t){return function(){var 
e=this.ownerDocument,n=this.namespaceURI;return 
n===ur&&e.documentElement.namespaceURI===ur?e.createElement(t):e.createElementNS(n,t)}}function 
Dl(t){return function(){return 
this.ownerDocument.createElementNS(t.space,t.local)}}function Ne(t){var 
e=Lt(t);return(e.local?Dl:Ol)(e)}function Ul(){}function oe(t){return 
t==null?Ul:function(){return this.querySelector(t)}}function ha(t){typeof 
t!="function"&&(t=oe(t));for(var e=this._groups,n=e.length,r=new 
Array(n),i=0;i<n;++i)for(var o=e[i],a=o.length,u=r[i]=new 
Array(a),f,s,l=0;l<a;++l)(f=o[l])&&(s=t.call(f,f.__data__,l,o))&&("__data__"in 
f&&(s.__data__=f.__data__),u[l]=s);return new q(r,this._parents)}function 
Yl(){return[]}function ln(t){return t==null?Yl:function(){return 
this.querySelectorAll(t)}}function pa(t){typeof 
t!="function"&&(t=ln(t));for(var 
e=this._groups,n=e.length,r=[],i=[],o=0;o<n;++o)for(var 
a=e[o],u=a.length,f,s=0;s<u;++s)(f=a[s])&&(r.push(t.call(f,f.__data__,s,a)),i.push(f));return 
new q(r,i)}var da=function(t){return function(){return 
this.matches(t)}};typeof 
document<"u"&&(Ae=document.documentElement,Ae.matches||(ma=Ae.webkitMatchesSelector||Ae.msMatchesSelector||Ae.mozMatchesSelector||Ae.oMatchesSelector,da=function(t){return 
function(){return ma.call(this,t)}}));var Ae,ma,cn=da;function 
ga(t){typeof t!="function"&&(t=cn(t));for(var 
e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var 
o=e[i],a=o.length,u=r[i]=[],f,s=0;s<a;++s)(f=o[s])&&t.call(f,f.__data__,s,o)&&u.push(f);return 
new q(r,this._parents)}function sr(t){return new Array(t.length)}function 
xa(){return new 
q(this._enter||this._groups.map(sr),this._parents)}function 
hn(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}hn.prototype={constructor:hn,appendChild:function(t){return 
this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return 
this._parent.insertBefore(t,e)},querySelector:function(t){return 
this._parent.querySelector(t)},querySelectorAll:function(t){return 
this._parent.querySelectorAll(t)}};function va(t){return function(){return 
t}}var ya="$";function Fl(t,e,n,r,i,o){for(var 
a=0,u,f=e.length,s=o.length;a<s;++a)(u=e[a])?(u.__data__=o[a],r[a]=u):n[a]=new 
hn(t,o[a]);for(;a<f;++a)(u=e[a])&&(i[a]=u)}function ql(t,e,n,r,i,o,a){var 
u,f,s={},l=e.length,c=o.length,h=new 
Array(l),p;for(u=0;u<l;++u)(f=e[u])&&(h[u]=p=ya+a.call(f,f.__data__,u,e),p 
in 
s?i[u]=f:s[p]=f);for(u=0;u<c;++u)p=ya+a.call(t,o[u],u,o),(f=s[p])?(r[u]=f,f.__data__=o[u],s[p]=null):n[u]=new 
hn(t,o[u]);for(u=0;u<l;++u)(f=e[u])&&s[h[u]]===f&&(i[u]=f)}function 
_a(t,e){if(!t)return p=new 
Array(this.size()),s=-1,this.each(function(S){p[++s]=S}),p;var 
n=e?ql:Fl,r=this._parents,i=this._groups;typeof 
t!="function"&&(t=va(t));for(var o=i.length,a=new Array(o),u=new 
Array(o),f=new Array(o),s=0;s<o;++s){var 
l=r[s],c=i[s],h=c.length,p=t.call(l,l&&l.__data__,s,r),d=p.length,m=u[s]=new 
Array(d),g=a[s]=new Array(d),x=f[s]=new Array(h);n(l,c,m,g,x,p,e);for(var 
_=0,w=0,y,M;_<d;++_)if(y=m[_]){for(_>=w&&(w=_+1);!(M=g[w])&&++w<d;);y._next=M||null}}return 
a=new q(a,r),a._enter=u,a._exit=f,a}function wa(){return new 
q(this._exit||this._groups.map(sr),this._parents)}function ba(t){for(var 
e=this._groups,n=t._groups,r=e.length,i=n.length,o=Math.min(r,i),a=new 
Array(r),u=0;u<o;++u)for(var f=e[u],s=n[u],l=f.length,c=a[u]=new 
Array(l),h,p=0;p<l;++p)(h=f[p]||s[p])&&(c[p]=h);for(;u<r;++u)a[u]=e[u];return 
new q(a,this._parents)}function Ma(){for(var 
t=this._groups,e=-1,n=t.length;++e<n;)for(var 
r=t[e],i=r.length-1,o=r[i],a;--i>=0;)(a=r[i])&&(o&&o!==a.nextSibling&&o.parentNode.insertBefore(a,o),o=a);return 
this}function Sa(t){t||(t=Bl);function e(c,h){return 
c&&h?t(c.__data__,h.__data__):!c-!h}for(var 
n=this._groups,r=n.length,i=new Array(r),o=0;o<r;++o){for(var 
a=n[o],u=a.length,f=i[o]=new 
Array(u),s,l=0;l<u;++l)(s=a[l])&&(f[l]=s);f.sort(e)}return new 
q(i,this._parents).order()}function Bl(t,e){return 
t<e?-1:t>e?1:t>=e?0:NaN}function Ta(){var t=arguments[0];return 
arguments[0]=this,t.apply(null,arguments),this}function Ea(){var t=new 
Array(this.size()),e=-1;return 
this.each(function(){t[++e]=this}),t}function Ca(){for(var 
t=this._groups,e=0,n=t.length;e<n;++e)for(var 
r=t[e],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return 
null}function ka(){var t=0;return this.each(function(){++t}),t}function 
Na(){return!this.node()}function Aa(t){for(var 
e=this._groups,n=0,r=e.length;n<r;++n)for(var 
i=e[n],o=0,a=i.length,u;o<a;++o)(u=i[o])&&t.call(u,u.__data__,o,i);return 
this}function Hl(t){return function(){this.removeAttribute(t)}}function 
Xl(t){return function(){this.removeAttributeNS(t.space,t.local)}}function 
Wl(t,e){return function(){this.setAttribute(t,e)}}function Vl(t,e){return 
function(){this.setAttributeNS(t.space,t.local,e)}}function Gl(t,e){return 
function(){var 
n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function 
Zl(t,e){return function(){var 
n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function 
Ra(t,e){var n=Lt(t);if(arguments.length<2){var r=this.node();return 
n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return 
this.each((e==null?n.local?Xl:Hl:typeof 
e=="function"?n.local?Zl:Gl:n.local?Vl:Wl)(n,e))}function pn(t){return 
t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function 
$l(t){return function(){this.style.removeProperty(t)}}function 
Ql(t,e,n){return function(){this.style.setProperty(t,e,n)}}function 
Kl(t,e,n){return function(){var 
r=e.apply(this,arguments);r==null?this.style.removeProperty(t):this.style.setProperty(t,r,n)}}function 
Pa(t,e,n){return arguments.length>1?this.each((e==null?$l:typeof 
e=="function"?Kl:Ql)(t,e,n??"")):Xt(this.node(),t)}function Xt(t,e){return 
t.style.getPropertyValue(e)||pn(t).getComputedStyle(t,null).getPropertyValue(e)}function 
Jl(t){return function(){delete this[t]}}function jl(t,e){return 
function(){this[t]=e}}function tc(t,e){return function(){var 
n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function 
Ia(t,e){return arguments.length>1?this.each((e==null?Jl:typeof 
e=="function"?tc:jl)(t,e)):this.node()[t]}function za(t){return 
t.trim().split(/^|\s+/)}function gi(t){return t.classList||new 
La(t)}function 
La(t){this._node=t,this._names=za(t.getAttribute("class")||"")}La.prototype={add:function(t){var 
e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" 
")))},remove:function(t){var 
e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" 
")))},contains:function(t){return this._names.indexOf(t)>=0}};function 
Oa(t,e){for(var n=gi(t),r=-1,i=e.length;++r<i;)n.add(e[r])}function 
Da(t,e){for(var n=gi(t),r=-1,i=e.length;++r<i;)n.remove(e[r])}function 
ec(t){return function(){Oa(this,t)}}function nc(t){return 
function(){Da(this,t)}}function rc(t,e){return 
function(){(e.apply(this,arguments)?Oa:Da)(this,t)}}function Ua(t,e){var 
n=za(t+"");if(arguments.length<2){for(var 
r=gi(this.node()),i=-1,o=n.length;++i<o;)if(!r.contains(n[i]))return!1;return!0}return 
this.each((typeof e=="function"?rc:e?ec:nc)(n,e))}function 
ic(){this.textContent=""}function oc(t){return 
function(){this.textContent=t}}function ac(t){return function(){var 
e=t.apply(this,arguments);this.textContent=e??""}}function Ya(t){return 
arguments.length?this.each(t==null?ic:(typeof 
t=="function"?ac:oc)(t)):this.node().textContent}function 
uc(){this.innerHTML=""}function fc(t){return 
function(){this.innerHTML=t}}function sc(t){return function(){var 
e=t.apply(this,arguments);this.innerHTML=e??""}}function Fa(t){return 
arguments.length?this.each(t==null?uc:(typeof 
t=="function"?sc:fc)(t)):this.node().innerHTML}function 
lc(){this.nextSibling&&this.parentNode.appendChild(this)}function 
qa(){return this.each(lc)}function 
cc(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function 
Ba(){return this.each(cc)}function Ha(t){var e=typeof 
t=="function"?t:Ne(t);return this.select(function(){return 
this.appendChild(e.apply(this,arguments))})}function hc(){return 
null}function Xa(t,e){var n=typeof 
t=="function"?t:Ne(t),r=e==null?hc:typeof e=="function"?e:oe(e);return 
this.select(function(){return 
this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function 
pc(){var t=this.parentNode;t&&t.removeChild(this)}function Wa(){return 
this.each(pc)}function mc(){return 
this.parentNode.insertBefore(this.cloneNode(!1),this.nextSibling)}function 
dc(){return 
this.parentNode.insertBefore(this.cloneNode(!0),this.nextSibling)}function 
Va(t){return this.select(t?dc:mc)}function Ga(t){return 
arguments.length?this.property("__data__",t):this.node().__data__}var 
$a={},_t=null;typeof 
document<"u"&&(Za=document.documentElement,"onmouseenter"in 
Za||($a={mouseenter:"mouseover",mouseleave:"mouseout"}));var Za;function 
gc(t,e,n){return t=Qa(t,e,n),function(r){var 
i=r.relatedTarget;(!i||i!==this&&!(i.compareDocumentPosition(this)&8))&&t.call(this,r)}}function 
Qa(t,e,n){return function(r){var 
i=_t;_t=r;try{t.call(this,this.__data__,e,n)}finally{_t=i}}}function 
xc(t){return t.trim().split(/^|\s+/).map(function(e){var 
n="",r=e.indexOf(".");return 
r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),{type:e,name:n}})}function 
vc(t){return function(){var e=this.__on;if(!!e){for(var 
n=0,r=-1,i=e.length,o;n<i;++n)o=e[n],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.capture):e[++r]=o;++r?e.length=r:delete 
this.__on}}}function yc(t,e,n){var 
r=$a.hasOwnProperty(t.type)?gc:Qa;return function(i,o,a){var 
u=this.__on,f,s=r(e,o,a);if(u){for(var 
l=0,c=u.length;l<c;++l)if((f=u[l]).type===t.type&&f.name===t.name){this.removeEventListener(f.type,f.listener,f.capture),this.addEventListener(f.type,f.listener=s,f.capture=n),f.value=e;return}}this.addEventListener(t.type,s,n),f={type:t.type,name:t.name,value:e,listener:s,capture:n},u?u.push(f):this.__on=[f]}}function 
Ka(t,e,n){var r=xc(t+""),i,o=r.length,a;if(arguments.length<2){var 
u=this.node().__on;if(u){for(var 
f=0,s=u.length,l;f<s;++f)for(i=0,l=u[f];i<o;++i)if((a=r[i]).type===l.type&&a.name===l.name)return 
l.value}return}for(u=e?yc:vc,n==null&&(n=!1),i=0;i<o;++i)this.each(u(r[i],e,n));return 
this}function Ja(t,e,n){var r=pn(t),i=r.CustomEvent;typeof 
i=="function"?i=new 
i(e,n):(i=r.document.createEvent("Event"),n?(i.initEvent(e,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(e,!1,!1)),t.dispatchEvent(i)}function 
_c(t,e){return function(){return Ja(this,t,e)}}function wc(t,e){return 
function(){return Ja(this,t,e.apply(this,arguments))}}function 
ja(t,e){return this.each((typeof e=="function"?wc:_c)(t,e))}var 
lr=[null];function q(t,e){this._groups=t,this._parents=e}function 
tu(){return new 
q([[document.documentElement]],lr)}q.prototype=tu.prototype={constructor:q,select:ha,selectAll:pa,filter:ga,data:_a,enter:xa,exit:wa,merge:ba,order:Ma,sort:Sa,call:Ta,nodes:Ea,node:Ca,size:ka,empty:Na,each:Aa,attr:Ra,style:Pa,property:Ia,classed:Ua,text:Ya,html:Fa,raise:qa,lower:Ba,append:Ha,insert:Xa,remove:Wa,clone:Va,datum:Ga,on:Ka,dispatch:ja};var 
Ot=tu;function Wt(t){return typeof t=="string"?new 
q([[document.querySelector(t)]],[document.documentElement]):new 
q([[t]],lr)}var bc=0;function vi(){return new xi}function 
xi(){this._="@"+(++bc).toString(36)}xi.prototype=vi.prototype={constructor:xi,get:function(t){for(var 
e=this._;!(e in t);)if(!(t=t.parentNode))return;return 
t[e]},set:function(t,e){return t[this._]=e},remove:function(t){return 
this._ in t&&delete t[this._]},toString:function(){return 
this._}};function 
bi(t,e,n,r,i,o,a,u,f,s){this.target=t,this.type=e,this.subject=n,this.identifier=r,this.active=i,this.x=o,this.y=a,this.dx=u,this.dy=f,this._=s}bi.prototype.on=function(){var 
t=this._.on.apply(this._,arguments);return t===this._?this:t};function 
Dt(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function Vt(t,e){var 
n=Object.create(t.prototype);for(var r in e)n[r]=e[r];return n}function 
kt(){}var 
Gt=.7,ae=1/Gt,Re="\\s*([+-]?\\d+)\\s*",mn="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ct="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Sc=/^#([0-9a-f]{3})$/,Tc=/^#([0-9a-f]{6})$/,Ec=new 
RegExp("^rgb\\("+[Re,Re,Re]+"\\)$"),Cc=new 
RegExp("^rgb\\("+[Ct,Ct,Ct]+"\\)$"),kc=new 
RegExp("^rgba\\("+[Re,Re,Re,mn]+"\\)$"),Nc=new 
RegExp("^rgba\\("+[Ct,Ct,Ct,mn]+"\\)$"),Ac=new 
RegExp("^hsl\\("+[mn,Ct,Ct]+"\\)$"),Rc=new 
RegExp("^hsla\\("+[mn,Ct,Ct,mn]+"\\)$"),ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Dt(kt,Ut,{displayable:function(){return 
this.rgb().displayable()},toString:function(){return 
this.rgb()+""}});function Ut(t){var e;return 
t=(t+"").trim().toLowerCase(),(e=Sc.exec(t))?(e=parseInt(e[1],16),new 
V(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1)):(e=Tc.exec(t))?iu(parseInt(e[1],16)):(e=Ec.exec(t))?new 
V(e[1],e[2],e[3],1):(e=Cc.exec(t))?new 
V(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=kc.exec(t))?ou(e[1],e[2],e[3],e[4]):(e=Nc.exec(t))?ou(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=Ac.exec(t))?au(e[1],e[2]/100,e[3]/100,1):(e=Rc.exec(t))?au(e[1],e[2]/100,e[3]/100,e[4]):ru.hasOwnProperty(t)?iu(ru[t]):t==="transparent"?new 
V(NaN,NaN,NaN,0):null}function iu(t){return new 
V(t>>16&255,t>>8&255,t&255,1)}function ou(t,e,n,r){return 
r<=0&&(t=e=n=NaN),new V(t,e,n,r)}function dn(t){return t instanceof 
kt||(t=Ut(t)),t?(t=t.rgb(),new V(t.r,t.g,t.b,t.opacity)):new V}function 
Pe(t,e,n,r){return arguments.length===1?dn(t):new V(t,e,n,r??1)}function 
V(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r}Dt(V,Pe,Vt(kt,{brighter:function(t){return 
t=t==null?ae:Math.pow(ae,t),new 
V(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return 
t=t==null?Gt:Math.pow(Gt,t),new 
V(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return 
this},displayable:function(){return 
0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var 
t=this.opacity;return 
t=isNaN(t)?1:Math.max(0,Math.min(1,t)),(t===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", 
"+Math.max(0,Math.min(255,Math.round(this.g)||0))+", 
"+Math.max(0,Math.min(255,Math.round(this.b)||0))+(t===1?")":", 
"+t+")")}}));function au(t,e,n,r){return 
r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Et(t,e,n,r)}function 
Pc(t){if(t instanceof Et)return new Et(t.h,t.s,t.l,t.opacity);if(t 
instanceof kt||(t=Ut(t)),!t)return new Et;if(t instanceof Et)return 
t;t=t.rgb();var 
e=t.r/255,n=t.g/255,r=t.b/255,i=Math.min(e,n,r),o=Math.max(e,n,r),a=NaN,u=o-i,f=(o+i)/2;return 
u?(e===o?a=(n-r)/u+(n<r)*6:n===o?a=(r-e)/u+2:a=(e-n)/u+4,u/=f<.5?o+i:2-o-i,a*=60):u=f>0&&f<1?0:a,new 
Et(a,u,f,t.opacity)}function gn(t,e,n,r){return 
arguments.length===1?Pc(t):new Et(t,e,n,r??1)}function 
Et(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}Dt(Et,gn,Vt(kt,{brighter:function(t){return 
t=t==null?ae:Math.pow(ae,t),new 
Et(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return 
t=t==null?Gt:Math.pow(Gt,t),new 
Et(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var 
t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,i=2*n-r;return 
new 
V(Ti(t>=240?t-240:t+120,i,r),Ti(t,i,r),Ti(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));function 
Ti(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}var 
cr=Math.PI/180,hr=180/Math.PI;var 
pr=18,uu=.95047,fu=1,su=1.08883,lu=4/29,Ie=6/29,cu=3*Ie*Ie,Ic=Ie*Ie*Ie;function 
Ai(t){if(t instanceof Yt)return new Yt(t.l,t.a,t.b,t.opacity);if(t 
instanceof Zt){var e=t.h*cr;return new 
Yt(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}t instanceof 
V||(t=dn(t));var 
n=Ni(t.r),r=Ni(t.g),i=Ni(t.b),o=Ei((.4124564*n+.3575761*r+.1804375*i)/uu),a=Ei((.2126729*n+.7151522*r+.072175*i)/fu),u=Ei((.0193339*n+.119192*r+.9503041*i)/su);return 
new Yt(116*a-16,500*(o-a),200*(a-u),t.opacity)}function mr(t,e,n,r){return 
arguments.length===1?Ai(t):new Yt(t,e,n,r??1)}function 
Yt(t,e,n,r){this.l=+t,this.a=+e,this.b=+n,this.opacity=+r}Dt(Yt,mr,Vt(kt,{brighter:function(t){return 
new 
Yt(this.l+pr*(t??1),this.a,this.b,this.opacity)},darker:function(t){return 
new Yt(this.l-pr*(t??1),this.a,this.b,this.opacity)},rgb:function(){var 
t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,n=isNaN(this.b)?t:t-this.b/200;return 
t=fu*Ci(t),e=uu*Ci(e),n=su*Ci(n),new 
V(ki(3.2404542*e-1.5371385*t-.4985314*n),ki(-.969266*e+1.8760108*t+.041556*n),ki(.0556434*e-.2040259*t+1.0572252*n),this.opacity)}}));function 
Ei(t){return t>Ic?Math.pow(t,1/3):t/cu+lu}function Ci(t){return 
t>Ie?t*t*t:cu*(t-lu)}function ki(t){return 
255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function 
Ni(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function 
zc(t){if(t instanceof Zt)return new Zt(t.h,t.c,t.l,t.opacity);t instanceof 
Yt||(t=Ai(t));var e=Math.atan2(t.b,t.a)*hr;return new 
Zt(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function 
xn(t,e,n,r){return arguments.length===1?zc(t):new Zt(t,e,n,r??1)}function 
Zt(t,e,n,r){this.h=+t,this.c=+e,this.l=+n,this.opacity=+r}Dt(Zt,xn,Vt(kt,{brighter:function(t){return 
new 
Zt(this.h,this.c,this.l+pr*(t??1),this.opacity)},darker:function(t){return 
new Zt(this.h,this.c,this.l-pr*(t??1),this.opacity)},rgb:function(){return 
Ai(this).rgb()}}));var 
du=-.14861,Ri=1.78277,Pi=-.29227,dr=-.90649,vn=1.97294,hu=vn*dr,pu=vn*Ri,mu=Ri*Pi-dr*du;function 
Lc(t){if(t instanceof ue)return new ue(t.h,t.s,t.l,t.opacity);t instanceof 
V||(t=dn(t));var 
e=t.r/255,n=t.g/255,r=t.b/255,i=(mu*r+hu*e-pu*n)/(mu+hu-pu),o=r-i,a=(vn*(n-i)-Pi*o)/dr,u=Math.sqrt(a*a+o*o)/(vn*i*(1-i)),f=u?Math.atan2(a,o)*hr-120:NaN;return 
new ue(f<0?f+360:f,u,i,t.opacity)}function it(t,e,n,r){return 
arguments.length===1?Lc(t):new ue(t,e,n,r??1)}function 
ue(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}Dt(ue,it,Vt(kt,{brighter:function(t){return 
t=t==null?ae:Math.pow(ae,t),new 
ue(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return 
t=t==null?Gt:Math.pow(Gt,t),new 
ue(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var 
t=isNaN(this.h)?0:(this.h+120)*cr,e=+this.l,n=isNaN(this.s)?0:this.s*e*(1-e),r=Math.cos(t),i=Math.sin(t);return 
new 
V(255*(e+n*(du*r+Ri*i)),255*(e+n*(Pi*r+dr*i)),255*(e+n*(vn*r)),this.opacity)}}));function 
Ii(t,e,n,r,i){var 
o=t*t,a=o*t;return((1-3*t+3*o-a)*e+(4-6*o+3*a)*n+(1+3*t+3*o-3*a)*r+a*i)/6}function 
zi(t){var e=t.length-1;return function(n){var 
r=n<=0?n=0:n>=1?(n=1,e-1):Math.floor(n*e),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,u=r<e-1?t[r+2]:2*o-i;return 
Ii((n-r/e)*e,a,i,o,u)}}function Li(t){var e=t.length;return 
function(n){var 
r=Math.floor(((n%=1)<0?++n:n)*e),i=t[(r+e-1)%e],o=t[r%e],a=t[(r+1)%e],u=t[(r+2)%e];return 
Ii((n-r/e)*e,i,o,a,u)}}function yn(t){return function(){return t}}function 
gu(t,e){return function(n){return t+n*e}}function Oc(t,e,n){return 
t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(r){return 
Math.pow(t+r*e,n)}}function ze(t,e){var n=e-t;return 
n?gu(t,n>180||n<-180?n-360*Math.round(n/360):n):yn(isNaN(t)?e:t)}function 
xu(t){return(t=+t)==1?X:function(e,n){return 
n-e?Oc(e,n,t):yn(isNaN(e)?n:e)}}function X(t,e){var n=e-t;return 
n?gu(t,n):yn(isNaN(t)?e:t)}var _n=function t(e){var n=xu(e);function 
r(i,o){var 
a=n((i=Pe(i)).r,(o=Pe(o)).r),u=n(i.g,o.g),f=n(i.b,o.b),s=X(i.opacity,o.opacity);return 
function(l){return i.r=a(l),i.g=u(l),i.b=f(l),i.opacity=s(l),i+""}}return 
r.gamma=t,r}(1);function vu(t){return function(e){var n=e.length,r=new 
Array(n),i=new Array(n),o=new 
Array(n),a,u;for(a=0;a<n;++a)u=Pe(e[a]),r[a]=u.r||0,i[a]=u.g||0,o[a]=u.b||0;return 
r=t(r),i=t(i),o=t(o),u.opacity=1,function(f){return 
u.r=r(f),u.g=i(f),u.b=o(f),u+""}}}var Dc=vu(zi),Uc=vu(Li);function 
j(t,e){return t=+t,e-=t,function(n){return t+e*n}}var 
Di=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Oi=new 
RegExp(Di.source,"g");function Yc(t){return function(){return t}}function 
Fc(t){return function(e){return t(e)+""}}function xr(t,e){var 
n=Di.lastIndex=Oi.lastIndex=0,r,i,o,a=-1,u=[],f=[];for(t=t+"",e=e+"";(r=Di.exec(t))&&(i=Oi.exec(e));)(o=i.index)>n&&(o=e.slice(n,o),u[a]?u[a]+=o:u[++a]=o),(r=r[0])===(i=i[0])?u[a]?u[a]+=i:u[++a]=i:(u[++a]=null,f.push({i:a,x:j(r,i)})),n=Oi.lastIndex;return 
n<e.length&&(o=e.slice(n),u[a]?u[a]+=o:u[++a]=o),u.length<2?f[0]?Fc(f[0].x):Yc(e):(e=f.length,function(s){for(var 
l=0,c;l<e;++l)u[(c=f[l]).i]=c.x(s);return u.join("")})}var 
yu=180/Math.PI,vr={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function 
Ui(t,e,n,r,i,o){var 
a,u,f;return(a=Math.sqrt(t*t+e*e))&&(t/=a,e/=a),(f=t*n+e*r)&&(n-=t*f,r-=e*f),(u=Math.sqrt(n*n+r*r))&&(n/=u,r/=u,f/=u),t*r<e*n&&(t=-t,e=-e,f=-f,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(e,t)*yu,skewX:Math.atan(f)*yu,scaleX:a,scaleY:u}}var 
wn,Yi,_u,yr;function wu(t){return 
t==="none"?vr:(wn||(wn=document.createElement("DIV"),Yi=document.documentElement,_u=document.defaultView),wn.style.transform=t,t=_u.getComputedStyle(Yi.appendChild(wn),null).getPropertyValue("transform"),Yi.removeChild(wn),t=t.slice(7,-1).split(","),Ui(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))}function 
bu(t){return 
t==null?vr:(yr||(yr=document.createElementNS("http://www.w3.org/2000/svg","g")),yr.setAttribute("transform",t),(t=yr.transform.baseVal.consolidate())?(t=t.matrix,Ui(t.a,t.b,t.c,t.d,t.e,t.f)):vr)}function 
Mu(t,e,n,r){function i(s){return s.length?s.pop()+" ":""}function 
o(s,l,c,h,p,d){if(s!==c||l!==h){var 
m=p.push("translate(",null,e,null,n);d.push({i:m-4,x:j(s,c)},{i:m-2,x:j(l,h)})}else(c||h)&&p.push("translate("+c+e+h+n)}function 
a(s,l,c,h){s!==l?(s-l>180?l+=360:l-s>180&&(s+=360),h.push({i:c.push(i(c)+"rotate(",null,r)-2,x:j(s,l)})):l&&c.push(i(c)+"rotate("+l+r)}function 
u(s,l,c,h){s!==l?h.push({i:c.push(i(c)+"skewX(",null,r)-2,x:j(s,l)}):l&&c.push(i(c)+"skewX("+l+r)}function 
f(s,l,c,h,p,d){if(s!==c||l!==h){var 
m=p.push(i(p)+"scale(",null,",",null,")");d.push({i:m-4,x:j(s,c)},{i:m-2,x:j(l,h)})}else(c!==1||h!==1)&&p.push(i(p)+"scale("+c+","+h+")")}return 
function(s,l){var c=[],h=[];return 
s=t(s),l=t(l),o(s.translateX,s.translateY,l.translateX,l.translateY,c,h),a(s.rotate,l.rotate,c,h),u(s.skewX,l.skewX,c,h),f(s.scaleX,s.scaleY,l.scaleX,l.scaleY,c,h),s=l=null,function(p){for(var 
d=-1,m=h.length,g;++d<m;)c[(g=h[d]).i]=g.x(p);return c.join("")}}}var 
Fi=Mu(wu,"px, ","px)","deg)"),qi=Mu(bu,", ",")",")");function Su(t){return 
function(e,n){var 
r=t((e=gn(e)).h,(n=gn(n)).h),i=X(e.s,n.s),o=X(e.l,n.l),a=X(e.opacity,n.opacity);return 
function(u){return e.h=r(u),e.s=i(u),e.l=o(u),e.opacity=a(u),e+""}}}var 
Xc=Su(ze),Wc=Su(X);function Tu(t){return function(e,n){var 
r=t((e=xn(e)).h,(n=xn(n)).h),i=X(e.c,n.c),o=X(e.l,n.l),a=X(e.opacity,n.opacity);return 
function(u){return e.h=r(u),e.c=i(u),e.l=o(u),e.opacity=a(u),e+""}}}var 
Vc=Tu(ze),Gc=Tu(X);function Eu(t){return function e(n){n=+n;function 
r(i,o){var 
a=t((i=it(i)).h,(o=it(o)).h),u=X(i.s,o.s),f=X(i.l,o.l),s=X(i.opacity,o.opacity);return 
function(l){return 
i.h=a(l),i.s=u(l),i.l=f(Math.pow(l,n)),i.opacity=s(l),i+""}}return 
r.gamma=e,r}(1)}var Zc=Eu(ze),Le=Eu(X);var 
Oe=0,Mn=0,bn=0,ku=1e3,_r,Sn,wr=0,fe=0,br=0,Tn=typeof 
performance=="object"&&performance.now?performance:Date,Nu=typeof 
window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function 
se(){return fe||(Nu(Kc),fe=Tn.now()+br)}function Kc(){fe=0}function 
De(){this._call=this._time=this._next=null}De.prototype=En.prototype={constructor:De,restart:function(t,e,n){if(typeof 
t!="function")throw new TypeError("callback is not a 
function");n=(n==null?se():+n)+(e==null?0:+e),!this._next&&Sn!==this&&(Sn?Sn._next=this:_r=this,Sn=this),this._call=t,this._time=n,Bi()},stop:function(){this._call&&(this._call=null,this._time=1/0,Bi())}};function 
En(t,e,n){var r=new De;return r.restart(t,e,n),r}function 
Au(){se(),++Oe;for(var 
t=_r,e;t;)(e=fe-t._time)>=0&&t._call.call(null,e),t=t._next;--Oe}function 
Cu(){fe=(wr=Tn.now())+br,Oe=Mn=0;try{Au()}finally{Oe=0,jc(),fe=0}}function 
Jc(){var t=Tn.now(),e=t-wr;e>ku&&(br-=e,wr=t)}function jc(){for(var 
t,e=_r,n,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:_r=n);Sn=t,Bi(r)}function 
Bi(t){if(!Oe){Mn&&(Mn=clearTimeout(Mn));var 
e=t-fe;e>24?(t<1/0&&(Mn=setTimeout(Cu,t-Tn.now()-br)),bn&&(bn=clearInterval(bn))):(bn||(wr=Tn.now(),bn=setInterval(Jc,ku)),Oe=1,Nu(Cu))}}function 
Mr(t,e,n){var r=new De;return 
e=e==null?0:+e,r.restart(function(i){r.stop(),t(i+e)},e,n),r}var 
th=zt("start","end","interrupt"),eh=[],Pu=0,Xi=1,kn=2,Hi=3,Ru=4,Sr=5,Cn=6;function 
$t(t,e,n,r,i,o){var a=t.__transition;if(!a)t.__transition={};else if(n in 
a)return;nh(t,n,{name:e,index:r,group:i,on:th,tween:eh,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Pu})}function 
Nn(t,e){var n=G(t,e);if(n.state>Pu)throw new Error("too late; already 
scheduled");return n}function wt(t,e){var n=G(t,e);if(n.state>kn)throw new 
Error("too late; already started");return n}function G(t,e){var 
n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not 
found");return n}function nh(t,e,n){var 
r=t.__transition,i;r[e]=n,n.timer=En(o,0,n.time);function 
o(s){n.state=Xi,n.timer.restart(a,n.delay,n.time),n.delay<=s&&a(s-n.delay)}function 
a(s){var l,c,h,p;if(n.state!==Xi)return f();for(l in 
r)if(p=r[l],p.name===n.name){if(p.state===Hi)return 
Mr(a);p.state===Ru?(p.state=Cn,p.timer.stop(),p.on.call("interrupt",t,t.__data__,p.index,p.group),delete 
r[l]):+l<e&&(p.state=Cn,p.timer.stop(),delete 
r[l])}if(Mr(function(){n.state===Hi&&(n.state=Ru,n.timer.restart(u,n.delay,n.time),u(s))}),n.state=kn,n.on.call("start",t,t.__data__,n.index,n.group),n.state===kn){for(n.state=Hi,i=new 
Array(h=n.tween.length),l=0,c=-1;l<h;++l)(p=n.tween[l].value.call(t,t.__data__,n.index,n.group))&&(i[++c]=p);i.length=c+1}}function 
u(s){for(var 
l=s<n.duration?n.ease.call(null,s/n.duration):(n.timer.restart(f),n.state=Sr,1),c=-1,h=i.length;++c<h;)i[c].call(null,l);n.state===Sr&&(n.on.call("end",t,t.__data__,n.index,n.group),f())}function 
f(){n.state=Cn,n.timer.stop(),delete r[e];for(var s in r)return;delete 
t.__transition}}function An(t,e){var 
n=t.__transition,r,i,o=!0,a;if(!!n){e=e==null?null:e+"";for(a in 
n){if((r=n[a]).name!==e){o=!1;continue}i=r.state>kn&&r.state<Sr,r.state=Cn,r.timer.stop(),i&&r.on.call("interrupt",t,t.__data__,r.index,r.group),delete 
n[a]}o&&delete t.__transition}}function Iu(t){return 
this.each(function(){An(this,t)})}function rh(t,e){var n,r;return 
function(){var i=wt(this,t),o=i.tween;if(o!==n){r=n=o;for(var 
a=0,u=r.length;a<u;++a)if(r[a].name===e){r=r.slice(),r.splice(a,1);break}}i.tween=r}}function 
ih(t,e,n){var r,i;if(typeof n!="function")throw new Error;return 
function(){var o=wt(this,t),a=o.tween;if(a!==r){i=(r=a).slice();for(var 
u={name:e,value:n},f=0,s=i.length;f<s;++f)if(i[f].name===e){i[f]=u;break}f===s&&i.push(u)}o.tween=i}}function 
zu(t,e){var n=this._id;if(t+="",arguments.length<2){for(var 
r=G(this.node(),n).tween,i=0,o=r.length,a;i<o;++i)if((a=r[i]).name===t)return 
a.value;return null}return this.each((e==null?rh:ih)(n,t,e))}function 
Ue(t,e,n){var r=t._id;return t.each(function(){var 
i=wt(this,r);(i.value||(i.value={}))[e]=n.apply(this,arguments)}),function(i){return 
G(i,r).value[e]}}function Tr(t,e){var n;return(typeof e=="number"?j:e 
instanceof Ut?_n:(n=Ut(e))?(e=n,_n):xr)(t,e)}function oh(t){return 
function(){this.removeAttribute(t)}}function ah(t){return 
function(){this.removeAttributeNS(t.space,t.local)}}function uh(t,e,n){var 
r,i;return function(){var o=this.getAttribute(t);return 
o===n?null:o===r?i:i=e(r=o,n)}}function fh(t,e,n){var r,i;return 
function(){var o=this.getAttributeNS(t.space,t.local);return 
o===n?null:o===r?i:i=e(r=o,n)}}function sh(t,e,n){var r,i,o;return 
function(){var a,u=n(this);return u==null?void 
this.removeAttribute(t):(a=this.getAttribute(t),a===u?null:a===r&&u===i?o:o=e(r=a,i=u))}}function 
lh(t,e,n){var r,i,o;return function(){var a,u=n(this);return u==null?void 
this.removeAttributeNS(t.space,t.local):(a=this.getAttributeNS(t.space,t.local),a===u?null:a===r&&u===i?o:o=e(r=a,i=u))}}function 
Lu(t,e){var n=Lt(t),r=n==="transform"?qi:Tr;return this.attrTween(t,typeof 
e=="function"?(n.local?lh:sh)(n,r,Ue(this,"attr."+t,e)):e==null?(n.local?ah:oh)(n):(n.local?fh:uh)(n,r,e+""))}function 
ch(t,e){function n(){var r=this,i=e.apply(r,arguments);return 
i&&function(o){r.setAttributeNS(t.space,t.local,i(o))}}return 
n._value=e,n}function hh(t,e){function n(){var 
r=this,i=e.apply(r,arguments);return 
i&&function(o){r.setAttribute(t,i(o))}}return n._value=e,n}function 
Ou(t,e){var 
n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return 
this.tween(n,null);if(typeof e!="function")throw new Error;var 
r=Lt(t);return this.tween(n,(r.local?ch:hh)(r,e))}function ph(t,e){return 
function(){Nn(this,t).delay=+e.apply(this,arguments)}}function 
mh(t,e){return e=+e,function(){Nn(this,t).delay=e}}function Du(t){var 
e=this._id;return arguments.length?this.each((typeof 
t=="function"?ph:mh)(e,t)):G(this.node(),e).delay}function dh(t,e){return 
function(){wt(this,t).duration=+e.apply(this,arguments)}}function 
gh(t,e){return e=+e,function(){wt(this,t).duration=e}}function Uu(t){var 
e=this._id;return arguments.length?this.each((typeof 
t=="function"?dh:gh)(e,t)):G(this.node(),e).duration}function 
xh(t,e){if(typeof e!="function")throw new Error;return 
function(){wt(this,t).ease=e}}function Yu(t){var e=this._id;return 
arguments.length?this.each(xh(e,t)):G(this.node(),e).ease}function 
Fu(t){typeof t!="function"&&(t=cn(t));for(var 
e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var 
o=e[i],a=o.length,u=r[i]=[],f,s=0;s<a;++s)(f=o[s])&&t.call(f,f.__data__,s,o)&&u.push(f);return 
new rt(r,this._parents,this._name,this._id)}function 
qu(t){if(t._id!==this._id)throw new Error;for(var 
e=this._groups,n=t._groups,r=e.length,i=n.length,o=Math.min(r,i),a=new 
Array(r),u=0;u<o;++u)for(var f=e[u],s=n[u],l=f.length,c=a[u]=new 
Array(l),h,p=0;p<l;++p)(h=f[p]||s[p])&&(c[p]=h);for(;u<r;++u)a[u]=e[u];return 
new rt(a,this._parents,this._name,this._id)}function 
vh(t){return(t+"").trim().split(/^|\s+/).every(function(e){var 
n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function 
yh(t,e,n){var r,i,o=vh(e)?Nn:wt;return function(){var 
a=o(this,t),u=a.on;u!==r&&(i=(r=u).copy()).on(e,n),a.on=i}}function 
Bu(t,e){var n=this._id;return 
arguments.length<2?G(this.node(),n).on.on(t):this.each(yh(n,t,e))}function 
_h(t){return function(){var e=this.parentNode;for(var n in 
this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function 
Hu(){return this.on("end.remove",_h(this._id))}function Xu(t){var 
e=this._name,n=this._id;typeof t!="function"&&(t=oe(t));for(var 
r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var 
u=r[a],f=u.length,s=o[a]=new 
Array(f),l,c,h=0;h<f;++h)(l=u[h])&&(c=t.call(l,l.__data__,h,u))&&("__data__"in 
l&&(c.__data__=l.__data__),s[h]=c,$t(s[h],e,n,h,s,G(l,n)));return new 
rt(o,this._parents,e,n)}function Wu(t){var e=this._name,n=this._id;typeof 
t!="function"&&(t=ln(t));for(var 
r=this._groups,i=r.length,o=[],a=[],u=0;u<i;++u)for(var 
f=r[u],s=f.length,l,c=0;c<s;++c)if(l=f[c]){for(var 
h=t.call(l,l.__data__,c,f),p,d=G(l,n),m=0,g=h.length;m<g;++m)(p=h[m])&&$t(p,e,n,m,h,d);o.push(h),a.push(l)}return 
new rt(o,a,e,n)}var wh=Ot.prototype.constructor;function Vu(){return new 
wh(this._groups,this._parents)}function bh(t,e){var n,r,i;return 
function(){var 
o=Xt(this,t),a=(this.style.removeProperty(t),Xt(this,t));return 
o===a?null:o===n&&a===r?i:i=e(n=o,r=a)}}function Mh(t){return 
function(){this.style.removeProperty(t)}}function Sh(t,e,n){var r,i;return 
function(){var o=Xt(this,t);return o===n?null:o===r?i:i=e(r=o,n)}}function 
Th(t,e,n){var r,i,o;return function(){var a=Xt(this,t),u=n(this);return 
u==null&&(u=(this.style.removeProperty(t),Xt(this,t))),a===u?null:a===r&&u===i?o:o=e(r=a,i=u)}}function 
Gu(t,e,n){var r=(t+="")=="transform"?Fi:Tr;return 
e==null?this.styleTween(t,bh(t,r)).on("end.style."+t,Mh(t)):this.styleTween(t,typeof 
e=="function"?Th(t,r,Ue(this,"style."+t,e)):Sh(t,r,e+""),n)}function 
Eh(t,e,n){function r(){var i=this,o=e.apply(i,arguments);return 
o&&function(a){i.style.setProperty(t,o(a),n)}}return r._value=e,r}function 
Zu(t,e,n){var 
r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(e==null)return 
this.tween(r,null);if(typeof e!="function")throw new Error;return 
this.tween(r,Eh(t,e,n??""))}function Ch(t){return 
function(){this.textContent=t}}function kh(t){return function(){var 
e=t(this);this.textContent=e??""}}function $u(t){return 
this.tween("text",typeof 
t=="function"?kh(Ue(this,"text",t)):Ch(t==null?"":t+""))}function 
Qu(){for(var 
t=this._name,e=this._id,n=Er(),r=this._groups,i=r.length,o=0;o<i;++o)for(var 
a=r[o],u=a.length,f,s=0;s<u;++s)if(f=a[s]){var 
l=G(f,e);$t(f,t,n,s,a,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return 
new rt(r,this._parents,t,n)}var Nh=0;function 
rt(t,e,n,r){this._groups=t,this._parents=e,this._name=n,this._id=r}function 
Wi(t){return Ot().transition(t)}function Er(){return++Nh}var 
Ye=Ot.prototype;rt.prototype=Wi.prototype={constructor:rt,select:Xu,selectAll:Wu,filter:Fu,merge:qu,selection:Vu,transition:Qu,call:Ye.call,nodes:Ye.nodes,node:Ye.node,size:Ye.size,empty:Ye.empty,each:Ye.each,on:Bu,attr:Lu,attrTween:Ou,style:Gu,styleTween:Zu,text:$u,remove:Hu,tween:zu,delay:Du,duration:Uu,ease:Yu};function 
Cr(t){return+t}function Fe(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var 
Vi=3,Ah=function t(e){e=+e;function n(r){return Math.pow(r,e)}return 
n.exponent=t,n}(Vi),Rh=function t(e){e=+e;function n(r){return 
1-Math.pow(1-r,e)}return n.exponent=t,n}(Vi),Ku=function 
t(e){e=+e;function 
n(r){return((r*=2)<=1?Math.pow(r,e):2-Math.pow(2-r,e))/2}return 
n.exponent=t,n}(Vi);var Ph=Math.PI,mb=Ph/2;var 
Ju=.36363636363636365,vb=6/11,yb=8/11,_b=3/4,wb=9/11,bb=10/11,Mb=15/16,Sb=21/22,Tb=63/64,Eb=1/Ju/Ju;var 
Gi=1.70158,Ih=function t(e){e=+e;function n(r){return 
r*r*((e+1)*r-e)}return n.overshoot=t,n}(Gi),zh=function t(e){e=+e;function 
n(r){return--r*r*((e+1)*r+e)+1}return n.overshoot=t,n}(Gi),ju=function 
t(e){e=+e;function 
n(r){return((r*=2)<1?r*r*((e+1)*r-e):(r-=2)*r*((e+1)*r+e)+2)/2}return 
n.overshoot=t,n}(Gi);var qe=2*Math.PI,Zi=1,$i=.3,Lh=function t(e,n){var 
r=Math.asin(1/(e=Math.max(1,e)))*(n/=qe);function i(o){return 
e*Math.pow(2,10*--o)*Math.sin((r-o)/n)}return 
i.amplitude=function(o){return t(o,n*qe)},i.period=function(o){return 
t(e,o)},i}(Zi,$i),tf=function t(e,n){var 
r=Math.asin(1/(e=Math.max(1,e)))*(n/=qe);function i(o){return 
1-e*Math.pow(2,-10*(o=+o))*Math.sin((o+r)/n)}return 
i.amplitude=function(o){return t(o,n*qe)},i.period=function(o){return 
t(e,o)},i}(Zi,$i),Oh=function t(e,n){var 
r=Math.asin(1/(e=Math.max(1,e)))*(n/=qe);function 
i(o){return((o=o*2-1)<0?e*Math.pow(2,10*o)*Math.sin((r-o)/n):2-e*Math.pow(2,-10*o)*Math.sin((r+o)/n))/2}return 
i.amplitude=function(o){return t(o,n*qe)},i.period=function(o){return 
t(e,o)},i}(Zi,$i);var Qi={time:null,delay:0,duration:250,ease:Fe};function 
Bh(t,e){for(var 
n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))return 
Qi.time=se(),Qi;return n}function ef(t){var e,n;t instanceof 
rt?(e=t._id,t=t._name):(e=Er(),(n=Qi).time=se(),t=t==null?null:t+"");for(var 
r=this._groups,i=r.length,o=0;o<i;++o)for(var 
a=r[o],u=a.length,f,s=0;s<u;++s)(f=a[s])&&$t(f,t,e,s,a,n||Bh(f,e));return 
new 
rt(r,this._parents,t,e)}Ot.prototype.interrupt=Iu;Ot.prototype.transition=ef;var 
P3={name:"x",handles:["e","w"].map(Ki),input:function(t,e){return 
t&&[[t[0],e[0][1]],[t[1],e[1][1]]]},output:function(t){return 
t&&[t[0][0],t[1][0]]}},I3={name:"y",handles:["n","s"].map(Ki),input:function(t,e){return 
t&&[[e[0][0],t[0]],[e[1][0],t[1]]]},output:function(t){return 
t&&[t[0][1],t[1][1]]}},z3={name:"xy",handles:["n","e","s","w","nw","ne","se","sw"].map(Ki),input:function(t){return 
t},output:function(t){return t}};function Ki(t){return{type:t}}var 
nf=Math.PI,Hh=nf/2,Xh=nf*2;var Wh=Array.prototype.slice;var 
Ji=Math.PI,ji=2*Ji,le=1e-6,Vh=ji-le;function 
to(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function 
rf(){return new 
to}to.prototype=rf.prototype={constructor:to,moveTo:function(t,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,e){this._+="L"+(this._x1=+t)+","+(this._y1=+e)},quadraticCurveTo:function(t,e,n,r){this._+="Q"+ 
+t+","+ 
+e+","+(this._x1=+n)+","+(this._y1=+r)},bezierCurveTo:function(t,e,n,r,i,o){this._+="C"+ 
+t+","+ +e+","+ +n+","+ 
+r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,e,n,r,i){t=+t,e=+e,n=+n,r=+r,i=+i;var 
o=this._x1,a=this._y1,u=n-t,f=r-e,s=o-t,l=a-e,c=s*s+l*l;if(i<0)throw new 
Error("negative radius: 
"+i);if(this._x1===null)this._+="M"+(this._x1=t)+","+(this._y1=e);else 
if(c>le)if(!(Math.abs(l*u-f*s)>le)||!i)this._+="L"+(this._x1=t)+","+(this._y1=e);else{var 
h=n-o,p=r-a,d=u*u+f*f,m=h*h+p*p,g=Math.sqrt(d),x=Math.sqrt(c),_=i*Math.tan((Ji-Math.acos((d+c-m)/(2*g*x)))/2),w=_/x,y=_/g;Math.abs(w-1)>le&&(this._+="L"+(t+w*s)+","+(e+w*l)),this._+="A"+i+","+i+",0,0,"+ 
+(l*h>s*p)+","+(this._x1=t+y*u)+","+(this._y1=e+y*f)}},arc:function(t,e,n,r,i,o){t=+t,e=+e,n=+n;var 
a=n*Math.cos(r),u=n*Math.sin(r),f=t+a,s=e+u,l=1^o,c=o?r-i:i-r;if(n<0)throw 
new Error("negative radius: 
"+n);this._x1===null?this._+="M"+f+","+s:(Math.abs(this._x1-f)>le||Math.abs(this._y1-s)>le)&&(this._+="L"+f+","+s),n&&(c<0&&(c=c%ji+ji),c>Vh?this._+="A"+n+","+n+",0,1,"+l+","+(t-a)+","+(e-u)+"A"+n+","+n+",0,1,"+l+","+(this._x1=f)+","+(this._y1=s):c>le&&(this._+="A"+n+","+n+",0,"+ 
+(c>=Ji)+","+l+","+(this._x1=t+n*Math.cos(i))+","+(this._y1=e+n*Math.sin(i))))},rect:function(t,e,n,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)+"h"+ 
+n+"v"+ +r+"h"+-n+"Z"},toString:function(){return this._}};var Ft=rf;var 
gt="$";function 
kr(){}kr.prototype=of.prototype={constructor:kr,has:function(t){return 
gt+t in this},get:function(t){return this[gt+t]},set:function(t,e){return 
this[gt+t]=e,this},remove:function(t){var e=gt+t;return e in this&&delete 
this[e]},clear:function(){for(var t in this)t[0]===gt&&delete 
this[t]},keys:function(){var t=[];for(var e in 
this)e[0]===gt&&t.push(e.slice(1));return t},values:function(){var 
t=[];for(var e in this)e[0]===gt&&t.push(this[e]);return 
t},entries:function(){var t=[];for(var e in 
this)e[0]===gt&&t.push({key:e.slice(1),value:this[e]});return 
t},size:function(){var t=0;for(var e in this)e[0]===gt&&++t;return 
t},empty:function(){for(var t in 
this)if(t[0]===gt)return!1;return!0},each:function(t){for(var e in 
this)e[0]===gt&&t(this[e],e.slice(1),this)}};function of(t,e){var n=new 
kr;if(t instanceof kr)t.each(function(u,f){n.set(f,u)});else 
if(Array.isArray(t)){var 
r=-1,i=t.length,o;if(e==null)for(;++r<i;)n.set(r,t[r]);else 
for(;++r<i;)n.set(e(o=t[r],r,t),o)}else if(t)for(var a in 
t)n.set(a,t[a]);return n}var qt=of;function Nr(){}var 
ce=qt.prototype;Nr.prototype=Gh.prototype={constructor:Nr,has:ce.has,add:function(t){return 
t+="",this[gt+t]=t,this},remove:ce.remove,clear:ce.clear,values:ce.keys,size:ce.size,empty:ce.empty,each:ce.each};function 
Gh(t,e){var n=new Nr;if(t instanceof Nr)t.each(function(o){n.add(o)});else 
if(t){var r=-1,i=t.length;if(e==null)for(;++r<i;)n.add(t[r]);else 
for(;++r<i;)n.add(e(t[r],r,t))}return n}var 
af={},eo={},no=34,Rn=10,ro=13;function uf(t){return new 
Function("d","return {"+t.map(function(e,n){return JSON.stringify(e)+": 
d["+n+"]"}).join(",")+"}")}function Zh(t,e){var n=uf(t);return 
function(r,i){return e(n(r),i,t)}}function $h(t){var 
e=Object.create(null),n=[];return t.forEach(function(r){for(var i in r)i 
in e||n.push(e[i]=i)}),n}function Pn(t){var e=new RegExp('["'+t+`
\r]`),n=t.charCodeAt(0);function r(s,l){var 
c,h,p=i(s,function(d,m){if(c)return 
c(d,m-1);h=d,c=l?Zh(d,l):uf(d)});return p.columns=h||[],p}function 
i(s,l){var 
c=[],h=s.length,p=0,d=0,m,g=h<=0,x=!1;s.charCodeAt(h-1)===Rn&&--h,s.charCodeAt(h-1)===ro&&--h;function 
_(){if(g)return eo;if(x)return x=!1,af;var 
y,M=p,S;if(s.charCodeAt(M)===no){for(;p++<h&&s.charCodeAt(p)!==no||s.charCodeAt(++p)===no;);return(y=p)>=h?g=!0:(S=s.charCodeAt(p++))===Rn?x=!0:S===ro&&(x=!0,s.charCodeAt(p)===Rn&&++p),s.slice(M+1,y-1).replace(/""/g,'"')}for(;p<h;){if((S=s.charCodeAt(y=p++))===Rn)x=!0;else 
if(S===ro)x=!0,s.charCodeAt(p)===Rn&&++p;else if(S!==n)continue;return 
s.slice(M,y)}return g=!0,s.slice(M,h)}for(;(m=_())!==eo;){for(var 
w=[];m!==af&&m!==eo;)w.push(m),m=_();l&&(w=l(w,d++))==null||c.push(w)}return 
c}function o(s,l){return 
l==null&&(l=$h(s)),[l.map(f).join(t)].concat(s.map(function(c){return 
l.map(function(h){return f(c[h])}).join(t)})).join(`
`)}function a(s){return s.map(u).join(`
`)}function u(s){return s.map(f).join(t)}function f(s){return 
s==null?"":e.test(s+="")?'"'+s.replace(/"/g,'""')+'"':s}return{parse:r,parseRows:i,format:o,formatRows:a}}var 
Ar=Pn(","),io=Ar.parse,Qh=Ar.parseRows,Kh=Ar.format,Jh=Ar.formatRows;var 
Rr=Pn("	
"),oo=Rr.parse,jh=Rr.parseRows,tp=Rr.format,ep=Rr.formatRows;function 
ff(t){var e=+this._x.call(null,t),n=+this._y.call(null,t);return 
sf(this.cover(e,n),e,n,t)}function 
sf(t,e,n,r){if(isNaN(e)||isNaN(n))return t;var 
i,o=t._root,a={data:r},u=t._x0,f=t._y0,s=t._x1,l=t._y1,c,h,p,d,m,g,x,_;if(!o)return 
t._root=a,t;for(;o.length;)if((m=e>=(c=(u+s)/2))?u=c:s=c,(g=n>=(h=(f+l)/2))?f=h:l=h,i=o,!(o=o[x=g<<1|m]))return 
i[x]=a,t;if(p=+t._x.call(null,o.data),d=+t._y.call(null,o.data),e===p&&n===d)return 
a.next=o,i?i[x]=a:t._root=a,t;do i=i?i[x]=new Array(4):t._root=new 
Array(4),(m=e>=(c=(u+s)/2))?u=c:s=c,(g=n>=(h=(f+l)/2))?f=h:l=h;while((x=g<<1|m)===(_=(d>=h)<<1|p>=c));return 
i[_]=o,i[x]=a,t}function lf(t){var e,n,r=t.length,i,o,a=new Array(r),u=new 
Array(r),f=1/0,s=1/0,l=-1/0,c=-1/0;for(n=0;n<r;++n)isNaN(i=+this._x.call(null,e=t[n]))||isNaN(o=+this._y.call(null,e))||(a[n]=i,u[n]=o,i<f&&(f=i),i>l&&(l=i),o<s&&(s=o),o>c&&(c=o));for(l<f&&(f=this._x0,l=this._x1),c<s&&(s=this._y0,c=this._y1),this.cover(f,s).cover(l,c),n=0;n<r;++n)sf(this,a[n],u[n],t[n]);return 
this}function cf(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var 
n=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(n))i=(n=Math.floor(t))+1,o=(r=Math.floor(e))+1;else 
if(n>t||t>i||r>e||e>o){var 
a=i-n,u=this._root,f,s;switch(s=(e<(r+o)/2)<<1|t<(n+i)/2){case 0:{do f=new 
Array(4),f[s]=u,u=f;while(a*=2,i=n+a,o=r+a,t>i||e>o);break}case 1:{do 
f=new Array(4),f[s]=u,u=f;while(a*=2,n=i-a,o=r+a,n>t||e>o);break}case 
2:{do f=new 
Array(4),f[s]=u,u=f;while(a*=2,i=n+a,r=o-a,t>i||r>e);break}case 3:{do 
f=new 
Array(4),f[s]=u,u=f;while(a*=2,n=i-a,r=o-a,n>t||r>e);break}}this._root&&this._root.length&&(this._root=u)}else 
return this;return 
this._x0=n,this._y0=r,this._x1=i,this._y1=o,this}function hf(){var 
t=[];return this.visit(function(e){if(!e.length)do 
t.push(e.data);while(e=e.next)}),t}function pf(t){return 
arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 
0:[[this._x0,this._y0],[this._x1,this._y1]]}function 
Q(t,e,n,r,i){this.node=t,this.x0=e,this.y0=n,this.x1=r,this.y1=i}function 
mf(t,e,n){var 
r,i=this._x0,o=this._y0,a,u,f,s,l=this._x1,c=this._y1,h=[],p=this._root,d,m;for(p&&h.push(new 
Q(p,i,o,l,c)),n==null?n=1/0:(i=t-n,o=e-n,l=t+n,c=e+n,n*=n);d=h.pop();)if(!(!(p=d.node)||(a=d.x0)>l||(u=d.y0)>c||(f=d.x1)<i||(s=d.y1)<o))if(p.length){var 
g=(a+f)/2,x=(u+s)/2;h.push(new Q(p[3],g,x,f,s),new Q(p[2],a,x,g,s),new 
Q(p[1],g,u,f,x),new 
Q(p[0],a,u,g,x)),(m=(e>=x)<<1|t>=g)&&(d=h[h.length-1],h[h.length-1]=h[h.length-1-m],h[h.length-1-m]=d)}else{var 
_=t-+this._x.call(null,p.data),w=e-+this._y.call(null,p.data),y=_*_+w*w;if(y<n){var 
M=Math.sqrt(n=y);i=t-M,o=e-M,l=t+M,c=e+M,r=p.data}}return r}function 
df(t){if(isNaN(l=+this._x.call(null,t))||isNaN(c=+this._y.call(null,t)))return 
this;var 
e,n=this._root,r,i,o,a=this._x0,u=this._y0,f=this._x1,s=this._y1,l,c,h,p,d,m,g,x;if(!n)return 
this;if(n.length)for(;;){if((d=l>=(h=(a+f)/2))?a=h:f=h,(m=c>=(p=(u+s)/2))?u=p:s=p,e=n,!(n=n[g=m<<1|d]))return 
this;if(!n.length)break;(e[g+1&3]||e[g+2&3]||e[g+3&3])&&(r=e,x=g)}for(;n.data!==t;)if(i=n,!(n=n.next))return 
this;return(o=n.next)&&delete n.next,i?(o?i.next=o:delete 
i.next,this):e?(o?e[g]=o:delete 
e[g],(n=e[0]||e[1]||e[2]||e[3])&&n===(e[3]||e[2]||e[1]||e[0])&&!n.length&&(r?r[x]=n:this._root=n),this):(this._root=o,this)}function 
gf(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return 
this}function xf(){return this._root}function vf(){var t=0;return 
this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function 
yf(t){var e=[],n,r=this._root,i,o,a,u,f;for(r&&e.push(new 
Q(r,this._x0,this._y0,this._x1,this._y1));n=e.pop();)if(!t(r=n.node,o=n.x0,a=n.y0,u=n.x1,f=n.y1)&&r.length){var 
s=(o+u)/2,l=(a+f)/2;(i=r[3])&&e.push(new 
Q(i,s,l,u,f)),(i=r[2])&&e.push(new Q(i,o,l,s,f)),(i=r[1])&&e.push(new 
Q(i,s,a,u,l)),(i=r[0])&&e.push(new Q(i,o,a,s,l))}return this}function 
_f(t){var e=[],n=[],r;for(this._root&&e.push(new 
Q(this._root,this._x0,this._y0,this._x1,this._y1));r=e.pop();){var 
i=r.node;if(i.length){var 
o,a=r.x0,u=r.y0,f=r.x1,s=r.y1,l=(a+f)/2,c=(u+s)/2;(o=i[0])&&e.push(new 
Q(o,a,u,l,c)),(o=i[1])&&e.push(new Q(o,l,u,f,c)),(o=i[2])&&e.push(new 
Q(o,a,c,l,s)),(o=i[3])&&e.push(new 
Q(o,l,c,f,s))}n.push(r)}for(;r=n.pop();)t(r.node,r.x0,r.y0,r.x1,r.y1);return 
this}function wf(t){return t[0]}function bf(t){return 
arguments.length?(this._x=t,this):this._x}function Mf(t){return 
t[1]}function Sf(t){return 
arguments.length?(this._y=t,this):this._y}function In(t,e,n){var r=new 
ao(e??wf,n??Mf,NaN,NaN,NaN,NaN);return t==null?r:r.addAll(t)}function 
ao(t,e,n,r,i,o){this._x=t,this._y=e,this._x0=n,this._y0=r,this._x1=i,this._y1=o,this._root=void 
0}function Tf(t){for(var 
e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var 
ot=In.prototype=ao.prototype;ot.copy=function(){var t=new 
ao(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,n,r;if(!e)return 
t;if(!e.length)return t._root=Tf(e),t;for(n=[{source:e,target:t._root=new 
Array(4)}];e=n.pop();)for(var 
i=0;i<4;++i)(r=e.source[i])&&(r.length?n.push({source:r,target:e.target[i]=new 
Array(4)}):e.target[i]=Tf(r));return 
t};ot.add=ff;ot.addAll=lf;ot.cover=cf;ot.data=hf;ot.extent=pf;ot.find=mf;ot.remove=df;ot.removeAll=gf;ot.root=xf;ot.size=vf;ot.visit=yf;ot.visitAfter=_f;ot.x=bf;ot.y=Sf;var 
R5=Math.PI*(3-Math.sqrt(5));function 
he(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return 
null;var 
n,r=t.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+t.slice(n+1)]}function 
Ln(t){return t=he(Math.abs(t)),t?t[1]:NaN}function Cf(t,e){return 
function(n,r){for(var 
i=n.length,o=[],a=0,u=t[0],f=0;i>0&&u>0&&(f+u+1>r&&(u=Math.max(1,r-f)),o.push(n.substring(i-=u,i+u)),!((f+=u+1)>r));)u=t[a=(a+1)%t.length];return 
o.reverse().join(e)}}function kf(t){return function(e){return 
e.replace(/[0-9]/g,function(n){return t[+n]})}}function 
Nf(t,e){t=t.toPrecision(e);t:for(var 
n=t.length,r=1,i=-1,o;r<n;++r)switch(t[r]){case".":i=o=r;break;case"0":i===0&&(i=r),o=r;break;case"e":break 
t;default:i>0&&(i=0);break}return i>0?t.slice(0,i)+t.slice(o+1):t}var 
uo;function Af(t,e){var n=he(t,e);if(!n)return t+"";var 
r=n[0],i=n[1],o=i-(uo=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,a=r.length;return 
o===a?r:o>a?r+new 
Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new 
Array(1-o).join("0")+he(t,Math.max(0,e+o-1))[0]}function fo(t,e){var 
n=he(t,e);if(!n)return t+"";var r=n[0],i=n[1];return i<0?"0."+new 
Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new 
Array(i-r.length+2).join("0")}var 
Pr={"":Nf,"%":function(t,e){return(t*100).toFixed(e)},b:function(t){return 
Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return 
Math.round(t).toString(10)},e:function(t,e){return 
t.toExponential(e)},f:function(t,e){return 
t.toFixed(e)},g:function(t,e){return 
t.toPrecision(e)},o:function(t){return 
Math.round(t).toString(8)},p:function(t,e){return 
fo(t*100,e)},r:fo,s:Af,X:function(t){return 
Math.round(t).toString(16).toUpperCase()},x:function(t){return 
Math.round(t).toString(16)}};var np=/^(?:(.)?([<>=^]))?([+\-\( 
])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;function pe(t){return new 
so(t)}pe.prototype=so.prototype;function so(t){if(!(e=np.exec(t)))throw 
new Error("invalid format: "+t);var e,n=e[1]||" 
",r=e[2]||">",i=e[3]||"-",o=e[4]||"",a=!!e[5],u=e[6]&&+e[6],f=!!e[7],s=e[8]&&+e[8].slice(1),l=e[9]||"";l==="n"?(f=!0,l="g"):Pr[l]||(l=""),(a||n==="0"&&r==="=")&&(a=!0,n="0",r="="),this.fill=n,this.align=r,this.sign=i,this.symbol=o,this.zero=a,this.width=u,this.comma=f,this.precision=s,this.type=l}so.prototype.toString=function(){return 
this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width==null?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision==null?"":"."+Math.max(0,this.precision|0))+this.type};function 
lo(t){return t}var 
Rf=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function 
co(t){var 
e=t.grouping&&t.thousands?Cf(t.grouping,t.thousands):lo,n=t.currency,r=t.decimal,i=t.numerals?kf(t.numerals):lo,o=t.percent||"%";function 
a(f){f=pe(f);var 
s=f.fill,l=f.align,c=f.sign,h=f.symbol,p=f.zero,d=f.width,m=f.comma,g=f.precision,x=f.type,_=h==="$"?n[0]:h==="#"&&/[boxX]/.test(x)?"0"+x.toLowerCase():"",w=h==="$"?n[1]:/[%p]/.test(x)?o:"",y=Pr[x],M=!x||/[defgprs%]/.test(x);g=g==null?x?6:12:/[gprs]/.test(x)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g));function 
S(T){var R=_,C=w,Y,H,E;if(x==="c")C=y(T)+C,T="";else{T=+T;var 
N=T<0;if(T=y(Math.abs(T),g),N&&+T==0&&(N=!1),R=(N?c==="("?c:"-":c==="-"||c==="("?"":c)+R,C=(x==="s"?Rf[8+uo/3]:"")+C+(N&&c==="("?")":""),M){for(Y=-1,H=T.length;++Y<H;)if(E=T.charCodeAt(Y),48>E||E>57){C=(E===46?r+T.slice(Y+1):T.slice(Y))+C,T=T.slice(0,Y);break}}}m&&!p&&(T=e(T,1/0));var 
st=R.length+T.length+C.length,W=st<d?new 
Array(d-st+1).join(s):"";switch(m&&p&&(T=e(W+T,W.length?d-C.length:1/0),W=""),l){case"<":T=R+T+C+W;break;case"=":T=R+W+T+C;break;case"^":T=W.slice(0,st=W.length>>1)+R+T+C+W.slice(st);break;default:T=W+R+T+C;break}return 
i(T)}return S.toString=function(){return f+""},S}function u(f,s){var 
l=a((f=pe(f),f.type="f",f)),c=Math.max(-8,Math.min(8,Math.floor(Ln(s)/3)))*3,h=Math.pow(10,-c),p=Rf[8+c/3];return 
function(d){return l(h*d)+p}}return{format:a,formatPrefix:u}}var 
Ir,zr,ho;po({decimal:".",thousands:",",grouping:[3],currency:["$",""]});function 
po(t){return Ir=co(t),zr=Ir.format,ho=Ir.formatPrefix,Ir}function 
ct(){return new Or}function 
Or(){this.reset()}Or.prototype={constructor:Or,reset:function(){this.s=this.t=0},add:function(t){Pf(Lr,t,this.t),Pf(this,Lr.s,this.s),this.s?this.t+=Lr.t:this.s=Lr.t},valueOf:function(){return 
this.s}};var Lr=new Or;function Pf(t,e,n){var 
r=t.s=e+n,i=r-e,o=r-i;t.t=e-o+(n-i)}var L=1e-6;var 
O=Math.PI,Z=O/2,Dr=O/4,Nt=O*2,me=180/O,at=O/180,B=Math.abs,bt=Math.atan,ht=Math.atan2,P=Math.cos;var 
Ur=Math.exp;var On=Math.log;var A=Math.sin;var 
tt=Math.sqrt,Dn=Math.tan;function mo(t){return 
t>1?0:t<-1?O:Math.acos(t)}function ut(t){return 
t>1?Z:t<-1?-Z:Math.asin(t)}function Mt(){}var ap=ct(),r6=ct();function 
de(t){var e=t[0],n=t[1],r=P(n);return[r*P(e),r*A(e),A(n)]}function 
Un(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function 
Yn(t){var e=tt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=e,t[1]/=e,t[2]/=e}var 
p6=ct();function 
zf(t,e){return[t>O?t-Nt:t<-O?t+Nt:t,e]}zf.invert=zf;function go(){var 
t=[],e;return{point:function(n,r){e.push([n,r])},lineStart:function(){t.push(e=[])},lineEnd:Mt,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var 
n=t;return t=[],e=null,n}}}function xo(t,e){return 
B(t[0]-e[0])<L&&B(t[1]-e[1])<L}function 
Yr(t,e,n,r){this.x=t,this.z=e,this.o=n,this.e=r,this.v=!1,this.n=this.p=null}function 
vo(t,e,n,r,i){var 
o=[],a=[],u,f;if(t.forEach(function(d){if(!((m=d.length-1)<=0)){var 
m,g=d[0],x=d[m],_;if(xo(g,x)){for(i.lineStart(),u=0;u<m;++u)i.point((g=d[u])[0],g[1]);i.lineEnd();return}o.push(_=new 
Yr(g,d,null,!0)),a.push(_.o=new Yr(g,null,_,!1)),o.push(_=new 
Yr(x,d,null,!1)),a.push(_.o=new 
Yr(x,null,_,!0))}}),!!o.length){for(a.sort(e),Lf(o),Lf(a),u=0,f=a.length;u<f;++u)a[u].e=n=!n;for(var 
s=o[0],l,c;;){for(var 
h=s,p=!0;h.v;)if((h=h.n)===s)return;l=h.z,i.lineStart();do{if(h.v=h.o.v=!0,h.e){if(p)for(u=0,f=l.length;u<f;++u)i.point((c=l[u])[0],c[1]);else 
r(h.x,h.n.x,1,i);h=h.n}else{if(p)for(l=h.p.z,u=l.length-1;u>=0;--u)i.point((c=l[u])[0],c[1]);else 
r(h.x,h.p.x,-1,i);h=h.p}h=h.o,l=h.z,p=!p}while(!h.v);i.lineEnd()}}}function 
Lf(t){if(!!(e=t.length)){for(var 
e,n=0,r=t[0],i;++n<e;)r.n=i=t[n],i.p=r,r=i;r.n=i=t[0],i.p=r}}var 
yo=ct();function _o(t,e){var 
n=e[0],r=e[1],i=[A(n),-P(n),0],o=0,a=0;yo.reset();for(var 
u=0,f=t.length;u<f;++u)if(!!(l=(s=t[u]).length))for(var 
s,l,c=s[l-1],h=c[0],p=c[1]/2+Dr,d=A(p),m=P(p),g=0;g<l;++g,h=_,d=y,m=M,c=x){var 
x=s[g],_=x[0],w=x[1]/2+Dr,y=A(w),M=P(w),S=_-h,T=S>=0?1:-1,R=T*S,C=R>O,Y=d*y;if(yo.add(ht(Y*T*A(R),m*M+Y*P(R))),o+=C?S+T*Nt:S,C^h>=n^_>=n){var 
H=Un(de(c),de(x));Yn(H);var E=Un(i,H);Yn(E);var 
N=(C^S>=0?-1:1)*ut(E[2]);(r>N||r===N&&(H[0]||H[1]))&&(a+=C^S>=0?1:-1)}}return(o<-L||o<L&&yo<-L)^a&1}function 
wo(t,e,n,r){return function(i){var 
o=e(i),a=go(),u=e(a),f=!1,s,l,c,h={point:p,lineStart:m,lineEnd:g,polygonStart:function(){h.point=x,h.lineStart=_,h.lineEnd=w,l=[],s=[]},polygonEnd:function(){h.point=p,h.lineStart=m,h.lineEnd=g,l=or(l);var 
y=_o(s,r);l.length?(f||(i.polygonStart(),f=!0),vo(l,lp,y,n,i)):y&&(f||(i.polygonStart(),f=!0),i.lineStart(),n(null,null,1,i),i.lineEnd()),f&&(i.polygonEnd(),f=!1),l=s=null},sphere:function(){i.polygonStart(),i.lineStart(),n(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function 
p(y,M){t(y,M)&&i.point(y,M)}function d(y,M){o.point(y,M)}function 
m(){h.point=d,o.lineStart()}function g(){h.point=p,o.lineEnd()}function 
x(y,M){c.push([y,M]),u.point(y,M)}function _(){u.lineStart(),c=[]}function 
w(){x(c[0][0],c[0][1]),u.lineEnd();var 
y=u.clean(),M=a.result(),S,T=M.length,R,C,Y;if(c.pop(),s.push(c),c=null,!!T){if(y&1){if(C=M[0],(R=C.length-1)>0){for(f||(i.polygonStart(),f=!0),i.lineStart(),S=0;S<R;++S)i.point((Y=C[S])[0],Y[1]);i.lineEnd()}return}T>1&&y&2&&M.push(M.pop().concat(M.shift())),l.push(M.filter(sp))}}return 
h}}function sp(t){return t.length>1}function 
lp(t,e){return((t=t.x)[0]<0?t[1]-Z-L:Z-t[1])-((e=e.x)[0]<0?e[1]-Z-L:Z-e[1])}var 
Of=wo(function(){return!0},cp,pp,[-O,-Z]);function cp(t){var 
e=NaN,n=NaN,r=NaN,i;return{lineStart:function(){t.lineStart(),i=1},point:function(o,a){var 
u=o>0?O:-O,f=B(o-e);B(f-O)<L?(t.point(e,n=(n+a)/2>0?Z:-Z),t.point(r,n),t.lineEnd(),t.lineStart(),t.point(u,n),t.point(o,n),i=0):r!==u&&f>=O&&(B(e-r)<L&&(e-=r*L),B(o-u)<L&&(o-=u*L),n=hp(e,n,o,a),t.point(r,n),t.lineEnd(),t.lineStart(),t.point(u,n),i=0),t.point(e=o,n=a),r=u},lineEnd:function(){t.lineEnd(),e=n=NaN},clean:function(){return 
2-i}}}function hp(t,e,n,r){var i,o,a=A(t-n);return 
B(a)>L?bt((A(e)*(o=P(r))*A(n)-A(r)*(i=P(e))*A(t))/(i*o*a)):(e+r)/2}function 
pp(t,e,n,r){var 
i;if(t==null)i=n*Z,r.point(-O,i),r.point(0,i),r.point(O,i),r.point(O,0),r.point(O,-i),r.point(0,-i),r.point(-O,-i),r.point(-O,0),r.point(-O,i);else 
if(B(t[0]-e[0])>L){var 
o=t[0]<e[0]?O:-O;i=n*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else 
r.point(e[0],e[1])}var mp=1e9,p4=-mp;var w4=ct();var F4=ct(),q4=ct();var 
xp=1/0;var X4=-xp;function 
Mo(t){this._context=t}Mo.prototype={_radius:4.5,pointRadius:function(t){return 
this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(t,e){switch(this._point){case 
0:{this._context.moveTo(t,e),this._point=1;break}case 
1:{this._context.lineTo(t,e);break}default:{this._context.moveTo(t+this._radius,e),this._context.arc(t,e,this._radius,0,Nt);break}}},result:Mt};var 
t7=ct();function 
So(){this._string=[]}So.prototype={_radius:4.5,_circle:Df(4.5),pointRadius:function(t){return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._string.push("Z"),this._point=NaN},point:function(t,e){switch(this._point){case 
0:{this._string.push("M",t,",",e),this._point=1;break}case 
1:{this._string.push("L",t,",",e);break}default:{this._circle==null&&(this._circle=Df(this._radius)),this._string.push("M",t,",",e,this._circle);break}}},result:function(){if(this._string.length){var 
t=this._string.join("");return this._string=[],t}else return 
null}};function Df(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 
0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function Fr(t){return 
function(e){var n=new To;for(var r in t)n[r]=t[r];return 
n.stream=e,n}}function 
To(){}To.prototype={constructor:To,point:function(t,e){this.stream.point(t,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var 
b7=P(30*at);var 
L7=Fr({point:function(t,e){this.stream.point(t*at,e*at)}});function 
qr(t){return function(e,n){var 
r=P(e),i=P(n),o=t(r*i);return[o*i*A(e),o*A(n)]}}function At(t){return 
function(e,n){var 
r=tt(e*e+n*n),i=t(r),o=A(i),a=P(i);return[ht(e*o,r*a),ut(r&&n*o/r)]}}var 
Vf=qr(function(t){return tt(2/(1+t))});Vf.invert=At(function(t){return 
2*ut(t/2)});var 
Gf=qr(function(t){return(t=mo(t))&&t/A(t)});Gf.invert=At(function(t){return 
t});function 
Eo(t,e){return[t,On(Dn((Z+e)/2))]}Eo.invert=function(t,e){return[t,2*bt(Ur(e))-Z]};function 
Br(t,e){return[t,e]}Br.invert=Br;function Zf(t,e){var 
n=P(e),r=P(t)*n;return[n*A(t)/r,A(e)/r]}Zf.invert=At(bt);function 
$f(t,e){var 
n=e*e,r=n*n;return[t*(.8707-.131979*n+r*(-.013791+r*(.003971*n-.001529*r))),e*(1.007226+n*(.015085+r*(-.044475+.028874*n-.005916*r)))]}$f.invert=function(t,e){var 
n=e,r=25,i;do{var 
o=n*n,a=o*o;n-=i=(n*(1.007226+o*(.015085+a*(-.044475+.028874*o-.005916*a)))-e)/(1.007226+o*(.015085*3+a*(-.044475*7+.028874*9*o-.005916*11*a)))}while(B(i)>L&&--r>0);return[t/(.8707+(o=n*n)*(-.131979+o*(-.013791+o*o*o*(.003971-.001529*o)))),n]};function 
Qf(t,e){return[P(e)*A(t),A(e)]}Qf.invert=At(ut);function Kf(t,e){var 
n=P(e),r=1+P(t)*n;return[n*A(t)/r,A(e)/r]}Kf.invert=At(function(t){return 
2*bt(t)});function 
Jf(t,e){return[On(Dn((Z+e)/2)),-t]}Jf.invert=function(t,e){return[-e,2*bt(Ur(t))-Z]};function 
Mp(t){var e=0,n=t.children,r=n&&n.length;if(!r)e=1;else 
for(;--r>=0;)e+=n[r].value;t.value=e}function jf(){return 
this.eachAfter(Mp)}function ts(t){var e=this,n,r=[e],i,o,a;do 
for(n=r.reverse(),r=[];e=n.pop();)if(t(e),i=e.children,i)for(o=0,a=i.length;o<a;++o)r.push(i[o]);while(r.length);return 
this}function es(t){for(var 
e=this,n=[e],r,i;e=n.pop();)if(t(e),r=e.children,r)for(i=r.length-1;i>=0;--i)n.push(r[i]);return 
this}function ns(t){for(var 
e=this,n=[e],r=[],i,o,a;e=n.pop();)if(r.push(e),i=e.children,i)for(o=0,a=i.length;o<a;++o)n.push(i[o]);for(;e=r.pop();)t(e);return 
this}function rs(t){return this.eachAfter(function(e){for(var 
n=+t(e.data)||0,r=e.children,i=r&&r.length;--i>=0;)n+=r[i].value;e.value=n})}function 
is(t){return 
this.eachBefore(function(e){e.children&&e.children.sort(t)})}function 
os(t){for(var e=this,n=Sp(e,t),r=[e];e!==n;)e=e.parent,r.push(e);for(var 
i=r.length;t!==n;)r.splice(i,0,t),t=t.parent;return r}function 
Sp(t,e){if(t===e)return t;var 
n=t.ancestors(),r=e.ancestors(),i=null;for(t=n.pop(),e=r.pop();t===e;)i=t,t=n.pop(),e=r.pop();return 
i}function as(){for(var t=this,e=[t];t=t.parent;)e.push(t);return 
e}function us(){var t=[];return 
this.each(function(e){t.push(e)}),t}function fs(){var t=[];return 
this.eachBefore(function(e){e.children||t.push(e)}),t}function ss(){var 
t=this,e=[];return 
t.each(function(n){n!==t&&e.push({source:n.parent,target:n})}),e}function 
Hr(t,e){var n=new 
ge(t),r=+t.value&&(n.value=t.value),i,o=[n],a,u,f,s;for(e==null&&(e=Ep);i=o.pop();)if(r&&(i.value=+i.data.value),(u=e(i.data))&&(s=u.length))for(i.children=new 
Array(s),f=s-1;f>=0;--f)o.push(a=i.children[f]=new 
ge(u[f])),a.parent=i,a.depth=i.depth+1;return n.eachBefore(ls)}function 
Tp(){return Hr(this).eachBefore(Cp)}function Ep(t){return 
t.children}function Cp(t){t.data=t.data.data}function ls(t){var e=0;do 
t.height=e;while((t=t.parent)&&t.height<++e)}function 
ge(t){this.data=t,this.depth=this.height=0,this.parent=null}ge.prototype=Hr.prototype={constructor:ge,count:jf,each:ts,eachAfter:ns,eachBefore:es,sum:rs,sort:is,path:os,ancestors:as,descendants:us,leaves:fs,links:ss,copy:Tp};var 
kp=Array.prototype.slice;function xe(t,e,n,r,i){for(var 
o=t.children,a,u=-1,f=o.length,s=t.value&&(r-e)/t.value;++u<f;)a=o[u],a.y0=n,a.y1=i,a.x0=e,a.x1=e+=a.value*s}function 
zp(t,e){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=e}zp.prototype=Object.create(ge.prototype);function 
He(t,e,n,r,i){for(var 
o=t.children,a,u=-1,f=o.length,s=t.value&&(i-n)/t.value;++u<f;)a=o[u],a.x0=e,a.x1=r,a.y0=n,a.y1=n+=a.value*s}var 
Co=(1+Math.sqrt(5))/2;function ko(t,e,n,r,i,o){for(var 
a=[],u=e.children,f,s,l=0,c=0,h=u.length,p,d,m=e.value,g,x,_,w,y,M,S;l<h;){p=i-n,d=o-r;do 
g=u[c++].value;while(!g&&c<h);for(x=_=g,M=Math.max(d/p,p/d)/(m*t),S=g*g*M,y=Math.max(_/S,S/x);c<h;++c){if(g+=s=u[c].value,s<x&&(x=s),s>_&&(_=s),S=g*g*M,w=Math.max(_/S,S/x),w>y){g-=s;break}y=w}a.push(f={value:g,dice:p<d,children:u.slice(l,c)}),f.dice?xe(f,n,r,i,m?r+=d*g/m:o):He(f,n,r,m?n+=p*g/m:i,o),m-=g,l=c}return 
a}var cs=function t(e){function n(r,i,o,a,u){ko(e,r,i,o,a,u)}return 
n.ratio=function(r){return t((r=+r)>1?r:1)},n}(Co);var Lp=function 
t(e){function n(r,i,o,a,u){if((f=r._squarify)&&f.ratio===e)for(var 
f,s,l,c,h=-1,p,d=f.length,m=r.value;++h<d;){for(s=f[h],l=s.children,c=s.value=0,p=l.length;c<p;++c)s.value+=l[c].value;s.dice?xe(s,i,o,a,o+=(u-o)*s.value/m):He(s,i,o,i+=(a-i)*s.value/m,u),m-=s.value}else 
r._squarify=f=ko(e,r,i,o,a,u),f.ratio=e}return n.ratio=function(r){return 
t((r=+r)>1?r:1)},n}(Co);var hs=[].slice;var Op={};function 
No(t){this._size=t,this._call=this._error=null,this._tasks=[],this._data=[],this._waiting=this._active=this._ended=this._start=0}No.prototype=Ro.prototype={constructor:No,defer:function(t){if(typeof 
t!="function")throw new Error("invalid callback");if(this._call)throw new 
Error("defer after await");if(this._error!=null)return this;var 
e=hs.call(arguments,1);return 
e.push(t),++this._waiting,this._tasks.push(e),ps(this),this},abort:function(){return 
this._error==null&&Ao(this,new 
Error("abort")),this},await:function(t){if(typeof t!="function")throw new 
Error("invalid callback");if(this._call)throw new Error("multiple 
await");return 
this._call=function(e,n){t.apply(null,[e].concat(n))},Xr(this),this},awaitAll:function(t){if(typeof 
t!="function")throw new Error("invalid callback");if(this._call)throw new 
Error("multiple await");return this._call=t,Xr(this),this}};function 
ps(t){if(!t._start)try{Dp(t)}catch(e){if(t._tasks[t._ended+t._active-1])Ao(t,e);else 
if(!t._data)throw e}}function 
Dp(t){for(;t._start=t._waiting&&t._active<t._size;){var 
e=t._ended+t._active,n=t._tasks[e],r=n.length-1,i=n[r];n[r]=Up(t,e),--t._waiting,++t._active,n=i.apply(null,n),t._tasks[e]&&(t._tasks[e]=n||Op)}}function 
Up(t,e){return 
function(n,r){!t._tasks[e]||(--t._active,++t._ended,t._tasks[e]=null,t._error==null&&(n!=null?Ao(t,n):(t._data[e]=r,t._waiting?ps(t):Xr(t))))}}function 
Ao(t,e){var n=t._tasks.length,r;for(t._error=e,t._data=void 
0,t._waiting=NaN;--n>=0;)if((r=t._tasks[n])&&(t._tasks[n]=null,r.abort))try{r.abort()}catch{}t._active=NaN,Xr(t)}function 
Xr(t){if(!t._active&&t._call){var e=t._data;t._data=void 
0,t._call(t._error,e)}}function Ro(t){if(t==null)t=1/0;else 
if(!((t=+t)>=1))throw new Error("invalid concurrency");return new 
No(t)}function vt(){return Math.random()}var Yp=function t(e){function 
n(r,i){return 
r=r==null?0:+r,i=i==null?1:+i,arguments.length===1?(i=r,r=0):i-=r,function(){return 
e()*i+r}}return n.source=t,n}(vt);var Po=function t(e){function n(r,i){var 
o,a;return r=r==null?0:+r,i=i==null?1:+i,function(){var 
u;if(o!=null)u=o,o=null;else do 
o=e()*2-1,u=e()*2-1,a=o*o+u*u;while(!a||a>1);return 
r+i*u*Math.sqrt(-2*Math.log(a)/a)}}return n.source=t,n}(vt);var 
Fp=function t(e){function n(){var 
r=Po.source(e).apply(this,arguments);return function(){return 
Math.exp(r())}}return n.source=t,n}(vt);var Io=function t(e){function 
n(r){return function(){for(var i=0,o=0;o<r;++o)i+=e();return i}}return 
n.source=t,n}(vt);var qp=function t(e){function n(r){var 
i=Io.source(e)(r);return function(){return i()/r}}return 
n.source=t,n}(vt);var Bp=function t(e){function n(r){return 
function(){return-Math.log(1-e())/r}}return n.source=t,n}(vt);function 
Fn(t,e){var n,r=zt("beforesend","progress","load","error"),i,o=qt(),a=new 
XMLHttpRequest,u=null,f=null,s,l,c=0;typeof 
XDomainRequest<"u"&&!("withCredentials"in 
a)&&/^(http(s)?:)?\/\//.test(t)&&(a=new XDomainRequest),"onload"in 
a?a.onload=a.onerror=a.ontimeout=h:a.onreadystatechange=function(p){a.readyState>3&&h(p)};function 
h(p){var 
d=a.status,m;if(!d&&Xp(a)||d>=200&&d<300||d===304){if(s)try{m=s.call(n,a)}catch(g){r.call("error",n,g);return}else 
m=a;r.call("load",n,m)}else 
r.call("error",n,p)}if(a.onprogress=function(p){r.call("progress",n,p)},n={header:function(p,d){return 
p=(p+"").toLowerCase(),arguments.length<2?o.get(p):(d==null?o.remove(p):o.set(p,d+""),n)},mimeType:function(p){return 
arguments.length?(i=p==null?null:p+"",n):i},responseType:function(p){return 
arguments.length?(l=p,n):l},timeout:function(p){return 
arguments.length?(c=+p,n):c},user:function(p){return 
arguments.length<1?u:(u=p==null?null:p+"",n)},password:function(p){return 
arguments.length<1?f:(f=p==null?null:p+"",n)},response:function(p){return 
s=p,n},get:function(p,d){return 
n.send("GET",p,d)},post:function(p,d){return 
n.send("POST",p,d)},send:function(p,d,m){return 
a.open(p,t,!0,u,f),i!=null&&!o.has("accept")&&o.set("accept",i+",*/*"),a.setRequestHeader&&o.each(function(g,x){a.setRequestHeader(x,g)}),i!=null&&a.overrideMimeType&&a.overrideMimeType(i),l!=null&&(a.responseType=l),c>0&&(a.timeout=c),m==null&&typeof 
d=="function"&&(m=d,d=null),m!=null&&m.length===1&&(m=Hp(m)),m!=null&&n.on("error",m).on("load",function(g){m(null,g)}),r.call("beforesend",n,a),a.send(d??null),n},abort:function(){return 
a.abort(),n},on:function(){var p=r.on.apply(r,arguments);return 
p===r?n:p}},e!=null){if(typeof e!="function")throw new Error("invalid 
callback: "+e);return n.get(e)}return n}function Hp(t){return 
function(e,n){t(e==null?n:null)}}function Xp(t){var 
e=t.responseType;return e&&e!=="text"?t.response:t.responseText}function 
Kt(t,e){return function(n,r){var 
i=Fn(n).mimeType(t).response(e);if(r!=null){if(typeof r!="function")throw 
new Error("invalid callback: "+r);return i.get(r)}return i}}var 
Wp=Kt("text/html",function(t){return 
document.createRange().createContextualFragment(t.responseText)});var 
Vp=Kt("application/json",function(t){return 
JSON.parse(t.responseText)});var Gp=Kt("text/plain",function(t){return 
t.responseText});var Zp=Kt("application/xml",function(t){var 
e=t.responseXML;if(!e)throw new Error("parse error");return e});function 
Wr(t,e){return function(n,r,i){arguments.length<3&&(i=r,r=null);var 
o=Fn(n).mimeType(t);return o.row=function(a){return 
arguments.length?o.response($p(e,r=a)):r},o.row(r),i?o.get(i):o}}function 
$p(t,e){return function(n){return t(n.responseText,e)}}var 
Qp=Wr("text/csv",io);var Kp=Wr("text/tab-separated-values",oo);var 
ms=Array.prototype,zo=ms.map,qn=ms.slice;var Uo=new Date,Yo=new 
Date;function z(t,e,n,r){function i(o){return t(o=new Date(+o)),o}return 
i.floor=i,i.ceil=function(o){return t(o=new 
Date(o-1)),e(o,1),t(o),o},i.round=function(o){var 
a=i(o),u=i.ceil(o);return o-a<u-o?a:u},i.offset=function(o,a){return 
e(o=new Date(+o),a==null?1:Math.floor(a)),o},i.range=function(o,a,u){var 
f=[],s;if(o=i.ceil(o),u=u==null?1:Math.floor(u),!(o<a)||!(u>0))return f;do 
f.push(s=new Date(+o)),e(o,u),t(o);while(s<o&&o<a);return 
f},i.filter=function(o){return 
z(function(a){if(a>=a)for(;t(a),!o(a);)a.setTime(a-1)},function(a,u){if(a>=a)if(u<0)for(;++u<=0;)for(;e(a,-1),!o(a););else 
for(;--u>=0;)for(;e(a,1),!o(a););})},n&&(i.count=function(o,a){return 
Uo.setTime(+o),Yo.setTime(+a),t(Uo),t(Yo),Math.floor(n(Uo,Yo))},i.every=function(o){return 
o=Math.floor(o),!isFinite(o)||!(o>0)?null:o>1?i.filter(r?function(a){return 
r(a)%o===0}:function(a){return i.count(0,a)%o===0}):i}),i}var 
Fo=z(function(){},function(t,e){t.setTime(+t+e)},function(t,e){return 
e-t});Fo.every=function(t){return 
t=Math.floor(t),!isFinite(t)||!(t>0)?null:t>1?z(function(e){e.setTime(Math.floor(e/t)*t)},function(e,n){e.setTime(+e+n*t)},function(e,n){return(n-e)/t}):Fo};var 
gs=Fo.range;var Bn=1e3,pt=6e4,Rt=36e5,Vr=864e5,Gr=6048e5;var 
nm=z(function(t){t.setTime(Math.floor(t/Bn)*Bn)},function(t,e){t.setTime(+t+e*Bn)},function(t,e){return(e-t)/Bn},function(t){return 
t.getUTCSeconds()});var xs=nm.range;var 
rm=z(function(t){t.setTime(Math.floor(t/pt)*pt)},function(t,e){t.setTime(+t+e*pt)},function(t,e){return(e-t)/pt},function(t){return 
t.getMinutes()});var im=rm.range;var om=z(function(t){var 
e=t.getTimezoneOffset()*pt%Rt;e<0&&(e+=Rt),t.setTime(Math.floor((+t-e)/Rt)*Rt+e)},function(t,e){t.setTime(+t+e*Rt)},function(t,e){return(e-t)/Rt},function(t){return 
t.getHours()});var am=om.range;var 
vs=z(function(t){t.setHours(0,0,0,0)},function(t,e){t.setDate(t.getDate()+e)},function(t,e){return(e-t-(e.getTimezoneOffset()-t.getTimezoneOffset())*pt)/Vr},function(t){return 
t.getDate()-1}),Hn=vs,um=vs.range;function ve(t){return 
z(function(e){e.setDate(e.getDate()-(e.getDay()+7-t)%7),e.setHours(0,0,0,0)},function(e,n){e.setDate(e.getDate()+n*7)},function(e,n){return(n-e-(n.getTimezoneOffset()-e.getTimezoneOffset())*pt)/Gr})}var 
Xe=ve(0),We=ve(1),ys=ve(2),_s=ve(3),Ve=ve(4),ws=ve(5),bs=ve(6),Ms=Xe.range,fm=We.range,sm=ys.range,lm=_s.range,cm=Ve.range,hm=ws.range,pm=bs.range;var 
mm=z(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,e){t.setMonth(t.getMonth()+e)},function(t,e){return 
e.getMonth()-t.getMonth()+(e.getFullYear()-t.getFullYear())*12},function(t){return 
t.getMonth()});var dm=mm.range;var 
qo=z(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,e){t.setFullYear(t.getFullYear()+e)},function(t,e){return 
e.getFullYear()-t.getFullYear()},function(t){return 
t.getFullYear()});qo.every=function(t){return!isFinite(t=Math.floor(t))||!(t>0)?null:z(function(e){e.setFullYear(Math.floor(e.getFullYear()/t)*t),e.setMonth(0,1),e.setHours(0,0,0,0)},function(e,n){e.setFullYear(e.getFullYear()+n*t)})};var 
Jt=qo,gm=qo.range;var 
xm=z(function(t){t.setUTCSeconds(0,0)},function(t,e){t.setTime(+t+e*pt)},function(t,e){return(e-t)/pt},function(t){return 
t.getUTCMinutes()});var vm=xm.range;var 
ym=z(function(t){t.setUTCMinutes(0,0,0)},function(t,e){t.setTime(+t+e*Rt)},function(t,e){return(e-t)/Rt},function(t){return 
t.getUTCHours()});var _m=ym.range;var 
Ss=z(function(t){t.setUTCHours(0,0,0,0)},function(t,e){t.setUTCDate(t.getUTCDate()+e)},function(t,e){return(e-t)/Vr},function(t){return 
t.getUTCDate()-1}),Xn=Ss,wm=Ss.range;function ye(t){return 
z(function(e){e.setUTCDate(e.getUTCDate()-(e.getUTCDay()+7-t)%7),e.setUTCHours(0,0,0,0)},function(e,n){e.setUTCDate(e.getUTCDate()+n*7)},function(e,n){return(n-e)/Gr})}var 
Ge=ye(0),Ze=ye(1),Ts=ye(2),Es=ye(3),$e=ye(4),Cs=ye(5),ks=ye(6),Ns=Ge.range,bm=Ze.range,Mm=Ts.range,Sm=Es.range,Tm=$e.range,Em=Cs.range,Cm=ks.range;var 
km=z(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,e){t.setUTCMonth(t.getUTCMonth()+e)},function(t,e){return 
e.getUTCMonth()-t.getUTCMonth()+(e.getUTCFullYear()-t.getUTCFullYear())*12},function(t){return 
t.getUTCMonth()});var Nm=km.range;var 
Bo=z(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,e){t.setUTCFullYear(t.getUTCFullYear()+e)},function(t,e){return 
e.getUTCFullYear()-t.getUTCFullYear()},function(t){return 
t.getUTCFullYear()});Bo.every=function(t){return!isFinite(t=Math.floor(t))||!(t>0)?null:z(function(e){e.setUTCFullYear(Math.floor(e.getUTCFullYear()/t)*t),e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},function(e,n){e.setUTCFullYear(e.getUTCFullYear()+n*t)})};var 
jt=Bo,Am=Bo.range;function Dm(t){if(0<=t.y&&t.y<100){var e=new 
Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return e.setFullYear(t.y),e}return new 
Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function Zr(t){if(0<=t.y&&t.y<100){var 
e=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return 
e.setUTCFullYear(t.y),e}return new 
Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function 
Wn(t){return{y:t,m:0,d:1,H:0,M:0,S:0,L:0}}function $r(t){var 
e=t.dateTime,n=t.date,r=t.time,i=t.periods,o=t.days,a=t.shortDays,u=t.months,f=t.shortMonths,s=Vn(i),l=Gn(i),c=Vn(o),h=Gn(o),p=Vn(a),d=Gn(a),m=Vn(u),g=Gn(u),x=Vn(f),_=Gn(f),w={a:Ht,A:ne,b:re,B:Ce,c:null,d:Is,e:Is,f:u0,H:i0,I:o0,j:a0,L:Us,m:f0,M:s0,p:ke,Q:Os,s:Ds,S:l0,u:c0,U:h0,V:p0,w:m0,W:d0,x:null,X:null,y:g0,Y:x0,Z:v0,"%":Ls},y={a:on,A:an,b:Tt,B:un,c:null,d:zs,e:zs,f:b0,H:y0,I:_0,j:w0,L:Ys,m:M0,M:S0,p:fn,Q:Os,s:Ds,S:T0,u:E0,U:C0,V:k0,w:N0,W:A0,x:null,X:null,y:R0,Y:P0,Z:I0,"%":Ls},M={a:Y,A:H,b:E,B:N,c:st,d:Rs,e:Rs,f:t0,H:Ps,I:Ps,j:Qm,L:jm,m:$m,M:Km,p:C,Q:n0,s:r0,S:Jm,u:Bm,U:Hm,V:Xm,w:qm,W:Wm,x:W,X:Bt,y:Gm,Y:Vm,Z:Zm,"%":e0};w.x=S(n,w),w.X=S(r,w),w.c=S(e,w),y.x=S(n,y),y.X=S(r,y),y.c=S(e,y);function 
S(b,k){return function(I){var v=[],lt=-1,F=0,mt=b.length,dt,ie,aa;for(I 
instanceof Date||(I=new 
Date(+I));++lt<mt;)b.charCodeAt(lt)===37&&(v.push(b.slice(F,lt)),(ie=As[dt=b.charAt(++lt)])!=null?dt=b.charAt(++lt):ie=dt==="e"?" 
":"0",(aa=k[dt])&&(dt=aa(I,ie)),v.push(dt),F=lt+1);return 
v.push(b.slice(F,lt)),v.join("")}}function T(b,k){return function(I){var 
v=Wn(1900),lt=R(v,b,I+="",0),F,mt;if(lt!=I.length)return null;if("Q"in 
v)return new Date(v.Q);if("p"in v&&(v.H=v.H%12+v.p*12),"V"in 
v){if(v.V<1||v.V>53)return null;"w"in v||(v.w=1),"Z"in 
v?(F=Zr(Wn(v.y)),mt=F.getUTCDay(),F=mt>4||mt===0?Ze.ceil(F):Ze(F),F=Xn.offset(F,(v.V-1)*7),v.y=F.getUTCFullYear(),v.m=F.getUTCMonth(),v.d=F.getUTCDate()+(v.w+6)%7):(F=k(Wn(v.y)),mt=F.getDay(),F=mt>4||mt===0?We.ceil(F):We(F),F=Hn.offset(F,(v.V-1)*7),v.y=F.getFullYear(),v.m=F.getMonth(),v.d=F.getDate()+(v.w+6)%7)}else("W"in 
v||"U"in v)&&("w"in v||(v.w="u"in v?v.u%7:"W"in v?1:0),mt="Z"in 
v?Zr(Wn(v.y)).getUTCDay():k(Wn(v.y)).getDay(),v.m=0,v.d="W"in 
v?(v.w+6)%7+v.W*7-(mt+5)%7:v.w+v.U*7-(mt+6)%7);return"Z"in 
v?(v.H+=v.Z/100|0,v.M+=v.Z%100,Zr(v)):k(v)}}function R(b,k,I,v){for(var 
lt=0,F=k.length,mt=I.length,dt,ie;lt<F;){if(v>=mt)return-1;if(dt=k.charCodeAt(lt++),dt===37){if(dt=k.charAt(lt++),ie=M[dt 
in As?k.charAt(lt++):dt],!ie||(v=ie(b,I,v))<0)return-1}else 
if(dt!=I.charCodeAt(v++))return-1}return v}function C(b,k,I){var 
v=s.exec(k.slice(I));return 
v?(b.p=l[v[0].toLowerCase()],I+v[0].length):-1}function Y(b,k,I){var 
v=p.exec(k.slice(I));return 
v?(b.w=d[v[0].toLowerCase()],I+v[0].length):-1}function H(b,k,I){var 
v=c.exec(k.slice(I));return 
v?(b.w=h[v[0].toLowerCase()],I+v[0].length):-1}function E(b,k,I){var 
v=x.exec(k.slice(I));return 
v?(b.m=_[v[0].toLowerCase()],I+v[0].length):-1}function N(b,k,I){var 
v=m.exec(k.slice(I));return 
v?(b.m=g[v[0].toLowerCase()],I+v[0].length):-1}function st(b,k,I){return 
R(b,e,k,I)}function W(b,k,I){return R(b,n,k,I)}function Bt(b,k,I){return 
R(b,r,k,I)}function Ht(b){return a[b.getDay()]}function ne(b){return 
o[b.getDay()]}function re(b){return f[b.getMonth()]}function Ce(b){return 
u[b.getMonth()]}function ke(b){return i[+(b.getHours()>=12)]}function 
on(b){return a[b.getUTCDay()]}function an(b){return 
o[b.getUTCDay()]}function Tt(b){return f[b.getUTCMonth()]}function 
un(b){return u[b.getUTCMonth()]}function fn(b){return 
i[+(b.getUTCHours()>=12)]}return{format:function(b){var 
k=S(b+="",w);return k.toString=function(){return 
b},k},parse:function(b){var k=T(b+="",Dm);return 
k.toString=function(){return b},k},utcFormat:function(b){var 
k=S(b+="",y);return k.toString=function(){return 
b},k},utcParse:function(b){var k=T(b,Zr);return 
k.toString=function(){return b},k}}}var As={"-":"",_:" 
",0:"0"},et=/^\s*\d+/,Um=/^%/,Ym=/[\\^$*+?|[\]().{}]/g;function 
D(t,e,n){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length;return r+(o<n?new 
Array(n-o+1).join(e)+i:i)}function Fm(t){return 
t.replace(Ym,"\\$&")}function Vn(t){return new 
RegExp("^(?:"+t.map(Fm).join("|")+")","i")}function Gn(t){for(var 
e={},n=-1,r=t.length;++n<r;)e[t[n].toLowerCase()]=n;return e}function 
qm(t,e,n){var r=et.exec(e.slice(n,n+1));return 
r?(t.w=+r[0],n+r[0].length):-1}function Bm(t,e,n){var 
r=et.exec(e.slice(n,n+1));return r?(t.u=+r[0],n+r[0].length):-1}function 
Hm(t,e,n){var r=et.exec(e.slice(n,n+2));return 
r?(t.U=+r[0],n+r[0].length):-1}function Xm(t,e,n){var 
r=et.exec(e.slice(n,n+2));return r?(t.V=+r[0],n+r[0].length):-1}function 
Wm(t,e,n){var r=et.exec(e.slice(n,n+2));return 
r?(t.W=+r[0],n+r[0].length):-1}function Vm(t,e,n){var 
r=et.exec(e.slice(n,n+4));return r?(t.y=+r[0],n+r[0].length):-1}function 
Gm(t,e,n){var r=et.exec(e.slice(n,n+2));return 
r?(t.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function Zm(t,e,n){var 
r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n,n+6));return 
r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function 
$m(t,e,n){var r=et.exec(e.slice(n,n+2));return 
r?(t.m=r[0]-1,n+r[0].length):-1}function Rs(t,e,n){var 
r=et.exec(e.slice(n,n+2));return r?(t.d=+r[0],n+r[0].length):-1}function 
Qm(t,e,n){var r=et.exec(e.slice(n,n+3));return 
r?(t.m=0,t.d=+r[0],n+r[0].length):-1}function Ps(t,e,n){var 
r=et.exec(e.slice(n,n+2));return r?(t.H=+r[0],n+r[0].length):-1}function 
Km(t,e,n){var r=et.exec(e.slice(n,n+2));return 
r?(t.M=+r[0],n+r[0].length):-1}function Jm(t,e,n){var 
r=et.exec(e.slice(n,n+2));return r?(t.S=+r[0],n+r[0].length):-1}function 
jm(t,e,n){var r=et.exec(e.slice(n,n+3));return 
r?(t.L=+r[0],n+r[0].length):-1}function t0(t,e,n){var 
r=et.exec(e.slice(n,n+6));return 
r?(t.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function e0(t,e,n){var 
r=Um.exec(e.slice(n,n+1));return r?n+r[0].length:-1}function n0(t,e,n){var 
r=et.exec(e.slice(n));return r?(t.Q=+r[0],n+r[0].length):-1}function 
r0(t,e,n){var r=et.exec(e.slice(n));return 
r?(t.Q=+r[0]*1e3,n+r[0].length):-1}function Is(t,e){return 
D(t.getDate(),e,2)}function i0(t,e){return D(t.getHours(),e,2)}function 
o0(t,e){return D(t.getHours()%12||12,e,2)}function a0(t,e){return 
D(1+Hn.count(Jt(t),t),e,3)}function Us(t,e){return 
D(t.getMilliseconds(),e,3)}function u0(t,e){return Us(t,e)+"000"}function 
f0(t,e){return D(t.getMonth()+1,e,2)}function s0(t,e){return 
D(t.getMinutes(),e,2)}function l0(t,e){return 
D(t.getSeconds(),e,2)}function c0(t){var e=t.getDay();return 
e===0?7:e}function h0(t,e){return D(Xe.count(Jt(t),t),e,2)}function 
p0(t,e){var n=t.getDay();return 
t=n>=4||n===0?Ve(t):Ve.ceil(t),D(Ve.count(Jt(t),t)+(Jt(t).getDay()===4),e,2)}function 
m0(t){return t.getDay()}function d0(t,e){return 
D(We.count(Jt(t),t),e,2)}function g0(t,e){return 
D(t.getFullYear()%100,e,2)}function x0(t,e){return 
D(t.getFullYear()%1e4,e,4)}function v0(t){var 
e=t.getTimezoneOffset();return(e>0?"-":(e*=-1,"+"))+D(e/60|0,"0",2)+D(e%60,"0",2)}function 
zs(t,e){return D(t.getUTCDate(),e,2)}function y0(t,e){return 
D(t.getUTCHours(),e,2)}function _0(t,e){return 
D(t.getUTCHours()%12||12,e,2)}function w0(t,e){return 
D(1+Xn.count(jt(t),t),e,3)}function Ys(t,e){return 
D(t.getUTCMilliseconds(),e,3)}function b0(t,e){return 
Ys(t,e)+"000"}function M0(t,e){return D(t.getUTCMonth()+1,e,2)}function 
S0(t,e){return D(t.getUTCMinutes(),e,2)}function T0(t,e){return 
D(t.getUTCSeconds(),e,2)}function E0(t){var e=t.getUTCDay();return 
e===0?7:e}function C0(t,e){return D(Ge.count(jt(t),t),e,2)}function 
k0(t,e){var n=t.getUTCDay();return 
t=n>=4||n===0?$e(t):$e.ceil(t),D($e.count(jt(t),t)+(jt(t).getUTCDay()===4),e,2)}function 
N0(t){return t.getUTCDay()}function A0(t,e){return 
D(Ze.count(jt(t),t),e,2)}function R0(t,e){return 
D(t.getUTCFullYear()%100,e,2)}function P0(t,e){return 
D(t.getUTCFullYear()%1e4,e,4)}function I0(){return"+0000"}function 
Ls(){return"%"}function Os(t){return+t}function Ds(t){return 
Math.floor(+t/1e3)}var Qe,Wo,Fs,Zn,Qr;Vo({dateTime:"%x, 
%X",date:"%-m/%-d/%Y",time:"%-I:%M:%S 
%p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function 
Vo(t){return 
Qe=$r(t),Wo=Qe.format,Fs=Qe.parse,Zn=Qe.utcFormat,Qr=Qe.utcParse,Qe}var 
Go="%Y-%m-%dT%H:%M:%S.%LZ";function z0(t){return t.toISOString()}var 
aA=Date.prototype.toISOString?z0:Zn(Go);function L0(t){var e=new 
Date(t);return isNaN(e)?null:e}var lA=+new 
Date("2000-01-01T00:00:00.000Z")?L0:Qr(Go);var 
O0=1e3,D0=O0*60,U0=D0*60,Zo=U0*24,EA=Zo*7,CA=Zo*30,kA=Zo*365;function 
xt(t){return t.match(/.{6}/g).map(function(e){return"#"+e})}var 
Y0=xt("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");var 
F0=xt("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6");var 
q0=xt("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9");var 
B0=xt("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5");var 
H0=Le(it(300,.5,0),it(-240,.5,1));var 
X0=Le(it(-100,.75,.35),it(80,1.5,.8)),W0=Le(it(260,.75,.35),it(80,1.5,.8)),$A=it();function 
Kr(t){var e=t.length;return function(n){return 
t[Math.max(0,Math.min(e-1,Math.floor(n*e)))]}}var 
V0=Kr(xt("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),G0=Kr(xt("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),Z0=Kr(xt("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),$0=Kr(xt("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));function 
$(t){return function(){return t}}var 
$o=Math.abs,nt=Math.atan2,te=Math.cos,qs=Math.max,Jr=Math.min,St=Math.sin,_e=Math.sqrt,K=1e-12,Pt=Math.PI,$n=Pt/2,we=2*Pt;function 
Bs(t){return t>1?0:t<-1?Pt:Math.acos(t)}function Qo(t){return 
t>=1?$n:t<=-1?-$n:Math.asin(t)}function Q0(t){return 
t.innerRadius}function K0(t){return t.outerRadius}function J0(t){return 
t.startAngle}function j0(t){return t.endAngle}function td(t){return 
t&&t.padAngle}function ed(t,e,n,r,i,o,a,u){var 
f=n-t,s=r-e,l=a-i,c=u-o,h=(l*(e-o)-c*(t-i))/(c*f-l*s);return[t+h*f,e+h*s]}function 
jr(t,e,n,r,i,o,a){var 
u=t-n,f=e-r,s=(a?o:-o)/_e(u*u+f*f),l=s*f,c=-s*u,h=t+l,p=e+c,d=n+l,m=r+c,g=(h+d)/2,x=(p+m)/2,_=d-h,w=m-p,y=_*_+w*w,M=i-o,S=h*m-d*p,T=(w<0?-1:1)*_e(qs(0,M*M*y-S*S)),R=(S*w-_*T)/y,C=(-S*_-w*T)/y,Y=(S*w+_*T)/y,H=(-S*_+w*T)/y,E=R-g,N=C-x,st=Y-g,W=H-x;return 
E*E+N*N>st*st+W*W&&(R=Y,C=H),{cx:R,cy:C,x01:-l,y01:-c,x11:R*(i/M-1),y11:C*(i/M-1)}}function 
Qn(){var t=Q0,e=K0,n=$(0),r=null,i=J0,o=j0,a=td,u=null;function f(){var 
s,l,c=+t.apply(this,arguments),h=+e.apply(this,arguments),p=i.apply(this,arguments)-$n,d=o.apply(this,arguments)-$n,m=$o(d-p),g=d>p;if(u||(u=s=Ft()),h<c&&(l=h,h=c,c=l),!(h>K))u.moveTo(0,0);else 
if(m>we-K)u.moveTo(h*te(p),h*St(p)),u.arc(0,0,h,p,d,!g),c>K&&(u.moveTo(c*te(d),c*St(d)),u.arc(0,0,c,d,p,g));else{var 
x=p,_=d,w=p,y=d,M=m,S=m,T=a.apply(this,arguments)/2,R=T>K&&(r?+r.apply(this,arguments):_e(c*c+h*h)),C=Jr($o(h-c)/2,+n.apply(this,arguments)),Y=C,H=C,E,N;if(R>K){var 
st=Qo(R/c*St(T)),W=Qo(R/h*St(T));(M-=st*2)>K?(st*=g?1:-1,w+=st,y-=st):(M=0,w=y=(p+d)/2),(S-=W*2)>K?(W*=g?1:-1,x+=W,_-=W):(S=0,x=_=(p+d)/2)}var 
Bt=h*te(x),Ht=h*St(x),ne=c*te(y),re=c*St(y);if(C>K){var 
Ce=h*te(_),ke=h*St(_),on=c*te(w),an=c*St(w);if(m<Pt){var 
Tt=M>K?ed(Bt,Ht,on,an,Ce,ke,ne,re):[ne,re],un=Bt-Tt[0],fn=Ht-Tt[1],b=Ce-Tt[0],k=ke-Tt[1],I=1/St(Bs((un*b+fn*k)/(_e(un*un+fn*fn)*_e(b*b+k*k)))/2),v=_e(Tt[0]*Tt[0]+Tt[1]*Tt[1]);Y=Jr(C,(c-v)/(I-1)),H=Jr(C,(h-v)/(I+1))}}S>K?H>K?(E=jr(on,an,Bt,Ht,h,H,g),N=jr(Ce,ke,ne,re,h,H,g),u.moveTo(E.cx+E.x01,E.cy+E.y01),H<C?u.arc(E.cx,E.cy,H,nt(E.y01,E.x01),nt(N.y01,N.x01),!g):(u.arc(E.cx,E.cy,H,nt(E.y01,E.x01),nt(E.y11,E.x11),!g),u.arc(0,0,h,nt(E.cy+E.y11,E.cx+E.x11),nt(N.cy+N.y11,N.cx+N.x11),!g),u.arc(N.cx,N.cy,H,nt(N.y11,N.x11),nt(N.y01,N.x01),!g))):(u.moveTo(Bt,Ht),u.arc(0,0,h,x,_,!g)):u.moveTo(Bt,Ht),!(c>K)||!(M>K)?u.lineTo(ne,re):Y>K?(E=jr(ne,re,Ce,ke,c,-Y,g),N=jr(Bt,Ht,on,an,c,-Y,g),u.lineTo(E.cx+E.x01,E.cy+E.y01),Y<C?u.arc(E.cx,E.cy,Y,nt(E.y01,E.x01),nt(N.y01,N.x01),!g):(u.arc(E.cx,E.cy,Y,nt(E.y01,E.x01),nt(E.y11,E.x11),!g),u.arc(0,0,c,nt(E.cy+E.y11,E.cx+E.x11),nt(N.cy+N.y11,N.cx+N.x11),g),u.arc(N.cx,N.cy,Y,nt(N.y11,N.x11),nt(N.y01,N.x01),!g))):u.arc(0,0,c,y,w,g)}if(u.closePath(),s)return 
u=null,s+""||null}return f.centroid=function(){var 
s=(+t.apply(this,arguments)+ 
+e.apply(this,arguments))/2,l=(+i.apply(this,arguments)+ 
+o.apply(this,arguments))/2-Pt/2;return[te(l)*s,St(l)*s]},f.innerRadius=function(s){return 
arguments.length?(t=typeof 
s=="function"?s:$(+s),f):t},f.outerRadius=function(s){return 
arguments.length?(e=typeof 
s=="function"?s:$(+s),f):e},f.cornerRadius=function(s){return 
arguments.length?(n=typeof 
s=="function"?s:$(+s),f):n},f.padRadius=function(s){return 
arguments.length?(r=s==null?null:typeof 
s=="function"?s:$(+s),f):r},f.startAngle=function(s){return 
arguments.length?(i=typeof 
s=="function"?s:$(+s),f):i},f.endAngle=function(s){return 
arguments.length?(o=typeof 
s=="function"?s:$(+s),f):o},f.padAngle=function(s){return 
arguments.length?(a=typeof 
s=="function"?s:$(+s),f):a},f.context=function(s){return 
arguments.length?(u=s??null,f):u},f}function 
Hs(t){this._context=t}Hs.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 
0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 
1:this._point=2;default:this._context.lineTo(t,e);break}}};function 
ee(t){return new Hs(t)}function ti(t){return t[0]}function ei(t){return 
t[1]}function Kn(){var t=ti,e=ei,n=$(!0),r=null,i=ee,o=null;function 
a(u){var 
f,s=u.length,l,c=!1,h;for(r==null&&(o=i(h=Ft())),f=0;f<=s;++f)!(f<s&&n(l=u[f],f,u))===c&&((c=!c)?o.lineStart():o.lineEnd()),c&&o.point(+t(l,f,u),+e(l,f,u));if(h)return 
o=null,h+""||null}return a.x=function(u){return arguments.length?(t=typeof 
u=="function"?u:$(+u),a):t},a.y=function(u){return 
arguments.length?(e=typeof 
u=="function"?u:$(+u),a):e},a.defined=function(u){return 
arguments.length?(n=typeof 
u=="function"?u:$(!!u),a):n},a.curve=function(u){return 
arguments.length?(i=u,r!=null&&(o=i(r)),a):i},a.context=function(u){return 
arguments.length?(u==null?r=o=null:o=i(r=u),a):r},a}var Xs=ni(ee);function 
Ws(t){this._curve=t}Ws.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,e){this._curve.point(e*Math.sin(t),e*-Math.cos(t))}};function 
ni(t){function e(n){return new Ws(t(n))}return e._curve=t,e}var 
Vs=Array.prototype.slice;var id=Math.sqrt(.3333333333333333),RP=id*2;var 
Gs=Math.sin(Pt/10)/Math.sin(7*Pt/10),zP=Math.sin(we/10)*Gs,LP=-Math.cos(we/10)*Gs;var 
UP=Math.sqrt(3);var 
FP=Math.sqrt(3)/2,od=1/Math.sqrt(12),qP=(od/2+1)*3;function yt(){}function 
Ke(t,e,n){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+e)/6,(t._y0+4*t._y1+n)/6)}function 
ri(t){this._context=t}ri.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 
3:Ke(this,this._x1,this._y1);case 
2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 
0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 
1:this._point=2;break;case 
2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Ke(this,t,e);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}};function 
pd(t){this._context=t}pd.prototype={areaStart:yt,areaEnd:yt,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 
1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 
2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 
3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(t,e){switch(t=+t,e=+e,this._point){case 
0:this._point=1,this._x2=t,this._y2=e;break;case 
1:this._point=2,this._x3=t,this._y3=e;break;case 
2:this._point=3,this._x4=t,this._y4=e,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+e)/6);break;default:Ke(this,t,e);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}};function 
md(t){this._context=t}md.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 
0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var 
n=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+e)/6;this._line?this._context.lineTo(n,r):this._context.moveTo(n,r);break;case 
3:this._point=4;default:Ke(this,t,e);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}};function 
Zs(t,e){this._basis=new 
ri(t),this._beta=e}Zs.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var 
t=this._x,e=this._y,n=t.length-1;if(n>0)for(var 
r=t[0],i=e[0],o=t[n]-r,a=e[n]-i,u=-1,f;++u<=n;)f=u/n,this._basis.point(this._beta*t[u]+(1-this._beta)*(r+f*o),this._beta*e[u]+(1-this._beta)*(i+f*a));this._x=this._y=null,this._basis.lineEnd()},point:function(t,e){this._x.push(+t),this._y.push(+e)}};var 
dd=function t(e){function n(r){return e===1?new ri(r):new Zs(r,e)}return 
n.beta=function(r){return t(+r)},n}(.85);function 
Je(t,e,n){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-e),t._y2+t._k*(t._y1-n),t._x2,t._y2)}function 
ii(t,e){this._context=t,this._k=(1-e)/6}ii.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 
2:this._context.lineTo(this._x2,this._y2);break;case 
3:Je(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 
0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 
1:this._point=2,this._x1=t,this._y1=e;break;case 
2:this._point=3;default:Je(this,t,e);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};var 
gd=function t(e){function n(r){return new ii(r,e)}return 
n.tension=function(r){return t(+r)},n}(0);function 
oi(t,e){this._context=t,this._k=(1-e)/6}oi.prototype={areaStart:yt,areaEnd:yt,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 
1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 
2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 
3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(t,e){switch(t=+t,e=+e,this._point){case 
0:this._point=1,this._x3=t,this._y3=e;break;case 
1:this._point=2,this._context.moveTo(this._x4=t,this._y4=e);break;case 
2:this._point=3,this._x5=t,this._y5=e;break;default:Je(this,t,e);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};var 
xd=function t(e){function n(r){return new oi(r,e)}return 
n.tension=function(r){return t(+r)},n}(0);function 
ai(t,e){this._context=t,this._k=(1-e)/6}ai.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 
0:this._point=1;break;case 1:this._point=2;break;case 
2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 
3:this._point=4;default:Je(this,t,e);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};var 
vd=function t(e){function n(r){return new ai(r,e)}return 
n.tension=function(r){return t(+r)},n}(0);function Jn(t,e,n){var 
r=t._x1,i=t._y1,o=t._x2,a=t._y2;if(t._l01_a>K){var 
u=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,f=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*u-t._x0*t._l12_2a+t._x2*t._l01_2a)/f,i=(i*u-t._y0*t._l12_2a+t._y2*t._l01_2a)/f}if(t._l23_a>K){var 
s=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,l=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*s+t._x1*t._l23_2a-e*t._l12_2a)/l,a=(a*s+t._y1*t._l23_2a-n*t._l12_2a)/l}t._context.bezierCurveTo(r,i,o,a,t._x2,t._y2)}function 
$s(t,e){this._context=t,this._alpha=e}$s.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 
2:this._context.lineTo(this._x2,this._y2);break;case 
3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){if(t=+t,e=+e,this._point){var 
n=this._x2-t,r=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}switch(this._point){case 
0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 
1:this._point=2;break;case 
2:this._point=3;default:Jn(this,t,e);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};var 
yd=function t(e){function n(r){return e?new $s(r,e):new ii(r,0)}return 
n.alpha=function(r){return t(+r)},n}(.5);function 
Qs(t,e){this._context=t,this._alpha=e}Qs.prototype={areaStart:yt,areaEnd:yt,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 
1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 
2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 
3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(t,e){if(t=+t,e=+e,this._point){var 
n=this._x2-t,r=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}switch(this._point){case 
0:this._point=1,this._x3=t,this._y3=e;break;case 
1:this._point=2,this._context.moveTo(this._x4=t,this._y4=e);break;case 
2:this._point=3,this._x5=t,this._y5=e;break;default:Jn(this,t,e);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};var 
_d=function t(e){function n(r){return e?new Qs(r,e):new oi(r,0)}return 
n.alpha=function(r){return t(+r)},n}(.5);function 
Ks(t,e){this._context=t,this._alpha=e}Ks.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){if(t=+t,e=+e,this._point){var 
n=this._x2-t,r=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}switch(this._point){case 
0:this._point=1;break;case 1:this._point=2;break;case 
2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 
3:this._point=4;default:Jn(this,t,e);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};var 
wd=function t(e){function n(r){return e?new Ks(r,e):new ai(r,0)}return 
n.alpha=function(r){return t(+r)},n}(.5);function 
bd(t){this._context=t}bd.prototype={areaStart:yt,areaEnd:yt,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,e){t=+t,e=+e,this._point?this._context.lineTo(t,e):(this._point=1,this._context.moveTo(t,e))}};function 
Js(t){return t<0?-1:1}function js(t,e,n){var 
r=t._x1-t._x0,i=e-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),a=(n-t._y1)/(i||r<0&&-0),u=(o*i+a*r)/(r+i);return(Js(o)+Js(a))*Math.min(Math.abs(o),Math.abs(a),.5*Math.abs(u))||0}function 
tl(t,e){var n=t._x1-t._x0;return n?(3*(t._y1-t._y0)/n-e)/2:e}function 
Ko(t,e,n){var 
r=t._x0,i=t._y0,o=t._x1,a=t._y1,u=(o-r)/3;t._context.bezierCurveTo(r+u,i+u*e,o-u,a-u*n,o,a)}function 
Jo(t){this._context=t}Jo.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 
2:this._context.lineTo(this._x1,this._y1);break;case 
3:Ko(this,this._t0,tl(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){var 
n=NaN;if(t=+t,e=+e,!(t===this._x1&&e===this._y1)){switch(this._point){case 
0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 
1:this._point=2;break;case 
2:this._point=3,Ko(this,tl(this,n=js(this,t,e)),n);break;default:Ko(this,this._t0,n=js(this,t,e));break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e,this._t0=n}}};function 
Md(t){this._context=new 
el(t)}(Md.prototype=Object.create(Jo.prototype)).point=function(t,e){Jo.prototype.point.call(this,e,t)};function 
el(t){this._context=t}el.prototype={moveTo:function(t,e){this._context.moveTo(e,t)},closePath:function(){this._context.closePath()},lineTo:function(t,e){this._context.lineTo(e,t)},bezierCurveTo:function(t,e,n,r,i,o){this._context.bezierCurveTo(e,t,r,n,o,i)}};function 
Sd(t){this._context=t}Sd.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var 
t=this._x,e=this._y,n=t.length;if(n)if(this._line?this._context.lineTo(t[0],e[0]):this._context.moveTo(t[0],e[0]),n===2)this._context.lineTo(t[1],e[1]);else 
for(var 
r=nl(t),i=nl(e),o=0,a=1;a<n;++o,++a)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[a],e[a]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,e){this._x.push(+t),this._y.push(+e)}};function 
nl(t){var e,n=t.length-1,r,i=new Array(n),o=new Array(n),a=new 
Array(n);for(i[0]=0,o[0]=2,a[0]=t[0]+2*t[1],e=1;e<n-1;++e)i[e]=1,o[e]=4,a[e]=4*t[e]+2*t[e+1];for(i[n-1]=2,o[n-1]=7,a[n-1]=8*t[n-1]+t[n],e=1;e<n;++e)r=i[e]/o[e-1],o[e]-=r,a[e]-=r*a[e-1];for(i[n-1]=a[n-1]/o[n-1],e=n-2;e>=0;--e)i[e]=(a[e]-i[e+1])/o[e];for(o[n-1]=(t[n]+i[n-1])/2,e=0;e<n-1;++e)o[e]=2*t[e+1]-i[e+1];return[i,o]}function 
Td(t,e){this._context=t,this._t=e}Td.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,e){switch(t=+t,e=+e,this._point){case 
0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 
1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,e),this._context.lineTo(t,e);else{var 
n=this._x*(1-this._t)+t*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,e)}break}}this._x=t,this._y=e}};function 
jo(){this._=null}function 
je(t){t.U=t.C=t.L=t.R=t.P=t.N=null}jo.prototype={constructor:jo,insert:function(t,e){var 
n,r,i;if(t){if(e.P=t,e.N=t.N,t.N&&(t.N.P=e),t.N=e,t.R){for(t=t.R;t.L;)t=t.L;t.L=e}else 
t.R=e;n=t}else 
this._?(t=rl(this._),e.P=null,e.N=t,t.P=t.L=e,n=t):(e.P=e.N=null,this._=e,n=null);for(e.L=e.R=null,e.U=n,e.C=!0,t=e;n&&n.C;)r=n.U,n===r.L?(i=r.R,i&&i.C?(n.C=i.C=!1,r.C=!0,t=r):(t===n.R&&(jn(this,n),t=n,n=t.U),n.C=!1,r.C=!0,tr(this,r))):(i=r.L,i&&i.C?(n.C=i.C=!1,r.C=!0,t=r):(t===n.L&&(tr(this,n),t=n,n=t.U),n.C=!1,r.C=!0,jn(this,r))),n=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var 
e=t.U,n,r=t.L,i=t.R,o,a;if(r?i?o=rl(i):o=r:o=i,e?e.L===t?e.L=o:e.R=o:this._=o,r&&i?(a=o.C,o.C=t.C,o.L=r,r.U=o,o!==i?(e=o.U,o.U=t.U,t=o.R,e.L=t,o.R=i,i.U=o):(o.U=e,e=o,t=o.R)):(a=t.C,t=o),t&&(t.U=e),!a){if(t&&t.C){t.C=!1;return}do{if(t===this._)break;if(t===e.L){if(n=e.R,n.C&&(n.C=!1,e.C=!0,jn(this,e),n=e.R),n.L&&n.L.C||n.R&&n.R.C){(!n.R||!n.R.C)&&(n.L.C=!1,n.C=!0,tr(this,n),n=e.R),n.C=e.C,e.C=n.R.C=!1,jn(this,e),t=this._;break}}else 
if(n=e.L,n.C&&(n.C=!1,e.C=!0,tr(this,e),n=e.L),n.L&&n.L.C||n.R&&n.R.C){(!n.L||!n.L.C)&&(n.R.C=!1,n.C=!0,jn(this,n),n=e.L),n.C=e.C,e.C=n.L.C=!1,tr(this,e),t=this._;break}n.C=!0,t=e,e=e.U}while(!t.C);t&&(t.C=!1)}}};function 
jn(t,e){var 
n=e,r=e.R,i=n.U;i?i.L===n?i.L=r:i.R=r:t._=r,r.U=i,n.U=r,n.R=r.L,n.R&&(n.R.U=n),r.L=n}function 
tr(t,e){var 
n=e,r=e.L,i=n.U;i?i.L===n?i.L=r:i.R=r:t._=r,r.U=i,n.U=r,n.L=r.R,n.L&&(n.L.U=n),r.R=n}function 
rl(t){for(;t.L;)t=t.L;return t}var ta=jo;function tn(t,e,n,r){var 
i=[null,null],o=J.push(i)-1;return 
i.left=t,i.right=e,n&&er(i,t,e,n),r&&er(i,e,t,r),ft[t.index].halfedges.push(o),ft[e.index].halfedges.push(o),i}function 
en(t,e,n){var r=[e,n];return r.left=t,r}function 
er(t,e,n,r){!t[0]&&!t[1]?(t[0]=r,t.left=e,t.right=n):t.left===n?t[1]=r:t[0]=r}function 
Nd(t,e,n,r,i){var 
o=t[0],a=t[1],u=o[0],f=o[1],s=a[0],l=a[1],c=0,h=1,p=s-u,d=l-f,m;if(m=e-u,!(!p&&m>0)){if(m/=p,p<0){if(m<c)return;m<h&&(h=m)}else 
if(p>0){if(m>h)return;m>c&&(c=m)}if(m=r-u,!(!p&&m<0)){if(m/=p,p<0){if(m>h)return;m>c&&(c=m)}else 
if(p>0){if(m<c)return;m<h&&(h=m)}if(m=n-f,!(!d&&m>0)){if(m/=d,d<0){if(m<c)return;m<h&&(h=m)}else 
if(d>0){if(m>h)return;m>c&&(c=m)}if(m=i-f,!(!d&&m<0)){if(m/=d,d<0){if(m>h)return;m>c&&(c=m)}else 
if(d>0){if(m<c)return;m<h&&(h=m)}return!(c>0)&&!(h<1)||(c>0&&(t[0]=[u+c*p,f+c*d]),h<1&&(t[1]=[u+h*p,f+h*d])),!0}}}}}function 
Ad(t,e,n,r,i){var o=t[1];if(o)return!0;var 
a=t[0],u=t.left,f=t.right,s=u[0],l=u[1],c=f[0],h=f[1],p=(s+c)/2,d=(l+h)/2,m,g;if(h===l){if(p<e||p>=r)return;if(s>c){if(!a)a=[p,n];else 
if(a[1]>=i)return;o=[p,i]}else{if(!a)a=[p,i];else 
if(a[1]<n)return;o=[p,n]}}else 
if(m=(s-c)/(h-l),g=d-m*p,m<-1||m>1)if(s>c){if(!a)a=[(n-g)/m,n];else 
if(a[1]>=i)return;o=[(i-g)/m,i]}else{if(!a)a=[(i-g)/m,i];else 
if(a[1]<n)return;o=[(n-g)/m,n]}else if(l<h){if(!a)a=[e,m*e+g];else 
if(a[0]>=r)return;o=[r,m*r+g]}else{if(!a)a=[r,m*r+g];else 
if(a[0]<e)return;o=[e,m*e+g]}return t[0]=a,t[1]=o,!0}function 
il(t,e,n,r){for(var 
i=J.length,o;i--;)(!Ad(o=J[i],t,e,n,r)||!Nd(o,t,e,n,r)||!(Math.abs(o[0][0]-o[1][0])>U||Math.abs(o[0][1]-o[1][1])>U))&&delete 
J[i]}function ol(t){return ft[t.index]={site:t,halfedges:[]}}function 
Rd(t,e){var n=t.site,r=e.left,i=e.right;return 
n===i&&(i=r,r=n),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(n===r?(r=e[1],i=e[0]):(r=e[0],i=e[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function 
ea(t,e){return e[+(e.left!==t.site)]}function Pd(t,e){return 
e[+(e.left===t.site)]}function al(){for(var 
t=0,e=ft.length,n,r,i,o;t<e;++t)if((n=ft[t])&&(o=(r=n.halfedges).length)){var 
a=new Array(o),u=new 
Array(o);for(i=0;i<o;++i)a[i]=i,u[i]=Rd(n,J[r[i]]);for(a.sort(function(f,s){return 
u[s]-u[f]}),i=0;i<o;++i)u[i]=r[a[i]];for(i=0;i<o;++i)r[i]=u[i]}}function 
ul(t,e,n,r){var 
i=ft.length,o,a,u,f,s,l,c,h,p,d,m,g,x=!0;for(o=0;o<i;++o)if(a=ft[o]){for(u=a.site,s=a.halfedges,f=s.length;f--;)J[s[f]]||s.splice(f,1);for(f=0,l=s.length;f<l;)d=Pd(a,J[s[f]]),m=d[0],g=d[1],c=ea(a,J[s[++f%l]]),h=c[0],p=c[1],(Math.abs(m-h)>U||Math.abs(g-p)>U)&&(s.splice(f,0,J.push(en(u,d,Math.abs(m-t)<U&&r-g>U?[t,Math.abs(h-t)<U?p:r]:Math.abs(g-r)<U&&n-m>U?[Math.abs(p-r)<U?h:n,r]:Math.abs(m-n)<U&&g-e>U?[n,Math.abs(h-n)<U?p:e]:Math.abs(g-e)<U&&m-t>U?[Math.abs(p-e)<U?h:t,e]:null))-1),++l);l&&(x=!1)}if(x){var 
_,w,y,M=1/0;for(o=0,x=null;o<i;++o)(a=ft[o])&&(u=a.site,_=u[0]-t,w=u[1]-e,y=_*_+w*w,y<M&&(M=y,x=a));if(x){var 
S=[t,e],T=[t,r],R=[n,r],C=[n,e];x.halfedges.push(J.push(en(u=x.site,S,T))-1,J.push(en(u,T,R))-1,J.push(en(u,R,C))-1,J.push(en(u,C,S))-1)}}for(o=0;o<i;++o)(a=ft[o])&&(a.halfedges.length||delete 
ft[o])}var fl=[],si;function 
Id(){je(this),this.x=this.y=this.arc=this.site=this.cy=null}function 
be(t){var e=t.P,n=t.N;if(!(!e||!n)){var 
r=e.site,i=t.site,o=n.site;if(r!==o){var 
a=i[0],u=i[1],f=r[0]-a,s=r[1]-u,l=o[0]-a,c=o[1]-u,h=2*(f*c-s*l);if(!(h>=-sl)){var 
p=f*f+s*s,d=l*l+c*c,m=(c*p-s*d)/h,g=(f*d-l*p)/h,x=fl.pop()||new 
Id;x.arc=t,x.site=i,x.x=m+a,x.y=(x.cy=g+u)+Math.sqrt(m*m+g*g),t.circle=x;for(var 
_=null,w=nn._;w;)if(x.y<w.y||x.y===w.y&&x.x<=w.x)if(w.L)w=w.L;else{_=w.P;break}else 
if(w.R)w=w.R;else{_=w;break}nn.insert(_,x),_||(si=x)}}}}function Me(t){var 
e=t.circle;e&&(e.P||(si=e.N),nn.remove(e),fl.push(e),je(e),t.circle=null)}var 
cl=[];function zd(){je(this),this.edge=this.site=this.circle=null}function 
ll(t){var e=cl.pop()||new zd;return e.site=t,e}function 
na(t){Me(t),Se.remove(t),cl.push(t),je(t)}function hl(t){var 
e=t.circle,n=e.x,r=e.cy,i=[n,r],o=t.P,a=t.N,u=[t];na(t);for(var 
f=o;f.circle&&Math.abs(n-f.circle.x)<U&&Math.abs(r-f.circle.cy)<U;)o=f.P,u.unshift(f),na(f),f=o;u.unshift(f),Me(f);for(var 
s=a;s.circle&&Math.abs(n-s.circle.x)<U&&Math.abs(r-s.circle.cy)<U;)a=s.N,u.push(s),na(s),s=a;u.push(s),Me(s);var 
l=u.length,c;for(c=1;c<l;++c)s=u[c],f=u[c-1],er(s.edge,f.site,s.site,i);f=u[0],s=u[l-1],s.edge=tn(f.site,s.site,null,i),be(f),be(s)}function 
pl(t){for(var 
e=t[0],n=t[1],r,i,o,a,u=Se._;u;)if(o=ml(u,n)-e,o>U)u=u.L;else 
if(a=e-Ld(u,n),a>U){if(!u.R){r=u;break}u=u.R}else{o>-U?(r=u.P,i=u):a>-U?(r=u,i=u.N):r=i=u;break}ol(t);var 
f=ll(t);if(Se.insert(r,f),!(!r&&!i)){if(r===i){Me(r),i=ll(r.site),Se.insert(f,i),f.edge=i.edge=tn(r.site,f.site),be(r),be(i);return}if(!i){f.edge=tn(r.site,f.site);return}Me(r),Me(i);var 
s=r.site,l=s[0],c=s[1],h=t[0]-l,p=t[1]-c,d=i.site,m=d[0]-l,g=d[1]-c,x=2*(h*g-p*m),_=h*h+p*p,w=m*m+g*g,y=[(g*_-p*w)/x+l,(h*w-m*_)/x+c];er(i.edge,s,d,y),f.edge=tn(s,t,null,y),i.edge=tn(t,d,null,y),be(r),be(i)}}function 
ml(t,e){var n=t.site,r=n[0],i=n[1],o=i-e;if(!o)return r;var 
a=t.P;if(!a)return-1/0;n=a.site;var u=n[0],f=n[1],s=f-e;if(!s)return u;var 
l=u-r,c=1/o-1/s,h=l/s;return 
c?(-h+Math.sqrt(h*h-2*c*(l*l/(-2*s)-f+s/2+i-o/2)))/c+r:(r+u)/2}function 
Ld(t,e){var n=t.N;if(n)return ml(n,e);var r=t.site;return 
r[1]===e?r[0]:1/0}var U=1e-6,sl=1e-12,Se,ft,nn,J;function 
Od(t,e,n){return(t[0]-n[0])*(e[1]-t[1])-(t[0]-e[0])*(n[1]-t[1])}function 
Dd(t,e){return e[1]-t[1]||e[0]-t[0]}function li(t,e){var 
n=t.sort(Dd).pop(),r,i,o;for(J=[],ft=new Array(t.length),Se=new ta,nn=new 
ta;;)if(o=si,n&&(!o||n[1]<o.y||n[1]===o.y&&n[0]<o.x))(n[0]!==r||n[1]!==i)&&(pl(n),r=n[0],i=n[1]),n=t.pop();else 
if(o)hl(o.arc);else break;if(al(),e){var 
a=+e[0][0],u=+e[0][1],f=+e[1][0],s=+e[1][1];il(a,u,f,s),ul(a,u,f,s)}this.edges=J,this.cells=ft,Se=nn=J=ft=null}li.prototype={constructor:li,polygons:function(){var 
t=this.edges;return this.cells.map(function(e){var 
n=e.halfedges.map(function(r){return ea(e,t[r])});return 
n.data=e.site.data,n})},triangles:function(){var t=[],e=this.edges;return 
this.cells.forEach(function(n,r){if(!!(u=(o=n.halfedges).length))for(var 
i=n.site,o,a=-1,u,f,s=e[o[u-1]],l=s.left===i?s.right:s.left;++a<u;)f=l,s=e[o[a]],l=s.left===i?s.right:s.left,f&&l&&r<f.index&&r<l.index&&Od(i,f,l)<0&&t.push([i.data,f.data,l.data])}),t},links:function(){return 
this.edges.filter(function(t){return 
t.right}).map(function(t){return{source:t.left.data,target:t.right.data}})},find:function(t,e,n){for(var 
r=this,i,o=r._found||0,a=r.cells.length,u;!(u=r.cells[o]);)if(++o>=a)return 
null;var f=t-u.site[0],s=e-u.site[1],l=f*f+s*s;do 
u=r.cells[i=o],o=null,u.halfedges.forEach(function(c){var 
h=r.edges[c],p=h.left;if(!((p===u.site||!p)&&!(p=h.right))){var 
d=t-p[0],m=e-p[1],g=d*d+m*m;g<l&&(l=g,o=p.index)}});while(o!==null);return 
r._found=i,n==null||l<=n*n?u.site:null}};function 
Te(t,e,n){this.k=t,this.x=e,this.y=n}Te.prototype={constructor:Te,scale:function(t){return 
t===1?this:new Te(this.k*t,this.x,this.y)},translate:function(t,e){return 
t===0&e===0?this:new 
Te(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return 
t*this.k+this.x},applyY:function(t){return 
t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return 
t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return 
t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") 
scale("+this.k+")"}};var ra=new 
Te(1,0,0);ia.prototype=Te.prototype;function ia(t){return 
t.__zoom||ra}function dl(t){for(var e=t.length/6|0,n=new 
Array(e),r=0;r<e;)n[r]="#"+t.slice(r*6,++r*6);return n}var 
ci=dl("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");function 
oa(...t){console.error.apply(console,arguments)}function 
rn(...t){console.warn.apply(console,arguments)}var 
hi=class{constructor(e,n,r=null){this.svg=e,this.needleUpdateSpeed=n,this.needle=r}updateNeedle(e){if(!this.needle){rn("Gauge-chart 
Warning: no needle to 
update");return}e=xl(e),this.needle.getSelection().transition().duration(this.needleUpdateSpeed).ease(Fe).tween("needle 
animation",()=>{let n=this.needle.getValue(),r=j(n,e);return 
i=>this.needle.setValue(r(i))})}removeGauge(){this.svg.remove()}};var 
pi=class{constructor(e,n,r,i,o,a,u,f){this.needleValue=n,this.centralLabel=r,this.chartHeight=i,this.outerRadius=o,this.offset=a,this.needleColor=u,this.outerNeedle=f,this.lineFunction=Kn().x(s=>s.x).y(s=>s.y).curve(ee),f?this.needleSvg=e.append("path").attr("d",this.getLine()).attr("stroke",this.needleColor).attr("stroke-width",2).attr("fill",this.needleColor).attr("transform","translate("+(this.chartHeight+this.offset*2)+", 
"+(this.chartHeight+this.offset)+")"):this.needleSvg=e.append("path").attr("d",this.getLine()).attr("stroke",this.needleColor).attr("stroke-width",2).attr("fill",this.needleColor).attr("transform","translate("+(this.chartHeight+this.offset*2)+", 
"+(this.chartHeight+this.offset)+")")}setValue(e){this.needleValue=e,this.needleSvg.attr("d",this.getLine())}getValue(){return 
this.needleValue}calcCoordinates(){let 
e=this.centralLabel?this.chartHeight*.7:this.chartHeight*.1;e=this.outerNeedle?this.chartHeight*.25:e;let 
n=this.outerNeedle?this.outerRadius*1.4:this.outerRadius*.97,r=e*.5,i=e*.5,o=Ee(this.needleValue),a;return 
this.outerNeedle?a=[{x:n*Math.sin(o),y:-n*Math.cos(o)},{x:(n+r)*Math.sin(o)+i*Math.cos(o),y:-(n+r)*Math.cos(o)+i*Math.sin(o)},{x:(n+r)*Math.sin(o)-i*Math.cos(o),y:-(n+r)*Math.cos(o)-i*Math.sin(o)},{x:n*Math.sin(o),y:-n*Math.cos(o)}]:this.centralLabel?a=[{x:n*Math.sin(o),y:-n*Math.cos(o)},{x:i*1.5*Math.sin(o)-i/3*Math.cos(o),y:-(i*1.5)*Math.cos(o)-i/3*Math.sin(o)},{x:i*1.5*Math.sin(o)+i/3*Math.cos(o),y:-(i*1.5)*Math.cos(o)+i/3*Math.sin(o)},{x:n*Math.sin(o),y:-n*Math.cos(o)}]:a=[{x:n*Math.sin(o),y:-n*Math.cos(o)},{x:-i*Math.cos(o),y:-i*Math.sin(o)},{x:-r*Math.sin(o),y:r*Math.cos(o)},{x:i*Math.cos(o),y:i*Math.sin(o)},{x:n*Math.sin(o),y:-n*Math.cos(o)}],a}getSelection(){return 
this.needleSvg}getLine(){return 
this.lineFunction(this.calcCoordinates())}};function Ud(t){return 
t&&(t.slice(-1)[0]>=100||t[0]<=0)?(oa("Gauge-chart Error: gauge delimiters 
have to be LARGER than 0 and LESS than 100"),!1):!0}function Yd(t){let 
e=!0;return t&&t.forEach((n,r)=>{r&&n<t[r-1]&&(oa("Gauge-chart Error: 
gauge delimiters are not sorted"),e=!1)}),e}function 
Fd(t,e){t&&e&&t.length>e.length-1&&rn("Gauge-chart Warning: list of colors 
is not complete, standard colors added to the chart")}function 
qd(t,e){t&&e&&t.length<e.length-1&&rn("Gauge-chart Warning: list of colors 
exceeds number of slices, therefore it was shortened")}function 
Bd(t){t.length>2&&rn("Gauge-chart Warning: number of range label 
parameters is bigger than 2")}function 
Hd(t,e,n){Fd(t,e),qd(t,e),Bd(n)}function Xd(t){return 
Ud(t)&&Yd(t)}function yl(t,e,n){return Hd(t,e,n),Xd(t)}function 
Wd(t,e){if(t.length>e.length-1){let n=t.length-e.length+1;for(let 
r=0;r<n;r++)e.push(ci[r%ci.length])}else 
t.length<e.length-1&&(e=e.slice(0,t.length+1));return e}function 
xl(t){return t<0?0:t>100?100:t}function 
Ee(t){return(t/100-.5)*Math.PI}function 
Vd(t,e,n,r,i,o,a,u,f,s,l,c){r.forEach((h,p)=>{let 
d=Ee(p?o[p-1]:0),m=Ee(o[p]||100),g=Qn().innerRadius(e).outerRadius(i).startAngle(d).endAngle(m),x=t.append("path").attr("d",g).attr("fill",h).attr("transform","translate("+(e+n*2)+", 
"+(e+n)+")");if(a){g=Qn().innerRadius(e).outerRadius(e+e*.1).startAngle(d).endAngle(m);let 
_=t.append("path").attr("d",g).attr("fill","transparent").attr("opacity","0.2").attr("transform","translate("+(e+n*2)+", 
"+(e+n)+")");x.on("mouseover",()=>{x.style("opacity",.8),_.transition().duration(50).ease(Cr).attr("fill",h)}).on("mouseout",()=>{x.style("opacity",1),_.transition().duration(300).ease(Cr).attr("fill","transparent")})}}),r.forEach((h,p)=>{if(o[p]){let 
d=Ee(o[p]);if(u&&f){let 
g=e+n*2,x=n-e*(1.1-1);t.append("rect").attr("x",0).attr("y",0).attr("fill",f).attr("width",u).attr("height",e*1.1).attr("transform","translate("+g+","+x+") 
rotate("+d*180/Math.PI+", "+0+","+e*1.1+")")}if(s[p]){let 
g=e+n*2+Math.cos(d-Math.PI/2)*(e*1.07),x=e+n+Math.sin(d-Math.PI/2)*(e*1.07);l=l||Math.round(e*.09);let 
y=document.createElement("canvas").getContext("2d");y.font=l+"px";let 
M=y.measureText(s[p]),S=4,T=(d-Math.PI/2)/Math.PI*(M.width+S);t.append("text").attr("x",g+T).attr("y",x).text(s[p]).attr("align","center").attr("font-size",l+"px").attr("font-family",c)}}})}function 
Gd(t,e,n,r,i,o){let 
a=i||o?e*.5:e*.1,u=Qn().innerRadius(a).outerRadius(0).startAngle(Ee(0)).endAngle(Ee(200));t.append("path").attr("d",u).attr("fill",i||o?"transparent":r).attr("transform","translate("+(e+n*2)+", 
"+(e+n)+")").attr("class","bar")}function Zd(t,e,n,r,i,o,a,u){let 
f=u,s=new pi(t,f,o,e,i,n,r,a);return 
s.setValue(f),s.getSelection(),s}function $d(t,e,n,r,i,o,a,u,f){let 
s=n-i;u=u||Math.round(n*.18);let 
l=u*.6,c=u*1.5,h=c*.56,p=o[0]?e/2-i-s/2-l*o[0].length/2:0,d=o[1]?e/2+i+s/2-l*o[1].length/2:0,m=r+n+l*2,g=e/2-h*a.length/2,x=r+n;t.append("text").attr("x",p).attr("y",m).text(o?o[0]:"").attr("font-size",u+"px").attr("font-family",f),t.append("text").attr("x",d).attr("y",m).text(o?o[1]:"").attr("font-size",u+"px").attr("font-family",f),t.append("text").attr("x",g).attr("y",x).text(a).attr("font-size",c+"px").attr("font-family",f)}function 
sD(t,e,n){let 
r={hasNeedle:!1,outerNeedle:!1,needleColor:"gray",needleStartValue:0,needleUpdateSpeed:1e3,arcColors:[],arcDelimiters:[],arcOverEffect:!0,arcPadding:0,arcPaddingColor:void 
0,arcLabels:[],arcLabelFontSize:void 
0,rangeLabel:[],centralLabel:"",rangeLabelFontSize:void 
0,labelsFont:"Roboto,Helvetica 
Neue,sans-serif"},{hasNeedle:i,needleColor:o,needleUpdateSpeed:a,arcColors:u,arcDelimiters:f,arcOverEffect:s,arcPadding:l,arcPaddingColor:c,arcLabels:h,arcLabelFontSize:p,rangeLabel:d,centralLabel:m,rangeLabelFontSize:g,labelsFont:x,outerNeedle:_,needleStartValue:w}=Object.assign(r,n);if(!yl(f,u,d))return;u=Wd(f,u);let 
y=e*.075,M=e*.5-y*2,S=e-y*2,T=M*.75,R=Wt(t).append("svg").attr("width",S+y*2).attr("height",M+y*4);Vd(R,M,y,u,T,f,s,l,c,h,p,x);let 
C=null;return 
i&&(C=Zd(R,M,y,o,T,m,_,w),Gd(R,M,y,o,m,_)),$d(R,e,M,y,T,d,m,g,x),new 
hi(R,a,C)}export{Wd as arcColorsModifier,Vd as arcOutline,sD as 
gaugeChart,$d as labelOutline,Gd as needleBaseOutline,Zd as 
needleOutline,xl as needleValueModifier,Ee as perc2RadWithShift};

