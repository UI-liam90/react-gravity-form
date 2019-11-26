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
    className: validationMessage && touched || error ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvQ29uc2VudC5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsImVycm9yIiwidW5zZXRFcnJvciIsInByb3BzIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJpbnB1dHMiLCJjc3NDbGFzcyIsImlzUmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJjaGVja2JveExhYmVsIiwiQ29uc2VudCIsIkxhYmVsIiwiQm94IiwiZGlzcGxheSIsInVuZGVmaW5lZCIsIm1hcCIsImlucHV0IiwiaSIsImV2ZW50IiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O2VBRWUsd0JBWVQ7QUFBQSxNQVhKQSxLQVdJLFFBWEpBLEtBV0k7QUFBQSxNQVZKQyxLQVVJLFFBVkpBLEtBVUk7QUFBQSxNQVRKQyxpQkFTSSxRQVRKQSxpQkFTSTtBQUFBLE1BUkpDLE9BUUksUUFSSkEsT0FRSTtBQUFBLE1BUEpDLFVBT0ksUUFQSkEsVUFPSTtBQUFBLE1BTkpDLFNBTUksUUFOSkEsU0FNSTtBQUFBLE1BTEpDLFVBS0ksUUFMSkEsVUFLSTtBQUFBLE1BSkpDLGdCQUlJLFFBSkpBLGdCQUlJO0FBQUEsTUFISkMsS0FHSSxRQUhKQSxLQUdJO0FBQUEsTUFGSkMsVUFFSSxRQUZKQSxVQUVJO0FBQUEsTUFEREMsS0FDQzs7QUFBQSxNQUVGQyxFQUZFLEdBZUFYLEtBZkEsQ0FFRlcsRUFGRTtBQUFBLE1BR0ZDLE1BSEUsR0FlQVosS0FmQSxDQUdGWSxNQUhFO0FBQUEsTUFJRkMsSUFKRSxHQWVBYixLQWZBLENBSUZhLElBSkU7QUFBQSxNQUtGQyxLQUxFLEdBZUFk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LE1BQUEsdUJBQXVCLEVBQUU7QUFBRXNCLFFBQUFBLE1BQU0sRUFBRVY7QUFBVjtBQUgzQixNQWZGLENBRkosRUF3QkdRLENBQUMsS0FBSyxDQUFOLElBQ0M7QUFDRSxNQUFBLElBQUksRUFBQyxRQURQO0FBRUUsTUFBQSxJQUFJLGtCQUFXRCxLQUFLLENBQUNuQixFQUFqQixDQUZOO0FBR0UsTUFBQSxLQUFLLEVBQUVZLGFBSFQ7QUFJRSxNQUFBLFNBQVMsRUFBQztBQUpaLE1BekJKLEVBZ0NHUSxDQUFDLEtBQUssQ0FBTixJQUNDO0FBQ0UsTUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLE1BQUEsSUFBSSxrQkFBV0QsS0FBSyxDQUFDbkIsRUFBakIsQ0FGTjtBQUdFLE1BQUEsS0FBSyxFQUFDLEdBSFI7QUFJRSxNQUFBLFNBQVMsRUFBQztBQUpaLE1BakNKLENBRFU7QUFBQSxHQUFYLENBREgsRUE0Q0dPLFdBQVcsSUFBSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBOEJBLFdBQTlCLENBNUNsQixDQVJKLEVBd0RHLENBQUVoQixpQkFBaUIsSUFBSUMsT0FBdEIsSUFBa0NLLEtBQW5DLEtBQ0M7QUFBTSxJQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFnQyxJQUFBLEVBQUUsa0JBQVdJLE1BQVgsY0FBcUJELEVBQXJCO0FBQWxDLEtBQ0dULGlCQUFpQixJQUFJTSxLQUR4QixDQXpESixDQVRGLENBREY7QUEwRUQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIGhpZGVGaWVsZCxcbiAgdXBkYXRlRm9ybSxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgZXJyb3IsXG4gIHVuc2V0RXJyb3IsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBmb3JtSWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBpbnB1dHMsXG4gICAgY3NzQ2xhc3MsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBjdXN0b21OYW1lLFxuICAgIGNoZWNrYm94TGFiZWwsXG4gIH0gPSBmaWVsZDtcblxuICBjb25zdCB7IENvbnNlbnQgPSAnZGl2JywgTGFiZWwgPSAnbGFiZWwnLCBCb3ggPSAnZGl2JyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvclxuICAgICAgICAgID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gXG4gICAgICAgICAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/ICdub25lJyA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxDb25zZW50IGNsYXNzTmFtZT1cImNoZWNrYm94ZXNcIj5cbiAgICAgICAgPExhYmVsIGFzPVwibGFiZWxcIiBjbGFzc05hbWU9e2Bncm91cC1sYWJlbCAke2xhYmVsUGxhY2VtZW50fWB9PlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICB7bGFiZWwgJiYgaXNSZXF1aXJlZCA/IDxhYmJyPio8L2FiYnI+IDogbnVsbH1cbiAgICAgICAgPC9MYWJlbD5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgIGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge2lucHV0cy5tYXAoKGlucHV0LCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fJHtpfWB9PlxuICAgICAgICAgICAgICAgIHtpID09PSAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fMWB9XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lucHV0LmlkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2tlZD17IXZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9eyghIXZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8ICEhZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdmaWVsZF9jb25zZW50X2xhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fMWB9XG4gICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjaGVja2JveExhYmVsIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2kgPT09IDEgJiYgKFxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpbnB1dC5pZH1gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2hlY2tib3hMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2Zvcm1faGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7aSA9PT0gMiAmJiAoXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2BpbnB1dF8ke2lucHV0LmlkfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdmb3JtX2hpZGRlblwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2Pn1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuXG4gICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH0+XG4gICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgfHwgZXJyb3J9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgPC9Db25zZW50PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==