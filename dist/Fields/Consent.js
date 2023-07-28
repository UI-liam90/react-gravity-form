"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireDefault(require("react")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_uuid=require("uuid"),_excluded=["field","value","validationMessage","touched","setTouched","hideField","updateForm","styledComponents","error","unsetError"],_default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.hideField,h=a.updateForm,i=a.styledComponents,j=a.error,k=a.unsetError,l=(0,_objectWithoutProperties2["default"])(a,_excluded),m=b.id,n=b.formId,o=b.type,p=b.label,q=b.inputs,r=b.cssClass,s=b.isRequired,t=b.description,u=b.descriptionPlacement,v=b.labelPlacement,w=b.width,x=b.customName,y=b.checkboxLabel,z=i||!1,A=z.Consent,B=void 0===A?"div":A,C=z.Label,D=void 0===C?"label":C,E=z.Box,F=void 0===E?"div":E;return _react["default"].createElement(F,{width:w,className:d&&e||j?"form-field form-field--consent consent error ".concat(r):"form-field form-field--consent consent ".concat(r),style:{display:g?"none":void 0}},_react["default"].createElement(B,{className:"checkboxes"},_react["default"].createElement(_InputLabel["default"],{formId:n,id:m,label:p,labelPlacement:v,isRequired:s,styledComponent:i}),"above"===u&&t&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t}}),q.filter(function(a){return!a.isHidden}).map(function(a,c){return _react["default"].createElement(_react["default"].Fragment,{key:(0,_uuid.v4)()},0===c&&_react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement("input",{id:"input_".concat(n,"_").concat(m,"_1"),type:"checkbox",name:x||"input_".concat(a.id),value:1,required:s,onChange:function onChange(a){h(a,b),f(m),k(m)},"aria-invalid":!!d&&e||!!j}),_react["default"].createElement("label",{className:"gfield_consent_label",htmlFor:x||"input_".concat(n,"_").concat(m,"_1"),dangerouslySetInnerHTML:{__html:y}})),1===c&&_react["default"].createElement("input",{type:"hidden",name:"input_".concat(a.id),value:y,className:"gform_hidden"}),2===c&&_react["default"].createElement("input",{type:"hidden",name:"input_".concat(a.id),value:"1",className:"gform_hidden"}))}),"above"!==u&&t&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t}}),(d&&e||j)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(n,"_").concat(m)},d||j)))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsImEiLCJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsImhpZGVGaWVsZCIsInVwZGF0ZUZvcm0iLCJzdHlsZWRDb21wb25lbnRzIiwiZXJyb3IiLCJ1bnNldEVycm9yIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyIiwiX2V4Y2x1ZGVkIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJpbnB1dHMiLCJjc3NDbGFzcyIsImlzUmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJjaGVja2JveExhYmVsIiwieiIsIkEiLCJDb25zZW50IiwiQyIsIkxhYmVsIiwiRSIsIkJveCIsIl9yZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJGIiwiY2xhc3NOYW1lIiwiY29uY2F0Iiwic3R5bGUiLCJkaXNwbGF5IiwiQiIsIl9JbnB1dExhYmVsIiwic3R5bGVkQ29tcG9uZW50IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJmaWx0ZXIiLCJzIiwiaXNIaWRkZW4iLCJtYXAiLCJpbnB1dCIsImkiLCJGcmFnbWVudCIsImtleSIsInY0IiwibmFtZSIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJldmVudCIsIlwiYXJpYS1pbnZhbGlkXCIiLCJodG1sRm9yIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvQ29uc2VudC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIi4uL0Zvcm1FbGVtZW50cy9JbnB1dExhYmVsXCI7XG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIGhpZGVGaWVsZCxcbiAgdXBkYXRlRm9ybSxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgZXJyb3IsXG4gIHVuc2V0RXJyb3IsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBmb3JtSWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBpbnB1dHMsXG4gICAgY3NzQ2xhc3MsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBjdXN0b21OYW1lLFxuICAgIGNoZWNrYm94TGFiZWwsXG4gIH0gPSBmaWVsZDtcblxuICBjb25zdCB7XG4gICAgQ29uc2VudCA9IFwiZGl2XCIsXG4gICAgTGFiZWwgPSBcImxhYmVsXCIsXG4gICAgQm94ID0gXCJkaXZcIixcbiAgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcbiAgICAgICAgICA/IGBmb3JtLWZpZWxkIGZvcm0tZmllbGQtLWNvbnNlbnQgY29uc2VudCBlcnJvciAke2Nzc0NsYXNzfWBcbiAgICAgICAgICA6IGBmb3JtLWZpZWxkIGZvcm0tZmllbGQtLWNvbnNlbnQgY29uc2VudCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/IFwibm9uZVwiIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPENvbnNlbnQgY2xhc3NOYW1lPVwiY2hlY2tib3hlc1wiPlxuICAgICAgICA8SW5wdXRMYWJlbFxuICAgICAgICAgIGZvcm1JZD17Zm9ybUlkfVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgICAgbGFiZWxQbGFjZW1lbnQ9e2xhYmVsUGxhY2VtZW50fVxuICAgICAgICAgIGlzUmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgc3R5bGVkQ29tcG9uZW50PXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAvPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09IFwiYWJvdmVcIiAmJiBkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXNjcmlwdGlvbiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtpbnB1dHNcbiAgICAgICAgICAuZmlsdGVyKChzKSA9PiAhcy5pc0hpZGRlbilcbiAgICAgICAgICAubWFwKChpbnB1dCwgaSkgPT4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17djQoKX0+XG4gICAgICAgICAgICAgIHtpID09PSAwICYmIChcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fMWB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aW5wdXQuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9ezF9XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVja2VkPXshdmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17KCEhdmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgISFlcnJvcn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2ZpZWxkX2NvbnNlbnRfbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fMWB9XG4gICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY2hlY2tib3hMYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7aSA9PT0gMSAmJiAoXG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e2BpbnB1dF8ke2lucHV0LmlkfWB9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y2hlY2tib3hMYWJlbH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdmb3JtX2hpZGRlblwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge2kgPT09IDIgJiYgKFxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpbnB1dC5pZH1gfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdmb3JtX2hpZGRlblwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCAhPT0gXCJhYm92ZVwiICYmIGRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgeygodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3IpICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSB8fCBlcnJvcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L0NvbnNlbnQ+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl0sIm1hcHBpbmdzIjoia2tCQUllLFFBQUFBLENBQUFDLENBQUEsQ0FZVCxJQVhKLENBQUFDLENBQUssQ0FBQUQsQ0FBQSxDQUFMQyxLQUFLLENBQ0xDLENBQUssQ0FBQUYsQ0FBQSxDQUFMRSxLQUFLLENBQ0xDLENBQWlCLENBQUFILENBQUEsQ0FBakJHLGlCQUFpQixDQUNqQkMsQ0FBTyxDQUFBSixDQUFBLENBQVBJLE9BQU8sQ0FDUEMsQ0FBVSxDQUFBTCxDQUFBLENBQVZLLFVBQVUsQ0FDVkMsQ0FBUyxDQUFBTixDQUFBLENBQVRNLFNBQVMsQ0FDVEMsQ0FBVSxDQUFBUCxDQUFBLENBQVZPLFVBQVUsQ0FDVkMsQ0FBZ0IsQ0FBQVIsQ0FBQSxDQUFoQlEsZ0JBQWdCLENBQ2hCQyxDQUFLLENBQUFULENBQUEsQ0FBTFMsS0FBSyxDQUNMQyxDQUFVLENBQUFWLENBQUEsQ0FBVlUsVUFBVSxDQUNQQyxDQUFLLElBQUFDLHlCQUFBLGFBQUFaLENBQUEsQ0FBQWEsU0FBQSxFQUdOQyxDQUFFLENBYUFiLENBQUssQ0FiUGEsRUFBRSxDQUNGQyxDQUFNLENBWUpkLENBQUssQ0FaUGMsTUFBTSxDQUNOQyxDQUFJLENBV0ZmLENBQUssQ0FYUGUsSUFBSSxDQUNKQyxDQUFLLENBVUhoQixDQUFLLENBVlBnQixLQUFLLENBQ0xDLENBQU0sQ0FTSmpCLENBQUssQ0FUUGlCLE1BQU0sQ0FDTkMsQ0FBUSxDQVFObEIsQ0FBSyxDQVJQa0IsUUFBUSxDQUNSQyxDQUFVLENBT1JuQixDQUFLLENBUFBtQixVQUFVLENBQ1ZDLENBQVcsQ0FNVHBCLENBQUssQ0FOUG9CLFdBQVcsQ0FDWEMsQ0FBb0IsQ0FLbEJyQixDQUFLLENBTFBxQixvQkFBb0IsQ0FDcEJDLENBQWMsQ0FJWnRCLENBQUssQ0FKUHNCLGNBQWMsQ0FDZEMsQ0FBSyxDQUdIdkIsQ0FBSyxDQUhQdUIsS0FBSyxDQUNMQyxDQUFVLENBRVJ4QixDQUFLLENBRlB3QixVQUFVLENBQ1ZDLENBQWEsQ0FDWHpCLENBQUssQ0FEUHlCLGFBQWEsQ0FBQUMsQ0FBQSxDQU9YbkIsQ0FBZ0IsSUFBUyxDQUFBb0IsQ0FBQSxDQUFBRCxDQUFBLENBSDNCRSxPQUFPLENBQVBBLENBQU8sVUFBQUQsQ0FBQSxDQUFHLEtBQUssQ0FBQUEsQ0FBQSxDQUFBRSxDQUFBLENBQUFILENBQUEsQ0FDZkksS0FBSyxDQUFMQSxDQUFLLFVBQUFELENBQUEsQ0FBRyxPQUFPLENBQUFBLENBQUEsQ0FBQUUsQ0FBQSxDQUFBTCxDQUFBLENBQ2ZNLEdBQUcsQ0FBSEEsQ0FBRyxVQUFBRCxDQUFBLENBQUcsS0FBSyxDQUFBQSxDQUFBLENBR2IsTUFDRSxDQUFBRSxNQUFBLFlBQUFDLGFBQUEsQ0FBQ0MsQ0FBRyxFQUNGWixLQUFLLENBQUVBLENBQU0sQ0FDYmEsU0FBUyxDQUNObEMsQ0FBaUIsRUFBSUMsQ0FBTyxFQUFLSyxDQUFLLGlEQUFBNkIsTUFBQSxDQUNhbkIsQ0FBUSw0Q0FBQW1CLE1BQUEsQ0FDZG5CLENBQVEsQ0FDdkQsQ0FDRG9CLEtBQUssQ0FBRSxDQUFFQyxPQUFPLENBQUVsQyxDQUFTLENBQUcsTUFBTSxPQUFhLENBQUUsRUFFbkQ0QixNQUFBLFlBQUFDLGFBQUEsQ0FBQ00sQ0FBTyxFQUFDSixTQUFTLENBQUMsWUFBWSxFQUM3QkgsTUFBQSxZQUFBQyxhQUFBLENBQUNPLFdBQUEsV0FBVSxFQUNUM0IsTUFBTSxDQUFFQSxDQUFPLENBQ2ZELEVBQUUsQ0FBRUEsQ0FBRyxDQUNQRyxLQUFLLENBQUVBLENBQU0sQ0FDYk0sY0FBYyxDQUFFQSxDQUFlLENBQy9CSCxVQUFVLENBQUVBLENBQVcsQ0FDdkJ1QixlQUFlLENBQUVuQyxDQUFpQixDQUNuQyxDQUFDLENBQ3dCLE9BQU8sR0FBaENjLENBQWdDLEVBQUlELENBQVcsRUFDOUNhLE1BQUEsWUFBQUMsYUFBQSxRQUNFRSxTQUFTLENBQUMsYUFBYSxDQUN2Qk8sdUJBQXVCLENBQUUsQ0FBRUMsTUFBTSxDQUFFeEIsQ0FBWSxDQUFFLENBQ2xELENBQ0YsQ0FDQUgsQ0FBTSxDQUNKNEIsTUFBTSxDQUFDLFNBQUNDLENBQUMsUUFBSyxDQUFDQSxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUMxQkMsR0FBRyxDQUFDLFNBQUNDLENBQUssQ0FBRUMsQ0FBQyxRQUNaLENBQUFqQixNQUFBLFlBQUFDLGFBQUEsQ0FBQ0QsTUFBQSxXQUFLLENBQUNrQixRQUFRLEVBQUNDLEdBQUcsQ0FBRSxHQUFBQyxRQUFFLEVBQUMsQ0FBRSxFQUNqQixDQUFDLEdBQVBILENBQU8sRUFDTmpCLE1BQUEsWUFBQUMsYUFBQSxDQUFDRCxNQUFBLFdBQUssQ0FBQ2tCLFFBQVEsTUFDYmxCLE1BQUEsWUFBQUMsYUFBQSxVQUNFckIsRUFBRSxVQUFBd0IsTUFBQSxDQUFXdkIsQ0FBTSxNQUFBdUIsTUFBQSxDQUFJeEIsQ0FBRSxNQUFLLENBQzlCRSxJQUFJLENBQUMsVUFBVSxDQUNmdUMsSUFBSSxDQUFFOUIsQ0FBVSxXQUFBYSxNQUFBLENBQWFZLENBQUssQ0FBQ3BDLEVBQUUsQ0FBRyxDQUN4Q1osS0FBSyxDQUFFLENBQUUsQ0FDVHNELFFBQVEsQ0FBRXBDLENBQVcsQ0FFckJxQyxRQUFRLENBQUUsU0FBQUEsU0FBQ0MsQ0FBSyxDQUFLLENBQ25CbkQsQ0FBVSxDQUFDbUQsQ0FBSyxDQUFFekQsQ0FBSyxDQUFDLENBQ3hCSSxDQUFVLENBQUNTLENBQUUsQ0FBQyxDQUNkSixDQUFVLENBQUNJLENBQUUsQ0FDZixDQUFFLENBQ0Y2QyxjQUFBLENBQWUsQ0FBQyxDQUFDeEQsQ0FBaUIsRUFBSUMsQ0FBTyxFQUFLLENBQUMsQ0FBQ0ssQ0FBTSxDQUMzRCxDQUFDLENBQ0Z5QixNQUFBLFlBQUFDLGFBQUEsVUFDRUUsU0FBUyxDQUFDLHNCQUFzQixDQUNoQ3VCLE9BQU8sQ0FBRW5DLENBQVUsV0FBQWEsTUFBQSxDQUFhdkIsQ0FBTSxNQUFBdUIsTUFBQSxDQUFJeEIsQ0FBRSxNQUFLLENBQ2pEOEIsdUJBQXVCLENBQUUsQ0FBRUMsTUFBTSxDQUFFbkIsQ0FBYyxDQUFFLENBQ3BELENBQ2EsQ0FDakIsQ0FDTSxDQUFDLEdBQVB5QixDQUFPLEVBQ05qQixNQUFBLFlBQUFDLGFBQUEsVUFDRW5CLElBQUksQ0FBQyxRQUFRLENBQ2J1QyxJQUFJLFVBQUFqQixNQUFBLENBQVdZLENBQUssQ0FBQ3BDLEVBQUUsQ0FBRyxDQUMxQlosS0FBSyxDQUFFd0IsQ0FBYyxDQUNyQlcsU0FBUyxDQUFDLGNBQWMsQ0FDekIsQ0FDRixDQUNNLENBQUMsR0FBUGMsQ0FBTyxFQUNOakIsTUFBQSxZQUFBQyxhQUFBLFVBQ0VuQixJQUFJLENBQUMsUUFBUSxDQUNidUMsSUFBSSxVQUFBakIsTUFBQSxDQUFXWSxDQUFLLENBQUNwQyxFQUFFLENBQUcsQ0FDMUJaLEtBQUssQ0FBQyxHQUFHLENBQ1RtQyxTQUFTLENBQUMsY0FBYyxDQUN6QixDQUVXLENBQUMsQ0FDbEIsQ0FBQyxDQUNzQixPQUFPLEdBQWhDZixDQUFnQyxFQUFJRCxDQUFXLEVBQzlDYSxNQUFBLFlBQUFDLGFBQUEsUUFDRUUsU0FBUyxDQUFDLGFBQWEsQ0FDdkJPLHVCQUF1QixDQUFFLENBQUVDLE1BQU0sQ0FBRXhCLENBQVksQ0FBRSxDQUNsRCxDQUNGLENBQ0EsQ0FBRWxCLENBQWlCLEVBQUlDLENBQU8sRUFBS0ssQ0FBSyxHQUN2Q3lCLE1BQUEsWUFBQUMsYUFBQSxTQUFNRSxTQUFTLENBQUMsZUFBZSxDQUFDdkIsRUFBRSxVQUFBd0IsTUFBQSxDQUFXdkIsQ0FBTSxNQUFBdUIsTUFBQSxDQUFJeEIsQ0FBRSxDQUFHLEVBQ3pEWCxDQUFpQixFQUFJTSxDQUNsQixDQUVELENBQ04sQ0FFVCxDQUFDLENBQUFvRCxPQUFBLFlBQUE5RCxRQUFBIn0=