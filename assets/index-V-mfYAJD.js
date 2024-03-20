import{j as t,r as v,a as E}from"./react-s7AnpVDj.js";import{c as V}from"./react-dom-CKXDipwq.js";import{t as M,A as $,F as j,T as d,M as A,C as q,R as P,a as u,b as g,S as Q,c as W,B as R,d as J,I as U,e as Y}from"./antd-D1xuqzUk.js";import{L as T,u as Z,c as ee,R as te}from"./react-router-dom-DeIrGFgf.js";import{T as re,n as S,c as m,a as C}from"./@emotion-CIkC2Lej.js";import{b as I,O as se,a as H,f as oe}from"./react-router-DMp-8DIK.js";import{u as ie}from"./ahooks-DUQsLbcx.js";import"./classnames-BK5ccKcQ.js";import"./scheduler-CzFDRTuY.js";import"./rc-util-Dqmj6WWY.js";import"./@babel-CiGj-Vf4.js";import"./@ant-design-CDlenFGn.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@ctrl-DOFZgDuz.js";import"./rc-resize-observer-tmnmPnkQ.js";import"./rc-motion-Co0uMPFX.js";import"./rc-select-DJBZ_0ok.js";import"./rc-overflow-DLJuNToY.js";import"./@rc-component-DnmBSeby.js";import"./rc-virtual-list-DTDjHSRQ.js";import"./rc-menu-C-qFIA-H.js";import"./rc-tabs-C2vneC9u.js";import"./rc-dropdown-Bk6xOItt.js";import"./rc-field-form-C4pOR3i0.js";import"./async-validator-DKvM95Vc.js";import"./rc-dialog-D3bsXS6K.js";import"./copy-to-clipboard-iuHVwNMD.js";import"./toggle-selection-BHUZwh74.js";import"./rc-pagination-CBIGTaCR.js";import"./rc-picker-3Ji_rnqY.js";import"./rc-tooltip-fmiaiyA6.js";import"./rc-textarea-mb8KIstp.js";import"./rc-input-C7m54Npe.js";import"./@remix-run-DFBAe09s.js";import"./stylis-NkKAe6Bn.js";import"./lodash-CropheYc.js";import"./tslib-BSRwFwqr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function c(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=c(i);fetch(i.href,s)}})();const _=64,l={gap4:4,gap12:12,gap32:32,padding96:96},ne={token:{colorPrimary:"#2b6cb0",colorInfo:"#2b6cb0",colorSuccess:"#38a169",colorWarning:"#d69e2e",colorError:"#e53e3e",colorTextBase:"#2d3748",fontSize:16,colorBgContainer:"#ffffff",fontSizeHeading1:32,fontSizeHeading2:24,fontSizeHeading3:16,fontSizeSM:12,fontSizeLG:20,fontSizeXL:24,borderRadius:8},components:{Menu:{colorBgContainer:"transparent",itemPaddingInline:"20px 0"},Layout:{headerBg:"transparent",footerBg:"transparent",bodyBg:"transparent",headerHeight:_,headerPadding:0,footerPadding:0},Card:{colorBorderSecondary:M.getDesignToken().colorBorder,borderRadiusLG:4},Checkbox:{borderRadiusSM:4}}},ce=({children:e})=>{const{token:r}=M.useToken();return t.jsx(re,{theme:r,children:e})},ae=[{id:1,title:"лего",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",cart:!1,count:11,category:"constructor",price:600,isOrdered:!1},{id:2,title:"конструктор",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",cart:!1,count:10,category:"constructor",price:100,isOrdered:!1},{id:3,title:"лего дупло",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",cart:!1,count:0,category:"constructor",price:200,isOrdered:!1},{id:4,title:"игрушка мягка",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",cart:!1,count:2,category:"girls",price:2300,isOrdered:!1},{id:5,title:"игрушка плюшевая",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",cart:!1,count:6,category:"girls",price:1200,isOrdered:!1},{id:6,title:"машинка-грузовик",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",cart:!1,count:0,category:"boys",price:1e3,isOrdered:!1},{id:7,title:"паровоз",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",cart:!1,count:8,category:"boys",price:600,isOrdered:!1},{id:8,title:"кукла",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",cart:!1,count:0,category:"girls",price:700,isOrdered:!1},{id:9,title:"машинка",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",cart:!1,count:10,category:"boys",price:900,isOrdered:!1},{id:10,title:"шашки",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",cart:!1,count:8,category:"boys",price:800,isOrdered:!1}];var p=(e=>(e.Constructor="constructor",e.ForBoys="boys",e.ForGirls="girls",e))(p||{});const h={products:"/",cart:"/cart"},y=S.div`
  display: grid;
  margin: 0 auto;
  max-width: 1320px;
  width: 100%;

  @media screen and (max-width: ${({theme:e})=>e.screenXXL}px) {
    max-width: 1140px;
  }

  @media screen and (max-width: ${({theme:e})=>e.screenXL}px) {
    max-width: 960px;
  }

  @media screen and (max-width: ${({theme:e})=>e.screenLG}px) {
    max-width: 720px;
  }

  @media screen and (max-width: ${({theme:e})=>e.screenMD}px) {
    padding: 0 40px;
  }

  @media screen and (max-width: ${({theme:e})=>e.screenSM}px) {
    padding: 0 20px;
  }
`;S.div`
  display: grid;
  padding: ${({theme:e})=>e.paddingXL}px;
  width: 40%;

  border: 1px solid ${({theme:e})=>e.colorBorder};

  border-radius: ${({theme:e})=>e.borderRadius}px;
  gap: ${l.gap12}px;

  @media screen and (max-width: ${({theme:e})=>e.screenXL}px) {
    width: 60%;
  }

  @media screen and (max-width: ${({theme:e})=>e.screenMD}px) {
    width: 100%;
  }
`;const le=e=>m`
  align-items: center;
  display: flex;
  height: ${_}px;

  border-top: 1px solid ${e.colorBorder};
`,de=()=>{const e=C();return t.jsx($.Footer,{className:le(e),children:t.jsx(y,{children:t.jsxs(j,{align:"center",justify:"space-between",children:[t.jsx(z,{}),t.jsx(d.Text,{children:"© Copyright PRODUCTS"})]})})})},pe=[{title:"Товары",route:h.products},{title:"Корзина",route:h.cart}],ue=pe.map(e=>({key:e.route,label:t.jsx(T,{to:e.route,children:e.title})})),me=e=>m`
  border-bottom: 1px solid ${e.colorBorder};
`,he=m`
  justify-content: end;
  min-width: 0;

  border-bottom: none;
`,xe=S.div`
  display: grid;
  grid-template-columns: auto 1fr;
`,ge=()=>{const e=I(),r=C();return t.jsx($.Header,{className:me(r),children:t.jsx(y,{children:t.jsxs(xe,{children:[t.jsx(z,{}),t.jsx(A,{mode:"horizontal",selectedKeys:[e.pathname],items:ue,className:he})]})})})},fe=m`
  display: flex;
  min-height: 100vh;

  flex-direction: column;
`,je=m`
  display: grid;
  flex-grow: 1;
`,ye=()=>t.jsxs($,{className:fe,children:[t.jsx(ge,{}),t.jsx("div",{className:je,children:t.jsx(se,{})}),t.jsx(de,{})]}),be=e=>m`
  font-weight: 500;
  word-break: keep-all;

  color: ${e.colorPrimary};
`,z=()=>{const e=C();return t.jsx(T,{to:h.products,className:be(e),children:"PRODUCTS"})},F=S.section`
  align-content: center;
  display: grid;
  justify-items: ${({justify:e})=>e||"start"};
  padding: ${l.padding96}px 0;

  gap: ${({gap:e})=>e||0}px;
`,we=m`
  &:hover {
    box-shadow: 2px 2px 24px 2px rgba(0, 0, 0, 0.08);
  }
