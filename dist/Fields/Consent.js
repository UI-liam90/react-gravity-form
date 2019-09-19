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
    return _react["default"].createElement(_react["default"].Fragment, {
      key: "input_".concat(formId, "_").concat(id, "_").concat(i)
    }, i === 0 && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("input", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvQ29uc2VudC5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsInByb3BzIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJpbnB1dHMiLCJjc3NDbGFzcyIsImlzUmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJjaGVja2JveExhYmVsIiwiQ29uc2VudCIsIkxhYmVsIiwiZGlzcGxheSIsInVuZGVmaW5lZCIsIm1hcCIsImlucHV0IiwiaSIsImV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O2VBRWUsd0JBVVQ7QUFBQSxNQVRKQSxLQVNJLFFBVEpBLEtBU0k7QUFBQSxNQVJKQyxLQVFJLFFBUkpBLEtBUUk7QUFBQSxNQVBKQyxpQkFPSSxRQVBKQSxpQkFPSTtBQUFBLE1BTkpDLE9BTUksUUFOSkEsT0FNSTtBQUFBLE1BTEpDLFVBS0ksUUFMSkEsVUFLSTtBQUFBLE1BSkpDLFNBSUksUUFKSkEsU0FJSTtBQUFBLE1BSEpDLFVBR0ksUUFISkEsVUFHSTtBQUFBLE1BRkpDLGdCQUVJLFFBRkpBLGdCQUVJO0FBQUEsTUFEREMsS0FDQzs7QUFBQSxNQUVGQyxFQUZFLEdBZUFULEtBZkEsQ0FFRlMsRUFGRTtBQUFBLE1BR0ZDLE1BSEUsR0FlQVYsS0FmQSxDQUdGVSxNQUhFO0FBQUEsTUFJRkMsSUFKRSxHQWVBWCxLQWZBLENBSUZXLElBSkU7QUFBQSxNQUtGQyxLQUxFLEdBZUFaLEtBZkEsQ0FLRlksS0FMRTtBQUFBLE1BTUZDLE1BTkUsR0FlQWIsS0FmQSxDQU1GYSxNQU5FO0FBQUEsTUFPRkMsUUFQRSxHQWVBZCxLQWZBLENB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UjtBQUlFLE1BQUEsU0FBUyxFQUFDO0FBSlosTUE5QkosQ0FEVTtBQUFBLEdBQVgsQ0FESCxFQXlDR08sV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0F6Q2xCLENBUkosRUFxREdkLGlCQUFpQixJQUFJQyxPQUFyQixJQUNDO0FBQU0sSUFBQSxTQUFTLEVBQUMsZUFBaEI7QUFBZ0MsSUFBQSxFQUFFLGtCQUFXTSxFQUFYO0FBQWxDLEtBQ0dQLGlCQURILENBdERKLENBUEYsQ0FERjtBQXFFRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCB9IGZyb20gJ3JlYmFzcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIGhpZGVGaWVsZCxcbiAgdXBkYXRlRm9ybSxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGZvcm1JZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIGlucHV0cyxcbiAgICBjc3NDbGFzcyxcbiAgICBpc1JlcXVpcmVkLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgIGxhYmVsUGxhY2VtZW50LFxuICAgIHdpZHRoLFxuICAgIGN1c3RvbU5hbWUsXG4gICAgY2hlY2tib3hMYWJlbCxcbiAgfSA9IGZpZWxkO1xuXG4gIGNvbnN0IHsgQ29uc2VudCA9ICdkaXYnLCBMYWJlbCA9ICdsZWdlbmQnIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YCA6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuICAgICAgfVxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gJ25vbmUnIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPENvbnNlbnQgY2xhc3NOYW1lPVwiY2hlY2tib3hlc1wiPlxuICAgICAgICA8TGFiZWwgYXM9XCJsZWdlbmRcIiBjbGFzc05hbWU9e2Bncm91cC1sYWJlbCAke2xhYmVsUGxhY2VtZW50fWB9PlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICB7bGFiZWwgJiYgaXNSZXF1aXJlZCA/IDxhYmJyPio8L2FiYnI+IDogbnVsbH1cbiAgICAgICAgPC9MYWJlbD5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgIGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge2lucHV0cy5tYXAoKGlucHV0LCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fJHtpfWB9PlxuICAgICAgICAgICAgICAgIHtpID09PSAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fMWB9XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lucHV0LmlkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2ZpZWxkX2NvbnNlbnRfbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8xYH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtjaGVja2JveExhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtpID09PSAxICYmIChcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17YGlucHV0XyR7aW5wdXQuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NoZWNrYm94TGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdmb3JtX2hpZGRlblwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2kgPT09IDIgJiYgKFxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpbnB1dC5pZH1gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnZm9ybV9oaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cblxuICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtpZH1gfT5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L0NvbnNlbnQ+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl19