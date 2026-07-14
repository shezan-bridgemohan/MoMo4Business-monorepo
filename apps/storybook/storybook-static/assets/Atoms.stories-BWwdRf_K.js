import{j as e}from"./jsx-runtime-D_zvdyIk.js";const l=[{name:"Display XL",className:"momo-typo-display-xl"},{name:"Display LG",className:"momo-typo-display-lg"},{name:"Display MD",className:"momo-typo-display-md"},{name:"Display SM",className:"momo-typo-display-sm"},{name:"Heading XL",className:"momo-typo-heading-xl"},{name:"Heading LG",className:"momo-typo-heading-lg"},{name:"Heading MD",className:"momo-typo-heading-md"},{name:"Heading SM",className:"momo-typo-heading-sm"},{name:"Body LG",className:"momo-typo-body-lg"},{name:"Body MD",className:"momo-typo-body-md"},{name:"Body SM",className:"momo-typo-body-sm"},{name:"Label LG",className:"momo-typo-label-lg"},{name:"Label MD",className:"momo-typo-label-md"},{name:"Label SM Medium",className:"momo-typo-label-sm-medium"},{name:"Caption MD",className:"momo-typo-caption-md"}],t=[{name:"MoMo Blue",value:"var(--color-momo-blue)",text:"var(--color-momo-yellow)"},{name:"MoMo Yellow",value:"var(--color-momo-yellow)",text:"var(--color-momo-blue)"},{name:"Brand Primary",value:"var(--color-brand-primary)",text:"var(--color-momo-yellow)"},{name:"Surface Default",value:"var(--color-surface-default)",text:"var(--color-text-default)"},{name:"Surface Secondary",value:"var(--color-surface-secondary)",text:"var(--color-text-default)"},{name:"Status Positive",value:"var(--color-status-positive)",text:"white"},{name:"Status Warning",value:"var(--color-status-warning)",text:"black"},{name:"Status Danger",value:"var(--color-status-danger)",text:"white"},{name:"Neo Gradient",value:"var(--color-neo-library-gradient-primary)",text:"white"}],n=["--spacing-2","--spacing-4","--spacing-6","--spacing-10","--spacing-12","--spacing-16","--spacing-20","--spacing-24","--spacing-32","--spacing-40"],i={title:"Foundations/Atoms",tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"foundation-canvas",values:[{name:"foundation-canvas",value:"#f7f9fc"}]}}},a={render:()=>e.jsx("div",{"data-theme":"light",className:"min-h-screen bg-[#f7f9fc] p-10 text-text-default md:p-12",children:e.jsxs("div",{className:"momo-content-width space-y-10",children:[e.jsxs("section",{className:"rounded-3xl border border-border-default bg-surface-default p-8 shadow-momo-sm md:p-10",children:[e.jsx("h2",{className:"momo-typo-heading-md text-momo-blue",children:"Typography"}),e.jsx("div",{className:"mt-6 space-y-4",children:l.map(o=>e.jsxs("div",{className:"border-b border-border-default pb-3 last:border-b-0",children:[e.jsx("p",{className:"momo-typo-caption-md text-text-secondary",children:o.name}),e.jsx("p",{className:o.className,children:"MTN MoMo"})]},o.className))})]}),e.jsxs("section",{className:"rounded-3xl border border-border-default bg-surface-default p-8 shadow-momo-sm md:p-10",children:[e.jsx("h2",{className:"momo-typo-heading-md text-momo-blue",children:"Colours"}),e.jsx("div",{className:"mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:t.map(o=>e.jsxs("div",{className:"rounded-xl border border-black/5 p-6 shadow-sm",style:{background:o.value,color:o.text},children:[e.jsx("p",{className:"momo-typo-label-sm-medium uppercase",children:o.name}),e.jsx("p",{className:"momo-typo-caption-md mt-2",children:o.value})]},o.name))})]}),e.jsxs("section",{className:"rounded-3xl border border-border-default bg-surface-default p-8 shadow-momo-sm md:p-10",children:[e.jsx("h2",{className:"momo-typo-heading-md text-momo-blue",children:"Spacing"}),e.jsx("p",{className:"momo-typo-body-sm mt-2 text-text-secondary",children:"Each row shows two blocks separated by the token gap."}),e.jsx("div",{className:"mt-6 grid gap-4 md:grid-cols-2",children:n.map(o=>e.jsxs("div",{className:"rounded-xl border border-border-default bg-surface-secondary p-5",children:[e.jsx("p",{className:"momo-typo-caption-md text-text-secondary",children:o}),e.jsx("div",{className:"mt-4 rounded-lg border border-border-default bg-surface-default p-4",children:e.jsxs("div",{className:"flex items-center",style:{gap:`var(${o})`},children:[e.jsx("div",{className:"h-10 w-10 rounded-md bg-momo-blue"}),e.jsx("div",{className:"h-10 w-10 rounded-md bg-momo-yellow"})]})}),e.jsx("div",{className:"mt-3 h-1.5 rounded-full bg-momo-blue",style:{width:`var(${o})`,minWidth:"2px"}})]},o))})]}),e.jsxs("section",{className:"rounded-3xl border border-border-default bg-surface-default p-8 shadow-momo-sm md:p-10",children:[e.jsx("h2",{className:"momo-typo-heading-md text-momo-blue",children:"Grid and Layout"}),e.jsx("p",{className:"momo-typo-body-sm mt-2 text-text-secondary",children:"Visual grid overlays for key breakpoints from the layout tokens."}),e.jsxs("div",{className:"mt-6 space-y-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"momo-typo-label-md text-text-secondary",children:"Mobile grid (4 columns, 55px, 20px gutter)"}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-lg border border-border-default bg-surface-secondary p-4",children:e.jsx("div",{className:"mx-auto w-[320px] rounded-lg border border-border-default bg-surface-default p-[20px]",children:e.jsx("div",{className:"momo-grid-mobile",children:Array.from({length:4}).map((o,d)=>e.jsx("div",{className:"h-16 rounded-md border border-momo-blue/20 bg-momo-yellow/45"},`m-${d}`))})})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"momo-typo-label-md text-text-secondary",children:"Desktop grid (12 columns, 75px, 20px gutter)"}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-lg border border-border-default bg-surface-secondary p-4",children:e.jsx("div",{className:"mx-auto w-[1120px] rounded-lg border border-border-default bg-surface-default p-4",children:e.jsx("div",{className:"momo-grid-desktop",children:Array.from({length:12}).map((o,d)=>e.jsx("div",{className:"h-14 rounded-md border border-momo-blue/20 bg-momo-blue/20"},`d-${d}`))})})})]}),e.jsxs("div",{className:"rounded-xl border border-border-default bg-surface-default p-4",children:[e.jsx("p",{className:"momo-typo-label-md text-text-secondary",children:"Shell helper preview"}),e.jsx("div",{className:"momo-layout-shell momo-layout-shell-nav-open mt-3 rounded-lg bg-surface-secondary p-4",children:e.jsx("div",{className:"rounded-md bg-card-surface p-4 shadow-momo-sm",children:e.jsx("p",{className:"momo-typo-body-sm",children:"Header, footer and open-nav spacing come from layout tokens."})})})]})]})]})]})})};var s,m,r;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div data-theme="light" className="min-h-screen bg-[#f7f9fc] p-10 text-text-default md:p-12">
      <div className="momo-content-width space-y-10">
        <section className="rounded-3xl border border-border-default bg-surface-default p-8 shadow-momo-sm md:p-10">
          <h2 className="momo-typo-heading-md text-momo-blue">Typography</h2>
          <div className="mt-6 space-y-4">
            {typographySamples.map(sample => <div key={sample.className} className="border-b border-border-default pb-3 last:border-b-0">
                <p className="momo-typo-caption-md text-text-secondary">{sample.name}</p>
                <p className={sample.className}>MTN MoMo</p>
              </div>)}
          </div>
        </section>

        <section className="rounded-3xl border border-border-default bg-surface-default p-8 shadow-momo-sm md:p-10">
          <h2 className="momo-typo-heading-md text-momo-blue">Colours</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {colorSamples.map(sample => <div key={sample.name} className="rounded-xl border border-black/5 p-6 shadow-sm" style={{
            background: sample.value,
            color: sample.text
          }}>
                <p className="momo-typo-label-sm-medium uppercase">{sample.name}</p>
                <p className="momo-typo-caption-md mt-2">{sample.value}</p>
              </div>)}
          </div>
        </section>

        <section className="rounded-3xl border border-border-default bg-surface-default p-8 shadow-momo-sm md:p-10">
          <h2 className="momo-typo-heading-md text-momo-blue">Spacing</h2>
          <p className="momo-typo-body-sm mt-2 text-text-secondary">
            Each row shows two blocks separated by the token gap.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {spacingSamples.map(token => <div key={token} className="rounded-xl border border-border-default bg-surface-secondary p-5">
                <p className="momo-typo-caption-md text-text-secondary">{token}</p>
                <div className="mt-4 rounded-lg border border-border-default bg-surface-default p-4">
                  <div className="flex items-center" style={{
                gap: \`var(\${token})\`
              }}>
                    <div className="h-10 w-10 rounded-md bg-momo-blue" />
                    <div className="h-10 w-10 rounded-md bg-momo-yellow" />
                  </div>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-momo-blue" style={{
              width: \`var(\${token})\`,
              minWidth: "2px"
            }} />
              </div>)}
          </div>
        </section>

        <section className="rounded-3xl border border-border-default bg-surface-default p-8 shadow-momo-sm md:p-10">
          <h2 className="momo-typo-heading-md text-momo-blue">Grid and Layout</h2>
          <p className="momo-typo-body-sm mt-2 text-text-secondary">
            Visual grid overlays for key breakpoints from the layout tokens.
          </p>
          <div className="mt-6 space-y-8">
            <div>
              <p className="momo-typo-label-md text-text-secondary">Mobile grid (4 columns, 55px, 20px gutter)</p>
              <div className="mt-3 overflow-x-auto rounded-lg border border-border-default bg-surface-secondary p-4">
                <div className="mx-auto w-[320px] rounded-lg border border-border-default bg-surface-default p-[20px]">
                  <div className="momo-grid-mobile">
                    {Array.from({
                    length: 4
                  }).map((_, idx) => <div key={\`m-\${idx}\`} className="h-16 rounded-md border border-momo-blue/20 bg-momo-yellow/45" />)}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="momo-typo-label-md text-text-secondary">Desktop grid (12 columns, 75px, 20px gutter)</p>
              <div className="mt-3 overflow-x-auto rounded-lg border border-border-default bg-surface-secondary p-4">
                <div className="mx-auto w-[1120px] rounded-lg border border-border-default bg-surface-default p-4">
                  <div className="momo-grid-desktop">
                    {Array.from({
                    length: 12
                  }).map((_, idx) => <div key={\`d-\${idx}\`} className="h-14 rounded-md border border-momo-blue/20 bg-momo-blue/20" />)}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border-default bg-surface-default p-4">
              <p className="momo-typo-label-md text-text-secondary">Shell helper preview</p>
              <div className="momo-layout-shell momo-layout-shell-nav-open mt-3 rounded-lg bg-surface-secondary p-4">
                <div className="rounded-md bg-card-surface p-4 shadow-momo-sm">
                  <p className="momo-typo-body-sm">Header, footer and open-nav spacing come from layout tokens.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
}`,...(r=(m=a.parameters)==null?void 0:m.docs)==null?void 0:r.source}}};const p=["Showcase"];export{a as Showcase,p as __namedExportsOrder,i as default};
