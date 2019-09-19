"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _queryString = _interopRequireDefault(require("query-string"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = function _default(_ref) {
  var field = _ref.field,
      value = _ref.value,
      validationMessage = _ref.validationMessage,
      touched = _ref.touched,
      setTouched = _ref.setTouched,
      updateForm = _ref.updateForm,
      props = _objectWithoutProperties(_ref, ["field", "value", "validationMessage", "touched", "setTouched", "updateForm"]);

  var id = field.id,
      type = field.type,
      isRequired = field.isRequired,
      customName = field.customName,
      formId = field.formId;
  var prePopulated = false;

  if (field.allowsPrepopulate) {
    var queries = _queryString["default"].parse(location.search);

    prePopulated = queries[field.inputName];
  }

  return _react["default"].createElement("div", null, _react["default"].createElement("input", {
    name: customName || "input_".concat(id),
    type: type,
    value: !prePopulated ? value : prePopulated,
    required: isRequired,
    onChange: function onChange(event) {
      return updateForm(event, field);
    },
    onBlur: function onBlur(event) {
      updateForm(event, field);
      setTouched(id);
    },
    "aria-describedby": "error_".concat(formId, "_").concat(id),
    "aria-invalid": !!validationMessage
  }), validationMessage && touched && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(formId, "_").concat(id)
  }, validationMessage));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvSGlkZGVuLmpzeCJdLCJuYW1lcyI6WyJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInVwZGF0ZUZvcm0iLCJwcm9wcyIsImlkIiwidHlwZSIsImlzUmVxdWlyZWQiLCJjdXN0b21OYW1lIiwiZm9ybUlkIiwicHJlUG9wdWxhdGVkIiwiYWxsb3dzUHJlcG9wdWxhdGUiLCJxdWVyaWVzIiwicXVlcnlTdHJpbmciLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwiaW5wdXROYW1lIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7ZUFFZSx3QkFFVDtBQUFBLE1BREpBLEtBQ0ksUUFESkEsS0FDSTtBQUFBLE1BREdDLEtBQ0gsUUFER0EsS0FDSDtBQUFBLE1BRFVDLGlCQUNWLFFBRFVBLGlCQUNWO0FBQUEsTUFENkJDLE9BQzdCLFFBRDZCQSxPQUM3QjtBQUFBLE1BRHNDQyxVQUN0QyxRQURzQ0EsVUFDdEM7QUFBQSxNQURrREMsVUFDbEQsUUFEa0RBLFVBQ2xEO0FBQUEsTUFEaUVDLEtBQ2pFOztBQUFBLE1BRUZDLEVBRkUsR0FHQVAsS0FIQSxDQUVGTyxFQUZFO0FBQUEsTUFFRUMsSUFGRixHQUdBUixLQUhBLENBRUVRLElBRkY7QUFBQSxNQUVRQyxVQUZSLEdBR0FULEtBSEEsQ0FFUVMsVUFGUjtBQUFBLE1BRW9CQyxVQUZwQixHQUdBVixLQUhBLENBRW9CVSxVQUZwQjtBQUFBLE1BRWdDQyxNQUZoQyxHQUdBWCxLQUhBLENBRWdDVyxNQUZoQztBQUlKLE1BQUlDLFlBQVksR0FBRyxLQUFuQjs7QUFDQSxNQUFJWixLQUFLLENBQUNhLGlCQUFWLEVBQTZCO0FBQzNCLFFBQU1DLE9BQU8sR0FBR0Msd0JBQVlDLEtBQVosQ0FBa0JDLFFBQVEsQ0FBQ0MsTUFBM0IsQ0FBaEI7O0FBQ0FOLElBQUFBLFlBQVksR0FBR0UsT0FBTyxDQUFDZCxLQUFLLENBQUNtQixTQUFQLENBQXRCO0FBQ0Q7O0FBQ0QsU0FDRSw2Q0FDRTtBQUNFLElBQUEsSUFBSSxFQUFFVCxVQUFVLG9CQUFhSCxFQUFiLENBRGxCO0FBRUUsSUFBQSxJQUFJLEVBQUVDLElBRlI7QUFHRSxJQUFBLEtBQUssRUFBRSxDQUFDSSxZQUFELEdBQWdCWCxLQUFoQixHQUF3QlcsWUFIakM7QUFJRSxJQUFBLFFBQVEsRUFBRUgsVUFKWjtBQUtFLElBQUEsUUFBUSxFQUFFLGtCQUFBVyxLQUFLO0FBQUEsYUFBSWYsVUFBVSxDQUFDZSxLQUFELEVBQVFwQixLQUFSLENBQWQ7QUFBQSxLQUxqQjtBQU1FLElBQUEsTUFBTSxFQUFFLGdCQUFDb0IsS0FBRCxFQUFXO0FBQ2pCZixNQUFBQSxVQUFVLENBQUNlLEtBQUQsRUFBUXBCLEtBQVIsQ0FBVjtBQUNBSSxNQUFBQSxVQUFVLENBQUNHLEVBQUQsQ0FBVjtBQUNELEtBVEg7QUFVRSx3Q0FBMkJJLE1BQTNCLGNBQXFDSixFQUFyQyxDQVZGO0FBV0Usb0JBQWMsQ0FBQyxDQUFDTDtBQVhsQixJQURGLEVBY0dBLGlCQUFpQixJQUFJQyxPQUFyQixJQUNDO0FBQU0sSUFBQSxTQUFTLEVBQUMsZUFBaEI7QUFBZ0MsSUFBQSxFQUFFLGtCQUFXUSxNQUFYLGNBQXFCSixFQUFyQjtBQUFsQyxLQUNHTCxpQkFESCxDQWZKLENBREY7QUFzQkQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsIHZhbHVlLCB2YWxpZGF0aW9uTWVzc2FnZSwgdG91Y2hlZCwgc2V0VG91Y2hlZCwgdXBkYXRlRm9ybSwgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLCB0eXBlLCBpc1JlcXVpcmVkLCBjdXN0b21OYW1lLCBmb3JtSWQsXG4gIH0gPSBmaWVsZDtcbiAgbGV0IHByZVBvcHVsYXRlZCA9IGZhbHNlO1xuICBpZiAoZmllbGQuYWxsb3dzUHJlcG9wdWxhdGUpIHtcbiAgICBjb25zdCBxdWVyaWVzID0gcXVlcnlTdHJpbmcucGFyc2UobG9jYXRpb24uc2VhcmNoKTtcbiAgICBwcmVQb3B1bGF0ZWQgPSBxdWVyaWVzW2ZpZWxkLmlucHV0TmFtZV07XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGlucHV0XG4gICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9YH1cbiAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgdmFsdWU9eyFwcmVQb3B1bGF0ZWQgPyB2YWx1ZSA6IHByZVBvcHVsYXRlZH1cbiAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCl9XG4gICAgICAgIG9uQmx1cj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICB9fVxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH1cbiAgICAgICAgYXJpYS1pbnZhbGlkPXshIXZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgLz5cbiAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkICYmIChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH0+XG4gICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICA8L3NwYW4+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ==