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

  var _useState = (0, _react.useState)([]),
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
      field = props.field,
      isRequired = props.isRequired;
  (0, _react.useEffect)(function () {
    return function () {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(function (file) {
        return URL.revokeObjectURL(file.preview);
      });
    };
  }, [files]);
  var text = dropzoneText || "Drag 'n' drop some files here, or click to select files";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9GaWVsZHMvRmlsZXVwbG9hZC9HRkRyb3B6b25lLmpzeCJdLCJuYW1lcyI6WyJBY2NlcHQiLCJkcm9wem9uZVRleHQiLCJwcm9wcyIsImZpbGVzIiwic2V0RmlsZXMiLCJjc3NDbGFzcyIsInNldGNzc0NsYXNzIiwiYWNjZXB0Iiwib25Ecm9wIiwiZXZlbnQiLCJpZCIsImZvcm1JRCIsImZpZWxkIiwiaXNSZXF1aXJlZCIsInVwZGF0ZUZvcm0iLCJzZXRUb3VjaGVkIiwidW5zZXRFcnJvciIsIm1hcCIsImZpbGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcmV2aWV3IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwib25EcmFnT3ZlciIsIm9uRHJhZ0xlYXZlIiwib25Ecm9wQWNjZXB0ZWQiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiaXNEcmFnQWN0aXZlIiwiaXNEcmFnQWNjZXB0IiwiaXNEcmFnUmVqZWN0IiwidGh1bWJzIiwibGVuZ3RoIiwibmFtZSIsImZvckVhY2giLCJyZXZva2VPYmplY3RVUkwiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLE1BQVQsT0FBNEM7QUFBQSxNQUExQkMsWUFBMEIsUUFBMUJBLFlBQTBCO0FBQUEsTUFBVEMsS0FBUzs7QUFBQSxrQkFDaEIscUJBQVMsRUFBVCxDQURnQjtBQUFBO0FBQUEsTUFDbkNDLEtBRG1DO0FBQUEsTUFDNUJDLFFBRDRCOztBQUFBLG1CQUVWLHFCQUFTLFVBQVQsQ0FGVTtBQUFBO0FBQUEsTUFFbkNDLFFBRm1DO0FBQUEsTUFFekJDLFdBRnlCOztBQUFBLHFCQUd3QyxnQ0FBWTtBQUM1RkMsSUFBQUEsTUFBTSxFQUFFLFNBRG9GO0FBRTVGQyxJQUFBQSxNQUFNLEVBQUUsZ0JBQUFDLEtBQUssRUFBSTtBQUFBLFVBQ1BDLEVBRE8sR0FDK0RSLEtBRC9ELENB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Q0FESjtBQUVFLElBQUEsSUFBSSxrQkFBV0EsRUFBWCxDQUZOO0FBR0UsSUFBQSxJQUFJLEVBQUMsTUFIUDtBQUlFLElBQUEsUUFBUSxFQUFFRztBQUpaLEtBS01lLGFBQWEsRUFMbkIsRUFMRixFQVlHSSxNQUFNLElBQUk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQTBCQSxNQUExQixDQVpiLEVBYUU7QUFBRyxJQUFBLHVCQUF1QixFQUFFO0FBQUVPLE1BQUFBLE1BQU0sRUFBRUY7QUFBVjtBQUE1QixJQWJGLENBREYsQ0FERjtBQW1CRDs7ZUFFY3JDLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnO1xuXG5mdW5jdGlvbiBBY2NlcHQoeyBkcm9wem9uZVRleHQsIC4uLnByb3BzIH0pIHtcbiAgY29uc3QgW2ZpbGVzLCBzZXRGaWxlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjc3NDbGFzcywgc2V0Y3NzQ2xhc3NdID0gdXNlU3RhdGUoJ2Ryb3B6b25lJyk7XG4gIGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmUsIGlzRHJhZ0FjY2VwdCwgaXNEcmFnUmVqZWN0IH0gPSB1c2VEcm9wem9uZSh7XG4gICAgYWNjZXB0OiAnaW1hZ2UvKicsXG4gICAgb25Ecm9wOiBldmVudCA9PiB7XG4gICAgICBjb25zdCB7IGlkLCBmb3JtSUQsIGZpZWxkLCBpc1JlcXVpcmVkLCB1cGRhdGVGb3JtLCBzZXRUb3VjaGVkLCB1bnNldEVycm9yIH0gPSBwcm9wcztcbiAgICAgIHNldEZpbGVzKFxuICAgICAgICBldmVudC5tYXAoZmlsZSA9PlxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oZmlsZSwge1xuICAgICAgICAgICAgcHJldmlldzogVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICB1bnNldEVycm9yKGlkKTtcbiAgICB9LFxuICAgIG9uRHJhZ092ZXI6IGV2ZW50ID0+IHtcbiAgICAgIHNldGNzc0NsYXNzKCdkcm9wem9uZSBvdmVyJyk7XG4gICAgfSxcbiAgICBvbkRyYWdMZWF2ZTogZXZlbnQgPT4ge1xuICAgICAgc2V0Y3NzQ2xhc3MoJ2Ryb3B6b25lJyk7XG4gICAgfSxcbiAgICBvbkRyb3BBY2NlcHRlZDogZXZlbnQgPT4ge1xuICAgICAgc2V0Y3NzQ2xhc3MoJ2Ryb3B6b25lJyk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgdGh1bWJzID1cbiAgICBmaWxlcyAmJlxuICAgICEhZmlsZXMubGVuZ3RoID4gMCAmJlxuICAgIGZpbGVzLm1hcChmaWxlID0+IChcbiAgICAgIDxkaXYga2V5PXtmaWxlLm5hbWV9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPXtmaWxlLnByZXZpZXd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKSk7XG4gIGNvbnN0IHsgaWQsIGZvcm1JRCwgZmllbGQsIGlzUmVxdWlyZWQgfSA9IHByb3BzO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiAoKSA9PiB7XG4gICAgICAvLyBNYWtlIHN1cmUgdG8gcmV2b2tlIHRoZSBkYXRhIHVyaXMgdG8gYXZvaWQgbWVtb3J5IGxlYWtzXG4gICAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4gVVJMLnJldm9rZU9iamVjdFVSTChmaWxlLnByZXZpZXcpKTtcbiAgICB9LFxuICAgIFtmaWxlc11cbiAgKTtcblxuICBjb25zdCB0ZXh0ID0gZHJvcHpvbmVUZXh0IHx8IFwiRHJhZyAnbicgZHJvcCBzb21lIGZpbGVzIGhlcmUsIG9yIGNsaWNrIHRvIHNlbGVjdCBmaWxlc1wiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgey4uLmdldFJvb3RQcm9wcyh7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjc3NDbGFzcyxcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSUR9XyR7aWR9YH1cbiAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICB7Li4uZ2V0SW5wdXRQcm9wcygpfVxuICAgICAgICAvPlxuICAgICAgICB7dGh1bWJzICYmIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld1wiPnt0aHVtYnN9PC9kaXY+fVxuICAgICAgICA8cCBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRleHQgfX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NlcHQ7XG4iXX0=