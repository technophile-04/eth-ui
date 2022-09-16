"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,u=h["".concat(d,".").concat(m)]||h[m]||c[m]||i;return n?r.createElement(u,o(o({ref:t},s),{},{components:n})):r.createElement(u,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"Models.IEthersContext",title:"Interface: IEthersContext",sidebar_label:"IEthersContext",custom_edit_url:null},o=void 0,l={unversionedId:"api/interfaces/Models.IEthersContext",id:"api/interfaces/Models.IEthersContext",title:"Interface: IEthersContext",description:"Models.IEthersContext",source:"@site/docs/api/interfaces/Models.IEthersContext.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/Models.IEthersContext",permalink:"/eth-ui/docs/api/interfaces/Models.IEthersContext",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Models.IEthersContext",title:"Interface: IEthersContext",sidebar_label:"IEthersContext",custom_edit_url:null},sidebar:"api",previous:{title:"IStaticJsonRpcProviderConnectorOptions",permalink:"/eth-ui/docs/api/interfaces/EthersAppContext.IStaticJsonRpcProviderConnectorOptions"}},d={},p=[{value:"Summary",id:"summary",level:4},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"connector",id:"connector",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"provider",id:"provider",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"active",id:"active",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"signer",id:"signer",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"account",id:"account",level:3},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"chainId",id:"chainid",level:3},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"changeSigner",id:"changesigner",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"openModal",id:"openmodal",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-7",level:4},{value:"disconnectModal",id:"disconnectmodal",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-8",level:4},{value:"setModalTheme",id:"setmodaltheme",level:3},{value:"Defined in",id:"defined-in-9",level:4}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/eth-ui/docs/api/modules/Models"},"Models"),".IEthersContext"),(0,a.kt)("h4",{id:"summary"},"Summary"),(0,a.kt)("p",null,"The return type of ",(0,a.kt)("a",{parentName:"p",href:"/eth-ui/docs/api/modules/Models#tcreateethersmodalconnector"},"TCreateEthersModalConnector")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ethers compatable provider ",(0,a.kt)("a",{parentName:"li",href:"/eth-ui/docs/api/modules/Models#tethersprovider"},"TEthersProvider")),(0,a.kt)("li",{parentName:"ul"},"a callback to change the current signer"),(0,a.kt)("li",{parentName:"ul"},"the current account, chainId and signer"),(0,a.kt)("li",{parentName:"ul"},"callbacks to open the web3Modal, logout or change theme")),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Web3ReactContextInterface"),"<",(0,a.kt)("a",{parentName:"p",href:"/eth-ui/docs/api/modules/Models#tethersprovider"},(0,a.kt)("inlineCode",{parentName:"a"},"TEthersProvider")),">"),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"IEthersContext"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"connector"},"connector"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"connector"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/eth-ui/docs/api/modules/EthersAppContext#tethersmodalconnector"},(0,a.kt)("inlineCode",{parentName:"a"},"TEthersModalConnector"))),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,"Web3ReactContextInterface.connector"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/models/ethersAppContextTypes.ts#L30"},"src/models/ethersAppContextTypes.ts:30")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"provider"},"provider"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"provider"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/eth-ui/docs/api/modules/Models#tethersprovider"},(0,a.kt)("inlineCode",{parentName:"a"},"TEthersProvider"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/models/ethersAppContextTypes.ts#L31"},"src/models/ethersAppContextTypes.ts:31")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"active"},"active"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"active"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"overrides-1"},"Overrides"),(0,a.kt)("p",null,"Web3ReactContextInterface.active"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/models/ethersAppContextTypes.ts#L32"},"src/models/ethersAppContextTypes.ts:32")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"signer"},"signer"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"signer"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/eth-ui/docs/api/modules/Models#tetherssigner"},(0,a.kt)("inlineCode",{parentName:"a"},"TEthersSigner"))),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/models/ethersAppContextTypes.ts#L33"},"src/models/ethersAppContextTypes.ts:33")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"account"},"account"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"account"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"overrides-2"},"Overrides"),(0,a.kt)("p",null,"Web3ReactContextInterface.account"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/models/ethersAppContextTypes.ts#L34"},"src/models/ethersAppContextTypes.ts:34")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"chainid"},"chainId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"chainId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"overrides-3"},"Overrides"),(0,a.kt)("p",null,"Web3ReactContextInterface.chainId"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/models/ethersAppContextTypes.ts#L35"},"src/models/ethersAppContextTypes.ts:35")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"changesigner"},"changeSigner"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"changeSigner"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," (",(0,a.kt)("inlineCode",{parentName:"p"},"signer"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Signer"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/models/ethersAppContextTypes.ts#L36"},"src/models/ethersAppContextTypes.ts:36")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"openmodal"},"openModal"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"openModal"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"ethersModalConnector"),": ",(0,a.kt)("a",{parentName:"p",href:"/eth-ui/docs/api/modules/EthersAppContext#tethersmodalconnector"},(0,a.kt)("inlineCode",{parentName:"a"},"TEthersModalConnector")),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onError?"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"error"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"ethersModalConnector"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onError?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Open web3 modal for login"),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ethersModalConnector")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/eth-ui/docs/api/modules/EthersAppContext#tethersmodalconnector"},(0,a.kt)("inlineCode",{parentName:"a"},"TEthersModalConnector")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"onError?")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(",(0,a.kt)("inlineCode",{parentName:"td"},"error"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"Error"),") => ",(0,a.kt)("inlineCode",{parentName:"td"},"void"))))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/models/ethersAppContextTypes.ts#L40"},"src/models/ethersAppContextTypes.ts:40")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"disconnectmodal"},"disconnectModal"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"disconnectModal"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"onSuccess?"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"onSuccess?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h5",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"onSuccess?")),(0,a.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,a.kt)("inlineCode",{parentName:"td"},"void"))))),(0,a.kt)("h5",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/models/ethersAppContextTypes.ts#L41"},"src/models/ethersAppContextTypes.ts:41")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"setmodaltheme"},"setModalTheme"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"setModalTheme"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," (",(0,a.kt)("inlineCode",{parentName:"p"},"theme"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"light"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"dark"'),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/models/ethersAppContextTypes.ts#L42"},"src/models/ethersAppContextTypes.ts:42")))}c.isMDXComponent=!0}}]);