"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[1411],{1411:function(e,s,i){i.r(s);var l=i(1413),c=i(15671),a=i(43144),n=i(97326),t=i(60136),r=i(29388),o=i(72791),m=i(28949),d=i(23794),h=i(56600),x=i(32002),p=i(72956),b=(i(9085),i(80184)),g=function(e){(0,t.Z)(i,e);var s=(0,r.Z)(i);function i(){var e;return(0,c.Z)(this,i),(e=s.call(this)).onLoadPublish=function(){var s=(0,n.Z)(e);(0,x.Vv)().then((function(e){s.setState({publishList:e.data})})).catch((function(e){}))},e.campaignTypeFun=function(s){return e.props.campaignTypeCallback(s)},e.state={showModal:!1,campaignType:"HashtagCampaign",publishList:[]},e}return(0,a.Z)(i,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,s=(this.state.setValue,this.props),i=s.filterApply,c=s.state,a=(s.genratedCodeModal,s.onClickToDelete,s.onResetFilter,s.activeFilter,s.history,s.onChangeName,s.onClickConnectWith),n=s.onClickmediaSize,t=s.onClickPublishType,r=s.onChangeDescription,o=s.onSelectActive,x=s.onSelectAccordionActive;return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{className:"filter_wrapper social_publish__",children:[(0,b.jsx)(m.Z,{defaultActiveKey:1,activeKey:c.activeKey,onSelect:o(1)?o(1):null,children:(0,b.jsxs)(m.Z.Item,{eventKey:1,className:"pb-3",children:[(0,b.jsxs)(m.Z.Header,{className:"add_fillter_btn",children:[(0,b.jsx)("i",{className:"ri-add-line plus_symbol me-1"}),(0,b.jsx)("i",{className:"ri-subtract-line minus_symbol me-1"}),(0,b.jsx)("span",{className:"fs-9 fw-medium",children:"Choose Filter"})]}),(0,b.jsxs)(m.Z.Body,{className:"border rounded-1 mt-1 choose_filter",children:[(0,b.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(c.chooseFilter).includes("collection")?"d-none disabled":""),onClick:i("collection"),children:[(0,b.jsx)("div",{className:"symbol symbol-28 bg-light me-2",children:(0,b.jsx)("div",{className:"symbol-label",children:(0,b.jsx)("i",{className:"ri-folder-4-line icon-7 text-gray-800"})})}),(0,b.jsxs)("div",{className:"d-flex flex-column",children:[(0,b.jsx)("p",{className:"fs-9 fw-medium mb-0 text-gray-800",children:"Collection"}),(0,b.jsx)("span",{className:"fs-10 text-gray-500",children:"Select the preferred collection"})]})]}),(0,b.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(c.chooseFilter).includes("source")?"d-none disabled":""),onClick:i("source"),children:[(0,b.jsx)("div",{className:"symbol symbol-28 bg-light me-2",children:(0,b.jsx)("div",{className:"symbol-label",children:(0,b.jsx)("span",{className:"svg-icon svg-icon-7 text-gray-800 me-0",children:(0,b.jsx)(d.Z,{src:(0,h.F)("media/icons/svg-icons/network.svg"),height:18,width:18})})})}),(0,b.jsxs)("div",{className:"d-flex flex-column",children:[(0,b.jsx)("p",{className:"fs-9 fw-medium mb-0 text-gray-800",children:"Network"}),(0,b.jsx)("span",{className:"fs-10 text-gray-500",children:"Choose the required network"})]})]}),(0,b.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer  ".concat(Object.keys(c.chooseFilter).includes("connection")?"d-none disabled":""),onClick:i("connection"),children:[(0,b.jsx)("div",{className:"symbol symbol-28 bg-light me-2",children:(0,b.jsx)("div",{className:"symbol-label",children:(0,b.jsx)("span",{className:"svg-icon svg-icon-7 text-gray-800 me-0",children:(0,b.jsx)(d.Z,{src:(0,h.F)("media/icons/svg-icons/network-manager.svg"),height:18,width:18})})})}),(0,b.jsxs)("div",{className:"d-flex flex-column",children:[(0,b.jsx)("p",{className:"fs-9 fw-medium mb-0 text-gray-800",children:"Connections"}),(0,b.jsx)("span",{className:"fs-10 text-gray-500",children:"Select the connection type"})]})]}),(0,b.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer  ".concat(Object.keys(c.chooseFilter).includes("recommend")?"d-none disabled":""),onClick:i("recommend"),children:[(0,b.jsx)("div",{className:"symbol symbol-28 bg-light me-2",children:(0,b.jsx)("div",{className:"symbol-label",children:(0,b.jsx)("i",{class:"ri-openai-line icon-7 text-gray-800"})})}),(0,b.jsxs)("div",{className:"d-flex flex-column",children:[(0,b.jsx)("p",{className:"fs-9 fw-medium mb-0 text-gray-800",children:"Ai Recommendation"}),(0,b.jsx)("span",{className:"fs-10 text-gray-500",children:"Select the recommendation type"})]})]}),(0,b.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer  ".concat(Object.keys(c.chooseFilter).includes("assetsType")?"d-none disabled":""),onClick:i("assetsType"),children:[(0,b.jsx)("div",{className:"symbol symbol-28 bg-light me-2",children:(0,b.jsx)("div",{className:"symbol-label",children:(0,b.jsx)("i",{className:"ri-image-line icon-7 text-gray-800"})})}),(0,b.jsxs)("div",{className:"d-flex flex-column",children:[(0,b.jsx)("p",{className:"fs-9 fw-medium mb-0 text-gray-800",children:"Assets Type"}),(0,b.jsx)("span",{className:"fs-10 text-gray-500",children:"Choose the type of asset"})]})]}),(0,b.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer  ".concat(Object.keys(c.chooseFilter).includes("sentiment")?"d-none disabled":""),onClick:i("sentiment"),children:[(0,b.jsx)("div",{className:"symbol symbol-28 bg-light me-2",children:(0,b.jsx)("div",{className:"symbol-label",children:(0,b.jsx)("i",{class:"ri-emotion-happy-line icon-7 text-gray-800"})})}),(0,b.jsxs)("div",{className:"d-flex flex-column",children:[(0,b.jsx)("p",{className:"fs-9 fw-medium mb-0 text-gray-800",children:"Sentiment Score"}),(0,b.jsx)("span",{className:"fs-10 text-gray-500",children:"Select the sentiment type"})]})]}),(0,b.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(c.chooseFilter).includes("tags")?"d-none disabled":""),onClick:i("tags"),children:[(0,b.jsx)("div",{className:"symbol symbol-28 bg-light me-2",children:(0,b.jsx)("div",{className:"symbol-label",children:(0,b.jsx)("i",{className:"ri-price-tag-3-line icon-7 text-gray-800"})})}),(0,b.jsxs)("div",{className:"d-flex flex-column",children:[(0,b.jsx)("p",{className:"fs-9 fw-medium mb-0 text-gray-800",children:"Tag"}),(0,b.jsx)("span",{className:"fs-10 text-gray-500",children:"Select the preferred tag"})]})]}),(0,b.jsxs)("div",{className:"d-flex align-items-center py-2 cursor-pointer ".concat(Object.keys(c.chooseFilter).includes("ugcrights")?"d-none disabled":""),onClick:i("ugcrights"),children:[(0,b.jsx)("div",{className:"symbol symbol-28 bg-light me-2",children:(0,b.jsx)("div",{className:"symbol-label",children:(0,b.jsx)("span",{className:"svg-icon svg-icon-7 text-gray-800 me-0",children:(0,b.jsx)(d.Z,{src:(0,h.F)("media/icons/svg-icons/rights-approved-line.svg"),height:18,width:18})})})}),(0,b.jsxs)("div",{className:"d-flex flex-column",children:[(0,b.jsx)("p",{className:"fs-9 fw-medium mb-0 text-gray-800",children:"UGC Rights"}),(0,b.jsx)("span",{className:"fs-10 text-gray-500",children:"Select the preferred ugc rights status"})]})]})]})]})}),c.chooseFilter&&Object.keys(c.chooseFilter).map((function(s,i){return(0,b.jsx)(p.Z,(0,l.Z)((0,l.Z)({filterKey:s},e.props),{},{indexFilter:i,isLast:Object.keys(c.chooseFilter)[Object.keys(c.chooseFilter).length-1]}))})),(0,b.jsxs)(m.Z,{activeKey:c.accordionKey,onSelect:x,children:[(0,b.jsx)("label",{className:"text-gray-800 mb-2",children:"Select Network"}),(0,b.jsxs)(m.Z.Item,{eventKey:"7",className:"pb-3",children:[(0,b.jsx)(m.Z.Header,{className:"w-100",children:(0,b.jsx)("span",{className:"fs-9 fw-medium",children:1==c.connectWith?"Twitter":18==c.connectWith?"Instagram":3==c.connectWith?"Facebook":"Choose Preferred Social"})}),(0,b.jsx)(m.Z.Body,{className:"border rounded-1 mt-1",children:(0,b.jsxs)("div",{className:"",children:[(0,b.jsxs)("div",{className:"dropdown-item px-0 border-bottom rounded-0",children:[(0,b.jsxs)("label",{className:"form-check flex-grow-1 overflow-hidden align-items-center",htmlFor:"twitter",children:[(0,b.jsx)("span",{className:"symbol symbol-22",children:(0,b.jsx)("img",{className:"img-fluid h-100",src:(0,h.F)("media/icons/social-icons-square/twitter.svg"),height:20,width:20,alt:"twitter"})}),(0,b.jsx)("span",{className:"form-check-label text-gray-800 text-ellipsis",children:"Twitter"})]}),(0,b.jsx)("input",{className:"form-check-input flex-shrink-0",type:"radio",name:"network",checked:1==c.connectWith,id:"twitter",onClick:a(1)})]}),(0,b.jsxs)("div",{className:"dropdown-item px-0 border-bottom rounded-0",children:[(0,b.jsxs)("label",{className:"form-check flex-grow-1 overflow-hidden align-items-center",htmlFor:"instagram",children:[(0,b.jsx)("span",{className:"symbol symbol-22",children:(0,b.jsx)("img",{className:"img-fluid h-100",src:(0,h.F)("media/icons/social-icons-square/instagram.svg"),height:20,width:20,alt:"instagram"})}),(0,b.jsx)("span",{className:"form-check-label text-gray-800 text-ellipsis",children:"Instagram"})]}),(0,b.jsx)("input",{className:"form-check-input flex-shrink-0",type:"radio",name:"network",checked:18==c.connectWith,id:"instagram",onClick:a(18)})]}),(0,b.jsxs)("div",{className:"dropdown-item px-0 rounded-0",children:[(0,b.jsxs)("label",{className:"form-check flex-grow-1 overflow-hidden align-items-center",htmlFor:"facebook",children:[(0,b.jsx)("span",{className:"symbol symbol-22",children:(0,b.jsx)("img",{className:"img-fluid h-100",src:(0,h.F)("media/icons/social-icons-square/facebook.svg"),height:20,width:20,alt:"twitter"})}),(0,b.jsx)("span",{className:"form-check-label text-gray-800 text-ellipsis",children:"Facebook"})]}),(0,b.jsx)("input",{className:"form-check-input flex-shrink-0",type:"radio",name:"network",checked:3==c.connectWith,id:"facebook",onClick:a(3)})]}),(0,b.jsxs)("div",{className:"dropdown-item px-0 rounded-0 d-none",children:[(0,b.jsxs)("label",{className:"form-check flex-grow-1 overflow-hidden align-items-center",htmlFor:"tiktok",children:[(0,b.jsx)("span",{className:"symbol symbol-22",children:(0,b.jsx)("img",{className:"img-fluid h-100",src:(0,h.F)("media/icons/social-icons-square/tiktok.svg"),height:20,width:20,alt:"twitter"})}),(0,b.jsx)("span",{className:"form-check-label text-gray-800 text-ellipsis",children:"TikTok"})]}),(0,b.jsx)("input",{className:"form-check-input flex-shrink-0",type:"radio",name:"network",value:"",id:"tiktok"})]})]})})]}),(0,b.jsx)("label",{className:"text-gray-800 mb-2",children:"Asset Type"}),(0,b.jsxs)(m.Z.Item,{eventKey:"8",className:"pb-3",children:[(0,b.jsx)(m.Z.Header,{children:(0,b.jsxs)("span",{className:"fs-9 fw-medium",children:[1==c.publishType?"Single Image or Video":"Choose Content Type"," "]})}),(0,b.jsxs)(m.Z.Body,{className:"border rounded-1 mt-1",children:[(0,b.jsx)("div",{className:"navi-item d-flex align-items-center py-2 cursor-pointer cursor-pointer",children:(0,b.jsxs)("label",{className:"form-check flex-grow-1 align-items-center",htmlFor:"singleMedia",children:[(0,b.jsx)("input",{className:"form-check-input",type:"radio",name:"publishType",value:"singleMedia",id:"singleMedia",checked:1==c.publishType,onClick:t(1)}),(0,b.jsx)("div",{className:"navi-text ms-2",children:(0,b.jsx)("p",{className:"fs-9 fw-medium mb-0",children:"Single Image or Video"})})]})}),(0,b.jsx)("div",{className:"navi-item d-flex align-items-center py-2 cursor-pointer cursor-pointer d-none",children:(0,b.jsxs)("label",{className:"form-check flex-grow-1 align-items-center",htmlFor:"carouselPost",children:[(0,b.jsx)("input",{className:"form-check-input",type:"radio",name:"publishType",value:"carouselPost",id:"carouselPost",checked:2==c.publishType,onClick:t(2)}),(0,b.jsx)("div",{className:"navi-text ms-2",children:(0,b.jsx)("p",{className:"fs-9 fw-medium mb-0",children:"Carousel"})})]})})]})]}),(0,b.jsxs)(m.Z.Item,{eventKey:"9",className:"pb-3",children:[(0,b.jsx)(m.Z.Header,{children:(0,b.jsx)("span",{className:"fs-9 fw-medium",children:1==c.mediaSize?"1:1":16==c.mediaSize?"16:9":0==c.mediaSize?"Default Size":"Media Size"})}),(0,b.jsxs)(m.Z.Body,{className:"border rounded-1 mt-1",children:[(0,b.jsx)("div",{className:"navi-item d-flex align-items-center border-bottom py-2 cursor-pointer",children:(0,b.jsxs)("label",{className:"form-check flex-grow-1 align-items-center",htmlFor:"1x1",children:[(0,b.jsx)("input",{className:"form-check-input",type:"radio",name:"imageSize",value:"1x1",id:"1x1",onClick:n(1),checked:1==c.mediaSize}),(0,b.jsx)("div",{className:"navi-text ms-2",children:(0,b.jsx)("p",{className:"fs-9 fw-medium mb-0",children:"1:1"})})]})}),(0,b.jsx)("div",{className:"navi-item d-flex align-items-center border-bottom py-2 cursor-pointer",children:(0,b.jsxs)("label",{className:"form-check flex-grow-1 align-items-center",htmlFor:"16x9",children:[(0,b.jsx)("input",{className:"form-check-input",type:"radio",name:"imageSize",value:"16x9",id:"16x9",onClick:n(16),checked:16==c.mediaSize}),(0,b.jsx)("div",{className:"navi-text ms-2",children:(0,b.jsx)("p",{className:"fs-9 fw-medium mb-0",children:"16:9"})})]})}),(0,b.jsx)("div",{className:"navi-item d-flex align-items-center py-2 cursor-pointer",children:(0,b.jsxs)("label",{className:"form-check flex-grow-1 align-items-center",htmlFor:"defaultSize",children:[(0,b.jsx)("input",{className:"form-check-input",type:"radio",name:"imageSize",value:"defaultSize",id:"defaultSize",onClick:n(0),checked:0==c.mediaSize}),(0,b.jsx)("div",{className:"navi-text ms-2",children:(0,b.jsx)("p",{className:"fs-9 fw-medium mb-0",children:"Default Size"})})]})})]})]}),(0,b.jsx)("label",{className:"text-gray-800 mb-2",children:"Description"}),(0,b.jsxs)("div",{className:"w-100 mb-2",children:[(0,b.jsx)("textarea",{className:"form-control textarea-min-row-5 fs-9",row:5,onChange:r,value:c.selectedPost?c.selectedPost.content:null}),(0,b.jsx)("span",{className:"fs-10 text-gray-500",children:"Description must be under 280 characters."})]})]})]})})}}]),i}(o.Component);s.default=g}}]);
//# sourceMappingURL=1411.2a74fab1.chunk.js.map