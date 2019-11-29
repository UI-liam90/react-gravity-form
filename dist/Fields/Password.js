"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = function _default(_ref) {
  var field = _ref.field,
      value = _ref.value,
      validationMessage = _ref.validationMessage,
      touched = _ref.touched,
      setTouched = _ref.setTouched,
      hideField = _ref.hideField,
      updateForm = _ref.updateForm,
      styledComponents = _ref.styledComponents,
      error = _ref.error,
      unsetError = _ref.unsetError,
      props = _objectWithoutProperties(_ref, ["field", "value", "validationMessage", "touched", "setTouched", "hideField", "updateForm", "styledComponents", "error", "unsetError"]);

  var id = field.id,
      formId = field.formId,
      type = field.type,
      label = field.label,
      placeholder = field.placeholder,
      isRequired = field.isRequired,
      maxLength = field.maxLength,
      description = field.description,
      descriptionPlacement = field.descriptionPlacement,
      labelPlacement = field.labelPlacement,
      width = field.width,
      customName = field.customName,
      inputs = field.inputs,
      cssClass = field.cssClass,
      passwordStrengthEnabled = field.passwordStrengthEnabled,
      minPasswordStrength = field.minPasswordStrength;

  var _ref2 = styledComponents || false,
      _ref2$Input = _ref2.Input,
      Input = _ref2$Input === void 0 ? "input" : _ref2$Input,
      _ref2$Label = _ref2.Label,
      Label = _ref2$Label === void 0 ? "label" : _ref2$Label,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? "div" : _ref2$Box;

  var _useState = (0, _react.useState)(inputs),
      _useState2 = _slicedToArray(_useState, 2),
      passwords = _useState2[0],
      setPasswords = _useState2[1];

  var _useState3 = (0, _react.useState)("blank"),
      _useState4 = _slicedToArray(_useState3, 2),
      passwordStrength = _useState4[0],
      setPasswordStrength = _useState4[1];

  var setFocusClass = function setFocusClass(action, i) {
    var pass = _objectSpread({}, passwords);

    if (action) {
      pass[i].cssClass = "filled";
    } else {
      pass[i].cssClass = "";
    }

    setPasswords(pass);
  };

  var gformPasswordStrength = function gformPasswordStrength(password1) {
    var shortPass = 1;
    var badPass = 2;
    var goodPass = 3;
    var strongPass = 4;
    var mismatch = 5;
    var symbolSize = 0;
    var natLog;
    var score;
    if (password1.length <= 0) return "blank"; // password < 4

    if (password1.length < 4) return "short";
    if (password1.match(/[0-9]/)) symbolSize += 10;
    if (password1.match(/[a-z]/)) symbolSize += 26;
    if (password1.match(/[A-Z]/)) symbolSize += 26;
    if (password1.match(/[^a-zA-Z0-9]/)) symbolSize += 31;
    natLog = Math.log(Math.pow(symbolSize, password1.length));
    score = natLog / Math.LN2;
    if (score < 40) return "bad";
    if (score < 56) return "good";
    return "strong";
  };

  var setGFPwdStrength = function setGFPwdStrength(password) {
    var result = gformPasswordStrength(password);
    setPasswordStrength(result);
  };

  return _react["default"].createElement(Box, {
    width: width,
    className: validationMessage && touched || error ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
    style: {
      display: hideField ? "none" : undefined
    }
  }, _react["default"].createElement("div", {
    className: type
  }, _react["default"].createElement(Label, {
    className: "gf-label ".concat(labelPlacement)
  }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === "above" && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement("div", {
    className: "ginput_container ginput_container_password"
  }, inputs && inputs.length && inputs.map(function (input, i) {
    return _react["default"].createElement("span", {
      key: "input_".concat(formId, "_").concat(input.id),
      className: "".concat(inputs.length > 1 ? "ginput_".concat(i === 0 ? "left" : "right") : "medim", " ").concat(passwords[i].cssClass ? passwords[i].cssClass : "")
    }, _react["default"].createElement(Input, {
      id: "input_".concat(formId, "_").concat(input.id, "_").concat(i),
      name: customName || "input_".concat(id).concat(i === 1 ? "_".concat(i + 1) : ""),
      type: type,
      value: value && value[i] && value[i].val ? value[i].val : "",
      placeholder: input.placeholder ? input.placeholder : placeholder,
      required: isRequired,
      autoComplete: "off",
      onChange: function onChange(event) {
        field.subId = i;
        updateForm(event, field);
        unsetError(id);

        if (passwordStrengthEnabled && i === 0) {
          setGFPwdStrength(event.target.value);
        }
      },
      onBlur: function onBlur(event) {
        field.subId = i;
        updateForm(event, field);
        setTouched(id);
        setFocusClass(value && value[i] && value[i].val && value[i].val !== "", i);
      },
      onFocus: function onFocus() {
        return setFocusClass(true, i);
      },
      "aria-label": label,
      "aria-describedby": "error_".concat(formId, "_").concat(input.id, "_").concat(i),
      "aria-invalid": !!validationMessage && touched
    }), _react["default"].createElement("label", {
      htmlFor: "input_".concat(formId, "_").concat(input.id, "_").concat(i)
    }, input.label));
  })), (validationMessage && touched || error) && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(formId, "_").concat(id),
    dangerouslySetInnerHTML: {
      __html: validationMessage || error
    }
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description), !(validationMessage && touched || error) && passwordStrengthEnabled && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    id: "input_".concat(formId, "_").concat(id, "_strength_indicator"),
    className: "gfield_password_strength ".concat(passwordStrength)
  }, passwordStrength && passwordStrength !== "blank" ? passwordStrength : "Strength indicator"), _react["default"].createElement("input", {
    type: "hidden",
    className: "gform_hidden",
    id: "input_".concat(formId, "_").concat(id, "_strength"),
    name: "input_".concat(id, "_strength"),
    value: passwordStrength
  }))));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUGFzc3dvcmQuanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJpc1JlcXVpcmVkIiwibWF4TGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwiaW5wdXRzIiwiY3NzQ2xhc3MiLCJwYXNzd29yZFN0cmVuZ3RoRW5hYmxlZCIsIm1pblBhc3N3b3JkU3RyZW5ndGgiLCJJbnB1dCIsIkxhYmVsIiwiQm94IiwicGFzc3dvcmRzIiwic2V0UGFzc3dvcmRzIiwicGFzc3dvcmRTdHJlbmd0aCIsInNldFBhc3N3b3JkU3RyZW5ndGgiLCJzZXRGb2N1c0NsYXNzIiwiYWN0aW9uIiwiaSIsInBhc3MiLCJnZm9ybVBhc3N3b3JkU3RyZW5ndGgiLCJwYXNzd29yZDEiLCJzaG9ydFBhc3MiLCJiYWRQYXNzIiwiZ29vZFBhc3MiLCJzdHJvbmdQYXNzIiwibWlzbWF0Y2giLCJzeW1ib2xTaXplIiwibmF0TG9nIiwic2NvcmUiLCJsZW5ndGgiLCJtYXRjaCIsIk1hdGgiLCJsb2ciLCJwb3ciLCJMTjIiLCJzZXRHRlB3ZFN0cmVuZ3RoIiwicGFzc3dvcmQiLCJyZXN1bHQiLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwibWFwIiwiaW5wdXQiLCJ2YWwiLCJldmVudCIsInN1YklkIiwidGFyZ2V0IiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFFZSx3QkFZVDtBQUFBLE1BWEpBLEtBV0ksUUFYSkEsS0FXSTtBQUFBLE1BVkpDLEtBVUksUUFWSkEsS0FVSTtBQUFBLE1BVEpDLGlCQVNJLFFBVEpBLGlCQVNJO0FBQUEsTUFSSkMsT0FRSSxRQVJKQSxPQVFJO0FBQUEsTUFQSkMsVUFPSSxRQVBKQSxVQU9JO0FBQUEsTUFOSkMsU0FNSSxRQU5KQSxTQU1JO0FBQUEsTUFMSkMsVUFLSSxRQUxKQSxVQUtJO0FBQUEsTUFKSkMsZ0JBSUksUUFKSkEsZ0JBSUk7QUFBQSxNQUhKQyxLQUdJLFFBSEpBLEtBR0k7QUFBQSxNQUZKQyxVQUVJLFFBRkpBLFVBRUk7QUFBQSxNQUREQyxLQUNDOztBQUFBLE1BRUZDLEVBRkUsR0FrQkFYLEtBbEJBLENBRUZXLEVBRkU7QUFBQSxNQUdGQyxNQUhFLEdBa0JBWixLQWxCQSxDQUdGWSxNQUhFO0FBQUEsTUFJRkMsSUFKRSxHQWtCQWIsS0FsQkEsQ0FJRmEsSUFKRTtBQUFBLE1BS0ZDLEtBTEUsR0FrQkFkLEtBbEJBLENBS0ZjLEtBTEU7QUFBQSxNQU1GQyxXQU5FLEdBa0JBZixLQWxCQSxDQU1GZSxXQU5FO0FBQUEsTUFPRkMsVUFQRSxHQWtCQWhCLEtBbEJBLENBT0ZnQixVQVBFO0FBQUEsTUFRRkMsU0FSRSxHQWtCQWpCLEtBbEJBLENBUUZpQixTQVJFO0FBQUEsTUFTRkMsV0FURSxHQWtCQWxCLEtBbEJBLENBU0ZrQixXQVRFO0FBQUEsTUFVRkMsb0JBVkUsR0FrQkFuQixLQWxCQSxDQVVGbUIsb0JBVkU7QUFBQSxNQVdGQyxjQVhFLEdBa0JBcEIsS0FsQkEsQ0FXRm9CLGNBWEU7QUFBQSxNQVlGQyxLQVpFLEdBa0JBckIsS0FsQkEsQ0FZRnFCLEtBWkU7QUFBQSxNQWFGQyxVQWJFLEdBa0JBdEIsS0FsQkEsQ0FhRnNCLFVBYkU7QUFBQSxNQWNGQyxNQWRFLEdBa0JBdkIsS0FsQkEsQ0FjRnVCLE1BZEU7QUFBQSxNQWVGQyxRQWZFLEdBa0JBeEIsS0FsQkEsQ0FlRndCLFFBZkU7QUFBQSxNQWdCRkMsdUJBaEJFLEdBa0JBekIsS0FsQkEsQ0FnQkZ5Qix1QkFoQkU7QUFBQSxNQWlCRkMsbUJBakJFLEdBa0JBMUIsS0FsQkEsQ0FpQkYwQixtQkFqQkU7O0FBQUEsY0FxQkZuQixnQkFBZ0IsSUFBSSxLQXJCbEI7QUFBQSwwQkFvQklvQixLQXBCSjtBQUFBLE1Bb0JJQSxLQXBCSiw0QkFvQlksT0FwQlo7QUFBQSwwQkFvQnFCQyxLQXBCckI7QUFBQSxNQW9CcUJBLEtBcEJyQiw0QkFvQjZCLE9BcEI3QjtBQUFBLHdCQW9Cc0NDLEdBcEJ0QztBQUFBLE1Bb0JzQ0EsR0FwQnRDLDBCQW9CNEMsS0FwQjVDOztBQUFBLGtCQXVCOEIscUJBQVNOLE1BQVQsQ0F2QjlCO0FBQUE7QUFBQSxNQXVCR08sU0F2Qkg7QUFBQSxNQXVCY0MsWUF2QmQ7O0FBQUEsbUJBd0I0QyxxQkFBUyxPQUFULENBeEI1QztBQUFBO0FBQUEsTUF3QkdDLGdCQXhCSDtBQUFBLE1Bd0JxQkMsbUJBeEJyQjs7QUEwQkosTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxNQUFELEVBQVNDLENBQVQsRUFBZTtBQUNuQyxRQUFNQyxJQUFJLHFCQUFRUCxTQUFSLENBQVY7O0FBQ0EsUUFBSUssTUFBSixFQUFZO0FBQ1ZFLE1BQUFBLElBQUksQ0FBQ0QsQ0FBRCxDQUFKLENBQVFaLFFBQVIsR0FBbUIsUUFBbkI7QUFDRCxLQUZELE1BRU87QUFDTGEsTUFBQUEsSUFBSSxDQUFDRCxDQUFELENBQUosQ0FBUVosUUFBUixHQUFtQixFQUFuQjtBQUNEOztBQUNETyxJQUFBQSxZQUFZLENBQUNNLElBQUQsQ0FBWjtBQUNELEdBUkQ7O0FBVUEsTUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFBQyxTQUFTLEVBQUk7QUFDekMsUUFBTUMsU0FBUyxHQUFHLENBQWxCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLENBQWhCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLENBQWpCO0FBQ0EsUUFBTUMsVUFBVSxHQUFHLENBQW5CO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLENBQWpCO0FBQ0EsUUFBSUMsVUFBVSxHQUFHLENBQWpCO0FBQ0EsUUFBSUMsTUFBSjtBQUNBLFFBQUlDLEtBQUo7QUFFQSxRQUFJUixTQUFTLENBQUNTLE1BQVYsSUFBb0IsQ0FBeEIsRUFBMkIsT0FBTyxPQUFQLENBVmMsQ0FZekM7O0FBQ0EsUUFBSVQsU0FBUyxDQUFDUyxNQUFWLEdBQW1CLENBQXZCLEVBQTBCLE9BQU8sT0FBUDtBQUUxQixRQUFJVCxTQUFTLENBQUNVLEtBQVYsQ0FBZ0IsT0FBaEIsQ0FBSixFQUE4QkosVUFBVSxJQUFJLEVBQWQ7QUFDOUIsUUFBSU4sU0FBUyxDQUFDVSxLQUFWLENBQWdCLE9BQWhCLENBQUosRUFBOEJKLFVBQVUsSUFBSSxFQUFkO0FBQzlCLFFBQUlOLFNBQVMsQ0FBQ1UsS0FBVixDQUFnQixPQUFoQixDQUFKLEVBQThCSixVQUFVLElBQUksRUFBZDtBQUM5QixRQUFJTixTQUFTLENBQUNVLEtBQVYsQ0FBZ0IsY0FBaEIsQ0FBSixFQUFxQ0osVUFBVSxJQUFJLEVBQWQ7QUFFckNDLElBQUFBLE1BQU0sR0FBR0ksSUFBSSxDQUFDQyxHQUFMLENBQVNELElBQUksQ0FBQ0UsR0FBTCxDQUFTUCxVQUFULEVBQXFCTixTQUFTLENBQUNTLE1BQS9CLENBQVQsQ0FBVDtBQUNBRCxJQUFBQSxLQUFLLEdBQUdELE1BQU0sR0FBR0ksSUFBSSxDQUFDRyxHQUF0QjtBQUVBLFFBQUlOLEtBQUssR0FBRyxFQUFaLEVBQWdCLE9BQU8sS0FBUDtBQUVoQixRQUFJQSxLQUFLLEdBQUcsRUFBWixFQUFnQixPQUFPLE1BQVA7QUFFaEIsV0FBTyxRQUFQO0FBQ0QsR0E1QkQ7O0FBOEJBLE1BQU1PLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsUUFBUSxFQUFJO0FBQ25DLFFBQU1DLE1BQU0sR0FBR2xCLHFCQUFxQixDQUFDaUIsUUFBRCxDQUFwQztBQUNBdEIsSUFBQUEsbUJBQW1CLENBQUN1QixNQUFELENBQW5CO0FBQ0QsR0FIRDs7QUFLQSxTQUNFLGdDQUFDLEdBQUQ7QUFDRSxJQUFBLEtBQUssRUFBRW5DLEtBRFQ7QUFFRSxJQUFBLFNBQVMsRUFDTm5CLGlCQUFpQixJQUFJQyxPQUF0QixJQUFrQ0ssS0FBbEMsOEJBQ3dCZ0IsUUFEeEIseUJBRWtCQSxRQUZsQixDQUhKO0FBT0UsSUFBQSxLQUFLLEVBQUU7QUFBRWlDLE1BQUFBLE9BQU8sRUFBRXBELFNBQVMsR0FBRyxNQUFILEdBQVlxRDtBQUFoQztBQVBULEtBU0U7QUFBSyxJQUFBLFNBQVMsRUFBRTdDO0FBQWhCLEtBQ0UsZ0NBQUMsS0FBRDtBQUFPLElBQUEsU0FBUyxxQkFBY08sY0FBZDtBQUFoQixLQUNHTixLQURILEVBRUdFLFVBQVUsR0FBRyxrREFBSCxHQUFvQixJQUZqQyxDQURGLEVBS0dHLG9CQUFvQixLQUFLLE9BQXpCLElBQW9DRCxXQUFwQyxHQUNDQSxXQUFXLElBQUk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQThCQSxXQUE5QixDQURoQixHQUdDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNHSyxNQUFNLElBQ0xBLE1BQU0sQ0FBQ3lCLE1BRFIsSUFFQ3pCLE1BQU0sQ0FBQ29DLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVF4QixDQUFSO0FBQUEsV0FDVDtBQUNFLE1BQUEsR0FBRyxrQkFBV3hCLE1BQVgsY0FBcUJnRCxLQUFLLENBQUNqRCxFQUEzQixDQURMO0FBRUUsTUFBQSxTQUFTLFlBQ1BZLE1BQU0sQ0FBQ3lCLE1BQVAsR0FBZ0IsQ0FBaEIsb0JBQ2NaLENBQUMsS0FBSyxDQUFOLEdBQVUsTUFBVixHQUFtQixPQURqQyxJQUVJLE9BSEcsY0FJTE4sU0FBUyxDQUFDTSxDQUFELENBQVQsQ0FBYVosUUFBYixHQUF3Qk0sU0FBUyxDQUFDTSxDQUFELENBQVQsQ0FBYVosUUFBckMsR0FBZ0QsRUFKM0M7QUFGWCxPQVFFLGdDQUFDLEtBQUQ7QUFDRSxNQUFBLEVBQUUsa0JBQVdaLE1BQVgsY0FBcUJnRCxLQUFLLENBQUNqRCxFQUEzQixjQUFpQ3lCLENBQWpDLENBREo7QUFFRSxNQUFBLElBQUksRUFDRmQsVUFBVSxvQkFBYVgsRUFBYixTQUFrQnlCLENBQUMsS0FBSyxDQUFOLGNBQWNBLENBQUMsR0FBRyxDQUFsQixJQUF3QixFQUExQyxDQUhkO0FBS0UsTUFBQSxJQUFJLEVBQUV2QixJQUxSO0FBTUUsTUFBQSxLQUFLLEVBQ0haLEtBQUssSUFBSUEsS0FBSyxDQUFDbUMsQ0FBRCxDQUFkLElBQXFCbkMsS0FBSyxDQUFDbUMsQ0FBRCxDQUFMLENBQVN5QixHQUE5QixHQUFvQzVELEtBQUssQ0FBQ21DLENBQUQsQ0FBTCxDQUFTeUIsR0FBN0MsR0FBbUQsRUFQdkQ7QUFTRSxNQUFBLFdBQVcsRUFDVEQsS0FBSyxDQUFDN0MsV0FBTixHQUFvQjZDLEtBQUssQ0FBQzdDLFdBQTFCLEdBQXdDQSxXQVY1QztBQVlFLE1BQUEsUUFBUSxFQUFFQyxVQVpaO0FBYUUsTUFBQSxZQUFZLEVBQUMsS0FiZjtBQWNFLE1BQUEsUUFBUSxFQUFFLGtCQUFBOEMsS0FBSyxFQUFJO0FBQ2pCOUQsUUFBQUEsS0FBSyxDQUFDK0QsS0FBTixHQUFjM0IsQ0FBZDtBQUNBOUIsUUFBQUEsVUFBVSxDQUFDd0QsS0FBRCxFQUFROUQsS0FBUixDQUFWO0FBQ0FTLFFBQUFBLFVBQVUsQ0FBQ0UsRUFBRCxDQUFWOztBQUNBLFlBQUljLHVCQUF1QixJQUFJVyxDQUFDLEtBQUssQ0FBckMsRUFBd0M7QUFDdENrQixVQUFBQSxnQkFBZ0IsQ0FBQ1EsS0FBSyxDQUFDRSxNQUFOLENBQWEvRCxLQUFkLENBQWhCO0FBQ0Q7QUFDRixPQXJCSDtBQXNCRSxNQUFBLE1BQU0sRUFBRSxnQkFBQTZELEtBQUssRUFBSTtBQUNmOUQsUUFBQUEsS0FBSyxDQUFDK0QsS0FBTixHQUFjM0IsQ0FBZDtBQUNBOUIsUUFBQUEsVUFBVSxDQUFDd0QsS0FBRCxFQUFROUQsS0FBUixDQUFWO0FBQ0FJLFFBQUFBLFVBQVUsQ0FBQ08sRUFBRCxDQUFWO0FBQ0F1QixRQUFBQSxhQUFhLENBQ1hqQyxLQUFLLElBQ0hBLEtBQUssQ0FBQ21DLENBQUQsQ0FEUCxJQUVFbkMsS0FBSyxDQUFDbUMsQ0FBRCxDQUFMLENBQVN5QixHQUZYLElBR0U1RCxLQUFLLENBQUNtQyxDQUFELENBQUwsQ0FBU3lCLEdBQVQsS0FBaUIsRUFKUixFQUtYekIsQ0FMVyxDQUFiO0FBT0QsT0FqQ0g7QUFrQ0UsTUFBQSxPQUFPLEVBQUU7QUFBQSxlQUFNRixhQUFhLENBQUMsSUFBRCxFQUFPRSxDQUFQLENBQW5CO0FBQUEsT0FsQ1g7QUFtQ0Usb0JBQVl0QixLQW5DZDtBQW9DRSwwQ0FBMkJGLE1BQTNCLGNBQXFDZ0QsS0FBSyxDQUFDakQsRUFBM0MsY0FBaUR5QixDQUFqRCxDQXBDRjtBQXFDRSxzQkFBYyxDQUFDLENBQUNsQyxpQkFBRixJQUF1QkM7QUFyQ3ZDLE1BUkYsRUErQ0U7QUFBTyxNQUFBLE9BQU8sa0JBQVdTLE1BQVgsY0FBcUJnRCxLQUFLLENBQUNqRCxFQUEzQixjQUFpQ3lCLENBQWpDO0FBQWQsT0FDR3dCLEtBQUssQ0FBQzlDLEtBRFQsQ0EvQ0YsQ0FEUztBQUFBLEdBQVgsQ0FISixDQVJKLEVBa0VHLENBQUVaLGlCQUFpQixJQUFJQyxPQUF0QixJQUFrQ0ssS0FBbkMsS0FDQztBQUNFLElBQUEsU0FBUyxFQUFDLGVBRFo7QUFFRSxJQUFBLEVBQUUsa0JBQVdJLE1BQVgsY0FBcUJELEVBQXJCLENBRko7QUFHRSxJQUFBLHVCQUF1QixFQUFFO0FBQUVzRCxNQUFBQSxNQUFNLEVBQUUvRCxpQkFBaUIsSUFBSU07QUFBL0I7QUFIM0IsSUFuRUosRUF5RUdVLFdBQVcsSUFBSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBOEJBLFdBQTlCLENBekVsQixFQTBFRyxFQUFHaEIsaUJBQWlCLElBQUlDLE9BQXRCLElBQWtDSyxLQUFwQyxLQUE4Q2lCLHVCQUE5QyxJQUNDLGdDQUFDLGlCQUFELENBQU8sUUFBUCxRQUNFO0FBQ0UsSUFBQSxFQUFFLGtCQUFXYixNQUFYLGNBQXFCRCxFQUFyQix3QkFESjtBQUVFLElBQUEsU0FBUyxxQ0FBOEJxQixnQkFBOUI7QUFGWCxLQUlHQSxnQkFBZ0IsSUFBSUEsZ0JBQWdCLEtBQUssT0FBekMsR0FDR0EsZ0JBREgsR0FFRyxvQkFOTixDQURGLEVBU0U7QUFDRSxJQUFBLElBQUksRUFBQyxRQURQO0FBRUUsSUFBQSxTQUFTLEVBQUMsY0FGWjtBQUdFLElBQUEsRUFBRSxrQkFBV3BCLE1BQVgsY0FBcUJELEVBQXJCLGNBSEo7QUFJRSxJQUFBLElBQUksa0JBQVdBLEVBQVgsY0FKTjtBQUtFLElBQUEsS0FBSyxFQUFFcUI7QUFMVCxJQVRGLENBM0VKLENBVEYsQ0FERjtBQTBHRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIGhpZGVGaWVsZCxcbiAgdXBkYXRlRm9ybSxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgZXJyb3IsXG4gIHVuc2V0RXJyb3IsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBmb3JtSWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBpc1JlcXVpcmVkLFxuICAgIG1heExlbmd0aCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBjdXN0b21OYW1lLFxuICAgIGlucHV0cyxcbiAgICBjc3NDbGFzcyxcbiAgICBwYXNzd29yZFN0cmVuZ3RoRW5hYmxlZCxcbiAgICBtaW5QYXNzd29yZFN0cmVuZ3RoXG4gIH0gPSBmaWVsZDtcblxuICBjb25zdCB7IElucHV0ID0gXCJpbnB1dFwiLCBMYWJlbCA9IFwibGFiZWxcIiwgQm94ID0gXCJkaXZcIiB9ID1cbiAgICBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuXG4gIGNvbnN0IFtwYXNzd29yZHMsIHNldFBhc3N3b3Jkc10gPSB1c2VTdGF0ZShpbnB1dHMpO1xuICBjb25zdCBbcGFzc3dvcmRTdHJlbmd0aCwgc2V0UGFzc3dvcmRTdHJlbmd0aF0gPSB1c2VTdGF0ZShcImJsYW5rXCIpO1xuXG4gIGNvbnN0IHNldEZvY3VzQ2xhc3MgPSAoYWN0aW9uLCBpKSA9PiB7XG4gICAgY29uc3QgcGFzcyA9IHsgLi4ucGFzc3dvcmRzIH07XG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgcGFzc1tpXS5jc3NDbGFzcyA9IFwiZmlsbGVkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhc3NbaV0uY3NzQ2xhc3MgPSBcIlwiO1xuICAgIH1cbiAgICBzZXRQYXNzd29yZHMocGFzcyk7XG4gIH07XG5cbiAgY29uc3QgZ2Zvcm1QYXNzd29yZFN0cmVuZ3RoID0gcGFzc3dvcmQxID0+IHtcbiAgICBjb25zdCBzaG9ydFBhc3MgPSAxO1xuICAgIGNvbnN0IGJhZFBhc3MgPSAyO1xuICAgIGNvbnN0IGdvb2RQYXNzID0gMztcbiAgICBjb25zdCBzdHJvbmdQYXNzID0gNDtcbiAgICBjb25zdCBtaXNtYXRjaCA9IDU7XG4gICAgbGV0IHN5bWJvbFNpemUgPSAwO1xuICAgIGxldCBuYXRMb2c7XG4gICAgbGV0IHNjb3JlO1xuXG4gICAgaWYgKHBhc3N3b3JkMS5sZW5ndGggPD0gMCkgcmV0dXJuIFwiYmxhbmtcIjtcblxuICAgIC8vIHBhc3N3b3JkIDwgNFxuICAgIGlmIChwYXNzd29yZDEubGVuZ3RoIDwgNCkgcmV0dXJuIFwic2hvcnRcIjtcblxuICAgIGlmIChwYXNzd29yZDEubWF0Y2goL1swLTldLykpIHN5bWJvbFNpemUgKz0gMTA7XG4gICAgaWYgKHBhc3N3b3JkMS5tYXRjaCgvW2Etel0vKSkgc3ltYm9sU2l6ZSArPSAyNjtcbiAgICBpZiAocGFzc3dvcmQxLm1hdGNoKC9bQS1aXS8pKSBzeW1ib2xTaXplICs9IDI2O1xuICAgIGlmIChwYXNzd29yZDEubWF0Y2goL1teYS16QS1aMC05XS8pKSBzeW1ib2xTaXplICs9IDMxO1xuXG4gICAgbmF0TG9nID0gTWF0aC5sb2coTWF0aC5wb3coc3ltYm9sU2l6ZSwgcGFzc3dvcmQxLmxlbmd0aCkpO1xuICAgIHNjb3JlID0gbmF0TG9nIC8gTWF0aC5MTjI7XG5cbiAgICBpZiAoc2NvcmUgPCA0MCkgcmV0dXJuIFwiYmFkXCI7XG5cbiAgICBpZiAoc2NvcmUgPCA1NikgcmV0dXJuIFwiZ29vZFwiO1xuXG4gICAgcmV0dXJuIFwic3Ryb25nXCI7XG4gIH07XG5cbiAgY29uc3Qgc2V0R0ZQd2RTdHJlbmd0aCA9IHBhc3N3b3JkID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBnZm9ybVBhc3N3b3JkU3RyZW5ndGgocGFzc3dvcmQpO1xuICAgIHNldFBhc3N3b3JkU3RyZW5ndGgocmVzdWx0KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvclxuICAgICAgICAgID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gXG4gICAgICAgICAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/IFwibm9uZVwiIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9PlxuICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPXtgZ2YtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAge2lzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gXCJhYm92ZVwiICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgIGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnaW5wdXRfY29udGFpbmVyIGdpbnB1dF9jb250YWluZXJfcGFzc3dvcmRcIj5cbiAgICAgICAgICAgIHtpbnB1dHMgJiZcbiAgICAgICAgICAgICAgaW5wdXRzLmxlbmd0aCAmJlxuICAgICAgICAgICAgICBpbnB1dHMubWFwKChpbnB1dCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBrZXk9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpbnB1dC5pZH1gfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICA/IGBnaW5wdXRfJHtpID09PSAwID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCJ9YFxuICAgICAgICAgICAgICAgICAgICAgIDogXCJtZWRpbVwiXG4gICAgICAgICAgICAgICAgICB9ICR7cGFzc3dvcmRzW2ldLmNzc0NsYXNzID8gcGFzc3dvcmRzW2ldLmNzc0NsYXNzIDogXCJcIn1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lucHV0LmlkfV8ke2l9YH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgY3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpZH0ke2kgPT09IDEgPyBgXyR7aSArIDF9YCA6IFwiXCJ9YFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAmJiB2YWx1ZVtpXSAmJiB2YWx1ZVtpXS52YWwgPyB2YWx1ZVtpXS52YWwgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID8gaW5wdXQucGxhY2Vob2xkZXIgOiBwbGFjZWhvbGRlclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnN1YklkID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3N3b3JkU3RyZW5ndGhFbmFibGVkICYmIGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEdGUHdkU3RyZW5ndGgoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnN1YklkID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0Rm9jdXNDbGFzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2ldICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2ldLnZhbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtpXS52YWwgIT09IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0Rm9jdXNDbGFzcyh0cnVlLCBpKX1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpbnB1dC5pZH1fJHtpfWB9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17ISF2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aW5wdXQuaWR9XyR7aX1gfT5cbiAgICAgICAgICAgICAgICAgICAge2lucHV0LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7KCh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvcikgJiYgKFxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCJcbiAgICAgICAgICAgIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdmFsaWRhdGlvbk1lc3NhZ2UgfHwgZXJyb3IgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgIHshKCh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvcikgJiYgcGFzc3dvcmRTdHJlbmd0aEVuYWJsZWQgJiYgKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fc3RyZW5ndGhfaW5kaWNhdG9yYH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ2ZpZWxkX3Bhc3N3b3JkX3N0cmVuZ3RoICR7cGFzc3dvcmRTdHJlbmd0aH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cGFzc3dvcmRTdHJlbmd0aCAmJiBwYXNzd29yZFN0cmVuZ3RoICE9PSBcImJsYW5rXCJcbiAgICAgICAgICAgICAgICA/IHBhc3N3b3JkU3RyZW5ndGhcbiAgICAgICAgICAgICAgICA6IFwiU3RyZW5ndGggaW5kaWNhdG9yXCJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2Zvcm1faGlkZGVuXCJcbiAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fc3RyZW5ndGhgfVxuICAgICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpZH1fc3RyZW5ndGhgfVxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmRTdHJlbmd0aH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==