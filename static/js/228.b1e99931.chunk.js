"use strict";(self.webpackChunkcontactsSaver_react=self.webpackChunkcontactsSaver_react||[]).push([[228],{9228:function(e,n,t){t.r(n),t.d(n,{default:function(){return pe}});var r=t(4554),a=t(159),i=t(5048),o=t(4808),c=t(3329),s=function(){var e=(0,i.I0)(),n=(0,i.v9)((function(e){return e.filter}));return(0,c.jsx)(r.Z,{sx:{"& > :not(style)":{m:8,width:"25ch"}},noValidate:!0,autoComplete:"off",children:(0,c.jsx)(a.Z,{label:"Find contacts by name",variant:"standard",value:n,onChange:function(n){return t=n.target.value,e((0,o.m)(t));var t}})})},l=t(885),u=t(1614),d=t(6151),p=t(3348),m=function(){var e=(0,p.Lr)(),n=(0,l.Z)(e,1)[0],t=(0,p.Jx)().data;return(0,c.jsx)(u.Z,{children:(0,c.jsxs)(r.Z,{component:"form",sx:{"& > :not(style)":{display:"flex",m:10,width:"25ch"}},noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault();var r=e.target,a=r.elements.name.value,i=r.elements.number.value,o={name:a,number:i};if(t.find((function(e){return e.name===a})))return alert("You seved this contact!"),void r.reset();n(o),r.reset()},children:[(0,c.jsx)(a.Z,{label:"Name",variant:"standard",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,c.jsx)(a.Z,{label:"Number",variant:"standard",type:"tel",name:"number",placeholder:"+38(0XX)XXX-XX-XX",pattern:{value:/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,message:"This must be digits and may contain spaces, dashes, parentheses or start with +."},required:!0}),(0,c.jsx)(d.Z,{variant:"outlined",type:"submit",children:"Add contact"})]})})},f=t(9971),v=t(1413),h=t(2791),g=t(2982),x=t(4942),b=t(3366),Z=t(7462),w=t(8182),y=t(1184),k=t(8519),j=t(4419),S=t(6934),M=t(1402),z=t(3967);var C=h.createContext(),N=t(1217),A=t(5878);function P(e){return(0,N.Z)("MuiGrid",e)}var R=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],X=(0,A.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,g.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),(0,g.Z)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),(0,g.Z)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),(0,g.Z)(R.map((function(e){return"grid-xs-".concat(e)}))),(0,g.Z)(R.map((function(e){return"grid-sm-".concat(e)}))),(0,g.Z)(R.map((function(e){return"grid-md-".concat(e)}))),(0,g.Z)(R.map((function(e){return"grid-lg-".concat(e)}))),(0,g.Z)(R.map((function(e){return"grid-xl-".concat(e)}))))),W=X,D=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function B(e){var n=parseFloat(e);return"".concat(n).concat(String(e).replace(String(n),"")||"px")}function F(e){var n=e.breakpoints,t=e.values,r="";Object.keys(t).forEach((function(e){""===r&&0!==t[e]&&(r=e)}));var a=Object.keys(n).sort((function(e,t){return n[e]-n[t]}));return a.slice(0,a.indexOf(r))}var E=(0,S.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState,r=t.container,a=t.direction,i=t.item,o=t.spacing,c=t.wrap,s=t.zeroMinWidth,l=t.breakpoints,u=[];r&&(u=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[t["spacing-xs-".concat(String(e))]];var r=[];return n.forEach((function(n){var a=e[n];Number(a)>0&&r.push(t["spacing-".concat(n,"-").concat(String(a))])})),r}(o,l,n));var d=[];return l.forEach((function(e){var r=t[e];r&&d.push(n["grid-".concat(e,"-").concat(String(r))])})),[n.root,r&&n.container,i&&n.item,s&&n.zeroMinWidth].concat((0,g.Z)(u),["row"!==a&&n["direction-xs-".concat(String(a))],"wrap"!==c&&n["wrap-xs-".concat(String(c))]],d)}})((function(e){var n=e.ownerState;return(0,Z.Z)({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},"wrap"!==n.wrap&&{flexWrap:n.wrap})}),(function(e){var n=e.theme,t=e.ownerState,r=(0,y.P$)({values:t.direction,breakpoints:n.breakpoints.values});return(0,y.k9)({theme:n},r,(function(e){var n={flexDirection:e};return 0===e.indexOf("column")&&(n["& > .".concat(W.item)]={maxWidth:"none"}),n}))}),(function(e){var n=e.theme,t=e.ownerState,r=t.container,a=t.rowSpacing,i={};if(r&&0!==a){var o,c=(0,y.P$)({values:a,breakpoints:n.breakpoints.values});"object"===typeof c&&(o=F({breakpoints:n.breakpoints.values,values:c})),i=(0,y.k9)({theme:n},c,(function(e,t){var r,a=n.spacing(e);return"0px"!==a?(0,x.Z)({marginTop:"-".concat(B(a))},"& > .".concat(W.item),{paddingTop:B(a)}):null!=(r=o)&&r.includes(t)?{}:(0,x.Z)({marginTop:0},"& > .".concat(W.item),{paddingTop:0})}))}return i}),(function(e){var n=e.theme,t=e.ownerState,r=t.container,a=t.columnSpacing,i={};if(r&&0!==a){var o,c=(0,y.P$)({values:a,breakpoints:n.breakpoints.values});"object"===typeof c&&(o=F({breakpoints:n.breakpoints.values,values:c})),i=(0,y.k9)({theme:n},c,(function(e,t){var r,a=n.spacing(e);return"0px"!==a?(0,x.Z)({width:"calc(100% + ".concat(B(a),")"),marginLeft:"-".concat(B(a))},"& > .".concat(W.item),{paddingLeft:B(a)}):null!=(r=o)&&r.includes(t)?{}:(0,x.Z)({width:"100%",marginLeft:0},"& > .".concat(W.item),{paddingLeft:0})}))}return i}),(function(e){var n,t=e.theme,r=e.ownerState;return t.breakpoints.keys.reduce((function(e,a){var i={};if(r[a]&&(n=r[a]),!n)return e;if(!0===n)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=(0,y.P$)({values:r.columns,breakpoints:t.breakpoints.values}),c="object"===typeof o?o[a]:o;if(void 0===c||null===c)return e;var s="".concat(Math.round(n/c*1e8)/1e6,"%"),l={};if(r.container&&r.item&&0!==r.columnSpacing){var u=t.spacing(r.columnSpacing);if("0px"!==u){var d="calc(".concat(s," + ").concat(B(u),")");l={flexBasis:d,maxWidth:d}}}i=(0,Z.Z)({flexBasis:s,flexGrow:0,maxWidth:s},l)}return 0===t.breakpoints.values[a]?Object.assign(e,i):e[t.breakpoints.up(a)]=i,e}),{})}));var L=function(e){var n=e.classes,t=e.container,r=e.direction,a=e.item,i=e.spacing,o=e.wrap,c=e.zeroMinWidth,s=e.breakpoints,l=[];t&&(l=function(e,n){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return["spacing-xs-".concat(String(e))];var t=[];return n.forEach((function(n){var r=e[n];if(Number(r)>0){var a="spacing-".concat(n,"-").concat(String(r));t.push(a)}})),t}(i,s));var u=[];s.forEach((function(n){var t=e[n];t&&u.push("grid-".concat(n,"-").concat(String(t)))}));var d={root:["root",t&&"container",a&&"item",c&&"zeroMinWidth"].concat((0,g.Z)(l),["row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==o&&"wrap-xs-".concat(String(o))],u)};return(0,j.Z)(d,P,n)},O=h.forwardRef((function(e,n){var t=(0,M.Z)({props:e,name:"MuiGrid"}),r=(0,z.Z)().breakpoints,a=(0,k.Z)(t),i=a.className,o=a.columns,s=a.columnSpacing,l=a.component,u=void 0===l?"div":l,d=a.container,p=void 0!==d&&d,m=a.direction,f=void 0===m?"row":m,v=a.item,g=void 0!==v&&v,x=a.rowSpacing,y=a.spacing,j=void 0===y?0:y,S=a.wrap,N=void 0===S?"wrap":S,A=a.zeroMinWidth,P=void 0!==A&&A,R=(0,b.Z)(a,D),X=x||j,W=s||j,B=h.useContext(C),F=p?o||12:B,O={},T=(0,Z.Z)({},R);r.keys.forEach((function(e){null!=R[e]&&(O[e]=R[e],delete T[e])}));var $=(0,Z.Z)({},a,{columns:F,container:p,direction:f,item:g,rowSpacing:X,columnSpacing:W,wrap:N,zeroMinWidth:P,spacing:j},O,{breakpoints:r.keys}),I=L($);return(0,c.jsx)(C.Provider,{value:F,children:(0,c.jsx)(E,(0,Z.Z)({ownerState:$,className:(0,w.Z)(I.root,i),as:u,ref:n},T))})})),T=O,$=t(9201),I=(0,$.Z)((0,c.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function G(e){return(0,N.Z)("MuiAvatar",e)}(0,A.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var q=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],V=(0,S.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],t.colorDefault&&n.colorDefault]}})((function(e){var n=e.theme,t=e.ownerState;return(0,Z.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:n.typography.fontFamily,fontSize:n.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(n.vars||n).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,Z.Z)({color:(n.vars||n).palette.background.default},n.vars?{backgroundColor:n.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===n.palette.mode?n.palette.grey[400]:n.palette.grey[600]}))})),J=(0,S.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,n){return n.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),H=(0,S.ZP)(I,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,n){return n.fallback}})({width:"75%",height:"75%"});var U=h.forwardRef((function(e,n){var t=(0,M.Z)({props:e,name:"MuiAvatar"}),r=t.alt,a=t.children,i=t.className,o=t.component,s=void 0===o?"div":o,u=t.imgProps,d=t.sizes,p=t.src,m=t.srcSet,f=t.variant,v=void 0===f?"circular":f,g=(0,b.Z)(t,q),x=null,y=function(e){var n=e.crossOrigin,t=e.referrerPolicy,r=e.src,a=e.srcSet,i=h.useState(!1),o=(0,l.Z)(i,2),c=o[0],s=o[1];return h.useEffect((function(){if(r||a){s(!1);var e=!0,i=new Image;return i.onload=function(){e&&s("loaded")},i.onerror=function(){e&&s("error")},i.crossOrigin=n,i.referrerPolicy=t,i.src=r,a&&(i.srcset=a),function(){e=!1}}}),[n,t,r,a]),c}((0,Z.Z)({},u,{src:p,srcSet:m})),k=p||m,S=k&&"error"!==y,z=(0,Z.Z)({},t,{colorDefault:!S,component:s,variant:v}),C=function(e){var n=e.classes,t={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,j.Z)(t,G,n)}(z);return x=S?(0,c.jsx)(J,(0,Z.Z)({alt:r,src:p,srcSet:m,sizes:d,ownerState:z,className:C.img},u)):null!=a?a:k&&r?r[0]:(0,c.jsx)(H,{className:C.fallback}),(0,c.jsx)(V,(0,Z.Z)({as:s,ownerState:z,className:(0,w.Z)(C.root,i),ref:n},g,{children:x}))})),_=t(5682),Y=t(2466),K=["component","direction","spacing","divider","children"];function Q(e,n){var t=h.Children.toArray(e).filter(Boolean);return t.reduce((function(e,r,a){return e.push(r),a<t.length-1&&e.push(h.cloneElement(n,{key:"separator-".concat(a)})),e}),[])}var ee=(0,S.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return[n.root]}})((function(e){var n=e.ownerState,t=e.theme,r=(0,Z.Z)({display:"flex",flexDirection:"column"},(0,y.k9)({theme:t},(0,y.P$)({values:n.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var a=(0,_.hB)(t),i=Object.keys(t.breakpoints.values).reduce((function(e,t){return("object"===typeof n.spacing&&null!=n.spacing[t]||"object"===typeof n.direction&&null!=n.direction[t])&&(e[t]=!0),e}),{}),o=(0,y.P$)({values:n.direction,base:i}),c=(0,y.P$)({values:n.spacing,base:i});"object"===typeof o&&Object.keys(o).forEach((function(e,n,t){if(!o[e]){var r=n>0?o[t[n-1]]:"column";o[e]=r}}));r=(0,Y.Z)(r,(0,y.k9)({theme:t},c,(function(e,t){return{"& > :not(style) + :not(style)":(0,x.Z)({margin:0},"margin".concat((r=t?o[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,_.NA)(a,e))};var r})))}return r=(0,y.dt)(t.breakpoints,r)})),ne=h.forwardRef((function(e,n){var t=(0,M.Z)({props:e,name:"MuiStack"}),r=(0,k.Z)(t),a=r.component,i=void 0===a?"div":a,o=r.direction,s=void 0===o?"column":o,l=r.spacing,u=void 0===l?0:l,d=r.divider,p=r.children,m=(0,b.Z)(r,K),f={direction:s,spacing:u};return(0,c.jsx)(ee,(0,Z.Z)({as:i,ownerState:f,ref:n},m,{children:d?Q(p,d):p}))})),te=ne,re=t(1885),ae=t(2739),ie=t(2003),oe=t(890),ce=(0,$.Z)((0,c.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),se=(0,$.Z)((0,c.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh"),le={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:500,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},ue=function(e){var n=e.contacts,t=(0,h.useState)(!1),i=(0,l.Z)(t,2),o=i[0],s=i[1],m=n.id,f=n.name,g=n.number,x=(0,p.Nt)(),b=(0,l.Z)(x,1)[0],Z=(0,p.wv)(),w=(0,l.Z)(Z,1)[0];return(0,c.jsxs)(T,{item:!0,xs:12,md:4,children:[(0,c.jsxs)(u.Z,{sx:{display:"flex",justifyContent:"center",flexDirection:"column",mb:2},children:[(0,c.jsx)(U,{sx:{width:50,height:50}}),(0,c.jsx)("span",{children:f}),(0,c.jsx)("p",{children:g})]}),(0,c.jsxs)(te,{direction:"row",spacing:2,children:[(0,c.jsx)(d.Z,{variant:"outlined",onClick:function(){return b(m)},startIcon:(0,c.jsx)(ce,{}),children:"Delete"}),(0,c.jsx)(d.Z,{variant:"outlined",onClick:function(){return console.log(m),s(!0)},endIcon:(0,c.jsx)(se,{}),children:"Update"})]}),(0,c.jsx)("div",{children:(0,c.jsx)(re.Z,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:o,onClose:function(){return s(!1)},closeAfterTransition:!0,BackdropComponent:ae.Z,BackdropProps:{timeout:500},children:(0,c.jsx)(ie.Z,{in:o,children:(0,c.jsxs)(r.Z,{sx:le,children:[(0,c.jsx)(oe.Z,{id:"transition-modal-title",variant:"h6",component:"h2",sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:"Change name or number"}),(0,c.jsxs)(r.Z,{component:"form",sx:{display:"flex",flexDirection:"column",p:4},onSubmit:function(e){e.preventDefault();var n=e.target,t=n.elements.name.value,r={name:t,number:n.elements.number.value};if(f===t)return alert(f+" is already in contacts!"),void n.reset();w((0,v.Z)({id:m},r)).then((function(e){e.error?alert("Failed to edit contact, retry later!"):(alert("Contact edited successfully"),s(!1))}))},children:[(0,c.jsx)(a.Z,{label:"Name",variant:"standard",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,c.jsx)(a.Z,{label:"Number",variant:"standard",type:"tel",name:"number",placeholder:"+38(0XX)XXX-XX-XX",pattern:{value:/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,message:"This must be digits and may contain spaces, dashes, parentheses or start with +."},required:!0}),(0,c.jsx)(d.Z,{sx:{m:3},variant:"outlined",type:"submit",children:"Update"})]})]})})})})]})},de=function(){var e=(0,p.Jx)(),n=e.data,t=e.isFetching,r=(0,i.v9)((function(e){return e.filter})).toLowerCase(),a=null===n||void 0===n?void 0:n.filter((function(e){return e.name.toLowerCase().includes(r)}));return(0,c.jsx)(u.Z,{children:(0,c.jsxs)(T,{container:!0,spacing:8,children:[t&&(0,c.jsx)(f.a,{}),n&&a.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,c.jsx)(ue,{contacts:{id:n,name:t,number:r}},n)}))]})})},pe=function(){return(0,c.jsxs)("div",{children:[(0,c.jsx)(m,{}),(0,c.jsx)(s,{}),(0,c.jsx)(de,{})]})}}}]);
//# sourceMappingURL=228.b1e99931.chunk.js.map