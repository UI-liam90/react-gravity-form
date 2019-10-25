"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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
      formId = field.formId,
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
      Input = _ref2$Input === void 0 ? "input" : _ref2$Input,
      _ref2$Label = _ref2.Label,
      Label = _ref2$Label === void 0 ? "label" : _ref2$Label,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? "div" : _ref2$Box;

  return _react["default"].createElement(Box, {
    width: width,
    className: validationMessage && touched ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
    style: {
      display: hideField ? "none" : undefined
    }
  }, _react["default"].createElement("div", {
    className: type
  }, _react["default"].createElement(Label, {
    htmlFor: "input_".concat(formId, "_").concat(id),
    className: "gf-label ".concat(labelPlacement)
  }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === "above" && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Input, {
    id: "input_".concat(formId, "_").concat(id),
    name: customName || "input_".concat(id),
    type: type,
    value: !value ? "" : value,
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
    "aria-describedby": "error_".concat(formId, "_").concat(id),
    "aria-invalid": !!validationMessage && touched
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description)), validationMessage && touched && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(formId, "_").concat(id)
  }, validationMessage)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUGhvbmUuanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInN0eWxlZENvbXBvbmVudHMiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwiY3NzQ2xhc3MiLCJwbGFjZWhvbGRlciIsImlzUmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJJbnB1dCIsIkxhYmVsIiwiQm94IiwiZGlzcGxheSIsInVuZGVmaW5lZCIsImV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O2VBRWUsd0JBVVQ7QUFBQSxNQVRMQSxLQVNLLFFBVExBLEtBU0s7QUFBQSxNQVJMQyxLQVFLLFFBUkxBLEtBUUs7QUFBQSxNQVBMQyxpQkFPSyxRQVBMQSxpQkFPSztBQUFBLE1BTkxDLE9BTUssUUFOTEEsT0FNSztBQUFBLE1BTExDLFVBS0ssUUFMTEEsVUFLSztBQUFBLE1BSkxDLFNBSUssUUFKTEEsU0FJSztBQUFBLE1BSExDLFVBR0ssUUFITEEsVUFHSztBQUFBLE1BRkxDLGdCQUVLLFFBRkxBLGdCQUVLO0FBQUEsTUFERkMsS0FDRTs7QUFBQSxNQUVKQyxFQUZJLEdBZURULEtBZkMsQ0FFSlMsRUFGSTtBQUFBLE1BR0pDLE1BSEksR0FlRFYsS0FmQyxDQUdKVSxNQUhJO0FBQUEsTUFJSkMsSUFKSSxHQWVEWCxLQWZDLENBSUpXLElBSkk7QUFBQSxNQUtKQyxLQUxJLEdBZURaLEtBZkMsQ0FLSlksS0FMSTtBQUFBLE1BTUpDLFFBTkksR0FlRGIsS0FmQyxDQU1KYSxRQU5JO0FBQUEsTUFPSkMsV0FQSSxHQWVEZCxLQWZDLENBT0pjLFdBUEk7QUFBQSxNQVFKQyxV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blx0ZmllbGQsXG5cdHZhbHVlLFxuXHR2YWxpZGF0aW9uTWVzc2FnZSxcblx0dG91Y2hlZCxcblx0c2V0VG91Y2hlZCxcblx0aGlkZUZpZWxkLFxuXHR1cGRhdGVGb3JtLFxuXHRzdHlsZWRDb21wb25lbnRzLFxuXHQuLi5wcm9wc1xufSkgPT4ge1xuXHRjb25zdCB7XG5cdFx0aWQsXG5cdFx0Zm9ybUlkLFxuXHRcdHR5cGUsXG5cdFx0bGFiZWwsXG5cdFx0Y3NzQ2xhc3MsXG5cdFx0cGxhY2Vob2xkZXIsXG5cdFx0aXNSZXF1aXJlZCxcblx0XHRtYXhMZW5ndGgsXG5cdFx0ZGVzY3JpcHRpb24sXG5cdFx0ZGVzY3JpcHRpb25QbGFjZW1lbnQsXG5cdFx0bGFiZWxQbGFjZW1lbnQsXG5cdFx0d2lkdGgsXG5cdFx0Y3VzdG9tTmFtZVxuXHR9ID0gZmllbGQ7XG5cblx0Y29uc3QgeyBJbnB1dCA9IFwiaW5wdXRcIiwgTGFiZWwgPSBcImxhYmVsXCIsIEJveCA9IFwiZGl2XCIgfSA9XG5cdFx0c3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblx0cmV0dXJuIChcblx0XHQ8Qm94XG5cdFx0XHR3aWR0aD17d2lkdGh9XG5cdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHR2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkXG5cdFx0XHRcdFx0PyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWBcblx0XHRcdFx0XHQ6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuXHRcdFx0fVxuXHRcdFx0c3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gXCJub25lXCIgOiB1bmRlZmluZWQgfX1cblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dHlwZX0+XG5cdFx0XHRcdDxMYWJlbFxuXHRcdFx0XHRcdGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YGdmLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHtsYWJlbH1cblx0XHRcdFx0XHR7aXNSZXF1aXJlZCA/IDxhYmJyPio8L2FiYnI+IDogbnVsbH1cblx0XHRcdFx0PC9MYWJlbD5cblx0XHRcdFx0e2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gPyAoXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8SW5wdXRcblx0XHRcdFx0XHRcdFx0aWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfVxuXHRcdFx0XHRcdFx0XHRuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfWB9XG5cdFx0XHRcdFx0XHRcdHR5cGU9e3R5cGV9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXshdmFsdWUgPyBcIlwiIDogdmFsdWV9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRcdFx0bWF4TGVuZ3RoPXttYXhMZW5ndGh9XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4gdXBkYXRlRm9ybShldmVudCwgZmllbGQpfVxuXHRcdFx0XHRcdFx0XHRvbkJsdXI9e2V2ZW50ID0+IHtcblx0XHRcdFx0XHRcdFx0XHR1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VG91Y2hlZChpZCk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdGFyaWEtZGVzY3JpYmVkYnk9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfVxuXHRcdFx0XHRcdFx0XHRhcmlhLWludmFsaWQ9eyEhdmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG5cdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0KX1cblx0XHRcdFx0e3ZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgJiYgKFxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9PlxuXHRcdFx0XHRcdFx0e3ZhbGlkYXRpb25NZXNzYWdlfVxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvQm94PlxuXHQpO1xufTtcbiJdfQ==