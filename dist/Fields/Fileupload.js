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

var Fileupload =
/*#__PURE__*/
function (_Component) {
  _inherits(Fileupload, _Component);

  function Fileupload() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Fileupload);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Fileupload)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedFile: null,
      uploadFileText: 'No file chosen'
    });

    _defineProperty(_assertThisInitialized(_this), "inputFile", _react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "onChangeHandler", function (event) {
      _this.setState({
        selectedFile: event.target.files[0],
        uploadFileText: event.target.files[0] ? event.target.files[0].name : 'No file chosen'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "prepareAllowedTypes", function (types) {
      var accept = types.split(',');
      accept = accept.map(function (str) {
        return ".".concat(str.replace(/\s/g, ''));
      }).join(', ');
      return accept;
    });

    _defineProperty(_assertThisInitialized(_this), "onButtonClickHandler", function () {
      _this.inputFile.current.click();
    });

    return _this;
  }

  _createClass(Fileupload, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          selectedFile = _this$state.selectedFile,
          uploadFileText = _this$state.uploadFileText;
      var _this$props = this.props,
          field = _this$props.field,
          value = _this$props.value,
          validationMessage = _this$props.validationMessage,
          touched = _this$props.touched,
          setTouched = _this$props.setTouched,
          hideField = _this$props.hideField,
          updateForm = _this$props.updateForm,
          formID = _this$props.formID,
          fieldError = _this$props.fieldError,
          styledComponents = _this$props.styledComponents;
      var id = field.id,
          type = field.type,
          label = field.label,
          cssClass = field.cssClass,
          isRequired = field.isRequired,
          description = field.description,
          descriptionPlacement = field.descriptionPlacement,
          labelPlacement = field.labelPlacement,
          width = field.width,
          allowedExtensions = field.allowedExtensions;

      var _ref = styledComponents || false,
          _ref$Button = _ref.Button,
          Button = _ref$Button === void 0 ? 'button' : _ref$Button,
          _ref$Label = _ref.Label,
          Label = _ref$Label === void 0 ? 'label' : _ref$Label,
          _ref$FileWrapper = _ref.FileWrapper,
          FileWrapper = _ref$FileWrapper === void 0 ? 'div' : _ref$FileWrapper;

      return _react["default"].createElement(_rebass.Box, {
        width: width,
        className: validationMessage && touched ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
        style: {
          display: hideField ? 'none' : undefined
        }
      }, _react["default"].createElement(FileWrapper, {
        className: type
      }, _react["default"].createElement(Label, {
        htmlFor: "input_".concat(formID, "_").concat(id),
        className: "gf-label ".concat(labelPlacement)
      }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === 'above' && description ? description && _react["default"].createElement("div", {
        className: "description"
      }, description) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("input", {
        id: "input_".concat(formID, "_").concat(id),
        name: "input_".concat(id),
        type: "file",
        required: isRequired,
        ref: this.inputFile,
        onChange: function onChange(event) {
          _this2.onChangeHandler(event);

          updateForm(event, field);
          setTouched(id);
        },
        onBlur: function onBlur(event) {
          updateForm(event, field);
          setTouched(id);
        },
        accept: this.prepareAllowedTypes(allowedExtensions) || undefined,
        "aria-label": label,
        "aria-describedby": "error_".concat(formID, "_").concat(id),
        "aria-invalid": !!validationMessage,
        hidden: "hidden"
      }), _react["default"].createElement("div", {
        "aria-pressed": "false",
        tabIndex: "0",
        role: "button",
        className: "fileUpload",
        onClick: this.onButtonClickHandler
      }, _react["default"].createElement(Button, {
        color: "yellow",
        tabIndex: "-1",
        type: "button"
      }, "Choose a file"), _react["default"].createElement("span", null, uploadFileText)), description && _react["default"].createElement("div", {
        className: "description"
      }, description)), validationMessage && touched && _react["default"].createElement("span", {
        className: "error-message",
        id: "error_".concat(id)
      }, validationMessage), fieldError && _react["default"].createElement("span", {
        className: "error-message",
        id: "error_".concat(formID, "_").concat(id)
      }, fieldError)));
    }
  }]);

  return Fileupload;
}(_react.Component);

