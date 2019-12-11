"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// eslint-disable-next-line
var _default = function _default(_ref) {
  var field = _ref.field,
      styledComponents = _ref.styledComponents,
      component = _ref.component,
      props = _objectWithoutProperties(_ref, ["field", "styledComponents", "component"]);

  var cssClass = field.cssClass,
      width = field.width;

  var _ref2 = styledComponents || false,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? 'div' : _ref2$Box; // get component


  var Component = component;
  return Component ? _react["default"].createElement(Box, {
    width: width,
    className: "form-field ".concat(cssClass)
  }, _react["default"].createElement(Component, _extends({
    field: field,
    styledComponents: styledComponents
  }, props))) : '';
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvQ3VzdG9tLmpzeCJdLCJuYW1lcyI6WyJmaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJjb21wb25lbnQiLCJwcm9wcyIsImNzc0NsYXNzIiwid2lkdGgiLCJCb3giLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQUVBO2VBQ2Usd0JBQXNEO0FBQUEsTUFBbkRBLEtBQW1ELFFBQW5EQSxLQUFtRDtBQUFBLE1BQTVDQyxnQkFBNEMsUUFBNUNBLGdCQUE0QztBQUFBLE1BQTFCQyxTQUEwQixRQUExQkEsU0FBMEI7QUFBQSxNQUFaQyxLQUFZOztBQUFBLE1BQzNEQyxRQUQyRCxHQUN2Q0osS0FEdUMsQ0FDM0RJLFFBRDJEO0FBQUEsTUFDakRDLEtBRGlELEdBQ3ZDTCxLQUR1QyxDQUNqREssS0FEaUQ7O0FBQUEsY0FHM0NKLGdCQUFnQixJQUFJLEtBSHVCO0FBQUEsd0JBRzNESyxHQUgyRDtBQUFBLE1BRzNEQSxHQUgyRCwwQkFHckQsS0FIcUQsY0FJbkU7OztBQUNBLE1BQU1DLFNBQVMsR0FBR0wsU0FBbEI7QUFFQSxTQUFPSyxTQUFTLEdBQ2QsZ0NBQUMsR0FBRDtBQUFLLElBQUEsS0FBSyxFQUFFRixLQUFaO0FBQW1CLElBQUEsU0FBUyx1QkFBZ0JELFFBQWhCO0FBQTVCLEtBQ0UsZ0NBQUMsU0FBRDtBQUFXLElBQUEsS0FBSyxFQUFFSixLQUFsQjtBQUF5QixJQUFBLGdCQUFnQixFQUFFQztBQUEzQyxLQUFpRUUsS0FBakUsRUFERixDQURjLEdBS2QsRUFMRjtBQU9ELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmV4cG9ydCBkZWZhdWx0ICh7IGZpZWxkLCBzdHlsZWRDb21wb25lbnRzLCBjb21wb25lbnQsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgeyBjc3NDbGFzcywgd2lkdGggfSA9IGZpZWxkO1xuXG4gIGNvbnN0IHsgQm94ID0gJ2RpdicgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG4gIC8vIGdldCBjb21wb25lbnRcbiAgY29uc3QgQ29tcG9uZW50ID0gY29tcG9uZW50O1xuXG4gIHJldHVybiBDb21wb25lbnQgPyAoXG4gICAgPEJveCB3aWR0aD17d2lkdGh9IGNsYXNzTmFtZT17YGZvcm0tZmllbGQgJHtjc3NDbGFzc31gfT5cbiAgICAgIDxDb21wb25lbnQgZmllbGQ9e2ZpZWxkfSBzdHlsZWRDb21wb25lbnRzPXtzdHlsZWRDb21wb25lbnRzfSB7Li4ucHJvcHN9IC8+XG4gICAgPC9Cb3g+XG4gICkgOiAoXG4gICAgJydcbiAgKTtcbn07XG4iXX0=