`,G=({data:e,onClick:r})=>t.jsx(q,{title:e.title,hoverable:!0,className:we,onClick:r,children:t.jsxs(P,{gutter:[l.gap12,l.gap12],children:[t.jsx(u,{children:t.jsxs(j,{wrap:"wrap",children:[e.count>0?t.jsxs(g,{color:"blue",children:["в наличии: ",e.count," шт."]}):t.jsx(g,{color:"red",children:"нет в наличии"}),e.cart?t.jsxs(g,{color:"blue",children:["в корзине: ",e.cart.count," шт."]}):null]})}),t.jsx(u,{span:24,children:t.jsx(d.Text,{children:e.descr})}),t.jsxs(u,{span:24,children:[t.jsx(d.Text,{strong:!0,children:"Цена: "}),t.jsxs(d.Text,{children:[e.price," ₽"]})]})]})}),Pe=m`
  display: grid;

  gap: ${l.gap12}px;
`,O=({label:e,...r})=>{const c="select_"+v.useId();return t.jsxs("div",{className:Pe,children:[t.jsx("label",{htmlFor:c,children:e}),t.jsx(Q,{...r,id:c})]})},Se=m`
  width: 100%;
  overflow: auto;
`,Ce=({...e})=>t.jsx("div",{className:Se,children:t.jsx(W,{...e})}),Le=({data:e})=>{const r=H(),c=n=>r(`${h.products}${n}`);return t.jsx(y,{children:t.jsxs(F,{gap:32,justify:"start",children:[t.jsx(d.Title,{level:2,children:"Товары"}),t.jsx(P,{gutter:[l.gap12,l.gap12],children:e.filter(n=>n.cart).map(n=>t.jsx(u,{sm:24,lg:12,children:t.jsx(G,{data:n,onClick:()=>c(n.id)})},n.id))})]})})},Oe=({data:e,addToCart:r,order:c})=>{const{productId:n}=oe(),[i,s]=v.useState(!1),a=()=>s(!1);if(!n)return null;const o=e.find(B=>B.id===+n);return o?t.jsxs(y,{children:[t.jsxs(F,{gap:32,children:[t.jsxs(P,{gutter:[l.gap12,l.gap12],children:[t.jsx(u,{span:24,children:t.jsx(d.Title,{level:2,children:o.title})}),t.jsx(u,{span:24,children:t.jsxs(j,{wrap:"wrap",children:[o.count>0?t.jsx(g,{color:"blue",children:"в наличии"}):t.jsx(g,{color:"red",children:"нет в наличии"}),o.cart?t.jsxs(g,{color:"blue",children:["в корзине: ",o.cart.count," шт."]}):null]})}),t.jsx(u,{span:24,children:t.jsx(d.Text,{children:o.descr})}),t.jsxs(u,{span:24,children:[t.jsx(d.Text,{strong:!0,children:"Цена: "}),t.jsxs(d.Text,{children:[o.price," ₽"]})]}),t.jsx(u,{span:24,children:t.jsxs(j,{gap:l.gap12,children:[o.cart?null:t.jsx(R,{type:"primary",onClick:()=>r(+n),children:"В корзину"}),o.count===0&&!o.isOrdered?t.jsx(R,{type:"primary",onClick:()=>{s(!0)},children:"Заказать"}):null]})})]}),t.jsx(T,{to:h.products,children:"← Ко всем товарам"})]}),t.jsx(J,{title:"Заказ",open:i,okText:"Заказать",onOk:()=>{c(+n),a()},onCancel:a,cancelText:"Отменить",footer:(B,{OkBtn:K,CancelBtn:D})=>t.jsxs(t.Fragment,{children:[t.jsx(K,{}),t.jsx(D,{})]}),children:t.jsx(d.Text,{children:"Вы хотите заказать?"})})]}):null},L="",f={asc:"asc",desc:"desc"},b=[{key:L,label:"Все"},{key:p.Constructor,label:"Конструктор"},{key:p.ForBoys,label:"Для мальчиков"},{key:p.ForGirls,label:"Для девочек"}],x=[{value:L,label:"Не сортировать"},{value:f.asc,label:"По возрастанию"},{value:f.desc,label:"По убыванию"}],w=[{value:L,label:"Не сортировать"},{value:f.asc,label:"По алфавиту"},{value:f.desc,label:"В обратном порядке"}],k=(e,r)=>(r[1]===L?e.delete(r[0]):e.set(r[0],r[1]),e),X={_search:{fn:(e,r)=>e.title.toLowerCase().includes(r)},_type:{fn:(e,r)=>!(r===p.Constructor&&e.category!==p.Constructor||r===p.ForBoys&&e.category!==p.ForBoys||r===p.ForGirls&&e.category!==p.ForGirls)}},N={_price:"price",_title:"title",_balance:"count"},ve=(e,r,c)=>{const{key:n,order:i}=c;let s=0;return e[n]>r[n]?s=1:e[n]<r[n]&&(s=-1),s*(i===f.asc?1:-1)},$e=e=>(r,c)=>e.reduce((n,i)=>n||ve(r,c,i),0),Te=e=>r=>e.every(c=>X[c.key].fn(r,c.query)),Fe=e=>e in X,Be=e=>e in f,Re=(e,r)=>{const c=[],n=[];e.forEach((s,a)=>{if(console.log(s,a),Fe(a))c.push({key:a,query:s});else if(a in N&&Be(s)){const o=N[a];n.push({key:o,order:s})}});let i=r;if(c.length>0){const s=Te(c);i=i.filter(s)}if(n.length>0){const s=$e(n);i=i.sort(s)}return i},ke=()=>{const[e,r]=Z(I().search),{run:c}=ie((s,a)=>{n(s,a),r(o=>k(o,[s,a]))},{wait:400}),n=(s,a)=>r(o=>k(o,[s,a]));return{setParam:n,onChange:s=>c("_search",s.target.value.toLowerCase()),searchParams:e}},Ne=e=>m`
  width: 52%;

  @media screen and (max-width: ${e.screenMD}px) {
    width: 100%;
  }
