"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[8059],{18059:function(e,t,s){s.r(t);var n=s(15671),a=s(43144),o=s(60136),l=s(29388),i=s(72791),c=s(18622),r=s(28949),d=s(47798),h=s(12576),m=s(93255),u=(s(42195),s(7161)),p=s(80184),f=i.lazy((function(){return s.e(5135).then(s.bind(s,45135))})),x=i.lazy((function(){return s.e(6178).then(s.bind(s,16178))})),g=i.lazy((function(){return s.e(5662).then(s.bind(s,35662))})),v=i.lazy((function(){return s.e(6903).then(s.bind(s,96903))})),b=function(e){(0,o.Z)(s,e);var t=(0,l.Z)(s);function s(e){var a;(0,n.Z)(this,s),(a=t.call(this,e)).onClickEnableBackground=function(e){var t=a.state.background;t.status=e.target.checked,e.target.checked?t.transparent=0:t.transparent=1,a.setState({background:t})},a.onClickBackgroundColor=function(e){var t=a.state.background;t.color=e,a.setState({background:t})},a.onClickTouploadImage=function(e,t,s){var n=a.state.background;n.image=e,n.backgroundImageId=t,a.setState({background:n},(function(){return s()}))},a.backgroundImageRemove=function(e){var t=a.state.background;t.image=null,t.backgroundImageId=0,a.setState({background:t})},a.onClickEnableTime=function(e){var t=a.state.advanced;t.time=e.target.checked,a.setState({advanced:t})},a.onClickEnableAuthor=function(e){var t=a.state.advanced;t.author=e.target.checked,a.setState({advanced:t})},a.onClickEnableHideContent=function(e){var t=a.state.advanced;t.hideContent=e.target.checked,a.setState({advanced:t})},a.onClickEnableShareOptions=function(e){var t=a.state.advanced;t.shareOptions=e.target.checked,a.setState({advanced:t})},a.onClickEnableSocialActions=function(e){var t=a.state.advanced;t.socialActions=e.target.checked,a.setState({advanced:t})},a.onClickEnableCustomCss=function(e){var t=a.state.customCss;t.cssStatus=e.target.checked,a.setState({customCss:t})},a.onChangeCss=function(e){var t=a.state.customCss;t.css=e.target.value,a.setState({customCss:t})},a.onClickEnableSuffleAssets=function(e){var t=a.state.themeSettings;t.suffleAssets=e.target.checked,a.setState({themeSettings:t})},a.onClickHideTextTypeAssets=function(e){var t=a.state.themeSettings;t.hideTextTypeAssets=e.target.checked,a.setState({themeSettings:t})},a.onClickShowMore=function(e){var t=a.state.themeSettings;t.showmore=e.target.checked,a.setState({themeSettings:t})},a.onClickAutoLoad=function(e){var t=a.state.themeSettings;t.autoLoad=e.target.checked,a.setState({themeSettings:t})},a.onClickTrimContent=function(e){var t=a.state.themeSettings;t.trimContent=e.target.checked,a.setState({themeSettings:t})},a.onClickBestFit=function(e){var t=a.state.themeSettings;t.bestFit=e.target.checked,a.setState({themeSettings:t})},a.onClickHideOldAssets=function(e){var t=a.state.themeSettings;t.hideOldAssets.status=e.target.checked,a.setState({themeSettings:t})},a.onNumberOfPosts=function(e){var t=a.state.themeSettings;t.numberOfPosts=e.target.value,a.setState({themeSettings:t})},a.onPostPadding=function(e){var t=a.state.themeSettings;t.postPadding=e.target.value,a.setState({themeSettings:t})},a.onMinPostWitdh=function(e){var t=a.state.themeSettings;t.minPostWitdh=e.target.value,a.setState({themeSettings:t})},a.onSelectPostPopUp=function(e){var t=a.state.themeSettings;t.postPopUp=e,a.setState({themeSettings:t})},a.onPopUpUrl=function(e){var t=a.state.themeSettings;t.popUpUrl=e.target.value,a.setState({themeSettings:t})},a.onChangeCardColor=function(e){var t=a.state.cardStyle;t.cardColor=e,a.setState({cardStyle:t})},a.onCardBorderRadius=function(e){var t=a.state.cardStyle;t.borderRadius=e.target.value,a.setState({cardStyle:t})},a.onCardFontFamily=function(e){var t=a.state.cardStyle;t.fontFamily=e.target.value,a.setState({cardStyle:t})},a.onCardFontVarient=function(e){var t=a.state.cardStyle;t.fontVarient=e.target.value,a.setState({cardStyle:t})},a.onCardFontSize=function(e){var t=a.state.cardStyle;t.fontSize=e.target.value,a.setState({cardStyle:t})},a.onCardTextColor=function(e){var t=a.state.cardStyle;t.textColor=e,a.setState({cardStyle:t})},a.onCardAuthorColor=function(e){var t=a.state.cardStyle;t.authorColor=e,a.setState({cardStyle:t})},a.onCardSocialColor=function(e){var t=a.state.cardStyle;t.socialIconColor=e,a.setState({cardStyle:t})},a.onOnSiteBgColor=function(e){var t=a.state.onSiteUpload;t.bgColor=e,a.setState({onSiteUpload:t})},a.onOnSiteBorderRadius=function(e){var t=a.state.onSiteUpload;t.borderRadius=e.target.value,a.setState({onSiteUpload:t})},a.onOnSiteFontFamily=function(e){var t=a.state.onSiteUpload;t.fontFamily=e.target.value,a.setState({onSiteUpload:t})},a.onOnSiteFontVarient=function(e){var t=a.state.onSiteUpload;t.fontVarient=e.target.value,a.setState({onSiteUpload:t})},a.onOnSiteFontSize=function(e){var t=a.state.onSiteUpload;t.fontSize=e.target.value,a.setState({onSiteUpload:t})},a.onOnSiteTextColor=function(e){var t=a.state.onSiteUpload;t.textColor=e,a.setState({onSiteUpload:t})},a.onOnSiteButtonText=function(e){var t=a.state.onSiteUpload;t.buttonText=e.target.value,a.setState({onSiteUpload:t})},a.onOnSiteButtonStatus=function(e){var t=a.state.onSiteUpload;t.buttonStatus=e.target.checked,a.setState({onSiteUpload:t})},a.onOnSiteQrCodeStatus=function(e){var t=a.state.onSiteUpload;t.qrCodeStatus=e.target.checked,a.setState({onSiteUpload:t})};var o=e.selectedThemeData.themeDefaultOption;return console.log("selectedTheme",o),a.state={background:{status:!1,color:o.backgroundColor?o.backgroundColor:"#fff",image:null,transparent:1==o.transparent?1:0,backgroundImageId:0},cardStyle:{cardColor:o.cardColor?o.cardColor:"#000000",borderRadius:10,fontFamily:null,fontVarient:null,fontSize:o.fontSize?o.fontSize:15,textColor:o.fontColor?o.fontColor:"#fff",authorColor:o.authorColor?o.authorColor:"#fff",socialIconColor:o.iconColor?o.iconColor:"#fff"},advanced:{time:!1,author:!1,hideContent:1==o.hideContent,shareOptions:1==o.shareOption,socialActions:!1},onSiteUpload:{bgColor:"#fff",borderRadius:0,fontFamily:null,fontVarient:null,fontSize:10,textColor:"#fff",buttonText:"Scan QR or Tap here to upload UGC",buttonStatus:!1,qrCodeStatus:!1},themeSettings:{suffleAssets:!1,showmore:!1,autoLoad:!1,trimContent:!1,bestFit:!1,hideOldAssets:{status:!1,range:null},postPopUp:null,popUpUrl:null,numberOfPosts:o.numberOfPosts?o.numberOfPosts:20,columns:o.numberOfCoumn?o.numberOfCoumn:0,postPadding:15,hideTextTypeAssets:!1,minPostWitdh:300,playFullVideo:!1,hideUrls:!1,timePerSlide:0,scrollSpeed:0,popUpduration:o.slideDuration},customCss:{cssStatus:!1,css:""}},e.tempFormData(a.state),a}return(0,a.Z)(s,[{key:"componentDidUpdate",value:function(e,t){t!=this.state&&this.props.tempFormData(this.state)}},{key:"render",value:function(){var e=this.props,t=(e.selectedThemeData,e.fonts),s=this.state,n=s.background,a=s.cardStyle,o=s.advanced,l=s.onSiteUpload,i=(s.buttonStatus,s.themeSettings),b=s.customCss;s.backgroundModal;return(0,p.jsxs)(r.Z,{defaultActiveKey:"1",children:[(0,p.jsx)(f,{onClickEnableBackground:this.onClickEnableBackground,onClickBackgroundColor:this.onClickBackgroundColor,background:n,onClickTouploadImage:this.onClickTouploadImage,backgroundImageRemove:this.backgroundImageRemove}),(0,p.jsx)(v,{cardStyle:a,onChangeCardColor:this.onChangeCardColor,onCardBorderRadius:this.onCardBorderRadius,onCardFontSize:this.onCardFontSize,fonts:t}),(0,p.jsxs)(r.Z.Item,{eventKey:"4",className:"pb-3",children:[(0,p.jsx)(r.Z.Header,{className:"w-100",children:(0,p.jsx)("span",{className:"fs-9 fw-medium",children:"Advanced"})}),(0,p.jsxs)(r.Z.Body,{className:"border rounded-1 mt-1 p-2",children:[(0,p.jsxs)("label",{className:"form-check form-switch py-2 align-items-center justify-content-between border-bottom h-40px py-1",children:[(0,p.jsx)("span",{className:"form-check-label ps-0 fs-9 fw-medium text-gray-800",children:"Time"}),(0,p.jsx)("input",{className:"form-check-input",type:"checkbox",name:"shareIcons",value:o.time,onChange:this.onClickEnableTime})]}),(0,p.jsxs)("label",{className:"form-check form-switch py-2 align-items-center justify-content-between border-bottom h-40px py-1",children:[(0,p.jsx)("span",{className:"form-check-label ps-0 fs-9 fw-medium text-gray-800",children:"Author Details"}),(0,p.jsx)("input",{className:"form-check-input",type:"checkbox",name:"shareIcons",value:o.author,onChange:this.onClickEnableAuthor})]}),(0,p.jsxs)("label",{className:"form-check form-switch py-2 align-items-center justify-content-between border-bottom h-40px py-1",children:[(0,p.jsx)("span",{className:"form-check-label ps-0 fs-9 fw-medium text-gray-800",children:"Share Options"}),(0,p.jsx)("input",{className:"form-check-input",type:"checkbox",name:"shareIcons",value:o.shareOptions,onChange:this.onClickEnableShareOptions})]}),(0,p.jsxs)("label",{className:"form-check form-switch py-2 align-items-center justify-content-between border-bottom h-40px py-1",children:[(0,p.jsx)("span",{className:"form-check-label ps-0 fs-9 fw-medium text-gray-800",children:"Social Actions"}),(0,p.jsx)("input",{className:"form-check-input",type:"checkbox",name:"shareIcons",value:o.socialActions,onChange:this.onClickEnableSocialActions})]}),(0,p.jsxs)("label",{className:"form-check form-switch py-2 align-items-center justify-content-between h-40px py-1",children:[(0,p.jsx)("span",{className:"form-check-label ps-0 fs-9 fw-medium text-gray-800",children:"Hide Content"}),(0,p.jsx)("input",{className:"form-check-input",type:"checkbox",name:"shareIcons",value:o.hideContent,onChange:this.onClickEnableHideContent})]})]})]}),(0,p.jsx)(g,{onSiteUpload:l,onOnSiteBgColor:this.onOnSiteBgColor,onOnSiteBorderRadius:this.onOnSiteBorderRadius,onOnSiteFontSize:this.onOnSiteFontSize,onOnSiteTextColor:this.onOnSiteTextColor,onOnSiteButtonText:this.onOnSiteButtonText,onOnSiteButtonStatus:this.onOnSiteButtonStatus,onOnSiteQrCodeStatus:this.onOnSiteQrCodeStatus}),(0,p.jsxs)(r.Z.Item,{eventKey:"6",className:"pb-3",children:[(0,p.jsx)(r.Z.Header,{className:"w-100",children:(0,p.jsx)("span",{className:"fs-9 fw-medium",children:"Theme Settings"})}),(0,p.jsxs)(r.Z.Body,{className:"border rounded-1 mt-1 p-2",children:[(0,p.jsxs)("label",{className:"form-check form-switch py-2 align-items-center justify-content-between border-bottom h-40px py-1",children:[(0,p.jsxs)("span",{className:"form-check-label ps-0 fs-9 fw-medium text-gray-800 d-flex",children:["Suffle Assets",(0,p.jsx)(d.Z,{placement:"top",overlay:(0,p.jsx)(h.Z,{id:"button-tooltip-2",children:"Shuffles your assets in random order irrespective of date/time."}),children:(0,p.jsx)("span",{className:"svg-icon svg-icon-6 ms-1",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,p.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,p.jsx)("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z",fill:"currentColor"})]})})})]}),(0,p.jsx)("input",{className:"form-check-input",type:"checkbox",name:"shareIcons",checked:i.suffleAssets,onClick:this.onClickEnableSuffleAssets})]}),(0,p.jsxs)("label",{className:"form-check form-switch py-2 align-items-center justify-content-between border-bottom h-40px py-1",children:[(0,p.jsxs)("span",{className:"form-check-label ps-0 fs-9 fw-medium text-gray-800 d-flex",children:["Show More' Button",(0,p.jsx)(d.Z,{placement:"top",overlay:(0,p.jsx)(h.Z,{id:"button-tooltip-2",children:"Show/Hide the 'Show more' button?."}),children:(0,p.jsx)("span",{className:"svg-icon svg-icon-6 ms-1",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,p.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,p.jsx)("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z",fill:"currentColor"})]})})})]}),(0,p.jsx)("input",{className:"form-check-input",type:"checkbox",name:"shareIcons",checked:i.showmore,onClick:this.onClickShowMore})]}),(0,p.jsxs)("label",{className:"form-check form-switch py-2 align-items-center justify-content-between border-bottom h-40px py-1",children:[(0,p.jsxs)("span",{className:"form-check-label ps-0 fs-9 fw-medium text-gray-800 d-flex",children:["Auto Load",(0,p.jsx)(d.Z,{placement:"top",overlay:(0,p.jsx)(h.Z,{id:"button-tooltip-2",children:"Auto Load button?."}),children:(0,p.jsx)("span",{className:"svg-icon svg-icon-6 ms-1",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,p.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,p.jsx)("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z",fill:"currentColor"})]})})})]}),(0,p.jsx)("input",{className:"form-check-input",type:"checkbox",name:"shareIcons",checked:i.autoLoad,onClick:this.onClickAutoLoad})]}),(0,p.jsxs)("label",{className:"form-check form-switch py-2 align-items-center justify-content-between border-bottom h-40px py-1",children:[(0,p.jsxs)("span",{className:"form-check-label ps-0 fs-9 fw-medium text-gray-800 d-flex",children:["Hide Text Type Assets",(0,p.jsx)(d.Z,{placement:"top",overlay:(0,p.jsx)(h.Z,{id:"button-tooltip-2",children:"Hides assets which are only texts with no media."}),children:(0,p.jsx)("span",{className:"svg-icon svg-icon-6 ms-1",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,p.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,p.jsx)("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z",fill:"currentColor"})]})})})]}),(0,p.jsx)("input",{className:"form-check-input",type:"checkbox",name:"shareIcons",checked:i.hideTextTypeAssets,onClick:this.onClickHideTextTypeAssets})]}),(0,p.jsxs)("label",{className:"form-check form-switch py-2 align-items-center justify-content-between border-bottom h-40px py-1",children:[(0,p.jsxs)("span",{className:"form-check-label ps-0 fs-9 fw-medium text-gray-800 d-flex",children:["Trim Content",(0,p.jsx)(d.Z,{placement:"top",overlay:(0,p.jsx)(h.Z,{id:"button-tooltip-2",children:"It will trim assets text after a limit."}),children:(0,p.jsx)("span",{className:"svg-icon svg-icon-6 ms-1",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,p.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,p.jsx)("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z",fill:"currentColor"})]})})})]}),(0,p.jsx)("input",{className:"form-check-input",type:"checkbox",name:"shareIcons",checked:i.trimContent,onClick:this.onClickTrimContent})]}),(0,p.jsxs)("div",{className:"border-bottom",children:[(0,p.jsxs)("label",{className:"form-check form-switch py-2 align-items-center justify-content-between h-40px py-1",children:[(0,p.jsxs)("span",{className:"form-check-label ps-0 fs-9 fw-medium text-gray-800 d-flex",children:["Hide Old Assets",(0,p.jsx)(d.Z,{placement:"top",overlay:(0,p.jsx)(h.Z,{id:"button-tooltip-2",children:"Hides old assets on your live wall."}),children:(0,p.jsx)("span",{className:"svg-icon svg-icon-6 ms-1",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,p.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,p.jsx)("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z",fill:"currentColor"})]})})})]}),(0,p.jsx)("input",{className:"form-check-input",type:"checkbox",name:"shareIcons",checked:i.hideOldAssets.status,onClick:this.onClickHideOldAssets})]}),(0,p.jsx)("div",{className:"w-100 mb-2",children:(0,p.jsxs)("select",{className:"form-control form-control-sm w-100",children:[(0,p.jsx)("option",{defaultValue:!0,children:"One Day Ago"}),(0,p.jsx)("option",{value:"1",children:"Two Days Ago"}),(0,p.jsx)("option",{value:"2",children:"Three Days Ago"}),(0,p.jsx)("option",{value:"3",children:"Four Days Ago"}),(0,p.jsx)("option",{value:"4",children:"Five Days Ago"}),(0,p.jsx)("option",{value:"5",children:"Six Days Ago"}),(0,p.jsx)("option",{value:"6",children:"Seven Days Ago"}),(0,p.jsx)("option",{value:"7",children:"One Month"}),(0,p.jsx)("option",{value:"8",children:"Custom Date"})]})}),(0,p.jsx)("div",{className:"w-100 mb-2",children:(0,p.jsx)(u.f,{className:"app_calendar",date:new Date,onChange:this.handleSelect,color:"#313A53"})})]}),(0,p.jsxs)("div",{className:"border-bottom",children:[(0,p.jsx)("label",{className:"form-check form-switch py-2 align-items-center justify-content-between h-40px py-1",children:(0,p.jsxs)("span",{className:"form-check-label ps-0 fs-9 fw-medium text-gray-800 d-flex",children:["On Click",(0,p.jsx)(d.Z,{placement:"top",overlay:(0,p.jsx)(h.Z,{id:"button-tooltip-2",children:"Choose action on click"}),children:(0,p.jsx)("span",{className:"svg-icon svg-icon-6 ms-1",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,p.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,p.jsx)("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z",fill:"currentColor"})]})})})]})}),(0,p.jsx)("div",{className:"w-100 mb-2",children:(0,p.jsx)(c.ZP,{className:"selectpicker selectpicker-sm w-100",classNamePrefix:"selectpicker",value:i.postPopUp,options:m.bR,onChange:this.onSelectPostPopUp})}),i.postPopUp&&Object.keys(i.postPopUp).length>0&&3==i.postPopUp.value?(0,p.jsx)("div",{className:"w-100 mb-2",children:(0,p.jsx)("input",{type:"url",name:"onClickLink",className:"form-control form-control-sm",placeholder:"Enter url...",value:i.popUpUrl,onChange:this.onPopUpUrl})}):null]}),(0,p.jsxs)("div",{className:"border-bottom",children:[(0,p.jsx)("label",{className:"form-check form-switch py-2 align-items-center justify-content-between h-40px py-1",children:(0,p.jsxs)("span",{className:"form-check-label ps-0 fs-9 fw-medium text-gray-800 d-flex",children:["Total Number of Assets to Display",(0,p.jsx)(d.Z,{placement:"top",overlay:(0,p.jsx)(h.Z,{id:"button-tooltip-2",children:"Maximum no. of assets to be displayed on live wall."}),children:(0,p.jsx)("span",{className:"svg-icon svg-icon-6 ms-1",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,p.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,p.jsx)("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z",fill:"currentColor"})]})})})]})}),(0,p.jsx)("div",{className:"w-100 mb-2",children:(0,p.jsx)("input",{type:"number",name:"assetsCount",className:"form-control form-control-sm",placeholder:"",value:i.numberOfPosts,defaultValue:i.numberOfPosts,onChange:this.onNumberOfPosts})})]}),(0,p.jsxs)("div",{className:"d-flex align-items-stretch flex-column justify-content-between border-bottom py-1",children:[(0,p.jsx)("div",{className:"",children:(0,p.jsx)("p",{className:"my-2",children:(0,p.jsx)("span",{className:"fs-9 fw-medium",children:"Minimum Asset Width"})})}),(0,p.jsxs)("div",{className:"d-flex align-items-center w-100 mb-1",children:[(0,p.jsx)("div",{className:"d-flex flex-grow-1 pe-3",children:(0,p.jsx)("div",{className:"form-group pt-1 w-100",children:(0,p.jsx)("input",{type:"range",className:"form-range",min:"0",max:"10",step:"0.1",id:"formControlRange",value:i.minPostWitdh,defaultValue:i.minPostWitdh,onChange:this.onMinPostWitdh})})}),(0,p.jsxs)("div",{className:"d-flex align-items-center",children:[(0,p.jsx)("div",{className:"form-group me-1",children:(0,p.jsx)("input",{type:"number",className:"form-control form-control-sm w-54px",id:"fontSize",value:i.minPostWitdh,defaultValue:i.minPostWitdh,onChange:this.onMinPostWitdh})}),"px"]})]})]}),(0,p.jsxs)("div",{className:"d-flex align-items-stretch flex-column justify-content-between border-bottom py-1",children:[(0,p.jsx)("div",{className:"",children:(0,p.jsx)("p",{className:"my-2",children:(0,p.jsx)("span",{className:"fs-9 fw-medium",children:"Post Spacing"})})}),(0,p.jsxs)("div",{className:"d-flex align-items-center w-100 mb-1",children:[(0,p.jsx)("div",{className:"d-flex flex-grow-1 pe-3",children:(0,p.jsx)("div",{className:"form-group pt-1 w-100",children:(0,p.jsx)("input",{type:"range",className:"form-range",min:"0",max:"30",step:"1",value:i.postPadding,defaultValue:i.postPadding,id:"formControlRange",onChange:this.onPostPadding})})}),(0,p.jsxs)("div",{className:"d-flex align-items-center",children:[(0,p.jsx)("div",{className:"form-group me-1",children:(0,p.jsx)("input",{type:"number",className:"form-control form-control-sm w-54px",id:"fontSize",value:i.postPadding,defaultValue:i.postPadding,onChange:this.onPostPadding})}),"px"]})]})]})]})]}),(0,p.jsx)(x,{customCss:b,onClickEnableCustomCss:this.onClickEnableCustomCss,onChangeCss:this.onChangeCss})]})}}]),s}(i.Component);t.default=b},93255:function(e,t,s){s.d(t,{E0:function(){return a},_1:function(){return o},bR:function(){return n}});var n=[{label:"Do Nothing",value:0},{label:"Open pop-up",value:1},{label:"Go to source",value:2},{label:"Custom Url",value:3}],a=[{label:"Responsive",value:0},{label:"1 Column",value:1},{label:"2 Columns",value:2},{label:"3 Columns",value:3},{label:"4 Columns",value:4},{label:"5 Columns",value:5}],o=[{label:"One Day Ago",value:1},{label:"Two Days Ago",value:2},{label:"Three Days Ago",value:3},{label:"Four Days Ago",value:4},{label:"Five Days Ago",value:5},{label:"Six Days Ago",value:6},{label:"Seven Days Ago",value:7},{label:"One Month",value:30},{label:"Custom Select",value:8}]}}]);
//# sourceMappingURL=8059.57057a2b.chunk.js.map