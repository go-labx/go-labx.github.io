"use strict";(self.webpackChunkgo_labx_github_io=self.webpackChunkgo_labx_github_io||[]).push([[1154],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(1163),i=(n(9496),n(9613));const a={},o="requestid",s={unversionedId:"middlewares/requestid",id:"middlewares/requestid",title:"requestid",description:"The Lightning Request ID middleware is designed to provide unique request IDs for every incoming request and add them to logs and response headers. This helps with tracking request in a distributed system, making it easier to debug and troubleshoot issues.",source:"@site/docs/middlewares/requestid.md",sourceDirName:"middlewares",slug:"/middlewares/requestid",permalink:"/docs/middlewares/requestid",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"middlewareSidebar",previous:{title:"Middleware",permalink:"/docs/middlewares/introduction"},next:{title:"compress",permalink:"/docs/middlewares/compress"}},l={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"API Documentation",id:"api-documentation",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"requestid"},"requestid"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Lightning")," Request ID middleware is designed to provide unique request IDs for every incoming request and add them to logs and response headers. This helps with tracking request in a distributed system, making it easier to debug and troubleshoot issues."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To use the Request ID middleware, you can install it using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/lightning-contrib/requestid\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Here is an example of how to use ",(0,i.kt)("inlineCode",{parentName:"p"},"requestid")," middleware:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/go-labx/lightning"\n    "github.com/lightning-contrib/requestid"\n)\n\nfunc main() {\n    app := lightning.NewApp()\n\n    // use the requestid middleware\n    app.Use(requestid.Default())\n\n    app.Get("/ping", func(ctx *lightning.Context) {\n        ctx.JSON(200, map[string]string{\n            "message": "pong",\n        })\n    })\n\n    app.Run()\n}\n')),(0,i.kt)("p",null,"You can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"New()")," function, it also returns a middleware, but it allows for customization of the config struct through the use of variadic Options arguments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'app.Use(requestid.New(\n    requestid.WithAlphabet("1234567890"),\n    requestid.WithHeaderKey("X-Custom-ID"),\n    requestid.WithSize(16)),\n)\n')),(0,i.kt)("h2",{id:"api-documentation"},"API Documentation"),(0,i.kt)("p",null,"For detailed API documentation and usage examples, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/lightning-contrib/requestid"},"documentation"),"."))}c.isMDXComponent=!0}}]);