import{_ as v}from"./right-arrow-icon.CaFxgYzl.js";import{u as g,y as b,a4 as x,b as k,az as y,g as S}from"./index.Cjri3_sP.js";import{d as T,l as n,g as w,p as C,o as B,a as F,B as i,x as u,i as a,Q as L,H as M,r as V,n as H,S as j}from"./vue.BCHSKM6y.js";const z={class:"staff-manage-box fam-manage-box hk-pt-noScreen"},A={class:"add-member-screen-box"},D=a("div",{class:"ambs-l"},"选择家庭",-1),I={class:"ambs-r hk-flex hk-items-center"},N=a("img",{style:{"margin-left":"6px"},class:"input-right-arrow",src:v},null,-1),O=T({__name:"add",setup(P){const{t:l}=k();n(null);const o=n(""),{hkMessage:d}=S(),c=g(),r=n(null),m=n([]),s=n([{text:"家庭",value:0}]),p=e=>{e.length?(s.value=e,y({identifyType:2,homeIds:s.value.map(t=>t.value)}).then(t=>{t.code===0?o.value=t.data.shareCode:d(t.msg)})):(s.value=[{text:l("base.selectFamilyTxt"),value:0}],o.value="")},_=w(()=>s.value.map(e=>e.text).join(",")),h=()=>{r.value.taggleVisible(!0)};return C(async()=>{await c.setHomeSimpleLs();const e=await c.homeSimple;m.value.push(...e)}),(e,t)=>{const f=V("AddMember");return B(),F(M,null,[i(b,{title:u(l)("base.addFamilyTxt")},null,8,["title"]),a("div",z,[i(f,{inviteLink:o.value,typ:2},{default:L(()=>[a("div",A,[a("div",{class:"add-member-screen hk-flex hk-jbetween hk-items-center",onClick:h},[D,a("div",I,[a("div",{class:H(["ambs-r-label",{"no-screen":s.value.length===1&&s.value[0].value===0}])},j(_.value),3),N])])])]),_:1},8,["inviteLink"])]),i(x,{ref_key:"feeTypePopRef",ref:r,title:u(l)("base.manageFamilyTxt"),showBtmBtn:!0,isSingle:!1,data:m.value,onOnChange:p},null,8,["title","data"])],64)}}});export{O as default};
