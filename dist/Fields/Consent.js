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
      Consent = _ref2$Consent === void 0 ? "div" : _ref2$Consent,
      _ref2$Label = _ref2.Label,
      Label = _ref2$Label === void 0 ? "label" : _ref2$Label,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? "div" : _ref2$Box;

  return _react["default"].createElement(Box, {
    width: width,
    className: validationMessage && touched ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
    style: {
      display: hideField ? "none" : undefined
    }
  }, _react["default"].createElement(Consent, {
    className: "checkboxes"
  }, _react["default"].createElement(Label, {
    as: "label",
    className: "group-label ".concat(labelPlacement)
  }, label, label && isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === "above" && description ? description && _react["default"].createElement("div", {
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
      },
      "aria-invalid": !!validationMessage && touched
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
  }, description)), validationMessage && touched && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(formId, "_").concat(id)
  }, validationMessage)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvQ29uc2VudC5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsInByb3BzIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJpbnB1dHMiLCJjc3NDbGFzcyIsImlzUmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJjaGVja2JveExhYmVsIiwiQ29uc2VudCIsIkxhYmVsIiwiQm94IiwiZGlzcGxheSIsInVuZGVmaW5lZCIsIm1hcCIsImlucHV0IiwiaSIsImV2ZW50IiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O2VBRWUsd0JBVVQ7QUFBQSxNQVRMQSxLQVNLLFFBVExBLEtBU0s7QUFBQSxNQVJMQyxLQVFLLFFBUkxBLEtBUUs7QUFBQSxNQVBMQyxpQkFPSyxRQVBMQSxpQkFPSztBQUFBLE1BTkxDLE9BTUssUUFOTEEsT0FNSztBQUFBLE1BTExDLFVBS0ssUUFMTEEsVUFLSztBQUFBLE1BSkxDLFNBSUssUUFKTEEsU0FJSztBQUFBLE1BSExDLFVBR0ssUUFITEEsVUFHSztBQUFBLE1BRkxDLGdCQUVLLFFBRkxBLGdCQUVLO0FBQUEsTUFERkMsS0FDRTs7QUFBQSxNQUVKQyxFQUZJLEdBZURULEtBZkMsQ0FFSlMsRUFGSTtBQUFBLE1BR0pDLE1BSEksR0FlRFYsS0FmQyxDQUdKVSxNQUhJO0FBQUEsTUFJSkMsSUFKSSxHQWVEWCxLQWZDLENBSUpXLElBSkk7QUFBQSxNQUtKQyxLQUxJLEdBZURaLEtBZkMsQ0FLSlksS0FMSTtBQUFBLE1BTUpDLE1BTkksR0FlRGIsS0FmQyxDQU1KYSxNQU5JO0FBQUEsTUFPSkMsUUFQSSxHQWVE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QWpCLENBRkw7QUFHQyxNQUFBLEtBQUssRUFBRVksYUFIUjtBQUlDLE1BQUEsU0FBUyxFQUFDO0FBSlgsTUF4QkYsRUErQkVRLENBQUMsS0FBSyxDQUFOLElBQ0E7QUFDQyxNQUFBLElBQUksRUFBQyxRQUROO0FBRUMsTUFBQSxJQUFJLGtCQUFXRCxLQUFLLENBQUNuQixFQUFqQixDQUZMO0FBR0MsTUFBQSxLQUFLLEVBQUMsR0FIUDtBQUlDLE1BQUEsU0FBUyxFQUFDO0FBSlgsTUFoQ0YsQ0FEVztBQUFBLEdBQVgsQ0FERixFQTJDRU8sV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0EzQ2pCLENBUkYsRUF1REVkLGlCQUFpQixJQUFJQyxPQUFyQixJQUNBO0FBQU0sSUFBQSxTQUFTLEVBQUMsZUFBaEI7QUFBZ0MsSUFBQSxFQUFFLGtCQUFXTyxNQUFYLGNBQXFCRCxFQUFyQjtBQUFsQyxLQUNFUCxpQkFERixDQXhERixDQVRELENBREQ7QUF5RUEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHtcblx0ZmllbGQsXG5cdHZhbHVlLFxuXHR2YWxpZGF0aW9uTWVzc2FnZSxcblx0dG91Y2hlZCxcblx0c2V0VG91Y2hlZCxcblx0aGlkZUZpZWxkLFxuXHR1cGRhdGVGb3JtLFxuXHRzdHlsZWRDb21wb25lbnRzLFxuXHQuLi5wcm9wc1xufSkgPT4ge1xuXHRjb25zdCB7XG5cdFx0aWQsXG5cdFx0Zm9ybUlkLFxuXHRcdHR5cGUsXG5cdFx0bGFiZWwsXG5cdFx0aW5wdXRzLFxuXHRcdGNzc0NsYXNzLFxuXHRcdGlzUmVxdWlyZWQsXG5cdFx0ZGVzY3JpcHRpb24sXG5cdFx0ZGVzY3JpcHRpb25QbGFjZW1lbnQsXG5cdFx0bGFiZWxQbGFjZW1lbnQsXG5cdFx0d2lkdGgsXG5cdFx0Y3VzdG9tTmFtZSxcblx0XHRjaGVja2JveExhYmVsXG5cdH0gPSBmaWVsZDtcblxuXHRjb25zdCB7IENvbnNlbnQgPSBcImRpdlwiLCBMYWJlbCA9IFwibGFiZWxcIiwgQm94ID0gXCJkaXZcIiB9ID1cblx0XHRzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuXG5cdHJldHVybiAoXG5cdFx0PEJveFxuXHRcdFx0d2lkdGg9e3dpZHRofVxuXHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0dmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZFxuXHRcdFx0XHRcdD8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gXG5cdFx0XHRcdFx0OiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcblx0XHRcdH1cblx0XHRcdHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/IFwibm9uZVwiIDogdW5kZWZpbmVkIH19XG5cdFx0PlxuXHRcdFx0PENvbnNlbnQgY2xhc3NOYW1lPVwiY2hlY2tib3hlc1wiPlxuXHRcdFx0XHQ8TGFiZWwgYXM9XCJsYWJlbFwiIGNsYXNzTmFtZT17YGdyb3VwLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG5cdFx0XHRcdFx0e2xhYmVsfVxuXHRcdFx0XHRcdHtsYWJlbCAmJiBpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuXHRcdFx0XHQ8L0xhYmVsPlxuXHRcdFx0XHR7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09IFwiYWJvdmVcIiAmJiBkZXNjcmlwdGlvbiA/IChcblx0XHRcdFx0XHRkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdHtpbnB1dHMubWFwKChpbnB1dCwgaSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQga2V5PXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XyR7aX1gfT5cblx0XHRcdFx0XHRcdFx0XHR7aSA9PT0gMCAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XzFgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJjaGVja2JveFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpbnB1dC5pZH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsxfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGNoZWNrZWQ9eyF2YWx1ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VG91Y2hlZChpZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWludmFsaWQ9eyEhdmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZ2ZpZWxkX2NvbnNlbnRfbGFiZWxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGh0bWxGb3I9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8xYH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNoZWNrYm94TGFiZWwgfX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHR7aSA9PT0gMSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImhpZGRlblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9e2BpbnB1dF8ke2lucHV0LmlkfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjaGVja2JveExhYmVsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJnZm9ybV9oaWRkZW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdHtpID09PSAyICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT17YGlucHV0XyR7aW5wdXQuaWR9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9XCIxXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZ2Zvcm1faGlkZGVuXCJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0e2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuXHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdCl9XG5cblx0XHRcdFx0e3ZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgJiYgKFxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9PlxuXHRcdFx0XHRcdFx0e3ZhbGlkYXRpb25NZXNzYWdlfVxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0KX1cblx0XHRcdDwvQ29uc2VudD5cblx0XHQ8L0JveD5cblx0KTtcbn07XG4iXX0=