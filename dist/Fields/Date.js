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
  }, _react["default"].createElement(Label, {
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
    }, _react["default"].createElement(Input, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvRGF0ZS5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsInByb3BzIiwiaWQiLCJ0eXBlIiwibGFiZWwiLCJjc3NDbGFzcyIsInBsYWNlaG9sZGVyIiwiaXNSZXF1aXJlZCIsIm1heExlbmd0aCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiaW5wdXRzIiwiY3VzdG9tTmFtZSIsIklucHV0IiwiTGFiZWwiLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwibWFwIiwiaXRlbSIsImluZGV4IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZXZlbnQiLCJzdWJJZCIsImRhdGVMYWJlbCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7ZUFFZSx3QkFVVDtBQUFBLE1BVEpBLEtBU0ksUUFUSkEsS0FTSTtBQUFBLE1BUkpDLEtBUUksUUFSSkEsS0FRSTtBQUFBLE1BUEpDLGlCQU9JLFFBUEpBLGlCQU9JO0FBQUEsTUFOSkMsT0FNSSxRQU5KQSxPQU1JO0FBQUEsTUFMSkMsVUFLSSxRQUxKQSxVQUtJO0FBQUEsTUFKSkMsU0FJSSxRQUpKQSxTQUlJO0FBQUEsTUFISkMsVUFHSSxRQUhKQSxVQUdJO0FBQUEsTUFGSkMsZ0JBRUksUUFGSkEsZ0JBRUk7QUFBQSxNQUREQyxLQUNDOztBQUFBLE1BRUZDLEVBRkUsR0FlQVQsS0FmQSxDQUVGUyxFQUZFO0FBQUEsTUFHRkMsSUFIRSxHQWVBVixLQWZBLENBR0ZVLElBSEU7QUFBQSxNQUlGQyxLQUpFLEdBZUFYLEtBZkEsQ0FJRlcsS0FKRTtBQUFBLE1BS0ZDLFFBTEUsR0FlQVosS0FmQSxDQUtGWSxRQUxFO0FBQUEsTUFNRkMsV0FORSxH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QXJCSCxNQURGLEVBd0JFO0FBQU8sTUFBQSxPQUFPLGtCQUFXQSxFQUFYLGNBQWlCbUIsS0FBakIsQ0FBZDtBQUF3QyxNQUFBLFNBQVMsRUFBQztBQUFsRCxPQUNHRCxJQUFJLENBQUNoQixLQURSLENBeEJGLEVBMkJHVCxpQkFBaUIsSUFDYkMsT0FESixJQUVJRCxpQkFBaUIsQ0FBQzBCLEtBQUQsQ0FGckIsSUFHSUEsS0FBSyxLQUFLMUIsaUJBQWlCLENBQUMwQixLQUFELENBQWpCLENBQXlCQSxLQUh2QyxJQUlJMUIsaUJBQWlCLENBQUMwQixLQUFELENBQWpCLENBQXlCTSxPQUo3QixJQUtDO0FBQU0sTUFBQSxTQUFTLEVBQUMsZUFBaEI7QUFBZ0MsTUFBQSxFQUFFLGtCQUFXUCxJQUFJLENBQUNsQixFQUFoQjtBQUFsQyxPQUNHUCxpQkFBaUIsQ0FBQzBCLEtBQUQsQ0FBakIsQ0FBeUJNLE9BRDVCLENBaENKLENBRFk7QUFBQSxHQUFYLENBRlAsRUEwQ0dsQixXQUFXLElBQUk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQThCQSxXQUE5QixDQTFDbEIsQ0FKSixDQVhGLENBREY7QUFnRUQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICdyZWJhc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICB0b3VjaGVkLFxuICBzZXRUb3VjaGVkLFxuICBoaWRlRmllbGQsXG4gIHVwZGF0ZUZvcm0sXG4gIHN0eWxlZENvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIGNzc0NsYXNzLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgbWF4TGVuZ3RoLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgIGxhYmVsUGxhY2VtZW50LFxuICAgIHdpZHRoLFxuICAgIGlucHV0cyxcbiAgICBjdXN0b21OYW1lLFxuICB9ID0gZmllbGQ7XG5cbiAgY29uc3QgeyBJbnB1dCA9ICdpbnB1dCcsIExhYmVsID0gJ2xhYmVsJyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/ICdub25lJyA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxMYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtpZH1gfSBjbGFzc05hbWU9e2BnZi1sYWJlbCAke2xhYmVsUGxhY2VtZW50fWB9PlxuICAgICAgICB7bGFiZWx9XG4gICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgPC9MYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgIGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge2lucHV0c1xuICAgICAgICAgICAgICAmJiBpbnB1dHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtpZH1fJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpZH1bXWB9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpdGVtLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgICAgICAgICBtYXg9e1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubGFiZWwgPT09ICdNTSdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMTJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS5sYWJlbCA9PT0gJ0REJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/IDMxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpICsgMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17aXRlbS5sYWJlbCA9PT0gJ1lZWVknID8gNCA6IDJ9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnN1YklkID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0ZUxhYmVsID0gaXRlbS5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2lkfV8ke2luZGV4fWB9IGNsYXNzTmFtZT1cImhpZGUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICYmIHRvdWNoZWRcbiAgICAgICAgICAgICAgICAgICAgJiYgdmFsaWRhdGlvbk1lc3NhZ2VbaW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICYmIGluZGV4ID09PSB2YWxpZGF0aW9uTWVzc2FnZVtpbmRleF0uaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgJiYgdmFsaWRhdGlvbk1lc3NhZ2VbaW5kZXhdLm1lc3NhZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2l0ZW0uaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlW2luZGV4XS5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXX0=