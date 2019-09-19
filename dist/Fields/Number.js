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
      updateForm = _ref.updateForm,
      hideField = _ref.hideField,
      styledComponents = _ref.styledComponents,
      props = _objectWithoutProperties(_ref, ["field", "value", "validationMessage", "touched", "setTouched", "updateForm", "hideField", "styledComponents"]);

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
  }, _react["default"].createElement("div", {
    className: type
  }, _react["default"].createElement(Label, {
    htmlFor: "input_".concat(formId, "_").concat(id),
    className: "gf-label ".concat(labelPlacement)
  }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === 'above' && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Input, {
    id: "input_".concat(formId, "_").concat(id),
    name: customName || "input_".concat(id),
    type: type,
    value: !value ? '' : value,
    placeholder: placeholder,
    maxLength: maxLength,
    required: isRequired,
    onChange: function onChange(event) {
      return updateForm(event, field);
    },
    onBlur: function onBlur(event) {
      updateForm(event, field);
      setTouched(id);
    },
    "aria-describedby": "error_".concat(formId, "_").concat(id),
    "aria-invalid": !!validationMessage && touched
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description)), validationMessage && touched && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(formId, "_").concat(id)
  }, validationMessage)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvTnVtYmVyLmpzeCJdLCJuYW1lcyI6WyJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInVwZGF0ZUZvcm0iLCJoaWRlRmllbGQiLCJzdHlsZWRDb21wb25lbnRzIiwicHJvcHMiLCJpZCIsImZvcm1JZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwicGxhY2Vob2xkZXIiLCJpc1JlcXVpcmVkIiwibWF4TGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwiSW5wdXQiLCJMYWJlbCIsImRpc3BsYXkiLCJ1bmRlZmluZWQiLCJldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztlQUVlLHdCQVVUO0FBQUEsTUFUSkEsS0FTSSxRQVRKQSxLQVNJO0FBQUEsTUFSSkMsS0FRSSxRQVJKQSxLQVFJO0FBQUEsTUFQSkMsaUJBT0ksUUFQSkEsaUJBT0k7QUFBQSxNQU5KQyxPQU1JLFFBTkpBLE9BTUk7QUFBQSxNQUxKQyxVQUtJLFFBTEpBLFVBS0k7QUFBQSxNQUpKQyxVQUlJLFFBSkpBLFVBSUk7QUFBQSxNQUhKQyxTQUdJLFFBSEpBLFNBR0k7QUFBQSxNQUZKQyxnQkFFSSxRQUZKQSxnQkFFSTtBQUFBLE1BRERDLEtBQ0M7O0FBQUEsTUFFRkMsRUFGRSxHQWVBVCxLQWZBLENBRUZTLEVBRkU7QUFBQSxNQUdGQyxNQUhFLEdBZUFWLEtBZkEsQ0FHRlUsTUFIRTtBQUFBLE1BSUZDLElBSkUsR0FlQVgsS0FmQSxDQUlGVyxJQUpFO0FBQUEsTUFLRkMsS0FMRSxHQWVBWixLQWZBLENBS0ZZLEtBTEU7QUFBQSxNQU1GQyxRQU5FLEdBZUFiLEtBZkEsQ0FNRmEsUUFORTtBQUFBLE1BT0ZDLFdBUEUsR0FlQWQsS0FmQSxDQU9GYyxXQVBFO0FBQUEsTUFRRkMsVUFSRSxHQWVBZixLQWZBLENBUUZlLFVBUkU7QUFBQSxNQVNGQyxTQVRFLEdBZUFoQixLQWZBLENBU0ZnQixTQVRFO0FBQUEsTUFVRkMsV0FWRSxHQWVBakIsS0FmQSxDQVVGaUIsV0FWRTtBQUFBLE1BV0ZDLG9CQVhFLEdBZUFsQixLQWZBLENBV0ZrQixvQkFYRTtBQUFBLE1BWUZDLGNBWkUsR0FlQW5CLEtBZkEsQ0FZRm1CLGNBWkU7QUFBQSxNQWFGQyxLQWJFLEdBZUFwQixLQWZBLENBYUZvQixLQWJFO0FBQUEsTUFjRkMsVUFkRSxHQWVBckIsS0FmQSxDQWNGcUIsVUFkRTs7QUFBQSxjQWlCeUNkLGdCQUFnQixJQUFJLEtBakI3RDtBQUFBLDBCQWlCSWUsS0FqQko7QUFBQSxNQWlCSUEsS0FqQkosNEJBaUJZLE9BakJaO0FBQUEsMEJBaUJxQkMsS0FqQnJCO0FBQUEsTUFpQnFCQSxLQWpCckIsNEJBaUI2QixPQWpCN0I7O0FBbUJKLFNBQ0UsZ0NBQUMsV0FBRDtBQUNFLElBQUEsS0FBSyxFQUFFSCxLQURUO0FBRUUsSUFBQSxTQUFTLEVBQ1BsQixpQkFBaUIsSUFBSUMsT0FBckIsOEJBQW1EVSxRQUFuRCx5QkFBOEVBLFFBQTlFLENBSEo7QUFLRSxJQUFBLEtBQUssRUFBRTtBQUFFVyxNQUFBQSxPQUFPLEVBQUVsQixTQUFTLEdBQUcsTUFBSCxHQUFZbUI7QUFBaEM7QUFMVCxLQU9FO0FBQUssSUFBQSxTQUFTLEVBQUVkO0FBQWhCLEtBQ0UsZ0NBQUMsS0FBRDtBQUFPLElBQUEsT0FBTyxrQkFBV0QsTUFBWCxjQUFxQkQsRUFBckIsQ0FBZDtBQUF5QyxJQUFBLFNBQVMscUJBQWNVLGNBQWQ7QUFBbEQsS0FDR1AsS0FESCxFQUVHRyxVQUFVLEdBQUcsa0RBQUgsR0FBb0IsSUFGakMsQ0FERixFQUtHRyxvQkFBb0IsS0FBSyxPQUF6QixJQUFvQ0QsV0FBcEMsR0FDQ0EsV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0FEaEIsR0FHQyxnQ0FBQyxpQkFBRCxDQUFPLFFBQVAsUUFDRSxnQ0FBQyxLQUFEO0FBQ0UsSUFBQSxFQUFFLGtCQUFXUCxNQUFYLGNBQXFCRCxFQUFyQixDQURKO0FBRUUsSUFBQSxJQUFJLEVBQUVZLFVBQVUsb0JBQWFaLEVBQWIsQ0FGbEI7QUFHRSxJQUFBLElBQUksRUFBRUUsSUFIUjtBQUlFLElBQUEsS0FBSyxFQUFFLENBQUNWLEtBQUQsR0FBUyxFQUFULEdBQWNBLEtBSnZCO0FBS0UsSUFBQSxXQUFXLEVBQUVhLFdBTGY7QUFNRSxJQUFBLFNBQVMsRUFBRUUsU0FOYjtBQU9FLElBQUEsUUFBUSxFQUFFRCxVQVBaO0FBUUUsSUFBQSxRQUFRLEVBQUUsa0JBQUFXLEtBQUs7QUFBQSxhQUFJckIsVUFBVSxDQUFDcUIsS0FBRCxFQUFRMUIsS0FBUixDQUFkO0FBQUEsS0FSakI7QUFTRSxJQUFBLE1BQU0sRUFBRSxnQkFBQzBCLEtBQUQsRUFBVztBQUNqQnJCLE1BQUFBLFVBQVUsQ0FBQ3FCLEtBQUQsRUFBUTFCLEtBQVIsQ0FBVjtBQUNBSSxNQUFBQSxVQUFVLENBQUNLLEVBQUQsQ0FBVjtBQUNELEtBWkg7QUFhRSx3Q0FBMkJDLE1BQTNCLGNBQXFDRCxFQUFyQyxDQWJGO0FBY0Usb0JBQWMsQ0FBQyxDQUFDUCxpQkFBRixJQUF1QkM7QUFkdkMsSUFERixFQWlCR2MsV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0FqQmxCLENBUkosRUE0QkdmLGlCQUFpQixJQUFJQyxPQUFyQixJQUNDO0FBQU0sSUFBQSxTQUFTLEVBQUMsZUFBaEI7QUFBZ0MsSUFBQSxFQUFFLGtCQUFXTyxNQUFYLGNBQXFCRCxFQUFyQjtBQUFsQyxLQUNHUCxpQkFESCxDQTdCSixDQVBGLENBREY7QUE0Q0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICdyZWJhc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICB0b3VjaGVkLFxuICBzZXRUb3VjaGVkLFxuICB1cGRhdGVGb3JtLFxuICBoaWRlRmllbGQsXG4gIHN0eWxlZENvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBmb3JtSWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBjc3NDbGFzcyxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBpc1JlcXVpcmVkLFxuICAgIG1heExlbmd0aCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBjdXN0b21OYW1lLFxuICB9ID0gZmllbGQ7XG5cbiAgY29uc3QgeyBJbnB1dCA9ICdpbnB1dCcsIExhYmVsID0gJ2xhYmVsJyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/ICdub25lJyA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAgPExhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfSBjbGFzc05hbWU9e2BnZi1sYWJlbCAke2xhYmVsUGxhY2VtZW50fWB9PlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICB7aXNSZXF1aXJlZCA/IDxhYmJyPio8L2FiYnI+IDogbnVsbH1cbiAgICAgICAgPC9MYWJlbD5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgIGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH1cbiAgICAgICAgICAgICAgbmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICB2YWx1ZT17IXZhbHVlID8gJycgOiB2YWx1ZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCl9XG4gICAgICAgICAgICAgIG9uQmx1cj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH1cbiAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXshIXZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXX0=