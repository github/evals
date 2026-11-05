var Bt,re,or,kt,ir,Kn,_s,Ut={},lr=[],Ss=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function it(e,t){for(var n in t)e[n]=t[n];return e}function cr(e){var t=e.parentNode;t&&t.removeChild(e)}function dr(e,t,n){var r,o,s,c={};for(s in t)s=="key"?r=t[s]:s=="ref"?o=t[s]:c[s]=t[s];if(arguments.length>2&&(c.children=arguments.length>3?Bt.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)c[s]===void 0&&(c[s]=e.defaultProps[s]);return zt(e,c,r,o,null)}function zt(e,t,n,r,o){var s={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++or};return re.vnode!=null&&re.vnode(s),s}function Kt(e){return e.children}function qt(e,t){this.props=e,this.context=t}function ht(e,t){if(t==null)return e.__?ht(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ht(e):null}function ur(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ur(e)}}function Jn(e){(!e.__d&&(e.__d=!0)&&kt.push(e)&&!Wt.__r++||Kn!==re.debounceRendering)&&((Kn=re.debounceRendering)||ir)(Wt)}function Wt(){for(var e;Wt.__r=kt.length;)e=kt.sort(function(t,n){return t.__v.__b-n.__v.__b}),kt=[],e.some(function(t){var n,r,o,s,c,i;t.__d&&(c=(s=(n=t).__v).__e,(i=n.__P)&&(r=[],(o=it({},s)).__v=s.__v+1,pn(i,s,o,n.__n,i.ownerSVGElement!==void 0,s.__h!=null?[c]:null,r,c??ht(s),s.__h),mr(r,s),s.__e!=c&&ur(s)))})}function pr(e,t,n,r,o,s,c,i,l,u){var d,f,v,h,g,b,$,k=r&&r.__k||lr,m=k.length;for(n.__k=[],d=0;d<t.length;d++)if((h=n.__k[d]=(h=t[d])==null||typeof h=="boolean"?null:typeof h=="string"||typeof h=="number"||typeof h=="bigint"?zt(null,h,null,null,h):Array.isArray(h)?zt(Kt,{children:h},null,null,null):h.__b>0?zt(h.type,h.props,h.key,null,h.__v):h)!=null){if(h.__=n,h.__b=n.__b+1,(v=k[d])===null||v&&h.key==v.key&&h.type===v.type)k[d]=void 0;else for(f=0;f<m;f++){if((v=k[f])&&h.key==v.key&&h.type===v.type){k[f]=void 0;break}v=null}pn(e,h,v=v||Ut,o,s,c,i,l,u),g=h.__e,(f=h.ref)&&v.ref!=f&&($||($=[]),v.ref&&$.push(v.ref,null,h),$.push(f,h.__c||g,h)),g!=null?(b==null&&(b=g),typeof h.type=="function"&&h.__k!=null&&h.__k===v.__k?h.__d=l=fr(h,l,e):l=hr(e,h,v,k,g,l),u||n.type!=="option"?typeof n.type=="function"&&(n.__d=l):e.value=""):l&&v.__e==l&&l.parentNode!=e&&(l=ht(v))}for(n.__e=b,d=m;d--;)k[d]!=null&&(typeof n.type=="function"&&k[d].__e!=null&&k[d].__e==n.__d&&(n.__d=ht(r,d+1)),gr(k[d],k[d]));if($)for(d=0;d<$.length;d++)vr($[d],$[++d],$[++d])}function fr(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,t=typeof o.type=="function"?fr(o,t,n):hr(n,o,o,e.__k,o.__e,t));return t}function hr(e,t,n,r,o,s){var c,i,l;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||o!=s||o.parentNode==null)e:if(s==null||s.parentNode!==e)e.appendChild(o),c=null;else{for(i=s,l=0;(i=i.nextSibling)&&l<r.length;l+=2)if(i==o)break e;e.insertBefore(o,s),c=s}return c!==void 0?c:o.nextSibling}function Gn(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Ss.test(t)?n:n+"px"}function Ft(e,t,n,r,o){var s;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Gn(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Gn(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")s=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=n,n?r||e.addEventListener(t,s?Zn:Yn,s):e.removeEventListener(t,s?Zn:Yn,s);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Yn(e){this.l[e.type+!1](re.event?re.event(e):e)}function Zn(e){this.l[e.type+!0](re.event?re.event(e):e)}function pn(e,t,n,r,o,s,c,i,l){var u,d,f,v,h,g,b,$,k,m,w,y=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,i=t.__e=n.__e,t.__h=null,s=[i]),(u=re.__b)&&u(t);try{e:if(typeof y=="function"){if($=t.props,k=(u=y.contextType)&&r[u.__c],m=u?k?k.props.value:u.__:r,n.__c?b=(d=t.__c=n.__c).__=d.__E:("prototype"in y&&y.prototype.render?t.__c=d=new y($,m):(t.__c=d=new qt($,m),d.constructor=y,d.render=Ts),k&&k.sub(d),d.props=$,d.state||(d.state={}),d.context=m,d.__n=r,f=d.__d=!0,d.__h=[]),d.__s==null&&(d.__s=d.state),y.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=it({},d.__s)),it(d.__s,y.getDerivedStateFromProps($,d.__s))),v=d.props,h=d.state,f)y.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(y.getDerivedStateFromProps==null&&$!==v&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps($,m),!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate($,d.__s,m)===!1||t.__v===n.__v){d.props=$,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(A){A&&(A.__=t)}),d.__h.length&&c.push(d);break e}d.componentWillUpdate!=null&&d.componentWillUpdate($,d.__s,m),d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(v,h,g)})}d.context=m,d.props=$,d.state=d.__s,(u=re.__r)&&u(t),d.__d=!1,d.__v=t,d.__P=e,u=d.render(d.props,d.state,d.context),d.state=d.__s,d.getChildContext!=null&&(r=it(it({},r),d.getChildContext())),f||d.getSnapshotBeforeUpdate==null||(g=d.getSnapshotBeforeUpdate(v,h)),w=u!=null&&u.type===Kt&&u.key==null?u.props.children:u,pr(e,Array.isArray(w)?w:[w],t,n,r,o,s,c,i,l),d.base=t.__e,t.__h=null,d.__h.length&&c.push(d),b&&(d.__E=d.__=null),d.__e=!1}else s==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=js(n.__e,t,n,r,o,s,c,l);(u=re.diffed)&&u(t)}catch(A){t.__v=null,(l||s!=null)&&(t.__e=i,t.__h=!!l,s[s.indexOf(i)]=null),re.__e(A,t,n)}}function mr(e,t){re.__c&&re.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){re.__e(r,n.__v)}})}function js(e,t,n,r,o,s,c,i){var l,u,d,f=n.props,v=t.props,h=t.type,g=0;if(h==="svg"&&(o=!0),s!=null){for(;g<s.length;g++)if((l=s[g])&&(l===e||(h?l.localName==h:l.nodeType==3))){e=l,s[g]=null;break}}if(e==null){if(h===null)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,v.is&&v),s=null,i=!1}if(h===null)f===v||i&&e.data===v||(e.data=v);else{if(s=s&&Bt.call(e.childNodes),u=(f=n.props||Ut).dangerouslySetInnerHTML,d=v.dangerouslySetInnerHTML,!i){if(s!=null)for(f={},g=0;g<e.attributes.length;g++)f[e.attributes[g].name]=e.attributes[g].value;(d||u)&&(d&&(u&&d.__html==u.__html||d.__html===e.innerHTML)||(e.innerHTML=d&&d.__html||""))}if((function(b,$,k,m,w){var y;for(y in k)y==="children"||y==="key"||y in $||Ft(b,y,null,k[y],m);for(y in $)w&&typeof $[y]!="function"||y==="children"||y==="key"||y==="value"||y==="checked"||k[y]===$[y]||Ft(b,y,$[y],k[y],m)})(e,v,f,o,i),d)t.__k=[];else if(g=t.props.children,pr(e,Array.isArray(g)?g:[g],t,n,r,o&&h!=="foreignObject",s,c,s?s[0]:n.__k&&ht(n,0),i),s!=null)for(g=s.length;g--;)s[g]!=null&&cr(s[g]);i||("value"in v&&(g=v.value)!==void 0&&(g!==e.value||h==="progress"&&!g)&&Ft(e,"value",g,f.value,!1),"checked"in v&&(g=v.checked)!==void 0&&g!==e.checked&&Ft(e,"checked",g,f.checked,!1))}return e}function vr(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){re.__e(r,n)}}function gr(e,t,n){var r,o;if(re.unmount&&re.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||vr(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(s){re.__e(s,t)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&gr(r[o],t,typeof e.type!="function");n||e.__e==null||cr(e.__e),e.__e=e.__d=void 0}function Ts(e,t,n){return this.constructor(e,n)}function fn(e,t,n){var r,o,s;re.__&&re.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,s=[],pn(t,e=(!r&&n||t).__k=dr(Kt,null,[e]),o||Ut,Ut,t.ownerSVGElement!==void 0,!r&&n?[n]:o?null:t.firstChild?Bt.call(t.childNodes):null,s,!r&&n?n:o?o.__e:t.firstChild,r),mr(s,e)}Bt=lr.slice,re={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(s){e=s}throw e}},or=0,qt.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=it({},this.state),typeof e=="function"&&(e=e(it({},n),this.props)),e&&it(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Jn(this))},qt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Jn(this))},qt.prototype.render=Kt,kt=[],ir=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Wt.__r=0,_s=0;var wt,Je,Qn,Vt=0,dn=[],Xn=re.__b,er=re.__r,tr=re.diffed,nr=re.__c,rr=re.unmount;function Jt(e,t){re.__h&&re.__h(Je,e,Vt||t),Vt=0;var n=Je.__H||(Je.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function x(e){return Vt=1,As($r,e)}function As(e,t,n){var r=Jt(wt++,2);return r.t=e,r.__c||(r.__=[n?n(t):$r(void 0,t),function(o){var s=r.t(r.__[0],o);r.__[0]!==s&&(r.__=[s,r.__[1]],r.__c.setState({}))}],r.__c=Je),r.__}function q(e,t){var n=Jt(wt++,3);!re.__s&&hn(n.__H,t)&&(n.__=e,n.__H=t,Je.__H.__h.push(n))}function Fe(e,t){var n=Jt(wt++,4);!re.__s&&hn(n.__H,t)&&(n.__=e,n.__H=t,Je.__h.push(n))}function R(e){return Vt=5,Gt(function(){return{current:e}},[])}function Gt(e,t){var n=Jt(wt++,7);return hn(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Ps(){dn.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(Ht),e.__H.__h.forEach(un),e.__H.__h=[]}catch(t){e.__H.__h=[],re.__e(t,e.__v)}}),dn=[]}re.__b=function(e){Je=null,Xn&&Xn(e)},re.__r=function(e){er&&er(e),wt=0;var t=(Je=e.__c).__H;t&&(t.__h.forEach(Ht),t.__h.forEach(un),t.__h=[])},re.diffed=function(e){tr&&tr(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(dn.push(t)!==1&&Qn===re.requestAnimationFrame||((Qn=re.requestAnimationFrame)||function(n){var r,o=function(){clearTimeout(s),sr&&cancelAnimationFrame(r),setTimeout(n)},s=setTimeout(o,100);sr&&(r=requestAnimationFrame(o))})(Ps)),Je=void 0},re.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ht),n.__h=n.__h.filter(function(r){return!r.__||un(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],re.__e(r,n.__v)}}),nr&&nr(e,t)},re.unmount=function(e){rr&&rr(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(Ht)}catch(n){re.__e(n,t.__v)}};var sr=typeof requestAnimationFrame=="function";function Ht(e){var t=Je;typeof e.__c=="function"&&e.__c(),Je=t}function un(e){var t=Je;e.__c=e.__(),Je=t}function hn(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function $r(e,t){return typeof t=="function"?t(e):t}var br=function(e,t,n,r){var o;t[0]=0;for(var s=1;s<t.length;s++){var c=t[s++],i=t[s]?(t[0]|=c?1:2,n[t[s++]]):t[++s];c===3?r[0]=i:c===4?r[1]=Object.assign(r[1]||{},i):c===5?(r[1]=r[1]||{})[t[++s]]=i:c===6?r[1][t[++s]]+=i+"":c?(o=e.apply(i,br(e,i,n,["",null])),r.push(o),i[0]?t[0]|=2:(t[s-2]=0,t[s]=o)):r.push(i)}return r},ar=new Map,a=function(e){var t=ar.get(this);return t||(t=new Map,ar.set(this,t)),(t=br(this,t.get(e)||(t.set(e,t=(function(n){for(var r,o,s=1,c="",i="",l=[0],u=function(v){s===1&&(v||(c=c.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,v,c):s===3&&(v||c)?(l.push(3,v,c),s=2):s===2&&c==="..."&&v?l.push(4,v,0):s===2&&c&&!v?l.push(5,0,!0,c):s>=5&&((c||!v&&s===5)&&(l.push(s,0,c,o),s=6),v&&(l.push(s,v,0,o),s=6)),c=""},d=0;d<n.length;d++){d&&(s===1&&u(),u(d));for(var f=0;f<n[d].length;f++)r=n[d][f],s===1?r==="<"?(u(),l=[l],s=3):c+=r:s===4?c==="--"&&r===">"?(s=1,c=""):c=r+c[0]:i?r===i?i="":c+=r:r==='"'||r==="'"?i=r:r===">"?(u(),s=1):s&&(r==="="?(s=5,o=c,c=""):r==="/"&&(s<5||n[d][f+1]===">")?(u(),s===3&&(l=l[0]),s=l,(l=l[0]).push(2,0,s),s=0):r===" "||r==="	"||r===`
`||r==="\r"?(u(),s=2):c+=r),s===3&&c==="!--"&&(s=4,l=l[0])}return u(),l})(e)),t),arguments,[])).length>1?t:t[0]}.bind(dr);function yr(e,t,{whenVisible:n=!0,immediate:r=!1}={}){if(!t||t<=0)return()=>{};let o=!1,s=async()=>{if(!o&&!(n&&typeof document<"u"&&document.visibilityState!=="visible")){o=!0;try{await e()}catch{}finally{o=!1}}};r&&s();let c=setInterval(s,t*1e3);return()=>clearInterval(c)}var Ct=class extends Error{constructor(t,n){super(n),this.name="CanvasActionError",this.code=t}};function kr(e,t){return!!(e&&t&&typeof e.requestId=="string"&&e.requestId&&e.requestId===t.requestId&&e.readStatus!=="reading"&&t.readStatus==="reading")}function Is({onState:e,onConnected:t,EventSourceImpl:n,fetchImpl:r=(...o)=>fetch(...o)}={}){let o=null,s=!1,c=!1,i=0,l=0,u;async function d(h,g){let $=await(await r("./action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({actionName:h,input:g??{}})})).json().catch(()=>({ok:!1}));if(!$?.ok)throw new Ct($?.code||"error",$?.message||"action failed");return(h==="refresh"||h==="preview_run"||h==="save_draft")&&await f({required:!0}),$.result}async function f({required:h=!1}={}){let g=i,b=++l,$;try{let m=await r("./state");if(!m.ok){if(h)throw new Ct("state-unavailable","The refreshed Canvas state could not be read. Try again.");return}$=await m.json()}catch(m){if(h)throw m;return}let k=!!(o&&$&&typeof o.requestId=="string"&&o.requestId&&o.requestId===$.requestId&&o.readStatus==="reading"&&$.readStatus!=="reading");c||b!==l||kr(o,$)||g!==i&&!k||(o=$,e?.(o,s))}let v=n||globalThis.EventSource;return f(),v&&(u=new v("./events"),u.onmessage=h=>{if(c)return;let g;try{g=JSON.parse(h.data)}catch{return}kr(o,g)||(i++,o=g,s=!0,e?.(o,s))},u.onopen=()=>{c||(s=!0,t?.(s))},u.onerror=()=>{c||(s=!1,t?.(s))}),{invoke:d,refresh:f,close(){c=!0,s=!1,l++,u?.close()},get state(){return o},get connected(){return s}}}function wr({view:e,mount:t,onState:n,poll:r}={}){let o=t||document.getElementById("app")||document.body;o.replaceChildren();let s=null,c=!1,i,l=()=>fn(e({state:s,invoke:i.invoke,connected:c}),o);i=Is({onState:(f,v)=>{s=f,c=v,n?.(f),l()},onConnected:f=>{c=f,l()}});let u=r?yr(()=>r.action?i.invoke(r.action,r.input):i.refresh(),r.seconds,{whenVisible:r.whenVisible,immediate:r.immediate}):()=>{},d=()=>{u(),i.close(),window.removeEventListener("pagehide",d)};return window.addEventListener("pagehide",d,{once:!0}),{invoke:i.invoke,refresh:i.refresh,stopPoll:u,close:d,get state(){return s}}}var xt={circle:[["circle",{cx:"12",cy:"12",r:"10"}]],"circle-check":[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]],inbox:[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}]],"layout-list":[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]],plus:[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]],"trash-2":[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]]},mn={};var Es="0 0 24 24",Rs=2;function Cr(e){if(typeof e!="string")return null;if(Object.hasOwn(xt,e))return xt[e];if(Object.hasOwn(mn,e)){let t=mn[e];if(Object.hasOwn(xt,t))return xt[t]}return null}function Ns(e){return e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}function Os(e){return e.map(([t,n])=>{let r=Object.entries(n).map(([o,s])=>`${Ns(o)}="${Ds(s)}"`).join(" ");return`<${t} ${r} />`}).join("")}function xr(e){return Cr(e)!=null}function _r({name:e,size:t=16,class:n="",label:r}){let o=Cr(e);if(!o)return null;let s={xmlns:"http://www.w3.org/2000/svg",class:`lucide lucide-${e} ck-icon${n?" "+n:""}`,width:t,height:t,viewBox:Es,fill:"none",stroke:"currentColor","stroke-width":Rs,"stroke-linecap":"round","stroke-linejoin":"round",dangerouslySetInnerHTML:{__html:Os(o)}};return r?(s.role="img",s["aria-label"]=r):s["aria-hidden"]="true",a`<svg ...${s}></svg>`}function Ds(e){return String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}var Sr={"file-code":["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z","M14 2v6h6","m10 12-3 3 3 3","m14 12 3 3-3 3"],copy:["M20 8H10a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z","M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"],check:["M20 6 9 17l-5-5"],folder:["M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"],layers:["m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z","m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65","m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"],"chevron-right":["m9 18 6-6-6-6"],"chevron-down":["m6 9 6 6 6-6"],"chevrons-up-down":["m7 15 5 5 5-5","m7 9 5-5 5 5"],"chevrons-down-up":["m7 20 5-5 5 5","m7 4 5 5 5-5"],"arrow-up":["M12 19V5","m5 12 7-7 7 7"],"arrow-left":["m12 19-7-7 7-7","M5 12h14"],"maximize-2":["M15 3h6v6","m21 3-7 7","m3 21 7-7","M9 21H3v-6"],"minimize-2":["M4 14h6v6","M20 10h-6V4","m14 10 7-7","m3 21 7-7"],"refresh-cw":["M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8","M21 3v5h-5","M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16","M8 16H3v5"],sparkles:["M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z","M20 3v4","M22 5h-4"],"wand-sparkles":["m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72","m14 7 3 3","M5 6v4","M19 14v4","M10 2v2","M7 8H3","M21 16h-4","M11 3H9"],settings:["M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z","M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"],shield:["M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"],"shield-check":["M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z","m9 12 2 2 4-4"],play:["M6 3 20 12 6 21 6 3Z"],"flask-conical":["M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2","M8.5 2h7","M7 16h10"],"chart-column":["M3 3v16a2 2 0 0 0 2 2h16","M18 17V9","M13 17V5","M8 17v-3"],"triangle-alert":["m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z","M12 9v4","M12 17h.01"],"git-compare":["M5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z","M19 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z","M12 6h5a2 2 0 0 1 2 2v7","m15 9-3-3 3-3","M12 18H7a2 2 0 0 1-2-2V9","m9 15 3 3-3 3"],bot:["M12 8V4H8","M6 8h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z","M2 14h2","M20 14h2","M15 13v2","M9 13v2"],"book-open":["M12 7v14","M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"],"message-square":["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"],plug:["M12 22v-5","M9 8V2","M15 8V2","M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"],wrench:["M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"],"arrow-up-right":["M7 7h10v10","M7 17 17 7"]};function Yt(e){return{eval:"flask-conical",skill:"wand-sparkles",agent:"bot",instruction:"book-open",prompt:"message-square","mcp-server":"plug",tool:"wrench"}[e]??"layers"}function H({name:e,size:t=16}){return xr(e)?a`<${_r} name=${e} size=${t} />`:Object.hasOwn(Sr,e)?a`<svg class="ck-icon" width=${t} height=${t} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    ${Sr[e].map(n=>a`<path d=${n} />`)}
  </svg>`:null}var _t=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),Zt=e=>typeof e=="number"&&Number.isSafeInteger(e)&&e>=0?e:null,lt=[{kind:"report",label:"Report"},{kind:"trajectory",label:"Conversation trace"},{kind:"output",label:"Output"},{kind:"source",label:"Report source"}];function vn(e){return e?.mode==="health"?lt.filter(t=>t.kind!=="trajectory"):lt}function gn(e,t){let n=e?.selectedRunId;return t!=="results"||!n||e.detail?.type!=="run"||e.detail.id!==n||!e.runs.some(r=>r.id===n)?null:{id:n,project:e.projectPath,workingDirectory:e.context.workingDirectory,revision:e.requestId}}function jr(e,t){if(typeof e!="string"||e.includes("\0"))return null;let n=t?e.replaceAll("\\","/").toLowerCase():e,r=t?/^\/\/([^/]+)\/+([^/]+)(?:\/|$)/.exec(n):null,o=t?/^[a-z]:\//.exec(n)?.[0]??r?.[0]:n.startsWith("/")?"/":null;if(!o)return null;let s=[];for(let i of n.slice(o.length).split("/"))!i||i==="."||(i===".."?s.pop():s.push(i));return`${r?`//${r[1]}/${r[2]}`:o.replace(/\/$/,"")}/${s.join("/")}`}async function Ls(e,t,n){if(!t)return e;let r=String(e??"");if(/Display limit reached\.|\[Display truncated;\s*original (?:saved )?evidence/i.test(r))throw new Error("The saved evidence for this attempt is incomplete.");let s=/^##\s+(?:validation\.log|engine-output\.jsonl|engine\.log)\r?\n/m.test(r)?r.split(/(?=^##\s+(?:validation\.log|engine-output\.jsonl|engine\.log)\r?\n)/m).find(m=>/^##\s+engine-output\.jsonl\r?\n/.test(m))?.replace(/^##\s+engine-output\.jsonl\r?\n/,"")??"":!/^#\s+/m.test(r)&&!/^###?\s+/m.test(r)&&!/^Check ID:\s+/m.test(r)?r:"",c=s?s.split(/\r?\n/):[],i=[];for(let m of c)if(m.startsWith("{"))try{let w=JSON.parse(m);_t(w)&&w.type==="trial-result"&&i.push({raw:m,row:w})}catch{throw new Error("The saved evidence for this attempt is incomplete.")}if(i.length){let m=t.artifact;if(m){let T=new TextEncoder().encode(JSON.stringify([m.itemId,m.evalName,m.evalFilePath,t.configuration,t.model,t.attempt]));if([...new Uint8Array(await crypto.subtle.digest("SHA-256",T))].map(_=>_.toString(16).padStart(2,"0")).join("")!==t.caseId)throw new Error("The selected attempt doesn't match the saved result.")}let w=m?i.filter(({row:T})=>T.itemId===m.itemId):[],y=typeof n=="string"&&/^(?:[a-z]:[\\/]|[\\/]{2})/i.test(n),A=jr(m?.evalFilePath,y);if((m?i.filter(({row:T})=>T.evalName===m.evalName&&(A===null?T.evalFilePath===m.evalFilePath:jr(T.evalFilePath,y)===A)&&T.stimulus===m.stimulus&&(T.trialIndex===void 0&&m.totalTrials===1?0:T.trialIndex)===t.attempt):[]).length>1)throw new Error("The saved evidence matches more than one attempt. It can't be shown as this attempt's evidence.");let P=w.length===1?w[0]:null;if(P){let T=P.row,D=typeof T.trajectory?.metadata?.model=="string"?T.trajectory.metadata.model:T.model,_=D==null||typeof D=="string"&&D.trim().toLowerCase()==="unknown"?null:D,pe=m.totalTrials===1&&t.attempt===0&&T.trialIndex===void 0&&T.totalTrials===void 0;(T.evalName!==m.evalName||T.evalFilePath!==m.evalFilePath||T.stimulus!==m.stimulus||T.variant!==t.configuration||_!==t.model||!pe&&(T.trialIndex!==t.attempt||T.totalTrials!==m.totalTrials))&&(P=null)}if(!P)throw new Error(w.length>1?"The saved evidence matches more than one attempt. It can't be shown as this attempt's evidence.":"No saved evidence is available for this attempt.");if(t.turn!==null){let T=Array.isArray(P.row.trajectory?.events)?P.row.trajectory.events.filter(D=>_t(D)&&Zt(D.turn)===t.turn):[];if(!T.length)throw new Error(`No saved evidence is available for turn ${t.turn} of this attempt.`);return JSON.stringify({type:P.row.type??"trial-result",...P.row.itemId!==void 0?{itemId:P.row.itemId}:{},...P.row.stimulus!==void 0?{stimulus:P.row.stimulus}:{},...P.row.variant!==void 0?{variant:P.row.variant}:{},trialIndex:Zt(P.row.trialIndex)??0,turn:t.turn,trajectory:{..._t(P.row.trajectory?.stimulus)?{stimulus:P.row.trajectory.stimulus}:{},events:T}},null,2)}return JSON.stringify(P.row,null,2)}let l=/^Check ID:\s+/m.test(r)||!/^##\s+/m.test(r),u=l?r.split(/(?=^###\s+)/m).map(m=>m.replace(/\r?\n<\/details>\s*$/i,"").trim()).filter(m=>m.startsWith("### ")):r.split(/(?=^##\s+)/m).map(m=>m.trim()).filter(m=>m.startsWith("## ")),d=m=>String(m??"").replace(/\\([\\`*_[\]<>#|])/g,"$1"),f=m=>{let w=/^(?:Check|Case) ID:\s*([^\r\n·]+)/m.exec(m)?.[1]?.trim()??"";return w?d(w):null},v=m=>f(m)===t.caseId,h=u.filter(m=>{if(f(m)!==t.caseId)return!1;let y=d(m.split(/\r?\n/,1)[0]??""),A=/^(?:Case ID:\s*.+|(?:configuration:\s*.+\s*·\s*)?attempt\s+\d+|configuration:\s*[^\r\n]+)$/m.exec(m)?.[0],j=/(\([^()]*\b(?:attempt\s+\d+|configuration:)[^()]*\))\s*$/i.exec(y)?.[1]??"",P=A??j,T=/(?:^|[·,(]\s*)attempt\s+(\d+)(?=\s*(?:$|[·,)]))/i.exec(P);if(T&&Number(T[1])-1!==t.attempt)return!1;let D=A?/(?:^|·\s*)configuration:\s*(.+?)(?=\s*(?:$|\s·\s))/i.exec(A):/(?:^|[(,]\s*)configuration:\s*([^,)\r\n]+?)(?=\s*(?:$|[,)]))/i.exec(j);return!(D&&t.configuration&&d(D[1].trim())!==t.configuration)}),g=h.filter(v),b=(g.length>0?g:h).filter(m=>!/^##\s+Recorded result:/i.test(m)),$=b.length>0?b:g.length>0?g:h;if($.length!==1)throw new Error($.length>1?"The saved evidence matches more than one attempt. It can't be shown as this attempt's evidence.":"No saved evidence is available for this attempt.");let k=$[0];if(/\[Display truncated|Display limit reached\./i.test(k)||/Display limit reached\.|\[Display truncated;\s*original (?:saved )?evidence/i.test(r))throw new Error("The saved evidence for this attempt is incomplete.");if(t.turn!==null){if(l)throw new Error(`No saved evidence is available for turn ${t.turn} of this attempt.`);let m=new RegExp(`(?:\xB7\\s*turn\\s+${t.turn}|\\([^)]*\\bturn\\s*[:=]?\\s*${t.turn}\\b[^)]*\\))\\s*$`,"i");if(/^###\s+/m.test(k)){let y=k.split(/(?=^###\s+)/m).map(T=>T.trim()).filter(Boolean),A=y[0]&&!y[0].startsWith("### ")?y[0]:"",P=y.filter(T=>T.startsWith("### ")).filter(T=>m.test(T.split(/\r?\n/,1)[0]??""));if(!P.length)throw new Error(`No saved evidence is available for turn ${t.turn} of this attempt.`);return[A,...P].filter(Boolean).join(`

`)}let w=k.split(/\r?\n/,1)[0]??"";if(!m.test(w))throw new Error(`No saved evidence is available for turn ${t.turn} of this attempt.`)}return k}function $n(e,t){let n=null,r=null,o=0,s=(i,l)=>!!i&&!!l&&i.id===l.id&&i.project===l.project&&i.workingDirectory===l.workingDirectory,c=()=>{o++,r=null};return{clear:c,setContext(i){s(n,i)?n.revision!==i.revision&&r?.status==="loading"&&(o++,r={...r,status:"error",error:"The saved results changed while loading. Choose the evidence again to reread it."}):c(),n=i?{...i}:null},get snapshot(){return s(n,r)?{...r,stale:n.revision!==r.revision}:null},async read(i,l=null){if(!n||!lt.some(h=>h.kind===i))return!1;let u=_t(l)&&typeof l.caseId=="string"&&l.caseId.trim()?{caseId:l.caseId,...typeof l.caseName=="string"&&l.caseName.trim()?{caseName:l.caseName}:{},...typeof l.stimulus=="string"&&l.stimulus.trim()?{stimulus:l.stimulus}:{},attempt:Zt(l.attempt),configuration:typeof l.configuration=="string"&&l.configuration.trim()?l.configuration:null,model:typeof l.model=="string"?l.model:null,..._t(l.artifact)?{artifact:l.artifact}:{},turn:Zt(l.turn),graderId:typeof l.graderId=="string"&&l.graderId.trim()?l.graderId:null}:null,d={...n,kind:i,focus:u},f=++o,v=()=>f===o&&s(n,d)&&n.revision===d.revision;r={...d,status:"loading",text:"",error:""},t();try{let h=await e("read_evidence",{id:d.id,kind:i});if(!v())return!1;if(h?.discarded)throw new Error("The evidence read was interrupted. Choose the evidence again to reread it.");if(h?.available===!1)throw new Error(h.message||"Saved evidence is unavailable.");if(h?.id!==d.id||h?.kind!==i||typeof h?.text!="string")throw new Error("The returned evidence doesn't match the selected run or type. Select the evidence again to reload it.");let g=await Ls(h.text,u,d.project);return v()?(r={...d,status:"ready",text:g,error:""},t(),!0):!1}catch(h){return v()&&(r={...d,status:"error",text:"",error:String(h?.message??h)},t()),!1}}}}function bn(e){let t=u=>({status:"error",passed:!1,diagnostic:`Invalid saved grader outcome: ${u}`});if(!e||typeof e!="object"||Array.isArray(e))return t("expected an object.");let n=e,r=Object.hasOwn(n,"passed"),o=Object.hasOwn(n,"status");if(r&&typeof n.passed!="boolean")return t("passed must be a boolean.");let s=o?n.status:void 0;if(o&&(typeof s!="string"||!["passed","pass","failed","fail","error","valid"].includes(s)))return t("status is not recognized.");let c=s==="passed"||s==="pass",i=s==="failed"||s==="fail"||s==="error";if(r&&(c&&n.passed===!1||i&&n.passed===!0))return t("passed contradicts status.");if(!r&&!c&&!i)return t("no outcome was reported.");let l=r?n.passed===!0:c;return{status:s==="error"?"error":l?"passed":"failed",passed:l}}var Ze=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),Tr=e=>typeof e=="number"&&Number.isSafeInteger(e)&&e>=0?e:null;function yn(e){return Ze(e)?Array.isArray(e.cases)?e.cases:Array.isArray(e.results)?e.results:Array.isArray(e.trials)?e.trials:[]:[]}function Qe(e){return yn(e).map((n,r)=>Ye(n,r)).filter(Boolean)}function vt(e,t){if(!Ze(e)||!Array.isArray(t))return null;let n=c=>typeof c=="string"&&c.trim()?c:null,r=n(e.id);if(!r||t.filter(c=>Ze(c)&&n(c.id)===r).length!==1)return null;let o=Ze(e.trial)?e.trial:null,s=t.filter(c=>{if(!Ze(c)||r!==n(c.id))return!1;let i=Ze(c.trial)?c.trial:null;for(let l of["configuration","model","attempt"])if(o&&Object.hasOwn(o,l)&&o[l]!==i?.[l])return!1;if(e.trials!=null&&c.trials!=null&&e.trials!==c.trials)return!1;if(o?.artifact){if(!i?.artifact)return!1;for(let l of["itemId","evalName","evalFilePath","stimulus","caseIndex","contextHash","totalTrials"])if(o.artifact[l]!==i.artifact[l])return!1}return!((e.trials??1)>1&&!o&&i)});return s.length===1?s[0]:null}function Ar(e,t){return[...e.map((n,r)=>({id:n.id||`original-${r}`,name:n.name,trials:n.trials??1,original:n,changed:null})),...t.map((n,r)=>({id:n.id||`changed-${r}`,name:n.name,trials:n.trials??1,original:null,changed:n}))]}function mt(e,t,n,r){if(!e||!t.length)return e;let o=vt(r,t);if(!o)return e;let s=$t(e,o);return Ye({...o,durationMs:e.durationMs??o.durationMs,totalTokens:e.totalTokens??o.totalTokens,inputTokens:e.inputTokens??o.inputTokens,outputTokens:e.outputTokens??o.outputTokens,usageSource:e.usageSource??o.usageSource,turns:e.turns??o.turns,observedTools:e.observedTools??o.observedTools,observedSkills:e.observedSkills??o.observedSkills,judgeUsage:e.judgeUsage??o.judgeUsage,graderOutcomes:e.graderOutcomes.length?e.graderOutcomes:o.graderOutcomes,evidenceDiagnostics:s,id:e.id,name:e.name,status:e.status,outcome:e.outcome,trials:r.trials??o.trials,...Object.hasOwn(r,"judgeUsage")?{judgeUsage:e.judgeUsage}:{}},n,e.trials??o.trials)}function gt(e,t=[]){if(!Ze(e))return[];let n=Ze(e.receipt)?e.receipt:e,r=e.original?.runId??n.source?.baseline?.runId,o=e.changed?.runId??n.source?.treatment?.runId,s=Array.isArray(t)&&r?yn(t.find(l=>l?.id===r)):[],c=Array.isArray(t)&&o?yn(t.find(l=>l?.id===o)):[];if(Array.isArray(e.caseComparison)&&e.caseComparison.length)return e.caseComparison.map((l,u)=>({id:l.id||`row-${u}`,name:l.name||`Case ${u+1}`,trials:Tr(l.trials)??1,original:l.original?mt(Ye(l.original,u),s,u,l.original):null,changed:l.changed?mt(Ye(l.changed,u),c,u,l.changed):null}));if(Array.isArray(e.cases)&&e.cases.length)return e.cases.map((l,u)=>({id:l.id||`row-${u}`,name:l.name||`Case ${u+1}`,trials:Tr(l.trials)??1,original:l.original?mt(Ye(l.original,u),s,u,l.original):null,changed:l.changed?mt(Ye(l.changed,u),c,u,l.changed):null}));if(e.original||e.changed||e.summary?.runs){let l=e.original?.cases?.length?e.original.cases:e.summary?.runs?.[0]?.cases??[],u=e.changed?.cases?.length?e.changed.cases:e.summary?.runs?.[1]?.cases??[],d=Array.isArray(l)?l.filter(Ze):[],f=Array.isArray(u)?u.filter(Ze):[],v=Qe({cases:l}).map((g,b)=>mt(g,s,b,d[b])),h=Qe({cases:u}).map((g,b)=>mt(g,c,b,f[b]));return Ar(v,h)}if(s.length||c.length){let l=Ar(Qe({cases:s}),Qe({cases:c}));if(l.length)return l}let i=n.outcomes?.transitions;if(Ze(i)){let l=new Map;for(let d of i.fixedFailures??[])l.set(String(d),{origStatus:"fail",chgStatus:"pass"});for(let d of i.newFailures??[]){let f=String(d);l.set(f,{origStatus:l.get(f)?.origStatus??"pass",chgStatus:"fail"})}for(let d of i.persistentFailures??[])l.set(String(d),{origStatus:"fail",chgStatus:"fail"});for(let d of i.fixedErrors??[]){let f=String(d);l.set(f,{origStatus:"error",chgStatus:l.get(f)?.chgStatus??"pass"})}for(let d of i.newErrors??[]){let f=String(d);l.set(f,{origStatus:l.get(f)?.origStatus??"pass",chgStatus:"error"})}for(let d of i.persistentErrors??[])l.set(String(d),{origStatus:"error",chgStatus:"error"});let u=[...l.entries()].map(([d,{origStatus:f,chgStatus:v}])=>({id:d,name:d,trials:1,original:Ye({id:d,name:d,status:f}),changed:Ye({id:d,name:d,status:v})}));if(u.length)return u}return[]}function St(e,t=[]){if(!Ze(e))return!1;if(typeof e.singleTrialLowConfidence=="boolean")return e.singleTrialLowConfidence;let n=gt(e,t);return n.length>0?n.some(r=>(r.trials??1)<=1):!0}var Me=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),Pr=e=>typeof e=="number"&&Number.isFinite(e)&&e>=0?e:null,ze=e=>typeof e=="number"&&Number.isSafeInteger(e)&&e>=0?e:null;function Ir(e,t=""){let n=`${e??""} ${t??""}`.trim().toLowerCase();return/\bcompleted\b/.test(n)?"Checks run completion only, not answer correctness.":/\b(?:output-contains|output-exact|output-matches|regex)\b/.test(n)?"Checks output text against the expected pattern, not full answer correctness or tool use.":/\b(?:file-contains|file-matches)\b/.test(n)?"Checks workspace file contents after the run, not how the response was produced.":/\b(?:tool-calls|tool_call|mcp-call|skill-invocation|skill_activation|skill-activation|agent-delegation|subagent)\b/.test(n)?"Checks recorded tool, skill or agent activity, not whether the answer is correct.":/\b(?:prompt|llm|panel|rubric)\b/.test(n)?"Uses a model to score the response against the scoring rules. Scores can vary between runs.":"Checks one configured condition in the saved run, not whether the whole answer is correct."}function kn(e){let t=String(e??"").trim().toLowerCase();return t==="passed"||t==="pass"?"pass":t==="failed"||t==="fail"?"fail":t==="errored"||t==="error"?"error":t==="skipped"?"skipped":t==="not-evaluated"||t==="not evaluated"?"not-evaluated":t||"unknown"}function Er(e){let t=Pr(e);return t===null?"not reported":t<1e3?`${Math.round(t)} ms`:`${(t/1e3).toFixed(t%1e3===0?0:1)} s (${Math.round(t)} ms)`}function Rr(e){if(!Me(e))return null;let t=typeof e.model=="string"&&e.model.trim()?e.model.trim():null,n=Me(e.tokenUsage)?e.tokenUsage:e,r=ze(n.inputTokens),o=ze(n.outputTokens),s=n.totalTokens==null?r!==null&&o!==null?ze(r+o):null:ze(n.totalTokens);return{model:t,inputTokens:r,outputTokens:o,totalTokens:s}}function Nr(e){if(!Me(e))return null;let t={model:typeof e.model=="string"&&e.model.trim()?e.model.trim():null,completeness:{}};for(let n of["inputTokens","outputTokens","totalTokens"]){let r=e.completeness?.[n],o=ze(e[n]);t[n]=r==="complete"?o:null,t.completeness[n]=["partial","unknown","ambiguous"].includes(r)?r:r==="complete"&&o!==null?"complete":"ambiguous"}return t}function wn(e){return e.inputTokens===null&&e.outputTokens===null?"":` (${e.inputTokens===null?"input not reported":`${e.inputTokens} in`} / ${e.outputTokens===null?"output not reported":`${e.outputTokens} out`})`}function Tt(e){let t=Rr(e);return t?`Judge (${t.model??"model not reported"}): ${t.totalTokens===null?"tokens not reported":`${t.totalTokens} tokens`}${wn(t)}`:""}function Or(e){if(!Me(e))return"not reported";let t=Me(e.tokenUsage)?e.tokenUsage:null,n=ze(e.totalTokens??t?.totalTokens),r=ze(e.inputTokens??t?.inputTokens),o=ze(e.outputTokens??t?.outputTokens),s=e.usageSource??t?.source??null,c=typeof s=="string"&&s.trim()?s.trim():null,i=Nr(e.judgeUsage),l=i?i.totalTokens!==null?`Judge${i.model?` (${i.model})`:""}: ${i.totalTokens} tokens${wn(i)}`:`Total judge usage unknown - ${i.completeness.totalTokens==="ambiguous"?"measurement completeness or ownership is unverified":i.completeness.totalTokens==="partial"?"some judges did not report usage":"complete measurements are unavailable"}${wn(i)}`:"";if(n===null)return l?`not reported (${l})`:"not reported";let u=[];r!==null&&o!==null&&u.push(`${r} in / ${o} out`),u.push("role: task/agent"),c&&u.push(`source: ${c}`);let d=`${n} tokens (${u.join("; ")})`;return l?`${d} \xB7 ${l}`:d}function xn(e){let t=ze(e);return t===null?"not reported":`${t} ${t===1?"turn":"turns"}`}function Cn(e){if(!Array.isArray(e))return"not reported";let t=e.map(n=>String(n??"").trim()).filter(Boolean);return t.length>0?`Observed: ${t.join(", ")}`:"not reported"}function Dr(e,t=""){let n=r=>{let o=String(r??"").trim().toLowerCase();return o?/\b(?:output-contains|output-not-contains|output-exact|output-matches|output-not-matches|regex)\b/.test(o)?"output":/\b(?:tool-calls|tool_call|mcp-call|skill-invocation|skill_activation|skill-activation|agent-delegation|subagent|transcript-contains|transcript-not-contains|transcript-matches|transcript-not-matches|assistant-contains-tool-output|completed|exit-success)\b/.test(o)?"trajectory":/\b(?:prompt|llm|panel|rubric)\b/.test(o)?"judge":/\b(?:file-contains|file-not-contains|file-matches|file-not-matches|file-exists|file-not-exists|diff-contains|diff-not-contains|diff-matches|diff-match|diff-empty)\b/.test(o)?"workspace":null:null};return n(e)??n(t)}function jt(e,t="check-0"){let{status:n,passed:r,diagnostic:o}=bn(e),s=Me(e)?e:{},c=typeof s.kind=="string"&&s.kind.trim()?s.kind.trim():typeof s.type=="string"&&s.type.trim()?s.type.trim():typeof s.graderType=="string"&&s.graderType.trim()?s.graderType.trim():"check",i=typeof s.name=="string"&&s.name.trim()?s.name.trim():typeof s.configuredName=="string"&&s.configuredName.trim()?s.configuredName.trim():typeof s.nativeName=="string"&&s.nativeName.trim()?s.nativeName.trim():c,l=n==="error"?null:typeof s.score=="number"&&Number.isFinite(s.score)?s.score:null,u=typeof s.reason=="string"?s.reason:typeof s.explanation=="string"?s.explanation:typeof s.evidence=="string"?s.evidence:void 0,d=o??u??"No grading explanation was provided.",f=o?"provided":s.reasonState==="provided"||s.reasonState==="missing"?s.reasonState:typeof u=="string"&&u.trim()!==""&&u!=="No grading explanation was provided."&&u!=="No native grader explanation was provided."?"provided":"missing",v=ze(s.turn),h=Object.hasOwn(s,"children")?s.children:s.details,b=(h===void 0?[]:Array.isArray(h)?h:[null]).map(($,k)=>jt($,`${t}.${k}`)).filter(Boolean);return{id:typeof s.id=="string"&&s.id.trim()?s.id:t,name:i,kind:c,status:n,passed:r,score:l,reason:d,reasonState:f,turn:v,proves:typeof s.proves=="string"&&s.proves.trim()?s.proves:Ir(c,i),judgeUsage:Rr(s.judgeUsage??s.judge),children:b}}function Ms(e,t=240){let n=String(e??"");return n.length>t?`${n.slice(0,t-1)}\u2026`:n}function Lr(e,t,n=null){let r=ze(e.turn)??n,o=Array.isArray(e.children)?e.children.map(f=>Lr(f,t,r)):[],s=e.kind==="composite"?null:Dr(e.kind,e.name),c=r!==null?` turn ${r}`:"",i={caseId:t.caseId,caseName:t.caseName,...typeof t.stimulus=="string"&&t.stimulus?{stimulus:t.stimulus}:{},attempt:t.attempt,configuration:t.configuration,model:t.model,...t.artifact?{artifact:t.artifact}:{},turn:r,evidenceKind:s},l=r!==null&&t.turns!==null&&r>=t.turns,u=e.reasonState==="provided"?!!e.reason:e.reasonState==="missing"?!1:!!(e.reason&&e.reason!=="No grading explanation was provided."&&e.reason!=="No native grader explanation was provided."),d;if(t.ambiguous||!t.artifact||t.attempt===null||["skipped","not-evaluated"].includes(t.status)||!s||l)d={...i,target:null,available:!1,summary:l?"No checkpoint turn is available for this attempt":"No saved evidence is available for this attempt"};else if(s==="output"||s==="judge"){let f=r!==null?t.outputAvailable&&typeof t.turnOutputs?.[r]=="string"&&t.turnOutputs[r].trim()?t.turnOutputs[r].trim():null:t.outputAvailable?t.observed:null;d=f?{...i,target:"output",available:!0,summary:`Attempt ${t.attempt+1}${c} output: ${f.slice(0,160)}`}:{...i,target:null,available:!1,summary:r!==null?"No checkpoint output is available for this attempt":"No output is available for this attempt"}}else if(s==="trajectory")if(r!==null){let f=Me(t.turnEvidence?.[r])?t.turnEvidence[r]:null,v=Array.isArray(f?.observedSkills)?f.observedSkills.filter(Boolean):[],h=Array.isArray(f?.observedTools)?f.observedTools.filter(Boolean):[],b=[typeof f?.summary=="string"&&f.summary.trim()?f.summary.trim():"",v.length?`skills: ${v.join(", ")}`:"",h.length?`tools: ${h.join(", ")}`:""].filter(Boolean);d=b.length>0?{...i,target:"trajectory",available:!0,summary:`Attempt ${t.attempt+1}${c} trajectory (${b.join("; ")})`}:{...i,target:null,available:!1,summary:"No checkpoint conversation trace is available for this attempt"}}else{let f=!!(t.turnEvidence&&Object.keys(t.turnEvidence).length>0),v=!!(t.trajectoryAvailable||f||t.hasObservations||t.observedSkills?.length||t.observedTools?.length),h=[t.turns!==null?xn(t.turns):"",t.observedSkills?.length?`skills: ${t.observedSkills.join(", ")}`:"",t.observedTools?.length?`tools: ${t.observedTools.join(", ")}`:""].filter(Boolean),g=h.length?h:["recorded events"];d=v?{...i,target:"trajectory",available:!0,summary:`Attempt ${t.attempt+1} trajectory (${g.join("; ")})`}:{...i,target:null,available:!1,summary:"No conversation trace is available for this attempt"}}else d=r===null&&u?{...i,target:"report",available:!0,summary:`Attempt ${t.attempt+1} workspace check: ${e.reason.slice(0,160)}`}:{...i,target:null,available:!1,summary:r!==null?"No checkpoint file evidence is available for this attempt":"No file evidence is available for this attempt"};return{...e,turn:r,sameAttemptEvidence:{...d,summary:Ms(d.summary)},children:o}}function Fs(e){if(!Array.isArray(e)||!e.length)return[];let t=new Map,n=[];for(let[r,o]of e.entries()){if(!Me(o)){n.push(jt(o,`check-${r}`));continue}let s="";if(typeof o.id=="string"&&o.id.startsWith("["))try{let i=JSON.parse(o.id);Array.isArray(i)&&typeof i[0]=="string"&&/^grade(?:\.\d+)*$/.test(i[0])&&(s=i[0])}catch{}let c=jt({...o,kind:o.type??o.nativeName??o.name??(s==="grade"?"composite":"check"),name:o.name??o.nativeName??o.type??(s==="grade"?"Overall check":o.id??`check-${r}`)},`check-${r}`);if(c){if(s){t.set(s,c);let i=s.lastIndexOf("."),l=i>0?t.get(s.slice(0,i)):null;if(l){l.children.push(c);continue}}n.push(c)}}return n}function $t(...e){let t=[];for(let n of e)for(let r of Array.isArray(n?.evidenceDiagnostics)?n.evidenceDiagnostics:[])Me(r)&&typeof r.message=="string"&&["partial","unavailable","unbound"].includes(r.state)&&!t.some(o=>o.state===r.state&&o.message===r.message)&&t.push(r);return t}function Ye(e,t=0,n=1){if(!Me(e))return null;let r=Me(e.trial)?e.trial:null,o=Me(e.tokenUsage)?e.tokenUsage:Me(r?.tokenUsage)?r.tokenUsage:null,s=Me(e.behavior)?e.behavior:null,c=Array.isArray(s?.observations)?s.observations.filter(Me):[],i=typeof e.name=="string"&&e.name.trim()?e.name:`Case ${t+1}`,l=Me(r?.artifact)?r.artifact:null,u=ze(l?.totalTrials??e.trials??r?.trials),d=u!==null&&u>=1?u:n,f=Pr(e.durationMs??r?.durationMs),v=ze(e.inputTokens??r?.inputTokens??o?.inputTokens),h=ze(e.outputTokens??r?.outputTokens??o?.outputTokens),g=ze(e.totalTokens??r?.totalTokens??o?.totalTokens),b=e.usageSource??r?.usageSource??o?.source??null,$=typeof b=="string"&&b.trim()?b.trim():null,k=ze(e.turns??e.turnCount??r?.turns??r?.turnCount),m=te=>{if(!Array.isArray(te))return null;let Z=te.map(M=>String(M??"").trim()).filter(Boolean);return Z.length?Z:null},w=m(e.observedTools??r?.observedTools)??(()=>{let te=c.filter(Z=>Z.kind==="mcp-call"||Z.kind==="agent-delegation").map(Z=>Z.kind==="mcp-call"?Z.server&&Z.tool?`${Z.server}/${Z.tool}`:String(Z.tool??Z.name??""):Z.name&&Z.name!=="task"?`task (${Z.name})`:String(Z.name??"")).filter(Boolean);return te.length?[...new Set(te)]:null})(),y=m(e.observedSkills??r?.observedSkills)??(()=>{let te=c.filter(Z=>Z.kind==="skill-activation").map(Z=>String(Z.name??"").trim()).filter(Boolean);return te.length?[...new Set(te)]:null})(),A=s?Fs(s.graders):Object.hasOwn(e,"graderOutcomes")?(Array.isArray(e.graderOutcomes)?e.graderOutcomes:[null]).map((te,Z)=>jt(te,`check-${Z}`)):[],j=Nr(Object.hasOwn(e,"judgeUsage")?e.judgeUsage:r?.judgeUsage??(A.length?{}:null)),P=typeof e.status=="string"?e.status:typeof e.outcome=="string"?e.outcome.toLowerCase():"unknown",T=typeof e.id=="string"&&e.id.trim()?e.id:`case-${t}`,D=typeof e.stimulus=="string"&&e.stimulus.trim()?e.stimulus:void 0,_=ze(r?.attempt),pe=r&&typeof r.configuration=="string"&&r.configuration.trim()?r.configuration:null,ie=typeof e.observed=="string"?e.observed.trim():"",se=ie&&!/^(?:Actual response was not provided by the evaluator|Stopped before this test finished|No complete result was produced)\.$/.test(ie)?ie:null,he=Me(e.turnOutputs)?e.turnOutputs:null,ue=Me(e.turnEvidence)?e.turnEvidence:null,$e=typeof e.outputAvailable=="boolean"?e.outputAvailable:!!he,be=typeof e.trajectoryAvailable=="boolean"?e.trajectoryAvailable:!!(ue&&Object.keys(ue).length>0||c.length>0||y?.length||w?.length),E=!!e.ambiguousEvidence,J={caseId:T,caseName:i,...D?{stimulus:D}:{},status:kn(e.outcome??e.status),attempt:_,configuration:pe,model:r?.model??null,...l?{artifact:l}:{},observed:se,outputAvailable:$e,trajectoryAvailable:be,hasObservations:c.length>0,observedTools:w,observedSkills:y,turns:k,turnOutputs:he,turnEvidence:ue,ambiguous:E},G=A.map(te=>Lr(te,J)),Y={id:T,name:i,...D?{stimulus:D}:{},status:P,outcome:kn(e.outcome??e.status),observed:se,outputAvailable:$e,trajectoryAvailable:be,ambiguousEvidence:E,evidenceDiagnostics:$t(e),...he?{turnOutputs:he}:{},...ue?{turnEvidence:ue}:{},trials:d,durationMs:f,totalTokens:g,inputTokens:v,outputTokens:h,usageSource:$,turns:k,observedTools:w,observedSkills:y,judgeUsage:j,graderOutcomes:G,trial:r?{configuration:pe,model:r.model??null,attempt:_,...l?{artifact:l}:{}}:null};return{...Y,formattedDuration:Er(Y.durationMs),formattedTokens:Or(Y),formattedTurns:xn(Y.turns),formattedObservedTools:Cn(Y.observedTools),formattedObservedSkills:Cn(Y.observedSkills)}}var Ue=[{id:"definitions",label:"Evals",icon:"flask-conical"},{id:"assets",label:"Assets",icon:"layers"},{id:"results",label:"Results",icon:"chart-column"},{id:"diagnostics",label:"Problems",icon:"triangle-alert"}],Qt=20,Mr=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function Xt(e,t=""){return Object.entries(e).map(([n,r])=>{let o=/^[a-zA-Z_][a-zA-Z0-9_-]*$/.test(n)&&!/^(?:null|true|false)$/i.test(n)?n:JSON.stringify(n);return r&&typeof r=="object"&&!Array.isArray(r)&&Object.keys(r).length?`${t}${o}:
${Xt(r,`${t}  `)}`:`${t}${o}: ${JSON.stringify(r)}`}).join(`
`)}function Fr(e=[]){let t=i=>e.filter(l=>l.kind===i).map(l=>String(l.relativePath??"").replaceAll("\\","/")).filter(l=>l&&!l.startsWith("/")&&!l.includes(":")&&!l.split("/").some(u=>!u||u===".."||u===".")),n=i=>i.includes("/")?i.slice(0,i.lastIndexOf("/")):".",r=i=>{let l=[...new Set(i)].sort((d,f)=>d.localeCompare(f)).filter((d,f,v)=>!v.some(h=>h!==d&&(h==="."||d.startsWith(`${h}/`))));if(l.length<=64)return l;let u=l[0].split("/");for(let d of l.slice(1)){let f=d.split("/");for(;u.some((v,h)=>v!==f[h]);)u.pop()}return[u.join("/")||"."]},o=t("eval"),s=t("skill").filter(i=>/\/SKILL\.md$/i.test(i)).map(i=>n(n(i))),c=[...new Set(["*.eval.yaml",...o.map(i=>{let l=i.split("/").at(-1),u=l.match(/(?:\.eval)?\.(yaml|yml|jsonc?)$/i);return u?`*${u[0]}`:l})])];return{paths:{evals:r(o.map(n)).join(`
`)||"evals",skills:r(s).join(`
`)||".github/skills",results:".copilot/evals/results",evalFilenames:c.length<=64?c.join(`
`):"*"},suite:"all",description:"All discovered evals"}}function zr(e){let t=new URLSearchParams(e),n=t.getAll("run");return t.getAll("view").length===1&&["compare","setup"].includes(t.get("view"))&&n.length===0?{view:t.get("view"),runId:""}:t.get("view")==="results"&&n.length===1&&/^[a-zA-Z0-9-]{1,80}$/.test(n[0])?{view:"results",runId:n[0]}:{view:"definitions",runId:""}}function qr(){return Object.fromEntries(Ue.map(({id:e})=>[e,{query:"",kind:"all",status:"all",sort:e==="results"?"newest":"name",page:1}]))}function _n(e,t,n){return{...e,[t]:{...e[t],...n,page:"page"in n?n.page:1}}}function Sn(e,t,n){let r=t==="results"?e.runs:e.assets.filter(f=>t==="definitions"?f.kind==="eval":f.kind!=="eval"),o=n.query.trim().toLocaleLowerCase(),s=r.filter(f=>(t==="results"?`${f.name} ${f.id} ${f.mode}`:`${f.name} ${f.relativePath}`).toLocaleLowerCase().includes(o)&&(n.kind==="all"||f.kind===n.kind)&&(n.status==="all"||f.status===n.status)),c=f=>Number.isFinite(Date.parse(f))?Date.parse(f):0,i=s.toSorted((f,v)=>{let h=n.sort;return(h==="newest"?c(v.startedAt)-c(f.startedAt):Mr.compare(h==="path"?f.relativePath:h==="status"?f.status:f.name,h==="path"?v.relativePath:h==="status"?v.status:v.name))||Mr.compare(f.id,v.id)}),l=Math.max(1,Math.ceil(i.length/Qt)),u=Math.min(l,Math.max(1,n.page)),d=(u-1)*Qt;return{rows:i.slice(d,d+Qt),total:r.length,matching:i.length,page:u,pages:l,first:i.length?d+1:0,last:Math.min(d+Qt,i.length)}}function jn(e,t){let n=e.detail;return!n||t==="diagnostics"||!Ue.some(r=>r.id===t)?null:t==="results"?n.type==="run"?n:null:n.type!=="asset"?null:t==="definitions"==(n.kind==="eval")?n:null}function We(e){let t=new Date(e);return Number.isFinite(t.getTime())?new Intl.DateTimeFormat(void 0,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"}).format(t):"Unknown date"}function Tn(e){if(e.readStatus==="idle")return"Choose a folder to find evals";if(e.readStatus==="reading")return"Looking for evals and saved results\u2026";let t=[];return e.discovery?.status==="error"&&t.push(`Evals and project files couldn't load${e.discovery.stale?" (showing earlier files)":""}`),e.history?.status==="error"&&t.push(`Saved results couldn't load${e.history.stale?" (showing earlier results)":""}`),t.length?t.join(" \xB7 "):e.readStatus==="unavailable"||e.readStatus==="partial"?"Some files couldn't load. See Problems for details.":"Evals, project files and saved results are up to date"}function Hr(e){return e.replace(/[\\/]+$/,"").split(/[\\/]/).at(-1)||e||"Choose a folder"}function Ge(e){return String(e??"")}function At(e){return e.kind==="fixture"?"Sample input file":{accepted:"Format check passed",rejected:"Format check failed",cancelled:"Check cancelled",unavailable:"Check unavailable","process-failed":"Check could not finish","not-evaluated":"Not checked"}[e.validation?.status]??"Not checked"}function Ur(e){return{"supported-shape":"Supported format","requires-resolution":"Needs more setup",unsupported:"Not supported"}[e?.status]??"Not checked"}function Wr(e){let t=e.trim();return t.length>0&&t.length<=4096&&!t.includes("\0")&&/^(?:[a-z]:[\\/]|\\\\|\/)/i.test(t)}function Vr(e){let t=e==null?"Not recorded":JSON.stringify(e,null,2);return{text:t.slice(0,8192),truncated:t.length>8192}}var An=(e,t)=>{if(typeof e=="string")return e;let n=e.tag==="table"&&t?.tablePrefix?`${t.tablePrefix}: table ${++t.tableNumber}`:"",r=e.children.map(s=>An(s,t)),o=/^h[1-6]$/.test(e.tag)&&t?.headingOffset?`h${Math.min(6,Number(e.tag[1])+t.headingOffset)}`:e.tag;return o==="table"?a`<div class="report-table" tabindex="0" role="region" aria-label=${n||"Comparison table"}>
    <table>${n&&a`<caption>${n}</caption>`}${r}</table></div>`:o==="th"&&t?.tablePrefix?a`<th scope="col">${r}</th>`:a`<${o}>${r}<//>`},Pn=[{id:"author",label:"Create",icon:"sparkles"},{id:"activity",label:"Run queue",icon:"play"},{id:"compare",label:"Compare",icon:"git-compare"},{id:"setup",label:"Settings",icon:"settings"}],Pt=e=>`name: ${e}
defaults:
  executor: mock
stimuli:
  - name: Expected response
    prompt: Return the word ready.
    graders:
      - type: output-contains
        config:
          substring: ready
`,De=e=>["validation","authentication","running","health","stopping"].includes(e),zs=e=>e?.message??String(e);function In(e){let t=(e||"selected.eval.yaml").split(/[\\/]/).at(-1)||"selected.eval.yaml";return/((?:\.eval)?\.(?:ya?ml|jsonc?))$/i.test(t)?t.replace(/(?:\.eval)?\.(ya?ml|jsonc?)$/i,"-copy.eval.$1"):`${t}-copy.eval.yaml`}function Ee(e,{returnCancellation:t=!1}={}){let[n,r]=x(""),[o,s]=x(""),c=R(0),i=R(!0);q(()=>(i.current=!0,()=>{i.current=!1,c.current++}),[]);async function l(u,d={}){let f=++c.current;s(""),r(u);try{let v=await e(u,d);if(v?.available===!1)throw new Error(v.message||"This action isn't available.");return!i.current||c.current!==f||v?.discarded||v?.cancelled&&!t?null:v}catch(v){return i.current&&c.current===f&&s(zs(v)),null}finally{i.current&&c.current===f&&r("")}}return{run:l,pending:n,error:o,clear:()=>s(""),reset:()=>{c.current++,r(""),s("")}}}function Ce({error:e}){return e?a`<p class="studio-error" role="alert">${Ge(e)}</p>`:null}function It({state:e,invoke:t,compact:n=!1}){let[r,o]=x(e.trusted),{run:s,pending:c,error:i}=Ee(t);return q(()=>o(e.trusted),[e.trusted]),e.trustSource==="native"?a`<div class="trust-wrapper" role="status">
    <span class="trust-control" title="Your app manages workspace trust. Each action still needs separate approval.">
      <${H} name=${e.trusted?"shield-check":"shield"} size=${15} />
      ${e.trusted?"Workspace trusted":"Trust this workspace in your app to use AI, check files and save."}
    </span></div>`:a`<div class="trust-wrapper"><label class=${`trust-control ${r?"is-trusted":""}`.trim()}
    title="Allow AI, saving and running. Each action still needs your approval."><input type="checkbox" checked=${r} disabled=${!!c}
    onChange=${async l=>{let u=l.target.checked;o(u),await s("trust_project",{trusted:u})||o(e.trusted)}} /><${H} name=${r?"shield-check":"shield"} size=${15} /><span>Trust this folder${!n&&a`<small class="sr-only">Allow AI, saving and running. Each action still needs your approval.</small>`}</span></label>
    <${Ce} error=${i} /></div>`}async function en(e,t){try{if((await t("copy_project_path")).copied)return}catch{}try{await navigator.clipboard.writeText(e);return}catch{}let n=document.activeElement,r=typeof n?.selectionStart=="number"?{start:n.selectionStart,end:n.selectionEnd,direction:n.selectionDirection}:null,o=window.getSelection(),s=o?Array.from({length:o.rangeCount},(i,l)=>o.getRangeAt(l).cloneRange()):[],c=document.createElement("textarea");c.value=e,c.readOnly=!0,c.style.cssText="position:fixed;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none",document.body.append(c);try{if(c.focus({preventScroll:!0}),c.select(),!document.execCommand("copy"))throw new Error("Clipboard access was blocked. Try Copy path again.")}finally{if(c.remove(),n?.focus({preventScroll:!0}),o){o.removeAllRanges();for(let i of s)o.addRange(i)}r&&n.setSelectionRange(r.start,r.end,r.direction)}}var tn=[{id:"oracle",label:"Reference answer",description:"Provide the expected inputs and check that the graders accept the reference answer."},{id:"negative-control",label:"Without reference inputs",description:"Leave out the reference inputs and use the runner's baseline result. This does not supply a known-bad conversation. Checks for something being absent may report N/A."},{id:"trajectory",label:"Saved conversation",description:"Score a saved conversation and compare the overall result and each grader's result with the expected pass or fail."}],En=e=>tn.find(t=>t.id===e)?.label??"Unknown test mode";function Br(e){return e?[`Default expected: ${e.expected}`,...Object.entries(e.graders??{}).map(([t,n])=>`${t}: expected ${n}`)]:[]}function Kr(e){return(e?.results??[]).flatMap(t=>[{name:`${t.stimulus}${Object.hasOwn(t,"baseline")?" (baseline without reference inputs)":""}`,expected:t.expected,observed:t.actual,...t.score!==void 0?{score:t.score}:{},...t.error?{error:t.error}:{},outcome:t.actual==="error"?"Error":t.matched?"Matched":"Mismatch"},...(t.graders??[]).map(n=>({name:`${t.stimulus} / ${n.name}`,expected:n.expected??"Not specified",observed:n.actual,...n.score!==void 0?{score:n.score}:{},...n.evidence?{evidence:n.evidence}:{},...n.error?{error:n.error}:{},outcome:n.actual==="error"?"Error":n.matched===void 0?"Observation":n.matched?"Matched":"Mismatch"}))])}function ct(e,t){if(!t||typeof t!="string")return;let n=s=>s.split("/").map(encodeURIComponent).join("/").replace(/^([A-Za-z])%3A/,"$1:"),r=s=>s.split("/").map(c=>{try{return encodeURIComponent(decodeURIComponent(c))}catch{return c}}).join("/").replace(/^\/([A-Za-z])%3A/,"/$1:"),o=s=>new URL(`file:///${n(s.replace(/^\/+/,""))}`);try{let s=t.replaceAll("\\","/"),c=o(`${e.replaceAll("\\","/").replace(/\/$/,"")}/`),i=s.startsWith("file:")?new URL(s):s.startsWith("/")||/^[A-Za-z]:\//.test(s)?o(s):new URL(n(s),c),l=r(c.pathname),u=r(i.pathname);return i.protocol!=="file:"||i.host!==c.host||!u.startsWith(l)?void 0:(i.pathname=u,i.href)}catch{return}}function qs(e,t,n){if(typeof n!="string")return;let r=n.replaceAll("\\","/");if(r.startsWith("/")||r.startsWith("file:")||/^[A-Za-z]:\//.test(r))return ct(e,n);let o=ct(e,t);return o?ct(e,new URL(r.split("/").map(encodeURIComponent).join("/"),o).href):void 0}function Jr(e,t,n){let r=n===void 0?ct(e.projectPath,t):qs(e.projectPath,t,n);if(!r)return null;try{return{path:decodeURIComponent(new URL(r).pathname).replace(/^\/(?=[A-Za-z]:\/)/,""),assetId:(e.assets??[]).find(o=>ct(e.projectPath,o.uri??o.relativePath)===r)?.id}}catch{return null}}function Rn({state:e,evalPath:t,trajectory:n,invoke:r}){let o=Jr(e,t,n),s=n===void 0?"eval":"fixture",[c,i]=x(""),{run:l,pending:u,error:d}=Ee(r);return a`<div class="grader-source-reference">
    <label class="stack-label">${s==="eval"?"Eval path":"Fixture path"}
      <input readonly value=${o?.path??n??t} /></label>
    ${o?.assetId&&a`<button class="ck-btn" type="button" disabled=${!!u}
      onClick=${()=>l("preview_asset",{id:o.assetId})}>Open ${s==="eval"?"eval definition":"fixture preview"}</button>`}
    <button class="ck-btn" type="button" disabled=${!o} onClick=${async()=>{try{await en(o.path,async()=>({})),i(`Copied ${s} path.`)}catch{i("Clipboard unavailable. Select and copy the path above.")}}}>Copy ${s} path</button>
    ${c&&a`<p role="status">${c}</p>`}
    <${Ce} error=${d} />
  </div>`}function Gr({state:e,item:t,invoke:n}){let[r,o]=x(!1),[s,c]=x("oracle"),[i,l]=x(""),[u,d]=x(""),{run:f,pending:v,error:h}=Ee(n),g=Ee(n),b=Ee(n),$=t.uri,k=e.graderTestCatalog,m=ct(e.projectPath,$),w=k&&m&&ct(e.projectPath,k.evalPath)===m,y=w?k.fixtures:[],A=y.find(_=>_.id===u),j=e.graderTestPhase!=="idle",P=e.trusted&&!De(e.operation.phase)&&!e.operation.approval,T=e.graderTest,D=e.graderTestPreview;return a`<section class="grader-tests" aria-label="Test graders">
    <button class="ck-btn" aria-expanded=${r} disabled=${!!v} onClick=${async()=>{o(!r),r||await Promise.all([f("grader_test_catalog",{evalPath:$}),b.run("list_grader_tests")])}}>Test graders</button>
    ${r&&a`<div class="grader-test-panel">
      <h3>Test graders</h3>
      <p>Test the scoring rules without running the task agent.</p>
      <form class="grader-test-form" onSubmit=${async _=>{_.preventDefault(),await f("run_grader_test",{evalPath:$,mode:s,...s==="trajectory"?{fixtureId:u}:i?{stimulus:i}:{}})}}>
        <label class="stack-label">Test mode<select value=${s} disabled=${!!v||j} onChange=${_=>c(_.target.value)}>
          ${tn.map(_=>a`<option value=${_.id}>${_.label}</option>`)}
        </select></label>
        <p>${tn.find(_=>_.id===s)?.description}</p>
        ${s!=="trajectory"?a`<label class="stack-label">Test case (stimulus)<select value=${i} disabled=${!!v||j||!w} onChange=${_=>l(_.target.value)}>
          <option value="">All test cases</option>
          ${(w?k.stimuli:[]).map(_=>a`<option value=${_}>${_}</option>`)}
        </select></label>`:a`<label class="stack-label">Configured fixture<select value=${u} disabled=${!!v||j||!w} required onChange=${_=>d(_.target.value)}>
          <option value="">Choose a fixture</option>
          ${y.map(_=>a`<option value=${_.id}>${_.id} · ${_.stimulus} · expected ${_.expected}</option>`)}
        </select></label>
        ${!y.length&&a`<p>No configured fixtures. Add fixtures to <code>${t.relativePath??t.name}.grader-tests.json</code> beside the eval.</p>`}
        ${A&&a`<div><p>Test case: ${A.stimulus}</p>
          <${Rn} state=${e} evalPath=${k.evalPath} trajectory=${A.trajectory} invoke=${n} />
          <ul>${Br(A).map(_=>a`<li>${_}</li>`)}</ul></div>`}`}
        <p class="snapshot-notice">Graders may use paid models or run scripts. Review the command and cost warning in the approval prompt before starting.</p>
        <button class="ck-btn ck-btn-primary" type="submit" disabled=${!P||!!v||j||!w||s==="trajectory"&&!A}>
          ${v==="run_grader_test"?"Testing graders\u2026":"Review & test graders"}
        </button>
      </form>
      ${(j||v==="run_grader_test")&&a`<div role="status"><p>${e.graderTestPhase==="idle"?"Preparing":e.graderTestPhase} grader test…</p>
        <button class="ck-btn" disabled=${!!g.pending} onClick=${()=>g.run("cancel_grader_test")}>Cancel grader test</button></div>`}
      ${D&&a`<details open><summary>Exact grader test command</summary><pre tabindex="0">${D.command}</pre>
        <ul>${D.warnings.map(_=>a`<li>${_}</li>`)}</ul></details>`}
      <h4>Saved grader tests</h4>
      <button class="ck-btn" disabled=${!!v||!!b.pending||j} onClick=${()=>b.run("list_grader_tests")}>Refresh grader test history</button>
      <label class="stack-label">Reopen result<select value=${T?.id??""} disabled=${!!v||!!b.pending||j} onChange=${_=>{_.target.value&&b.run("read_grader_test",{id:_.target.value})}}><option value="">Choose a saved grader test</option>
        ${(e.graderTests??[]).map(_=>a`<option value=${_.id}>${_.evalPath} · ${En(_.mode)} · ${_.status} · ${_.createdAt}</option>`)}
      </select></label>
      ${T&&a`<section aria-label="Grader test result">
        <h4>Grader test: ${T.status}</h4>
        ${T.error&&a`<details open><summary>Error details (not instructions)</summary><pre tabindex="0">${T.error}</pre></details>`}
        <p>${En(T.mode)} · ${T.stimulus??"All test cases"} · ${T.createdAt}</p>
        ${T.sourceAvailable===!1&&a`<p role="note">This saved report belongs to a previous project location. Its source eval is unavailable; the report is read-only.</p>`}
        <${Rn} state=${e} evalPath=${T.evalPath} invoke=${n} />
        ${T.fixture&&a`<div><p>Fixture: ${T.fixture.id}</p>
          <${Rn} state=${e} evalPath=${T.evalPath} trajectory=${T.fixture.trajectory} invoke=${n} /></div>`}
        <p>Expected vs. observed outcomes, mismatches and errors:</p>
        ${T.results?.length>0&&a`<div class="report-table" tabindex="0" role="region" aria-label="Grader expectations and observations">
          <table><thead><tr><th scope="col">Test case / grader</th><th scope="col">Expected</th><th scope="col">Observed</th><th scope="col">Result</th><th scope="col">Score</th><th scope="col">Evidence</th><th scope="col">Error</th></tr></thead>
            <tbody>${Kr(T).map(_=>a`<tr><th scope="row">${_.name}</th><td>${_.expected}</td><td>${_.observed}</td><td>${_.outcome}</td>
              <td>${_.score??"N/A"}</td><td>${_.evidence??"N/A"}</td><td>${_.error??"N/A"}</td></tr>`)}</tbody>
          </table></div>`}
        <pre tabindex="0" role="region" aria-label="Grader test expected and observed results">${T.text}</pre>
      </section>`}
      <${Ce} error=${h||b.error||g.error} />
    </div>`}
  </section>`}function Yr({proposal:e,pending:t,error:n,outcome:r,onSave:o,onClose:s}){let c=R(null),i=R(null);Fe(()=>{i.current?.focus()},[]);function l(u){if(u.key==="Escape"&&(u.preventDefault(),s()),u.key!=="Tab")return;let d=[...c.current.querySelectorAll('button:not(:disabled), input:not(:disabled), summary, [tabindex="0"]')].filter(f=>f.checkVisibility({visibilityProperty:!0}));d.length&&(u.shiftKey&&(document.activeElement===d[0]||document.activeElement===i.current)?(u.preventDefault(),d.at(-1).focus()):!u.shiftKey&&document.activeElement===d.at(-1)&&(u.preventDefault(),d[0].focus()))}return a`<div class="modal-scrim"><section ref=${c} class="review-dialog" role="dialog" aria-modal="true" aria-labelledby="save-heading" onKeyDown=${l}>
    <div class="studio-heading"><h2 ref=${i} tabindex="-1" id="save-heading">Review files to create</h2>
      <button class="ck-btn" aria-label="Close save review" onClick=${s}>Close</button></div>
    <p>Only these new files will be created. Existing files are never overwritten. We'll check that the folder and file contents haven't changed before saving.</p>
    <${Ce} error=${n} />
    ${r&&!r.complete&&a`<div class="save-outcome" role="status" aria-label="Last save outcome">
      <strong>Save incomplete. Review each file.</strong>
      ${r.files.map(u=>a`<p key=${u.relativePath}>${u.relativePath}: ${u.status} · ${u.message}</p>`)}
      ${r.conflicts.map((u,d)=>a`<p key=${d}>${u.relativePath??u.phase}: ${u.message}</p>`)}
      <p>Your original request and proposed files are kept. Use this same proposal to recover the save.</p>
    </div>`}
    ${e.files.map(u=>a`<details key=${u.relativePath} open><summary>${u.relativePath} · ${u.kind==="fixture"?"Sample input file":"Eval file"} · ${u.content.length} characters</summary>
      <pre class="file-diff" tabindex="0" role="region" aria-label=${`New content for ${u.relativePath}`}>${u.content}</pre>
      <p class="ck-muted">SHA-256 ${u.hash}</p><p>Validation: ${At(u)}</p></details>`)}
    <div class="draft-actions">
      <button class="ck-btn" disabled=${!!t} onClick=${s}>Cancel</button>
      <button class="ck-btn ck-btn-primary" disabled=${!!t} onClick=${o}>${t?"Saving\u2026":"Create approved files"}</button>
    </div>
  </section></div>`}function Zr(e){return`Selected project search root: ${e}. Only this folder and its descendants are in scope, not its parent or home folder. Recognized paths include SKILL.md anywhere in scope (for example .agents/skills/<name>/SKILL.md, .github/skills/<name>/SKILL.md and .claude/skills/<name>/SKILL.md), *.agent.md, .github/agents/**/*.md, .claude/agents/**/*.md, AGENTS.md, CLAUDE.md, CLAUDE.local.md, GEMINI.md, copilot-instructions.md, *.instructions.md, *.prompt.md, mcp.json, .mcp.json and package.json MCP declarations. Discovery respects .gitignore, skips symbolic links/junctions and directories named node_modules, .git, .worktrees, dist, out, artifacts, .vscode-test, generated, results, .cache or coverage, and has bounded file, directory and size limits. Check Problems for incomplete discovery. Personal/global/installed Plugin skills outside this root were not searched.`}function Qr(e="cli"){return"To evaluate a personal or installed skill, open the folder containing its SKILL.md as your project. This host cannot add an outside skill as an extra source to the current project. Typing a path or Plugin name does not grant access. Evals will not scan your home folder or Plugin cache, copy the skill or bypass permissions. If you know where its SKILL.md is, "+(e==="canvas"?"choose Select personal skill folder\u2026 here, browse to its containing folder, choose it and approve that exact project in the native form; then select the exact discovered skill in Create. Alternatively use the existing Browse, then Load project selector. ":"explicitly switch the session folder with /cwd to its containing folder, then use /eval create and select that exact discovered skill. ")+"Choose the skill's own folder, not your whole home folder or Plugin cache. This switches the project. The skill stays where it is; new evals go to that project's configured destination, or evals if none is configured, rather than your previous project. Proceed only if the host permits access and you trust that folder. If access is declined/unavailable or an installed location is read-only, stop; use the skill's writable source checkout as the selected project, or author from explicit project requirements without claiming that the external skill was selected. Choose Project requirements to describe a task without selecting an individual asset or all assets. That option does not create a skill or agent."}function dt(e){requestAnimationFrame(()=>{document.activeElement===document.body&&e?.isConnected&&e.focus()})}function Nn({onKeep:e,onDiscard:t}){let n=R(null),r=R(null);return Fe(()=>{r.current?.focus()},[]),a`<div class="modal-scrim"><section ref=${n} class="review-dialog" role="alertdialog" aria-modal="true"
    aria-labelledby="discard-folder-heading" aria-describedby="discard-folder-description" onKeyDown=${o=>{if(o.key==="Escape"&&(o.preventDefault(),o.stopPropagation(),e()),o.key!=="Tab")return;let s=[...n.current.querySelectorAll("button")];o.shiftKey&&(document.activeElement===s[0]||document.activeElement===r.current)?(o.preventDefault(),s.at(-1).focus()):!o.shiftKey&&document.activeElement===s.at(-1)&&(o.preventDefault(),s[0].focus())}}>
    <h2 ref=${r} tabindex="-1" id="discard-folder-heading">Discard pending folder changes?</h2>
    <p id="discard-folder-description">You changed the folder selection but haven't loaded it. Keep your changes or discard them to close.</p>
    <div class="draft-actions"><button class="ck-btn" onClick=${e}>Keep changes</button>
      <button class="ck-btn ck-btn-danger" onClick=${t}>Discard changes</button></div>
  </section></div>`}function nn({initialFolder:e,invoke:t,onChoose:n,onClose:r}){let[o,s]=x(e),[c,i]=x(null),[l,u]=x(!1),[d,f]=x(""),[v,h]=x(!1),g=R(null),b=R(null),$=R(null),k=R(0),m=R(e);Fe(()=>{d&&!l&&$.current?.focus()},[d,l]);async function w(j){let P=++k.current;u(!0),f("");try{let T=await t("browse_folders",j?{folderPath:j}:{});if(k.current!==P)return;P===1&&(m.current=T.folderPath),i(T),s(T.folderPath)}catch(T){if(k.current!==P)return;f(Ge(T.message))}finally{k.current===P&&u(!1)}}Fe(()=>(b.current?.focus(),w(e),()=>{k.current++}),[]);function y(){o!==m.current?h(!0):r()}function A(j){if(j.key==="Escape"&&(j.preventDefault(),j.stopPropagation(),y()),j.key!=="Tab")return;let P=[...g.current.querySelectorAll("button:not(:disabled), input:not(:disabled)")];j.shiftKey&&(document.activeElement===P[0]||document.activeElement===b.current)?(j.preventDefault(),P.at(-1)?.focus()):!j.shiftKey&&document.activeElement===P.at(-1)&&(j.preventDefault(),P[0]?.focus())}return a`<div class="modal-scrim" onPointerDown=${j=>{j.target===j.currentTarget&&y()}}><section ref=${g} id="folder-dialog" class="review-dialog folder-dialog" role="dialog"
    aria-modal="true" aria-labelledby="folder-heading" onKeyDown=${A}>
    <div class="studio-heading"><h2 ref=${b} tabindex="-1" id="folder-heading">Choose a folder</h2>
      <button class="ck-btn" onClick=${y}>Cancel</button></div>
    <form onSubmit=${j=>{j.preventDefault(),w(o)}}>
      <label class="stack-label" for="folder-location">Location</label>
      <div class="project-input-row"><input ref=${$} id="folder-location" name="folderLocation" class="ck-input"
        autocomplete="off" spellcheck="false" value=${o} aria-invalid=${!!d} disabled=${l}
        onInput=${j=>s(j.target.value)} />
        <button class="ck-btn" type="submit" disabled=${l}>Open</button></div>
    </form>
    <div class="folder-controls"><button class="ck-btn" disabled=${l||!c?.parentPath}
      onClick=${()=>w(c.parentPath)}><${H} name="arrow-up" size=${16} />Up one folder</button>
      <span role="status">${l?"Loading folders\u2026":`${c?.folders.length??0} folders`}</span></div>
    ${d&&a`<p class="field-error" role="alert">${d}</p>`}
    <div class="folder-list" role="group" aria-label="Folders" aria-busy=${l}>
      ${c?.folders.map(j=>a`<button key=${j.path} class="folder-row" disabled=${l}
        onClick=${()=>w(j.path)}><${H} name="folder" size=${18} /><span>${j.name}</span><${H} name="chevron-right" size=${16} /></button>`)}
      ${c&&!c.folders.length&&!l&&a`<p class="ck-muted">No subfolders. You can choose this folder or go up.</p>`}
    </div>
    ${c?.limited&&a`<p class="ck-muted">Showing up to 200 folders after checking 512 entries. Open a more specific location to find others.</p>`}
    <button class="ck-btn ck-btn-primary" disabled=${l||!!d||!c||o!==c.folderPath}
      onClick=${()=>n(c.folderPath)}>Choose folder</button>
  </section>${v&&a`<${Nn} onKeep=${()=>{h(!1),dt(l?b.current:$.current)}}
    onDiscard=${r} />`}</div>`}function bt({projectPath:e,invoke:t}){let[n,r]=x(!1),[o,s]=x(""),c=R(null);return a`<div class="discovery-scope"><p>${Zr(e)}</p>
    <details><summary>Use a personal or installed skill</summary><p>${Qr("canvas")}</p>
      ${t&&a`<button ref=${c} class="ck-btn" type="button" onClick=${()=>{s(""),r(!0)}}>Select personal skill folder…</button>`}
      ${o&&a`<p class="field-error" role="alert">${o}</p>`}
      ${n&&a`<${nn} initialFolder=${e} invoke=${t}
        onClose=${()=>{r(!1),dt(c.current)}} onChoose=${async i=>{r(!1);try{await t("select_personal_skill_project",{projectPath:i})}catch(l){s(l.message)}finally{dt(c.current)}}} />`}
    </details></div>`}function Xr({groups:e,rows:t,query:n="",renderRow:r}){let o=(e.length?e:[{kind:"*",label:"Assets"}]).map(m=>({...m,rows:t.filter(w=>m.kind==="*"||w.kind===m.kind)})).filter(m=>m.rows.length),[s,c]=x(()=>new Set(o.map(m=>m.kind))),[i,l]=x(""),u=R(new Set(o.map(m=>m.kind))),d=R(null),f=o.map(m=>m.kind).join("|");q(()=>{let m=o.map(w=>w.kind).filter(w=>!u.current.has(w));if(m.length){for(let w of m)u.current.add(w);n.trim()||c(w=>{let y=new Set(w);for(let A of m)y.add(A);return y})}},[f,n]),q(()=>{n.trim()&&c(m=>{let w=f.split("|");if(!w.some(A=>m.has(A)))return m;let y=new Set(m);for(let A of w)y.delete(A);return y})},[n,f]);let v=o.flatMap(m=>[`group-${m.kind}`,...s.has(m.kind)?[]:m.rows.map(w=>w.id)]),h=v.includes(i)?i:v[0];function g(m){c(w=>{let y=new Set(w);return y.has(m)?y.delete(m):y.add(m),y})}function b(m){l(m),d.current.querySelector(`[data-tree-id="${CSS.escape(m)}"]`)?.focus()}function $(m,w,y,A){let j=v.indexOf(w);["ArrowDown","ArrowUp","Home","End"].includes(m.key)?(m.preventDefault(),b(v[m.key==="Home"?0:m.key==="End"?v.length-1:Math.max(0,Math.min(v.length-1,j+(m.key==="ArrowDown"?1:-1)))])):m.key==="ArrowLeft"?(m.preventDefault(),A?s.has(y)||g(y):b(`group-${y}`)):m.key==="ArrowRight"&&A&&(m.preventDefault(),s.has(y)?g(y):v[j+1]&&b(v[j+1]))}let k=o.some(m=>s.has(m.kind));return a`<div class="asset-tree-controls" role="group" aria-label="Asset group controls">
      <button class="ck-btn ck-btn-icon" type="button"
        aria-label=${k?"Expand all":"Collapse all"}
        title=${k?"Expand all":"Collapse all"}
        disabled=${!o.length}
        onClick=${()=>c(k?new Set:new Set(o.map(m=>m.kind)))}>
        <${H} name=${k?"chevrons-up-down":"chevrons-down-up"} size=${15} />
      </button>
    </div><div ref=${d} class="asset-tree" role="tree" aria-label="Assets">
    ${o.map(m=>a`<div role="none" key=${m.kind}>
      <button class="asset-tree-heading" role="treeitem" aria-level="1" aria-expanded=${!s.has(m.kind)}
        aria-owns=${s.has(m.kind)?void 0:`asset-group-${m.kind}`}
        data-tree-id=${`group-${m.kind}`} tabindex=${h===`group-${m.kind}`?0:-1}
        onFocus=${()=>l(`group-${m.kind}`)} onClick=${()=>g(m.kind)}
        onKeyDown=${w=>$(w,`group-${m.kind}`,m.kind,!0)}>
        <${H} name=${s.has(m.kind)?"chevron-right":"chevron-down"} size=${16} />
        <${H} name=${Yt(m.kind)} size=${16} /><span>${m.label}</span><span class="nav-count">${m.rows.length}</span>
      </button>
      ${!s.has(m.kind)&&a`<div role="group" id=${`asset-group-${m.kind}`}>
        ${m.rows.map(w=>r(w,{role:"treeitem","aria-level":2,"data-tree-id":w.id,tabindex:h===w.id?0:-1,onFocus:()=>l(w.id),onKeyDown:y=>$(y,w.id,m.kind,!1)}))}
      </div>`}
    </div>`)}
  </div>`}var On=e=>Array.isArray(e)?`[${e.join(", ")}]`:e;function es({tags:e={},enabled:t,projectPath:n,invoke:r,onChange:o,onPending:s}){let[c,i]=x(""),[l,u]=x(""),[d,f]=x(null),[v,h]=x(!1),[g,b]=x(""),[$,k]=x({}),[m,w]=x(null),y=R(0),{run:A,pending:j,error:P}=Ee(r),T=JSON.stringify(e);async function D(E=g,J=$,G){let Y=++y.current,te=await A("inspect_draft_organization",{tags:e,...E?{suite:E,choices:J}:{},...G!==void 0?{expectedConfigurationHash:G}:{}});return Y!==y.current?null:(w(te??null),te)}q(()=>{if(w(null),!t){y.current++;return}let E=++y.current,J=setTimeout(()=>{E===y.current&&D("",{})},200);return()=>{clearTimeout(J),y.current++}},[T,n,t]),q(()=>{s(!!c.trim()||!!d||v)},[c,d,v]),q(()=>()=>s(!1),[]);function _(E){y.current++,w(null),o(E)}function pe(E,J){_({...e,[E]:J}),i(""),u(""),f(null)}function ie(){let E=c.indexOf(":"),J=c.slice(0,E).trim(),G=c.slice(E+1).trim();if(E<1||!J||!G||J.length>120||G.length>120){u("Enter a tag as key: value, using at most 120 characters for each.");return}if(!Object.hasOwn(e,J)&&Object.keys(e).length>=16){u("The form supports up to 16 tag keys. Use the source editor for larger definitions.");return}if(Object.hasOwn(e,J)&&e[J]!==G){f({key:J,value:G});return}pe(J,G)}async function se(E){b(E),k({}),await D(E,{},m?.configurationHash)}function he(){y.current++,h(!1),b(""),k({})}let ue=m?.proposal,$e=m?.suites.find(E=>E.name===g),be=t&&!j;return a`<div class="authoring-tags">
    <div class="tag-label-row"><label for="authoring-tag-input">Tags <span class="ck-muted">optional</span></label>
      <button class="tag-shortcut" type="button" disabled=${!be} aria-expanded=${v}
        onClick=${async()=>{h(!0),b(""),k({}),await D("",{})}}>Use tags from a suite…</button></div>
    <div class="tag-input" role="group" aria-label="Draft tags">
      ${Object.entries(e).map(([E,J])=>a`<span class="draft-tag" key=${E}><span>${E}: ${On(J)}</span>
        <button type="button" aria-label=${`Remove tag ${E}`} disabled=${!t||v}
          onClick=${()=>{let G={...e};delete G[E],_(G)}}>×</button></span>`)}
      <input id="authoring-tag-input" aria-label="Add a draft tag" placeholder="Add key: value, then Enter" value=${c}
        disabled=${!t||v} onInput=${E=>{i(E.target.value),u(""),f(null)}}
        onKeyDown=${E=>{E.key==="Enter"&&(E.preventDefault(),ie())}} />
      ${c.trim()&&a`<button class="ck-btn" type="button" disabled=${!t||v} onClick=${ie}>Add tag</button>`}
    </div>
    ${l&&a`<p role="alert">${l}</p>`}
    ${d&&a`<div class="tag-replacement" role="status">Replace ${d.key}: ${On(e[d.key])} with ${d.value}?
      <button class="ck-btn" type="button" disabled=${!t} onClick=${()=>pe(d.key,d.value)}>Replace tag value</button>
      <button class="ck-btn" type="button" onClick=${()=>{f(null),i("")}}>Keep existing value</button></div>`}
    ${v&&a`<section class="suite-tag-helper" aria-label="Use tags from a suite filter">
      <div class="tag-label-row"><strong>Use tags from a suite filter</strong><button type="button" class="tag-shortcut"
        aria-label="Close suite tag helper" onClick=${he}>Close</button></div>
      <p class="ck-muted">Review tags to add or replace. This does not assign the eval to a suite.</p>
      <label class="stack-label">Copy filter from<select class="ck-select" value=${g} disabled=${!be||!m}
        onChange=${E=>se(E.target.value)}><option value="">Choose a suite</option>
        ${m?.suites.map(E=>a`<option key=${E.name} value=${E.name}>${E.name}</option>`)}</select></label>
      ${m&&!m.suites.length&&a`<p class="ck-muted">No supported suite filters are available. Tags remain optional.</p>`}
      ${$e&&a`<div class="suite-tag-choices">${Object.entries($e.filter).map(([E,J])=>{let G=Array.isArray(J)?J:[J];return a`<div key=${E}><code>${E}</code>${G.length===1?a`<code>${G[0]}</code>`:a`<label class="stack-label">Value for ${E}<select class="ck-select" disabled=${!be} value=${Object.hasOwn($,E)?$[E]:""}
            onChange=${async Y=>{let te={...$,[E]:Y.target.value};Y.target.value||delete te[E],k(te),await D(g,te,m.configurationHash)}}><option value="">Choose a value if needed</option>${G.map(Y=>a`<option key=${Y} value=${Y}>${Y}</option>`)}</select></label>`}</div>`})}</div>`}
      ${ue&&a`<div class="tag-change-preview" role="status">
        ${ue.changes.map(E=>a`<p key=${E.key}>${E.before===null?"Add":"Replace"} <code>${E.key}</code>:
          ${E.before!==null?`${On(E.before)} \u2192 `:""}${E.after}</p>`)}
        ${!ue.changes.length&&!ue.requiredChoices.length&&a`<p>No tag changes needed.</p>`}
        ${ue.requiredChoices.map(E=>a`<p key=${E.key}>Choose one allowed value for ${E.key}.</p>`)}
        <p class="ck-muted">Other tags are kept. ${ue.hasFileSelectors?"This suite also selects files; membership is not confirmed.":"Tag matches do not confirm native suite membership."}</p>
      </div>`}
      <div class="suite-tag-actions"><button class="ck-btn" type="button" onClick=${he}>Cancel</button>
        <button class="ck-btn ck-btn-primary" type="button" disabled=${!be||!ue?.ready}
          onClick=${async()=>{let E=await D(g,$,m.configurationHash);if(!E?.proposal?.ready)return;let J=E.suites.find(Y=>Y.name===g).filter,G=Object.fromEntries(Object.keys(J).map(Y=>[Y,E.proposal.tags[Y]]));o(E.proposal.tags,E.configurationHash,G),h(!1),b(""),k({})}}>Apply tags to draft</button></div>
    </section>`}
    <div class="tag-matches" role="status"><span class="ck-muted">Matching suite filters</span>
      ${t?m?m.matches.length?m.matches.map(E=>a`<span class="suite-filter-match" key=${E.name}>${E.name}${E.hasFileSelectors?" (file rules apply)":""}</span>`):a`<span class="ck-muted">None for the current form tags.</span>`:a`<span class="ck-muted">${j?"Reading filters\u2026":"Unavailable until filters are refreshed."}</span>`:a`<span class="ck-muted">Trust the project to inspect filters.</span>`}
      ${m?.matches.length>0&&a`<span class="ck-muted">Tag matches only; actual inclusion is not confirmed.</span>`}
    </div>
    ${m?.guidance.slice(2).map((E,J)=>a`<p class="ck-muted" key=${J}>${E}</p>`)}
    ${P&&a`<button type="button" class="ck-btn" disabled=${!be} onClick=${()=>{b(""),k({}),D("",{})}}>Refresh suite filters</button>`}
    <${Ce} error=${P} />
  </div>`}function ts({state:e,invoke:t,conflict:n,pending:r,lockedDraft:o,dirty:s,syncIssue:c,projectAssets:i,run:l,draftEpoch:u,lastSynced:d,lastEpoch:f,setFiles:v,setDirectoryChoice:h,setSelected:g,setDirty:b,setConflict:$,setSyncIssue:k,sync:m}){return a`
    ${e.closedSave&&a`<div class="studio-warning" role="status">
      Earlier save history (read only): ${e.closedSave.saving?"Waiting for the original save outcome.":e.closedSave.saveOutcome?.complete?"The original save completed.":e.closedSave.saveAttempted?"The original save requires explicit recovery.":"The original save did not start."}
      <div>Request ${e.closedSave.request?.requestId} · Proposal ${e.closedSave.proposal?.proposalId}</div>
      ${e.closedSave.proposal?.files.map(w=>a`<div>${w.relativePath}:
        ${e.closedSave.saveOutcome?.files?.find(y=>y.relativePath===w.relativePath)?.status??"Outcome not recorded"}</div>`)}
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
      <button class="ck-btn" disabled=${!!r} onClick=${()=>{d.current=e.draft.revision,v(e.draft.files),f.current=u,h(e.draft.outputDirectory??""),g(0),b(!1),$(!1),k("")}}>Load shared draft</button>
      <button class="ck-btn" disabled=${!!r||o} onClick=${()=>m(!0)}>Keep my edits</button></div>`}
    ${!i.length&&e.discovery?.status==="ready"&&a`<${bt} projectPath=${e.projectPath} invoke=${t} />`}
    ${e.draft.recoveryNotice&&a`<${Ce} error=${e.draft.recoveryNotice} />`}
    ${e.retainedDrafts?.length>0&&a`<details class="config-review"><summary>Other retained draft data</summary>
      <p>These are unverified copies, not current-source evidence or Save approval. Earlier-directory copies require an explicit new source binding.</p>
      ${e.retainedDrafts.map((w,y)=>a`<section key=${w.key}>
        <h3>Retained version ${y+1}</h3>
        <pre>${JSON.stringify(w.data??{unavailable:!0,key:w.key},null,2)}</pre>
        ${w.rootMatches&&!w.unavailable&&a`<button class="ck-btn" disabled=${!!r||o||s||n||!!c}
          onClick=${()=>l("restore_retained_draft",{key:w.key,revision:w.revision,expectedRevision:e.draft.revision})}>Use retained version ${y+1}</button>`}
      </section>`)}
      ${e.retainedDraftsOmitted!==0&&a`<p>Additional retained history was not fully enumerated. No files were discarded.</p>`}
    </details>`}`}function ns({state:e,invoke:t,run:n,draftEpoch:r,files:o,setFiles:s,setSelected:c,setDirty:i,setDiscard:l,setSyncIssue:u,setReview:d,setIncludeSource:f,setDirectoryChoice:v,guided:h,setGuided:g,replace:b,setReplace:$,tagsPending:k,setTagsPending:m,pending:w,lockedDraft:y,conflict:A,ready:j,canRetarget:P,isStarterDraft:T,source:D,copyNotice:_,allProjectFiles:pe,projectAssets:ie,projectEvals:se,outputDirectory:he,directoryChoice:ue,hasBoundRequest:$e,hasBoundHandoff:be,version:E,lastSynced:J,lastEpoch:G,sharedEpoch:Y,hasHandoff:te,retargetDraft:Z}){return a`<form class="guided-create" aria-label="Create eval from expected response" onSubmit=${async M=>{if(M.preventDefault(),y||A||k)return;if(o.length&&!T&&!b){$(!0);return}if(w)return;let N=E.current,W=J.current,ke=G.current,U={...h};delete U.suiteFilterTags;let Q=await n("compose_eval",U);!Q||E.current!==N||J.current!==W||G.current!==ke||Y.current!==ke||(E.current++,s(Q.files),c(0),i(!0),l(!1),$(!1),u(""),d(!1))}}>
      <div class="guided-example"><h3>Eval details</h3>
        <button class="ck-btn" type="button" onClick=${()=>{g({name:"Friendly greeting",task:"Greet a new teammate in one short sentence. Include the words Welcome aboard.",expected:"Welcome aboard"}),$(!1)}}>Load example</button>
        ${D?.kind==="eval"&&D.text&&a`<button class="ck-btn" type="button" aria-describedby="source-copy-notice" disabled=${!!w||y||A||D.sourceUnchanged!==!0||D.stale} onClick=${()=>{if(!(y||D.sourceUnchanged!==!0||D.stale)){if(o.length&&!T&&!b){$(!0);return}E.current++,i(!0),l(!1),$(!1),d(!1),u(""),s([{relativePath:In(D.relativePath),kind:"eval",content:D.text}]),c(0)}}}>${b&&!T?"Confirm load selected eval":"Load selected eval into editor"}</button>`}
        <p id="source-copy-notice" role="status" class=${_?"":"sr-only"}>${_}</p>
      </div>
      <label class="stack-label">Eval name<input class="ck-input" name="eval-name" value=${h.name} maxLength="120"
        onInput=${M=>{$(!1),g(N=>({...N,name:M.target.value}))}} /></label>
      <div class="guided-field">
      <label class="stack-label target-asset-picker">Project file or eval to base this on (optional)
        <select class="ck-select" name="target-asset" value=${w?void 0:e.selectedAssetId??""}
          aria-describedby="guided-source-help"
          disabled=${!P}
          onChange=${async M=>{let N=M.target.value,W=pe.find(we=>we.id===N),ke=E.current,U=T;if(e.draft.request&&!y&&!await Z())return;let Q=J.current,ne=G.current,me=await n("preview_asset",{id:N});me&&(f(!!N),W&&E.current===ke&&J.current===Q&&G.current===ne&&Y.current===ne&&($(!1),g(we=>({...we,name:we.name==="New eval"?W.kind==="eval"?`${W.name} copy`:`${W.name} eval`:we.name})),W.kind==="eval"&&me.sourceUnchanged===!0&&!me.stale&&typeof me.text=="string"&&U&&(E.current++,i(!0),s([{relativePath:In(W.relativePath),kind:"eval",content:me.text}]),c(0))))}}>
          <option value="">General eval (no specific project file)</option>
          ${ie.length>0&&a`<optgroup label="Project skills, instructions & agents">
            ${ie.map(M=>a`<option value=${M.id} key=${M.id}>${M.name} · ${M.kind} · ${M.relativePath}</option>`)}
          </optgroup>`}
          ${se.length>0&&a`<optgroup label="Existing project evals">
            ${se.map(M=>a`<option value=${M.id} key=${M.id}>${M.name} · eval · ${M.relativePath}</option>`)}
          </optgroup>`}
        </select>
      </label>
      <p id="guided-source-help" class="ck-muted">A general eval uses project requirements, not every asset, and does not create a new skill or agent.</p>
      </div>
      ${e.draft.request&&(e.draft.request.targetId??"")!==(e.selectedAssetId??"")&&a`
        <button class="ck-btn" type="button" disabled=${!P||A} onClick=${async()=>{let M=J.current,N=G.current;e.selectedAssetId&&!await n("preview_asset",{id:e.selectedAssetId})||J.current!==M||G.current!==N||Y.current!==N||te.current||await Z()}}>Use selected source for this draft</button>`}
      <label class="stack-label guided-section">Task<textarea class="ck-textarea" name="eval-task" rows="3" maxLength="8000" value=${h.task}
        placeholder="What should the AI do?" onInput=${M=>{$(!1),g(N=>({...N,task:M.target.value}))}} /></label>
      <div class="guided-field">
      <label class="stack-label">Expected response<textarea class="ck-textarea" name="eval-expected" rows="3" maxLength="4000" value=${h.expected}
        aria-describedby="guided-expected-help"
        placeholder="Text the response must contain" onInput=${M=>{$(!1),g(N=>({...N,expected:M.target.value}))}} /></label>
      <p id="guided-expected-help" class="ck-muted">Text the response must contain.</p>
      </div>
      <div class="guided-section">
      <${es} key=${`${e.projectPath}:${r}`} tags=${h.tags??{}} enabled=${j&&!y&&!A}
        projectPath=${e.projectPath} invoke=${t} onPending=${m}
        onChange=${(M,N,W)=>{$(!1),g(ke=>{let U={...ke,tags:M};N!==void 0&&(U.expectedConfigurationHash=N,U.suiteFilterTags=W??M);let Q=U.suiteFilterTags??ke.tags??{};return Object.entries(Q).some(([ne,me])=>Object.hasOwn(M,ne)&&JSON.stringify(M[ne])===JSON.stringify(me))||(delete U.expectedConfigurationHash,delete U.suiteFilterTags),U})}} />
      </div>
      <div class="guided-field">
      <label class="stack-label">Eval directory (optional)<input class="ck-input" name="draft-directory" maxLength="180"
        aria-describedby="guided-directory-help"
        value=${he??ue} disabled=${y||$e||be||!!w}
        placeholder="Project-relative directory; leave blank to use project settings"
        onKeyDown=${M=>{M.key==="Enter"&&M.preventDefault()}}
        onInput=${M=>{y||$e||be||(E.current++,v(M.target.value),i(!0),d(!1),u(""))}} /></label>
      <p id="guided-directory-help" class="ck-muted">Choose before checking or asking Copilot. The destination stays fixed until you discard this draft.</p>
      </div>
      <p class="guided-preset ck-muted"><strong>Starter preset: 1 prompt · 1 attempt · 60 seconds · copilot-sdk</strong>
        <span>Output-contains check. Edit it or ask Copilot for other tests. This preset doesn't keep settings from an existing eval.</span></p>
      <div class="guided-footer">
        <p class="ck-muted">${k?"Finish adding tags or close the suite helper before building.":"Builds an editable draft with these tags and text check. No AI requests, file changes or suite settings changes."}</p>
        <button class="ck-btn ck-btn-primary" type="submit" disabled=${k||!!w&&(b||!o.length||T)||y||A||!h.name.trim()||!h.task.trim()||!h.expected.trim()}>
          ${b?"Replace editor draft":"Build eval draft"}</button>
      </div>
      ${b&&a`<p class="studio-warning" role="status">This replaces the current draft in the editor. Project files won't change.</p>`}
    </form>`}function rs({state:e,run:t,files:n,setFiles:r,setDirectoryChoice:o,setSelected:s,setDirty:c,setConflict:i,setDiscard:l,setReview:u,setSyncIssue:d,dirty:f,blocked:v,lockedDraft:h,conflict:g,ready:b,canRetarget:$,canRetryDraft:k,stepReadyToSave:m,stepStatus:w,syncIssue:y,pending:A,discard:j,showDiagnostics:P,setShowDiagnostics:T,saveButton:D,version:_,lastSynced:pe,lastEpoch:ie,sharedEpoch:se,discardRevision:he,discardEpoch:ue,applying:$e,sync:be,retargetDraft:E,validate:J,retryDraft:G,onSetup:Y,onActivity:te,error:Z}){return a`
        <div class="draft-steps" role="status" aria-label="Draft workflow progress">
          <span class=${`draft-step ${!m&&!e.draft.saveOutcome?.complete?"active":"done"}`}>1. Edit draft</span>
          <span class=${`draft-step ${m?"active":e.draft.saveOutcome?.complete?"done":""}`}>2. Check format</span>
          <span class=${`draft-step ${e.draft.saveOutcome?.complete?"active":""}`}>3. Review & save</span>
          <span class="draft-step-hint ck-muted">${w}</span>
        </div>
        <div class="draft-actions">
          ${y&&a`<button class="ck-btn" disabled=${!!A||h||g} onClick=${()=>be()}>Retry sync</button>`}
          ${e.draft.request?.canRestart&&a`<button class="ck-btn" disabled=${!b||!$||g||!!y}
            onClick=${E}>Start fresh request</button>`}
          <button class="ck-btn ck-btn-primary" aria-describedby="draft-blocked-reason" disabled=${!!v||h||!n.length||k||e.draft.saving||e.draft.closed||e.draft.saveAttempted||e.draft.request?.stateUnavailable||e.draft.request?.recoveryRequired} onClick=${J}>${A==="validate_draft"?"Checking\u2026":"Check draft"}</button>
          ${k&&a`<button class="ck-btn" disabled=${!!v} onClick=${G}>Retry edited draft</button>
            <p class="ck-muted">Prepare new files for the same original source. This doesn't run an eval or model, or recover an incomplete save.</p>`}
          <button ref=${D} class="ck-btn" aria-describedby="draft-blocked-reason" disabled=${!!v||f||!e.draft.proposal?.canCommit||e.draft.saving||e.draft.closed} onClick=${()=>u(!0)}>Review & save</button>
          <button class="ck-btn" disabled=${!!A||h||g} onClick=${async()=>{if(!j){he.current=pe.current,ue.current=ie.current,l(!0);return}let M=_.current,N=ue.current;$e.current=!0;try{let W=await t("clear_draft",{expectedRevision:he.current,...N?{expectedEpoch:N}:{}});W&&ie.current===N&&(se.current===N||W.epoch===se.current)&&(W.epoch===void 0||!N||W.epoch===N)&&(W.epoch!==void 0&&(ie.current=W.epoch),pe.current=W.revision??e.draft.revision,i(!1),_.current===M&&(r([]),o(""),s(0),c(!1)),l(!1),u(!1),d(""))}finally{$e.current=!1}}}>${j?"Confirm discard draft":"Discard"}</button>
        </div>
        <p id="draft-blocked-reason" role="status" class="ck-muted">${v||(n.length?k?"Choose Retry edited draft to prepare new files for review, then choose Check draft again.":m?"Review the exact checked files, then approve Save separately.":"Edits sync in memory only. Choose Check draft before Review & save.":"Add a draft file before checking or saving.")}</p>
        ${e.draft.proposal&&(()=>{let M=!e.draft.proposal.canCommit&&e.draft.proposal.conflicts.some(N=>N.code==="validation-deadline");return a`<div class=${`draft-validation ${e.draft.proposal.canCommit?"accepted":"rejected"}`}>
          <strong>${e.draft.proposal.canCommit?"Accepted for file creation":M?"Validation timed out (eval was not rejected as invalid)":"Not ready to save"}</strong>
          <p>${e.draft.proposal.canCommit?"These files passed the format check. Runner compatibility is shown for reference and doesn't block saving. Running still needs separate compatibility checks and approval.":M?"Validation timed out after 15 seconds without a verdict. The eval may still be valid. Retry the unchanged proposal, view diagnostics, or open runner settings.":"Fix the listed conflicts, then retry these proposed files when allowed. This doesn't run the eval."}</p>
          ${M&&a`<div class="draft-actions">
            ${k&&a`<button class="ck-btn ck-btn-primary" type="button" disabled=${!b||!!A||g} onClick=${G}>Retry validation</button>`}
            <button class="ck-btn" type="button" onClick=${()=>T(N=>!N)}>${P?"Hide diagnostics":"View diagnostics"}</button>
            <button class="ck-btn" type="button" onClick=${()=>Y?Y():document.getElementById("btn-setup")?.click()}>Open runner settings</button>
          </div>`}
          ${e.draft.proposal.conflicts.map((N,W)=>a`<p key=${W} role="status">${N.relativePath??N.phase}: ${N.message}</p>`)}
          ${!f&&e.draft.proposal.organization&&a`<details><summary>Proposed tag and suite alignment</summary>
            ${e.draft.proposal.organization.map((N,W)=>a`<p key=${W}>${N}</p>`)}</details>`}
          ${e.draft.proposal.files.map(N=>a`<details key=${N.relativePath} open=${P||void 0}><summary>${N.relativePath}: ${At(N)}</summary>
            <pre tabindex="0">${N.validation?.diagnosticText??(N.kind==="fixture"?"Fixture bytes only; no script is run.":"Validation has not run for this definition.")}</pre>
            ${N.support&&a`<p>Runner compatibility (for reference): ${Ur(N.support)}</p>
              <pre tabindex="0">${[`Technical runner profile: ${N.support.profile}`,...N.support.diagnostics].join(`
`)}</pre>`}</details>`)}
        </div>`})()}
        ${e.draft.saveOutcome&&a`<div class="save-outcome" role="status"><strong>${e.draft.saveOutcome.complete?"Approved files created.":"Save incomplete. Review each file."}</strong>
          ${e.draft.saveOutcome.files.map(M=>a`<p key=${M.relativePath}>${M.relativePath}: ${M.status} · ${M.message}</p>`)}
          ${e.draft.saveOutcome.conflicts.map((M,N)=>a`<p key=${N}>${M.message}</p>`)}
          ${e.draft.saveOutcome.complete&&e.draft.saveOutcome.organization&&a`<details open><summary>Saved tag and suite alignment</summary>
            ${e.draft.saveOutcome.organization.map((M,N)=>a`<p key=${N}>${M}</p>`)}</details>`}
          ${e.draft.saveOutcome.complete&&a`<button class="ck-btn" onClick=${te}>Next: choose an eval to run</button>`}</div>`}
        <${Ce} error=${Z} />`}function ss({state:e,message:t,setMessage:n,source:r,effectiveIncludeSource:o,setIncludeSource:s,includeOrganization:c,setIncludeOrganization:i,lockedDraft:l,conflict:u,dirty:d,pending:f,blocked:v,chatEnd:h,run:g,version:b,sync:$}){return a`<aside class="copilot-panel" aria-label="Copilot draft assistant">
        <div class="copilot-heading"><${H} name="sparkles" size=${20} /><strong>Copilot</strong><span class="ck-badge">Suggestions for review</span></div>
        <div class=${`chat-messages ${e.chat.messages.length?"":"chat-empty"}`} role="log" aria-live="polite" aria-label="Draft conversation">
          ${!e.chat.messages.length&&a`<div class="chat-welcome"><h3>Need help shaping your eval?</h3>
            <p>Tell Copilot what you want the AI to do and what a good response looks like. It will suggest eval files for you to review.</p>
            ${["Create an eval for this skill using a realistic request.","Create an eval that checks for an exact response.","Help me improve how this eval scores responses."].map(k=>a`
              <button class="prompt-chip" onClick=${()=>n(k)}>${k}</button>`)}</div>`}
          ${e.chat.messages.map(k=>a`<article class=${`chat-message ${k.role}`} key=${k.id}>
            <strong>${k.role==="user"?"You":"Copilot"}</strong><p>${k.text}</p>
            ${k.proposed?.length&&a`<details class="ai-proposal"><summary>Review ${k.proposed.length} proposed files</summary>
              ${k.proposed.map(m=>a`<details key=${m.relativePath}><summary>${m.relativePath}</summary><pre tabindex="0">${m.content}</pre></details>`)}
              <button class="ck-btn" disabled=${l||u||d||!!f||k.draftRevision!==e.draft.revision}
                onClick=${()=>g("accept_proposal",{id:k.id})}>Use reviewed proposal as draft</button>
              ${d&&a`<p class="ck-muted">Apply or discard local editor changes before accepting a proposal.</p>`}</details>`}
          </article>`)}
          ${["approval","thinking"].includes(e.chat.status)&&a`<p class="thinking" role="status">${e.chat.status==="approval"?"Waiting for AI request approval\u2026":"Copilot is preparing a response\u2026"} <button class="ck-btn" onClick=${()=>g("cancel_chat")}>Discard response</button></p>`}
          <div ref=${h}></div>
        </div>
        <form class="chat-composer" onSubmit=${async k=>{if(k.preventDefault(),v||l||["approval","thinking"].includes(e.chat.status))return;let m=t,w=b.current;if((d||!e.draft.files.length)&&(!await $()||b.current!==w))return;await g("chat_author",{message:m,includeSource:o,includeOrganization:c})&&n(A=>A===m?"":A)}}>
          <label class="sr-only" for="author-message">Describe the eval to build</label>
          <textarea class="ck-textarea" id="author-message" name="author-message" autocomplete="off" rows="3" value=${t} maxLength="8000"
            placeholder="Describe the task and expected outcome…" onInput=${k=>n(k.target.value)}></textarea>
          <label class=${`source-sharing ${!r||r.stale?"is-disabled":""}`.trim()}><input type="checkbox" checked=${o} disabled=${!r||r.stale}
            onChange=${k=>s(k.target.checked)} /><span>${r?`Include selected file preview (${r.title})`:"Include project file preview (select a project asset above first)"}</span></label>
          <label class="source-sharing"><input type="checkbox" name="include-organization" checked=${c}
            onChange=${k=>i(k.target.checked)} /><span>Include project tag and suite suggestions</span></label>
          <p class="ck-muted">Sends your draft and conversation to your connected AI model and may use paid quota. File previews and project tag suggestions are optional; inspect them before sharing. Recognized secrets are hidden, but other private metadata may remain. Replies won't run tools or save files.</p>
          <button class="ck-btn ck-btn-primary" type="submit" aria-describedby="send-blocked-reason" disabled=${!!v||l||!t.trim()||["approval","thinking"].includes(e.chat.status)}>Send to Copilot</button>
          <p id="send-blocked-reason" role="status" class="ck-muted">${v||(l?"Review & save retries the same checked files. Editing and AI stay blocked until you recover that save.":["approval","thinking"].includes(e.chat.status)?"Wait for Copilot or discard the pending response.":t.trim()?"Review Copilot's suggestions, check the draft, then approve Save separately.":"Describe the eval or change to send to Copilot.")}</p>
          <${Ce} error=${e.chat.error} />
        </form>
      </aside>`}function as({label:e,name:t,value:n,onChange:r,single:o=!1,disabled:s=!1}){let c=n.split(`
`),i=(l,u)=>r(c.map((d,f)=>f===l?u:d).join(`
`));return a`<div class="config-path-group">
    <div class="config-path-heading"><span>${e}</span>
      ${!o&&a`<button class="config-text-button" type="button" disabled=${s}
        aria-label=${`Add ${e.toLowerCase()}`} onClick=${()=>r(`${n}
`)}>+ Add</button>`}</div>
    ${c.map((l,u)=>a`<div class="config-path-row" key=${u}>
      <div class="config-path-input"><${H} name=${t==="evalFilenames"?"file-code":"folder"} size=${14} />
        <input class="ck-input" name=${`setup-${t}-${u}`} aria-label=${`${e} ${u+1}`}
          value=${l} disabled=${s} spellcheck="false" autocomplete="off" onInput=${d=>i(u,d.target.value)} /></div>
      ${!o&&c.length>1&&a`<button class="ck-btn ck-btn-icon" type="button" disabled=${s}
        aria-label=${`Remove ${e.toLowerCase()} ${u+1}`} onClick=${()=>r(c.filter((d,f)=>f!==u).join(`
`))}>×</button>`}
    </div>`)}
  </div>`}function Dn({filename:e,subtitle:t,text:n,exact:r=!1,ci:o=!1}){return a`<aside class="config-preview" aria-label="Configuration preview">
    <div class="eyebrow">Preview your changes</div>
    <section class="config-file-summary">
      <div class="config-summary-title"><${H} name="file-code" size=${20} /><div><strong><code>${e}</code></strong><p>${t}</p></div>
        <span class="ck-badge">${r?"Reviewed":"Draft"}</span></div>
      <div class="config-summary-facts"><div><small>Scope</small><span>${o?"GitHub Actions":"Project configuration"}</span></div>
        <div><small>Effect</small><span>File changes only</span></div></div>
    </section>
    <section class="config-code-card">
      <header><span><${H} name="file-code" size=${14} />YAML preview</span><span>${r?"Exact proposal":"Working draft"}</span></header>
      <pre tabindex="0" aria-label="Configuration YAML preview">${n.split(`
`).map((s,c)=>a`<span class="config-code-line"><span aria-hidden="true">${c+1}</span><code>${s||" "}</code></span>`)}</pre>
      <footer>${r?"This is the file to save. Your app will still ask for approval.":o?"Workflow outline only. Review builds the full file and checks that the source hasn't changed.":"Edited fields only, not a complete file. Review preserves existing YAML."}</footer>
    </section>
    <div class="config-safety"><${H} name="shield-check" size=${17} /><div><strong>Nothing runs when you configure.</strong>
      <p>${o?"Saving does not commit or run this workflow. Publishing it may enable future runs under the selected triggers.":"Reading these settings doesn't check whether they work. Saving doesn't install a runner, set up CI, or run evals."}</p></div></div>
  </aside>`}function os({proposal:e,ci:t,pending:n,error:r,notice:o,onSave:s,onClose:c}){let i=R(null),l=R(null);Fe(()=>{let d=document.activeElement;return l.current?.focus(),()=>{d?.isConnected&&d.focus()}},[]);function u(d){if(d.key==="Escape"&&!n&&(d.preventDefault(),c()),d.key!=="Tab")return;let f=[...i.current.querySelectorAll('button:not(:disabled), summary, [tabindex="0"]')].filter(v=>v.checkVisibility({visibilityProperty:!0}));if(!f.length){d.preventDefault();return}d.shiftKey&&(document.activeElement===f[0]||document.activeElement===l.current)?(d.preventDefault(),f.at(-1).focus()):!d.shiftKey&&(document.activeElement===f.at(-1)||document.activeElement===l.current)&&(d.preventDefault(),f[0].focus())}return a`<div class="modal-scrim config-modal"><section ref=${i} class="review-dialog config-review"
    role="dialog" aria-modal="true" aria-labelledby="config-review-title" onKeyDown=${u}>
    <header class="config-review-header"><div><h2 id="config-review-title" ref=${l} tabindex="-1">
      ${t?"Review CI workflow changes":"Review exact .vally.yaml changes"}</h2>
      <p>Review the full file. Your app will ask for separate approval before saving.</p></div>
      <button class="ck-btn ck-btn-icon" disabled=${n} onClick=${c} aria-label="Close configuration review">×</button></header>
    <div class="config-review-body" aria-label=${t?"CI workflow change review":"Project configuration change review"}>
      <p><code>${e.relativePath}</code></p>
      ${e.diff&&a`<details open><summary>Exact diff</summary><pre tabindex="0">${e.diff}</pre></details>`}
      <details><summary>Before</summary><pre tabindex="0">${e.before??"(new file)"}</pre></details>
      <details open><summary>After</summary><pre tabindex="0">${e.after}</pre></details>
      ${e.sha256&&a`<p class="config-hash">SHA-256: ${e.sha256}</p>`}
      ${e.notices?.map(d=>a`<p class="config-review-notice">${d}</p>`)}
      <${Ce} error=${r} />
      ${o&&a`<p role="status">${o}</p>`}
    </div>
    <footer class="config-review-footer"><p>Only this file changes. No eval runs.</p><div>
      <button class="ck-btn" disabled=${n} onClick=${c}>Back to editing</button>
      <button class="ck-btn ck-btn-primary" disabled=${n} onClick=${s}>
        ${n?"Waiting for approval\u2026":t?"Save reviewed workflow":"Save reviewed configuration"}</button>
    </div></footer>
  </section></div>`}var Et=e=>e.split(/\r?\n/).map(t=>t.trim()).filter(Boolean),Ln=()=>({evals:"",skills:"",results:"",evalFilenames:""}),Mn=(e,t=[])=>Object.entries(e).map(([n,r])=>({key:n,values:Array.isArray(r)?[...r]:[r],array:Array.isArray(r)&&!(r.length===1&&t.includes(n))})),Rt=e=>Object.fromEntries(e.map(t=>[t.key,t.array||t.values.length>1?t.values:t.values[0]])),is=(e,t)=>{let n=r=>Object.entries(r).sort(([o],[s])=>o.localeCompare(s)).map(([o,s])=>[o,Array.isArray(s)?s:[s]]);return JSON.stringify(n(e))===JSON.stringify(n(t))};function Nt(e){let t=JSON.parse(e);if(!t||typeof t!="object"||Array.isArray(t)||Object.entries(t).some(([n,r])=>!n.length||!(typeof r=="string"?r.length:Array.isArray(r)&&r.length&&r.every(o=>typeof o=="string"&&o.length))))throw new Error("Give each tag a text value or a list of text values. Don't leave values or lists empty.");return t}function ls({state:e,invoke:t,section:n="project",onSection:r}){let[o,s]=x(null),[c,i]=x(Ln),[l,u]=x([]),[d,f]=x(""),[v,h]=x(""),[g,b]=x(""),[$,k]=x([]),[m,w]=x([]),[y,A]=x(!1),[j,P]=x("{}"),[T,D]=x(""),[_,pe]=x(null),[ie,se]=x(null),[he,ue]=x(""),[$e,be]=x("manual-and-pull-requests"),[E,J]=x("evals.yml"),[G,Y]=x("preserve"),[te,Z]=x(null),[M,N]=x(!0),[W,ke]=x(""),[U,Q]=x(""),[ne,me]=x("ready"),[we,xe]=x(null),[Se,Ne]=x(!1),[Oe,je]=x(!1),X=R(null),le=R(0),He=R(Promise.resolve()),B=R(""),ve=R(0),ce=R(0),oe=R({choice:"",name:""}),de=R(null),ge=R(null),V=R(null),ae=R(!1),{run:_e,pending:Te,error:Ve,reset:et}=Ee(t,{returnCancellation:!0}),Be=o?.declarations?.suites??[],tt=Be.filter(S=>S.inspectable),p=d.startsWith("existing:")?Be[Number(d.slice(9))]:null,C=l.length>0||$.length>0||d==="new"&&!ie,F=we!==null||!!Te&&ne!=="refreshing",ee=we===null&&(o?.state==="missing"||o?.state==="available"),Ae=M&&e.trusted&&o?.state==="available"&&o.complete&&tt.some(S=>S.name===he)&&!C&&ne==="ready",Le=JSON.stringify({paths:c,editedPaths:l,suiteChoice:d,suite:v,description:g,editedSuite:$,tags:m,advanced:y,filter:j,patterns:T,ciSuite:he,ciWhen:$e,ciFilename:E,ciTranscriptUploads:G});B.current=Le,q(()=>{if(!Se||!Oe||!o||!e.trusted||ne!=="ready")return;let S=le.current,I=o.source?.hash??null,z=setTimeout(()=>{He.current=He.current.catch(()=>{}).then(async()=>{if(S!==le.current)return;let L=await t("retain_project_setup_inputs",{inputs:JSON.parse(Le),sourceHash:I,revision:X.current});S===le.current&&typeof L?.revision=="string"&&(X.current=L.revision,B.current===Le&&je(!1))}).catch(()=>{S===le.current&&Q("Setup inputs could not be retained privately. Keep this form open and preserve your edits before closing.")})},250);return()=>clearTimeout(z)},[Se,Oe,Le,o?.source?.hash,e.trusted,e.projectPath,ne]),q(()=>{!W&&!Te&&ae.current&&(ae.current=!1,V.current?.focus())},[W,Te]);function ut(){ae.current=!0,ke("")}q(()=>{globalThis.document?.activeElement?.getAttribute("role")!=="tab"&&(n==="project"?de.current?.focus():n==="ci"&&ge.current?.focus())},[n]);function Ot(){oe.current={choice:"",name:""},f(""),h(""),b(""),k([]),w([]),A(!1),P("{}"),D("")}q(()=>(ve.current++,ce.current++,le.current++,X.current=null,Ne(!1),je(!1),et(),s(null),pe(null),Z(null),ke(""),se(null),xe(null),ue(""),be("manual-and-pull-requests"),J("evals.yml"),Q(""),me("ready"),Y("preserve"),i(Ln()),u([]),Ot(),e.trusted&&Dt({initial:!0}),()=>{ve.current++,ce.current++,le.current++}),[e.projectPath,e.trusted,e.context?.workingDirectory,e.context?.mode]),q(()=>{if(we===null||we!==ve.current||!e.trusted||!["ready","error"].includes(e.discovery?.status))return;let S=Fr(e.assets);i(S.paths),u(Object.keys(S.paths)),oe.current={choice:"new",name:S.suite},f("new"),h(S.suite),b(S.description),k(["description","filter"]),xe(null),e.discovery.status==="error"&&Q("Asset discovery is incomplete. Suggested folders may miss existing files; review the project paths before saving.")},[we,e.assets,e.discovery?.status,e.trusted]);let st=()=>{ve.current++,je(!0),pe(null),Z(null),se(null),Q("")},at=()=>{ve.current++,je(!0),Z(null),Q("")},Pe=S=>{st(),k(I=>I.includes(S)?I:[...I,S])};function ln(S){if(ne==="refreshing")return;st();let I=S.startsWith("existing:")?Be[Number(S.slice(9))]:null;ne==="changed"&&(S===""||S==="new"||I?.inspectable)&&(me("ready"),Ne(!0));let z=Mn(I?.filter??{},I?.filterScalarKeys);oe.current={choice:S,name:I?.name??""},f(S),h(I?.name??""),b(I?.description??""),k([]),w(z),A(!1),P(JSON.stringify(Rt(z),null,2)),D((I?.evals??[]).join(`
`))}async function Dt({initial:S=!1}={}){if(!e.trusted)return;let I=!S&&Se&&(C||ne==="changed"),z=++ve.current;xe(null),ce.current++;let L=await _e("inspect_project_setup");if(!L||ve.current!==z)return;if(L.cancelled){Q("Inspection cancelled. No project configuration was changed.");return}if(N(L.ciAvailable!==!1),s(L.inspection),pe(null),Z(null),ke(""),se(null),Q(""),me("ready"),I){xe(null);let O=L.inspection.declarations?.paths??{};i(Ie=>Object.fromEntries(["evals","skills","results","evalFilenames"].map(Ke=>[Ke,l.includes(Ke)?Ie[Ke]:(O[Ke]??[]).join(`
`)]))),u(l.filter(Ie=>c[Ie].trim()&&JSON.stringify(Ie==="results"?[c[Ie].trim()]:Et(c[Ie]))!==JSON.stringify(O[Ie]??[])));let ye=L.inspection.declarations?.suites??[],rt=ye.findIndex(Ie=>Ie.name===oe.current.name);if(d.startsWith("existing:")&&rt>=0){let Ie=ye[rt];if(f(`existing:${rt}`),oe.current={...oe.current,choice:`existing:${rt}`},$.includes("description")||b(Ie.description??""),$.includes("evals")||D((Ie.evals??[]).join(`
`)),!$.includes("filter")){let Ke=Mn(Ie.filter??{},Ie.filterScalarKeys);w(Ke),P(JSON.stringify(Rt(Ke),null,2))}k($.filter(Ke=>{if(Ke==="description")return g!==(Ie.description??"");if(Ke==="evals")return T.trim()&&JSON.stringify(Et(T))!==JSON.stringify(Ie.evals??[]);if(Ke==="filter")try{return!is(Nt(y?j:JSON.stringify(Rt(m))),Ie.filter??{})}catch{return!0}return!0}))}else if(d.startsWith("existing:")){me("changed"),Q("The selected suite changed or was removed. Your inputs were kept; choose its current target before reviewing configuration.");return}je(!0),Q("Source refreshed. Your unfinished inputs were kept; review the current configuration before saving.");return}u([]),Ot(),ue(O=>(L.inspection.declarations?.suites??[]).some(ye=>ye.inspectable&&ye.name===O)?O:(L.inspection.declarations?.suites??[]).find(ye=>ye.inspectable)?.name??"");let fe=L.inspection.declarations?.paths??{};if(L.inspection.state==="missing"?(i(Ln()),xe(z)):i(Object.fromEntries(["evals","skills","results","evalFilenames"].map(O=>[O,(fe[O]??[]).join(`
`)]))),!Se&&L.retainedInputs){let O=L.retainedInputs.inputs;if(!O||!O.paths||Object.values(O.paths).some(ye=>typeof ye!="string")||!Array.isArray(O.editedPaths)||!Array.isArray(O.editedSuite)||!Array.isArray(O.tags)||O.tags.some(ye=>!ye||typeof ye.key!="string"||!Array.isArray(ye.values)||ye.values.some(rt=>typeof rt!="string"))||["suiteChoice","suite","description","filter","patterns","ciSuite","ciWhen","ciFilename","ciTranscriptUploads"].some(ye=>typeof O[ye]!="string")||typeof O.advanced!="boolean"){Q("Retained Setup inputs could not be read safely. Their private recovery copy was preserved.");return}if(X.current=L.retainedInputs.revision,xe(null),i(O.paths),u(O.editedPaths),oe.current={choice:O.suiteChoice,name:O.suite},f(O.suiteChoice),h(O.suite),b(O.description),k(O.editedSuite),w(O.tags),A(O.advanced),P(O.filter),D(O.patterns),ue(O.ciSuite),be(O.ciWhen),J(O.ciFilename),Y(O.ciTranscriptUploads),L.retainedInputs.changed){me("changed"),Ne(!0),Q("Project configuration changed while Setup was closed. Your inputs were retained; inspect and explicitly review the changed configuration before proposing or saving.");return}}Ne(!0)}function yt(){let S={},I=Object.fromEntries(Object.entries(c).filter(([z,L])=>l.includes(z)&&L.trim()).map(([z,L])=>[z,z==="results"?L.trim():Et(L)]).filter(([z,L])=>JSON.stringify(z==="results"?[L]:L)!==JSON.stringify(o?.declarations?.paths?.[z])));if(Object.keys(I).length&&(S.paths=I),d){if(!p&&!v.trim())throw new Error("Enter a name for the new suite.");if(!p&&Be.some(L=>L.name===v.trim()))throw new Error("That suite already exists. Choose it to edit its settings.");let z={};if($.includes("description")&&g!==(p?.description??"")&&(z.description=g),$.includes("evals")&&T.trim()&&JSON.stringify(Et(T))!==JSON.stringify(p?.evals)&&(z.evals=Et(T)),$.includes("filter")){if(!y&&new Set(m.map(fe=>fe.key)).size!==m.length)throw new Error("Use each tag key only once; add alternative values to that key.");let L=Nt(y?j:JSON.stringify(Rt(m)));(!p||!is(L,p.filter??{}))&&(z.filter=L)}Object.keys(z).length&&(S.suites={[p?.name??v.trim()]:z})}return S}let nt,ot="";try{nt=yt()}catch(S){ot=S.message}async function Lt(S){if(S.preventDefault(),!e.trusted||!ee||ne!=="ready")return;if(Q(""),pe(null),se(null),ot){Q(`${ot} Nothing was changed.`);return}if(!Object.keys(nt).length){Q("Edit at least one field before reviewing configuration changes. Nothing was changed.");return}let I=++ve.current,z=await _e("propose_project_setup",{changes:nt,expectedSourceHash:o.source?.hash??null});z&&I===ve.current&&(pe(z),ke("project"))}async function Mt(){let S=ve.current,I=await _e("save_project_setup",{proposalId:_.proposalId});if(!I||S!==ve.current)return;if(I.cancelled){Q("Save declined. No project configuration was changed.");return}if(!I.saved)return;se({...I,proposalId:_.proposalId}),pe(null),ut(),je(!0),u([]),k([]),Q(["Project configuration saved. No eval was run.",I.cleanupWarning,I.recoveryPath?`Recovery evidence: ${I.recoveryPath}`:""].filter(Boolean).join(`
`));let z=oe.current,L=++ce.current;me("refreshing");let fe=await _e("inspect_project_setup");if(L===ce.current){if(!fe||fe.cancelled){me("unavailable");return}if(fe.inspection.state!=="available"||typeof I.sourceHash!="string"||fe.inspection.source?.hash!==I.sourceHash){me("changed");return}if(s(fe.inspection),me("ready"),ue(O=>(fe.inspection.declarations?.suites??[]).some(ye=>ye.inspectable&&ye.name===O)?O:(fe.inspection.declarations?.suites??[]).find(ye=>ye.inspectable)?.name??""),z.choice==="new"&&oe.current.choice==="new"&&oe.current.name===z.name){let O=(fe.inspection.declarations?.suites??[]).findIndex(ye=>ye.name===z.name.trim());O>=0&&(oe.current={choice:`existing:${O}`,name:z.name.trim()},f(`existing:${O}`),h(z.name.trim()))}}}async function cn(){if(!Ae)return;let S=++ve.current;Q(""),Z(null);let I=await _e("propose_ci_setup",{suite:he,filename:E,when:$e,expectedSourceHash:o.source.hash,transcriptUploads:G});I&&S===ve.current&&(Z(I),ke("ci"))}async function ft(){let S=ve.current,I=await _e("save_ci_setup",{proposalId:te.id});!I||S!==ve.current||(Q(I.message),I.status==="saved"&&(Z(null),ut()))}let K={on:{...$e!=="pull-requests"?{workflow_dispatch:{}}:{},...$e!=="manual"?{pull_request:{}}:{}},jobs:{evals:{steps:[{with:{suite:he||"(choose a saved suite)"}}]}}};return a`<div class="project-setup">
    <div class="config-inspection">
      <span role="status">${Te==="inspect_project_setup"?"Loading project configuration\u2026":o?`Configuration: ${o.state}. Settings read only; not checked by a run.`:"Project settings haven't been read yet."}</span>
      <button class="config-text-button" disabled=${!e.trusted||!!Te} onClick=${Dt}><${H} name="refresh-cw" size=${13} />Inspect project configuration</button>
    </div>
    ${!e.trusted&&a`<p class="config-notice">Trust this folder to load and edit its project configuration.</p>`}
    ${we!==null&&a`<p class="config-notice" role="status">Waiting for asset discovery before suggesting project folders…</p>`}
    ${ne!=="ready"&&a`<p class="config-notice" role="alert">${ne==="refreshing"?"Reading the saved settings again. You can keep editing and review changes when the read finishes.":ne==="changed"?"Project configuration changed after saving. Your unsaved edits are kept. Inspect project configuration again before reviewing updates.":"Couldn't reload saved settings. Your unsaved edits are kept. Choose Inspect project configuration before reviewing changes."}</p>`}
    ${o?.diagnostics.map((S,I)=>a`<p key=${I} class="config-notice">${S.message}</p>`)}
    <div class="config-layout" hidden=${n!=="project"} id="config-panel-project" role="tabpanel" aria-labelledby="config-tab-project">
      <form id="project-config-form" onSubmit=${Lt} class="config-form">
        <h3 id="project-setup-heading" class="sr-only" tabindex="-1" ref=${de}>Project configuration</h3>
        ${o?.state==="missing"&&a`<div class="config-notice"><strong>Suggested settings</strong>
          <p>No <code>.vally.yaml</code> was found. Suggestions use folders found in your project, or common defaults.
            Filename patterns group formats; large inventories use common ancestor folders or wildcards to stay within configuration limits.
            These suggestions may include additional files. The <code>all</code> suite has no tag restriction.
            Edit or clear suggestions before saving. Setup is optional.</p></div>`}
        <fieldset disabled=${F||!e.trusted||!ee} class="config-fields">
          <legend class="sr-only">Project paths and suites</legend>
          <section class="config-card">
            <header><div><h3><${H} name="folder" size=${16} />Locations</h3><p>Choose folders for evals, skills and results.</p></div><span class="ck-badge">Project-relative</span></header>
            <div class="config-card-body">
              ${[["evals","Eval folders"],["skills","Skill folders"],["results","Results folder"],["evalFilenames","Eval filename patterns"]].map(([S,I])=>a`
                <${as} key=${S} label=${I} name=${S} value=${c[S]} single=${S==="results"} onChange=${z=>{st(),u(L=>L.includes(S)?L:[...L,S]),i(L=>({...L,[S]:z}))}} />`)}
            </div>
            <footer>Blank fields preserve existing settings. Unfinished inputs are kept privately; project files change only after review and approval.</footer>
          </section>
          <section class="config-card">
            <header><h3><${H} name="layers" size=${16} />Suites</h3><span class="ck-muted">Groups of evals to run together</span></header>
            <div class="config-card-body">
              <label class="stack-label">Suite to configure (optional)
                <select class="ck-input" name="setup-suite-choice" value=${d} disabled=${ne==="refreshing"} onChange=${S=>ln(S.target.value)}>
                  <option value="">Leave suites unchanged</option>
                  ${Be.map((S,I)=>a`<option key=${S.name} value=${`existing:${I}`} disabled=${!S.inspectable}>Edit existing suite: ${S.name}</option>`)}
                  <option value="new">Create a new suite</option>
                </select></label>
              <p class="config-help">Switching suites replaces the fields below. Only edited fields enter review.</p>
              ${d&&a`
                ${!p&&a`<label class="stack-label">New suite name<input class="ck-input" name="setup-suite" value=${v}
                  onInput=${S=>{st(),oe.current={choice:d,name:S.target.value},h(S.target.value)}} /></label>`}
                <label class="stack-label">Suite description (optional)<input class="ck-input" name="setup-description" value=${g}
                  onInput=${S=>{Pe("description"),b(S.target.value)}} /></label>
                <div class="config-tag-heading"><strong>Match tags</strong><span>Literal values</span></div>
                ${!y&&a`<div class="config-tags">
                  ${!m.length&&a`<p class="config-help">No tag filter: all discovered evals match. File selectors still apply.</p>`}
                  ${m.map((S,I)=>a`<div class="config-tag-row" key=${I}>
                    <div class="config-tag-chip">
                      <input class="ck-input config-tag-key" name=${`setup-tag-key-${I}`} aria-label=${`Tag key ${I+1}`} value=${S.key}
                        onInput=${z=>{Pe("filter"),w(L=>L.map((fe,O)=>O===I?{...fe,key:z.target.value}:fe))}} />
                      <span aria-hidden="true">=</span>
                      <div class="config-tag-values">${S.values.map((z,L)=>a`<div class="config-tag-value" key=${L}>
                        ${L>0&&a`<span class="config-or">OR</span>`}
                        <input class="ck-input" name=${`setup-tag-value-${I}-${L}`} aria-label=${`Tag ${I+1} value ${L+1}`} value=${z}
                          onInput=${fe=>{Pe("filter"),w(O=>O.map((ye,rt)=>rt===I?{...ye,values:ye.values.map((Ie,Ke)=>Ke===L?fe.target.value:Ie)}:ye))}} />
                        ${S.values.length>1&&a`<button class="config-text-button" type="button" aria-label=${`Remove tag ${I+1} value ${L+1}`}
                          onClick=${()=>{Pe("filter"),w(fe=>fe.map((O,ye)=>ye===I?{...O,values:O.values.filter((rt,Ie)=>Ie!==L)}:O))}}>×</button>`}
                      </div>`)}</div>
                      <button class="config-text-button" type="button" aria-label=${`Add alternative value to tag ${I+1}`}
                        onClick=${()=>{Pe("filter"),w(z=>z.map((L,fe)=>fe===I?{...L,values:[...L.values,""]}:L))}}>+</button>
                    </div>
                    <button class="ck-btn ck-btn-icon" type="button" aria-label=${`Remove tag ${I+1}`}
                      onClick=${()=>{Pe("filter"),w(z=>z.filter((L,fe)=>fe!==I))}}>×</button>
                  </div>`)}
                  <button class="config-text-button" type="button" onClick=${()=>{Pe("filter"),w(S=>[...S,{key:"",values:[""],array:!1}])}}>Add tag</button>
                </div>`}
                <details class="config-disclosure"><summary>How matching works & advanced JSON</summary>
                  <p>Keys use AND; values for one key use OR. Commas and spaces stay literal. Empty filters match all evals. Unedited filters keep their original YAML types.</p>
                  <label><input type="checkbox" name="setup-advanced" checked=${y} onChange=${S=>{if(S.target.checked){if(new Set(m.map(I=>I.key)).size!==m.length){Q("Use each tag key only once; add alternative values to that key.");return}P(JSON.stringify(Rt(m),null,2)),A(!0)}else try{w(Mn(Nt(j))),A(!1),Q("")}catch(I){Q(`Tag filter: ${I.message} Nothing was changed.`)}}} />Edit advanced raw JSON</label>
                  ${y&&a`<label class="stack-label">Tag filter (JSON object)<textarea class="ck-input" name="setup-filter" value=${j}
                    onInput=${S=>{Pe("filter"),P(S.target.value)}} /></label>`}
                </details>
                <details class="config-disclosure" open=${!!T}><summary>Limit to file paths or patterns · optional</summary>
                  <label class="stack-label">Optional suite file paths/patterns (one per line)<textarea class="ck-input" name="setup-patterns" rows="2" value=${T}
                    onInput=${S=>{Pe("evals"),D(S.target.value)}} /></label>
                  <p>File and tag selectors both apply. Blank patterns preserve existing selectors.</p>
                </details>
              `}
            </div>
          </section>
        </fieldset>
      </form>
      <${Dn} filename=".vally.yaml" subtitle=${o?.state==="missing"?"New project configuration":"Existing configuration preserved"}
        text=${_?.after??(ot?`# ${ot}`:Object.keys(nt??{}).length?Xt(nt):`# No proposed changes.
# Edit a field to preview your updates.`)} exact=${!!_} />
    </div>
    <div class="config-layout" hidden=${n!=="ci"} id="config-panel-ci" role="tabpanel" aria-labelledby="config-tab-ci">
      <div class="config-form">
        <h3 id="ci-pipeline-heading" class="sr-only" tabindex="-1" ref=${ge}>CI pipeline</h3>
        ${!Ae&&a`<div class="config-notice"><strong>${M?"Project configuration comes first.":"CI workflow setup is not available in this build."}</strong>
          <p>${M?e.trusted?C?"Review or discard project configuration edits before configuring CI.":"Create and save at least one readable eval group (suite) in Project configuration before setting up CI.":"Trust this folder to inspect its configuration before setting up CI.":"Project configuration in .vally.yaml remains available. No CI workflow was created."}</p>
          <button class="config-text-button" onClick=${()=>r("project")}>Go to Project →</button></div>`}
        <section class="config-card">
          <header><div><h3><${H} name="git-compare" size=${16} />Workflow configuration</h3><p>Choose what runs and when it starts.</p></div><span class="ck-badge">GitHub Actions</span></header>
          <fieldset class="config-card-body config-fields" disabled=${!Ae||!!Te}>
            <legend class="sr-only">CI workflow settings</legend>
            <label class="stack-label">Suite to run in CI<select class="ck-input" name="ci-suite" value=${he}
              onChange=${S=>{at(),ue(S.target.value)}}>
              ${!tt.length&&a`<option value="">No saved suites</option>`}
              ${tt.map(S=>a`<option key=${S.name} value=${S.name}>${S.name}</option>`)}
            </select></label>
            <p class="config-help">From saved project settings. The group hasn't been tested by running it.</p>
            <strong class="config-field-title">Start the workflow</strong>
            <div class="config-triggers" role="group" aria-label="Workflow triggers">
              ${[["manual","Manual","On demand only","play"],["pull-requests","Pull requests","Same-repository PRs","git-compare"],["manual-and-pull-requests","Both","Manual and pull requests","layers"]].map(([S,I,z,L])=>a`
                <button type="button" class="config-trigger" aria-pressed=${$e===S} onClick=${()=>{at(),be(S)}}>
                  <${H} name=${L} size=${17} /><strong>${I}</strong><span>${z}</span></button>`)}
            </div>
            <label class="stack-label">Workflow filename<input class="ck-input" name="ci-filename" value=${E} maxLength="85"
              onInput=${S=>{at(),J(S.target.value)}} /></label>
            <p class="config-help">Inside <code>.github/workflows/</code>. Use a .yml or .yaml filename.</p>
            <label class="stack-label">Upload detailed transcripts?<select class="ck-input" name="ci-transcript-uploads" value=${G}
              onChange=${S=>{at(),Y(S.target.value)}}>
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
      <${Dn} ci=${!0} filename=${`.github/workflows/${E}`} subtitle="Separate workflow approval"
        text=${te?.after??Xt(K)} exact=${!!te} />
    </div>
    ${!W&&a`<${Ce} error=${Ve} />${U&&a`<p class="config-notice" role="status">${U}</p>`}`}
    <footer class="config-sticky-footer">
      <div><strong>${n==="ci"?"CI workflow \xB7 separate review":C?"Unsaved configuration edits":"Project configuration"}</strong>
        <p>${n==="ci"?"Review permissions, billing policy and transcript retention before saving.":"Refresh keeps your edits. Reinspect to discard and reload. No files change without approval."}</p></div>
      <div class="config-footer-actions">
        ${(n==="ci"?te:_)&&a`<button class="ck-btn" disabled=${!!Te} onClick=${()=>{n==="ci"?at():st()}}>Discard proposal</button>`}
        <button ref=${V} class="ck-btn ck-btn-primary" disabled=${!!Te||(n==="ci"?!Ae:!e.trusted||!ee||ne!=="ready")}
          type=${n==="ci"?"button":"submit"} form=${n==="ci"?void 0:"project-config-form"}
          onClick=${n==="ci"?cn:void 0}>
          ${n==="ci"?"Review CI changes":"Review configuration changes"}<${H} name="chevron-right" size=${15} /></button>
      </div>
    </footer>
    ${W&&(W==="ci"?te:_)&&a`<${os}
      proposal=${W==="ci"?te:_} ci=${W==="ci"} pending=${!!Te} error=${Ve} notice=${U}
      onSave=${W==="ci"?ft:Mt} onClose=${()=>{Te||ut()}} />`}
  </div>`}var Re=(e,t)=>({tag:e,children:t});function rn(e){let n=e.slice(0,128e3).replace(/\r\n?/g,`
`).split(`
`),r=n.slice(0,4096),o=[],s=[o],c=0,i=0,l=g=>{let b=[],$=/\\([\\`*_[\]<>#|])|`([^`\n]*)`|\*\*([^*\n]*)\*\*| {2,}\n|\n/g,k=0;for(let m of g.matchAll($)){if(c>=4096)break;c++,m.index>k&&b.push(g.slice(k,m.index)),b.push(m[1]!==void 0?m[1]:m[2]!==void 0?Re("code",[m[2]]):m[3]!==void 0?Re("strong",[m[3].replace(/\\([\\`*_[\]<>#|])/g,"$1")]):m[0]===`
`?" ":Re("br",[])),k=m.index+m[0].length}return k<g.length&&b.push(g.slice(k)),b},u=g=>{let b=[],$=1;for(let k=1;k<g.length;k++){if(g[k]==="\\"){k++;continue}if(g[k]==="|"){if(b.push(g.slice($,k).trim()),b.length>32)return b;$=k+1}}return $<g.length&&g.slice($).trim()&&b.push(g.slice($).trim()),b},d=g=>/^\|/.test(r[g]??"")&&/^\|/.test(r[g+1]??"")&&u(r[g+1]).length>0&&u(r[g+1]).length<=32&&i<2048&&u(r[g+1]).every(b=>/^:?-{3,}:?$/.test(b))&&u(r[g]).length===u(r[g+1]).length,f=g=>r[g]==="<details>"&&/^<summary>[^<>]*<\/summary>$/.test(r[g+1]??"")&&s.length<=8,v=g=>/^(?:#{1,6} | {4}|- |```)/.test(r[g])||f(g)||r[g]==="</details>"||d(g),h=0;for(;h<r.length;){let g=r[h],b=s.at(-1);if(!g.trim()){h++;continue}if(f(h)){let $=[Re("summary",l(r[h+1].slice(9,-10)))];b.push(Re("details",$)),s.push($),h+=2}else if(g==="</details>"&&s.length>1)s.pop(),h++;else if(/^ {4}/.test(g)){let $=[];for(;h<r.length&&(/^ {4}/.test(r[h])||!r[h].trim());)$.push(r[h].slice(4)),h++;for(;$.at(-1)==="";)$.pop();b.push(Re("pre",[Re("code",[$.join(`
`)])]))}else if(/^```/.test(g)){let $=[];for(h++;h<r.length&&!/^```\s*$/.test(r[h]);)$.push(r[h++]);h<r.length&&h++,b.push(Re("pre",[Re("code",[$.join(`
`)])]))}else if(/^#{1,6} /.test(g)){let $=/^(#{1,6}) (.*)$/.exec(g);b.push(Re(`h${$[1].length}`,l($[2]))),h++}else if(d(h)){let $=u(g),k=[];for(i+=$.length,h+=2;h<r.length&&/^\|/.test(r[h])&&i+$.length<=2048;){let m=u(r[h]);if(m.length!==$.length)break;h++,i+=$.length,k.push(Re("tr",$.map((w,y)=>Re("td",l(m[y]??"")))))}b.push(Re("table",[Re("thead",[Re("tr",$.map(m=>Re("th",l(m))))]),Re("tbody",k)]))}else if(/^- /.test(g)){let $=[];for(;h<r.length&&/^- /.test(r[h]);)$.push(Re("li",l(r[h++].slice(2))));b.push(Re("ul",$))}else{let $=[g];for(h++;h<r.length&&r[h].trim()&&!v(h);)$.push(r[h++]);b.push(Re("p",l($.join(`
`))))}}return{nodes:o,truncated:e.length>128e3||n.length>4096}}var cs={preview_skill_contrast:"Task preview",verify_contrast_runner:"Runner verification and task preview",run_skill_contrast:"Skill comparison",cancel_operation:"Comparison cancellation"},Hs=e=>e?.code==="task-tools-required";function ds(e,t){let n=R(null),r=R(null),o=R(t);o.current=t;let[s,c]=x(""),[i,l]=x(""),[u,d]=x(null),f=k=>r.current===k&&o.current===k.context&&n.current?.isConnected;function v(k,m,w="",y=null){if(!k||!f(k))return;let A=m==="failed"&&Hs(y);A&&l(`${w} Remove unsupported names and retry Preview. Leave the field empty for mock evals.`),d({ticket:k,outcome:m,message:w,invalidTools:A})}let{run:h,pending:g,error:b}=Ee(async(k,m)=>{let w=r.current?.name===k?r.current:null;try{let y=await e(k,m);if(w&&f(w)){let A=y?.cancelled||y?.discarded||y?.record?.stopped||k==="cancel_operation",j=y?.available===!1?y.message||"This operation is unavailable.":"";v(w,j?"failed":A?"cancelled":"ready",j,y)}return y}catch(y){throw v(w,"failed",y?.message??String(y),y),y}});Fe(()=>()=>{r.current?.release(),r.current=null},[]),Fe(()=>{r.current?.context!==t&&(r.current?.release(),r.current=null,l(""),c(""))},[t]),Fe(()=>{if(!u||g)return;let{ticket:k,outcome:m,invalidTools:w}=u;if(!f(k))return;c(m==="ready"?k.name==="run_skill_contrast"?"Skill comparison results ready. Review Step 4.":"Task preview ready. Review the task prompt and checks.":k.name==="cancel_operation"?"Comparison cancellation requested. Review the current comparison status.":`${cs[k.name]} ${m}. ${m==="failed"?"Review the error and retry.":"Review the current comparison status."}`);let y=w?n.current.querySelector('[name="contrast-task-tools"]'):m==="ready"?n.current.querySelector(k.name==="run_skill_contrast"?"#contrast-result-heading":"#contrast-preview-heading"):null;k.keyboard&&k.ownsFocus&&m==="ready"&&!y||(k.keyboard&&k.ownsFocus&&(y??(k.trigger?.isConnected&&!k.trigger.disabled?k.trigger:null)??n.current.querySelector("#compare-heading"))?.focus(),k.release(),r.current=null)});function $(k,m,w={}){r.current?.release();let y=k?.currentTarget,A=y?.ownerDocument,j={name:m,context:t,trigger:y,keyboard:k?.detail===0&&A?.activeElement===y,ownsFocus:!0,release:()=>{}};if(j.keyboard){let P=()=>{j.ownsFocus=!1},T=D=>{D.target!==y&&D.target!==A.body&&P()};A.addEventListener("focusin",T),A.addEventListener("pointerdown",P),A.addEventListener("keydown",P),j.release=()=>{A.removeEventListener("focusin",T),A.removeEventListener("pointerdown",P),A.removeEventListener("keydown",P)}}return r.current=j,d(null),l(""),c(`${cs[m]} in progress.`),h(m,w)}return{pane:n,run:h,start:$,pending:g,error:b,status:s,fieldError:i,clearFieldError:()=>l("")}}function us(e){return e?a`<div class="per-case-cell-metrics">
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
  </div>`}function sn({receipt:e,cases:t,runs:n,runDetails:r}){let o=l=>`${l>0?"+":""}${l}`,s=r??n,c=gt({receipt:e,cases:t},s),i=St({receipt:e,cases:t},s);return a`<div class="comparison-summary">
    <p class="snapshot-notice"><strong>These differences don't prove one version is better.</strong> ${e.inference.statement}</p>
    ${i&&a`<p class="snapshot-notice low-confidence-notice" role="status"><strong>Limited evidence (one attempt per case):</strong> Single-run comparisons cannot separate real changes from run-to-run variation.</p>`}
    <h3>${e.axis.label}</h3>
    <div class="comparison-cards">${[["Original","baseline"],["Changed","treatment"]].map(([l,u])=>a`
      <section class="comparison-card" aria-label=${`${l} outcome`}>
        <h4>${l}</h4><code>${e.source[u].runId}</code>
        <p>${e.axis[`${u}Value`]}</p>
        <p class="comparison-score"><strong>${e.outcomes[u].passed} / ${e.outcomes[u].total}</strong> passed</p>
        <p>${e.outcomes[u].failed} failed · ${e.outcomes[u].errors} errors</p>
      </section>`)}</div>
    <div class="report-table" tabindex="0" role="region" aria-label="Outcome changes"><table>
      <caption>Changed minus Original</caption><thead><tr><th scope="col">Outcome</th><th scope="col">Change in cases</th></tr></thead>
      <tbody>${[["Passed","passed"],["Failed","failed"],["Errors","errors"]].map(([l,u])=>a`
        <tr><th scope="row">${l}</th><td>${o(e.outcomes.delta[u])}</td></tr>`)}</tbody>
    </table></div>
    ${ps(c,"Per-case outcomes and metrics (Original vs Changed)")}
    <h3>Cases that changed result</h3>
    <div class="comparison-transitions">${[["Fixed failures","fixedFailures"],["New failures","newFailures"],["Persistent failures","persistentFailures"],["Fixed errors","fixedErrors"],["New errors","newErrors"],["Persistent errors","persistentErrors"]].map(([l,u])=>a`<details><summary>${l}: ${e.outcomes.transitions[u].length}</summary>
      ${e.outcomes.transitions[u].length?a`<ul>${e.outcomes.transitions[u].map(d=>a`<li><code>${d}</code></li>`)}</ul>`:a`<p>No cases in this category.</p>`}</details>`)}</div>
    <div class="report-table" tabindex="0" role="region" aria-label="Recorded usage"><table>
      <caption>Recorded usage; missing values aren't zero</caption>
      <thead><tr><th scope="col">Metric</th><th scope="col">Original</th><th scope="col">Changed</th><th scope="col">Difference</th></tr></thead>
      <tbody>${[["Duration","duration"],["Tokens","tokens"],["Cost","cost"]].map(([l,u])=>{let d=e.metrics[u],f=v=>v?`${v.value} ${v.unit} (${v.basis}; ${v.source})`:"Unknown";return a`<tr><th scope="row">${l}</th><td>${f(d.baseline)}</td><td>${f(d.treatment)}</td>
          <td>${d.status==="comparable"?`${o(d.delta.value)} ${d.delta.unit}`:d.reason==="metadata-differs"?"Not comparable: measurement metadata differs":"Unknown: missing measurement"}</td></tr>`})}</tbody>
    </table></div>
    <h3>Interpretation and limits</h3><p>${e.advisory.rationale}</p><p>${e.advisory.userDecisionBoundary}</p>
    <ul>${e.limitations.map(l=>a`<li>${l}</li>`)}</ul>
  </div>`}function Fn({comparison:e,runs:t}){let n=e.runDetails??t,r=gt(e,n),o=St(e,n),s=Array.isArray(n)&&e.original?.runId?n.find(i=>i?.id===e.original.runId):null,c=Array.isArray(n)&&e.changed?.runId?n.find(i=>i?.id===e.changed.runId):null;return a`<div class="comparison-summary">
    <h3>Side-by-side results</h3>
    ${o&&a`<p class="snapshot-notice low-confidence-notice" role="status"><strong>Limited evidence (one attempt per case):</strong> Single-run comparisons cannot separate real changes from run-to-run variation.</p>`}
    <div class="comparison-cards">${e.summary.runs.map((i,l)=>{let u=l===0?e.original:e.changed,d=l===0?s:c;return a`
      <section class="comparison-card" aria-label=${`${i.label} saved results`}>
        <h3>${i.label}</h3><p>Status: <strong>${i.status}</strong></p>
        <p class="comparison-score"><strong>${i.outcome}</strong></p>
        <h4>${i.label}'s tests (not matched)</h4>
        ${i.cases.length?a`<ul class="saved-comparison-cases">${i.cases.map((f,v)=>{let h=f.sourceName===void 0?f:{...f,name:f.sourceName},g=vt(h,u?.cases)??h,b=vt(g,d?.cases),$=b?{...b,...Object.fromEntries(Object.entries(g).filter(([,k])=>k!=null)),...Object.hasOwn(g,"judgeUsage")?{judgeUsage:g.judgeUsage}:{}}:g;return a`<li class="saved-comparison-case-item">
            <div class="saved-comparison-case-row"><span>${f.name}</span><strong>${f.outcome}</strong></div>
            ${Us({...$,evidenceDiagnostics:$t(g,b)},v)}
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
  </div>`}function an({state:e,invoke:t,compareCache:n,onOpenRun:r}){let o=e.runs.filter(p=>p.mode==="engine"),s=(e.assets??[]).filter(p=>p.kind==="skill"),c=(e.assets??[]).filter(p=>p.kind==="eval"),i=n?.current&&n.current.project===e.projectPath?n.current:null,l=p=>!!p&&o.some(C=>C.id===p),[u,d]=x(()=>l(i?.original)?i.original:""),[f,v]=x(()=>l(i?.changed)?i.changed:""),[h,g]=x(()=>i?.mode??""),[b,$]=x(()=>i?.savedOpen??!1),k=R(null),[m,w]=x(()=>i&&l(i.original)&&l(i.changed)?i.axis??"":""),[y,A]=x(()=>i?.intent??"general-comparison"),[j,P]=x(()=>i?.saved??{receiptId:"",status:""}),[T,D]=x(()=>i?.queriedPair??null),[_,pe]=x(()=>i?.selectedReceipt??""),[ie,se]=x(()=>i?.contrastSkillId??e.skillContrast?.record?.skill?.assetId??""),[he,ue]=x(()=>i?.contrastEvalId??e.skillContrast?.record?.evaluation?.assetId??""),[$e,be]=x(()=>i?.selectedContrastId??""),[E,J]=x(()=>i?.taskToolsText??""),[G,Y]=x(()=>i?.reviewedKey??""),[te,Z]=x(()=>i?.contrastAuth??"github"),M=R(""),N=s.some(p=>p.id===ie)?ie:"",W=c.some(p=>p.id===he)?he:"",{pane:ke,run:U,start:Q,pending:ne,error:me,status:we,fieldError:xe,clearFieldError:Se}=ds(t,JSON.stringify([e.projectPath,N,W,E,te])),Ne=s.find(p=>p.id===N)??null,Oe=c.find(p=>p.id===W)??null,je=[...new Set(E.split(",").map(p=>p.trim()).filter(Boolean))].sort((p,C)=>p.localeCompare(C)),X=e.skillContrastPreview?.skill?.assetId===N&&e.skillContrastPreview?.evaluation?.assetId===W&&JSON.stringify(e.skillContrastPreview?.taskTools??[])===JSON.stringify(je)?e.skillContrastPreview:null,le=X?.inputHash??"",He=!!le&&G===le,B=$e?(e.skillContrasts??[]).find(p=>p.record.id===$e)??null:null,ve=e.skillContrast&&N&&W&&e.skillContrast.record?.skill?.assetId===N&&e.skillContrast.record?.evaluation?.assetId===W?e.skillContrast:null,ce=B??ve,oe=e.operation?.kind==="skill-contrast"?e.operation:null,de=ce?4:N&&W?3:N?2:1,ge=e.comparison?.receipt,V=e.comparison?.mode==="descriptive"?e.comparison:null,ae=h==="strict"&&ge?.source?.baseline?.runId===u&&ge?.source?.treatment?.runId===f&&ge?.axis?.key===m&&ge?.decision?.intent===y,_e=V?h==="descriptive"&&V.original.runId===u&&V.changed.runId===f?V:null:ge?ae?e.comparison:null:h==="strict"&&T?.original===u&&T?.changed===f?e.comparison:null,Te=h==="strict"?_e?.axes??(ae&&ge?.axis?[ge.axis]:i?.mode==="strict"&&l(i.original)&&l(i.changed)&&i.original===u&&i.changed===f?i.axes??null:null):null,Ve=j.receiptId===_e?.receipt?.id?j.status:"",et=R(`${u}:${f}`),Be=R(`${ge?.id??""}:${m}:${y}`);q(()=>{e.readStatus==="ready"&&e.projectPath&&M.current!==e.projectPath&&(M.current=e.projectPath,U("list_skill_contrasts"))},[e.readStatus,e.projectPath]),q(()=>{let p=`${u}:${f}`;et.current!==p&&(et.current=p,w(""),P({receiptId:"",status:""}))},[u,f]),q(()=>{let p=`${ge?.id??""}:${m}:${y}`;Be.current!==p&&(Be.current=p,P({receiptId:"",status:""}))},[ge?.id,m,y]),q(()=>{if(!e.comparisonNavigation||(V?.id??ge?.id)!==e.comparisonNavigation)return;let p=V?V.original.runId:ge.source.baseline.runId,C=V?V.changed.runId:ge.source.treatment.runId;et.current=`${p}:${C}`,d(p),v(C),g(V?"descriptive":"strict"),w(V?"":ge.axis.key),A(V?"general-comparison":ge.decision.intent),D(null),P({receiptId:"",status:""}),$(!0)},[e.comparisonNavigation]),q(()=>{b&&e.comparisonNavigation===(V?.id??ge?.id)&&k.current?.focus()},[b,e.comparisonNavigation]),q(()=>{n&&(n.current={project:e.projectPath,original:u,changed:f,mode:h,savedOpen:b,axis:m,axes:Te,intent:y,saved:j,queriedPair:T,selectedReceipt:_,contrastSkillId:N,contrastEvalId:W,selectedContrastId:$e,taskToolsText:E,reviewedKey:G,contrastAuth:te})},[e.projectPath,u,f,h,b,m,Te,y,j,T,_,N,W,$e,E,G,te]);let tt={headingOffset:3,tablePrefix:"Skill comparison details",tableNumber:0};return a`<section class="studio-pane compare-pane" ref=${ke} aria-labelledby="compare-heading">
    <p class="sr-only" role="status" aria-live="polite" aria-atomic="true">${we}</p>
    <div class="studio-heading"><div><h2 id="compare-heading" tabindex="-1">Test a skill with & without</h2>
      <p>Run the same task with a skill included in the prepared inputs and with it left out, then compare the results.</p></div>
      ${(e.skillContrasts?.length??0)>0&&a`<label class="stack-label compact-history-select">Past runs
        <select class="ck-select" name="saved-skill-contrast" value=${ce?.record?.id??""} onChange=${p=>{let C=p.target.value;be(C);let F=(e.skillContrasts??[]).find(ee=>ee.record.id===C);F?(se(F.record.skill.assetId),ue(F.record.evaluation.assetId)):C||(se(""),ue(""),Y(""))}}>
          <option value="">Choose a past run…</option>
          ${e.skillContrasts.map(p=>a`<option value=${p.record.id} key=${p.record.id}>${p.record.skill.name} · ${p.record.evaluation.name} (${We(p.record.updatedAt)})</option>`)}
        </select></label>`}
    </div>
    <ol class="compare-stepper" aria-label="Skill comparison steps">
      ${["What skill to test","What eval to run","Run with & without","See what changed"].map((p,C)=>{let F=C+1,ee=F<de;return a`<li class=${`compare-step ${F===de?"active":ee?"done":""}`} aria-current=${F===de?"step":void 0}>
          <span aria-hidden="true">${F}</span>${p}${ee&&a`<small class="sr-only">Completed</small>`}</li>`})}
    </ol>
    ${oe&&a`<section class="run-progress" aria-label="Skill comparison progress">
      <p>Comparison ${oe.contrastId}: ${oe.phase}</p>
      ${oe.arm&&a`<p>Current condition: ${oe.arm}</p>`}
      <p>Included run: <code>${oe.armRunIds.included}</code></p>
      <p>Omitted run: <code>${oe.armRunIds.omitted}</code></p>
      ${(De(oe.phase)||oe.phase==="approval")&&a`<button class="ck-btn ck-btn-danger" disabled=${oe.phase==="stopping"}
        onClick=${p=>Q(p,"cancel_operation")}>${oe.phase==="stopping"?"Stopping\u2026":"Stop this comparison"}</button>`}
      <${Ce} error=${oe.error} />
    </section>`}
    <div class="compare-wizard">
      <section class=${`wizard-step-card ${de===1?"is-current":N?"is-complete":""}`} aria-label="Step 1: What skill do you want to test?">
        <div class="wizard-step-header"><span class="wizard-step-badge" aria-hidden="true">${N?"\u2713":"1"}</span>
          <div><h3>Step 1 · What skill do you want to test?</h3>
            <p class="ck-muted">Choose a project skill to include or leave out of the prepared inputs. Other ways the agent might find the skill aren't verified.</p></div></div>
        <label class="stack-label">Skill to test<select class="ck-select" name="contrast-skill" value=${N}
          disabled=${!!ne||De(e.operation?.phase)||e.operation?.phase==="approval"||!!e.operation?.approval} onChange=${p=>{let C=p.target.value;be(""),Y(""),se(C),C||ue("")}}>
          <option value="">Choose a skill…</option>
          ${s.map(p=>a`<option value=${p.id} key=${p.id}>${p.name} · ${p.relativePath}</option>`)}
        </select></label>
      </section>
      ${N&&a`<section class=${`wizard-step-card ${de===2?"is-current":W?"is-complete":""}`} aria-label="Step 2: What eval do you want to run?">
        <div class="wizard-step-header"><span class="wizard-step-badge" aria-hidden="true">${W?"\u2713":"2"}</span>
          <div><h3>Step 2 · What eval do you want to run?</h3>
            <p class="ck-muted">Choose a saved eval task to run against "${Ne?.name??"this skill"}".</p></div></div>
        <label class="stack-label">Eval task to run<select class="ck-select" name="contrast-eval" value=${W}
          disabled=${!!ne||De(e.operation?.phase)||e.operation?.phase==="approval"||!!e.operation?.approval} onChange=${p=>{be(""),Y(""),ue(p.target.value)}}>
          <option value="">Choose a saved eval…</option>
          ${c.map(p=>a`<option value=${p.id} key=${p.id}>${p.name} · ${p.relativePath}</option>`)}
        </select></label>
      </section>`}
      ${N&&W&&a`<section class=${`wizard-step-card ${de===3?"is-current":ce?"is-complete":""}`} aria-label="Step 3: Run with and without skill">
        <div class="wizard-step-header"><span class="wizard-step-badge" aria-hidden="true">${ce?"\u2713":"3"}</span>
          <div><h3>Step 3 · Review the task & run with and without "${Ne?.name??"skill"}"</h3>
            <p class="ck-muted">Check that the task and scoring rules work with either input version, then run "${Oe?.name??"eval"}" with and without "${Ne?.name??"skill"}".</p></div></div>
        <div class="comparison-selectors">
          <label class="stack-label">Task tools (comma-separated; required for Copilot evals, empty for mock evals)
            <input class="ck-input" name="contrast-task-tools" autocomplete="off" spellcheck="false" value=${E}
              aria-invalid=${xe?"true":void 0} aria-describedby=${xe?"contrast-task-tools-error":void 0}
              placeholder="e.g. view, rg, glob" onInput=${p=>{Se(),Y(""),J(p.target.value)}} />
          </label>
          <label class="stack-label">Authentication
            <select class="ck-select" name="contrast-authentication" value=${te} onChange=${p=>Z(p.target.value)}>
              <option value="github">GitHub CLI sign-in${X?.evaluation?.executor==="mock"?" (not used for mock)":""}</option>
              <option value="configured">Token from environment variables</option>
            </select>
          </label>
        </div>
        ${xe&&a`<p id="contrast-task-tools-error" class="studio-error">${xe}</p>`}
        <div class="draft-actions">
          <button class="ck-btn" type="button" disabled=${!!ne||De(e.operation?.phase)||e.operation?.phase==="approval"||!!e.operation?.approval}
            onClick=${p=>Q(p,"preview_skill_contrast",{skillId:N,evalId:W,...je.length?{taskTools:je}:{}})}>${ne==="preview_skill_contrast"?"Previewing\u2026":X?"Refresh task preview":"Preview task & checks"}</button>
        </div>
        ${X&&a`<div class="contrast-preview-box" role="region" aria-label="Reviewed skill comparison task">
          <h4 id="contrast-preview-heading" tabindex="-1">Task preview</h4>
          <p><strong>Task (${X.evaluation.caseName} · ${X.evaluation.executor}):</strong> ${X.evaluation.prompt}</p>
          <p class="ck-muted">Checks (${X.plan.inputs.checks.length}): ${X.plan.inputs.checks.map(p=>`${p.identity.id} (${p.role})`).join(", ")} · Skill SHA-256 ${X.skill.sourceHash.slice(0,12)}… · Eval SHA-256 ${X.evaluation.sourceHash.slice(0,12)}…</p>
          ${X.setupReason?a`<p class="studio-warning">${X.setupReason}</p>
            ${!e.runtime&&(X.setupAction==="verify-runner"||X.setupAction===void 0&&/Configure and verify a local evaluator/i.test(X.setupReason))&&a`<button class="ck-btn ck-btn-primary" type="button"
              disabled=${!e.trusted||!!ne||De(e.operation?.phase)||e.operation?.phase==="approval"||!!e.operation?.approval}
              onClick=${p=>Q(p,"verify_contrast_runner",{skillId:N,evalId:W,...je.length?{taskTools:je}:{}})}>${ne==="verify_contrast_runner"?"Verifying runner\u2026":"Verify eval runner & refresh preview"}</button>`}`:a`
            <button class="ck-btn" type="button" aria-pressed=${He}
              onClick=${()=>Y(He?"":le)}>
              <${H} name=${He?"circle-check":"shield"} size=${15} />
              ${He?"Confirmed: task and checks don't favor either input version":"Confirm task and checks don't favor either input version"}
            </button>`}
        </div>`}
        <div class="draft-actions">
          <button class="ck-btn ck-btn-primary" disabled=${!e.trusted||!X||X.status!=="ready"||!He||!!ne||De(e.operation?.phase)||e.operation?.phase==="approval"||!!e.operation?.approval}
            onClick=${async p=>{be("");let C=await Q(p,"run_skill_contrast",{skillId:N,evalId:W,expectedSkillSourceHash:X.skill.sourceHash,expectedEvalSourceHash:X.evaluation.sourceHash,expectedInputHash:G,neutrality:"reviewed-neutral",authentication:te,...je.length?{taskTools:je}:{}});C?.record?.id&&be(C.record.id)}}><${H} name="git-compare" size=${15} />${ne==="run_skill_contrast"?"Running with & without skill\u2026":ce?"Run again with & without skill":"Run with & without skill"}</button>
          ${!e.trusted&&a`<${It} state=${e} invoke=${t} compact />`}
        </div>
      </section>`}
      ${ce&&a`<section class="wizard-step-card is-current skill-contrast-result" aria-label="Step 4: Results and what to pay attention to">
        <div class="wizard-step-header"><span class="wizard-step-badge" aria-hidden="true">4</span>
          <div><h3 id="contrast-result-heading" tabindex="-1">Step 4 · Results: what to pay attention to</h3>
            <p class="ck-muted">One attempt per input version for "${ce.record.skill.name}" on "${ce.record.evaluation.name}" (comparison basis: ${ce.record.report?.basis??"unpaired-exploratory"}; other skill discovery: ${ce.record.report?.discovery??"unverified"}).</p></div></div>
        <pre tabindex="0" role="region" aria-label="Skill comparison summary">${ce.summary?.text??"Summary unavailable. Open Details to read the saved report."}</pre>
        <p>Comparison: <code>${ce.record.id}</code></p>
        <p>Included run: <code>${ce.record.armRunIds.included}</code>; omitted run: <code>${ce.record.armRunIds.omitted}</code></p>
        <div class="contrast-arms-grid">
          ${[["included",`With skill (${ce.record.skill.name})`,"Skill included in inputs"],["omitted","Without skill (Baseline)","Skill omitted from inputs"]].map(([p,C,F])=>{let ee=ce.record.evidence?.arms?.[p],Ae=ce.record.report?.arms?.[p]?.outcome??ee?.observation?.run?.status??ee?.state??"unstarted",Le=ce.record.report?.arms?.[p]?.runId??null,ut=Ae==="passed"?"row-kind-success":["failed","errored","run-failed","cancelled"].includes(Ae)?"row-kind-attention":"";return a`<div class="contrast-arm-card" key=${p}>
              <div class="contrast-arm-header"><strong>${C}</strong><span class=${`ck-badge ${ut}`.trim()}>${Ae}</span></div>
              <p class="ck-muted">${F}</p>
              ${Le&&r&&a`<button class="ck-btn ck-btn-sm" type="button" onClick=${()=>r(Le)}><${H} name="arrow-up-right" size=${14} />Open in Results</button>`}
            </div>`})}
        </div>
        ${ce.record.report?.limitations?.length>0&&a`<ul class="contrast-limitations ck-muted" aria-label="What this skill comparison can't tell you">
          ${ce.record.report.limitations.slice(0,3).map((p,C)=>a`<li key=${C}>${p}</li>`)}
        </ul>`}
        <details class="comparison-source"><summary>Technical details & full comparison report</summary>
          <div class="report-preview comparison-preview" tabindex="0" role="region" aria-label="Full skill comparison report">
            ${rn(ce.text).nodes.map(p=>An(p,tt))}
          </div>
          <pre tabindex="0">${ce.text}</pre>
        </details>
      </section>`}
    </div>
    <details class="advanced-saved-compare compare-controls-card" open=${b}
      onToggle=${p=>$(p.currentTarget.open)}>
      <summary>Compare two existing saved runs</summary>
      <h3 id="saved-compare-heading" ref=${k} tabindex="-1">Compare saved results</h3>
      <p>Read existing saved outcomes without contacting AI, running evals or changing files. This is separate from the with-and-without skill experiment above.</p>
    <label class="stack-label">Comparison mode<select class="ck-select" name="comparison-mode" value=${h} onChange=${p=>{g(p.target.value),w(""),D(null),P({receiptId:"",status:""})}}>
      <option value="">Choose how to compare</option>
      <option value="descriptive">Side-by-side results</option>
      <option value="strict">Matched test comparison</option>
    </select></label>
    <div class="comparison-selectors">${[["Original",u,d],["Changed",f,v]].map(([p,C,F])=>a`
      <label class="stack-label">${p==="Original"?"First":"Second"} saved run<select class="ck-select" name=${`${p.toLowerCase()}-run`} value=${C} onChange=${ee=>{F(ee.target.value),w(""),D(null),P({receiptId:"",status:""})}}>
        <option value="">Choose a saved eval run</option>${o.map(ee=>a`<option value=${ee.id} key=${ee.id}>${ee.name} · ${ee.status} · ${We(ee.startedAt)} · ${ee.id}</option>`)}</select></label>`)}</div>
    ${h==="descriptive"&&a`
      <button class="ck-btn ck-btn-primary" disabled=${!u||!f||u===f||!!ne}
        onClick=${()=>U("compare_runs",{original:u,changed:f,mode:h})}>Show side-by-side saved results</button>`}
    <div class="draft-actions">${h==="strict"&&a`<button class="ck-btn" disabled=${!u||!f||u===f||!!ne}
      onClick=${async()=>{await U("compare_runs",{original:u,changed:f,mode:h})&&D({original:u,changed:f})}}>Find what changed</button>`}
      <button class="ck-btn" disabled=${!!ne} onClick=${async()=>{await U("saved_comparisons")&&_&&await U("saved_comparisons",{id:_})}}>Open saved comparisons</button></div>
    ${Te&&a`<label class="stack-label">Change to compare<select class="ck-select" name="comparison-change" value=${m} onChange=${p=>w(p.target.value)}>
      <option value="">Choose one recorded change</option>${Te.map(p=>a`<option value=${p.key} key=${p.key}>${p.label}</option>`)}</select></label>`}
    ${h==="strict"&&a`<p>Tests, checks, runner and verified model must match, with one recorded change.
      If these runs cannot be matched, choose Side-by-side results to view each run separately.</p>
    <label class="stack-label">What do you want to decide?<select class="ck-select" name="comparison-intent" value=${y} onChange=${p=>A(p.target.value)}>
      <option value="general-comparison">Review observed differences</option><option value="test-original-customization-removal">Review evidence before keeping, updating or removing Original</option></select></label>
    <button class="ck-btn ck-btn-primary" disabled=${!m||!u||!f||u===f||!!ne} onClick=${()=>U("compare_runs",{original:u,changed:f,mode:h,axisKey:m,intent:y})}>Compare results</button>`}
    ${_e?.mode==="descriptive"&&a`<section class="comparison-report">
      <${Fn} comparison=${_e} runs=${o} />
    </section>`}
    ${_e?.receipt&&a`<section class="comparison-report">
      <${sn} receipt=${_e.receipt} cases=${_e.cases} runs=${o} runDetails=${_e.runDetails} />
      <details class="comparison-source"><summary>Full comparison report</summary><pre tabindex="0">${_e.text}</pre></details>
      <p>Save this comparison without changing the original run results. Saving does not run an eval.</p>
      <button class="ck-btn" disabled=${!e.trusted||Ve==="saved"||!!ne}
        onClick=${async()=>{let p=_e.receipt.id;await U("save_comparison",{id:p})&&P({receiptId:p,status:"saved"})}}>${Ve==="saved"?"Comparison saved":"Save comparison"}</button></section>`}
    ${e.comparisons.length>0&&a`<label class="stack-label">Verified saved comparison<select class="ck-select" name="saved-comparison"
      disabled=${!!ne} value=${_} onChange=${async p=>{let C=p.target.value;pe(C),C&&await U("saved_comparisons",{id:C})}}>
      <option value="">Choose a comparison</option>${e.comparisons.map(p=>a`<option value=${p.receipt.id} key=${p.receipt.id}>${p.receipt.axis.label} · ${We(p.receipt.generatedAt)}</option>`)}</select></label>
      ${e.comparisons.filter(p=>p.receipt.id===_).map(p=>a`
        <section aria-label="Saved comparison">
          ${!p.runDetails&&a`<p class="snapshot-notice">Case details are not loaded for this saved comparison.</p>`}
          <button class="ck-btn" disabled=${!!ne} onClick=${()=>U("saved_comparisons",{id:p.receipt.id})}>
            ${p.runDetails?"Reload comparison details":"Load comparison details"}</button>
          <${sn} receipt=${p.receipt} cases=${p.cases} runs=${[]} runDetails=${p.runDetails} />
          <details><summary>Full saved comparison report</summary><pre tabindex="0">${p.text}</pre></details></section>`)}`}
    </details>
    <${Ce} error=${oe?.error?"":me} />
  </section>`}function zn({state:e,invoke:t,target:n}){let[r,o]=x(n?.section??"project"),s=R(null);q(()=>{n&&o(n.section)},[n]),q(()=>{r==="advanced"&&globalThis.document?.activeElement?.getAttribute("role")!=="tab"&&s.current?.focus()},[r]);let c=[["project","Project","folder"],["ci","CI pipeline","git-compare"],["advanced","Advanced","settings"]];function i(y,A){if(!["ArrowLeft","ArrowRight","Home","End"].includes(y.key))return;y.preventDefault();let j=c.findIndex(([T])=>T===A),P=y.key==="Home"?0:y.key==="End"?2:(j+(y.key==="ArrowRight"?1:-1)+3)%3;o(c[P][0]),document.getElementById(`config-tab-${c[P][0]}`)?.focus()}let[l,u]=x({nodePath:e.runtime?.nodePath??"",evaluatorPath:"",copilotPath:e.runtime?.copilotPath??""}),[d,f]=x("auto"),[v,h]=x(""),{run:g,pending:b,error:$}=Ee(t),k=De(e.operation?.phase)||e.operation?.phase==="preparing"||e.operation?.phase==="approval"||!!e.operation?.approval,m=b==="install_evaluator"||e.operation?.runId==="install-runner"&&["preparing","running","stopping"].includes(e.operation?.phase),w=()=>({...d==="local:npm"?{scope:"local",manager:"npm"}:d==="local:pnpm"?{scope:"local",manager:"pnpm"}:d==="global:npm"?{scope:"global",manager:"npm"}:{},...l.copilotPath?{copilotPath:l.copilotPath}:{}});return a`<section class="studio-pane runner-pane configuration-pane" aria-labelledby="runner-heading">
    <div class="studio-heading"><div><h2 id="runner-heading">Settings</h2>
      <p>Choose where to keep evals and when to run them in CI.</p></div>
      <span class="ck-badge">${e.runtime?"Runner verified this session":"Automatic runner selection"}</span></div>
    <div class="config-nav"><div role="tablist" aria-label="Configuration area">
      ${c.map(([y,A,j])=>a`<button type="button" role="tab" id=${`config-tab-${y}`}
        aria-controls=${`config-panel-${y}`} aria-selected=${r===y} tabindex=${r===y?0:-1}
        onKeyDown=${P=>i(P,y)} onClick=${()=>o(y)}><${H} name=${j} size=${16} />${A}</button>`)}
    </div><span>Review changes before saving.</span></div>
    <div hidden=${r==="advanced"}><${ls} key=${e.projectPath} state=${e} invoke=${t} section=${r} onSection=${o} /></div>
    <div id="config-panel-advanced" role="tabpanel" aria-labelledby="config-tab-advanced" hidden=${r!=="advanced"} class="config-advanced">
    <section class="config-card runner-advanced"><header><div><h3 ref=${s} tabindex="-1">Runner tools</h3>
      <p>Tools are selected automatically. Choose a different installation if needed.</p></div><span class="ck-badge">${e.runtime?"Verified this session":"Not verified"}</span></header>
    <div class="config-card-body">
    <p>Review & run selects installed tools and checks them while preparing the eval. Your app asks about the exact run and costs before execution. Nothing is downloaded or installed.</p>
    <p>Override automatic selection with an existing installation you trust.</p>
    <form class="runner-form" onSubmit=${async y=>{y.preventDefault(),await g("configure_evaluator",l)}}>
      <label class="stack-label">Install mode
        <select class="ck-select" name="install-mode" value=${d} onChange=${y=>f(y.target.value)}>
          <option value="auto">Auto-detect project package manager</option>
          <option value="local:npm">Project dependency (npm)</option>
          <option value="local:pnpm">Project dependency (pnpm)</option>
          <option value="global:npm">Global installation (npm)</option>
        </select>
      </label>
      <div class="draft-actions">
        <button class="ck-btn" type="button" disabled=${!!b||k} onClick=${()=>g("detect_runner")}>Find installed tools</button>
        <button class="ck-btn" type="button" disabled=${!e.trusted||!!b||k} onClick=${()=>g("install_evaluator",w())}>Install eval runner</button>
        ${m&&a`<button class="ck-btn ck-btn-danger" type="button" disabled=${e.operation?.phase==="stopping"} onClick=${()=>t("cancel_operation",{})}>${e.operation?.phase==="stopping"?"Stopping\u2026":"Stop installation"}</button>`}
      </div>
      ${e.runnerCandidates&&a`<div class="runner-candidates">
        ${[["node","nodePath","Node"],["vally","evaluatorPath","Eval runner"],["copilot","copilotPath","Copilot"]].map(([y,A,j])=>a`<label class="stack-label">${j} candidates
          <select class="ck-select" name=${`${A}-installed`} value=${l[A]} onChange=${P=>u(T=>({...T,[A]:P.target.value}))}>
            <option value="">Choose an installed tool or enter a path below</option>${e.runnerCandidates[y]?.candidates.map(P=>a`
              <option value=${P.path} key=${P.path}>${P.path} · ${P.version??"Unverified"}</option>`)}</select>
          ${!e.runnerCandidates[y]?.candidates.length&&a`<span class="ck-muted">No installation found. You can enter its path below.</span>`}</label>`)}
        ${e.runnerCandidates.problems?.map((y,A)=>a`<p class="ck-muted" key=${A}>${y}</p>`)}</div>`}
      ${[["nodePath","Node program","C:\\Program Files\\nodejs\\node.exe"],["evaluatorPath","Eval runner folder or CLI file","Full path to the installed @microsoft/vally-cli"],["copilotPath","Copilot CLI program (optional for mock evals)","Full path to the Copilot CLI program"]].map(([y,A,j])=>a`<label class="stack-label" key=${y}>${A}
        <input class="ck-input" name=${y} autocomplete="off" value=${l[y]} spellcheck="false" placeholder=${j}
          onInput=${P=>u(T=>({...T,[y]:P.target.value}))} /></label>`)}
      <div class="effect-notice"><strong>What happens next</strong><p>Starts the tools you selected to check their versions and installation details.
        This doesn't run evals, contact AI, start tool servers or install anything. Only choose programs you trust.</p></div>
      <p>Your app asks for approval before starting these checks.</p>
      <button class="ck-btn ck-btn-primary" type="submit" disabled=${!e.trusted||!!b||!l.nodePath||!l.evaluatorPath}>
        ${b?"Verifying\u2026":"Verify selected runner"}</button>
      <${Ce} error=${$} />
    </form></div></section>
    ${e.runtime&&a`<dl class="runner-details"><dt>Node</dt><dd>${e.runtime.nodePath}</dd>
      <dt>Evaluator</dt><dd>${e.runtime.cliPath}</dd><dt>Version</dt><dd>${e.runtime.version}</dd>
      ${e.runtime.copilotPath&&a`<dt>Copilot</dt><dd>${e.runtime.copilotPath}</dd>`}</dl>`}
    <details class="troubleshooting config-card"><summary>Runner problems and run locks</summary>
      <p>A setup error doesn't mean the eval failed. Check full paths, supported versions and workspace trust. Check who owns a run lock before removing it.</p>
      <button class="ck-btn" disabled=${!!b} onClick=${()=>g("diagnose_lock")}>Diagnose run lock</button>
      ${e.lock&&a`<pre tabindex="0">${JSON.stringify(e.lock,null,2)}</pre>
        ${e.lock.state==="retained"&&a`<label class="stack-label">Confirm the saved lock ID
          <input class="ck-input" name="lock-identity" autocomplete="off" spellcheck="false" placeholder="Paste the full 64-character lock ID" onInput=${y=>h(y.target.value)} />
          <button class="ck-btn ck-btn-danger" disabled=${!e.trusted||!!b||v!==e.lock.identity}
            onClick=${()=>g("recover_lock",{identity:v})}>Recover this retained lock</button></label>`}`}
    </details>
    </div>
  </section>`}function qn({state:e,invoke:t,onDefinitions:n,onOpenRun:r}){let{run:o,pending:s,error:c}=Ee(t),[i,l]=x("github"),[u,d]=x([]),[f,v]=x(""),[h,g]=x(""),b=e.operation,$=b.approval&&!b.approval.contrastId?b.approval:null,k=R(null);q(()=>{k.current?.focus()},[$?.id]);let m=["completed","failed","cancelled","cleanup-error"].includes(b.phase),w=e.assets.filter(_=>`${_.name} ${_.relativePath}`.toLowerCase().includes(f.toLowerCase())).slice(0,100),y=e.assets.filter(_=>u.includes(_.id)),A=y.find(_=>_.kind==="eval"),j=e.assets.filter(_=>_.kind==="eval"),P=j.find(_=>_.id===h);q(()=>{h&&!j.some(_=>_.id===h)&&g("")},[e.assets,h]);let T=De(b.phase)||b.phase==="approval"||!!b.approval,D=e.trusted&&!T&&!s;return a`<section class="studio-pane activity-pane" aria-labelledby="activity-heading">
    <div class="studio-heading"><div><h2 id="activity-heading">Run your evals</h2>
      <p>Choose an eval, review what it will do, and approve it to start. Follow progress and open the saved results here.</p></div>
      <span class=${`phase-badge phase-${b.phase}`} role="status">${b.phase}</span></div>
    <section class="eval-run-picker" aria-label="Choose an eval to run">
      <div class="eval-run-row">
        <label class="stack-label">Choose an eval<select class="ck-select" name="eval-to-run" value=${h}
          disabled=${T||!!s} onChange=${_=>g(_.target.value)}>
          <option value="">Select a saved eval</option>
          ${j.map(_=>a`<option value=${_.id} key=${_.id}>${_.name} · ${_.relativePath}</option>`)}
        </select></label>
        <button class="ck-btn ck-btn-primary" disabled=${!D||!P}
          onClick=${()=>o("review_and_run",{id:P.id,authentication:i})}><${H} name="play" size=${15} />${s==="review_and_run"?"Waiting for your app\u2026":"Review & run"}</button>
      </div>
      <label class="stack-label">Authentication<select class="ck-select" name="authentication" value=${i} disabled=${De(b.phase)||$?.hostPending||!!s} onChange=${_=>l(_.target.value)}>
        <option value="github">GitHub CLI sign-in (when the model or grader needs it)</option><option value="configured">Token from environment variables</option></select></label>
      <p class="ck-muted">${e.trusted?"Review & run starts installed runner checks and prepares this eval. Your app asks once about the exact run, tools and costs before execution. Nothing is installed.":"Trust this folder to prepare a run. You'll review and approve its effects before it starts."}</p>
      ${!j.length&&a`<p>No saved evals found. Create and save an eval first.</p>
        <button class="ck-btn" onClick=${n}>Browse evals</button>`}
    </section>
    <details class="project-checks"><summary>Select files to check or evals to run</summary>
      <p>Select up to 32 files to check for file and link problems. Evals run one at a time, with your approval before each run.</p>
      <label class="stack-label">Find files to check<input class="ck-input" name="check-query" autocomplete="off" value=${f} onInput=${_=>v(_.target.value)} /></label>
      <div class="check-targets">${w.map(_=>a`<label class="approval-check" key=${_.id}>
        <input type="checkbox" checked=${u.includes(_.id)} disabled=${!u.includes(_.id)&&u.length>=32}
          onChange=${pe=>d(ie=>pe.target.checked?[...ie,_.id]:ie.filter(se=>se!==_.id))} />
        <span>${_.name} · ${_.kind}<small>${_.relativePath}</small></span></label>`)}</div>
      ${!e.assets.length&&e.discovery?.status==="ready"&&a`<${bt} projectPath=${e.projectPath} invoke=${t} />`}
      ${w.length===100&&a`<p>Showing the first 100 matches. Narrow your search to find other files.</p>`}
      <p>${y.length}/32 selected · ${y.filter(_=>_.kind==="eval").length} evals queued</p>
      <div class="draft-actions"><button class="ck-btn" disabled=${!D||!y.length}
        onClick=${()=>o("run_health",{ids:y.map(_=>_.id)})}>Check selected files & links</button>
        <button class="ck-btn ck-btn-primary" disabled=${!D||!A}
          onClick=${async()=>{await o("review_and_run",{id:A.id,authentication:i})&&d(pe=>pe.filter(ie=>ie!==A.id))}}>Review next eval</button>
        <button class="ck-btn" disabled=${!u.length||!!s} onClick=${()=>d([])}>Clear check selection</button></div>
    </details>
    ${$?a`<section class="run-approval" aria-labelledby="approval-heading">
      <h3 id="approval-heading" ref=${k} tabindex="-1">Run summary</h3><p>${$.message}</p>
      <div class="run-summary-text" role="region" aria-label="Run scope and historical cost">${$.displayDetail??$.detail}</div>
      <details><summary>Full model, input, tool and permission details</summary><pre tabindex="0">${$.detail}${`

`}${$.fullDetails}</pre></details>
      <p>${$.cases} cases · ${$.executor} · Saved run ${b.record?.id}</p>
      <p>${$.hostPending?"Review and approve this run in your app's confirmation prompt. Nothing executes until you accept.":"Your app will ask you to approve this exact run and its costs."}</p>
      <div class="draft-actions">${!$.hostPending&&a`<button class="ck-btn ck-btn-primary" disabled=${!e.trusted||!!s}
        onClick=${()=>o("execute_run",{approvalId:$.id,authentication:i})}>Review run approval</button>`}
        <button class="ck-btn" disabled=${s==="cancel_operation"} onClick=${()=>o("cancel_operation")}>Cancel approval</button></div>
    </section>`:De(b.phase)?a`<section class="run-progress"><h3>${b.record?.name??"Current action"}</h3>
      <progress max=${b.total||1} value=${b.completed??0} aria-label="Completed targets"></progress>
      <p role="status">${b.completed??0}/${b.total??0} completed · ${b.phase}</p>
      <button class="ck-btn ck-btn-danger" disabled=${b.phase==="stopping"} onClick=${()=>o("cancel_operation")}>${b.phase==="stopping"?"Stopping\u2026":"Stop this run"}</button></section>`:a`<div class="empty-studio"><${H} name=${m?b.phase==="completed"?"circle-check":"triangle-alert":"play"} size=${32} /><h3>${m?"Run finished. See how it went.":"Ready to run an eval?"}</h3>
        <p>${m?"A finished run can still contain failed responses or errors. Open the report to see each outcome.":"Choose an eval and review it before starting. Opening this page doesn't start a run."}</p>
        <div class="empty-studio-actions">
          ${m&&b.record?.id&&r&&a`<button class="ck-btn ck-btn-primary" onClick=${()=>r(b.record.id)}><${H} name="arrow-up-right" size=${15} />Open in Results</button>`}
          <button class="ck-btn" onClick=${n}>Choose an eval</button>
        </div></div>`}
    ${b.record&&a`<div class="run-identity"><strong>${b.record.name??b.record.id}</strong>
      <code>${b.record.id}</code><span>${b.record.status}</span></div>
      <div class="evidence-actions">${["report","trajectory","output","source"].map(_=>a`
        <button class="ck-btn" disabled=${!!s} onClick=${()=>o("read_evidence",{id:b.record.id,kind:_})}>${_==="source"?"Report source":_==="trajectory"?"Conversation trace":_[0].toUpperCase()+_.slice(1)}</button>`)}
        ${m&&b.record?.id&&r&&a`<button class="ck-btn ck-btn-primary" disabled=${!!s} onClick=${()=>r(b.record.id)}>Open in Results</button>`}
        ${m&&a`<button class="ck-btn" disabled=${!!s} onClick=${()=>o("refresh")}>Refresh saved history</button>`}</div>`}
    ${b.output&&a`<details open class="live-output"><summary>Run output</summary><p class="ck-muted">Shows recent output only. Recognized secrets are hidden; check for other private information before sharing.</p><pre tabindex="0">${b.output}</pre></details>`}
    ${e.evidence&&a`<section class="saved-evidence"><h3>${e.evidence.title} · ${e.evidence.kind}</h3><pre tabindex="0">${e.evidence.text}</pre></section>`}
    <${Ce} error=${c||b.error} />
  </section>`}function Hn({state:e,asset:t,invoke:n,onClose:r,onPrepared:o}){let[s,c]=x(""),[i,l]=x(""),[u,d]=x(""),[f,v]=x({tool:"",scope:"",expectedToolOutput:"",args:"{}"}),[h,g]=x(""),{run:b,pending:$,error:k}=Ee(n),m=R(null);return q(()=>{m.current?.focus()},[]),a`<section class="studio-pane behavior-pane" aria-labelledby="behavior-heading">
    <div class="studio-heading"><h2 id="behavior-heading" ref=${m} tabindex="-1">Prepare exact-output baseline: ${t.name}</h2><button class="ck-btn" onClick=${r}>Back to project files</button></div>
    <p>Prepare a baseline with an exact-response check for this ${t.kind}. This is separate from Create's editable drafts. You'll review any AI or tool use before running it.</p>
    <form class="baseline-form" onSubmit=${async w=>{w.preventDefault();let y;g("");try{y=JSON.parse(f.args)}catch{g("Tool arguments must be a valid JSON object. Check quotes, commas and brackets.");return}let A={task:s,expected:{kind:"output-exact",text:i},...u.trim()?{model:u.trim()}:{},...t.kind==="mcp-server"?{mcp:{operation:"read-only",tool:f.tool,scope:f.scope,expectedToolOutput:f.expectedToolOutput,args:y}}:{}};await b("prepare_baseline",{id:t.id,scenario:A})&&o()}}>
      <label class="stack-label">Realistic task<textarea class="ck-textarea" name="task" autocomplete="off" rows="5" maxLength="8000" value=${s} onInput=${w=>c(w.target.value)}></textarea></label>
      <label class="stack-label">Exact expected response<textarea class="ck-textarea" name="expected-response" autocomplete="off" rows="3" maxLength="2000" value=${i} onInput=${w=>l(w.target.value)}></textarea></label>
      <label class="stack-label">Model (optional: runner default)<input class="ck-input" name="model" autocomplete="off" spellcheck="false" value=${u} onInput=${w=>d(w.target.value)} placeholder="Supported model ID" /></label>
      ${t.kind==="mcp-server"&&a`<fieldset><legend>Approved read-only local fixture MCP action</legend>
        ${[["tool","Exact tool name"],["scope","Operation scope"],["expectedToolOutput","Expected observable tool output"],["args","String-valued tool arguments (JSON object)"]].map(([w,y])=>a`
          <label class="stack-label">${y}<input class="ck-input" name=${w} autocomplete="off" spellcheck="false" value=${f[w]} onInput=${A=>v(j=>({...j,[w]:A.target.value}))} /></label>`)}
        <p>Only local fixture servers that use stdio are supported. Remote servers, package installs, secrets and unclear settings are blocked.</p></fieldset>`}
      <p>Your app asks before creating eval inputs and checking their format. This doesn't approve AI requests or tool server use.</p>
      <button class="ck-btn ck-btn-primary" type="submit" disabled=${!e.trusted||!s.trim()||!i.trim()||!!$}>Prepare eval for review</button>
      <${Ce} error=${h||k} />
    </form>
  </section>`}function Wn({state:e,invoke:t,source:n,uri:r}){let{run:o,pending:s,error:c}=Ee(t);return a`<div class="problem-help"><button class="ck-btn" disabled=${!e.trusted||!!s}
    onClick=${()=>o("request_diagnostic_fix",{source:n,...r?{uri:r}:{}})}>
    ${s?"Requesting help\u2026":"Ask Copilot to fix this"}</button>
    <${It} state=${e} invoke=${t} compact />
    <${Ce} error=${c} /></div>`}function ms({state:e,invoke:t,activeView:n,onAuthor:r,onSetup:o,onActivity:s}){let{run:c,pending:i,error:l}=Ee(t),u=e.operation.approval&&!e.operation.approval.contrastId?e.operation.approval:null;return a`
    <div class="workflow-bar">
      <div class="workflow-main">
      <div class="workflow-shortcuts">
        ${De(e.operation.phase)||u?a`
          <button class="ck-btn operation-shortcut" onClick=${s}><${H} name="play" size=${14} />${e.operation.phase==="approval"?"Review run approval":`${e.operation.phase} \xB7 ${e.operation.completed}/${e.operation.total}`}</button>`:null}
        <${It} state=${e} invoke=${t} />
        ${(e.issues.length>0||e.historyError)&&a`<button class="ck-btn" disabled=${!e.trusted||!!i}
          title="Send the current folder's problems to Copilot for help. Review and approve the request first."
          onClick=${()=>c("request_diagnostic_fix")}><${H} name="wand-sparkles" size=${15} />Ask Copilot</button>`}
        ${n!=="author"&&a`<button class="ck-btn ck-btn-primary" onClick=${r}><${H} name="sparkles" size=${15} />Create eval</button>`}
        <button class="ck-btn ck-btn-icon" id="btn-setup" type="button" aria-label="Settings" title="Settings"
          aria-pressed=${n==="setup"} aria-current=${n==="setup"?"page":void 0} onClick=${o}><${H} name="settings" size=${15} /></button>
      </div>
      </div>
      <${Ce} error=${l} />
    </div>`}function vs({state:e,invoke:t,onActivity:n,onAuthor:r,onBaseline:o}){let{run:s,pending:c,error:i}=Ee(t),l=e.assets.find(f=>f.id===e.selectedAssetId),u=e.trusted&&!De(e.operation.phase)&&!e.operation.approval&&e.graderTestPhase==="idle";if(!l)return null;let d=a`
    ${["eval","skill"].includes(l.kind)&&a`<button class="ck-btn" disabled=${!u||!!c}
      title="Validate the file format without running the eval."
      onClick=${()=>s("validate_asset",{id:l.id})}><${H} name="check" size=${14} />Check file format</button>`}
    <button class="ck-btn" disabled=${!e.trusted||!!c||De(e.operation.phase)}
      title="Check file structure and links, not the eval's task or model behavior."
      onClick=${async()=>{await s("run_health",{ids:[l.id]})&&n()}}><${H} name="shield-check" size=${14} />Run file & link checks</button>`;return a`<div class="selected-asset-bar">
    <div class="selected-tools" role="group" aria-label="Selected file actions">
      <span class="selected-file-label ck-muted">${l.name}</span>
      ${l.kind==="eval"&&a`<button class="ck-btn ck-btn-primary" disabled=${!u||!!c}
        onClick=${async()=>{n(),await s("review_and_run",{id:l.id})}}><${H} name="play" size=${14} />Review & run</button>`}
      ${l.kind!=="eval"&&a`${d}
        <button class="ck-btn ck-btn-primary" disabled=${!1} onClick=${r}><${H} name="sparkles" size=${14} />Create eval for this file</button>`}
      ${["skill","agent","mcp-server"].includes(l.kind)&&a`<button class="ck-btn" disabled=${!u||!!c}
        onClick=${()=>o(l)}>Prepare exact-output baseline</button>`}
    </div>
    ${l.kind==="eval"&&a`
      <p>Review & run starts installed runner checks and prepares this eval. Your app asks once about the exact run, tools and costs before execution. Nothing is installed.</p>
      <details class="selected-checks" key=${l.id}><summary>More checks</summary>
        <p>Check file format validates the definition. File & link checks inspect structure and links, without testing model behavior.</p>
        <div class="selected-tools">${d}</div>
        <p>Graders score the answers from an eval. Test graders checks those scoring rules against reference answers or saved trajectories; it may run scripts or use paid models.</p>
        <${Gr} key=${l.id} state=${e} item=${l} invoke=${t} />
      </details>`}
    ${e.validation&&a`<details class="validation-result"><summary>Format check: ${e.validation.status}</summary>
      <p>A format check doesn't show whether this eval can run or pass. Running needs separate compatibility checks and approval.</p>
      <pre tabindex="0">${e.validation.diagnosticText}</pre>
      ${e.validation.compatibility&&a`<p>Runner compatibility (separate from the format check): ${e.validation.compatibility.status}</p>
        <pre tabindex="0">${e.validation.compatibility.diagnostics.join(`
`)}</pre>`}</details>`}
    <${Ce} error=${i} />
  </div>`}var hs=(e,t)=>{let n=String(e??"").trim().replaceAll("\\","/").replace(/^\.\/+/,""),r=t?`${t}/`:"";return r&&n.startsWith(r)?n.slice(r.length):n},Un=(e,t,n)=>e.length===t.length&&e.every((r,o)=>hs(r.relativePath,n)===hs(t[o]?.relativePath,n)&&(r.kind??"eval")===(t[o]?.kind??"eval")&&r.content===t[o]?.content);function gs({state:e,invoke:t,onActivity:n,onSetup:r,draftCache:o}){let s=e.draft.epoch??"",c=e.draft.request?.outputDirectory??e.draft.handoff?.outputDirectory,i=o.current?.project===e.projectPath&&((o.current?.epoch??"")===s||o.current.dirty)?o.current:null,l=!i||(i.epoch??"")===s,u=l&&!!i?.dirty&&i.revision<e.draft.revision&&(i.outputDirectory??"")===(e.draft.outputDirectory??"")&&Un(i.files,e.draft.files,c),d=e.assets?.find(K=>K.id===e.selectedAssetId),[f,v]=x(()=>i?i.dirty&&!u||i.revision>=e.draft.revision?i.files:e.draft.files:e.draft.files.length?e.draft.files:[{relativePath:"new.eval.yaml",kind:"eval",content:Pt("New evaluation")}]),[h,g]=x(()=>i&&(i.dirty&&!u||i.revision>=e.draft.revision)?i.outputDirectory??"":e.draft.outputDirectory??""),[b,$]=x(0),[k,m]=x(i?i.dirty&&!u:!1),[w,y]=x(!!i?.dirty&&!u&&(!l||i.revision<e.draft.revision)),[A,j]=x(i?.message??""),[P,T]=x(i?.includeSource??!1),[D,_]=x(!1);q(()=>_(!1),[e.projectPath]);let[pe,ie]=x(!1),[se,he]=x(!0),[ue,$e]=x(!1),[be,E]=x(!1),J=R(0),G=R(""),[Y,te]=x(i?.guided??{name:d?`${d.name} eval`:"New eval",task:"",expected:""}),[Z,M]=x(!1),[N,W]=x(!1),[ke,U]=x(u?"":i?.syncIssue??""),Q=R(null),ne=R(!0),me=R(null),we=R(null),xe=R(0),Se=R(i?i.epoch??"":s),Ne=R(s);Ne.current=s;let Oe=R(i&&!u&&(i.dirty||i.revision>e.draft.revision)?i.revision:e.draft.revision),je=R(!!e.draft.handoff);je.current=!!e.draft.handoff;let X=R(!1),le=R(null),He=R({count:e.chat.messages.length,status:e.chat.status}),B=R(null),ve=R(null),ce=R({review:!1,files:f.length}),oe=R(!1),de=R(!1),{run:ge,pending:V,error:ae}=Ee(t);q(()=>(ne.current=!0,()=>{ne.current=!1}),[]),Fe(()=>{(typeof document<"u"?document.activeElement:null)?.closest?.('[role="tablist"][aria-label="Workspace views"]')||me.current?.focus()},[]),Fe(()=>{ce.current.review&&!pe&&(oe.current=!0),ce.current.files&&!f.length&&(de.current=!0),ce.current={review:pe,files:f.length};let S=(de.current?[ve.current]:oe.current?[B.current,we.current,ve.current]:[]).find(I=>I?.isConnected&&!I.disabled);S&&(S.focus(),oe.current=!1,de.current=!1)},[pe,f.length,V]),q(()=>{o.current={project:e.projectPath,epoch:Se.current,files:f,outputDirectory:h,dirty:k,guided:Y,message:A,includeSource:P,syncIssue:ke,revision:Oe.current}},[f,h,k,Y,A,P,ke,V,e.projectPath,s]),q(()=>$e(!1),[f,e.draft.revision,s]),q(()=>M(!1),[f,w,e.selectedAssetId]),q(()=>{if(s!==Se.current){if(k&&(h!==(e.draft.outputDirectory??"")||!Un(f,e.draft.files,c))){y(!0),ie(!1);return}Se.current=s,Oe.current=e.draft.revision,v(e.draft.files.length?e.draft.files:[{relativePath:"new.eval.yaml",kind:"eval",content:Pt("New evaluation")}]),g(e.draft.outputDirectory??""),$(0),m(!1),y(!1),U(""),ie(!1);return}if(!(e.draft.revision<=Oe.current)&&!X.current){if(k&&(h!==(e.draft.outputDirectory??"")||!Un(f,e.draft.files,c))){y(!0);return}Oe.current=e.draft.revision,v(e.draft.files),$(0),m(!1),y(!1),U(""),g(e.draft.outputDirectory??"")}},[e.draft.revision,s,V,c]),q(()=>{(He.current.count!==e.chat.messages.length||He.current.status!==e.chat.status)&&(le.current?.scrollIntoView({block:"nearest"}),He.current={count:e.chat.messages.length,status:e.chat.status})},[e.chat.messages.length,e.chat.status]),q(()=>{e.draft.proposal||(ie(!1),E(!1))},[e.draft.proposal]);function _e(K,S){Pe||(xe.current++,m(!0),$e(!1),ie(!1),U(""),v(I=>I.map((z,L)=>L===K?{...z,...S}:z)))}async function Te(K=!1){if(Q.current)return Q.current;if(U(""),!f.length&&!e.draft.files.length)return m(!1),y(!1),{files:0};if(!f.length&&(e.draft.request||e.draft.handoff))return null;K&&(Se.current=s);let S=xe.current,I=Se.current;X.current=!0;let z=K?e.draft.revision:Oe.current,L=K?s:I,fe=(async()=>{try{let O=await ge(f.length?"update_draft":"clear_draft",{...f.length?{files:f,...h||e.draft.outputDirectory!==void 0?{outputDirectory:h}:{}}:{},expectedRevision:z,...L?{expectedEpoch:L}:{}});return Se.current!==I||O?.epoch!==void 0&&I&&O.epoch!==I?null:Ne.current!==I&&O?.epoch!==Ne.current?(y(!0),null):O?(O.epoch!==void 0&&(Se.current=O.epoch),Oe.current=O.revision??e.draft.revision,y(!1),xe.current===S&&m(!1),xe.current===S?O:null):(ne.current&&U("Couldn't sync the draft, or syncing was cancelled. Your edits are kept. Choose Retry sync before checking or sending."),null)}finally{X.current=!1,Q.current=null}})();return Q.current=fe,fe}async function Ve(){let K=xe.current;(k||!e.draft.files.length)&&!await Te()||xe.current===K&&await ge("validate_draft")}async function et(){k&&!await Te()||await ge("retry_draft")}async function Be(){if(e.draft.handoff||je.current)return!1;let K=o.current?.files??f,S=Se.current;X.current="retargeting",m(!0);try{let I=await ge("clear_draft",{expectedRevision:Oe.current,...S?{expectedEpoch:S}:{}});if(!I||Se.current!==S||Ne.current!==S&&I.epoch!==Ne.current||I.epoch!==void 0&&S&&I.epoch!==S)return!1;I.epoch!==void 0&&(Se.current=I.epoch),Oe.current=I.revision??e.draft.revision;let z=o.current?.files??K;if(z.length){let L=xe.current,fe=Se.current;X.current=!0;let O=await ge("update_draft",{files:z,...h?{outputDirectory:h}:{},expectedRevision:Oe.current,...fe?{expectedEpoch:fe}:{}});if(!O||Se.current!==fe||Ne.current!==fe&&O.epoch!==Ne.current||O.epoch!==void 0&&fe&&O.epoch!==fe)return!1;O.epoch!==void 0&&(Se.current=O.epoch),Oe.current=O.revision??e.draft.revision,xe.current===L&&(m(!1),y(!1))}else m(!1),y(!1);return U(""),!0}finally{X.current=!1}}function tt(K){if(K.key==="Escape"){K.preventDefault(),[B.current,ve.current,me.current].find(L=>L&&!L.disabled)?.focus();return}if(K.key!=="Tab"||K.shiftKey||Pe)return;K.preventDefault();let{selectionStart:S,selectionEnd:I}=K.target,z=`${f[b].content.slice(0,S)}  ${f[b].content.slice(I)}`;_e(b,{content:z}),requestAnimationFrame(()=>{we.current.selectionStart=we.current.selectionEnd=S+2})}let p=f[b],C=e.trusted&&!De(e.operation.phase)&&!e.operation.approval&&(!e.graderTestPhase||e.graderTestPhase==="idle"),F=e.detail?.type==="asset"?e.detail:null,ee=F?.kind==="eval"&&(F.sourceUnchanged!==!0||F.stale)?"This preview is shortened, changed, or out of date. Read the full original through an approved reader before replacing the draft, or settings could be lost.":"",Ae=P&&!!F&&!F.stale,Le=e.assets??[],ut=Le.filter(K=>K.kind!=="eval"),Ot=Le.filter(K=>K.kind==="eval"),st=!!(e.draft.saving||e.draft.closed||e.draft.request?.stateUnavailable||e.draft.request?.recoveryRequired),at=!!(e.draft.saveAttempted||e.draft.saveOutcome&&!e.draft.saveOutcome.complete),Pe=!!(st||at),ln=!V&&!Pe&&!e.draft.handoff,Dt=f.length===1&&!xe.current&&f[0].relativePath==="new.eval.yaml"&&f[0].kind==="eval"&&f[0].content===Pt("New evaluation"),yt=!!e.draft.request,nt=!!e.draft.handoff;q(()=>{if(!k||V||w||Pe||ke||!f.length&&(yt||nt))return;let K=setTimeout(()=>{Te()},250);return()=>clearTimeout(K)},[f,h,k,V,w,Pe,ke,yt,nt]);let ot=st?"Wait for the original save, or recover it using the same request and proposed files.":w?"Resolve the shared draft conflict before continuing.":e.draft.revision<Oe.current?"Waiting for the current shared draft. Refresh if disconnected.":e.draft.request&&(e.draft.request.targetId??"")!==(e.selectedAssetId??"")?at?"Select the source used for this incomplete save, then reopen Review & save to recover the same proposed files.":e.draft.handoff?"Select this Chat draft's original source, or discard the draft.":"The selected source changed. Choose Use selected source for this draft before checking or sending.":!f.length&&(e.draft.request||e.draft.handoff)?"Add a file to keep this draft, or discard it.":ke||(e.trusted?e.draft.request?.canRestart?e.draft.handoff?"This Chat draft keeps its original requirements and source files. Discard the draft to start over.":"The folder is trusted again. Start a new request to check your kept draft against the current source.":C?V?V==="update_draft"||V==="clear_draft"?"Synchronizing your draft in memory.":"Wait for the current draft action to finish.":"":"Finish or cancel the current eval operation before continuing.":e.trustSource==="native"?"Trust this workspace in your app to use AI, check files and save.":"Select Trust this folder to use AI, check files and save."),Lt=e.draft.request?.validated&&e.draft.request.canRetry&&!e.draft.saving&&!e.draft.saveAttempted&&!e.draft.saveOutcome&&(k||!e.draft.proposal||!e.draft.proposal.canCommit),Mt=!k&&!ot&&!!e.draft.proposal?.canCommit,cn=e.draft.saveOutcome?.complete?"Step 3 complete: Files created. Choose an eval to run next.":Mt?"Step 2 complete: Format check passed. Ready to Review & save.":Lt?"Draft changed or rejected after check. Retry edited draft to validate again.":e.trusted?k?"Step 1: Syncing your edits without saving files. Checking and saving still need separate actions.":"Step 1: Choose Check draft before saving.":"Step 1: Edit your draft, then trust this folder to Check draft and Review & save.",ft={state:e,invoke:t,run:ge,pending:V,error:ae,draftEpoch:s,files:f,setFiles:v,setSelected:$,setDirty:m,setConflict:y,setDiscard:$e,setReview:ie,setSyncIssue:U,setIncludeSource:T,setDirectoryChoice:g,guided:Y,setGuided:te,replace:Z,setReplace:M,tagsPending:N,setTagsPending:W,message:A,setMessage:j,includeOrganization:D,setIncludeOrganization:_,showDiagnostics:be,setShowDiagnostics:E,dirty:k,blocked:ot,lockedDraft:Pe,conflict:w,ready:C,canRetarget:ln,canRetryDraft:Lt,stepReadyToSave:Mt,stepStatus:cn,syncIssue:ke,discard:ue,isStarterDraft:Dt,source:F,copyNotice:ee,effectiveIncludeSource:Ae,allProjectFiles:Le,projectAssets:ut,projectEvals:Ot,outputDirectory:c,directoryChoice:h,hasBoundRequest:yt,hasBoundHandoff:nt,version:xe,lastSynced:Oe,lastEpoch:Se,sharedEpoch:Ne,hasHandoff:je,discardRevision:J,discardEpoch:G,applying:X,saveButton:B,chatEnd:le,sync:Te,retargetDraft:Be,validate:Ve,retryDraft:et,onSetup:r,onActivity:n};return a`<section class="studio-pane author-pane" aria-labelledby="author-heading">
    <div class="studio-heading"><div><h2 ref=${me} tabindex="-1" id="author-heading">Create an eval</h2>
      <p>Describe the task and expected response, then review your draft before saving.</p></div>
      <button class="ck-btn" onClick=${()=>he(!se)} aria-expanded=${se}>${se?"Hide":"Show"} Copilot</button></div>
    ${ts(ft)}
    <div class=${`studio-grid ${se?"":"editor-only"}`}>
    <div class="author-workspace">
    ${ns(ft)}
      <div class="editor-workspace">
        <div class="editor-toolbar"><strong>Eval draft</strong><span role="status" class=${k?"dirty-dot":"ck-muted"}>${ke?"Sync needs attention":k?"Sync pending":e.draft.files.length?e.draft.retained?"Retained privately":"Synced in memory":f.length?"Starter draft":"No draft files"}</span>
          <button ref=${ve} class="ck-btn" disabled=${Pe||f.length>=16||!!V} onClick=${()=>{xe.current++,m(!0),$(f.length),U(""),ie(!1),v(K=>[...K,{relativePath:`new-${K.length+1}.eval.yaml`,kind:"eval",content:Pt(`Evaluation ${K.length+1}`)}])}}>+ File</button></div>
        <div class="file-tabs" role="tablist" aria-label="Draft files">${f.map((K,S)=>a`
          <button class=${`file-tab ${b===S?"active":""}`} role="tab" aria-selected=${b===S}
            id=${`draft-tab-${S}`} aria-controls="draft-file-panel" tabindex=${b===S?0:-1}
            key=${S} onClick=${()=>$(S)} onKeyDown=${I=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(I.key))return;I.preventDefault();let z=I.key==="Home"?0:I.key==="End"?f.length-1:(S+(I.key==="ArrowRight"?1:-1)+f.length)%f.length;$(z),document.getElementById(`draft-tab-${z}`).focus()}}>${K.relativePath.split("/").at(-1)||`File ${S+1}`}</button>`)}</div>
        <div id="draft-file-panel" role="tabpanel" aria-labelledby=${p?`draft-tab-${b}`:void 0}>
        ${p?a`<div class="file-metadata"><label class="stack-label">New file path<input class="ck-input" name="draft-path" disabled=${Pe} autocomplete="off" spellcheck="false" value=${p.relativePath}
          onInput=${K=>_e(b,{relativePath:K.target.value})} /></label>
          <label class="stack-label">File type<select class="ck-select" name="draft-kind" disabled=${Pe} value=${p.kind} onChange=${K=>{let S=K.target.value,I={kind:S},z=/(?:^|[\\/])fixtures[\\/]/i.test(p.relativePath);S==="fixture"&&!z?I.relativePath=`fixtures/sample/input-${b+1}.txt`:S==="eval"&&z&&(I.relativePath=`new-${b+1}.eval.yaml`),_e(b,I)}}>
            <option value="eval">Eval file (.eval.yaml)</option><option value="fixture">Sample input file (fixtures/...)</option></select></label>
          <button class="ck-btn" aria-label="Remove selected draft file" disabled=${Pe} onClick=${()=>{xe.current++,m(!0),U(""),ie(!1),v(K=>K.filter((S,I)=>I!==b)),$(Math.max(0,b-1))}}>Remove</button></div>
          <div class="code-editor"><pre class="line-numbers" aria-hidden="true">${p.content.split(`
`).map((K,S)=>S+1).join(`
`)}</pre>
            <textarea ref=${we} class="source-editor" name="draft-content" readonly=${Pe} autocomplete="off" aria-label=${`Edit ${p.relativePath}`} aria-describedby="editor-key-help" spellcheck="false" wrap="off" value=${p.content}
              onKeyDown=${tt} onScroll=${K=>{K.target.previousElementSibling.scrollTop=K.target.scrollTop}}
              onInput=${K=>_e(b,{content:K.target.value})}></textarea></div>
          <div class="editor-status"><span>${p.content.split(`
`).length} lines</span><span>${new TextEncoder().encode(p.content).length.toLocaleString()} bytes</span><span id="editor-key-help">Tab indents · Shift+Tab or Esc exits</span><span>New files only · UTF-8</span></div>`:a`<div class="empty-studio"><h3>No draft files yet.</h3><p>Add a file or ask Copilot for a proposal. No project files have changed.</p></div>`}
        </div>
        ${p?.kind==="fixture"&&a`<p class="ck-muted">Sample input files (.txt, .json, .md, or .csv) are saved under fixtures/&lt;folder&gt;/ so your eval can pass test files to the AI.</p>`}
        ${rs(ft)}
      </div>
    </div>
      ${se&&ss(ft)}
    </div>
    ${pe&&e.draft.proposal&&a`<${Yr} proposal=${e.draft.proposal} pending=${V}
      error=${ae} outcome=${e.draft.saveOutcome}
      onClose=${()=>ie(!1)}
      onSave=${async()=>{(await ge("save_draft",{proposalId:e.draft.proposal.proposalId}))?.complete&&ie(!1)}} />`}
  </section>`}function $s(e,t=0,n={}){let{onSelectEvidence:r,showTrajectory:o=!0,disabled:s=!1}=n,c=e.status==="passed"?"row-kind-success":"row-kind-attention",i=e.score!==null&&e.score!==void 0?`Score: ${e.score}`:"Score: not reported",l=Tt(e.judgeUsage),u=e.sameAttemptEvidence,d=!!(u?.available&&r&&u.target&&(u.target!=="trajectory"||o));return a`<li class="case-grader-item" key=${`${e.id}-${t}`}>
    <div class="case-grader-header">
      <strong>${e.name}</strong>
      <code class="case-grader-kind">${e.kind}</code>
      <span class=${`ck-badge ${c}`.trim()}>${e.status}</span>
      <span class="ck-muted">${i}</span>
    </div>
    <p class="case-grader-reason">${e.reason}</p>
    <p class="ck-muted case-grader-proves">What this check tells you: ${e.proves}</p>
    ${u?.summary&&a`<p class="ck-muted case-grader-evidence">Attempt evidence: ${u.summary}</p>`}
    ${d&&a`<div class="case-grader-evidence-actions">
      <button class="ck-btn ck-btn-sm" type="button" disabled=${s} onClick=${()=>r(u.target,{caseId:u.caseId,caseName:u.caseName,...u.stimulus?{stimulus:u.stimulus}:{},graderId:e.id,attempt:u.attempt,configuration:u.configuration,model:u.model,...u.artifact?{artifact:u.artifact}:{},turn:u.turn})}>${u.target==="trajectory"?"Open attempt conversation trace":u.target==="output"?"Open attempt output":"Open attempt report"}</button>
    </div>`}
    ${l&&a`<p class="ck-muted case-grader-judge">${l}</p>`}
    ${e.children?.length>0&&a`<ul class="case-grader-children" aria-label=${`Nested checks for ${e.name}`}>
      ${e.children.map((f,v)=>$s(f,v,n))}
    </ul>`}
  </li>`}function Ws({cases:e,mode:t="engine",onSelectEvidence:n,disabled:r=!1}){let o=Array.isArray(e)?Qe({cases:e}):[];if(!o.length||t==="health")return null;let s=t==="engine";return a`<section class="case-breakdown" role="region" aria-label="Per-case metrics and check breakdown">
    <h3>Results and checks for each case</h3>
    ${o.map((c,i)=>{let l=c.outcome==="pass"?"row-kind-success":["fail","error"].includes(c.outcome)?"row-kind-attention":"",u=c.trial?.attempt??null;return a`<div class="case-breakdown-card" key=${`${c.id}-${i}`}>
        <div class="case-breakdown-header">
          <strong>${c.name}</strong>
          <span class=${`ck-badge ${l}`.trim()}>${c.outcome}</span>
          ${c.trial?.model&&a`<code class="ck-muted">${c.trial.model}</code>`}
        </div>
        ${!c.trial?.artifact&&a`<p class="ck-muted">These answers aren't linked to a specific saved attempt. You can still read them.</p>`}
        ${c.evidenceDiagnostics.map(d=>a`<p class="evidence-notice" role="status">${d.message}</p>`)}
        <dl class="case-metrics-grid" aria-label=${`Metrics for ${c.name}`}>
          <dt>Duration</dt><dd>${c.formattedDuration}</dd>
          <dt>Tokens</dt><dd>${c.formattedTokens}</dd>
          <dt>Turns</dt><dd>${c.formattedTurns}</dd>
          <dt>Observed tools</dt><dd>${c.formattedObservedTools}</dd>
          <dt>Observed skills</dt><dd>${c.formattedObservedSkills}</dd>
        </dl>
        <div class="case-graders-section">
          <h4>${`Grader checks (${c.graderOutcomes.length})`}</h4>
          ${c.graderOutcomes.length?a`<ul class="case-grader-list">
            ${c.graderOutcomes.map((d,f)=>$s(d,f,{onSelectEvidence:n,showTrajectory:s,disabled:r}))}
          </ul>`:a`<p class="ck-muted">No check results were reported for this case.</p>`}
        </div>
        ${!c.ambiguousEvidence&&c.trial?.artifact&&n&&a`<div class="case-evidence-links">
          ${s&&a`<button class="ck-btn ck-btn-sm" type="button" disabled=${r} onClick=${()=>n("trajectory",{caseId:c.id,caseName:c.name,...c.stimulus?{stimulus:c.stimulus}:{},attempt:u,configuration:c.trial?.configuration??null,model:c.trial?.model??null,artifact:c.trial.artifact,turn:null})}>View conversation trace</button>`}
          <button class="ck-btn ck-btn-sm" type="button" disabled=${r} onClick=${()=>n("output",{caseId:c.id,caseName:c.name,...c.stimulus?{stimulus:c.stimulus}:{},attempt:u,configuration:c.trial?.configuration??null,model:c.trial?.model??null,artifact:c.trial.artifact,turn:null})}>View Output</button>
        </div>`}
      </div>`})}
  </section>`}function Vn({text:e,run:t,detail:n,cases:r,onSelectEvidence:o,disabled:s=!1}){let[c,i]=x(!1),l=Gt(()=>rn(e),[e]),u=Gt(()=>Array.isArray(r)&&r.length?Qe({cases:r}):Array.isArray(n?.cases)&&n.cases.length?Qe(n):Array.isArray(t?.cases)&&t.cases.length?Qe(t):[],[r,n,t]),d=n?.mode??t?.mode??"engine",f=e.match(/\[Display truncated[^\]\r\n]{0,200}\]/)?.[0],v=h=>{if(typeof h=="string")return h;let g=h.children.map(v);return h.tag==="table"?a`<div class="report-table" tabindex="0" role="region" aria-label="Report table"><table>${g}</table></div>`:a`<${h.tag}>${g}<//>`};return a`<div class="report-view">
    ${(n?.evidenceDiagnostics??t?.evidenceDiagnostics??[]).map(h=>a`<p class="evidence-notice" role="status">${h.message}</p>`)}
    ${f&&a`<p class="evidence-notice" role="status">${f}</p>`}
    <div class="evidence-actions report-display-toggle" role="group" aria-label="Report view">
      <span class="report-display-label" aria-hidden="true">Display</span>
      <button class="ck-btn report-mode-btn" type="button" aria-pressed=${!c} aria-controls="report-content" onClick=${()=>i(!1)}>Preview</button>
      <button class="ck-btn report-mode-btn" type="button" aria-pressed=${c} aria-controls="report-content" onClick=${()=>i(!0)}>Source</button>
    </div>
    ${!c&&d==="engine"&&u.length>0&&Ws({cases:u,mode:d,onSelectEvidence:o,disabled:s})}
    ${c?a`<pre id="report-content" tabindex="0" role="region" aria-label="Saved report text">${e}</pre>`:a`<div id="report-content" class="report-preview" tabindex="0" role="region" aria-label="Saved report preview">
        ${l.nodes.map(v)}
        ${l.truncated&&a`<p class="snapshot-notice" role="status">This preview is shortened. Source shows the text returned by the reader, which may also have a size limit. Saved results are unchanged.</p>`}
      </div>`}
  </div>`}function bs({state:e,invoke:t,onBusy:n}){let[r,o]=x(""),[s,c]=x(!1),[i,l]=x(""),u=R(null),d=R(!1),f=R(0),v=R(null),[h,g]=x(!1),[b,$]=x(!1),[k,m]=x(!1),w=R(null);q(()=>g(!1),[e.projectPath]),q(()=>{d.current=!1,f.current++,l(""),c(!1),n(!1),o(""),$(!1),m(!1)},[e.context.workingDirectory]),q(()=>{f.current++,l(""),c(!1),n(!1),d.current=!1,o(""),$(!1),m(!1)},[e.projectPath]);function y(){if(!s){if(r){m(!0);return}v.current.open=!1,v.current.querySelector("summary").focus()}}q(()=>{let j=P=>{v.current?.open&&!v.current.contains(P.target)&&!b&&!k&&y()};return document.addEventListener("pointerdown",j),()=>document.removeEventListener("pointerdown",j)},[r,s,b,k]);async function A(j){j.preventDefault();let P=++f.current;if(l(""),!Wr(r)){l("Enter an absolute project folder, for example C:\\code\\project."),u.current.focus();return}c(!0),n(!0);try{let T=await t("discover_project",{projectPath:r});if(f.current!==P)return;T.available===!1?(l(T.message||"Couldn't read this folder. See Problems for details, then try again."),u.current.focus()):T.discarded||(d.current=!1,o(""))}catch(T){if(f.current!==P)return;l(T.message),u.current.focus()}finally{f.current===P&&(c(!1),n(!1))}}return a`
    <details ref=${v} class="workspace-picker" onKeyDown=${j=>{j.key==="Escape"&&!b&&!k&&(j.preventDefault(),y())}}>
      <summary title=${e.projectPath||"Choose the folder to inspect"} onClick=${j=>{v.current.open&&(j.preventDefault(),y())}}><${H} name="folder" size=${16} />
        <span class="workspace-name">${Hr(e.projectPath)}</span><span aria-hidden="true">▾</span></summary>
      <div class="workspace-disclosure">
      <div class="workspace-current"><strong>Current folder</strong>
        <button class="ck-btn copy-path" type="button" aria-label="Copy path" title=${h?"Path copied":"Copy path"} disabled=${!e.projectPath} onClick=${async()=>{let j=f.current;try{await en(e.projectPath,t),f.current===j&&(g(!0),l(""))}catch(P){f.current===j&&l(P.message)}}}><${H} name=${h?"check":"copy"} size=${16} /></button></div>
      <span class="sr-only" role="status">${h?"Path copied":""}</span>
      <code class="workspace-path">${e.projectPath||"No folder selected"}</code>
      <div class="workspace-actions">
        ${e.context.mode==="manual"&&e.context.workingDirectory&&a`
          <button class="ck-btn" type="button" disabled=${s||e.readStatus==="reading"} onClick=${async()=>{d.current=!1;let j=++f.current;l(""),o(""),c(!0),n(!0);try{await t("follow_context")}catch(P){f.current===j&&l(P.message)}finally{f.current===j&&(c(!1),n(!1))}}}>Follow workspace</button>`}
      </div>
      <form class="project-picker" onSubmit=${A} aria-label="Select project">
      <label for="project-path">Another folder</label>
      <div class="project-input-row">
        <input ref=${u} id="project-path" class="ck-input" name="projectPath" autocomplete="off" spellcheck="false"
          placeholder="Choose a folder with Browse…" value=${r} readonly
          aria-invalid=${!!i} aria-describedby=${i?"project-error project-help":"project-help"}
          />
        <button ref=${w} class="ck-btn" type="button" disabled=${s} onClick=${()=>$(!0)}>Browse…</button>
        <button class="ck-btn ck-btn-primary" type="submit" disabled=${s||e.readStatus==="reading"||!r}>${s?"Loading\u2026":"Load"}</button>
      </div>
      <p id="project-help" class="ck-muted field-help">${r?"Choose Load to switch folders.":"Choose another folder to load its evals, assets and saved results."}</p>
      </form>
      ${i&&a`<p id="project-error" class="field-error" role="alert">${Ge(i)}</p>`}
      ${b&&a`<${nn} initialFolder=${r||e.projectPath||e.context.workingDirectory} invoke=${t}
        onClose=${()=>{$(!1),dt(w.current)}}
        onChoose=${j=>{d.current=!0,f.current++,l(""),o(j===e.projectPath?"":j),$(!1),dt(w.current)}} />`}
      ${k&&a`<${Nn} onKeep=${()=>{m(!1),dt(w.current)}}
        onDiscard=${()=>{m(!1),d.current=!1,o(""),l(""),v.current.open=!1,v.current.querySelector("summary").focus()}} />`}
      </div>
    </details>
  `}function ys(e,t,n){let r=[];for(let[o,s]of e.entries()){let c=t[s.source],i=t[s.target];if(!c||!i)continue;let l=c.lane===i.lane,u=l&&i.index===c.index+1,d=$=>$.x+$.width/2,f=$=>$.y+$.height/2,v,h,g,b;if(s.kind==="trajectory")if(n){v={x:d(c),y:c.y+c.height},h={x:i.x,y:f(i)};let $=Math.min(c.x,i.x)-18,k=v.y+42;g=`M ${v.x} ${v.y} V ${k} H ${$} V ${h.y} H ${h.x}`,b={x:(v.x+$)/2,y:k,width:Math.max(100,v.x-$-12),text:"Record for the checks"}}else{v={x:c.x+c.width,y:f(c)},h={x:i.x,y:f(i)};let $=(v.x+h.x)/2;g=`M ${v.x} ${v.y} H ${$} V ${h.y} H ${h.x}`,b={x:$,y:(v.y+h.y)/2,width:Math.max(70,h.x-v.x-20),text:`Conversation record
Used by the checks`}}else if(u)v={x:d(c),y:c.y+c.height},h={x:d(i),y:i.y},g=`M ${v.x} ${v.y} V ${(v.y+h.y)/2} H ${h.x} V ${h.y}`,b={x:h.x,y:(v.y+h.y)/2,width:Math.max(100,i.width-24),text:s.label};else if(!n&&l&&s.kind==="grading"){v={x:c.x,y:f(c)},h={x:i.x,y:f(i)};let $=Math.min(v.x,h.x)-18;g=`M ${v.x} ${v.y} H ${$} V ${h.y} H ${h.x}`}else if(!n&&l&&s.kind==="aggregation"){v={x:c.x+c.width,y:f(c)},h={x:i.x+i.width,y:f(i)};let $=Math.max(v.x,h.x)+18;g=`M ${v.x} ${v.y} H ${$} V ${h.y} H ${h.x}`}else continue;r.push({...s,id:`relation-${o}`,start:v,end:h,path:g,label:b})}return r}function ks(e,t,n){let r=new Map(n.map(o=>[o.key,o]));return e.filter(o=>o.kind!=="order"&&(o.source===t||o.target===t)).map(o=>{let s=o.target===t,c=s?o.source:o.target,i=r.get(c)?.title??c,l=o.kind==="grading"&&r.get(o.source)?.kind==="prompt",u=o.kind==="trajectory"?s?"See where the conversation is recorded":"See how the checks use this record":l?s?`Checks ${i}`:`Checked by ${i}`:`${o.label} ${s?"from":"to"} ${i}`;return{target:c,label:u,kind:o.kind,promptScope:l}})}var pt=["Visual","Outline","Source"],ws={defaults:"Settings in this file",executor:"Agent provider",model:"Agent model",runs:"Attempts per task",timeout:"Time limit",reasoning_effort:"Reasoning effort",judge_model:"Model used by checks",judge_reasoning_effort:"Reasoning effort for checks",judge_provider:"Check model provider (not verified)",files:"Files and where they go",skills:"Skills available to the agent",env:"Environment-variable values (hidden)",mcpServers:"Tool servers (not started)",commands:"Setup commands (not run)",commandTimeout:"Setup time limit",config:"Settings as written",type:"Type",name:"Name",scope:"Which agent is checked",turn:"Instruction index (starts at 0)",value:"Value",substring:"Text to look for",pattern:"Text pattern",negate:"Reverse this check",required:"Required",disallowed:"Not allowed",path:"File path",constraints:"Limits",max_tokens:"Token limit",max_turns:"Turn limit",max_duration:"Hard time limit",max_agent_duration:"Agent working-time limit",attachments:"Attachments for the first instruction",threshold:"Minimum score",weights:"Check weights",prompt:"Instructions for the reviewing model",scoring:"How the model scores its review",evidence:"Evidence used by the check",program:"Checking program (not run)",args:"Program arguments",dest_root:"Destination root"};function Vs(e){return e==="agent_environment"||e==="environment"?"Inputs shared by all tasks in this eval":e==="grading_environment"?"Reference files shared by the checks":/^stimuli\[\d+\]\.(?:agent_environment|environment)$/.test(e)?"Inputs for this task":/^stimuli\[\d+\]\.grading_environment$/.test(e)?"Reference files for this task's checks":Object.hasOwn(ws,e)?ws[e]:e}function Bn({value:e,depth:t=0,field:n=""}){if(t>6)return a`<p class="ck-muted">Open Advanced to see the remaining nested settings.</p>`;if(typeof e=="string"&&["args","commands","command","golden_command","script","code"].includes(n)&&(e.length>160||e.includes(`
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
    ${r.length>24&&a`<div><dt>Additional settings</dt><dd>See Advanced for ${r.length-24} more fields.</dd></div>`}</dl>`:a`<p class="ck-muted">No settings listed here.</p>`}var on=e=>`eval-node-${encodeURIComponent(e)}`;function Cs({card:e,sourcePath:t,expanded:n,onSource:r,diagram:o,references:s=[],onReference:c}){let i=e.sources.length&&(e.key.endsWith(".agent")?"Visible to the agent":e.key.endsWith(".grading")?"Hidden from the agent":""),l=a`
    <div class="eval-readable-details">${e.content===void 0?a`<p class="ck-muted">These saved settings are too large to show in full here. Open Advanced or Source.</p>`:a`<${Bn} value=${e.content} field=${e.key.split(".").at(-1)} />`}</div>
    <details class="eval-advanced"><summary>Advanced: saved settings and source</summary>
      <pre tabindex="0" aria-label=${`${e.title} saved settings`}>${e.detail}</pre>
      ${e.sources.length?a`<div class="eval-source-refs">${e.sources.map(u=>a`
        <button class="ck-btn ck-btn-sm" onClick=${()=>r(u)} title=${t}>
          <code>${u}</code>
        </button>`)}</div>`:a`<p class="ck-muted">This explains a relationship; it is not a field in the saved file.</p>`}
    </details>
    ${o&&s.length>0&&a`<div class="eval-node-relations" aria-label="Related details">
      ${s.map(u=>a`<button class="eval-reference"
        aria-controls=${on(u.target)} onClick=${()=>c(u.target)}>${u.label} <span aria-hidden="true">↗</span></button>`)}
    </div>`}`;return a`<article class=${`eval-card eval-card-${e.kind}`} aria-label=${e.title}
    data-node-key=${o?e.key:void 0}>
    <div class="eval-card-head">${o&&a`<span class="eval-node-kind">${{declaration:"Inputs and settings",prompt:"Instruction",trajectory:"Conversation and tool activity",grader:"Check",rule:"Pass rule"}[e.kind]}</span>`}
      ${i?a`<span class="ck-badge eval-visibility">${i}</span>`:null}</div>
    <h4 id=${o?on(e.key):void 0} tabindex=${o?"-1":void 0}>${e.title}</h4>
    <p>${!o&&e.kind==="prompt"?"The instruction sent to the agent:":e.summary}</p>
    ${o&&s.filter(u=>u.kind==="trajectory"||u.promptScope).map(u=>a`<button class="eval-reference" onClick=${()=>c(u.target)}
        aria-controls=${on(u.target)}>${u.label} <span aria-hidden="true">↗</span></button>`)}
    ${o?a`<details open=${n}><summary>Explore details</summary>${l}</details>`:a`<div class="eval-outline-body">${l}</div>`}
  </article>`}function Bs({selected:e,sourcePath:t,expanded:n,onSource:r}){let o=R(null),[s,c]=x({connectors:[],width:0,height:0,stacked:!1}),[i,l]=x(""),u=R(0);Fe(()=>{let v=o.current,h=()=>{let $=v.getBoundingClientRect(),k={},m=[...v.querySelectorAll(".eval-lane")],w=m.length>1&&Math.abs(m[0].offsetLeft-m[1].offsetLeft)<2;m.forEach((A,j)=>{A.querySelectorAll("[data-node-key]").forEach((P,T)=>{let D=P.getBoundingClientRect();k[P.dataset.nodeKey]={x:D.left-$.left-v.clientLeft,y:D.top-$.top-v.clientTop,width:D.width,height:D.height,lane:j,index:T}})});let y={connectors:ys(e.edges??[],k,w),width:v.clientWidth,height:v.clientHeight,stacked:w};c(A=>JSON.stringify(A)===JSON.stringify(y)?A:y)},g=()=>{cancelAnimationFrame(u.current),u.current=requestAnimationFrame(h)},b=new ResizeObserver(g);return b.observe(v),v.querySelectorAll(".eval-card, .eval-lane header").forEach($=>b.observe($)),h(),()=>{b.disconnect(),cancelAnimationFrame(u.current)}},[e]);function d(v){l(v),requestAnimationFrame(()=>{let h=document.getElementById(on(v));h?.focus({preventScroll:!0}),h?.scrollIntoView({block:"center",behavior:"instant"})})}let f=[...e.agent,...e.grading];return a`<div ref=${o} class="eval-diagram" data-layout=${s.stacked?"stacked":"lanes"}>
    <svg class="eval-connectors" aria-hidden="true" width=${s.width} height=${s.height}>
        <defs>${["input","order","trajectory","grading","aggregation","output"].map(v=>a`
          <marker id=${`eval-arrow-${v}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 1 1 L 9 5 L 1 9" class=${`eval-arrow eval-relation-${v}`} />
          </marker>`)}</defs>
        ${s.connectors.map(v=>a`<g class=${`eval-relation-${v.kind}`} data-edge-source=${v.source} data-edge-target=${v.target}>
          <path class="eval-edge" d=${v.path} marker-end=${`url(#eval-arrow-${v.kind})`} />
          <circle class="eval-port" cx=${v.start.x} cy=${v.start.y} r="4" />
          <circle class="eval-port" cx=${v.end.x} cy=${v.end.y} r="4" />
        </g>`)}
    </svg>
    ${s.connectors.filter(v=>v.label).map(v=>a`<span aria-hidden="true"
        class=${`eval-edge-label eval-relation-${v.kind}`} data-edge-label=${v.kind}
        style=${{left:v.label.x,top:v.label.y,width:v.label.width}}>${v.label.text}</span>`)}
    <div class="eval-diagram-lanes">
        ${[["Agent task","What the agent receives and is asked to do",e.agent],["Checks","What is checked and what counts as success",e.grading]].map(([v,h,g],b)=>a`
          <section class="eval-lane" aria-label=${v}>
            <header><span class="eval-lane-mark" aria-hidden="true">${b?"C":"A"}</span><div><h3>${v}</h3><p class="ck-muted">${h}</p></div></header>
            ${g.map($=>a`<div class=${`eval-node ${i===$.key?"is-referenced":""}`} key=${$.key}>
              <${Cs} card=${$} sourcePath=${t} expanded=${n} onSource=${r} diagram=${!0}
                references=${ks(e.edges??[],$.key,f)} onReference=${d} />
            </div>`)}
          </section>`)}
    </div>
  </div>`}function xs({detail:e,stale:t=!1}){let[n,r]=x("Visual"),[o,s]=x(0),[c,i]=x(!1),[l,u]=x(""),d=e.visualization,f=d?.cases[o];function v(g){u(g),r("Source"),requestAnimationFrame(()=>document.getElementById("eval-source-heading")?.focus())}function h(g,b){if(!["ArrowLeft","ArrowRight","Home","End"].includes(g.key))return;g.preventDefault();let $=g.key==="Home"?0:g.key==="End"?pt.length-1:(b+(g.key==="ArrowRight"?1:-1)+pt.length)%pt.length;r(pt[$]),document.getElementById(`eval-tab-${pt[$]}`)?.focus()}return a`<section class="eval-visualizer" aria-label="Read-only eval visualizer">
    <p class="ck-muted">See what the agent receives, what it is asked to do, and how its result is checked. Nothing runs or saves.</p>
    <div class="eval-view-toolbar">
      <div role="tablist" aria-label="Eval views">${pt.map((g,b)=>a`
        <button class="ck-btn" role="tab" id=${`eval-tab-${g}`} aria-selected=${n===g}
          aria-controls=${`eval-panel-${g}`} tabindex=${n===g?0:-1}
          onKeyDown=${$=>h($,b)} onClick=${()=>r(g)}>${g}</button>`)}</div>
      ${n==="Visual"&&f&&!t&&a`<button class="ck-btn ck-btn-sm"
        onClick=${()=>i(g=>!g)}>${c?"Hide details":"Show all details"}</button>`}
    </div>
    ${pt.map(g=>a`<section id=${`eval-panel-${g}`} role="tabpanel"
      aria-labelledby=${`eval-tab-${g}`} hidden=${n!==g} tabindex="0">
      ${n===g&&(g==="Source"?a`
        <h3 id="eval-source-heading" tabindex="-1">Saved source${l?` \xB7 ${l}`:""}</h3>
        <p class="ck-muted"><code>${e.relativePath}</code>. Known secrets and environment-variable values are hidden.
          ${t?"This is an older copy. Reload before relying on it.":"Based on the saved file, not an unsaved draft or a past run."}
          ${e.sourceUnchanged?"The text matches the saved file exactly.":"The displayed text differs from the file; the file itself has not changed."}</p>
        ${d?.sourceStatus==="redacted"&&a`<p class="snapshot-notice">Private values were removed. This is a rebuilt copy of the saved settings, without the original formatting or comments.</p>`}
        ${d?.sourceStatus==="withheld"&&a`<p class="snapshot-notice" role="status">Source is not shown because this file could not be read safely enough to hide private values. Open the saved file in your local editor.</p>`}
        <pre tabindex="0" role="region" aria-label="Saved source text">${e.text}</pre>`:t?a`<p class="snapshot-notice" role="status">View paused: the saved file has not been read again. Use Reload preview to get the current file.</p>`:d?a`
              <p class="ck-muted">Saved settings only, not a run. Shared settings, inherited inputs and placeholders are not filled in here.</p>
              <details class="eval-view-limits"><summary>What this view can and cannot show</summary><p class="ck-muted">This view explains the saved file, not what actually ran. It is not a full file-format check.
                Shared project settings, inherited inputs and placeholders are not filled in here.
                Custom agent and check settings are shown as written; their behavior has not been verified. Referenced files have not been opened or copied.</p></details>
              ${d.diagnostics.length>0&&a`<div class="snapshot-notice" role="status">
                <strong>${d.status==="unavailable"?"This eval cannot be displayed":"Some details need attention"}</strong>
                <ul>${d.diagnostics.map(b=>a`<li>${b}</li>`)}</ul>
              </div>`}
              ${f&&a`
                <div class="eval-case-bar"><label for="eval-case">Task</label>
                  <select class="ck-input" id="eval-case" value=${o} onChange=${b=>{s(Number(b.target.value)),u("")}}>${d.cases.map((b,$)=>a`<option value=${$}>${b.name}</option>`)}</select>
                  <span class="ck-muted" role="status">${f.promptCount} instruction${f.promptCount===1?"":"s"} · ${f.graderCount} check${f.graderCount===1?"":"s"}${f.graderCount?"":" \xB7 Not scored"}</span>
                </div>
                <p class="eval-flow-note"><span class="eval-legend-line" aria-hidden="true"></span> Solid arrows show the order of instructions.
                  <span class="eval-legend-line is-dashed" aria-hidden="true"></span> Dashed arrows show which inputs, records or results are used, not when checks run.
                  Links jump to related details.</p>
                ${g==="Visual"?a`<${Bs} key=${`${o}:${c}`} selected=${f} sourcePath=${d.sourcePath}
                  expanded=${c} onSource=${v} />`:a`<div class="eval-lanes eval-outline" key=${o}>
                  ${[["Agent task","What the agent receives and is asked to do",f.agent],["Checks","What is checked and what counts as success",f.grading]].map(([b,$,k])=>a`<section class="eval-lane" aria-label=${b}>
                      <header><h3>${b}</h3><p class="ck-muted">${$}</p></header>
                      ${k.map(m=>a`
                        ${m.kind==="prompt"&&m.promptIndex>0&&a`<div class="eval-prompt-order">Next instruction</div>`}
                        <${Cs} key=${m.key} card=${m} sourcePath=${d.sourcePath}
                          expanded=${g==="Outline"||c} onSource=${v} />`)}
                    </section>`)}
                </div>`}`}
            `:a`<p role="status">This version cannot show a visual overview of this file. Open Source to inspect it.</p>`)}
    </section>`)}
  </section>`}var qe=e=>new Intl.NumberFormat().format(e),Xe=[...Ue,...Pn];window.addEventListener("message",e=>{if(e.source!==window.parent||e.data?.type!=="copilot-evals-theme"||!["light","dark"].includes(e.data.mode))return;let t=["--background-color-default","--background-color-muted","--text-color-default","--text-color-muted","--text-color-danger","--text-color-success","--text-color-attention","--border-color-default","--border-color-muted","--color-focus-outline"];for(let n of t){let r=e.data.tokens?.[n];typeof r=="string"&&r.length<=128&&CSS.supports("color",r)&&document.documentElement.style.setProperty(n,r)}document.documentElement.dataset.colorMode=e.data.mode,document.documentElement.style.colorScheme=e.data.mode});function Ks({state:e,invoke:t,connected:n}){let[r,o]=x(()=>zr(window.location.search)),[s,c]=x(r.view),[i,l]=x(()=>r.view==="setup"?{section:"project"}:null),[u,d]=x(qr),[f,v]=x(""),[h,g]=x(""),[b,$]=x(!1),[k,m]=x(""),[w,y]=x(!1),[A,j]=x(null),[P,T]=x(""),[,D]=x(0),_=R(null);_.current||(_.current=$n(t,()=>D(p=>p+1))),_.current.setContext(gn(e,s));let pe=R(null),ie=R(null),se=R({}),he=R(0),ue=R(new Map),$e=R(""),be=R(null),E=R(null),J=R(null),G=R(""),Y=R(""),te=R(""),[Z,M]=x(0),[N,W]=x(0);q(()=>{let p=C=>{!pe.current?.dirty&&(!e?.draft.files.length||e.draft.saveOutcome?.complete)||(C.preventDefault(),C.returnValue="")};return window.addEventListener("beforeunload",p),()=>window.removeEventListener("beforeunload",p)},[e?.draft.files.length,e?.draft.saveOutcome?.complete]),se.current={view:s,project:e?.projectPath,workingDirectory:e?.context.workingDirectory},q(()=>{he.current++,v(""),g(""),$(!1),m(""),j(null),pe.current=null,ie.current=null},[e?.projectPath,e?.context.workingDirectory]),q(()=>{if(!e?.projectPath||!e.trusted||r.runId||se.current.view!=="definitions"||e.createDraftId||e.draft.handoff?.id||e.draft.files.length)return;let p=!1,C=se.current.view,F=he.current;return t("inspect_project_setup",{}).then(ee=>{p||se.current.view!==C||he.current!==F||(ee.inspection?.state==="missing"?Q("project"):ee.available===!1&&v(ee.message||"Project configuration inspection is unavailable."))}).catch(ee=>{!p&&se.current.view===C&&he.current===F&&v(ee.message)}),()=>{p=!0}},[e?.projectPath,e?.trusted,e?.context.workingDirectory,e?.context.mode]),q(()=>{!e?.resultsNavigation||e.selectedRunId!==e.resultsNavigation||(U("results"),$(!0))},[e?.resultsNavigation]),q(()=>{let p=e?.comparison,C=p?.mode==="descriptive"?p.id:p?.receipt?.id;!e?.comparisonNavigation||C!==e.comparisonNavigation||U("compare")},[e?.comparisonNavigation]),q(()=>{let p=()=>{let C=document.getElementById(`tab-${s}`),F=C?.parentElement;if(!C||!F)return;let ee=C.offsetLeft,Ae=ee+C.offsetWidth;ee<F.scrollLeft?F.scrollLeft=ee:Ae>F.scrollLeft+F.clientWidth&&(F.scrollLeft=Ae-F.clientWidth)};return p(),window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[s]);function ke(p){typeof p!="string"||!/^[a-zA-Z0-9-]{1,80}$/.test(p)||(_.current.clear(),se.current.view="results",he.current++,o({view:"results",runId:p}),M(C=>C+1),c("results"),v(""),g(""),$(!1))}q(()=>{!k||e?.detail?.id!==k||e.detail.stale||($(!0),m(""))},[k,e?.detail]),q(()=>{let p=G.current;if(G.current="",p&&e?.detail?.id===p&&J.current){J.current.focus();return}b&&(e&&!jn(e,s)?($(!1),m(""),requestAnimationFrame(()=>be.current?.focus())):E.current?.focus())},[b,s,e?.detail?.id]);function U(p){_.current.clear(),se.current.view=p,he.current++,v(""),g(""),$(!1),m(""),c(p)}function Q(p){l({section:p}),U("setup")}q(()=>{(e?.createDraftId||e?.draft.handoff?.id)&&U("author")},[e?.createDraftId,e?.draft.handoff?.id]),q(()=>{let p=C=>{let F=C.data;if(C.source===window.parent&&F?.type==="copilot-evals-open-setup"){Q("project");return}if(C.source===window.parent&&F?.type==="copilot-evals-open-compare"){U("compare");return}C.source!==window.parent||F?.type!=="copilot-evals-open-run"||typeof F.runId!="string"||!/^[a-zA-Z0-9-]{1,80}$/.test(F.runId)||ke(F.runId)};return window.addEventListener("message",p),window.parent.postMessage({type:"copilot-evals-app-ready"},"*"),()=>window.removeEventListener("message",p)},[]);function ne(p,C){if(!["ArrowLeft","ArrowRight","Home","End"].includes(p.key))return;p.preventDefault();let F=Xe.findIndex(Ae=>Ae.id===C),ee=p.key==="Home"?0:p.key==="End"?Xe.length-1:(F+(p.key==="ArrowRight"?1:-1)+Xe.length)%Xe.length;U(Xe[ee].id),document.getElementById(`tab-${Xe[ee].id}`).focus()}function me(p){d(C=>_n(C,s,p))}async function we(p,C={}){let F=++he.current,ee={...se.current},Ae=()=>he.current===F&&ee.view===se.current.view&&ee.project===se.current.project&&ee.workingDirectory===se.current.workingDirectory;v(""),g(p);try{let Le=await t(p,C);return Ae()&&Le.available===!1&&v(Le.message||"Couldn't read project files. See the read details."),Ae()&&!Le.discarded&&Le.available!==!1}catch(Le){return Ae()&&v(Le.message),!1}finally{Ae()&&g("")}}q(()=>{if(!r.runId||!e)return;let p=`${e.projectPath}:${r.runId}:${Z}`;if(Y.current!==p){if(e.history.status!=="ready"||!e.runs.some(C=>C.id===r.runId)){if(te.current===p){e.history.status==="ready"&&v(`Saved run ${r.runId} is unavailable after refreshing history.`);return}te.current=p,we("refresh").then(C=>{C&&W(F=>F+1)});return}Y.current=p,$e.current=r.runId,d(C=>Sn(e,"results",C.results).rows.some(F=>F.id===r.runId)?C:_n(C,"results",{query:r.runId,kind:"all",status:"all"})),we("preview_run",{id:r.runId}).then(C=>{C&&matchMedia("(max-width: 700px)").matches&&$(!0)})}},[e?.projectPath,e?.history.status,e?.runs,r.runId,Z,N]);async function xe(p){_.current.clear(),$e.current=p.id,await we(s==="results"?"preview_run":"preview_asset",{id:p.id})&&p.kind!=="eval"&&matchMedia("(max-width: 700px)").matches&&m(p.id)}function Se(){G.current="",$(!1),requestAnimationFrame(()=>(ue.current.get($e.current)||be.current)?.focus())}function Ne(){G.current=e.detail.id,$(p=>!p)}function Oe(p){if(!["ArrowDown","ArrowUp","Home","End"].includes(p.key))return;p.preventDefault();let C=[...p.currentTarget.parentElement.querySelectorAll(".evidence-row")],F=C.indexOf(p.currentTarget),ee=p.key==="Home"?0:p.key==="End"?C.length-1:Math.min(C.length-1,Math.max(0,F+(p.key==="ArrowDown"?1:-1)));C[ee]?.focus()}let je=Ue.some(p=>p.id===s),X=u[s]??u.definitions,le=e?Sn(e,je?s:"definitions",X):null,He=je&&s!=="diagnostics"&&le&&(s==="results"?e.history:e.discovery).lastSuccess?`${Ue.find(p=>p.id===s).label}: ${qe(le.matching)} matching. ${le.matching?`Page ${qe(le.page)} of ${qe(le.pages)}.`:"No matches."}`:"";if(q(()=>{let p=setTimeout(()=>T(He),200);return()=>clearTimeout(p)},[He]),!e)return a`<main aria-busy="true"><p role="status">Connecting to the workbench…</p></main>`;let B=jn(e,s),ve=s==="results"?e.history:e.discovery,ce=s==="results"?"Saved results":"Project files",oe=!!X.query||X.kind!=="all"||X.status!=="all",de=e.readStatus==="reading"||h==="refresh"||w,ge=s==="results"?e.selectedRunId:e.selectedAssetId,V=B?.type==="run"?e.runs.find(p=>p.id===B.id):null,ae=_.current.snapshot,_e=JSON.stringify([e.projectPath,e.context.workingDirectory,V?.id,ae?.kind??"report"]),Te=Vr(V?.source),Ve=p=>p==="definitions"?e.assets.filter(C=>C.kind==="eval").length:p==="assets"?e.assets.filter(C=>C.kind!=="eval").length:p==="results"?e.runs.length:e.issues.length,et=Xe.some(p=>p.id===s)?s:Xe[0].id,Be=(p,C={})=>{let F=s!=="results"?"":p.counts?.failed>0||p.counts?.errored>0||p.status==="failed"||p.status==="cancelled"?"row-kind-attention":p.counts?.passed>0?"row-kind-success":"",ee=s==="results"?F==="row-kind-attention"?"triangle-alert":F==="row-kind-success"?"circle-check":"chart-column":Yt(p.kind);return a`<button key=${p.id} class=${`evidence-row ${ge===p.id?"selected":""}`}
      data-row-id=${p.id} aria-pressed=${s==="assets"?void 0:ge===p.id}
      aria-selected=${s==="assets"?ge===p.id:void 0} disabled=${!!h&&h!=="refresh"}
      ref=${Ae=>{Ae?ue.current.set(p.id,Ae):ue.current.delete(p.id)}}
      onKeyDown=${Oe} onClick=${()=>xe(p)} ...${C}>
      <span class="row-title"><span class="row-name-wrap"><${H} name=${ee} size=${14} />${p.name}</span><span class=${`row-kind ${F}`.trim()}>${s==="results"?`Saved ${p.status}`:p.kind}</span></span>
      <span class="row-path">${s==="results"?p.id:p.relativePath}</span>
      ${s==="results"&&p.evidenceDiagnostics?.length>0&&a`<span class="row-warning">Some activity details are unavailable. Open this result for details.</span>`}
      ${s==="results"?a`<span class="row-meta"><time datetime=${p.startedAt} title=${p.startedAt}>${We(p.startedAt)}</time>
        <span class=${F}>${p.mode} · ${qe(p.counts.passed)} passed · ${qe(p.counts.failed)} failed · ${qe(p.counts.errored)} errors</span></span>`:p.discoverySummary&&a`<span class="row-warning">${Ge(p.discoverySummary)}</span>`}
    </button>`},tt=`${de?"Looking for evals":Tn(e)}. ${e.discovery.lastSuccess?`${Ve("definitions")} evals, ${Ve("assets")} project files`:"Files not loaded"}. ${e.history.lastSuccess?`${Ve("results")} saved runs`:"Results not loaded"}. ${e.discovery.stale||e.history.stale?"Showing earlier files.":""} ${h.startsWith("preview")?"Loading selected item.":B?`Selected ${B.title.slice(0,160)}. ${B.stale?"Showing earlier preview.":"Preview ready."}`:""}`;return a`
    <a class="skip-link" href="#workbench-panel">Skip to workspace</a>
    <main class="app-shell">
      <header class="workbench-header">
        <div class="header-left">
          <div class="header-title"><span class="evals-logo" aria-hidden="true"></span><h1>GitHub Copilot Evals</h1></div>
          <span class="header-divider" aria-hidden="true"></span>
          <div class="workspace-identity"><${bs} state=${e} invoke=${t} onBusy=${y} />
            <span class="context-origin">${e.context.mode==="session"?"Following workspace":e.context.mode==="manual"?"Manual override":"No workspace folder"}</span>
            <button class=${`ck-btn ck-btn-icon ${de?"is-spinning":""}`.trim()} type="button"
              aria-label=${de?"Looking\u2026":"Refresh"} title=${de?"Looking\u2026":e.lastRefresh?`Refresh (Checked ${We(e.lastRefresh)})`:"Refresh"}
              disabled=${de||!e.projectPath} onClick=${()=>we("refresh")}><${H} name="refresh-cw" size=${15} /></button>
          </div>
        </div>
        <${ms} key=${`${e.projectPath}:${e.context.workingDirectory}`} state=${e} invoke=${t}
          activeView=${s}
          onAuthor=${()=>U("author")} onSetup=${()=>Q("project")}
          onActivity=${()=>U("activity")} />
      </header>
      <p class="sr-only" role="status" aria-live="polite" aria-atomic="true">${tt}</p>
      <p class="sr-only" role="status" aria-live="polite" aria-atomic="true">${P}</p>
      <nav class="view-navigation" aria-label="Workspace views">
        <div class="ck-tabs" role="tablist" aria-label="Workspace views">
          ${Xe.map(p=>a`<button key=${p.id} class=${`ck-tab ${p.id==="author"?"ck-tab-studio-start":""}`.trim()} id=${`tab-${p.id}`} role="tab"
            aria-selected=${s===p.id} aria-controls=${`panel-${p.id}`} tabindex=${et===p.id?0:-1}
            onKeyDown=${C=>ne(C,p.id)} onClick=${()=>U(p.id)}>
            <${H} name=${p.icon} size=${15} />${p.label}${Ue.some(C=>C.id===p.id)&&a`<span class="nav-count">${p.id==="diagnostics"||(p.id==="results"?e.history:e.discovery).lastSuccess?qe(Ve(p.id)):"?"}</span>`}
          </button>`)}
        </div>
        <div class="discovery-bar">
          <span class=${`status-dot status-${e.readStatus}`.trim()} aria-hidden="true"></span>
          <span class="discovery-status" role="status" title=${e.lastRefresh?`Checked ${We(e.lastRefresh)}`:void 0}>${de?"Looking for evals and saved results\u2026":Tn(e)}</span>
          ${["partial","unavailable"].includes(e.readStatus)&&a`<button class="ck-btn ck-btn-sm" onClick=${()=>U("diagnostics")}>View problems</button>`}
          ${!n&&a`<span class="connection" role="status">Reconnecting…</span>`}
          ${e.lastRefresh&&a`<time class="sr-only" datetime=${e.lastRefresh}>Checked ${We(e.lastRefresh)}</time>`}
        </div>
      </nav>
      ${je?a`<div id="workbench-panel" tabindex="-1" class=${`workbench ${b&&B?"show-detail":""} ${B?.kind==="eval"?"eval-selected":""} ${b&&B?.kind==="eval"?"eval-focused":""} ${s==="diagnostics"?"diagnostics-view":""}`}>
        <div class="list-area">
          ${Ue.map(p=>a`<section key=${p.id} id=${`panel-${p.id}`} role="tabpanel"
            aria-labelledby=${`tab-${p.id}`} hidden=${s!==p.id} tabindex="0"
            ref=${C=>{s===p.id&&(be.current=C)}}
            aria-busy=${de||!!h}>
            ${s===p.id&&(s==="diagnostics"?a`
              <div class="section-heading"><h2>Problems reading this folder</h2><span class="ck-muted">No evals were run</span></div>
              ${["discovery","history"].map(C=>a`<section class="channel-diagnostic" key=${C}>
                <h3>${C==="discovery"?"Evals and project files":"Saved results"}</h3>
                <p>${e[C].status==="ready"?"Loaded":e[C].status==="error"?"Couldn't load":e[C].status==="reading"?"Loading\u2026":"Not loaded"}${e[C].stale?" \xB7 showing earlier files":""}</p>
                ${e[C].lastSuccess&&a`<p class="ck-muted">Last successful read ${We(e[C].lastSuccess)}</p>`}
                ${e[C].error&&a`<p class="field-error">${Ge(e[C].error)}</p>
                  <button class="ck-btn" disabled=${de} onClick=${()=>we("refresh")}>Try again</button>
                  ${C==="history"&&a`<${Wn} state=${e} invoke=${t} source="history" />`}`}
              </section>`)}
              ${e.issues.map((C,F)=>a`<div class="diagnostic" key=${F}><strong>File needs attention</strong><p>${Ge(C.message)}</p><code>${C.uri}</code>
                <${Wn} state=${e} invoke=${t} source="discovery" uri=${C.uri} /></div>`)}
              ${!e.issues.length&&a`<p class="ck-muted">${e.discovery.status==="ready"?"No file-reading problems found. Run an eval to check AI behavior.":"File-reading details are not available yet."}</p>`}
            `:a`
              <div class="section-heading"><h2>${Ue.find(C=>C.id===s).label}</h2>
                <span class="ck-muted matching-count">${ve.lastSuccess?`${qe(le.matching)} matching \xB7 ${qe(le.total)} total`:"Not loaded"}</span></div>
              ${s==="definitions"&&e.projectConfigurations?.length>0&&a`<section class="channel-diagnostic" aria-label="Project configuration">
                <details>
                  <summary>Project configuration (${qe(e.projectConfigurations.length)} ${e.projectConfigurations.length===1?"file":"files"})</summary>
                  <div class="project-configuration-list" role="region" aria-label="Configuration files" tabindex="0">
                    <p class="ck-muted">Configuration files are not evals and cannot be run.</p>
                    ${e.projectConfigurations.map(C=>a`<div key=${C.uri}>
                      ${C.relativePath===".vally.yaml"?a`<button class="ck-btn" type="button" onClick=${()=>Q("project")}><${H} name="settings" size=${15} />.vally.yaml: Project configuration</button>`:a`<p><code>${C.relativePath}</code>: Nested configuration; select its folder as the project to configure it.</p>`}
                    </div>`)}
                  </div>
                </details>
              </section>`}
              ${ve.error&&a`<div class="channel-error" role="alert">
                <strong>${ve.status==="ready"?`${ce} are partial`:`${ce} couldn't load`}${ve.stale?`. Showing earlier ${s==="results"?"results":"files"}`:""}</strong>
                <p>${Ge(ve.error)}</p><button class="ck-btn" disabled=${de} onClick=${()=>we("refresh")}>Try again</button>
              </div>`}
              ${(de||ve.stale)&&a`<p class="snapshot-notice">${de?"Looking for evals and saved results\u2026":"Showing files from the last successful refresh."}${le.total?" You can still browse them.":""}</p>`}
              <div class="filters">
                <input class="ck-input search" aria-label=${`Search ${Ue.find(C=>C.id===s).label.toLowerCase()}`} name=${`${s}-query`} autocomplete="off" spellcheck="false"
                  placeholder=${s==="results"?"Search names or run IDs":"Search names or paths"} value=${X.query}
                  onInput=${C=>me({query:C.target.value})} />
                ${s==="assets"&&a`<select class="ck-input" aria-label="File type" value=${X.kind}
                  onChange=${C=>me({kind:C.target.value})}>
                  ${["all","skill","agent","instruction","prompt","mcp-server","tool"].map(C=>a`<option value=${C}>${C==="all"?"All kinds":C}</option>`)}
                </select>`}
                ${s==="results"&&a`<select class="ck-input" aria-label="Saved status" value=${X.status}
                  onChange=${C=>me({status:C.target.value})}>
                  ${["all",...new Set(e.runs.map(C=>C.status))].map(C=>a`<option value=${C}>${C==="all"?"All statuses":C}</option>`)}
                </select>`}
                <select class="ck-input" aria-label=${`Sort ${Ue.find(C=>C.id===s).label.toLowerCase()}`} value=${X.sort} onChange=${C=>me({sort:C.target.value})}>
                  ${(s==="results"?[["newest","Newest first"],["name","Name"],["status","Saved status"]]:[["name","Name"],["path","Path"]]).map(([C,F])=>a`<option value=${C}>${F}</option>`)}
                </select>
                <button class="ck-btn clear-filter" disabled=${!oe} onClick=${()=>me({query:"",kind:"all",status:"all"})}>Clear</button>
              </div>
              ${f&&a`<p class="field-error" role="alert">${f}</p>`}
              <div class="items-list" role="group" aria-label=${`${Ue.find(C=>C.id===s).label} inventory`}>
                ${s==="assets"&&le.rows.length?a`<${Xr} key=${e.projectPath} groups=${e.assetGroups??[]} rows=${le.rows} query=${X.query} renderRow=${Be} />`:le.rows.map(C=>Be(C))}
              </div>
              ${!le.rows.length&&a`<div class="empty-state"><${H} name="inbox" size=${24} />
                <h3>${de?"Looking in this folder\u2026":e.readStatus==="idle"?"Choose a folder to get started":ve.status==="error"?`${ce} couldn't load`:oe?"No matches":`No ${Ue.find(C=>C.id===s).label.toLowerCase()} found`}</h3>
                <p>${de?"Your files will appear here when loading finishes.":e.readStatus==="idle"?"Open the folder picker above, browse to a folder and choose Load.":oe?"Try another search or clear the filters.":s==="definitions"?"Create an eval to describe the response you expect from AI.":s==="results"?"Run an eval to see its results here.":"No supported files were found in this project. Personal or installed skills may still exist elsewhere."}</p>
                ${!oe&&!de&&ve.status==="ready"&&s==="assets"&&a`<${bt} projectPath=${e.projectPath} invoke=${t} />`}
                ${!oe&&!de&&ve.status==="ready"&&s==="definitions"&&a`<button class="ck-btn ck-btn-primary" onClick=${()=>U("author")}>Create eval</button>`}
                ${oe&&a`<button class="ck-btn" onClick=${()=>me({query:"",kind:"all",status:"all"})}>Clear filters</button>`}
              </div>`}
              <div class="pagination" role="group" aria-label="Inventory pagination">
                <span class="ck-muted">${qe(le.first)}–${qe(le.last)} of ${qe(le.matching)}</span>
                <button class="ck-btn" disabled=${le.page===1} onClick=${()=>me({page:le.page-1})}>Previous</button>
                <span>Page ${qe(le.page)} of ${qe(le.pages)}</span>
                <button class="ck-btn" disabled=${le.page===le.pages} onClick=${()=>me({page:le.page+1})}>Next</button>
              </div>
            `)}
          </section>`)}
        </div>
        ${s!=="diagnostics"&&a`<aside class="inspector" id=${B?.kind==="eval"?"eval-details":void 0}
          aria-label="Details" aria-busy=${h.startsWith("preview")||ae?.status==="loading"}>
          <div class=${`inspector-heading ${B?.kind==="eval"?"eval-detail-heading":""}`}>
            ${B?.kind==="eval"?a`<div class="eval-header-controls">
              <button class="ck-btn" type="button" onClick=${Se} title="Back to the eval list"><${H} name="arrow-left" />Back</button>
              <button ref=${J} class="ck-btn eval-size-toggle" type="button"
                onClick=${Ne} aria-expanded=${b} aria-controls="eval-details"
                title=${b?"Return to the normal view":"Expand eval details"}>
                <${H} name=${b?"minimize-2":"maximize-2"} />${b?"Contract":"Expand"}
              </button>
            </div>`:a`<button class="ck-btn mobile-back" onClick=${Se}>Back to list</button>`}
            <h2 ref=${E} tabindex="-1">${B?B.title:"Details"}</h2>
          </div>
          ${B&&(e.previewError||b&&f)&&a`<p class="field-error" role="alert">${Ge(e.previewError||f)}</p>`}
          ${B?a`
            <div class="inspector-meta"><span class="ck-badge">${B.type==="run"?"Saved report":B.kind==="eval"?"Saved eval":"Source preview"}</span>
              <code>${B.relativePath??B.id}</code></div>
            ${B.type==="asset"&&a`<${vs} key=${`${e.projectPath}:${B.id}`} state=${e} invoke=${t}
              onAuthor=${()=>U("author")} onActivity=${()=>U("activity")} onBaseline=${p=>{j(p),U("behavior")}} />`}
            <p class="ck-muted evidence-notice">${B.type==="run"?"Saved results may not reflect your current files.":"Preview may be shortened. Recognized secrets are hidden."}</p>
            ${(B.stale||de)&&a`<div class="snapshot-notice" role="status">Previous preview from ${We(B.inspectedAt)}. It has not been reread.
              <button class="ck-btn" disabled=${!!h||de} onClick=${()=>we(B.type==="run"?"preview_run":"preview_asset",{id:B.id})}>Reload preview</button></div>`}
            ${B.sourceHash&&a`<details class="metadata"><summary>File details</summary><dl><dt>SHA-256</dt><dd><code>${B.sourceHash}</code></dd><dt>Preview read</dt><dd>${We(B.inspectedAt)}</dd></dl></details>`}
            ${V&&a`<details class="metadata"><summary>Run details</summary>
              <dl><dt>Original run ID</dt><dd><code>${V.id}</code></dd><dt>Started</dt><dd><time datetime=${V.startedAt} title=${V.startedAt}>${We(V.startedAt)}</time></dd>
                ${V.endedAt&&a`<dt>Ended</dt><dd><time datetime=${V.endedAt} title=${V.endedAt}>${We(V.endedAt)}</time></dd>`}
                <dt>Recorded mode</dt><dd>${V.mode}</dd>
                <dt>Workspace</dt><dd><code>${V.workspaceUri||"Not recorded"}</code></dd>
                <dt>Evaluation source</dt><dd><code>${Te.text}</code>${Te.truncated&&a`<p>Some saved details are too long to show here. The original saved results are unchanged.</p>`}</dd>
                <dt>Native telemetry</dt><dd>${V.nativeTelemetryReported?"Reported; check the saved evidence":"Not reported"}</dd></dl>
              <p class="ck-muted">These details are shown as saved. Check for private information before sharing.</p>
            </details>`}
            ${V&&a`<div class="evidence-actions evidence-content-tabs" role="group" aria-label="Saved evidence"><span class="evidence-group-label" aria-hidden="true">Content</span>${vn(V).map(({kind:p,label:C})=>a`
              <button class="ck-btn" type="button" disabled=${!!h||de}
                aria-pressed=${(ae?.kind??"report")===p} aria-controls="results-evidence"
                onClick=${()=>_.current.read(p)}>${C}</button>`)}</div>`}
            ${h.startsWith("preview")?a`<p role="status">Loading selected item…</p>`:V&&ae?a`
              <section id="results-evidence" aria-label=${`${lt.find(p=>p.kind===ae.kind).label} evidence`}>
                <p class="ck-muted evidence-notice">${lt.find(p=>p.kind===ae.kind).label} · <code>${ae.id}</code>.
                  Read-only, size-limited text. Original saved evidence is unchanged.</p>
                ${ae.focus&&a`<p class="ck-muted evidence-focus-notice" role="status">Focused attempt: <code>${ae.focus.caseId}</code> (attempt ${ae.focus.attempt+1}${ae.focus.configuration?`, ${ae.focus.configuration}`:""}${ae.focus.turn!==null?`, turn ${ae.focus.turn}`:""}${ae.focus.graderId?`, check ${ae.focus.graderId}`:""})</p>`}
                ${(ae.stale||e.history.stale||de)&&a`<p class="snapshot-notice" role="status">This is an earlier copy. Select the evidence again to reload it.</p>`}
                ${ae.status==="loading"?a`<p role="status">Loading ${lt.find(p=>p.kind===ae.kind).label.toLowerCase()}…</p>`:ae.status==="error"?a`<p class="field-error" role="alert">${Ge(ae.error)}</p>`:a`${ae.kind==="report"&&!ae.focus?a`<${Vn} key=${_e} text=${ae.text} run=${V} detail=${B}
                      onSelectEvidence=${(p,C)=>_.current.read(p,C)} disabled=${!!h||de} />`:a`<pre tabindex="0" role="region" aria-label=${`Saved ${ae.kind} text`}>${ae.text}</pre>`}
                    ${!ae.text&&a`<p role="status">No saved ${ae.kind} text was returned for this run.</p>`}`}
              </section>`:V?a`<section id="results-evidence" aria-label="Report evidence"><${Vn} key=${_e} text=${B.text} run=${V} detail=${B}
                  onSelectEvidence=${(p,C)=>_.current.read(p,C)} disabled=${!!h||de} /></section>`:B.kind==="eval"?a`<${xs} key=${`${e.projectPath}:${B.id}:${B.sourceHash}`}
                    detail=${B} stale=${B.stale||de} />`:a`<pre tabindex="0" role="region" aria-label=${B.type==="run"?"Original saved report text":"Redacted source text"}>${B.text}</pre>`}
          `:a`<div class="inspector-empty"><${H} name="layout-list" size=${24} /><p>Choose an item to see its file contents or saved results.</p><p class="intro-help">An eval checks whether an AI response meets your expectations. Choose an eval on the left or create one with Copilot.</p></div>`}
        </aside>`}
      </div>`:a`<div id="workbench-panel" tabindex="-1" class="studio-surface"><section id=${`panel-${s}`} role="tabpanel" aria-labelledby=${s==="behavior"?"behavior-heading":`tab-${s}`}>
        ${s==="author"&&a`<${gs} key=${e.projectPath} state=${e} invoke=${t} draftCache=${pe} onActivity=${()=>U("definitions")} />`}
        ${s==="activity"&&a`<${qn} key=${e.projectPath} state=${e} invoke=${t} onDefinitions=${()=>U("definitions")} onOpenRun=${ke} />`}
        ${s==="compare"&&a`<${an} key=${e.projectPath} state=${e} invoke=${t} compareCache=${ie} onOpenRun=${ke} />`}
        ${s==="setup"&&a`<${zn} key=${`${e.projectPath}:${e.context.workingDirectory}:${e.context.mode}`}
          state=${e} invoke=${t} target=${i} />`}
        ${s==="behavior"&&A&&a`<${Hn} key=${`${e.projectPath}:${A.id}`} state=${e} asset=${A} invoke=${t}
          onClose=${()=>U("assets")} onPrepared=${()=>U("activity")} />`}
      </section></div>`}
      ${Xe.filter(p=>je?!Ue.some(C=>C.id===p.id):p.id!==s).map(p=>a`
        <section key=${`inactive-${p.id}`} id=${`panel-${p.id}`} role="tabpanel" aria-labelledby=${`tab-${p.id}`} hidden></section>`)}
    </main>
  `}wr({view:e=>a`<${Ks} ...${e} />`});
