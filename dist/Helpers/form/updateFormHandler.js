"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray")),_readOnlyError2=_interopRequireDefault(require("@babel/runtime/helpers/readOnlyError")),_validation=require("../validation"),_checkConditionalLogic=_interopRequireDefault(require("./checkConditionalLogic"));function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var _default=function(a,b,c,d,e,f,g){for(var h=arguments.length,j=Array(7<h?h-7:0),k=7;k<h;k++)j[k-7]=arguments[k];var l,m=j.onChange,n=a.id,o=a.type,p=a.isRequired;if("checkbox"===a.type){var q=(0,_toConsumableArray2["default"])(d[a.id].value),r=q.indexOf(b.target.value);-1<r?q.splice(r,1):q.push(b.target.value),l=q}else if("date"==a.type&&"datepicker"!==a.dateType){var s=a.subId,t=a.dateLabel,u=(0,_toConsumableArray2["default"])(d[a.id].value);u[s]={val:b.target.value,label:t},l=u}else if("consent"===a.type)l=b.target?b.target.checked:"null";else if("address"===a.type){var D=_objectSpread({},d[a.id].value);c&&(D[c]=b.target.value),l=D}else if("postcode"===a.type)l=b.target?b.target.value:null,Object.values(d).filter(function(a){return"field--street"===a.cssClass})[0].value=null===b||void 0===b?void 0:b.street,Object.values(d).filter(function(a){return"field--city"===a.cssClass})[0].value=null===b||void 0===b?void 0:b.city;else if("name"===a.type){var v=(0,_toConsumableArray2["default"])(d[a.id].value),w=v.indexOf(c);-1<w?v.splice(w,1):v[c]=b.target.value,l=b.target.value}else if("password"===a.type||"email"===a.type&&a.emailConfirmEnabled){var x=a.subId,y=d[a.id]&&d[a.id].value?(0,_toConsumableArray2["default"])(d[a.id].value):[];y[x]={val:b.target.value},l=y}else l=b.target?b.target.value:"null";"text"===o&&-1<a.cssClass.indexOf("iban")&&(o=((0,_readOnlyError2["default"])("type"),"iban"));var z=(0,_validation.validateField)(l,a);if(-1!==f.indexOf(n)){d[n].value=l;for(var E=0;E<g.length;E++){var A=g[E].id,B=(0,_checkConditionalLogic["default"])(g[E].conditionalLogic,d);d[A].hideField=B,B&&(d[A].isRequired&&B&&(d[A].value=""),d[A].valid=!!d[A].isRequired)}}var C=_objectSpread(_objectSpread({},d),{},(0,_defineProperty2["default"])({},n,{value:l,id:n,valid:z,label:a.label,pageNumber:a.pageNumber,cssClass:a.cssClass,isRequired:a.isRequired}));e(_objectSpread({},C)),m&&m(C)};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9IZWxwZXJzL2Zvcm0vdXBkYXRlRm9ybUhhbmRsZXIuanMiXSwibmFtZXMiOlsiZmllbGQiLCJldmVudCIsImlucHV0SUQiLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsImNvbmRpdGlvbmFsSWRzIiwiY29uZGl0aW9uRmllbGRzIiwicHJvcHMiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiaWQiLCJ0eXBlIiwiaXNSZXF1aXJlZCIsInZhbHVlcyIsImluZGV4IiwiaW5kZXhPZiIsInRhcmdldCIsInNwbGljZSIsInB1c2giLCJkYXRlVHlwZSIsInN1YklkIiwiZGF0ZUxhYmVsIiwidmFsIiwibGFiZWwiLCJjaGVja2VkIiwiT2JqZWN0IiwiZmlsdGVyIiwiaXRlbSIsImNzc0NsYXNzIiwic3RyZWV0IiwiY2l0eSIsImVtYWlsQ29uZmlybUVuYWJsZWQiLCJ2YWxpZCIsImkiLCJsZW5ndGgiLCJoaWRlIiwiY29uZGl0aW9uYWxMb2dpYyIsImhpZGVGaWVsZCIsIm5ld1ZhbHVlcyIsInBhZ2VOdW1iZXIiXSwibWFwcGluZ3MiOiI2ckNBR2UsU0FDYkEsQ0FEYSxDQUViQyxDQUZhLENBR2JDLENBSGEsQ0FJYkMsQ0FKYSxDQUtiQyxDQUxhLENBTWJDLENBTmEsQ0FPYkMsQ0FQYSxDQVNWLDRCQURBQyxDQUNBLDhCQURBQSxDQUNBLHNCQUlDQyxDQUFBQSxDQUpELENBQ0tDLENBREwsQ0FDa0JGLENBRGxCLENBQ0tFLFFBREwsQ0FFS0MsQ0FGTCxDQUU4QlYsQ0FGOUIsQ0FFS1UsRUFGTCxDQUVTQyxDQUZULENBRThCWCxDQUY5QixDQUVTVyxJQUZULENBRWVDLENBRmYsQ0FFOEJaLENBRjlCLENBRWVZLFVBRmYsQ0FNSCxHQUFtQixVQUFmLEdBQUFaLENBQUssQ0FBQ1csSUFBVixDQUErQixJQUN2QkUsQ0FBQUEsQ0FBTSxvQ0FBT1YsQ0FBVSxDQUFDSCxDQUFLLENBQUNVLEVBQVAsQ0FBVixDQUFxQkYsS0FBNUIsQ0FEaUIsQ0FFdkJN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Q0FDaENKLENBQWUsQ0FBQzJCLENBQUQsQ0FEaUIsQ0FDdkN2QixFQUR1QyxDQUV6Q3lCLENBQUksQ0FBRyxzQ0FDWDdCLENBQWUsQ0FBQzJCLENBQUQsQ0FBZixDQUFtQkcsZ0JBRFIsQ0FFWGpDLENBRlcsQ0FGa0MsQ0FNL0NBLENBQVUsQ0FBQ08sQ0FBRCxDQUFWLENBQWUyQixTQUFmLENBQTJCRixDQU5vQixDQU8zQ0EsQ0FQMkMsR0FRekNoQyxDQUFVLENBQUNPLENBQUQsQ0FBVixDQUFlRSxVQUFmLEVBQTZCdUIsQ0FSWSxHQVMzQ2hDLENBQVUsQ0FBQ08sQ0FBRCxDQUFWLENBQWVGLEtBQWYsQ0FBdUIsRUFUb0IsRUFXN0NMLENBQVUsQ0FBQ08sQ0FBRCxDQUFWLENBQWVzQixLQUFmLENBQXVCLENBQUMsQ0FBQzdCLENBQVUsQ0FBQ08sQ0FBRCxDQUFWLENBQWVFLFVBWEssQ0FhaEQsQ0FDRixDQUVELEdBQU0wQixDQUFBQSxDQUFTLGdDQUNWbkMsQ0FEVSx3Q0FFWk8sQ0FGWSxDQUVQLENBQ0pGLEtBQUssQ0FBTEEsQ0FESSxDQUVKRSxFQUFFLENBQUZBLENBRkksQ0FHSnNCLEtBQUssQ0FBTEEsQ0FISSxDQUlKVCxLQUFLLENBQUV2QixDQUFLLENBQUN1QixLQUpULENBS0pnQixVQUFVLENBQUV2QyxDQUFLLENBQUN1QyxVQUxkLENBTUpYLFFBQVEsQ0FBRTVCLENBQUssQ0FBQzRCLFFBTlosQ0FPSmhCLFVBQVUsQ0FBRVosQ0FBSyxDQUFDWSxVQVBkLENBRk8sRUFBZixDQWFBUixDQUFhLGtCQUNSa0MsQ0FEUSxFQTdHVixDQWlIQzdCLENBakhELEVBa0hEQSxDQUFRLENBQUM2QixDQUFELENBRVgsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZhbGlkYXRlRmllbGQgfSBmcm9tIFwiLi4vdmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgY2hlY2tDb25kaXRpb25hbExvZ2ljIGZyb20gXCIuL2NoZWNrQ29uZGl0aW9uYWxMb2dpY1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKFxyXG4gIGZpZWxkLFxyXG4gIGV2ZW50LFxyXG4gIGlucHV0SUQsXHJcbiAgZm9ybVZhbHVlcyxcclxuICBzZXRGb3JtVmFsdWVzLFxyXG4gIGNvbmRpdGlvbmFsSWRzLFxyXG4gIGNvbmRpdGlvbkZpZWxkcyxcclxuICAuLi5wcm9wc1xyXG4pID0+IHtcclxuICBjb25zdCB7IG9uQ2hhbmdlIH0gPSBwcm9wcztcclxuICBjb25zdCB7IGlkLCB0eXBlLCBpc1JlcXVpcmVkIH0gPSBmaWVsZDtcclxuICAvLyBTZXQgbmV3IHZhbHVlXHJcbiAgbGV0IHZhbHVlO1xyXG5cclxuICBpZiAoZmllbGQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdO1xyXG4gICAgY29uc3QgaW5kZXggPSB2YWx1ZXMuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWx1ZXMucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdmFsdWUgPSB2YWx1ZXM7XHJcbiAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09IFwiZGF0ZVwiICYmIGZpZWxkLmRhdGVUeXBlICE9PSBcImRhdGVwaWNrZXJcIikge1xyXG4gICAgY29uc3QgeyBzdWJJZCwgZGF0ZUxhYmVsIH0gPSBmaWVsZDtcclxuICAgIGNvbnN0IHZhbHVlcyA9IFsuLi5mb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZV07XHJcbiAgICB2YWx1ZXNbc3ViSWRdID0ge1xyXG4gICAgICB2YWw6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgbGFiZWw6IGRhdGVMYWJlbCxcclxuICAgIH07XHJcbiAgICB2YWx1ZSA9IHZhbHVlcztcclxuICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09IFwiY29uc2VudFwiKSB7XHJcbiAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldCA/IGV2ZW50LnRhcmdldC5jaGVja2VkIDogXCJudWxsXCI7XHJcbiAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSBcImFkZHJlc3NcIikge1xyXG4gICAgbGV0IHZhbHVlcyA9IHsgLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWUgfTtcclxuICAgIGlmIChpbnB1dElEKSB7XHJcbiAgICAgIHZhbHVlc1tpbnB1dElEXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YWx1ZSA9IHZhbHVlcztcclxuICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09IFwicG9zdGNvZGVcIikge1xyXG4gICAgdmFsdWUgPSBldmVudC50YXJnZXQgPyBldmVudC50YXJnZXQudmFsdWUgOiBudWxsO1xyXG4gICAgT2JqZWN0LnZhbHVlcyhmb3JtVmFsdWVzKS5maWx0ZXIoXHJcbiAgICAgIGl0ZW0gPT4gaXRlbS5jc3NDbGFzcyA9PT0gXCJmaWVsZC0tc3RyZWV0XCJcclxuICAgIClbMF0udmFsdWUgPSBldmVudD8uc3RyZWV0O1xyXG4gICAgT2JqZWN0LnZhbHVlcyhmb3JtVmFsdWVzKS5maWx0ZXIoXHJcbiAgICAgIGl0ZW0gPT4gaXRlbS5jc3NDbGFzcyA9PT0gXCJmaWVsZC0tY2l0eVwiXHJcbiAgICApWzBdLnZhbHVlID0gZXZlbnQ/LmNpdHk7XHJcbiAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSBcIm5hbWVcIikge1xyXG4gICAgbGV0IHZhbHVlcyA9IFsuLi5mb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZV07XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSB2YWx1ZXMuaW5kZXhPZihpbnB1dElEKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICB2YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbHVlc1tpbnB1dElEXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgZmllbGQudHlwZSA9PT0gXCJwYXNzd29yZFwiIHx8XHJcbiAgICAoZmllbGQudHlwZSA9PT0gXCJlbWFpbFwiICYmIGZpZWxkLmVtYWlsQ29uZmlybUVuYWJsZWQpXHJcbiAgKSB7XHJcbiAgICBjb25zdCB7IHN1YklkIH0gPSBmaWVsZDtcclxuICAgIGNvbnN0IHZhbHVlcyA9XHJcbiAgICAgIGZvcm1WYWx1ZXNbZmllbGQuaWRdICYmIGZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlXHJcbiAgICAgICAgPyBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdXHJcbiAgICAgICAgOiBbXTtcclxuICAgIHZhbHVlc1tzdWJJZF0gPSB7XHJcbiAgICAgIHZhbDogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgfTtcclxuICAgIHZhbHVlID0gdmFsdWVzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldCA/IGV2ZW50LnRhcmdldC52YWx1ZSA6IFwibnVsbFwiO1xyXG4gIH1cclxuICAvLyBpZiBmaWVsZCBpcyBJQkFOXHJcbiAgaWYgKHR5cGUgPT09IFwidGV4dFwiICYmIGZpZWxkLmNzc0NsYXNzLmluZGV4T2YoXCJpYmFuXCIpID4gLTEpIHtcclxuICAgIHR5cGUgPSBcImliYW5cIjtcclxuICB9XHJcblxyXG4gIC8vIFZhbGlkYXRlIGZpZWxkXHJcbiAgY29uc3QgdmFsaWQgPSB2YWxpZGF0ZUZpZWxkKHZhbHVlLCBmaWVsZCk7XHJcblxyXG4gIC8vIGlmIGZpZWxkIElEIGlzIHNvbWV3aGVyZSBpbiBjb25kaXRpb25hbCBmaWVsZHNcclxuICAvLyByZWNhbGN1bGF0ZSBhbGwgY29uZGl0aW9uc1xyXG4gIGlmIChjb25kaXRpb25hbElkcy5pbmRleE9mKGlkKSAhPT0gLTEpIHtcclxuICAgIGZvcm1WYWx1ZXNbaWRdLnZhbHVlID0gdmFsdWU7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmRpdGlvbkZpZWxkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCB7IGlkIH0gPSBjb25kaXRpb25GaWVsZHNbaV07XHJcbiAgICAgIGNvbnN0IGhpZGUgPSBjaGVja0NvbmRpdGlvbmFsTG9naWMoXHJcbiAgICAgICAgY29uZGl0aW9uRmllbGRzW2ldLmNvbmRpdGlvbmFsTG9naWMsXHJcbiAgICAgICAgZm9ybVZhbHVlc1xyXG4gICAgICApO1xyXG4gICAgICBmb3JtVmFsdWVzW2lkXS5oaWRlRmllbGQgPSBoaWRlO1xyXG4gICAgICBpZiAoaGlkZSkge1xyXG4gICAgICAgIGlmIChmb3JtVmFsdWVzW2lkXS5pc1JlcXVpcmVkICYmIGhpZGUpIHtcclxuICAgICAgICAgIGZvcm1WYWx1ZXNbaWRdLnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ybVZhbHVlc1tpZF0udmFsaWQgPSAhIWZvcm1WYWx1ZXNbaWRdLmlzUmVxdWlyZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG5ld1ZhbHVlcyA9IHtcclxuICAgIC4uLmZvcm1WYWx1ZXMsXHJcbiAgICBbaWRdOiB7XHJcbiAgICAgIHZhbHVlLFxyXG4gICAgICBpZCxcclxuICAgICAgdmFsaWQsXHJcbiAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcclxuICAgICAgcGFnZU51bWJlcjogZmllbGQucGFnZU51bWJlcixcclxuICAgICAgY3NzQ2xhc3M6IGZpZWxkLmNzc0NsYXNzLFxyXG4gICAgICBpc1JlcXVpcmVkOiBmaWVsZC5pc1JlcXVpcmVkLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBzZXRGb3JtVmFsdWVzKHtcclxuICAgIC4uLm5ld1ZhbHVlcyxcclxuICB9KTtcclxuXHJcbiAgaWYgKG9uQ2hhbmdlKSB7XHJcbiAgICBvbkNoYW5nZShuZXdWYWx1ZXMpO1xyXG4gIH1cclxufTtcclxuIl19