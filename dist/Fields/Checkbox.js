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
      cssClass = field.cssClass,
      isRequired = field.isRequired,
      choices = field.choices,
      inputs = field.inputs,
      description = field.description,
      descriptionPlacement = field.descriptionPlacement,
      labelPlacement = field.labelPlacement,
      width = field.width,
      customName = field.customName;

  var _ref2 = styledComponents || false,
      _ref2$Checkbox = _ref2.Checkbox,
      Checkbox = _ref2$Checkbox === void 0 ? 'fieldset' : _ref2$Checkbox,
      _ref2$Label = _ref2.Label,
      Label = _ref2$Label === void 0 ? 'legend' : _ref2$Label,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? "div" : _ref2$Box;

  return _react["default"].createElement(Box, {
    width: width,
    className: validationMessage && touched ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
    style: {
      display: hideField ? 'none' : undefined
    }
  }, _react["default"].createElement(Checkbox, {
    className: "checkboxes"
  }, _react["default"].createElement(Label, {
    as: "legend",
    className: "group-label ".concat(labelPlacement)
  }, label, label && isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === 'above' && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, choices.map(function (choice, i) {
    return _react["default"].createElement("div", {
      className: type,
      key: choice.value
    }, _react["default"].createElement("input", {
      id: "input_".concat(formId, "_").concat(inputs[i].id),
      type: "checkbox",
      name: customName || "input_".concat(inputs[i].id),
      value: choice.value,
      checked: value.includes(choice.value),
      onChange: function onChange(event) {
        updateForm(event, field);
        setTouched(id);
      }
    }), _react["default"].createElement("label", {
      htmlFor: "input_".concat(formId, "_").concat(inputs[i].id)
    }, choice.text));
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description)), validationMessage && touched && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(formId, "_").concat(id)
  }, validationMessage)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvQ2hlY2tib3guanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInN0eWxlZENvbXBvbmVudHMiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwiY3NzQ2xhc3MiLCJpc1JlcXVpcmVkIiwiY2hvaWNlcyIsImlucHV0cyIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiY3VzdG9tTmFtZSIsIkNoZWNrYm94IiwiTGFiZWwiLCJCb3giLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwibWFwIiwiY2hvaWNlIiwiaSIsImluY2x1ZGVzIiwiZXZlbnQiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O2VBRWUsd0JBVVQ7QUFBQSxNQVRKQSxLQVNJLFFBVEpBLEtBU0k7QUFBQSxNQVJKQyxLQVFJLFFBUkpBLEtBUUk7QUFBQSxNQVBKQyxpQkFPSSxRQVBKQSxpQkFPSTtBQUFBLE1BTkpDLE9BTUksUUFOSkEsT0FNSTtBQUFBLE1BTEpDLFVBS0ksUUFMSkEsVUFLSTtBQUFBLE1BSkpDLFNBSUksUUFKSkEsU0FJSTtBQUFBLE1BSEpDLFVBR0ksUUFISkEsVUFHSTtBQUFBLE1BRkpDLGdCQUVJLFFBRkpBLGdCQUVJO0FBQUEsTUFEREMsS0FDQzs7QUFBQSxNQUVGQyxFQUZFLEdBZUFULEtBZkEsQ0FFRlMsRUFGRTtBQUFBLE1BR0ZDLE1BSEUsR0FlQVYsS0FmQSxDQUdGVSxNQUhFO0FBQUEsTUFJRkMsSUFKRSxHQWVBWCxLQWZBLENBSUZXLElBSkU7QUFBQSxNQUtGQyxLQUxFLEdBZUFaLEtBZkEsQ0FLRlksS0FMRTtBQUFBLE1BTUZDLFFBTkUsR0FlQWIsS0FmQSxDQU1GYSxRQU5FO0FBQUEsTUFPRkMsVUFQRSxHQWVBZCxLQWZBLENBT0ZjLFVBUEU7QUFBQSxNQVFGQyxPQVJFLEdBZUFmLEtBZkEsQ0FRRmUsT0FSRTtBQUFBLE1BU0ZDLE1BVEUsR0FlQWhCLEtBZkEsQ0FTRmdCLE1BVEU7QUFBQSxNQVVGQyxXQVZFLEdBZUFqQixLQWZBLENBVUZpQixXQVZFO0FBQUEsTUFXRkMsb0JBWEUsR0FlQWxCLEtBZkEsQ0FXRmtCLG9CQVhFO0FBQUEsTUFZRkMsY0FaRSxHQWVBbkIsS0FmQSxDQVlGbUIsY0FaRTtBQUFBLE1BYUZDLEtBYkUsR0FlQXBCLEtBZkEsQ0FhRm9CLEtBYkU7QUFBQSxNQWNGQyxVQWRFLEdBZUFyQixLQWZBLENBY0ZxQixVQWRFOztBQUFBLGNBaUI2RGQsZ0JBQWdCLElBQUksS0FqQmpGO0FBQUEsNkJBaUJJZSxRQWpCSjtBQUFBLE1BaUJJQSxRQWpCSiwrQkFpQmUsVUFqQmY7QUFBQSwwQkFpQjJCQyxLQWpCM0I7QUFBQSxNQWlCMkJBLEtBakIzQiw0QkFpQm1DLFFBakJuQztBQUFBLHdCQWlCNkNDLEdBakI3QztBQUFBLE1BaUI2Q0EsR0FqQjdDLDBCQWlCbUQsS0FqQm5EOztBQW1CSixTQUNFLGdDQUFDLEdBQUQ7QUFDRSxJQUFBLEtBQUssRUFBRUosS0FEVDtBQUVFLElBQUEsU0FBUyxFQUNQbEIsaUJBQWlCLElBQUlDLE9BQXJCLDhCQUFtRFUsUUFBbkQseUJBQThFQSxRQUE5RSxDQUhKO0FBS0UsSUFBQSxLQUFLLEVBQUU7QUFBRVksTUFBQUEsT0FBTyxFQUFFcEIsU0FBUyxHQUFHLE1BQUgsR0FBWXFCO0FBQWhDO0FBTFQsS0FPRSxnQ0FBQyxRQUFEO0FBQVUsSUFBQSxTQUFTLEVBQUM7QUFBcEIsS0FDRSxnQ0FBQyxLQUFEO0FBQU8sSUFBQSxFQUFFLEVBQUMsUUFBVjtBQUFtQixJQUFBLFNBQVMsd0JBQWlCUCxjQUFqQjtBQUE1QixLQUNHUCxLQURILEVBRUdBLEtBQUssSUFBSUUsVUFBVCxHQUFzQixrREFBdEIsR0FBdUMsSUFGMUMsQ0FERixFQUtHSSxvQkFBb0IsS0FBSyxPQUF6QixJQUFvQ0QsV0FBcEMsR0FDQ0EsV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0FEaEIsR0FHQyxnQ0FBQyxpQkFBRCxDQUFPLFFBQVAsUUFDR0YsT0FBTyxDQUFDWSxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxDQUFUO0FBQUEsV0FDWDtBQUFLLE1BQUEsU0FBUyxFQUFFbEIsSUFBaEI7QUFBc0IsTUFBQSxHQUFHLEVBQUVpQixNQUFNLENBQUMzQjtBQUFsQyxPQUNFO0FBQ0UsTUFBQSxFQUFFLGtCQUFXUyxNQUFYLGNBQXFCTSxNQUFNLENBQUNhLENBQUQsQ0FBTixDQUFVcEIsRUFBL0IsQ0FESjtBQUVFLE1BQUEsSUFBSSxFQUFDLFVBRlA7QUFHRSxNQUFBLElBQUksRUFBRVksVUFBVSxvQkFBYUwsTUFBTSxDQUFDYSxDQUFELENBQU4sQ0FBVXBCLEVBQXZCLENBSGxCO0FBSUUsTUFBQSxLQUFLLEVBQUVtQixNQUFNLENBQUMzQixLQUpoQjtBQUtFLE1BQUEsT0FBTyxFQUFFQSxLQUFLLENBQUM2QixRQUFOLENBQWVGLE1BQU0sQ0FBQzNCLEtBQXRCLENBTFg7QUFNRSxNQUFBLFFBQVEsRUFBRSxrQkFBQzhCLEtBQUQsRUFBVztBQUNuQnpCLFFBQUFBLFVBQVUsQ0FBQ3lCLEtBQUQsRUFBUS9CLEtBQVIsQ0FBVjtBQUNBSSxRQUFBQSxVQUFVLENBQUNLLEVBQUQsQ0FBVjtBQUNEO0FBVEgsTUFERixFQVlFO0FBQU8sTUFBQSxPQUFPLGtCQUFXQyxNQUFYLGNBQXFCTSxNQUFNLENBQUNhLENBQUQsQ0FBTixDQUFVcEIsRUFBL0I7QUFBZCxPQUFvRG1CLE1BQU0sQ0FBQ0ksSUFBM0QsQ0FaRixDQURXO0FBQUEsR0FBWixDQURILEVBaUJHZixXQUFXLElBQUk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQThCQSxXQUE5QixDQWpCbEIsQ0FSSixFQTRCR2YsaUJBQWlCLElBQUlDLE9BQXJCLElBQ0M7QUFBTSxJQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFnQyxJQUFBLEVBQUUsa0JBQVdPLE1BQVgsY0FBcUJELEVBQXJCO0FBQWxDLEtBQ0dQLGlCQURILENBN0JKLENBUEYsQ0FERjtBQTRDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgaGlkZUZpZWxkLFxuICB1cGRhdGVGb3JtLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgZm9ybUlkLFxuICAgIHR5cGUsXG4gICAgbGFiZWwsXG4gICAgY3NzQ2xhc3MsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBjaG9pY2VzLFxuICAgIGlucHV0cyxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBjdXN0b21OYW1lLFxuICB9ID0gZmllbGQ7XG5cbiAgY29uc3QgeyBDaGVja2JveCA9ICdmaWVsZHNldCcsIExhYmVsID0gJ2xlZ2VuZCcsIEJveCA9IFwiZGl2XCIgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICA+XG4gICAgICA8Q2hlY2tib3ggY2xhc3NOYW1lPVwiY2hlY2tib3hlc1wiPlxuICAgICAgICA8TGFiZWwgYXM9XCJsZWdlbmRcIiBjbGFzc05hbWU9e2Bncm91cC1sYWJlbCAke2xhYmVsUGxhY2VtZW50fWB9PlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICB7bGFiZWwgJiYgaXNSZXF1aXJlZCA/IDxhYmJyPio8L2FiYnI+IDogbnVsbH1cbiAgICAgICAgPC9MYWJlbD5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgIGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge2Nob2ljZXMubWFwKChjaG9pY2UsIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9IGtleT17Y2hvaWNlLnZhbHVlfT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aW5wdXRzW2ldLmlkfWB9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgbmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpbnB1dHNbaV0uaWR9YH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaG9pY2UudmFsdWV9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWx1ZS5pbmNsdWRlcyhjaG9pY2UudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aW5wdXRzW2ldLmlkfWB9PntjaG9pY2UudGV4dH08L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L0NoZWNrYm94PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==