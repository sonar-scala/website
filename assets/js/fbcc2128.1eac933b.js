"use strict";(self.webpackChunksonar_scala=self.webpackChunksonar_scala||[]).push([[5],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(a),m=n,y=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return a?r.createElement(y,l(l({ref:t},c),{},{components:a})):r.createElement(y,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},4401:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),l=["components"],i={title:"Quality Rules and Profiles"},s=void 0,u={unversionedId:"about/quality-rules-and-profiles",id:"about/quality-rules-and-profiles",title:"Quality Rules and Profiles",description:"This plugin integrates 69 quality checks from",source:"@site/docs/about/quality-rules-and-profiles.mdx",sourceDirName:"about",slug:"/about/quality-rules-and-profiles",permalink:"/docs/about/quality-rules-and-profiles",editUrl:"https://github.com/sonar-scala/website/edit/master/docs/about/quality-rules-and-profiles.mdx",tags:[],version:"current",frontMatter:{title:"Quality Rules and Profiles"},sidebar:"docs",previous:{title:"Supported Metrics",permalink:"/docs/about/supported-metrics"},next:{title:"Compatibility with SonarQube",permalink:"/docs/about/compatibility-with-sonarqube"}},c=[],p={toc:c};function f(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This plugin integrates 69 quality checks from\n",(0,o.kt)("a",{parentName:"p",href:"https://scalastyle.beautiful-scala.com"},"Scalastyle")," and 118 from\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sksamuel/scapegoat"},"Scapegoat"),". 41 of the Scalastyle rules\nare defined without parameters, and the remaining 28 are rule templates, which\nallow you to set up custom rules by specifying the parameters yourself. Most of\nthose are already activated for you with default values recommended by\nScalastyle. Scapegoat rules don't contain any templates."),(0,o.kt)("p",null,"sonar-scala creates two rules repositories and four built-in quality profiles:\n",(0,o.kt)("inlineCode",{parentName:"p"},"Scalastyle"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Scapegoat")," and a combination of those two ",(0,o.kt)("inlineCode",{parentName:"p"},"Scalastyle+Scapegoat"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"Recommended by sonar-scala"),". The rules in the quality profiles are almost\nall activated, except for those which are broken in the upstream projects and\nhad to be blacklisted."),(0,o.kt)("p",null,"To make changes to any of the rules, you can clone the quality profile of your\nchoice and then you should be able to activate or deactivate rules, change rule\nseverity and create more custom rules from the existing templates.\nAlternatively, you can create your quality profile and activate rules from any\nof the repositories using SonarQube rule filtering and bulk-change features\navailable on the Rules page."),(0,o.kt)("p",null,"For more information about Scalastyle and Scapegoat rules, please consult the\nupstream documentation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Scalastyle - ",(0,o.kt)("a",{parentName:"li",href:"https://scalastyle.beautiful-scala.com"},"https://scalastyle.beautiful-scala.com")),(0,o.kt)("li",{parentName:"ul"},"Scapegoat - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/sksamuel/scapegoat"},"https://github.com/sksamuel/scapegoat"))),(0,o.kt)("p",null,"You can also browse the rules created by sonar-scala in the Rules section on\nthis website, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/rules/scalastyle"},"here")," for Scalastyle and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/rules/scapegoat"},"here")," for Scapegoat."))}f.isMDXComponent=!0}}]);