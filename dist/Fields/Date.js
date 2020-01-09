"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

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
      customName = field.customName,
      dateType = field.dateType,
      dateFormat = field.dateFormat,
      defaultValue = field.defaultValue;

  var _ref2 = styledComponents || false,
      _ref2$Input = _ref2.Input,
      Input = _ref2$Input === void 0 ? "input" : _ref2$Input,
      _ref2$Label = _ref2.Label,
      Label = _ref2$Label === void 0 ? "label" : _ref2$Label,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? "div" : _ref2$Box,
      _ref2$DatePicker = _ref2.DatePicker,
      SdatePicker = _ref2$DatePicker === void 0 ? "div" : _ref2$DatePicker; // conver date format


  var format = dateFormat && dateFormat === "dmy" ? "dd/MM/yyyy" : false;
  var selectedValue = defaultValue ? new Date(defaultValue) : false;

  if (format && defaultValue) {
    var dateParts = defaultValue.split("/");
    var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    selectedValue = dateObject;
  }

  var _useState = (0, _react.useState)(selectedValue),
      _useState2 = _slicedToArray(_useState, 2),
      startDate = _useState2[0],
      setDate = _useState2[1];

  var getFormattedInputs = function getFormattedInputs(items) {
    // 0 - MM
    // 1 - DD
    // 2 - YYYY
    switch (dateFormat) {
      case "dmy":
      case "dmy_dash":
      case "dmy_dot":
        return [items[1], items[0], items[2]];

      case "ymd_slash":
      case "ymd_dash":
      case "ymd_dot":
        return [items[2], items[0], items[1]];

      default:
        return items;
    }
  };

  var formatedInputs = getFormattedInputs(inputs);
  return _react["default"].createElement(Box, {
    width: width,
    className: validationMessage && touched || error ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
    style: {
      display: hideField ? "none" : undefined
    }
  }, _react["default"].createElement(Label, {
    htmlFor: "input_".concat(formId, "_").concat(id),
    className: "gf-label ".concat(labelPlacement)
  }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), _react["default"].createElement("div", {
    className: type
  }, descriptionPlacement === "above" && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, dateType && dateType === "datepicker" ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(SdatePicker, {
    className: "ginput_container ginput_container_date"
  }, _react["default"].createElement(_reactDatepicker["default"], {
    name: "input_".concat(id),
    id: "input_".concat(formId, "_25_").concat(id),
    type: "text",
    className: "datepicker hasDatepicker",
    selected: startDate,
    onChange: function onChange(date) {
      setDate(date);
      updateForm({
        target: {
          value: date
        }
      }, field);
      setTouched(id);
      unsetError(id);
      setFocusClass(date);
    },
    onBlur: function onBlur(e) {
      updateForm({
        target: {
          value: startDate
        }
      }, field);
      setTouched(id);
      unsetError(id);
      setFocusClass(startDate);
    },
    dateFormat: format || undefined,
    onFocus: function onFocus() {
      return setFocusClass(true);
    },
    required: isRequired,
    placeholderText: placeholder
  })), (validationMessage && touched || error) && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(formId, "_").concat(id)
  }, validationMessage || error)) : _react["default"].createElement(_react["default"].Fragment, null, formatedInputs && formatedInputs.map(function (item, index) {
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
      max: item.label === "MM" ? 12 : item.label === "DD" ? 31 : new Date().getFullYear() + 1,
      maxLength: item.label === "YYYY" ? 4 : 2,
      value: item.value,
      onBlur: function onBlur(event) {
        field.subId = index;
        field.dateLabel = item.label;
        updateForm(event, field);
        setTouched(id);
        unsetError(id);
        setFocusClass(item.value !== "");
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
  }, description)))));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvRGF0ZS5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsImVycm9yIiwidW5zZXRFcnJvciIsInNldEZvY3VzQ2xhc3MiLCJjc3NDbGFzcyIsInByb3BzIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImlzUmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImlucHV0cyIsImN1c3RvbU5hbWUiLCJkYXRlVHlwZSIsImRhdGVGb3JtYXQiLCJkZWZhdWx0VmFsdWUiLCJJbnB1dCIsIkxhYmVsIiwiQm94IiwiRGF0ZVBpY2tlciIsIlNkYXRlUGlja2VyIiwiZm9ybWF0Iiwic2VsZWN0ZWRWYWx1ZSIsIkRhdGUiLCJkYXRlUGFydHMiLCJzcGxpdCIsImRhdGVPYmplY3QiLCJzdGFydERhdGUiLCJzZXREYXRlIiwiZ2V0Rm9ybWF0dGVkSW5wdXRzIiwiaXRlbXMiLCJmb3JtYXRlZElucHV0cyIsImRpc3BsYXkiLCJ1bmRlZmluZWQiLCJkYXRlIiwidGFyZ2V0IiwiZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImdldEZ1bGxZZWFyIiwiZXZlbnQiLCJzdWJJZCIsImRhdGVMYWJlbCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRWUsd0JBY1Q7QUFBQSxNQWJKQSxLQWFJLFFBYkpBLEtBYUk7QUFBQSxNQVpKQyxLQVlJLFFBWkpBLEtBWUk7QUFBQSxNQVhKQyxpQkFXSSxRQVhKQSxpQkFXSTtBQUFBLE1BVkpDLE9BVUksUUFWSkEsT0FVSTtBQUFBLE1BVEpDLFVBU0ksUUFUSkEs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dCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgaGlkZUZpZWxkLFxuICB1cGRhdGVGb3JtLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICBlcnJvcixcbiAgdW5zZXRFcnJvcixcbiAgc2V0Rm9jdXNDbGFzcyxcbiAgY3NzQ2xhc3MsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBmb3JtSWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBpc1JlcXVpcmVkLFxuICAgIG1heExlbmd0aCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBpbnB1dHMsXG4gICAgY3VzdG9tTmFtZSxcbiAgICBkYXRlVHlwZSxcbiAgICBkYXRlRm9ybWF0LFxuICAgIGRlZmF1bHRWYWx1ZVxuICB9ID0gZmllbGQ7XG5cbiAgY29uc3Qge1xuICAgIElucHV0ID0gXCJpbnB1dFwiLFxuICAgIExhYmVsID0gXCJsYWJlbFwiLFxuICAgIEJveCA9IFwiZGl2XCIsXG4gICAgRGF0ZVBpY2tlcjogU2RhdGVQaWNrZXIgPSBcImRpdlwiXG4gIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuXG4gIC8vIGNvbnZlciBkYXRlIGZvcm1hdFxuICBjb25zdCBmb3JtYXQgPSBkYXRlRm9ybWF0ICYmIGRhdGVGb3JtYXQgPT09IFwiZG15XCIgPyBcImRkL01NL3l5eXlcIiA6IGZhbHNlO1xuICBsZXQgc2VsZWN0ZWRWYWx1ZSA9IGRlZmF1bHRWYWx1ZSA/IG5ldyBEYXRlKGRlZmF1bHRWYWx1ZSkgOiBmYWxzZTtcbiAgaWYgKGZvcm1hdCAmJiBkZWZhdWx0VmFsdWUpIHtcbiAgICBjb25zdCBkYXRlUGFydHMgPSBkZWZhdWx0VmFsdWUuc3BsaXQoXCIvXCIpO1xuICAgIGNvbnN0IGRhdGVPYmplY3QgPSBuZXcgRGF0ZSgrZGF0ZVBhcnRzWzJdLCBkYXRlUGFydHNbMV0gLSAxLCArZGF0ZVBhcnRzWzBdKTtcbiAgICBzZWxlY3RlZFZhbHVlID0gZGF0ZU9iamVjdDtcbiAgfVxuXG4gIGNvbnN0IFtzdGFydERhdGUsIHNldERhdGVdID0gdXNlU3RhdGUoc2VsZWN0ZWRWYWx1ZSk7XG5cbiAgY29uc3QgZ2V0Rm9ybWF0dGVkSW5wdXRzID0gaXRlbXMgPT4ge1xuICAgIC8vIDAgLSBNTVxuICAgIC8vIDEgLSBERFxuICAgIC8vIDIgLSBZWVlZXG4gICAgc3dpdGNoIChkYXRlRm9ybWF0KSB7XG4gICAgICBjYXNlIFwiZG15XCI6XG4gICAgICBjYXNlIFwiZG15X2Rhc2hcIjpcbiAgICAgIGNhc2UgXCJkbXlfZG90XCI6XG4gICAgICAgIHJldHVybiBbaXRlbXNbMV0sIGl0ZW1zWzBdLCBpdGVtc1syXV07XG4gICAgICBjYXNlIFwieW1kX3NsYXNoXCI6XG4gICAgICBjYXNlIFwieW1kX2Rhc2hcIjpcbiAgICAgIGNhc2UgXCJ5bWRfZG90XCI6XG4gICAgICAgIHJldHVybiBbaXRlbXNbMl0sIGl0ZW1zWzBdLCBpdGVtc1sxXV07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZvcm1hdGVkSW5wdXRzID0gZ2V0Rm9ybWF0dGVkSW5wdXRzKGlucHV0cyk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcbiAgICAgICAgICA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuICAgICAgICAgIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyBcIm5vbmVcIiA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxMYWJlbFxuICAgICAgICBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH1cbiAgICAgICAgY2xhc3NOYW1lPXtgZ2YtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgPC9MYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7ZGF0ZVR5cGUgJiYgZGF0ZVR5cGUgPT09IFwiZGF0ZXBpY2tlclwiID8gKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPFNkYXRlUGlja2VyIGNsYXNzTmFtZT1cImdpbnB1dF9jb250YWluZXIgZ2lucHV0X2NvbnRhaW5lcl9kYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8yNV8ke2lkfWB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlciBoYXNEYXRlcGlja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2RhdGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldERhdGUoZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRGb2N1c0NsYXNzKGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdGFydERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRGb2N1c0NsYXNzKHN0YXJ0RGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9e2Zvcm1hdCB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldEZvY3VzQ2xhc3ModHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1NkYXRlUGlja2VyPlxuICAgICAgICAgICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cbiAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlIHx8IGVycm9yfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAge2Zvcm1hdGVkSW5wdXRzICYmXG4gICAgICAgICAgICAgICAgICBmb3JtYXRlZElucHV0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfVtdYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpdGVtLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxhYmVsID09PSBcIk1NXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDEyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLmxhYmVsID09PSBcIkREXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDMxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9e2l0ZW0ubGFiZWwgPT09IFwiWVlZWVwiID8gNCA6IDJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5zdWJJZCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRlTGFiZWwgPSBpdGVtLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9jdXNDbGFzcyhpdGVtLnZhbHVlICE9PSBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRGb2N1c0NsYXNzKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XyR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGUtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZVtpbmRleF0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09PSB2YWxpZGF0aW9uTWVzc2FnZVtpbmRleF0uaW5kZXggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlW2luZGV4XS5tZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2l0ZW0uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZVtpbmRleF0ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiPntlcnJvcn08L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==