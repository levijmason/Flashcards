(this["webpackJsonpproject-flashcards"]=this["webpackJsonpproject-flashcards"]||[]).push([[0],{38:function(e,t,r){"use strict";r.r(t);var a=r(1),c=r.n(a),n=r(20),s=r.n(n),i=r(4),d=r(2),o=r.n(d),u=r(3),l=r(10),b=r(23),h=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_BASE_URL||"http://localhost:5000",j=new Headers;function p(e){e.cards;return Object(b.a)(e,["cards"])}function x(e,t,r){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(o.a.mark((function e(t,r,a){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,r);case 3:if(!((c=e.sent).status<200||c.status>399)){e.next=6;break}throw new Error("".concat(c.status," - ").concat(c.statusText));case 6:if(204!==c.status){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,c.json();case 10:return e.abrupt("return",e.sent);case 13:if(e.prev=13,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=18;break}throw console.error(e.t0.stack),e.t0;case 18:return e.abrupt("return",Promise.resolve(a));case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(h,"/decks?_embed=cards"),e.next=3,x(r,{signal:t},[]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(o.a.mark((function e(t,r){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(h,"/decks"),c={method:"POST",headers:j,body:JSON.stringify(p(t)),signal:r},e.next=4,x(a,c,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(o.a.mark((function e(t,r){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(h,"/decks/").concat(t,"?_embed=cards"),e.next=3,x(a,{signal:r},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return N.apply(this,arguments)}function N(){return(N=Object(u.a)(o.a.mark((function e(t,r){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(h,"/decks/").concat(t.id,"?_embed=cards"),c={method:"PUT",headers:j,body:JSON.stringify(p(t)),signal:r},e.next=4,x(a,c,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(o.a.mark((function e(t,r){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(h,"/decks/").concat(t),c={method:"DELETE",signal:r},e.next=4,x(a,c);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t,r){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(o.a.mark((function e(t,r,a){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(h,"/cards"),r.deckId=Number(t),n={method:"POST",headers:j,body:JSON.stringify(r),signal:a},e.next=5,x(c,n,r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t){return z.apply(this,arguments)}function z(){return(z=Object(u.a)(o.a.mark((function e(t,r){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(h,"/cards/").concat(t),e.next=3,x(a,{signal:r},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t){return H.apply(this,arguments)}function H(){return(H=Object(u.a)(o.a.mark((function e(t,r){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(h,"/cards/").concat(t.id),c={method:"PUT",headers:j,body:JSON.stringify(t)},e.next=4,x(a,c,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,t){return T.apply(this,arguments)}function T(){return(T=Object(u.a)(o.a.mark((function e(t,r){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(h,"/cards/").concat(t),c={method:"DELETE",signal:r},e.next=4,x(a,c);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}j.append("Content-Type","application/json");var M=r(0);var _=function(){return Object(M.jsx)("header",{className:"jumbotron bg-dark",children:Object(M.jsxs)("div",{className:"container text-white",children:[Object(M.jsx)("h1",{className:"display-4",children:"Flashcard-o-matic"}),Object(M.jsx)("p",{className:"lead",children:"Discover The Flashcard Difference."})]})})};var B=function(){return Object(M.jsx)("div",{className:"NotFound",children:Object(M.jsx)("h1",{children:"Not Found"})})},L=r(21),F=r(8),P=r.n(F);function R(e){var t,r=e.names,a=e.deckId,c=e.cardId,n=e.removeDeck,s=e.removeCard,i=[],d=Object(L.a)(r);try{for(d.s();!(t=d.n()).done;){switch(t.value){case"view":i.push(Object(M.jsx)("a",{href:"/decks/".concat(a),children:Object(M.jsxs)("button",{type:"button",className:"btn btn-secondary mr-2",children:[Object(M.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-eye-fill",viewBox:"0 0 20 20",children:[Object(M.jsx)("path",{d:"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}),Object(M.jsx)("path",{d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"})]}),"\xa0View"]})},"view"));break;case"study":i.push(Object(M.jsx)("a",{href:"/decks/".concat(a,"/study"),children:Object(M.jsxs)("button",{type:"button",className:"btn btn-primary mr-2",children:[Object(M.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-journal-bookmark-fill",viewBox:"0 0 20 20",children:[Object(M.jsx)("path",{fillRule:"evenodd",d:"M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z"}),Object(M.jsx)("path",{d:"M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"}),Object(M.jsx)("path",{d:"M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"})]}),"\xa0Study"]})},"study"));break;case"delete-deck":i.push(Object(M.jsxs)("button",{type:"button",className:"btn btn-danger float-right",onClick:function(){return n(a)},children:["\xa0",Object(M.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-trash-fill",viewBox:"0 0 20 20",children:Object(M.jsx)("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"})})]},"delete"));break;case"delete-card":i.push(Object(M.jsxs)("button",{type:"button",className:"btn btn-danger float-right",onClick:function(){return s(c)},children:["\xa0",Object(M.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-trash-fill",viewBox:"0 0 20 20",children:Object(M.jsx)("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"})})]},"delete"));break;case"edit-deck":i.push(Object(M.jsx)("a",{href:"/decks/".concat(a,"/edit"),children:Object(M.jsxs)("button",{type:"button",className:"btn btn-secondary mr-2",children:[Object(M.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-pencil-fill",viewBox:"0 0 20 20",children:Object(M.jsx)("path",{d:"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"})}),"\xa0Edit"]})},"edit-deck"));break;case"edit-card":i.push(Object(M.jsx)("a",{href:"/decks/".concat(a,"/cards/").concat(c,"/edit"),children:Object(M.jsxs)("button",{type:"button",className:"btn btn-secondary mr-2 float-right",children:[Object(M.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-pencil-fill",viewBox:"0 0 20 20",children:Object(M.jsx)("path",{d:"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"})}),"\xa0Edit"]})},"edit-card"));break;case"add-card":i.push(Object(M.jsx)("a",{href:"/decks/".concat(a,"/cards/new"),children:Object(M.jsxs)("button",{type:"button",className:"btn btn-primary mr-2",children:[Object(M.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-plus",viewBox:"0 0 20 20",children:Object(M.jsx)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})}),"Add Cards"]})},"add-card"));break;case"add-deck":i.push(Object(M.jsx)("a",{href:"/decks/new",children:Object(M.jsxs)("button",{type:"button",className:"btn btn-secondary mr-2",children:[Object(M.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-plus",viewBox:"0 0 20 20",children:Object(M.jsx)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})}),"Create Deck"]})},"add-deck"));break;default:return null}}}catch(o){d.e(o)}finally{d.f()}return i}R.propTypes={names:P.a.arrayOf(P.a.oneOf(["view","study","delete-deck","delete-card","edit-deck","edit-card","add-deck","add-card"])).isRequired,deckId:P.a.number,cardId:P.a.number,removeDeck:P.a.func,removeCard:P.a.func};var U=R;var J=function(e){var t=e.deck,r=e.removeDeck;return Object(M.jsx)("div",{className:"card mt-2",id:"deck-".concat(t.id),children:Object(M.jsxs)("div",{className:"card-body",children:[Object(M.jsxs)("p",{className:"card-subtitle mb-2 text-muted float-right",children:[t.cards.length," cards"]}),Object(M.jsx)("h4",{className:"card-title",children:t.name}),Object(M.jsx)("p",{className:"card-text",children:t.description}),Object(M.jsx)(U,{names:["view","study","delete-deck"],deckId:t.id,removeDeck:r})]})})};var K=function(e){var t=e.decks,r=e.removeDeck,a=t.map((function(e){return Object(M.jsx)(J,{deck:e,removeDeck:r},e.id)}));return Object(M.jsxs)("div",{id:"deck-list",children:[Object(M.jsx)(U,{names:["add-deck"]}),a]})},W=r(14),Y=r(11);var q=function(e){var t=e.page,r=e.deckName,a=e.deckId,c=e.cardId;return Object(M.jsx)("div",{id:"deck-study",children:Object(M.jsx)("nav",{"aria-label":"breadcrumb",children:Object(M.jsxs)("ol",{className:"breadcrumb",children:[Object(M.jsx)("li",{className:"breadcrumb-item",children:Object(M.jsxs)("a",{href:"/",children:[Object(M.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-house-door-fill",viewBox:"0 0 20 20",children:Object(M.jsx)("path",{d:"M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"})}),"Home"]})}),r&&a?Object(M.jsx)("li",{className:"breadcrumb-item ".concat("view"===t?"active":""),children:"view"===t?r:Object(M.jsx)("a",{href:"/decks/".concat(a),children:r})}):null,function(){switch(t){case"study":return Object(M.jsx)("li",{className:"breadcrumb-item active",children:"Study"});case"create-deck":return Object(M.jsx)("li",{className:"breadcrumb-item active",children:"Create Deck"});case"edit-deck":return Object(M.jsx)("li",{className:"breadcrumb-item active",children:"Edit Deck"});case"create-card":return Object(M.jsx)("li",{className:"breadcrumb-item active",children:"Add Card"});case"edit-card":return Object(M.jsxs)("li",{className:"breadcrumb-item active",children:["Edit Card ",c]});default:return null}}()]})})})};var G=function(e){var t=e.keys,r=e.idx,a=e.handleChange,c=e.formData;return Object(M.jsxs)("div",{id:t[r],children:[Object(M.jsx)("label",{htmlFor:t[r],children:t[r].charAt(0).toUpperCase()+t[r].slice(1)}),Object(M.jsx)("br",{}),"name"===t[r]?Object(M.jsx)("input",{name:"name",id:"name",type:"text",onChange:a,value:c[t[r]],style:{width:"100%"}}):Object(M.jsx)("textarea",{name:t[r],id:t[r],onChange:a,value:c[t[r]],style:{width:"100%"},rows:"4"})]})};var Q=function(e){var t,r=e.type,c=e.edit,n=e.addDeck,s=e.addCard,d=e.editDeck,b=e.editCard,h=e.abortController,j=Object(i.f)(),p=Object(i.g)(),x=p.deckId,f=p.cardId,v=c?"edit":"create",m="deck"===r?["name","description"]:["front","back"],O=(t={},Object(Y.a)(t,m[0],""),Object(Y.a)(t,m[1],""),t),k=Object(a.useState)({}),y=Object(l.a)(k,2),g=y[0],N=y[1],C=Object(a.useState)(Object(W.a)({},O)),I=Object(l.a)(C,2),D=I[0],S=I[1];function z(){return(z=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("deck"!==r||c){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,w(x,h.signal);case 5:if(t=e.sent,N(t),!c){e.next=19;break}if(!t||"deck"!==r){e.next=13;break}O[m[0]]=t.name,O[m[1]]=t.description,e.next=18;break;case 13:if("card"!==r){e.next=18;break}return e.next=16,E(f,h.signal);case 16:(a=e.sent)&&(O[m[0]]=a.front,O[m[1]]=a.back);case 18:S(Object(W.a)({},O));case 19:e.next=25;break;case 21:if(e.prev=21,e.t0=e.catch(2),"AbortError"===e.t0.name){e.next=25;break}throw e.t0;case 25:case"end":return e.stop()}}),e,null,[[2,21]])})))).apply(this,arguments)}function A(e){var t=e.target;S(Object(W.a)(Object(W.a)({},D),{},Object(Y.a)({},t.name,t.value)))}function H(){return(H=Object(u.a)(o.a.mark((function e(t){var a,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a={},Object(Y.a)(a,m[0],D[m[0]]),Object(Y.a)(a,m[1],D[m[1]]),i=a,c&&(i.id="deck"===r?parseInt(x):parseInt(f),"card"===r&&(i.deckId=parseInt(x))),!c){e.next=16;break}if("deck"!==r){e.next=10;break}return e.next=7,d(i);case 7:e.t1=e.sent,e.next=13;break;case 10:return e.next=12,b(i);case 12:e.t1=e.sent;case 13:e.t0=e.t1,e.next=26;break;case 16:if("deck"!==r){e.next=22;break}return e.next=19,n(i);case 19:e.t2=e.sent,e.next=25;break;case 22:return e.next=24,s(i,x);case 24:e.t2=e.sent;case 25:e.t0=e.t2;case 26:u=e.t0,c||"deck"!==r||(x=u),j.push("/decks/".concat(x));case 29:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){return function(){z.apply(this,arguments)}(),function(){h.abort()}}),[]),Object(M.jsxs)("div",{id:"".concat(r,"-form-").concat(v),children:[Object(M.jsx)(q,{page:"".concat(v,"-").concat(r),deckName:g?g.name:null,deckId:parseInt(x),cardId:f?parseInt(f):null}),Object(M.jsxs)("h1",{children:["card"===r&&"".concat(g.name,": "),v.charAt(0).toUpperCase()+v.slice(1),"\xa0",r.charAt(0).toUpperCase()+r.slice(1),"\xa0"]}),Object(M.jsxs)("form",{onSubmit:function(e){return H.apply(this,arguments)},children:[Object(M.jsx)(G,{keys:m,idx:0,handleChange:A,formData:D}),Object(M.jsx)(G,{keys:m,idx:1,handleChange:A,formData:D}),Object(M.jsx)("a",{href:"/",children:Object(M.jsx)("button",{className:"btn btn-secondary mr-1",type:"button",children:"Cancel"})}),Object(M.jsx)("button",{className:"btn btn-primary mr-1",type:"submit",children:"Submit"})]})]})};var X=function(e){var t=e.card,r=e.removeCard;return Object(M.jsxs)("ul",{className:"list-group",children:[Object(M.jsx)("li",{className:"list-group-item",children:t.front}),Object(M.jsx)("li",{className:"list-group-item",children:t.back}),Object(M.jsx)("li",{className:"list-group-item",children:Object(M.jsx)(U,{names:["delete-card","edit-card"],removeCard:r,deckId:t.deckId,cardId:t.id})})]})};var Z=function(e){var t=e.removeDeck,r=e.removeCard,c=e.abortController,n=Object(a.useState)({}),s=Object(l.a)(n,2),d=s[0],b=s[1],h=Object(i.g)().deckId;function j(){return(j=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(h,c.signal);case 3:t=e.sent,b(t),e.next=11;break;case 7:if(e.prev=7,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=11;break}throw e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}if(Object(a.useEffect)((function(){return function(){j.apply(this,arguments)}(),function(){c.abort()}}),[]),0===Object.keys(d).length)return null;var p=d.cards.map((function(e){return Object(M.jsx)(X,{card:e,removeCard:r},e.id)}));return Object(M.jsxs)("div",{id:"deck-".concat(d.id,"-view"),children:[Object(M.jsx)(q,{deckName:d.name,deckId:d.id,page:"view"}),Object(M.jsx)("h5",{children:d.name}),Object(M.jsx)("p",{children:d.description}),Object(M.jsx)(U,{names:["edit-deck","study","add-card","delete-deck"],deckId:d.id,removeDeck:t}),Object(M.jsx)("h3",{className:"mt-4",children:"Cards"}),p]})};var $=function(e){var t=e.deck,r=e.cardNum,a=e.flipped,c=e.flip,n=e.next;return Object(M.jsx)("div",{className:"card mt-2",id:"card-".concat(t.id),children:Object(M.jsxs)("div",{className:"card-body",children:[Object(M.jsxs)("h4",{className:"card-title",children:["Card ",r+1," of ",t.cards.length]}),Object(M.jsx)("p",{className:"card-text",children:t.cards[r][a?"back":"front"]}),Object(M.jsx)("button",{type:"button",className:"btn btn-secondary mr-2",onClick:c,children:"Flip"}),a&&Object(M.jsx)("button",{type:"button",className:"btn btn-primary mr-2",onClick:n,children:"Next"})]})})};var ee=function(e){var t=e.length,r=e.id;return Object(M.jsxs)("div",{id:"card-error",children:[Object(M.jsx)("h3",{children:"Not enough cards."}),Object(M.jsxs)("p",{children:["You need at least 3 cards to study. There are ",t," cards in this deck."]}),Object(M.jsx)(U,{names:["add-card"],deckId:r})]})};var te=function(e){var t=e.abortController,r=Object(a.useState)(0),c=Object(l.a)(r,2),n=c[0],s=c[1],d=Object(a.useState)(!1),b=Object(l.a)(d,2),h=b[0],j=b[1],p=Object(i.f)(),x=Object(a.useState)({}),f=Object(l.a)(x,2),v=f[0],m=f[1],O=Object(i.g)().deckId;function k(){return(k=Object(u.a)(o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(O,t.signal);case 3:r=e.sent,m(r),e.next=11;break;case 7:if(e.prev=7,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=11;break}throw e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){return function(){k.apply(this,arguments)}(),function(){t.abort()}}),[]),0===Object.keys(v).length?null:v?Object(M.jsxs)("div",{id:"deck-".concat(v.id,"-study"),children:[Object(M.jsx)(q,{deckName:v.name,deckId:v.id,page:"study"}),Object(M.jsxs)("h1",{children:["Study: ",v.name]}),v.cards.length>2?Object(M.jsx)($,{deck:v,cardNum:n,flipped:h,flip:function(){j(!h)},next:function(){n+1===v.cards.length?window.confirm("Restart cards?\n\nClick 'cancel' to return to the home page.")?s(0):p.push("/"):s(n+1),j(!1)}},v.cards[n].id):Object(M.jsx)(ee,{length:v.cards.length,id:v.id})]}):null};var re=function(e){var t=e.editDeck,r=e.removeDeck,a=e.addCard,c=e.editCard,n=e.removeCard,s=e.abortController,d=Object(i.g)().deckId;return Object(M.jsx)("div",{id:"deck-".concat(d),children:Object(M.jsxs)(i.c,{children:[Object(M.jsx)(i.a,{path:"/decks/:deckId/study",children:Object(M.jsx)(te,{abortController:s})}),Object(M.jsx)(i.a,{path:"/decks/:deckId/edit",children:Object(M.jsx)(Q,{type:"deck",edit:!0,editDeck:t,abortController:s})}),Object(M.jsx)(i.a,{path:"/decks/:deckId/cards/new",children:Object(M.jsx)(Q,{type:"card",edit:!1,addCard:a,abortController:s})}),Object(M.jsx)(i.a,{path:"/decks/:deckId/cards/:cardId/edit",children:Object(M.jsx)(Q,{type:"card",edit:!0,editCard:c,abortController:s})}),Object(M.jsx)(i.a,{path:"/decks/:deckId",children:Object(M.jsx)(Z,{removeDeck:r,removeCard:n,abortController:s})})]})})};var ae=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),r=t[0],c=t[1],n=new AbortController,s=n.signal,d=Object(i.f)();function b(){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(s);case 3:t=e.sent,c(t),e.next=11;break;case 7:if(e.prev=7,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=11;break}throw e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function j(){return(j=Object(u.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t,s);case 2:return r=e.sent,b(),e.abrupt("return",r.id);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(u.a)(o.a.mark((function e(t,r){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(r,t,s);case 2:return a=e.sent,b(),e.abrupt("return",a.id);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(u.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t,s);case 2:return r=e.sent,b(),e.abrupt("return",r.id);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(u.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t,s);case 2:return r=e.sent,b(),e.abrupt("return",r.id);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete this deck?\n\nYou will not be able to recover it.")){e.next=5;break}return e.next=3,C(t,s);case 3:b(),d.push("/");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete this card?\n\nYou will not be able to recover it.")){e.next=4;break}return e.next=3,V(t,s);case 3:b();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){return b(),function(){n.abort()}})),Object(M.jsxs)(a.Fragment,{children:[Object(M.jsx)(_,{}),Object(M.jsx)("div",{className:"container",children:Object(M.jsxs)(i.c,{children:[Object(M.jsx)(i.a,{exact:!0,path:"/",children:Object(M.jsx)(K,{decks:r,removeDeck:m})}),Object(M.jsx)(i.a,{path:"/decks/new",children:Object(M.jsx)(Q,{type:"deck",edit:!1,addDeck:function(e){return j.apply(this,arguments)},abortController:n})}),Object(M.jsx)(i.a,{path:"/decks/:deckId/",children:Object(M.jsx)(re,{editDeck:function(e){return x.apply(this,arguments)},removeDeck:m,addCard:function(e,t){return p.apply(this,arguments)},editCard:function(e){return f.apply(this,arguments)},removeCard:function(e){return w.apply(this,arguments)},abortController:n})}),Object(M.jsx)(i.a,{children:Object(M.jsx)(B,{})})]})})]})};var ce=function(){return Object(M.jsx)("div",{className:"app-routes",children:Object(M.jsx)(i.c,{children:Object(M.jsx)(i.a,{path:"/",children:Object(M.jsx)(ae,{})})})})},ne=r(12);s.a.render(Object(M.jsx)(c.a.StrictMode,{children:Object(M.jsx)(ne.a,{children:Object(M.jsx)(ce,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.06b36aa3.chunk.js.map