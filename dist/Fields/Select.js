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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  };

  var _ref2 = styledComponents || false,
      SelectStyles = _ref2.SelectStyles,
      _ref2$Label = _ref2.Label,
      Label = _ref2$Label === void 0 ? 'label' : _ref2$Label;

  var customStyles = SelectStyles || {
    control: function control(provided, state) {
      return _objectSpread({}, provided, {
        height: 50,
        borderWidth: '2px',
        borderColor: '#DBDBDB'
      });
    }
  };
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
    className: "gf-label ".concat(labelPlacement)
  }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === 'above' && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactSelect["default"], {
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
    className: "form-select",
    styles: customStyles,
    inputId: "input_".concat(id)
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description)), validationMessage && touched && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(id)
  }, validationMessage)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvU2VsZWN0LmpzeCJdLCJuYW1lcyI6WyJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsImhpZGVGaWVsZCIsInVwZGF0ZUZvcm0iLCJzdHlsZWRDb21wb25lbnRzIiwicHJvcHMiLCJpZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwiaXNSZXF1aXJlZCIsImNob2ljZXMiLCJwbGFjZWhvbGRlciIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiY3VzdG9tTmFtZSIsIm9wdGlvbnMiLCJtYXAiLCJjaG9pY2UiLCJ0ZXh0Iiwic2VsZWN0ZWRPcHRpb24iLCJzZWxlY3RPcHRpb24iLCJoYW5kbGVDaGFuZ2UiLCJvcHRpb24iLCJldmVudCIsInRhcmdldCIsImhhbmRsZUJsdXIiLCJTZWxlY3RTdHlsZXMiLCJMYWJlbCIsImN1c3RvbVN0eWxlcyIsImNvbnRyb2wiLCJwcm92aWRlZCIsInN0YXRlIiwiaGVpZ2h0IiwiYm9yZGVyV2lkdGgiLCJib3JkZXJDb2xvciIsImRpc3BsYXkiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRWUsd0JBVVQ7QUFBQSxNQVRKQSxLQVNJLFFBVEpBLEtBU0k7QUFBQSxNQVJKQyxLQVFJLFFBUkpBLEtBUUk7QUFBQSxNQVBKQyxpQkFPSSxRQVBKQSxpQkFPSTtBQUFBLE1BTkpDLE9BTUksUUFOSkEsT0FNSTtBQUFBLE1BTEpDLFVBS0ksUUFMSkEsVUFLSTtBQUFBLE1BSkpDLFNBSUksUUFKSkEsU0FJSTtBQUFBLE1BSEpDLFVBR0ksUUFISkEsVUFHSTtBQUFBLE1BRkpDLGdCQUVJLFFBRkpBLGdCQUVJO0FBQUEsTUFEREMsS0FDQzs7QUFBQSxNQUVGQyxFQUZFLEdBY0FULEtBZEEsQ0FF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QUF4QyxLQUNHUCxLQURILEVBRUdFLFVBQVUsR0FBRyxrREFBSCxHQUFvQixJQUZqQyxDQURGLEVBS0dJLG9CQUFvQixLQUFLLE9BQXpCLElBQW9DRCxXQUFwQyxHQUNDQSxXQUFXLElBQUk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQThCQSxXQUE5QixDQURoQixHQUdDLGdDQUFDLGlCQUFELENBQU8sUUFBUCxRQUNFLGdDQUFDLHVCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVJLFVBQVUsb0JBQWFYLEVBQWIsQ0FEbEI7QUFFRSxJQUFBLFFBQVEsRUFBRUksVUFGWjtBQUdFLElBQUEsS0FBSyxFQUFFWSxjQUhUO0FBSUUsSUFBQSxRQUFRLEVBQUUsa0JBQUFHLE1BQU07QUFBQSxhQUFJRCxZQUFZLENBQUNDLE1BQUQsRUFBUzVCLEtBQVQsQ0FBaEI7QUFBQSxLQUpsQjtBQUtFLElBQUEsTUFBTSxFQUFFO0FBQUEsYUFBTStCLFVBQVUsRUFBaEI7QUFBQSxLQUxWO0FBTUUsSUFBQSxXQUFXLEVBQUVoQixXQU5mO0FBT0UsSUFBQSxPQUFPLEVBQUVNLE9BUFg7QUFRRSxJQUFBLFNBQVMsRUFBQyxhQVJaO0FBU0UsSUFBQSxNQUFNLEVBQUVhLFlBVFY7QUFVRSxJQUFBLE9BQU8sa0JBQVd6QixFQUFYO0FBVlQsSUFERixFQWFHTyxXQUFXLElBQUk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQThCQSxXQUE5QixDQWJsQixDQVJKLEVBd0JHZCxpQkFBaUIsSUFBSUMsT0FBckIsSUFDQztBQUFNLElBQUEsU0FBUyxFQUFDLGVBQWhCO0FBQWdDLElBQUEsRUFBRSxrQkFBV00sRUFBWDtBQUFsQyxLQUNHUCxpQkFESCxDQXpCSixDQVBGLENBREY7QUF3Q0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcbmltcG9ydCB7IEJveCB9IGZyb20gJ3JlYmFzcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIGhpZGVGaWVsZCxcbiAgdXBkYXRlRm9ybSxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIHR5cGUsXG4gICAgbGFiZWwsXG4gICAgY3NzQ2xhc3MsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBjaG9pY2VzLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgIGxhYmVsUGxhY2VtZW50LFxuICAgIHdpZHRoLFxuICAgIGN1c3RvbU5hbWUsXG4gIH0gPSBmaWVsZDtcbiAgLy8gTWFwIG9wdGlvbnNcbiAgY29uc3Qgb3B0aW9ucyA9IGNob2ljZXMubWFwKGNob2ljZSA9PiAoeyB2YWx1ZTogY2hvaWNlLnZhbHVlLCBsYWJlbDogY2hvaWNlLnRleHQgfSkpO1xuICAvLyBIYW5kbGUgU3RhdGVcbiAgY29uc3QgW3NlbGVjdGVkT3B0aW9uLCBzZWxlY3RPcHRpb25dID0gdXNlU3RhdGUodmFsdWUgfHwgJycpO1xuICAvLyBIYW5kbGUgY2hhbmdlXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChvcHRpb24pID0+IHtcbiAgICBzZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICBjb25zdCBldmVudCA9IHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB2YWx1ZTogb3B0aW9uLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgfTtcbiAgLy8gSGFuZGxlIEJsdXJcbiAgY29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICBjb25zdCBldmVudCA9IHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB2YWx1ZTogc2VsZWN0ZWRPcHRpb24sXG4gICAgICB9LFxuICAgIH07XG4gICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgIHNldFRvdWNoZWQoaWQpO1xuICB9O1xuICBjb25zdCB7IFNlbGVjdFN0eWxlcywgTGFiZWwgPSAnbGFiZWwnIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuICBjb25zdCBjdXN0b21TdHlsZXMgPSBTZWxlY3RTdHlsZXMgfHwge1xuICAgIGNvbnRyb2w6IChwcm92aWRlZCwgc3RhdGUpID0+ICh7XG4gICAgICAuLi5wcm92aWRlZCxcbiAgICAgIGhlaWdodDogNTAsXG4gICAgICBib3JkZXJXaWR0aDogJzJweCcsXG4gICAgICBib3JkZXJDb2xvcjogJyNEQkRCREInLFxuICAgIH0pLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/ICdub25lJyA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAgPExhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2lkfWB9IGNsYXNzTmFtZT17YGdmLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICA8L0xhYmVsPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09ICdhYm92ZScgJiYgZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9YH1cbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29wdGlvbiA9PiBoYW5kbGVDaGFuZ2Uob3B0aW9uLCBmaWVsZCl9XG4gICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gaGFuZGxlQmx1cigpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcbiAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXN9XG4gICAgICAgICAgICAgIGlucHV0SWQ9e2BpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2lkfWB9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==