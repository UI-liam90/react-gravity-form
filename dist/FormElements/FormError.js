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
      errors = _ref.errors,
      fields = _ref.fields;
  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "form-error"
  }, errorMessage), _react["default"].createElement("ul", null, Object.keys(errors).map(function (item) {
    return _react["default"].createElement("li", {
      className: "travelcompany-input",
      key: item
    }, _react["default"].createElement("span", {
      className: "input-label"
    }, fields[item].label, ": ", errors[item]));
  })));
};

FormError.propTypes = {
  errorMessage: _propTypes["default"].string.isRequired,
  errors: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].array]).isRequired,
  fields: _propTypes["default"].object.isRequired
};
var _default = FormError;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvRm9ybUVycm9yLmpzeCJdLCJuYW1lcyI6WyJGb3JtRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJlcnJvcnMiLCJmaWVsZHMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSIsImxhYmVsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsIm9iamVjdCIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLE1BQUdDLFlBQUgsUUFBR0EsWUFBSDtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsTUFBekIsUUFBeUJBLE1BQXpCO0FBQUEsU0FDaEIsNkNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQTZCRixZQUE3QixDQURGLEVBRUUsNENBQ0dHLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxNQUFaLEVBQW9CSSxHQUFwQixDQUF3QixVQUFBQyxJQUFJO0FBQUEsV0FDM0I7QUFBSSxNQUFBLFNBQVMsRUFBQyxxQkFBZDtBQUFvQyxNQUFBLEdBQUcsRUFBRUE7QUFBekMsT0FDRTtBQUFNLE1BQUEsU0FBUyxFQUFDO0FBQWhCLE9BQ0dKLE1BQU0sQ0FBQ0ksSUFBRCxDQUFOLENBQWFDLEtBRGhCLFFBQ3lCTixNQUFNLENBQUNLLElBQUQsQ0FEL0IsQ0FERixDQUQyQjtBQUFBLEdBQTVCLENBREgsQ0FGRixDQURnQjtBQUFBLENBQWxCOztBQWVBUCxTQUFTLENBQUNTLFNBQVYsR0FBc0I7QUFDcEJSLEVBQUFBLFlBQVksRUFBRVMsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRFg7QUFFcEJWLEVBQUFBLE1BQU0sRUFBRVEsc0JBQVVHLFNBQVYsQ0FBb0IsQ0FBQ0gsc0JBQVVJLE1BQVgsRUFBbUJKLHNCQUFVSyxLQUE3QixDQUFwQixFQUF5REgsVUFGN0M7QUFHcEJULEVBQUFBLE1BQU0sRUFBRU8sc0JBQVVJLE1BQVYsQ0FBaUJGO0FBSEwsQ0FBdEI7ZUFNZVosUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBGb3JtRXJyb3IgPSAoeyBlcnJvck1lc3NhZ2UsIGVycm9ycywgZmllbGRzIH0pID0+IChcbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj57ZXJyb3JNZXNzYWdlfTwvZGl2PlxuICAgIDx1bD5cbiAgICAgIHtPYmplY3Qua2V5cyhlcnJvcnMpLm1hcChpdGVtID0+IChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRyYXZlbGNvbXBhbnktaW5wdXRcIiBrZXk9e2l0ZW19PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWxhYmVsXCI+XG4gICAgICAgICAgICB7ZmllbGRzW2l0ZW1dLmxhYmVsfToge2Vycm9yc1tpdGVtXX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICA8L2Rpdj5cbik7XG5cbkZvcm1FcnJvci5wcm9wVHlwZXMgPSB7XG4gIGVycm9yTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBlcnJvcnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5hcnJheV0pLmlzUmVxdWlyZWQsXG4gIGZpZWxkczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUVycm9yO1xuIl19