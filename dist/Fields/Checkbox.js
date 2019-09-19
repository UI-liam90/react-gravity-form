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
      formId = field.formId,
      type = field.type,
      label = field.label,
      cssClass = field.cssClass,
      isRequired = field.isRequired,
      choices = field.choices,
      inputs = field.inputs,
      description = field.description,
      descriptionPlacement = field.descriptionPlacement,
      labelPlacement = field.labelPlacement,
      width = field.width,
      customName = field.customName;

  var _ref2 = styledComponents || false,
      _ref2$Checkbox = _ref2.Checkbox,
      Checkbox = _ref2$Checkbox === void 0 ? 'fieldset' : _ref2$Checkbox,
      _ref2$Label = _ref2.Label,
      Label = _ref2$Label === void 0 ? 'legend' : _ref2$Label;

  return _react["default"].createElement(_rebass.Box, {
    width: width,
    className: validationMessage && touched ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
    style: {
      display: hideField ? 'none' : undefined
    }
  }, _react["default"].createElement(Checkbox, {
    className: "checkboxes"
  }, _react["default"].createElement(Label, {
    as: "legend",
    className: "group-label ".concat(labelPlacement)
  }, label, label && isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === 'above' && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, choices.map(function (choice, i) {
    return _react["default"].createElement("div", {
      className: type,
      key: choice.value
    }, _react["default"].createElement("input", {
      id: "input_".concat(formId, "_").concat(inputs[i].id),
      type: "checkbox",
      name: customName || "input_".concat(inputs[i].id),
      value: choice.value,
      checked: value.includes(choice.value),
      onChange: function onChange(event) {
        updateForm(event, field);
        setTouched(id);
      }
    }), _react["default"].createElement("label", {
      htmlFor: "input_".concat(formId, "_").concat(inputs[i].id)
    }, choice.text));
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description)), validationMessage && touched && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(formId, "_").concat(id)
  }, validationMessage)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvQ2hlY2tib3guanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInN0eWxlZENvbXBvbmVudHMiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwiY3NzQ2xhc3MiLCJpc1JlcXVpcmVkIiwiY2hvaWNlcyIsImlucHV0cyIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiY3VzdG9tTmFtZSIsIkNoZWNrYm94IiwiTGFiZWwiLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwibWFwIiwiY2hvaWNlIiwiaSIsImluY2x1ZGVzIiwiZXZlbnQiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O2VBRWUsd0JBVVQ7QUFBQSxNQVRKQSxLQVNJLFFBVEpBLEtBU0k7QUFBQSxNQVJKQyxLQVFJLFFBUkpBLEtBUUk7QUFBQSxNQVBKQyxpQkFPSSxRQVBKQSxpQkFPSTtBQUFBLE1BTkpDLE9BTUksUUFOSkEsT0FNSTtBQUFBLE1BTEpDLFVBS0ksUUFMSkEsVUFLSTtBQUFBLE1BSkpDLFNBSUksUUFKSkEsU0FJSTtBQUFBLE1BSEpDLFVBR0ksUUFISkEsVUFHSTtBQUFBLE1BRkpDLGdCQUVJLFFBRkpBLGdCQUVJO0FBQUEsTUFEREMsS0FDQzs7QUFBQSxNQUVGQyxFQUZFLEdBZUFULEtBZkEsQ0FFRlMsRUFGRTtBQUFBLE1BR0ZDLE1BSEUsR0FlQVYsS0FmQSxDQUdGVSxNQUhFO0FBQUEsTUFJRkMsSUFKRSxHQWVBWCxLQWZBLENBSUZXLElBSkU7QUFBQSxNQUtGQyxLQUxFLEdBZUFaLEtBZkEsQ0FLRlksS0FMRTtBQUFBLE1BTUZDLFFBTkUsR0FlQWIsS0FmQSxDQU1GYSxRQU5FO0FBQUEsTUFPRkMsVUFQ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QkFESCxDQTdCSixDQVBGLENBREY7QUE0Q0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICdyZWJhc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICB0b3VjaGVkLFxuICBzZXRUb3VjaGVkLFxuICBoaWRlRmllbGQsXG4gIHVwZGF0ZUZvcm0sXG4gIHN0eWxlZENvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBmb3JtSWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBjc3NDbGFzcyxcbiAgICBpc1JlcXVpcmVkLFxuICAgIGNob2ljZXMsXG4gICAgaW5wdXRzLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgIGxhYmVsUGxhY2VtZW50LFxuICAgIHdpZHRoLFxuICAgIGN1c3RvbU5hbWUsXG4gIH0gPSBmaWVsZDtcblxuICBjb25zdCB7IENoZWNrYm94ID0gJ2ZpZWxkc2V0JywgTGFiZWwgPSAnbGVnZW5kJyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/ICdub25lJyA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9XCJjaGVja2JveGVzXCI+XG4gICAgICAgIDxMYWJlbCBhcz1cImxlZ2VuZFwiIGNsYXNzTmFtZT17YGdyb3VwLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIHtsYWJlbCAmJiBpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICA8L0xhYmVsPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09ICdhYm92ZScgJiYgZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7Y2hvaWNlcy5tYXAoKGNob2ljZSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0ga2V5PXtjaG9pY2UudmFsdWV9PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpbnB1dHNbaV0uaWR9YH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lucHV0c1tpXS5pZH1gfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Nob2ljZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbHVlLmluY2x1ZGVzKGNob2ljZS52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpbnB1dHNbaV0uaWR9YH0+e2Nob2ljZS50ZXh0fTwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvQ2hlY2tib3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl19