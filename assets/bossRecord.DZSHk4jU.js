import{d as z,l as i,g as G,p as J,o as m,a as g,B as l,Q as d,i as o,x as e,S as c,L as S,f as h,e as K,H as W,_ as X,r as u,a6 as D}from"./vue.BCHSKM6y.js";import{I as Z,u as ee,a3 as te,y as ae,a4 as se,c as oe,b as le,Q as ne,t as w,a6 as ie,g as ce}from"./index.Cjri3_sP.js";import{_ as p}from"./BaseInfoItem.vue_vue_type_style_index_0_lang.DMYgpoJW.js";import{u as re}from"./index.DllRNd8O.js";import{u as pe}from"./usePayDetails.DH5-JNNp.js";import"./right-arrow-icon.CaFxgYzl.js";const me=["src"],de={class:"pay-details-box updata-staff-box container-setPx"},ue={class:"hk-flex hk-items-center"},fe={class:"form-item-price-util"},_e={class:"pydtl-info-item"},ge={class:"form-textarea-box"},he={class:"hk-flex hk-jbetween hk-items-center form-textarea-t"},ye={class:"form-textarea-tl"},be={class:"form-textarea-tr"},ve={class:"form-textarea-b"},xe={class:"mpicture-info-item"},Te={class:"form-upload-img-box"},Ie={class:"form-upload-img-tit"},ke=o("span",null,"*",-1),Ve={key:0,class:"form-upload-img"},Ce=o("div",{class:"footer-aux-btmbox"},null,-1),Re={class:"footer-btn-box"},Ue=z({__name:"bossRecord",setup(Se){const{comeback:A}=oe(),H=X(),y=Z.inApp(),{id:$,homeId:B}=H.query,{hkMessage:f}=ce();ee();const M=te(),b=i([]),v=i(!1),{applyInfo:a,getApplyDetails:U,fileList:x,baseImgUrl:De}=pe(),T=i(null),I=i(null),k=i(!0),_=i(null),{t:n}=le(),V=t=>{I.value.taggleVisible()},O=G(()=>!!a.price.value&&k.value),L=t=>{re(t).then(s=>{s.code===0?(f("修改成功"),A()):f(s.msg)}).catch(s=>{f(s)}).finally(()=>{v.value=!1})},N=()=>{var s;const t={homeId:B,client:a.client.value,applicationId:$};t.expenseTypeId=a.expenseTypeId,t.amount=a.price.value,t.payTime=Math.floor(new Date(a.payTime).getTime()),t.remark=a.desc,t.photos=(s=_.value)==null?void 0:s.getValues(),L(t)},C=()=>{T.value.taggleVisible(!0)},P=t=>{a.feeType.value=t==null?void 0:t[0].text,a.expenseTypeId=t==null?void 0:t[0].value},F=(t,s)=>{a.payTime=Math.floor(new Date(`${t[0]}-${t[1]}-${t[2]}T${s[0]}:${s[1]}`).getTime()/1e3)},R=t=>{k.value=t},Y=t=>t.replace(/[^0-9.,]/g,"");return J(async()=>{U(),b.value=await M.getCostType}),(t,s)=>{const q=u("UploadImg"),j=u("AppUploadImg"),Q=u("BtmSingleBtn"),E=u("TimeSelect");return m(),g(W,null,[l(ae,{title:"支出修改"},{rightContent:d(()=>[e(a).status===1?(m(),g("img",{key:0,class:"pay-details-state-img",src:e(ne)("wait"),alt:"",srcset:""},null,8,me)):h("",!0)]),_:1}),o("div",de,[l(p,{label:e(n)("base.nameTxt"),valData:e(a).name},null,8,["label","valData"]),l(p,{label:e(n)("base.payMoneyTxt"),isRequire:!0},{default:d(()=>[o("div",ue,[l(e(w),{class:"form-item-price",modelValue:e(a).price.value,"onUpdate:modelValue":s[0]||(s[0]=r=>e(a).price.value=r),formatter:Y,type:"number",placeholder:"0"},null,8,["modelValue"]),o("span",fe,c(e(a).currency),1)])]),_:1},8,["label"]),l(p,{label:e(n)("base.gasTypeTxt"),isHaveRArrow:!0,onOnHandle:C},{default:d(()=>[o("div",{class:"pydtl-val-item",onClick:D(C,["stop"])},c(e(a).feeType.value),1)]),_:1},8,["label"]),l(p,{label:e(n)("base.belongHomeTxt"),valData:e(a).homeName},null,8,["label","valData"]),l(p,{label:e(n)("base.payTimeTxt"),isHaveRArrow:!0,isRequire:!0,onOnHandle:s[2]||(s[2]=r=>V())},{default:d(()=>[o("div",{class:"pydtl-val-item",onClick:s[1]||(s[1]=D(r=>V(1),["stop"]))},c(e(ie)(e(a).payTime*1e3).format("YYYY-MM-DD HH:mm")),1)]),_:1},8,["label"]),o("div",_e,[o("div",ge,[o("div",he,[o("div",ye,c(e(n)("base.descTxt")),1),o("div",be,[o("span",null,c(e(a).desc.length),1),S("/200")])]),o("div",ve,[l(e(w),{class:"form-textarea",maxlength:200,rows:"6",modelValue:e(a).desc,"onUpdate:modelValue":s[3]||(s[3]=r=>e(a).desc=r),placeholder:e(n)("base.descTxt")+":",type:"textarea"},null,8,["modelValue","placeholder"])])])]),o("div",xe,[o("div",Te,[o("div",Ie,[S(c(e(n)("base.pictrueTxt")),1),ke]),e(y)?h("",!0):(m(),g("div",Ve,[l(q,{ref_key:"uploadImgRef",ref:_,maxCount:6,fileValues:e(x),onOnChangeIsLength:R},null,8,["fileValues"])])),e(y)?(m(),K(j,{key:1,ref_key:"uploadImgRef",ref:_,value:e(x),maxCount:6,onOnChangeImg:R},null,8,["value"])):h("",!0)])]),Ce,o("div",Re,[l(Q,{loading:v.value,disable:O.value,handleTxt:"保存修改",onOnHandle:N},null,8,["loading","disable"])])]),l(E,{ref_key:"timeSelectRef",ref:I,onOnChangeVal:F},null,512),l(se,{ref_key:"feeTypePopRef",ref:T,title:e(n)("base.selectFeeTpTxt"),data:b.value,onOnChange:P},null,8,["title","data"])],64)}}});export{Ue as default};
