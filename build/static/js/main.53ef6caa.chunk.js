(this["webpackJsonpgithub-repos"]=this["webpackJsonpgithub-repos"]||[]).push([[0],{18:function(e,t,a){e.exports=a(45)},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),s=a.n(c),l=a(2),o=Object(n.memo)((function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"container header"},r.a.createElement("h1",null,"Github Repos Search"),r.a.createElement("a",{href:"https://github.com/stanley823/github-repos-search",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fe fe-github"}))))})),i=a(3),m=a.n(i);a(8);m.a.locale("zh-tw");var u=Object(n.memo)((function(e){var t=e.full_name,a=e.description,n=e.stargazers_count,c=e.pushed_at,s=e.language,l=e.html_url;return r.a.createElement("li",null,r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},t),r.a.createElement("p",null,a),s&&r.a.createElement("div",{className:"lists__topic"},r.a.createElement("span",null,s)),r.a.createElement("div",{className:"lists__others"},r.a.createElement("p",{className:"lists__others__star"},r.a.createElement("i",{className:"fe fe-star"}),r.a.createElement("span",null,n)),r.a.createElement("p",{className:"lists__others__updated"},r.a.createElement("i",null,"Updated"),r.a.createElement("span",null,m()(c).fromNow()))))})),h=a(17),p=a(48);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b={transition:"opacity ".concat(250,"ms ease-in-out"),opacity:0},E={entering:{opacity:1,zIndex:100},entered:{opacity:1,zIndex:100},exiting:{opacity:0,zIndex:-2e3},exited:{opacity:0,zIndex:-2e3}},d=Object(n.memo)((function(e){var t=e.active;return r.a.createElement(p.a,{in:t,timeout:250},(function(e){return r.a.createElement("div",{style:g({},b,{},E[e]),className:"loading",timeout:250},r.a.createElement("i",{className:"fe fe-loader"}),r.a.createElement("span",null,"Loading..."))}))})),O=Object(n.memo)((function(){return r.a.createElement("div",{className:"empty"},r.a.createElement("i",{className:"fe fe-alert-triangle"}),r.a.createElement("span",null,"Data Empty"),r.a.createElement("p",null,"Enter Keyword to Search Github repository"))})),v=Object(n.memo)((function(e){var t=e.searching,a=e.items,c=e.total;return r.a.createElement("section",{className:"lists"},a.length<=0&&!t&&r.a.createElement(O,null),a.length>0&&r.a.createElement(n.Fragment,null,r.a.createElement("h3",{className:"lists__title"},c," repository results"),r.a.createElement("ul",{className:"lists__container"},a.map((function(e,t){return r.a.createElement(u,Object.assign({key:t},e))})))),r.a.createElement(d,{active:t}))})),j=Object(n.memo)((function(e){var t=e.searchText,a=e.setSearchText;return r.a.createElement("div",{className:"filters__search"},r.a.createElement("input",{type:"text",name:"search",placeholder:"Search...",value:t,onChange:function(e){return a(e.target.value)}}))}));m.a.locale("zh-tw");var y=Object(n.memo)((function(e){return r.a.createElement("div",{className:"filters__info"},r.a.createElement("h3",null,"\u67e5\u8a62\u9650\u5236"),r.a.createElement("p",null,"\u7e3d\u6b21\u6578",r.a.createElement("span",null,e["x-ratelimit-limit"])),r.a.createElement("p",null,"\u5c1a\u6709\u6b21\u6578",r.a.createElement("span",null,e["x-ratelimit-remaining"])),r.a.createElement("p",null,"\u6b21\u6578\u91cd\u8a2d\u65bc",r.a.createElement("span",null,m()(1e3*e["x-ratelimit-reset"]).fromNow())))})),_=Object(n.memo)((function(e){var t=e.searchText,a=e.setSearchText,n=e.limit;return r.a.createElement("aside",{className:"filters"},r.a.createElement(j,{searchText:t,setSearchText:a}),Object.keys(n).length>0&&r.a.createElement(y,n))})),w=a(6),x=a(5),S=a.n(x);S.a.defaults.baseURL="https://api.github.com",S.a.interceptors.response.use((function(e){return e}),(function(e){if(e&&e.response)switch(e.response.status){case 404:console.log("\u627e\u4e0d\u5230\u8a72\u9801\u9762");break;case 500:console.log("\u4f3a\u670d\u5668\u51fa\u932f");break;case 503:console.log("\u670d\u52d9\u5931\u6548");break;default:console.log("\u9023\u63a5\u932f\u8aa4".concat(e.response.status))}else console.log("\u9023\u63a5\u5230\u670d\u52d9\u5668\u5931\u6557");return Promise.resolve(e.response)}));var T=S.a;function N(e){var t=e.debouncedSearchText,a=e.page,n=e.setPage,r=e.setSearching,c=e.items,s=e.setItems,l=e.setTotal,o=e.setLimit,i=e.loadMore,m=a+1;n(i?m:1);var u="search/repositories?q=".concat(t,"&page=").concat(i?m:a);T.get(u).then((function(e){r(!1),o(e.headers),s(i?[].concat(Object(w.a)(c),Object(w.a)(e.data.items)):e.data.items||[]),l(e.data.total_count)})).catch((function(e){n(i?m-1:1),r(!1),alert("\u67e5\u8a62\u6b21\u6578\u8d85\u51fa\u9650\u5236\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66")}))}function P(e){var t=e.searchText,a=e.items,r=e.setItems,c=e.setSearching,s=e.setTotal,o=e.setLimit,i=e.setPage,m=function(e,t){var a=Object(n.useState)(e),r=Object(l.a)(a,2),c=r[0],s=r[1];return Object(n.useEffect)((function(){var a=setTimeout((function(){s(e)}),t);return function(){return clearTimeout(a)}}),[e,t]),c}(t,500);Object(n.useEffect)((function(){m?(r([]),c(!0),N({debouncedSearchText:m,page:1,setPage:i,items:a,setSearching:c,setItems:r,setTotal:s,setLimit:o})):(r([]),s(0),o({}))}),[m])}var k=function(){var e=Object(n.useState)(1),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(l.a)(s,2),m=i[0],u=i[1],h=Object(n.useState)(!1),p=Object(l.a)(h,2),f=p[0],g=p[1],b=Object(n.useState)([]),E=Object(l.a)(b,2),d=E[0],O=E[1],j=Object(n.useState)(0),y=Object(l.a)(j,2),w=y[0],x=y[1],S=Object(n.useState)({}),T=Object(l.a)(S,2),k=T[0],I=T[1];return P({searchText:m,items:d,setItems:O,setSearching:g,setTotal:x,setLimit:I,setPage:c}),function(e){var t=e.searchText,a=e.page,r=e.setPage,c=e.items,s=e.setItems,l=e.total,o=e.setTotal,i=e.searching,m=e.setSearching,u=e.setLimit;function h(){var e=document.body.scrollTop||document.documentElement.scrollTop;window.innerHeight+e===document.documentElement.offsetHeight&&c.length<l&&!i&&(m(!0),N({debouncedSearchText:t,page:a,setPage:r,items:c,setSearching:m,setItems:s,setTotal:o,setLimit:u,loadMore:!0}))}Object(n.useEffect)((function(){return window.addEventListener("scroll",h,!1),function(){return window.removeEventListener("scroll",h,!1)}}),[c,a,l,i])}({searchText:m,page:a,setPage:c,items:d,setItems:O,total:w,setTotal:x,searching:f,setSearching:g,setLimit:I}),r.a.createElement("div",{className:"root"},r.a.createElement(o,null),r.a.createElement("main",{className:"container"},r.a.createElement(_,{searchText:m,setSearchText:u,limit:k}),r.a.createElement(v,{searching:f,items:d,total:w})))};a(44),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.53ef6caa.chunk.js.map