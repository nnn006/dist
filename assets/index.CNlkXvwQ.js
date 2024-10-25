import{u as Z,h as ee,y as te,c as ae,b as se,a2 as le,a0 as oe,j as ne,F as V,t as ie,g as de}from"./index.Cjri3_sP.js";import{_ as u}from"./BaseInfoItem.vue_vue_type_style_index_0_lang.DMYgpoJW.js";import{d as ue,l as p,g as ce,p as re,o as a,a as d,B as n,Q as v,i as s,x as e,e as f,f as l,S as m,H as M,R as pe,j as fe,_ as ve,r as C}from"./vue.BCHSKM6y.js";import{u as me}from"./usePayDetails.DH5-JNNp.js";import{a as ye,b as ge}from"./index.DllRNd8O.js";import"./right-arrow-icon.CaFxgYzl.js";const _e=["src"],be={class:"pay-details-box container-setPx"},he={class:"pydtl-val-item",style:{"font-weight":"500"}},Te={class:"pydtl-val-item"},ke={class:"pydtl-val-item pydtl-color-err"},xe={key:10,class:"pydtl-info-item"},De={class:"pydtl-info-title"},Be={class:"pydtl-info-desc"},Ce={key:11,class:"pydtl-info-item"},Ie=s("div",{class:"pydtl-info-title"},"驳回原因",-1),Pe={class:"pydtl-info-desc"},Re={key:12,class:"mpicture-info-item"},je=s("div",{class:"mpicture-info-title"},"照片",-1),He={class:"mpicture-info-img hk-flex"},$e=["src","onClick"],Fe={key:13,class:"footer-aux-btmbox"},Oe={key:14,class:"footer-btn-box"},we={key:15,class:"footer-btn-box"},Se={key:16,class:"footer-btn-box"},Ae={key:17,class:"footer-btn-box"},Le={key:18,class:"footer-btn-box"},Ne={class:"pay-details-dialog"},Ve={class:"pd-dialog-content"},Me={class:"pd-reject-box"},Ee={class:"pd-reject-header"},Ue={class:"pd-reject-content"},qe=s("div",{class:"short-tips-dialog"},[s("div",{class:"pd-dialog-content"}," 是否确定取消驳回？ ")],-1),ze=s("div",{class:"short-tips-dialog"},[s("div",{class:"pd-dialog-content"},"确定删除该条记录")],-1),Qe=s("div",{class:"short-tips-dialog"},[s("div",{class:"pd-dialog-content"},"确定作废该条记录")],-1),tt=ue({__name:"index",setup(Ge){const D=p(null),O=p(null),I=p(null),P=p(null),R=p(null),E=Z(),h=p(!1),j=p(!1),H=p(!1),w=p(null),U=fe("endPageLoading"),{comeback:$,pushName:S}=ae(),q=ve(),{hkMessage:g}=de(),{id:T}=q.query,{auth:_}=ee(),{applyInfo:t,getApplyDetails:A}=me(),B=p(""),i=ce(()=>!(t.typ!==2&&t.typ!==3)),{t:c}=se(),z=()=>{P.value.taggleDialog(!0)},Q=()=>{R.value.taggleDialog(!0)},G=()=>{I.value.taggleDialog(!0)},J=()=>{D.value.taggleDialog(!0)},L=()=>{O.value.taggleDialog(!0)},K=r=>{j.value=!0,ye({applicationId:T,homeId:t.homeId}).then(o=>{o.code===0?($(),g("删除成功"),D.value.taggleDialog(!1)):g(o.msg)}).finally(()=>{j.value=!1})},W=()=>{H.value=!0,ge({applicationId:T}).then(r=>{r.code===0?($(),g("作废成功"),I.value.taggleDialog(!1)):g(r.msg)}).finally(()=>{H.value=!1})},F=(r,o)=>{const b={applicationId:T,status:r};r===3&&(b.reason=B.value),h.value=!0,le(b).then(k=>{k.code===0?(A(),B.value="",g(o?"取消驳回成功":r===3?"驳回成功":"审核成功"),R.value.taggleDialog(!1),P.value.taggleDialog(!1),D.value.taggleDialog(!1),r===2&&!o&&$()):g(k.msg)}).finally(()=>{h.value=!1})},X=r=>{w.value.taggleModal(r)};return re(async()=>{A({doFun:U})}),(r,o)=>{const b=C("BaseHandleBtn"),k=C("BtmSingleBtn"),x=C("ConfrimPopAgain"),Y=C("PreviewImage");return a(),d(M,null,[n(te,{title:i.value?"出车详情":"支出详情"},{rightContent:v(()=>[e(t).status===1||e(t).status===2||e(t).status===4||e(t).status===6?(a(),d("img",{key:0,class:"pay-details-state-img",src:e(oe)(e(t).status),alt:"",srcset:""},null,8,_e)):l("",!0)]),_:1},8,["title"]),s("div",be,[n(u,{label:e(c)("base.nameTxt"),valData:e(t).name},null,8,["label","valData"]),i.value?l("",!0):(a(),f(u,{key:0,label:e(c)("base.payMoneyTxt")},{default:v(()=>[s("div",he,m(e(ne)(e(t).price.value))+" "+m(e(t).currency),1)]),_:1},8,["label"])),i.value?(a(),f(u,{key:1,label:e(c)("homeItem.address"),valData:e(t).address},null,8,["label","valData"])):l("",!0),i.value?(a(),f(u,{key:2,label:e(c)("homeItem.carTime"),valData:e(t).carTime},null,8,["label","valData"])):l("",!0),n(u,{label:e(c)("base.belongHomeTxt"),valData:e(t).homeName},null,8,["label","valData"]),i.value?l("",!0):(a(),f(u,{key:3,label:e(c)("base.gasTypeTxt"),valData:e(t).feeType},null,8,["label","valData"])),i.value?(a(),f(u,{key:4,label:e(c)("base.consignerTxt"),valData:e(t).client},null,8,["label","valData"])):l("",!0),i.value?(a(),f(u,{key:5,label:"开始出车",valData:{value:e(t).startTime,type:"dayjs"}},null,8,["valData"])):l("",!0),i.value?(a(),f(u,{key:6,label:"结束出车",valData:{value:e(t).endTime,type:"dayjs"}},null,8,["valData"])):l("",!0),i.value?l("",!0):(a(),f(u,{key:7,label:e(c)("base.payTimeTxt"),valData:e(t).time},null,8,["label","valData"])),e(t).status!==1?(a(),f(u,{key:8,label:e(c)("base.reviewerTxt")},{default:v(()=>[s("div",Te,m(e(t).auditIdentifyName),1)]),_:1},8,["label"])):l("",!0),e(t).status===3||e(t).status===4?(a(),f(u,{key:9,label:e(c)("base.statusTxt")},{default:v(()=>[s("div",ke,m(e(t).status===3?"驳回":"修改待审"),1)]),_:1},8,["label"])):l("",!0),!i.value&&e(t).desc?(a(),d("div",xe,[s("div",De,m(e(c)("base.descTxt")),1),s("div",Be,m(e(t).desc),1)])):l("",!0),e(t).status===3||e(t).status===4?(a(),d("div",Ce,[Ie,s("div",Pe,m(e(t).reason),1)])):l("",!0),i.value?l("",!0):(a(),d("div",Re,[je,s("div",He,[(a(!0),d(M,null,pe(e(t).photo,(y,N)=>(a(),d("img",{key:N,src:y,onClick:Je=>X(N)},null,8,$e))),128))])])),[1,3,4].includes(e(t).status)||[1].includes(e(t).identifyType)&&e(t).identifyType===e(_)||[2,3].includes(e(t).identifyType)&&e(t).identifyType===e(_)&&(e(t).status===1||e(t).status===4)||e(t).status===2&&[1,2].includes(e(_))&&![1,2].includes(e(t).identifyType)?(a(),d("div",Fe)):l("",!0),(e(t).status===1||e(t).status===4)&&!(e(E).userInfo.identifyId===e(t).identifyId&&e(_)===3)?(a(),d("div",Oe,[n(b,{firBtnTxt:"驳回修改",secBtnTxt:"审核通过",onOnFirBtnHandle:z,onOnSecBtnHandle:J})])):l("",!0),e(t).status===3?(a(),d("div",we,[n(k,{disable:!0,handleTxt:"取消驳回",onOnHandle:Q})])):l("",!0),[2,3].includes(e(t).identifyType)&&e(t).identifyType===e(_)&&(e(t).status===1||e(t).status===4)?(a(),d("div",Se,[n(b,{firBtnTxt:"删除记录",secBtnTxt:"修改记录",onOnFirBtnHandle:L,onOnSecBtnHandle:o[0]||(o[0]=y=>e(S)("BossRecordEdit",{id:e(T),homeId:e(t).homeId}))})])):l("",!0),[1].includes(e(t).identifyType)&&e(t).identifyType===e(_)?(a(),d("div",Ae,[n(b,{firBtnTxt:"删除记录",secBtnTxt:"修改记录",onOnFirBtnHandle:L,onOnSecBtnHandle:o[1]||(o[1]=y=>e(S)("BossRecordEdit",{id:e(T),homeId:e(t).homeId}))})])):l("",!0),e(t).status===2&&[1,2].includes(e(_))&&![1,2].includes(e(t).identifyType)?(a(),d("div",Le,[n(k,{disable:!0,handleTxt:"作废",onOnHandle:G})])):l("",!0)]),n(x,{ref_key:"confirmPopRef",ref:D,popClass:"pay-details-dialog-box",loading:h.value,customFooter:!0,onOnConfirm:o[2]||(o[2]=y=>F(2))},{default:v(()=>[s("div",Ne,[s("div",Ve,m(i.value?`审核通过${e(t).name.value}出车${e(V)(e(t).carTime.value)}`:`审核通过${e(t).name.value+e(t).feeType.value}支出${e(t).price.value+" "+e(t).currency}`),1)])]),_:1},8,["loading"]),n(x,{ref_key:"rejectPopRef",ref:P,popClass:"pay-details-reject-dialog",loading:h.value,onOnConfirm:o[4]||(o[4]=y=>F(3))},{default:v(()=>[s("div",Me,[s("div",Ee,m(i.value?`驳回${e(t).name.value}出车${e(V)(e(t).carTime.value)}`:`驳回${e(t).name.value+e(t).feeType.value}支出${e(t).price.value+" "+e(t).currency}`),1),s("div",Ue,[n(e(ie),{class:"pd-pz-field",rows:"4",placeholder:"批注:",modelValue:B.value,"onUpdate:modelValue":o[3]||(o[3]=y=>B.value=y),type:"textarea"},null,8,["modelValue"])])])]),_:1},8,["loading"]),n(x,{ref_key:"cancelRejectRef",ref:R,popClass:"short-tips-pop",loading:h.value,customFooter:!0,onOnConfirm:o[5]||(o[5]=y=>F(2,!0))},{default:v(()=>[qe]),_:1},8,["loading"]),n(x,{ref_key:"confirmDelPopRef",ref:O,popClass:"short-tips-pop",loading:j.value,customFooter:!0,onOnConfirm:K},{default:v(()=>[ze]),_:1},8,["loading"]),n(x,{ref_key:"confirmCelPopRef",ref:I,popClass:"short-tips-pop",loading:H.value,customFooter:!0,onOnConfirm:W},{default:v(()=>[Qe]),_:1},8,["loading"]),n(Y,{ref_key:"previewImgRef",ref:w,imageList:e(t).photo},null,8,["imageList"])],64)}}});export{tt as default};