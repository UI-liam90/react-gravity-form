"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireWildcard(require("react")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_uuid=require("uuid"),_excluded=["field","value","validationMessage","touched","setTouched","hideField","updateForm","styledComponents","error","unsetError"];function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d["default"]=a,c&&c.set(a,d),d}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var _default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.hideField,h=a.updateForm,i=a.styledComponents,j=a.error,k=a.unsetError,l=(0,_objectWithoutProperties2["default"])(a,_excluded),m=b.id,n=b.formId,o=b.type,p=b.label,q=b.placeholder,r=b.isRequired,s=b.maxLength,t=b.description,u=b.descriptionPlacement,v=b.labelPlacement,w=b.width,x=b.customName,y=b.inputs,z=b.cssClass,A=b.passwordStrengthEnabled,B=b.minPasswordStrength,C=i||!1,D=C.Input,E=void 0===D?"input":D,F=C.Label,G=void 0===F?"label":F,H=C.Box,I=void 0===H?"div":H,J=(0,_react.useMemo)(function(){return(0,_uuid.v4)()},[]),K=(0,_react.useState)(y),L=(0,_slicedToArray2["default"])(K,2),M=L[0],N=L[1],O=(0,_react.useState)("blank"),P=(0,_slicedToArray2["default"])(O,2),Q=P[0],R=P[1],S=function(a,b){var c=_objectSpread({},M);c[b].cssClass=a?"filled":"",N(c)},T=function(a){var e,f,b=Math.LN2,c=Math.log,d=Math.pow,g=0;return 0>=a.length?"blank":4>a.length?"short":(a.match(/[0-9]/)&&(g+=10),a.match(/[a-z]/)&&(g+=26),a.match(/[A-Z]/)&&(g+=26),a.match(/[^a-zA-Z0-9]/)&&(g+=31),e=c(d(g,a.length)),f=e/b,40>f?"bad":56>f?"good":"strong")},U=function(a){var b=T(a);R(b)};return _react["default"].createElement(I,{width:w,className:d&&e||j?"form-field form-field--password error ".concat(z):"form-field form-field--password ".concat(z),style:{display:g?"none":void 0}},_react["default"].createElement("div",{className:o},_react["default"].createElement(_InputLabel["default"],{formId:n,id:m,label:p,labelPlacement:v,isRequired:r,styledComponent:i}),"above"===u&&t&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br />")}}),_react["default"].createElement("div",{className:"ginput_container ginput_container_password"},y&&y.length&&y.map(function(a,g){return!a.isHidden&&_react["default"].createElement("span",{key:"".concat(J,"_").concat(a.id,"_").concat(g),className:"".concat(1<y.length?"ginput_".concat(0===g?"left":"right"):"medim"," ").concat(M[g].cssClass?M[g].cssClass:"")},_react["default"].createElement(E,{id:"input_".concat(n,"_").concat(a.id,"_").concat(g),name:x||"input_".concat(m).concat(1===g?"_".concat(g+1):""),type:o,value:c&&c[g]&&c[g].val?c[g].val:"",placeholder:a.placeholder?a.placeholder:q,required:r,autoComplete:"off",onChange:function onChange(a){b.subId=g,h(a,b),k(m),A&&0===g&&U(a.target.value)},onBlur:function onBlur(a){b.subId=g,h(a,b),f(m),S(c&&c[g]&&c[g].val&&""!==c[g].val,g)},onFocus:function onFocus(){return S(!0,g)},"aria-label":p,"aria-describedby":"error_".concat(n,"_").concat(a.id,"_").concat(g),"aria-invalid":!!d&&e}),_react["default"].createElement("label",{htmlFor:"input_".concat(n,"_").concat(a.id,"_").concat(g)},a.placeholder||a.label))})),(d&&e||j)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(n,"_").concat(m),dangerouslySetInnerHTML:{__html:d||j}}),"above"!==u&&t&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br />")}}),!(d&&e||j)&&A&&_react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement("div",{id:"input_".concat(n,"_").concat(m,"_strength_indicator"),className:"gfield_password_strength ".concat(Q)},Q&&"blank"!==Q?Q:"Strength indicator"),_react["default"].createElement("input",{type:"hidden",className:"gform_hidden",id:"input_".concat(n,"_").concat(m,"_strength"),name:"input_".concat(m,"_strength"),value:Q}))))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsImEiLCJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsImhpZGVGaWVsZCIsInVwZGF0ZUZvcm0iLCJzdHlsZWRDb21wb25lbnRzIiwiZXJyb3IiLCJ1bnNldEVycm9yIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyIiwiX2V4Y2x1ZGVkIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImlzUmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJpbnB1dHMiLCJjc3NDbGFzcyIsInBhc3N3b3JkU3RyZW5ndGhFbmFibGVkIiwibWluUGFzc3dvcmRTdHJlbmd0aCIsIkMiLCJEIiwiSW5wdXQiLCJGIiwiTGFiZWwiLCJIIiwiQm94IiwiaW5wdXRJRCIsInVzZU1lbW8iLCJ2NCIsIksiLCJ1c2VTdGF0ZSIsIkwiLCJfc2xpY2VkVG9BcnJheTIiLCJwYXNzd29yZHMiLCJzZXRQYXNzd29yZHMiLCJPIiwiUCIsInBhc3N3b3JkU3RyZW5ndGgiLCJzZXRQYXNzd29yZFN0cmVuZ3RoIiwic2V0Rm9jdXNDbGFzcyIsImFjdGlvbiIsImkiLCJwYXNzIiwiX29iamVjdFNwcmVhZCIsImdmb3JtUGFzc3dvcmRTdHJlbmd0aCIsInBhc3N3b3JkMSIsIm5hdExvZyIsInNjb3JlIiwiYiIsIk1hdGgiLCJMTjIiLCJjIiwibG9nIiwiZCIsInBvdyIsInN5bWJvbFNpemUiLCJsZW5ndGgiLCJtYXRjaCIsInNldEdGUHdkU3RyZW5ndGgiLCJwYXNzd29yZCIsInJlc3VsdCIsIl9yZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJJIiwiY2xhc3NOYW1lIiwiY29uY2F0Iiwic3R5bGUiLCJkaXNwbGF5IiwiX0lucHV0TGFiZWwiLCJzdHlsZWRDb21wb25lbnQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInJlcGxhY2UiLCJtYXAiLCJpbnB1dCIsImlzSGlkZGVuIiwia2V5IiwiRSIsIm5hbWUiLCJ2YWwiLCJyZXF1aXJlZCIsImF1dG9Db21wbGV0ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJzdWJJZCIsInRhcmdldCIsIm9uQmx1ciIsIm9uRm9jdXMiLCJcImFyaWEtbGFiZWxcIiIsIlwiYXJpYS1kZXNjcmliZWRieVwiIiwiXCJhcmlhLWludmFsaWRcIiIsImh0bWxGb3IiLCJGcmFnbWVudCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvRmllbGRzL1Bhc3N3b3JkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gXCIuLi9Gb3JtRWxlbWVudHMvSW5wdXRMYWJlbFwiO1xuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICB0b3VjaGVkLFxuICBzZXRUb3VjaGVkLFxuICBoaWRlRmllbGQsXG4gIHVwZGF0ZUZvcm0sXG4gIHN0eWxlZENvbXBvbmVudHMsXG4gIGVycm9yLFxuICB1bnNldEVycm9yLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgZm9ybUlkLFxuICAgIHR5cGUsXG4gICAgbGFiZWwsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBtYXhMZW5ndGgsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgd2lkdGgsXG4gICAgY3VzdG9tTmFtZSxcbiAgICBpbnB1dHMsXG4gICAgY3NzQ2xhc3MsXG4gICAgcGFzc3dvcmRTdHJlbmd0aEVuYWJsZWQsXG4gICAgbWluUGFzc3dvcmRTdHJlbmd0aCxcbiAgfSA9IGZpZWxkO1xuXG4gIGNvbnN0IHtcbiAgICBJbnB1dCA9IFwiaW5wdXRcIixcbiAgICBMYWJlbCA9IFwibGFiZWxcIixcbiAgICBCb3ggPSBcImRpdlwiLFxuICB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICBjb25zdCBpbnB1dElEID0gdXNlTWVtbygoKSA9PiB2NCgpLCBbXSk7XG5cbiAgY29uc3QgW3Bhc3N3b3Jkcywgc2V0UGFzc3dvcmRzXSA9IHVzZVN0YXRlKGlucHV0cyk7XG4gIGNvbnN0IFtwYXNzd29yZFN0cmVuZ3RoLCBzZXRQYXNzd29yZFN0cmVuZ3RoXSA9IHVzZVN0YXRlKFwiYmxhbmtcIik7XG5cbiAgY29uc3Qgc2V0Rm9jdXNDbGFzcyA9IChhY3Rpb24sIGkpID0+IHtcbiAgICBjb25zdCBwYXNzID0geyAuLi5wYXNzd29yZHMgfTtcbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICBwYXNzW2ldLmNzc0NsYXNzID0gXCJmaWxsZWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFzc1tpXS5jc3NDbGFzcyA9IFwiXCI7XG4gICAgfVxuICAgIHNldFBhc3N3b3JkcyhwYXNzKTtcbiAgfTtcblxuICBjb25zdCBnZm9ybVBhc3N3b3JkU3RyZW5ndGggPSAocGFzc3dvcmQxKSA9PiB7XG4gICAgY29uc3Qgc2hvcnRQYXNzID0gMTtcbiAgICBjb25zdCBiYWRQYXNzID0gMjtcbiAgICBjb25zdCBnb29kUGFzcyA9IDM7XG4gICAgY29uc3Qgc3Ryb25nUGFzcyA9IDQ7XG4gICAgY29uc3QgbWlzbWF0Y2ggPSA1O1xuICAgIGxldCBzeW1ib2xTaXplID0gMDtcbiAgICBsZXQgbmF0TG9nO1xuICAgIGxldCBzY29yZTtcblxuICAgIGlmIChwYXNzd29yZDEubGVuZ3RoIDw9IDApIHJldHVybiBcImJsYW5rXCI7XG5cbiAgICAvLyBwYXNzd29yZCA8IDRcbiAgICBpZiAocGFzc3dvcmQxLmxlbmd0aCA8IDQpIHJldHVybiBcInNob3J0XCI7XG5cbiAgICBpZiAocGFzc3dvcmQxLm1hdGNoKC9bMC05XS8pKSBzeW1ib2xTaXplICs9IDEwO1xuICAgIGlmIChwYXNzd29yZDEubWF0Y2goL1thLXpdLykpIHN5bWJvbFNpemUgKz0gMjY7XG4gICAgaWYgKHBhc3N3b3JkMS5tYXRjaCgvW0EtWl0vKSkgc3ltYm9sU2l6ZSArPSAyNjtcbiAgICBpZiAocGFzc3dvcmQxLm1hdGNoKC9bXmEtekEtWjAtOV0vKSkgc3ltYm9sU2l6ZSArPSAzMTtcblxuICAgIG5hdExvZyA9IE1hdGgubG9nKE1hdGgucG93KHN5bWJvbFNpemUsIHBhc3N3b3JkMS5sZW5ndGgpKTtcbiAgICBzY29yZSA9IG5hdExvZyAvIE1hdGguTE4yO1xuXG4gICAgaWYgKHNjb3JlIDwgNDApIHJldHVybiBcImJhZFwiO1xuXG4gICAgaWYgKHNjb3JlIDwgNTYpIHJldHVybiBcImdvb2RcIjtcblxuICAgIHJldHVybiBcInN0cm9uZ1wiO1xuICB9O1xuXG4gIGNvbnN0IHNldEdGUHdkU3RyZW5ndGggPSAocGFzc3dvcmQpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBnZm9ybVBhc3N3b3JkU3RyZW5ndGgocGFzc3dvcmQpO1xuICAgIHNldFBhc3N3b3JkU3RyZW5ndGgocmVzdWx0KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvclxuICAgICAgICAgID8gYGZvcm0tZmllbGQgZm9ybS1maWVsZC0tcGFzc3dvcmQgZXJyb3IgJHtjc3NDbGFzc31gXG4gICAgICAgICAgOiBgZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1wYXNzd29yZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/IFwibm9uZVwiIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9PlxuICAgICAgICA8SW5wdXRMYWJlbFxuICAgICAgICAgIGZvcm1JZD17Zm9ybUlkfVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgICAgbGFiZWxQbGFjZW1lbnQ9e2xhYmVsUGxhY2VtZW50fVxuICAgICAgICAgIGlzUmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgc3R5bGVkQ29tcG9uZW50PXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAvPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09IFwiYWJvdmVcIiAmJiBkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBkZXNjcmlwdGlvbi5yZXBsYWNlKC9cXG4vZywgXCI8YnIgLz5cIiksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2lucHV0X2NvbnRhaW5lciBnaW5wdXRfY29udGFpbmVyX3Bhc3N3b3JkXCI+XG4gICAgICAgICAge2lucHV0cyAmJlxuICAgICAgICAgICAgaW5wdXRzLmxlbmd0aCAmJlxuICAgICAgICAgICAgaW5wdXRzLm1hcChcbiAgICAgICAgICAgICAgKGlucHV0LCBpKSA9PlxuICAgICAgICAgICAgICAgICFpbnB1dC5pc0hpZGRlbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2lucHV0SUR9XyR7aW5wdXQuaWR9XyR7aX1gfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0cy5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBnaW5wdXRfJHtpID09PSAwID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCJ9YFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm1lZGltXCJcbiAgICAgICAgICAgICAgICAgICAgfSAke3Bhc3N3b3Jkc1tpXS5jc3NDbGFzcyA/IHBhc3N3b3Jkc1tpXS5jc3NDbGFzcyA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpbnB1dC5pZH1fJHtpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfSR7aSA9PT0gMSA/IGBfJHtpICsgMX1gIDogXCJcIn1gXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgJiYgdmFsdWVbaV0gJiYgdmFsdWVbaV0udmFsID8gdmFsdWVbaV0udmFsIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA/IGlucHV0LnBsYWNlaG9sZGVyIDogcGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5zdWJJZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXNzd29yZFN0cmVuZ3RoRW5hYmxlZCAmJiBpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdGUHdkU3RyZW5ndGgoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5zdWJJZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZvY3VzQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbaV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtpXS52YWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtpXS52YWwgIT09IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRGb2N1c0NsYXNzKHRydWUsIGkpfVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpbnB1dC5pZH1fJHtpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXshIXZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aW5wdXQuaWR9XyR7aX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7aW5wdXQucGxhY2Vob2xkZXIgfHwgaW5wdXQubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIlxuICAgICAgICAgICAgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB2YWxpZGF0aW9uTWVzc2FnZSB8fCBlcnJvciB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCAhPT0gXCJhYm92ZVwiICYmIGRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IGRlc2NyaXB0aW9uLnJlcGxhY2UoL1xcbi9nLCBcIjxiciAvPlwiKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgeyEoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJlxuICAgICAgICAgIHBhc3N3b3JkU3RyZW5ndGhFbmFibGVkICYmIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9X3N0cmVuZ3RoX2luZGljYXRvcmB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ2ZpZWxkX3Bhc3N3b3JkX3N0cmVuZ3RoICR7cGFzc3dvcmRTdHJlbmd0aH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Bhc3N3b3JkU3RyZW5ndGggJiYgcGFzc3dvcmRTdHJlbmd0aCAhPT0gXCJibGFua1wiXG4gICAgICAgICAgICAgICAgICA/IHBhc3N3b3JkU3RyZW5ndGhcbiAgICAgICAgICAgICAgICAgIDogXCJTdHJlbmd0aCBpbmRpY2F0b3JcIn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdmb3JtX2hpZGRlblwiXG4gICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fc3RyZW5ndGhgfVxuICAgICAgICAgICAgICAgIG5hbWU9e2BpbnB1dF8ke2lkfV9zdHJlbmd0aGB9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkU3RyZW5ndGh9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXSwibWFwcGluZ3MiOiJ5akVBSWUsUUFBQUEsQ0FBQUMsQ0FBQSxDQVlULElB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