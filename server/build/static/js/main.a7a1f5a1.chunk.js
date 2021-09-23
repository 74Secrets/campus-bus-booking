(this.webpackJsonpbooking=this.webpackJsonpbooking||[]).push([[0],{132:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(24),s=n.n(c),o=(n(65),n(4)),i=(n(66),n(19)),l=n(5),u=n.p+"static/media/admin.c477c120.svg",d=n.p+"static/media/student.6ad307b7.svg",b=n.p+"static/media/driver.c696520f.svg",j=n(0);function p(){var e=Object(l.f)();return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("p",{style:{fontFamily:"flamenco",fontSize:"24px",fontWeight:"bolder",margin:"15px"},className:"login-as",children:"Login As"}),Object(j.jsxs)("div",{className:"home",children:[Object(j.jsxs)("div",{className:"home-div",onClick:function(){return e.push("/user")},children:[Object(j.jsx)("h3",{style:{margin:0,marginBottom:"10px"},children:"Student"}),Object(j.jsx)("img",{src:d,alt:"Student",style:{height:"7rem",border:"none",outline:"none"}})]}),Object(j.jsxs)("div",{className:"home-div",onClick:function(){return e.push("/driver")},children:[Object(j.jsx)("h3",{style:{margin:0,marginBottom:"10px"},children:"Driver"}),Object(j.jsx)("img",{src:b,alt:"Driver",style:{height:"7rem",border:"none",colorAdjust:"#000",outline:"none"}})]}),Object(j.jsxs)("div",{className:"home-div",onClick:function(){return e.push("/admin")},children:[Object(j.jsx)("h3",{style:{margin:0,marginBottom:"10px"},children:"Admin"}),Object(j.jsx)("img",{src:u,alt:"Admin",style:{height:"7rem",border:"none",colorAdjust:"#000",outline:"none"}})]})]})]})}var f=n(6),h=n.n(f),m=n(7),x=n(3),g=(n(35),function(e){var t=e.name,n=e.matric,a=e.email,r=e.password,c=e.setName,s=e.setEmail,o=e.setMatric,i=e.setPassword,l=e.signUp,u=e.isSignUpEmpty;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{type:"text",className:"input",value:t,onChange:function(e){return c(e.target.value)},placeholder:"Name"}),Object(j.jsx)("input",{type:"text",className:"input",value:n,onChange:function(e){return o(e.target.value)},placeholder:"Matric Number"}),Object(j.jsx)("input",{type:"email",className:"input",value:a,onChange:function(e){return s(e.target.value)},placeholder:"Email"}),Object(j.jsx)("input",{type:"password",className:"input",value:r,onChange:function(e){return i(e.target.value)},placeholder:"Password"}),Object(j.jsx)("button",{className:"button login-btn",onClick:l,style:{opacity:u?"0.6":"1"},children:"Sign Up"})]})}),O=function(e){var t=e.id,n=e.password,a=e.setId,r=e.setPassword,c=e.login,s=e.isLoginEmpty;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{type:"text",className:"input",value:t,onChange:function(e){return a(e.target.value)},placeholder:"Email or Matric No",required:!0}),Object(j.jsx)("input",{type:"password",className:"input",value:n,onChange:function(e){return r(e.target.value)},placeholder:"Password",required:!0}),Object(j.jsx)("button",{className:"button login-btn",onClick:c,style:{opacity:s?"0.6":"1"},children:"Login"})]})},v=n(14),y=n.n(v),k=function(e,t,n){var a;return function(){var r=Object(m.a)(h.a.mark((function r(){var c,s,o,i;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.auth){r.next=9;break}r.t0=t.type,r.next="user"===r.t0?4:"driver"===r.t0?6:8;break;case 4:return a=localStorage.getItem("token"),r.abrupt("break",9);case 6:return a=localStorage.getItem("driverToken"),r.abrupt("break",9);case 8:a="";case 9:r.t1=e.method,r.next="post"===r.t1?12:"get"===r.t1?27:41;break;case 12:return r.prev=12,n(!0),r.next=16,y.a.post(e.url,e.body,t.auth?{headers:{Authorization:"Bearer ".concat(a)}}:null);case 16:return c=r.sent,n(!1),r.abrupt("return",{data:c.data,status:c.status});case 21:throw r.prev=21,r.t2=r.catch(12),n(!1),s=r.t2.message.split(" ")[5],new Error(s);case 26:return r.abrupt("break",42);case 27:return r.prev=27,n(!0),r.next=31,y.a.get(e.url,t.auth?{headers:{Authorization:"Bearer ".concat(a)}}:null);case 31:return o=r.sent,n(!1),r.abrupt("return",{data:o.data,status:o.status});case 36:throw r.prev=36,r.t3=r.catch(27),n(!1),i=r.t3.message.split(" ")[5],new Error(+i);case 41:return r.abrupt("return",null);case 42:case"end":return r.stop()}}),r,null,[[12,21],[27,36]])})));return function(){return r.apply(this,arguments)}}()};function S(e){var t=e.loading,n=Object(a.useState)(""),r=Object(o.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(""),u=Object(o.a)(i,2),d=u[0],b=u[1],p=Object(a.useState)(""),f=Object(o.a)(p,2),v=f[0],y=f[1],S=Object(a.useState)(""),w=Object(o.a)(S,2),N=w[0],C=w[1],I=Object(a.useState)(""),B=Object(o.a)(I,2),F=B[0],D=B[1],T=Object(a.useState)(!0),_=Object(o.a)(T,2),z=_[0],A=_[1],E=Object(a.useState)(!0),L=Object(o.a)(E,2),W=L[0],P=L[1],R=Object(a.useState)(!0),J=Object(o.a)(R,2),U=J[0],M=J[1],H=Object(l.f)();Object(a.useEffect)((function(){P(""===c||""===d)}),[c,d]),Object(a.useEffect)((function(){M(""===v||""===d||""===F||""===N)}),[v,F,N,d]),Object(a.useEffect)((function(){localStorage.getItem("token")&&H.push("/user/dashboard")}),[H]);var V=k({url:"https://bookbus.herokuapp.com/user/login",method:"post",body:{id:c,password:d}},{auth:!1},t),q=function(){var e=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!W){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,V();case 5:200===(t=e.sent).status&&(x.b.success("Logged in successfully!!",{autoClose:1e3}),localStorage.setItem("token",t.data),H.push("/user/dashboard")),e.next=17;break;case 9:e.prev=9,e.t0=e.catch(2),e.t1=e.t0.message,e.next="400"===e.t1?14:16;break;case 14:return x.b.error("Invalid Login Details",{position:"top-right",autoClose:3e3,hideProgressBar:"false"}),e.abrupt("break",17);case 16:x.b.error("Something went wrong");case 17:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),Y=k({url:"https://bookbus.herokuapp.com/user/register",method:"post",body:{name:v,email:F,password:d,matric_number:N}},{auth:!1},t),K=function(){var e=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!U){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,Y();case 5:201===e.sent.status&&(x.b.success("Account created Successfully",{autoClose:1e3}),A(!0)),e.next=17;break;case 9:e.prev=9,e.t0=e.catch(2),e.t1=e.t0.message,e.next="400"===e.t1?14:16;break;case 14:return x.b.error("User already exist",{position:"top-right",autoClose:3e3,hideProgressBar:"false"}),e.abrupt("break",17);case 16:x.b.error("Something went wrong");case 17:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x.a,{}),Object(j.jsx)("div",{className:"container",style:{},children:Object(j.jsxs)("div",{style:{width:"100%"},children:[Object(j.jsx)("h3",{style:{color:"#444",fontFamily:"Buenard",fontSize:"24px",fontWeight:"lighter"},children:z?"Login":"Sign Up"}),Object(j.jsxs)("form",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#fff",padding:"20px",paddingTop:0,alignSelf:"center",borderRadius:"5px",margin:"auto"},children:[Object(j.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"auto",alignSelf:"flex-end",marginTop:0,marginBottom:"10px",background:"#f4f4f4",height:"fit-content",padding:0},children:[Object(j.jsx)("button",{className:"button user-login",style:{borderTopStyle:z?"solid":"none",borderWidth:"3px",borderColor:"#50c878",background:z?"#fff":"#f4f4f4 ",opacity:z?"1":"0.5"},onClick:function(){return A(!0)},children:"Login"}),Object(j.jsx)("button",{className:"button user-login",onClick:function(){return A(!1)},style:{borderTopStyle:z?"none":"solid",borderWidth:"3px",borderColor:"#50c878",background:z?"#f4f4f4 ":"#fff",opacity:z?"0.5":"1"},children:"Sign Up"})]}),z?Object(j.jsx)(O,{id:c,password:d,setId:s,setPassword:b,login:q,isLoginEmpty:W}):Object(j.jsx)(g,{name:v,matric:N,password:d,email:F,setName:y,setEmail:D,setMatric:C,setPassword:b,signUp:K,isSignUpEmpty:U})]})]})})]})}var w=n(17),N=n(18),C=n.p+"static/media/signin.c94a6b0c.svg",I=n(13),B=n.n(I),F=n.p+"static/media/profile.a8d98262.svg";function D(e){var t=e.setShowNavbar,n=e.fundWallet,a=(e.showNavbar,Object(l.f)()),r=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):"",c=r.name,s=r.matric_number,o=r.email;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{style:{borderStyle:"dashed",padding:"10px",borderWidth:"5px",borderColor:"#fff"},children:[Object(j.jsx)("img",{src:F,alt:"Profile",style:{height:"7rem",border:"none",outline:"none"}}),Object(j.jsxs)("div",{style:{color:"#fff",fontSize:"20px",fontFamily:"Arapey"},children:[Object(j.jsxs)("div",{children:["Name: ",c]}),Object(j.jsxs)("div",{children:["Email: ",o]}),Object(j.jsxs)("div",{children:["Matric Number: ",s]})]})]}),Object(j.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingBottom:"20px"},children:[Object(j.jsx)("button",{className:"button green",onClick:function(){return n()},children:"Fund Wallet"}),Object(j.jsx)("button",{className:"button red",onClick:function(){B.a.fire({title:"Do you want to Logout?",showCancelButton:!0,confirmButtonText:"Yes"}).then((function(e){e.isConfirmed&&(t(!1),a.push("/"),localStorage.clear(),window.location.reload())}))},children:"Logout"})]})]})}function T(e){var t=e.setShowNavbar,n=(e.showNavbar,localStorage.getItem("busId")),a=Object(l.f)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{style:{borderStyle:"dashed",padding:"10px",borderWidth:"5px",borderColor:"#fff"},children:[Object(j.jsx)("img",{src:F,alt:"Profile",style:{height:"7rem",border:"none",outline:"none"}}),Object(j.jsx)("div",{style:{color:"#fff",fontSize:"20px",fontFamily:"Arapey"},children:Object(j.jsxs)("div",{children:["Bus Number: 0",n]})})]}),Object(j.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingBottom:"20px"},children:Object(j.jsx)("button",{className:"button red",onClick:function(){B.a.fire({title:"Do you want to Logout?",showCancelButton:!0,confirmButtonText:"Yes"}).then((function(e){e.isConfirmed&&(t(!1),a.push("/"),localStorage.clear(),window.location.reload())}))},children:"Logout"})})]})}var _=function(e){var t=e.showNavbar,n=e.setShowNavbar,a=e.fundWallet;return Object(j.jsx)("div",{style:{position:"absolute",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"rgb(38, 46, 59)",top:0,zIndex:"44",right:"0",width:"100%"},className:t?"show-nav":"hide-nav",children:localStorage.getItem("token")?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(D,{setShowNavbar:n,showNavbar:t,fundWallet:a})}):localStorage.getItem("driverToken")?Object(j.jsx)(T,{setShowNavbar:n,showNavbar:t}):Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{style:{marginTop:"-40px"},children:[Object(j.jsx)("img",{src:C,alt:"Sign In",className:"nav-image",style:{border:"none",outline:"none",alignSelf:"center"}}),Object(j.jsx)("div",{style:{color:"#fff",margin:"10px",fontSize:"20px"},children:"Sign Up or Login to get started"}),Object(j.jsx)("button",{className:"button red",style:{marginBottom:"20px"},onClick:function(){return n(!1)},children:"Get Started"})]})})})};function z(e){var t=e.setShowNavbar,n=e.showNavbar,a=e.wallet,r=e.fundWallet;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("div",{style:{position:"absolute",height:"100%",width:"100vw",backgroundColor:"#50c878",display:"flex",alignItems:"center",justifyContent:"flex-end"},children:localStorage.getItem("token")?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(w.a,{icon:N.c,size:"2x",style:{marginRight:"5px",color:"#fff"}}),Object(j.jsxs)("div",{style:{color:"#fff",fontFamily:"arapey",marginRight:"10px",fontSize:"20px",fontWeight:"600"},children:["\u20a6",a]})]}):null}),Object(j.jsx)("button",{onClick:function(){return t(!n)},style:{background:"none",border:"none",outline:"none",marginLeft:"20px",zIndex:"47"},className:"nav-icon",children:n?Object(j.jsx)(w.a,{icon:N.d,size:"2x",style:{}}):Object(j.jsx)(w.a,{icon:N.a,size:"2x",style:{}})})]}),Object(j.jsx)(_,{showNavbar:n,setShowNavbar:t,fundWallet:r})]})}var A=n(55),E=n.n(A);function L(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)(E.a,{type:"TailSpin",color:"#007fff",height:50})})})}var W=n(26),P=n(56),R=n.n(P);function J(){var e=JSON.parse(localStorage.getItem("ticket")),t=JSON.parse(localStorage.getItem("data"));return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",fontFamily:"Arapey",fontSize:"18px",background:"#fff",padding:"20px",height:"60vh",color:"#666"},className:"ticket",children:[Object(j.jsx)("div",{style:{fontSize:"22px",fontWeight:"bold"},children:"Ticket"}),Object(j.jsxs)("div",{children:["Name: ",t.name]}),Object(j.jsxs)("div",{children:["Matric Number: ",t.matric_number]}),Object(j.jsxs)("div",{children:["Ticket ID: ",e.code]}),Object(j.jsxs)("div",{children:["Bus ID: ",e.bus_id]}),Object(j.jsxs)("div",{children:["Seat: ",e.seat]}),Object(j.jsxs)("div",{children:["Destination: ",e.destination]}),Object(j.jsxs)("div",{children:["Departure Time: ",e.departure_time]}),e.code?Object(j.jsx)(R.a,{value:e.code}):null]})})}var U=n.p+"static/media/pay.e333a550.svg",M=n(15),H=n.n(M),V=n(27),q=n.n(V),Y=n(28),K=n.n(Y),G=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):"",Q=((new Date).getTime().toString(),G.email,function(e){var t=e.handleChange,n=e.loading,a=function(e){return H.a.extend(q.a),H.a.extend(K.a),H()(e).tz("Africa/Lagos").format("hh:mm A")},r=(Object(l.f)(),localStorage.getItem("token")),c=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):"",s={reference:(new Date).getTime().toString(),email:c.email,amount:5e3,publicKey:"pk_test_0a4093b99f32878ae511ab0f19d32710c16702f8"},o=function(e){(function(){var r=Object(m.a)(h.a.mark((function r(){var c;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n(!0),r.next=4,y.a.post("https://bookbus.herokuapp.com/user/book/".concat(localStorage.getItem("bus_id")),{reference_id:e.reference},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 4:c=r.sent,localStorage.setItem("ticket",JSON.stringify({bus_id:c.data.bus_id,code:c.data.code,seat:c.data.seat,destination:c.data.destination,departure_time:a(c.data.departure_time)})),n(!1),t("ticket"),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(0),n(!1),x.b.error("An error occured");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(){return r.apply(this,arguments)}})()()},i=function(){},u=Object(W.a)(s);return Object(j.jsxs)("div",{style:{background:"#fff",padding:"20px",borderRadius:"10px"},className:"pay-div",children:[Object(j.jsx)("img",{src:U,alt:"pay",style:{height:"7rem",border:"none",outline:"none"}}),Object(j.jsx)("p",{style:{fontFamily:"flamenco",fontSize:"20px"},children:"Pay from?"}),Object(j.jsxs)("div",{style:Z,children:[Object(j.jsx)("button",{className:"button book",onClick:function(){u(o,i)},children:"Bank"}),Object(j.jsx)("button",{className:"button book",onClick:function(){return B.a.fire({text:"You will be charged #50 from your wallet",showCancelButton:!0,focusConfirm:!1,confirmButtonText:"Confirm"}).then(function(){var e=Object(m.a)(h.a.mark((function e(c){var s,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.isConfirmed){e.next=23;break}return n(!0),e.prev=2,e.next=5,y.a.post("https://bookbus.herokuapp.com/user/book/".concat(localStorage.getItem("bus_id")),{chargeType:"wallet"},{headers:{Authorization:"Bearer ".concat(r)}});case 5:s=e.sent,n(!1),localStorage.removeItem("bus_id"),localStorage.setItem("ticket",JSON.stringify({bus_id:s.data.bus_id,code:s.data.code,seat:s.data.seat,destination:s.data.destination,departure_time:a(s.data.departure_time)})),x.b.success("Payment Successful"),t("ticket"),e.next=23;break;case 13:e.prev=13,e.t0=e.catch(2),n(!1),o=e.t0.message.split(" ")[5],e.t1=o,e.next="406"===e.t1?20:22;break;case 20:return x.b.error("Insufficient funds"),e.abrupt("break",23);case 22:x.b.error("Network Error");case 23:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}())},children:"Wallet"})]})]})});function X(e){var t=e.loading,n=Object(a.useState)("default"),r=Object(o.a)(n,2),c=r[0],s=r[1],i=Object(l.f)();return Object(a.useEffect)((function(){localStorage.getItem("bus_id")||i.push("/user/dashboard")}),[i]),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(x.a,{}),"default"===c?Object(j.jsx)(Q,{handleChange:function(e){s(e)},loading:t}):Object(j.jsx)(J,{})]})}var Z={display:"flex",flexDirection:"column",width:"100%",alignItems:"center",justifyContent:"center"};function $(e){var t=e.loading,n=Object(a.useState)(""),r=Object(o.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(""),u=Object(o.a)(i,2),d=u[0],b=u[1],p=Object(a.useState)(!0),f=Object(o.a)(p,2),g=f[0],O=f[1],v=Object(l.f)();Object(a.useEffect)((function(){O(""===c||""===d)}),[c,d]);var y=k({url:"https://bookbus.herokuapp.com/bus/driver/login",method:"post",body:{username:c,password:d}},{auth:!1},t),S=function(){var e=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,y();case 5:200===(t=e.sent).status&&(localStorage.setItem("driverToken",t.data.token),localStorage.setItem("busId",t.data.bus_id),v.push("/driver/dashboard"),x.b.success("Logged in successfully!!",{autoClose:1e3})),e.next=17;break;case 9:e.prev=9,e.t0=e.catch(2),e.t1=e.t0.message,e.next="400"===e.t1?14:16;break;case 14:return x.b.error("Invalid Login Details",{position:"top-right",autoClose:3e3,hideProgressBar:"false"}),e.abrupt("break",17);case 16:x.b.error("Something went wrong");case 17:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){localStorage.getItem("driverToken")&&v.push("/driver/dashboard")}),[v]),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(x.a,{}),Object(j.jsxs)("form",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#fff",padding:"20px",alignSelf:"center",borderRadius:"5px",margin:"auto"},children:[Object(j.jsx)("div",{style:{fontSize:"25px",color:"#444",fontFamily:"Arapey",marginBottom:"5px"},children:"Login"}),Object(j.jsx)("input",{type:"text",className:"input",value:c,onChange:function(e){return t=e.target.value,void s(t);var t},placeholder:"Username",required:!0}),Object(j.jsx)("input",{type:"password",className:"input",value:d,onChange:function(e){return t=e.target.value,void b(t);var t},placeholder:"password",required:!0}),Object(j.jsx)("button",{className:"button login-btn",onClick:function(){return S()},style:{opacity:g?"0.6":"1"},children:"Login"})]})]})}n(51),n(52);var ee=n(57),te=n.n(ee);function ne(e){var t=e.loading,n=Object(a.useState)(""),r=Object(o.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(!1),l=Object(o.a)(i,2),u=l[0],d=l[1],b=localStorage.getItem("driverToken");var p=function(){var e=Object(m.a)(h.a.mark((function e(n){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!0),e.prev=1,e.next=4,y.a.get("https://bookbus.herokuapp.com/bus/ticket/verify/".concat(n),{headers:{Authorization:"Bearer ".concat(b)}});case 4:200===(a=e.sent).status&&(t(!1),B.a.fire({title:"<strong>Verified</strong>",icon:"success",html:"\n\t\t\t\t<div>Matric Number: ".concat(a.data.matric_number,"</div>\n\t\t\t\t<div>Ticket ID: ").concat(a.data.code,"</div>\n\t\t\t\t\n\t\t\t\t<div>Seat: ").concat(a.data.seat,"</div>\n\t\t\t\t<div>Destination: ").concat(a.data.destination,"</div>\n\t\t\t\t<div>Departure Time: ").concat(a.data.departure_time,"</div>"),showCloseButton:!1,showCancelButton:!0}).then((function(e){e.isConfirmed&&d(!1)}))),e.next=18;break;case 8:e.prev=8,e.t0=e.catch(1),t(!1),r=e.t0.message.split(" ")[5],e.t1=r,e.next="404"===e.t1?15:17;break;case 15:return x.b.error("Ticket Not Valid",{position:"top-right",autoClose:3e3,hideProgressBar:"false"}),e.abrupt("break",18);case 17:x.b.error("Network Error");case 18:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(x.a,{}),u?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(te.a,{delay:500,style:{height:240,width:320},onError:function(e){console.error(e)},onScan:function(e){e&&p(e)}})}):Object(j.jsxs)("div",{className:"home-div",children:[Object(j.jsx)("div",{style:{fontSize:"22px",fontFamily:"Flamenco",color:"#444",marginBottom:"10px",fontWeight:"bold"},children:"Verify Ticket"}),Object(j.jsx)("input",{type:"text",maxLength:"4",value:c,onChange:function(e){return t=e.target.value,void s(t);var t},className:"input",placeholder:"Enter Ticket ID"}),Object(j.jsx)("button",{className:"input button green",onClick:function(){return p(c)},children:"Verify"}),Object(j.jsx)("div",{style:{fontSize:"25px",marginTop:"16px",fontWeight:"bold",color:"#444"},children:"Or"}),Object(j.jsx)("button",{className:"button green",onClick:function(){return d(!0)},children:"Scan"})]})]})}function ae(e){var t=e.loading,n=Object(a.useState)(!1),r=Object(o.a)(n,2),c=r[0],s=r[1],i=Object(l.f)();return Object(j.jsx)("div",{className:"container",children:c?Object(j.jsx)(ne,{loading:t}):Object(j.jsxs)("div",{className:"home-div",children:[Object(j.jsx)("button",{className:"input button green",onClick:function(){return s(!0)},children:"Verify Ticket"}),Object(j.jsx)("button",{className:"input button green",onClick:function(){return i.push("/driver/newtrip")},children:"Create New Trip"}),Object(j.jsx)("button",{className:"input button green",children:"Suspend Current Trip"})]})})}var re=n(59),ce=n.n(re),se=n(60),oe=n.n(se);function ie(e){var t=e.loading,n=Object(a.useState)(new Date(Date.now())),r=Object(o.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)("Hostel"),u=Object(o.a)(i,2),d=u[0],b=u[1],p=Object(l.f)(),f=Object(a.useCallback)((function(e){var t=e.label;b((function(e){return t}))}),[]),g=k({url:"https://bookbus.herokuapp.com/bus/driver/status",method:"post",body:{destination:d,departure_time:c}},{auth:!0,type:"driver"},t),O=Object(a.useCallback)(Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g();case 3:201===e.sent.status&&x.b.success("Trip Created Successfully"),e.next=19;break;case 7:e.prev=7,e.t0=e.catch(0),e.t1=e.t0.message,e.next="400"===e.t1?12:"401"===e.t1?14:18;break;case 12:return x.b.error("You have an active trip",{position:"top-right",autoClose:3e3,hideProgressBar:"false"}),e.abrupt("break",19);case 14:return x.b.error("Session Expired"),p.push("/driver"),localStorage.clear(),e.abrupt("break",19);case 18:x.b.error("An error occured");case 19:case"end":return e.stop()}}),e,null,[[0,7]])}))),[p,g]);return Object(a.useEffect)((function(){""!==d&&""!==c||x.b.error("Fill out all fields")}),[O,c,d]),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(x.a,{}),Object(j.jsx)("h3",{style:{fontSize:"25px",color:"#444"},children:"New Trip"}),Object(j.jsxs)("div",{style:{fontFamily:"arapey",color:"#444"},className:"home-div",children:[Object(j.jsx)("p",{style:{margin:"3px",fontSize:"22px"},children:"Destination"}),Object(j.jsx)(oe.a,{options:["Hostel","Campus"],onChange:f,value:"Hostel",className:"dropdown"}),Object(j.jsx)("p",{style:{marginBottom:"3px",marginLeft:"3px",fontSize:"22px"},children:"Departure Time"}),Object(j.jsx)(ce.a,{options:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",minDate:new Date(Date.now()),defaultDate:c},className:"input flatpickr",onChange:function(e){s(e)},style:{width:"90%"}}),Object(j.jsx)("button",{className:"button green ",style:{width:"90%"},onClick:O,children:"Create Trip"})]})]})}function le(e){var t=e.loading,n=Object(a.useState)(""),r=Object(o.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(!0),u=Object(o.a)(i,2),d=u[0],b=u[1],p=Object(l.f)();Object(a.useEffect)((function(){b(""===c)}),[c]);var f=k({url:"https://bookbus.herokuapp.com/bus/admin/login",method:"post",body:{pin:c}},{auth:!1},t),g=function(){var e=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,f();case 5:200===(t=e.sent).status&&(console.log(t.data),p.push("/admin/dashboard"),x.b.success("Logged in successfully!!",{autoClose:1e3})),e.next=17;break;case 9:e.prev=9,e.t0=e.catch(2),e.t1=e.t0.message,e.next="400"===e.t1?14:16;break;case 14:return x.b.error("Invalid Pin",{position:"top-right",autoClose:3e3,hideProgressBar:"false"}),e.abrupt("break",17);case 16:x.b.error("Something went wrong");case 17:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(x.a,{}),Object(j.jsxs)("form",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#fff",padding:"20px",alignSelf:"center",borderRadius:"5px",margin:"auto"},children:[Object(j.jsx)("div",{style:{fontSize:"25px",color:"#444",fontFamily:"Arapey",marginBottom:"5px"},children:"Login"}),Object(j.jsx)("input",{type:"password",className:"input",value:c,onChange:function(e){return s(e.target.value)},placeholder:"Secret Pin",required:!0}),Object(j.jsx)("button",{className:"button login-btn",onClick:function(){return g()},style:{opacity:d?"0.6":"1"},children:"Login"})]})]})}var ue=n.p+"static/media/empty.f5635653.svg";function de(e){var t=e.amount,n=e.loading,r=e.setFund,c=JSON.parse(localStorage.getItem("data")),s=Object(W.a)({reference:(new Date).getTime().toString(),email:c.email,amount:t,publicKey:"pk_test_0a4093b99f32878ae511ab0f19d32710c16702f8"});Object(a.useEffect)((function(){return function(){return r(!1)}}),[r]);return s((function(e){n(!0),function(){var t=Object(m.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.post("https://bookbus.herokuapp.com/user/wallet/fund",{reference_id:e.reference},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:n(!1),window.location.reload(),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),n(!1),window.location.reload();case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()()}),(function(){n(!1),r(!1),window.location.reload()})),Object(j.jsx)("div",{children:n(!0)})}function be(e){var t=e.loading,n=e.setWallet,r=e.fund,c=e.setFund,s=e.amount,i=Object(a.useState)([]),u=Object(o.a)(i,2),d=u[0],b=u[1],p=Object(a.useState)(!0),f=Object(o.a)(p,2),g=f[0],O=f[1],v=Object(a.useState)(!1),y=Object(o.a)(v,2),S=y[0],C=y[1],I=k({url:"https://bookbus.herokuapp.com/user",method:"get"},{auth:!0,type:"user"},t),B=k({url:"https://bookbus.herokuapp.com/user/bus/Hostel",method:"get"},{auth:!0,type:"user"},t),F=k({url:"https://bookbus.herokuapp.com/user/bus/Campus",method:"get"},{auth:!0,type:"user"},t),D=Object(l.f)(),T=Object(a.useCallback)(function(){var e=Object(m.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"hostel"!==t){e.next=7;break}return e.next=4,B();case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,F();case 9:e.t0=e.sent;case 10:200===(n=e.t0).status&&(b(n.data),O("hostel"===t),n.data.ticket?C(!0):C(!1)),e.next=24;break;case 14:e.prev=14,e.t1=e.catch(0),e.t2=e.t1.message,e.next="401"===e.t2?19:23;break;case 19:return x.b.error("Session Expired"),D.push("/user"),localStorage.clear(),e.abrupt("break",24);case 23:x.b.error("An error occured");case 24:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),[F,B,D]),_=Object(a.useCallback)(Object(m.a)(h.a.mark((function e(){var t,a,r,c,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I();case 3:t=e.sent,a=t.data,r=a.name,c=a.email,s=a.matric_number,localStorage.setItem("data",JSON.stringify({name:r,email:c,matric_number:s})),T("hostel"),n(t.data.wallet),e.next=20;break;case 10:e.prev=10,e.t0=e.catch(0),e.t1=e.t0.message,e.next="401"===e.t1?15:19;break;case 15:return x.b.error("Session Expired"),D.push("/user"),localStorage.clear(),e.abrupt("break",20);case 19:x.b.error("An error occured");case 20:case"end":return e.stop()}}),e,null,[[0,10]])}))),[I,T,n,D]);Object(a.useEffect)((function(){_()}),[]);var z=function(e){return H.a.extend(q.a),H.a.extend(K.a),H()(e).tz("Africa/Lagos").format("hh:mm A")};return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{style:{fontSize:"25px",alignSelf:"flex-start",marginLeft:"10px",fontWeight:"bold",color:"#444"},children:["Welcome"," ",localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")).name.split(" ")[0]:"Anonymous"]}),Object(j.jsx)("div",{style:{fontSize:"22px",fontFamily:"flamenco",padding:"20px"},children:"Where are you going to?"}),Object(j.jsxs)("div",{style:{display:"flex",alignSelf:"flex-end",marginRight:"20px",background:"#fff",borderRadius:"47%"},children:[Object(j.jsx)("button",{style:g?je:pe,onClick:function(){return T("hostel")},children:"Hostel"}),Object(j.jsx)("button",{style:g?pe:je,onClick:function(){return T("campus")},children:"Campus"})]}),r?Object(j.jsx)(de,{amount:s,loading:t,setFund:c}):S?Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"home",children:d[Object.keys(d)[0]]?Object(j.jsxs)("div",{className:"dashboard-div",children:[Object(j.jsx)("div",{style:{alignSelf:"flex-end",backgroundColor:"#b3f1cb",color:"#50c878",padding:"5px",fontFamily:"arapey"},children:"Booked"}),Object(j.jsxs)("div",{style:{height:"150px",width:"150px",borderRadius:"50%",background:"#b3f1cb",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},className:"",children:[Object(j.jsx)(w.a,{icon:N.b,size:"lg",style:{color:"#50c878"}}),Object(j.jsxs)("b",{style:{color:"#fff",fontSize:"2rem"},children:["0",d[Object.keys(d)[0]].bus_id]})]}),Object(j.jsxs)("p",{style:{fontFamily:"arapey",color:"#444"},children:["Departure Time:"," ",d[Object.keys(d)[0]].departure_time?z(d[Object.keys(d)[0]].departure_time):null]}),Object(j.jsx)("button",{className:"button book",onClick:function(){localStorage.setItem("ticket",JSON.stringify({bus_id:d[Object.keys(d)[0]].bus_id,code:d.ticket.code,seat:d.ticket.seat,destination:d[Object.keys(d)[0]].destination,departure_time:z(d[Object.keys(d)[0]].departure_time)})),D.push("/user/ticket")},children:"View Ticket"})]}):null})}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"home",children:Array.isArray(d)&&0!==d.length?d.map((function(e,t){return Object(j.jsxs)("div",{className:"dashboard-div",children:[Object(j.jsxs)("div",{style:{height:"150px",width:"150px",borderRadius:"50%",background:"#b3f1cb",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},className:"",children:[Object(j.jsx)(w.a,{icon:N.b,size:"lg",style:{color:"#50c878"}}),Object(j.jsxs)("b",{style:{color:"#fff",fontSize:"2rem"},children:["0",e.bus_id]})]}),Object(j.jsxs)("p",{style:{fontFamily:"arapey",color:"#444"},children:["Departure Time:"," ",e.departure_time?z(e.departure_time):null]}),Object(j.jsx)("button",{className:"button book",onClick:function(){return t=e.bus_id,localStorage.setItem("bus_id",t),void D.push("/user/book");var t},children:"Book"})]},t)})):Object(j.jsxs)("div",{style:{width:"100%"},children:[Object(j.jsxs)("p",{style:{fontSize:"20px"},children:["Sorry we couldn't find any Bus going to the"," ",g?"Hostel":"Campus"]}),Object(j.jsx)("img",{src:ue,alt:"No Data",style:{width:"100%",border:"none",colorAdjust:"#000",outline:"none"}})]})})})]})}var je={height:"50px",width:"50px",borderRadius:"50%",background:"rgb(247, 10, 187)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",border:"none",color:"#fff",fontFamily:"flamenco",margin:"5px",outline:"none"},pe={height:"50px",width:"50px",borderRadius:"50%",background:"grey",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",border:"none",color:"#fff",fontFamily:"flamenco",margin:"5px",outline:"none",opacity:"0.5"};function fe(e){e.loading,Object(l.f)();return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"home-div",children:[Object(j.jsx)("button",{className:"input button green",children:"Register New Bus"}),Object(j.jsx)("button",{className:"input button green",children:"View Registered Busess"})]})})}var he=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),s=Object(o.a)(c,2),u=s[0],d=s[1],b=Object(a.useState)(""),f=Object(o.a)(b,2),h=f[0],m=f[1],x=Object(a.useState)(""),g=Object(o.a)(x,2),O=g[0],v=g[1],y=Object(a.useState)(!1),k=Object(o.a)(y,2),w=k[0],N=k[1],C=function(e){r(!!e)};return Object(j.jsxs)(j.Fragment,{children:[n?Object(j.jsx)(L,{}):null,Object(j.jsx)("div",{className:"App",style:{opacity:n?"0.1":"1",pointerEvents:n?"none":"all"},children:Object(j.jsxs)(i.a,{children:[Object(j.jsx)(z,{showNavbar:u,setShowNavbar:d,wallet:h,fundWallet:function(){d(!1),B.a.fire({title:"Enter Amount",input:"number",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Fund wallet",showLoaderOnConfirm:!0,preConfirm:function(e){v(100*e)},allowOutsideClick:function(){return!B.a.isLoading()}}).then((function(e){e.isConfirmed&&N(!0)}))}}),Object(j.jsx)("section",{style:{display:u?"none":"block"},children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",children:Object(j.jsx)(p,{})}),Object(j.jsx)(l.a,{exact:!0,path:"/user",children:Object(j.jsx)(S,{loading:C})}),Object(j.jsx)(l.a,{exact:!0,path:"/user/dashboard",children:Object(j.jsx)(be,{loading:C,setWallet:m,fund:w,setFund:N,amount:O})}),Object(j.jsx)(l.a,{exact:!0,path:"/user/book",children:Object(j.jsx)(X,{loading:C})}),Object(j.jsx)(l.a,{exact:!0,path:"/driver",children:Object(j.jsx)($,{loading:C})}),Object(j.jsx)(l.a,{exact:!0,path:"/admin",children:Object(j.jsx)(le,{loading:C})}),Object(j.jsx)(l.a,{exact:!0,path:"/admin/dashboard",children:Object(j.jsx)(fe,{loading:C})}),Object(j.jsx)(l.a,{exact:!0,path:"/driver/dashboard",children:Object(j.jsx)(ae,{loading:C})}),Object(j.jsx)(l.a,{exact:!0,path:"/driver/newtrip",children:Object(j.jsx)(ie,{loading:C})}),Object(j.jsx)(l.a,{exact:!0,path:"/user/ticket",children:Object(j.jsx)(J,{loading:C})})]})})]})})]})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(he,{})}),document.getElementById("root")),me()},65:function(e,t,n){},66:function(e,t,n){}},[[132,1,2]]]);
//# sourceMappingURL=main.a7a1f5a1.chunk.js.map