"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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
      error = _ref.error,
      unsetError = _ref.unsetError,
      props = _objectWithoutProperties(_ref, ["field", "value", "validationMessage", "touched", "setTouched", "hideField", "updateForm", "styledComponents", "error", "unsetError"]);

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
      Label = _ref2$Label === void 0 ? 'label' : _ref2$Label,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? 'div' : _ref2$Box;

  return _react["default"].createElement(Box, {
    width: width,
    className: validationMessage && touched || error ? "form-field consent error ".concat(cssClass) : "form-field consent ".concat(cssClass),
    style: {
      display: hideField ? 'none' : undefined
    }
  }, _react["default"].createElement(Consent, {
    className: "checkboxes"
  }, _react["default"].createElement(Label, {
    as: "label",
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
      required: isRequired // checked={!value}
      ,
      onChange: function onChange(event) {
        updateForm(event, field);
        setTouched(id);
        unsetError(id);
      },
      "aria-invalid": !!validationMessage && touched || !!error
    }), _react["default"].createElement("label", {
      className: "gfield_consent_label",
      htmlFor: customName || "input_".concat(formId, "_").concat(id, "_1"),
      dangerouslySetInnerHTML: {
        __html: checkboxLabel
      }
    })), i === 1 && _react["default"].createElement("input", {
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
  }, description)), (validationMessage && touched || error) && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(formId, "_").concat(id)
  }, validationMessage || error)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvQ29uc2VudC5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsImVycm9yIiwidW5zZXRFcnJvciIsInByb3BzIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJpbnB1dHMiLCJjc3NDbGFzcyIsImlzUmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJjaGVja2JveExhYmVsIiwiQ29uc2VudCIsIkxhYmVsIiwiQm94IiwiZGlzcGxheSIsInVuZGVmaW5lZCIsIm1hcCIsImlucHV0IiwiaSIsImV2ZW50IiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O2VBRWUsd0JBWVQ7QUFBQSxNQVhKQSxLQVdJLFFBWEpBLEtBV0k7QUFBQSxNQVZKQyxLQVVJLFFBVkpBLEtBVUk7QUFBQSxNQVRKQyxpQkFTSSxRQVRKQSxpQkFTSTtBQUFBLE1BUkpDLE9BUUksUUFSSkEsT0FRSTtBQUFBLE1BUEpDLFVBT0ksUUFQSkEsVUFPSTtBQUFBLE1BTkpDLFNBTUksUUFOSkEsU0FNSTtBQUFBLE1BTEpDLFVBS0ksUUFMSkEsVUFLSTtBQUFBLE1BSkpDLGdCQUlJLFFBSkpBLGdCQUlJO0FBQUEsTUFISkMsS0FHSSxRQUhKQSxLQUdJO0FBQUEsTUFGSkMsVUFFSSxRQUZKQSxVQUVJO0FBQUEsTUFEREMsS0FDQzs7QUFBQSxNQUVGQyxFQUZFLEdBZUFYLEtBZkEsQ0FFRlcsRUFGRTtBQUFBLE1BR0ZDLE1BSEUsR0FlQVosS0FmQSxDQUdGWSxNQUhFO0FBQUEsTUFJRkMsSUFKRSxHQWVBYixLQWZBLENBSUZhLElBSkU7QUFBQSxNQUtGQyxLQUxFLEdBZUFk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LE1BQUEsdUJBQXVCLEVBQUU7QUFBRXNCLFFBQUFBLE1BQU0sRUFBRVY7QUFBVjtBQUgzQixNQWZGLENBRkosRUF3QkdRLENBQUMsS0FBSyxDQUFOLElBQ0M7QUFDRSxNQUFBLElBQUksRUFBQyxRQURQO0FBRUUsTUFBQSxJQUFJLGtCQUFXRCxLQUFLLENBQUNuQixFQUFqQixDQUZOO0FBR0UsTUFBQSxLQUFLLEVBQUVZLGFBSFQ7QUFJRSxNQUFBLFNBQVMsRUFBQztBQUpaLE1BekJKLEVBZ0NHUSxDQUFDLEtBQUssQ0FBTixJQUNDO0FBQ0UsTUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLE1BQUEsSUFBSSxrQkFBV0QsS0FBSyxDQUFDbkIsRUFBakIsQ0FGTjtBQUdFLE1BQUEsS0FBSyxFQUFDLEdBSFI7QUFJRSxNQUFBLFNBQVMsRUFBQztBQUpaLE1BakNKLENBRFU7QUFBQSxHQUFYLENBREgsRUE0Q0dPLFdBQVcsSUFBSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBOEJBLFdBQTlCLENBNUNsQixDQVJKLEVBd0RHLENBQUVoQixpQkFBaUIsSUFBSUMsT0FBdEIsSUFBa0NLLEtBQW5DLEtBQ0M7QUFBTSxJQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFnQyxJQUFBLEVBQUUsa0JBQVdJLE1BQVgsY0FBcUJELEVBQXJCO0FBQWxDLEtBQ0dULGlCQUFpQixJQUFJTSxLQUR4QixDQXpESixDQVRGLENBREY7QUEwRUQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIGhpZGVGaWVsZCxcbiAgdXBkYXRlRm9ybSxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgZXJyb3IsXG4gIHVuc2V0RXJyb3IsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBmb3JtSWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBpbnB1dHMsXG4gICAgY3NzQ2xhc3MsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBjdXN0b21OYW1lLFxuICAgIGNoZWNrYm94TGFiZWwsXG4gIH0gPSBmaWVsZDtcblxuICBjb25zdCB7IENvbnNlbnQgPSAnZGl2JywgTGFiZWwgPSAnbGFiZWwnLCBCb3ggPSAnZGl2JyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvclxuICAgICAgICAgID8gYGZvcm0tZmllbGQgY29uc2VudCBlcnJvciAke2Nzc0NsYXNzfWBcbiAgICAgICAgICA6IGBmb3JtLWZpZWxkIGNvbnNlbnQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICA+XG4gICAgICA8Q29uc2VudCBjbGFzc05hbWU9XCJjaGVja2JveGVzXCI+XG4gICAgICAgIDxMYWJlbCBhcz1cImxhYmVsXCIgY2xhc3NOYW1lPXtgZ3JvdXAtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAge2xhYmVsICYmIGlzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtpbnB1dHMubWFwKChpbnB1dCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XyR7aX1gfT5cbiAgICAgICAgICAgICAgICB7aSA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XzFgfVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpbnB1dC5pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsxfVxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrZWQ9eyF2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXsoISF2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCAhIWVycm9yfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnZmllbGRfY29uc2VudF9sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XzFgfVxuICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY2hlY2tib3hMYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtpID09PSAxICYmIChcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17YGlucHV0XyR7aW5wdXQuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NoZWNrYm94TGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdmb3JtX2hpZGRlblwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2kgPT09IDIgJiYgKFxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpbnB1dC5pZH1gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnZm9ybV9oaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cblxuICAgICAgICB7KCh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvcikgJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlIHx8IGVycm9yfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvQ29uc2VudD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXX0=