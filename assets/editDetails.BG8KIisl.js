import{l as ue,r as d,R as re,b as fe,a as me,d as pe,K as f,L as p,U as g,V as i,k as n,u as a,N as l,M as be,S as _,a6 as S,O as u,D as ge}from"./vue.C2TeXnf4.js";import{I as _e,j as he,m as ve,s as ye,q as Ie,d as ke,f as xe,t as q,n as Re,k as Te,u as Se,p as Ce,o as Me,r as Ae,a as De,v as Ve}from"./index.C__3lhMr.js";import{_ as c}from"./BaseInfoItem.vue_vue_type_style_index_0_lang.MpSsZcmr.js";import{A as He}from"./index.DcHIdklB.js";import"./right-arrow-icon.CaFxgYzl.js";const we={class:"updata-staff-box hk-flex hk-flex-col container-setPx"},Ue={class:"updata-staff-form"},Oe={key:0,class:"personal-deatils-upimg"},je={class:"info-no-input"},Ne={class:"info-no-input"},Pe={class:"info-no-input"},qe={class:"info-no-input"},Be=l("div",{class:"footer-aux-btmbox"},null,-1),Le={class:"footer-btn-box"},Ye={class:"staff-edit-dialog"},$e={class:"pd-dialog-content"},Je=l("p",null,"提示：请勿忘记线下收回备用金",-1),We=ue({__name:"editDetails",setup(Fe){const{t:s}=Se(),h=d([]),C=_e.inApp(),M=re(),B=he(),{isStaff:A}=ve(),{getJobType:L}=ye(),v=new Date,Y=v.getFullYear(),$=v.getMonth(),J=v.getDate(),D=d(null),V=d(null),F=d(null),H=d(!0),y=d(null),w=d(null),I=d(!1);Ie();const k=d(""),{comeback:E,goback:G}=ke(),{hkMessage:r}=De(),{id:x,homeId:U}=M.query,R=d(!1),t=fe({nickname:"",avatar:"",homeName:"",birthday:"",contactInformation:"",identifyMsgId:"",duties:"",country:"",joinTime:0,countryId:0,dutiesId:0}),K=me(()=>!!t.nickname&&!!t.country&&!!t.duties&&H.value),z=e=>{t.country=e.countryName,t.countryId=e.countryId},Q=()=>{Ce({identifyId:+x}).then(e=>{e.code===0?(t.avatar=e.data.avatar,t.nickname=e.data.nickname,t.homeName=e.data.homeName,t.birthday=e.data.birthday,t.contactInformation=e.data.contactInformation,t.identifyMsgId=e.data.identifyMsgId,t.country=e.data.country,t.duties=e.data.duties,t.joinTime=e.data.joinTime,t.countryId=e.data.countryId,t.dutiesId=e.data.dutiesId,h.value=[{url:Me+e.data.avatar,baseUrl:e.data.avatar}]):r(e.msg)}).catch(e=>{r(e)})},T=d([]),W=()=>{R.value=!1},X=e=>{t.duties=e.name,t.dutiesId=e.value},Z=e=>{var o,b;t.duties=(o=e[0])==null?void 0:o.text,t.dutiesId=(b=e[0])==null?void 0:b.value},O=()=>{D.value.taggleVisible(!0)},j=()=>{V.value.taggleVisible()},ee=e=>{t.birthday=`${e[0]}-${e[1]}-${e[2]}`},te=e=>{Ve({identifyId:+x,nickname:t.nickname,avatar:e,birthday:t.birthday,contactInformation:t.contactInformation,identifyMsgId:t.identifyMsgId,dutiesId:t.dutiesId,countryId:t.countryId}).then(o=>{o.code===0?(B.setUserIdent(),E(),r("保存成功")):r(o.msg)}).catch(o=>{r(o)}).finally(()=>{I.value=!1})},ae=()=>{var o;I.value=!0;const e=(o=y.value)==null?void 0:o.getValues();te(e[0])},oe=()=>{Ae({identifyId:+x,homeId:+U}).then(e=>{e.code===0?G(-2):r(e.msg)}).catch(e=>{r(e)})},N=()=>{w.value.taggleVisible(!0)},P=e=>{H.value=e};return pe(async()=>{Q(),k.value=M.query.tp||"other";const e=await L(U);T.value=e.map(o=>({text:o.text,value:o.value}))}),(e,o)=>{const b=f("UploadImg"),ne=f("AppUploadImg"),se=f("BtmSingleBtn"),le=f("ConfrimPopAgain"),ie=f("AreaSelect"),de=f("DateSelect"),ce=f("MainContainer");return p(),g(ce,null,{header:i(()=>[n(xe,{title:k.value==="staff"?"编辑资料":k.value==="other"?a(s)("base.staffInfoTxt",{do:a(s)("base.editTxt")}):""},null,8,["title"])]),default:i(()=>[l("div",we,[l("div",Ue,[n(c,{class:"pd-img",label:"照片",isHaveRArrow:!0,isRequire:!0},{default:i(()=>[a(C)?_("",!0):(p(),be("div",Oe,[n(b,{isDelete:!1,ref_key:"uploadImgRef",ref:y,fileValues:h.value,maxCount:1,onOnChangeIsLength:P},null,8,["fileValues"])])),a(C)?(p(),g(ne,{key:1,class:"personal-deatils-upimg",ref_key:"uploadImgRef",ref:y,value:h.value,onOnChangeImg:P},null,8,["value"])):_("",!0)]),_:1}),n(c,{label:a(s)("base.nameTxt"),isRequire:!0},{default:i(()=>[n(a(q),{modelValue:t.nickname,"onUpdate:modelValue":o[0]||(o[0]=m=>t.nickname=m),placeholder:a(s)("base.pleaseInputTxt")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(A)?_("",!0):(p(),g(c,{key:0,label:a(s)("base.jopTxt"),isHaveRArrow:!0,isRequire:!0,onOnHandle:N},{default:i(()=>[l("div",{onClick:S(N,["stop"])},u(t.duties),1)]),_:1},8,["label"])),a(A)?(p(),g(c,{key:1,label:a(s)("base.jopTxt")},{default:i(()=>[l("div",je,u(t.duties),1)]),_:1},8,["label"])):_("",!0),n(c,{label:a(s)("base.belongHomeTxt")},{default:i(()=>[l("div",Ne,u(t.homeName),1)]),_:1},8,["label"]),n(c,{label:a(s)("base.nationTxt"),isHaveRArrow:!0,isRequire:!0,onOnHandle:O},{default:i(()=>[l("div",{onClick:S(O,["stop"])},u(t.country),1)]),_:1},8,["label"]),n(c,{label:a(s)("base.idCard")},{default:i(()=>[n(a(q),{modelValue:t.identifyMsgId,"onUpdate:modelValue":o[1]||(o[1]=m=>t.identifyMsgId=m),placeholder:a(s)("base.pleaseInputTxt")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n(c,{label:a(s)("base.telNotxt")},{default:i(()=>[l("div",Pe,u(t.contactInformation||"未绑定"),1)]),_:1},8,["label"]),n(c,{label:a(s)("base.birthdayTxt"),isHaveRArrow:!0,isRequire:!0,onOnHandle:j},{default:i(()=>[l("div",{onClick:S(j,["stop"])},u(t.birthday),1)]),_:1},8,["label"]),n(c,{label:a(s)("base.entryTime")},{default:i(()=>[l("div",qe,u(a(Re)(t.joinTime*1e3).format("YYYY-MM-DD HH:mm")),1)]),_:1},8,["label"])]),Be,l("div",Le,[n(se,{loading:I.value,disable:K.value,handleTxt:a(s)("base.btn.save"),onOnHandle:ae},null,8,["loading","disable","handleTxt"])])]),n(a(He),{class:"hk-action-sheet",show:R.value,"onUpdate:show":o[2]||(o[2]=m=>R.value=m),actions:T.value,"cancel-text":"取消","close-on-click-action":"",onCancel:W,onSelect:X},null,8,["show","actions"]),n(le,{ref_key:"confirmPopRef",ref:F,popClass:"staff-edit-dialog-box",customFooter:!0,onOnConfirm:oe},{default:i(()=>[l("div",Ye,[l("div",$e,[ge(u(a(s)("base.confirmDelStaff"))+" ",1),Je])])]),_:1},512),n(ie,{ref_key:"areaSelectRef",ref:D,title:a(s)("base.countryTxt"),onOnChange:z},null,8,["title"]),n(de,{ref_key:"dateSelectRef",ref:V,maxLimit:new Date(a(Y),a($),a(J)),onOnChangeVal:ee},null,8,["maxLimit"]),n(Te,{ref_key:"jopPopoverRef",ref:w,title:"职务",data:T.value,onOnChange:Z},null,8,["data"])]),_:1})}}});export{We as default};
