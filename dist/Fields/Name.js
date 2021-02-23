"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireWildcard(require("react")),_reactSelect=_interopRequireDefault(require("react-select")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c["default"]=a,b&&b.set(a,c),c}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _iterableToArrayLimit(a,b){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function _arrayWithHoles(a){if(Array.isArray(a))return a}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var _default=function(a){var b,c=a.field,d=a.value,e=a.validationMessage,f=a.touched,g=a.setTouched,h=a.hideField,i=a.updateForm,j=a.styledComponents,k=a.error,l=a.unsetError,m=a.setFocusClass,n=a.cssClass,o=_objectWithoutProperties(a,["field","value","validationMessage","touched","setTouched","hideField","updateForm","styledComponents","error","unsetError","setFocusClass","cssClass"]),p=c.id,q=c.formId,r=c.type,s=c.label,t=c.placeholder,u=c.isRequired,v=c.inputs,w=c.maxLength,x=c.description,y=c.descriptionPlacement,z=c.labelPlacement,A=c.width,B=c.customName,C=j||!1,D=C.ReactSelect,E=C.Input,F=void 0===E?"input":E,G=C.Label,H=void 0===G?"label":G,I=C.Box,J=void 0===I?"div":I,K=D||_reactSelect["default"],L=v[0],M=null===L||void 0===L||null===(b=L.choices)||void 0===b?void 0:b.map(function(a){return{value:a.value,label:a.text}}),N=null===L||void 0===L?void 0:L.choices.filter(function(a){return a.isSelected});N=N.length?[{label:N[0].text,value:N[0].value}]:"";var O=(0,_react.useState)(d||N),P=_slicedToArray(O,2),Q=P[0],R=P[1],S=function(a){R(a)};return _react["default"].createElement(J,{width:A,className:e&&f||k?"form-field error ".concat(n):"form-field ".concat(n),style:{display:h?"none":void 0}},v.map(function(a){return!a.isHidden&&_react["default"].createElement("div",{className:r,key:a.id},_react["default"].createElement(_InputLabel["default"],{formId:q,id:a.id,label:a.label,labelPlacement:z,isRequired:u,styledComponent:j}),"above"===y&&x&&_react["default"].createElement("div",{className:"description"},x),"radio"===a.inputType?_react["default"].createElement(K,{name:B||"input_".concat(a.id),required:u,value:Q&&Q.value?Q:"",onChange:function onChange(b){S(b,c),l(a.id)},onFocus:function onFocus(){return m(!0)},placeholder:a.placeholder,options:M,className:"form-select",autoFocus:!1,inputId:"input_".concat(q,"_").concat(a.id)}):_react["default"].createElement(F,{id:"input_".concat(q,"_").concat(a.id),key:a.id,name:B||"input_".concat(a.id),type:r,value:d?d[a.id]:"",placeholder:a.placeholder,maxLength:w,required:u,onChange:function onChange(b){i(b,c,a.id),l(a.id)},onBlur:function onBlur(b){i(b,c),g(a.id),m(""!==d)},onFocus:function onFocus(){return m(!0)},"aria-label":a.label,"aria-describedby":"error_".concat(q,"_").concat(a.id),"aria-invalid":!!e&&f||!!k}),"above"!==y&&x&&_react["default"].createElement("div",{className:"description"},x),(e&&f||k)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(q,"_").concat(p)},e||k))}))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvTmFtZS5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsImVycm9yIiwidW5zZXRFcnJvciIsInNldEZvY3VzQ2xhc3MiLCJjc3NDbGFzcyIsInByb3BzIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImlzUmVxdWlyZWQiLCJpbnB1dHMiLCJtYXhMZW5ndGgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJSZWFjdFNlbGVjdCIsIklucHV0IiwiTGFiZWwiLCJCb3giLCJSU2VsZWN0IiwiU2VsZWN0IiwicHJlZml4RmllbGQiLCJvcHRpb25zIiwiY2hvaWNlcyIsIm1hcCIsImNob2ljZSIsInRleHQiLCJwcmVzZWxlY3RlZCIsImZpbHRlciIsImlzU2VsZWN0ZWQiLCJsZW5ndGgiLCJzZWxlY3RlZE9wdGlvbiIsInNlbGVjdE9wdGlvbiIsInNlbGVjdENoYW5nZSIsIm9wdGlvbiIsImRpc3BsYXkiLCJpbnB1dCIsImlzSGlkZGVuIiwiaW5wdXRUeXBlIiwiZXZlbnQiXSwibWFwcGluZ3MiOiJpMUZBSWUsV0FjVCxPQWJKQSxDQWFJLEdBYkpBLEtBYUksQ0FaSkMsQ0FZSSxHQVpKQSxLQVlJLENBWEpDLENBV0ksR0FYSkEsaUJBV0ksQ0FWSkMsQ0FVSSxHQVZKQSxPQVVJLENBVEpDLENBU0ksR0FUSkEsVUFTSSxDQVJKQyxDQVFJLEdBUkpBLFNBUUksQ0FQSkMsQ0FPSSxHQVBKQSxVQU9JLENBTkpDLENBTUksR0FOSkEsZ0JBTUksQ0FMSkMsQ0FLSSxHQUxKQSxLQUtJLENBSkpDLENBSUksR0FKSkEsVUFJSSxDQUhKQyxDQUdJLEdBSEpBLGFB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cnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICcuLi9Gb3JtRWxlbWVudHMvSW5wdXRMYWJlbCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIGhpZGVGaWVsZCxcbiAgdXBkYXRlRm9ybSxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgZXJyb3IsXG4gIHVuc2V0RXJyb3IsXG4gIHNldEZvY3VzQ2xhc3MsXG4gIGNzc0NsYXNzLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgZm9ybUlkLFxuICAgIHR5cGUsXG4gICAgbGFiZWwsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBpbnB1dHMsXG4gICAgbWF4TGVuZ3RoLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgIGxhYmVsUGxhY2VtZW50LFxuICAgIHdpZHRoLFxuICAgIGN1c3RvbU5hbWUsXG4gIH0gPSBmaWVsZDtcblxuICBjb25zdCB7XG4gICAgUmVhY3RTZWxlY3QsIElucHV0ID0gJ2lucHV0JywgTGFiZWwgPSAnbGFiZWwnLCBCb3ggPSAnZGl2JyxcbiAgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG5cbiAgY29uc3QgUlNlbGVjdCA9IFJlYWN0U2VsZWN0IHx8IFNlbGVjdDtcblxuICBjb25zdCBwcmVmaXhGaWVsZCA9IGlucHV0c1swXTtcblxuICBjb25zdCBvcHRpb25zID0gcHJlZml4RmllbGQ/LmNob2ljZXM/Lm1hcChjaG9pY2UgPT4gKHtcbiAgICB2YWx1ZTogY2hvaWNlLnZhbHVlLFxuICAgIGxhYmVsOiBjaG9pY2UudGV4dCxcbiAgfSkpO1xuICBsZXQgcHJlc2VsZWN0ZWQgPSBwcmVmaXhGaWVsZD8uY2hvaWNlcy5maWx0ZXIoY2hvaWNlID0+IGNob2ljZS5pc1NlbGVjdGVkKTtcbiAgaWYgKHByZXNlbGVjdGVkLmxlbmd0aCkge1xuICAgIHByZXNlbGVjdGVkID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogcHJlc2VsZWN0ZWRbMF0udGV4dCxcbiAgICAgICAgdmFsdWU6IHByZXNlbGVjdGVkWzBdLnZhbHVlLFxuICAgICAgfSxcbiAgICBdO1xuICB9IGVsc2Uge1xuICAgIHByZXNlbGVjdGVkID0gJyc7XG4gIH1cbiAgLy8gSGFuZGxlIFN0YXRlXG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2VsZWN0T3B0aW9uXSA9IHVzZVN0YXRlKHZhbHVlIHx8IHByZXNlbGVjdGVkKTtcblxuICAvLyBIYW5kbGUgY2hhbmdlXG4gIGNvbnN0IHNlbGVjdENoYW5nZSA9IChvcHRpb24pID0+IHtcbiAgICBzZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgfTtcbiAgXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yXG4gICAgICAgICAgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWBcbiAgICAgICAgICA6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuICAgICAgfVxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gJ25vbmUnIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAge2lucHV0cy5tYXAoaW5wdXQgPT4gKFxuICAgICAgICAhaW5wdXQuaXNIaWRkZW4gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfSBrZXk9e2lucHV0LmlkfT5cbiAgICAgICAgICAgIDxJbnB1dExhYmVsXG4gICAgICAgICAgICAgIGZvcm1JZD17Zm9ybUlkfVxuICAgICAgICAgICAgICBpZD17aW5wdXQuaWR9XG4gICAgICAgICAgICAgIGxhYmVsPXtpbnB1dC5sYWJlbH1cbiAgICAgICAgICAgICAgbGFiZWxQbGFjZW1lbnQ9e2xhYmVsUGxhY2VtZW50fVxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgICBzdHlsZWRDb21wb25lbnQ9e3N0eWxlZENvbXBvbmVudHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7aW5wdXQuaW5wdXRUeXBlID09PSAncmFkaW8nID8gKFxuICAgICAgICAgICAgICA8UlNlbGVjdFxuICAgICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aW5wdXQuaWR9YH1cbiAgICAgICAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb24gJiYgc2VsZWN0ZWRPcHRpb24udmFsdWUgPyBzZWxlY3RlZE9wdGlvbiA6ICcnfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RDaGFuZ2Uob3B0aW9uLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICB1bnNldEVycm9yKGlucHV0LmlkKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldEZvY3VzQ2xhc3ModHJ1ZSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2lucHV0LnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIlxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgLy8gc3R5bGVzPXtjdXN0b21TdHlsZXN9XG4gICAgICAgICAgICAgICAgaW5wdXRJZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lucHV0LmlkfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpbnB1dC5pZH1gfVxuICAgICAgICAgICAgICAgICAga2V5PXtpbnB1dC5pZH1cbiAgICAgICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aW5wdXQuaWR9YH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17IXZhbHVlID8gJycgOiB2YWx1ZVtpbnB1dC5pZF19XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aW5wdXQucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCwgaW5wdXQuaWQpO1xuICAgICAgICAgICAgICAgICAgICB1bnNldEVycm9yKGlucHV0LmlkKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaW5wdXQuaWQpO1xuICAgICAgICAgICAgICAgICAgICBzZXRGb2N1c0NsYXNzKHZhbHVlICE9PSAnJyk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0Rm9jdXNDbGFzcyh0cnVlKX1cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2lucHV0LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17YGVycm9yXyR7Zm9ybUlkfV8ke2lucHV0LmlkfWB9XG4gICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9eyghIXZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8ICEhZXJyb3J9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCAhPT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2Pn1cbiAgICAgICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9PlxuICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSB8fCBlcnJvcn1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgKSl9XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl19