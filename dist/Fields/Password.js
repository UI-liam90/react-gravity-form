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
      placeholder = field.placeholder,
      isRequired = field.isRequired,
      maxLength = field.maxLength,
      description = field.description,
      descriptionPlacement = field.descriptionPlacement,
      labelPlacement = field.labelPlacement,
      width = field.width,
      customName = field.customName,
      inputs = field.inputs;

  var _ref2 = styledComponents || false,
      _ref2$Input = _ref2.Input,
      Input = _ref2$Input === void 0 ? "input" : _ref2$Input,
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
  }, _react["default"].createElement("div", {
    className: type
  }, _react["default"].createElement(Label, {
    htmlFor: "input_".concat(formId, "_").concat(id),
    className: "gf-label ".concat(labelPlacement)
  }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === "above" && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement("div", {
    className: "ginput_container ginput_container_password"
  }, inputs && inputs.length && inputs.map(function (input, i) {
    return _react["default"].createElement("span", {
      key: "input_".concat(formId, "_").concat(input.id),
      className: "".concat(inputs.length > 1 ? "ginput_".concat(i === 0 ? "left" : "right") : "medim")
    }, _react["default"].createElement(Input, {
      id: "input_".concat(formId, "_").concat(input.id, "_").concat(i),
      name: customName || "input_".concat(id).concat(i === 1 ? "_".concat(i) : ""),
      type: type,
      value: input.value,
      placeholder: placeholder,
      required: isRequired,
      autoComplete: "off",
      onChange: function onChange(event) {
        field.subId = i;
        updateForm(event, field);
      },
      onBlur: function onBlur(event) {
        updateForm(event, field);
        setTouched(id);
      },
      "aria-label": label,
      "aria-describedby": "error_".concat(formId, "_").concat(input.id, "_").concat(i),
      "aria-invalid": !!validationMessage && touched
    }), inputs && inputs.length == 2 && _react["default"].createElement("label", {
      htmlFor: "input_".concat(formId, "_").concat(input.id, "_").concat(i)
    }, input.label));
  })), validationMessage && touched && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(formId, "_").concat(id)
  }, validationMessage), description && _react["default"].createElement("div", {
    className: "description"
  }, description)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUGFzc3dvcmQuanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInN0eWxlZENvbXBvbmVudHMiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwiY3NzQ2xhc3MiLCJwbGFjZWhvbGRlciIsImlzUmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJpbnB1dHMiLCJJbnB1dCIsIkxhYmVsIiwiQm94IiwiZGlzcGxheSIsInVuZGVmaW5lZCIsImxlbmd0aCIsIm1hcCIsImlucHV0IiwiaSIsImV2ZW50Iiwic3ViSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7ZUFFZSx3QkFVVDtBQUFBLE1BVEpBLEtBU0ksUUFUSkEsS0FTSTtBQUFBLE1BUkpDLEtBUUksUUFSSkEsS0FRSTtBQUFBLE1BUEpDLGlCQU9JLFFBUEpBLGlCQU9JO0FBQUEsTUFOSkMsT0FNSSxRQU5KQSxPQU1JO0FBQUEsTUFMSkMsVUFLSSxRQUxKQSxVQUtJO0FBQUEsTUFKSkMsU0FJSSxRQUpKQSxTQUlJO0FBQUEsTUFISkMsVUFHSSxRQUhKQSxVQUdJO0FBQUEsTUFGSkMsZ0JBRUksUUFGSkEsZ0JBRUk7QUFBQSxNQUREQyxLQUNDOztBQUFBLE1BRUZDLEVBRkUsR0FnQkFULEtBaEJBLENBRUZTLEVBRkU7QUFBQSxNQUdGQyxNQUhFLEdBZ0JBVixLQWhCQSxDQUdGVSxNQUhFO0FBQUEsTUFJRkMsSUFKRSxHQWdCQVgsS0FoQkEsQ0FJRlcsSUFKRTtBQUFBLE1BS0ZDLEtBTEUsR0FnQkFaLEtBaEJBLENBS0ZZLEtBTEU7QUFBQSxNQU1GQyxRQU5FLEdBZ0JBYixLQWhCQSxDQU1GYSxRQU5FO0FBQUEsTUFPRkMsV0FQRSxHQWdCQWQsS0FoQkEsQ0FPRmMsV0FQRTtBQUFBLE1BUUZDLFVBUkUsR0FnQkFmLEtBaEJBLENBUUZlLFVBUkU7QUFBQSxNQVNGQyxTQVRFLEdBZ0JBaEIsS0FoQkEsQ0FTRmdCLFNBVEU7QUFBQSxNQVVGQyxXQVZFLEdBZ0JBakIsS0FoQkEsQ0FVRmlCLFdBVkU7QUFBQSxNQVdGQyxvQkFYRSxHQWdCQWxCLEtBaEJBLENBV0ZrQixvQkFYRTtBQUFBLE1BWUZDLGNBWkUsR0FnQkFuQixLQWhCQSxDQVlGbUIsY0FaRTtBQUFBLE1BYUZDLEtBYkUsR0FnQkFwQixLQWhCQSxDQWFGb0IsS0FiRTtBQUFBLE1BY0ZDLFVBZEUsR0FnQkFyQixLQWhCQSxDQWNGcUIsVUFkRTtBQUFBLE1BZUZDLE1BZkUsR0FnQkF0QixLQWhCQSxDQWVGc0IsTUFmRTs7QUFBQSxjQW1CRmYsZ0JBQWdCLElBQUksS0FuQmxCO0FBQUEsMEJBa0JJZ0IsS0FsQko7QUFBQSxNQWtCSUEsS0FsQkosNEJBa0JZLE9BbEJaO0FBQUEsMEJBa0JxQkMsS0FsQnJCO0FBQUEsTUFrQnFCQSxLQWxCckIsNEJBa0I2QixPQWxCN0I7QUFBQSx3QkFrQnNDQyxHQWxCdEM7QUFBQSxNQWtCc0NBLEdBbEJ0QywwQkFrQjRDLEtBbEI1Qzs7QUFvQkosU0FDRSxnQ0FBQyxHQUFEO0FBQ0UsSUFBQSxLQUFLLEVBQUVMLEtBRFQ7QUFFRSxJQUFBLFNBQVMsRUFDUGxCLGlCQUFpQixJQUFJQyxPQUFyQiw4QkFDd0JVLFFBRHhCLHlCQUVrQkEsUUFGbEIsQ0FISjtBQU9FLElBQUEsS0FBSyxFQUFFO0FBQUVhLE1BQUFBLE9BQU8sRUFBRXJCLFNBQVMsR0FBRyxNQUFILEdBQVlzQjtBQUFoQztBQVBULEtBU0U7QUFBSyxJQUFBLFNBQVMsRUFBRWhCO0FBQWhCLEtBQ0UsZ0NBQUMsS0FBRDtBQUNFLElBQUEsT0FBTyxrQkFBV0QsTUFBWCxjQUFxQkQsRUFBckIsQ0FEVDtBQUVFLElBQUEsU0FBUyxxQkFBY1UsY0FBZDtBQUZYLEtBSUdQLEtBSkgsRUFLR0csVUFBVSxHQUFHLGtEQUFILEdBQW9CLElBTGpDLENBREYsRUFRR0csb0JBQW9CLEtBQUssT0FBekIsSUFBb0NELFdBQXBDLEdBQ0NBLFdBQVcsSUFBSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBOEJBLFdBQTlCLENBRGhCLEdBR0M7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0dLLE1BQU0sSUFDTEEsTUFBTSxDQUFDTSxNQURSLElBRUNOLE1BQU0sQ0FBQ08sR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUUMsQ0FBUjtBQUFBLFdBQ1Q7QUFDRSxNQUFBLEdBQUcsa0JBQVdyQixNQUFYLGNBQXFCb0IsS0FBSyxDQUFDckIsRUFBM0IsQ0FETDtBQUVFLE1BQUEsU0FBUyxZQUNQYSxNQUFNLENBQUNNLE1BQVAsR0FBZ0IsQ0FBaEIsb0JBQ2NHLENBQUMsS0FBSyxDQUFOLEdBQVUsTUFBVixHQUFtQixPQURqQyxJQUVJLE9BSEc7QUFGWCxPQVFFLGdDQUFDLEtBQUQ7QUFDRSxNQUFBLEVBQUUsa0JBQVdyQixNQUFYLGNBQXFCb0IsS0FBSyxDQUFDckIsRUFBM0IsY0FBaUNzQixDQUFqQyxDQURKO0FBRUUsTUFBQSxJQUFJLEVBQUVWLFVBQVUsb0JBQWFaLEVBQWIsU0FBa0JzQixDQUFDLEtBQUssQ0FBTixjQUFjQSxDQUFkLElBQW9CLEVBQXRDLENBRmxCO0FBR0UsTUFBQSxJQUFJLEVBQUVwQixJQUhSO0FBSUUsTUFBQSxLQUFLLEVBQUVtQixLQUFLLENBQUM3QixLQUpmO0FBS0UsTUFBQSxXQUFXLEVBQUVhLFdBTGY7QUFNRSxNQUFBLFFBQVEsRUFBRUMsVUFOWjtBQU9FLE1BQUEsWUFBWSxFQUFDLEtBUGY7QUFRRSxNQUFBLFFBQVEsRUFBRSxrQkFBQWlCLEtBQUssRUFBSTtBQUNqQmhDLFFBQUFBLEtBQUssQ0FBQ2lDLEtBQU4sR0FBY0YsQ0FBZDtBQUNBekIsUUFBQUEsVUFBVSxDQUFDMEIsS0FBRCxFQUFRaEMsS0FBUixDQUFWO0FBQ0QsT0FYSDtBQVlFLE1BQUEsTUFBTSxFQUFFLGdCQUFBZ0MsS0FBSyxFQUFJO0FBQ2YxQixRQUFBQSxVQUFVLENBQUMwQixLQUFELEVBQVFoQyxLQUFSLENBQVY7QUFDQUksUUFBQUEsVUFBVSxDQUFDSyxFQUFELENBQVY7QUFDRCxPQWZIO0FBZ0JFLG9CQUFZRyxLQWhCZDtBQWlCRSwwQ0FBMkJGLE1BQTNCLGNBQXFDb0IsS0FBSyxDQUFDckIsRUFBM0MsY0FBaURzQixDQUFqRCxDQWpCRjtBQWtCRSxzQkFBYyxDQUFDLENBQUM3QixpQkFBRixJQUF1QkM7QUFsQnZDLE1BUkYsRUE0QkdtQixNQUFNLElBQUlBLE1BQU0sQ0FBQ00sTUFBUCxJQUFpQixDQUEzQixJQUNDO0FBQU8sTUFBQSxPQUFPLGtCQUFXbEIsTUFBWCxjQUFxQm9CLEtBQUssQ0FBQ3JCLEVBQTNCLGNBQWlDc0IsQ0FBakM7QUFBZCxPQUNHRCxLQUFLLENBQUNsQixLQURULENBN0JKLENBRFM7QUFBQSxHQUFYLENBSEosQ0FYSixFQW9ER1YsaUJBQWlCLElBQUlDLE9BQXJCLElBQ0M7QUFBTSxJQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFnQyxJQUFBLEVBQUUsa0JBQVdPLE1BQVgsY0FBcUJELEVBQXJCO0FBQWxDLEtBQ0dQLGlCQURILENBckRKLEVBeURHZSxXQUFXLElBQUk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQThCQSxXQUE5QixDQXpEbEIsQ0FURixDQURGO0FBdUVELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIGhpZGVGaWVsZCxcbiAgdXBkYXRlRm9ybSxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGZvcm1JZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIGNzc0NsYXNzLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgbWF4TGVuZ3RoLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgIGxhYmVsUGxhY2VtZW50LFxuICAgIHdpZHRoLFxuICAgIGN1c3RvbU5hbWUsXG4gICAgaW5wdXRzXG4gIH0gPSBmaWVsZDtcblxuICBjb25zdCB7IElucHV0ID0gXCJpbnB1dFwiLCBMYWJlbCA9IFwibGFiZWxcIiwgQm94ID0gXCJkaXZcIiB9ID1cbiAgICBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWRcbiAgICAgICAgICA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuICAgICAgICAgIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyBcIm5vbmVcIiA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAgPExhYmVsXG4gICAgICAgICAgaHRtbEZvcj17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfWB9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgZ2YtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfVxuICAgICAgICA+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICA8L0xhYmVsPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09IFwiYWJvdmVcIiAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2lucHV0X2NvbnRhaW5lciBnaW5wdXRfY29udGFpbmVyX3Bhc3N3b3JkXCI+XG4gICAgICAgICAgICB7aW5wdXRzICYmXG4gICAgICAgICAgICAgIGlucHV0cy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgaW5wdXRzLm1hcCgoaW5wdXQsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAga2V5PXtgaW5wdXRfJHtmb3JtSWR9XyR7aW5wdXQuaWR9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0cy5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgPyBgZ2lucHV0XyR7aSA9PT0gMCA/IFwibGVmdFwiIDogXCJyaWdodFwifWBcbiAgICAgICAgICAgICAgICAgICAgICA6IFwibWVkaW1cIlxuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aW5wdXQuaWR9XyR7aX1gfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfSR7aSA9PT0gMSA/IGBfJHtpfWAgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5zdWJJZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtgZXJyb3JfJHtmb3JtSWR9XyR7aW5wdXQuaWR9XyR7aX1gfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhdmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7aW5wdXRzICYmIGlucHV0cy5sZW5ndGggPT0gMiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aW5wdXQuaWR9XyR7aX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7aW5wdXQubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==