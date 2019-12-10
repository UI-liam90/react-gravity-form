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
      customComponents = _ref.customComponents,
      error = _ref.error,
      unsetError = _ref.unsetError,
      dropzoneText = _ref.dropzoneText;
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
    setFocusClass: setFocusClass,
    component: customComponents && customComponents[field.id],
    dropzoneText: dropzoneText
  });
};

var _default = RenderField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGQuanN4Il0sIm5hbWVzIjpbImZyYWMyZGVjIiwiZnJhY3Rpb24iLCJmcmFjdGlvblBhcnRzIiwic3BsaXQiLCJsZW5ndGgiLCJpbmRleE9mIiwiaW50ZWdlciIsInBhcnNlSW50IiwiZGVjaW1hbFBhcnRzIiwiZGVjaW1hbCIsImZvcm1hdENvbXBvbmVudE5hbWUiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZm9ybWF0V2lkdGhGcm9tQ3NzIiwiY3NzQ2xhc3MiLCJ3aWR0aFN0YXJ0cyIsIndpZHRoRW5kcyIsIndpZHRoIiwic3Vic3RyaW5nIiwibWFwIiwiaXRlbSIsInJlcGxhY2UiLCJjbGVhbmVkQ3NzQ2xhc3MiLCJSZW5kZXJGaWVsZCIsImZpZWxkIiwiZm9ybVZhbHVlcyIsInN1Ym1pdEZhaWxlZCIsInN1Ym1pdFN1Y2Nlc3MiLCJzZXRUb3VjaGVkIiwidG91Y2hlZCIsInVwZGF0ZUZvcm0iLCJwYWdlcyIsInByZXZTdGVwIiwibmV4dFN0ZXAiLCJpc05leHREaXNhYmxlZCIsInNhdmVTdGF0ZVRvSHRtbEZpZWxkIiwic3R5bGVkQ29tcG9uZW50cyIsImN1c3RvbUNvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJkcm9wem9uZVRleHQiLCJGb3JtQ29tcG9uZW50IiwiRm9ybUZpZWxkcyIsInR5cGUiLCJ2YWx1ZSIsImlkIiwiZGVmYXVsdFZhbHVlIiwiZmllbGRDbGFzc05hbWUiLCJzZXRGaWVsZENsYXNzTmFtZSIsInNldEZvY3VzQ2xhc3MiLCJhY3Rpb24iLCJldmVudCIsInZhbGlkIiwiaGlkZUZpZWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLFFBQUQsRUFBYztBQUM3Qjs7QUFDQTtBQUNBLE1BQUlDLGFBQWEsR0FBR0QsUUFBUSxDQUFD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QUFjRSxJQUFBLFFBQVEsRUFBRUMsUUFkWjtBQWVFLElBQUEsY0FBYyxFQUFFQyxjQWZsQjtBQWdCRSxJQUFBLFNBQVMsRUFBRVQsVUFBVSxDQUFDRCxLQUFLLENBQUNxQixFQUFQLENBQVYsR0FBdUJwQixVQUFVLENBQUNELEtBQUssQ0FBQ3FCLEVBQVAsQ0FBVixDQUFxQlEsU0FBNUMsR0FBd0QsS0FoQnJFO0FBaUJFLElBQUEsb0JBQW9CLEVBQ2xCN0IsS0FBSyxDQUFDbUIsSUFBTixLQUFlLE1BQWYsSUFBeUJuQixLQUFLLENBQUNWLFFBQU4sQ0FBZVgsT0FBZixDQUF1QixXQUF2QixNQUF3QyxDQUFDLENBQWxFLEdBQ0k7QUFBRXNCLE1BQUFBLFVBQVUsRUFBVkEsVUFBRjtBQUFjVSxNQUFBQSxvQkFBb0IsRUFBcEJBO0FBQWQsS0FESixHQUVJLEtBcEJSO0FBc0JFLElBQUEsZ0JBQWdCLEVBQUVDLGdCQXRCcEI7QUF1QkUsSUFBQSxRQUFRLEVBQUVXLGNBdkJaO0FBd0JFLElBQUEsYUFBYSxFQUFFRSxhQXhCakI7QUF5QkUsSUFBQSxTQUFTLEVBQUVaLGdCQUFnQixJQUFJQSxnQkFBZ0IsQ0FBQ2IsS0FBSyxDQUFDcUIsRUFBUCxDQXpCakQ7QUEwQkUsSUFBQSxZQUFZLEVBQUVMO0FBMUJoQixJQURGO0FBOEJELENBdEVEOztlQXdFZWpCLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBGb3JtRmllbGRzIGZyb20gJy4uL0ZpZWxkcyc7XG5cbmNvbnN0IGZyYWMyZGVjID0gKGZyYWN0aW9uKSA9PiB7XG4gIC8qIGFzc3VtZXMgZnJhY3Rpb24gaXMgaW4gdGhlIGZvcm0gIDEtMS8yIG9yIDEgMS8yICovXG4gIC8qIGRvZXNuJ3Qgd29yayBvbiBuZWdhdGl2ZSBudW1iZXJzICovXG4gIGxldCBmcmFjdGlvblBhcnRzID0gZnJhY3Rpb24uc3BsaXQoJy0nKTtcbiAgaWYgKGZyYWN0aW9uUGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgLyogdHJ5IHNwYWNlIGFzIGRpdmlkZXIgKi9cbiAgICBmcmFjdGlvblBhcnRzID0gZnJhY3Rpb24uc3BsaXQoJyAnKTtcbiAgfVxuXG4gIGlmIChmcmFjdGlvblBhcnRzLmxlbmd0aCA+IDEgJiYgZnJhY3Rpb24uaW5kZXhPZignLycpICE9PSAtMSkge1xuICAgIGNvbnN0IGludGVnZXIgPSBwYXJzZUludChmcmFjdGlvblBhcnRzWzBdKTtcbiAgICBjb25zdCBkZWNpbWFsUGFydHMgPSBmcmFjdGlvblBhcnRzWzFdLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgZGVjaW1hbCA9IHBhcnNlSW50KGRlY2ltYWxQYXJ0c1swXSkgLyBwYXJzZUludChkZWNpbWFsUGFydHNbMV0pO1xuXG4gICAgcmV0dXJuIGludGVnZXIgKyBkZWNpbWFsO1xuICB9XG4gIGlmIChmcmFjdGlvbi5pbmRleE9mKCcvJykgIT09IC0xKSB7XG4gICAgY29uc3QgZGVjaW1hbFBhcnRzID0gZnJhY3Rpb24uc3BsaXQoJy8nKTtcbiAgICBjb25zdCBkZWNpbWFsID0gcGFyc2VJbnQoZGVjaW1hbFBhcnRzWzBdKSAvIHBhcnNlSW50KGRlY2ltYWxQYXJ0c1sxXSk7XG4gICAgcmV0dXJuIGRlY2ltYWw7XG4gIH1cbiAgcmV0dXJuIHBhcnNlSW50KGZyYWN0aW9uKTtcbn07XG5cbmNvbnN0IGZvcm1hdENvbXBvbmVudE5hbWUgPSBzdHJpbmcgPT4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuY29uc3QgZm9ybWF0V2lkdGhGcm9tQ3NzID0gKGNzc0NsYXNzKSA9PiB7XG4gIGlmICghY3NzQ2xhc3MpIHJldHVybiB7fTtcbiAgY29uc3Qgd2lkdGhTdGFydHMgPSBjc3NDbGFzcy5pbmRleE9mKCdbJyk7XG4gIGNvbnN0IHdpZHRoRW5kcyA9IGNzc0NsYXNzLmluZGV4T2YoJ10nKTtcblxuICBpZiAod2lkdGhTdGFydHMgPT09IC0xIHx8IHdpZHRoRW5kcyA9PT0gLTEpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBjb25zdCB3aWR0aCA9IGNzc0NsYXNzXG4gICAgLnN1YnN0cmluZyh3aWR0aFN0YXJ0cyArIDEsIHdpZHRoRW5kcylcbiAgICAuc3BsaXQoJywnKVxuICAgIC5tYXAoaXRlbSA9PiBmcmFjMmRlYyhpdGVtLnJlcGxhY2UoL1xccy9nLCAnJykpKTtcblxuICBjb25zdCBjbGVhbmVkQ3NzQ2xhc3MgPSBgJHtjc3NDbGFzcy5yZXBsYWNlKFxuICAgIGNzc0NsYXNzLnN1YnN0cmluZyh3aWR0aFN0YXJ0cywgd2lkdGhFbmRzICsgMSksXG4gICAgJycsXG4gICl9IGN1c3RvbS13aWR0aGA7XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBjbGVhbmVkQ3NzQ2xhc3MsXG4gIH07XG59O1xuXG5jb25zdCBSZW5kZXJGaWVsZCA9ICh7XG4gIGZpZWxkLFxuICBmb3JtVmFsdWVzLFxuICBzdWJtaXRGYWlsZWQsXG4gIHN1Ym1pdFN1Y2Nlc3MsXG4gIHNldFRvdWNoZWQsXG4gIHRvdWNoZWQsXG4gIHVwZGF0ZUZvcm0sXG4gIHBhZ2VzLFxuICBwcmV2U3RlcCxcbiAgbmV4dFN0ZXAsXG4gIGlzTmV4dERpc2FibGVkLFxuICBzYXZlU3RhdGVUb0h0bWxGaWVsZCxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgY3VzdG9tQ29tcG9uZW50cyxcbiAgZXJyb3IsXG4gIHVuc2V0RXJyb3IsXG4gIGRyb3B6b25lVGV4dCxcbn0pID0+IHtcbiAgY29uc3QgRm9ybUNvbXBvbmVudCA9IEZvcm1GaWVsZHNbZm9ybWF0Q29tcG9uZW50TmFtZShmaWVsZC50eXBlKV07XG4gIGNvbnN0IHsgY2xlYW5lZENzc0NsYXNzLCB3aWR0aCB9ID0gZm9ybWF0V2lkdGhGcm9tQ3NzKGZpZWxkLmNzc0NsYXNzKTtcbiAgaWYgKHdpZHRoKSB7XG4gICAgZmllbGQuY3NzQ2xhc3MgPSBjbGVhbmVkQ3NzQ2xhc3M7XG4gICAgZmllbGQud2lkdGggPSB3aWR0aDtcbiAgfVxuICBjb25zdCB2YWx1ZSA9IGZvcm1WYWx1ZXNbZmllbGQuaWRdID8gZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWUgOiBmaWVsZC5kZWZhdWx0VmFsdWU7XG4gIGNvbnN0IFtmaWVsZENsYXNzTmFtZSwgc2V0RmllbGRDbGFzc05hbWVdID0gdXNlU3RhdGUoXG4gICAgYCR7ZmllbGQuY3NzQ2xhc3N9JHt2YWx1ZSAmJiB2YWx1ZSAhPT0gJycgPyAnZmlsbGVkJyA6ICcnfWAsXG4gICk7XG5cbiAgY29uc3Qgc2V0Rm9jdXNDbGFzcyA9IChhY3Rpb24pID0+IHtcbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICBpZiAoZmllbGRDbGFzc05hbWUuaW5kZXhPZignIGZpbGxlZCcpID09PSAtMSkge1xuICAgICAgICBzZXRGaWVsZENsYXNzTmFtZShgJHtmaWVsZENsYXNzTmFtZX0gZmlsbGVkYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZpZWxkQ2xhc3NOYW1lKGZpZWxkQ2xhc3NOYW1lLnJlcGxhY2UoJyBmaWxsZWQnLCAnJykpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtQ29tcG9uZW50XG4gICAgICBrZXk9e2ZpZWxkLmlkfVxuICAgICAgZmllbGQ9e2ZpZWxkfVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgdXBkYXRlRm9ybT17KGV2ZW50LCBmaWVsZCkgPT4gdXBkYXRlRm9ybShldmVudCwgZmllbGQpfVxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2U9e2Zvcm1WYWx1ZXNbZmllbGQuaWRdID8gZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsaWQgOiBmYWxzZX1cbiAgICAgIHN1Ym1pdEZhaWxlZD17c3VibWl0RmFpbGVkfVxuICAgICAgc3VibWl0U3VjY2Vzcz17c3VibWl0U3VjY2Vzc31cbiAgICAgIHRvdWNoZWQ9e3RvdWNoZWRbZmllbGQuaWRdfVxuICAgICAgc2V0VG91Y2hlZD17c2V0VG91Y2hlZH1cbiAgICAgIHVuc2V0RXJyb3I9e3Vuc2V0RXJyb3J9XG4gICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICBwYWdlcz17cGFnZXN9XG4gICAgICBwcmV2U3RlcD17cHJldlN0ZXB9XG4gICAgICBuZXh0U3RlcD17bmV4dFN0ZXB9XG4gICAgICBpc05leHREaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICBoaWRlRmllbGQ9e2Zvcm1WYWx1ZXNbZmllbGQuaWRdID8gZm9ybVZhbHVlc1tmaWVsZC5pZF0uaGlkZUZpZWxkIDogZmFsc2V9XG4gICAgICBzYXZlU3RhdGVUb0h0bWxGaWVsZD17XG4gICAgICAgIGZpZWxkLnR5cGUgPT09ICdodG1sJyAmJiBmaWVsZC5jc3NDbGFzcy5pbmRleE9mKCdzZXQtc3RhdGUnKSAhPT0gLTFcbiAgICAgICAgICA/IHsgZm9ybVZhbHVlcywgc2F2ZVN0YXRlVG9IdG1sRmllbGQgfVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH1cbiAgICAgIHN0eWxlZENvbXBvbmVudHM9e3N0eWxlZENvbXBvbmVudHN9XG4gICAgICBjc3NDbGFzcz17ZmllbGRDbGFzc05hbWV9XG4gICAgICBzZXRGb2N1c0NsYXNzPXtzZXRGb2N1c0NsYXNzfVxuICAgICAgY29tcG9uZW50PXtjdXN0b21Db21wb25lbnRzICYmIGN1c3RvbUNvbXBvbmVudHNbZmllbGQuaWRdfVxuICAgICAgZHJvcHpvbmVUZXh0PXtkcm9wem9uZVRleHR9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlckZpZWxkO1xuIl19