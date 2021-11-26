(this["webpackJsonpportfolio-v2.0"]=this["webpackJsonpportfolio-v2.0"]||[]).push([[9],{127:function(e,r,t){"use strict";var o=t(1),n=t(2),a=t(12),i=t(0),p=(t(4),t(6)),s=t(7),c=i.forwardRef((function(e,r){var t=e.classes,a=e.className,s=e.component,c=void 0===s?"div":s,l=e.disableGutters,d=void 0!==l&&l,u=e.variant,f=void 0===u?"regular":u,m=Object(n.a)(e,["classes","className","component","disableGutters","variant"]);return i.createElement(c,Object(o.a)({className:Object(p.a)(t.root,t[f],a,!d&&t.gutters),ref:r},m))}));r.a=Object(s.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(a.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(c)},128:function(e,r,t){"use strict";var o=t(19),n=t(1),a=(t(4),t(27));function i(e,r){var t={};return Object.keys(e).forEach((function(o){-1===r.indexOf(o)&&(t[o]=e[o])})),t}function p(e){var r=function(r){var t=e(r);return r.css?Object(n.a)({},Object(a.a)(t,e(Object(n.a)({theme:r.theme},r.css))),i(r.css,[e.filterProps])):r.sx?Object(n.a)({},Object(a.a)(t,e(Object(n.a)({theme:r.theme},r.sx))),i(r.sx,[e.filterProps])):t};return r.propTypes={},r.filterProps=["css","sx"].concat(Object(o.a)(e.filterProps)),r}var s=p;var c=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var o=function(e){return r.reduce((function(r,t){var o=t(e);return o?Object(a.a)(r,o):r}),{})};return o.propTypes={},o.filterProps=r.reduce((function(e,r){return e.concat(r.filterProps)}),[]),o},l=t(12),d=t(42);function u(e,r){return r&&"string"===typeof r?r.split(".").reduce((function(e,r){return e&&e[r]?e[r]:null}),e):null}var f=function(e){var r=e.prop,t=e.cssProperty,o=void 0===t?e.prop:t,n=e.themeKey,a=e.transform,i=function(e){if(null==e[r])return null;var t=e[r],i=u(e.theme,n)||{};return Object(d.a)(e,t,(function(e){var r;return"function"===typeof i?r=i(e):Array.isArray(i)?r=i[e]||e:(r=u(i,e)||e,a&&(r=a(r))),!1===o?r:Object(l.a)({},o,r)}))};return i.propTypes={},i.filterProps=[r],i};function m(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var h=c(f({prop:"border",themeKey:"borders",transform:m}),f({prop:"borderTop",themeKey:"borders",transform:m}),f({prop:"borderRight",themeKey:"borders",transform:m}),f({prop:"borderBottom",themeKey:"borders",transform:m}),f({prop:"borderLeft",themeKey:"borders",transform:m}),f({prop:"borderColor",themeKey:"palette"}),f({prop:"borderRadius",themeKey:"shape"})),b=c(f({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),f({prop:"display"}),f({prop:"overflow"}),f({prop:"textOverflow"}),f({prop:"visibility"}),f({prop:"whiteSpace"})),g=c(f({prop:"flexBasis"}),f({prop:"flexDirection"}),f({prop:"flexWrap"}),f({prop:"justifyContent"}),f({prop:"alignItems"}),f({prop:"alignContent"}),f({prop:"order"}),f({prop:"flex"}),f({prop:"flexGrow"}),f({prop:"flexShrink"}),f({prop:"alignSelf"}),f({prop:"justifyItems"}),f({prop:"justifySelf"})),j=c(f({prop:"gridGap"}),f({prop:"gridColumnGap"}),f({prop:"gridRowGap"}),f({prop:"gridColumn"}),f({prop:"gridRow"}),f({prop:"gridAutoFlow"}),f({prop:"gridAutoColumns"}),f({prop:"gridAutoRows"}),f({prop:"gridTemplateColumns"}),f({prop:"gridTemplateRows"}),f({prop:"gridTemplateAreas"}),f({prop:"gridArea"})),y=c(f({prop:"position"}),f({prop:"zIndex",themeKey:"zIndex"}),f({prop:"top"}),f({prop:"right"}),f({prop:"bottom"}),f({prop:"left"})),v=c(f({prop:"color",themeKey:"palette"}),f({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),x=f({prop:"boxShadow",themeKey:"shadows"});function O(e){return e<=1?"".concat(100*e,"%"):e}var w=f({prop:"width",transform:O}),P=f({prop:"maxWidth",transform:O}),k=f({prop:"minWidth",transform:O}),N=f({prop:"height",transform:O}),A=f({prop:"maxHeight",transform:O}),D=f({prop:"minHeight",transform:O}),K=(f({prop:"size",cssProperty:"width",transform:O}),f({prop:"size",cssProperty:"height",transform:O}),c(w,P,k,N,A,D,f({prop:"boxSizing"}))),C=t(108),S=c(f({prop:"fontFamily",themeKey:"typography"}),f({prop:"fontSize",themeKey:"typography"}),f({prop:"fontStyle",themeKey:"typography"}),f({prop:"fontWeight",themeKey:"typography"}),f({prop:"letterSpacing"}),f({prop:"lineHeight"}),f({prop:"textAlign"})),I=t(2),T=t(0),M=t.n(T),R=t(6),H=t(43),E=t.n(H),W=t(79);function z(e,r){var t={};return Object.keys(e).forEach((function(o){-1===r.indexOf(o)&&(t[o]=e[o])})),t}var G=t(18),L=function(e){var r=function(e){return function(r){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=o.name,i=Object(I.a)(o,["name"]),p=a,s="function"===typeof r?function(e){return{root:function(t){return r(Object(n.a)({theme:e},t))}}}:{root:r},c=Object(W.a)(s,Object(n.a)({Component:e,name:a||e.displayName,classNamePrefix:p},i));r.filterProps&&(t=r.filterProps,delete r.filterProps),r.propTypes&&(r.propTypes,delete r.propTypes);var l=M.a.forwardRef((function(r,o){var a=r.children,i=r.className,p=r.clone,s=r.component,l=Object(I.a)(r,["children","className","clone","component"]),d=c(r),u=Object(R.a)(d.root,i),f=l;if(t&&(f=z(f,t)),p)return M.a.cloneElement(a,Object(n.a)({className:Object(R.a)(a.props.className,u)},f));if("function"===typeof a)return a(Object(n.a)({className:u},f));var m=s||e;return M.a.createElement(m,Object(n.a)({ref:o,className:u},f),a)}));return E()(l,e),l}}(e);return function(e,t){return r(e,Object(n.a)({defaultTheme:G.a},t))}},B=s(c(h,b,g,j,y,v,x,K,C.b,S)),F=L("div")(B,{name:"MuiBox"});r.a=F},181:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return v}));var o=t(128),n=t(127),a=t(102),i=(t(0),t(13)),p=t(97),s=Object(p.a)((function(e){return{root:{display:"flex",flexDirection:"column",backgroundColor:"white",padding:"1rem",textAlign:"center"},intro:{padding:"1rem"},aboutMeLink:{minHeight:0},row:Object(i.a)({display:"flex",flexDirection:"row",padding:"1rem"},e.breakpoints.down("xs"),{flexDirection:"column"}),aboutMePicture:Object(i.a)({display:"flex",flexDirection:"column",padding:"1rem",width:"30%",height:"50%",margin:"auto"},e.breakpoints.down("xs"),{flexDirection:"column",width:"100%",height:"100%"}),aboutMeDesc:{display:"flex",flexDirection:"column",padding:"1rem",textAlign:"left"},picture:{borderRadius:"1rem",width:"auto",height:"auto"},subheading:{paddingTop:"1rem"}}}),{name:"Aboutme"}),c=t.p+"static/media/Picture.96a8ac04.webp",l="I have real world experience with Front End technologies, such as React for web developement,Ionic and capacitor for javascript to native application development.I like designing and creating stuff for all domains from mobile to desktop.My goal is to make Cross Platform efficient, Clean application that give an easy and Perfect experience.",d="QQI Level 5 Certificate in Software Development",u="With Distinction",f="Software Development, Web Development, Algorithms, Software Architecture",m="08/2018 - 08/2019",h="Software Engineer - Intern",b="Houghton Mifflin Harcourt - Dublin",g="During this internship i worked on one of the UI team responsible for the HMH flagship product HMH ED. Here i learned the React framework using the Single SPA pattern, unit testing, integration testing, and End to End testing. I learned crucial skills, following an agile development methodology participating in sprints, completing tickets. The most important aspect that I learned was the CI pipeline for building complex software and traiging the build process across multiple teams.",j="06/2021 - 08/2021",y=t(3);function v(){var e=s();return Object(y.jsxs)(o.a,{className:e.root,children:[Object(y.jsx)(n.a,{className:e.aboutMeLink,id:"aboutme"}),Object(y.jsx)(a.a,{align:"center",gutterBottom:!0,variant:"h2",children:"About Me"}),Object(y.jsxs)(o.a,{className:e.row,children:[Object(y.jsx)(o.a,{className:e.aboutMePicture,children:Object(y.jsx)("img",{src:c,"aria-label":"Picture of Arshad shah.",className:e.picture,width:150,height:150})}),Object(y.jsxs)(o.a,{className:e.aboutMeDesc,children:[Object(y.jsx)(a.a,{variant:"body1",children:l}),Object(y.jsx)(a.a,{className:e.subheading,variant:"h5",children:"Certificates:"}),Object(y.jsx)(a.a,{variant:"body1",children:d}),Object(y.jsx)(a.a,{variant:"subtitle1",children:u}),Object(y.jsx)(a.a,{variant:"body2",children:f}),Object(y.jsx)(a.a,{variant:"subtitle2",children:m}),Object(y.jsxs)(a.a,{className:e.subheading,variant:"h5",children:["Work Experience:",Object(y.jsxs)(a.a,{variant:"body1",children:[h,Object(y.jsx)(a.a,{variant:"subtitle1",children:b})]}),Object(y.jsx)(a.a,{variant:"body2",children:g}),Object(y.jsx)(a.a,{variant:"subtitle2",children:j})]})]})]})]})}}}]);
//# sourceMappingURL=9.7833be1a.chunk.js.map