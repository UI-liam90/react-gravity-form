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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvV2Vic2l0ZS5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsInByb3BzIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJjc3NDbGFzcyIsInBsYWNlaG9sZGVyIiwiaXNSZXF1aXJlZCIsIm1heExlbmd0aCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiY3VzdG9tTmFtZSIsIklucHV0IiwiTGFiZWwiLCJCb3giLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7ZUFFZSx3QkFVVDtBQUFBLE1BVExBLEtBU0ssUUFUTEEsS0FTSztBQUFBLE1BUkxDLEtBUUssUUFSTEEsS0FRSztBQUFBLE1BUExDLGlCQU9LLFFBUExBLGlCQU9LO0FBQUEsTUFOTEMsT0FNSyxRQU5MQSxPQU1LO0FBQUEsTUFMTEMsVUFLSyxRQUxMQSxVQUtLO0FBQUEsTUFKTEMsU0FJSyxRQUpMQSxTQUlLO0FBQUEsTUFITEMsVUFHSyxRQUhMQSxVQUdLO0FBQUEsTUFGTEMsZ0JBRUssUUFGTEEsZ0JBRUs7QUFBQSxNQURGQyxLQUNFOztBQUFBLE1BRUpDLEVBRkksR0FlRFQsS0FmQyxDQUVKUyxFQUZJO0FBQUEsTUFHSkMsTUFISSxHQWVEVixLQWZDLENBR0pVLE1BSEk7QUFBQSxNQUlKQyxJQUpJLEdBZURYLEtBZkMsQ0FJSlcsSUFKSTtBQUFBLE1BS0pDLEtBTEksR0FlRFosS0FmQyxDQUtKWSxLQUxJO0FBQUEsTUFNSkMsUUFOSSxHQWVEYixLQWZDLENBTUphLFFBTkk7QUFBQSxNQU9KQyxXQVBJLEdBZURkLEtBZkMsQ0FPSmMsV0FQSTtBQUFBLE1BUUpD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e1xuXHRmaWVsZCxcblx0dmFsdWUsXG5cdHZhbGlkYXRpb25NZXNzYWdlLFxuXHR0b3VjaGVkLFxuXHRzZXRUb3VjaGVkLFxuXHRoaWRlRmllbGQsXG5cdHVwZGF0ZUZvcm0sXG5cdHN0eWxlZENvbXBvbmVudHMsXG5cdC4uLnByb3BzXG59KSA9PiB7XG5cdGNvbnN0IHtcblx0XHRpZCxcblx0XHRmb3JtSWQsXG5cdFx0dHlwZSxcblx0XHRsYWJlbCxcblx0XHRjc3NDbGFzcyxcblx0XHRwbGFjZWhvbGRlcixcblx0XHRpc1JlcXVpcmVkLFxuXHRcdG1heExlbmd0aCxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRkZXNjcmlwdGlvblBsYWNlbWVudCxcblx0XHRsYWJlbFBsYWNlbWVudCxcblx0XHR3aWR0aCxcblx0XHRjdXN0b21OYW1lXG5cdH0gPSBmaWVsZDtcblx0Y29uc3QgeyBJbnB1dCA9IFwiaW5wdXRcIiwgTGFiZWwgPSBcImxhYmVsXCIsIEJveCA9IFwiZGl2XCIgfSA9XG5cdFx0c3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblx0cmV0dXJuIChcblx0XHQ8Qm94XG5cdFx0XHR3aWR0aD17d2lkdGh9XG5cdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHR2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkXG5cdFx0XHRcdFx0PyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWBcblx0XHRcdFx0XHQ6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuXHRcdFx0fVxuXHRcdFx0c3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gXCJub25lXCIgOiB1bmRlZmluZWQgfX1cblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dHlwZX0+XG5cdFx0XHRcdDxMYWJlbFxuXHRcdFx0XHRcdGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YGdmLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHtsYWJlbH1cblx0XHRcdFx0XHR7aXNSZXF1aXJlZCA/IDxhYmJyPio8L2FiYnI+IDogbnVsbH1cblx0XHRcdFx0PC9MYWJlbD5cblx0XHRcdFx0e2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gPyAoXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8SW5wdXRcblx0XHRcdFx0XHRcdFx0aWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfVxuXHRcdFx0XHRcdFx0XHRuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfWB9XG5cdFx0XHRcdFx0XHRcdHR5cGU9e3R5cGV9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXshdmFsdWUgPyBcIlwiIDogdmFsdWV9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRcdFx0bWF4TGVuZ3RoPXttYXhMZW5ndGh9XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4gdXBkYXRlRm9ybShldmVudCwgZmllbGQpfVxuXHRcdFx0XHRcdFx0XHRvbkJsdXI9e2V2ZW50ID0+IHtcblx0XHRcdFx0XHRcdFx0XHR1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VG91Y2hlZChpZCk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdGFyaWEtZGVzY3JpYmVkYnk9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfVxuXHRcdFx0XHRcdFx0XHRhcmlhLWludmFsaWQ9eyEhdmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG5cdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0KX1cblx0XHRcdFx0e3ZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgJiYgKFxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9PlxuXHRcdFx0XHRcdFx0e3ZhbGlkYXRpb25NZXNzYWdlfVxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvQm94PlxuXHQpO1xufTtcbiJdfQ==