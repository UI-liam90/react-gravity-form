"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _rebass = require("rebass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      placeholder = field.placeholder,
      isRequired = field.isRequired,
      maxLength = field.maxLength,
      description = field.description,
      descriptionPlacement = field.descriptionPlacement,
      labelPlacement = field.labelPlacement,
      width = field.width,
      inputs = field.inputs,
      customName = field.customName;

  var _ref2 = styledComponents || false,
      _ref2$Input = _ref2.Input,
      Input = _ref2$Input === void 0 ? 'input' : _ref2$Input,
      _ref2$Label = _ref2.Label,
      Label = _ref2$Label === void 0 ? 'label' : _ref2$Label;

  return _react["default"].createElement(_rebass.Box, {
    width: width,
    className: validationMessage && touched ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
    style: {
      display: hideField ? 'none' : undefined
    }
  }, _react["default"].createElement(Label, {
    htmlFor: "input_".concat(formId, "_").concat(id),
    className: "gf-label ".concat(labelPlacement)
  }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), _react["default"].createElement("div", {
    className: type
  }, descriptionPlacement === 'above' && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, inputs && inputs.map(function (item, index) {
    return _react["default"].createElement("div", {
      className: type,
      key: item.id
    }, _react["default"].createElement(Input, {
      id: "input_".concat(formId, "_").concat(id, "_").concat(index),
      type: "number",
      name: customName || "input_".concat(id, "[]"),
      placeholder: item.placeholder,
      step: "1",
      min: "1",
      max: item.label === 'MM' ? 12 : item.label === 'DD' ? 31 : new Date().getFullYear() + 1,
      maxLength: item.label === 'YYYY' ? 4 : 2,
      value: item.value,
      onBlur: function onBlur(event) {
        field.subId = index;
        field.dateLabel = item.label;
        updateForm(event, field);
        setTouched(id);
      }
    }), _react["default"].createElement("label", {
      htmlFor: "input_".concat(formId, "_").concat(id, "_").concat(index),
      className: "hide-label"
    }, item.label), validationMessage && touched && validationMessage[index] && index === validationMessage[index].index && validationMessage[index].message && _react["default"].createElement("span", {
      className: "error-message",
      id: "error_".concat(formId, "_").concat(item.id)
    }, validationMessage[index].message));
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description))));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvRGF0ZS5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsInByb3BzIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJjc3NDbGFzcyIsInBsYWNlaG9sZGVyIiwiaXNSZXF1aXJlZCIsIm1heExlbmd0aCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiaW5wdXRzIiwiY3VzdG9tTmFtZSIsIklucHV0IiwiTGFiZWwiLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwibWFwIiwiaXRlbSIsImluZGV4IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZXZlbnQiLCJzdWJJZCIsImRhdGVMYWJlbCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7ZUFFZSx3QkFVVDtBQUFBLE1BVEpBLEtBU0ksUUFUSkEsS0FTSTtBQUFBLE1BUkpDLEtBUUksUUFSSkEsS0FRSTtBQUFBLE1BUEpDLGlCQU9JLFFBUEpBLGlCQU9JO0FBQUEsTUFOSkMsT0FNSSxRQU5KQSxPQU1JO0FBQUEsTUFMSkMsVUFLSSxRQUxKQSxVQUtJO0FBQUEsTUFKSkMsU0FJSSxRQUpKQSxTQUlJO0FBQUEsTUFISkMsVUFHSSxRQUhKQSxVQUdJO0FBQUEsTUFGSkMsZ0JBRUksUUFGSkEsZ0JBRUk7QUFBQSxNQUREQyxLQUNDOztBQUFBLE1BRUZDLEVBRkUsR0FnQkFULEtBaEJBLENBRUZTLEVBRkU7QUFBQSxNQUdGQyxNQUhFLEdBZ0JBVixLQWhCQSxDQUdGVSxNQUhFO0FBQUEsTUFJRkMsSUFKRSxHQWdCQVgsS0FoQkEsQ0FJRlcsSUFKRTtBQUFBLE1BS0ZDLEtBTEUsR0FnQkFaLEtBaEJBLENBS0ZZLEtBTEU7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LElBQUksQ0FBQ2hCLEtBQXZCO0FBQ0FOLFFBQUFBLFVBQVUsQ0FBQzBCLEtBQUQsRUFBUWhDLEtBQVIsQ0FBVjtBQUNBSSxRQUFBQSxVQUFVLENBQUNLLEVBQUQsQ0FBVjtBQUNEO0FBckJILE1BREYsRUF3QkU7QUFBTyxNQUFBLE9BQU8sa0JBQVdDLE1BQVgsY0FBcUJELEVBQXJCLGNBQTJCb0IsS0FBM0IsQ0FBZDtBQUFrRCxNQUFBLFNBQVMsRUFBQztBQUE1RCxPQUNHRCxJQUFJLENBQUNoQixLQURSLENBeEJGLEVBMkJHVixpQkFBaUIsSUFDYkMsT0FESixJQUVJRCxpQkFBaUIsQ0FBQzJCLEtBQUQsQ0FGckIsSUFHSUEsS0FBSyxLQUFLM0IsaUJBQWlCLENBQUMyQixLQUFELENBQWpCLENBQXlCQSxLQUh2QyxJQUlJM0IsaUJBQWlCLENBQUMyQixLQUFELENBQWpCLENBQXlCTSxPQUo3QixJQUtDO0FBQU0sTUFBQSxTQUFTLEVBQUMsZUFBaEI7QUFBZ0MsTUFBQSxFQUFFLGtCQUFXekIsTUFBWCxjQUFxQmtCLElBQUksQ0FBQ25CLEVBQTFCO0FBQWxDLE9BQ0dQLGlCQUFpQixDQUFDMkIsS0FBRCxDQUFqQixDQUF5Qk0sT0FENUIsQ0FoQ0osQ0FEWTtBQUFBLEdBQVgsQ0FGUCxFQTBDR2xCLFdBQVcsSUFBSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBOEJBLFdBQTlCLENBMUNsQixDQUpKLENBWEYsQ0FERjtBQWdFRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCB9IGZyb20gJ3JlYmFzcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIGhpZGVGaWVsZCxcbiAgdXBkYXRlRm9ybSxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGZvcm1JZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIGNzc0NsYXNzLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgbWF4TGVuZ3RoLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgIGxhYmVsUGxhY2VtZW50LFxuICAgIHdpZHRoLFxuICAgIGlucHV0cyxcbiAgICBjdXN0b21OYW1lLFxuICB9ID0gZmllbGQ7XG5cbiAgY29uc3QgeyBJbnB1dCA9ICdpbnB1dCcsIExhYmVsID0gJ2xhYmVsJyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/ICdub25lJyA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxMYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH0gY2xhc3NOYW1lPXtgZ2YtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAge2xhYmVsfVxuICAgICAgICB7aXNSZXF1aXJlZCA/IDxhYmJyPio8L2FiYnI+IDogbnVsbH1cbiAgICAgIDwvTGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtpbnB1dHNcbiAgICAgICAgICAgICAgJiYgaW5wdXRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfVtdYH1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2l0ZW0ucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIG1heD17XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYWJlbCA9PT0gJ01NJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAxMlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLmxhYmVsID09PSAnREQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gMzFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgKyAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXtpdGVtLmxhYmVsID09PSAnWVlZWScgPyA0IDogMn1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQuc3ViSWQgPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRlTGFiZWwgPSBpdGVtLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8ke2luZGV4fWB9IGNsYXNzTmFtZT1cImhpZGUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICYmIHRvdWNoZWRcbiAgICAgICAgICAgICAgICAgICAgJiYgdmFsaWRhdGlvbk1lc3NhZ2VbaW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICYmIGluZGV4ID09PSB2YWxpZGF0aW9uTWVzc2FnZVtpbmRleF0uaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgJiYgdmFsaWRhdGlvbk1lc3NhZ2VbaW5kZXhdLm1lc3NhZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpdGVtLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZVtpbmRleF0ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2Pn1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl19