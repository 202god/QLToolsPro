import{c as e}from"./store-8e5b6e13.js";import{w as s,k as i,l as t}from"./index-5edb5878.js";import{r as a,m as o,i as r,c as p,a2 as c,_ as l,a3 as n,f as m}from"./@vue-11129043.js";import"./ant-design-vue-93fc40b2.js";import"./@babel-eab0ef53.js";import"./resize-observer-polyfill-9cd09a67.js";import"./@ant-design-477981d5.js";import"./@ctrl-16df70a4.js";import"./dom-align-6a5270eb.js";import"./lodash-es-0ceb8576.js";import"./dayjs-c306acb6.js";import"./async-validator-604317c1.js";import"./scroll-into-view-if-needed-8ce8502d.js";import"./compute-scroll-into-view-cce79123.js";import"./pinia-1ca0c29b.js";import"./vue-demi-a81ff0a7.js";import"./axios-93d3568f.js";import"./qs-8fb0a9f1.js";import"./side-channel-ee547e73.js";import"./get-intrinsic-53528089.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-566c57e8.js";import"./object-inspect-5c6480f3.js";import"./vue-router-36397834.js";import"./vue3-colorpicker-e1559e09.js";import"./vue-types-0fd36d85.js";import"./is-plain-object-39134198.js";import"./tinycolor2-e232e212.js";import"./@vueuse-94329f85.js";import"./@aesoper-316802a3.js";import"./vue3-angle-2884cf46.js";import"./gradient-parser-c9367eab.js";import"./@popperjs-31624eb1.js";const j={class:"subscription-push flex align-items bg-cover"},u={key:0,class:"subscription-push-content"},d=l("div",{class:"push-text text-center"},"请使用手机微信扫码绑定",-1),v={__name:"index",setup(l){const v=a(null),b=a(""),f=a(""),h=a(""),g=()=>{t({splicingData:{wx_uid:h.value}}).then((s=>{e.initGopage()}))};v.value=setInterval((()=>{i({splicingData:{code:f.value}}).then((e=>{h.value=e,x(),g()})).catch((e=>{}))}),1e4);const x=()=>{v.value&&(clearInterval(v.value),v.value=null)};return o((()=>{x()})),s().then((e=>{b.value=e.shortUrl,f.value=e.code})),(e,s)=>{const i=n("a-image");return m(),r("div",j,[b.value?(m(),r("div",u,[p(i,{width:"100%",src:b.value},null,8,["src"]),d])):c("",!0)])}}};export{v as default};