"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[8063],{91731:function(e,s,t){var a=t(15671),l=t(43144),i=t(97326),n=t(60136),c=t(29388),r=t(72791),o=t(78687),d=t(11087),m=t(28949),h=t(92719),p=t(67839),x=t(56600),u=t(71801),g=t(80184),b=function(e){try{var s=[],t={};return e.map((function(e){t[e.id]||(s.push(e),t[e.id]=!0)})),s}catch(a){return e}},f=function(e){(0,n.Z)(t,e);var s=(0,c.Z)(t);function t(){var e;(0,a.Z)(this,t);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(e=s.call.apply(s,[this].concat(n))).state={templeteList:[],isUpdate:!1,selectTemp:null},e.onLoad=function(){var s=(0,i.Z)(e),t=e.props,a=t.templeteList,l=t.state;if(a&&a.length>0){var n=a.filter((function(e){return 1==e.Theme.type}));s.setState({templeteList:b(n),selectTemp:l.selectedTemplate&&Object.keys(l.selectedTemplate).length>0?l.selectedTemplate:n[0]})}},e.onFiltertemplateName=function(s){var t=e.state.templeteList;if(t&&t.length>0){var a=t.filter((function(e){return e.id==s}));return a&&a.length>0?a[0].name:""}return""},e}return(0,l.Z)(t,[{key:"componentWillMount",value:function(){var e=this;setTimeout((function(){e.onLoad()}),100)}},{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.onLoad()}),100)}},{key:"render",value:function(){var e=this,s=this.state,t=s.templeteList,a=s.selectTemp,l=this.props,i=l.onSelectTemplate,n=l.state;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("label",{className:"text-gray-800 mb-2",children:["Select Template ",(0,g.jsx)("strong",{className:"text-danger",children:"*"})]}),(0,g.jsxs)(m.Z.Item,{eventKey:"8",className:"pb-3",children:[(0,g.jsx)(m.Z.Header,{className:"w-100",children:(0,g.jsx)("span",{className:"fs-9 fw-medium",children:a?a.name?a.name:this.onFiltertemplateName(a.id):"Please select template."})}),(0,g.jsxs)(m.Z.Body,{className:"border rounded-1 mt-1",children:[t&&t.length>0?(0,g.jsx)(h.Z,{type:"radio",className:"flex-column w-100 pb-2",name:"options",children:t.map((function(s,t){return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(p.Z,{className:"p-0 card rounded-1 text-decoration-none cursor-pointer mb-2 ".concat(n.selectedTemplate&&Object.keys(n.selectedTemplate).length>0&&s.id==n.selectedTemplate.id?"active":""),variant:"outline-secondary",id:"tbg-radio-1",value:t,onClick:function(){e.setState({selectTemp:s},(function(){i(s)}))},children:(0,g.jsx)("div",{className:"card-body p-2",children:(0,g.jsxs)("div",{className:"d-flex align-items-center",children:[(0,g.jsx)("div",{className:"symbol symbol-40 flex-shrink-0 me-2 text-gray-400",children:(0,g.jsx)("img",{className:"img-fluid",src:(0,x.F)("media/images/themes/".concat(s.Theme.id,".png")),height:"40",width:"40",alt:s.name})}),(0,g.jsxs)("div",{className:"overflow-hidden text-start",children:[(0,g.jsx)("p",{className:"fs-8 fw-semibold mb-1 text-gray-dark text-ellipsis text-start",children:s.name}),(0,g.jsx)("p",{className:"fs-9 fw-semibold mb-0 text-gray-600 text-ellipsis",children:s.Theme.name})]})]})})},"template_id_".concat(t))})}))}):null,(0,g.jsx)("div",{className:"text-center",children:(0,g.jsxs)(d.rU,{to:"/template/add",className:"btn btn-link text-decoration-none btn-sm p-0 btn-min-w",children:[(0,g.jsx)("i",{className:"ri-add-line"}),"Create New Template"]})})]})]})]})}}]),t}(r.Component);s.Z=(0,o.$j)((function(e){return{templeteList:e.templates.templeteList}}),(function(e){return{getTemplateListDispatch:function(s){return e((0,u.vF)(s))}}}))(f)},48063:function(e,s,t){t.r(s);var a=t(1413),l=t(15671),i=t(43144),n=t(60136),c=t(29388),r=t(72791),o=t(78687),d=t(23794),m=t(28949),h=t(92719),p=t(67839),x=t(43360),u=t(56600),g=t(72956),b=t(91731),f=t(80184),j=function(e){switch(e){case"p-html":default:return"HTML";case"p-wordpress":return"Wordpress";case"p-wix":return"Wix";case"p-squarespace":return"Squarespace";case"p-shopify":return"Shopify";case"p-other":return"Other"}},y=function(e){(0,n.Z)(t,e);var s=(0,c.Z)(t);function t(e){var a;return(0,l.Z)(this,t),(a=s.call(this,e)).state={showModal:!1,publishList:[]},a.embedCodeCallback=function(e){return a.props.genratedCodeCallback(e)},a}return(0,i.Z)(t,[{key:"componentDidMount",value:function(){var e=this,s=document.querySelector("#web_tab_panel-tab-aside-assets_filter");s&&s.addEventListener("click",(function(s){return e.props.onUpdateReponseData(null)}))}},{key:"handleSelect",value:function(e){}},{key:"render",value:function(){var e=this,s=this.props,t=s.filterApply,l=s.state,i=s.genratedCodeModal,n=(s.onClickToDelete,s.onResetFilter),c=(s.activeFilter,s.history,s.onChangeName),o=(s.isPublishEdit,s.templeteList),y=s.themeSkin,v=s.isHide,N=s.onSelectActive;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("label",{className:"text-gray-800 mb-1 fw-medium",htmlFor:"filterLabel",children:["Widget Name ",(0,f.jsx)("strong",{className:"text-danger",children:"*"})]}),(0,f.jsx)("input",{type:"text",className:"form-control form-control-sm mb-3",id:"filterLabel",placeholder:"Please enter publish name..",value:l.publishCodeName,onChange:c}),(0,f.jsxs)("div",{className:"filter_wrapper","data-button":v?"0":"1",children:[(0,f.jsx)(m.Z,{defaultActiveKey:1,activeKey:l.activeKey,onSelect:N(1)?N(1):null,children:(0,f.jsxs)(m.Z.Item,{eventKey:1,className:"pb-3",children:[(0,f.jsxs)(m.Z.Header,{className:"add_fillter_btn",children:[(0,f.jsx)("i",{className:"ri-add-line plus_symbol me-1"}),(0,f.jsx)("i",{className:"ri-subtract-line minus_symbol me-1"}),(0,f.jsx)("span",{className:"fs-9 fw-medium",children:"Choose Filter"})]}),(0,f.jsxs)(m.Z.Body,{className:"border rounded-1 mt-1 choose_filter",children:[(0,f.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(l.chooseFilter).includes("collection")?"d-none disabled":""),onClick:t("collection"),children:[(0,f.jsx)("div",{className:"symbol symbol-28 bg-light me-2",children:(0,f.jsx)("div",{className:"symbol-label",children:(0,f.jsx)("i",{className:"ri-folder-4-line icon-7 text-gray-800"})})}),(0,f.jsxs)("div",{className:"d-flex flex-column",children:[(0,f.jsx)("p",{className:"fs-9 fw-medium mb-0 text-gray-800",children:"Collection"}),(0,f.jsx)("span",{className:"fs-10 text-gray-500",children:"Select the preferred collection"})]})]}),(0,f.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(l.chooseFilter).includes("source")?"d-none disabled":""),onClick:t("source"),children:[(0,f.jsx)("div",{className:"symbol symbol-28 bg-light me-2",children:(0,f.jsx)("div",{className:"symbol-label",children:(0,f.jsx)("span",{className:"svg-icon svg-icon-7 text-gray-800 me-0",children:(0,f.jsx)(d.Z,{src:(0,u.F)("media/icons/svg-icons/network.svg"),height:18,width:18})})})}),(0,f.jsxs)("div",{className:"d-flex flex-column",children:[(0,f.jsx)("p",{className:"fs-9 fw-medium mb-0 text-gray-800",children:"Network"}),(0,f.jsx)("span",{className:"fs-10 text-gray-500",children:"Choose the required network"})]})]}),(0,f.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer  ".concat(Object.keys(l.chooseFilter).includes("connection")?"d-none disabled":""),onClick:t("connection"),children:[(0,f.jsx)("div",{className:"symbol symbol-28 bg-light me-2",children:(0,f.jsx)("div",{className:"symbol-label",children:(0,f.jsx)("span",{className:"svg-icon svg-icon-7 text-gray-800 me-0",children:(0,f.jsx)(d.Z,{src:(0,u.F)("media/icons/svg-icons/network-manager.svg"),height:18,width:18})})})}),(0,f.jsxs)("div",{className:"d-flex flex-column",children:[(0,f.jsx)("p",{className:"fs-9 fw-medium mb-0 text-gray-800",children:"Connections"}),(0,f.jsx)("span",{className:"fs-10 text-gray-500",children:"Select the connection type"})]})]}),(0,f.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer  ".concat(Object.keys(l.chooseFilter).includes("recommend")?"d-none disabled":""),onClick:t("recommend"),children:[(0,f.jsx)("div",{className:"symbol symbol-28 bg-light me-2",children:(0,f.jsx)("div",{className:"symbol-label",children:(0,f.jsx)("i",{class:"ri-openai-line icon-7 text-gray-800"})})}),(0,f.jsxs)("div",{className:"d-flex flex-column",children:[(0,f.jsx)("p",{className:"fs-9 fw-medium mb-0 text-gray-800",children:"Ai Recommendation"}),(0,f.jsx)("span",{className:"fs-10 text-gray-500",children:"Select the recommendation type"})]})]}),(0,f.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer  ".concat(Object.keys(l.chooseFilter).includes("assetsType")?"d-none disabled":""),onClick:t("assetsType"),children:[(0,f.jsx)("div",{className:"symbol symbol-28 bg-light me-2",children:(0,f.jsx)("div",{className:"symbol-label",children:(0,f.jsx)("i",{className:"ri-image-line icon-7 text-gray-800"})})}),(0,f.jsxs)("div",{className:"d-flex flex-column",children:[(0,f.jsx)("p",{className:"fs-9 fw-medium mb-0 text-gray-800",children:"Assets Type"}),(0,f.jsx)("span",{className:"fs-10 text-gray-500",children:"Choose the type of asset"})]})]}),(0,f.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer  ".concat(Object.keys(l.chooseFilter).includes("sentiment")?"d-none disabled":""),onClick:t("sentiment"),children:[(0,f.jsx)("div",{className:"symbol symbol-28 bg-light me-2",children:(0,f.jsx)("div",{className:"symbol-label",children:(0,f.jsx)("i",{class:"ri-emotion-happy-line icon-7 text-gray-800"})})}),(0,f.jsxs)("div",{className:"d-flex flex-column",children:[(0,f.jsx)("p",{className:"fs-9 fw-medium mb-0 text-gray-800",children:"Sentiment Score"}),(0,f.jsx)("span",{className:"fs-10 text-gray-500",children:"Select the sentiment type"})]})]}),(0,f.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(l.chooseFilter).includes("tags")?"d-none disabled":""),onClick:t("tags"),children:[(0,f.jsx)("div",{className:"symbol symbol-28 bg-light me-2",children:(0,f.jsx)("div",{className:"symbol-label",children:(0,f.jsx)("i",{className:"ri-price-tag-3-line icon-7 text-gray-800"})})}),(0,f.jsxs)("div",{className:"d-flex flex-column",children:[(0,f.jsx)("p",{className:"fs-9 fw-medium mb-0 text-gray-800",children:"Tag"}),(0,f.jsx)("span",{className:"fs-10 text-gray-500",children:"Select the preferred tag"})]})]}),(0,f.jsxs)("div",{className:"d-flex align-items-center py-2 cursor-pointer ".concat(Object.keys(l.chooseFilter).includes("ugcrights")?"d-none disabled":""),onClick:t("ugcrights"),children:[(0,f.jsx)("div",{className:"symbol symbol-28 bg-light me-2",children:(0,f.jsx)("div",{className:"symbol-label",children:(0,f.jsx)("span",{className:"svg-icon svg-icon-7 text-gray-800 me-0",children:(0,f.jsx)(d.Z,{src:(0,u.F)("media/icons/svg-icons/rights-approved-line.svg"),height:18,width:18})})})}),(0,f.jsxs)("div",{className:"d-flex flex-column",children:[(0,f.jsx)("p",{className:"fs-9 fw-medium mb-0 text-gray-800",children:"UGC Rights"}),(0,f.jsx)("span",{className:"fs-10 text-gray-500",children:"Select the preferred ugc rights status"})]})]})]})]})}),l.chooseFilter&&Object.keys(l.chooseFilter).map((function(s,t){return(0,f.jsx)(g.Z,(0,a.Z)((0,a.Z)({filterKey:s},e.props),{},{indexFilter:t,isLast:Object.keys(l.chooseFilter)[Object.keys(l.chooseFilter).length-1]}))})),(0,f.jsxs)(m.Z,{defaultActiveKey:"",children:[(0,r.createElement)(b.Z,(0,a.Z)((0,a.Z)({},this.props),{},{key:o.length})),(0,f.jsx)("label",{className:"text-gray-800 mb-2",children:"Select Platform"}),(0,f.jsxs)(m.Z.Item,{eventKey:"9",className:"pb-3",children:[(0,f.jsx)(m.Z.Header,{className:"w-100",children:(0,f.jsx)("span",{className:"fs-9 fw-medium",children:j(i)})}),(0,f.jsx)(m.Z.Body,{className:"border rounded-1 mt-1",children:(0,f.jsxs)(h.Z,{type:"radio",className:"flex-column w-100 btn-group-outline",name:"platform",defaultValue:"p-html",children:[(0,f.jsx)(p.Z,{className:"mb-2 bg-transparent ".concat("p-html"==i?"active":""),variant:"outline-secondary",id:"p-html",value:"p-html",onClick:function(s){return e.props.genratedCodeCallback("p-html")},children:(0,f.jsx)("div",{className:"block-center text-center h-46px w-100",children:(0,f.jsx)("img",{className:"img-fluid",src:(0,u.F)("media/images/platform/html".concat("dark"==y?"-dark":"",".svg")),alt:"html",height:23,width:90})})}),(0,f.jsx)(p.Z,{className:"mb-2 bg-transparent ".concat("p-wordpress"==i?"active":""),variant:"outline-secondary",id:"p-wordpress",value:"p-wordpress",onClick:function(s){return e.props.genratedCodeCallback("p-wordpress")},children:(0,f.jsx)("div",{className:"block-center text-center h-46px w-100",children:(0,f.jsx)("img",{className:"img-fluid",src:(0,u.F)("media/images/platform/wordpress".concat("dark"==y?"-dark":"",".svg")),alt:"wordpress",height:39,width:80})})}),(0,f.jsx)(p.Z,{className:"mb-2 bg-transparent ".concat("p-wix"==i?"active":""),variant:"outline-secondary",id:"p-wix",value:"p-wix",onClick:function(s){return e.props.genratedCodeCallback("p-wix")},children:(0,f.jsx)("div",{className:"block-center text-center h-46px w-100",children:(0,f.jsx)("img",{className:"img-fluid",src:(0,u.F)("media/images/platform/wix".concat("dark"==y?"-dark":"",".svg")),alt:"wix",height:23,width:60})})}),(0,f.jsx)(p.Z,{className:"mb-2 bg-transparent ".concat("p-squarespace"==l.genratedCodeModal?"active":""),variant:"outline-secondary",id:"p-squarespace",value:"p-squarespace",onClick:function(s){return e.props.genratedCodeCallback("p-squarespace")},children:(0,f.jsx)("div",{className:"block-center text-center h-46px w-100",children:(0,f.jsx)("img",{className:"img-fluid",src:(0,u.F)("media/images/platform/squarespace".concat("dark"==y?"-dark":"",".svg")),alt:"wix",height:45,width:80})})}),(0,f.jsx)(p.Z,{className:"mb-2 bg-transparent ".concat("p-shopify"==i?"active":""),variant:"outline-secondary",id:"p-shopify",value:"p-shopify",onClick:function(s){return e.props.genratedCodeCallback("p-shopify")},children:(0,f.jsx)("div",{className:"block-center text-center h-46px w-100",children:(0,f.jsx)("img",{className:"img-fluid",src:(0,u.F)("media/images/platform/shopify".concat("dark"==y?"-dark":"",".svg")),alt:"wix",height:25,width:90})})}),(0,f.jsx)(p.Z,{className:"mb-2 bg-transparent ".concat("p-other"==i?"active":""),variant:"outline-secondary",id:"p-other",value:"p-other",onClick:function(s){return e.props.genratedCodeCallback("p-other")},children:(0,f.jsx)("div",{className:"block-center text-center h-46px w-100",children:(0,f.jsx)("img",{className:"img-fluid",src:(0,u.F)("media/images/platform/other".concat("dark"==y?"-dark":"",".svg")),alt:"other",height:31,width:70})})})]})})]})]})]}),(0,f.jsxs)("div",{className:"filter_actions_",children:[(0,f.jsx)(x.Z,{variant:"primary",className:"w-100  ".concat(l.isUpdating?"spinner":""),onClick:this.props.onRequestPublish,children:"Save Widget"}),v?null:(0,f.jsx)(x.Z,{variant:"link",className:"w-100 text-decoration-none fw-medium",onClick:n,children:"Back"})]})]})}}]),t}(r.Component);s.default=(0,o.$j)((function(e){return{templeteList:e.templates.templeteList,themeSkin:e.themeSkin.themeSkin}}))(y)}}]);
//# sourceMappingURL=8063.7d646851.chunk.js.map