"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireWildcard(require("react")),_RenderField=_interopRequireDefault(require("./RenderField"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c["default"]=a,b&&b.set(a,c),c}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _iterableToArrayLimit(a,b){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function _arrayWithHoles(a){if(Array.isArray(a))return a}var divideFieldsIntoPages=function(a,b){for(var c,d=b.map(function(){return[]}),e=0;e<a.length;e++)c=d[a[e].pageNumber],d[a[e].pageNumber-1]&&("page"===a[e].type?d[a[e].pageNumber-2].push(a[e]):d[a[e].pageNumber-1].push(a[e]));return d},getMaxFieldId=function(a){for(var b=0,c=0;c<a.length;c++)parseInt(a[c].id)>b&&(b=parseInt(a[c].id));return b+1},fieldTypes=["checkbox","email","hidden","html","number","phone","radio","select","multiselect","text","textarea","website","page","date","fileupload","consent","password","section","custom"],honeyPotLables=["Name","Email","Phone","Comments"],honeypotLabel=honeyPotLables[Math.floor(Math.random()*Math.floor(4))],_default=function(a){var b=a.fields,c=a.formValues,d=a.updateForm,e=a.submitFailed,f=a.submitSuccess,g=a.touched,h=a.setTouched,i=a.pagination,j=a.activePage,k=a.prevStep,l=a.nextStep,m=a.isNextDisabled,n=a.checkConditionalLogic,o=a.saveStateToHtmlField,p=a.enableHoneypot,q=a.styledComponents,r=a.customComponents,s=a.unsetError,t=a.errors,u=a.dropzoneText,v=a.pageClicked,w=i?divideFieldsIntoPages(b,i.pages):void 0,x=getMaxFieldId(b),y=(0,_react.useState)(""),z=_slicedToArray(y,2),A=z[0],B=z[1];return _react["default"].createElement("div",{className:"form-fields".concat(i&&1<i.pages.length?" hasPages".concat(v?"":" notClicked"):"")},i&&1<i.pages.length?i.pages.map(function(a,b){return _react["default"].createElement("div",{className:"page".concat(j===b+1?" active":""),key:"page-".concat(b)},a&&_react["default"].createElement("div",{className:"gf_step"},_react["default"].createElement("span",null,a)),w[b].map(function(a){return fieldTypes.includes(a.type)&&_react["default"].createElement(_RenderField["default"],{key:a.id,field:a,formValues:c,submitFailed:e,setTouched:h,submitSuccess:f,updateForm:d,touched:g,pages:i.pages.length,prevStep:k,nextStep:l,isNextDisabled:m,checkConditionalLogic:n,saveStateToHtmlField:o,styledComponents:q,customComponents:r,error:!!(t&&t[a.id])&&t[a.id],unsetError:s,dropzoneText:u})}))}):b.map(function(a){return fieldTypes.includes(a.type)&&_react["default"].createElement(_RenderField["default"],{key:a.id,field:a,formValues:c,submitFailed:e,setTouched:h,submitSuccess:f,updateForm:d,touched:g,checkConditionalLogic:n,styledComponents:q,error:!!(t&&t[a.id])&&t[a.id],unsetError:s,dropzoneText:u,customComponents:r})}),p&&_react["default"].createElement("div",{className:"form-field gform_validation_container"},_react["default"].createElement("label",{htmlFor:"input_".concat(x),className:"gf-label "},honeypotLabel),_react["default"].createElement("input",{type:"text",name:"input_".concat(x),id:"input_".concat(x),value:A,onChange:function onChange(a){return B(a.target.value)},autoComplete:"off"})))};exports["default"]=_default;