import{d as w,l as i,m as D,g as N,p as P,o as k,a as E,B as n,i as d,Q as c,e as U,f as q,H as F,_ as L,r as v,a6 as I,S as g,x as $}from"./vue.BCHSKM6y.js";import{u as j,y as Q,a4 as z,b as G,c as J,a5 as K,a6 as x,a8 as C,t as W,g as X}from"./index.Cjri3_sP.js";import{_ as f}from"./BaseInfoItem.vue_vue_type_style_index_0_lang.DMYgpoJW.js";import{g as Z,h as ee,i as te}from"./index.DllRNd8O.js";import"./right-arrow-icon.CaFxgYzl.js";const ae={class:"updata-staff-box hk-flex hk-flex-col container-setPx"},se={class:"updata-staff-form"},ne={class:"deal-car-btnbox hk-flex"},ce=w({__name:"deal",setup(oe){const{t:y}=G();L(),i(null);const p=i(null),T=i(null),S=i(null),o=j(),{comeback:h,goback:le}=J(),{hkMessage:l}=X();i(!1);const b=i([]),t=D({nickname:o.userInfo.nickname,homeName:o.userInfo.homeName,client:"",address:"",applicationId:0,startTime:"",endTime:"",useCarStatus:0,clientId:0}),H=N(()=>!!t.startTime),R=e=>{t.client=e==null?void 0:e[0].text,t.clientId=e==null?void 0:e[0].value},_=()=>{S.value.taggleVisible(!0)},V=()=>new Promise((e,a)=>{K({homeId:o.userInfo.homeId}).then(m=>{if(m.code===0){const u=m.data.list.filter(s=>s.identifyId!==o.userInfo.identifyId).map(s=>({text:s.nickname,value:s.identifyId}));b.value=u,e(!0)}else a()})}),B=()=>{Z({homeId:o.userInfo.homeId}).then(e=>{e.code===0?(t.client=e.data.client,t.clientId=e.data.clientId,t.address=e.data.address,t.applicationId=e.data.applicationId,t.startTime=e.data.startTime?x(e.data.startTime*1e3).format("YYYY-MM-DD HH:mm"):p.value.getCurrTime(),t.endTime=e.data.endTime?x(e.data.endTime*1e3).format("YYYY-MM-DD HH:mm"):T.value.getCurrTime(),t.useCarStatus=e.data.useCarStatus):l(e.msg)}).catch(e=>{l(e)})},r=e=>{e===1?p.value.taggleVisible():T.value.taggleVisible()},M=(e,a)=>{t.startTime=`${e[0]}-${e[1]}-${e[2]} ${a[0]}:${a[1]}`},A=(e,a)=>{t.endTime=`${e[0]}-${e[1]}-${e[2]} ${a[0]}:${a[1]}`},O=()=>{ee({homeId:o.userInfo.homeId,startTime:C(t.startTime),clientId:t.clientId,address:t.address}).then(e=>{e.code===0?(l("出车成功"),h()):l(e.msg)})},Y=()=>{if(!t.endTime){l("结束出车时间未填");return}te({homeId:o.userInfo.homeId,startTime:C(t.startTime),clientId:t.clientId,address:t.address,endTime:C(t.endTime)}).then(e=>{e.code===0?(l("结束出车成功"),h()):l(e.msg)})};return P(async()=>{V(),B()}),(e,a)=>{const m=v("BtmSingleBtn"),u=v("TimeSelect");return k(),E(F,null,[n(Q,{title:t.useCarStatus===1?"开始出车":t.useCarStatus===2?"结束出车":""},null,8,["title"]),d("div",ae,[d("div",se,[n(f,{label:"委派人",isHaveRArrow:!0,onOnHandle:_},{default:c(()=>[d("div",{onClick:I(_,["stop"])},g(t.client),1)]),_:1}),n(f,{label:"目的地"},{default:c(()=>[n($(W),{modelValue:t.address,"onUpdate:modelValue":a[0]||(a[0]=s=>t.address=s),placeholder:$(y)("base.pleaseInputTxt")},null,8,["modelValue","placeholder"])]),_:1}),n(f,{label:"出车时间",isHaveRArrow:!0,isRequire:!0,onOnHandle:a[2]||(a[2]=s=>r(1))},{default:c(()=>[d("div",{onClick:a[1]||(a[1]=I(s=>r(1),["stop"]))},g(t.startTime),1)]),_:1}),t.useCarStatus===2?(k(),U(f,{key:0,label:"结束时间",isHaveRArrow:!0,isRequire:!0,onOnHandle:a[4]||(a[4]=s=>r(2))},{default:c(()=>[d("div",{onClick:a[3]||(a[3]=I(s=>r(2),["stop"]))},g(t.endTime),1)]),_:1})):q("",!0),d("div",ne,[n(m,{class:"deal-car-btn",disable:H.value,handleTxt:t.useCarStatus===1?"开始出车":"结束出车",onOnHandle:a[5]||(a[5]=s=>t.useCarStatus===1?O():Y())},null,8,["disable","handleTxt"])])])]),n(z,{ref_key:"feeTypePopRef",ref:S,title:"选择委派人",data:b.value,onOnChange:R},null,8,["data"]),n(u,{ref_key:"startTimeSelectRef",ref:p,onOnChangeVal:M},null,512),n(u,{ref_key:"endTimeSelectRef",ref:T,onOnChangeVal:A},null,512)],64)}}});export{ce as default};
