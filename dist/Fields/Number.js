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
    htmlFor: "input_".concat(id),
    className: "gf-label ".concat(labelPlacement)
  }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === 'above' && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Input, {
    id: "input_".concat(id),
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
    id: "error_".concat(id)
  }, validationMessage)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvTnVtYmVyLmpzeCJdLCJuYW1lcyI6WyJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInVwZGF0ZUZvcm0iLCJoaWRlRmllbGQiLCJzdHlsZWRDb21wb25lbnRzIiwicHJvcHMiLCJpZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwicGxhY2Vob2xkZXIiLCJpc1JlcXVpcmVkIiwibWF4TGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwiSW5wdXQiLCJMYWJlbCIsImRpc3BsYXkiLCJ1bmRlZmluZWQiLCJldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztlQUVlLHdCQVVUO0FBQUEsTUFUSkEsS0FTSSxRQVRKQSxLQVNJO0FBQUEsTUFSSkMsS0FRSSxRQVJKQSxLQVFJO0FBQUEsTUFQSkMsaUJBT0ksUUFQSkEsaUJBT0k7QUFBQSxNQU5KQyxPQU1JLFFBTkpBLE9BTUk7QUFBQSxNQUxKQyxVQUtJLFFBTEpBLFVBS0k7QUFBQSxNQUpKQyxVQUlJLFFBSkpBLFVBSUk7QUFBQSxNQUhKQyxTQUdJLFFBSEpBLFNBR0k7QUFBQSxNQUZKQyxnQkFFSSxRQUZKQSxnQkFFSTtBQUFBLE1BRERDLEtBQ0M7O0FBQUEsTUFFRkMsRUFGRSxHQWNBVCxLQWRBLENBRUZTLEVBRkU7QUFBQSxNQUdGQyxJQUhFLEdBY0FWLEtBZEEsQ0FHRlUsSUFIRTtBQUFBLE1BSUZDLEtBSkUsR0FjQVgsS0FkQSxDQUlGVyxLQUpFO0FBQUEsTUFLRkMsUUFMRSxHQWNBWixLQWRBLENBS0ZZLFFBTEU7QUFBQSxNQU1GQyxXQU5FLEdBY0FiLEtBZEEsQ0FNRmEsV0FORTtBQUFBLE1BT0ZDLFVBUEUsR0FjQWQsS0FkQSxDQU9GYyxVQVBFO0FBQUEsTUFRRkMsU0FSRSxHQWNBZixLQWRBLENBUUZlLFNBUkU7QUFBQSxNQVNGQyxXQVRFLEdBY0FoQixLQWRBLENBU0ZnQixXQVRFO0FBQUEsTUFVRkMsb0JBVkUsR0FjQWpCLEtBZEEsQ0FVRmlCLG9CQVZFO0FBQUEsTUFXRkMsY0FYRSxHQWNBbEIsS0FkQSxDQVdGa0IsY0FYRTtBQUFBLE1BWUZDLEtBWkUsR0FjQW5CLEtBZEEsQ0FZRm1CLEtBWkU7QUFBQSxNQWFGQyxVQWJFLEdBY0FwQixLQWRBLENBYUZvQixVQWJFOztBQUFBLGNBZ0J5Q2IsZ0JBQWdCLElBQUksS0FoQjdEO0FBQUEsMEJBZ0JJYyxLQWhCSjtBQUFBLE1BZ0JJQSxLQWhCSiw0QkFnQlksT0FoQlo7QUFBQSwwQkFnQnFCQyxLQWhCckI7QUFBQSxNQWdCcUJBLEtBaEJyQiw0QkFnQjZCLE9BaEI3Qjs7QUFrQkosU0FDRSxnQ0FBQyxXQUFEO0FBQ0UsSUFBQSxLQUFLLEVBQUVILEtBRFQ7QUFFRSxJQUFBLFNBQVMsRUFDUGpCLGlCQUFpQixJQUFJQyxPQUFyQiw4QkFBbURTLFFBQW5ELHlCQUE4RUEsUUFBOUUsQ0FISjtBQUtFLElBQUEsS0FBSyxFQUFFO0FBQUVXLE1BQUFBLE9BQU8sRUFBRWpCLFNBQVMsR0FBRyxNQUFILEdBQVlrQjtBQUFoQztBQUxULEtBT0U7QUFBSyxJQUFBLFNBQVMsRUFBRWQ7QUFBaEIsS0FDRSxnQ0FBQyxLQUFEO0FBQU8sSUFBQSxPQUFPLGtCQUFXRCxFQUFYLENBQWQ7QUFBK0IsSUFBQSxTQUFTLHFCQUFjUyxjQUFkO0FBQXhDLEtBQ0dQLEtBREgsRUFFR0csVUFBVSxHQUFHLGtEQUFILEdBQW9CLElBRmpDLENBREYsRUFLR0csb0JBQW9CLEtBQUssT0FBekIsSUFBb0NELFdBQXBDLEdBQ0NBLFdBQVcsSUFBSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBOEJBLFdBQTlCLENBRGhCLEdBR0MsZ0NBQUMsaUJBQUQsQ0FBTyxRQUFQLFFBQ0UsZ0NBQUMsS0FBRDtBQUNFLElBQUEsRUFBRSxrQkFBV1AsRUFBWCxDQURKO0FBRUUsSUFBQSxJQUFJLEVBQUVXLFVBQVUsb0JBQWFYLEVBQWIsQ0FGbEI7QUFHRSxJQUFBLElBQUksRUFBRUMsSUFIUjtBQUlFLElBQUEsS0FBSyxFQUFFLENBQUNULEtBQUQsR0FBUyxFQUFULEdBQWNBLEtBSnZCO0FBS0UsSUFBQSxXQUFXLEVBQUVZLFdBTGY7QUFNRSxJQUFBLFNBQVMsRUFBRUUsU0FOYjtBQU9FLElBQUEsUUFBUSxFQUFFRCxVQVBaO0FBUUUsSUFBQSxRQUFRLEVBQUUsa0JBQUFXLEtBQUs7QUFBQSxhQUFJcEIsVUFBVSxDQUFDb0IsS0FBRCxFQUFRekIsS0FBUixDQUFkO0FBQUEsS0FSakI7QUFTRSxJQUFBLE1BQU0sRUFBRSxnQkFBQ3lCLEtBQUQsRUFBVztBQUNqQnBCLE1BQUFBLFVBQVUsQ0FBQ29CLEtBQUQsRUFBUXpCLEtBQVIsQ0FBVjtBQUNBSSxNQUFBQSxVQUFVLENBQUNLLEVBQUQsQ0FBVjtBQUNELEtBWkg7QUFhRSx3Q0FBMkJBLEVBQTNCLENBYkY7QUFjRSxvQkFBYyxDQUFDLENBQUNQLGlCQUFGLElBQXVCQztBQWR2QyxJQURGLEVBaUJHYSxXQUFXLElBQUk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQThCQSxXQUE5QixDQWpCbEIsQ0FSSixFQTRCR2QsaUJBQWlCLElBQUlDLE9BQXJCLElBQ0M7QUFBTSxJQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFnQyxJQUFBLEVBQUUsa0JBQVdNLEVBQVg7QUFBbEMsS0FDR1AsaUJBREgsQ0E3QkosQ0FQRixDQURGO0FBNENELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAncmViYXNzJztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgdXBkYXRlRm9ybSxcbiAgaGlkZUZpZWxkLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBjc3NDbGFzcyxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBpc1JlcXVpcmVkLFxuICAgIG1heExlbmd0aCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBjdXN0b21OYW1lLFxuICB9ID0gZmllbGQ7XG5cbiAgY29uc3QgeyBJbnB1dCA9ICdpbnB1dCcsIExhYmVsID0gJ2xhYmVsJyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/ICdub25lJyA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAgPExhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2lkfWB9IGNsYXNzTmFtZT17YGdmLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICA8L0xhYmVsPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09ICdhYm92ZScgJiYgZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9YH1cbiAgICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgICAgdmFsdWU9eyF2YWx1ZSA/ICcnIDogdmFsdWV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPXttYXhMZW5ndGh9XG4gICAgICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdXBkYXRlRm9ybShldmVudCwgZmllbGQpfVxuICAgICAgICAgICAgICBvbkJsdXI9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17YGVycm9yXyR7aWR9YH1cbiAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXshIXZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2lkfWB9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==