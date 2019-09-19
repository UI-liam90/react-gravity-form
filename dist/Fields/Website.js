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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvV2Vic2l0ZS5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsInByb3BzIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJjc3NDbGFzcyIsInBsYWNlaG9sZGVyIiwiaXNSZXF1aXJlZCIsIm1heExlbmd0aCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiY3VzdG9tTmFtZSIsIklucHV0IiwiTGFiZWwiLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7ZUFFZSx3QkFVVDtBQUFBLE1BVEpBLEtBU0ksUUFUSkEsS0FTSTtBQUFBLE1BUkpDLEtBUUksUUFSSkEsS0FRSTtBQUFBLE1BUEpDLGlCQU9JLFFBUEpBLGlCQU9JO0FBQUEsTUFOSkMsT0FNSSxRQU5KQSxPQU1JO0FBQUEsTUFMSkMsVUFLSSxRQUxKQSxVQUtJO0FBQUEsTUFKSkMsU0FJSSxRQUpKQSxTQUlJO0FBQUEsTUFISkMsVUFHSSxRQUhKQSxVQUdJO0FBQUEsTUFGSkMsZ0JBRUksUUFGSkEsZ0JBRUk7QUFBQSxNQUREQyxLQUNDOztBQUFBLE1BRUZDLEVBRkUsR0FlQVQsS0FmQSxDQUVGUyxFQUZFO0FBQUEsTUFHRkMsTUFIRSxHQWVBVixLQWZBLENBR0ZVLE1BSEU7QUFBQSxNQUlGQyxJQUpFLEdBZUFYLEtBZkEsQ0FJRlcsSUFKRTtBQUFBLE1BS0ZDLEtBTEUsR0FlQVosS0FmQSxDQUtGWSxLQUxFO0FBQUEsTUFNRkMsUUFORSxHQWVBYixLQWZBLENBTUZhLFFBTkU7QUFBQSxNQU9GQyxXQVBFLEdBZUFkLEtBZkEsQ0FPRmMsV0FQRTtBQUFBLE1BUUZDLFVBUkUsR0FlQWYsS0FmQSxDQVFGZSxVQVJFO0FBQUEsTUFTRkMsU0FURSxHQWVBaEIsS0FmQSxDQVNGZ0IsU0FURTtBQUFBLE1BVUZDLFdBVkUsR0FlQWpCLEtBZkEsQ0FVRmlCLFdBVkU7QUFBQSxNQVdGQyxvQkFYRSxHQWVBbEIsS0FmQSxDQVdGa0Isb0JBWEU7QUFBQSxNQVlGQyxjQVpFLEdBZUFuQixLQWZBLENBWUZtQixjQVpFO0FBQUEsTUFhRkMsS0FiRSxHQWVBcEIsS0FmQSxDQWFGb0IsS0FiRTtBQUFBLE1BY0ZDLFVBZEUsR0FlQXJCLEtBZkEsQ0FjRnFCLFVBZEU7O0FBQUEsY0FnQnlDZCxnQkFBZ0IsSUFBSSxLQWhCN0Q7QUFBQSwwQkFnQkllLEtBaEJKO0FBQUEsTUFnQklBLEtBaEJKLDRCQWdCWSxPQWhCWjtBQUFBLDBCQWdCcUJDLEtBaEJyQjtBQUFBLE1BZ0JxQkEsS0FoQnJCLDRCQWdCNkIsT0FoQjdCOztBQWlCSixTQUNFLGdDQUFDLFdBQUQ7QUFDRSxJQUFBLEtBQUssRUFBRUgsS0FEVDtBQUVFLElBQUEsU0FBUyxFQUNQbEIsaUJBQWlCLElBQUlDLE9BQXJCLDhCQUFtRFUsUUFBbkQseUJBQThFQSxRQUE5RSxDQUhKO0FBS0UsSUFBQSxLQUFLLEVBQUU7QUFBRVcsTUFBQUEsT0FBTyxFQUFFbkIsU0FBUyxHQUFHLE1BQUgsR0FBWW9CO0FBQWhDO0FBTFQsS0FPRTtBQUFLLElBQUEsU0FBUyxFQUFFZDtBQUFoQixLQUNFLGdDQUFDLEtBQUQ7QUFBTyxJQUFBLE9BQU8sa0JBQVdELE1BQVgsY0FBcUJELEVBQXJCLENBQWQ7QUFBeUMsSUFBQSxTQUFTLHFCQUFjVSxjQUFkO0FBQWxELEtBQ0dQLEtBREgsRUFFR0csVUFBVSxHQUFHLGtEQUFILEdBQW9CLElBRmpDLENBREYsRUFLR0csb0JBQW9CLEtBQUssT0FBekIsSUFBb0NELFdBQXBDLEdBQ0NBLFdBQVcsSUFBSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBOEJBLFdBQTlCLENBRGhCLEdBR0MsZ0NBQUMsaUJBQUQsQ0FBTyxRQUFQLFFBQ0UsZ0NBQUMsS0FBRDtBQUNFLElBQUEsRUFBRSxrQkFBV1AsTUFBWCxjQUFxQkQsRUFBckIsQ0FESjtBQUVFLElBQUEsSUFBSSxFQUFFWSxVQUFVLG9CQUFhWixFQUFiLENBRmxCO0FBR0UsSUFBQSxJQUFJLEVBQUVFLElBSFI7QUFJRSxJQUFBLEtBQUssRUFBRSxDQUFDVixLQUFELEdBQVMsRUFBVCxHQUFjQSxLQUp2QjtBQUtFLElBQUEsV0FBVyxFQUFFYSxXQUxmO0FBTUUsSUFBQSxTQUFTLEVBQUVFLFNBTmI7QUFPRSxJQUFBLFFBQVEsRUFBRUQsVUFQWjtBQVFFLElBQUEsUUFBUSxFQUFFLGtCQUFBVyxLQUFLO0FBQUEsYUFBSXBCLFVBQVUsQ0FBQ29CLEtBQUQsRUFBUTFCLEtBQVIsQ0FBZDtBQUFBLEtBUmpCO0FBU0UsSUFBQSxNQUFNLEVBQUUsZ0JBQUMwQixLQUFELEVBQVc7QUFDakJwQixNQUFBQSxVQUFVLENBQUNvQixLQUFELEVBQVExQixLQUFSLENBQVY7QUFDQUksTUFBQUEsVUFBVSxDQUFDSyxFQUFELENBQVY7QUFDRCxLQVpIO0FBYUUsd0NBQTJCQyxNQUEzQixjQUFxQ0QsRUFBckMsQ0FiRjtBQWNFLG9CQUFjLENBQUMsQ0FBQ1AsaUJBQUYsSUFBdUJDO0FBZHZDLElBREYsRUFpQkdjLFdBQVcsSUFBSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBOEJBLFdBQTlCLENBakJsQixDQVJKLEVBNEJHZixpQkFBaUIsSUFBSUMsT0FBckIsSUFDQztBQUFNLElBQUEsU0FBUyxFQUFDLGVBQWhCO0FBQWdDLElBQUEsRUFBRSxrQkFBV08sTUFBWCxjQUFxQkQsRUFBckI7QUFBbEMsS0FDR1AsaUJBREgsQ0E3QkosQ0FQRixDQURGO0FBNENELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAncmViYXNzJztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgaGlkZUZpZWxkLFxuICB1cGRhdGVGb3JtLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgZm9ybUlkLFxuICAgIHR5cGUsXG4gICAgbGFiZWwsXG4gICAgY3NzQ2xhc3MsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBtYXhMZW5ndGgsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgd2lkdGgsXG4gICAgY3VzdG9tTmFtZSxcbiAgfSA9IGZpZWxkO1xuICBjb25zdCB7IElucHV0ID0gJ2lucHV0JywgTGFiZWwgPSAnbGFiZWwnIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/ICdub25lJyA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAgPExhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfSBjbGFzc05hbWU9e2BnZi1sYWJlbCAke2xhYmVsUGxhY2VtZW50fWB9PlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICB7aXNSZXF1aXJlZCA/IDxhYmJyPio8L2FiYnI+IDogbnVsbH1cbiAgICAgICAgPC9MYWJlbD5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgIGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH1cbiAgICAgICAgICAgICAgbmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICB2YWx1ZT17IXZhbHVlID8gJycgOiB2YWx1ZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCl9XG4gICAgICAgICAgICAgIG9uQmx1cj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH1cbiAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXshIXZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXX0=