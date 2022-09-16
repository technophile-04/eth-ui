"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9590],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,k=h["".concat(d,".").concat(m)]||h[m]||c[m]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={id:"EthersAppContext.EthersModalConnector",title:"Class: EthersModalConnector",sidebar_label:"EthersModalConnector",custom_edit_url:null},i=void 0,l={unversionedId:"api/classes/EthersAppContext.EthersModalConnector",id:"api/classes/EthersAppContext.EthersModalConnector",title:"Class: EthersModalConnector",description:"EthersAppContext.EthersModalConnector",source:"@site/docs/api/classes/EthersAppContext.EthersModalConnector.md",sourceDirName:"api/classes",slug:"/api/classes/EthersAppContext.EthersModalConnector",permalink:"/eth-ui/docs/api/classes/EthersAppContext.EthersModalConnector",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"EthersAppContext.EthersModalConnector",title:"Class: EthersModalConnector",sidebar_label:"EthersModalConnector",custom_edit_url:null},sidebar:"api",previous:{title:"CouldNotActivateError",permalink:"/eth-ui/docs/api/classes/EthersAppContext.CouldNotActivateError"},next:{title:"NoEthereumProviderFoundError",permalink:"/eth-ui/docs/api/classes/EthersAppContext.NoEthereumProviderFoundError"}},d={},p=[{value:"Summary",id:"summary",level:4},{value:"\u2728 Features",id:"-features",level:5},{value:"\u270f\ufe0f Notes",id:"\ufe0f-notes",level:5},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implements",id:"implements",level:2},{value:"Properties",id:"properties",level:2},{value:"_options",id:"_options",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"_providerBase",id:"_providerbase",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_ethersProvider",id:"_ethersprovider",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"_web3Modal",id:"_web3modal",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"_id",id:"_id",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"_debug",id:"_debug",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"_config",id:"_config",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"_signer",id:"_signer",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"_theme",id:"_theme",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"isModalOpening",id:"ismodalopening",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"Accessors",id:"accessors",level:2},{value:"config",id:"config",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"Methods",id:"methods",level:2},{value:"hasCachedProvider",id:"hascachedprovider",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"log",id:"log",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"loadWeb3Modal",id:"loadweb3modal",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"activate",id:"activate",level:3},{value:"Summary",id:"summary-1",level:4},{value:"\u270f\ufe0f Notes",id:"\ufe0f-notes-1",level:5},{value:"\u26a0\ufe0f Errors",id:"\ufe0f-errors",level:5},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"deactivate",id:"deactivate",level:3},{value:"Summary",id:"summary-2",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"getProvider",id:"getprovider",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"getChainId",id:"getchainid",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"getAccount",id:"getaccount",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"getSigner",id:"getsigner",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Defined in",id:"defined-in-19",level:4},{value:"getSignerFromAccount",id:"getsignerfromaccount",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-20",level:4},{value:"changeSigner",id:"changesigner",level:3},{value:"Summary",id:"summary-3",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Implementation of",id:"implementation-of-3",level:4},{value:"Defined in",id:"defined-in-21",level:4},{value:"validState",id:"validstate",level:3},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-22",level:4},{value:"resetModal",id:"resetmodal",level:3},{value:"Summary",id:"summary-4",level:4},{value:"Returns",id:"returns-13",level:4},{value:"Implementation of",id:"implementation-of-4",level:4},{value:"Defined in",id:"defined-in-23",level:4},{value:"setModalTheme",id:"setmodaltheme",level:3},{value:"Summary",id:"summary-5",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-14",level:4},{value:"Implementation of",id:"implementation-of-5",level:4},{value:"Defined in",id:"defined-in-24",level:4},{value:"checkValidCachedProvider",id:"checkvalidcachedprovider",level:3},{value:"Returns",id:"returns-15",level:4},{value:"Defined in",id:"defined-in-25",level:4},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-26",level:4}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/eth-ui/docs/api/modules/EthersAppContext"},"EthersAppContext"),".EthersModalConnector"),(0,a.kt)("h4",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This is a connector for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NoahZinsmeister/web3-react"},"web3-react")," that allows it to interface with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Web3Modal/web3modal"},"web3Modal"),".\nThe provider selected by user via web3modal is interfaced to the web3-react context."),(0,a.kt)("h5",{id:"-features"},"\u2728 Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This connector used with ",(0,a.kt)("a",{parentName:"li",href:"/eth-ui/docs/api/modules/EthersAppContext#useetherscontext"},"useEthersContext")," allows the app and all the hooks to effortlessly access the current network, provider, signer, address information IEthersContext"),(0,a.kt)("li",{parentName:"ul"},"The connector centralizes and takes care of management of the web3 interaction and provides a consistent exprience for your app.")),(0,a.kt)("h5",{id:"\ufe0f-notes"},"\u270f\ufe0f Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"inherits from web3-react class AbstractConnector")),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"AbstractConnector")),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"EthersModalConnector"))))),(0,a.kt)("h2",{id:"implements"},"Implements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/eth-ui/docs/api/interfaces/EthersAppContext.ICommonModalConnector"},(0,a.kt)("inlineCode",{parentName:"a"},"ICommonModalConnector")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"_options"},"_","options"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("strong",{parentName:"p"},"_","options"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"ICoreOptions"),">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L72"},"src/context/ethers-app/connectors/EthersModalConnector.ts:72")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_providerbase"},"_","providerBase"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"_","providerBase"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L73"},"src/context/ethers-app/connectors/EthersModalConnector.ts:73")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_ethersprovider"},"_","ethersProvider"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"_","ethersProvider"),": ",(0,a.kt)("a",{parentName:"p",href:"/eth-ui/docs/api/modules/Models#tethersprovider"},(0,a.kt)("inlineCode",{parentName:"a"},"TEthersProvider"))),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L74"},"src/context/ethers-app/connectors/EthersModalConnector.ts:74")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_web3modal"},"_","web3Modal"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"_","web3Modal"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Core")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L75"},"src/context/ethers-app/connectors/EthersModalConnector.ts:75")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_id"},"_","id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("strong",{parentName:"p"},"_","id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L76"},"src/context/ethers-app/connectors/EthersModalConnector.ts:76")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_debug"},"_","debug"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("strong",{parentName:"p"},"_","debug"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L77"},"src/context/ethers-app/connectors/EthersModalConnector.ts:77")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_config"},"_","config"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("strong",{parentName:"p"},"_","config"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"TEthersModalConfig"),">"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L78"},"src/context/ethers-app/connectors/EthersModalConnector.ts:78")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_signer"},"_","signer"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("strong",{parentName:"p"},"_","signer"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Signer")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L79"},"src/context/ethers-app/connectors/EthersModalConnector.ts:79")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_theme"},"_","theme"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("strong",{parentName:"p"},"_","theme"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"TWeb3ModalTheme")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeColors")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L80"},"src/context/ethers-app/connectors/EthersModalConnector.ts:80")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ismodalopening"},"isModalOpening"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"isModalOpening"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L81"},"src/context/ethers-app/connectors/EthersModalConnector.ts:81")),(0,a.kt)("h2",{id:"accessors"},"Accessors"),(0,a.kt)("h3",{id:"config"},"config"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"config"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"TEthersModalConfig"),">"),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"TEthersModalConfig"),">"),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L83"},"src/context/ethers-app/connectors/EthersModalConnector.ts:83")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"hascachedprovider"},"hasCachedProvider"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"hasCachedProvider"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/eth-ui/docs/api/interfaces/EthersAppContext.ICommonModalConnector"},"ICommonModalConnector"),".",(0,a.kt)("a",{parentName:"p",href:"/eth-ui/docs/api/interfaces/EthersAppContext.ICommonModalConnector#hascachedprovider"},"hasCachedProvider")),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L87"},"src/context/ethers-app/connectors/EthersModalConnector.ts:87")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"log"},"log"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("strong",{parentName:"p"},"log"),"(...",(0,a.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"...args")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"),"[]")))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L117"},"src/context/ethers-app/connectors/EthersModalConnector.ts:117")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"loadweb3modal"},"loadWeb3Modal"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"loadWeb3Modal"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,a.kt)("p",null,"ICommonModalConnector.loadWeb3Modal"),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L167"},"src/context/ethers-app/connectors/EthersModalConnector.ts:167")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"activate"},"activate"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"activate"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"ConnectorUpdate"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),">",">"),(0,a.kt)("h4",{id:"summary-1"},"Summary"),(0,a.kt)("p",null,"Inherits from AbstractConnector.  This activates web3Modal and opens the modal."),(0,a.kt)("h5",{id:"\ufe0f-notes-1"},"\u270f\ufe0f Notes"),(0,a.kt)("p",null,"Once the user selects a provider"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"this will activate the provider and attach the appropriate event listeners."),(0,a.kt)("li",{parentName:"ul"},"get the account and signer"),(0,a.kt)("li",{parentName:"ul"},"gets the ethers compatable provider")),(0,a.kt)("h5",{id:"\ufe0f-errors"},"\u26a0\ufe0f Errors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/eth-ui/docs/api/classes/EthersAppContext.UserClosedModalError"},"UserClosedModalError")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/eth-ui/docs/api/classes/EthersAppContext.CouldNotActivateError"},"CouldNotActivateError"))),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"ConnectorUpdate"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),">",">"),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,"AbstractConnector.activate"),(0,a.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L189"},"src/context/ethers-app/connectors/EthersModalConnector.ts:189")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"deactivate"},"deactivate"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"deactivate"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"summary-2"},"Summary"),(0,a.kt)("p",null,"Safely deactivates the current provider and removes all event listeners"),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"overrides-1"},"Overrides"),(0,a.kt)("p",null,"AbstractConnector.deactivate"),(0,a.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L262"},"src/context/ethers-app/connectors/EthersModalConnector.ts:262")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getprovider"},"getProvider"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getProvider"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/eth-ui/docs/api/modules/Models#tethersprovider"},(0,a.kt)("inlineCode",{parentName:"a"},"TEthersProvider")),">"),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/eth-ui/docs/api/modules/Models#tethersprovider"},(0,a.kt)("inlineCode",{parentName:"a"},"TEthersProvider")),">"),(0,a.kt)("h4",{id:"overrides-2"},"Overrides"),(0,a.kt)("p",null,"AbstractConnector.getProvider"),(0,a.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L282"},"src/context/ethers-app/connectors/EthersModalConnector.ts:282")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getchainid"},"getChainId"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getChainId"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,a.kt)("h4",{id:"returns-7"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,a.kt)("h4",{id:"overrides-3"},"Overrides"),(0,a.kt)("p",null,"AbstractConnector.getChainId"),(0,a.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L286"},"src/context/ethers-app/connectors/EthersModalConnector.ts:286")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getaccount"},"getAccount"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getAccount"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,a.kt)("h4",{id:"returns-8"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,a.kt)("h4",{id:"overrides-4"},"Overrides"),(0,a.kt)("p",null,"AbstractConnector.getAccount"),(0,a.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L296"},"src/context/ethers-app/connectors/EthersModalConnector.ts:296")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getsigner"},"getSigner"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getSigner"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Signer")),(0,a.kt)("h4",{id:"returns-9"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Signer")),(0,a.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,a.kt)("p",null,"ICommonModalConnector.getSigner"),(0,a.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L308"},"src/context/ethers-app/connectors/EthersModalConnector.ts:308")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getsignerfromaccount"},"getSignerFromAccount"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getSignerFromAccount"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"returns-10"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L312"},"src/context/ethers-app/connectors/EthersModalConnector.ts:312")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"changesigner"},"changeSigner"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"changeSigner"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"signer"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"summary-3"},"Summary"),(0,a.kt)("p",null,"Change the current signer and account used by the connector"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"signer")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Signer"))))),(0,a.kt)("h4",{id:"returns-11"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"implementation-of-3"},"Implementation of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/eth-ui/docs/api/interfaces/EthersAppContext.ICommonModalConnector"},"ICommonModalConnector"),".",(0,a.kt)("a",{parentName:"p",href:"/eth-ui/docs/api/interfaces/EthersAppContext.ICommonModalConnector#changesigner"},"changeSigner")),(0,a.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L323"},"src/context/ethers-app/connectors/EthersModalConnector.ts:323")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"validstate"},"validState"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("strong",{parentName:"p"},"validState"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"returns-12"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-22"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L334"},"src/context/ethers-app/connectors/EthersModalConnector.ts:334")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"resetmodal"},"resetModal"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"resetModal"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"summary-4"},"Summary"),(0,a.kt)("p",null,"Resets the web3Modal and clears the cache"),(0,a.kt)("h4",{id:"returns-13"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"implementation-of-4"},"Implementation of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/eth-ui/docs/api/interfaces/EthersAppContext.ICommonModalConnector"},"ICommonModalConnector"),".",(0,a.kt)("a",{parentName:"p",href:"/eth-ui/docs/api/interfaces/EthersAppContext.ICommonModalConnector#resetmodal"},"resetModal")),(0,a.kt)("h4",{id:"defined-in-23"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L342"},"src/context/ethers-app/connectors/EthersModalConnector.ts:342")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"setmodaltheme"},"setModalTheme"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"setModalTheme"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"theme"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"summary-5"},"Summary"),(0,a.kt)("p",null,"Sets the web3modal theme: light | dark | ThemeColors"),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"theme")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"TWeb3ModalTheme")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"ThemeColors"))))),(0,a.kt)("h4",{id:"returns-14"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"implementation-of-5"},"Implementation of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/eth-ui/docs/api/interfaces/EthersAppContext.ICommonModalConnector"},"ICommonModalConnector"),".",(0,a.kt)("a",{parentName:"p",href:"/eth-ui/docs/api/interfaces/EthersAppContext.ICommonModalConnector#setmodaltheme"},"setModalTheme")),(0,a.kt)("h4",{id:"defined-in-24"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L357"},"src/context/ethers-app/connectors/EthersModalConnector.ts:357")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"checkvalidcachedprovider"},"checkValidCachedProvider"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"checkValidCachedProvider"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"returns-15"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-25"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L361"},"src/context/ethers-app/connectors/EthersModalConnector.ts:361")),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new EthersModalConnector"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"web3modalOptions"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"config?"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"id?"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"debug?"),")"),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"web3modalOptions")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"ICoreOptions"),">"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:"left"},"see ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/Web3Modal/web3modal#provider-options"},"web3modal docs")," for details.  You can also check the ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/scaffold-eth/scaffold-eth-typescript/blob/next/packages/vite-app-ts/src/config/web3ModalConfig.ts"},"scaffold-eth-typescript web3config")," for an example.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"config")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"TEthersModalConfig")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configuration for EthersModalConnector")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"id?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:"left"},"allows you to connect directly to a specific provider.  ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/Web3Modal/web3modal#connect-to-specific-provider"},"See docs"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"debug")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:"left"},"turn on debug logging")))),(0,a.kt)("h4",{id:"overrides-5"},"Overrides"),(0,a.kt)("p",null,"AbstractConnector.constructor"),(0,a.kt)("h4",{id:"defined-in-26"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-ui/blob/3e4ee2e/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L97"},"src/context/ethers-app/connectors/EthersModalConnector.ts:97")))}c.isMDXComponent=!0}}]);