`,Me=({data:e})=>{const r=H(),c=C(),n=o=>r(`${h.products}${o}`),{onChange:i,setParam:s,searchParams:a}=ke();return t.jsx(y,{children:t.jsxs(F,{gap:32,justify:"start",children:[t.jsx(d.Title,{level:2,children:"Товары"}),t.jsx(U.Search,{placeholder:"Введите название товара",enterButton:"Искать",className:Ne(c),onChange:i,allowClear:!0}),t.jsx(Ce,{items:b,type:"card",onChange:o=>s("_type",o),defaultActiveKey:a.get("_type")??(b==null?void 0:b[0].key)}),t.jsxs(j,{wrap:"wrap",gap:l.gap12,children:[t.jsx(O,{label:"Сортировать по цене",options:x,defaultValue:a.get("_price")??(x==null?void 0:x[0].value),onChange:o=>s("_price",o)}),t.jsx(O,{label:"Сортировать по названию",options:w,defaultValue:a.get("_title")??(w==null?void 0:w[0].value),onChange:o=>s("_title",o)}),t.jsx(O,{label:"Сортировать по остатку",options:x,defaultValue:a.get("_balance")??(x==null?void 0:x[0].value),onChange:o=>s("_balance",o)})]}),t.jsx(P,{gutter:[l.gap12,l.gap12],children:Re(a,e).map(o=>t.jsx(u,{sm:24,lg:12,children:t.jsx(G,{data:o,onClick:()=>n(o.id)})},o.id))})]})})},Ie=(e,r,c)=>ee([{path:"/",element:t.jsx(ye,{}),children:[{path:h.products,element:t.jsx(Me,{data:e})},{path:`${h.products}:productId`,element:t.jsx(Oe,{data:e,addToCart:r,order:c})},{path:`${h.cart}`,element:t.jsx(Le,{data:e})}]}]),He=()=>{const[e,r]=v.useState(ae),c=i=>{e.forEach((s,a)=>{if(s.id===i){r(o=>(o[a].cart={count:1},[...o]));return}})},n=i=>{e.forEach((s,a)=>{if(s.id===i){r(o=>(o[a].isOrdered=!0,[...o]));return}})};return t.jsx(Y,{theme:ne,children:t.jsx(ce,{children:t.jsx(te,{router:Ie(e,c,n)})})})};V.createRoot(document.getElementById("root")).render(t.jsx(E.StrictMode,{children:t.jsx(He,{})}));
