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
      props = _objectWithoutProperties(_ref, ["field", "value", "validationMessage", "touched", "setTouched", "hideField", "updateForm"]);

  var id = field.id,
      type = field.type,
      label = field.label,
      cssClass = field.cssClass,
      isRequired = field.isRequired,
      choices = field.choices,
      inputs = field.inputs,
      description = field.description,
      descriptionPlacement = field.descriptionPlacement,
      labelPlacement = field.labelPlacement,
      width = field.width,
      customName = field.customName;
  return _react["default"].createElement(_rebass.Box, {
    width: width,
    className: validationMessage && touched ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
    style: {
      display: hideField ? 'none' : undefined
    }
  }, _react["default"].createElement("fieldset", {
    className: "checkboxes"
  }, _react["default"].createElement("legend", {
    className: "group-label ".concat(labelPlacement)
  }, label, label && isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === 'above' && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, choices.map(function (choice, i) {
    return _react["default"].createElement("div", {
      className: type,
      key: choice.value
    }, _react["default"].createElement("input", {
      id: "input_".concat(inputs[i].id),
      type: "checkbox",
      name: customName || "input_".concat(inputs[i].id),
      value: choice.value,
      checked: value.includes(choice.value),
      onChange: function onChange(event) {
        updateForm(event, field);
        setTouched(id);
      }
    }), _react["default"].createElement("label", {
      htmlFor: "input_".concat(inputs[i].id)
    }, choice.text));
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description)), validationMessage && touched && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(id)
  }, validationMessage)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvQ2hlY2tib3guanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInByb3BzIiwiaWQiLCJ0eXBlIiwibGFiZWwiLCJjc3NDbGFzcyIsImlzUmVxdWlyZWQiLCJjaG9pY2VzIiwiaW5wdXRzIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwiZGlzcGxheSIsInVuZGVmaW5lZCIsIm1hcCIsImNob2ljZSIsImkiLCJpbmNsdWRlcyIsImV2ZW50IiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztlQUVlLHdCQVNUO0FBQUEsTUFSSkEsS0FRSSxRQVJKQSxLQVFJO0FBQUEsTUFQSkMsS0FPSSxRQVBKQSxLQU9JO0FBQUEsTUFOSkMsaUJBTUksUUFOSkEsaUJBTUk7QUFBQSxNQUxKQyxPQUtJLFFBTEpBLE9BS0k7QUFBQSxNQUpKQyxVQUlJLFFBSkpBLFVBSUk7QUFBQSxNQUhKQyxTQUdJLFFBSEpBLFNBR0k7QUFBQSxNQUZKQyxVQUVJLFFBRkpBLFVBRUk7QUFBQSxNQUREQyxLQUNDOztBQUFBLE1BRUZDLEVBRkUsR0FjQVIsS0FkQSxDQUVGUSxFQUZFO0FBQUEsTUFHRkMsSUFIRSxHQWNBVCxLQWRBLENBR0ZTLElBSEU7QUFBQSxNQUlGQyxLQUpFLEdBY0FWLEtBZEEsQ0FJRlUsS0FKRTtBQUFBLE1BS0ZDLFFBTEUsR0FjQVgsS0FkQSxDQUtGVyxRQUxFO0FBQUEsTUFNRkMsVUFORSxHQWNBWixLQWRBLENBTUZZLFVBTkU7QUFBQSxNQU9GQyxPQVBFLEdBY0FiLEtBZEEsQ0FPRmEsT0FQRTtBQUFBLE1BUUZDLE1BUkUsR0FjQWQsS0FkQSxDQVFGYyxNQVJFO0FBQUEsTUFTRkMsV0FURSxHQWNBZixLQWRBLENBU0ZlLFdBVEU7QUFBQSxNQVVGQyxvQkFWRSxHQWNBaEIsS0FkQSxDQVVGZ0Isb0JBVkU7QUFBQSxNQVdGQyxjQVhFLEdBY0FqQixLQWRBLENBV0ZpQixjQVhFO0FBQUEsTUFZRkMsS0FaRSxHQWNBbEIsS0FkQSxDQVlGa0IsS0FaRTtBQUFBLE1BYUZDLFVBYkUsR0FjQW5CLEtBZEEsQ0FhRm1CLFVBYkU7QUFlSixTQUNFLGdDQUFDLFdBQUQ7QUFDRSxJQUFBLEtBQUssRUFBRUQsS0FEVDtBQUVFLElBQUEsU0FBUyxFQUNQaEIsaUJBQWlCLElBQUlDLE9BQXJCLDhCQUFtRFEsUUFBbkQseUJBQThFQSxRQUE5RSxDQUhKO0FBS0UsSUFBQSxLQUFLLEVBQUU7QUFBRVMsTUFBQUEsT0FBTyxFQUFFZixTQUFTLEdBQUcsTUFBSCxHQUFZZ0I7QUFBaEM7QUFMVCxLQU9FO0FBQVUsSUFBQSxTQUFTLEVBQUM7QUFBcEIsS0FDRTtBQUFRLElBQUEsU0FBUyx3QkFBaUJKLGNBQWpCO0FBQWpCLEtBQ0dQLEtBREgsRUFFR0EsS0FBSyxJQUFJRSxVQUFULEdBQXNCLGtEQUF0QixHQUF1QyxJQUYxQyxDQURGLEVBS0dJLG9CQUFvQixLQUFLLE9BQXpCLElBQW9DRCxXQUFwQyxHQUNDQSxXQUFXLElBQUk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQThCQSxXQUE5QixDQURoQixHQUdDLGdDQUFDLGlCQUFELENBQU8sUUFBUCxRQUNHRixPQUFPLENBQUNTLEdBQVIsQ0FBWSxVQUFDQyxNQUFELEVBQVNDLENBQVQ7QUFBQSxXQUNYO0FBQUssTUFBQSxTQUFTLEVBQUVmLElBQWhCO0FBQXNCLE1BQUEsR0FBRyxFQUFFYyxNQUFNLENBQUN0QjtBQUFsQyxPQUNFO0FBQ0UsTUFBQSxFQUFFLGtCQUFXYSxNQUFNLENBQUNVLENBQUQsQ0FBTixDQUFVaEIsRUFBckIsQ0FESjtBQUVFLE1BQUEsSUFBSSxFQUFDLFVBRlA7QUFHRSxNQUFBLElBQUksRUFBRVcsVUFBVSxvQkFBYUwsTUFBTSxDQUFDVSxDQUFELENBQU4sQ0FBVWhCLEVBQXZCLENBSGxCO0FBSUUsTUFBQSxLQUFLLEVBQUVlLE1BQU0sQ0FBQ3RCLEtBSmhCO0FBS0UsTUFBQSxPQUFPLEVBQUVBLEtBQUssQ0FBQ3dCLFFBQU4sQ0FBZUYsTUFBTSxDQUFDdEIsS0FBdEIsQ0FMWDtBQU1FLE1BQUEsUUFBUSxFQUFFLGtCQUFDeUIsS0FBRCxFQUFXO0FBQ25CcEIsUUFBQUEsVUFBVSxDQUFDb0IsS0FBRCxFQUFRMUIsS0FBUixDQUFWO0FBQ0FJLFFBQUFBLFVBQVUsQ0FBQ0ksRUFBRCxDQUFWO0FBQ0Q7QUFUSCxNQURGLEVBWUU7QUFBTyxNQUFBLE9BQU8sa0JBQVdNLE1BQU0sQ0FBQ1UsQ0FBRCxDQUFOLENBQVVoQixFQUFyQjtBQUFkLE9BQTBDZSxNQUFNLENBQUNJLElBQWpELENBWkYsQ0FEVztBQUFBLEdBQVosQ0FESCxFQWlCR1osV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0FqQmxCLENBUkosRUE0QkdiLGlCQUFpQixJQUFJQyxPQUFyQixJQUNDO0FBQU0sSUFBQSxTQUFTLEVBQUMsZUFBaEI7QUFBZ0MsSUFBQSxFQUFFLGtCQUFXSyxFQUFYO0FBQWxDLEtBQ0dOLGlCQURILENBN0JKLENBUEYsQ0FERjtBQTRDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCB9IGZyb20gJ3JlYmFzcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIGhpZGVGaWVsZCxcbiAgdXBkYXRlRm9ybSxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIHR5cGUsXG4gICAgbGFiZWwsXG4gICAgY3NzQ2xhc3MsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBjaG9pY2VzLFxuICAgIGlucHV0cyxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBjdXN0b21OYW1lXG4gIH0gPSBmaWVsZDtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICA+XG4gICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiY2hlY2tib3hlc1wiPlxuICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT17YGdyb3VwLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIHtsYWJlbCAmJiBpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgIGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge2Nob2ljZXMubWFwKChjaG9pY2UsIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9IGtleT17Y2hvaWNlLnZhbHVlfT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtpbnB1dHNbaV0uaWR9YH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lucHV0c1tpXS5pZH1gfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Nob2ljZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbHVlLmluY2x1ZGVzKGNob2ljZS52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2lucHV0c1tpXS5pZH1gfT57Y2hvaWNlLnRleHR9PC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2Pn1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtpZH1gfT5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==