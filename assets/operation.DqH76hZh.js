import{l as D,b as I,R as O,r as m,a as y,d as R,K as h,L as S,U as w,V as p,k as r,N as e,u as a,O as f,D as P}from"./vue.C2TeXnf4.js";import{d as U,m as $,f as H,t as x,u as L,a as j}from"./index.C__3lhMr.js";import{_ as A}from"./BaseInfoItem.vue_vue_type_style_index_0_lang.MpSsZcmr.js";import{b as F}from"./index.CeJqzCj5.js";import"./right-arrow-icon.CaFxgYzl.js";const K={class:"pay-handle-box container-setPx hk-flex hk-flex-col hk-pt-52"},z={class:"pay-handle-from form-pt-8"},E={class:"hk-flex hk-items-center"},G={class:"form-item-price-util"},J={class:"form-textarea-box"},Q={class:"hk-flex hk-jbetween hk-items-center form-textarea-t"},W={class:"form-textarea-tl"},X={class:"form-textarea-tr"},Y={class:"form-textarea-b"},Z=e("div",{class:"footer-aux-btmbox"},null,-1),ee={class:"footer-btn-box"},re=D({__name:"operation",setup(te){const{t:s}=L(),{hkMessage:_}=j(),{comeback:v}=U(),t=I({payMoney:"",desc:""}),n=O(),{homeId:b,id:k}=n.query,{auth:c}=$(),o=m(Number(n.query.doType)),g=m(n.query.currency),d=m(!1),T=y(()=>!!t.payMoney),M=y(()=>c===3?o.value===5?"划拨备用金":"收回备用金":s("base.footer.imprest",{pre:o.value===5?s("base.giveOutTxt"):s("base.takeBackTxt")})),V=()=>{d.value=!0,F({homeId:b,amount:t.payMoney,staffIdentifyId:k,typ:o.value,remark:t.desc}).then(l=>{l.code===0?(_(`${o.value===5?c===3?"划拨":"发放":"收回"}备用金成功`),B(),v()):_(l.msg)}).finally(()=>{d.value=!1})},B=()=>{t.desc="",t.payMoney=""},q=l=>l.replace(/[^0-9.,]/g,"");return R(async()=>{console.log(n.query),o.value=Number(n.query.doType)}),(l,i)=>{const N=h("BtmSingleBtn"),C=h("MainContainer");return S(),w(C,null,{header:p(()=>[r(H,{title:M.value},null,8,["title"])]),default:p(()=>[e("div",K,[e("div",z,[r(A,{label:o.value===5?a(c)===3?"划拨金额":"发放金额":"收回金额",isRequire:!0},{default:p(()=>[e("div",E,[r(a(x),{class:"form-item-price",modelValue:t.payMoney,"onUpdate:modelValue":i[0]||(i[0]=u=>t.payMoney=u),formatter:q,type:"number",placeholder:"0"},null,8,["modelValue"]),e("span",G,f(g.value),1)])]),_:1},8,["label"]),e("div",J,[e("div",Q,[e("div",W,f(a(s)("base.descTxt")),1),e("div",X,[e("span",null,f(t.desc.length),1),P("/200")])]),e("div",Y,[r(a(x),{class:"form-textarea",maxlength:200,rows:"6",modelValue:t.desc,"onUpdate:modelValue":i[1]||(i[1]=u=>t.desc=u),placeholder:a(s)("base.descTxt")+":",type:"textarea"},null,8,["modelValue","placeholder"])])])]),Z,e("div",ee,[r(N,{loading:d.value,disable:T.value,handleTxt:o.value===5?a(c)===3?"划拨":a(s)("base.giveOutTxt"):a(s)("base.takeBackTxt"),onOnHandle:V},null,8,["loading","disable","handleTxt"])])])]),_:1})}}});export{re as default};
