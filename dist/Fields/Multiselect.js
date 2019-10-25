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
      props = _objectWithoutProperties(_ref, ["field", "value", "validationMessage", "touched", "setTouched", "updateForm", "hideField", "styledComponents"]);

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
    preselected = "";
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
      Label = _ref2$Label === void 0 ? "label" : _ref2$Label,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? "div" : _ref2$Box;

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
    className: "group-label ".concat(labelPlacement)
  }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === "above" && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactSelect["default"], {
    name: customName || "input_".concat(id, "[]"),
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
    isMulti: true,
    inputId: "input_".concat(formId, "_").concat(id),
    styles: SelectStyles
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description)), validationMessage && touched && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(formId, "_").concat(id)
  }, validationMessage)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvTXVsdGlzZWxlY3QuanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwidXBkYXRlRm9ybSIsImhpZGVGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwiY3NzQ2xhc3MiLCJpc1JlcXVpcmVkIiwiY2hvaWNlcyIsInBsYWNlaG9sZGVyIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwib3B0aW9ucyIsIm1hcCIsImNob2ljZSIsInRleHQiLCJwcmVzZWxlY3RlZCIsImZpbHRlciIsImlzU2VsZWN0ZWQiLCJsZW5ndGgiLCJzZWxlY3RlZE9wdGlvbiIsInNlbGVjdE9wdGlvbiIsImhhbmRsZUNoYW5nZSIsIm9wdGlvbiIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlQmx1ciIsIlNlbGVjdFN0eWxlcyIsIkxhYmVsIiwiQm94IiwiZGlzcGxheSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFFZSx3QkFVVDtBQUFBLE1BVExBLEtBU0ssUUFUTEEsS0FTSztBQUFBLE1BUkxDLEtBUUssUUFSTEEsS0FRSztBQUFBLE1BUExDLGlCQU9LLFFBUExBLGlCQU9LO0FBQUEsTUFOTEMsT0FNSyxRQU5MQSxPQU1LO0FBQUEsTUFMTEMsVUFLSyxRQUxMQSxVQUtLO0FBQUEsTUFKTEMsVUFJSyxRQUpMQSxVQUlLO0FBQUEsTUFITEMsU0FHSyxRQUhMQSxTQUdLO0FBQUEsTUFGTEMsZ0JBRUssUUFGTEEsZ0JBRUs7QUFBQSxNQURGQyxLQUNFOztBQUFBLE1BRUpDLEVBRkksR0FlRFQsS0FmQyxDQUVKUyxFQUZJO0FBQUEsTUFHSkMsTUFISSxHQWVE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Q0E7QUFBTSxJQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFnQyxJQUFBLEVBQUUsa0JBQVdPLE1BQVgsY0FBcUJELEVBQXJCO0FBQWxDLEtBQ0VQLGlCQURGLENBNUJGLENBVEQsQ0FERDtBQTZDQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHtcblx0ZmllbGQsXG5cdHZhbHVlLFxuXHR2YWxpZGF0aW9uTWVzc2FnZSxcblx0dG91Y2hlZCxcblx0c2V0VG91Y2hlZCxcblx0dXBkYXRlRm9ybSxcblx0aGlkZUZpZWxkLFxuXHRzdHlsZWRDb21wb25lbnRzLFxuXHQuLi5wcm9wc1xufSkgPT4ge1xuXHRjb25zdCB7XG5cdFx0aWQsXG5cdFx0Zm9ybUlkLFxuXHRcdHR5cGUsXG5cdFx0bGFiZWwsXG5cdFx0Y3NzQ2xhc3MsXG5cdFx0aXNSZXF1aXJlZCxcblx0XHRjaG9pY2VzLFxuXHRcdHBsYWNlaG9sZGVyLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuXHRcdGxhYmVsUGxhY2VtZW50LFxuXHRcdHdpZHRoLFxuXHRcdGN1c3RvbU5hbWVcblx0fSA9IGZpZWxkO1xuXHQvLyBNYXAgb3B0aW9uc1xuXHRjb25zdCBvcHRpb25zID0gY2hvaWNlcy5tYXAoY2hvaWNlID0+ICh7XG5cdFx0dmFsdWU6IGNob2ljZS52YWx1ZSxcblx0XHRsYWJlbDogY2hvaWNlLnRleHRcblx0fSkpO1xuXHRsZXQgcHJlc2VsZWN0ZWQgPSBjaG9pY2VzLmZpbHRlcihjaG9pY2UgPT4gY2hvaWNlLmlzU2VsZWN0ZWQpO1xuXHRpZiAocHJlc2VsZWN0ZWQubGVuZ3RoKSB7XG5cdFx0cHJlc2VsZWN0ZWQgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdGxhYmVsOiBwcmVzZWxlY3RlZFswXS50ZXh0LFxuXHRcdFx0XHR2YWx1ZTogcHJlc2VsZWN0ZWRbMF0udmFsdWVcblx0XHRcdH1cblx0XHRdO1xuXHR9IGVsc2Uge1xuXHRcdHByZXNlbGVjdGVkID0gXCJcIjtcblx0fVxuXHQvLyBIYW5kbGUgU3RhdGVcblx0Y29uc3QgW3NlbGVjdGVkT3B0aW9uLCBzZWxlY3RPcHRpb25dID0gdXNlU3RhdGUodmFsdWUgfHwgcHJlc2VsZWN0ZWQpO1xuXHQvLyBIYW5kbGUgY2hhbmdlXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IG9wdGlvbiA9PiB7XG5cdFx0c2VsZWN0T3B0aW9uKG9wdGlvbik7XG5cdFx0Y29uc3QgZXZlbnQgPSB7XG5cdFx0XHR0YXJnZXQ6IHtcblx0XHRcdFx0dmFsdWU6IG9wdGlvblxuXHRcdFx0fVxuXHRcdH07XG5cdFx0dXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuXHR9O1xuXHQvLyBIYW5kbGUgQmx1clxuXHRjb25zdCBoYW5kbGVCbHVyID0gKCkgPT4ge1xuXHRcdGNvbnN0IGV2ZW50ID0ge1xuXHRcdFx0dGFyZ2V0OiB7XG5cdFx0XHRcdHZhbHVlOiBzZWxlY3RlZE9wdGlvblxuXHRcdFx0fVxuXHRcdH07XG5cdFx0dXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuXHRcdHNldFRvdWNoZWQoaWQpO1xuXHR9O1xuXHRjb25zdCB7IFNlbGVjdFN0eWxlcywgTGFiZWwgPSBcImxhYmVsXCIsIEJveCA9IFwiZGl2XCIgfSA9XG5cdFx0c3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblx0cmV0dXJuIChcblx0XHQ8Qm94XG5cdFx0XHR3aWR0aD17d2lkdGh9XG5cdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHR2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkXG5cdFx0XHRcdFx0PyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWBcblx0XHRcdFx0XHQ6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuXHRcdFx0fVxuXHRcdFx0c3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gXCJub25lXCIgOiB1bmRlZmluZWQgfX1cblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dHlwZX0+XG5cdFx0XHRcdDxMYWJlbFxuXHRcdFx0XHRcdGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YGdyb3VwLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHtsYWJlbH1cblx0XHRcdFx0XHR7aXNSZXF1aXJlZCA/IDxhYmJyPio8L2FiYnI+IDogbnVsbH1cblx0XHRcdFx0PC9MYWJlbD5cblx0XHRcdFx0e2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gPyAoXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8U2VsZWN0XG5cdFx0XHRcdFx0XHRcdG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9W11gfVxuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZD17aXNSZXF1aXJlZH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkT3B0aW9ufVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17b3B0aW9uID0+IGhhbmRsZUNoYW5nZShvcHRpb24sIGZpZWxkKX1cblx0XHRcdFx0XHRcdFx0b25CbHVyPXsoKSA9PiBoYW5kbGVCbHVyKCl9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17b3B0aW9uc31cblx0XHRcdFx0XHRcdFx0aXNNdWx0aVxuXHRcdFx0XHRcdFx0XHRpbnB1dElkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH1cblx0XHRcdFx0XHRcdFx0c3R5bGVzPXtTZWxlY3RTdHlsZXN9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0e2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuXHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHt2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkICYmIChcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cblx0XHRcdFx0XHRcdHt2YWxpZGF0aW9uTWVzc2FnZX1cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0JveD5cblx0KTtcbn07XG4iXX0=