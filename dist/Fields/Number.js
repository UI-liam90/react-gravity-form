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
    "aria-describedby": "error_".concat(id),
    "aria-invalid": !!validationMessage && touched
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description)), validationMessage && touched && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(formId, "_").concat(id)
  }, validationMessage)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvTnVtYmVyLmpzeCJdLCJuYW1lcyI6WyJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInVwZGF0ZUZvcm0iLCJoaWRlRmllbGQiLCJzdHlsZWRDb21wb25lbnRzIiwicHJvcHMiLCJpZCIsImZvcm1JZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwicGxhY2Vob2xkZXIiLCJpc1JlcXVpcmVkIiwibWF4TGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwiSW5wdXQiLCJMYWJlbCIsImRpc3BsYXkiLCJ1bmRlZmluZWQiLCJldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztlQUVlLHdCQVVUO0FBQUEsTUFUSkEsS0FTSSxRQVRKQSxLQVNJO0FBQUEsTUFSSkMsS0FRSSxRQVJKQSxLQVFJO0FBQUEsTUFQSkMsaUJBT0ksUUFQSkEsaUJBT0k7QUFBQSxNQU5KQyxPQU1JLFFBTkpBLE9BTUk7QUFBQSxNQUxKQyxVQUtJLFFBTEpBLFVBS0k7QUFBQSxNQUpKQyxVQUlJLFFBSkpBLFVBSUk7QUFBQSxNQUhKQyxTQUdJLFFBSEpBLFNBR0k7QUFBQSxNQUZKQyxnQkFFSSxRQUZKQSxnQkFFSTtBQUFBLE1BRERDLEtBQ0M7O0FBQUEsTUFFRkMsRUFGRSxHQWVBVCxLQWZBLENBRUZTLEVBRkU7QUFBQSxNQUdGQyxNQUhFLEdBZUFWLEtBZkEsQ0FHRlUsTUFIRTtBQUFBLE1BSUZDLElBSkUsR0FlQVgsS0FmQSxDQUlGVyxJQUpFO0FBQUEsTUFLRkMsS0FMRSxHQWVBWixLQWZBLENBS0ZZLEtBTEU7QUFBQSxNQU1GQyxRQU5FLEdBZUFiLEtBZkEsQ0FNRmEsUUFORTtBQUFBLE1BT0ZDLFdBUEUsR0FlQWQsS0FmQSxDQU9GYyxXQVBFO0FBQUEsTUFRRkMsVUFSRSxHQWVBZixLQWZBLENBUUZlLFVBUkU7QUFBQSxNQVNGQyxTQVRFLEdBZUFoQixLQWZBLENBU0ZnQixTQVRFO0FBQUEsTUFVRkMsV0FWRSxHQWVBakIsS0FmQSxDQVVGaUIsV0FWRTtBQUFBLE1BV0ZDLG9CQVhFLEdBZUFsQixLQWZBLENBV0ZrQixvQkFYRTtBQUFBLE1BWUZDLGNBWkUsR0FlQW5CLEtBZkEsQ0FZRm1CLGNBWkU7QUFBQSxNQWFGQyxLQWJFLEdBZUFwQixLQWZBLENBYUZvQixLQWJFO0FBQUEsTUFjRkMsVUFkRSxHQWVBckIsS0FmQSxDQWNGcUIsVUFkRTs7QUFBQSxjQWlCeUNkLGdCQUFnQixJQUFJLEtBakI3RDtBQUFBLDBCQWlCSWUsS0FqQko7QUFBQSxNQWlCSUEsS0FqQkosNEJBaUJZLE9BakJaO0FBQUEsMEJBaUJxQkMsS0FqQnJCO0FBQUEsTUFpQnFCQSxLQWpCckIsNEJBaUI2QixPQWpCN0I7O0FBbUJKLFNBQ0UsZ0NBQUMsV0FBRDtBQUNFLElBQUEsS0FBSyxFQUFFSCxLQURUO0FBRUUsSUFBQSxTQUFTLEVBQ1BsQixpQkFBaUIsSUFBSUMsT0FBckIsOEJBQW1EVSxRQUFuRCx5QkFBOEVBLFFBQTlFLENBSEo7QUFLRSxJQUFBLEtBQUssRUFBRTtBQUFFVyxNQUFBQSxPQUFPLEVBQUVsQixTQUFTLEdBQUcsTUFBSCxHQUFZbUI7QUFBaEM7QUFMVCxLQU9FO0FBQUssSUFBQSxTQUFTLEVBQUVkO0FBQWhCLEtBQ0UsZ0NBQUMsS0FBRDtBQUFPLElBQUEsT0FBTyxrQkFBV0QsTUFBWCxjQUFxQkQsRUFBckIsQ0FBZDtBQUF5QyxJQUFBLFNBQVMscUJBQWNVLGNBQWQ7QUFBbEQsS0FDR1AsS0FESCxFQUVHRyxVQUFVLEdBQUcsa0RBQUgsR0FBb0IsSUFGakMsQ0FERixFQUtHRyxvQkFBb0IsS0FBSyxPQUF6QixJQUFvQ0QsV0FBcEMsR0FDQ0EsV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0FEaEIsR0FHQyxnQ0FBQyxpQkFBRCxDQUFPLFFBQVAsUUFDRSxnQ0FBQyxLQUFEO0FBQ0UsSUFBQSxFQUFFLGtCQUFXUCxNQUFYLGNBQXFCRCxFQUFyQixDQURKO0FBRUUsSUFBQSxJQUFJLEVBQUVZLFVBQVUsb0JBQWFaLEVBQWIsQ0FGbEI7QUFHRSxJQUFBLElBQUksRUFBRUUsSUFIUjtBQUlFLElBQUEsS0FBSyxFQUFFLENBQUNWLEtBQUQsR0FBUyxFQUFULEdBQWNBLEtBSnZCO0FBS0UsSUFBQSxXQUFXLEVBQUVhLFdBTGY7QUFNRSxJQUFBLFNBQVMsRUFBRUUsU0FOYjtBQU9FLElBQUEsUUFBUSxFQUFFRCxVQVBaO0FBUUUsSUFBQSxRQUFRLEVBQUUsa0JBQUFXLEtBQUs7QUFBQSxhQUFJckIsVUFBVSxDQUFDcUIsS0FBRCxFQUFRMUIsS0FBUixDQUFkO0FBQUEsS0FSakI7QUFTRSxJQUFBLE1BQU0sRUFBRSxnQkFBQzBCLEtBQUQsRUFBVztBQUNqQnJCLE1BQUFBLFVBQVUsQ0FBQ3FCLEtBQUQsRUFBUTFCLEtBQVIsQ0FBVjtBQUNBSSxNQUFBQSxVQUFVLENBQUNLLEVBQUQsQ0FBVjtBQUNELEtBWkg7QUFhRSx3Q0FBMkJBLEVBQTNCLENBYkY7QUFjRSxvQkFBYyxDQUFDLENBQUNQLGlCQUFGLElBQXVCQztBQWR2QyxJQURGLEVBaUJHYyxXQUFXLElBQUk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQThCQSxXQUE5QixDQWpCbEIsQ0FSSixFQTRCR2YsaUJBQWlCLElBQUlDLE9BQXJCLElBQ0M7QUFBTSxJQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFnQyxJQUFBLEVBQUUsa0JBQVdPLE1BQVgsY0FBcUJELEVBQXJCO0FBQWxDLEtBQ0dQLGlCQURILENBN0JKLENBUEYsQ0FERjtBQTRDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCB9IGZyb20gJ3JlYmFzcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIHVwZGF0ZUZvcm0sXG4gIGhpZGVGaWVsZCxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGZvcm1JZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIGNzc0NsYXNzLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgbWF4TGVuZ3RoLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgIGxhYmVsUGxhY2VtZW50LFxuICAgIHdpZHRoLFxuICAgIGN1c3RvbU5hbWUsXG4gIH0gPSBmaWVsZDtcblxuICBjb25zdCB7IElucHV0ID0gJ2lucHV0JywgTGFiZWwgPSAnbGFiZWwnIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YCA6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuICAgICAgfVxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gJ25vbmUnIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9PlxuICAgICAgICA8TGFiZWwgaHRtbEZvcj17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfWB9IGNsYXNzTmFtZT17YGdmLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICA8L0xhYmVsPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09ICdhYm92ZScgJiYgZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfVxuICAgICAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgIHZhbHVlPXshdmFsdWUgPyAnJyA6IHZhbHVlfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxuICAgICAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKX1cbiAgICAgICAgICAgICAgb25CbHVyPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2BlcnJvcl8ke2lkfWB9XG4gICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17ISF2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2Pn1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH0+XG4gICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2V9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl19