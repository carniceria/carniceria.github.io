!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react"),require("classnames")):"function"==typeof define&&define.amd?define(["react","classnames"],r):"object"==typeof exports?exports["carniceria-react-components"]=r(require("react"),require("classnames")):e["carniceria-react-components"]=r(e.react,e.classnames)}(window,function(e,r){return function(e){var r={};function n(o){if(r[o])return r[o].exports;var t=r[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,n),t.l=!0,t.exports}return n.m=e,n.c=r,n.d=function(e,r,o){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)n.d(o,t,function(r){return e[r]}.bind(null,t));return o},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="/carniceria/carniceria.github.io/react-components/",n(n.s=4)}([function(r,n){r.exports=e},function(e,n){e.exports=r},function(e,r,n){},function(e,r,n){},function(e,r,n){"use strict";n.r(r);n(2);var o=n(0),t=n.n(o),u=n(1),c=function(e){var r=e.children,n=e.fontSize,o=e.borderColor,c=e.fontColor,i=e.disable,a=e.showBorder,l=e.backgroundColor,f=e.onClickCallBack,d=e.hoverBackgroundHover;return t.a.createElement("button",{onClick:function(e){return f(e)},onMouseOver:function(){return function(){if(!d)return null}()},className:u("cc-button",{"-disabled":i,"-no-border":!a}),style:{fontSize:"".concat(n,"px"),color:c,borderColor:o,backgroundColor:l}},r)};c.defaultProps={children:null,fontSize:14,borderColor:"#111",fontColor:"#111",disable:!1,showBorder:!0,backgroundColor:"#FFF",hoverBackgroundHover:!1,onClickCallBack:function(){return null}};var i=c;n(3),n(1);var a=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),t.a.createElement("div",null,"modal")};a.defaultProps={};var l=a;n.d(r,"CCButton",function(){return i}),n.d(r,"CCModal",function(){return l})}])});
//# sourceMappingURL=main.js.map