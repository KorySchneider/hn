(window.webpackJsonphn=window.webpackJsonphn||[]).push([[0],{203:function(e,t,n){e.exports=n(416)},208:function(e,t,n){},233:function(e,t){},247:function(e,t){},249:function(e,t){},416:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),c=n.n(i),o=(n(208),n(10)),u=n.n(o),l=n(19),s=n(20),m="UPDATE_ID_CACHE",p="UPDATE_SECTION",d="UPDATE_VISIBLE_STORIES",f="UPDATE_CURRENT_PAGE",h="UPDATE_COMMENTS_OPEN",g="UPDATE_COMMENTS",E="UPDATE_COMMENTS_PARENT";function b(e){return{type:m,ids:e}}function O(e){return{type:d,stories:e}}function v(e){return{type:f,page:e}}function y(e){return{type:h,open:e}}var w=n(21),x=n.n(w),j=n(39);var k=Object(j.b)({idCache:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return t.ids;default:return e}},section:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"top",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.section;default:return e}},visibleStories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return t.stories;default:return e}},currentPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.page;default:return e}},commentsOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.open;default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.comments;default:return e}},commentsParent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return t.parent;default:return e}}}),S="https://hacker-news.firebaseio.com/v0",C=10,P="hnViewed",_=Object(j.c)(k,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());function I(){return(I=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S,"/item/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=function(e){return I.apply(this,arguments)},N=n(82),D=n(418),A=n(433),U={updateSection:function(e){return{type:p,section:e}},updateIdCache:b,updateCurrentPage:v,updateVisibleStories:O},V={menu:{margin:"2em auto",padding:"0.5em",position:"sticky",top:"0.5em",zIndex:1,display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center"},button:{paddingTop:"0.75em",paddingBottom:"0.75em"}};var J=Object(s.b)((function(e){return{section:e.section,idCache:e.idCache}}),U)((function(e){var t=e.section,n=e.updateSection,i=(e.idCache,e.updateIdCache),c=e.updateCurrentPage,o=e.updateVisibleStories;return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(u.a.mark((function e(){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(S+"/".concat(t,"stories.json"));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,i(a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,i]),r.a.createElement(D.a,{style:V.menu,elevation:4,align:"center",id:"menu"},["top","new","best","ask","show","job"].map((function(e){return r.a.createElement(A.a,{disabled:t===e,id:e,key:e,onClick:function(e){return function(e){e.stopPropagation();var a=e.currentTarget.id;a!==t&&(o([]),i([]),n(a),c(1))}(e)},style:V.button},"job"===e?"jobs":e)})))})),M=n(23),R=n(30),W=n.n(R),z=n(196),B=n(434);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach((function(t){Object(z.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y={marginLeft:"20px",padding:"5px",fontWeight:400};function G(e){var t=e.text,n=e.styles;return r.a.createElement(B.a,{variant:"overline",style:X({},Y,{},n)},t)}var H=n(442),$=n(438),q=n(435),F=n(436),K=n(437),Q={updateCommentsOpen:y,updateComments:function(e){return{type:g,comments:e}},updateCommentsParent:function(e){return{type:E,parent:e}}};var Z=Object(s.b)((function(e){return{commentsOpen:e.commentsOpen}}),Q)((function(e){var t=e.data,n=e.timeout,i=(e.commentsOpen,e.updateCommentsOpen),c=e.updateComments,o=e.updateCommentsParent,u=Object(a.useState)(!1),l=Object(M.a)(u,2),s=l[0],m=l[1],p=Object(a.useState)(!1),d=Object(M.a)(p,2),f=d[0],h=d[1];Object(a.useEffect)((function(){for(var e=JSON.parse(localStorage.getItem(P)),n=0;n<e.length;n++)e[n].id===t.id&&h(!0)}),[t.id]);var g=function(e){e.stopPropagation(),function(){h(!0);for(var e=JSON.parse(localStorage.getItem(P)),n=!1,a=0;a<e.length;a++)e[a].id===t.id&&(n=!0);n||(e.push({id:t.id,time:x()().unix()}),localStorage.setItem(P,JSON.stringify(e)))}(),t.url&&window.open(t.url),t.text&&m((function(e){return!e}))};return r.a.createElement(H.a,{direction:"right",in:""!==t.title,mountOnEnter:!0,unmountOnExit:!0,key:t.id,style:{transitionDelay:"".concat(n,"ms")}},r.a.createElement(q.a,{onClick:function(e){return g(e)},style:{margin:"2em auto",cursor:"pointer"}},r.a.createElement(F.a,null,r.a.createElement(B.a,{variant:"h6"},W()(t.title)),r.a.createElement(B.a,{variant:"caption"},t.url&&t.url.split("/")[2].replace(/^www\./,"")),r.a.createElement(B.a,null,s&&W()(t.text),!s&&t.text&&W()(t.text.substring(0,70)+"..."))),r.a.createElement(K.a,null,r.a.createElement($.a,{align:"right"},r.a.createElement(G,{text:x.a.unix(t.time).fromNow()}),f&&r.a.createElement(G,{text:t.score+" points"}),f&&r.a.createElement(A.a,{onClick:function(e){return function(e){e.stopPropagation(),i(!0),o(t),c(t.kids||[])}(e)},style:Y,size:"small"},t.kids&&t.kids.length+" replies"||"0 replies")))))})),ee=n(439);var te=function(){return r.a.createElement($.a,{align:"center"},r.a.createElement(ee.a,{style:{margin:"2em"}}))};var ne=function e(t){var n=t.data,i=t.depth,c=Object(a.useState)([]),o=Object(M.a)(c,2),s=o[0],m=o[1],p=Object(a.useState)(!1),d=Object(M.a)(p,2),f=d[0],h=d[1],g=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(!0),t=[],a=0;case 3:if(!(a<n.kids.length)){e.next=11;break}return e.next=6,T(n.kids[a]);case 6:r=e.sent,t.push(r);case 8:a++,e.next=3;break;case 11:t=t.filter((function(e){return null!==e&&(!e.dead&&!e.deleted)})),m(t),h(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("span",null,r.a.createElement(H.a,{direction:"up",in:n.id>=0,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(q.a,{raised:!0,style:{margin:"1em",padding:"5px",marginLeft:"calc(1em + ".concat(i,"em)")}},r.a.createElement(F.a,null,n.text&&n.text.split("<p>").map((function(e,t){return r.a.createElement(B.a,{gutterBottom:!0,key:e+t},W()(e))}))),r.a.createElement(K.a,null,r.a.createElement($.a,{align:"right"},r.a.createElement(G,{text:r.a.createElement("span",null,"\u2014 ",n.by)}),r.a.createElement(G,{text:x.a.unix(n.time).fromNow()}),r.a.createElement(A.a,{size:"small",style:Y,onClick:g,disabled:!n.kids||n.kids&&0===n.kids.length},n.kids&&n.kids.length+" replies"||"0 replies"))))),f&&r.a.createElement(te,null),s.map((function(t,n){return r.a.createElement(e,{data:t,key:t.by+t.id,timeout:30*n,depth:i+1})})))},ae=n(441),re=n(440),ie=n(197),ce=n.n(ie),oe={updateCommentsOpen:y};var ue=Object(s.b)((function(e){return{commentsOpen:e.commentsOpen,comments:e.comments,commentsParent:e.commentsParent}}),oe)((function(e){var t=e.commentsOpen,n=e.comments,i=e.commentsParent,c=e.updateCommentsOpen,o=Object(a.useState)([]),s=Object(M.a)(o,2),m=s[0],p=s[1],d=Object(a.useState)(1),f=Object(M.a)(d,2),h=f[0],g=f[1],E=Object(a.useState)(!1),b=Object(M.a)(E,2),O=b[0],v=b[1],y=10,w=Object(N.a)((function(){t&&m.length<=h*y&&g((function(e){return++e}))}));Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(u.a.mark((function e(){var a,r,i,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return v(!1),e.abrupt("return");case 3:if(!(m.length<h*y)){e.next=17;break}a=[],r=n.slice(h*y-y,h*y),i=0;case 7:if(!(i<r.length)){e.next=15;break}return e.next=10,T(r[i]);case 10:c=e.sent,a.push(c);case 12:i++,e.next=7;break;case 15:(a=a.filter((function(e){if(null===e)return!1;if(e.dead||e.deleted)return!1;for(var t=0;t<m.length;t++)if(e.id===m[t].id)return!1;return!0}))).length>0&&p(m.concat(a));case 17:v(!1);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}v(!0),function(){e.apply(this,arguments)}()}),[n,h,t,m]);var j=function(){c(!1),p([]),g(1)},k=function(){window.open(i,"_blank")};return null===i?null:r.a.createElement(ae.a,{open:t,onClose:j,style:{overflowY:"scroll"},ref:w},r.a.createElement($.a,{maxWidth:"md",style:{outline:0,marginTop:"1em",padding:"5px"}},r.a.createElement(H.a,{direction:"up",mountOnEnter:!0,unmountOnExit:!0,in:t},r.a.createElement(q.a,{raised:!0},r.a.createElement(F.a,{style:{padding:"1em"}},r.a.createElement(B.a,{variant:"h5",onClick:k,style:i.url&&{cursor:"pointer"}},i.title),i.url&&r.a.createElement(B.a,{variant:"caption",onClick:k,style:{cursor:"pointer"}},i.url.split("/")[2].replace(/^www\./,"")),i.text&&i.text.split("<p>").map((function(e){return r.a.createElement(B.a,{key:e},W()(e))}))),r.a.createElement(K.a,null,r.a.createElement($.a,{align:"right"},r.a.createElement(G,{text:r.a.createElement("span",null,"\u2014 ",i.by)}),r.a.createElement(G,{text:x.a.unix(i.time).fromNow()}),r.a.createElement(A.a,{style:Y,size:"small",onClick:function(){window.open("https://news.ycombinator.com/item?id=".concat(i.id),"_blank")}},"View on YC"))))),r.a.createElement(re.a,{onClick:j,color:"primary",style:{position:"fixed",bottom:"2em",right:"2em",zIndex:1}},r.a.createElement(ce.a,null)),m.map((function(e,t){return r.a.createElement(ne,{data:e,key:e.id,timeout:0,depth:0})})),O&&r.a.createElement(te,null)))})),le={updateIdCache:b,updateVisibleStories:O,updateCurrentPage:v};var se=Object(s.b)((function(e){return{visibleStories:e.visibleStories,idCache:e.idCache,page:e.currentPage}}),le)((function(e){var t=e.visibleStories,n=e.updateVisibleStories,i=e.idCache,c=(e.updateIdCache,e.page),o=e.updateCurrentPage;return Object(N.a)((function(){t.length===c*C&&o(c+1)}),500,200),Object(a.useEffect)((function(){Storage&&null===localStorage.getItem(P)&&localStorage.setItem(P,JSON.stringify([]));var e=localStorage.getItem(P);if(e){var t=JSON.parse(e);t=t.filter((function(e){return x.a.unix(e.time).isAfter(x()().subtract(5,"days"))})),localStorage.setItem(P,JSON.stringify(t))}}),[]),Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(u.a.mark((function e(){var a,r,o,l,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>0&&t.length<c*C&&t.length<i.length)){e.next=15;break}a=[],r=i.slice(c*C-C,c*C),o=0;case 4:if(!(o<r.length)){e.next=12;break}return e.next=7,T(r[o]);case 7:l=e.sent,a.push(l);case 9:o++,e.next=4;break;case 12:s=[],a=a.filter((function(e){return!s.includes(e.id)&&(s.push(e.id),!0)})),n(t.concat(a));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c,i,t,n]),r.a.createElement($.a,{maxWidth:"md"},r.a.createElement(J,null),t.map((function(e,t){return r.a.createElement(Z,{data:e,key:e.title,timeout:30*t})})),t.length<i.length&&r.a.createElement(te,null),r.a.createElement(ue,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(s.a,{store:_},r.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[203,1,2]]]);
//# sourceMappingURL=main.794fcd21.chunk.js.map