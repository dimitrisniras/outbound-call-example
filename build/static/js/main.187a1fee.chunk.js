(this.webpackJsonpchathack=this.webpackJsonpchathack||[]).push([[0],{135:function(e,t,n){e.exports=n(211)},140:function(e,t,n){},165:function(e,t){},209:function(e,t,n){},211:function(e,t,n){"use strict";n.r(t);var a,o=n(0),l=n.n(o),r=n(22),i=n.n(r),c=(n(140),n(126)),u=n(14),s=n.n(u),d=n(117),m=n(23),p=n(59),f=n(36),g=n(10),v=n(60),h=n(118),b=new(n.n(h).a)({debug:!1}),E=n(228),x=n(229),y=n(230),k=n(238),O=n(232),C=n(233),w=n(234),j=n(124),N=n.n(j),B=v.a.div(a||(a=Object(p.a)(["\n  height: calc(100% - 56px);\n  overflow-y: overlay;\n"]))),S=Object(E.a)((function(e){return{root:{gridColumn:1,backgroundColor:e.palette.background.paper},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"10%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,paddingLeft:"15px",paddingRight:"15px"},footer:{position:"fixed",left:0,bottom:0,width:"100%","text-align":"left","border-style":"solid","border-color":"grey","border-width":"medium"},clearButton:{width:"100%"},header:{position:"fixed",right:5,top:5,width:"30%","text-align":"center","border-width":"medium"},callButton:{width:"30%","background-color":"dodgerBlue"},hangupButton:{width:"100%","background-color":"red"},input:{height:30,margin:12,borderWidth:1}}})),A=function(e){var t=e.nexmoApp,n=e.events,a=e.setEvents,r=e.outboundCall,i=e.setOutboundCall,c=S(),u=Object(o.useState)(""),s=Object(m.a)(u,2),d=s[0],p=s[1];return t.me?l.a.createElement(B,null,l.a.createElement(x.a,{variant:"h4",gutterBottom:!0},t.me?"Hello ".concat(t.me.application.me.name):l.a.createElement(f.b,{to:"/"},"Login")),r?l.a.createElement("div",null):l.a.createElement("div",{className:c.header},l.a.createElement("input",{className:c.input,type:"text",value:d,onChange:function(e){p(e.target.value)}}),l.a.createElement(y.a,{onClick:function(){t.me.application.callServer(d).then((function(e){i(e)}))},className:c.callButton},"Call")),r?l.a.createElement("div",{className:c.header},l.a.createElement(y.a,{onClick:function(){r.hangUp().then((function(){i(void 0)}))},className:c.hangupButton},"Hangup Call")):l.a.createElement("div",null),n.map((function(e){var t,n,a,o,r,i,u;return l.a.createElement(k.a,{key:e.id+e.cid},l.a.createElement(O.a,{expandIcon:l.a.createElement(N.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},l.a.createElement(x.a,{className:c.heading},e.type),l.a.createElement(x.a,{className:c.secondaryHeading},"From: ",null===e||void 0===e||null===(t=e._embedded)||void 0===t||null===(n=t.from_member)||void 0===n?void 0:n.id),l.a.createElement(C.a,{orientation:"vertical",flexItem:!0}),l.a.createElement(x.a,{className:c.secondaryHeading},"Display name:"," ",null!==(a=null===e||void 0===e||null===(o=e._embedded)||void 0===o||null===(r=o.from_user)||void 0===r?void 0:r.display_name)&&void 0!==a?a:null===e||void 0===e||null===(i=e._embedded)||void 0===i||null===(u=i.from_user)||void 0===u?void 0:u.name)),l.a.createElement(w.a,null,l.a.createElement(x.a,null,"Body: ".concat(JSON.stringify(e))," ")))})),l.a.createElement("div",{className:c.footer},l.a.createElement(y.a,{onClick:function(){return a([])},className:c.clearButton},"Clear Events"))):l.a.createElement(g.a,{to:"/"})},I=n(235),_=n(237),J=n(231),H=n(239),L=n(213),P=n(236),z=n(125),R=n.n(z),T=Object(E.a)((function(e){return{alignItemsAndJustifyContent:{display:"flex","flex-direction":"column",alignItems:"center",justifyContent:"center","margin-top":"-78px",height:"100vh"},linearProgress:{height:"5px",width:"200px",top:"50%",left:"50%",position:"absolute","margin-left":"-100px"},root:{gridColumn:2,backgroundColor:e.palette.background.paper},sentMessageComponent:{"align-self":"flex-end",display:"flex"},box:{display:"flex",height:"100vh","flex-direction":"column","background-color":"#f6f0d791"},link:{"margin-top":"15px",display:"block"},conversations:{overflow:"hidden"},messagesEndDiv:{display:"inline-block",float:"left"},username:{padding:"5px 7px"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},topnav:{"background-color":"#333",overflow:"hidden"},navItem:{float:"left",color:"#f2f2f2","text-align":"center",padding:"14px 16px","text-decoration":"none","font-size":"17px"}}}));var W,D=function(e){var t=e.nexmoApp,n=e.setNexmoApp,a=e.setOutboundCall,r=T(),i=Object(o.useState)(!1),c=Object(m.a)(i,2),u=c[0],s=c[1],d=Object(o.useState)(""),p=Object(m.a)(d,2),f=p[0],v=p[1],h=function(e){e.on("member:call",(function(t,n){!function(e,t){var n=t.conversation;n.on("member:left",n.id,(function(t,o){t.userId===e.me.id&&(a(null),n.releaseGroup(n.id))}))}(e,n)}))};return t.me?l.a.createElement(g.a,{to:"/events"}):l.a.createElement(I.a,null,u?null:l.a.createElement(_.a,{className:r.alignItemsAndJustifyContent},l.a.createElement("h1",null,"Please, Login"),l.a.createElement(J.a,{component:"form",className:r.root},l.a.createElement(H.a,{className:r.input,placeholder:"Login Token",inputProps:{"aria-label":"login token"},onChange:function(e){v(e.target.value)}}),l.a.createElement(L.a,{color:"primary",type:"submit",className:r.iconButton,"aria-label":"directions",onClick:function(){s(!0),t.login(f).then((function(e){s(!1),window.nexmoApp=e,n(e),h(e)}))}},l.a.createElement(R.a,null)))),u?l.a.createElement(_.a,{className:r.alignItemsAndJustifyContent},l.a.createElement(P.a,{className:r.linearProgress})):null)},M=(n(209),v.a.div(W||(W=Object(p.a)(["\n  height: 100vh;\n"]))));var F=function(){var e=Object(o.useState)(b),t=Object(m.a)(e,2),n=t[0],a=t[1],r=Object(o.useState)([]),i=Object(m.a)(r,2),u=i[0],p=i[1],v=Object(o.useState)(void 0),h=Object(m.a)(v,2),E=h[0],x=h[1],y=function(e){var t=Object(o.useState)(null),n=Object(m.a)(t,2),a=n[0],l=n[1];return Object(o.useEffect)((function(){var t,n;(null===e||void 0===e||null===(t=e.session)||void 0===t||null===(n=t.connection)||void 0===n?void 0:n.io)&&e.session.connection.io.on("packet",function(){var e=Object(d.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(2===t.type){e.next=2;break}return e.abrupt("return");case 2:if("echo"!==t.data[0]){e.next=4;break}return e.abrupt("return");case 4:(n=t.data[1]).type=t.data[0],l(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})),a}(n);return Object(o.useEffect)((function(){var e;(e=y)&&p((function(t){return[].concat(Object(c.a)(t),[e])}))}),[y]),l.a.createElement(f.a,null,l.a.createElement(M,null,l.a.createElement(g.d,null,l.a.createElement(g.b,{path:"/login"},l.a.createElement(D,{nexmoApp:n,setNexmoApp:a,setOutboundCall:x})),l.a.createElement(g.b,{path:"/events"},l.a.createElement(A,{nexmoApp:n,events:u,setEvents:p,outboundCall:E,setOutboundCall:x})),l.a.createElement(g.b,{path:"/"},l.a.createElement(D,{nexmoApp:n,setNexmoApp:a,setOutboundCall:x})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[135,1,2]]]);
//# sourceMappingURL=main.187a1fee.chunk.js.map