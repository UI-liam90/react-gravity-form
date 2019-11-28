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
    console.log('result', result);
    console.log('password', password);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUGFzc3dvcmQuanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJpc1JlcXVpcmVkIiwibWF4TGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwiaW5wdXRzIiwiY3NzQ2xhc3MiLCJwYXNzd29yZFN0cmVuZ3RoRW5hYmxlZCIsIm1pblBhc3N3b3JkU3RyZW5ndGgiLCJJbnB1dCIsIkxhYmVsIiwiQm94IiwicGFzc3dvcmRzIiwic2V0UGFzc3dvcmRzIiwicGFzc3dvcmRTdHJlbmd0aCIsInNldFBhc3N3b3JkU3RyZW5ndGgiLCJzZXRGb2N1c0NsYXNzIiwiYWN0aW9uIiwiaSIsInBhc3MiLCJnZm9ybVBhc3N3b3JkU3RyZW5ndGgiLCJwYXNzd29yZDEiLCJzaG9ydFBhc3MiLCJiYWRQYXNzIiwiZ29vZFBhc3MiLCJzdHJvbmdQYXNzIiwibWlzbWF0Y2giLCJzeW1ib2xTaXplIiwibmF0TG9nIiwic2NvcmUiLCJsZW5ndGgiLCJtYXRjaCIsIk1hdGgiLCJsb2ciLCJwb3ciLCJMTjIiLCJzZXRHRlB3ZFN0cmVuZ3RoIiwicGFzc3dvcmQiLCJyZXN1bHQiLCJjb25zb2xlIiwiZGlzcGxheSIsInVuZGVmaW5lZCIsIm1hcCIsImlucHV0IiwidmFsIiwiZXZlbnQiLCJzdWJJZCIsInRhcmdldCIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRWUsd0JBWVQ7QUFBQSxNQVhKQSxLQVdJLFFB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LEtBQXBDLEtBQThDaUIsdUJBQTlDLElBQ0MsZ0NBQUMsaUJBQUQsQ0FBTyxRQUFQLFFBQ0U7QUFDRSxJQUFBLEVBQUUsa0JBQVdiLE1BQVgsY0FBcUJELEVBQXJCLHdCQURKO0FBRUUsSUFBQSxTQUFTLHFDQUE4QnFCLGdCQUE5QjtBQUZYLEtBSUdBLGdCQUFnQixJQUFJQSxnQkFBZ0IsS0FBSyxPQUF6QyxHQUNHQSxnQkFESCxHQUVHLG9CQU5OLENBREYsRUFTRTtBQUNFLElBQUEsSUFBSSxFQUFDLFFBRFA7QUFFRSxJQUFBLFNBQVMsRUFBQyxjQUZaO0FBR0UsSUFBQSxFQUFFLGtCQUFXcEIsTUFBWCxjQUFxQkQsRUFBckIsY0FISjtBQUlFLElBQUEsSUFBSSxrQkFBV0EsRUFBWCxjQUpOO0FBS0UsSUFBQSxLQUFLLEVBQUVxQjtBQUxULElBVEYsQ0E3REosQ0FURixDQURGO0FBNEZELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIGhpZGVGaWVsZCxcbiAgdXBkYXRlRm9ybSxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgZXJyb3IsXG4gIHVuc2V0RXJyb3IsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBmb3JtSWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBpc1JlcXVpcmVkLFxuICAgIG1heExlbmd0aCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBjdXN0b21OYW1lLFxuICAgIGlucHV0cyxcbiAgICBjc3NDbGFzcyxcbiAgICBwYXNzd29yZFN0cmVuZ3RoRW5hYmxlZCxcbiAgICBtaW5QYXNzd29yZFN0cmVuZ3RoLFxuICB9ID0gZmllbGQ7XG5cbiAgY29uc3QgeyBJbnB1dCA9ICdpbnB1dCcsIExhYmVsID0gJ2xhYmVsJywgQm94ID0gJ2RpdicgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG5cbiAgY29uc3QgW3Bhc3N3b3Jkcywgc2V0UGFzc3dvcmRzXSA9IHVzZVN0YXRlKGlucHV0cyk7XG4gIGNvbnN0IFtwYXNzd29yZFN0cmVuZ3RoLCBzZXRQYXNzd29yZFN0cmVuZ3RoXSA9IHVzZVN0YXRlKCdibGFuaycpO1xuXG4gIGNvbnN0IHNldEZvY3VzQ2xhc3MgPSAoYWN0aW9uLCBpKSA9PiB7XG4gICAgY29uc3QgcGFzcyA9IHsgLi4ucGFzc3dvcmRzIH07XG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgcGFzc1tpXS5jc3NDbGFzcyA9ICdmaWxsZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXNzW2ldLmNzc0NsYXNzID0gJyc7XG4gICAgfVxuICAgIHNldFBhc3N3b3JkcyhwYXNzKTtcbiAgfTtcblxuICBjb25zdCBnZm9ybVBhc3N3b3JkU3RyZW5ndGggPSAocGFzc3dvcmQxKSA9PiB7XG4gICAgY29uc3Qgc2hvcnRQYXNzID0gMTtcbiAgICBjb25zdCBiYWRQYXNzID0gMjtcbiAgICBjb25zdCBnb29kUGFzcyA9IDM7XG4gICAgY29uc3Qgc3Ryb25nUGFzcyA9IDQ7XG4gICAgY29uc3QgbWlzbWF0Y2ggPSA1O1xuICAgIGxldCBzeW1ib2xTaXplID0gMDtcbiAgICBsZXQgbmF0TG9nO1xuICAgIGxldCBzY29yZTtcblxuICAgIGlmIChwYXNzd29yZDEubGVuZ3RoIDw9IDApIHJldHVybiAnYmxhbmsnO1xuXG4gICAgLy8gcGFzc3dvcmQgPCA0XG4gICAgaWYgKHBhc3N3b3JkMS5sZW5ndGggPCA0KSByZXR1cm4gJ3Nob3J0JztcblxuICAgIGlmIChwYXNzd29yZDEubWF0Y2goL1swLTldLykpIHN5bWJvbFNpemUgKz0gMTA7XG4gICAgaWYgKHBhc3N3b3JkMS5tYXRjaCgvW2Etel0vKSkgc3ltYm9sU2l6ZSArPSAyNjtcbiAgICBpZiAocGFzc3dvcmQxLm1hdGNoKC9bQS1aXS8pKSBzeW1ib2xTaXplICs9IDI2O1xuICAgIGlmIChwYXNzd29yZDEubWF0Y2goL1teYS16QS1aMC05XS8pKSBzeW1ib2xTaXplICs9IDMxO1xuXG4gICAgbmF0TG9nID0gTWF0aC5sb2coTWF0aC5wb3coc3ltYm9sU2l6ZSwgcGFzc3dvcmQxLmxlbmd0aCkpO1xuICAgIHNjb3JlID0gbmF0TG9nIC8gTWF0aC5MTjI7XG5cbiAgICBpZiAoc2NvcmUgPCA0MCkgcmV0dXJuICdiYWQnO1xuXG4gICAgaWYgKHNjb3JlIDwgNTYpIHJldHVybiAnZ29vZCc7XG5cbiAgICByZXR1cm4gJ3N0cm9uZyc7XG4gIH07XG5cbiAgY29uc3Qgc2V0R0ZQd2RTdHJlbmd0aCA9IChwYXNzd29yZCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGdmb3JtUGFzc3dvcmRTdHJlbmd0aChwYXNzd29yZCk7XG4gICAgY29uc29sZS5sb2coJ3Jlc3VsdCcsIHJlc3VsdCk7XG4gICAgY29uc29sZS5sb2coJ3Bhc3N3b3JkJywgcGFzc3dvcmQpO1xuICAgIHNldFBhc3N3b3JkU3RyZW5ndGgocmVzdWx0KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvclxuICAgICAgICAgID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gXG4gICAgICAgICAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/ICdub25lJyA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAgPExhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfSBjbGFzc05hbWU9e2BnZi1sYWJlbCAke2xhYmVsUGxhY2VtZW50fWB9PlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICB7aXNSZXF1aXJlZCA/IDxhYmJyPio8L2FiYnI+IDogbnVsbH1cbiAgICAgICAgPC9MYWJlbD5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSAnYWJvdmUnICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgIGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnaW5wdXRfY29udGFpbmVyIGdpbnB1dF9jb250YWluZXJfcGFzc3dvcmRcIj5cbiAgICAgICAgICAgIHtpbnB1dHNcbiAgICAgICAgICAgICAgJiYgaW5wdXRzLmxlbmd0aFxuICAgICAgICAgICAgICAmJiBpbnB1dHMubWFwKChpbnB1dCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBrZXk9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpbnB1dC5pZH1gfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzLmxlbmd0aCA+IDEgPyBgZ2lucHV0XyR7aSA9PT0gMCA/ICdsZWZ0JyA6ICdyaWdodCd9YCA6ICdtZWRpbSdcbiAgICAgICAgICAgICAgICAgIH0gJHtwYXNzd29yZHNbaV0uY3NzQ2xhc3MgPyBwYXNzd29yZHNbaV0uY3NzQ2xhc3MgOiAnJ31gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lucHV0LmlkfV8ke2l9YH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpZH0ke2kgPT09IDEgPyBgXyR7aSArIDF9YCA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZSAmJiB2YWx1ZVtpXSAmJiB2YWx1ZVtpXS52YWwgPyB2YWx1ZVtpXS52YWwgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnN1YklkID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3N3b3JkU3RyZW5ndGhFbmFibGVkICYmIGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEdGUHdkU3RyZW5ndGgoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQuc3ViSWQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRGb2N1c0NsYXNzKHZhbHVlICYmIHZhbHVlW2ldICYmIHZhbHVlW2ldLnZhbCAmJiB2YWx1ZVtpXS52YWwgIT09ICcnLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0Rm9jdXNDbGFzcyh0cnVlLCBpKX1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpbnB1dC5pZH1fJHtpfWB9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17ISF2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHtpbnB1dHMgJiYgaW5wdXRzLmxlbmd0aCA9PSAyICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpbnB1dC5pZH1fJHtpfWB9PntpbnB1dC5sYWJlbH08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7KCh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvcikgJiYgKFxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCJcbiAgICAgICAgICAgIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdmFsaWRhdGlvbk1lc3NhZ2UgfHwgZXJyb3IgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgIHshKCh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvcikgJiYgcGFzc3dvcmRTdHJlbmd0aEVuYWJsZWQgJiYgKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fc3RyZW5ndGhfaW5kaWNhdG9yYH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ2ZpZWxkX3Bhc3N3b3JkX3N0cmVuZ3RoICR7cGFzc3dvcmRTdHJlbmd0aH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cGFzc3dvcmRTdHJlbmd0aCAmJiBwYXNzd29yZFN0cmVuZ3RoICE9PSAnYmxhbmsnXG4gICAgICAgICAgICAgICAgPyBwYXNzd29yZFN0cmVuZ3RoXG4gICAgICAgICAgICAgICAgOiAnU3RyZW5ndGggaW5kaWNhdG9yJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnZm9ybV9oaWRkZW5cIlxuICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV9zdHJlbmd0aGB9XG4gICAgICAgICAgICAgIG5hbWU9e2BpbnB1dF8ke2lkfV9zdHJlbmd0aGB9XG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZFN0cmVuZ3RofVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl19