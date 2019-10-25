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
      props = _objectWithoutProperties(_ref, ["field", "value", "validationMessage", "touched", "setTouched", "hideField", "updateForm", "styledComponents"]);

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

  var _useState = (0, _react.useState)(value || ""),
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
      Label = _ref2$Label === void 0 ? "label" : _ref2$Label,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? "div" : _ref2$Box;

  var RSelect = ReactSelect || _reactSelect["default"];
  return _react["default"].createElement(Box, {
    width: width,
    className: validationMessage && touched ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
    style: {
      display: hideField ? "none" : undefined
    }
  }, _react["default"].createElement("div", {
    className: type
  }, _react["default"].createElement(Label, {
    htmlFor: "input_".concat(formId, "_").concat(id),
    className: "gf-label ".concat(labelPlacement)
  }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === "above" && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(RSelect, {
    name: customName || "input_".concat(id),
    required: isRequired,
    value: selectedOption,
    onChange: function onChange(option) {
      return handleChange(option, field);
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
  }, description)), validationMessage && touched && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(formId, "_").concat(id)
  }, validationMessage)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvU2VsZWN0LmpzeCJdLCJuYW1lcyI6WyJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsImhpZGVGaWVsZCIsInVwZGF0ZUZvcm0iLCJzdHlsZWRDb21wb25lbnRzIiwicHJvcHMiLCJpZCIsImZvcm1JZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwiaXNSZXF1aXJlZCIsImNob2ljZXMiLCJwbGFjZWhvbGRlciIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiY3VzdG9tTmFtZSIsIm9wdGlvbnMiLCJtYXAiLCJjaG9pY2UiLCJ0ZXh0Iiwic2VsZWN0ZWRPcHRpb24iLCJzZWxlY3RPcHRpb24iLCJoYW5kbGVDaGFuZ2UiLCJvcHRpb24iLCJldmVudCIsInRhcmdldCIsImhhbmRsZUJsdXIiLCJSZWFjdFNlbGVjdCIsIkxhYmVsIiwiQm94IiwiUlNlbGVjdCIsIlNlbGVjdCIsImRpc3BsYXkiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRWUsd0JBVVQ7QUFBQSxNQVRMQSxLQVNLLFFBVExBLEtBU0s7QUFBQSxNQVJMQyxLQVFLLFFBUkxBLEtBUUs7QUFBQSxNQVBMQyxpQkFPSyxRQVBMQSxpQkFPSztBQUFBLE1BTkxDLE9BTUssUUFOTEEsT0FNSztBQUFBLE1BTExDLFVBS0ssUUFMTEEsVUFLSztBQUFBLE1BSkxDLFNBSUssUUFKTEEsU0FJSztBQUFBLE1BSExDLFVBR0ssUUFITEEsVUFHSztBQUFBLE1BRkxDLGdCQUVLLFFBRkxBLGdCQUVLO0FBQUEsTUFERkMsS0FDRTs7QUFBQSxNQUVKQyxFQUZJLEdBZURULEtBZkMsQ0FFSlMsRUFGSTtBQUFBLE1BR0pDLE1BSEksR0FlRFYsS0FmQyxDQUdKVSxNQUhJO0FBQUEsTUFJSkMsSUFK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QUk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQThCQSxXQUE5QixDQURmLEdBR0EsZ0NBQUMsaUJBQUQsQ0FBTyxRQUFQLFFBQ0MsZ0NBQUMsT0FBRDtBQUNDLElBQUEsSUFBSSxFQUFFSSxVQUFVLG9CQUFhWixFQUFiLENBRGpCO0FBRUMsSUFBQSxRQUFRLEVBQUVLLFVBRlg7QUFHQyxJQUFBLEtBQUssRUFBRVksY0FIUjtBQUlDLElBQUEsUUFBUSxFQUFFLGtCQUFBRyxNQUFNO0FBQUEsYUFBSUQsWUFBWSxDQUFDQyxNQUFELEVBQVM3QixLQUFULENBQWhCO0FBQUEsS0FKakI7QUFLQyxJQUFBLE1BQU0sRUFBRTtBQUFBLGFBQU1nQyxVQUFVLEVBQWhCO0FBQUEsS0FMVDtBQU1DLElBQUEsV0FBVyxFQUFFaEIsV0FOZDtBQU9DLElBQUEsT0FBTyxFQUFFTSxPQVBWO0FBUUMsSUFBQSxTQUFTLEVBQUMsYUFSWCxDQVNDO0FBVEQ7QUFVQyxJQUFBLE9BQU8sa0JBQVdaLE1BQVgsY0FBcUJELEVBQXJCO0FBVlIsSUFERCxFQWFFUSxXQUFXLElBQUk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQThCQSxXQUE5QixDQWJqQixDQVhGLEVBMkJFZixpQkFBaUIsSUFBSUMsT0FBckIsSUFDQTtBQUFNLElBQUEsU0FBUyxFQUFDLGVBQWhCO0FBQWdDLElBQUEsRUFBRSxrQkFBV08sTUFBWCxjQUFxQkQsRUFBckI7QUFBbEMsS0FDRVAsaUJBREYsQ0E1QkYsQ0FURCxDQUREO0FBNkNBLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuXHRmaWVsZCxcblx0dmFsdWUsXG5cdHZhbGlkYXRpb25NZXNzYWdlLFxuXHR0b3VjaGVkLFxuXHRzZXRUb3VjaGVkLFxuXHRoaWRlRmllbGQsXG5cdHVwZGF0ZUZvcm0sXG5cdHN0eWxlZENvbXBvbmVudHMsXG5cdC4uLnByb3BzXG59KSA9PiB7XG5cdGNvbnN0IHtcblx0XHRpZCxcblx0XHRmb3JtSWQsXG5cdFx0dHlwZSxcblx0XHRsYWJlbCxcblx0XHRjc3NDbGFzcyxcblx0XHRpc1JlcXVpcmVkLFxuXHRcdGNob2ljZXMsXG5cdFx0cGxhY2Vob2xkZXIsXG5cdFx0ZGVzY3JpcHRpb24sXG5cdFx0ZGVzY3JpcHRpb25QbGFjZW1lbnQsXG5cdFx0bGFiZWxQbGFjZW1lbnQsXG5cdFx0d2lkdGgsXG5cdFx0Y3VzdG9tTmFtZVxuXHR9ID0gZmllbGQ7XG5cdC8vIE1hcCBvcHRpb25zXG5cdGNvbnN0IG9wdGlvbnMgPSBjaG9pY2VzLm1hcChjaG9pY2UgPT4gKHtcblx0XHR2YWx1ZTogY2hvaWNlLnZhbHVlLFxuXHRcdGxhYmVsOiBjaG9pY2UudGV4dFxuXHR9KSk7XG5cdC8vIEhhbmRsZSBTdGF0ZVxuXHRjb25zdCBbc2VsZWN0ZWRPcHRpb24sIHNlbGVjdE9wdGlvbl0gPSB1c2VTdGF0ZSh2YWx1ZSB8fCBcIlwiKTtcblx0Ly8gSGFuZGxlIGNoYW5nZVxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSBvcHRpb24gPT4ge1xuXHRcdHNlbGVjdE9wdGlvbihvcHRpb24pO1xuXHRcdGNvbnN0IGV2ZW50ID0ge1xuXHRcdFx0dGFyZ2V0OiB7XG5cdFx0XHRcdHZhbHVlOiBvcHRpb25cblx0XHRcdH1cblx0XHR9O1xuXHRcdHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcblx0fTtcblx0Ly8gSGFuZGxlIEJsdXJcblx0Y29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IHtcblx0XHRjb25zdCBldmVudCA9IHtcblx0XHRcdHRhcmdldDoge1xuXHRcdFx0XHR2YWx1ZTogc2VsZWN0ZWRPcHRpb25cblx0XHRcdH1cblx0XHR9O1xuXHRcdHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcblx0XHRzZXRUb3VjaGVkKGlkKTtcblx0fTtcblx0Y29uc3QgeyBSZWFjdFNlbGVjdCwgTGFiZWwgPSBcImxhYmVsXCIsIEJveCA9IFwiZGl2XCIgfSA9XG5cdFx0c3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuXHRjb25zdCBSU2VsZWN0ID0gUmVhY3RTZWxlY3QgfHwgU2VsZWN0O1xuXG5cdHJldHVybiAoXG5cdFx0PEJveFxuXHRcdFx0d2lkdGg9e3dpZHRofVxuXHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0dmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZFxuXHRcdFx0XHRcdD8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gXG5cdFx0XHRcdFx0OiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcblx0XHRcdH1cblx0XHRcdHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/IFwibm9uZVwiIDogdW5kZWZpbmVkIH19XG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3R5cGV9PlxuXHRcdFx0XHQ8TGFiZWxcblx0XHRcdFx0XHRodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH1cblx0XHRcdFx0XHRjbGFzc05hbWU9e2BnZi1sYWJlbCAke2xhYmVsUGxhY2VtZW50fWB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7bGFiZWx9XG5cdFx0XHRcdFx0e2lzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG5cdFx0XHRcdDwvTGFiZWw+XG5cdFx0XHRcdHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gXCJhYm92ZVwiICYmIGRlc2NyaXB0aW9uID8gKFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0PFJTZWxlY3Rcblx0XHRcdFx0XHRcdFx0bmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpZH1gfVxuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZD17aXNSZXF1aXJlZH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkT3B0aW9ufVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17b3B0aW9uID0+IGhhbmRsZUNoYW5nZShvcHRpb24sIGZpZWxkKX1cblx0XHRcdFx0XHRcdFx0b25CbHVyPXsoKSA9PiBoYW5kbGVCbHVyKCl9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17b3B0aW9uc31cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIlxuXHRcdFx0XHRcdFx0XHQvLyBzdHlsZXM9e2N1c3RvbVN0eWxlc31cblx0XHRcdFx0XHRcdFx0aW5wdXRJZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfWB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0e2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuXHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHt2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkICYmIChcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cblx0XHRcdFx0XHRcdHt2YWxpZGF0aW9uTWVzc2FnZX1cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0JveD5cblx0KTtcbn07XG4iXX0=