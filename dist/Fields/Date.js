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
      placeholder = field.placeholder,
      isRequired = field.isRequired,
      maxLength = field.maxLength,
      description = field.description,
      descriptionPlacement = field.descriptionPlacement,
      labelPlacement = field.labelPlacement,
      width = field.width,
      inputs = field.inputs,
      customName = field.customName;
  return _react["default"].createElement(_rebass.Box, {
    width: width,
    className: validationMessage && touched ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
    style: {
      display: hideField ? 'none' : undefined
    }
  }, _react["default"].createElement("label", {
    htmlFor: "input_".concat(id),
    className: "gf-label ".concat(labelPlacement)
  }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), _react["default"].createElement("div", {
    className: type
  }, descriptionPlacement === 'above' && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, inputs && inputs.map(function (item, index) {
    return _react["default"].createElement("div", {
      className: type,
      key: item.id
    }, _react["default"].createElement("input", {
      id: "input_".concat(id, "_").concat(index),
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
      htmlFor: "input_".concat(id, "_").concat(index),
      className: "hide-label"
    }, item.label), validationMessage && touched && validationMessage[index] && index === validationMessage[index].index && validationMessage[index].message && _react["default"].createElement("span", {
      className: "error-message",
      id: "error_".concat(item.id)
    }, validationMessage[index].message));
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description))));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvRGF0ZS5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwicHJvcHMiLCJpZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwicGxhY2Vob2xkZXIiLCJpc1JlcXVpcmVkIiwibWF4TGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJpbnB1dHMiLCJjdXN0b21OYW1lIiwiZGlzcGxheSIsInVuZGVmaW5lZCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImV2ZW50Iiwic3ViSWQiLCJkYXRlTGFiZWwiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O2VBRWUsd0JBU1Q7QUFBQSxNQVJKQSxLQVFJLFFBUkpBLEtBUUk7QUFBQSxNQVBKQyxLQU9JLFFBUEpBLEtBT0k7QUFBQSxNQU5KQyxpQkFNSSxRQU5KQSxpQkFNSTtBQUFBLE1BTEpDLE9BS0ksUUFMSkEsT0FLSTtBQUFBLE1BSkpDLFVBSUksUUFKSkEsVUFJSTtBQUFBLE1BSEpDLFNBR0ksUUFISkEsU0FHSTtBQUFBLE1BRkpDLFVBRUksUUFGSkEsVUFFSTtBQUFBLE1BRERDLEtBQ0M7O0FBQUEsTUFFRkMsRUFGRSxHQWVBUixLQWZBLENBRUZRLEVBRkU7QUFBQSxNQUdGQyxJQUhFLEdBZUFULEtBZkEsQ0FHRlMsSUFIRTtBQUFBLE1BSUZDLEtBSkUsR0FlQVYsS0FmQSxDQUlGVSxLQUpFO0FBQUEsTUFLRkMsUUFMRSxHQWVBWCxLQWZBLENBS0ZXLFFBTEU7QUFBQSxNQU1GQyxXQU5FLEdBZUFaLEtBZkEsQ0FNRlksV0FORTtBQUFBLE1BT0ZDLFVBUEUsR0FlQWIsS0FmQSxDQU9GYSxVQVBFO0FBQUEs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aUJBQWlCLENBQUN1QixLQUFELENBQWpCLENBQXlCTSxPQUo3QixJQUtDO0FBQU0sTUFBQSxTQUFTLEVBQUMsZUFBaEI7QUFBZ0MsTUFBQSxFQUFFLGtCQUFXUCxJQUFJLENBQUNoQixFQUFoQjtBQUFsQyxPQUNHTixpQkFBaUIsQ0FBQ3VCLEtBQUQsQ0FBakIsQ0FBeUJNLE9BRDVCLENBaENKLENBRFk7QUFBQSxHQUFYLENBRlAsRUEwQ0doQixXQUFXLElBQUk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQThCQSxXQUE5QixDQTFDbEIsQ0FKSixDQVhGLENBREY7QUFnRUQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICdyZWJhc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICB0b3VjaGVkLFxuICBzZXRUb3VjaGVkLFxuICBoaWRlRmllbGQsXG4gIHVwZGF0ZUZvcm0sXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIGNzc0NsYXNzLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgbWF4TGVuZ3RoLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgIGxhYmVsUGxhY2VtZW50LFxuICAgIHdpZHRoLFxuICAgIGlucHV0cyxcbiAgICBjdXN0b21OYW1lLFxuICB9ID0gZmllbGQ7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICA+XG4gICAgICA8bGFiZWwgaHRtbEZvcj17YGlucHV0XyR7aWR9YH0gY2xhc3NOYW1lPXtgZ2YtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAge2xhYmVsfVxuICAgICAgICB7aXNSZXF1aXJlZCA/IDxhYmJyPio8L2FiYnI+IDogbnVsbH1cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtpbnB1dHNcbiAgICAgICAgICAgICAgJiYgaW5wdXRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7aWR9XyR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9W11gfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aXRlbS5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgbWF4PXtcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxhYmVsID09PSAnTU0nXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDEyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0ubGFiZWwgPT09ICdERCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAzMVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSArIDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9e2l0ZW0ubGFiZWwgPT09ICdZWVlZJyA/IDQgOiAyfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5zdWJJZCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGVMYWJlbCA9IGl0ZW0ubGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtpZH1fJHtpbmRleH1gfSBjbGFzc05hbWU9XCJoaWRlLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAmJiB0b3VjaGVkXG4gICAgICAgICAgICAgICAgICAgICYmIHZhbGlkYXRpb25NZXNzYWdlW2luZGV4XVxuICAgICAgICAgICAgICAgICAgICAmJiBpbmRleCA9PT0gdmFsaWRhdGlvbk1lc3NhZ2VbaW5kZXhdLmluZGV4XG4gICAgICAgICAgICAgICAgICAgICYmIHZhbGlkYXRpb25NZXNzYWdlW2luZGV4XS5tZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtpdGVtLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZVtpbmRleF0ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2Pn1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl19