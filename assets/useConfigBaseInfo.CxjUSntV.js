import{u as K,m as Q,s as W,j as X,q as Y,af as Z,ag as _}from"./index.C__3lhMr.js";import{R as $,r as v,a as O,b as ee,e as te,d as ae,o as se,f as le}from"./vue.C2TeXnf4.js";const ne=V=>{var N,M,B,U;const{t:n}=K(),{isStaff:F}=Q(),u=$(),{getCostType:G}=W();let b=(N=u.query)==null?void 0:N.homeId,S=(M=u.query)==null?void 0:M.fee,m=(B=u.query)==null?void 0:B.stfId,g=(U=u.query)==null?void 0:U.pageTp;const w=v(!0),y=v(!0),H=()=>{y.value=!1},q=X();Y();const A=v(2),j=O(()=>[{title:n("base.tabs.monthBill"),value:2},{title:n("base.tabs.yearBill"),value:1}]),z=O(()=>[{title:n("base.tabs.monthCar"),value:2},{title:n("base.tabs.yearCar"),value:1}]),E=O(()=>[{title:"月预支",value:2},{title:"年预支",value:1}]),r=v([{text:n("base.screen.allStaff"),value:0}]),c=v([{text:"人员",value:0}]),p=v([{text:n("base.screen.allType"),value:0}]),h=v([]),e=ee({home:{text:n("base.screen.home.all"),value:0},staff:{text:n("base.screen.allStaff"),value:0},type:{text:n("base.screen.allType"),value:0},member:{text:"人员",value:0}}),P=()=>new Promise((f,s)=>{Z({homeId:e.home.value}).then(o=>{if(o.code===0){const i=o.data.list.map(l=>({text:l.nickname,value:l.identifyId}));c.value=[c.value[0],...i],f(!0)}else s()}).catch(o=>{s()})}),C=()=>new Promise((f,s)=>{const o={homeId:e.home.value};g==="3"&&(o.identifyType=4),_(o).then(i=>{if(i.code===0){const l=i.data.list.map(t=>({text:t.nickname,value:t.identifyId}));r.value=[r.value[0],...l],f(!0)}else s()}).catch(i=>{s()})}),D=async f=>{const s=await G(f);p.value=[{text:n("base.screen.allType"),value:0},...s,{text:"已删除类型",value:-1},{text:"作废单",value:-2}]},J=async()=>{var o,i;await q.setHomeSimpleLs();const f=q.homeSimple;h.value=f;const s=window.sessionStorage.getItem("statisticDetails");if(s&&JSON.parse(s),s){const l=JSON.parse(s);if(l.home)e.home=l.home;else{const t=h.value.filter(a=>a.value===+b);t.length?e.home=t[0]:e.home=h.value[0]}if(await D((o=e.home)==null?void 0:o.value),l.fee)e.type=l.fee;else{const t=p.value.filter(a=>a.value===+S);t.length?e.type=t[0]:e.type=p.value[0]}}else{const l=h.value.filter(a=>a.value===+b);l.length?e.home=l[0]:e.home=h.value[0],await D((i=e.home)==null?void 0:i.value);const t=p.value.filter(a=>a.value===+S);t.length?e.type=t[0]:e.type=p.value[0]}if(g&&!F.value)try{if(await(g==="1"?P:C)(),g==="1")if(s){const t=JSON.parse(s);if(t.staff)e.member=t.staff;else{const a=c.value.filter(d=>d.value===+m);a.length?e.member=a[0]:e.member=c.value[0]}}else{const t=c.value.filter(a=>a.value===+m);t.length?e.member=t[0]:e.member=c.value[0]}else if(s){const t=JSON.parse(s);if(t.staff)e.staff=t.staff;else{const a=r.value.filter(d=>d.value===+m);a.length?e.staff=a[0]:e.staff=r.value[0]}}else{const t=r.value.filter(a=>a.value===+m);t.length?e.staff=t[0]:e.staff=r.value[0]}}catch{}window.sessionStorage.removeItem("statisticDetails"),V.loadList&&(await V.loadList(),H())};return te(()=>{var f,s,o,i,l,t,a,d;if(!w.value){console.log("----onActivated----",A.value);const k=window.sessionStorage.getItem("statisticDetails"),x=(f=u.query)==null?void 0:f.homeId,L=(s=u.query)==null?void 0:s.fee,T=(o=u.query)==null?void 0:o.stfId,R=(i=u.query)==null?void 0:i.pageTp;if((x!==b||L!==S||T!==m)&&(y.value=!0),k||(x!==((l=e.home)==null?void 0:l.value)+""||L!==((t=e.type)==null?void 0:t.value)+""||T!==((a=e.staff)==null?void 0:a.value)+""&&((d=e.staff)==null?void 0:d.value)!==0)&&(y.value=!0),+R==3){const I=JSON.parse(k);I!=null&&I.staff&&e.staff.value!==I.staff.value&&(y.value=!0)}b=x,S=L,m=T,g=R,J()}}),ae(async()=>{console.log("----onMounted----"),J()}),se(()=>{console.log("----onUnmounted----"),w.value=!1}),le(()=>{console.log("----onDeactivated----"),w.value=!1}),{hTabData:j,carTabData:z,imprestTabData:E,homeSelectData:h,feeOption:p,screenVal:e,curValue:A,staffOption:r,memberOption:c,pageLoading:y,getMemberList:P,getStaffList:C,getFeeOption:D}};export{ne as u};