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
      updateForm = _ref.updateForm,
      hideField = _ref.hideField,
      styledComponents = _ref.styledComponents,
      error = _ref.error,
      unsetError = _ref.unsetError,
      cssClass = _ref.cssClass,
      props = _objectWithoutProperties(_ref, ["field", "value", "validationMessage", "touched", "setTouched", "updateForm", "hideField", "styledComponents", "error", "unsetError", "cssClass"]);

  var id = field.id,
      formId = field.formId,
      type = field.type,
      label = field.label,
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
  });
  var preselected = choices.filter(function (choice) {
    return choice.isSelected;
  });

  if (preselected.length) {
    preselected = [{
      label: preselected[0].text,
      value: preselected[0].value
    }];
  } else {
    preselected = '';
  } // Handle State


  var _useState = (0, _react.useState)(value || preselected),
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
    unsetError(id);
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
      SelectStyles = _ref2.SelectStyles,
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
    className: "group-label ".concat(labelPlacement)
  }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === 'above' && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactSelect["default"], {
    name: customName || "input_".concat(id, "[]"),
    required: isRequired,
    value: selectedOption,
    onChange: function onChange(option) {
      handleChange(option, field);
    },
    onBlur: function onBlur() {
      return handleBlur();
    },
    placeholder: placeholder,
    options: options,
    isMulti: true,
    inputId: "input_".concat(formId, "_").concat(id),
    styles: SelectStyles
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description)), (validationMessage && touched || error) && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(formId, "_").concat(id)
  }, validationMessage || error)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvTXVsdGlzZWxlY3QuanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwidXBkYXRlRm9ybSIsImhpZGVGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJjc3NDbGFzcyIsInByb3BzIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJpc1JlcXVpcmVkIiwiY2hvaWNlcyIsInBsYWNlaG9sZGVyIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwib3B0aW9ucyIsIm1hcCIsImNob2ljZSIsInRleHQiLCJwcmVzZWxlY3RlZCIsImZpbHRlciIsImlzU2VsZWN0ZWQiLCJsZW5ndGgiLCJzZWxlY3RlZE9wdGlvbiIsInNlbGVjdE9wdGlvbiIsImhhbmRsZUNoYW5nZSIsIm9wdGlvbiIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlQmx1ciIsIlNlbGVjdFN0eWxlcyIsIkxhYmVsIiwiQm94IiwiZGlzcGxheSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFFZSx3QkFhVDtBQUFBLE1BWkpBLEtBWUksUUFaSkEsS0FZSTtBQUFBLE1BWEpDLEtBV0ksUUFYSkEsS0FXSTtBQUFBLE1BVkpDLGlCQVVJLFFBVkpBLGlCQVVJO0FBQUEsTUFUSkMsT0FTSSxRQVRKQSxPQVNJO0FBQUEsTUFSSkMsVUFRSSxRQVJKQSxVQVFJO0FBQUEsTUFQSkMsVUFPSSxRQVBKQSxVQU9JO0FBQUEsTUFOSkMsU0FNSSxRQU5KQSxTQU1JO0FBQUEsTUFMSkMsZ0JBS0ksUUFMSkEsZ0JBS0k7QUFBQSxNQUpKQyxLQUlJLFFBSkpBLEtBSUk7QUFBQSxNQUhKQyxVQUdJLFFBSEpBLFVBR0k7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LElBQUEsTUFBTSxFQUFFMkI7QUFaVixJQURGLEVBZUdwQixXQUFXLElBQUk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQThCQSxXQUE5QixDQWZsQixDQVJKLEVBMEJHLENBQUVqQixpQkFBaUIsSUFBSUMsT0FBdEIsSUFBa0NLLEtBQW5DLEtBQ0M7QUFBTSxJQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFnQyxJQUFBLEVBQUUsa0JBQVdLLE1BQVgsY0FBcUJELEVBQXJCO0FBQWxDLEtBQ0dWLGlCQUFpQixJQUFJTSxLQUR4QixDQTNCSixDQVRGLENBREY7QUE0Q0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgdXBkYXRlRm9ybSxcbiAgaGlkZUZpZWxkLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICBlcnJvcixcbiAgdW5zZXRFcnJvcixcbiAgY3NzQ2xhc3MsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBmb3JtSWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBpc1JlcXVpcmVkLFxuICAgIGNob2ljZXMsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgd2lkdGgsXG4gICAgY3VzdG9tTmFtZSxcbiAgfSA9IGZpZWxkO1xuICAvLyBNYXAgb3B0aW9uc1xuICBjb25zdCBvcHRpb25zID0gY2hvaWNlcy5tYXAoY2hvaWNlID0+ICh7XG4gICAgdmFsdWU6IGNob2ljZS52YWx1ZSxcbiAgICBsYWJlbDogY2hvaWNlLnRleHQsXG4gIH0pKTtcbiAgbGV0IHByZXNlbGVjdGVkID0gY2hvaWNlcy5maWx0ZXIoY2hvaWNlID0+IGNob2ljZS5pc1NlbGVjdGVkKTtcbiAgaWYgKHByZXNlbGVjdGVkLmxlbmd0aCkge1xuICAgIHByZXNlbGVjdGVkID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogcHJlc2VsZWN0ZWRbMF0udGV4dCxcbiAgICAgICAgdmFsdWU6IHByZXNlbGVjdGVkWzBdLnZhbHVlLFxuICAgICAgfSxcbiAgICBdO1xuICB9IGVsc2Uge1xuICAgIHByZXNlbGVjdGVkID0gJyc7XG4gIH1cbiAgLy8gSGFuZGxlIFN0YXRlXG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2VsZWN0T3B0aW9uXSA9IHVzZVN0YXRlKHZhbHVlIHx8IHByZXNlbGVjdGVkKTtcbiAgLy8gSGFuZGxlIGNoYW5nZVxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAob3B0aW9uKSA9PiB7XG4gICAgc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgIH0sXG4gICAgfTtcbiAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgdW5zZXRFcnJvcihpZCk7XG4gIH07XG4gIC8vIEhhbmRsZSBCbHVyXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsdWU6IHNlbGVjdGVkT3B0aW9uLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICBzZXRUb3VjaGVkKGlkKTtcbiAgfTtcbiAgY29uc3QgeyBTZWxlY3RTdHlsZXMsIExhYmVsID0gJ2xhYmVsJywgQm94ID0gJ2RpdicgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yXG4gICAgICAgICAgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWBcbiAgICAgICAgICA6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuICAgICAgfVxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gJ25vbmUnIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9PlxuICAgICAgICA8TGFiZWwgaHRtbEZvcj17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfWB9IGNsYXNzTmFtZT17YGdyb3VwLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICA8L0xhYmVsPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09ICdhYm92ZScgJiYgZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9W11gfVxuICAgICAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9ufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShvcHRpb24sIGZpZWxkKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiBoYW5kbGVCbHVyKCl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgICAgaXNNdWx0aVxuICAgICAgICAgICAgICBpbnB1dElkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH1cbiAgICAgICAgICAgICAgc3R5bGVzPXtTZWxlY3RTdHlsZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH0+XG4gICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgfHwgZXJyb3J9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl19