"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},l=void 0,c={permalink:"/eth-ui/blog/2022/05/03/ React 18 & a Better web3 Login Experience [v4.2.x updates]",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-05-03 React 18 & a Better web3 Login Experience [v4.2.x updates].md",source:"@site/blog/2022-05-03 React 18 & a Better web3 Login Experience [v4.2.x updates].md",title:" React 18 & a Better web3 Login Experience [v4.2.x updates]",description:"React 18 Updates",date:"2022-05-03T00:00:00.000Z",formattedDate:"May 3, 2022",tags:[],readingTime:.79,hasTruncateMarker:!1,authors:[],frontMatter:{}},i={authorsImageUrls:[]},s=[{value:"React 18 Updates",id:"react-18-updates",level:2},{value:"Better login / logout error handling",id:"better-login--logout-error-handling",level:2},{value:"EthersModalConnector",id:"ethersmodalconnector",level:3},{value:"How does EthersAppContext tie in?",id:"how-does-ethersappcontext-tie-in",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"react-18-updates"},"React 18 Updates"),(0,o.kt)("p",null,"Eth-hooks, Eth-components and Scaffold-eth-typescript have been updated to React 18."),(0,o.kt)("p",null,"React 18 removes ",(0,o.kt)("inlineCode",{parentName:"p"},"{children: ReactNode}")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"React.FC")," and so the library had typescript errors when used with react 18, and all of this should be solved."),(0,o.kt)("h2",{id:"better-login--logout-error-handling"},"Better login / logout error handling"),(0,o.kt)("h3",{id:"ethersmodalconnector"},"EthersModalConnector"),(0,o.kt)("p",null,"EthersModalConnectors now throws typed errors that an app could use to show notifications when login and logout fails."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Login now has ",(0,o.kt)("inlineCode",{parentName:"li"},"onError")," callback that passes back the typed error"),(0,o.kt)("li",{parentName:"ul"},"Logout now also invoke a callback ",(0,o.kt)("inlineCode",{parentName:"li"},"onSuccess")," incase certain actions needed to be taken on logout")),(0,o.kt)("h3",{id:"how-does-ethersappcontext-tie-in"},"How does EthersAppContext tie in?"),(0,o.kt)("p",null,"Both these can be used via by ethersAppContext as the ",(0,o.kt)("inlineCode",{parentName:"p"},"modal")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"EthersModalConnector")," to invoke web3-modal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const ethersAppContext = useEthersAppContext();\n\n// loginOnError is the callback that would be called with the error\nethersContext.openModal(connector, loginOnError);\n\n// logoutOnSuccess is the callback that woudl be called when the app successfully logs out of the users wallet\nethersAppContext.disconnectModal(props.logoutOnSuccess);\n")))}u.isMDXComponent=!0}}]);