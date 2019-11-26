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
  }, errorMessage));
};

FormError.propTypes = {
  errorMessage: _propTypes["default"].string.isRequired // errors: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  // fields: PropTypes.object.isRequired,

};
var _default = FormError;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvRm9ybUVycm9yLmpzeCJdLCJuYW1lcyI6WyJGb3JtRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJlcnJvcnMiLCJmaWVsZHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLE1BQUdDLFlBQUgsUUFBR0EsWUFBSDtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsTUFBekIsUUFBeUJBLE1BQXpCO0FBQUEsU0FDaEIsNkNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQTZCRixZQUE3QixDQURGLENBRGdCO0FBQUEsQ0FBbEI7O0FBZUFELFNBQVMsQ0FBQ0ksU0FBVixHQUFzQjtBQUNwQkgsRUFBQUEsWUFBWSxFQUFFSSxzQkFBVUMsTUFBVixDQUFpQkMsVUFEWCxDQUVwQjtBQUNBOztBQUhvQixDQUF0QjtlQU1lUCxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEZvcm1FcnJvciA9ICh7IGVycm9yTWVzc2FnZSwgZXJyb3JzLCBmaWVsZHMgfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1lcnJvclwiPntlcnJvck1lc3NhZ2V9PC9kaXY+XG4gICAgey8qIDx1bD5cbiAgICAgIHtPYmplY3Qua2V5cyhlcnJvcnMpLm1hcChpdGVtID0+IChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRyYXZlbGNvbXBhbnktaW5wdXRcIiBrZXk9e2l0ZW19PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWxhYmVsXCI+XG4gICAgICAgICAgICB7ZmllbGRzW2l0ZW1dLmxhYmVsfToge2Vycm9yc1tpdGVtXX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPiAqL31cbiAgPC9kaXY+XG4pO1xuXG5Gb3JtRXJyb3IucHJvcFR5cGVzID0ge1xuICBlcnJvck1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgLy8gZXJyb3JzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYXJyYXldKS5pc1JlcXVpcmVkLFxuICAvLyBmaWVsZHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1FcnJvcjtcbiJdfQ==