var Vt,ne,or,wt,ir,Kn,_s,Ht={},lr=[],Ss=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function it(e,t){for(var n in t)e[n]=t[n];return e}function cr(e){var t=e.parentNode;t&&t.removeChild(e)}function dr(e,t,n){var r,o,s,l={};for(s in t)s=="key"?r=t[s]:s=="ref"?o=t[s]:l[s]=t[s];if(arguments.length>2&&(l.children=arguments.length>3?Vt.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)l[s]===void 0&&(l[s]=e.defaultProps[s]);return Ft(e,l,r,o,null)}function Ft(e,t,n,r,o){var s={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++or};return ne.vnode!=null&&ne.vnode(s),s}function Bt(e){return e.children}function qt(e,t){this.props=e,this.context=t}function ht(e,t){if(t==null)return e.__?ht(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ht(e):null}function ur(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ur(e)}}function Jn(e){(!e.__d&&(e.__d=!0)&&wt.push(e)&&!Ut.__r++||Kn!==ne.debounceRendering)&&((Kn=ne.debounceRendering)||ir)(Ut)}function Ut(){for(var e;Ut.__r=wt.length;)e=wt.sort(function(t,n){return t.__v.__b-n.__v.__b}),wt=[],e.some(function(t){var n,r,o,s,l,i;t.__d&&(l=(s=(n=t).__v).__e,(i=n.__P)&&(r=[],(o=it({},s)).__v=s.__v+1,mn(i,s,o,n.__n,i.ownerSVGElement!==void 0,s.__h!=null?[l]:null,r,l??ht(s),s.__h),mr(r,s),s.__e!=l&&ur(s)))})}function pr(e,t,n,r,o,s,l,i,d,c){var u,f,p,h,v,g,$,k=r&&r.__k||lr,m=k.length;for(n.__k=[],u=0;u<t.length;u++)if((h=n.__k[u]=(h=t[u])==null||typeof h=="boolean"?null:typeof h=="string"||typeof h=="number"||typeof h=="bigint"?Ft(null,h,null,null,h):Array.isArray(h)?Ft(Bt,{children:h},null,null,null):h.__b>0?Ft(h.type,h.props,h.key,null,h.__v):h)!=null){if(h.__=n,h.__b=n.__b+1,(p=k[u])===null||p&&h.key==p.key&&h.type===p.type)k[u]=void 0;else for(f=0;f<m;f++){if((p=k[f])&&h.key==p.key&&h.type===p.type){k[f]=void 0;break}p=null}mn(e,h,p=p||Ht,o,s,l,i,d,c),v=h.__e,(f=h.ref)&&p.ref!=f&&($||($=[]),p.ref&&$.push(p.ref,null,h),$.push(f,h.__c||v,h)),v!=null?(g==null&&(g=v),typeof h.type=="function"&&h.__k!=null&&h.__k===p.__k?h.__d=d=fr(h,d,e):d=hr(e,h,p,k,v,d),c||n.type!=="option"?typeof n.type=="function"&&(n.__d=d):e.value=""):d&&p.__e==d&&d.parentNode!=e&&(d=ht(p))}for(n.__e=g,u=m;u--;)k[u]!=null&&(typeof n.type=="function"&&k[u].__e!=null&&k[u].__e==n.__d&&(n.__d=ht(r,u+1)),gr(k[u],k[u]));if($)for(u=0;u<$.length;u++)vr($[u],$[++u],$[++u])}function fr(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,t=typeof o.type=="function"?fr(o,t,n):hr(n,o,o,e.__k,o.__e,t));return t}function hr(e,t,n,r,o,s){var l,i,d;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||o!=s||o.parentNode==null)e:if(s==null||s.parentNode!==e)e.appendChild(o),l=null;else{for(i=s,d=0;(i=i.nextSibling)&&d<r.length;d+=2)if(i==o)break e;e.insertBefore(o,s),l=s}return l!==void 0?l:o.nextSibling}function Gn(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Ss.test(t)?n:n+"px"}function Mt(e,t,n,r,o){var s;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Gn(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Gn(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")s=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=n,n?r||e.addEventListener(t,s?Zn:Yn,s):e.removeEventListener(t,s?Zn:Yn,s);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Yn(e){this.l[e.type+!1](ne.event?ne.event(e):e)}function Zn(e){this.l[e.type+!0](ne.event?ne.event(e):e)}function mn(e,t,n,r,o,s,l,i,d){var c,u,f,p,h,v,g,$,k,m,w,y=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,i=t.__e=n.__e,t.__h=null,s=[i]),(c=ne.__b)&&c(t);try{e:if(typeof y=="function"){if($=t.props,k=(c=y.contextType)&&r[c.__c],m=c?k?k.props.value:c.__:r,n.__c?g=(u=t.__c=n.__c).__=u.__E:("prototype"in y&&y.prototype.render?t.__c=u=new y($,m):(t.__c=u=new qt($,m),u.constructor=y,u.render=Ps),k&&k.sub(u),u.props=$,u.state||(u.state={}),u.context=m,u.__n=r,f=u.__d=!0,u.__h=[]),u.__s==null&&(u.__s=u.state),y.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=it({},u.__s)),it(u.__s,y.getDerivedStateFromProps($,u.__s))),p=u.props,h=u.state,f)y.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(y.getDerivedStateFromProps==null&&$!==p&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps($,m),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate($,u.__s,m)===!1||t.__v===n.__v){u.props=$,u.state=u.__s,t.__v!==n.__v&&(u.__d=!1),u.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(I){I&&(I.__=t)}),u.__h.length&&l.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate($,u.__s,m),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(p,h,v)})}u.context=m,u.props=$,u.state=u.__s,(c=ne.__r)&&c(t),u.__d=!1,u.__v=t,u.__P=e,c=u.render(u.props,u.state,u.context),u.state=u.__s,u.getChildContext!=null&&(r=it(it({},r),u.getChildContext())),f||u.getSnapshotBeforeUpdate==null||(v=u.getSnapshotBeforeUpdate(p,h)),w=c!=null&&c.type===Bt&&c.key==null?c.props.children:c,pr(e,Array.isArray(w)?w:[w],t,n,r,o,s,l,i,d),u.base=t.__e,t.__h=null,u.__h.length&&l.push(u),g&&(u.__E=u.__=null),u.__e=!1}else s==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=js(n.__e,t,n,r,o,s,l,d);(c=ne.diffed)&&c(t)}catch(I){t.__v=null,(d||s!=null)&&(t.__e=i,t.__h=!!d,s[s.indexOf(i)]=null),ne.__e(I,t,n)}}function mr(e,t){ne.__c&&ne.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){ne.__e(r,n.__v)}})}function js(e,t,n,r,o,s,l,i){var d,c,u,f=n.props,p=t.props,h=t.type,v=0;if(h==="svg"&&(o=!0),s!=null){for(;v<s.length;v++)if((d=s[v])&&(d===e||(h?d.localName==h:d.nodeType==3))){e=d,s[v]=null;break}}if(e==null){if(h===null)return document.createTextNode(p);e=o?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,p.is&&p),s=null,i=!1}if(h===null)f===p||i&&e.data===p||(e.data=p);else{if(s=s&&Vt.call(e.childNodes),c=(f=n.props||Ht).dangerouslySetInnerHTML,u=p.dangerouslySetInnerHTML,!i){if(s!=null)for(f={},v=0;v<e.attributes.length;v++)f[e.attributes[v].name]=e.attributes[v].value;(u||c)&&(u&&(c&&u.__html==c.__html||u.__html===e.innerHTML)||(e.innerHTML=u&&u.__html||""))}if((function(g,$,k,m,w){var y;for(y in k)y==="children"||y==="key"||y in $||Mt(g,y,null,k[y],m);for(y in $)w&&typeof $[y]!="function"||y==="children"||y==="key"||y==="value"||y==="checked"||k[y]===$[y]||Mt(g,y,$[y],k[y],m)})(e,p,f,o,i),u)t.__k=[];else if(v=t.props.children,pr(e,Array.isArray(v)?v:[v],t,n,r,o&&h!=="foreignObject",s,l,s?s[0]:n.__k&&ht(n,0),i),s!=null)for(v=s.length;v--;)s[v]!=null&&cr(s[v]);i||("value"in p&&(v=p.value)!==void 0&&(v!==e.value||h==="progress"&&!v)&&Mt(e,"value",v,f.value,!1),"checked"in p&&(v=p.checked)!==void 0&&v!==e.checked&&Mt(e,"checked",v,f.checked,!1))}return e}function vr(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){ne.__e(r,n)}}function gr(e,t,n){var r,o;if(ne.unmount&&ne.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||vr(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(s){ne.__e(s,t)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&gr(r[o],t,typeof e.type!="function");n||e.__e==null||cr(e.__e),e.__e=e.__d=void 0}function Ps(e,t,n){return this.constructor(e,n)}function vn(e,t,n){var r,o,s;ne.__&&ne.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,s=[],mn(t,e=(!r&&n||t).__k=dr(Bt,null,[e]),o||Ht,Ht,t.ownerSVGElement!==void 0,!r&&n?[n]:o?null:t.firstChild?Vt.call(t.childNodes):null,s,!r&&n?n:o?o.__e:t.firstChild,r),mr(s,e)}Vt=lr.slice,ne={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(s){e=s}throw e}},or=0,qt.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=it({},this.state),typeof e=="function"&&(e=e(it({},n),this.props)),e&&it(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Jn(this))},qt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Jn(this))},qt.prototype.render=Bt,wt=[],ir=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ut.__r=0,_s=0;var Ct,Be,Qn,Wt=0,fn=[],Xn=ne.__b,er=ne.__r,tr=ne.diffed,nr=ne.__c,rr=ne.unmount;function Kt(e,t){ne.__h&&ne.__h(Be,e,Wt||t),Wt=0;var n=Be.__H||(Be.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function S(e){return Wt=1,Ts($r,e)}function Ts(e,t,n){var r=Kt(Ct++,2);return r.t=e,r.__c||(r.__=[n?n(t):$r(void 0,t),function(o){var s=r.t(r.__[0],o);r.__[0]!==s&&(r.__=[s,r.__[1]],r.__c.setState({}))}],r.__c=Be),r.__}function U(e,t){var n=Kt(Ct++,3);!ne.__s&&gn(n.__H,t)&&(n.__=e,n.__H=t,Be.__H.__h.push(n))}function Me(e,t){var n=Kt(Ct++,4);!ne.__s&&gn(n.__H,t)&&(n.__=e,n.__H=t,Be.__h.push(n))}function N(e){return Wt=5,Jt(function(){return{current:e}},[])}function Jt(e,t){var n=Kt(Ct++,7);return gn(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function As(){fn.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(zt),e.__H.__h.forEach(hn),e.__H.__h=[]}catch(t){e.__H.__h=[],ne.__e(t,e.__v)}}),fn=[]}ne.__b=function(e){Be=null,Xn&&Xn(e)},ne.__r=function(e){er&&er(e),Ct=0;var t=(Be=e.__c).__H;t&&(t.__h.forEach(zt),t.__h.forEach(hn),t.__h=[])},ne.diffed=function(e){tr&&tr(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(fn.push(t)!==1&&Qn===ne.requestAnimationFrame||((Qn=ne.requestAnimationFrame)||function(n){var r,o=function(){clearTimeout(s),sr&&cancelAnimationFrame(r),setTimeout(n)},s=setTimeout(o,100);sr&&(r=requestAnimationFrame(o))})(As)),Be=void 0},ne.__c=function(e,t){t.some(function(n){try{n.__h.forEach(zt),n.__h=n.__h.filter(function(r){return!r.__||hn(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],ne.__e(r,n.__v)}}),nr&&nr(e,t)},ne.unmount=function(e){rr&&rr(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(zt)}catch(n){ne.__e(n,t.__v)}};var sr=typeof requestAnimationFrame=="function";function zt(e){var t=Be;typeof e.__c=="function"&&e.__c(),Be=t}function hn(e){var t=Be;e.__c=e.__(),Be=t}function gn(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function $r(e,t){return typeof t=="function"?t(e):t}var br=function(e,t,n,r){var o;t[0]=0;for(var s=1;s<t.length;s++){var l=t[s++],i=t[s]?(t[0]|=l?1:2,n[t[s++]]):t[++s];l===3?r[0]=i:l===4?r[1]=Object.assign(r[1]||{},i):l===5?(r[1]=r[1]||{})[t[++s]]=i:l===6?r[1][t[++s]]+=i+"":l?(o=e.apply(i,br(e,i,n,["",null])),r.push(o),i[0]?t[0]|=2:(t[s-2]=0,t[s]=o)):r.push(i)}return r},ar=new Map,a=function(e){var t=ar.get(this);return t||(t=new Map,ar.set(this,t)),(t=br(this,t.get(e)||(t.set(e,t=(function(n){for(var r,o,s=1,l="",i="",d=[0],c=function(p){s===1&&(p||(l=l.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?d.push(0,p,l):s===3&&(p||l)?(d.push(3,p,l),s=2):s===2&&l==="..."&&p?d.push(4,p,0):s===2&&l&&!p?d.push(5,0,!0,l):s>=5&&((l||!p&&s===5)&&(d.push(s,0,l,o),s=6),p&&(d.push(s,p,0,o),s=6)),l=""},u=0;u<n.length;u++){u&&(s===1&&c(),c(u));for(var f=0;f<n[u].length;f++)r=n[u][f],s===1?r==="<"?(c(),d=[d],s=3):l+=r:s===4?l==="--"&&r===">"?(s=1,l=""):l=r+l[0]:i?r===i?i="":l+=r:r==='"'||r==="'"?i=r:r===">"?(c(),s=1):s&&(r==="="?(s=5,o=l,l=""):r==="/"&&(s<5||n[u][f+1]===">")?(c(),s===3&&(d=d[0]),s=d,(d=d[0]).push(2,0,s),s=0):r===" "||r==="	"||r===`
`||r==="\r"?(c(),s=2):l+=r),s===3&&l==="!--"&&(s=4,d=d[0])}return c(),d})(e)),t),arguments,[])).length>1?t:t[0]}.bind(dr);function yr(e,t,{whenVisible:n=!0,immediate:r=!1}={}){if(!t||t<=0)return()=>{};let o=!1,s=async()=>{if(!o&&!(n&&typeof document<"u"&&document.visibilityState!=="visible")){o=!0;try{await e()}catch{}finally{o=!1}}};r&&s();let l=setInterval(s,t*1e3);return()=>clearInterval(l)}var xt=class extends Error{constructor(t,n){super(n),this.name="CanvasActionError",this.code=t}};function kr(e,t){return!!(e&&t&&typeof e.requestId=="string"&&e.requestId&&e.requestId===t.requestId&&e.readStatus!=="reading"&&t.readStatus==="reading")}function Is({onState:e,onConnected:t,EventSourceImpl:n,fetchImpl:r=(...o)=>fetch(...o)}={}){let o=null,s=!1,l=!1,i=0,d=0,c;async function u(h,v){let $=await(await r("./action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({actionName:h,input:v??{}})})).json().catch(()=>({ok:!1}));if(!$?.ok)throw new xt($?.code||"error",$?.message||"action failed");return(h==="refresh"||h==="preview_run"||h==="save_draft")&&await f({required:!0}),$.result}async function f({required:h=!1}={}){let v=i,g=++d,$;try{let m=await r("./state");if(!m.ok){if(h)throw new xt("state-unavailable","The refreshed Canvas state could not be read. Try again.");return}$=await m.json()}catch(m){if(h)throw m;return}let k=!!(o&&$&&typeof o.requestId=="string"&&o.requestId&&o.requestId===$.requestId&&o.readStatus==="reading"&&$.readStatus!=="reading");l||g!==d||kr(o,$)||v!==i&&!k||(o=$,e?.(o,s))}let p=n||globalThis.EventSource;return f(),p&&(c=new p("./events"),c.onmessage=h=>{if(l)return;let v;try{v=JSON.parse(h.data)}catch{return}kr(o,v)||(i++,o=v,s=!0,e?.(o,s))},c.onopen=()=>{l||(s=!0,t?.(s))},c.onerror=()=>{l||(s=!1,t?.(s))}),{invoke:u,refresh:f,close(){l=!0,s=!1,d++,c?.close()},get state(){return o},get connected(){return s}}}function wr({view:e,mount:t,onState:n,poll:r}={}){let o=t||document.getElementById("app")||document.body;o.replaceChildren();let s=null,l=!1,i,d=()=>vn(e({state:s,invoke:i.invoke,connected:l}),o);i=Is({onState:(f,p)=>{s=f,l=p,n?.(f),d()},onConnected:f=>{l=f,d()}});let c=r?yr(()=>r.action?i.invoke(r.action,r.input):i.refresh(),r.seconds,{whenVisible:r.whenVisible,immediate:r.immediate}):()=>{},u=()=>{c(),i.close(),window.removeEventListener("pagehide",u)};return window.addEventListener("pagehide",u,{once:!0}),{invoke:i.invoke,refresh:i.refresh,stopPoll:c,close:u,get state(){return s}}}var _t={circle:[["circle",{cx:"12",cy:"12",r:"10"}]],"circle-check":[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]],inbox:[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}]],"layout-list":[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]],plus:[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]],"trash-2":[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]]},$n={};var Es="0 0 24 24",Rs=2;function Cr(e){if(typeof e!="string")return null;if(Object.hasOwn(_t,e))return _t[e];if(Object.hasOwn($n,e)){let t=$n[e];if(Object.hasOwn(_t,t))return _t[t]}return null}function Ns(e){return e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}function Os(e){return e.map(([t,n])=>{let r=Object.entries(n).map(([o,s])=>`${Ns(o)}="${Ds(s)}"`).join(" ");return`<${t} ${r} />`}).join("")}function xr(e){return Cr(e)!=null}function _r({name:e,size:t=16,class:n="",label:r}){let o=Cr(e);if(!o)return null;let s={xmlns:"http://www.w3.org/2000/svg",class:`lucide lucide-${e} ck-icon${n?" "+n:""}`,width:t,height:t,viewBox:Es,fill:"none",stroke:"currentColor","stroke-width":Rs,"stroke-linecap":"round","stroke-linejoin":"round",dangerouslySetInnerHTML:{__html:Os(o)}};return r?(s.role="img",s["aria-label"]=r):s["aria-hidden"]="true",a`<svg ...${s}></svg>`}function Ds(e){return String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}var Sr={"file-code":["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z","M14 2v6h6","m10 12-3 3 3 3","m14 12 3 3-3 3"],copy:["M20 8H10a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z","M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"],check:["M20 6 9 17l-5-5"],folder:["M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"],layers:["m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z","m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65","m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"],"chevron-right":["m9 18 6-6-6-6"],"chevron-down":["m6 9 6 6 6-6"],"chevrons-up-down":["m7 15 5 5 5-5","m7 9 5-5 5 5"],"chevrons-down-up":["m7 20 5-5 5 5","m7 4 5 5 5-5"],"arrow-up":["M12 19V5","m5 12 7-7 7 7"],"arrow-left":["m12 19-7-7 7-7","M5 12h14"],"maximize-2":["M15 3h6v6","m21 3-7 7","m3 21 7-7","M9 21H3v-6"],"minimize-2":["M4 14h6v6","M20 10h-6V4","m14 10 7-7","m3 21 7-7"],"refresh-cw":["M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8","M21 3v5h-5","M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16","M8 16H3v5"],sparkles:["M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z","M20 3v4","M22 5h-4"],"wand-sparkles":["m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72","m14 7 3 3","M5 6v4","M19 14v4","M10 2v2","M7 8H3","M21 16h-4","M11 3H9"],settings:["M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z","M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"],shield:["M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"],"shield-check":["M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z","m9 12 2 2 4-4"],play:["M6 3 20 12 6 21 6 3Z"],"flask-conical":["M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2","M8.5 2h7","M7 16h10"],"chart-column":["M3 3v16a2 2 0 0 0 2 2h16","M18 17V9","M13 17V5","M8 17v-3"],"triangle-alert":["m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z","M12 9v4","M12 17h.01"],"git-compare":["M5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z","M19 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z","M12 6h5a2 2 0 0 1 2 2v7","m15 9-3-3 3-3","M12 18H7a2 2 0 0 1-2-2V9","m9 15 3 3-3 3"],bot:["M12 8V4H8","M6 8h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z","M2 14h2","M20 14h2","M15 13v2","M9 13v2"],"book-open":["M12 7v14","M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"],"message-square":["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"],plug:["M12 22v-5","M9 8V2","M15 8V2","M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"],wrench:["M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"],"arrow-up-right":["M7 7h10v10","M7 17 17 7"]};function Gt(e){return{eval:"flask-conical",skill:"wand-sparkles",agent:"bot",instruction:"book-open",prompt:"message-square","mcp-server":"plug",tool:"wrench"}[e]??"layers"}function W({name:e,size:t=16}){return xr(e)?a`<${_r} name=${e} size=${t} />`:Object.hasOwn(Sr,e)?a`<svg class="ck-icon" width=${t} height=${t} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    ${Sr[e].map(n=>a`<path d=${n} />`)}
  </svg>`:null}var St=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),Yt=e=>typeof e=="number"&&Number.isSafeInteger(e)&&e>=0?e:null,lt=[{kind:"report",label:"Report"},{kind:"trajectory",label:"Conversation trace"},{kind:"output",label:"Output"},{kind:"source",label:"Report source"}];function bn(e){return e?.mode==="health"?lt.filter(t=>t.kind!=="trajectory"):lt}function yn(e,t){let n=e?.selectedRunId;return t!=="results"||!n||e.detail?.type!=="run"||e.detail.id!==n||!e.runs.some(r=>r.id===n)?null:{id:n,project:e.projectPath,workingDirectory:e.context.workingDirectory,revision:e.requestId}}function jr(e,t){if(typeof e!="string"||e.includes("\0"))return null;let n=t?e.replaceAll("\\","/").toLowerCase():e,r=t?/^\/\/([^/]+)\/+([^/]+)(?:\/|$)/.exec(n):null,o=t?/^[a-z]:\//.exec(n)?.[0]??r?.[0]:n.startsWith("/")?"/":null;if(!o)return null;let s=[];for(let i of n.slice(o.length).split("/"))!i||i==="."||(i===".."?s.pop():s.push(i));return`${r?`//${r[1]}/${r[2]}`:o.replace(/\/$/,"")}/${s.join("/")}`}async function Ls(e,t,n){if(!t)return e;let r=String(e??"");if(/Display limit reached\.|\[Display truncated;\s*original (?:saved )?evidence/i.test(r))throw new Error("The saved evidence for this attempt is incomplete.");let s=/^##\s+(?:validation\.log|engine-output\.jsonl|engine\.log)\r?\n/m.test(r)?r.split(/(?=^##\s+(?:validation\.log|engine-output\.jsonl|engine\.log)\r?\n)/m).find(m=>/^##\s+engine-output\.jsonl\r?\n/.test(m))?.replace(/^##\s+engine-output\.jsonl\r?\n/,"")??"":!/^#\s+/m.test(r)&&!/^###?\s+/m.test(r)&&!/^Check ID:\s+/m.test(r)?r:"",l=s?s.split(/\r?\n/):[],i=[];for(let m of l)if(m.startsWith("{"))try{let w=JSON.parse(m);St(w)&&w.type==="trial-result"&&i.push({raw:m,row:w})}catch{throw new Error("The saved evidence for this attempt is incomplete.")}if(i.length){let m=t.artifact;if(m){let P=new TextEncoder().encode(JSON.stringify([m.itemId,m.evalName,m.evalFilePath,t.configuration,t.model,t.attempt]));if([...new Uint8Array(await crypto.subtle.digest("SHA-256",P))].map(C=>C.toString(16).padStart(2,"0")).join("")!==t.caseId)throw new Error("The selected attempt doesn't match the saved result.")}let w=m?i.filter(({row:P})=>P.itemId===m.itemId):[],y=typeof n=="string"&&/^(?:[a-z]:[\\/]|[\\/]{2})/i.test(n),I=jr(m?.evalFilePath,y);if((m?i.filter(({row:P})=>P.evalName===m.evalName&&(I===null?P.evalFilePath===m.evalFilePath:jr(P.evalFilePath,y)===I)&&P.stimulus===m.stimulus&&(P.trialIndex===void 0&&m.totalTrials===1?0:P.trialIndex)===t.attempt):[]).length>1)throw new Error("The saved evidence matches more than one attempt. It can't be shown as this attempt's evidence.");let A=w.length===1?w[0]:null;if(A){let P=A.row,z=typeof P.trajectory?.metadata?.model=="string"?P.trajectory.metadata.model:P.model,C=z==null||typeof z=="string"&&z.trim().toLowerCase()==="unknown"?null:z,se=m.totalTrials===1&&t.attempt===0&&P.trialIndex===void 0&&P.totalTrials===void 0;(P.evalName!==m.evalName||P.evalFilePath!==m.evalFilePath||P.stimulus!==m.stimulus||P.variant!==t.configuration||C!==t.model||!se&&(P.trialIndex!==t.attempt||P.totalTrials!==m.totalTrials))&&(A=null)}if(!A)throw new Error(w.length>1?"The saved evidence matches more than one attempt. It can't be shown as this attempt's evidence.":"No saved evidence is available for this attempt.");if(t.turn!==null){let P=Array.isArray(A.row.trajectory?.events)?A.row.trajectory.events.filter(z=>St(z)&&Yt(z.turn)===t.turn):[];if(!P.length)throw new Error(`No saved evidence is available for turn ${t.turn} of this attempt.`);return JSON.stringify({type:A.row.type??"trial-result",...A.row.itemId!==void 0?{itemId:A.row.itemId}:{},...A.row.stimulus!==void 0?{stimulus:A.row.stimulus}:{},...A.row.variant!==void 0?{variant:A.row.variant}:{},trialIndex:Yt(A.row.trialIndex)??0,turn:t.turn,trajectory:{...St(A.row.trajectory?.stimulus)?{stimulus:A.row.trajectory.stimulus}:{},events:P}},null,2)}return JSON.stringify(A.row,null,2)}let d=/^Check ID:\s+/m.test(r)||!/^##\s+/m.test(r),c=d?r.split(/(?=^###\s+)/m).map(m=>m.replace(/\r?\n<\/details>\s*$/i,"").trim()).filter(m=>m.startsWith("### ")):r.split(/(?=^##\s+)/m).map(m=>m.trim()).filter(m=>m.startsWith("## ")),u=m=>String(m??"").replace(/\\([\\`*_[\]<>#|])/g,"$1"),f=m=>{let w=/^(?:Check|Case) ID:\s*([^\r\n·]+)/m.exec(m)?.[1]?.trim()??"";return w?u(w):null},p=m=>f(m)===t.caseId,h=c.filter(m=>{if(f(m)!==t.caseId)return!1;let y=u(m.split(/\r?\n/,1)[0]??""),I=/^(?:Case ID:\s*.+|(?:configuration:\s*.+\s*·\s*)?attempt\s+\d+|configuration:\s*[^\r\n]+)$/m.exec(m)?.[0],T=/(\([^()]*\b(?:attempt\s+\d+|configuration:)[^()]*\))\s*$/i.exec(y)?.[1]??"",A=I??T,P=/(?:^|[·,(]\s*)attempt\s+(\d+)(?=\s*(?:$|[·,)]))/i.exec(A);if(P&&Number(P[1])-1!==t.attempt)return!1;let z=I?/(?:^|·\s*)configuration:\s*(.+?)(?=\s*(?:$|\s·\s))/i.exec(I):/(?:^|[(,]\s*)configuration:\s*([^,)\r\n]+?)(?=\s*(?:$|[,)]))/i.exec(T);return!(z&&t.configuration&&u(z[1].trim())!==t.configuration)}),v=h.filter(p),g=(v.length>0?v:h).filter(m=>!/^##\s+Recorded result:/i.test(m)),$=g.length>0?g:v.length>0?v:h;if($.length!==1)throw new Error($.length>1?"The saved evidence matches more than one attempt. It can't be shown as this attempt's evidence.":"No saved evidence is available for this attempt.");let k=$[0];if(/\[Display truncated|Display limit reached\./i.test(k)||/Display limit reached\.|\[Display truncated;\s*original (?:saved )?evidence/i.test(r))throw new Error("The saved evidence for this attempt is incomplete.");if(t.turn!==null){if(d)throw new Error(`No saved evidence is available for turn ${t.turn} of this attempt.`);let m=new RegExp(`(?:\xB7\\s*turn\\s+${t.turn}|\\([^)]*\\bturn\\s*[:=]?\\s*${t.turn}\\b[^)]*\\))\\s*$`,"i");if(/^###\s+/m.test(k)){let y=k.split(/(?=^###\s+)/m).map(P=>P.trim()).filter(Boolean),I=y[0]&&!y[0].startsWith("### ")?y[0]:"",A=y.filter(P=>P.startsWith("### ")).filter(P=>m.test(P.split(/\r?\n/,1)[0]??""));if(!A.length)throw new Error(`No saved evidence is available for turn ${t.turn} of this attempt.`);return[I,...A].filter(Boolean).join(`

`)}let w=k.split(/\r?\n/,1)[0]??"";if(!m.test(w))throw new Error(`No saved evidence is available for turn ${t.turn} of this attempt.`)}return k}function kn(e,t){let n=null,r=null,o=0,s=(i,d)=>!!i&&!!d&&i.id===d.id&&i.project===d.project&&i.workingDirectory===d.workingDirectory,l=()=>{o++,r=null};return{clear:l,setContext(i){s(n,i)?n.revision!==i.revision&&r?.status==="loading"&&(o++,r={...r,status:"error",error:"The saved results changed while loading. Choose the evidence again to reread it."}):l(),n=i?{...i}:null},get snapshot(){return s(n,r)?{...r,stale:n.revision!==r.revision}:null},async read(i,d=null){if(!n||!lt.some(h=>h.kind===i))return!1;let c=St(d)&&typeof d.caseId=="string"&&d.caseId.trim()?{caseId:d.caseId,...typeof d.caseName=="string"&&d.caseName.trim()?{caseName:d.caseName}:{},...typeof d.stimulus=="string"&&d.stimulus.trim()?{stimulus:d.stimulus}:{},attempt:Yt(d.attempt),configuration:typeof d.configuration=="string"&&d.configuration.trim()?d.configuration:null,model:typeof d.model=="string"?d.model:null,...St(d.artifact)?{artifact:d.artifact}:{},turn:Yt(d.turn),graderId:typeof d.graderId=="string"&&d.graderId.trim()?d.graderId:null}:null,u={...n,kind:i,focus:c},f=++o,p=()=>f===o&&s(n,u)&&n.revision===u.revision;r={...u,status:"loading",text:"",error:""},t();try{let h=await e("read_evidence",{id:u.id,kind:i});if(!p())return!1;if(h?.discarded)throw new Error("The evidence read was interrupted. Choose the evidence again to reread it.");if(h?.available===!1)throw new Error(h.message||"Saved evidence is unavailable.");if(h?.id!==u.id||h?.kind!==i||typeof h?.text!="string")throw new Error("The returned evidence doesn't match the selected run or type. Select the evidence again to reload it.");let v=await Ls(h.text,c,u.project);return p()?(r={...u,status:"ready",text:v,error:""},t(),!0):!1}catch(h){return p()&&(r={...u,status:"error",text:"",error:String(h?.message??h)},t()),!1}}}}function wn(e){let t=c=>({status:"error",passed:!1,diagnostic:`Invalid saved grader outcome: ${c}`});if(!e||typeof e!="object"||Array.isArray(e))return t("expected an object.");let n=e,r=Object.hasOwn(n,"passed"),o=Object.hasOwn(n,"status");if(r&&typeof n.passed!="boolean")return t("passed must be a boolean.");let s=o?n.status:void 0;if(o&&(typeof s!="string"||!["passed","pass","failed","fail","error","valid"].includes(s)))return t("status is not recognized.");let l=s==="passed"||s==="pass",i=s==="failed"||s==="fail"||s==="error";if(r&&(l&&n.passed===!1||i&&n.passed===!0))return t("passed contradicts status.");if(!r&&!l&&!i)return t("no outcome was reported.");let d=r?n.passed===!0:l;return{status:s==="error"?"error":d?"passed":"failed",passed:d}}var Ze=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),Pr=e=>typeof e=="number"&&Number.isSafeInteger(e)&&e>=0?e:null;function Cn(e){return Ze(e)?Array.isArray(e.cases)?e.cases:Array.isArray(e.results)?e.results:Array.isArray(e.trials)?e.trials:[]:[]}function Xe(e){return Cn(e).map((n,r)=>Ye(n,r)).filter(Boolean)}function vt(e,t){if(!Ze(e)||!Array.isArray(t))return null;let n=l=>typeof l=="string"&&l.trim()?l:null,r=n(e.id);if(!r||t.filter(l=>Ze(l)&&n(l.id)===r).length!==1)return null;let o=Ze(e.trial)?e.trial:null,s=t.filter(l=>{if(!Ze(l)||r!==n(l.id))return!1;let i=Ze(l.trial)?l.trial:null;for(let d of["configuration","model","attempt"])if(o&&Object.hasOwn(o,d)&&o[d]!==i?.[d])return!1;if(e.trials!=null&&l.trials!=null&&e.trials!==l.trials)return!1;if(o?.artifact){if(!i?.artifact)return!1;for(let d of["itemId","evalName","evalFilePath","stimulus","caseIndex","contextHash","totalTrials"])if(o.artifact[d]!==i.artifact[d])return!1}return!((e.trials??1)>1&&!o&&i)});return s.length===1?s[0]:null}function Tr(e,t){return[...e.map((n,r)=>({id:n.id||`original-${r}`,name:n.name,trials:n.trials??1,original:n,changed:null})),...t.map((n,r)=>({id:n.id||`changed-${r}`,name:n.name,trials:n.trials??1,original:null,changed:n}))]}function mt(e,t,n,r){if(!e||!t.length)return e;let o=vt(r,t);if(!o)return e;let s=$t(e,o);return Ye({...o,durationMs:e.durationMs??o.durationMs,totalTokens:e.totalTokens??o.totalTokens,inputTokens:e.inputTokens??o.inputTokens,outputTokens:e.outputTokens??o.outputTokens,usageSource:e.usageSource??o.usageSource,turns:e.turns??o.turns,observedTools:e.observedTools??o.observedTools,observedSkills:e.observedSkills??o.observedSkills,judgeUsage:e.judgeUsage??o.judgeUsage,graderOutcomes:e.graderOutcomes.length?e.graderOutcomes:o.graderOutcomes,evidenceDiagnostics:s,id:e.id,name:e.name,status:e.status,outcome:e.outcome,trials:r.trials??o.trials,...Object.hasOwn(r,"judgeUsage")?{judgeUsage:e.judgeUsage}:{}},n,e.trials??o.trials)}function gt(e,t=[]){if(!Ze(e))return[];let n=Ze(e.receipt)?e.receipt:e,r=e.original?.runId??n.source?.baseline?.runId,o=e.changed?.runId??n.source?.treatment?.runId,s=Array.isArray(t)&&r?Cn(t.find(d=>d?.id===r)):[],l=Array.isArray(t)&&o?Cn(t.find(d=>d?.id===o)):[];if(Array.isArray(e.caseComparison)&&e.caseComparison.length)return e.caseComparison.map((d,c)=>({id:d.id||`row-${c}`,name:d.name||`Case ${c+1}`,trials:Pr(d.trials)??1,original:d.original?mt(Ye(d.original,c),s,c,d.original):null,changed:d.changed?mt(Ye(d.changed,c),l,c,d.changed):null}));if(Array.isArray(e.cases)&&e.cases.length)return e.cases.map((d,c)=>({id:d.id||`row-${c}`,name:d.name||`Case ${c+1}`,trials:Pr(d.trials)??1,original:d.original?mt(Ye(d.original,c),s,c,d.original):null,changed:d.changed?mt(Ye(d.changed,c),l,c,d.changed):null}));if(e.original||e.changed||e.summary?.runs){let d=e.original?.cases?.length?e.original.cases:e.summary?.runs?.[0]?.cases??[],c=e.changed?.cases?.length?e.changed.cases:e.summary?.runs?.[1]?.cases??[],u=Array.isArray(d)?d.filter(Ze):[],f=Array.isArray(c)?c.filter(Ze):[],p=Xe({cases:d}).map((v,g)=>mt(v,s,g,u[g])),h=Xe({cases:c}).map((v,g)=>mt(v,l,g,f[g]));return Tr(p,h)}if(s.length||l.length){let d=Tr(Xe({cases:s}),Xe({cases:l}));if(d.length)return d}let i=n.outcomes?.transitions;if(Ze(i)){let d=new Map;for(let u of i.fixedFailures??[])d.set(String(u),{origStatus:"fail",chgStatus:"pass"});for(let u of i.newFailures??[]){let f=String(u);d.set(f,{origStatus:d.get(f)?.origStatus??"pass",chgStatus:"fail"})}for(let u of i.persistentFailures??[])d.set(String(u),{origStatus:"fail",chgStatus:"fail"});for(let u of i.fixedErrors??[]){let f=String(u);d.set(f,{origStatus:"error",chgStatus:d.get(f)?.chgStatus??"pass"})}for(let u of i.newErrors??[]){let f=String(u);d.set(f,{origStatus:d.get(f)?.origStatus??"pass",chgStatus:"error"})}for(let u of i.persistentErrors??[])d.set(String(u),{origStatus:"error",chgStatus:"error"});let c=[...d.entries()].map(([u,{origStatus:f,chgStatus:p}])=>({id:u,name:u,trials:1,original:Ye({id:u,name:u,status:f}),changed:Ye({id:u,name:u,status:p})}));if(c.length)return c}return[]}function jt(e,t=[]){if(!Ze(e))return!1;if(typeof e.singleTrialLowConfidence=="boolean")return e.singleTrialLowConfidence;let n=gt(e,t);return n.length>0?n.some(r=>(r.trials??1)<=1):!0}var Le=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),Ar=e=>typeof e=="number"&&Number.isFinite(e)&&e>=0?e:null,Fe=e=>typeof e=="number"&&Number.isSafeInteger(e)&&e>=0?e:null;function Ir(e,t=""){let n=`${e??""} ${t??""}`.trim().toLowerCase();return/\bcompleted\b/.test(n)?"Checks run completion only, not answer correctness.":/\b(?:output-contains|output-exact|output-matches|regex)\b/.test(n)?"Checks output text against the expected pattern, not full answer correctness or tool use.":/\b(?:file-contains|file-matches)\b/.test(n)?"Checks workspace file contents after the run, not how the response was produced.":/\b(?:tool-calls|tool_call|mcp-call|skill-invocation|skill_activation|skill-activation|agent-delegation|subagent)\b/.test(n)?"Checks recorded tool, skill or agent activity, not whether the answer is correct.":/\b(?:prompt|llm|panel|rubric)\b/.test(n)?"Uses a model to score the response against the scoring rules. Scores can vary between runs.":"Checks one configured condition in the saved run, not whether the whole answer is correct."}function xn(e){let t=String(e??"").trim().toLowerCase();return t==="passed"||t==="pass"?"pass":t==="failed"||t==="fail"?"fail":t==="errored"||t==="error"?"error":t==="skipped"?"skipped":t==="not-evaluated"||t==="not evaluated"?"not-evaluated":t||"unknown"}function Er(e){let t=Ar(e);return t===null?"not reported":t<1e3?`${Math.round(t)} ms`:`${(t/1e3).toFixed(t%1e3===0?0:1)} s (${Math.round(t)} ms)`}function Rr(e){if(!Le(e))return null;let t=typeof e.model=="string"&&e.model.trim()?e.model.trim():null,n=Le(e.tokenUsage)?e.tokenUsage:e,r=Fe(n.inputTokens),o=Fe(n.outputTokens),s=n.totalTokens==null?r!==null&&o!==null?Fe(r+o):null:Fe(n.totalTokens);return{model:t,inputTokens:r,outputTokens:o,totalTokens:s}}function Nr(e){if(!Le(e))return null;let t={model:typeof e.model=="string"&&e.model.trim()?e.model.trim():null,completeness:{}};for(let n of["inputTokens","outputTokens","totalTokens"]){let r=e.completeness?.[n],o=Fe(e[n]);t[n]=r==="complete"?o:null,t.completeness[n]=["partial","unknown","ambiguous"].includes(r)?r:r==="complete"&&o!==null?"complete":"ambiguous"}return t}function _n(e){return e.inputTokens===null&&e.outputTokens===null?"":` (${e.inputTokens===null?"input not reported":`${e.inputTokens} in`} / ${e.outputTokens===null?"output not reported":`${e.outputTokens} out`})`}function Tt(e){let t=Rr(e);return t?`Judge (${t.model??"model not reported"}): ${t.totalTokens===null?"tokens not reported":`${t.totalTokens} tokens`}${_n(t)}`:""}function Or(e){if(!Le(e))return"not reported";let t=Le(e.tokenUsage)?e.tokenUsage:null,n=Fe(e.totalTokens??t?.totalTokens),r=Fe(e.inputTokens??t?.inputTokens),o=Fe(e.outputTokens??t?.outputTokens),s=e.usageSource??t?.source??null,l=typeof s=="string"&&s.trim()?s.trim():null,i=Nr(e.judgeUsage),d=i?i.totalTokens!==null?`Judge${i.model?` (${i.model})`:""}: ${i.totalTokens} tokens${_n(i)}`:`Total judge usage unknown - ${i.completeness.totalTokens==="ambiguous"?"measurement completeness or ownership is unverified":i.completeness.totalTokens==="partial"?"some judges did not report usage":"complete measurements are unavailable"}${_n(i)}`:"";if(n===null)return d?`not reported (${d})`:"not reported";let c=[];r!==null&&o!==null&&c.push(`${r} in / ${o} out`),c.push("role: task/agent"),l&&c.push(`source: ${l}`);let u=`${n} tokens (${c.join("; ")})`;return d?`${u} \xB7 ${d}`:u}function jn(e){let t=Fe(e);return t===null?"not reported":`${t} ${t===1?"turn":"turns"}`}function Sn(e){if(!Array.isArray(e))return"not reported";let t=e.map(n=>String(n??"").trim()).filter(Boolean);return t.length>0?`Observed: ${t.join(", ")}`:"not reported"}function Dr(e,t=""){let n=r=>{let o=String(r??"").trim().toLowerCase();return o?/\b(?:output-contains|output-not-contains|output-exact|output-matches|output-not-matches|regex)\b/.test(o)?"output":/\b(?:tool-calls|tool_call|mcp-call|skill-invocation|skill_activation|skill-activation|agent-delegation|subagent|transcript-contains|transcript-not-contains|transcript-matches|transcript-not-matches|assistant-contains-tool-output|completed|exit-success)\b/.test(o)?"trajectory":/\b(?:prompt|llm|panel|rubric)\b/.test(o)?"judge":/\b(?:file-contains|file-not-contains|file-matches|file-not-matches|file-exists|file-not-exists|diff-contains|diff-not-contains|diff-matches|diff-match|diff-empty)\b/.test(o)?"workspace":null:null};return n(e)??n(t)}function Pt(e,t="check-0"){let{status:n,passed:r,diagnostic:o}=wn(e),s=Le(e)?e:{},l=typeof s.kind=="string"&&s.kind.trim()?s.kind.trim():typeof s.type=="string"&&s.type.trim()?s.type.trim():typeof s.graderType=="string"&&s.graderType.trim()?s.graderType.trim():"check",i=typeof s.name=="string"&&s.name.trim()?s.name.trim():typeof s.configuredName=="string"&&s.configuredName.trim()?s.configuredName.trim():typeof s.nativeName=="string"&&s.nativeName.trim()?s.nativeName.trim():l,d=n==="error"?null:typeof s.score=="number"&&Number.isFinite(s.score)?s.score:null,c=typeof s.reason=="string"?s.reason:typeof s.explanation=="string"?s.explanation:typeof s.evidence=="string"?s.evidence:void 0,u=o??c??"No grading explanation was provided.",f=o?"provided":s.reasonState==="provided"||s.reasonState==="missing"?s.reasonState:typeof c=="string"&&c.trim()!==""&&c!=="No grading explanation was provided."&&c!=="No native grader explanation was provided."?"provided":"missing",p=Fe(s.turn),h=Object.hasOwn(s,"children")?s.children:s.details,g=(h===void 0?[]:Array.isArray(h)?h:[null]).map(($,k)=>Pt($,`${t}.${k}`)).filter(Boolean);return{id:typeof s.id=="string"&&s.id.trim()?s.id:t,name:i,kind:l,status:n,passed:r,score:d,reason:u,reasonState:f,turn:p,proves:typeof s.proves=="string"&&s.proves.trim()?s.proves:Ir(l,i),judgeUsage:Rr(s.judgeUsage??s.judge),children:g}}function Ms(e,t=240){let n=String(e??"");return n.length>t?`${n.slice(0,t-1)}\u2026`:n}function Lr(e,t,n=null){let r=Fe(e.turn)??n,o=Array.isArray(e.children)?e.children.map(f=>Lr(f,t,r)):[],s=e.kind==="composite"?null:Dr(e.kind,e.name),l=r!==null?` turn ${r}`:"",i={caseId:t.caseId,caseName:t.caseName,...typeof t.stimulus=="string"&&t.stimulus?{stimulus:t.stimulus}:{},attempt:t.attempt,configuration:t.configuration,model:t.model,...t.artifact?{artifact:t.artifact}:{},turn:r,evidenceKind:s},d=r!==null&&t.turns!==null&&r>=t.turns,c=e.reasonState==="provided"?!!e.reason:e.reasonState==="missing"?!1:!!(e.reason&&e.reason!=="No grading explanation was provided."&&e.reason!=="No native grader explanation was provided."),u;if(t.ambiguous||!t.artifact||t.attempt===null||["skipped","not-evaluated"].includes(t.status)||!s||d)u={...i,target:null,available:!1,summary:d?"No checkpoint turn is available for this attempt":"No saved evidence is available for this attempt"};else if(s==="output"||s==="judge"){let f=r!==null?t.outputAvailable&&typeof t.turnOutputs?.[r]=="string"&&t.turnOutputs[r].trim()?t.turnOutputs[r].trim():null:t.outputAvailable?t.observed:null;u=f?{...i,target:"output",available:!0,summary:`Attempt ${t.attempt+1}${l} output: ${f.slice(0,160)}`}:{...i,target:null,available:!1,summary:r!==null?"No checkpoint output is available for this attempt":"No output is available for this attempt"}}else if(s==="trajectory")if(r!==null){let f=Le(t.turnEvidence?.[r])?t.turnEvidence[r]:null,p=Array.isArray(f?.observedSkills)?f.observedSkills.filter(Boolean):[],h=Array.isArray(f?.observedTools)?f.observedTools.filter(Boolean):[],g=[typeof f?.summary=="string"&&f.summary.trim()?f.summary.trim():"",p.length?`skills: ${p.join(", ")}`:"",h.length?`tools: ${h.join(", ")}`:""].filter(Boolean);u=g.length>0?{...i,target:"trajectory",available:!0,summary:`Attempt ${t.attempt+1}${l} trajectory (${g.join("; ")})`}:{...i,target:null,available:!1,summary:"No checkpoint conversation trace is available for this attempt"}}else{let f=!!(t.turnEvidence&&Object.keys(t.turnEvidence).length>0),p=!!(t.trajectoryAvailable||f||t.hasObservations||t.observedSkills?.length||t.observedTools?.length),h=[t.turns!==null?jn(t.turns):"",t.observedSkills?.length?`skills: ${t.observedSkills.join(", ")}`:"",t.observedTools?.length?`tools: ${t.observedTools.join(", ")}`:""].filter(Boolean),v=h.length?h:["recorded events"];u=p?{...i,target:"trajectory",available:!0,summary:`Attempt ${t.attempt+1} trajectory (${v.join("; ")})`}:{...i,target:null,available:!1,summary:"No conversation trace is available for this attempt"}}else u=r===null&&c?{...i,target:"report",available:!0,summary:`Attempt ${t.attempt+1} workspace check: ${e.reason.slice(0,160)}`}:{...i,target:null,available:!1,summary:r!==null?"No checkpoint file evidence is available for this attempt":"No file evidence is available for this attempt"};return{...e,turn:r,sameAttemptEvidence:{...u,summary:Ms(u.summary)},children:o}}function Fs(e){if(!Array.isArray(e)||!e.length)return[];let t=new Map,n=[];for(let[r,o]of e.entries()){if(!Le(o)){n.push(Pt(o,`check-${r}`));continue}let s="";if(typeof o.id=="string"&&o.id.startsWith("["))try{let i=JSON.parse(o.id);Array.isArray(i)&&typeof i[0]=="string"&&/^grade(?:\.\d+)*$/.test(i[0])&&(s=i[0])}catch{}let l=Pt({...o,kind:o.type??o.nativeName??o.name??(s==="grade"?"composite":"check"),name:o.name??o.nativeName??o.type??(s==="grade"?"Overall check":o.id??`check-${r}`)},`check-${r}`);if(l){if(s){t.set(s,l);let i=s.lastIndexOf("."),d=i>0?t.get(s.slice(0,i)):null;if(d){d.children.push(l);continue}}n.push(l)}}return n}function $t(...e){let t=[];for(let n of e)for(let r of Array.isArray(n?.evidenceDiagnostics)?n.evidenceDiagnostics:[])Le(r)&&typeof r.message=="string"&&["partial","unavailable","unbound"].includes(r.state)&&!t.some(o=>o.state===r.state&&o.message===r.message)&&t.push(r);return t}function Ye(e,t=0,n=1){if(!Le(e))return null;let r=Le(e.trial)?e.trial:null,o=Le(e.tokenUsage)?e.tokenUsage:Le(r?.tokenUsage)?r.tokenUsage:null,s=Le(e.behavior)?e.behavior:null,l=Array.isArray(s?.observations)?s.observations.filter(Le):[],i=typeof e.name=="string"&&e.name.trim()?e.name:`Case ${t+1}`,d=Le(r?.artifact)?r.artifact:null,c=Fe(d?.totalTrials??e.trials??r?.trials),u=c!==null&&c>=1?c:n,f=Ar(e.durationMs??r?.durationMs),p=Fe(e.inputTokens??r?.inputTokens??o?.inputTokens),h=Fe(e.outputTokens??r?.outputTokens??o?.outputTokens),v=Fe(e.totalTokens??r?.totalTokens??o?.totalTokens),g=e.usageSource??r?.usageSource??o?.source??null,$=typeof g=="string"&&g.trim()?g.trim():null,k=Fe(e.turns??e.turnCount??r?.turns??r?.turnCount),m=Q=>{if(!Array.isArray(Q))return null;let M=Q.map(ve=>String(ve??"").trim()).filter(Boolean);return M.length?M:null},w=m(e.observedTools??r?.observedTools)??(()=>{let Q=l.filter(M=>M.kind==="mcp-call"||M.kind==="agent-delegation").map(M=>M.kind==="mcp-call"?M.server&&M.tool?`${M.server}/${M.tool}`:String(M.tool??M.name??""):M.name&&M.name!=="task"?`task (${M.name})`:String(M.name??"")).filter(Boolean);return Q.length?[...new Set(Q)]:null})(),y=m(e.observedSkills??r?.observedSkills)??(()=>{let Q=l.filter(M=>M.kind==="skill-activation").map(M=>String(M.name??"").trim()).filter(Boolean);return Q.length?[...new Set(Q)]:null})(),I=s?Fs(s.graders):Object.hasOwn(e,"graderOutcomes")?(Array.isArray(e.graderOutcomes)?e.graderOutcomes:[null]).map((Q,M)=>Pt(Q,`check-${M}`)):[],T=Nr(Object.hasOwn(e,"judgeUsage")?e.judgeUsage:r?.judgeUsage??(I.length?{}:null)),A=typeof e.status=="string"?e.status:typeof e.outcome=="string"?e.outcome.toLowerCase():"unknown",P=typeof e.id=="string"&&e.id.trim()?e.id:`case-${t}`,z=typeof e.stimulus=="string"&&e.stimulus.trim()?e.stimulus:void 0,C=Fe(r?.attempt),se=r&&typeof r.configuration=="string"&&r.configuration.trim()?r.configuration:null,ke=typeof e.observed=="string"?e.observed.trim():"",ae=ke&&!/^(?:Actual response was not provided by the evaluator|Stopped before this test finished|No complete result was produced)\.$/.test(ke)?ke:null,pe=Le(e.turnOutputs)?e.turnOutputs:null,oe=Le(e.turnEvidence)?e.turnEvidence:null,$e=typeof e.outputAvailable=="boolean"?e.outputAvailable:!!pe,ie=typeof e.trajectoryAvailable=="boolean"?e.trajectoryAvailable:!!(oe&&Object.keys(oe).length>0||l.length>0||y?.length||w?.length),R=!!e.ambiguousEvidence,J={caseId:P,caseName:i,...z?{stimulus:z}:{},status:xn(e.outcome??e.status),attempt:C,configuration:se,model:r?.model??null,...d?{artifact:d}:{},observed:ae,outputAvailable:$e,trajectoryAvailable:ie,hasObservations:l.length>0,observedTools:w,observedSkills:y,turns:k,turnOutputs:pe,turnEvidence:oe,ambiguous:R},ee=I.map(Q=>Lr(Q,J)),re={id:P,name:i,...z?{stimulus:z}:{},status:A,outcome:xn(e.outcome??e.status),observed:ae,outputAvailable:$e,trajectoryAvailable:ie,ambiguousEvidence:R,evidenceDiagnostics:$t(e),...pe?{turnOutputs:pe}:{},...oe?{turnEvidence:oe}:{},trials:u,durationMs:f,totalTokens:v,inputTokens:p,outputTokens:h,usageSource:$,turns:k,observedTools:w,observedSkills:y,judgeUsage:T,graderOutcomes:ee,trial:r?{configuration:se,model:r.model??null,attempt:C,...d?{artifact:d}:{}}:null};return{...re,formattedDuration:Er(re.durationMs),formattedTokens:Or(re),formattedTurns:jn(re.turns),formattedObservedTools:Sn(re.observedTools),formattedObservedSkills:Sn(re.observedSkills)}}var He=[{id:"definitions",label:"Evals",icon:"flask-conical"},{id:"assets",label:"Assets",icon:"layers"},{id:"results",label:"Results",icon:"chart-column"},{id:"diagnostics",label:"Problems",icon:"triangle-alert"}],Zt=20,Mr=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function Qt(e,t=""){return Object.entries(e).map(([n,r])=>{let o=/^[a-zA-Z_][a-zA-Z0-9_-]*$/.test(n)&&!/^(?:null|true|false)$/i.test(n)?n:JSON.stringify(n);return r&&typeof r=="object"&&!Array.isArray(r)&&Object.keys(r).length?`${t}${o}:
${Qt(r,`${t}  `)}`:`${t}${o}: ${JSON.stringify(r)}`}).join(`
`)}function Fr(e=[]){let t=i=>e.filter(d=>d.kind===i).map(d=>String(d.relativePath??"").replaceAll("\\","/")).filter(d=>d&&!d.startsWith("/")&&!d.includes(":")&&!d.split("/").some(c=>!c||c===".."||c===".")),n=i=>i.includes("/")?i.slice(0,i.lastIndexOf("/")):".",r=i=>{let d=[...new Set(i)].sort((u,f)=>u.localeCompare(f)).filter((u,f,p)=>!p.some(h=>h!==u&&(h==="."||u.startsWith(`${h}/`))));if(d.length<=64)return d;let c=d[0].split("/");for(let u of d.slice(1)){let f=u.split("/");for(;c.some((p,h)=>p!==f[h]);)c.pop()}return[c.join("/")||"."]},o=t("eval"),s=t("skill").filter(i=>/\/SKILL\.md$/i.test(i)).map(i=>n(n(i))),l=[...new Set(["*.eval.yaml",...o.map(i=>{let d=i.split("/").at(-1),c=d.match(/(?:\.eval)?\.(yaml|yml|jsonc?)$/i);return c?`*${c[0]}`:d})])];return{paths:{evals:r(o.map(n)).join(`
`)||"evals",skills:r(s).join(`
`)||".github/skills",results:".copilot/evals/results",evalFilenames:l.length<=64?l.join(`
`):"*"},suite:"all",description:"All discovered evals"}}function qr(e){let t=new URLSearchParams(e),n=t.getAll("run");return t.getAll("view").length===1&&["compare","setup"].includes(t.get("view"))&&n.length===0?{view:t.get("view"),runId:""}:t.get("view")==="results"&&n.length===1&&/^[a-zA-Z0-9-]{1,80}$/.test(n[0])?{view:"results",runId:n[0]}:{view:"definitions",runId:""}}function zr(){return Object.fromEntries(He.map(({id:e})=>[e,{query:"",kind:"all",status:"all",sort:e==="results"?"newest":"name",page:1}]))}function Xt(e,t,n){return{...e,[t]:{...e[t],...n,page:"page"in n?n.page:1}}}function en(e,t,n){let r=t==="results"?e.runs:e.assets.filter(f=>t==="definitions"?f.kind==="eval":f.kind!=="eval"),o=n.query.trim().toLocaleLowerCase(),s=r.filter(f=>(t==="results"?`${f.name} ${f.id} ${f.mode}`:`${f.name} ${f.relativePath}`).toLocaleLowerCase().includes(o)&&(n.kind==="all"||f.kind===n.kind)&&(n.status==="all"||f.status===n.status)),l=f=>Number.isFinite(Date.parse(f))?Date.parse(f):0,i=s.toSorted((f,p)=>{let h=n.sort;return(h==="newest"?l(p.startedAt)-l(f.startedAt):Mr.compare(h==="path"?f.relativePath:h==="status"?f.status:f.name,h==="path"?p.relativePath:h==="status"?p.status:p.name))||Mr.compare(f.id,p.id)}),d=Math.max(1,Math.ceil(i.length/Zt)),c=Math.min(d,Math.max(1,n.page)),u=(c-1)*Zt;return{rows:i.slice(u,u+Zt),total:r.length,matching:i.length,page:c,pages:d,first:i.length?u+1:0,last:Math.min(u+Zt,i.length)}}function tn(e,t){let n=t==="definitions"?e.savedEvalNavigation?.detail??e.detail:e.detail;return!n||t==="diagnostics"||!He.some(r=>r.id===t)?null:t==="results"?n.type==="run"?n:null:n.type!=="asset"?null:t==="definitions"==(n.kind==="eval")?n:null}function Ue(e){let t=new Date(e);return Number.isFinite(t.getTime())?new Intl.DateTimeFormat(void 0,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"}).format(t):"Unknown date"}function Pn(e){if(e.readStatus==="idle")return"Choose a folder to find evals";if(e.readStatus==="reading")return"Looking for evals and saved results\u2026";let t=[];return e.discovery?.status==="error"&&t.push(`Evals and project files couldn't load${e.discovery.stale?" (showing earlier files)":""}`),e.history?.status==="error"&&t.push(`Saved results couldn't load${e.history.stale?" (showing earlier results)":""}`),t.length?t.join(" \xB7 "):e.readStatus==="unavailable"||e.readStatus==="partial"?"Some files couldn't load. See Problems for details.":"Evals, project files and saved results are up to date"}function Hr(e){return e.replace(/[\\/]+$/,"").split(/[\\/]/).at(-1)||e||"Choose a folder"}function Ke(e){return String(e??"")}function At(e){return e.kind==="fixture"?"Sample input file":{accepted:"Format check passed",rejected:"Format check failed",cancelled:"Check cancelled",unavailable:"Check unavailable","process-failed":"Check could not finish","not-evaluated":"Not checked"}[e.validation?.status]??"Not checked"}function Ur(e){return{"supported-shape":"Supported format","requires-resolution":"Needs more setup",unsupported:"Not supported"}[e?.status]??"Not checked"}function Wr(e){let t=e.trim();return t.length>0&&t.length<=4096&&!t.includes("\0")&&/^(?:[a-z]:[\\/]|\\\\|\/)/i.test(t)}function Vr(e){let t=e==null?"Not recorded":JSON.stringify(e,null,2);return{text:t.slice(0,8192),truncated:t.length>8192}}var Tn=(e,t)=>{if(typeof e=="string")return e;let n=e.tag==="table"&&t?.tablePrefix?`${t.tablePrefix}: table ${++t.tableNumber}`:"",r=e.children.map(s=>Tn(s,t)),o=/^h[1-6]$/.test(e.tag)&&t?.headingOffset?`h${Math.min(6,Number(e.tag[1])+t.headingOffset)}`:e.tag;return o==="table"?a`<div class="report-table" tabindex="0" role="region" aria-label=${n||"Comparison table"}>
    <table>${n&&a`<caption>${n}</caption>`}${r}</table></div>`:o==="th"&&t?.tablePrefix?a`<th scope="col">${r}</th>`:a`<${o}>${r}<//>`},An=[{id:"author",label:"Create",icon:"sparkles"},{id:"activity",label:"Run queue",icon:"play"},{id:"compare",label:"Compare",icon:"git-compare"},{id:"setup",label:"Settings",icon:"settings"}],It=e=>`name: ${e}
defaults:
  executor: mock
stimuli:
  - name: Expected response
    prompt: Return the word ready.
    graders:
      - type: output-contains
        config:
          substring: ready
`,Oe=e=>["validation","authentication","running","health","stopping"].includes(e),qs=e=>e?.message??String(e);function In(e){let t=(e||"selected.eval.yaml").split(/[\\/]/).at(-1)||"selected.eval.yaml";return/((?:\.eval)?\.(?:ya?ml|jsonc?))$/i.test(t)?t.replace(/(?:\.eval)?\.(ya?ml|jsonc?)$/i,"-copy.eval.$1"):`${t}-copy.eval.yaml`}function Ae(e,{returnCancellation:t=!1}={}){let[n,r]=S(""),[o,s]=S(""),l=N(0),i=N(!0);U(()=>(i.current=!0,()=>{i.current=!1,l.current++}),[]);async function d(c,u={}){let f=++l.current;s(""),r(c);try{let p=await e(c,u);if(p?.available===!1)throw new Error(p.message||"This action isn't available.");return!i.current||l.current!==f||p?.discarded||p?.cancelled&&!t?null:p}catch(p){return i.current&&l.current===f&&s(qs(p)),null}finally{i.current&&l.current===f&&r("")}}return{run:d,pending:n,error:o,clear:()=>s(""),reset:()=>{l.current++,r(""),s("")}}}function ye({error:e}){return e?a`<p class="studio-error" role="alert">${Ke(e)}</p>`:null}function Et({state:e,invoke:t,compact:n=!1}){let[r,o]=S(e.trusted),{run:s,pending:l,error:i}=Ae(t);if(U(()=>o(e.trusted),[e.trusted]),e.trustSource==="native"&&e.trustCanGrant){let d=!!l||e.trustGrantPending||e.trustStatus==="checking";return a`<div class="trust-wrapper host-trust">
      <label class=${`trust-control ${e.trusted?"is-trusted":""}`.trim()}>
        <input type="checkbox" checked=${e.trusted} disabled=${d||e.trusted||e.trustStatus!=="ready"}
          onChange=${c=>{c.target.checked&&s("trust_project",{trusted:!0,projectPath:e.projectPath})}} />
        <${W} name=${e.trusted?"shield-check":"shield"} size=${15} />
        <span role="status">${e.trustGrantPending?"Trusting folder\u2026":e.trustStatus==="checking"?"Checking folder trust\u2026":e.trusted?"Folder trusted":"Trust this folder"}</span>
      </label>
      <${ye} error=${e.trustError||i} />
    </div>`}return e.trustSource==="native"?a`<div class="trust-wrapper" role="status">
    <span class="trust-control" title="Your app manages workspace trust. Each action still needs separate approval.">
      <${W} name=${e.trusted?"shield-check":"shield"} size=${15} />
      ${e.trusted?"Workspace trusted":"Trust this workspace in your app to use AI, check files and save."}
    </span></div>`:a`<div class="trust-wrapper"><label class=${`trust-control ${r?"is-trusted":""}`.trim()}
    title="Allow AI, saving and running. Each action still needs your approval."><input type="checkbox" checked=${r} disabled=${!!l}
    onChange=${async d=>{let c=d.target.checked;o(c),await s("trust_project",{trusted:c})||o(e.trusted)}} /><${W} name=${r?"shield-check":"shield"} size=${15} /><span>Trust this folder${!n&&a`<small class="sr-only">Allow AI, saving and running. Each action still needs your approval.</small>`}</span></label>
    <${ye} error=${i} /></div>`}async function nn(e,t){try{if((await t("copy_project_path")).copied)return}catch{}try{await navigator.clipboard.writeText(e);return}catch{}let n=document.activeElement,r=typeof n?.selectionStart=="number"?{start:n.selectionStart,end:n.selectionEnd,direction:n.selectionDirection}:null,o=window.getSelection(),s=o?Array.from({length:o.rangeCount},(i,d)=>o.getRangeAt(d).cloneRange()):[],l=document.createElement("textarea");l.value=e,l.readOnly=!0,l.style.cssText="position:fixed;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none",document.body.append(l);try{if(l.focus({preventScroll:!0}),l.select(),!document.execCommand("copy"))throw new Error("Clipboard access was blocked. Try Copy path again.")}finally{if(l.remove(),n?.focus({preventScroll:!0}),o){o.removeAllRanges();for(let i of s)o.addRange(i)}r&&n.setSelectionRange(r.start,r.end,r.direction)}}var rn=[{id:"oracle",label:"Reference answer",description:"Provide the expected inputs and check that the graders accept the reference answer."},{id:"negative-control",label:"Without reference inputs",description:"Leave out the reference inputs and use the runner's baseline result. This does not supply a known-bad conversation. Checks for something being absent may report N/A."},{id:"trajectory",label:"Saved conversation",description:"Score a saved conversation and compare the overall result and each grader's result with the expected pass or fail."}],En=e=>rn.find(t=>t.id===e)?.label??"Unknown test mode";function Br(e){return e?[`Default expected: ${e.expected}`,...Object.entries(e.graders??{}).map(([t,n])=>`${t}: expected ${n}`)]:[]}function Kr(e){return(e?.results??[]).flatMap(t=>[{name:`${t.stimulus}${Object.hasOwn(t,"baseline")?" (baseline without reference inputs)":""}`,expected:t.expected,observed:t.actual,...t.score!==void 0?{score:t.score}:{},...t.error?{error:t.error}:{},outcome:t.actual==="error"?"Error":t.matched?"Matched":"Mismatch"},...(t.graders??[]).map(n=>({name:`${t.stimulus} / ${n.name}`,expected:n.expected??"Not specified",observed:n.actual,...n.score!==void 0?{score:n.score}:{},...n.evidence?{evidence:n.evidence}:{},...n.error?{error:n.error}:{},outcome:n.actual==="error"?"Error":n.matched===void 0?"Observation":n.matched?"Matched":"Mismatch"}))])}function ct(e,t){if(!t||typeof t!="string")return;let n=s=>s.split("/").map(encodeURIComponent).join("/").replace(/^([A-Za-z])%3A/,"$1:"),r=s=>s.split("/").map(l=>{try{return encodeURIComponent(decodeURIComponent(l))}catch{return l}}).join("/").replace(/^\/([A-Za-z])%3A/,"/$1:"),o=s=>new URL(`file:///${n(s.replace(/^\/+/,""))}`);try{let s=t.replaceAll("\\","/"),l=o(`${e.replaceAll("\\","/").replace(/\/$/,"")}/`),i=s.startsWith("file:")?new URL(s):s.startsWith("/")||/^[A-Za-z]:\//.test(s)?o(s):new URL(n(s),l),d=r(l.pathname),c=r(i.pathname);return i.protocol!=="file:"||i.host!==l.host||!c.startsWith(d)?void 0:(i.pathname=c,i.href)}catch{return}}function zs(e,t,n){if(typeof n!="string")return;let r=n.replaceAll("\\","/");if(r.startsWith("/")||r.startsWith("file:")||/^[A-Za-z]:\//.test(r))return ct(e,n);let o=ct(e,t);return o?ct(e,new URL(r.split("/").map(encodeURIComponent).join("/"),o).href):void 0}function Jr(e,t,n){let r=n===void 0?ct(e.projectPath,t):zs(e.projectPath,t,n);if(!r)return null;try{return{path:decodeURIComponent(new URL(r).pathname).replace(/^\/(?=[A-Za-z]:\/)/,""),assetId:(e.assets??[]).find(o=>ct(e.projectPath,o.uri??o.relativePath)===r)?.id}}catch{return null}}function Rn({state:e,evalPath:t,trajectory:n,invoke:r}){let o=Jr(e,t,n),s=n===void 0?"eval":"fixture",[l,i]=S(""),{run:d,pending:c,error:u}=Ae(r);return a`<div class="grader-source-reference">
    <label class="stack-label">${s==="eval"?"Eval path":"Fixture path"}
      <input readonly value=${o?.path??n??t} /></label>
    ${o?.assetId&&a`<button class="ck-btn" type="button" disabled=${!!c}
      onClick=${()=>d("preview_asset",{id:o.assetId})}>Open ${s==="eval"?"eval definition":"fixture preview"}</button>`}
    <button class="ck-btn" type="button" disabled=${!o} onClick=${async()=>{try{await nn(o.path,async()=>({})),i(`Copied ${s} path.`)}catch{i("Clipboard unavailable. Select and copy the path above.")}}}>Copy ${s} path</button>
    ${l&&a`<p role="status">${l}</p>`}
    <${ye} error=${u} />
  </div>`}function Gr({state:e,item:t,invoke:n}){let[r,o]=S(!1),[s,l]=S("oracle"),[i,d]=S(""),[c,u]=S(""),{run:f,pending:p,error:h}=Ae(n),v=Ae(n),g=Ae(n),$=t.uri,k=e.graderTestCatalog,m=ct(e.projectPath,$),w=k&&m&&ct(e.projectPath,k.evalPath)===m,y=w?k.fixtures:[],I=y.find(C=>C.id===c),T=e.graderTestPhase!=="idle",A=e.trusted&&!Oe(e.operation.phase)&&!e.operation.approval,P=e.graderTest,z=e.graderTestPreview;return a`<section class="grader-tests" aria-label="Test graders">
    <button class="ck-btn" aria-expanded=${r} disabled=${!!p} onClick=${async()=>{o(!r),r||await Promise.all([f("grader_test_catalog",{evalPath:$}),g.run("list_grader_tests")])}}>Test graders</button>
    ${r&&a`<div class="grader-test-panel">
      <h3>Test graders</h3>
      <p>Test the scoring rules without running the task agent.</p>
      <form class="grader-test-form" onSubmit=${async C=>{C.preventDefault(),await f("run_grader_test",{evalPath:$,mode:s,...s==="trajectory"?{fixtureId:c}:i?{stimulus:i}:{}})}}>
        <label class="stack-label">Test mode<select value=${s} disabled=${!!p||T} onChange=${C=>l(C.target.value)}>
          ${rn.map(C=>a`<option value=${C.id}>${C.label}</option>`)}
        </select></label>
        <p>${rn.find(C=>C.id===s)?.description}</p>
        ${s!=="trajectory"?a`<label class="stack-label">Test case (stimulus)<select value=${i} disabled=${!!p||T||!w} onChange=${C=>d(C.target.value)}>
          <option value="">All test cases</option>
          ${(w?k.stimuli:[]).map(C=>a`<option value=${C}>${C}</option>`)}
        </select></label>`:a`<label class="stack-label">Configured fixture<select value=${c} disabled=${!!p||T||!w} required onChange=${C=>u(C.target.value)}>
          <option value="">Choose a fixture</option>
          ${y.map(C=>a`<option value=${C.id}>${C.id} · ${C.stimulus} · expected ${C.expected}</option>`)}
        </select></label>
        ${!y.length&&a`<p>No configured fixtures. Add fixtures to <code>${t.relativePath??t.name}.grader-tests.json</code> beside the eval.</p>`}
        ${I&&a`<div><p>Test case: ${I.stimulus}</p>
          <${Rn} state=${e} evalPath=${k.evalPath} trajectory=${I.trajectory} invoke=${n} />
          <ul>${Br(I).map(C=>a`<li>${C}</li>`)}</ul></div>`}`}
        <p class="snapshot-notice">Graders may use paid models or run scripts. Review the command and cost warning in the approval prompt before starting.</p>
        <button class="ck-btn ck-btn-primary" type="submit" disabled=${!A||!!p||T||!w||s==="trajectory"&&!I}>
          ${p==="run_grader_test"?"Testing graders\u2026":"Review & test graders"}
        </button>
      </form>
      ${(T||p==="run_grader_test")&&a`<div role="status"><p>${e.graderTestPhase==="idle"?"Preparing":e.graderTestPhase} grader test…</p>
        <button class="ck-btn" disabled=${!!v.pending} onClick=${()=>v.run("cancel_grader_test")}>Cancel grader test</button></div>`}
      ${z&&a`<details open><summary>Exact grader test command</summary><pre tabindex="0">${z.command}</pre>
        <ul>${z.warnings.map(C=>a`<li>${C}</li>`)}</ul></details>`}
      <h4>Saved grader tests</h4>
      <button class="ck-btn" disabled=${!!p||!!g.pending||T} onClick=${()=>g.run("list_grader_tests")}>Refresh grader test history</button>
      <label class="stack-label">Reopen result<select value=${P?.id??""} disabled=${!!p||!!g.pending||T} onChange=${C=>{C.target.value&&g.run("read_grader_test",{id:C.target.value})}}><option value="">Choose a saved grader test</option>
        ${(e.graderTests??[]).map(C=>a`<option value=${C.id}>${C.evalPath} · ${En(C.mode)} · ${C.status} · ${C.createdAt}</option>`)}
      </select></label>
      ${P&&a`<section aria-label="Grader test result">
        <h4>Grader test: ${P.status}</h4>
        ${P.error&&a`<details open><summary>Error details (not instructions)</summary><pre tabindex="0">${P.error}</pre></details>`}
        <p>${En(P.mode)} · ${P.stimulus??"All test cases"} · ${P.createdAt}</p>
        ${P.sourceAvailable===!1&&a`<p role="note">This saved report belongs to a previous project location. Its source eval is unavailable; the report is read-only.</p>`}
        <${Rn} state=${e} evalPath=${P.evalPath} invoke=${n} />
        ${P.fixture&&a`<div><p>Fixture: ${P.fixture.id}</p>
          <${Rn} state=${e} evalPath=${P.evalPath} trajectory=${P.fixture.trajectory} invoke=${n} /></div>`}
        <p>Expected vs. observed outcomes, mismatches and errors:</p>
        ${P.results?.length>0&&a`<div class="report-table" tabindex="0" role="region" aria-label="Grader expectations and observations">
          <table><thead><tr><th scope="col">Test case / grader</th><th scope="col">Expected</th><th scope="col">Observed</th><th scope="col">Result</th><th scope="col">Score</th><th scope="col">Evidence</th><th scope="col">Error</th></tr></thead>
            <tbody>${Kr(P).map(C=>a`<tr><th scope="row">${C.name}</th><td>${C.expected}</td><td>${C.observed}</td><td>${C.outcome}</td>
              <td>${C.score??"N/A"}</td><td>${C.evidence??"N/A"}</td><td>${C.error??"N/A"}</td></tr>`)}</tbody>
          </table></div>`}
        <pre tabindex="0" role="region" aria-label="Grader test expected and observed results">${P.text}</pre>
      </section>`}
      <${ye} error=${h||g.error||v.error} />
    </div>`}
  </section>`}function Yr({proposal:e,pending:t,error:n,outcome:r,onSave:o,onClose:s}){let l=N(null),i=N(null);Me(()=>{i.current?.focus()},[]);function d(c){if(c.key==="Escape"&&(c.preventDefault(),s()),c.key!=="Tab")return;let u=[...l.current.querySelectorAll('button:not(:disabled), input:not(:disabled), summary, [tabindex="0"]')].filter(f=>f.checkVisibility({visibilityProperty:!0}));u.length&&(c.shiftKey&&(document.activeElement===u[0]||document.activeElement===i.current)?(c.preventDefault(),u.at(-1).focus()):!c.shiftKey&&document.activeElement===u.at(-1)&&(c.preventDefault(),u[0].focus()))}return a`<div class="modal-scrim"><section ref=${l} class="review-dialog" role="dialog" aria-modal="true" aria-labelledby="save-heading" onKeyDown=${d}>
    <div class="studio-heading"><h2 ref=${i} tabindex="-1" id="save-heading">Review files to create</h2>
      <button class="ck-btn" aria-label="Close save review" onClick=${s}>Close</button></div>
    <p>Only these new files will be created. Existing files are never overwritten. We'll check that the folder and file contents haven't changed before saving.</p>
    <${ye} error=${n} />
    ${r&&!r.complete&&a`<div class="save-outcome" role="status" aria-label="Last save outcome">
      <strong>Save incomplete. Review each file.</strong>
      ${r.files.map(c=>a`<p key=${c.relativePath}>${c.relativePath}: ${c.status} · ${c.message}</p>`)}
      ${r.conflicts.map((c,u)=>a`<p key=${u}>${c.relativePath??c.phase}: ${c.message}</p>`)}
      <p>Your original request and proposed files are kept. Use this same proposal to recover the save.</p>
    </div>`}
    ${e.files.map(c=>a`<details key=${c.relativePath} open><summary>${c.relativePath} · ${c.kind==="fixture"?"Sample input file":"Eval file"} · ${c.content.length} characters</summary>
      <pre class="file-diff" tabindex="0" role="region" aria-label=${`New content for ${c.relativePath}`}>${c.content}</pre>
      <p class="ck-muted">SHA-256 ${c.hash}</p><p>Validation: ${At(c)}</p></details>`)}
    <div class="draft-actions">
      <button class="ck-btn" disabled=${!!t} onClick=${s}>Cancel</button>
      <button class="ck-btn ck-btn-primary" disabled=${!!t} onClick=${o}>${t?"Saving\u2026":"Create approved files"}</button>
    </div>
  </section></div>`}function Zr(e){return`Selected project search root: ${e}. Only this folder and its descendants are in scope, not its parent or home folder. Recognized paths include SKILL.md anywhere in scope (for example .agents/skills/<name>/SKILL.md, .github/skills/<name>/SKILL.md and .claude/skills/<name>/SKILL.md), *.agent.md, .github/agents/**/*.md, .claude/agents/**/*.md, AGENTS.md, CLAUDE.md, CLAUDE.local.md, GEMINI.md, copilot-instructions.md, *.instructions.md, *.prompt.md, mcp.json, .mcp.json and package.json MCP declarations. Discovery respects .gitignore, skips symbolic links/junctions and directories named node_modules, .git, .worktrees, dist, out, artifacts, .vscode-test, generated, results, .cache or coverage, and has bounded file, directory and size limits. Check Problems for incomplete discovery. Personal/global/installed Plugin skills outside this root were not searched.`}function Qr(e="cli"){return"To evaluate a personal or installed skill, open the folder containing its SKILL.md as your project. This host cannot add an outside skill as an extra source to the current project. Typing a path or Plugin name does not grant access. Evals will not scan your home folder or Plugin cache, copy the skill or bypass permissions. If you know where its SKILL.md is, "+(e==="canvas"?"choose Select personal skill folder\u2026 here, browse to its containing folder, choose it and approve that exact project in the native form; then select the exact discovered skill in Create. Alternatively use the existing Browse, then Load project selector. ":"explicitly switch the session folder with /cwd to its containing folder, then use /eval create and select that exact discovered skill. ")+"Choose the skill's own folder, not your whole home folder or Plugin cache. This switches the project. The skill stays where it is; new evals go to that project's configured destination, or evals if none is configured, rather than your previous project. Proceed only if the host permits access and you trust that folder. If access is declined/unavailable or an installed location is read-only, stop; use the skill's writable source checkout as the selected project, or author from explicit project requirements without claiming that the external skill was selected. Choose Project requirements to describe a task without selecting an individual asset or all assets. That option does not create a skill or agent."}function dt(e){requestAnimationFrame(()=>{document.activeElement===document.body&&e?.isConnected&&e.focus()})}function Nn({onKeep:e,onDiscard:t}){let n=N(null),r=N(null);return Me(()=>{r.current?.focus()},[]),a`<div class="modal-scrim"><section ref=${n} class="review-dialog" role="alertdialog" aria-modal="true"
    aria-labelledby="discard-folder-heading" aria-describedby="discard-folder-description" onKeyDown=${o=>{if(o.key==="Escape"&&(o.preventDefault(),o.stopPropagation(),e()),o.key!=="Tab")return;let s=[...n.current.querySelectorAll("button")];o.shiftKey&&(document.activeElement===s[0]||document.activeElement===r.current)?(o.preventDefault(),s.at(-1).focus()):!o.shiftKey&&document.activeElement===s.at(-1)&&(o.preventDefault(),s[0].focus())}}>
    <h2 ref=${r} tabindex="-1" id="discard-folder-heading">Discard pending folder changes?</h2>
    <p id="discard-folder-description">You changed the folder selection but haven't loaded it. Keep your changes or discard them to close.</p>
    <div class="draft-actions"><button class="ck-btn" onClick=${e}>Keep changes</button>
      <button class="ck-btn ck-btn-danger" onClick=${t}>Discard changes</button></div>
  </section></div>`}function sn({initialFolder:e,invoke:t,onChoose:n,onClose:r}){let[o,s]=S(e),[l,i]=S(null),[d,c]=S(!1),[u,f]=S(""),[p,h]=S(!1),v=N(null),g=N(null),$=N(null),k=N(0),m=N(e);Me(()=>{u&&!d&&$.current?.focus()},[u,d]);async function w(T){let A=++k.current;c(!0),f("");try{let P=await t("browse_folders",T?{folderPath:T}:{});if(k.current!==A)return;A===1&&(m.current=P.folderPath),i(P),s(P.folderPath)}catch(P){if(k.current!==A)return;f(Ke(P.message))}finally{k.current===A&&c(!1)}}Me(()=>(g.current?.focus(),w(e),()=>{k.current++}),[]);function y(){o!==m.current?h(!0):r()}function I(T){if(T.key==="Escape"&&(T.preventDefault(),T.stopPropagation(),y()),T.key!=="Tab")return;let A=[...v.current.querySelectorAll("button:not(:disabled), input:not(:disabled)")];T.shiftKey&&(document.activeElement===A[0]||document.activeElement===g.current)?(T.preventDefault(),A.at(-1)?.focus()):!T.shiftKey&&document.activeElement===A.at(-1)&&(T.preventDefault(),A[0]?.focus())}return a`<div class="modal-scrim" onPointerDown=${T=>{T.target===T.currentTarget&&y()}}><section ref=${v} id="folder-dialog" class="review-dialog folder-dialog" role="dialog"
    aria-modal="true" aria-labelledby="folder-heading" onKeyDown=${I}>
    <div class="studio-heading"><h2 ref=${g} tabindex="-1" id="folder-heading">Choose a folder</h2>
      <button class="ck-btn" onClick=${y}>Cancel</button></div>
    <form onSubmit=${T=>{T.preventDefault(),w(o)}}>
      <label class="stack-label" for="folder-location">Location</label>
      <div class="project-input-row"><input ref=${$} id="folder-location" name="folderLocation" class="ck-input"
        autocomplete="off" spellcheck="false" value=${o} aria-invalid=${!!u} disabled=${d}
        onInput=${T=>s(T.target.value)} />
        <button class="ck-btn" type="submit" disabled=${d}>Open</button></div>
    </form>
    <div class="folder-controls"><button class="ck-btn" disabled=${d||!l?.parentPath}
      onClick=${()=>w(l.parentPath)}><${W} name="arrow-up" size=${16} />Up one folder</button>
      <span role="status">${d?"Loading folders\u2026":`${l?.folders.length??0} folders`}</span></div>
    ${u&&a`<p class="field-error" role="alert">${u}</p>`}
    <div class="folder-list" role="group" aria-label="Folders" aria-busy=${d}>
      ${l?.folders.map(T=>a`<button key=${T.path} class="folder-row" disabled=${d}
        onClick=${()=>w(T.path)}><${W} name="folder" size=${18} /><span>${T.name}</span><${W} name="chevron-right" size=${16} /></button>`)}
      ${l&&!l.folders.length&&!d&&a`<p class="ck-muted">No subfolders. You can choose this folder or go up.</p>`}
    </div>
    ${l?.limited&&a`<p class="ck-muted">Showing up to 200 folders after checking 512 entries. Open a more specific location to find others.</p>`}
    <button class="ck-btn ck-btn-primary" disabled=${d||!!u||!l||o!==l.folderPath}
      onClick=${()=>n(l.folderPath)}>Choose folder</button>
  </section>${p&&a`<${Nn} onKeep=${()=>{h(!1),dt(d?g.current:$.current)}}
    onDiscard=${r} />`}</div>`}function bt({projectPath:e,invoke:t}){let[n,r]=S(!1),[o,s]=S(""),l=N(null);return a`<div class="discovery-scope"><p>${Zr(e)}</p>
    <details><summary>Use a personal or installed skill</summary><p>${Qr("canvas")}</p>
      ${t&&a`<button ref=${l} class="ck-btn" type="button" onClick=${()=>{s(""),r(!0)}}>Select personal skill folder…</button>`}
      ${o&&a`<p class="field-error" role="alert">${o}</p>`}
      ${n&&a`<${sn} initialFolder=${e} invoke=${t}
        onClose=${()=>{r(!1),dt(l.current)}} onChoose=${async i=>{r(!1);try{await t("select_personal_skill_project",{projectPath:i})}catch(d){s(d.message)}finally{dt(l.current)}}} />`}
    </details></div>`}function Xr({groups:e,rows:t,query:n="",renderRow:r}){let o=(e.length?e:[{kind:"*",label:"Assets"}]).map(m=>({...m,rows:t.filter(w=>m.kind==="*"||w.kind===m.kind)})).filter(m=>m.rows.length),[s,l]=S(()=>new Set(o.map(m=>m.kind))),[i,d]=S(""),c=N(new Set(o.map(m=>m.kind))),u=N(null),f=o.map(m=>m.kind).join("|");U(()=>{let m=o.map(w=>w.kind).filter(w=>!c.current.has(w));if(m.length){for(let w of m)c.current.add(w);n.trim()||l(w=>{let y=new Set(w);for(let I of m)y.add(I);return y})}},[f,n]),U(()=>{n.trim()&&l(m=>{let w=f.split("|");if(!w.some(I=>m.has(I)))return m;let y=new Set(m);for(let I of w)y.delete(I);return y})},[n,f]);let p=o.flatMap(m=>[`group-${m.kind}`,...s.has(m.kind)?[]:m.rows.map(w=>w.id)]),h=p.includes(i)?i:p[0];function v(m){l(w=>{let y=new Set(w);return y.has(m)?y.delete(m):y.add(m),y})}function g(m){d(m),u.current.querySelector(`[data-tree-id="${CSS.escape(m)}"]`)?.focus()}function $(m,w,y,I){let T=p.indexOf(w);["ArrowDown","ArrowUp","Home","End"].includes(m.key)?(m.preventDefault(),g(p[m.key==="Home"?0:m.key==="End"?p.length-1:Math.max(0,Math.min(p.length-1,T+(m.key==="ArrowDown"?1:-1)))])):m.key==="ArrowLeft"?(m.preventDefault(),I?s.has(y)||v(y):g(`group-${y}`)):m.key==="ArrowRight"&&I&&(m.preventDefault(),s.has(y)?v(y):p[T+1]&&g(p[T+1]))}let k=o.some(m=>s.has(m.kind));return a`<div class="asset-tree-controls" role="group" aria-label="Asset group controls">
      <button class="ck-btn ck-btn-icon" type="button"
        aria-label=${k?"Expand all":"Collapse all"}
        title=${k?"Expand all":"Collapse all"}
        disabled=${!o.length}
        onClick=${()=>l(k?new Set:new Set(o.map(m=>m.kind)))}>
        <${W} name=${k?"chevrons-up-down":"chevrons-down-up"} size=${15} />
      </button>
    </div><div ref=${u} class="asset-tree" role="tree" aria-label="Assets">
    ${o.map(m=>a`<div role="none" key=${m.kind}>
      <button class="asset-tree-heading" role="treeitem" aria-level="1" aria-expanded=${!s.has(m.kind)}
        aria-owns=${s.has(m.kind)?void 0:`asset-group-${m.kind}`}
        data-tree-id=${`group-${m.kind}`} tabindex=${h===`group-${m.kind}`?0:-1}
        onFocus=${()=>d(`group-${m.kind}`)} onClick=${()=>v(m.kind)}
        onKeyDown=${w=>$(w,`group-${m.kind}`,m.kind,!0)}>
        <${W} name=${s.has(m.kind)?"chevron-right":"chevron-down"} size=${16} />
        <${W} name=${Gt(m.kind)} size=${16} /><span>${m.label}</span><span class="nav-count">${m.rows.length}</span>
      </button>
      ${!s.has(m.kind)&&a`<div role="group" id=${`asset-group-${m.kind}`}>
        ${m.rows.map(w=>r(w,{role:"treeitem","aria-level":2,"data-tree-id":w.id,tabindex:h===w.id?0:-1,onFocus:()=>d(w.id),onKeyDown:y=>$(y,w.id,m.kind,!1)}))}
      </div>`}
    </div>`)}
  </div>`}var On=e=>Array.isArray(e)?`[${e.join(", ")}]`:e;function es({tags:e={},enabled:t,projectPath:n,invoke:r,onChange:o,onPending:s}){let[l,i]=S(""),[d,c]=S(""),[u,f]=S(null),[p,h]=S(!1),[v,g]=S(""),[$,k]=S({}),[m,w]=S(null),y=N(0),{run:I,pending:T,error:A}=Ae(r),P=JSON.stringify(e);async function z(R=v,J=$,ee){let re=++y.current,Q=await I("inspect_draft_organization",{tags:e,...R?{suite:R,choices:J}:{},...ee!==void 0?{expectedConfigurationHash:ee}:{}});return re!==y.current?null:(w(Q??null),Q)}U(()=>{if(w(null),!t){y.current++;return}let R=++y.current,J=setTimeout(()=>{R===y.current&&z("",{})},200);return()=>{clearTimeout(J),y.current++}},[P,n,t]),U(()=>{s(!!l.trim()||!!u||p)},[l,u,p]),U(()=>()=>s(!1),[]);function C(R){y.current++,w(null),o(R)}function se(R,J){C({...e,[R]:J}),i(""),c(""),f(null)}function ke(){let R=l.indexOf(":"),J=l.slice(0,R).trim(),ee=l.slice(R+1).trim();if(R<1||!J||!ee||J.length>120||ee.length>120){c("Enter a tag as key: value, using at most 120 characters for each.");return}if(!Object.hasOwn(e,J)&&Object.keys(e).length>=16){c("The form supports up to 16 tag keys. Use the source editor for larger definitions.");return}if(Object.hasOwn(e,J)&&e[J]!==ee){f({key:J,value:ee});return}se(J,ee)}async function ae(R){g(R),k({}),await z(R,{},m?.configurationHash)}function pe(){y.current++,h(!1),g(""),k({})}let oe=m?.proposal,$e=m?.suites.find(R=>R.name===v),ie=t&&!T;return a`<div class="authoring-tags">
    <div class="tag-label-row"><label for="authoring-tag-input">Tags <span class="ck-muted">optional</span></label>
      <button class="tag-shortcut" type="button" disabled=${!ie} aria-expanded=${p}
        onClick=${async()=>{h(!0),g(""),k({}),await z("",{})}}>Use tags from a suite…</button></div>
    <p class="ck-muted">Optional key: value labels (such as <code>area: dns</code>) used to organize evals and select groups of evals to run. Leave blank if you do not need tags.</p>
    <div class="tag-input" role="group" aria-label="Draft tags">
      ${Object.entries(e).map(([R,J])=>a`<span class="draft-tag" key=${R}><span>${R}: ${On(J)}</span>
        <button type="button" aria-label=${`Remove tag ${R}`} disabled=${!t||p}
          onClick=${()=>{let ee={...e};delete ee[R],C(ee)}}>×</button></span>`)}
      <input id="authoring-tag-input" aria-label="Add a draft tag" placeholder="Add key: value, then Enter" value=${l}
        disabled=${!t||p} onInput=${R=>{i(R.target.value),c(""),f(null)}}
        onKeyDown=${R=>{R.key==="Enter"&&(R.preventDefault(),ke())}} />
      ${l.trim()&&a`<button class="ck-btn" type="button" disabled=${!t||p} onClick=${ke}>Add tag</button>`}
    </div>
    ${d&&a`<p role="alert">${d}</p>`}
    ${u&&a`<div class="tag-replacement" role="status">Replace ${u.key}: ${On(e[u.key])} with ${u.value}?
      <button class="ck-btn" type="button" disabled=${!t} onClick=${()=>se(u.key,u.value)}>Replace tag value</button>
      <button class="ck-btn" type="button" onClick=${()=>{f(null),i("")}}>Keep existing value</button></div>`}
    ${p&&a`<section class="suite-tag-helper" aria-label="Use tags from a suite filter">
      <div class="tag-label-row"><strong>Use tags from a suite filter</strong><button type="button" class="tag-shortcut"
        aria-label="Close suite tag helper" onClick=${pe}>Close</button></div>
      <p class="ck-muted">A suite filter is a set of tag values used to select a group of evals. Review tags to add or replace; this does not assign the eval to a suite.</p>
      <label class="stack-label">Copy filter from<select class="ck-select" value=${v} disabled=${!ie||!m}
        onChange=${R=>ae(R.target.value)}><option value="">Choose a suite</option>
        ${m?.suites.map(R=>a`<option key=${R.name} value=${R.name}>${R.name}</option>`)}</select></label>
      ${m&&!m.suites.length&&a`<p class="ck-muted">No supported suite filters are available. Tags remain optional.</p>`}
      ${$e&&a`<div class="suite-tag-choices">${Object.entries($e.filter).map(([R,J])=>{let ee=Array.isArray(J)?J:[J];return a`<div key=${R}><code>${R}</code>${ee.length===1?a`<code>${ee[0]}</code>`:a`<label class="stack-label">Value for ${R}<select class="ck-select" disabled=${!ie} value=${Object.hasOwn($,R)?$[R]:""}
            onChange=${async re=>{let Q={...$,[R]:re.target.value};re.target.value||delete Q[R],k(Q),await z(v,Q,m.configurationHash)}}><option value="">Choose a value if needed</option>${ee.map(re=>a`<option key=${re} value=${re}>${re}</option>`)}</select></label>`}</div>`})}</div>`}
      ${oe&&a`<div class="tag-change-preview" role="status">
        ${oe.changes.map(R=>a`<p key=${R.key}>${R.before===null?"Add":"Replace"} <code>${R.key}</code>:
          ${R.before!==null?`${On(R.before)} \u2192 `:""}${R.after}</p>`)}
        ${!oe.changes.length&&!oe.requiredChoices.length&&a`<p>No tag changes needed.</p>`}
        ${oe.requiredChoices.map(R=>a`<p key=${R.key}>Choose one allowed value for ${R.key}.</p>`)}
        <p class="ck-muted">Other tags are kept. ${oe.hasFileSelectors?"This suite also selects files; membership is not confirmed.":"Tag matches do not confirm native suite membership."}</p>
      </div>`}
      <div class="suite-tag-actions"><button class="ck-btn" type="button" onClick=${pe}>Cancel</button>
        <button class="ck-btn ck-btn-primary" type="button" disabled=${!ie||!oe?.ready}
          onClick=${async()=>{let R=await z(v,$,m.configurationHash);if(!R?.proposal?.ready)return;let J=R.suites.find(re=>re.name===v).filter,ee=Object.fromEntries(Object.keys(J).map(re=>[re,R.proposal.tags[re]]));o(R.proposal.tags,R.configurationHash,ee),h(!1),g(""),k({})}}>Apply tags to draft</button></div>
    </section>`}
    <div class="tag-matches" role="status"><span class="ck-muted">Matching suite filters</span>
      ${t?m?m.matches.length?m.matches.map(R=>a`<span class="suite-filter-match" key=${R.name}>${R.name}${R.hasFileSelectors?" (file rules apply)":""}</span>`):a`<span class="ck-muted">None for the current form tags.</span>`:a`<span class="ck-muted">${T?"Reading filters\u2026":"Unavailable until filters are refreshed."}</span>`:a`<span class="ck-muted">Trust the project to inspect filters.</span>`}
      ${m?.matches.length>0&&a`<span class="ck-muted">Tag matches only; actual inclusion is not confirmed.</span>`}
    </div>
    ${m?.guidance.slice(2).map((R,J)=>a`<p class="ck-muted" key=${J}>${R}</p>`)}
    ${A&&a`<button type="button" class="ck-btn" disabled=${!ie} onClick=${()=>{g(""),k({}),z("",{})}}>Refresh suite filters</button>`}
    <${ye} error=${A} />
  </div>`}function ts({state:e,invoke:t,conflict:n,pending:r,lockedDraft:o,projectAssets:s,draftEpoch:l,lastSynced:i,lastEpoch:d,setFiles:c,setDirectoryChoice:u,setSelected:f,setDirty:p,setConflict:h,setSyncIssue:v,sync:g}){return a`
    ${e.closedSave&&a`<div class="studio-warning" role="status">
      Earlier save history (read only): ${e.closedSave.saving?"Waiting for the original save outcome.":e.closedSave.saveOutcome?.complete?"The original save completed.":e.closedSave.saveAttempted?"The original save requires explicit recovery.":"The original save did not start."}
      <div>Request ${e.closedSave.request?.requestId} · Proposal ${e.closedSave.proposal?.proposalId}</div>
      ${e.closedSave.proposal?.files.map($=>a`<div>${$.relativePath}:
        ${e.closedSave.saveOutcome?.files?.find(k=>k.relativePath===$.relativePath)?.status??"Outcome not recorded"}</div>`)}
      This doesn't renew the old request's permission to save files.
    </div>`}
    ${e.draft.request?.stateUnavailable&&a`<div class="studio-warning" role="status">
      The runtime's retained validation state is unavailable. Preserve request ${e.draft.request.requestId}
      for recovery; don't replace it with new files.
    </div>`}
    ${e.draft.request?.recoveryRequired&&a`<div class="studio-warning" role="status">
      This request still needs cleanup or save recovery. You can't propose new files yet.
    </div>`}
    ${n&&a`<div class="studio-warning" role="status">The shared draft changed while you were editing. Your local text is retained.
      <button class="ck-btn" disabled=${!!r} onClick=${()=>{i.current=e.draft.revision,c(e.draft.files),d.current=l,u(e.draft.outputDirectory??""),f(0),p(!1),h(!1),v("")}}>Load shared draft</button>
      <button class="ck-btn" disabled=${!!r||o} onClick=${()=>g(!0)}>Keep my edits</button></div>`}
    ${!s.length&&e.discovery?.status==="ready"&&a`<${bt} projectPath=${e.projectPath} invoke=${t} />`}
    ${e.draft.recoveryNotice&&a`<${ye} error=${e.draft.recoveryNotice} />`}`}function ns({state:e,invoke:t,run:n,draftEpoch:r,files:o,setFiles:s,setSelected:l,setDirty:i,setDiscard:d,setSyncIssue:c,setReview:u,setDirectoryChoice:f,guided:p,setGuided:h,replace:v,setReplace:g,tagsPending:$,setTagsPending:k,pending:m,lockedDraft:w,conflict:y,ready:I,canRetarget:T,isStarterDraft:A,source:P,copyNotice:z,allProjectFiles:C,projectAssets:se,projectEvals:ke,outputDirectory:ae,directoryChoice:pe,hasBoundRequest:oe,hasBoundHandoff:$e,version:ie,lastSynced:R,lastEpoch:J,sharedEpoch:ee,hasHandoff:re,retargetDraft:Q}){return a`<form class="guided-create" aria-label="Create eval from expected response" onSubmit=${async M=>{if(M.preventDefault(),w||y||$)return;if(o.length&&!A&&!v){g(!0);return}if(m)return;let ve=ie.current,V=R.current,D=J.current,X={...p};delete X.suiteFilterTags;let be=await n("compose_eval",X);!be||ie.current!==ve||R.current!==V||J.current!==D||ee.current!==D||(ie.current++,s(be.files),l(0),i(!0),d(!1),g(!1),c(""),u(!1))}}>
      <div class="guided-example"><h3>Eval details</h3>
        <button class="ck-btn" type="button" onClick=${()=>{h({name:"Friendly greeting",task:"Greet a new teammate in one short sentence. Include the words Welcome aboard.",expected:"Welcome aboard"}),g(!1)}}>Load example</button>
        ${P?.kind==="eval"&&P.text&&a`<button class="ck-btn" type="button" aria-describedby="source-copy-notice" disabled=${!!m||w||y||P.sourceUnchanged!==!0||P.stale} onClick=${()=>{if(!(w||P.sourceUnchanged!==!0||P.stale)){if(o.length&&!A&&!v){g(!0);return}ie.current++,i(!0),d(!1),g(!1),u(!1),c(""),s([{relativePath:In(P.relativePath),kind:"eval",content:P.text}]),l(0)}}}>${v&&!A?"Confirm load selected eval":"Load selected eval into editor"}</button>`}
        <p id="source-copy-notice" role="status" class=${z?"":"sr-only"}>${z}</p>
      </div>
      <label class="stack-label">Eval name<input class="ck-input" name="eval-name" value=${p.name} maxLength="120"
        onInput=${M=>{g(!1),h(ve=>({...ve,name:M.target.value}))}} /></label>
      <div class="guided-field">
      <label class="stack-label target-asset-picker">Project file or eval to base this on (optional)
        <select class="ck-select" name="target-asset" value=${m?void 0:e.selectedAssetId??""}
          aria-describedby="guided-source-help"
          disabled=${!T}
          onChange=${async M=>{let ve=M.target.value,V=C.find(le=>le.id===ve),D=ie.current,X=A;if(e.draft.request&&!w&&!await Q())return;let be=R.current,B=J.current,Y=await n("preview_asset",{id:ve});Y&&V&&ie.current===D&&R.current===be&&J.current===B&&ee.current===B&&(g(!1),h(le=>({...le,name:le.name==="New eval"?V.kind==="eval"?`${V.name} copy`:`${V.name} eval`:le.name})),V.kind==="eval"&&Y.sourceUnchanged===!0&&!Y.stale&&typeof Y.text=="string"&&X&&(ie.current++,i(!0),s([{relativePath:In(V.relativePath),kind:"eval",content:Y.text}]),l(0)))}}>
          <option value="">General eval (no specific project file)</option>
          ${se.length>0&&a`<optgroup label="Project skills, instructions & agents">
            ${se.map(M=>a`<option value=${M.id} key=${M.id}>${M.name} · ${M.kind} · ${M.relativePath}</option>`)}
          </optgroup>`}
          ${ke.length>0&&a`<optgroup label="Existing project evals">
            ${ke.map(M=>a`<option value=${M.id} key=${M.id}>${M.name} · eval · ${M.relativePath}</option>`)}
          </optgroup>`}
        </select>
      </label>
      <p id="guided-source-help" class="ck-muted">A general eval uses project requirements, not every asset, and does not create a new skill or agent.</p>
      </div>
      ${e.draft.request&&(e.draft.request.targetId??"")!==(e.selectedAssetId??"")&&a`
        <button class="ck-btn" type="button" disabled=${!T||y} onClick=${async()=>{let M=R.current,ve=J.current;e.selectedAssetId&&!await n("preview_asset",{id:e.selectedAssetId})||R.current!==M||J.current!==ve||ee.current!==ve||re.current||await Q()}}>Use selected source for this draft</button>`}
      <label class="stack-label guided-section">Task<textarea class="ck-textarea" name="eval-task" rows="3" maxLength="8000" value=${p.task}
        placeholder="What should the AI do?" onInput=${M=>{g(!1),h(ve=>({...ve,task:M.target.value}))}} /></label>
      <div class="guided-field">
      <label class="stack-label">Expected response<textarea class="ck-textarea" name="eval-expected" rows="3" maxLength="4000" value=${p.expected}
        aria-describedby="guided-expected-help"
        placeholder="Text the response must contain" onInput=${M=>{g(!1),h(ve=>({...ve,expected:M.target.value}))}} /></label>
      <p id="guided-expected-help" class="ck-muted">Text the response must contain.</p>
      </div>
      <div class="guided-section">
      <${es} key=${`${e.projectPath}:${r}`} tags=${p.tags??{}} enabled=${I&&!w&&!y}
        projectPath=${e.projectPath} invoke=${t} onPending=${k}
        onChange=${(M,ve,V)=>{g(!1),h(D=>{let X={...D,tags:M};ve!==void 0&&(X.expectedConfigurationHash=ve,X.suiteFilterTags=V??M);let be=X.suiteFilterTags??D.tags??{};return Object.entries(be).some(([B,Y])=>Object.hasOwn(M,B)&&JSON.stringify(M[B])===JSON.stringify(Y))||(delete X.expectedConfigurationHash,delete X.suiteFilterTags),X})}} />
      </div>
      <div class="guided-field">
      <label class="stack-label">Eval directory (optional)<input class="ck-input" name="draft-directory" maxLength="180"
        aria-describedby="guided-directory-help"
        value=${ae??pe} disabled=${w||oe||$e||!!m}
        placeholder="Project-relative directory; leave blank to use project settings"
        onKeyDown=${M=>{M.key==="Enter"&&M.preventDefault()}}
        onInput=${M=>{w||oe||$e||(ie.current++,f(M.target.value),i(!0),u(!1),c(""))}} /></label>
      <p id="guided-directory-help" class="ck-muted">Choose before checking or asking Copilot. The destination stays fixed until you discard this draft.</p>
      </div>
      <p class="guided-preset ck-muted"><strong>Starter preset: 1 prompt · 1 attempt · 60 seconds · copilot-sdk</strong>
        <span>Output-contains check. Edit it or ask Copilot for other tests. This preset doesn't keep settings from an existing eval.</span></p>
      <div class="guided-footer">
        <p class="ck-muted">${$?"Finish adding tags or close the suite helper before building.":"Builds an editable draft with these tags and text check. No AI requests, file changes or suite settings changes."}</p>
        <button class="ck-btn ck-btn-primary" type="submit" disabled=${$||!!m&&(v||!o.length||A)||w||y||!p.name.trim()||!p.task.trim()||!p.expected.trim()}>
          ${v?"Replace editor draft":"Build eval draft"}</button>
      </div>
      ${v&&a`<p class="studio-warning" role="status">This replaces the current draft in the editor. Project files won't change.</p>`}
    </form>`}function rs({state:e,run:t,files:n,setFiles:r,setDirectoryChoice:o,setSelected:s,setDirty:l,setConflict:i,setDiscard:d,setReview:c,setSyncIssue:u,dirty:f,blocked:p,lockedDraft:h,conflict:v,ready:g,canRetarget:$,canRetryDraft:k,stepReadyToSave:m,stepStatus:w,syncIssue:y,pending:I,discard:T,showDiagnostics:A,setShowDiagnostics:P,saveButton:z,draftEpoch:C,version:se,lastSynced:ke,lastEpoch:ae,sharedEpoch:pe,discardRevision:oe,discardEpoch:$e,applying:ie,sync:R,retargetDraft:J,validate:ee,retryDraft:re,onSetup:Q,onActivity:M,error:ve}){return a`
        <div class="draft-steps" role="status" aria-label="Draft workflow progress">
          <span class=${`draft-step ${!m&&!e.draft.saveOutcome?.complete?"active":"done"}`}>1. Edit draft</span>
          <span class=${`draft-step ${m?"active":e.draft.saveOutcome?.complete?"done":""}`}>2. Check format</span>
          <span class=${`draft-step ${e.draft.saveOutcome?.complete?"active":""}`}>3. Review & save</span>
          <span class="draft-step-hint ck-muted">${w}</span>
        </div>
        <div class="draft-actions">
          ${y&&a`<button class="ck-btn" disabled=${!!I||h||v} onClick=${()=>R()}>Retry sync</button>`}
          ${e.draft.request?.canRestart&&a`<button class="ck-btn" disabled=${!g||!$||v||!!y}
            onClick=${J}>Start fresh request</button>`}
          <button class="ck-btn ck-btn-primary" aria-describedby="draft-blocked-reason" disabled=${!!p||h||!n.length||k||e.draft.saving||e.draft.closed||e.draft.saveAttempted||e.draft.request?.stateUnavailable||e.draft.request?.recoveryRequired} onClick=${ee}>${I==="validate_draft"?"Checking\u2026":"Check draft"}</button>
          ${k&&a`<button class="ck-btn" disabled=${!!p} onClick=${re}>Retry edited draft</button>
            <p class="ck-muted">Prepare new files for the same original source. This doesn't run an eval or model, or recover an incomplete save.</p>`}
          <button ref=${z} class="ck-btn" aria-describedby="draft-blocked-reason" disabled=${!!p||f||!e.draft.proposal?.canCommit||e.draft.saving||e.draft.closed} onClick=${()=>c(!0)}>Review & save</button>
          ${e.draft.conversation?a`<button class="ck-btn" type="button" disabled=${!!I}
            title="Dismiss this Canvas preview without stopping or discarding your work in chat."
            onClick=${()=>t("clear_draft",{expectedRevision:e.draft.revision,expectedEpoch:C})}>Dismiss preview</button>`:a`<button class="ck-btn" disabled=${!!I||h||v} onClick=${async()=>{if(!T){oe.current=ke.current,$e.current=ae.current,d(!0);return}let V=se.current,D=$e.current;ie.current=!0;try{let X=await t("clear_draft",{expectedRevision:oe.current,...D?{expectedEpoch:D}:{}});X&&ae.current===D&&(pe.current===D||X.epoch===pe.current)&&(X.epoch===void 0||!D||X.epoch===D)&&(X.epoch!==void 0&&(ae.current=X.epoch),ke.current=X.revision??e.draft.revision,i(!1),se.current===V&&(r([]),o(""),s(0),l(!1)),d(!1),c(!1),u(""))}finally{ie.current=!1}}}>${T?"Confirm discard draft":"Discard"}</button>`}
        </div>
        <p id="draft-blocked-reason" role="status" class="ck-muted">${p||(n.length?k?"Choose Retry edited draft to prepare new files for review, then choose Check draft again.":m?"Review the exact checked files, then approve Save separately.":"Edits sync in memory only. Choose Check draft before Review & save.":"Add a draft file before checking or saving.")}</p>
        ${e.draft.proposal&&(()=>{let V=!e.draft.proposal.canCommit&&e.draft.proposal.conflicts.some(D=>D.code==="validation-deadline");return a`<div class=${`draft-validation ${e.draft.proposal.canCommit?"accepted":"rejected"}`}>
          <strong>${e.draft.proposal.canCommit?"Accepted for file creation":V?"Validation timed out (eval was not rejected as invalid)":"Not ready to save"}</strong>
          <p>${e.draft.proposal.canCommit?"These files passed the format check. Runner compatibility is shown for reference and doesn't block saving. Running still needs separate compatibility checks and approval.":V?"Validation timed out after 15 seconds without a verdict. The eval may still be valid. Retry the unchanged proposal, view diagnostics, or open runner settings.":"Fix the listed conflicts, then retry these proposed files when allowed. This doesn't run the eval."}</p>
          ${V&&a`<div class="draft-actions">
            ${k&&a`<button class="ck-btn ck-btn-primary" type="button" disabled=${!g||!!I||v} onClick=${re}>Retry validation</button>`}
            <button class="ck-btn" type="button" onClick=${()=>P(D=>!D)}>${A?"Hide diagnostics":"View diagnostics"}</button>
            <button class="ck-btn" type="button" onClick=${()=>Q?Q():document.getElementById("btn-setup")?.click()}>Open runner settings</button>
          </div>`}
          ${e.draft.proposal.conflicts.map((D,X)=>a`<p key=${X} role="status">${D.relativePath??D.phase}: ${D.message}</p>`)}
          ${!f&&e.draft.proposal.organization&&a`<details><summary>Proposed tag and suite alignment</summary>
            ${e.draft.proposal.organization.map((D,X)=>a`<p key=${X}>${D}</p>`)}</details>`}
          ${e.draft.proposal.files.map(D=>a`<details key=${D.relativePath} open=${A||void 0}><summary>${D.relativePath}: ${At(D)}</summary>
            <pre tabindex="0">${D.validation?.diagnosticText??(D.kind==="fixture"?"Fixture bytes only; no script is run.":"Validation has not run for this definition.")}</pre>
            ${D.support&&a`<p>Runner compatibility (for reference): ${Ur(D.support)}</p>
              <pre tabindex="0">${[`Technical runner profile: ${D.support.profile}`,...D.support.diagnostics].join(`
`)}</pre>`}</details>`)}
        </div>`})()}
        ${e.draft.saveOutcome&&a`<div class="save-outcome" role="status"><strong>${e.draft.saveOutcome.complete?"Approved files created.":"Save incomplete. Review each file."}</strong>
          ${e.draft.saveOutcome.files.map(V=>a`<p key=${V.relativePath}>${V.relativePath}: ${V.status} · ${V.message}</p>`)}
          ${e.draft.saveOutcome.conflicts.map((V,D)=>a`<p key=${D}>${V.message}</p>`)}
          ${e.draft.saveOutcome.complete&&e.draft.saveOutcome.organization&&a`<details open><summary>Saved tag and suite alignment</summary>
            ${e.draft.saveOutcome.organization.map((V,D)=>a`<p key=${D}>${V}</p>`)}</details>`}
          ${e.draft.saveOutcome.complete&&a`<button class="ck-btn" onClick=${M}>Next: choose an eval to run</button>`}</div>`}
        <${ye} error=${ve} />`}function ss({state:e,message:t,setMessage:n,sendMessage:r,sendBlocked:o,showSendNotice:s,lockedDraft:l,conflict:i,dirty:d,pending:c,chatEnd:u,run:f}){return a`<aside class="copilot-panel" aria-label="Copilot draft assistant">
        <div class="copilot-heading"><${W} name="sparkles" size=${20} /><strong>Copilot</strong></div>
        <div class=${`chat-messages ${e.chat.messages.length?"":"chat-empty"}`} role="log" aria-live="polite" aria-label="Draft conversation">
          ${!e.chat.messages.length&&a`<div class="chat-welcome"><h3>Need help shaping your eval?</h3>
            <p>Tell Copilot what you want the AI to do and what a good response looks like. It will suggest eval files for you to review.</p>
            ${["Create an eval for this skill using a realistic request.","Create an eval that checks for an exact response.","Help me improve how this eval scores responses."].map(p=>a`
              <button class="prompt-chip" disabled=${l||!!c} onClick=${()=>n(p)}>${p}</button>`)}</div>`}
          ${e.chat.messages.map(p=>a`<article class=${`chat-message ${p.role}`} key=${p.id}>
            <strong>${p.role==="user"?"You":"Copilot"}</strong><p>${p.text}</p>
            ${p.proposed?.length&&a`<details class="ai-proposal"><summary>Review ${p.proposed.length} proposed files</summary>
              ${p.proposed.map(h=>a`<details key=${h.relativePath}><summary>${h.relativePath}</summary><pre tabindex="0">${h.content}</pre></details>`)}
              <button class="ck-btn" disabled=${l||i||d||!!c||p.draftRevision!==e.draft.revision}
                onClick=${()=>f("accept_proposal",{id:p.id})}>Use reviewed proposal as draft</button>
              ${d&&a`<p class="ck-muted">Apply or discard local editor changes before accepting a proposal.</p>`}</details>`}
          </article>`)}
          ${["approval","thinking"].includes(e.chat.status)&&a`<p class="thinking" role="status">${e.chat.status==="approval"?"Waiting for AI request approval\u2026":"Copilot is preparing a response\u2026"} <button class="ck-btn" onClick=${()=>f("cancel_chat")}>Discard response</button></p>`}
          <div ref=${u}></div>
        </div>
        <form class="chat-composer" onSubmit=${async p=>{p.preventDefault(),await r()}}>
          ${e.draft.conversation&&!s&&a`<div class="retained-conversation-help">
            <p class="retained-conversation-warning" role="status"><${W} name="triangle-alert" size=${16} />
              <span>${e.draft.conversation.status==="sent"?"Complete the previous eval in chat.":"Check the previous eval in chat."}</span></p>
            <button class="ck-btn" type="button" disabled=${!!c}
              title="Start a new draft without deleting saved files or cancelling your work in chat."
              onClick=${async()=>{(await f("clear_draft",{expectedRevision:e.draft.revision,expectedEpoch:e.draft.epoch}))?.cleared&&n("")}}>Start another eval</button>
          </div>`}
          <label class="sr-only" for="author-message">Describe the eval to build</label>
          <textarea class="ck-textarea" id="author-message" name="author-message" autocomplete="off" rows="3" value=${t} maxLength="8000" readonly=${l||!!c}
            placeholder="Describe the task and expected outcome…" onInput=${p=>n(p.target.value)}></textarea>
          <p class="ck-muted">Uses AI credits. Eval runs need separate approval.</p>
          <button class="ck-btn ck-btn-primary" type="submit" aria-describedby="send-blocked-reason" disabled=${!!o||l||!!c||!t.trim()||["approval","thinking"].includes(e.chat.status)}>Send to Copilot</button>
          <p id="send-blocked-reason" role="status" class=${s?"conversation-handoff-notice":"ck-muted"}>
            ${s?a`<${W} name="message-square" size=${16} /><span>${e.draft.conversation.status==="sent"?"Your message has been sent to Copilot. You can now finish your eval in chat.":"We couldn't confirm your message reached Copilot. Check chat before trying again."}</span>`:e.draft.conversation?.status==="pending"?"Previous delivery couldn't be confirmed. Check chat before trying again.":o||(l?"Review & save retries the same checked files. Editing and AI stay blocked until you recover that save.":["approval","thinking"].includes(e.chat.status)?"Wait for Copilot or discard the pending response.":"")}</p>
          <${ye} error=${e.chat.error} />
        </form>
      </aside>`}function as({label:e,name:t,value:n,onChange:r,single:o=!1,disabled:s=!1}){let l=n.split(`
`),i=(d,c)=>r(l.map((u,f)=>f===d?c:u).join(`
`));return a`<div class="config-path-group">
    <div class="config-path-heading"><span>${e}</span>
      ${!o&&a`<button class="config-text-button" type="button" disabled=${s}
        aria-label=${`Add ${e.toLowerCase()}`} onClick=${()=>r(`${n}
`)}>+ Add</button>`}</div>
    ${l.map((d,c)=>a`<div class="config-path-row" key=${c}>
      <div class="config-path-input"><${W} name=${t==="evalFilenames"?"file-code":"folder"} size=${14} />
        <input class="ck-input" name=${`setup-${t}-${c}`} aria-label=${`${e} ${c+1}`}
          value=${d} disabled=${s} spellcheck="false" autocomplete="off" onInput=${u=>i(c,u.target.value)} /></div>
      ${!o&&l.length>1&&a`<button class="ck-btn ck-btn-icon" type="button" disabled=${s}
        aria-label=${`Remove ${e.toLowerCase()} ${c+1}`} onClick=${()=>r(l.filter((u,f)=>f!==c).join(`
`))}>×</button>`}
    </div>`)}
  </div>`}function Dn({filename:e,subtitle:t,text:n,exact:r=!1,ci:o=!1}){return a`<aside class="config-preview" aria-label="Configuration preview">
    <div class="eyebrow">Preview your changes</div>
    <section class="config-file-summary">
      <div class="config-summary-title"><${W} name="file-code" size=${20} /><div><strong><code>${e}</code></strong><p>${t}</p></div>
        <span class="ck-badge">${r?"Reviewed":"Draft"}</span></div>
      <div class="config-summary-facts"><div><small>Scope</small><span>${o?"GitHub Actions":"Project configuration"}</span></div>
        <div><small>Effect</small><span>File changes only</span></div></div>
    </section>
    <section class="config-code-card">
      <header><span><${W} name="file-code" size=${14} />YAML preview</span><span>${r?"Exact proposal":"Working draft"}</span></header>
      <pre tabindex="0" aria-label="Configuration YAML preview">${n.split(`
`).map((s,l)=>a`<span class="config-code-line"><span aria-hidden="true">${l+1}</span><code>${s||" "}</code></span>`)}</pre>
      <footer>${r?"This is the file to save. Your app will still ask for approval.":o?"Workflow outline only. Review builds the full file and checks that the source hasn't changed.":"Edited fields only, not a complete file. Review preserves existing YAML."}</footer>
    </section>
    <div class="config-safety"><${W} name="shield-check" size=${17} /><div><strong>Nothing runs when you configure.</strong>
      <p>${o?"Saving does not commit or run this workflow. Publishing it may enable future runs under the selected triggers.":"Reading these settings doesn't check whether they work. Saving doesn't install a runner, set up CI, or run evals."}</p></div></div>
  </aside>`}function os({proposal:e,ci:t,pending:n,error:r,notice:o,onSave:s,onClose:l}){let i=N(null),d=N(null);Me(()=>{let u=document.activeElement;return d.current?.focus(),()=>{u?.isConnected&&u.focus()}},[]);function c(u){if(u.key==="Escape"&&!n&&(u.preventDefault(),l()),u.key!=="Tab")return;let f=[...i.current.querySelectorAll('button:not(:disabled), summary, [tabindex="0"]')].filter(p=>p.checkVisibility({visibilityProperty:!0}));if(!f.length){u.preventDefault();return}u.shiftKey&&(document.activeElement===f[0]||document.activeElement===d.current)?(u.preventDefault(),f.at(-1).focus()):!u.shiftKey&&(document.activeElement===f.at(-1)||document.activeElement===d.current)&&(u.preventDefault(),f[0].focus())}return a`<div class="modal-scrim config-modal"><section ref=${i} class="review-dialog config-review"
    role="dialog" aria-modal="true" aria-labelledby="config-review-title" onKeyDown=${c}>
    <header class="config-review-header"><div><h2 id="config-review-title" ref=${d} tabindex="-1">
      ${t?"Review CI workflow changes":"Review exact .vally.yaml changes"}</h2>
      <p>Review the full file. Your app will ask for separate approval before saving.</p></div>
      <button class="ck-btn ck-btn-icon" disabled=${n} onClick=${l} aria-label="Close configuration review">×</button></header>
    <div class="config-review-body" aria-label=${t?"CI workflow change review":"Project configuration change review"}>
      <p><code>${e.relativePath}</code></p>
      ${e.diff&&a`<details open><summary>Exact diff</summary><pre tabindex="0">${e.diff}</pre></details>`}
      <details><summary>Before</summary><pre tabindex="0">${e.before??"(new file)"}</pre></details>
      <details open><summary>After</summary><pre tabindex="0">${e.after}</pre></details>
      ${e.sha256&&a`<p class="config-hash">SHA-256: ${e.sha256}</p>`}
      ${e.notices?.map(u=>a`<p class="config-review-notice">${u}</p>`)}
      <${ye} error=${r} />
      ${o&&a`<p role="status">${o}</p>`}
    </div>
    <footer class="config-review-footer"><p>Only this file changes. No eval runs.</p><div>
      <button class="ck-btn" disabled=${n} onClick=${l}>Back to editing</button>
      <button class="ck-btn ck-btn-primary" disabled=${n} onClick=${s}>
        ${n?"Waiting for approval\u2026":t?"Save reviewed workflow":"Save reviewed configuration"}</button>
    </div></footer>
  </section></div>`}var Rt=e=>e.split(/\r?\n/).map(t=>t.trim()).filter(Boolean),Ln=()=>({evals:"",skills:"",results:"",evalFilenames:""}),Mn=(e,t=[])=>Object.entries(e).map(([n,r])=>({key:n,values:Array.isArray(r)?[...r]:[r],array:Array.isArray(r)&&!(r.length===1&&t.includes(n))})),Nt=e=>Object.fromEntries(e.map(t=>[t.key,t.array||t.values.length>1?t.values:t.values[0]])),is=(e,t)=>{let n=r=>Object.entries(r).sort(([o],[s])=>o.localeCompare(s)).map(([o,s])=>[o,Array.isArray(s)?s:[s]]);return JSON.stringify(n(e))===JSON.stringify(n(t))};function Ot(e){let t=JSON.parse(e);if(!t||typeof t!="object"||Array.isArray(t)||Object.entries(t).some(([n,r])=>!n.length||!(typeof r=="string"?r.length:Array.isArray(r)&&r.length&&r.every(o=>typeof o=="string"&&o.length))))throw new Error("Give each tag a text value or a list of text values. Don't leave values or lists empty.");return t}function ls({state:e,invoke:t,section:n="project",onSection:r}){let[o,s]=S(null),[l,i]=S(Ln),[d,c]=S([]),[u,f]=S(""),[p,h]=S(""),[v,g]=S(""),[$,k]=S([]),[m,w]=S([]),[y,I]=S(!1),[T,A]=S("{}"),[P,z]=S(""),[C,se]=S(null),[ke,ae]=S(null),[pe,oe]=S(""),[$e,ie]=S("manual-and-pull-requests"),[R,J]=S("evals.yml"),[ee,re]=S("preserve"),[Q,M]=S(null),[ve,V]=S(!0),[D,X]=S(""),[be,B]=S(""),[Y,le]=S("ready"),[ce,je]=S(null),[Ne,we]=S(!1),[et,xe]=S(!1),he=N(null),_e=N(0),de=N(Promise.resolve()),Je=N(""),q=N(0),te=N(0),fe=N({choice:"",name:""}),Ce=N(null),K=N(null),Se=N(null),me=N(!1),{run:G,pending:Ie,error:tt,reset:We}=Ae(t,{returnCancellation:!0}),Ge=o?.declarations?.suites??[],Ee=Ge.filter(_=>_.inspectable),j=u.startsWith("existing:")?Ge[Number(u.slice(9))]:null,b=d.length>0||$.length>0||u==="new"&&!ke,x=ce!==null||!!Ie&&Y!=="refreshing",F=ce===null&&(o?.state==="missing"||o?.state==="available"),ge=ve&&e.trusted&&o?.state==="available"&&o.complete&&Ee.some(_=>_.name===pe)&&!b&&Y==="ready",Pe=JSON.stringify({paths:l,editedPaths:d,suiteChoice:u,suite:p,description:v,editedSuite:$,tags:m,advanced:y,filter:T,patterns:P,ciSuite:pe,ciWhen:$e,ciFilename:R,ciTranscriptUploads:ee});Je.current=Pe,U(()=>{if(!Ne||!et||!o||!e.trusted||Y!=="ready")return;let _=_e.current,E=o.source?.hash??null,O=setTimeout(()=>{de.current=de.current.catch(()=>{}).then(async()=>{if(_!==_e.current)return;let L=await t("retain_project_setup_inputs",{inputs:JSON.parse(Pe),sourceHash:E,revision:he.current});_===_e.current&&typeof L?.revision=="string"&&(he.current=L.revision,Je.current===Pe&&xe(!1))}).catch(()=>{_===_e.current&&B("Setup inputs could not be retained privately. Keep this form open and preserve your edits before closing.")})},250);return()=>clearTimeout(O)},[Ne,et,Pe,o?.source?.hash,e.trusted,e.projectPath,Y]),U(()=>{!D&&!Ie&&me.current&&(me.current=!1,Se.current?.focus())},[D,Ie]);function ze(){me.current=!0,X("")}U(()=>{globalThis.document?.activeElement?.getAttribute("role")!=="tab"&&(n==="project"?Ce.current?.focus():n==="ci"&&K.current?.focus())},[n]);function yt(){fe.current={choice:"",name:""},f(""),h(""),g(""),k([]),w([]),I(!1),A("{}"),z("")}U(()=>(q.current++,te.current++,_e.current++,he.current=null,we(!1),xe(!1),We(),s(null),se(null),M(null),X(""),ae(null),je(null),oe(""),ie("manual-and-pull-requests"),J("evals.yml"),B(""),le("ready"),re("preserve"),i(Ln()),c([]),yt(),e.trusted&&pt({initial:!0}),()=>{q.current++,te.current++,_e.current++}),[e.projectPath,e.trusted,e.context?.workingDirectory,e.context?.mode]),U(()=>{if(ce===null||ce!==q.current||!e.trusted||!["ready","error"].includes(e.discovery?.status))return;let _=Fr(e.assets);i(_.paths),c(Object.keys(_.paths)),fe.current={choice:"new",name:_.suite},f("new"),h(_.suite),g(_.description),k(["description","filter"]),je(null),e.discovery.status==="error"&&B("Asset discovery is incomplete. Suggested folders may miss existing files; review the project paths before saving.")},[ce,e.assets,e.discovery?.status,e.trusted]);let at=()=>{q.current++,xe(!0),se(null),M(null),ae(null),B("")},De=()=>{q.current++,xe(!0),M(null),B("")},Qe=_=>{at(),k(E=>E.includes(_)?E:[...E,_])};function dn(_){if(Y==="refreshing")return;at();let E=_.startsWith("existing:")?Ge[Number(_.slice(9))]:null;Y==="changed"&&(_===""||_==="new"||E?.inspectable)&&(le("ready"),we(!0));let O=Mn(E?.filter??{},E?.filterScalarKeys);fe.current={choice:_,name:E?.name??""},f(_),h(E?.name??""),g(E?.description??""),k([]),w(O),I(!1),A(JSON.stringify(Nt(O),null,2)),z((E?.evals??[]).join(`
`))}async function pt({initial:_=!1}={}){if(!e.trusted)return;let E=!_&&Ne&&(b||Y==="changed"),O=++q.current;je(null),te.current++;let L=await G("inspect_project_setup");if(!L||q.current!==O)return;if(L.cancelled){B("Inspection cancelled. No project configuration was changed.");return}if(V(L.ciAvailable!==!1),s(L.inspection),se(null),M(null),X(""),ae(null),B(""),le("ready"),E){je(null);let H=L.inspection.declarations?.paths??{};i(Te=>Object.fromEntries(["evals","skills","results","evalFilenames"].map(Ve=>[Ve,d.includes(Ve)?Te[Ve]:(H[Ve]??[]).join(`
`)]))),c(d.filter(Te=>l[Te].trim()&&JSON.stringify(Te==="results"?[l[Te].trim()]:Rt(l[Te]))!==JSON.stringify(H[Te]??[])));let Z=L.inspection.declarations?.suites??[],st=Z.findIndex(Te=>Te.name===fe.current.name);if(u.startsWith("existing:")&&st>=0){let Te=Z[st];if(f(`existing:${st}`),fe.current={...fe.current,choice:`existing:${st}`},$.includes("description")||g(Te.description??""),$.includes("evals")||z((Te.evals??[]).join(`
`)),!$.includes("filter")){let Ve=Mn(Te.filter??{},Te.filterScalarKeys);w(Ve),A(JSON.stringify(Nt(Ve),null,2))}k($.filter(Ve=>{if(Ve==="description")return v!==(Te.description??"");if(Ve==="evals")return P.trim()&&JSON.stringify(Rt(P))!==JSON.stringify(Te.evals??[]);if(Ve==="filter")try{return!is(Ot(y?T:JSON.stringify(Nt(m))),Te.filter??{})}catch{return!0}return!0}))}else if(u.startsWith("existing:")){le("changed"),B("The selected suite changed or was removed. Your inputs were kept; choose its current target before reviewing configuration.");return}xe(!0),B("Source refreshed. Your unfinished inputs were kept; review the current configuration before saving.");return}c([]),yt(),oe(H=>(L.inspection.declarations?.suites??[]).some(Z=>Z.inspectable&&Z.name===H)?H:(L.inspection.declarations?.suites??[]).find(Z=>Z.inspectable)?.name??"");let ue=L.inspection.declarations?.paths??{};if(L.inspection.state==="missing"?(i(Ln()),je(O)):i(Object.fromEntries(["evals","skills","results","evalFilenames"].map(H=>[H,(ue[H]??[]).join(`
`)]))),!Ne&&L.retainedInputs){let H=L.retainedInputs.inputs;if(!H||!H.paths||Object.values(H.paths).some(Z=>typeof Z!="string")||!Array.isArray(H.editedPaths)||!Array.isArray(H.editedSuite)||!Array.isArray(H.tags)||H.tags.some(Z=>!Z||typeof Z.key!="string"||!Array.isArray(Z.values)||Z.values.some(st=>typeof st!="string"))||["suiteChoice","suite","description","filter","patterns","ciSuite","ciWhen","ciFilename","ciTranscriptUploads"].some(Z=>typeof H[Z]!="string")||typeof H.advanced!="boolean"){B("Retained Setup inputs could not be read safely. Their private recovery copy was preserved.");return}if(he.current=L.retainedInputs.revision,je(null),i(H.paths),c(H.editedPaths),fe.current={choice:H.suiteChoice,name:H.suite},f(H.suiteChoice),h(H.suite),g(H.description),k(H.editedSuite),w(H.tags),I(H.advanced),A(H.filter),z(H.patterns),oe(H.ciSuite),ie(H.ciWhen),J(H.ciFilename),re(H.ciTranscriptUploads),L.retainedInputs.changed){le("changed"),we(!0),B("Project configuration changed while Setup was closed. Your inputs were retained; inspect and explicitly review the changed configuration before proposing or saving.");return}}we(!0)}function kt(){let _={},E=Object.fromEntries(Object.entries(l).filter(([O,L])=>d.includes(O)&&L.trim()).map(([O,L])=>[O,O==="results"?L.trim():Rt(L)]).filter(([O,L])=>JSON.stringify(O==="results"?[L]:L)!==JSON.stringify(o?.declarations?.paths?.[O])));if(Object.keys(E).length&&(_.paths=E),u){if(!j&&!p.trim())throw new Error("Enter a name for the new suite.");if(!j&&Ge.some(L=>L.name===p.trim()))throw new Error("That suite already exists. Choose it to edit its settings.");let O={};if($.includes("description")&&v!==(j?.description??"")&&(O.description=v),$.includes("evals")&&P.trim()&&JSON.stringify(Rt(P))!==JSON.stringify(j?.evals)&&(O.evals=Rt(P)),$.includes("filter")){if(!y&&new Set(m.map(ue=>ue.key)).size!==m.length)throw new Error("Use each tag key only once; add alternative values to that key.");let L=Ot(y?T:JSON.stringify(Nt(m)));(!j||!is(L,j.filter??{}))&&(O.filter=L)}Object.keys(O).length&&(_.suites={[j?.name??p.trim()]:O})}return _}let rt,ot="";try{rt=kt()}catch(_){ot=_.message}async function un(_){if(_.preventDefault(),!e.trusted||!F||Y!=="ready")return;if(B(""),se(null),ae(null),ot){B(`${ot} Nothing was changed.`);return}if(!Object.keys(rt).length){B("Edit at least one field before reviewing configuration changes. Nothing was changed.");return}let E=++q.current,O=await G("propose_project_setup",{changes:rt,expectedSourceHash:o.source?.hash??null});O&&E===q.current&&(se(O),X("project"))}async function Dt(){let _=q.current,E=await G("save_project_setup",{proposalId:C.proposalId});if(!E||_!==q.current)return;if(E.cancelled){B("Save declined. No project configuration was changed.");return}if(!E.saved)return;ae({...E,proposalId:C.proposalId}),se(null),ze(),xe(!0),c([]),k([]),B(["Project configuration saved. No eval was run.",E.cleanupWarning,E.recoveryPath?`Recovery evidence: ${E.recoveryPath}`:""].filter(Boolean).join(`
`));let O=fe.current,L=++te.current;le("refreshing");let ue=await G("inspect_project_setup");if(L===te.current){if(!ue||ue.cancelled){le("unavailable");return}if(ue.inspection.state!=="available"||typeof E.sourceHash!="string"||ue.inspection.source?.hash!==E.sourceHash){le("changed");return}if(s(ue.inspection),le("ready"),oe(H=>(ue.inspection.declarations?.suites??[]).some(Z=>Z.inspectable&&Z.name===H)?H:(ue.inspection.declarations?.suites??[]).find(Z=>Z.inspectable)?.name??""),O.choice==="new"&&fe.current.choice==="new"&&fe.current.name===O.name){let H=(ue.inspection.declarations?.suites??[]).findIndex(Z=>Z.name===O.name.trim());H>=0&&(fe.current={choice:`existing:${H}`,name:O.name.trim()},f(`existing:${H}`),h(O.name.trim()))}}}async function Lt(){if(!ge)return;let _=++q.current;B(""),M(null);let E=await G("propose_ci_setup",{suite:pe,filename:R,when:$e,expectedSourceHash:o.source.hash,transcriptUploads:ee});E&&_===q.current&&(M(E),X("ci"))}async function pn(){let _=q.current,E=await G("save_ci_setup",{proposalId:Q.id});!E||_!==q.current||(B(E.message),E.status==="saved"&&(M(null),ze()))}let ft={on:{...$e!=="pull-requests"?{workflow_dispatch:{}}:{},...$e!=="manual"?{pull_request:{}}:{}},jobs:{evals:{steps:[{with:{suite:pe||"(choose a saved suite)"}}]}}};return a`<div class="project-setup">
    <div class="config-inspection">
      <span role="status">${Ie==="inspect_project_setup"?"Loading project configuration\u2026":o?`Configuration: ${o.state}. Settings read only; not checked by a run.`:"Project settings haven't been read yet."}</span>
      <button class="config-text-button" disabled=${!e.trusted||!!Ie} onClick=${pt}><${W} name="refresh-cw" size=${13} />Inspect project configuration</button>
    </div>
    ${!e.trusted&&a`<p class="config-notice">Trust this folder to load and edit its project configuration.</p>`}
    ${ce!==null&&a`<p class="config-notice" role="status">Waiting for asset discovery before suggesting project folders…</p>`}
    ${Y!=="ready"&&a`<p class="config-notice" role="alert">${Y==="refreshing"?"Reading the saved settings again. You can keep editing and review changes when the read finishes.":Y==="changed"?"Project configuration changed after saving. Your unsaved edits are kept. Inspect project configuration again before reviewing updates.":"Couldn't reload saved settings. Your unsaved edits are kept. Choose Inspect project configuration before reviewing changes."}</p>`}
    ${o?.diagnostics.map((_,E)=>a`<p key=${E} class="config-notice">${_.message}</p>`)}
    <div class="config-layout" hidden=${n!=="project"} id="config-panel-project" role="tabpanel" aria-labelledby="config-tab-project">
      <form id="project-config-form" onSubmit=${un} class="config-form">
        <h3 id="project-setup-heading" class="sr-only" tabindex="-1" ref=${Ce}>Project configuration</h3>
        ${o?.state==="missing"&&a`<div class="config-notice"><strong>Suggested settings</strong>
          <p>No <code>.vally.yaml</code> was found. Suggestions use folders found in your project, or common defaults.
            Filename patterns group formats; large inventories use common ancestor folders or wildcards to stay within configuration limits.
            These suggestions may include additional files. The <code>all</code> suite has no tag restriction.
            Edit or clear suggestions before saving. Setup is optional.</p></div>`}
        <fieldset disabled=${x||!e.trusted||!F} class="config-fields">
          <legend class="sr-only">Project paths and suites</legend>
          <section class="config-card">
            <header><div><h3><${W} name="folder" size=${16} />Locations</h3><p>Choose folders for evals, skills and results.</p></div><span class="ck-badge">Project-relative</span></header>
            <div class="config-card-body">
              ${[["evals","Eval folders"],["skills","Skill folders"],["results","Results folder"],["evalFilenames","Eval filename patterns"]].map(([_,E])=>a`
                <${as} key=${_} label=${E} name=${_} value=${l[_]} single=${_==="results"} onChange=${O=>{at(),c(L=>L.includes(_)?L:[...L,_]),i(L=>({...L,[_]:O}))}} />`)}
            </div>
            <footer>Blank fields preserve existing settings. Unfinished inputs are kept privately; project files change only after review and approval.</footer>
          </section>
          <section class="config-card">
            <header><h3><${W} name="layers" size=${16} />Suites</h3><span class="ck-muted">Groups of evals to run together</span></header>
            <div class="config-card-body">
              <label class="stack-label">Suite to configure (optional)
                <select class="ck-input" name="setup-suite-choice" value=${u} disabled=${Y==="refreshing"} onChange=${_=>dn(_.target.value)}>
                  <option value="">Leave suites unchanged</option>
                  ${Ge.map((_,E)=>a`<option key=${_.name} value=${`existing:${E}`} disabled=${!_.inspectable}>Edit existing suite: ${_.name}</option>`)}
                  <option value="new">Create a new suite</option>
                </select></label>
              <p class="config-help">Switching suites replaces the fields below. Only edited fields enter review.</p>
              ${u&&a`
                ${!j&&a`<label class="stack-label">New suite name<input class="ck-input" name="setup-suite" value=${p}
                  onInput=${_=>{at(),fe.current={choice:u,name:_.target.value},h(_.target.value)}} /></label>`}
                <label class="stack-label">Suite description (optional)<input class="ck-input" name="setup-description" value=${v}
                  onInput=${_=>{Qe("description"),g(_.target.value)}} /></label>
                <div class="config-tag-heading"><strong>Match tags</strong><span>Literal values</span></div>
                ${!y&&a`<div class="config-tags">
                  ${!m.length&&a`<p class="config-help">No tag filter: all discovered evals match. File selectors still apply.</p>`}
                  ${m.map((_,E)=>a`<div class="config-tag-row" key=${E}>
                    <div class="config-tag-chip">
                      <input class="ck-input config-tag-key" name=${`setup-tag-key-${E}`} aria-label=${`Tag key ${E+1}`} value=${_.key}
                        onInput=${O=>{Qe("filter"),w(L=>L.map((ue,H)=>H===E?{...ue,key:O.target.value}:ue))}} />
                      <span aria-hidden="true">=</span>
                      <div class="config-tag-values">${_.values.map((O,L)=>a`<div class="config-tag-value" key=${L}>
                        ${L>0&&a`<span class="config-or">OR</span>`}
                        <input class="ck-input" name=${`setup-tag-value-${E}-${L}`} aria-label=${`Tag ${E+1} value ${L+1}`} value=${O}
                          onInput=${ue=>{Qe("filter"),w(H=>H.map((Z,st)=>st===E?{...Z,values:Z.values.map((Te,Ve)=>Ve===L?ue.target.value:Te)}:Z))}} />
                        ${_.values.length>1&&a`<button class="config-text-button" type="button" aria-label=${`Remove tag ${E+1} value ${L+1}`}
                          onClick=${()=>{Qe("filter"),w(ue=>ue.map((H,Z)=>Z===E?{...H,values:H.values.filter((st,Te)=>Te!==L)}:H))}}>×</button>`}
                      </div>`)}</div>
                      <button class="config-text-button" type="button" aria-label=${`Add alternative value to tag ${E+1}`}
                        onClick=${()=>{Qe("filter"),w(O=>O.map((L,ue)=>ue===E?{...L,values:[...L.values,""]}:L))}}>+</button>
                    </div>
                    <button class="ck-btn ck-btn-icon" type="button" aria-label=${`Remove tag ${E+1}`}
                      onClick=${()=>{Qe("filter"),w(O=>O.filter((L,ue)=>ue!==E))}}>×</button>
                  </div>`)}
                  <button class="config-text-button" type="button" onClick=${()=>{Qe("filter"),w(_=>[..._,{key:"",values:[""],array:!1}])}}>Add tag</button>
                </div>`}
                <details class="config-disclosure"><summary>How matching works & advanced JSON</summary>
                  <p>Keys use AND; values for one key use OR. Commas and spaces stay literal. Empty filters match all evals. Unedited filters keep their original YAML types.</p>
                  <label><input type="checkbox" name="setup-advanced" checked=${y} onChange=${_=>{if(_.target.checked){if(new Set(m.map(E=>E.key)).size!==m.length){B("Use each tag key only once; add alternative values to that key.");return}A(JSON.stringify(Nt(m),null,2)),I(!0)}else try{w(Mn(Ot(T))),I(!1),B("")}catch(E){B(`Tag filter: ${E.message} Nothing was changed.`)}}} />Edit advanced raw JSON</label>
                  ${y&&a`<label class="stack-label">Tag filter (JSON object)<textarea class="ck-input" name="setup-filter" value=${T}
                    onInput=${_=>{Qe("filter"),A(_.target.value)}} /></label>`}
                </details>
                <details class="config-disclosure" open=${!!P}><summary>Limit to file paths or patterns · optional</summary>
                  <label class="stack-label">Optional suite file paths/patterns (one per line)<textarea class="ck-input" name="setup-patterns" rows="2" value=${P}
                    onInput=${_=>{Qe("evals"),z(_.target.value)}} /></label>
                  <p>File and tag selectors both apply. Blank patterns preserve existing selectors.</p>
                </details>
              `}
            </div>
          </section>
        </fieldset>
      </form>
      <${Dn} filename=".vally.yaml" subtitle=${o?.state==="missing"?"New project configuration":"Existing configuration preserved"}
        text=${C?.after??(ot?`# ${ot}`:Object.keys(rt??{}).length?Qt(rt):`# No proposed changes.
# Edit a field to preview your updates.`)} exact=${!!C} />
    </div>
    <div class="config-layout" hidden=${n!=="ci"} id="config-panel-ci" role="tabpanel" aria-labelledby="config-tab-ci">
      <div class="config-form">
        <h3 id="ci-pipeline-heading" class="sr-only" tabindex="-1" ref=${K}>CI pipeline</h3>
        ${!ge&&a`<div class="config-notice"><strong>${ve?"Project configuration comes first.":"CI workflow setup is not available in this build."}</strong>
          <p>${ve?e.trusted?b?"Review or discard project configuration edits before configuring CI.":"Create and save at least one readable eval group (suite) in Project configuration before setting up CI.":"Trust this folder to inspect its configuration before setting up CI.":"Project configuration in .vally.yaml remains available. No CI workflow was created."}</p>
          <button class="config-text-button" onClick=${()=>r("project")}>Go to Project →</button></div>`}
        <section class="config-card">
          <header><div><h3><${W} name="git-compare" size=${16} />Workflow configuration</h3><p>Choose what runs and when it starts.</p></div><span class="ck-badge">GitHub Actions</span></header>
          <fieldset class="config-card-body config-fields" disabled=${!ge||!!Ie}>
            <legend class="sr-only">CI workflow settings</legend>
            <label class="stack-label">Suite to run in CI<select class="ck-input" name="ci-suite" value=${pe}
              onChange=${_=>{De(),oe(_.target.value)}}>
              ${!Ee.length&&a`<option value="">No saved suites</option>`}
              ${Ee.map(_=>a`<option key=${_.name} value=${_.name}>${_.name}</option>`)}
            </select></label>
            <p class="config-help">From saved project settings. The group hasn't been tested by running it.</p>
            <strong class="config-field-title">Start the workflow</strong>
            <div class="config-triggers" role="group" aria-label="Workflow triggers">
              ${[["manual","Manual","On demand only","play"],["pull-requests","Pull requests","Same-repository PRs","git-compare"],["manual-and-pull-requests","Both","Manual and pull requests","layers"]].map(([_,E,O,L])=>a`
                <button type="button" class="config-trigger" aria-pressed=${$e===_} onClick=${()=>{De(),ie(_)}}>
                  <${W} name=${L} size=${17} /><strong>${E}</strong><span>${O}</span></button>`)}
            </div>
            <label class="stack-label">Workflow filename<input class="ck-input" name="ci-filename" value=${R} maxLength="85"
              onInput=${_=>{De(),J(_.target.value)}} /></label>
            <p class="config-help">Inside <code>.github/workflows/</code>. Use a .yml or .yaml filename.</p>
            <label class="stack-label">Upload detailed transcripts?<select class="ck-input" name="ci-transcript-uploads" value=${ee}
              onChange=${_=>{De(),re(_.target.value)}}>
              <option value="preserve">Keep existing setting; off for new workflows</option>
              <option value="disabled">Off - do not upload detailed transcripts</option>
              <option value="enabled">On - upload detailed transcripts</option>
            </select></label>
            <p class="config-help">Structured reports remain enabled. Before enabling transcripts, review artifact access and retention:
              they may contain prompts, code, model output, tool calls and sensitive data. The exact review shows the resulting setting.</p>
          </fieldset>
          <footer>Workflow review and approval are separate from project settings.</footer>
        </section>
        <section class="config-card"><header><h3>After saving</h3></header>
          <ol class="config-steps"><li><strong>Review the exact workflow diff</strong><p>Inspect the file, suite, triggers and permissions.</p></li>
            <li><strong>Approve the workflow separately</strong><p>Your host asks before writing the reviewed file.</p></li>
            <li><strong>Commit and enable it when ready</strong><p>Published triggers may start future runs. Organization billing policy and transcript retention still apply.</p></li></ol>
        </section>
      </div>
      <${Dn} ci=${!0} filename=${`.github/workflows/${R}`} subtitle="Separate workflow approval"
        text=${Q?.after??Qt(ft)} exact=${!!Q} />
    </div>
    ${!D&&a`<${ye} error=${tt} />${be&&a`<p class="config-notice" role="status">${be}</p>`}`}
    <footer class="config-sticky-footer">
      <div><strong>${n==="ci"?"CI workflow \xB7 separate review":b?"Unsaved configuration edits":"Project configuration"}</strong>
        <p>${n==="ci"?"Review permissions, billing policy and transcript retention before saving.":"Refresh keeps your edits. Reinspect to discard and reload. No files change without approval."}</p></div>
      <div class="config-footer-actions">
        ${(n==="ci"?Q:C)&&a`<button class="ck-btn" disabled=${!!Ie} onClick=${()=>{n==="ci"?De():at()}}>Discard proposal</button>`}
        <button ref=${Se} class="ck-btn ck-btn-primary" disabled=${!!Ie||(n==="ci"?!ge:!e.trusted||!F||Y!=="ready")}
          type=${n==="ci"?"button":"submit"} form=${n==="ci"?void 0:"project-config-form"}
          onClick=${n==="ci"?Lt:void 0}>
          ${n==="ci"?"Review CI changes":"Review configuration changes"}<${W} name="chevron-right" size=${15} /></button>
      </div>
    </footer>
    ${D&&(D==="ci"?Q:C)&&a`<${os}
      proposal=${D==="ci"?Q:C} ci=${D==="ci"} pending=${!!Ie} error=${tt} notice=${be}
      onSave=${D==="ci"?pn:Dt} onClose=${()=>{Ie||ze()}} />`}
  </div>`}var Re=(e,t)=>({tag:e,children:t});function an(e){let n=e.slice(0,128e3).replace(/\r\n?/g,`
`).split(`
`),r=n.slice(0,4096),o=[],s=[o],l=0,i=0,d=v=>{let g=[],$=/\\([\\`*_[\]<>#|])|`([^`\n]*)`|\*\*([^*\n]*)\*\*| {2,}\n|\n/g,k=0;for(let m of v.matchAll($)){if(l>=4096)break;l++,m.index>k&&g.push(v.slice(k,m.index)),g.push(m[1]!==void 0?m[1]:m[2]!==void 0?Re("code",[m[2]]):m[3]!==void 0?Re("strong",[m[3].replace(/\\([\\`*_[\]<>#|])/g,"$1")]):m[0]===`
`?" ":Re("br",[])),k=m.index+m[0].length}return k<v.length&&g.push(v.slice(k)),g},c=v=>{let g=[],$=1;for(let k=1;k<v.length;k++){if(v[k]==="\\"){k++;continue}if(v[k]==="|"){if(g.push(v.slice($,k).trim()),g.length>32)return g;$=k+1}}return $<v.length&&v.slice($).trim()&&g.push(v.slice($).trim()),g},u=v=>/^\|/.test(r[v]??"")&&/^\|/.test(r[v+1]??"")&&c(r[v+1]).length>0&&c(r[v+1]).length<=32&&i<2048&&c(r[v+1]).every(g=>/^:?-{3,}:?$/.test(g))&&c(r[v]).length===c(r[v+1]).length,f=v=>r[v]==="<details>"&&/^<summary>[^<>]*<\/summary>$/.test(r[v+1]??"")&&s.length<=8,p=v=>/^(?:#{1,6} | {4}|- |```)/.test(r[v])||f(v)||r[v]==="</details>"||u(v),h=0;for(;h<r.length;){let v=r[h],g=s.at(-1);if(!v.trim()){h++;continue}if(f(h)){let $=[Re("summary",d(r[h+1].slice(9,-10)))];g.push(Re("details",$)),s.push($),h+=2}else if(v==="</details>"&&s.length>1)s.pop(),h++;else if(/^ {4}/.test(v)){let $=[];for(;h<r.length&&(/^ {4}/.test(r[h])||!r[h].trim());)$.push(r[h].slice(4)),h++;for(;$.at(-1)==="";)$.pop();g.push(Re("pre",[Re("code",[$.join(`
`)])]))}else if(/^```/.test(v)){let $=[];for(h++;h<r.length&&!/^```\s*$/.test(r[h]);)$.push(r[h++]);h<r.length&&h++,g.push(Re("pre",[Re("code",[$.join(`
`)])]))}else if(/^#{1,6} /.test(v)){let $=/^(#{1,6}) (.*)$/.exec(v);g.push(Re(`h${$[1].length}`,d($[2]))),h++}else if(u(h)){let $=c(v),k=[];for(i+=$.length,h+=2;h<r.length&&/^\|/.test(r[h])&&i+$.length<=2048;){let m=c(r[h]);if(m.length!==$.length)break;h++,i+=$.length,k.push(Re("tr",$.map((w,y)=>Re("td",d(m[y]??"")))))}g.push(Re("table",[Re("thead",[Re("tr",$.map(m=>Re("th",d(m))))]),Re("tbody",k)]))}else if(/^- /.test(v)){let $=[];for(;h<r.length&&/^- /.test(r[h]);)$.push(Re("li",d(r[h++].slice(2))));g.push(Re("ul",$))}else{let $=[v];for(h++;h<r.length&&r[h].trim()&&!p(h);)$.push(r[h++]);g.push(Re("p",d($.join(`
`))))}}return{nodes:o,truncated:e.length>128e3||n.length>4096}}var cs={preview_skill_contrast:"Task preview",verify_contrast_runner:"Runner verification and task preview",run_skill_contrast:"Skill comparison",cancel_operation:"Comparison cancellation"},Hs=e=>e?.code==="task-tools-required";function ds(e,t){let n=N(null),r=N(null),o=N(t);o.current=t;let[s,l]=S(""),[i,d]=S(""),[c,u]=S(null),f=k=>r.current===k&&o.current===k.context&&n.current?.isConnected;function p(k,m,w="",y=null){if(!k||!f(k))return;let I=m==="failed"&&Hs(y);I&&d(`${w} Remove unsupported names and retry Preview. Leave the field empty for mock evals.`),u({ticket:k,outcome:m,message:w,invalidTools:I})}let{run:h,pending:v,error:g}=Ae(async(k,m)=>{let w=r.current?.name===k?r.current:null;try{let y=await e(k,m);if(w&&f(w)){let I=y?.cancelled||y?.discarded||y?.record?.stopped||k==="cancel_operation",T=y?.available===!1?y.message||"This operation is unavailable.":"";p(w,T?"failed":I?"cancelled":"ready",T,y)}return y}catch(y){throw p(w,"failed",y?.message??String(y),y),y}});Me(()=>()=>{r.current?.release(),r.current=null},[]),Me(()=>{r.current?.context!==t&&(r.current?.release(),r.current=null,d(""),l(""))},[t]),Me(()=>{if(!c||v)return;let{ticket:k,outcome:m,invalidTools:w}=c;if(!f(k))return;l(m==="ready"?k.name==="run_skill_contrast"?"Skill comparison results ready. Review Step 4.":"Task preview ready. Review the task prompt and checks.":k.name==="cancel_operation"?"Comparison cancellation requested. Review the current comparison status.":`${cs[k.name]} ${m}. ${m==="failed"?"Review the error and retry.":"Review the current comparison status."}`);let y=w?n.current.querySelector('[name="contrast-task-tools"]'):m==="ready"?n.current.querySelector(k.name==="run_skill_contrast"?"#contrast-result-heading":"#contrast-preview-heading"):null;k.keyboard&&k.ownsFocus&&m==="ready"&&!y||(k.keyboard&&k.ownsFocus&&(y??(k.trigger?.isConnected&&!k.trigger.disabled?k.trigger:null)??n.current.querySelector("#compare-heading"))?.focus(),k.release(),r.current=null)});function $(k,m,w={}){r.current?.release();let y=k?.currentTarget,I=y?.ownerDocument,T={name:m,context:t,trigger:y,keyboard:k?.detail===0&&I?.activeElement===y,ownsFocus:!0,release:()=>{}};if(T.keyboard){let A=()=>{T.ownsFocus=!1},P=z=>{z.target!==y&&z.target!==I.body&&A()};I.addEventListener("focusin",P),I.addEventListener("pointerdown",A),I.addEventListener("keydown",A),T.release=()=>{I.removeEventListener("focusin",P),I.removeEventListener("pointerdown",A),I.removeEventListener("keydown",A)}}return r.current=T,u(null),d(""),l(`${cs[m]} in progress.`),h(m,w)}return{pane:n,run:h,start:$,pending:v,error:g,status:s,fieldError:i,clearFieldError:()=>d("")}}function us(e){return e?a`<div class="per-case-cell-metrics">
    <div><strong>${`Outcome: ${e.outcome}`}</strong></div>
    ${e.evidenceDiagnostics.map(t=>a`<p class="evidence-notice" role="status">${t.message}</p>`)}
    <div>${`Duration: ${e.formattedDuration}`}</div>
    <div>${`Tokens: ${e.formattedTokens}`}</div>
    <div>${`Tools: ${e.formattedObservedTools}`}</div>
    <div>${`Skills: ${e.formattedObservedSkills}`}</div>
    ${e.turns!==null&&a`<div>${`Turns: ${e.formattedTurns}`}</div>`}
  </div>`:a`<span class="ck-muted">not reported</span>`}function ps(e,t){return e.length?a`<div class="report-table" tabindex="0" role="region" aria-label="Per-case comparison"><table>
    <caption>${t}</caption>
    <thead><tr><th scope="col">Test case</th><th scope="col">Original</th><th scope="col">Changed</th></tr></thead>
    <tbody>${e.map((n,r)=>a`<tr key=${`${n.id}-${r}`}>
      <th scope="row">${n.name}</th>
      <td>${us(n.original)}</td>
      <td>${us(n.changed)}</td>
    </tr>`)}</tbody>
  </table></div>`:null}function fs(e,t=0){let n=Tt(e.judgeUsage);return a`<li key=${`${e.id}-${t}`}>
    <strong>${e.name}</strong> <code>${e.kind}</code> · <span>${e.status}</span> · <span>${e.score!==null?`Score: ${e.score}`:"Score: not reported"}</span>
    <p class="case-grader-reason">${e.reason}</p>
    <p class="ck-muted case-grader-proves">${`What this check proves: ${e.proves}`}</p>
    ${n&&a`<p class="ck-muted case-grader-judge">${n}</p>`}
    ${e.children?.length>0&&a`<ul class="case-grader-children" aria-label=${`Nested checks for ${e.name}`}>
      ${e.children.map((r,o)=>fs(r,o))}
    </ul>`}
  </li>`}function Us(e,t=0){let n=Ye(e,t);return!n||!(n.durationMs!==null||n.totalTokens!==null||n.turns!==null||n.observedTools!==null||n.observedSkills!==null||n.judgeUsage!==null||n.graderOutcomes.length>0)&&!n.evidenceDiagnostics.length?null:a`<div class="saved-case-metrics">
    ${n.evidenceDiagnostics.map(o=>a`<p class="evidence-notice" role="status">${o.message}</p>`)}
    <p class="ck-muted">${`Duration: ${n.formattedDuration} \xB7 Tokens: ${n.formattedTokens}${n.turns!==null?` \xB7 Turns: ${n.formattedTurns}`:""} \xB7 Tools: ${n.formattedObservedTools} \xB7 Skills: ${n.formattedObservedSkills}`}</p>
    ${n.graderOutcomes.length>0&&a`<ul class="case-grader-list">${n.graderOutcomes.map((o,s)=>fs(o,s))}</ul>`}
  </div>`}function on({receipt:e,cases:t,runs:n,runDetails:r}){let o=d=>`${d>0?"+":""}${d}`,s=r??n,l=gt({receipt:e,cases:t},s),i=jt({receipt:e,cases:t},s);return a`<div class="comparison-summary">
    <p class="snapshot-notice"><strong>These differences don't prove one version is better.</strong> ${e.inference.statement}</p>
    ${i&&a`<p class="snapshot-notice low-confidence-notice" role="status"><strong>Limited evidence (one attempt per case):</strong> Single-run comparisons cannot separate real changes from run-to-run variation.</p>`}
    <h3>${e.axis.label}</h3>
    <div class="comparison-cards">${[["Original","baseline"],["Changed","treatment"]].map(([d,c])=>a`
      <section class="comparison-card" aria-label=${`${d} outcome`}>
        <h4>${d}</h4><code>${e.source[c].runId}</code>
        <p>${e.axis[`${c}Value`]}</p>
        <p class="comparison-score"><strong>${e.outcomes[c].passed} / ${e.outcomes[c].total}</strong> passed</p>
        <p>${e.outcomes[c].failed} failed · ${e.outcomes[c].errors} errors</p>
      </section>`)}</div>
    <div class="report-table" tabindex="0" role="region" aria-label="Outcome changes"><table>
      <caption>Changed minus Original</caption><thead><tr><th scope="col">Outcome</th><th scope="col">Change in cases</th></tr></thead>
      <tbody>${[["Passed","passed"],["Failed","failed"],["Errors","errors"]].map(([d,c])=>a`
        <tr><th scope="row">${d}</th><td>${o(e.outcomes.delta[c])}</td></tr>`)}</tbody>
    </table></div>
    ${ps(l,"Per-case outcomes and metrics (Original vs Changed)")}
    <h3>Cases that changed result</h3>
    <div class="comparison-transitions">${[["Fixed failures","fixedFailures"],["New failures","newFailures"],["Persistent failures","persistentFailures"],["Fixed errors","fixedErrors"],["New errors","newErrors"],["Persistent errors","persistentErrors"]].map(([d,c])=>a`<details><summary>${d}: ${e.outcomes.transitions[c].length}</summary>
      ${e.outcomes.transitions[c].length?a`<ul>${e.outcomes.transitions[c].map(u=>a`<li><code>${u}</code></li>`)}</ul>`:a`<p>No cases in this category.</p>`}</details>`)}</div>
    <div class="report-table" tabindex="0" role="region" aria-label="Recorded usage"><table>
      <caption>Recorded usage; missing values aren't zero</caption>
      <thead><tr><th scope="col">Metric</th><th scope="col">Original</th><th scope="col">Changed</th><th scope="col">Difference</th></tr></thead>
      <tbody>${[["Duration","duration"],["Tokens","tokens"],["Cost","cost"]].map(([d,c])=>{let u=e.metrics[c],f=p=>p?`${p.value} ${p.unit} (${p.basis}; ${p.source})`:"Unknown";return a`<tr><th scope="row">${d}</th><td>${f(u.baseline)}</td><td>${f(u.treatment)}</td>
          <td>${u.status==="comparable"?`${o(u.delta.value)} ${u.delta.unit}`:u.reason==="metadata-differs"?"Not comparable: measurement metadata differs":"Unknown: missing measurement"}</td></tr>`})}</tbody>
    </table></div>
    <h3>Interpretation and limits</h3><p>${e.advisory.rationale}</p><p>${e.advisory.userDecisionBoundary}</p>
    <ul>${e.limitations.map(d=>a`<li>${d}</li>`)}</ul>
  </div>`}function Fn({comparison:e,runs:t}){let n=e.runDetails??t,r=gt(e,n),o=jt(e,n),s=Array.isArray(n)&&e.original?.runId?n.find(i=>i?.id===e.original.runId):null,l=Array.isArray(n)&&e.changed?.runId?n.find(i=>i?.id===e.changed.runId):null;return a`<div class="comparison-summary">
    <h3>Side-by-side results</h3>
    ${o&&a`<p class="snapshot-notice low-confidence-notice" role="status"><strong>Limited evidence (one attempt per case):</strong> Single-run comparisons cannot separate real changes from run-to-run variation.</p>`}
    <div class="comparison-cards">${e.summary.runs.map((i,d)=>{let c=d===0?e.original:e.changed,u=d===0?s:l;return a`
      <section class="comparison-card" aria-label=${`${i.label} saved results`}>
        <h3>${i.label}</h3><p>Status: <strong>${i.status}</strong></p>
        <p class="comparison-score"><strong>${i.outcome}</strong></p>
        <h4>${i.label}'s tests (not matched)</h4>
        ${i.cases.length?a`<ul class="saved-comparison-cases">${i.cases.map((f,p)=>{let h=f.sourceName===void 0?f:{...f,name:f.sourceName},v=vt(h,c?.cases)??h,g=vt(v,u?.cases),$=g?{...g,...Object.fromEntries(Object.entries(v).filter(([,k])=>k!=null)),...Object.hasOwn(v,"judgeUsage")?{judgeUsage:v.judgeUsage}:{}}:v;return a`<li class="saved-comparison-case-item">
            <div class="saved-comparison-case-row"><span>${f.name}</span><strong>${f.outcome}</strong></div>
            ${Us({...$,evidenceDiagnostics:$t(v,g)},p)}
          </li>`})}</ul>`:a`<p>No saved tests.</p>`}
        ${i.omittedCases>0&&a`<p>${i.omittedCases} more tests. View details.</p>`}
      </section>`})}</div>
    ${ps(r,"Side-by-side per-case outcomes and metrics")}
    <p class="snapshot-notice">${e.summary.caveat}</p>
    <p>Counts cover saved tests only. Failed, cancelled or running runs may be incomplete.</p>
    <details class="comparison-source"><summary>Details</summary>
      <p><strong>Matched test comparison:</strong> ${e.strictEligibility.reason}</p>
      <p>${e.coverage}</p>
      <h3>Interpretation and limits</h3><ul>${e.limitations.map(i=>a`<li>${i}</li>`)}</ul>
      <h3>Full saved-results report</h3><pre tabindex="0">${e.text}</pre>
    </details>
  </div>`}function ln({state:e,invoke:t,compareCache:n,onOpenRun:r}){let o=e.runs.filter(j=>j.mode==="engine"),s=(e.assets??[]).filter(j=>j.kind==="skill"),l=(e.assets??[]).filter(j=>j.kind==="eval"),i=n?.current&&n.current.project===e.projectPath?n.current:null,d=j=>!!j&&o.some(b=>b.id===j),[c,u]=S(()=>d(i?.original)?i.original:""),[f,p]=S(()=>d(i?.changed)?i.changed:""),[h,v]=S(()=>i?.mode??""),[g,$]=S(()=>i?.savedOpen??!1),k=N(null),[m,w]=S(()=>i&&d(i.original)&&d(i.changed)?i.axis??"":""),[y,I]=S(()=>i?.intent??"general-comparison"),[T,A]=S(()=>i?.saved??{receiptId:"",status:""}),[P,z]=S(()=>i?.queriedPair??null),[C,se]=S(()=>i?.selectedReceipt??""),[ke,ae]=S(()=>i?.contrastSkillId??e.skillContrast?.record?.skill?.assetId??""),[pe,oe]=S(()=>i?.contrastEvalId??e.skillContrast?.record?.evaluation?.assetId??""),[$e,ie]=S(()=>i?.selectedContrastId??""),[R,J]=S(()=>i?.taskToolsText??""),[ee,re]=S(()=>i?.reviewedKey??""),[Q,M]=S(()=>i?.contrastAuth??"github"),ve=N(""),V=s.some(j=>j.id===ke)?ke:"",D=l.some(j=>j.id===pe)?pe:"",{pane:X,run:be,start:B,pending:Y,error:le,status:ce,fieldError:je,clearFieldError:Ne}=ds(t,JSON.stringify([e.projectPath,V,D,R,Q])),we=s.find(j=>j.id===V)??null,et=l.find(j=>j.id===D)??null,xe=[...new Set(R.split(",").map(j=>j.trim()).filter(Boolean))].sort((j,b)=>j.localeCompare(b)),he=e.skillContrastPreview?.skill?.assetId===V&&e.skillContrastPreview?.evaluation?.assetId===D&&JSON.stringify(e.skillContrastPreview?.taskTools??[])===JSON.stringify(xe)?e.skillContrastPreview:null,_e=he?.inputHash??"",de=!!_e&&ee===_e,Je=$e?(e.skillContrasts??[]).find(j=>j.record.id===$e)??null:null,q=e.skillContrast&&V&&D&&e.skillContrast.record?.skill?.assetId===V&&e.skillContrast.record?.evaluation?.assetId===D?e.skillContrast:null,te=Je??q,fe=e.operation?.kind==="skill-contrast"?e.operation:null,Ce=te?4:V&&D?3:V?2:1,K=e.comparison?.receipt,Se=e.comparison?.mode==="descriptive"?e.comparison:null,me=h==="strict"&&K?.source?.baseline?.runId===c&&K?.source?.treatment?.runId===f&&K?.axis?.key===m&&K?.decision?.intent===y,G=Se?h==="descriptive"&&Se.original.runId===c&&Se.changed.runId===f?Se:null:K?me?e.comparison:null:h==="strict"&&P?.original===c&&P?.changed===f?e.comparison:null,Ie=h==="strict"?G?.axes??(me&&K?.axis?[K.axis]:i?.mode==="strict"&&d(i.original)&&d(i.changed)&&i.original===c&&i.changed===f?i.axes??null:null):null,tt=T.receiptId===G?.receipt?.id?T.status:"",We=N(`${c}:${f}`),Ge=N(`${K?.id??""}:${m}:${y}`);U(()=>{e.readStatus==="ready"&&e.projectPath&&ve.current!==e.projectPath&&(ve.current=e.projectPath,be("list_skill_contrasts"))},[e.readStatus,e.projectPath]),U(()=>{let j=`${c}:${f}`;We.current!==j&&(We.current=j,w(""),A({receiptId:"",status:""}))},[c,f]),U(()=>{let j=`${K?.id??""}:${m}:${y}`;Ge.current!==j&&(Ge.current=j,A({receiptId:"",status:""}))},[K?.id,m,y]),U(()=>{if(!e.comparisonNavigation||(Se?.id??K?.id)!==e.comparisonNavigation)return;let j=Se?Se.original.runId:K.source.baseline.runId,b=Se?Se.changed.runId:K.source.treatment.runId;We.current=`${j}:${b}`,u(j),p(b),v(Se?"descriptive":"strict"),w(Se?"":K.axis.key),I(Se?"general-comparison":K.decision.intent),z(null),A({receiptId:"",status:""}),$(!0)},[e.comparisonNavigation]),U(()=>{g&&e.comparisonNavigation===(Se?.id??K?.id)&&k.current?.focus()},[g,e.comparisonNavigation]),U(()=>{n&&(n.current={project:e.projectPath,original:c,changed:f,mode:h,savedOpen:g,axis:m,axes:Ie,intent:y,saved:T,queriedPair:P,selectedReceipt:C,contrastSkillId:V,contrastEvalId:D,selectedContrastId:$e,taskToolsText:R,reviewedKey:ee,contrastAuth:Q})},[e.projectPath,c,f,h,g,m,Ie,y,T,P,C,V,D,$e,R,ee,Q]);let Ee={headingOffset:3,tablePrefix:"Skill comparison details",tableNumber:0};return a`<section class="studio-pane compare-pane" ref=${X} aria-labelledby="compare-heading">
    <p class="sr-only" role="status" aria-live="polite" aria-atomic="true">${ce}</p>
    <div class="studio-heading"><div><h2 id="compare-heading" tabindex="-1">Test a skill with & without</h2>
      <p>Run the same task with a skill included in the prepared inputs and with it left out, then compare the results.</p></div>
      ${(e.skillContrasts?.length??0)>0&&a`<label class="stack-label compact-history-select">Past runs
        <select class="ck-select" name="saved-skill-contrast" value=${te?.record?.id??""} onChange=${j=>{let b=j.target.value;ie(b);let x=(e.skillContrasts??[]).find(F=>F.record.id===b);x?(ae(x.record.skill.assetId),oe(x.record.evaluation.assetId)):b||(ae(""),oe(""),re(""))}}>
          <option value="">Choose a past run…</option>
          ${e.skillContrasts.map(j=>a`<option value=${j.record.id} key=${j.record.id}>${j.record.skill.name} · ${j.record.evaluation.name} (${Ue(j.record.updatedAt)})</option>`)}
        </select></label>`}
    </div>
    <ol class="compare-stepper" aria-label="Skill comparison steps">
      ${["What skill to test","What eval to run","Run with & without","See what changed"].map((j,b)=>{let x=b+1,F=x<Ce;return a`<li class=${`compare-step ${x===Ce?"active":F?"done":""}`} aria-current=${x===Ce?"step":void 0}>
          <span aria-hidden="true">${x}</span>${j}${F&&a`<small class="sr-only">Completed</small>`}</li>`})}
    </ol>
    ${fe&&a`<section class="run-progress" aria-label="Skill comparison progress">
      <p>Comparison ${fe.contrastId}: ${fe.phase}</p>
      ${fe.arm&&a`<p>Current condition: ${fe.arm}</p>`}
      <p>Included run: <code>${fe.armRunIds.included}</code></p>
      <p>Omitted run: <code>${fe.armRunIds.omitted}</code></p>
      ${(Oe(fe.phase)||fe.phase==="approval")&&a`<button class="ck-btn ck-btn-danger" disabled=${fe.phase==="stopping"}
        onClick=${j=>B(j,"cancel_operation")}>${fe.phase==="stopping"?"Stopping\u2026":"Stop this comparison"}</button>`}
      <${ye} error=${fe.error} />
    </section>`}
    <div class="compare-wizard">
      <section class=${`wizard-step-card ${Ce===1?"is-current":V?"is-complete":""}`} aria-label="Step 1: What skill do you want to test?">
        <div class="wizard-step-header"><span class="wizard-step-badge" aria-hidden="true">${V?"\u2713":"1"}</span>
          <div><h3>Step 1 · What skill do you want to test?</h3>
            <p class="ck-muted">Choose a project skill to include or leave out of the prepared inputs. Other ways the agent might find the skill aren't verified.</p></div></div>
        <label class="stack-label">Skill to test<select class="ck-select" name="contrast-skill" value=${V}
          disabled=${!!Y||Oe(e.operation?.phase)||e.operation?.phase==="approval"||!!e.operation?.approval} onChange=${j=>{let b=j.target.value;ie(""),re(""),ae(b),b||oe("")}}>
          <option value="">Choose a skill…</option>
          ${s.map(j=>a`<option value=${j.id} key=${j.id}>${j.name} · ${j.relativePath}</option>`)}
        </select></label>
      </section>
      ${V&&a`<section class=${`wizard-step-card ${Ce===2?"is-current":D?"is-complete":""}`} aria-label="Step 2: What eval do you want to run?">
        <div class="wizard-step-header"><span class="wizard-step-badge" aria-hidden="true">${D?"\u2713":"2"}</span>
          <div><h3>Step 2 · What eval do you want to run?</h3>
            <p class="ck-muted">Choose a saved eval task to run against "${we?.name??"this skill"}".</p></div></div>
        <label class="stack-label">Eval task to run<select class="ck-select" name="contrast-eval" value=${D}
          disabled=${!!Y||Oe(e.operation?.phase)||e.operation?.phase==="approval"||!!e.operation?.approval} onChange=${j=>{ie(""),re(""),oe(j.target.value)}}>
          <option value="">Choose a saved eval…</option>
          ${l.map(j=>a`<option value=${j.id} key=${j.id}>${j.name} · ${j.relativePath}</option>`)}
        </select></label>
      </section>`}
      ${V&&D&&a`<section class=${`wizard-step-card ${Ce===3?"is-current":te?"is-complete":""}`} aria-label="Step 3: Run with and without skill">
        <div class="wizard-step-header"><span class="wizard-step-badge" aria-hidden="true">${te?"\u2713":"3"}</span>
          <div><h3>Step 3 · Review the task & run with and without "${we?.name??"skill"}"</h3>
            <p class="ck-muted">Check that the task and scoring rules work with either input version, then run "${et?.name??"eval"}" with and without "${we?.name??"skill"}".</p></div></div>
        <div class="comparison-selectors">
          <label class="stack-label">Task tools (comma-separated; required for Copilot evals, empty for mock evals)
            <input class="ck-input" name="contrast-task-tools" autocomplete="off" spellcheck="false" value=${R}
              aria-invalid=${je?"true":void 0} aria-describedby=${je?"contrast-task-tools-error":void 0}
              placeholder="e.g. view, rg, glob" onInput=${j=>{Ne(),re(""),J(j.target.value)}} />
          </label>
          <label class="stack-label">Authentication
            <select class="ck-select" name="contrast-authentication" value=${Q} onChange=${j=>M(j.target.value)}>
              <option value="github">GitHub CLI sign-in${he?.evaluation?.executor==="mock"?" (not used for mock)":""}</option>
              <option value="configured">Token from environment variables</option>
            </select>
          </label>
        </div>
        ${je&&a`<p id="contrast-task-tools-error" class="studio-error">${je}</p>`}
        <div class="draft-actions">
          <button class="ck-btn" type="button" disabled=${!!Y||Oe(e.operation?.phase)||e.operation?.phase==="approval"||!!e.operation?.approval}
            onClick=${j=>B(j,"preview_skill_contrast",{skillId:V,evalId:D,...xe.length?{taskTools:xe}:{}})}>${Y==="preview_skill_contrast"?"Previewing\u2026":he?"Refresh task preview":"Preview task & checks"}</button>
        </div>
        ${he&&a`<div class="contrast-preview-box" role="region" aria-label="Reviewed skill comparison task">
          <h4 id="contrast-preview-heading" tabindex="-1">Task preview</h4>
          <p><strong>Task (${he.evaluation.caseName} · ${he.evaluation.executor}):</strong> ${he.evaluation.prompt}</p>
          <p class="ck-muted">Checks (${he.plan.inputs.checks.length}): ${he.plan.inputs.checks.map(j=>`${j.identity.id} (${j.role})`).join(", ")} · Skill SHA-256 ${he.skill.sourceHash.slice(0,12)}… · Eval SHA-256 ${he.evaluation.sourceHash.slice(0,12)}…</p>
          ${he.setupReason?a`<p class="studio-warning">${he.setupReason}</p>
            ${!e.runtime&&(he.setupAction==="verify-runner"||he.setupAction===void 0&&/Configure and verify a local evaluator/i.test(he.setupReason))&&a`<button class="ck-btn ck-btn-primary" type="button"
              disabled=${!e.trusted||!!Y||Oe(e.operation?.phase)||e.operation?.phase==="approval"||!!e.operation?.approval}
              onClick=${j=>B(j,"verify_contrast_runner",{skillId:V,evalId:D,...xe.length?{taskTools:xe}:{}})}>${Y==="verify_contrast_runner"?"Verifying runner\u2026":"Verify eval runner & refresh preview"}</button>`}`:a`
            <button class="ck-btn" type="button" aria-pressed=${de}
              onClick=${()=>re(de?"":_e)}>
              <${W} name=${de?"circle-check":"shield"} size=${15} />
              ${de?"Confirmed: task and checks don't favor either input version":"Confirm task and checks don't favor either input version"}
            </button>`}
        </div>`}
        <div class="draft-actions">
          <button class="ck-btn ck-btn-primary" disabled=${!e.trusted||!he||he.status!=="ready"||!de||!!Y||Oe(e.operation?.phase)||e.operation?.phase==="approval"||!!e.operation?.approval}
            onClick=${async j=>{ie("");let b=await B(j,"run_skill_contrast",{skillId:V,evalId:D,expectedSkillSourceHash:he.skill.sourceHash,expectedEvalSourceHash:he.evaluation.sourceHash,expectedInputHash:ee,neutrality:"reviewed-neutral",authentication:Q,...xe.length?{taskTools:xe}:{}});b?.record?.id&&ie(b.record.id)}}><${W} name="git-compare" size=${15} />${Y==="run_skill_contrast"?"Running with & without skill\u2026":te?"Run again with & without skill":"Run with & without skill"}</button>
          ${!e.trusted&&a`<${Et} state=${e} invoke=${t} compact />`}
        </div>
      </section>`}
      ${te&&a`<section class="wizard-step-card is-current skill-contrast-result" aria-label="Step 4: Results and what to pay attention to">
        <div class="wizard-step-header"><span class="wizard-step-badge" aria-hidden="true">4</span>
          <div><h3 id="contrast-result-heading" tabindex="-1">Step 4 · Results: what to pay attention to</h3>
            <p class="ck-muted">One attempt per input version for "${te.record.skill.name}" on "${te.record.evaluation.name}" (comparison basis: ${te.record.report?.basis??"unpaired-exploratory"}; other skill discovery: ${te.record.report?.discovery??"unverified"}).</p></div></div>
        <pre tabindex="0" role="region" aria-label="Skill comparison summary">${te.summary?.text??"Summary unavailable. Open Details to read the saved report."}</pre>
        <p>Comparison: <code>${te.record.id}</code></p>
        <p>Included run: <code>${te.record.armRunIds.included}</code>; omitted run: <code>${te.record.armRunIds.omitted}</code></p>
        <div class="contrast-arms-grid">
          ${[["included",`With skill (${te.record.skill.name})`,"Skill included in inputs"],["omitted","Without skill (Baseline)","Skill omitted from inputs"]].map(([j,b,x])=>{let F=te.record.evidence?.arms?.[j],ge=te.record.report?.arms?.[j]?.outcome??F?.observation?.run?.status??F?.state??"unstarted",Pe=te.record.report?.arms?.[j]?.runId??null,ze=ge==="passed"?"row-kind-success":["failed","errored","run-failed","cancelled"].includes(ge)?"row-kind-attention":"";return a`<div class="contrast-arm-card" key=${j}>
              <div class="contrast-arm-header"><strong>${b}</strong><span class=${`ck-badge ${ze}`.trim()}>${ge}</span></div>
              <p class="ck-muted">${x}</p>
              ${Pe&&r&&a`<button class="ck-btn ck-btn-sm" type="button" onClick=${()=>r(Pe)}><${W} name="arrow-up-right" size=${14} />Open in Results</button>`}
            </div>`})}
        </div>
        ${te.record.report?.limitations?.length>0&&a`<ul class="contrast-limitations ck-muted" aria-label="What this skill comparison can't tell you">
          ${te.record.report.limitations.slice(0,3).map((j,b)=>a`<li key=${b}>${j}</li>`)}
        </ul>`}
        <details class="comparison-source"><summary>Technical details & full comparison report</summary>
          <div class="report-preview comparison-preview" tabindex="0" role="region" aria-label="Full skill comparison report">
            ${an(te.text).nodes.map(j=>Tn(j,Ee))}
          </div>
          <pre tabindex="0">${te.text}</pre>
        </details>
      </section>`}
    </div>
    <details class="advanced-saved-compare compare-controls-card" open=${g}
      onToggle=${j=>$(j.currentTarget.open)}>
      <summary>Compare two existing saved runs</summary>
      <h3 id="saved-compare-heading" ref=${k} tabindex="-1">Compare saved results</h3>
      <p>Read existing saved outcomes without contacting AI, running evals or changing files. This is separate from the with-and-without skill experiment above.</p>
    <label class="stack-label">Comparison mode<select class="ck-select" name="comparison-mode" value=${h} onChange=${j=>{v(j.target.value),w(""),z(null),A({receiptId:"",status:""})}}>
      <option value="">Choose how to compare</option>
      <option value="descriptive">Side-by-side results</option>
      <option value="strict">Matched test comparison</option>
    </select></label>
    <div class="comparison-selectors">${[["Original",c,u],["Changed",f,p]].map(([j,b,x])=>a`
      <label class="stack-label">${j==="Original"?"First":"Second"} saved run<select class="ck-select" name=${`${j.toLowerCase()}-run`} value=${b} onChange=${F=>{x(F.target.value),w(""),z(null),A({receiptId:"",status:""})}}>
        <option value="">Choose a saved eval run</option>${o.map(F=>a`<option value=${F.id} key=${F.id}>${F.name} · ${F.status} · ${Ue(F.startedAt)} · ${F.id}</option>`)}</select></label>`)}</div>
    ${h==="descriptive"&&a`
      <button class="ck-btn ck-btn-primary" disabled=${!c||!f||c===f||!!Y}
        onClick=${()=>be("compare_runs",{original:c,changed:f,mode:h})}>Show side-by-side saved results</button>`}
    <div class="draft-actions">${h==="strict"&&a`<button class="ck-btn" disabled=${!c||!f||c===f||!!Y}
      onClick=${async()=>{await be("compare_runs",{original:c,changed:f,mode:h})&&z({original:c,changed:f})}}>Find what changed</button>`}
      <button class="ck-btn" disabled=${!!Y} onClick=${async()=>{await be("saved_comparisons")&&C&&await be("saved_comparisons",{id:C})}}>Open saved comparisons</button></div>
    ${Ie&&a`<label class="stack-label">Change to compare<select class="ck-select" name="comparison-change" value=${m} onChange=${j=>w(j.target.value)}>
      <option value="">Choose one recorded change</option>${Ie.map(j=>a`<option value=${j.key} key=${j.key}>${j.label}</option>`)}</select></label>`}
    ${h==="strict"&&a`<p>Tests, checks, runner and verified model must match, with one recorded change.
      If these runs cannot be matched, choose Side-by-side results to view each run separately.</p>
    <label class="stack-label">What do you want to decide?<select class="ck-select" name="comparison-intent" value=${y} onChange=${j=>I(j.target.value)}>
      <option value="general-comparison">Review observed differences</option><option value="test-original-customization-removal">Review evidence before keeping, updating or removing Original</option></select></label>
    <button class="ck-btn ck-btn-primary" disabled=${!m||!c||!f||c===f||!!Y} onClick=${()=>be("compare_runs",{original:c,changed:f,mode:h,axisKey:m,intent:y})}>Compare results</button>`}
    ${G?.mode==="descriptive"&&a`<section class="comparison-report">
      <${Fn} comparison=${G} runs=${o} />
    </section>`}
    ${G?.receipt&&a`<section class="comparison-report">
      <${on} receipt=${G.receipt} cases=${G.cases} runs=${o} runDetails=${G.runDetails} />
      <details class="comparison-source"><summary>Full comparison report</summary><pre tabindex="0">${G.text}</pre></details>
      <p>Save this comparison without changing the original run results. Saving does not run an eval.</p>
      <button class="ck-btn" disabled=${!e.trusted||tt==="saved"||!!Y}
        onClick=${async()=>{let j=G.receipt.id;await be("save_comparison",{id:j})&&A({receiptId:j,status:"saved"})}}>${tt==="saved"?"Comparison saved":"Save comparison"}</button></section>`}
    ${e.comparisons.length>0&&a`<label class="stack-label">Verified saved comparison<select class="ck-select" name="saved-comparison"
      disabled=${!!Y} value=${C} onChange=${async j=>{let b=j.target.value;se(b),b&&await be("saved_comparisons",{id:b})}}>
      <option value="">Choose a comparison</option>${e.comparisons.map(j=>a`<option value=${j.receipt.id} key=${j.receipt.id}>${j.receipt.axis.label} · ${Ue(j.receipt.generatedAt)}</option>`)}</select></label>
      ${e.comparisons.filter(j=>j.receipt.id===C).map(j=>a`
        <section aria-label="Saved comparison">
          ${!j.runDetails&&a`<p class="snapshot-notice">Case details are not loaded for this saved comparison.</p>`}
          <button class="ck-btn" disabled=${!!Y} onClick=${()=>be("saved_comparisons",{id:j.receipt.id})}>
            ${j.runDetails?"Reload comparison details":"Load comparison details"}</button>
          <${on} receipt=${j.receipt} cases=${j.cases} runs=${[]} runDetails=${j.runDetails} />
          <details><summary>Full saved comparison report</summary><pre tabindex="0">${j.text}</pre></details></section>`)}`}
    </details>
    <${ye} error=${fe?.error?"":le} />
  </section>`}function qn({state:e,invoke:t,target:n}){let[r,o]=S(n?.section??"project"),s=N(null);U(()=>{n&&o(n.section)},[n]),U(()=>{r==="advanced"&&globalThis.document?.activeElement?.getAttribute("role")!=="tab"&&s.current?.focus()},[r]);let l=[["project","Project","folder"],["ci","CI pipeline","git-compare"],["advanced","Advanced","settings"]];function i(y,I){if(!["ArrowLeft","ArrowRight","Home","End"].includes(y.key))return;y.preventDefault();let T=l.findIndex(([P])=>P===I),A=y.key==="Home"?0:y.key==="End"?2:(T+(y.key==="ArrowRight"?1:-1)+3)%3;o(l[A][0]),document.getElementById(`config-tab-${l[A][0]}`)?.focus()}let[d,c]=S({nodePath:e.runtime?.nodePath??"",evaluatorPath:"",copilotPath:e.runtime?.copilotPath??""}),[u,f]=S("auto"),[p,h]=S(""),{run:v,pending:g,error:$}=Ae(t),k=Oe(e.operation?.phase)||e.operation?.phase==="preparing"||e.operation?.phase==="approval"||!!e.operation?.approval,m=g==="install_evaluator"||e.operation?.runId==="install-runner"&&["preparing","running","stopping"].includes(e.operation?.phase),w=()=>({...u==="local:npm"?{scope:"local",manager:"npm"}:u==="local:pnpm"?{scope:"local",manager:"pnpm"}:u==="global:npm"?{scope:"global",manager:"npm"}:{},...d.copilotPath?{copilotPath:d.copilotPath}:{}});return a`<section class="studio-pane runner-pane configuration-pane" aria-labelledby="runner-heading">
    <div class="studio-heading"><div><h2 id="runner-heading">Settings</h2>
      <p>Choose where to keep evals and when to run them in CI.</p></div>
      <span class="ck-badge">${e.runtime?"Runner verified this session":"Automatic runner selection"}</span></div>
    <div class="config-nav"><div role="tablist" aria-label="Configuration area">
      ${l.map(([y,I,T])=>a`<button type="button" role="tab" id=${`config-tab-${y}`}
        aria-controls=${`config-panel-${y}`} aria-selected=${r===y} tabindex=${r===y?0:-1}
        onKeyDown=${A=>i(A,y)} onClick=${()=>o(y)}><${W} name=${T} size=${16} />${I}</button>`)}
    </div><span>Review changes before saving.</span></div>
    <div hidden=${r==="advanced"}><${ls} key=${e.projectPath} state=${e} invoke=${t} section=${r} onSection=${o} /></div>
    <div id="config-panel-advanced" role="tabpanel" aria-labelledby="config-tab-advanced" hidden=${r!=="advanced"} class="config-advanced">
    <section class="config-card runner-advanced"><header><div><h3 ref=${s} tabindex="-1">Runner tools</h3>
      <p>Tools are selected automatically. Choose a different installation if needed.</p></div><span class="ck-badge">${e.runtime?"Verified this session":"Not verified"}</span></header>
    <div class="config-card-body">
    <p>Review & run selects installed tools and checks them while preparing the eval. Your app asks about the exact run and costs before execution. Nothing is downloaded or installed.</p>
    <p>Override automatic selection with an existing installation you trust.</p>
    <form class="runner-form" onSubmit=${async y=>{y.preventDefault(),await v("configure_evaluator",d)}}>
      <label class="stack-label">Install mode
        <select class="ck-select" name="install-mode" value=${u} onChange=${y=>f(y.target.value)}>
          <option value="auto">Auto-detect project package manager</option>
          <option value="local:npm">Project dependency (npm)</option>
          <option value="local:pnpm">Project dependency (pnpm)</option>
          <option value="global:npm">Global installation (npm)</option>
        </select>
      </label>
      <div class="draft-actions">
        <button class="ck-btn" type="button" disabled=${!!g||k} onClick=${()=>v("detect_runner")}>Find installed tools</button>
        <button class="ck-btn" type="button" disabled=${!e.trusted||!!g||k} onClick=${()=>v("install_evaluator",w())}>Install eval runner</button>
        ${m&&a`<button class="ck-btn ck-btn-danger" type="button" disabled=${e.operation?.phase==="stopping"} onClick=${()=>t("cancel_operation",{})}>${e.operation?.phase==="stopping"?"Stopping\u2026":"Stop installation"}</button>`}
      </div>
      ${e.runnerCandidates&&a`<div class="runner-candidates">
        ${[["node","nodePath","Node"],["vally","evaluatorPath","Eval runner"],["copilot","copilotPath","Copilot"]].map(([y,I,T])=>a`<label class="stack-label">${T} candidates
          <select class="ck-select" name=${`${I}-installed`} value=${d[I]} onChange=${A=>c(P=>({...P,[I]:A.target.value}))}>
            <option value="">Choose an installed tool or enter a path below</option>${e.runnerCandidates[y]?.candidates.map(A=>a`
              <option value=${A.path} key=${A.path}>${A.path} · ${A.version??"Unverified"}</option>`)}</select>
          ${!e.runnerCandidates[y]?.candidates.length&&a`<span class="ck-muted">No installation found. You can enter its path below.</span>`}</label>`)}
        ${e.runnerCandidates.problems?.map((y,I)=>a`<p class="ck-muted" key=${I}>${y}</p>`)}</div>`}
      ${[["nodePath","Node program","C:\\Program Files\\nodejs\\node.exe"],["evaluatorPath","Eval runner folder or CLI file","Full path to the installed @microsoft/vally-cli"],["copilotPath","Copilot CLI program (optional for mock evals)","Full path to the Copilot CLI program"]].map(([y,I,T])=>a`<label class="stack-label" key=${y}>${I}
        <input class="ck-input" name=${y} autocomplete="off" value=${d[y]} spellcheck="false" placeholder=${T}
          onInput=${A=>c(P=>({...P,[y]:A.target.value}))} /></label>`)}
      <div class="effect-notice"><strong>What happens next</strong><p>Starts the tools you selected to check their versions and installation details.
        This doesn't run evals, contact AI, start tool servers or install anything. Only choose programs you trust.</p></div>
      <p>Your app asks for approval before starting these checks.</p>
      <button class="ck-btn ck-btn-primary" type="submit" disabled=${!e.trusted||!!g||!d.nodePath||!d.evaluatorPath}>
        ${g?"Verifying\u2026":"Verify selected runner"}</button>
      <${ye} error=${$} />
    </form></div></section>
    ${e.runtime&&a`<dl class="runner-details"><dt>Node</dt><dd>${e.runtime.nodePath}</dd>
      <dt>Evaluator</dt><dd>${e.runtime.cliPath}</dd><dt>Version</dt><dd>${e.runtime.version}</dd>
      ${e.runtime.copilotPath&&a`<dt>Copilot</dt><dd>${e.runtime.copilotPath}</dd>`}</dl>`}
    <details class="troubleshooting config-card"><summary>Runner problems and run locks</summary>
      <p>A setup error doesn't mean the eval failed. Check full paths, supported versions and workspace trust. Check who owns a run lock before removing it.</p>
      <button class="ck-btn" disabled=${!!g} onClick=${()=>v("diagnose_lock")}>Diagnose run lock</button>
      ${e.lock&&a`<pre tabindex="0">${JSON.stringify(e.lock,null,2)}</pre>
        ${e.lock.state==="retained"&&a`<label class="stack-label">Confirm the saved lock ID
          <input class="ck-input" name="lock-identity" autocomplete="off" spellcheck="false" placeholder="Paste the full 64-character lock ID" onInput=${y=>h(y.target.value)} />
          <button class="ck-btn ck-btn-danger" disabled=${!e.trusted||!!g||p!==e.lock.identity}
            onClick=${()=>v("recover_lock",{identity:p})}>Recover this retained lock</button></label>`}`}
    </details>
    </div>
  </section>`}function zn({state:e,invoke:t,onDefinitions:n,onOpenRun:r}){let{run:o,pending:s,error:l}=Ae(t),[i,d]=S("github"),[c,u]=S([]),[f,p]=S(""),[h,v]=S(""),g=e.operation,$=g.approval&&!g.approval.contrastId?g.approval:null,k=N(null);U(()=>{k.current?.focus()},[$?.id]);let m=["completed","failed","cancelled","cleanup-error"].includes(g.phase),w=e.assets.filter(C=>`${C.name} ${C.relativePath}`.toLowerCase().includes(f.toLowerCase())).slice(0,100),y=e.assets.filter(C=>c.includes(C.id)),I=y.find(C=>C.kind==="eval"),T=e.assets.filter(C=>C.kind==="eval"),A=T.find(C=>C.id===h);U(()=>{h&&!T.some(C=>C.id===h)&&v("")},[e.assets,h]);let P=Oe(g.phase)||g.phase==="approval"||!!g.approval,z=e.trusted&&!P&&!s;return a`<section class="studio-pane activity-pane" aria-labelledby="activity-heading">
    <div class="studio-heading"><div><h2 id="activity-heading">Run your evals</h2>
      <p>Choose an eval, review what it will do, and approve it to start. Follow progress and open the saved results here.</p></div>
      <span class=${`phase-badge phase-${g.phase}`} role="status">${g.phase}</span></div>
    <section class="eval-run-picker" aria-label="Choose an eval to run">
      <div class="eval-run-row">
        <label class="stack-label">Choose an eval<select class="ck-select" name="eval-to-run" value=${h}
          disabled=${P||!!s} onChange=${C=>v(C.target.value)}>
          <option value="">Select a saved eval</option>
          ${T.map(C=>a`<option value=${C.id} key=${C.id}>${C.name} · ${C.relativePath}</option>`)}
        </select></label>
        <button class="ck-btn ck-btn-primary" disabled=${!z||!A}
          onClick=${()=>o("review_and_run",{id:A.id,authentication:i})}><${W} name="play" size=${15} />${s==="review_and_run"?"Waiting for your app\u2026":"Review & run"}</button>
      </div>
      <label class="stack-label">Authentication<select class="ck-select" name="authentication" value=${i} disabled=${Oe(g.phase)||$?.hostPending||!!s} onChange=${C=>d(C.target.value)}>
        <option value="github">GitHub CLI sign-in (when the model or grader needs it)</option><option value="configured">Token from environment variables</option></select></label>
      <p class="ck-muted">${e.trusted?"Review & run starts installed runner checks and prepares this eval. Your app asks once about the exact run, tools and costs before execution. Nothing is installed.":"Trust this folder to prepare a run. You'll review and approve its effects before it starts."}</p>
      ${!T.length&&a`<p>No saved evals found. Create and save an eval first.</p>
        <button class="ck-btn" onClick=${n}>Browse evals</button>`}
    </section>
    <details class="project-checks"><summary>Select files to check or evals to run</summary>
      <p>Select up to 32 files to check for file and link problems. Evals run one at a time, with your approval before each run.</p>
      <label class="stack-label">Find files to check<input class="ck-input" name="check-query" autocomplete="off" value=${f} onInput=${C=>p(C.target.value)} /></label>
      <div class="check-targets">${w.map(C=>a`<label class="approval-check" key=${C.id}>
        <input type="checkbox" checked=${c.includes(C.id)} disabled=${!c.includes(C.id)&&c.length>=32}
          onChange=${se=>u(ke=>se.target.checked?[...ke,C.id]:ke.filter(ae=>ae!==C.id))} />
        <span>${C.name} · ${C.kind}<small>${C.relativePath}</small></span></label>`)}</div>
      ${!e.assets.length&&e.discovery?.status==="ready"&&a`<${bt} projectPath=${e.projectPath} invoke=${t} />`}
      ${w.length===100&&a`<p>Showing the first 100 matches. Narrow your search to find other files.</p>`}
      <p>${y.length}/32 selected · ${y.filter(C=>C.kind==="eval").length} evals queued</p>
      <div class="draft-actions"><button class="ck-btn" disabled=${!z||!y.length}
        onClick=${()=>o("run_health",{ids:y.map(C=>C.id)})}>Check selected files & links</button>
        <button class="ck-btn ck-btn-primary" disabled=${!z||!I}
          onClick=${async()=>{await o("review_and_run",{id:I.id,authentication:i})&&u(se=>se.filter(ke=>ke!==I.id))}}>Review next eval</button>
        <button class="ck-btn" disabled=${!c.length||!!s} onClick=${()=>u([])}>Clear check selection</button></div>
    </details>
    ${$?a`<section class="run-approval" aria-labelledby="approval-heading">
      <h3 id="approval-heading" ref=${k} tabindex="-1">Run summary</h3><p>${$.message}</p>
      <div class="run-summary-text" role="region" aria-label="Run scope and historical cost">${$.displayDetail??$.detail}</div>
      <details><summary>Full model, input, tool and permission details</summary><pre tabindex="0">${$.detail}${`

`}${$.fullDetails}</pre></details>
      <p>${$.cases} cases · ${$.executor} · Saved run ${g.record?.id}</p>
      <p>${$.hostPending?"Review and approve this run in your app's confirmation prompt. Nothing executes until you accept.":"Your app will ask you to approve this exact run and its costs."}</p>
      <div class="draft-actions">${!$.hostPending&&a`<button class="ck-btn ck-btn-primary" disabled=${!e.trusted||!!s}
        onClick=${()=>o("execute_run",{approvalId:$.id,authentication:i})}>Review run approval</button>`}
        <button class="ck-btn" disabled=${s==="cancel_operation"} onClick=${()=>o("cancel_operation")}>Cancel approval</button></div>
    </section>`:Oe(g.phase)?a`<section class="run-progress"><h3>${g.record?.name??"Current action"}</h3>
      <progress max=${g.total||1} value=${g.completed??0} aria-label="Completed targets"></progress>
      <p role="status">${g.completed??0}/${g.total??0} completed · ${g.phase}</p>
      <button class="ck-btn ck-btn-danger" disabled=${g.phase==="stopping"} onClick=${()=>o("cancel_operation")}>${g.phase==="stopping"?"Stopping\u2026":"Stop this run"}</button></section>`:a`<div class="empty-studio"><${W} name=${m?g.phase==="completed"?"circle-check":"triangle-alert":"play"} size=${32} /><h3>${m?"Run finished. See how it went.":"Ready to run an eval?"}</h3>
        <p>${m?"A finished run can still contain failed responses or errors. Open the report to see each outcome.":"Choose an eval and review it before starting. Opening this page doesn't start a run."}</p>
        <div class="empty-studio-actions">
          ${m&&g.record?.id&&r&&a`<button class="ck-btn ck-btn-primary" onClick=${()=>r(g.record.id)}><${W} name="arrow-up-right" size=${15} />Open in Results</button>`}
          <button class="ck-btn" onClick=${n}>Choose an eval</button>
        </div></div>`}
    ${g.record&&a`<div class="run-identity"><strong>${g.record.name??g.record.id}</strong>
      <code>${g.record.id}</code><span>${g.record.status}</span></div>
      <div class="evidence-actions">${["report","trajectory","output","source"].map(C=>a`
        <button class="ck-btn" disabled=${!!s} onClick=${()=>o("read_evidence",{id:g.record.id,kind:C})}>${C==="source"?"Report source":C==="trajectory"?"Conversation trace":C[0].toUpperCase()+C.slice(1)}</button>`)}
        ${m&&g.record?.id&&r&&a`<button class="ck-btn ck-btn-primary" disabled=${!!s} onClick=${()=>r(g.record.id)}>Open in Results</button>`}
        ${m&&a`<button class="ck-btn" disabled=${!!s} onClick=${()=>o("refresh")}>Refresh saved history</button>`}</div>`}
    ${g.output&&a`<details open class="live-output"><summary>Run output</summary><p class="ck-muted">Shows recent output only. Recognized secrets are hidden; check for other private information before sharing.</p><pre tabindex="0">${g.output}</pre></details>`}
    ${e.evidence&&a`<section class="saved-evidence"><h3>${e.evidence.title} · ${e.evidence.kind}</h3><pre tabindex="0">${e.evidence.text}</pre></section>`}
    <${ye} error=${l||g.error} />
  </section>`}function Hn({state:e,asset:t,invoke:n,onClose:r,onPrepared:o}){let[s,l]=S(""),[i,d]=S(""),[c,u]=S(""),[f,p]=S({tool:"",scope:"",expectedToolOutput:"",args:"{}"}),[h,v]=S(""),{run:g,pending:$,error:k}=Ae(n),m=N(null);return U(()=>{m.current?.focus()},[]),a`<section class="studio-pane behavior-pane" aria-labelledby="behavior-heading">
    <div class="studio-heading"><h2 id="behavior-heading" ref=${m} tabindex="-1">Prepare exact-output baseline: ${t.name}</h2><button class="ck-btn" onClick=${r}>Back to project files</button></div>
    <p>Prepare a baseline with an exact-response check for this ${t.kind}. This is separate from Create's editable drafts. You'll review any AI or tool use before running it.</p>
    <form class="baseline-form" onSubmit=${async w=>{w.preventDefault();let y;v("");try{y=JSON.parse(f.args)}catch{v("Tool arguments must be a valid JSON object. Check quotes, commas and brackets.");return}let I={task:s,expected:{kind:"output-exact",text:i},...c.trim()?{model:c.trim()}:{},...t.kind==="mcp-server"?{mcp:{operation:"read-only",tool:f.tool,scope:f.scope,expectedToolOutput:f.expectedToolOutput,args:y}}:{}};await g("prepare_baseline",{id:t.id,scenario:I})&&o()}}>
      <label class="stack-label">Realistic task<textarea class="ck-textarea" name="task" autocomplete="off" rows="5" maxLength="8000" value=${s} onInput=${w=>l(w.target.value)}></textarea></label>
      <label class="stack-label">Exact expected response<textarea class="ck-textarea" name="expected-response" autocomplete="off" rows="3" maxLength="2000" value=${i} onInput=${w=>d(w.target.value)}></textarea></label>
      <label class="stack-label">Model (optional: runner default)<input class="ck-input" name="model" autocomplete="off" spellcheck="false" value=${c} onInput=${w=>u(w.target.value)} placeholder="Supported model ID" /></label>
      ${t.kind==="mcp-server"&&a`<fieldset><legend>Approved read-only local fixture MCP action</legend>
        ${[["tool","Exact tool name"],["scope","Operation scope"],["expectedToolOutput","Expected observable tool output"],["args","String-valued tool arguments (JSON object)"]].map(([w,y])=>a`
          <label class="stack-label">${y}<input class="ck-input" name=${w} autocomplete="off" spellcheck="false" value=${f[w]} onInput=${I=>p(T=>({...T,[w]:I.target.value}))} /></label>`)}
        <p>Only local fixture servers that use stdio are supported. Remote servers, package installs, secrets and unclear settings are blocked.</p></fieldset>`}
      <p>Your app asks before creating eval inputs and checking their format. This doesn't approve AI requests or tool server use.</p>
      <button class="ck-btn ck-btn-primary" type="submit" disabled=${!e.trusted||!s.trim()||!i.trim()||!!$}>Prepare eval for review</button>
      <${ye} error=${h||k} />
    </form>
  </section>`}function Wn({state:e,invoke:t,source:n,uri:r}){let{run:o,pending:s,error:l}=Ae(t);return a`<div class="problem-help"><button class="ck-btn" disabled=${!e.trusted||!!s}
    onClick=${()=>o("request_diagnostic_fix",{source:n,...r?{uri:r}:{}})}>
    ${s?"Requesting help\u2026":"Ask Copilot to fix this"}</button>
    <${Et} state=${e} invoke=${t} compact />
    <${ye} error=${l} /></div>`}function ms({state:e,invoke:t,activeView:n,onAuthor:r,onSetup:o,onActivity:s}){let{run:l,pending:i,error:d}=Ae(t),c=e.operation.approval&&!e.operation.approval.contrastId?e.operation.approval:null;return a`
    <div class="workflow-bar">
      <div class="workflow-main">
      <div class="workflow-shortcuts">
        ${Oe(e.operation.phase)||c?a`
          <button class="ck-btn operation-shortcut" onClick=${s}><${W} name="play" size=${14} />${e.operation.phase==="approval"?"Review run approval":`${e.operation.phase} \xB7 ${e.operation.completed}/${e.operation.total}`}</button>`:null}
        <${Et} state=${e} invoke=${t} />
        ${(e.issues.length>0||e.historyError)&&a`<button class="ck-btn" disabled=${!e.trusted||!!i}
          title="Send the current folder's problems to Copilot for help. Review and approve the request first."
          onClick=${()=>l("request_diagnostic_fix")}><${W} name="wand-sparkles" size=${15} />Ask Copilot</button>`}
        ${n!=="author"&&a`<button class="ck-btn ck-btn-primary" onClick=${r}><${W} name="sparkles" size=${15} />Create eval</button>`}
        <button class="ck-btn ck-btn-icon" id="btn-setup" type="button" aria-label="Settings" title="Settings"
          aria-pressed=${n==="setup"} aria-current=${n==="setup"?"page":void 0} onClick=${o}><${W} name="settings" size=${15} /></button>
      </div>
      </div>
      <${ye} error=${d} />
    </div>`}function vs({state:e,invoke:t,onActivity:n,onAuthor:r,onBaseline:o,assetId:s=e.selectedAssetId}){let{run:l,pending:i,error:d}=Ae(t),c=e.assets.find(p=>p.id===s),u=e.trusted&&!Oe(e.operation.phase)&&!e.operation.approval&&e.graderTestPhase==="idle";if(!c)return null;let f=a`
    ${["eval","skill"].includes(c.kind)&&a`<button class="ck-btn" disabled=${!u||!!i}
      title="Validate the file format without running the eval."
      onClick=${()=>l("validate_asset",{id:c.id})}><${W} name="check" size=${14} />Check file format</button>`}
    <button class="ck-btn" disabled=${!e.trusted||!!i||Oe(e.operation.phase)}
      title="Check file structure and links, not the eval's task or model behavior."
      onClick=${async()=>{await l("run_health",{ids:[c.id]})&&n()}}><${W} name="shield-check" size=${14} />Run file & link checks</button>`;return a`<div class="selected-asset-bar">
    <div class="selected-tools" role="group" aria-label="Selected file actions">
      <span class="selected-file-label ck-muted">${c.name}</span>
      ${c.kind==="eval"&&a`<button class="ck-btn ck-btn-primary" disabled=${!u||!!i}
        onClick=${async()=>{n(),await l("review_and_run",{id:c.id})}}><${W} name="play" size=${14} />Review & run</button>`}
      ${c.kind!=="eval"&&a`${f}
        <button class="ck-btn ck-btn-primary" disabled=${!1} onClick=${r}><${W} name="sparkles" size=${14} />Create eval for this file</button>`}
      ${["skill","agent","mcp-server"].includes(c.kind)&&a`<button class="ck-btn" disabled=${!u||!!i}
        onClick=${()=>o(c)}>Prepare exact-output baseline</button>`}
    </div>
    ${c.kind==="eval"&&a`
      <p>Review & run starts installed runner checks and prepares this eval. Your app asks once about the exact run, tools and costs before execution. Nothing is installed.</p>
      <details class="selected-checks" key=${c.id}><summary>More checks</summary>
        <p>Check file format validates the definition. File & link checks inspect structure and links, without testing model behavior.</p>
        <div class="selected-tools">${f}</div>
        <p>Graders score the answers from an eval. Test graders checks those scoring rules against reference answers or saved trajectories; it may run scripts or use paid models.</p>
        <${Gr} key=${c.id} state=${e} item=${c} invoke=${t} />
      </details>`}
    ${e.validation&&a`<details class="validation-result"><summary>Format check: ${e.validation.status}</summary>
      <p>A format check doesn't show whether this eval can run or pass. Running needs separate compatibility checks and approval.</p>
      <pre tabindex="0">${e.validation.diagnosticText}</pre>
      ${e.validation.compatibility&&a`<p>Runner compatibility (separate from the format check): ${e.validation.compatibility.status}</p>
        <pre tabindex="0">${e.validation.compatibility.diagnostics.join(`
`)}</pre>`}</details>`}
    <${ye} error=${d} />
  </div>`}var hs=(e,t)=>{let n=String(e??"").trim().replaceAll("\\","/").replace(/^\.\/+/,""),r=t?`${t}/`:"";return r&&n.startsWith(r)?n.slice(r.length):n},Un=(e,t,n)=>e.length===t.length&&e.every((r,o)=>hs(r.relativePath,n)===hs(t[o]?.relativePath,n)&&(r.kind??"eval")===(t[o]?.kind??"eval")&&r.content===t[o]?.content);function gs({state:e,invoke:t,onActivity:n,onSetup:r,draftCache:o}){let s=e.draft.epoch??"",l=e.draft.request?.outputDirectory??e.draft.handoff?.outputDirectory,i=o.current?.project===e.projectPath&&e.completedConversationRequestId===o.current?.completedConversationRequestId&&((o.current?.epoch??"")===s||o.current.dirty)?o.current:null,d=!i||(i.epoch??"")===s,c=d&&!!i?.dirty&&i.revision<e.draft.revision&&(i.outputDirectory??"")===(e.draft.outputDirectory??"")&&Un(i.files,e.draft.files,l),u=e.assets?.find(_=>_.id===e.selectedAssetId),[f,p]=S(()=>i?i.dirty&&!c||i.revision>=e.draft.revision?i.files:e.draft.files:e.draft.files.length?e.draft.files:[{relativePath:"new.eval.yaml",kind:"eval",content:It("New evaluation")}]),[h,v]=S(()=>i&&(i.dirty&&!c||i.revision>=e.draft.revision)?i.outputDirectory??"":e.draft.outputDirectory??""),[g,$]=S(0),[k,m]=S(i?i.dirty&&!c:!1),[w,y]=S(!!i?.dirty&&!c&&(!d||i.revision<e.draft.revision)),[I,T]=S(i?.message??""),[A,P]=S(null),[z,C]=S(!1),[se,ke]=S(!0),[ae,pe]=S(!1),[oe,$e]=S(!1),ie=N(0),R=N(""),[J,ee]=S(i?.guided??{name:u?`${u.name} eval`:"New eval",task:"",expected:""}),[re,Q]=S(!1),[M,ve]=S(!1),[V,D]=S(c?"":i?.syncIssue??""),X=N(null),be=N(!0),B=N(null),Y=N(null),le=N(0),ce=N(i?i.epoch??"":s),je=N(e.completedConversationRequestId),Ne=N(s);Ne.current=s;let we=N(i&&!c&&(i.dirty||i.revision>e.draft.revision)?i.revision:e.draft.revision),et=N(!!e.draft.handoff);et.current=!!e.draft.handoff;let xe=N(!1),he=N(null),_e=N({count:e.chat.messages.length,status:e.chat.status}),de=N(null),Je=N(null),q=N({review:!1,files:f.length}),te=N(!1),fe=N(!1),{run:Ce,pending:K,error:Se}=Ae(t);U(()=>(be.current=!0,()=>{be.current=!1}),[]),Me(()=>{(typeof document<"u"?document.activeElement:null)?.closest?.('[role="tablist"][aria-label="Workspace views"]')||B.current?.focus()},[]),Me(()=>{q.current.review&&!z&&(te.current=!0),q.current.files&&!f.length&&(fe.current=!0),q.current={review:z,files:f.length};let E=(fe.current?[Je.current]:te.current?[de.current,Y.current,Je.current]:[]).find(O=>O?.isConnected&&!O.disabled);E&&(E.focus(),te.current=!1,fe.current=!1)},[z,f.length,K]),U(()=>{o.current={project:e.projectPath,epoch:ce.current,files:f,outputDirectory:h,dirty:k,guided:J,message:I,syncIssue:V,revision:we.current,completedConversationRequestId:e.completedConversationRequestId}},[f,h,k,J,I,V,K,e.projectPath,s]),U(()=>pe(!1),[f,e.draft.revision,s]),U(()=>P(null),[e.projectPath,s]),U(()=>Q(!1),[f,w,e.selectedAssetId]),U(()=>{if(s!==ce.current){if(k&&(h!==(e.draft.outputDirectory??"")||!Un(f,e.draft.files,l))){y(!0),C(!1);return}ce.current=s,we.current=e.draft.revision,p(e.draft.files.length?e.draft.files:[{relativePath:"new.eval.yaml",kind:"eval",content:It("New evaluation")}]),v(e.draft.outputDirectory??""),$(0),m(!1),y(!1),D(""),C(!1),e.completedConversationRequestId!==je.current&&(je.current=e.completedConversationRequestId,le.current=0,T(""),ee({name:u?`${u.name} eval`:"New eval",task:"",expected:""}));return}if(!(e.draft.revision<=we.current)&&!xe.current){if(k&&(h!==(e.draft.outputDirectory??"")||!Un(f,e.draft.files,l))){y(!0);return}we.current=e.draft.revision,p(e.draft.files),$(0),m(!1),y(!1),D(""),v(e.draft.outputDirectory??"")}},[e.draft.revision,s,K,l]),U(()=>{(_e.current.count!==e.chat.messages.length||_e.current.status!==e.chat.status)&&(he.current?.scrollIntoView({block:"nearest"}),_e.current={count:e.chat.messages.length,status:e.chat.status})},[e.chat.messages.length,e.chat.status]),U(()=>{e.draft.proposal||(C(!1),$e(!1))},[e.draft.proposal]);function me(_,E){De||(le.current++,m(!0),pe(!1),C(!1),D(""),p(O=>O.map((L,ue)=>ue===_?{...L,...E}:L)))}async function G(_=!1){if(X.current)return X.current;if(D(""),!f.length&&!e.draft.files.length)return m(!1),y(!1),{files:0};if(!f.length&&(e.draft.request||e.draft.handoff))return null;_&&(ce.current=s);let E=le.current,O=ce.current;xe.current=!0;let L=_?e.draft.revision:we.current,ue=_?s:O,H=(async()=>{try{let Z=await Ce(f.length?"update_draft":"clear_draft",{...f.length?{files:f,...h||e.draft.outputDirectory!==void 0?{outputDirectory:h}:{}}:{},expectedRevision:L,...ue?{expectedEpoch:ue}:{}});return ce.current!==O||Z?.epoch!==void 0&&O&&Z.epoch!==O?null:Ne.current!==O&&Z?.epoch!==Ne.current?(y(!0),null):Z?(Z.epoch!==void 0&&(ce.current=Z.epoch),we.current=Z.revision??e.draft.revision,y(!1),le.current===E&&m(!1),le.current===E?Z:null):(be.current&&D("Couldn't sync the draft, or syncing was cancelled. Your edits are kept. Choose Retry sync before checking or sending."),null)}finally{xe.current=!1,X.current=null}})();return X.current=H,H}async function Ie(){let _=le.current;(k||!e.draft.files.length)&&!await G()||le.current===_&&await Ce("validate_draft")}async function tt(){k&&!await G()||await Ce("retry_draft")}async function We(){if(e.draft.handoff||et.current)return!1;let _=o.current?.files??f,E=ce.current;xe.current="retargeting",m(!0);try{let O=await Ce("clear_draft",{expectedRevision:we.current,...E?{expectedEpoch:E}:{}});if(!O||ce.current!==E||Ne.current!==E&&O.epoch!==Ne.current||O.epoch!==void 0&&E&&O.epoch!==E)return!1;O.epoch!==void 0&&(ce.current=O.epoch),we.current=O.revision??e.draft.revision;let L=o.current?.files??_;if(L.length){let ue=le.current,H=ce.current;xe.current=!0;let Z=await Ce("update_draft",{files:L,...h?{outputDirectory:h}:{},expectedRevision:we.current,...H?{expectedEpoch:H}:{}});if(!Z||ce.current!==H||Ne.current!==H&&Z.epoch!==Ne.current||Z.epoch!==void 0&&H&&Z.epoch!==H)return!1;Z.epoch!==void 0&&(ce.current=Z.epoch),we.current=Z.revision??e.draft.revision,le.current===ue&&(m(!1),y(!1))}else m(!1),y(!1);return D(""),!0}finally{xe.current=!1}}function Ge(_){if(_.key==="Escape"){_.preventDefault(),[de.current,Je.current,B.current].find(ue=>ue&&!ue.disabled)?.focus();return}if(_.key!=="Tab"||_.shiftKey||De)return;_.preventDefault();let{selectionStart:E,selectionEnd:O}=_.target,L=`${f[g].content.slice(0,E)}  ${f[g].content.slice(O)}`;me(g,{content:L}),requestAnimationFrame(()=>{Y.current.selectionStart=Y.current.selectionEnd=E+2})}let Ee=f[g],j=e.trusted&&!Oe(e.operation.phase)&&!e.operation.approval&&(!e.graderTestPhase||e.graderTestPhase==="idle"),b=e.detail?.type==="asset"?e.detail:null,x=b?.kind==="eval"&&(b.sourceUnchanged!==!0||b.stale)?"This preview is shortened, changed, or out of date. Read the full original through an approved reader before replacing the draft, or settings could be lost.":"",F=e.assets??[],ge=F.filter(_=>_.kind!=="eval"),Pe=F.filter(_=>_.kind==="eval"),ze=(e.draft.handoff?.targetAsset??F.find(_=>_.id===e.selectedAssetId))?.kind==="eval"?"improve":"create",yt=!!(e.draft.saving||e.draft.closed||e.draft.request?.stateUnavailable||e.draft.request?.recoveryRequired),at=!!(e.draft.saveAttempted||e.draft.saveOutcome&&!e.draft.saveOutcome.complete),De=!!(yt||at||e.draft.conversation),Qe=!K&&!De&&!e.draft.handoff,dn=f.length===1&&!le.current&&f[0].relativePath==="new.eval.yaml"&&f[0].kind==="eval"&&f[0].content===It("New evaluation"),pt=!!e.draft.request,kt=!!e.draft.handoff;U(()=>{if(!k||K||w||De||V||!f.length&&(pt||kt))return;let _=setTimeout(()=>{G()},250);return()=>clearTimeout(_)},[f,h,k,K,w,De,V,pt,kt]);let rt=e.draft.conversation?"This Canvas preview is read-only.":yt?"Wait for the original save, or recover it using the same request and proposed files.":w?"Resolve the shared draft conflict before continuing.":e.draft.revision<we.current?"Waiting for the current shared draft. Refresh if disconnected.":e.draft.request&&(e.draft.request.targetId??"")!==(e.selectedAssetId??"")?at?"Select the source used for this incomplete save, then reopen Review & save to recover the same proposed files.":e.draft.handoff?"Select this Chat draft's original source, or discard the draft.":"The selected source changed. Choose Use selected source for this draft before checking or sending.":!f.length&&(e.draft.request||e.draft.handoff)?"Add a file to keep this draft, or discard it.":V||(e.trusted?e.draft.request?.canRestart?e.draft.handoff?"This Chat draft keeps its original requirements and source files. Discard the draft to start over.":"The folder is trusted again. Start a new request to check your kept draft against the current source.":j?K?K==="update_draft"||K==="clear_draft"?"Synchronizing your draft in memory.":"Wait for the current draft action to finish.":"":"Finish or cancel the current eval operation before continuing.":e.trustSource==="native"&&!e.trustCanGrant?"Trust this workspace in your app to use AI, check files and save.":"Select Trust this folder to use AI, check files and save."),ot=rt||(e.draft.handoff?"This draft came from Chat. Continue in the original Chat, or review and save it here.":e.supportsConversation?"":"This host cannot send to a Copilot conversation. Your draft stays here.");async function un(){if(ot||De||K||!I.trim()||["approval","thinking"].includes(e.chat.status))return;let _=le.current,E=ce.current,O=e.selectedAssetId??"";if(k&&!await G()||!be.current||le.current!==_||Ne.current!==E)return;let L=ce.current,ue=await Ce("continue_authoring",{intent:ze,...ze==="create"&&J.tags?{tags:J.tags}:{},message:[J.task,J.expected&&`Expected result: ${J.expected}`,I.trim()].filter(Boolean).join(`
`),expectedRevision:we.current,expectedEpoch:ce.current,expectedSourceId:O});be.current&&Ne.current===L&&P({projectPath:e.projectPath,epoch:L,requestId:ue?.requestId})}let Dt=e.draft.request?.validated&&e.draft.request.canRetry&&!e.draft.saving&&!e.draft.saveAttempted&&!e.draft.saveOutcome&&(k||!e.draft.proposal||!e.draft.proposal.canCommit),Lt=!k&&!rt&&!!e.draft.proposal?.canCommit,pn=e.draft.saveOutcome?.complete?"Step 3 complete: Files created. Choose an eval to run next.":Lt?"Step 2 complete: Format check passed. Ready to Review & save.":Dt?"Draft changed or rejected after check. Retry edited draft to validate again.":e.trusted?k?"Step 1: Syncing your edits without saving files. Checking and saving still need separate actions.":"Step 1: Choose Check draft before saving.":"Step 1: Edit your draft, then trust this folder to Check draft and Review & save.",ft={state:e,invoke:t,run:Ce,pending:K,error:Se,draftEpoch:s,files:f,setFiles:p,setSelected:$,setDirty:m,setConflict:y,setDiscard:pe,setReview:C,setSyncIssue:D,setDirectoryChoice:v,guided:J,setGuided:ee,replace:re,setReplace:Q,tagsPending:M,setTagsPending:ve,message:I,setMessage:T,sendMessage:un,sendBlocked:ot,showSendNotice:!!e.draft.conversation&&A?.projectPath===e.projectPath&&A?.epoch===s&&(!A.requestId||A.requestId===e.draft.conversation.requestId),showDiagnostics:oe,setShowDiagnostics:$e,dirty:k,blocked:rt,lockedDraft:De,conflict:w,ready:j,canRetarget:Qe,canRetryDraft:Dt,stepReadyToSave:Lt,stepStatus:pn,syncIssue:V,discard:ae,isStarterDraft:dn,source:b,copyNotice:x,allProjectFiles:F,projectAssets:ge,projectEvals:Pe,outputDirectory:l,directoryChoice:h,hasBoundRequest:pt,hasBoundHandoff:kt,version:le,lastSynced:we,lastEpoch:ce,sharedEpoch:Ne,hasHandoff:et,discardRevision:ie,discardEpoch:R,applying:xe,saveButton:de,chatEnd:he,sync:G,retargetDraft:We,validate:Ie,retryDraft:tt,onSetup:r,onActivity:n};return a`<section class="studio-pane author-pane" aria-labelledby="author-heading">
    <div class="studio-heading"><div><h2 ref=${B} tabindex="-1" id="author-heading">Create an eval</h2>
      <p>Describe the task and expected response, then review your draft before saving.</p></div>
      <button class="ck-btn" onClick=${()=>ke(!se)} aria-expanded=${se}>${se?"Hide":"Show"} Copilot</button></div>
    ${ts(ft)}
    <div class=${`studio-grid ${se?"":"editor-only"}`}>
    <div class="author-workspace">
    ${ns(ft)}
      <div class="editor-workspace">
        <div class="editor-toolbar"><strong>Eval draft</strong><span role="status" class=${k?"dirty-dot":"ck-muted"}>${V?"Sync needs attention":k?"Sync pending":e.draft.files.length?e.draft.retained?"Retained privately":"Synced in memory":f.length?"Starter draft":"No draft files"}</span>
          <button ref=${Je} class="ck-btn" disabled=${De||f.length>=16||!!K} onClick=${()=>{le.current++,m(!0),$(f.length),D(""),C(!1),p(_=>[..._,{relativePath:`new-${_.length+1}.eval.yaml`,kind:"eval",content:It(`Evaluation ${_.length+1}`)}])}}>+ File</button></div>
        <div class="file-tabs" role="tablist" aria-label="Draft files">${f.map((_,E)=>a`
          <button class=${`file-tab ${g===E?"active":""}`} role="tab" aria-selected=${g===E}
            id=${`draft-tab-${E}`} aria-controls="draft-file-panel" tabindex=${g===E?0:-1}
            key=${E} onClick=${()=>$(E)} onKeyDown=${O=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(O.key))return;O.preventDefault();let L=O.key==="Home"?0:O.key==="End"?f.length-1:(E+(O.key==="ArrowRight"?1:-1)+f.length)%f.length;$(L),document.getElementById(`draft-tab-${L}`).focus()}}>${_.relativePath.split("/").at(-1)||`File ${E+1}`}</button>`)}</div>
        <div id="draft-file-panel" role="tabpanel" aria-labelledby=${Ee?`draft-tab-${g}`:void 0}>
        ${Ee?a`<div class="file-metadata"><label class="stack-label">New file path<input class="ck-input" name="draft-path" disabled=${De} autocomplete="off" spellcheck="false" value=${Ee.relativePath}
          onInput=${_=>me(g,{relativePath:_.target.value})} /></label>
          <label class="stack-label">File type<select class="ck-select" name="draft-kind" disabled=${De} value=${Ee.kind} onChange=${_=>{let E=_.target.value,O={kind:E},L=/(?:^|[\\/])fixtures[\\/]/i.test(Ee.relativePath);E==="fixture"&&!L?O.relativePath=`fixtures/sample/input-${g+1}.txt`:E==="eval"&&L&&(O.relativePath=`new-${g+1}.eval.yaml`),me(g,O)}}>
            <option value="eval">Eval file (.eval.yaml)</option><option value="fixture">Sample input file (fixtures/...)</option></select></label>
          <button class="ck-btn" aria-label="Remove selected draft file" disabled=${De} onClick=${()=>{le.current++,m(!0),D(""),C(!1),p(_=>_.filter((E,O)=>O!==g)),$(Math.max(0,g-1))}}>Remove</button></div>
          <div class="code-editor"><pre class="line-numbers" aria-hidden="true">${Ee.content.split(`
`).map((_,E)=>E+1).join(`
`)}</pre>
            <textarea ref=${Y} class="source-editor" name="draft-content" readonly=${De} autocomplete="off" aria-label=${`Edit ${Ee.relativePath}`} aria-describedby="editor-key-help" spellcheck="false" wrap="off" value=${Ee.content}
              onKeyDown=${Ge} onScroll=${_=>{_.target.previousElementSibling.scrollTop=_.target.scrollTop}}
              onInput=${_=>me(g,{content:_.target.value})}></textarea></div>
          <div class="editor-status"><span>${Ee.content.split(`
`).length} lines</span><span>${new TextEncoder().encode(Ee.content).length.toLocaleString()} bytes</span><span id="editor-key-help">Tab indents · Shift+Tab or Esc exits</span><span>New files only · UTF-8</span></div>`:a`<div class="empty-studio"><h3>No draft files yet.</h3><p>Add a file or ask Copilot for a proposal. No project files have changed.</p></div>`}
        </div>
        ${Ee?.kind==="fixture"&&a`<p class="ck-muted">Sample input files (.txt, .json, .md, or .csv) are saved under fixtures/&lt;folder&gt;/ so your eval can pass test files to the AI.</p>`}
        ${rs(ft)}
      </div>
    </div>
      ${se&&ss(ft)}
    </div>
    ${z&&e.draft.proposal&&a`<${Yr} proposal=${e.draft.proposal} pending=${K}
      error=${Se} outcome=${e.draft.saveOutcome}
      onClose=${()=>C(!1)}
      onSave=${async()=>{(await Ce("save_draft",{proposalId:e.draft.proposal.proposalId}))?.complete&&C(!1)}} />`}
  </section>`}function $s(e,t=0,n={}){let{onSelectEvidence:r,showTrajectory:o=!0,disabled:s=!1}=n,l=e.status==="passed"?"row-kind-success":"row-kind-attention",i=e.score!==null&&e.score!==void 0?`Score: ${e.score}`:"Score: not reported",d=Tt(e.judgeUsage),c=e.sameAttemptEvidence,u=!!(c?.available&&r&&c.target&&(c.target!=="trajectory"||o));return a`<li class="case-grader-item" key=${`${e.id}-${t}`}>
    <div class="case-grader-header">
      <strong>${e.name}</strong>
      <code class="case-grader-kind">${e.kind}</code>
      <span class=${`ck-badge ${l}`.trim()}>${e.status}</span>
      <span class="ck-muted">${i}</span>
    </div>
    <p class="case-grader-reason">${e.reason}</p>
    <p class="ck-muted case-grader-proves">What this check tells you: ${e.proves}</p>
    ${c?.summary&&a`<p class="ck-muted case-grader-evidence">Attempt evidence: ${c.summary}</p>`}
    ${u&&a`<div class="case-grader-evidence-actions">
      <button class="ck-btn ck-btn-sm" type="button" disabled=${s} onClick=${()=>r(c.target,{caseId:c.caseId,caseName:c.caseName,...c.stimulus?{stimulus:c.stimulus}:{},graderId:e.id,attempt:c.attempt,configuration:c.configuration,model:c.model,...c.artifact?{artifact:c.artifact}:{},turn:c.turn})}>${c.target==="trajectory"?"Open attempt conversation trace":c.target==="output"?"Open attempt output":"Open attempt report"}</button>
    </div>`}
    ${d&&a`<p class="ck-muted case-grader-judge">${d}</p>`}
    ${e.children?.length>0&&a`<ul class="case-grader-children" aria-label=${`Nested checks for ${e.name}`}>
      ${e.children.map((f,p)=>$s(f,p,n))}
    </ul>`}
  </li>`}function Ws({cases:e,mode:t="engine",onSelectEvidence:n,disabled:r=!1}){let o=Array.isArray(e)?Xe({cases:e}):[];if(!o.length||t==="health")return null;let s=t==="engine";return a`<section class="case-breakdown" role="region" aria-label="Per-case metrics and check breakdown">
    <h3>Results and checks for each case</h3>
    ${o.map((l,i)=>{let d=l.outcome==="pass"?"row-kind-success":["fail","error"].includes(l.outcome)?"row-kind-attention":"",c=l.trial?.attempt??null;return a`<div class="case-breakdown-card" key=${`${l.id}-${i}`}>
        <div class="case-breakdown-header">
          <strong>${l.name}</strong>
          <span class=${`ck-badge ${d}`.trim()}>${l.outcome}</span>
          ${l.trial?.model&&a`<code class="ck-muted">${l.trial.model}</code>`}
        </div>
        ${!l.trial?.artifact&&a`<p class="ck-muted">These answers aren't linked to a specific saved attempt. You can still read them.</p>`}
        ${l.evidenceDiagnostics.map(u=>a`<p class="evidence-notice" role="status">${u.message}</p>`)}
        <dl class="case-metrics-grid" aria-label=${`Metrics for ${l.name}`}>
          <dt>Duration</dt><dd>${l.formattedDuration}</dd>
          <dt>Tokens</dt><dd>${l.formattedTokens}</dd>
          <dt>Turns</dt><dd>${l.formattedTurns}</dd>
          <dt>Observed tools</dt><dd>${l.formattedObservedTools}</dd>
          <dt>Observed skills</dt><dd>${l.formattedObservedSkills}</dd>
        </dl>
        <div class="case-graders-section">
          <h4>${`Grader checks (${l.graderOutcomes.length})`}</h4>
          ${l.graderOutcomes.length?a`<ul class="case-grader-list">
            ${l.graderOutcomes.map((u,f)=>$s(u,f,{onSelectEvidence:n,showTrajectory:s,disabled:r}))}
          </ul>`:a`<p class="ck-muted">No check results were reported for this case.</p>`}
        </div>
        ${!l.ambiguousEvidence&&l.trial?.artifact&&n&&a`<div class="case-evidence-links">
          ${s&&a`<button class="ck-btn ck-btn-sm" type="button" disabled=${r} onClick=${()=>n("trajectory",{caseId:l.id,caseName:l.name,...l.stimulus?{stimulus:l.stimulus}:{},attempt:c,configuration:l.trial?.configuration??null,model:l.trial?.model??null,artifact:l.trial.artifact,turn:null})}>View conversation trace</button>`}
          <button class="ck-btn ck-btn-sm" type="button" disabled=${r} onClick=${()=>n("output",{caseId:l.id,caseName:l.name,...l.stimulus?{stimulus:l.stimulus}:{},attempt:c,configuration:l.trial?.configuration??null,model:l.trial?.model??null,artifact:l.trial.artifact,turn:null})}>View Output</button>
        </div>`}
      </div>`})}
  </section>`}function Vn({text:e,run:t,detail:n,cases:r,onSelectEvidence:o,disabled:s=!1}){let[l,i]=S(!1),d=Jt(()=>an(e),[e]),c=Jt(()=>Array.isArray(r)&&r.length?Xe({cases:r}):Array.isArray(n?.cases)&&n.cases.length?Xe(n):Array.isArray(t?.cases)&&t.cases.length?Xe(t):[],[r,n,t]),u=n?.mode??t?.mode??"engine",f=e.match(/\[Display truncated[^\]\r\n]{0,200}\]/)?.[0],p=h=>{if(typeof h=="string")return h;let v=h.children.map(p);return h.tag==="table"?a`<div class="report-table" tabindex="0" role="region" aria-label="Report table"><table>${v}</table></div>`:a`<${h.tag}>${v}<//>`};return a`<div class="report-view">
    ${(n?.evidenceDiagnostics??t?.evidenceDiagnostics??[]).map(h=>a`<p class="evidence-notice" role="status">${h.message}</p>`)}
    ${f&&a`<p class="evidence-notice" role="status">${f}</p>`}
    <div class="evidence-actions report-display-toggle" role="group" aria-label="Report view">
      <span class="report-display-label" aria-hidden="true">Display</span>
      <button class="ck-btn report-mode-btn" type="button" aria-pressed=${!l} aria-controls="report-content" onClick=${()=>i(!1)}>Preview</button>
      <button class="ck-btn report-mode-btn" type="button" aria-pressed=${l} aria-controls="report-content" onClick=${()=>i(!0)}>Source</button>
    </div>
    ${!l&&u==="engine"&&c.length>0&&Ws({cases:c,mode:u,onSelectEvidence:o,disabled:s})}
    ${l?a`<pre id="report-content" tabindex="0" role="region" aria-label="Saved report text">${e}</pre>`:a`<div id="report-content" class="report-preview" tabindex="0" role="region" aria-label="Saved report preview">
        ${d.nodes.map(p)}
        ${d.truncated&&a`<p class="snapshot-notice" role="status">This preview is shortened. Source shows the text returned by the reader, which may also have a size limit. Saved results are unchanged.</p>`}
      </div>`}
  </div>`}function bs({state:e,invoke:t,onBusy:n}){let[r,o]=S(""),[s,l]=S(!1),[i,d]=S(""),c=N(null),u=N(!1),f=N(0),p=N(null),[h,v]=S(!1),[g,$]=S(!1),[k,m]=S(!1),w=N(null);U(()=>v(!1),[e.projectPath]),U(()=>{u.current=!1,f.current++,d(""),l(!1),n(!1),o(""),$(!1),m(!1)},[e.context.workingDirectory]),U(()=>{f.current++,d(""),l(!1),n(!1),u.current=!1,o(""),$(!1),m(!1)},[e.projectPath]);function y(){if(!s){if(r){m(!0);return}p.current.open=!1,p.current.querySelector("summary").focus()}}U(()=>{let T=A=>{p.current?.open&&!p.current.contains(A.target)&&!g&&!k&&y()};return document.addEventListener("pointerdown",T),()=>document.removeEventListener("pointerdown",T)},[r,s,g,k]);async function I(T){T.preventDefault();let A=++f.current;if(d(""),!Wr(r)){d("Enter an absolute project folder, for example C:\\code\\project."),c.current.focus();return}l(!0),n(!0);try{let P=await t("discover_project",{projectPath:r});if(f.current!==A)return;P.available===!1?(d(P.message||"Couldn't read this folder. See Problems for details, then try again."),c.current.focus()):P.discarded||(u.current=!1,o(""))}catch(P){if(f.current!==A)return;d(P.message),c.current.focus()}finally{f.current===A&&(l(!1),n(!1))}}return a`
    <details ref=${p} class="workspace-picker" onKeyDown=${T=>{T.key==="Escape"&&!g&&!k&&(T.preventDefault(),y())}}>
      <summary title=${e.projectPath||"Choose the folder to inspect"} onClick=${T=>{p.current.open&&(T.preventDefault(),y())}}><${W} name="folder" size=${16} />
        <span class="workspace-name">${Hr(e.projectPath)}</span><span aria-hidden="true">▾</span></summary>
      <div class="workspace-disclosure">
      <div class="workspace-current"><strong>Current folder</strong>
        <button class="ck-btn copy-path" type="button" aria-label="Copy path" title=${h?"Path copied":"Copy path"} disabled=${!e.projectPath} onClick=${async()=>{let T=f.current;try{await nn(e.projectPath,t),f.current===T&&(v(!0),d(""))}catch(A){f.current===T&&d(A.message)}}}><${W} name=${h?"check":"copy"} size=${16} /></button></div>
      <span class="sr-only" role="status">${h?"Path copied":""}</span>
      <code class="workspace-path">${e.projectPath||"No folder selected"}</code>
      <div class="workspace-actions">
        ${e.context.mode==="manual"&&e.context.workingDirectory&&a`
          <button class="ck-btn" type="button" disabled=${s||e.readStatus==="reading"} onClick=${async()=>{u.current=!1;let T=++f.current;d(""),o(""),l(!0),n(!0);try{await t("follow_context")}catch(A){f.current===T&&d(A.message)}finally{f.current===T&&(l(!1),n(!1))}}}>Follow workspace</button>`}
      </div>
      <form class="project-picker" onSubmit=${I} aria-label="Select project">
      <label for="project-path">Another folder</label>
      <div class="project-input-row">
        <input ref=${c} id="project-path" class="ck-input" name="projectPath" autocomplete="off" spellcheck="false"
          placeholder="Choose a folder with Browse…" value=${r} readonly
          aria-invalid=${!!i} aria-describedby=${i?"project-error project-help":"project-help"}
          />
        <button ref=${w} class="ck-btn" type="button" disabled=${s} onClick=${()=>$(!0)}>Browse…</button>
        <button class="ck-btn ck-btn-primary" type="submit" disabled=${s||e.readStatus==="reading"||!r}>${s?"Loading\u2026":"Load"}</button>
      </div>
      <p id="project-help" class="ck-muted field-help">${r?"Choose Load to switch folders.":"Choose another folder to load its evals, assets and saved results."}</p>
      </form>
      ${i&&a`<p id="project-error" class="field-error" role="alert">${Ke(i)}</p>`}
      ${g&&a`<${sn} initialFolder=${r||e.projectPath||e.context.workingDirectory} invoke=${t}
        onClose=${()=>{$(!1),dt(w.current)}}
        onChoose=${T=>{u.current=!0,f.current++,d(""),o(T===e.projectPath?"":T),$(!1),dt(w.current)}} />`}
      ${k&&a`<${Nn} onKeep=${()=>{m(!1),dt(w.current)}}
        onDiscard=${()=>{m(!1),u.current=!1,o(""),d(""),p.current.open=!1,p.current.querySelector("summary").focus()}} />`}
      </div>
    </details>
  `}function ys(e,t,n){let r=[];for(let[o,s]of e.entries()){let l=t[s.source],i=t[s.target];if(!l||!i)continue;let d=l.lane===i.lane,c=d&&i.index===l.index+1,u=$=>$.x+$.width/2,f=$=>$.y+$.height/2,p,h,v,g;if(s.kind==="trajectory")if(n){p={x:u(l),y:l.y+l.height},h={x:i.x,y:f(i)};let $=Math.min(l.x,i.x)-18,k=p.y+42;v=`M ${p.x} ${p.y} V ${k} H ${$} V ${h.y} H ${h.x}`,g={x:(p.x+$)/2,y:k,width:Math.max(100,p.x-$-12),text:"Record for the checks"}}else{p={x:l.x+l.width,y:f(l)},h={x:i.x,y:f(i)};let $=(p.x+h.x)/2;v=`M ${p.x} ${p.y} H ${$} V ${h.y} H ${h.x}`,g={x:$,y:(p.y+h.y)/2,width:Math.max(70,h.x-p.x-20),text:`Conversation record
Used by the checks`}}else if(c)p={x:u(l),y:l.y+l.height},h={x:u(i),y:i.y},v=`M ${p.x} ${p.y} V ${(p.y+h.y)/2} H ${h.x} V ${h.y}`,g={x:h.x,y:(p.y+h.y)/2,width:Math.max(100,i.width-24),text:s.label};else if(!n&&d&&s.kind==="grading"){p={x:l.x,y:f(l)},h={x:i.x,y:f(i)};let $=Math.min(p.x,h.x)-18;v=`M ${p.x} ${p.y} H ${$} V ${h.y} H ${h.x}`}else if(!n&&d&&s.kind==="aggregation"){p={x:l.x+l.width,y:f(l)},h={x:i.x+i.width,y:f(i)};let $=Math.max(p.x,h.x)+18;v=`M ${p.x} ${p.y} H ${$} V ${h.y} H ${h.x}`}else continue;r.push({...s,id:`relation-${o}`,start:p,end:h,path:v,label:g})}return r}function ks(e,t,n){let r=new Map(n.map(o=>[o.key,o]));return e.filter(o=>o.kind!=="order"&&(o.source===t||o.target===t)).map(o=>{let s=o.target===t,l=s?o.source:o.target,i=r.get(l)?.title??l,d=o.kind==="grading"&&r.get(o.source)?.kind==="prompt",c=o.kind==="trajectory"?s?"See where the conversation is recorded":"See how the checks use this record":d?s?`Checks ${i}`:`Checked by ${i}`:`${o.label} ${s?"from":"to"} ${i}`;return{target:l,label:c,kind:o.kind,promptScope:d}})}var ut=["Visual","Outline","Source"],ws={defaults:"Settings in this file",executor:"Agent provider",model:"Agent model",runs:"Attempts per task",timeout:"Time limit",reasoning_effort:"Reasoning effort",judge_model:"Model used by checks",judge_reasoning_effort:"Reasoning effort for checks",judge_provider:"Check model provider (not verified)",files:"Files and where they go",skills:"Skills available to the agent",env:"Environment-variable values (hidden)",mcpServers:"Tool servers (not started)",commands:"Setup commands (not run)",commandTimeout:"Setup time limit",config:"Settings as written",type:"Type",name:"Name",scope:"Which agent is checked",turn:"Instruction index (starts at 0)",value:"Value",substring:"Text to look for",pattern:"Text pattern",negate:"Reverse this check",required:"Required",disallowed:"Not allowed",path:"File path",constraints:"Limits",max_tokens:"Token limit",max_turns:"Turn limit",max_duration:"Hard time limit",max_agent_duration:"Agent working-time limit",attachments:"Attachments for the first instruction",threshold:"Minimum score",weights:"Check weights",prompt:"Instructions for the reviewing model",scoring:"How the model scores its review",evidence:"Evidence used by the check",program:"Checking program (not run)",args:"Program arguments",dest_root:"Destination root"};function Vs(e){return e==="agent_environment"||e==="environment"?"Inputs shared by all tasks in this eval":e==="grading_environment"?"Reference files shared by the checks":/^stimuli\[\d+\]\.(?:agent_environment|environment)$/.test(e)?"Inputs for this task":/^stimuli\[\d+\]\.grading_environment$/.test(e)?"Reference files for this task's checks":Object.hasOwn(ws,e)?ws[e]:e}function Bn({value:e,depth:t=0,field:n=""}){if(t>6)return a`<p class="ck-muted">Open Advanced to see the remaining nested settings.</p>`;if(typeof e=="string"&&["args","commands","command","golden_command","script","code"].includes(n)&&(e.length>160||e.includes(`
`)))return a`<p class="ck-muted">Configured code or command (${e.length} characters). Inspect Advanced for the exact text; it has not been run.</p>`;if(e===null||typeof e!="object")return a`<p class="eval-authored-value">${e===null?"Empty (null)":String(e)}</p>`;if(Array.isArray(e))return e.length?a`<ul class="eval-value-list">${e.slice(0,24).map(o=>a`
    <li><${Bn} value=${o} depth=${t+1} field=${n} /></li>`)}
    ${e.length>24&&a`<li class="ck-muted">${e.length-24} more values in Advanced.</li>`}</ul>`:a`<p class="ck-muted">None listed.</p>`;if(typeof e.src=="string"&&typeof e.dest=="string")return a`<div class="eval-file-mapping">
    <div><span class="ck-muted">Source file</span><code>${e.src}</code></div>
    <span class="eval-file-arrow" aria-label="mapped to">→</span>
    <div><span class="ck-muted">Workspace path</span><code>${e.dest}</code></div>
    ${e.dest_root!==void 0&&a`<p class="ck-muted">Destination root: ${String(e.dest_root)}</p>`}
    ${Object.keys(e).some(o=>!["src","dest","dest_root"].includes(o))&&a`<p class="ck-muted">Open Advanced to see additional saved settings.</p>`}
  </div>`;let r=Object.entries(e);return r.length?a`<dl class="eval-fields">${r.slice(0,24).map(([o,s])=>a`<div class=${s&&typeof s=="object"?"eval-field-group":""}>
    <dt>${Vs(o)}</dt><dd><${Bn} value=${s} depth=${t+1} field=${o} /></dd></div>`)}
    ${r.length>24&&a`<div><dt>Additional settings</dt><dd>See Advanced for ${r.length-24} more fields.</dd></div>`}</dl>`:a`<p class="ck-muted">No settings listed here.</p>`}var cn=e=>`eval-node-${encodeURIComponent(e)}`;function Cs({card:e,sourcePath:t,expanded:n,onSource:r,diagram:o,references:s=[],onReference:l}){let i=e.sources.length&&(e.key.endsWith(".agent")?"Visible to the agent":e.key.endsWith(".grading")?"Hidden from the agent":""),d=a`
    <div class="eval-readable-details">${e.content===void 0?a`<p class="ck-muted">These saved settings are too large to show in full here. Open Advanced or Source.</p>`:a`<${Bn} value=${e.content} field=${e.key.split(".").at(-1)} />`}</div>
    <details class="eval-advanced"><summary>Advanced: saved settings and source</summary>
      <pre tabindex="0" aria-label=${`${e.title} saved settings`}>${e.detail}</pre>
      ${e.sources.length?a`<div class="eval-source-refs">${e.sources.map(c=>a`
        <button class="ck-btn ck-btn-sm" onClick=${()=>r(c)} title=${t}>
          <code>${c}</code>
        </button>`)}</div>`:a`<p class="ck-muted">This explains a relationship; it is not a field in the saved file.</p>`}
    </details>
    ${o&&s.length>0&&a`<div class="eval-node-relations" aria-label="Related details">
      ${s.map(c=>a`<button class="eval-reference"
        aria-controls=${cn(c.target)} onClick=${()=>l(c.target)}>${c.label} <span aria-hidden="true">↗</span></button>`)}
    </div>`}`;return a`<article class=${`eval-card eval-card-${e.kind}`} aria-label=${e.title}
    data-node-key=${o?e.key:void 0}>
    <div class="eval-card-head">${o&&a`<span class="eval-node-kind">${{declaration:"Inputs and settings",prompt:"Instruction",trajectory:"Conversation and tool activity",grader:"Check",rule:"Pass rule"}[e.kind]}</span>`}
      ${i?a`<span class="ck-badge eval-visibility">${i}</span>`:null}</div>
    <h4 id=${o?cn(e.key):void 0} tabindex=${o?"-1":void 0}>${e.title}</h4>
    <p>${!o&&e.kind==="prompt"?"The instruction sent to the agent:":e.summary}</p>
    ${o&&s.filter(c=>c.kind==="trajectory"||c.promptScope).map(c=>a`<button class="eval-reference" onClick=${()=>l(c.target)}
        aria-controls=${cn(c.target)}>${c.label} <span aria-hidden="true">↗</span></button>`)}
    ${o?a`<details open=${n}><summary>Explore details</summary>${d}</details>`:a`<div class="eval-outline-body">${d}</div>`}
  </article>`}function Bs({selected:e,sourcePath:t,expanded:n,onSource:r}){let o=N(null),[s,l]=S({connectors:[],width:0,height:0,stacked:!1}),[i,d]=S(""),c=N(0);Me(()=>{let p=o.current,h=()=>{let $=p.getBoundingClientRect(),k={},m=[...p.querySelectorAll(".eval-lane")],w=m.length>1&&Math.abs(m[0].offsetLeft-m[1].offsetLeft)<2;m.forEach((I,T)=>{I.querySelectorAll("[data-node-key]").forEach((A,P)=>{let z=A.getBoundingClientRect();k[A.dataset.nodeKey]={x:z.left-$.left-p.clientLeft,y:z.top-$.top-p.clientTop,width:z.width,height:z.height,lane:T,index:P}})});let y={connectors:ys(e.edges??[],k,w),width:p.clientWidth,height:p.clientHeight,stacked:w};l(I=>JSON.stringify(I)===JSON.stringify(y)?I:y)},v=()=>{cancelAnimationFrame(c.current),c.current=requestAnimationFrame(h)},g=new ResizeObserver(v);return g.observe(p),p.querySelectorAll(".eval-card, .eval-lane header").forEach($=>g.observe($)),h(),()=>{g.disconnect(),cancelAnimationFrame(c.current)}},[e]);function u(p){d(p),requestAnimationFrame(()=>{let h=document.getElementById(cn(p));h?.focus({preventScroll:!0}),h?.scrollIntoView({block:"center",behavior:"instant"})})}let f=[...e.agent,...e.grading];return a`<div ref=${o} class="eval-diagram" data-layout=${s.stacked?"stacked":"lanes"}>
    <svg class="eval-connectors" aria-hidden="true" width=${s.width} height=${s.height}>
        <defs>${["input","order","trajectory","grading","aggregation","output"].map(p=>a`
          <marker id=${`eval-arrow-${p}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 1 1 L 9 5 L 1 9" class=${`eval-arrow eval-relation-${p}`} />
          </marker>`)}</defs>
        ${s.connectors.map(p=>a`<g class=${`eval-relation-${p.kind}`} data-edge-source=${p.source} data-edge-target=${p.target}>
          <path class="eval-edge" d=${p.path} marker-end=${`url(#eval-arrow-${p.kind})`} />
          <circle class="eval-port" cx=${p.start.x} cy=${p.start.y} r="4" />
          <circle class="eval-port" cx=${p.end.x} cy=${p.end.y} r="4" />
        </g>`)}
    </svg>
    ${s.connectors.filter(p=>p.label).map(p=>a`<span aria-hidden="true"
        class=${`eval-edge-label eval-relation-${p.kind}`} data-edge-label=${p.kind}
        style=${{left:p.label.x,top:p.label.y,width:p.label.width}}>${p.label.text}</span>`)}
    <div class="eval-diagram-lanes">
        ${[["Agent task","What the agent receives and is asked to do",e.agent],["Checks","What is checked and what counts as success",e.grading]].map(([p,h,v],g)=>a`
          <section class="eval-lane" aria-label=${p}>
            <header><span class="eval-lane-mark" aria-hidden="true">${g?"C":"A"}</span><div><h3>${p}</h3><p class="ck-muted">${h}</p></div></header>
            ${v.map($=>a`<div class=${`eval-node ${i===$.key?"is-referenced":""}`} key=${$.key}>
              <${Cs} card=${$} sourcePath=${t} expanded=${n} onSource=${r} diagram=${!0}
                references=${ks(e.edges??[],$.key,f)} onReference=${u} />
            </div>`)}
          </section>`)}
    </div>
  </div>`}function xs({detail:e,stale:t=!1}){let[n,r]=S("Visual"),[o,s]=S(0),[l,i]=S(!1),[d,c]=S(""),u=e.visualization,f=u?.cases[o];function p(v){c(v),r("Source"),requestAnimationFrame(()=>document.getElementById("eval-source-heading")?.focus())}function h(v,g){if(!["ArrowLeft","ArrowRight","Home","End"].includes(v.key))return;v.preventDefault();let $=v.key==="Home"?0:v.key==="End"?ut.length-1:(g+(v.key==="ArrowRight"?1:-1)+ut.length)%ut.length;r(ut[$]),document.getElementById(`eval-tab-${ut[$]}`)?.focus()}return a`<section class="eval-visualizer" aria-label="Read-only eval visualizer">
    <p class="ck-muted">See what the agent receives, what it is asked to do, and how its result is checked. Nothing runs or saves.</p>
    <div class="eval-view-toolbar">
      <div role="tablist" aria-label="Eval views">${ut.map((v,g)=>a`
        <button class="ck-btn" role="tab" id=${`eval-tab-${v}`} aria-selected=${n===v}
          aria-controls=${`eval-panel-${v}`} tabindex=${n===v?0:-1}
          onKeyDown=${$=>h($,g)} onClick=${()=>r(v)}>${v}</button>`)}</div>
      ${n==="Visual"&&f&&!t&&a`<button class="ck-btn ck-btn-sm"
        onClick=${()=>i(v=>!v)}>${l?"Hide details":"Show all details"}</button>`}
    </div>
    ${ut.map(v=>a`<section id=${`eval-panel-${v}`} role="tabpanel"
      aria-labelledby=${`eval-tab-${v}`} hidden=${n!==v} tabindex="0">
      ${n===v&&(v==="Source"?a`
        <h3 id="eval-source-heading" tabindex="-1">Saved source${d?` \xB7 ${d}`:""}</h3>
        <p class="ck-muted"><code>${e.relativePath}</code>. Known secrets and environment-variable values are hidden.
          ${t?"This is an older copy. Reload before relying on it.":"Based on the saved file, not an unsaved draft or a past run."}
          ${e.sourceUnchanged?"The text matches the saved file exactly.":"The displayed text differs from the file; the file itself has not changed."}</p>
        ${u?.sourceStatus==="redacted"&&a`<p class="snapshot-notice">Private values were removed. This is a rebuilt copy of the saved settings, without the original formatting or comments.</p>`}
        ${u?.sourceStatus==="withheld"&&a`<p class="snapshot-notice" role="status">Source is not shown because this file could not be read safely enough to hide private values. Open the saved file in your local editor.</p>`}
        <pre tabindex="0" role="region" aria-label="Saved source text">${e.text}</pre>`:t?a`<p class="snapshot-notice" role="status">View paused: the saved file has not been read again. Use Reload preview to get the current file.</p>`:u?a`
              <p class="ck-muted">Saved settings only, not a run. Shared settings, inherited inputs and placeholders are not filled in here.</p>
              <details class="eval-view-limits"><summary>What this view can and cannot show</summary><p class="ck-muted">This view explains the saved file, not what actually ran. It is not a full file-format check.
                Shared project settings, inherited inputs and placeholders are not filled in here.
                Custom agent and check settings are shown as written; their behavior has not been verified. Referenced files have not been opened or copied.</p></details>
              ${u.diagnostics.length>0&&a`<div class="snapshot-notice" role="status">
                <strong>${u.status==="unavailable"?"This eval cannot be displayed":"Some details need attention"}</strong>
                <ul>${u.diagnostics.map(g=>a`<li>${g}</li>`)}</ul>
              </div>`}
              ${f&&a`
                <div class="eval-case-bar"><label for="eval-case">Task</label>
                  <select class="ck-input" id="eval-case" value=${o} onChange=${g=>{s(Number(g.target.value)),c("")}}>${u.cases.map((g,$)=>a`<option value=${$}>${g.name}</option>`)}</select>
                  <span class="ck-muted" role="status">${f.promptCount} instruction${f.promptCount===1?"":"s"} · ${f.graderCount} check${f.graderCount===1?"":"s"}${f.graderCount?"":" \xB7 Not scored"}</span>
                </div>
                <p class="eval-flow-note"><span class="eval-legend-line" aria-hidden="true"></span> Solid arrows show the order of instructions.
                  <span class="eval-legend-line is-dashed" aria-hidden="true"></span> Dashed arrows show which inputs, records or results are used, not when checks run.
                  Links jump to related details.</p>
                ${v==="Visual"?a`<${Bs} key=${`${o}:${l}`} selected=${f} sourcePath=${u.sourcePath}
                  expanded=${l} onSource=${p} />`:a`<div class="eval-lanes eval-outline" key=${o}>
                  ${[["Agent task","What the agent receives and is asked to do",f.agent],["Checks","What is checked and what counts as success",f.grading]].map(([g,$,k])=>a`<section class="eval-lane" aria-label=${g}>
                      <header><h3>${g}</h3><p class="ck-muted">${$}</p></header>
                      ${k.map(m=>a`
                        ${m.kind==="prompt"&&m.promptIndex>0&&a`<div class="eval-prompt-order">Next instruction</div>`}
                        <${Cs} key=${m.key} card=${m} sourcePath=${u.sourcePath}
                          expanded=${v==="Outline"||l} onSource=${p} />`)}
                    </section>`)}
                </div>`}`}
            `:a`<p role="status">This version cannot show a visual overview of this file. Open Source to inspect it.</p>`)}
    </section>`)}
  </section>`}var qe=e=>new Intl.NumberFormat().format(e),nt=[...He,...An];window.addEventListener("message",e=>{if(e.source!==window.parent||e.data?.type!=="copilot-evals-theme"||!["light","dark"].includes(e.data.mode))return;let t=["--background-color-default","--background-color-muted","--text-color-default","--text-color-muted","--text-color-danger","--text-color-success","--text-color-attention","--border-color-default","--border-color-muted","--color-focus-outline"];for(let n of t){let r=e.data.tokens?.[n];typeof r=="string"&&r.length<=128&&CSS.supports("color",r)&&document.documentElement.style.setProperty(n,r)}document.documentElement.dataset.colorMode=e.data.mode,document.documentElement.style.colorScheme=e.data.mode});function Ks({state:e,invoke:t,connected:n}){let[r,o]=S(()=>qr(window.location.search)),[s,l]=S(r.view),[i,d]=S(()=>r.view==="setup"?{section:"project"}:null),[c,u]=S(zr),[f,p]=S(""),[h,v]=S(""),[g,$]=S(!1),[k,m]=S(""),[w,y]=S(!1),[I,T]=S(null),[A,P]=S(""),[,z]=S(0),C=N(null);C.current||(C.current=kn(t,()=>z(b=>b+1))),C.current.setContext(yn(e,s));let se=N(null),ke=N(null),ae=N({}),pe=N(0),oe=N(new Map),$e=N(""),ie=N(null),R=N(null),J=N(null),ee=N(""),re=N(""),Q=N(""),[M,ve]=S(0),[V,D]=S(0),X=e?tn(e,s):null;U(()=>{if(!e?.projectPath||!e.trustCanGrant)return;let b=!0;return t("publish_state",{}).catch(x=>{b&&p(x.message)}),()=>{b=!1}},[e?.projectPath,e?.trustCanGrant]),U(()=>{let b=x=>{!se.current?.dirty&&(!e?.draft.files.length||e.draft.saveOutcome?.complete)||(x.preventDefault(),x.returnValue="")};return window.addEventListener("beforeunload",b),()=>window.removeEventListener("beforeunload",b)},[e?.draft.files.length,e?.draft.saveOutcome?.complete]),ae.current={view:s,project:e?.projectPath,workingDirectory:e?.context.workingDirectory},U(()=>{pe.current++,p(""),v(""),$(!1),m(""),T(null),se.current=null,ke.current=null},[e?.projectPath,e?.context.workingDirectory]),U(()=>{if(!e?.projectPath||!e.trusted||r.runId||e.savedEvalNavigation||ae.current.view!=="definitions"||e.createDraftId||e.draft.handoff?.id||e.draft.files.length)return;let b=!1,x=ae.current.view,F=pe.current;return t("inspect_project_setup",{}).then(ge=>{b||ae.current.view!==x||pe.current!==F||(ge.inspection?.state==="missing"?Y("project"):ge.available===!1&&p(ge.message||"Project configuration inspection is unavailable."))}).catch(ge=>{!b&&ae.current.view===x&&pe.current===F&&p(ge.message)}),()=>{b=!0}},[e?.projectPath,e?.trusted,e?.context.workingDirectory,e?.context.mode]),U(()=>{!e?.resultsNavigation||e.selectedRunId!==e.resultsNavigation||(B("results"),$(!0))},[e?.resultsNavigation]),U(()=>{let b=e?.savedEvalNavigation?.detail;!b||b.stale||(B("definitions"),$e.current=b.id,u(x=>en(e,"definitions",x.definitions).rows.some(F=>F.id===b.id)?x:Xt(x,"definitions",{query:b.relativePath,kind:"all",status:"all",page:1})),$(!0),requestAnimationFrame(()=>R.current?.focus()))},[e?.savedEvalNavigation?.id]),U(()=>{let b=e?.comparison,x=b?.mode==="descriptive"?b.id:b?.receipt?.id;!e?.comparisonNavigation||x!==e.comparisonNavigation||B("compare")},[e?.comparisonNavigation]),U(()=>{let b=()=>{let x=document.getElementById(`tab-${s}`),F=x?.parentElement;if(!x||!F)return;let ge=x.offsetLeft,Pe=ge+x.offsetWidth;ge<F.scrollLeft?F.scrollLeft=ge:Pe>F.scrollLeft+F.clientWidth&&(F.scrollLeft=Pe-F.clientWidth)};return b(),window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[s]);function be(b){typeof b!="string"||!/^[a-zA-Z0-9-]{1,80}$/.test(b)||(C.current.clear(),ae.current.view="results",pe.current++,o({view:"results",runId:b}),ve(x=>x+1),l("results"),p(""),v(""),$(!1))}U(()=>{!k||X?.id!==k||X.stale||($(!0),m(""))},[k,X]),U(()=>{let b=ee.current;if(ee.current="",b&&X?.id===b&&J.current){J.current.focus();return}g&&(e&&!tn(e,s)?($(!1),m(""),requestAnimationFrame(()=>ie.current?.focus())):R.current?.focus())},[g,s,X?.id]);function B(b){C.current.clear(),ae.current.view=b,pe.current++,p(""),v(""),$(!1),m(""),l(b)}function Y(b){d({section:b}),B("setup")}U(()=>{!e?.savedEvalNavigation&&(e?.createDraftId||e?.draft.handoff?.id)&&B("author")},[e?.createDraftId,e?.draft.handoff?.id]),U(()=>{let b=x=>{let F=x.data;if(x.source===window.parent&&F?.type==="copilot-evals-open-setup"){Y("project");return}if(x.source===window.parent&&F?.type==="copilot-evals-open-compare"){B("compare");return}x.source!==window.parent||F?.type!=="copilot-evals-open-run"||typeof F.runId!="string"||!/^[a-zA-Z0-9-]{1,80}$/.test(F.runId)||be(F.runId)};return window.addEventListener("message",b),window.parent.postMessage({type:"copilot-evals-app-ready"},"*"),()=>window.removeEventListener("message",b)},[]);function le(b,x){if(!["ArrowLeft","ArrowRight","Home","End"].includes(b.key))return;b.preventDefault();let F=nt.findIndex(Pe=>Pe.id===x),ge=b.key==="Home"?0:b.key==="End"?nt.length-1:(F+(b.key==="ArrowRight"?1:-1)+nt.length)%nt.length;B(nt[ge].id),document.getElementById(`tab-${nt[ge].id}`).focus()}function ce(b){u(x=>Xt(x,s,b))}async function je(b,x={}){let F=++pe.current,ge={...ae.current},Pe=()=>pe.current===F&&ge.view===ae.current.view&&ge.project===ae.current.project&&ge.workingDirectory===ae.current.workingDirectory;p(""),v(b);try{let ze=await t(b,x);return Pe()&&ze.available===!1&&p(ze.message||"Couldn't read project files. See the read details."),Pe()&&!ze.discarded&&ze.available!==!1}catch(ze){return Pe()&&p(ze.message),!1}finally{Pe()&&v("")}}U(()=>{if(!r.runId||!e)return;let b=`${e.projectPath}:${r.runId}:${M}`;if(re.current!==b){if(e.history.status!=="ready"||!e.runs.some(x=>x.id===r.runId)){if(Q.current===b){e.history.status==="ready"&&p(`Saved run ${r.runId} is unavailable after refreshing history.`);return}Q.current=b,je("refresh").then(x=>{x&&D(F=>F+1)});return}re.current=b,$e.current=r.runId,u(x=>en(e,"results",x.results).rows.some(F=>F.id===r.runId)?x:Xt(x,"results",{query:r.runId,kind:"all",status:"all"})),je("preview_run",{id:r.runId}).then(x=>{x&&matchMedia("(max-width: 700px)").matches&&$(!0)})}},[e?.projectPath,e?.history.status,e?.runs,r.runId,M,V]);async function Ne(b){C.current.clear(),$e.current=b.id,await je(s==="definitions"&&e.savedEvalNavigation?"open_saved_eval":s==="results"?"preview_run":"preview_asset",s==="definitions"&&e.savedEvalNavigation?{relativePath:b.relativePath}:{id:b.id})&&b.kind!=="eval"&&matchMedia("(max-width: 700px)").matches&&m(b.id)}function we(){ee.current="",$(!1),requestAnimationFrame(()=>(oe.current.get($e.current)||ie.current)?.focus())}function et(){ee.current=X.id,$(b=>!b)}function xe(b){if(!["ArrowDown","ArrowUp","Home","End"].includes(b.key))return;b.preventDefault();let x=[...b.currentTarget.parentElement.querySelectorAll(".evidence-row")],F=x.indexOf(b.currentTarget),ge=b.key==="Home"?0:b.key==="End"?x.length-1:Math.min(x.length-1,Math.max(0,F+(b.key==="ArrowDown"?1:-1)));x[ge]?.focus()}let he=He.some(b=>b.id===s),_e=c[s]??c.definitions,de=e?en(e,he?s:"definitions",_e):null,Je=he&&s!=="diagnostics"&&de&&(s==="results"?e.history:e.discovery).lastSuccess?`${He.find(b=>b.id===s).label}: ${qe(de.matching)} matching. ${de.matching?`Page ${qe(de.page)} of ${qe(de.pages)}.`:"No matches."}`:"";if(U(()=>{let b=setTimeout(()=>P(Je),200);return()=>clearTimeout(b)},[Je]),!e)return a`<main aria-busy="true"><p role="status">Connecting to the workbench…</p></main>`;let q=tn(e,s),te=s==="results"?e.history:e.discovery,fe=s==="results"?"Saved results":"Project files",Ce=!!_e.query||_e.kind!=="all"||_e.status!=="all",K=e.readStatus==="reading"||h==="refresh"||w,Se=s==="results"?e.selectedRunId:s==="definitions"&&e.savedEvalNavigation?e.savedEvalNavigation.detail.id:e.selectedAssetId,me=q?.type==="run"?e.runs.find(b=>b.id===q.id):null,G=C.current.snapshot,Ie=JSON.stringify([e.projectPath,e.context.workingDirectory,me?.id,G?.kind??"report"]),tt=Vr(me?.source),We=b=>b==="definitions"?e.assets.filter(x=>x.kind==="eval").length:b==="assets"?e.assets.filter(x=>x.kind!=="eval").length:b==="results"?e.runs.length:e.issues.length,Ge=nt.some(b=>b.id===s)?s:nt[0].id,Ee=(b,x={})=>{let F=s!=="results"?"":b.counts?.failed>0||b.counts?.errored>0||b.status==="failed"||b.status==="cancelled"?"row-kind-attention":b.counts?.passed>0?"row-kind-success":"",ge=s==="results"?F==="row-kind-attention"?"triangle-alert":F==="row-kind-success"?"circle-check":"chart-column":Gt(b.kind);return a`<button key=${b.id} class=${`evidence-row ${Se===b.id?"selected":""}`}
      data-row-id=${b.id} aria-pressed=${s==="assets"?void 0:Se===b.id}
      aria-selected=${s==="assets"?Se===b.id:void 0} disabled=${!!h&&h!=="refresh"}
      ref=${Pe=>{Pe?oe.current.set(b.id,Pe):oe.current.delete(b.id)}}
      onKeyDown=${xe} onClick=${()=>Ne(b)} ...${x}>
      <span class="row-title"><span class="row-name-wrap"><${W} name=${ge} size=${14} />${b.name}</span><span class=${`row-kind ${F}`.trim()}>${s==="results"?`Saved ${b.status}`:b.kind}</span></span>
      <span class="row-path">${s==="results"?b.id:b.relativePath}</span>
      ${s==="results"&&b.evidenceDiagnostics?.length>0&&a`<span class="row-warning">Some activity details are unavailable. Open this result for details.</span>`}
      ${s==="results"?a`<span class="row-meta"><time datetime=${b.startedAt} title=${b.startedAt}>${Ue(b.startedAt)}</time>
        <span class=${F}>${b.mode} · ${qe(b.counts.passed)} passed · ${qe(b.counts.failed)} failed · ${qe(b.counts.errored)} errors</span></span>`:b.discoverySummary&&a`<span class="row-warning">${Ke(b.discoverySummary)}</span>`}
    </button>`},j=`${K?"Looking for evals":Pn(e)}. ${e.discovery.lastSuccess?`${We("definitions")} evals, ${We("assets")} project files`:"Files not loaded"}. ${e.history.lastSuccess?`${We("results")} saved runs`:"Results not loaded"}. ${e.discovery.stale||e.history.stale?"Showing earlier files.":""} ${h.startsWith("preview")?"Loading selected item.":q?`Selected ${q.title.slice(0,160)}. ${q.stale?"Showing earlier preview.":"Preview ready."}`:""}`;return a`
    <a class="skip-link" href="#workbench-panel">Skip to workspace</a>
    <main class="app-shell">
      <header class="workbench-header">
        <div class="header-left">
          <div class="header-title"><span class="evals-logo" aria-hidden="true"></span><h1>GitHub Copilot Evals</h1></div>
          <span class="header-divider" aria-hidden="true"></span>
          <div class="workspace-identity"><${bs} state=${e} invoke=${t} onBusy=${y} />
            <span class="context-origin">${e.context.mode==="session"?"Following workspace":e.context.mode==="manual"?"Manual override":"No workspace folder"}</span>
            <button class=${`ck-btn ck-btn-icon ${K?"is-spinning":""}`.trim()} type="button"
              aria-label=${K?"Looking\u2026":"Refresh"} title=${K?"Looking\u2026":e.lastRefresh?`Refresh (Checked ${Ue(e.lastRefresh)})`:"Refresh"}
              disabled=${K||!e.projectPath} onClick=${()=>je("refresh")}><${W} name="refresh-cw" size=${15} /></button>
          </div>
        </div>
        <${ms} key=${`${e.projectPath}:${e.context.workingDirectory}`} state=${e} invoke=${t}
          activeView=${s}
          onAuthor=${()=>B("author")} onSetup=${()=>Y("project")}
          onActivity=${()=>B("activity")} />
      </header>
      <p class="sr-only" role="status" aria-live="polite" aria-atomic="true">${j}</p>
      <p class="sr-only" role="status" aria-live="polite" aria-atomic="true">${A}</p>
      <nav class="view-navigation" aria-label="Workspace views">
        <div class="ck-tabs" role="tablist" aria-label="Workspace views">
          ${nt.map(b=>a`<button key=${b.id} class=${`ck-tab ${b.id==="author"?"ck-tab-studio-start":""}`.trim()} id=${`tab-${b.id}`} role="tab"
            aria-selected=${s===b.id} aria-controls=${`panel-${b.id}`} tabindex=${Ge===b.id?0:-1}
            onKeyDown=${x=>le(x,b.id)} onClick=${()=>B(b.id)}>
            <${W} name=${b.icon} size=${15} />${b.label}${He.some(x=>x.id===b.id)&&a`<span class="nav-count">${b.id==="diagnostics"||(b.id==="results"?e.history:e.discovery).lastSuccess?qe(We(b.id)):"?"}</span>`}
          </button>`)}
        </div>
        <div class="discovery-bar">
          <span class=${`status-dot status-${e.readStatus}`.trim()} aria-hidden="true"></span>
          <span class="discovery-status" role="status" title=${e.lastRefresh?`Checked ${Ue(e.lastRefresh)}`:void 0}>${K?"Looking for evals and saved results\u2026":Pn(e)}</span>
          ${["partial","unavailable"].includes(e.readStatus)&&a`<button class="ck-btn ck-btn-sm" onClick=${()=>B("diagnostics")}>View problems</button>`}
          ${!n&&a`<span class="connection" role="status">Reconnecting…</span>`}
          ${e.lastRefresh&&a`<time class="sr-only" datetime=${e.lastRefresh}>Checked ${Ue(e.lastRefresh)}</time>`}
        </div>
      </nav>
      ${he?a`<div id="workbench-panel" tabindex="-1" class=${`workbench ${g&&q?"show-detail":""} ${q?.kind==="eval"?"eval-selected":""} ${g&&q?.kind==="eval"?"eval-focused":""} ${s==="diagnostics"?"diagnostics-view":""}`}>
        <div class="list-area">
          ${He.map(b=>a`<section key=${b.id} id=${`panel-${b.id}`} role="tabpanel"
            aria-labelledby=${`tab-${b.id}`} hidden=${s!==b.id} tabindex="0"
            ref=${x=>{s===b.id&&(ie.current=x)}}
            aria-busy=${K||!!h}>
            ${s===b.id&&(s==="diagnostics"?a`
              <div class="section-heading"><h2>Problems reading this folder</h2><span class="ck-muted">No evals were run</span></div>
              ${["discovery","history"].map(x=>a`<section class="channel-diagnostic" key=${x}>
                <h3>${x==="discovery"?"Evals and project files":"Saved results"}</h3>
                <p>${e[x].status==="ready"?"Loaded":e[x].status==="error"?"Couldn't load":e[x].status==="reading"?"Loading\u2026":"Not loaded"}${e[x].stale?" \xB7 showing earlier files":""}</p>
                ${e[x].lastSuccess&&a`<p class="ck-muted">Last successful read ${Ue(e[x].lastSuccess)}</p>`}
                ${e[x].error&&a`<p class="field-error">${Ke(e[x].error)}</p>
                  <button class="ck-btn" disabled=${K} onClick=${()=>je("refresh")}>Try again</button>
                  ${x==="history"&&a`<${Wn} state=${e} invoke=${t} source="history" />`}`}
              </section>`)}
              ${e.issues.map((x,F)=>a`<div class="diagnostic" key=${F}><strong>File needs attention</strong><p>${Ke(x.message)}</p><code>${x.uri}</code>
                <${Wn} state=${e} invoke=${t} source="discovery" uri=${x.uri} /></div>`)}
              ${!e.issues.length&&a`<p class="ck-muted">${e.discovery.status==="ready"?"No file-reading problems found. Run an eval to check AI behavior.":"File-reading details are not available yet."}</p>`}
            `:a`
              <div class="section-heading"><h2>${He.find(x=>x.id===s).label}</h2>
                <span class="ck-muted matching-count">${te.lastSuccess?`${qe(de.matching)} matching \xB7 ${qe(de.total)} total`:"Not loaded"}</span></div>
              ${s==="definitions"&&e.projectConfigurations?.length>0&&a`<section class="channel-diagnostic" aria-label="Project configuration">
                <details>
                  <summary>Project configuration (${qe(e.projectConfigurations.length)} ${e.projectConfigurations.length===1?"file":"files"})</summary>
                  <div class="project-configuration-list" role="region" aria-label="Configuration files" tabindex="0">
                    <p class="ck-muted">Configuration files are not evals and cannot be run.</p>
                    ${e.projectConfigurations.map(x=>a`<div key=${x.uri}>
                      ${x.relativePath===".vally.yaml"?a`<button class="ck-btn" type="button" onClick=${()=>Y("project")}><${W} name="settings" size=${15} />.vally.yaml: Project configuration</button>`:a`<p><code>${x.relativePath}</code>: Nested configuration; select its folder as the project to configure it.</p>`}
                    </div>`)}
                  </div>
                </details>
              </section>`}
              ${te.error&&a`<div class="channel-error" role="alert">
                <strong>${te.status==="ready"?`${fe} are partial`:`${fe} couldn't load`}${te.stale?`. Showing earlier ${s==="results"?"results":"files"}`:""}</strong>
                <p>${Ke(te.error)}</p><button class="ck-btn" disabled=${K} onClick=${()=>je("refresh")}>Try again</button>
              </div>`}
              ${(K||te.stale)&&a`<p class="snapshot-notice">${K?"Looking for evals and saved results\u2026":"Showing files from the last successful refresh."}${de.total?" You can still browse them.":""}</p>`}
              <div class="filters">
                <input class="ck-input search" aria-label=${`Search ${He.find(x=>x.id===s).label.toLowerCase()}`} name=${`${s}-query`} autocomplete="off" spellcheck="false"
                  placeholder=${s==="results"?"Search names or run IDs":"Search names or paths"} value=${_e.query}
                  onInput=${x=>ce({query:x.target.value})} />
                ${s==="assets"&&a`<select class="ck-input" aria-label="File type" value=${_e.kind}
                  onChange=${x=>ce({kind:x.target.value})}>
                  ${["all","skill","agent","instruction","prompt","mcp-server","tool"].map(x=>a`<option value=${x}>${x==="all"?"All kinds":x}</option>`)}
                </select>`}
                ${s==="results"&&a`<select class="ck-input" aria-label="Saved status" value=${_e.status}
                  onChange=${x=>ce({status:x.target.value})}>
                  ${["all",...new Set(e.runs.map(x=>x.status))].map(x=>a`<option value=${x}>${x==="all"?"All statuses":x}</option>`)}
                </select>`}
                <select class="ck-input" aria-label=${`Sort ${He.find(x=>x.id===s).label.toLowerCase()}`} value=${_e.sort} onChange=${x=>ce({sort:x.target.value})}>
                  ${(s==="results"?[["newest","Newest first"],["name","Name"],["status","Saved status"]]:[["name","Name"],["path","Path"]]).map(([x,F])=>a`<option value=${x}>${F}</option>`)}
                </select>
                <button class="ck-btn clear-filter" disabled=${!Ce} onClick=${()=>ce({query:"",kind:"all",status:"all"})}>Clear</button>
              </div>
              ${f&&a`<p class="field-error" role="alert">${f}</p>`}
              <div class="items-list" role="group" aria-label=${`${He.find(x=>x.id===s).label} inventory`}>
                ${s==="assets"&&de.rows.length?a`<${Xr} key=${e.projectPath} groups=${e.assetGroups??[]} rows=${de.rows} query=${_e.query} renderRow=${Ee} />`:de.rows.map(x=>Ee(x))}
              </div>
              ${!de.rows.length&&a`<div class="empty-state"><${W} name="inbox" size=${24} />
                <h3>${K?"Looking in this folder\u2026":e.readStatus==="idle"?"Choose a folder to get started":te.status==="error"?`${fe} couldn't load`:Ce?"No matches":`No ${He.find(x=>x.id===s).label.toLowerCase()} found`}</h3>
                <p>${K?"Your files will appear here when loading finishes.":e.readStatus==="idle"?"Open the folder picker above, browse to a folder and choose Load.":Ce?"Try another search or clear the filters.":s==="definitions"?"Create an eval to describe the response you expect from AI.":s==="results"?"Run an eval to see its results here.":"No supported files were found in this project. Personal or installed skills may still exist elsewhere."}</p>
                ${!Ce&&!K&&te.status==="ready"&&s==="assets"&&a`<${bt} projectPath=${e.projectPath} invoke=${t} />`}
                ${!Ce&&!K&&te.status==="ready"&&s==="definitions"&&a`<button class="ck-btn ck-btn-primary" onClick=${()=>B("author")}>Create eval</button>`}
                ${Ce&&a`<button class="ck-btn" onClick=${()=>ce({query:"",kind:"all",status:"all"})}>Clear filters</button>`}
              </div>`}
              <div class="pagination" role="group" aria-label="Inventory pagination">
                <span class="ck-muted">${qe(de.first)}–${qe(de.last)} of ${qe(de.matching)}</span>
                <button class="ck-btn" disabled=${de.page===1} onClick=${()=>ce({page:de.page-1})}>Previous</button>
                <span>Page ${qe(de.page)} of ${qe(de.pages)}</span>
                <button class="ck-btn" disabled=${de.page===de.pages} onClick=${()=>ce({page:de.page+1})}>Next</button>
              </div>
            `)}
          </section>`)}
        </div>
        ${s!=="diagnostics"&&a`<aside class="inspector" id=${q?.kind==="eval"?"eval-details":void 0}
          aria-label="Details" aria-busy=${h.startsWith("preview")||G?.status==="loading"}>
          <div class=${`inspector-heading ${q?.kind==="eval"?"eval-detail-heading":""}`}>
            ${q?.kind==="eval"?a`<div class="eval-header-controls">
              <button class="ck-btn" type="button" onClick=${we} title="Back to the eval list"><${W} name="arrow-left" />Back</button>
              <button ref=${J} class="ck-btn eval-size-toggle" type="button"
                onClick=${et} aria-expanded=${g} aria-controls="eval-details"
                title=${g?"Return to the normal view":"Expand eval details"}>
                <${W} name=${g?"minimize-2":"maximize-2"} />${g?"Contract":"Expand"}
              </button>
            </div>`:a`<button class="ck-btn mobile-back" onClick=${we}>Back to list</button>`}
            <h2 ref=${R} tabindex="-1">${q?q.title:"Details"}</h2>
          </div>
          ${q&&(e.previewError||g&&f)&&a`<p class="field-error" role="alert">${Ke(e.previewError||f)}</p>`}
          ${q?a`
            <div class="inspector-meta"><span class="ck-badge">${q.type==="run"?"Saved report":q.kind==="eval"?"Saved eval":"Source preview"}</span>
              <code>${q.relativePath??q.id}</code></div>
            ${q.type==="asset"&&a`<${vs} key=${`${e.projectPath}:${q.id}`} state=${e} invoke=${t} assetId=${q.id}
              onAuthor=${()=>B("author")} onActivity=${()=>B("activity")} onBaseline=${b=>{T(b),B("behavior")}} />`}
            <p class="ck-muted evidence-notice">${q.type==="run"?"Saved results may not reflect your current files.":"Preview may be shortened. Recognized secrets are hidden."}</p>
            ${(q.stale||K)&&a`<div class="snapshot-notice" role="status">Previous preview from ${Ue(q.inspectedAt)}. It has not been reread.
              <button class="ck-btn" disabled=${!!h||K} onClick=${()=>je(s==="definitions"&&e.savedEvalNavigation?"open_saved_eval":q.type==="run"?"preview_run":"preview_asset",s==="definitions"&&e.savedEvalNavigation?{relativePath:q.relativePath}:{id:q.id})}>Reload preview</button></div>`}
            ${q.sourceHash&&a`<details class="metadata"><summary>File details</summary><dl><dt>SHA-256</dt><dd><code>${q.sourceHash}</code></dd><dt>Preview read</dt><dd>${Ue(q.inspectedAt)}</dd></dl></details>`}
            ${me&&a`<details class="metadata"><summary>Run details</summary>
              <dl><dt>Original run ID</dt><dd><code>${me.id}</code></dd><dt>Started</dt><dd><time datetime=${me.startedAt} title=${me.startedAt}>${Ue(me.startedAt)}</time></dd>
                ${me.endedAt&&a`<dt>Ended</dt><dd><time datetime=${me.endedAt} title=${me.endedAt}>${Ue(me.endedAt)}</time></dd>`}
                <dt>Recorded mode</dt><dd>${me.mode}</dd>
                <dt>Workspace</dt><dd><code>${me.workspaceUri||"Not recorded"}</code></dd>
                <dt>Evaluation source</dt><dd><code>${tt.text}</code>${tt.truncated&&a`<p>Some saved details are too long to show here. The original saved results are unchanged.</p>`}</dd>
                <dt>Native telemetry</dt><dd>${me.nativeTelemetryReported?"Reported; check the saved evidence":"Not reported"}</dd></dl>
              <p class="ck-muted">These details are shown as saved. Check for private information before sharing.</p>
            </details>`}
            ${me&&a`<div class="evidence-actions evidence-content-tabs" role="group" aria-label="Saved evidence"><span class="evidence-group-label" aria-hidden="true">Content</span>${bn(me).map(({kind:b,label:x})=>a`
              <button class="ck-btn" type="button" disabled=${!!h||K}
                aria-pressed=${(G?.kind??"report")===b} aria-controls="results-evidence"
                onClick=${()=>C.current.read(b)}>${x}</button>`)}</div>`}
            ${h.startsWith("preview")?a`<p role="status">Loading selected item…</p>`:me&&G?a`
              <section id="results-evidence" aria-label=${`${lt.find(b=>b.kind===G.kind).label} evidence`}>
                <p class="ck-muted evidence-notice">${lt.find(b=>b.kind===G.kind).label} · <code>${G.id}</code>.
                  Read-only, size-limited text. Original saved evidence is unchanged.</p>
                ${G.focus&&a`<p class="ck-muted evidence-focus-notice" role="status">Focused attempt: <code>${G.focus.caseId}</code> (attempt ${G.focus.attempt+1}${G.focus.configuration?`, ${G.focus.configuration}`:""}${G.focus.turn!==null?`, turn ${G.focus.turn}`:""}${G.focus.graderId?`, check ${G.focus.graderId}`:""})</p>`}
                ${(G.stale||e.history.stale||K)&&a`<p class="snapshot-notice" role="status">This is an earlier copy. Select the evidence again to reload it.</p>`}
                ${G.status==="loading"?a`<p role="status">Loading ${lt.find(b=>b.kind===G.kind).label.toLowerCase()}…</p>`:G.status==="error"?a`<p class="field-error" role="alert">${Ke(G.error)}</p>`:a`${G.kind==="report"&&!G.focus?a`<${Vn} key=${Ie} text=${G.text} run=${me} detail=${q}
                      onSelectEvidence=${(b,x)=>C.current.read(b,x)} disabled=${!!h||K} />`:a`<pre tabindex="0" role="region" aria-label=${`Saved ${G.kind} text`}>${G.text}</pre>`}
                    ${!G.text&&a`<p role="status">No saved ${G.kind} text was returned for this run.</p>`}`}
              </section>`:me?a`<section id="results-evidence" aria-label="Report evidence"><${Vn} key=${Ie} text=${q.text} run=${me} detail=${q}
                  onSelectEvidence=${(b,x)=>C.current.read(b,x)} disabled=${!!h||K} /></section>`:q.kind==="eval"?a`<${xs} key=${`${e.projectPath}:${q.id}:${q.sourceHash}`}
                    detail=${q} stale=${q.stale||K} />`:a`<pre tabindex="0" role="region" aria-label=${q.type==="run"?"Original saved report text":"Redacted source text"}>${q.text}</pre>`}
          `:a`<div class="inspector-empty"><${W} name="layout-list" size=${24} /><p>Choose an item to see its file contents or saved results.</p><p class="intro-help">An eval checks whether an AI response meets your expectations. Choose an eval on the left or create one with Copilot.</p></div>`}
        </aside>`}
      </div>`:a`<div id="workbench-panel" tabindex="-1" class="studio-surface"><section id=${`panel-${s}`} role="tabpanel" aria-labelledby=${s==="behavior"?"behavior-heading":`tab-${s}`}>
        ${s==="author"&&a`<${gs} key=${e.projectPath} state=${e} invoke=${t} draftCache=${se} onActivity=${()=>B("definitions")} />`}
        ${s==="activity"&&a`<${zn} key=${e.projectPath} state=${e} invoke=${t} onDefinitions=${()=>B("definitions")} onOpenRun=${be} />`}
        ${s==="compare"&&a`<${ln} key=${e.projectPath} state=${e} invoke=${t} compareCache=${ke} onOpenRun=${be} />`}
        ${s==="setup"&&a`<${qn} key=${`${e.projectPath}:${e.context.workingDirectory}:${e.context.mode}`}
          state=${e} invoke=${t} target=${i} />`}
        ${s==="behavior"&&I&&a`<${Hn} key=${`${e.projectPath}:${I.id}`} state=${e} asset=${I} invoke=${t}
          onClose=${()=>B("assets")} onPrepared=${()=>B("activity")} />`}
      </section></div>`}
      ${nt.filter(b=>he?!He.some(x=>x.id===b.id):b.id!==s).map(b=>a`
        <section key=${`inactive-${b.id}`} id=${`panel-${b.id}`} role="tabpanel" aria-labelledby=${`tab-${b.id}`} hidden></section>`)}
    </main>
  `}wr({view:e=>a`<${Ks} ...${e} />`});
