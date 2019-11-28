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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUGFzc3dvcmQuanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJpc1JlcXVpcmVkIiwibWF4TGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwiaW5wdXRzIiwiY3NzQ2xhc3MiLCJwYXNzd29yZFN0cmVuZ3RoRW5hYmxlZCIsIm1pblBhc3N3b3JkU3RyZW5ndGgiLCJJbnB1dCIsIkxhYmVsIiwiQm94IiwicGFzc3dvcmRzIiwic2V0UGFzc3dvcmRzIiwicGFzc3dvcmRTdHJlbmd0aCIsInNldFBhc3N3b3JkU3RyZW5ndGgiLCJzZXRGb2N1c0NsYXNzIiwiYWN0aW9uIiwiaSIsInBhc3MiLCJnZm9ybVBhc3N3b3JkU3RyZW5ndGgiLCJwYXNzd29yZDEiLCJzaG9ydFBhc3MiLCJiYWRQYXNzIiwiZ29vZFBhc3MiLCJzdHJvbmdQYXNzIiwibWlzbWF0Y2giLCJzeW1ib2xTaXplIiwibmF0TG9nIiwic2NvcmUiLCJsZW5ndGgiLCJtYXRjaCIsIk1hdGgiLCJsb2ciLCJwb3ciLCJMTjIiLCJzZXRHRlB3ZFN0cmVuZ3RoIiwicGFzc3dvcmQiLCJyZXN1bHQiLCJkaXNwbGF5IiwidW5kZWZpbmVkIiwibWFwIiwiaW5wdXQiLCJ2YWwiLCJldmVudCIsInN1YklkIiwidGFyZ2V0IiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFFZSx3QkFZVDtBQUFBLE1BWEpBLEtBV0ksUUFYSkEsS0FXSTtB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LEVBQUMsUUFEUDtBQUVFLElBQUEsU0FBUyxFQUFDLGNBRlo7QUFHRSxJQUFBLEVBQUUsa0JBQVdwQixNQUFYLGNBQXFCRCxFQUFyQixjQUhKO0FBSUUsSUFBQSxJQUFJLGtCQUFXQSxFQUFYLGNBSk47QUFLRSxJQUFBLEtBQUssRUFBRXFCO0FBTFQsSUFURixDQXpFSixDQVRGLENBREY7QUF3R0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICB0b3VjaGVkLFxuICBzZXRUb3VjaGVkLFxuICBoaWRlRmllbGQsXG4gIHVwZGF0ZUZvcm0sXG4gIHN0eWxlZENvbXBvbmVudHMsXG4gIGVycm9yLFxuICB1bnNldEVycm9yLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgZm9ybUlkLFxuICAgIHR5cGUsXG4gICAgbGFiZWwsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBtYXhMZW5ndGgsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgd2lkdGgsXG4gICAgY3VzdG9tTmFtZSxcbiAgICBpbnB1dHMsXG4gICAgY3NzQ2xhc3MsXG4gICAgcGFzc3dvcmRTdHJlbmd0aEVuYWJsZWQsXG4gICAgbWluUGFzc3dvcmRTdHJlbmd0aFxuICB9ID0gZmllbGQ7XG5cbiAgY29uc3QgeyBJbnB1dCA9IFwiaW5wdXRcIiwgTGFiZWwgPSBcImxhYmVsXCIsIEJveCA9IFwiZGl2XCIgfSA9XG4gICAgc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICBjb25zdCBbcGFzc3dvcmRzLCBzZXRQYXNzd29yZHNdID0gdXNlU3RhdGUoaW5wdXRzKTtcbiAgY29uc3QgW3Bhc3N3b3JkU3RyZW5ndGgsIHNldFBhc3N3b3JkU3RyZW5ndGhdID0gdXNlU3RhdGUoXCJibGFua1wiKTtcblxuICBjb25zdCBzZXRGb2N1c0NsYXNzID0gKGFjdGlvbiwgaSkgPT4ge1xuICAgIGNvbnN0IHBhc3MgPSB7IC4uLnBhc3N3b3JkcyB9O1xuICAgIGlmIChhY3Rpb24pIHtcbiAgICAgIHBhc3NbaV0uY3NzQ2xhc3MgPSBcImZpbGxlZFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXNzW2ldLmNzc0NsYXNzID0gXCJcIjtcbiAgICB9XG4gICAgc2V0UGFzc3dvcmRzKHBhc3MpO1xuICB9O1xuXG4gIGNvbnN0IGdmb3JtUGFzc3dvcmRTdHJlbmd0aCA9IHBhc3N3b3JkMSA9PiB7XG4gICAgY29uc3Qgc2hvcnRQYXNzID0gMTtcbiAgICBjb25zdCBiYWRQYXNzID0gMjtcbiAgICBjb25zdCBnb29kUGFzcyA9IDM7XG4gICAgY29uc3Qgc3Ryb25nUGFzcyA9IDQ7XG4gICAgY29uc3QgbWlzbWF0Y2ggPSA1O1xuICAgIGxldCBzeW1ib2xTaXplID0gMDtcbiAgICBsZXQgbmF0TG9nO1xuICAgIGxldCBzY29yZTtcblxuICAgIGlmIChwYXNzd29yZDEubGVuZ3RoIDw9IDApIHJldHVybiBcImJsYW5rXCI7XG5cbiAgICAvLyBwYXNzd29yZCA8IDRcbiAgICBpZiAocGFzc3dvcmQxLmxlbmd0aCA8IDQpIHJldHVybiBcInNob3J0XCI7XG5cbiAgICBpZiAocGFzc3dvcmQxLm1hdGNoKC9bMC05XS8pKSBzeW1ib2xTaXplICs9IDEwO1xuICAgIGlmIChwYXNzd29yZDEubWF0Y2goL1thLXpdLykpIHN5bWJvbFNpemUgKz0gMjY7XG4gICAgaWYgKHBhc3N3b3JkMS5tYXRjaCgvW0EtWl0vKSkgc3ltYm9sU2l6ZSArPSAyNjtcbiAgICBpZiAocGFzc3dvcmQxLm1hdGNoKC9bXmEtekEtWjAtOV0vKSkgc3ltYm9sU2l6ZSArPSAzMTtcblxuICAgIG5hdExvZyA9IE1hdGgubG9nKE1hdGgucG93KHN5bWJvbFNpemUsIHBhc3N3b3JkMS5sZW5ndGgpKTtcbiAgICBzY29yZSA9IG5hdExvZyAvIE1hdGguTE4yO1xuXG4gICAgaWYgKHNjb3JlIDwgNDApIHJldHVybiBcImJhZFwiO1xuXG4gICAgaWYgKHNjb3JlIDwgNTYpIHJldHVybiBcImdvb2RcIjtcblxuICAgIHJldHVybiBcInN0cm9uZ1wiO1xuICB9O1xuXG4gIGNvbnN0IHNldEdGUHdkU3RyZW5ndGggPSBwYXNzd29yZCA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZ2Zvcm1QYXNzd29yZFN0cmVuZ3RoKHBhc3N3b3JkKTtcbiAgICBzZXRQYXNzd29yZFN0cmVuZ3RoKHJlc3VsdCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcbiAgICAgICAgICA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuICAgICAgICAgIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyBcIm5vbmVcIiA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAgPExhYmVsIGNsYXNzTmFtZT17YGdmLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICA8L0xhYmVsPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09IFwiYWJvdmVcIiAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2lucHV0X2NvbnRhaW5lciBnaW5wdXRfY29udGFpbmVyX3Bhc3N3b3JkXCI+XG4gICAgICAgICAgICB7aW5wdXRzICYmXG4gICAgICAgICAgICAgIGlucHV0cy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgaW5wdXRzLm1hcCgoaW5wdXQsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAga2V5PXtgaW5wdXRfJHtmb3JtSWR9XyR7aW5wdXQuaWR9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0cy5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgPyBgZ2lucHV0XyR7aSA9PT0gMCA/IFwibGVmdFwiIDogXCJyaWdodFwifWBcbiAgICAgICAgICAgICAgICAgICAgICA6IFwibWVkaW1cIlxuICAgICAgICAgICAgICAgICAgfSAke3Bhc3N3b3Jkc1tpXS5jc3NDbGFzcyA/IHBhc3N3b3Jkc1tpXS5jc3NDbGFzcyA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpbnB1dC5pZH1fJHtpfWB9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9JHtpID09PSAxID8gYF8ke2kgKyAxfWAgOiBcIlwifWBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWUgJiYgdmFsdWVbaV0gJiYgdmFsdWVbaV0udmFsID8gdmFsdWVbaV0udmFsIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQuc3ViSWQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAocGFzc3dvcmRTdHJlbmd0aEVuYWJsZWQgJiYgaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R0ZQd2RTdHJlbmd0aChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQuc3ViSWQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRGb2N1c0NsYXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbaV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbaV0udmFsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2ldLnZhbCAhPT0gXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRGb2N1c0NsYXNzKHRydWUsIGkpfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17YGVycm9yXyR7Zm9ybUlkfV8ke2lucHV0LmlkfV8ke2l9YH1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXshIXZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpbnB1dC5pZH1fJHtpfWB9PlxuICAgICAgICAgICAgICAgICAgICB7aW5wdXQubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIlxuICAgICAgICAgICAgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB2YWxpZGF0aW9uTWVzc2FnZSB8fCBlcnJvciB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2Pn1cbiAgICAgICAgeyEoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiBwYXNzd29yZFN0cmVuZ3RoRW5hYmxlZCAmJiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV9zdHJlbmd0aF9pbmRpY2F0b3JgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BnZmllbGRfcGFzc3dvcmRfc3RyZW5ndGggJHtwYXNzd29yZFN0cmVuZ3RofWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwYXNzd29yZFN0cmVuZ3RoICYmIHBhc3N3b3JkU3RyZW5ndGggIT09IFwiYmxhbmtcIlxuICAgICAgICAgICAgICAgID8gcGFzc3dvcmRTdHJlbmd0aFxuICAgICAgICAgICAgICAgIDogXCJTdHJlbmd0aCBpbmRpY2F0b3JcIn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnZm9ybV9oaWRkZW5cIlxuICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV9zdHJlbmd0aGB9XG4gICAgICAgICAgICAgIG5hbWU9e2BpbnB1dF8ke2lkfV9zdHJlbmd0aGB9XG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZFN0cmVuZ3RofVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl19