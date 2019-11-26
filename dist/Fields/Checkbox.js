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
      error = _ref.error,
      unsetError = _ref.unsetError,
      props = _objectWithoutProperties(_ref, ["field", "value", "validationMessage", "touched", "setTouched", "hideField", "updateForm", "styledComponents", "error", "unsetError"]);

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
      Label = _ref2$Label === void 0 ? 'legend' : _ref2$Label,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? 'div' : _ref2$Box;

  return _react["default"].createElement(Box, {
    width: width,
    className: validationMessage && touched || error ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
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
        unsetError(id);
      }
    }), _react["default"].createElement("label", {
      htmlFor: "input_".concat(formId, "_").concat(inputs[i].id)
    }, choice.text));
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description)), (validationMessage && touched || error) && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(formId, "_").concat(id)
  }, validationMessage || error)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvQ2hlY2tib3guanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwiY3NzQ2xhc3MiLCJpc1JlcXVpcmVkIiwiY2hvaWNlcyIsImlucHV0cyIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiY3VzdG9tTmFtZSIsIkNoZWNrYm94IiwiTGFiZWwiLCJCb3giLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwibWFwIiwiY2hvaWNlIiwiaSIsImluY2x1ZGVzIiwiZXZlbnQiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O2VBRWUsd0JBWVQ7QUFBQSxNQVhKQSxLQVdJLFFBWEpBLEtBV0k7QUFBQSxNQVZKQyxLQVVJLFFBVkpBLEtBVUk7QUFBQSxNQVRKQyxpQkFTSSxRQVRKQSxpQkFTSTtBQUFBLE1BUkpDLE9BUUksUUFSSkEsT0FRSTtBQUFBLE1BUEpDLFVBT0ksUUFQSkEsVUFPSTtBQUFBLE1BTkpDLFNBTUksUUFOSkEsU0FNSTtBQUFBLE1BTEpDLFVBS0ksUUFMSkEsVUFLSTtBQUFBLE1BSkpDLGdCQUlJLFFBSkpBLGdCQUlJO0FBQUEsTUFISkMsS0FHSSxRQUhKQSxLQUdJO0FBQUEsTUFGSkMsVUFFSSxRQUZKQSxVQUVJO0FBQUEsTUFEREMsS0FDQzs7QUFBQSxNQUVGQyxFQUZFLEdBZUFYLEtBZkEsQ0FFRlcsRUFGRTtBQUFBLE1BR0ZDLE1BSEUsR0FlQVosS0FmQSxDQUdGWSxNQUhFO0FBQUEsTUFJRkMsSUFKRSxHQWVBYixLQWZBLENBSUZhLElBSkU7QUFBQSxNQUtGQyxLQUxF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Q0FESCxFQWtCR2YsV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0FsQmxCLENBUkosRUE2QkcsQ0FBRWpCLGlCQUFpQixJQUFJQyxPQUF0QixJQUFrQ0ssS0FBbkMsS0FDQztBQUFNLElBQUEsU0FBUyxFQUFDLGVBQWhCO0FBQWdDLElBQUEsRUFBRSxrQkFBV0ksTUFBWCxjQUFxQkQsRUFBckI7QUFBbEMsS0FDR1QsaUJBQWlCLElBQUlNLEtBRHhCLENBOUJKLENBVEYsQ0FERjtBQStDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgaGlkZUZpZWxkLFxuICB1cGRhdGVGb3JtLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICBlcnJvcixcbiAgdW5zZXRFcnJvcixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGZvcm1JZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIGNzc0NsYXNzLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgY2hvaWNlcyxcbiAgICBpbnB1dHMsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgd2lkdGgsXG4gICAgY3VzdG9tTmFtZSxcbiAgfSA9IGZpZWxkO1xuXG4gIGNvbnN0IHsgQ2hlY2tib3ggPSAnZmllbGRzZXQnLCBMYWJlbCA9ICdsZWdlbmQnLCBCb3ggPSAnZGl2JyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvclxuICAgICAgICAgID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gXG4gICAgICAgICAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/ICdub25lJyA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9XCJjaGVja2JveGVzXCI+XG4gICAgICAgIDxMYWJlbCBhcz1cImxlZ2VuZFwiIGNsYXNzTmFtZT17YGdyb3VwLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIHtsYWJlbCAmJiBpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICA8L0xhYmVsPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09ICdhYm92ZScgJiYgZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7Y2hvaWNlcy5tYXAoKGNob2ljZSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0ga2V5PXtjaG9pY2UudmFsdWV9PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpbnB1dHNbaV0uaWR9YH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lucHV0c1tpXS5pZH1gfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Nob2ljZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbHVlLmluY2x1ZGVzKGNob2ljZS52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aW5wdXRzW2ldLmlkfWB9PntjaG9pY2UudGV4dH08L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH0+XG4gICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgfHwgZXJyb3J9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgPC9DaGVja2JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXX0=