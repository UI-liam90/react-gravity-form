"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Submit = function Submit(_ref) {
  var Button = _ref.Button,
      Loading = _ref.Loading,
      formData = _ref.formData,
      isDisabled = _ref.isDisabled,
      submitting = _ref.submitting,
      prevStep = _ref.prevStep;
  var SButton = Button ? Button : "button";
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: "footer"
  }, _react["default"].createElement("input", {
    type: "hidden",
    name: "nonce",
    value: formData.nonce
  }), _react["default"].createElement(SButton, {
    mr: 20,
    disabled: isDisabled || submitting
  }, formData.button.text), formData.lastPageButton && _react["default"].createElement(SButton, {
    onClick: function onClick(e) {
      return prevStep(e);
    }
  }, formData.lastPageButton.text)), Loading && _react["default"].createElement(Loading, {
    isLoading: submitting
  }));
};

var _default = Submit;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvU3VibWl0LmpzeCJdLCJuYW1lcyI6WyJTdWJtaXQiLCJCdXR0b24iLCJMb2FkaW5nIiwiZm9ybURhdGEiLCJpc0Rpc2FibGVkIiwic3VibWl0dGluZyIsInByZXZTdGVwIiwiU0J1dHRvbiIsIm5vbmNlIiwiYnV0dG9uIiwidGV4dCIsImxhc3RQYWdlQnV0dG9uIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FPVDtBQUFBLE1BTkxDLE1BTUssUUFOTEEsTUFNSztBQUFBLE1BTExDLE9BS0ssUUFMTEEsT0FLSztBQUFBLE1BSkxDLFFBSUssUUFKTEEsUUFJSztBQUFBLE1BSExDLFVBR0ssUUFITEEsVUFHSztBQUFBLE1BRkxDLFVBRUssUUFGTEEsVUFFSztBQUFBLE1BRExDLFFBQ0ssUUFETEEsUUFDSztBQUNMLE1BQU1DLE9BQU8sR0FBR04sTUFBTSxHQUFHQSxNQUFILEdBQVksUUFBbEM7QUFFQSxTQUNDLGdDQUFDLGlCQUFELENBQU8sUUFBUCxRQUNDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNDO0FBQU8sSUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixJQUFBLElBQUksRUFBQyxPQUExQjtBQUFrQyxJQUFBLEtBQUssRUFBRUUsUUFBUSxDQUFDSztBQUFsRCxJQURELEVBRUMsZ0NBQUMsT0FBRDtBQUFTLElBQUEsRUFBRSxFQUFFLEVBQWI7QUFBaUIsSUFBQSxRQUFRLEVBQUVKLFVBQVUsSUFBSUM7QUFBekMsS0FDRUYsUUFBUSxDQUFDTSxNQUFULENBQWdCQyxJQURsQixDQUZELEVBS0VQLFFBQVEsQ0FBQ1EsY0FBVCxJQUNBLGdDQUFDLE9BQUQ7QUFBUyxJQUFBLE9BQU8sRUFBRSxpQkFBQUMsQ0FBQztBQUFBLGFBQUlOLFFBQVEsQ0FBQ00sQ0FBRCxDQUFaO0FBQUE7QUFBbkIsS0FDRVQsUUFBUSxDQUFDUSxjQUFULENBQXdCRCxJQUQxQixDQU5GLENBREQsRUFZRVIsT0FBTyxJQUFJLGdDQUFDLE9BQUQ7QUFBUyxJQUFBLFNBQVMsRUFBRUc7QUFBcEIsSUFaYixDQUREO0FBZ0JBLENBMUJEOztlQTRCZUwsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU3VibWl0ID0gKHtcblx0QnV0dG9uLFxuXHRMb2FkaW5nLFxuXHRmb3JtRGF0YSxcblx0aXNEaXNhYmxlZCxcblx0c3VibWl0dGluZyxcblx0cHJldlN0ZXBcbn0pID0+IHtcblx0Y29uc3QgU0J1dHRvbiA9IEJ1dHRvbiA/IEJ1dHRvbiA6IFwiYnV0dG9uXCI7XG5cblx0cmV0dXJuIChcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJub25jZVwiIHZhbHVlPXtmb3JtRGF0YS5ub25jZX0gLz5cblx0XHRcdFx0PFNCdXR0b24gbXI9ezIwfSBkaXNhYmxlZD17aXNEaXNhYmxlZCB8fCBzdWJtaXR0aW5nfT5cblx0XHRcdFx0XHR7Zm9ybURhdGEuYnV0dG9uLnRleHR9XG5cdFx0XHRcdDwvU0J1dHRvbj5cblx0XHRcdFx0e2Zvcm1EYXRhLmxhc3RQYWdlQnV0dG9uICYmIChcblx0XHRcdFx0XHQ8U0J1dHRvbiBvbkNsaWNrPXtlID0+IHByZXZTdGVwKGUpfT5cblx0XHRcdFx0XHRcdHtmb3JtRGF0YS5sYXN0UGFnZUJ1dHRvbi50ZXh0fVxuXHRcdFx0XHRcdDwvU0J1dHRvbj5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdFx0e0xvYWRpbmcgJiYgPExvYWRpbmcgaXNMb2FkaW5nPXtzdWJtaXR0aW5nfSAvPn1cblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3VibWl0O1xuIl19