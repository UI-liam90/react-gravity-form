"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDropzone = require("react-dropzone");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Accept(_ref) {
  var dropzoneText = _ref.dropzoneText,
      props = _objectWithoutProperties(_ref, ["dropzoneText"]);

  var field = props.field;

  var _ref2 = field || [],
      defaultValue = _ref2.defaultValue;

  var _useState = (0, _react.useState)([defaultValue]),
      _useState2 = _slicedToArray(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var _useState3 = (0, _react.useState)('dropzone'),
      _useState4 = _slicedToArray(_useState3, 2),
      cssClass = _useState4[0],
      setcssClass = _useState4[1];

  var _useDropzone = (0, _reactDropzone.useDropzone)({
    accept: 'image/*',
    onDrop: function onDrop(event) {
      var id = props.id,
          formID = props.formID,
          field = props.field,
          isRequired = props.isRequired,
          updateForm = props.updateForm,
          setTouched = props.setTouched,
          unsetError = props.unsetError;
      setFiles(event.map(function (file) {
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        });
      }));
      updateForm(event, field);
      setTouched(id);
      unsetError(id);
    },
    onDragOver: function onDragOver(event) {
      setcssClass('dropzone over');
    },
    onDragLeave: function onDragLeave(event) {
      setcssClass('dropzone');
    },
    onDropAccepted: function onDropAccepted(event) {
      setcssClass('dropzone');
    }
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      isDragAccept = _useDropzone.isDragAccept,
      isDragReject = _useDropzone.isDragReject;

  var thumbs = files && !!files.length > 0 && files.map(function (file) {
    return _react["default"].createElement("div", {
      key: file.name
    }, _react["default"].createElement("div", null, _react["default"].createElement("img", {
      src: file.preview
    })));
  });
  var id = props.id,
      formID = props.formID,
      isRequired = props.isRequired;
  (0, _react.useEffect)(function () {
    return function () {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(function (file) {
        return URL.revokeObjectURL(file.preview);
      });
    };
  }, [files]);
  var text = dropzoneText || 'Drag \'n\' drop some files here, or click to select files';
  return _react["default"].createElement("div", {
    className: "container"
  }, _react["default"].createElement("div", getRootProps({
    className: cssClass
  }), _react["default"].createElement("input", _extends({
    id: "input_".concat(formID, "_").concat(id),
    name: "input_".concat(id),
    type: "file",
    required: isRequired
  }, getInputProps())), thumbs && _react["default"].createElement("div", {
    className: "preview"
  }, thumbs), _react["default"].createElement("p", {
    dangerouslySetInnerHTML: {
      __html: text
    }
  })));
}

var _default = Accept;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9GaWVsZHMvRmlsZXVwbG9hZC9HRkRyb3B6b25lLmpzeCJdLCJuYW1lcyI6WyJBY2NlcHQiLCJkcm9wem9uZVRleHQiLCJwcm9wcyIsImZpZWxkIiwiZGVmYXVsdFZhbHVlIiwiZmlsZXMiLCJzZXRGaWxlcyIsImNzc0NsYXNzIiwic2V0Y3NzQ2xhc3MiLCJhY2NlcHQiLCJvbkRyb3AiLCJldmVudCIsImlkIiwiZm9ybUlEIiwiaXNSZXF1aXJlZCIsInVwZGF0ZUZvcm0iLCJzZXRUb3VjaGVkIiwidW5zZXRFcnJvciIsIm1hcCIsImZpbGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcmV2aWV3IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwib25EcmFnT3ZlciIsIm9uRHJhZ0xlYXZlIiwib25Ecm9wQWNjZXB0ZWQiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiaXNEcmFnQWN0aXZlIiwiaXNEcmFnQWNjZXB0IiwiaXNEcmFnUmVqZWN0IiwidGh1bWJzIiwibGVuZ3RoIiwibmFtZSIsImZvckVhY2giLCJyZXZva2VPYmplY3RVUkwiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLE1BQVQsT0FBNEM7QUFBQSxNQUExQkMsWUFBMEIsUUFBMUJBLFlBQTBCO0FBQUEsTUFBVEMsS0FBUzs7QUFBQSxNQUNsQ0MsS0FEa0MsR0FDeEJELEtBRHdCLENBQ2xDQyxLQURrQzs7QUFBQSxjQUVqQkEsS0FBSyxJQUFJLEVBRlE7QUFBQSxNQUVsQ0MsWUFGa0MsU0FFbENBLFlBRmtDOztBQUFBLGtCQUdoQixxQkFBUyxDQUFDQSxZQUFELENBQVQsQ0FIZ0I7QUFBQTtBQUFBLE1BR25DQyxLQUhtQztBQUFBLE1BRzVCQyxRQUg0Qjs7QUFBQSxtQkFJVixxQkFBUyxVQUFULENBSlU7QUFBQTtBQUFBLE1BSW5DQyxRQUptQztBQUFBLE1B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QUFBLFNBQVMsRUFBRWhDO0FBREksR0FBRCxDQURsQixFQUtFO0FBQ0UsSUFBQSxFQUFFLGtCQUFXTSxNQUFYLGNBQXFCRCxFQUFyQixDQURKO0FBRUUsSUFBQSxJQUFJLGtCQUFXQSxFQUFYLENBRk47QUFHRSxJQUFBLElBQUksRUFBQyxNQUhQO0FBSUUsSUFBQSxRQUFRLEVBQUVFO0FBSlosS0FLTWUsYUFBYSxFQUxuQixFQUxGLEVBWUdJLE1BQU0sSUFBSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBMEJBLE1BQTFCLENBWmIsRUFhRTtBQUFHLElBQUEsdUJBQXVCLEVBQUU7QUFBRU8sTUFBQUEsTUFBTSxFQUFFRjtBQUFWO0FBQTVCLElBYkYsQ0FERixDQURGO0FBbUJEOztlQUVjdEMsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tICdyZWFjdC1kcm9wem9uZSc7XG5cbmZ1bmN0aW9uIEFjY2VwdCh7IGRyb3B6b25lVGV4dCwgLi4ucHJvcHMgfSkge1xuICBjb25zdCB7IGZpZWxkIH0gPSBwcm9wcztcbiAgY29uc3QgeyBkZWZhdWx0VmFsdWUgfSA9IGZpZWxkIHx8IFtdO1xuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKFtkZWZhdWx0VmFsdWVdKTtcbiAgY29uc3QgW2Nzc0NsYXNzLCBzZXRjc3NDbGFzc10gPSB1c2VTdGF0ZSgnZHJvcHpvbmUnKTtcbiAgY29uc3Qge1xuIGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcywgaXNEcmFnQWN0aXZlLCBpc0RyYWdBY2NlcHQsIGlzRHJhZ1JlamVjdCBcbn0gPSB1c2VEcm9wem9uZSh7XG4gICAgYWNjZXB0OiAnaW1hZ2UvKicsXG4gICAgb25Ecm9wOiAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHtcbiBpZCwgZm9ybUlELCBmaWVsZCwgaXNSZXF1aXJlZCwgdXBkYXRlRm9ybSwgc2V0VG91Y2hlZCwgdW5zZXRFcnJvciBcbn0gPSBwcm9wcztcbiAgICAgIHNldEZpbGVzKFxuICAgICAgICBldmVudC5tYXAoZmlsZSA9PiBPYmplY3QuYXNzaWduKGZpbGUsIHtcbiAgICAgICAgICAgIHByZXZpZXc6IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSksXG4gICAgICAgICAgfSksKSxcbiAgICAgICk7XG4gICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgIH0sXG4gICAgb25EcmFnT3ZlcjogKGV2ZW50KSA9PiB7XG4gICAgICBzZXRjc3NDbGFzcygnZHJvcHpvbmUgb3ZlcicpO1xuICAgIH0sXG4gICAgb25EcmFnTGVhdmU6IChldmVudCkgPT4ge1xuICAgICAgc2V0Y3NzQ2xhc3MoJ2Ryb3B6b25lJyk7XG4gICAgfSxcbiAgICBvbkRyb3BBY2NlcHRlZDogKGV2ZW50KSA9PiB7XG4gICAgICBzZXRjc3NDbGFzcygnZHJvcHpvbmUnKTtcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCB0aHVtYnMgPSAgICBmaWxlc1xuICAgICYmICEhZmlsZXMubGVuZ3RoID4gMFxuICAgICYmIGZpbGVzLm1hcChmaWxlID0+IChcbiAgICAgIDxkaXYga2V5PXtmaWxlLm5hbWV9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPXtmaWxlLnByZXZpZXd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKSk7XG4gIGNvbnN0IHsgaWQsIGZvcm1JRCwgaXNSZXF1aXJlZCB9ID0gcHJvcHM7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+ICgpID0+IHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0byByZXZva2UgdGhlIGRhdGEgdXJpcyB0byBhdm9pZCBtZW1vcnkgbGVha3NcbiAgICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PiBVUkwucmV2b2tlT2JqZWN0VVJMKGZpbGUucHJldmlldykpO1xuICAgIH0sXG4gICAgW2ZpbGVzXSxcbiAgKTtcblxuICBjb25zdCB0ZXh0ID0gZHJvcHpvbmVUZXh0IHx8ICdEcmFnIFxcJ25cXCcgZHJvcCBzb21lIGZpbGVzIGhlcmUsIG9yIGNsaWNrIHRvIHNlbGVjdCBmaWxlcyc7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdlxuICAgICAgICB7Li4uZ2V0Um9vdFByb3BzKHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNzc0NsYXNzLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JRH1fJHtpZH1gfVxuICAgICAgICAgIG5hbWU9e2BpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgIHsuLi5nZXRJbnB1dFByb3BzKCl9XG4gICAgICAgIC8+XG4gICAgICAgIHt0aHVtYnMgJiYgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3XCI+e3RodW1ic308L2Rpdj59XG4gICAgICAgIDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGV4dCB9fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY2VwdDtcbiJdfQ==