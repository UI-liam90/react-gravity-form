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
      previewID: _this.props.value || null,
      errorText: _this.props.error || false
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
      var _this$props = _this.props,
          field = _this$props.field,
          unsetError = _this$props.unsetError;
      _this.inputFile.current.value = '';

      _this.setState({
        imagePreviewUrl: null,
        selectedFile: null,
        previewID: false
      });

      unsetError(field.id);
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
      var _this$props2 = this.props,
          field = _this$props2.field,
          value = _this$props2.value,
          validationMessage = _this$props2.validationMessage,
          touched = _this$props2.touched,
          setTouched = _this$props2.setTouched,
          hideField = _this$props2.hideField,
          updateForm = _this$props2.updateForm,
          formID = _this$props2.formID,
          fieldError = _this$props2.fieldError,
          styledComponents = _this$props2.styledComponents,
          error = _this$props2.error,
          unsetError = _this$props2.unsetError,
          dropzoneText = _this$props2.dropzoneText;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9GaWVsZHMvRmlsZXVwbG9hZC9GaWxldXBsb2FkLmpzeCJdLCJuYW1lcyI6WyJGaWxldXBsb2FkIiwiaW1hZ2VQcmV2aWV3VXJsIiwicHJvcHMiLCJmaWVsZCIsInByZXZpZXciLCJzZWxlY3RlZEZpbGUiLCJ1cGxvYWRGaWxlVGV4dCIsInByZXZpZXdJRCIsInZhbHVlIiwiZXJyb3JUZXh0IiwiZXJyb3IiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImV2ZW50IiwiaGFzUHJldmlldyIsImFsbG93ZWRFeHRlbnNpb25zIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJmaWxlcyIsIm5hbWUiLCJleHRlbnNpb24iLCJzcGxpdCIsInBvcCIsInRvTG93ZXJDYXNlIiwiaXNTdWNjZXNzIiwiaW5kZXhPZiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwidW5zZXRFcnJvciIsImlucHV0RmlsZSIsImN1cnJlbnQiLCJpZCIsInR5cGVzIiwiYWNjZXB0IiwibWFwIiwic3RyIiwicmVwbGFjZSIsImpvaW4iLCJjbGljayIsInN0YXRlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsImhpZGVGaWVsZCIsInVwZGF0ZUZvcm0iLCJmb3JtSUQiLCJmaWVsZEVycm9yIiwic3R5bGVkQ29tcG9uZW50cyIsImRyb3B6b25lVGV4dCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwiaXNSZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiYnV0dG9uVGV4dCIsIm1heEZpbGVTaXplIiwiQnV0dG9uIiwiTGFiZWwiLCJGaWxlV3JhcHBlciIsIkJveCIsImhhc0Ryb3B6b25lIiwiZGlzcGxheSIsInVuZGVmaW5lZCIsIm9uQ2hhbmdlSGFuZGxlciIsInByZXBhcmVBbGxvd2VkVHlwZXMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyZW1vdmVGaWxlUHJldmlldyIsIm9uQnV0dG9uQ2xpY2tIYW5kbGVyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDSTtBQUNOQyxNQUFBQSxlQUFlLEVBQUUsTUFBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxPQUFqQixJQUE0QixJQUR2QztBQUVOQyxNQUFBQSxZQUFZLEVBQUUsTUFBS0gsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxPQUFqQixHQUEyQixJQUEzQixHQUFrQyxJQUYxQztBQUdORSxNQUFBQSxjQUFjLEVBQUUsZ0JBSFY7QUFJTkMsTUFBQUEsU0FBUyxFQUFFLE1BQUtMLEtBQUwsQ0FBV00sS0FBWCxJQUFvQixJQUp6QjtBQUtOQyxNQUFBQSxTQUFTLEVBQUUsTUFBS1AsS0FBTCxDQUFXUSxLQUFYLElBQW9CO0FBTHpCLEs7O2dFQVFJQyxrQkFBTUMsU0FBTixFOztzRUFFTSxVQUFDQyxLQUFELEVBQVc7QUFBQSw4QkFDZSxNQUFLWCxLQUFMLENBQVdDLEtBRDFCO0FBQUEsVUFDbkJXLFVBRG1CLHFCQUNuQkEsVUFEbUI7QUFBQSxVQUNQQyxpQkFETyxxQkFDUEEsaUJBRE87O0FBRTNCLFlBQUtDLFFBQUwsQ0FBYztBQUNaZixRQUFBQSxlQUFlLEVBQUUsSUFETDtBQUVaSSxRQUFBQSxZQUFZLEVBQUVRLEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxLQUFiLENBQW1CLENBQW5CLENBRkY7QUFHWlosUUFBQUEsY0FBYyxFQUFFTyxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsS0FBYixDQUFtQixDQUFuQixJQUF3QkwsS0FBSyxDQUFDSSxNQUFOLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0JDLElBQTlDLEdBQXFEO0FBSHpELE9BQWQ7O0FBTUEsVUFBSUwsVUFBVSxJQUFJRCxLQUFLLENBQUNJLE1BQXBCLElBQThCSixLQUFL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Y3QnO1xuaW1wb3J0IERyb3B6b25lIGZyb20gJ3JlYWN0LWRyb3B6b25lJztcbmltcG9ydCBHRkRyb3B6b25lIGZyb20gJy4vR0ZEcm9wem9uZSc7XG5cbmNsYXNzIEZpbGV1cGxvYWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBpbWFnZVByZXZpZXdVcmw6IHRoaXMucHJvcHMuZmllbGQucHJldmlldyB8fCBudWxsLFxuICAgIHNlbGVjdGVkRmlsZTogdGhpcy5wcm9wcy5maWVsZC5wcmV2aWV3ID8gdHJ1ZSA6IG51bGwsXG4gICAgdXBsb2FkRmlsZVRleHQ6ICdObyBmaWxlIGNob3NlbicsXG4gICAgcHJldmlld0lEOiB0aGlzLnByb3BzLnZhbHVlIHx8IG51bGwsXG4gICAgZXJyb3JUZXh0OiB0aGlzLnByb3BzLmVycm9yIHx8IGZhbHNlLFxuICB9O1xuXG4gIGlucHV0RmlsZSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gIG9uQ2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgaGFzUHJldmlldywgYWxsb3dlZEV4dGVuc2lvbnMgfSA9IHRoaXMucHJvcHMuZmllbGQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbWFnZVByZXZpZXdVcmw6IG51bGwsXG4gICAgICBzZWxlY3RlZEZpbGU6IGV2ZW50LnRhcmdldC5maWxlc1swXSxcbiAgICAgIHVwbG9hZEZpbGVUZXh0OiBldmVudC50YXJnZXQuZmlsZXNbMF0gPyBldmVudC50YXJnZXQuZmlsZXNbMF0ubmFtZSA6ICdObyBmaWxlIGNob3NlbicsXG4gICAgfSk7XG5cbiAgICBpZiAoaGFzUHJldmlldyAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LmZpbGVzWzBdKSB7XG4gICAgICAvLyBjaGVjayBmaWxlIHR5cGVcbiAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGV2ZW50LnRhcmdldC5maWxlc1swXS5uYW1lXG4gICAgICAgIC5zcGxpdCgnLicpXG4gICAgICAgIC5wb3AoKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTsgLy8gZmlsZSBleHRlbnNpb24gZnJvbSBpbnB1dCBmaWxlXG4gICAgICBjb25zdCBpc1N1Y2Nlc3MgPSBhbGxvd2VkRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTsgLy8gaXMgZXh0ZW5zaW9uIGluIGFjY2VwdGFibGUgdHlwZXNcbiAgICAgIGlmIChpc1N1Y2Nlc3MpIHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW1hZ2VQcmV2aWV3VXJsOiByZWFkZXIucmVzdWx0LFxuICAgICAgICAgICAgcHJldmlld0lEOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZW1vdmVGaWxlUHJldmlldyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGZpZWxkLCB1bnNldEVycm9yIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuaW5wdXRGaWxlLmN1cnJlbnQudmFsdWUgPSAnJztcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2VQcmV2aWV3VXJsOiBudWxsLCBzZWxlY3RlZEZpbGU6IG51bGwsIHByZXZpZXdJRDogZmFsc2UgfSk7XG4gICAgdW5zZXRFcnJvcihmaWVsZC5pZCk7XG4gIH07XG5cbiAgcHJlcGFyZUFsbG93ZWRUeXBlcyA9ICh0eXBlcykgPT4ge1xuICAgIGxldCBhY2NlcHQgPSB0eXBlcy5zcGxpdCgnLCcpO1xuICAgIGFjY2VwdCA9IGFjY2VwdC5tYXAoKHN0cikgPT4gYC4ke3N0ci5yZXBsYWNlKC9cXHMvZywgJycpfWApLmpvaW4oJywgJyk7XG4gICAgcmV0dXJuIGFjY2VwdDtcbiAgfTtcblxuICBvbkJ1dHRvbkNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICB0aGlzLmlucHV0RmlsZS5jdXJyZW50LmNsaWNrKCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRGaWxlLCB1cGxvYWRGaWxlVGV4dCwgaW1hZ2VQcmV2aWV3VXJsLCBwcmV2aWV3SUQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCB7XG4gICAgICBmaWVsZCxcbiAgICAgIHZhbHVlLFxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgICB0b3VjaGVkLFxuICAgICAgc2V0VG91Y2hlZCxcbiAgICAgIGhpZGVGaWVsZCxcbiAgICAgIHVwZGF0ZUZvcm0sXG4gICAgICBmb3JtSUQsXG4gICAgICBmaWVsZEVycm9yLFxuICAgICAgc3R5bGVkQ29tcG9uZW50cyxcbiAgICAgIGVycm9yLFxuICAgICAgdW5zZXRFcnJvcixcbiAgICAgIGRyb3B6b25lVGV4dCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHR5cGUsXG4gICAgICBsYWJlbCxcbiAgICAgIGNzc0NsYXNzLFxuICAgICAgaXNSZXF1aXJlZCxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgICBsYWJlbFBsYWNlbWVudCxcbiAgICAgIHdpZHRoLFxuICAgICAgYWxsb3dlZEV4dGVuc2lvbnMsXG4gICAgICBidXR0b25UZXh0LFxuICAgICAgaGFzUHJldmlldyxcbiAgICAgIG1heEZpbGVTaXplLFxuICAgIH0gPSBmaWVsZDtcbiAgICBjb25zdCB7IEJ1dHRvbiA9ICdidXR0b24nLCBMYWJlbCA9ICdsYWJlbCcsIEZpbGVXcmFwcGVyID0gJ2RpdicsIEJveCA9ICdkaXYnIH0gPVxuICAgICAgc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICAgIGNvbnN0IGhhc0Ryb3B6b25lID0gY3NzQ2xhc3MuaW5kZXhPZignZHJvcHpvbmUnKSA+IC0xO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvclxuICAgICAgICAgICAgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWBcbiAgICAgICAgICAgIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICAgIH1cbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gJ25vbmUnIDogdW5kZWZpbmVkIH19XG4gICAgICA+XG4gICAgICAgIDxGaWxlV3JhcHBlciBjbGFzc05hbWU9e3R5cGV9PlxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSUR9XyR7aWR9YH0gY2xhc3NOYW1lPXtgZ2YtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICApIDogaGFzRHJvcHpvbmUgPyAoXG4gICAgICAgICAgICA8R0ZEcm9wem9uZVxuICAgICAgICAgICAgICBkcm9wem9uZVRleHQ9e2Ryb3B6b25lVGV4dH1cbiAgICAgICAgICAgICAgZmllbGQ9e2ZpZWxkfVxuICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgIGZvcm1JRD17Zm9ybUlEfVxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgICB1cGRhdGVGb3JtPXt1cGRhdGVGb3JtfVxuICAgICAgICAgICAgICBzZXRUb3VjaGVkPXtzZXRUb3VjaGVkfVxuICAgICAgICAgICAgICB1bnNldEVycm9yPXt1bnNldEVycm9yfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICB7bWF4RmlsZVNpemUgJiYgKFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIk1BWF9GSUxFX1NJWkVcIiB2YWx1ZT17bWF4RmlsZVNpemUgKiAxMDQ4NTc2fSAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlEfV8ke2lkfWB9XG4gICAgICAgICAgICAgICAgbmFtZT17YGlucHV0XyR7aWR9YH1cbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgcmVmPXt0aGlzLmlucHV0RmlsZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlSGFuZGxlcihldmVudCk7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25CbHVyPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgYWNjZXB0PXt0aGlzLnByZXBhcmVBbGxvd2VkVHlwZXMoYWxsb3dlZEV4dGVuc2lvbnMpIHx8IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtgZXJyb3JfJHtmb3JtSUR9XyR7aWR9YH1cbiAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhdmFsaWRhdGlvbk1lc3NhZ2UgfHwgISFlcnJvcn1cbiAgICAgICAgICAgICAgICBoaWRkZW49XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7cHJldmlld0lEICYmIGZpZWxkLnByZXZpZXcgJiYgKFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZpbGUtdXBsb2FkLXByZXZpZXdcIiB2YWx1ZT17cHJldmlld0lEfSAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7aGFzUHJldmlldyAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsZS1wcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWxlICYmIGltYWdlUHJldmlld1VybFxuICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZVByZXZpZXdVcmx9KWAgfVxuICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkRmlsZSAmJiBpbWFnZVByZXZpZXdVcmwgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVtb3ZlLWZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucmVtb3ZlRmlsZVByZXZpZXcoKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBhcmlhLXByZXNzZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxlVXBsb2FkXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQnV0dG9uQ2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInllbGxvd1wiIHRhYkluZGV4PVwiLTFcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICB7YnV0dG9uVGV4dCB8fCAnQ2hvb3NlIGEgZmlsZSd9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3VwbG9hZEZpbGVUZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2lkfWB9PlxuICAgICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgfHwgZXJyb3J9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7ZmllbGRFcnJvciAmJiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JRH1fJHtpZH1gfT5cbiAgICAgICAgICAgICAge2ZpZWxkRXJyb3J9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9GaWxlV3JhcHBlcj5cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsZXVwbG9hZDtcblxuIl19