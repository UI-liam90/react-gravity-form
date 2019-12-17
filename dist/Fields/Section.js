"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var field = _ref.field,
      hideField = _ref.hideField,
      styledComponents = _ref.styledComponents;
  var cssClass = field.cssClass,
      width = field.width,
      label = field.label,
      description = field.description,
      descriptionPlacement = field.descriptionPlacement;

  var _ref2 = styledComponents || false,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? 'div' : _ref2$Box;

  return _react["default"].createElement(Box, {
    width: width,
    className: "form-field gsection ".concat(cssClass),
    style: {
      display: hideField ? 'none' : undefined
    }
  }, _react["default"].createElement(_react["default"].Fragment, null, descriptionPlacement === 'above' && description && description && _react["default"].createElement("div", {
    className: "description"
  }, description), _react["default"].createElement("h2", {
    className: "gsection_title",
    dangerouslySetInnerHTML: {
      __html: label
    }
  }), descriptionPlacement !== 'above' && description && description && _react["default"].createElement("div", {
    className: "description"
  }, description)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvU2VjdGlvbi5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJoaWRlRmllbGQiLCJzdHlsZWRDb21wb25lbnRzIiwiY3NzQ2xhc3MiLCJ3aWR0aCIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsIkJveCIsImRpc3BsYXkiLCJ1bmRlZmluZWQiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUVlLHdCQUE0QztBQUFBLE1BQXpDQSxLQUF5QyxRQUF6Q0EsS0FBeUM7QUFBQSxNQUFsQ0MsU0FBa0MsUUFBbENBLFNBQWtDO0FBQUEsTUFBdkJDLGdCQUF1QixRQUF2QkEsZ0JBQXVCO0FBQUEsTUFFMURDLFFBRjBELEdBR3ZESCxLQUh1RCxDQUUxREcsUUFGMEQ7QUFBQSxNQUVoREMsS0FGZ0QsR0FHdkRKLEtBSHVELENBRWhESSxLQUZnRDtBQUFBLE1BRXpDQyxLQUZ5QyxHQUd2REwsS0FIdUQsQ0FFekNLLEtBRnlDO0FBQUEsTUFFbENDLFdBRmtDLEdBR3ZETixLQUh1RCxDQUVsQ00sV0FGa0M7QUFBQSxNQUVyQkMsb0JBRnFCLEdBR3ZEUCxLQUh1RCxDQUVyQk8sb0JBRnFCOztBQUFBLGNBS2pDTCxnQkFBZ0IsSUFBSSxLQUxhO0FBQUEsd0JBS2pETSxHQUxpRDtBQUFBLE1BS2pEQSxHQUxpRCwwQkFLM0MsS0FMMkM7O0FBT3pELFNBQ0UsZ0NBQUMsR0FBRDtBQUNFLElBQUEsS0FBSyxFQUFFSixLQURUO0FBRUUsSUFBQSxTQUFTLGdDQUF5QkQsUUFBekIsQ0FGWDtBQUdFLElBQUEsS0FBSyxFQUFFO0FBQUVNLE1BQUFBLE9BQU8sRUFBRVIsU0FBUyxHQUFHLE1BQUgsR0FBWVM7QUFBaEM7QUFIVCxLQUtFLGdDQUFDLGlCQUFELENBQU8sUUFBUCxRQUNHSCxvQkFBb0IsS0FBSyxPQUF6QixJQUNJRCxXQURKLElBRUtBLFdBQVcsSUFBSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBOEJBLFdBQTlCLENBSHZCLEVBSUU7QUFBSSxJQUFBLFNBQVMsRUFBQyxnQkFBZDtBQUErQixJQUFBLHVCQUF1QixFQUFFO0FBQUVLLE1BQUFBLE1BQU0sRUFBRU47QUFBVjtBQUF4RCxJQUpGLEVBS0dFLG9CQUFvQixLQUFLLE9BQXpCLElBQ0lELFdBREosSUFFS0EsV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0FQdkIsQ0FMRixDQURGO0FBaUJELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBmaWVsZCwgaGlkZUZpZWxkLCBzdHlsZWRDb21wb25lbnRzIH0pID0+IHtcbiAgY29uc3Qge1xuIGNzc0NsYXNzLCB3aWR0aCwgbGFiZWwsIGRlc2NyaXB0aW9uLCBkZXNjcmlwdGlvblBsYWNlbWVudCBcbn0gPSBmaWVsZDtcblxuICBjb25zdCB7IEJveCA9ICdkaXYnIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgY2xhc3NOYW1lPXtgZm9ybS1maWVsZCBnc2VjdGlvbiAke2Nzc0NsYXNzfWB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICA+XG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJ1xuICAgICAgICAgICYmIGRlc2NyaXB0aW9uXG4gICAgICAgICAgJiYgKGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+KX1cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImdzZWN0aW9uX3RpdGxlXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBsYWJlbCB9fSAvPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgIT09ICdhYm92ZSdcbiAgICAgICAgICAmJiBkZXNjcmlwdGlvblxuICAgICAgICAgICYmIChkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2Pil9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==