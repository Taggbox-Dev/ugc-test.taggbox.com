"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[9012],{79012:function(e,t,n){n.r(t);var r=n(15671),c=n(43144),o=n(60136),i=n(29388),a=n(72791),s=n(89743),l=n(2677),u=n(78687),d=n(94111),p=n(21830),f=n.n(p),h=n(80184),x=function(e){(0,o.Z)(n,e);var t=(0,i.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).onHideDuplicate=function(t){return e.props.hideDuplicateFilter()},e.selectAction=function(){var t=e.props,n=t.isCollection,r=t.collectionId,c=t.history,o=t.userData;144127==o.user.id||""!=o.collaborator&&144127==o.collaborator.activeAccount?e.customUserError():c("/rule/add?duplicate=true".concat(n?"&collectionId=".concat(r):""))},e.customUserError=function(){f().fire({title:"Oops!",text:"You do not have access to this feature. Please contact your account manager to get access.",icon:"error"})},e}return(0,c.Z)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.count,r=(t.isCollection,t.collectionId,t.assets);t.history;return n&&parseInt(n)>0?(0,h.jsx)(s.Z,{children:(0,h.jsx)(l.Z,{children:(0,h.jsx)("div",{className:"d-flex alert alert-danger py-3",children:(0,h.jsx)("div",{className:"d-flex flex-column flex-stack flex-grow-1",children:(0,h.jsxs)("p",{className:"mb-0 text-gray-800 text-center fs-7",children:[n," Duplicate images detected. To clear them out click on ",r.filterBody.hideDuplicate?(0,h.jsx)("span",{onClick:function(){return e.selectAction()},className:"fw-bold text-link text-danger text-decoration-none cursor-pointer",children:"'Action'"}):(0,h.jsx)("span",{className:"fw-bold text-link text-danger text-decoration-none cursor-pointer",onClick:this.onHideDuplicate,children:"'Review'"}),"  "]})})})})}):null}}]),n}(a.Component);t.default=(0,u.$j)((function(e){return{assets:e.assets,userData:e.authenticated.userData}}),(function(e){return{hideDuplicateFilter:function(){return e((0,d.h9)())}}}))(x)}}]);
//# sourceMappingURL=9012.a08b7787.chunk.js.map