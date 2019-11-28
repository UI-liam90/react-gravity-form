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
      setFocusClass = _ref.setFocusClass,
      cssClass = _ref.cssClass,
      props = _objectWithoutProperties(_ref, ["field", "value", "validationMessage", "touched", "setTouched", "hideField", "updateForm", "styledComponents", "error", "unsetError", "setFocusClass", "cssClass"]);

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
        setFocusClass(item.value !== '');
      },
      onFocus: function onFocus() {
        return setFocusClass(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvRGF0ZS5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsImVycm9yIiwidW5zZXRFcnJvciIsInNldEZvY3VzQ2xhc3MiLCJjc3NDbGFzcyIsInByb3BzIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImlzUmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImlucHV0cyIsImN1c3RvbU5hbWUiLCJJbnB1dCIsIkxhYmVsIiwiQm94IiwiZGlzcGxheSIsInVuZGVmaW5lZCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImV2ZW50Iiwic3ViSWQiLCJkYXRlTGFiZWwiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O2VBRWUsd0JBY1Q7QUFBQSxNQWJKQSxLQWFJLFFBYkpBLEtBYUk7QUFBQSxNQVpKQyxLQVlJLFFBWkpBLEtBWUk7QUFBQSxNQVhKQyxpQkFXSSxRQVhKQSxpQkFXSTtBQUFBLE1BVkpDLE9BVUksUUFWSkEsT0FVSTtBQUFBLE1BVEpDLFVBU0ksUUFUSkEsVUFTSTtBQUFBLE1BUkpDLFNBUUksUUFSSkEsU0FRSTtBQUFBLE1BUEpDLFVBT0ksUUFQSkEsVUFPSTtBQUFBLE1BTkpDLGdCQU1JLFFBTkpBLGdCQU1JO0FBQUEsTUFMSkMsS0FLSSxRQUxKQSxLQUtJO0FBQUEsTUFKSkMsVUFJSSxRQUpKQSxVQUlJO0FBQUEsTUFISkMsYUFHSSxRQUhKQSxhQUdJO0FBQUEsTUFGSkMsUUFFSSxRQUZKQSxRQUVJO0FBQUEsTUFEREMsS0FDQzs7QUFBQSxNQUVGQyxFQUZF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LENBdkNaLENBRFk7QUFBQSxHQUFYLENBRlAsRUE4Q0dZLFdBQVcsSUFBSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBOEJBLFdBQTlCLENBOUNsQixDQUpKLENBYkYsQ0FERjtBQXNFRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgaGlkZUZpZWxkLFxuICB1cGRhdGVGb3JtLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICBlcnJvcixcbiAgdW5zZXRFcnJvcixcbiAgc2V0Rm9jdXNDbGFzcyxcbiAgY3NzQ2xhc3MsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBmb3JtSWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBpc1JlcXVpcmVkLFxuICAgIG1heExlbmd0aCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBpbnB1dHMsXG4gICAgY3VzdG9tTmFtZSxcbiAgfSA9IGZpZWxkO1xuXG4gIGNvbnN0IHsgSW5wdXQgPSAnaW5wdXQnLCBMYWJlbCA9ICdsYWJlbCcsIEJveCA9ICdkaXYnIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yXG4gICAgICAgICAgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWBcbiAgICAgICAgICA6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuICAgICAgfVxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gJ25vbmUnIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPExhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfSBjbGFzc05hbWU9e2BnZi1sYWJlbCAke2xhYmVsUGxhY2VtZW50fWB9PlxuICAgICAgICB7bGFiZWx9XG4gICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgPC9MYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgIGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge2lucHV0c1xuICAgICAgICAgICAgICAmJiBpbnB1dHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XyR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9W11gfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aXRlbS5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgbWF4PXtcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxhYmVsID09PSAnTU0nXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDEyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0ubGFiZWwgPT09ICdERCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAzMVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSArIDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9e2l0ZW0ubGFiZWwgPT09ICdZWVlZJyA/IDQgOiAyfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5zdWJJZCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGVMYWJlbCA9IGl0ZW0ubGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldEZvY3VzQ2xhc3MoaXRlbS52YWx1ZSAhPT0gJycpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRGb2N1c0NsYXNzKHRydWUpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiaGlkZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgJiYgdG91Y2hlZFxuICAgICAgICAgICAgICAgICAgICAmJiB2YWxpZGF0aW9uTWVzc2FnZVtpbmRleF1cbiAgICAgICAgICAgICAgICAgICAgJiYgaW5kZXggPT09IHZhbGlkYXRpb25NZXNzYWdlW2luZGV4XS5pbmRleFxuICAgICAgICAgICAgICAgICAgICAmJiB2YWxpZGF0aW9uTWVzc2FnZVtpbmRleF0ubWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2l0ZW0uaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlW2luZGV4XS5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAge2Vycm9yICYmIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIj57ZXJyb3J9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2Pn1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl19