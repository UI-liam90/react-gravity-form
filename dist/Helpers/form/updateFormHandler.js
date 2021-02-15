"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _validation=require("../validation"),_checkConditionalLogic=_interopRequireDefault(require("./checkConditionalLogic"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _iterableToArray(a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _readOnlyError(a){throw new Error("\""+a+"\" is read-only")}var _default=function(a,b,c,d,e,f,g){var h,j=a.id,k=a.type,l=a.isRequired;if("checkbox"===a.type){var m=_toConsumableArray(d[a.id].value),n=m.indexOf(b.target.value);-1<n?m.splice(n,1):m.push(b.target.value),h=m}else if("date"==a.type&&"datepicker"!==a.dateType){var o=a.subId,p=a.dateLabel,q=_toConsumableArray(d[a.id].value);q[o]={val:b.target.value,label:p},h=q}else if("consent"===a.type)h=b.target?b.target.checked:"null";else if("postcode"===a.type)h=b.target?b.target.value:null,Object.values(d).filter(function(a){return"field--street"===a.cssClass})[0].value=null===b||void 0===b?void 0:b.street,Object.values(d).filter(function(a){return"field--city"===a.cssClass})[0].value=null===b||void 0===b?void 0:b.city;else if("name"===a.type){var r=_toConsumableArray(d[a.id].value),s=r.indexOf(c);-1<s?r.splice(s,1):r[c]=b.target.value,h=b.target.value}else if("password"===a.type||"email"===a.type&&a.emailConfirmEnabled){var t=a.subId,u=d[a.id]&&d[a.id].value?_toConsumableArray(d[a.id].value):[];u[t]={val:b.target.value},h=u}else h=b.target?b.target.value:"null";"text"===k&&-1<a.cssClass.indexOf("iban")&&(k=(_readOnlyError("type"),"iban"));var v=(0,_validation.validateField)(h,a);if(-1!==f.indexOf(j)){d[j].value=h;for(var y=0;y<g.length;y++){var w=g[y].id,x=(0,_checkConditionalLogic["default"])(g[y].conditionalLogic,d);d[w].hideField=x,x&&(d[w].isRequired&&x&&(d[w].value=""),d[w].valid=!!d[w].isRequired)}}e(_objectSpread(_objectSpread({},d),{},_defineProperty({},j,{value:h,id:j,valid:v,label:a.label,pageNumber:a.pageNumber,cssClass:a.cssClass,isRequired:a.isRequired})))};exports["default"]=_default;