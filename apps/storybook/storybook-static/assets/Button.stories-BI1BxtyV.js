import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as o}from"./Button-BgDN_d5b.js";const M={title:"Components/Button",component:o,tags:["autodocs"],argTypes:{onClick:{action:"button-click"},platform:{control:"select",options:["mobile","desktop-web"]},size:{control:"select",options:["large","small","xsmall"]},variant:{control:"select",options:["primary","secondary","tertiary"]},state:{control:"select",options:["active","hover-focus","press","inactive"]}},args:{label:"Label",platform:"mobile",size:"large",variant:"primary",state:"active",disabled:!1,fullWidth:!1}},S=["large","small","xsmall"],k=["primary","secondary","tertiary"],P=["active","hover-focus","press","inactive"],d={mobile:S,"desktop-web":["large","small"]},B={mobile:{large:"w-[280px]",small:"w-auto",xsmall:"w-auto"},"desktop-web":{large:"w-[265px]",small:"w-[130px]",xsmall:"w-[130px]"}};function W(s,a,t,r){return e.jsx("div",{className:"space-y-2",children:P.map(l=>e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{className:"text-[11px] uppercase tracking-wide text-text-secondary",children:l}),e.jsx("div",{className:B[a][t],children:e.jsx(o,{...s,platform:a,size:t,variant:r,state:l,disabled:l==="inactive",fullWidth:a==="desktop-web"||t==="large"})})]},`${a}-${t}-${r}-${l}`))},`${a}-${t}-${r}`)}function $(s,a,t){return e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"text-sm font-semibold uppercase tracking-wide text-momo-yellow",children:t}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:k.map(r=>W(s,a,t,r))})]},`${a}-${t}`)}const n={},c={args:{variant:"secondary",label:"Secondary"}},m={name:"Spec Matrix",render:s=>e.jsxs("div",{className:"space-y-10 p-6 text-text-default",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h2",{className:"momo-typo-heading-sm text-momo-blue dark:text-white",children:"Button Spec Matrix"}),e.jsx("p",{className:"momo-typo-label-md text-text-secondary",children:"Platform, size, variant and state combinations aligned to the Neo Library button specification."})]}),Object.keys(d).map(a=>e.jsxs("section",{className:"space-y-6",children:[e.jsx("h3",{className:"momo-typo-label-sm-medium uppercase tracking-wide text-text-secondary",children:a}),d[a].map(t=>$(s,a,t))]},a))]})},i={name:"Placement Examples",render:s=>e.jsxs("div",{className:"max-w-md space-y-4 p-6 text-text-default",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h2",{className:"momo-typo-heading-sm text-momo-blue dark:text-white",children:"Button Placement Examples"}),e.jsx("p",{className:"momo-typo-label-md text-text-secondary",children:"Practical button groupings for action bars and card-level interactions."})]}),e.jsxs("div",{className:"rounded-xl border border-border-default bg-card-surface p-4",children:[e.jsx("p",{className:"mb-4 momo-typo-label-md text-momo-blue dark:text-white",children:"Single primary action"}),e.jsx(o,{...s,platform:"mobile",fullWidth:!0})]}),e.jsxs("div",{className:"rounded-xl border border-border-default bg-card-surface p-4",children:[e.jsx("p",{className:"mb-4 momo-typo-label-md text-momo-yellow",children:"Primary + secondary actions"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(o,{...s,platform:"mobile",fullWidth:!0}),e.jsx(o,{...s,platform:"mobile",fullWidth:!0,variant:"secondary"})]})]})]})};var p,x,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(x=n.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var b,y,h;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    label: "Secondary"
  }
}`,...(h=(y=c.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var g,f,v;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Spec Matrix",
  render: args => <div className="space-y-10 p-6 text-text-default">
      <div className="space-y-2">
        <h2 className="momo-typo-heading-sm text-momo-blue dark:text-white">
          Button Spec Matrix
        </h2>
        <p className="momo-typo-label-md text-text-secondary">
          Platform, size, variant and state combinations aligned to the Neo Library button specification.
        </p>
      </div>
      {(Object.keys(platformSizes) as Array<"mobile" | "desktop-web">).map(platform => <section key={platform} className="space-y-6">
            <h3 className="momo-typo-label-sm-medium uppercase tracking-wide text-text-secondary">
              {platform}
            </h3>
            {platformSizes[platform].map(size => renderSizeSection(args, platform, size))}
          </section>)}
    </div>
}`,...(v=(f=m.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var N,j,w;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Placement Examples",
  render: args => <div className="max-w-md space-y-4 p-6 text-text-default">
      <div className="space-y-2">
        <h2 className="momo-typo-heading-sm text-momo-blue dark:text-white">
          Button Placement Examples
        </h2>
        <p className="momo-typo-label-md text-text-secondary">
          Practical button groupings for action bars and card-level interactions.
        </p>
      </div>
      <div className="rounded-xl border border-border-default bg-card-surface p-4">
        <p className="mb-4 momo-typo-label-md text-momo-blue dark:text-white">Single primary action</p>
        <Button {...args} platform="mobile" fullWidth />
      </div>
      <div className="rounded-xl border border-border-default bg-card-surface p-4">
        <p className="mb-4 momo-typo-label-md text-momo-yellow">Primary + secondary actions</p>
        <div className="flex gap-3">
          <Button {...args} platform="mobile" fullWidth />
          <Button {...args} platform="mobile" fullWidth variant="secondary" />
        </div>
      </div>
    </div>
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const C=["Default","HighlightedSecondary","Matrix","PlacementExamples"];export{n as Default,c as HighlightedSecondary,m as Matrix,i as PlacementExamples,C as __namedExportsOrder,M as default};
