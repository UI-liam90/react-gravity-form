"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_index=require("./index");function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var _default=function(a,b,c,d){for(var e,f=Object.keys(b),g=!1,h=_objectSpread({},b),j=function _loop(){var d=f[k];if(a[d]){var e=c.fields.filter(function(a){return a.id==d});if(!e[0])return"continue";var i=(0,_index.getFieldPrepopulatedValue)(e[0],[],a);i&&b[d]&&b[d].value&&b[d].value!=i&&(h[d].value=i,g=!0)}},k=0;k<f.length;k++)e=j(),"continue"===e;g&&d(h)};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsInBvcHVsYXRlZEVudHJ5IiwiZm9ybVZhbHVlcyIsImZvcm1EYXRhIiwic2V0Rm9ybVZhbHVlcyIsImUiLCJrZXlzIiwiT2JqZWN0IiwiY2hhbmdlZCIsInRtcFZhbHVlcyIsIl9vYmplY3RTcHJlYWQiLCJqIiwiX2xvb3AiLCJpZCIsImkiLCJmaWVsZCIsImZpZWxkcyIsImZpbHRlciIsIml0ZW0iLCJ2YWx1ZSIsImdldEZpZWxkUHJlcG9wdWxhdGVkVmFsdWUiLCJsZW5ndGgiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0hlbHBlcnMvZm9ybS91cGRhdGVGaWVsZHNWYWx1ZXNCYXNlZE9uRW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RmllbGRQcmVwb3B1bGF0ZWRWYWx1ZSB9IGZyb20gJy4vaW5kZXgnXG5cbi8qKlxuICogVXBkYXRlIGZpZWxkIHZhbHVlcyBiYXNlZCBvbiBuZXcgcHJvcHMgY29taW5nXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgKHBvcHVsYXRlZEVudHJ5LCBmb3JtVmFsdWVzLCBmb3JtRGF0YSwgc2V0Rm9ybVZhbHVlcykgPT4ge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZm9ybVZhbHVlcyk7XG5cbiAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgY29uc3QgdG1wVmFsdWVzID0geyAuLi5mb3JtVmFsdWVzIH07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaWQgPSBrZXlzW2ldO1xuICAgIGlmIChwb3B1bGF0ZWRFbnRyeVtpZF0pIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gZm9ybURhdGEuZmllbGRzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCA9PSBpZCk7XG4gICAgICBpZiAoIWZpZWxkWzBdKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgdmFsdWUgPSBnZXRGaWVsZFByZXBvcHVsYXRlZFZhbHVlKFxuICAgICAgICBmaWVsZFswXSxcbiAgICAgICAgW10sXG4gICAgICAgIHBvcHVsYXRlZEVudHJ5XG4gICAgICApO1xuICAgICAgaWYgKFxuICAgICAgICB2YWx1ZSAmJlxuICAgICAgICBmb3JtVmFsdWVzW2lkXSAmJlxuICAgICAgICBmb3JtVmFsdWVzW2lkXS52YWx1ZSAmJlxuICAgICAgICBmb3JtVmFsdWVzW2lkXS52YWx1ZSAhPSB2YWx1ZVxuICAgICAgKSB7XG4gICAgICAgIHRtcFZhbHVlc1tpZF0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChjaGFuZ2VkKSB7XG4gICAgc2V0Rm9ybVZhbHVlcyh0bXBWYWx1ZXMpO1xuICB9XG59O1xuIl0sIm1hcHBpbmdzIjoidzZCQU1lLFFBQUFBLENBQUNDLENBQWMsQ0FBRUMsQ0FBVSxDQUFFQyxDQUFRLENBQUVDLENBQWEsQ0FBSyxDQU10RSxRQUFBQyxDQUFBLENBTE1DLENBQUksQ0FBR0MsTUFBTSxDQUFDRCxJQUFJLENBQUNKLENBQVUsQ0FBQyxDQUVoQ00sQ0FBTyxHQUFRLENBQ2JDLENBQVMsQ0FBQUMsYUFBQSxJQUFRUixDQUFVLENBQUUsQ0FBQVMsQ0FBQSxVQUFBQyxNQUFBLENBRUcsQ0FDcEMsR0FBTSxDQUFBQyxDQUFFLENBQUdQLENBQUksQ0FBQ1EsQ0FBQyxDQUFDLENBQ2xCLEdBQUliLENBQWMsQ0FBQ1ksQ0FBRSxDQUFDLENBQUUsQ0FDdEIsR0FBTSxDQUFBRSxDQUFLLENBQUdaLENBQVEsQ0FBQ2EsTUFBTSxDQUFDQyxNQUFNLENBQUMsU0FBQ0MsQ0FBSSxRQUFLLENBQUFBLENBQUksQ0FBQ0wsRUFBRSxFQUFJQSxDQUFFLEVBQUMsQ0FDN0QsR0FBSSxDQUFDRSxDQUFLLENBQUMsQ0FBQyxDQUFDLGtCQUdiLEdBQU0sQ0FBQUksQ0FBSyxDQUFHLEdBQUFDLGdDQUF5QixFQUNyQ0wsQ0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNSLEVBQUUsQ0FDRmQsQ0FDRixDQUFDLENBRUNrQixDQUFLLEVBQ0xqQixDQUFVLENBQUNXLENBQUUsQ0FBQyxFQUNkWCxDQUFVLENBQUNXLENBQUUsQ0FBQyxDQUFDTSxLQUFLLEVBQ3BCakIsQ0FBVSxDQUFDVyxDQUFFLENBQUMsQ0FBQ00sS0FBSyxFQUFJQSxDQUFLLEdBRTdCVixDQUFTLENBQUNJLENBQUUsQ0FBQyxDQUFDTSxLQUFLLENBQUdBLENBQUssQ0FDM0JYLENBQU8sR0FBTyxDQUVsQixDQUNGLENBQUMsQ0F0QlFNLENBQUMsQ0FBRyxDQUFDLENBQUVBLENBQUMsQ0FBR1IsQ0FBSSxDQUFDZSxNQUFNLENBQUVQLENBQUMsRUFBRSxDQUFBVCxDQUFBLENBQUFNLENBQUEsZ0JBQUFOLENBQUEsQ0F1QmhDRyxDQUFPLEVBQ1RKLENBQWEsQ0FBQ0ssQ0FBUyxDQUUzQixDQUFDLENBQUFhLE9BQUEsWUFBQXRCLFFBQUEifQ==