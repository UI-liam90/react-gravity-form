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
    }
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      isDragAccept = _useDropzone.isDragAccept,
      isDragReject = _useDropzone.isDragReject;

  var thumbs = files.map(function (file) {
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
    className: 'dropzone'
  }), _react["default"].createElement("input", _extends({
    id: "input_".concat(formID, "_").concat(id),
    name: "input_".concat(id),
    type: "file",
    required: isRequired
  }, getInputProps())), _react["default"].createElement("p", {
    dangerouslySetInnerHTML: {
      __html: text
    }
  })), _react["default"].createElement("aside", null, thumbs));
}

var _default = Accept;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9GaWVsZHMvRmlsZXVwbG9hZC9HRkRyb3B6b25lLmpzeCJdLCJuYW1lcyI6WyJBY2NlcHQiLCJkcm9wem9uZVRleHQiLCJwcm9wcyIsImZpbGVzIiwic2V0RmlsZXMiLCJhY2NlcHQiLCJvbkRyb3AiLCJldmVudCIsImlkIiwiZm9ybUlEIiwiZmllbGQiLCJpc1JlcXVpcmVkIiwidXBkYXRlRm9ybSIsInNldFRvdWNoZWQiLCJ1bnNldEVycm9yIiwibWFwIiwiZmlsZSIsIk9iamVjdCIsImFzc2lnbiIsInByZXZpZXciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiaXNEcmFnQWN0aXZlIiwiaXNEcmFnQWNjZXB0IiwiaXNEcmFnUmVqZWN0IiwidGh1bWJzIiwibmFtZSIsImZvckVhY2giLCJyZXZva2VPYmplY3RVUkwiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLE1BQVQsT0FBNEM7QUFBQSxNQUExQkMsWUFBMEIsUUFBMUJBLFlBQTBCO0FBQUEsTUFBVEMsS0FBUzs7QUFBQSxrQkFDaEIscUJBQVMsRUFBVCxDQURnQjtBQUFBO0FBQUEsTUFDbkNDLEtBRG1DO0FBQUEsTUFDNUJDLFFBRDRCOztBQUFBLHFCQUV3QyxnQ0FBWTtBQUM1RkMsSUFBQUEsTUFBTSxFQUFFLFNBRG9GO0FBRTVGQyxJQUFBQSxNQUFNLEVBQUUsZ0JBQUFDLEtBQUssRUFBSTtBQUFBLFVBQ1BDLEVBRE8sR0FDK0ROLEtBRC9ELENBQ1BNLEVBRE87QUFBQSxVQUNIQyxNQURHLEdBQytEUCxLQUQvRCxDQUNITyxNQURHO0FBQUEsVUFDS0MsS0FETCxHQUMrRFIsS0FEL0QsQ0FDS1EsS0FETDtBQUFBLFVBQ1lDLFVBRFosR0FDK0RULEtBRC9ELENBQ1lTLFVBRFo7QUFBQSxVQUN3QkMsVUFEeEIsR0FDK0RWLEtBRC9ELENBQ3dCVSxVQUR4QjtBQUFBLFVBQ29DQyxVQURwQyxHQUMrRFgsS0FEL0QsQ0FDb0NXLFVBRHBDO0FBQUEsVUFDZ0RDLFVBRGhELEdBQytEWixLQUQvRCxDQUNnRFksVUFEaEQ7QUFFZlYsTUFBQUEsUUFBUSxDQUNORyxLQUFLLENBQUNRLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsZUFDWkMsTUFBTSxDQUFDQyxNQUFQLENBQWNGLElBQWQsRUFBb0I7QUFDbEJHLFVBQUFBLE9BQU8sRUFBRUMsR0FBRyxDQUFDQyxlQUFKLENBQW9CTCxJQUFwQjtBQURTLFNBQXBCLENBRFk7QUFBQSxPQUFkLENBRE0sQ0FBUjtBQU9BSixNQUFBQSxVQUFVLENBQUNMLEtBQUQsRUFBUUcsS0FBUixDQUFWO0FBQ0FHLE1BQUFBLFVBQVUsQ0FBQ0wsRUFBRCxDQUFWO0FBQ0FNLE1BQUFBLFVBQVUsQ0FBQ04sRUFBRCxDQUFWO0FBQ0Q7QUFkMkYsR0FBWixDQUZ4QztBQUFBLE1BRWxDYyxZQUZrQyxnQkFFbENBLFlBRmtDO0FBQUEsTUFFcEJDLGFBRm9CLGdCQUVwQkEsYUFGb0I7QUFBQSxNQUVMQyxZQUZLLGdCQUVMQSxZQUZLO0FBQUEsTUFFU0MsWUFGVCxnQkFFU0EsWUFGVDtBQUFBLE1BRXVCQyxZQUZ2QixnQkFFdUJBLFlBRnZCOztBQW1CMUMsTUFBTUMsTUFBTSxHQUFHeEIsS0FBSyxDQUFDWSxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLFdBQzNCO0FBQUssTUFBQSxHQUFHLEVBQUVBLElBQUksQ0FBQ1k7QUFBZixPQUNFLDZDQUNFO0FBQUssTUFBQSxHQUFHLEVBQUVaLElBQUksQ0FBQ0c7QUFBZixNQURGLENBREYsQ0FEMkI7QUFBQSxHQUFkLENBQWY7QUFuQjBDLE1BMEJsQ1gsRUExQmtDLEdBMEJBTixLQTFCQSxDQTBCbENNLEVBMUJrQztBQUFBLE1BMEI5QkMsTUExQjhCLEdBMEJBUCxLQTFCQSxDQTBCOUJPLE1BMUI4QjtBQUFBLE1BMEJ0QkMsS0ExQnNCLEdBMEJBUixLQTFCQSxDQTBCdEJRLEtBMUJzQjtBQUFBLE1BMEJmQyxVQTFCZSxHQTBCQVQsS0ExQkEsQ0EwQmZTLFVBMUJlO0FBNEIxQyx3QkFDRTtBQUFBLFdBQU0sWUFBTTtBQUNWO0FBQ0FSLE1BQUFBLEtBQUssQ0FBQzBCLE9BQU4sQ0FBYyxVQUFBYixJQUFJO0FBQUEsZUFBSUksR0FBRyxDQUFDVSxlQUFKLENBQW9CZCxJQUFJLENBQUNHLE9BQXpCLENBQUo7QUFBQSxPQUFsQjtBQUNELEtBSEQ7QUFBQSxHQURGLEVBS0UsQ0FBQ2hCLEtBQUQsQ0FMRjtBQVFBLE1BQU00QixJQUFJLEdBQUc5QixZQUFZLElBQUkseURBQTdCO0FBRUEsU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRSx1Q0FDTXFCLFlBQVksQ0FBQztBQUNmVSxJQUFBQSxTQUFTLEVBQUU7QUFESSxHQUFELENBRGxCLEVBS0U7QUFDRSxJQUFBLEVBQUUsa0JBQVd2QixNQUFYLGNBQXFCRCxFQUFyQixDQURKO0FBRUUsSUFBQSxJQUFJLGtCQUFXQSxFQUFYLENBRk47QUFHRSxJQUFBLElBQUksRUFBQyxNQUhQO0FBSUUsSUFBQSxRQUFRLEVBQUVHO0FBSlosS0FLTVksYUFBYSxFQUxuQixFQUxGLEVBWUU7QUFBSSxJQUFBLHVCQUF1QixFQUFFO0FBQUVVLE1BQUFBLE1BQU0sRUFBRUY7QUFBVjtBQUE3QixJQVpGLENBREYsRUFlRSwrQ0FBUUosTUFBUixDQWZGLENBREY7QUFtQkQ7O2VBRWMzQixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEcm9wem9uZSB9IGZyb20gJ3JlYWN0LWRyb3B6b25lJztcblxuZnVuY3Rpb24gQWNjZXB0KHsgZHJvcHpvbmVUZXh0LCAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcywgaXNEcmFnQWN0aXZlLCBpc0RyYWdBY2NlcHQsIGlzRHJhZ1JlamVjdCB9ID0gdXNlRHJvcHpvbmUoe1xuICAgIGFjY2VwdDogJ2ltYWdlLyonLFxuICAgIG9uRHJvcDogZXZlbnQgPT4ge1xuICAgICAgY29uc3QgeyBpZCwgZm9ybUlELCBmaWVsZCwgaXNSZXF1aXJlZCwgdXBkYXRlRm9ybSwgc2V0VG91Y2hlZCwgdW5zZXRFcnJvciB9ID0gcHJvcHM7XG4gICAgICBzZXRGaWxlcyhcbiAgICAgICAgZXZlbnQubWFwKGZpbGUgPT5cbiAgICAgICAgICBPYmplY3QuYXNzaWduKGZpbGUsIHtcbiAgICAgICAgICAgIHByZXZpZXc6IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgdGh1bWJzID0gZmlsZXMubWFwKGZpbGUgPT4gKFxuICAgIDxkaXYga2V5PXtmaWxlLm5hbWV9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9e2ZpbGUucHJldmlld30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApKTtcbiAgY29uc3QgeyBpZCwgZm9ybUlELCBmaWVsZCwgaXNSZXF1aXJlZCB9ID0gcHJvcHM7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+ICgpID0+IHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0byByZXZva2UgdGhlIGRhdGEgdXJpcyB0byBhdm9pZCBtZW1vcnkgbGVha3NcbiAgICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PiBVUkwucmV2b2tlT2JqZWN0VVJMKGZpbGUucHJldmlldykpO1xuICAgIH0sXG4gICAgW2ZpbGVzXVxuICApO1xuXG4gIGNvbnN0IHRleHQgPSBkcm9wem9uZVRleHQgfHwgXCJEcmFnICduJyBkcm9wIHNvbWUgZmlsZXMgaGVyZSwgb3IgY2xpY2sgdG8gc2VsZWN0IGZpbGVzXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdlxuICAgICAgICB7Li4uZ2V0Um9vdFByb3BzKHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdkcm9wem9uZScsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlEfV8ke2lkfWB9XG4gICAgICAgICAgbmFtZT17YGlucHV0XyR7aWR9YH1cbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgey4uLmdldElucHV0UHJvcHMoKX1cbiAgICAgICAgLz5cbiAgICAgICAgPHAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGV4dCB9fSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YXNpZGU+e3RodW1ic308L2FzaWRlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NlcHQ7XG4iXX0=