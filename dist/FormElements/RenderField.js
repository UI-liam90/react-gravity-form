"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard"),_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireWildcard(require("react")),FormFields=_interopRequireWildcard(require("../Fields")),frac2dec=function(a){var b=a.split("-");if(1===b.length&&(b=a.split(" ")),1<b.length&&-1!==a.indexOf("/")){var c=parseInt(b[0]),d=b[1].split("/"),e=parseInt(d[0])/parseInt(d[1]);return c+e}if(-1!==a.indexOf("/")){var f=a.split("/"),g=parseInt(f[0])/parseInt(f[1]);return g}return parseInt(a)},formatComponentName=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},formatWidthFromCss=function(a){if(!a)return{};var b=a.indexOf("["),c=a.indexOf("]");if(-1===b||-1===c)return{};var d=a.substring(b+1,c).split(",").map(function(a){return frac2dec(a.replace(/\s/g,""))}),e="".concat(a.replace(a.substring(b,c+1),"")," custom-width");return{width:d,cleanedCssClass:e}},RenderField=function(a){var b=a.field,c=a.formValues,d=a.submitFailed,e=a.submitSuccess,f=a.setTouched,g=a.setErrorMessages,h=a.touched,i=a.updateForm,j=a.pages,k=a.prevStep,l=a.nextStep,m=a.isNextDisabled,n=a.saveStateToHtmlField,o=a.styledComponents,p=a.customComponents,q=a.error,r=a.unsetError,s=a.dropzoneText,t=a.language,u=a.apiKeys,v=a.errors,w=(0,_objectWithoutProperties2["default"])(a,["field","formValues","submitFailed","submitSuccess","setTouched","setErrorMessages","touched","updateForm","pages","prevStep","nextStep","isNextDisabled","saveStateToHtmlField","styledComponents","customComponents","error","unsetError","dropzoneText","language","apiKeys","errors"]),x=FormFields[formatComponentName(b.type)];p&&(p[b.id]||p[b.cssClass]||p[b.inputName])&&(x=FormFields[formatComponentName("custom")]);var y=formatWidthFromCss(b.cssClass),z=y.cleanedCssClass,A=y.width;A&&(b.cssClass=z,b.width=A);var B=c[b.id]?c[b.id].value:b.defaultValue,C=(0,_react.useState)("".concat(b.cssClass).concat("select"===b.type?B.value&&""!==B.value?" filled":"":B&&""!==B?" filled":"")),D=(0,_slicedToArray2["default"])(C,2),E=D[0],F=D[1];return _react["default"].createElement(x,(0,_extends2["default"])({key:"el-".concat(b.formId,"-").concat(b.id),field:b,value:B,updateForm:function updateForm(a,b,c){return i(a,b,c)},validationMessage:!!c[b.id]&&c[b.id].valid,formValues:c,submitFailed:d,submitSuccess:e,touched:h[b.id],setTouched:f,setErrorMessages:g,unsetError:r,error:q,pages:j,prevStep:k,nextStep:l,isNextDisabled:m,hideField:!!c[b.id]&&c[b.id].hideField,saveStateToHtmlField:!("html"!==b.type||-1===b.cssClass.indexOf("set-state"))&&{formValues:c,saveStateToHtmlField:n},styledComponents:o,cssClass:E,setFocusClass:function setFocusClass(a){a?-1===E.indexOf(" filled")&&F("".concat(E," filled")):F(E.replace(" filled",""))},component:p&&(p[b.id]||p[b.cssClass]||p[b.inputName]),dropzoneText:s,language:t,apiKeys:u,errors:v},w))},_default=RenderField;exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGQuanN4Il0sIm5hbWVzIjpbImZyYWMyZGVjIiwiZnJhY3Rpb24iLCJmcmFjdGlvblBhcnRzIiwic3BsaXQiLCJsZW5ndGgiLCJpbmRleE9mIiwiaW50ZWdlciIsInBhcnNlSW50IiwiZGVjaW1hbFBhcnRzIiwiZGVjaW1hbCIsImZvcm1hdENvbXBvbmVudE5hbWUiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZm9ybWF0V2lkdGhGcm9tQ3NzIiwiY3NzQ2xhc3MiLCJ3aWR0aFN0YXJ0cyIsIndpZHRoRW5kcyIsIndpZHRoIiwic3Vic3RyaW5nIiwibWFwIiwiaXRlbSIsInJlcGxhY2UiLCJjbGVhbmVkQ3NzQ2xhc3MiLCJSZW5kZXJGaWVsZCIsImZpZWxkIiwiZm9ybVZhbHVlcyIsInN1Ym1pdEZhaWxlZCIsInN1Ym1pdFN1Y2Nlc3MiLCJzZXRUb3VjaGVkIiwic2V0RXJyb3JNZXNzYWdlcyIsInRvdWNoZWQiLCJ1cGRhdGVGb3JtIiwicGFnZXMiLCJwcmV2U3RlcCIsIm5leHRTdGVwIiwiaXNOZXh0RGlzYWJsZWQiLCJzYXZlU3RhdGVUb0h0bWxGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJjdXN0b21Db21wb25lbnRzIiwiZXJyb3IiLCJ1bnNldEVycm9yIiwiZHJvcHpvbmVUZXh0IiwibGFuZ3VhZ2UiLCJhcGlLZXlzIiwiZXJyb3JzIiwicHJvcHMiLCJGb3JtQ29tcG9uZW50IiwiRm9ybUZpZWxkcyIsInR5cGUiLCJpZCIsImlucHV0TmFtZSIsInZhbHVlIiwiZGVmYXVsdFZhbHVlIiwiZmllbGRDbGFzc05hbWUiLCJzZXRGaWVsZENsYXNzTmFtZSIsImZvcm1JZCIsImV2ZW50IiwiaW5wdXRJRCIsInZhbGlkIiwiaGlkZUZpZWxkIiwic2V0Rm9jdXNDbGFzcyIsImFjdGlvbiJdLCJtYXBwaW5ncyI6ImdvQkFHTUEsUUFBUSxDQUFHLFNBQUFDLENBQVEsQ0FB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Q0FBSyxDQUFDeUIsRUFBUCxDQUFaLEVBQXlCeEIsQ0FBVSxDQUFDRCxDQUFLLENBQUN5QixFQUFQLENBQVYsQ0FBcUJVLFNBcEJ6RCxDQXFCRSxvQkFBb0IsR0FDSCxNQUFmLEdBQUFuQyxDQUFLLENBQUN3QixJQUFOLEVBQWlFLENBQUMsQ0FBekMsR0FBQXhCLENBQUssQ0FBQ1YsUUFBTixDQUFlWCxPQUFmLENBQXVCLFdBQXZCLENBRFAsR0FFZCxDQUFFc0IsVUFBVSxDQUFWQSxDQUFGLENBQWNXLG9CQUFvQixDQUFwQkEsQ0FBZCxDQXZCUixDQTBCRSxnQkFBZ0IsQ0FBRUMsQ0ExQnBCLENBMkJFLFFBQVEsQ0FBRWdCLENBM0JaLENBNEJFLGFBQWEsQ0F2Q0ssUUFBaEJPLENBQUFBLGFBQWdCLENBQUFDLENBQU0sQ0FBSSxDQUMxQkEsQ0FEMEIsQ0FFYyxDQUFDLENBQXZDLEdBQUFSLENBQWMsQ0FBQ2xELE9BQWYsQ0FBdUIsU0FBdkIsQ0FGd0IsRUFHMUJtRCxDQUFpQixXQUFJRCxDQUFKLFlBSFMsQ0FNNUJDLENBQWlCLENBQUNELENBQWMsQ0FBQ2hDLE9BQWYsQ0FBdUIsU0FBdkIsQ0FBa0MsRUFBbEMsQ0FBRCxDQUVwQixDQUdDLENBNkJFLFNBQVMsQ0FDUGlCLENBQWdCLEdBQ2ZBLENBQWdCLENBQUNkLENBQUssQ0FBQ3lCLEVBQVAsQ0FBaEIsRUFDQ1gsQ0FBZ0IsQ0FBQ2QsQ0FBSyxDQUFDVixRQUFQLENBRGpCLEVBRUN3QixDQUFnQixDQUFDZCxDQUFLLENBQUMwQixTQUFQLENBSEYsQ0E5QnBCLENBbUNFLFlBQVksQ0FBRVQsQ0FuQ2hCLENBb0NFLFFBQVEsQ0FBRUMsQ0FwQ1osQ0FxQ0UsT0FBTyxDQUFFQyxDQXJDWCxDQXNDRSxNQUFNLENBQUVDLENBdENWLEVBdUNNQyxDQXZDTixFQTBDSCxDLFVBRWN0QixXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIEZvcm1GaWVsZHMgZnJvbSBcIi4uL0ZpZWxkc1wiO1xyXG5cclxuY29uc3QgZnJhYzJkZWMgPSBmcmFjdGlvbiA9PiB7XHJcbiAgLyogYXNzdW1lcyBmcmFjdGlvbiBpcyBpbiB0aGUgZm9ybSAgMS0xLzIgb3IgMSAxLzIgKi9cclxuICAvKiBkb2Vzbid0IHdvcmsgb24gbmVnYXRpdmUgbnVtYmVycyAqL1xyXG4gIGxldCBmcmFjdGlvblBhcnRzID0gZnJhY3Rpb24uc3BsaXQoXCItXCIpO1xyXG4gIGlmIChmcmFjdGlvblBhcnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgLyogdHJ5IHNwYWNlIGFzIGRpdmlkZXIgKi9cclxuICAgIGZyYWN0aW9uUGFydHMgPSBmcmFjdGlvbi5zcGxpdChcIiBcIik7XHJcbiAgfVxyXG5cclxuICBpZiAoZnJhY3Rpb25QYXJ0cy5sZW5ndGggPiAxICYmIGZyYWN0aW9uLmluZGV4T2YoXCIvXCIpICE9PSAtMSkge1xyXG4gICAgY29uc3QgaW50ZWdlciA9IHBhcnNlSW50KGZyYWN0aW9uUGFydHNbMF0pO1xyXG4gICAgY29uc3QgZGVjaW1hbFBhcnRzID0gZnJhY3Rpb25QYXJ0c1sxXS5zcGxpdChcIi9cIik7XHJcbiAgICBjb25zdCBkZWNpbWFsID0gcGFyc2VJbnQoZGVjaW1hbFBhcnRzWzBdKSAvIHBhcnNlSW50KGRlY2ltYWxQYXJ0c1sxXSk7XHJcblxyXG4gICAgcmV0dXJuIGludGVnZXIgKyBkZWNpbWFsO1xyXG4gIH1cclxuICBpZiAoZnJhY3Rpb24uaW5kZXhPZihcIi9cIikgIT09IC0xKSB7XHJcbiAgICBjb25zdCBkZWNpbWFsUGFydHMgPSBmcmFjdGlvbi5zcGxpdChcIi9cIik7XHJcbiAgICBjb25zdCBkZWNpbWFsID0gcGFyc2VJbnQoZGVjaW1hbFBhcnRzWzBdKSAvIHBhcnNlSW50KGRlY2ltYWxQYXJ0c1sxXSk7XHJcbiAgICByZXR1cm4gZGVjaW1hbDtcclxuICB9XHJcbiAgcmV0dXJuIHBhcnNlSW50KGZyYWN0aW9uKTtcclxufTtcclxuXHJcbmNvbnN0IGZvcm1hdENvbXBvbmVudE5hbWUgPSBzdHJpbmcgPT5cclxuICBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XHJcbmNvbnN0IGZvcm1hdFdpZHRoRnJvbUNzcyA9IGNzc0NsYXNzID0+IHtcclxuICBpZiAoIWNzc0NsYXNzKSByZXR1cm4ge307XHJcbiAgY29uc3Qgd2lkdGhTdGFydHMgPSBjc3NDbGFzcy5pbmRleE9mKFwiW1wiKTtcclxuICBjb25zdCB3aWR0aEVuZHMgPSBjc3NDbGFzcy5pbmRleE9mKFwiXVwiKTtcclxuXHJcbiAgaWYgKHdpZHRoU3RhcnRzID09PSAtMSB8fCB3aWR0aEVuZHMgPT09IC0xKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG5cclxuICBjb25zdCB3aWR0aCA9IGNzc0NsYXNzXHJcbiAgICAuc3Vic3RyaW5nKHdpZHRoU3RhcnRzICsgMSwgd2lkdGhFbmRzKVxyXG4gICAgLnNwbGl0KFwiLFwiKVxyXG4gICAgLm1hcChpdGVtID0+IGZyYWMyZGVjKGl0ZW0ucmVwbGFjZSgvXFxzL2csIFwiXCIpKSk7XHJcblxyXG4gIGNvbnN0IGNsZWFuZWRDc3NDbGFzcyA9IGAke2Nzc0NsYXNzLnJlcGxhY2UoXHJcbiAgICBjc3NDbGFzcy5zdWJzdHJpbmcod2lkdGhTdGFydHMsIHdpZHRoRW5kcyArIDEpLFxyXG4gICAgXCJcIlxyXG4gICl9IGN1c3RvbS13aWR0aGA7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB3aWR0aCxcclxuICAgIGNsZWFuZWRDc3NDbGFzcyxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgUmVuZGVyRmllbGQgPSAoe1xyXG4gIGZpZWxkLFxyXG4gIGZvcm1WYWx1ZXMsXHJcbiAgc3VibWl0RmFpbGVkLFxyXG4gIHN1Ym1pdFN1Y2Nlc3MsXHJcbiAgc2V0VG91Y2hlZCxcclxuICBzZXRFcnJvck1lc3NhZ2VzLFxyXG4gIHRvdWNoZWQsXHJcbiAgdXBkYXRlRm9ybSxcclxuICBwYWdlcyxcclxuICBwcmV2U3RlcCxcclxuICBuZXh0U3RlcCxcclxuICBpc05leHREaXNhYmxlZCxcclxuICBzYXZlU3RhdGVUb0h0bWxGaWVsZCxcclxuICBzdHlsZWRDb21wb25lbnRzLFxyXG4gIGN1c3RvbUNvbXBvbmVudHMsXHJcbiAgZXJyb3IsXHJcbiAgdW5zZXRFcnJvcixcclxuICBkcm9wem9uZVRleHQsXHJcbiAgbGFuZ3VhZ2UsXHJcbiAgYXBpS2V5cyxcclxuICBlcnJvcnMsXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gIGxldCBGb3JtQ29tcG9uZW50ID0gRm9ybUZpZWxkc1tmb3JtYXRDb21wb25lbnROYW1lKGZpZWxkLnR5cGUpXTtcclxuXHJcbiAgaWYgKFxyXG4gICAgY3VzdG9tQ29tcG9uZW50cyAmJlxyXG4gICAgKGN1c3RvbUNvbXBvbmVudHNbZmllbGQuaWRdIHx8XHJcbiAgICAgIGN1c3RvbUNvbXBvbmVudHNbZmllbGQuY3NzQ2xhc3NdIHx8XHJcbiAgICAgIGN1c3RvbUNvbXBvbmVudHNbZmllbGQuaW5wdXROYW1lXSlcclxuICApIHtcclxuICAgIEZvcm1Db21wb25lbnQgPSBGb3JtRmllbGRzW2Zvcm1hdENvbXBvbmVudE5hbWUoXCJjdXN0b21cIildO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBjbGVhbmVkQ3NzQ2xhc3MsIHdpZHRoIH0gPSBmb3JtYXRXaWR0aEZyb21Dc3MoZmllbGQuY3NzQ2xhc3MpO1xyXG4gIGlmICh3aWR0aCkge1xyXG4gICAgZmllbGQuY3NzQ2xhc3MgPSBjbGVhbmVkQ3NzQ2xhc3M7XHJcbiAgICBmaWVsZC53aWR0aCA9IHdpZHRoO1xyXG4gIH1cclxuICBjb25zdCB2YWx1ZSA9IGZvcm1WYWx1ZXNbZmllbGQuaWRdXHJcbiAgICA/IGZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlXHJcbiAgICA6IGZpZWxkLmRlZmF1bHRWYWx1ZTtcclxuICBjb25zdCBbZmllbGRDbGFzc05hbWUsIHNldEZpZWxkQ2xhc3NOYW1lXSA9IHVzZVN0YXRlKFxyXG4gICAgYCR7ZmllbGQuY3NzQ2xhc3N9JHtcclxuICAgICAgZmllbGQudHlwZSA9PT0gXCJzZWxlY3RcIlxyXG4gICAgICAgID8gdmFsdWUudmFsdWUgJiYgdmFsdWUudmFsdWUgIT09IFwiXCJcclxuICAgICAgICAgID8gXCIgZmlsbGVkXCJcclxuICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgIDogdmFsdWUgJiYgdmFsdWUgIT09IFwiXCJcclxuICAgICAgICA/IFwiIGZpbGxlZFwiXHJcbiAgICAgICAgOiBcIlwiXHJcbiAgICB9YFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHNldEZvY3VzQ2xhc3MgPSBhY3Rpb24gPT4ge1xyXG4gICAgaWYgKGFjdGlvbikge1xyXG4gICAgICBpZiAoZmllbGRDbGFzc05hbWUuaW5kZXhPZihcIiBmaWxsZWRcIikgPT09IC0xKSB7XHJcbiAgICAgICAgc2V0RmllbGRDbGFzc05hbWUoYCR7ZmllbGRDbGFzc05hbWV9IGZpbGxlZGApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRGaWVsZENsYXNzTmFtZShmaWVsZENsYXNzTmFtZS5yZXBsYWNlKFwiIGZpbGxlZFwiLCBcIlwiKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtQ29tcG9uZW50XHJcbiAgICAgIGtleT17YGVsLSR7ZmllbGQuZm9ybUlkfS0ke2ZpZWxkLmlkfWB9XHJcbiAgICAgIGZpZWxkPXtmaWVsZH1cclxuICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICB1cGRhdGVGb3JtPXsoZXZlbnQsIGZpZWxkLCBpbnB1dElEKSA9PiB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCwgaW5wdXRJRCl9XHJcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlPXtcclxuICAgICAgICBmb3JtVmFsdWVzW2ZpZWxkLmlkXSA/IGZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbGlkIDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgICBmb3JtVmFsdWVzPXtmb3JtVmFsdWVzfVxyXG4gICAgICBzdWJtaXRGYWlsZWQ9e3N1Ym1pdEZhaWxlZH1cclxuICAgICAgc3VibWl0U3VjY2Vzcz17c3VibWl0U3VjY2Vzc31cclxuICAgICAgdG91Y2hlZD17dG91Y2hlZFtmaWVsZC5pZF19XHJcbiAgICAgIHNldFRvdWNoZWQ9e3NldFRvdWNoZWR9XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZXM9e3NldEVycm9yTWVzc2FnZXN9XHJcbiAgICAgIHVuc2V0RXJyb3I9e3Vuc2V0RXJyb3J9XHJcbiAgICAgIGVycm9yPXtlcnJvcn1cclxuICAgICAgcGFnZXM9e3BhZ2VzfVxyXG4gICAgICBwcmV2U3RlcD17cHJldlN0ZXB9XHJcbiAgICAgIG5leHRTdGVwPXtuZXh0U3RlcH1cclxuICAgICAgaXNOZXh0RGlzYWJsZWQ9e2lzTmV4dERpc2FibGVkfVxyXG4gICAgICBoaWRlRmllbGQ9e2Zvcm1WYWx1ZXNbZmllbGQuaWRdID8gZm9ybVZhbHVlc1tmaWVsZC5pZF0uaGlkZUZpZWxkIDogZmFsc2V9XHJcbiAgICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkPXtcclxuICAgICAgICBmaWVsZC50eXBlID09PSBcImh0bWxcIiAmJiBmaWVsZC5jc3NDbGFzcy5pbmRleE9mKFwic2V0LXN0YXRlXCIpICE9PSAtMVxyXG4gICAgICAgICAgPyB7IGZvcm1WYWx1ZXMsIHNhdmVTdGF0ZVRvSHRtbEZpZWxkIH1cclxuICAgICAgICAgIDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgICBzdHlsZWRDb21wb25lbnRzPXtzdHlsZWRDb21wb25lbnRzfVxyXG4gICAgICBjc3NDbGFzcz17ZmllbGRDbGFzc05hbWV9XHJcbiAgICAgIHNldEZvY3VzQ2xhc3M9e3NldEZvY3VzQ2xhc3N9XHJcbiAgICAgIGNvbXBvbmVudD17XHJcbiAgICAgICAgY3VzdG9tQ29tcG9uZW50cyAmJlxyXG4gICAgICAgIChjdXN0b21Db21wb25lbnRzW2ZpZWxkLmlkXSB8fFxyXG4gICAgICAgICAgY3VzdG9tQ29tcG9uZW50c1tmaWVsZC5jc3NDbGFzc10gfHxcclxuICAgICAgICAgIGN1c3RvbUNvbXBvbmVudHNbZmllbGQuaW5wdXROYW1lXSlcclxuICAgICAgfVxyXG4gICAgICBkcm9wem9uZVRleHQ9e2Ryb3B6b25lVGV4dH1cclxuICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlfVxyXG4gICAgICBhcGlLZXlzPXthcGlLZXlzfVxyXG4gICAgICBlcnJvcnM9e2Vycm9yc31cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyRmllbGQ7XHJcbiJdfQ==