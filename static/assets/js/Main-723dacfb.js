import{_ as e,a as s}from"./footer-a4f2d620.js";import{r as t}from"./index-5edb5878.js";import{c as a}from"./store-8e5b6e13.js";import{s as i}from"./pinia-1ca0c29b.js";import{a7 as o,am as l,an as r}from"./@ant-design-477981d5.js";import{r as n,o as p,a4 as c,a6 as m,a3 as d,f as u,c as j,u as f,i as b,a5 as g,M as v,$ as h,_ as y,L as _}from"./@vue-11129043.js";import"./recharge-pop-8b070e01.js";import"./p-center-modal-84ed26df.js";import"./_plugin-vue_export-helper-9b9a8a5b.js";import"./recharge-data-b14aa3fe.js";import"./common-3c8652c5.js";import"./ant-design-vue-93fc40b2.js";import"./@babel-eab0ef53.js";import"./resize-observer-polyfill-9cd09a67.js";import"./@ctrl-16df70a4.js";import"./dom-align-6a5270eb.js";import"./lodash-es-0ceb8576.js";import"./dayjs-c306acb6.js";import"./async-validator-604317c1.js";import"./scroll-into-view-if-needed-8ce8502d.js";import"./compute-scroll-into-view-cce79123.js";import"./axios-93d3568f.js";import"./qs-8fb0a9f1.js";import"./side-channel-ee547e73.js";import"./get-intrinsic-53528089.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-566c57e8.js";import"./object-inspect-5c6480f3.js";import"./vue-router-36397834.js";import"./vue3-colorpicker-e1559e09.js";import"./vue-types-0fd36d85.js";import"./is-plain-object-39134198.js";import"./tinycolor2-e232e212.js";import"./@vueuse-94329f85.js";import"./@aesoper-316802a3.js";import"./vue3-angle-2884cf46.js";import"./gradient-parser-c9367eab.js";import"./@popperjs-31624eb1.js";import"./vue-demi-a81ff0a7.js";const k={key:1,class:"page-logo text-center font-weight"},w=y("span",null,"变量提交",-1),x=y("span",null,"充值服务",-1),C=_("操作记录"),H=_("充值记录"),R=_("上传记录"),S={__name:"Main",setup(_){const S=n(a.pageKeys),K=n(null),{isMobile:P,isCollapsed:M}=i(a);p((()=>{let e=K.value.clientHeight||K.value.$el.clientHeight;a.setRouterPageHeight(e-15),window.addEventListener("resize",(()=>{let e=K.value.clientHeight||K.value.$el.clientHeight;a.setRouterPageHeight(e-15)}))}));const $=(e,s)=>{P.value&&a.setCollapsed(!0),t.push({name:e})};return(t,i)=>{const n=d("a-image"),p=d("a-menu-item"),_=d("a-sub-menu"),P=d("a-menu"),z=d("a-layout-sider"),L=d("router-view"),U=d("a-layout-content"),q=d("a-layout");return u(),c(q,{style:{"min-height":"100vh"}},{default:m((()=>[j(z,{collapsed:f(M),"onUpdate:collapsed":i[5]||(i[5]=e=>v(M)?M.value=e:null),class:h(f(a).siteSettings.web_bg?"slide-hide-bg":""),collapsible:""},{default:m((()=>[f(a).siteSettings.web_logo?(u(),c(n,{key:0,width:70,preview:!1,src:f(a).siteSettings.web_logo},null,8,["src"])):(u(),b("div",k,g(f(a).siteSettings.web_title||"青龙Tools Pro"),1)),j(P,{selectedKeys:S.value,"onUpdate:selectedKeys":i[4]||(i[4]=e=>S.value=e),theme:"dark",mode:"inline"},{default:m((()=>[j(p,{key:"1",onClick:i[0]||(i[0]=e=>$("variableSubmission"))},{default:m((()=>[j(f(o)),w])),_:1}),j(p,{key:"2",onClick:i[1]||(i[1]=e=>$("recharge"))},{default:m((()=>[j(f(l)),x])),_:1}),j(_,{key:"sub2"},{icon:m((()=>[j(f(r))])),title:m((()=>[C])),default:m((()=>[j(p,{key:"4",onClick:i[2]||(i[2]=e=>$("rechargeRecord"))},{default:m((()=>[H])),_:1}),j(p,{key:"5",onClick:i[3]||(i[3]=e=>$("uploadRecords"))},{default:m((()=>[R])),_:1})])),_:1})])),_:1},8,["selectedKeys"])])),_:1},8,["collapsed","class"]),j(q,null,{default:m((()=>[j(e),j(U,null,{default:m((()=>[y("div",{style:{height:"100%"},ref_key:"routerPageRef",ref:K,class:"flex flex-column page-container"},[j(L)],512)])),_:1}),j(s)])),_:1})])),_:1})}}};export{S as default};