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
      props = _objectWithoutProperties(_ref, ["field", "value", "validationMessage", "touched", "setTouched", "updateForm", "hideField"]);

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

  return _react["default"].createElement(_rebass.Box, {
    width: width,
    className: validationMessage && touched ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
    style: {
      display: hideField ? 'none' : undefined
    }
  }, _react["default"].createElement("div", {
    className: type
  }, _react["default"].createElement("label", {
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
    inputId: "input_".concat(id)
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description)), validationMessage && touched && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(id)
  }, validationMessage)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvTXVsdGlzZWxlY3QuanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwidXBkYXRlRm9ybSIsImhpZGVGaWVsZCIsInByb3BzIiwiaWQiLCJ0eXBlIiwibGFiZWwiLCJjc3NDbGFzcyIsImlzUmVxdWlyZWQiLCJjaG9pY2VzIiwicGxhY2Vob2xkZXIiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJvcHRpb25zIiwibWFwIiwiY2hvaWNlIiwidGV4dCIsInByZXNlbGVjdGVkIiwiZmlsdGVyIiwiaXNTZWxlY3RlZCIsImxlbmd0aCIsInNlbGVjdGVkT3B0aW9uIiwic2VsZWN0T3B0aW9uIiwiaGFuZGxlQ2hhbmdlIiwib3B0aW9uIiwiZXZlbnQiLCJ0YXJnZXQiLCJoYW5kbGVCbHVyIiwiZGlzcGxheSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFFZSx3QkFTVDtBQUFBLE1BUkpBLEtBUUksUUFSSkEsS0FRSTtBQUFBLE1BUEpDLEtBT0ksUUFQSkEsS0FPSTtBQUFBLE1BTkpDLGlCQU1JLFFBTkpBLGlCQU1JO0FBQUEsTUFMSkMsT0FLSSxRQUxKQSxPQUtJO0FBQUEsTUFKSkMsVUFJSSxRQUpKQSxVQUlJO0FBQUEsTUFISkMsVUFHSSxRQUhKQSxVQUdJO0FBQUEsTUFGSkMsU0FFSSxRQUZKQSxTQUVJO0FBQUEsTUFEREMsS0FDQzs7QUFBQSxNQUVGQyxFQUZFLEdBY0FSLEtBZEEsQ0FFRlEsRUFGRTtBQUFBLE1BR0ZDLElBSEUsR0FjQVQsS0FkQSxDQUdGUyxJQUhFO0FBQUEsTUFJRkMsS0FKRSxHQWNBVixLQWRBLENBSUZVLEtBSkU7QUFBQSxNQUtGQyxRQUxFLEdBY0FYLEtB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LElBQUk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQThCQSxXQUE5QixDQURoQixHQUdDLGdDQUFDLGlCQUFELENBQU8sUUFBUCxRQUNFLGdDQUFDLHVCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVJLFVBQVUsb0JBQWFYLEVBQWIsT0FEbEI7QUFFRSxJQUFBLFFBQVEsRUFBRUksVUFGWjtBQUdFLElBQUEsS0FBSyxFQUFFZ0IsY0FIVDtBQUlFLElBQUEsUUFBUSxFQUFFLGtCQUFBRyxNQUFNO0FBQUEsYUFBSUQsWUFBWSxDQUFDQyxNQUFELEVBQVMvQixLQUFULENBQWhCO0FBQUEsS0FKbEI7QUFLRSxJQUFBLE1BQU0sRUFBRTtBQUFBLGFBQU1rQyxVQUFVLEVBQWhCO0FBQUEsS0FMVjtBQU1FLElBQUEsV0FBVyxFQUFFcEIsV0FOZjtBQU9FLElBQUEsT0FBTyxFQUFFTSxPQVBYO0FBUUUsSUFBQSxPQUFPLE1BUlQ7QUFTRSxJQUFBLE9BQU8sa0JBQVdaLEVBQVg7QUFUVCxJQURGLEVBWUdPLFdBQVcsSUFBSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBOEJBLFdBQTlCLENBWmxCLENBUkosRUF1QkdiLGlCQUFpQixJQUFJQyxPQUFyQixJQUNDO0FBQU0sSUFBQSxTQUFTLEVBQUMsZUFBaEI7QUFBZ0MsSUFBQSxFQUFFLGtCQUFXSyxFQUFYO0FBQWxDLEtBQ0dOLGlCQURILENBeEJKLENBUEYsQ0FERjtBQXVDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAncmViYXNzJztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgdXBkYXRlRm9ybSxcbiAgaGlkZUZpZWxkLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBjc3NDbGFzcyxcbiAgICBpc1JlcXVpcmVkLFxuICAgIGNob2ljZXMsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgd2lkdGgsXG4gICAgY3VzdG9tTmFtZSxcbiAgfSA9IGZpZWxkO1xuICAvLyBNYXAgb3B0aW9uc1xuICBjb25zdCBvcHRpb25zID0gY2hvaWNlcy5tYXAoY2hvaWNlID0+ICh7IHZhbHVlOiBjaG9pY2UudmFsdWUsIGxhYmVsOiBjaG9pY2UudGV4dCB9KSk7XG4gIGxldCBwcmVzZWxlY3RlZCA9IGNob2ljZXMuZmlsdGVyKGNob2ljZSA9PiBjaG9pY2UuaXNTZWxlY3RlZCk7XG4gIGlmIChwcmVzZWxlY3RlZC5sZW5ndGgpIHtcbiAgICBwcmVzZWxlY3RlZCA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHByZXNlbGVjdGVkWzBdLnRleHQsXG4gICAgICAgIHZhbHVlOiBwcmVzZWxlY3RlZFswXS52YWx1ZSxcbiAgICAgIH0sXG4gICAgXTtcbiAgfSBlbHNlIHtcbiAgICBwcmVzZWxlY3RlZCA9ICcnO1xuICB9XG4gIC8vIEhhbmRsZSBTdGF0ZVxuICBjb25zdCBbc2VsZWN0ZWRPcHRpb24sIHNlbGVjdE9wdGlvbl0gPSB1c2VTdGF0ZSh2YWx1ZSB8fCBwcmVzZWxlY3RlZCk7XG4gIC8vIEhhbmRsZSBjaGFuZ2VcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG9wdGlvbikgPT4ge1xuICAgIHNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIHZhbHVlOiBvcHRpb24sXG4gICAgICB9LFxuICAgIH07XG4gICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICB9O1xuICAvLyBIYW5kbGUgQmx1clxuICBjb25zdCBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIHZhbHVlOiBzZWxlY3RlZE9wdGlvbixcbiAgICAgIH0sXG4gICAgfTtcbiAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgc2V0VG91Y2hlZChpZCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YCA6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuICAgICAgfVxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gJ25vbmUnIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGlucHV0XyR7aWR9YH0gY2xhc3NOYW1lPXtgZ3JvdXAtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAge2lzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgbmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpZH1bXWB9XG4gICAgICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvcHRpb24gPT4gaGFuZGxlQ2hhbmdlKG9wdGlvbiwgZmllbGQpfVxuICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IGhhbmRsZUJsdXIoKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgICBpc011bHRpXG4gICAgICAgICAgICAgIGlucHV0SWQ9e2BpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2lkfWB9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==