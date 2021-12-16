"use strict";(self.webpackChunksonar_scala=self.webpackChunksonar_scala||[]).push([[512],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(g,s(s({ref:t},c),{},{components:r})):n.createElement(g,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19446:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],l={title:"Sonar-scanner Properties"},i=void 0,p={unversionedId:"setup/sonar-scanner-properties",id:"setup/sonar-scanner-properties",title:"Sonar-scanner Properties",description:"The plugin exposes the following properties which can be passed to sonar-scanner",source:"@site/docs/setup/sonar-scanner-properties.mdx",sourceDirName:"setup",slug:"/setup/sonar-scanner-properties",permalink:"/docs/setup/sonar-scanner-properties",editUrl:"https://github.com/sonar-scala/website/edit/master/docs/setup/sonar-scanner-properties.mdx",tags:[],version:"current",frontMatter:{title:"Sonar-scanner Properties"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/setup/getting-started"},next:{title:"sbt-sonar",permalink:"/docs/setup/sbt-sonar"}},c=[{value:"Debug mode",id:"debug-mode",children:[],level:2}],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The plugin exposes the following properties which can be passed to sonar-scanner\nwhen running an analysis:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sonar.sources")," - Scala source directory relative to the root of your\nproject (usually ",(0,o.kt)("inlineCode",{parentName:"li"},"src/main/scala"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sonar.tests")," (optional) - Scala tests directory relative to the root of\nyour project (usually ",(0,o.kt)("inlineCode",{parentName:"li"},"src/test/scala"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sonar.junit.reportPaths")," (optional) - relative path to the directory\ncontaining unit test execution reports in Surefire XML format (defaults to\n",(0,o.kt)("inlineCode",{parentName:"li"},"target/test-reports"),"); those reports get generated automatically by sbt and\nGradle (Gradle outputs those in ",(0,o.kt)("inlineCode",{parentName:"li"},"build/test-results/test"),"), for Maven see the\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/sonar-scala/sonar-scala/examples/mvn"},"examples")," on how to\nconfigure the\n",(0,o.kt)("a",{parentName:"li",href:"https://maven.apache.org/surefire/maven-surefire-plugin/test-mojo.html"},"Surefire"),"\nplugin"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sonar.scala.version")," (optional) - defines the version of Scala used in your\nproject (requires the ",(0,o.kt)("inlineCode",{parentName:"li"},"{major}.{minor}")," versions and the patch version is\nignored, defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"2.12"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sonar.scala.scoverage.reportPath")," (optional) - relative path to the\nscoverage report (defaults to\n",(0,o.kt)("inlineCode",{parentName:"li"},"target/scala-${sonar.scala.version}/scoverage-report/scoverage.xml"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sonar.scala.scoverage.disable")," (optional) - disables the Scoverage sensor\nfrom being executed on your sources (defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sonar.scala.scalastyle.disable")," (optional) - disables the Scalastyle sensor\nfrom being executed on your sources (defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sonar.scala.scapegoat.reportPath")," (optional) - relative path to the\nscapegoat report (defaults to\n",(0,o.kt)("inlineCode",{parentName:"li"},"target/scala-${sonar.scala.version}/scapegoat-report/scapegoat.xml"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sonar.scala.scapegoat.disable")," (optional) - disables the Scapegoat sensor\nfrom being executed on your sources (defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),")")),(0,o.kt)("p",null,"See an example usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sonar-scanner \\\n  -Dsonar.host.url=https://your-sonarqube\n  -Dsonar.projectName=test \\\n  -Dsonar.projectKey=test \\\n  -Dsonar.sources=src/main/scala \\\n  -Dsonar.tests=src/test/scala \\\n  -Dsonar.sourceEncoding=UTF-8 \\\n  -Dsonar.scala.version=2.12 \\\n  -Dsonar.scoverage.reportPath=target/scala-2.12/scoverage-report/scoverage.xml \\\n  -Dsonar.scapegoat.reportPath=target/scala-2.12/scapegoat-report/scapegoat.xml\n")),(0,o.kt)("p",null,"Or simply run ",(0,o.kt)("inlineCode",{parentName:"p"},"sbt -Dsonar.host.url=https://your-sonarqube sonarScan")," if you use\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sonar-scala/sbt-sonar"},"sbt-sonar")," sbt plugin. See the\nnext page for more details on sbt-sonar."),(0,o.kt)("h2",{id:"debug-mode"},"Debug mode"),(0,o.kt)("p",null,"To run sonar-scala in a debug mode, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"sonar.verbose")," property to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),",\ne.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sbt \\\n  -Dsonar.host.url=https://your-sonarqube \\\n  -Dsonar.verbose=true \\\n  sonarScan\n")))}m.isMDXComponent=!0}}]);