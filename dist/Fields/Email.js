"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireWildcard(require("react")),_uuid=require("uuid"),_excluded=["field","value","validationMessage","touched","setTouched","hideField","updateForm","styledComponents","error","unsetError","cssClass","setFocusClass"];function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d["default"]=a,c&&c.set(a,d),d}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var _default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.hideField,h=a.updateForm,i=a.styledComponents,j=a.error,k=a.unsetError,l=a.cssClass,m=a.setFocusClass,n=(0,_objectWithoutProperties2["default"])(a,_excluded),o=b.id,p=b.formId,q=b.type,r=b.label,s=b.placeholder,t=b.isRequired,u=b.maxLength,v=b.description,w=b.descriptionPlacement,x=b.labelPlacement,y=b.width,z=b.customName,A=b.emailConfirmEnabled,B=b.inputs,C=(0,_react.useState)(B),D=(0,_slicedToArray2["default"])(C,2),E=D[0],F=D[1],G=(0,_react.useMemo)(function(){return(0,_uuid.v4)()},[]),H=function(a,b){var c=_objectSpread({},E);c[b]&&(c[b].cssClass=a&&c&&0<!!c.length?"filled":"",F(c))},I=i||!1,J=I.Input,K=void 0===J?"input":J,L=I.Label,M=void 0===L?"label":L,N=I.Box,O=void 0===N?"div":N;return _react["default"].createElement(O,{width:y,className:d&&e||j?"form-field form-field--email error ".concat(l):"form-field form-field--email ".concat(l),style:{display:g?"none":void 0}},_react["default"].createElement("div",{className:q},_react["default"].createElement(M,{htmlFor:"input_".concat(p,"_").concat(o),className:"gf-label ".concat(x)},r,t?_react["default"].createElement("abbr",null,"*"):null),"above"===w&&v&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:v}}),A?_react["default"].createElement(_react["default"].Fragment,null,B&&B.length&&B.map(function(a,g){return _react["default"].createElement("span",{key:"".concat(G,"_").concat(a.id,"_").concat(g),className:"".concat(1<B.length?"ginput_".concat(0===g?"left":"right"):"medim"," ").concat(E[g].cssClass?E[g].cssClass:"")},_react["default"].createElement(M,{className:"gf-label ".concat(x),htmlFor:"input_".concat(p,"_").concat(a.id,"_").concat(g)},a.customLabel||a.label,t?_react["default"].createElement("abbr",null,"*"):null),_react["default"].createElement(K,{id:"input_".concat(p,"_").concat(a.id,"_").concat(g),name:z||"input_".concat(o).concat(1===g?"_".concat(g+1):""),type:q,value:c&&c[g]&&c[g].val?c[g].val:"",placeholder:a.placeholder?a.placeholder:s,required:t,autoComplete:"off",onChange:function onChange(a){b.subId=g,h(a,b),k(o)},onBlur:function onBlur(a){b.subId=g,h(a,b),f(o),H(c&&c[g]&&c[g].val&&""!==c[g].val,g)},onFocus:function onFocus(){return H(!0,g)},"aria-label":r,"aria-describedby":"error_".concat(p,"_").concat(a.id,"_").concat(g),"aria-invalid":!!d&&e}))})):_react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement(K,{id:"input_".concat(p,"_").concat(o),name:z||"input_".concat(o),type:q,value:c?c:"",placeholder:s,maxLength:u,required:t,onChange:function onChange(a){h(a,b),k(o)},onBlur:function onBlur(a){h(a,b),f(o),m(""!==c)},onFocus:function onFocus(){return m(!0)},"aria-label":r,"aria-describedby":"error_".concat(p,"_").concat(o),"aria-invalid":!!d&&e||!!j})),"above"!==w&&v&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:v}}),(d&&e||j)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(p,"_").concat(o)},d||j)))};exports["default"]=_default;