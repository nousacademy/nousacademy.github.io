(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./app/containers/AboutMePage/index.js":function(e,o,t){"use strict";t.r(o);var n,r=t("./node_modules/react/index.js"),a=t.n(r),s=t("./node_modules/react-helmet/lib/Helmet.js"),i=t("./node_modules/react-typist/dist/Typist.js"),l=t.n(i),c=(t("./app/containers/AboutMePage/style.scss"),n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,o,t,r){var a=e&&e.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&a)for(var i in a)void 0===o[i]&&(o[i]=a[i]);else o||(o=a||{});if(1===s)o.children=r;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];o.children=l}return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}}),d=function(){function e(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(o,t,n){return t&&e(o.prototype,t),n&&e(o,n),o}}();function u(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}var f=c(s.Helmet,{},void 0,c("title",{},void 0,"About"),c("meta",{name:"description",content:"About page for The Architect"})),m=c("code",{className:"syntax--comment"},void 0,"// About me "),p=c("br",{}),b=c("br",{}),y=c("code",{className:"syntax--comment"},void 0,"// I currently work F/T at CVS as a Javascript developer."),v=c("br",{}),h=c("br",{}),g=c("br",{}),w=c("code",{className:"syntax--comment"},void 0,"// If you have any cool project ideas let me know"),_=c("br",{}),j=c("code",{className:"syntax--comment"},void 0,"// You can email me at alex.elkan5@gmail.com "),x=c("br",{}),A=c("br",{}),N=c("code",{className:"function-statement"},void 0,"laterz"),P=c("code",{},void 0,"();"),k=c("div",{className:"console-error animated bounceInDown"},void 0,c("i",{className:"fas fa-times-circle"}),c("span",{className:"error-msg"},void 0,"VM9159:1 Uncaught ReferenceError: laterz is not defined")),M=function(e){function o(){var e,t,n;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return t=n=u(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(a))),n.state={showLogElement:!1},n.howLongIveBeenAtCurrentJob=function(e,o){var t=Math.floor(o.getTime()-e.getTime()),n=Math.floor(t/864e5),r=Math.floor(n/31);return Math.floor(r/12)+" years"},n.typingDone=function(){n.setState({showLogElement:!0})},u(n,t)}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}(o,a.a.Component),d(o,[{key:"render",value:function(){return c("article",{},void 0,f,c("div",{id:"main",className:"about-me-page"},void 0,c("section",{className:"editor"},void 0,c(l.a,{onTypingDone:this.typingDone},void 0,m,p,b,y,v,c("code",{className:"syntax--comment"},void 0,"// Been there for about ",this.howLongIveBeenAtCurrentJob(new Date("7/27/2015"),new Date)," now."),h,g,w,_,j,x,A,N,P)),this.state.showLogElement?k:null))}}]),o}();t.d(o,"default",function(){return M})},"./app/containers/AboutMePage/style.scss":function(e,o,t){var n=t("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./app/containers/AboutMePage/style.scss");"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t("./node_modules/style-loader/lib/addStyles.js")(n,r);n.locals&&(e.exports=n.locals)},"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./app/containers/AboutMePage/style.scss":function(e,o,t){(e.exports=t("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".about-me-page .console-error{color:#d53838;border:1px solid red;background:#320606;padding:5px}.about-me-page .console-error .fa-times-circle{color:red;background:#fff;border-radius:50%}.about-me-page .console-error .error-msg{margin-left:15px}",""])}}]);
