(this["webpackJsonpe-shop"]=this["webpackJsonpe-shop"]||[]).push([[0],{11:function(e,t,c){e.exports={table:"CartProducts_table__Mar3q",thead:"CartProducts_thead__ABMjM",imageWrap:"CartProducts_imageWrap__YcAUe",name:"CartProducts_name__2fFdP",img:"CartProducts_img__3E-wr",input:"CartProducts_input__pLOdP"}},12:function(e,t,c){e.exports={wrapper:"Summary_wrapper__1t5tF",littleWrapper:"Summary_littleWrapper__1JeIV",heading:"Summary_heading__3QHZ1",total:"Summary_total__2Bt8J",button:"Summary_button__3syIl"}},13:function(e,t,c){e.exports={imageWrapper:"Product_imageWrapper__239v1",image:"Product_image__2AMRR",card:"Product_card__oGZOO",content:"Product_content__1Z1cr",title:"Product_title__3A1wF",price:"Product_price__1WHbG"}},14:function(e,t,c){e.exports={logo:"Header_logo__cbfsK",nav:"Header_nav__3uDPa",img:"Header_img__3Ra5X",num:"Header_num__1ZDP7",cart:"Header_cart__3SORu"}},23:function(e,t,c){e.exports={button:"Button_button__UbPma",active:"Button_active__324iT"}},28:function(e,t,c){e.exports={button:"RemoveButton_button__13VCt"}},29:function(e,t,c){e.exports={dropdown:"Dropdown_dropdown__3EqxX"}},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),r=c.n(n),s=c(4),i=c(9),l=c.n(i),o=c(15),d=c(3),u=c(23),j=c.n(u),m=function(e){var t=e.text,c=e.onClick,n=e.active;return Object(a.jsx)("button",{type:"button",className:"".concat(j.a.button," ").concat(n?j.a.active:""),onClick:c,children:t})},b=c(11),p=c.n(b),h="ADD_TO_CART",x="REMOVE_FROM_CART",O="CHANGE_QUANTITY",g=function(e){return{type:x,id:e}},v=function(e,t){return{type:O,quantity:t,id:e}},f=c(28),y=c.n(f),N=function(e){var t=e.text,c=e.onClick;return Object(a.jsx)("button",{type:"button",className:y.a.button,onClick:c,children:t})},A=c(12),C=c.n(A),_={lv:{home:{title:"Veikals"},cart:{title:"Iepirkumu grozs",emptyCart:"J\u016bsu grozs ir tuk\u0161s",product:"Prece",price:"Cena",total:"Summa",subtotal:"Starpsumma",quantity:"Daudzums",summary:"P\u0101rskats",delivery:"Pieg\u0101de",free:"Bezmaksas"},buttons:{checkout:"Noform\u0113t pirkumu",return:"Atgriezties veikal\u0101",addToCart:"Pievienot grozam",removeFromCart:"Iz\u0146emt no groza"},notifications:{itemAdded:"Prece pievienota grozam"}},en:{home:{title:"Shop"},cart:{title:"Shopping cart",emptyCart:"Your cart is empty",product:"Product",price:"Price",total:"Total",subtotal:"Subtotal",quantity:"Quantity",summary:"Summary",delivery:"Delivery",free:"Free"},buttons:{checkout:"Checkout",return:"Return to shop",addToCart:"Add to cart",removeFromCart:"Remove from cart"},notifications:{itemAdded:"Item added to cart"}}},w=function(e){var t=e.subtotal,c=Object(s.c)((function(e){return e.languages.language}));return Object(a.jsxs)("div",{className:C.a.wrapper,children:[Object(a.jsx)("h2",{className:C.a.heading,children:_[c].cart.summary}),Object(a.jsxs)("div",{className:C.a.littleWrapper,children:[Object(a.jsx)("span",{children:_[c].cart.subtotal}),Object(a.jsxs)("span",{children:["\u20ac ",t]})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:C.a.littleWrapper,children:[Object(a.jsx)("span",{children:_[c].cart.delivery}),Object(a.jsx)("span",{children:_[c].cart.free})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"".concat(C.a.littleWrapper," ").concat(C.a.total),children:[Object(a.jsx)("span",{children:_[c].cart.total}),Object(a.jsxs)("span",{children:["\u20ac ",t]})]}),Object(a.jsxs)("button",{className:C.a.button,type:"button",children:[" ",_[c].buttons.checkout]})]})},M=function(e){var t=e.products,c=Object(s.c)((function(e){return e.languages.language})),n=Object(s.b)(),r=0;t[0]&&(r=t.map((function(e){var t=(e.price*e.quantity).toFixed(2);return Number(t)})).reduce((function(e,t){return e+t})));return Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-8 col-xs-12",children:Object(a.jsxs)("table",{className:p.a.table,children:[Object(a.jsx)("thead",{className:p.a.thead,children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:" "}),Object(a.jsx)("th",{children:_[c].cart.product}),Object(a.jsx)("th",{children:_[c].cart.price}),Object(a.jsx)("th",{children:_[c].cart.quantity}),Object(a.jsx)("th",{children:_[c].cart.total})]})}),Object(a.jsx)("tbody",{className:p.a.tbody,children:t.map((function(e){var t=e.name,c=e.price,r=e.img,s=e.id,i=e.quantity;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)(N,{onClick:function(){n(g(s)),n(v(s,1))}})}),Object(a.jsx)("td",{children:Object(a.jsxs)("div",{className:p.a.imageWrap,children:[Object(a.jsx)("img",{className:p.a.img,src:r,alt:t}),Object(a.jsx)("span",{className:p.a.name,children:t})]})}),Object(a.jsxs)("td",{children:["\u20ac ",c]}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{className:p.a.input,type:"number",value:i,onChange:function(e){var t=Number(e.target.value);t&&n(v(s,t))}})}),Object(a.jsxs)("td",{children:["\u20ac ",(c*i).toFixed(2)]})]},s)}))})]})}),Object(a.jsx)("div",{className:"col-md-4 col-xs-12",children:Object(a.jsx)(w,{subtotal:Number(r.toFixed(2))})})]})},z=function(){var e=Object(s.c)((function(e){return e.products})),t=Object(s.c)((function(e){return e.languages.language})),c=Object(d.f)(),n=e.filter((function(e){return e.selected}));return Object(a.jsx)("section",{children:Object(a.jsxs)("div",{className:"container container-fluid",children:[Object(a.jsx)("div",{className:"row center-xs",children:Object(a.jsx)("div",{className:"col-xs-12",children:Object(a.jsx)("h2",{className:"margin-bottom--48",children:_[t].cart.title})})}),n[0]?Object(a.jsx)(M,{products:n}):Object(a.jsx)("div",{className:"row center-xs",children:Object(a.jsxs)("div",{className:"col-xs-12",children:[Object(a.jsx)("img",{src:"data:image/png;base64,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",alt:"empty cart",style:{maxWidth:"100%"}}),Object(a.jsx)("h5",{children:_[t].cart.emptyCart}),Object(a.jsx)(m,{text:_[t].buttons.return,onClick:function(){return c.push("/")}})]})})]})})},P=c(19),k=(c(40),c(13)),F=c.n(k),S=function(e){var t=e.title,c=e.price,n=e.selected,r=e.img,i=e.id,l=Object(s.c)((function(e){return e.languages.language})),o=Object(s.b)();return Object(a.jsxs)("div",{className:F.a.card,children:[Object(a.jsx)("div",{className:F.a.imageWrapper,children:Object(a.jsx)("img",{className:F.a.image,src:r,alt:t})}),Object(a.jsxs)("div",{className:F.a.content,children:[Object(a.jsx)("span",{className:F.a.title,children:t}),Object(a.jsxs)("span",{className:F.a.price,children:["\u20ac ",c]})]}),n?Object(a.jsx)(m,{text:_[l].buttons.removeFromCart,onClick:function(){o(g(i))}}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m,{active:!0,text:_[l].buttons.addToCart,onClick:function(){o(function(e){return{type:h,id:e}}(i)),Object(P.c)("".concat(_[l].notifications.itemAdded))}}),Object(a.jsx)(P.b,{position:"top-right",autoClose:2e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,transition:P.a,pauseOnHover:!1})]})]})},H=function(){var e=Object(s.c)((function(e){return e.products})),t=Object(s.c)((function(e){return e.languages.language}));return Object(a.jsx)("section",{className:"margin-bottom--48",children:Object(a.jsxs)("div",{className:"container container-fluid",children:[Object(a.jsx)("div",{className:"row center-xs",children:Object(a.jsx)("div",{className:"col-xs-12",children:Object(a.jsx)("h1",{className:"margin-bottom--48",children:_[t].home.title})})}),Object(a.jsx)("div",{className:"row center-xs",children:e.map((function(e){var t=e.name,c=e.price,n=e.selected,r=e.img,s=e.id;return Object(a.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-3",children:Object(a.jsx)(S,{title:t,price:c,selected:n,img:r,id:s})},s)}))})]})})},R=c(14),E=c.n(R),I=c.p+"static/media/logo.83a0a9fe.svg",T=c.p+"static/media/cart.1349cc86.svg",B=[{name:"lv",value:"lv"},{name:"en",value:"en"}],Z="CHANGE_LANGUAGE",Y=c(29),q=c.n(Y),J=function(e){var t=e.value,c=e.changeHandler,n=e.options;return Object(a.jsx)("select",{className:q.a.dropdown,value:t,onChange:function(e){return c(e)},children:n.map((function(e){return Object(a.jsx)("option",{value:e.value,children:e.name},e.value)}))})},K=function(){var e=Object(s.c)((function(e){return e.products})),t=Object(s.c)((function(e){return e.languages.language})),c=Object(s.b)(),n=e.filter((function(e){return e.selected}));return Object(a.jsx)("header",{className:E.a.header,children:Object(a.jsx)("div",{className:"container container-fluid",children:Object(a.jsxs)("div",{className:"row middle-xs",children:[Object(a.jsx)("div",{className:"col-xs-3",children:Object(a.jsx)(o.b,{to:"/",children:Object(a.jsx)("img",{className:E.a.logo,src:I,alt:"logo"})})}),Object(a.jsx)("div",{className:"col-xs-9 end-xs",children:Object(a.jsxs)("nav",{className:E.a.nav,children:[Object(a.jsx)(o.b,{to:"/cart",children:Object(a.jsxs)("div",{className:E.a.cart,children:[Object(a.jsx)("span",{className:E.a.num,children:n.length}),Object(a.jsx)("img",{className:E.a.img,src:T,alt:"cart"})]})}),Object(a.jsx)(J,{value:t,options:B,changeHandler:function(e){var t=e.target.value;c(function(e){return{type:Z,language:e}}(t))}})]})})]})})})},U=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(K,{}),Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{path:"/cart",children:Object(a.jsx)(z,{})}),Object(a.jsx)(d.a,{path:"/",children:Object(a.jsx)(H,{})})]})]})},W=(c(41),c(42),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))}),Q=c(17),L={language:"en"},X=c.p+"static/media/dw.74902493.jpg",D=c.p+"static/media/mk.616ef21d.jpg",V=c.p+"static/media/clu.001cd853.jpg",G=c.p+"static/media/ph.9df7e0e1.jpg",$=c.p+"static/media/lib.fbe98448.jpg",ee=c.p+"static/media/favs.5756ca97.jpg",te=[{id:0,name:"Daniel Wellington",price:99.99,quantity:1,selected:!1,img:"".concat(X)},{id:1,name:"Michael Kors",price:99.99,quantity:1,selected:!1,img:"".concat(D)},{id:2,name:"Cluse",price:99.99,quantity:1,selected:!1,img:"".concat(V)},{id:3,name:"Paul Hewitt",price:99.99,quantity:1,selected:!1,img:"".concat(G)},{id:4,name:"Liebeskind",price:99.99,quantity:1,selected:!1,img:"".concat($)},{id:5,name:"FAVS",price:99.99,quantity:1,selected:!1,img:"".concat(ee)}],ce=Object(Q.b)({languages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return{language:t.language};default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return e.map((function(e){return e.id===t.id&&(e.selected=!0),e}));case x:return e.map((function(e){return e.id===t.id&&(e.selected=!1),e}));case O:return e.map((function(e){return e.id===t.id&&(e.quantity=t.quantity),e}));default:return e}}}),ae=Object(Q.c)(ce);l.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(s.a,{store:ae,children:Object(a.jsx)(U,{})})}),document.getElementById("root")),W()}},[[43,1,2]]]);
//# sourceMappingURL=main.a2e412f7.chunk.js.map