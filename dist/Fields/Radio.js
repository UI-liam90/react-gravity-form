"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _rebass = require("rebass");

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
          styledComponents = _this$props.styledComponents;
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
          customName = field.customName;
      var inputValue = this.state.inputValue;

      var _ref = styledComponents || false,
          _ref$Radiogroup = _ref.Radiogroup,
          Radiogroup = _ref$Radiogroup === void 0 ? 'fieldset' : _ref$Radiogroup,
          _ref$Label = _ref.Label,
          Label = _ref$Label === void 0 ? 'legend' : _ref$Label;

      return _react["default"].createElement(_rebass.Box, {
        width: width,
        className: validationMessage && touched ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
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
        value: inputValue,
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
        },
        ref: function ref(e) {
          return _this2.otherChoise = e;
        }
      })), description && _react["default"].createElement("div", {
        className: "description"
      }, description)), validationMessage && touched && _react["default"].createElement("span", {
        className: "error-message",
        id: "error_".concat(formId, "_").concat(id)
      }, validationMessage)));
    }
  }]);

  return Radio;
}(_react.Component);

var _default = Radio;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUmFkaW8uanN4Il0sIm5hbWVzIjpbImZvcm1hdE1vbmV5IiwiYW1vdW50IiwiZGVjaW1hbENvdW50IiwiZGVjaW1hbCIsInRob3VzYW5kcyIsIk1hdGgiLCJhYnMiLCJpc05hTiIsIm5lZ2F0aXZlU2lnbiIsImkiLCJwYXJzZUludCIsIk51bWJlciIsInRvRml4ZWQiLCJ0b1N0cmluZyIsImoiLCJsZW5ndGgiLCJzdWJzdHIiLCJyZXBsYWNlIiwic2xpY2UiLCJlIiwiY29uc29sZSIsImxvZyIsIlJhZGlvIiwib3RoZXJWYWx1ZSIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsInRhcmdldCIsInN0YXRlIiwib3RoZXJSYWRpbyIsImNsaWNrIiwiY2hlY2tlZCIsInNldFN0YXRlIiwib3RoZXJDaG9pc2UiLCJmb2N1cyIsInByb3BzIiwiZmllbGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwidXBkYXRlRm9ybSIsImhpZGVGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJpZCIsImZvcm1JZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwiaXNSZXF1aXJlZCIsImNob2ljZXMiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJSYWRpb2dyb3VwIiwiTGFiZWwiLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwibWFwIiwiY2hvaWNlIiwiZXZlbnQiLCJ0ZXh0IiwiZW5hYmxlT3RoZXJDaG9pY2UiLCJzZXRGb2N1cyIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbkNoYW5nZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxXQUFULENBQXFCQyxNQUFyQixFQUErRTtBQUFBLE1BQWxEQyxZQUFrRCx1RUFBbkMsQ0FBbUM7QUFBQSxN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QUFxQkQsRUFBckIsY0FBMkJNLE9BQU8sQ0FBQ2pDLE1BQW5DLFdBREo7QUFFRSxRQUFBLElBQUksRUFBQyxNQUZQO0FBR0UsUUFBQSxLQUFLLEVBQUVTLFVBSFQ7QUFJRSxRQUFBLE9BQU8sRUFBRSxpQkFBQUwsQ0FBQztBQUFBLGlCQUFJLE1BQUksQ0FBQzZDLE9BQUwsQ0FBYTdDLENBQWIsQ0FBSjtBQUFBLFNBSlo7QUFLRSxRQUFBLE1BQU0sRUFBRSxnQkFBQ0EsQ0FBRCxFQUFPO0FBQ2JvQixVQUFBQSxVQUFVLENBQUNwQixDQUFELEVBQUlnQixLQUFKLENBQVY7O0FBQ0EsVUFBQSxNQUFJLENBQUM4QixNQUFMLENBQVk5QyxDQUFaO0FBQ0QsU0FSSDtBQVNFLFFBQUEsUUFBUSxFQUFFLGtCQUFDQSxDQUFELEVBQU87QUFDZjtBQUNBO0FBQ0EsVUFBQSxNQUFJLENBQUMrQyxRQUFMLENBQWMvQyxDQUFkO0FBQ0QsU0FiSDtBQWNFLFFBQUEsR0FBRyxFQUFFLGFBQUFBLENBQUM7QUFBQSxpQkFBSyxNQUFJLENBQUNhLFdBQUwsR0FBbUJiLENBQXhCO0FBQUE7QUFkUixRQWJGLENBbEJKLEVBaURHOEIsV0FBVyxJQUFJO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUE4QkEsV0FBOUIsQ0FqRGxCLENBUkosRUE0REdiLGlCQUFpQixJQUFJQyxPQUFyQixJQUNDO0FBQU0sUUFBQSxTQUFTLEVBQUMsZUFBaEI7QUFBZ0MsUUFBQSxFQUFFLGtCQUFXTSxNQUFYLGNBQXFCRCxFQUFyQjtBQUFsQyxTQUNHTixpQkFESCxDQTdESixDQVBGLENBREY7QUE0RUQ7Ozs7RUEvSWlCK0IsZ0I7O2VBa0pMN0MsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICdyZWJhc3MnO1xuXG5mdW5jdGlvbiBmb3JtYXRNb25leShhbW91bnQsIGRlY2ltYWxDb3VudCA9IDIsIGRlY2ltYWwgPSAnLicsIHRob3VzYW5kcyA9ICcsJykge1xuICB0cnkge1xuICAgIGRlY2ltYWxDb3VudCA9IE1hdGguYWJzKGRlY2ltYWxDb3VudCk7XG4gICAgZGVjaW1hbENvdW50ID0gaXNOYU4oZGVjaW1hbENvdW50KSA/IDIgOiBkZWNpbWFsQ291bnQ7XG5cbiAgICBjb25zdCBuZWdhdGl2ZVNpZ24gPSBhbW91bnQgPCAwID8gJy0nIDogJyc7XG5cbiAgICBjb25zdCBpID0gcGFyc2VJbnQoKGFtb3VudCA9IE1hdGguYWJzKE51bWJlcihhbW91bnQpIHx8IDApLnRvRml4ZWQoZGVjaW1hbENvdW50KSkpLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgaiA9IGkubGVuZ3RoID4gMyA/IGkubGVuZ3RoICUgMyA6IDA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgbmVnYXRpdmVTaWduXG4gICAgICArIChqID8gaS5zdWJzdHIoMCwgaikgKyB0aG91c2FuZHMgOiAnJylcbiAgICAgICsgaS5zdWJzdHIoaikucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csIGAkMSR7dGhvdXNhbmRzfWApXG4gICAgICArIChkZWNpbWFsQ291bnRcbiAgICAgICAgPyBkZWNpbWFsXG4gICAgICAgICAgKyBNYXRoLmFicyhhbW91bnQgLSBpKVxuICAgICAgICAgICAgLnRvRml4ZWQoZGVjaW1hbENvdW50KVxuICAgICAgICAgICAgLnNsaWNlKDIpXG4gICAgICAgIDogJycpXG4gICAgKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG59XG5cbmNsYXNzIFJhZGlvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3RoZXJWYWx1ZTogZmFsc2UsXG4gICAgaW5wdXRWYWx1ZTogZmFsc2UsXG4gIH07XG5cbiAgb25Gb2N1cyA9IChlKSA9PiB7XG4gICAgbGV0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IHsgb3RoZXJWYWx1ZSwgaW5wdXRWYWx1ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChvdGhlclZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgdmFsdWUgPSAnJztcbiAgICB9XG4gICAgdGhpcy5vdGhlclJhZGlvLmNsaWNrKCk7XG4gICAgdGhpcy5vdGhlclJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBvbkJsdXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIGlmICh2YWx1ZS5yZXBsYWNlKCcgJywgJycpID09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogdGhpcy5zdGF0ZS5vdGhlclZhbHVlIH0pO1xuICAgICAgdGhpcy5vdGhlclJhZGlvLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IGZvcm1hdE1vbmV5KHZhbHVlKSB9KTtcbiAgICB9XG4gIH07XG5cbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IHZhbHVlIH0pO1xuICB9O1xuXG4gIHNldEZvY3VzID0gKGUpID0+IHtcbiAgICB0aGlzLm90aGVyQ2hvaXNlLmZvY3VzKCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpZWxkLFxuICAgICAgdmFsdWUsXG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgICAgIHRvdWNoZWQsXG4gICAgICBzZXRUb3VjaGVkLFxuICAgICAgdXBkYXRlRm9ybSxcbiAgICAgIGhpZGVGaWVsZCxcbiAgICAgIHN0eWxlZENvbXBvbmVudHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBmb3JtSWQsXG4gICAgICB0eXBlLFxuICAgICAgbGFiZWwsXG4gICAgICBjc3NDbGFzcyxcbiAgICAgIGlzUmVxdWlyZWQsXG4gICAgICBjaG9pY2VzLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICAgIGxhYmVsUGxhY2VtZW50LFxuICAgICAgd2lkdGgsXG4gICAgICBjdXN0b21OYW1lLFxuICAgIH0gPSBmaWVsZDtcbiAgICBjb25zdCB7IGlucHV0VmFsdWUgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCB7IFJhZGlvZ3JvdXAgPSAnZmllbGRzZXQnLCBMYWJlbCA9ICdsZWdlbmQnIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgICAgfVxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICAgID5cbiAgICAgICAgPFJhZGlvZ3JvdXAgY2xhc3NOYW1lPVwicmFkaW9zXCI+XG4gICAgICAgICAgPExhYmVsIGFzPVwibGVnZW5kXCIgY2xhc3NOYW1lPXtgZ3JvdXAtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICB7Y2hvaWNlcy5tYXAoKGNob2ljZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfSBrZXk9e2Nob2ljZS52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fJHtpfWB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Nob2ljZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsdWUgPT09IGNob2ljZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8ke2l9YH0+e2Nob2ljZS50ZXh0fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICB7ZmllbGQuZW5hYmxlT3RoZXJDaG9pY2UgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt0eXBlfSBvdGhlci1jaG9pc2VgfT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8ke2Nob2ljZXMubGVuZ3RofWB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2BpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICByZWY9e2UgPT4gKHRoaXMub3RoZXJSYWRpbyA9IGUpfVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXtlID0+IHRoaXMuc2V0Rm9jdXMoZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XyR7Y2hvaWNlcy5sZW5ndGh9X290aGVyYH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17ZSA9PiB0aGlzLm9uRm9jdXMoZSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGUsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQmx1cihlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlRm9ybShlLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtlID0+ICh0aGlzLm90aGVyQ2hvaXNlID0gZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgJiYgKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH0+XG4gICAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L1JhZGlvZ3JvdXA+XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvO1xuIl19