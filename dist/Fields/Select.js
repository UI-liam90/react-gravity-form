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
      setFocusClass = _ref.setFocusClass,
      cssClass = _ref.cssClass,
      unsetError = _ref.unsetError,
      props = _objectWithoutProperties(_ref, ["field", "value", "validationMessage", "touched", "setTouched", "hideField", "updateForm", "styledComponents", "error", "setFocusClass", "cssClass", "unsetError"]);

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
      customName = field.customName;
  var selected = null; // Map options

  var options = choices.map(function (choice) {
    var item = {
      value: choice.value,
      label: choice.text
    };

    if (choice.isSelected) {
      selected = item;
    }

    return item;
  }); // Handle State

  var _useState = (0, _react.useState)(value || selected),
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
    setFocusClass(value !== '');
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
    onFocus: function onFocus() {
      return setFocusClass(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvU2VsZWN0LmpzeCJdLCJuYW1lcyI6WyJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsImhpZGVGaWVsZCIsInVwZGF0ZUZvcm0iLCJzdHlsZWRDb21wb25lbnRzIiwiZXJyb3IiLCJzZXRGb2N1c0NsYXNzIiwiY3NzQ2xhc3MiLCJ1bnNldEVycm9yIiwicHJvcHMiLCJpZCIsImZvcm1JZCIsInR5cGUiLCJsYWJlbCIsImlzUmVxdWlyZWQiLCJjaG9pY2VzIiwicGxhY2Vob2xkZXIiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJzZWxlY3RlZCIsIm9wdGlvbnMiLCJtYXAiLCJjaG9pY2UiLCJpdGVtIiwidGV4dCIsImlzU2VsZWN0ZWQiLCJzZWxlY3RlZE9wdGlvbiIsInNlbGVjdE9wdGlvbiIsImhhbmRsZUNoYW5nZSIsIm9wdGlvbiIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlQmx1ciIsIlJlYWN0U2VsZWN0IiwiTGFiZWwiLCJCb3giLCJSU2VsZWN0IiwiU2VsZWN0IiwiZGlzcGxheSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFFZSx3QkFjVDtBQUFBLE1BYkpBLEtBYUksUUFiSkEsS0FhSTtBQUFBLE1BWkpDLEtBWUksUUFaSkEsS0FZSTtBQUFBLE1BWEpDLGlCQVdJLFFBWEpBLGlCQVdJO0FBQUEsTUFWSkMsT0FVSSxRQVZKQSxPQVVJO0FBQUEsTUFUSkMsVUFTSSxRQVRKQSxVQVNJO0FBQUEsTUFSSkMsU0FRSSxRQVJKQSxTQVFJO0FBQUEsTUFQSkMsVUFPSSxRQVBKQSxVQU9JO0FBQUEsTUFOSkMsZ0JBTUksUUFOSkEsZ0JBTUk7QUFBQSxNQUxKQyxLQUtJLFFBTEpBLEtBS0k7QUFBQSxNQUpKQyxh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QWlCR08sV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0FqQmxCLENBUkosRUE0QkcsQ0FBRWxCLGlCQUFpQixJQUFJQyxPQUF0QixJQUFrQ0ssS0FBbkMsS0FDQztBQUFNLElBQUEsU0FBUyxFQUFDLGVBQWhCO0FBQWdDLElBQUEsRUFBRSxrQkFBV00sTUFBWCxjQUFxQkQsRUFBckI7QUFBbEMsS0FDR1gsaUJBQWlCLElBQUlNLEtBRHhCLENBN0JKLENBVEYsQ0FERjtBQThDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICB0b3VjaGVkLFxuICBzZXRUb3VjaGVkLFxuICBoaWRlRmllbGQsXG4gIHVwZGF0ZUZvcm0sXG4gIHN0eWxlZENvbXBvbmVudHMsXG4gIGVycm9yLFxuICBzZXRGb2N1c0NsYXNzLFxuICBjc3NDbGFzcyxcbiAgdW5zZXRFcnJvcixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGZvcm1JZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgY2hvaWNlcyxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBjdXN0b21OYW1lLFxuICB9ID0gZmllbGQ7XG5cbiAgbGV0IHNlbGVjdGVkID0gbnVsbDtcbiAgLy8gTWFwIG9wdGlvbnNcbiAgY29uc3Qgb3B0aW9ucyA9IGNob2ljZXMubWFwKChjaG9pY2UpID0+IHtcbiAgICBjb25zdCBpdGVtID0ge1xuICAgICAgdmFsdWU6IGNob2ljZS52YWx1ZSxcbiAgICAgIGxhYmVsOiBjaG9pY2UudGV4dCxcbiAgICB9O1xuICAgIGlmIChjaG9pY2UuaXNTZWxlY3RlZCkge1xuICAgICAgc2VsZWN0ZWQgPSBpdGVtO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbTtcbiAgfSk7XG4gIC8vIEhhbmRsZSBTdGF0ZVxuICBjb25zdCBbc2VsZWN0ZWRPcHRpb24sIHNlbGVjdE9wdGlvbl0gPSB1c2VTdGF0ZSh2YWx1ZSB8fCBzZWxlY3RlZCk7XG4gIC8vIEhhbmRsZSBjaGFuZ2VcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG9wdGlvbikgPT4ge1xuICAgIHNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIHZhbHVlOiBvcHRpb24sXG4gICAgICB9LFxuICAgIH07XG4gICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICB9O1xuICAvLyBIYW5kbGUgQmx1clxuICBjb25zdCBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIHZhbHVlOiBzZWxlY3RlZE9wdGlvbixcbiAgICAgIH0sXG4gICAgfTtcbiAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgc2V0VG91Y2hlZChpZCk7XG4gICAgc2V0Rm9jdXNDbGFzcyh2YWx1ZSAhPT0gJycpO1xuICB9O1xuICBjb25zdCB7IFJlYWN0U2VsZWN0LCBMYWJlbCA9ICdsYWJlbCcsIEJveCA9ICdkaXYnIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuXG4gIGNvbnN0IFJTZWxlY3QgPSBSZWFjdFNlbGVjdCB8fCBTZWxlY3Q7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcbiAgICAgICAgICA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuICAgICAgICAgIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH0gY2xhc3NOYW1lPXtgZ2YtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAge2lzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxSU2VsZWN0XG4gICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9YH1cbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2Uob3B0aW9uLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gaGFuZGxlQmx1cigpfVxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRGb2N1c0NsYXNzKHRydWUpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcbiAgICAgICAgICAgICAgLy8gc3R5bGVzPXtjdXN0b21TdHlsZXN9XG4gICAgICAgICAgICAgIGlucHV0SWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2Pn1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgICB7KCh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvcikgJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlIHx8IGVycm9yfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==