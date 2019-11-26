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
      placeholder = field.placeholder,
      isRequired = field.isRequired,
      maxLength = field.maxLength,
      description = field.description,
      descriptionPlacement = field.descriptionPlacement,
      labelPlacement = field.labelPlacement,
      width = field.width,
      inputs = field.inputs,
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
  }, _react["default"].createElement(Label, {
    htmlFor: "input_".concat(formId, "_").concat(id),
    className: "gf-label ".concat(labelPlacement)
  }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), _react["default"].createElement("div", {
    className: type
  }, descriptionPlacement === 'above' && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, inputs && inputs.map(function (item, index) {
    return _react["default"].createElement("div", {
      className: type,
      key: item.id
    }, _react["default"].createElement(Input, {
      id: "input_".concat(formId, "_").concat(id, "_").concat(index),
      type: "number",
      name: customName || "input_".concat(id, "[]"),
      placeholder: item.placeholder,
      step: "1",
      min: "1",
      max: item.label === 'MM' ? 12 : item.label === 'DD' ? 31 : new Date().getFullYear() + 1,
      maxLength: item.label === 'YYYY' ? 4 : 2,
      value: item.value,
      onBlur: function onBlur(event) {
        field.subId = index;
        field.dateLabel = item.label;
        updateForm(event, field);
        setTouched(id);
        unsetError(id);
      }
    }), _react["default"].createElement("label", {
      htmlFor: "input_".concat(formId, "_").concat(id, "_").concat(index),
      className: "hide-label"
    }, item.label), validationMessage && touched && validationMessage[index] && index === validationMessage[index].index && validationMessage[index].message && _react["default"].createElement("span", {
      className: "error-message",
      id: "error_".concat(formId, "_").concat(item.id)
    }, validationMessage[index].message), error && _react["default"].createElement("span", {
      className: "error-message"
    }, error));
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description))));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvRGF0ZS5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsImVycm9yIiwidW5zZXRFcnJvciIsInByb3BzIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJjc3NDbGFzcyIsInBsYWNlaG9sZGVyIiwiaXNSZXF1aXJlZCIsIm1heExlbmd0aCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiaW5wdXRzIiwiY3VzdG9tTmFtZSIsIklucHV0IiwiTGFiZWwiLCJCb3giLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwibWFwIiwiaXRlbSIsImluZGV4IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZXZlbnQiLCJzdWJJZCIsImRhdGVMYWJlbCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7ZUFFZSx3QkFZVDtBQUFBLE1BWEpBLEtBV0ksUUFYSkEsS0FXSTtBQUFBLE1BVkpDLEtBVUksUUFWSkEsS0FVSTtBQUFBLE1BVEpDLGlCQVNJLFFBVEpBLGlCQVNJO0FBQUEsTUFSSkMsT0FRSSxRQVJKQSxPQVFJO0FBQUEsTUFQSkMsVUFPSSxRQVBKQSxVQU9JO0FBQUEsTUFOSkMsU0FNSSxRQU5KQSxTQU1JO0FBQUEsTUFMSkMsVUFLSSxRQUxKQSxVQUtJO0FBQUEsTUFKSkMsZ0JBSUksUUFKSkEsZ0JBSUk7QUFBQSxNQUhKQyxLQUdJLFFBSEpBLEtBR0k7QUFBQSxNQUZKQyxVQUVJLFFBRkpBLFVBRUk7QUFBQSxNQUREQyxLQUNDOztBQUFBLE1BRUZDLEVBRkUsR0FnQkFYLEtBaEJBLENBRUZXLEVBRkU7QUFBQSxNQUdGQyxNQUhFLEdBZ0JBWixLQWhCQSxDQUdGWSxNQUhFO0FBQUEs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dCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICB0b3VjaGVkLFxuICBzZXRUb3VjaGVkLFxuICBoaWRlRmllbGQsXG4gIHVwZGF0ZUZvcm0sXG4gIHN0eWxlZENvbXBvbmVudHMsXG4gIGVycm9yLFxuICB1bnNldEVycm9yLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgZm9ybUlkLFxuICAgIHR5cGUsXG4gICAgbGFiZWwsXG4gICAgY3NzQ2xhc3MsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBtYXhMZW5ndGgsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgd2lkdGgsXG4gICAgaW5wdXRzLFxuICAgIGN1c3RvbU5hbWUsXG4gIH0gPSBmaWVsZDtcblxuICBjb25zdCB7IElucHV0ID0gJ2lucHV0JywgTGFiZWwgPSAnbGFiZWwnLCBCb3ggPSAnZGl2JyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvclxuICAgICAgICAgID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gXG4gICAgICAgICAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/ICdub25lJyA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxMYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH0gY2xhc3NOYW1lPXtgZ2YtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAge2xhYmVsfVxuICAgICAgICB7aXNSZXF1aXJlZCA/IDxhYmJyPio8L2FiYnI+IDogbnVsbH1cbiAgICAgIDwvTGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtpbnB1dHMgJiZcbiAgICAgICAgICAgICAgaW5wdXRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfVtdYH1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2l0ZW0ucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIG1heD17XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYWJlbCA9PT0gJ01NJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAxMlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLmxhYmVsID09PSAnREQnXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDMxXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSArIDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9e2l0ZW0ubGFiZWwgPT09ICdZWVlZJyA/IDQgOiAyfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5zdWJJZCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGVMYWJlbCA9IGl0ZW0ubGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiaGlkZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hlZCAmJlxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZVtpbmRleF0gJiZcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IHZhbGlkYXRpb25NZXNzYWdlW2luZGV4XS5pbmRleCAmJlxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZVtpbmRleF0ubWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aXRlbS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZVtpbmRleF0ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiPntlcnJvcn08L3NwYW4+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXX0=