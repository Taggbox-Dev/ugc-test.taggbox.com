"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[5620],{5620:function(e,a,t){t.r(a),t.d(a,{default:function(){return Z}});var l=t(15671),n=t(43144),i=t(60136),s=t(29388),o=t(72791),r=t(62243),c=t(80184),d=function(e){(0,i.Z)(t,e);var a=(0,s.Z)(t);function t(){var e;return(0,l.Z)(this,t),(e=a.call(this)).codeCopy=function(a){e.setState({codeCopied:!0}),setTimeout((function(){e.setState({codeCopied:!1})}),1500),(0,r.U5)(a)},e.state={codeCopied:!1},e}return(0,n.Z)(t,[{key:"render",value:function(){var e=this,a=this.state.codeCopied,t=this.props.url;return(0,c.jsxs)("div",{className:"d-flex align-items-start mb-3 flex-wrap",style:{maxWidth:500},children:[(0,c.jsxs)("div",{className:"d-flex flex-column flex-grow-1 pe-3 mb-2",children:[(0,c.jsx)("div",{className:"position-relative",children:(0,c.jsx)("input",{type:"text",name:"displayUrl",id:"displayUrlCopy_",onClick:function(){e.codeCopy("displayUrlCopy_")},className:"form-control form-control-lg fw-semibold text-ellipsis pe-5",value:t,readOnly:!0})}),(0,c.jsx)("label",{className:"fw-semibold fs-8 text-muted",children:"Copy URL"})]}),(0,c.jsxs)("button",{type:"button",className:"btn btn-primary btn-lg",onClick:function(){e.codeCopy("displayUrlCopy_")},style:{minWidth:130},children:[a?(0,c.jsx)("i",{className:"ri-check-line",style:{color:"#6AC259"}}):(0,c.jsx)("i",{className:"ri-file-copy-fill"}),a?"URL Copied":"Copy URL"]})]})}}]),t}(o.Component),h=t(97326),u=t(9085),m=t(99410),b=t(29795),x=t(29546),f=t(55353),p=t(74342),v=t(44533),y=t(47798),j=t(12576),g=t(8663),C=t(5428),N=o.lazy((function(){return t.e(3879).then(t.bind(t,13879))})),w=function(e){(0,i.Z)(t,e);var a=(0,s.Z)(t);function t(){var e;return(0,l.Z)(this,t),(e=a.call(this)).shareEmbedModal=function(a){return function(t){return e.setState({showModal:!0,id:a})}},e.shareEmbedCallback=function(a){e.setState({showModal:a})},e.codeCopy=function(a){e.setState({codeCopied:!0}),setTimeout((function(){e.setState({codeCopied:!1})}),1500),(0,r.U5)(a)},e.onClickToShare=function(a){return function(t){var l=(0,h.Z)(e),n=e.state.id;e.setState({isLoading:!0}),a&&String(a).length>0?(0,C.q)({htmlCode:document.querySelector(n||"#embedCode_").innerText,email:a,type:3}).then((function(e){u.Am.success("Tagbox widget code successfully sent."),l.setState({showModal:!1,isLoading:!1})})).catch((function(e){u.Am.error("Some error occured, please try again later.")})):u.Am.error("Please enter email id.")}},e.onChangeWidth=function(a){a.target.value&&parseInt(a.target.value)>0&&e.setState({width:a.target.value>100?100:a.target.value})},e.onChangeHeight=function(a){a.target.value&&parseInt(a.target.value)>0&&e.setState({height:a.target.value>100?100:a.target.value})},e.onClickToWidthSign=function(a){return function(t){e.setState({widthSign:a})}},e.onClickToHeightSign=function(a){return function(t){e.setState({heightSign:a})}},e.state={showModal:!1,codeCopied:!1,isLoading:!1,widthSign:"%",heightSign:"%",width:"100",height:"100",id:"#embedCode_"},e}return(0,n.Z)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.codeCopied,l=a.showModal,n=a.width,i=a.height,s=a.widthSign,r=a.heightSign,d=this.props,h=d.copyText,u=d.data;return(0,c.jsxs)("div",{className:"embed_code",children:[(0,c.jsx)("div",{className:"mb-5",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col",children:(0,c.jsxs)(m.Z,{children:[(0,c.jsx)(m.Z.Text,{children:"Width"}),(0,c.jsx)(b.Z.Control,{type:"number",defaultValue:n,value:n,onChange:this.onChangeWidth}),(0,c.jsxs)(x.Z,{align:"end",variant:"outline-secondary",title:s,children:[(0,c.jsx)(f.Z.Item,{href:"#",onClick:this.onClickToWidthSign("%"),children:"Percent (%)"}),(0,c.jsx)(f.Z.Item,{href:"#",onClick:this.onClickToWidthSign("px"),children:"Pixel (PX)"}),(0,c.jsx)(f.Z.Item,{href:"#",onClick:this.onClickToWidthSign("vw"),children:"Viewport Width (VW)"})]})]})}),(0,c.jsx)("div",{className:"col",children:(0,c.jsxs)(m.Z,{children:[(0,c.jsx)(m.Z.Text,{children:"Height"}),(0,c.jsx)(b.Z.Control,{type:"number",defaultValue:i,value:i,onChange:this.onChangeHeight}),(0,c.jsxs)(x.Z,{align:"end",variant:"outline-secondary",title:r,children:[(0,c.jsx)(f.Z.Item,{href:"#",onClick:this.onClickToHeightSign("%"),children:"Percent (%)"}),(0,c.jsx)(f.Z.Item,{href:"#",onClick:this.onClickToHeightSign("px"),children:"Pixel (PX)"}),(0,c.jsx)(f.Z.Item,{href:"#",onClick:this.onClickToHeightSign("vw"),children:"Viewport Height (VH)"})]})]})})]})}),(0,c.jsx)("h5",{className:"mb-3 h6",children:h}),(0,c.jsx)("div",{className:"p-3 bg-light rounded-1 mb-5",children:(0,c.jsxs)(p.Z.Container,{id:"left-tabs-example",defaultActiveKey:"liteCodeEmbed_",children:[(0,c.jsxs)(v.Z,{variant:"underline",className:"mb-3 border-bottom",children:[(0,c.jsx)(v.Z.Item,{className:"me-4",children:(0,c.jsx)(v.Z.Link,{eventKey:"liteCodeEmbed_",className:"px-0 fw-semibold",children:"Lite Code"})}),(0,c.jsx)(v.Z.Item,{className:"",children:(0,c.jsx)(v.Z.Link,{eventKey:"iframeCodeEmbed_",className:"px-0 fw-semibold",children:"Iframe"})})]}),(0,c.jsxs)(p.Z.Content,{children:[(0,c.jsx)(p.Z.Pane,{eventKey:"liteCodeEmbed_",children:(0,c.jsxs)("div",{className:"mb-2 mb-xl-3 position-relative",children:[(0,c.jsxs)("code",{className:"form-control textarea-min-row-4 p-lg-4",id:"embedCode_",onClick:function(){e.codeCopy("embedCode_")},style:{wordBreak:"break-all"},children:['<div class="taggbox-container" style="width:',n,s,";height:",i,r,';overflow: auto;"><div class="taggbox-socialwall" data-wall-id="',g.Doe,u&&Object.keys(u).length>0?u.wallId:null,'" view-url="',g.OCB,g.Doe,u&&Object.keys(u).length>0?u.wallId:null,'"></div><script src="',g.twr,'" type="text/javascript"><\/script></div>']}),(0,c.jsx)("div",{className:"emebed_action position-absolute end-0 bottom-0 pe-2 pb-2",children:(0,c.jsx)(y.Z,{placement:"top",overlay:(0,c.jsx)(j.Z,{children:t?"Code Copied":"Copy Code"}),children:(0,c.jsx)("button",{type:"button",className:"btn btn-link text-decoration-none text-gray-500 p-0 me-2",onClick:function(){e.codeCopy("embedCode_")},children:t?(0,c.jsx)("i",{className:"ri-check-line",style:{color:"#6AC259"}}):(0,c.jsx)("i",{className:"ri-file-copy-fill"})})})})]})}),(0,c.jsx)(p.Z.Pane,{eventKey:"iframeCodeEmbed_",children:(0,c.jsxs)("div",{className:"mb-2 mb-xl-3 position-relative",children:[(0,c.jsxs)("code",{className:"form-control textarea-min-row-4 p-lg-4",id:"embedCodeIframe_",onClick:function(){e.codeCopy("embedCodeIframe_")},children:['<iframe src="',g.OCB,g.Doe,u&&Object.keys(u).length>0?u.wallId:null,'?ugcSuite=1" style="width:100%;height:600px;border:none;"></iframe>']}),(0,c.jsx)("div",{className:"emebed_action position-absolute end-0 bottom-0 pe-2 pb-2",children:(0,c.jsx)(y.Z,{placement:"top",overlay:(0,c.jsx)(j.Z,{children:t?"Code Copied":"Copy Code"}),children:(0,c.jsx)("button",{type:"button",className:"btn btn-link text-decoration-none text-gray-500 p-0 me-2",onClick:function(){e.codeCopy("embedCodeIframe_")},children:t?(0,c.jsx)("i",{className:"ri-check-line",style:{color:"#6AC259"}}):(0,c.jsx)("i",{className:"ri-file-copy-fill"})})})})]})})]})]})}),(0,c.jsx)(o.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:l?(0,c.jsx)(N,{shareEmbedCallback:this.shareEmbedCallback,shareEmbedModal:l,onClickToShare:this.onClickToShare,isLoading:this.state.isLoading,text:"Share this embed code with your team. Enter the email Id to send the code directly to them",heading:"Send code by email"}):null})]})}}]),t}(o.Component),k=function(e){(0,i.Z)(t,e);var a=(0,s.Z)(t);function t(){return(0,l.Z)(this,t),a.apply(this,arguments)}return(0,n.Z)(t,[{key:"render",value:function(){var e=this.props,a=e.data,t=e.showGenratedCode;return(0,c.jsx)("div",{className:"card text-decoration-none",children:(0,c.jsx)("div",{className:"card-body p-lg-7",children:(0,c.jsx)("div",{className:"m-auto",children:(0,c.jsxs)("div",{className:"embed_code",children:[(0,c.jsx)("h5",{className:"mb-5 fw-bolder",children:"Steps To Display Social Wall In Virtual / Hybrid Events"}),(0,c.jsx)("p",{children:"Follow these steps to showcase the Tagbox Display social wall in virtual / hybrid events:"}),(0,c.jsx)("h6",{children:"Step 1: (Choose As Per Platform Requirement)"}),(0,c.jsxs)("div",{className:"ps-3",children:[(0,c.jsx)("h6",{children:"A. Generate the embed code for Social Wall"}),(0,c.jsx)(w,{copyText:"Copy the generated embed code",data:a}),(0,c.jsx)("h6",{children:"OR"}),(0,c.jsx)("h6",{children:"B. Copy The Display Wall URL"}),(0,c.jsx)(d,{url:"".concat(g.OCB).concat(g.Doe).concat(a&&Object.keys(a).length>0?a.wallId:null)})]}),(0,c.jsx)("h6",{className:"mb-5",children:"Step 2: To Embed Tagbox Social Wall into ".concat("p-6connex"==t?"6Connex ":"p-zuddl"==t?"Zuddl":"p-gevme"==t?"GEVME":"p-vfairs"==t?"vFairs":"p-workcast"==t?"WorkCast":"p-pathable"==t?"pathable":"p-hubilo"==t?"Hubilo":"Others"," follow these steps:")}),(0,c.jsx)("ul",{className:"list-unstyled list-points fs-7",children:"p-6connex"==t?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("li",{className:"mb-3",children:"Log in to your 6Connex control panel"}),(0,c.jsx)("li",{className:"mb-3",children:"Go to the content library."}),(0,c.jsxs)("li",{className:"mb-3",children:["Add a Social Wall in the existing content library by clicking on the ",(0,c.jsx)("span",{className:"fw-bold",children:"pencil icon"})," or can create a new content library."]}),(0,c.jsxs)("li",{className:"mb-3",children:["Now, To add Taggbox Social Wall, Click on ",(0,c.jsx)("span",{className:"fw-bold",children:"Add Content."})]}),(0,c.jsx)("li",{className:"mb-3",children:"You will encounter two options to add a social wall in the virtual event: Link or HTML Code."}),(0,c.jsx)("li",{className:"mb-3",children:"Taggbox provide you with both options to embed social wall"}),(0,c.jsxs)("li",{className:"mb-3",children:["Once you add a social Wall in the content library, press the ",(0,c.jsx)("span",{className:"fw-bold",children:"submit button."})]}),(0,c.jsx)("li",{className:"mb-3",children:"You have successfully added a social Wall in the 6connex virtual event platform!"})]}):"p-zuddl"==t?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("li",{className:"mb-3",children:"Login to your Zuddl account"}),(0,c.jsxs)("li",{className:"mb-3",children:["Go to ",(0,c.jsx)("span",{className:"fw-bold",children:"'Zone Setup'"})," and click on ",(0,c.jsx)("span",{className:"fw-bold",children:"'Lobby'"})]}),(0,c.jsxs)("li",{className:"mb-3",children:["Choose ",(0,c.jsx)("span",{className:"fw-bold",children:"'Lobby Widgets'"})," from the header menu.Custom iframe integration."]}),(0,c.jsxs)("li",{className:"mb-3",children:["Here, click on ",(0,c.jsx)("span",{className:"fw-bold",children:"'iFrame'"})]}),(0,c.jsxs)("li",{className:"mb-3",children:["Give a name to your widget & paste the copied social wall URL & then click on ",(0,c.jsx)("span",{className:"fw-bold",children:"'Create Widget'"})]}),(0,c.jsx)("li",{className:"mb-3",children:"And that\u2019s it, and you have successfully embedded the Taggbox Display social wall in the Zuddl Virtual Event Platform!"})]}):"p-gevme"==t?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("li",{className:"mb-3",children:"Login to your GEVME account"}),(0,c.jsxs)("li",{className:"mb-3",children:["Once you are in your project, Click on ",(0,c.jsx)("span",{className:"fw-bold",children:"Virtual"})]}),(0,c.jsxs)("li",{className:"mb-3",children:["Select the page where you want to integrate the widget and click on",(0,c.jsx)("span",{className:"fw-bold",children:" customize."})]}),(0,c.jsx)("li",{className:"mb-3",children:"Click on the Live Bar on the next screen and go to the advanced tab."}),(0,c.jsxs)("li",{className:"mb-3",children:["Choose the Custom Apps drop-down and select ",(0,c.jsx)("span",{className:"fw-bold",children:"Embed iFrame"})]}),(0,c.jsx)("li",{className:"mb-3",children:"The new content block is created with the name My New App. Click that"}),(0,c.jsxs)("li",{className:"mb-3",children:["Rename it with the name you want to display and paste the iframe code into the box provided. You can also choose the Icon you wish to show or upload its image. Click on ",(0,c.jsx)("span",{className:"fw-bold",children:"Save"})," once you\u2019re done."]}),(0,c.jsx)("li",{className:"mb-3",children:"The embedded App is shown under the Live Bar"}),(0,c.jsx)("li",{className:"mb-3",children:"And that\u2019s it. You have successfully embedded the Taggbox Display social wall in the GEVME Virtual Event Platform!"})]}):"p-vfairs"==t?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("li",{className:"mb-3",children:"Login to your vFair virtual event dashboard"}),(0,c.jsx)("li",{className:"mb-3",children:"Now you can paste the embed code in a suitable area of vFairs virtual events. Some examples are:"}),(0,c.jsx)("li",{className:"mb-3",children:"Exhibition hall"}),(0,c.jsx)("li",{className:"mb-3",children:"Waiting Area"}),(0,c.jsx)("li",{className:"mb-3",children:"Lobby"}),(0,c.jsx)("li",{className:"mb-3",children:"Networking zone etc."})]}):"p-workcast"==t?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("li",{className:"mb-3",children:"Login to your WorkCast account"}),(0,c.jsx)("li",{className:"mb-3",children:"Go to your existing Virtual Event"}),(0,c.jsx)("li",{className:"mb-3",children:"Choose a Section where you want to show our social Wall."}),(0,c.jsx)("li",{className:"mb-3",children:"The template can be created with a social media feed built into either a registration channel page or an auditorium. It can be a great way to get audience interactivity fed into your event"}),(0,c.jsx)("li",{className:"mb-3",children:"Now put the social wall embed code in that particular section"}),(0,c.jsx)("li",{className:"mb-3",children:"You have successfully embedded the social wall on WorkCast!"})]}):"p-pathable"==t?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("li",{className:"mb-3",children:"Navigate to the page where you would like visitors to see the social wall"}),(0,c.jsx)("li",{className:"mb-3",children:"Select the New Widget button in the upper right corner"}),(0,c.jsxs)("li",{className:"mb-3",children:["Scroll to the Advanced section and select ",(0,c.jsx)("span",{className:"fw-bold",children:"'Links'"})]}),(0,c.jsxs)("li",{className:"mb-3",children:["Paste your Taggbox Display social wall URL in the URL bar & Click ",(0,c.jsx)("span",{className:"fw-bold",children:"'Save'"})]}),(0,c.jsx)("li",{className:"mb-3",children:"Congratulations! You have successfully embedded your Taggbox Display Social Wall into the Pathable, virtual events platform."})]}):"p-hubilo"==t?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("li",{className:"mb-3",children:"Login to your Hubilo Virtual Event Platform"}),(0,c.jsxs)("li",{className:"mb-3",children:["Go to under Session Settings & in Advanced settings enable the toggle for ",(0,c.jsx)("span",{className:"fw-bold",children:"Custom iframe integration."})]}),(0,c.jsxs)("li",{className:"mb-3",children:["Add button label as per your preference and paste the copied iframe code in the ",(0,c.jsx)("span",{className:"fw-bold",children:"Code Snippet"})," box, then click ",(0,c.jsx)("span",{className:"fw-bold",children:"Save"})]}),(0,c.jsx)("li",{className:"mb-3",children:"Congratulations, you have successfully added the Taggbox Display Social Wall to the Hubilo virtual event platform!"})]}):(0,c.jsx)("li",{className:"mb-3",children:"Congratulations, you\u2019re ready to showcase the social wall at your virtual event!"})})]})})})})}}]),t}(o.Component),Z=k},33573:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function l(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];var n=null;return a.forEach((function(e){if(null==n){var a=e.apply(void 0,t);null!=a&&(n=a)}})),n}return(0,i.default)(l)};var l,n=t(46054),i=(l=n)&&l.__esModule?l:{default:l};e.exports=a.default},46054:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,l,n,i,s){var o=n||"<<anonymous>>",r=s||l;if(null==t[l])return a?new Error("Required "+i+" `"+r+"` was not specified in `"+o+"`."):null;for(var c=arguments.length,d=Array(c>6?c-6:0),h=6;h<c;h++)d[h-6]=arguments[h];return e.apply(void 0,[t,l,o,i,r].concat(d))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},44533:function(e,a,t){t.d(a,{Z:function(){return H}});var l=t(4942),n=t(1413),i=t(45987),s=t(81694),o=t.n(s),r=(t(33573),t(72791)),c=t(32592),d=t(13808),h=t(53649),u=t(73201),m=t(74784),b=t(78633),x=t(90165),f=t(71306),p=t(29439),v=t(39007),y=t(15341),j=t(80184),g=["as","active","eventKey"];function C(e){var a=e.key,t=e.onClick,l=e.active,n=e.id,i=e.role,s=e.disabled,o=(0,r.useContext)(b.Z),c=(0,r.useContext)(m.Z),d=(0,r.useContext)(x.Z),h=l,u={role:i};if(c){i||"tablist"!==c.role||(u.role="tab");var p=c.getControllerId(null!=a?a:null),y=c.getControlledId(null!=a?a:null);u[(0,f.PB)("event-key")]=a,u.id=p||n,!(h=null==l&&null!=a?c.activeKey===a:l)&&(null!=d&&d.unmountOnExit||null!=d&&d.mountOnEnter)||(u["aria-controls"]=y)}return"tab"===u.role&&(u["aria-selected"]=h,h||(u.tabIndex=-1),s&&(u.tabIndex=-1,u["aria-disabled"]=!0)),u.onClick=(0,v.Z)((function(e){s||(null==t||t(e),null!=a&&o&&!e.isPropagationStopped()&&o(a,e))})),[u,{isActive:h}]}var N=r.forwardRef((function(e,a){var t=e.as,l=void 0===t?y.ZP:t,n=e.active,i=e.eventKey,s=function(e,a){if(null==e)return{};var t,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,g),o=C(Object.assign({key:(0,b.h)(i,s.href),active:n},s)),r=(0,p.Z)(o,2),c=r[0],d=r[1];return c[(0,f.PB)("active")]=d.isActive,(0,j.jsx)(l,Object.assign({},s,c,{ref:a}))}));N.displayName="NavItem";var w=N,k=["as","onSelect","activeKey","role","onKeyDown"];var Z=function(){},S=(0,f.PB)("event-key"),T=r.forwardRef((function(e,a){var t,l,n=e.as,i=void 0===n?"div":n,s=e.onSelect,o=e.activeKey,c=e.role,p=e.onKeyDown,v=function(e,a){if(null==e)return{};var t,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,k),y=(0,h.Z)(),g=(0,r.useRef)(!1),C=(0,r.useContext)(b.Z),N=(0,r.useContext)(x.Z);N&&(c=c||"tablist",o=N.activeKey,t=N.getControlledId,l=N.getControllerId);var w=(0,r.useRef)(null),T=function(e){var a=w.current;if(!a)return null;var t=(0,d.Z)(a,"[".concat(S,"]:not([aria-disabled=true])")),l=a.querySelector("[aria-selected=true]");if(!l||l!==document.activeElement)return null;var n=t.indexOf(l);if(-1===n)return null;var i=n+e;return i>=t.length&&(i=0),i<0&&(i=t.length-1),t[i]},E=function(e,a){null!=e&&(null==s||s(e,a),null==C||C(e,a))};(0,r.useEffect)((function(){if(w.current&&g.current){var e=w.current.querySelector("[".concat(S,"][aria-selected=true]"));null==e||e.focus()}g.current=!1}));var I=(0,u.Z)(a,w);return(0,j.jsx)(b.Z.Provider,{value:E,children:(0,j.jsx)(m.Z.Provider,{value:{role:c,activeKey:(0,b.h)(o),getControlledId:t||Z,getControllerId:l||Z},children:(0,j.jsx)(i,Object.assign({},v,{onKeyDown:function(e){if(null==p||p(e),N){var a;switch(e.key){case"ArrowLeft":case"ArrowUp":a=T(-1);break;case"ArrowRight":case"ArrowDown":a=T(1);break;default:return}a&&(e.preventDefault(),E(a.dataset[(0,f.$F)("EventKey")]||null,e),g.current=!0,y())}},ref:I,role:c}))})})}));T.displayName="Nav";var E=Object.assign(T,{Item:w}),I=t(10162),P=t(5715),L=t(96040),A=(0,t(66543).Z)("nav-item"),_=t(16445),W=["bsPrefix","className","as","active","eventKey"],O=r.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.as,r=void 0===s?_.Z:s,c=e.active,d=e.eventKey,h=(0,i.Z)(e,W);t=(0,I.vE)(t,"nav-link");var u=C((0,n.Z)({key:(0,b.h)(d,h.href),active:c},h)),m=(0,p.Z)(u,2),x=m[0],f=m[1];return(0,j.jsx)(r,(0,n.Z)((0,n.Z)((0,n.Z)({},h),x),{},{ref:a,className:o()(l,t,h.disabled&&"disabled",f.isActive&&"active")}))}));O.displayName="NavLink",O.defaultProps={disabled:!1};var K=O,R=["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","activeKey"],D=r.forwardRef((function(e,a){var t,s,d,h=(0,c.Ch)(e,{activeKey:"onSelect"}),u=h.as,m=void 0===u?"div":u,b=h.bsPrefix,x=h.variant,f=h.fill,p=h.justify,v=h.navbar,y=h.navbarScroll,g=h.className,C=h.activeKey,N=(0,i.Z)(h,R),w=(0,I.vE)(b,"nav"),k=!1,Z=(0,r.useContext)(P.Z),S=(0,r.useContext)(L.Z);return Z?(s=Z.bsPrefix,k=null==v||v):S&&(d=S.cardHeaderBsPrefix),(0,j.jsx)(E,(0,n.Z)({as:m,ref:a,activeKey:C,className:o()(g,(t={},(0,l.Z)(t,w,!k),(0,l.Z)(t,"".concat(s,"-nav"),k),(0,l.Z)(t,"".concat(s,"-nav-scroll"),k&&y),(0,l.Z)(t,"".concat(d,"-").concat(x),!!d),(0,l.Z)(t,"".concat(w,"-").concat(x),!!x),(0,l.Z)(t,"".concat(w,"-fill"),f),(0,l.Z)(t,"".concat(w,"-justified"),p),t))},N))}));D.displayName="Nav",D.defaultProps={justify:!1,fill:!1};var H=Object.assign(D,{Item:A,Link:K})}}]);
//# sourceMappingURL=5620.bfdc96fa.chunk.js.map