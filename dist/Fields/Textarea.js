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
      _ref2$Textarea = _ref2.Textarea,
      Textarea = _ref2$Textarea === void 0 ? 'textarea' : _ref2$Textarea,
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
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Textarea, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvVGV4dGFyZWEuanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInN0eWxlZENvbXBvbmVudHMiLCJwcm9wcyIsImlkIiwidHlwZSIsImxhYmVsIiwiY3NzQ2xhc3MiLCJwbGFjZWhvbGRlciIsImlzUmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJUZXh0YXJlYSIsIkxhYmVsIiwiZGlzcGxheSIsInVuZGVmaW5lZCIsImV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O2VBRWUsd0JBVVQ7QUFBQSxNQVRKQSxLQVNJLFFBVEpBLEtBU0k7QUFBQSxNQVJKQyxLQVFJLFFBUkpBLEtBUUk7QUFBQSxNQVBKQyxpQkFPSSxRQVBKQSxpQkFPSTtBQUFBLE1BTkpDLE9BTUksUUFOSkEsT0FNSTtBQUFBLE1BTEpDLFVBS0ksUUFMSkEsVUFLSTtBQUFBLE1BSkpDLFNBSUksUUFKSkEsU0FJSTtBQUFBLE1BSEpDLFVBR0ksUUFISkEsVUFHSTtBQUFBLE1BRkpDLGdCQUVJLFFBRkpBLGdCQUVJO0FBQUEsTUFEREMsS0FDQzs7QUFBQSxNQUVGQyxFQUZFLEdBY0FULEtBZEEsQ0FFRlMsRUFGRTtBQUFBLE1BR0ZDLElBSEUsR0FjQVYsS0FkQSxDQUdGVSxJQUhFO0FBQUEsTUFJRkMsS0FKRSxHQWNBWCxLQWRBLENBSUZXLEtBSkU7QUFBQSxNQUtGQyxRQUxFLEdBY0FaLEtBZEEsQ0FLRlksUUFMRTtBQUFBLE1BTUZDLFdBTkUsR0FjQWIsS0FkQSxDQU1GYSxXQU5FO0FBQUEsTUFPRkMsVUFQRSxHQWNBZCxLQWRBLENBT0ZjLFVBUEU7QUFBQSxNQVFGQyxTQVJFLEdBY0FmLEtBZEEsQ0FRRmUsU0FSRTtBQUFBLE1BU0ZDLFdBVEUsR0FjQWhCLEtBZEEsQ0FTRmdCLFdBVEU7QUFBQSxNQVVGQyxvQkFWRSxHQWNBakIsS0FkQSxDQVVGaUIsb0JBVkU7QUFBQSxNQVdGQyxjQVhFLEdBY0FsQixLQWRBLENBV0ZrQixjQVhFO0FBQUEsTUFZRkMsS0FaRSxHQWNBbkIsS0FkQSxDQVlGbUIsS0FaRTtBQUFBLE1BYUZDLFVBYkUsR0FjQXBCLEtBZEEsQ0FhRm9CLFVBYkU7O0FBQUEsY0FnQitDYixnQkFBZ0IsSUFBSSxLQWhCbkU7QUFBQSw2QkFnQkljLFFBaEJKO0FBQUEsTUFnQklBLFFBaEJKLCtCQWdCZSxVQWhCZjtBQUFBLDBCQWdCMkJDLEtBaEIzQjtBQUFBLE1BZ0IyQkEsS0FoQjNCLDRCQWdCbUMsT0FoQm5DOztBQWtCSixTQUNFLGdDQUFDLFdBQUQ7QUFDRSxJQUFBLEtBQUssRUFBRUgsS0FEVDtBQUVFLElBQUEsU0FBUyxFQUNQakIsaUJBQWlCLElBQUlDLE9BQXJCLDhCQUFtRFMsUUFBbkQseUJBQThFQSxRQUE5RSxDQUhKO0FBS0UsSUFBQSxLQUFLLEVBQUU7QUFBRVcsTUFBQUEsT0FBTyxFQUFFbEIsU0FBUyxHQUFHLE1BQUgsR0FBWW1CO0FBQWhDO0FBTFQsS0FPRTtBQUFLLElBQUEsU0FBUyxFQUFFZDtBQUFoQixLQUNFLGdDQUFDLEtBQUQ7QUFBTyxJQUFBLE9BQU8sa0JBQVdELEVBQVgsQ0FBZDtBQUErQixJQUFBLFNBQVMscUJBQWNTLGNBQWQ7QUFBeEMsS0FDR1AsS0FESCxFQUVHRyxVQUFVLEdBQUcsa0RBQUgsR0FBb0IsSUFGakMsQ0FERixFQUtHRyxvQkFBb0IsS0FBSyxPQUF6QixJQUFvQ0QsV0FBcEMsR0FDQ0EsV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0FEaEIsR0FHQyxnQ0FBQyxpQkFBRCxDQUFPLFFBQVAsUUFDRSxnQ0FBQyxRQUFEO0FBQ0UsSUFBQSxFQUFFLGtCQUFXUCxFQUFYLENBREo7QUFFRSxJQUFBLElBQUksRUFBRVcsVUFBVSxvQkFBYVgsRUFBYixDQUZsQjtBQUdFLElBQUEsSUFBSSxFQUFFQyxJQUhSO0FBSUUsSUFBQSxLQUFLLEVBQUUsQ0FBQ1QsS0FBRCxHQUFTLEVBQVQsR0FBY0EsS0FKdkI7QUFLRSxJQUFBLFdBQVcsRUFBRVksV0FMZjtBQU1FLElBQUEsU0FBUyxFQUFFRSxTQU5iO0FBT0UsSUFBQSxRQUFRLEVBQUVELFVBUFo7QUFRRSxJQUFBLFFBQVEsRUFBRSxrQkFBQVcsS0FBSztBQUFBLGFBQUluQixVQUFVLENBQUNtQixLQUFELEVBQVF6QixLQUFSLENBQWQ7QUFBQSxLQVJqQjtBQVNFLElBQUEsTUFBTSxFQUFFLGdCQUFDeUIsS0FBRCxFQUFXO0FBQ2pCbkIsTUFBQUEsVUFBVSxDQUFDbUIsS0FBRCxFQUFRekIsS0FBUixDQUFWO0FBQ0FJLE1BQUFBLFVBQVUsQ0FBQ0ssRUFBRCxDQUFWO0FBQ0QsS0FaSDtBQWFFLHdDQUEyQkEsRUFBM0IsQ0FiRjtBQWNFLG9CQUFjLENBQUMsQ0FBQ1AsaUJBQUYsSUFBdUJDO0FBZHZDLElBREYsRUFpQkdhLFdBQVcsSUFBSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBOEJBLFdBQTlCLENBakJsQixDQVJKLEVBNEJHZCxpQkFBaUIsSUFBSUMsT0FBckIsSUFDQztBQUFNLElBQUEsU0FBUyxFQUFDLGVBQWhCO0FBQWdDLElBQUEsRUFBRSxrQkFBV00sRUFBWDtBQUFsQyxLQUNHUCxpQkFESCxDQTdCSixDQVBGLENBREY7QUE0Q0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICdyZWJhc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICB0b3VjaGVkLFxuICBzZXRUb3VjaGVkLFxuICBoaWRlRmllbGQsXG4gIHVwZGF0ZUZvcm0sXG4gIHN0eWxlZENvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIGNzc0NsYXNzLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgbWF4TGVuZ3RoLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgIGxhYmVsUGxhY2VtZW50LFxuICAgIHdpZHRoLFxuICAgIGN1c3RvbU5hbWUsXG4gIH0gPSBmaWVsZDtcblxuICBjb25zdCB7IFRleHRhcmVhID0gJ3RleHRhcmVhJywgTGFiZWwgPSAnbGFiZWwnIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YCA6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuICAgICAgfVxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gJ25vbmUnIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9PlxuICAgICAgICA8TGFiZWwgaHRtbEZvcj17YGlucHV0XyR7aWR9YH0gY2xhc3NOYW1lPXtgZ2YtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAge2lzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgICBpZD17YGlucHV0XyR7aWR9YH1cbiAgICAgICAgICAgICAgbmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICB2YWx1ZT17IXZhbHVlID8gJycgOiB2YWx1ZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCl9XG4gICAgICAgICAgICAgIG9uQmx1cj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtgZXJyb3JfJHtpZH1gfVxuICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhdmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7aWR9YH0+XG4gICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2V9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl19