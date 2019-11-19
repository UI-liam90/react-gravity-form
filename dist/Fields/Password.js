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
  console.log('validationMessage', validationMessage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUGFzc3dvcmQuanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInN0eWxlZENvbXBvbmVudHMiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwiY3NzQ2xhc3MiLCJwbGFjZWhvbGRlciIsImlzUmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJpbnB1dHMiLCJjb25zb2xlIiwibG9nIiwiSW5wdXQiLCJMYWJlbCIsIkJveCIsImRpc3BsYXkiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJtYXAiLCJpbnB1dCIsImkiLCJldmVudCIsInN1YklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O2VBRWUsd0JBVVQ7QUFBQSxNQVRKQSxLQVNJLFFBVEpBLEtBU0k7QUFBQSxNQVJKQyxLQVFJLFFBUkpBLEtBUUk7QUFBQSxNQVBKQyxpQkFPSSxRQVBKQSxpQkFPSTtBQUFBLE1BTkpDLE9BTUksUUFOSkEsT0FNSTtBQUFBLE1BTEpDLFVBS0ksUUFMSkEsVUFLSTtBQUFBLE1BSkpDLFNBSUksUUFKSkEsU0FJSTtBQUFBLE1BSEpDLFVBR0ksUUFISkEsVUFHSTtBQUFBLE1BRkpDLGdCQUVJLFFBRkpBLGdCQUVJO0FBQUEsTUFEREMsS0FDQzs7QUFBQSxNQUVGQyxFQUZFLEdBZ0JBVCxLQWhCQSxDQUVGUyxFQUZFO0FBQUEsTUFHRkMsTUFIRSxHQWdCQVYsS0FoQkEsQ0FHRlUsTUFIRTtBQUFBLE1BSUZDLElBSkUsR0FnQkFYLEtBaEJBLENBSUZXLElBSkU7QUFBQSxNQUtGQyxLQUxFLEdBZ0JBWixLQWhCQSxDQUtGWSxLQUxFO0FBQUEsTUFNRkMsUUFORSxH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Q21DLEtBQU4sR0FBY0YsQ0FBZDtBQUNBM0IsUUFBQUEsVUFBVSxDQUFDNEIsS0FBRCxFQUFRbEMsS0FBUixDQUFWO0FBQ0QsT0FYSDtBQVlFLE1BQUEsTUFBTSxFQUFFLGdCQUFDa0MsS0FBRCxFQUFXO0FBQ2pCNUIsUUFBQUEsVUFBVSxDQUFDNEIsS0FBRCxFQUFRbEMsS0FBUixDQUFWO0FBQ0FJLFFBQUFBLFVBQVUsQ0FBQ0ssRUFBRCxDQUFWO0FBQ0QsT0FmSDtBQWdCRSxvQkFBWUcsS0FoQmQ7QUFpQkUsMENBQTJCRixNQUEzQixjQUFxQ3NCLEtBQUssQ0FBQ3ZCLEVBQTNDLGNBQWlEd0IsQ0FBakQsQ0FqQkY7QUFrQkUsc0JBQWMsQ0FBQyxDQUFDL0IsaUJBQUYsSUFBdUJDO0FBbEJ2QyxNQU5GLEVBMEJHbUIsTUFBTSxJQUFJQSxNQUFNLENBQUNRLE1BQVAsSUFBaUIsQ0FBM0IsSUFDQztBQUFPLE1BQUEsT0FBTyxrQkFBV3BCLE1BQVgsY0FBcUJzQixLQUFLLENBQUN2QixFQUEzQixjQUFpQ3dCLENBQWpDO0FBQWQsT0FBcURELEtBQUssQ0FBQ3BCLEtBQTNELENBM0JKLENBRFM7QUFBQSxHQUFYLENBSEosQ0FSSixFQTZDR1YsaUJBQWlCLElBQUlDLE9BQXJCLElBQ0M7QUFBTSxJQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFnQyxJQUFBLEVBQUUsa0JBQVdPLE1BQVgsY0FBcUJELEVBQXJCO0FBQWxDLEtBQ0dQLGlCQURILENBOUNKLENBUEYsQ0FERjtBQTZERCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgaGlkZUZpZWxkLFxuICB1cGRhdGVGb3JtLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgZm9ybUlkLFxuICAgIHR5cGUsXG4gICAgbGFiZWwsXG4gICAgY3NzQ2xhc3MsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBtYXhMZW5ndGgsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgd2lkdGgsXG4gICAgY3VzdG9tTmFtZSxcbiAgICBpbnB1dHMsXG4gIH0gPSBmaWVsZDtcbiAgY29uc29sZS5sb2coJ3ZhbGlkYXRpb25NZXNzYWdlJywgdmFsaWRhdGlvbk1lc3NhZ2UpO1xuXG4gIGNvbnN0IHsgSW5wdXQgPSAnaW5wdXQnLCBMYWJlbCA9ICdsYWJlbCcsIEJveCA9ICdkaXYnIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/ICdub25lJyA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAgPExhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfSBjbGFzc05hbWU9e2BnZi1sYWJlbCAke2xhYmVsUGxhY2VtZW50fWB9PlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICB7aXNSZXF1aXJlZCA/IDxhYmJyPio8L2FiYnI+IDogbnVsbH1cbiAgICAgICAgPC9MYWJlbD5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgIGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnaW5wdXRfY29udGFpbmVyIGdpbnB1dF9jb250YWluZXJfcGFzc3dvcmRcIj5cbiAgICAgICAgICAgIHtpbnB1dHMgJiZcbiAgICAgICAgICAgICAgaW5wdXRzLmxlbmd0aCAmJlxuICAgICAgICAgICAgICBpbnB1dHMubWFwKChpbnB1dCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBrZXk9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpbnB1dC5pZH1gfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzLmxlbmd0aCA+IDEgPyBgZ2lucHV0XyR7aSA9PT0gMCA/ICdsZWZ0JyA6ICdyaWdodCd9YCA6ICdtZWRpbSdcbiAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lucHV0LmlkfV8ke2l9YH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpZH0ke2kgPT09IDEgPyBgXyR7aX1gIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQuc3ViSWQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtgZXJyb3JfJHtmb3JtSWR9XyR7aW5wdXQuaWR9XyR7aX1gfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhdmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7aW5wdXRzICYmIGlucHV0cy5sZW5ndGggPT0gMiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aW5wdXQuaWR9XyR7aX1gfT57aW5wdXQubGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==