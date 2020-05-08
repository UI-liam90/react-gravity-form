"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var _default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.hideField,h=a.updateForm,i=a.styledComponents,j=a.error,k=a.unsetError,l=a.setFocusClass,m=a.cssClass,n=_objectWithoutProperties(a,["field","value","validationMessage","touched","setTouched","hideField","updateForm","styledComponents","error","unsetError","setFocusClass","cssClass"]),o=b.id,p=b.formId,q=b.type,r=b.label,s=b.placeholder,t=b.isRequired,u=b.maxLength,v=b.description,w=b.descriptionPlacement,x=b.labelPlacement,y=b.width,z=b.customName,A=i||!1,B=A.Input,C=void 0===B?"input":B,D=A.Label,E=void 0===D?"label":D,F=A.Box,G=void 0===F?"div":F;return _react["default"].createElement(G,{width:y,className:d&&e||j?"form-field error ".concat(m):"form-field ".concat(m),style:{display:g?"none":void 0}},_react["default"].createElement("div",{className:q},_react["default"].createElement(E,{htmlFor:"input_".concat(p,"_").concat(o),className:"gf-label ".concat(x)},r,t?_react["default"].createElement("abbr",null,"*"):null),"above"===w&&v&&_react["default"].createElement("div",{className:"description"},v),_react["default"].createElement(C,{id:"input_".concat(p,"_").concat(o),name:z||"input_".concat(o),type:q,value:c?c:"",placeholder:s,maxLength:u,required:t,onChange:function onChange(a){h(a,b),k(o)},onBlur:function onBlur(a){h(a,b),f(o),l(""!==c)},onFocus:function onFocus(){return l(!0)},"aria-describedby":"error_".concat(p,"_").concat(o),"aria-invalid":!!d&&e||!!j}),"above"!==w&&v&&_react["default"].createElement("div",{className:"description"},v),(d&&e||j)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(p,"_").concat(o)},d||j)))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvV2Vic2l0ZS5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsImVycm9yIiwidW5zZXRFcnJvciIsInNldEZvY3VzQ2xhc3MiLCJjc3NDbGFzcyIsInByb3BzIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImlzUmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJJbnB1dCIsIkxhYmVsIiwiQm94IiwiZGlzcGxheSIsImV2ZW50Il0sIm1hcHBpbmdzIjoiYUFBQSxvRCwrbUJBRWUsV0FjVCxJQWJKQSxDQUFBQSxDQWFJLEdBYkpBLEtBYUksQ0FaSkMsQ0FZSSxHQVpKQSxLQVlJLENBWEpDLENBV0ksR0FYSkEsaUJBV0ksQ0FWSkMsQ0FVSSxHQVZKQSxPQVVJLENBVEpDLENBU0ksR0FUSkEsVUFTSSxDQVJKQyxDQVFJLEdBUkpBLFNBUUksQ0FQSkMsQ0FPSSxHQVBKQSxVQU9JLENBTkpDLENBTUksR0FOSkEsZ0JBTUksQ0FMSkMsQ0FLSSxHQUxKQSxLQUtJLENBSkpDLENBSUksR0FKSkEsVUFJSSxDQUhKQyxDQUdJLEdBSEpBLGFBR0ksQ0FGSkMsQ0FFSSxHQUZKQSxRQUVJLENBRERDLENBQ0Msc0xBRUZDLENBRkUsQ0FjQWIsQ0FkQSxDQUVGYSxFQUZFLENBR0ZDLENBSEUsQ0FjQWQsQ0FkQSxDQUdGYyxNQUhFLENBSUZDLENBSkUsQ0FjQWYsQ0FkQSxDQUlGZSxJQUpFLENBS0ZDLENBTEUsQ0FjQWhCLENBZEEsQ0FLRmdCLEtBTEUsQ0FNRkMsQ0FORSxDQWNBakIsQ0FkQSxDQU1GaUIsV0FORSxDQU9GQyxDQVBFLENBY0FsQixDQWRBLENBT0ZrQixVQVBFLENBUUZDLENBUkUsQ0FjQW5CLENBZEEsQ0FRRm1CLFNBUkUsQ0FTRkMsQ0FURSxDQWNBcEIsQ0FkQSxDQVNGb0IsV0FURSxDQVVGQyxDQVZFLENBY0FyQixDQWRBLENBVUZxQixvQkFWRSxDQVdGQyxDQVhFLENBY0F0QixDQWRBLENBV0ZzQixjQVhFLENBWUZDLENBWkUsQ0FjQXZCLENBZEEsQ0FZRnVCLEtBWkUsQ0FhRkMsQ0FiRSxDQWNBeEIsQ0FkQSxDQWFGd0IsVUFiRSxHQWVzRGpCLENBQWdCLElBZnRFLEtBZUlrQixLQWZKLENBZUlBLENBZkosWUFlWSxPQWZaLE9BZXFCQyxLQWZyQixDQWVxQkEsQ0FmckIsWUFlNkIsT0FmN0IsT0Flc0NDLEdBZnRDLENBZXNDQSxDQWZ0QyxZQWU0QyxLQWY1QyxHQWdCSixNQUNFLGlDQUFDLENBQUQsRUFDRSxLQUFLLENBQUVKLENBRFQsQ0FFRSxTQUFTLENBQ05yQixDQUFpQixFQUFJQyxDQUF0QixFQUFrQ0ssQ0FBbEMsNEJBQ3dCRyxDQUR4Qix1QkFFa0JBLENBRmxCLENBSEosQ0FPRSxLQUFLLENBQUUsQ0FBRWlCLE9BQU8sQ0FBRXZCLENBQVMsQ0FBRyxNQUFILE9BQXBCLENBUFQsRUFTRSx1Q0FBSyxTQUFTLENBQUVVLENBQWhCLEVBQ0UsZ0NBQUMsQ0FBRCxFQUFPLE9BQU8saUJBQVdELENBQVgsYUFBcUJELENBQXJCLENBQWQsQ0FBeUMsU0FBUyxvQkFBY1MsQ0FBZCxDQUFsRCxFQUNHTixDQURILENBRUdFLENBQVUsQ0FBRyxnREFBSCxDQUFvQixJQUZqQyxDQURGLENBSzRCLE9BQXpCLEdBQUFHLENBQW9CLEVBQWdCRCxDQUFwQyxFQUNDLHVDQUFLLFNBQVMsQ0FBQyxhQUFmLEVBQThCQSxDQUE5QixDQU5KLENBUUUsZ0NBQUMsQ0FBRCxFQUNFLEVBQUUsaUJBQVdOLENBQVgsYUFBcUJELENBQXJCLENBREosQ0FFRSxJQUFJLENBQUVXLENBQVUsa0JBQWFYLENBQWIsQ0FGbEIsQ0FHRSxJQUFJLENBQUVFLENBSFIsQ0FJRSxLQUFLLENBQUdkLENBQUQsQ0FBY0EsQ0FBZCxDQUFTLEVBSmxCLENBS0UsV0FBVyxDQUFFZ0IsQ0FMZixDQU1FLFNBQVMsQ0FBRUUsQ0FOYixDQU9FLFFBQVEsQ0FBRUQsQ0FQWixDQVFFLFFBQVEsQ0FBRSxrQkFBQ1csQ0FBRCxDQUFXLENBQ25CdkIsQ0FBVSxDQUFDdUIsQ0FBRCxDQUFRN0IsQ0FBUixDQURTLENBRW5CUyxDQUFVLENBQUNJLENBQUQsQ0FDWCxDQVhILENBWUUsTUFBTSxDQUFFLGdCQUFDZ0IsQ0FBRCxDQUFXLENBQ2pCdkIsQ0FBVSxDQUFDdUIsQ0FBRCxDQUFRN0IsQ0FBUixDQURPLENBRWpCSSxDQUFVLENBQUNTLENBQUQsQ0FGTyxDQUdqQkgsQ0FBYSxDQUFXLEVBQVYsR0FBQVQsQ0FBRCxDQUNkLENBaEJILENBaUJFLE9BQU8sQ0FBRSx5QkFBTVMsQ0FBQUEsQ0FBYSxJQUFuQixDQWpCWCxDQWtCRSxtQ0FBMkJJLENBQTNCLGFBQXFDRCxDQUFyQyxDQWxCRixDQW1CRSxlQUFlLENBQUMsQ0FBQ1gsQ0FBRixFQUF1QkMsQ0FBeEIsRUFBb0MsQ0FBQyxDQUFDSyxDQW5CdEQsRUFSRixDQTZCNEIsT0FBekIsR0FBQWEsQ0FBb0IsRUFBZ0JELENBQXBDLEVBQW1ELHVDQUFLLFNBQVMsQ0FBQyxhQUFmLEVBQThCQSxDQUE5QixDQTdCdEQsQ0E4QkcsQ0FBRWxCLENBQWlCLEVBQUlDLENBQXRCLEVBQWtDSyxDQUFuQyxHQUNDLHdDQUFNLFNBQVMsQ0FBQyxlQUFoQixDQUFnQyxFQUFFLGlCQUFXTSxDQUFYLGFBQXFCRCxDQUFyQixDQUFsQyxFQUNHWCxDQUFpQixFQUFJTSxDQUR4QixDQS9CSixDQVRGLENBK0NILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICB0b3VjaGVkLFxuICBzZXRUb3VjaGVkLFxuICBoaWRlRmllbGQsXG4gIHVwZGF0ZUZvcm0sXG4gIHN0eWxlZENvbXBvbmVudHMsXG4gIGVycm9yLFxuICB1bnNldEVycm9yLFxuICBzZXRGb2N1c0NsYXNzLFxuICBjc3NDbGFzcyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGZvcm1JZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgbWF4TGVuZ3RoLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgIGxhYmVsUGxhY2VtZW50LFxuICAgIHdpZHRoLFxuICAgIGN1c3RvbU5hbWUsXG4gIH0gPSBmaWVsZDtcbiAgY29uc3QgeyBJbnB1dCA9ICdpbnB1dCcsIExhYmVsID0gJ2xhYmVsJywgQm94ID0gJ2RpdicgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yXG4gICAgICAgICAgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWBcbiAgICAgICAgICA6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuICAgICAgfVxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gJ25vbmUnIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9PlxuICAgICAgICA8TGFiZWwgaHRtbEZvcj17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfWB9IGNsYXNzTmFtZT17YGdmLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICA8L0xhYmVsPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09IFwiYWJvdmVcIiAmJiBkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfVxuICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9YH1cbiAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgIHZhbHVlPXshdmFsdWUgPyAnJyA6IHZhbHVlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cbiAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQmx1cj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgIHNldEZvY3VzQ2xhc3ModmFsdWUgIT09ICcnKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldEZvY3VzQ2xhc3ModHJ1ZSl9XG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9XG4gICAgICAgICAgYXJpYS1pbnZhbGlkPXsoISF2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCAhIWVycm9yfVxuICAgICAgICAvPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgIT09IFwiYWJvdmVcIiAmJiBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2Pn1cbiAgICAgICAgeygodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3IpICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSB8fCBlcnJvcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXX0=