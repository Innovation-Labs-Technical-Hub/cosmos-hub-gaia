"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[5967],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=d(n),u=r,m=g["".concat(s,".").concat(u)]||g[u]||c[u]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(8168),r=(n(6540),n(5680));const i={title:"Setting up Tendermint KMS + Ledger",order:6},o=void 0,l={unversionedId:"validators/kms/kms_ledger",id:"validators/kms/kms_ledger",title:"Setting up Tendermint KMS + Ledger",description:"The following instructions are a brief walkthrough and not a comprehensive guideline. You should consider and research more about the security implications of activating an external KMS.",source:"@site/docs/validators/kms/kms_ledger.md",sourceDirName:"validators/kms",slug:"/validators/kms/kms_ledger",permalink:"/main/validators/kms/kms_ledger",draft:!1,tags:[],version:"current",frontMatter:{title:"Setting up Tendermint KMS + Ledger",order:6},sidebar:"tutorialSidebar",previous:{title:"KMS - Key Management System",permalink:"/main/validators/kms/"},next:{title:"Validator Overview",permalink:"/main/validators/overview"}},s={},d=[{value:"Tendermint Validator app (for Ledger devices)",id:"tendermint-validator-app-for-ledger-devices",level:2},{value:"KMS configuration",id:"kms-configuration",level:2},{value:"Config file",id:"config-file",level:3},{value:"Generate secret key",id:"generate-secret-key",level:3},{value:"Retrieve validator key",id:"retrieve-validator-key",level:3},{value:"Gaia configuration",id:"gaia-configuration",level:2}],p={toc:d},g="wrapper";function c(e){let{components:t,...i}=e;return(0,r.yg)(g,(0,a.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{type:"warning"},(0,r.yg)("p",{parentName:"admonition"},"The following instructions are a brief walkthrough and not a comprehensive guideline. You should consider and ",(0,r.yg)("a",{parentName:"p",href:"/main/validators/security"},"research more about the security implications")," of activating an external KMS.")),(0,r.yg)("admonition",{type:"warning"},(0,r.yg)("p",{parentName:"admonition"},"KMS and Ledger Tendermint app are currently work in progress. Details may vary. Use with care under your own risk.")),(0,r.yg)("h2",{id:"tendermint-validator-app-for-ledger-devices"},"Tendermint Validator app (for Ledger devices)"),(0,r.yg)("p",null,"You should be able to find the Tendermint app in Ledger Live."),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Note: at the moment, you might need to enable ",(0,r.yg)("inlineCode",{parentName:"em"},"developer mode")," in Ledger Live settings")),(0,r.yg)("h2",{id:"kms-configuration"},"KMS configuration"),(0,r.yg)("p",null,"In this section, we will configure a KMS to use a Ledger device running the Tendermint Validator App."),(0,r.yg)("h3",{id:"config-file"},"Config file"),(0,r.yg)("p",null,"You can find other configuration examples ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/iqlusioninc/tmkms/blob/master/tmkms.toml.example"},"here")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Create a ",(0,r.yg)("inlineCode",{parentName:"li"},"~/.tmkms/tmkms.toml")," file with the following content (use an adequate ",(0,r.yg)("inlineCode",{parentName:"li"},"chain_id"),")")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-toml"},'# Example KMS configuration file\n[[validator]]\naddr = "tcp://localhost:26658"    # or "unix:///path/to/socket"\nchain_id = "gaia-11001"\nreconnect = true # true is the default\nsecret_key = "~/.tmkms/secret_connection.key"\n\n[[providers.ledgertm]]\nchain_ids = ["gaia-11001"]\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Edit ",(0,r.yg)("inlineCode",{parentName:"li"},"addr")," to point to your ",(0,r.yg)("inlineCode",{parentName:"li"},"gaiad")," instance."),(0,r.yg)("li",{parentName:"ul"},"Adjust ",(0,r.yg)("inlineCode",{parentName:"li"},"chain-id")," to match your ",(0,r.yg)("inlineCode",{parentName:"li"},".gaia/config/config.toml")," settings."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"provider.ledgertm")," has no additional parameters at the moment, however, it is important that you keep that header to enable the feature.")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Plug your Ledger device and open the Tendermint validator app.")),(0,r.yg)("h3",{id:"generate-secret-key"},"Generate secret key"),(0,r.yg)("p",null,"Now you need to generate secret_key:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"tmkms keygen ~/.tmkms/secret_connection.key\n")),(0,r.yg)("h3",{id:"retrieve-validator-key"},"Retrieve validator key"),(0,r.yg)("p",null,"The last step is to retrieve the validator key that you will use in ",(0,r.yg)("inlineCode",{parentName:"p"},"gaiad"),"."),(0,r.yg)("p",null,"Start the KMS:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"tmkms start -c ~/.tmkms/tmkms.toml\n")),(0,r.yg)("p",null,"The output should look similar to:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"07:28:24 [INFO] tmkms 0.3.0 starting up...\n07:28:24 [INFO] [keyring:ledgertm:ledgertm] added validator key cosmosvalconspub1zcjduepqy53m39prgp9dz3nz96kaav3el5e0th8ltwcf8cpavqdvpxgr5slsd6wz6f\n07:28:24 [INFO] KMS node ID: 1BC12314E2E1C29015B66017A397F170C6ECDE4A\n")),(0,r.yg)("p",null,"The KMS may complain that it cannot connect to gaiad. That is fine, we will fix it in the next section."),(0,r.yg)("p",null,"This output indicates the validator key linked to this particular device is: ",(0,r.yg)("inlineCode",{parentName:"p"},"cosmosvalconspub1zcjduepqy53m39prgp9dz3nz96kaav3el5e0th8ltwcf8cpavqdvpxgr5slsd6wz6f")),(0,r.yg)("p",null,"Take note of the validator pubkey that appears in your screen. ",(0,r.yg)("em",{parentName:"p"},"We will use it in the next section.")),(0,r.yg)("h2",{id:"gaia-configuration"},"Gaia configuration"),(0,r.yg)("p",null,"You need to enable KMS access by editing ",(0,r.yg)("inlineCode",{parentName:"p"},".gaia/config/config.toml"),". In this file, modify ",(0,r.yg)("inlineCode",{parentName:"p"},"priv_validator_laddr")," to create a listening address/port or a unix socket in ",(0,r.yg)("inlineCode",{parentName:"p"},"gaiad"),"."),(0,r.yg)("p",null,"For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-toml"},'...\n# TCP or UNIX socket address for Tendermint to listen on for\n# connections from an external PrivValidator process\npriv_validator_laddr = "tcp://127.0.0.1:26658"\n...\n')),(0,r.yg)("p",null,"Let's assume that you have set up your validator account and called it ",(0,r.yg)("inlineCode",{parentName:"p"},"kmsval"),". You can tell gaiad the key that we've got in the previous section."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"gaiad gentx --name kmsval --pubkey {.ValidatorKey} \n")),(0,r.yg)("p",null,"Now start ",(0,r.yg)("inlineCode",{parentName:"p"},"gaiad"),". You should see that the KMS connects and receives a signature request."),(0,r.yg)("p",null,"Once the ledger receives the first message, it will ask for confirmation that the values are adequate."),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(6329).A,width:"300",height:"150"})),(0,r.yg)("p",null,"Click the right button, if the height and round are correct."),(0,r.yg)("p",null,"After that, you will see that the KMS will start forwarding all signature requests to the ledger:"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(382).A,width:"313",height:"150"})),(0,r.yg)("admonition",{type:"warning"},(0,r.yg)("p",{parentName:"admonition"},"The word TEST in the second picture, second line appears because they were taken on a pre-release version."),(0,r.yg)("p",{parentName:"admonition"},"Once the app as been released in Ledger's app store, this word should NOT appear.")))}c.isMDXComponent=!0},6329:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/ledger_1-333b5a02b13138ef329933950ec162af.jpg"},382:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/ledger_2-0fe258512b66899f1a60ffb8986ebb48.jpg"}}]);