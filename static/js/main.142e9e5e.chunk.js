(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n,c=s(7),o=s.n(c),i=s(6),r=s(8),a=s(1),l=(s(13),s(14),s(4)),u=s.n(l),b=s(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function d(t,e){var s=e.sortType,c=e.isReversed,o=Object(r.a)(t);return s!==n.NONE&&o.sort((function(t,e){switch(s){case n.ALPHABET:return t.localeCompare(e);case n.LENGTH:return t.length-e.length;default:return 0}})),c&&o.reverse(),o}!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var h=function(){var t=Object(a.useState)(!1),e=Object(i.a)(t,2),s=e[0],c=e[1],o=Object(a.useState)(n.NONE),r=Object(i.a)(o,2),l=r[0],h=r[1],N=u()("button is-info",{"is-light":l!==n.ALPHABET}),O=u()("button is-success",{"is-light":l!==n.LENGTH}),p=u()("button is-warning",{"is-light":!s}),E=l!==n.NONE||s;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsx)("h1",{className:"title is-1",children:"React List of Goods Hooks"}),Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:N,onClick:function(){h(n.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:O,onClick:function(){h(n.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:p,onClick:function(){c(!s)},children:"Reverse"}),E&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(!1),h(n.NONE)},children:"Reset"})]}),Object(b.jsx)("ul",{children:d(j,{sortType:l,isReversed:s}).map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})]})};o.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.142e9e5e.chunk.js.map