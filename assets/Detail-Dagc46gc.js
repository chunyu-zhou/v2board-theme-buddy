import{z as _,B as v,r as g,l as f,w as b,b as y,c as h,D as s,E as c,F as a,I as l,G as d,g as k,H as w,S as C,R as B}from"./index-DRkaJlvC.js";import{K as z}from"./User-BGMk0TC4.js";import{I as x}from"./iconify-ClT8_HQj.js";import{u as D}from"./index-CY-P1fAz.js";import"./index-BoCG2yQc.js";import{S as E}from"./Skeleton-DAfT_4ud.js";import"./omit-f96Oznw2.js";const M="_container_9zpwf_1",T="_detailContainer_9zpwf_4",$="_htmlBody_9zpwf_36",H={container:M,detailContainer:T,htmlBody:$},I={class:"ViewWrapper"},L={"aria-label":"title"},S=["innerHTML"],A={__name:"Detail",setup(R){const r=v(),t=g(),u=f(()=>!t.value||!t.value.body?null:t.value.body),{text:U,copy:m,copied:p}=D();b(p,e=>{e&&B.success("复制成功")});const i=e=>{if(e.target.getAttribute("aria-label")!=="button")return;const o=e.target.getAttribute("data-url"),n=e.target.getAttribute("data-clipboard-text");o?window.open(o):n&&m(n)};return y(()=>{z(r.currentRoute.value.params.id).then(e=>{t.value=e.data}),document.addEventListener("click",i)}),h(()=>{document.removeEventListener("click",i)}),(e,o)=>{const n=E;return s(),c("div",I,[a("div",{class:l(e.$style.container)},[t.value?(s(),c("div",{key:0,class:l(e.$style.detailContainer)},[a("div",L,[a("div",{onClick:o[0]||(o[0]=V=>d(r).push({name:"KnowledgeHome"}))},[k(d(x),{width:20,icon:"material-symbols:arrow-back-rounded"})]),a("div",null,w(t.value.title),1)]),a("div",{class:l(e.$style.htmlBody),innerHTML:u.value},null,10,S)],2)):(s(),C(n,{key:1,active:"",size:"large"}))],2)])}}},K={$style:H},O=_(A,[["__cssModules",K]]);export{O as default};
