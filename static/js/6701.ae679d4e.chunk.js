"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[6701],{96701:function(a,e,n){n.r(e),n.d(e,{default:function(){return g}});var i=n(15671),r=n(43144),s=n(60136),t=n(29388),l=n(47313),d=n(93298),c=n(4942),o=n(1413),u=n(45987),m=n(46123),f=n.n(m),v=n(68524),b=n(46682),x=n(46417),h=["min","now","max","label","visuallyHidden","striped","animated","className","style","variant","bsPrefix"],p=["isChild"],w=["min","now","max","label","visuallyHidden","striped","animated","bsPrefix","variant","className","children"];function Z(a,e,n){var i=(a-e)/(n-e)*100;return Math.round(1e3*i)/1e3}function y(a,e){var n,i=a.min,r=a.now,s=a.max,t=a.label,l=a.visuallyHidden,d=a.striped,m=a.animated,v=a.className,b=a.style,p=a.variant,w=a.bsPrefix,y=(0,u.Z)(a,h);return(0,x.jsx)("div",(0,o.Z)((0,o.Z)({ref:e},y),{},{role:"progressbar",className:f()(v,"".concat(w,"-bar"),(n={},(0,c.Z)(n,"bg-".concat(p),p),(0,c.Z)(n,"".concat(w,"-bar-animated"),m),(0,c.Z)(n,"".concat(w,"-bar-striped"),m||d),n)),style:(0,o.Z)({width:"".concat(Z(r,i,s),"%")},b),"aria-valuenow":r,"aria-valuemin":i,"aria-valuemax":s,children:l?(0,x.jsx)("span",{className:"visually-hidden",children:t}):t}))}var N=l.forwardRef((function(a,e){var n=a.isChild,i=(0,u.Z)(a,p);if(i.bsPrefix=(0,v.vE)(i.bsPrefix,"progress"),n)return y(i,e);var r=i.min,s=i.now,t=i.max,d=i.label,c=i.visuallyHidden,m=i.striped,h=i.animated,Z=i.bsPrefix,N=i.variant,j=i.className,P=i.children,g=(0,u.Z)(i,w);return(0,x.jsx)("div",(0,o.Z)((0,o.Z)({ref:e},g),{},{className:f()(j,Z),children:P?(0,b.UI)(P,(function(a){return(0,l.cloneElement)(a,{isChild:!0})})):y({min:r,now:s,max:t,label:d,visuallyHidden:c,striped:m,animated:h,bsPrefix:Z,variant:N},e)}))}));N.displayName="ProgressBar",N.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1};var j=N,P=function(a){(0,s.Z)(n,a);var e=(0,t.Z)(n);function n(){return(0,i.Z)(this,n),e.apply(this,arguments)}return(0,r.Z)(n,[{key:"render",value:function(){var a=this.props,e=a.title,n=a.min,i=a.max,r=0==i?0:n/i*100;return(0,x.jsxs)("div",{className:"mb-7",children:[(0,x.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,x.jsx)("p",{className:"mb-2 fw-medium",children:"".concat(0==i?"Unlimited ".concat(e):"".concat(n,"/").concat(i," ").concat(e))}),r>=80?(0,x.jsx)(d.Z,{variant:"link",size:"sm",className:"text-danger p-0 mb-2 fw-bold",onClick:window.Intercom?function(a){window.Intercom("show")}:function(){},children:"Upgrade : Talk to Sales"}):null]}),(0,x.jsx)(j,{now:r})]})}}]),n}(l.Component),g=P}}]);