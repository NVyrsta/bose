parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector("#burger-menu"),t=document.querySelector("#close-btn"),n=document.querySelectorAll("#menu > *"),c=document.querySelector(".page__menu");e.addEventListener("click",function(){document.body.classList.add("page__body--with-menu"),c.classList.add("page__menu--open")}),t.addEventListener("click",function(){document.body.classList.remove("page__body--with-menu"),c.classList.remove("page__menu--open")}),n.forEach(function(e){e.addEventListener("click",function(){document.body.classList.remove("page__body--with-menu"),c.classList.remove("page__menu--open")})});var o=document.querySelector("#form"),u=document.querySelectorAll(".contact__field");o.addEventListener("submit",function(e){e.preventDefault(),u.forEach(function(e){e.value=""})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.9e15f567.js.map