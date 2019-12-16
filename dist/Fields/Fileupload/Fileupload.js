"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _GFDropzone = _interopRequireDefault(require("./GFDropzone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      imagePreviewUrl: _this.props.field.preview || null,
      selectedFile: _this.props.field.preview ? true : null,
      uploadFileText: 'No file chosen',
      previewID: _this.props.value || null
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
              imagePreviewUrl: reader.result,
              previewID: false
            });
          };

          reader.readAsDataURL(event.target.files[0]);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "removeFilePreview", function () {
      _this.setState({
        imagePreviewUrl: null,
        selectedFile: null,
        previewID: false
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
          imagePreviewUrl = _this$state.imagePreviewUrl,
          previewID = _this$state.previewID;
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
          unsetError = _this$props.unsetError,
          dropzoneText = _this$props.dropzoneText;
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
          hasPreview = field.hasPreview,
          maxFileSize = field.maxFileSize;

      var _ref = styledComponents || false,
          _ref$Button = _ref.Button,
          Button = _ref$Button === void 0 ? 'button' : _ref$Button,
          _ref$Label = _ref.Label,
          Label = _ref$Label === void 0 ? 'label' : _ref$Label,
          _ref$FileWrapper = _ref.FileWrapper,
          FileWrapper = _ref$FileWrapper === void 0 ? 'div' : _ref$FileWrapper,
          _ref$Box = _ref.Box,
          Box = _ref$Box === void 0 ? 'div' : _ref$Box;

      var hasDropzone = cssClass.indexOf('dropzone') > -1;
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
      }, description) : hasDropzone ? _react["default"].createElement(_GFDropzone["default"], {
        dropzoneText: dropzoneText,
        field: field,
        id: id,
        formID: formID,
        isRequired: isRequired,
        updateForm: updateForm,
        setTouched: setTouched,
        unsetError: unsetError
      }) : _react["default"].createElement(_react["default"].Fragment, null, maxFileSize && _react["default"].createElement("input", {
        type: "hidden",
        name: "MAX_FILE_SIZE",
        value: maxFileSize * 1048576
      }), _react["default"].createElement("input", {
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
      }), previewID && field.preview && _react["default"].createElement("input", {
        type: "hidden",
        name: "file-upload-preview",
        value: previewID
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9GaWVsZHMvRmlsZXVwbG9hZC9GaWxldXBsb2FkLmpzeCJdLCJuYW1lcyI6WyJGaWxldXBsb2FkIiwiaW1hZ2VQcmV2aWV3VXJsIiwicHJvcHMiLCJmaWVsZCIsInByZXZpZXciLCJzZWxlY3RlZEZpbGUiLCJ1cGxvYWRGaWxlVGV4dCIsInByZXZpZXdJRCIsInZhbHVlIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJldmVudCIsImhhc1ByZXZpZXciLCJhbGxvd2VkRXh0ZW5zaW9ucyIsInNldFN0YXRlIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwiZXh0ZW5zaW9uIiwic3BsaXQiLCJwb3AiLCJ0b0xvd2VyQ2FzZSIsImlzU3VjY2VzcyIsImluZGV4T2YiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInR5cGVzIiwiYWNjZXB0IiwibWFwIiwic3RyIiwicmVwbGFjZSIsImpvaW4iLCJpbnB1dEZpbGUiLCJjdXJyZW50IiwiY2xpY2siLCJzdGF0ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwiZm9ybUlEIiwiZmllbGRFcnJvciIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJkcm9wem9uZVRleHQiLCJpZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwiaXNSZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiYnV0dG9uVGV4dCIsIm1heEZpbGVTaXplIiwiQnV0dG9uIiwiTGFiZWwiLCJGaWxlV3JhcHBlciIsIkJveCIsImhhc0Ryb3B6b25lIiwiZGlzcGxheSIsInVuZGVmaW5lZCIsIm9uQ2hhbmdlSGFuZGxlciIsInByZXBhcmVBbGxvd2VkVHlwZXMiLCJiYWNrZ3JvdW5kSW1hZ2Ui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QUhQO0FBSUUsUUFBQSxTQUFTLEVBQUMsWUFKWjtBQUtFLFFBQUEsT0FBTyxFQUFFLEtBQUtDO0FBTGhCLFNBT0UsZ0NBQUMsTUFBRDtBQUFRLFFBQUEsS0FBSyxFQUFDLFFBQWQ7QUFBdUIsUUFBQSxRQUFRLEVBQUMsSUFBaEM7QUFBcUMsUUFBQSxJQUFJLEVBQUM7QUFBMUMsU0FDR2IsVUFBVSxJQUFJLGVBRGpCLENBUEYsRUFVRSw4Q0FBT3JELGNBQVAsQ0FWRixDQS9DRixFQTRER2lELFdBQVcsSUFBSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FBOEJBLFdBQTlCLENBNURsQixDQW5CSixFQWtGRyxDQUFFaEIsaUJBQWlCLElBQUlDLE9BQXRCLElBQWtDTyxLQUFuQyxLQUNDO0FBQU0sUUFBQSxTQUFTLEVBQUMsZUFBaEI7QUFBZ0MsUUFBQSxFQUFFLGtCQUFXRyxFQUFYO0FBQWxDLFNBQ0dYLGlCQUFpQixJQUFJUSxLQUR4QixDQW5GSixFQXVGR0YsVUFBVSxJQUNUO0FBQU0sUUFBQSxTQUFTLEVBQUMsZUFBaEI7QUFBZ0MsUUFBQSxFQUFFLGtCQUFXRCxNQUFYLGNBQXFCTSxFQUFyQjtBQUFsQyxTQUNHTCxVQURILENBeEZKLENBVEYsQ0FERjtBQXlHRDs7OztFQXhNc0I0QixnQjs7ZUEyTVZ6RSxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEcm9wem9uZSBmcm9tICdyZWFjdC1kcm9wem9uZSc7XG5pbXBvcnQgR0ZEcm9wem9uZSBmcm9tICcuL0dGRHJvcHpvbmUnO1xuXG5jbGFzcyBGaWxldXBsb2FkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgaW1hZ2VQcmV2aWV3VXJsOiB0aGlzLnByb3BzLmZpZWxkLnByZXZpZXcgfHwgbnVsbCxcbiAgICBzZWxlY3RlZEZpbGU6IHRoaXMucHJvcHMuZmllbGQucHJldmlldyA/IHRydWUgOiBudWxsLFxuICAgIHVwbG9hZEZpbGVUZXh0OiAnTm8gZmlsZSBjaG9zZW4nLFxuICAgIHByZXZpZXdJRDogdGhpcy5wcm9wcy52YWx1ZSB8fCBudWxsLFxuICB9O1xuXG4gIGlucHV0RmlsZSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gIG9uQ2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgaGFzUHJldmlldywgYWxsb3dlZEV4dGVuc2lvbnMgfSA9IHRoaXMucHJvcHMuZmllbGQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbWFnZVByZXZpZXdVcmw6IG51bGwsXG4gICAgICBzZWxlY3RlZEZpbGU6IGV2ZW50LnRhcmdldC5maWxlc1swXSxcbiAgICAgIHVwbG9hZEZpbGVUZXh0OiBldmVudC50YXJnZXQuZmlsZXNbMF0gPyBldmVudC50YXJnZXQuZmlsZXNbMF0ubmFtZSA6ICdObyBmaWxlIGNob3NlbicsXG4gICAgfSk7XG5cbiAgICBpZiAoaGFzUHJldmlldyAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LmZpbGVzWzBdKSB7XG4gICAgICAvLyBjaGVjayBmaWxlIHR5cGVcbiAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGV2ZW50LnRhcmdldC5maWxlc1swXS5uYW1lXG4gICAgICAgIC5zcGxpdCgnLicpXG4gICAgICAgIC5wb3AoKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTsgLy8gZmlsZSBleHRlbnNpb24gZnJvbSBpbnB1dCBmaWxlXG4gICAgICBjb25zdCBpc1N1Y2Nlc3MgPSBhbGxvd2VkRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTsgLy8gaXMgZXh0ZW5zaW9uIGluIGFjY2VwdGFibGUgdHlwZXNcbiAgICAgIGlmIChpc1N1Y2Nlc3MpIHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW1hZ2VQcmV2aWV3VXJsOiByZWFkZXIucmVzdWx0LFxuICAgICAgICAgICAgcHJldmlld0lEOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZW1vdmVGaWxlUHJldmlldyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2VQcmV2aWV3VXJsOiBudWxsLCBzZWxlY3RlZEZpbGU6IG51bGwsIHByZXZpZXdJRDogZmFsc2UgfSk7XG4gIH07XG5cbiAgcHJlcGFyZUFsbG93ZWRUeXBlcyA9ICh0eXBlcykgPT4ge1xuICAgIGxldCBhY2NlcHQgPSB0eXBlcy5zcGxpdCgnLCcpO1xuICAgIGFjY2VwdCA9IGFjY2VwdC5tYXAoc3RyID0+IGAuJHtzdHIucmVwbGFjZSgvXFxzL2csICcnKX1gKS5qb2luKCcsICcpO1xuICAgIHJldHVybiBhY2NlcHQ7XG4gIH07XG5cbiAgb25CdXR0b25DbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5pbnB1dEZpbGUuY3VycmVudC5jbGljaygpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gc2VsZWN0ZWRGaWxlLCB1cGxvYWRGaWxlVGV4dCwgaW1hZ2VQcmV2aWV3VXJsLCBwcmV2aWV3SUQgXG59ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHtcbiAgICAgIGZpZWxkLFxuICAgICAgdmFsdWUsXG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgICAgIHRvdWNoZWQsXG4gICAgICBzZXRUb3VjaGVkLFxuICAgICAgaGlkZUZpZWxkLFxuICAgICAgdXBkYXRlRm9ybSxcbiAgICAgIGZvcm1JRCxcbiAgICAgIGZpZWxkRXJyb3IsXG4gICAgICBzdHlsZWRDb21wb25lbnRzLFxuICAgICAgZXJyb3IsXG4gICAgICB1bnNldEVycm9yLFxuICAgICAgZHJvcHpvbmVUZXh0LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgdHlwZSxcbiAgICAgIGxhYmVsLFxuICAgICAgY3NzQ2xhc3MsXG4gICAgICBpc1JlcXVpcmVkLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICAgIGxhYmVsUGxhY2VtZW50LFxuICAgICAgd2lkdGgsXG4gICAgICBhbGxvd2VkRXh0ZW5zaW9ucyxcbiAgICAgIGJ1dHRvblRleHQsXG4gICAgICBoYXNQcmV2aWV3LFxuICAgICAgbWF4RmlsZVNpemUsXG4gICAgfSA9IGZpZWxkO1xuICAgIGNvbnN0IHtcbiBCdXR0b24gPSAnYnV0dG9uJywgTGFiZWwgPSAnbGFiZWwnLCBGaWxlV3JhcHBlciA9ICdkaXYnLCBCb3ggPSAnZGl2JyBcbn0gPSAgICAgIHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG5cbiAgICBjb25zdCBoYXNEcm9wem9uZSA9IGNzc0NsYXNzLmluZGV4T2YoJ2Ryb3B6b25lJykgPiAtMTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcbiAgICAgICAgICAgID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gXG4gICAgICAgICAgICA6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuICAgICAgICB9XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/ICdub25lJyA6IHVuZGVmaW5lZCB9fVxuICAgICAgPlxuICAgICAgICA8RmlsZVdyYXBwZXIgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAgICA8TGFiZWwgaHRtbEZvcj17YGlucHV0XyR7Zm9ybUlEfV8ke2lkfWB9IGNsYXNzTmFtZT17YGdmLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICB7aXNSZXF1aXJlZCA/IDxhYmJyPio8L2FiYnI+IDogbnVsbH1cbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgKSA6IGhhc0Ryb3B6b25lID8gKFxuICAgICAgICAgICAgPEdGRHJvcHpvbmVcbiAgICAgICAgICAgICAgZHJvcHpvbmVUZXh0PXtkcm9wem9uZVRleHR9XG4gICAgICAgICAgICAgIGZpZWxkPXtmaWVsZH1cbiAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICBmb3JtSUQ9e2Zvcm1JRH1cbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICAgICAgdXBkYXRlRm9ybT17dXBkYXRlRm9ybX1cbiAgICAgICAgICAgICAgc2V0VG91Y2hlZD17c2V0VG91Y2hlZH1cbiAgICAgICAgICAgICAgdW5zZXRFcnJvcj17dW5zZXRFcnJvcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAge21heEZpbGVTaXplICYmIChcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJNQVhfRklMRV9TSVpFXCIgdmFsdWU9e21heEZpbGVTaXplICogMTA0ODU3Nn0gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JRH1fJHtpZH1gfVxuICAgICAgICAgICAgICAgIG5hbWU9e2BpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgICAgIHJlZj17dGhpcy5pbnB1dEZpbGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZUhhbmRsZXIoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uQmx1cj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGFjY2VwdD17dGhpcy5wcmVwYXJlQWxsb3dlZFR5cGVzKGFsbG93ZWRFeHRlbnNpb25zKSB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17YGVycm9yXyR7Zm9ybUlEfV8ke2lkfWB9XG4gICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXshIXZhbGlkYXRpb25NZXNzYWdlIHx8ICEhZXJyb3J9XG4gICAgICAgICAgICAgICAgaGlkZGVuPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3ByZXZpZXdJRCAmJiBmaWVsZC5wcmV2aWV3ICYmIChcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmaWxlLXVwbG9hZC1wcmV2aWV3XCIgdmFsdWU9e3ByZXZpZXdJRH0gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge2hhc1ByZXZpZXcgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGUtcHJldmlld1wiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmlsZSAmJiBpbWFnZVByZXZpZXdVcmxcbiAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2VQcmV2aWV3VXJsfSlgIH1cbiAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEZpbGUgJiYgaW1hZ2VQcmV2aWV3VXJsICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbW92ZS1maWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlbW92ZUZpbGVQcmV2aWV3KCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiMFwiXG4gICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsZVVwbG9hZFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkJ1dHRvbkNsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJ5ZWxsb3dcIiB0YWJJbmRleD1cIi0xXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAge2J1dHRvblRleHQgfHwgJ0Nob29zZSBhIGZpbGUnfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt1cGxvYWRGaWxlVGV4dH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2Pn1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7KCh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvcikgJiYgKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtpZH1gfT5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlIHx8IGVycm9yfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2ZpZWxkRXJyb3IgJiYgKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSUR9XyR7aWR9YH0+XG4gICAgICAgICAgICAgIHtmaWVsZEVycm9yfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRmlsZVdyYXBwZXI+XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGV1cGxvYWQ7XG4iXX0=