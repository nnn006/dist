import{d as z,j as $,u as j,a as J,b as A}from"./index.C__3lhMr.js";import{_ as U}from"./TabHeader.vue_vue_type_style_index_0_lang.BLGXvztv.js";import{l as q,R as E,r as m,b as K,d as F,K as p,L as G,U as Q,V as c,k as n,u as l,N as r,O as W}from"./vue.C2TeXnf4.js";import{_ as X}from"./StatisticTotal.vue_vue_type_style_index_0_lang.CYzONwwI.js";import{_ as Y}from"./NewsItem.vue_vue_type_style_index_0_lang.C3OnuWsN.js";import{a as Z}from"./index.DNWpiEF6.js";import{u as ee}from"./useConfigBaseInfo.CxjUSntV.js";const ae={class:"stic-details-box"},te={class:"screen-box hk-flex hk-jbetween hk-w-full"},se={class:"screen-item"},oe={class:"screen-item"},ne={class:"head-select-value"},ie={class:"stic-details-list"},ye=q({__name:"record",setup(ce){j();const{pushName:b}=z(),{hkMessage:k}=J(),C=E();m(C.query.pageTp);const S=$(),y=m([]),T=m(null),_=m(null),e=K({page:1,pageSize:10,total:0,curTime:new Date().getTime(),allPayMoney:0,currency:""}),{showLoading:h,closeLoading:v}=A(),L=async(a,t)=>{f[t]=a,e.page=1,h(),await d(),v()},d=()=>new Promise(a=>{const t={page:e.page,pageSize:e.pageSize,homeId:S.userInfo.homeId,selectTime:Math.floor(e.curTime/1e3),selectTimeTyp:u.value,identifyId:S.userInfo.identifyId,expenseTypeId:f.type.value};Z(t).then(o=>{if(o.code===0){const i=o.data.list.map(s=>({id:s.id,title:s.title,value:s.payMoney,type:"price",currencyType:s.currency,pic:s.identifyAvatar,applyState:s.status,active:!1,homeName:s.homeName,identifyName:s.identifyName,applicationTime:s.applicationTime,status:s.status}));t.page===1?y.value=i:y.value.push(...i),e.total=o.data.total,e.allPayMoney=o.data.allPayMoney,e.currency=o.data.currency}else k(o.msg)}).finally(()=>{var o,i;(o=_.value)==null||o.taggleRefreshState("isLoading",!1),(i=_.value)==null||i.taggleRefreshState("loading",!1),a(!0)})}),w=async()=>{e.page=1,await d()},{hTabData:R,feeOption:P,screenVal:f,curValue:u,pageLoading:D}=ee({loadList:async()=>{e.page=1,await d()}}),I=a=>{window.sessionStorage.setItem("statisticDetails",JSON.stringify({fee:f.type,time:e.curTime,tabVal:u.value})),b("StfRecordDetails",{id:a.id})},M=async a=>{u.value=a,h(),await w(),v()},x=()=>{e.page++,d()},N=async a=>{e.curTime=new Date(a).getTime(),e.page=1,h(),await d(),v()},O=()=>{T.value.visiblePopover()};return F(()=>{const a=window.sessionStorage.getItem("statisticDetails");if(a){const t=JSON.parse(a);t.time&&(e.curTime=t.time),t.tabVal&&(u.value=t.tabVal)}}),(a,t)=>{const o=p("MonthSelect"),i=p("SvgIcon"),s=p("HkPopover"),V=p("SecondHeader"),B=p("DownRefresh"),H=p("MainContainer");return G(),Q(H,{exitLoading:!0,pageLoading:l(D)},{header:c(()=>[n(U,{curValue:l(u),tabConetnt:l(R),onOnChange:M},null,8,["curValue","tabConetnt"])]),headerScreen:c(()=>[r("div",ae,[n(V,{exitStatistic:!0},{default:c(()=>[r("div",te,[r("div",se,[n(o,{onOnTimeChange:N,value:e.curTime,dateType:l(u)},null,8,["value","dateType"])]),r("div",oe,[n(s,{ref_key:"feePopoverRef",ref:T,trigger:"manual",options:l(P),value:l(f).type.value,pannelClass:"stic-minw-140",placement:"bottom-end",offset:[0,18],isSplitBorder:[0],isSelectState:!0,noDataTips:"暂无费用类型",onOnChange:t[0]||(t[0]=g=>L(g,"type"))},{taggleEle:c(()=>[r("div",{class:"hk-flex hk-items-center",onClick:O},[r("span",ne,W(l(f).type.text),1),n(i,{iconClass:"down-select-svg",size:"9",color:"#ffffff"})])]),_:1},8,["options","value"])])])]),_:1})])]),headerStatistic:c(()=>[n(X,{total:e.total,type:"number",value:e.allPayMoney,currency:e.currency},null,8,["total","value","currency"])]),default:c(()=>[r("div",ie,[n(B,{ref_key:"downRefreshRef",ref:_,dataList:y.value,pagination:e,onOnRefresh:w,onOnLoad:x},{default:c(({data:g})=>[n(Y,{data:g,onClick:le=>I(g)},null,8,["data","onClick"])]),_:1},8,["dataList","pagination"])])]),_:1},8,["pageLoading"])}}});export{ye as default};