"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[9523],{49523:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var i=t(15671),c=t(43144),o=t(97326),a=t(60136),s=t(29388),l=t(72791),r=t(62591),p=t(47798),u=t(12576),d=t(72426),v=t.n(d),h=t(64802),m=t(18439),w=t(8663),x=t(55294),f=function(e){return x.Z.get("".concat(w.hI,"/").concat(e),{responseType:"arraybuffer",headers:{Accept:"application/pdf"}})},g=t(27487),b=t(9085),j=t(80184),I=l.lazy((function(){return t.e(1732).then(t.bind(t,61732))})),y=l.lazy((function(){return t.e(4773).then(t.bind(t,54773))})),D=function(e){(0,a.Z)(t,e);var n=(0,s.Z)(t);function t(e){var c;return(0,i.Z)(this,t),(c=n.call(this,e)).state={viewInvoice:!1,viewInvoiceData:null,invoiceDownload:0,invoiceList:[],invoiceRequest:!0,invoiceDownloadRequest:!1,invoicePrintRequest:!1},c.viewInvoice=function(e){return function(n){c.setState({viewInvoice:!0,viewInvoiceData:e})}},c.viewInvoiceCallback=function(e){c.setState({viewInvoice:e,viewInvoiceData:null})},c.clickToInvoiceDownload=function(e){return function(n){c.setState({invoiceDownload:1});var t=(0,o.Z)(c);f(e).then((function(n){t.setState({invoiceDownload:2});var i=new Blob([n.data],{type:"application/pdf"});(0,h.saveAs)(i,"".concat(e,".pdf")),setTimeout((function(){t.setState({invoiceDownload:0})}),3e3)})).catch((function(e){return b.Am.error("Oops! Something went wrong. Please try again later.")}))}},c.downloadInvoice=function(e){return function(n){c.setState({invoiceDownloadRequest:!0});var t=(0,o.Z)(c);f(e).then((function(n){var i=new Blob([n.data],{type:"application/pdf"});(0,h.saveAs)(i,"".concat(e,".pdf")),setTimeout((function(){t.setState({invoiceDownloadRequest:!1})}),3e3)})).catch((function(e){return b.Am.error("Oops! Something went wrong. Please try again later.")}))}},c.printInvoice=function(e){return function(n){c.setState({invoicePrintRequest:!0});var t=(0,o.Z)(c);f(e).then((function(e){var n=new Blob([e.data],{type:"application/pdf"}),i=URL.createObjectURL(n);window.open(i,"_blank"),setTimeout((function(){t.setState({invoicePrintRequest:!1})}),3e3)})).catch((function(e){return b.Am.error("Oops! Something went wrong. Please try again later.")}))}},c.onLoadInvoice=function(){var e=(0,o.Z)(c);(new m.Z).get(w.oS).then((function(n){var t=n.data.response;e.setState({invoiceList:t,invoiceRequest:!1})})).catch((function(e){return c.setState({invoiceRequest:!1},(function(){return b.Am.error("Oops! Something went wrong. Please try again later.")}))}))},c}return(0,c.Z)(t,[{key:"componentDidMount",value:function(){this.onLoadInvoice()}},{key:"render",value:function(){var e=this,n=this.state,t=n.viewInvoice,i=n.invoiceDownload,c=n.invoiceList,o=n.invoiceRequest,a=n.viewInvoiceData,s=n.invoiceDownloadRequest,d=n.invoicePrintRequest;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{style:{minHeight:"calc(100vh - 400px)"},children:o?(0,j.jsx)(g.O,{}):c&&c.length>0?(0,j.jsxs)(r.Z,{responsive:!0,className:"mb-0",children:[(0,j.jsx)("thead",{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{className:"p-lg-4 p-sm-3 p-2",children:"Date"}),(0,j.jsx)("th",{className:"p-lg-4 p-sm-3 p-2",children:"Invoice Id"}),(0,j.jsx)("th",{className:"p-lg-4 p-sm-3 p-2",children:"Plan"}),(0,j.jsx)("th",{className:"p-lg-4 p-sm-3 p-2",children:"Amount"}),(0,j.jsx)("th",{className:"p-lg-4 p-sm-3 p-2",children:"Status"}),(0,j.jsx)("th",{className:"text-end p-lg-4 p-sm-3 p-2",align:"right",children:"Action"})]})}),(0,j.jsx)("tbody",{children:c.map((function(n,t){return(0,j.jsxs)("tr",{className:"align-middle",children:[(0,j.jsx)("td",{className:"p-lg-4 p-sm-3 p-2 text-nowrap",children:v()(n.invoiceDate).format("DD MMM YYYY")}),(0,j.jsx)("td",{className:"p-lg-4 p-sm-3 p-2 text-nowrap",children:n.invoiceId}),(0,j.jsx)("td",{className:"p-lg-4 p-sm-3 p-2 text-nowrap",children:n.plan}),(0,j.jsxs)("td",{className:"p-lg-4 p-sm-3 p-2 text-nowrap",children:[n.invoiceView.currencyValue,n.invoiceView.amountValue]}),(0,j.jsx)("td",{className:"p-lg-4 p-sm-3 p-2 text-nowrap",children:(0,j.jsx)("span",{className:"badge badge-light-success",children:"Paid"})}),(0,j.jsxs)("td",{className:"p-lg-4 p-sm-3 p-2 text-nowrap text-end",children:[(0,j.jsx)(p.Z,{placement:"top",overlay:(0,j.jsx)(u.Z,{children:"View"}),children:(0,j.jsx)("button",{type:"button",className:"btn btn-icon btn-active-light p-0 w-34px h-34px border-0 me-2",onClick:e.viewInvoice(n),children:(0,j.jsx)("i",{className:"ri-eye-line icon-5"})})}),0===i?(0,j.jsx)(p.Z,{placement:"top",overlay:(0,j.jsx)(u.Z,{children:"Download"}),children:(0,j.jsx)("button",{type:"button",className:"btn btn-icon btn-active-light p-0 w-34px h-34px border-0",onClick:e.clickToInvoiceDownload(n.invoiceId),children:(0,j.jsx)("i",{className:"ri-download-2-line icon-5"})})}):1===i?(0,j.jsx)(p.Z,{placement:"top",overlay:(0,j.jsx)(u.Z,{children:"Downloading"}),children:(0,j.jsx)("button",{type:"button",className:"btn btn-icon btn-active-light p-0 w-34px h-34px border-0",children:(0,j.jsx)("div",{className:"spinner spinner-dark spinner-sm position-relative me-2"})})}):2===i?(0,j.jsx)(p.Z,{placement:"top",overlay:(0,j.jsx)(u.Z,{children:"Success"}),children:(0,j.jsx)("button",{type:"button",className:"btn btn-icon btn-active-light p-0 w-34px h-34px border-0",children:(0,j.jsx)("i",{className:"ri-check-fill icon-5 text-success"})})}):null]})]},t)}))})]}):(0,j.jsx)(l.Suspense,{fallback:(0,j.jsx)(j.Fragment,{}),children:(0,j.jsx)(y,{})})}),a?(0,j.jsx)(l.Suspense,{fallback:(0,j.jsx)(j.Fragment,{}),children:(0,j.jsx)(I,{viewInvoiceCallback:this.viewInvoiceCallback,modalToggle:t,viewInvoiceData:a,clickToInvoiceDownload:this.downloadInvoice,printInvoice:this.printInvoice,invoiceDownloadRequest:s,invoicePrintRequest:d})}):null]})}}]),t}(l.Component)}}]);
//# sourceMappingURL=9523.9bb108b7.chunk.js.map