import{d as P,U as B,f as F,t as h,M as U,u as A,W as I,a as M}from"./index.C__3lhMr.js";import{l as R,r as k,b as x,a as z,o as E,K as w,L as f,M as p,k as c,u as e,N as t,O as u,F as C,D as g,V as H}from"./vue.C2TeXnf4.js";const K={class:"register-box modify-pwd-box"},L={class:"reg-form-box"},O={class:"reg-form-item hk-flex hk-items-center"},W={class:"reg-area-span"},$={class:"reg-field-box"},j={class:"reg-form-item rf-mt-24 hk-flex hk-items-center"},q={class:"reg-field-box"},X=R({__name:"modifyPwd",setup(G){const{t:n}=A();let a=null;const{pushName:V}=P(),{hkMessage:i}=M(),v=k(null),o=x({account:"",verCode:""}),D=z(()=>!!o.account&&!!o.verCode),m=k(86),s=x({isCountdown:!1,countdownNum:60}),S=()=>{v.value.taggleVisible(!0)},b=B(()=>{if(!o.account){i("请填写手机号码");return}s.isCountdown||(s.isCountdown=!0,I({phone:"+"+m.value+o.account}).then(d=>{d.code===0?_():i(d.msg)}).catch(d=>{i(d)}))},500),_=()=>{a=setTimeout(()=>{s.countdownNum>=1?(s.countdownNum--,_()):(s.isCountdown=!1,s.countdownNum=60,clearTimeout(a),a=null)},1e3)},N=()=>{V("SetPwd",{tel:"+"+m.value+o.account,code:o.verCode,type:2})};return E(()=>{a&&(clearTimeout(a),a=null)}),(d,l)=>{const T=w("SvgIcon"),y=w("AreaCodeSelect");return f(),p(C,null,[c(F,{class:"login-module-header",title:e(n)("base.header.findPwd"),comebackColor:"#0D0D0D"},null,8,["title"]),t("div",K,[t("div",L,[t("div",O,[t("div",{class:"reg-area hk-flex hk-items-center",onClick:S},[t("span",W,"+"+u(m.value),1),c(T,{iconClass:"down-select-svg",size:"9",color:"#0D0D0D"})]),t("div",$,[c(e(h),{modelValue:o.account,"onUpdate:modelValue":l[0]||(l[0]=r=>o.account=r),placeholder:e(n)("base.regTelPldtxt"),clearable:"","clear-icon":"cross"},null,8,["modelValue","placeholder"])])]),t("div",j,[t("div",q,[c(e(h),{modelValue:o.verCode,"onUpdate:modelValue":l[1]||(l[1]=r=>o.verCode=r),placeholder:e(n)("base.regVerCodePldtxt"),clearable:"","clear-icon":"cross"},null,8,["modelValue","placeholder"])]),t("div",{class:"get-vcode-box",onClick:l[2]||(l[2]=(...r)=>e(b)&&e(b)(...r))},[s.isCountdown?(f(),p(C,{key:0},[g(u(s.countdownNum)+" ",1),t("span",null,u(e(n)("base.vCodeSendTxt")),1)],64)):(f(),p(C,{key:1},[g(u(e(n)("base.getVcodeTxt")),1)],64))])])]),c(e(U),{class:"reg-step-btn",disabled:!D.value,type:"primary",onClick:N},{default:H(()=>[g(u(e(n)("base.checkingTxt")),1)]),_:1},8,["disabled"])]),c(y,{ref_key:"areaCodeSelectRef",ref:v},null,512)],64)}}});export{X as default};
