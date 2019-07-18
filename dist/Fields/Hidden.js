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
      customName = field.customName;
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
    "aria-describedby": "error_".concat(id),
    "aria-invalid": !!validationMessage
  }), validationMessage && touched && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(id)
  }, validationMessage));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvSGlkZGVuLmpzeCJdLCJuYW1lcyI6WyJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInVwZGF0ZUZvcm0iLCJwcm9wcyIsImlkIiwidHlwZSIsImlzUmVxdWlyZWQiLCJjdXN0b21OYW1lIiwicHJlUG9wdWxhdGVkIiwiYWxsb3dzUHJlcG9wdWxhdGUiLCJxdWVyaWVzIiwicXVlcnlTdHJpbmciLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwiaW5wdXROYW1lIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7ZUFFZSx3QkFFVDtBQUFBLE1BREpBLEtBQ0ksUUFESkEsS0FDSTtBQUFBLE1BREdDLEtBQ0gsUUFER0EsS0FDSDtBQUFBLE1BRFVDLGlCQUNWLFFBRFVBLGlCQUNWO0FBQUEsTUFENkJDLE9BQzdCLFFBRDZCQSxPQUM3QjtBQUFBLE1BRHNDQyxVQUN0QyxRQURzQ0EsVUFDdEM7QUFBQSxNQURrREMsVUFDbEQsUUFEa0RBLFVBQ2xEO0FBQUEsTUFEaUVDLEtBQ2pFOztBQUFBLE1BQ0lDLEVBREosR0FDeUNQLEtBRHpDLENBQ0lPLEVBREo7QUFBQSxNQUNRQyxJQURSLEdBQ3lDUixLQUR6QyxDQUNRUSxJQURSO0FBQUEsTUFDY0MsVUFEZCxHQUN5Q1QsS0FEekMsQ0FDY1MsVUFEZDtBQUFBLE1BQzBCQyxVQUQxQixHQUN5Q1YsS0FEekMsQ0FDMEJVLFVBRDFCO0FBRUosTUFBSUMsWUFBWSxHQUFHLEtBQW5COztBQUNBLE1BQUlYLEtBQUssQ0FBQ1ksaUJBQVYsRUFBNkI7QUFDM0IsUUFBTUMsT0FBTyxHQUFHQyx3QkFBWUMsS0FBWixDQUFrQkMsUUFBUSxDQUFDQyxNQUEzQixDQUFoQjs7QUFDQU4sSUFBQUEsWUFBWSxHQUFHRSxPQUFPLENBQUNiLEtBQUssQ0FBQ2tCLFNBQVAsQ0FBdEI7QUFDRDs7QUFDRCxTQUNFLDZDQUNFO0FBQ0UsSUFBQSxJQUFJLEVBQUVSLFVBQVUsb0JBQWFILEVBQWIsQ0FEbEI7QUFFRSxJQUFBLElBQUksRUFBRUMsSUFGUjtBQUdFLElBQUEsS0FBSyxFQUFFLENBQUNHLFlBQUQsR0FBZ0JWLEtBQWhCLEdBQXdCVSxZQUhqQztBQUlFLElBQUEsUUFBUSxFQUFFRixVQUpaO0FBS0UsSUFBQSxRQUFRLEVBQUUsa0JBQUFVLEtBQUs7QUFBQSxhQUFJZCxVQUFVLENBQUNjLEtBQUQsRUFBUW5CLEtBQVIsQ0FBZDtBQUFBLEtBTGpCO0FBTUUsSUFBQSxNQUFNLEVBQUUsZ0JBQUNtQixLQUFELEVBQVc7QUFDakJkLE1BQUFBLFVBQVUsQ0FBQ2MsS0FBRCxFQUFRbkIsS0FBUixDQUFWO0FBQ0FJLE1BQUFBLFVBQVUsQ0FBQ0csRUFBRCxDQUFWO0FBQ0QsS0FUSDtBQVVFLHdDQUEyQkEsRUFBM0IsQ0FWRjtBQVdFLG9CQUFjLENBQUMsQ0FBQ0w7QUFYbEIsSUFERixFQWNHQSxpQkFBaUIsSUFBSUMsT0FBckIsSUFDQztBQUFNLElBQUEsU0FBUyxFQUFDLGVBQWhCO0FBQWdDLElBQUEsRUFBRSxrQkFBV0ksRUFBWDtBQUFsQyxLQUNHTCxpQkFESCxDQWZKLENBREY7QUFzQkQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsIHZhbHVlLCB2YWxpZGF0aW9uTWVzc2FnZSwgdG91Y2hlZCwgc2V0VG91Y2hlZCwgdXBkYXRlRm9ybSwgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgeyBpZCwgdHlwZSwgaXNSZXF1aXJlZCwgY3VzdG9tTmFtZSB9ID0gZmllbGQ7XG4gIGxldCBwcmVQb3B1bGF0ZWQgPSBmYWxzZTtcbiAgaWYgKGZpZWxkLmFsbG93c1ByZXBvcHVsYXRlKSB7XG4gICAgY29uc3QgcXVlcmllcyA9IHF1ZXJ5U3RyaW5nLnBhcnNlKGxvY2F0aW9uLnNlYXJjaCk7XG4gICAgcHJlUG9wdWxhdGVkID0gcXVlcmllc1tmaWVsZC5pbnB1dE5hbWVdO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfWB9XG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIHZhbHVlPXshcHJlUG9wdWxhdGVkID8gdmFsdWUgOiBwcmVQb3B1bGF0ZWR9XG4gICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdXBkYXRlRm9ybShldmVudCwgZmllbGQpfVxuICAgICAgICBvbkJsdXI9eyhldmVudCkgPT4ge1xuICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgfX1cbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT17YGVycm9yXyR7aWR9YH1cbiAgICAgICAgYXJpYS1pbnZhbGlkPXshIXZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgLz5cbiAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkICYmIChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtpZH1gfT5cbiAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2V9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19