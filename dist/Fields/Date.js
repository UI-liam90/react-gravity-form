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
      dateFormat = field.dateFormat;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      startDate = _useState2[0],
      setDate = _useState2[1];

  var _ref2 = styledComponents || false,
      _ref2$Input = _ref2.Input,
      Input = _ref2$Input === void 0 ? 'input' : _ref2$Input,
      _ref2$Label = _ref2.Label,
      Label = _ref2$Label === void 0 ? 'label' : _ref2$Label,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? 'div' : _ref2$Box,
      _ref2$DatePicker = _ref2.DatePicker,
      SdatePicker = _ref2$DatePicker === void 0 ? 'div' : _ref2$DatePicker; // conver date format


  var format = dateFormat && dateFormat === 'dmy' ? 'dd/MM/yyyy' : false;
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
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, dateType && dateType === 'datepicker' ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(SdatePicker, {
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
  }, validationMessage || error)) : _react["default"].createElement(_react["default"].Fragment, null, inputs && inputs.map(function (item, index) {
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
  }, description)))));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvRGF0ZS5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsImVycm9yIiwidW5zZXRFcnJvciIsInNldEZvY3VzQ2xhc3MiLCJjc3NDbGFzcyIsInByb3BzIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImlzUmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImlucHV0cyIsImN1c3RvbU5hbWUiLCJkYXRlVHlwZSIsImRhdGVGb3JtYXQiLCJzdGFydERhdGUiLCJzZXREYXRlIiwiSW5wdXQiLCJMYWJlbCIsIkJveCIsIkRhdGVQaWNrZXIiLCJTZGF0ZVBpY2tlciIsImZvcm1hdCIsImRpc3BsYXkiLCJ1bmRlZmluZWQiLCJkYXRlIiwidGFyZ2V0IiwiZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImV2ZW50Iiwic3ViSWQiLCJkYXRlTGFiZWwiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUVlLHdCQWNUO0FBQUEsTUFiSkEsS0FhSSxRQWJKQSxLQWFJO0FBQUEsTUFaSkMsS0FZSSxRQVpKQSxLQVlJO0FBQUEsTUFYSkMsaUJBV0ksUUFYSkEsaUJBV0k7QUFBQSxNQVZKQyxPQVVJLFFBVkpBLE9BVUk7QUFBQSxNQVRKQyxVQVNJLFFBVEpBLFVBU0k7QUFBQSxNQVJKQyxTQVFJLFFBUkpBLFNBUUk7QUFBQSxNQVBKQyxVQU9JLFFBUEpBLFVBT0k7QUFBQSxNQU5KQyxnQkFNSSxRQU5KQSxnQkFNSTtBQUFBLE1BTEpDLEtBS0ksUUFMSkEs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ZVBpY2tlciBmcm9tICdyZWFjdC1kYXRlcGlja2VyJztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgaGlkZUZpZWxkLFxuICB1cGRhdGVGb3JtLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICBlcnJvcixcbiAgdW5zZXRFcnJvcixcbiAgc2V0Rm9jdXNDbGFzcyxcbiAgY3NzQ2xhc3MsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBmb3JtSWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBpc1JlcXVpcmVkLFxuICAgIG1heExlbmd0aCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBpbnB1dHMsXG4gICAgY3VzdG9tTmFtZSxcbiAgICBkYXRlVHlwZSxcbiAgICBkYXRlRm9ybWF0LFxuICB9ID0gZmllbGQ7XG5cbiAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCB7XG4gSW5wdXQgPSAnaW5wdXQnLCBMYWJlbCA9ICdsYWJlbCcsIEJveCA9ICdkaXYnLCBEYXRlUGlja2VyOiBTZGF0ZVBpY2tlciA9ICdkaXYnIFxufSA9ICAgIHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG5cbiAgLy8gY29udmVyIGRhdGUgZm9ybWF0XG4gIGNvbnN0IGZvcm1hdCA9IGRhdGVGb3JtYXQgJiYgZGF0ZUZvcm1hdCA9PT0gJ2RteScgPyAnZGQvTU0veXl5eScgOiBmYWxzZTtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcbiAgICAgICAgICA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuICAgICAgICAgIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICA+XG4gICAgICA8TGFiZWwgaHRtbEZvcj17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfWB9IGNsYXNzTmFtZT17YGdmLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgICAge2lzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG4gICAgICA8L0xhYmVsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9PlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09ICdhYm92ZScgJiYgZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7ZGF0ZVR5cGUgJiYgZGF0ZVR5cGUgPT09ICdkYXRlcGlja2VyJyA/IChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxTZGF0ZVBpY2tlciBjbGFzc05hbWU9XCJnaW5wdXRfY29udGFpbmVyIGdpbnB1dF9jb250YWluZXJfZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17YGlucHV0XyR7aWR9YH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fMjVfJHtpZH1gfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhdGVwaWNrZXIgaGFzRGF0ZXBpY2tlclwiXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzdGFydERhdGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldERhdGUoZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRGb2N1c0NsYXNzKGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0YXJ0RGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldEZvY3VzQ2xhc3Moc3RhcnREYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD17Zm9ybWF0IHx8IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0Rm9jdXNDbGFzcyh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyVGV4dD17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvU2RhdGVQaWNrZXI+XG4gICAgICAgICAgICAgICAgeygodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3IpICYmIChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9PlxuICAgICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgfHwgZXJyb3J9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICB7aW5wdXRzXG4gICAgICAgICAgICAgICAgICAmJiBpbnB1dHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XyR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpZH1bXWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aXRlbS5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYWJlbCA9PT0gJ01NJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMTJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0ubGFiZWwgPT09ICdERCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMzFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXtpdGVtLmxhYmVsID09PSAnWVlZWScgPyA0IDogMn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuc3ViSWQgPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0ZUxhYmVsID0gaXRlbS5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZvY3VzQ2xhc3MoaXRlbS52YWx1ZSAhPT0gJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldEZvY3VzQ2xhc3ModHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8ke2luZGV4fWB9IGNsYXNzTmFtZT1cImhpZGUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB0b3VjaGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWxpZGF0aW9uTWVzc2FnZVtpbmRleF1cbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGluZGV4ID09PSB2YWxpZGF0aW9uTWVzc2FnZVtpbmRleF0uaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbGlkYXRpb25NZXNzYWdlW2luZGV4XS5tZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2l0ZW0uaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZVtpbmRleF0ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCI+e2Vycm9yfTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXX0=