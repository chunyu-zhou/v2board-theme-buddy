import{d as I,g as c,e as C,j as N,m as j,_ as o,ae as D,u as G}from"./index-DRkaJlvC.js";import{i as W}from"./User-BGMk0TC4.js";const z=()=>({prefixCls:String,width:{type:[Number,String]}}),O=I({compatConfig:{MODE:3},name:"SkeletonTitle",props:z(),setup(e){return()=>{const{prefixCls:t,width:n}=e,r=typeof n=="number"?`${n}px`:n;return c("h3",{class:t,style:{width:r}},null)}}}),X=()=>({prefixCls:String,width:{type:[Number,String,Array]},rows:Number}),_=I({compatConfig:{MODE:3},name:"SkeletonParagraph",props:X(),setup(e){const t=n=>{const{width:r,rows:l=2}=e;if(Array.isArray(r))return r[n];if(l-1===n)return r};return()=>{const{prefixCls:n,rows:r}=e,l=[...Array(r)].map((a,i)=>{const d=t(i);return c("li",{key:i,style:{width:typeof d=="number"?`${d}px`:d}},null)});return c("ul",{class:n},[l])}}}),le=()=>({prefixCls:String,size:[String,Number],shape:String,active:{type:Boolean,default:void 0}}),L=e=>{const{prefixCls:t,size:n,shape:r}=e,l=C({[`${t}-lg`]:n==="large",[`${t}-sm`]:n==="small"}),a=C({[`${t}-circle`]:r==="circle",[`${t}-square`]:r==="square",[`${t}-round`]:r==="round"}),i=typeof n=="number"?{width:`${n}px`,height:`${n}px`,lineHeight:`${n}px`}:{};return c("span",{class:C(t,l,a),style:i},null)};L.displayName="SkeletonElement";const q=new D("ant-skeleton-loading",{"0%":{transform:"translateX(-37.5%)"},"100%":{transform:"translateX(37.5%)"}}),v=e=>({height:e,lineHeight:`${e}px`}),m=e=>o({width:e},v(e)),F=e=>({position:"relative",zIndex:0,overflow:"hidden",background:"transparent","&::after":{position:"absolute",top:0,insetInlineEnd:"-150%",bottom:0,insetInlineStart:"-150%",background:e.skeletonLoadingBackground,animationName:q,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite",content:'""'}}),P=e=>o({width:e*5,minWidth:e*5},v(e)),K=e=>{const{skeletonAvatarCls:t,color:n,controlHeight:r,controlHeightLG:l,controlHeightSM:a}=e;return{[`${t}`]:o({display:"inline-block",verticalAlign:"top",background:n},m(r)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:o({},m(l)),[`${t}${t}-sm`]:o({},m(a))}},V=e=>{const{controlHeight:t,borderRadiusSM:n,skeletonInputCls:r,controlHeightLG:l,controlHeightSM:a,color:i}=e;return{[`${r}`]:o({display:"inline-block",verticalAlign:"top",background:i,borderRadius:n},P(t)),[`${r}-lg`]:o({},P(l)),[`${r}-sm`]:o({},P(a))}},M=e=>o({width:e},v(e)),J=e=>{const{skeletonImageCls:t,imageSizeBase:n,color:r,borderRadiusSM:l}=e;return{[`${t}`]:o(o({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:r,borderRadius:l},M(n*2)),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:o(o({},M(n)),{maxWidth:n*4,maxHeight:n*4}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},x=(e,t,n)=>{const{skeletonButtonCls:r}=e;return{[`${n}${r}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${n}${r}-round`]:{borderRadius:t}}},E=e=>o({width:e*2,minWidth:e*2},v(e)),Q=e=>{const{borderRadiusSM:t,skeletonButtonCls:n,controlHeight:r,controlHeightLG:l,controlHeightSM:a,color:i}=e;return o(o(o(o(o({[`${n}`]:o({display:"inline-block",verticalAlign:"top",background:i,borderRadius:t,width:r*2,minWidth:r*2},E(r))},x(e,r,n)),{[`${n}-lg`]:o({},E(l))}),x(e,l,`${n}-lg`)),{[`${n}-sm`]:o({},E(a))}),x(e,a,`${n}-sm`))},U=e=>{const{componentCls:t,skeletonAvatarCls:n,skeletonTitleCls:r,skeletonParagraphCls:l,skeletonButtonCls:a,skeletonInputCls:i,skeletonImageCls:d,controlHeight:y,controlHeightLG:f,controlHeightSM:p,color:g,padding:w,marginSM:B,borderRadius:s,skeletonTitleHeight:h,skeletonBlockRadius:u,skeletonParagraphLineHeight:$,controlHeightXS:k,skeletonParagraphMarginTop:S}=e;return{[`${t}`]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:w,verticalAlign:"top",[`${n}`]:o({display:"inline-block",verticalAlign:"top",background:g},m(y)),[`${n}-circle`]:{borderRadius:"50%"},[`${n}-lg`]:o({},m(f)),[`${n}-sm`]:o({},m(p))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[`${r}`]:{width:"100%",height:h,background:g,borderRadius:u,[`+ ${l}`]:{marginBlockStart:p}},[`${l}`]:{padding:0,"> li":{width:"100%",height:$,listStyle:"none",background:g,borderRadius:u,"+ li":{marginBlockStart:k}}},[`${l}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${r}, ${l} > li`]:{borderRadius:s}}},[`${t}-with-avatar ${t}-content`]:{[`${r}`]:{marginBlockStart:B,[`+ ${l}`]:{marginBlockStart:S}}},[`${t}${t}-element`]:o(o(o(o({display:"inline-block",width:"auto"},Q(e)),K(e)),V(e)),J(e)),[`${t}${t}-block`]:{width:"100%",[`${a}`]:{width:"100%"},[`${i}`]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${r},
        ${l} > li,
        ${n},
        ${a},
        ${i},
        ${d}
      `]:o({},F(e))}}},Y=N("Skeleton",e=>{const{componentCls:t}=e,n=j(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:e.controlHeight*1.5,skeletonTitleHeight:e.controlHeight/2,skeletonBlockRadius:e.borderRadiusSM,skeletonParagraphLineHeight:e.controlHeight/2,skeletonParagraphMarginTop:e.marginLG+e.marginXXS,borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.color} 25%, ${e.colorGradientEnd} 37%, ${e.color} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[U(n)]},e=>{const{colorFillContent:t,colorFill:n}=e;return{color:t,colorGradientEnd:n}}),Z=()=>({active:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},prefixCls:String,avatar:{type:[Boolean,Object],default:void 0},title:{type:[Boolean,Object],default:void 0},paragraph:{type:[Boolean,Object],default:void 0},round:{type:Boolean,default:void 0}});function R(e){return e&&typeof e=="object"?e:{}}function ee(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function te(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}function ne(e,t){const n={};return(!e||!t)&&(n.width="61%"),!e&&t?n.rows=3:n.rows=2,n}const ae=I({compatConfig:{MODE:3},name:"ASkeleton",props:W(Z(),{avatar:!1,title:!0,paragraph:!0}),setup(e,t){let{slots:n}=t;const{prefixCls:r,direction:l}=G("skeleton",e),[a,i]=Y(r);return()=>{var d;const{loading:y,avatar:f,title:p,paragraph:g,active:w,round:B}=e,s=r.value;if(y||e.loading===void 0){const h=!!f||f==="",u=!!p||p==="",$=!!g||g==="";let k;if(h){const b=o(o({prefixCls:`${s}-avatar`},ee(u,$)),R(f));k=c("div",{class:`${s}-header`},[c(L,b,null)])}let S;if(u||$){let b;if(u){const H=o(o({prefixCls:`${s}-title`},te(h,$)),R(p));b=c(O,H,null)}let A;if($){const H=o(o({prefixCls:`${s}-paragraph`},ne(h,u)),R(g));A=c(_,H,null)}S=c("div",{class:`${s}-content`},[b,A])}const T=C(s,{[`${s}-with-avatar`]:h,[`${s}-active`]:w,[`${s}-rtl`]:l.value==="rtl",[`${s}-round`]:B,[i.value]:!0});return a(c("div",{class:T},[k,S]))}return(d=n.default)===null||d===void 0?void 0:d.call(n)}}});export{L as E,ae as S,O as a,le as s,Y as u};
