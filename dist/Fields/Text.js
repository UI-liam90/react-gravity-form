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
      placeholder = field.placeholder,
      isRequired = field.isRequired,
      maxLength = field.maxLength,
      description = field.description,
      descriptionPlacement = field.descriptionPlacement,
      labelPlacement = field.labelPlacement,
      cssClass = field.cssClass,
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
    "aria-label": label,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvVGV4dC5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsInByb3BzIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImlzUmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJjc3NDbGFzcyIsIndpZHRoIiwiY3VzdG9tTmFtZSIsIklucHV0IiwiTGFiZWwiLCJCb3giLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7ZUFFZSx3QkFVVDtBQUFBLE1BVExBLEtBU0ssUUFUTEEsS0FTSztBQUFBLE1BUkxDLEtBUUssUUFSTEEsS0FRSztBQUFBLE1BUExDLGlCQU9LLFFBUExBLGlCQU9LO0FBQUEsTUFOTEMsT0FNSyxRQU5MQSxPQU1LO0FBQUEsTUFMTEMsVUFLSyxRQUxMQSxVQUtLO0FBQUEsTUFKTEMsU0FJSyxRQUpMQSxTQUlLO0FBQUEsTUFITEMsVUFHSyxRQUhMQSxVQUdLO0FBQUEsTUFGTEMsZ0JBRUssUUFGTEEsZ0JBRUs7QUFBQSxNQURGQyxLQUNFOztBQUFBLE1BRUpDLEVBRkksR0FlRFQsS0FmQyxDQUVKUyxFQUZJO0FBQUEsTUFHSkMsTUFISSxHQWVEVixLQWZDLENBR0pVLE1BSEk7QUFBQSxNQUlKQyxJQUpJLEdBZURYLEtBZkMsQ0FJSlcsSUFKSTtBQUFBLE1BS0pDLEtBTEksR0FlRFosS0FmQyxDQUtKWSxLQUxJO0FBQUEsTUFNSkMsV0FOSSxHQWVEYixLQWZDLENBTUphLFdBTkk7QUFBQSxNQU9KQyxVQVBJLEdBZURkLEtBZkMsQ0FPSmMsVUFQSTtBQUFBLE1BUUpDLFNB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eHBvcnQgZGVmYXVsdCAoe1xuXHRmaWVsZCxcblx0dmFsdWUsXG5cdHZhbGlkYXRpb25NZXNzYWdlLFxuXHR0b3VjaGVkLFxuXHRzZXRUb3VjaGVkLFxuXHRoaWRlRmllbGQsXG5cdHVwZGF0ZUZvcm0sXG5cdHN0eWxlZENvbXBvbmVudHMsXG5cdC4uLnByb3BzXG59KSA9PiB7XG5cdGNvbnN0IHtcblx0XHRpZCxcblx0XHRmb3JtSWQsXG5cdFx0dHlwZSxcblx0XHRsYWJlbCxcblx0XHRwbGFjZWhvbGRlcixcblx0XHRpc1JlcXVpcmVkLFxuXHRcdG1heExlbmd0aCxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRkZXNjcmlwdGlvblBsYWNlbWVudCxcblx0XHRsYWJlbFBsYWNlbWVudCxcblx0XHRjc3NDbGFzcyxcblx0XHR3aWR0aCxcblx0XHRjdXN0b21OYW1lXG5cdH0gPSBmaWVsZDtcblx0Y29uc3QgeyBJbnB1dCA9IFwiaW5wdXRcIiwgTGFiZWwgPSBcImxhYmVsXCIsIEJveCA9IFwiZGl2XCIgfSA9XG5cdFx0c3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuXHRyZXR1cm4gKFxuXHRcdDxCb3hcblx0XHRcdHdpZHRoPXt3aWR0aH1cblx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWRcblx0XHRcdFx0XHQ/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuXHRcdFx0XHRcdDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG5cdFx0XHR9XG5cdFx0XHRzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyBcIm5vbmVcIiA6IHVuZGVmaW5lZCB9fVxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0eXBlfT5cblx0XHRcdFx0PExhYmVsXG5cdFx0XHRcdFx0aHRtbEZvcj17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfWB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZ2YtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e2xhYmVsfVxuXHRcdFx0XHRcdHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuXHRcdFx0XHQ8L0xhYmVsPlxuXHRcdFx0XHR7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09IFwiYWJvdmVcIiAmJiBkZXNjcmlwdGlvbiA/IChcblx0XHRcdFx0XHRkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdDxJbnB1dFxuXHRcdFx0XHRcdFx0XHRpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfWB9XG5cdFx0XHRcdFx0XHRcdG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9YH1cblx0XHRcdFx0XHRcdFx0dHlwZT17dHlwZX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyF2YWx1ZSA/IFwiXCIgOiB2YWx1ZX1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdFx0XHRtYXhMZW5ndGg9e21heExlbmd0aH1cblx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PiB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCl9XG5cdFx0XHRcdFx0XHRcdG9uQmx1cj17ZXZlbnQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcblx0XHRcdFx0XHRcdFx0XHRzZXRUb3VjaGVkKGlkKTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD17bGFiZWx9XG5cdFx0XHRcdFx0XHRcdGFyaWEtZGVzY3JpYmVkYnk9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfVxuXHRcdFx0XHRcdFx0XHRhcmlhLWludmFsaWQ9eyEhdmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG5cdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0KX1cblx0XHRcdFx0e3ZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgJiYgKFxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9PlxuXHRcdFx0XHRcdFx0e3ZhbGlkYXRpb25NZXNzYWdlfVxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvQm94PlxuXHQpO1xufTtcbiJdfQ==