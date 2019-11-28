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
      Input = _ref2$Input === void 0 ? 'input' : _ref2$Input,
      _ref2$Label = _ref2.Label,
      Label = _ref2$Label === void 0 ? 'label' : _ref2$Label,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? 'div' : _ref2$Box;

  var _useState = (0, _react.useState)(inputs),
      _useState2 = _slicedToArray(_useState, 2),
      passwords = _useState2[0],
      setPasswords = _useState2[1];

  var _useState3 = (0, _react.useState)('blank'),
      _useState4 = _slicedToArray(_useState3, 2),
      passwordStrength = _useState4[0],
      setPasswordStrength = _useState4[1];

  var setFocusClass = function setFocusClass(action, i) {
    var pass = _objectSpread({}, passwords);

    if (action) {
      pass[i].cssClass = 'filled';
    } else {
      pass[i].cssClass = '';
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
    if (password1.length <= 0) return 'blank'; // password < 4

    if (password1.length < 4) return 'short';
    if (password1.match(/[0-9]/)) symbolSize += 10;
    if (password1.match(/[a-z]/)) symbolSize += 26;
    if (password1.match(/[A-Z]/)) symbolSize += 26;
    if (password1.match(/[^a-zA-Z0-9]/)) symbolSize += 31;
    natLog = Math.log(Math.pow(symbolSize, password1.length));
    score = natLog / Math.LN2;
    if (score < 40) return 'bad';
    if (score < 56) return 'good';
    return 'strong';
  };

  var setGFPwdStrength = function setGFPwdStrength(password) {
    var result = gformPasswordStrength(password);
    setPasswordStrength(result);
  };

  return _react["default"].createElement(Box, {
    width: width,
    className: validationMessage && touched || error ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
    style: {
      display: hideField ? 'none' : undefined
    }
  }, _react["default"].createElement("div", {
    className: type
  }, _react["default"].createElement(Label, {
    htmlFor: "input_".concat(formId, "_").concat(id),
    className: "gf-label ".concat(labelPlacement)
  }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === 'above' && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement("div", {
    className: "ginput_container ginput_container_password"
  }, inputs && inputs.length && inputs.map(function (input, i) {
    return _react["default"].createElement("span", {
      key: "input_".concat(formId, "_").concat(input.id),
      className: "".concat(inputs.length > 1 ? "ginput_".concat(i === 0 ? 'left' : 'right') : 'medim', " ").concat(passwords[i].cssClass ? passwords[i].cssClass : '')
    }, _react["default"].createElement(Input, {
      id: "input_".concat(formId, "_").concat(input.id, "_").concat(i),
      name: customName || "input_".concat(id).concat(i === 1 ? "_".concat(i + 1) : ''),
      type: type,
      value: value && value[i] && value[i].val ? value[i].val : '',
      placeholder: placeholder,
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
        setFocusClass(value && value[i] && value[i].val && value[i].val !== '', i);
      },
      onFocus: function onFocus() {
        return setFocusClass(true, i);
      },
      "aria-label": label,
      "aria-describedby": "error_".concat(formId, "_").concat(input.id, "_").concat(i),
      "aria-invalid": !!validationMessage && touched
    }), inputs && inputs.length == 2 && _react["default"].createElement("label", {
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
  }, passwordStrength && passwordStrength !== 'blank' ? passwordStrength : 'Strength indicator'), _react["default"].createElement("input", {
    type: "hidden",
    className: "gform_hidden",
    id: "input_".concat(formId, "_").concat(id, "_strength"),
    name: "input_".concat(id, "_strength"),
    value: passwordStrength
  }))));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUGFzc3dvcmQuanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJpc1JlcXVpcmVkIiwibWF4TGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwiaW5wdXRzIiwiY3NzQ2xhc3MiLCJwYXNzd29yZFN0cmVuZ3RoRW5hYmxlZCIsIm1pblBhc3N3b3JkU3RyZW5ndGgiLCJJbnB1dCIsIkxhYmVsIiwiQm94IiwicGFzc3dvcmRzIiwic2V0UGFzc3dvcmRzIiwicGFzc3dvcmRTdHJlbmd0aCIsInNldFBhc3N3b3JkU3RyZW5ndGgiLCJzZXRGb2N1c0NsYXNzIiwiYWN0aW9uIiwiaSIsInBhc3MiLCJnZm9ybVBhc3N3b3JkU3RyZW5ndGgiLCJwYXNzd29yZDEiLCJzaG9ydFBhc3MiLCJiYWRQYXNzIiwiZ29vZFBhc3MiLCJzdHJvbmdQYXNzIiwibWlzbWF0Y2giLCJzeW1ib2xTaXplIiwibmF0TG9nIiwic2NvcmUiLCJsZW5ndGgiLCJtYXRjaCIsIk1hdGgiLCJsb2ciLCJwb3ciLCJMTjIiLCJzZXRHRlB3ZFN0cmVuZ3RoIiwicGFzc3dvcmQiLCJyZXN1bHQiLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwibWFwIiwiaW5wdXQiLCJ2YWwiLCJldmVudCIsInN1YklkIiwidGFyZ2V0IiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFFZSx3QkFZVDtBQUFBLE1BWEpBLEtBV0ksUUFYSkEsS0FXSTtB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QVMscUNBQThCcUIsZ0JBQTlCO0FBRlgsS0FJR0EsZ0JBQWdCLElBQUlBLGdCQUFnQixLQUFLLE9BQXpDLEdBQ0dBLGdCQURILEdBRUcsb0JBTk4sQ0FERixFQVNFO0FBQ0UsSUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLElBQUEsU0FBUyxFQUFDLGNBRlo7QUFHRSxJQUFBLEVBQUUsa0JBQVdwQixNQUFYLGNBQXFCRCxFQUFyQixjQUhKO0FBSUUsSUFBQSxJQUFJLGtCQUFXQSxFQUFYLGNBSk47QUFLRSxJQUFBLEtBQUssRUFBRXFCO0FBTFQsSUFURixDQTdESixDQVRGLENBREY7QUE0RkQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgaGlkZUZpZWxkLFxuICB1cGRhdGVGb3JtLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICBlcnJvcixcbiAgdW5zZXRFcnJvcixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGZvcm1JZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgbWF4TGVuZ3RoLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgIGxhYmVsUGxhY2VtZW50LFxuICAgIHdpZHRoLFxuICAgIGN1c3RvbU5hbWUsXG4gICAgaW5wdXRzLFxuICAgIGNzc0NsYXNzLFxuICAgIHBhc3N3b3JkU3RyZW5ndGhFbmFibGVkLFxuICAgIG1pblBhc3N3b3JkU3RyZW5ndGgsXG4gIH0gPSBmaWVsZDtcblxuICBjb25zdCB7IElucHV0ID0gJ2lucHV0JywgTGFiZWwgPSAnbGFiZWwnLCBCb3ggPSAnZGl2JyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICBjb25zdCBbcGFzc3dvcmRzLCBzZXRQYXNzd29yZHNdID0gdXNlU3RhdGUoaW5wdXRzKTtcbiAgY29uc3QgW3Bhc3N3b3JkU3RyZW5ndGgsIHNldFBhc3N3b3JkU3RyZW5ndGhdID0gdXNlU3RhdGUoJ2JsYW5rJyk7XG5cbiAgY29uc3Qgc2V0Rm9jdXNDbGFzcyA9IChhY3Rpb24sIGkpID0+IHtcbiAgICBjb25zdCBwYXNzID0geyAuLi5wYXNzd29yZHMgfTtcbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICBwYXNzW2ldLmNzc0NsYXNzID0gJ2ZpbGxlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhc3NbaV0uY3NzQ2xhc3MgPSAnJztcbiAgICB9XG4gICAgc2V0UGFzc3dvcmRzKHBhc3MpO1xuICB9O1xuXG4gIGNvbnN0IGdmb3JtUGFzc3dvcmRTdHJlbmd0aCA9IChwYXNzd29yZDEpID0+IHtcbiAgICBjb25zdCBzaG9ydFBhc3MgPSAxO1xuICAgIGNvbnN0IGJhZFBhc3MgPSAyO1xuICAgIGNvbnN0IGdvb2RQYXNzID0gMztcbiAgICBjb25zdCBzdHJvbmdQYXNzID0gNDtcbiAgICBjb25zdCBtaXNtYXRjaCA9IDU7XG4gICAgbGV0IHN5bWJvbFNpemUgPSAwO1xuICAgIGxldCBuYXRMb2c7XG4gICAgbGV0IHNjb3JlO1xuXG4gICAgaWYgKHBhc3N3b3JkMS5sZW5ndGggPD0gMCkgcmV0dXJuICdibGFuayc7XG5cbiAgICAvLyBwYXNzd29yZCA8IDRcbiAgICBpZiAocGFzc3dvcmQxLmxlbmd0aCA8IDQpIHJldHVybiAnc2hvcnQnO1xuXG4gICAgaWYgKHBhc3N3b3JkMS5tYXRjaCgvWzAtOV0vKSkgc3ltYm9sU2l6ZSArPSAxMDtcbiAgICBpZiAocGFzc3dvcmQxLm1hdGNoKC9bYS16XS8pKSBzeW1ib2xTaXplICs9IDI2O1xuICAgIGlmIChwYXNzd29yZDEubWF0Y2goL1tBLVpdLykpIHN5bWJvbFNpemUgKz0gMjY7XG4gICAgaWYgKHBhc3N3b3JkMS5tYXRjaCgvW15hLXpBLVowLTldLykpIHN5bWJvbFNpemUgKz0gMzE7XG5cbiAgICBuYXRMb2cgPSBNYXRoLmxvZyhNYXRoLnBvdyhzeW1ib2xTaXplLCBwYXNzd29yZDEubGVuZ3RoKSk7XG4gICAgc2NvcmUgPSBuYXRMb2cgLyBNYXRoLkxOMjtcblxuICAgIGlmIChzY29yZSA8IDQwKSByZXR1cm4gJ2JhZCc7XG5cbiAgICBpZiAoc2NvcmUgPCA1NikgcmV0dXJuICdnb29kJztcblxuICAgIHJldHVybiAnc3Ryb25nJztcbiAgfTtcblxuICBjb25zdCBzZXRHRlB3ZFN0cmVuZ3RoID0gKHBhc3N3b3JkKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZ2Zvcm1QYXNzd29yZFN0cmVuZ3RoKHBhc3N3b3JkKTtcbiAgICBzZXRQYXNzd29yZFN0cmVuZ3RoKHJlc3VsdCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcbiAgICAgICAgICA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuICAgICAgICAgIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH0gY2xhc3NOYW1lPXtgZ2YtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAge2lzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2lucHV0X2NvbnRhaW5lciBnaW5wdXRfY29udGFpbmVyX3Bhc3N3b3JkXCI+XG4gICAgICAgICAgICB7aW5wdXRzICYmXG4gICAgICAgICAgICAgIGlucHV0cy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgaW5wdXRzLm1hcCgoaW5wdXQsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAga2V5PXtgaW5wdXRfJHtmb3JtSWR9XyR7aW5wdXQuaWR9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0cy5sZW5ndGggPiAxID8gYGdpbnB1dF8ke2kgPT09IDAgPyAnbGVmdCcgOiAncmlnaHQnfWAgOiAnbWVkaW0nXG4gICAgICAgICAgICAgICAgICB9ICR7cGFzc3dvcmRzW2ldLmNzc0NsYXNzID8gcGFzc3dvcmRzW2ldLmNzc0NsYXNzIDogJyd9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpbnB1dC5pZH1fJHtpfWB9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9JHtpID09PSAxID8gYF8ke2kgKyAxfWAgOiAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUgJiYgdmFsdWVbaV0gJiYgdmFsdWVbaV0udmFsID8gdmFsdWVbaV0udmFsIDogJyd9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5zdWJJZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXNzd29yZFN0cmVuZ3RoRW5hYmxlZCAmJiBpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHRlB3ZFN0cmVuZ3RoKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnN1YklkID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0Rm9jdXNDbGFzcyh2YWx1ZSAmJiB2YWx1ZVtpXSAmJiB2YWx1ZVtpXS52YWwgJiYgdmFsdWVbaV0udmFsICE9PSAnJywgaSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldEZvY3VzQ2xhc3ModHJ1ZSwgaSl9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtgZXJyb3JfJHtmb3JtSWR9XyR7aW5wdXQuaWR9XyR7aX1gfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhdmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7aW5wdXRzICYmIGlucHV0cy5sZW5ndGggPT0gMiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aW5wdXQuaWR9XyR7aX1gfT57aW5wdXQubGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgeygodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3IpICYmIChcbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiXG4gICAgICAgICAgICBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHZhbGlkYXRpb25NZXNzYWdlIHx8IGVycm9yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICB7ISgodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3IpICYmIHBhc3N3b3JkU3RyZW5ndGhFbmFibGVkICYmIChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9X3N0cmVuZ3RoX2luZGljYXRvcmB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGdmaWVsZF9wYXNzd29yZF9zdHJlbmd0aCAke3Bhc3N3b3JkU3RyZW5ndGh9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Bhc3N3b3JkU3RyZW5ndGggJiYgcGFzc3dvcmRTdHJlbmd0aCAhPT0gJ2JsYW5rJ1xuICAgICAgICAgICAgICAgID8gcGFzc3dvcmRTdHJlbmd0aFxuICAgICAgICAgICAgICAgIDogJ1N0cmVuZ3RoIGluZGljYXRvcid9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2Zvcm1faGlkZGVuXCJcbiAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fc3RyZW5ndGhgfVxuICAgICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpZH1fc3RyZW5ndGhgfVxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmRTdHJlbmd0aH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==