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
      Input = _ref2$Input === void 0 ? 'input' : _ref2$Input,
      _ref2$Label = _ref2.Label,
      Label = _ref2$Label === void 0 ? 'label' : _ref2$Label,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? 'div' : _ref2$Box,
      _ref2$DatePicker = _ref2.DatePicker,
      SdatePicker = _ref2$DatePicker === void 0 ? 'div' : _ref2$DatePicker; // conver date format


  var format = dateFormat && dateFormat === 'dmy' ? 'dd/MM/yyyy' : false;
  var selectedValue = defaultValue ? new Date(defaultValue) : false;

  if (format && defaultValue) {
    var dateParts = defaultValue.split('/');
    var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    selectedValue = dateObject;
  }

  var _useState = (0, _react.useState)(selectedValue),
      _useState2 = _slicedToArray(_useState, 2),
      startDate = _useState2[0],
      setDate = _useState2[1];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvRGF0ZS5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsImVycm9yIiwidW5zZXRFcnJvciIsInNldEZvY3VzQ2xhc3MiLCJjc3NDbGFzcyIsInByb3BzIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImlzUmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImlucHV0cyIsImN1c3RvbU5hbWUiLCJkYXRlVHlwZSIsImRhdGVGb3JtYXQiLCJkZWZhdWx0VmFsdWUiLCJJbnB1dCIsIkxhYmVsIiwiQm94IiwiRGF0ZVBpY2tlciIsIlNkYXRlUGlja2VyIiwiZm9ybWF0Iiwic2VsZWN0ZWRWYWx1ZSIsIkRhdGUiLCJkYXRlUGFydHMiLCJzcGxpdCIsImRhdGVPYmplY3QiLCJzdGFydERhdGUiLCJzZXREYXRlIiwiZGlzcGxheSIsInVuZGVmaW5lZCIsImRhdGUiLCJ0YXJnZXQiLCJlIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZ2V0RnVsbFllYXIiLCJldmVudCIsInN1YklkIiwiZGF0ZUxhYmVsIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFFZSx3QkFjVDtBQUFBLE1BYkpBLEtBYUksUUFiSkEsS0FhSTtBQUFBLE1BWkpDLEtBWUksUUFaSkEsS0FZSTtBQUFBLE1BWEpDLGlCQVdJLFFBWEpBLGlCQVdJO0FBQUEsTUFWSkMsT0FVSSxRQVZKQSxPQVVJO0FBQUEsTUFUSkMsVUFTSSxRQVRKQSxVQVNJO0FBQUEsTUFSSkMsU0FRSSxRQVJKQSxTQVFJO0FBQUEsTUFQSkMsVUFP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LENBQWpCLENBQXlCQSxLQUh2QyxJQUlJL0MsaUJBQWlCLENBQUMrQyxLQUFELENBQWpCLENBQXlCSyxPQUo3QixJQUtDO0FBQU0sTUFBQSxTQUFTLEVBQUMsZUFBaEI7QUFBZ0MsTUFBQSxFQUFFLGtCQUFXeEMsTUFBWCxjQUFxQmtDLElBQUksQ0FBQ25DLEVBQTFCO0FBQWxDLE9BQ0dYLGlCQUFpQixDQUFDK0MsS0FBRCxDQUFqQixDQUF5QkssT0FENUIsQ0FuQ0osRUF1Q0c5QyxLQUFLLElBQUk7QUFBTSxNQUFBLFNBQVMsRUFBQztBQUFoQixPQUFpQ0EsS0FBakMsQ0F2Q1osQ0FEWTtBQUFBLEdBQVgsQ0FGUCxFQThDR1ksV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0E5Q2xCLENBbERKLENBSkosQ0FiRixDQURGO0FBMEhELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICdyZWFjdC1kYXRlcGlja2VyJztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgaGlkZUZpZWxkLFxuICB1cGRhdGVGb3JtLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICBlcnJvcixcbiAgdW5zZXRFcnJvcixcbiAgc2V0Rm9jdXNDbGFzcyxcbiAgY3NzQ2xhc3MsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBmb3JtSWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBpc1JlcXVpcmVkLFxuICAgIG1heExlbmd0aCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBpbnB1dHMsXG4gICAgY3VzdG9tTmFtZSxcbiAgICBkYXRlVHlwZSxcbiAgICBkYXRlRm9ybWF0LFxuICAgIGRlZmF1bHRWYWx1ZSxcbiAgfSA9IGZpZWxkO1xuXG4gIGNvbnN0IHtcbiBJbnB1dCA9ICdpbnB1dCcsIExhYmVsID0gJ2xhYmVsJywgQm94ID0gJ2RpdicsIERhdGVQaWNrZXI6IFNkYXRlUGlja2VyID0gJ2RpdicgXG59ID0gICAgc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICAvLyBjb252ZXIgZGF0ZSBmb3JtYXRcbiAgY29uc3QgZm9ybWF0ID0gZGF0ZUZvcm1hdCAmJiBkYXRlRm9ybWF0ID09PSAnZG15JyA/ICdkZC9NTS95eXl5JyA6IGZhbHNlO1xuICBsZXQgc2VsZWN0ZWRWYWx1ZSA9IGRlZmF1bHRWYWx1ZSA/IG5ldyBEYXRlKGRlZmF1bHRWYWx1ZSkgOiBmYWxzZTtcbiAgaWYgKGZvcm1hdCAmJiBkZWZhdWx0VmFsdWUpIHtcbiAgICBjb25zdCBkYXRlUGFydHMgPSBkZWZhdWx0VmFsdWUuc3BsaXQoJy8nKTtcbiAgICBjb25zdCBkYXRlT2JqZWN0ID0gbmV3IERhdGUoK2RhdGVQYXJ0c1syXSwgZGF0ZVBhcnRzWzFdIC0gMSwgK2RhdGVQYXJ0c1swXSk7XG4gICAgc2VsZWN0ZWRWYWx1ZSA9IGRhdGVPYmplY3Q7XG4gIH1cblxuICBjb25zdCBbc3RhcnREYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKHNlbGVjdGVkVmFsdWUpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yXG4gICAgICAgICAgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWBcbiAgICAgICAgICA6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuICAgICAgfVxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gJ25vbmUnIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPExhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfSBjbGFzc05hbWU9e2BnZi1sYWJlbCAke2xhYmVsUGxhY2VtZW50fWB9PlxuICAgICAgICB7bGFiZWx9XG4gICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgPC9MYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgIGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge2RhdGVUeXBlICYmIGRhdGVUeXBlID09PSAnZGF0ZXBpY2tlcicgPyAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8U2RhdGVQaWNrZXIgY2xhc3NOYW1lPVwiZ2lucHV0X2NvbnRhaW5lciBnaW5wdXRfY29udGFpbmVyX2RhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2BpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XzI1XyR7aWR9YH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXRlcGlja2VyIGhhc0RhdGVwaWNrZXJcIlxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c3RhcnREYXRlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXREYXRlKGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0Rm9jdXNDbGFzcyhkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdGFydERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRGb2N1c0NsYXNzKHN0YXJ0RGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9e2Zvcm1hdCB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldEZvY3VzQ2xhc3ModHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1NkYXRlUGlja2VyPlxuICAgICAgICAgICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cbiAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlIHx8IGVycm9yfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAge2lucHV0c1xuICAgICAgICAgICAgICAgICAgJiYgaW5wdXRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9W11gfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2l0ZW0ucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubGFiZWwgPT09ICdNTSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDEyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLmxhYmVsID09PSAnREQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDMxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17aXRlbS5sYWJlbCA9PT0gJ1lZWVknID8gNCA6IDJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnN1YklkID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGVMYWJlbCA9IGl0ZW0ubGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGb2N1c0NsYXNzKGl0ZW0udmFsdWUgIT09ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRGb2N1c0NsYXNzKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fJHtpbmRleH1gfSBjbGFzc05hbWU9XCJoaWRlLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdG91Y2hlZFxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsaWRhdGlvbk1lc3NhZ2VbaW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBpbmRleCA9PT0gdmFsaWRhdGlvbk1lc3NhZ2VbaW5kZXhdLmluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWxpZGF0aW9uTWVzc2FnZVtpbmRleF0ubWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpdGVtLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2VbaW5kZXhdLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiPntlcnJvcn08L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl19