import{b as e,_ as t}from"./upload-data-616e6a74.js";import{h as a}from"./index-e150f431.js";import{r as i,k as o,a4 as s,a6 as r,a3 as n,f as l,c as p,_ as d,a5 as m,L as c}from"./@vue-11129043.js";import"./pinia-1ca0c29b.js";import"./vue-demi-a81ff0a7.js";import"./store-bc016a64.js";import"./_plugin-vue_export-helper-9b9a8a5b.js";import"./ant-design-vue-05054bf0.js";import"./@babel-eab0ef53.js";import"./resize-observer-polyfill-9cd09a67.js";import"./@ant-design-477981d5.js";import"./@ctrl-16df70a4.js";import"./dom-align-6a5270eb.js";import"./lodash-es-0ceb8576.js";import"./dayjs-04e8f6f9.js";import"./async-validator-604317c1.js";import"./scroll-into-view-if-needed-8ce8502d.js";import"./compute-scroll-into-view-cce79123.js";import"./axios-93d3568f.js";import"./qs-8fb0a9f1.js";import"./side-channel-ee547e73.js";import"./get-intrinsic-53528089.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-566c57e8.js";import"./object-inspect-5c6480f3.js";import"./vue-router-36397834.js";import"./vue3-colorpicker-e1559e09.js";import"./vue-types-0fd36d85.js";import"./is-plain-object-39134198.js";import"./tinycolor2-e232e212.js";import"./@vueuse-94329f85.js";import"./@aesoper-316802a3.js";import"./vue3-angle-2884cf46.js";import"./gradient-parser-c9367eab.js";import"./@popperjs-31624eb1.js";const u={class:"home-logo text-center font-weight"},j={style:{padding:"24px",minHeight:"380px"},class:"flex flex-column align-center"},f=["innerHTML"],g=c("> "),b=c(" QingLongTools ©2022 Created by DaLong "),v={__name:"home",setup(c){const v=i("");i(["2"]);const y=i(""),h=o({webData:{loading:!1,data:{}}});return a({splicingData:{key:"webTitle"}}).then((e=>{v.value=e.value})),a({splicingData:{key:"notice"}}).then((e=>{h.webData.data=e.value,h.webData.loading=!1})),a({splicingData:{key:"backgroundImage"}}).then((e=>{y.value=e.value,document.getElementById("app").style.backgroundImage="url("+y.value+")"})),(a,i)=>{const o=n("a-layout-header"),c=n("a-layout-content"),y=n("a-layout-footer"),x=n("a-layout");return l(),s(x,null,{default:r((()=>[p(o,{style:{position:"fixed",zIndex:1,width:"100%"}},{default:r((()=>[d("div",u,m(v.value),1)])),_:1}),p(c,{style:{padding:"20px 50px 0 50px",marginTop:"64px"}},{default:r((()=>[d("div",j,[p(e,{title:"网站公告",loading:h.webData.loading,isLoad:!1},{content:r((({height:e})=>[d("div",{innerHTML:h.webData.data},null,8,f)])),_:1},8,["loading"]),p(e,{title:"变量提交",loading:!1,isLoad:!1},{content:r((({height:e})=>[p(t)])),default:r((()=>[g])),_:1})])])),_:1}),p(y,{style:{textAlign:"center"}},{default:r((()=>[b])),_:1})])),_:1})}}};export{v as default};