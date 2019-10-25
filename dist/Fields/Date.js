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
      inputs = field.inputs,
      customName = field.customName;

  var _ref2 = styledComponents || false,
      _ref2$Input = _ref2.Input,
      Input = _ref2$Input === void 0 ? 'input' : _ref2$Input,
      _ref2$Label = _ref2.Label,
      Label = _ref2$Label === void 0 ? 'label' : _ref2$Label,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? "div" : _ref2$Box;

  return _react["default"].createElement(Box, {
    width: width,
    className: validationMessage && touched ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
    style: {
      display: hideField ? 'none' : undefined
    }
  }, _react["default"].createElement(Label, {
    htmlFor: "input_".concat(formId, "_").concat(id),
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
      id: "input_".concat(formId, "_").concat(id, "_").concat(index),
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
      htmlFor: "input_".concat(formId, "_").concat(id, "_").concat(index),
      className: "hide-label"
    }, item.label), validationMessage && touched && validationMessage[index] && index === validationMessage[index].index && validationMessage[index].message && _react["default"].createElement("span", {
      className: "error-message",
      id: "error_".concat(formId, "_").concat(item.id)
    }, validationMessage[index].message));
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description))));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvRGF0ZS5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsInByb3BzIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJjc3NDbGFzcyIsInBsYWNlaG9sZGVyIiwiaXNSZXF1aXJlZCIsIm1heExlbmd0aCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiaW5wdXRzIiwiY3VzdG9tTmFtZSIsIklucHV0IiwiTGFiZWwiLCJCb3giLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwibWFwIiwiaXRlbSIsImluZGV4IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZXZlbnQiLCJzdWJJZCIsImRhdGVMYWJlbCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7ZUFFZSx3QkFVVDtBQUFBLE1BVEpBLEtBU0ksUUFUSkEsS0FTSTtBQUFBLE1BUkpDLEtBUUksUUFSSkEsS0FRSTtBQUFBLE1BUEpDLGlCQU9JLFFBUEpBLGlCQU9JO0FBQUEsTUFOSkMsT0FNSSxRQU5KQSxPQU1JO0FBQUEsTUFMSkMsVUFLSSxRQUxKQSxVQUtJO0FBQUEsTUFKSkMsU0FJSSxRQUpKQSxTQUlJO0FBQUEsTUFISkMsVUFHSSxRQUhKQSxVQUdJO0FBQUEsTUFGSkMsZ0JBRUksUUFGSkEsZ0JBRUk7QUFBQSxNQUREQyxLQUNDOztBQUFBLE1BRUZDLEVBRkUsR0FnQkFULEtBaEJBLENBRUZTLEVBRkU7QUFBQSxNQUdGQyxNQUhFLEdBZ0JBVixLQWhCQSxDQUdGVSxNQUhFO0FBQUEsTUFJRkMsSUFKRSxHQWdCQVgsS0FoQkEsQ0FJRlcsSUFKRTtBQUFBLE1BS0ZDLEtBTEUsR0FnQkFaLEtBaEJBLENBS0ZZLEtBTEU7QUFBQSxNQU1GQyxRQU5FLEdBZ0JBYixLQWhCQSxDQU1GYSxRQU5FO0FBQUEsTUFPRkMsV0FQRSxHQWdCQWQsS0FoQkEsQ0FPRmMsV0FQRTtBQUFBLE1BUUZDLFVBUkUsR0FnQkFmLEtBaEJBLENBUUZlLFVBUkU7QUFBQSxNQVNGQyxTQVRFLEdBZ0JBaEIsS0FoQkEsQ0FTRmdCLFNBVEU7QUFBQSxNQVVGQyxXQVZFLEdBZ0JBakIsS0FoQkEsQ0FVRmlCLFdBVkU7QUFBQSxNQVdGQyxvQkFYRSxHQWdCQWxCLEtBaEJBLENBV0ZrQixvQkFYRTtBQUFBLE1BWUZDLGNBWkUsR0FnQkFuQixLQWhCQSxDQVlGbUIsY0FaRTtBQUFBLE1BYUZDLEtBYkUsR0FnQkFwQixLQWhCQSxDQWFGb0IsS0FiRTtBQUFBLE1BY0ZDLE1BZEUsR0FnQkFyQixLQWhCQSxDQWNGcUIsTUFkRTtBQUFBLE1BZUZDLFVBZkUsR0FnQkF0QixLQWhCQSxDQWVGc0IsVUFmRTs7QUFBQSxjQWtCc0RmLGdCQUFnQixJQUFJLEtBbEIxRTtBQUFBLDBCQWtCSWdCLEtBbEJKO0FBQUEsTUFrQklBLEtBbEJKLDRCQWtCWSxPQWxCWjtBQUFBLDBCQWtCcUJDLEtBbEJyQjtBQUFBLE1Ba0JxQkEsS0FsQnJCLDRCQWtCNkIsT0FsQjdCO0FBQUEsd0JBa0JzQ0MsR0FsQnRDO0FBQUEsTUFrQnNDQSxHQWxCdEMsMEJBa0I0QyxLQWxCNUM7O0FBb0JKLFNBQ0UsZ0NBQUMsR0FBRDtBQUNFLElBQUEsS0FBSyxFQUFFTCxLQURUO0FBRUUsSUFBQSxTQUFTLEVBQ1BsQixpQkFBaUIsSUFBSUMsT0FBckIsOEJBQW1EVSxRQUFuRCx5QkFBOEVBLFFBQTlFLENBSEo7QUFLRSxJQUFBLEtBQUssRUFBRTtBQUFFYSxNQUFBQSxPQUFPLEVBQUVyQixTQUFTLEdBQUcsTUFBSCxHQUFZc0I7QUFBaEM7QUFMVCxLQU9FLGdDQUFDLEtBQUQ7QUFBTyxJQUFBLE9BQU8sa0JBQVdqQixNQUFYLGNBQXFCRCxFQUFyQixDQUFkO0FBQXlDLElBQUEsU0FBUyxxQkFBY1UsY0FBZDtBQUFsRCxLQUNHUCxLQURILEVBRUdHLFVBQVUsR0FBRyxrREFBSCxHQUFvQixJQUZqQyxDQVBGLEVBV0U7QUFBSyxJQUFBLFNBQVMsRUFBRUo7QUFBaEIsS0FDR08sb0JBQW9CLEtBQUssT0FBekIsSUFBb0NELFdBQXBDLEdBQ0NBLFdBQVcsSUFBSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBOEJBLFdBQTlCLENBRGhCLEdBR0MsZ0NBQUMsaUJBQUQsQ0FBTyxRQUFQLFFBQ0dJLE1BQU0sSUFDRkEsTUFBTSxDQUFDTyxHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsV0FDWjtBQUFLLE1BQUEsU0FBUyxFQUFFbkIsSUFBaEI7QUFBc0IsTUFBQSxHQUFHLEVBQUVrQixJQUFJLENBQUNwQjtBQUFoQyxPQUNFLGdDQUFDLEtBQUQ7QUFDRSxNQUFBLEVBQUUsa0JBQVdDLE1BQVgsY0FBcUJELEVBQXJCLGNBQTJCcUIsS0FBM0IsQ0FESjtBQUVFLE1BQUEsSUFBSSxFQUFDLFFBRlA7QUFHRSxNQUFBLElBQUksRUFBRVIsVUFBVSxvQkFBYWIsRUFBYixPQUhsQjtBQUlFLE1BQUEsV0FBVyxFQUFFb0IsSUFBSSxDQUFDZixXQUpwQjtBQUtFLE1BQUEsSUFBSSxFQUFDLEdBTFA7QUFNRSxNQUFBLEdBQUcsRUFBQyxHQU5OO0FBT0UsTUFBQSxHQUFHLEVBQ0RlLElBQUksQ0FBQ2pCLEtBQUwsS0FBZSxJQUFmLEdBQ0ksRUFESixHQUVJaUIsSUFBSSxDQUFDakIsS0FBTCxLQUFlLElBQWYsR0FDRSxFQURGLEdBRUUsSUFBSW1CLElBQUosR0FBV0MsV0FBWCxLQUEyQixDQVpyQztBQWNFLE1BQUEsU0FBUyxFQUFFSCxJQUFJLENBQUNqQixLQUFMLEtBQWUsTUFBZixHQUF3QixDQUF4QixHQUE0QixDQWR6QztBQWVFLE1BQUEsS0FBSyxFQUFFaUIsSUFBSSxDQUFDNUIsS0FmZDtBQWdCRSxNQUFBLE1BQU0sRUFBRSxnQkFBQ2dDLEtBQUQsRUFBVztBQUNqQmpDLFFBQUFBLEtBQUssQ0FBQ2tDLEtBQU4sR0FBY0osS0FBZDtBQUNBOUIsUUFBQUEsS0FBSyxDQUFDbUMsU0FBTixHQUFrQk4sSUFBSSxDQUFDakIsS0FBdkI7QUFDQU4sUUFBQUEsVUFBVSxDQUFDMkIsS0FBRCxFQUFRakMsS0FBUixDQUFWO0FBQ0FJLFFBQUFBLFVBQVUsQ0FBQ0ssRUFBRCxDQUFWO0FBQ0Q7QUFyQkgsTUFERixFQXdCRTtBQUFPLE1BQUEsT0FBTyxrQkFBV0MsTUFBWCxjQUFxQkQsRUFBckIsY0FBMkJxQixLQUEzQixDQUFkO0FBQWtELE1BQUEsU0FBUyxFQUFDO0FBQTVELE9BQ0dELElBQUksQ0FBQ2pCLEtBRFIsQ0F4QkYsRUEyQkdWLGlCQUFpQixJQUNiQyxPQURKLElBRUlELGlCQUFpQixDQUFDNEIsS0FBRCxDQUZyQixJQUdJQSxLQUFLLEtBQUs1QixpQkFBaUIsQ0FBQzRCLEtBQUQsQ0FBakIsQ0FBeUJBLEtBSHZDLElBSUk1QixpQkFBaUIsQ0FBQzRCLEtBQUQsQ0FBakIsQ0FBeUJNLE9BSjdCLElBS0M7QUFBTSxNQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFnQyxNQUFBLEVBQUUsa0JBQVcxQixNQUFYLGNBQXFCbUIsSUFBSSxDQUFDcEIsRUFBMUI7QUFBbEMsT0FDR1AsaUJBQWlCLENBQUM0QixLQUFELENBQWpCLENBQXlCTSxPQUQ1QixDQWhDSixDQURZO0FBQUEsR0FBWCxDQUZQLEVBMENHbkIsV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0ExQ2xCLENBSkosQ0FYRixDQURGO0FBZ0VELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICB0b3VjaGVkLFxuICBzZXRUb3VjaGVkLFxuICBoaWRlRmllbGQsXG4gIHVwZGF0ZUZvcm0sXG4gIHN0eWxlZENvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBmb3JtSWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBjc3NDbGFzcyxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBpc1JlcXVpcmVkLFxuICAgIG1heExlbmd0aCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBpbnB1dHMsXG4gICAgY3VzdG9tTmFtZSxcbiAgfSA9IGZpZWxkO1xuXG4gIGNvbnN0IHsgSW5wdXQgPSAnaW5wdXQnLCBMYWJlbCA9ICdsYWJlbCcsIEJveCA9IFwiZGl2XCIgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICA+XG4gICAgICA8TGFiZWwgaHRtbEZvcj17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfWB9IGNsYXNzTmFtZT17YGdmLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgICAge2lzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG4gICAgICA8L0xhYmVsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9PlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09ICdhYm92ZScgJiYgZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7aW5wdXRzXG4gICAgICAgICAgICAgICYmIGlucHV0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpZH1bXWB9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpdGVtLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgICAgICAgICBtYXg9e1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubGFiZWwgPT09ICdNTSdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMTJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS5sYWJlbCA9PT0gJ0REJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/IDMxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpICsgMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17aXRlbS5sYWJlbCA9PT0gJ1lZWVknID8gNCA6IDJ9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnN1YklkID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0ZUxhYmVsID0gaXRlbS5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fJHtpbmRleH1gfSBjbGFzc05hbWU9XCJoaWRlLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAmJiB0b3VjaGVkXG4gICAgICAgICAgICAgICAgICAgICYmIHZhbGlkYXRpb25NZXNzYWdlW2luZGV4XVxuICAgICAgICAgICAgICAgICAgICAmJiBpbmRleCA9PT0gdmFsaWRhdGlvbk1lc3NhZ2VbaW5kZXhdLmluZGV4XG4gICAgICAgICAgICAgICAgICAgICYmIHZhbGlkYXRpb25NZXNzYWdlW2luZGV4XS5tZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aXRlbS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2VbaW5kZXhdLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==