"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[6903,650],{30650:function(e,s,l){l.r(s);var a=l(15671),n=l(43144),o=l(60136),r=l(29388),t=l(72791),i=l(54093),c=l(63108),d=l(80184),m=function(e){(0,o.Z)(l,e);var s=(0,r.Z)(l);function l(e){var n;return(0,a.Z)(this,l),(n=s.call(this,e)).handleClick=function(){n.setState({displayColorPicker:!n.state.displayColorPicker})},n.handleClose=function(){n.setState({displayColorPicker:!1})},n.handleChange=function(e){n.setState({color:e.hex},(function(){return n.props.onChangeColor(n.state.color)}))},n.state={displayColorPicker:!1,color:e.color?e.color:"#fff"},n}return(0,n.Z)(l,[{key:"componentWillReceiveProps",value:function(e){this.state.color!=e.color&&this.setState({color:e.color})}},{key:"render",value:function(){var e=(0,i.ZP)({default:{color:{background:this.state.color},swatch:{padding:"5px",background:"#fff",borderRadius:"1px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:"999",top:"100%",right:0},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}}});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"colorPickerWrapper",onClick:this.handleClick,children:(0,d.jsx)("div",{className:"colorPicker",style:e.color})}),this.state.displayColorPicker?(0,d.jsxs)("div",{style:e.popover,children:[(0,d.jsx)("div",{style:e.cover,onClick:this.handleClose}),(0,d.jsx)(c.AI,{color:this.state.color,onChange:this.handleChange})]}):null]})}}]),l}(t.Component);s.default=m},96903:function(e,s,l){l.r(s);var a=l(1413),n=l(15671),o=l(43144),r=l(60136),t=l(29388),i=l(72791),c=l(18622),d=l(28949),m=l(30650),f=l(80184),x=function(e,s){var l=[];return s.map((function(s){l.push({label:(0,f.jsx)("span",{style:{fontFamily:"".concat(e)},className:"sGFfonte-".concat(s||""),children:s},e),value:s})})),l},h=function(e){(0,r.Z)(l,e);var s=(0,t.Z)(l);function l(){return(0,n.Z)(this,l),s.apply(this,arguments)}return(0,o.Z)(l,[{key:"render",value:function(){var e=this.props,s=e.cardStyle,l=e.onChangeCardColor,n=e.onCardBorderRadius,o=e.onCardFontSize,r=e.fonts,t=e.onCardFontFamily,i=e.onCardFontVarient,h=e.onCardTextColor,u=e.onCardAuthorColor,p=e.onCardSocialColor,j=e.onClickIconType,y=r.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{value:e.family})}));return(0,f.jsxs)(d.Z.Item,{eventKey:"3",className:"pb-3",children:[(0,f.jsx)(d.Z.Header,{className:"w-100",children:(0,f.jsx)("span",{className:"fs-9 fw-medium",children:"Design & Appearance"})}),(0,f.jsxs)(d.Z.Body,{className:"border rounded-1 mt-1 p-2",children:[(0,f.jsxs)("label",{className:"d-flex align-items-center justify-content-between border-bottom h-40px py-1 position-relative",children:[(0,f.jsx)("span",{className:"ms-0 fs-9 fw-medium",children:"Card Color"}),(0,f.jsx)(m.default,{color:s.cardColor,onChangeColor:l})]}),(0,f.jsxs)("div",{className:"d-flex align-items-stretch flex-column justify-content-between border-bottom py-1",children:[(0,f.jsx)("div",{className:"",children:(0,f.jsx)("p",{className:"my-2",children:(0,f.jsx)("span",{className:"fs-9 fw-medium",children:"Border Radius"})})}),(0,f.jsxs)("div",{className:"d-flex align-items-center w-100 mb-1",children:[(0,f.jsx)("div",{className:"d-flex flex-grow-1 pe-3",children:(0,f.jsx)("div",{className:"form-group pt-1 w-100",children:(0,f.jsx)("input",{type:"range",className:"form-range",min:"0",max:"30",step:"1",defaultValue:s.borderRadius,value:s.borderRadius,id:"formControlRange",onChange:n})})}),(0,f.jsxs)("div",{className:"d-flex align-items-center",children:[(0,f.jsx)("div",{className:"form-group me-1",children:(0,f.jsx)("input",{type:"number",className:"form-control form-control-sm w-54px",id:"fontSize",min:"0",max:"30",defaultValue:s.borderRadius,value:s.borderRadius,onChange:n})}),"px"]})]})]}),(0,f.jsx)("div",{className:"",children:(0,f.jsx)("p",{className:"mt-3 mb-0",children:(0,f.jsx)("strong",{className:"fs-7 text-gray-800",children:"General Style"})})}),(0,f.jsxs)("div",{className:"d-flex align-items-stretch flex-column justify-content-between border-bottom py-1",children:[(0,f.jsx)("div",{className:"",children:(0,f.jsx)("p",{className:"my-2",children:(0,f.jsx)("span",{className:"fs-9 fw-medium",children:"Font Family"})})}),(0,f.jsx)("div",{className:"w-100 mb-2",children:r&&r.length>0?(0,f.jsx)(c.ZP,{className:"selectpicker selectpicker-sm font_family_dd w-100",classNamePrefix:"selectpicker",value:s.fontFamily,options:y,onChange:t},s.fontFamily):null}),s.fontFamily&&s.fontFamily.variants&&s.fontFamily.variants.length>0?(0,f.jsx)("div",{className:"w-100 mb-2",children:(0,f.jsxs)("div",{className:"row gx-1",children:[(0,f.jsx)("div",{className:"col-5",children:(0,f.jsx)("p",{className:"my-2",children:(0,f.jsx)("span",{className:"fs-9 fw-medium",children:"Font Varient"})})}),(0,f.jsx)("div",{className:"col-7",children:(0,f.jsx)(c.ZP,{className:"selectpicker selectpicker-sm font_variant w-100",classNamePrefix:"selectpicker",value:s.fontVarient,options:x(s.fontFamily.family,s.fontFamily.variants),onChange:i},s.fontFamily)})]})}):null]}),(0,f.jsxs)("div",{className:"d-flex align-items-stretch flex-column justify-content-between border-bottom py-1",children:[(0,f.jsx)("div",{className:"",children:(0,f.jsx)("p",{className:"my-2",children:(0,f.jsx)("span",{className:"fs-9 fw-medium",children:"Font Size"})})}),(0,f.jsxs)("div",{className:"d-flex align-items-center w-100 mb-1",children:[(0,f.jsx)("div",{className:"d-flex flex-grow-1 pe-3",children:(0,f.jsx)("div",{className:"form-group pt-1 w-100",children:(0,f.jsx)("input",{type:"range",className:"form-range",min:"10",max:"30",step:"1",defaultValue:s.fontSize,value:s.fontSize,id:"formControlRange",onChange:o})})}),(0,f.jsxs)("div",{className:"d-flex align-items-center",children:[(0,f.jsx)("div",{className:"form-group me-1",children:(0,f.jsx)("input",{type:"number",className:"form-control form-control-sm w-54px",min:"10",max:"30",id:"fontSize",defaultValue:s.fontSize,value:s.fontSize,onChange:o})}),"px"]})]})]}),(0,f.jsxs)("label",{className:"d-flex align-items-center justify-content-between border-bottom h-40px py-1 position-relative",children:[(0,f.jsx)("span",{className:"ms-0 fs-9 fw-medium",children:"Text Color"}),(0,f.jsx)(m.default,{color:s.textColor,onChangeColor:h})]}),(0,f.jsx)("div",{className:"",children:(0,f.jsx)("p",{className:"mt-3 mb-0",children:(0,f.jsx)("strong",{className:"fs-7 text-gray-800",children:"Author Style"})})}),(0,f.jsxs)("label",{className:"d-flex align-items-center justify-content-between border-bottom h-40px py-1 position-relative",children:[(0,f.jsx)("span",{className:"ms-0 fs-9 fw-medium",children:"Author Color"}),(0,f.jsx)(m.default,{color:s.authorColor,onChangeColor:u})]}),(0,f.jsxs)("div",{className:"form-check form-switch py-2 align-items-center justify-content-between h-40px py-1 position-relative",children:[(0,f.jsxs)("label",{className:"d-flex align-items-center justify-content-between flex-grow-1",children:[(0,f.jsx)("span",{className:"form-check-label ps-0 fs-9 fw-medium text-gray-800 d-flex flex-grow-1",children:"Social Icon Color"}),(0,f.jsx)("input",{className:"form-check-input",type:"checkbox",name:"defaultIconStatus",checked:s.iconType,onChange:j})]}),s.iconType?(0,f.jsx)("span",{className:"ms-2",children:(0,f.jsx)(m.default,{color:s.socialIconColor,onChangeColor:p})}):null]})]})]})}}]),l}(i.Component);s.default=h}}]);
//# sourceMappingURL=6903.b6e2f7c2.chunk.js.map