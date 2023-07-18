"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var postcodeApi=require("postcode-nl").promises,_default=function(a){function b(){return c.apply(this,arguments)}function c(){return c=_asyncToGenerator(regeneratorRuntime.mark(function a(b){var c,d;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(f=b.target?b.target.value.toUpperCase():null,c){a.next=8;break}return a.next=4,L(f)["catch"](function(){c=!1});case 4:d=a.sent,d&&(c=!0,l({target:{value:f},street:d.street,city:d.city.label},e)),a.next=9;break;case 8:c=!1;case 9:case"end":return a.stop();}},a)})),c.apply(this,arguments)}var d=a.formValues,e=a.field,f=a.value,g=a.validationMessage,h=a.touched,i=a.setTouched,j=a.setErrorMessages,k=a.hideField,l=a.updateForm,m=a.styledComponents,n=a.error,o=a.unsetError,p=a.setFocusClass,q=a.cssClass,r=a.apiKeys,s=_objectWithoutProperties(a,["formValues","field","value","validationMessage","touched","setTouched","setErrorMessages","hideField","updateForm","styledComponents","error","unsetError","setFocusClass","cssClass","apiKeys"]),t=e.id,u=e.formId,v=e.type,w=e.label,x=e.placeholder,y=e.isRequired,z=e.description,A=e.descriptionPlacement,B=e.labelPlacement,C=e.width,D=e.customName,E=m||!1,F=E.Input,G=void 0===F?"input":F,H=E.Label,I=void 0===H?"label":H,J=E.Box,K=void 0===J?"div":J,L=function(a){var b={returnRateLimit:!0,apiKey:r.postcode},c={postcode:a};return new Promise(function(a,d){postcodeApi.getAddresses(b,c).then(function(b){a(b.result._embedded.addresses[0])})["catch"](function(a){d(a)})})};return _react["default"].createElement(K,{width:C,className:g&&h||n?"form-field error ".concat(q):"form-field ".concat(q),style:{display:k?"none":void 0}},_react["default"].createElement("div",{className:v},_react["default"].createElement(_InputLabel["default"],{formId:u,id:t,label:w,labelPlacement:B,isRequired:y,styledComponent:m}),"above"===A&&z&&_react["default"].createElement("div",{className:"description"},z),_react["default"].createElement(G,{id:"input_".concat(u,"_").concat(t),name:D||"input_".concat(t),type:v,value:f?f:"",placeholder:x,maxLength:6,required:y,onChange:function onChange(a){l(a,e),o(t)},onBlur:function onBlur(a){l(a,e),b(a),i(t),p(""!==f)},onFocus:function onFocus(){return p(!0)},"aria-label":w,"aria-describedby":"error_".concat(u,"_").concat(t),"aria-invalid":!!g&&h||!!n}),"above"!==A&&z&&_react["default"].createElement("div",{className:"description"},z),(g&&h||n)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(u,"_").concat(t)},g||n)))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUG9zdGNvZGUuanN4Il0sIm5hbWVzIjpbInBvc3Rjb2RlQXBpIiwicmVxdWlyZSIsInByb21pc2VzIiwiZ2V0QWRkcmVzcyIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJ0b1VwcGVyQ2FzZSIsImhhc0FkZHJlc3MiLCJnZXRBZGRyZXNzQnlQb3N0YWxDb2RlIiwicmVzcG9uc2UiLCJ1cGRhdGVGb3JtIiwic3RyZWV0IiwiY2l0eSIsImxhYmVsIiwiZmllbGQiLCJmb3JtVmFsdWVzIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInNldEVycm9yTWVzc2FnZXMiLCJoaWRlRmllbGQiLCJzdHlsZWRDb21wb25lbnRzIiwiZXJyb3IiLCJ1bnNldEVycm9yIiwic2V0Rm9jdXNDbGFzcyIsImNzc0NsYXNzIiwiYXBpS2V5cyIsInByb3BzIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpc1JlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwiSW5wdXQiLCJMYWJlbCIsIkJveCIsInBvc3RhbENvZGUiLCJvcHRpb25zIiwicmV0dXJuUmF0ZUxpbWl0IiwiYXBpS2V5IiwicG9zdGNvZGUiLCJxdWVyeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0QWRkcmVzc2VzIiwidGhlbiIsInJlc29sdmVkIiwicmVzdWx0IiwiX2VtYmVkZGVkIiwiYWRkcmVzc2VzIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6IjZtQ0FJTUEsQ0FBQUEsV0FBVyxDQUFHQyxPQUFPLENBQUMsYUFBRCxDQUFQLENBQXVCQyxRLFVBRTVCLFdBaUJULFNBb0NXQyxDQUFBQSxDQXBDWCxrR0FvQ0osV0FDRUMsQ0FERiw0RkFHRUMsQ0FBSyxDQUFHRCxDQUFLLENBQUNFLE1BQU4sQ0FBZUYsQ0FBSyxD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Q0FuQmQsQ0FvQkUsbUNBQTJCZ0IsQ0FBM0IsYUFBcUNELENBQXJDLENBcEJGLENBcUJFLGVBQWUsQ0FBQyxDQUFDWixDQUFGLEVBQXVCQyxDQUF4QixFQUFvQyxDQUFDLENBQUNLLENBckJ0RCxFQVpGLENBbUM0QixPQUF6QixHQUFBWSxDQUFvQixFQUFnQkQsQ0FBcEMsRUFBbUQsdUNBQUssU0FBUyxDQUFDLGFBQWYsRUFBOEJBLENBQTlCLENBbkN0RCxDQW9DRyxDQUFFakIsQ0FBaUIsRUFBSUMsQ0FBdEIsRUFBa0NLLENBQW5DLEdBQ0Msd0NBQU0sU0FBUyxDQUFDLGVBQWhCLENBQWdDLEVBQUUsaUJBQVdPLENBQVgsYUFBcUJELENBQXJCLENBQWxDLEVBQ0daLENBQWlCLEVBQUlNLENBRHhCLENBckNKLENBVEYsQ0FxREgsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJy4uL0Zvcm1FbGVtZW50cy9JbnB1dExhYmVsJztcblxuY29uc3QgcG9zdGNvZGVBcGkgPSByZXF1aXJlKCdwb3N0Y29kZS1ubCcpLnByb21pc2VzO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmb3JtVmFsdWVzLFxuICBmaWVsZCxcbiAgdmFsdWUsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICB0b3VjaGVkLFxuICBzZXRUb3VjaGVkLFxuICBzZXRFcnJvck1lc3NhZ2VzLFxuICBoaWRlRmllbGQsXG4gIHVwZGF0ZUZvcm0sXG4gIHN0eWxlZENvbXBvbmVudHMsXG4gIGVycm9yLFxuICB1bnNldEVycm9yLFxuICBzZXRGb2N1c0NsYXNzLFxuICBjc3NDbGFzcyxcbiAgYXBpS2V5cyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGZvcm1JZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgd2lkdGgsXG4gICAgY3VzdG9tTmFtZSxcbiAgfSA9IGZpZWxkO1xuICBjb25zdCB7IElucHV0ID0gJ2lucHV0JywgTGFiZWwgPSAnbGFiZWwnLCBCb3ggPSAnZGl2JyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICBjb25zdCBnZXRBZGRyZXNzQnlQb3N0YWxDb2RlID0gKHBvc3RhbENvZGUpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgcmV0dXJuUmF0ZUxpbWl0OiB0cnVlLFxuICAgICAgYXBpS2V5OiBhcGlLZXlzLnBvc3Rjb2RlLFxuICAgIH07XG4gICAgY29uc3QgcXVlcnkgPSB7XG4gICAgICBwb3N0Y29kZTogcG9zdGFsQ29kZSxcbiAgICB9O1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcG9zdGNvZGVBcGlcbiAgICAgICAgLmdldEFkZHJlc3NlcyhvcHRpb25zLCBxdWVyeSlcbiAgICAgICAgLnRoZW4oKHJlc29sdmVkKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXNvbHZlZC5yZXN1bHQuX2VtYmVkZGVkLmFkZHJlc3Nlc1swXSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KSk7XG4gIH07XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0QWRkcmVzcyhcbiAgICBldmVudCxcbiAgKSB7XG4gICAgdmFsdWUgPSBldmVudC50YXJnZXQgPyBldmVudC50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKSA6IG51bGw7XG4gICAgbGV0IGhhc0FkZHJlc3M7XG4gICAgaWYgKCFoYXNBZGRyZXNzKSB7XG4gICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICByZXNwb25zZSA9IGF3YWl0IGdldEFkZHJlc3NCeVBvc3RhbENvZGUodmFsdWUpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgaGFzQWRkcmVzcyA9IGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICBoYXNBZGRyZXNzID0gdHJ1ZTtcbiAgICAgICAgdXBkYXRlRm9ybShcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RyZWV0OiByZXNwb25zZS5zdHJlZXQsXG4gICAgICAgICAgICBjaXR5OiByZXNwb25zZS5jaXR5LmxhYmVsLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmllbGQsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhc0FkZHJlc3MgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvclxuICAgICAgICAgID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gXG4gICAgICAgICAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/ICdub25lJyA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAgPElucHV0TGFiZWxcbiAgICAgICAgICBmb3JtSWQ9e2Zvcm1JZH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgIGxhYmVsUGxhY2VtZW50PXtsYWJlbFBsYWNlbWVudH1cbiAgICAgICAgICBpc1JlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgIHN0eWxlZENvbXBvbmVudD17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgLz5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfWB9XG4gICAgICAgICAgbmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgdmFsdWU9eyF2YWx1ZSA/ICcnIDogdmFsdWV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIG1heExlbmd0aD17Nn1cbiAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQmx1cj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICBnZXRBZGRyZXNzKGV2ZW50KTtcbiAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgc2V0Rm9jdXNDbGFzcyh2YWx1ZSAhPT0gJycpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0Rm9jdXNDbGFzcyh0cnVlKX1cbiAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9eyghIXZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8ICEhZXJyb3J9XG4gICAgICAgIC8+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCAhPT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2Pn1cbiAgICAgICAgeygodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3IpICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSB8fCBlcnJvcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXX0=