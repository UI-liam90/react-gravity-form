"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var forceValidation=function(a,b,c,d){var e=a?Object.keys(b).some(function(c){return b[c].pageNumber===a&&!b[c].hideField&&b[c].valid}):Object.keys(b).some(function(a){return!b[a].hideField&&b[a].valid});if(e){var f=a?Object.keys(b).filter(function(c){return b[c].pageNumber===a}):Object.keys(b);return setTouchedFields(f,c,d),!1}return!0};function setTouchedFields(a,b,c){var d=a.reduce(function(a,b){return a=_objectSpread(_objectSpread({},a),{},(0,_defineProperty2["default"])({},b,!0)),a},{});b(!0),c(d)}var _default=forceValidation;exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmb3JjZVZhbGlkYXRpb24iLCJwYWdlIiwiZm9ybVZhbHVlcyIsInNldFNob3dQYWdlVmFsaWRhdGlvbk1zZyIsInNldFRvdWNoZWQiLCJub3RWYWxpZCIsIk9iamVjdCIsImtleXMiLCJzb21lIiwieCIsInBhZ2VOdW1iZXIiLCJoaWRlRmllbGQiLCJ2YWxpZCIsImZpZWxkcyIsImZpbHRlciIsInNldFRvdWNoZWRGaWVsZHMiLCJjdXJyZW50UGFnZVRvdWNoZWQiLCJyZWR1Y2UiLCJjdXJyZW50VG91Y2hlZCIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkyIiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0hlbHBlcnMvZm9ybS9mb3JjZVZhbGlkYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGb3JjZSB2YWxpZGF0ZSBjdXJyZW50IHBhZ2UgZmllbGRzXG4gKiBAcGFyYW0ge251bWJlcn0gcGFnZVxuICovXG5cbmNvbnN0IGZvcmNlVmFsaWRhdGlvbiA9IChwYWdlLCBmb3JtVmFsdWVzLCBzZXRTaG93UGFnZVZhbGlkYXRpb25Nc2csIHNldFRvdWNoZWQpID0+IHtcbiAgLy8gY2hlY2sgaWYgY3VycmVudCBvYWdlIGhhcyByZXF1aXJlZCBmaWVsZHNcbiAgY29uc3Qgbm90VmFsaWQgPSBwYWdlXG4gICAgPyBPYmplY3Qua2V5cyhmb3JtVmFsdWVzKS5zb21lKFxuICAgICAgICAoeCkgPT4gZm9ybVZhbHVlc1t4XS5wYWdlTnVtYmVyID09PSBwYWdlICYmICFmb3JtVmFsdWVzW3hdLmhpZGVGaWVsZCAmJiBmb3JtVmFsdWVzW3hdLnZhbGlkXG4gICAgICApXG4gICAgOiBPYmplY3Qua2V5cyhmb3JtVmFsdWVzKS5zb21lKCh4KSA9PiAhZm9ybVZhbHVlc1t4XS5oaWRlRmllbGQgJiYgZm9ybVZhbHVlc1t4XS52YWxpZCk7XG5cbiAgaWYgKG5vdFZhbGlkKSB7XG4gICAgLy8gbWFrZSBhbGwgZmllbGRzIG9mIGN1cnJlbnQgcGFnZSB0byBiZSB0b3VjaGVkIHRvIHRyaWdnZXIgZmllbGQgdmFsaWRhdGlvblxuICAgIGNvbnN0IGZpZWxkcyA9IHBhZ2VcbiAgICAgID8gT2JqZWN0LmtleXMoZm9ybVZhbHVlcykuZmlsdGVyKCh4KSA9PiBmb3JtVmFsdWVzW3hdLnBhZ2VOdW1iZXIgPT09IHBhZ2UpXG4gICAgICA6IE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpO1xuICAgIHNldFRvdWNoZWRGaWVsZHMoZmllbGRzLCBzZXRTaG93UGFnZVZhbGlkYXRpb25Nc2csIHNldFRvdWNoZWQpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIE1ha2UgZmllbGRzIG9mIGN1cnJlbnQgcGFnZSB0b3VjaGVkXG4gKiBpZiBub24gbXVsdGlwYWdlcyBmb3JtIC0gbWFrZSBhbGwgZmllbGRzIHRvdWNoZWRcbiAqIEBwYXJhbSB7YXJyYXl9IGZpZWxkc1xuICogQHBhcmFtIHtmbn0gc2V0U2hvd1BhZ2VWYWxpZGF0aW9uTXNnXG4gKiBAcGFyYW0ge2ZufSBzZXRUb3VjaGVkXG4gKi9cbmZ1bmN0aW9uIHNldFRvdWNoZWRGaWVsZHMoZmllbGRzLCBzZXRTaG93UGFnZVZhbGlkYXRpb25Nc2csIHNldFRvdWNoZWQpIHtcbiAgY29uc3QgY3VycmVudFBhZ2VUb3VjaGVkID0gZmllbGRzLnJlZHVjZSgoY3VycmVudFRvdWNoZWQsIHgpID0+IHtcbiAgICBjdXJyZW50VG91Y2hlZCA9IHsgLi4uY3VycmVudFRvdWNoZWQsIFt4XTogdHJ1ZSB9O1xuICAgIHJldHVybiBjdXJyZW50VG91Y2hlZDtcbiAgfSwge30pO1xuXG4gIHNldFNob3dQYWdlVmFsaWRhdGlvbk1zZyh0cnVlKTtcbiAgc2V0VG91Y2hlZChjdXJyZW50UGFnZVRvdWNoZWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JjZVZhbGlkYXRpb247XG4iXSwibWFwcGluZ3MiOiJpNEJBS0EsR0FBTSxDQUFBQSxlQUFlLENBQUcsUUFBQUEsQ0FBQ0MsQ0FBSSxDQUFFQyxDQUFVLENBQUVDLENBQXdCLENBQUVDLENBQVUsQ0FBSyxDQUVsRixHQUFNLENBQUFDLENBQVEsQ0FBR0osQ0FBSSxDQUNqQkssTUFBTSxDQUFDQyxJQUFJLENBQUNMLENBQVUsQ0FBQyxDQUFDTSxJQUFJLENBQzFCLFNBQUNDLENBQUMsUUFBSyxDQUFBUCxDQUFVLENBQUNPLENBQUMsQ0FBQyxDQUFDQyxVQUFVLEdBQUtULENBQUksRUFBSSxDQUFDQyxDQUFVLENBQUNPLENBQUMsQ0FBQyxDQUFDRSxTQUFTLEVBQUlULENBQVUsQ0FBQ08sQ0FBQyxDQUFDLENBQUNHLEtBQUssQ0FDN0YsQ0FBQyxDQUNETixNQUFNLENBQUNDLElBQUksQ0FBQ0wsQ0FBVSxDQUFDLENBQUNNLElBQUksQ0FBQyxTQUFDQyxDQUFDLFFBQUssQ0FBQ1AsQ0FBVSxDQUFDTyxDQUFDLENBQUMsQ0FBQ0UsU0FBUyxFQUFJVCxDQUFVLENBQUNPLENBQUMsQ0FBQyxDQUFDRyxLQUFLLEVBQUMsQ0FFeEYsR0FBSVAsQ0FBUSxDQUFFLENBRVosR0FBTSxDQUFBUSxDQUFNLENBQUdaLENBQUksQ0FDZkssTUFBTSxDQUFDQyxJQUFJLENBQUNMLENBQVUsQ0FBQyxDQUFDWSxNQUFNLENBQUMsU0FBQ0wsQ0FBQyxRQUFLLENBQUFQLENBQVUsQ0FBQ08sQ0FBQyxDQUFDLENBQUNDLFVBQVUsR0FBS1QsQ0FBSSxFQUFDLENBQ3hFSyxNQUFNLENBQUNDLElBQUksQ0FBQ0wsQ0FBVSxDQUFDLENBRzNCLE1BRkEsQ0FBQWEsZ0JBQWdCLENBQUNGLENBQU0sQ0FBRVYsQ0FBd0IsQ0FBRUMsQ0FBVSxDQUFDLEdBR2hFLENBRUEsUUFDRixDQUFDLENBU0QsUUFBUyxDQUFBVyxnQkFBZ0JBLENBQUNGLENBQU0sQ0FBRVYsQ0FBd0IsQ0FBRUMsQ0FBVSxDQUFFLENBQ3RFLEdBQU0sQ0FBQVksQ0FBa0IsQ0FBR0gsQ0FBTSxDQUFDSSxNQUFNLENBQUMsU0FBQ0MsQ0FBYyxDQUFFVCxDQUFDLENBQUssQ0FFOUQsTUFEQSxDQUFBUyxDQUFjLENBQUFDLGFBQUEsQ0FBQUEsYUFBQSxJQUFRRCxDQUFjLFFBQUFFLGdCQUFBLGdCQUFHWCxDQUFDLEtBQVMsQ0FDMUNTLENBQ1QsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBRU5mLENBQXdCLEdBQUssQ0FBQyxDQUM5QkMsQ0FBVSxDQUFDWSxDQUFrQixDQUMvQixDQUFDLElBQUFLLFFBQUEsQ0FFY3JCLGVBQWUsQ0FBQXNCLE9BQUEsWUFBQUQsUUFBQSJ9