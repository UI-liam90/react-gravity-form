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
      error = _ref.error,
      unsetError = _ref.unsetError,
      props = _objectWithoutProperties(_ref, ["field", "value", "validationMessage", "touched", "setTouched", "updateForm", "hideField", "styledComponents", "error", "unsetError"]);

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
    unsetError(id);
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
      Label = _ref2$Label === void 0 ? 'label' : _ref2$Label,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? 'div' : _ref2$Box;

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
    className: "group-label ".concat(labelPlacement)
  }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === 'above' && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactSelect["default"], {
    name: customName || "input_".concat(id, "[]"),
    required: isRequired,
    value: selectedOption,
    onChange: function onChange(option) {
      handleChange(option, field);
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
  }, description)), (validationMessage && touched || error) && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(formId, "_").concat(id)
  }, validationMessage || error)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvTXVsdGlzZWxlY3QuanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwidXBkYXRlRm9ybSIsImhpZGVGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwiY3NzQ2xhc3MiLCJpc1JlcXVpcmVkIiwiY2hvaWNlcyIsInBsYWNlaG9sZGVyIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwib3B0aW9ucyIsIm1hcCIsImNob2ljZSIsInRleHQiLCJwcmVzZWxlY3RlZCIsImZpbHRlciIsImlzU2VsZWN0ZWQiLCJsZW5ndGgiLCJzZWxlY3RlZE9wdGlvbiIsInNlbGVjdE9wdGlvbiIsImhhbmRsZUNoYW5nZSIsIm9wdGlvbiIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlQmx1ciIsIlNlbGVjdFN0eWxlcyIsIkxhYmVsIiwiQm94IiwiZGlzcGxheSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFFZSx3QkFZVDtBQUFBLE1BWEpBLEtBV0ksUUFYSkEsS0FXSTtBQUFBLE1BVkpDLEtBVUksUUFWSkEsS0FVSTtBQUFBLE1BVEpDLGlCQVNJLFFBVEpBLGlCQVNJO0FBQUEsTUFSSkMsT0FRSSxRQVJKQSxPQVFJO0FBQUEsTUFQSkMsVUFPSSxRQVBKQSxVQU9JO0FBQUEsTUFOSkMsVUFNSSxRQU5KQSxVQU1JO0FBQUEsTUFMSkMsU0FLSSxRQUxKQSxTQUtJO0FBQUEsTUFKSkMsZ0JBSUksUUFKSkEsZ0JBSUk7QUFBQSxNQUhKQyxLQUdJLFFBSEpBLEtBR0k7QUFBQSxNQUZKQyxVQUVJLFFBRkpBLFVBRUk7QUFBQSxNQUREQyxLQUNDOztBQUFBLE1BRUZDLEVBRkUsR0FlQVgsS0FmQSxDQUVGVyxFQUZFO0FBQUEsTUFHRkMsTUFIRSxHQWVBWixLQWZBLENBR0ZZLE1BSEU7QUFBQSxNQUlGQyxJQUpFLEdBZUFiLEtBZkEsQ0FJRmEsSUFKRTtBQUFBLE1BS0ZDLEtBTEUsR0FlQWQsS0FmQSxDQUtGYyxLQUxFO0FBQUEsTUFNRkMsUUFORSxHQWVBZixLQWZBLENBTUZlLFFBTkU7QUFBQSxNQU9GQyxVQVBFLEdBZUFoQixLQWZBLENBT0ZnQixVQVBFO0FBQUEsTUFRRkMsT0FSRSxHQWVBakIsS0FmQSxDQVFGaUIsT0FSRTtBQUFBLE1BU0ZDLFdBVEUsR0FlQWxCLEtBZkEsQ0FTRmtCLFdBVEU7QUFBQSxNQVVGQyxXQVZFLEdBZUFuQixLQWZBLENBVUZtQixXQVZFO0FBQUEsTUFXRkMsb0JBWEUsR0FlQXBCLEtBZkEsQ0FXRm9CLG9CQVhFO0FBQUEsTUFZRkMsY0FaRSxHQWVBckIsS0FmQSxDQVlGcUIsY0FaRTtBQUFBLE1BYUZDLEtBYkUsR0FlQXRCLEtBZkEsQ0FhRnNCLEtBYkU7QUFBQSxNQWNGQyxVQWRFLEdBZUF2QixLQWZBLENBY0Z1QixVQWRFLEVBZ0JKOztBQUNBLE1BQU1DLE9BQU8sR0FBR1AsT0FBTyxDQUFDUSxHQUFSLENBQVksVUFBQUMsTUFBTTtBQUFBLFdBQUs7QUFDckN6QixNQUFBQSxLQUFLLEVBQUV5QixNQUFNLENBQUN6QixLQUR1QjtBQUVyQ2EsTUFBQUEsS0FBSyxFQUFFWSxNQUFNLENBQUNDO0FBRnVCLEtBQUw7QUFBQSxHQUFsQixDQUFoQjtBQUlBLE1BQUlDLFdBQVcsR0FBR1gsT0FBTyxDQUFDWSxNQUFSLENBQWUsVUFBQUgsTUFBTTtBQUFBLFdBQUlBLE1BQU0sQ0FBQ0ksVUFBWDtBQUFBLEdBQXJCLENBQWxCOztBQUNBLE1BQUlGLFdBQVcsQ0FBQ0csTUFBaEIsRUFBd0I7QUFDdEJILElBQUFBLFdBQVcsR0FBRyxDQUNaO0FBQ0VkLE1BQUFBLEtBQUssRUFBRWMsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlRCxJQUR4QjtBQUVFMUIsTUFBQUEsS0FBSyxFQUFFMkIsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlM0I7QUFGeEIsS0FEWSxDQUFkO0FBTUQsR0FQRCxNQU9PO0FBQ0wyQixJQUFBQSxXQUFXLEdBQUcsRUFBZDtBQUNELEdBL0JHLENBZ0NKOzs7QUFoQ0ksa0JBaUNtQyxxQkFBUzNCLEtBQUssSUFBSTJCLFdBQWxCLENBakNuQztBQUFBO0FBQUEsTUFpQ0dJLGNBakNIO0FBQUEsTUFpQ21CQyxZQWpDbkIsa0JBa0NKOzs7QUFDQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxNQUFELEVBQVk7QUFDL0JGLElBQUFBLFlBQVksQ0FBQ0UsTUFBRCxDQUFaO0FBQ0EsUUFBTUMsS0FBSyxHQUFHO0FBQ1pDLE1BQUFBLE1BQU0sRUFBRTtBQUNOcEMsUUFBQUEsS0FBSyxFQUFFa0M7QUFERDtBQURJLEtBQWQ7QUFLQTlCLElBQUFBLFVBQVUsQ0FBQytCLEtBQUQsRUFBUXBDLEtBQVIsQ0FBVjtBQUNBUyxJQUFBQSxVQUFVLENBQUNFLEVBQUQsQ0FBVjtBQUNELEdBVEQsQ0FuQ0ksQ0E2Q0o7OztBQUNBLE1BQU0yQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLFFBQU1GLEtBQUssR0FBRztBQUNaQyxNQUFBQSxNQUFNLEVBQUU7QUFDTnBDLFFBQUFBLEtBQUssRUFBRStCO0FBREQ7QUFESSxLQUFkO0FBS0EzQixJQUFBQSxVQUFVLENBQUMrQixLQUFELEVBQVFwQyxLQUFSLENBQVY7QUFDQUksSUFBQUEsVUFBVSxDQUFDTyxFQUFELENBQVY7QUFDRCxHQVJEOztBQTlDSSxjQXVEbURKLGdCQUFnQixJQUFJLEtBdkR2RTtBQUFBLE1BdURJZ0MsWUF2REosU0F1RElBLFlBdkRKO0FBQUEsMEJBdURrQkMsS0F2RGxCO0FBQUEsTUF1RGtCQSxLQXZEbEIsNEJBdUQwQixPQXZEMUI7QUFBQSx3QkF1RG1DQyxHQXZEbkM7QUFBQSxNQXVEbUNBLEdBdkRuQywwQkF1RHlDLEtBdkR6Qzs7QUF3REosU0FDRSxnQ0FBQyxHQUFEO0FBQ0UsSUFBQSxLQUFLLEVBQUVuQixLQURUO0FBRUUsSUFBQSxTQUFTLEVBQ05wQixpQkFBaUIsSUFBSUMsT0FBdEIsSUFBa0NLLEtBQWxDLDhCQUN3Qk8sUUFEeEIseUJBRWtCQSxRQUZsQixDQUhKO0FBT0UsSUFBQSxLQUFLLEVBQUU7QUFBRTJCLE1BQUFBLE9BQU8sRUFBRXBDLFNBQVMsR0FBRyxNQUFILEdBQVlxQztBQUFoQztBQVBULEtBU0U7QUFBSyxJQUFBLFNBQVMsRUFBRTlCO0FBQWhCLEtBQ0UsZ0NBQUMsS0FBRDtBQUFPLElBQUEsT0FBTyxrQkFBV0QsTUFBWCxjQUFxQkQsRUFBckIsQ0FBZDtBQUF5QyxJQUFBLFNBQVMsd0JBQWlCVSxjQUFqQjtBQUFsRCxLQUNHUCxLQURILEVBRUdFLFVBQVUsR0FBRyxrREFBSCxHQUFvQixJQUZqQyxDQURGLEVBS0dJLG9CQUFvQixLQUFLLE9BQXpCLElBQW9DRCxXQUFwQyxHQUNDQSxXQUFXLElBQUk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQThCQSxXQUE5QixDQURoQixHQUdDLGdDQUFDLGlCQUFELENBQU8sUUFBUCxRQUNFLGdDQUFDLHVCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVJLFVBQVUsb0JBQWFaLEVBQWIsT0FEbEI7QUFFRSxJQUFBLFFBQVEsRUFBRUssVUFGWjtBQUdFLElBQUEsS0FBSyxFQUFFZ0IsY0FIVDtBQUlFLElBQUEsUUFBUSxFQUFFLGtCQUFDRyxNQUFELEVBQVk7QUFDcEJELE1BQUFBLFlBQVksQ0FBQ0MsTUFBRCxFQUFTbkMsS0FBVCxDQUFaO0FBQ0QsS0FOSDtBQU9FLElBQUEsTUFBTSxFQUFFO0FBQUEsYUFBTXNDLFVBQVUsRUFBaEI7QUFBQSxLQVBWO0FBUUUsSUFBQSxXQUFXLEVBQUVwQixXQVJmO0FBU0UsSUFBQSxPQUFPLEVBQUVNLE9BVFg7QUFVRSxJQUFBLE9BQU8sTUFWVDtBQVdFLElBQUEsT0FBTyxrQkFBV1osTUFBWCxjQUFxQkQsRUFBckIsQ0FYVDtBQVlFLElBQUEsTUFBTSxFQUFFNEI7QUFaVixJQURGLEVBZUdwQixXQUFXLElBQUk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQThCQSxXQUE5QixDQWZsQixDQVJKLEVBMEJHLENBQUVqQixpQkFBaUIsSUFBSUMsT0FBdEIsSUFBa0NLLEtBQW5DLEtBQ0M7QUFBTSxJQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFnQyxJQUFBLEVBQUUsa0JBQVdJLE1BQVgsY0FBcUJELEVBQXJCO0FBQWxDLEtBQ0dULGlCQUFpQixJQUFJTSxLQUR4QixDQTNCSixDQVRGLENBREY7QUE0Q0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgdXBkYXRlRm9ybSxcbiAgaGlkZUZpZWxkLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICBlcnJvcixcbiAgdW5zZXRFcnJvcixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGZvcm1JZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIGNzc0NsYXNzLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgY2hvaWNlcyxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBjdXN0b21OYW1lLFxuICB9ID0gZmllbGQ7XG4gIC8vIE1hcCBvcHRpb25zXG4gIGNvbnN0IG9wdGlvbnMgPSBjaG9pY2VzLm1hcChjaG9pY2UgPT4gKHtcbiAgICB2YWx1ZTogY2hvaWNlLnZhbHVlLFxuICAgIGxhYmVsOiBjaG9pY2UudGV4dCxcbiAgfSkpO1xuICBsZXQgcHJlc2VsZWN0ZWQgPSBjaG9pY2VzLmZpbHRlcihjaG9pY2UgPT4gY2hvaWNlLmlzU2VsZWN0ZWQpO1xuICBpZiAocHJlc2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgcHJlc2VsZWN0ZWQgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBwcmVzZWxlY3RlZFswXS50ZXh0LFxuICAgICAgICB2YWx1ZTogcHJlc2VsZWN0ZWRbMF0udmFsdWUsXG4gICAgICB9LFxuICAgIF07XG4gIH0gZWxzZSB7XG4gICAgcHJlc2VsZWN0ZWQgPSAnJztcbiAgfVxuICAvLyBIYW5kbGUgU3RhdGVcbiAgY29uc3QgW3NlbGVjdGVkT3B0aW9uLCBzZWxlY3RPcHRpb25dID0gdXNlU3RhdGUodmFsdWUgfHwgcHJlc2VsZWN0ZWQpO1xuICAvLyBIYW5kbGUgY2hhbmdlXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChvcHRpb24pID0+IHtcbiAgICBzZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICBjb25zdCBldmVudCA9IHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB2YWx1ZTogb3B0aW9uLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICB1bnNldEVycm9yKGlkKTtcbiAgfTtcbiAgLy8gSGFuZGxlIEJsdXJcbiAgY29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICBjb25zdCBldmVudCA9IHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB2YWx1ZTogc2VsZWN0ZWRPcHRpb24sXG4gICAgICB9LFxuICAgIH07XG4gICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgIHNldFRvdWNoZWQoaWQpO1xuICB9O1xuICBjb25zdCB7IFNlbGVjdFN0eWxlcywgTGFiZWwgPSAnbGFiZWwnLCBCb3ggPSAnZGl2JyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcbiAgICAgICAgICA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuICAgICAgICAgIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH0gY2xhc3NOYW1lPXtgZ3JvdXAtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAge2lzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgbmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpZH1bXWB9XG4gICAgICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKG9wdGlvbiwgZmllbGQpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IGhhbmRsZUJsdXIoKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgICBpc011bHRpXG4gICAgICAgICAgICAgIGlucHV0SWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfVxuICAgICAgICAgICAgICBzdHlsZXM9e1NlbGVjdFN0eWxlc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgICAgeygodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3IpICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSB8fCBlcnJvcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXX0=