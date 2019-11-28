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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvU2VsZWN0LmpzeCJdLCJuYW1lcyI6WyJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsImhpZGVGaWVsZCIsInVwZGF0ZUZvcm0iLCJzdHlsZWRDb21wb25lbnRzIiwiZXJyb3IiLCJzZXRGb2N1c0NsYXNzIiwiY3NzQ2xhc3MiLCJ1bnNldEVycm9yIiwicHJvcHMiLCJpZCIsImZvcm1JZCIsInR5cGUiLCJsYWJlbCIsImlzUmVxdWlyZWQiLCJjaG9pY2VzIiwicGxhY2Vob2xkZXIiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJvcHRpb25zIiwibWFwIiwiY2hvaWNlIiwidGV4dCIsInNlbGVjdGVkT3B0aW9uIiwic2VsZWN0T3B0aW9uIiwiaGFuZGxlQ2hhbmdlIiwib3B0aW9uIiwiZXZlbnQiLCJ0YXJnZXQiLCJoYW5kbGVCbHVyIiwiUmVhY3RTZWxlY3QiLCJMYWJlbCIsIkJveCIsIlJTZWxlY3QiLCJTZWxlY3QiLCJkaXNwbGF5IiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUVlLHdCQWNUO0FBQUEsTUFiSkEsS0FhSSxRQWJKQSxLQWFJO0FBQUEsTUFaSkMsS0FZSSxRQVpKQSxLQVlJO0FBQUEsTUFYSkMsaUJBV0ksUUFYSkEsaUJBV0k7QUFBQSxNQVZKQyxPQVVJLFFBVkpBLE9BVUk7QUFBQSxNQVRKQyxVQVNJLFFBVEpBLFVBU0k7QUFBQSxNQVJKQyxTQVFJLFFBUkpBLFNBUUk7QUFBQSxNQVBKQyxVQU9JLFFBUEpBLFVBT0k7QUFBQSxNQU5KQyxnQkFNSSxRQU5KQSxnQkFNSTtBQUFBLE1BTEpDLEtBS0ksUUFMSkEsS0FLSTtBQUFBLE1BSkpDLGFBSUksUUFKSkEsYUFJSTtBQUFBLE1BSEpDLFFBR0ks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TSxNQUFYLGNBQXFCRCxFQUFyQjtBQUFsQyxLQUNHWCxpQkFBaUIsSUFBSU0sS0FEeEIsQ0E3QkosQ0FURixDQURGO0FBOENELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIGhpZGVGaWVsZCxcbiAgdXBkYXRlRm9ybSxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgZXJyb3IsXG4gIHNldEZvY3VzQ2xhc3MsXG4gIGNzc0NsYXNzLFxuICB1bnNldEVycm9yLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgZm9ybUlkLFxuICAgIHR5cGUsXG4gICAgbGFiZWwsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBjaG9pY2VzLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgIGxhYmVsUGxhY2VtZW50LFxuICAgIHdpZHRoLFxuICAgIGN1c3RvbU5hbWUsXG4gIH0gPSBmaWVsZDtcbiAgLy8gTWFwIG9wdGlvbnNcbiAgY29uc3Qgb3B0aW9ucyA9IGNob2ljZXMubWFwKGNob2ljZSA9PiAoe1xuICAgIHZhbHVlOiBjaG9pY2UudmFsdWUsXG4gICAgbGFiZWw6IGNob2ljZS50ZXh0LFxuICB9KSk7XG4gIC8vIEhhbmRsZSBTdGF0ZVxuICBjb25zdCBbc2VsZWN0ZWRPcHRpb24sIHNlbGVjdE9wdGlvbl0gPSB1c2VTdGF0ZSh2YWx1ZSB8fCAnJyk7XG4gIC8vIEhhbmRsZSBjaGFuZ2VcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG9wdGlvbikgPT4ge1xuICAgIHNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIHZhbHVlOiBvcHRpb24sXG4gICAgICB9LFxuICAgIH07XG4gICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICB9O1xuICAvLyBIYW5kbGUgQmx1clxuICBjb25zdCBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIHZhbHVlOiBzZWxlY3RlZE9wdGlvbixcbiAgICAgIH0sXG4gICAgfTtcbiAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgc2V0VG91Y2hlZChpZCk7XG4gICAgc2V0Rm9jdXNDbGFzcyh2YWx1ZSAhPT0gJycpO1xuICB9O1xuICBjb25zdCB7IFJlYWN0U2VsZWN0LCBMYWJlbCA9ICdsYWJlbCcsIEJveCA9ICdkaXYnIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuXG4gIGNvbnN0IFJTZWxlY3QgPSBSZWFjdFNlbGVjdCB8fCBTZWxlY3Q7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcbiAgICAgICAgICA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuICAgICAgICAgIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH0gY2xhc3NOYW1lPXtgZ2YtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAge2lzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxSU2VsZWN0XG4gICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9YH1cbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2Uob3B0aW9uLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gaGFuZGxlQmx1cigpfVxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRGb2N1c0NsYXNzKHRydWUpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcbiAgICAgICAgICAgICAgLy8gc3R5bGVzPXtjdXN0b21TdHlsZXN9XG4gICAgICAgICAgICAgIGlucHV0SWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2Pn1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgICB7KCh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvcikgJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlIHx8IGVycm9yfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==