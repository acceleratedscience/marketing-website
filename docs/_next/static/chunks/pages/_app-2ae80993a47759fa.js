(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4184:function(e,t){var r; /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0!==(r=(function(){return o}).apply(t,[]))&&(e.exports=r)}()},3454:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(7663)},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3877)}])},400:function(e,t,r){"use strict";r.d(t,{rj:function(){return s}});var n=r(1799),o=r(9534),a=r(5893),i=r(2095),l=r.n(i),c=r(4184),u=r.n(c),s=function(e){var t=e.className,r=(0,o.Z)(e,["className"]);return(0,a.jsx)("div",(0,n.Z)({className:u()(l().grid,t)},r))}},1210:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=r,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4941).Z;r(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(2648).Z,a=r(7273).Z,i=o(r(7294)),l=r(6273),c=r(2725),u=r(3462),s=r(1018),f=r(7190),p=r(1210),d=r(8684),h={};function v(e,t,r,n){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,r,n)).catch(function(e){});var o=n&&void 0!==n.locale?n.locale:e&&e.locale;h[t+"%"+r+(o?"%"+o:"")]=!0}}var b=i.default.forwardRef(function(e,t){var r,o,b=e.href,y=e.as,m=e.children,g=e.prefetch,_=e.passHref,O=e.replace,E=e.shallow,x=e.scroll,j=e.locale,C=e.onClick,S=e.onMouseEnter,T=e.onTouchStart,w=e.legacyBehavior,N=void 0===w?!0!==Boolean(!1):w,P=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=m,N&&("string"==typeof r||"number"==typeof r)&&(r=i.default.createElement("a",null,r));var R=!1!==g,A=i.default.useContext(u.RouterContext),L=i.default.useContext(s.AppRouterContext);L&&(A=L);var k=i.default.useMemo(function(){var e=n(l.resolveHref(A,b,!0),2),t=e[0],r=e[1];return{href:t,as:y?l.resolveHref(A,y):r||t}},[A,b,y]),I=k.href,M=k.as,B=i.default.useRef(I),D=i.default.useRef(M);N&&(o=i.default.Children.only(r));var U=N?o&&"object"==typeof o&&o.ref:t,F=n(f.useIntersection({rootMargin:"200px"}),3),V=F[0],G=F[1],W=F[2],Z=i.default.useCallback(function(e){(D.current!==M||B.current!==I)&&(W(),D.current=M,B.current=I),V(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[M,U,I,W,V]);i.default.useEffect(function(){var e=G&&R&&l.isLocalURL(I),t=void 0!==j?j:A&&A.locale,r=h[I+"%"+M+(t?"%"+t:"")];e&&!r&&v(A,I,M,{locale:t})},[M,I,G,j,R,A]);var H={ref:Z,onClick:function(e){N||"function"!=typeof C||C(e),N&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,c,u,s,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(d=(p=e).currentTarget.target)||"_self"===d)&&!p.metaKey&&!p.ctrlKey&&!p.shiftKey&&!p.altKey&&(!p.nativeEvent||2!==p.nativeEvent.which)&&l.isLocalURL(r)){e.preventDefault();var p,d,h=function(){"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:u,scroll:c}):t[o?"replace":"push"](r,{forceOptimisticNavigation:!f})};s?i.default.startTransition(h):h()}}(e,A,I,M,O,E,x,j,Boolean(L),R)},onMouseEnter:function(e){N||"function"!=typeof S||S(e),N&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),!(!R&&L)&&l.isLocalURL(I)&&v(A,I,M,{priority:!0})},onTouchStart:function(e){N||"function"!=typeof T||T(e),N&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),!(!R&&L)&&l.isLocalURL(I)&&v(A,I,M,{priority:!0})}};if(!N||_||"a"===o.type&&!("href"in o.props)){var K=void 0!==j?j:A&&A.locale,X=A&&A.isLocaleDomain&&p.getDomainLocale(M,K,A.locales,A.domainLocales);H.href=X||d.addBasePath(c.addLocale(M,K,A&&A.defaultLocale))}return N?i.default.cloneElement(o,H):i.default.createElement("a",Object.assign({},P,H),r)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,r=e.rootRef,u=e.rootMargin,s=e.disabled||!i,f=n(o.useState(!1),2),p=f[0],d=f[1],h=n(o.useState(null),2),v=h[0],b=h[1];return o.useEffect(function(){if(i){if(!s&&!p&&v&&v.tagName){var e,t,n,o,f,h,b;return t=function(e){return e&&d(e)},f=(o=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=l.get(n)))return t;var o=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},c.push(r),l.set(r,t),t}(n={root:null==r?void 0:r.current,rootMargin:u})).id,h=o.observer,(b=o.elements).set(v,t),h.observe(v),function(){if(b.delete(v),h.unobserve(v),0===b.size){h.disconnect(),l.delete(f);var e=c.findIndex(function(e){return e.root===f.root&&e.margin===f.margin});e>-1&&c.splice(e,1)}}}}else if(!p){var y=a.requestIdleCallback(function(){return d(!0)});return function(){return a.cancelIdleCallback(y)}}},[v,s,u,r,p]),[b,p,o.useCallback(function(){d(!1)},[])]};var o=r(7294),a=r(9311),i="function"==typeof IntersectionObserver,l=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,r(2648).Z)(r(7294)),o=n.default.createContext(null);t.AppRouterContext=o;var a=n.default.createContext(null);t.LayoutRouterContext=a;var i=n.default.createContext(null);t.GlobalLayoutRouterContext=i;var l=n.default.createContext(null);t.TemplateContext=l},3877:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Y}});var n=r(1799),o=r(5893);r(46),r(906);var a=r(3454),i={};try{a.env.CARBON_ENABLE_CSS_CUSTOM_PROPERTIES&&"true"===a.env.CARBON_ENABLE_CSS_CUSTOM_PROPERTIES?i.enableCssCustomProperties=!0:i.enableCssCustomProperties=!1,a.env.CARBON_ENABLE_USE_CONTROLLED_STATE_WITH_VALUE&&"true"===a.env.CARBON_ENABLE_USE_CONTROLLED_STATE_WITH_VALUE?i.enableUseControlledStateWithValue=!0:i.enableUseControlledStateWithValue=!1,a.env.CARBON_ENABLE_CSS_GRID&&"true"===a.env.CARBON_ENABLE_CSS_GRID?i.enableCssGrid=!0:i.enableCssGrid=!1,a.env.CARBON_ENABLE_V11_RELEASE&&"true"===a.env.CARBON_ENABLE_V11_RELEASE?i.enableV11Release=!0:i.enableV11Release=!1,a.env.CARBON_ENABLE_EXPERIMENTAL_TILE_CONTRAST&&"true"===a.env.CARBON_ENABLE_EXPERIMENTAL_TILE_CONTRAST?i.enableExperimentalTileContrast=!0:i.enableExperimentalTileContrast=!1}catch(l){i.enableCssCustomProperties=!1,i.enableUseControlledStateWithValue=!1,i.enableCssGrid=!1,i.enableV11Release=!1,i.enableExperimentalTileContrast=!1}var c=[{name:"enable-css-custom-properties",description:"Describe what the flag does",enabled:i.enableCssCustomProperties},{name:"enable-use-controlled-state-with-value",description:"Enable components to be created in either a controlled or uncontrolled mode\n",enabled:i.enableUseControlledStateWithValue},{name:"enable-css-grid",description:"Enable CSS Grid Layout in the Grid and Column React components\n",enabled:i.enableCssGrid},{name:"enable-v11-release",description:"Enable the features and functionality for the v11 Release\n",enabled:i.enableV11Release},{name:"enable-experimental-tile-contrast",description:"Enable the experimental tile improved contrast styles\n",enabled:i.enableExperimentalTileContrast}];function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],i=!0,l=!1;try{for(o=o.call(e);!(i=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){l=!0,n=c}finally{try{i||null==o.return||o.return()}finally{if(l)throw n}}return a}}(e,t)||f(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}for(var d=function(){var e,t,r;function n(e){var t=this;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,n),this.flags=new Map,e&&Object.keys(e).forEach(function(r){t.flags.set(r,e[r])})}return t=[{key:"checkForFlag",value:function(e){if(!this.flags.has(e))throw Error("Unable to find a feature flag with the name: `".concat(e,"`"))}},{key:"add",value:function(e,t){if(this.flags.has(e))throw Error("The feature flag: ".concat(e," already exists"));this.flags.set(e,t)}},{key:"enable",value:function(e){this.checkForFlag(e),this.flags.set(e,!0)}},{key:"disable",value:function(e){this.checkForFlag(e),this.flags.set(e,!1)}},{key:"merge",value:function(e){var t=this;Object.keys(e).forEach(function(r){t.flags.set(r,e[r])})}},{key:"mergeWithScope",value:function(e){var t,r=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=f(e))){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}(e.flags);try{for(r.s();!(t=r.n()).done;){var n=s(t.value,2),o=n[0],a=n[1];!this.flags.has(o)&&this.flags.set(o,a)}}catch(i){r.e(i)}finally{r.f()}}},{key:"enabled",value:function(e){return this.checkForFlag(e),this.flags.get(e)}}],u(n.prototype,t),r&&u(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}(),h=new d(void 0),v=0;v<c.length;v++){var b=c[v];h.add(b.name,b.enabled)}!function(){return h.merge.apply(h,arguments)}({"enable-css-custom-properties":!0,"enable-css-grid":!0,"enable-v11-release":!0,"enable-experimental-tile-contrast":!1});var y=r(7294);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach(function(t){_(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(){return(O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var x,j,C,S=r(4184),T=r.n(S),w=r(5697),N=r.n(w),P=(C=Object.keys(j={"aria-label":N().string,"aria-labelledby":N().string})).reduce(function(e,t){var r;return g(g({},e),{},_({},t,(r=j[t],function(e,t,n){for(var o=arguments.length,a=Array(o>3?o-3:0),i=3;i<o;i++)a[i-3]=arguments[i];return r.apply(void 0,[e,t,n].concat(a))})))},{}),R=y.createContext("cds");function A(){return y.useContext(R)}var L=["className","children"],k=function(e){var t=e.className,r=e.children,n=E(e,L),o=A(),a=T()("".concat(o,"--header"),t);return y.createElement("header",O({},n,{className:a}),r)};k.propTypes=g(g({},P),{},{className:N().string});var I=["element","isSideNavExpanded"],M=y.forwardRef(function(e,t){var r=e.element;e.isSideNavExpanded;var n=E(e,I);return y.createElement(r,g(g({},n),{},{ref:t}))}),B={element:N().elementType,isSideNavExpanded:N().bool};M.displayName="Link",M.propTypes=B,M.defaultProps={element:"a"};var D=["children","className","prefix","href"];function U(e){var t=e.children,r=e.className,n=e.prefix,o=e.href,a=E(e,D),i=A(),l=T()("".concat(i,"--header__name"),r);return y.createElement(M,O({},a,{className:l,href:o}),n&&y.createElement(y.Fragment,null,y.createElement("span",{className:"".concat(i,"--header__name--prefix")},n),"\xa0"),t)}U.propTypes=g(g({},B),{},{children:N().node.isRequired,className:N().string,href:N().string,prefix:N().string}),U.defaultProps={prefix:"IBM"};var F=r(1664),V=r.n(F),G=function(){return(0,o.jsxs)(k,{"aria-label":"IBM Platform Name",children:[(0,o.jsx)(V(),{href:"/",prefix:"",children:(0,o.jsx)("a",{href:"/",className:"cds--header__name",children:"Accelerate.Science"})}),(0,o.jsx)(U,{href:"https://pages.github.ibm.com/Accelerated-Discovery/Discovery-Platform/user-guide/user-guide/",prefix:"",children:"Docs"})]})},W=r(2779);function Z(){var e=(0,y.useState)(!1);return e[0],e[1],null}var H=r(2706),K=r.n(H),X=r(400),q=function(e){var t=e.children,r=e.href,n=e.title;return(0,o.jsx)("li",{className:K().listItem,children:(0,o.jsx)(V(),{href:r,children:(0,o.jsx)("a",{href:r,title:n,children:t})})})},z=function(e){var t=e.heading,r=e.children;return(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:K().wrapper,children:(0,o.jsxs)(X.rj,{children:[(0,o.jsx)("div",{className:K().left,children:(0,o.jsx)("span",{className:K().heading,children:(0,o.jsx)(V(),{href:"/",children:(0,o.jsx)("a",{href:"/",title:t,children:t})})})}),(0,o.jsx)("div",{className:K().right,children:(0,o.jsx)("ul",{className:K().list,children:r})})]})})})},Q=function(e){var t=e.children;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Z,{}),(0,o.jsx)(G,{}),(0,o.jsx)("main",{children:t}),(0,o.jsxs)(z,{heading:"Accelerate.Science",children:[(0,o.jsx)(q,{href:"#signup",title:"Sign Up",children:"Sign Up"}),(0,o.jsx)(q,{href:"/case-studies",title:"Case Studies",children:"Case Studies"}),(0,o.jsx)(q,{href:"https://pages.github.ibm.com/Accelerated-Discovery/Discovery-Platform/user-guide/user-guide/",title:"Documentation",children:"Documentation"})]})]})},Y=function(e){var t=e.Component,r=e.pageProps;return(0,o.jsx)(Q,{children:(0,o.jsx)(t,(0,n.Z)({},r))})}},2779:function(e){e.exports={toggle:"Dev_toggle__t96Z8",refGrid:"Dev_refGrid___vWH5"}},2095:function(e){e.exports={grid:"Grid_grid__dSAVC"}},2706:function(e){e.exports={wrapper:"Footer_wrapper__5j9y7",left:"Footer_left__VQhBW",right:"Footer_right__z7ky8",heading:"Footer_heading__cS8Z0",icon:"Footer_icon__jkqwK",list:"Footer_list__fzX89"}},906:function(){},46:function(){},7663:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function a(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(n){r=i}}();var c=[],u=!1,s=-1;function f(){u&&n&&(u=!1,n.length?c=n.concat(c):s=-1,c.length&&p())}function p(){if(!u){var e=l(f);u=!0;for(var t=c.length;t;){for(n=c,c=[];++s<t;)n&&n[s].run();s=-1,t=c.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new d(e,t)),1!==c.length||u||l(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}},i=!0;try{t[e](a,a.exports,n),i=!1}finally{i&&delete r[e]}return a.exports}n.ab="//";var o=n(229);e.exports=o}()},1664:function(e,t,r){e.exports=r(8418)},2703:function(e,t,r){"use strict";var n=r(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1799:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){n(e,t,r[t])})}return e}r.d(t,{Z:function(){return o}})},9534:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,{Z:function(){return n}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(387)}),_N_E=e.O()}]);