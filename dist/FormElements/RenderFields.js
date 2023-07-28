"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireWildcard(require("react")),_RenderField=_interopRequireDefault(require("./RenderField")),_uuid=require("uuid"),_excluded=["fields","formValues","updateForm","submitFailed","submitSuccess","touched","setTouched","setErrorMessages","pagination","activePage","prevStep","nextStep","isNextDisabled","checkConditionalLogic","saveStateToHtmlField","enableHoneypot","styledComponents","customComponents","unsetError","errors","dropzoneText","pageClicked","language","apiKeys"];function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d["default"]=a,c&&c.set(a,d),d}var divideFieldsIntoPages=function(a,b){for(var c,d=b.map(function(){return[]}),e=0;e<a.length;e++)c=d[a[e].pageNumber],d[a[e].pageNumber-1]&&("page"===a[e].type?d[a[e].pageNumber-2].push(a[e]):d[a[e].pageNumber-1].push(a[e]));return d},getMaxFieldId=function(a){for(var b=0,c=0;c<a.length;c++)parseInt(a[c].id)>b&&(b=parseInt(a[c].id));return b+1},fieldTypes=["checkbox","email","hidden","html","number","phone","radio","select","multiselect","text","textarea","website","page","date","fileupload","consent","password","section","scustom","name","address","buckarooideal","postcode","captcha"],honeyPotLables=["Name","Email","Phone","Comments"],honeypotLabel=honeyPotLables[Math.floor(Math.random()*Math.floor(4))],_default=function(a){function b(a,b){return _react["default"].createElement(_RenderField["default"],(0,_extends2["default"])({key:(0,_uuid.v4)(),field:a,formValues:d,submitFailed:f,setTouched:i,setErrorMessages:j,submitSuccess:g,updateForm:e,touched:h,pages:k&&k.pages.length,prevStep:m,nextStep:n,isNextDisabled:o,checkConditionalLogic:p,saveStateToHtmlField:q,styledComponents:s,customComponents:t,error:!!(v&&v[a.id])&&v[a.id],unsetError:u,dropzoneText:w,language:y,apiKeys:z,fields:b,errors:v},A))}var c=a.fields,d=a.formValues,e=a.updateForm,f=a.submitFailed,g=a.submitSuccess,h=a.touched,i=a.setTouched,j=a.setErrorMessages,k=a.pagination,l=a.activePage,m=a.prevStep,n=a.nextStep,o=a.isNextDisabled,p=a.checkConditionalLogic,q=a.saveStateToHtmlField,r=a.enableHoneypot,s=a.styledComponents,t=a.customComponents,u=a.unsetError,v=a.errors,w=a.dropzoneText,x=a.pageClicked,y=a.language,z=a.apiKeys,A=(0,_objectWithoutProperties2["default"])(a,_excluded),B=k?divideFieldsIntoPages(c,k.pages):void 0,C=getMaxFieldId(c),D=(0,_react.useState)(""),E=(0,_slicedToArray2["default"])(D,2),F=E[0],G=E[1],H=(0,_react.useRef)();(0,_react.useEffect)(function(){H.current=l});var I=H.current;return _react["default"].createElement("div",{className:"form-fields".concat(k&&1<k.pages.length?" hasPages ".concat(x?"":" noPageClicked"):"")},k&&1<k.pages.length?k.pages.map(function(a,d){return _react["default"].createElement("div",{className:"page".concat(l===d+1?" active":"").concat(I&&d===I&&l!==d+1&&I!==l?" prevStep":""),key:(0,_uuid.v4)()},a&&_react["default"].createElement("div",{className:"gf_step"},_react["default"].createElement("span",null,a)),B[d].map(function(a){return fieldTypes.includes(a.type)&&b(a,c)}))}):c.map(function(a){return fieldTypes.includes(a.type)&&b(a,c)}),r&&_react["default"].createElement("div",{className:"form-field gform_validation_container"},_react["default"].createElement("label",{htmlFor:"input_".concat(C),className:"gf-label "},honeypotLabel),_react["default"].createElement("input",{type:"text",name:"input_".concat(C),id:"input_".concat(C),value:F,onChange:function onChange(a){return G(a.target.value)},autoComplete:"off"})))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkaXZpZGVGaWVsZHNJbnRvUGFnZXMiLCJmaWVsZHMiLCJwYWdlcyIsImFyciIsInRtcEZpZWxkcyIsIm1hcCIsImkiLCJsZW5ndGgiLCJwYWdlTnVtYmVyIiwidHlwZSIsInB1c2giLCJnZXRNYXhGaWVsZElkIiwibWF4IiwicGFyc2VJbnQiLCJpZCIsImZpZWxkVHlwZXMiLCJob25leVBvdExhYmxlcyIsImhvbmV5cG90TGFiZWwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJfZGVmYXVsdCIsInByb3BzIiwicmVuZGVyRmlsZWQiLCJmaWVsZCIsIl9yZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJfUmVuZGVyRmllbGQiLCJfZXh0ZW5kczIiLCJrZXkiLCJ2NCIsImZvcm1WYWx1ZXMiLCJzdWJtaXRGYWlsZWQiLCJzZXRUb3VjaGVkIiwic2V0RXJyb3JNZXNzYWdlcyIsInN1Ym1pdFN1Y2Nlc3MiLCJ1cGRhdGVGb3JtIiwidG91Y2hlZCIsInBhZ2luYXRpb24iLCJwcmV2U3RlcCIsIm5leHRTdGVwIiwiaXNOZXh0RGlzYWJsZWQiLCJjaGVja0NvbmRpdGlvbmFsTG9naWMiLCJzYXZlU3RhdGVUb0h0bWxGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJjdXN0b21Db21wb25lbnRzIiwiZXJyb3IiLCJlcnJvcnMiLCJ1bnNldEVycm9yIiwiZHJvcHpvbmVUZXh0IiwibGFuZ3VhZ2UiLCJhcGlLZXlzIiwicmVzdCIsImFjdGl2ZVBhZ2UiLCJlbmFibGVIb25leXBvdCIsInBhZ2VDbGlja2VkIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiIsIl9leGNsdWRlZCIsImRpdmlkZWRGaWVsZHMiLCJtYXhJRCIsIkQiLCJ1c2VTdGF0ZSIsIkUiLCJfc2xpY2VkVG9BcnJheTIiLCJob25leXBvdFZhbHVlIiwic2V0SG9uZXlwb3RWYWx1ZSIsInByZXZTdGVwdFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJwcmV2Q291bnQiLCJjbGFzc05hbWUiLCJjb25jYXQiLCJwYWdlIiwiaW5kZXgiLCJpbmNsdWRlcyIsImh0bWxGb3IiLCJuYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJhdXRvQ29tcGxldGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL0Zvcm1FbGVtZW50cy9SZW5kZXJGaWVsZHMuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZW5kZXJGaWVsZCBmcm9tIFwiLi9SZW5kZXJGaWVsZFwiO1xuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5jb25zdCBkaXZpZGVGaWVsZHNJbnRvUGFnZXMgPSAoZmllbGRzLCBwYWdlcykgPT4ge1xuICBjb25zdCB0bXBGaWVsZHMgPSBwYWdlcy5tYXAoKGl0ZW0pID0+IFtdKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGFyciA9IHRtcEZpZWxkc1tmaWVsZHNbaV0ucGFnZU51bWJlcl07XG4gICAgaWYgKHRtcEZpZWxkc1tmaWVsZHNbaV0ucGFnZU51bWJlciAtIDFdKSB7XG4gICAgICAvLyBtb3ZlIHBhZ2UgZmllbGQgdG8gdGhlIGZpcnN0IGdyb3VwXG4gICAgICBpZiAoZmllbGRzW2ldLnR5cGUgPT09IFwicGFnZVwiKSB7XG4gICAgICAgIHRtcEZpZWxkc1tmaWVsZHNbaV0ucGFnZU51bWJlciAtIDJdLnB1c2goZmllbGRzW2ldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRtcEZpZWxkc1tmaWVsZHNbaV0ucGFnZU51bWJlciAtIDFdLnB1c2goZmllbGRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRtcEZpZWxkcztcbn07XG5cbmNvbnN0IGdldE1heEZpZWxkSWQgPSAoZmllbGRzKSA9PiB7XG4gIGxldCBtYXggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwYXJzZUludChmaWVsZHNbaV0uaWQpID4gbWF4KSB7XG4gICAgICBtYXggPSBwYXJzZUludChmaWVsZHNbaV0uaWQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWF4ICsgMTtcbn07XG5cbmNvbnN0IGZpZWxkVHlwZXMgPSBbXG4gIFwiY2hlY2tib3hcIixcbiAgXCJlbWFpbFwiLFxuICBcImhpZGRlblwiLFxuICBcImh0bWxcIixcbiAgXCJudW1iZXJcIixcbiAgXCJwaG9uZVwiLFxuICBcInJhZGlvXCIsXG4gIFwic2VsZWN0XCIsXG4gIFwibXVsdGlzZWxlY3RcIixcbiAgXCJ0ZXh0XCIsXG4gIFwidGV4dGFyZWFcIixcbiAgXCJ3ZWJzaXRlXCIsXG4gIFwicGFnZVwiLFxuICBcImRhdGVcIixcbiAgXCJmaWxldXBsb2FkXCIsXG4gIFwiY29uc2VudFwiLFxuICBcInBhc3N3b3JkXCIsXG4gIFwic2VjdGlvblwiLFxuICBcInNjdXN0b21cIixcbiAgXCJuYW1lXCIsXG4gIFwiYWRkcmVzc1wiLFxuICBcImJ1Y2thcm9vaWRlYWxcIixcbiAgXCJwb3N0Y29kZVwiLFxuICBcImNhcHRjaGFcIixcbl07XG5cbmNvbnN0IGhvbmV5UG90TGFibGVzID0gW1wiTmFtZVwiLCBcIkVtYWlsXCIsIFwiUGhvbmVcIiwgXCJDb21tZW50c1wiXTtcbmNvbnN0IGhvbmV5cG90TGFiZWwgPSBob25leVBvdExhYmxlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDQpKV07XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgZmllbGRzLFxuICAgIGZvcm1WYWx1ZXMsXG4gICAgdXBkYXRlRm9ybSxcbiAgICBzdWJtaXRGYWlsZWQsXG4gICAgc3VibWl0U3VjY2VzcyxcbiAgICB0b3VjaGVkLFxuICAgIHNldFRvdWNoZWQsXG4gICAgc2V0RXJyb3JNZXNzYWdlcyxcbiAgICBwYWdpbmF0aW9uLFxuICAgIGFjdGl2ZVBhZ2UsXG4gICAgcHJldlN0ZXAsXG4gICAgbmV4dFN0ZXAsXG4gICAgaXNOZXh0RGlzYWJsZWQsXG4gICAgY2hlY2tDb25kaXRpb25hbExvZ2ljLFxuICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkLFxuICAgIGVuYWJsZUhvbmV5cG90LFxuICAgIHN0eWxlZENvbXBvbmVudHMsXG4gICAgY3VzdG9tQ29tcG9uZW50cyxcbiAgICB1bnNldEVycm9yLFxuICAgIGVycm9ycyxcbiAgICBkcm9wem9uZVRleHQsXG4gICAgcGFnZUNsaWNrZWQsXG4gICAgbGFuZ3VhZ2UsXG4gICAgYXBpS2V5cyxcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wcztcblxuICAvLyBnZXQgcGFnZSBpbmRleGVzXG4gIGNvbnN0IGRpdmlkZWRGaWVsZHMgPSBwYWdpbmF0aW9uXG4gICAgPyBkaXZpZGVGaWVsZHNJbnRvUGFnZXMoZmllbGRzLCBwYWdpbmF0aW9uLnBhZ2VzKVxuICAgIDogdW5kZWZpbmVkO1xuICBjb25zdCBtYXhJRCA9IGdldE1heEZpZWxkSWQoZmllbGRzKTtcbiAgY29uc3QgW2hvbmV5cG90VmFsdWUsIHNldEhvbmV5cG90VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgcHJldlN0ZXB0UmVmID0gdXNlUmVmKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJldlN0ZXB0UmVmLmN1cnJlbnQgPSBhY3RpdmVQYWdlO1xuICB9KTtcbiAgY29uc3QgcHJldkNvdW50ID0gcHJldlN0ZXB0UmVmLmN1cnJlbnQ7XG5cbiAgZnVuY3Rpb24gcmVuZGVyRmlsZWQoZmllbGQsIGZpZWxkcykge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVuZGVyRmllbGRcbiAgICAgICAga2V5PXt2NCgpfVxuICAgICAgICBmaWVsZD17ZmllbGR9XG4gICAgICAgIGZvcm1WYWx1ZXM9e2Zvcm1WYWx1ZXN9XG4gICAgICAgIHN1Ym1pdEZhaWxlZD17c3VibWl0RmFpbGVkfVxuICAgICAgICBzZXRUb3VjaGVkPXtzZXRUb3VjaGVkfVxuICAgICAgICBzZXRFcnJvck1lc3NhZ2VzPXtzZXRFcnJvck1lc3NhZ2VzfVxuICAgICAgICBzdWJtaXRTdWNjZXNzPXtzdWJtaXRTdWNjZXNzfVxuICAgICAgICB1cGRhdGVGb3JtPXt1cGRhdGVGb3JtfVxuICAgICAgICB0b3VjaGVkPXt0b3VjaGVkfVxuICAgICAgICBwYWdlcz17cGFnaW5hdGlvbiAmJiBwYWdpbmF0aW9uLnBhZ2VzLmxlbmd0aH1cbiAgICAgICAgcHJldlN0ZXA9e3ByZXZTdGVwfVxuICAgICAgICBuZXh0U3RlcD17bmV4dFN0ZXB9XG4gICAgICAgIGlzTmV4dERpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgY2hlY2tDb25kaXRpb25hbExvZ2ljPXtjaGVja0NvbmRpdGlvbmFsTG9naWN9XG4gICAgICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkPXtzYXZlU3RhdGVUb0h0bWxGaWVsZH1cbiAgICAgICAgc3R5bGVkQ29tcG9uZW50cz17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgY3VzdG9tQ29tcG9uZW50cz17Y3VzdG9tQ29tcG9uZW50c31cbiAgICAgICAgZXJyb3I9e2Vycm9ycyAmJiBlcnJvcnNbZmllbGQuaWRdID8gZXJyb3JzW2ZpZWxkLmlkXSA6IGZhbHNlfVxuICAgICAgICB1bnNldEVycm9yPXt1bnNldEVycm9yfVxuICAgICAgICBkcm9wem9uZVRleHQ9e2Ryb3B6b25lVGV4dH1cbiAgICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlfVxuICAgICAgICBhcGlLZXlzPXthcGlLZXlzfVxuICAgICAgICBmaWVsZHM9e2ZpZWxkc31cbiAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Bmb3JtLWZpZWxkcyR7XG4gICAgICAgIHBhZ2luYXRpb24gJiYgcGFnaW5hdGlvbi5wYWdlcy5sZW5ndGggPiAxXG4gICAgICAgICAgPyBgIGhhc1BhZ2VzICR7IXBhZ2VDbGlja2VkID8gXCIgbm9QYWdlQ2xpY2tlZFwiIDogXCJcIn1gXG4gICAgICAgICAgOiBcIlwiXG4gICAgICB9YH1cbiAgICA+XG4gICAgICB7cGFnaW5hdGlvbiAmJiBwYWdpbmF0aW9uLnBhZ2VzLmxlbmd0aCA+IDFcbiAgICAgICAgPyBwYWdpbmF0aW9uLnBhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcGFnZSR7YWN0aXZlUGFnZSA9PT0gaW5kZXggKyAxID8gXCIgYWN0aXZlXCIgOiBcIlwifSR7XG4gICAgICAgICAgICAgICAgcHJldkNvdW50ICYmXG4gICAgICAgICAgICAgICAgaW5kZXggPT09IHByZXZDb3VudCAmJlxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgIT09IGluZGV4ICsgMSAmJlxuICAgICAgICAgICAgICAgIHByZXZDb3VudCAhPT0gYWN0aXZlUGFnZVxuICAgICAgICAgICAgICAgICAgPyBcIiBwcmV2U3RlcFwiXG4gICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIGtleT17djQoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3BhZ2UgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2Zfc3RlcFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3BhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7ZGl2aWRlZEZpZWxkc1tpbmRleF0ubWFwKFxuICAgICAgICAgICAgICAgIChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZXMuaW5jbHVkZXMoZmllbGQudHlwZSkgJiYgcmVuZGVyRmlsZWQoZmllbGQsIGZpZWxkcylcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpXG4gICAgICAgIDogZmllbGRzLm1hcChcbiAgICAgICAgICAgIChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgZmllbGRUeXBlcy5pbmNsdWRlcyhmaWVsZC50eXBlKSAmJiByZW5kZXJGaWxlZChmaWVsZCwgZmllbGRzKVxuICAgICAgICAgICl9XG4gICAgICB7ZW5hYmxlSG9uZXlwb3QgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGQgZ2Zvcm1fdmFsaWRhdGlvbl9jb250YWluZXJcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGlucHV0XyR7bWF4SUR9YH0gY2xhc3NOYW1lPVwiZ2YtbGFiZWwgXCI+XG4gICAgICAgICAgICB7aG9uZXlwb3RMYWJlbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT17YGlucHV0XyR7bWF4SUR9YH1cbiAgICAgICAgICAgIGlkPXtgaW5wdXRfJHttYXhJRH1gfVxuICAgICAgICAgICAgdmFsdWU9e2hvbmV5cG90VmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEhvbmV5cG90VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm1hcHBpbmdzIjoia29EQUlNLENBQUFBLHFCQUFxQixDQUFHLFFBQUFBLENBQUNDLENBQU0sQ0FBRUMsQ0FBSyxDQUFLLENBRy9DLE9BQ1EsQ0FBQUMsQ0FBRyxDQUhMQyxDQUFTLENBQUdGLENBQUssQ0FBQ0csR0FBRyxDQUFDLGlCQUFVLEVBQUUsRUFBQyxDQUVoQ0MsQ0FBQyxDQUFHLENBQUMsQ0FBRUEsQ0FBQyxDQUFHTCxDQUFNLENBQUNNLE1BQU0sQ0FBRUQsQ0FBQyxFQUFFLENBQzlCSCxDQUFHLENBQUdDLENBQVMsQ0FBQ0gsQ0FBTSxDQUFDSyxDQUFDLENBQUMsQ0FBQ0UsVUFBVSxDQUFDLENBQ3ZDSixDQUFTLENBQUNILENBQU0sQ0FBQ0ssQ0FBQyxDQUFDLENBQUNFLFVBQVUsQ0FBRyxDQUFDLENBQUMsR0FFZCxNQUFNLEdBQXpCUCxDQUFNLENBQUNLLENBQUMsQ0FBQyxDQUFDRyxJQUFlLENBQzNCTCxDQUFTLENBQUNILENBQU0sQ0FBQ0ssQ0FBQyxDQUFDLENBQUNFLFVBQVUsQ0FBRyxDQUFDLENBQUMsQ0FBQ0UsSUFBSSxDQUFDVCxDQUFNLENBQUNLLENBQUMsQ0FBQyxDQUFDLENBRW5ERixDQUFTLENBQUNILENBQU0sQ0FBQ0ssQ0FBQyxDQUFDLENBQUNFLFVBQVUsQ0FBRyxDQUFDLENBQUMsQ0FBQ0UsSUFBSSxDQUFDVCxDQUFNLENBQUNLLENBQUMsQ0FBQyxDQUFDLEVBSXpELE1BQU8sQ0FBQUYsQ0FDVCxDQUFDLENBRUtPLGFBQWEsQ0FBRyxRQUFBQSxDQUFDVixDQUFNLENBQUssQ0FFaEMsT0FESSxDQUFBVyxDQUFHLENBQUcsQ0FBQyxDQUNGTixDQUFDLENBQUcsQ0FBQyxDQUFFQSxDQUFDLENBQUdMLENBQU0sQ0FBQ00sTUFBTSxDQUFFRCxDQUFDLEVBQUUsQ0FDaENPLFFBQVEsQ0FBQ1osQ0FBTSxDQUFDSyxDQUFDLENBQUMsQ0FBQ1EsRUFBRSxDQUFDLENBQUdGLENBQUcsR0FDOUJBLENBQUcsQ0FBR0MsUUFBUSxDQUFDWixDQUFNLENBQUNLLENBQUMsQ0FBQyxDQUFDUSxFQUFFLENBQUMsRUFHaEMsTUFBTyxDQUFBRixDQUFHLENBQUcsQ0FDZixDQUFDLENBRUtHLFVBQVUsQ0FBRyxDQUNqQixVQUFVLENBQ1YsT0FBTyxDQUNQLFFBQVEsQ0FDUixNQUFNLENBQ04sUUFBUSxDQUNSLE9BQU8sQ0FDUCxPQUFPLENBQ1AsUUFBUSxDQUNSLGFBQWEsQ0FDYixNQUFNLENBQ04sVUFBVSxDQUNWLFNBQVMsQ0FDVCxNQUFNLENBQ04sTUFBTSxDQUNOLFlBQVksQ0FDWixTQUFTLENBQ1QsVUFBVSxDQUNWLFNBQVMsQ0FDVCxTQUFTLENBQ1QsTUFBTSxDQUNOLFNBQVMsQ0FDVCxlQUFlLENBQ2YsVUFBVSxDQUNWLFNBQVMsQ0FDVixDQUVLQyxjQUFjLENBQUcsQ0FBQyxNQUFNLENBQUUsT0FBTyxDQUFFLE9BQU8sQ0FBRSxVQUFVLENBQUMsQ0FDdkRDLGFBQWEsQ0FBR0QsY0FBYyxDQUFDRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFHRixJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUFFLFFBQUEsQ0FFaEUsUUFBQUEsQ0FBQ0MsQ0FBSyxDQUFLLENBMEN4QixRQUFTLENBQUFDLENBQVdBLENBQUNDLENBQUssQ0FBRXZCLENBQU0sQ0FBRSxDQUNsQyxNQUNFLENBQUF3QixNQUFBLFlBQUFDLGFBQUEsQ0FBQ0MsWUFBQSxXQUFXLElBQUFDLFNBQUEsY0FDVkMsR0FBRyxDQUFFLEdBQUFDLFFBQUUsRUFBQyxDQUFFLENBQ1ZOLEtBQUssQ0FBRUEsQ0FBTSxDQUNiTyxVQUFVLENBQUVBLENBQVcsQ0FDdkJDLFlBQVksQ0FBRUEsQ0FBYSxDQUMzQkMsVUFBVSxDQUFFQSxDQUFXLENBQ3ZCQyxnQkFBZ0IsQ0FBRUEsQ0FBaUIsQ0FDbkNDLGFBQWEsQ0FBRUEsQ0FBYyxDQUM3QkMsVUFBVSxDQUFFQSxDQUFXLENBQ3ZCQyxPQUFPLENBQUVBLENBQVEsQ0FDakJuQyxLQUFLLENBQUVvQyxDQUFVLEVBQUlBLENBQVUsQ0FBQ3BDLEtBQUssQ0FBQ0ssTUFBTyxDQUM3Q2dDLFFBQVEsQ0FBRUEsQ0FBUyxDQUNuQkMsUUFBUSxDQUFFQSxDQUFTLENBQ25CQyxjQUFjLENBQUVBLENBQWUsQ0FDL0JDLHFCQUFxQixDQUFFQSxDQUFzQixDQUM3Q0Msb0JBQW9CLENBQUVBLENBQXFCLENBQzNDQyxnQkFBZ0IsQ0FBRUEsQ0FBaUIsQ0FDbkNDLGdCQUFnQixDQUFFQSxDQUFpQixDQUNuQ0MsS0FBSyxJQUFFQyxDQUFNLEVBQUlBLENBQU0sQ0FBQ3ZCLENBQUssQ0FBQ1YsRUFBRSxDQUFDLEdBQUdpQyxDQUFNLENBQUN2QixDQUFLLENBQUNWLEVBQUUsQ0FBVSxDQUM3RGtDLFVBQVUsQ0FBRUEsQ0FBVyxDQUN2QkMsWUFBWSxDQUFFQSxDQUFhLENBQzNCQyxRQUFRLENBQUVBLENBQVMsQ0FDbkJDLE9BQU8sQ0FBRUEsQ0FBUSxDQUNqQmxELE1BQU0sQ0FBRUEsQ0FBTyxDQUNmOEMsTUFBTSxDQUFFQSxDQUFPLEVBQ1hLLENBQUksQ0FDVCxDQUVMLENBQUMsR0F0RUMsQ0FBQW5ELENBQU0sQ0F5QkpxQixDQUFLLENBekJQckIsTUFBTSxDQUNOOEIsQ0FBVSxDQXdCUlQsQ0FBSyxDQXhCUFMsVUFBVSxDQUNWSyxDQUFVLENBdUJSZCxDQUFLLENBdkJQYyxVQUFVLENBQ1ZKLENBQVksQ0FzQlZWLENBQUssQ0F0QlBVLFlBQVksQ0FDWkcsQ0FBYSxDQXFCWGIsQ0FBSyxDQXJCUGEsYUFBYSxDQUNiRSxDQUFPLENBb0JMZixDQUFLLENBcEJQZSxPQUFPLENBQ1BKLENBQVUsQ0FtQlJYLENBQUssQ0FuQlBXLFVBQVUsQ0FDVkMsQ0FBZ0IsQ0FrQmRaLENBQUssQ0FsQlBZLGdCQUFnQixDQUNoQkksQ0FBVSxDQWlCUmhCLENBQUssQ0FqQlBnQixVQUFVLENBQ1ZlLENBQVUsQ0FnQlIvQixDQUFLLENBaEJQK0IsVUFBVSxDQUNWZCxDQUFRLENBZU5qQixDQUFLLENBZlBpQixRQUFRLENBQ1JDLENBQVEsQ0FjTmxCLENBQUssQ0FkUGtCLFFBQVEsQ0FDUkMsQ0FBYyxDQWFabkIsQ0FBSyxDQWJQbUIsY0FBYyxDQUNkQyxDQUFxQixDQVluQnBCLENBQUssQ0FaUG9CLHFCQUFxQixDQUNyQkMsQ0FBb0IsQ0FXbEJyQixDQUFLLENBWFBxQixvQkFBb0IsQ0FDcEJXLENBQWMsQ0FVWmhDLENBQUssQ0FWUGdDLGNBQWMsQ0FDZFYsQ0FBZ0IsQ0FTZHRCLENBQUssQ0FUUHNCLGdCQUFnQixDQUNoQkMsQ0FBZ0IsQ0FRZHZCLENBQUssQ0FSUHVCLGdCQUFnQixDQUNoQkcsQ0FBVSxDQU9SMUIsQ0FBSyxDQVBQMEIsVUFBVSxDQUNWRCxDQUFNLENBTUp6QixDQUFLLENBTlB5QixNQUFNLENBQ05FLENBQVksQ0FLVjNCLENBQUssQ0FMUDJCLFlBQVksQ0FDWk0sQ0FBVyxDQUlUakMsQ0FBSyxDQUpQaUMsV0FBVyxDQUNYTCxDQUFRLENBR041QixDQUFLLENBSFA0QixRQUFRLENBQ1JDLENBQU8sQ0FFTDdCLENBQUssQ0FGUDZCLE9BQU8sQ0FDSkMsQ0FBSSxJQUFBSSx5QkFBQSxhQUNMbEMsQ0FBSyxDQUFBbUMsU0FBQSxFQUdIQyxDQUFhLENBQUdwQixDQUFVLENBQzVCdEMscUJBQXFCLENBQUNDLENBQU0sQ0FBRXFDLENBQVUsQ0FBQ3BDLEtBQUssQ0FBQyxPQUN0QyxDQUNQeUQsQ0FBSyxDQUFHaEQsYUFBYSxDQUFDVixDQUFNLENBQUMsQ0FBQTJELENBQUEsQ0FDTyxHQUFBQyxlQUFRLEVBQUMsRUFBRSxDQUFDLENBQUFDLENBQUEsSUFBQUMsZUFBQSxhQUFBSCxDQUFBLElBQS9DSSxDQUFhLENBQUFGLENBQUEsSUFBRUcsQ0FBZ0IsQ0FBQUgsQ0FBQSxJQUVoQ0ksQ0FBWSxDQUFHLEdBQUFDLGFBQU0sRUFBQyxDQUFDLENBQzdCLEdBQUFDLGdCQUFTLEVBQUMsVUFBTSxDQUNkRixDQUFZLENBQUNHLE9BQU8sQ0FBR2hCLENBQ3pCLENBQUMsQ0FBQyxDQUNGLEdBQU0sQ0FBQWlCLENBQVMsQ0FBR0osQ0FBWSxDQUFDRyxPQUFPLENBa0N0QyxNQUNFLENBQUE1QyxNQUFBLFlBQUFDLGFBQUEsUUFDRTZDLFNBQVMsZUFBQUMsTUFBQSxDQUNQbEMsQ0FBVSxFQUE4QixDQUFDLENBQTNCQSxDQUFVLENBQUNwQyxLQUFLLENBQUNLLE1BQVUsY0FBQWlFLE1BQUEsQ0FDdkJqQixDQUFXLENBQXNCLEVBQUUsQ0FBckIsZ0JBQXFCLEVBQ2pELEVBQUUsQ0FDTCxFQUVGakIsQ0FBVSxFQUE4QixDQUFDLENBQTNCQSxDQUFVLENBQUNwQyxLQUFLLENBQUNLLE1BQVUsQ0FDdEMrQixDQUFVLENBQUNwQyxLQUFLLENBQUNHLEdBQUcsQ0FBQyxTQUFDb0UsQ0FBSSxDQUFFQyxDQUFLLFFBQy9CLENBQUFqRCxNQUFBLFlBQUFDLGFBQUEsUUFDRTZDLFNBQVMsUUFBQUMsTUFBQSxDQUFTbkIsQ0FBVSxHQUFLcUIsQ0FBSyxDQUFHLENBQUMsQ0FBRyxTQUFTLENBQUcsRUFBRSxFQUFBRixNQUFBLENBQ3pERixDQUFTLEVBQ1RJLENBQUssR0FBS0osQ0FBUyxFQUNuQmpCLENBQVUsR0FBS3FCLENBQUssQ0FBRyxDQUFDLEVBQ3hCSixDQUFTLEdBQUtqQixDQUFVLENBQ3BCLFdBQVcsQ0FDWCxFQUFFLENBQ0wsQ0FDSHhCLEdBQUcsQ0FBRSxHQUFBQyxRQUFFLEVBQUMsQ0FBRSxFQUVUMkMsQ0FBSSxFQUNIaEQsTUFBQSxZQUFBQyxhQUFBLFFBQUs2QyxTQUFTLENBQUMsU0FBUyxFQUN0QjlDLE1BQUEsWUFBQUMsYUFBQSxhQUFPK0MsQ0FBVyxDQUNmLENBQ04sQ0FDQWYsQ0FBYSxDQUFDZ0IsQ0FBSyxDQUFDLENBQUNyRSxHQUFHLENBQ3ZCLFNBQUNtQixDQUFLLFFBQ0osQ0FBQVQsVUFBVSxDQUFDNEQsUUFBUSxDQUFDbkQsQ0FBSyxDQUFDZixJQUFJLENBQUMsRUFBSWMsQ0FBVyxDQUFDQyxDQUFLLENBQUV2QixDQUFNLENBQUMsQ0FDakUsQ0FDRyxDQUFDLENBQ1AsQ0FBQyxDQUNGQSxDQUFNLENBQUNJLEdBQUcsQ0FDUixTQUFDbUIsQ0FBSyxRQUNKLENBQUFULFVBQVUsQ0FBQzRELFFBQVEsQ0FBQ25ELENBQUssQ0FBQ2YsSUFBSSxDQUFDLEVBQUljLENBQVcsQ0FBQ0MsQ0FBSyxDQUFFdkIsQ0FBTSxDQUFDLENBQ2pFLENBQUMsQ0FDSnFELENBQWMsRUFDYjdCLE1BQUEsWUFBQUMsYUFBQSxRQUFLNkMsU0FBUyxDQUFDLHVDQUF1QyxFQUNwRDlDLE1BQUEsWUFBQUMsYUFBQSxVQUFPa0QsT0FBTyxVQUFBSixNQUFBLENBQVdiLENBQUssQ0FBRyxDQUFDWSxTQUFTLENBQUMsV0FBVyxFQUNwRHRELGFBQ0ksQ0FBQyxDQUNSUSxNQUFBLFlBQUFDLGFBQUEsVUFDRWpCLElBQUksQ0FBQyxNQUFNLENBQ1hvRSxJQUFJLFVBQUFMLE1BQUEsQ0FBV2IsQ0FBSyxDQUFHLENBQ3ZCN0MsRUFBRSxVQUFBMEQsTUFBQSxDQUFXYixDQUFLLENBQUcsQ0FDckJtQixLQUFLLENBQUVkLENBQWMsQ0FDckJlLFFBQVEsQ0FBRSxTQUFBQSxTQUFDQyxDQUFDLFFBQUssQ0FBQWYsQ0FBZ0IsQ0FBQ2UsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQyxDQUFDLENBQ2xESSxZQUFZLENBQUMsS0FBSyxDQUNuQixDQUNFLENBRUosQ0FFVCxDQUFDLENBQUFDLE9BQUEsWUFBQTlELFFBQUEifQ==