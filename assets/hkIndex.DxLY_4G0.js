import{h as se,u as oe,a as ne,b as ie,c as le,_ as ce,i as re,j as de,d as O,B as me,f as ue,k as he,l as pe,m as fe,n as ve,e as Ie}from"./index.Cjri3_sP.js";import{d as _e,l as r,m as ye,p as ke,o as m,e as ge,Q as w,x as c,Z as we,r as I,B as l,i as e,S as d,L,n as Se,a as h,R as j,H as B,f as M}from"./vue.BCHSKM6y.js";import{_ as be}from"./HDetailsOptions.vue_vue_type_style_index_0_lang.CR_H_kKE.js";import{A as De}from"./index.YYOoEeNT.js";const xe={class:"hk-home-box hk-pt-noScreen"},Te={class:"hkh-btn-box"},Ne={class:"hkh-imp-apply"},Ae={class:"hkh-imp-wite-news hkh-imp-wn-bd hk-flex hk-jbetween hk-items-center"},Ce={class:"hkh-imp-wn-l hk-flex hk-items-center"},He=e("div",{class:"hkh-imp-wn-label"},"备用金: ",-1),Pe={class:"hk-fw-600"},Oe={class:"hkh-imp-wn-r"},Le={class:"hkh-imp-wite-news hk-flex hk-jbetween hk-items-center"},je=e("div",{class:"hkh-imp-wn-l hk-flex hk-items-center"},[e("div",{class:"hkh-imp-wn-label"},"待处理消息: ")],-1),Be={class:"hkh-imp-wn-r"},Me={class:"home-pay-class-box"},$e={class:"hdetails-card-header hdetails-card-p hk-flex hk-jbetween hk-items-center"},Re={class:"hdetails-card-tit"},qe=e("span",{class:"hdetails-card-more"},null,-1),Ue={class:"home-pay-class-content hk-flex"},Ve={key:0,class:"data-empty-fbox"},ze={class:"home-staff-box"},Je=e("div",{class:"hdetails-card-header hdetails-card-p hk-flex hk-jbetween hk-items-center"},[e("span",{class:"hdetails-card-tit"},"员工"),e("span",{class:"hdetails-card-more"})],-1),Qe={class:"home-staff-content"},Fe=["onClick"],Ee={class:"home-staff-t hk-flex hk-jbetween"},Ze={class:"home-staff-tl"},Ge=["src"],Ke={class:"home-staff-name"},We={class:"home-staff-tr"},Xe={class:"home-staff-b hk-flex hk-jbetween"},Ye={class:"home-staff-bl"},et={class:"hdetails-member-item hk-flex hk-items-center"},tt={class:"hk-fw-600"},at={class:"home-staff-br"},st={key:0,class:"data-empty-fbox"},rt=_e({name:"HkIndex",__name:"hkIndex",setup(ot){const{t:$}=ie(),{auth:x}=se(),{pushName:_}=le(),y=r(0),R=we(),o=oe(),p=r({}),T=r(0),{pageLoading:q,endPageLoading:U}=ne({activeAction:H}),N=r({amount:0}),n=r(new Date().getTime()),S=r([]),f=ye({list:[],currency:""});let v=null;const k=r(!1),V=r([{name:x===3?"划拨备用金":"发放备用金",value:5},{name:"收回备用金",value:7},{name:"员工备用金详情",value:"StatisticDetails"}]),A=a=>new Promise(s=>{pe({homeId:o.userInfo.homeId,selectTime:Math.floor(n.value/1e3)}).then(t=>{t.code===0&&(p.value={title:t.data.nickname,currency:t.data.currency,pic:t.data.avatar,id:t.data.homeId,statistic:[{label:"homeItem.payMoney",value:t.data.payMoney,type:"price",haveInfoArrow:!0,routeName:"StatisticDetails",otherQuery:{homeId:o.userInfo.homeId,qtime:n.value,pageTp:1,fee:0},setSession:{time:n.value}},{label:"homeItem.carTime",value:t.data.useCarTime,type:"time",haveInfoArrow:!0,routeName:"StatisticDetails",otherQuery:{homeId:o.userInfo.homeId,qtime:n.value,pageTp:3,fee:0},setSession:{time:n.value}},{label:"homeItem.preImprest",value:t.data.amount,type:"number",haveInfoArrow:!0,routeName:"StatisticDetails",otherQuery:{homeId:o.userInfo.homeId,qtime:n.value,pageTp:2,fee:0},setSession:{time:n.value}},{label:"homeItem.staffNum",value:t.data.employeesNum,type:"people",haveInfoArrow:!0,routeName:"StaffManage",otherQuery:{homeId:o.userInfo.homeId}}]})}).finally(()=>{s(!0)})}),z=a=>{n.value=new Date(a).getTime(),A()},u=(a,s)=>{const t={name:a};s&&(t.query=s),R.push(t)},J=()=>new Promise(a=>{fe({homeId:o.userInfo.homeId,selectTime:Math.floor(n.value/1e3),selectTimeTyp:2}).then(s=>{s.code===0&&(f.currency=s.data.currency,f.list=s.data.list.map(t=>({type:"number",label:t.expenseType,value:t.payMoney,expenseTypeId:t.expenseTypeId})))}).finally(()=>{a(!0)})}),Q=()=>new Promise(a=>{ve({page:1,pageSize:999,homeId:o.userInfo.homeId,selectTime:Math.floor(n.value/1e3)}).then(s=>{s.code===0&&(S.value=s.data.list.map(t=>({picture:Ie+t.avatar,name:t.nickname,id:t.identifyId,amount:t.amount,currency:t.currency,jop:{label:"homeItem.jop",value:t.duties,type:"text"},residueImprest:{value:"",type:"price",label:"homeItem.residueImprest"},doTask:{value:t.useCarTime,type:"time",label:"homeItem.carTime"}})))}).finally(()=>{a(!0)})}),F=a=>{window.sessionStorage.setItem("toStatic",JSON.stringify({time:n.value})),u("StatisticDetails",{homeId:o.userInfo.homeId,qtime:n.value,pageTp:1,fee:a.expenseTypeId})},E=()=>{he({homeId:o.userInfo.homeId}).then(a=>{a.code===0&&(T.value=a.data.untreatedNum)})},Z=()=>{_("DataReview",{homeId:o.userInfo.homeId})},G=a=>{},K=()=>{_("Pay",{homeId:o.userInfo.homeId,currency:p.value.currency})},W=a=>{window.sessionStorage.setItem("toStatic",JSON.stringify({time:n.value})),u("StatisticDetails",{homeId:o.userInfo.homeId,pageTp:a,qtime:n.value,fee:0})},X=a=>{v=a,k.value=!0},C=()=>{k.value=!1,v=null},Y=a=>{a.value==="StatisticDetails"?(window.sessionStorage.setItem("toStatic",JSON.stringify({time:n.value})),u("StatisticDetails",{homeId:o.userInfo.homeId,pageTp:2,fee:0,qtime:n.value,stfId:v.id})):u("ImpOperation",{homeId:o.userInfo.homeId,id:v.id,currency:v.currency,doType:a.value}),C()},ee=()=>{Promise.all([A(),J(),Q()]).then(()=>{U()})};async function H(){const a=window.sessionStorage.getItem("toStatic");a&&(n.value=JSON.parse(a).time,window.sessionStorage.removeItem("toStatic")),ee(),E(),o.setUserIdent(),await o.putSurplusRes(),await o.putNotifyNum(),y.value=o.untreatedSelfNum,N.value=o.surplusRes}return ke(async()=>{H()}),(a,s)=>{const t=I("SecondHeader"),te=I("SvgIcon"),g=I("DataInfoItem"),P=I("hk-empty"),ae=I("MainContainer");return m(),ge(ae,{exitLoading:!0,pageLoading:c(q)},{default:w(()=>[l(ce,{onOnSelectTime:z,timeValue:n.value},null,8,["timeValue"]),l(t,{noScreen:!0}),e("div",xe,[l(re,{data:p.value,haveInfoArrow:!1,onClick:s[0]||(s[0]=i=>G(p.value))},null,8,["data"]),e("div",Te,[l(be,{onOnFirBtnHandle:s[1]||(s[1]=()=>K()),onOnSecBtnHandle:Z,contentNumber:T.value},null,8,["contentNumber"])]),e("div",Ne,[e("div",Ae,[e("div",Ce,[He,e("div",Pe,d(c(de)(N.value.amount))+" "+d(p.value.currency),1)]),e("div",Oe,[l(c(O),{plain:"",class:"hkh-imp-wn-btn active",size:"mini",onClick:s[2]||(s[2]=i=>c(_)("ImpApply"))},{default:w(()=>[L(d(c($)("base.applyTxt"))+" ",1),l(te,{class:"add-apply-icon",iconClass:"add-small-icon",color:"#25D4D0"})]),_:1})])]),e("div",Le,[je,e("div",Be,[l(c(me),{class:"hkh-imp-wn-badge",content:y.value,"show-zero":!1},null,8,["content"]),l(c(O),{plain:"",class:Se(["hkh-imp-wn-btn",{active:y.value>0}]),size:"mini",onClick:s[3]||(s[3]=i=>c(_)("HkDealNews"))},{default:w(()=>[L(d(y.value>0?"去处理":"暂无消息"),1)]),_:1},8,["class"])])])]),e("div",Me,[e("div",$e,[e("span",Re,"支出分类("+d(f.currency)+")",1),qe]),e("div",Ue,[(m(!0),h(B,null,j(f.list,(i,b)=>(m(),h("div",{class:"pay-class-item",key:b},[l(g,{valData:i,haveArrow:!0,onOnHandle:F},null,8,["valData"])]))),128)),f.list.length===0?(m(),h("div",Ve,[l(P)])):M("",!0)])]),e("div",ze,[Je,e("div",Qe,[(m(!0),h(B,null,j(S.value,(i,b)=>(m(),h("div",{class:"home-staff-item",key:b,onClick:D=>u("StaffDetails",{id:i.id,homeId:c(o).userInfo.homeId})},[e("div",Ee,[e("div",Ze,[e("img",{class:"home-staff-img",src:i.picture,alt:""},null,8,Ge),e("div",Ke,d(c(ue)(i.name,6)),1)]),e("div",We,[l(g,{valData:i.jop,haveArrow:!0,onOnHandle:D=>u("StaffDetails",{id:i.id,homeId:c(o).userInfo.homeId})},null,8,["valData","onOnHandle"])])]),e("div",Xe,[e("div",Ye,[l(g,{haveArrow:!0,valData:i.residueImprest,onOnHandle:D=>X({id:i.id,currency:i.currency})},{default:w(()=>[e("div",et,[e("span",tt,d(i.amount),1),e("span",null,d(i.currency),1)])]),_:2},1032,["valData","onOnHandle"])]),e("div",at,[l(g,{valData:i.doTask,haveArrow:!0,onOnHandle:s[4]||(s[4]=D=>W(3))},null,8,["valData"])])])],8,Fe))),128)),S.value.length===0?(m(),h("div",st,[l(P)])):M("",!0)])])]),l(c(De),{class:"hk-action-sheet",show:k.value,"onUpdate:show":s[5]||(s[5]=i=>k.value=i),actions:V.value,"cancel-text":"取消","close-on-click-action":"",onCancel:C,onSelect:Y},null,8,["show","actions"])]),_:1},8,["pageLoading"])}}});export{rt as default};
