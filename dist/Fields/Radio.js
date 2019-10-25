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
          Radiogroup = _ref$Radiogroup === void 0 ? "fieldset" : _ref$Radiogroup,
          _ref$Label = _ref.Label,
          Label = _ref$Label === void 0 ? "legend" : _ref$Label,
          _ref$Box = _ref.Box,
          Box = _ref$Box === void 0 ? "div" : _ref$Box;

      return _react["default"].createElement(Box, {
        width: width,
        className: validationMessage && touched ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUmFkaW8uanN4Il0sIm5hbWVzIjpbImZvcm1hdE1vbmV5IiwiYW1vdW50IiwiZGVjaW1hbENvdW50IiwiZGVjaW1hbCIsInRob3VzYW5kcyIsIk1hdGgiLCJhYnMiLCJpc05hTiIsIm5lZ2F0aXZlU2lnbiIsImkiLCJwYXJzZUludCIsIk51bWJlciIsInRvRml4ZWQiLCJ0b1N0cmluZyIsImoiLCJsZW5ndGgiLCJzdWJzdHIiLCJyZXBsYWNlIiwic2xpY2UiLCJlIiwiY29uc29sZSIsImxvZyIsIlJhZGlvIiwib3RoZXJWYWx1ZSIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsInRhcmdldCIsInN0YXRlIiwib3RoZXJSYWRpbyIsImNsaWNrIiwiY2hlY2tlZCIsInNldFN0YXRlIiwib3RoZXJDaG9pc2UiLCJmb2N1cyIsInByb3BzIiwiZmllbGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwidXBkYXRlRm9ybSIsImhpZGVGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJpZCIsImZvcm1JZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwiaXNSZXF1aXJlZCIsImNob2ljZXMiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJSYWRpb2dyb3VwIiwiTGFiZWwiLCJCb3giLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwibWFwIiwiY2hvaWNlIiwiZXZlbnQiLCJ0ZXh0IiwiZW5hYmxlT3RoZXJDaG9pY2UiLCJzZXRGb2N1cyIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbkNoYW5nZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxXQUFULENBQXFCQyxNQUFyQixFQUErRTtBQUFBLE1BQWxEQyxZQUFrRCx1RUFBbkMsQ0FBbUM7QUFBQSxN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QUE7QUFWWCxRQURELEVBYUM7QUFDQyxRQUFBLEVBQUUsa0JBQVd3QixNQUFYLGNBQXFCRCxFQUFyQixjQUEyQk0sT0FBTyxDQUFDakMsTUFBbkMsV0FESDtBQUVDLFFBQUEsSUFBSSxFQUFDLE1BRk47QUFHQyxRQUFBLEtBQUssRUFBRVMsVUFIUjtBQUlDLFFBQUEsT0FBTyxFQUFFLGlCQUFBTCxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDOEMsT0FBTCxDQUFhOUMsQ0FBYixDQUFKO0FBQUEsU0FKWDtBQUtDLFFBQUEsTUFBTSxFQUFFLGdCQUFBQSxDQUFDLEVBQUk7QUFDWm9CLFVBQUFBLFVBQVUsQ0FBQ3BCLENBQUQsRUFBSWdCLEtBQUosQ0FBVjs7QUFDQSxVQUFBLE1BQUksQ0FBQytCLE1BQUwsQ0FBWS9DLENBQVo7QUFDQSxTQVJGO0FBU0MsUUFBQSxRQUFRLEVBQUUsa0JBQUFBLENBQUMsRUFBSTtBQUNkO0FBQ0E7QUFDQSxVQUFBLE1BQUksQ0FBQ2dELFFBQUwsQ0FBY2hELENBQWQ7QUFDQSxTQWJGO0FBY0MsUUFBQSxHQUFHLEVBQUUsYUFBQUEsQ0FBQztBQUFBLGlCQUFLLE1BQUksQ0FBQ2EsV0FBTCxHQUFtQmIsQ0FBeEI7QUFBQTtBQWRQLFFBYkQsQ0FwQkYsRUFtREU4QixXQUFXLElBQUk7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQThCQSxXQUE5QixDQW5EakIsQ0FSRixFQThERWIsaUJBQWlCLElBQUlDLE9BQXJCLElBQ0E7QUFBTSxRQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFnQyxRQUFBLEVBQUUsa0JBQVdNLE1BQVgsY0FBcUJELEVBQXJCO0FBQWxDLFNBQ0VOLGlCQURGLENBL0RGLENBVEQsQ0FERDtBQWdGQTs7OztFQXBKa0JnQyxnQjs7ZUF1Skw5QyxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBmb3JtYXRNb25leShhbW91bnQsIGRlY2ltYWxDb3VudCA9IDIsIGRlY2ltYWwgPSBcIi5cIiwgdGhvdXNhbmRzID0gXCIsXCIpIHtcblx0dHJ5IHtcblx0XHRkZWNpbWFsQ291bnQgPSBNYXRoLmFicyhkZWNpbWFsQ291bnQpO1xuXHRcdGRlY2ltYWxDb3VudCA9IGlzTmFOKGRlY2ltYWxDb3VudCkgPyAyIDogZGVjaW1hbENvdW50O1xuXG5cdFx0Y29uc3QgbmVnYXRpdmVTaWduID0gYW1vdW50IDwgMCA/IFwiLVwiIDogXCJcIjtcblxuXHRcdGNvbnN0IGkgPSBwYXJzZUludChcblx0XHRcdChhbW91bnQgPSBNYXRoLmFicyhOdW1iZXIoYW1vdW50KSB8fCAwKS50b0ZpeGVkKGRlY2ltYWxDb3VudCkpXG5cdFx0KS50b1N0cmluZygpO1xuXHRcdGNvbnN0IGogPSBpLmxlbmd0aCA+IDMgPyBpLmxlbmd0aCAlIDMgOiAwO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdG5lZ2F0aXZlU2lnbiArXG5cdFx0XHQoaiA/IGkuc3Vic3RyKDAsIGopICsgdGhvdXNhbmRzIDogXCJcIikgK1xuXHRcdFx0aS5zdWJzdHIoaikucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csIGAkMSR7dGhvdXNhbmRzfWApICtcblx0XHRcdChkZWNpbWFsQ291bnRcblx0XHRcdFx0PyBkZWNpbWFsICtcblx0XHRcdFx0ICBNYXRoLmFicyhhbW91bnQgLSBpKVxuXHRcdFx0XHRcdFx0LnRvRml4ZWQoZGVjaW1hbENvdW50KVxuXHRcdFx0XHRcdFx0LnNsaWNlKDIpXG5cdFx0XHRcdDogXCJcIilcblx0XHQpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdH1cbn1cblxuY2xhc3MgUmFkaW8gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRvdGhlclZhbHVlOiBmYWxzZSxcblx0XHRpbnB1dFZhbHVlOiBmYWxzZVxuXHR9O1xuXG5cdG9uRm9jdXMgPSBlID0+IHtcblx0XHRsZXQgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG5cdFx0Y29uc3QgeyBvdGhlclZhbHVlLCBpbnB1dFZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuXG5cdFx0aWYgKG90aGVyVmFsdWUgPT09IHZhbHVlKSB7XG5cdFx0XHR2YWx1ZSA9IFwiXCI7XG5cdFx0fVxuXHRcdHRoaXMub3RoZXJSYWRpby5jbGljaygpO1xuXHRcdHRoaXMub3RoZXJSYWRpby5jaGVja2VkID0gdHJ1ZTtcblx0XHR0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogdmFsdWUgfSk7XG5cdH07XG5cblx0b25CbHVyID0gZSA9PiB7XG5cdFx0Y29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG5cdFx0aWYgKHZhbHVlLnJlcGxhY2UoXCIgXCIsIFwiXCIpID09IFwiXCIpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiB0aGlzLnN0YXRlLm90aGVyVmFsdWUgfSk7XG5cdFx0XHR0aGlzLm90aGVyUmFkaW8uY2hlY2tlZCA9IGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogZm9ybWF0TW9uZXkodmFsdWUpIH0pO1xuXHRcdH1cblx0fTtcblxuXHRvbkNoYW5nZSA9IGUgPT4ge1xuXHRcdGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IHZhbHVlIH0pO1xuXHR9O1xuXG5cdHNldEZvY3VzID0gZSA9PiB7XG5cdFx0dGhpcy5vdGhlckNob2lzZS5mb2N1cygpO1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRmaWVsZCxcblx0XHRcdHZhbHVlLFxuXHRcdFx0dmFsaWRhdGlvbk1lc3NhZ2UsXG5cdFx0XHR0b3VjaGVkLFxuXHRcdFx0c2V0VG91Y2hlZCxcblx0XHRcdHVwZGF0ZUZvcm0sXG5cdFx0XHRoaWRlRmllbGQsXG5cdFx0XHRzdHlsZWRDb21wb25lbnRzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3Qge1xuXHRcdFx0aWQsXG5cdFx0XHRmb3JtSWQsXG5cdFx0XHR0eXBlLFxuXHRcdFx0bGFiZWwsXG5cdFx0XHRjc3NDbGFzcyxcblx0XHRcdGlzUmVxdWlyZWQsXG5cdFx0XHRjaG9pY2VzLFxuXHRcdFx0ZGVzY3JpcHRpb24sXG5cdFx0XHRkZXNjcmlwdGlvblBsYWNlbWVudCxcblx0XHRcdGxhYmVsUGxhY2VtZW50LFxuXHRcdFx0d2lkdGgsXG5cdFx0XHRjdXN0b21OYW1lXG5cdFx0fSA9IGZpZWxkO1xuXHRcdGNvbnN0IHsgaW5wdXRWYWx1ZSB9ID0gdGhpcy5zdGF0ZTtcblxuXHRcdGNvbnN0IHsgUmFkaW9ncm91cCA9IFwiZmllbGRzZXRcIiwgTGFiZWwgPSBcImxlZ2VuZFwiLCBCb3ggPSBcImRpdlwiIH0gPVxuXHRcdFx0c3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8Qm94XG5cdFx0XHRcdHdpZHRoPXt3aWR0aH1cblx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHR2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkXG5cdFx0XHRcdFx0XHQ/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuXHRcdFx0XHRcdFx0OiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcblx0XHRcdFx0fVxuXHRcdFx0XHRzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyBcIm5vbmVcIiA6IHVuZGVmaW5lZCB9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8UmFkaW9ncm91cCBjbGFzc05hbWU9XCJyYWRpb3NcIj5cblx0XHRcdFx0XHQ8TGFiZWwgYXM9XCJsZWdlbmRcIiBjbGFzc05hbWU9e2Bncm91cC1sYWJlbCAke2xhYmVsUGxhY2VtZW50fWB9PlxuXHRcdFx0XHRcdFx0e2xhYmVsfVxuXHRcdFx0XHRcdFx0e2lzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG5cdFx0XHRcdFx0PC9MYWJlbD5cblx0XHRcdFx0XHR7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09IFwiYWJvdmVcIiAmJiBkZXNjcmlwdGlvbiA/IChcblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG5cdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0e2Nob2ljZXMubWFwKChjaG9pY2UsIGkpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dHlwZX0ga2V5PXtjaG9pY2UudmFsdWV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XyR7aX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicmFkaW9cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjaG9pY2UudmFsdWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3ZhbHVlID09PSBjaG9pY2UudmFsdWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRvdWNoZWQoaWQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XyR7aX1gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2Nob2ljZS50ZXh0fVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdHtmaWVsZC5lbmFibGVPdGhlckNob2ljZSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3R5cGV9IG90aGVyLWNob2lzZWB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XyR7Y2hvaWNlcy5sZW5ndGh9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInJhZGlvXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT17YGlucHV0XyR7aWR9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2lucHV0VmFsdWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRvdWNoZWQoaWQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWY9e2UgPT4gKHRoaXMub3RoZXJSYWRpbyA9IGUpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkZvY3VzPXtlID0+IHRoaXMuc2V0Rm9jdXMoZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XyR7Y2hvaWNlcy5sZW5ndGh9X290aGVyYH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aW5wdXRWYWx1ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25Gb2N1cz17ZSA9PiB0aGlzLm9uRm9jdXMoZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlRm9ybShlLCBmaWVsZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5vbkJsdXIoZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyB1cGRhdGVGb3JtKGUsIGZpZWxkKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBzZXRUb3VjaGVkKGlkKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm9uQ2hhbmdlKGUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWY9e2UgPT4gKHRoaXMub3RoZXJDaG9pc2UgPSBlKX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdHtkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2Pn1cblx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHR7dmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCAmJiAoXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cblx0XHRcdFx0XHRcdFx0e3ZhbGlkYXRpb25NZXNzYWdlfVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvUmFkaW9ncm91cD5cblx0XHRcdDwvQm94PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaW87XG4iXX0=