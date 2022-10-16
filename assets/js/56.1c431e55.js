(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[56],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),i=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(f,c(c({ref:t},u),{},{components:n})):o.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<a;i++)c[i]=n[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},814:(e,t,n)=>{"use strict";n.d(t,{Z:()=>q});var o=n(7462),r=n(7294),a=n(2389),c=n(6010),s=n(2949),l=n(6668);function i(){const{prism:e}=(0,l.L)(),{colorMode:t}=(0,s.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var u=n(5281),p=n(7594),m=n.n(p);const d=/title=(?<quote>["'])(?<title>.*?)\1/,f=/\{(?<range>[\d,-]+)\}/,y={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function g(e,t){const n=e.map((e=>{const{start:n,end:o}=y[e];return"(?:"+n+"\\s*("+t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+o+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function h(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:r,metastring:a}=t;if(a&&f.test(a)){const e=a.match(f).groups.range;if(0===r.length)throw new Error("A highlight range has been given in code block's metastring (``` "+a+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");const t=r[0].className,o=m()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);default:return g(Object.keys(y),t)}}(o,r),s=n.split("\n"),l=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),p=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let m=0;m<s.length;){const e=s[m].match(c);if(!e){m+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?l[i[t]].range+=m+",":u[t]?l[u[t]].start=m:p[t]&&(l[p[t]].range+=l[p[t]].start+"-"+(m-1)+","),s.splice(m,1)}n=s.join("\n");const d={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;m()(n).forEach((e=>{null!=d[e]||(d[e]=[]),d[e].push(t)}))})),{lineClassNames:d,code:n}}const b="codeBlockContainer_Ckt0";function v(e){let{as:t,...n}=e;const a=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const a=t[o];a&&"string"==typeof r&&(n[a]=r)})),n}(i());return r.createElement(t,(0,o.Z)({},n,{style:a,className:(0,c.Z)(n.className,b,u.k.common.codeBlock)}))}const k={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function E(e){let{children:t,className:n}=e;return r.createElement(v,{as:"pre",tabIndex:0,className:(0,c.Z)(k.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:k.codeBlockLines},t))}var N=n(902);const B={attributes:!0,characterData:!0,childList:!0,subtree:!0};function j(e,t){const[n,o]=(0,r.useState)(),a=(0,r.useCallback)((()=>{var t;o(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((()=>{a()}),[a]),function(e,t,n){void 0===n&&(n=B);const o=(0,N.zX)(t),a=(0,N.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,a),()=>t.disconnect()}),[e,o,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const w={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var C={Prism:n(7410).Z,theme:w};function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(){return L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},L.apply(this,arguments)}var T=/\r\n|\r|\n/,x=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},P=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},S=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=L({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=L({},n,{backgroundColor:null}),r};function _(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const I=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),O(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?S(e.theme,e.language):void 0;return t.themeDict=n})),O(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=L({},_(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==r&&(a.style=void 0!==a.style?L({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),O(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var c=o?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(s))}})),O(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,c=L({},_(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?L({},c.style,r):r),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),O(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,c=0,s=[],l=[s];c>-1;){for(;(a=o[c]++)<r[c];){var i=void 0,u=t[c],p=n[c][a];if("string"==typeof p?(u=c>0?u:["plain"],i=p):(u=P(u,p.type),p.alias&&(u=P(u,p.alias)),i=p.content),"string"==typeof i){var m=i.split(T),d=m.length;s.push({types:u,content:m[0]});for(var f=1;f<d;f++)x(s),l.push(s=[]),s.push({types:u,content:m[f]})}else c++,t.push(u),n.push(i),o.push(0),r.push(i.length)}c--,t.pop(),n.pop(),o.pop(),r.pop()}return x(s),l}(void 0!==c?this.tokenize(t,o,c,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),A="codeLine_lJS_",Z="codeLineNumber_Tfdd",D="codeLineContent_feaV";function z(e){let{line:t,classNames:n,showLineNumbers:a,getLineProps:s,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=s({line:t,className:(0,c.Z)(n,a&&A)}),u=t.map(((e,t)=>r.createElement("span",(0,o.Z)({key:t},l({token:e,key:t})))));return r.createElement("span",i,a?r.createElement(r.Fragment,null,r.createElement("span",{className:Z}),r.createElement("span",{className:D},u)):r.createElement(r.Fragment,null,u,r.createElement("br",null)))}var H=n(5999);const M={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function V(e){let{code:t,className:n}=e;const[o,a]=(0,r.useState)(!1),s=(0,r.useRef)(void 0),l=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const a=document.getSelection();let c=!1;a.rangeCount>0&&(c=a.getRangeAt(0)),n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}o.remove(),c&&(a.removeAllRanges(),a.addRange(c)),r&&r.focus()}(t),a(!0),s.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),r.createElement("button",{type:"button","aria-label":o?(0,H.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,H.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,H.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",n,M.copyButton,o&&M.copyButtonCopied),onClick:l},r.createElement("span",{className:M.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:M.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:M.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const W="wordWrapButtonIcon_Bwma",R="wordWrapButtonEnabled_EoeP";function F(e){let{className:t,onClick:n,isEnabled:o}=e;const a=(0,H.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,c.Z)("clean-btn",t,o&&R),"aria-label":a,title:a},r.createElement("svg",{className:W,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function $(e){var t;let{children:n,className:a="",metastring:s,title:u,showLineNumbers:p,language:m}=e;const{prism:{defaultLanguage:f,magicComments:y}}=(0,l.L)(),g=null!=(t=null!=m?m:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(a))?t:f,b=i(),E=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),a=(0,r.useRef)(null),c=(0,r.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),s=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");o(n)}),[a]);return j(a,s),(0,r.useEffect)((()=>{s()}),[e,s]),(0,r.useEffect)((()=>(window.addEventListener("resize",s,{passive:!0}),()=>{window.removeEventListener("resize",s)})),[s]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:c}}(),N=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(d))?void 0:n.groups.title)?t:""}(s)||u,{lineClassNames:B,code:w}=h(n,{metastring:s,language:g,magicComments:y}),O=null!=p?p:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(s);return r.createElement(v,{as:"div",className:(0,c.Z)(a,g&&!a.includes("language-"+g)&&"language-"+g)},N&&r.createElement("div",{className:k.codeBlockTitle},N),r.createElement("div",{className:k.codeBlockContent},r.createElement(I,(0,o.Z)({},C,{theme:b,code:w,language:null!=g?g:"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:a}=e;return r.createElement("pre",{tabIndex:0,ref:E.codeBlockRef,className:(0,c.Z)(t,k.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,c.Z)(k.codeBlockLines,O&&k.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(z,{key:t,line:e,getLineProps:o,getTokenProps:a,classNames:B[t],showLineNumbers:O})))))})),r.createElement("div",{className:k.buttonGroup},(E.isEnabled||E.isCodeScrollable)&&r.createElement(F,{className:k.codeButton,onClick:()=>E.toggle(),isEnabled:E.isEnabled}),r.createElement(V,{className:k.codeButton,code:w}))))}function q(e){let{children:t,...n}=e;const c=(0,a.Z)(),s=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof s?$:E;return r.createElement(l,(0,o.Z)({key:String(c)},n),s)}},7594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);