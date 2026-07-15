import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-Y0gaZlcC.js";function d(...a){return a.filter(Boolean).join(" ")}function c({items:a,activeValue:s,onChange:n,className:b,tabClassName:g}){return e.jsx("div",{className:d("flex w-full items-center gap-0",b),children:a.map(t=>{const r=t.value===s;return e.jsxs("button",{type:"button",onClick:()=>n(t.value),className:d("flex-1 min-w-0 h-32 flex items-center justify-center gap-6 px-10 py-0 rounded-full momo-typo-label-lg font-medium transition-all duration-200 ease-out",r?"bg-surface-default text-momo-blue shadow-[0_1px_2px_rgba(0,0,0,0.08)]":"text-text-secondary hover:text-momo-blue dark:hover:text-white",g),"aria-pressed":r,children:[e.jsx("span",{className:"truncate",children:t.label}),typeof t.count=="number"?e.jsx("span",{className:d("min-w-20 h-20 px-2 rounded-full momo-typo-label-md flex items-center justify-center transition-all duration-200",r?"bg-momo-yellow text-momo-blue":"bg-surface-secondary text-text-secondary"),children:t.count}):null]},t.value)})})}c.__docgenInfo={description:"",methods:[],displayName:"Tabs"};const N={title:"Components/Tabs",component:c,tags:["autodocs"],parameters:{layout:"padded"},args:{items:[{value:"single",label:"Single Transactions",count:5},{value:"bulk",label:"Bulk Transactions",count:5}],activeValue:"single"}},l={render:a=>{const[s,n]=v.useState(a.activeValue);return e.jsxs("div",{className:"max-w-[760px] space-y-4 text-text-default",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h2",{className:"momo-typo-heading-sm text-momo-blue dark:text-white",children:"Tabs / Transaction Mode Switcher"}),e.jsx("p",{className:"momo-typo-label-md text-text-secondary",children:"Rounded segmented tab control with inline count badges."})]}),e.jsx("div",{className:"h-[36px] rounded-full bg-surface-secondary p-2",children:e.jsx(c,{...a,activeValue:s,onChange:n})})]})}},o={args:{items:[{value:"single",label:"Single",count:4},{value:"bulk",label:"Bulk",count:3},{value:"scheduled",label:"Scheduled",count:2}],activeValue:"bulk"},render:a=>{const[s,n]=v.useState(a.activeValue);return e.jsxs("div",{className:"max-w-[760px] space-y-4 text-text-default",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h2",{className:"momo-typo-heading-sm text-momo-blue dark:text-white",children:"Tabs / Three Item Variant"}),e.jsx("p",{className:"momo-typo-label-md text-text-secondary",children:"Example of extending the same tab pattern to three options."})]}),e.jsx("div",{className:"h-[36px] rounded-full bg-surface-secondary p-2",children:e.jsx(c,{...a,activeValue:s,onChange:n})})]})}};var i,u,m;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [active, setActive] = useState(args.activeValue);
    return <div className="max-w-[760px] space-y-4 text-text-default">
        <div className="space-y-2">
          <h2 className="momo-typo-heading-sm text-momo-blue dark:text-white">Tabs / Transaction Mode Switcher</h2>
          <p className="momo-typo-label-md text-text-secondary">
            Rounded segmented tab control with inline count badges.
          </p>
        </div>
        <div className="h-[36px] rounded-full bg-surface-secondary p-2">
          <Tabs {...args} activeValue={active} onChange={setActive} />
        </div>
      </div>;
  }
}`,...(m=(u=l.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var x,p,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: [{
      value: "single",
      label: "Single",
      count: 4
    }, {
      value: "bulk",
      label: "Bulk",
      count: 3
    }, {
      value: "scheduled",
      label: "Scheduled",
      count: 2
    }],
    activeValue: "bulk"
  },
  render: args => {
    const [active, setActive] = useState(args.activeValue);
    return <div className="max-w-[760px] space-y-4 text-text-default">
        <div className="space-y-2">
          <h2 className="momo-typo-heading-sm text-momo-blue dark:text-white">Tabs / Three Item Variant</h2>
          <p className="momo-typo-label-md text-text-secondary">
            Example of extending the same tab pattern to three options.
          </p>
        </div>
        <div className="h-[36px] rounded-full bg-surface-secondary p-2">
          <Tabs {...args} activeValue={active} onChange={setActive} />
        </div>
      </div>;
  }
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const j=["Default","ThreeTabs"];export{l as Default,o as ThreeTabs,j as __namedExportsOrder,N as default};
