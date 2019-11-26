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
      label = field.label;

  var _ref2 = styledComponents || false,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? 'div' : _ref2$Box;

  return _react["default"].createElement(Box, {
    width: width,
    className: "form-field gsection ".concat(cssClass),
    style: {
      display: hideField ? 'none' : undefined
    }
  }, _react["default"].createElement("h2", {
    className: "gsection_title",
    dangerouslySetInnerHTML: {
      __html: label
    }
  }));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvU2VjdGlvbi5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJoaWRlRmllbGQiLCJzdHlsZWRDb21wb25lbnRzIiwiY3NzQ2xhc3MiLCJ3aWR0aCIsImxhYmVsIiwiQm94IiwiZGlzcGxheSIsInVuZGVmaW5lZCIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O2VBRWUsd0JBQTRDO0FBQUEsTUFBekNBLEtBQXlDLFFBQXpDQSxLQUF5QztBQUFBLE1BQWxDQyxTQUFrQyxRQUFsQ0EsU0FBa0M7QUFBQSxNQUF2QkMsZ0JBQXVCLFFBQXZCQSxnQkFBdUI7QUFBQSxNQUNqREMsUUFEaUQsR0FDdEJILEtBRHNCLENBQ2pERyxRQURpRDtBQUFBLE1BQ3ZDQyxLQUR1QyxHQUN0QkosS0FEc0IsQ0FDdkNJLEtBRHVDO0FBQUEsTUFDaENDLEtBRGdDLEdBQ3RCTCxLQURzQixDQUNoQ0ssS0FEZ0M7O0FBQUEsY0FHakNILGdCQUFnQixJQUFJLEtBSGE7QUFBQSx3QkFHakRJLEdBSGlEO0FBQUEsTUFHakRBLEdBSGlELDBCQUczQyxLQUgyQzs7QUFLekQsU0FDRSxnQ0FBQyxHQUFEO0FBQ0UsSUFBQSxLQUFLLEVBQUVGLEtBRFQ7QUFFRSxJQUFBLFNBQVMsZ0NBQXlCRCxRQUF6QixDQUZYO0FBR0UsSUFBQSxLQUFLLEVBQUU7QUFBRUksTUFBQUEsT0FBTyxFQUFFTixTQUFTLEdBQUcsTUFBSCxHQUFZTztBQUFoQztBQUhULEtBS0U7QUFBSSxJQUFBLFNBQVMsRUFBQyxnQkFBZDtBQUErQixJQUFBLHVCQUF1QixFQUFFO0FBQUVDLE1BQUFBLE1BQU0sRUFBRUo7QUFBVjtBQUF4RCxJQUxGLENBREY7QUFTRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgZmllbGQsIGhpZGVGaWVsZCwgc3R5bGVkQ29tcG9uZW50cyB9KSA9PiB7XG4gIGNvbnN0IHsgY3NzQ2xhc3MsIHdpZHRoLCBsYWJlbCB9ID0gZmllbGQ7XG5cbiAgY29uc3QgeyBCb3ggPSAnZGl2JyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17YGZvcm0tZmllbGQgZ3NlY3Rpb24gJHtjc3NDbGFzc31gfVxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gJ25vbmUnIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cImdzZWN0aW9uX3RpdGxlXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBsYWJlbCB9fSAvPlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==