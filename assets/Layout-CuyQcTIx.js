import{u as k,c as v}from"./User-Do7w9z6T.js";import{h as g}from"./moment-BjLXg0w5.js";import{P as l}from"./Plan-BJnWljSG.js";import{z as b,r as c,b as w,D as a,E as o,F as p,g as m,O as C,G as I,ad as B,L as r,H,R as D}from"./index-DRkaJlvC.js";import{_ as O}from"./index-gJCwbjf_.js";import{B as V}from"./index-BK2ApYNS.js";import"./User-BGMk0TC4.js";import"./styleChecker-CMw1WS_Y.js";import"./index-Ce82sHUd.js";import"./vnode--2Vkbv_C.js";import"./collapseMotion-DnQYYeHb.js";import"./index-DpT_JXnx.js";import"./colors-DblmAcNW.js";import"./index-Dd7K2_2u.js";import"./index-BhuQFFEN.js";import"./omit-f96Oznw2.js";import"./index-SvSicEu8.js";import"./index-B1kXxv-8.js";import"./CheckOutlined-lXluuqkb.js";import"./isNumeric-DjvBa-1E.js";const Y={class:"ViewWrapper",style:{"box-shadow":"var(--shadow)"}},L={key:0,class:"flex whitespace-nowrap flex-col gap-1"},M=["onClick"],N=["onClick"],P={key:1,class:"flex items-center"},S={__name:"Layout",setup(E){const s=k(),n=c(!1),u=[{title:"订单号",dataIndex:"dh",width:270},{title:"商品",width:250,dataIndex:"name"},{title:"周期",width:150,dataIndex:"period"},{title:"订单金额",dataIndex:"money"},{title:"订单状态",dataIndex:"status",key:"status"},{title:"创建时间",dataIndex:"create_time",key:"4"},{title:"操作",key:"operation",fixed:"right"}],i=c([]);w(()=>{n.value=!0,s.Order=void 0,s.Set_Order().then(()=>{for(const t of s.Order)i.value.push({dh:t.trade_no,name:t.plan.name,period:l.prototype.Handel_name(t.period),money:(t.total_amount/100).toFixed(2),status:l.prototype.Handel_status(t.status),create_time:g(t.created_at*1e3).format("YYYY-MM-DD HH:mm:ss")})}).finally(()=>{n.value=!1})});const _=t=>{v({trade_no:t}).then(h=>{D.success("取消订单成功"),location.reload()})};return(t,h)=>{const f=V,y=O;return a(),o("div",Y,[p("div",null,[m(y,{columns:u,"data-source":i.value,loading:n.value,scroll:{x:1300,y:1e3}},{bodyCell:C(({column:d,record:e})=>[d.key==="operation"?(a(),o("div",L,[e.status[0]!==2?(a(),o("p",{key:0,class:"text-[var(--bg)] cursor-pointer",onClick:x=>I(B).push("/dashboard/checkout/"+e.dh)},"查看详情",8,M)):r("",!0),e.status[0]===0?(a(),o("p",{key:1,class:"text-[var(--bg)] cursor-pointer",onClick:x=>_(e.dh)},"取消订单",8,N)):r("",!0)])):d.key==="status"?(a(),o("div",P,[m(f,{status:e.status[2]},null,8,["status"]),p("p",null,H(e.status[1]),1)])):r("",!0)]),_:1},8,["data-source","loading"])])])}}},st=b(S,[["__scopeId","data-v-4de3ba1c"]]);export{st as default};
