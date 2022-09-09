(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./app/containers/PortfolioPage/PortfolioData.js":function(e,o){e.exports=[{framework:"ReactJS",is_project_live:!1,languages:"Javascript",project_goal:"Store project meta-data for e-commerce proxies",project_type:"Atom editor plugin",project_url:"https://github.com/nousacademy/atom-moov-console"},{framework:"none",is_project_live:!0,languages:"PHP, HTML, CSS, Javascript",project_goal:"E-commerce store front",project_type:"Wordpress web app",project_url:"https://nousacademy.com"},{framework:"none",is_project_live:!1,languages:"Bash",project_goal:"Add sneakers to cart and checkout with it, by storing cookies in a .txt file and communicating with expected endpoints.",project_type:"Command line tool",project_url:"https://github.com/nousacademy/sneaker_bots"},{framework:"none",is_project_live:!0,languages:"Javascript",project_goal:"Add sneakers to cart and checkout with it, using Chrome web UI.",project_type:"Chrome extension",project_url:"https://chrome.google.com/webstore/search/cartthief"},{framework:"none",is_project_live:!1,languages:"Javascript",project_goal:"Store 5000+ bookmarks on AWS",project_type:"Chrome extension",project_url:"https://github.com/nousacademy/jMarks"},{framework:"AngularJS v1.2.16",is_project_live:!1,languages:"Javascript",project_goal:"Directory for all companies in the building, on a kiosk in the lobby, that communicates with Google Maps API to search for various things nearby.",project_type:"Web app for kiosk screen",project_url:"https://github.com/nousacademy/lobbyguide"}]},"./app/containers/PortfolioPage/index.js":function(e,o,t){"use strict";t.r(o);var a,r=t("./node_modules/react/index.js"),i=t.n(r),s=t("./node_modules/react-helmet/lib/Helmet.js"),n=t("./node_modules/react-typist/dist/Typist.js"),c=t.n(n),l=t("./app/containers/PortfolioPage/PortfolioData.js"),d=t.n(l),p=(t("./app/containers/PortfolioPage/style.scss"),a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,o,t,r){var i=e&&e.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&i)for(var n in i)void 0===o[n]&&(o[n]=i[n]);else o||(o=i||{});if(1===s)o.children=r;else if(s>1){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+3];o.children=c}return{$$typeof:a,type:e,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}}),m=function(){function e(e,o){for(var t=0;t<o.length;t++){var a=o[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(o,t,a){return t&&e(o.prototype,t),a&&e(o,a),o}}();function f(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}var u=p(s.Helmet,{},void 0,p("title",{},void 0,"Portfolio"),p("meta",{name:"description",content:"Portfolio page for The Architect"})),v=p("div",{className:"container"},void 0,p("code",{className:"import-statement"},void 0,"import "),p("code",{},void 0,"{ "),p("code",{className:"module-statement"},void 0,"GithubPortfolio "),p("code",{},void 0,"} "),p("code",{className:"import-statement"},void 0,"from "),p("code",{className:"string-statement"},void 0,'"./github.com/nousacademy"'),p("code",{},void 0,";"),p("br",{}),p("code",{className:"import-statement"},void 0,"import "),p("code",{},void 0,"{ "),p("code",{className:"module-statement"},void 0,"LinkedinPortfolio "),p("code",{},void 0,"} "),p("code",{className:"import-statement"},void 0,"from "),p("code",{className:"string-statement"},void 0,'"./linkedin.com/nousacademy"'),p("code",{},void 0,";"),p("br",{}),p("br",{}),p("code",{className:"import-statement"},void 0,"const "),p("code",{className:"syntax--constant"},void 0,"allPortfolioProjs "),p("code",{className:"syntax--operator"},void 0,"= "),p("code",{},void 0,"["),p("code",{className:"syntax--operator"},void 0,"..."),p("code",{},void 0,"GithubPortfolio, "),p("code",{className:"syntax--operator"},void 0,"..."),p("code",{},void 0,"LinkedinPortfolio];"),p("br",{}),p("br",{}),p("code",{className:"module-statement"},void 0,"allPortfolioProjs"),p("code",{},void 0,"."),p("code",{className:"syntax--operator"},void 0,"forEach"),p("code",{},void 0,"((element) "),p("code",{className:"import-statement"},void 0,"=> "),p("code",{className:"entity-statement"},void 0,"console"),p("code",{},void 0,"."),p("code",{className:"function-statement"},void 0,"log"),p("code",{},void 0,"(element));")),g=p("br",{}),y=p("code",{},void 0," { "),h=p("code",{},void 0,"project_type: "),b=p("code",{},void 0,"} "),j=p("code",{},void 0,"framework"),_=p("code",{className:"syntax--operator"},void 0,": "),w=p("br",{}),N=p("code",{},void 0,"is_project_live"),P=p("code",{className:"syntax--operator"},void 0,": "),k=p("br",{}),x=p("code",{},void 0,"project_goal"),S=p("code",{className:"syntax--operator"},void 0,": "),O=p("br",{}),A=p("code",{},void 0,"project_type"),I=p("code",{className:"syntax--operator"},void 0,": "),J=p("br",{}),C=p("code",{},void 0,"project_url"),D=p("code",{className:"syntax--operator"},void 0,": "),E=function(e){function o(){var e,t,a;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return t=a=f(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(i))),a.state={prtfolioData:d.a,showLogElement:!1,activeId:null},a.typingDone=function(){a.setState({showLogElement:!0})},a.showFullObject=function(e){e===a.state.activeId?a.setState({activeId:null}):a.setState({activeId:e})},f(a,t)}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}(o,i.a.Component),m(o,[{key:"render",value:function(){var e=this;return p("article",{},void 0,u,p("div",{id:"main",className:"portfolio-page"},void 0,p("section",{className:"editor"},void 0,p(c.a,{onTypingDone:this.typingDone},void 0,v),g,this.state.prtfolioData.map(function(o,t){return p("div",{className:"logger"},t,e.state.showLogElement?p("div",{className:"object-items"},void 0,p("i",{className:"fas "+(t===e.state.activeId?"fa-caret-down":"fa-caret-right"),onClick:function(){return e.showFullObject(t)}}),y,h,p("code",{className:"string-statement"},void 0,'"',o.project_type,'" '),b,p("div",{className:t===e.state.activeId?"object-items show-details":"object-items hide-details"},void 0,j,_,p("code",{className:"string-statement"},void 0,'"',o.framework,'"'),w,N,P,p("code",{className:"entity-statement"},void 0,o.is_project_live.toString()),k,x,S,p("code",{className:"string-statement"},void 0,'"',o.project_goal,'"'),O,A,I,p("code",{className:"string-statement"},void 0,'"',o.project_type,'"'),J,C,D,p("a",{href:o.project_url,className:"string-statement",target:"_blank"},void 0,p("code",{},void 0,'"',o.project_url,'"')))):null)}))))}}]),o}();t.d(o,"default",function(){return E})},"./app/containers/PortfolioPage/style.scss":function(e,o,t){var a=t("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./app/containers/PortfolioPage/style.scss");"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t("./node_modules/style-loader/lib/addStyles.js")(a,r);a.locals&&(e.exports=a.locals)},"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./app/containers/PortfolioPage/style.scss":function(e,o,t){(e.exports=t("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".portfolio-page h1{font-size:2em;margin-bottom:.25em}.portfolio-page ul{font-family:Georgia,Times,Times New Roman,serif;padding-left:1.75em}.portfolio-page ul li{margin:1em 0}.portfolio-page ul li p.title{font-weight:700}.portfolio-page .object-items{margin-left:27px}.portfolio-page .object-items .fa-caret-down,.portfolio-page .object-items .fa-caret-right{cursor:pointer}.portfolio-page .hide-details{display:none}.portfolio-page .show-details{display:block}",""])}}]);