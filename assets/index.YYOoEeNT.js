import{aj as I,ak as v,al as y,am as o,an as w,ao as x,ap as B,aq as T,ar as O,J as m,as as K,at as N,au as _}from"./index.Cjri3_sP.js";import{d as q,B as n,C as D,q as E}from"./vue.BCHSKM6y.js";const[H,a]=I("action-sheet"),j=v({},y,{title:String,round:o,actions:w(),closeIcon:x("cross"),closeable:o,cancelText:String,description:String,closeOnPopstate:o,closeOnClickAction:Boolean,safeAreaInsetBottom:o}),F=[...B,"round","closeOnPopstate","safeAreaInsetBottom"];var J=q({name:H,props:j,emits:["select","cancel","update:show"],setup(t,{slots:c,emit:r}){const l=e=>r("update:show",e),i=()=>{l(!1),r("cancel")},f=()=>{if(t.title)return n("div",{class:a("header")},[t.title,t.closeable&&n(m,{name:t.closeIcon,class:[a("close"),K],onClick:i},null)])},b=()=>{if(c.cancel||t.cancelText)return[n("div",{class:a("gap")},null),n("button",{type:"button",class:a("cancel"),onClick:i},[c.cancel?c.cancel():t.cancelText])]},h=e=>{if(e.icon)return n(m,{class:a("item-icon"),name:e.icon},null)},C=(e,s)=>e.loading?n(N,{class:a("loading-icon")},null):c.action?c.action({action:e,index:s}):[n("span",{class:a("name")},[e.name]),e.subname&&n("div",{class:a("subname")},[e.subname])],k=(e,s)=>{const{color:P,loading:d,callback:u,disabled:p,className:g}=e,S=()=>{p||d||(u&&u(e),t.closeOnClickAction&&l(!1),E(()=>r("select",e,s)))};return n("button",{type:"button",style:{color:P},class:[a("item",{loading:d,disabled:p}),g],onClick:S},[h(e),C(e,s)])},A=()=>{if(t.description||c.description){const e=c.description?c.description():t.description;return n("div",{class:a("description")},[e])}};return()=>n(O,D({class:a(),position:"bottom","onUpdate:show":l},T(t,F)),{default:()=>{var e;return[f(),A(),n("div",{class:a("content")},[t.actions.map(k),(e=c.default)==null?void 0:e.call(c)]),b()]}})}});const V=_(J);export{V as A};