"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireWildcard(require("react")),_reactSelect=_interopRequireDefault(require("react-select")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_excluded=["field","value","validationMessage","touched","setTouched","setFocusClass","hideField","updateForm","styledComponents","error","cssClass","unsetError"];function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d["default"]=a,c&&c.set(a,d),d}var _default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.setFocusClass,h=a.hideField,i=a.updateForm,j=a.styledComponents,k=a.error,l=a.cssClass,m=a.unsetError,n=(0,_objectWithoutProperties2["default"])(a,_excluded),o=b.id,p=b.formId,q=b.type,r=b.label,s=b.isRequired,t=b.choices,u=b.placeholder,v=b.description,w=b.descriptionPlacement,x=b.labelPlacement,y=b.width,z=b.customName,A="",B=t.map(function(a){var b={value:a.value,label:a.text};return a.isSelected&&(A=b),b}),C=(0,_react.useState)(c||A),D=(0,_slicedToArray2["default"])(C,2),E=D[0],F=D[1],G=function(a){F(a);i({target:{value:a}},b)},H=function(){i({target:{value:E}},b),f(o),g(E&&E.value)},I=j||!1,J=I.ReactSelect,K=I.Label,L=void 0===K?"label":K,M=I.Box,N=void 0===M?"div":M,O=J||_reactSelect["default"];return _react["default"].createElement(N,{width:y,className:d&&e||k?"form-field form-field--buckarooideal error ".concat(l):"form-field form-field--buckarooideal ".concat(l),style:{display:h?"none":void 0}},_react["default"].createElement("div",{className:q},_react["default"].createElement(_InputLabel["default"],{formId:p,id:o,label:r,labelPlacement:x,isRequired:s,styledComponent:j}),"above"===w&&v&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:v}}),_react["default"].createElement(O,{name:z||"input_".concat(o),required:s,value:E&&E.value?E:"",onChange:function onChange(a){G(a,b),m(o)},onBlur:function onBlur(){return H()},onFocus:function onFocus(){return g(!0)},placeholder:u,options:B,className:"form-select",autoFocus:!1,inputId:"input_".concat(p,"_").concat(o)}),"above"!==w&&v&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:v}}),(d&&e||k)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(p,"_").concat(o)},d||k)))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsImEiLCJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInNldEZvY3VzQ2xhc3MiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsImVycm9yIiwiY3NzQ2xhc3MiLCJ1bnNldEVycm9yIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyIiwiX2V4Y2x1ZGVkIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJpc1JlcXVpcmVkIiwiY2hvaWNlcyIsInBsYWNlaG9sZGVyIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwic2VsZWN0ZWQiLCJvcHRpb25zIiwibWFwIiwiY2hvaWNlIiwiaXRlbSIsInRleHQiLCJpc1NlbGVjdGVkIiwiQyIsInVzZVN0YXRlIiwiRCIsIl9zbGljZWRUb0FycmF5MiIsInNlbGVjdGVkT3B0aW9uIiwic2VsZWN0T3B0aW9uIiwiaGFuZGxlQ2hhbmdlIiwib3B0aW9uIiwidGFyZ2V0IiwiaGFuZGxlQmx1ciIsIkkiLCJSZWFjdFNlbGVjdCIsIksiLCJMYWJlbCIsIk0iLCJCb3giLCJSU2VsZWN0IiwiU2VsZWN0IiwiX3JlYWN0IiwiY3JlYXRlRWxlbWVudCIsIk4iLCJjbGFzc05hbWUiLCJjb25jYXQiLCJzdHlsZSIsImRpc3BsYXkiLCJfSW5wdXRMYWJlbCIsInN0eWxlZENvbXBvbmVudCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiTyIsIm5hbWUiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwib25CbHVyIiwib25Gb2N1cyIsImF1dG9Gb2N1cyIsImlucHV0SWQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL0ZpZWxkcy9CdWNrYXJvb2lkZWFsLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gXCIuLi9Gb3JtRWxlbWVudHMvSW5wdXRMYWJlbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHtcclxuICBmaWVsZCxcclxuICB2YWx1ZSxcclxuICB2YWxpZGF0aW9uTWVzc2FnZSxcclxuICB0b3VjaGVkLFxyXG4gIHNldFRvdWNoZWQsXHJcbiAgc2V0Rm9jdXNDbGFzcyxcclxuICBoaWRlRmllbGQsXHJcbiAgdXBkYXRlRm9ybSxcclxuICBzdHlsZWRDb21wb25lbnRzLFxyXG4gIGVycm9yLFxyXG4gIGNzc0NsYXNzLFxyXG4gIHVuc2V0RXJyb3IsXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGlkLFxyXG4gICAgZm9ybUlkLFxyXG4gICAgdHlwZSxcclxuICAgIGxhYmVsLFxyXG4gICAgaXNSZXF1aXJlZCxcclxuICAgIGNob2ljZXMsXHJcbiAgICBwbGFjZWhvbGRlcixcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXHJcbiAgICBsYWJlbFBsYWNlbWVudCxcclxuICAgIHdpZHRoLFxyXG4gICAgY3VzdG9tTmFtZSxcclxuICB9ID0gZmllbGQ7XHJcblxyXG4gIGxldCBzZWxlY3RlZCA9IFwiXCI7XHJcbiAgLy8gTWFwIG9wdGlvbnNcclxuICBjb25zdCBvcHRpb25zID0gY2hvaWNlcy5tYXAoKGNob2ljZSkgPT4ge1xyXG4gICAgY29uc3QgaXRlbSA9IHtcclxuICAgICAgdmFsdWU6IGNob2ljZS52YWx1ZSxcclxuICAgICAgbGFiZWw6IGNob2ljZS50ZXh0LFxyXG4gICAgfTtcclxuICAgIGlmIChjaG9pY2UuaXNTZWxlY3RlZCkge1xyXG4gICAgICBzZWxlY3RlZCA9IGl0ZW07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9KTtcclxuICAvLyBIYW5kbGUgU3RhdGVcclxuICBjb25zdCBbc2VsZWN0ZWRPcHRpb24sIHNlbGVjdE9wdGlvbl0gPSB1c2VTdGF0ZSh2YWx1ZSB8fCBzZWxlY3RlZCk7XHJcbiAgLy8gSGFuZGxlIGNoYW5nZVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChvcHRpb24pID0+IHtcclxuICAgIHNlbGVjdE9wdGlvbihvcHRpb24pO1xyXG4gICAgY29uc3QgZXZlbnQgPSB7XHJcbiAgICAgIHRhcmdldDoge1xyXG4gICAgICAgIHZhbHVlOiBvcHRpb24sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xyXG4gIH07XHJcbiAgLy8gSGFuZGxlIEJsdXJcclxuICBjb25zdCBoYW5kbGVCbHVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZXZlbnQgPSB7XHJcbiAgICAgIHRhcmdldDoge1xyXG4gICAgICAgIHZhbHVlOiBzZWxlY3RlZE9wdGlvbixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XHJcbiAgICBzZXRUb3VjaGVkKGlkKTtcclxuICAgIHNldEZvY3VzQ2xhc3Moc2VsZWN0ZWRPcHRpb24gJiYgc2VsZWN0ZWRPcHRpb24udmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3Qge1xyXG4gICAgUmVhY3RTZWxlY3QsXHJcbiAgICBMYWJlbCA9IFwibGFiZWxcIixcclxuICAgIEJveCA9IFwiZGl2XCIsXHJcbiAgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XHJcblxyXG4gIGNvbnN0IFJTZWxlY3QgPSBSZWFjdFNlbGVjdCB8fCBTZWxlY3Q7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcclxuICAgICAgICAgID8gYGZvcm0tZmllbGQgZm9ybS1maWVsZC0tYnVja2Fyb29pZGVhbCBlcnJvciAke2Nzc0NsYXNzfWBcclxuICAgICAgICAgIDogYGZvcm0tZmllbGQgZm9ybS1maWVsZC0tYnVja2Fyb29pZGVhbCAke2Nzc0NsYXNzfWBcclxuICAgICAgfVxyXG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyBcIm5vbmVcIiA6IHVuZGVmaW5lZCB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0+XHJcbiAgICAgICAgPElucHV0TGFiZWxcclxuICAgICAgICAgIGZvcm1JZD17Zm9ybUlkfVxyXG4gICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgbGFiZWxQbGFjZW1lbnQ9e2xhYmVsUGxhY2VtZW50fVxyXG4gICAgICAgICAgaXNSZXF1aXJlZD17aXNSZXF1aXJlZH1cclxuICAgICAgICAgIHN0eWxlZENvbXBvbmVudD17c3R5bGVkQ29tcG9uZW50c31cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gXCJhYm92ZVwiICYmIGRlc2NyaXB0aW9uICYmIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRlc2NyaXB0aW9uIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPFJTZWxlY3RcclxuICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9YH1cclxuICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxyXG4gICAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9uICYmIHNlbGVjdGVkT3B0aW9uLnZhbHVlID8gc2VsZWN0ZWRPcHRpb24gOiBcIlwifVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKG9wdGlvbiwgZmllbGQpO1xyXG4gICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkJsdXI9eygpID0+IGhhbmRsZUJsdXIoKX1cclxuICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldEZvY3VzQ2xhc3ModHJ1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIlxyXG4gICAgICAgICAgYXV0b0ZvY3VzPXtmYWxzZX1cclxuICAgICAgICAgIC8vIHN0eWxlcz17Y3VzdG9tU3R5bGVzfVxyXG4gICAgICAgICAgaW5wdXRJZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfWB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgIT09IFwiYWJvdmVcIiAmJiBkZXNjcmlwdGlvbiAmJiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXNjcmlwdGlvbiB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cclxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlIHx8IGVycm9yfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICl9XHJc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