"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[5846],{25846:function(e,s,l){l.r(s),l.d(s,{default:function(){return M}});var n=l(15671),t=l(43144),i=l(60136),a=l(29388),o=l(72791),c=l(9085),r=l(20974),d=l(42195),m=l.n(d),h=l(23794),u=l(56600),x=l(47798),p=l(12576),b=l(11087),g=l(50669),f=l(32002),j=l(66321),N=l(95316),w=l(29795),C=l(71035),y=l(12756),v=l(78687),S=l(18439),k=l(8663),L=l(46191),I=l(80184),_=function(e){(0,i.Z)(l,e);var s=(0,a.Z)(l);function l(e){var t;return(0,n.Z)(this,l),(t=s.call(this,e)).handleClose=function(){t.setState({isLoading:!1,selectedCollaborator:null},(function(){return t.props.collaboratorCallback(!1)}))},t.onSelectCollaborator=function(e){t.setState({selectedCollaborator:e})},t.onSearchCollaborator=function(e){var s=t.state,l=s.copyRecommendedList,n=s.copyAccessList,i=l.filter((function(s){return s["UserCollab.emailId"].toLowerCase().includes(e.target.value.toLowerCase())})),a=n.filter((function(s){return s["UserCollab.emailId"].toLowerCase().includes(e.target.value.toLowerCase())}));t.setState({recommendedList:i,accessList:a})},t.onSubmit=function(){var e=t.state,s=e.selectedCollaborator,l=e.collectionId;if(s){t.setState({isLoading:!0});var n=s.permissions,i={emailId:s["UserCollab.emailId"],userType:2,workSpace:s.workspace,permission:{ugc_library:{createCollection:n.ugc_library.createCollection,collectionId:String(n.ugc_library.collectionId)+","+String(l)},publish:{widget:n.publish.widget,hashtag_camp:n.publish.hashtag_camp,d_screens:n.publish.d_screens,email_camp:n.publish.email_camp,social_publish:n.publish.social_publish,print_media:n.publish.print_media},networkManager:{manageAccount:n.networkManager.manageAccount,manageConnection:n.networkManager.manageConnection},otherSettings:{styleStudio:n.otherSettings.styleStudio,autoPilot:n.otherSettings.autoPilot,creators:n.otherSettings.creators,insights:n.otherSettings.insights,trash:n.otherSettings.trash}}};(new S.Z).post(k.Z7,i).then((function(e){200==e.data.response_code&&(c.Am.success("Collection shared successfully."),t.setState({isLoading:!1},(function(){return t.handleClose()})))})).catch((function(e){t.setState({isLoading:!1},(function(){return c.Am.error("Oops! Something went wrong. Please try again later.")}))}))}else c.Am.error("Please select collaborator.")},t.state={selectedOption:null,isLoading:!1,recommendedList:[],copyRecommendedList:[],copyAccessList:[],accessList:[],collectionId:null,selectedCollaborator:null},t}return(0,t.Z)(l,[{key:"componentWillReceiveProps",value:function(e){var s=e.collaboratorList;if(e.collectionId!=this.state.collectionId){var l=s.length>0?s.filter((function(s){return""!=s.permissions&&!s.permissions.ugc_library.collectionId.includes(String(e.collectionId))})):null,n=s.length>0?s.filter((function(s){return""==s.permissions||s.permissions.ugc_library.collectionId.includes(String(e.collectionId))})):null;this.setState({collectionId:e.collectionId,recommendedList:l,isLoading:!1,selectedCollaborator:null,copyRecommendedList:l,accessList:n,copyAccessList:n})}}},{key:"render",value:function(){var e=this,s=this.props.collaboratorShowModal,l=this.state,n=l.isLoading,t=l.recommendedList,i=l.selectedCollaborator,a=l.copyRecommendedList,o=l.accessList;return(0,I.jsxs)(N.Z,{show:s,onHide:this.handleClose,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,I.jsx)(N.Z.Header,{closeButton:!0,children:(0,I.jsx)(N.Z.Title,{children:"Share Collection"})}),(0,I.jsx)(N.Z.Body,{children:(0,I.jsxs)("div",{className:"connection_modal mx-xl-4 px-2 px-lg-4 mx-0",style:{maxHeight:"calc(100vh - 150px)"},children:[a&&a.length>0&&(0,I.jsx)(w.Z.Control,{size:"lg",className:"mb-3",placeholder:"Search email address",onChange:function(s){return e.onSearchCollaborator(s)}}),t&&t.length>0||o&&o.length>0?(0,I.jsxs)(I.Fragment,{children:[t&&t.length>0?(0,I.jsxs)(I.Fragment,{children:[" ",(0,I.jsx)("h4",{className:"mb-2 fs-6",children:"Recommended Collaborators"}),(0,I.jsx)("div",{className:"mb-3",children:t.map((function(s,l){return(0,I.jsxs)("div",{className:"d-flex justify-content-between align-items-center p-2 rounded-1 mb-2 cursor-pointer border border-".concat(i&&i.id==s.id?"success":"secondary"),onClick:function(){return e.onSelectCollaborator(s)},children:[(0,I.jsxs)("div",{className:"d-flex align-items-center flex-grow-1 me-2 w-50",children:[(0,I.jsx)(y.default,{className:"symbol symbol-40 rounded-circle flex-shrink-0 me-2 overflow-hidden bg-light",imageSize:40,symbolClass:"symbol-label text-light-alt fw-bolder text-uppercase fs-5",name:"Image",profileUrl:s["UserCollab.picture"]?s["UserCollab.picture"]:"",networkId:""}),(0,I.jsxs)("div",{className:"overflow-hidden",children:[(0,I.jsx)("p",{className:"text-gray-800 mb-0 w-100 fw-bold text-ellipsis",children:s["UserCollab.name"]}),(0,I.jsx)("p",{className:"mb-0 text-gray-600 text-ellipsis mb-0 fs-8",children:s["UserCollab.emailId"]})]})]}),(0,I.jsx)("div",{className:"d-flex flex-column align-items-end flex-srink-0 w-25",children:(0,I.jsx)(C.Z,{className:"py-2 px-3",bg:"light-primary",children:s["Workspace.name"]})}),(0,I.jsx)("div",{className:"d-flex flex-column align-items-end flex-srink-0 w-25",children:(0,I.jsx)("div",{className:"fs-8 text-muted fw-medium",children:"Manager"})})]},l)}))})," "]}):null,o&&o.length>0?(0,I.jsxs)(I.Fragment,{children:[" ",(0,I.jsx)("h4",{className:"mb-2 fs-6",children:"Collaborators with Access."}),(0,I.jsx)("div",{className:"mb-3",children:o.map((function(e,s){return(0,I.jsxs)("div",{className:"d-flex justify-content-between align-items-center p-2 rounded-1 mb-2 cursor-pointer border border-".concat(i&&i.id==e.id?"success":"secondary"),children:[(0,I.jsxs)("div",{className:"d-flex align-items-center flex-grow-1 me-2 w-50",children:[(0,I.jsx)(y.default,{className:"symbol symbol-40 rounded-circle flex-shrink-0 me-2 overflow-hidden bg-light",imageSize:40,symbolClass:"symbol-label text-light-alt fw-bolder text-uppercase fs-5",name:"Image",profileUrl:e["UserCollab.picture"]?e["UserCollab.picture"]:"",networkId:""}),(0,I.jsxs)("div",{className:"overflow-hidden",children:[(0,I.jsx)("p",{className:"text-gray-800 mb-0 w-100 fw-bold text-ellipsis",children:e["UserCollab.name"]}),(0,I.jsx)("p",{className:"mb-0 text-gray-600 text-ellipsis mb-0 fs-8",children:e["UserCollab.emailId"]})]})]}),(0,I.jsx)("div",{className:"d-flex flex-column align-items-end flex-srink-0 w-25",children:(0,I.jsx)(C.Z,{className:"py-2 px-3",bg:"light-primary",children:e["Workspace.name"]})}),(0,I.jsx)("div",{className:"d-flex flex-column align-items-end flex-srink-0 w-25",children:(0,I.jsx)("div",{className:"fs-8 text-muted fw-medium",children:1==e.role?"Admin":"Manager"})})]},s)}))})," "]}):null]}):(0,I.jsx)(L.Z,{modal:!0})]})}),(0,I.jsx)(N.Z.Footer,{className:"p-3",children:(0,I.jsxs)("div",{className:"mx-xl-4 px-2 px-lg-4 mx-0",children:[(0,I.jsx)("button",{type:"button",className:"btn btn-secondary btn-sm btn-min-w",onClick:this.handleClose,children:"Cancel"}),t&&t.length>0?(0,I.jsx)("button",{type:"button",className:"btn btn-primary btn-sm btn-min-w ms-3 ".concat(n?"spinner":""),onClick:this.onSubmit,children:"Share"}):null]})})]})}}]),l}(o.Component),Z=(0,v.$j)((function(e){return{collaboratorList:e.collaborator.collaboratorList,userData:e.authenticated.userData}}))(_),A=function(e){(0,i.Z)(l,e);var s=(0,a.Z)(l);function l(){var e;(0,n.Z)(this,l);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return(e=s.call.apply(s,[this].concat(i))).state={addCollectionShowModal:!1,collectionList:{assets:0,collection:[],collectionCount:0},myAssetsData:[],collectionListRequest:!0,assetsRequest:!0,perPage:10,currentPage:1,pageLimitOption:{value:"10",label:"10"},collaboratorShowModal:!1,collectionId:null},e.addCollectionModal=function(s){return e.setState({addCollectionShowModal:!0})},e.addCollectionCallback=function(s){e.setState({addCollectionShowModal:s})},e.addCollectionCallbackWithAPI=function(s){e.onLoadCollectionList(),e.setState({addCollectionShowModal:s})},e.onClickToExportCollection=function(e,s){return function(l){try{(0,f.P9)({name:s,filterType:"AND",images:[],layout:0,network:"",template:0,collection:String(e),source:"",assets_type:"",tags:"",ugc_status:"",publish_type:5,campaign_type:"",screen_type:"",platform:""}).then((function(e){c.Am.success("Your request submitted successfully. We will mail you Download link once your file will be ready.")})).catch((function(e){c.Am.error("Please try after some time.")}))}catch(n){c.Am.error("Please try after some time.")}}},e.collaboratorModalShow=function(s){e.setState({collectionId:s,collaboratorShowModal:!0})},e.collaboratorCallback=function(s){e.setState({collaboratorShowModal:s,collectionId:null})},e}return(0,t.Z)(l,[{key:"render",value:function(){var e=this,s=this.props,l=s.collectionList,n=s.limit,t=s.history,i=s.deleteCollection,a=s.userData,o=this.state.collaboratorShowModal;return(0,I.jsxs)(I.Fragment,{children:[l.slice(0,n).map((function(s,l){return(0,I.jsxs)("div",{className:"col-20",children:[(0,I.jsx)(r.W4,{id:"cm_dropDown-".concat(l),children:(0,I.jsx)(b.rU,{to:"/assets/".concat(s.id),className:"card card-custom gutter-b text-decoration-none rounded-2",children:(0,I.jsx)("div",{className:"card-body d-flex flex-column p-2",children:(0,I.jsxs)("div",{className:"d-flex align-items-center mr-2 w-100",children:[(0,I.jsx)(j.Z,{symbolClasses:"symbol symbol-48 flex-shrink-0 me-2 bg-light text-gray-600",iconClass:"icon-3",thumb:s.thumbnails,thumbName:(0,g.P)(s.thumbnails)}),(0,I.jsxs)("div",{className:"overflow-hidden",children:[(0,I.jsx)("p",{className:"fs-7 fw-medium mb-1 text-gray-800 text-ellipsis",children:s.name}),(0,I.jsxs)("p",{className:"mb-0 text-gray-600 text-ellipsis",children:[s.assets," Assets"]})]})]})})})}),(0,I.jsx)(r.W4,{id:"cm_dropDown-".concat(l),children:(0,I.jsxs)(r.xV,{className:"dropdown-menu show context_menu",id:"cm_dropDown-".concat(l),children:[(0,I.jsx)("div",{className:"menu-item px-2",children:(0,I.jsx)("div",{className:"menu-content text-muted px-2 py-1 fs-8 text-uppercase",children:"Choose your actions"})}),(0,I.jsx)("div",{className:"menu-item",children:(0,I.jsxs)(r.sN,{className:"dropdown-item",data:{foo:"bar"},onClick:function(e){return t("/assets/".concat(s.id))},children:[(0,I.jsx)("i",{className:"ri-folder-open-line icon-6 me-1"}),(0,I.jsx)("span",{className:"menu-title",children:"Open"})]})}),(0,I.jsx)("div",{className:"menu-item",onClick:e.props.collectionRenameEvent(s.id,s.name),children:(0,I.jsxs)(r.sN,{className:"dropdown-item",data:{foo:"bar"},onClick:e.handleClick,children:[(0,I.jsx)("i",{className:"ri-edit-box-line icon-6"}),(0,I.jsx)("span",{className:"menu-title",children:"Rename"})]})}),(0,I.jsx)("div",{className:"menu-item",children:(0,I.jsx)(r.Wd,{className:"dropdown-menu px-0 show",title:(0,I.jsxs)(r.sN,{className:"dropdown-item dropdown-arrow",hoverDelay:5e3,children:[(0,I.jsx)("span",{className:"svg-icon svg-icon-5",children:(0,I.jsx)(h.Z,{src:(0,u.F)("media/icons/svg-icons/publish-line.svg"),height:16,width:16})}),(0,I.jsx)("span",{className:"menu-title",children:"Publish to"})]}),children:(0,I.jsx)(m(),{options:{wheelPropagation:!1},children:(0,I.jsxs)("div",{className:"submenu_contxt_wrap",children:[(0,I.jsx)("div",{className:"menu-item text-decoration-none",children:(0,I.jsxs)(r.sN,{className:"dropdown-item",onClick:function(l){return e.props.history("/web-embed/create?collectionId=".concat(s.id))},children:[(0,I.jsx)("i",{className:"ri-code-s-slash-line icon-6"}),(0,I.jsx)("span",{className:"menu-title",children:"Widget"})]})}),(0,I.jsx)("div",{className:"menu-item text-decoration-none",children:(0,I.jsxs)(r.sN,{className:"dropdown-item",onClick:function(l){return e.props.history("/hashtag-campaign/create?collectionId=".concat(s.id))},children:[(0,I.jsx)("i",{className:"ri-hashtag icon-6"}),(0,I.jsx)("span",{className:"menu-title",children:"Hashtag Campaign"})]})}),(0,I.jsx)("div",{className:"menu-item text-decoration-none",children:(0,I.jsxs)(r.sN,{className:"dropdown-item",onClick:function(l){return e.props.history("/digital-screen/create?collectionId=".concat(s.id))},children:[(0,I.jsx)("i",{className:"ri-tv-2-line icon-6"}),(0,I.jsx)("span",{className:"menu-title",children:"Digital Screen"})]})}),(0,I.jsx)("div",{className:"menu-item text-decoration-none",children:(0,I.jsxs)(r.sN,{className:"dropdown-item",onClick:function(l){return e.props.history("/email-campaign/create?collectionId=".concat(s.id))},children:[(0,I.jsx)("i",{className:"ri-mail-line icon-6"}),(0,I.jsx)("span",{className:"menu-title",children:"Email Campaign"})]})}),(0,I.jsx)("div",{className:"menu-item text-decoration-none",children:(0,I.jsxs)(r.sN,{className:"dropdown-item",onClick:function(l){return e.props.history("/social-publish?collectionId=".concat(s.id))},children:[(0,I.jsx)("i",{className:"ri-navigation-line icon-6",style:{transform:"scaleX(-1)"}}),(0,I.jsx)("span",{className:"menu-title",children:"Social Publish"})]})}),(0,I.jsx)("div",{className:"menu-item text-decoration-none",children:(0,I.jsxs)(r.sN,{className:"dropdown-item",onClick:function(l){return e.props.history("/print-media/create?collectionId=".concat(s.id))},children:[(0,I.jsx)("span",{className:"svg-icon svg-icon-5",children:(0,I.jsx)(h.Z,{src:(0,u.F)("media/icons/svg-icons/print-media-2.svg"),height:16,width:16})}),(0,I.jsx)("span",{className:"menu-title",children:"Print Media"})]})}),(0,I.jsx)("div",{className:"menu-item text-decoration-none",children:(0,I.jsx)(r.sN,{className:"dropdown-item disabled",onClick:function(s){return e.props.history("/social-ads")},children:(0,I.jsx)(x.Z,{placement:"top",overlay:(0,I.jsx)(p.Z,{children:"Coming soon"}),children:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("span",{className:"svg-icon svg-icon-5",children:(0,I.jsx)(h.Z,{src:(0,u.F)("media/icons/svg-icons/speaker-line.svg"),height:16,width:16})}),(0,I.jsx)("span",{className:"menu-title",children:"Social Ads"})]})})})})]})})})}),(0,I.jsx)("hr",{className:"my-1"}),!a||""!=a.collaborator&&"0"!=a.collaborator.activeAccount&&""!=a.collaborator.permissions?null:(0,I.jsx)("div",{className:"menu-item",onClick:function(){return e.collaboratorModalShow(s.id)},children:(0,I.jsxs)(r.sN,{className:"dropdown-item",children:[(0,I.jsx)("i",{className:"ri-share-box-line icon-6"}),(0,I.jsx)("span",{className:"menu-title",children:"Share"})]})}),(0,I.jsx)("div",{className:"menu-item",onClick:e.onClickToExportCollection(s.id,s.name),children:(0,I.jsxs)(r.sN,{className:"dropdown-item",children:[(0,I.jsx)("i",{className:"ri-download-2-line icon-6"}),(0,I.jsx)("span",{className:"menu-title",children:"Export"})]})}),(0,I.jsx)("div",{className:"menu-item",onClick:i(s.id),children:(0,I.jsxs)(r.sN,{className:"dropdown-item",children:[(0,I.jsx)("i",{className:"ri-delete-bin-6-line icon-6"}),(0,I.jsx)("span",{className:"menu-title",children:"Move to Trash"})]})})]})})]},l)})),(0,I.jsx)(Z,{collaboratorCallback:this.collaboratorCallback,collaboratorShowModal:o,collectionId:this.state.collectionId})]})}}]),l}(o.Component),M=A}}]);
//# sourceMappingURL=5846.04333514.chunk.js.map