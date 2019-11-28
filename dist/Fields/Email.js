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
    "aria-label": label,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvRW1haWwuanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJzZXRGb2N1c0NsYXNzIiwiY3NzQ2xhc3MiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJpc1JlcXVpcmVkIiwibWF4TGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwiSW5wdXQiLCJMYWJlbCIsIkJveCIsImRpc3BsYXkiLCJ1bmRlZmluZWQiLCJldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztlQUVlLHdCQWNUO0FBQUEsTUFiSkEsS0FhSSxRQWJKQSxLQWFJO0FBQUEsTUFaSkMsS0FZSSxRQVpKQSxLQVlJO0FBQUEsTUFYSkMsaUJBV0ksUUFYSkEsaUJBV0k7QUFBQSxNQVZKQyxPQVVJLFFBVkpBLE9BVUk7QUFBQSxNQVRKQyxVQVNJLFFBVEpBLFVBU0k7QUFBQSxNQVJKQyxTQVFJLFFBUkpBLFNBUUk7QUFBQSxNQVBKQyxVQU9JLFFBUEpBLFVBT0k7QUFBQSxNQU5KQyxnQkFNSSxRQU5KQSxnQkFNSTtBQUFBLE1BTEpDLEtBS0ksUUFMSkEsS0FLSTtBQUFBLE1BSkpDLFVBSUksUUFKSkEsVUFJSTtBQUFBLE1BSEpDLGFBR0ksUUFISkEsYUFHSTtBQUFBLE1BRkpDLFFBRUksUUFGSkEsUUFFSTtBQUFBLE1BRERDLEtBQ0M7O0FBQUEsTUFFRkMsRUFGRSxHQWNBYixLQWRBLENBRUZhLEVBRkU7QUFBQSxNQUdGQyxNQUhFLEdBY0FkLEtBZEEsQ0FHRmMsTUFIRTtBQUFBLE1BSUZDLElBSkUsR0FjQWYsS0FkQSxDQUlGZSxJQUpFO0FBQUEsTUFLRkMsS0FMRSxHQWNBaEIsS0FkQSxDQUtGZ0IsS0FMRTtBQUFBLE1BTUZDLFdBTkUsR0FjQWpCLEtBZEEsQ0FNRmlCLFdBTkU7QUFBQSxNQU9GQyxVQVBFLEdBY0FsQixLQWRBLENBT0ZrQixVQVBFO0FBQUEsTUFRRkMsU0FSRSxHQWNBbkIsS0FkQSxDQVFGbUIsU0FSRTtBQUFBLE1BU0ZDLFdBVEUsR0FjQXBCLEtBZEEsQ0FTRm9CLFdBVEU7QUFBQSxNQVVGQyxvQkFWRSxHQWNBckIsS0FkQSxDQVVGcUIsb0JBVkU7QUFBQSxNQVdGQyxjQVhFLEdBY0F0QixLQWRBLENBV0ZzQixjQVhFO0FBQUEsTUFZRkMsS0FaRSxHQWNBdkIsS0FkQSxDQVlGdUIsS0FaRTtBQUFBLE1BYUZDLFVBYkUsR0FjQXhCLEtBZEEsQ0FhRndCLFVBYkU7O0FBQUEsY0FnQnNEakIsZ0JBQWdCLElBQUksS0FoQjFFO0FBQUEsMEJBZ0JJa0IsS0FoQko7QUFBQSxNQWdCSUEsS0FoQkosNEJBZ0JZLE9BaEJaO0FBQUEsMEJBZ0JxQkMsS0FoQnJCO0FBQUEsTUFnQnFCQSxLQWhCckIsNEJBZ0I2QixPQWhCN0I7QUFBQSx3QkFnQnNDQyxHQWhCdEM7QUFBQSxNQWdCc0NBLEdBaEJ0QywwQkFnQjRDLEtBaEI1Qzs7QUFpQkosU0FDRSxnQ0FBQyxHQUFEO0FBQ0UsSUFBQSxLQUFLLEVBQUVKLEtBRFQ7QUFFRSxJQUFBLFNBQVMsRUFDTnJCLGlCQUFpQixJQUFJQyxPQUF0QixJQUFrQ0ssS0FBbEMsOEJBQ3dCRyxRQUR4Qix5QkFFa0JBLFFBRmxCLENBSEo7QUFPRSxJQUFBLEtBQUssRUFBRTtBQUFFaUIsTUFBQUEsT0FBTyxFQUFFdkIsU0FBUyxHQUFHLE1BQUgsR0FBWXdCO0FBQWhDO0FBUFQsS0FTRTtBQUFLLElBQUEsU0FBUyxFQUFFZDtBQUFoQixLQUNFLGdDQUFDLEtBQUQ7QUFBTyxJQUFBLE9BQU8sa0JBQVdELE1BQVgsY0FBcUJELEVBQXJCLENBQWQ7QUFBeUMsSUFBQSxTQUFTLHFCQUFjUyxjQUFkO0FBQWxELEtBQ0dOLEtBREgsRUFFR0UsVUFBVSxHQUFHLGtEQUFILEdBQW9CLElBRmpDLENBREYsRUFLR0csb0JBQW9CLEtBQUssT0FBekIsSUFBb0NELFdBQXBDLEdBQ0NBLFdBQVcsSUFBSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBOEJBLFdBQTlCLENBRGhCLEdBR0MsZ0NBQUMsaUJBQUQsQ0FBTyxRQUFQLFFBQ0UsZ0NBQUMsS0FBRDtBQUNFLElBQUEsRUFBRSxrQkFBV04sTUFBWCxjQUFxQkQsRUFBckIsQ0FESjtBQUVFLElBQUEsSUFBSSxFQUFFVyxVQUFVLG9CQUFhWCxFQUFiLENBRmxCO0FBR0UsSUFBQSxJQUFJLEVBQUVFLElBSFI7QUFJRSxJQUFBLEtBQUssRUFBRSxDQUFDZCxLQUFELEdBQVMsRUFBVCxHQUFjQSxLQUp2QjtBQUtFLElBQUEsV0FBVyxFQUFFZ0IsV0FMZjtBQU1FLElBQUEsU0FBUyxFQUFFRSxTQU5iO0FBT0UsSUFBQSxRQUFRLEVBQUVELFVBUFo7QUFRRSxJQUFBLFFBQVEsRUFBRSxrQkFBQ1ksS0FBRCxFQUFXO0FBQ25CeEIsTUFBQUEsVUFBVSxDQUFDd0IsS0FBRCxFQUFROUIsS0FBUixDQUFWO0FBQ0FTLE1BQUFBLFVBQVUsQ0FBQ0ksRUFBRCxDQUFWO0FBQ0QsS0FYSDtBQVlFLElBQUEsTUFBTSxFQUFFLGdCQUFDaUIsS0FBRCxFQUFXO0FBQ2pCeEIsTUFBQUEsVUFBVSxDQUFDd0IsS0FBRCxFQUFROUIsS0FBUixDQUFWO0FBQ0FJLE1BQUFBLFVBQVUsQ0FBQ1MsRUFBRCxDQUFWO0FBQ0FILE1BQUFBLGFBQWEsQ0FBQ1QsS0FBSyxLQUFLLEVBQVgsQ0FBYjtBQUNELEtBaEJIO0FBaUJFLElBQUEsT0FBTyxFQUFFO0FBQUEsYUFBTVMsYUFBYSxDQUFDLElBQUQsQ0FBbkI7QUFBQSxLQWpCWDtBQWtCRSxrQkFBWU0sS0FsQmQ7QUFtQkUsd0NBQTJCRixNQUEzQixjQUFxQ0QsRUFBckMsQ0FuQkY7QUFvQkUsb0JBQWUsQ0FBQyxDQUFDWCxpQkFBRixJQUF1QkMsT0FBeEIsSUFBb0MsQ0FBQyxDQUFDSztBQXBCdEQsSUFERixFQXVCR1ksV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0F2QmxCLENBUkosRUFrQ0csQ0FBRWxCLGlCQUFpQixJQUFJQyxPQUF0QixJQUFrQ0ssS0FBbkMsS0FDQztBQUFNLElBQUEsU0FBUyxFQUFDLGVBQWhCO0FBQWdDLElBQUEsRUFBRSxrQkFBV00sTUFBWCxjQUFxQkQsRUFBckI7QUFBbEMsS0FDR1gsaUJBQWlCLElBQUlNLEtBRHhCLENBbkNKLENBVEYsQ0FERjtBQW9ERCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgaGlkZUZpZWxkLFxuICB1cGRhdGVGb3JtLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICBlcnJvcixcbiAgdW5zZXRFcnJvcixcbiAgc2V0Rm9jdXNDbGFzcyxcbiAgY3NzQ2xhc3MsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBmb3JtSWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBpc1JlcXVpcmVkLFxuICAgIG1heExlbmd0aCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBjdXN0b21OYW1lLFxuICB9ID0gZmllbGQ7XG5cbiAgY29uc3QgeyBJbnB1dCA9ICdpbnB1dCcsIExhYmVsID0gJ2xhYmVsJywgQm94ID0gJ2RpdicgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yXG4gICAgICAgICAgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWBcbiAgICAgICAgICA6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuICAgICAgfVxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gJ25vbmUnIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9PlxuICAgICAgICA8TGFiZWwgaHRtbEZvcj17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfWB9IGNsYXNzTmFtZT17YGdmLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICA8L0xhYmVsPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09ICdhYm92ZScgJiYgZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfVxuICAgICAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgIHZhbHVlPXshdmFsdWUgPyAnJyA6IHZhbHVlfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxuICAgICAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25CbHVyPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgc2V0Rm9jdXNDbGFzcyh2YWx1ZSAhPT0gJycpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRGb2N1c0NsYXNzKHRydWUpfVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9XG4gICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17KCEhdmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgISFlcnJvcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgICAgeygodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3IpICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSB8fCBlcnJvcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXX0=