import{_ as F,P as p,o as z,a as ze,f as Fe,d as J,s as D,b as se,n as G,w as V,c as xe,e as re,g as s,T as me,h as ve,v as ye,i as I,r as Q,j as Ve,m as Re,k as We,l as P,p as He,u as qe,q as Ue,t as he,x as ge,y as le,C as Xe,z as X,A as ie,B as Oe,D as T,E as j,F as d,G as M,H as W,I as B,J as _e,K as be,L as Be,M as Ye,N as Ke,O as R,Q as Ge,R as we,S as Je}from"./index-DRkaJlvC.js";import{I as H}from"./iconify-ClT8_HQj.js";import{_ as Qe}from"./index-DWsw6DLt.js";import{u as Ne}from"./User-Do7w9z6T.js";import{K as Ze,P as et}from"./styleChecker-CMw1WS_Y.js";import{o as Pe}from"./omit-f96Oznw2.js";import{i as De}from"./User-BGMk0TC4.js";import{d as tt,N as ot}from"./index-Ce82sHUd.js";import{i as Ce}from"./isNumeric-DjvBa-1E.js";import{_ as nt,M as at,D as lt}from"./index-BhuQFFEN.js";import{M as rt}from"./index-C5fd5I2C.js";import"./collapseMotion-DnQYYeHb.js";import"./index-DpT_JXnx.js";import"./vnode--2Vkbv_C.js";import"./colors-DblmAcNW.js";const Me=()=>({prefixCls:String,width:p.oneOfType([p.string,p.number]),height:p.oneOfType([p.string,p.number]),style:{type:Object,default:void 0},class:String,rootClassName:String,rootStyle:z(),placement:{type:String},wrapperClassName:String,level:{type:[String,Array]},levelMove:{type:[Number,Function,Array]},duration:String,ease:String,showMask:{type:Boolean,default:void 0},maskClosable:{type:Boolean,default:void 0},maskStyle:{type:Object,default:void 0},afterVisibleChange:Function,keyboard:{type:Boolean,default:void 0},contentWrapperStyle:ze(),autofocus:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},motion:Fe(),maskMotion:z()}),st=()=>F(F({},Me()),{forceRender:{type:Boolean,default:void 0},getContainer:p.oneOfType([p.string,p.func,p.object,p.looseBool])}),it=()=>F(F({},Me()),{getContainer:Function,getOpenCount:Function,scrollLocker:p.any,inline:Boolean});function ct(e){return Array.isArray(e)?e:[e]}const dt={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend"};Object.keys(dt).filter(e=>{if(typeof document>"u")return!1;const n=document.getElementsByTagName("html")[0];return e in(n?n.style:{})})[0];const ut=!(typeof window<"u"&&window.document&&window.document.createElement);var pt=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(a[t[l]]=e[t[l]]);return a};const Se=J({compatConfig:{MODE:3},inheritAttrs:!1,props:it(),emits:["close","handleClick","change"],setup(e,n){let{emit:a,slots:t}=n;const l=D(),b=D(),g=D(),c=D(),h=D();let m=[];`${Number((Date.now()+Math.random()).toString().replace(".",Math.round(Math.random()*9).toString())).toString(16)}`,se(()=>{G(()=>{var r;const{open:u,getContainer:C,showMask:k,autofocus:$}=e,S=C==null?void 0:C();N(e),u&&(S&&(S.parentNode,document.body),G(()=>{$&&y()}),k&&((r=e.scrollLocker)===null||r===void 0||r.lock()))})}),V(()=>e.level,()=>{N(e)},{flush:"post"}),V(()=>e.open,()=>{const{open:r,getContainer:u,scrollLocker:C,showMask:k,autofocus:$}=e,S=u==null?void 0:u();S&&(S.parentNode,document.body),r?($&&y(),k&&(C==null||C.lock())):C==null||C.unLock()},{flush:"post"}),xe(()=>{var r;const{open:u}=e;u&&(document.body.style.touchAction=""),(r=e.scrollLocker)===null||r===void 0||r.unLock()}),V(()=>e.placement,r=>{r&&(h.value=null)});const y=()=>{var r,u;(u=(r=b.value)===null||r===void 0?void 0:r.focus)===null||u===void 0||u.call(r)},v=r=>{a("close",r)},_=r=>{r.keyCode===Ze.ESC&&(r.stopPropagation(),v(r))},w=()=>{const{open:r,afterVisibleChange:u}=e;u&&u(!!r)},N=r=>{let{level:u,getContainer:C}=r;if(ut)return;const k=C==null?void 0:C(),$=k?k.parentNode:null;m=[],u==="all"?($?Array.prototype.slice.call($.children):[]).forEach(x=>{x.nodeName!=="SCRIPT"&&x.nodeName!=="STYLE"&&x.nodeName!=="LINK"&&x!==k&&m.push(x)}):u&&ct(u).forEach(S=>{document.querySelectorAll(S).forEach(x=>{m.push(x)})})},A=r=>{a("handleClick",r)},L=D(!1);return V(b,()=>{G(()=>{L.value=!0})}),()=>{var r,u;const{width:C,height:k,open:$,prefixCls:S,placement:x,level:q,levelMove:U,ease:ce,duration:de,getContainer:ue,onChange:pe,afterVisibleChange:fe,showMask:Y,maskClosable:Z,maskStyle:ee,keyboard:te,getOpenCount:o,scrollLocker:i,contentWrapperStyle:f,style:O,class:E,rootClassName:oe,rootStyle:ne,maskMotion:Te,motion:ae,inline:Le}=e,je=pt(e,["width","height","open","prefixCls","placement","level","levelMove","ease","duration","getContainer","onChange","afterVisibleChange","showMask","maskClosable","maskStyle","keyboard","getOpenCount","scrollLocker","contentWrapperStyle","style","class","rootClassName","rootStyle","maskMotion","motion","inline"]),K=$&&L.value,Ae=re(S,{[`${S}-${x}`]:!0,[`${S}-open`]:K,[`${S}-inline`]:Le,"no-mask":!Y,[oe]:!0}),Ee=typeof ae=="function"?ae(x):ae;return s("div",I(I({},Pe(je,["autofocus"])),{},{tabindex:-1,class:Ae,style:ne,ref:b,onKeydown:K&&te?_:void 0}),[s(me,Te,{default:()=>[Y&&ve(s("div",{class:`${S}-mask`,onClick:Z?v:void 0,style:ee,ref:g},null),[[ye,K]])]}),s(me,I(I({},Ee),{},{onAfterEnter:w,onAfterLeave:w}),{default:()=>[ve(s("div",{class:`${S}-content-wrapper`,style:[f],ref:l},[s("div",{class:[`${S}-content`,E],style:O,ref:h},[(r=t.default)===null||r===void 0?void 0:r.call(t)]),t.handler?s("div",{onClick:A,ref:c},[(u=t.handler)===null||u===void 0?void 0:u.call(t)]):null]),[[ye,K]])]})])}}});var $e=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(a[t[l]]=e[t[l]]);return a};const ft=J({compatConfig:{MODE:3},inheritAttrs:!1,props:De(st(),{prefixCls:"drawer",placement:"left",getContainer:"body",level:"all",duration:".3s",ease:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",afterVisibleChange:()=>{},showMask:!0,maskClosable:!0,maskStyle:{},wrapperClassName:"",keyboard:!0,forceRender:!1,autofocus:!0}),emits:["handleClick","close"],setup(e,n){let{emit:a,slots:t}=n;const l=Q(null),b=c=>{a("handleClick",c)},g=c=>{a("close",c)};return()=>{const{getContainer:c,wrapperClassName:h,rootClassName:m,rootStyle:y,forceRender:v}=e,_=$e(e,["getContainer","wrapperClassName","rootClassName","rootStyle","forceRender"]);let w=null;if(!c)return s(Se,I(I({},_),{},{rootClassName:m,rootStyle:y,open:e.open,onClose:g,onHandleClick:b,inline:!0}),t);const N=!!t.handler||v;return(N||e.open||l.value)&&(w=s(et,{autoLock:!0,visible:e.open,forceRender:N,getContainer:c,wrapperClassName:h},{default:A=>{var{visible:L,afterClose:r}=A,u=$e(A,["visible","afterClose"]);return s(Se,I(I(I({ref:l},_),u),{},{rootClassName:m,rootStyle:y,open:L!==void 0?L:e.open,afterVisibleChange:r!==void 0?r:e.afterVisibleChange,onClose:g,onHandleClick:b}),t)}})),w}}}),mt=e=>{const{componentCls:n,motionDurationSlow:a}=e,t={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${a}`}}};return{[n]:{[`${n}-mask-motion`]:{"&-enter, &-appear, &-leave":{"&-active":{transition:`all ${a}`}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}},[`${n}-panel-motion`]:{"&-left":[t,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[t,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[t,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[t,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}}}},vt=e=>{const{componentCls:n,zIndexPopup:a,colorBgMask:t,colorBgElevated:l,motionDurationSlow:b,motionDurationMid:g,padding:c,paddingLG:h,fontSizeLG:m,lineHeightLG:y,lineWidth:v,lineType:_,colorSplit:w,marginSM:N,colorIcon:A,colorIconHover:L,colorText:r,fontWeightStrong:u,drawerFooterPaddingVertical:C,drawerFooterPaddingHorizontal:k}=e,$=`${n}-content-wrapper`;return{[n]:{position:"fixed",inset:0,zIndex:a,pointerEvents:"none","&-pure":{position:"relative",background:l,[`&${n}-left`]:{boxShadow:e.boxShadowDrawerLeft},[`&${n}-right`]:{boxShadow:e.boxShadowDrawerRight},[`&${n}-top`]:{boxShadow:e.boxShadowDrawerUp},[`&${n}-bottom`]:{boxShadow:e.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${n}-mask`]:{position:"absolute",inset:0,zIndex:a,background:t,pointerEvents:"auto"},[$]:{position:"absolute",zIndex:a,transition:`all ${b}`,"&-hidden":{display:"none"}},[`&-left > ${$}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowDrawerLeft},[`&-right > ${$}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:e.boxShadowDrawerRight},[`&-top > ${$}`]:{top:0,insetInline:0,boxShadow:e.boxShadowDrawerUp},[`&-bottom > ${$}`]:{bottom:0,insetInline:0,boxShadow:e.boxShadowDrawerDown},[`${n}-content`]:{width:"100%",height:"100%",overflow:"auto",background:l,pointerEvents:"auto"},[`${n}-wrapper-body`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},[`${n}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${c}px ${h}px`,fontSize:m,lineHeight:y,borderBottom:`${v}px ${_} ${w}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${n}-extra`]:{flex:"none"},[`${n}-close`]:{display:"inline-block",marginInlineEnd:N,color:A,fontWeight:u,fontSize:m,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:`color ${g}`,textRendering:"auto","&:focus, &:hover":{color:L,textDecoration:"none"}},[`${n}-title`]:{flex:1,margin:0,color:r,fontWeight:e.fontWeightStrong,fontSize:m,lineHeight:y},[`${n}-body`]:{flex:1,minWidth:0,minHeight:0,padding:h,overflow:"auto"},[`${n}-footer`]:{flexShrink:0,padding:`${C}px ${k}px`,borderTop:`${v}px ${_} ${w}`},"&-rtl":{direction:"rtl"}}}},yt=Ve("Drawer",e=>{const n=Re(e,{drawerFooterPaddingVertical:e.paddingXS,drawerFooterPaddingHorizontal:e.padding});return[vt(n),mt(n)]},e=>({zIndexPopup:e.zIndexPopupBase}));var ht=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(a[t[l]]=e[t[l]]);return a};const gt=["top","right","bottom","left"],ke={distance:180},_t=()=>({autofocus:{type:Boolean,default:void 0},closable:{type:Boolean,default:void 0},closeIcon:p.any,destroyOnClose:{type:Boolean,default:void 0},forceRender:{type:Boolean,default:void 0},getContainer:{type:[String,Function,Boolean,Object],default:void 0},maskClosable:{type:Boolean,default:void 0},mask:{type:Boolean,default:void 0},maskStyle:z(),rootClassName:String,rootStyle:z(),size:{type:String},drawerStyle:z(),headerStyle:z(),bodyStyle:z(),contentWrapperStyle:{type:Object,default:void 0},title:p.any,visible:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},width:p.oneOfType([p.string,p.number]),height:p.oneOfType([p.string,p.number]),zIndex:Number,prefixCls:String,push:p.oneOfType([p.looseBool,{type:Object}]),placement:p.oneOf(gt),keyboard:{type:Boolean,default:void 0},extra:p.any,footer:p.any,footerStyle:z(),level:p.any,levelMove:{type:[Number,Array,Function]},handle:p.any,afterVisibleChange:Function,onAfterVisibleChange:Function,onAfterOpenChange:Function,"onUpdate:visible":Function,"onUpdate:open":Function,onClose:Function}),bt=J({compatConfig:{MODE:3},name:"ADrawer",inheritAttrs:!1,props:De(_t(),{closable:!0,placement:"right",maskClosable:!0,mask:!0,level:null,keyboard:!0,push:ke}),slots:Object,setup(e,n){let{emit:a,slots:t,attrs:l}=n;const b=D(!1),g=D(!1),c=D(null),h=D(!1),m=D(!1),y=P(()=>{var o;return(o=e.open)!==null&&o!==void 0?o:e.visible});V(y,()=>{y.value?h.value=!0:m.value=!1},{immediate:!0}),V([y,h],()=>{y.value&&h.value&&(m.value=!0)},{immediate:!0});const v=He("parentDrawerOpts",null),{prefixCls:_,getPopupContainer:w,direction:N}=qe("drawer",e),[A,L]=yt(_),r=P(()=>e.getContainer===void 0&&(w!=null&&w.value)?()=>w.value(document.body):e.getContainer);tt(!e.afterVisibleChange,"Drawer","`afterVisibleChange` prop is deprecated, please use `@afterVisibleChange` event instead"),Ue("parentDrawerOpts",{setPush:()=>{b.value=!0},setPull:()=>{b.value=!1,G(()=>{k()})}}),se(()=>{y.value&&v&&v.setPush()}),xe(()=>{v&&v.setPull()}),V(m,()=>{v&&(m.value?v.setPush():v.setPull())},{flush:"post"});const k=()=>{var o,i;(i=(o=c.value)===null||o===void 0?void 0:o.domFocus)===null||i===void 0||i.call(o)},$=o=>{a("update:visible",!1),a("update:open",!1),a("close",o)},S=o=>{var i;o||(g.value===!1&&(g.value=!0),e.destroyOnClose&&(h.value=!1)),(i=e.afterVisibleChange)===null||i===void 0||i.call(e,o),a("afterVisibleChange",o),a("afterOpenChange",o)},x=P(()=>{const{push:o,placement:i}=e;let f;return typeof o=="boolean"?f=o?ke.distance:0:f=o.distance,f=parseFloat(String(f||0)),i==="left"||i==="right"?`translateX(${i==="left"?f:-f}px)`:i==="top"||i==="bottom"?`translateY(${i==="top"?f:-f}px)`:null}),q=P(()=>{var o;return(o=e.width)!==null&&o!==void 0?o:e.size==="large"?736:378}),U=P(()=>{var o;return(o=e.height)!==null&&o!==void 0?o:e.size==="large"?736:378}),ce=P(()=>{const{mask:o,placement:i}=e;if(!m.value&&!o)return{};const f={};return i==="left"||i==="right"?f.width=Ce(q.value)?`${q.value}px`:q.value:f.height=Ce(U.value)?`${U.value}px`:U.value,f}),de=P(()=>{const{zIndex:o,contentWrapperStyle:i}=e,f=ce.value;return[{zIndex:o,transform:b.value?x.value:void 0},F({},i),f]}),ue=o=>{const{closable:i,headerStyle:f}=e,O=le(t,e,"extra"),E=le(t,e,"title");return!E&&!i?null:s("div",{class:re(`${o}-header`,{[`${o}-header-close-only`]:i&&!E&&!O}),style:f},[s("div",{class:`${o}-header-title`},[pe(o),E&&s("div",{class:`${o}-title`},[E])]),O&&s("div",{class:`${o}-extra`},[O])])},pe=o=>{var i;const{closable:f}=e,O=t.closeIcon?(i=t.closeIcon)===null||i===void 0?void 0:i.call(t):e.closeIcon;return f&&s("button",{key:"closer",onClick:$,"aria-label":"Close",class:`${o}-close`},[O===void 0?s(Xe,null,null):O])},fe=o=>{var i;if(g.value&&!e.forceRender&&!h.value)return null;const{bodyStyle:f,drawerStyle:O}=e;return s("div",{class:`${o}-wrapper-body`,style:O},[ue(o),s("div",{key:"body",class:`${o}-body`,style:f},[(i=t.default)===null||i===void 0?void 0:i.call(t)]),Y(o)])},Y=o=>{const i=le(t,e,"footer");if(!i)return null;const f=`${o}-footer`;return s("div",{class:f,style:e.footerStyle},[i])},Z=P(()=>re({"no-mask":!e.mask,[`${_.value}-rtl`]:N.value==="rtl"},e.rootClassName,L.value)),ee=P(()=>he(ge(_.value,"mask-motion"))),te=o=>he(ge(_.value,`panel-motion-${o}`));return()=>{const{width:o,height:i,placement:f,mask:O,forceRender:E}=e,oe=ht(e,["width","height","placement","mask","forceRender"]),ne=F(F(F({},l),Pe(oe,["size","closeIcon","closable","destroyOnClose","drawerStyle","headerStyle","bodyStyle","title","push","onAfterVisibleChange","onClose","onUpdate:visible","onUpdate:open","visible"])),{forceRender:E,onClose:$,afterVisibleChange:S,handler:!1,prefixCls:_.value,open:m.value,showMask:O,placement:f,ref:c});return A(s(ot,null,{default:()=>[s(ft,I(I({},ne),{},{maskMotion:ee.value,motion:te,width:q.value,height:U.value,getContainer:r.value,rootClassName:Z.value,rootStyle:e.rootStyle,contentWrapperStyle:de.value}),{handler:e.handle?()=>e.handle:t.handle,default:()=>fe(_.value)})]}))}}}),wt=We(bt),Ct="_navBar_n22tb_1",St="_titleBar_n22tb_9",$t="_navList_n22tb_23",kt="_tooltip_n22tb_27",xt="_navItem_n22tb_42",Ot="_comment_n22tb_59",Bt={navBar:Ct,titleBar:St,navList:$t,tooltip:kt,navItem:xt,comment:Ot},Nt=["src"],Pt={key:0,class:"px-3 mb-2 text-[12px] text-[var(--text-gray)] font-black"},Dt={class:"flex flex-col"},Mt=["aria-selected","onClick"],It={class:"text-sm"},Tt=d("p",{class:"mt-2 text-white"},"不会用？连不上了？",-1),Lt=d("p",{class:"text-white"},"使用教程中有您所需要的一切",-1),jt=d("span",null,"AirBuddy By ",-1),At=d("a",{href:"https://t.me/themebuddy",target:"_blank"},"ThemeBuddy",-1),Et=[jt,At],zt={__name:"nav",setup(e){const{title:n,logo:a}=window.config,t=ie(),l=Oe(),b=[{list:[{name:"Dashboard",title:"首页",icon:"mdi:earth"},{name:"Knowledge",title:"使用教程",icon:"mdi:book-outline"}]},{title:"订阅",list:[{title:"我的订阅",name:"Subscribe",icon:"mingcute:send-plane-line"},{title:"购买套餐",name:"Store",icon:"icon-park-outline:mall-bag"}]},{title:"财务",list:[{title:"我的订单",name:"Order",icon:"material-symbols:airplane-ticket-outline"},{title:"邀请有奖",name:"Invite",icon:"mdi:package-outline"}]},{title:"用户",list:[{title:"个人中心",icon:"mdi:clipboard-person-outline",name:"Profile"},{title:"我的工单",icon:"mdi:comment-quote-outline",name:"Ticket"}]}],g=Q();return V(t,c=>{g.value=c.matched[1].name},{immediate:!0}),(c,h)=>{const m=Qe;return T(),j("div",{class:B(c.$style.navBar),"aria-label":"navBar"},[d("div",{class:B(c.$style.titleBar)},[d("img",{src:M(a),alt:"logo"},null,8,Nt),d("p",null,W(M(n)),1)],2),d("div",{class:B(c.$style.navList)},[(T(),j(_e,null,be(b,y=>d("div",null,[y.title?(T(),j("p",Pt,W(y.title),1)):Be("",!0),d("ul",Dt,[(T(!0),j(_e,null,be(y.list,(v,_)=>(T(),j("li",{key:_,"aria-selected":g.value===v.name,class:B([c.$style.navItem,"gap-2"]),onClick:w=>M(l).push({name:v.name})},[s(M(H),{icon:v.icon,width:24},null,8,["icon"]),d("span",It,W(v.title),1)],10,Mt))),128))]),s(m,{style:{margin:"16px 0"}})])),64))],2),d("div",{class:B(c.$style.tooltip)},[s(M(H),{width:32,icon:"fluent:comment-lightning-20-filled"}),Tt,Lt,d("p",{class:"mt-4 cursor-pointer bg-white text-black rounded-lg font-black py-2 text-[12px] text-center",onClick:h[0]||(h[0]=y=>M(l).push("/dashboard/ticket"))},"联系我们")],2),d("div",{class:B(c.$style.comment),"aria-label":"copyright"},Et,2)],2)}}},Ft={$style:Bt},Ie=X(zt,[["__cssModules",Ft]]),Vt="_sideBar_1rfig_1",Rt={sideBar:Vt},Wt={__name:"SideBar",setup(e){return(n,a)=>(T(),j("div",{class:B(n.$style.sideBar)},[s(Ie)],2))}},Ht={$style:Rt},qt=X(Wt,[["__cssModules",Ht]]),Ut="_container_12pdx_1",Xt="_topBar_12pdx_8",Yt={container:Ut,topBar:Xt},Kt={class:"gap-2"},Gt={"aria-atomic":"true","aria-label":"action"},Jt={class:"font-black"},Qt={class:"gap-2"},Zt={"aria-label":"action"},eo={__name:"Container",setup(e){const n=Ye(),a=Ne(),t=ie();Oe();const l=()=>{n.Set_Token(void 0),a.Info=void 0,window.location.reload()},b=Q(!1);return(g,c)=>{const h=Ie,m=wt,y=nt,v=at,_=lt,w=Ke("router-view");return T(),j("div",{class:B(g.$style.container)},[d("div",{class:B(g.$style.topBar)},[d("div",Kt,[d("div",Gt,[s(M(H),{width:24,icon:"mdi:menu",onClick:c[0]||(c[0]=N=>b.value=!0)})]),d("p",Jt,W(M(t).meta.title),1),s(m,{"body-style":{padding:0},closable:!1,open:b.value,width:250,placement:"left",onClose:c[1]||(c[1]=N=>b.value=!1)},{default:R(()=>[s(h)]),_:1},8,["open"])]),d("div",Qt,[s(_,null,{overlay:R(()=>[s(v,{class:"w-full"},{default:R(()=>[s(y,{class:"w-full flex justify-center items-center"},{default:R(()=>[d("p",{class:"flex gap-x-2",onClick:l},[s(M(H),{width:24,icon:"mdi:exit-to-app"}),Ge(" 退出登陆 ")])]),_:1})]),_:1})]),default:R(()=>[d("div",Zt,[s(M(H),{width:24,icon:"mdi:user-outline"})])]),_:1})])],2),s(w)],2)}}},to={$style:Yt},oo=X(eo,[["__cssModules",to]]),no=d("p",null,"AirBuddy for v2Board 主题",-1),ao={class:"flex gap-1 items-center my-0.5"},lo=d("a",{href:"https://t.me/themebuddy",target:"_blank"},"@themebuddy",-1),ro=d("p",null,"承接机场站点主题定制开发，主打用户体验，高效交付，价格美丽",-1),so=J({__name:"copyright",setup(e){return(n,a)=>(T(),j("div",{class:B(n.$style.copyright)},[no,d("div",ao,[s(M(H),{width:24,icon:"logos:telegram"}),lo]),ro],2))}}),io="_copyright_ytzmd_1",co={copyright:io},uo={$style:co},po=X(so,[["__cssModules",uo]]),fo="_wrapper_gwvb9_1",mo="_notice_gwvb9_8",vo={wrapper:fo,notice:mo},yo=d("hr",{class:"my-3"},null,-1),ho={"aria-label":"img"},go=["src"],_o=["textContent"],bo={__name:"Layout",setup(e){const n=ie(),a=Ne(),t=Q(!1);se(()=>{document.querySelector("body").style.background="#fafafa",a.Init().then(()=>{n.name==="Dashboard"&&a.Notice.total!==0&&(t.value=!0)}).catch(()=>{we.warn("加载公告失败 请重试")}),setInterval(()=>{var v,_,w;let g=document.querySelector('[aria-label="copyright"]')!==null,c=document.querySelector('[aria-label="copyright"]').style.display!=="none"&&document.querySelector('[aria-label="copyright"]').style.visibility!=="hidden",h=((v=document.querySelector('[aria-label="copyright"]'))==null?void 0:v.textContent)==="AirBuddy By ThemeBuddy",m=((_=document.querySelector('[aria-label="copyright"] a'))==null?void 0:_.getAttribute("href"))==="https://t.me/themebuddy",y=((w=document.querySelector('[aria-label="copyright"]').parentElement)==null?void 0:w.getAttribute("aria-label"))==="navBar";g&&c&&h&&m&&y||(setInterval(()=>{we.error("你正在非法使用 AirBuddy 主题")},1e3),setTimeout(()=>{window.open("https://t.me/themebuddy")},3e3))},1e4)});const l=P(()=>a.Notice.data[0]),b=P(()=>!1);return(g,c)=>{const h=rt;return T(),j("div",{class:B(g.$style.wrapper)},[s(qt),s(oo),s(h,{open:t.value,"onUpdate:open":c[0]||(c[0]=m=>t.value=m),"cancel-text":void 0,title:"消息公告",footer:!1},{default:R(()=>[d("div",{class:B(g.$style.notice)},[yo,d("h2",null,W(l.value.title),1),d("div",ho,[d("img",{src:l.value.img_url,alt:"cover"},null,8,go)]),d("div",{textContent:W(l.value.content)},null,8,_o)],2)]),_:1},8,["open"]),b.value?(T(),Je(po,{key:0})):Be("",!0)],2)}}},wo={$style:vo},Ao=X(bo,[["__cssModules",wo]]);export{Ao as default};
