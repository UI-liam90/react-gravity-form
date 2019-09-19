"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _rebass = require("rebass");

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
      Label = _ref2$Label === void 0 ? 'label' : _ref2$Label;

  return _react["default"].createElement(_rebass.Box, {
    width: width,
    className: validationMessage && touched ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvTXVsdGlzZWxlY3QuanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwidXBkYXRlRm9ybSIsImhpZGVGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwiY3NzQ2xhc3MiLCJpc1JlcXVpcmVkIiwiY2hvaWNlcyIsInBsYWNlaG9sZGVyIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwib3B0aW9ucyIsIm1hcCIsImNob2ljZSIsInRleHQiLCJwcmVzZWxlY3RlZCIsImZpbHRlciIsImlzU2VsZWN0ZWQiLCJsZW5ndGgiLCJzZWxlY3RlZE9wdGlvbiIsInNlbGVjdE9wdGlvbiIsImhhbmRsZUNoYW5nZSIsIm9wdGlvbiIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlQmx1ciIsIlNlbGVjdFN0eWxlcyIsIkxhYmVsIiwiZGlzcGxheSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFFZSx3QkFVVDtBQUFBLE1BVEpBLEtBU0ksUUFUSkEsS0FTSTtBQUFBLE1BUkpDLEtBUUksUUFSSkEsS0FRSTtBQUFBLE1BUEpDLGlCQU9JLFFBUEpBLGlCQU9JO0FBQUEsTUFOSkMsT0FNSSxRQU5KQSxPQU1JO0FBQUEsTUFMSkMsVUFLSSxRQUxKQSxVQUtJO0FBQUEsTUFKSkMsVUFJSSxRQUpKQSxVQUlJO0FBQUEsTUFISkMsU0FHSSxRQUhKQSxTQUdJO0FBQUEsTUFGSkMsZ0JBRUksUUFGSkEsZ0JBRUk7QUFBQSxNQUREQyxLQUNDOztBQUFBLE1BRUZDLEVBRkUsR0FlQVQsS0FmQSxDQUVGUyxFQUZFO0FBQUEsTUFHRkMsTUFIRSxHQWVB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QUFYLGNBQXFCRCxFQUFyQjtBQUFsQyxLQUNHUCxpQkFESCxDQXpCSixDQVBGLENBREY7QUF3Q0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcbmltcG9ydCB7IEJveCB9IGZyb20gJ3JlYmFzcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIHVwZGF0ZUZvcm0sXG4gIGhpZGVGaWVsZCxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGZvcm1JZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIGNzc0NsYXNzLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgY2hvaWNlcyxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBjdXN0b21OYW1lLFxuICB9ID0gZmllbGQ7XG4gIC8vIE1hcCBvcHRpb25zXG4gIGNvbnN0IG9wdGlvbnMgPSBjaG9pY2VzLm1hcChjaG9pY2UgPT4gKHsgdmFsdWU6IGNob2ljZS52YWx1ZSwgbGFiZWw6IGNob2ljZS50ZXh0IH0pKTtcbiAgbGV0IHByZXNlbGVjdGVkID0gY2hvaWNlcy5maWx0ZXIoY2hvaWNlID0+IGNob2ljZS5pc1NlbGVjdGVkKTtcbiAgaWYgKHByZXNlbGVjdGVkLmxlbmd0aCkge1xuICAgIHByZXNlbGVjdGVkID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogcHJlc2VsZWN0ZWRbMF0udGV4dCxcbiAgICAgICAgdmFsdWU6IHByZXNlbGVjdGVkWzBdLnZhbHVlLFxuICAgICAgfSxcbiAgICBdO1xuICB9IGVsc2Uge1xuICAgIHByZXNlbGVjdGVkID0gJyc7XG4gIH1cbiAgLy8gSGFuZGxlIFN0YXRlXG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2VsZWN0T3B0aW9uXSA9IHVzZVN0YXRlKHZhbHVlIHx8IHByZXNlbGVjdGVkKTtcbiAgLy8gSGFuZGxlIGNoYW5nZVxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAob3B0aW9uKSA9PiB7XG4gICAgc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgIH0sXG4gICAgfTtcbiAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gIH07XG4gIC8vIEhhbmRsZSBCbHVyXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsdWU6IHNlbGVjdGVkT3B0aW9uLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICBzZXRUb3VjaGVkKGlkKTtcbiAgfTtcbiAgY29uc3QgeyBTZWxlY3RTdHlsZXMsIExhYmVsID0gJ2xhYmVsJyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH0gY2xhc3NOYW1lPXtgZ3JvdXAtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAge2lzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgbmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpZH1bXWB9XG4gICAgICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvcHRpb24gPT4gaGFuZGxlQ2hhbmdlKG9wdGlvbiwgZmllbGQpfVxuICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IGhhbmRsZUJsdXIoKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgICBpc011bHRpXG4gICAgICAgICAgICAgIGlucHV0SWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfVxuICAgICAgICAgICAgICBzdHlsZXM9e1NlbGVjdFN0eWxlc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==