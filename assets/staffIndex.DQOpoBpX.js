import{d as pe,l as v,g as C,p as ve,o,a as u,B as m,Q as g,i as n,x as e,e as f,f as c,H as I,S as i,L as J,R as fe,_ as ye,r as T,a6 as b}from"./vue.BCHSKM6y.js";import{I as ge,u as _e,a3 as he,y as Te,a4 as K,c as be,b as ke,a5 as xe,Q as Ie,t as D,j as Re,a6 as S,g as we}from"./index.Cjri3_sP.js";import{_ as y}from"./BaseInfoItem.vue_vue_type_style_index_0_lang.DMYgpoJW.js";import{u as $e}from"./index.DllRNd8O.js";import{u as Ve}from"./usePayDetails.DH5-JNNp.js";import"./right-arrow-icon.CaFxgYzl.js";const He=["src"],Ce={class:"pay-details-box updata-staff-box container-setPx"},De={key:0,class:"hk-flex hk-items-center"},Se={class:"form-item-price-util"},Ae={key:1,class:"pydtl-val-item",style:{"font-weight":"500"}},Me={key:1,class:"pydtl-val-item"},Oe={key:1,class:"pydtl-val-item"},Pe={class:"pydtl-val-item"},Ye={class:"pydtl-val-item pydtl-color-err"},Ue={key:9,class:"pydtl-info-item"},Le={class:"pydtl-info-title"},qe={class:"pydtl-info-desc"},Be={key:1,class:"form-textarea-box"},Ne={class:"hk-flex hk-jbetween hk-items-center form-textarea-t"},Fe={class:"form-textarea-tl"},je={class:"form-textarea-tr"},Ee={class:"form-textarea-b"},Qe={class:"pydtl-info-item"},We=n("div",{class:"pydtl-info-title"},"驳回原因",-1),ze={class:"pydtl-info-desc"},Ge={key:10,class:"mpicture-info-item"},Je=n("div",{class:"mpicture-info-title"},"照片",-1),Ke={class:"mpicture-info-img hk-flex"},Xe=["src","onClick"],Ze={key:1,class:"form-upload-img-box"},et={class:"form-upload-img-tit"},tt=n("span",null,"*",-1),at={key:0,class:"form-upload-img"},st=n("div",{class:"footer-aux-btmbox"},null,-1),lt={class:"footer-btn-box"},vt=pe({__name:"staffIndex",setup(ot){be();const X=ye(),A=ge.inApp(),{id:Z}=X.query,{hkMessage:k}=we(),R=_e(),w=v(!1),ee=he(),M=v([]),{applyInfo:a,getApplyDetails:O,fileList:P,baseImgUrl:nt}=Ve(),l=v(!1),Y=v(null),U=v(null),L=v(null),q=v(null),B=v(null),N=v([]),F=v(!0),$=v(null),j=v(null),p=C(()=>!(a.typ!==2&&a.typ!==3)),te=C(()=>p.value?!0:!!a.price.value&&F.value),ae=C(()=>p.value?!1:l.value?!0:!!a.desc),{t:d}=ke(),_=s=>{s===1?Y.value.taggleVisible():s===2?q.value.taggleVisible():B.value.taggleVisible()},E=s=>{$e(s).then(t=>{t.code===0?(k("修改成功"),O(),l.value=!1):k(t.msg)}).catch(t=>{k(t)}).finally(()=>{w.value=!1})},se=()=>{var s;if(l.value){const t={homeId:R.userInfo.homeId,client:a.client.value,applicationId:Z};if(p.value){if(t.startTime=Math.floor(new Date(a.startTime).getTime()),t.endTime=Math.floor(new Date(a.endTime).getTime()),t.address=a.address.value,t.startTime>t.endTime){k("出车时间错误");return}w.value=!0,E(t)}else t.expenseTypeId=a.expenseTypeId,t.amount=a.price.value,t.payTime=Math.floor(new Date(a.payTime).getTime()),t.remark=a.desc,t.photos=(s=$.value)==null?void 0:s.getValues(),E(t)}else l.value=!0},Q=()=>{L.value.taggleVisible(!0)},le=()=>new Promise((s,t)=>{xe({homeId:R.userInfo.homeId}).then(x=>{if(x.code===0){const V=x.data.list.filter(h=>h.identifyId!==R.userInfo.identifyId).map(h=>({text:h.nickname,value:h.identifyId}));N.value=V,s(!0)}else t()})}),W=()=>{U.value.taggleVisible(!0)},oe=s=>{a.feeType.value=s==null?void 0:s[0].text,a.expenseTypeId=s==null?void 0:s[0].value},ne=s=>{a.client.value=s==null?void 0:s[0].text,a.clientId=s==null?void 0:s[0].value},ie=(s,t)=>{a.startTime=Math.floor(new Date(`${s[0]}-${s[1]}-${s[2]}T${t[0]}:${t[1]}`).getTime()/1e3)},re=(s,t)=>{a.endTime=Math.floor(new Date(`${s[0]}-${s[1]}-${s[2]}T${t[0]}:${t[1]}`).getTime()/1e3)},ue=(s,t)=>{a.payTime=Math.floor(new Date(`${s[0]}-${s[1]}-${s[2]}T${t[0]}:${t[1]}`).getTime()/1e3)},z=s=>{F.value=s},de=s=>{j.value.taggleModal(s)},ce=s=>s.replace(/[^0-9.,]/g,"");return ve(async()=>{O(),le(),M.value=await ee.getCostType}),(s,t)=>{const x=T("UploadImg"),V=T("AppUploadImg"),h=T("BtmSingleBtn"),H=T("TimeSelect"),me=T("PreviewImage");return o(),u(I,null,[m(Te,{title:p.value?"结束出车详情":"支出详情"},{rightContent:g(()=>[e(a).status===1||e(a).status===2?(o(),u("img",{key:0,class:"pay-details-state-img",src:e(Ie)(e(a).status===1?"wait":e(a).status===2?"pass":"reject"),alt:"",srcset:""},null,8,He)):c("",!0)]),_:1},8,["title"]),n("div",Ce,[m(y,{label:e(d)("base.nameTxt"),valData:e(a).name},null,8,["label","valData"]),p.value?c("",!0):(o(),f(y,{key:0,label:e(d)("base.payMoneyTxt"),isRequire:l.value},{default:g(()=>[l.value?(o(),u("div",De,[m(e(D),{class:"form-item-price",modelValue:e(a).price.value,"onUpdate:modelValue":t[0]||(t[0]=r=>e(a).price.value=r),formatter:ce,type:"number",placeholder:"0"},null,8,["modelValue"]),n("span",Se,i(e(a).currency),1)])):(o(),u("div",Ae,i(e(Re)(e(a).price.value))+" "+i(e(a).currency),1))]),_:1},8,["label","isRequire"])),p.value?c("",!0):(o(),f(y,{key:1,label:e(d)("base.gasTypeTxt"),isHaveRArrow:l.value,onOnHandle:t[2]||(t[2]=r=>l.value?W():()=>{})},{default:g(()=>[n("div",{class:"pydtl-val-item",onClick:t[1]||(t[1]=b(r=>l.value?W():()=>{},["stop"]))},i(e(a).feeType.value),1)]),_:1},8,["label","isHaveRArrow"])),p.value?(o(),f(y,{key:2,label:e(d)("base.consignerTxt"),isHaveRArrow:l.value,onOnHandle:t[3]||(t[3]=r=>l.value?Q():()=>{})},{default:g(()=>[l.value?(o(),u("div",{key:0,onClick:b(Q,["stop"])},i(e(a).client.value),1)):(o(),u("div",Me,i(e(a).client.value||"无"),1))]),_:1},8,["label","isHaveRArrow"])):c("",!0),m(y,{label:e(d)("base.belongHomeTxt"),valData:e(a).homeName},null,8,["label","valData"]),p.value?(o(),f(y,{key:3,label:e(d)("homeItem.address")},{default:g(()=>[l.value?(o(),f(e(D),{key:0,modelValue:e(a).address.value,"onUpdate:modelValue":t[4]||(t[4]=r=>e(a).address.value=r),placeholder:e(d)("base.pleaseInputTxt")},null,8,["modelValue","placeholder"])):(o(),u("div",Oe,i(e(a).address.value),1))]),_:1},8,["label"])):c("",!0),p.value?c("",!0):(o(),f(y,{key:4,label:e(d)("base.payTimeTxt"),isHaveRArrow:l.value,isRequire:l.value,onOnHandle:t[6]||(t[6]=r=>l.value?_(1):()=>{})},{default:g(()=>[n("div",{class:"pydtl-val-item",onClick:t[5]||(t[5]=b(r=>l.value?_(3):()=>{},["stop"]))},i(e(S)(e(a).payTime*1e3).format("YYYY-MM-DD HH:mm")),1)]),_:1},8,["label","isHaveRArrow","isRequire"])),p.value?(o(),f(y,{key:5,label:"出车时间",isHaveRArrow:l.value,isRequire:l.value,onOnHandle:t[8]||(t[8]=r=>l.value?_(1):()=>{})},{default:g(()=>[n("div",{class:"pydtl-val-item",onClick:t[7]||(t[7]=b(r=>l.value?_(1):()=>{},["stop"]))},i(e(S)(e(a).startTime*1e3).format("YYYY-MM-DD HH:mm")),1)]),_:1},8,["isHaveRArrow","isRequire"])):c("",!0),p.value?(o(),f(y,{key:6,label:"结束时间",isHaveRArrow:l.value,isRequire:l.value,onOnHandle:t[10]||(t[10]=r=>l.value?_(2):()=>{})},{default:g(()=>[n("div",{class:"pydtl-val-item",onClick:t[9]||(t[9]=b(r=>l.value?_(2):()=>{},["stop"]))},i(e(S)(e(a).endTime*1e3).format("YYYY-MM-DD HH:mm")),1)]),_:1},8,["isHaveRArrow","isRequire"])):c("",!0),e(a).status!==1?(o(),f(y,{key:7,label:e(d)("base.reviewerTxt")},{default:g(()=>[n("div",Pe,i(e(a).auditIdentifyName),1)]),_:1},8,["label"])):c("",!0),e(a).status===3||e(a).status===4?(o(),f(y,{key:8,label:e(d)("base.statusTxt")},{default:g(()=>[n("div",Ye,i(e(a).status===3?"驳回":"修改待审"),1)]),_:1},8,["label"])):c("",!0),ae.value?(o(),u("div",Ue,[l.value?(o(),u("div",Be,[n("div",Ne,[n("div",Fe,i(e(d)("base.descTxt")),1),n("div",je,[n("span",null,i(e(a).desc.length),1),J("/200")])]),n("div",Ee,[m(e(D),{class:"form-textarea",maxlength:200,rows:"6",modelValue:e(a).desc,"onUpdate:modelValue":t[11]||(t[11]=r=>e(a).desc=r),placeholder:e(d)("base.descTxt")+":",type:"textarea"},null,8,["modelValue","placeholder"])])])):(o(),u(I,{key:0},[n("div",Le,i(e(d)("base.descTxt")),1),n("div",qe,i(e(a).desc),1)],64))])):c("",!0),n("div",Qe,[We,n("div",ze,i(e(a).reason),1)]),p.value?c("",!0):(o(),u("div",Ge,[l.value?(o(),u("div",Ze,[n("div",et,[J(i(e(d)("base.pictrueTxt")),1),tt]),e(A)?c("",!0):(o(),u("div",at,[m(x,{ref_key:"uploadImgRef",ref:$,maxCount:6,fileValues:e(P),onOnChangeIsLength:z},null,8,["fileValues"])])),e(A)?(o(),f(V,{key:1,ref_key:"uploadImgRef",ref:$,value:e(P),maxCount:6,onOnChangeImg:z},null,8,["value"])):c("",!0)])):(o(),u(I,{key:0},[Je,n("div",Ke,[(o(!0),u(I,null,fe(e(a).photo,(r,G)=>(o(),u("img",{key:G,src:r,onClick:it=>de(G)},null,8,Xe))),128))])],64))])),st,n("div",lt,[m(h,{loading:w.value,disable:te.value,handleTxt:l.value?"保存":"马上修改",onOnHandle:se},null,8,["loading","disable","handleTxt"])])]),m(H,{ref_key:"startTimeSelectRef",ref:Y,onOnChangeVal:ie},null,512),m(H,{ref_key:"endTimeSelectRef",ref:q,onOnChangeVal:re},null,512),m(H,{ref_key:"timeSelectRef",ref:B,onOnChangeVal:ue},null,512),m(K,{ref_key:"feeTypePopRef",ref:U,title:e(d)("base.selectFeeTpTxt"),data:M.value,onOnChange:oe},null,8,["title","data"]),m(K,{ref_key:"wprTypePopRef",ref:L,title:"选择委派人",data:N.value,onOnChange:ne},null,8,["data"]),m(me,{ref_key:"previewImgRef",ref:j,imageList:e(a).photo},null,8,["imageList"])],64)}}});export{vt as default};
