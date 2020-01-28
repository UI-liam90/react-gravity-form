"use strict";function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireWildcard(require("react")),_reactDropzone=require("react-dropzone");function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c["default"]=a,b&&b.set(a,c),c}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function _arrayWithHoles(a){if(Array.isArray(a))return a}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function Accept(a){var b=a.dropzoneText,c=_objectWithoutProperties(a,["dropzoneText"]),d=c.field,e=(d||[]).defaultValue,f=(0,_react.useState)(e?[e]:[]),g=_slicedToArray(f,2),h=g[0],i=g[1],j=(0,_react.useState)("dropzone"),k=_slicedToArray(j,2),l=k[0],m=k[1],n=(0,_reactDropzone.useDropzone)({accept:"image/*",onDrop:function onDrop(a){var b=c.id,d=c.formID,e=c.field,f=c.isRequired,g=c.updateForm,h=c.setTouched,j=c.unsetError;i(a.map(function(a){return Object.assign(a,{preview:URL.createObjectURL(a)})})),g(a,e),h(b),j(b)},onDragOver:function onDragOver(){m("dropzone over")},onDragLeave:function onDragLeave(){m("dropzone")},onDropAccepted:function onDropAccepted(){m("dropzone")}}),o=n.getRootProps,p=n.getInputProps,q=n.isDragActive,r=n.isDragAccept,s=n.isDragReject,t=h&&0<!!h.length&&h.map(function(a){return _react["default"].createElement("div",{key:a.name},_react["default"].createElement("div",null,_react["default"].createElement("img",{src:a.preview})))}),u=c.id,v=c.formID,w=c.isRequired;(0,_react.useEffect)(function(){return function(){h.forEach(function(a){return URL.revokeObjectURL(a.preview)})}},[h]);return _react["default"].createElement("div",{className:"container"},_react["default"].createElement("div",o({className:l}),_react["default"].createElement("input",_extends({id:"input_".concat(v,"_").concat(u),name:"input_".concat(u),type:"file",required:w},p())),t&&_react["default"].createElement("div",{className:"preview"},t),_react["default"].createElement("p",{dangerouslySetInnerHTML:{__html:b||"Drag 'n' drop some files here, or click to select files"}})))}var _default=Accept;exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9GaWVsZHMvRmlsZXVwbG9hZC9HRkRyb3B6b25lLmpzeCJdLCJuYW1lcyI6WyJBY2NlcHQiLCJkcm9wem9uZVRleHQiLCJwcm9wcyIsImZpZWxkIiwiZGVmYXVsdFZhbHVlIiwiZmlsZXMiLCJzZXRGaWxlcyIsImNzc0NsYXNzIiwic2V0Y3NzQ2xhc3MiLCJhY2NlcHQiLCJvbkRyb3AiLCJldmVudCIsImlkIiwiZm9ybUlEIiwiaXNSZXF1aXJlZCIsInVwZGF0ZUZvcm0iLCJzZXRUb3VjaGVkIiwidW5zZXRFcnJvciIsIm1hcCIsImZpbGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcmV2aWV3IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwib25EcmFnT3ZlciIsIm9uRHJhZ0xlYXZlIiwib25Ecm9wQWNjZXB0ZWQiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiaXNEcmFnQWN0aXZlIiwiaXNEcmFnQWNjZXB0IiwiaXNEcmFnUmVqZWN0IiwidGh1bWJzIiwibGVuZ3RoIiwibmFtZSIsImZvckVhY2giLCJyZXZva2VPYmplY3RVUkwiLCJjbGFzc05hbWUiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiIrekVBR0EsUUFBU0EsQ0FBQUEsTUFBVCxHQUE0QyxJQUExQkMsQ0FBQUEsQ0FBMEIsR0FBMUJBLFlBQTBCLENBQVRDLENBQVMsOENBQ2xDQyxDQURrQyxDQUN4QkQsQ0FEd0IsQ0FDbENDLEtBRGtDLENBRWxDQyxDQUZrQyxFQUVqQkQsQ0FBSyxFQUFJLEVBRlEsRUFFbENDLFlBRmtDLEdBR2hCLG9CQUFTQSxDQUFZLENBQUcsQ0FBQ0EsQ0FBRCxDQUFILENBQW9CLEVBQXpDLENBSGdCLHVCQUduQ0MsQ0FIbUMsTUFHNUJDLENBSDRCLFFBSVYsb0JBQVMsVUFBVCxDQUpVLHVCQUluQ0MsQ0FKbUMsTUFJekJDLENBSnlCLFFBT3hDLCtCQUFZLENBQ1pDLE1BQU0sQ0FBRSxTQURJLENBRVpDLE1BQU0sQ0FBRSxnQkFBQ0MsQ0FBRCxD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ZWFjdCc7XG5pbXBvcnQgeyB1c2VEcm9wem9uZSB9IGZyb20gJ3JlYWN0LWRyb3B6b25lJztcblxuZnVuY3Rpb24gQWNjZXB0KHsgZHJvcHpvbmVUZXh0LCAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHsgZmllbGQgfSA9IHByb3BzO1xuICBjb25zdCB7IGRlZmF1bHRWYWx1ZSB9ID0gZmllbGQgfHwgW107XG4gIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlID8gW2RlZmF1bHRWYWx1ZV0gOiBbXSk7XG4gIGNvbnN0IFtjc3NDbGFzcywgc2V0Y3NzQ2xhc3NdID0gdXNlU3RhdGUoJ2Ryb3B6b25lJyk7XG4gIGNvbnN0IHtcbiBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSwgaXNEcmFnQWNjZXB0LCBpc0RyYWdSZWplY3QgXG59ID0gdXNlRHJvcHpvbmUoe1xuICAgIGFjY2VwdDogJ2ltYWdlLyonLFxuICAgIG9uRHJvcDogKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7XG4gaWQsIGZvcm1JRCwgZmllbGQsIGlzUmVxdWlyZWQsIHVwZGF0ZUZvcm0sIHNldFRvdWNoZWQsIHVuc2V0RXJyb3IgXG59ID0gcHJvcHM7XG4gICAgICBzZXRGaWxlcyhcbiAgICAgICAgZXZlbnQubWFwKGZpbGUgPT4gT2JqZWN0LmFzc2lnbihmaWxlLCB7XG4gICAgICAgICAgICBwcmV2aWV3OiBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpLFxuICAgICAgICAgIH0pLCksXG4gICAgICApO1xuICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICB1bnNldEVycm9yKGlkKTtcbiAgICB9LFxuICAgIG9uRHJhZ092ZXI6IChldmVudCkgPT4ge1xuICAgICAgc2V0Y3NzQ2xhc3MoJ2Ryb3B6b25lIG92ZXInKTtcbiAgICB9LFxuICAgIG9uRHJhZ0xlYXZlOiAoZXZlbnQpID0+IHtcbiAgICAgIHNldGNzc0NsYXNzKCdkcm9wem9uZScpO1xuICAgIH0sXG4gICAgb25Ecm9wQWNjZXB0ZWQ6IChldmVudCkgPT4ge1xuICAgICAgc2V0Y3NzQ2xhc3MoJ2Ryb3B6b25lJyk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgdGh1bWJzID0gICAgZmlsZXNcbiAgICAmJiAhIWZpbGVzLmxlbmd0aCA+IDBcbiAgICAmJiBmaWxlcy5tYXAoZmlsZSA9PiAoXG4gICAgICA8ZGl2IGtleT17ZmlsZS5uYW1lfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIHNyYz17ZmlsZS5wcmV2aWV3fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICkpO1xuICBjb25zdCB7IGlkLCBmb3JtSUQsIGlzUmVxdWlyZWQgfSA9IHByb3BzO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiAoKSA9PiB7XG4gICAgICAvLyBNYWtlIHN1cmUgdG8gcmV2b2tlIHRoZSBkYXRhIHVyaXMgdG8gYXZvaWQgbWVtb3J5IGxlYWtzXG4gICAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4gVVJMLnJldm9rZU9iamVjdFVSTChmaWxlLnByZXZpZXcpKTtcbiAgICB9LFxuICAgIFtmaWxlc10sXG4gICk7XG5cbiAgY29uc3QgdGV4dCA9IGRyb3B6b25lVGV4dCB8fCAnRHJhZyBcXCduXFwnIGRyb3Agc29tZSBmaWxlcyBoZXJlLCBvciBjbGljayB0byBzZWxlY3QgZmlsZXMnO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgey4uLmdldFJvb3RQcm9wcyh7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjc3NDbGFzcyxcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSUR9XyR7aWR9YH1cbiAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICB7Li4uZ2V0SW5wdXRQcm9wcygpfVxuICAgICAgICAvPlxuICAgICAgICB7dGh1bWJzICYmIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld1wiPnt0aHVtYnN9PC9kaXY+fVxuICAgICAgICA8cCBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRleHQgfX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NlcHQ7XG4iXX0=