"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireWildcard(require("react")),_reactSelect=_interopRequireDefault(require("react-select")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_excluded=["field","value","validationMessage","touched","setTouched","setFocusClass","hideField","updateForm","styledComponents","error","cssClass","unsetError"];function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d["default"]=a,c&&c.set(a,d),d}var _default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.setFocusClass,h=a.hideField,i=a.updateForm,j=a.styledComponents,k=a.error,l=a.cssClass,m=a.unsetError,n=(0,_objectWithoutProperties2["default"])(a,_excluded),o=b.id,p=b.formId,q=b.type,r=b.label,s=b.isRequired,t=b.choices,u=b.placeholder,v=b.description,w=b.descriptionPlacement,x=b.labelPlacement,y=b.width,z=b.customName,A=(0,_react.useState)(""),B=(0,_slicedToArray2["default"])(A,2),C=B[0],D=B[1],E="",F=t.map(function(a){var b={value:a.value,label:a.text};return a.isSelected&&(E=b),b}),G=(0,_react.useState)(c||E),H=(0,_slicedToArray2["default"])(G,2),I=H[0],J=H[1],K=function(a){J(a);i({target:{value:a}},b)},L=function(){i({target:{value:I}},b),f(o),g(I&&I.value),D("")},M=j||!1,N=M.ReactSelect,O=M.Label,P=void 0===O?"label":O,Q=M.Box,R=void 0===Q?"div":Q,S=N||_reactSelect["default"];return _react["default"].createElement(R,{width:y,className:d&&e||k?"form-field form-field--select error ".concat(l," ").concat(C):"form-field form-field--select ".concat(l," ").concat(C),style:{display:h?"none":void 0}},_react["default"].createElement("div",{className:q},_react["default"].createElement(_InputLabel["default"],{formId:p,id:o,label:r,labelPlacement:x,isRequired:s,styledComponent:j}),"above"===w&&v&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:v}}),_react["default"].createElement(_reactSelect["default"],{className:"react-select-container",name:z||"input_".concat(o),required:s,value:I&&I.value?I:"",onChange:function onChange(a){K(a,b),m(o)},onBlur:function onBlur(){return L()},onFocus:function onFocus(){g(!0),D("is-open")},placeholder:u,options:F,autoFocus:!1,inputId:"input_".concat(p,"_").concat(o)}),"above"!==w&&v&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:v}}),(d&&e||k)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(p,"_").concat(o)},d||k)))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsImEiLCJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInNldEZvY3VzQ2xhc3MiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsImVycm9yIiwiY3NzQ2xhc3MiLCJ1bnNldEVycm9yIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyIiwiX2V4Y2x1ZGVkIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJpc1JlcXVpcmVkIiwiY2hvaWNlcyIsInBsYWNlaG9sZGVyIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwiQSIsInVzZVN0YXRlIiwiQiIsIl9zbGljZWRUb0FycmF5MiIsImZvY3VzQ2xhc3MiLCJzZXRGb2N1c0NsYXNzZXMiLCJzZWxlY3RlZCIsIm9wdGlvbnMiLCJtYXAiLCJjaG9pY2UiLCJpdGVtIiwidGV4dCIsImlzU2VsZWN0ZWQiLCJHIiwiSCIsInNlbGVjdGVkT3B0aW9uIiwic2VsZWN0T3B0aW9uIiwiaGFuZGxlQ2hhbmdlIiwib3B0aW9uIiwidGFyZ2V0IiwiaGFuZGxlQmx1ciIsIk0iLCJSZWFjdFNlbGVjdCIsIk8iLCJMYWJlbCIsIlEiLCJCb3giLCJSU2VsZWN0IiwiU2VsZWN0IiwiX3JlYWN0IiwiY3JlYXRlRWxlbWVudCIsIlIiLCJjbGFzc05hbWUiLCJjb25jYXQiLCJzdHlsZSIsImRpc3BsYXkiLCJfSW5wdXRMYWJlbCIsInN0eWxlZENvbXBvbmVudCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiX3JlYWN0U2VsZWN0IiwibmFtZSIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJvbkZvY3VzIiwiYXV0b0ZvY3VzIiwiaW5wdXRJZCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvRmllbGRzL1NlbGVjdC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tIFwiLi4vRm9ybUVsZW1lbnRzL0lucHV0TGFiZWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7XHJcbiAgZmllbGQsXHJcbiAgdmFsdWUsXHJcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXHJcbiAgdG91Y2hlZCxcclxuICBzZXRUb3VjaGVkLFxyXG4gIHNldEZvY3VzQ2xhc3MsXHJcbiAgaGlkZUZpZWxkLFxyXG4gIHVwZGF0ZUZvcm0sXHJcbiAgc3R5bGVkQ29tcG9uZW50cyxcclxuICBlcnJvcixcclxuICBjc3NDbGFzcyxcclxuICB1bnNldEVycm9yLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpZCxcclxuICAgIGZvcm1JZCxcclxuICAgIHR5cGUsXHJcbiAgICBsYWJlbCxcclxuICAgIGlzUmVxdWlyZWQsXHJcbiAgICBjaG9pY2VzLFxyXG4gICAgcGxhY2Vob2xkZXIsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxyXG4gICAgbGFiZWxQbGFjZW1lbnQsXHJcbiAgICB3aWR0aCxcclxuICAgIGN1c3RvbU5hbWUsXHJcbiAgfSA9IGZpZWxkO1xyXG4gIGNvbnN0IFtmb2N1c0NsYXNzLCBzZXRGb2N1c0NsYXNzZXNdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGxldCBzZWxlY3RlZCA9IFwiXCI7XHJcbiAgLy8gTWFwIG9wdGlvbnNcclxuICBjb25zdCBvcHRpb25zID0gY2hvaWNlcy5tYXAoKGNob2ljZSkgPT4ge1xyXG4gICAgY29uc3QgaXRlbSA9IHtcclxuICAgICAgdmFsdWU6IGNob2ljZS52YWx1ZSxcclxuICAgICAgbGFiZWw6IGNob2ljZS50ZXh0LFxyXG4gICAgfTtcclxuICAgIGlmIChjaG9pY2UuaXNTZWxlY3RlZCkge1xyXG4gICAgICBzZWxlY3RlZCA9IGl0ZW07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9KTtcclxuICAvLyBIYW5kbGUgU3RhdGVcclxuICBjb25zdCBbc2VsZWN0ZWRPcHRpb24sIHNlbGVjdE9wdGlvbl0gPSB1c2VTdGF0ZSh2YWx1ZSB8fCBzZWxlY3RlZCk7XHJcbiAgLy8gSGFuZGxlIGNoYW5nZVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChvcHRpb24pID0+IHtcclxuICAgIHNlbGVjdE9wdGlvbihvcHRpb24pO1xyXG4gICAgY29uc3QgZXZlbnQgPSB7XHJcbiAgICAgIHRhcmdldDoge1xyXG4gICAgICAgIHZhbHVlOiBvcHRpb24sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xyXG4gIH07XHJcbiAgLy8gSGFuZGxlIEJsdXJcclxuICBjb25zdCBoYW5kbGVCbHVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZXZlbnQgPSB7XHJcbiAgICAgIHRhcmdldDoge1xyXG4gICAgICAgIHZhbHVlOiBzZWxlY3RlZE9wdGlvbixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XHJcbiAgICBzZXRUb3VjaGVkKGlkKTtcclxuICAgIHNldEZvY3VzQ2xhc3Moc2VsZWN0ZWRPcHRpb24gJiYgc2VsZWN0ZWRPcHRpb24udmFsdWUpO1xyXG4gICAgc2V0Rm9jdXNDbGFzc2VzKFwiXCIpO1xyXG4gIH07XHJcbiAgY29uc3Qge1xyXG4gICAgUmVhY3RTZWxlY3QsXHJcbiAgICBMYWJlbCA9IFwibGFiZWxcIixcclxuICAgIEJveCA9IFwiZGl2XCIsXHJcbiAgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XHJcblxyXG4gIGNvbnN0IFJTZWxlY3QgPSBSZWFjdFNlbGVjdCB8fCBTZWxlY3Q7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcclxuICAgICAgICAgID8gYGZvcm0tZmllbGQgZm9ybS1maWVsZC0tc2VsZWN0IGVycm9yICR7Y3NzQ2xhc3N9ICR7Zm9jdXNDbGFzc31gXHJcbiAgICAgICAgICA6IGBmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXNlbGVjdCAke2Nzc0NsYXNzfSAke2ZvY3VzQ2xhc3N9YFxyXG4gICAgICB9XHJcbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/IFwibm9uZVwiIDogdW5kZWZpbmVkIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfT5cclxuICAgICAgICA8SW5wdXRMYWJlbFxyXG4gICAgICAgICAgZm9ybUlkPXtmb3JtSWR9XHJcbiAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICBsYWJlbFBsYWNlbWVudD17bGFiZWxQbGFjZW1lbnR9XHJcbiAgICAgICAgICBpc1JlcXVpcmVkPXtpc1JlcXVpcmVkfVxyXG4gICAgICAgICAgc3R5bGVkQ29tcG9uZW50PXtzdHlsZWRDb21wb25lbnRzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGVzY3JpcHRpb24gfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1zZWxlY3QtY29udGFpbmVyXCJcclxuICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9YH1cclxuICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxyXG4gICAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9uICYmIHNlbGVjdGVkT3B0aW9uLnZhbHVlID8gc2VsZWN0ZWRPcHRpb24gOiBcIlwifVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKG9wdGlvbiwgZmllbGQpO1xyXG4gICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkJsdXI9eygpID0+IGhhbmRsZUJsdXIoKX1cclxuICAgICAgICAgIG9uRm9jdXM9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0Rm9jdXNDbGFzcyh0cnVlKTtcclxuICAgICAgICAgICAgc2V0Rm9jdXNDbGFzc2VzKFwiaXMtb3BlblwiKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgYXV0b0ZvY3VzPXtmYWxzZX1cclxuICAgICAgICAgIGlucHV0SWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ICE9PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGVzY3JpcHRpb24gfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7KCh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvcikgJiYgKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH0+XHJcbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSB8fCBlcnJvcn1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6Iis2Q0FJZSxRQUFBQSxDQUFBQyxDQUFBLENBY1QsSUFiSixDQUFBQyxDQUFLLENBQUFELENBQUEsQ0FBTEMsS0FBSyxDQUNMQyxDQUFLLENBQUFGLENBQUEsQ0FBTEUsS0FBSyxDQUNMQyxDQUFpQixDQUFBSCxDQUFBLENBQWpCRyxpQkFBaUIsQ0FDakJDLENBQU8sQ0FBQUosQ0FBQSxDQUFQSSxPQUFPLENBQ1BDLENBQVUsQ0FBQUwsQ0FBQSxDQUFWSyxVQUFVLENBQ1ZDLENBQWEsQ0FBQU4sQ0FBQSxDQUFiTSxhQUFhLENBQ2JDLENBQVMsQ0FBQVAsQ0FBQSxDQUFUTyxTQUFTLENBQ1RDLENBQVUsQ0FBQVIsQ0FBQSxDQUFWUSxVQUFVLENBQ1ZDLENBQWdCLENBQUFULENBQUEsQ0FBaEJTLGdCQUFnQixDQUNoQkMsQ0FBSyxDQUFBVixDQUFBLENBQUxVLEtBQUssQ0FDTEMsQ0FBUSxDQUFBWCxDQUFBLENBQVJXLFFBQVEsQ0FDUkMsQ0FBVSxDQUFBWixDQUFBLENBQVZZLFVBQVUsQ0FDUEMsQ0FBSyxJQUFBQyx5QkFBQSxhQUFBZCxDQUFBLENBQUFlLFNBQUEsRUFHTkMsQ0FBRSxDQVlBZixDQUFLLENBWlBlLEVBQUUsQ0FDRkMsQ0FBTSxDQVdKaEIsQ0FBSyxDQVhQZ0IsTUFBTSxDQUNOQyxDQUFJLENBVUZqQixDQUFLLENBVlBpQixJQUFJLENBQ0pDLENBQUssQ0FTSGxCLENBQUssQ0FUUGtCLEtBQUssQ0FDTEMsQ0FBVSxDQVFSbkIsQ0FB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