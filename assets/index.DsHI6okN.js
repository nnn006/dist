import{l as S,J as y,a as f,K as p,L as r,U as C,V as u,k as c,u as s,N as t,M as i,Q as x,F as m,O as d,S as B}from"./vue.C2TeXnf4.js";import{m as F,j as N,f as P,u as V,a6 as A}from"./index.C__3lhMr.js";const L={class:"setup-box hk-pt-noScreen"},w=["onClick"],E={class:"setup-item-label"},H={class:"stp-mt-30"},U={class:"setup-version"},j={class:"setup-version setup-version-mt0"},q=t("div",{class:"setup-btm-auxbox"},null,-1),J=S({__name:"index",setup(D){const{t:e}=V(),_="11.02",b="http://guanjia.hey-dev.net:8001/api",l=y(),{auth:h}=F(),a=N(),I=f(()=>a.homeSimple),g=f(()=>I.value.length>0?[{label:e("base.header.familyManage"),router:"FamilyManage",auth:[1]},{label:e("base.header.staffManage"),router:"StaffManage",auth:[1,3,2]},{label:e("base.header.hkManage"),router:"HkManage",auth:[1,2]},{label:e("base.header.familyAcc"),router:"FamilyAcc",auth:[1]},{label:e("base.header.posManage"),router:"PosManage",auth:[1,3,2]},{label:e("base.header.costManage"),router:"CostManage",auth:[1,3,2]},{label:"个人资料",router:"PersonalInfo",auth:[1,3,2]},{label:"账号安全",router:"AccountCenter",auth:[1,3,2]}]:[{label:"个人资料",router:"PersonalInfo",auth:[1,3,2]},{label:"账号安全",router:"AccountCenter",auth:[1,3,2]}]),v=o=>{o==="PersonalInfo"?h===3?l.push({name:"StaffDetails",query:{id:a.userInfo.identifyId,homeId:a.userInfo.homeId,tp:"staff"}}):l.push({name:o,query:{id:a.userInfo.identifyId,homeId:a.userInfo.homeId}}):l.push({name:o})};return(o,O)=>{const k=p("SecondHeader"),M=p("MainContainer");return r(),C(M,null,{header:u(()=>[c(P,{haveLiftEle:!1,title:s(e)("base.footer.setup")},null,8,["title"])]),headerScreen:u(()=>[t("div",null,[c(k,{noScreen:!0})])]),default:u(()=>[t("div",L,[(r(!0),i(m,null,x(g.value,n=>(r(),i(m,{key:n.router},[n.auth.includes(s(h))?(r(),i("div",{key:0,class:"setup-item ripple-effect hk-flex hk-items-center hk-jbetween",onClick:R=>v(n.router)},[t("span",E,d(n.label),1),c(s(A),{style:{"margin-left":"6px"},name:"arrow",size:"14px",color:"#BFBFBF"})],8,w)):B("",!0)],64))),128)),t("div",H,[t("div",U,"版本号：v"+d(s(_)),1),t("div",j,"域名："+d(s(b)),1)]),q])]),_:1})}}});export{J as default};