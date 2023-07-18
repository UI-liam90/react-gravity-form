"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireDefault(require("react")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_excluded=["field","value","validationMessage","touched","setTouched","hideField","updateForm","styledComponents","error","unsetError","setFocusClass","cssClass"],_default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.hideField,h=a.updateForm,i=a.styledComponents,j=a.error,k=a.unsetError,l=a.setFocusClass,m=a.cssClass,n=(0,_objectWithoutProperties2["default"])(a,_excluded),o=b.id,p=b.formId,q=b.type,r=b.label,s=b.placeholder,t=b.isRequired,u=b.maxLength,v=b.description,w=b.descriptionPlacement,x=b.labelPlacement,y=b.width,z=b.customName,A=i||!1,B=A.Input,C=void 0===B?"input":B,D=A.Label,E=void 0===D?"label":D,F=A.Box,G=void 0===F?"div":F,H=(n||{}).i18n;return _react["default"].createElement(G,{width:y,className:d&&e||j?"form-field form-field--text error ".concat(m):"form-field form-field--text ".concat(m),style:{display:g?"none":void 0}},_react["default"].createElement("div",{className:q},_react["default"].createElement(_InputLabel["default"],{formId:p,id:o,label:r,labelPlacement:x,isRequired:t,styledComponent:i}),"above"===w&&v&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:v}}),_react["default"].createElement(C,{id:"input_".concat(p,"_").concat(o),name:z||"input_".concat(o),type:q,value:c?c:"",placeholder:s,maxLength:u,required:t,onChange:function onChange(a){h(a,b),k(o)},onBlur:function onBlur(a){h(a,b),f(o),l(""!==c)},disabled:function setDisabled(){return"field--street"===m||"field--city"===m}(),onFocus:function onFocus(){return l(!0)},"aria-label":r,"aria-describedby":"error_".concat(p,"_").concat(o),"aria-invalid":!!d&&e||!!j}),u&&0<u&&_react["default"].createElement("div",{className:"charleft"},H?"".concat(H.t("maxCharachters",{length:c.length||0,maxLength:u})):"".concat(c.length||0," of ").concat(u," max charachters")),"above"!==w&&v&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:v}}),(d&&e||j)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(p,"_").concat(o)},d||j)))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsImEiLCJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsImhpZGVGaWVsZCIsInVwZGF0ZUZvcm0iLCJzdHlsZWRDb21wb25lbnRzIiwiZXJyb3IiLCJ1bnNldEVycm9yIiwic2V0Rm9jdXNDbGFzcyIsImNzc0NsYXNzIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyIiwiX2V4Y2x1ZGVkIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImlzUmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJBIiwiQiIsIklucHV0IiwiRCIsIkxhYmVsIiwiRiIsIkJveCIsImkxOG4iLCJfcmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiRyIsImNsYXNzTmFtZSIsImNvbmNhdCIsInN0eWxlIiwiZGlzcGxheSIsIl9JbnB1dExhYmVsIiwic3R5bGVkQ29tcG9uZW50IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJDIiwibmFtZSIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJldmVudCIsIm9uQmx1ciIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJvbkZvY3VzIiwiXCJhcmlhLWxhYmVsXCIiLCJcImFyaWEtZGVzY3JpYmVkYnlcIiIsIlwiYXJpYS1pbnZhbGlkXCIiLCJ0IiwibGVuZ3RoIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvVGV4dC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIi4uL0Zvcm1FbGVtZW50cy9JbnB1dExhYmVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIGhpZGVGaWVsZCxcbiAgdXBkYXRlRm9ybSxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgZXJyb3IsXG4gIHVuc2V0RXJyb3IsXG4gIHNldEZvY3VzQ2xhc3MsXG4gIGNzc0NsYXNzLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgZm9ybUlkLFxuICAgIHR5cGUsXG4gICAgbGFiZWwsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBtYXhMZW5ndGgsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgd2lkdGgsXG4gICAgY3VzdG9tTmFtZSxcbiAgfSA9IGZpZWxkO1xuICBjb25zdCB7XG4gICAgSW5wdXQgPSBcImlucHV0XCIsXG4gICAgTGFiZWwgPSBcImxhYmVsXCIsXG4gICAgQm94ID0gXCJkaXZcIixcbiAgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG4gIGNvbnN0IHsgaTE4biB9ID0gcHJvcHMgfHwge307XG4gIGNvbnN0IHNldERpc2FibGVkID0gKCkgPT5cbiAgICBjc3NDbGFzcyA9PT0gXCJmaWVsZC0tc3RyZWV0XCIgfHwgY3NzQ2xhc3MgPT09IFwiZmllbGQtLWNpdHlcIjtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvclxuICAgICAgICAgID8gYGZvcm0tZmllbGQgZm9ybS1maWVsZC0tdGV4dCBlcnJvciAke2Nzc0NsYXNzfWBcbiAgICAgICAgICA6IGBmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXRleHQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyBcIm5vbmVcIiA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAgPElucHV0TGFiZWxcbiAgICAgICAgICBmb3JtSWQ9e2Zvcm1JZH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgIGxhYmVsUGxhY2VtZW50PXtsYWJlbFBsYWNlbWVudH1cbiAgICAgICAgICBpc1JlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgIHN0eWxlZENvbXBvbmVudD17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgLz5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfWB9XG4gICAgICAgICAgbmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgdmFsdWU9eyF2YWx1ZSA/IFwiXCIgOiB2YWx1ZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgbWF4TGVuZ3RoPXttYXhMZW5ndGh9XG4gICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkJsdXI9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICBzZXRGb2N1c0NsYXNzKHZhbHVlICE9PSBcIlwiKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGRpc2FibGVkPXtzZXREaXNhYmxlZCgpfVxuICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldEZvY3VzQ2xhc3ModHJ1ZSl9XG4gICAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9XG4gICAgICAgICAgYXJpYS1pbnZhbGlkPXsoISF2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCAhIWVycm9yfVxuICAgICAgICAvPlxuICAgICAgICB7bWF4TGVuZ3RoICYmIG1heExlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmxlZnRcIj5cbiAgICAgICAgICAgIHtpMThuXG4gICAgICAgICAgICAgID8gYCR7aTE4bi50KFwibWF4Q2hhcmFjaHRlcnNcIiwge1xuICAgICAgICAgICAgICAgICAgbGVuZ3RoOiB2YWx1ZS5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICAgICAgICAgICAgICAgIH0pfWBcbiAgICAgICAgICAgICAgOiBgJHt2YWx1ZS5sZW5ndGggfHwgMH0gb2YgJHttYXhMZW5ndGh9IG1heCBjaGFyYWNodGVyc2B9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCAhPT0gXCJhYm92ZVwiICYmIGRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgeygodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3IpICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSB8fCBlcnJvcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXSwibWFwcGluZ3MiOiJ1a0JBR2UsUUFBQUEsQ0FBQUMsQ0FBQSxDQWNULElBYkosQ0FBQUMsQ0FBSyxDQUFBRCxDQUFBLENBQUxDLEtBQUssQ0FDTEMsQ0FBSyxDQUFBRixDQUFBLENBQUxFLEtBQUssQ0FDTEMsQ0FBaUIsQ0FBQUgsQ0FBQSxDQUFqQkcsaUJBQWlCLENBQ2pCQyxDQUFPLENBQUFKLENBQUEsQ0FBUEksT0FBTyxDQUNQQyxDQUFVLENBQUFMLENBQUEsQ0FBVkssVUFBVSxDQUNWQyxDQUFTLENBQUFOLENBQUEsQ0FBVE0sU0FBUyxDQUNUQyxDQUFVLENBQUFQLENBQUEsQ0FBVk8sVUFBVSxDQUNWQyxDQUFnQixDQUFBUixDQUFBLENBQWhCUSxnQkFBZ0IsQ0FDaEJDLENBQUssQ0FBQVQsQ0FBQSxDQUFMUyxLQUFLLENBQ0xDLENBQVUsQ0FBQVYsQ0FBQSxDQUFWVSxVQUFVLENBQ1ZDLENBQWEsQ0FBQVgsQ0FBQSxDQUFiVyxhQUFhLENBQ2JDLENBQVEsQ0FBQVosQ0FBQSxDQUFSWSxRQUFRLENBQ0xDLENBQUssSUFBQUMseUJBQUEsYUFBQWQsQ0FBQSxDQUFBZSxTQUFBLEVBR05DLENBQUUsQ0FZQWYsQ0FBSyxDQVpQZSxFQUFFLENBQ0ZDLENBQU0sQ0FXSmhCLENBQUssQ0FYUGdCLE1BQU0sQ0FDTkMs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