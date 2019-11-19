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
      customName = field.customName,
      inputs = field.inputs;

  var _ref2 = styledComponents || false,
      _ref2$Input = _ref2.Input,
      Input = _ref2$Input === void 0 ? 'input' : _ref2$Input,
      _ref2$Label = _ref2.Label,
      Label = _ref2$Label === void 0 ? 'label' : _ref2$Label,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? 'div' : _ref2$Box;

  return _react["default"].createElement(Box, {
    width: width,
    className: validationMessage && touched ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
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
  }, description) : _react["default"].createElement("div", {
    className: "ginput_container ginput_container_password"
  }, inputs && inputs.length && inputs.map(function (input, i) {
    return _react["default"].createElement("span", {
      key: "input_".concat(formId, "_").concat(input.id),
      className: "".concat(inputs.length > 1 ? "ginput_".concat(i === 0 ? 'left' : 'right') : 'medim')
    }, _react["default"].createElement(Input, {
      id: "input_".concat(formId, "_").concat(input.id, "_").concat(i),
      name: customName || "input_".concat(id).concat(i === 1 ? "_".concat(i) : ''),
      type: type,
      value: input.value,
      placeholder: placeholder,
      required: isRequired,
      autoComplete: "off",
      onChange: function onChange(event) {
        field.subId = i;
        updateForm(event, field);
      },
      onBlur: function onBlur(event) {
        updateForm(event, field);
        setTouched(id);
      },
      "aria-label": label,
      "aria-describedby": "error_".concat(formId, "_").concat(input.id, "_").concat(i),
      "aria-invalid": !!validationMessage && touched
    }), inputs && inputs.length == 2 && _react["default"].createElement("label", {
      htmlFor: "input_".concat(formId, "_").concat(input.id, "_").concat(i)
    }, input.label));
  })), validationMessage && touched && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(formId, "_").concat(id)
  }, validationMessage)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUGFzc3dvcmQuanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInN0eWxlZENvbXBvbmVudHMiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwiY3NzQ2xhc3MiLCJwbGFjZWhvbGRlciIsImlzUmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJpbnB1dHMiLCJJbnB1dCIsIkxhYmVsIiwiQm94IiwiZGlzcGxheSIsInVuZGVmaW5lZCIsImxlbmd0aCIsIm1hcCIsImlucHV0IiwiaSIsImV2ZW50Iiwic3ViSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7ZUFFZSx3QkFVVDtBQUFBLE1BVEpBLEtBU0ksUUFUSkEsS0FTSTtBQUFBLE1BUkpDLEtBUUksUUFSSkEsS0FRSTtBQUFBLE1BUEpDLGlCQU9JLFFBUEpBLGlCQU9JO0FBQUEsTUFOSkMsT0FNSSxRQU5KQSxPQU1JO0FBQUEsTUFMSkMsVUFLSSxRQUxKQSxVQUtJO0FBQUEsTUFKSkMsU0FJSSxRQUpKQSxTQUlJO0FBQUEsTUFISkMsVUFHSSxRQUhKQSxVQUdJO0FBQUEsTUFGSkMsZ0JBRUksUUFGSkEsZ0JBRUk7QUFBQSxNQUREQyxLQUNDOztBQUFBLE1BRUZDLEVBRkUsR0FnQkFULEtBaEJBLENBRUZTLEVBRkU7QUFBQSxNQUdGQyxNQUhFLEdBZ0JBVixLQWhCQSxDQUdGVSxNQUhFO0FBQUEsTUFJRkMsSUFKRSxHQWdCQVgsS0FoQkEsQ0FJRlcsSUFKRTtBQUFBLE1BS0ZDLEtBTEUsR0FnQkFaLEtBaEJBLENBS0ZZLEtBTEU7QUFBQSxNQU1GQyxRQU5FLEdBZ0JBYixLQWhCQSxDQU1G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T0FYSDtBQVlFLE1BQUEsTUFBTSxFQUFFLGdCQUFDZ0MsS0FBRCxFQUFXO0FBQ2pCMUIsUUFBQUEsVUFBVSxDQUFDMEIsS0FBRCxFQUFRaEMsS0FBUixDQUFWO0FBQ0FJLFFBQUFBLFVBQVUsQ0FBQ0ssRUFBRCxDQUFWO0FBQ0QsT0FmSDtBQWdCRSxvQkFBWUcsS0FoQmQ7QUFpQkUsMENBQTJCRixNQUEzQixjQUFxQ29CLEtBQUssQ0FBQ3JCLEVBQTNDLGNBQWlEc0IsQ0FBakQsQ0FqQkY7QUFrQkUsc0JBQWMsQ0FBQyxDQUFDN0IsaUJBQUYsSUFBdUJDO0FBbEJ2QyxNQU5GLEVBMEJHbUIsTUFBTSxJQUFJQSxNQUFNLENBQUNNLE1BQVAsSUFBaUIsQ0FBM0IsSUFDQztBQUFPLE1BQUEsT0FBTyxrQkFBV2xCLE1BQVgsY0FBcUJvQixLQUFLLENBQUNyQixFQUEzQixjQUFpQ3NCLENBQWpDO0FBQWQsT0FBcURELEtBQUssQ0FBQ2xCLEtBQTNELENBM0JKLENBRFM7QUFBQSxHQUFYLENBSEosQ0FSSixFQTZDR1YsaUJBQWlCLElBQUlDLE9BQXJCLElBQ0M7QUFBTSxJQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFnQyxJQUFBLEVBQUUsa0JBQVdPLE1BQVgsY0FBcUJELEVBQXJCO0FBQWxDLEtBQ0dQLGlCQURILENBOUNKLENBUEYsQ0FERjtBQTZERCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgaGlkZUZpZWxkLFxuICB1cGRhdGVGb3JtLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgZm9ybUlkLFxuICAgIHR5cGUsXG4gICAgbGFiZWwsXG4gICAgY3NzQ2xhc3MsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBtYXhMZW5ndGgsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgd2lkdGgsXG4gICAgY3VzdG9tTmFtZSxcbiAgICBpbnB1dHMsXG4gIH0gPSBmaWVsZDtcblxuICBjb25zdCB7IElucHV0ID0gJ2lucHV0JywgTGFiZWwgPSAnbGFiZWwnLCBCb3ggPSAnZGl2JyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH0gY2xhc3NOYW1lPXtgZ2YtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAge2lzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2lucHV0X2NvbnRhaW5lciBnaW5wdXRfY29udGFpbmVyX3Bhc3N3b3JkXCI+XG4gICAgICAgICAgICB7aW5wdXRzICYmXG4gICAgICAgICAgICAgIGlucHV0cy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgaW5wdXRzLm1hcCgoaW5wdXQsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAga2V5PXtgaW5wdXRfJHtmb3JtSWR9XyR7aW5wdXQuaWR9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0cy5sZW5ndGggPiAxID8gYGdpbnB1dF8ke2kgPT09IDAgPyAnbGVmdCcgOiAncmlnaHQnfWAgOiAnbWVkaW0nXG4gICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpbnB1dC5pZH1fJHtpfWB9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9JHtpID09PSAxID8gYF8ke2l9YCA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnN1YklkID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17YGVycm9yXyR7Zm9ybUlkfV8ke2lucHV0LmlkfV8ke2l9YH1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXshIXZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge2lucHV0cyAmJiBpbnB1dHMubGVuZ3RoID09IDIgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGlucHV0XyR7Zm9ybUlkfV8ke2lucHV0LmlkfV8ke2l9YH0+e2lucHV0LmxhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXX0=