import{a as q,c as G,y as K,a9 as X,F as N,g as Z}from"./index.Cjri3_sP.js";import{_ as ee}from"./NewsItem.vue_vue_type_style_index_0_lang.CsWKk6Rr.js";import{d as te,b as ae}from"./index.XGvY1KZZ.js";import{d as se,l as h,m as R,p as oe,o as r,e as ne,Q as L,x as _,r as M,i as n,B as T,S as m,a as d,R as w,H as D,n as P,f as ie}from"./vue.BCHSKM6y.js";const le={class:"work-overtime-box hk-pt-52"},re={class:"wot-header"},ce={class:"wot-header-px12"},de={class:"wot-time-label"},ue={class:"wot-time-static-box"},me={class:"wot-time-static hk-flex"},fe={class:"value"},he=n("div",{class:"label"},"工作时长",-1),ve={class:"wot-time-static hk-flex"},ye={class:"value"},pe=n("div",{class:"label"},"加班时长",-1),ge={class:"wot-calendar-box hk-flex"},_e=["onClick"],Te=n("div",{class:"wot-list-header hk-flex hk-items-center"},[n("div",{class:"wot-ls-tag"}),n("div",null,"出车")],-1),we=n("div",null,null,-1),De={key:0,class:"wot-list-empty-box"},Ie=se({__name:"index",setup(Ce){const{hkMessage:b}=Z(),{pushName:Y}=G(),B=["日","一","二","三","四","五","六"],v=h([]),C=h(-1),y=h(-1),f=h([]),k=h(null),u=R({page:1,pageSize:10,total:0}),o=R({homeId:0,identifyInfo:{text:"",value:0},selectTime:0,selectTimeTyp:2,overUseCarTime:0,useCarTime:0,preDays:[],nextDays:[]}),p=()=>({year:new Date(o.selectTime).getFullYear(),month:new Date(o.selectTime).getMonth()}),F=()=>{const e=p().year;return e%400===0||e%100!==0&&e%4===0},g=(e,t)=>{let c=[31,null,31,30,31,30,31,31,30,31,30,31][t]||(F()?29:28);return Array.from(new Array(c),(l,s)=>s+1)},O=()=>new Date(o.selectTime).getDay(),U=()=>{const{month:e,year:t}=p();return e===0?g(t-1,11):g(t,e-1)},V=()=>{const{month:e,year:t}=p();return e===11?g(t+1,0):g(t,e+1)},{pageLoading:z,endPageLoading:$}=q({activeAction:S}),W=()=>{const e=O();o.preDays=e?U().slice(-1*e):[];const t=V(),i=42-v.value.length-e;o.nextDays=i?t.slice(0,i):[]},H=()=>{const{month:e,year:t}=p(),i=new Date().getFullYear(),c=new Date().getMonth();t===i&&e===c&&(y.value=new Date().getDate()-1),I(y.value===-1?0:y.value)},I=e=>{C.value=e},j=e=>{I(e),A()};function S(){const e=window.sessionStorage.getItem("statisticDetails");if(e){const t=JSON.parse(e);if(t.time){const i=new Date(t.time);i.setDate(1),o.selectTime=i.getTime()}t.tabVal&&(o.selectTimeTyp=t.tabVal),t.staff&&(o.identifyInfo=t.staff),t.home&&(o.homeId=t.home.value)}H(),Q()}const E=()=>{u.page++,x()},A=()=>{u.page=1,x()},x=()=>new Promise(e=>{var c;const t=(c=v.value[C.value])==null?void 0:c.date,i={page:u.page,pageSize:u.pageSize,homeId:o.homeId,selectTime:t,selectTimeTyp:3,identifyId:o.identifyInfo.value};ae(i).then(l=>{if(l.code===0){const s=l.data.list.map(a=>({id:a.id,title:a.title,value:a.useCarTime,type:"time",currencyType:a.currency,pic:a.identifyAvatar,applyState:a.status,active:!1,homeName:a.homeName,identifyName:a.identifyName,applicationTime:a.applicationTime,status:a.status,useCarTime:a.useCarTime,endTime:a.endTime,startTime:a.startTime,typ:a.typ}));u.page===1?f.value=s:f.value.push(...s),u.total=l.data.total}else b(l.msg)}).finally(()=>{var l,s;(l=k.value)==null||l.taggleRefreshState("isLoading",!1),(s=k.value)==null||s.taggleRefreshState("loading",!1),e(!0)})}),J=e=>{Y("PayDetails",{id:e.id})},Q=()=>{te({homeId:o.homeId,identifyId:o.identifyInfo.value,selectTime:Math.floor(o.selectTime/1e3),selectTimeTyp:o.selectTimeTyp}).then(e=>{e.code===0?(v.value=e.data.list.map(t=>({...t,day:new Date(t.date*1e3).getDate()})),o.overUseCarTime=e.data.overUseCarTime,o.useCarTime=e.data.useCarTime,W(),x()):b(e.msg)}).finally(()=>{$()})};return oe(()=>{S()}),(e,t)=>{const i=M("DownRefresh"),c=M("hk-empty"),l=M("MainContainer");return r(),ne(l,{exitLoading:!0,pageLoading:_(z)},{default:L(()=>[n("div",le,[T(K,{title:"时长统计"}),n("div",re,[n("div",ce,[n("div",de,m(_(X)(o.selectTime,"YYYY年MM月")),1),n("div",ue,[n("div",me,[n("div",fe,m(_(N)(o.useCarTime)),1),he]),n("div",ve,[n("div",ye,m(_(N)(o.overUseCarTime)),1),pe])])]),n("div",ge,[(r(),d(D,null,w(B,(s,a)=>n("div",{class:"wot-calendar-item",key:a},m(s),1)),64)),(r(!0),d(D,null,w(o.preDays,(s,a)=>(r(),d("div",{class:"wot-calendar-item after-before-month",key:a},m(s),1))),128)),(r(!0),d(D,null,w(v.value,(s,a)=>(r(),d("div",{class:"wot-calendar-item",key:s.date,onClick:ke=>j(a)},[n("div",{class:P(["wot-calendar-act",{active:a===C.value,"cur-day":y.value===a,"user-car-tag":s.useCarTime,"work-overtime-tag":s.overTime}])},m(s.day),3)],8,_e))),128)),(r(!0),d(D,null,w(o.nextDays,(s,a)=>(r(),d("div",{class:"wot-calendar-item after-before-month",key:a},m(s),1))),128))])]),Te,n("div",{class:P(["wot-list",{"wot-list-empty":f.value.values.length===0}])},[T(i,{ref_key:"downRefreshRef",ref:k,dataList:f.value,pagination:u,onOnRefresh:A,onOnLoad:E},{default:L(({data:s})=>[T(ee,{data:s,valColorClass:s.typ===7||s.typ===6?["val-color-yellow"]:s.typ===5?["val-color-blue"]:[],onClick:a=>J(s)},null,8,["data","valColorClass","onClick"])]),empty:L(()=>[we]),_:1},8,["dataList","pagination"])],2),f.value.length===0?(r(),d("div",De,[T(c)])):ie("",!0)])]),_:1},8,["pageLoading"])}}});export{Ie as default};
