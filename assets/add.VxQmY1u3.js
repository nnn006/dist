import{_ as x}from"./right-arrow-icon.CaFxgYzl.js";import{a3 as L,u as R,h as B,a4 as f,b as I,az as M,g as A}from"./index.Cjri3_sP.js";import{d as D,l as o,p as J,o as N,a as O,i as t,B as r,Q as z,H as F,_ as q,r as g,n as b,S as k}from"./vue.BCHSKM6y.js";const E={class:"staff-add-content hk-pt-noScreen"},Q={class:"add-member-screen-box"},U=t("div",{class:"ambs-l"},"选择家庭",-1),$={class:"ambs-r hk-flex hk-items-center"},G=t("img",{style:{"margin-left":"6px"},class:"input-right-arrow",src:x},null,-1),K=t("div",{class:"ambs-l"},"选择职务",-1),W={class:"ambs-r hk-flex hk-items-center"},X=t("img",{style:{"margin-left":"6px"},class:"input-right-arrow",src:x},null,-1),ae=D({__name:"add",setup(Y){const{t:d}=I(),{hkMessage:S}=A(),y=L(),m=R(),{auth:C}=B(),v=o(null),j=q(),l=o(""),h=o(null),u=o([{text:d("base.selectFamilyTxt"),value:0}]),p=o([{text:d("base.jopTxt"),value:0}]),n=o({text:"职务",value:0}),s=o({text:"家庭",value:0}),w=e=>{var a;s.value=e[0],n.value.value&&((a=e[0])!=null&&a.value)?_():l.value=""},P=e=>{var a;n.value=e[0],s.value.value&&((a=e[0])!=null&&a.value)?_():l.value=""},_=()=>{M({identifyType:4,dutiesId:n.value.value,homeIds:[s.value.value]}).then(e=>{e.code===0?l.value=e.data.shareCode:S(e.msg)})},H=()=>{h.value.taggleVisible(!0)},T=()=>{v.value.taggleVisible(!0)};return J(async()=>{await m.setHomeSimpleLs();const e=await m.homeSimple,a=await y.getJob;if(p.value=a,C===3)u.value=e,s.value=e[0];else{u.value=e;const{homeId:c}=j.query;if(c){const i=e.filter(V=>V.value===Number(c));i.length&&(s.value=i[0])}}}),(e,a)=>{const c=g("SecondHeader"),i=g("AddMember");return N(),O(F,null,[t("div",E,[r(c,{noScreen:!0}),r(i,{inviteLink:l.value,tips:"请先选择家和职务~",typ:4},{default:z(()=>[t("div",Q,[t("div",{class:"add-member-screen hk-flex hk-jbetween hk-items-center",onClick:T},[U,t("div",$,[t("div",{class:b(["ambs-r-label",{"no-screen":s.value.value===0}])},k(s.value.text),3),G])]),t("div",{class:"add-member-screen hk-flex hk-jbetween hk-items-center",onClick:H},[K,t("div",W,[t("div",{class:b(["ambs-r-label",{"no-screen":n.value.value===0}])},k(n.value.text),3),X])])])]),_:1},8,["inviteLink"])]),r(f,{ref_key:"homeTypePopRef",ref:v,title:"选择家庭",data:u.value,onOnChange:w},null,8,["data"]),r(f,{ref_key:"jopPopoverRef",ref:h,title:"职务",data:p.value,onOnChange:P},null,8,["data"])],64)}}});export{ae as default};