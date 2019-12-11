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
      cssClass = _ref.cssClass,
      unsetError = _ref.unsetError,
      props = _objectWithoutProperties(_ref, ["field", "value", "validationMessage", "touched", "setTouched", "hideField", "updateForm", "styledComponents", "error", "cssClass", "unsetError"]);

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
    className: validationMessage && touched || error ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvU2VsZWN0LmpzeCJdLCJuYW1lcyI6WyJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsImhpZGVGaWVsZCIsInVwZGF0ZUZvcm0iLCJzdHlsZWRDb21wb25lbnRzIiwiZXJyb3IiLCJjc3NDbGFzcyIsInVuc2V0RXJyb3IiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwiaXNSZXF1aXJlZCIsImNob2ljZXMiLCJwbGFjZWhvbGRlciIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiY3VzdG9tTmFtZSIsInNlbGVjdGVkIiwib3B0aW9ucyIsIm1hcCIsImNob2ljZSIsIml0ZW0iLCJ0ZXh0IiwiaXNTZWxlY3RlZCIsInNlbGVjdGVkT3B0aW9uIiwic2VsZWN0T3B0aW9uIiwiaGFuZGxlQ2hhbmdlIiwib3B0aW9uIiwiZXZlbnQiLCJ0YXJnZXQiLCJoYW5kbGVCbHVyIiwiUmVhY3RTZWxlY3QiLCJMYWJlbCIsIkJveCIsIlJTZWxlY3QiLCJTZWxlY3QiLCJkaXNwbGF5IiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUVlLHdCQWFUO0FBQUEsTUFaSkEsS0FZSSxRQVpKQSxLQVlJO0FBQUEsTUFYSkMsS0FXSSxRQVhKQSxLQVdJO0FBQUEsTUFWSkMsaUJBVUksUUFWSkEsaUJBVUk7QUFBQSxNQVRKQyxPQVNJLFFBVEpBLE9BU0k7QUFBQSxNQVJKQyxVQVFJLFFBUkpBLFVBUUk7QUFBQSxNQVBKQyxTQU9JLFFBUEpBLFNBT0k7QUFBQSxNQU5KQyxVQU1JLFFBTkpBLFVBTUk7QUFBQSxNQUxKQyxnQkFLSSxRQUxKQSxnQkFLSTtBQUFBLE1BSkpDLEtBSUksUUFKSkEsS0FJSTtBQUFBLE1BSEpDLFFBR0ksUUFISkEsUUFHSTtB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RUFBRSxrQkFBV0ssTUFBWCxjQUFxQkQsRUFBckI7QUFBbEMsS0FDR1YsaUJBQWlCLElBQUlNLEtBRHhCLENBL0JKLENBVEYsQ0FERjtBQWdERCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgaGlkZUZpZWxkLFxuICB1cGRhdGVGb3JtLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICBlcnJvcixcbiAgY3NzQ2xhc3MsXG4gIHVuc2V0RXJyb3IsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBmb3JtSWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBpc1JlcXVpcmVkLFxuICAgIGNob2ljZXMsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgd2lkdGgsXG4gICAgY3VzdG9tTmFtZVxuICB9ID0gZmllbGQ7XG5cbiAgbGV0IHNlbGVjdGVkID0gbnVsbDtcbiAgLy8gTWFwIG9wdGlvbnNcbiAgY29uc3Qgb3B0aW9ucyA9IGNob2ljZXMubWFwKGNob2ljZSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IHtcbiAgICAgIHZhbHVlOiBjaG9pY2UudmFsdWUsXG4gICAgICBsYWJlbDogY2hvaWNlLnRleHRcbiAgICB9O1xuICAgIGlmIChjaG9pY2UuaXNTZWxlY3RlZCkge1xuICAgICAgc2VsZWN0ZWQgPSBpdGVtO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbTtcbiAgfSk7XG4gIC8vIEhhbmRsZSBTdGF0ZVxuICBjb25zdCBbc2VsZWN0ZWRPcHRpb24sIHNlbGVjdE9wdGlvbl0gPSB1c2VTdGF0ZSh2YWx1ZSB8fCBzZWxlY3RlZCk7XG4gIC8vIEhhbmRsZSBjaGFuZ2VcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gb3B0aW9uID0+IHtcbiAgICBzZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICBjb25zdCBldmVudCA9IHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB2YWx1ZTogb3B0aW9uXG4gICAgICB9XG4gICAgfTtcbiAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gIH07XG4gIC8vIEhhbmRsZSBCbHVyXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsdWU6IHNlbGVjdGVkT3B0aW9uXG4gICAgICB9XG4gICAgfTtcbiAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgc2V0VG91Y2hlZChpZCk7XG4gIH07XG4gIGNvbnN0IHsgUmVhY3RTZWxlY3QsIExhYmVsID0gXCJsYWJlbFwiLCBCb3ggPSBcImRpdlwiIH0gPVxuICAgIHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG5cbiAgY29uc3QgUlNlbGVjdCA9IFJlYWN0U2VsZWN0IHx8IFNlbGVjdDtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvclxuICAgICAgICAgID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gXG4gICAgICAgICAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/IFwibm9uZVwiIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9PlxuICAgICAgICA8TGFiZWxcbiAgICAgICAgICBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9e2BnZi1sYWJlbCAke2xhYmVsUGxhY2VtZW50fWB9XG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAge2lzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gXCJhYm92ZVwiICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgIGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPFJTZWxlY3RcbiAgICAgICAgICAgICAgbmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9ufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b3B0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2Uob3B0aW9uLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gaGFuZGxlQmx1cigpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcbiAgICAgICAgICAgICAgLy8gc3R5bGVzPXtjdXN0b21TdHlsZXN9XG4gICAgICAgICAgICAgIGlucHV0SWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2Pn1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgICB7KCh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvcikgJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlIHx8IGVycm9yfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==