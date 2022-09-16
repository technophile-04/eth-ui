"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3127],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>h});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),u=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=u(e.components);return o.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),h=n,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return t?o.createElement(m,a(a({ref:r},l),{},{components:t})):o.createElement(m,a({ref:r},l))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1969:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=t(7462),n=(t(7294),t(3905));const i={id:"EthersAppContext.NoEthereumProviderFoundError",title:"Class: NoEthereumProviderFoundError",sidebar_label:"NoEthereumProviderFoundError",custom_edit_url:null},a=void 0,s={unversionedId:"api/classes/EthersAppContext.NoEthereumProviderFoundError",id:"api/classes/EthersAppContext.NoEthereumProviderFoundError",title:"Class: NoEthereumProviderFoundError",description:"EthersAppContext.NoEthereumProviderFoundError",source:"@site/docs/api/classes/EthersAppContext.NoEthereumProviderFoundError.md",sourceDirName:"api/classes",slug:"/api/classes/EthersAppContext.NoEthereumProviderFoundError",permalink:"/eth-ui/docs/api/classes/EthersAppContext.NoEthereumProviderFoundError",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"EthersAppContext.NoEthereumProviderFoundError",title:"Class: NoEthereumProviderFoundError",sidebar_label:"NoEthereumProviderFoundError",custom_edit_url:null},sidebar:"api",previous:{title:"EthersModalConnector",permalink:"/eth-ui/docs/api/classes/EthersAppContext.EthersModalConnector"},next:{title:"NoStaticJsonRPCProviderFoundError",permalink:"/eth-ui/docs/api/classes/EthersAppContext.NoStaticJsonRPCProviderFoundError"}},c={},u=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4}],l={toc:u};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/eth-ui/docs/api/modules/EthersAppContext"},"EthersAppContext"),".NoEthereumProviderFoundError"),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Error")),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"NoEthereumProviderFoundError"))))),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new NoEthereumProviderFoundError"),"()"),(0,n.kt)("h4",{id:"overrides"},"Overrides"),(0,n.kt)("p",null,"Error.constructor"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/connectorErrors.ts#L34"},"src/context/ethers-app/connectors/connectorErrors.ts:34")))}p.isMDXComponent=!0}}]);