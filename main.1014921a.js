parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||n(e)||t(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,r){if(e){if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return a(e)}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var i=document.querySelector(".container"),l=i.querySelector(".field"),c=i.querySelector(".remove-row"),u=i.querySelector(".append-row"),d=i.querySelector(".remove-column"),s=i.querySelector(".append-column"),m=10,f=2;function b(e,r,t){r===t&&e.setAttribute("disabled","true")}i.addEventListener("click",function(r){var t=r.target,n=e(t.classList),o=l.firstElementChild,a=o.querySelectorAll("tr");if(n.includes("button")){var i=e(o.children).length,p=e(a[0].children).length;switch(n[0]){case"append-column":a.forEach(function(e){e.append(e.lastElementChild.cloneNode())}),d.removeAttribute("disabled"),b(t,m,p+1);break;case"remove-column":a.forEach(function(e){e.lastElementChild.remove()}),s.removeAttribute("disabled"),b(t,f,p-1);break;case"append-row":o.append(a[0].cloneNode(!0)),c.removeAttribute("disabled"),b(t,m,i+1);break;case"remove-row":o.lastElementChild.remove(),u.removeAttribute("disabled"),b(t,f,i-1);break;default:throw new Error("no case")}}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.1014921a.js.map