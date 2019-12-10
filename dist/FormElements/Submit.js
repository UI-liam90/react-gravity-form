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
  var SButton = Button || 'button';
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: "footer"
  }, _react["default"].createElement("input", {
    type: "hidden",
    name: "nonce",
    value: formData.nonce
  }), _react["default"].createElement(SButton, {
    type: "submit",
    mr: 20,
    disabled: isDisabled || submitting
  }, formData.button.text), formData.lastPageButton && _react["default"].createElement(SButton, {
    className: "prev",
    onClick: function onClick(e) {
      return prevStep(e);
    }
  }, formData.lastPageButton.text)), Loading && _react["default"].createElement(Loading, {
    isLoading: submitting
  }));
};

var _default = Submit;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvU3VibWl0LmpzeCJdLCJuYW1lcyI6WyJTdWJtaXQiLCJCdXR0b24iLCJMb2FkaW5nIiwiZm9ybURhdGEiLCJpc0Rpc2FibGVkIiwic3VibWl0dGluZyIsInByZXZTdGVwIiwiU0J1dHRvbiIsIm5vbmNlIiwiYnV0dG9uIiwidGV4dCIsImxhc3RQYWdlQnV0dG9uIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FFVDtBQUFBLE1BRExDLE1BQ0ssUUFETEEsTUFDSztBQUFBLE1BREdDLE9BQ0gsUUFER0EsT0FDSDtBQUFBLE1BRFlDLFFBQ1osUUFEWUEsUUFDWjtBQUFBLE1BRHNCQyxVQUN0QixRQURzQkEsVUFDdEI7QUFBQSxNQURrQ0MsVUFDbEMsUUFEa0NBLFVBQ2xDO0FBQUEsTUFEOENDLFFBQzlDLFFBRDhDQSxRQUM5QztBQUNKLE1BQU1DLE9BQU8sR0FBR04sTUFBTSxJQUFJLFFBQTFCO0FBRUEsU0FDRSxnQ0FBQyxpQkFBRCxDQUFPLFFBQVAsUUFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRTtBQUFPLElBQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsSUFBQSxJQUFJLEVBQUMsT0FBMUI7QUFBa0MsSUFBQSxLQUFLLEVBQUVFLFFBQVEsQ0FBQ0s7QUFBbEQsSUFERixFQUVFLGdDQUFDLE9BQUQ7QUFBUyxJQUFBLElBQUksRUFBQyxRQUFkO0FBQXVCLElBQUEsRUFBRSxFQUFFLEVBQTNCO0FBQStCLElBQUEsUUFBUSxFQUFFSixVQUFVLElBQUlDO0FBQXZELEtBQ0dGLFFBQVEsQ0FBQ00sTUFBVCxDQUFnQkMsSUFEbkIsQ0FGRixFQUtHUCxRQUFRLENBQUNRLGNBQVQsSUFDQyxnQ0FBQyxPQUFEO0FBQVMsSUFBQSxTQUFTLEVBQUMsTUFBbkI7QUFBMEIsSUFBQSxPQUFPLEVBQUUsaUJBQUFDLENBQUM7QUFBQSxhQUFJTixRQUFRLENBQUNNLENBQUQsQ0FBWjtBQUFBO0FBQXBDLEtBQ0dULFFBQVEsQ0FBQ1EsY0FBVCxDQUF3QkQsSUFEM0IsQ0FOSixDQURGLEVBWUdSLE9BQU8sSUFBSSxnQ0FBQyxPQUFEO0FBQVMsSUFBQSxTQUFTLEVBQUVHO0FBQXBCLElBWmQsQ0FERjtBQWdCRCxDQXJCRDs7ZUF1QmVMLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTdWJtaXQgPSAoe1xuIEJ1dHRvbiwgTG9hZGluZywgZm9ybURhdGEsIGlzRGlzYWJsZWQsIHN1Ym1pdHRpbmcsIHByZXZTdGVwIFxufSkgPT4ge1xuICBjb25zdCBTQnV0dG9uID0gQnV0dG9uIHx8ICdidXR0b24nO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwibm9uY2VcIiB2YWx1ZT17Zm9ybURhdGEubm9uY2V9IC8+XG4gICAgICAgIDxTQnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBtcj17MjB9IGRpc2FibGVkPXtpc0Rpc2FibGVkIHx8IHN1Ym1pdHRpbmd9PlxuICAgICAgICAgIHtmb3JtRGF0YS5idXR0b24udGV4dH1cbiAgICAgICAgPC9TQnV0dG9uPlxuICAgICAgICB7Zm9ybURhdGEubGFzdFBhZ2VCdXR0b24gJiYgKFxuICAgICAgICAgIDxTQnV0dG9uIGNsYXNzTmFtZT1cInByZXZcIiBvbkNsaWNrPXtlID0+IHByZXZTdGVwKGUpfT5cbiAgICAgICAgICAgIHtmb3JtRGF0YS5sYXN0UGFnZUJ1dHRvbi50ZXh0fVxuICAgICAgICAgIDwvU0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAge0xvYWRpbmcgJiYgPExvYWRpbmcgaXNMb2FkaW5nPXtzdWJtaXR0aW5nfSAvPn1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3VibWl0O1xuIl19