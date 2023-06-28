"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireDefault(require("react")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_excluded=["field","value","validationMessage","touched","setTouched","hideField","updateForm","styledComponents","error","unsetError","setFocusClass","cssClass"],_default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.hideField,h=a.updateForm,i=a.styledComponents,j=a.error,k=a.unsetError,l=a.setFocusClass,m=a.cssClass,n=(0,_objectWithoutProperties2["default"])(a,_excluded),o=b.id,p=b.formId,q=b.type,r=b.label,s=b.placeholder,t=b.isRequired,u=b.maxLength,v=b.description,w=b.descriptionPlacement,x=b.labelPlacement,y=b.width,z=b.customName,A=i||!1,B=A.Input,C=void 0===B?"input":B,D=A.Label,E=void 0===D?"label":D,F=A.Box,G=void 0===F?"div":F;return _react["default"].createElement(G,{width:y,className:d&&e||j?"form-field form-field--website error ".concat(m):"form-field form-field--website ".concat(m),style:{display:g?"none":void 0}},_react["default"].createElement("div",{className:q},_react["default"].createElement(_InputLabel["default"],{formId:p,id:o,label:r,labelPlacement:x,isRequired:t,styledComponent:i}),"above"===w&&v&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:v}}),_react["default"].createElement(C,{id:"input_".concat(p,"_").concat(o),name:z||"input_".concat(o),type:q,value:c?c:"",placeholder:s,maxLength:u,required:t,onChange:function onChange(a){h(a,b),k(o)},onBlur:function onBlur(a){h(a,b),f(o),l(""!==c)},onFocus:function onFocus(){return l(!0)},"aria-describedby":"error_".concat(p,"_").concat(o),"aria-invalid":!!d&&e||!!j}),"above"!==w&&v&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:v}}),(d&&e||j)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(p,"_").concat(o)},d||j)))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsImEiLCJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsImhpZGVGaWVsZCIsInVwZGF0ZUZvcm0iLCJzdHlsZWRDb21wb25lbnRzIiwiZXJyb3IiLCJ1bnNldEVycm9yIiwic2V0Rm9jdXNDbGFzcyIsImNzc0NsYXNzIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyIiwiX2V4Y2x1ZGVkIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImlzUmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJBIiwiQiIsIklucHV0IiwiRCIsIkxhYmVsIiwiRiIsIkJveCIsIl9yZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJHIiwiY2xhc3NOYW1lIiwiY29uY2F0Iiwic3R5bGUiLCJkaXNwbGF5IiwiX0lucHV0TGFiZWwiLCJzdHlsZWRDb21wb25lbnQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIkMiLCJuYW1lIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsImV2ZW50Iiwib25CbHVyIiwib25Gb2N1cyIsIlwiYXJpYS1kZXNjcmliZWRieVwiIiwiXCJhcmlhLWludmFsaWRcIiIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvRmllbGRzL1dlYnNpdGUuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIi4uL0Zvcm1FbGVtZW50cy9JbnB1dExhYmVsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoe1xyXG4gIGZpZWxkLFxyXG4gIHZhbHVlLFxyXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxyXG4gIHRvdWNoZWQsXHJcbiAgc2V0VG91Y2hlZCxcclxuICBoaWRlRmllbGQsXHJcbiAgdXBkYXRlRm9ybSxcclxuICBzdHlsZWRDb21wb25lbnRzLFxyXG4gIGVycm9yLFxyXG4gIHVuc2V0RXJyb3IsXHJcbiAgc2V0Rm9jdXNDbGFzcyxcclxuICBjc3NDbGFzcyxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaWQsXHJcbiAgICBmb3JtSWQsXHJcbiAgICB0eXBlLFxyXG4gICAgbGFiZWwsXHJcbiAgICBwbGFjZWhvbGRlcixcclxuICAgIGlzUmVxdWlyZWQsXHJcbiAgICBtYXhMZW5ndGgsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxyXG4gICAgbGFiZWxQbGFjZW1lbnQsXHJcbiAgICB3aWR0aCxcclxuICAgIGN1c3RvbU5hbWUsXHJcbiAgfSA9IGZpZWxkO1xyXG4gIGNvbnN0IHtcclxuICAgIElucHV0ID0gXCJpbnB1dFwiLFxyXG4gICAgTGFiZWwgPSBcImxhYmVsXCIsXHJcbiAgICBCb3ggPSBcImRpdlwiLFxyXG4gIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcclxuICAgICAgICAgID8gYGZvcm0tZmllbGQgZm9ybS1maWVsZC0td2Vic2l0ZSBlcnJvciAke2Nzc0NsYXNzfWBcclxuICAgICAgICAgIDogYGZvcm0tZmllbGQgZm9ybS1maWVsZC0td2Vic2l0ZSAke2Nzc0NsYXNzfWBcclxuICAgICAgfVxyXG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyBcIm5vbmVcIiA6IHVuZGVmaW5lZCB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0+XHJcbiAgICAgICAgPElucHV0TGFiZWxcclxuICAgICAgICAgIGZvcm1JZD17Zm9ybUlkfVxyXG4gICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgbGFiZWxQbGFjZW1lbnQ9e2xhYmVsUGxhY2VtZW50fVxyXG4gICAgICAgICAgaXNSZXF1aXJlZD17aXNSZXF1aXJlZH1cclxuICAgICAgICAgIHN0eWxlZENvbXBvbmVudD17c3R5bGVkQ29tcG9uZW50c31cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gXCJhYm92ZVwiICYmIGRlc2NyaXB0aW9uICYmIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRlc2NyaXB0aW9uIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfWB9XHJcbiAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfWB9XHJcbiAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgdmFsdWU9eyF2YWx1ZSA/IFwiXCIgOiB2YWx1ZX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxyXG4gICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcclxuICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25CbHVyPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xyXG4gICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcclxuICAgICAgICAgICAgc2V0Rm9jdXNDbGFzcyh2YWx1ZSAhPT0gXCJcIik7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0Rm9jdXNDbGFzcyh0cnVlKX1cclxuICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfVxyXG4gICAgICAgICAgYXJpYS1pbnZhbGlkPXsoISF2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCAhIWVycm9yfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ICE9PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGVzY3JpcHRpb24gfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7KCh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvcikgJiYgKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH0+XHJcbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSB8fCBlcnJvcn1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6InVrQkFHZSxRQUFBQSxDQUFBQyxDQUFBLENBY1QsSUFiSixDQUFBQyxDQUFLLENBQUFELENBQUEsQ0FBTEMsS0FBSyxDQUNMQyxDQUFL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