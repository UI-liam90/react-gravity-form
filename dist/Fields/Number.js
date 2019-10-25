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
      updateForm = _ref.updateForm,
      hideField = _ref.hideField,
      styledComponents = _ref.styledComponents,
      props = _objectWithoutProperties(_ref, ["field", "value", "validationMessage", "touched", "setTouched", "updateForm", "hideField", "styledComponents"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvTnVtYmVyLmpzeCJdLCJuYW1lcyI6WyJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInVwZGF0ZUZvcm0iLCJoaWRlRmllbGQiLCJzdHlsZWRDb21wb25lbnRzIiwicHJvcHMiLCJpZCIsImZvcm1JZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwicGxhY2Vob2xkZXIiLCJpc1JlcXVpcmVkIiwibWF4TGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwiSW5wdXQiLCJMYWJlbCIsIkJveCIsImRpc3BsYXkiLCJ1bmRlZmluZWQiLCJldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztlQUVlLHdCQVVUO0FBQUEsTUFUTEEsS0FTSyxRQVRMQSxLQVNLO0FBQUEsTUFSTEMsS0FRSyxRQVJMQSxLQVFLO0FBQUEsTUFQTEMsaUJBT0ssUUFQTEEsaUJBT0s7QUFBQSxNQU5MQyxPQU1LLFFBTkxBLE9BTUs7QUFBQSxNQUxMQyxVQUtLLFFBTExBLFVBS0s7QUFBQSxNQUpMQyxVQUlLLFFBSkxBLFVBSUs7QUFBQSxNQUhMQyxTQUdLLFFBSExBLFNBR0s7QUFBQSxNQUZMQyxnQkFFSyxRQUZMQSxnQkFFSztBQUFBLE1BREZDLEtBQ0U7O0FBQUEsTUFFSkMsRUFGSSxHQWVEVCxLQWZDLENBRUpTLEVBRkk7QUFBQSxNQUdKQyxNQUhJLEdBZURWLEtBZkMsQ0FHSlUsTUFISTtBQUFBLE1BSUpDLElBSkksR0FlRFgsS0FmQyxDQUlKVyxJQUpJO0FBQUEsTUFLSkMsS0FMSSxHQWVEWixLQWZDLENBS0pZLEtBTEk7QUFBQSxNQU1KQyxRQU5JLEdBZURiLEtBZkMsQ0FNSmEsUUFOSTtBQUFBLE1BT0pDLFdBUEksR0FlRGQsS0FmQyxDQU9KYyxXQVBJO0FBQUEsTUFRSkMs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XG5cdGZpZWxkLFxuXHR2YWx1ZSxcblx0dmFsaWRhdGlvbk1lc3NhZ2UsXG5cdHRvdWNoZWQsXG5cdHNldFRvdWNoZWQsXG5cdHVwZGF0ZUZvcm0sXG5cdGhpZGVGaWVsZCxcblx0c3R5bGVkQ29tcG9uZW50cyxcblx0Li4ucHJvcHNcbn0pID0+IHtcblx0Y29uc3Qge1xuXHRcdGlkLFxuXHRcdGZvcm1JZCxcblx0XHR0eXBlLFxuXHRcdGxhYmVsLFxuXHRcdGNzc0NsYXNzLFxuXHRcdHBsYWNlaG9sZGVyLFxuXHRcdGlzUmVxdWlyZWQsXG5cdFx0bWF4TGVuZ3RoLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuXHRcdGxhYmVsUGxhY2VtZW50LFxuXHRcdHdpZHRoLFxuXHRcdGN1c3RvbU5hbWVcblx0fSA9IGZpZWxkO1xuXG5cdGNvbnN0IHsgSW5wdXQgPSBcImlucHV0XCIsIExhYmVsID0gXCJsYWJlbFwiLCBCb3ggPSBcImRpdlwiIH0gPVxuXHRcdHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG5cblx0cmV0dXJuIChcblx0XHQ8Qm94XG5cdFx0XHR3aWR0aD17d2lkdGh9XG5cdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHR2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkXG5cdFx0XHRcdFx0PyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWBcblx0XHRcdFx0XHQ6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuXHRcdFx0fVxuXHRcdFx0c3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gXCJub25lXCIgOiB1bmRlZmluZWQgfX1cblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dHlwZX0+XG5cdFx0XHRcdDxMYWJlbFxuXHRcdFx0XHRcdGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YGdmLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHtsYWJlbH1cblx0XHRcdFx0XHR7aXNSZXF1aXJlZCA/IDxhYmJyPio8L2FiYnI+IDogbnVsbH1cblx0XHRcdFx0PC9MYWJlbD5cblx0XHRcdFx0e2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gPyAoXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8SW5wdXRcblx0XHRcdFx0XHRcdFx0aWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfVxuXHRcdFx0XHRcdFx0XHRuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfWB9XG5cdFx0XHRcdFx0XHRcdHR5cGU9e3R5cGV9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXshdmFsdWUgPyBcIlwiIDogdmFsdWV9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRcdFx0bWF4TGVuZ3RoPXttYXhMZW5ndGh9XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4gdXBkYXRlRm9ybShldmVudCwgZmllbGQpfVxuXHRcdFx0XHRcdFx0XHRvbkJsdXI9e2V2ZW50ID0+IHtcblx0XHRcdFx0XHRcdFx0XHR1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VG91Y2hlZChpZCk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdGFyaWEtZGVzY3JpYmVkYnk9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfVxuXHRcdFx0XHRcdFx0XHRhcmlhLWludmFsaWQ9eyEhdmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG5cdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0KX1cblx0XHRcdFx0e3ZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgJiYgKFxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9PlxuXHRcdFx0XHRcdFx0e3ZhbGlkYXRpb25NZXNzYWdlfVxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvQm94PlxuXHQpO1xufTtcbiJdfQ==