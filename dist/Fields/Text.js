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
      placeholder = field.placeholder,
      isRequired = field.isRequired,
      maxLength = field.maxLength,
      description = field.description,
      descriptionPlacement = field.descriptionPlacement,
      labelPlacement = field.labelPlacement,
      cssClass = field.cssClass,
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
    "aria-label": label,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvVGV4dC5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsInByb3BzIiwiaWQiLCJ0eXBlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImlzUmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJjc3NDbGFzcyIsIndpZHRoIiwiY3VzdG9tTmFtZSIsIklucHV0IiwiTGFiZWwiLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7ZUFFZSx3QkFVVDtBQUFBLE1BVEpBLEtBU0ksUUFUSkEsS0FTSTtBQUFBLE1BUkpDLEtBUUksUUFSSkEsS0FRSTtBQUFBLE1BUEpDLGlCQU9JLFFBUEpBLGlCQU9JO0FBQUEsTUFOSkMsT0FNSSxRQU5KQSxPQU1JO0FBQUEsTUFMSkMsVUFLSSxRQUxKQSxVQUtJO0FBQUEsTUFKSkMsU0FJSSxRQUpKQSxTQUlJO0FBQUEsTUFISkMsVUFHSSxRQUhKQSxVQUdJO0FBQUEsTUFGSkMsZ0JBRUksUUFGSkEsZ0JBRUk7QUFBQSxNQUREQyxLQUNDOztBQUFBLE1BRUZDLEVBRkUsR0FjQVQsS0FkQSxDQUVGUyxFQUZFO0FBQUEsTUFHRkMsSUFIRSxHQWNBVixLQWRBLENBR0ZVLElBSEU7QUFBQSxNQUlGQyxLQUpFLEdBY0FYLEtBZEEsQ0FJRlcsS0FKRTtBQUFBLE1BS0ZDLFdBTEUsR0FjQVosS0FkQSxDQUtGWSxXQUxFO0FBQUEsTUFNRkMsVUFORSxHQWNBYixLQWRBLENBTUZhLFVBTkU7QUFBQSxNQU9GQyxTQVBFLEdBY0FkLEtBZEEsQ0FPRmMsU0FQRTtBQUFBLE1BUUZDLFdBUkUsR0FjQWYsS0FkQSxDQVFGZSxXQVJFO0FBQUEsTUFTRkMsb0JBVEUsR0FjQWhCLEtBZEEsQ0FTRmdCLG9CQVRFO0FBQUEsTUFVRkMsY0FWRSxHQWNBakIsS0FkQSxDQVVGaUIsY0FWRTtBQUFBLE1BV0ZDLFFBWEUsR0FjQWxCLEtBZEEsQ0FXRmtCLFFBWEU7QUFBQSxNQVlGQyxLQVpFLEdBY0FuQixLQWRBLENBWUZtQixLQVpFO0FBQUEsTUFhRkMsVUFiRSxHQWNBcEIsS0FkQSxDQWFGb0IsVUFiRTs7QUFBQSxjQWV5Q2IsZ0JBQWdCLElBQUksS0FmN0Q7QUFBQSwwQkFlSWMsS0FmSjtBQUFBLE1BZUlBLEtBZkosNEJBZVksT0FmWjtBQUFBLDBCQWVxQkMsS0FmckI7QUFBQSxNQWVxQkEsS0FmckIsNEJBZTZCLE9BZjdCOztBQWlCSixTQUNFLGdDQUFDLFdBQUQ7QUFDRSxJQUFBLEtBQUssRUFBRUgsS0FEVDtBQUVFLElBQUEsU0FBUyxFQUNQakIsaUJBQWlCLElBQUlDLE9BQXJCLDhCQUFtRGUsUUFBbkQseUJBQThFQSxRQUE5RSxDQUhKO0FBS0UsSUFBQSxLQUFLLEVBQUU7QUFBRUssTUFBQUEsT0FBTyxFQUFFbEIsU0FBUyxHQUFHLE1BQUgsR0FBWW1CO0FBQWhDO0FBTFQsS0FPRTtBQUFLLElBQUEsU0FBUyxFQUFFZDtBQUFoQixLQUNFLGdDQUFDLEtBQUQ7QUFBTyxJQUFBLE9BQU8sa0JBQVdELEVBQVgsQ0FBZDtBQUErQixJQUFBLFNBQVMscUJBQWNRLGNBQWQ7QUFBeEMsS0FDR04sS0FESCxFQUVHRSxVQUFVLEdBQUcsa0RBQUgsR0FBb0IsSUFGakMsQ0FERixFQUtHRyxvQkFBb0IsS0FBSyxPQUF6QixJQUFvQ0QsV0FBcEMsR0FDQ0EsV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0FEaEIsR0FHQyxnQ0FBQyxpQkFBRCxDQUFPLFFBQVAsUUFDRSxnQ0FBQyxLQUFEO0FBQ0UsSUFBQSxFQUFFLGtCQUFXTixFQUFYLENBREo7QUFFRSxJQUFBLElBQUksRUFBRVcsVUFBVSxvQkFBYVgsRUFBYixDQUZsQjtBQUdFLElBQUEsSUFBSSxFQUFFQyxJQUhSO0FBSUUsSUFBQSxLQUFLLEVBQUUsQ0FBQ1QsS0FBRCxHQUFTLEVBQVQsR0FBY0EsS0FKdkI7QUFLRSxJQUFBLFdBQVcsRUFBRVcsV0FMZjtBQU1FLElBQUEsU0FBUyxFQUFFRSxTQU5iO0FBT0UsSUFBQSxRQUFRLEVBQUVELFVBUFo7QUFRRSxJQUFBLFFBQVEsRUFBRSxrQkFBQVksS0FBSztBQUFBLGFBQUluQixVQUFVLENBQUNtQixLQUFELEVBQVF6QixLQUFSLENBQWQ7QUFBQSxLQVJqQjtBQVNFLElBQUEsTUFBTSxFQUFFLGdCQUFDeUIsS0FBRCxFQUFXO0FBQ2pCbkIsTUFBQUEsVUFBVSxDQUFDbUIsS0FBRCxFQUFRekIsS0FBUixDQUFWO0FBQ0FJLE1BQUFBLFVBQVUsQ0FBQ0ssRUFBRCxDQUFWO0FBQ0QsS0FaSDtBQWFFLGtCQUFZRSxLQWJkO0FBY0Usd0NBQTJCRixFQUEzQixDQWRGO0FBZUUsb0JBQWMsQ0FBQyxDQUFDUCxpQkFBRixJQUF1QkM7QUFmdkMsSUFERixFQWtCR1ksV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0FsQmxCLENBUkosRUE2QkdiLGlCQUFpQixJQUFJQyxPQUFyQixJQUNDO0FBQU0sSUFBQSxTQUFTLEVBQUMsZUFBaEI7QUFBZ0MsSUFBQSxFQUFFLGtCQUFXTSxFQUFYO0FBQWxDLEtBQ0dQLGlCQURILENBOUJKLENBUEYsQ0FERjtBQTZDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCB9IGZyb20gJ3JlYmFzcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIGhpZGVGaWVsZCxcbiAgdXBkYXRlRm9ybSxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIHR5cGUsXG4gICAgbGFiZWwsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBtYXhMZW5ndGgsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgY3NzQ2xhc3MsXG4gICAgd2lkdGgsXG4gICAgY3VzdG9tTmFtZSxcbiAgfSA9IGZpZWxkO1xuICBjb25zdCB7IElucHV0ID0gJ2lucHV0JywgTGFiZWwgPSAnbGFiZWwnIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YCA6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuICAgICAgfVxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gJ25vbmUnIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9PlxuICAgICAgICA8TGFiZWwgaHRtbEZvcj17YGlucHV0XyR7aWR9YH0gY2xhc3NOYW1lPXtgZ2YtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAge2lzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBpZD17YGlucHV0XyR7aWR9YH1cbiAgICAgICAgICAgICAgbmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICB2YWx1ZT17IXZhbHVlID8gJycgOiB2YWx1ZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCl9XG4gICAgICAgICAgICAgIG9uQmx1cj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17YGVycm9yXyR7aWR9YH1cbiAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXshIXZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2lkfWB9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==