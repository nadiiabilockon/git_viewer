(this.webpackJsonpgit_viewer=this.webpackJsonpgit_viewer||[]).push([[7],{121:function(e,t,a){e.exports=a.p+"static/media/damir-bosnjak.a6f24e7d.jpg"},128:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(76),l=a(120),u=a(98),o=a(85),s=a(127),i=a(126),m=a(117),f=a(129),b=a(84),p=a(33);function E(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],E=Object(p.b)(),d=Object(p.c)((function(e){return{error:e.error}})).error;return c.a.createElement(s.a,{className:"card-user"},c.a.createElement("h5",{className:"text-center mt-4"},"Search user"),c.a.createElement(s.a.Body,null,c.a.createElement(i.a,{onSubmit:function(e){e.preventDefault(),E(Object(b.a)(a))}},c.a.createElement(l.a,{className:"justify-content-center"},c.a.createElement(u.a,{className:"pr-1",md:"5"},c.a.createElement(m.a,null,c.a.createElement(i.a.Control,{placeholder:"Github user",type:"text",onChange:function(e){r(e.target.value)}}))),c.a.createElement(u.a,{className:"px-1",md:"3"},c.a.createElement(f.a,{className:"btn-round",variant:"dark",type:"submit"},"Search"))),d?c.a.createElement(l.a,{className:"justify-content-center"},c.a.createElement("p",null,"No user with this name")):null)))}var d=a(123),j=a(75);var h=function(e){var t=Object(n.useState)(""),r=Object(o.a)(t,2),i=r[0],m=r[1],f=Object(n.useState)(""),b=Object(o.a)(f,2),E=b[0],h=b[1],O=Object(n.useState)(""),g=Object(o.a)(O,2),v=g[0],N=g[1],y=Object(n.useState)(""),w=Object(o.a)(y,2),S=w[0],k=w[1],x=Object(n.useState)(""),_=Object(o.a)(x,2),B=_[0],C=_[1],J=Object(n.useState)(""),D=Object(o.a)(J,2),F=D[0],G=D[1],I=Object(n.useState)(""),q=Object(o.a)(I,2),z=q[0],A=q[1],H=Object(p.c)((function(e){return e.user}));Object(n.useEffect)((function(){K(H)}),[H]);var K=function(e){var t=e.name,a=e.login,n=e.followers,c=e.following,r=e.public_repos,l=e.avatar_url,u=e.bio;m(t),h(a),N(n),k(c),C(r),G(l),A(u)},L=[{prop:v,info:"followers",img:c.a.createElement(d.b,null)},{prop:B,info:"repos",img:c.a.createElement(d.a,null)},{prop:S,info:"following",img:c.a.createElement(d.b,null)}];return c.a.createElement(s.a,{className:"card-user"},c.a.createElement("div",{className:"image"},c.a.createElement("img",{alt:"...",src:a(121)})),c.a.createElement(s.a.Body,null,c.a.createElement("div",{className:"author"},c.a.createElement("a",{href:"https://github.com/".concat(E)},c.a.createElement("img",{alt:"...",className:"avatar border-gray",src:F}),c.a.createElement("h5",{className:"title"},i)),c.a.createElement("p",{className:"description"},E)),c.a.createElement("p",{className:"description text-center"},z)),c.a.createElement(s.a.Footer,null,c.a.createElement("hr",null),c.a.createElement("div",{className:"button-container"},c.a.createElement(l.a,null,L.map((function(e,t){return c.a.createElement(u.a,{key:t,className:"ml-auto",lg:"3",md:"6",xs:"6"},c.a.createElement(j.a,{to:"/git_viewer/".concat(E,"/").concat(e.info)},c.a.createElement("span",null,e.img,e.prop)))}))))))};t.default=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.user}));return Object(n.useEffect)((function(){Object.keys(t).length||e(Object(b.a)("example"))})),c.a.createElement(r.a,null,c.a.createElement(l.a,null,c.a.createElement(u.a,{md:"4"},c.a.createElement(h,null)),c.a.createElement(u.a,{md:"8"},c.a.createElement(E,null))))}},83:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"d",(function(){return u})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return s}));var n=a(86),c=a.n(n),r="https://api.github.com/";function l(e){return c.a.get("".concat(r,"users/").concat(e))}function u(e,t){return c.a.get("".concat(r,"users/").concat(e,"/").concat(t))}function o(e,t){return c.a.get("".concat(r,"repos/").concat(e,"/").concat(t))}function s(e,t){return c.a.get("".concat(r,"repos/").concat(e,"/").concat(t,"/commits"))}},84:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return l}));var n=a(12),c=a(83);function r(e){return function(t){Object(c.a)(e).then((function(e){var a;t((a=e.data,{type:n.a,payload:a}))})).catch((function(e){switch(e.response.status){case 404:t(u("No user with that email."));break;case 401:t(u("Invalid user."));break;default:return void t(u("Something wrong"))}}))}}function l(e,t){return function(a){a({type:n.d}),Object(c.d)(t,e).then((function(e){var t;a((t=e.data,{type:n.b,payload:t}))})).catch((function(e){a(u(e))}))}}function u(e){return{type:n.c,payload:e}}}}]);
//# sourceMappingURL=7.acec18fe.chunk.js.map