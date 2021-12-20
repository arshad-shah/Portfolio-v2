(this["webpackJsonpportfolio-v2.0"]=this["webpackJsonpportfolio-v2.0"]||[]).push([[12],{180:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var i=a(5),r=a(144),n=a(157),o=a(146),s=a(181),c=a(10),l=(a(1),a(184)),d=a(187),h=a(186),p=a(185),u=a(175),b=a(174),j=a(183),g=a(68),f=a(156),k=a(3),m="ProjectCard",x={root:"".concat(m,"-root"),githubLinksAnchor:"".concat(m,"-githubLinksAnchor"),LanguageChip:"".concat(m,"-LanguageChip")},L=Object(c.a)(l.a)((function(e){var t;e.theme;return t={},Object(i.a)(t,"&.".concat(x.root),{backgroundColor:"#ffffff",padding:"1rem"}),Object(i.a)(t,"& .".concat(x.githubLinksAnchor),{"&:visited":{color:"#000000"},"&:link":{color:"#000000"}}),Object(i.a)(t,"& .".concat(x.LanguageChip),{margin:"0.3rem",borderRadius:"5px",padding:"0.5rem",fontWeight:"bold"}),t}));function O(e){var t=e.heading,a=e.description,i=e.languages,r=e.linkAriaLabel,n=e.repoLink,s=e.siteLink,c=e.shopLink,l=function(e){switch(e){case"Kotlin":return Object(k.jsx)(f.g,{});case"React Native":case"ReactJS":return Object(k.jsx)(f.j,{});case"Redux toolkit":return Object(k.jsx)(f.k,{});case"Tailwind CSS":return Object(k.jsx)(f.n,{});case"NextJS":return Object(k.jsx)(f.i,{});case"Material UI":return Object(k.jsx)(f.h,{});case"Styled components":return Object(k.jsx)(f.m,{});case"HTML":return Object(k.jsx)(f.c,{});case"CSS":return Object(k.jsx)(f.a,{});case"Javascript":return Object(k.jsx)(f.e,{});case"JQuery":return Object(k.jsx)(f.f,{});case"Java":return Object(k.jsx)(f.d,{});case"SQLite":return Object(k.jsx)(f.l,{});default:return null}};return Object(k.jsxs)(L,{raised:!0,className:x.root,children:[Object(k.jsx)(p.a,{id:"heading",title:t,"data-testid":"projectHeading"}),Object(k.jsxs)(h.a,{children:[Object(k.jsx)(o.a,{variant:"body2",children:a}),Object(k.jsxs)(o.a,{variant:"overline",children:[Object(k.jsx)("br",{}),i.map((function(e){return Object(k.jsx)(u.a,{icon:l(e),color:"secondary",label:e,className:x.LanguageChip,"data-testid":"languageChip"},e)}))]})]}),Object(k.jsxs)(d.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",alignContents:"center",borderTop:"1px solid #e0e0e0"},children:[Object(k.jsx)(b.a,{title:"Github Repo",arrow:!0,children:Object(k.jsx)(j.a,{"data-testid":"githublink","data-block":"projectlink",role:"button",color:"secondary",sx:{transition:"all 0.2s ease-out","&:hover":{boxShadow:"0px 0px 10px #e0e0e0",transform:"scale(1.2)",transition:"all 0.2s ease-in"}},"aria-label":r,href:n,size:"large",children:Object(k.jsx)(g.d,{})})}),c&&Object(k.jsx)(b.a,{title:"Play Store Link",arrow:!0,children:Object(k.jsx)(j.a,{"data-testid":"shoplink","data-block":"shoplink",role:"button",color:"secondary",sx:{transition:"all 0.2s ease-out","&:hover":{boxShadow:"0px 0px 10px #e0e0e0",transform:"scale(1.2)",transition:"all 0.2s ease-in"}},"aria-label":r,href:c,size:"large",children:Object(k.jsx)(f.b,{})})}),s?Object(k.jsx)(b.a,{title:"Live Site Link",arrow:!0,children:Object(k.jsx)(j.a,{"data-testid":"externalSiteLink","data-block":"projectLinkToSite",role:"button",color:"secondary",sx:{transition:"all 0.2s ease-out","&:hover":{boxShadow:"0px 0px 10px #e0e0e0",transform:"scale(1.2)",transition:"all 0.2s ease-in"}},"aria-labelledby":t,href:s,size:"large",children:Object(k.jsx)(g.c,{})})}):null]})]})}var v=[{heading:"Android App | Nimaz",description:"An app that calculates Muslim Prayer times and displays it in a clean UI. Features are Alarms for each prayer, Tasbeeh counter, Qibla compass, Names of Allah with translation and transliterations",languages:["Kotlin"],linkAriaLabel:"link to Google play store for Nimaz App",shopLink:"https://play.google.com/store/apps/details?id=com.arshadshah.nimaz&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",repoLink:"https://github.com/arshad-shah/Nimaz"},{heading:"Uber Clone",description:"A clone app of uber in react native, for the purpose of learning redux state management.",languages:["React Native","Redux toolkit","Tailwind CSS"],linkAriaLabel:"link to Github for Uber Clone repo",repoLink:"https://github.com/arshad-shah/uber-clone"},{heading:"Android App | MedicineReminder",description:"A reminder designed for medicine doses, the primary focus of the app is to show a notification when it is time for a medicine dose, it uses sqlite for storage of the reminders, uses alarm manager for showing notifications.",languages:["Java","SQLite"],linkAriaLabel:"link to Github for MedicineReminder App",repoLink:"https://github.com/arshad-shah/medicineReminder"},{heading:"Chat App",description:"A chat app created in nextjs, styled components, and Material UI with firebase database for storage to learn server side rendering",languages:["ReactJS","NextJS","Material UI","Styled components"],linkAriaLabel:"link to Github for Chat App repo",repoLink:"https://github.com/arshad-shah/chatty"},{heading:"Portfolio website version 1.0",description:"A Portfolio site that contains all the work i have done so far. Includes work from college such as exercises, projects and also from outside college such as the android app.This is the first version written in pure HTML, CSS and javascript with a pinch of jquery.",languages:["HTML","CSS","Javascript","JQuery"],linkAriaLabel:"link to Github for portfolio version 1",repoLink:"https://github.com/arshad-shah/portfoliov1",siteLink:"https://arshad-shah.github.io/portfoliov1/"},{heading:"Portfolio website version 2.0",description:"The current version of the Portfolio site that contains all the work i have done so far. Includes work from college such as exercises, projects and also from outside college such as the android app.This is the second version written in javascript using the React framework, and designed using Material UI.",languages:["HTML","Javascript","ReactJS","Material UI"],linkAriaLabel:"link to Github for portfolio version 2",repoLink:"https://github.com/arshad-shah/portfolio-v2"}],A="Projects",w={root:"".concat(A,"-root"),projectsLink:"".concat(A,"-projectsLink"),projectsCard:"".concat(A,"-projectsCard"),githubLinksAnchor:"".concat(A,"-githubLinksAnchor")},S=Object(c.a)(r.a)((function(e){var t;e.theme;return t={},Object(i.a)(t,"&.".concat(w.root),{backgroundColor:"#ffffff",padding:"1rem"}),Object(i.a)(t,"& .".concat(w.projectsLink),{minHeight:0}),Object(i.a)(t,"& .".concat(w.projectsCard),{}),Object(i.a)(t,"& .".concat(w.githubLinksAnchor),{"&:visited":{color:"#000000"},"&:link":{color:"#000000"}}),t}));function C(){return Object(k.jsxs)(S,{className:w.root,children:[Object(k.jsx)(n.a,{className:w.projectsLink,id:"projects"}),Object(k.jsx)(o.a,{align:"center",gutterBottom:!0,variant:"h2",children:"Projects"}),Object(k.jsx)(s.a,{container:!0,spacing:4,alignItems:"center",alignContent:"center",justifyContent:"space-around",children:v.map((function(e,t){return Object(k.jsx)(s.a,{"aria-label":"ProjectCard",item:!0,lg:4,md:6,sm:10,xs:12,children:Object(k.jsx)(O,{heading:e.heading,description:e.description,languages:e.languages,linkAriaLabel:e.linkAriaLabel,repoLink:e.repoLink,siteLink:e.siteLink,shopLink:e.shopLink})},t)}))})]})}}}]);
//# sourceMappingURL=12.936e0b94.chunk.js.map