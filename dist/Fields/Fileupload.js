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
      imagePreviewUrl: null,
      selectedFile: null,
      uploadFileText: 'No file chosen'
    });

    _defineProperty(_assertThisInitialized(_this), "inputFile", _react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "onChangeHandler", function (event) {
      var _this$props$field = _this.props.field,
          hasPreview = _this$props$field.hasPreview,
          allowedExtensions = _this$props$field.allowedExtensions;

      _this.setState({
        imagePreviewUrl: null,
        selectedFile: event.target.files[0],
        uploadFileText: event.target.files[0] ? event.target.files[0].name : 'No file chosen'
      });

      if (hasPreview && event.target && event.target.files[0]) {
        // check file type
        var extension = event.target.files[0].name.split('.').pop().toLowerCase(); // file extension from input file

        var isSuccess = allowedExtensions.indexOf(extension) > -1; // is extension in acceptable types

        if (isSuccess) {
          var reader = new FileReader();

          reader.onloadend = function () {
            _this.setState({
              imagePreviewUrl: reader.result
            });
          };

          reader.readAsDataURL(event.target.files[0]);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "removeFilePreview", function () {
      _this.setState({
        imagePreviewUrl: null,
        selectedFile: null
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
          uploadFileText = _this$state.uploadFileText,
          imagePreviewUrl = _this$state.imagePreviewUrl;
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
          styledComponents = _this$props.styledComponents,
          error = _this$props.error,
          unsetError = _this$props.unsetError;
      var id = field.id,
          type = field.type,
          label = field.label,
          cssClass = field.cssClass,
          isRequired = field.isRequired,
          description = field.description,
          descriptionPlacement = field.descriptionPlacement,
          labelPlacement = field.labelPlacement,
          width = field.width,
          allowedExtensions = field.allowedExtensions,
          buttonText = field.buttonText,
          hasPreview = field.hasPreview;

      var _ref = styledComponents || false,
          _ref$Button = _ref.Button,
          Button = _ref$Button === void 0 ? 'button' : _ref$Button,
          _ref$Label = _ref.Label,
          Label = _ref$Label === void 0 ? 'label' : _ref$Label,
          _ref$FileWrapper = _ref.FileWrapper,
          FileWrapper = _ref$FileWrapper === void 0 ? 'div' : _ref$FileWrapper,
          _ref$Box = _ref.Box,
          Box = _ref$Box === void 0 ? 'div' : _ref$Box;

      return _react["default"].createElement(Box, {
        width: width,
        className: validationMessage && touched || error ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
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
          unsetError(id);
        },
        onBlur: function onBlur(event) {
          updateForm(event, field);
          setTouched(id);
        },
        accept: this.prepareAllowedTypes(allowedExtensions) || undefined,
        "aria-label": label,
        "aria-describedby": "error_".concat(formID, "_").concat(id),
        "aria-invalid": !!validationMessage || !!error,
        hidden: "hidden"
      }), hasPreview && _react["default"].createElement("div", {
        className: "file-preview",
        style: selectedFile && imagePreviewUrl ? {
          backgroundImage: "url(".concat(imagePreviewUrl, ")")
        } : undefined
      }, selectedFile && imagePreviewUrl && _react["default"].createElement("button", {
        type: "button",
        className: "remove-file",
        onClick: function onClick() {
          return _this2.removeFilePreview();
        }
      })), _react["default"].createElement("div", {
        "aria-pressed": "false",
        tabIndex: "0",
        role: "button",
        className: "fileUpload",
        onClick: this.onButtonClickHandler
      }, _react["default"].createElement(Button, {
        color: "yellow",
        tabIndex: "-1",
        type: "button"
      }, buttonText || 'Choose a file'), _react["default"].createElement("span", null, uploadFileText)), description && _react["default"].createElement("div", {
        className: "description"
      }, description)), (validationMessage && touched || error) && _react["default"].createElement("span", {
        className: "error-message",
        id: "error_".concat(id)
      }, validationMessage || error), fieldError && _react["default"].createElement("span", {
        className: "error-message",
        id: "error_".concat(formID, "_").concat(id)
      }, fieldError)));
    }
  }]);

  return Fileupload;
}(_react.Component);

