"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[1732],{61732:function(e,s,t){t.r(s);var a=t(15671),n=t(43144),l=t(60136),r=t(29388),c=t(72791),i=t(95316),d=t(72426),o=t.n(d),x=t(23794),p=t(56600),m=t(80184),h=function(e){(0,l.Z)(t,e);var s=(0,r.Z)(t);function t(e){var n;return(0,a.Z)(this,t),(n=s.call(this,e)).handleClose=function(){n.props.viewInvoiceCallback(!1)},n.state={},n}return(0,n.Z)(t,[{key:"render",value:function(){var e=this.props,s=e.modalToggle,t=e.viewInvoiceData,a=e.clickToInvoiceDownload,n=e.printInvoice,l=e.invoiceDownloadRequest,r=e.invoicePrintRequest;return(0,m.jsxs)(i.Z,{show:s,onHide:this.handleClose,"aria-labelledby":"contained-modal-title-vcenter",size:"xl",centered:!0,children:[(0,m.jsx)(i.Z.Header,{closeButton:!0,children:(0,m.jsx)(i.Z.Title,{children:"Invoice"})}),(0,m.jsx)(i.Z.Body,{className:"p-0",children:(0,m.jsxs)("div",{className:"container",id:"printInvoice",children:[(0,m.jsx)("div",{className:"row justify-content-center py-2 py-xl-3",children:(0,m.jsxs)("div",{className:"col-xl-9",children:[(0,m.jsxs)("div",{className:"d-flex justify-content-between pb-3 pb-lg-4 flex-column flex-md-row",children:[(0,m.jsx)("span",{className:"logo_full_ my-2 w-50",style:{maxWidth:200},children:(0,m.jsx)(x.Z,{src:(0,p.F)("media/icons/logo/suite-logo.svg"),height:34,width:200})}),(0,m.jsx)("div",{className:"d-flex flex-column align-items-md-end px-0 my-2",children:(0,m.jsxs)("span",{className:"d-flex flex-column align-items-md-end text-gray-500 fw-medium",children:[(0,m.jsx)("span",{className:"mb-1",children:"Social Scape Tech LLP, C-2, Panchsheel Colony"}),(0,m.jsx)("span",{children:"305004 Jaipur, Rajasthan India"})]})})]}),(0,m.jsx)("div",{className:"border-bottom w-100"}),(0,m.jsxs)("div",{className:"d-flex justify-content-between pt-3 pt-lg-4",children:[(0,m.jsxs)("div",{className:"d-flex flex-column flex-root",children:[(0,m.jsx)("span",{className:"fw-bolder mb-2 text-uppercase",children:"Date"}),(0,m.jsx)("span",{className:"text-gray-500 fw-medium",children:o()(t.invoiceDate).format("MMM DD , YYYY")})]}),(0,m.jsxs)("div",{className:"d-flex flex-column flex-root",children:[(0,m.jsx)("span",{className:"fw-bolder mb-2 text-uppercase",children:"Invoice No."}),(0,m.jsx)("span",{className:"text-gray-500 fw-medium",children:t.invoiceView.invoiceId})]}),(0,m.jsxs)("div",{className:"d-flex flex-column flex-root",children:[(0,m.jsx)("span",{className:"fw-bolder mb-2 text-uppercase",children:"Invoice To"}),(0,m.jsx)("span",{className:"text-gray-500 fw-medium",children:t.invoiceView.customerName}),(0,m.jsxs)("span",{className:"text-gray-500 fw-medium",children:[t.invoiceView.address1Value,",",t.invoiceView.address2Value]})]})]})]})}),(0,m.jsx)("div",{className:"row justify-content-center py-3 py-xl-4",children:(0,m.jsx)("div",{className:"col-xl-9",children:(0,m.jsx)("div",{className:"table-responsive",children:(0,m.jsxs)("table",{className:"table table-borderless",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{className:"ps-0 fw-bold text-gray-500 text-uppercase border-start-0 py-2 border-bottom text-nowrap",children:"Description"}),(0,m.jsx)("th",{className:"text-end pe-0 fw-bold text-gray-500 text-uppercase border-end-0 border-bottom py-2 text-nowrap",style:{width:120},children:"Amount"})]})}),(0,m.jsxs)("tbody",{children:[(0,m.jsxs)("tr",{className:"fw-bolder",children:[(0,m.jsxs)("td",{className:"ps-0 py-2 text-nowrap border-start-0",children:[t.plan," ",(0,m.jsxs)("span",{className:"text-gray-500 fw-medium",children:["(Expire on ",o()(t.invoiceView.invoiceDueDate).format("MMM DD , YYYY"),")"]})]}),(0,m.jsxs)("td",{className:"text-dark pe-0 py-2 text-end text-nowrap border-end-0",style:{maxWidth:100},children:[t.invoiceView.currencyValue,t.invoiceView.amount]})]}),(0,m.jsxs)("tr",{className:"fw-bolder border-bottom-0",children:[(0,m.jsx)("td",{className:"border-top-0 ps-0 py-2 text-nowrap text-end border-start-0",children:"18.00% IGST"}),(0,m.jsxs)("td",{className:"text-dark border-top-0 pe-0 py-2 text-end text-nowrap border-end-0",style:{width:120},children:[t.invoiceView.currencyValue,t.gstAmount]})]}),(0,m.jsxs)("tr",{className:"fw-bolder border-bottom-0",children:[(0,m.jsx)("td",{className:"border-top-0 ps-0 py-2 text-nowrap text-end border-start-0",children:"Total"}),(0,m.jsxs)("td",{className:"text-dark border-top-0 pe-0 py-2 text-end text-nowrap border-end-0",style:{width:120},children:[t.invoiceView.currencyValue,t.amount]})]})]})]})})})}),(0,m.jsx)("div",{className:"w-100",children:(0,m.jsx)("div",{className:"row bg-light justify-content-center py-2 py-xl-3",children:(0,m.jsx)("div",{className:"col-xl-9",children:(0,m.jsx)("div",{className:"table-responsive",children:(0,m.jsxs)("table",{className:"table table-borderless",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{className:"ps-0 fw-bold text-gray-500 text-uppercase border-bottom py-2 text-nowrap",children:"Transaction Date"}),(0,m.jsx)("th",{className:"text-end fw-bold text-gray-500 text-uppercase border-bottom py-2 text-nowrap",children:"Gatway"}),(0,m.jsx)("th",{className:"text-end fw-bold text-gray-500 text-uppercase border-bottom py-2 text-nowrap",children:"Transaction ID"}),(0,m.jsx)("th",{className:"text-end pe-0 fw-bold text-gray-500 text-uppercase border-bottom py-2 text-nowrap",children:"Total Amount"})]})}),(0,m.jsx)("tbody",{children:(0,m.jsxs)("tr",{className:"fw-bolder",children:[(0,m.jsx)("td",{className:"ps-0 py-3 text-nowrap",children:o()(t.invoiceDate).format("MMM DD , YYYY")}),(0,m.jsx)("td",{className:"text-end py-3 text-nowrap",children:1==t.source?"Stripe":0==t.source?"2Checkout":""}),(0,m.jsx)("td",{className:"text-end py-3 text-nowrap",children:t.invoiceView.invoiceId}),(0,m.jsxs)("td",{className:"text-dark pe-0 py-3 text-end text-nowrap",children:[t.invoiceView.currencyValue,t.amount]})]})})]})})})})}),(0,m.jsx)("div",{className:"row justify-content-center py-4 py-xl-5",children:(0,m.jsx)("div",{className:"col-xl-9",children:(0,m.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,m.jsx)("button",{type:"button",className:"btn btn-secondary ".concat(l?"spinner":""),onClick:a(t.invoiceId),children:"Download Invoice"}),(0,m.jsx)("button",{type:"button",className:"btn btn-primary ".concat(r?"spinner":""),onClick:n(t.invoiceId),children:"Print Invoice"})]})})})]})})]})}}]),t}(c.Component);s.default=h}}]);
//# sourceMappingURL=1732.0f6fa5e0.chunk.js.map