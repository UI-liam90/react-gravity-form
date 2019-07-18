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
          hideField = _this$props.hideField;
      var id = field.id,
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
      return _react["default"].createElement(_rebass.Box, {
        width: width,
        className: validationMessage && touched ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
        style: {
          display: hideField ? 'none' : undefined
        }
      }, _react["default"].createElement("fieldset", {
        className: "radios"
      }, _react["default"].createElement("legend", {
        className: "group-label ".concat(labelPlacement)
      }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === 'above' && description ? description && _react["default"].createElement("div", {
        className: "description"
      }, description) : _react["default"].createElement(_react["default"].Fragment, null, choices.map(function (choice, i) {
        return _react["default"].createElement("div", {
          className: type,
          key: choice.value
        }, _react["default"].createElement("input", {
          id: "input_".concat(id, "_").concat(i),
          type: "radio",
          name: customName || "input_".concat(id),
          value: choice.value,
          checked: value === choice.value,
          onChange: function onChange(event) {
            updateForm(event, field);
            setTouched(id);
          }
        }), _react["default"].createElement("label", {
          htmlFor: "input_".concat(id, "_").concat(i)
        }, choice.text));
      }), field.enableOtherChoice && _react["default"].createElement("div", {
        className: "".concat(type, " other-choise")
      }, _react["default"].createElement("input", {
        id: "input_".concat(id, "_").concat(choices.length),
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
        id: "input_".concat(id, "_").concat(choices.length, "_other"),
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
        id: "error_".concat(id)
      }, validationMessage)));
    }
  }]);

  return Radio;
}(_react.Component);

