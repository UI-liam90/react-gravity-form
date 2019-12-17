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

  var _useState = (0, _react.useState)(defaultValue ? [defaultValue] : []),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9GaWVsZHMvRmlsZXVwbG9hZC9HRkRyb3B6b25lLmpzeCJdLCJuYW1lcyI6WyJBY2NlcHQiLCJkcm9wem9uZVRleHQiLCJwcm9wcyIsImZpZWxkIiwiZGVmYXVsdFZhbHVlIiwiZmlsZXMiLCJzZXRGaWxlcyIsImNzc0NsYXNzIiwic2V0Y3NzQ2xhc3MiLCJhY2NlcHQiLCJvbkRyb3AiLCJldmVudCIsImlkIiwiZm9ybUlEIiwiaXNSZXF1aXJlZCIsInVwZGF0ZUZvcm0iLCJzZXRUb3VjaGVkIiwidW5zZXRFcnJvciIsIm1hcCIsImZpbGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcmV2aWV3IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwib25EcmFnT3ZlciIsIm9uRHJhZ0xlYXZlIiwib25Ecm9wQWNjZXB0ZWQiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiaXNEcmFnQWN0aXZlIiwiaXNEcmFnQWNjZXB0IiwiaXNEcmFnUmVqZWN0IiwidGh1bWJzIiwibGVuZ3RoIiwibmFtZSIsImZvckVhY2giLCJyZXZva2VPYmplY3RVUkwiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLE1BQVQsT0FBNEM7QUFBQSxNQUExQkMsWUFBMEIsUUFBMUJBLFlBQTBCO0FBQUEsTUFBVEMsS0FBUzs7QUFBQSxNQUNsQ0MsS0FEa0MsR0FDeEJELEtBRHdCLENBQ2xDQyxLQURrQzs7QUFBQSxjQUVqQkEsS0FBSyxJQUFJLEVBRlE7QUFBQSxNQUVsQ0MsWUFGa0MsU0FFbENBLFlBRmtDOztBQUFBLGtCQUdoQixxQkFBU0EsWUFBWSxHQUFHLENBQUNBLFlBQUQsQ0FBSCxHQUFvQixFQUF6QyxDQUhnQjtBQUFBO0FBQUEsTUFHbkNDLEtBSG1DO0FBQUEsTUFHNUJDLFFBSDRCOztBQUFBLG1CQUlWLHFCQUFTLFVBQVQsQ0FKVTtBQUFBO0FB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Q00yQixZQUFZLENBQUM7QUFDZlcsSUFBQUEsU0FBUyxFQUFFaEM7QUFESSxHQUFELENBRGxCLEVBS0U7QUFDRSxJQUFBLEVBQUUsa0JBQVdNLE1BQVgsY0FBcUJELEVBQXJCLENBREo7QUFFRSxJQUFBLElBQUksa0JBQVdBLEVBQVgsQ0FGTjtBQUdFLElBQUEsSUFBSSxFQUFDLE1BSFA7QUFJRSxJQUFBLFFBQVEsRUFBRUU7QUFKWixLQUtNZSxhQUFhLEVBTG5CLEVBTEYsRUFZR0ksTUFBTSxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUEwQkEsTUFBMUIsQ0FaYixFQWFFO0FBQUcsSUFBQSx1QkFBdUIsRUFBRTtBQUFFTyxNQUFBQSxNQUFNLEVBQUVGO0FBQVY7QUFBNUIsSUFiRixDQURGLENBREY7QUFtQkQ7O2VBRWN0QyxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEcm9wem9uZSB9IGZyb20gJ3JlYWN0LWRyb3B6b25lJztcblxuZnVuY3Rpb24gQWNjZXB0KHsgZHJvcHpvbmVUZXh0LCAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHsgZmllbGQgfSA9IHByb3BzO1xuICBjb25zdCB7IGRlZmF1bHRWYWx1ZSB9ID0gZmllbGQgfHwgW107XG4gIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlID8gW2RlZmF1bHRWYWx1ZV0gOiBbXSk7XG4gIGNvbnN0IFtjc3NDbGFzcywgc2V0Y3NzQ2xhc3NdID0gdXNlU3RhdGUoJ2Ryb3B6b25lJyk7XG4gIGNvbnN0IHtcbiBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSwgaXNEcmFnQWNjZXB0LCBpc0RyYWdSZWplY3QgXG59ID0gdXNlRHJvcHpvbmUoe1xuICAgIGFjY2VwdDogJ2ltYWdlLyonLFxuICAgIG9uRHJvcDogKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7XG4gaWQsIGZvcm1JRCwgZmllbGQsIGlzUmVxdWlyZWQsIHVwZGF0ZUZvcm0sIHNldFRvdWNoZWQsIHVuc2V0RXJyb3IgXG59ID0gcHJvcHM7XG4gICAgICBzZXRGaWxlcyhcbiAgICAgICAgZXZlbnQubWFwKGZpbGUgPT4gT2JqZWN0LmFzc2lnbihmaWxlLCB7XG4gICAgICAgICAgICBwcmV2aWV3OiBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpLFxuICAgICAgICAgIH0pLCksXG4gICAgICApO1xuICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICB1bnNldEVycm9yKGlkKTtcbiAgICB9LFxuICAgIG9uRHJhZ092ZXI6IChldmVudCkgPT4ge1xuICAgICAgc2V0Y3NzQ2xhc3MoJ2Ryb3B6b25lIG92ZXInKTtcbiAgICB9LFxuICAgIG9uRHJhZ0xlYXZlOiAoZXZlbnQpID0+IHtcbiAgICAgIHNldGNzc0NsYXNzKCdkcm9wem9uZScpO1xuICAgIH0sXG4gICAgb25Ecm9wQWNjZXB0ZWQ6IChldmVudCkgPT4ge1xuICAgICAgc2V0Y3NzQ2xhc3MoJ2Ryb3B6b25lJyk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgdGh1bWJzID0gICAgZmlsZXNcbiAgICAmJiAhIWZpbGVzLmxlbmd0aCA+IDBcbiAgICAmJiBmaWxlcy5tYXAoZmlsZSA9PiAoXG4gICAgICA8ZGl2IGtleT17ZmlsZS5uYW1lfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIHNyYz17ZmlsZS5wcmV2aWV3fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICkpO1xuICBjb25zdCB7IGlkLCBmb3JtSUQsIGlzUmVxdWlyZWQgfSA9IHByb3BzO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiAoKSA9PiB7XG4gICAgICAvLyBNYWtlIHN1cmUgdG8gcmV2b2tlIHRoZSBkYXRhIHVyaXMgdG8gYXZvaWQgbWVtb3J5IGxlYWtzXG4gICAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4gVVJMLnJldm9rZU9iamVjdFVSTChmaWxlLnByZXZpZXcpKTtcbiAgICB9LFxuICAgIFtmaWxlc10sXG4gICk7XG5cbiAgY29uc3QgdGV4dCA9IGRyb3B6b25lVGV4dCB8fCAnRHJhZyBcXCduXFwnIGRyb3Agc29tZSBmaWxlcyBoZXJlLCBvciBjbGljayB0byBzZWxlY3QgZmlsZXMnO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgey4uLmdldFJvb3RQcm9wcyh7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjc3NDbGFzcyxcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSUR9XyR7aWR9YH1cbiAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICB7Li4uZ2V0SW5wdXRQcm9wcygpfVxuICAgICAgICAvPlxuICAgICAgICB7dGh1bWJzICYmIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld1wiPnt0aHVtYnN9PC9kaXY+fVxuICAgICAgICA8cCBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRleHQgfX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NlcHQ7XG4iXX0=