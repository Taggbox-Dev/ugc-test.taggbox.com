"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[1410],{91410:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var a=n(15671),s=n(43144),c=n(97326),o=n(60136),i=n(29388),r=n(72791),l=n(21830),d=n.n(l),u=n(8663),m=n(56600),h=(n(80238),n(29439)),p=n(84866),f=(n(84682),n(32480)),g=n(80184),k=function(e){var t=(0,r.useState)(""),n=(0,h.Z)(t,2),a=(n[0],n[1]),s=(0,r.useState)(),c=(0,h.Z)(s,2),o=(c[0],c[1]);(0,r.useCallback)((function(){alert("login start")}),[]),(0,r.useCallback)((function(){o(null),a(""),alert("logout success")}),[]),(0,r.useCallback)((function(){}),[]);return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(p.LO,{client_id:"95564504779-0hejo69vc4apo6p0avpafasvbcfhlvom.apps.googleusercontent.com",redirect_uri:"https://ugc.taggbox.com/login",scope:"openid profile email",discoveryDocs:"claims_supported",access_type:"offline",onResolve:function(t){var n=t.provider,a=t.data;return e.onUpdateData(n,a)},onReject:function(e){},children:(0,g.jsxs)("div",{className:"d-flex align-items-center rounded-1 mb-2 p-3 btn btn-outline-secondary w-100",children:[(0,g.jsxs)("div",{className:"d-flex align-items-center flex-grow-1 w-75",children:[(0,g.jsx)("div",{className:"symbol symbol-40 bg-light rounded-circle flex-shrink-0 me-2 overflow-hidden"}),(0,g.jsx)("div",{className:"w-75 overflow-hidden",children:(0,g.jsx)("span",{className:"text-start fs-7 d-block fw-bolder text-ellipsis",children:"Add Account"})})]}),(0,g.jsx)("div",{className:"d-flex",children:(0,g.jsx)("span",{className:"h-20px w-20px",children:(0,g.jsx)("img",{className:"object-center-cover",src:(0,m.F)("media/icons/social-icons/".concat((0,f.O5)(7),".svg")),alt:"network",style:{filter:"grayscale(1)",opacity:".5"}})})})]})})})},w=n(7566),x=n(23544),v=n(25554),b=n(78027),j=n(32002),N=new BroadcastChannel("connect"),y=function(e){(0,o.Z)(n,e);var t=(0,i.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={connected:null,showConfirm:!1},e.readAuthenticationCode=function(t){var n=JSON.parse(t.data),a=n.data,s=n.networkId,o=n.type,i=(0,c.Z)(e);if("get-rights"==o){JSON.parse(t.data);var r=e.props.modalAssetData;2==r.networkId||18==r.networkId?18==r.networkId?(0,v.XN)(a,s,(function(t){(0,j.gd)({access_token:t.token}).then((function(n){var a=n.data.accounts,s=[];a&&a.length>0&&a.map((function(e){s.push({id:e.id,name:e.username,picture:(0,m.F)("media/icons/social-icons/".concat((0,f.O5)(r.networkId),".svg"))})})),i.setState({access_token:t.token,socialData:n.data,accountsData:s},(function(){return e.props.onUpdateData("instagram",s)}))}))})):2==r.networkId&&(0,v.YK)(a,s,(function(t){(0,j.gd)({access_token:t.token}).then((function(n){var a=n.data.accounts,s=[];a&&a.length>0&&a.map((function(e){s.push({id:e.id,name:e.username,picture:(0,m.F)("media/icons/social-icons/".concat((0,f.O5)(r.networkId),".svg"))})})),i.setState({access_token:t.token,socialData:n.data,accountsData:s},(function(){return e.props.onUpdateData("instagram",s)}))}))})):3==r.networkId?(0,v.XN)(a,s,(function(t){(0,j.pV)({access_token:t.token}).then((function(n){var a=n.data.pages,s=[];a&&a.length>0&&a.map((function(e){s.push({id:e.id,name:e.name,access_token:e.access_token,picture:(0,m.F)("media/icons/social-icons/".concat((0,f.O5)(r.networkId),".svg"))})})),i.setState({access_token:t.token,socialData:n.data,accountsData:s},(function(){return e.props.onUpdateData("facebook",s)}))}))})):(0,b.Jr)(a,s,(function(e){}))}},e.handleYes=function(t){e.setState({showConfirm:!0})},e.handleNo=function(t){e.setState({showConfirm:!0})},e.onClickSocialConnect=function(e){return function(t){e&&Object.keys(e).length>0&&d().fire({imageUrl:(0,m.F)("media/icons/social-icons-square/".concat((0,f.O5)(e.networkId),".svg")),imageHeight:40,imageWidth:40,title:"<strong>".concat((0,f.O5)(e.networkId),"</strong>"),html:"Connect to ".concat((0,f.O5)(e.networkId)," and start collecting assets."),showCloseButton:!0,showCancelButton:!1,focusConfirm:!0,confirmButtonText:"Continue with ".concat((0,f.O5)(e.networkId)),confirmButtonAriaLabel:"Continue with ".concat((0,f.O5)(e.networkId))}).then((function(t){switch(localStorage.setItem("networkId",e.networkId),localStorage.setItem("connectionType","get-rights"),e.networkId){case 1:(0,x.oi)();break;case 6:(0,w.nY)(6);break;case 21:(0,x.$8)();break;case 11:(0,w.GC)(11);break;case 8:(0,x.ok)();break;case 3:(0,x.vr)(3);break;case 2:var n="https://api.instagram.com/oauth/authorize?client_id=".concat(u.yz,"&redirect_uri=").concat(u.XP,"/instagram/feeds/authCallback/&scope=user_profile,user_media&response_type=code");window.open(n,"_blank","width=786,height=786");break;case 18:(0,x.vr)(18)}}))}},e}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){N.addEventListener("message",this.readAuthenticationCode)}},{key:"componentWillUnmount",value:function(){N.removeEventListener("message",this.readAuthenticationCode)}},{key:"render",value:function(){this.state.showConfirm;var e=this.props,t=e.modalAssetData,n=e.connectedAccount;return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("div",{className:"p-lg-6 p-3",children:(0,g.jsx)("div",{className:"m-auto",children:n&&n.data.length>0?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h3",{className:"mb-2 pb-2 fs-7 pt-1",children:(0,g.jsx)("span",{className:"fw-medium",children:"Connect Account"})}),(0,g.jsxs)("div",{className:"mb-8",children:[(0,g.jsxs)("button",{type:"button",className:"d-flex align-items-center rounded-1 mb-2 p-3 border border-dark bg-white w-100",children:[(0,g.jsxs)("div",{className:"d-flex align-items-center flex-grow-1 w-75",children:[(0,g.jsx)("div",{className:"symbol symbol-40 rounded-circle flex-shrink-0 me-2 overflow-hidden",children:(0,g.jsx)("img",{className:"object-center-cover",src:n.data[0].picture,height:40,width:40,alt:"instagram"})}),(0,g.jsx)("div",{className:"w-75 overflow-hidden",children:(0,g.jsxs)("span",{className:"text-start fs-7 d-block fw-bolder text-dark text-ellipsis",children:["@",n.data[0].name]})})]}),(0,g.jsx)("div",{className:"d-flex",children:(0,g.jsx)("span",{className:"h-20px w-20px",children:(0,g.jsx)("img",{className:"object-center-cover",src:(0,m.F)("media/icons/social-icons/".concat(n.provider,".svg")),alt:""})})})]}),(0,g.jsx)("span",{className:"fw-medium",children:"You are logged in with this account"})]})]}):(0,g.jsx)(g.Fragment,{children:7==t.networkId?(0,g.jsx)(k,{onUpdateData:this.props.onUpdateData}):(0,g.jsxs)("button",{type:"button",className:"d-flex align-items-center rounded-1 mb-2 p-3 btn btn-outline-secondary w-100",onClick:this.onClickSocialConnect(t),children:[(0,g.jsxs)("div",{className:"d-flex align-items-center flex-grow-1 w-75",children:[(0,g.jsx)("div",{className:"symbol symbol-40 bg-light rounded-circle flex-shrink-0 me-2 overflow-hidden"}),(0,g.jsx)("div",{className:"w-75 overflow-hidden",children:(0,g.jsx)("span",{className:"text-start fs-7 d-block fw-bolder text-ellipsis",children:"Add Account"})})]}),t.networkId?(0,g.jsx)("div",{className:"d-flex",children:(0,g.jsx)("span",{className:"h-20px w-20px",children:(0,g.jsx)("img",{className:"object-center-cover",src:(0,m.F)("media/icons/social-icons/".concat((0,f.O5)(t.networkId),".svg")),alt:"network",style:{filter:"grayscale(1)",opacity:".5"}})})}):null]})})})})})}}]),n}(r.Component),C=y}}]);
//# sourceMappingURL=1410.9b1f62fa.chunk.js.map