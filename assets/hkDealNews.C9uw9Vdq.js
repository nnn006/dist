import{b as k,c as x,P as R,Q as D,g as L}from"./index.Cjri3_sP.js";import{_ as M}from"./NewsItem.vue_vue_type_style_index_0_lang.CsWKk6Rr.js";import{d as P,l as u,m as C,g as b,p as I,o as O,a as A,B as l,Q as m,i,j as B,r as f,x as j}from"./vue.BCHSKM6y.js";const z={class:"news-main-content hk-pt-104"},H={class:"screen-box hk-flex hk-w-full"},V={class:"screen-item"},J={class:"news-main-box"},Q=["src"],F=P({__name:"hkDealNews",setup($){const{t:o}=k(),r=u(null),{hkMessage:h}=L(),{pushName:_}=x(),p=u([]),y=B("endPageLoading"),a=C({page:1,pageSize:10,total:0,curTime:0,allPayMoney:0,currency:""});b(()=>[{text:o("base.screen.news.all"),value:0},{text:o("base.screen.news.pay"),value:1},{text:o("base.screen.news.end"),value:3}]);const w=u({text:o("base.screen.news.all"),value:0}),c=s=>{const g={page:a.page,pageSize:a.pageSize,selectTime:Math.floor(a.curTime/1e3),selectNotifyType:w.value.value};R(g).then(t=>{if(t.code===0){const n=t.data.list.map(e=>({id:e.applicationId,title:e.title,value:e.typ===3?e.useCarTime:e.amount,type:e.typ===1?"price":e.typ===3?"time":"text",currencyType:e.currency,pic:e.identifyAvatar,applyState:e.status,active:!1,homeName:e.homeName,identifyName:e.identifyName,applicationTime:e.applicationTime,status:e.status,endTime:e.endTime,startTime:e.startTime,typ:e.typ}));a.page===1?p.value=n:p.value.push(...n),a.total=t.data.total,a.allPayMoney=t.data.allPayMoney,a.currency=t.data.currency}else h(t.msg)}).finally(()=>{var t,n;(t=r.value)==null||t.taggleRefreshState("isLoading",!1),(n=r.value)==null||n.taggleRefreshState("loading",!1),s&&s()})},v=s=>{window.sessionStorage.setItem("hkDealNews",JSON.stringify({time:a.curTime})),_("PayStfDetails",{id:s.id})},T=()=>{a.page++,c()},S=()=>{a.page=1,c()},N=s=>{a.curTime=new Date(s).getTime(),a.page=1,c()};return I(()=>{const s=window.sessionStorage.getItem("hkDealNews");s&&(a.curTime=JSON.parse(s).time,window.sessionStorage.removeItem("hkDealNews")),c(y)}),(s,g)=>{const t=f("MonthSelect"),n=f("SecondHeader"),e=f("DownRefresh");return O(),A("div",z,[l(n,null,{default:m(()=>[i("div",H,[i("div",V,[l(t,{isAll:a.curTime===0,value:a.curTime,onOnTimeChange:N},null,8,["isAll","value"])])])]),_:1}),i("div",J,[l(e,{ref_key:"downRefreshRef",ref:r,dataList:p.value,pagination:a,onOnRefresh:S,onOnLoad:T},{default:m(({data:d})=>[l(M,{data:d,onClick:E=>v(d)},{examineState:m(()=>[i("img",{class:"msg-state-img",src:j(D)(d.status===3?"stfReject":"stfWaitUpd"),alt:"",srcset:""},null,8,Q)]),_:2},1032,["data","onClick"])]),_:1},8,["dataList","pagination"])])])}}});export{F as default};