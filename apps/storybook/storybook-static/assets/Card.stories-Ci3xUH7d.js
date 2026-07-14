import{j as e}from"./jsx-runtime-D_zvdyIk.js";function l({title:m,description:h,highlighted:r,actionLabel:g,onActionButtonClick:p}){return e.jsxs("section",{className:["flex h-full flex-col rounded-2xl border p-6 shadow-sm transition",r?"border-brand-primary bg-brand-surface":"border-slate-200 bg-white"].join(" "),children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-lg font-semibold tracking-tight text-slate-900",children:m}),e.jsx("p",{className:"text-sm leading-6 text-slate-600",children:h})]}),e.jsx("div",{className:"mt-6 flex items-center justify-end",children:e.jsx("button",{type:"button",onClick:p,className:["inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition",r?"bg-brand-primary text-white hover:opacity-90":"bg-slate-900 text-white hover:bg-slate-700"].join(" "),children:g})})]})}l.__docgenInfo={description:"",methods:[],displayName:"Card"};const f={title:"Components/Card",component:l,tags:["autodocs"],argTypes:{onActionButtonClick:{action:"action-button-click"}},args:{actionLabel:"Learn more"}},t={args:{title:"Simple card",description:"A clean card layout for standard content and lightweight actions.",highlighted:!1}},a={args:{title:"Highlighted card",description:"Use this presentation for elevated content or featured recommendations.",highlighted:!0}};var n,s,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: "Simple card",
    description: "A clean card layout for standard content and lightweight actions.",
    highlighted: false
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var o,c,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: "Highlighted card",
    description: "Use this presentation for elevated content or featured recommendations.",
    highlighted: true
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const x=["Default","Highlighted"];export{t as Default,a as Highlighted,x as __namedExportsOrder,f as default};