var _default = Fileupload;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvRmlsZXVwbG9hZC5qc3giXSwibmFtZXMiOlsiRmlsZXVwbG9hZCIsInNlbGVjdGVkRmlsZSIsInVwbG9hZEZpbGVUZXh0IiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwidHlwZXMiLCJhY2NlcHQiLCJzcGxpdCIsIm1hcCIsInN0ciIsInJlcGxhY2UiLCJqb2luIiwiaW5wdXRGaWxlIiwiY3VycmVudCIsImNsaWNrIiwic3RhdGUiLCJwcm9wcyIsImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsImZvcm1JRCIsImZpZWxkRXJyb3IiLCJzdHlsZWRDb21wb25lbnRzIiwiaWQiLCJ0eXBlIiwibGFiZWwiLCJjc3NDbGFzcyIsImlzUmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImFsbG93ZWRFeHRlbnNpb25zIiwiQnV0dG9uIiwiTGFiZWwiLCJGaWxlV3JhcHBlciIsImRpc3BsYXkiLCJ1bmRlZmluZWQiLCJvbkNoYW5nZUhhbmRsZXIiLCJwcmVwYXJlQWxsb3dlZFR5cGVzIiwib25CdXR0b25DbGlja0hhbmRsZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDSTtBQUNOQyxNQUFBQSxZQUFZLEVBQUUsSUFEUjtBQUVOQyxNQUFBQSxjQUFjLEVBQUU7QUFGVixLOztnRUFLSUMsa0JBQU1DLFNBQU4sRTs7c0VBRU0sVUFBQ0MsS0FBRCxFQUFXO0FBQzNCLFlBQUtDLFFBQUwsQ0FBYztBQUNaTCxRQUFBQSxZQUFZLEVBQUVJLEtBQUssQ0FBQ0UsTUFB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QURmO0FBRUUsUUFBQSxRQUFRLEVBQUMsR0FGWDtBQUdFLFFBQUEsSUFBSSxFQUFDLFFBSFA7QUFJRSxRQUFBLFNBQVMsRUFBQyxZQUpaO0FBS0UsUUFBQSxPQUFPLEVBQUUsS0FBS3lCO0FBTGhCLFNBT0UsZ0NBQUMsTUFBRDtBQUFRLFFBQUEsS0FBSyxFQUFDLFFBQWQ7QUFBdUIsUUFBQSxRQUFRLEVBQUMsSUFBaEM7QUFBcUMsUUFBQSxJQUFJLEVBQUM7QUFBMUMseUJBUEYsRUFVRSw4Q0FBTy9DLGNBQVAsQ0FWRixDQXRCRixFQW1DR21DLFdBQVcsSUFBSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FBOEJBLFdBQTlCLENBbkNsQixDQVJKLEVBOENHYixpQkFBaUIsSUFBSUMsT0FBckIsSUFDQztBQUFNLFFBQUEsU0FBUyxFQUFDLGVBQWhCO0FBQWdDLFFBQUEsRUFBRSxrQkFBV08sRUFBWDtBQUFsQyxTQUNHUixpQkFESCxDQS9DSixFQW1ER00sVUFBVSxJQUNUO0FBQU0sUUFBQSxTQUFTLEVBQUMsZUFBaEI7QUFBZ0MsUUFBQSxFQUFFLGtCQUFXRCxNQUFYLGNBQXFCRyxFQUFyQjtBQUFsQyxTQUNHRixVQURILENBcERKLENBUEYsQ0FERjtBQW1FRDs7OztFQXZIc0JvQixnQjs7ZUEwSFZsRCxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCB9IGZyb20gJ3JlYmFzcyc7XG5cbmNsYXNzIEZpbGV1cGxvYWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBzZWxlY3RlZEZpbGU6IG51bGwsXG4gICAgdXBsb2FkRmlsZVRleHQ6ICdObyBmaWxlIGNob3NlbicsXG4gIH07XG5cbiAgaW5wdXRGaWxlID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgb25DaGFuZ2VIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZEZpbGU6IGV2ZW50LnRhcmdldC5maWxlc1swXSxcbiAgICAgIHVwbG9hZEZpbGVUZXh0OiBldmVudC50YXJnZXQuZmlsZXNbMF0gPyBldmVudC50YXJnZXQuZmlsZXNbMF0ubmFtZSA6ICdObyBmaWxlIGNob3NlbicsXG4gICAgfSk7XG4gIH07XG5cbiAgcHJlcGFyZUFsbG93ZWRUeXBlcyA9ICh0eXBlcykgPT4ge1xuICAgIGxldCBhY2NlcHQgPSB0eXBlcy5zcGxpdCgnLCcpO1xuICAgIGFjY2VwdCA9IGFjY2VwdC5tYXAoc3RyID0+IGAuJHtzdHIucmVwbGFjZSgvXFxzL2csICcnKX1gKS5qb2luKCcsICcpO1xuICAgIHJldHVybiBhY2NlcHQ7XG4gIH07XG5cbiAgb25CdXR0b25DbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5pbnB1dEZpbGUuY3VycmVudC5jbGljaygpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNlbGVjdGVkRmlsZSwgdXBsb2FkRmlsZVRleHQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgZmllbGQsXG4gICAgICB2YWx1ZSxcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlLFxuICAgICAgdG91Y2hlZCxcbiAgICAgIHNldFRvdWNoZWQsXG4gICAgICBoaWRlRmllbGQsXG4gICAgICB1cGRhdGVGb3JtLFxuICAgICAgZm9ybUlELFxuICAgICAgZmllbGRFcnJvcixcbiAgICAgIHN0eWxlZENvbXBvbmVudHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICB0eXBlLFxuICAgICAgbGFiZWwsXG4gICAgICBjc3NDbGFzcyxcbiAgICAgIGlzUmVxdWlyZWQsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgICB3aWR0aCxcbiAgICAgIGFsbG93ZWRFeHRlbnNpb25zLFxuICAgIH0gPSBmaWVsZDtcbiAgICBjb25zdCB7IEJ1dHRvbiA9ICdidXR0b24nLCBMYWJlbCA9ICdsYWJlbCcsIEZpbGVXcmFwcGVyID0gJ2RpdicgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgICAgfVxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICAgID5cbiAgICAgICAgPEZpbGVXcmFwcGVyIGNsYXNzTmFtZT17dHlwZX0+XG4gICAgICAgICAgPExhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JRH1fJHtpZH1gfSBjbGFzc05hbWU9e2BnZi1sYWJlbCAke2xhYmVsUGxhY2VtZW50fWB9PlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAge2lzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09ICdhYm92ZScgJiYgZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSUR9XyR7aWR9YH1cbiAgICAgICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICAgICAgICByZWY9e3RoaXMuaW5wdXRGaWxlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2VIYW5kbGVyKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25CbHVyPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgYWNjZXB0PXt0aGlzLnByZXBhcmVBbGxvd2VkVHlwZXMoYWxsb3dlZEV4dGVuc2lvbnMpIHx8IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtgZXJyb3JfJHtmb3JtSUR9XyR7aWR9YH1cbiAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhdmFsaWRhdGlvbk1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgaGlkZGVuPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGFyaWEtcHJlc3NlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD1cIjBcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGVVcGxvYWRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25CdXR0b25DbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwieWVsbG93XCIgdGFiSW5kZXg9XCItMVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgIENob29zZSBhIGZpbGVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57dXBsb2FkRmlsZVRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgJiYgKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtpZH1gfT5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2ZpZWxkRXJyb3IgJiYgKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSUR9XyR7aWR9YH0+XG4gICAgICAgICAgICAgIHtmaWVsZEVycm9yfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRmlsZVdyYXBwZXI+XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGV1cGxvYWQ7XG4iXX0=