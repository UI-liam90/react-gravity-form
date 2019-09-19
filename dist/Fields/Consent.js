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
      inputs = field.inputs,
      cssClass = field.cssClass,
      isRequired = field.isRequired,
      description = field.description,
      descriptionPlacement = field.descriptionPlacement,
      labelPlacement = field.labelPlacement,
      width = field.width,
      customName = field.customName,
      checkboxLabel = field.checkboxLabel;

  var _ref2 = styledComponents || false,
      _ref2$Consent = _ref2.Consent,
      Consent = _ref2$Consent === void 0 ? 'div' : _ref2$Consent,
      _ref2$Label = _ref2.Label,
      Label = _ref2$Label === void 0 ? 'legend' : _ref2$Label;

  return _react["default"].createElement(_rebass.Box, {
    width: width,
    className: validationMessage && touched ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
    style: {
      display: hideField ? 'none' : undefined
    }
  }, _react["default"].createElement(Consent, {
    className: "checkboxes"
  }, _react["default"].createElement(Label, {
    as: "legend",
    className: "group-label ".concat(labelPlacement)
  }, label, label && isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === 'above' && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, inputs.map(function (input, i) {
    return _react["default"].createElement(_react["default"].Fragment, null, i === 0 && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("input", {
      id: "input_".concat(formId, "_").concat(id, "_1"),
      type: "checkbox",
      name: customName || "input_".concat(input.id),
      value: 1,
      onChange: function onChange(event) {
        updateForm(event, field);
        setTouched(id);
      }
    }), _react["default"].createElement("label", {
      className: "gfield_consent_label",
      htmlFor: customName || "input_".concat(formId, "_").concat(id, "_1")
    }, checkboxLabel)), i === 1 && _react["default"].createElement("input", {
      type: "hidden",
      name: "input_".concat(input.id),
      value: checkboxLabel,
      className: "gform_hidden"
    }), i === 2 && _react["default"].createElement("input", {
      type: "hidden",
      name: "input_".concat(input.id),
      value: "1",
      className: "gform_hidden"
    }));
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description)), validationMessage && touched && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(id)
  }, validationMessage)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvQ29uc2VudC5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsInByb3BzIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJpbnB1dHMiLCJjc3NDbGFzcyIsImlzUmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJjaGVja2JveExhYmVsIiwiQ29uc2VudCIsIkxhYmVsIiwiZGlzcGxheSIsInVuZGVmaW5lZCIsIm1hcCIsImlucHV0IiwiaSIsImV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O2VBRWUsd0JBVVQ7QUFBQSxNQVRKQSxLQVNJLFFBVEpBLEtBU0k7QUFBQSxNQVJKQyxLQVFJLFFBUkpBLEtBUUk7QUFBQSxNQVBKQyxpQkFPSSxRQVBKQSxpQkFPSTtBQUFBLE1BTkpDLE9BTUksUUFOSkEsT0FNSTtBQUFBLE1BTEpDLFVBS0ksUUFMSkEsVUFLSTtBQUFBLE1BSkpDLFNBSUksUUFKSkEsU0FJSTtBQUFBLE1BSEpDLFVBR0ksUUFISkEsVUFHSTtBQUFBLE1BRkpDLGdCQUVJLFFBRkpBLGdCQUVJO0FBQUEsTUFEREMsS0FDQzs7QUFBQSxNQUVGQyxFQUZFLEdBZUFULEtBZkEsQ0FFRlMsRUFGRTtBQUFBLE1BR0ZDLE1BSEUsR0FlQVYsS0FmQSxDQUdGVSxNQUhFO0FBQUEsTUFJRkMsSUFKRSxHQWVBWCxLQWZBLENBSUZXLElBSkU7QUFBQSxNQUtGQyxLQUxFLEdBZUFaLEtBZkEsQ0FLRlksS0FMRTtBQUFBLE1BTUZDLE1BTkUsR0FlQWIsS0FmQSxDQU1GYSxNQU5FO0FBQUEsTUFPRkMsUUFQRSxHQWVBZCxLQWZBLENB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QVcsSUFBSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBOEJBLFdBQTlCLENBekNsQixDQVJKLEVBcURHZCxpQkFBaUIsSUFBSUMsT0FBckIsSUFDQztBQUFNLElBQUEsU0FBUyxFQUFDLGVBQWhCO0FBQWdDLElBQUEsRUFBRSxrQkFBV00sRUFBWDtBQUFsQyxLQUNHUCxpQkFESCxDQXRESixDQVBGLENBREY7QUFxRUQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICdyZWJhc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICB0b3VjaGVkLFxuICBzZXRUb3VjaGVkLFxuICBoaWRlRmllbGQsXG4gIHVwZGF0ZUZvcm0sXG4gIHN0eWxlZENvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBmb3JtSWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBpbnB1dHMsXG4gICAgY3NzQ2xhc3MsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBjdXN0b21OYW1lLFxuICAgIGNoZWNrYm94TGFiZWwsXG4gIH0gPSBmaWVsZDtcblxuICBjb25zdCB7IENvbnNlbnQgPSAnZGl2JywgTGFiZWwgPSAnbGVnZW5kJyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/ICdub25lJyA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxDb25zZW50IGNsYXNzTmFtZT1cImNoZWNrYm94ZXNcIj5cbiAgICAgICAgPExhYmVsIGFzPVwibGVnZW5kXCIgY2xhc3NOYW1lPXtgZ3JvdXAtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAge2xhYmVsICYmIGlzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtpbnB1dHMubWFwKChpbnB1dCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAge2kgPT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8xYH1cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aW5wdXQuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17MX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnZmllbGRfY29uc2VudF9sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XzFgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2NoZWNrYm94TGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2kgPT09IDEgJiYgKFxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpbnB1dC5pZH1gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2hlY2tib3hMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2Zvcm1faGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7aSA9PT0gMiAmJiAoXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2BpbnB1dF8ke2lucHV0LmlkfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdmb3JtX2hpZGRlblwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2Pn1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuXG4gICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2lkfWB9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvQ29uc2VudD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXX0=