var _default = Radio;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUmFkaW8uanN4Il0sIm5hbWVzIjpbImZvcm1hdE1vbmV5IiwiYW1vdW50IiwiZGVjaW1hbENvdW50IiwiZGVjaW1hbCIsInRob3VzYW5kcyIsIk1hdGgiLCJhYnMiLCJpc05hTiIsIm5lZ2F0aXZlU2lnbiIsImkiLCJwYXJzZUludCIsIk51bWJlciIsInRvRml4ZWQiLCJ0b1N0cmluZyIsImoiLCJsZW5ndGgiLCJzdWJzdHIiLCJyZXBsYWNlIiwic2xpY2UiLCJlIiwiY29uc29sZSIsImxvZyIsIlJhZGlvIiwib3RoZXJWYWx1ZSIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsInRhcmdldCIsInN0YXRlIiwib3RoZXJSYWRpbyIsImNsaWNrIiwiY2hlY2tlZCIsInNldFN0YXRlIiwib3RoZXJDaG9pc2UiLCJmb2N1cyIsInByb3BzIiwiZmllbGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwidXBkYXRlRm9ybSIsImhpZGVGaWVsZCIsImlkIiwidHlwZSIsImxhYmVsIiwiY3NzQ2xhc3MiLCJpc1JlcXVpcmVkIiwiY2hvaWNlcyIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiY3VzdG9tTmFtZSIsImRpc3BsYXkiLCJ1bmRlZmluZWQiLCJtYXAiLCJjaG9pY2UiLCJldmVudCIsInRleHQiLCJlbmFibGVPdGhlckNob2ljZSIsInNldEZvY3VzIiwib25Gb2N1cyIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLE1BQXJCLEVBQStFO0FBQUEsTUFBbERDLFlBQWtELHVFQUFuQyxDQUFtQztBQUFBLE1BQWhDQyxPQUFnQyx1RUFBdEIsR0FBc0I7QUFBQSxNQUFqQkMsU0FBaUIsdUVBQUws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LENBQUMyQyxRQUFMLENBQWMzQyxDQUFkO0FBQ0QsU0FiSDtBQWNFLFFBQUEsR0FBRyxFQUFFLGFBQUFBLENBQUM7QUFBQSxpQkFBSyxNQUFJLENBQUNhLFdBQUwsR0FBbUJiLENBQXhCO0FBQUE7QUFkUixRQWJGLENBbEJKLEVBaURHNEIsV0FBVyxJQUFJO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUE4QkEsV0FBOUIsQ0FqRGxCLENBUkosRUE0REdYLGlCQUFpQixJQUFJQyxPQUFyQixJQUNDO0FBQU0sUUFBQSxTQUFTLEVBQUMsZUFBaEI7QUFBZ0MsUUFBQSxFQUFFLGtCQUFXSSxFQUFYO0FBQWxDLFNBQ0dMLGlCQURILENBN0RKLENBUEYsQ0FERjtBQTRFRDs7OztFQTNJaUIyQixnQjs7ZUE4SUx6QyxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCB9IGZyb20gJ3JlYmFzcyc7XG5cbmZ1bmN0aW9uIGZvcm1hdE1vbmV5KGFtb3VudCwgZGVjaW1hbENvdW50ID0gMiwgZGVjaW1hbCA9ICcuJywgdGhvdXNhbmRzID0gJywnKSB7XG4gIHRyeSB7XG4gICAgZGVjaW1hbENvdW50ID0gTWF0aC5hYnMoZGVjaW1hbENvdW50KTtcbiAgICBkZWNpbWFsQ291bnQgPSBpc05hTihkZWNpbWFsQ291bnQpID8gMiA6IGRlY2ltYWxDb3VudDtcblxuICAgIGNvbnN0IG5lZ2F0aXZlU2lnbiA9IGFtb3VudCA8IDAgPyAnLScgOiAnJztcblxuICAgIGNvbnN0IGkgPSBwYXJzZUludCgoYW1vdW50ID0gTWF0aC5hYnMoTnVtYmVyKGFtb3VudCkgfHwgMCkudG9GaXhlZChkZWNpbWFsQ291bnQpKSkudG9TdHJpbmcoKTtcbiAgICBjb25zdCBqID0gaS5sZW5ndGggPiAzID8gaS5sZW5ndGggJSAzIDogMDtcblxuICAgIHJldHVybiAoXG4gICAgICBuZWdhdGl2ZVNpZ25cbiAgICAgICsgKGogPyBpLnN1YnN0cigwLCBqKSArIHRob3VzYW5kcyA6ICcnKVxuICAgICAgKyBpLnN1YnN0cihqKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgYCQxJHt0aG91c2FuZHN9YClcbiAgICAgICsgKGRlY2ltYWxDb3VudFxuICAgICAgICA/IGRlY2ltYWxcbiAgICAgICAgICArIE1hdGguYWJzKGFtb3VudCAtIGkpXG4gICAgICAgICAgICAudG9GaXhlZChkZWNpbWFsQ291bnQpXG4gICAgICAgICAgICAuc2xpY2UoMilcbiAgICAgICAgOiAnJylcbiAgICApO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gIH1cbn1cblxuY2xhc3MgUmFkaW8gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBvdGhlclZhbHVlOiBmYWxzZSxcbiAgICBpbnB1dFZhbHVlOiBmYWxzZSxcbiAgfTtcblxuICBvbkZvY3VzID0gKGUpID0+IHtcbiAgICBsZXQgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgeyBvdGhlclZhbHVlLCBpbnB1dFZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKG90aGVyVmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9ICcnO1xuICAgIH1cbiAgICB0aGlzLm90aGVyUmFkaW8uY2xpY2soKTtcbiAgICB0aGlzLm90aGVyUmFkaW8uY2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IHZhbHVlIH0pO1xuICB9O1xuXG4gIG9uQmx1ciA9IChlKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgaWYgKHZhbHVlLnJlcGxhY2UoJyAnLCAnJykgPT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiB0aGlzLnN0YXRlLm90aGVyVmFsdWUgfSk7XG4gICAgICB0aGlzLm90aGVyUmFkaW8uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogZm9ybWF0TW9uZXkodmFsdWUpIH0pO1xuICAgIH1cbiAgfTtcblxuICBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogdmFsdWUgfSk7XG4gIH07XG5cbiAgc2V0Rm9jdXMgPSAoZSkgPT4ge1xuICAgIHRoaXMub3RoZXJDaG9pc2UuZm9jdXMoKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZmllbGQsXG4gICAgICB2YWx1ZSxcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlLFxuICAgICAgdG91Y2hlZCxcbiAgICAgIHNldFRvdWNoZWQsXG4gICAgICB1cGRhdGVGb3JtLFxuICAgICAgaGlkZUZpZWxkLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgdHlwZSxcbiAgICAgIGxhYmVsLFxuICAgICAgY3NzQ2xhc3MsXG4gICAgICBpc1JlcXVpcmVkLFxuICAgICAgY2hvaWNlcyxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgICBsYWJlbFBsYWNlbWVudCxcbiAgICAgIHdpZHRoLFxuICAgICAgY3VzdG9tTmFtZSxcbiAgICB9ID0gZmllbGQ7XG4gICAgY29uc3QgeyBpbnB1dFZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgICAgfVxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICAgID5cbiAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cInJhZGlvc1wiPlxuICAgICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPXtgZ3JvdXAtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICAgIDwvbGVnZW5kPlxuICAgICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAge2Nob2ljZXMubWFwKChjaG9pY2UsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0ga2V5PXtjaG9pY2UudmFsdWV9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtpZH1fJHtpfWB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Nob2ljZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsdWUgPT09IGNob2ljZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGlucHV0XyR7aWR9XyR7aX1gfT57Y2hvaWNlLnRleHR9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIHtmaWVsZC5lbmFibGVPdGhlckNob2ljZSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3R5cGV9IG90aGVyLWNob2lzZWB9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtpZH1fJHtjaG9pY2VzLmxlbmd0aH1gfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtlID0+ICh0aGlzLm90aGVyUmFkaW8gPSBlKX1cbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17ZSA9PiB0aGlzLnNldEZvY3VzKGUpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7aWR9XyR7Y2hvaWNlcy5sZW5ndGh9X290aGVyYH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17ZSA9PiB0aGlzLm9uRm9jdXMoZSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGUsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQmx1cihlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlRm9ybShlLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtlID0+ICh0aGlzLm90aGVyQ2hvaXNlID0gZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgJiYgKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtpZH1gfT5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvO1xuIl19