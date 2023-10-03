"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireWildcard(require("react")),_ValidationMessage=_interopRequireDefault(require("../../FormElements/ValidationMessage")),_uuid=require("uuid");function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d["default"]=a,c&&c.set(a,d),d}var _default=function(a){var b=a.defaultProps,c=b.field,d=b.validationMessage,e=b.touched,f=b.setTouched,g=b.updateForm,h=b.formattedInputs,i=b.error,j=b.unsetError,k=b.setFocusClass,l=b.styledComponents,m=c.id,n=c.formId,o=c.type,p=c.customName,q=(l||!1).Input,r=void 0===q?"input":q,s=(0,_react.useMemo)(function(){return(0,_uuid.v4)()},[]);return _react["default"].createElement(_react["default"].Fragment,null,h&&h.map(function(a,b){return _react["default"].createElement("div",{className:o,key:"".concat(s,"_").concat(m,"_").concat(b)},_react["default"].createElement(r,{id:"input_".concat(n,"_").concat(m,"_").concat(b),type:"number",name:p||"input_".concat(m,"[]"),placeholder:a.placeholder,step:"1",min:"1",max:"MM"===a.label?12:"DD"===a.label?31:new Date().getFullYear()+1,maxLength:"YYYY"===a.label?4:2,value:a.value,onBlur:function onBlur(d){c.subId=b,c.dateLabel=a.label,g(d,c),f(m),j(m),k(""!==a.value)},onFocus:function onFocus(){return k(!0)}}),_react["default"].createElement("label",{htmlFor:"input_".concat(n,"_").concat(m,"_").concat(b),className:"hide-label"},a.label),d&&e&&d[b]&&b===d[b].index&&d[b].message&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(n,"_").concat(a.id)},d[b].message),i&&_react["default"].createElement("span",{className:"error-message"},i))}))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsImEiLCJkZWZhdWx0UHJvcHMiLCJmaWVsZCIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJ1cGRhdGVGb3JtIiwiZm9ybWF0dGVkSW5wdXRzIiwiZXJyb3IiLCJ1bnNldEVycm9yIiwic2V0Rm9jdXNDbGFzcyIsInN0eWxlZENvbXBvbmVudHMiLCJpZCIsImZvcm1JZCIsInR5cGUiLCJjdXN0b21OYW1lIiwicSIsIklucHV0IiwiaW5wdXRJRCIsInVzZU1lbW8iLCJ2NCIsIl9yZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImNsYXNzTmFtZSIsImtleSIsImNvbmNhdCIsInIiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJzdGVwIiwibWluIiwibWF4IiwibGFiZWwiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJtYXhMZW5ndGgiLCJ2YWx1ZSIsIm9uQmx1ciIsImV2ZW50Iiwic3ViSWQiLCJkYXRlTGFiZWwiLCJvbkZvY3VzIiwiaHRtbEZvciIsIm1lc3NhZ2UiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0ZpZWxkcy9EYXRlL0RhdGVJbnB1dC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBWYWxpZGF0aW9uTWVzc2FnZSBmcm9tIFwiLi4vLi4vRm9ybUVsZW1lbnRzL1ZhbGlkYXRpb25NZXNzYWdlXCI7XG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGRlZmF1bHRQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmaWVsZCxcbiAgICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgICB0b3VjaGVkLFxuICAgIHNldFRvdWNoZWQsXG4gICAgdXBkYXRlRm9ybSxcbiAgICBmb3JtYXR0ZWRJbnB1dHMsXG4gICAgZXJyb3IsXG4gICAgdW5zZXRFcnJvcixcbiAgICBzZXRGb2N1c0NsYXNzLFxuICAgIHN0eWxlZENvbXBvbmVudHMsXG4gIH0gPSBkZWZhdWx0UHJvcHM7XG4gIGNvbnN0IHsgaWQsIGZvcm1JZCwgdHlwZSwgY3VzdG9tTmFtZSB9ID0gZmllbGQ7XG5cbiAgY29uc3QgeyBJbnB1dCA9IFwiaW5wdXRcIiB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcbiAgY29uc3QgaW5wdXRJRCA9IHVzZU1lbW8oKCkgPT4gdjQoKSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Zm9ybWF0dGVkSW5wdXRzICYmXG4gICAgICAgIGZvcm1hdHRlZElucHV0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9IGtleT17YCR7aW5wdXRJRH1fJHtpZH1fJHtpbmRleH1gfT5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8ke2luZGV4fWB9XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfVtdYH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2l0ZW0ucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICAgIG1heD17XG4gICAgICAgICAgICAgICAgaXRlbS5sYWJlbCA9PT0gXCJNTVwiXG4gICAgICAgICAgICAgICAgICA/IDEyXG4gICAgICAgICAgICAgICAgICA6IGl0ZW0ubGFiZWwgPT09IFwiRERcIlxuICAgICAgICAgICAgICAgICAgPyAzMVxuICAgICAgICAgICAgICAgICAgOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgKyAxXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPXtpdGVtLmxhYmVsID09PSBcIllZWVlcIiA/IDQgOiAyfVxuICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgb25CbHVyPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBmaWVsZC5zdWJJZCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIGZpZWxkLmRhdGVMYWJlbCA9IGl0ZW0ubGFiZWw7XG4gICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICAgIHNldEZvY3VzQ2xhc3MoaXRlbS52YWx1ZSAhPT0gXCJcIik7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldEZvY3VzQ2xhc3ModHJ1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fJHtpbmRleH1gfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRlLWxhYmVsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlICYmXG4gICAgICAgICAgICAgIHRvdWNoZWQgJiZcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2VbaW5kZXhdICYmXG4gICAgICAgICAgICAgIGluZGV4ID09PSB2YWxpZGF0aW9uTWVzc2FnZVtpbmRleF0uaW5kZXggJiZcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2VbaW5kZXhdLm1lc3NhZ2UgJiYgKFxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aXRlbS5pZH1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZVtpbmRleF0ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7ZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiPntlcnJvcn08L3NwYW4+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwibWFwcGluZ3MiOiJrakNBSWUsUUFBQUEsQ0FBQUMsQ0FBQSxDQUFzQixJQUFuQixDQUFBQyxDQUFZLENBQUFELENBQUEsQ0FBWkMsWUFBWSxDQUUxQkMsQ0FBSyxDQVVIRCxDQUFZLENBVmRDLEtBQUssQ0FDTEMsQ0FBaUIsQ0FTZkYsQ0FBWSxDQVRkRSxpQkFBaUIsQ0FDakJDLENBQU8sQ0FRTEgsQ0FBWSxDQVJkRyxPQUFPLENBQ1BDLENBQVUsQ0FPUkosQ0FBWSxDQVBkSSxVQUFVLENBQ1ZDLENBQVUsQ0FNUkwsQ0FBWSxDQU5kSyxVQUFVLENBQ1ZDLENBQWUsQ0FLYk4sQ0FBWSxDQUxkTSxlQUFlLENBQ2ZDLENBQUssQ0FJSFAsQ0FBWSxDQUpkTyxLQUFLLENBQ0xDLENBQVUsQ0FHUlIsQ0FBWSxDQUhkUSxVQUFVLENBQ1ZDLENBQWEsQ0FFWFQsQ0FBWSxDQUZkUyxhQUFhLENBQ2JDLENBQWdCLENBQ2RWLENBQVksQ0FEZFUsZ0JBQWdCLENBRVZDLENBQUUsQ0FBK0JWLENBQUssQ0FBdENVLEVBQUUsQ0FBRUMsQ0FBTSxDQUF1QlgsQ0FBSyxDQUFsQ1csTUFBTSxDQUFFQyxDQUFJLENBQWlCWixDQUFLLENBQTFCWSxJQUFJLENBQUVDLENBQVUsQ0FBS2IsQ0FBSyxDQUFwQmEsVUFBVSxDQUFBQyxDQUFBLEVBRVJMLENBQWdCLElBQVMsRUFBN0NNLEtBQUss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