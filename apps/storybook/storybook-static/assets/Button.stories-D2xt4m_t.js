import{R as e}from"./index-Y0gaZlcC.js";const q={mobile:{large:"h-[40px] px-[32px] py-[4px]",small:"h-[40px] px-[20px] py-[4px]",xsmall:"h-[28px] min-w-[69px] px-[20px] py-[4px]"},"desktop-web":{large:"h-[55px] px-[32px] py-[4px]",small:"h-[55px] px-[24px] py-[4px]",xsmall:"h-[55px] px-[24px] py-[4px]"}},P={mobile:{large:"text-[14px] leading-[18px] font-medium uppercase",small:"text-[14px] leading-[18px] font-medium uppercase",xsmall:"text-[12px] leading-4 font-normal normal-case"},"desktop-web":{large:"text-base leading-6 font-medium uppercase",small:"text-[14px] leading-[18px] font-medium uppercase",xsmall:"text-[14px] leading-[18px] font-medium uppercase"}},V={primary:"border border-button-primary bg-button-primary text-button-primary-text shadow-momo-sm hover:bg-button-primary-hover active:bg-button-primary-press active:text-button-primary-press-text",secondary:"border-2 border-button-secondary bg-button-secondary text-button-secondary-text hover:border-button-secondary-hover hover:bg-button-secondary-hover hover:text-button-secondary-hover-text active:border-[2.4px] active:border-button-secondary-press active:bg-button-secondary-press active:text-button-secondary-press-text",tertiary:"border border-transparent bg-button-tertiary text-button-tertiary-text hover:text-button-tertiary-hover-text active:text-button-tertiary-press-text"};function s({label:r,platform:a="mobile",size:t="large",variant:l="primary",fullWidth:k=!1,disabled:S=!1,onClick:W,className:z,type:$="button",...B}){const C=["inline-flex items-center justify-center rounded-full text-center tracking-[0px] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary disabled:cursor-not-allowed disabled:border-border-default disabled:bg-surface-secondary disabled:text-text-secondary disabled:shadow-none disabled:opacity-60",q[a][t],P[a][t],V[l],k?"w-full min-w-0":"w-auto",z].filter(Boolean).join(" ");return e.createElement("button",{type:$,className:C,disabled:S,onClick:W,...B},r)}s.__docgenInfo={description:"",methods:[],displayName:"Button",props:{platform:{defaultValue:{value:'"mobile"',computed:!1},required:!1},size:{defaultValue:{value:'"large"',computed:!1},required:!1},variant:{defaultValue:{value:'"primary"',computed:!1},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:'"button"',computed:!1},required:!1}}};const _={title:"Components/Button",component:s,tags:["autodocs"],argTypes:{onClick:{action:"button-click"},platform:{control:"select",options:["mobile","desktop-web"]},size:{control:"select",options:["large","small","xsmall"]},variant:{control:"select",options:["primary","secondary","tertiary"]}},args:{label:"Label",platform:"mobile",size:"large",variant:"primary",disabled:!1,fullWidth:!1}},j=["large","small","xsmall"],L=["primary","secondary","tertiary"],c={mobile:j,"desktop-web":["large","small"]},m={mobile:{large:"w-[280px]",small:"w-auto",xsmall:"w-auto"},"desktop-web":{large:"w-[265px]",small:"w-[130px]",xsmall:"w-[130px]"}},o={},n={args:{variant:"secondary",label:"Secondary"}},d={name:"Spec Matrix",render:r=>e.createElement("div",{className:"space-y-10 bg-surface-default p-6"},Object.keys(c).map(a=>e.createElement("section",{key:a,className:"space-y-6"},e.createElement("h3",{className:"text-base font-semibold uppercase tracking-wide text-text-default"},a),c[a].map(t=>e.createElement("div",{key:`${a}-${t}`,className:"space-y-3"},e.createElement("h4",{className:"text-sm font-semibold uppercase tracking-wide text-text-secondary"},t),e.createElement("div",{className:"grid grid-cols-3 gap-4"},L.map(l=>e.createElement("div",{key:`${a}-${t}-${l}`,className:"space-y-3"},e.createElement("div",{className:m[a][t]},e.createElement(s,{...r,platform:a,size:t,variant:l,disabled:!1,fullWidth:a==="desktop-web"||t==="large"})),e.createElement("div",{className:m[a][t]},e.createElement(s,{...r,platform:a,size:t,variant:l,disabled:!0,label:"Label",fullWidth:a==="desktop-web"||t==="large"}))))))))))},i={name:"Placement Examples",render:r=>e.createElement("div",{className:"max-w-md space-y-4 bg-surface-default p-6"},e.createElement("div",{className:"rounded-xl border border-border-default bg-card-surface p-4"},e.createElement("p",{className:"mb-4 text-sm text-text-secondary"},"Single primary action"),e.createElement(s,{...r,platform:"mobile",fullWidth:!0})),e.createElement("div",{className:"rounded-xl border border-border-default bg-card-surface p-4"},e.createElement("p",{className:"mb-4 text-sm text-text-secondary"},"Primary + secondary actions"),e.createElement("div",{className:"flex gap-3"},e.createElement(s,{...r,platform:"mobile",fullWidth:!0}),e.createElement(s,{...r,platform:"mobile",fullWidth:!0,variant:"secondary"}))))};var p,u,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var x,f,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    label: "Secondary"
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,v,h;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Spec Matrix",
  render: args => <div className="space-y-10 bg-surface-default p-6">
      {(Object.keys(platformSizes) as Array<"mobile" | "desktop-web">).map(platform => <section key={platform} className="space-y-6">
            <h3 className="text-base font-semibold uppercase tracking-wide text-text-default">
              {platform}
            </h3>
            {platformSizes[platform].map(size => <div key={\`\${platform}-\${size}\`} className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-text-secondary">
                  {size}
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {variants.map(variant => <div key={\`\${platform}-\${size}-\${variant}\`} className="space-y-3">
                      <div className={specWidthClass[platform][size]}>
                        <Button {...args} platform={platform} size={size} variant={variant} disabled={false} fullWidth={platform === "desktop-web" || size === "large"} />
                      </div>
                      <div className={specWidthClass[platform][size]}>
                        <Button {...args} platform={platform} size={size} variant={variant} disabled label="Label" fullWidth={platform === "desktop-web" || size === "large"} />
                      </div>
                    </div>)}
                </div>
              </div>)}
          </section>)}
    </div>
}`,...(h=(v=d.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var N,w,E;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Placement Examples",
  render: args => <div className="max-w-md space-y-4 bg-surface-default p-6">
      <div className="rounded-xl border border-border-default bg-card-surface p-4">
        <p className="mb-4 text-sm text-text-secondary">Single primary action</p>
        <Button {...args} platform="mobile" fullWidth />
      </div>
      <div className="rounded-xl border border-border-default bg-card-surface p-4">
        <p className="mb-4 text-sm text-text-secondary">Primary + secondary actions</p>
        <div className="flex gap-3">
          <Button {...args} platform="mobile" fullWidth />
          <Button {...args} platform="mobile" fullWidth variant="secondary" />
        </div>
      </div>
    </div>
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const O=["Default","HighlightedSecondary","Matrix","PlacementExamples"];export{o as Default,n as HighlightedSecondary,d as Matrix,i as PlacementExamples,O as __namedExportsOrder,_ as default};
