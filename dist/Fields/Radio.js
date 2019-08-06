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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUmFkaW8uanN4Il0sIm5hbWVzIjpbImZvcm1hdE1vbmV5IiwiYW1vdW50IiwiZGVjaW1hbENvdW50IiwiZGVjaW1hbCIsInRob3VzYW5kcyIsIk1hdGgiLCJhYnMiLCJpc05hTiIsIm5lZ2F0aXZlU2lnbiIsImkiLCJwYXJzZUludCIsIk51bWJlciIsInRvRml4ZWQiLCJ0b1N0cmluZyIsImoiLCJsZW5ndGgiLCJzdWJzdHIiLCJyZXBsYWNlIiwic2xpY2UiLCJlIiwiY29uc29sZSIsImxvZyIsIlJhZGlvIiwib3RoZXJWYWx1ZSIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsInRhcmdldCIsInN0YXRlIiwib3RoZXJSYWRpbyIsImNsaWNrIiwiY2hlY2tlZCIsInNldFN0YXRlIiwib3RoZXJDaG9pc2UiLCJmb2N1cyIsInByb3BzIiwiZmllbGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwidXBkYXRlRm9ybSIsImhpZGVGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJpZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwiaXNSZXF1aXJlZCIsImNob2ljZXMiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJSYWRpb2dyb3VwIiwiTGFiZWwiLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwibWFwIiwiY2hvaWNlIiwiZXZlbnQiLCJ0ZXh0IiwiZW5hYmxlT3RoZXJDaG9pY2UiLCJzZXRGb2N1cyIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbkNoYW5nZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxXQUFULENBQXFCQyxNQUFyQixFQUErRTtBQUFBLE1BQWxEQyxZQUFrRCx1RUFBbkMsQ0FBbUM7QUFBQSxNQUFoQ0MsT0FB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QUFFLGlCQUFBTCxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDNEMsT0FBTCxDQUFhNUMsQ0FBYixDQUFKO0FBQUEsU0FKWjtBQUtFLFFBQUEsTUFBTSxFQUFFLGdCQUFDQSxDQUFELEVBQU87QUFDYm9CLFVBQUFBLFVBQVUsQ0FBQ3BCLENBQUQsRUFBSWdCLEtBQUosQ0FBVjs7QUFDQSxVQUFBLE1BQUksQ0FBQzZCLE1BQUwsQ0FBWTdDLENBQVo7QUFDRCxTQVJIO0FBU0UsUUFBQSxRQUFRLEVBQUUsa0JBQUNBLENBQUQsRUFBTztBQUNmO0FBQ0E7QUFDQSxVQUFBLE1BQUksQ0FBQzhDLFFBQUwsQ0FBYzlDLENBQWQ7QUFDRCxTQWJIO0FBY0UsUUFBQSxHQUFHLEVBQUUsYUFBQUEsQ0FBQztBQUFBLGlCQUFLLE1BQUksQ0FBQ2EsV0FBTCxHQUFtQmIsQ0FBeEI7QUFBQTtBQWRSLFFBYkYsQ0FsQkosRUFpREc2QixXQUFXLElBQUk7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQThCQSxXQUE5QixDQWpEbEIsQ0FSSixFQTRER1osaUJBQWlCLElBQUlDLE9BQXJCLElBQ0M7QUFBTSxRQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFnQyxRQUFBLEVBQUUsa0JBQVdLLEVBQVg7QUFBbEMsU0FDR04saUJBREgsQ0E3REosQ0FQRixDQURGO0FBNEVEOzs7O0VBOUlpQjhCLGdCOztlQWlKTDVDLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAncmViYXNzJztcblxuZnVuY3Rpb24gZm9ybWF0TW9uZXkoYW1vdW50LCBkZWNpbWFsQ291bnQgPSAyLCBkZWNpbWFsID0gJy4nLCB0aG91c2FuZHMgPSAnLCcpIHtcbiAgdHJ5IHtcbiAgICBkZWNpbWFsQ291bnQgPSBNYXRoLmFicyhkZWNpbWFsQ291bnQpO1xuICAgIGRlY2ltYWxDb3VudCA9IGlzTmFOKGRlY2ltYWxDb3VudCkgPyAyIDogZGVjaW1hbENvdW50O1xuXG4gICAgY29uc3QgbmVnYXRpdmVTaWduID0gYW1vdW50IDwgMCA/ICctJyA6ICcnO1xuXG4gICAgY29uc3QgaSA9IHBhcnNlSW50KChhbW91bnQgPSBNYXRoLmFicyhOdW1iZXIoYW1vdW50KSB8fCAwKS50b0ZpeGVkKGRlY2ltYWxDb3VudCkpKS50b1N0cmluZygpO1xuICAgIGNvbnN0IGogPSBpLmxlbmd0aCA+IDMgPyBpLmxlbmd0aCAlIDMgOiAwO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIG5lZ2F0aXZlU2lnblxuICAgICAgKyAoaiA/IGkuc3Vic3RyKDAsIGopICsgdGhvdXNhbmRzIDogJycpXG4gICAgICArIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBgJDEke3Rob3VzYW5kc31gKVxuICAgICAgKyAoZGVjaW1hbENvdW50XG4gICAgICAgID8gZGVjaW1hbFxuICAgICAgICAgICsgTWF0aC5hYnMoYW1vdW50IC0gaSlcbiAgICAgICAgICAgIC50b0ZpeGVkKGRlY2ltYWxDb3VudClcbiAgICAgICAgICAgIC5zbGljZSgyKVxuICAgICAgICA6ICcnKVxuICAgICk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxufVxuXG5jbGFzcyBSYWRpbyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG90aGVyVmFsdWU6IGZhbHNlLFxuICAgIGlucHV0VmFsdWU6IGZhbHNlLFxuICB9O1xuXG4gIG9uRm9jdXMgPSAoZSkgPT4ge1xuICAgIGxldCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBjb25zdCB7IG90aGVyVmFsdWUsIGlucHV0VmFsdWUgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAob3RoZXJWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHZhbHVlID0gJyc7XG4gICAgfVxuICAgIHRoaXMub3RoZXJSYWRpby5jbGljaygpO1xuICAgIHRoaXMub3RoZXJSYWRpby5jaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogdmFsdWUgfSk7XG4gIH07XG5cbiAgb25CbHVyID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBpZiAodmFsdWUucmVwbGFjZSgnICcsICcnKSA9PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IHRoaXMuc3RhdGUub3RoZXJWYWx1ZSB9KTtcbiAgICAgIHRoaXMub3RoZXJSYWRpby5jaGVja2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiBmb3JtYXRNb25leSh2YWx1ZSkgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBzZXRGb2N1cyA9IChlKSA9PiB7XG4gICAgdGhpcy5vdGhlckNob2lzZS5mb2N1cygpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmaWVsZCxcbiAgICAgIHZhbHVlLFxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgICB0b3VjaGVkLFxuICAgICAgc2V0VG91Y2hlZCxcbiAgICAgIHVwZGF0ZUZvcm0sXG4gICAgICBoaWRlRmllbGQsXG4gICAgICBzdHlsZWRDb21wb25lbnRzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgdHlwZSxcbiAgICAgIGxhYmVsLFxuICAgICAgY3NzQ2xhc3MsXG4gICAgICBpc1JlcXVpcmVkLFxuICAgICAgY2hvaWNlcyxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgICBsYWJlbFBsYWNlbWVudCxcbiAgICAgIHdpZHRoLFxuICAgICAgY3VzdG9tTmFtZSxcbiAgICB9ID0gZmllbGQ7XG4gICAgY29uc3QgeyBpbnB1dFZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgeyBSYWRpb2dyb3VwID0gJ2ZpZWxkc2V0JywgTGFiZWwgPSAnbGVnZW5kJyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICAgIH1cbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gJ25vbmUnIDogdW5kZWZpbmVkIH19XG4gICAgICA+XG4gICAgICAgIDxSYWRpb2dyb3VwIGNsYXNzTmFtZT1cInJhZGlvc1wiPlxuICAgICAgICAgIDxMYWJlbCBhcz1cImxlZ2VuZFwiIGNsYXNzTmFtZT17YGdyb3VwLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICB7aXNSZXF1aXJlZCA/IDxhYmJyPio8L2FiYnI+IDogbnVsbH1cbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAge2Nob2ljZXMubWFwKChjaG9pY2UsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0ga2V5PXtjaG9pY2UudmFsdWV9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtpZH1fJHtpfWB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Nob2ljZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsdWUgPT09IGNob2ljZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGlucHV0XyR7aWR9XyR7aX1gfT57Y2hvaWNlLnRleHR9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIHtmaWVsZC5lbmFibGVPdGhlckNob2ljZSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3R5cGV9IG90aGVyLWNob2lzZWB9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtpZH1fJHtjaG9pY2VzLmxlbmd0aH1gfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtlID0+ICh0aGlzLm90aGVyUmFkaW8gPSBlKX1cbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17ZSA9PiB0aGlzLnNldEZvY3VzKGUpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7aWR9XyR7Y2hvaWNlcy5sZW5ndGh9X290aGVyYH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17ZSA9PiB0aGlzLm9uRm9jdXMoZSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGUsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQmx1cihlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlRm9ybShlLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtlID0+ICh0aGlzLm90aGVyQ2hvaXNlID0gZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgJiYgKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtpZH1gfT5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUmFkaW9ncm91cD5cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaW87XG4iXX0=