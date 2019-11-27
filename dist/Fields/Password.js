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
  }, description) : _react["default"].createElement("div", {
    className: "ginput_container ginput_container_password"
  }, inputs && inputs.length && inputs.map(function (input, i) {
    return _react["default"].createElement("span", {
      key: "input_".concat(formId, "_").concat(input.id),
      className: "".concat(inputs.length > 1 ? "ginput_".concat(i === 0 ? 'left' : 'right') : 'medim')
    }, _react["default"].createElement(Input, {
      id: "input_".concat(formId, "_").concat(input.id, "_").concat(i),
      name: customName || "input_".concat(id).concat(i === 1 ? "_".concat(i + 1) : ''),
      type: type,
      value: input.value,
      placeholder: placeholder,
      required: isRequired,
      autoComplete: "off",
      onChange: function onChange(event) {
        field.subId = i;
        updateForm(event, field);
        unsetError(id);
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
  })), (validationMessage && touched || error) && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(formId, "_").concat(id)
  }, validationMessage || error), description && _react["default"].createElement("div", {
    className: "description"
  }, description)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUGFzc3dvcmQuanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwiY3NzQ2xhc3MiLCJwbGFjZWhvbGRlciIsImlzUmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJpbnB1dHMiLCJJbnB1dCIsIkxhYmVsIiwiQm94IiwiZGlzcGxheSIsInVuZGVmaW5lZCIsImxlbmd0aCIsIm1hcCIsImlucHV0IiwiaSIsImV2ZW50Iiwic3ViSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7ZUFFZSx3QkFZVDtBQUFBLE1BWEpBLEtBV0ksUUFYSkEsS0FXSTtBQUFBLE1BVkpDLEtBVUksUUFWSkEsS0FVSTtBQUFBLE1BVEpDLGlCQVNJLFFBVEpBLGlCQVNJO0FBQUEsTUFSSkMsT0FRSSxRQVJKQSxPQVFJO0FBQUEsTUFQSkMsVUFPSSxRQVBKQSxVQU9JO0FBQUEsTUFOSkMsU0FNSSxRQU5KQSxTQU1JO0FBQUEsTUFMSkMsVUFLSSxRQUxKQSxVQUtJO0FBQUEsTUFKSkMsZ0JBSUksUUFKSkEsZ0JBSUk7QUFBQSxNQUhKQyxLQUdJLFFBSEpBLEtBR0k7QUFBQSxNQUZKQyxVQUVJLFFBRkpBLFVBRUk7QUFBQSxNQUREQyxLQUNDOztBQUFBLE1BRUZDLEVBRkUsR0FnQkFYLEtBaEJBLENBRUZXLEVBRkU7QUFBQSxNQUdGQyxNQUhFLEdBZ0JBWixLQWhCQSxDQUdGWSxNQUhFO0FBQUEsTUFJRkMsSUFKRSxHQWdCQWIsS0FoQkEsQ0FJRmEsSUFK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S0FBRCxFQUFXO0FBQ25CbEMsUUFBQUEsS0FBSyxDQUFDbUMsS0FBTixHQUFjRixDQUFkO0FBQ0EzQixRQUFBQSxVQUFVLENBQUM0QixLQUFELEVBQVFsQyxLQUFSLENBQVY7QUFDQVMsUUFBQUEsVUFBVSxDQUFDRSxFQUFELENBQVY7QUFDRCxPQVpIO0FBYUUsTUFBQSxNQUFNLEVBQUUsZ0JBQUN1QixLQUFELEVBQVc7QUFDakI1QixRQUFBQSxVQUFVLENBQUM0QixLQUFELEVBQVFsQyxLQUFSLENBQVY7QUFDQUksUUFBQUEsVUFBVSxDQUFDTyxFQUFELENBQVY7QUFDRCxPQWhCSDtBQWlCRSxvQkFBWUcsS0FqQmQ7QUFrQkUsMENBQTJCRixNQUEzQixjQUFxQ29CLEtBQUssQ0FBQ3JCLEVBQTNDLGNBQWlEc0IsQ0FBakQsQ0FsQkY7QUFtQkUsc0JBQWMsQ0FBQyxDQUFDL0IsaUJBQUYsSUFBdUJDO0FBbkJ2QyxNQU5GLEVBMkJHcUIsTUFBTSxJQUFJQSxNQUFNLENBQUNNLE1BQVAsSUFBaUIsQ0FBM0IsSUFDQztBQUFPLE1BQUEsT0FBTyxrQkFBV2xCLE1BQVgsY0FBcUJvQixLQUFLLENBQUNyQixFQUEzQixjQUFpQ3NCLENBQWpDO0FBQWQsT0FBcURELEtBQUssQ0FBQ2xCLEtBQTNELENBNUJKLENBRFk7QUFBQSxHQUFYLENBSFAsQ0FSSixFQThDRyxDQUFFWixpQkFBaUIsSUFBSUMsT0FBdEIsSUFBa0NLLEtBQW5DLEtBQ0M7QUFBTSxJQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFnQyxJQUFBLEVBQUUsa0JBQVdJLE1BQVgsY0FBcUJELEVBQXJCO0FBQWxDLEtBQ0dULGlCQUFpQixJQUFJTSxLQUR4QixDQS9DSixFQW1ER1csV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0FuRGxCLENBVEYsQ0FERjtBQWlFRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgaGlkZUZpZWxkLFxuICB1cGRhdGVGb3JtLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICBlcnJvcixcbiAgdW5zZXRFcnJvcixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGZvcm1JZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIGNzc0NsYXNzLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgbWF4TGVuZ3RoLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgIGxhYmVsUGxhY2VtZW50LFxuICAgIHdpZHRoLFxuICAgIGN1c3RvbU5hbWUsXG4gICAgaW5wdXRzLFxuICB9ID0gZmllbGQ7XG5cbiAgY29uc3QgeyBJbnB1dCA9ICdpbnB1dCcsIExhYmVsID0gJ2xhYmVsJywgQm94ID0gJ2RpdicgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yXG4gICAgICAgICAgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWBcbiAgICAgICAgICA6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuICAgICAgfVxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gJ25vbmUnIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9PlxuICAgICAgICA8TGFiZWwgaHRtbEZvcj17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfWB9IGNsYXNzTmFtZT17YGdmLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICA8L0xhYmVsPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09ICdhYm92ZScgJiYgZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdpbnB1dF9jb250YWluZXIgZ2lucHV0X2NvbnRhaW5lcl9wYXNzd29yZFwiPlxuICAgICAgICAgICAge2lucHV0c1xuICAgICAgICAgICAgICAmJiBpbnB1dHMubGVuZ3RoXG4gICAgICAgICAgICAgICYmIGlucHV0cy5tYXAoKGlucHV0LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGtleT17YGlucHV0XyR7Zm9ybUlkfV8ke2lucHV0LmlkfWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgICBpbnB1dHMubGVuZ3RoID4gMSA/IGBnaW5wdXRfJHtpID09PSAwID8gJ2xlZnQnIDogJ3JpZ2h0J31gIDogJ21lZGltJ1xuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aW5wdXQuaWR9XyR7aX1gfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfSR7aSA9PT0gMSA/IGBfJHtpICsgMX1gIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQuc3ViSWQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtgZXJyb3JfJHtmb3JtSWR9XyR7aW5wdXQuaWR9XyR7aX1gfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhdmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7aW5wdXRzICYmIGlucHV0cy5sZW5ndGggPT0gMiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aW5wdXQuaWR9XyR7aX1gfT57aW5wdXQubGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgeygodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3IpICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSB8fCBlcnJvcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==