"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireDefault(require("react")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_excluded=["field","value","validationMessage","touched","setTouched","hideField","updateForm","styledComponents","error","unsetError","setFocusClass","cssClass"],_default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.hideField,h=a.updateForm,i=a.styledComponents,j=a.error,k=a.unsetError,l=a.setFocusClass,m=a.cssClass,n=(0,_objectWithoutProperties2["default"])(a,_excluded),o=b.id,p=b.formId,q=b.type,r=b.label,s=b.placeholder,t=b.isRequired,u=b.maxLength,v=b.description,w=b.descriptionPlacement,x=b.labelPlacement,y=b.width,z=b.customName,A=i||!1,B=A.Textarea,C=void 0===B?"textarea":B,D=A.Label,E=void 0===D?"label":D,F=A.Box,G=void 0===F?"div":F,H=(n||{}).i18n;return _react["default"].createElement(G,{width:y,className:d&&e||j?"form-field form-field--text-area error ".concat(m):"form-field form-field--text-area ".concat(m),style:{display:g?"none":void 0}},_react["default"].createElement("div",{className:q},_react["default"].createElement(_InputLabel["default"],{formId:p,id:o,label:r,labelPlacement:x,isRequired:t,styledComponent:i}),"above"===w&&v&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:v}}),_react["default"].createElement(C,{id:"input_".concat(p,"_").concat(o),name:z||"input_".concat(o),type:q,value:c?c:"",placeholder:s,maxLength:u,required:t,onChange:function onChange(a){h(a,b),k(o)},onBlur:function onBlur(a){h(a,b),f(o),l(""!==c)},onFocus:function onFocus(){return l(!0)},"aria-describedby":"error_".concat(p,"_").concat(o),"aria-invalid":!!d&&e||!!j}),u&&0<u&&_react["default"].createElement("div",{className:"charleft"},H?"".concat(H.t("maxCharachters",{length:c.length||0,maxLength:u})):"".concat(c.length||0," of ").concat(u," max charachters")),"above"!==w&&v&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:v}}),(d&&e||j)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(p,"_").concat(o)},d||j)))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsImEiLCJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsImhpZGVGaWVsZCIsInVwZGF0ZUZvcm0iLCJzdHlsZWRDb21wb25lbnRzIiwiZXJyb3IiLCJ1bnNldEVycm9yIiwic2V0Rm9jdXNDbGFzcyIsImNzc0NsYXNzIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyIiwiX2V4Y2x1ZGVkIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImlzUmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJBIiwiQiIsIlRleHRhcmVhIiwiRCIsIkxhYmVsIiwiRiIsIkJveCIsImkxOG4iLCJfcmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiRyIsImNsYXNzTmFtZSIsImNvbmNhdCIsInN0eWxlIiwiZGlzcGxheSIsIl9JbnB1dExhYmVsIiwic3R5bGVkQ29tcG9uZW50IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJDIiwibmFtZSIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJldmVudCIsIm9uQmx1ciIsIm9uRm9jdXMiLCJcImFyaWEtZGVzY3JpYmVkYnlcIiIsIlwiYXJpYS1pbnZhbGlkXCIiLCJ0IiwibGVuZ3RoIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvVGV4dGFyZWEuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gXCIuLi9Gb3JtRWxlbWVudHMvSW5wdXRMYWJlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICB0b3VjaGVkLFxuICBzZXRUb3VjaGVkLFxuICBoaWRlRmllbGQsXG4gIHVwZGF0ZUZvcm0sXG4gIHN0eWxlZENvbXBvbmVudHMsXG4gIGVycm9yLFxuICB1bnNldEVycm9yLFxuICBzZXRGb2N1c0NsYXNzLFxuICBjc3NDbGFzcyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGZvcm1JZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgbWF4TGVuZ3RoLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgIGxhYmVsUGxhY2VtZW50LFxuICAgIHdpZHRoLFxuICAgIGN1c3RvbU5hbWUsXG4gIH0gPSBmaWVsZDtcblxuICBjb25zdCB7XG4gICAgVGV4dGFyZWEgPSBcInRleHRhcmVhXCIsXG4gICAgTGFiZWwgPSBcImxhYmVsXCIsXG4gICAgQm94ID0gXCJkaXZcIixcbiAgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG4gIGNvbnN0IHsgaTE4biB9ID0gcHJvcHMgfHwge307XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcbiAgICAgICAgICA/IGBmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXRleHQtYXJlYSBlcnJvciAke2Nzc0NsYXNzfWBcbiAgICAgICAgICA6IGBmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXRleHQtYXJlYSAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/IFwibm9uZVwiIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9PlxuICAgICAgICA8SW5wdXRMYWJlbFxuICAgICAgICAgIGZvcm1JZD17Zm9ybUlkfVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgICAgbGFiZWxQbGFjZW1lbnQ9e2xhYmVsUGxhY2VtZW50fVxuICAgICAgICAgIGlzUmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgc3R5bGVkQ29tcG9uZW50PXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAvPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09IFwiYWJvdmVcIiAmJiBkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXNjcmlwdGlvbiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH1cbiAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICB2YWx1ZT17IXZhbHVlID8gXCJcIiA6IHZhbHVlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cbiAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQmx1cj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgIHNldEZvY3VzQ2xhc3ModmFsdWUgIT09IFwiXCIpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0Rm9jdXNDbGFzcyh0cnVlKX1cbiAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9eyghIXZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8ICEhZXJyb3J9XG4gICAgICAgIC8+XG4gICAgICAgIHttYXhMZW5ndGggJiYgbWF4TGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFybGVmdFwiPlxuICAgICAgICAgICAge2kxOG5cbiAgICAgICAgICAgICAgPyBgJHtpMThuLnQoXCJtYXhDaGFyYWNodGVyc1wiLCB7XG4gICAgICAgICAgICAgICAgICBsZW5ndGg6IHZhbHVlLmxlbmd0aCB8fCAwLFxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gICAgICAgICAgICAgICAgfSl9YFxuICAgICAgICAgICAgICA6IGAke3ZhbHVlLmxlbmd0aCB8fCAwfSBvZiAke21heExlbmd0aH0gbWF4IGNoYXJhY2h0ZXJzYH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ICE9PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7KCh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvcikgJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlIHx8IGVycm9yfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdLCJtYXBwaW5ncyI6InVrQkFHZSxRQUFBQSxDQUFBQyxDQUFBLENBY1QsSUFiSixDQUFBQyxDQUFLLENBQUFELENBQUEsQ0FBTEMsS0FBSyxDQUNMQyxDQUFLLENBQUFGLENBQUEsQ0FBTEUsS0FBSyxDQUNMQyxDQUFpQixDQUFBSCxDQUFBLENBQWpCRyxpQkFBaUIsQ0FDakJDLENBQU8sQ0FBQUosQ0FBQSxDQUFQSSxPQUFPLENBQ1BDLENBQVUsQ0FBQUwsQ0FBQSxDQUFWSyxVQUFVLENBQ1ZDLENBQVMsQ0FBQU4sQ0FBQSxDQUFUTSxTQUFTLENBQ1RDLENBQVUsQ0FBQVAsQ0FBQSxDQUFWTyxVQUFVLENBQ1ZDLENBQWdCLENBQUFSLENBQUEsQ0FBaEJRLGdCQUFnQixDQUNoQkMsQ0FBSyxDQUFBVCxDQUFBLENBQUxTLEtBQUssQ0FDTEMsQ0FBVSxDQUFBVixDQUFBLENBQVZVLFVBQVUsQ0FDVkMsQ0FBYSxDQUFBWCxDQUFBLENBQWJXLGFBQWEsQ0FDYkMsQ0FBUSxDQUFBWixDQUFBLENBQVJZLFFBQVEsQ0FDTEMsQ0FBSyxJQUFBQyx5QkFBQSxhQUFBZCxDQUFBLENBQUFlLFNBQUEsRUFHTkMsQ0FBRSxDQVlBZixDQUFLLENBWlBlLEVBQUUsQ0FDRkMsQ0FBTSxDQVdKaEIsQ0FBSyxDQVhQZ0IsTUFBTSxDQUNOQyxDQUFJLENBVUZqQixDQUFLLENBVlBpQixJQUFJLENBQ0pDLENBQUssQ0FTSGxCLENBQUssQ0FUUGtCLEtBQUssQ0FDTEMsQ0FBVyxDQVFUbkIsQ0FBSyxDQVJQbUIsV0FBVyxDQUNYQyxDQUFVLENBT1JwQixDQUFLLENBUFBvQixVQUFVLENBQ1ZDLENBQVMsQ0FNUHJCLENBQUssQ0FOUHFCLFNBQVMsQ0FDVEMsQ0FB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