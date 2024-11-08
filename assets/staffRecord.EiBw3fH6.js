import{l as de,R as pe,r as m,a as $,d as me,K as f,L as n,U as y,V as v,k as i,N as l,u as e,M as u,O as c,a6 as O,S as d,F as k,D as U,Q as fe}from"./vue.C2TeXnf4.js";import{d as ve,I as ge,s as _e,j as ye,q as he,c as be,f as xe,t as F,A as ke,n as Te,k as Ie,u as Re,a as we}from"./index.C__3lhMr.js";import{_ as g}from"./BaseInfoItem.vue_vue_type_style_index_0_lang.MpSsZcmr.js";import{e as Ce,u as De}from"./index.CeJqzCj5.js";import{u as Ve}from"./usePayDetails.Cy6__Q0s.js";import"./right-arrow-icon.CaFxgYzl.js";const Ae={class:"pay-details-box updata-staff-box container-setPx"},Se={key:0,class:"hk-flex hk-items-center"},Be={class:"form-item-price-util"},He={key:1,class:"pydtl-val-item",style:{"font-weight":"500"}},Pe={class:"pydtl-val-item"},Le={key:2,class:"pydtl-info-item"},Me={class:"pydtl-info-title"},$e={class:"pydtl-info-desc"},Oe={key:1,class:"form-textarea-box"},Ue={class:"hk-flex hk-jbetween hk-items-center form-textarea-t"},Fe={class:"form-textarea-tl"},Ne={class:"form-textarea-tr"},qe={class:"form-textarea-b"},Ye={class:"mpicture-info-item"},je=l("div",{class:"mpicture-info-title"},"照片",-1),Ee={class:"mpicture-info-img hk-flex"},ze=["src","onClick"],Ge={key:1,class:"form-upload-img-box"},Ke={class:"form-upload-img-tit"},Qe=l("span",null,"*",-1),Je={key:0,class:"form-upload-img"},We={key:3,class:"footer-aux-btmbox"},Xe={key:4,class:"footer-btn-box"},Ze={key:5,class:"footer-btn-box"},et=l("div",{class:"staff-edit-dialog"},[l("div",{class:"pd-dialog-content"},"确定删除该条记录")],-1),ct=de({__name:"staffRecord",setup(tt){const{comeback:N}=ve(),q=pe(),T=ge.inApp(),{id:I}=q.query,{hkMessage:_}=we(),{getCostType:Y}=_e(),h=ye();he();const R=m([]),w=m(!1),{applyInfo:t,getApplyDetails:C,fileList:D,baseImgUrl:at}=Ve(),o=m(!1),V=m(null),A=m(null),b=m(null),S=m(!0),x=m(null),B=m(null),{t:r}=Re(),{pageLoading:j,endPageLoading:E}=be({}),H=s=>{A.value.taggleVisible()},z=$(()=>!!t.price.value&&S.value),G=$(()=>o.value?!0:!!t.desc),K=s=>{De(s).then(a=>{a.code===0?(_("修改成功"),C(),o.value=!1):_(a.msg)}).catch(a=>{_(a)}).finally(()=>{w.value=!1})},Q=()=>{var s;if(o.value){const a={homeId:h.userInfo.homeId,client:t.client.value,applicationId:I};a.expenseTypeId=t.expenseTypeId,a.amount=t.price.value,a.payTime=Math.floor(new Date(t.payTime).getTime()),a.remark=t.desc,a.photos=(s=x.value)==null?void 0:s.getValues(),K(a)}else o.value=!0},P=()=>{V.value.taggleVisible(!0)},J=s=>{t.feeType.value=s==null?void 0:s[0].text,t.expenseTypeId=s==null?void 0:s[0].value},W=(s,a)=>{t.payTime=Math.floor(new Date(`${s[0]}-${s[1]}-${s[2]}T${a[0]}:${a[1]}`).getTime()/1e3)},X=()=>{b.value.taggleDialog(!0)},Z=()=>{o.value=!0},ee=s=>{Ce({applicationId:I,homeId:h.userInfo.homeId}).then(a=>{a.code===0?(N(),_("删除成功"),b.value.taggleDialog(!1)):_(a.msg)}).catch(a=>{_(a)})},L=s=>{S.value=s},te=s=>{B.value.taggleModal(s)},ae=s=>s.replace(/[^0-9.,]/g,"");return me(async()=>{C({doFun:E}),R.value=await Y(h.userInfo.homeId)}),(s,a)=>{const se=f("UploadImg"),oe=f("AppUploadImg"),le=f("BaseHandleBtn"),ne=f("BtmSingleBtn"),ie=f("TimeSelect"),ue=f("ConfrimPopAgain"),re=f("PreviewImage"),ce=f("MainContainer");return n(),y(ce,{exitLoading:!0,pageLoading:e(j)},{header:v(()=>[i(xe,{title:o.value?"支出修改":"支出详情"},null,8,["title"])]),default:v(()=>[l("div",Ae,[i(g,{label:e(r)("base.nameTxt"),valData:e(t).name},null,8,["label","valData"]),i(g,{label:e(r)("base.payMoneyTxt"),isRequire:o.value},{default:v(()=>[o.value?(n(),u("div",Se,[i(e(F),{class:"form-item-price",modelValue:e(t).price.value,"onUpdate:modelValue":a[0]||(a[0]=p=>e(t).price.value=p),formatter:ae,type:"number",placeholder:"0"},null,8,["modelValue"]),l("span",Be,c(e(t).currency),1)])):(n(),u("div",He,c(e(ke)(e(t).price.value))+" "+c(e(t).currency),1))]),_:1},8,["label","isRequire"]),i(g,{label:e(r)("base.gasTypeTxt"),isHaveRArrow:o.value,onOnHandle:a[2]||(a[2]=p=>o.value?P():()=>{})},{default:v(()=>[l("div",{class:"pydtl-val-item",onClick:a[1]||(a[1]=O(p=>o.value?P():()=>{},["stop"]))},c(e(t).feeType.value),1)]),_:1},8,["label","isHaveRArrow"]),i(g,{label:e(r)("base.belongHomeTxt"),valData:e(t).homeName},null,8,["label","valData"]),i(g,{label:e(r)("base.payTimeTxt"),isHaveRArrow:o.value,isRequire:o.value,onOnHandle:a[4]||(a[4]=p=>o.value?H(1):()=>{})},{default:v(()=>[l("div",{class:"pydtl-val-item",onClick:a[3]||(a[3]=O(p=>o.value?H(1):()=>{},["stop"]))},c(e(Te)(e(t).payTime*1e3).format("YYYY-MM-DD HH:mm")),1)]),_:1},8,["label","isHaveRArrow","isRequire"]),e(t).status!==1?(n(),y(g,{key:0,label:e(r)("base.reviewerTxt")},{default:v(()=>[l("div",Pe,c(e(t).auditIdentifyName),1)]),_:1},8,["label"])):d("",!0),[1,2,6].includes(e(t).status)&&!o.value?(n(),y(g,{key:1,label:"状态",isStatusItem:!0,statusValue:e(t).status===1?"wait":e(t).status===2?"pass":"zuofei"},null,8,["statusValue"])):d("",!0),G.value?(n(),u("div",Le,[o.value?d("",!0):(n(),u(k,{key:0},[l("div",Me,c(e(r)("base.descTxt")),1),l("div",$e,c(e(t).desc),1)],64)),o.value?(n(),u("div",Oe,[l("div",Ue,[l("div",Fe,c(e(r)("base.descTxt")),1),l("div",Ne,[l("span",null,c(e(t).desc.length),1),U("/200")])]),l("div",qe,[i(e(F),{class:"form-textarea",maxlength:200,rows:"6",modelValue:e(t).desc,"onUpdate:modelValue":a[5]||(a[5]=p=>e(t).desc=p),placeholder:e(r)("base.descTxt")+":",type:"textarea"},null,8,["modelValue","placeholder"])])])):d("",!0)])):d("",!0),l("div",Ye,[o.value?(n(),u("div",Ge,[l("div",Ke,[U(c(e(r)("base.pictrueTxt")),1),Qe]),e(T)?d("",!0):(n(),u("div",Je,[i(se,{ref_key:"uploadImgRef",ref:x,maxCount:6,fileValues:e(D),onOnChangeIsLength:L},null,8,["fileValues"])])),e(T)?(n(),y(oe,{key:1,ref_key:"uploadImgRef",ref:x,value:e(D),maxCount:6,onOnChangeImg:L},null,8,["value"])):d("",!0)])):(n(),u(k,{key:0},[je,l("div",Ee,[(n(!0),u(k,null,fe(e(t).photo,(p,M)=>(n(),u("img",{key:M,src:p,onClick:st=>te(M)},null,8,ze))),128))])],64))]),e(t).status===1?(n(),u("div",We)):d("",!0),!o.value&&e(t).status===1?(n(),u("div",Xe,[i(le,{firBtnTxt:"删除记录",secBtnTxt:"修改记录",onOnFirBtnHandle:X,onOnSecBtnHandle:Z})])):d("",!0),o.value?(n(),u("div",Ze,[i(ne,{loading:w.value,disable:z.value,handleTxt:"保存修改",onOnHandle:Q},null,8,["loading","disable"])])):d("",!0)]),i(ie,{ref_key:"timeSelectRef",ref:A,onOnChangeVal:W},null,512),i(Ie,{ref_key:"feeTypePopRef",ref:V,title:e(r)("base.selectFeeTpTxt"),data:R.value,onOnChange:J},null,8,["title","data"]),i(ue,{ref_key:"confirmPopRef",ref:b,popClass:"staff-edit-dialog-box",customFooter:!0,onOnConfirm:ee},{default:v(()=>[et]),_:1},512),i(re,{ref_key:"previewImgRef",ref:B,imageList:e(t).photo},null,8,["imageList"])]),_:1},8,["pageLoading"])}}});export{ct as default};