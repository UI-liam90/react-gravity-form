"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FormError = function FormError(_ref) {
  var errorMessage = _ref.errorMessage,
      SFormError = _ref.SFormError;
  var Wrapper = SFormError || 'div';
  return _react["default"].createElement(Wrapper, null, _react["default"].createElement("div", {
    className: "form-error"
  }, errorMessage));
};

FormError.propTypes = {
  errorMessage: _propTypes["default"].string.isRequired
};
var _default = FormError;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvRm9ybUVycm9yLmpzeCJdLCJuYW1lcyI6WyJGb3JtRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJTRm9ybUVycm9yIiwiV3JhcHBlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWtDO0FBQUEsTUFBL0JDLFlBQStCLFFBQS9CQSxZQUErQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDbEQsTUFBTUMsT0FBTyxHQUFHRCxVQUFVLElBQUksS0FBOUI7QUFDQSxTQUNFLGdDQUFDLE9BQUQsUUFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBNkJELFlBQTdCLENBREYsQ0FERjtBQUtELENBUEQ7O0FBU0FELFNBQVMsQ0FBQ0ksU0FBVixHQUFzQjtBQUNwQkgsRUFBQUEsWUFBWSxFQUFFSSxzQkFBVUMsTUFBVixDQUFpQkM7QUFEWCxDQUF0QjtlQUllUCxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEZvcm1FcnJvciA9ICh7IGVycm9yTWVzc2FnZSwgU0Zvcm1FcnJvciB9KSA9PiB7XG4gIGNvbnN0IFdyYXBwZXIgPSBTRm9ybUVycm9yIHx8ICdkaXYnO1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+e2Vycm9yTWVzc2FnZX08L2Rpdj5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5Gb3JtRXJyb3IucHJvcFR5cGVzID0ge1xuICBlcnJvck1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1FcnJvcjtcbiJdfQ==