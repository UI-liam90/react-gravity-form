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
    htmlFor: "input_".concat(id),
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
    inputId: "input_".concat(id),
    styles: SelectStyles
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description)), validationMessage && touched && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(id)
  }, validationMessage)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvTXVsdGlzZWxlY3QuanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwidXBkYXRlRm9ybSIsImhpZGVGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJwcm9wcyIsImlkIiwidHlwZSIsImxhYmVsIiwiY3NzQ2xhc3MiLCJpc1JlcXVpcmVkIiwiY2hvaWNlcyIsInBsYWNlaG9sZGVyIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwib3B0aW9ucyIsIm1hcCIsImNob2ljZSIsInRleHQiLCJwcmVzZWxlY3RlZCIsImZpbHRlciIsImlzU2VsZWN0ZWQiLCJsZW5ndGgiLCJzZWxlY3RlZE9wdGlvbiIsInNlbGVjdE9wdGlvbiIsImhhbmRsZUNoYW5nZSIsIm9wdGlvbiIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlQmx1ciIsIlNlbGVjdFN0eWxlcyIsIkxhYmVsIiwiZGlzcGxheSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFFZSx3QkFVVDtBQUFBLE1BVEpBLEtBU0ksUUFUSkEsS0FTSTtBQUFBLE1BUkpDLEtBUUksUUFSSkEsS0FRSTtBQUFBLE1BUEpDLGlCQU9JLFFBUEpBLGlCQU9JO0FBQUEsTUFOSkMsT0FNSSxRQU5KQSxPQU1JO0FBQUEsTUFMSkMsVUFLSSxRQUxKQSxVQUtJO0FBQUEsTUFKSkMsVUFJSSxRQUpKQSxVQUlJO0FBQUEsTUFISkMsU0FHSSxRQUhKQSxTQUdJO0FBQUEsTUFGSkMsZ0JBRUksUUFGSkEsZ0JBRUk7QUFBQSxNQUREQyxLQUNDOztBQUFBLE1BRUZDLEVBRkUsR0FjQVQsS0FkQSxDQUVGUyxFQUZFO0FBQUEsTUFHRkMsSUFIRSxHQWNBVixLQWRBLENB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Y3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICdyZWJhc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICB0b3VjaGVkLFxuICBzZXRUb3VjaGVkLFxuICB1cGRhdGVGb3JtLFxuICBoaWRlRmllbGQsXG4gIHN0eWxlZENvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIGNzc0NsYXNzLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgY2hvaWNlcyxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBjdXN0b21OYW1lLFxuICB9ID0gZmllbGQ7XG4gIC8vIE1hcCBvcHRpb25zXG4gIGNvbnN0IG9wdGlvbnMgPSBjaG9pY2VzLm1hcChjaG9pY2UgPT4gKHsgdmFsdWU6IGNob2ljZS52YWx1ZSwgbGFiZWw6IGNob2ljZS50ZXh0IH0pKTtcbiAgbGV0IHByZXNlbGVjdGVkID0gY2hvaWNlcy5maWx0ZXIoY2hvaWNlID0+IGNob2ljZS5pc1NlbGVjdGVkKTtcbiAgaWYgKHByZXNlbGVjdGVkLmxlbmd0aCkge1xuICAgIHByZXNlbGVjdGVkID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogcHJlc2VsZWN0ZWRbMF0udGV4dCxcbiAgICAgICAgdmFsdWU6IHByZXNlbGVjdGVkWzBdLnZhbHVlLFxuICAgICAgfSxcbiAgICBdO1xuICB9IGVsc2Uge1xuICAgIHByZXNlbGVjdGVkID0gJyc7XG4gIH1cbiAgLy8gSGFuZGxlIFN0YXRlXG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2VsZWN0T3B0aW9uXSA9IHVzZVN0YXRlKHZhbHVlIHx8IHByZXNlbGVjdGVkKTtcbiAgLy8gSGFuZGxlIGNoYW5nZVxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAob3B0aW9uKSA9PiB7XG4gICAgc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgIH0sXG4gICAgfTtcbiAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gIH07XG4gIC8vIEhhbmRsZSBCbHVyXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsdWU6IHNlbGVjdGVkT3B0aW9uLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICBzZXRUb3VjaGVkKGlkKTtcbiAgfTtcbiAgY29uc3QgeyBTZWxlY3RTdHlsZXMsIExhYmVsID0gJ2xhYmVsJyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtpZH1gfSBjbGFzc05hbWU9e2Bncm91cC1sYWJlbCAke2xhYmVsUGxhY2VtZW50fWB9PlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICB7aXNSZXF1aXJlZCA/IDxhYmJyPio8L2FiYnI+IDogbnVsbH1cbiAgICAgICAgPC9MYWJlbD5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgIGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfVtdYH1cbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29wdGlvbiA9PiBoYW5kbGVDaGFuZ2Uob3B0aW9uLCBmaWVsZCl9XG4gICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gaGFuZGxlQmx1cigpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICAgIGlzTXVsdGlcbiAgICAgICAgICAgICAgaW5wdXRJZD17YGlucHV0XyR7aWR9YH1cbiAgICAgICAgICAgICAgc3R5bGVzPXtTZWxlY3RTdHlsZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2lkfWB9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==