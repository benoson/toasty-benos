!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["toasty-benos"]=e():t["toasty-benos"]=e()}(self,(()=>(()=>{"use strict";var t={d:(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,l(i.key),i)}}function o(t){var e="function"==typeof Map?new Map:void 0;return o=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(r())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var o=new(t.bind.apply(t,i));return n&&a(o,n.prototype),o}(t,arguments,s(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,t)},o(t)}function r(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(r=function(){return!!t})()}function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function c(t,e,n){return(e=l(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){var e=function(t){if("object"!=n(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,"string");if("object"!=n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==n(e)?e:e+""}t.r(e),t.d(e,{showToast:()=>h});var d,p,f=function(){var t=document.createElement("div");return t.innerHTML='\n  <svg width="100%" height="100%" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>close [#1511]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-419.000000, -240.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <polygon id="close-[#1511]" points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"> </polygon> </g> </g> </g> </g></svg>\n  ',t},u={SUCCESS:"SUCCESS",ERROR:"ERROR",INFO:"INFO"},g={"bottom-left":"bottom-left","bottom-right":"bottom-right","bottom-center":"bottom-center","top-left":"top-left","top-right":"top-right","top-center":"top-center"},m="bottom",b=c(c(c({},u.ERROR,{background:"#c91f1f",iconElement:f(),timeBarBackground:"#071a52"}),u.INFO,{background:"#071a52",iconElement:(p=document.createElement("div"),p.innerHTML='\n  <svg width="100%" height="100%" fill="#ffffff" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect id="Icons" x="-704" y="-192" width="1280" height="800" style="fill:none;"></rect> <g id="Icons1" serif:id="Icons"> <g id="Strike"> </g> <g id="H1"> </g> <g id="H2"> </g> <g id="H3"> </g> <g id="list-ul"> </g> <g id="hamburger-1"> </g> <g id="hamburger-2"> </g> <g id="list-ol"> </g> <g id="list-task"> </g> <g id="trash"> </g> <g id="vertical-menu"> </g> <g id="horizontal-menu"> </g> <g id="sidebar-2"> </g> <g id="Pen"> </g> <g id="Pen1" serif:id="Pen"> </g> <g id="clock"> </g> <g id="external-link"> </g> <g id="hr"> </g> <g id="info"> </g> <g id="warning"> </g> <g id="plus-circle"> </g> <g id="minus-circle"> </g> <g id="vue"> </g> <g id="cog"> </g> <g id="logo"> </g> <path id="exclamation" d="M34.476,42.174l-5.464,0l-0.425,-34.192l6.348,0l-0.459,34.192Zm-6.118,10.405c0,-0.981 0.3,-1.805 0.9,-2.47c0.599,-0.665 1.488,-0.998 2.666,-0.998c1.178,0 2.073,0.333 2.683,0.998c0.611,0.665 0.916,1.489 0.916,2.47c0,0.982 -0.305,1.794 -0.916,2.438c-0.61,0.643 -1.505,0.965 -2.683,0.965c-1.178,0 -2.067,-0.322 -2.666,-0.965c-0.6,-0.644 -0.9,-1.456 -0.9,-2.438Z" style="fill-rule:nonzero;"></path> <g id="radio-check"> </g> <g id="eye-slash"> </g> <g id="eye"> </g> <g id="toggle-off"> </g> <g id="shredder"> </g> <g id="spinner--loading--dots-" serif:id="spinner [loading, dots]"> </g> <g id="react"> </g> <g id="check-selected"> </g> <g id="turn-off"> </g> <g id="code-block"> </g> <g id="user"> </g> <g id="coffee-bean"> </g> <g id="coffee-beans"> <g id="coffee-bean1" serif:id="coffee-bean"> </g> </g> <g id="coffee-bean-filled"> </g> <g id="coffee-beans-filled"> <g id="coffee-bean2" serif:id="coffee-bean"> </g> </g> <g id="clipboard"> </g> <g id="clipboard-paste"> </g> <g id="clipboard-copy"> </g> <g id="Layer1"> </g> </g> </g></svg>\n  ',p),timeBarBackground:"#19c6e3"}),u.SUCCESS,{background:"#10b151",iconElement:(d=document.createElement("div"),d.innerHTML='\n  <svg width="100%" height="100%" fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>checkmark2</title> <path d="M28.998 8.531l-2.134-2.134c-0.394-0.393-1.030-0.393-1.423 0l-12.795 12.795-6.086-6.13c-0.393-0.393-1.029-0.393-1.423 0l-2.134 2.134c-0.393 0.394-0.393 1.030 0 1.423l8.924 8.984c0.393 0.393 1.030 0.393 1.423 0l15.648-15.649c0.393-0.392 0.393-1.030 0-1.423z"></path> </g></svg>\n  ',d),timeBarBackground:"#071a52"}),y=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),c(t=function(t,e,i){return e=s(e),function(t,e){if(e&&("object"==n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,r()?Reflect.construct(e,i||[],s(t).constructor):e.apply(t,i))}(this,e),"hideToast",(function(){t.remove()})),c(t,"wrapperId",void 0),t.attachShadow({mode:"open"}),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}(e,t),o=e,(l=[{key:"connectedCallback",value:function(){var t=this,e=this.getAttribute("variant"),n=this.getAttribute("title"),i=this.getAttribute("subtitle"),o=parseInt(this.getAttribute("duration")),r="true"===this.getAttribute("is-dismissable"),a="true"===this.getAttribute("is-show-time-bar")&&o,s=this.getAttribute("dismiss-animation-direction"),c=this.getAttribute("appear-animation-direction"),l="true"===this.getAttribute("is-show-appear-and-dismiss-animationation"),d="true"===this.getAttribute("is-show-icon-animations");u[e]||(e=u.INFO);var p=b[e],g=a?"16px":"8px",m=r?"8px 64px ".concat(g," 16px"):"8px 16px ".concat(g," 16px");if(this.wrapperId="toasty-benos-".concat((1*Math.random()).toFixed(3)).replace(".",""),this.shadowRoot.innerHTML="\n        <style>\n            @keyframes dismiss-animation-left {\n                from { left: 0px; opacity: 1; }\n                to { left: -100px; opacity: 0; }\n            }\n\n            @keyframes dismiss-animation-right {\n                from { right: 0px; opacity: 1; }\n                to { right: -100px; opacity: 0; }\n            }\n\n            @keyframes dismiss-animation-top {\n                from { top: 0px; opacity: 1; }\n                to { top: -100px; opacity: 0; }\n            }\n\n            @keyframes dismiss-animation-bottom {\n                from { bottom: 0px; opacity: 1; }\n                to { bottom: -100px; opacity: 0; }\n            }\n                \n            @keyframes appear-animation-left {\n                from { left: -100px; opacity: 0; }\n                to { left: 0px; opacity: 1; }\n            }\n\n            @keyframes appear-animation-right {\n                from { right: -100px; opacity: 0; }\n                to { right: 0px; opacity: 1; }\n            }\n\n            @keyframes appear-animation-top {\n                from { top: -100px; opacity: 0; }\n                to { top: 0px; opacity: 1; }\n            }\n\n            @keyframes appear-animation-bottom {\n                from { bottom: -100px; opacity: 0; }\n                to { bottom: 0px; opacity: 1; }\n            }\n\n            @keyframes main-icon-animation {\n                50% { transform: scale(1.2) rotate(15deg) }\n                100% { transform: scale(1) rotate(0deg) }\n            }\n\n            @keyframes time-bar-animation {\n                from { width: 100%; }\n                to { width: 0%; }\n            }\n\n            .toasty-benos {\n                display: flex;\n                justify-content: space-between;\n                column-gap: 16px;\n                align-items: center;\n                border-radius: 2px;\n                color: white;\n                background-color: ".concat(p.background,";\n                padding: ").concat(m,";\n                font-family: system-ui;\n                position: relative;\n            }\n\n            .toasty-benos-main-icon {\n                width: 32px;\n                height: 32px;\n                transition: 1s all;\n            }\n\n            .toasty-benos-content {\n                display: flex;\n                flex-direction: column;\n                row-gap: 4px;\n                width: content-width;\n            }\n\n            .toasty-benos-subtitle {\n                font-size: 14px;\n            }\n\n            .toasty-benos-dismiss-wrapper {\n                position: absolute;\n                top: 8px;\n                right: 12px;\n            }\n\n            .toasty-benos-x-icon {\n                cursor: pointer;\n                width: 12px;\n                height: 12px;\n            }\n\n            .toasty-benos-time-bar {\n                height: 4px;\n                position: absolute;\n                bottom: 0px;\n                left: 0px;\n            }\n        </style>\n\n        <div id=").concat(this.wrapperId,' class="toasty-benos">\n            <div id="icon-container" class="toasty-benos-main-icon"></div>\n\n            <div class="toasty-benos-content">\n                <span>').concat(n,"</span>\n\n                ").concat("undefined"!==i?'<span class="toasty-benos-subtitle">'.concat(i,"</span>"):"","\n            </div>\n\n            ").concat(r?'<div class="toasty-benos-dismiss-wrapper">\n                    <div id="toasty-benos-dismiss-icon" class="toasty-benos-x-icon"></div>\n                </div>':"","\n\n            ").concat(a?'<div id="toasty-benos-time-bar" class="toasty-benos-time-bar" style="width: 100%"></div>':"","\n        </div>\n    "),this.shadowRoot.querySelector("#icon-container").appendChild(p.iconElement),r&&(this.shadowRoot.querySelector(".toasty-benos-dismiss-wrapper").addEventListener("click",this.hideToast),this.shadowRoot.querySelector("#toasty-benos-dismiss-icon").appendChild(f())),a){var y=this.shadowRoot.querySelector("#toasty-benos-time-bar");y.style.background=p.timeBarBackground,y.style.animation="time-bar-animation ".concat(o,"ms cubic-bezier(0.9, 0.44, 0.27, 0.89) 0s 1 normal none running")}if(l){var h=this.shadowRoot.querySelector("#".concat(this.wrapperId));h.style.animation="appear-animation-".concat(c," 0.5s cubic-bezier(0.53, 0.52, 0.21, 1.08) 0s 1 normal none running"),o&&setTimeout((function(){h.style.animation="dismiss-animation-".concat(s," 0.5s cubic-bezier(0.53, 0.52, 0.21, 1.08) 0s 1 normal none running")}),o-500)}d&&(this.shadowRoot.querySelector(".toasty-benos-main-icon").style.animation="main-icon-animation 1.5s"),o&&setTimeout((function(){t.remove()}),o)}},{key:"disconnectedCallback",value:function(){"true"===this.getAttribute("is-dismissable")&&this.shadowRoot.querySelector(".toasty-benos-dismiss-wrapper").removeEventListener("click",this.hideToast)}}])&&i(o.prototype,l),Object.defineProperty(o,"prototype",{writable:!1}),o;var o,l}(o(HTMLElement));Object.keys(g).forEach((function(t){var e=document.createElement("div");e.setAttribute("id","toasty-benos-wrapper-".concat(t));var n="16px",i="",o="16px",r="",a="",s="flex-end";switch(t){case g["bottom-left"]:i="16px",n="",o="16px",r="",s="flex-start";break;case g["bottom-center"]:i="50%",n="",o="16px",r="",a="translate(-50%)",s="flex-start";break;case g["top-left"]:i="16px",n="",o="",r="16px",s="flex-start";break;case g["top-center"]:i="50%",n="",o="",r="16px",a="translate(-50%)",s="flex-start";break;case g["top-right"]:i="",n="16px",o="",r="16px",s="flex-end"}e.style.left=i,e.style.right=n,e.style.top=r,e.style.bottom=o,e.style.transform=a,e.style.alignItems=s,e.style.position="absolute",e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="16px",document.body.appendChild(e)}));var h=function(t){var e=t.variant,n=void 0===e?u.INFO:e,i=t.title,o=t.subtitle,r=t.duration,a=t.isDismissable,s=void 0===a||a,c=t.isShowTimeBar,l=void 0!==c&&c,d=t.position,p=void 0===d?g["bottom-right"]:d,f=t.dismissAnimationDirection,b=void 0===f?m:f,y=t.appearAnimationDirection,h=void 0===y?m:y,w=t.isShowAppearAndDismissAnimation,v=void 0!==w&&w,x=t.isShowIconAnimations,k=void 0!==x&&x,S=document.createElement("toasty-benos");S.setAttribute("variant",n),S.setAttribute("title",i||"Placeholder"),S.setAttribute("subtitle",o),S.setAttribute("duration",r||0),S.setAttribute("is-dismissable",s),S.setAttribute("is-show-time-bar",l),S.setAttribute("position",p),S.setAttribute("dismiss-animation-direction",b),S.setAttribute("appear-animation-direction",h),S.setAttribute("is-show-appear-and-dismiss-animationation",v),S.setAttribute("is-show-icon-animations",k);var O=document.getElementById("toasty-benos-wrapper-".concat(p)),R=window.innerHeight;O.clientHeight>=R/2&&O.removeChild(O.childNodes[0]),O.appendChild(S)};return window.customElements.define("toasty-benos",y),e})()));