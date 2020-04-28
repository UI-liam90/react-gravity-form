"use strict";var _react=_interopRequireWildcard(require("react"));function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c["default"]=a,b&&b.set(a,c),c}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function _arrayWithHoles(a){if(Array.isArray(a))return a}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var _default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.hideField,h=a.updateForm,i=a.styledComponents,j=a.error,k=a.unsetError,l=_objectWithoutProperties(a,["field","value","validationMessage","touched","setTouched","hideField","updateForm","styledComponents","error","unsetError"]),m=b.id,n=b.formId,o=b.type,p=b.label,q=b.placeholder,r=b.isRequired,s=b.maxLength,t=b.description,u=b.descriptionPlacement,v=b.labelPlacement,w=b.width,x=b.customName,y=b.inputs,z=b.cssClass,A=b.passwordStrengthEnabled,B=b.minPasswordStrength,C=i||!1,D=C.Input,E=void 0===D?"input":D,F=C.Label,G=void 0===F?"label":F,H=C.Box,I=void 0===H?"div":H,J=(0,_react.useState)(y),K=_slicedToArray(J,2),L=K[0],M=K[1],N=(0,_react.useState)("blank"),O=_slicedToArray(N,2),P=O[0],Q=O[1],R=function(a,b){var c=_objectSpread({},L);c[b].cssClass=a?"filled":"",M(c)},S=function(a){var e,f,b=Math.LN2,c=Math.log,d=Math.pow,g=0;return 0>=a.length?"blank":4>a.length?"short":(a.match(/[0-9]/)&&(g+=10),a.match(/[a-z]/)&&(g+=26),a.match(/[A-Z]/)&&(g+=26),a.match(/[^a-zA-Z0-9]/)&&(g+=31),e=c(d(g,a.length)),f=e/b,40>f?"bad":56>f?"good":"strong")},T=function(a){var b=S(a);Q(b)};return _react["default"].createElement(I,{width:w,className:d&&e||j?"form-field error ".concat(z):"form-field ".concat(z),style:{display:g?"none":void 0}},_react["default"].createElement("div",{className:o},_react["default"].createElement(G,{className:"gf-label ".concat(v)},p,r?_react["default"].createElement("abbr",null,"*"):null),"above"===u&&t&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br />")}}),_react["default"].createElement("div",{className:"ginput_container ginput_container_password"},y&&y.length&&y.map(function(a,g){return!a.isHidden&&_react["default"].createElement("span",{key:"input_".concat(n,"_").concat(a.id),className:"".concat(1<y.length?"ginput_".concat(0===g?"left":"right"):"medim"," ").concat(L[g].cssClass?L[g].cssClass:"")},_react["default"].createElement(E,{id:"input_".concat(n,"_").concat(a.id,"_").concat(g),name:x||"input_".concat(m).concat(1===g?"_".concat(g+1):""),type:o,value:c&&c[g]&&c[g].val?c[g].val:"",placeholder:a.placeholder?a.placeholder:q,required:r,autoComplete:"off",onChange:function onChange(a){b.subId=g,h(a,b),k(m),A&&0===g&&T(a.target.value)},onBlur:function onBlur(a){b.subId=g,h(a,b),f(m),R(c&&c[g]&&c[g].val&&""!==c[g].val,g)},onFocus:function onFocus(){return R(!0,g)},"aria-label":p,"aria-describedby":"error_".concat(n,"_").concat(a.id,"_").concat(g),"aria-invalid":!!d&&e}),_react["default"].createElement("label",{htmlFor:"input_".concat(n,"_").concat(a.id,"_").concat(g)},a.label))})),(d&&e||j)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(n,"_").concat(m),dangerouslySetInnerHTML:{__html:d||j}}),"above"!==u&&t&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br />")}}),!(d&&e||j)&&A&&_react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement("div",{id:"input_".concat(n,"_").concat(m,"_strength_indicator"),className:"gfield_password_strength ".concat(P)},P&&"blank"!==P?P:"Strength indicator"),_react["default"].createElement("input",{type:"hidden",className:"gform_hidden",id:"input_".concat(n,"_").concat(m,"_strength"),name:"input_".concat(m,"_strength"),value:P}))))};exports["default"]=_default;