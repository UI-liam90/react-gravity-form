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
      error = _ref.error,
      unsetError = _ref.unsetError,
      setFocusClass = _ref.setFocusClass,
      cssClass = _ref.cssClass,
      props = _objectWithoutProperties(_ref, ["field", "value", "validationMessage", "touched", "setTouched", "updateForm", "hideField", "styledComponents", "error", "unsetError", "setFocusClass", "cssClass"]);

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
      width = field.width,
      customName = field.customName;

  var _ref2 = styledComponents || false,
      _ref2$Input = _ref2.Input,
      Input = _ref2$Input === void 0 ? 'input' : _ref2$Input,
      _ref2$Label = _ref2.Label,
      Label = _ref2$Label === void 0 ? 'label' : _ref2$Label,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? 'div' : _ref2$Box;

  return _react["default"].createElement(Box, {
    width: width,
    className: validationMessage && touched || error ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
    style: {
      display: hideField ? 'none' : undefined
    }
  }, _react["default"].createElement("div", {
    className: type
  }, _react["default"].createElement(Label, {
    htmlFor: "input_".concat(formId, "_").concat(id),
    className: "gf-label ".concat(labelPlacement)
  }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === 'above' && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Input, {
    id: "input_".concat(formId, "_").concat(id),
    name: customName || "input_".concat(id),
    type: type,
    value: !value ? '' : value,
    placeholder: placeholder,
    maxLength: maxLength,
    required: isRequired,
    onChange: function onChange(event) {
      updateForm(event, field);
      unsetError(id);
    },
    onBlur: function onBlur(event) {
      updateForm(event, field);
      setTouched(id);
      setFocusClass(value !== '');
    },
    onFocus: function onFocus() {
      return setFocusClass(true);
    },
    "aria-describedby": "error_".concat(formId, "_").concat(id),
    "aria-invalid": !!validationMessage && touched || !!error
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description)), (validationMessage && touched || error) && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(formId, "_").concat(id)
  }, validationMessage || error)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvTnVtYmVyLmpzeCJdLCJuYW1lcyI6WyJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInVwZGF0ZUZvcm0iLCJoaWRlRmllbGQiLCJzdHlsZWRDb21wb25lbnRzIiwiZXJyb3IiLCJ1bnNldEVycm9yIiwic2V0Rm9jdXNDbGFzcyIsImNzc0NsYXNzIiwicHJvcHMiLCJpZCIsImZvcm1JZCIsInR5cGUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiaXNSZXF1aXJlZCIsIm1heExlbmd0aCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiY3VzdG9tTmFtZSIsIklucHV0IiwiTGFiZWwiLCJCb3giLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7ZUFFZSx3QkFjVDtBQUFBLE1BYkpBLEtBYUksUUFiSkEsS0FhSTtBQUFBLE1BWkpDLEtBWUksUUFaSkEsS0FZSTtBQUFBLE1BWEpDLGlCQVdJLFFBWEpBLGlCQVdJO0FBQUEsTUFWSkMsT0FVSSxRQVZKQSxPQVVJO0FBQUEsTUFUSkMsVUFTSSxRQVRKQSxVQVNJO0FBQUEsTUFSSkMsVUFRSSxRQVJKQSxVQVFJO0FBQUEsTUFQSkMsU0FPSSxRQVBKQSxTQU9JO0FBQUEsTUFOSkMsZ0JBTUksUUFOSkEsZ0JBTUk7QUFBQSxNQUxKQyxLQUtJLFFBTEpBLEtBS0k7QUFBQSxNQUpKQyxVQUlJLFFBSkpBLFVBSUk7QUFBQSxNQUhKQyxhQUdJLFFBSEpBLGFBR0k7QUFBQSxNQUZKQyxRQUVJLFFBRkpBLFFBRUk7QUFBQSxNQUREQyxLQUNDOztBQUFBLE1BRUZDLEVBRkUsR0FjQWIsS0FkQSxDQUVGYSxFQUZFO0FBQUEsTUFHRkMsTUFIRSxHQWNBZCxLQWRBLENBR0ZjLE1BSEU7QUFBQSxNQUlGQyxJQUpFLEdB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eEIsSUFBb0MsQ0FBQyxDQUFDSztBQW5CdEQsSUFERixFQXNCR1ksV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0F0QmxCLENBUkosRUFpQ0csQ0FBRWxCLGlCQUFpQixJQUFJQyxPQUF0QixJQUFrQ0ssS0FBbkMsS0FDQztBQUFNLElBQUEsU0FBUyxFQUFDLGVBQWhCO0FBQWdDLElBQUEsRUFBRSxrQkFBV00sTUFBWCxjQUFxQkQsRUFBckI7QUFBbEMsS0FDR1gsaUJBQWlCLElBQUlNLEtBRHhCLENBbENKLENBVEYsQ0FERjtBQW1ERCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgdXBkYXRlRm9ybSxcbiAgaGlkZUZpZWxkLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICBlcnJvcixcbiAgdW5zZXRFcnJvcixcbiAgc2V0Rm9jdXNDbGFzcyxcbiAgY3NzQ2xhc3MsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBmb3JtSWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBpc1JlcXVpcmVkLFxuICAgIG1heExlbmd0aCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBjdXN0b21OYW1lLFxuICB9ID0gZmllbGQ7XG5cbiAgY29uc3QgeyBJbnB1dCA9ICdpbnB1dCcsIExhYmVsID0gJ2xhYmVsJywgQm94ID0gJ2RpdicgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcbiAgICAgICAgICA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuICAgICAgICAgIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH0gY2xhc3NOYW1lPXtgZ2YtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAge2lzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfWB9XG4gICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9YH1cbiAgICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgICAgdmFsdWU9eyF2YWx1ZSA/ICcnIDogdmFsdWV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPXttYXhMZW5ndGh9XG4gICAgICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbkJsdXI9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICBzZXRGb2N1c0NsYXNzKHZhbHVlICE9PSAnJyk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldEZvY3VzQ2xhc3ModHJ1ZSl9XG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfVxuICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9eyghIXZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8ICEhZXJyb3J9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH0+XG4gICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgfHwgZXJyb3J9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl19