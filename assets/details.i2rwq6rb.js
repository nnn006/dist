import{y as N,b as D,R as k,S as j,j as I,g as B}from"./index.Cjri3_sP.js";import{d as w,l as f,m as R,g as q,p as A,o as s,a as T,B as u,i as o,e as _,Q as C,f as d,x as c,S as p,H,_ as S,j as V}from"./vue.BCHSKM6y.js";import{_ as i}from"./BaseInfoItem.vue_vue_type_style_index_0_lang.DMYgpoJW.js";import"./right-arrow-icon.CaFxgYzl.js";const F={class:"imprest-details-box container-setPx"},L={style:{"font-weight":"500"}},M={key:2,class:"imprest-info-item"},$={class:"imprest-info-title"},E={class:"imprest-info-desc"},O=w({__name:"details",setup(Q){const m=S(),{hkMessage:b}=B(),{id:v}=m.query,t=f(0),n=f(0),{t:x}=D(),P=V("endPageLoading"),e=R({name:{type:"text",value:""},price:{type:"number",value:0},homeName:{type:"text",value:""},job:{type:"text",value:""},time:{type:"dayjs",value:0},audRes:{type:"text",value:""},reviewer:{type:"text",value:""},dealPeople:{type:"text",value:""},desc:"",currency:"",status:0}),l=q(()=>t.value===1?{name:"支出人",title:"",priceTxt:"金额",timeTxt:"时间"}:t.value===2||t.value===3?{name:"出车人",title:"开始出车",priceTxt:"",dealPeople:"委派人",timeTxt:"开始时间"}:t.value===4?{name:"申请人",title:"",priceTxt:"金额",dealPeople:"",timeTxt:"时间"}:t.value===5?{name:"划拨人",title:"划拨备用金",priceTxt:"划拨金额",dealPeople:"接收人",timeTxt:"时间"}:t.value===6?{name:"接收人",title:"收到备用金",priceTxt:"金额",dealPeople:"发放人",timeTxt:"时间"}:t.value===7?{name:"收回人",title:"收回备用金",priceTxt:"金额",dealPeople:"被收回人",timeTxt:"时间"}:t.value===8?{name:"被收回人",title:"备用金被收回",priceTxt:"金额",dealPeople:"收回人",timeTxt:"时间"}:t.value===9?{name:"发放人",title:"发放备用金",priceTxt:"金额",dealPeople:"接收人",timeTxt:"时间"}:t.value===10?{name:"姓名",title:"备用金用磬",priceTxt:"剩余金额",dealPeople:"",timeTxt:"时间"}:{name:"姓名",title:"",priceTxt:"金额",dealPeople:"",timeTxt:"时间"}),g=r=>{const y=n.value?k:j,h=n.value?{applicationId:v}:{notifyId:v};y(h).then(a=>{a.code===0?(e.name={type:"text",value:a.data.identifyName},e.price={type:"number",value:a.data.amount},e.homeName={type:"text",value:a.data.homeName},e.job={type:"text",value:a.data.identifyName},e.time={type:"dayjs",value:t.value===2||t.value===3?a.data.startTime:a.data.applicationTime},e.audRes={type:"text",value:a.data.status===1?"待审核":a.data.status===2?"通过":"拒绝"},e.reviewer={type:"text",value:a.data.auditIdentifyName},e.dealPeople={type:"text",value:n.value===1?a.data.auditIdentifyName:a.data.client},e.desc=a.data.remark,e.currency=a.data.currency,e.status=a.data.status):b(a.msg)}).finally(()=>{r&&r()})};return A(()=>{n.value=Number(m.query.pgTp||0),g(P),t.value=Number(m.query.tp)}),(r,y)=>(s(),T(H,null,[u(N,{title:l.value.title},null,8,["title"]),o("div",F,[u(i,{label:l.value.name,valData:e.name},null,8,["label","valData"]),t.value!==2&&t.value!==3?(s(),_(i,{key:0,label:l.value.priceTxt},{default:C(()=>[o("div",L,p(c(I)(e.price.value))+" "+p(e.currency),1)]),_:1},8,["label"])):d("",!0),u(i,{label:c(x)("base.belongHomeTxt"),valData:e.homeName},null,8,["label","valData"]),t.value!==10?(s(),_(i,{key:1,label:l.value.dealPeople,valData:e.dealPeople},null,8,["label","valData"])):d("",!0),u(i,{label:l.value.timeTxt,valData:e.time},null,8,["label","valData"]),[5,6,7,8,9].includes(t.value)&&e.desc?(s(),T("div",M,[o("div",$,p(c(x)("base.descTxt")),1),o("div",E,p(e.desc),1)])):d("",!0)])],64))}});export{O as default};
