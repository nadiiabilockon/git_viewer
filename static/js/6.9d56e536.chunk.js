(this.webpackJsonpgit_viewer=this.webpackJsonpgit_viewer||[]).push([[6],{118:function(e,t,a){"use strict";var n=a(2),r=a(3),c=a(5),l=a.n(c),s=a(0),u=a.n(s),i=a(6),o=u.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.noGutters,s=e.as,o=void 0===s?"div":s,m=e.className,f=Object(r.a)(e,["bsPrefix","noGutters","as","className"]),d=Object(i.a)(a,"row");return u.a.createElement(o,Object(n.a)({ref:t},f,{className:l()(m,d,c&&"no-gutters")}))}));o.defaultProps={noGutters:!1},t.a=o},124:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(0),r=a.n(n),c=a(127),l=a(118),s=a(96),u=a(31),i=a(34),o=a(85),m=a(38),f=a(37);function d(e){var t=Object(i.c)((function(e){return{userDetails:e.userDetails,user:e.user,isLoginPending:e.isLoginPending}})),a=t.userDetails,d=t.isLoginPending,g=t.user,p=e.match.params.info,b=Object(i.b)();return Object(n.useEffect)((function(){b(Object(o.b)(p,g.login))}),[]),d?r.a.createElement(m.a,null):r.a.createElement(c.a,null,r.a.createElement(f.BreadcrumbsItem,{to:"/git_viewer"},"Main Page"),r.a.createElement(c.a.Header,null,r.a.createElement(c.a.Title,{tag:"h4"},p.replace(/^\w/,(function(e){return e.toUpperCase()})))),r.a.createElement(c.a.Body,null,a.length?r.a.createElement("ul",{className:"list-unstyled team-members"},a.map((function(e,t){return r.a.createElement("li",{key:t},"repos"!==p?r.a.createElement(l.a,null,r.a.createElement(s.a,{md:"2",xs:"2"},r.a.createElement("div",{className:"avatar"},r.a.createElement("a",{href:"https://github.com/".concat(e.login)},r.a.createElement("img",{alt:"...",className:"img-circle img-no-padding img-responsive",src:e.avatar_url})))),r.a.createElement(s.a,{md:"10",xs:"10"},e.login)):r.a.createElement(l.a,null,r.a.createElement(s.a,null,r.a.createElement(u.a,{title:"Show details",to:"/git_viewer/".concat(g.login,"/").concat(p,"/").concat(e.name)},e.name),r.a.createElement(l.a,null,r.a.createElement(s.a,{md:"5",xs:"5"},r.a.createElement("span",{className:"text-muted"},r.a.createElement("small",null,"Default branch"),r.a.createElement("br",null),r.a.createElement("small",null,"Language"))),r.a.createElement(s.a,{md:"7",xs:"7",className:"text-right"},r.a.createElement("small",null,e.default_branch),r.a.createElement("br",null),r.a.createElement("small",null,e.language))))))}))):r.a.createElement("div",null,"No data")))}},84:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return i}));var n=a(87),r=a.n(n),c="https://api.github.com/";function l(e){return r.a.get("".concat(c,"users/").concat(e))}function s(e,t){return r.a.get("".concat(c,"users/").concat(e,"/").concat(t))}function u(e,t){return r.a.get("".concat(c,"repos/").concat(e,"/").concat(t))}function i(e,t){return r.a.get("".concat(c,"repos/").concat(e,"/").concat(t,"/commits"))}},85:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return l}));var n=a(12),r=a(84);function c(e){return function(t){Object(r.a)(e).then((function(e){var a;t((a=e.data,{type:n.a,payload:a}))})).catch((function(e){switch(e.response.status){case 404:t(s("No user with that email."));break;case 401:t(s("Invalid user."));break;default:return void t(s("Something wrong"))}}))}}function l(e,t){return function(a){a({type:n.d}),Object(r.d)(t,e).then((function(e){var t;a((t=e.data,{type:n.b,payload:t}))})).catch((function(e){a(s(e))}))}}function s(e){return{type:n.c,payload:e}}},96:function(e,t,a){"use strict";var n=a(2),r=a(3),c=a(5),l=a.n(c),s=a(0),u=a.n(s),i=a(6),o=["xl","lg","md","sm","xs"],m=u.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.as,m=void 0===s?"div":s,f=Object(r.a)(e,["bsPrefix","className","as"]),d=Object(i.a)(a,"col"),g=[],p=[];return o.forEach((function(e){var t,a,n,r=f[e];if(delete f[e],null!=r&&"object"===typeof r){var c=r.span;t=void 0===c||c,a=r.offset,n=r.order}else t=r;var l="xs"!==e?"-"+e:"";null!=t&&g.push(!0===t?""+d+l:""+d+l+"-"+t),null!=n&&p.push("order"+l+"-"+n),null!=a&&p.push("offset"+l+"-"+a)})),g.length||g.push(d),u.a.createElement(m,Object(n.a)({},f,{ref:t,className:l.a.apply(void 0,[c].concat(g,p))}))}));m.displayName="Col",t.a=m}}]);
//# sourceMappingURL=6.9d56e536.chunk.js.map