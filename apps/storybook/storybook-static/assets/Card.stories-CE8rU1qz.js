import{j as e}from"./jsx-runtime-D_zvdyIk.js";function u(...t){return t.filter(Boolean).join(" ")}const b="rounded-[10px] p-[20px] min-w-[280px] bg-[color:var(--token-card-bg-default)] transition-colors duration-200",w={"solid-no-shadow":"border border-transparent","solid-with-shadow":"border border-transparent shadow-momo-sm","solid-border-default":"border border-[color:var(--token-card-border-default)]","solid-border-selected":"border border-momo-blue",glass:"border border-white/40 bg-white/15 backdrop-blur-[12px] shadow-[0_8px_24px_rgba(0,0,0,0.08)]"};function a({children:t,variant:p="solid-no-shadow",minHeight:h=110,className:x,...o}){return e.jsx("section",{className:u(b,w[p],x),style:{minHeight:h,...o.style??{}},...o,children:t})}a.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{defaultValue:{value:'"solid-no-shadow"',computed:!1},required:!1},minHeight:{defaultValue:{value:"110",computed:!1},required:!1}}};const f={title:"Components/Card",component:a,tags:["autodocs"],args:{variant:"solid-no-shadow"},parameters:{layout:"fullscreen"}},s={render:()=>e.jsx("div",{className:"min-h-screen bg-surface-secondary p-10 text-text-default",children:e.jsxs("div",{className:"mx-auto max-w-[1120px] space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h2",{className:"momo-typo-heading-sm text-momo-blue dark:text-white",children:"Base Card / Solid Variants"}),e.jsx("p",{className:"momo-typo-label-md text-text-secondary",children:"Foundational solid card styles: no shadow, with shadow, default border and selected border."})]}),e.jsxs("div",{className:"flex flex-wrap gap-8",children:[e.jsx(a,{variant:"solid-no-shadow","aria-label":"No Shadow"}),e.jsx(a,{variant:"solid-with-shadow","aria-label":"With Shadow"}),e.jsx(a,{variant:"solid-border-default","aria-label":"Border Default"}),e.jsx(a,{variant:"solid-border-selected","aria-label":"Border Selected"})]})]})})},r={render:()=>e.jsx("div",{className:"min-h-screen bg-[linear-gradient(120deg,var(--color-momo-blue)_10%,var(--token-bg-brand-default-50)_55%,var(--token-bg-brand-default-150)_100%)] p-10 text-white",children:e.jsxs("div",{className:"mx-auto max-w-[800px] space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h2",{className:"momo-typo-heading-sm text-white",children:"Base Card / Glass Variant"}),e.jsx("p",{className:"momo-typo-label-md text-white/85",children:"Use glass cards as translucent overlays when content underneath should remain partially visible."})]}),e.jsxs("div",{className:"flex flex-wrap gap-8",children:[e.jsx(a,{variant:"glass","aria-label":"Glass without content"}),e.jsxs(a,{variant:"glass",className:"flex flex-col items-center justify-center gap-2 text-center","aria-label":"Glass with content",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-momo-yellow text-momo-blue flex items-center justify-center momo-typo-heading-sm",children:"•"}),e.jsx("p",{className:"momo-typo-label-md text-white",children:"Title"}),e.jsx("p",{className:"momo-typo-caption-md text-white/85",children:"Description"})]})]})]})})};var l,d,n;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="min-h-screen bg-surface-secondary p-10 text-text-default">
      <div className="mx-auto max-w-[1120px] space-y-6">
        <div className="space-y-2">
          <h2 className="momo-typo-heading-sm text-momo-blue dark:text-white">Base Card / Solid Variants</h2>
          <p className="momo-typo-label-md text-text-secondary">
            Foundational solid card styles: no shadow, with shadow, default border and selected border.
          </p>
        </div>
        <div className="flex flex-wrap gap-8">
          <Card variant="solid-no-shadow" aria-label="No Shadow" />
          <Card variant="solid-with-shadow" aria-label="With Shadow" />
          <Card variant="solid-border-default" aria-label="Border Default" />
          <Card variant="solid-border-selected" aria-label="Border Selected" />
        </div>
      </div>
    </div>
}`,...(n=(d=s.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var i,c,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="min-h-screen bg-[linear-gradient(120deg,var(--color-momo-blue)_10%,var(--token-bg-brand-default-50)_55%,var(--token-bg-brand-default-150)_100%)] p-10 text-white">
      <div className="mx-auto max-w-[800px] space-y-6">
        <div className="space-y-2">
          <h2 className="momo-typo-heading-sm text-white">Base Card / Glass Variant</h2>
          <p className="momo-typo-label-md text-white/85">
            Use glass cards as translucent overlays when content underneath should remain partially visible.
          </p>
        </div>
        <div className="flex flex-wrap gap-8">
          <Card variant="glass" aria-label="Glass without content" />
          <Card variant="glass" className="flex flex-col items-center justify-center gap-2 text-center" aria-label="Glass with content">
            <div className="w-10 h-10 rounded-full bg-momo-yellow text-momo-blue flex items-center justify-center momo-typo-heading-sm">•</div>
            <p className="momo-typo-label-md text-white">Title</p>
            <p className="momo-typo-caption-md text-white/85">Description</p>
          </Card>
        </div>
      </div>
    </div>
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const g=["SolidVariants","GlassCard"];export{r as GlassCard,s as SolidVariants,g as __namedExportsOrder,f as default};
