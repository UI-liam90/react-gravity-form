"use strict";function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireWildcard(require("react")),_reactSelect=_interopRequireDefault(require("react-select"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c["default"]=a,b&&b.set(a,c),c}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function _arrayWithHoles(a){if(Array.isArray(a))return a}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var _default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.updateForm,h=a.hideField,i=a.styledComponents,j=a.error,k=a.unsetError,l=a.cssClass,m=_objectWithoutProperties(a,["field","value","validationMessage","touched","setTouched","updateForm","hideField","styledComponents","error","unsetError","cssClass"]),n=b.id,o=b.formId,p=b.type,q=b.label,r=b.isRequired,s=b.choices,t=b.placeholder,u=b.description,v=b.descriptionPlacement,w=b.labelPlacement,x=b.width,y=b.customName,z=s.map(function(a){return{value:a.value,label:a.text}}),A=s.filter(function(a){return a.isSelected});A=A.length?[{label:A[0].text,value:A[0].value}]:"";var B=(0,_react.useState)(c||A),C=_slicedToArray(B,2),D=C[0],E=C[1],F=function(a){E(a);g({target:{value:a}},b),k(n)},G=function(){g({target:{value:D}},b),f(n)},H=i||!1,I=H.SelectStyles,J=H.Label,K=void 0===J?"label":J,L=H.Box,M=void 0===L?"div":L;return _react["default"].createElement(M,{width:x,className:d&&e||j?"form-field error ".concat(l):"form-field ".concat(l),style:{display:h?"none":void 0}},_react["default"].createElement("div",{className:p},_react["default"].createElement(K,{htmlFor:"input_".concat(o,"_").concat(n),className:"group-label ".concat(w)},q,r?_react["default"].createElement("abbr",null,"*"):null),"above"===v&&u?u&&_react["default"].createElement("div",{className:"description"},u):_react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement(_reactSelect["default"],{name:y||"input_".concat(n,"[]"),required:r,value:D,onChange:function onChange(a){F(a,b)},onBlur:function onBlur(){return G()},placeholder:t,options:z,isMulti:!0,inputId:"input_".concat(o,"_").concat(n),styles:I}),u&&_react["default"].createElement("div",{className:"description"},u)),(d&&e||j)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(o,"_").concat(n)},d||j)))};exports["default"]=_default;