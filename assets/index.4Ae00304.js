import{m as A,c as B,j as z,f as J,Q as V,u as $,b as j}from"./index.C__3lhMr.js";import{l as E,J as U,r as f,b as q,d as K,K as r,L as Q,U as F,V as p,k as i,u as S,N as o,O as G}from"./vue.C2TeXnf4.js";import{_ as W}from"./NewsItem.vue_vue_type_style_index_0_lang.C3OnuWsN.js";import{a as X}from"./index.CeJqzCj5.js";const Y={class:"imp-main-content"},Z={class:"screen-box hk-flex hk-w-full"},ee={class:"screen-item"},te={class:"screen-item"},ae={class:"hk-flex hk-items-center"},se={class:"head-select-value"},oe={class:"imp-main-content hk-pt-104"},ne={class:"imp-main-box"},ie=["src"],de=E({name:"Imprest",__name:"index",setup(le){const{t:d}=$(),{auth:T}=A(),k=U(),{pageLoading:x,endPageLoading:N}=B({activeAction:w}),{showLoading:y,closeLoading:L}=j(),h=f(null),_=f([]),v=z(),g=f([{text:d("base.screen.home.all"),value:0}]),l=f({text:d("base.screen.home.all"),value:0}),e=q({page:1,pageSize:10,total:0,curTime:0}),C=t=>{window.sessionStorage.setItem("imprest",JSON.stringify({time:e.curTime,home:l.value})),k.push({name:"ImpDetails",query:{id:t.id}})},I=t=>{l.value=t,e.page=1,y(),u(L)},u=t=>{const s={page:e.page,pageSize:e.pageSize,selectTime:Math.floor(e.curTime/1e3),selectTimeTyp:2,homeId:l.value.value};X(s).then(n=>{if(n.code===0){const c=n.data.list.map(a=>({id:a.applicationId,title:a.title,value:a.amount,type:"price",currencyType:a.currency,pic:a.identifyAvatar,applyState:a.status,active:!1,homeName:a.homeName,identifyName:a.identifyName,applicationTime:a.applicationTime,typ:a.typ}));s.page===1?_.value=c:_.value.push(...c),e.total=n.data.total}}).finally(()=>{var n,c;(n=h.value)==null||n.taggleRefreshState("isLoading",!1),(c=h.value)==null||c.taggleRefreshState("loading",!1),t&&t()})},H=()=>{e.page++,u()},R=()=>{v.putNotifyNum(),e.page=1,u()},O=t=>{e.curTime=new Date(t).getTime(),e.page=1,y(),u(L)};async function w(){await v.setHomeSimpleLs();const t=await v.homeSimple;T===3?(g.value=t,l.value=t[0]):g.value=[{text:d("base.screen.home.all"),value:0},...t];const s=window.sessionStorage.getItem("imprest");s&&(e.curTime=JSON.parse(s).time,l.value=JSON.parse(s).home,window.sessionStorage.removeItem("imprest")),e.page=1,u(N)}return K(async()=>{w()}),(t,s)=>{const n=r("MonthSelect"),c=r("SvgIcon"),a=r("HkPopover"),b=r("SecondHeader"),D=r("DownRefresh"),M=r("HkNoHome"),P=r("MainContainer");return Q(),F(P,{exitLoading:!0,pageLoading:S(x)},{header:p(()=>[i(J,{haveLiftEle:!1,title:S(d)("base.header.applyList")},null,8,["title"])]),headerScreen:p(()=>[o("div",Y,[i(b,null,{default:p(()=>[o("div",Z,[o("div",ee,[i(n,{isAll:e.curTime===0,value:e.curTime,onOnTimeChange:O},null,8,["isAll","value"])]),o("div",te,[i(a,{options:g.value,value:l.value.value,pannelClass:"imp-minw-168",placement:"bottom-end",offset:[0,18],isSplitBorder:g.value.length>1?[0]:[],isSelectState:!0,onOnChange:s[0]||(s[0]=m=>I(m))},{taggleEle:p(()=>[o("div",ae,[o("span",se,G(l.value.text),1),i(c,{iconClass:"down-select-svg",size:"9",color:"#ffffff"})])]),_:1},8,["options","value","isSplitBorder"])])])]),_:1})])]),default:p(()=>[o("div",oe,[o("div",ne,[i(D,{ref_key:"downRefreshRef",ref:h,dataList:_.value,pagination:e,onOnRefresh:R,onOnLoad:H},{default:p(({data:m})=>[i(W,{data:m,onClick:ce=>C(m)},{examineState:p(()=>[o("img",{class:"msg-state-img",src:S(V)(m.applyState===1?"wait":m.applyState===2?"pass":"reject"),alt:"",srcset:""},null,8,ie)]),_:2},1032,["data","onClick"])]),_:1},8,["dataList","pagination"])])]),i(M)]),_:1},8,["pageLoading"])}}});export{de as default};