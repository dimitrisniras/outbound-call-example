(this.webpackJsonpchathack=this.webpackJsonpchathack||[]).push([[0],{135:function(e,t,n){e.exports=n(211)},140:function(e,t,n){},165:function(e,t){},209:function(e,t,n){},211:function(e,t,n){"use strict";n.r(t);var a,o=n(0),l=n.n(o),r=n(22),i=n.n(r),c=(n(140),n(126)),u=n(14),m=n.n(u),s=n(117),d=n(23),p=n(59),f=n(36),g=n(10),h=n(60),v=n(118),b=new(n.n(v).a)({debug:!1}),E=n(228),x=n(229),y=n(230),k=n(238),w=n(232),O=n(233),j=n(234),C=n(124),N=n.n(C),B=h.a.div(a||(a=Object(p.a)(["\n  height: calc(100% - 56px);\n  overflow-y: overlay;\n"]))),S=Object(E.a)((function(e){return{root:{gridColumn:1,backgroundColor:e.palette.background.paper},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"10%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,paddingLeft:"15px",paddingRight:"15px"},footer:{position:"fixed",left:0,bottom:0,width:"100%","text-align":"left","border-style":"solid","border-color":"grey","border-width":"medium"},clearButton:{width:"100%"},header:{position:"fixed",right:5,top:5,width:"30%","text-align":"center","border-width":"medium"},callButton:{width:"100%","background-color":"dodgerBlue"},hangupButton:{width:"100%","background-color":"red"},input:{height:40,margin:12,borderWidth:1}}})),A=function(e){var t=e.nexmoApp,n=e.events,a=e.setEvents,o=e.outboundCall,r=e.setOutboundCall,i=S(),c=l.a.useState(null),u=Object(d.a)(c,2),m=u[0],s=u[1];return t.me?l.a.createElement(B,null,l.a.createElement(x.a,{variant:"h4",gutterBottom:!0},t.me?"Hello ".concat(t.me.application.me.name):l.a.createElement(f.b,{to:"/"},"Login")),l.a.createElement("form",null,l.a.createElement("label",null,"Name:",l.a.createElement("input",{type:"text",name:"name"})),l.a.createElement("input",{type:"submit",value:"Submit"})),o?l.a.createElement("div",null):l.a.createElement("div",{className:i.header},l.a.createElement("label",null,l.a.createElement("input",{className:i.input,type:"text",value:m,onChange:s})),l.a.createElement(y.a,{onClick:function(){t.me.application.callServer(m).then((function(e){r(e)}))},className:i.callButton},"Call")),o?l.a.createElement("div",{className:i.header},l.a.createElement(y.a,{onClick:function(){o.hangUp().then((function(){r(null)}))},className:i.hangupButton},"Hangup Call")):l.a.createElement("div",null),n.map((function(e){var t,n,a,o,r,c,u;return l.a.createElement(k.a,{key:e.id+e.cid},l.a.createElement(w.a,{expandIcon:l.a.createElement(N.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},l.a.createElement(x.a,{className:i.heading},e.type),l.a.createElement(x.a,{className:i.secondaryHeading},"From: ",null===e||void 0===e||null===(t=e._embedded)||void 0===t||null===(n=t.from_member)||void 0===n?void 0:n.id),l.a.createElement(O.a,{orientation:"vertical",flexItem:!0}),l.a.createElement(x.a,{className:i.secondaryHeading},"Display name:"," ",null!==(a=null===e||void 0===e||null===(o=e._embedded)||void 0===o||null===(r=o.from_user)||void 0===r?void 0:r.display_name)&&void 0!==a?a:null===e||void 0===e||null===(c=e._embedded)||void 0===c||null===(u=c.from_user)||void 0===u?void 0:u.name)),l.a.createElement(j.a,null,l.a.createElement(x.a,null,"Body: ".concat(JSON.stringify(e))," ")))})),l.a.createElement("div",{className:i.footer},l.a.createElement(y.a,{onClick:function(){return a([])},className:i.clearButton},"Clear Events"))):l.a.createElement(g.a,{to:"/"})},I=n(235),_=n(237),J=n(231),H=n(239),L=n(213),P=n(236),z=n(125),R=n.n(z),T=Object(E.a)((function(e){return{alignItemsAndJustifyContent:{display:"flex","flex-direction":"column",alignItems:"center",justifyContent:"center","margin-top":"-78px",height:"100vh"},linearProgress:{height:"5px",width:"200px",top:"50%",left:"50%",position:"absolute","margin-left":"-100px"},root:{gridColumn:2,backgroundColor:e.palette.background.paper},sentMessageComponent:{"align-self":"flex-end",display:"flex"},box:{display:"flex",height:"100vh","flex-direction":"column","background-color":"#f6f0d791"},link:{"margin-top":"15px",display:"block"},conversations:{overflow:"hidden"},messagesEndDiv:{display:"inline-block",float:"left"},username:{padding:"5px 7px"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},topnav:{"background-color":"#333",overflow:"hidden"},navItem:{float:"left",color:"#f2f2f2","text-align":"center",padding:"14px 16px","text-decoration":"none","font-size":"17px"}}}));var W,D=function(e){var t=e.nexmoApp,n=e.setNexmoApp,a=T(),r=Object(o.useState)(!1),i=Object(d.a)(r,2),c=i[0],u=i[1],m=Object(o.useState)(""),s=Object(d.a)(m,2),p=s[0],f=s[1];return t.me?l.a.createElement(g.a,{to:"/events"}):l.a.createElement(I.a,null,c?null:l.a.createElement(_.a,{className:a.alignItemsAndJustifyContent},l.a.createElement("h1",null,"Please, Login"),l.a.createElement(J.a,{component:"form",className:a.root},l.a.createElement(H.a,{className:a.input,placeholder:"Login Token",inputProps:{"aria-label":"login token"},onChange:function(e){f(e.target.value)}}),l.a.createElement(L.a,{color:"primary",type:"submit",className:a.iconButton,"aria-label":"directions",onClick:function(){u(!0),t.login(p).then((function(e){u(!1),window.nexmoApp=e,n(e),function(e){e.on("member:call",(function(t,n){!function(e,t){var n=t.conversation;n.on("member:left",n.id,(function(t,a){t.userId===e.me.id&&n.releaseGroup(n.id)}))}(e,n)}))}(e)}))}},l.a.createElement(R.a,null)))),c?l.a.createElement(_.a,{className:a.alignItemsAndJustifyContent},l.a.createElement(P.a,{className:a.linearProgress})):null)},M=(n(209),h.a.div(W||(W=Object(p.a)(["\n  height: 100vh;\n"]))));var F=function(){var e=Object(o.useState)(b),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(o.useState)([]),i=Object(d.a)(r,2),u=i[0],p=i[1],h=Object(o.useState)(void 0),v=Object(d.a)(h,2),E=v[0],x=v[1],y=function(e){var t=Object(o.useState)(null),n=Object(d.a)(t,2),a=n[0],l=n[1];return Object(o.useEffect)((function(){var t,n;(null===e||void 0===e||null===(t=e.session)||void 0===t||null===(n=t.connection)||void 0===n?void 0:n.io)&&e.session.connection.io.on("packet",function(){var e=Object(s.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(2===t.type){e.next=2;break}return e.abrupt("return");case 2:if("echo"!==t.data[0]){e.next=4;break}return e.abrupt("return");case 4:(n=t.data[1]).type=t.data[0],l(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})),a}(n);return Object(o.useEffect)((function(){var e;(e=y)&&p((function(t){return[].concat(Object(c.a)(t),[e])}))}),[y]),l.a.createElement(f.a,null,l.a.createElement(M,null,l.a.createElement(g.d,null,l.a.createElement(g.b,{path:"/login"},l.a.createElement(D,{nexmoApp:n,setNexmoApp:a})),l.a.createElement(g.b,{path:"/events"},l.a.createElement(A,{nexmoApp:n,events:u,setEvents:p,outboundCall:E,setOutboundCall:x})),l.a.createElement(g.b,{path:"/"},l.a.createElement(D,{nexmoApp:n,setNexmoApp:a})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[135,1,2]]]);
//# sourceMappingURL=main.d512d000.chunk.js.map