import{_ as w}from"./right-arrow-icon.CaFxgYzl.js";import{I as z,d as E,j as K,U as G,a6 as J,a7 as Q,t as V,M as W,u as X,a8 as Z,a as ee,a9 as se}from"./index.C__3lhMr.js";import{l as ae,r as u,b as te,a as oe,K as b,L as m,M as F,N as e,O as i,u as s,U as S,V as v,k as d,S as y,D as f,B,F as le}from"./vue.C2TeXnf4.js";const ie={class:"set-info-header"},ne={class:"set-info-box"},de={class:"si-upload-box hk-flex"},re={class:"si-preview-delete"},ce={class:"si-upload-def"},ue={class:"si-upload-add hk-flex hk-items-center"},me={class:"si-upload-txt"},fe={class:"si-form-box"},pe={class:"form-item-pop"},he={class:"fitem-label"},_e=e("span",{class:"setinfo-item-require"},"*",-1),be={class:"fitem-input"},ve=e("div",{class:"form-item-auxbox"},null,-1),ye={class:"form-item-pop"},ge={class:"fitem-label"},xe=e("span",{class:"setinfo-item-require"},"*",-1),ke={class:"fitem-input"},Ie=e("img",{class:"si-birthday-right-arrow",src:w},null,-1),De=e("div",{class:"form-item-auxbox"},null,-1),Ce={class:"form-item-pop"},Ve={class:"fitem-label"},Fe=e("span",{class:"setinfo-item-require"},"*",-1),Se={class:"fitem-input"},Be=e("img",{class:"si-birthday-right-arrow",src:w},null,-1),we=e("div",{class:"form-item-auxbox"},null,-1),Te={class:"form-item-pop"},Ue={class:"fitem-label"},Ae={class:"fitem-input"},Ne={key:0,class:"btm-auth-box"},$e=ae({__name:"setInfo",setup(Le){const{t:l}=X(),p=z.inApp(),r=u([]),g=u(null),x=u(null),h=new Date,T=h.getFullYear(),U=h.getMonth(),A=h.getDate(),c=u(!1),k=u(!1),{pushName:N}=E(),{hkMessage:_}=ee(),I=K(),t=te({name:"",birthday:"",area:"中国",areaId:1,idCard:""}),L=oe(()=>!!t.area&&!!t.birthday&&!!t.name),M=o=>{t.area=o.countryName,t.areaId=o.countryId},P=o=>{t.birthday=`${o[0]}-${o[1]}-${o[2]}`},R=()=>{g.value.taggleVisible()},$=()=>{x.value.taggleVisible(!0)},D=o=>{se({identifyId:I.userInfo.identifyId,nickname:t.name,avatar:o,birthday:t.birthday,identifyMsgId:t.idCard,countryId:t.areaId}).then(async a=>{a.code===0?(await I.setUserIdent(),sessionStorage.clear(),N("Home")):_(a.msg)}).finally(()=>{c.value=!1})},H=o=>{r.value=o},C=o=>{console.log("---val--"),k.value=o},O=G(()=>{if(!c.value)if(c.value=!0,r.value.length>0){const o=new FormData;o.append("file",r.value[0].file),Z(o).then(a=>{a.code===0?D(a.data.path):_(a.msg)}).catch(a=>{c.value=!1,_(a)})}else D("")},400);return(o,a)=>{const j=b("AppUploadHead"),q=b("DateSelect"),Y=b("AreaSelect");return m(),F(le,null,[e("div",ie,i(s(l)("base.header.setInfo")),1),e("div",ne,[e("div",de,[s(p)?y("",!0):(m(),S(s(Q),{key:0,reupload:"","max-count":"1",modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=n=>r.value=n)},{"preview-delete":v(()=>[e("div",re,[d(s(J),{name:"cross",color:"#fff"})])]),default:v(()=>[e("div",ce,[e("div",ue,[e("div",me,i(s(l)("base.uploadImgTips")),1)])])]),_:1},8,["modelValue"])),s(p)?(m(),S(j,{key:1,onOnChangeImg:H})):y("",!0)]),e("div",fe,[e("div",pe,[e("div",he,[f(i(s(l)("base.nameTxt")),1),_e]),e("div",be,[d(s(V),{modelValue:t.name,"onUpdate:modelValue":a[1]||(a[1]=n=>t.name=n),placeholder:s(l)("base.namePldTxt"),clearable:"","clear-icon":"cross"},null,8,["modelValue","placeholder"])])]),ve,e("div",ye,[e("div",ge,[f(i(s(l)("base.nationTxt")),1),xe]),e("div",ke,[e("div",{class:"si-birthday-form hk-flex hk-jbetween hk-items-center",onClick:$},[e("span",{class:"si-birthday-label",style:B({color:t.area?"#0D0D0D":"#BFBFBF"})},i(t.area||s(l)("base.selNationPld")),5),Ie])])]),De,e("div",Ce,[e("div",Ve,[f(i(s(l)("base.birthdayTxt")),1),Fe]),e("div",Se,[e("div",{class:"si-birthday-form hk-flex hk-jbetween hk-items-center",onClick:R},[e("span",{class:"si-birthday-label",style:B({color:t.birthday?"#0D0D0D":"#BFBFBF"})},i(t.birthday||s(l)("base.birthdayPldTxt")),5),Be])])]),we,e("div",Te,[e("div",Ue,i(s(l)("base.idCard")),1),e("div",Ae,[d(s(V),{modelValue:t.idCard,"onUpdate:modelValue":a[2]||(a[2]=n=>t.idCard=n),placeholder:s(l)("base.idCardPldTxt"),clearable:"","clear-icon":"cross",onFocus:a[3]||(a[3]=n=>C(!0)),onBlur:a[4]||(a[4]=n=>C(!1))},null,8,["modelValue","placeholder"])])])]),d(s(W),{class:"si-btm-btn",type:"primary",disabled:!L.value,loading:c.value,onClick:s(O)},{default:v(()=>[f(i(s(l)("base.goAppTxt")),1)]),_:1},8,["disabled","loading","onClick"])]),s(p)&&k.value?(m(),F("div",Ne)):y("",!0),d(q,{ref_key:"dateSelectRef",ref:g,maxLimit:new Date(s(T),s(U),s(A)),onOnChangeVal:P},null,8,["maxLimit"]),d(Y,{ref_key:"areaSelectRef",ref:x,title:s(l)("base.countryTxt"),onOnChange:M},null,8,["title"])],64)}}});export{$e as default};
