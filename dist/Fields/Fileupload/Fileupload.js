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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9GaWVsZHMvRmlsZXVwbG9hZC9GaWxldXBsb2FkLmpzeCJdLCJuYW1lcyI6WyJGaWxldXBsb2FkIiwiaW1hZ2VQcmV2aWV3VXJsIiwicHJvcHMiLCJmaWVsZCIsInByZXZpZXciLCJzZWxlY3RlZEZpbGUiLCJ1cGxvYWRGaWxlVGV4dCIsInByZXZpZXdJRCIsInZhbHVlIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJldmVudCIsImhhc1ByZXZpZXciLCJhbGxvd2VkRXh0ZW5zaW9ucyIsInNldFN0YXRlIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwiZXh0ZW5zaW9uIiwic3BsaXQiLCJwb3AiLCJ0b0xvd2VyQ2FzZSIsImlzU3VjY2VzcyIsImluZGV4T2YiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInR5cGVzIiwiYWNjZXB0IiwibWFwIiwic3RyIiwicmVwbGFjZSIsImpvaW4iLCJpbnB1dEZpbGUiLCJjdXJyZW50IiwiY2xpY2siLCJzdGF0ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwiZm9ybUlEIiwiZmllbGRFcnJvciIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJkcm9wem9uZVRleHQiLCJpZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwiaXNSZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiYnV0dG9uVGV4dCIsIm1heEZpbGVTaXplIiwiQnV0dG9uIiwiTGFiZWwiLCJGaWxlV3JhcHBlciIsIkJveCIsImhhc0Ryb3B6b25lIiwiZGlzcGxheSIsInVuZGVmaW5lZCIsIm9uQ2hhbmdlSGFuZGxlciIsInByZXBhcmVBbGxvd2VkVHlwZXMiLCJiYWNrZ3JvdW5kSW1hZ2Ui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QUEsSUFBSSxFQUFDLFFBSFA7QUFJRSxRQUFBLFNBQVMsRUFBQyxZQUpaO0FBS0UsUUFBQSxPQUFPLEVBQUUsS0FBS0M7QUFMaEIsU0FPRSxnQ0FBQyxNQUFEO0FBQVEsUUFBQSxLQUFLLEVBQUMsUUFBZDtBQUF1QixRQUFBLFFBQVEsRUFBQyxJQUFoQztBQUFxQyxRQUFBLElBQUksRUFBQztBQUExQyxTQUNHYixVQUFVLElBQUksZUFEakIsQ0FQRixFQVVFLDhDQUFPckQsY0FBUCxDQVZGLENBL0NGLEVBNERHaUQsV0FBVyxJQUFJO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUE4QkEsV0FBOUIsQ0E1RGxCLENBVkosRUF5RUcsQ0FBRWhCLGlCQUFpQixJQUFJQyxPQUF0QixJQUFrQ08sS0FBbkMsS0FDQztBQUFNLFFBQUEsU0FBUyxFQUFDLGVBQWhCO0FBQWdDLFFBQUEsRUFBRSxrQkFBV0csRUFBWDtBQUFsQyxTQUNHWCxpQkFBaUIsSUFBSVEsS0FEeEIsQ0ExRUosRUE4RUdGLFVBQVUsSUFDVDtBQUFNLFFBQUEsU0FBUyxFQUFDLGVBQWhCO0FBQWdDLFFBQUEsRUFBRSxrQkFBV0QsTUFBWCxjQUFxQk0sRUFBckI7QUFBbEMsU0FDR0wsVUFESCxDQS9FSixDQVRGLENBREY7QUFnR0Q7Ozs7RUEvTHNCNEIsZ0I7O2VBa01WekUsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRHJvcHpvbmUgZnJvbSAncmVhY3QtZHJvcHpvbmUnO1xuaW1wb3J0IEdGRHJvcHpvbmUgZnJvbSAnLi9HRkRyb3B6b25lJztcblxuY2xhc3MgRmlsZXVwbG9hZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGltYWdlUHJldmlld1VybDogdGhpcy5wcm9wcy5maWVsZC5wcmV2aWV3IHx8IG51bGwsXG4gICAgc2VsZWN0ZWRGaWxlOiB0aGlzLnByb3BzLmZpZWxkLnByZXZpZXcgPyB0cnVlIDogbnVsbCxcbiAgICB1cGxvYWRGaWxlVGV4dDogJ05vIGZpbGUgY2hvc2VuJyxcbiAgICBwcmV2aWV3SUQ6IHRoaXMucHJvcHMudmFsdWUgfHwgbnVsbCxcbiAgfTtcblxuICBpbnB1dEZpbGUgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICBvbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGhhc1ByZXZpZXcsIGFsbG93ZWRFeHRlbnNpb25zIH0gPSB0aGlzLnByb3BzLmZpZWxkO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW1hZ2VQcmV2aWV3VXJsOiBudWxsLFxuICAgICAgc2VsZWN0ZWRGaWxlOiBldmVudC50YXJnZXQuZmlsZXNbMF0sXG4gICAgICB1cGxvYWRGaWxlVGV4dDogZXZlbnQudGFyZ2V0LmZpbGVzWzBdID8gZXZlbnQudGFyZ2V0LmZpbGVzWzBdLm5hbWUgOiAnTm8gZmlsZSBjaG9zZW4nLFxuICAgIH0pO1xuXG4gICAgaWYgKGhhc1ByZXZpZXcgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5maWxlc1swXSkge1xuICAgICAgLy8gY2hlY2sgZmlsZSB0eXBlXG4gICAgICBjb25zdCBleHRlbnNpb24gPSBldmVudC50YXJnZXQuZmlsZXNbMF0ubmFtZVxuICAgICAgICAuc3BsaXQoJy4nKVxuICAgICAgICAucG9wKClcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7IC8vIGZpbGUgZXh0ZW5zaW9uIGZyb20gaW5wdXQgZmlsZVxuICAgICAgY29uc3QgaXNTdWNjZXNzID0gYWxsb3dlZEV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7IC8vIGlzIGV4dGVuc2lvbiBpbiBhY2NlcHRhYmxlIHR5cGVzXG4gICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGltYWdlUHJldmlld1VybDogcmVhZGVyLnJlc3VsdCxcbiAgICAgICAgICAgIHByZXZpZXdJRDogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmVtb3ZlRmlsZVByZXZpZXcgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlUHJldmlld1VybDogbnVsbCwgc2VsZWN0ZWRGaWxlOiBudWxsLCBwcmV2aWV3SUQ6IGZhbHNlIH0pO1xuICB9O1xuXG4gIHByZXBhcmVBbGxvd2VkVHlwZXMgPSAodHlwZXMpID0+IHtcbiAgICBsZXQgYWNjZXB0ID0gdHlwZXMuc3BsaXQoJywnKTtcbiAgICBhY2NlcHQgPSBhY2NlcHQubWFwKHN0ciA9PiBgLiR7c3RyLnJlcGxhY2UoL1xccy9nLCAnJyl9YCkuam9pbignLCAnKTtcbiAgICByZXR1cm4gYWNjZXB0O1xuICB9O1xuXG4gIG9uQnV0dG9uQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMuaW5wdXRGaWxlLmN1cnJlbnQuY2xpY2soKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuIHNlbGVjdGVkRmlsZSwgdXBsb2FkRmlsZVRleHQsIGltYWdlUHJldmlld1VybCwgcHJldmlld0lEIFxufSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCB7XG4gICAgICBmaWVsZCxcbiAgICAgIHZhbHVlLFxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgICB0b3VjaGVkLFxuICAgICAgc2V0VG91Y2hlZCxcbiAgICAgIGhpZGVGaWVsZCxcbiAgICAgIHVwZGF0ZUZvcm0sXG4gICAgICBmb3JtSUQsXG4gICAgICBmaWVsZEVycm9yLFxuICAgICAgc3R5bGVkQ29tcG9uZW50cyxcbiAgICAgIGVycm9yLFxuICAgICAgdW5zZXRFcnJvcixcbiAgICAgIGRyb3B6b25lVGV4dFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgdHlwZSxcbiAgICAgIGxhYmVsLFxuICAgICAgY3NzQ2xhc3MsXG4gICAgICBpc1JlcXVpcmVkLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICAgIGxhYmVsUGxhY2VtZW50LFxuICAgICAgd2lkdGgsXG4gICAgICBhbGxvd2VkRXh0ZW5zaW9ucyxcbiAgICAgIGJ1dHRvblRleHQsXG4gICAgICBoYXNQcmV2aWV3LFxuICAgICAgbWF4RmlsZVNpemUsXG4gICAgfSA9IGZpZWxkO1xuICAgIGNvbnN0IHtcbiBCdXR0b24gPSAnYnV0dG9uJywgTGFiZWwgPSAnbGFiZWwnLCBGaWxlV3JhcHBlciA9ICdkaXYnLCBCb3ggPSAnZGl2JyBcbn0gPSAgICAgIHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG5cbiAgICBjb25zdCBoYXNEcm9wem9uZSA9IGNzc0NsYXNzLmluZGV4T2YoJ2Ryb3B6b25lJykgPiAtMTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcbiAgICAgICAgICAgID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gXG4gICAgICAgICAgICA6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuICAgICAgICB9XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/ICdub25lJyA6IHVuZGVmaW5lZCB9fVxuICAgICAgPlxuICAgICAgICA8RmlsZVdyYXBwZXIgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAgICA8TGFiZWwgaHRtbEZvcj17YGlucHV0XyR7Zm9ybUlEfV8ke2lkfWB9IGNsYXNzTmFtZT17YGdmLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICB7aXNSZXF1aXJlZCA/IDxhYmJyPio8L2FiYnI+IDogbnVsbH1cbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgKSA6IGhhc0Ryb3B6b25lID8gKFxuICAgICAgICAgICAgICA8R0ZEcm9wem9uZSBkcm9wem9uZVRleHQ9e2Ryb3B6b25lVGV4dH0gZmllbGQ9e2ZpZWxkfSBpZD17aWR9IGZvcm1JRD17Zm9ybUlEfSBpc1JlcXVpcmVkPXtpc1JlcXVpcmVkfSB1cGRhdGVGb3JtPXt1cGRhdGVGb3JtfSBzZXRUb3VjaGVkPXtzZXRUb3VjaGVkfSB1bnNldEVycm9yPXt1bnNldEVycm9yfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIHttYXhGaWxlU2l6ZSAmJiAoXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiTUFYX0ZJTEVfU0laRVwiIHZhbHVlPXttYXhGaWxlU2l6ZSAqIDEwNDg1NzZ9IC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSUR9XyR7aWR9YH1cbiAgICAgICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICAgICAgICByZWY9e3RoaXMuaW5wdXRGaWxlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2VIYW5kbGVyKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkJsdXI9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBhY2NlcHQ9e3RoaXMucHJlcGFyZUFsbG93ZWRUeXBlcyhhbGxvd2VkRXh0ZW5zaW9ucykgfHwgdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2BlcnJvcl8ke2Zvcm1JRH1fJHtpZH1gfVxuICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17ISF2YWxpZGF0aW9uTWVzc2FnZSB8fCAhIWVycm9yfVxuICAgICAgICAgICAgICAgIGhpZGRlbj1cImhpZGRlblwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtwcmV2aWV3SUQgJiYgZmllbGQucHJldmlldyAmJiAoXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZmlsZS11cGxvYWQtcHJldmlld1wiIHZhbHVlPXtwcmV2aWV3SUR9IC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtoYXNQcmV2aWV3ICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxlLXByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpbGUgJiYgaW1hZ2VQcmV2aWV3VXJsXG4gICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlUHJldmlld1VybH0pYCB9XG4gICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRGaWxlICYmIGltYWdlUHJldmlld1VybCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZW1vdmUtZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5yZW1vdmVGaWxlUHJldmlldygpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGFyaWEtcHJlc3NlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD1cIjBcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGVVcGxvYWRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25CdXR0b25DbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwieWVsbG93XCIgdGFiSW5kZXg9XCItMVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgIHtidXR0b25UZXh0IHx8ICdDaG9vc2UgYSBmaWxlJ31cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57dXBsb2FkRmlsZVRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgICAgeygodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3IpICYmIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7aWR9YH0+XG4gICAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSB8fCBlcnJvcn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtmaWVsZEVycm9yICYmIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlEfV8ke2lkfWB9PlxuICAgICAgICAgICAgICB7ZmllbGRFcnJvcn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0ZpbGVXcmFwcGVyPlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWxldXBsb2FkO1xuIl19