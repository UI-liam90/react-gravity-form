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
          customName = field.customName;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUmFkaW8uanN4Il0sIm5hbWVzIjpbImZvcm1hdE1vbmV5IiwiYW1vdW50IiwiZGVjaW1hbENvdW50IiwiZGVjaW1hbCIsInRob3VzYW5kcyIsIk1hdGgiLCJhYnMiLCJpc05hTiIsIm5lZ2F0aXZlU2lnbiIsImkiLCJwYXJzZUludCIsIk51bWJlciIsInRvRml4ZWQiLCJ0b1N0cmluZyIsImoiLCJsZW5ndGgiLCJzdWJzdHIiLCJyZXBsYWNlIiwic2xpY2UiLCJlIiwiY29uc29sZSIsImxvZyIsIlJhZGlvIiwib3RoZXJWYWx1ZSIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsInRhcmdldCIsInN0YXRlIiwib3RoZXJSYWRpbyIsImNsaWNrIiwiY2hlY2tlZCIsInNldFN0YXRlIiwib3RoZXJDaG9pc2UiLCJmb2N1cyIsInByb3BzIiwiZmllbGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwidXBkYXRlRm9ybSIsImhpZGVGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJpZCIsImZvcm1JZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwiaXNSZXF1aXJlZCIsImNob2ljZXMiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJSYWRpb2dyb3VwIiwiTGFiZWwiLCJCb3giLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwibWFwIiwiY2hvaWNlIiwiZXZlbnQiLCJ0ZXh0IiwiZW5hYmxlT3RoZXJDaG9pY2UiLCJzZXRGb2N1cyIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbkNoYW5nZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxXQUFULENBQXFCQyxNQUFyQixFQUErRTtBQUFBLE1BQWxEQyxZQUFr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QWhCO0FBQWdDLFFBQUEsRUFBRSxrQkFBV0csTUFBWCxjQUFxQkQsRUFBckI7QUFBbEMsU0FDR1IsaUJBQWlCLElBQUlNLEtBRHhCLENBaEVKLENBVEYsQ0FERjtBQWlGRDs7OztFQXRKaUI0QixnQjs7ZUF5SkxoRCxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gZm9ybWF0TW9uZXkoYW1vdW50LCBkZWNpbWFsQ291bnQgPSAyLCBkZWNpbWFsID0gJy4nLCB0aG91c2FuZHMgPSAnLCcpIHtcbiAgdHJ5IHtcbiAgICBkZWNpbWFsQ291bnQgPSBNYXRoLmFicyhkZWNpbWFsQ291bnQpO1xuICAgIGRlY2ltYWxDb3VudCA9IGlzTmFOKGRlY2ltYWxDb3VudCkgPyAyIDogZGVjaW1hbENvdW50O1xuXG4gICAgY29uc3QgbmVnYXRpdmVTaWduID0gYW1vdW50IDwgMCA/ICctJyA6ICcnO1xuXG4gICAgY29uc3QgaSA9IHBhcnNlSW50KChhbW91bnQgPSBNYXRoLmFicyhOdW1iZXIoYW1vdW50KSB8fCAwKS50b0ZpeGVkKGRlY2ltYWxDb3VudCkpKS50b1N0cmluZygpO1xuICAgIGNvbnN0IGogPSBpLmxlbmd0aCA+IDMgPyBpLmxlbmd0aCAlIDMgOiAwO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIG5lZ2F0aXZlU2lnblxuICAgICAgKyAoaiA/IGkuc3Vic3RyKDAsIGopICsgdGhvdXNhbmRzIDogJycpXG4gICAgICArIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBgJDEke3Rob3VzYW5kc31gKVxuICAgICAgKyAoZGVjaW1hbENvdW50XG4gICAgICAgID8gZGVjaW1hbFxuICAgICAgICAgICsgTWF0aC5hYnMoYW1vdW50IC0gaSlcbiAgICAgICAgICAgIC50b0ZpeGVkKGRlY2ltYWxDb3VudClcbiAgICAgICAgICAgIC5zbGljZSgyKVxuICAgICAgICA6ICcnKVxuICAgICk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxufVxuXG5jbGFzcyBSYWRpbyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG90aGVyVmFsdWU6IGZhbHNlLFxuICAgIGlucHV0VmFsdWU6IGZhbHNlLFxuICB9O1xuXG4gIG9uRm9jdXMgPSAoZSkgPT4ge1xuICAgIGxldCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBjb25zdCB7IG90aGVyVmFsdWUsIGlucHV0VmFsdWUgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAob3RoZXJWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHZhbHVlID0gJyc7XG4gICAgfVxuICAgIHRoaXMub3RoZXJSYWRpby5jbGljaygpO1xuICAgIHRoaXMub3RoZXJSYWRpby5jaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogdmFsdWUgfSk7XG4gIH07XG5cbiAgb25CbHVyID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBpZiAodmFsdWUucmVwbGFjZSgnICcsICcnKSA9PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IHRoaXMuc3RhdGUub3RoZXJWYWx1ZSB9KTtcbiAgICAgIHRoaXMub3RoZXJSYWRpby5jaGVja2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiBmb3JtYXRNb25leSh2YWx1ZSkgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBzZXRGb2N1cyA9IChlKSA9PiB7XG4gICAgdGhpcy5vdGhlckNob2lzZS5mb2N1cygpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmaWVsZCxcbiAgICAgIHZhbHVlLFxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgICB0b3VjaGVkLFxuICAgICAgc2V0VG91Y2hlZCxcbiAgICAgIHVwZGF0ZUZvcm0sXG4gICAgICBoaWRlRmllbGQsXG4gICAgICBzdHlsZWRDb21wb25lbnRzLFxuICAgICAgZXJyb3IsXG4gICAgICB1bnNldEVycm9yLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgZm9ybUlkLFxuICAgICAgdHlwZSxcbiAgICAgIGxhYmVsLFxuICAgICAgY3NzQ2xhc3MsXG4gICAgICBpc1JlcXVpcmVkLFxuICAgICAgY2hvaWNlcyxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgICBsYWJlbFBsYWNlbWVudCxcbiAgICAgIHdpZHRoLFxuICAgICAgY3VzdG9tTmFtZSxcbiAgICB9ID0gZmllbGQ7XG4gICAgY29uc3QgeyBpbnB1dFZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgeyBSYWRpb2dyb3VwID0gJ2ZpZWxkc2V0JywgTGFiZWwgPSAnbGVnZW5kJywgQm94ID0gJ2RpdicgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yXG4gICAgICAgICAgICA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuICAgICAgICAgICAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgICAgfVxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICAgID5cbiAgICAgICAgPFJhZGlvZ3JvdXAgY2xhc3NOYW1lPVwicmFkaW9zXCI+XG4gICAgICAgICAgPExhYmVsIGFzPVwibGVnZW5kXCIgY2xhc3NOYW1lPXtgZ3JvdXAtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICB7Y2hvaWNlcy5tYXAoKGNob2ljZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfSBrZXk9e2Nob2ljZS52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fJHtpfWB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Nob2ljZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsdWUgPT09IGNob2ljZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8ke2l9YH0+e2Nob2ljZS50ZXh0fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICB7ZmllbGQuZW5hYmxlT3RoZXJDaG9pY2UgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt0eXBlfSBvdGhlci1jaG9pc2VgfT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8ke2Nob2ljZXMubGVuZ3RofWB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2BpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICByZWY9e2UgPT4gKHRoaXMub3RoZXJSYWRpbyA9IGUpfVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXtlID0+IHRoaXMuc2V0Rm9jdXMoZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XyR7Y2hvaWNlcy5sZW5ndGh9X290aGVyYH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17ZSA9PiB0aGlzLm9uRm9jdXMoZSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGUsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQmx1cihlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlRm9ybShlLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShlKTtcbiAgICAgICAgICAgICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtlID0+ICh0aGlzLm90aGVyQ2hvaXNlID0gZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgICAgeygodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3IpICYmIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9PlxuICAgICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgfHwgZXJyb3J9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9SYWRpb2dyb3VwPlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpbztcbiJdfQ==