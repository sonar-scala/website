(self.webpackChunksonar_scala=self.webpackChunksonar_scala||[]).push([[249],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97932:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(74034),a=n(79973),o=(n(67294),n(3905)),i={title:"Supported Metrics"},l={unversionedId:"about/supported-metrics",id:"about/supported-metrics",isDocsHomePage:!1,title:"Supported Metrics",description:"In addition to reporting Scalastyle and Scapegoat issues, sonar-scala currently",source:"@site/docs/about/supported-metrics.mdx",sourceDirName:"about",slug:"/about/supported-metrics",permalink:"/docs/about/supported-metrics",editUrl:"https://github.com/sonar-scala/website/edit/master/docs/about/supported-metrics.mdx",version:"current",frontMatter:{title:"Supported Metrics"},sidebar:"docs",previous:{title:"What is sonar-scala?",permalink:"/docs/about/what-is-sonar-scala"},next:{title:"Quality Rules and Profiles",permalink:"/docs/about/quality-rules-and-profiles"}},s=[],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In addition to reporting Scalastyle and Scapegoat issues, sonar-scala currently\nsupports the following SonarQube\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.sonarqube.org/display/SONAR/Metric+Definitions"},"metrics"),":"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Size")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Number of classes (and objects) - ",(0,o.kt)("inlineCode",{parentName:"li"},"classes")),(0,o.kt)("li",{parentName:"ul"},"Number of lines containing either comments or commented-out code -\n",(0,o.kt)("inlineCode",{parentName:"li"},"comment_lines")),(0,o.kt)("li",{parentName:"ul"},"Number of files (computed by the platform) - ",(0,o.kt)("inlineCode",{parentName:"li"},"files")),(0,o.kt)("li",{parentName:"ul"},"Lines of code - ",(0,o.kt)("inlineCode",{parentName:"li"},"ncloc")),(0,o.kt)("li",{parentName:"ul"},"Number of functions - ",(0,o.kt)("inlineCode",{parentName:"li"},"functions"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Coverage")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Number of lines of code which could be covered by unit tests -\n",(0,o.kt)("inlineCode",{parentName:"li"},"lines_to_cover")),(0,o.kt)("li",{parentName:"ul"},"Number of lines of code which are not covered by unit tests -\n",(0,o.kt)("inlineCode",{parentName:"li"},"uncovered_lines")),(0,o.kt)("li",{parentName:"ul"},"Percentage of line coverage - ",(0,o.kt)("inlineCode",{parentName:"li"},"line_coverage"))),(0,o.kt)("p",null,"In addition to the above, sonar-scala reports the following custom metrics,\nwhich are extracted from a Scoverage report:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Number of all statements - ",(0,o.kt)("inlineCode",{parentName:"li"},"sonar-scala-scoverage-total-statements")),(0,o.kt)("li",{parentName:"ul"},"Number of statements covered by tests -\n",(0,o.kt)("inlineCode",{parentName:"li"},"sonar-scala-scoverage-covered-statements")),(0,o.kt)("li",{parentName:"ul"},"Percentage of statement coverage - ",(0,o.kt)("inlineCode",{parentName:"li"},"sonar-scala-scoverage-statement-coverage")),(0,o.kt)("li",{parentName:"ul"},"Number of all branches - ",(0,o.kt)("inlineCode",{parentName:"li"},"sonar-scala-scoverage-total-branches")),(0,o.kt)("li",{parentName:"ul"},"Number of branches covered by tests - ",(0,o.kt)("inlineCode",{parentName:"li"},"sonar-scala-scoverage-covered-branches")),(0,o.kt)("li",{parentName:"ul"},"Percentage of branch coverage - ",(0,o.kt)("inlineCode",{parentName:"li"},"sonar-scala-scoverage-branch-coverage"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tests")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Number of unit tests - ",(0,o.kt)("inlineCode",{parentName:"li"},"tests")),(0,o.kt)("li",{parentName:"ul"},"Number of skipped unit tests - ",(0,o.kt)("inlineCode",{parentName:"li"},"skipped_tests")),(0,o.kt)("li",{parentName:"ul"},"Number of unit test errors - ",(0,o.kt)("inlineCode",{parentName:"li"},"test_errors")),(0,o.kt)("li",{parentName:"ul"},"Number of unit test failures - ",(0,o.kt)("inlineCode",{parentName:"li"},"test_failures")),(0,o.kt)("li",{parentName:"ul"},"Execution duration of unit tests - ",(0,o.kt)("inlineCode",{parentName:"li"},"test_execution_time"))))}u.isMDXComponent=!0}}]);