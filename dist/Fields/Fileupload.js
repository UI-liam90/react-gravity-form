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
      }, description) : _react["default"].createElement(_react["default"].Fragment, null, maxFileSize && _react["default"].createElement("input", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvRmlsZXVwbG9hZC5qc3giXSwibmFtZXMiOlsiRmlsZXVwbG9hZCIsImltYWdlUHJldmlld1VybCIsInByb3BzIiwiZmllbGQiLCJwcmV2aWV3Iiwic2VsZWN0ZWRGaWxlIiwidXBsb2FkRmlsZVRleHQiLCJwcmV2aWV3SUQiLCJ2YWx1ZSIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiZXZlbnQiLCJoYXNQcmV2aWV3IiwiYWxsb3dlZEV4dGVuc2lvbnMiLCJzZXRTdGF0ZSIsInRhcmdldCIsImZpbGVzIiwibmFtZSIsImV4dGVuc2lvbiIsInNwbGl0IiwicG9wIiwidG9Mb3dlckNhc2UiLCJpc1N1Y2Nlc3MiLCJpbmRleE9mIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJ0eXBlcyIsImFjY2VwdCIsIm1hcCIsInN0ciIsInJlcGxhY2UiLCJqb2luIiwiaW5wdXRGaWxlIiwiY3VycmVudCIsImNsaWNrIiwic3RhdGUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsImZvcm1JRCIsImZpZWxkRXJyb3IiLCJzdHlsZWRDb21wb25lbnRzIiwiZXJyb3IiLCJ1bnNldEVycm9yIiwiaWQiLCJ0eXBlIiwibGFiZWwiLCJjc3NDbGFzcyIsImlzUmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImJ1dHRvblRleHQiLCJtYXhGaWxlU2l6ZSIsIkJ1dHRvbiIsIkxhYmVsIiwiRmlsZVdyYXBwZXIiLCJCb3giLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwib25DaGFuZ2VIYW5kbGVyIiwicHJlcGFyZUFsbG93ZWRUeXBlcyIsImJhY2tncm91bmRJbWFnZSIsInJlbW92ZUZpbGVQcmV2aWV3Iiwib25CdXR0b25DbGlja0hhbmRsZXIi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QUlRLEtBRHhCLENBeEVKLEVBNEVHRixVQUFVLElBQ1Q7QUFBTSxRQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFnQyxRQUFBLEVBQUUsa0JBQVdELE1BQVgsY0FBcUJLLEVBQXJCO0FBQWxDLFNBQ0dKLFVBREgsQ0E3RUosQ0FURixDQURGO0FBOEZEOzs7O0VBekxzQjBCLGdCOztlQTRMVnZFLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBGaWxldXBsb2FkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgaW1hZ2VQcmV2aWV3VXJsOiB0aGlzLnByb3BzLmZpZWxkLnByZXZpZXcgfHwgbnVsbCxcbiAgICBzZWxlY3RlZEZpbGU6IHRoaXMucHJvcHMuZmllbGQucHJldmlldyA/IHRydWUgOiBudWxsLFxuICAgIHVwbG9hZEZpbGVUZXh0OiAnTm8gZmlsZSBjaG9zZW4nLFxuICAgIHByZXZpZXdJRDogdGhpcy5wcm9wcy52YWx1ZSB8fCBudWxsLFxuICB9O1xuXG4gIGlucHV0RmlsZSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gIG9uQ2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgaGFzUHJldmlldywgYWxsb3dlZEV4dGVuc2lvbnMgfSA9IHRoaXMucHJvcHMuZmllbGQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbWFnZVByZXZpZXdVcmw6IG51bGwsXG4gICAgICBzZWxlY3RlZEZpbGU6IGV2ZW50LnRhcmdldC5maWxlc1swXSxcbiAgICAgIHVwbG9hZEZpbGVUZXh0OiBldmVudC50YXJnZXQuZmlsZXNbMF0gPyBldmVudC50YXJnZXQuZmlsZXNbMF0ubmFtZSA6ICdObyBmaWxlIGNob3NlbicsXG4gICAgfSk7XG5cbiAgICBpZiAoaGFzUHJldmlldyAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LmZpbGVzWzBdKSB7XG4gICAgICAvLyBjaGVjayBmaWxlIHR5cGVcbiAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGV2ZW50LnRhcmdldC5maWxlc1swXS5uYW1lXG4gICAgICAgIC5zcGxpdCgnLicpXG4gICAgICAgIC5wb3AoKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTsgLy8gZmlsZSBleHRlbnNpb24gZnJvbSBpbnB1dCBmaWxlXG4gICAgICBjb25zdCBpc1N1Y2Nlc3MgPSBhbGxvd2VkRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTsgLy8gaXMgZXh0ZW5zaW9uIGluIGFjY2VwdGFibGUgdHlwZXNcbiAgICAgIGlmIChpc1N1Y2Nlc3MpIHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW1hZ2VQcmV2aWV3VXJsOiByZWFkZXIucmVzdWx0LFxuICAgICAgICAgICAgcHJldmlld0lEOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZW1vdmVGaWxlUHJldmlldyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2VQcmV2aWV3VXJsOiBudWxsLCBzZWxlY3RlZEZpbGU6IG51bGwsIHByZXZpZXdJRDogZmFsc2UgfSk7XG4gIH07XG5cbiAgcHJlcGFyZUFsbG93ZWRUeXBlcyA9ICh0eXBlcykgPT4ge1xuICAgIGxldCBhY2NlcHQgPSB0eXBlcy5zcGxpdCgnLCcpO1xuICAgIGFjY2VwdCA9IGFjY2VwdC5tYXAoc3RyID0+IGAuJHtzdHIucmVwbGFjZSgvXFxzL2csICcnKX1gKS5qb2luKCcsICcpO1xuICAgIHJldHVybiBhY2NlcHQ7XG4gIH07XG5cbiAgb25CdXR0b25DbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5pbnB1dEZpbGUuY3VycmVudC5jbGljaygpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gc2VsZWN0ZWRGaWxlLCB1cGxvYWRGaWxlVGV4dCwgaW1hZ2VQcmV2aWV3VXJsLCBwcmV2aWV3SUQgXG59ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHtcbiAgICAgIGZpZWxkLFxuICAgICAgdmFsdWUsXG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgICAgIHRvdWNoZWQsXG4gICAgICBzZXRUb3VjaGVkLFxuICAgICAgaGlkZUZpZWxkLFxuICAgICAgdXBkYXRlRm9ybSxcbiAgICAgIGZvcm1JRCxcbiAgICAgIGZpZWxkRXJyb3IsXG4gICAgICBzdHlsZWRDb21wb25lbnRzLFxuICAgICAgZXJyb3IsXG4gICAgICB1bnNldEVycm9yLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgdHlwZSxcbiAgICAgIGxhYmVsLFxuICAgICAgY3NzQ2xhc3MsXG4gICAgICBpc1JlcXVpcmVkLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICAgIGxhYmVsUGxhY2VtZW50LFxuICAgICAgd2lkdGgsXG4gICAgICBhbGxvd2VkRXh0ZW5zaW9ucyxcbiAgICAgIGJ1dHRvblRleHQsXG4gICAgICBoYXNQcmV2aWV3LFxuICAgICAgbWF4RmlsZVNpemUsXG4gICAgfSA9IGZpZWxkO1xuICAgIGNvbnN0IHtcbiBCdXR0b24gPSAnYnV0dG9uJywgTGFiZWwgPSAnbGFiZWwnLCBGaWxlV3JhcHBlciA9ICdkaXYnLCBCb3ggPSAnZGl2JyBcbn0gPSAgICAgIHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvclxuICAgICAgICAgICAgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWBcbiAgICAgICAgICAgIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICAgIH1cbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gJ25vbmUnIDogdW5kZWZpbmVkIH19XG4gICAgICA+XG4gICAgICAgIDxGaWxlV3JhcHBlciBjbGFzc05hbWU9e3R5cGV9PlxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSUR9XyR7aWR9YH0gY2xhc3NOYW1lPXtgZ2YtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICB7bWF4RmlsZVNpemUgJiYgKFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIk1BWF9GSUxFX1NJWkVcIiB2YWx1ZT17bWF4RmlsZVNpemUgKiAxMDQ4NTc2fSAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlEfV8ke2lkfWB9XG4gICAgICAgICAgICAgICAgbmFtZT17YGlucHV0XyR7aWR9YH1cbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgcmVmPXt0aGlzLmlucHV0RmlsZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlSGFuZGxlcihldmVudCk7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25CbHVyPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgYWNjZXB0PXt0aGlzLnByZXBhcmVBbGxvd2VkVHlwZXMoYWxsb3dlZEV4dGVuc2lvbnMpIHx8IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtgZXJyb3JfJHtmb3JtSUR9XyR7aWR9YH1cbiAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhdmFsaWRhdGlvbk1lc3NhZ2UgfHwgISFlcnJvcn1cbiAgICAgICAgICAgICAgICBoaWRkZW49XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7cHJldmlld0lEICYmIGZpZWxkLnByZXZpZXcgJiYgKFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZpbGUtdXBsb2FkLXByZXZpZXdcIiB2YWx1ZT17cHJldmlld0lEfSAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7aGFzUHJldmlldyAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsZS1wcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWxlICYmIGltYWdlUHJldmlld1VybFxuICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZVByZXZpZXdVcmx9KWAgfVxuICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkRmlsZSAmJiBpbWFnZVByZXZpZXdVcmwgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVtb3ZlLWZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucmVtb3ZlRmlsZVByZXZpZXcoKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBhcmlhLXByZXNzZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxlVXBsb2FkXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQnV0dG9uQ2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInllbGxvd1wiIHRhYkluZGV4PVwiLTFcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICB7YnV0dG9uVGV4dCB8fCAnQ2hvb3NlIGEgZmlsZSd9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3VwbG9hZEZpbGVUZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2lkfWB9PlxuICAgICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgfHwgZXJyb3J9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7ZmllbGRFcnJvciAmJiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JRH1fJHtpZH1gfT5cbiAgICAgICAgICAgICAge2ZpZWxkRXJyb3J9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9GaWxlV3JhcHBlcj5cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsZXVwbG9hZDtcbiJdfQ==