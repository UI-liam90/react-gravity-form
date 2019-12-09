"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-next-line
var _default = function _default(_ref) {
  var field = _ref.field,
      styledComponents = _ref.styledComponents,
      component = _ref.component;
  var cssClass = field.cssClass,
      width = field.width;

  var _ref2 = styledComponents || false,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? 'div' : _ref2$Box; // get component


  var Component = component;
  return Component ? _react["default"].createElement(Box, {
    width: width,
    className: "form-field ".concat(cssClass)
  }, _react["default"].createElement(Component, null)) : '';
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvQ3VzdG9tLmpzeCJdLCJuYW1lcyI6WyJmaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJjb21wb25lbnQiLCJjc3NDbGFzcyIsIndpZHRoIiwiQm94IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQTtlQUNlLHdCQUE0QztBQUFBLE1BQXpDQSxLQUF5QyxRQUF6Q0EsS0FBeUM7QUFBQSxNQUFsQ0MsZ0JBQWtDLFFBQWxDQSxnQkFBa0M7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQUEsTUFDakRDLFFBRGlELEdBQzdCSCxLQUQ2QixDQUNqREcsUUFEaUQ7QUFBQSxNQUN2Q0MsS0FEdUMsR0FDN0JKLEtBRDZCLENBQ3ZDSSxLQUR1Qzs7QUFBQSxjQUdqQ0gsZ0JBQWdCLElBQUksS0FIYTtBQUFBLHdCQUdqREksR0FIaUQ7QUFBQSxNQUdqREEsR0FIaUQsMEJBRzNDLEtBSDJDLGNBSXpEOzs7QUFDQSxNQUFNQyxTQUFTLEdBQUdKLFNBQWxCO0FBRUEsU0FBT0ksU0FBUyxHQUNkLGdDQUFDLEdBQUQ7QUFBSyxJQUFBLEtBQUssRUFBRUYsS0FBWjtBQUFtQixJQUFBLFNBQVMsdUJBQWdCRCxRQUFoQjtBQUE1QixLQUNFLGdDQUFDLFNBQUQsT0FERixDQURjLEdBS2QsRUFMRjtBQU9ELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmV4cG9ydCBkZWZhdWx0ICh7IGZpZWxkLCBzdHlsZWRDb21wb25lbnRzLCBjb21wb25lbnQgfSkgPT4ge1xuICBjb25zdCB7IGNzc0NsYXNzLCB3aWR0aCB9ID0gZmllbGQ7XG5cbiAgY29uc3QgeyBCb3ggPSAnZGl2JyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcbiAgLy8gZ2V0IGNvbXBvbmVudFxuICBjb25zdCBDb21wb25lbnQgPSBjb21wb25lbnQ7XG5cbiAgcmV0dXJuIENvbXBvbmVudCA/IChcbiAgICA8Qm94IHdpZHRoPXt3aWR0aH0gY2xhc3NOYW1lPXtgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWB9PlxuICAgICAgPENvbXBvbmVudCAvPlxuICAgIDwvQm94PlxuICApIDogKFxuICAgICcnXG4gICk7XG59O1xuIl19