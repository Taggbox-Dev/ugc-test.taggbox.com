"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[5304],{5304:function(e,s,t){t.r(s);var i=t(15671),n=t(43144),l=t(97326),r=t(60136),a=t(29388),c=t(72791),g=t(72426),o=t.n(g),d=t(23794),u=t(56600),m=t(64802),p=t(34867),h=(t(9085),t(80184)),x=function(e){try{var s=e;return e&&String(e).length>0&&String(e).includes('"img/flags/')?((s=String(e).replace("img/flags/",(0,u.F)("media/images/flags/")))&&String(s).includes(".png")&&(s=String(s).replace(".png",".svg")),s=String(s).replace("<img",'<img class="h-16px w-20px me-1" ')):e}catch(t){return e}},f=function(e){try{var s=e;return e&&String(e).length>0&&String(e).includes('"img/browser-svg/')?(s=String(e).replace("img/browser-svg/",(0,u.F)("media/icons/browser-svg/")),s=String(s).replace("<img",'<img class="h-20px w-20px me-1" ')):e}catch(t){return e}},b=function(e){(0,r.Z)(t,e);var s=(0,a.Z)(t);function t(){var e;(0,i.Z)(this,t);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=s.call.apply(s,[this].concat(r))).state={tncLoading:!1},e.onClickToDownloadFile=function(s){return function(t){e.setState({tncLoading:!0});var i=(0,l.Z)(e);e.onRequestTnc(s).then((function(e){setTimeout((function(){return i.setState({tncLoading:!1})}),1e3)})).catch((function(e){setTimeout((function(){return i.setState({tncLoading:!1})}),1e3)}))}},e.onRequestTnc=function(e){return new Promise((function(s){try{return(0,m.saveAs)(e,"TermsAndConditions.docx"),Promise.resolved("")}catch(t){return Promise.resolved("")}}))},e}return(0,n.Z)(t,[{key:"render",value:function(){var e=this.props,s=e.modalAssetData,t=e.onUpdateRejectedRightDetail,i=this.state.tncLoading;return(0,h.jsx)("div",{className:"p-lg-6 p-3",children:(0,h.jsxs)("div",{className:"mb-6",children:[(0,h.jsx)("h6",{children:"Information"}),(0,h.jsxs)("ul",{className:"list-group rounded-1",children:[(0,h.jsxs)("li",{className:"list-group-item d-flex justify-content-between p-3 bg-light",children:[(0,h.jsx)("span",{className:"text-ellipsis text-gray-600 fs-7 pe-3",children:"User handle"}),(0,h.jsxs)("span",{className:"text-ellipsis fw-bolder text-gray-800 fs-7",children:["@",s.username]})]}),(0,h.jsxs)("li",{className:"list-group-item d-flex justify-content-between p-3 bg-light",children:[(0,h.jsx)("span",{className:"text-ellipsis text-gray-600 fs-7 pe-3",children:"User name"}),(0,h.jsx)("span",{className:"text-ellipsis fw-bolder text-gray-800 fs-7",children:s.username})]}),(0,h.jsxs)("li",{className:"list-group-item d-flex justify-content-between p-3 bg-light",children:[(0,h.jsx)("span",{className:"text-ellipsis text-gray-600 fs-7 pe-3",children:"Post Approval Date"}),(0,h.jsx)("span",{className:"text-ellipsis fw-bolder text-gray-800 fs-7",children:o()(s.ugcRights.created).format("LLLL")})]}),(0,h.jsxs)("li",{className:"list-group-item d-flex justify-content-between p-3 bg-light",children:[(0,h.jsx)("span",{className:"text-ellipsis text-gray-600 fs-7 pe-3",children:"User IP"}),(0,h.jsx)("span",{className:"text-ellipsis fw-bolder text-gray-800 fs-7",children:""==s.ugcRights.userIP?"--":s.ugcRights.userIP})]}),(0,h.jsxs)("li",{className:"list-group-item d-flex justify-content-between p-3 bg-light",children:[(0,h.jsx)("span",{className:"text-ellipsis text-gray-600 fs-7 pe-3",children:"Timezone"}),(0,h.jsx)("span",{className:"text-ellipsis fw-bolder text-gray-800 fs-7",children:""==s.ugcRights.timezone?"--":(0,p.ZP)(x(s.ugcRights.timezone))})]}),(0,h.jsxs)("li",{className:"list-group-item d-flex justify-content-between p-3 bg-light",children:[(0,h.jsx)("span",{className:"text-ellipsis text-gray-600 fs-7 pe-3",children:"User Agent"}),(0,h.jsx)("span",{className:"text-ellipsis fw-bolder text-gray-800 fs-7",children:""==s.ugcRights.userAgent?"--":(0,p.ZP)(f(s.ugcRights.userAgent))})]}),(0,h.jsxs)("li",{className:"list-group-item d-flex justify-content-between p-3 bg-light",children:[(0,h.jsx)("span",{className:"text-ellipsis text-gray-600 fs-7 pe-3",children:"Terms & Condition"}),(0,h.jsx)("span",{className:"text-ellipsis fw-bolder text-gray-800",children:(0,h.jsxs)("button",{type:"button",className:"btn btn-outline-primary btn-sm ".concat(i?"spinner disabled":""),onClick:"CustomUrlType"==s.ugcRights.custom_term_type?window.open(s.ugcRights.custom_terms,"_blank"):this.onClickToDownloadFile(s.ugcRights.custom_terms),children:["Download",(0,h.jsx)("i",{className:"ri-file-download-line ms-1"})]})})]})]}),(0,h.jsx)("h6",{children:"User Comment"}),(0,h.jsx)("div",{className:"card rounded-1 mb-5 overflow-hidden",children:(0,h.jsx)("div",{className:"card-body d-flex align-items-center justify-content-between bg-light",children:(0,h.jsx)("p",{className:"fs-9 fw-medium",children:s.ugcRights&&Object.keys(s.ugcRights).length>0?s.ugcRights.comment:""})})}),(0,h.jsxs)("button",{type:"button",className:"btn btn-primary w-100",onClick:t,children:[(0,h.jsx)("span",{className:"svg-icon ms-1",children:(0,h.jsx)(d.Z,{src:(0,u.F)("media/icons/svg-icons/rights-approved-fill.svg"),height:20,width:20})}),"Get Rights"]})]})})}}]),t}(c.Component);s.default=b}}]);
//# sourceMappingURL=5304.4f67e05e.chunk.js.map