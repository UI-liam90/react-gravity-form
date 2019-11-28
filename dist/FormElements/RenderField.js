"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var FormFields = _interopRequireWildcard(require("../Fields"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var frac2dec = function frac2dec(fraction) {
  /* assumes fraction is in the form  1-1/2 or 1 1/2 */

  /* doesn't work on negative numbers */
  var fractionParts = fraction.split('-');

  if (fractionParts.length === 1) {
    /* try space as divider */
    fractionParts = fraction.split(' ');
  }

  if (fractionParts.length > 1 && fraction.indexOf('/') !== -1) {
    var integer = parseInt(fractionParts[0]);
    var decimalParts = fractionParts[1].split('/');
    var decimal = parseInt(decimalParts[0]) / parseInt(decimalParts[1]);
    return integer + decimal;
  }

  if (fraction.indexOf('/') !== -1) {
    var _decimalParts = fraction.split('/');

    var _decimal = parseInt(_decimalParts[0]) / parseInt(_decimalParts[1]);

    return _decimal;
  }

  return parseInt(fraction);
};

var formatComponentName = function formatComponentName(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var formatWidthFromCss = function formatWidthFromCss(cssClass) {
  if (!cssClass) return {};
  var widthStarts = cssClass.indexOf('[');
  var widthEnds = cssClass.indexOf(']');

  if (widthStarts === -1 || widthEnds === -1) {
    return {};
  }

  var width = cssClass.substring(widthStarts + 1, widthEnds).split(',').map(function (item) {
    return frac2dec(item.replace(/\s/g, ''));
  });
  var cleanedCssClass = "".concat(cssClass.replace(cssClass.substring(widthStarts, widthEnds + 1), ''), " custom-width");
  return {
    width: width,
    cleanedCssClass: cleanedCssClass
  };
};

var RenderField = function RenderField(_ref) {
  var field = _ref.field,
      formValues = _ref.formValues,
      submitFailed = _ref.submitFailed,
      submitSuccess = _ref.submitSuccess,
      setTouched = _ref.setTouched,
      touched = _ref.touched,
      _updateForm = _ref.updateForm,
      pages = _ref.pages,
      prevStep = _ref.prevStep,
      nextStep = _ref.nextStep,
      isNextDisabled = _ref.isNextDisabled,
      saveStateToHtmlField = _ref.saveStateToHtmlField,
      styledComponents = _ref.styledComponents,
      error = _ref.error,
      unsetError = _ref.unsetError;
  var FormComponent = FormFields[formatComponentName(field.type)];

  var _formatWidthFromCss = formatWidthFromCss(field.cssClass),
      cleanedCssClass = _formatWidthFromCss.cleanedCssClass,
      width = _formatWidthFromCss.width;

  if (width) {
    field.cssClass = cleanedCssClass;
    field.width = width;
  }

  var value = formValues[field.id] ? formValues[field.id].value : field.defaultValue;

  var _useState = (0, _react.useState)("".concat(field.cssClass).concat(value && value !== '' ? 'filled' : '')),
      _useState2 = _slicedToArray(_useState, 2),
      fieldClassName = _useState2[0],
      setFieldClassName = _useState2[1];

  var setFocusClass = function setFocusClass(action) {
    if (action) {
      if (fieldClassName.indexOf(' filled') === -1) {
        setFieldClassName("".concat(fieldClassName, " filled"));
      }
    } else {
      setFieldClassName(fieldClassName.replace(' filled', ''));
    }
  };

  return _react["default"].createElement(FormComponent, {
    key: field.id,
    field: field,
    value: value,
    updateForm: function updateForm(event, field) {
      return _updateForm(event, field);
    },
    validationMessage: formValues[field.id] ? formValues[field.id].valid : false,
    submitFailed: submitFailed,
    submitSuccess: submitSuccess,
    touched: touched[field.id],
    setTouched: setTouched,
    unsetError: unsetError,
    error: error,
    pages: pages,
    prevStep: prevStep,
    nextStep: nextStep,
    isNextDisabled: isNextDisabled,
    hideField: formValues[field.id] ? formValues[field.id].hideField : false,
    saveStateToHtmlField: field.type === 'html' && field.cssClass.indexOf('set-state') !== -1 ? {
      formValues: formValues,
      saveStateToHtmlField: saveStateToHtmlField
    } : false,
    styledComponents: styledComponents,
    cssClass: fieldClassName,
    setFocusClass: setFocusClass
  });
};

var _default = RenderField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGQuanN4Il0sIm5hbWVzIjpbImZyYWMyZGVjIiwiZnJhY3Rpb24iLCJmcmFjdGlvblBhcnRzIiwic3BsaXQiLCJsZW5ndGgiLCJpbmRleE9mIiwiaW50ZWdlciIsInBhcnNlSW50IiwiZGVjaW1hbFBhcnRzIiwiZGVjaW1hbCIsImZvcm1hdENvbXBvbmVudE5hbWUiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZm9ybWF0V2lkdGhGcm9tQ3NzIiwiY3NzQ2xhc3MiLCJ3aWR0aFN0YXJ0cyIsIndpZHRoRW5kcyIsIndpZHRoIiwic3Vic3RyaW5nIiwibWFwIiwiaXRlbSIsInJlcGxhY2UiLCJjbGVhbmVkQ3NzQ2xhc3MiLCJSZW5kZXJGaWVsZCIsImZpZWxkIiwiZm9ybVZhbHVlcyIsInN1Ym1pdEZhaWxlZCIsInN1Ym1pdFN1Y2Nlc3MiLCJzZXRUb3VjaGVkIiwidG91Y2hlZCIsInVwZGF0ZUZvcm0iLCJwYWdlcyIsInByZXZTdGVwIiwibmV4dFN0ZXAiLCJpc05leHREaXNhYmxlZCIsInNhdmVTdGF0ZVRvSHRtbEZpZWxkIiwic3R5bGVkQ29tcG9uZW50cyIsImVycm9yIiwidW5zZXRFcnJvciIsIkZvcm1Db21wb25lbnQiLCJGb3JtRmllbGRzIiwidHlwZSIsInZhbHVlIiwiaWQiLCJkZWZhdWx0VmFsdWUiLCJmaWVsZENsYXNzTmFtZSIsInNldEZpZWxkQ2xhc3NOYW1lIiwic2V0Rm9jdXNDbGFzcyIsImFjdGlvbiIsImV2ZW50IiwidmFsaWQiLCJoaWRlRmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsUUFBRCxFQUFjO0FBQzdCOztBQUNBO0FBQ0EsTUFBSUMsYUFBYSxHQUFHRCxRQUFRLENBQUNFLEtBQVQsQ0FBZSxHQUFmLENBQXBCOztBQUNBLE1BQUlE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QUFQLENBQVYsR0FBdUJsQixVQUFVLENBQUNELEtBQUssQ0FBQ21CLEVBQVAsQ0FBVixDQUFxQlEsU0FBNUMsR0FBd0QsS0FoQnJFO0FBaUJFLElBQUEsb0JBQW9CLEVBQ2xCM0IsS0FBSyxDQUFDaUIsSUFBTixLQUFlLE1BQWYsSUFBeUJqQixLQUFLLENBQUNWLFFBQU4sQ0FBZVgsT0FBZixDQUF1QixXQUF2QixNQUF3QyxDQUFDLENBQWxFLEdBQ0k7QUFBRXNCLE1BQUFBLFVBQVUsRUFBVkEsVUFBRjtBQUFjVSxNQUFBQSxvQkFBb0IsRUFBcEJBO0FBQWQsS0FESixHQUVJLEtBcEJSO0FBc0JFLElBQUEsZ0JBQWdCLEVBQUVDLGdCQXRCcEI7QUF1QkUsSUFBQSxRQUFRLEVBQUVTLGNBdkJaO0FBd0JFLElBQUEsYUFBYSxFQUFFRTtBQXhCakIsSUFERjtBQTRCRCxDQWxFRDs7ZUFvRWV4QixXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgRm9ybUZpZWxkcyBmcm9tICcuLi9GaWVsZHMnO1xuXG5jb25zdCBmcmFjMmRlYyA9IChmcmFjdGlvbikgPT4ge1xuICAvKiBhc3N1bWVzIGZyYWN0aW9uIGlzIGluIHRoZSBmb3JtICAxLTEvMiBvciAxIDEvMiAqL1xuICAvKiBkb2Vzbid0IHdvcmsgb24gbmVnYXRpdmUgbnVtYmVycyAqL1xuICBsZXQgZnJhY3Rpb25QYXJ0cyA9IGZyYWN0aW9uLnNwbGl0KCctJyk7XG4gIGlmIChmcmFjdGlvblBhcnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIC8qIHRyeSBzcGFjZSBhcyBkaXZpZGVyICovXG4gICAgZnJhY3Rpb25QYXJ0cyA9IGZyYWN0aW9uLnNwbGl0KCcgJyk7XG4gIH1cblxuICBpZiAoZnJhY3Rpb25QYXJ0cy5sZW5ndGggPiAxICYmIGZyYWN0aW9uLmluZGV4T2YoJy8nKSAhPT0gLTEpIHtcbiAgICBjb25zdCBpbnRlZ2VyID0gcGFyc2VJbnQoZnJhY3Rpb25QYXJ0c1swXSk7XG4gICAgY29uc3QgZGVjaW1hbFBhcnRzID0gZnJhY3Rpb25QYXJ0c1sxXS5zcGxpdCgnLycpO1xuICAgIGNvbnN0IGRlY2ltYWwgPSBwYXJzZUludChkZWNpbWFsUGFydHNbMF0pIC8gcGFyc2VJbnQoZGVjaW1hbFBhcnRzWzFdKTtcblxuICAgIHJldHVybiBpbnRlZ2VyICsgZGVjaW1hbDtcbiAgfVxuICBpZiAoZnJhY3Rpb24uaW5kZXhPZignLycpICE9PSAtMSkge1xuICAgIGNvbnN0IGRlY2ltYWxQYXJ0cyA9IGZyYWN0aW9uLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgZGVjaW1hbCA9IHBhcnNlSW50KGRlY2ltYWxQYXJ0c1swXSkgLyBwYXJzZUludChkZWNpbWFsUGFydHNbMV0pO1xuICAgIHJldHVybiBkZWNpbWFsO1xuICB9XG4gIHJldHVybiBwYXJzZUludChmcmFjdGlvbik7XG59O1xuXG5jb25zdCBmb3JtYXRDb21wb25lbnROYW1lID0gc3RyaW5nID0+IHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbmNvbnN0IGZvcm1hdFdpZHRoRnJvbUNzcyA9IChjc3NDbGFzcykgPT4ge1xuICBpZiAoIWNzc0NsYXNzKSByZXR1cm4ge307XG4gIGNvbnN0IHdpZHRoU3RhcnRzID0gY3NzQ2xhc3MuaW5kZXhPZignWycpO1xuICBjb25zdCB3aWR0aEVuZHMgPSBjc3NDbGFzcy5pbmRleE9mKCddJyk7XG5cbiAgaWYgKHdpZHRoU3RhcnRzID09PSAtMSB8fCB3aWR0aEVuZHMgPT09IC0xKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgY29uc3Qgd2lkdGggPSBjc3NDbGFzc1xuICAgIC5zdWJzdHJpbmcod2lkdGhTdGFydHMgKyAxLCB3aWR0aEVuZHMpXG4gICAgLnNwbGl0KCcsJylcbiAgICAubWFwKGl0ZW0gPT4gZnJhYzJkZWMoaXRlbS5yZXBsYWNlKC9cXHMvZywgJycpKSk7XG5cbiAgY29uc3QgY2xlYW5lZENzc0NsYXNzID0gYCR7Y3NzQ2xhc3MucmVwbGFjZShcbiAgICBjc3NDbGFzcy5zdWJzdHJpbmcod2lkdGhTdGFydHMsIHdpZHRoRW5kcyArIDEpLFxuICAgICcnLFxuICApfSBjdXN0b20td2lkdGhgO1xuXG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgY2xlYW5lZENzc0NsYXNzLFxuICB9O1xufTtcblxuY29uc3QgUmVuZGVyRmllbGQgPSAoe1xuICBmaWVsZCxcbiAgZm9ybVZhbHVlcyxcbiAgc3VibWl0RmFpbGVkLFxuICBzdWJtaXRTdWNjZXNzLFxuICBzZXRUb3VjaGVkLFxuICB0b3VjaGVkLFxuICB1cGRhdGVGb3JtLFxuICBwYWdlcyxcbiAgcHJldlN0ZXAsXG4gIG5leHRTdGVwLFxuICBpc05leHREaXNhYmxlZCxcbiAgc2F2ZVN0YXRlVG9IdG1sRmllbGQsXG4gIHN0eWxlZENvbXBvbmVudHMsXG4gIGVycm9yLFxuICB1bnNldEVycm9yLFxufSkgPT4ge1xuICBjb25zdCBGb3JtQ29tcG9uZW50ID0gRm9ybUZpZWxkc1tmb3JtYXRDb21wb25lbnROYW1lKGZpZWxkLnR5cGUpXTtcbiAgY29uc3QgeyBjbGVhbmVkQ3NzQ2xhc3MsIHdpZHRoIH0gPSBmb3JtYXRXaWR0aEZyb21Dc3MoZmllbGQuY3NzQ2xhc3MpO1xuICBpZiAod2lkdGgpIHtcbiAgICBmaWVsZC5jc3NDbGFzcyA9IGNsZWFuZWRDc3NDbGFzcztcbiAgICBmaWVsZC53aWR0aCA9IHdpZHRoO1xuICB9XG4gIGNvbnN0IHZhbHVlID0gZm9ybVZhbHVlc1tmaWVsZC5pZF0gPyBmb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZSA6IGZpZWxkLmRlZmF1bHRWYWx1ZTtcbiAgY29uc3QgW2ZpZWxkQ2xhc3NOYW1lLCBzZXRGaWVsZENsYXNzTmFtZV0gPSB1c2VTdGF0ZShcbiAgICBgJHtmaWVsZC5jc3NDbGFzc30ke3ZhbHVlICYmIHZhbHVlICE9PSAnJyA/ICdmaWxsZWQnIDogJyd9YCxcbiAgKTtcblxuICBjb25zdCBzZXRGb2N1c0NsYXNzID0gKGFjdGlvbikgPT4ge1xuICAgIGlmIChhY3Rpb24pIHtcbiAgICAgIGlmIChmaWVsZENsYXNzTmFtZS5pbmRleE9mKCcgZmlsbGVkJykgPT09IC0xKSB7XG4gICAgICAgIHNldEZpZWxkQ2xhc3NOYW1lKGAke2ZpZWxkQ2xhc3NOYW1lfSBmaWxsZWRgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RmllbGRDbGFzc05hbWUoZmllbGRDbGFzc05hbWUucmVwbGFjZSgnIGZpbGxlZCcsICcnKSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Db21wb25lbnRcbiAgICAgIGtleT17ZmllbGQuaWR9XG4gICAgICBmaWVsZD17ZmllbGR9XG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICB1cGRhdGVGb3JtPXsoZXZlbnQsIGZpZWxkKSA9PiB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCl9XG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZT17Zm9ybVZhbHVlc1tmaWVsZC5pZF0gPyBmb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWxpZCA6IGZhbHNlfVxuICAgICAgc3VibWl0RmFpbGVkPXtzdWJtaXRGYWlsZWR9XG4gICAgICBzdWJtaXRTdWNjZXNzPXtzdWJtaXRTdWNjZXNzfVxuICAgICAgdG91Y2hlZD17dG91Y2hlZFtmaWVsZC5pZF19XG4gICAgICBzZXRUb3VjaGVkPXtzZXRUb3VjaGVkfVxuICAgICAgdW5zZXRFcnJvcj17dW5zZXRFcnJvcn1cbiAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgIHBhZ2VzPXtwYWdlc31cbiAgICAgIHByZXZTdGVwPXtwcmV2U3RlcH1cbiAgICAgIG5leHRTdGVwPXtuZXh0U3RlcH1cbiAgICAgIGlzTmV4dERpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgIGhpZGVGaWVsZD17Zm9ybVZhbHVlc1tmaWVsZC5pZF0gPyBmb3JtVmFsdWVzW2ZpZWxkLmlkXS5oaWRlRmllbGQgOiBmYWxzZX1cbiAgICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkPXtcbiAgICAgICAgZmllbGQudHlwZSA9PT0gJ2h0bWwnICYmIGZpZWxkLmNzc0NsYXNzLmluZGV4T2YoJ3NldC1zdGF0ZScpICE9PSAtMVxuICAgICAgICAgID8geyBmb3JtVmFsdWVzLCBzYXZlU3RhdGVUb0h0bWxGaWVsZCB9XG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfVxuICAgICAgc3R5bGVkQ29tcG9uZW50cz17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgIGNzc0NsYXNzPXtmaWVsZENsYXNzTmFtZX1cbiAgICAgIHNldEZvY3VzQ2xhc3M9e3NldEZvY3VzQ2xhc3N9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlckZpZWxkO1xuIl19