(this["webpackJsonpdecenter-ads-tz"]=this["webpackJsonpdecenter-ads-tz"]||[]).push([[8],{243:function(t,e,n){t.exports={postsPageBody:"PostsPage_postsPageBody__1ZSOq",postsContainer:"PostsPage_postsContainer__2NNX3",gridWrap:"PostsPage_gridWrap__2qclJ"}},244:function(t,e,n){t.exports={postWrapper:"Post_postWrapper__1V9ck",title:"Post_title__fg-Mz",postText:"Post_postText___wpkA"}},278:function(t,e,n){"use strict";n.r(e);var s=n(4),r=n(125),a=n.n(r),c=n(126),o=n(134),i=n(0),p=n(14),u=n(243),l=n.n(u),d=n(72),j=n(244),b=n.n(j),h=function(t){var e=t.title,n=t.text,r=t.id,a=t.short,c=Object(p.g)();return Object(s.jsxs)("div",{onClick:function(){return c.push("/posts/".concat(r))},className:b.a.postWrapper,children:[Object(s.jsx)("span",{className:b.a.title,children:e}),Object(s.jsx)("span",{className:b.a.postText,children:a?n.slice(0).split(" ",15).join(" | "):n})]})},f=n(245),x=n.n(f).a.create({baseURL:"https://jsonplaceholder.typicode.com/",headers:{"Content-Type":"application/json"}}),O=function(){return x.get("/posts").then((function(t){return t.data}))},v=function(t){return x.get("/posts/".concat(t)).then((function(t){return t.data}))},_=n(277);e.default=function(){var t=Object(p.g)(),e=Object(i.useState)(!1),n=Object(o.a)(e,2),r=n[0],u=n[1],j=Object(i.useState)([]),b=Object(o.a)(j,2),f=b[0],x=b[1],g=Object(i.useState)({}),P=Object(o.a)(g,2),k=P[0],m=P[1],y=Object(p.h)();return Object(i.useEffect)((function(){var t=function(){var t=Object(c.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.prev=1,t.next=4,O();case 4:e=t.sent,x(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:return t.prev=11,u(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}(),e=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.prev=1,t.next=4,v(e);case 4:n=t.sent,m(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:return t.prev=11,u(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(e){return t.apply(this,arguments)}}();y.id?e(y.id):t()}),[y.id]),Object(s.jsxs)("div",{className:l.a.postsPageBody,children:[r&&Object(s.jsx)(d.a,{}),!!f.length&&Object(s.jsx)("div",{className:l.a.postsContainer,children:f.map((function(t){return Object(s.jsx)("div",{className:l.a.gridWrap,children:Object(s.jsx)(h,{short:!0,id:t.id,text:t.body,title:t.title})},t.id)}))}),y.id&&!!Object.keys(k).length&&Object(s.jsx)(_.a,{width:600,centered:!0,visible:y.id,onCancel:function(){return t.push("/posts")},footer:null,title:null,children:Object(s.jsx)(h,{title:k.title,text:k.body,id:k.id})})]})}}}]);
//# sourceMappingURL=8.e296a02f.chunk.js.map