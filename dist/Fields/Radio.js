"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function formatMoney(amount) {
  var decimalCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var decimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
  var thousands = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ',';

  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    var negativeSign = amount < 0 ? '-' : '';
    var i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    var j = i.length > 3 ? i.length % 3 : 0;
    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1".concat(thousands)) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : '');
  } catch (e) {
    console.log(e);
  }
}

var Radio =
/*#__PURE__*/
function (_Component) {
  _inherits(Radio, _Component);

  function Radio() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Radio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Radio)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      otherValue: false,
      inputValue: false
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (e) {
      var value = e.target.value;
      var _this$state = _this.state,
          otherValue = _this$state.otherValue,
          inputValue = _this$state.inputValue;

      if (otherValue === value) {
        value = '';
      }

      _this.otherRadio.click();

      _this.otherRadio.checked = true;

      _this.setState({
        inputValue: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (e) {
      var value = e.target.value;

      if (value.replace(' ', '') == '') {
        _this.setState({
          inputValue: _this.state.otherValue
        });

        _this.otherRadio.checked = false;
      } else {
        _this.setState({
          inputValue: formatMoney(value)
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      var value = e.target.value;

      _this.setState({
        inputValue: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setFocus", function (e) {
      _this.otherChoise.focus();
    });

    return _this;
  }

  _createClass(Radio, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          field = _this$props.field,
          value = _this$props.value,
          validationMessage = _this$props.validationMessage,
          touched = _this$props.touched,
          setTouched = _this$props.setTouched,
          updateForm = _this$props.updateForm,
          hideField = _this$props.hideField,
          styledComponents = _this$props.styledComponents,
          error = _this$props.error,
          unsetError = _this$props.unsetError;
      var id = field.id,
          formId = field.formId,
          type = field.type,
          label = field.label,
          cssClass = field.cssClass,
          isRequired = field.isRequired,
          choices = field.choices,
          description = field.description,
          descriptionPlacement = field.descriptionPlacement,
          labelPlacement = field.labelPlacement,
          width = field.width,
          customName = field.customName,
          otherPlaceholder = field.otherPlaceholder;
      var inputValue = this.state.inputValue;

      var _ref = styledComponents || false,
          _ref$Radiogroup = _ref.Radiogroup,
          Radiogroup = _ref$Radiogroup === void 0 ? 'fieldset' : _ref$Radiogroup,
          _ref$Label = _ref.Label,
          Label = _ref$Label === void 0 ? 'legend' : _ref$Label,
          _ref$Box = _ref.Box,
          Box = _ref$Box === void 0 ? 'div' : _ref$Box;

      return _react["default"].createElement(Box, {
        width: width,
        className: validationMessage && touched || error ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
        style: {
          display: hideField ? 'none' : undefined
        }
      }, _react["default"].createElement(Radiogroup, {
        className: "radios"
      }, _react["default"].createElement(Label, {
        as: "legend",
        className: "group-label ".concat(labelPlacement)
      }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === 'above' && description ? description && _react["default"].createElement("div", {
        className: "description"
      }, description) : _react["default"].createElement(_react["default"].Fragment, null, choices.map(function (choice, i) {
        return _react["default"].createElement("div", {
          className: type,
          key: choice.value
        }, _react["default"].createElement("input", {
          id: "input_".concat(formId, "_").concat(id, "_").concat(i),
          type: "radio",
          name: customName || "input_".concat(id),
          value: choice.value,
          checked: value === choice.value,
          onChange: function onChange(event) {
            updateForm(event, field);
            setTouched(id);
            unsetError(id);
          }
        }), _react["default"].createElement("label", {
          htmlFor: "input_".concat(formId, "_").concat(id, "_").concat(i)
        }, choice.text));
      }), field.enableOtherChoice && _react["default"].createElement("div", {
        className: "".concat(type, " other-choise")
      }, _react["default"].createElement("input", {
        id: "input_".concat(formId, "_").concat(id, "_").concat(choices.length),
        type: "radio",
        name: "input_".concat(id),
        value: inputValue,
        onChange: function onChange(event) {
          updateForm(event, field);
          setTouched(id);
          unsetError(id);
        },
        ref: function ref(e) {
          return _this2.otherRadio = e;
        },
        onFocus: function onFocus(e) {
          return _this2.setFocus(e);
        }
      }), _react["default"].createElement("input", {
        id: "input_".concat(formId, "_").concat(id, "_").concat(choices.length, "_other"),
        type: "text",
        placeholder: otherPlaceholder || 'Other',
        value: inputValue || '',
        onFocus: function onFocus(e) {
          return _this2.onFocus(e);
        },
        onBlur: function onBlur(e) {
          updateForm(e, field);

          _this2.onBlur(e);
        },
        onChange: function onChange(e) {
          // updateForm(e, field);
          // setTouched(id);
          _this2.onChange(e);

          unsetError(id);
        },
        ref: function ref(e) {
          return _this2.otherChoise = e;
        }
      })), description && _react["default"].createElement("div", {
        className: "description"
      }, description)), (validationMessage && touched || error) && _react["default"].createElement("span", {
        className: "error-message",
        id: "error_".concat(formId, "_").concat(id)
      }, validationMessage || error)));
    }
  }]);

  return Radio;
}(_react.Component);

var _default = Radio;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUmFkaW8uanN4Il0sIm5hbWVzIjpbImZvcm1hdE1vbmV5IiwiYW1vdW50IiwiZGVjaW1hbENvdW50IiwiZGVjaW1hbCIsInRob3VzYW5kcyIsIk1hdGgiLCJhYnMiLCJpc05hTiIsIm5lZ2F0aXZlU2lnbiIsImkiLCJwYXJzZUludCIsIk51bWJlciIsInRvRml4ZWQiLCJ0b1N0cmluZyIsImoiLCJsZW5ndGgiLCJzdWJzdHIiLCJyZXBsYWNlIiwic2xpY2UiLCJlIiwiY29uc29sZSIsImxvZyIsIlJhZGlvIiwib3RoZXJWYWx1ZSIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsInRhcmdldCIsInN0YXRlIiwib3RoZXJSYWRpbyIsImNsaWNrIiwiY2hlY2tlZCIsInNldFN0YXRlIiwib3RoZXJDaG9pc2UiLCJmb2N1cyIsInByb3BzIiwiZmllbGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwidXBkYXRlRm9ybSIsImhpZGVGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJpZCIsImZvcm1JZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwiaXNSZXF1aXJlZCIsImNob2ljZXMiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJvdGhlclBsYWNlaG9sZGVyIiwiUmFkaW9ncm91cCIsIkxhYmVsIiwiQm94IiwiZGlzcGxheSIsInVuZGVmaW5lZCIsIm1hcCIsImNob2ljZSIsImV2ZW50IiwidGV4dCIsImVuYWJsZU90aGVyQ2hvaWNlIiwic2V0Rm9jdXMiLCJvbkZvY3VzIiwib25CbHVyIiwib25DaGFuZ2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsTUFBckIsRUFB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O0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUE4QkEsV0FBOUIsQ0FyRGxCLENBUkosRUFnRUcsQ0FBRWYsaUJBQWlCLElBQUlDLE9BQXRCLElBQWtDSyxLQUFuQyxLQUNDO0FBQU0sUUFBQSxTQUFTLEVBQUMsZUFBaEI7QUFBZ0MsUUFBQSxFQUFFLGtCQUFXRyxNQUFYLGNBQXFCRCxFQUFyQjtBQUFsQyxTQUNHUixpQkFBaUIsSUFBSU0sS0FEeEIsQ0FqRUosQ0FURixDQURGO0FBa0ZEOzs7O0VBeEppQjZCLGdCOztlQTJKTGpELEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBmb3JtYXRNb25leShhbW91bnQsIGRlY2ltYWxDb3VudCA9IDIsIGRlY2ltYWwgPSAnLicsIHRob3VzYW5kcyA9ICcsJykge1xuICB0cnkge1xuICAgIGRlY2ltYWxDb3VudCA9IE1hdGguYWJzKGRlY2ltYWxDb3VudCk7XG4gICAgZGVjaW1hbENvdW50ID0gaXNOYU4oZGVjaW1hbENvdW50KSA/IDIgOiBkZWNpbWFsQ291bnQ7XG5cbiAgICBjb25zdCBuZWdhdGl2ZVNpZ24gPSBhbW91bnQgPCAwID8gJy0nIDogJyc7XG5cbiAgICBjb25zdCBpID0gcGFyc2VJbnQoKGFtb3VudCA9IE1hdGguYWJzKE51bWJlcihhbW91bnQpIHx8IDApLnRvRml4ZWQoZGVjaW1hbENvdW50KSkpLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgaiA9IGkubGVuZ3RoID4gMyA/IGkubGVuZ3RoICUgMyA6IDA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgbmVnYXRpdmVTaWduXG4gICAgICArIChqID8gaS5zdWJzdHIoMCwgaikgKyB0aG91c2FuZHMgOiAnJylcbiAgICAgICsgaS5zdWJzdHIoaikucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csIGAkMSR7dGhvdXNhbmRzfWApXG4gICAgICArIChkZWNpbWFsQ291bnRcbiAgICAgICAgPyBkZWNpbWFsXG4gICAgICAgICAgKyBNYXRoLmFicyhhbW91bnQgLSBpKVxuICAgICAgICAgICAgLnRvRml4ZWQoZGVjaW1hbENvdW50KVxuICAgICAgICAgICAgLnNsaWNlKDIpXG4gICAgICAgIDogJycpXG4gICAgKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG59XG5cbmNsYXNzIFJhZGlvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3RoZXJWYWx1ZTogZmFsc2UsXG4gICAgaW5wdXRWYWx1ZTogZmFsc2UsXG4gIH07XG5cbiAgb25Gb2N1cyA9IChlKSA9PiB7XG4gICAgbGV0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IHsgb3RoZXJWYWx1ZSwgaW5wdXRWYWx1ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChvdGhlclZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgdmFsdWUgPSAnJztcbiAgICB9XG4gICAgdGhpcy5vdGhlclJhZGlvLmNsaWNrKCk7XG4gICAgdGhpcy5vdGhlclJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBvbkJsdXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIGlmICh2YWx1ZS5yZXBsYWNlKCcgJywgJycpID09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogdGhpcy5zdGF0ZS5vdGhlclZhbHVlIH0pO1xuICAgICAgdGhpcy5vdGhlclJhZGlvLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IGZvcm1hdE1vbmV5KHZhbHVlKSB9KTtcbiAgICB9XG4gIH07XG5cbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IHZhbHVlIH0pO1xuICB9O1xuXG4gIHNldEZvY3VzID0gKGUpID0+IHtcbiAgICB0aGlzLm90aGVyQ2hvaXNlLmZvY3VzKCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpZWxkLFxuICAgICAgdmFsdWUsXG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgICAgIHRvdWNoZWQsXG4gICAgICBzZXRUb3VjaGVkLFxuICAgICAgdXBkYXRlRm9ybSxcbiAgICAgIGhpZGVGaWVsZCxcbiAgICAgIHN0eWxlZENvbXBvbmVudHMsXG4gICAgICBlcnJvcixcbiAgICAgIHVuc2V0RXJyb3IsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBmb3JtSWQsXG4gICAgICB0eXBlLFxuICAgICAgbGFiZWwsXG4gICAgICBjc3NDbGFzcyxcbiAgICAgIGlzUmVxdWlyZWQsXG4gICAgICBjaG9pY2VzLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICAgIGxhYmVsUGxhY2VtZW50LFxuICAgICAgd2lkdGgsXG4gICAgICBjdXN0b21OYW1lLFxuICAgICAgb3RoZXJQbGFjZWhvbGRlcixcbiAgICB9ID0gZmllbGQ7XG4gICAgY29uc3QgeyBpbnB1dFZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgeyBSYWRpb2dyb3VwID0gJ2ZpZWxkc2V0JywgTGFiZWwgPSAnbGVnZW5kJywgQm94ID0gJ2RpdicgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yXG4gICAgICAgICAgICA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuICAgICAgICAgICAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgICAgfVxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICAgID5cbiAgICAgICAgPFJhZGlvZ3JvdXAgY2xhc3NOYW1lPVwicmFkaW9zXCI+XG4gICAgICAgICAgPExhYmVsIGFzPVwibGVnZW5kXCIgY2xhc3NOYW1lPXtgZ3JvdXAtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICB7Y2hvaWNlcy5tYXAoKGNob2ljZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfSBrZXk9e2Nob2ljZS52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fJHtpfWB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Nob2ljZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsdWUgPT09IGNob2ljZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8ke2l9YH0+e2Nob2ljZS50ZXh0fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICB7ZmllbGQuZW5hYmxlT3RoZXJDaG9pY2UgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt0eXBlfSBvdGhlci1jaG9pc2VgfT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8ke2Nob2ljZXMubGVuZ3RofWB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2BpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICByZWY9e2UgPT4gKHRoaXMub3RoZXJSYWRpbyA9IGUpfVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXtlID0+IHRoaXMuc2V0Rm9jdXMoZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XyR7Y2hvaWNlcy5sZW5ndGh9X290aGVyYH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17b3RoZXJQbGFjZWhvbGRlciB8fCAnT3RoZXInfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17ZSA9PiB0aGlzLm9uRm9jdXMoZSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGUsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQmx1cihlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlRm9ybShlLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShlKTtcbiAgICAgICAgICAgICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtlID0+ICh0aGlzLm90aGVyQ2hvaXNlID0gZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgICAgeygodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3IpICYmIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9PlxuICAgICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgfHwgZXJyb3J9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9SYWRpb2dyb3VwPlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpbztcbiJdfQ==