import{R as e}from"./index-Y0gaZlcC.js";function d({title:m,description:g,highlighted:r,actionLabel:h,onActionButtonClick:p}){return e.createElement("section",{className:["flex h-full flex-col rounded-2xl border p-6 shadow-sm transition",r?"border-brand-primary bg-brand-surface":"border-slate-200 bg-white"].join(" ")},e.createElement("div",{className:"space-y-3"},e.createElement("h3",{className:"text-lg font-semibold tracking-tight text-slate-900"},m),e.createElement("p",{className:"text-sm leading-6 text-slate-600"},g)),e.createElement("div",{className:"mt-6 flex items-center justify-end"},e.createElement("button",{type:"button",onClick:p,className:["inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition",r?"bg-brand-primary text-white hover:opacity-90":"bg-slate-900 text-white hover:bg-slate-700"].join(" ")},h)))}d.__docgenInfo={description:"",methods:[],displayName:"Card"};const f={title:"Components/Card",component:d,tags:["autodocs"],argTypes:{onActionButtonClick:{action:"action-button-click"}},args:{actionLabel:"Learn more"}},t={args:{title:"Simple card",description:"A clean card layout for standard content and lightweight actions.",highlighted:!1}},a={args:{title:"Highlighted card",description:"Use this presentation for elevated content or featured recommendations.",highlighted:!0}};var n,o,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: "Simple card",
    description: "A clean card layout for standard content and lightweight actions.",
    highlighted: false
  }
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,c,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: "Highlighted card",
    description: "Use this presentation for elevated content or featured recommendations.",
    highlighted: true
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const b=["Default","Highlighted"];export{t as Default,a as Highlighted,b as __namedExportsOrder,f as default};
