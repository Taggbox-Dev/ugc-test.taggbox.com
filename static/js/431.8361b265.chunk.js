"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[431],{70431:function(e,t,n){n.r(t);var a=n(15671),s=n(43144),c=n(97326),o=n(60136),i=n(29388),r=n(72791),l=n(21830),d=n.n(l),u=n(55920),m=n(8663),h=n(56600),p=n(92719),f=n(67839),k=n(29795),g=n(92471),w=n(7566),x=n(23544),v=n(25554),b=n(78027),j=n(32002),y=n(46900),N=(n(9085),n(80184)),I=g.oc?window:new BroadcastChannel("connect"),C=new u.Z,_=function(e){(0,o.Z)(n,e);var t=(0,i.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={connected:null,showConfirm:!1,rightsVia:""},e.onLoadSocialAccount=function(){try{var t=e.props.modalAssetData;if(C.get("ugcRights".concat(t.networkId))){var n=C.get("ugcRights".concat(t.networkId));n&&n.length>0&&e.setState({access_token:"",socialData:null,accountsData:n},(function(){return e.props.onUpdateData(String((0,g.O5)(t.networkId)).toLowerCase(),n)}))}}catch(a){}},e.readAuthenticationCode=function(t){var n=JSON.parse(t.data),a=n.data,s=n.networkId,o=n.type,i=(0,c.Z)(e);if("get-rights"==o){JSON.parse(t.data);var r=e.props.modalAssetData;if(2==r.networkId||18==r.networkId)(0,v.YK)(a,(function(t){(0,j.H$)({access_token:t.token}).then((function(t){var n=t.data,a=[];n&&Object.keys(n).length>0&&a.push({id:n.id,name:n.username,picture:(0,h.F)("media/icons/social-icons/".concat((0,g.O5)(r.networkId),".svg"))}),C.set("ugcRights".concat(r.networkId),JSON.stringify(a),{path:"/"}),i.setState({access_token:n.token,socialData:t.data,accountsData:a},(function(){return e.props.onUpdateData("instagram",a)}))})).catch((function(e){}))}));else if(3==r.networkId)(0,v.XN)(a,s,(function(t){(0,j.pV)({access_token:t.token}).then((function(n){var a=n.data.pages,s=[];a&&a.length>0&&a.map((function(e){s.push({id:e.id,name:e.name,access_token:e.access_token,picture:(0,h.F)("media/icons/social-icons/".concat((0,g.O5)(r.networkId),".svg"))})})),C.set("ugcRights".concat(r.networkId),JSON.stringify(s),{path:"/"}),i.setState({access_token:t.token,socialData:n.data,accountsData:s},(function(){return e.props.onUpdateData("facebook",s)}))})).catch((function(e){}))}));else if(1==r.networkId){var l=[];a&&Object.keys(a).length>0&&l.push({id:a.id_str,name:a.name,picture:a.picture?a.picture:(0,h.F)("media/icons/social-icons/".concat((0,g.O5)(r.networkId),".svg"))}),C.set("ugcRights".concat(r.networkId),JSON.stringify(l),{path:"/"}),i.setState({access_token:localStorage.getItem("tokenSecret"),socialData:a,accountsData:l},(function(){return e.props.onUpdateData("twitter",l)}))}else if(28==r.networkId){l=[];a&&Object.keys(a).length>0&&l.push({id:a.display_name,name:a.display_name,picture:a.avatar?a.avatar:(0,h.F)("media/icons/social-icons/".concat((0,g.O5)(r.networkId),".svg"))}),C.set("ugcRights".concat(r.networkId),JSON.stringify(l),{path:"/"}),i.setState({access_token:a.client_key,socialData:a,accountsData:l},(function(){return e.props.onUpdateData("tiktok",l)}))}else(0,b.Jr)(a,s,(function(e){}))}},e.handleYes=function(t){e.setState({showConfirm:!0})},e.handleNo=function(t){e.setState({showConfirm:!0})},e.onClickSocialConnect=function(e){return function(t){e&&Object.keys(e).length>0&&d().fire({imageUrl:(0,h.F)("media/icons/social-icons-square/".concat((0,g.O5)(e.networkId),".svg")),imageHeight:40,imageWidth:40,title:"<strong>".concat((0,g.nX)((0,g.O5)(e.networkId)),"</strong>"),html:"Add an account to continue",showCloseButton:!0,showCancelButton:!1,focusConfirm:!0,confirmButtonText:"Continue with ".concat((0,g.nX)((0,g.O5)(e.networkId))),confirmButtonAriaLabel:"Continue with ".concat((0,g.nX)((0,g.O5)(e.networkId)))}).then((function(t){if(t.isConfirmed)switch(localStorage.setItem("networkId",e.networkId),localStorage.setItem("connectionType","get-rights"),e.networkId){case 1:(0,y.ov)();break;case 6:(0,w.nY)(6);break;case 21:(0,x.$8)();break;case 11:(0,w.GC)(11);break;case 8:(0,x.ok)();break;case 3:(0,x.vr)(3);break;case 28:(0,x.Bq)();break;case 2:var n="https://api.instagram.com/oauth/authorize?client_id=".concat(m.yzW,"&redirect_uri=").concat(m.XPy,"/instagram/feeds/authCallback/&scope=user_profile,user_media&response_type=code");window.open(n,"_blank","width=786,height=786");break;case 18:var a="https://api.instagram.com/oauth/authorize?client_id=".concat(m.yzW,"&redirect_uri=").concat(m.XPy,"/instagram/feeds/authCallback/&scope=user_profile,user_media&response_type=code");window.open(a,"_blank","width=786,height=786")}}))}},e.handleChangeOption=function(t){e.setState({rightsVia:t})},e}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){I.addEventListener("message",this.readAuthenticationCode),this.onLoadSocialAccount()}},{key:"componentWillUnmount",value:function(){I.removeEventListener("message",this.readAuthenticationCode)}},{key:"render",value:function(){var e=this.props,t=e.modalAssetData,n=(e.connectedAccount,e.rightsViaOption),a=e.rightsVia,s=!(!(t&&Object.keys(t).length>0)||2!=t.networkId&&18!=t.networkId),c=!!(t&&Object.keys(t).length>0&&28==t.networkId);return(0,N.jsx)("div",{className:"p-lg-6 p-3",children:(0,N.jsxs)("div",{className:"m-auto",children:[(0,N.jsx)("h3",{className:"mb-1 fs-7 pt-1",children:"Select the mode for Right Request"}),(0,N.jsxs)("p",{children:["Request Content creators consent through ",s?"Comment, Direct message or Link-in Bio.":c?"Direct message or Link-in Bio.":"Direct message."," "]}),(0,N.jsx)("div",{className:"mb-3 d-flex flex-column",children:(0,N.jsxs)(p.Z,{type:"radio",name:"options",defaultValue:a,className:"flex-column",onChange:n,children:[s?(0,N.jsxs)(f.Z,{variant:"outline-secondary",id:"rightsVia-2",value:"viaComments",className:"mb-2 d-flex bg-transparent justify-content-between py-4 ".concat("viaComments"==a?"border-success":""),children:[(0,N.jsxs)("div",{className:"d-flex me-3 fw-normal",children:[(0,N.jsx)("i",{className:"ri-message-line icon-3 mt-1 me-2 fw-normal"}),(0,N.jsxs)("span",{className:"text-start",children:[(0,N.jsx)("p",{className:"h6 mb-0 fw-medium",children:"Comment Request"}),(0,N.jsx)("span",{className:"fs-10",children:"Request creators consent as a comment on their post."})]})]}),(0,N.jsx)(k.Z.Check.Input,{type:"radio",name:"rights-via",className:"d-none"}),(0,N.jsx)("span",{className:"w-20px",children:"viaComments"==a?(0,N.jsx)("i",{className:"ri-checkbox-circle-fill icon-5 me-0 text-success"}):null})]}):null,(0,N.jsxs)(f.Z,{variant:"outline-secondary",id:"rightsVia-3",value:"viaDM",className:"mb-2 d-flex bg-transparent justify-content-between py-4 ".concat("viaDM"==a?"border-success":""),children:[(0,N.jsxs)("div",{className:"d-flex me-3 fw-normal",children:[(0,N.jsx)("i",{className:"ri-discuss-line icon-3 mt-1 me-2 fw-normal"}),(0,N.jsxs)("span",{className:"text-start",children:[(0,N.jsx)("p",{className:"h6 mb-0 fw-medium",children:"DM".concat(28==t.networkId?"/Comment":""," Request")}),(0,N.jsxs)("span",{className:"fs-10",children:["Send request for creator's consent via. Direct message in their inbox".concat(28==t.networkId?" or comment under the post.":"")," "]})]})]}),(0,N.jsx)(k.Z.Check.Input,{type:"radio",name:"rights-via",className:"d-none"}),(0,N.jsx)("span",{className:"w-20px",children:"viaDM"==a?(0,N.jsx)("i",{className:"ri-checkbox-circle-fill icon-5 me-0 text-success"}):null})]}),s||c?(0,N.jsxs)(f.Z,{variant:"outline-secondary",id:"rightsVia-4",value:"linkBio",className:"mb-2 d-flex bg-transparent justify-content-between py-4 ".concat("linkBio"==a?"border-success":""),children:[(0,N.jsxs)("div",{className:"d-flex me-3 fw-normal",children:[(0,N.jsx)("i",{className:"ri-link icon-3 mt-1 me-2 fw-normal"}),(0,N.jsxs)("span",{className:"text-start",children:[(0,N.jsx)("p",{className:"h6 mb-0 fw-medium",children:"Link-in Bio Request"}),(0,N.jsxs)("span",{className:"fs-10",children:["Secure creator\u2019s consent through Link-in Bio on your profile."," "]})]})]}),(0,N.jsx)(k.Z.Check.Input,{type:"radio",name:"rights-via",className:"d-none"}),(0,N.jsx)("span",{className:"w-20px",children:"linkBio"==a?(0,N.jsx)("i",{className:"ri-checkbox-circle-fill icon-5 me-0 text-success"}):null})]}):null]})},"inline-radio")]})})}}]),n}(r.Component);t.default=_}}]);
//# sourceMappingURL=431.8361b265.chunk.js.map