(this.webpackJsonpgit_viewer=this.webpackJsonpgit_viewer||[]).push([[5],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return a(e.querySelectorAll(t))}},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);function r(){return Object(a.useReducer)((function(e){return!e}),!1)[1]}},122:function(e,t,n){"use strict";var a=n(0),r=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(a.useMemo)((function(){return function(e,t){var n=r(e),a=r(t);return function(e){n&&n(e),a&&a(e)}}(e,t)}),[e,t])}},126:function(e,t,n){"use strict";n.r(t);var a=n(86),r=n(0),c=n.n(r),o=n(38),u=n(84),i=n(2),l=n(3),s=n(5),f=n.n(s),b=(n(7),n(43)),v=n(6),d=n(120),m=n(121),j=n(122),y=c.a.createContext(null),O=n(36),p=c.a.createContext(null),h=function(){},g=c.a.forwardRef((function(e,t){var n,a,o=e.as,u=void 0===o?"ul":o,s=e.onSelect,f=e.activeKey,b=e.role,v=e.onKeyDown,g=Object(l.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),w=Object(m.a)(),C=Object(r.useRef)(!1),E=Object(r.useContext)(O.a),k=Object(r.useContext)(p);k&&(b=b||"tablist",f=k.activeKey,n=k.getControlledId,a=k.getControllerId);var x=Object(r.useRef)(null),K=function(e){if(!x.current)return null;var t=Object(d.a)(x.current,"[data-rb-event-key]:not(.disabled)"),n=x.current.querySelector(".active"),a=t.indexOf(n);if(-1===a)return null;var r=a+e;return r>=t.length&&(r=0),r<0&&(r=t.length-1),t[r]},I=function(e,t){null!=e&&(s&&s(e,t),E&&E(e,t))};Object(r.useEffect)((function(){if(x.current&&C.current){var e=x.current.querySelector("[data-rb-event-key].active");e&&e.focus()}C.current=!1}));var S=Object(j.a)(t,x);return c.a.createElement(O.a.Provider,{value:I},c.a.createElement(y.Provider,{value:{role:b,activeKey:Object(O.b)(f),getControlledId:n||h,getControllerId:a||h}},c.a.createElement(u,Object(i.a)({},g,{onKeyDown:function(e){var t;switch(v&&v(e),e.key){case"ArrowLeft":case"ArrowUp":t=K(-1);break;case"ArrowRight":case"ArrowDown":t=K(1);break;default:return}t&&(e.preventDefault(),I(t.dataset.rbEventKey,e),C.current=!0,w())},ref:S,role:b}))))})),w=n(44),C=c.a.forwardRef((function(e,t){var n=e.active,a=e.className,o=e.tabIndex,u=e.eventKey,s=e.onSelect,b=e.onClick,v=e.as,d=Object(l.a)(e,["active","className","tabIndex","eventKey","onSelect","onClick","as"]),m=Object(O.b)(u,d.href),j=Object(r.useContext)(O.a),p=Object(r.useContext)(y),h=n;p&&(d.role||"tablist"!==p.role||(d.role="tab"),d["data-rb-event-key"]=m,d.id=p.getControllerId(m),d["aria-controls"]=p.getControlledId(m),h=null==n&&null!=m?p.activeKey===m:n),"tab"===d.role&&(d.tabIndex=h?o:-1,d["aria-selected"]=h);var g=Object(w.a)((function(e){b&&b(e),null!=m&&(s&&s(m,e),j&&j(m,e))}));return c.a.createElement(v,Object(i.a)({},d,{ref:t,onClick:g,className:f()(a,h&&"active")}))}));C.defaultProps={disabled:!1};var E=C,k=c.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.active,o=e.disabled,u=e.className,s=e.variant,b=e.action,d=e.as,m=e.eventKey,j=e.onClick,y=Object(l.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);n=Object(v.a)(n,"list-group-item");var p=Object(r.useCallback)((function(e){if(o)return e.preventDefault(),void e.stopPropagation();j&&j(e)}),[o,j]);return c.a.createElement(E,Object(i.a)({ref:t},y,{eventKey:Object(O.b)(m,y.href),as:d||(b?y.href?"a":"button":"div"),onClick:p,className:f()(u,n,a&&"active",o&&"disabled",s&&n+"-"+s,b&&n+"-action")}))}));k.defaultProps={variant:null,active:!1,disabled:!1},k.displayName="ListGroupItem";var x=k,K=c.a.forwardRef((function(e,t){var n,a=Object(b.a)(e,{activeKey:"onSelect"}),r=a.className,o=a.bsPrefix,u=a.variant,s=a.horizontal,d=a.as,m=void 0===d?"div":d,j=Object(l.a)(a,["className","bsPrefix","variant","horizontal","as"]);return o=Object(v.a)(o,"list-group"),n=s?!0===s?"horizontal":"horizontal-"+s:null,c.a.createElement(g,Object(i.a)({ref:t},j,{as:m,className:f()(r,o,u&&o+"-"+u,n&&o+"-"+n)}))}));K.defaultProps={variant:null,horizontal:null},K.displayName="ListGroup",K.Item=x;var I=K,S=n(127),N=n(37);function P(e){var t=Object(r.useState)({}),n=Object(a.a)(t,2),i=n[0],l=n[1],s=Object(r.useState)({}),f=Object(a.a)(s,2),b=f[0],v=f[1],d=e.match.params,m=d.owner,j=d.info,y=d.branch;Object(r.useEffect)((function(){Object(u.b)(m,y).then((function(e){return l(e.data)})),Object(u.c)(m,y).then((function(e){return v(e.data)}))}),[]),console.log(b);return Object.keys(i).length?c.a.createElement(S.a,null,c.a.createElement(N.BreadcrumbsItem,{to:"/git_viewer/".concat(m,"/").concat(j)},j),c.a.createElement(S.a.Header,null,c.a.createElement(S.a.Title,{tag:"h4"},i.name))," ",c.a.createElement(S.a.Body,null,Object.keys(b).length?c.a.createElement(I,{variant:"flush"},Object.keys(b).map((function(e){return c.a.createElement(I.Item,null,b[e].commit.message)}))):c.a.createElement("div",null,"No data"))):c.a.createElement(o.a,null)}n.d(t,"default",(function(){return P}))},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return l}));var a=n(87),r=n.n(a),c="https://api.github.com/";function o(e){return r.a.get("".concat(c,"users/").concat(e))}function u(e,t){return r.a.get("".concat(c,"users/").concat(e,"/").concat(t))}function i(e,t){return r.a.get("".concat(c,"repos/").concat(e,"/").concat(t))}function l(e,t){return r.a.get("".concat(c,"repos/").concat(e,"/").concat(t,"/commits"))}},86:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],a=!0,r=!1,c=void 0;try{for(var o,u=e[Symbol.iterator]();!(a=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(i){r=!0,c=i}finally{try{a||null==u.return||u.return()}finally{if(r)throw c}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=5.ec0668e7.chunk.js.map