(this.webpackJsonpgit_viewer=this.webpackJsonpgit_viewer||[]).push([[6],{129:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(10),r=a(130),u=a(96),m=a(128),s=a(126),o=a(118),i=a(14),E=a(36),f=a(82),b=a(41);function d(){var e=Object(E.c)((function(e){return e.userReducer})),t=e.userDetails,a=e.isLoginPending,u=e.user,s=Object(l.g)().info,o=Object(E.b)();return Object(n.useEffect)((function(){o(Object(f.b)(s,u.login))}),[]),a?c.a.createElement(b.a,null):c.a.createElement(r.a.Body,null,t.length?c.a.createElement(m.a,{variant:"flush",className:"list-unstyled team-members"},c.a.createElement(h,{userDetails:t,title:s,user:u})):c.a.createElement("div",null,"No data"))}var h=function(e){var t=e.userDetails,a=e.title,n=e.user;return t.map((function(e,t){return c.a.createElement(m.a.Item,{key:t},"repos"!==a?c.a.createElement(s.a,null,c.a.createElement(o.a,{md:"1",xs:"3"},c.a.createElement("div",{className:"avatar"},c.a.createElement("a",{href:"https://github.com/".concat(e.login)},c.a.createElement("img",{alt:"avatar",className:"img-circle img-no-padding img-responsive",src:e.avatar_url})))),c.a.createElement(o.a,{md:"11",xs:"9"},e.login)):c.a.createElement(s.a,null,c.a.createElement(o.a,null,c.a.createElement(s.a,null,e.name),c.a.createElement(s.a,null,c.a.createElement(o.a,{md:"5",xs:"5"},c.a.createElement("span",{className:"text-muted"},c.a.createElement("small",null,"Default branch"),c.a.createElement("br",null),c.a.createElement("small",null,"Language"))),c.a.createElement(o.a,{md:"7",xs:"7",className:"text-right"},c.a.createElement("small",null,e.default_branch),c.a.createElement("br",null),c.a.createElement("small",null,e.language))),c.a.createElement(s.a,{className:"justify-content-between"},c.a.createElement(o.a,null),c.a.createElement(o.a,{className:"text-right"},c.a.createElement(i.b,{className:"mt-2 btn btn-outline-info btn-sm",to:"/git_viewer/".concat(n.login,"/").concat(a,"/").concat(e.name,"/branches")},"Compare commits"))))))}))},g=a(84),p=a(83),v=a(127),j=a(132),O=a(125),N=a(123),x=a.n(N),y=function(e,t){for(var a,n=[],l=0;l<e;l++){var r=t[l];r&&n.push(c.a.createElement(m.a.Item,{key:l},c.a.createElement(s.a,null,c.a.createElement(o.a,{xs:"4"},c.a.createElement("small",{className:"font-italic"},"Sha")),c.a.createElement(o.a,{xs:"8",className:"text-right"},c.a.createElement("small",null,r.sha.toString().slice(0,8)))),c.a.createElement(s.a,null,c.a.createElement(o.a,{xs:"4"},c.a.createElement("small",{className:"font-italic"},"Author")),c.a.createElement(o.a,{xs:"8",className:"text-right"},c.a.createElement("small",null,r.commit.author.name))),c.a.createElement(s.a,null,c.a.createElement(o.a,{xs:"4"},c.a.createElement("small",{className:"font-italic"},"Message")),c.a.createElement(o.a,{xs:"8",className:"text-right"},c.a.createElement("small",null,r.commit.message))),c.a.createElement(s.a,null,c.a.createElement(o.a,{xs:"4"},c.a.createElement("small",{className:"font-italic"},"Date")),c.a.createElement(o.a,{xs:"8",className:"text-right"},c.a.createElement("small",null,(a=r.commit.author.date,new Date(a).toJSON().slice(0,10)))))))}return n};function k(e){var t=Object(n.useState)(5),a=Object(g.a)(t,2),l=a[0],r=a[1],u=Object(n.useState)(!0),s=Object(g.a)(u,2),o=s[0],i=s[1];return c.a.createElement(m.a,{variant:"flush"},Object.keys(e.data).length?c.a.createElement(x.a,{loadMore:function(){l>=Object.keys(e.data).length?i(!1):setTimeout((function(){r((function(e){return e+5}))}),1500)},hasMore:o,loader:"Loading...",useWindow:!0},y(l,e.data)):null)}function w(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],u=t[1],m=Object(n.useState)(""),i=Object(g.a)(m,2),E=i[0],f=i[1],b=Object(n.useState)(""),d=Object(g.a)(b,2),h=d[0],N=d[1],x=Object(n.useState)([]),y=Object(g.a)(x,2),w=y[0],S=y[1],B=Object(n.useState)([]),C=Object(g.a)(B,2),D=C[0],_=C[1],G=Object(l.g)(),I=G.owner,J=G.repo;Object(n.useEffect)((function(){Object(p.b)(I,J).then((function(e){var t=e.data.map((function(e){return e.name}));u(t)}))}),[]);var L=function(e,t){"firstBranch"===t?f(e.value):N(e.value)};function M(e,t){t(e.map((function(e){return{sha:e.sha,commit:{message:e.commit.message,author:{name:e.commit.author.name,date:e.commit.author.date}}}})))}var T=a.map((function(e){return{value:e,label:e}}));return c.a.createElement(r.a.Body,null,c.a.createElement(r.a.Subtitle,{className:"mb-2 text-muted"},"Select branches"),c.a.createElement(v.a,null,c.a.createElement(s.a,{className:"justify-content-center"},c.a.createElement(o.a,null,c.a.createElement(v.a.Group,null,c.a.createElement(O.a,{options:T.filter((function(e){return e.value!==h})),onChange:function(e){return L(e,"firstBranch")}}))),c.a.createElement(o.a,null,c.a.createElement(v.a.Group,null,c.a.createElement(O.a,{options:T.filter((function(e){return e.value!==E})),onChange:function(e){return L(e,"secondBranch")}})))),c.a.createElement(s.a,{className:"text-center"},c.a.createElement(o.a,null,c.a.createElement(j.a,{className:"btn-round",variant:"dark",onClick:function(){Object(p.c)(I,J,E).then((function(e){return M(e.data,S)})),Object(p.c)(I,J,h).then((function(e){return M(e.data,_)}))},disabled:!E||!h},"Show difference")))),c.a.createElement("hr",null),c.a.createElement(s.a,null,c.a.createElement(o.a,{xs:"6"},c.a.createElement(k,{data:w})),c.a.createElement(o.a,{xs:"6"},c.a.createElement(k,{data:D}))))}function S(){var e=Object(l.f)(),t=Object(l.g)().info,a=Object(l.h)().path;return c.a.createElement(r.a,null,c.a.createElement(r.a.Header,null,c.a.createElement(r.a.Title,null,c.a.createElement("a",{className:"back-link",onClick:function(){return e.goBack()},title:"Go back"},c.a.createElement(u.a,null))," ",c.a.createElement("span",null,t.replace(/^\w/,(function(e){return e.toUpperCase()}))))),c.a.createElement(l.c,null,c.a.createElement(l.a,{path:a,render:function(){return c.a.createElement(d,null)},exact:!0}),c.a.createElement(l.a,{path:"".concat(a,"/:repo/branches"),render:function(){return c.a.createElement(w,null)}}),c.a.createElement(l.a,{render:function(){return c.a.createElement("div",null,"Not correct path.")}})))}a.d(t,"default",(function(){return S}))},82:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return r}));var n=a(16),c=a(83);function l(e){return function(t){Object(c.a)(e).then((function(e){var a;t((a=e.data,{type:n.a,payload:a}))})).catch((function(e){switch(e.response.status){case 404:t(u("No user with that email."));break;case 401:t(u("Invalid user."));break;default:return void t(u("Something wrong"))}}))}}function r(e,t){return function(a){a({type:n.d}),Object(c.d)(t,e).then((function(e){var t;a((t=e.data,{type:n.b,payload:t}))})).catch((function(e){a(u(e))}))}}function u(e){return{type:n.c,payload:e}}},83:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return u})),a.d(t,"c",(function(){return m})),a.d(t,"b",(function(){return s}));var n=a(86),c=a.n(n),l="https://api.github.com/";function r(e){return c.a.get("".concat(l,"users/").concat(e))}function u(e,t){return c.a.get("".concat(l,"users/").concat(e,"/").concat(t))}function m(e,t,a){return c.a.get("".concat(l,"repos/").concat(e,"/").concat(t,"/commits?sha=").concat(a))}function s(e,t){return c.a.get("".concat(l,"repos/").concat(e,"/").concat(t,"/branches"))}}}]);
//# sourceMappingURL=6.e140f372.chunk.js.map