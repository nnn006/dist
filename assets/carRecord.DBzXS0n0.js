import{d as V,j as P,F as U,u as B,b as $,a as j}from"./index.C__3lhMr.js";import{_ as z}from"./TabHeader.vue_vue_type_style_index_0_lang.BLGXvztv.js";import{l as H,R as J,r as p,b as W,d as A,K as f,L as F,U as q,V as c,k as l,u as d,N as r,a5 as K,D as C,O as E}from"./vue.C2TeXnf4.js";import{_ as G}from"./StatisticTotal.vue_vue_type_style_index_0_lang.CYzONwwI.js";import{_ as Q}from"./NewsItem.vue_vue_type_style_index_0_lang.C3OnuWsN.js";import{s as X}from"./index.DNWpiEF6.js";import{u as Y}from"./useConfigBaseInfo.CxjUSntV.js";const Z={class:"stic-details-box"},ee={class:"screen-box hk-flex hk-jbetween hk-w-full"},ae={class:"screen-item"},te={class:"stic-details-box"},se={class:"statistic-total-desc"},oe={class:"stic-details-list sticp-details-list"},fe=H({__name:"carRecord",setup(ne){B();const{hkMessage:I}=j(),{pushName:h}=V(),L=J();p(L.query.pageTp);const u=P(),g=p([]),_=p(null),y=p(null),e=W({page:1,pageSize:10,total:0,curTime:new Date().getTime(),allPayMoney:0,currency:""}),{showLoading:v,closeLoading:T}=$(),m=()=>new Promise(s=>{const n={page:e.page,pageSize:e.pageSize,homeId:u.userInfo.homeId,selectTime:Math.floor(e.curTime/1e3),selectTimeTyp:o.value,identifyId:u.userInfo.identifyId,expenseTypeId:0};X(n).then(t=>{if(t.code===0){const i=t.data.list.map(a=>({id:a.id,title:a.title,value:a.useCarTime,type:"time",currencyType:a.currency,pic:a.identifyAvatar,applyState:a.status,active:!1,homeName:a.homeName,identifyName:a.identifyName,applicationTime:a.applicationTime,endTime:a.endTime,startTime:a.startTime,typ:a.typ,status:a.status}));n.page===1?g.value=i:g.value.push(...i),e.total=t.data.total,e.allPayMoney=t.data.allUseCarTime,e.currency=t.data.currency,y.value=t.data.overtimeUseCarTime}else I(t.msg)}).finally(()=>{var t,i;(t=_.value)==null||t.taggleRefreshState("isLoading",!1),(i=_.value)==null||i.taggleRefreshState("loading",!1),s(!0)})}),S=async()=>{e.page=1,await m()},{carTabData:b,curValue:o,pageLoading:k}=Y({loadList:async()=>{e.page=1,await m()}}),D=()=>{window.sessionStorage.setItem("statisticDetails",JSON.stringify({staff:{text:"",value:u.userInfo.identifyId},home:{text:"",value:u.userInfo.homeId},time:e.curTime,tabVal:o.value})),h("WorkOvertime")},x=s=>{window.sessionStorage.setItem("statisticDetails",JSON.stringify({time:e.curTime,tabVal:o.value})),h("UseCarDeatils",{id:s.id})},R=async s=>{o.value=s,v(),await S(),T()},N=()=>{e.page++,m()},O=async s=>{e.curTime=new Date(s).getTime(),e.page=1,v(),await m(),T()};return A(()=>{const s=window.sessionStorage.getItem("statisticDetails");if(s){const n=JSON.parse(s);n.time&&(e.curTime=n.time),n.tabVal&&(o.value=n.tabVal)}}),(s,n)=>{const t=f("MonthSelect"),i=f("SecondHeader"),a=f("DownRefresh"),M=f("MainContainer");return F(),q(M,{exitLoading:!0,pageLoading:d(k)},{header:c(()=>[l(z,{curValue:d(o),tabConetnt:d(b),onOnChange:R},null,8,["curValue","tabConetnt"])]),headerScreen:c(()=>[r("div",Z,[l(i,{exitStatistic:!0},{default:c(()=>[r("div",ee,[r("div",ae,[l(t,{onOnTimeChange:O,value:e.curTime,dateType:d(o)},null,8,["value","dateType"])])])]),_:1})])]),headerStatistic:c(()=>[r("div",te,[l(G,{total:e.total,type:"time",value:e.allPayMoney,currency:e.currency},K({_:2},[y.value&&d(o)===2?{name:"desc",fn:c(()=>[r("span",se,[C("(加班："),r("span",{onClick:D},E(d(U)(y.value)),1),C(" >)")])]),key:"0"}:void 0]),1032,["total","value","currency"])])]),default:c(()=>[r("div",oe,[l(a,{ref_key:"downRefreshRef",ref:_,dataList:g.value,pagination:e,onOnRefresh:S,onOnLoad:N},{default:c(({data:w})=>[l(Q,{data:w,onClick:ie=>x(w)},null,8,["data","onClick"])]),_:1},8,["dataList","pagination"])])]),_:1},8,["pageLoading"])}}});export{fe as default};