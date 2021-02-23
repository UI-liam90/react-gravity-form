"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_reactSelect=_interopRequireDefault(require("react-select")),_ValidationMessage=_interopRequireDefault(require("../../FormElements/ValidationMessage"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var _default=function(a){var b=a.defaultProps,c=b.field,d=b.value,e=b.validationMessage,f=b.touched,g=b.setTouched,h=b.updateForm,i=b.error,j=b.unsetError,k=b.setFocusClass,l=b.setDate,m=b.startDate,n=b.styledComponents,o=b.formattedInputs,p=_objectWithoutProperties(b,["field","value","validationMessage","touched","setTouched","updateForm","error","unsetError","setFocusClass","setDate","startDate","styledComponents","formattedInputs"]),q=c.id,r=c.isRequired,s=c.formId,t=c.type,u=c.customName,v=_reactSelect["default"]||"select",w=function(a){for(var b=[],c=0,d=1,e=a===c||a===d?1:1920,f=a===c?31:a===d?12:new Date().getFullYear(),g=a===c?1:a===d?3:0,h=e<f?1:-1,i=e;i!==f+h;i+=h)b.push({value:i,label:i,selected:parseInt(i)===parseInt(g)});return b},x=function(a,b,c){var d=m||[],e=0===c?2:2===c?0:1;d[e]=a.value,l(d);var f={target:{value:a.value}};h(f,b)},y=function(a){if(m){var b=0===a?2:1===a?1:0;return m[b]?{value:m[b],label:m[b]}:void 0}};return _react["default"].createElement(_react["default"].Fragment,null,o&&o.map(function(a,b){return _react["default"].createElement("div",{key:a.id,className:"gfield_date_dropdown"},_react["default"].createElement(v,{required:r,placeholder:a.placeholder,options:w(b),value:y(b),id:"input_".concat(s,"_").concat(q,"_").concat(b+1),name:u||"input_".concat(q,"[]"),onBlur:function onBlur(){var d=y(b);if(!d){var e=_objectSpread(_objectSpread({},c),{},{subId:b,dateLabel:a.label});x({value:""},e,b)}g(q),j(q),k(""!==a.value)},onChange:function onChange(d){var e=_objectSpread(_objectSpread({},c),{},{subId:b,dateLabel:a.label});x(d,e,b),j(q)},onFocus:function onFocus(){return k(!0)}}))}),(e&&f||i)&&_react["default"].createElement(_ValidationMessage["default"],{validationMessage:e,error:i,id:q}))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9GaWVsZHMvRGF0ZS9EYXRlU2VsZWN0LmpzeCJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInVwZGF0ZUZvcm0iLCJlcnJvciIsInVuc2V0RXJyb3IiLCJzZXRGb2N1c0NsYXNzIiwic2V0RGF0ZSIsInN0YXJ0RGF0ZSIsInN0eWxlZENvbXBvbmVudHMiLCJmb3JtYXR0ZWRJbnB1dHMiLCJwcm9wcyIsImlkIiwiaXNSZXF1aXJlZCIsImZvcm1JZCIsInR5cGUiLCJjdXN0b21OYW1lIiwiUlNlbGVjdCIsIlJlYWN0U2VsZWN0IiwiZ2V0TnVtYmVyRHJvcGRvd24iLCJpIiwib3B0aW9ucyIsImRheURyb3Bkb3duSUQiLCJtb250aERyb3Bkb3duSUQiLCJzdGFydE51bWJlciIsImVuZE51bWJlciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInNlbGVjdGVkVmFsdWUiLCJpbmNyZW1lbnQiLCJwdXNoIiwibGFiZWwiLCJzZWxlY3RlZCIsInBhcnNlSW50IiwiaGFuZGxlQ2hhbmdlIiwiaW5kZXgiLCJ0bXAiLCJrZXkiLCJldmVudCIsInRhcmdldCIsImdldFZhbHVlQnlJbmRleCIsIm1hcCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJ0bXBTdGF0ZSIsInN1YklkIiwiZGF0ZUxhYmVsIiwib3B0aW9uIl0sIm1hcHBpbmdzIjoiZ2pEQUllLFdBQW9CLElBQWxCQSxDQUFBQSxDQUFrQixHQUFsQkEsWUFBa0IsQ0FFL0JDLENBRitCLENBZ0I3QkQsQ0FoQjZCLENBRS9CQyxLQUYrQixDQUcvQkMsQ0FIK0IsQ0FnQjdCRixDQWhCNkIsQ0FHL0JFLEtBSCtCLENBSS9CQyxDQUorQixDQWdCN0JILENBaEI2QixDQUkvQkcsaUJBSitCLENBSy9CQyxDQUwrQixDQWdCN0JKLENBaEI2QixDQUsvQkksT0FMK0IsQ0FNL0JDLENBTitCLENBZ0I3Qkws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Q0FBMEJULENBQTFCLENBQ2IsQ0FDRGpDLENBQVUsQ0FBQ1UsQ0FBRCxDQVZPLENBV2pCUCxDQUFVLENBQUNPLENBQUQsQ0FYTyxDQVlqQk4sQ0FBYSxDQUFpQixFQUFoQixHQUFBb0MsQ0FBSyxDQUFDM0MsS0FBUCxDQUNkLENBcEJILENBcUJFLFFBQVEsQ0FBRSxrQkFBQ2dELENBQUQsQ0FBWSxDQUNwQixHQUFNSCxDQUFBQSxDQUFRLGdDQUNUOUMsQ0FEUyxNQUVaK0MsS0FBSyxDQUFFVixDQUZLLENBR1pXLFNBQVMsQ0FBRUosQ0FBSyxDQUFDWCxLQUhMLEVBQWQsQ0FLQUcsQ0FBWSxDQUFDYSxDQUFELENBQVNILENBQVQsQ0FBbUJULENBQW5CLENBTlEsQ0FPcEI5QixDQUFVLENBQUNPLENBQUQsQ0FDWCxDQTdCSCxDQThCRSxPQUFPLENBQUUseUJBQU1OLENBQUFBLENBQWEsSUFBbkIsQ0E5QlgsRUFERixDQURxQixDQUFwQixDQUZMLENBc0NHLENBQUVOLENBQWlCLEVBQUlDLENBQXRCLEVBQWtDRyxDQUFuQyxHQUNDLGdDQUFDLDZCQUFELEVBQW1CLGlCQUFpQixDQUFFSixDQUF0QyxDQUF5RCxLQUFLLENBQUVJLENBQWhFLENBQXVFLEVBQUUsQ0FBRVEsQ0FBM0UsRUF2Q0osQ0EyQ0gsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcbmltcG9ydCBWYWxpZGF0aW9uTWVzc2FnZSBmcm9tICcuLi8uLi9Gb3JtRWxlbWVudHMvVmFsaWRhdGlvbk1lc3NhZ2UnXG5cbmV4cG9ydCBkZWZhdWx0ICh7ZGVmYXVsdFByb3BzfSkgPT4ge1xuICBjb25zdCB7XG4gICAgZmllbGQsXG4gICAgdmFsdWUsXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgdG91Y2hlZCxcbiAgICBzZXRUb3VjaGVkLFxuICAgIHVwZGF0ZUZvcm0sXG4gICAgZXJyb3IsXG4gICAgdW5zZXRFcnJvcixcbiAgICBzZXRGb2N1c0NsYXNzLFxuICAgIHNldERhdGUsXG4gICAgc3RhcnREYXRlLFxuICAgIHN0eWxlZENvbXBvbmVudHMsXG4gICAgZm9ybWF0dGVkSW5wdXRzLFxuICAgIC4uLnByb3BzXG4gIH0gPSBkZWZhdWx0UHJvcHM7XG5cbiAgY29uc3QgeyBpZCwgaXNSZXF1aXJlZCwgZm9ybUlkLCB0eXBlLCBjdXN0b21OYW1lIH0gPSBmaWVsZDtcblxuICBjb25zdCBSU2VsZWN0ID0gUmVhY3RTZWxlY3QgfHwgJ3NlbGVjdCc7XG5cbiAgY29uc3QgZ2V0TnVtYmVyRHJvcGRvd24gPSAoaSkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcblxuICAgIGNvbnN0IGRheURyb3Bkb3duSUQgPSAwO1xuICAgIGNvbnN0IG1vbnRoRHJvcGRvd25JRCA9IDE7XG5cbiAgICBjb25zdCBzdGFydE51bWJlciA9IGkgPT09IGRheURyb3Bkb3duSUQgfHwgaSA9PT0gbW9udGhEcm9wZG93bklEID8gMSA6IDE5MjA7XG4gICAgY29uc3QgZW5kTnVtYmVyID0gaSA9PT0gZGF5RHJvcGRvd25JRCA/IDMxIDogaSA9PT0gbW9udGhEcm9wZG93bklEID8gMTIgOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IGkgPT09IGRheURyb3Bkb3duSUQgPyAxIDogaSA9PT0gbW9udGhEcm9wZG93bklEID8gMyA6IDA7XG5cbiAgICBjb25zdCBpbmNyZW1lbnQgPSBzdGFydE51bWJlciA8IGVuZE51bWJlciA/IDEgOiAtMTtcbiAgICBmb3IgKGxldCBpID0gc3RhcnROdW1iZXI7IGkgIT09IGVuZE51bWJlciArIGluY3JlbWVudDsgaSArPSBpbmNyZW1lbnQpIHtcbiAgICAgIG9wdGlvbnMucHVzaCh7XG4gICAgICAgIHZhbHVlOiBpLFxuICAgICAgICBsYWJlbDogaSxcbiAgICAgICAgc2VsZWN0ZWQ6IHBhcnNlSW50KGkpID09PSBwYXJzZUludChzZWxlY3RlZFZhbHVlKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsdWUsIGZpZWxkLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHRtcCA9IHN0YXJ0RGF0ZSB8fCBbXTtcbiAgICBjb25zdCBrZXkgPSBpbmRleCA9PT0gMCA/IDIgOiBpbmRleCA9PT0gMiA/IDAgOiAxO1xuICAgIHRtcFtrZXldID0gdmFsdWUudmFsdWU7XG5cbiAgICBzZXREYXRlKHRtcCk7XG5cbiAgICBjb25zdCBldmVudCA9IHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB2YWx1ZTogdmFsdWUudmFsdWUsXG4gICAgICB9LFxuICAgIH07XG4gICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICB9O1xuXG4gIGNvbnN0IGdldFZhbHVlQnlJbmRleCA9IChpbmRleCkgPT4ge1xuICAgIGlmICghc3RhcnREYXRlKSByZXR1cm47XG5cbiAgICBjb25zdCBpID0gaW5kZXggPT09IDAgPyAyIDogaW5kZXggPT09IDEgPyAxIDogMDtcblxuICAgIHJldHVybiBzdGFydERhdGVbaV1cbiAgICAgID8geyB2YWx1ZTogc3RhcnREYXRlW2ldLCBsYWJlbDogc3RhcnREYXRlW2ldIH1cbiAgICAgIDogdW5kZWZpbmVkO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtmb3JtYXR0ZWRJbnB1dHNcbiAgICAgICYmIGZvcm1hdHRlZElucHV0cy5tYXAoKGlucHV0LCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW5wdXQuaWR9IGNsYXNzTmFtZT1cImdmaWVsZF9kYXRlX2Ryb3Bkb3duXCI+XG4gICAgICAgICAgPFJTZWxlY3RcbiAgICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2lucHV0LnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgb3B0aW9ucz17Z2V0TnVtYmVyRHJvcGRvd24oaW5kZXgpfVxuICAgICAgICAgICAgdmFsdWU9e2dldFZhbHVlQnlJbmRleChpbmRleCl9XG4gICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8ke2luZGV4ICsgMX1gfVxuICAgICAgICAgICAgbmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpZH1bXWB9XG4gICAgICAgICAgICBvbkJsdXI9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlQnlJbmRleChpbmRleCk7XG4gICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0bXBTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgc3ViSWQ6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgZGF0ZUxhYmVsOiBpbnB1dC5sYWJlbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSh7IHZhbHVlOiAnJyB9LCB0bXBTdGF0ZSwgaW5kZXgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICAgICAgc2V0Rm9jdXNDbGFzcyhpbnB1dC52YWx1ZSAhPT0gJycpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRtcFN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgIHN1YklkOiBpbmRleCxcbiAgICAgICAgICAgICAgICBkYXRlTGFiZWw6IGlucHV0LmxhYmVsLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2Uob3B0aW9uLCB0bXBTdGF0ZSwgaW5kZXgpO1xuICAgICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRGb2N1c0NsYXNzKHRydWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICB7KCh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvcikgJiYgKFxuICAgICAgICA8VmFsaWRhdGlvbk1lc3NhZ2UgdmFsaWRhdGlvbk1lc3NhZ2U9e3ZhbGlkYXRpb25NZXNzYWdlfSBlcnJvcj17ZXJyb3J9IGlkPXtpZH0gLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuIl19