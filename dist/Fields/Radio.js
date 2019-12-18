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
  var decimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ".";
  var thousands = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ",";

  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    var negativeSign = amount < 0 ? "-" : "";
    var i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    var j = i.length > 3 ? i.length % 3 : 0;
    return negativeSign + (j ? i.substr(0, j) + thousands : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1".concat(thousands)) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
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
        value = "";
      }

      _this.otherRadio.click();

      _this.otherRadio.checked = true;

      _this.setState({
        inputValue: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (e) {
      var value = e.target.value;

      if (value.replace(" ", "") == "") {
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
          Radiogroup = _ref$Radiogroup === void 0 ? "fieldset" : _ref$Radiogroup,
          _ref$Label = _ref.Label,
          Label = _ref$Label === void 0 ? "legend" : _ref$Label,
          _ref$Box = _ref.Box,
          Box = _ref$Box === void 0 ? "div" : _ref$Box,
          _ref$Input = _ref.Input,
          Input = _ref$Input === void 0 ? "input" : _ref$Input;

      return _react["default"].createElement(Box, {
        width: width,
        className: validationMessage && touched || error ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
        style: {
          display: hideField ? "none" : undefined
        }
      }, _react["default"].createElement(Radiogroup, {
        className: "radios"
      }, _react["default"].createElement(Label, {
        as: "legend",
        className: "group-label ".concat(labelPlacement)
      }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === "above" && description ? description && _react["default"].createElement("div", {
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
      }), _react["default"].createElement(Input, {
        id: "input_".concat(formId, "_").concat(id, "_").concat(choices.length, "_other"),
        type: "text",
        placeholder: otherPlaceholder || "Other",
        value: inputValue || "",
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
      }, description))), (validationMessage && touched || error) && _react["default"].createElement("span", {
        className: "error-message",
        id: "error_".concat(formId, "_").concat(id)
      }, validationMessage || error));
    }
  }]);

  return Radio;
}(_react.Component);

var _default = Radio;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUmFkaW8uanN4Il0sIm5hbWVzIjpbImZvcm1hdE1vbmV5IiwiYW1vdW50IiwiZGVjaW1hbENvdW50IiwiZGVjaW1hbCIsInRob3VzYW5kcyIsIk1hdGgiLCJhYnMiLCJpc05hTiIsIm5lZ2F0aXZlU2lnbiIsImkiLCJwYXJzZUludCIsIk51bWJlciIsInRvRml4ZWQiLCJ0b1N0cmluZyIsImoiLCJsZW5ndGgiLCJzdWJzdHIiLCJyZXBsYWNlIiwic2xpY2UiLCJlIiwiY29uc29sZSIsImxvZyIsIlJhZGlvIiwib3RoZXJWYWx1ZSIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsInRhcmdldCIsInN0YXRlIiwib3RoZXJSYWRpbyIsImNsaWNrIiwiY2hlY2tlZCIsInNldFN0YXRlIiwib3RoZXJDaG9pc2UiLCJmb2N1cyIsInByb3BzIiwiZmllbGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwidXBkYXRlRm9ybSIsImhpZGVGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJpZCIsImZvcm1JZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwiaXNSZXF1aXJlZCIsImNob2ljZXMiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJvdGhlclBsYWNlaG9sZGVyIiwiUmFkaW9ncm91cCIsIkxhYmVsIiwiQm94IiwiSW5wdXQiLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwibWFwIiwiY2hvaWNlIiwiZXZlbnQiLCJ0ZXh0IiwiZW5hYmxlT3RoZXJDaG9pY2UiLCJzZXRGb2N1cyIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbkNoYW5nZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxXQUFULENBQXFCQyxN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QW1CYixDQUF4QjtBQUFBO0FBaEJSLFFBZEYsQ0FyQkosRUF1REdnQyxXQUFXLElBQUk7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQThCQSxXQUE5QixDQXZEbEIsQ0FSSixDQVRGLEVBNEVHLENBQUVmLGlCQUFpQixJQUFJQyxPQUF0QixJQUFrQ0ssS0FBbkMsS0FDQztBQUFNLFFBQUEsU0FBUyxFQUFDLGVBQWhCO0FBQWdDLFFBQUEsRUFBRSxrQkFBV0csTUFBWCxjQUFxQkQsRUFBckI7QUFBbEMsU0FDR1IsaUJBQWlCLElBQUlNLEtBRHhCLENBN0VKLENBREY7QUFvRkQ7Ozs7RUEvSmlCOEIsZ0I7O2VBa0tMbEQsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gZm9ybWF0TW9uZXkoYW1vdW50LCBkZWNpbWFsQ291bnQgPSAyLCBkZWNpbWFsID0gXCIuXCIsIHRob3VzYW5kcyA9IFwiLFwiKSB7XG4gIHRyeSB7XG4gICAgZGVjaW1hbENvdW50ID0gTWF0aC5hYnMoZGVjaW1hbENvdW50KTtcbiAgICBkZWNpbWFsQ291bnQgPSBpc05hTihkZWNpbWFsQ291bnQpID8gMiA6IGRlY2ltYWxDb3VudDtcblxuICAgIGNvbnN0IG5lZ2F0aXZlU2lnbiA9IGFtb3VudCA8IDAgPyBcIi1cIiA6IFwiXCI7XG5cbiAgICBjb25zdCBpID0gcGFyc2VJbnQoXG4gICAgICAoYW1vdW50ID0gTWF0aC5hYnMoTnVtYmVyKGFtb3VudCkgfHwgMCkudG9GaXhlZChkZWNpbWFsQ291bnQpKVxuICAgICkudG9TdHJpbmcoKTtcbiAgICBjb25zdCBqID0gaS5sZW5ndGggPiAzID8gaS5sZW5ndGggJSAzIDogMDtcblxuICAgIHJldHVybiAoXG4gICAgICBuZWdhdGl2ZVNpZ24gK1xuICAgICAgKGogPyBpLnN1YnN0cigwLCBqKSArIHRob3VzYW5kcyA6IFwiXCIpICtcbiAgICAgIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBgJDEke3Rob3VzYW5kc31gKSArXG4gICAgICAoZGVjaW1hbENvdW50XG4gICAgICAgID8gZGVjaW1hbCArXG4gICAgICAgICAgTWF0aC5hYnMoYW1vdW50IC0gaSlcbiAgICAgICAgICAgIC50b0ZpeGVkKGRlY2ltYWxDb3VudClcbiAgICAgICAgICAgIC5zbGljZSgyKVxuICAgICAgICA6IFwiXCIpXG4gICAgKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG59XG5cbmNsYXNzIFJhZGlvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3RoZXJWYWx1ZTogZmFsc2UsXG4gICAgaW5wdXRWYWx1ZTogZmFsc2VcbiAgfTtcblxuICBvbkZvY3VzID0gZSA9PiB7XG4gICAgbGV0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IHsgb3RoZXJWYWx1ZSwgaW5wdXRWYWx1ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChvdGhlclZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBcIlwiO1xuICAgIH1cbiAgICB0aGlzLm90aGVyUmFkaW8uY2xpY2soKTtcbiAgICB0aGlzLm90aGVyUmFkaW8uY2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IHZhbHVlIH0pO1xuICB9O1xuXG4gIG9uQmx1ciA9IGUgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIGlmICh2YWx1ZS5yZXBsYWNlKFwiIFwiLCBcIlwiKSA9PSBcIlwiKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogdGhpcy5zdGF0ZS5vdGhlclZhbHVlIH0pO1xuICAgICAgdGhpcy5vdGhlclJhZGlvLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IGZvcm1hdE1vbmV5KHZhbHVlKSB9KTtcbiAgICB9XG4gIH07XG5cbiAgb25DaGFuZ2UgPSBlID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBzZXRGb2N1cyA9IGUgPT4ge1xuICAgIHRoaXMub3RoZXJDaG9pc2UuZm9jdXMoKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZmllbGQsXG4gICAgICB2YWx1ZSxcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlLFxuICAgICAgdG91Y2hlZCxcbiAgICAgIHNldFRvdWNoZWQsXG4gICAgICB1cGRhdGVGb3JtLFxuICAgICAgaGlkZUZpZWxkLFxuICAgICAgc3R5bGVkQ29tcG9uZW50cyxcbiAgICAgIGVycm9yLFxuICAgICAgdW5zZXRFcnJvclxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgZm9ybUlkLFxuICAgICAgdHlwZSxcbiAgICAgIGxhYmVsLFxuICAgICAgY3NzQ2xhc3MsXG4gICAgICBpc1JlcXVpcmVkLFxuICAgICAgY2hvaWNlcyxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgICBsYWJlbFBsYWNlbWVudCxcbiAgICAgIHdpZHRoLFxuICAgICAgY3VzdG9tTmFtZSxcbiAgICAgIG90aGVyUGxhY2Vob2xkZXJcbiAgICB9ID0gZmllbGQ7XG4gICAgY29uc3QgeyBpbnB1dFZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3Qge1xuICAgICAgUmFkaW9ncm91cCA9IFwiZmllbGRzZXRcIixcbiAgICAgIExhYmVsID0gXCJsZWdlbmRcIixcbiAgICAgIEJveCA9IFwiZGl2XCIsXG4gICAgICBJbnB1dCA9IFwiaW5wdXRcIlxuICAgIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvclxuICAgICAgICAgICAgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWBcbiAgICAgICAgICAgIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICAgIH1cbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gXCJub25lXCIgOiB1bmRlZmluZWQgfX1cbiAgICAgID5cbiAgICAgICAgPFJhZGlvZ3JvdXAgY2xhc3NOYW1lPVwicmFkaW9zXCI+XG4gICAgICAgICAgPExhYmVsIGFzPVwibGVnZW5kXCIgY2xhc3NOYW1lPXtgZ3JvdXAtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIHtjaG9pY2VzLm1hcCgoY2hvaWNlLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9IGtleT17Y2hvaWNlLnZhbHVlfT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8ke2l9YH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2hvaWNlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWx1ZSA9PT0gY2hvaWNlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8ke2l9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtjaG9pY2UudGV4dH1cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICB7ZmllbGQuZW5hYmxlT3RoZXJDaG9pY2UgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt0eXBlfSBvdGhlci1jaG9pc2VgfT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8ke2Nob2ljZXMubGVuZ3RofWB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2BpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtlID0+ICh0aGlzLm90aGVyUmFkaW8gPSBlKX1cbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17ZSA9PiB0aGlzLnNldEZvY3VzKGUpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8ke2Nob2ljZXMubGVuZ3RofV9vdGhlcmB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e290aGVyUGxhY2Vob2xkZXIgfHwgXCJPdGhlclwifVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZSB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXtlID0+IHRoaXMub25Gb2N1cyhlKX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGUsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQmx1cihlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZUZvcm0oZSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgIC8vIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZSA9PiAodGhpcy5vdGhlckNob2lzZSA9IGUpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICA8L1JhZGlvZ3JvdXA+XG4gICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH0+XG4gICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgfHwgZXJyb3J9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpbztcbiJdfQ==