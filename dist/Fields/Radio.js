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
          Box = _ref$Box === void 0 ? 'div' : _ref$Box,
          _ref$Input = _ref.Input,
          Input = _ref$Input === void 0 ? 'input' : _ref$Input;

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
      }), _react["default"].createElement(Input, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUmFkaW8uanN4Il0sIm5hbWVzIjpbImZvcm1hdE1vbmV5IiwiYW1vdW50IiwiZGVjaW1hbENvdW50IiwiZGVjaW1hbCIsInRob3VzYW5kcyIsIk1hdGgiLCJhYnMiLCJpc05hTiIsIm5lZ2F0aXZlU2lnbiIsImkiLCJwYXJzZUludCIsIk51bWJlciIsInRvRml4ZWQiLCJ0b1N0cmluZyIsImoiLCJsZW5ndGgiLCJzdWJzdHIiLCJyZXBsYWNlIiwic2xpY2UiLCJlIiwiY29uc29sZSIsImxvZyIsIlJhZGlvIiwib3RoZXJWYWx1ZSIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsInRhcmdldCIsInN0YXRlIiwib3RoZXJSYWRpbyIsImNsaWNrIiwiY2hlY2tlZCIsInNldFN0YXRlIiwib3RoZXJDaG9pc2UiLCJmb2N1cyIsInByb3BzIiwiZmllbGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwidXBkYXRlRm9ybSIsImhpZGVGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJpZCIsImZvcm1JZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwiaXNSZXF1aXJlZCIsImNob2ljZXMiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJvdGhlclBsYWNlaG9sZGVyIiwiUmFkaW9ncm91cCIsIkxhYmVsIiwiQm94IiwiSW5wdXQiLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwibWFwIiwiY2hvaWNlIiwiZXZlbnQiLCJ0ZXh0IiwiZW5hYmxlT3RoZXJDaG9pY2UiLCJzZXRGb2N1cyIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbkNoYW5nZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxXQUFULENBQXFCQyxN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QUssTUFBSSxDQUFDYSxXQUFMLEdBQW1CYixDQUF4QjtBQUFBO0FBaEJSLFFBZEYsQ0FuQkosRUFxREdnQyxXQUFXLElBQUk7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQThCQSxXQUE5QixDQXJEbEIsQ0FSSixFQWdFRyxDQUFFZixpQkFBaUIsSUFBSUMsT0FBdEIsSUFBa0NLLEtBQW5DLEtBQ0M7QUFBTSxRQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFnQyxRQUFBLEVBQUUsa0JBQVdHLE1BQVgsY0FBcUJELEVBQXJCO0FBQWxDLFNBQ0dSLGlCQUFpQixJQUFJTSxLQUR4QixDQWpFSixDQVRGLENBREY7QUFrRkQ7Ozs7RUF6SmlCOEIsZ0I7O2VBNEpMbEQsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIGZvcm1hdE1vbmV5KGFtb3VudCwgZGVjaW1hbENvdW50ID0gMiwgZGVjaW1hbCA9ICcuJywgdGhvdXNhbmRzID0gJywnKSB7XG4gIHRyeSB7XG4gICAgZGVjaW1hbENvdW50ID0gTWF0aC5hYnMoZGVjaW1hbENvdW50KTtcbiAgICBkZWNpbWFsQ291bnQgPSBpc05hTihkZWNpbWFsQ291bnQpID8gMiA6IGRlY2ltYWxDb3VudDtcblxuICAgIGNvbnN0IG5lZ2F0aXZlU2lnbiA9IGFtb3VudCA8IDAgPyAnLScgOiAnJztcblxuICAgIGNvbnN0IGkgPSBwYXJzZUludCgoYW1vdW50ID0gTWF0aC5hYnMoTnVtYmVyKGFtb3VudCkgfHwgMCkudG9GaXhlZChkZWNpbWFsQ291bnQpKSkudG9TdHJpbmcoKTtcbiAgICBjb25zdCBqID0gaS5sZW5ndGggPiAzID8gaS5sZW5ndGggJSAzIDogMDtcblxuICAgIHJldHVybiAoXG4gICAgICBuZWdhdGl2ZVNpZ24gK1xuICAgICAgKGogPyBpLnN1YnN0cigwLCBqKSArIHRob3VzYW5kcyA6ICcnKSArXG4gICAgICBpLnN1YnN0cihqKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgYCQxJHt0aG91c2FuZHN9YCkgK1xuICAgICAgKGRlY2ltYWxDb3VudFxuICAgICAgICA/IGRlY2ltYWwgK1xuICAgICAgICAgIE1hdGguYWJzKGFtb3VudCAtIGkpXG4gICAgICAgICAgICAudG9GaXhlZChkZWNpbWFsQ291bnQpXG4gICAgICAgICAgICAuc2xpY2UoMilcbiAgICAgICAgOiAnJylcbiAgICApO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gIH1cbn1cblxuY2xhc3MgUmFkaW8gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBvdGhlclZhbHVlOiBmYWxzZSxcbiAgICBpbnB1dFZhbHVlOiBmYWxzZSxcbiAgfTtcblxuICBvbkZvY3VzID0gZSA9PiB7XG4gICAgbGV0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IHsgb3RoZXJWYWx1ZSwgaW5wdXRWYWx1ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChvdGhlclZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgdmFsdWUgPSAnJztcbiAgICB9XG4gICAgdGhpcy5vdGhlclJhZGlvLmNsaWNrKCk7XG4gICAgdGhpcy5vdGhlclJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBvbkJsdXIgPSBlID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBpZiAodmFsdWUucmVwbGFjZSgnICcsICcnKSA9PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IHRoaXMuc3RhdGUub3RoZXJWYWx1ZSB9KTtcbiAgICAgIHRoaXMub3RoZXJSYWRpby5jaGVja2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiBmb3JtYXRNb25leSh2YWx1ZSkgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9uQ2hhbmdlID0gZSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogdmFsdWUgfSk7XG4gIH07XG5cbiAgc2V0Rm9jdXMgPSBlID0+IHtcbiAgICB0aGlzLm90aGVyQ2hvaXNlLmZvY3VzKCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpZWxkLFxuICAgICAgdmFsdWUsXG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgICAgIHRvdWNoZWQsXG4gICAgICBzZXRUb3VjaGVkLFxuICAgICAgdXBkYXRlRm9ybSxcbiAgICAgIGhpZGVGaWVsZCxcbiAgICAgIHN0eWxlZENvbXBvbmVudHMsXG4gICAgICBlcnJvcixcbiAgICAgIHVuc2V0RXJyb3IsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBmb3JtSWQsXG4gICAgICB0eXBlLFxuICAgICAgbGFiZWwsXG4gICAgICBjc3NDbGFzcyxcbiAgICAgIGlzUmVxdWlyZWQsXG4gICAgICBjaG9pY2VzLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICAgIGxhYmVsUGxhY2VtZW50LFxuICAgICAgd2lkdGgsXG4gICAgICBjdXN0b21OYW1lLFxuICAgICAgb3RoZXJQbGFjZWhvbGRlcixcbiAgICB9ID0gZmllbGQ7XG4gICAgY29uc3QgeyBpbnB1dFZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgeyBSYWRpb2dyb3VwID0gJ2ZpZWxkc2V0JywgTGFiZWwgPSAnbGVnZW5kJywgQm94ID0gJ2RpdicsIElucHV0ID0gJ2lucHV0JyB9ID1cbiAgICAgIHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yXG4gICAgICAgICAgICA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuICAgICAgICAgICAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgICAgfVxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICAgID5cbiAgICAgICAgPFJhZGlvZ3JvdXAgY2xhc3NOYW1lPVwicmFkaW9zXCI+XG4gICAgICAgICAgPExhYmVsIGFzPVwibGVnZW5kXCIgY2xhc3NOYW1lPXtgZ3JvdXAtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICB7Y2hvaWNlcy5tYXAoKGNob2ljZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfSBrZXk9e2Nob2ljZS52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fJHtpfWB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Nob2ljZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsdWUgPT09IGNob2ljZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fJHtpfWB9PntjaG9pY2UudGV4dH08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAge2ZpZWxkLmVuYWJsZU90aGVyQ2hvaWNlICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dHlwZX0gb3RoZXItY2hvaXNlYH0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fJHtjaG9pY2VzLmxlbmd0aH1gfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZSA9PiAodGhpcy5vdGhlclJhZGlvID0gZSl9XG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e2UgPT4gdGhpcy5zZXRGb2N1cyhlKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fJHtjaG9pY2VzLmxlbmd0aH1fb3RoZXJgfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtvdGhlclBsYWNlaG9sZGVyIHx8ICdPdGhlcid9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXtlID0+IHRoaXMub25Gb2N1cyhlKX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGUsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQmx1cihlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZUZvcm0oZSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgIC8vIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZSA9PiAodGhpcy5vdGhlckNob2lzZSA9IGUpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlIHx8IGVycm9yfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUmFkaW9ncm91cD5cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaW87XG4iXX0=