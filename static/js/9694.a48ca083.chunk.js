"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[9694],{59694:function(e,t,n){n.r(t);var s=n(1413),o=n(15671),c=n(43144),a=n(97326),l=n(60136),i=n(29388),r=n(72791),u=n(88890),d=n.n(u),m=n(78687),p=n(64802),g=n.n(p),h=n(72426),f=n.n(h),x=n(74342),b=n(13953),y=n(56600),k=n(50732),j=n(34361),v=n(94111),C=n(2841),S=n(90031),_=n(6697),N=n(53841),F=n(80184),R=r.lazy((function(){return n.e(5217).then(n.bind(n,5217))})),w=r.lazy((function(){return n.e(431).then(n.bind(n,70431))})),Z=r.lazy((function(){return n.e(6293).then(n.bind(n,6293))})),A=r.lazy((function(){return n.e(3422).then(n.bind(n,53422))})),D=r.lazy((function(){return n.e(508).then(n.bind(n,90508))})),U=r.lazy((function(){return n.e(5304).then(n.bind(n,5304))})),I="0701d3d7f8d94e92a65a9cba388b1d96",L="cloud.taggbox.com",E="47ABVORKG52UYE1KB28S",O="pcaTfeokaz28geAAns08H3yaGbOVz6ILgTptu19v",K="https://test.taggbox.com",P=function(e){(0,l.Z)(n,e);var t=(0,i.Z)(n);function n(e){var c;return(0,o.Z)(this,n),(c=t.call(this,e)).state={step:1,client_logo:null,client_logo_name:null,comment:"We loved your creative brilliance! Can we showcase your incredible work and give you the recognition you deserve? \u2728\ud83d\udcf8\ud83d\ude4c. Please approve our request so we can use your content in our marketing campaign.",tncName:"TermsAndConditions.docx",tncUrl:"TermsAndConditions.docx",tnc:!1,logoModal:!1,fileModal:!1,activeKey:"ugc-genralRequest",connectedAccount:null,commentError:null,tncUrlError:null,tncError:null,requestedRespone:null},c.onClickToChange=function(e){return function(t){1==c.state.step?c.state.comment&&c.state.tncUrl&&c.state.tnc?c.setState({step:e,activeKey:"ugc-socialAccount"}):(c.state.comment&&0!=String(c.state.comment).length||c.setState({commentError:!0}),c.state.tncUrl||c.setState({tncUrlError:!0}),c.state.tnc||c.setState({tncError:!0})):2==c.state.step?c.state.connectedAccount&&c.onClicktoSendRequest({step:e,activeKey:"ugc-copyUrl"}):c.state.step}},c.onClickToRemoveLogo=function(e){return c.setState({client_logo:null,client_logo_name:null})},c.onLoadLastRequestData=function(){var e=(0,a.Z)(c);(0,j.mO)().then((function(t){var n=t.data.result,o={},c={},a={};n.client_logo&&String(n.client_logo).length>0&&(o={client_logo:n.client_logo}),n.custom_message&&String(n.custom_message).length>0&&(c={comment:n.custom_message}),n.custom_term_type&&String(n.custom_term_type).length>0&&(a={tncName:n.custom_terms,tncUrl:n.custom_term_type}),e.setState((0,s.Z)((0,s.Z)((0,s.Z)({},o),c),a))}))},c.onClickClearFile=function(e){c.setState({tncName:"",tncUrl:""})},c.termsFileDownload=function(){g().saveAs((0,y.F)("media/downloads/Terms&ConditionsforuseofUGC.docx"),"Terms&ConditionsforuseofUGC.docx")},c.modalClose=function(e){return function(t){2==e?c.setState({step:1,activeKey:"ugc-genralRequest"}):c.props.modalClose(!1)}},c.onChangeComment=function(e){return c.setState({comment:e.target.value})},c.onClicktnc=function(e){var t=c.state.tnc;c.setState({tnc:!t,tncError:null})},c.onLogoClose=function(e){c.uppy.cancelAll(),c.setState({logoModal:!1})},c.onLogoOpen=function(e){return c.setState({logoModal:!0},(function(){d()(".uppy-Dashboard-close").click((function(){c.uppy.cancelAll(),c.setState({logoModal:!1})}))}))},c.onFileOpen=function(e){c.setState({fileModal:!0},(function(){d()(".uppy-Dashboard-close").click((function(){c.uppyPostEdit.cancelAll(),c.setState({fileModal:!1})}))}))},c.onFileClose=function(){c.uppyPostEdit.cancelAll(),c.setState({fileModal:!1})},c.onSelected=function(e){c.setState({activeKey:e})},c.onClicktoSendRequest=function(e){var t=c.props,n=t.modalAssetData,o=t.isBulkStatus,l=t.bulkRightsData,i=c.state,r=i.comment,u=i.tncUrl,d=i.tncName,m=i.client_logo,p=i.connectedAccount,g={};p&&p.data.length>0&&(g=p.data[0]);var h=(0,a.Z)(c),f=[];o?l.map((function(e){f.push((0,s.Z)((0,s.Z)({referenceId:e.referenceId,username:e.username,media:e.publishImage,video:(0,C.me)(e.mediaFile)},g),{},{link:e.link,author:e.picture}))})):f.push((0,s.Z)((0,s.Z)({referenceId:n.referenceId,username:n.username,media:n.publishImage,video:(0,C.me)(n.mediaFile)},g),{},{link:n.link,author:n.picture}));var x={feedId:n.feedId,custom_message:r,networkId:n.networkId,brandlink:m||"",termslink:u,custom_term_type:d,assets:f};(0,j.mL)(x).then((function(t){h.props.loadAssetsDataWithDispatch(),h.setState((0,s.Z)({requestedRespone:t.data},e))}))},c.onUpdateData=function(e,t){c.setState({connectedAccount:{provider:e,data:t}})},c.uppy=new k.hS({debug:!0,autoProceed:!1,restrictions:{maxFileSize:5e6,maxNumberOfFiles:1,minNumberOfFiles:1,allowedFileTypes:["image/*"]}}).use(S.ZP,{target:"#a",params:{auth:{key:I},steps:{store:{robot:"/wasabi/store",bucket_region:"us-west-1",bucket:L,key:E,secret:O,path:"postimage/${file.id}"}}},waitForEncoding:!0}).use(_.Z,{target:k.hS.Dashboard,companionUrl:K}).use(N.Z,{target:k.hS.Dashboard,companionUrl:K}),c.uppyPostEdit=new k.hS({debug:!0,autoProceed:!1,restrictions:{maxFileSize:5e6,maxNumberOfFiles:1,minNumberOfFiles:1,allowedFileTypes:["application/pdf","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]}}).use(S.ZP,{target:"#a",params:{auth:{key:I},steps:{store:{robot:"/wasabi/store",bucket_region:"us-west-1",bucket:L,key:E,secret:O,path:"test/${file.id}"}}},waitForEncoding:!0}).use(_.Z,{target:k.hS.Dashboard,companionUrl:K}).use(N.Z,{target:k.hS.Dashboard,companionUrl:K}),c}return(0,c.Z)(n,[{key:"componentDidMount",value:function(){var e=this;this.uppyPostEdit.on("transloadit:result",(function(t,n){var s=n.url.split("/"),o=(s[s.length-1],e.state),c=o.tncName,a=o.tncUrl;a=n.id,c=n.name,e.setState({tncName:c,tncUrl:a,selectedFile:n.id,filename:"https://cloud.taggbox.com/test/".concat(n.id),selected:"https://cloud.taggbox.com/test/".concat(n.id)},(function(){setTimeout((function(){e.uppyPostEdit.cancelAll(),e.setState({fileModal:!1})}),300)}))})),this.uppy.on("transloadit:result",(function(t,n){var s=e.state,o=s.client_logo,c=s.client_logo_name;o="https://cloud.taggbox.com/postimage/".concat(n.id),c=n.name,e.setState({client_logo:o,client_logo_name:c,selectedlogoFile:n.id,logofilename:"https://cloud.taggbox.com/postimage/".concat(n.id),logoselected:"https://cloud.taggbox.com/postimage/".concat(n.id)},(function(){setTimeout((function(){e.uppy.cancelAll(),e.setState({logoModal:!1})}),300)}))})),this.onLoadLastRequestData()}},{key:"componentWillUnmount",value:function(){this.uppy.close()}},{key:"render",value:function(){var e=this,t=this.props.modalAssetData,n=this.state,s=n.step,o=n.activeKey,c=n.connectedAccount,a=n.requestedRespone,l=n.comment;return t&&Object.keys(t).length>0?(0,F.jsxs)("div",{className:"rights_modal_sidebar position-relative",children:[(0,F.jsx)("div",{className:"rights_modal_aside_wrap",children:null==t.ugcRights?(0,F.jsxs)(x.Z.Container,{activeKey:o,onSelect:this.onSelected,children:[(0,F.jsx)("div",{className:"ugc-wizard-nav",children:(0,F.jsxs)(b.Z,{variant:"nav",className:"bg-light justify-content-between row gx-0",children:[(0,F.jsx)(b.Z.Item,{className:"col-4",children:(0,F.jsxs)(b.Z.Link,{className:"py-3 py-xl-4 block-center ".concat(1==s||2==s||3==s?"active":""),eventKey:"ugc-genralRequest",onClick:function(t){return e.setState({step:1})},children:[(0,F.jsx)("span",{className:"d-flex me-1 text-success",children:(0,F.jsx)("i",{className:"ri-checkbox-circle-fill icon-5"})}),(0,F.jsx)("span",{className:"fw-bold text-nowrap",children:"Generate Request"})]})}),(0,F.jsx)(b.Z.Item,{className:"col-4",children:(0,F.jsxs)(b.Z.Link,{className:"py-3 py-xl-4 block-center ".concat(2==s||3==s?"active":"disabled"),eventKey:"ugc-socialAccount",children:[(0,F.jsxs)("span",{className:"d-flex me-1",children:[(0,F.jsx)("i",{className:"checkIcoFilled ri-checkbox-circle-fill icon-5 text-success"}),(0,F.jsx)("i",{className:"checkIco ri-checkbox-circle-line icon-5"})]}),(0,F.jsx)("span",{className:"fw-bold text-nowrap",children:"Social Account"})]})}),(0,F.jsx)(b.Z.Item,{className:"col-4",children:(0,F.jsxs)(b.Z.Link,{className:"py-3 py-xl-4 block-center ".concat(3==s?"active":"disabled"),eventKey:"ugc-copyUrl",children:[(0,F.jsxs)("span",{className:"d-flex me-1",children:[(0,F.jsx)("i",{className:"checkIcoFilled ri-checkbox-circle-fill icon-5 text-success"}),(0,F.jsx)("i",{className:"checkIco ri-checkbox-circle-line icon-5"})]}),(0,F.jsx)("span",{className:"fw-bold text-nowrap",children:"Copy URL"})]})})]})}),(0,F.jsxs)(x.Z.Content,{children:[(0,F.jsx)(x.Z.Pane,{eventKey:"ugc-genralRequest",children:(0,F.jsx)(r.Suspense,{fallback:(0,F.jsx)(F.Fragment,{}),children:(0,F.jsx)(R,{state:this.state,onChangeComment:this.onChangeComment,onClicktnc:this.onClicktnc,onClickClearFile:this.onClickClearFile,uppyPostEdit:this.uppyPostEdit,uppy:this.uppy,onLogoClose:this.onLogoClose,onLogoOpen:this.onLogoOpen,onClickToRemoveLogo:this.onClickToRemoveLogo,onFileOpen:this.onFileOpen,onFileClose:this.onFileClose})})}),(0,F.jsx)(x.Z.Pane,{eventKey:"ugc-socialAccount",children:(0,F.jsx)(r.Suspense,{fallback:(0,F.jsx)(F.Fragment,{}),children:(0,F.jsx)(w,{modalAssetData:t,onUpdateData:this.onUpdateData,connectedAccount:c})})}),(0,F.jsx)(x.Z.Pane,{eventKey:"ugc-copyUrl",children:(0,F.jsx)(r.Suspense,{fallback:(0,F.jsx)(F.Fragment,{}),children:(0,F.jsx)(Z,{modalAssetData:t,requestedRespone:a,comment:l})})})]})]}):t.ugcRights&&Object.keys(t.ugcRights).length>0&&1==t.ugcRights.status?(0,F.jsx)(r.Suspense,{fallback:(0,F.jsx)(F.Fragment,{}),children:(0,F.jsx)(A,{days:parseInt(30)-(parseInt(parseInt(f()().diff(f()(t.ugcRights.created),"days")))+parseInt(1)),expireStatus:!0,modalAssetData:t})}):t.ugcRights&&Object.keys(t.ugcRights).length>0&&2==t.ugcRights.status?(0,F.jsx)(r.Suspense,{fallback:(0,F.jsx)(F.Fragment,{}),children:(0,F.jsx)(D,{modalAssetData:t})}):t.ugcRights&&Object.keys(t.ugcRights).length>0&&3==t.ugcRights.status?(0,F.jsx)(r.Suspense,{fallback:(0,F.jsx)(F.Fragment,{}),children:(0,F.jsx)(U,{modalAssetData:t,onUpdateRejectedRightDetail:this.props.onUpdateRejectedRightDetail})}):null}),null==t.ugcRights?(0,F.jsxs)("div",{className:"rights_modal_actions text-center modal-footer w-100",children:[1==s||2==s?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("button",{type:"button",className:"btn btn-secondary me-2",onClick:this.modalClose(s),children:1==s?"Cancel":2==s?"Back":""}),(0,F.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.onClickToChange(1==s?2:2==s?3:4),children:"Next Step"})]}):null,3==s?(0,F.jsx)("button",{type:"button",className:"btn btn-secondary me-2",onClick:this.modalClose(s),children:"Done"}):null]}):null]}):null}}]),n}(r.Component);t.default=(0,m.$j)((function(e){return{}}),(function(e){return{loadAssetsDataWithDispatch:function(){return e((0,v.oF)())}}}))(P)}}]);
//# sourceMappingURL=9694.a48ca083.chunk.js.map