var _default = Fileupload;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvRmlsZXVwbG9hZC5qc3giXSwibmFtZXMiOlsiRmlsZXVwbG9hZCIsImltYWdlUHJldmlld1VybCIsInNlbGVjdGVkRmlsZSIsInVwbG9hZEZpbGVUZXh0IiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJldmVudCIsInByb3BzIiwiZmllbGQiLCJoYXNQcmV2aWV3IiwiYWxsb3dlZEV4dGVuc2lvbnMiLCJzZXRTdGF0ZSIsInRhcmdldCIsImZpbGVzIiwibmFtZSIsImV4dGVuc2lvbiIsInNwbGl0IiwicG9wIiwidG9Mb3dlckNhc2UiLCJpc1N1Y2Nlc3MiLCJpbmRleE9mIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJ0eXBlcyIsImFjY2VwdCIsIm1hcCIsInN0ciIsInJlcGxhY2UiLCJqb2luIiwiaW5wdXRGaWxlIiwiY3VycmVudCIsImNsaWNrIiwic3RhdGUiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwiZm9ybUlEIiwiZmllbGRFcnJvciIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJpZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwiaXNSZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiYnV0dG9uVGV4dCIsIkJ1dHRvbiIsIkxhYmVsIiwiRmlsZVdyYXBwZXIiLCJCb3giLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwib25DaGFuZ2VIYW5kbGVyIiwicHJlcGFyZUFsbG93ZWRUeXBlcyIsImJhY2tncm91bmRJbWFnZSIsInJlbW92ZUZpbGVQcmV2aWV3Iiwib25CdXR0b25DbGlja0hhbmRsZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFB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QUQ7QUFBUSxRQUFBLEtBQUssRUFBQyxRQUFkO0FBQXVCLFFBQUEsUUFBUSxFQUFDLElBQWhDO0FBQXFDLFFBQUEsSUFBSSxFQUFDO0FBQTFDLFNBQ0dYLFVBQVUsSUFBSSxlQURqQixDQVBGLEVBVUUsOENBQU9yRCxjQUFQLENBVkYsQ0F6Q0YsRUFzREdpRCxXQUFXLElBQUk7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQThCQSxXQUE5QixDQXREbEIsQ0FSSixFQWlFRyxDQUFFZixpQkFBaUIsSUFBSUMsT0FBdEIsSUFBa0NPLEtBQW5DLEtBQ0M7QUFBTSxRQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFnQyxRQUFBLEVBQUUsa0JBQVdFLEVBQVg7QUFBbEMsU0FDR1YsaUJBQWlCLElBQUlRLEtBRHhCLENBbEVKLEVBc0VHRixVQUFVLElBQ1Q7QUFBTSxRQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFnQyxRQUFBLEVBQUUsa0JBQVdELE1BQVgsY0FBcUJLLEVBQXJCO0FBQWxDLFNBQ0dKLFVBREgsQ0F2RUosQ0FURixDQURGO0FBd0ZEOzs7O0VBN0tzQnlCLGdCOztlQWdMVnBFLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBGaWxldXBsb2FkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgaW1hZ2VQcmV2aWV3VXJsOiBudWxsLFxuICAgIHNlbGVjdGVkRmlsZTogbnVsbCxcbiAgICB1cGxvYWRGaWxlVGV4dDogJ05vIGZpbGUgY2hvc2VuJyxcbiAgfTtcblxuICBpbnB1dEZpbGUgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICBvbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGhhc1ByZXZpZXcsIGFsbG93ZWRFeHRlbnNpb25zIH0gPSB0aGlzLnByb3BzLmZpZWxkO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW1hZ2VQcmV2aWV3VXJsOiBudWxsLFxuICAgICAgc2VsZWN0ZWRGaWxlOiBldmVudC50YXJnZXQuZmlsZXNbMF0sXG4gICAgICB1cGxvYWRGaWxlVGV4dDogZXZlbnQudGFyZ2V0LmZpbGVzWzBdID8gZXZlbnQudGFyZ2V0LmZpbGVzWzBdLm5hbWUgOiAnTm8gZmlsZSBjaG9zZW4nLFxuICAgIH0pO1xuXG4gICAgaWYgKGhhc1ByZXZpZXcgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5maWxlc1swXSkge1xuICAgICAgLy8gY2hlY2sgZmlsZSB0eXBlXG4gICAgICBjb25zdCBleHRlbnNpb24gPSBldmVudC50YXJnZXQuZmlsZXNbMF0ubmFtZVxuICAgICAgICAuc3BsaXQoJy4nKVxuICAgICAgICAucG9wKClcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7IC8vIGZpbGUgZXh0ZW5zaW9uIGZyb20gaW5wdXQgZmlsZVxuICAgICAgY29uc3QgaXNTdWNjZXNzID0gYWxsb3dlZEV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7IC8vIGlzIGV4dGVuc2lvbiBpbiBhY2NlcHRhYmxlIHR5cGVzXG4gICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGltYWdlUHJldmlld1VybDogcmVhZGVyLnJlc3VsdCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZW1vdmVGaWxlUHJldmlldyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2VQcmV2aWV3VXJsOiBudWxsLCBzZWxlY3RlZEZpbGU6IG51bGwgfSk7XG4gIH07XG5cbiAgcHJlcGFyZUFsbG93ZWRUeXBlcyA9ICh0eXBlcykgPT4ge1xuICAgIGxldCBhY2NlcHQgPSB0eXBlcy5zcGxpdCgnLCcpO1xuICAgIGFjY2VwdCA9IGFjY2VwdC5tYXAoc3RyID0+IGAuJHtzdHIucmVwbGFjZSgvXFxzL2csICcnKX1gKS5qb2luKCcsICcpO1xuICAgIHJldHVybiBhY2NlcHQ7XG4gIH07XG5cbiAgb25CdXR0b25DbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5pbnB1dEZpbGUuY3VycmVudC5jbGljaygpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNlbGVjdGVkRmlsZSwgdXBsb2FkRmlsZVRleHQsIGltYWdlUHJldmlld1VybCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICBmaWVsZCxcbiAgICAgIHZhbHVlLFxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgICB0b3VjaGVkLFxuICAgICAgc2V0VG91Y2hlZCxcbiAgICAgIGhpZGVGaWVsZCxcbiAgICAgIHVwZGF0ZUZvcm0sXG4gICAgICBmb3JtSUQsXG4gICAgICBmaWVsZEVycm9yLFxuICAgICAgc3R5bGVkQ29tcG9uZW50cyxcbiAgICAgIGVycm9yLFxuICAgICAgdW5zZXRFcnJvcixcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHR5cGUsXG4gICAgICBsYWJlbCxcbiAgICAgIGNzc0NsYXNzLFxuICAgICAgaXNSZXF1aXJlZCxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgICBsYWJlbFBsYWNlbWVudCxcbiAgICAgIHdpZHRoLFxuICAgICAgYWxsb3dlZEV4dGVuc2lvbnMsXG4gICAgICBidXR0b25UZXh0LFxuICAgICAgaGFzUHJldmlldyxcbiAgICB9ID0gZmllbGQ7XG4gICAgY29uc3Qge1xuIEJ1dHRvbiA9ICdidXR0b24nLCBMYWJlbCA9ICdsYWJlbCcsIEZpbGVXcmFwcGVyID0gJ2RpdicsIEJveCA9ICdkaXYnIFxufSA9ICAgICAgc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yXG4gICAgICAgICAgICA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuICAgICAgICAgICAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgICAgfVxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICAgID5cbiAgICAgICAgPEZpbGVXcmFwcGVyIGNsYXNzTmFtZT17dHlwZX0+XG4gICAgICAgICAgPExhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JRH1fJHtpZH1gfSBjbGFzc05hbWU9e2BnZi1sYWJlbCAke2xhYmVsUGxhY2VtZW50fWB9PlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAge2lzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09ICdhYm92ZScgJiYgZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSUR9XyR7aWR9YH1cbiAgICAgICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICAgICAgICByZWY9e3RoaXMuaW5wdXRGaWxlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2VIYW5kbGVyKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkJsdXI9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBhY2NlcHQ9e3RoaXMucHJlcGFyZUFsbG93ZWRUeXBlcyhhbGxvd2VkRXh0ZW5zaW9ucykgfHwgdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2BlcnJvcl8ke2Zvcm1JRH1fJHtpZH1gfVxuICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17ISF2YWxpZGF0aW9uTWVzc2FnZSB8fCAhIWVycm9yfVxuICAgICAgICAgICAgICAgIGhpZGRlbj1cImhpZGRlblwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtoYXNQcmV2aWV3ICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxlLXByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpbGUgJiYgaW1hZ2VQcmV2aWV3VXJsXG4gICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlUHJldmlld1VybH0pYCB9XG4gICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRGaWxlICYmIGltYWdlUHJldmlld1VybCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZW1vdmUtZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5yZW1vdmVGaWxlUHJldmlldygpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGFyaWEtcHJlc3NlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD1cIjBcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGVVcGxvYWRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25CdXR0b25DbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwieWVsbG93XCIgdGFiSW5kZXg9XCItMVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgIHtidXR0b25UZXh0IHx8ICdDaG9vc2UgYSBmaWxlJ31cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57dXBsb2FkRmlsZVRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgICAgeygodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3IpICYmIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7aWR9YH0+XG4gICAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSB8fCBlcnJvcn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtmaWVsZEVycm9yICYmIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlEfV8ke2lkfWB9PlxuICAgICAgICAgICAgICB7ZmllbGRFcnJvcn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0ZpbGVXcmFwcGVyPlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWxldXBsb2FkO1xuIl19