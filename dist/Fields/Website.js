"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _rebass = require("rebass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = function _default(_ref) {
  var field = _ref.field,
      value = _ref.value,
      validationMessage = _ref.validationMessage,
      touched = _ref.touched,
      setTouched = _ref.setTouched,
      hideField = _ref.hideField,
      updateForm = _ref.updateForm,
      styledComponents = _ref.styledComponents,
      props = _objectWithoutProperties(_ref, ["field", "value", "validationMessage", "touched", "setTouched", "hideField", "updateForm", "styledComponents"]);

  var id = field.id,
      type = field.type,
      label = field.label,
      cssClass = field.cssClass,
      placeholder = field.placeholder,
      isRequired = field.isRequired,
      maxLength = field.maxLength,
      description = field.description,
      descriptionPlacement = field.descriptionPlacement,
      labelPlacement = field.labelPlacement,
      width = field.width,
      customName = field.customName;

  var _ref2 = styledComponents || false,
      _ref2$Input = _ref2.Input,
      Input = _ref2$Input === void 0 ? 'input' : _ref2$Input,
      _ref2$Label = _ref2.Label,
      Label = _ref2$Label === void 0 ? 'label' : _ref2$Label;

  return _react["default"].createElement(_rebass.Box, {
    width: width,
    className: validationMessage && touched ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
    style: {
      display: hideField ? 'none' : undefined
    }
  }, _react["default"].createElement("div", {
    className: type
  }, _react["default"].createElement(Label, {
    htmlFor: "input_".concat(id),
    className: "gf-label ".concat(labelPlacement)
  }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === 'above' && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Input, {
    id: "input_".concat(id),
    name: customName || "input_".concat(id),
    type: type,
    value: !value ? '' : value,
    placeholder: placeholder,
    maxLength: maxLength,
    required: isRequired,
    onChange: function onChange(event) {
      return updateForm(event, field);
    },
    onBlur: function onBlur(event) {
      updateForm(event, field);
      setTouched(id);
    },
    "aria-describedby": "error_".concat(id),
    "aria-invalid": !!validationMessage && touched
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description)), validationMessage && touched && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(id)
  }, validationMessage)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvV2Vic2l0ZS5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsInByb3BzIiwiaWQiLCJ0eXBlIiwibGFiZWwiLCJjc3NDbGFzcyIsInBsYWNlaG9sZGVyIiwiaXNSZXF1aXJlZCIsIm1heExlbmd0aCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiY3VzdG9tTmFtZSIsIklucHV0IiwiTGFiZWwiLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7ZUFFZSx3QkFVVDtBQUFBLE1BVEpBLEtBU0ksUUFUSkEsS0FTSTtBQUFBLE1BUkpDLEtBUUksUUFSSkEsS0FRSTtBQUFBLE1BUEpDLGlCQU9JLFFBUEpBLGlCQU9JO0FBQUEsTUFOSkMsT0FNSSxRQU5KQSxPQU1JO0FBQUEsTUFMSkMsVUFLSSxRQUxKQSxVQUtJO0FBQUEsTUFKSkMsU0FJSSxRQUpKQSxTQUlJO0FBQUEsTUFISkMsVUFHSSxRQUhKQSxVQUdJO0FBQUEsTUFGSkMsZ0JBRUksUUFGSkEsZ0JBRUk7QUFBQSxNQUREQyxLQUNDOztBQUFBLE1BRUZDLEVBRkUsR0FjQVQsS0FkQSxDQUVGUyxFQUZFO0FBQUEsTUFHRkMsSUFIRSxHQWNBVixLQWRBLENBR0ZVLElBSEU7QUFBQSxNQUlGQyxLQUpFLEdBY0FYLEtBZEEsQ0FJRlcsS0FKRTtBQUFBLE1BS0ZDLFFBTEUsR0FjQVosS0FkQSxDQUtGWSxRQUxFO0FBQUEsTUFNRkMsV0FORSxHQWNBYixLQWRBLENBTUZhLFdBTkU7QUFBQSxNQU9GQyxVQVBFLEdBY0FkLEtBZEEsQ0FPRmMsVUFQRTtBQUFBLE1BUUZDLFNBUkUsR0FjQWYsS0FkQSxDQVFGZSxTQVJFO0FBQUEsTUFTRkMsV0FURSxHQWNBaEIsS0FkQSxDQVNGZ0IsV0FURTtBQUFBLE1BVUZDLG9CQVZFLEdBY0FqQixLQWRBLENBVUZpQixvQkFWRTtBQUFBLE1BV0ZDLGNBWEUsR0FjQWxCLEtBZEEsQ0FXRmtCLGNBWEU7QUFBQSxNQVlGQyxLQVpFLEdBY0FuQixLQWRBLENBWUZtQixLQVpFO0FBQUEsTUFhRkMsVUFiRSxHQWNBcEIsS0FkQSxDQWFGb0IsVUFiRTs7QUFBQSxjQWV5Q2IsZ0JBQWdCLElBQUksS0FmN0Q7QUFBQSwwQkFlSWMsS0FmSjtBQUFBLE1BZUlBLEtBZkosNEJBZVksT0FmWjtBQUFBLDBCQWVxQkMsS0FmckI7QUFBQSxNQWVxQkEsS0FmckIsNEJBZTZCLE9BZjdCOztBQWdCSixTQUNFLGdDQUFDLFdBQUQ7QUFDRSxJQUFBLEtBQUssRUFBRUgsS0FEVDtBQUVFLElBQUEsU0FBUyxFQUNQakIsaUJBQWlCLElBQUlDLE9BQXJCLDhCQUFtRFMsUUFBbkQseUJBQThFQSxRQUE5RSxDQUhKO0FBS0UsSUFBQSxLQUFLLEVBQUU7QUFBRVcsTUFBQUEsT0FBTyxFQUFFbEIsU0FBUyxHQUFHLE1BQUgsR0FBWW1CO0FBQWhDO0FBTFQsS0FPRTtBQUFLLElBQUEsU0FBUyxFQUFFZDtBQUFoQixLQUNFLGdDQUFDLEtBQUQ7QUFBTyxJQUFBLE9BQU8sa0JBQVdELEVBQVgsQ0FBZDtBQUErQixJQUFBLFNBQVMscUJBQWNTLGNBQWQ7QUFBeEMsS0FDR1AsS0FESCxFQUVHRyxVQUFVLEdBQUcsa0RBQUgsR0FBb0IsSUFGakMsQ0FERixFQUtHRyxvQkFBb0IsS0FBSyxPQUF6QixJQUFvQ0QsV0FBcEMsR0FDQ0EsV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0FEaEIsR0FHQyxnQ0FBQyxpQkFBRCxDQUFPLFFBQVAsUUFDRSxnQ0FBQyxLQUFEO0FBQ0UsSUFBQSxFQUFFLGtCQUFXUCxFQUFYLENBREo7QUFFRSxJQUFBLElBQUksRUFBRVcsVUFBVSxvQkFBYVgsRUFBYixDQUZsQjtBQUdFLElBQUEsSUFBSSxFQUFFQyxJQUhSO0FBSUUsSUFBQSxLQUFLLEVBQUUsQ0FBQ1QsS0FBRCxHQUFTLEVBQVQsR0FBY0EsS0FKdkI7QUFLRSxJQUFBLFdBQVcsRUFBRVksV0FMZjtBQU1FLElBQUEsU0FBUyxFQUFFRSxTQU5iO0FBT0UsSUFBQSxRQUFRLEVBQUVELFVBUFo7QUFRRSxJQUFBLFFBQVEsRUFBRSxrQkFBQVcsS0FBSztBQUFBLGFBQUluQixVQUFVLENBQUNtQixLQUFELEVBQVF6QixLQUFSLENBQWQ7QUFBQSxLQVJqQjtBQVNFLElBQUEsTUFBTSxFQUFFLGdCQUFDeUIsS0FBRCxFQUFXO0FBQ2pCbkIsTUFBQUEsVUFBVSxDQUFDbUIsS0FBRCxFQUFRekIsS0FBUixDQUFWO0FBQ0FJLE1BQUFBLFVBQVUsQ0FBQ0ssRUFBRCxDQUFWO0FBQ0QsS0FaSDtBQWFFLHdDQUEyQkEsRUFBM0IsQ0FiRjtBQWNFLG9CQUFjLENBQUMsQ0FBQ1AsaUJBQUYsSUFBdUJDO0FBZHZDLElBREYsRUFpQkdhLFdBQVcsSUFBSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBOEJBLFdBQTlCLENBakJsQixDQVJKLEVBNEJHZCxpQkFBaUIsSUFBSUMsT0FBckIsSUFDQztBQUFNLElBQUEsU0FBUyxFQUFDLGVBQWhCO0FBQWdDLElBQUEsRUFBRSxrQkFBV00sRUFBWDtBQUFsQyxLQUNHUCxpQkFESCxDQTdCSixDQVBGLENBREY7QUE0Q0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICdyZWJhc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICB0b3VjaGVkLFxuICBzZXRUb3VjaGVkLFxuICBoaWRlRmllbGQsXG4gIHVwZGF0ZUZvcm0sXG4gIHN0eWxlZENvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIGNzc0NsYXNzLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgbWF4TGVuZ3RoLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgIGxhYmVsUGxhY2VtZW50LFxuICAgIHdpZHRoLFxuICAgIGN1c3RvbU5hbWUsXG4gIH0gPSBmaWVsZDtcbiAgY29uc3QgeyBJbnB1dCA9ICdpbnB1dCcsIExhYmVsID0gJ2xhYmVsJyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtpZH1gfSBjbGFzc05hbWU9e2BnZi1sYWJlbCAke2xhYmVsUGxhY2VtZW50fWB9PlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICB7aXNSZXF1aXJlZCA/IDxhYmJyPio8L2FiYnI+IDogbnVsbH1cbiAgICAgICAgPC9MYWJlbD5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgIGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgIHZhbHVlPXshdmFsdWUgPyAnJyA6IHZhbHVlfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxuICAgICAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKX1cbiAgICAgICAgICAgICAgb25CbHVyPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2BlcnJvcl8ke2lkfWB9XG4gICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17ISF2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2Pn1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtpZH1gfT5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXX0=