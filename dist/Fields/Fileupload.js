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
      uploadFileText: "No file chosen"
    });

    _defineProperty(_assertThisInitialized(_this), "inputFile", _react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "onChangeHandler", function (event) {
      _this.setState({
        selectedFile: event.target.files[0],
        uploadFileText: event.target.files[0] ? event.target.files[0].name : "No file chosen"
      });
    });

    _defineProperty(_assertThisInitialized(_this), "prepareAllowedTypes", function (types) {
      var accept = types.split(",");
      accept = accept.map(function (str) {
        return ".".concat(str.replace(/\s/g, ""));
      }).join(", ");
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
          Button = _ref$Button === void 0 ? "button" : _ref$Button,
          _ref$Label = _ref.Label,
          Label = _ref$Label === void 0 ? "label" : _ref$Label,
          _ref$FileWrapper = _ref.FileWrapper,
          FileWrapper = _ref$FileWrapper === void 0 ? "div" : _ref$FileWrapper,
          _ref$Box = _ref.Box,
          Box = _ref$Box === void 0 ? "div" : _ref$Box;

      return _react["default"].createElement(Box, {
        width: width,
        className: validationMessage && touched ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
        style: {
          display: hideField ? "none" : undefined
        }
      }, _react["default"].createElement(FileWrapper, {
        className: type
      }, _react["default"].createElement(Label, {
        htmlFor: "input_".concat(formID, "_").concat(id),
        className: "gf-label ".concat(labelPlacement)
      }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === "above" && description ? description && _react["default"].createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvRmlsZXVwbG9hZC5qc3giXSwibmFtZXMiOlsiRmlsZXVwbG9hZCIsInNlbGVjdGVkRmlsZSIsInVwbG9hZEZpbGVUZXh0IiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwidHlwZXMiLCJhY2NlcHQiLCJzcGxpdCIsIm1hcCIsInN0ciIsInJlcGxhY2UiLCJqb2luIiwiaW5wdXRGaWxlIiwiY3VycmVudCIsImNsaWNrIiwic3RhdGUiLCJwcm9wcyIsImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsImZvcm1JRCIsImZpZWxkRXJyb3IiLCJzdHlsZWRDb21wb25lbnRzIiwiaWQiLCJ0eXBlIiwibGFiZWwiLCJjc3NDbGFzcyIsImlzUmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImFsbG93ZWRFeHRlbnNpb25zIiwiQnV0dG9uIiwiTGFiZWwiLCJGaWxlV3JhcHBlciIsIkJveCIsImRpc3BsYXkiLCJ1bmRlZmluZWQiLCJvbkNoYW5nZUhhbmRsZXIiLCJwcmVwYXJlQWxsb3dlZFR5cGVzIiwib25CdXR0b25DbGlja0hhbmRsZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDRztBQUNQQyxNQUFBQSxZQUFZLEVBQUUsSUFEUDtBQUVQQyxNQUFBQSxjQUFjLEVBQUU7QUFGVCxLOztnRUFLSUMsa0JBQU1DLFNBQU4sRTs7c0VBRU0sVUFBQUMsS0FBSyxFQUFJO0FBQzFCLFlBQUtDLFFBQUwsQ0FBYztBQUNiTCxRQUFBQSxZQUFZLEVBQUVJLEtBQUssQ0FBQ0UsTUFB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QztBQXJCUixRQURELEVBd0JDO0FBQ0Msd0JBQWEsT0FEZDtBQUVDLFFBQUEsUUFBUSxFQUFDLEdBRlY7QUFHQyxRQUFBLElBQUksRUFBQyxRQUhOO0FBSUMsUUFBQSxTQUFTLEVBQUMsWUFKWDtBQUtDLFFBQUEsT0FBTyxFQUFFLEtBQUswQjtBQUxmLFNBT0MsZ0NBQUMsTUFBRDtBQUFRLFFBQUEsS0FBSyxFQUFDLFFBQWQ7QUFBdUIsUUFBQSxRQUFRLEVBQUMsSUFBaEM7QUFBcUMsUUFBQSxJQUFJLEVBQUM7QUFBMUMseUJBUEQsRUFVQyw4Q0FBT2hELGNBQVAsQ0FWRCxDQXhCRCxFQXFDRW1DLFdBQVcsSUFBSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FBOEJBLFdBQTlCLENBckNqQixDQVhGLEVBbURFYixpQkFBaUIsSUFBSUMsT0FBckIsSUFDQTtBQUFNLFFBQUEsU0FBUyxFQUFDLGVBQWhCO0FBQWdDLFFBQUEsRUFBRSxrQkFBV08sRUFBWDtBQUFsQyxTQUNFUixpQkFERixDQXBERixFQXdERU0sVUFBVSxJQUNWO0FBQU0sUUFBQSxTQUFTLEVBQUMsZUFBaEI7QUFBZ0MsUUFBQSxFQUFFLGtCQUFXRCxNQUFYLGNBQXFCRyxFQUFyQjtBQUFsQyxTQUNFRixVQURGLENBekRGLENBVEQsQ0FERDtBQTBFQTs7OztFQXJJdUJxQixnQjs7ZUF3SVZuRCxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBGaWxldXBsb2FkIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0c2VsZWN0ZWRGaWxlOiBudWxsLFxuXHRcdHVwbG9hZEZpbGVUZXh0OiBcIk5vIGZpbGUgY2hvc2VuXCJcblx0fTtcblxuXHRpbnB1dEZpbGUgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuXHRvbkNoYW5nZUhhbmRsZXIgPSBldmVudCA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWxlY3RlZEZpbGU6IGV2ZW50LnRhcmdldC5maWxlc1swXSxcblx0XHRcdHVwbG9hZEZpbGVUZXh0OiBldmVudC50YXJnZXQuZmlsZXNbMF1cblx0XHRcdFx0PyBldmVudC50YXJnZXQuZmlsZXNbMF0ubmFtZVxuXHRcdFx0XHQ6IFwiTm8gZmlsZSBjaG9zZW5cIlxuXHRcdH0pO1xuXHR9O1xuXG5cdHByZXBhcmVBbGxvd2VkVHlwZXMgPSB0eXBlcyA9PiB7XG5cdFx0bGV0IGFjY2VwdCA9IHR5cGVzLnNwbGl0KFwiLFwiKTtcblx0XHRhY2NlcHQgPSBhY2NlcHQubWFwKHN0ciA9PiBgLiR7c3RyLnJlcGxhY2UoL1xccy9nLCBcIlwiKX1gKS5qb2luKFwiLCBcIik7XG5cdFx0cmV0dXJuIGFjY2VwdDtcblx0fTtcblxuXHRvbkJ1dHRvbkNsaWNrSGFuZGxlciA9ICgpID0+IHtcblx0XHR0aGlzLmlucHV0RmlsZS5jdXJyZW50LmNsaWNrKCk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgc2VsZWN0ZWRGaWxlLCB1cGxvYWRGaWxlVGV4dCB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCB7XG5cdFx0XHRmaWVsZCxcblx0XHRcdHZhbHVlLFxuXHRcdFx0dmFsaWRhdGlvbk1lc3NhZ2UsXG5cdFx0XHR0b3VjaGVkLFxuXHRcdFx0c2V0VG91Y2hlZCxcblx0XHRcdGhpZGVGaWVsZCxcblx0XHRcdHVwZGF0ZUZvcm0sXG5cdFx0XHRmb3JtSUQsXG5cdFx0XHRmaWVsZEVycm9yLFxuXHRcdFx0c3R5bGVkQ29tcG9uZW50c1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHtcblx0XHRcdGlkLFxuXHRcdFx0dHlwZSxcblx0XHRcdGxhYmVsLFxuXHRcdFx0Y3NzQ2xhc3MsXG5cdFx0XHRpc1JlcXVpcmVkLFxuXHRcdFx0ZGVzY3JpcHRpb24sXG5cdFx0XHRkZXNjcmlwdGlvblBsYWNlbWVudCxcblx0XHRcdGxhYmVsUGxhY2VtZW50LFxuXHRcdFx0d2lkdGgsXG5cdFx0XHRhbGxvd2VkRXh0ZW5zaW9uc1xuXHRcdH0gPSBmaWVsZDtcblx0XHRjb25zdCB7XG5cdFx0XHRCdXR0b24gPSBcImJ1dHRvblwiLFxuXHRcdFx0TGFiZWwgPSBcImxhYmVsXCIsXG5cdFx0XHRGaWxlV3JhcHBlciA9IFwiZGl2XCIsXG5cdFx0XHRCb3ggPSBcImRpdlwiXG5cdFx0fSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxCb3hcblx0XHRcdFx0d2lkdGg9e3dpZHRofVxuXHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWRcblx0XHRcdFx0XHRcdD8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gXG5cdFx0XHRcdFx0XHQ6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuXHRcdFx0XHR9XG5cdFx0XHRcdHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/IFwibm9uZVwiIDogdW5kZWZpbmVkIH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxGaWxlV3JhcHBlciBjbGFzc05hbWU9e3R5cGV9PlxuXHRcdFx0XHRcdDxMYWJlbFxuXHRcdFx0XHRcdFx0aHRtbEZvcj17YGlucHV0XyR7Zm9ybUlEfV8ke2lkfWB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BnZi1sYWJlbCAke2xhYmVsUGxhY2VtZW50fWB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e2xhYmVsfVxuXHRcdFx0XHRcdFx0e2lzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG5cdFx0XHRcdFx0PC9MYWJlbD5cblx0XHRcdFx0XHR7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09IFwiYWJvdmVcIiAmJiBkZXNjcmlwdGlvbiA/IChcblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG5cdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0aWQ9e2BpbnB1dF8ke2Zvcm1JRH1fJHtpZH1gfVxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9e2BpbnB1dF8ke2lkfWB9XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImZpbGVcIlxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuXHRcdFx0XHRcdFx0XHRcdHJlZj17dGhpcy5pbnB1dEZpbGV9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMub25DaGFuZ2VIYW5kbGVyKGV2ZW50KTtcblx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcblx0XHRcdFx0XHRcdFx0XHRcdHNldFRvdWNoZWQoaWQpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0b25CbHVyPXtldmVudCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRUb3VjaGVkKGlkKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdGFjY2VwdD17XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByZXBhcmVBbGxvd2VkVHlwZXMoYWxsb3dlZEV4dGVuc2lvbnMpIHx8IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPXtsYWJlbH1cblx0XHRcdFx0XHRcdFx0XHRhcmlhLWRlc2NyaWJlZGJ5PXtgZXJyb3JfJHtmb3JtSUR9XyR7aWR9YH1cblx0XHRcdFx0XHRcdFx0XHRhcmlhLWludmFsaWQ9eyEhdmFsaWRhdGlvbk1lc3NhZ2V9XG5cdFx0XHRcdFx0XHRcdFx0aGlkZGVuPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD1cImZhbHNlXCJcblx0XHRcdFx0XHRcdFx0XHR0YWJJbmRleD1cIjBcIlxuXHRcdFx0XHRcdFx0XHRcdHJvbGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZpbGVVcGxvYWRcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMub25CdXR0b25DbGlja0hhbmRsZXJ9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGNvbG9yPVwieWVsbG93XCIgdGFiSW5kZXg9XCItMVwiIHR5cGU9XCJidXR0b25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdENob29zZSBhIGZpbGVcblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57dXBsb2FkRmlsZVRleHR9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHR7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG5cdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0e3ZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgJiYgKFxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtpZH1gfT5cblx0XHRcdFx0XHRcdFx0e3ZhbGlkYXRpb25NZXNzYWdlfVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0e2ZpZWxkRXJyb3IgJiYgKFxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSUR9XyR7aWR9YH0+XG5cdFx0XHRcdFx0XHRcdHtmaWVsZEVycm9yfVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvRmlsZVdyYXBwZXI+XG5cdFx0XHQ8L0JveD5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGV1cGxvYWQ7XG4iXX0=