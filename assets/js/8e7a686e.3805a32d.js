"use strict";(self.webpackChunkgo_labx_github_io=self.webpackChunkgo_labx_github_io||[]).push([[9443],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),g=o,f=c["".concat(l,".").concat(g)]||c[g]||d[g]||a;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,p[1]=i;for(var u=2;u<a;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6731:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(1163),o=(r(9496),r(9613));const a={},p="pprof",i={unversionedId:"middlewares/pprof",id:"middlewares/pprof",title:"pprof",description:"pprof is a Go package that provides a set of HTTP handlers for profiling Go programs. It is built on top of the standard net/http/pprof package and is designed to work with the lightning web framework.",source:"@site/docs/middlewares/pprof.md",sourceDirName:"middlewares",slug:"/middlewares/pprof",permalink:"/docs/middlewares/pprof",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"middlewareSidebar",previous:{title:"static",permalink:"/docs/middlewares/static"}},l={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"API Documentation",id:"api-documentation",level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pprof"},"pprof"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pprof")," is a Go package that provides a set of HTTP handlers for profiling Go programs. It is built on top of the standard ",(0,o.kt)("inlineCode",{parentName:"p"},"net/http/pprof")," package and is designed to work with the ",(0,o.kt)("inlineCode",{parentName:"p"},"lightning")," web framework."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/lightning-contrib/pprof\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Here is an example of how to use this package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/go-labx/lightning"\n    "github.com/lightning-contrib/pprof"\n)\n\nfunc main() {\n    app := lightning.DefaultApp()\n    pprof.Register(app)\n    app.Run()\n}\n')),(0,o.kt)("p",null,"By default, the package's HTTP handlers are registered under the ",(0,o.kt)("inlineCode",{parentName:"p"},"/debug/pprof")," prefix. You can customize the prefix by passing an optional argument to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Register")," function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'pprof.Register(app, "/admin/debug/pprof")\n')),(0,o.kt)("p",null,"Once the package's HTTP handlers are registered, you can access them using a web browser or a command-line tool like ",(0,o.kt)("inlineCode",{parentName:"p"},"go tool pprof"),". Here are some examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To view the heap profile of your Go program, visit ",(0,o.kt)("a",{parentName:"li",href:"http://127.0.0.1:6789/debug/pprof/heap?debug=1"},"http://127.0.0.1:6789/debug/pprof/heap?debug=1")," in your web browser."),(0,o.kt)("li",{parentName:"ul"},"To view the goroutine profile of your Go program, visit ",(0,o.kt)("a",{parentName:"li",href:"http://127.0.0.1:6789/debug/pprof/goroutine?debug=1"},"http://127.0.0.1:6789/debug/pprof/goroutine?debug=1")," in your web browser."),(0,o.kt)("li",{parentName:"ul"},"To view the block profile of your Go program, visit ",(0,o.kt)("a",{parentName:"li",href:"http://127.0.0.1:6789/debug/pprof/block?debug=1"},"http://127.0.0.1:6789/debug/pprof/block?debug=1")," in your web browser."),(0,o.kt)("li",{parentName:"ul"},"To view the mutex profile of your Go program, visit ",(0,o.kt)("a",{parentName:"li",href:"http://127.0.0.1:6789/debug/pprof/mutex?debug=1"},"http://127.0.0.1:6789/debug/pprof/mutex?debug=1")," in your web browser."),(0,o.kt)("li",{parentName:"ul"},"To view the symbol table of your Go program, visit http://localhost:6789/debug/pprof/symbol?debug=1 in your web browser.")),(0,o.kt)("p",null,"Note that the above URLs assume that your lightning application is running on ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," and listening on port ",(0,o.kt)("inlineCode",{parentName:"p"},"6789"),". If your application is running on a different host or port, you need to adjust the URLs accordingly."),(0,o.kt)("h2",{id:"api-documentation"},"API Documentation"),(0,o.kt)("p",null,"For detailed API documentation and usage examples, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/lightning-contrib/pprof"},"documentation"),"."))}d.isMDXComponent=!0}}]);