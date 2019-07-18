"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var Button = _ref.Button,
      Loading = _ref.Loading,
      text = _ref.text,
      showLoading = _ref.showLoading,
      className = _ref.className,
      isDisabled = _ref.isDisabled,
      icon = _ref.icon;
  var SButton = Button ? Button : "button";
  return _react["default"].createElement(SButton, {
    type: "submit",
    className: "form-submit-button button ".concat(className),
    disabled: showLoading || isDisabled,
    mr: 20
  }, showLoading && Loading ? _react["default"].createElement(Loading, {
    inline: true
  }) : text, text);
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvQnV0dG9uLmpzeCJdLCJuYW1lcyI6WyJCdXR0b24iLCJMb2FkaW5nIiwidGV4dCIsInNob3dMb2FkaW5nIiwiY2xhc3NOYW1lIiwiaXNEaXNhYmxlZCIsImljb24iLCJTQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7ZUFFZSx3QkFRVDtBQUFBLE1BUExBLE1BT0ssUUFQTEEsTUFPSztBQUFBLE1BTkxDLE9BTUssUUFOTEEsT0FNSztBQUFBLE1BTExDLElBS0ssUUFMTEEsSUFLSztBQUFBLE1BSkxDLFdBSUssUUFKTEEsV0FJSztBQUFBLE1BSExDLFNBR0ssUUFITEEsU0FHSztBQUFBLE1BRkxDLFVBRUssUUFGTEEsVUFFSztBQUFBLE1BRExDLElBQ0ssUUFETEEsSUFDSztBQUNMLE1BQU1DLE9BQU8sR0FBR1AsTUFBTSxHQUFHQSxNQUFILEdBQVksUUFBbEM7QUFDQSxTQUNDLGdDQUFDLE9BQUQ7QUFDQyxJQUFBLElBQUksRUFBQyxRQUROO0FBRUMsSUFBQSxTQUFTLHNDQUErQkksU0FBL0IsQ0FGVjtBQUdDLElBQUEsUUFBUSxFQUFFRCxXQUFXLElBQUlFLFVBSDFCO0FBSUMsSUFBQSxFQUFFLEVBQUU7QUFKTCxLQU1FRixXQUFXLElBQUlGLE9BQWYsR0FBeUIsZ0NBQUMsT0FBRDtBQUFTLElBQUEsTUFBTTtBQUFmLElBQXpCLEdBQThDQyxJQU5oRCxFQU9FQSxJQVBGLENBREQ7QUFXQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuXHRCdXR0b24sXG5cdExvYWRpbmcsXG5cdHRleHQsXG5cdHNob3dMb2FkaW5nLFxuXHRjbGFzc05hbWUsXG5cdGlzRGlzYWJsZWQsXG5cdGljb25cbn0pID0+IHtcblx0Y29uc3QgU0J1dHRvbiA9IEJ1dHRvbiA/IEJ1dHRvbiA6IFwiYnV0dG9uXCI7XG5cdHJldHVybiAoXG5cdFx0PFNCdXR0b25cblx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1zdWJtaXQtYnV0dG9uIGJ1dHRvbiAke2NsYXNzTmFtZX1gfVxuXHRcdFx0ZGlzYWJsZWQ9e3Nob3dMb2FkaW5nIHx8IGlzRGlzYWJsZWR9XG5cdFx0XHRtcj17MjB9XG5cdFx0PlxuXHRcdFx0e3Nob3dMb2FkaW5nICYmIExvYWRpbmcgPyA8TG9hZGluZyBpbmxpbmUgLz4gOiB0ZXh0fVxuXHRcdFx0e3RleHR9XG5cdFx0PC9TQnV0dG9uPlxuXHQpO1xufTtcbiJdfQ==