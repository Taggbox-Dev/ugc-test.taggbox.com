"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[9279],{59279:function(e,t,s){s.r(t);var a=s(15671),n=s(43144),l=s(60136),i=s(29388),r=s(72791),d=s(78687),c=s(72426),x=s.n(c),o=s(56600),h=s(42195),p=s.n(h),m=s(12756),g=s(32480),u=s(52),j=s(94111),w=s(80184),b=function(e){(0,l.Z)(s,e);var t=(0,i.Z)(s);function s(e){var n;return(0,a.Z)(this,s),(n=t.call(this,e)).onClickToRemoveTag=function(e){return function(t){var s=n.state.tagString;s.splice(e,1),n.setState({tagString:s,changesStatus:!0})}},n.addTagButtonValue=function(){n.setState({addTagButton:!1})},n.handleOutsideClick=function(e){n.editorEnable&&n.editorEnable.current&&!n.editorEnable.current.contains(e.target)&&n.editorEnableButton&&!n.editorEnableButton.current.contains(e.target)&&n.editorEnableButton&&null!==!n.editorEnableButton.current.contains(e.target)?n.setState({descriptionEditable:!1}):n.editorEnable&&n.editorEnable.current&&!n.editorEnable.current.contains(e.target)&&null!==n.editorEnable.current.contains(e.target)&&n.setState({descriptionEditable:!0})},n.onClickNewAddTag=function(e){var t=n.state,s=t.newTag,a=t.tagString;n.props.modalAssetData;"Enter"!==e.key&&13!==e.keyCode||s&&String(s).length>=3&&(a.push(s),n.setState({tagString:a,newTag:"",selectedOption:null,changesStatus:!0,addTagButton:!0}))},n.addNewTag=function(e){return n.setState({newTag:e.target.value,changesStatus:!0})},n.onClickToSave=function(e){var t=n.state.tagString,s=n.props.modalAssetData;t&&t.length>0&&n.props.postAddTag({postId:String(s.id),tags:t.join(",")},(function(){return n.props.loadAssetsDataWithDispatch()}))},n.setNewTags=function(e){console.log("Option selected:",e),e&&e.value?n.setState({newTag:e.value,selectedOption:e}):n.setState({newTag:"",selectedOption:null})},n.onChangeContent=function(e){n.setState({content:e.target.value,changesStatus:!0})},n.onChangeTag=function(e){console.log("newTag, tagString",e.target.value),n.setState({newTag:e.target.value})},n.onSaveChanges=function(e){var t=n.props.modalAssetData,s=n.state,a=s.tagString,l=s.content;if(a&&a.length>0&&l){var i={action:"4",source:String(t.collection),destination:String(t.collection),postId:String(t.id),postFile:t.postFile,tags:a.join(","),content:l};n.props.postPostUpdate(i,(function(){n.props.loadAssetsDataWithDispatch(),n.setState({descriptionEditable:!1,addTagButton:!0,changesStatus:!1})}))}},n.state={descriptionEditable:!1,addTagButton:!0,tagString:[],newTag:"",listTags:[],selectedOption:null,content:"",changesStatus:!1},n.editorEnable=r.createRef(),n.editorEnableButton=r.createRef(),n}return(0,n.Z)(s,[{key:"componentWillMount",value:function(){var e=this.props.tagList;if(e&&e.length>0){var t=[];e.map((function(e){t.push({value:e,label:e})})),this.setState({listTags:t})}}},{key:"descriptionToggle",value:function(){this.setState({descriptionEditable:!0})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleOutsideClick);var e=this.props.modalAssetData;e&&Object.keys(e).length>0&&(e.tags&&String(e.tags).length>0?this.setState({tagString:String(e.tags).split(","),content:e.content}):this.setState({tagString:[],content:e.content}))}},{key:"render",value:function(){var e=this,t=this.state,s=t.descriptionEditable,a=t.addTagButton,n=t.tagString,l=t.content,i=t.changesStatus,r=t.newTag,d=this.props,c=d.modalAssetData,h=d.networkData,u=d.collections,j=d.isTrash,b=h&&h.length>0?h.filter((function(e){return e.id==c.networkId})):[],f=u&&u.length>0?(0,g.SY)(c.collection,u):[];return(0,w.jsx)("div",{className:"full_modal_sidebar position-relative",children:(0,w.jsxs)(p(),{children:[(0,w.jsxs)("div",{className:"full_modal_sidebar_inner position-relative",children:[(0,w.jsx)("h3",{className:"border-bottom mb-xxl-3 mb-2 pb-xxl-3 pb-2 fs-7 pt-1",children:(0,w.jsx)("span",{className:"text-uppercase fw-medium",children:"General Info"})}),(0,w.jsx)("table",{className:"table table-borderless",children:(0,w.jsxs)("tbody",{children:[(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Posted By"})}),(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:(0,w.jsxs)("div",{className:"d-flex align-items-center mr-2",children:[(0,w.jsx)(m.default,{className:"symbol symbol-34 rounded-circle flex-shrink-0 me-2 overflow-hidden bg-light",imageSize:38,symbolClass:"symbol-label text-light-alt fw-bold text-uppercase fs-8",name:c.name,profileUrl:(0,g.iW)(c.picture),networkId:b&&b.length>0?b[0].name:0}),(0,w.jsxs)("div",{children:[(0,w.jsx)("p",{className:"text-dark mb-0 text-break fw-bold",children:c.name}),(0,w.jsxs)("small",{className:"mb-0 text-muted text-break",children:["@",c.username]})]})]})})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Source"})}),(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:(0,w.jsxs)("div",{className:"d-flex align-items-center",children:[(0,w.jsx)("span",{className:"me-2 d-flex",children:(0,w.jsx)("img",{className:"img-fluid",src:(0,o.F)("media/icons/social-icons/".concat((0,g.O5)(b&&b.length>0?b[0].id:0),".svg")),height:18,width:18,alt:b&&b.length>0?b[0].id:0})}),(0,w.jsx)("span",{className:"text-dark",children:(0,g.BK)(b&&b.length>0?b[0].id:0)})]})})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Connection"})}),(0,w.jsxs)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:[" ",(0,w.jsx)("span",{className:"text-dark text-break",children:c.Feed&&Object.keys(c.Feed).length>0?(0,g.kx)(c.Feed.filterId,c.Feed.name,c.Feed.networkId):"--"})]})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"File Name"})}),(0,w.jsxs)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:[" ",(0,w.jsx)("span",{className:"text-dark text-break",children:c.name?c.name:"--"})]})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"File Extension"})}),(0,w.jsxs)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:[" ",(0,w.jsx)("span",{className:"text-dark text-break",children:c.ext?c.ext:"--"})]})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Type"})}),(0,w.jsxs)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:[" ",(0,w.jsx)("span",{className:"text-dark text-break",children:(0,g.bJ)(c.type)?(0,g.bJ)(c.type):"--"})]})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Collection"})}),(0,w.jsxs)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:[" ",(0,w.jsx)("span",{className:"text-dark text-break",children:f||"--"})]})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Dimensions"})}),(0,w.jsxs)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:[" ",(0,w.jsxs)("span",{className:"text-dark text-break",children:[c.mediaWidth?c.mediaWidth:"--","x",c.mediaHeight?c.mediaHeight:"--"]})]})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Size"})}),(0,w.jsxs)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:[" ",(0,w.jsx)("span",{className:"text-dark text-break",children:c.size?c.size:"--"})]})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Created"})}),(0,w.jsxs)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:[" ",(0,w.jsx)("span",{className:"text-dark text-break",children:x()(c.created).utcOffset(0).format("DD MMM YYYY hh:mmA")})]})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Modified"})}),(0,w.jsxs)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:[" ",(0,w.jsx)("span",{className:"text-dark text-break",children:x()(c.modified).utcOffset(0).format("DD MMM YYYY hh:mmA")})]})]}),c.ugcRights?(0,w.jsx)(w.Fragment,{children:2==c.ugcRights.status?(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Rights"})}),(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:(0,w.jsxs)("div",{className:"d-flex align-items-center flex-wrap",children:[(0,w.jsx)("span",{className:"svg-icon me-1 text-success",children:(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",children:[(0,w.jsx)("path",{d:"M0,0H24V24H0Z",fill:"none"}),(0,w.jsx)("path",{d:"M10.112,23.524h-.006a2.092,2.092,0,0,1-.769-.154A14.925,14.925,0,0,1,0,9.472V5.415A2.041,2.041,0,0,1,1.283,3.5L9.324.159A2.026,2.026,0,0,1,10.114,0h.006a1.984,1.984,0,0,1,.785.162L18.944,3.5a2.034,2.034,0,0,1,1.279,1.913V9.476a14.764,14.764,0,0,1-2.541,8.375,14.8,14.8,0,0,1-6.8,5.52A2.034,2.034,0,0,1,10.112,23.524ZM7.1,10.741A1.1,1.1,0,0,0,6.395,11a1.121,1.121,0,0,0-.391.76,1.1,1.1,0,0,0,.266.811L8.608,14.9a1.118,1.118,0,0,0,.779.319H9.4a1.091,1.091,0,0,0,.772-.319l4.169-4.175a.965.965,0,0,0,.139-.138,1.105,1.105,0,0,0-.847-1.813,1.1,1.1,0,0,0-.832.38l-3.41,3.406L7.808,11A1.1,1.1,0,0,0,7.1,10.741Z",transform:"translate(1.888 0.238)",fill:"currentColor"})]})}),(0,w.jsx)("span",{className:"text-success",children:"Request Approved"})]})})]}):1==c.ugcRights.status?(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Rights"})}),(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:(0,w.jsxs)("div",{className:"d-flex align-items-center flex-wrap",children:[(0,w.jsx)("span",{className:"svg-icon me-1 text-warning",children:(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",children:[(0,w.jsx)("path",{d:"M0,0H24V24H0Z",fill:"none"}),(0,w.jsx)("path",{d:"M-937.889-504.477h-.006a2.082,2.082,0,0,1-.769-.154,14.856,14.856,0,0,1-6.8-5.517A14.833,14.833,0,0,1-948-518.528v-4.058a2.05,2.05,0,0,1,1.283-1.916l8.041-3.34a2.034,2.034,0,0,1,.79-.159,2,2,0,0,1,.791.162l8.039,3.338a2.046,2.046,0,0,1,1.279,1.914v4.062a14.835,14.835,0,0,1-2.541,8.375,14.857,14.857,0,0,1-6.8,5.519A2.027,2.027,0,0,1-937.889-504.477Zm-.046-16.137a1.176,1.176,0,0,0-1.166,1.169v3.866a1.177,1.177,0,0,0,.348.811l2.553,2.559.008,0a1.148,1.148,0,0,0,.812.333h.007a1.16,1.16,0,0,0,.819-.341,1.148,1.148,0,0,0,.341-.822,1.162,1.162,0,0,0-.341-.821l-2.209-2.209v-3.381a1.176,1.176,0,0,0-1.171-1.167Z",transform:"translate(950.205 528.238)",fill:"currentColor"})]})}),(0,w.jsx)("span",{className:"text-warning",children:"Request Pending"})]})})]}):3==c.ugcRights.status?(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Rights"})}),(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:(0,w.jsxs)("div",{className:"d-flex align-items-center flex-wrap",children:[(0,w.jsx)("span",{className:"svg-icon me-1 text-danger",children:(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",children:[(0,w.jsx)("path",{d:"M0,0H24V24H0Z",fill:"none"}),(0,w.jsx)("path",{d:"M10.112,23.524h-.006a2.1,2.1,0,0,1-.769-.154A14.925,14.925,0,0,1,0,9.472V5.415A2.041,2.041,0,0,1,1.283,3.5L9.324.159A2.033,2.033,0,0,1,10.114,0h.006a1.99,1.99,0,0,1,.785.162L18.944,3.5a2.034,2.034,0,0,1,1.279,1.913V9.476a14.765,14.765,0,0,1-2.541,8.374,14.8,14.8,0,0,1-6.8,5.52A2.041,2.041,0,0,1,10.112,23.524ZM6.68,7.458a1.07,1.07,0,0,0-.239.029.984.984,0,0,0-.429,1.677L8.72,11.875,6.012,14.583a.986.986,0,0,0,.429,1.679l.008,0a.883.883,0,0,0,.2.023h.029a1,1,0,0,0,.722-.313l2.713-2.713,2.711,2.711a1,1,0,0,0,.958.286.986.986,0,0,0,.43-1.678L11.5,11.875l2.709-2.711a.985.985,0,0,0-.43-1.677,1,1,0,0,0-.958.284l-2.713,2.713L7.4,7.772A.985.985,0,0,0,6.68,7.458Z",transform:"translate(2 0.238)",fill:"currentColor"})]})}),(0,w.jsx)("span",{className:"text-danger",children:"Request Rejected"})]})})]}):null}):null]})}),(0,w.jsx)("h3",{className:"border-bottom mb-xxl-3 mb-2 pb-xxl-3 pb-2 fs-7 pt-2",children:(0,w.jsx)("span",{className:"text-uppercase fw-medium",children:"Tag"})}),n&&n.length>0?(0,w.jsxs)("div",{className:"tags-group d-flex align-items-center flex-wrap",children:[n.map((function(t,s){return(0,w.jsxs)("div",{className:"block-center badge bg-secondary text-gray-800 rounded-pill border me-2 mb-2 fw-medium",children:[t,(0,w.jsx)("button",{className:"btn p-0 ms-1",onClick:e.onClickToRemoveTag(s),children:(0,w.jsx)("span",{className:"svg-icon me-0",children:(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,w.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,w.jsx)("path",{d:"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z",fill:"currentColor"})]})})})]})})),a?(0,w.jsx)(w.Fragment,{children:j?null:(0,w.jsxs)("button",{type:"button",className:"btn btn-primary btn-sm rounded-pill me-2 mb-2 py-1",onClick:this.addTagButtonValue,children:[(0,w.jsx)("span",{className:"svg-icon",children:(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,w.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,w.jsx)("path",{d:"M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z",fill:"currentColor"})]})}),"Add Tag"]})}):(0,w.jsx)("div",{className:"d-flex me-2 mb-2",children:(0,w.jsx)("input",{type:"text",className:"form-control form-control-sm border-0 fw-semibold fs-7",placeholder:"Enter Tag...",value:r,onChange:this.onChangeTag,onKeyUp:this.onClickNewAddTag})})]}):(0,w.jsx)("div",{className:"tags-group d-flex align-items-center flex-wrap",children:a?(0,w.jsx)(w.Fragment,{children:j?null:(0,w.jsxs)("button",{type:"button",className:"btn btn-primary btn-sm rounded-pill me-2 mb-2",onClick:this.addTagButtonValue,children:[(0,w.jsx)("span",{className:"svg-icon",children:(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,w.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,w.jsx)("path",{d:"M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z",fill:"currentColor"})]})}),"Add Tag"]})}):(0,w.jsx)("div",{className:"d-flex me-2 mb-2",children:(0,w.jsx)("input",{type:"text",className:"form-control form-control-sm border-0 fw-semibold fs-7",placeholder:"Enter Tag...",value:r,onChange:this.onChangeTag,onKeyUp:this.onClickNewAddTag})})}),(0,w.jsx)("h3",{className:"border-bottom mb-xxl-3 mb-2 pb-xxl-3 pb-2 fs-7 pt-2",children:(0,w.jsx)("span",{className:"text-uppercase fw-medium",children:"Description"})}),(0,w.jsxs)("div",{className:"mb-3 d-flex align-items-center",children:[(0,w.jsx)("div",{className:"d-flex flex-grow-1 pe-2",ref:this.editorEnable,children:(0,w.jsx)("textarea",{type:"text",className:"form-control textarea-min-row-3 ".concat(s?"":" resize-none border-0 p-0"),placeholder:"Add Description",rows:3,value:l,readOnly:!s,onChange:this.onChangeContent})}),j?null:(0,w.jsx)("button",{type:"button",className:"btn btn-icon btn-sm btn-active-light w-30px h-30px",ref:this.editorEnableButton,children:(0,w.jsx)("span",{className:"svg-icon me-0",children:(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,w.jsxs)("g",{"data-name":"Group 4328",transform:"translate(10956 -4501)",children:[(0,w.jsx)("rect",{id:"Rectangle_2068","data-name":"Rectangle 2068",width:"24",height:"24",transform:"translate(-10956 4501)",fill:"none",opacity:"0"}),(0,w.jsxs)("g",{id:"Group_3906","data-name":"Group 3906",transform:"translate(-10953.868 4503.559)",children:[(0,w.jsx)("path",{id:"Path_5042","data-name":"Path 5042",d:"M3.2,14.952,2.3,18.872a.985.985,0,0,0,.956,1.195,1.023,1.023,0,0,0,.206,0L7.4,19.158l7.571-7.543L10.746,7.4Z",transform:"translate(0 -2.914)",fill:"#545454"}),(0,w.jsx)("path",{id:"Path_5043","data-name":"Path 5043",d:"M27.5,4.926l-2.82-2.82a.989.989,0,0,0-1.4,0L21.72,3.673l4.221,4.221,1.568-1.568a.989.989,0,0,0,0-1.4Z",transform:"translate(-10.152 0)",fill:"#545454"})]})]})})})})]})]}),j?null:(0,w.jsx)("div",{className:"assets_btn_wrapper bg-white",children:(0,w.jsx)("button",{type:"button",className:"btn btn-primary w-100 ".concat(i?"":"disabled"," "),onClick:this.onSaveChanges,children:"Save Changes"})})]})})}}]),s}(r.Component);t.default=(0,d.$j)((function(e){return{networkData:e.networks.networkData,tagList:e.tags.tagList}}),(function(e){return{postAddTag:function(t,s){return e((0,u._)(t,s))},postPostUpdateAction:function(t,s){return e((0,j.kN)(t,s))},loadAssetsDataWithDispatch:function(){return e((0,j.oF)())}}}))(b)}}]);
//# sourceMappingURL=9279.85f086e1.chunk.js.map