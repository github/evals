var Qt,oe,fr,Rt,hr,er,Ns,Gt={},mr=[],Os=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function yt(e,t){for(var n in t)e[n]=t[n];return e}function vr(e){var t=e.parentNode;t&&t.removeChild(e)}function gr(e,t,n){var r,i,a,o={};for(a in t)a=="key"?r=t[a]:a=="ref"?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?Qt.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return Bt(e,o,r,i,null)}function Bt(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++fr};return oe.vnode!=null&&oe.vnode(a),a}function Xt(e){return e.children}function Kt(e,t){this.props=e,this.context=t}function xt(e,t){if(t==null)return e.__?xt(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?xt(e):null}function $r(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return $r(e)}}function tr(e){(!e.__d&&(e.__d=!0)&&Rt.push(e)&&!Yt.__r++||er!==oe.debounceRendering)&&((er=oe.debounceRendering)||hr)(Yt)}function Yt(){for(var e;Yt.__r=Rt.length;)e=Rt.sort(function(t,n){return t.__v.__b-n.__v.__b}),Rt=[],e.some(function(t){var n,r,i,a,o,c;t.__d&&(o=(a=(n=t).__v).__e,(c=n.__P)&&(r=[],(i=yt({},a)).__v=a.__v+1,wn(c,a,i,n.__n,c.ownerSVGElement!==void 0,a.__h!=null?[o]:null,r,o??xt(a),a.__h),wr(r,a),a.__e!=o&&$r(a)))})}function br(e,t,n,r,i,a,o,c,l,d){var u,m,p,h,v,k,$,g=r&&r.__k||mr,f=g.length;for(n.__k=[],u=0;u<t.length;u++)if((h=n.__k[u]=(h=t[u])==null||typeof h=="boolean"?null:typeof h=="string"||typeof h=="number"||typeof h=="bigint"?Bt(null,h,null,null,h):Array.isArray(h)?Bt(Xt,{children:h},null,null,null):h.__b>0?Bt(h.type,h.props,h.key,null,h.__v):h)!=null){if(h.__=n,h.__b=n.__b+1,(p=g[u])===null||p&&h.key==p.key&&h.type===p.type)g[u]=void 0;else for(m=0;m<f;m++){if((p=g[m])&&h.key==p.key&&h.type===p.type){g[m]=void 0;break}p=null}wn(e,h,p=p||Gt,i,a,o,c,l,d),v=h.__e,(m=h.ref)&&p.ref!=m&&($||($=[]),p.ref&&$.push(p.ref,null,h),$.push(m,h.__c||v,h)),v!=null?(k==null&&(k=v),typeof h.type=="function"&&h.__k!=null&&h.__k===p.__k?h.__d=l=yr(h,l,e):l=kr(e,h,p,g,v,l),d||n.type!=="option"?typeof n.type=="function"&&(n.__d=l):e.value=""):l&&p.__e==l&&l.parentNode!=e&&(l=xt(p))}for(n.__e=k,u=f;u--;)g[u]!=null&&(typeof n.type=="function"&&g[u].__e!=null&&g[u].__e==n.__d&&(n.__d=xt(r,u+1)),xr(g[u],g[u]));if($)for(u=0;u<$.length;u++)Cr($[u],$[++u],$[++u])}function yr(e,t,n){var r,i;for(r=0;r<e.__k.length;r++)(i=e.__k[r])&&(i.__=e,t=typeof i.type=="function"?yr(i,t,n):kr(n,i,i,e.__k,i.__e,t));return t}function kr(e,t,n,r,i,a){var o,c,l;if(t.__d!==void 0)o=t.__d,t.__d=void 0;else if(n==null||i!=a||i.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(i),o=null;else{for(c=a,l=0;(c=c.nextSibling)&&l<r.length;l+=2)if(c==i)break e;e.insertBefore(i,a),o=a}return o!==void 0?o:i.nextSibling}function nr(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Os.test(t)?n:n+"px"}function Vt(e,t,n,r,i){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||nr(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||nr(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r||e.addEventListener(t,a?sr:rr,a):e.removeEventListener(t,a?sr:rr,a);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function rr(e){this.l[e.type+!1](oe.event?oe.event(e):e)}function sr(e){this.l[e.type+!0](oe.event?oe.event(e):e)}function wn(e,t,n,r,i,a,o,c,l){var d,u,m,p,h,v,k,$,g,f,w,b=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,c=t.__e=n.__e,t.__h=null,a=[c]),(d=oe.__b)&&d(t);try{e:if(typeof b=="function"){if($=t.props,g=(d=b.contextType)&&r[d.__c],f=d?g?g.props.value:d.__:r,n.__c?k=(u=t.__c=n.__c).__=u.__E:("prototype"in b&&b.prototype.render?t.__c=u=new b($,f):(t.__c=u=new Kt($,f),u.constructor=b,u.render=Ls),g&&g.sub(u),u.props=$,u.state||(u.state={}),u.context=f,u.__n=r,m=u.__d=!0,u.__h=[]),u.__s==null&&(u.__s=u.state),b.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=yt({},u.__s)),yt(u.__s,b.getDerivedStateFromProps($,u.__s))),p=u.props,h=u.state,m)b.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(b.getDerivedStateFromProps==null&&$!==p&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps($,f),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate($,u.__s,f)===!1||t.__v===n.__v){u.props=$,u.state=u.__s,t.__v!==n.__v&&(u.__d=!1),u.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(T){T&&(T.__=t)}),u.__h.length&&o.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate($,u.__s,f),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(p,h,v)})}u.context=f,u.props=$,u.state=u.__s,(d=oe.__r)&&d(t),u.__d=!1,u.__v=t,u.__P=e,d=u.render(u.props,u.state,u.context),u.state=u.__s,u.getChildContext!=null&&(r=yt(yt({},r),u.getChildContext())),m||u.getSnapshotBeforeUpdate==null||(v=u.getSnapshotBeforeUpdate(p,h)),w=d!=null&&d.type===Xt&&d.key==null?d.props.children:d,br(e,Array.isArray(w)?w:[w],t,n,r,i,a,o,c,l),u.base=t.__e,t.__h=null,u.__h.length&&o.push(u),k&&(u.__E=u.__=null),u.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Ds(n.__e,t,n,r,i,a,o,l);(d=oe.diffed)&&d(t)}catch(T){t.__v=null,(l||a!=null)&&(t.__e=c,t.__h=!!l,a[a.indexOf(c)]=null),oe.__e(T,t,n)}}function wr(e,t){oe.__c&&oe.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){oe.__e(r,n.__v)}})}function Ds(e,t,n,r,i,a,o,c){var l,d,u,m=n.props,p=t.props,h=t.type,v=0;if(h==="svg"&&(i=!0),a!=null){for(;v<a.length;v++)if((l=a[v])&&(l===e||(h?l.localName==h:l.nodeType==3))){e=l,a[v]=null;break}}if(e==null){if(h===null)return document.createTextNode(p);e=i?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,p.is&&p),a=null,c=!1}if(h===null)m===p||c&&e.data===p||(e.data=p);else{if(a=a&&Qt.call(e.childNodes),d=(m=n.props||Gt).dangerouslySetInnerHTML,u=p.dangerouslySetInnerHTML,!c){if(a!=null)for(m={},v=0;v<e.attributes.length;v++)m[e.attributes[v].name]=e.attributes[v].value;(u||d)&&(u&&(d&&u.__html==d.__html||u.__html===e.innerHTML)||(e.innerHTML=u&&u.__html||""))}if((function(k,$,g,f,w){var b;for(b in g)b==="children"||b==="key"||b in $||Vt(k,b,null,g[b],f);for(b in $)w&&typeof $[b]!="function"||b==="children"||b==="key"||b==="value"||b==="checked"||g[b]===$[b]||Vt(k,b,$[b],g[b],f)})(e,p,m,i,c),u)t.__k=[];else if(v=t.props.children,br(e,Array.isArray(v)?v:[v],t,n,r,i&&h!=="foreignObject",a,o,a?a[0]:n.__k&&xt(n,0),c),a!=null)for(v=a.length;v--;)a[v]!=null&&vr(a[v]);c||("value"in p&&(v=p.value)!==void 0&&(v!==e.value||h==="progress"&&!v)&&Vt(e,"value",v,m.value,!1),"checked"in p&&(v=p.checked)!==void 0&&v!==e.checked&&Vt(e,"checked",v,m.checked,!1))}return e}function Cr(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){oe.__e(r,n)}}function xr(e,t,n){var r,i;if(oe.unmount&&oe.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Cr(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){oe.__e(a,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&xr(r[i],t,typeof e.type!="function");n||e.__e==null||vr(e.__e),e.__e=e.__d=void 0}function Ls(e,t,n){return this.constructor(e,n)}function Cn(e,t,n){var r,i,a;oe.__&&oe.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,a=[],wn(t,e=(!r&&n||t).__k=gr(Xt,null,[e]),i||Gt,Gt,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?Qt.call(t.childNodes):null,a,!r&&n?n:i?i.__e:t.firstChild,r),wr(a,e)}Qt=mr.slice,oe={__e:function(e,t){for(var n,r,i;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(e)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),i=n.__d),i)return n.__E=n}catch(a){e=a}throw e}},fr=0,Kt.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=yt({},this.state),typeof e=="function"&&(e=e(yt({},n),this.props)),e&&yt(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),tr(this))},Kt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),tr(this))},Kt.prototype.render=Xt,Rt=[],hr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Yt.__r=0,Ns=0;var Et,at,ar,Zt=0,yn=[],or=oe.__b,ir=oe.__r,lr=oe.diffed,cr=oe.__c,dr=oe.unmount;function en(e,t){oe.__h&&oe.__h(at,e,Zt||t),Zt=0;var n=at.__H||(at.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function C(e){return Zt=1,Ms(_r,e)}function Ms(e,t,n){var r=en(Et++,2);return r.t=e,r.__c||(r.__=[n?n(t):_r(void 0,t),function(i){var a=r.t(r.__[0],i);r.__[0]!==a&&(r.__=[a,r.__[1]],r.__c.setState({}))}],r.__c=at),r.__}function H(e,t){var n=en(Et++,3);!oe.__s&&xn(n.__H,t)&&(n.__=e,n.__H=t,at.__H.__h.push(n))}function We(e,t){var n=en(Et++,4);!oe.__s&&xn(n.__H,t)&&(n.__=e,n.__H=t,at.__h.push(n))}function I(e){return Zt=5,tn(function(){return{current:e}},[])}function tn(e,t){var n=en(Et++,7);return xn(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Fs(){yn.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(Jt),e.__H.__h.forEach(kn),e.__H.__h=[]}catch(t){e.__H.__h=[],oe.__e(t,e.__v)}}),yn=[]}oe.__b=function(e){at=null,or&&or(e)},oe.__r=function(e){ir&&ir(e),Et=0;var t=(at=e.__c).__H;t&&(t.__h.forEach(Jt),t.__h.forEach(kn),t.__h=[])},oe.diffed=function(e){lr&&lr(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(yn.push(t)!==1&&ar===oe.requestAnimationFrame||((ar=oe.requestAnimationFrame)||function(n){var r,i=function(){clearTimeout(a),ur&&cancelAnimationFrame(r),setTimeout(n)},a=setTimeout(i,100);ur&&(r=requestAnimationFrame(i))})(Fs)),at=void 0},oe.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Jt),n.__h=n.__h.filter(function(r){return!r.__||kn(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],oe.__e(r,n.__v)}}),cr&&cr(e,t)},oe.unmount=function(e){dr&&dr(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(Jt)}catch(n){oe.__e(n,t.__v)}};var ur=typeof requestAnimationFrame=="function";function Jt(e){var t=at;typeof e.__c=="function"&&e.__c(),at=t}function kn(e){var t=at;e.__c=e.__(),at=t}function xn(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function _r(e,t){return typeof t=="function"?t(e):t}var Sr=function(e,t,n,r){var i;t[0]=0;for(var a=1;a<t.length;a++){var o=t[a++],c=t[a]?(t[0]|=o?1:2,n[t[a++]]):t[++a];o===3?r[0]=c:o===4?r[1]=Object.assign(r[1]||{},c):o===5?(r[1]=r[1]||{})[t[++a]]=c:o===6?r[1][t[++a]]+=c+"":o?(i=e.apply(c,Sr(e,c,n,["",null])),r.push(i),c[0]?t[0]|=2:(t[a-2]=0,t[a]=i)):r.push(c)}return r},pr=new Map,s=function(e){var t=pr.get(this);return t||(t=new Map,pr.set(this,t)),(t=Sr(this,t.get(e)||(t.set(e,t=(function(n){for(var r,i,a=1,o="",c="",l=[0],d=function(p){a===1&&(p||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,p,o):a===3&&(p||o)?(l.push(3,p,o),a=2):a===2&&o==="..."&&p?l.push(4,p,0):a===2&&o&&!p?l.push(5,0,!0,o):a>=5&&((o||!p&&a===5)&&(l.push(a,0,o,i),a=6),p&&(l.push(a,p,0,i),a=6)),o=""},u=0;u<n.length;u++){u&&(a===1&&d(),d(u));for(var m=0;m<n[u].length;m++)r=n[u][m],a===1?r==="<"?(d(),l=[l],a=3):o+=r:a===4?o==="--"&&r===">"?(a=1,o=""):o=r+o[0]:c?r===c?c="":o+=r:r==='"'||r==="'"?c=r:r===">"?(d(),a=1):a&&(r==="="?(a=5,i=o,o=""):r==="/"&&(a<5||n[u][m+1]===">")?(d(),a===3&&(l=l[0]),a=l,(l=l[0]).push(2,0,a),a=0):r===" "||r==="	"||r===`
`||r==="\r"?(d(),a=2):o+=r),a===3&&o==="!--"&&(a=4,l=l[0])}return d(),l})(e)),t),arguments,[])).length>1?t:t[0]}.bind(gr);function jr(e,t,{whenVisible:n=!0,immediate:r=!1}={}){if(!t||t<=0)return()=>{};let i=!1,a=async()=>{if(!i&&!(n&&typeof document<"u"&&document.visibilityState!=="visible")){i=!0;try{await e()}catch{}finally{i=!1}}};r&&a();let o=setInterval(a,t*1e3);return()=>clearInterval(o)}var vt=class extends Error{constructor(t,n){super(n),this.name="CanvasActionError",this.code=t}};function Pr(e,t){return!!(e&&t&&typeof e.requestId=="string"&&e.requestId&&e.requestId===t.requestId&&e.readStatus!=="reading"&&t.readStatus==="reading")}function qs({onState:e,onConnected:t,EventSourceImpl:n,fetchImpl:r=(...i)=>fetch(...i)}={}){let i=null,a=!1,o=!1,c=0,l=0,d;async function u(h,v){let k=["select_personal_skill_project","select_listed_personal_skill"].includes(h),$,g;try{$=await(await r("./action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({actionName:h,input:v??{}})})).json().catch(()=>({ok:!1})),$?.ok||(g=new vt($?.code||"error",$?.message||"action failed"))}catch(f){g=f}if(k)try{await m({required:!0,reconcileProject:!0})}catch{throw new vt("selection-state-unavailable","The project selection could not be reconciled. Retry the state check before editing.")}if(g)throw g;return(h==="refresh"||h==="preview_run"||h==="save_draft")&&await m({required:!0}),$.result}async function m({required:h=!1,reconcileProject:v=!1}={}){let k=c,$=++l,g;try{let w=await r("./state");if(!w.ok){if(h)throw new vt("state-unavailable","The refreshed Canvas state could not be read. Try again.");return}g=await w.json()}catch(w){if(h)throw w;return}if(v&&typeof g?.projectPath!="string")throw new vt("state-unavailable","The current Canvas project could not be verified. Try again.");let f=!!(i&&g&&typeof i.requestId=="string"&&i.requestId&&i.requestId===g.requestId&&i.readStatus==="reading"&&g.readStatus!=="reading");if(o||$!==l){if(v)throw new vt("state-unavailable","The current Canvas project could not be verified. Try again.");return}if(!Pr(i,g)){if(k!==c&&!f){if(v&&i?.projectPath!==g.projectPath)throw new vt("state-unavailable","The Canvas project changed while checking it. Try again.");return}i=g,e?.(i,a)}}let p=n||globalThis.EventSource;return m(),p&&(d=new p("./events"),d.onmessage=h=>{if(o)return;let v;try{v=JSON.parse(h.data)}catch{return}Pr(i,v)||(c++,i=v,a=!0,e?.(i,a))},d.onopen=()=>{o||(a=!0,t?.(a))},d.onerror=()=>{o||(a=!1,t?.(a))}),{invoke:u,refresh:m,close(){o=!0,a=!1,l++,d?.close()},get state(){return i},get connected(){return a}}}function Tr({view:e,mount:t,onState:n,poll:r}={}){let i=t||document.getElementById("app")||document.body;i.replaceChildren();let a=null,o=!1,c,l=()=>Cn(e({state:a,invoke:c.invoke,refresh:c.refresh,connected:o}),i);c=qs({onState:(m,p)=>{a=m,o=p,n?.(m),l()},onConnected:m=>{o=m,l()}});let d=r?jr(()=>r.action?c.invoke(r.action,r.input):c.refresh(),r.seconds,{whenVisible:r.whenVisible,immediate:r.immediate}):()=>{},u=()=>{d(),c.close(),window.removeEventListener("pagehide",u)};return window.addEventListener("pagehide",u,{once:!0}),{invoke:c.invoke,refresh:c.refresh,stopPoll:d,close:u,get state(){return a}}}var Nt={circle:[["circle",{cx:"12",cy:"12",r:"10"}]],"circle-check":[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]],inbox:[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}]],"layout-list":[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]],plus:[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]],"trash-2":[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]]},_n={};var zs="0 0 24 24",Hs=2;function Ar(e){if(typeof e!="string")return null;if(Object.hasOwn(Nt,e))return Nt[e];if(Object.hasOwn(_n,e)){let t=_n[e];if(Object.hasOwn(Nt,t))return Nt[t]}return null}function Us(e){return e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}function Ws(e){return e.map(([t,n])=>{let r=Object.entries(n).map(([i,a])=>`${Us(i)}="${Vs(a)}"`).join(" ");return`<${t} ${r} />`}).join("")}function Ir(e){return Ar(e)!=null}function Rr({name:e,size:t=16,class:n="",label:r}){let i=Ar(e);if(!i)return null;let a={xmlns:"http://www.w3.org/2000/svg",class:`lucide lucide-${e} ck-icon${n?" "+n:""}`,width:t,height:t,viewBox:zs,fill:"none",stroke:"currentColor","stroke-width":Hs,"stroke-linecap":"round","stroke-linejoin":"round",dangerouslySetInnerHTML:{__html:Ws(i)}};return r?(a.role="img",a["aria-label"]=r):a["aria-hidden"]="true",s`<svg ...${a}></svg>`}function Vs(e){return String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}var Er={"file-code":["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z","M14 2v6h6","m10 12-3 3 3 3","m14 12 3 3-3 3"],copy:["M20 8H10a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z","M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"],check:["M20 6 9 17l-5-5"],folder:["M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"],layers:["m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z","m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65","m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"],"chevron-right":["m9 18 6-6-6-6"],"chevron-down":["m6 9 6 6 6-6"],"chevrons-up-down":["m7 15 5 5 5-5","m7 9 5-5 5 5"],"chevrons-down-up":["m7 20 5-5 5 5","m7 4 5 5 5-5"],"arrow-up":["M12 19V5","m5 12 7-7 7 7"],"arrow-left":["m12 19-7-7 7-7","M5 12h14"],"maximize-2":["M15 3h6v6","m21 3-7 7","m3 21 7-7","M9 21H3v-6"],"minimize-2":["M4 14h6v6","M20 10h-6V4","m14 10 7-7","m3 21 7-7"],"refresh-cw":["M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8","M21 3v5h-5","M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16","M8 16H3v5"],sparkles:["M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z","M20 3v4","M22 5h-4"],"wand-sparkles":["m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72","m14 7 3 3","M5 6v4","M19 14v4","M10 2v2","M7 8H3","M21 16h-4","M11 3H9"],settings:["M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z","M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"],shield:["M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"],"shield-check":["M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z","m9 12 2 2 4-4"],play:["M6 3 20 12 6 21 6 3Z"],"flask-conical":["M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2","M8.5 2h7","M7 16h10"],"chart-column":["M3 3v16a2 2 0 0 0 2 2h16","M18 17V9","M13 17V5","M8 17v-3"],"triangle-alert":["m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z","M12 9v4","M12 17h.01"],"git-compare":["M5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z","M19 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z","M12 6h5a2 2 0 0 1 2 2v7","m15 9-3-3 3-3","M12 18H7a2 2 0 0 1-2-2V9","m9 15 3 3-3 3"],bot:["M12 8V4H8","M6 8h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z","M2 14h2","M20 14h2","M15 13v2","M9 13v2"],"book-open":["M12 7v14","M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"],"message-square":["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"],plug:["M12 22v-5","M9 8V2","M15 8V2","M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"],wrench:["M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"],"arrow-up-right":["M7 7h10v10","M7 17 17 7"]};function nn(e){return{eval:"flask-conical",skill:"wand-sparkles",agent:"bot",instruction:"book-open",prompt:"message-square","mcp-server":"plug",tool:"wrench"}[e]??"layers"}function U({name:e,size:t=16}){return Ir(e)?s`<${Rr} name=${e} size=${t} />`:Object.hasOwn(Er,e)?s`<svg class="ck-icon" width=${t} height=${t} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    ${Er[e].map(n=>s`<path d=${n} />`)}
  </svg>`:null}var Ot=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),rn=e=>typeof e=="number"&&Number.isSafeInteger(e)&&e>=0?e:null,kt=[{kind:"report",label:"Report"},{kind:"trajectory",label:"Conversation trace"},{kind:"output",label:"Output"},{kind:"source",label:"Report source"}];function Sn(e){return e?.mode==="health"?kt.filter(t=>t.kind!=="trajectory"):kt}function jn(e,t){let n=e?.selectedRunId;return t!=="results"||!n||e.detail?.type!=="run"||e.detail.id!==n||!e.runs.some(r=>r.id===n)?null:{id:n,project:e.projectPath,workingDirectory:e.context.workingDirectory,revision:e.requestId}}function Nr(e,t){if(typeof e!="string"||e.includes("\0"))return null;let n=t?e.replaceAll("\\","/").toLowerCase():e,r=t?/^\/\/([^/]+)\/+([^/]+)(?:\/|$)/.exec(n):null,i=t?/^[a-z]:\//.exec(n)?.[0]??r?.[0]:n.startsWith("/")?"/":null;if(!i)return null;let a=[];for(let c of n.slice(i.length).split("/"))!c||c==="."||(c===".."?a.pop():a.push(c));return`${r?`//${r[1]}/${r[2]}`:i.replace(/\/$/,"")}/${a.join("/")}`}async function Bs(e,t,n){if(!t)return e;let r=String(e??"");if(/Display limit reached\.|\[Display truncated;\s*original (?:saved )?evidence/i.test(r))throw new Error("The saved evidence for this attempt is incomplete.");let a=/^##\s+(?:validation\.log|engine-output\.jsonl|engine\.log)\r?\n/m.test(r)?r.split(/(?=^##\s+(?:validation\.log|engine-output\.jsonl|engine\.log)\r?\n)/m).find(f=>/^##\s+engine-output\.jsonl\r?\n/.test(f))?.replace(/^##\s+engine-output\.jsonl\r?\n/,"")??"":!/^#\s+/m.test(r)&&!/^###?\s+/m.test(r)&&!/^Check ID:\s+/m.test(r)?r:"",o=a?a.split(/\r?\n/):[],c=[];for(let f of o)if(f.startsWith("{"))try{let w=JSON.parse(f);Ot(w)&&w.type==="trial-result"&&c.push({raw:f,row:w})}catch{throw new Error("The saved evidence for this attempt is incomplete.")}if(c.length){let f=t.artifact;if(f){let j=new TextEncoder().encode(JSON.stringify([f.itemId,f.evalName,f.evalFilePath,t.configuration,t.model,t.attempt]));if([...new Uint8Array(await crypto.subtle.digest("SHA-256",j))].map(E=>E.toString(16).padStart(2,"0")).join("")!==t.caseId)throw new Error("The selected attempt doesn't match the saved result.")}let w=f?c.filter(({row:j})=>j.itemId===f.itemId):[],b=typeof n=="string"&&/^(?:[a-z]:[\\/]|[\\/]{2})/i.test(n),T=Nr(f?.evalFilePath,b);if((f?c.filter(({row:j})=>j.evalName===f.evalName&&(T===null?j.evalFilePath===f.evalFilePath:Nr(j.evalFilePath,b)===T)&&j.stimulus===f.stimulus&&(j.trialIndex===void 0&&f.totalTrials===1?0:j.trialIndex)===t.attempt):[]).length>1)throw new Error("The saved evidence matches more than one attempt. It can't be shown as this attempt's evidence.");let P=w.length===1?w[0]:null;if(P){let j=P.row,M=typeof j.trajectory?.metadata?.model=="string"?j.trajectory.metadata.model:j.model,E=M==null||typeof M=="string"&&M.trim().toLowerCase()==="unknown"?null:M,ce=f.totalTrials===1&&t.attempt===0&&j.trialIndex===void 0&&j.totalTrials===void 0;(j.evalName!==f.evalName||j.evalFilePath!==f.evalFilePath||j.stimulus!==f.stimulus||j.variant!==t.configuration||E!==t.model||!ce&&(j.trialIndex!==t.attempt||j.totalTrials!==f.totalTrials))&&(P=null)}if(!P)throw new Error(w.length>1?"The saved evidence matches more than one attempt. It can't be shown as this attempt's evidence.":"No saved evidence is available for this attempt.");if(t.turn!==null){let j=Array.isArray(P.row.trajectory?.events)?P.row.trajectory.events.filter(M=>Ot(M)&&rn(M.turn)===t.turn):[];if(!j.length)throw new Error(`No saved evidence is available for turn ${t.turn} of this attempt.`);return JSON.stringify({type:P.row.type??"trial-result",...P.row.itemId!==void 0?{itemId:P.row.itemId}:{},...P.row.stimulus!==void 0?{stimulus:P.row.stimulus}:{},...P.row.variant!==void 0?{variant:P.row.variant}:{},trialIndex:rn(P.row.trialIndex)??0,turn:t.turn,trajectory:{...Ot(P.row.trajectory?.stimulus)?{stimulus:P.row.trajectory.stimulus}:{},events:j}},null,2)}return JSON.stringify(P.row,null,2)}let l=/^Check ID:\s+/m.test(r)||!/^##\s+/m.test(r),d=l?r.split(/(?=^###\s+)/m).map(f=>f.replace(/\r?\n<\/details>\s*$/i,"").trim()).filter(f=>f.startsWith("### ")):r.split(/(?=^##\s+)/m).map(f=>f.trim()).filter(f=>f.startsWith("## ")),u=f=>String(f??"").replace(/\\([\\`*_[\]<>#|])/g,"$1"),m=f=>{let w=/^(?:Check|Case) ID:\s*([^\r\n·]+)/m.exec(f)?.[1]?.trim()??"";return w?u(w):null},p=f=>m(f)===t.caseId,h=d.filter(f=>{if(m(f)!==t.caseId)return!1;let b=u(f.split(/\r?\n/,1)[0]??""),T=/^(?:Case ID:\s*.+|(?:configuration:\s*.+\s*·\s*)?attempt\s+\d+|configuration:\s*[^\r\n]+)$/m.exec(f)?.[0],S=/(\([^()]*\b(?:attempt\s+\d+|configuration:)[^()]*\))\s*$/i.exec(b)?.[1]??"",P=T??S,j=/(?:^|[·,(]\s*)attempt\s+(\d+)(?=\s*(?:$|[·,)]))/i.exec(P);if(j&&Number(j[1])-1!==t.attempt)return!1;let M=T?/(?:^|·\s*)configuration:\s*(.+?)(?=\s*(?:$|\s·\s))/i.exec(T):/(?:^|[(,]\s*)configuration:\s*([^,)\r\n]+?)(?=\s*(?:$|[,)]))/i.exec(S);return!(M&&t.configuration&&u(M[1].trim())!==t.configuration)}),v=h.filter(p),k=(v.length>0?v:h).filter(f=>!/^##\s+Recorded result:/i.test(f)),$=k.length>0?k:v.length>0?v:h;if($.length!==1)throw new Error($.length>1?"The saved evidence matches more than one attempt. It can't be shown as this attempt's evidence.":"No saved evidence is available for this attempt.");let g=$[0];if(/\[Display truncated|Display limit reached\./i.test(g)||/Display limit reached\.|\[Display truncated;\s*original (?:saved )?evidence/i.test(r))throw new Error("The saved evidence for this attempt is incomplete.");if(t.turn!==null){if(l)throw new Error(`No saved evidence is available for turn ${t.turn} of this attempt.`);let f=new RegExp(`(?:\xB7\\s*turn\\s+${t.turn}|\\([^)]*\\bturn\\s*[:=]?\\s*${t.turn}\\b[^)]*\\))\\s*$`,"i");if(/^###\s+/m.test(g)){let b=g.split(/(?=^###\s+)/m).map(j=>j.trim()).filter(Boolean),T=b[0]&&!b[0].startsWith("### ")?b[0]:"",P=b.filter(j=>j.startsWith("### ")).filter(j=>f.test(j.split(/\r?\n/,1)[0]??""));if(!P.length)throw new Error(`No saved evidence is available for turn ${t.turn} of this attempt.`);return[T,...P].filter(Boolean).join(`

`)}let w=g.split(/\r?\n/,1)[0]??"";if(!f.test(w))throw new Error(`No saved evidence is available for turn ${t.turn} of this attempt.`)}return g}function Pn(e,t){let n=null,r=null,i=0,a=(c,l)=>!!c&&!!l&&c.id===l.id&&c.project===l.project&&c.workingDirectory===l.workingDirectory,o=()=>{i++,r=null};return{clear:o,setContext(c){a(n,c)?n.revision!==c.revision&&r?.status==="loading"&&(i++,r={...r,status:"error",error:"The saved results changed while loading. Choose the evidence again to reread it."}):o(),n=c?{...c}:null},get snapshot(){return a(n,r)?{...r,stale:n.revision!==r.revision}:null},async read(c,l=null){if(!n||!kt.some(h=>h.kind===c))return!1;let d=Ot(l)&&typeof l.caseId=="string"&&l.caseId.trim()?{caseId:l.caseId,...typeof l.caseName=="string"&&l.caseName.trim()?{caseName:l.caseName}:{},...typeof l.stimulus=="string"&&l.stimulus.trim()?{stimulus:l.stimulus}:{},attempt:rn(l.attempt),configuration:typeof l.configuration=="string"&&l.configuration.trim()?l.configuration:null,model:typeof l.model=="string"?l.model:null,...Ot(l.artifact)?{artifact:l.artifact}:{},turn:rn(l.turn),graderId:typeof l.graderId=="string"&&l.graderId.trim()?l.graderId:null}:null,u={...n,kind:c,focus:d},m=++i,p=()=>m===i&&a(n,u)&&n.revision===u.revision;r={...u,status:"loading",text:"",error:""},t();try{let h=await e("read_evidence",{id:u.id,kind:c});if(!p())return!1;if(h?.discarded)throw new Error("The evidence read was interrupted. Choose the evidence again to reread it.");if(h?.available===!1)throw new Error(h.message||"Saved evidence is unavailable.");if(h?.id!==u.id||h?.kind!==c||typeof h?.text!="string")throw new Error("The returned evidence doesn't match the selected run or type. Select the evidence again to reload it.");let v=await Bs(h.text,d,u.project);return p()?(r={...u,status:"ready",text:v,error:""},t(),!0):!1}catch(h){return p()&&(r={...u,status:"error",text:"",error:String(h?.message??h)},t()),!1}}}}function Tn(e){let t=d=>({status:"error",passed:!1,diagnostic:`Invalid saved grader outcome: ${d}`});if(!e||typeof e!="object"||Array.isArray(e))return t("expected an object.");let n=e,r=Object.hasOwn(n,"passed"),i=Object.hasOwn(n,"status");if(r&&typeof n.passed!="boolean")return t("passed must be a boolean.");let a=i?n.status:void 0;if(i&&(typeof a!="string"||!["passed","pass","failed","fail","error","valid"].includes(a)))return t("status is not recognized.");let o=a==="passed"||a==="pass",c=a==="failed"||a==="fail"||a==="error";if(r&&(o&&n.passed===!1||c&&n.passed===!0))return t("passed contradicts status.");if(!r&&!o&&!c)return t("no outcome was reported.");let l=r?n.passed===!0:o;return{status:a==="error"?"error":l?"passed":"failed",passed:l}}var ct=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),Or=e=>typeof e=="number"&&Number.isSafeInteger(e)&&e>=0?e:null;function An(e){return ct(e)?Array.isArray(e.cases)?e.cases:Array.isArray(e.results)?e.results:Array.isArray(e.trials)?e.trials:[]:[]}function ft(e){return An(e).map((n,r)=>lt(n,r)).filter(Boolean)}function St(e,t){if(!ct(e)||!Array.isArray(t))return null;let n=o=>typeof o=="string"&&o.trim()?o:null,r=n(e.id);if(!r||t.filter(o=>ct(o)&&n(o.id)===r).length!==1)return null;let i=ct(e.trial)?e.trial:null,a=t.filter(o=>{if(!ct(o)||r!==n(o.id))return!1;let c=ct(o.trial)?o.trial:null;for(let l of["configuration","model","attempt"])if(i&&Object.hasOwn(i,l)&&i[l]!==c?.[l])return!1;if(e.trials!=null&&o.trials!=null&&e.trials!==o.trials)return!1;if(i?.artifact){if(!c?.artifact)return!1;for(let l of["itemId","evalName","evalFilePath","stimulus","caseIndex","contextHash","totalTrials"])if(i.artifact[l]!==c.artifact[l])return!1}return!((e.trials??1)>1&&!i&&c)});return a.length===1?a[0]:null}function Dr(e,t){return[...e.map((n,r)=>({id:n.id||`original-${r}`,name:n.name,trials:n.trials??1,original:n,changed:null})),...t.map((n,r)=>({id:n.id||`changed-${r}`,name:n.name,trials:n.trials??1,original:null,changed:n}))]}function _t(e,t,n,r){if(!e||!t.length)return e;let i=St(r,t);if(!i)return e;let a=Pt(e,i);return lt({...i,durationMs:e.durationMs??i.durationMs,totalTokens:e.totalTokens??i.totalTokens,inputTokens:e.inputTokens??i.inputTokens,outputTokens:e.outputTokens??i.outputTokens,usageSource:e.usageSource??i.usageSource,turns:e.turns??i.turns,observedTools:e.observedTools??i.observedTools,observedSkills:e.observedSkills??i.observedSkills,judgeUsage:e.judgeUsage??i.judgeUsage,graderOutcomes:e.graderOutcomes.length?e.graderOutcomes:i.graderOutcomes,evidenceDiagnostics:a,id:e.id,name:e.name,status:e.status,outcome:e.outcome,trials:r.trials??i.trials,...Object.hasOwn(r,"judgeUsage")?{judgeUsage:e.judgeUsage}:{}},n,e.trials??i.trials)}function jt(e,t=[]){if(!ct(e))return[];let n=ct(e.receipt)?e.receipt:e,r=e.original?.runId??n.source?.baseline?.runId,i=e.changed?.runId??n.source?.treatment?.runId,a=Array.isArray(t)&&r?An(t.find(l=>l?.id===r)):[],o=Array.isArray(t)&&i?An(t.find(l=>l?.id===i)):[];if(Array.isArray(e.caseComparison)&&e.caseComparison.length)return e.caseComparison.map((l,d)=>({id:l.id||`row-${d}`,name:l.name||`Case ${d+1}`,trials:Or(l.trials)??1,original:l.original?_t(lt(l.original,d),a,d,l.original):null,changed:l.changed?_t(lt(l.changed,d),o,d,l.changed):null}));if(Array.isArray(e.cases)&&e.cases.length)return e.cases.map((l,d)=>({id:l.id||`row-${d}`,name:l.name||`Case ${d+1}`,trials:Or(l.trials)??1,original:l.original?_t(lt(l.original,d),a,d,l.original):null,changed:l.changed?_t(lt(l.changed,d),o,d,l.changed):null}));if(e.original||e.changed||e.summary?.runs){let l=e.original?.cases?.length?e.original.cases:e.summary?.runs?.[0]?.cases??[],d=e.changed?.cases?.length?e.changed.cases:e.summary?.runs?.[1]?.cases??[],u=Array.isArray(l)?l.filter(ct):[],m=Array.isArray(d)?d.filter(ct):[],p=ft({cases:l}).map((v,k)=>_t(v,a,k,u[k])),h=ft({cases:d}).map((v,k)=>_t(v,o,k,m[k]));return Dr(p,h)}if(a.length||o.length){let l=Dr(ft({cases:a}),ft({cases:o}));if(l.length)return l}let c=n.outcomes?.transitions;if(ct(c)){let l=new Map;for(let u of c.fixedFailures??[])l.set(String(u),{origStatus:"fail",chgStatus:"pass"});for(let u of c.newFailures??[]){let m=String(u);l.set(m,{origStatus:l.get(m)?.origStatus??"pass",chgStatus:"fail"})}for(let u of c.persistentFailures??[])l.set(String(u),{origStatus:"fail",chgStatus:"fail"});for(let u of c.fixedErrors??[]){let m=String(u);l.set(m,{origStatus:"error",chgStatus:l.get(m)?.chgStatus??"pass"})}for(let u of c.newErrors??[]){let m=String(u);l.set(m,{origStatus:l.get(m)?.origStatus??"pass",chgStatus:"error"})}for(let u of c.persistentErrors??[])l.set(String(u),{origStatus:"error",chgStatus:"error"});let d=[...l.entries()].map(([u,{origStatus:m,chgStatus:p}])=>({id:u,name:u,trials:1,original:lt({id:u,name:u,status:m}),changed:lt({id:u,name:u,status:p})}));if(d.length)return d}return[]}function Dt(e,t=[]){if(!ct(e))return!1;if(typeof e.singleTrialLowConfidence=="boolean")return e.singleTrialLowConfidence;let n=jt(e,t);return n.length>0?n.some(r=>(r.trials??1)<=1):!0}var Ve=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),Lr=e=>typeof e=="number"&&Number.isFinite(e)&&e>=0?e:null,Je=e=>typeof e=="number"&&Number.isSafeInteger(e)&&e>=0?e:null;function Mr(e,t=""){let n=`${e??""} ${t??""}`.trim().toLowerCase();return/\bcompleted\b/.test(n)?"Checks run completion only, not answer correctness.":/\b(?:output-contains|output-exact|output-matches|regex)\b/.test(n)?"Checks output text against the expected pattern, not full answer correctness or tool use.":/\b(?:file-contains|file-matches)\b/.test(n)?"Checks workspace file contents after the run, not how the response was produced.":/\b(?:tool-calls|tool_call|mcp-call|skill-invocation|skill_activation|skill-activation|agent-delegation|subagent)\b/.test(n)?"Checks recorded tool, skill or agent activity, not whether the answer is correct.":/\b(?:prompt|llm|panel|rubric)\b/.test(n)?"Uses a model to score the response against the scoring rules. Scores can vary between runs.":"Checks one configured condition in the saved run, not whether the whole answer is correct."}function In(e){let t=String(e??"").trim().toLowerCase();return t==="passed"||t==="pass"?"pass":t==="failed"||t==="fail"?"fail":t==="errored"||t==="error"?"error":t==="skipped"?"skipped":t==="not-evaluated"||t==="not evaluated"?"not-evaluated":t||"unknown"}function Fr(e){let t=Lr(e);return t===null?"not reported":t<1e3?`${Math.round(t)} ms`:`${(t/1e3).toFixed(t%1e3===0?0:1)} s (${Math.round(t)} ms)`}function qr(e){if(!Ve(e))return null;let t=typeof e.model=="string"&&e.model.trim()?e.model.trim():null,n=Ve(e.tokenUsage)?e.tokenUsage:e,r=Je(n.inputTokens),i=Je(n.outputTokens),a=n.totalTokens==null?r!==null&&i!==null?Je(r+i):null:Je(n.totalTokens);return{model:t,inputTokens:r,outputTokens:i,totalTokens:a}}function zr(e){if(!Ve(e))return null;let t={model:typeof e.model=="string"&&e.model.trim()?e.model.trim():null,completeness:{}};for(let n of["inputTokens","outputTokens","totalTokens"]){let r=e.completeness?.[n],i=Je(e[n]);t[n]=r==="complete"?i:null,t.completeness[n]=["partial","unknown","ambiguous"].includes(r)?r:r==="complete"&&i!==null?"complete":"ambiguous"}return t}function Rn(e){return e.inputTokens===null&&e.outputTokens===null?"":` (${e.inputTokens===null?"input not reported":`${e.inputTokens} in`} / ${e.outputTokens===null?"output not reported":`${e.outputTokens} out`})`}function Mt(e){let t=qr(e);return t?`Judge (${t.model??"model not reported"}): ${t.totalTokens===null?"tokens not reported":`${t.totalTokens} tokens`}${Rn(t)}`:""}function Hr(e){if(!Ve(e))return"not reported";let t=Ve(e.tokenUsage)?e.tokenUsage:null,n=Je(e.totalTokens??t?.totalTokens),r=Je(e.inputTokens??t?.inputTokens),i=Je(e.outputTokens??t?.outputTokens),a=e.usageSource??t?.source??null,o=typeof a=="string"&&a.trim()?a.trim():null,c=zr(e.judgeUsage),l=c?c.totalTokens!==null?`Judge${c.model?` (${c.model})`:""}: ${c.totalTokens} tokens${Rn(c)}`:`Total judge usage unknown - ${c.completeness.totalTokens==="ambiguous"?"measurement completeness or ownership is unverified":c.completeness.totalTokens==="partial"?"some judges did not report usage":"complete measurements are unavailable"}${Rn(c)}`:"";if(n===null)return l?`not reported (${l})`:"not reported";let d=[];r!==null&&i!==null&&d.push(`${r} in / ${i} out`),d.push("role: task/agent"),o&&d.push(`source: ${o}`);let u=`${n} tokens (${d.join("; ")})`;return l?`${u} \xB7 ${l}`:u}function Nn(e){let t=Je(e);return t===null?"not reported":`${t} ${t===1?"turn":"turns"}`}function En(e){if(!Array.isArray(e))return"not reported";let t=e.map(n=>String(n??"").trim()).filter(Boolean);return t.length>0?`Observed: ${t.join(", ")}`:"not reported"}function Ur(e,t=""){let n=r=>{let i=String(r??"").trim().toLowerCase();return i?/\b(?:output-contains|output-not-contains|output-exact|output-matches|output-not-matches|regex)\b/.test(i)?"output":/\b(?:tool-calls|tool_call|mcp-call|skill-invocation|skill_activation|skill-activation|agent-delegation|subagent|transcript-contains|transcript-not-contains|transcript-matches|transcript-not-matches|assistant-contains-tool-output|completed|exit-success)\b/.test(i)?"trajectory":/\b(?:prompt|llm|panel|rubric)\b/.test(i)?"judge":/\b(?:file-contains|file-not-contains|file-matches|file-not-matches|file-exists|file-not-exists|diff-contains|diff-not-contains|diff-matches|diff-match|diff-empty)\b/.test(i)?"workspace":null:null};return n(e)??n(t)}function Lt(e,t="check-0"){let{status:n,passed:r,diagnostic:i}=Tn(e),a=Ve(e)?e:{},o=typeof a.kind=="string"&&a.kind.trim()?a.kind.trim():typeof a.type=="string"&&a.type.trim()?a.type.trim():typeof a.graderType=="string"&&a.graderType.trim()?a.graderType.trim():"check",c=typeof a.name=="string"&&a.name.trim()?a.name.trim():typeof a.configuredName=="string"&&a.configuredName.trim()?a.configuredName.trim():typeof a.nativeName=="string"&&a.nativeName.trim()?a.nativeName.trim():o,l=n==="error"?null:typeof a.score=="number"&&Number.isFinite(a.score)?a.score:null,d=typeof a.reason=="string"?a.reason:typeof a.explanation=="string"?a.explanation:typeof a.evidence=="string"?a.evidence:void 0,u=i??d??"No grading explanation was provided.",m=i?"provided":a.reasonState==="provided"||a.reasonState==="missing"?a.reasonState:typeof d=="string"&&d.trim()!==""&&d!=="No grading explanation was provided."&&d!=="No native grader explanation was provided."?"provided":"missing",p=Je(a.turn),h=Object.hasOwn(a,"children")?a.children:a.details,k=(h===void 0?[]:Array.isArray(h)?h:[null]).map(($,g)=>Lt($,`${t}.${g}`)).filter(Boolean);return{id:typeof a.id=="string"&&a.id.trim()?a.id:t,name:c,kind:o,status:n,passed:r,score:l,reason:u,reasonState:m,turn:p,proves:typeof a.proves=="string"&&a.proves.trim()?a.proves:Mr(o,c),judgeUsage:qr(a.judgeUsage??a.judge),children:k}}function Ks(e,t=240){let n=String(e??"");return n.length>t?`${n.slice(0,t-1)}\u2026`:n}function Wr(e,t,n=null){let r=Je(e.turn)??n,i=Array.isArray(e.children)?e.children.map(m=>Wr(m,t,r)):[],a=e.kind==="composite"?null:Ur(e.kind,e.name),o=r!==null?` turn ${r}`:"",c={caseId:t.caseId,caseName:t.caseName,...typeof t.stimulus=="string"&&t.stimulus?{stimulus:t.stimulus}:{},attempt:t.attempt,configuration:t.configuration,model:t.model,...t.artifact?{artifact:t.artifact}:{},turn:r,evidenceKind:a},l=r!==null&&t.turns!==null&&r>=t.turns,d=e.reasonState==="provided"?!!e.reason:e.reasonState==="missing"?!1:!!(e.reason&&e.reason!=="No grading explanation was provided."&&e.reason!=="No native grader explanation was provided."),u;if(t.ambiguous||!t.artifact||t.attempt===null||["skipped","not-evaluated"].includes(t.status)||!a||l)u={...c,target:null,available:!1,summary:l?"No checkpoint turn is available for this attempt":"No saved evidence is available for this attempt"};else if(a==="output"||a==="judge"){let m=r!==null?t.outputAvailable&&typeof t.turnOutputs?.[r]=="string"&&t.turnOutputs[r].trim()?t.turnOutputs[r].trim():null:t.outputAvailable?t.observed:null;u=m?{...c,target:"output",available:!0,summary:`Attempt ${t.attempt+1}${o} output: ${m.slice(0,160)}`}:{...c,target:null,available:!1,summary:r!==null?"No checkpoint output is available for this attempt":"No output is available for this attempt"}}else if(a==="trajectory")if(r!==null){let m=Ve(t.turnEvidence?.[r])?t.turnEvidence[r]:null,p=Array.isArray(m?.observedSkills)?m.observedSkills.filter(Boolean):[],h=Array.isArray(m?.observedTools)?m.observedTools.filter(Boolean):[],k=[typeof m?.summary=="string"&&m.summary.trim()?m.summary.trim():"",p.length?`skills: ${p.join(", ")}`:"",h.length?`tools: ${h.join(", ")}`:""].filter(Boolean);u=k.length>0?{...c,target:"trajectory",available:!0,summary:`Attempt ${t.attempt+1}${o} trajectory (${k.join("; ")})`}:{...c,target:null,available:!1,summary:"No checkpoint conversation trace is available for this attempt"}}else{let m=!!(t.turnEvidence&&Object.keys(t.turnEvidence).length>0),p=!!(t.trajectoryAvailable||m||t.hasObservations||t.observedSkills?.length||t.observedTools?.length),h=[t.turns!==null?Nn(t.turns):"",t.observedSkills?.length?`skills: ${t.observedSkills.join(", ")}`:"",t.observedTools?.length?`tools: ${t.observedTools.join(", ")}`:""].filter(Boolean),v=h.length?h:["recorded events"];u=p?{...c,target:"trajectory",available:!0,summary:`Attempt ${t.attempt+1} trajectory (${v.join("; ")})`}:{...c,target:null,available:!1,summary:"No conversation trace is available for this attempt"}}else u=r===null&&d?{...c,target:"report",available:!0,summary:`Attempt ${t.attempt+1} workspace check: ${e.reason.slice(0,160)}`}:{...c,target:null,available:!1,summary:r!==null?"No checkpoint file evidence is available for this attempt":"No file evidence is available for this attempt"};return{...e,turn:r,sameAttemptEvidence:{...u,summary:Ks(u.summary)},children:i}}function Js(e){if(!Array.isArray(e)||!e.length)return[];let t=new Map,n=[];for(let[r,i]of e.entries()){if(!Ve(i)){n.push(Lt(i,`check-${r}`));continue}let a="";if(typeof i.id=="string"&&i.id.startsWith("["))try{let c=JSON.parse(i.id);Array.isArray(c)&&typeof c[0]=="string"&&/^grade(?:\.\d+)*$/.test(c[0])&&(a=c[0])}catch{}let o=Lt({...i,kind:i.type??i.nativeName??i.name??(a==="grade"?"composite":"check"),name:i.name??i.nativeName??i.type??(a==="grade"?"Overall check":i.id??`check-${r}`)},`check-${r}`);if(o){if(a){t.set(a,o);let c=a.lastIndexOf("."),l=c>0?t.get(a.slice(0,c)):null;if(l){l.children.push(o);continue}}n.push(o)}}return n}function Pt(...e){let t=[];for(let n of e)for(let r of Array.isArray(n?.evidenceDiagnostics)?n.evidenceDiagnostics:[])Ve(r)&&typeof r.message=="string"&&["partial","unavailable","unbound"].includes(r.state)&&!t.some(i=>i.state===r.state&&i.message===r.message)&&t.push(r);return t}function lt(e,t=0,n=1){if(!Ve(e))return null;let r=Ve(e.trial)?e.trial:null,i=Ve(e.tokenUsage)?e.tokenUsage:Ve(r?.tokenUsage)?r.tokenUsage:null,a=Ve(e.behavior)?e.behavior:null,o=Array.isArray(a?.observations)?a.observations.filter(Ve):[],c=typeof e.name=="string"&&e.name.trim()?e.name:`Case ${t+1}`,l=Ve(r?.artifact)?r.artifact:null,d=Je(l?.totalTrials??e.trials??r?.trials),u=d!==null&&d>=1?d:n,m=Lr(e.durationMs??r?.durationMs),p=Je(e.inputTokens??r?.inputTokens??i?.inputTokens),h=Je(e.outputTokens??r?.outputTokens??i?.outputTokens),v=Je(e.totalTokens??r?.totalTokens??i?.totalTokens),k=e.usageSource??r?.usageSource??i?.source??null,$=typeof k=="string"&&k.trim()?k.trim():null,g=Je(e.turns??e.turnCount??r?.turns??r?.turnCount),f=X=>{if(!Array.isArray(X))return null;let Y=X.map(J=>String(J??"").trim()).filter(Boolean);return Y.length?Y:null},w=f(e.observedTools??r?.observedTools)??(()=>{let X=o.filter(Y=>Y.kind==="mcp-call"||Y.kind==="agent-delegation").map(Y=>Y.kind==="mcp-call"?Y.server&&Y.tool?`${Y.server}/${Y.tool}`:String(Y.tool??Y.name??""):Y.name&&Y.name!=="task"?`task (${Y.name})`:String(Y.name??"")).filter(Boolean);return X.length?[...new Set(X)]:null})(),b=f(e.observedSkills??r?.observedSkills)??(()=>{let X=o.filter(Y=>Y.kind==="skill-activation").map(Y=>String(Y.name??"").trim()).filter(Boolean);return X.length?[...new Set(X)]:null})(),T=a?Js(a.graders):Object.hasOwn(e,"graderOutcomes")?(Array.isArray(e.graderOutcomes)?e.graderOutcomes:[null]).map((X,Y)=>Lt(X,`check-${Y}`)):[],S=zr(Object.hasOwn(e,"judgeUsage")?e.judgeUsage:r?.judgeUsage??(T.length?{}:null)),P=typeof e.status=="string"?e.status:typeof e.outcome=="string"?e.outcome.toLowerCase():"unknown",j=typeof e.id=="string"&&e.id.trim()?e.id:`case-${t}`,M=typeof e.stimulus=="string"&&e.stimulus.trim()?e.stimulus:void 0,E=Je(r?.attempt),ce=r&&typeof r.configuration=="string"&&r.configuration.trim()?r.configuration:null,N=typeof e.observed=="string"?e.observed.trim():"",we=N&&!/^(?:Actual response was not provided by the evaluator|Stopped before this test finished|No complete result was produced)\.$/.test(N)?N:null,ge=Ve(e.turnOutputs)?e.turnOutputs:null,de=Ve(e.turnEvidence)?e.turnEvidence:null,Te=typeof e.outputAvailable=="boolean"?e.outputAvailable:!!ge,le=typeof e.trajectoryAvailable=="boolean"?e.trajectoryAvailable:!!(de&&Object.keys(de).length>0||o.length>0||b?.length||w?.length),A=!!e.ambiguousEvidence,Q={caseId:j,caseName:c,...M?{stimulus:M}:{},status:In(e.outcome??e.status),attempt:E,configuration:ce,model:r?.model??null,...l?{artifact:l}:{},observed:we,outputAvailable:Te,trajectoryAvailable:le,hasObservations:o.length>0,observedTools:w,observedSkills:b,turns:g,turnOutputs:ge,turnEvidence:de,ambiguous:A},D=T.map(X=>Wr(X,Q)),G={id:j,name:c,...M?{stimulus:M}:{},status:P,outcome:In(e.outcome??e.status),observed:we,outputAvailable:Te,trajectoryAvailable:le,ambiguousEvidence:A,evidenceDiagnostics:Pt(e),...ge?{turnOutputs:ge}:{},...de?{turnEvidence:de}:{},trials:u,durationMs:m,totalTokens:v,inputTokens:p,outputTokens:h,usageSource:$,turns:g,observedTools:w,observedSkills:b,judgeUsage:S,graderOutcomes:D,trial:r?{configuration:ce,model:r.model??null,attempt:E,...l?{artifact:l}:{}}:null};return{...G,formattedDuration:Fr(G.durationMs),formattedTokens:Hr(G),formattedTurns:Nn(G.turns),formattedObservedTools:En(G.observedTools),formattedObservedSkills:En(G.observedSkills)}}var nt=[{id:"definitions",label:"Evals",icon:"flask-conical"},{id:"assets",label:"Assets",icon:"layers"},{id:"results",label:"Results",icon:"chart-column"},{id:"diagnostics",label:"Problems",icon:"triangle-alert"}],sn=20,Vr=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function an(e,t=""){return Object.entries(e).map(([n,r])=>{let i=/^[a-zA-Z_][a-zA-Z0-9_-]*$/.test(n)&&!/^(?:null|true|false)$/i.test(n)?n:JSON.stringify(n);return r&&typeof r=="object"&&!Array.isArray(r)&&Object.keys(r).length?`${t}${i}:
${an(r,`${t}  `)}`:`${t}${i}: ${JSON.stringify(r)}`}).join(`
`)}function Br(e=[]){let t=c=>e.filter(l=>l.kind===c).map(l=>String(l.relativePath??"").replaceAll("\\","/")).filter(l=>l&&!l.startsWith("/")&&!l.includes(":")&&!l.split("/").some(d=>!d||d===".."||d===".")),n=c=>c.includes("/")?c.slice(0,c.lastIndexOf("/")):".",r=c=>{let l=[...new Set(c)].sort((u,m)=>u.localeCompare(m)).filter((u,m,p)=>!p.some(h=>h!==u&&(h==="."||u.startsWith(`${h}/`))));if(l.length<=64)return l;let d=l[0].split("/");for(let u of l.slice(1)){let m=u.split("/");for(;d.some((p,h)=>p!==m[h]);)d.pop()}return[d.join("/")||"."]},i=t("eval"),a=t("skill").filter(c=>/\/SKILL\.md$/i.test(c)).map(c=>n(n(c))),o=[...new Set(["*.eval.yaml",...i.map(c=>{let l=c.split("/").at(-1),d=l.match(/(?:\.eval)?\.(yaml|yml|jsonc?)$/i);return d?`*${d[0]}`:l})])];return{paths:{evals:r(i.map(n)).join(`
`)||"evals",skills:r(a).join(`
`)||".github/skills",results:".copilot/evals/results",evalFilenames:o.length<=64?o.join(`
`):"*"},suite:"all",description:"All discovered evals"}}function Kr(e){let t=new URLSearchParams(e),n=t.getAll("run");return t.getAll("view").length===1&&["compare","setup"].includes(t.get("view"))&&n.length===0?{view:t.get("view"),runId:""}:t.get("view")==="results"&&n.length===1&&/^[a-zA-Z0-9-]{1,80}$/.test(n[0])?{view:"results",runId:n[0]}:{view:"definitions",runId:""}}function Jr(){return Object.fromEntries(nt.map(({id:e})=>[e,{query:"",kind:"all",status:"all",sort:e==="results"?"newest":"name",page:1}]))}function on(e,t,n){return{...e,[t]:{...e[t],...n,page:"page"in n?n.page:1}}}function ln(e,t,n){let r=t==="results"?e.runs:e.assets.filter(m=>t==="definitions"?m.kind==="eval":m.kind!=="eval"),i=n.query.trim().toLocaleLowerCase(),a=r.filter(m=>(t==="results"?`${m.name} ${m.id} ${m.mode}`:`${m.name} ${m.relativePath}`).toLocaleLowerCase().includes(i)&&(n.kind==="all"||m.kind===n.kind)&&(n.status==="all"||m.status===n.status)),o=m=>Number.isFinite(Date.parse(m))?Date.parse(m):0,c=a.toSorted((m,p)=>{let h=n.sort;return(h==="newest"?o(p.startedAt)-o(m.startedAt):Vr.compare(h==="path"?m.relativePath:h==="status"?m.status:m.name,h==="path"?p.relativePath:h==="status"?p.status:p.name))||Vr.compare(m.id,p.id)}),l=Math.max(1,Math.ceil(c.length/sn)),d=Math.min(l,Math.max(1,n.page)),u=(d-1)*sn;return{rows:c.slice(u,u+sn),total:r.length,matching:c.length,page:d,pages:l,first:c.length?u+1:0,last:Math.min(u+sn,c.length)}}function cn(e,t){let n=t==="definitions"?e.savedEvalNavigation?.detail??e.detail:e.detail;return!n||t==="diagnostics"||!nt.some(r=>r.id===t)?null:t==="results"?n.type==="run"?n:null:n.type!=="asset"?null:t==="definitions"==(n.kind==="eval")?n:null}function rt(e){let t=new Date(e);return Number.isFinite(t.getTime())?new Intl.DateTimeFormat(void 0,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"}).format(t):"Unknown date"}function On(e){if(e.readStatus==="idle")return"Choose a folder to find evals";if(e.readStatus==="reading")return"Looking for evals and saved results\u2026";let t=[];return e.discovery?.status==="error"&&t.push(`Evals and project files couldn't load${e.discovery.stale?" (showing earlier files)":""}`),e.history?.status==="error"&&t.push(`Saved results couldn't load${e.history.stale?" (showing earlier results)":""}`),t.length?t.join(" \xB7 "):e.readStatus==="unavailable"||e.readStatus==="partial"?"Some files couldn't load. See Problems for details.":"Evals, project files and saved results are up to date"}function Gr(e){return e.replace(/[\\/]+$/,"").split(/[\\/]/).at(-1)||e||"Choose a folder"}function ot(e){return String(e??"")}function Ft(e){return e.kind==="fixture"?"Sample input file":{accepted:"Format check passed",rejected:"Format check failed",cancelled:"Check cancelled",unavailable:"Check unavailable","process-failed":"Check could not finish","not-evaluated":"Not checked"}[e.validation?.status]??"Not checked"}function Yr(e){return{"supported-shape":"Supported format","requires-resolution":"Needs more setup",unsupported:"Not supported"}[e?.status]??"Not checked"}function Zr(e){let t=e.trim();return t.length>0&&t.length<=4096&&!t.includes("\0")&&/^(?:[a-z]:[\\/]|\\\\|\/)/i.test(t)}function Qr(e){let t=e==null?"Not recorded":JSON.stringify(e,null,2);return{text:t.slice(0,8192),truncated:t.length>8192}}var Dn=(e,t)=>{if(typeof e=="string")return e;let n=e.tag==="table"&&t?.tablePrefix?`${t.tablePrefix}: table ${++t.tableNumber}`:"",r=e.children.map(a=>Dn(a,t)),i=/^h[1-6]$/.test(e.tag)&&t?.headingOffset?`h${Math.min(6,Number(e.tag[1])+t.headingOffset)}`:e.tag;return i==="table"?s`<div class="report-table" tabindex="0" role="region" aria-label=${n||"Comparison table"}>
    <table>${n&&s`<caption>${n}</caption>`}${r}</table></div>`:i==="th"&&t?.tablePrefix?s`<th scope="col">${r}</th>`:s`<${i}>${r}<//>`},Ln=[{id:"author",label:"Create",icon:"sparkles"},{id:"activity",label:"Run queue",icon:"play"},{id:"compare",label:"Compare",icon:"git-compare"},{id:"setup",label:"Settings",icon:"settings"}],qt=e=>`name: ${e}
defaults:
  executor: mock
stimuli:
  - name: Expected response
    prompt: Return the word ready.
    graders:
      - type: output-contains
        config:
          substring: ready
`,ze=e=>["validation","authentication","running","health","stopping"].includes(e),Gs=e=>e?.message??String(e);function Mn(e){let t=(e||"selected.eval.yaml").split(/[\\/]/).at(-1)||"selected.eval.yaml";return/((?:\.eval)?\.(?:ya?ml|jsonc?))$/i.test(t)?t.replace(/(?:\.eval)?\.(ya?ml|jsonc?)$/i,"-copy.eval.$1"):`${t}-copy.eval.yaml`}function Oe(e,{returnCancellation:t=!1}={}){let[n,r]=C(""),[i,a]=C(""),o=I(0),c=I(!0);H(()=>(c.current=!0,()=>{c.current=!1,o.current++}),[]);async function l(d,u={}){let m=++o.current;a(""),r(d);try{let p=await e(d,u);if(p?.available===!1)throw new Error(p.message||"This action isn't available.");return!c.current||o.current!==m||p?.discarded||p?.cancelled&&!t?null:p}catch(p){return c.current&&o.current===m&&a(Gs(p)),null}finally{c.current&&o.current===m&&r("")}}return{run:l,pending:n,error:i,clear:()=>a(""),reset:()=>{o.current++,r(""),a("")}}}function _e({error:e}){return e?s`<p class="studio-error" role="alert">${ot(e)}</p>`:null}function zt({state:e,invoke:t,compact:n=!1}){let[r,i]=C(e.trusted),{run:a,pending:o,error:c}=Oe(t);if(H(()=>i(e.trusted),[e.trusted]),e.trustSource==="native"&&e.trustCanGrant){let l=!!o||e.trustGrantPending||e.trustStatus==="checking";return s`<div class="trust-wrapper host-trust">
      <label class=${`trust-control ${e.trusted?"is-trusted":""}`.trim()}>
        <input type="checkbox" checked=${e.trusted} disabled=${l||e.trusted||e.trustStatus!=="ready"}
          onChange=${d=>{d.target.checked&&a("trust_project",{trusted:!0,projectPath:e.projectPath})}} />
        <${U} name=${e.trusted?"shield-check":"shield"} size=${15} />
        <span role="status">${e.trustGrantPending?"Trusting folder\u2026":e.trustStatus==="checking"?"Checking folder trust\u2026":e.trusted?"Folder trusted":"Trust this folder"}</span>
      </label>
      <${_e} error=${e.trustError||c} />
    </div>`}return e.trustSource==="native"?s`<div class="trust-wrapper" role="status">
    <span class="trust-control" title="Your app manages workspace trust. Each action still needs separate approval.">
      <${U} name=${e.trusted?"shield-check":"shield"} size=${15} />
      ${e.trusted?"Workspace trusted":"Trust this workspace in your app to use AI, check files and save."}
    </span></div>`:s`<div class="trust-wrapper"><label class=${`trust-control ${r?"is-trusted":""}`.trim()}
    title="Allow AI, saving and running. Each action still needs your approval."><input type="checkbox" checked=${r} disabled=${!!o}
    onChange=${async l=>{let d=l.target.checked;i(d),await a("trust_project",{trusted:d})||i(e.trusted)}} /><${U} name=${r?"shield-check":"shield"} size=${15} /><span>Trust this folder${!n&&s`<small class="sr-only">Allow AI, saving and running. Each action still needs your approval.</small>`}</span></label>
    <${_e} error=${c} /></div>`}async function dn(e,t){try{if((await t("copy_project_path")).copied)return}catch{}try{await navigator.clipboard.writeText(e);return}catch{}let n=document.activeElement,r=typeof n?.selectionStart=="number"?{start:n.selectionStart,end:n.selectionEnd,direction:n.selectionDirection}:null,i=window.getSelection(),a=i?Array.from({length:i.rangeCount},(c,l)=>i.getRangeAt(l).cloneRange()):[],o=document.createElement("textarea");o.value=e,o.readOnly=!0,o.style.cssText="position:fixed;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none",document.body.append(o);try{if(o.focus({preventScroll:!0}),o.select(),!document.execCommand("copy"))throw new Error("Clipboard access was blocked. Try Copy path again.")}finally{if(o.remove(),n?.focus({preventScroll:!0}),i){i.removeAllRanges();for(let c of a)i.addRange(c)}r&&n.setSelectionRange(r.start,r.end,r.direction)}}var un=[{id:"oracle",label:"Reference answer",description:"Provide the expected inputs and check that the graders accept the reference answer."},{id:"negative-control",label:"Without reference inputs",description:"Leave out the reference inputs and use the runner's baseline result. This does not supply a known-bad conversation. Checks for something being absent may report N/A."},{id:"trajectory",label:"Saved conversation",description:"Score a saved conversation and compare the overall result and each grader's result with the expected pass or fail."}],Fn=e=>un.find(t=>t.id===e)?.label??"Unknown test mode";function Xr(e){return e?[`Default expected: ${e.expected}`,...Object.entries(e.graders??{}).map(([t,n])=>`${t}: expected ${n}`)]:[]}function es(e){return(e?.results??[]).flatMap(t=>[{name:`${t.stimulus}${Object.hasOwn(t,"baseline")?" (baseline without reference inputs)":""}`,expected:t.expected,observed:t.actual,...t.score!==void 0?{score:t.score}:{},...t.error?{error:t.error}:{},outcome:t.actual==="error"?"Error":t.matched?"Matched":"Mismatch"},...(t.graders??[]).map(n=>({name:`${t.stimulus} / ${n.name}`,expected:n.expected??"Not specified",observed:n.actual,...n.score!==void 0?{score:n.score}:{},...n.evidence?{evidence:n.evidence}:{},...n.error?{error:n.error}:{},outcome:n.actual==="error"?"Error":n.matched===void 0?"Observation":n.matched?"Matched":"Mismatch"}))])}function wt(e,t){if(!t||typeof t!="string")return;let n=a=>a.split("/").map(encodeURIComponent).join("/").replace(/^([A-Za-z])%3A/,"$1:"),r=a=>a.split("/").map(o=>{try{return encodeURIComponent(decodeURIComponent(o))}catch{return o}}).join("/").replace(/^\/([A-Za-z])%3A/,"/$1:"),i=a=>new URL(`file:///${n(a.replace(/^\/+/,""))}`);try{let a=t.replaceAll("\\","/"),o=i(`${e.replaceAll("\\","/").replace(/\/$/,"")}/`),c=a.startsWith("file:")?new URL(a):a.startsWith("/")||/^[A-Za-z]:\//.test(a)?i(a):new URL(n(a),o),l=r(o.pathname),d=r(c.pathname);return c.protocol!=="file:"||c.host!==o.host||!d.startsWith(l)?void 0:(c.pathname=d,c.href)}catch{return}}function Ys(e,t,n){if(typeof n!="string")return;let r=n.replaceAll("\\","/");if(r.startsWith("/")||r.startsWith("file:")||/^[A-Za-z]:\//.test(r))return wt(e,n);let i=wt(e,t);return i?wt(e,new URL(r.split("/").map(encodeURIComponent).join("/"),i).href):void 0}function ts(e,t,n){let r=n===void 0?wt(e.projectPath,t):Ys(e.projectPath,t,n);if(!r)return null;try{return{path:decodeURIComponent(new URL(r).pathname).replace(/^\/(?=[A-Za-z]:\/)/,""),assetId:(e.assets??[]).find(i=>wt(e.projectPath,i.uri??i.relativePath)===r)?.id}}catch{return null}}function qn({state:e,evalPath:t,trajectory:n,invoke:r}){let i=ts(e,t,n),a=n===void 0?"eval":"fixture",[o,c]=C(""),{run:l,pending:d,error:u}=Oe(r);return s`<div class="grader-source-reference">
    <label class="stack-label">${a==="eval"?"Eval path":"Fixture path"}
      <input readonly value=${i?.path??n??t} /></label>
    ${i?.assetId&&s`<button class="ck-btn" type="button" disabled=${!!d}
      onClick=${()=>l("preview_asset",{id:i.assetId})}>Open ${a==="eval"?"eval definition":"fixture preview"}</button>`}
    <button class="ck-btn" type="button" disabled=${!i} onClick=${async()=>{try{await dn(i.path,async()=>({})),c(`Copied ${a} path.`)}catch{c("Clipboard unavailable. Select and copy the path above.")}}}>Copy ${a} path</button>
    ${o&&s`<p role="status">${o}</p>`}
    <${_e} error=${u} />
  </div>`}function ns({state:e,item:t,invoke:n}){let[r,i]=C(!1),[a,o]=C("oracle"),[c,l]=C(""),[d,u]=C(""),{run:m,pending:p,error:h}=Oe(n),v=Oe(n),k=Oe(n),$=t.uri,g=e.graderTestCatalog,f=wt(e.projectPath,$),w=g&&f&&wt(e.projectPath,g.evalPath)===f,b=w?g.fixtures:[],T=b.find(E=>E.id===d),S=e.graderTestPhase!=="idle",P=e.trusted&&!ze(e.operation.phase)&&!e.operation.approval,j=e.graderTest,M=e.graderTestPreview;return s`<section class="grader-tests" aria-label="Test graders">
    <button class="ck-btn" aria-expanded=${r} disabled=${!!p} onClick=${async()=>{i(!r),r||await Promise.all([m("grader_test_catalog",{evalPath:$}),k.run("list_grader_tests")])}}>Test graders</button>
    ${r&&s`<div class="grader-test-panel">
      <h3>Test graders</h3>
      <p>Test the scoring rules without running the task agent.</p>
      <form class="grader-test-form" onSubmit=${async E=>{E.preventDefault(),await m("run_grader_test",{evalPath:$,mode:a,...a==="trajectory"?{fixtureId:d}:c?{stimulus:c}:{}})}}>
        <label class="stack-label">Test mode<select value=${a} disabled=${!!p||S} onChange=${E=>o(E.target.value)}>
          ${un.map(E=>s`<option value=${E.id}>${E.label}</option>`)}
        </select></label>
        <p>${un.find(E=>E.id===a)?.description}</p>
        ${a!=="trajectory"?s`<label class="stack-label">Test case (stimulus)<select value=${c} disabled=${!!p||S||!w} onChange=${E=>l(E.target.value)}>
          <option value="">All test cases</option>
          ${(w?g.stimuli:[]).map(E=>s`<option value=${E}>${E}</option>`)}
        </select></label>`:s`<label class="stack-label">Configured fixture<select value=${d} disabled=${!!p||S||!w} required onChange=${E=>u(E.target.value)}>
          <option value="">Choose a fixture</option>
          ${b.map(E=>s`<option value=${E.id}>${E.id} · ${E.stimulus} · expected ${E.expected}</option>`)}
        </select></label>
        ${!b.length&&s`<p>No configured fixtures. Add fixtures to <code>${t.relativePath??t.name}.grader-tests.json</code> beside the eval.</p>`}
        ${T&&s`<div><p>Test case: ${T.stimulus}</p>
          <${qn} state=${e} evalPath=${g.evalPath} trajectory=${T.trajectory} invoke=${n} />
          <ul>${Xr(T).map(E=>s`<li>${E}</li>`)}</ul></div>`}`}
        <p class="snapshot-notice">Graders may use paid models or run scripts. Review the command and cost warning in the approval prompt before starting.</p>
        <button class="ck-btn ck-btn-primary" type="submit" disabled=${!P||!!p||S||!w||a==="trajectory"&&!T}>
          ${p==="run_grader_test"?"Testing graders\u2026":"Review & test graders"}
        </button>
      </form>
      ${(S||p==="run_grader_test")&&s`<div role="status"><p>${e.graderTestPhase==="idle"?"Preparing":e.graderTestPhase} grader test…</p>
        <button class="ck-btn" disabled=${!!v.pending} onClick=${()=>v.run("cancel_grader_test")}>Cancel grader test</button></div>`}
      ${M&&s`<details open><summary>Exact grader test command</summary><pre tabindex="0">${M.command}</pre>
        <ul>${M.warnings.map(E=>s`<li>${E}</li>`)}</ul></details>`}
      <h4>Saved grader tests</h4>
      <button class="ck-btn" disabled=${!!p||!!k.pending||S} onClick=${()=>k.run("list_grader_tests")}>Refresh grader test history</button>
      <label class="stack-label">Reopen result<select value=${j?.id??""} disabled=${!!p||!!k.pending||S} onChange=${E=>{E.target.value&&k.run("read_grader_test",{id:E.target.value})}}><option value="">Choose a saved grader test</option>
        ${(e.graderTests??[]).map(E=>s`<option value=${E.id}>${E.evalPath} · ${Fn(E.mode)} · ${E.status} · ${E.createdAt}</option>`)}
      </select></label>
      ${j&&s`<section aria-label="Grader test result">
        <h4>Grader test: ${j.status}</h4>
        ${j.error&&s`<details open><summary>Error details (not instructions)</summary><pre tabindex="0">${j.error}</pre></details>`}
        <p>${Fn(j.mode)} · ${j.stimulus??"All test cases"} · ${j.createdAt}</p>
        ${j.sourceAvailable===!1&&s`<p role="note">This saved report belongs to a previous project location. Its source eval is unavailable; the report is read-only.</p>`}
        <${qn} state=${e} evalPath=${j.evalPath} invoke=${n} />
        ${j.fixture&&s`<div><p>Fixture: ${j.fixture.id}</p>
          <${qn} state=${e} evalPath=${j.evalPath} trajectory=${j.fixture.trajectory} invoke=${n} /></div>`}
        <p>Expected vs. observed outcomes, mismatches and errors:</p>
        ${j.results?.length>0&&s`<div class="report-table" tabindex="0" role="region" aria-label="Grader expectations and observations">
          <table><thead><tr><th scope="col">Test case / grader</th><th scope="col">Expected</th><th scope="col">Observed</th><th scope="col">Result</th><th scope="col">Score</th><th scope="col">Evidence</th><th scope="col">Error</th></tr></thead>
            <tbody>${es(j).map(E=>s`<tr><th scope="row">${E.name}</th><td>${E.expected}</td><td>${E.observed}</td><td>${E.outcome}</td>
              <td>${E.score??"N/A"}</td><td>${E.evidence??"N/A"}</td><td>${E.error??"N/A"}</td></tr>`)}</tbody>
          </table></div>`}
        <pre tabindex="0" role="region" aria-label="Grader test expected and observed results">${j.text}</pre>
      </section>`}
      <${_e} error=${h||k.error||v.error} />
    </div>`}
  </section>`}function rs({proposal:e,pending:t,error:n,outcome:r,onSave:i,onClose:a}){let o=I(null),c=I(null);We(()=>{c.current?.focus()},[]);function l(d){if(d.key==="Escape"&&(d.preventDefault(),a()),d.key!=="Tab")return;let u=[...o.current.querySelectorAll('button:not(:disabled), input:not(:disabled), summary, [tabindex="0"]')].filter(m=>m.checkVisibility({visibilityProperty:!0}));u.length&&(d.shiftKey&&(document.activeElement===u[0]||document.activeElement===c.current)?(d.preventDefault(),u.at(-1).focus()):!d.shiftKey&&document.activeElement===u.at(-1)&&(d.preventDefault(),u[0].focus()))}return s`<div class="modal-scrim"><section ref=${o} class="review-dialog" role="dialog" aria-modal="true" aria-labelledby="save-heading" onKeyDown=${l}>
    <div class="studio-heading"><h2 ref=${c} tabindex="-1" id="save-heading">Review files to create</h2>
      <button class="ck-btn" aria-label="Close save review" onClick=${a}>Close</button></div>
    <p>Only these new files will be created. Existing files are never overwritten. We'll check that the folder and file contents haven't changed before saving.</p>
    <${_e} error=${n} />
    ${r&&!r.complete&&s`<div class="save-outcome" role="status" aria-label="Last save outcome">
      <strong>Save incomplete. Review each file.</strong>
      ${r.files.map(d=>s`<p key=${d.relativePath}>${d.relativePath}: ${d.status} · ${d.message}</p>`)}
      ${r.conflicts.map((d,u)=>s`<p key=${u}>${d.relativePath??d.phase}: ${d.message}</p>`)}
      <p>Your original request and proposed files are kept. Use this same proposal to recover the save.</p>
    </div>`}
    ${e.files.map(d=>s`<details key=${d.relativePath} open><summary>${d.relativePath} · ${d.kind==="fixture"?"Sample input file":"Eval file"} · ${d.content.length} characters</summary>
      <pre class="file-diff" tabindex="0" role="region" aria-label=${`New content for ${d.relativePath}`}>${d.content}</pre>
      <p class="ck-muted">SHA-256 ${d.hash}</p><p>Validation: ${Ft(d)}</p></details>`)}
    <div class="draft-actions">
      <button class="ck-btn" disabled=${!!t} onClick=${a}>Cancel</button>
      <button class="ck-btn ck-btn-primary" disabled=${!!t} onClick=${i}>${t?"Saving\u2026":"Create approved files"}</button>
    </div>
  </section></div>`}function ss(e){return`Selected project search root: ${e}. Only this folder and its descendants are in scope, not its parent or home folder. Recognized paths include SKILL.md anywhere in scope (for example .agents/skills/<name>/SKILL.md, .github/skills/<name>/SKILL.md and .claude/skills/<name>/SKILL.md), *.agent.md, .github/agents/**/*.md, .claude/agents/**/*.md, AGENTS.md, CLAUDE.md, CLAUDE.local.md, GEMINI.md, copilot-instructions.md, *.instructions.md, *.prompt.md, mcp.json, .mcp.json and package.json MCP declarations. Discovery respects .gitignore, skips symbolic links/junctions and directories named node_modules, .git, .worktrees, dist, out, artifacts, .vscode-test, generated, results, .cache or coverage, and has bounded file, directory and size limits. Check Problems for incomplete discovery. Personal/global/installed Plugin skills outside this root were not searched on disk; a host may separately list personal skills.`}function as(e="cli"){return e==="canvas"?"Choose List personal skills or Select personal skill folder\u2026 to switch Canvas to the folder containing that skill's SKILL.md (with your app's approval). New evals are saved in that skill's folder rather than added to your current project.":"To evaluate a personal or installed skill, open the folder containing its SKILL.md as your project. This host cannot add an outside skill as an extra source to the current project. Typing a path or Plugin name does not grant access. Evals will not scan your home folder or Plugin cache, copy the skill or bypass permissions. If you know where its SKILL.md is, explicitly switch the session folder with /cwd to its containing folder, then use /eval create and select that exact discovered skill. Choose the skill's own folder, not your whole home folder or Plugin cache. This switches the project. The skill stays where it is; new evals go to that project's configured destination, or evals if none is configured, rather than your previous project. Proceed only if the host permits access and you trust that folder. If access is declined/unavailable or an installed location is read-only, stop; use the skill's writable source checkout as the selected project, or author from explicit project requirements without claiming that the external skill was selected. Choose Project requirements to describe a task without selecting an individual asset or all assets. That option does not create a skill or agent."}function gt(e){requestAnimationFrame(()=>{document.activeElement===document.body&&e?.isConnected&&e.focus()})}function zn({onKeep:e,onDiscard:t}){let n=I(null),r=I(null);return We(()=>{r.current?.focus()},[]),s`<div class="modal-scrim"><section ref=${n} class="review-dialog" role="alertdialog" aria-modal="true"
    aria-labelledby="discard-folder-heading" aria-describedby="discard-folder-description" onKeyDown=${i=>{if(i.key==="Escape"&&(i.preventDefault(),i.stopPropagation(),e()),i.key!=="Tab")return;let a=[...n.current.querySelectorAll("button")];i.shiftKey&&(document.activeElement===a[0]||document.activeElement===r.current)?(i.preventDefault(),a.at(-1).focus()):!i.shiftKey&&document.activeElement===a.at(-1)&&(i.preventDefault(),a[0].focus())}}>
    <h2 ref=${r} tabindex="-1" id="discard-folder-heading">Discard pending folder changes?</h2>
    <p id="discard-folder-description">You changed the folder selection but haven't loaded it. Keep your changes or discard them to close.</p>
    <div class="draft-actions"><button class="ck-btn" onClick=${e}>Keep changes</button>
      <button class="ck-btn ck-btn-danger" onClick=${t}>Discard changes</button></div>
  </section></div>`}function pn({initialFolder:e,invoke:t,onChoose:n,onClose:r}){let[i,a]=C(e),[o,c]=C(null),[l,d]=C(!1),[u,m]=C(""),[p,h]=C(!1),v=I(null),k=I(null),$=I(null),g=I(0),f=I(e);We(()=>{u&&!l&&$.current?.focus()},[u,l]);async function w(S){let P=++g.current;d(!0),m("");try{let j=await t("browse_folders",S?{folderPath:S}:{});if(g.current!==P)return;P===1&&(f.current=j.folderPath),c(j),a(j.folderPath)}catch(j){if(g.current!==P)return;m(ot(j.message))}finally{g.current===P&&d(!1)}}We(()=>(k.current?.focus(),w(e),()=>{g.current++}),[]);function b(){i!==f.current?h(!0):r()}function T(S){if(S.key==="Escape"&&(S.preventDefault(),S.stopPropagation(),b()),S.key!=="Tab")return;let P=[...v.current.querySelectorAll("button:not(:disabled), input:not(:disabled)")];S.shiftKey&&(document.activeElement===P[0]||document.activeElement===k.current)?(S.preventDefault(),P.at(-1)?.focus()):!S.shiftKey&&document.activeElement===P.at(-1)&&(S.preventDefault(),P[0]?.focus())}return s`<div class="modal-scrim" onPointerDown=${S=>{S.target===S.currentTarget&&b()}}><section ref=${v} id="folder-dialog" class="review-dialog folder-dialog" role="dialog"
    aria-modal="true" aria-labelledby="folder-heading" onKeyDown=${T}>
    <div class="studio-heading"><h2 ref=${k} tabindex="-1" id="folder-heading">Choose a folder</h2>
      <button class="ck-btn" onClick=${b}>Cancel</button></div>
    <form onSubmit=${S=>{S.preventDefault(),w(i)}}>
      <label class="stack-label" for="folder-location">Location</label>
      <div class="project-input-row"><input ref=${$} id="folder-location" name="folderLocation" class="ck-input"
        autocomplete="off" spellcheck="false" value=${i} aria-invalid=${!!u} disabled=${l}
        onInput=${S=>a(S.target.value)} />
        <button class="ck-btn" type="submit" disabled=${l}>Open</button></div>
    </form>
    <div class="folder-controls"><button class="ck-btn" disabled=${l||!o?.parentPath}
      onClick=${()=>w(o.parentPath)}><${U} name="arrow-up" size=${16} />Up one folder</button>
      <span role="status">${l?"Loading folders\u2026":`${o?.folders.length??0} folders`}</span></div>
    ${u&&s`<p class="field-error" role="alert">${u}</p>`}
    <div class="folder-list" role="group" aria-label="Folders" aria-busy=${l}>
      ${o?.folders.map(S=>s`<button key=${S.path} class="folder-row" disabled=${l}
        onClick=${()=>w(S.path)}><${U} name="folder" size=${18} /><span>${S.name}</span><${U} name="chevron-right" size=${16} /></button>`)}
      ${o&&!o.folders.length&&!l&&s`<p class="ck-muted">No subfolders. You can choose this folder or go up.</p>`}
    </div>
    ${o?.limited&&s`<p class="ck-muted">Showing up to 200 folders after checking 512 entries. Open a more specific location to find others.</p>`}
    <button class="ck-btn ck-btn-primary" disabled=${l||!!u||!o||i!==o.folderPath}
      onClick=${()=>n(o.folderPath)}>Choose folder</button>
  </section>${p&&s`<${zn} onKeep=${()=>{h(!1),gt(l?k.current:$.current)}}
    onDiscard=${r} />`}</div>`}function Tt({projectPath:e,invoke:t,beforeSwitch:n,onSwitchPending:r,showScope:i=!0}){let[a,o]=C(!1),[c,l]=C(""),[d,u]=C(null),[m,p]=C(!1),[h,v]=C(!1),k=I(null),$=I(null);return H(()=>{u(null),l("")},[e]),s`<div class="discovery-scope">${i&&s`<p>${ss(e)}</p>`}
    <details><summary>Use a personal or installed skill</summary><p>${as("canvas")}</p>
      ${t&&s`<div class="discovery-scope-actions">
        <button ref=${$} class="ck-btn" type="button" disabled=${m||h}
          onClick=${async()=>{l(""),p(!0);try{u(await t("list_personal_skills",{}))}catch(g){u(null),l(g.message)}finally{p(!1)}}}>List personal skills</button>
        <button ref=${k} class="ck-btn" type="button" disabled=${m||h} onClick=${()=>{l("");try{n?.(),o(!0)}catch(g){l(g.message)}}}>Select personal skill folder…</button>
      </div>`}
      ${d&&!d.available&&s`<p role="status">${d.message}</p>`}
      ${d?.available&&!d.skills.length&&s`<p role="status">No personal skills are listed in this session.</p>`}
      ${d?.available&&d.skills.length>0&&s`<ul class="personal-skill-list">
        ${d.skills.map(g=>s`<li><button class="ck-btn" type="button" disabled=${h}
          onClick=${async()=>{l(""),v(!0);let f=!1;try{n?.(),u(null),r?.(!0),f=!0,await t("select_listed_personal_skill",{id:g.id})}catch(w){f&&w.code==="selection-state-unavailable"?(r?.("reconcile"),f=!1):l(w.message)}finally{f&&r?.(!1),v(!1),gt($.current)}}}>Use ${g.name}</button> <span>${g.source==="personal-copilot"?"Copilot":"Agents"} · ${g.projectPath}</span></li>`)}
      </ul>`}
      ${c&&s`<p class="field-error" role="alert">${c}</p>`}
      ${a&&s`<${pn} initialFolder=${e} invoke=${t}
        onClose=${()=>{o(!1),gt(k.current)}} onChoose=${async g=>{o(!1);let f=!1;try{n?.(),r?.(!0),f=!0,await t("select_personal_skill_project",{projectPath:g})}catch(w){f&&w.code==="selection-state-unavailable"?(r?.("reconcile"),f=!1):l(w.message)}finally{f&&r?.(!1),gt(k.current)}}} />`}
    </details></div>`}function os({groups:e,rows:t,query:n="",renderRow:r}){let i=(e.length?e:[{kind:"*",label:"Assets"}]).map(f=>({...f,rows:t.filter(w=>f.kind==="*"||w.kind===f.kind)})).filter(f=>f.rows.length),[a,o]=C(()=>new Set(i.map(f=>f.kind))),[c,l]=C(""),d=I(new Set(i.map(f=>f.kind))),u=I(null),m=i.map(f=>f.kind).join("|");H(()=>{let f=i.map(w=>w.kind).filter(w=>!d.current.has(w));if(f.length){for(let w of f)d.current.add(w);n.trim()||o(w=>{let b=new Set(w);for(let T of f)b.add(T);return b})}},[m,n]),H(()=>{n.trim()&&o(f=>{let w=m.split("|");if(!w.some(T=>f.has(T)))return f;let b=new Set(f);for(let T of w)b.delete(T);return b})},[n,m]);let p=i.flatMap(f=>[`group-${f.kind}`,...a.has(f.kind)?[]:f.rows.map(w=>w.id)]),h=p.includes(c)?c:p[0];function v(f){o(w=>{let b=new Set(w);return b.has(f)?b.delete(f):b.add(f),b})}function k(f){l(f),u.current.querySelector(`[data-tree-id="${CSS.escape(f)}"]`)?.focus()}function $(f,w,b,T){let S=p.indexOf(w);["ArrowDown","ArrowUp","Home","End"].includes(f.key)?(f.preventDefault(),k(p[f.key==="Home"?0:f.key==="End"?p.length-1:Math.max(0,Math.min(p.length-1,S+(f.key==="ArrowDown"?1:-1)))])):f.key==="ArrowLeft"?(f.preventDefault(),T?a.has(b)||v(b):k(`group-${b}`)):f.key==="ArrowRight"&&T&&(f.preventDefault(),a.has(b)?v(b):p[S+1]&&k(p[S+1]))}let g=i.some(f=>a.has(f.kind));return s`<div class="asset-tree-controls" role="group" aria-label="Asset group controls">
      <button class="ck-btn ck-btn-icon" type="button"
        aria-label=${g?"Expand all":"Collapse all"}
        title=${g?"Expand all":"Collapse all"}
        disabled=${!i.length}
        onClick=${()=>o(g?new Set:new Set(i.map(f=>f.kind)))}>
        <${U} name=${g?"chevrons-up-down":"chevrons-down-up"} size=${15} />
      </button>
    </div><div ref=${u} class="asset-tree" role="tree" aria-label="Assets">
    ${i.map(f=>s`<div role="none" key=${f.kind}>
      <button class="asset-tree-heading" role="treeitem" aria-level="1" aria-expanded=${!a.has(f.kind)}
        aria-owns=${a.has(f.kind)?void 0:`asset-group-${f.kind}`}
        data-tree-id=${`group-${f.kind}`} tabindex=${h===`group-${f.kind}`?0:-1}
        onFocus=${()=>l(`group-${f.kind}`)} onClick=${()=>v(f.kind)}
        onKeyDown=${w=>$(w,`group-${f.kind}`,f.kind,!0)}>
        <${U} name=${a.has(f.kind)?"chevron-right":"chevron-down"} size=${16} />
        <${U} name=${nn(f.kind)} size=${16} /><span>${f.label}</span><span class="nav-count">${f.rows.length}</span>
      </button>
      ${!a.has(f.kind)&&s`<div role="group" id=${`asset-group-${f.kind}`}>
        ${f.rows.map(w=>r(w,{role:"treeitem","aria-level":2,"data-tree-id":w.id,tabindex:h===w.id?0:-1,onFocus:()=>l(w.id),onKeyDown:b=>$(b,w.id,f.kind,!1)}))}
      </div>`}
    </div>`)}
  </div>`}var Hn=e=>Array.isArray(e)?`[${e.join(", ")}]`:e;function is({tags:e={},enabled:t,projectPath:n,invoke:r,onChange:i,onPending:a}){let[o,c]=C(""),[l,d]=C(""),[u,m]=C(null),[p,h]=C(!1),[v,k]=C(""),[$,g]=C({}),[f,w]=C(null),b=I(0),{run:T,pending:S,error:P}=Oe(r),j=JSON.stringify(e);async function M(A=v,Q=$,D){let G=++b.current,X=await T("inspect_draft_organization",{tags:e,...A?{suite:A,choices:Q}:{},...D!==void 0?{expectedConfigurationHash:D}:{}});return G!==b.current?null:(w(X??null),X)}H(()=>{if(w(null),!t){b.current++;return}let A=++b.current,Q=setTimeout(()=>{A===b.current&&M("",{})},200);return()=>{clearTimeout(Q),b.current++}},[j,n,t]),H(()=>{a(!!o.trim()||!!u||p)},[o,u,p]),H(()=>()=>a(!1),[]);function E(A){b.current++,w(null),i(A)}function ce(A,Q){E({...e,[A]:Q}),c(""),d(""),m(null)}function N(){let A=o.indexOf(":"),Q=o.slice(0,A).trim(),D=o.slice(A+1).trim();if(A<1||!Q||!D||Q.length>120||D.length>120){d("Enter a tag as key: value, using at most 120 characters for each.");return}if(!Object.hasOwn(e,Q)&&Object.keys(e).length>=16){d("The form supports up to 16 tag keys. Use the source editor for larger definitions.");return}if(Object.hasOwn(e,Q)&&e[Q]!==D){m({key:Q,value:D});return}ce(Q,D)}async function we(A){k(A),g({}),await M(A,{},f?.configurationHash)}function ge(){b.current++,h(!1),k(""),g({})}let de=f?.proposal,Te=f?.suites.find(A=>A.name===v),le=t&&!S;return s`<div class="authoring-tags">
    <div class="tag-label-row"><label for="authoring-tag-input">Tags <span class="ck-muted">optional</span></label>
      <button class="tag-shortcut" type="button" disabled=${!le} aria-expanded=${p}
        onClick=${async()=>{h(!0),k(""),g({}),await M("",{})}}>Use tags from a suite…</button></div>
    <p class="ck-muted">Optional key: value labels (such as <code>area: dns</code>) used to organize evals and select groups of evals to run. Leave blank if you do not need tags.</p>
    <div class="tag-input" role="group" aria-label="Draft tags">
      ${Object.entries(e).map(([A,Q])=>s`<span class="draft-tag" key=${A}><span>${A}: ${Hn(Q)}</span>
        <button type="button" aria-label=${`Remove tag ${A}`} disabled=${!t||p}
          onClick=${()=>{let D={...e};delete D[A],E(D)}}>×</button></span>`)}
      <input id="authoring-tag-input" aria-label="Add a draft tag" placeholder="Add key: value, then Enter" value=${o}
        disabled=${!t||p} onInput=${A=>{c(A.target.value),d(""),m(null)}}
        onKeyDown=${A=>{A.key==="Enter"&&(A.preventDefault(),N())}} />
      ${o.trim()&&s`<button class="ck-btn" type="button" disabled=${!t||p} onClick=${N}>Add tag</button>`}
    </div>
    ${l&&s`<p role="alert">${l}</p>`}
    ${u&&s`<div class="tag-replacement" role="status">Replace ${u.key}: ${Hn(e[u.key])} with ${u.value}?
      <button class="ck-btn" type="button" disabled=${!t} onClick=${()=>ce(u.key,u.value)}>Replace tag value</button>
      <button class="ck-btn" type="button" onClick=${()=>{m(null),c("")}}>Keep existing value</button></div>`}
    ${p&&s`<section class="suite-tag-helper" aria-label="Use tags from a suite filter">
      <div class="tag-label-row"><strong>Use tags from a suite filter</strong><button type="button" class="tag-shortcut"
        aria-label="Close suite tag helper" onClick=${ge}>Close</button></div>
      <p class="ck-muted">A suite filter is a set of tag values used to select a group of evals. Review tags to add or replace; this does not assign the eval to a suite.</p>
      <label class="stack-label">Copy filter from<select class="ck-select" value=${v} disabled=${!le||!f}
        onChange=${A=>we(A.target.value)}><option value="">Choose a suite</option>
        ${f?.suites.map(A=>s`<option key=${A.name} value=${A.name}>${A.name}</option>`)}</select></label>
      ${f&&!f.suites.length&&s`<p class="ck-muted">No supported suite filters are available. Tags remain optional.</p>`}
      ${Te&&s`<div class="suite-tag-choices">${Object.entries(Te.filter).map(([A,Q])=>{let D=Array.isArray(Q)?Q:[Q];return s`<div key=${A}><code>${A}</code>${D.length===1?s`<code>${D[0]}</code>`:s`<label class="stack-label">Value for ${A}<select class="ck-select" disabled=${!le} value=${Object.hasOwn($,A)?$[A]:""}
            onChange=${async G=>{let X={...$,[A]:G.target.value};G.target.value||delete X[A],g(X),await M(v,X,f.configurationHash)}}><option value="">Choose a value if needed</option>${D.map(G=>s`<option key=${G} value=${G}>${G}</option>`)}</select></label>`}</div>`})}</div>`}
      ${de&&s`<div class="tag-change-preview" role="status">
        ${de.changes.map(A=>s`<p key=${A.key}>${A.before===null?"Add":"Replace"} <code>${A.key}</code>:
          ${A.before!==null?`${Hn(A.before)} \u2192 `:""}${A.after}</p>`)}
        ${!de.changes.length&&!de.requiredChoices.length&&s`<p>No tag changes needed.</p>`}
        ${de.requiredChoices.map(A=>s`<p key=${A.key}>Choose one allowed value for ${A.key}.</p>`)}
        <p class="ck-muted">Other tags are kept. ${de.hasFileSelectors?"This suite also selects files; membership is not confirmed.":"Tag matches do not confirm native suite membership."}</p>
      </div>`}
      <div class="suite-tag-actions"><button class="ck-btn" type="button" onClick=${ge}>Cancel</button>
        <button class="ck-btn ck-btn-primary" type="button" disabled=${!le||!de?.ready}
          onClick=${async()=>{let A=await M(v,$,f.configurationHash);if(!A?.proposal?.ready)return;let Q=A.suites.find(G=>G.name===v).filter,D=Object.fromEntries(Object.keys(Q).map(G=>[G,A.proposal.tags[G]]));i(A.proposal.tags,A.configurationHash,D),h(!1),k(""),g({})}}>Apply tags to draft</button></div>
    </section>`}
    <div class="tag-matches" role="status"><span class="ck-muted">Matching suite filters</span>
      ${t?f?f.matches.length?f.matches.map(A=>s`<span class="suite-filter-match" key=${A.name}>${A.name}${A.hasFileSelectors?" (file rules apply)":""}</span>`):s`<span class="ck-muted">None for the current form tags.</span>`:s`<span class="ck-muted">${S?"Reading filters\u2026":"Unavailable until filters are refreshed."}</span>`:s`<span class="ck-muted">Trust the project to inspect filters.</span>`}
      ${f?.matches.length>0&&s`<span class="ck-muted">Tag matches only; actual inclusion is not confirmed.</span>`}
    </div>
    ${f?.guidance.slice(2).map((A,Q)=>s`<p class="ck-muted" key=${Q}>${A}</p>`)}
    ${P&&s`<button type="button" class="ck-btn" disabled=${!le} onClick=${()=>{k(""),g({}),M("",{})}}>Refresh suite filters</button>`}
    <${_e} error=${P} />
  </div>`}function ls({state:e,invoke:t,conflict:n,pending:r,lockedDraft:i,projectAssets:a,draftEpoch:o,lastSynced:c,lastEpoch:l,setFiles:d,setDirectoryChoice:u,setSelected:m,setDirty:p,setConflict:h,setSyncIssue:v,sync:k,beforeSwitch:$,onSwitchPending:g}){return s`
    ${e.closedSave&&s`<div class="studio-warning" role="status">
      Earlier save history (read only): ${e.closedSave.saving?"Waiting for the original save outcome.":e.closedSave.saveOutcome?.complete?"The original save completed.":e.closedSave.saveAttempted?"The original save requires explicit recovery.":"The original save did not start."}
      <div>Request ${e.closedSave.request?.requestId} · Proposal ${e.closedSave.proposal?.proposalId}</div>
      ${e.closedSave.proposal?.files.map(f=>s`<div>${f.relativePath}:
        ${e.closedSave.saveOutcome?.files?.find(w=>w.relativePath===f.relativePath)?.status??"Outcome not recorded"}</div>`)}
      This doesn't renew the old request's permission to save files.
    </div>`}
    ${e.draft.request?.stateUnavailable&&s`<div class="studio-warning" role="status">
      The runtime's retained validation state is unavailable. Preserve request ${e.draft.request.requestId}
      for recovery; don't replace it with new files.
    </div>`}
    ${e.draft.request?.recoveryRequired&&s`<div class="studio-warning" role="status">
      This request still needs cleanup or save recovery. You can't propose new files yet.
    </div>`}
    ${n&&s`<div class="studio-warning" role="status">The shared draft changed while you were editing. Your local text is retained.
      <button class="ck-btn" disabled=${!!r} onClick=${()=>{c.current=e.draft.revision,d(e.draft.files),l.current=o,u(e.draft.outputDirectory??""),m(0),p(!1),h(!1),v("")}}>Load shared draft</button>
      <button class="ck-btn" disabled=${!!r||i} onClick=${()=>k(!0)}>Keep my edits</button></div>`}
    ${e.discovery?.status==="ready"&&s`<${Tt} projectPath=${e.projectPath} invoke=${t}
      showScope=${!a.length} beforeSwitch=${$} onSwitchPending=${g} />`}
    ${e.draft.recoveryNotice&&s`<${_e} error=${e.draft.recoveryNotice} />`}`}function cs({state:e,invoke:t,run:n,draftEpoch:r,files:i,setFiles:a,setSelected:o,setDirty:c,setDiscard:l,setSyncIssue:d,setReview:u,setDirectoryChoice:m,guided:p,setGuided:h,replace:v,setReplace:k,tagsPending:$,setTagsPending:g,pending:f,lockedDraft:w,conflict:b,ready:T,canRetarget:S,isStarterDraft:P,source:j,copyNotice:M,setPreparedGuided:E,allProjectFiles:ce,projectAssets:N,projectEvals:we,outputDirectory:ge,directoryChoice:de,hasBoundRequest:Te,hasBoundHandoff:le,version:A,lastSynced:Q,lastEpoch:D,sharedEpoch:G,hasHandoff:X,retargetDraft:Y}){return s`<form class="guided-create" aria-label="Create eval from expected response" onSubmit=${async J=>{if(J.preventDefault(),w||b||$)return;if(i.length&&!P&&!v){k(!0);return}if(f)return;let ee=A.current,W=Q.current,V=D.current,K={...p};delete K.suiteFilterTags;let Z=await n("compose_eval",K);!Z||A.current!==ee||Q.current!==W||D.current!==V||G.current!==V||(A.current++,a(Z.files),o(0),c(!0),l(!1),k(!1),d(""),u(!1),E(JSON.stringify(p)))}}>
      <div class="guided-example"><h3>Eval details</h3>
        <button class="ck-btn" type="button" onClick=${()=>{h({name:"Friendly greeting",task:"Greet a new teammate in one short sentence. Include the words Welcome aboard.",expected:"Welcome aboard"}),k(!1)}}>Load example</button>
        ${j?.kind==="eval"&&j.text&&s`<button class="ck-btn" type="button" aria-describedby="source-copy-notice" disabled=${!!f||w||b||j.sourceUnchanged!==!0||j.stale} onClick=${()=>{if(!(w||j.sourceUnchanged!==!0||j.stale)){if(i.length&&!P&&!v){k(!0);return}A.current++,c(!0),l(!1),k(!1),u(!1),d(""),a([{relativePath:Mn(j.relativePath),kind:"eval",content:j.text}]),o(0)}}}>${v&&!P?"Confirm load selected eval":"Load selected eval into editor"}</button>`}
        <p id="source-copy-notice" role="status" class=${M?"":"sr-only"}>${M}</p>
      </div>
      <label class="stack-label">Eval name<input class="ck-input" name="eval-name" value=${p.name} maxLength="120"
        onInput=${J=>{k(!1),h(ee=>({...ee,name:J.target.value}))}} /></label>
      <div class="guided-field">
      <label class="stack-label target-asset-picker">Project file or eval to base this on (optional)
        <select class="ck-select" name="target-asset" value=${f?void 0:e.selectedAssetId??""}
          aria-describedby="guided-source-help"
          disabled=${!S}
          onChange=${async J=>{let ee=J.target.value,W=ce.find(De=>De.id===ee),V=A.current,K=P;if(e.draft.request&&!w&&!await Y())return;let Z=Q.current,re=D.current,Se=await n("preview_asset",{id:ee});Se&&W&&A.current===V&&Q.current===Z&&D.current===re&&G.current===re&&(k(!1),h(De=>({...De,name:De.name==="New eval"?W.kind==="eval"?`${W.name} copy`:`${W.name} eval`:De.name})),W.kind==="eval"&&Se.sourceUnchanged===!0&&!Se.stale&&typeof Se.text=="string"&&K&&(A.current++,c(!0),a([{relativePath:Mn(W.relativePath),kind:"eval",content:Se.text}]),o(0)))}}>
          <option value="">General eval (no specific project file)</option>
          ${N.length>0&&s`<optgroup label="Project skills, instructions & agents">
            ${N.map(J=>s`<option value=${J.id} key=${J.id}>${J.name} · ${J.kind} · ${J.relativePath}</option>`)}
          </optgroup>`}
          ${we.length>0&&s`<optgroup label="Existing project evals">
            ${we.map(J=>s`<option value=${J.id} key=${J.id}>${J.name} · eval · ${J.relativePath}</option>`)}
          </optgroup>`}
        </select>
      </label>
      <p id="guided-source-help" class="ck-muted">A general eval uses project requirements, not every asset, and does not create a new skill or agent.</p>
      </div>
      ${e.draft.request&&(e.draft.request.targetId??"")!==(e.selectedAssetId??"")&&s`
        <button class="ck-btn" type="button" disabled=${!S||b} onClick=${async()=>{let J=Q.current,ee=D.current;e.selectedAssetId&&!await n("preview_asset",{id:e.selectedAssetId})||Q.current!==J||D.current!==ee||G.current!==ee||X.current||await Y()}}>Use selected source for this draft</button>`}
      <label class="stack-label guided-section">Task<textarea class="ck-textarea" name="eval-task" rows="3" maxLength="8000" value=${p.task}
        placeholder="What should the AI do?" onInput=${J=>{k(!1),h(ee=>({...ee,task:J.target.value}))}} /></label>
      <div class="guided-field">
      <label class="stack-label">Expected response<textarea class="ck-textarea" name="eval-expected" rows="3" maxLength="4000" value=${p.expected}
        aria-describedby="guided-expected-help"
        placeholder="Text the response must contain" onInput=${J=>{k(!1),h(ee=>({...ee,expected:J.target.value}))}} /></label>
      <p id="guided-expected-help" class="ck-muted">Text the response must contain.</p>
      </div>
      <div class="guided-section">
      <${is} key=${`${e.projectPath}:${r}`} tags=${p.tags??{}} enabled=${T&&!w&&!b}
        projectPath=${e.projectPath} invoke=${t} onPending=${g}
        onChange=${(J,ee,W)=>{k(!1),h(V=>{let K={...V,tags:J};ee!==void 0&&(K.expectedConfigurationHash=ee,K.suiteFilterTags=W??J);let Z=K.suiteFilterTags??V.tags??{};return Object.entries(Z).some(([re,Se])=>Object.hasOwn(J,re)&&JSON.stringify(J[re])===JSON.stringify(Se))||(delete K.expectedConfigurationHash,delete K.suiteFilterTags),K})}} />
      </div>
      <div class="guided-field">
      <label class="stack-label">Eval directory (optional)<input class="ck-input" name="draft-directory" maxLength="180"
        aria-describedby="guided-directory-help"
        value=${ge??de} disabled=${w||Te||le||!!f}
        placeholder="Project-relative directory; leave blank to use project settings"
        onKeyDown=${J=>{J.key==="Enter"&&J.preventDefault()}}
        onInput=${J=>{w||Te||le||(A.current++,m(J.target.value),c(!0),u(!1),d(""))}} /></label>
      <p id="guided-directory-help" class="ck-muted">Choose before checking or asking Copilot. The destination stays fixed until you discard this draft.</p>
      </div>
      <p class="guided-preset ck-muted"><strong>Starter preset: 1 prompt · 1 attempt · 60 seconds · copilot-sdk</strong>
        <span>Output-contains check. Edit it or ask Copilot for other tests. This preset doesn't keep settings from an existing eval.</span></p>
      <div class="guided-footer">
        <p class="ck-muted">${$?"Finish adding tags or close the suite helper before building.":"Builds an editable draft with these tags and text check. No AI requests, file changes or suite settings changes."}</p>
        <button class="ck-btn ck-btn-primary" type="submit" disabled=${$||!!f&&(v||!i.length||P)||w||b||!p.name.trim()||!p.task.trim()||!p.expected.trim()}>
          ${v?"Replace editor draft":"Build eval draft"}</button>
      </div>
      ${v&&s`<p class="studio-warning" role="status">This replaces the current draft in the editor. Project files won't change.</p>`}
    </form>`}function ds({state:e,run:t,files:n,setFiles:r,setDirectoryChoice:i,setSelected:a,setDirty:o,setConflict:c,setDiscard:l,setReview:d,setSyncIssue:u,dirty:m,blocked:p,lockedDraft:h,conflict:v,ready:k,canRetarget:$,canRetryDraft:g,retryingSave:f,stepReadyToSave:w,stepStatus:b,syncIssue:T,pending:S,discard:P,showDiagnostics:j,setShowDiagnostics:M,saveButton:E,draftEpoch:ce,version:N,lastSynced:we,lastEpoch:ge,sharedEpoch:de,discardRevision:Te,discardEpoch:le,applying:A,sync:Q,retargetDraft:D,validate:G,retryDraft:X,onSetup:Y,onActivity:J,error:ee}){return s`
        <div class="draft-steps" role="status" aria-label="Draft workflow progress">
          <span class=${`draft-step ${!w&&!e.draft.saveOutcome?.complete?"active":"done"}`}>1. Edit draft</span>
          <span class=${`draft-step ${w?"active":e.draft.saveOutcome?.complete?"done":""}`}>2. Check format</span>
          <span class=${`draft-step ${e.draft.saveOutcome?.complete?"active":""}`}>3. Review & save</span>
          <span class="draft-step-hint ck-muted">${b}</span>
        </div>
        <div class="draft-actions">
          ${T&&s`<button class="ck-btn" disabled=${!!S||h||v} onClick=${()=>Q()}>Retry sync</button>`}
          ${e.draft.request?.canRestart&&s`<button class="ck-btn" disabled=${!k||!$||v||!!T}
            onClick=${D}>Start fresh request</button>`}
          <button class="ck-btn ck-btn-primary" aria-describedby="draft-blocked-reason" disabled=${!!p||h||!n.length||g||e.draft.saving||e.draft.closed||e.draft.saveAttempted||e.draft.request?.stateUnavailable||e.draft.request?.recoveryRequired} onClick=${G}>${S==="validate_draft"?"Checking\u2026":"Check draft"}</button>
          ${g&&s`<button class="ck-btn" disabled=${!!p} onClick=${X}>${f?"Retry draft":"Retry edited draft"}</button>
            <p class="ck-muted">${e.draft.request?.busy&&!e.draft.request?.canRetry?"Another authoring request may still be processing. Wait for it to finish, then retry; the runtime will check this request again. ":""}${f?"Keep the draft and resolve the reported cause. The next check uses current source references, including any changes.":"Prepare new files for the same original source."} This doesn't run an eval or model, or recover a partially written save.</p>`}
          <button ref=${E} class="ck-btn" aria-describedby="draft-blocked-reason" disabled=${!!p||m||!e.draft.proposal?.canCommit||g||e.draft.saving||e.draft.closed} onClick=${()=>d(!0)}>Review & save</button>
          ${e.draft.conversation?s`<button class="ck-btn" type="button" disabled=${!!S}
            title="Dismiss this Canvas preview without stopping or discarding your work in chat."
            onClick=${()=>t("clear_draft",{expectedRevision:e.draft.revision,expectedEpoch:ce})}>Dismiss preview</button>`:s`<button class="ck-btn" disabled=${!!S||h||v} onClick=${async()=>{if(!P){Te.current=we.current,le.current=ge.current,l(!0);return}let W=N.current,V=le.current;A.current=!0;try{let K=await t("clear_draft",{expectedRevision:Te.current,...V?{expectedEpoch:V}:{}});K&&ge.current===V&&(de.current===V||K.epoch===de.current)&&(K.epoch===void 0||!V||K.epoch===V)&&(K.epoch!==void 0&&(ge.current=K.epoch),we.current=K.revision??e.draft.revision,c(!1),N.current===W&&(r([]),i(""),a(0),o(!1)),l(!1),d(!1),u(""))}finally{A.current=!1}}}>${P?"Confirm discard draft":"Discard"}</button>`}
        </div>
        <p id="draft-blocked-reason" role="status" class="ck-muted">${p||(n.length?g?`Choose ${f?"Retry draft":"Retry edited draft"}, then choose Check draft again.`:w?"Review the exact checked files, then approve Save separately.":"Edits sync in memory only. Choose Check draft before Review & save.":"Add a draft file before checking or saving.")}</p>
        ${e.draft.proposal&&(()=>{let W=!e.draft.proposal.canCommit&&e.draft.proposal.conflicts.some(V=>V.code==="validation-deadline");return s`<div class=${`draft-validation ${e.draft.proposal.canCommit&&!f?"accepted":"rejected"}`}>
          <strong>${f?"Checked proposal needs review":e.draft.proposal.canCommit?"Accepted for file creation":W?"Validation timed out (eval was not rejected as invalid)":"Not ready to save"}</strong>
          <p>${f?"Review the reported cause and check the draft again before saving.":e.draft.proposal.canCommit?"These files passed the format check. Runner compatibility is shown for reference and doesn't block saving. Running still needs separate compatibility checks and approval.":W?"Validation timed out after 15 seconds without a verdict. The eval may still be valid. Retry the unchanged proposal, view diagnostics, or open runner settings.":"Fix the listed conflicts, then retry these proposed files when allowed. This doesn't run the eval."}</p>
          ${W&&s`<div class="draft-actions">
            ${g&&s`<button class="ck-btn ck-btn-primary" type="button" disabled=${!k||!!S||v} onClick=${X}>Retry validation</button>`}
            <button class="ck-btn" type="button" onClick=${()=>M(V=>!V)}>${j?"Hide diagnostics":"View diagnostics"}</button>
            <button class="ck-btn" type="button" onClick=${()=>Y?Y():document.getElementById("btn-setup")?.click()}>Open runner settings</button>
          </div>`}
          ${e.draft.proposal.conflicts.map((V,K)=>s`<p key=${K} role="status">${V.relativePath??V.phase}: ${V.message}</p>`)}
          ${!m&&e.draft.proposal.organization&&s`<details><summary>Proposed tag and suite alignment</summary>
            ${e.draft.proposal.organization.map((V,K)=>s`<p key=${K}>${V}</p>`)}</details>`}
          ${e.draft.proposal.files.map(V=>s`<details key=${V.relativePath} open=${j||void 0}><summary>${V.relativePath}: ${Ft(V)}</summary>
            <pre tabindex="0">${V.validation?.diagnosticText??(V.kind==="fixture"?"Fixture bytes only; no script is run.":"Validation has not run for this definition.")}</pre>
            ${V.support&&s`<p>Runner compatibility (for reference): ${Yr(V.support)}</p>
              <pre tabindex="0">${[`Technical runner profile: ${V.support.profile}`,...V.support.diagnostics].join(`
`)}</pre>`}</details>`)}
        </div>`})()}
        ${e.draft.saveOutcome&&s`<div class="save-outcome" role="status"><strong>${e.draft.saveOutcome.complete?"Approved files created.":"Save incomplete. Review each file."}</strong>
          ${e.draft.saveOutcome.files.map(W=>s`<p key=${W.relativePath}>${W.relativePath}: ${W.status} · ${W.message}</p>`)}
          ${e.draft.saveOutcome.conflicts.map((W,V)=>s`<p key=${V}>${W.message}</p>`)}
          ${e.draft.saveOutcome.complete&&e.draft.saveOutcome.organization&&s`<details open><summary>Saved tag and suite alignment</summary>
            ${e.draft.saveOutcome.organization.map((W,V)=>s`<p key=${V}>${W}</p>`)}</details>`}
          ${e.draft.saveOutcome.complete&&s`<button class="ck-btn" onClick=${J}>Next: choose an eval to run</button>`}</div>`}
        <${_e} error=${ee} />`}function us({state:e,message:t,setMessage:n,sendMessage:r,sendBlocked:i,showSendNotice:a,lockedDraft:o,conflict:c,dirty:l,pending:d,chatEnd:u,run:m}){return s`<aside class="copilot-panel" aria-label="Copilot draft assistant">
        <div class="copilot-heading"><${U} name="sparkles" size=${20} /><strong>Copilot</strong></div>
        <div class=${`chat-messages ${e.chat.messages.length?"":"chat-empty"}`} role="log" aria-live="polite" aria-label="Draft conversation">
          ${!e.chat.messages.length&&s`<div class="chat-welcome"><h3>Need help shaping your eval?</h3>
            <p>Tell Copilot what you want the AI to do and what a good response looks like. It will suggest eval files for you to review.</p>
            ${["Create an eval for this skill using a realistic request.","Create an eval that checks for an exact response.","Help me improve how this eval scores responses."].map(p=>s`
              <button class="prompt-chip" disabled=${o||!!d} onClick=${()=>n(p)}>${p}</button>`)}</div>`}
          ${e.chat.messages.map(p=>s`<article class=${`chat-message ${p.role}`} key=${p.id}>
            <strong>${p.role==="user"?"You":"Copilot"}</strong><p>${p.text}</p>
            ${p.proposed?.length&&s`<details class="ai-proposal"><summary>Review ${p.proposed.length} proposed files</summary>
              ${p.proposed.map(h=>s`<details key=${h.relativePath}><summary>${h.relativePath}</summary><pre tabindex="0">${h.content}</pre></details>`)}
              <button class="ck-btn" disabled=${o||c||l||!!d||p.draftRevision!==e.draft.revision}
                onClick=${()=>m("accept_proposal",{id:p.id})}>Use reviewed proposal as draft</button>
              ${l&&s`<p class="ck-muted">Apply or discard local editor changes before accepting a proposal.</p>`}</details>`}
          </article>`)}
          ${["approval","thinking"].includes(e.chat.status)&&s`<p class="thinking" role="status">${e.chat.status==="approval"?"Waiting for AI request approval\u2026":"Copilot is preparing a response\u2026"} <button class="ck-btn" onClick=${()=>m("cancel_chat")}>Discard response</button></p>`}
          <div ref=${u}></div>
        </div>
        <form class="chat-composer" onSubmit=${async p=>{p.preventDefault(),await r()}}>
          ${e.draft.conversation&&!a&&s`<div class="retained-conversation-help">
            <p class="retained-conversation-warning" role="status"><${U} name="triangle-alert" size=${16} />
              <span>${e.draft.conversation.status==="sent"?"Complete the previous eval in chat.":"Check the previous eval in chat."}</span></p>
            <button class="ck-btn" type="button" disabled=${!!d}
              title="Start a new draft without deleting saved files or cancelling your work in chat."
              onClick=${async()=>{(await m("clear_draft",{expectedRevision:e.draft.revision,expectedEpoch:e.draft.epoch}))?.cleared&&n("")}}>Start another eval</button>
          </div>`}
          <label class="sr-only" for="author-message">Describe the eval to build</label>
          <textarea class="ck-textarea" id="author-message" name="author-message" autocomplete="off" rows="3" value=${t} maxLength="8000" readonly=${o||!!d}
            placeholder="Describe the task and expected outcome…" onInput=${p=>n(p.target.value)}></textarea>
          <p class="ck-muted">Uses AI credits. Eval runs need separate approval.</p>
          <button class="ck-btn ck-btn-primary" type="submit" aria-describedby="send-blocked-reason" disabled=${!!i||o||!!d||!t.trim()||["approval","thinking"].includes(e.chat.status)}>Send to Copilot</button>
          <p id="send-blocked-reason" role="status" class=${a?"conversation-handoff-notice":"ck-muted"}>
            ${a?s`<${U} name="message-square" size=${16} /><span>${e.draft.conversation.status==="sent"?"Your message has been sent to Copilot. You can now finish your eval in chat.":"We couldn't confirm your message reached Copilot. Check chat before trying again."}</span>`:e.draft.conversation?.status==="pending"?"Previous delivery couldn't be confirmed. Check chat before trying again.":i||(o?"Review & save retries the same checked files. Editing and AI stay blocked until you recover that save.":["approval","thinking"].includes(e.chat.status)?"Wait for Copilot or discard the pending response.":"")}</p>
          <${_e} error=${e.chat.error} />
        </form>
      </aside>`}function ps(e){return!!(e.saveAttempted||e.saveOutcome&&!e.saveOutcome.complete&&e.request?.canRetry!==!0)}function fn(e){return e.request?.busy===!0&&e.request?.canRetry!==!0}function fs(e){return!!(e.saveOutcome&&!e.saveOutcome.complete&&!e.saving&&!e.saveAttempted&&!e.request?.stateUnavailable&&!e.request?.recoveryRequired&&(e.request?.canRetry===!0||fn(e)))}function hs({label:e,name:t,value:n,onChange:r,single:i=!1,disabled:a=!1}){let o=n.split(`
`),c=(l,d)=>r(o.map((u,m)=>m===l?d:u).join(`
`));return s`<div class="config-path-group">
    <div class="config-path-heading"><span>${e}</span>
      ${!i&&s`<button class="config-text-button" type="button" disabled=${a}
        aria-label=${`Add ${e.toLowerCase()}`} onClick=${()=>r(`${n}
`)}>+ Add</button>`}</div>
    ${o.map((l,d)=>s`<div class="config-path-row" key=${d}>
      <div class="config-path-input"><${U} name=${t==="evalFilenames"?"file-code":"folder"} size=${14} />
        <input class="ck-input" name=${`setup-${t}-${d}`} aria-label=${`${e} ${d+1}`}
          value=${l} disabled=${a} spellcheck="false" autocomplete="off" onInput=${u=>c(d,u.target.value)} /></div>
      ${!i&&o.length>1&&s`<button class="ck-btn ck-btn-icon" type="button" disabled=${a}
        aria-label=${`Remove ${e.toLowerCase()} ${d+1}`} onClick=${()=>r(o.filter((u,m)=>m!==d).join(`
`))}>×</button>`}
    </div>`)}
  </div>`}function Un({filename:e,subtitle:t,text:n,exact:r=!1,ci:i=!1}){return s`<aside class="config-preview" aria-label="Configuration preview">
    <div class="eyebrow">Preview your changes</div>
    <section class="config-file-summary">
      <div class="config-summary-title"><${U} name="file-code" size=${20} /><div><strong><code>${e}</code></strong><p>${t}</p></div>
        <span class="ck-badge">${r?"Reviewed":"Draft"}</span></div>
      <div class="config-summary-facts"><div><small>Scope</small><span>${i?"GitHub Actions":"Project configuration"}</span></div>
        <div><small>Effect</small><span>File changes only</span></div></div>
    </section>
    <section class="config-code-card">
      <header><span><${U} name="file-code" size=${14} />YAML preview</span><span>${r?"Exact proposal":"Working draft"}</span></header>
      <pre tabindex="0" aria-label="Configuration YAML preview">${n.split(`
`).map((a,o)=>s`<span class="config-code-line"><span aria-hidden="true">${o+1}</span><code>${a||" "}</code></span>`)}</pre>
      <footer>${r?"This is the file to save. Your app will still ask for approval.":i?"Workflow outline only. Review builds the full file and checks that the source hasn't changed.":"Edited fields only, not a complete file. Review preserves existing YAML."}</footer>
    </section>
    <div class="config-safety"><${U} name="shield-check" size=${17} /><div><strong>Nothing runs when you configure.</strong>
      <p>${i?"Saving does not commit or run this workflow. Publishing it may enable future runs under the selected triggers.":"Reading these settings doesn't check whether they work. Saving doesn't install a runner, set up CI, or run evals."}</p></div></div>
  </aside>`}function ms({proposal:e,ci:t,pending:n,error:r,notice:i,onSave:a,onClose:o}){let c=I(null),l=I(null);We(()=>{let u=document.activeElement;return l.current?.focus(),()=>{u?.isConnected&&u.focus()}},[]);function d(u){if(u.key==="Escape"&&!n&&(u.preventDefault(),o()),u.key!=="Tab")return;let m=[...c.current.querySelectorAll('button:not(:disabled), summary, [tabindex="0"]')].filter(p=>p.checkVisibility({visibilityProperty:!0}));if(!m.length){u.preventDefault();return}u.shiftKey&&(document.activeElement===m[0]||document.activeElement===l.current)?(u.preventDefault(),m.at(-1).focus()):!u.shiftKey&&(document.activeElement===m.at(-1)||document.activeElement===l.current)&&(u.preventDefault(),m[0].focus())}return s`<div class="modal-scrim config-modal"><section ref=${c} class="review-dialog config-review"
    role="dialog" aria-modal="true" aria-labelledby="config-review-title" onKeyDown=${d}>
    <header class="config-review-header"><div><h2 id="config-review-title" ref=${l} tabindex="-1">
      ${t?"Review CI workflow changes":"Review exact .vally.yaml changes"}</h2>
      <p>Review the full file. Your app will ask for separate approval before saving.</p></div>
      <button class="ck-btn ck-btn-icon" disabled=${n} onClick=${o} aria-label="Close configuration review">×</button></header>
    <div class="config-review-body" aria-label=${t?"CI workflow change review":"Project configuration change review"}>
      <p><code>${e.relativePath}</code></p>
      ${e.diff&&s`<details open><summary>Exact diff</summary><pre tabindex="0">${e.diff}</pre></details>`}
      <details><summary>Before</summary><pre tabindex="0">${e.before??"(new file)"}</pre></details>
      <details open><summary>After</summary><pre tabindex="0">${e.after}</pre></details>
      ${e.sha256&&s`<p class="config-hash">SHA-256: ${e.sha256}</p>`}
      ${e.notices?.map(u=>s`<p class="config-review-notice">${u}</p>`)}
      <${_e} error=${r} />
      ${i&&s`<p role="status">${i}</p>`}
    </div>
    <footer class="config-review-footer"><p>Only this file changes. No eval runs.</p><div>
      <button class="ck-btn" disabled=${n} onClick=${o}>Back to editing</button>
      <button class="ck-btn ck-btn-primary" disabled=${n} onClick=${a}>
        ${n?"Waiting for approval\u2026":t?"Save reviewed workflow":"Save reviewed configuration"}</button>
    </div></footer>
  </section></div>`}var Ht=e=>e.split(/\r?\n/).map(t=>t.trim()).filter(Boolean),Wn=()=>({evals:"",skills:"",results:"",evalFilenames:""}),Vn=(e,t=[])=>Object.entries(e).map(([n,r])=>({key:n,values:Array.isArray(r)?[...r]:[r],array:Array.isArray(r)&&!(r.length===1&&t.includes(n))})),Ut=e=>Object.fromEntries(e.map(t=>[t.key,t.array||t.values.length>1?t.values:t.values[0]])),vs=(e,t)=>{let n=r=>Object.entries(r).sort(([i],[a])=>i.localeCompare(a)).map(([i,a])=>[i,Array.isArray(a)?a:[a]]);return JSON.stringify(n(e))===JSON.stringify(n(t))};function Wt(e){let t=JSON.parse(e);if(!t||typeof t!="object"||Array.isArray(t)||Object.entries(t).some(([n,r])=>!n.length||!(typeof r=="string"?r.length:Array.isArray(r)&&r.length&&r.every(i=>typeof i=="string"&&i.length))))throw new Error("Give each tag a text value or a list of text values. Don't leave values or lists empty.");return t}function gs({state:e,invoke:t,section:n="project",onSection:r}){let[i,a]=C(null),[o,c]=C(Wn),[l,d]=C([]),[u,m]=C(""),[p,h]=C(""),[v,k]=C(""),[$,g]=C([]),[f,w]=C([]),[b,T]=C(!1),[S,P]=C("{}"),[j,M]=C(""),[E,ce]=C(null),[N,we]=C(null),[ge,de]=C(""),[Te,le]=C("manual-and-pull-requests"),[A,Q]=C("evals.yml"),[D,G]=C("preserve"),[X,Y]=C(null),[J,ee]=C(!0),[W,V]=C(""),[K,Z]=C(""),[re,Se]=C("ready"),[De,He]=C(null),[Ce,$e]=C(!1),[je,be]=C(!1),ae=I(null),Ee=I(0),Me=I(Promise.resolve()),Ze=I(""),Ne=I(0),ue=I(0),me=I({choice:"",name:""}),Qe=I(null),xe=I(null),ye=I(null),ie=I(!1),{run:fe,pending:F,error:Be,reset:dt}=Oe(t,{returnCancellation:!0}),Fe=i?.declarations?.suites??[],ke=Fe.filter(R=>R.inspectable),_=u.startsWith("existing:")?Fe[Number(u.slice(9))]:null,q=l.length>0||$.length>0||u==="new"&&!N,te=De!==null||!!F&&re!=="refreshing",Ie=De===null&&(i?.state==="missing"||i?.state==="available"),st=J&&e.trusted&&i?.state==="available"&&i.complete&&ke.some(R=>R.name===ge)&&!q&&re==="ready",Xe=JSON.stringify({paths:o,editedPaths:l,suiteChoice:u,suite:p,description:v,editedSuite:$,tags:f,advanced:b,filter:S,patterns:j,ciSuite:ge,ciWhen:Te,ciFilename:A,ciTranscriptUploads:D});Ze.current=Xe,H(()=>{if(!Ce||!je||!i||!e.trusted||re!=="ready")return;let R=Ee.current,O=i.source?.hash??null,ne=setTimeout(()=>{Me.current=Me.current.catch(()=>{}).then(async()=>{if(R!==Ee.current)return;let z=await t("retain_project_setup_inputs",{inputs:JSON.parse(Xe),sourceHash:O,revision:ae.current});R===Ee.current&&typeof z?.revision=="string"&&(ae.current=z.revision,Ze.current===Xe&&be(!1))}).catch(()=>{R===Ee.current&&Z("Setup inputs could not be retained privately. Keep this form open and preserve your edits before closing.")})},250);return()=>clearTimeout(ne)},[Ce,je,Xe,i?.source?.hash,e.trusted,e.projectPath,re]),H(()=>{!W&&!F&&ie.current&&(ie.current=!1,ye.current?.focus())},[W,F]);function qe(){ie.current=!0,V("")}H(()=>{globalThis.document?.activeElement?.getAttribute("role")!=="tab"&&(n==="project"?Qe.current?.focus():n==="ci"&&xe.current?.focus())},[n]);function $t(){me.current={choice:"",name:""},m(""),h(""),k(""),g([]),w([]),T(!1),P("{}"),M("")}H(()=>(Ne.current++,ue.current++,Ee.current++,ae.current=null,$e(!1),be(!1),dt(),a(null),ce(null),Y(null),V(""),we(null),He(null),de(""),le("manual-and-pull-requests"),Q("evals.yml"),Z(""),Se("ready"),G("preserve"),c(Wn()),d([]),$t(),e.trusted&&Re({initial:!0}),()=>{Ne.current++,ue.current++,Ee.current++}),[e.projectPath,e.trusted,e.context?.workingDirectory,e.context?.mode]),H(()=>{if(De===null||De!==Ne.current||!e.trusted||!["ready","error"].includes(e.discovery?.status))return;let R=Br(e.assets);c(R.paths),d(Object.keys(R.paths)),me.current={choice:"new",name:R.suite},m("new"),h(R.suite),k(R.description),g(["description","filter"]),He(null),e.discovery.status==="error"&&Z("Asset discovery is incomplete. Suggested folders may miss existing files; review the project paths before saving.")},[De,e.assets,e.discovery?.status,e.trusted]);let it=()=>{Ne.current++,be(!0),ce(null),Y(null),we(null),Z("")},y=()=>{Ne.current++,be(!0),Y(null),Z("")},x=R=>{it(),g(O=>O.includes(R)?O:[...O,R])};function se(R){if(re==="refreshing")return;it();let O=R.startsWith("existing:")?Fe[Number(R.slice(9))]:null;re==="changed"&&(R===""||R==="new"||O?.inspectable)&&(Se("ready"),$e(!0));let ne=Vn(O?.filter??{},O?.filterScalarKeys);me.current={choice:R,name:O?.name??""},m(R),h(O?.name??""),k(O?.description??""),g([]),w(ne),T(!1),P(JSON.stringify(Ut(ne),null,2)),M((O?.evals??[]).join(`
`))}async function Re({initial:R=!1}={}){if(!e.trusted)return;let O=!R&&Ce&&(q||re==="changed"),ne=++Ne.current;He(null),ue.current++;let z=await fe("inspect_project_setup");if(!z||Ne.current!==ne)return;if(z.cancelled){Z("Inspection cancelled. No project configuration was changed.");return}if(ee(z.ciAvailable!==!1),a(z.inspection),ce(null),Y(null),V(""),we(null),Z(""),Se("ready"),O){He(null);let B=z.inspection.declarations?.paths??{};c(Ae=>Object.fromEntries(["evals","skills","results","evalFilenames"].map(L=>[L,l.includes(L)?Ae[L]:(B[L]??[]).join(`
`)]))),d(l.filter(Ae=>o[Ae].trim()&&JSON.stringify(Ae==="results"?[o[Ae].trim()]:Ht(o[Ae]))!==JSON.stringify(B[Ae]??[])));let ve=z.inspection.declarations?.suites??[],ut=ve.findIndex(Ae=>Ae.name===me.current.name);if(u.startsWith("existing:")&&ut>=0){let Ae=ve[ut];if(m(`existing:${ut}`),me.current={...me.current,choice:`existing:${ut}`},$.includes("description")||k(Ae.description??""),$.includes("evals")||M((Ae.evals??[]).join(`
`)),!$.includes("filter")){let L=Vn(Ae.filter??{},Ae.filterScalarKeys);w(L),P(JSON.stringify(Ut(L),null,2))}g($.filter(L=>{if(L==="description")return v!==(Ae.description??"");if(L==="evals")return j.trim()&&JSON.stringify(Ht(j))!==JSON.stringify(Ae.evals??[]);if(L==="filter")try{return!vs(Wt(b?S:JSON.stringify(Ut(f))),Ae.filter??{})}catch{return!0}return!0}))}else if(u.startsWith("existing:")){Se("changed"),Z("The selected suite changed or was removed. Your inputs were kept; choose its current target before reviewing configuration.");return}be(!0),Z("Source refreshed. Your unfinished inputs were kept; review the current configuration before saving.");return}d([]),$t(),de(B=>(z.inspection.declarations?.suites??[]).some(ve=>ve.inspectable&&ve.name===B)?B:(z.inspection.declarations?.suites??[]).find(ve=>ve.inspectable)?.name??"");let Pe=z.inspection.declarations?.paths??{};if(z.inspection.state==="missing"?(c(Wn()),He(ne)):c(Object.fromEntries(["evals","skills","results","evalFilenames"].map(B=>[B,(Pe[B]??[]).join(`
`)]))),!Ce&&z.retainedInputs){let B=z.retainedInputs.inputs;if(!B||!B.paths||Object.values(B.paths).some(ve=>typeof ve!="string")||!Array.isArray(B.editedPaths)||!Array.isArray(B.editedSuite)||!Array.isArray(B.tags)||B.tags.some(ve=>!ve||typeof ve.key!="string"||!Array.isArray(ve.values)||ve.values.some(ut=>typeof ut!="string"))||["suiteChoice","suite","description","filter","patterns","ciSuite","ciWhen","ciFilename","ciTranscriptUploads"].some(ve=>typeof B[ve]!="string")||typeof B.advanced!="boolean"){Z("Retained Setup inputs could not be read safely. Their private recovery copy was preserved.");return}if(ae.current=z.retainedInputs.revision,He(null),c(B.paths),d(B.editedPaths),me.current={choice:B.suiteChoice,name:B.suite},m(B.suiteChoice),h(B.suite),k(B.description),g(B.editedSuite),w(B.tags),T(B.advanced),P(B.filter),M(B.patterns),de(B.ciSuite),le(B.ciWhen),Q(B.ciFilename),G(B.ciTranscriptUploads),z.retainedInputs.changed){Se("changed"),$e(!0),Z("Project configuration changed while Setup was closed. Your inputs were retained; inspect and explicitly review the changed configuration before proposing or saving.");return}}$e(!0)}function Ke(){let R={},O=Object.fromEntries(Object.entries(o).filter(([ne,z])=>l.includes(ne)&&z.trim()).map(([ne,z])=>[ne,ne==="results"?z.trim():Ht(z)]).filter(([ne,z])=>JSON.stringify(ne==="results"?[z]:z)!==JSON.stringify(i?.declarations?.paths?.[ne])));if(Object.keys(O).length&&(R.paths=O),u){if(!_&&!p.trim())throw new Error("Enter a name for the new suite.");if(!_&&Fe.some(z=>z.name===p.trim()))throw new Error("That suite already exists. Choose it to edit its settings.");let ne={};if($.includes("description")&&v!==(_?.description??"")&&(ne.description=v),$.includes("evals")&&j.trim()&&JSON.stringify(Ht(j))!==JSON.stringify(_?.evals)&&(ne.evals=Ht(j)),$.includes("filter")){if(!b&&new Set(f.map(Pe=>Pe.key)).size!==f.length)throw new Error("Use each tag key only once; add alternative values to that key.");let z=Wt(b?S:JSON.stringify(Ut(f)));(!_||!vs(z,_.filter??{}))&&(ne.filter=z)}Object.keys(ne).length&&(R.suites={[_?.name??p.trim()]:ne})}return R}let et,bt="";try{et=Ke()}catch(R){bt=R.message}async function tt(R){if(R.preventDefault(),!e.trusted||!Ie||re!=="ready")return;if(Z(""),ce(null),we(null),bt){Z(`${bt} Nothing was changed.`);return}if(!Object.keys(et).length){Z("Edit at least one field before reviewing configuration changes. Nothing was changed.");return}let O=++Ne.current,ne=await fe("propose_project_setup",{changes:et,expectedSourceHash:i.source?.hash??null});ne&&O===Ne.current&&(ce(ne),V("project"))}async function $n(){let R=Ne.current,O=await fe("save_project_setup",{proposalId:E.proposalId});if(!O||R!==Ne.current)return;if(O.cancelled){Z("Save declined. No project configuration was changed.");return}if(!O.saved)return;we({...O,proposalId:E.proposalId}),ce(null),qe(),be(!0),d([]),g([]),Z(["Project configuration saved. No eval was run.",O.cleanupWarning,O.recoveryPath?`Recovery evidence: ${O.recoveryPath}`:""].filter(Boolean).join(`
`));let ne=me.current,z=++ue.current;Se("refreshing");let Pe=await fe("inspect_project_setup");if(z===ue.current){if(!Pe||Pe.cancelled){Se("unavailable");return}if(Pe.inspection.state!=="available"||typeof O.sourceHash!="string"||Pe.inspection.source?.hash!==O.sourceHash){Se("changed");return}if(a(Pe.inspection),Se("ready"),de(B=>(Pe.inspection.declarations?.suites??[]).some(ve=>ve.inspectable&&ve.name===B)?B:(Pe.inspection.declarations?.suites??[]).find(ve=>ve.inspectable)?.name??""),ne.choice==="new"&&me.current.choice==="new"&&me.current.name===ne.name){let B=(Pe.inspection.declarations?.suites??[]).findIndex(ve=>ve.name===ne.name.trim());B>=0&&(me.current={choice:`existing:${B}`,name:ne.name.trim()},m(`existing:${B}`),h(ne.name.trim()))}}}async function bn(){if(!st)return;let R=++Ne.current;Z(""),Y(null);let O=await fe("propose_ci_setup",{suite:ge,filename:A,when:Te,expectedSourceHash:i.source.hash,transcriptUploads:D});O&&R===Ne.current&&(Y(O),V("ci"))}async function At(){let R=Ne.current,O=await fe("save_ci_setup",{proposalId:X.id});!O||R!==Ne.current||(Z(O.message),O.status==="saved"&&(Y(null),qe()))}let It={on:{...Te!=="pull-requests"?{workflow_dispatch:{}}:{},...Te!=="manual"?{pull_request:{}}:{}},jobs:{evals:{steps:[{with:{suite:ge||"(choose a saved suite)"}}]}}};return s`<div class="project-setup">
    <div class="config-inspection">
      <span role="status">${F==="inspect_project_setup"?"Loading project configuration\u2026":i?`Configuration: ${i.state}. Settings read only; not checked by a run.`:"Project settings haven't been read yet."}</span>
      <button class="config-text-button" disabled=${!e.trusted||!!F} onClick=${Re}><${U} name="refresh-cw" size=${13} />Inspect project configuration</button>
    </div>
    ${!e.trusted&&s`<p class="config-notice">Trust this folder to load and edit its project configuration.</p>`}
    ${De!==null&&s`<p class="config-notice" role="status">Waiting for asset discovery before suggesting project folders…</p>`}
    ${re!=="ready"&&s`<p class="config-notice" role="alert">${re==="refreshing"?"Reading the saved settings again. You can keep editing and review changes when the read finishes.":re==="changed"?"Project configuration changed after saving. Your unsaved edits are kept. Inspect project configuration again before reviewing updates.":"Couldn't reload saved settings. Your unsaved edits are kept. Choose Inspect project configuration before reviewing changes."}</p>`}
    ${i?.diagnostics.map((R,O)=>s`<p key=${O} class="config-notice">${R.message}</p>`)}
    <div class="config-layout" hidden=${n!=="project"} id="config-panel-project" role="tabpanel" aria-labelledby="config-tab-project">
      <form id="project-config-form" onSubmit=${tt} class="config-form">
        <h3 id="project-setup-heading" class="sr-only" tabindex="-1" ref=${Qe}>Project configuration</h3>
        ${i?.state==="missing"&&s`<div class="config-notice"><strong>Suggested settings</strong>
          <p>No <code>.vally.yaml</code> was found. Suggestions use folders found in your project, or common defaults.
            Filename patterns group formats; large inventories use common ancestor folders or wildcards to stay within configuration limits.
            These suggestions may include additional files. The <code>all</code> suite has no tag restriction.
            Edit or clear suggestions before saving. Setup is optional.</p></div>`}
        <fieldset disabled=${te||!e.trusted||!Ie} class="config-fields">
          <legend class="sr-only">Project paths and suites</legend>
          <section class="config-card">
            <header><div><h3><${U} name="folder" size=${16} />Locations</h3><p>Choose folders for evals, skills and results.</p></div><span class="ck-badge">Project-relative</span></header>
            <div class="config-card-body">
              ${[["evals","Eval folders"],["skills","Skill folders"],["results","Results folder"],["evalFilenames","Eval filename patterns"]].map(([R,O])=>s`
                <${hs} key=${R} label=${O} name=${R} value=${o[R]} single=${R==="results"} onChange=${ne=>{it(),d(z=>z.includes(R)?z:[...z,R]),c(z=>({...z,[R]:ne}))}} />`)}
            </div>
            <footer>Blank fields preserve existing settings. Unfinished inputs are kept privately; project files change only after review and approval.</footer>
          </section>
          <section class="config-card">
            <header><h3><${U} name="layers" size=${16} />Suites</h3><span class="ck-muted">Groups of evals to run together</span></header>
            <div class="config-card-body">
              <label class="stack-label">Suite to configure (optional)
                <select class="ck-input" name="setup-suite-choice" value=${u} disabled=${re==="refreshing"} onChange=${R=>se(R.target.value)}>
                  <option value="">Leave suites unchanged</option>
                  ${Fe.map((R,O)=>s`<option key=${R.name} value=${`existing:${O}`} disabled=${!R.inspectable}>Edit existing suite: ${R.name}</option>`)}
                  <option value="new">Create a new suite</option>
                </select></label>
              <p class="config-help">Switching suites replaces the fields below. Only edited fields enter review.</p>
              ${u&&s`
                ${!_&&s`<label class="stack-label">New suite name<input class="ck-input" name="setup-suite" value=${p}
                  onInput=${R=>{it(),me.current={choice:u,name:R.target.value},h(R.target.value)}} /></label>`}
                <label class="stack-label">Suite description (optional)<input class="ck-input" name="setup-description" value=${v}
                  onInput=${R=>{x("description"),k(R.target.value)}} /></label>
                <div class="config-tag-heading"><strong>Match tags</strong><span>Literal values</span></div>
                ${!b&&s`<div class="config-tags">
                  ${!f.length&&s`<p class="config-help">No tag filter: all discovered evals match. File selectors still apply.</p>`}
                  ${f.map((R,O)=>s`<div class="config-tag-row" key=${O}>
                    <div class="config-tag-chip">
                      <input class="ck-input config-tag-key" name=${`setup-tag-key-${O}`} aria-label=${`Tag key ${O+1}`} value=${R.key}
                        onInput=${ne=>{x("filter"),w(z=>z.map((Pe,B)=>B===O?{...Pe,key:ne.target.value}:Pe))}} />
                      <span aria-hidden="true">=</span>
                      <div class="config-tag-values">${R.values.map((ne,z)=>s`<div class="config-tag-value" key=${z}>
                        ${z>0&&s`<span class="config-or">OR</span>`}
                        <input class="ck-input" name=${`setup-tag-value-${O}-${z}`} aria-label=${`Tag ${O+1} value ${z+1}`} value=${ne}
                          onInput=${Pe=>{x("filter"),w(B=>B.map((ve,ut)=>ut===O?{...ve,values:ve.values.map((Ae,L)=>L===z?Pe.target.value:Ae)}:ve))}} />
                        ${R.values.length>1&&s`<button class="config-text-button" type="button" aria-label=${`Remove tag ${O+1} value ${z+1}`}
                          onClick=${()=>{x("filter"),w(Pe=>Pe.map((B,ve)=>ve===O?{...B,values:B.values.filter((ut,Ae)=>Ae!==z)}:B))}}>×</button>`}
                      </div>`)}</div>
                      <button class="config-text-button" type="button" aria-label=${`Add alternative value to tag ${O+1}`}
                        onClick=${()=>{x("filter"),w(ne=>ne.map((z,Pe)=>Pe===O?{...z,values:[...z.values,""]}:z))}}>+</button>
                    </div>
                    <button class="ck-btn ck-btn-icon" type="button" aria-label=${`Remove tag ${O+1}`}
                      onClick=${()=>{x("filter"),w(ne=>ne.filter((z,Pe)=>Pe!==O))}}>×</button>
                  </div>`)}
                  <button class="config-text-button" type="button" onClick=${()=>{x("filter"),w(R=>[...R,{key:"",values:[""],array:!1}])}}>Add tag</button>
                </div>`}
                <details class="config-disclosure"><summary>How matching works & advanced JSON</summary>
                  <p>Keys use AND; values for one key use OR. Commas and spaces stay literal. Empty filters match all evals. Unedited filters keep their original YAML types.</p>
                  <label><input type="checkbox" name="setup-advanced" checked=${b} onChange=${R=>{if(R.target.checked){if(new Set(f.map(O=>O.key)).size!==f.length){Z("Use each tag key only once; add alternative values to that key.");return}P(JSON.stringify(Ut(f),null,2)),T(!0)}else try{w(Vn(Wt(S))),T(!1),Z("")}catch(O){Z(`Tag filter: ${O.message} Nothing was changed.`)}}} />Edit advanced raw JSON</label>
                  ${b&&s`<label class="stack-label">Tag filter (JSON object)<textarea class="ck-input" name="setup-filter" value=${S}
                    onInput=${R=>{x("filter"),P(R.target.value)}} /></label>`}
                </details>
                <details class="config-disclosure" open=${!!j}><summary>Limit to file paths or patterns · optional</summary>
                  <label class="stack-label">Optional suite file paths/patterns (one per line)<textarea class="ck-input" name="setup-patterns" rows="2" value=${j}
                    onInput=${R=>{x("evals"),M(R.target.value)}} /></label>
                  <p>File and tag selectors both apply. Blank patterns preserve existing selectors.</p>
                </details>
              `}
            </div>
          </section>
        </fieldset>
      </form>
      <${Un} filename=".vally.yaml" subtitle=${i?.state==="missing"?"New project configuration":"Existing configuration preserved"}
        text=${E?.after??(bt?`# ${bt}`:Object.keys(et??{}).length?an(et):`# No proposed changes.
# Edit a field to preview your updates.`)} exact=${!!E} />
    </div>
    <div class="config-layout" hidden=${n!=="ci"} id="config-panel-ci" role="tabpanel" aria-labelledby="config-tab-ci">
      <div class="config-form">
        <h3 id="ci-pipeline-heading" class="sr-only" tabindex="-1" ref=${xe}>CI pipeline</h3>
        ${!st&&s`<div class="config-notice"><strong>${J?"Project configuration comes first.":"CI workflow setup is not available in this build."}</strong>
          <p>${J?e.trusted?q?"Review or discard project configuration edits before configuring CI.":"Create and save at least one readable eval group (suite) in Project configuration before setting up CI.":"Trust this folder to inspect its configuration before setting up CI.":"Project configuration in .vally.yaml remains available. No CI workflow was created."}</p>
          <button class="config-text-button" onClick=${()=>r("project")}>Go to Project →</button></div>`}
        <section class="config-card">
          <header><div><h3><${U} name="git-compare" size=${16} />Workflow configuration</h3><p>Choose what runs and when it starts.</p></div><span class="ck-badge">GitHub Actions</span></header>
          <fieldset class="config-card-body config-fields" disabled=${!st||!!F}>
            <legend class="sr-only">CI workflow settings</legend>
            <label class="stack-label">Suite to run in CI<select class="ck-input" name="ci-suite" value=${ge}
              onChange=${R=>{y(),de(R.target.value)}}>
              ${!ke.length&&s`<option value="">No saved suites</option>`}
              ${ke.map(R=>s`<option key=${R.name} value=${R.name}>${R.name}</option>`)}
            </select></label>
            <p class="config-help">From saved project settings. The group hasn't been tested by running it.</p>
            <strong class="config-field-title">Start the workflow</strong>
            <div class="config-triggers" role="group" aria-label="Workflow triggers">
              ${[["manual","Manual","On demand only","play"],["pull-requests","Pull requests","Same-repository PRs","git-compare"],["manual-and-pull-requests","Both","Manual and pull requests","layers"]].map(([R,O,ne,z])=>s`
                <button type="button" class="config-trigger" aria-pressed=${Te===R} onClick=${()=>{y(),le(R)}}>
                  <${U} name=${z} size=${17} /><strong>${O}</strong><span>${ne}</span></button>`)}
            </div>
            <label class="stack-label">Workflow filename<input class="ck-input" name="ci-filename" value=${A} maxLength="85"
              onInput=${R=>{y(),Q(R.target.value)}} /></label>
            <p class="config-help">Inside <code>.github/workflows/</code>. Use a .yml or .yaml filename.</p>
            <label class="stack-label">Upload detailed transcripts?<select class="ck-input" name="ci-transcript-uploads" value=${D}
              onChange=${R=>{y(),G(R.target.value)}}>
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
      <${Un} ci=${!0} filename=${`.github/workflows/${A}`} subtitle="Separate workflow approval"
        text=${X?.after??an(It)} exact=${!!X} />
    </div>
    ${!W&&s`<${_e} error=${Be} />${K&&s`<p class="config-notice" role="status">${K}</p>`}`}
    <footer class="config-sticky-footer">
      <div><strong>${n==="ci"?"CI workflow \xB7 separate review":q?"Unsaved configuration edits":"Project configuration"}</strong>
        <p>${n==="ci"?"Review permissions, billing policy and transcript retention before saving.":"Refresh keeps your edits. Reinspect to discard and reload. No files change without approval."}</p></div>
      <div class="config-footer-actions">
        ${(n==="ci"?X:E)&&s`<button class="ck-btn" disabled=${!!F} onClick=${()=>{n==="ci"?y():it()}}>Discard proposal</button>`}
        <button ref=${ye} class="ck-btn ck-btn-primary" disabled=${!!F||(n==="ci"?!st:!e.trusted||!Ie||re!=="ready")}
          type=${n==="ci"?"button":"submit"} form=${n==="ci"?void 0:"project-config-form"}
          onClick=${n==="ci"?bn:void 0}>
          ${n==="ci"?"Review CI changes":"Review configuration changes"}<${U} name="chevron-right" size=${15} /></button>
      </div>
    </footer>
    ${W&&(W==="ci"?X:E)&&s`<${ms}
      proposal=${W==="ci"?X:E} ci=${W==="ci"} pending=${!!F} error=${Be} notice=${K}
      onSave=${W==="ci"?At:$n} onClose=${()=>{F||qe()}} />`}
  </div>`}var Le=(e,t)=>({tag:e,children:t});function hn(e){let n=e.slice(0,128e3).replace(/\r\n?/g,`
`).split(`
`),r=n.slice(0,4096),i=[],a=[i],o=0,c=0,l=v=>{let k=[],$=/\\([\\`*_[\]<>#|])|`([^`\n]*)`|\*\*([^*\n]*)\*\*| {2,}\n|\n/g,g=0;for(let f of v.matchAll($)){if(o>=4096)break;o++,f.index>g&&k.push(v.slice(g,f.index)),k.push(f[1]!==void 0?f[1]:f[2]!==void 0?Le("code",[f[2]]):f[3]!==void 0?Le("strong",[f[3].replace(/\\([\\`*_[\]<>#|])/g,"$1")]):f[0]===`
`?" ":Le("br",[])),g=f.index+f[0].length}return g<v.length&&k.push(v.slice(g)),k},d=v=>{let k=[],$=1;for(let g=1;g<v.length;g++){if(v[g]==="\\"){g++;continue}if(v[g]==="|"){if(k.push(v.slice($,g).trim()),k.length>32)return k;$=g+1}}return $<v.length&&v.slice($).trim()&&k.push(v.slice($).trim()),k},u=v=>/^\|/.test(r[v]??"")&&/^\|/.test(r[v+1]??"")&&d(r[v+1]).length>0&&d(r[v+1]).length<=32&&c<2048&&d(r[v+1]).every(k=>/^:?-{3,}:?$/.test(k))&&d(r[v]).length===d(r[v+1]).length,m=v=>r[v]==="<details>"&&/^<summary>[^<>]*<\/summary>$/.test(r[v+1]??"")&&a.length<=8,p=v=>/^(?:#{1,6} | {4}|- |```)/.test(r[v])||m(v)||r[v]==="</details>"||u(v),h=0;for(;h<r.length;){let v=r[h],k=a.at(-1);if(!v.trim()){h++;continue}if(m(h)){let $=[Le("summary",l(r[h+1].slice(9,-10)))];k.push(Le("details",$)),a.push($),h+=2}else if(v==="</details>"&&a.length>1)a.pop(),h++;else if(/^ {4}/.test(v)){let $=[];for(;h<r.length&&(/^ {4}/.test(r[h])||!r[h].trim());)$.push(r[h].slice(4)),h++;for(;$.at(-1)==="";)$.pop();k.push(Le("pre",[Le("code",[$.join(`
`)])]))}else if(/^```/.test(v)){let $=[];for(h++;h<r.length&&!/^```\s*$/.test(r[h]);)$.push(r[h++]);h<r.length&&h++,k.push(Le("pre",[Le("code",[$.join(`
`)])]))}else if(/^#{1,6} /.test(v)){let $=/^(#{1,6}) (.*)$/.exec(v);k.push(Le(`h${$[1].length}`,l($[2]))),h++}else if(u(h)){let $=d(v),g=[];for(c+=$.length,h+=2;h<r.length&&/^\|/.test(r[h])&&c+$.length<=2048;){let f=d(r[h]);if(f.length!==$.length)break;h++,c+=$.length,g.push(Le("tr",$.map((w,b)=>Le("td",l(f[b]??"")))))}k.push(Le("table",[Le("thead",[Le("tr",$.map(f=>Le("th",l(f))))]),Le("tbody",g)]))}else if(/^- /.test(v)){let $=[];for(;h<r.length&&/^- /.test(r[h]);)$.push(Le("li",l(r[h++].slice(2))));k.push(Le("ul",$))}else{let $=[v];for(h++;h<r.length&&r[h].trim()&&!p(h);)$.push(r[h++]);k.push(Le("p",l($.join(`
`))))}}return{nodes:i,truncated:e.length>128e3||n.length>4096}}var $s={preview_skill_contrast:"Task preview",verify_contrast_runner:"Runner verification and task preview",run_skill_contrast:"Skill comparison",cancel_operation:"Comparison cancellation"},Zs=e=>e?.code==="task-tools-required";function bs(e,t){let n=I(null),r=I(null),i=I(t);i.current=t;let[a,o]=C(""),[c,l]=C(""),[d,u]=C(null),m=g=>r.current===g&&i.current===g.context&&n.current?.isConnected;function p(g,f,w="",b=null){if(!g||!m(g))return;let T=f==="failed"&&Zs(b);T&&l(`${w} Remove unsupported names and retry Preview. Leave the field empty for mock evals.`),u({ticket:g,outcome:f,message:w,invalidTools:T})}let{run:h,pending:v,error:k}=Oe(async(g,f)=>{let w=r.current?.name===g?r.current:null;try{let b=await e(g,f);if(w&&m(w)){let T=b?.cancelled||b?.discarded||b?.record?.stopped||g==="cancel_operation",S=b?.available===!1?b.message||"This operation is unavailable.":"";p(w,S?"failed":T?"cancelled":"ready",S,b)}return b}catch(b){throw p(w,"failed",b?.message??String(b),b),b}});We(()=>()=>{r.current?.release(),r.current=null},[]),We(()=>{r.current?.context!==t&&(r.current?.release(),r.current=null,l(""),o(""))},[t]),We(()=>{if(!d||v)return;let{ticket:g,outcome:f,invalidTools:w}=d;if(!m(g))return;o(f==="ready"?g.name==="run_skill_contrast"?"Skill comparison results ready. Review Step 4.":"Task preview ready. Review the task prompt and checks.":g.name==="cancel_operation"?"Comparison cancellation requested. Review the current comparison status.":`${$s[g.name]} ${f}. ${f==="failed"?"Review the error and retry.":"Review the current comparison status."}`);let b=w?n.current.querySelector('[name="contrast-task-tools"]'):f==="ready"?n.current.querySelector(g.name==="run_skill_contrast"?"#contrast-result-heading":"#contrast-preview-heading"):null;g.keyboard&&g.ownsFocus&&f==="ready"&&!b||(g.keyboard&&g.ownsFocus&&(b??(g.trigger?.isConnected&&!g.trigger.disabled?g.trigger:null)??n.current.querySelector("#compare-heading"))?.focus(),g.release(),r.current=null)});function $(g,f,w={}){r.current?.release();let b=g?.currentTarget,T=b?.ownerDocument,S={name:f,context:t,trigger:b,keyboard:g?.detail===0&&T?.activeElement===b,ownsFocus:!0,release:()=>{}};if(S.keyboard){let P=()=>{S.ownsFocus=!1},j=M=>{M.target!==b&&M.target!==T.body&&P()};T.addEventListener("focusin",j),T.addEventListener("pointerdown",P),T.addEventListener("keydown",P),S.release=()=>{T.removeEventListener("focusin",j),T.removeEventListener("pointerdown",P),T.removeEventListener("keydown",P)}}return r.current=S,u(null),l(""),o(`${$s[f]} in progress.`),h(f,w)}return{pane:n,run:h,start:$,pending:v,error:k,status:a,fieldError:c,clearFieldError:()=>l("")}}function ys(e){return e?s`<div class="per-case-cell-metrics">
    <div><strong>${`Outcome: ${e.outcome}`}</strong></div>
    ${e.evidenceDiagnostics.map(t=>s`<p class="evidence-notice" role="status">${t.message}</p>`)}
    <div>${`Duration: ${e.formattedDuration}`}</div>
    <div>${`Tokens: ${e.formattedTokens}`}</div>
    <div>${`Tools: ${e.formattedObservedTools}`}</div>
    <div>${`Skills: ${e.formattedObservedSkills}`}</div>
    ${e.turns!==null&&s`<div>${`Turns: ${e.formattedTurns}`}</div>`}
  </div>`:s`<span class="ck-muted">not reported</span>`}function ks(e,t){return e.length?s`<div class="report-table" tabindex="0" role="region" aria-label="Per-case comparison"><table>
    <caption>${t}</caption>
    <thead><tr><th scope="col">Test case</th><th scope="col">Original</th><th scope="col">Changed</th></tr></thead>
    <tbody>${e.map((n,r)=>s`<tr key=${`${n.id}-${r}`}>
      <th scope="row">${n.name}</th>
      <td>${ys(n.original)}</td>
      <td>${ys(n.changed)}</td>
    </tr>`)}</tbody>
  </table></div>`:null}function ws(e,t=0){let n=Mt(e.judgeUsage);return s`<li key=${`${e.id}-${t}`}>
    <strong>${e.name}</strong> <code>${e.kind}</code> · <span>${e.status}</span> · <span>${e.score!==null?`Score: ${e.score}`:"Score: not reported"}</span>
    <p class="case-grader-reason">${e.reason}</p>
    <p class="ck-muted case-grader-proves">${`What this check proves: ${e.proves}`}</p>
    ${n&&s`<p class="ck-muted case-grader-judge">${n}</p>`}
    ${e.children?.length>0&&s`<ul class="case-grader-children" aria-label=${`Nested checks for ${e.name}`}>
      ${e.children.map((r,i)=>ws(r,i))}
    </ul>`}
  </li>`}function Qs(e,t=0){let n=lt(e,t);return!n||!(n.durationMs!==null||n.totalTokens!==null||n.turns!==null||n.observedTools!==null||n.observedSkills!==null||n.judgeUsage!==null||n.graderOutcomes.length>0)&&!n.evidenceDiagnostics.length?null:s`<div class="saved-case-metrics">
    ${n.evidenceDiagnostics.map(i=>s`<p class="evidence-notice" role="status">${i.message}</p>`)}
    <p class="ck-muted">${`Duration: ${n.formattedDuration} \xB7 Tokens: ${n.formattedTokens}${n.turns!==null?` \xB7 Turns: ${n.formattedTurns}`:""} \xB7 Tools: ${n.formattedObservedTools} \xB7 Skills: ${n.formattedObservedSkills}`}</p>
    ${n.graderOutcomes.length>0&&s`<ul class="case-grader-list">${n.graderOutcomes.map((i,a)=>ws(i,a))}</ul>`}
  </div>`}function mn({receipt:e,cases:t,runs:n,runDetails:r}){let i=l=>`${l>0?"+":""}${l}`,a=r??n,o=jt({receipt:e,cases:t},a),c=Dt({receipt:e,cases:t},a);return s`<div class="comparison-summary">
    <p class="snapshot-notice"><strong>These differences don't prove one version is better.</strong> ${e.inference.statement}</p>
    ${c&&s`<p class="snapshot-notice low-confidence-notice" role="status"><strong>Limited evidence (one attempt per case):</strong> Single-run comparisons cannot separate real changes from run-to-run variation.</p>`}
    <h3>${e.axis.label}</h3>
    <div class="comparison-cards">${[["Original","baseline"],["Changed","treatment"]].map(([l,d])=>s`
      <section class="comparison-card" aria-label=${`${l} outcome`}>
        <h4>${l}</h4><code>${e.source[d].runId}</code>
        <p>${e.axis[`${d}Value`]}</p>
        <p class="comparison-score"><strong>${e.outcomes[d].passed} / ${e.outcomes[d].total}</strong> passed</p>
        <p>${e.outcomes[d].failed} failed · ${e.outcomes[d].errors} errors</p>
      </section>`)}</div>
    <div class="report-table" tabindex="0" role="region" aria-label="Outcome changes"><table>
      <caption>Changed minus Original</caption><thead><tr><th scope="col">Outcome</th><th scope="col">Change in cases</th></tr></thead>
      <tbody>${[["Passed","passed"],["Failed","failed"],["Errors","errors"]].map(([l,d])=>s`
        <tr><th scope="row">${l}</th><td>${i(e.outcomes.delta[d])}</td></tr>`)}</tbody>
    </table></div>
    ${ks(o,"Per-case outcomes and metrics (Original vs Changed)")}
    <h3>Cases that changed result</h3>
    <div class="comparison-transitions">${[["Fixed failures","fixedFailures"],["New failures","newFailures"],["Persistent failures","persistentFailures"],["Fixed errors","fixedErrors"],["New errors","newErrors"],["Persistent errors","persistentErrors"]].map(([l,d])=>s`<details><summary>${l}: ${e.outcomes.transitions[d].length}</summary>
      ${e.outcomes.transitions[d].length?s`<ul>${e.outcomes.transitions[d].map(u=>s`<li><code>${u}</code></li>`)}</ul>`:s`<p>No cases in this category.</p>`}</details>`)}</div>
    <div class="report-table" tabindex="0" role="region" aria-label="Recorded usage"><table>
      <caption>Recorded usage; missing values aren't zero</caption>
      <thead><tr><th scope="col">Metric</th><th scope="col">Original</th><th scope="col">Changed</th><th scope="col">Difference</th></tr></thead>
      <tbody>${[["Duration","duration"],["Tokens","tokens"],["Cost","cost"]].map(([l,d])=>{let u=e.metrics[d],m=p=>p?`${p.value} ${p.unit} (${p.basis}; ${p.source})`:"Unknown";return s`<tr><th scope="row">${l}</th><td>${m(u.baseline)}</td><td>${m(u.treatment)}</td>
          <td>${u.status==="comparable"?`${i(u.delta.value)} ${u.delta.unit}`:u.reason==="metadata-differs"?"Not comparable: measurement metadata differs":"Unknown: missing measurement"}</td></tr>`})}</tbody>
    </table></div>
    <h3>Interpretation and limits</h3><p>${e.advisory.rationale}</p><p>${e.advisory.userDecisionBoundary}</p>
    <ul>${e.limitations.map(l=>s`<li>${l}</li>`)}</ul>
  </div>`}function Xs(e){let t=e?.original?.metrics,n=e?.changed?.metrics;if(!t||!n)return null;let r=a=>`${a>0?"+":""}${a}`,i=a=>a?`${a.value} ${a.unit} (${a.basis}; ${a.source})`:"Unknown";return s`<div class="report-table" tabindex="0" role="region" aria-label="Recorded usage"><table>
    <caption>Recorded usage; missing values aren't zero</caption>
    <thead><tr><th scope="col">Metric</th><th scope="col">Original</th><th scope="col">Changed</th><th scope="col">Difference</th></tr></thead>
    <tbody>${[["Duration","duration"],["Tokens","tokens"],["Cost","cost"]].map(([a,o])=>{let c=t[o]??null,l=n[o]??null,d=e.metricDifferences?.[o]??(!c||!l?{status:"unknown",delta:null,reason:"missing"}:e.rulerParity?.status!=="verified-ruler-parity"?{status:"unknown",delta:null,reason:e.rulerParity?.status==="ruler-drift"?"ruler-drift":"incomplete-evidence"}:c.unit===l.unit&&c.basis===l.basis&&c.source===l.source?{status:"comparable",delta:{value:l.value-c.value,unit:c.unit,percentChange:c.value>0?Number(((l.value-c.value)/c.value*100).toFixed(1)):null},reason:null}:{status:"unknown",delta:null,reason:"metadata-differs"}),u=d.status==="comparable"&&d.delta?d.delta.percentChange!==void 0?d.delta.percentChange:c?.value>0?Number(((l.value-c.value)/c.value*100).toFixed(1)):null:null,m=typeof u=="number"&&Number.isFinite(u)?` (${u>=0?"+":""}${u.toFixed(1)}%)`:"",p=d.status==="comparable"&&d.delta?`${r(d.delta.value)} ${d.delta.unit}${m}`:d.reason==="metadata-differs"?"Not comparable: measurement metadata differs":d.reason==="ruler-drift"?"Not comparable: evals or inputs differ":d.reason==="incomplete-evidence"?"Unknown: incomplete comparison metadata":"Unknown: missing measurement";return s`<tr key=${o}><th scope="row">${a}</th><td>${i(c)}</td><td>${i(l)}</td><td>${p}</td></tr>`})}</tbody>
  </table></div>`}function Bn({comparison:e,runs:t}){let n=e.runDetails??t,r=jt(e,n),i=Dt(e,n),a=Array.isArray(n)&&e.original?.runId?n.find(c=>c?.id===e.original.runId):null,o=Array.isArray(n)&&e.changed?.runId?n.find(c=>c?.id===e.changed.runId):null;return s`<div class="comparison-summary">
    <h3>Side-by-side results</h3>
    ${e.rulerParity?.summary&&s`<p class="snapshot-notice" role="status">${e.rulerParity.summary}</p>`}
    ${i&&s`<p class="snapshot-notice low-confidence-notice" role="status"><strong>Limited evidence (one attempt per case):</strong> Single-run comparisons cannot separate real changes from run-to-run variation.</p>`}
    <div class="comparison-cards">${e.summary.runs.map((c,l)=>{let d=l===0?e.original:e.changed,u=l===0?a:o;return s`
      <section class="comparison-card" aria-label=${`${c.label} saved results`}>
        <h3>${c.label}</h3><p>Status: <strong>${c.status}</strong></p>
        <p class="comparison-score"><strong>${c.outcome}</strong></p>
        <h4>${c.label}'s tests (not matched)</h4>
        ${c.cases.length?s`<ul class="saved-comparison-cases">${c.cases.map((m,p)=>{let h=m.sourceName===void 0?m:{...m,name:m.sourceName},v=St(h,d?.cases)??h,k=St(v,u?.cases),$=k?{...k,...Object.fromEntries(Object.entries(v).filter(([,g])=>g!=null)),...Object.hasOwn(v,"judgeUsage")?{judgeUsage:v.judgeUsage}:{}}:v;return s`<li class="saved-comparison-case-item">
            <div class="saved-comparison-case-row"><span>${m.name}</span><strong>${m.outcome}</strong></div>
            ${Qs({...$,evidenceDiagnostics:Pt(v,k)},p)}
          </li>`})}</ul>`:s`<p>No saved tests.</p>`}
        ${c.omittedCases>0&&s`<p>${c.omittedCases} more tests. View details.</p>`}
      </section>`})}</div>
    ${ks(r,"Side-by-side per-case outcomes and metrics")}
    ${Xs(e)}
    <p class="snapshot-notice">${e.summary.caveat}</p>
    <p>Counts cover saved tests only. Failed, cancelled or running runs may be incomplete.</p>
    <details class="comparison-source"><summary>Details</summary>
      <p><strong>Matched test comparison:</strong> ${e.strictEligibility.reason}</p>
      <p>${e.coverage}</p>
      <h3>Interpretation and limits</h3><ul>${e.limitations.map(c=>s`<li>${c}</li>`)}</ul>
      <h3>Full saved-results report</h3><pre tabindex="0">${e.text}</pre>
    </details>
  </div>`}function vn({state:e,invoke:t,compareCache:n,onOpenRun:r}){let i=e.runs.filter(_=>_.mode==="engine"),a=(e.assets??[]).filter(_=>_.kind==="skill"),o=(e.assets??[]).filter(_=>_.kind==="eval"),c=n?.current&&n.current.project===e.projectPath?n.current:null,l=_=>!!_&&i.some(q=>q.id===_),[d,u]=C(()=>l(c?.original)?c.original:""),[m,p]=C(()=>l(c?.changed)?c.changed:""),[h,v]=C(()=>c?.mode??""),[k,$]=C(()=>c?.savedOpen??!1),g=I(null),[f,w]=C(()=>c&&l(c.original)&&l(c.changed)?c.axis??"":""),[b,T]=C(()=>c?.intent??"general-comparison"),[S,P]=C(()=>c?.saved??{receiptId:"",status:""}),[j,M]=C(()=>c?.queriedPair??null),[E,ce]=C(()=>c?.selectedReceipt??""),[N,we]=C(()=>c?.contrastSkillId??e.skillContrast?.record?.skill?.assetId??""),[ge,de]=C(()=>c?.contrastEvalId??e.skillContrast?.record?.evaluation?.assetId??""),[Te,le]=C(()=>c?.selectedContrastId??""),[A,Q]=C(()=>c?.taskToolsText??""),[D,G]=C(()=>c?.reviewedKey??""),[X,Y]=C(()=>c?.contrastAuth??"github"),J=I(""),ee=a.some(_=>_.id===N)?N:"",W=o.some(_=>_.id===ge)?ge:"",{pane:V,run:K,start:Z,pending:re,error:Se,status:De,fieldError:He,clearFieldError:Ce}=bs(t,JSON.stringify([e.projectPath,ee,W,A,X])),$e=a.find(_=>_.id===ee)??null,je=o.find(_=>_.id===W)??null,be=[...new Set(A.split(",").map(_=>_.trim()).filter(Boolean))].sort((_,q)=>_.localeCompare(q)),ae=e.skillContrastPreview?.skill?.assetId===ee&&e.skillContrastPreview?.evaluation?.assetId===W&&JSON.stringify(e.skillContrastPreview?.taskTools??[])===JSON.stringify(be)?e.skillContrastPreview:null,Ee=ae?.inputHash??"",Me=!!Ee&&D===Ee,Ze=Te?(e.skillContrasts??[]).find(_=>_.record.id===Te)??null:null,Ne=e.skillContrast&&ee&&W&&e.skillContrast.record?.skill?.assetId===ee&&e.skillContrast.record?.evaluation?.assetId===W?e.skillContrast:null,ue=Ze??Ne,me=e.operation?.kind==="skill-contrast"?e.operation:null,Qe=ue?4:ee&&W?3:ee?2:1,xe=e.comparison?.receipt,ye=e.comparison?.mode==="descriptive"?e.comparison:null,ie=h==="strict"&&xe?.source?.baseline?.runId===d&&xe?.source?.treatment?.runId===m&&xe?.axis?.key===f&&xe?.decision?.intent===b,fe=ye?h==="descriptive"&&ye.original.runId===d&&ye.changed.runId===m?ye:null:xe?ie?e.comparison:null:h==="strict"&&j?.original===d&&j?.changed===m?e.comparison:null,F=h==="strict"?fe?.axes??(ie&&xe?.axis?[xe.axis]:c?.mode==="strict"&&l(c.original)&&l(c.changed)&&c.original===d&&c.changed===m?c.axes??null:null):null,Be=S.receiptId===fe?.receipt?.id?S.status:"",dt=I(`${d}:${m}`),Fe=I(`${xe?.id??""}:${f}:${b}`);H(()=>{e.readStatus==="ready"&&e.projectPath&&J.current!==e.projectPath&&(J.current=e.projectPath,K("list_skill_contrasts"))},[e.readStatus,e.projectPath]),H(()=>{let _=`${d}:${m}`;dt.current!==_&&(dt.current=_,w(""),P({receiptId:"",status:""}))},[d,m]),H(()=>{let _=`${xe?.id??""}:${f}:${b}`;Fe.current!==_&&(Fe.current=_,P({receiptId:"",status:""}))},[xe?.id,f,b]),H(()=>{if(!e.comparisonNavigation||(ye?.id??xe?.id)!==e.comparisonNavigation)return;let _=ye?ye.original.runId:xe.source.baseline.runId,q=ye?ye.changed.runId:xe.source.treatment.runId;dt.current=`${_}:${q}`,u(_),p(q),v(ye?"descriptive":"strict"),w(ye?"":xe.axis.key),T(ye?"general-comparison":xe.decision.intent),M(null),P({receiptId:"",status:""}),$(!0)},[e.comparisonNavigation]),H(()=>{k&&e.comparisonNavigation===(ye?.id??xe?.id)&&g.current?.focus()},[k,e.comparisonNavigation]),H(()=>{n&&(n.current={project:e.projectPath,original:d,changed:m,mode:h,savedOpen:k,axis:f,axes:F,intent:b,saved:S,queriedPair:j,selectedReceipt:E,contrastSkillId:ee,contrastEvalId:W,selectedContrastId:Te,taskToolsText:A,reviewedKey:D,contrastAuth:X})},[e.projectPath,d,m,h,k,f,F,b,S,j,E,ee,W,Te,A,D,X]);let ke={headingOffset:3,tablePrefix:"Skill comparison details",tableNumber:0};return s`<section class="studio-pane compare-pane" ref=${V} aria-labelledby="compare-heading">
    <p class="sr-only" role="status" aria-live="polite" aria-atomic="true">${De}</p>
    <div class="studio-heading"><div><h2 id="compare-heading" tabindex="-1">Test a skill with & without</h2>
      <p>Run the same task with a skill included in the prepared inputs and with it left out, then compare the results.</p></div>
      ${(e.skillContrasts?.length??0)>0&&s`<label class="stack-label compact-history-select">Past runs
        <select class="ck-select" name="saved-skill-contrast" value=${ue?.record?.id??""} onChange=${_=>{let q=_.target.value;le(q);let te=(e.skillContrasts??[]).find(Ie=>Ie.record.id===q);te?(we(te.record.skill.assetId),de(te.record.evaluation.assetId)):q||(we(""),de(""),G(""))}}>
          <option value="">Choose a past run…</option>
          ${e.skillContrasts.map(_=>s`<option value=${_.record.id} key=${_.record.id}>${_.record.skill.name} · ${_.record.evaluation.name} (${rt(_.record.updatedAt)})</option>`)}
        </select></label>`}
    </div>
    <ol class="compare-stepper" aria-label="Skill comparison steps">
      ${["What skill to test","What eval to run","Run with & without","See what changed"].map((_,q)=>{let te=q+1,Ie=te<Qe;return s`<li class=${`compare-step ${te===Qe?"active":Ie?"done":""}`} aria-current=${te===Qe?"step":void 0}>
          <span aria-hidden="true">${te}</span>${_}${Ie&&s`<small class="sr-only">Completed</small>`}</li>`})}
    </ol>
    ${me&&s`<section class="run-progress" aria-label="Skill comparison progress">
      <p>Comparison ${me.contrastId}: ${me.phase}</p>
      ${me.arm&&s`<p>Current condition: ${me.arm}</p>`}
      <p>Included run: <code>${me.armRunIds.included}</code></p>
      <p>Omitted run: <code>${me.armRunIds.omitted}</code></p>
      ${(ze(me.phase)||me.phase==="approval")&&s`<button class="ck-btn ck-btn-danger" disabled=${me.phase==="stopping"}
        onClick=${_=>Z(_,"cancel_operation")}>${me.phase==="stopping"?"Stopping\u2026":"Stop this comparison"}</button>`}
      <${_e} error=${me.error} />
    </section>`}
    <div class="compare-wizard">
      <section class=${`wizard-step-card ${Qe===1?"is-current":ee?"is-complete":""}`} aria-label="Step 1: What skill do you want to test?">
        <div class="wizard-step-header"><span class="wizard-step-badge" aria-hidden="true">${ee?"\u2713":"1"}</span>
          <div><h3>Step 1 · What skill do you want to test?</h3>
            <p class="ck-muted">Choose a project skill to include or leave out of the prepared inputs. Other ways the agent might find the skill aren't verified.</p></div></div>
        <label class="stack-label">Skill to test<select class="ck-select" name="contrast-skill" value=${ee}
          disabled=${!!re||ze(e.operation?.phase)||e.operation?.phase==="approval"||!!e.operation?.approval} onChange=${_=>{let q=_.target.value;le(""),G(""),we(q),q||de("")}}>
          <option value="">Choose a skill…</option>
          ${a.map(_=>s`<option value=${_.id} key=${_.id}>${_.name} · ${_.relativePath}</option>`)}
        </select></label>
      </section>
      ${ee&&s`<section class=${`wizard-step-card ${Qe===2?"is-current":W?"is-complete":""}`} aria-label="Step 2: What eval do you want to run?">
        <div class="wizard-step-header"><span class="wizard-step-badge" aria-hidden="true">${W?"\u2713":"2"}</span>
          <div><h3>Step 2 · What eval do you want to run?</h3>
            <p class="ck-muted">Choose a saved eval task to run against "${$e?.name??"this skill"}".</p></div></div>
        <label class="stack-label">Eval task to run<select class="ck-select" name="contrast-eval" value=${W}
          disabled=${!!re||ze(e.operation?.phase)||e.operation?.phase==="approval"||!!e.operation?.approval} onChange=${_=>{le(""),G(""),de(_.target.value)}}>
          <option value="">Choose a saved eval…</option>
          ${o.map(_=>s`<option value=${_.id} key=${_.id}>${_.name} · ${_.relativePath}</option>`)}
        </select></label>
      </section>`}
      ${ee&&W&&s`<section class=${`wizard-step-card ${Qe===3?"is-current":ue?"is-complete":""}`} aria-label="Step 3: Run with and without skill">
        <div class="wizard-step-header"><span class="wizard-step-badge" aria-hidden="true">${ue?"\u2713":"3"}</span>
          <div><h3>Step 3 · Review the task & run with and without "${$e?.name??"skill"}"</h3>
            <p class="ck-muted">Check that the task and scoring rules work with either input version, then run "${je?.name??"eval"}" with and without "${$e?.name??"skill"}".</p></div></div>
        <div class="comparison-selectors">
          <label class="stack-label">Task tools (comma-separated; required for Copilot evals, empty for mock evals)
            <input class="ck-input" name="contrast-task-tools" autocomplete="off" spellcheck="false" value=${A}
              aria-invalid=${He?"true":void 0} aria-describedby=${He?"contrast-task-tools-error":void 0}
              placeholder="e.g. view, rg, glob" onInput=${_=>{Ce(),G(""),Q(_.target.value)}} />
          </label>
          <label class="stack-label">Authentication
            <select class="ck-select" name="contrast-authentication" value=${X} onChange=${_=>Y(_.target.value)}>
              <option value="github">GitHub CLI sign-in${ae?.evaluation?.executor==="mock"?" (not used for mock)":""}</option>
              <option value="configured">Token from environment variables</option>
            </select>
          </label>
        </div>
        ${He&&s`<p id="contrast-task-tools-error" class="studio-error">${He}</p>`}
        <div class="draft-actions">
          <button class="ck-btn" type="button" disabled=${!!re||ze(e.operation?.phase)||e.operation?.phase==="approval"||!!e.operation?.approval}
            onClick=${_=>Z(_,"preview_skill_contrast",{skillId:ee,evalId:W,...be.length?{taskTools:be}:{}})}>${re==="preview_skill_contrast"?"Previewing\u2026":ae?"Refresh task preview":"Preview task & checks"}</button>
        </div>
        ${ae&&s`<div class="contrast-preview-box" role="region" aria-label="Reviewed skill comparison task">
          <h4 id="contrast-preview-heading" tabindex="-1">Task preview</h4>
          <p><strong>Task (${ae.evaluation.caseName} · ${ae.evaluation.executor}):</strong> ${ae.evaluation.prompt}</p>
          <p class="ck-muted">Checks (${ae.plan.inputs.checks.length}): ${ae.plan.inputs.checks.map(_=>`${_.identity.id} (${_.role})`).join(", ")} · Skill SHA-256 ${ae.skill.sourceHash.slice(0,12)}… · Eval SHA-256 ${ae.evaluation.sourceHash.slice(0,12)}…</p>
          ${ae.setupReason?s`<p class="studio-warning">${ae.setupReason}</p>
            ${!e.runtime&&(ae.setupAction==="verify-runner"||ae.setupAction===void 0&&/Configure and verify a local evaluator/i.test(ae.setupReason))&&s`<button class="ck-btn ck-btn-primary" type="button"
              disabled=${!e.trusted||!!re||ze(e.operation?.phase)||e.operation?.phase==="approval"||!!e.operation?.approval}
              onClick=${_=>Z(_,"verify_contrast_runner",{skillId:ee,evalId:W,...be.length?{taskTools:be}:{}})}>${re==="verify_contrast_runner"?"Verifying runner\u2026":"Verify eval runner & refresh preview"}</button>`}`:s`
            <button class="ck-btn" type="button" aria-pressed=${Me}
              onClick=${()=>G(Me?"":Ee)}>
              <${U} name=${Me?"circle-check":"shield"} size=${15} />
              ${Me?"Confirmed: task and checks don't favor either input version":"Confirm task and checks don't favor either input version"}
            </button>`}
        </div>`}
        <div class="draft-actions">
          <button class="ck-btn ck-btn-primary" disabled=${!e.trusted||!ae||ae.status!=="ready"||!Me||!!re||ze(e.operation?.phase)||e.operation?.phase==="approval"||!!e.operation?.approval}
            onClick=${async _=>{le("");let q=await Z(_,"run_skill_contrast",{skillId:ee,evalId:W,expectedSkillSourceHash:ae.skill.sourceHash,expectedEvalSourceHash:ae.evaluation.sourceHash,expectedInputHash:D,neutrality:"reviewed-neutral",authentication:X,...be.length?{taskTools:be}:{}});q?.record?.id&&le(q.record.id)}}><${U} name="git-compare" size=${15} />${re==="run_skill_contrast"?"Running with & without skill\u2026":ue?"Run again with & without skill":"Run with & without skill"}</button>
          ${!e.trusted&&s`<${zt} state=${e} invoke=${t} compact />`}
        </div>
      </section>`}
      ${ue&&s`<section class="wizard-step-card is-current skill-contrast-result" aria-label="Step 4: Results and what to pay attention to">
        <div class="wizard-step-header"><span class="wizard-step-badge" aria-hidden="true">4</span>
          <div><h3 id="contrast-result-heading" tabindex="-1">Step 4 · Results: what to pay attention to</h3>
            <p class="ck-muted">One attempt per input version for "${ue.record.skill.name}" on "${ue.record.evaluation.name}" (comparison basis: ${ue.record.report?.basis??"unpaired-exploratory"}; other skill discovery: ${ue.record.report?.discovery??"unverified"}).</p></div></div>
        <pre tabindex="0" role="region" aria-label="Skill comparison summary">${ue.summary?.text??"Summary unavailable. Open Details to read the saved report."}</pre>
        <p>Comparison: <code>${ue.record.id}</code></p>
        <p>Included run: <code>${ue.record.armRunIds.included}</code>; omitted run: <code>${ue.record.armRunIds.omitted}</code></p>
        <div class="contrast-arms-grid">
          ${[["included",`With skill (${ue.record.skill.name})`,"Skill included in inputs"],["omitted","Without skill (Baseline)","Skill omitted from inputs"]].map(([_,q,te])=>{let Ie=ue.record.evidence?.arms?.[_],st=ue.record.report?.arms?.[_]?.outcome??Ie?.observation?.run?.status??Ie?.state??"unstarted",Xe=ue.record.report?.arms?.[_]?.runId??null,qe=st==="passed"?"row-kind-success":["failed","errored","run-failed","cancelled"].includes(st)?"row-kind-attention":"";return s`<div class="contrast-arm-card" key=${_}>
              <div class="contrast-arm-header"><strong>${q}</strong><span class=${`ck-badge ${qe}`.trim()}>${st}</span></div>
              <p class="ck-muted">${te}</p>
              ${Xe&&r&&s`<button class="ck-btn ck-btn-sm" type="button" onClick=${()=>r(Xe)}><${U} name="arrow-up-right" size=${14} />Open in Results</button>`}
            </div>`})}
        </div>
        ${ue.record.report?.limitations?.length>0&&s`<ul class="contrast-limitations ck-muted" aria-label="What this skill comparison can't tell you">
          ${ue.record.report.limitations.slice(0,3).map((_,q)=>s`<li key=${q}>${_}</li>`)}
        </ul>`}
        <details class="comparison-source"><summary>Technical details & full comparison report</summary>
          <div class="report-preview comparison-preview" tabindex="0" role="region" aria-label="Full skill comparison report">
            ${hn(ue.text).nodes.map(_=>Dn(_,ke))}
          </div>
          <pre tabindex="0">${ue.text}</pre>
        </details>
      </section>`}
    </div>
    <details class="advanced-saved-compare compare-controls-card" open=${k}
      onToggle=${_=>$(_.currentTarget.open)}>
      <summary>Compare two existing saved runs</summary>
      <h3 id="saved-compare-heading" ref=${g} tabindex="-1">Compare saved results</h3>
      <p>Read existing saved outcomes without contacting AI, running evals or changing files. This is separate from the with-and-without skill experiment above.</p>
    <label class="stack-label">Comparison mode<select class="ck-select" name="comparison-mode" value=${h} onChange=${_=>{v(_.target.value),w(""),M(null),P({receiptId:"",status:""})}}>
      <option value="">Choose how to compare</option>
      <option value="descriptive">Side-by-side results</option>
      <option value="strict">Matched test comparison</option>
    </select></label>
    <div class="comparison-selectors">${[["Original",d,u],["Changed",m,p]].map(([_,q,te])=>s`
      <label class="stack-label">${_==="Original"?"First":"Second"} saved run<select class="ck-select" name=${`${_.toLowerCase()}-run`} value=${q} onChange=${Ie=>{te(Ie.target.value),w(""),M(null),P({receiptId:"",status:""})}}>
        <option value="">Choose a saved eval run</option>${i.map(Ie=>s`<option value=${Ie.id} key=${Ie.id}>${Ie.name} · ${Ie.status} · ${rt(Ie.startedAt)} · ${Ie.id}</option>`)}</select></label>`)}</div>
    ${h==="descriptive"&&s`
      <button class="ck-btn ck-btn-primary" disabled=${!d||!m||d===m||!!re}
        onClick=${()=>K("compare_runs",{original:d,changed:m,mode:h})}>Show side-by-side saved results</button>`}
    <div class="draft-actions">${h==="strict"&&s`<button class="ck-btn" disabled=${!d||!m||d===m||!!re}
      onClick=${async()=>{await K("compare_runs",{original:d,changed:m,mode:h})&&M({original:d,changed:m})}}>Find what changed</button>`}
      <button class="ck-btn" disabled=${!!re} onClick=${async()=>{await K("saved_comparisons")&&E&&await K("saved_comparisons",{id:E})}}>Open saved comparisons</button></div>
    ${F&&s`<label class="stack-label">Change to compare<select class="ck-select" name="comparison-change" value=${f} onChange=${_=>w(_.target.value)}>
      <option value="">Choose one recorded change</option>${F.map(_=>s`<option value=${_.key} key=${_.key}>${_.label}</option>`)}</select></label>`}
    ${h==="strict"&&s`<p>Tests, checks, runner and verified model must match, with one recorded change.
      If these runs cannot be matched, choose Side-by-side results to view each run separately.</p>
    <label class="stack-label">What do you want to decide?<select class="ck-select" name="comparison-intent" value=${b} onChange=${_=>T(_.target.value)}>
      <option value="general-comparison">Review observed differences</option><option value="test-original-customization-removal">Review evidence before keeping, updating or removing Original</option></select></label>
    <button class="ck-btn ck-btn-primary" disabled=${!f||!d||!m||d===m||!!re} onClick=${()=>K("compare_runs",{original:d,changed:m,mode:h,axisKey:f,intent:b})}>Compare results</button>`}
    ${fe?.mode==="descriptive"&&s`<section class="comparison-report">
      <${Bn} comparison=${fe} runs=${i} />
    </section>`}
    ${fe?.receipt&&s`<section class="comparison-report">
      <${mn} receipt=${fe.receipt} cases=${fe.cases} runs=${i} runDetails=${fe.runDetails} />
      <details class="comparison-source"><summary>Full comparison report</summary><pre tabindex="0">${fe.text}</pre></details>
      <p>Save this comparison without changing the original run results. Saving does not run an eval.</p>
      <button class="ck-btn" disabled=${!e.trusted||Be==="saved"||!!re}
        onClick=${async()=>{let _=fe.receipt.id;await K("save_comparison",{id:_})&&P({receiptId:_,status:"saved"})}}>${Be==="saved"?"Comparison saved":"Save comparison"}</button></section>`}
    ${e.comparisons.length>0&&s`<label class="stack-label">Verified saved comparison<select class="ck-select" name="saved-comparison"
      disabled=${!!re} value=${E} onChange=${async _=>{let q=_.target.value;ce(q),q&&await K("saved_comparisons",{id:q})}}>
      <option value="">Choose a comparison</option>${e.comparisons.map(_=>s`<option value=${_.receipt.id} key=${_.receipt.id}>${_.receipt.axis.label} · ${rt(_.receipt.generatedAt)}</option>`)}</select></label>
      ${e.comparisons.filter(_=>_.receipt.id===E).map(_=>s`
        <section aria-label="Saved comparison">
          ${!_.runDetails&&s`<p class="snapshot-notice">Case details are not loaded for this saved comparison.</p>`}
          <button class="ck-btn" disabled=${!!re} onClick=${()=>K("saved_comparisons",{id:_.receipt.id})}>
            ${_.runDetails?"Reload comparison details":"Load comparison details"}</button>
          <${mn} receipt=${_.receipt} cases=${_.cases} runs=${[]} runDetails=${_.runDetails} />
          <details><summary>Full saved comparison report</summary><pre tabindex="0">${_.text}</pre></details></section>`)}`}
    </details>
    <${_e} error=${me?.error?"":Se} />
  </section>`}function Kn({state:e,invoke:t,target:n}){let[r,i]=C(n?.section??"project"),a=I(null);H(()=>{n&&i(n.section)},[n]),H(()=>{r==="advanced"&&globalThis.document?.activeElement?.getAttribute("role")!=="tab"&&a.current?.focus()},[r]);let o=[["project","Project","folder"],["ci","CI pipeline","git-compare"],["advanced","Advanced","settings"]];function c(b,T){if(!["ArrowLeft","ArrowRight","Home","End"].includes(b.key))return;b.preventDefault();let S=o.findIndex(([j])=>j===T),P=b.key==="Home"?0:b.key==="End"?2:(S+(b.key==="ArrowRight"?1:-1)+3)%3;i(o[P][0]),document.getElementById(`config-tab-${o[P][0]}`)?.focus()}let[l,d]=C({nodePath:e.runtime?.nodePath??"",evaluatorPath:"",copilotPath:e.runtime?.copilotPath??""}),[u,m]=C("auto"),[p,h]=C(""),{run:v,pending:k,error:$}=Oe(t),g=ze(e.operation?.phase)||e.operation?.phase==="preparing"||e.operation?.phase==="approval"||!!e.operation?.approval,f=k==="install_evaluator"||e.operation?.runId==="install-runner"&&["preparing","running","stopping"].includes(e.operation?.phase),w=()=>({...u==="local:npm"?{scope:"local",manager:"npm"}:u==="local:pnpm"?{scope:"local",manager:"pnpm"}:u==="global:npm"?{scope:"global",manager:"npm"}:{},...l.copilotPath?{copilotPath:l.copilotPath}:{}});return s`<section class="studio-pane runner-pane configuration-pane" aria-labelledby="runner-heading">
    <div class="studio-heading"><div><h2 id="runner-heading">Settings</h2>
      <p>Choose where to keep evals and when to run them in CI.</p></div>
      <span class="ck-badge">${e.runtime?"Runner verified this session":"Automatic runner selection"}</span></div>
    <div class="config-nav"><div role="tablist" aria-label="Configuration area">
      ${o.map(([b,T,S])=>s`<button type="button" role="tab" id=${`config-tab-${b}`}
        aria-controls=${`config-panel-${b}`} aria-selected=${r===b} tabindex=${r===b?0:-1}
        onKeyDown=${P=>c(P,b)} onClick=${()=>i(b)}><${U} name=${S} size=${16} />${T}</button>`)}
    </div><span>Review changes before saving.</span></div>
    <div hidden=${r==="advanced"}><${gs} key=${e.projectPath} state=${e} invoke=${t} section=${r} onSection=${i} /></div>
    <div id="config-panel-advanced" role="tabpanel" aria-labelledby="config-tab-advanced" hidden=${r!=="advanced"} class="config-advanced">
    <section class="config-card runner-advanced"><header><div><h3 ref=${a} tabindex="-1">Runner tools</h3>
      <p>Tools are selected automatically. Choose a different installation if needed.</p></div><span class="ck-badge">${e.runtime?"Verified this session":"Not verified"}</span></header>
    <div class="config-card-body">
    <p>Review & run selects installed tools and checks them while preparing the eval. Your app asks about the exact run and costs before execution. Nothing is downloaded or installed.</p>
    <p>Override automatic selection with an existing installation you trust.</p>
    <form class="runner-form" onSubmit=${async b=>{b.preventDefault(),await v("configure_evaluator",l)}}>
      <label class="stack-label">Install mode
        <select class="ck-select" name="install-mode" value=${u} onChange=${b=>m(b.target.value)}>
          <option value="auto">Auto-detect project package manager</option>
          <option value="local:npm">Project dependency (npm)</option>
          <option value="local:pnpm">Project dependency (pnpm)</option>
          <option value="global:npm">Global installation (npm)</option>
        </select>
      </label>
      <div class="draft-actions">
        <button class="ck-btn" type="button" disabled=${!!k||g} onClick=${()=>v("detect_runner")}>Find installed tools</button>
        <button class="ck-btn" type="button" disabled=${!e.trusted||!!k||g} onClick=${()=>v("install_evaluator",w())}>Install eval runner</button>
        ${f&&s`<button class="ck-btn ck-btn-danger" type="button" disabled=${e.operation?.phase==="stopping"} onClick=${()=>t("cancel_operation",{})}>${e.operation?.phase==="stopping"?"Stopping\u2026":"Stop installation"}</button>`}
      </div>
      ${e.runnerCandidates&&s`<div class="runner-candidates">
        ${[["node","nodePath","Node"],["vally","evaluatorPath","Eval runner"],["copilot","copilotPath","Copilot"]].map(([b,T,S])=>s`<label class="stack-label">${S} candidates
          <select class="ck-select" name=${`${T}-installed`} value=${l[T]} onChange=${P=>d(j=>({...j,[T]:P.target.value}))}>
            <option value="">Choose an installed tool or enter a path below</option>${e.runnerCandidates[b]?.candidates.map(P=>s`
              <option value=${P.path} key=${P.path}>${P.path} · ${P.version??"Unverified"}</option>`)}</select>
          ${!e.runnerCandidates[b]?.candidates.length&&s`<span class="ck-muted">No installation found. You can enter its path below.</span>`}</label>`)}
        ${e.runnerCandidates.problems?.map((b,T)=>s`<p class="ck-muted" key=${T}>${b}</p>`)}</div>`}
      ${[["nodePath","Node program","C:\\Program Files\\nodejs\\node.exe"],["evaluatorPath","Eval runner folder or CLI file","Full path to the installed @microsoft/vally-cli"],["copilotPath","Copilot CLI program (optional for mock evals)","Full path to the Copilot CLI program"]].map(([b,T,S])=>s`<label class="stack-label" key=${b}>${T}
        <input class="ck-input" name=${b} autocomplete="off" value=${l[b]} spellcheck="false" placeholder=${S}
          onInput=${P=>d(j=>({...j,[b]:P.target.value}))} /></label>`)}
      <div class="effect-notice"><strong>What happens next</strong><p>Starts the tools you selected to check their versions and installation details.
        This doesn't run evals, contact AI, start tool servers or install anything. Only choose programs you trust.</p></div>
      <p>Your app asks for approval before starting these checks.</p>
      <button class="ck-btn ck-btn-primary" type="submit" disabled=${!e.trusted||!!k||!l.nodePath||!l.evaluatorPath}>
        ${k?"Verifying\u2026":"Verify selected runner"}</button>
      <${_e} error=${$} />
    </form></div></section>
    ${e.runtime&&s`<dl class="runner-details"><dt>Node</dt><dd>${e.runtime.nodePath}</dd>
      <dt>Evaluator</dt><dd>${e.runtime.cliPath}</dd><dt>Version</dt><dd>${e.runtime.version}</dd>
      ${e.runtime.copilotPath&&s`<dt>Copilot</dt><dd>${e.runtime.copilotPath}</dd>`}</dl>`}
    <details class="troubleshooting config-card"><summary>Runner problems and run locks</summary>
      <p>A setup error doesn't mean the eval failed. Check full paths, supported versions and workspace trust. Check who owns a run lock before removing it.</p>
      <button class="ck-btn" disabled=${!!k} onClick=${()=>v("diagnose_lock")}>Diagnose run lock</button>
      ${e.lock&&s`<pre tabindex="0">${JSON.stringify(e.lock,null,2)}</pre>
        ${e.lock.state==="retained"&&s`<label class="stack-label">Confirm the saved lock ID
          <input class="ck-input" name="lock-identity" autocomplete="off" spellcheck="false" placeholder="Paste the full 64-character lock ID" onInput=${b=>h(b.target.value)} />
          <button class="ck-btn ck-btn-danger" disabled=${!e.trusted||!!k||p!==e.lock.identity}
            onClick=${()=>v("recover_lock",{identity:p})}>Recover this retained lock</button></label>`}`}
    </details>
    </div>
  </section>`}function Jn({state:e,invoke:t,onDefinitions:n,onOpenRun:r,beforeSwitch:i,onSwitchPending:a}){let{run:o,pending:c,error:l}=Oe(t),[d,u]=C("github"),[m,p]=C([]),[h,v]=C(""),[k,$]=C(""),g=e.operation,f=g.approval&&!g.approval.contrastId?g.approval:null,w=I(null);H(()=>{w.current?.focus()},[f?.id]);let b=["completed","failed","cancelled","cleanup-error"].includes(g.phase),T=e.assets.filter(N=>`${N.name} ${N.relativePath}`.toLowerCase().includes(h.toLowerCase())).slice(0,100),S=e.assets.filter(N=>m.includes(N.id)),P=S.find(N=>N.kind==="eval"),j=e.assets.filter(N=>N.kind==="eval"),M=j.find(N=>N.id===k);H(()=>{k&&!j.some(N=>N.id===k)&&$("")},[e.assets,k]);let E=ze(g.phase)||g.phase==="approval"||!!g.approval,ce=e.trusted&&!E&&!c;return s`<section class="studio-pane activity-pane" aria-labelledby="activity-heading">
    <div class="studio-heading"><div><h2 id="activity-heading">Run your evals</h2>
      <p>Choose an eval, review what it will do, and approve it to start. Follow progress and open the saved results here.</p></div>
      <span class=${`phase-badge phase-${g.phase}`} role="status">${g.phase}</span></div>
    <section class="eval-run-picker" aria-label="Choose an eval to run">
      <div class="eval-run-row">
        <label class="stack-label">Choose an eval<select class="ck-select" name="eval-to-run" value=${k}
          disabled=${E||!!c} onChange=${N=>$(N.target.value)}>
          <option value="">Select a saved eval</option>
          ${j.map(N=>s`<option value=${N.id} key=${N.id}>${N.name} · ${N.relativePath}</option>`)}
        </select></label>
        <button class="ck-btn ck-btn-primary" disabled=${!ce||!M}
          onClick=${()=>o("review_and_run",{id:M.id,authentication:d})}><${U} name="play" size=${15} />${c==="review_and_run"?"Waiting for your app\u2026":"Review & run"}</button>
      </div>
      <label class="stack-label">Authentication<select class="ck-select" name="authentication" value=${d} disabled=${ze(g.phase)||f?.hostPending||!!c} onChange=${N=>u(N.target.value)}>
        <option value="github">GitHub CLI sign-in (when the model or grader needs it)</option><option value="configured">Token from environment variables</option></select></label>
      <p class="ck-muted">${e.trusted?"Review & run starts installed runner checks and prepares this eval. Your app asks once about the exact run, tools and costs before execution. Nothing is installed.":"Trust this folder to prepare a run. You'll review and approve its effects before it starts."}</p>
      ${!j.length&&s`<p>No saved evals found. Create and save an eval first.</p>
        <button class="ck-btn" onClick=${n}>Browse evals</button>`}
    </section>
    <details class="project-checks"><summary>Select files to check or evals to run</summary>
      <p>Select up to 32 files to check for file and link problems. Evals run one at a time, with your approval before each run.</p>
      <label class="stack-label">Find files to check<input class="ck-input" name="check-query" autocomplete="off" value=${h} onInput=${N=>v(N.target.value)} /></label>
      <div class="check-targets">${T.map(N=>s`<label class="approval-check" key=${N.id}>
        <input type="checkbox" checked=${m.includes(N.id)} disabled=${!m.includes(N.id)&&m.length>=32}
          onChange=${we=>p(ge=>we.target.checked?[...ge,N.id]:ge.filter(de=>de!==N.id))} />
        <span>${N.name} · ${N.kind}<small>${N.relativePath}</small></span></label>`)}</div>
      ${e.discovery?.status==="ready"&&s`<${Tt} projectPath=${e.projectPath} invoke=${t}
        showScope=${!e.assets.length} beforeSwitch=${i} onSwitchPending=${a} />`}
      ${T.length===100&&s`<p>Showing the first 100 matches. Narrow your search to find other files.</p>`}
      <p>${S.length}/32 selected · ${S.filter(N=>N.kind==="eval").length} evals queued</p>
      <div class="draft-actions"><button class="ck-btn" disabled=${!ce||!S.length}
        onClick=${()=>o("run_health",{ids:S.map(N=>N.id)})}>Check selected files & links</button>
        <button class="ck-btn ck-btn-primary" disabled=${!ce||!P}
          onClick=${async()=>{await o("review_and_run",{id:P.id,authentication:d})&&p(we=>we.filter(ge=>ge!==P.id))}}>Review next eval</button>
        <button class="ck-btn" disabled=${!m.length||!!c} onClick=${()=>p([])}>Clear check selection</button></div>
    </details>
    ${f?s`<section class="run-approval" aria-labelledby="approval-heading">
      <h3 id="approval-heading" ref=${w} tabindex="-1">Run summary</h3><p>${f.message}</p>
      <div class="run-summary-text" role="region" aria-label="Run scope and historical cost">${f.displayDetail??f.detail}</div>
      <details><summary>Full model, input, tool and permission details</summary><pre tabindex="0">${f.detail}${`

`}${f.fullDetails}</pre></details>
      <p>${f.cases} cases · ${f.executor} · Saved run ${g.record?.id}</p>
      <p>${f.hostPending?"Review and approve this run in your app's confirmation prompt. Nothing executes until you accept.":"Your app will ask you to approve this exact run and its costs."}</p>
      <div class="draft-actions">${!f.hostPending&&s`<button class="ck-btn ck-btn-primary" disabled=${!e.trusted||!!c}
        onClick=${()=>o("execute_run",{approvalId:f.id,authentication:d})}>Review run approval</button>`}
        <button class="ck-btn" disabled=${c==="cancel_operation"} onClick=${()=>o("cancel_operation")}>Cancel approval</button></div>
    </section>`:ze(g.phase)?s`<section class="run-progress"><h3>${g.record?.name??"Current action"}</h3>
      <progress max=${g.total||1} value=${g.completed??0} aria-label="Completed targets"></progress>
      <p role="status">${g.completed??0}/${g.total??0} completed · ${g.phase}</p>
      <button class="ck-btn ck-btn-danger" disabled=${g.phase==="stopping"} onClick=${()=>o("cancel_operation")}>${g.phase==="stopping"?"Stopping\u2026":"Stop this run"}</button></section>`:s`<div class="empty-studio"><${U} name=${b?g.phase==="completed"?"circle-check":"triangle-alert":"play"} size=${32} /><h3>${b?"Run finished. See how it went.":"Ready to run an eval?"}</h3>
        <p>${b?"A finished run can still contain failed responses or errors. Open the report to see each outcome.":"Choose an eval and review it before starting. Opening this page doesn't start a run."}</p>
        <div class="empty-studio-actions">
          ${b&&g.record?.id&&r&&s`<button class="ck-btn ck-btn-primary" onClick=${()=>r(g.record.id)}><${U} name="arrow-up-right" size=${15} />Open in Results</button>`}
          <button class="ck-btn" onClick=${n}>Choose an eval</button>
        </div></div>`}
    ${g.record&&s`<div class="run-identity"><strong>${g.record.name??g.record.id}</strong>
      <code>${g.record.id}</code><span>${g.record.status}</span></div>
      <div class="evidence-actions">${["report","trajectory","output","source"].map(N=>s`
        <button class="ck-btn" disabled=${!!c} onClick=${()=>o("read_evidence",{id:g.record.id,kind:N})}>${N==="source"?"Report source":N==="trajectory"?"Conversation trace":N[0].toUpperCase()+N.slice(1)}</button>`)}
        ${b&&g.record?.id&&r&&s`<button class="ck-btn ck-btn-primary" disabled=${!!c} onClick=${()=>r(g.record.id)}>Open in Results</button>`}
        ${b&&s`<button class="ck-btn" disabled=${!!c} onClick=${()=>o("refresh")}>Refresh saved history</button>`}</div>`}
    ${g.output&&s`<details open class="live-output"><summary>Run output</summary><p class="ck-muted">Shows recent output only. Recognized secrets are hidden; check for other private information before sharing.</p><pre tabindex="0">${g.output}</pre></details>`}
    ${e.evidence&&s`<section class="saved-evidence"><h3>${e.evidence.title} · ${e.evidence.kind}</h3><pre tabindex="0">${e.evidence.text}</pre></section>`}
    <${_e} error=${l||g.error} />
  </section>`}function Gn({state:e,asset:t,invoke:n,onClose:r,onPrepared:i}){let[a,o]=C(""),[c,l]=C(""),[d,u]=C(""),[m,p]=C({tool:"",scope:"",expectedToolOutput:"",args:"{}"}),[h,v]=C(""),{run:k,pending:$,error:g}=Oe(n),f=I(null);return H(()=>{f.current?.focus()},[]),s`<section class="studio-pane behavior-pane" aria-labelledby="behavior-heading">
    <div class="studio-heading"><h2 id="behavior-heading" ref=${f} tabindex="-1">Prepare exact-output baseline: ${t.name}</h2><button class="ck-btn" onClick=${r}>Back to project files</button></div>
    <p>Prepare a baseline with an exact-response check for this ${t.kind}. This is separate from Create's editable drafts. You'll review any AI or tool use before running it.</p>
    <form class="baseline-form" onSubmit=${async w=>{w.preventDefault();let b;v("");try{b=JSON.parse(m.args)}catch{v("Tool arguments must be a valid JSON object. Check quotes, commas and brackets.");return}let T={task:a,expected:{kind:"output-exact",text:c},...d.trim()?{model:d.trim()}:{},...t.kind==="mcp-server"?{mcp:{operation:"read-only",tool:m.tool,scope:m.scope,expectedToolOutput:m.expectedToolOutput,args:b}}:{}};await k("prepare_baseline",{id:t.id,scenario:T})&&i()}}>
      <label class="stack-label">Realistic task<textarea class="ck-textarea" name="task" autocomplete="off" rows="5" maxLength="8000" value=${a} onInput=${w=>o(w.target.value)}></textarea></label>
      <label class="stack-label">Exact expected response<textarea class="ck-textarea" name="expected-response" autocomplete="off" rows="3" maxLength="2000" value=${c} onInput=${w=>l(w.target.value)}></textarea></label>
      <label class="stack-label">Model (optional: runner default)<input class="ck-input" name="model" autocomplete="off" spellcheck="false" value=${d} onInput=${w=>u(w.target.value)} placeholder="Supported model ID" /></label>
      ${t.kind==="mcp-server"&&s`<fieldset><legend>Approved read-only local fixture MCP action</legend>
        ${[["tool","Exact tool name"],["scope","Operation scope"],["expectedToolOutput","Expected observable tool output"],["args","String-valued tool arguments (JSON object)"]].map(([w,b])=>s`
          <label class="stack-label">${b}<input class="ck-input" name=${w} autocomplete="off" spellcheck="false" value=${m[w]} onInput=${T=>p(S=>({...S,[w]:T.target.value}))} /></label>`)}
        <p>Only local fixture servers that use stdio are supported. Remote servers, package installs, secrets and unclear settings are blocked.</p></fieldset>`}
      <p>Your app asks before creating eval inputs and checking their format. This doesn't approve AI requests or tool server use.</p>
      <button class="ck-btn ck-btn-primary" type="submit" disabled=${!e.trusted||!a.trim()||!c.trim()||!!$}>Prepare eval for review</button>
      <${_e} error=${h||g} />
    </form>
  </section>`}function Zn({state:e,invoke:t,source:n,uri:r}){let{run:i,pending:a,error:o}=Oe(t);return s`<div class="problem-help"><button class="ck-btn" disabled=${!e.trusted||!!a}
    onClick=${()=>i("request_diagnostic_fix",{source:n,...r?{uri:r}:{}})}>
    ${a?"Requesting help\u2026":"Ask Copilot to fix this"}</button>
    <${zt} state=${e} invoke=${t} compact />
    <${_e} error=${o} /></div>`}function xs({state:e,invoke:t,activeView:n,onAuthor:r,onSetup:i,onActivity:a}){let{run:o,pending:c,error:l}=Oe(t),d=e.operation.approval&&!e.operation.approval.contrastId?e.operation.approval:null;return s`
    <div class="workflow-bar">
      <div class="workflow-main">
      <div class="workflow-shortcuts">
        ${ze(e.operation.phase)||d?s`
          <button class="ck-btn operation-shortcut" onClick=${a}><${U} name="play" size=${14} />${e.operation.phase==="approval"?"Review run approval":`${e.operation.phase} \xB7 ${e.operation.completed}/${e.operation.total}`}</button>`:null}
        <${zt} state=${e} invoke=${t} />
        ${(e.issues.length>0||e.historyError)&&s`<button class="ck-btn" disabled=${!e.trusted||!!c}
          title="Send the current folder's problems to Copilot for help. Review and approve the request first."
          onClick=${()=>o("request_diagnostic_fix")}><${U} name="wand-sparkles" size=${15} />Ask Copilot</button>`}
        ${n!=="author"&&s`<button class="ck-btn ck-btn-primary" onClick=${r}><${U} name="sparkles" size=${15} />Create eval</button>`}
        <button class="ck-btn ck-btn-icon" id="btn-setup" type="button" aria-label="Settings" title="Settings"
          aria-pressed=${n==="setup"} aria-current=${n==="setup"?"page":void 0} onClick=${i}><${U} name="settings" size=${15} /></button>
      </div>
      </div>
      <${_e} error=${l} />
    </div>`}function _s({state:e,invoke:t,onActivity:n,onAuthor:r,onBaseline:i,assetId:a=e.selectedAssetId}){let{run:o,pending:c,error:l}=Oe(t),d=e.assets.find(p=>p.id===a),u=e.trusted&&!ze(e.operation.phase)&&!e.operation.approval&&e.graderTestPhase==="idle";if(!d)return null;let m=s`
    ${["eval","skill"].includes(d.kind)&&s`<button class="ck-btn" disabled=${!u||!!c}
      title="Validate the file format without running the eval."
      onClick=${()=>o("validate_asset",{id:d.id})}><${U} name="check" size=${14} />Check file format</button>`}
    <button class="ck-btn" disabled=${!e.trusted||!!c||ze(e.operation.phase)}
      title="Check file structure and links, not the eval's task or model behavior."
      onClick=${async()=>{await o("run_health",{ids:[d.id]})&&n()}}><${U} name="shield-check" size=${14} />Run file & link checks</button>`;return s`<div class="selected-asset-bar">
    <div class="selected-tools" role="group" aria-label="Selected file actions">
      <span class="selected-file-label ck-muted">${d.name}</span>
      ${d.kind==="eval"&&s`<button class="ck-btn ck-btn-primary" disabled=${!u||!!c}
        onClick=${async()=>{n(),await o("review_and_run",{id:d.id})}}><${U} name="play" size=${14} />Review & run</button>`}
      ${d.kind!=="eval"&&s`${m}
        <button class="ck-btn ck-btn-primary" disabled=${!1} onClick=${r}><${U} name="sparkles" size=${14} />Create eval for this file</button>`}
      ${["skill","agent","mcp-server"].includes(d.kind)&&s`<button class="ck-btn" disabled=${!u||!!c}
        onClick=${()=>i(d)}>Prepare exact-output baseline</button>`}
    </div>
    ${d.kind==="eval"&&s`
      <p>Review & run starts installed runner checks and prepares this eval. Your app asks once about the exact run, tools and costs before execution. Nothing is installed.</p>
      <details class="selected-checks" key=${d.id}><summary>More checks</summary>
        <p>Check file format validates the definition. File & link checks inspect structure and links, without testing model behavior.</p>
        <div class="selected-tools">${m}</div>
        <p>Graders score the answers from an eval. Test graders checks those scoring rules against reference answers or saved trajectories; it may run scripts or use paid models.</p>
        <${ns} key=${d.id} state=${e} item=${d} invoke=${t} />
      </details>`}
    ${e.validation&&s`<details class="validation-result"><summary>Format check: ${e.validation.status}</summary>
      <p>A format check doesn't show whether this eval can run or pass. Running needs separate compatibility checks and approval.</p>
      <pre tabindex="0">${e.validation.diagnosticText}</pre>
      ${e.validation.compatibility&&s`<p>Runner compatibility (separate from the format check): ${e.validation.compatibility.status}</p>
        <pre tabindex="0">${e.validation.compatibility.diagnostics.join(`
`)}</pre>`}</details>`}
    <${_e} error=${l} />
  </div>`}var Cs=(e,t)=>{let n=String(e??"").trim().replaceAll("\\","/").replace(/^\.\/+/,""),r=t?`${t}/`:"";return r&&n.startsWith(r)?n.slice(r.length):n},Yn=(e,t,n)=>e.length===t.length&&e.every((r,i)=>Cs(r.relativePath,n)===Cs(t[i]?.relativePath,n)&&(r.kind??"eval")===(t[i]?.kind??"eval")&&r.content===t[i]?.content);function Ss({state:e,invoke:t,onActivity:n,onSetup:r,draftCache:i,onSwitchPending:a}){let o=e.draft.epoch??"",c=e.draft.request?.outputDirectory??e.draft.handoff?.outputDirectory,l=i.current?.project===e.projectPath&&e.completedConversationRequestId===i.current?.completedConversationRequestId&&((i.current?.epoch??"")===o||i.current.dirty)?i.current:null,d=!l||(l.epoch??"")===o,u=d&&!!l?.dirty&&l.revision<e.draft.revision&&(l.outputDirectory??"")===(e.draft.outputDirectory??"")&&Yn(l.files,e.draft.files,c),m=e.assets?.find(L=>L.id===e.selectedAssetId),[p,h]=C(()=>l?l.dirty&&!u||l.revision>=e.draft.revision?l.files:e.draft.files:e.draft.files.length?e.draft.files:[{relativePath:"new.eval.yaml",kind:"eval",content:qt("New evaluation")}]),[v,k]=C(()=>l&&(l.dirty&&!u||l.revision>=e.draft.revision)?l.outputDirectory??"":e.draft.outputDirectory??""),[$,g]=C(0),[f,w]=C(l?l.dirty&&!u:!1),[b,T]=C(!!l?.dirty&&!u&&(!d||l.revision<e.draft.revision)),[S,P]=C(l?.message??""),[j,M]=C(null),[E,ce]=C(!1),[N,we]=C(!0),[ge,de]=C(!1),[Te,le]=C(!1),A=I(0),Q=I(""),[D,G]=C(l?.guided??{name:m?`${m.name} eval`:"New eval",task:"",expected:""}),[X,Y]=C(l?.preparedGuided??""),[J,ee]=C(!1),[W,V]=C(!1),[K,Z]=C(u?"":l?.syncIssue??""),re=I(null),Se=I(!0),De=I(null),He=I(null),Ce=I(0),$e=I(l?l.epoch??"":o),je=I(e.completedConversationRequestId),be=I(o);be.current=o;let ae=I(l&&!u&&(l.dirty||l.revision>e.draft.revision)?l.revision:e.draft.revision),Ee=I(!!e.draft.handoff);Ee.current=!!e.draft.handoff;let Me=I(!1),Ze=I(null),Ne=I({count:e.chat.messages.length,status:e.chat.status}),ue=I(null),me=I(null),Qe=I({review:!1,files:p.length}),xe=I(!1),ye=I(!1),{run:ie,pending:fe,error:F}=Oe(t),Be=["New eval",...m?[`${m.name} eval`,`${m.name} copy`]:[]],dt=!!D.task||!!D.expected||!Be.includes(D.name)||Object.keys(D.tags??{}).length>0,Fe=f||b||!!K||!!fe||W||!!S||dt&&X!==JSON.stringify(D),ke=()=>{if(Fe)throw new Error("Finish or clear the current form and pending draft edits before switching projects.")};H(()=>(Se.current=!0,()=>{Se.current=!1}),[]),We(()=>{(typeof document<"u"?document.activeElement:null)?.closest?.('[role="tablist"][aria-label="Workspace views"]')||De.current?.focus()},[]),We(()=>{Qe.current.review&&!E&&(xe.current=!0),Qe.current.files&&!p.length&&(ye.current=!0),Qe.current={review:E,files:p.length};let pe=(ye.current?[me.current]:xe.current?[ue.current,He.current,me.current]:[]).find(he=>he?.isConnected&&!he.disabled);pe&&(pe.focus(),xe.current=!1,ye.current=!1)},[E,p.length,fe]),We(()=>{i.current={project:e.projectPath,epoch:$e.current,files:p,outputDirectory:v,dirty:f,guided:D,preparedGuided:X,message:S,syncIssue:K,projectSwitchBlocked:Fe,revision:ae.current,completedConversationRequestId:e.completedConversationRequestId}},[p,v,f,D,X,S,K,Fe,e.projectPath,o]),H(()=>de(!1),[p,e.draft.revision,o]),H(()=>M(null),[e.projectPath,o]),H(()=>ee(!1),[p,b,e.selectedAssetId]),H(()=>{if(o!==$e.current){if(f&&(v!==(e.draft.outputDirectory??"")||!Yn(p,e.draft.files,c))){T(!0),ce(!1);return}$e.current=o,ae.current=e.draft.revision,h(e.draft.files.length?e.draft.files:[{relativePath:"new.eval.yaml",kind:"eval",content:qt("New evaluation")}]),k(e.draft.outputDirectory??""),g(0),w(!1),T(!1),Z(""),ce(!1),e.completedConversationRequestId!==je.current&&(je.current=e.completedConversationRequestId,Ce.current=0,P(""),G({name:m?`${m.name} eval`:"New eval",task:"",expected:""}));return}if(!(e.draft.revision<=ae.current)&&!Me.current){if(f&&(v!==(e.draft.outputDirectory??"")||!Yn(p,e.draft.files,c))){T(!0);return}ae.current=e.draft.revision,h(e.draft.files),g(0),w(!1),T(!1),Z(""),k(e.draft.outputDirectory??"")}},[e.draft.revision,o,fe,c]),H(()=>{(Ne.current.count!==e.chat.messages.length||Ne.current.status!==e.chat.status)&&(Ze.current?.scrollIntoView({block:"nearest"}),Ne.current={count:e.chat.messages.length,status:e.chat.status})},[e.chat.messages.length,e.chat.status]),H(()=>{e.draft.proposal||(ce(!1),le(!1))},[e.draft.proposal]);function _(L,pe){tt||(Ce.current++,w(!0),de(!1),ce(!1),Z(""),h(he=>he.map((Ue,pt)=>pt===L?{...Ue,...pe}:Ue)))}async function q(L=!1){if(re.current)return re.current;if(Z(""),!p.length&&!e.draft.files.length)return w(!1),T(!1),{files:0};if(!p.length&&(e.draft.request||e.draft.handoff))return null;L&&($e.current=o);let pe=Ce.current,he=$e.current;Me.current=!0;let Ue=L?e.draft.revision:ae.current,pt=L?o:he,mt=(async()=>{try{let Ge=await ie(p.length?"update_draft":"clear_draft",{...p.length?{files:p,...v||e.draft.outputDirectory!==void 0?{outputDirectory:v}:{}}:{},expectedRevision:Ue,...pt?{expectedEpoch:pt}:{}});return $e.current!==he||Ge?.epoch!==void 0&&he&&Ge.epoch!==he?null:be.current!==he&&Ge?.epoch!==be.current?(T(!0),null):Ge?(Ge.epoch!==void 0&&($e.current=Ge.epoch),ae.current=Ge.revision??e.draft.revision,T(!1),Ce.current===pe&&w(!1),Ce.current===pe?Ge:null):(Se.current&&Z("Couldn't sync the draft, or syncing was cancelled. Your edits are kept. Choose Retry sync before checking or sending."),null)}finally{Me.current=!1,re.current=null}})();return re.current=mt,mt}async function te(){let L=Ce.current;(f||!e.draft.files.length)&&!await q()||Ce.current===L&&await ie("validate_draft")}async function Ie(){f&&!await q()||await ie("retry_draft")}async function st(){if(e.draft.handoff||Ee.current)return!1;let L=i.current?.files??p,pe=$e.current;Me.current="retargeting",w(!0);try{let he=await ie("clear_draft",{expectedRevision:ae.current,...pe?{expectedEpoch:pe}:{}});if(!he||$e.current!==pe||be.current!==pe&&he.epoch!==be.current||he.epoch!==void 0&&pe&&he.epoch!==pe)return!1;he.epoch!==void 0&&($e.current=he.epoch),ae.current=he.revision??e.draft.revision;let Ue=i.current?.files??L;if(Ue.length){let pt=Ce.current,mt=$e.current;Me.current=!0;let Ge=await ie("update_draft",{files:Ue,...v?{outputDirectory:v}:{},expectedRevision:ae.current,...mt?{expectedEpoch:mt}:{}});if(!Ge||$e.current!==mt||be.current!==mt&&Ge.epoch!==be.current||Ge.epoch!==void 0&&mt&&Ge.epoch!==mt)return!1;Ge.epoch!==void 0&&($e.current=Ge.epoch),ae.current=Ge.revision??e.draft.revision,Ce.current===pt&&(w(!1),T(!1))}else w(!1),T(!1);return Z(""),!0}finally{Me.current=!1}}function Xe(L){if(L.key==="Escape"){L.preventDefault(),[ue.current,me.current,De.current].find(pt=>pt&&!pt.disabled)?.focus();return}if(L.key!=="Tab"||L.shiftKey||tt)return;L.preventDefault();let{selectionStart:pe,selectionEnd:he}=L.target,Ue=`${p[$].content.slice(0,pe)}  ${p[$].content.slice(he)}`;_($,{content:Ue}),requestAnimationFrame(()=>{He.current.selectionStart=He.current.selectionEnd=pe+2})}let qe=p[$],$t=e.trusted&&!ze(e.operation.phase)&&!e.operation.approval&&(!e.graderTestPhase||e.graderTestPhase==="idle"),it=e.detail?.type==="asset"?e.detail:null,y=it?.kind==="eval"&&(it.sourceUnchanged!==!0||it.stale)?"This preview is shortened, changed, or out of date. Read the full original through an approved reader before replacing the draft, or settings could be lost.":"",x=e.assets??[],se=x.filter(L=>L.kind!=="eval"),Re=x.filter(L=>L.kind==="eval"),Ke=(e.draft.handoff?.targetAsset??x.find(L=>L.id===e.selectedAssetId))?.kind==="eval"?"improve":"create",et=!!(e.draft.saving||e.draft.closed||e.draft.request?.stateUnavailable||e.draft.request?.recoveryRequired),bt=ps(e.draft),tt=!!(et||bt||fn(e.draft)||e.draft.conversation),$n=!fe&&!tt&&!e.draft.handoff,bn=p.length===1&&!Ce.current&&p[0].relativePath==="new.eval.yaml"&&p[0].kind==="eval"&&p[0].content===qt("New evaluation"),At=!!e.draft.request,It=!!e.draft.handoff;H(()=>{if(!f||fe||b||tt||K||!p.length&&(At||It))return;let L=setTimeout(()=>{q()},250);return()=>clearTimeout(L)},[p,v,f,fe,b,tt,K,At,It]);let R=e.draft.conversation?"This Canvas preview is read-only.":et?"Wait for the original save, or recover it using the same request and proposed files.":b?"Resolve the shared draft conflict before continuing.":e.draft.revision<ae.current?"Waiting for the current shared draft. Refresh if disconnected.":e.draft.request&&(e.draft.request.targetId??"")!==(e.selectedAssetId??"")?bt?"Select the source used for this incomplete save, then reopen Review & save to recover the same proposed files.":e.draft.handoff?"Select this Chat draft's original source, or discard the draft.":"The selected source changed. Choose Use selected source for this draft before checking or sending.":!p.length&&(e.draft.request||e.draft.handoff)?"Add a file to keep this draft, or discard it.":K||(e.trusted?e.draft.request?.canRestart?e.draft.handoff?"This Chat draft keeps its original requirements and source files. Discard the draft to start over.":"The folder is trusted again. Start a new request to check your kept draft against the current source.":$t?fe?fe==="update_draft"||fe==="clear_draft"?"Synchronizing your draft in memory.":"Wait for the current draft action to finish.":"":"Finish or cancel the current eval operation before continuing.":e.trustSource==="native"&&!e.trustCanGrant?"Trust this workspace in your app to use AI, check files and save.":"Select Trust this folder to use AI, check files and save."),O=R||(e.draft.handoff?"This draft came from Chat. Continue in the original Chat, or review and save it here.":e.supportsConversation?e.draft.saveOutcome&&!e.draft.saveOutcome.complete&&!e.draft.saveAttempted?"Choose Retry draft to clear the refused save before sending it to Copilot.":"":"This host cannot send to a Copilot conversation. Your draft stays here.");async function ne(){if(O||tt||fe||!S.trim()||["approval","thinking"].includes(e.chat.status))return;let L=Ce.current,pe=$e.current,he=e.selectedAssetId??"";if(f&&!await q()||!Se.current||Ce.current!==L||be.current!==pe)return;let Ue=$e.current,pt=await ie("continue_authoring",{intent:Ke,...Ke==="create"&&D.tags?{tags:D.tags}:{},message:[D.task,D.expected&&`Expected result: ${D.expected}`,S.trim()].filter(Boolean).join(`
`),expectedRevision:ae.current,expectedEpoch:$e.current,expectedSourceId:he});Se.current&&be.current===Ue&&M({projectPath:e.projectPath,epoch:Ue,requestId:pt?.requestId})}let z=fs(e.draft),Pe=!!(e.draft.retained&&e.draft.request&&e.draft.saveOutcome&&!e.draft.saveOutcome.complete&&!e.draft.saveAttempted&&!e.draft.request.stateUnavailable&&!e.draft.request.recoveryRequired),B=!e.draft.saving&&!e.draft.saveAttempted&&(Pe||z||e.draft.request?.validated&&(e.draft.request.canRetry||fn(e.draft))&&!e.draft.saveOutcome&&(f||!e.draft.proposal||!e.draft.proposal.canCommit)),ve=!B&&!f&&!R&&!!e.draft.proposal?.canCommit,ut=e.draft.saveOutcome?.complete?"Step 3 complete: Files created. Choose an eval to run next.":ve?"Step 2 complete: Format check passed. Ready to Review & save.":B?z||Pe?"Resolve the reported cause, then retry and check the draft again.":"Draft changed or rejected after check. Retry edited draft to validate again.":e.trusted?f?"Step 1: Syncing your edits without saving files. Checking and saving still need separate actions.":"Step 1: Choose Check draft before saving.":"Step 1: Edit your draft, then trust this folder to Check draft and Review & save.",Ae={state:e,invoke:t,run:ie,pending:fe,error:F,draftEpoch:o,files:p,setFiles:h,setSelected:g,setDirty:w,setConflict:T,setDiscard:de,setReview:ce,setSyncIssue:Z,setDirectoryChoice:k,guided:D,setGuided:G,setPreparedGuided:Y,beforeSwitch:ke,onSwitchPending:a,replace:J,setReplace:ee,tagsPending:W,setTagsPending:V,message:S,setMessage:P,sendMessage:ne,sendBlocked:O,showSendNotice:!!e.draft.conversation&&j?.projectPath===e.projectPath&&j?.epoch===o&&(!j.requestId||j.requestId===e.draft.conversation.requestId),showDiagnostics:Te,setShowDiagnostics:le,dirty:f,blocked:R,lockedDraft:tt,conflict:b,ready:$t,canRetarget:$n,canRetryDraft:B,retryingSave:z||Pe,stepReadyToSave:ve,stepStatus:ut,syncIssue:K,discard:ge,isStarterDraft:bn,source:it,copyNotice:y,allProjectFiles:x,projectAssets:se,projectEvals:Re,outputDirectory:c,directoryChoice:v,hasBoundRequest:At,hasBoundHandoff:It,version:Ce,lastSynced:ae,lastEpoch:$e,sharedEpoch:be,hasHandoff:Ee,discardRevision:A,discardEpoch:Q,applying:Me,saveButton:ue,chatEnd:Ze,sync:q,retargetDraft:st,validate:te,retryDraft:Ie,onSetup:r,onActivity:n};return s`<section class="studio-pane author-pane" aria-labelledby="author-heading">
    <div class="studio-heading"><div><h2 ref=${De} tabindex="-1" id="author-heading">Create an eval</h2>
      <p>Describe the task and expected response, then review your draft before saving.</p></div>
      <button class="ck-btn" onClick=${()=>we(!N)} aria-expanded=${N}>${N?"Hide":"Show"} Copilot</button></div>
    ${ls(Ae)}
    <div class=${`studio-grid ${N?"":"editor-only"}`}>
    <div class="author-workspace">
    ${cs(Ae)}
      <div class="editor-workspace">
        <div class="editor-toolbar"><strong>Eval draft</strong><span role="status" class=${f?"dirty-dot":"ck-muted"}>${K?"Sync needs attention":f?"Sync pending":e.draft.files.length?e.draft.retained?"Retained privately":"Synced in memory":p.length?"Starter draft":"No draft files"}</span>
          <button ref=${me} class="ck-btn" disabled=${tt||p.length>=16||!!fe} onClick=${()=>{Ce.current++,w(!0),g(p.length),Z(""),ce(!1),h(L=>[...L,{relativePath:`new-${L.length+1}.eval.yaml`,kind:"eval",content:qt(`Evaluation ${L.length+1}`)}])}}>+ File</button></div>
        <div class="file-tabs" role="tablist" aria-label="Draft files">${p.map((L,pe)=>s`
          <button class=${`file-tab ${$===pe?"active":""}`} role="tab" aria-selected=${$===pe}
            id=${`draft-tab-${pe}`} aria-controls="draft-file-panel" tabindex=${$===pe?0:-1}
            key=${pe} onClick=${()=>g(pe)} onKeyDown=${he=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(he.key))return;he.preventDefault();let Ue=he.key==="Home"?0:he.key==="End"?p.length-1:(pe+(he.key==="ArrowRight"?1:-1)+p.length)%p.length;g(Ue),document.getElementById(`draft-tab-${Ue}`).focus()}}>${L.relativePath.split("/").at(-1)||`File ${pe+1}`}</button>`)}</div>
        <div id="draft-file-panel" role="tabpanel" aria-labelledby=${qe?`draft-tab-${$}`:void 0}>
        ${qe?s`<div class="file-metadata"><label class="stack-label">New file path<input class="ck-input" name="draft-path" disabled=${tt} autocomplete="off" spellcheck="false" value=${qe.relativePath}
          onInput=${L=>_($,{relativePath:L.target.value})} /></label>
          <label class="stack-label">File type<select class="ck-select" name="draft-kind" disabled=${tt} value=${qe.kind} onChange=${L=>{let pe=L.target.value,he={kind:pe},Ue=/(?:^|[\\/])fixtures[\\/]/i.test(qe.relativePath);pe==="fixture"&&!Ue?he.relativePath=`fixtures/sample/input-${$+1}.txt`:pe==="eval"&&Ue&&(he.relativePath=`new-${$+1}.eval.yaml`),_($,he)}}>
            <option value="eval">Eval file (.eval.yaml)</option><option value="fixture">Sample input file (fixtures/...)</option></select></label>
          <button class="ck-btn" aria-label="Remove selected draft file" disabled=${tt} onClick=${()=>{Ce.current++,w(!0),Z(""),ce(!1),h(L=>L.filter((pe,he)=>he!==$)),g(Math.max(0,$-1))}}>Remove</button></div>
          <div class="code-editor"><pre class="line-numbers" aria-hidden="true">${qe.content.split(`
`).map((L,pe)=>pe+1).join(`
`)}</pre>
            <textarea ref=${He} class="source-editor" name="draft-content" readonly=${tt} autocomplete="off" aria-label=${`Edit ${qe.relativePath}`} aria-describedby="editor-key-help" spellcheck="false" wrap="off" value=${qe.content}
              onKeyDown=${Xe} onScroll=${L=>{L.target.previousElementSibling.scrollTop=L.target.scrollTop}}
              onInput=${L=>_($,{content:L.target.value})}></textarea></div>
          <div class="editor-status"><span>${qe.content.split(`
`).length} lines</span><span>${new TextEncoder().encode(qe.content).length.toLocaleString()} bytes</span><span id="editor-key-help">Tab indents · Shift+Tab or Esc exits</span><span>New files only · UTF-8</span></div>`:s`<div class="empty-studio"><h3>No draft files yet.</h3><p>Add a file or ask Copilot for a proposal. No project files have changed.</p></div>`}
        </div>
        ${qe?.kind==="fixture"&&s`<p class="ck-muted">Sample input files (.txt, .json, .md, or .csv) are saved under fixtures/&lt;folder&gt;/ so your eval can pass test files to the AI.</p>`}
        ${ds(Ae)}
      </div>
    </div>
      ${N&&us(Ae)}
    </div>
    ${E&&e.draft.proposal&&s`<${rs} proposal=${e.draft.proposal} pending=${fe}
      error=${F} outcome=${e.draft.saveOutcome}
      onClose=${()=>ce(!1)}
      onSave=${async()=>{(await ie("save_draft",{proposalId:e.draft.proposal.proposalId}))?.complete&&ce(!1)}} />`}
  </section>`}function js(e,t=0,n={}){let{onSelectEvidence:r,showTrajectory:i=!0,disabled:a=!1}=n,o=e.status==="passed"?"row-kind-success":"row-kind-attention",c=e.score!==null&&e.score!==void 0?`Score: ${e.score}`:"Score: not reported",l=Mt(e.judgeUsage),d=e.sameAttemptEvidence,u=!!(d?.available&&r&&d.target&&(d.target!=="trajectory"||i));return s`<li class="case-grader-item" key=${`${e.id}-${t}`}>
    <div class="case-grader-header">
      <strong>${e.name}</strong>
      <code class="case-grader-kind">${e.kind}</code>
      <span class=${`ck-badge ${o}`.trim()}>${e.status}</span>
      <span class="ck-muted">${c}</span>
    </div>
    <p class="case-grader-reason">${e.reason}</p>
    <p class="ck-muted case-grader-proves">What this check tells you: ${e.proves}</p>
    ${d?.summary&&s`<p class="ck-muted case-grader-evidence">Attempt evidence: ${d.summary}</p>`}
    ${u&&s`<div class="case-grader-evidence-actions">
      <button class="ck-btn ck-btn-sm" type="button" disabled=${a} onClick=${()=>r(d.target,{caseId:d.caseId,caseName:d.caseName,...d.stimulus?{stimulus:d.stimulus}:{},graderId:e.id,attempt:d.attempt,configuration:d.configuration,model:d.model,...d.artifact?{artifact:d.artifact}:{},turn:d.turn})}>${d.target==="trajectory"?"Open attempt conversation trace":d.target==="output"?"Open attempt output":"Open attempt report"}</button>
    </div>`}
    ${l&&s`<p class="ck-muted case-grader-judge">${l}</p>`}
    ${e.children?.length>0&&s`<ul class="case-grader-children" aria-label=${`Nested checks for ${e.name}`}>
      ${e.children.map((m,p)=>js(m,p,n))}
    </ul>`}
  </li>`}function ea({cases:e,mode:t="engine",onSelectEvidence:n,disabled:r=!1}){let i=Array.isArray(e)?ft({cases:e}):[];if(!i.length||t==="health")return null;let a=t==="engine";return s`<section class="case-breakdown" role="region" aria-label="Per-case metrics and check breakdown">
    <h3>Results and checks for each case</h3>
    ${i.map((o,c)=>{let l=o.outcome==="pass"?"row-kind-success":["fail","error"].includes(o.outcome)?"row-kind-attention":"",d=o.trial?.attempt??null;return s`<div class="case-breakdown-card" key=${`${o.id}-${c}`}>
        <div class="case-breakdown-header">
          <strong>${o.name}</strong>
          <span class=${`ck-badge ${l}`.trim()}>${o.outcome}</span>
          ${o.trial?.model&&s`<code class="ck-muted">${o.trial.model}</code>`}
        </div>
        ${!o.trial?.artifact&&s`<p class="ck-muted">These answers aren't linked to a specific saved attempt. You can still read them.</p>`}
        ${o.evidenceDiagnostics.map(u=>s`<p class="evidence-notice" role="status">${u.message}</p>`)}
        <dl class="case-metrics-grid" aria-label=${`Metrics for ${o.name}`}>
          <dt>Duration</dt><dd>${o.formattedDuration}</dd>
          <dt>Tokens</dt><dd>${o.formattedTokens}</dd>
          <dt>Turns</dt><dd>${o.formattedTurns}</dd>
          <dt>Observed tools</dt><dd>${o.formattedObservedTools}</dd>
          <dt>Observed skills</dt><dd>${o.formattedObservedSkills}</dd>
        </dl>
        <div class="case-graders-section">
          <h4>${`Grader checks (${o.graderOutcomes.length})`}</h4>
          ${o.graderOutcomes.length?s`<ul class="case-grader-list">
            ${o.graderOutcomes.map((u,m)=>js(u,m,{onSelectEvidence:n,showTrajectory:a,disabled:r}))}
          </ul>`:s`<p class="ck-muted">No check results were reported for this case.</p>`}
        </div>
        ${!o.ambiguousEvidence&&o.trial?.artifact&&n&&s`<div class="case-evidence-links">
          ${a&&s`<button class="ck-btn ck-btn-sm" type="button" disabled=${r} onClick=${()=>n("trajectory",{caseId:o.id,caseName:o.name,...o.stimulus?{stimulus:o.stimulus}:{},attempt:d,configuration:o.trial?.configuration??null,model:o.trial?.model??null,artifact:o.trial.artifact,turn:null})}>View conversation trace</button>`}
          <button class="ck-btn ck-btn-sm" type="button" disabled=${r} onClick=${()=>n("output",{caseId:o.id,caseName:o.name,...o.stimulus?{stimulus:o.stimulus}:{},attempt:d,configuration:o.trial?.configuration??null,model:o.trial?.model??null,artifact:o.trial.artifact,turn:null})}>View Output</button>
        </div>`}
      </div>`})}
  </section>`}function Qn({text:e,run:t,detail:n,cases:r,onSelectEvidence:i,disabled:a=!1}){let[o,c]=C(!1),l=tn(()=>hn(e),[e]),d=tn(()=>Array.isArray(r)&&r.length?ft({cases:r}):Array.isArray(n?.cases)&&n.cases.length?ft(n):Array.isArray(t?.cases)&&t.cases.length?ft(t):[],[r,n,t]),u=n?.mode??t?.mode??"engine",m=e.match(/\[Display truncated[^\]\r\n]{0,200}\]/)?.[0],p=h=>{if(typeof h=="string")return h;let v=h.children.map(p);return h.tag==="table"?s`<div class="report-table" tabindex="0" role="region" aria-label="Report table"><table>${v}</table></div>`:s`<${h.tag}>${v}<//>`};return s`<div class="report-view">
    ${(n?.evidenceDiagnostics??t?.evidenceDiagnostics??[]).map(h=>s`<p class="evidence-notice" role="status">${h.message}</p>`)}
    ${m&&s`<p class="evidence-notice" role="status">${m}</p>`}
    <div class="evidence-actions report-display-toggle" role="group" aria-label="Report view">
      <span class="report-display-label" aria-hidden="true">Display</span>
      <button class="ck-btn report-mode-btn" type="button" aria-pressed=${!o} aria-controls="report-content" onClick=${()=>c(!1)}>Preview</button>
      <button class="ck-btn report-mode-btn" type="button" aria-pressed=${o} aria-controls="report-content" onClick=${()=>c(!0)}>Source</button>
    </div>
    ${!o&&u==="engine"&&d.length>0&&ea({cases:d,mode:u,onSelectEvidence:i,disabled:a})}
    ${o?s`<pre id="report-content" tabindex="0" role="region" aria-label="Saved report text">${e}</pre>`:s`<div id="report-content" class="report-preview" tabindex="0" role="region" aria-label="Saved report preview">
        ${l.nodes.map(p)}
        ${l.truncated&&s`<p class="snapshot-notice" role="status">This preview is shortened. Source shows the text returned by the reader, which may also have a size limit. Saved results are unchanged.</p>`}
      </div>`}
  </div>`}function Ps({state:e,invoke:t,onBusy:n}){let[r,i]=C(""),[a,o]=C(!1),[c,l]=C(""),d=I(null),u=I(!1),m=I(0),p=I(null),[h,v]=C(!1),[k,$]=C(!1),[g,f]=C(!1),w=I(null);H(()=>v(!1),[e.projectPath]),H(()=>{u.current=!1,m.current++,l(""),o(!1),n(!1),i(""),$(!1),f(!1)},[e.context.workingDirectory]),H(()=>{m.current++,l(""),o(!1),n(!1),u.current=!1,i(""),$(!1),f(!1)},[e.projectPath]);function b(){if(!a){if(r){f(!0);return}p.current.open=!1,p.current.querySelector("summary").focus()}}H(()=>{let S=P=>{p.current?.open&&!p.current.contains(P.target)&&!k&&!g&&b()};return document.addEventListener("pointerdown",S),()=>document.removeEventListener("pointerdown",S)},[r,a,k,g]);async function T(S){S.preventDefault();let P=++m.current;if(l(""),!Zr(r)){l("Enter an absolute project folder, for example C:\\code\\project."),d.current.focus();return}o(!0),n(!0);try{let j=await t("discover_project",{projectPath:r});if(m.current!==P)return;j.available===!1?(l(j.message||"Couldn't read this folder. See Problems for details, then try again."),d.current.focus()):j.discarded||(u.current=!1,i(""))}catch(j){if(m.current!==P)return;l(j.message),d.current.focus()}finally{m.current===P&&(o(!1),n(!1))}}return s`
    <details ref=${p} class="workspace-picker" onKeyDown=${S=>{S.key==="Escape"&&!k&&!g&&(S.preventDefault(),b())}}>
      <summary title=${e.projectPath||"Choose the folder to inspect"} onClick=${S=>{p.current.open&&(S.preventDefault(),b())}}><${U} name="folder" size=${16} />
        <span class="workspace-name">${Gr(e.projectPath)}</span><span aria-hidden="true">▾</span></summary>
      <div class="workspace-disclosure">
      <div class="workspace-current"><strong>Current folder</strong>
        <button class="ck-btn copy-path" type="button" aria-label="Copy path" title=${h?"Path copied":"Copy path"} disabled=${!e.projectPath} onClick=${async()=>{let S=m.current;try{await dn(e.projectPath,t),m.current===S&&(v(!0),l(""))}catch(P){m.current===S&&l(P.message)}}}><${U} name=${h?"check":"copy"} size=${16} /></button></div>
      <span class="sr-only" role="status">${h?"Path copied":""}</span>
      <code class="workspace-path">${e.projectPath||"No folder selected"}</code>
      <div class="workspace-actions">
        ${e.context.mode==="manual"&&e.context.workingDirectory&&s`
          <button class="ck-btn" type="button" disabled=${a||e.readStatus==="reading"} onClick=${async()=>{u.current=!1;let S=++m.current;l(""),i(""),o(!0),n(!0);try{await t("follow_context")}catch(P){m.current===S&&l(P.message)}finally{m.current===S&&(o(!1),n(!1))}}}>Follow workspace</button>`}
      </div>
      <form class="project-picker" onSubmit=${T} aria-label="Select project">
      <label for="project-path">Another folder</label>
      <div class="project-input-row">
        <input ref=${d} id="project-path" class="ck-input" name="projectPath" autocomplete="off" spellcheck="false"
          placeholder="Choose a folder with Browse…" value=${r} readonly
          aria-invalid=${!!c} aria-describedby=${c?"project-error project-help":"project-help"}
          />
        <button ref=${w} class="ck-btn" type="button" disabled=${a} onClick=${()=>$(!0)}>Browse…</button>
        <button class="ck-btn ck-btn-primary" type="submit" disabled=${a||e.readStatus==="reading"||!r}>${a?"Loading\u2026":"Load"}</button>
      </div>
      <p id="project-help" class="ck-muted field-help">${r?"Choose Load to switch folders.":"Choose another folder to load its evals, assets and saved results."}</p>
      </form>
      ${c&&s`<p id="project-error" class="field-error" role="alert">${ot(c)}</p>`}
      ${k&&s`<${pn} initialFolder=${r||e.projectPath||e.context.workingDirectory} invoke=${t}
        onClose=${()=>{$(!1),gt(w.current)}}
        onChoose=${S=>{u.current=!0,m.current++,l(""),i(S===e.projectPath?"":S),$(!1),gt(w.current)}} />`}
      ${g&&s`<${zn} onKeep=${()=>{f(!1),gt(w.current)}}
        onDiscard=${()=>{f(!1),u.current=!1,i(""),l(""),p.current.open=!1,p.current.querySelector("summary").focus()}} />`}
      </div>
    </details>
  `}function Ts(e,t,n){let r=[];for(let[i,a]of e.entries()){let o=t[a.source],c=t[a.target];if(!o||!c)continue;let l=o.lane===c.lane,d=l&&c.index===o.index+1,u=$=>$.x+$.width/2,m=$=>$.y+$.height/2,p,h,v,k;if(a.kind==="trajectory")if(n){p={x:u(o),y:o.y+o.height},h={x:c.x,y:m(c)};let $=Math.min(o.x,c.x)-18,g=p.y+42;v=`M ${p.x} ${p.y} V ${g} H ${$} V ${h.y} H ${h.x}`,k={x:(p.x+$)/2,y:g,width:Math.max(100,p.x-$-12),text:"Record for the checks"}}else{p={x:o.x+o.width,y:m(o)},h={x:c.x,y:m(c)};let $=(p.x+h.x)/2;v=`M ${p.x} ${p.y} H ${$} V ${h.y} H ${h.x}`,k={x:$,y:(p.y+h.y)/2,width:Math.max(70,h.x-p.x-20),text:`Conversation record
Used by the checks`}}else if(d)p={x:u(o),y:o.y+o.height},h={x:u(c),y:c.y},v=`M ${p.x} ${p.y} V ${(p.y+h.y)/2} H ${h.x} V ${h.y}`,k={x:h.x,y:(p.y+h.y)/2,width:Math.max(100,c.width-24),text:a.label};else if(!n&&l&&a.kind==="grading"){p={x:o.x,y:m(o)},h={x:c.x,y:m(c)};let $=Math.min(p.x,h.x)-18;v=`M ${p.x} ${p.y} H ${$} V ${h.y} H ${h.x}`}else if(!n&&l&&a.kind==="aggregation"){p={x:o.x+o.width,y:m(o)},h={x:c.x+c.width,y:m(c)};let $=Math.max(p.x,h.x)+18;v=`M ${p.x} ${p.y} H ${$} V ${h.y} H ${h.x}`}else continue;r.push({...a,id:`relation-${i}`,start:p,end:h,path:v,label:k})}return r}function As(e,t,n){let r=new Map(n.map(i=>[i.key,i]));return e.filter(i=>i.kind!=="order"&&(i.source===t||i.target===t)).map(i=>{let a=i.target===t,o=a?i.source:i.target,c=r.get(o)?.title??o,l=i.kind==="grading"&&r.get(i.source)?.kind==="prompt",d=i.kind==="trajectory"?a?"See where the conversation is recorded":"See how the checks use this record":l?a?`Checks ${c}`:`Checked by ${c}`:`${i.label} ${a?"from":"to"} ${c}`;return{target:o,label:d,kind:i.kind,promptScope:l}})}var Ct=["Visual","Outline","Source"],Is={defaults:"Settings in this file",executor:"Agent provider",model:"Agent model",runs:"Attempts per task",timeout:"Time limit",reasoning_effort:"Reasoning effort",judge_model:"Model used by checks",judge_reasoning_effort:"Reasoning effort for checks",judge_provider:"Check model provider (not verified)",files:"Files and where they go",skills:"Skills available to the agent",env:"Environment-variable values (hidden)",mcpServers:"Tool servers (not started)",commands:"Setup commands (not run)",commandTimeout:"Setup time limit",config:"Settings as written",type:"Type",name:"Name",scope:"Which agent is checked",turn:"Instruction index (starts at 0)",value:"Value",substring:"Text to look for",pattern:"Text pattern",negate:"Reverse this check",required:"Required",disallowed:"Not allowed",path:"File path",constraints:"Limits",max_tokens:"Token limit",max_turns:"Turn limit",max_duration:"Hard time limit",max_agent_duration:"Agent working-time limit",attachments:"Attachments for the first instruction",threshold:"Minimum score",weights:"Check weights",prompt:"Instructions for the reviewing model",scoring:"How the model scores its review",evidence:"Evidence used by the check",program:"Checking program (not run)",args:"Program arguments",dest_root:"Destination root"};function ta(e){return e==="agent_environment"||e==="environment"?"Inputs shared by all tasks in this eval":e==="grading_environment"?"Reference files shared by the checks":/^stimuli\[\d+\]\.(?:agent_environment|environment)$/.test(e)?"Inputs for this task":/^stimuli\[\d+\]\.grading_environment$/.test(e)?"Reference files for this task's checks":Object.hasOwn(Is,e)?Is[e]:e}function Xn({value:e,depth:t=0,field:n=""}){if(t>6)return s`<p class="ck-muted">Open Advanced to see the remaining nested settings.</p>`;if(typeof e=="string"&&["args","commands","command","golden_command","script","code"].includes(n)&&(e.length>160||e.includes(`
`)))return s`<p class="ck-muted">Configured code or command (${e.length} characters). Inspect Advanced for the exact text; it has not been run.</p>`;if(e===null||typeof e!="object")return s`<p class="eval-authored-value">${e===null?"Empty (null)":String(e)}</p>`;if(Array.isArray(e))return e.length?s`<ul class="eval-value-list">${e.slice(0,24).map(i=>s`
    <li><${Xn} value=${i} depth=${t+1} field=${n} /></li>`)}
    ${e.length>24&&s`<li class="ck-muted">${e.length-24} more values in Advanced.</li>`}</ul>`:s`<p class="ck-muted">None listed.</p>`;if(typeof e.src=="string"&&typeof e.dest=="string")return s`<div class="eval-file-mapping">
    <div><span class="ck-muted">Source file</span><code>${e.src}</code></div>
    <span class="eval-file-arrow" aria-label="mapped to">→</span>
    <div><span class="ck-muted">Workspace path</span><code>${e.dest}</code></div>
    ${e.dest_root!==void 0&&s`<p class="ck-muted">Destination root: ${String(e.dest_root)}</p>`}
    ${Object.keys(e).some(i=>!["src","dest","dest_root"].includes(i))&&s`<p class="ck-muted">Open Advanced to see additional saved settings.</p>`}
  </div>`;let r=Object.entries(e);return r.length?s`<dl class="eval-fields">${r.slice(0,24).map(([i,a])=>s`<div class=${a&&typeof a=="object"?"eval-field-group":""}>
    <dt>${ta(i)}</dt><dd><${Xn} value=${a} depth=${t+1} field=${i} /></dd></div>`)}
    ${r.length>24&&s`<div><dt>Additional settings</dt><dd>See Advanced for ${r.length-24} more fields.</dd></div>`}</dl>`:s`<p class="ck-muted">No settings listed here.</p>`}var gn=e=>`eval-node-${encodeURIComponent(e)}`;function Rs({card:e,sourcePath:t,expanded:n,onSource:r,diagram:i,references:a=[],onReference:o}){let c=e.sources.length&&(e.key.endsWith(".agent")?"Visible to the agent":e.key.endsWith(".grading")?"Hidden from the agent":""),l=s`
    <div class="eval-readable-details">${e.content===void 0?s`<p class="ck-muted">These saved settings are too large to show in full here. Open Advanced or Source.</p>`:s`<${Xn} value=${e.content} field=${e.key.split(".").at(-1)} />`}</div>
    <details class="eval-advanced"><summary>Advanced: saved settings and source</summary>
      <pre tabindex="0" aria-label=${`${e.title} saved settings`}>${e.detail}</pre>
      ${e.sources.length?s`<div class="eval-source-refs">${e.sources.map(d=>s`
        <button class="ck-btn ck-btn-sm" onClick=${()=>r(d)} title=${t}>
          <code>${d}</code>
        </button>`)}</div>`:s`<p class="ck-muted">This explains a relationship; it is not a field in the saved file.</p>`}
    </details>
    ${i&&a.length>0&&s`<div class="eval-node-relations" aria-label="Related details">
      ${a.map(d=>s`<button class="eval-reference"
        aria-controls=${gn(d.target)} onClick=${()=>o(d.target)}>${d.label} <span aria-hidden="true">↗</span></button>`)}
    </div>`}`;return s`<article class=${`eval-card eval-card-${e.kind}`} aria-label=${e.title}
    data-node-key=${i?e.key:void 0}>
    <div class="eval-card-head">${i&&s`<span class="eval-node-kind">${{declaration:"Inputs and settings",prompt:"Instruction",trajectory:"Conversation and tool activity",grader:"Check",rule:"Pass rule"}[e.kind]}</span>`}
      ${c?s`<span class="ck-badge eval-visibility">${c}</span>`:null}</div>
    <h4 id=${i?gn(e.key):void 0} tabindex=${i?"-1":void 0}>${e.title}</h4>
    <p>${!i&&e.kind==="prompt"?"The instruction sent to the agent:":e.summary}</p>
    ${i&&a.filter(d=>d.kind==="trajectory"||d.promptScope).map(d=>s`<button class="eval-reference" onClick=${()=>o(d.target)}
        aria-controls=${gn(d.target)}>${d.label} <span aria-hidden="true">↗</span></button>`)}
    ${i?s`<details open=${n}><summary>Explore details</summary>${l}</details>`:s`<div class="eval-outline-body">${l}</div>`}
  </article>`}function na({selected:e,sourcePath:t,expanded:n,onSource:r}){let i=I(null),[a,o]=C({connectors:[],width:0,height:0,stacked:!1}),[c,l]=C(""),d=I(0);We(()=>{let p=i.current,h=()=>{let $=p.getBoundingClientRect(),g={},f=[...p.querySelectorAll(".eval-lane")],w=f.length>1&&Math.abs(f[0].offsetLeft-f[1].offsetLeft)<2;f.forEach((T,S)=>{T.querySelectorAll("[data-node-key]").forEach((P,j)=>{let M=P.getBoundingClientRect();g[P.dataset.nodeKey]={x:M.left-$.left-p.clientLeft,y:M.top-$.top-p.clientTop,width:M.width,height:M.height,lane:S,index:j}})});let b={connectors:Ts(e.edges??[],g,w),width:p.clientWidth,height:p.clientHeight,stacked:w};o(T=>JSON.stringify(T)===JSON.stringify(b)?T:b)},v=()=>{cancelAnimationFrame(d.current),d.current=requestAnimationFrame(h)},k=new ResizeObserver(v);return k.observe(p),p.querySelectorAll(".eval-card, .eval-lane header").forEach($=>k.observe($)),h(),()=>{k.disconnect(),cancelAnimationFrame(d.current)}},[e]);function u(p){l(p),requestAnimationFrame(()=>{let h=document.getElementById(gn(p));h?.focus({preventScroll:!0}),h?.scrollIntoView({block:"center",behavior:"instant"})})}let m=[...e.agent,...e.grading];return s`<div ref=${i} class="eval-diagram" data-layout=${a.stacked?"stacked":"lanes"}>
    <svg class="eval-connectors" aria-hidden="true" width=${a.width} height=${a.height}>
        <defs>${["input","order","trajectory","grading","aggregation","output"].map(p=>s`
          <marker id=${`eval-arrow-${p}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 1 1 L 9 5 L 1 9" class=${`eval-arrow eval-relation-${p}`} />
          </marker>`)}</defs>
        ${a.connectors.map(p=>s`<g class=${`eval-relation-${p.kind}`} data-edge-source=${p.source} data-edge-target=${p.target}>
          <path class="eval-edge" d=${p.path} marker-end=${`url(#eval-arrow-${p.kind})`} />
          <circle class="eval-port" cx=${p.start.x} cy=${p.start.y} r="4" />
          <circle class="eval-port" cx=${p.end.x} cy=${p.end.y} r="4" />
        </g>`)}
    </svg>
    ${a.connectors.filter(p=>p.label).map(p=>s`<span aria-hidden="true"
        class=${`eval-edge-label eval-relation-${p.kind}`} data-edge-label=${p.kind}
        style=${{left:p.label.x,top:p.label.y,width:p.label.width}}>${p.label.text}</span>`)}
    <div class="eval-diagram-lanes">
        ${[["Agent task","What the agent receives and is asked to do",e.agent],["Checks","What is checked and what counts as success",e.grading]].map(([p,h,v],k)=>s`
          <section class="eval-lane" aria-label=${p}>
            <header><span class="eval-lane-mark" aria-hidden="true">${k?"C":"A"}</span><div><h3>${p}</h3><p class="ck-muted">${h}</p></div></header>
            ${v.map($=>s`<div class=${`eval-node ${c===$.key?"is-referenced":""}`} key=${$.key}>
              <${Rs} card=${$} sourcePath=${t} expanded=${n} onSource=${r} diagram=${!0}
                references=${As(e.edges??[],$.key,m)} onReference=${u} />
            </div>`)}
          </section>`)}
    </div>
  </div>`}function Es({detail:e,stale:t=!1}){let[n,r]=C("Visual"),[i,a]=C(0),[o,c]=C(!1),[l,d]=C(""),u=e.visualization,m=u?.cases[i];function p(v){d(v),r("Source"),requestAnimationFrame(()=>document.getElementById("eval-source-heading")?.focus())}function h(v,k){if(!["ArrowLeft","ArrowRight","Home","End"].includes(v.key))return;v.preventDefault();let $=v.key==="Home"?0:v.key==="End"?Ct.length-1:(k+(v.key==="ArrowRight"?1:-1)+Ct.length)%Ct.length;r(Ct[$]),document.getElementById(`eval-tab-${Ct[$]}`)?.focus()}return s`<section class="eval-visualizer" aria-label="Read-only eval visualizer">
    <p class="ck-muted">See what the agent receives, what it is asked to do, and how its result is checked. Nothing runs or saves.</p>
    <div class="eval-view-toolbar">
      <div role="tablist" aria-label="Eval views">${Ct.map((v,k)=>s`
        <button class="ck-btn" role="tab" id=${`eval-tab-${v}`} aria-selected=${n===v}
          aria-controls=${`eval-panel-${v}`} tabindex=${n===v?0:-1}
          onKeyDown=${$=>h($,k)} onClick=${()=>r(v)}>${v}</button>`)}</div>
      ${n==="Visual"&&m&&!t&&s`<button class="ck-btn ck-btn-sm"
        onClick=${()=>c(v=>!v)}>${o?"Hide details":"Show all details"}</button>`}
    </div>
    ${Ct.map(v=>s`<section id=${`eval-panel-${v}`} role="tabpanel"
      aria-labelledby=${`eval-tab-${v}`} hidden=${n!==v} tabindex="0">
      ${n===v&&(v==="Source"?s`
        <h3 id="eval-source-heading" tabindex="-1">Saved source${l?` \xB7 ${l}`:""}</h3>
        <p class="ck-muted"><code>${e.relativePath}</code>. Known secrets and environment-variable values are hidden.
          ${t?"This is an older copy. Reload before relying on it.":"Based on the saved file, not an unsaved draft or a past run."}
          ${e.sourceUnchanged?"The text matches the saved file exactly.":"The displayed text differs from the file; the file itself has not changed."}</p>
        ${u?.sourceStatus==="redacted"&&s`<p class="snapshot-notice">Private values were removed. This is a rebuilt copy of the saved settings, without the original formatting or comments.</p>`}
        ${u?.sourceStatus==="withheld"&&s`<p class="snapshot-notice" role="status">Source is not shown because this file could not be read safely enough to hide private values. Open the saved file in your local editor.</p>`}
        <pre tabindex="0" role="region" aria-label="Saved source text">${e.text}</pre>`:t?s`<p class="snapshot-notice" role="status">View paused: the saved file has not been read again. Use Reload preview to get the current file.</p>`:u?s`
              <p class="ck-muted">Saved settings only, not a run. Shared settings, inherited inputs and placeholders are not filled in here.</p>
              <details class="eval-view-limits"><summary>What this view can and cannot show</summary><p class="ck-muted">This view explains the saved file, not what actually ran. It is not a full file-format check.
                Shared project settings, inherited inputs and placeholders are not filled in here.
                Custom agent and check settings are shown as written; their behavior has not been verified. Referenced files have not been opened or copied.</p></details>
              ${u.diagnostics.length>0&&s`<div class="snapshot-notice" role="status">
                <strong>${u.status==="unavailable"?"This eval cannot be displayed":"Some details need attention"}</strong>
                <ul>${u.diagnostics.map(k=>s`<li>${k}</li>`)}</ul>
              </div>`}
              ${m&&s`
                <div class="eval-case-bar"><label for="eval-case">Task</label>
                  <select class="ck-input" id="eval-case" value=${i} onChange=${k=>{a(Number(k.target.value)),d("")}}>${u.cases.map((k,$)=>s`<option value=${$}>${k.name}</option>`)}</select>
                  <span class="ck-muted" role="status">${m.promptCount} instruction${m.promptCount===1?"":"s"} · ${m.graderCount} check${m.graderCount===1?"":"s"}${m.graderCount?"":" \xB7 Not scored"}</span>
                </div>
                <p class="eval-flow-note"><span class="eval-legend-line" aria-hidden="true"></span> Solid arrows show the order of instructions.
                  <span class="eval-legend-line is-dashed" aria-hidden="true"></span> Dashed arrows show which inputs, records or results are used, not when checks run.
                  Links jump to related details.</p>
                ${v==="Visual"?s`<${na} key=${`${i}:${o}`} selected=${m} sourcePath=${u.sourcePath}
                  expanded=${o} onSource=${p} />`:s`<div class="eval-lanes eval-outline" key=${i}>
                  ${[["Agent task","What the agent receives and is asked to do",m.agent],["Checks","What is checked and what counts as success",m.grading]].map(([k,$,g])=>s`<section class="eval-lane" aria-label=${k}>
                      <header><h3>${k}</h3><p class="ck-muted">${$}</p></header>
                      ${g.map(f=>s`
                        ${f.kind==="prompt"&&f.promptIndex>0&&s`<div class="eval-prompt-order">Next instruction</div>`}
                        <${Rs} key=${f.key} card=${f} sourcePath=${u.sourcePath}
                          expanded=${v==="Outline"||o} onSource=${p} />`)}
                    </section>`)}
                </div>`}`}
            `:s`<p role="status">This version cannot show a visual overview of this file. Open Source to inspect it.</p>`)}
    </section>`)}
  </section>`}var Ye=e=>new Intl.NumberFormat().format(e),ht=[...nt,...Ln];window.addEventListener("message",e=>{if(e.source!==window.parent||e.data?.type!=="copilot-evals-theme"||!["light","dark"].includes(e.data.mode))return;let t=["--background-color-default","--background-color-muted","--text-color-default","--text-color-muted","--text-color-danger","--text-color-success","--text-color-attention","--border-color-default","--border-color-muted","--color-focus-outline"];for(let n of t){let r=e.data.tokens?.[n];typeof r=="string"&&r.length<=128&&CSS.supports("color",r)&&document.documentElement.style.setProperty(n,r)}document.documentElement.dataset.colorMode=e.data.mode,document.documentElement.style.colorScheme=e.data.mode});function ra({state:e,invoke:t,refresh:n,connected:r}){let[i,a]=C(()=>Kr(window.location.search)),[o,c]=C(i.view),[l,d]=C(()=>i.view==="setup"?{section:"project"}:null),[u,m]=C(Jr),[p,h]=C(""),[v,k]=C(""),[$,g]=C(!1),[f,w]=C(""),[b,T]=C(!1),[S,P]=C(!1),[j,M]=C(!1),[E,ce]=C(""),[N,we]=C(null),[ge,de]=C(""),[,Te]=C(0),le=I(null);le.current||(le.current=Pn(t,()=>Te(y=>y+1))),le.current.setContext(jn(e,o));let A=I(null),Q=I(null),D=I({}),G=I(0),X=I(new Map),Y=I(""),J=I(null),ee=I(null),W=I(null),V=I(""),K=I(""),Z=I(""),[re,Se]=C(0),[De,He]=C(0),Ce=e?cn(e,o):null;H(()=>{if(!e?.projectPath||!e.trustCanGrant)return;let y=!0;return t("publish_state",{}).catch(x=>{y&&h(x.message)}),()=>{y=!1}},[e?.projectPath,e?.trustCanGrant]),H(()=>{let y=x=>{!A.current?.dirty&&(!e?.draft.files.length||e.draft.saveOutcome?.complete)||(x.preventDefault(),x.returnValue="")};return window.addEventListener("beforeunload",y),()=>window.removeEventListener("beforeunload",y)},[e?.draft.files.length,e?.draft.saveOutcome?.complete]),D.current={view:o,project:e?.projectPath,workingDirectory:e?.context.workingDirectory},H(()=>{G.current++,h(""),k(""),g(!1),w(""),we(null),A.current=null,Q.current=null},[e?.projectPath,e?.context.workingDirectory]),H(()=>{if(!e?.projectPath||!e.trusted||i.runId||e.savedEvalNavigation||D.current.view!=="definitions"||e.createDraftId||e.draft.handoff?.id||e.draft.files.length)return;let y=!1,x=D.current.view,se=G.current;return t("inspect_project_setup",{}).then(Re=>{y||D.current.view!==x||G.current!==se||(Re.inspection?.state==="missing"?be("project"):Re.available===!1&&h(Re.message||"Project configuration inspection is unavailable."))}).catch(Re=>{!y&&D.current.view===x&&G.current===se&&h(Re.message)}),()=>{y=!0}},[e?.projectPath,e?.trusted,e?.context.workingDirectory,e?.context.mode]),H(()=>{!e?.resultsNavigation||e.selectedRunId!==e.resultsNavigation||(je("results"),g(!0))},[e?.resultsNavigation]),H(()=>{let y=e?.savedEvalNavigation?.detail;!y||y.stale||(je("definitions"),Y.current=y.id,m(x=>ln(e,"definitions",x.definitions).rows.some(se=>se.id===y.id)?x:on(x,"definitions",{query:y.relativePath,kind:"all",status:"all",page:1})),g(!0),requestAnimationFrame(()=>ee.current?.focus()))},[e?.savedEvalNavigation?.id]),H(()=>{let y=e?.comparison,x=y?.mode==="descriptive"?y.id:y?.receipt?.id;!e?.comparisonNavigation||x!==e.comparisonNavigation||je("compare")},[e?.comparisonNavigation]),H(()=>{let y=()=>{let x=document.getElementById(`tab-${o}`),se=x?.parentElement;if(!x||!se)return;let Re=x.offsetLeft,Ke=Re+x.offsetWidth;Re<se.scrollLeft?se.scrollLeft=Re:Ke>se.scrollLeft+se.clientWidth&&(se.scrollLeft=Ke-se.clientWidth)};return y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[o]);function $e(y){typeof y!="string"||!/^[a-zA-Z0-9-]{1,80}$/.test(y)||(le.current.clear(),D.current.view="results",G.current++,a({view:"results",runId:y}),Se(x=>x+1),c("results"),h(""),k(""),g(!1))}H(()=>{!f||Ce?.id!==f||Ce.stale||(g(!0),w(""))},[f,Ce]),H(()=>{let y=V.current;if(V.current="",y&&Ce?.id===y&&W.current){W.current.focus();return}$&&(e&&!cn(e,o)?(g(!1),w(""),requestAnimationFrame(()=>J.current?.focus())):ee.current?.focus())},[$,o,Ce?.id]);function je(y){le.current.clear(),D.current.view=y,G.current++,h(""),k(""),g(!1),w(""),c(y)}function be(y){d({section:y}),je("setup")}H(()=>{!e?.savedEvalNavigation&&(e?.createDraftId||e?.draft.handoff?.id)&&je("author")},[e?.createDraftId,e?.draft.handoff?.id]),H(()=>{let y=x=>{let se=x.data;if(x.source===window.parent&&se?.type==="copilot-evals-open-setup"){be("project");return}if(x.source===window.parent&&se?.type==="copilot-evals-open-compare"){je("compare");return}x.source!==window.parent||se?.type!=="copilot-evals-open-run"||typeof se.runId!="string"||!/^[a-zA-Z0-9-]{1,80}$/.test(se.runId)||$e(se.runId)};return window.addEventListener("message",y),window.parent.postMessage({type:"copilot-evals-app-ready"},"*"),()=>window.removeEventListener("message",y)},[]);function ae(y,x){if(!["ArrowLeft","ArrowRight","Home","End"].includes(y.key))return;y.preventDefault();let se=ht.findIndex(Ke=>Ke.id===x),Re=y.key==="Home"?0:y.key==="End"?ht.length-1:(se+(y.key==="ArrowRight"?1:-1)+ht.length)%ht.length;je(ht[Re].id),document.getElementById(`tab-${ht[Re].id}`).focus()}function Ee(y){m(x=>on(x,o,y))}function Me(){if(A.current?.project===e.projectPath&&A.current.projectSwitchBlocked)throw new Error("Finish or clear the current form and pending draft edits before switching projects.")}async function Ze(y,x={}){let se=++G.current,Re={...D.current},Ke=()=>G.current===se&&Re.view===D.current.view&&Re.project===D.current.project&&Re.workingDirectory===D.current.workingDirectory;h(""),k(y);try{let et=await t(y,x);return Ke()&&et.available===!1&&h(et.message||"Couldn't read project files. See the read details."),Ke()&&!et.discarded&&et.available!==!1}catch(et){return Ke()&&h(et.message),!1}finally{Ke()&&k("")}}H(()=>{if(!i.runId||!e)return;let y=`${e.projectPath}:${i.runId}:${re}`;if(K.current!==y){if(e.history.status!=="ready"||!e.runs.some(x=>x.id===i.runId)){if(Z.current===y){e.history.status==="ready"&&h(`Saved run ${i.runId} is unavailable after refreshing history.`);return}Z.current=y,Ze("refresh").then(x=>{x&&He(se=>se+1)});return}K.current=y,Y.current=i.runId,m(x=>ln(e,"results",x.results).rows.some(se=>se.id===i.runId)?x:on(x,"results",{query:i.runId,kind:"all",status:"all"})),Ze("preview_run",{id:i.runId}).then(x=>{x&&matchMedia("(max-width: 700px)").matches&&g(!0)})}},[e?.projectPath,e?.history.status,e?.runs,i.runId,re,De]);async function Ne(y){le.current.clear(),Y.current=y.id,await Ze(o==="definitions"&&e.savedEvalNavigation?"open_saved_eval":o==="results"?"preview_run":"preview_asset",o==="definitions"&&e.savedEvalNavigation?{relativePath:y.relativePath}:{id:y.id})&&y.kind!=="eval"&&matchMedia("(max-width: 700px)").matches&&w(y.id)}function ue(){V.current="",g(!1),requestAnimationFrame(()=>(X.current.get(Y.current)||J.current)?.focus())}function me(){V.current=Ce.id,g(y=>!y)}function Qe(y){if(!["ArrowDown","ArrowUp","Home","End"].includes(y.key))return;y.preventDefault();let x=[...y.currentTarget.parentElement.querySelectorAll(".evidence-row")],se=x.indexOf(y.currentTarget),Re=y.key==="Home"?0:y.key==="End"?x.length-1:Math.min(x.length-1,Math.max(0,se+(y.key==="ArrowDown"?1:-1)));x[Re]?.focus()}let xe=nt.some(y=>y.id===o),ye=u[o]??u.definitions,ie=e?ln(e,xe?o:"definitions",ye):null,fe=xe&&o!=="diagnostics"&&ie&&(o==="results"?e.history:e.discovery).lastSuccess?`${nt.find(y=>y.id===o).label}: ${Ye(ie.matching)} matching. ${ie.matching?`Page ${Ye(ie.page)} of ${Ye(ie.pages)}.`:"No matches."}`:"";if(H(()=>{let y=setTimeout(()=>de(fe),200);return()=>clearTimeout(y)},[fe]),!e)return s`<main aria-busy="true"><p role="status">Connecting to the workbench…</p></main>`;let F=cn(e,o),Be=o==="results"?e.history:e.discovery,dt=o==="results"?"Saved results":"Project files",Fe=!!ye.query||ye.kind!=="all"||ye.status!=="all",ke=e.readStatus==="reading"||v==="refresh"||b,_=o==="results"?e.selectedRunId:o==="definitions"&&e.savedEvalNavigation?e.savedEvalNavigation.detail.id:e.selectedAssetId,q=F?.type==="run"?e.runs.find(y=>y.id===F.id):null,te=le.current.snapshot,Ie=JSON.stringify([e.projectPath,e.context.workingDirectory,q?.id,te?.kind??"report"]),st=Qr(q?.source),Xe=y=>y==="definitions"?e.assets.filter(x=>x.kind==="eval").length:y==="assets"?e.assets.filter(x=>x.kind!=="eval").length:y==="results"?e.runs.length:e.issues.length,qe=ht.some(y=>y.id===o)?o:ht[0].id,$t=(y,x={})=>{let se=o!=="results"?"":y.counts?.failed>0||y.counts?.errored>0||y.status==="failed"||y.status==="cancelled"?"row-kind-attention":y.counts?.passed>0?"row-kind-success":"",Re=o==="results"?se==="row-kind-attention"?"triangle-alert":se==="row-kind-success"?"circle-check":"chart-column":nn(y.kind);return s`<button key=${y.id} class=${`evidence-row ${_===y.id?"selected":""}`}
      data-row-id=${y.id} aria-pressed=${o==="assets"?void 0:_===y.id}
      aria-selected=${o==="assets"?_===y.id:void 0} disabled=${!!v&&v!=="refresh"}
      ref=${Ke=>{Ke?X.current.set(y.id,Ke):X.current.delete(y.id)}}
      onKeyDown=${Qe} onClick=${()=>Ne(y)} ...${x}>
      <span class="row-title"><span class="row-name-wrap"><${U} name=${Re} size=${14} />${y.name}</span><span class=${`row-kind ${se}`.trim()}>${o==="results"?`Saved ${y.status}`:y.kind}</span></span>
      <span class="row-path">${o==="results"?y.id:y.relativePath}</span>
      ${o==="results"&&y.evidenceDiagnostics?.length>0&&s`<span class="row-warning">Some activity details are unavailable. Open this result for details.</span>`}
      ${o==="results"?s`<span class="row-meta"><time datetime=${y.startedAt} title=${y.startedAt}>${rt(y.startedAt)}</time>
        <span class=${se}>${y.mode} · ${Ye(y.counts.passed)} passed · ${Ye(y.counts.failed)} failed · ${Ye(y.counts.errored)} errors</span></span>`:y.discoverySummary&&s`<span class=${/^Uses full-engine/i.test(y.discoverySummary)?"row-note":"row-warning"}>${ot(y.discoverySummary)}</span>`}
    </button>`},it=`${ke?"Looking for evals":On(e)}. ${e.discovery.lastSuccess?`${Xe("definitions")} evals, ${Xe("assets")} project files`:"Files not loaded"}. ${e.history.lastSuccess?`${Xe("results")} saved runs`:"Results not loaded"}. ${e.discovery.stale||e.history.stale?"Showing earlier files.":""} ${v.startsWith("preview")?"Loading selected item.":F?`Selected ${F.title.slice(0,160)}. ${F.stale?"Showing earlier preview.":"Preview ready."}`:""}`;return s`
    <a class="skip-link" href="#workbench-panel">Skip to workspace</a>
    ${S==="reconcile"?s`<div class="snapshot-notice" role="alert">
      <p>The project selection could not be confirmed. Check the current project before editing.</p>
      <button class="ck-btn" type="button" disabled=${j} onClick=${async()=>{M(!0),ce("");try{await n({required:!0,reconcileProject:!0}),P(!1)}catch(y){ce(y.message)}finally{M(!1)}}}>Retry project state check</button>
      ${E&&s`<p>${E}</p>`}
    </div>`:S&&s`<p class="snapshot-notice" role="status">Waiting for your app to review the selected folder. Accept or decline there to continue.</p>`}
    <main class="app-shell" inert=${S||void 0}>
      <header class="workbench-header">
        <div class="header-left">
          <div class="header-title"><span class="evals-logo" aria-hidden="true"></span><h1>GitHub Copilot Evals</h1></div>
          <span class="header-divider" aria-hidden="true"></span>
          <div class="workspace-identity"><${Ps} state=${e} invoke=${t} onBusy=${T} />
            <span class="context-origin">${e.context.mode==="session"?"Following workspace":e.context.mode==="manual"?"Manual override":"No workspace folder"}</span>
            <button class=${`ck-btn ck-btn-icon ${ke?"is-spinning":""}`.trim()} type="button"
              aria-label=${ke?"Looking\u2026":"Refresh"} title=${ke?"Looking\u2026":e.lastRefresh?`Refresh (Checked ${rt(e.lastRefresh)})`:"Refresh"}
              disabled=${ke||!e.projectPath} onClick=${()=>Ze("refresh")}><${U} name="refresh-cw" size=${15} /></button>
          </div>
        </div>
        <${xs} key=${`${e.projectPath}:${e.context.workingDirectory}`} state=${e} invoke=${t}
          activeView=${o}
          onAuthor=${()=>je("author")} onSetup=${()=>be("project")}
          onActivity=${()=>je("activity")} />
      </header>
      <p class="sr-only" role="status" aria-live="polite" aria-atomic="true">${it}</p>
      <p class="sr-only" role="status" aria-live="polite" aria-atomic="true">${ge}</p>
      <nav class="view-navigation" aria-label="Workspace views">
        <div class="ck-tabs" role="tablist" aria-label="Workspace views">
          ${ht.map(y=>s`<button key=${y.id} class=${`ck-tab ${y.id==="author"?"ck-tab-studio-start":""}`.trim()} id=${`tab-${y.id}`} role="tab"
            aria-selected=${o===y.id} aria-controls=${`panel-${y.id}`} tabindex=${qe===y.id?0:-1}
            onKeyDown=${x=>ae(x,y.id)} onClick=${()=>je(y.id)}>
            <${U} name=${y.icon} size=${15} />${y.label}${nt.some(x=>x.id===y.id)&&s`<span class="nav-count">${y.id==="diagnostics"||(y.id==="results"?e.history:e.discovery).lastSuccess?Ye(Xe(y.id)):"?"}</span>`}
          </button>`)}
        </div>
        <div class="discovery-bar">
          <span class=${`status-dot status-${e.readStatus}`.trim()} aria-hidden="true"></span>
          <span class="discovery-status" role="status" title=${e.lastRefresh?`Checked ${rt(e.lastRefresh)}`:void 0}>${ke?"Looking for evals and saved results\u2026":On(e)}</span>
          ${["partial","unavailable"].includes(e.readStatus)&&s`<button class="ck-btn ck-btn-sm" onClick=${()=>je("diagnostics")}>View problems</button>`}
          ${!r&&s`<span class="connection" role="status">Reconnecting…</span>`}
          ${e.lastRefresh&&s`<time class="sr-only" datetime=${e.lastRefresh}>Checked ${rt(e.lastRefresh)}</time>`}
        </div>
      </nav>
      ${xe?s`<div id="workbench-panel" tabindex="-1" class=${`workbench ${$&&F?"show-detail":""} ${F?.kind==="eval"?"eval-selected":""} ${$&&F?.kind==="eval"?"eval-focused":""} ${o==="diagnostics"?"diagnostics-view":""}`}>
        <div class="list-area">
          ${nt.map(y=>s`<section key=${y.id} id=${`panel-${y.id}`} role="tabpanel"
            aria-labelledby=${`tab-${y.id}`} hidden=${o!==y.id} tabindex="0"
            ref=${x=>{o===y.id&&(J.current=x)}}
            aria-busy=${ke||!!v}>
            ${o===y.id&&(o==="diagnostics"?s`
              <div class="section-heading"><h2>Problems reading this folder</h2><span class="ck-muted">No evals were run</span></div>
              ${["discovery","history"].map(x=>s`<section class="channel-diagnostic" key=${x}>
                <h3>${x==="discovery"?"Evals and project files":"Saved results"}</h3>
                <p>${e[x].status==="ready"?"Loaded":e[x].status==="error"?"Couldn't load":e[x].status==="reading"?"Loading\u2026":"Not loaded"}${e[x].stale?" \xB7 showing earlier files":""}</p>
                ${e[x].lastSuccess&&s`<p class="ck-muted">Last successful read ${rt(e[x].lastSuccess)}</p>`}
                ${e[x].error&&s`<p class="field-error">${ot(e[x].error)}</p>
                  <button class="ck-btn" disabled=${ke} onClick=${()=>Ze("refresh")}>Try again</button>
                  ${x==="history"&&s`<${Zn} state=${e} invoke=${t} source="history" />`}`}
              </section>`)}
              ${e.issues.map((x,se)=>s`<div class="diagnostic" key=${se}><strong>File needs attention</strong><p>${ot(x.message)}</p><code>${x.uri}</code>
                <${Zn} state=${e} invoke=${t} source="discovery" uri=${x.uri} /></div>`)}
              ${!e.issues.length&&s`<p class="ck-muted">${e.discovery.status==="ready"?"No file-reading problems found. Run an eval to check AI behavior.":"File-reading details are not available yet."}</p>`}
            `:s`
              <div class="section-heading"><h2>${nt.find(x=>x.id===o).label}</h2>
                <span class="ck-muted matching-count">${Be.lastSuccess?`${Ye(ie.matching)} matching \xB7 ${Ye(ie.total)} total`:"Not loaded"}</span></div>
              ${o==="definitions"&&e.projectConfigurations?.length>0&&s`<section class="channel-diagnostic" aria-label="Project configuration">
                <details>
                  <summary>Project configuration (${Ye(e.projectConfigurations.length)} ${e.projectConfigurations.length===1?"file":"files"})</summary>
                  <div class="project-configuration-list" role="region" aria-label="Configuration files" tabindex="0">
                    <p class="ck-muted">Configuration files are not evals and cannot be run.</p>
                    ${e.projectConfigurations.map(x=>s`<div key=${x.uri}>
                      ${x.relativePath===".vally.yaml"?s`<button class="ck-btn" type="button" onClick=${()=>be("project")}><${U} name="settings" size=${15} />.vally.yaml: Project configuration</button>`:s`<p><code>${x.relativePath}</code>: Nested configuration; select its folder as the project to configure it.</p>`}
                    </div>`)}
                  </div>
                </details>
              </section>`}
              ${Be.error&&s`<div class="channel-error" role="alert">
                <strong>${Be.status==="ready"?`${dt} are partial`:`${dt} couldn't load`}${Be.stale?`. Showing earlier ${o==="results"?"results":"files"}`:""}</strong>
                <p>${ot(Be.error)}</p><button class="ck-btn" disabled=${ke} onClick=${()=>Ze("refresh")}>Try again</button>
              </div>`}
              ${(ke||Be.stale)&&s`<p class="snapshot-notice">${ke?"Looking for evals and saved results\u2026":"Showing files from the last successful refresh."}${ie.total?" You can still browse them.":""}</p>`}
              <div class="filters">
                <input class="ck-input search" aria-label=${`Search ${nt.find(x=>x.id===o).label.toLowerCase()}`} name=${`${o}-query`} autocomplete="off" spellcheck="false"
                  placeholder=${o==="results"?"Search names or run IDs":"Search names or paths"} value=${ye.query}
                  onInput=${x=>Ee({query:x.target.value})} />
                ${o==="assets"&&s`<select class="ck-input" aria-label="File type" value=${ye.kind}
                  onChange=${x=>Ee({kind:x.target.value})}>
                  ${["all","skill","agent","instruction","prompt","mcp-server","tool"].map(x=>s`<option value=${x}>${x==="all"?"All kinds":x}</option>`)}
                </select>`}
                ${o==="results"&&s`<select class="ck-input" aria-label="Saved status" value=${ye.status}
                  onChange=${x=>Ee({status:x.target.value})}>
                  ${["all",...new Set(e.runs.map(x=>x.status))].map(x=>s`<option value=${x}>${x==="all"?"All statuses":x}</option>`)}
                </select>`}
                <select class="ck-input" aria-label=${`Sort ${nt.find(x=>x.id===o).label.toLowerCase()}`} value=${ye.sort} onChange=${x=>Ee({sort:x.target.value})}>
                  ${(o==="results"?[["newest","Newest first"],["name","Name"],["status","Saved status"]]:[["name","Name"],["path","Path"]]).map(([x,se])=>s`<option value=${x}>${se}</option>`)}
                </select>
                <button class="ck-btn clear-filter" disabled=${!Fe} onClick=${()=>Ee({query:"",kind:"all",status:"all"})}>Clear</button>
              </div>
              ${p&&s`<p class="field-error" role="alert">${p}</p>`}
              <div class="items-list" role="group" aria-label=${`${nt.find(x=>x.id===o).label} inventory`}>
                ${o==="assets"&&ie.rows.length?s`<${os} key=${e.projectPath} groups=${e.assetGroups??[]} rows=${ie.rows} query=${ye.query} renderRow=${$t} />`:ie.rows.map(x=>$t(x))}
              </div>
              ${!ie.rows.length&&s`<div class="empty-state"><${U} name="inbox" size=${24} />
                <h3>${ke?"Looking in this folder\u2026":e.readStatus==="idle"?"Choose a folder to get started":Be.status==="error"?`${dt} couldn't load`:Fe?"No matches":`No ${nt.find(x=>x.id===o).label.toLowerCase()} found`}</h3>
                <p>${ke?"Your files will appear here when loading finishes.":e.readStatus==="idle"?"Open the folder picker above, browse to a folder and choose Load.":Fe?"Try another search or clear the filters.":o==="definitions"?"Create an eval to describe the response you expect from AI.":o==="results"?"Run an eval to see its results here.":"No supported files were found in this project. Personal or installed skills may still exist elsewhere."}</p>
                ${!Fe&&!ke&&Be.status==="ready"&&o==="definitions"&&s`<button class="ck-btn ck-btn-primary" onClick=${()=>je("author")}>Create eval</button>`}
                ${Fe&&s`<button class="ck-btn" onClick=${()=>Ee({query:"",kind:"all",status:"all"})}>Clear filters</button>`}
              </div>`}
              ${!ke&&Be.status==="ready"&&o==="assets"&&s`<${Tt}
                projectPath=${e.projectPath} invoke=${t} showScope=${!ie.rows.length&&!Fe}
                beforeSwitch=${Me} onSwitchPending=${P} />`}
              <div class="pagination" role="group" aria-label="Inventory pagination">
                <span class="ck-muted">${Ye(ie.first)}–${Ye(ie.last)} of ${Ye(ie.matching)}</span>
                <button class="ck-btn" disabled=${ie.page===1} onClick=${()=>Ee({page:ie.page-1})}>Previous</button>
                <span>Page ${Ye(ie.page)} of ${Ye(ie.pages)}</span>
                <button class="ck-btn" disabled=${ie.page===ie.pages} onClick=${()=>Ee({page:ie.page+1})}>Next</button>
              </div>
            `)}
          </section>`)}
        </div>
        ${o!=="diagnostics"&&s`<aside class="inspector" id=${F?.kind==="eval"?"eval-details":void 0}
          aria-label="Details" aria-busy=${v.startsWith("preview")||te?.status==="loading"}>
          <div class=${`inspector-heading ${F?.kind==="eval"?"eval-detail-heading":""}`}>
            ${F?.kind==="eval"?s`<div class="eval-header-controls">
              <button class="ck-btn" type="button" onClick=${ue} title="Back to the eval list"><${U} name="arrow-left" />Back</button>
              <button ref=${W} class="ck-btn eval-size-toggle" type="button"
                onClick=${me} aria-expanded=${$} aria-controls="eval-details"
                title=${$?"Return to the normal view":"Expand eval details"}>
                <${U} name=${$?"minimize-2":"maximize-2"} />${$?"Contract":"Expand"}
              </button>
            </div>`:s`<button class="ck-btn mobile-back" onClick=${ue}>Back to list</button>`}
            <h2 ref=${ee} tabindex="-1">${F?F.title:"Details"}</h2>
          </div>
          ${F&&(e.previewError||$&&p)&&s`<p class="field-error" role="alert">${ot(e.previewError||p)}</p>`}
          ${F?s`
            <div class="inspector-meta"><span class="ck-badge">${F.type==="run"?"Saved report":F.kind==="eval"?"Saved eval":"Source preview"}</span>
              <code>${F.relativePath??F.id}</code></div>
            ${F.type==="asset"&&s`<${_s} key=${`${e.projectPath}:${F.id}`} state=${e} invoke=${t} assetId=${F.id}
              onAuthor=${()=>je("author")} onActivity=${()=>je("activity")} onBaseline=${y=>{we(y),je("behavior")}} />`}
            <p class="ck-muted evidence-notice">${F.type==="run"?"Saved results may not reflect your current files.":"Preview may be shortened. Recognized secrets are hidden."}</p>
            ${(F.stale||ke)&&s`<div class="snapshot-notice" role="status">Previous preview from ${rt(F.inspectedAt)}. It has not been reread.
              <button class="ck-btn" disabled=${!!v||ke} onClick=${()=>Ze(o==="definitions"&&e.savedEvalNavigation?"open_saved_eval":F.type==="run"?"preview_run":"preview_asset",o==="definitions"&&e.savedEvalNavigation?{relativePath:F.relativePath}:{id:F.id})}>Reload preview</button></div>`}
            ${F.sourceHash&&s`<details class="metadata"><summary>File details</summary><dl><dt>SHA-256</dt><dd><code>${F.sourceHash}</code></dd><dt>Preview read</dt><dd>${rt(F.inspectedAt)}</dd></dl></details>`}
            ${q&&s`<details class="metadata"><summary>Run details</summary>
              <dl><dt>Original run ID</dt><dd><code>${q.id}</code></dd><dt>Started</dt><dd><time datetime=${q.startedAt} title=${q.startedAt}>${rt(q.startedAt)}</time></dd>
                ${q.endedAt&&s`<dt>Ended</dt><dd><time datetime=${q.endedAt} title=${q.endedAt}>${rt(q.endedAt)}</time></dd>`}
                <dt>Recorded mode</dt><dd>${q.mode}</dd>
                <dt>Workspace</dt><dd><code>${q.workspaceUri||"Not recorded"}</code></dd>
                <dt>Evaluation source</dt><dd><code>${st.text}</code>${st.truncated&&s`<p>Some saved details are too long to show here. The original saved results are unchanged.</p>`}</dd>
                <dt>Native telemetry</dt><dd>${q.nativeTelemetryReported?"Reported; check the saved evidence":"Not reported"}</dd></dl>
              <p class="ck-muted">These details are shown as saved. Check for private information before sharing.</p>
            </details>`}
            ${q&&s`<div class="evidence-actions evidence-content-tabs" role="group" aria-label="Saved evidence"><span class="evidence-group-label" aria-hidden="true">Content</span>${Sn(q).map(({kind:y,label:x})=>s`
              <button class="ck-btn" type="button" disabled=${!!v||ke}
                aria-pressed=${(te?.kind??"report")===y} aria-controls="results-evidence"
                onClick=${()=>le.current.read(y)}>${x}</button>`)}</div>`}
            ${v.startsWith("preview")?s`<p role="status">Loading selected item…</p>`:q&&te?s`
              <section id="results-evidence" aria-label=${`${kt.find(y=>y.kind===te.kind).label} evidence`}>
                <p class="ck-muted evidence-notice">${kt.find(y=>y.kind===te.kind).label} · <code>${te.id}</code>.
                  Read-only, size-limited text. Original saved evidence is unchanged.</p>
                ${te.focus&&s`<p class="ck-muted evidence-focus-notice" role="status">Focused attempt: <code>${te.focus.caseId}</code> (attempt ${te.focus.attempt+1}${te.focus.configuration?`, ${te.focus.configuration}`:""}${te.focus.turn!==null?`, turn ${te.focus.turn}`:""}${te.focus.graderId?`, check ${te.focus.graderId}`:""})</p>`}
                ${(te.stale||e.history.stale||ke)&&s`<p class="snapshot-notice" role="status">This is an earlier copy. Select the evidence again to reload it.</p>`}
                ${te.status==="loading"?s`<p role="status">Loading ${kt.find(y=>y.kind===te.kind).label.toLowerCase()}…</p>`:te.status==="error"?s`<p class="field-error" role="alert">${ot(te.error)}</p>`:s`${te.kind==="report"&&!te.focus?s`<${Qn} key=${Ie} text=${te.text} run=${q} detail=${F}
                      onSelectEvidence=${(y,x)=>le.current.read(y,x)} disabled=${!!v||ke} />`:s`<pre tabindex="0" role="region" aria-label=${`Saved ${te.kind} text`}>${te.text}</pre>`}
                    ${!te.text&&s`<p role="status">No saved ${te.kind} text was returned for this run.</p>`}`}
              </section>`:q?s`<section id="results-evidence" aria-label="Report evidence"><${Qn} key=${Ie} text=${F.text} run=${q} detail=${F}
                  onSelectEvidence=${(y,x)=>le.current.read(y,x)} disabled=${!!v||ke} /></section>`:F.kind==="eval"?s`<${Es} key=${`${e.projectPath}:${F.id}:${F.sourceHash}`}
                    detail=${F} stale=${F.stale||ke} />`:s`<pre tabindex="0" role="region" aria-label=${F.type==="run"?"Original saved report text":"Redacted source text"}>${F.text}</pre>`}
          `:s`<div class="inspector-empty"><${U} name="layout-list" size=${24} /><p>Choose an item to see its file contents or saved results.</p><p class="intro-help">An eval checks whether an AI response meets your expectations. Choose an eval on the left or create one with Copilot.</p></div>`}
        </aside>`}
      </div>`:s`<div id="workbench-panel" tabindex="-1" class="studio-surface"><section id=${`panel-${o}`} role="tabpanel" aria-labelledby=${o==="behavior"?"behavior-heading":`tab-${o}`}>
        ${o==="author"&&s`<${Ss} key=${e.projectPath} state=${e} invoke=${t} draftCache=${A}
          onSwitchPending=${P} onActivity=${()=>je("definitions")} />`}
        ${o==="activity"&&s`<${Jn} key=${e.projectPath} state=${e} invoke=${t}
          beforeSwitch=${Me} onSwitchPending=${P}
          onDefinitions=${()=>je("definitions")} onOpenRun=${$e} />`}
        ${o==="compare"&&s`<${vn} key=${e.projectPath} state=${e} invoke=${t} compareCache=${Q} onOpenRun=${$e} />`}
        ${o==="setup"&&s`<${Kn} key=${`${e.projectPath}:${e.context.workingDirectory}:${e.context.mode}`}
          state=${e} invoke=${t} target=${l} />`}
        ${o==="behavior"&&N&&s`<${Gn} key=${`${e.projectPath}:${N.id}`} state=${e} asset=${N} invoke=${t}
          onClose=${()=>je("assets")} onPrepared=${()=>je("activity")} />`}
      </section></div>`}
      ${ht.filter(y=>xe?!nt.some(x=>x.id===y.id):y.id!==o).map(y=>s`
        <section key=${`inactive-${y.id}`} id=${`panel-${y.id}`} role="tabpanel" aria-labelledby=${`tab-${y.id}`} hidden></section>`)}
    </main>
  `}Tr({view:e=>s`<${ra} ...${e} />`});
