"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[9279],{59279:function(e,t,s){s.r(t);var a=s(15671),n=s(43144),l=s(60136),i=s(29388),r=s(72791),c=s(78687),d=s(34867),x=s(72426),o=s.n(x),p=s(23794),m=s(56600),h=s(42195),u=s.n(h),g=s(12756),j=s(2841),b=s(52),N=s(94111),w=s(80184),f=function(e){(0,l.Z)(s,e);var t=(0,i.Z)(s);function s(e){var n;return(0,a.Z)(this,s),(n=t.call(this,e)).onClickToRemoveTag=function(e){return function(t){var s=n.state.tagString;s.splice(e,1),n.setState({tagString:s,changesStatus:!0})}},n.addTagButtonValue=function(){n.setState({addTagButton:!1})},n.handleOutsideClick=function(e){n.editorEnable&&n.editorEnable.current&&!n.editorEnable.current.contains(e.target)&&n.editorEnableButton&&!n.editorEnableButton.current.contains(e.target)&&n.editorEnableButton&&null!==!n.editorEnableButton.current.contains(e.target)?n.setState({descriptionEditable:!1}):n.editorEnable&&n.editorEnable.current&&!n.editorEnable.current.contains(e.target)&&null!==n.editorEnable.current.contains(e.target)&&n.setState({descriptionEditable:!0})},n.onClickNewAddTag=function(e){var t=n.state,s=t.newTag,a=t.tagString;n.props.modalAssetData;"Enter"!==e.key&&13!==e.keyCode||s&&String(s).length>=3&&(a.push(s),n.setState({tagString:a,newTag:"",selectedOption:null,changesStatus:!0,addTagButton:!0}))},n.addNewTag=function(e){return n.setState({newTag:e.target.value,changesStatus:!0})},n.onClickToSave=function(e){var t=n.state.tagString,s=n.props.modalAssetData;t&&t.length>0&&n.props.postAddTag({postId:String(s.id),tags:t.join(",")},(function(){return n.props.loadAssetsDataWithDispatch()}))},n.setNewTags=function(e){e&&e.value?n.setState({newTag:e.value,selectedOption:e}):n.setState({newTag:"",selectedOption:null})},n.onChangeContent=function(e){n.setState({content:e.target.value,changesStatus:!0})},n.onChangeTag=function(e){n.setState({newTag:e.target.value})},n.onSaveChanges=function(e){var t=n.props.modalAssetData,s=n.state,a=s.tagString,l=s.content;if(a&&a.length>0&&l){var i={action:"4",source:String(t.collection),destination:String(t.collection),postId:String(t.id),postFile:t.postFile,tags:a.join(","),content:l};n.props.postPostUpdate(i,(function(){n.props.loadAssetsDataWithDispatch(),n.setState({descriptionEditable:!1,addTagButton:!0,changesStatus:!1})}))}},n.state={descriptionEditable:!1,addTagButton:!0,tagString:[],newTag:"",listTags:[],selectedOption:null,content:"",changesStatus:!1},n.editorEnable=r.createRef(),n.editorEnableButton=r.createRef(),n}return(0,n.Z)(s,[{key:"componentWillMount",value:function(){var e=this.props.tagList;if(e&&e.length>0){var t=[];e.map((function(e){t.push({value:e,label:e})})),this.setState({listTags:t})}}},{key:"descriptionToggle",value:function(){this.setState({descriptionEditable:!0})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleOutsideClick);var e=this.props.modalAssetData;e&&Object.keys(e).length>0&&(e.tags&&String(e.tags).length>0?this.setState({tagString:String(e.tags).split(","),content:e.content}):this.setState({tagString:[],content:e.content}))}},{key:"render",value:function(){var e=this,t=this.state,s=t.descriptionEditable,a=t.addTagButton,n=t.tagString,l=t.content,i=t.changesStatus,r=t.newTag,c=this.props,x=c.modalAssetData,h=c.networkData,b=c.collections,N=c.isTrash,f=18==x.networkId?2:x.networkId,y=(h&&h.length>0&&h.filter((function(e){return e.id==f})),b&&b.length>0?(0,j.SY)(x.collection,b):[]);return(0,w.jsx)("div",{className:"full_modal_sidebar position-relative",children:(0,w.jsxs)(u(),{children:[(0,w.jsxs)("div",{className:"full_modal_sidebar_inner position-relative",children:[(0,w.jsx)("h3",{className:"border-bottom mb-xxl-3 mb-2 pb-xxl-3 pb-2 fs-7 pt-1",children:(0,w.jsx)("span",{className:"text-uppercase fw-medium",children:"General Info"})}),(0,w.jsx)("table",{className:"table table-borderless",children:(0,w.jsxs)("tbody",{children:[(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Posted By"})}),(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:(0,w.jsxs)("div",{className:"d-flex align-items-center mr-2 cursor-pointer",onClick:function(e){return window.open(x.link,"_blank")},children:[(0,w.jsx)(g.default,{className:"symbol symbol-34 rounded-circle flex-shrink-0 me-2 overflow-hidden bg-light",imageSize:38,symbolClass:"symbol-label text-light-alt fw-bold text-uppercase fs-8",name:x.name,profileUrl:(0,j.iW)(x.picture),networkId:x.networkId?x.networkId:0}),(0,w.jsxs)("div",{children:[(0,w.jsx)("p",{className:"text-dark mb-0 text-break fw-bold",children:x.name}),(0,w.jsxs)("small",{className:"mb-0 text-muted text-break",children:["@",x.username]})]})]})})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Network"})}),(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:(0,w.jsxs)("div",{className:"d-flex align-items-center",children:[(0,w.jsx)("span",{className:"me-2 d-flex",children:(0,w.jsx)("img",{className:"img-fluid",src:(0,m.F)("media/icons/social-icons/".concat((0,j.O5)(x.networkId?x.networkId:0),".svg")),height:18,width:18,alt:x.networkId?x.networkId:0})}),(0,w.jsx)("span",{className:"text-dark",children:(0,j.BK)(x.networkId?x.networkId:0)})]})})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Connection"})}),(0,w.jsxs)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:[" ",(0,w.jsx)("span",{className:"text-dark text-break",children:x.Feed&&Object.keys(x.Feed).length>0?(0,d.ZP)(x.Feed.name):"--"})]})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"File Name"})}),(0,w.jsxs)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:[" ",(0,w.jsx)("span",{className:"text-dark text-break",children:x.filename?x.filename:"--"})]})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"File Extension"})}),(0,w.jsxs)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:[" ",(0,w.jsx)("span",{className:"text-dark text-break",children:x.ext?x.ext:"--"})]})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Type"})}),(0,w.jsxs)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:[" ",(0,w.jsx)("span",{className:"text-dark text-break",children:(0,j.bJ)(x.type)?(0,j.bJ)(x.type):"--"})]})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Collection"})}),(0,w.jsxs)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:[" ",(0,w.jsx)("span",{className:"text-dark text-break",children:y||"--"})]})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Dimensions"})}),(0,w.jsxs)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:[" ",(0,w.jsxs)("span",{className:"text-dark text-break",children:[x.mediaWidth?x.mediaWidth:"--","x",x.mediaHeight?x.mediaHeight:"--"]})]})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Size"})}),(0,w.jsxs)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:[" ",(0,w.jsx)("span",{className:"text-dark text-break",children:x.size?x.size:"--"})]})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Created"})}),(0,w.jsxs)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:[" ",(0,w.jsx)("span",{className:"text-dark text-break",children:o()(x.created).utcOffset(0).format("DD MMM YYYY hh:mmA")})]})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Modified"})}),(0,w.jsxs)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:[" ",(0,w.jsx)("span",{className:"text-dark text-break",children:o()(x.modified).utcOffset(0).format("DD MMM YYYY hh:mmA")})]})]}),x.ugcRights?(0,w.jsx)(w.Fragment,{children:2==x.ugcRights.status?(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Rights"})}),(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:(0,w.jsxs)("div",{className:"d-flex align-items-center flex-wrap",children:[(0,w.jsx)("span",{className:"svg-icon me-1 text-success",children:(0,w.jsx)(p.Z,{src:(0,m.F)("media/icons/svg-icons/rights-approved-fill.svg"),height:16,width:16})}),(0,w.jsx)("span",{className:"text-success",children:"Request Approved"})]})})]}):1==x.ugcRights.status?(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Rights"})}),(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:(0,w.jsxs)("div",{className:"d-flex align-items-center flex-wrap",children:[(0,w.jsx)("span",{className:"svg-icon me-1 text-warning",children:(0,w.jsx)(p.Z,{src:(0,m.F)("media/icons/svg-icons/rights-pending-fill.svg"),height:16,width:16})}),(0,w.jsx)("span",{className:"text-warning",children:"Request Pending"})]})})]}):3==x.ugcRights.status?(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,w.jsx)("span",{className:"text-muted",children:"Rights"})}),(0,w.jsx)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:(0,w.jsxs)("div",{className:"d-flex align-items-center flex-wrap",children:[(0,w.jsx)("span",{className:"svg-icon me-1 text-danger",children:(0,w.jsx)(p.Z,{src:(0,m.F)("media/icons/svg-icons/rights-rejected-fill.svg"),height:16,width:16})}),(0,w.jsx)("span",{className:"text-danger",children:"Request Rejected"})]})})]}):null}):null]})}),(0,w.jsx)("h3",{className:"border-bottom mb-xxl-3 mb-2 pb-xxl-3 pb-2 fs-7 pt-2",children:(0,w.jsx)("span",{className:"text-uppercase fw-medium",children:"Tag"})}),n&&n.length>0?(0,w.jsxs)("div",{className:"tags-group d-flex align-items-center flex-wrap",children:[n.map((function(t,s){return(0,w.jsxs)("div",{className:"block-center badge bg-secondary text-gray-800 rounded-pill border me-2 mb-2 fw-medium",children:[t,(0,w.jsx)("button",{className:"btn p-0 ms-1",onClick:e.onClickToRemoveTag(s),children:(0,w.jsx)("i",{className:"ri-close-line icon-6 me-0"})})]},s)})),a?(0,w.jsx)(w.Fragment,{children:N?null:(0,w.jsxs)("button",{type:"button",className:"btn btn-primary btn-sm rounded-pill me-2 mb-2 py-1",onClick:this.addTagButtonValue,children:[(0,w.jsx)("i",{className:"ri-add-line"}),"Add Tag"]})}):(0,w.jsx)("div",{className:"d-flex me-2 mb-2",children:(0,w.jsx)("input",{type:"text",className:"form-control form-control-sm border-0 fw-semibold fs-7",placeholder:"Enter Tag...",value:r,onChange:this.onChangeTag,onKeyUp:this.onClickNewAddTag})})]}):(0,w.jsx)("div",{className:"tags-group d-flex align-items-center flex-wrap",children:a?(0,w.jsx)(w.Fragment,{children:N?null:(0,w.jsxs)("button",{type:"button",className:"btn btn-primary btn-sm rounded-pill me-2 mb-2",onClick:this.addTagButtonValue,children:[(0,w.jsx)("i",{className:"ri-add-line"}),"Add Tag"]})}):(0,w.jsx)("div",{className:"d-flex me-2 mb-2",children:(0,w.jsx)("input",{type:"text",className:"form-control form-control-sm border-0 fw-semibold fs-7",placeholder:"Enter Tag...",value:r,onChange:this.onChangeTag,onKeyUp:this.onClickNewAddTag})})}),(0,w.jsx)("h3",{className:"border-bottom mb-xxl-3 mb-2 pb-xxl-3 pb-2 fs-7 pt-2",children:(0,w.jsx)("span",{className:"text-uppercase fw-medium",children:"Description"})}),(0,w.jsxs)("div",{className:"mb-3 d-flex align-items-center",children:[(0,w.jsx)("div",{className:"d-flex flex-grow-1 pe-2",ref:this.editorEnable,children:(0,w.jsx)("textarea",{type:"text",className:"form-control textarea-min-row-3 ".concat(s?"":" resize-none border-0 p-0"),placeholder:"Add Description",rows:3,value:l,readOnly:!s,onChange:this.onChangeContent})}),N?null:(0,w.jsx)("button",{type:"button",className:"btn btn-icon btn-sm btn-active-light w-30px h-30px",ref:this.editorEnableButton,children:(0,w.jsx)("i",{className:"ri-edit-2-fill icon-6 me-0"})})]})]}),N?null:(0,w.jsx)("div",{className:"assets_btn_wrapper bg-white",children:(0,w.jsx)("button",{type:"button",className:"btn btn-primary w-100 ".concat(i?"":"disabled"," "),onClick:this.onSaveChanges,children:"Save Changes"})})]})})}}]),s}(r.Component);t.default=(0,c.$j)((function(e){return{networkData:e.networks.networkData,tagList:e.tags.tagList}}),(function(e){return{postAddTag:function(t,s){return e((0,b._)(t,s))},postPostUpdateAction:function(t,s){return e((0,N.kN)(t,s))},loadAssetsDataWithDispatch:function(){return e((0,N.oF)())}}}))(f)}}]);
//# sourceMappingURL=9279.1cbcb3eb.chunk.js.map