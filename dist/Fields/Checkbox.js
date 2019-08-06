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
      id: "input_".concat(inputs[i].id),
      type: "checkbox",
      name: customName || "input_".concat(inputs[i].id),
      value: choice.value,
      checked: value.includes(choice.value),
      onChange: function onChange(event) {
        updateForm(event, field);
        setTouched(id);
      }
    }), _react["default"].createElement("label", {
      htmlFor: "input_".concat(inputs[i].id)
    }, choice.text));
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description)), validationMessage && touched && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(id)
  }, validationMessage)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvQ2hlY2tib3guanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInN0eWxlZENvbXBvbmVudHMiLCJwcm9wcyIsImlkIiwidHlwZSIsImxhYmVsIiwiY3NzQ2xhc3MiLCJpc1JlcXVpcmVkIiwiY2hvaWNlcyIsImlucHV0cyIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiY3VzdG9tTmFtZSIsIkNoZWNrYm94IiwiTGFiZWwiLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwibWFwIiwiY2hvaWNlIiwiaSIsImluY2x1ZGVzIiwiZXZlbnQiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O2VBRWUsd0JBVVQ7QUFBQSxNQVRKQSxLQVNJLFFBVEpBLEtBU0k7QUFBQSxNQVJKQyxLQVFJLFFBUkpBLEtBUUk7QUFBQSxNQVBKQyxpQkFPSSxRQVBKQSxpQkFPSTtBQUFBLE1BTkpDLE9BTUksUUFOSkEsT0FNSTtBQUFBLE1BTEpDLFVBS0ksUUFMSkEsVUFLSTtBQUFBLE1BSkpDLFNBSUksUUFKSkEsU0FJSTtBQUFBLE1BSEpDLFVBR0ksUUFISkEsVUFHSTtBQUFBLE1BRkpDLGdCQUVJLFFBRkpBLGdCQUVJO0FBQUEsTUFEREMsS0FDQzs7QUFBQSxNQUVGQyxFQUZFLEdBY0FULEtBZEEsQ0FFRlMsRUFGRTtBQUFBLE1BR0ZDLElBSEUsR0FjQVYsS0FkQSxDQUdGVSxJQUhFO0FBQUEsTUFJRkMsS0FKRSxHQWNBWCxLQWRBLENBSUZXLEtBSkU7QUFBQSxNQUtGQyxRQUxFLEdBY0FaLEtBZEEsQ0FLRlksUUFMRTtBQUFBLE1BTUZDLFVBTkUsR0FjQWIsS0FkQSxDQU1GYSxVQU5FO0FBQUEsTUFPRkMsT0FQRSxHQWNBZCxL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Qm94IH0gZnJvbSAncmViYXNzJztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgaGlkZUZpZWxkLFxuICB1cGRhdGVGb3JtLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBjc3NDbGFzcyxcbiAgICBpc1JlcXVpcmVkLFxuICAgIGNob2ljZXMsXG4gICAgaW5wdXRzLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgIGxhYmVsUGxhY2VtZW50LFxuICAgIHdpZHRoLFxuICAgIGN1c3RvbU5hbWUsXG4gIH0gPSBmaWVsZDtcblxuICBjb25zdCB7IENoZWNrYm94ID0gJ2ZpZWxkc2V0JywgTGFiZWwgPSAnbGVnZW5kJyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/ICdub25lJyA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9XCJjaGVja2JveGVzXCI+XG4gICAgICAgIDxMYWJlbCBhcz1cImxlZ2VuZFwiIGNsYXNzTmFtZT17YGdyb3VwLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIHtsYWJlbCAmJiBpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICA8L0xhYmVsPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09ICdhYm92ZScgJiYgZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7Y2hvaWNlcy5tYXAoKGNob2ljZSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0ga2V5PXtjaG9pY2UudmFsdWV9PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2lucHV0c1tpXS5pZH1gfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aW5wdXRzW2ldLmlkfWB9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y2hvaWNlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsdWUuaW5jbHVkZXMoY2hvaWNlLnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGlucHV0XyR7aW5wdXRzW2ldLmlkfWB9PntjaG9pY2UudGV4dH08L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2lkfWB9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvQ2hlY2tib3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl19