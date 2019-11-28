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
      setFocusClass = _ref.setFocusClass,
      cssClass = _ref.cssClass,
      props = _objectWithoutProperties(_ref, ["field", "value", "validationMessage", "touched", "setTouched", "updateForm", "hideField", "styledComponents", "error", "unsetError", "setFocusClass", "cssClass"]);

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
    setFocusClass(value !== '');
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
    onFocus: function onFocus() {
      return setFocusClass(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvTXVsdGlzZWxlY3QuanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwidXBkYXRlRm9ybSIsImhpZGVGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJzZXRGb2N1c0NsYXNzIiwiY3NzQ2xhc3MiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwiaXNSZXF1aXJlZCIsImNob2ljZXMiLCJwbGFjZWhvbGRlciIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiY3VzdG9tTmFtZSIsIm9wdGlvbnMiLCJtYXAiLCJjaG9pY2UiLCJ0ZXh0IiwicHJlc2VsZWN0ZWQiLCJmaWx0ZXIiLCJpc1NlbGVjdGVkIiwibGVuZ3RoIiwic2VsZWN0ZWRPcHRpb24iLCJzZWxlY3RPcHRpb24iLCJoYW5kbGVDaGFuZ2UiLCJvcHRpb24iLCJldmVudCIsInRhcmdldCIsImhhbmRsZUJsdXIiLCJTZWxlY3RTdHlsZXMiLCJMYWJlbCIsIkJveCIsImRpc3BsYXkiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRWUsd0JBY1Q7QUFBQSxNQWJKQSxLQWFJLFFBYkpBLEtBYUk7QUFBQSxNQVpKQyxLQVlJLFFBWkpBLEtBWUk7QUFBQSxNQVhKQyxpQkFXSSxRQVhKQSxpQkFXSTtBQUFBLE1BVkpDLE9BVUksUUFWSkEsT0FVSTtBQUFBLE1BVEpDLFVBU0ksUUFUSkEsVUFTSTtBQUFBLE1BUkpDLFVBUUksUUFSSkEsVUFRSTtBQUFBLE1BUEpDLFNBT0ksUUFQSkEsU0FPSTtBQUFBLE1BTkpDLGdCQU1JLFFBTkpBLGdCQU1JO0FBQUEsTUFMSkMsS0FLSSxRQUxKQSxLQUtJO0FBQUEsTUFKSkMs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QWEsQ0FBQyxJQUFELENBQW5CO0FBQUEsS0FSWDtBQVNFLElBQUEsV0FBVyxFQUFFUyxXQVRmO0FBVUUsSUFBQSxPQUFPLEVBQUVNLE9BVlg7QUFXRSxJQUFBLE9BQU8sTUFYVDtBQVlFLElBQUEsT0FBTyxrQkFBV1gsTUFBWCxjQUFxQkQsRUFBckIsQ0FaVDtBQWFFLElBQUEsTUFBTSxFQUFFMkI7QUFiVixJQURGLEVBZ0JHcEIsV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0FoQmxCLENBUkosRUEyQkcsQ0FBRWxCLGlCQUFpQixJQUFJQyxPQUF0QixJQUFrQ0ssS0FBbkMsS0FDQztBQUFNLElBQUEsU0FBUyxFQUFDLGVBQWhCO0FBQWdDLElBQUEsRUFBRSxrQkFBV00sTUFBWCxjQUFxQkQsRUFBckI7QUFBbEMsS0FDR1gsaUJBQWlCLElBQUlNLEtBRHhCLENBNUJKLENBVEYsQ0FERjtBQTZDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICB0b3VjaGVkLFxuICBzZXRUb3VjaGVkLFxuICB1cGRhdGVGb3JtLFxuICBoaWRlRmllbGQsXG4gIHN0eWxlZENvbXBvbmVudHMsXG4gIGVycm9yLFxuICB1bnNldEVycm9yLFxuICBzZXRGb2N1c0NsYXNzLFxuICBjc3NDbGFzcyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGZvcm1JZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgY2hvaWNlcyxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBjdXN0b21OYW1lLFxuICB9ID0gZmllbGQ7XG4gIC8vIE1hcCBvcHRpb25zXG4gIGNvbnN0IG9wdGlvbnMgPSBjaG9pY2VzLm1hcChjaG9pY2UgPT4gKHtcbiAgICB2YWx1ZTogY2hvaWNlLnZhbHVlLFxuICAgIGxhYmVsOiBjaG9pY2UudGV4dCxcbiAgfSkpO1xuICBsZXQgcHJlc2VsZWN0ZWQgPSBjaG9pY2VzLmZpbHRlcihjaG9pY2UgPT4gY2hvaWNlLmlzU2VsZWN0ZWQpO1xuICBpZiAocHJlc2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgcHJlc2VsZWN0ZWQgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBwcmVzZWxlY3RlZFswXS50ZXh0LFxuICAgICAgICB2YWx1ZTogcHJlc2VsZWN0ZWRbMF0udmFsdWUsXG4gICAgICB9LFxuICAgIF07XG4gIH0gZWxzZSB7XG4gICAgcHJlc2VsZWN0ZWQgPSAnJztcbiAgfVxuICAvLyBIYW5kbGUgU3RhdGVcbiAgY29uc3QgW3NlbGVjdGVkT3B0aW9uLCBzZWxlY3RPcHRpb25dID0gdXNlU3RhdGUodmFsdWUgfHwgcHJlc2VsZWN0ZWQpO1xuICAvLyBIYW5kbGUgY2hhbmdlXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChvcHRpb24pID0+IHtcbiAgICBzZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICBjb25zdCBldmVudCA9IHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB2YWx1ZTogb3B0aW9uLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICB1bnNldEVycm9yKGlkKTtcbiAgfTtcbiAgLy8gSGFuZGxlIEJsdXJcbiAgY29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICBjb25zdCBldmVudCA9IHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB2YWx1ZTogc2VsZWN0ZWRPcHRpb24sXG4gICAgICB9LFxuICAgIH07XG4gICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgIHNldFRvdWNoZWQoaWQpO1xuICAgIHNldEZvY3VzQ2xhc3ModmFsdWUgIT09ICcnKTtcbiAgfTtcbiAgY29uc3QgeyBTZWxlY3RTdHlsZXMsIExhYmVsID0gJ2xhYmVsJywgQm94ID0gJ2RpdicgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yXG4gICAgICAgICAgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWBcbiAgICAgICAgICA6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuICAgICAgfVxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gJ25vbmUnIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9PlxuICAgICAgICA8TGFiZWwgaHRtbEZvcj17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfWB9IGNsYXNzTmFtZT17YGdyb3VwLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICA8L0xhYmVsPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09ICdhYm92ZScgJiYgZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9W11gfVxuICAgICAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9ufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShvcHRpb24sIGZpZWxkKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiBoYW5kbGVCbHVyKCl9XG4gICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldEZvY3VzQ2xhc3ModHJ1ZSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgICAgaXNNdWx0aVxuICAgICAgICAgICAgICBpbnB1dElkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH1cbiAgICAgICAgICAgICAgc3R5bGVzPXtTZWxlY3RTdHlsZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH0+XG4gICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgfHwgZXJyb3J9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl19