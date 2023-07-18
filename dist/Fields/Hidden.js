"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireDefault(require("react")),_queryString=_interopRequireDefault(require("query-string")),_excluded=["field","value","validationMessage","touched","setTouched","updateForm","cssClass"],_default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.updateForm,h=a.cssClass,i=(0,_objectWithoutProperties2["default"])(a,_excluded),j=b.id,k=b.type,l=b.isRequired,m=b.customName,n=b.formId,o=!1;if(b.allowsPrepopulate){var p=_queryString["default"].parse(location.search);o=p[b.inputName]}return _react["default"].createElement("div",{className:"form-field form-field--hidden ".concat(h)},_react["default"].createElement("input",{name:m||"input_".concat(j),type:k,value:o?o:c,required:l,onChange:function onChange(a){return g(a,b)},onBlur:function onBlur(a){g(a,b),f(j)},"aria-describedby":"error_".concat(n,"_").concat(j),"aria-invalid":!!d}),d&&e&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(n,"_").concat(j)},d))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsImEiLCJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInVwZGF0ZUZvcm0iLCJjc3NDbGFzcyIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiIsIl9leGNsdWRlZCIsImlkIiwidHlwZSIsImlzUmVxdWlyZWQiLCJjdXN0b21OYW1lIiwiZm9ybUlkIiwicHJlUG9wdWxhdGVkIiwiYWxsb3dzUHJlcG9wdWxhdGUiLCJxdWVyaWVzIiwicXVlcnlTdHJpbmciLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwiaW5wdXROYW1lIiwiX3JlYWN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNvbmNhdCIsIm5hbWUiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJvbkJsdXIiLCJcImFyaWEtZGVzY3JpYmVkYnlcIiIsIlwiYXJpYS1pbnZhbGlkXCIiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL0ZpZWxkcy9IaWRkZW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tIFwicXVlcnktc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIHVwZGF0ZUZvcm0sXG4gIGNzc0NsYXNzLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7IGlkLCB0eXBlLCBpc1JlcXVpcmVkLCBjdXN0b21OYW1lLCBmb3JtSWQgfSA9IGZpZWxkO1xuICBsZXQgcHJlUG9wdWxhdGVkID0gZmFsc2U7XG4gIGlmIChmaWVsZC5hbGxvd3NQcmVwb3B1bGF0ZSkge1xuICAgIGNvbnN0IHF1ZXJpZXMgPSBxdWVyeVN0cmluZy5wYXJzZShsb2NhdGlvbi5zZWFyY2gpO1xuICAgIHByZVBvcHVsYXRlZCA9IHF1ZXJpZXNbZmllbGQuaW5wdXROYW1lXTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1oaWRkZW4gJHtjc3NDbGFzc31gfT5cbiAgICAgIDxpbnB1dFxuICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfWB9XG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIHZhbHVlPXshcHJlUG9wdWxhdGVkID8gdmFsdWUgOiBwcmVQb3B1bGF0ZWR9XG4gICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCl9XG4gICAgICAgIG9uQmx1cj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICB9fVxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH1cbiAgICAgICAgYXJpYS1pbnZhbGlkPXshIXZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgLz5cbiAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkICYmIChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH0+XG4gICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICA8L3NwYW4+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJtYXBwaW5ncyI6InNmQUdlLFFBQUFBLENBQUFDLENBQUEsQ0FTVCxJQVJKLENBQUFDLENBQUssQ0FBQUQsQ0FBQSxDQUFMQyxLQUFLLENBQ0xDLENBQUssQ0FBQUYsQ0FBQSxDQUFMRSxLQUFLLENBQ0xDLENBQWlCLENBQUFILENBQUEsQ0FBakJHLGlCQUFpQixDQUNqQkMsQ0FBTyxDQUFBSixDQUFBLENBQVBJLE9BQU8sQ0FDUEMsQ0FBVSxDQUFBTCxDQUFBLENBQVZLLFVBQVUsQ0FDVkMsQ0FBVSxDQUFBTixDQUFBLENBQVZNLFVBQVUsQ0FDVkMsQ0FBUSxDQUFBUCxDQUFBLENBQVJPLFFBQVEsQ0FDTEMsQ0FBSyxJQUFBQyx5QkFBQSxhQUFBVCxDQUFBLENBQUFVLFNBQUEsRUFFQUMsQ0FBRSxDQUEyQ1YsQ0FBSyxDQUFsRFUsRUFBRSxDQUFFQyxDQUFJLENBQXFDWCxDQUFLLENBQTlDVyxJQUFJLENBQUVDLENBQVUsQ0FBeUJaLENBQUssQ0FBeENZLFVBQVUsQ0FBRUMsQ0FBVSxDQUFhYixDQUFLLENBQTVCYSxVQUFVLENBQUVDLENBQU0sQ0FBS2QsQ0FBSyxDQUFoQmMsTUFBTSxDQUM1Q0MsQ0FBWSxHQUFRLENBQ3hCLEdBQUlmLENBQUssQ0FBQ2dCLGlCQUFpQixDQUFFLENBQzNCLEdBQU0sQ0FBQUMsQ0FBTyxDQUFHQyx1QkFBVyxDQUFDQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLENBQ2xETixDQUFZLENBQUdFLENBQU8sQ0FBQ2pCLENBQUssQ0FBQ3NCLFNBQVMsQ0FDeEMsQ0FDQSxNQUNFLENBQUFDLE1BQUEsWUFBQUMsYUFBQSxRQUFLQyxTQUFTLGtDQUFBQyxNQUFBLENBQW1DcEIsQ0FBUSxDQUFHLEVBQzFEaUIsTUFBQSxZQUFBQyxhQUFBLFVBQ0VHLElBQUksQ0FBRWQsQ0FBVSxXQUFBYSxNQUFBLENBQWFoQixDQUFFLENBQUcsQ0FDbENDLElBQUksQ0FBRUEsQ0FBSyxDQUNYVixLQUFLLENBQUdjLENBQVksQ0FBV0EsQ0FBWSxDQUFwQmQsQ0FBcUIsQ0FDNUMyQixRQUFRLENBQUVoQixDQUFXLENBQ3JCaUIsUUFBUSxDQUFFLFNBQUFBLFNBQUNDLENBQUssUUFBSyxDQUFBekIsQ0FBVSxDQUFDeUIsQ0FBSyxDQUFFOUIsQ0FBSyxDQUFDLENBQUMsQ0FDOUMrQixNQUFNLENBQUUsU0FBQUEsT0FBQ0QsQ0FBSyxDQUFLLENBQ2pCekIsQ0FBVSxDQUFDeUIsQ0FBSyxDQUFFOUIsQ0FBSyxDQUFDLENBQ3hCSSxDQUFVLENBQUNNLENBQUUsQ0FDZixDQUFFLENBQ0ZzQixrQkFBQSxVQUFBTixNQUFBLENBQTJCWixDQUFNLE1BQUFZLE1BQUEsQ0FBSWhCLENBQUUsQ0FBRyxDQUMxQ3VCLGNBQUEsQ0FBYyxDQUFDLENBQUMvQixDQUFrQixDQUNuQyxDQUFDLENBQ0RBLENBQWlCLEVBQUlDLENBQU8sRUFDM0JvQixNQUFBLFlBQUFDLGFBQUEsU0FBTUMsU0FBUyxDQUFDLGVBQWUsQ0FBQ2YsRUFBRSxVQUFBZ0IsTUFBQSxDQUFXWixDQUFNLE1BQUFZLE1BQUEsQ0FBSWhCLENBQUUsQ0FBRyxFQUN6RFIsQ0FDRyxDQUVMLENBRVQsQ0FBQyxDQUFBZ0MsT0FBQSxZQUFBcEMsUUFBQSJ9