import{o as f,L as h,z as m,n as d,A as p,F as v}from"./index.C__3lhMr.js";import{l as k,a as u,L as i,M as n,N as t,k as w,V as _,u as l,O as s,z as C,S as o,P as b}from"./vue.C2TeXnf4.js";const g={class:"news-item-box ripple-effect hk-flex"},N={class:"news-item-l"},B=["src"],D={class:"news-item-r"},M={class:"hk-flex hk-jbetween news-item-rt"},H={key:0,class:"news-item-val-box hk-flex"},T={key:0,style:{color:"#9C261C"}},F={key:1},S={key:0,class:"news-item-currency"},I={class:"hk-flex hk-jbetween hk-items-center news-item-rmbox"},V={key:0,class:"news-item-rm"},j={class:"news-item-rb"},z={key:0},P={key:1},O=k({__name:"NewsItem",props:{exitBaseInfo:{type:Boolean,default:!0},valColorClass:{default:()=>[]},data:{default:()=>({})}},setup(c){const a=c,r=u(()=>{let e=a.data.value+"";return a.data.type==="number"?e=p(a.data.value):a.data.type==="price"?e=p(a.data.value):a.data.type==="time"&&(e=v(a.data.value)),e.length>16?e.slice(0,15)+"...":e}),y=u(()=>a.data.typ===1?"支出人":a.data.typ===2||a.data.typ===3?"出车人":a.data.typ===4?"申请人":a.data.typ===5?"划拨人":a.data.typ===6?"接收人":a.data.typ===7?"收回人":a.data.typ===8?"被收回人":a.data.typ===9?"发放人":a.data.typ===12||a.data.typ===13?"职位":"姓名");return(e,L)=>(i(),n("div",g,[t("div",N,[w(l(h),{dot:"",offset:["-3px","4px"],color:e.data.active?"#FF4938":"transparent"},{default:_(()=>[t("img",{class:"news-item-img",src:l(f)+e.data.pic,alt:"",srcset:""},null,8,B)]),_:1},8,["color"])]),t("div",D,[t("div",M,[t("div",null,s(e.data.title),1),e.data.typ!==10&&e.data.typ!==2&&e.data.typ!==12&&e.data.typ!==13?(i(),n("div",H,[t("div",{class:C(["news-item-value hk-fw-600",e.valColorClass])},[e.data.status===6?(i(),n("s",T,s(r.value),1)):(i(),n("span",F,s(r.value),1))],2),e.data.type==="price"?(i(),n("div",S,s(e.data.currencyType),1)):o("",!0)])):o("",!0)]),t("div",I,[t("div",null,[e.exitBaseInfo?(i(),n("div",V,[t("span",null,s(y.value)+": "+s(l(m)(e.data.typ===12||e.data.typ===13?e.data.duties:e.data.identifyName,6)),1),t("span",null,"所属家: "+s(l(m)(e.data.homeName,6)),1)])):o("",!0),t("div",j,[e.data.typ===3?(i(),n("span",z,s(l(d)(e.data.startTime*1e3).format("MM-DD HH:mm"))+" 至 "+s(l(d)(e.data.endTime*1e3).format("MM-DD HH:mm")),1)):(i(),n("span",P,s(l(d)(e.data.applicationTime*1e3).format("MM-DD HH:mm")),1))])]),t("div",null,[b(e.$slots,"examineState")])])])]))}});export{O as _};