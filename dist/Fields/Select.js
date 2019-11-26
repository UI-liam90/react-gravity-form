"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
      placeholder = field.placeholder,
      description = field.description,
      descriptionPlacement = field.descriptionPlacement,
      labelPlacement = field.labelPlacement,
      width = field.width,
      customName = field.customName; // Map options

  var options = choices.map(function (choice) {
    return {
      value: choice.value,
      label: choice.text
    };
  }); // Handle State

  var _useState = (0, _react.useState)(value || ''),
      _useState2 = _slicedToArray(_useState, 2),
      selectedOption = _useState2[0],
      selectOption = _useState2[1]; // Handle change


  var handleChange = function handleChange(option) {
    selectOption(option);
    var event = {
      target: {
        value: option
      }
    };
    updateForm(event, field);
  }; // Handle Blur


  var handleBlur = function handleBlur() {
    var event = {
      target: {
        value: selectedOption
      }
    };
    updateForm(event, field);
    setTouched(id);
  };

  var _ref2 = styledComponents || false,
      ReactSelect = _ref2.ReactSelect,
      _ref2$Label = _ref2.Label,
      Label = _ref2$Label === void 0 ? 'label' : _ref2$Label,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? 'div' : _ref2$Box;

  var RSelect = ReactSelect || _reactSelect["default"];
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
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(RSelect, {
    name: customName || "input_".concat(id),
    required: isRequired,
    value: selectedOption,
    onChange: function onChange(option) {
      handleChange(option, field);
      unsetError(id);
    },
    onBlur: function onBlur() {
      return handleBlur();
    },
    placeholder: placeholder,
    options: options,
    className: "form-select" // styles={customStyles}
    ,
    inputId: "input_".concat(formId, "_").concat(id)
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description)), (validationMessage && touched || error) && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(formId, "_").concat(id)
  }, validationMessage || error)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvU2VsZWN0LmpzeCJdLCJuYW1lcyI6WyJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsImhpZGVGaWVsZCIsInVwZGF0ZUZvcm0iLCJzdHlsZWRDb21wb25lbnRzIiwiZXJyb3IiLCJ1bnNldEVycm9yIiwicHJvcHMiLCJpZCIsImZvcm1JZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwiaXNSZXF1aXJlZCIsImNob2ljZXMiLCJwbGFjZWhvbGRlciIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiY3VzdG9tTmFtZSIsIm9wdGlvbnMiLCJtYXAiLCJjaG9pY2UiLCJ0ZXh0Iiwic2VsZWN0ZWRPcHRpb24iLCJzZWxlY3RPcHRpb24iLCJoYW5kbGVDaGFuZ2UiLCJvcHRpb24iLCJldmVudCIsInRhcmdldCIsImhhbmRsZUJsdXIiLCJSZWFjdFNlbGVjdCIsIkxhYmVsIiwiQm94IiwiUlNlbGVjdCIsIlNlbGVjdCIsImRpc3BsYXkiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRWUsd0JBWVQ7QUFBQSxNQVhKQSxLQVdJLFFBWEpBLEtBV0k7QUFBQSxNQVZKQyxLQVVJLFFBVkpBLEtBVUk7QUFBQSxNQVRKQyxpQkFTSSxRQVRKQSxpQkFTSTtBQUFBLE1BUkpDLE9BUUksUUFSSkEsT0FRSTtBQUFBLE1BUEpDLFVBT0ksUUFQSkEsVUFPSTtBQUFBLE1BTkpDLFNBTUksUUFOSkEsU0FNSTtBQUFBLE1BTEpDLFVBS0ksUUFMSkEsVUFLSTtBQUFBLE1BSkpDLGdCQUlJLFFBSkpBLGdCQUlJO0FBQUEsTUFISkMsS0FHSSxRQUhKQSxLQUdJO0FBQUEsTUFGSkMsVUFFSSxRQUZKQSxVQUVJO0FBQUEsTUFEREMsS0FDQzs7QUFBQSxNQUVGQyxFQUZF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bXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIGhpZGVGaWVsZCxcbiAgdXBkYXRlRm9ybSxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgZXJyb3IsXG4gIHVuc2V0RXJyb3IsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBmb3JtSWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBjc3NDbGFzcyxcbiAgICBpc1JlcXVpcmVkLFxuICAgIGNob2ljZXMsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgd2lkdGgsXG4gICAgY3VzdG9tTmFtZSxcbiAgfSA9IGZpZWxkO1xuICAvLyBNYXAgb3B0aW9uc1xuICBjb25zdCBvcHRpb25zID0gY2hvaWNlcy5tYXAoY2hvaWNlID0+ICh7XG4gICAgdmFsdWU6IGNob2ljZS52YWx1ZSxcbiAgICBsYWJlbDogY2hvaWNlLnRleHQsXG4gIH0pKTtcbiAgLy8gSGFuZGxlIFN0YXRlXG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2VsZWN0T3B0aW9uXSA9IHVzZVN0YXRlKHZhbHVlIHx8ICcnKTtcbiAgLy8gSGFuZGxlIGNoYW5nZVxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAob3B0aW9uKSA9PiB7XG4gICAgc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgIH0sXG4gICAgfTtcbiAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gIH07XG4gIC8vIEhhbmRsZSBCbHVyXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsdWU6IHNlbGVjdGVkT3B0aW9uLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICBzZXRUb3VjaGVkKGlkKTtcbiAgfTtcbiAgY29uc3QgeyBSZWFjdFNlbGVjdCwgTGFiZWwgPSAnbGFiZWwnLCBCb3ggPSAnZGl2JyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICBjb25zdCBSU2VsZWN0ID0gUmVhY3RTZWxlY3QgfHwgU2VsZWN0O1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yXG4gICAgICAgICAgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWBcbiAgICAgICAgICA6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuICAgICAgfVxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gJ25vbmUnIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9PlxuICAgICAgICA8TGFiZWwgaHRtbEZvcj17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfWB9IGNsYXNzTmFtZT17YGdmLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICA8L0xhYmVsPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09ICdhYm92ZScgJiYgZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8UlNlbGVjdFxuICAgICAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKG9wdGlvbiwgZmllbGQpO1xuICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IGhhbmRsZUJsdXIoKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiXG4gICAgICAgICAgICAgIC8vIHN0eWxlcz17Y3VzdG9tU3R5bGVzfVxuICAgICAgICAgICAgICBpbnB1dElkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgICAgeygodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3IpICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSB8fCBlcnJvcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXX0=