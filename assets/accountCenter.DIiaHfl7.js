import{l as k,r as f,i as B,d as y,K as i,L as m,U as p,V as _,N as o,k as c,u as s,S as H,s as I,v as N}from"./vue.C2TeXnf4.js";import{_ as g}from"./BaseInfoItem.vue_vue_type_style_index_0_lang.MpSsZcmr.js";import{m as O,d as R,j as U,q as L,I as M,aU as V,ay as $,a as D,az as j}from"./index.C__3lhMr.js";import"./right-arrow-icon.CaFxgYzl.js";const z={class:"add-home-box container-setPx"},q={class:"add-home-form"},F=o("div",{class:"footer-aux-btmbox"},null,-1),K={class:"footer-btn-box footer-btn-z99box"},Q=o("div",{class:"staff-details-dialog"},[o("div",{class:"pd-dialog-content"}," 确定注销账号? ")],-1),Z=k({__name:"accountCenter",setup(T){const n=f(null),l=f(!1),{auth:h}=O(),{hkMessage:t}=D(),{pushName:d,comeback:E,replacePath:v}=R(),{clearStoreAll:C}=j(),r=B("doViewsCache"),a=U(),S=L(),b=()=>{V().then(e=>{e.code===0?n.value.taggleDialog(!0):t(e.msg)}).catch(e=>{t(e)})},w=()=>{$().then(async e=>{e.code===0?(t("账号注销成功"),r==null||r(),await a.$reset(),await S.$reset(),sessionStorage.clear(),C(),a.updateUserInfo("homeSimple",[]),n.value.taggleDialog(!1),v("/login")):t(e.msg)})};return y(()=>{l.value=M.inApp()}),(e,u)=>{const A=i("LogoutBtn"),P=i("ConfrimPopAgain"),x=i("MainContainer");return m(),p(x,null,{default:_(()=>[o("div",z,[o("div",q,[c(g,{label:s(a).userInfo.isSetPassword?"修改密码":"设置密码",isHaveRArrow:!0,onOnHandle:u[0]||(u[0]=G=>s(a).userInfo.isSetPassword?s(d)("UpdatePwd"):s(d)("SetPwd",{type:1}))},null,8,["label"]),s(h)===1?(m(),p(g,{key:0,label:"注销账号",isHaveRArrow:!0,onOnHandle:b})):H("",!0)])]),F,I(o("div",K,[c(A)],512),[[N,!l.value]]),c(P,{ref_key:"confirmPopRef",ref:n,popClass:"staff-details-dialog-box",customFooter:!0,onOnConfirm:w},{default:_(()=>[Q]),_:1},512)]),_:1})}}});export{Z as default};
