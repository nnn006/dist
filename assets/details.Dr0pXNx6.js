import{j as B,d as F,f as A,n as U,k as V,o as O,u as Y,p as $,aD as E,a as q}from"./index.C__3lhMr.js";import{l as K,R as z,i as G,r as f,b as J,d as Q,K as r,L as W,U as X,V as i,k as t,u as o,N as n,O as c}from"./vue.C2TeXnf4.js";import{_ as l}from"./BaseInfoItem.vue_vue_type_style_index_0_lang.MpSsZcmr.js";import"./right-arrow-icon.CaFxgYzl.js";const Z={class:"add-home-box hk-flex hk-flex-col container-setPx"},ee={class:"add-home-form"},ae={class:"staff-details-info"},te={class:"staff-details-info"},oe={class:"staff-details-info"},ne={class:"staff-details-info"},se=n("div",{class:"footer-aux-btmbox"},null,-1),ie={class:"footer-btn-box"},le={class:"staff-details-dialog"},de={class:"pd-dialog-content"},_e=K({__name:"details",setup(ce){const{t:s}=Y(),k=z(),{id:u,homeId:x}=k.query,{hkMessage:g}=q(),T=G("endPageLoading"),p=B(),{pushName:M,comeback:w}=F(),h=f([]),_=f([]),v=f(null),y=f(null),I=f(null),e=J({nickname:"",avatar:"",homeName:"",birthday:"",contactInformation:"",identifyMsgId:"",duties:"",country:"",joinTime:0,countryId:0}),P=d=>{$({identifyId:+u}).then(async a=>{await p.setHomeSimpleLs();const b=await p.homeSimple;a.code===0?(e.avatar=a.data.avatar,e.nickname=a.data.nickname,e.homeName=a.data.homeName,e.birthday=a.data.birthday,e.contactInformation=a.data.contactInformation,e.identifyMsgId=a.data.identifyMsgId,e.country=a.data.country,e.duties=a.data.duties,e.joinTime=a.data.joinTime,e.countryId=a.data.countryId,_.value=a.data.familyMemberHomeList.map(m=>m.homeId),h.value=b.filter(m=>_.value.includes(m.value))):g(a.msg)}).finally(()=>{d&&d()})},C=()=>{v.value.taggleDialog(!0)},R=()=>{y.value.taggleVisible(!0)},D=()=>{E({identifyId:+u}).then(d=>{d.code===0?w():g(d.msg)})},H=()=>{M("FamiEdit",{id:u,homeId:x})},L=()=>{I.value.taggleModal()};return Q(async()=>{P(T)}),(d,a)=>{const b=r("InfoItemImg"),m=r("BtmSingleBtn"),S=r("ConfrimPopAgain"),N=r("PreviewImage"),j=r("MainContainer");return W(),X(j,null,{header:i(()=>[t(A,{title:o(s)("base.familyDetails")},null,8,["title"])]),default:i(()=>[n("div",Z,[n("div",ee,[t(l,{class:"pd-img",label:"照片"},{default:i(()=>[t(b,{class:"bi-info-img",imgUrl:e.avatar,onClick:L},null,8,["imgUrl"])]),_:1}),t(l,{label:o(s)("base.nameTxt")},{default:i(()=>[n("div",ae,c(e.nickname),1)]),_:1},8,["label"]),t(l,{label:o(s)("base.telNotxt")},{default:i(()=>[n("div",te,c(e.contactInformation),1)]),_:1},8,["label"]),t(l,{label:o(s)("base.birthdayTxt")},{default:i(()=>[n("div",oe,c(e.birthday),1)]),_:1},8,["label"]),t(l,{label:o(s)("base.registerTimeTxt")},{default:i(()=>[n("div",ne,c(o(U)(e.joinTime*1e3).format("YYYY-MM-DD HH:mm")),1)]),_:1},8,["label"]),t(l,{label:o(s)("base.manageFamilyTxt")},{default:i(()=>[n("div",{class:"staff-details-clickview",onClick:R},c(o(s)("base.clickViewTxt")),1)]),_:1},8,["label"]),t(l,{label:o(s)("base.btn.delAccount"),isHaveRArrow:!0,onOnHandle:C},null,8,["label"])]),se,n("div",ie,[t(m,{disable:!0,handleTxt:o(s)("base.btn.editInfo"),onOnHandle:H},null,8,["handleTxt"])])]),t(S,{ref_key:"confirmPopRef",ref:v,popClass:"staff-details-dialog-box",customFooter:!0,onOnConfirm:D},{default:i(()=>[n("div",le,[n("div",de,c(`确定删除${e.nickname}`),1)])]),_:1},512),t(V,{ref_key:"feeTypePopRef",ref:y,title:o(s)("base.manageFamilyTxt"),isSingle:!1,isSelect:!1,value:_.value,data:h.value},null,8,["title","value","data"]),t(N,{ref_key:"previewImgRef",ref:I,imageList:[o(O)+e.avatar]},null,8,["imageList"])]),_:1})}}});export{_e as default};