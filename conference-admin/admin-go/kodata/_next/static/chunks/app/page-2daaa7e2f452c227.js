(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7572:function(e,n,t){Promise.resolve().then(t.bind(t,7488))},52:function(e,n,t){"use strict";t.r(n);var s=t(7437),r=t(1693),l=t.n(r),a=t(1396),i=t.n(a);n.default=function(e){var n;let{children:t,link:r,external:a,inline:c,clickHandler:o,small:d,main:u,disabled:f,inverted:h}=e;return n=r?a?(0,s.jsxs)("a",{href:r,target:"_blank",children:["  ",(0,s.jsx)("span",{children:t})," "]}):(0,s.jsxs)(i(),{href:r,children:["  ",(0,s.jsx)("span",{children:t})," "]}):o?(0,s.jsxs)(i(),{className:"__container",href:"#",onClick:o,children:[" ",(0,s.jsx)("span",{children:t}),"  "]}):(0,s.jsxs)(i(),{href:"#",className:"__container",children:["  ",(0,s.jsx)("span",{children:t})," "]}),(0,s.jsx)("div",{className:l().button,children:n})}},7488:function(e,n,t){"use strict";let s;t.r(n),t.d(n,{default:function(){return q}});var r=t(7437),l=t(9617),a=t.n(l),i=t(2265),c=t(558),o=t.n(c),d=t(52),u=function(e){let{id:n,name:t,type:s,installInfra:l,debug:a,status:c,synced:u,vclusterRef:f,secretRef:h,handleDelete:p}=e,[m,_]=(0,i.useState)(!1),v=()=>{m?_(!1):_(!0)};return(0,r.jsxs)("div",{onClick:()=>v(),className:"".concat(o().EnvironmentItem,"  ").concat(m?o().open:" "," "),children:[(0,r.jsxs)("div",{className:o().openTag,children:[!m&&(0,r.jsx)(r.Fragment,{children:"Click for details"}),m&&(0,r.jsx)(r.Fragment,{children:"Close"})]}),(0,r.jsxs)("div",{className:o().header,children:[(0,r.jsxs)("h5",{children:[" ",(0,r.jsx)("span",{children:"Environment:"})," ",t]}),(0,r.jsxs)("div",{className:o().headerStatusTags,children:[(0,r.jsxs)("div",{className:"".concat(o().headerStatusTag,"  ").concat(o().approved," "),children:["Synced: ",u]}),(0,r.jsxs)("div",{className:"".concat(o().headerStatusTag,"  ").concat(o().approved," "),children:["Ready: ",c," "]})]})]}),(0,r.jsxs)("div",{className:o().description,children:[(0,r.jsxs)("div",{className:o().descriptionTo,children:[(0,r.jsx)("span",{children:"Type:"})," ",s]}),(0,r.jsxs)("div",{className:o().descriptionSubject,children:[(0,r.jsx)("span",{children:" Install Infrastructure:"})," ",l.toString()]}),(0,r.jsxs)("div",{className:o().descriptionSubject,children:[(0,r.jsx)("span",{children:" Frontend Debug:"})," ",a.toString()]}),(0,r.jsxs)("div",{className:o().descriptionSubject,children:["True"!=c&&(0,r.jsx)("p",{children:"Waiting for the Environment to be Ready."}),"True"==c&&null!=f&&(0,r.jsxs)("p",{children:["Connect to this environment running ",(0,r.jsxs)("b",{children:["`vcluster connect ",f," --server https://localhost:8443 -- zsh`"]})," "]}),"True"==c&&null!=h&&(0,r.jsxs)("p",{children:["Use the secret called ",(0,r.jsxs)("b",{children:["`",h,"`"]})," to connect"]})]}),(0,r.jsx)("div",{className:o().descriptionAction,children:(0,r.jsx)(d.default,{clickHandler:()=>p(t),children:"Delete"})})]})]})},f=function(){let[e,n]=(0,i.useState)(!1),[t,s]=(0,i.useState)(!1),[l,a]=(0,i.useState)([]),[c,d]=(0,i.useState)(0),f=e=>{n(!0),s(!1),console.log("Deleting Environment ..."+e),fetch("/api/environments/"+e,{method:"DELETE",headers:{accept:"application/json"}}).then(e=>e.json()).then(()=>{h(filter),n(!1)}).catch(e=>{console.log(e),n(!1),s(!0)})},h=()=>{fetch("/api/environments/").then(e=>e.json()).then(e=>{console.log("Fetching Environments ..."),a(e),n(!1)}).catch(e=>{console.log(e)})};return(0,i.useEffect)(()=>{let e=setInterval(()=>{n(!0),h()},3e3);return()=>clearInterval(e)},[c]),(0,i.useEffect)(()=>{n(!0),h()},[]),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:o().EnvironmentList,children:[l&&l.map((e,n)=>(0,r.jsx)(u,{id:e.metadata.uid,name:e.metadata.name,type:e.spec.compositionSelector.matchLabels.type,installInfra:e.spec.parameters.installInfra,debug:e.spec.parameters.frontend.debug,status:e.status.conditions[1].status,synced:e.status.conditions[0].status,vclusterRef:e.spec.resourceRef.name,secretRef:e.spec.writeConnectionSecretToRef.name,handleDelete:f},e.metadata.uid)),l&&0===l.length&&(0,r.jsx)("span",{children:"There are no environments."})]})})},h=t(6782),p=t.n(h),m=t(2658),_=t.n(m);function v(e){let{label:n,id:t,name:s,value:l}=e;return(0,r.jsxs)("div",{className:_().textfield,children:[(0,r.jsx)("label",{children:n}),(0,r.jsx)("input",{type:"text",id:t,name:s,value:l})]})}var x=t(1014),b=t.n(x);function j(e){let{label:n,id:t,name:s,value:l,children:a}=e;return(0,r.jsxs)("div",{className:b().select,children:[(0,r.jsx)("label",{children:n}),(0,r.jsx)("div",{className:b().selectContainer,children:(0,r.jsx)("select",{name:s,id:t,children:a})})]})}var g=t(2982),y=t.n(g);function N(e){let{label:n,id:t,name:s,value:l}=e;return(0,r.jsx)("div",{className:y().switch,children:(0,r.jsxs)("label",{children:[n,(0,r.jsx)("input",{type:"checkbox",value:l,id:t}),(0,r.jsx)("span",{class:y().slider})]})})}var E=function(){let[e,n]=(0,i.useState)(!1),[t,s]=(0,i.useState)(!1),[l,a]=(0,i.useState)(!1),[c,o]=(0,i.useState)(""),[u,f]=(0,i.useState)(""),[h,m]=(0,i.useState)(!1),[_,x]=(0,i.useState)(!1);return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:p().EventsList,children:[!l&&(0,r.jsxs)("div",{children:[(0,r.jsx)(v,{label:"Name",id:"name",name:"name"}),(0,r.jsx)(j,{label:"Type",id:"type",name:"type",children:(0,r.jsx)("option",{value:"development",children:"Development"})}),(0,r.jsx)(N,{label:"Install Infrastructure",id:"installInfra",name:"installInfra"}),(0,r.jsx)(N,{label:"Frontend Debug",id:"debug",name:"debug"}),t&&(0,r.jsx)("small",{className:"mt-3 d-inline-block text-danger",children:"Something went wrong. Please try again later."}),(0,r.jsx)(d.default,{type:"submit",clickHandler:()=>{n(!0),s(!1);var e=document.getElementById("name").value;console.log("Name: "+e);var t=document.getElementById("type").value;console.log("Type: "+t);var r=document.getElementById("installInfra").checked;console.log("Install Infra? "+r);var l=document.getElementById("debug").checked;console.log("debug? "+l);let i={name:e,parameters:{type:t,installInfra:r,frontend:{debug:l}}};console.log("Sending Post!"+JSON.stringify(i));try{fetch("/api/environments/",{method:"POST",body:JSON.stringify(i),headers:{accept:"application/json"}}).then(e=>e.json()).then(e=>{o(""),f(""),m(""),x(""),n(!1),a(!0)})}catch(e){n(!1),s(!0)}},children:"Create New Environment"})]}),l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"Thanks for creating an new Environment with us!"}),(0,r.jsx)(d.default,{clickHandler:()=>{a(!1)},children:"Create another Environment"})]})]})})};function T(e){return n=>!!n.type&&n.type.tabsRole===e}let C=T("Tab"),S=T("TabList"),k=T("TabPanel");function w(e,n){return i.Children.map(e,e=>null===e?null:C(e)||S(e)||k(e)?n(e):e.props&&e.props.children&&"object"==typeof e.props.children?(0,i.cloneElement)(e,{...e.props,children:w(e.props.children,n)}):e)}var I=function(){for(var e,n,t=0,s="";t<arguments.length;)(e=arguments[t++])&&(n=function e(n){var t,s,r="";if("string"==typeof n||"number"==typeof n)r+=n;else if("object"==typeof n){if(Array.isArray(n))for(t=0;t<n.length;t++)n[t]&&(s=e(n[t]))&&(r&&(r+=" "),r+=s);else for(t in n)n[t]&&(r&&(r+=" "),r+=t)}return r}(e))&&(s&&(s+=" "),s+=n);return s};function R(e){let n=0;return!function e(n,t){return i.Children.forEach(n,n=>{null!==n&&(C(n)||k(n)?t(n):n.props&&n.props.children&&"object"==typeof n.props.children&&(S(n)&&t(n),e(n.props.children,t)))})}(e,e=>{C(e)&&n++}),n}function A(e){return e&&"getAttribute"in e}function L(e){return A(e)&&e.getAttribute("data-rttab")}function O(e){return A(e)&&"true"===e.getAttribute("aria-disabled")}let D={className:"react-tabs",focus:!1},B=e=>{let n=(0,i.useRef)([]),t=(0,i.useRef)([]),r=(0,i.useRef)();function l(n,t){if(n<0||n>=o())return;let{onSelect:s,selectedIndex:r}=e;s(n,r,t)}function a(e){let n=o();for(let t=e+1;t<n;t++)if(!O(d(t)))return t;for(let n=0;n<e;n++)if(!O(d(n)))return n;return e}function c(e){let n=e;for(;n--;)if(!O(d(n)))return n;for(n=o();n-- >e;)if(!O(d(n)))return n;return e}function o(){let{children:n}=e;return R(n)}function d(e){return n.current[`tabs-${e}`]}function u(e){let n=e.target;do if(f(n)){if(O(n))return;let t=[].slice.call(n.parentNode.children).filter(L).indexOf(n);l(t,e);return}while(null!=(n=n.parentNode))}function f(e){if(!L(e))return!1;let n=e.parentElement;do{if(n===r.current)return!0;if(n.getAttribute("data-rttabs"))break;n=n.parentElement}while(n);return!1}let{children:h,className:p,disabledTabClassName:m,domRef:_,focus:v,forceRenderTabPanel:x,onSelect:b,selectedIndex:j,selectedTabClassName:g,selectedTabPanelClassName:y,environment:N,disableUpDownKeys:E,disableLeftRightKeys:T,...A}={...D,...e};return i.createElement("div",Object.assign({},A,{className:I(p),onClick:u,onKeyDown:function(n){let{direction:t,disableUpDownKeys:s,disableLeftRightKeys:r}=e;if(f(n.target)){let{selectedIndex:i}=e,f=!1,h=!1;("Space"===n.code||32===n.keyCode||"Enter"===n.code||13===n.keyCode)&&(f=!0,h=!1,u(n)),(r||37!==n.keyCode&&"ArrowLeft"!==n.code)&&(s||38!==n.keyCode&&"ArrowUp"!==n.code)?(r||39!==n.keyCode&&"ArrowRight"!==n.code)&&(s||40!==n.keyCode&&"ArrowDown"!==n.code)?35===n.keyCode||"End"===n.code?(i=function(){let e=o();for(;e--;)if(!O(d(e)))return e;return null}(),f=!0,h=!0):(36===n.keyCode||"Home"===n.code)&&(i=function(){let e=o();for(let n=0;n<e;n++)if(!O(d(n)))return n;return null}(),f=!0,h=!0):(i="rtl"===t?c(i):a(i),f=!0,h=!0):(i="rtl"===t?a(i):c(i),f=!0,h=!0),f&&n.preventDefault(),h&&l(i,n)}},ref:e=>{r.current=e,_&&_(e)},"data-rttabs":!0}),function(){let r=0,{children:l,disabledTabClassName:a,focus:c,forceRenderTabPanel:u,selectedIndex:f,selectedTabClassName:h,selectedTabPanelClassName:p,environment:m}=e;t.current=t.current||[];let _=t.current.length-o(),v=(0,i.useId)();for(;_++<0;)t.current.push(`${v}${t.current.length}`);return w(l,e=>{let l=e;if(S(e)){let r=0,o=!1;null==s&&function(e){let n=e||("undefined"!=typeof window?window:void 0);try{s=!!(void 0!==n&&n.document&&n.document.activeElement)}catch(e){s=!1}}(m);let u=m||("undefined"!=typeof window?window:void 0);s&&u&&(o=i.Children.toArray(e.props.children).filter(C).some((e,n)=>u.document.activeElement===d(n))),l=(0,i.cloneElement)(e,{children:w(e.props.children,e=>{let s=`tabs-${r}`,l=f===r,d={tabRef:e=>{n.current[s]=e},id:t.current[r],selected:l,focus:l&&(c||o)};return h&&(d.selectedClassName=h),a&&(d.disabledClassName=a),r++,(0,i.cloneElement)(e,d)})})}else if(k(e)){let n={id:t.current[r],selected:f===r};u&&(n.forceRender=u),p&&(n.selectedClassName=p),r++,l=(0,i.cloneElement)(e,n)}return l})}())};B.propTypes={};let F={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},$=e=>null===e.selectedIndex?1:0,H=(e,n)=>{},P=e=>{let{children:n,defaultFocus:t,defaultIndex:s,focusTabOnClick:r,onSelect:l,...a}={...F,...e},[c,o]=(0,i.useState)(t),[d]=(0,i.useState)($(a)),[u,f]=(0,i.useState)(1===d?s||0:null);if((0,i.useEffect)(()=>{o(!1)},[]),1===d){let e=R(n);(0,i.useEffect)(()=>{if(null!=u){let n=Math.max(0,e-1);f(Math.min(u,n))}},[e])}H(a,d);let h={...e,...a};return h.focus=c,h.onSelect=(e,n,t)=>{("function"!=typeof l||!1!==l(e,n,t))&&(r&&o(!0),1===d&&f(e))},null!=u&&(h.selectedIndex=u),delete h.defaultFocus,delete h.defaultIndex,delete h.focusTabOnClick,i.createElement(B,h,n)};P.propTypes={},P.tabsRole="Tabs";let U={className:"react-tabs__tab-list"},K=e=>{let{children:n,className:t,...s}={...U,...e};return i.createElement("ul",Object.assign({},s,{className:I(t),role:"tablist"}),n)};K.tabsRole="TabList",K.propTypes={};let J="react-tabs__tab",M={className:J,disabledClassName:`${J}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${J}--selected`},z=e=>{let n=(0,i.useRef)(),{children:t,className:s,disabled:r,disabledClassName:l,focus:a,id:c,selected:o,selectedClassName:d,tabIndex:u,tabRef:f,...h}={...M,...e};return(0,i.useEffect)(()=>{o&&a&&n.current.focus()},[o,a]),i.createElement("li",Object.assign({},h,{className:I(s,{[d]:o,[l]:r}),ref:e=>{n.current=e,f&&f(e)},role:"tab",id:`tab${c}`,"aria-selected":o?"true":"false","aria-disabled":r?"true":"false","aria-controls":`panel${c}`,tabIndex:u||(o?"0":null),"data-rttab":!0}),t)};z.propTypes={},z.tabsRole="Tab";let G="react-tabs__tab-panel",Y={className:G,forceRender:!1,selectedClassName:`${G}--selected`},X=e=>{let{children:n,className:t,forceRender:s,id:r,selected:l,selectedClassName:a,...c}={...Y,...e};return i.createElement("div",Object.assign({},c,{className:I(t,{[a]:l}),role:"tabpanel",id:`panel${r}`,"aria-labelledby":`tab${r}`}),s||l?n:null)};function q(){let[e,n]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{n(!0),n(!1)},[]),(0,r.jsxs)("main",{className:a().main,children:[(0,r.jsx)("div",{className:"".concat(a().hero," "),children:(0,r.jsx)("div",{className:"grid content noMargin",children:(0,r.jsx)("div",{className:"col full",children:(0,r.jsx)("h3",{children:"Admin"})})})}),(0,r.jsx)("div",{className:"".concat(a().BackofficeContent," "),children:(0,r.jsx)("div",{className:"grid content noMargin",children:(0,r.jsx)("div",{className:"col full",children:(0,r.jsx)("div",{className:"".concat(a().tabs," "),children:(0,r.jsxs)(P,{children:[(0,r.jsxs)(K,{children:[(0,r.jsx)(z,{children:"Environments"}),(0,r.jsx)(z,{children:"New Environment"})]}),(0,r.jsx)(X,{children:(0,r.jsx)(f,{})}),(0,r.jsx)(X,{children:(0,r.jsx)(E,{})})]})})})})})]})}X.tabsRole="TabPanel",X.propTypes={}},1693:function(e){e.exports={button:"button_button__zBiTp"}},1014:function(e){e.exports={select:"select_select__u_4TY",selectContainer:"select_selectContainer__hes4G"}},2982:function(e){e.exports={switch:"switch_switch__dHdT9",sliderContainer:"switch_sliderContainer__ke_Gx",slider:"switch_slider__uFYmJ"}},2658:function(e){e.exports={textfield:"textfield_textfield__SB1o4"}},9617:function(e){e.exports={main:"backoffice_main__51xWt",hero:"backoffice_hero__Hwfjd",BackofficeContent:"backoffice_BackofficeContent__XwxMo",tabs:"backoffice_tabs__TzmKF"}},558:function(e){e.exports={EnvironmentList:"environments_EnvironmentList__K8mUk",EnvironmentItem:"environments_EnvironmentItem__P4LrH",openTag:"environments_openTag__GrStg",header:"environments_header__Vyto9",headerStatusTags:"environments_headerStatusTags__UDEKj",headerStatusTag:"environments_headerStatusTag__0knGk",approved:"environments_approved__9QqJe",rejected:"environments_rejected__s4wYr",description:"environments_description__iTznU",open:"environments_open__b5gp_",descriptionTo:"environments_descriptionTo__gCEoj",descriptionSubject:"environments_descriptionSubject__XNyT5",descriptionAction:"environments_descriptionAction__Z6j_y",descriptionBody:"environments_descriptionBody__UeUxb"}},6782:function(e){e.exports={EventsList:"events_EventsList__H1Y8V",EventItem:"events_EventItem__Jg_Cn",openTag:"events_openTag__tx1uO",header:"events_header__K3j9x",description:"events_description__IXpCv",open:"events_open__wCFok",codeContainer:"events_codeContainer__qSoh1"}}},function(e){e.O(0,[176,971,596,744],function(){return e(e.s=7572)}),_N_E=e.O()}]);