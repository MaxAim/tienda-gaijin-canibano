(this["webpackJsonptienda-gaijin-canibano"]=this["webpackJsonptienda-gaijin-canibano"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(14),r=n.n(a),o=(n(38),n(39),n(40),Object(i.createContext)()),s=n(7),d=n(0),l=function(){var e=Object(i.useContext)(o).cartNum;return Object(d.jsx)("div",{id:"Cart",children:Object(d.jsxs)(s.b,{style:{height:"100%"},to:"/cart",children:["\ud83d\uded2",e||""]})})},j=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("header",{className:"NavBar",children:[Object(d.jsx)(s.c,{to:"/",style:{padding:"0 2% 0 2%"},children:Object(d.jsxs)("h1",{children:["Tienda ",Object(d.jsx)("b",{style:{fontSize:"3vw",textShadow:"none"},children:"\u2b24"})," ","Gaijin"]})}),Object(d.jsx)(s.c,{to:"/",className:"NavLink",children:"Todos"}),Object(d.jsx)(s.c,{to:"/category/comida",activeClassName:"off",className:"NavLink",children:"Comida"}),Object(d.jsx)(s.c,{to:"/category/ropa",activeClassName:"off",className:"NavLink",children:"Ropa"}),Object(d.jsx)(s.c,{to:"/category/figuras",activeClassName:"off",className:"NavLink",children:"Figuras"}),Object(d.jsx)(s.c,{to:"/category/otros",activeClassName:"off",className:"NavLink",children:"Otros"}),Object(d.jsx)(l,{})]})})},b=n(5),u=(n(46),n(4)),h=function(e){var t=e.color,n=e.backgroundColor,i=e.width,c=e.text,a=e.height,r=e.onClick,o=e.border,s=e.display,l=e.margin;return Object(d.jsx)("button",{style:{color:t,backgroundColor:n,width:i,height:a,border:o,borderRadius:"10px",display:s,fontSize:"1.1vw",margin:l},onClick:r,children:c})},x=function(e){var t=e.num,n=e.handleChange;return Object(d.jsx)("span",{style:{display:0===t?"none":"flex",width:"2.6vw",fontSize:"1vw",textAlign:"center",backgroundColor:"white",color:"black",borderRadius:"5px",border:"black thin solid",justifyContent:"center",alignItems:"center"},onChange:n,children:t})};var O=function(e){var t=e.stock,n=e.num,i=e.setNum;function c(){i(n<t?n+1:n)}return Object(d.jsxs)("div",{style:{width:"auto"},children:[Object(d.jsx)(h,{text:"Agregar",width:"6vw",height:"2.8vw",border:"none",backgroundColor:"rgb(18, 0, 177)",color:"white",onClick:c,display:0===n&&0!==t?"inline":"none"}),Object(d.jsxs)("div",{style:{display:0===n?"none":"inline-flex",justifyContent:"center"},children:[Object(d.jsx)(h,{text:"-",width:"2.8vw",height:"2.8vw",backgroundColor:"gray",onClick:function(){i(n>0?n-1:n)}}),Object(d.jsx)(x,{num:n,handleChange:function(){i(n)}}),Object(d.jsx)(h,{text:"+",width:"2.8vw",height:"2.8vw",backgroundColor:"gray",onClick:c})]}),Object(d.jsx)("p",{style:{fontSize:"1.3vw",display:0===t?"inline-flex":"none"},children:"No hay stock"})]})};var f=function(e){var t=e.item,n=Object(u.g)().itemsId;return Object(d.jsxs)("div",{className:"subTable",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{width:"100%"},children:Object(d.jsx)(s.b,{id:"pictureContainer",to:{pathname:"/item/".concat(t.id)},children:Object(d.jsx)("img",{alt:t.title,src:t.image})})}),Object(d.jsx)("div",{style:{width:"100%",paddingTop:"2%"},children:Object(d.jsx)("b",{children:t.title})})]}),Object(d.jsxs)("div",{style:{display:"flex",paddingTop:"10%"},children:[0===t.stock?Object(d.jsx)("p",{style:{fontSize:"2.3vw",width:"100%"},children:"No hay stock"}):Object(d.jsxs)("div",{style:{width:"50%",padding:"7%",fontSize:"2.3vw"},children:["\xa5",t.price]}),void 0===n?Object(d.jsx)(s.b,{to:{pathname:"/item/".concat(t.id)},children:Object(d.jsx)(h,{text:"Ver m\xe1s",width:"6vw",height:"2.8vw",border:"none",backgroundColor:"rgb(18, 0, 177)",color:"white"})}):Object(d.jsx)("div",{style:{width:"100%",padding:"5%"},children:Object(d.jsx)(O,{stock:t.stock})})]})]})},p=(n(47),function(e){var t=e.items,n=e.loaded;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"tableDark",children:[Object(d.jsx)("div",{style:{display:1!==n?"flex":"none"},children:"Cargando..."}),t.map((function(e){return Object(d.jsx)(f,{item:e},e.id)}))]})})}),m=n(17),g=(n(30),m.initializeApp({apiKey:"AIzaSyBICxIz97MfF7fPmpDxp_9IyQPhbF4s1Oo",authDomain:"tienda-gaijin.firebaseapp.com",databaseURL:"https://tienda-gaijin-default-rtdb.firebaseio.com",projectId:"tienda-gaijin",storageBucket:"tienda-gaijin.appspot.com",messagingSenderId:"490933764082",appId:"1:490933764082:web:04a972fb37c12bad80756b",measurementId:"G-YD4TJBFT7G"}));function v(){return m.firestore(g)}var y=function(){var e=Object(i.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(0),r=Object(b.a)(a,2),o=r[0],s=r[1],l=Object(u.g)().categoryId,j=Object(u.f)();return Object(i.useEffect)((function(){var e=v().collection("products");(void 0!==l?e.where("category","==",l):e).get().then((function(e){0===e.size&&(console.log("No responce"),j.push("/")),c(e.docs.map((function(e){return e.data()}))),s(1)}))}),[l,j]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(p,{loaded:o,items:n})})},w=(n(55),function(e){var t=e.item,n=e.loaded,c=Object(i.useState)(0),a=Object(b.a)(c,2),r=a[0],l=a[1],j=Object(i.useContext)(o).addProducts;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"tableDetail",style:{display:1!==n?"flex":"none"},children:"Cargando..."}),Object(d.jsxs)("div",{className:"subTable tableDetail",style:{display:1!==n?"none":"flex"},children:[Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("div",{style:{width:"15%"},children:Object(d.jsx)("img",{alt:t.title,src:t.image})}),Object(d.jsxs)("div",{style:{width:"85%",paddingLeft:"2%",display:"grid",justifyItems:"center"},children:[Object(d.jsx)("b",{children:t.title}),Object(d.jsx)("p",{children:t.description})]})]}),Object(d.jsxs)("div",{style:{display:"grid",justifyItems:"center",width:"25%",padding:"2%"},children:[Object(d.jsxs)("div",{style:{width:"100%",padding:"5%"},children:[Object(d.jsx)(O,{stock:t.stock,num:r,setNum:l}),Object(d.jsxs)("div",{style:{width:"100%",paddingTop:"20%",fontSize:"2.3vw",display:0===t.stock?"none":"inline-flex"},children:["\xa5",t.price]})]}),Object(d.jsx)(s.b,{to:"/cart",children:Object(d.jsx)(h,{text:"Confirmar",width:"8.2vw",height:"3vw",border:"none",backgroundColor:"rgb(18, 0, 177)",color:"white",onClick:function(){j({id:t.id,amount:r,name:t.title,price:t.price,key:t.number,stock:t.stock,image:t.image,description:t.description})},display:0===r?"none":"inline"})})]})]})]})});var C=function(){var e=Object(i.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(u.g)().itemsId,r=Object(u.f)(),o=Object(i.useState)(0),s=Object(b.a)(o,2),l=s[0],j=s[1];return Object(i.useEffect)((function(){v().collection("products").where("id","==",a).get().then((function(e){0===e.size&&(console.log("No responce"),r.push("/")),c(e.docs.map((function(e){return e.data()}))[0]),j(1)}))}),[a,r]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(w,{loaded:l,item:n})})},k=n(33),I=n(2),N=function(e){var t=e.children,n=Object(i.useState)([]),c=Object(b.a)(n,2),a=c[0],r=c[1],s=Object(i.useState)(!1),l=Object(b.a)(s,2),j=l[0],u=l[1],h=Object(i.useState)("Error no especificado"),x=Object(b.a)(h,2),O=x[0],f=x[1],p=Object(i.useState)(0),m=Object(b.a)(p,2),g=m[0],v=m[1],y=function(){return u(!0)};Object(i.useEffect)((function(){v(a.reduce((function(e,t){return e+t.amount}),0))}),[a]);return Object(d.jsx)(o.Provider,{value:{addProducts:function(e){if(a.find((function(t){return t.id===e.id}))){var t=a.map((function(t){if(t.id===e.id){if(!(t.amount+e.amount>=e.stock))return Object(I.a)(Object(I.a)({},t),{},{amount:t.amount+e.amount});f("Stock insuficiente"),y()}return t}));r(t)}else r((function(t){return[].concat(Object(k.a)(t),[e])}))},deleteItem:function(e){a.splice(a.indexOf(e),1),v(a.reduce((function(e,t){return e+t.amount}),0))},totalPrice:function(){return a.reduce((function(e,t){return e+t.price*t.amount}),0)},setCart:r,handleShow:y,handleClose:function(){return u(!1)},setErrorText:f,cart:a,cartNum:g,show:j,errorText:O},children:t})},S=function(e){var t=e.item,n=e.loaded,c=Object(i.useContext)(o).deleteItem;return Object(d.jsxs)("div",{id:t.key,children:[Object(d.jsx)("div",{className:"tableDetail",style:{display:1!==n?"flex":"none"},children:"Cargando..."}),Object(d.jsxs)("div",{className:"subTable tableDetail",style:{display:1!==n?"none":"flex"},children:[Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("div",{style:{maxWidth:"10%",display:"grid",placeItems:"center"},children:Object(d.jsx)("img",{alt:t.title,src:t.image})}),Object(d.jsx)("div",{style:{paddingLeft:"2%",display:"grid",placeItems:"center"},children:Object(d.jsx)("b",{children:t.name})})]}),Object(d.jsxs)("div",{style:{display:"flex",width:"20%",fontSize:"1.5rem",flexFlow:"column",alignItems:"flex-end"},children:[Object(d.jsxs)("div",{style:{width:"100%",padding:"5%",textAlign:"end"},children:["\xa5",t.price," x ",t.amount]}),Object(d.jsxs)("div",{style:{width:"100%",padding:"5%",textAlign:"end"},children:["Total: \xa5",t.price*t.amount]}),Object(d.jsx)(s.b,{to:"/cart",children:Object(d.jsx)(h,{text:"Eliminar",width:"6.2vw",height:"2.4vw",border:"none",backgroundColor:"rgb(18, 0, 177)",color:"white",onClick:function(){c(t)}})})]})]})]})},T=n(15);n(56);var D=function(e){var t=e.setUserInfo,n=e.userInfo,c=e.completeOrder,a=e.display,r=Object(i.useContext)(o),s=r.setErrorText,l=r.handleShow,j=[n.name,n.address,n.email,n.phone],b=n.email.lastIndexOf("@")<n.email.lastIndexOf(".")&&n.email.lastIndexOf("@")>0&&-1===n.email.indexOf("@@")&&n.email.lastIndexOf(".")>2&&n.email.length-n.email.lastIndexOf(".")>1,u=function(e){var i=e.target,c=i.name,a=i.value;console.log(n),t((function(e){return Object(I.a)(Object(I.a)({},e),{},Object(T.a)({},c,a))}))};return Object(d.jsxs)("div",{id:"formulary",className:"tableDark",style:{flexFlow:"column",display:0===a?"none":"block"},children:[Object(d.jsxs)("fieldset",{children:[Object(d.jsx)("legend",{children:"Informacion personal"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Nombre:"}),Object(d.jsx)("input",{type:"text",required:!0,onChange:u,value:n.name,id:"nombre",name:"name",placeholder:"Nombre"}),Object(d.jsx)("p",{children:"Direccion:"}),Object(d.jsx)("input",{type:"text",required:!0,onChange:u,value:n.adress,id:"direccion",name:"adress",placeholder:"Direccion"}),Object(d.jsx)("p",{children:"Mail:"}),Object(d.jsx)("input",{required:!0,onChange:u,value:n.email,id:"email",placeholder:"Email",type:"email",name:"email"}),Object(d.jsx)("p",{children:"Telefono:"}),Object(d.jsx)("input",{type:"text",required:!0,onChange:u,onKeyDown:function(e){!isFinite(e.key)&&8!==e.keyCode&&e.preventDefault()},value:n.phone,id:"telefono",placeholder:"phone",name:"phone"}),Object(d.jsx)("p",{children:"Informacion extra:"}),Object(d.jsx)("textarea",{onChange:u,value:n.extra,name:"extra",id:"info",rows:"20",placeholder:"Informacion extra"})]}),Object(d.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/tienda-gaijin.appspot.com/o/contacto.png?alt=media&token=6dfbf502-6abf-48da-b6c2-c5b077698005",alt:"Kawaii"})]}),Object(d.jsxs)("fieldset",{style:{display:"flex",justifyContent:"end"},children:[Object(d.jsx)("legend",{children:"Confirmar"}),Object(d.jsx)(h,{border:"none",backgroundColor:"rgb(18, 0, 177)",color:"white",text:"Finalizar Compra",onClick:function(){void 0===j.find((function(e){return""===e}))&&!0===b?c():(s(!0===b?"Datos faltantes":"Correo electronico invalido"),l())},height:"50px",width:"100%"})]})]})},F=n(61);n(57);var z=function(e){var t=e.cleanCart,n=Object(i.useContext)(o),c=n.handleClose,a=n.show,r=n.errorText;return Object(d.jsxs)(F.a,{show:a,onHide:c,onExited:t,children:[Object(d.jsx)(F.a.Body,{children:r}),Object(d.jsx)(F.a.Footer,{children:Object(d.jsx)(h,{text:"X",width:"1.5vw",height:"1.5vw",border:"none",backgroundColor:"rgb(18, 0, 177)",color:"white",onClick:c})})]})};var E=function(){var e=v(),t=Object(i.useContext)(o),n=t.cart,c=t.totalPrice,a=t.setCart,r=t.handleShow,s=t.setErrorText,l=Object(i.useState)(0),j=Object(b.a)(l,2),x=j[0],O=j[1],f=Object(u.f)(),p=Object(i.useState)(null),g=Object(b.a)(p,2),y=g[0],w=g[1],C=Object(i.useState)(0),k=Object(b.a)(C,2),I=k[0],N=k[1],T=e.collection("orders"),F=Object(i.useState)({name:"",adress:"",email:"",phone:"",extra:""}),E=Object(b.a)(F,2),L=E[0],P=E[1],B={buyer:L,items:n,date:m.firestore.Timestamp.fromDate(new Date),total:c()};return Object(i.useEffect)((function(){O(1)}),[n]),Object(d.jsx)("div",{children:Object.keys(n).length?Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{style:{display:0===I?"block":"none"},children:[Object(d.jsx)(z,{cleanCart:function(){null!==y&&(a([]),f.push("/"))}}),n.map((function(e){return Object(d.jsx)(S,{item:e,loaded:x},e.key)})),Object(d.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(d.jsxs)("div",{className:"tableDark",id:"totalCost",children:[Object(d.jsx)("div",{style:{marginRight:"5%"},children:"Total:"}),Object(d.jsxs)("div",{children:["\xa5",c()]})]})}),Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(d.jsx)("div",{className:"tableDark",style:{width:"20%"},children:Object(d.jsx)(h,{border:"none",backgroundColor:"rgb(18, 0, 177)",color:"white",text:"Confirmar pedido",onClick:function(){N(1)},height:"50px",width:"100%"})})})]}),Object(d.jsx)(D,{completeOrder:function(){T.add(B).then((function(e){var t=e.id;w(t),s("Gracias "+L.name+" por tu compra. El id de tu orden es "+t),r()})).catch((function(e){console.log(e)}))},setUserInfo:P,userInfo:L,display:I})]}):Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"tableDark",children:Object(d.jsxs)("div",{style:{width:"100%",minHeight:"500px",display:"grid"},children:[Object(d.jsxs)("div",{style:{position:"absolute",justifyContent:"center",zIndex:"2",width:"100%",alignItems:"center",height:"500px",display:"flex"},children:[Object(d.jsx)(h,{border:"none",backgroundColor:"rgb(18, 0, 177)",color:"white",text:"Seguir comprando",onClick:function(){return f.push("/")},height:"50px",width:"150px"}),Object(d.jsx)(h,{border:"none",backgroundColor:"rgb(177, 0, 18)",color:"white",text:"Seguir comprando pero en rojo",onClick:function(){return f.push("/")},height:"auto",width:"150px",margin:"0px 50px 50px 170px"})]}),Object(d.jsx)("img",{style:{width:"500px",height:"100px",justifySelf:"center",paddingRight:"250px"},src:"https://firebasestorage.googleapis.com/v0/b/tienda-gaijin.appspot.com/o/vacio.png?alt=media&token=c0fc45e4-6924-48f8-ab8f-58f843464b5c",alt:"Carrito vacio"}),Object(d.jsx)("img",{style:{maxHeight:"400px",maxWidth:"400px",justifySelf:"center"},src:"https://firebasestorage.googleapis.com/v0/b/tienda-gaijin.appspot.com/o/nada.png?alt=media&token=2304c6fa-6c8c-4764-be74-1a9e983d9671",alt:"Carrito vacio"})]})})})})};var L=function(){return Object(d.jsx)(N,{children:Object(d.jsxs)(s.a,{children:[Object(d.jsx)(j,{}),Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{exact:!0,path:"/category/:categoryId",component:function(){return Object(d.jsx)(y,{})}}),Object(d.jsx)(u.a,{exact:!0,path:"/item/:itemsId",component:function(){return Object(d.jsx)(C,{})}}),Object(d.jsx)(u.a,{exact:!0,path:"/cart",component:function(){return Object(d.jsx)(E,{})}}),Object(d.jsx)(u.a,{path:"/",component:function(){return Object(d.jsx)(y,{})}})]})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root")),P()}},[[58,1,2]]]);
//# sourceMappingURL=main.585db865.chunk.js.map