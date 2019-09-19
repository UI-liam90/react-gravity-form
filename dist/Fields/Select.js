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
    htmlFor: "input_".concat(formId, "_").concat(id),
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
    inputId: "input_".concat(formId, "_").concat(id)
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description)), validationMessage && touched && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(formId, "_").concat(id)
  }, validationMessage)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvU2VsZWN0LmpzeCJdLCJuYW1lcyI6WyJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsImhpZGVGaWVsZCIsInVwZGF0ZUZvcm0iLCJzdHlsZWRDb21wb25lbnRzIiwicHJvcHMiLCJpZCIsImZvcm1JZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwiaXNSZXF1aXJlZCIsImNob2ljZXMiLCJwbGFjZWhvbGRlciIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiY3VzdG9tTmFtZSIsIm9wdGlvbnMiLCJtYXAiLCJjaG9pY2UiLCJ0ZXh0Iiwic2VsZWN0ZWRPcHRpb24iLCJzZWxlY3RPcHRpb24iLCJoYW5kbGVDaGFuZ2UiLCJvcHRpb24iLCJldmVudCIsInRhcmdldCIsImhhbmRsZUJsdXIiLCJTZWxlY3RTdHlsZXMiLCJMYWJlbCIsImN1c3RvbVN0eWxlcyIsImNvbnRyb2wiLCJwcm92aWRlZCIsInN0YXRlIiwiaGVpZ2h0IiwiYm9yZGVyV2lkdGgiLCJib3JkZXJDb2xvciIsImRpc3BsYXkiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRWUsd0JBVVQ7QUFBQSxNQVRKQSxLQVNJLFFBVEpBLEtBU0k7QUFBQSxNQVJKQyxLQVFJLFFBUkpBLEtBUUk7QUFBQSxNQVBKQyxpQkFPSSxRQVBKQSxpQkFPSTtBQUFBLE1BTkpDLE9BTUksUUFOSkEsT0FNSTtBQUFBLE1BTEpDLFVBS0ksUUFMSkEsVUFLSTtBQUFBLE1BSkpDLFNBSUksUUFKSkEsU0FJSTtBQUFBLE1BSEpDLFVBR0ksUUFISkEsVUFHSTtBQUFBLE1BRkpDLGdCQUVJLFFBRkpBLGdCQUVJO0FBQUEsTUFEREMsS0FDQzs7QUFBQSxNQUVGQyxFQUZFLEdBZUFU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IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAncmViYXNzJztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgaGlkZUZpZWxkLFxuICB1cGRhdGVGb3JtLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgZm9ybUlkLFxuICAgIHR5cGUsXG4gICAgbGFiZWwsXG4gICAgY3NzQ2xhc3MsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBjaG9pY2VzLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgIGxhYmVsUGxhY2VtZW50LFxuICAgIHdpZHRoLFxuICAgIGN1c3RvbU5hbWUsXG4gIH0gPSBmaWVsZDtcbiAgLy8gTWFwIG9wdGlvbnNcbiAgY29uc3Qgb3B0aW9ucyA9IGNob2ljZXMubWFwKGNob2ljZSA9PiAoeyB2YWx1ZTogY2hvaWNlLnZhbHVlLCBsYWJlbDogY2hvaWNlLnRleHQgfSkpO1xuICAvLyBIYW5kbGUgU3RhdGVcbiAgY29uc3QgW3NlbGVjdGVkT3B0aW9uLCBzZWxlY3RPcHRpb25dID0gdXNlU3RhdGUodmFsdWUgfHwgJycpO1xuICAvLyBIYW5kbGUgY2hhbmdlXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChvcHRpb24pID0+IHtcbiAgICBzZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICBjb25zdCBldmVudCA9IHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB2YWx1ZTogb3B0aW9uLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgfTtcbiAgLy8gSGFuZGxlIEJsdXJcbiAgY29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICBjb25zdCBldmVudCA9IHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB2YWx1ZTogc2VsZWN0ZWRPcHRpb24sXG4gICAgICB9LFxuICAgIH07XG4gICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgIHNldFRvdWNoZWQoaWQpO1xuICB9O1xuICBjb25zdCB7IFNlbGVjdFN0eWxlcywgTGFiZWwgPSAnbGFiZWwnIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuICBjb25zdCBjdXN0b21TdHlsZXMgPSBTZWxlY3RTdHlsZXMgfHwge1xuICAgIGNvbnRyb2w6IChwcm92aWRlZCwgc3RhdGUpID0+ICh7XG4gICAgICAuLi5wcm92aWRlZCxcbiAgICAgIGhlaWdodDogNTAsXG4gICAgICBib3JkZXJXaWR0aDogJzJweCcsXG4gICAgICBib3JkZXJDb2xvcjogJyNEQkRCREInLFxuICAgIH0pLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/ICdub25lJyA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAgPExhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfSBjbGFzc05hbWU9e2BnZi1sYWJlbCAke2xhYmVsUGxhY2VtZW50fWB9PlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICB7aXNSZXF1aXJlZCA/IDxhYmJyPio8L2FiYnI+IDogbnVsbH1cbiAgICAgICAgPC9MYWJlbD5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgIGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvcHRpb24gPT4gaGFuZGxlQ2hhbmdlKG9wdGlvbiwgZmllbGQpfVxuICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IGhhbmRsZUJsdXIoKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiXG4gICAgICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzfVxuICAgICAgICAgICAgICBpbnB1dElkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==