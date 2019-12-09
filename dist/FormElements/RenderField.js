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
    setFocusClass: setFocusClass,
    component: customComponents && customComponents[field.id]
  });
};

var _default = RenderField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGQuanN4Il0sIm5hbWVzIjpbImZyYWMyZGVjIiwiZnJhY3Rpb24iLCJmcmFjdGlvblBhcnRzIiwic3BsaXQiLCJsZW5ndGgiLCJpbmRleE9mIiwiaW50ZWdlciIsInBhcnNlSW50IiwiZGVjaW1hbFBhcnRzIiwiZGVjaW1hbCIsImZvcm1hdENvbXBvbmVudE5hbWUiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZm9ybWF0V2lkdGhGcm9tQ3NzIiwiY3NzQ2xhc3MiLCJ3aWR0aFN0YXJ0cyIsIndpZHRoRW5kcyIsIndpZHRoIiwic3Vic3RyaW5nIiwibWFwIiwiaXRlbSIsInJlcGxhY2UiLCJjbGVhbmVkQ3NzQ2xhc3MiLCJSZW5kZXJGaWVsZCIsImZpZWxkIiwiZm9ybVZhbHVlcyIsInN1Ym1pdEZhaWxlZCIsInN1Ym1pdFN1Y2Nlc3MiLCJzZXRUb3VjaGVkIiwidG91Y2hlZCIsInVwZGF0ZUZvcm0iLCJwYWdlcyIsInByZXZTdGVwIiwibmV4dFN0ZXAiLCJpc05leHREaXNhYmxlZCIsInNhdmVTdGF0ZVRvSHRtbEZpZWxkIiwic3R5bGVkQ29tcG9uZW50cyIsImN1c3RvbUNvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJGb3JtQ29tcG9uZW50IiwiRm9ybUZpZWxkcyIsInR5cGUiLCJ2YWx1ZSIsImlkIiwiZGVmYXVsdFZhbHVlIiwiZmllbGRDbGFzc05hbWUiLCJzZXRGaWVsZENsYXNzTmFtZSIsInNldEZvY3VzQ2xhc3MiLCJhY3Rpb24iLCJldmVudCIsInZhbGlkIiwiaGlkZUZpZWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLFFBQUQsRUFBYztBQUM3Qjs7QUFDQTtBQUNBLE1BQUlDLGFBQWEsR0FBR0QsUUFBUSxDQUFDRSxLQUFULENBQWUsR0FBZixDQUFwQjs7QUFDQSxNQUFJRCxhQUFhLENBQUNFLE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFDOUI7QUFDQUYsSUFBQUEsYUFBYSxHQUFHRCxRQUFRLENBQUNFLEtBQVQsQ0FBZSxHQUFmLENBQWhCO0FBQ0Q7O0FBRUQsTUFBSUQsYUFBYSxDQUFDRSxNQUFkLEdBQXVCLENBQXZCLElBQTRCSCxRQUFRLENBQUNJLE9BQVQsQ0FBaUIsR0FBakIsTUFBMEIsQ0FBQyxDQUEzRCxFQUE4RDtBQUM1RCxRQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0wsYUFBYSxDQUFDLENBQUQsQ0FBZCxDQUF4QjtBQUNBLFFBQU1NLFlBQVksR0FBR04sYUFBYSxDQUFDLENBQUQsQ0FBYixDQUFpQkMsS0FBakIsQ0FBdUIsR0FBdkIsQ0FBckI7QUFDQSxRQUFNTSxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDLENBQUQsQ0FBYixDQUFSLEdBQTRCRCxRQUFRLENBQUNDLFlBQVksQ0FBQyxDQUFELENBQWIsQ0FBcEQ7QUFFQSxXQUFPRixPQUFPLEdBQUdHLE9BQWpCO0FBQ0Q7O0FBQ0QsTUFBSVIsUUFBUSxDQUFDSSxPQUFULENBQWlCLEdBQWpCLE1BQTBCLENBQUMsQ0FBL0IsRUFBa0M7QUFDaEMsUUFBTUcsYUFBWSxHQUFHUCxRQUFRLENBQUNFLEtBQVQsQ0FBZSxHQUFmLENBQXJCOztBQUNBLFFBQU1NLFFBQU8sR0FBR0YsUUFBUSxDQUFDQyxhQUFZLENBQUMsQ0FBRCxDQUFiLENBQVIsR0FBNEJELFFBQVEsQ0FBQ0MsYUFBWSxDQUFDLENBQUQsQ0FBYixDQUFwRDs7QUFDQSxXQUFPQyxRQUFQO0FBQ0Q7O0FBQ0QsU0FBT0YsUUFBUSxDQUFDTixRQUFELENBQWY7QUFDRCxDQXRCRDs7QUF3QkEsSUFBTVMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFBQyxNQUFNO0FBQUEsU0FBSUEsTUFBTSxDQUFDQyxNQUFQLENBQWMsQ0FBZCxFQUFpQkMsV0FBakIsS0FBaUNGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhLENBQWIsQ0FBckM7QUFBQSxDQUFsQzs7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxNQUFJLENBQUNBLFFBQUwsRUFBZSxPQUFPLEVBQVA7QUFDZixNQUFNQyxXQUFXLEdBQUdELFFBQVEsQ0FBQ1gsT0FBVCxDQUFpQixHQUFqQixDQUFwQjtBQUNBLE1BQU1hLFNBQVMsR0FBR0YsUUFBUSxDQUFDWCxPQUFULENBQWlCLEdBQWpCLENBQWxCOztBQUVBLE1BQUlZLFdBQVcsS0FBSyxDQUFDLENBQWpCLElBQXNCQyxTQUFTLEtBQUssQ0FBQyxDQUF6QyxFQUE0QztBQUMxQyxXQUFPLEVBQVA7QUFDRDs7QUFFRCxNQUFNQyxLQUFLLEdBQUdILFFBQVEsQ0FDbkJJLFNBRFcsQ0FDREgsV0FBVyxHQUFHLENBRGIsRUFDZ0JDLFNBRGhCLEVBRVhmLEtBRlcsQ0FFTCxHQUZLLEVBR1hrQixHQUhXLENBR1AsVUFBQUMsSUFBSTtBQUFBLFdBQUl0QixRQUFRLENBQUNzQixJQUFJLENBQUNDLE9BQUwsQ0FBYSxLQUFiLEVBQW9CLEVBQXBCLENBQUQsQ0FBWjtBQUFBLEdBSEcsQ0FBZDtBQUtBLE1BQU1DLGVBQWUsYUFBTVIsUUFBUSxDQUFDTyxPQUFULENBQ3pCUCxRQUFRLENBQUNJLFNBQVQsQ0FBbUJILFdBQW5CLEVBQWdDQyxTQUFTLEdBQUcsQ0FBNUMsQ0FEeUIsRUFFekIsRUFGeUIsQ0FBTixrQkFBckI7QUFLQSxTQUFPO0FBQ0xDLElBQUFBLEtBQUssRUFBTEEsS0FESztBQUVMSyxJQUFBQSxlQUFlLEVBQWZBO0FBRkssR0FBUDtBQUlELENBdkJEOztBQXlCQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQWlCZDtBQUFBLE1BaEJKQyxLQWdCSSxRQWhCSkEsS0FnQkk7QUFBQSxNQWZKQyxVQWVJLFFBZkpBLFVBZUk7QUFBQSxNQWRKQyxZQWNJLFFBZEpBLFlBY0k7QUFBQSxNQWJKQyxhQWFJLFFBYkpBLGFBYUk7QUFBQSxNQVpKQyxVQVlJLFFBWkpBLFVBWUk7QUFBQSxNQVhKQyxPQVdJLFFBWEpBLE9BV0k7QUFBQSxNQVZKQyxXQVVJLFFBVkpBLFVBVUk7QUFBQSxNQVRKQyxLQVNJLFFBVEpBLEtBU0k7QUFBQSxNQVJKQyxRQVFJLFFBUkpBLFFBUUk7QUFBQSxNQVBKQyxRQU9JLFFBUEpBLFFBT0k7QUFBQSxNQU5KQyxjQU1JLFFBTkpBLGNBTUk7QUFBQSxNQUxKQyxvQkFLSSxRQUxKQSxvQkFLSTtBQUFBLE1BSkpDLGdCQUlJLFFBSkpBLGdCQUlJO0FBQUEsTUFISkMsZ0JBR0ksUUFISkEsZ0JBR0k7QUFBQSxNQUZKQyxLQUVJLFFBRkpBLEtBRUk7QUFBQSxNQURKQyxVQUNJLFFBREpBLFVBQ0k7QUFDSixNQUFNQyxhQUFhLEdBQUdDLFVBQVUsQ0FBQ2pDLG1CQUFtQixDQUFDZ0IsS0FBSyxDQUFDa0IsSUFBUCxDQUFwQixDQUFoQzs7QUFESSw0QkFFK0I3QixrQkFBa0IsQ0FBQ1csS0FBSyxDQUFDVixRQUFQLENBRmpEO0FBQUEsTUFFSVEsZUFGSix1QkFFSUEsZUFGSjtBQUFBLE1BRXFCTCxLQUZyQix1QkFFcUJBLEtBRnJCOztBQUdKLE1BQUlBLEtBQUosRUFBVztBQUNUTyxJQUFBQSxLQUFLLENBQUNWLFFBQU4sR0FBaUJRLGVBQWpCO0FBQ0FFLElBQUFBLEtBQUssQ0FBQ1AsS0FBTixHQUFjQSxLQUFkO0FBQ0Q7O0FBQ0QsTUFBTTBCLEtBQUssR0FBR2xCLFVBQVUsQ0FBQ0QsS0FBSyxDQUFDb0IsRUFBUCxDQUFWLEdBQXVCbkIsVUFBVSxDQUFDRCxLQUFLLENBQUNvQixFQUFQLENBQVYsQ0FBcUJELEtBQTVDLEdBQW9EbkIsS0FBSyxDQUFDcUIsWUFBeEU7O0FBUEksa0JBUXdDLCtCQUN2Q3JCLEtBQUssQ0FBQ1YsUUFEaUMsU0FDdEI2QixLQUFLLElBQUlBLEtBQUssS0FBSyxFQUFuQixHQUF3QixRQUF4QixHQUFtQyxFQURiLEVBUnhDO0FBQUE7QUFBQSxNQVFHRyxjQVJIO0FBQUEsTUFRbUJDLGlCQVJuQjs7QUFZSixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLE1BQUQsRUFBWTtBQUNoQyxRQUFJQSxNQUFKLEVBQVk7QUFDVixVQUFJSCxjQUFjLENBQUMzQyxPQUFmLENBQXVCLFNBQXZCLE1BQXNDLENBQUMsQ0FBM0MsRUFBOEM7QUFDNUM0QyxRQUFBQSxpQkFBaUIsV0FBSUQsY0FBSixhQUFqQjtBQUNEO0FBQ0YsS0FKRCxNQUlPO0FBQ0xDLE1BQUFBLGlCQUFpQixDQUFDRCxjQUFjLENBQUN6QixPQUFmLENBQXVCLFNBQXZCLEVBQWtDLEVBQWxDLENBQUQsQ0FBakI7QUFDRDtBQUNGLEdBUkQ7O0FBVUEsU0FDRSxnQ0FBQyxhQUFEO0FBQ0UsSUFBQSxHQUFHLEVBQUVHLEtBQUssQ0FBQ29CLEVBRGI7QUFFRSxJQUFBLEtBQUssRUFBRXBCLEtBRlQ7QUFHRSxJQUFBLEtBQUssRUFBRW1CLEtBSFQ7QUFJRSxJQUFBLFVBQVUsRUFBRSxvQkFBQ08sS0FBRCxFQUFRMUIsS0FBUjtBQUFBLGFBQWtCTSxXQUFVLENBQUNvQixLQUFELEVBQVExQixLQUFSLENBQTVCO0FBQUEsS0FKZDtBQUtFLElBQUEsaUJBQWlCLEVBQUVDLFVBQVUsQ0FBQ0QsS0FBSyxDQUFDb0IsRUFBUCxDQUFWLEdBQXVCbkIsVUFBVSxDQUFDRCxLQUFLLENBQUNvQixFQUFQLENBQVYsQ0FBcUJPLEtBQTVDLEdBQW9ELEtBTHpFO0FBTUUsSUFBQSxZQUFZLEVBQUV6QixZQU5oQjtBQU9FLElBQUEsYUFBYSxFQUFFQyxhQVBqQjtBQVFFLElBQUEsT0FBTyxFQUFFRSxPQUFPLENBQUNMLEtBQUssQ0FBQ29CLEVBQVAsQ0FSbEI7QUFTRSxJQUFBLFVBQVUsRUFBRWhCLFVBVGQ7QUFVRSxJQUFBLFVBQVUsRUFBRVcsVUFWZDtBQVdFLElBQUEsS0FBSyxFQUFFRCxLQVhUO0FBWUUsSUFBQSxLQUFLLEVBQUVQLEtBWlQ7QUFhRSxJQUFBLFFBQVEsRUFBRUMsUUFiWjtBQWNFLElBQUEsUUFBUSxFQUFFQyxRQWRaO0FBZUUsSUFBQSxjQUFjLEVBQUVDLGNBZmxCO0FBZ0JFLElBQUEsU0FBUyxFQUFFVCxVQUFVLENBQUNELEtBQUssQ0FBQ29CLEVBQVAsQ0FBVixHQUF1Qm5CLFVBQVUsQ0FBQ0QsS0FBSyxDQUFDb0IsRUFBUCxDQUFWLENBQXFCUSxTQUE1QyxHQUF3RCxLQWhCckU7QUFpQkUsSUFBQSxvQkFBb0IsRUFDbEI1QixLQUFLLENBQUNrQixJQUFOLEtBQWUsTUFBZixJQUF5QmxCLEtBQUssQ0FBQ1YsUUFBTixDQUFlWCxPQUFmLENBQXVCLFdBQXZCLE1BQXdDLENBQUMsQ0FBbEUsR0FDSTtBQUFFc0IsTUFBQUEsVUFBVSxFQUFWQSxVQUFGO0FBQWNVLE1BQUFBLG9CQUFvQixFQUFwQkE7QUFBZCxLQURKLEdBRUksS0FwQlI7QUFzQkUsSUFBQSxnQkFBZ0IsRUFBRUMsZ0JBdEJwQjtBQXVCRSxJQUFBLFFBQVEsRUFBRVUsY0F2Qlo7QUF3QkUsSUFBQSxhQUFhLEVBQUVFLGFBeEJqQjtBQXlCRSxJQUFBLFNBQVMsRUFBRVgsZ0JBQWdCLElBQUlBLGdCQUFnQixDQUFDYixLQUFLLENBQUNvQixFQUFQO0FBekJqRCxJQURGO0FBNkJELENBcEVEOztlQXNFZXJCLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBGb3JtRmllbGRzIGZyb20gJy4uL0ZpZWxkcyc7XG5cbmNvbnN0IGZyYWMyZGVjID0gKGZyYWN0aW9uKSA9PiB7XG4gIC8qIGFzc3VtZXMgZnJhY3Rpb24gaXMgaW4gdGhlIGZvcm0gIDEtMS8yIG9yIDEgMS8yICovXG4gIC8qIGRvZXNuJ3Qgd29yayBvbiBuZWdhdGl2ZSBudW1iZXJzICovXG4gIGxldCBmcmFjdGlvblBhcnRzID0gZnJhY3Rpb24uc3BsaXQoJy0nKTtcbiAgaWYgKGZyYWN0aW9uUGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgLyogdHJ5IHNwYWNlIGFzIGRpdmlkZXIgKi9cbiAgICBmcmFjdGlvblBhcnRzID0gZnJhY3Rpb24uc3BsaXQoJyAnKTtcbiAgfVxuXG4gIGlmIChmcmFjdGlvblBhcnRzLmxlbmd0aCA+IDEgJiYgZnJhY3Rpb24uaW5kZXhPZignLycpICE9PSAtMSkge1xuICAgIGNvbnN0IGludGVnZXIgPSBwYXJzZUludChmcmFjdGlvblBhcnRzWzBdKTtcbiAgICBjb25zdCBkZWNpbWFsUGFydHMgPSBmcmFjdGlvblBhcnRzWzFdLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgZGVjaW1hbCA9IHBhcnNlSW50KGRlY2ltYWxQYXJ0c1swXSkgLyBwYXJzZUludChkZWNpbWFsUGFydHNbMV0pO1xuXG4gICAgcmV0dXJuIGludGVnZXIgKyBkZWNpbWFsO1xuICB9XG4gIGlmIChmcmFjdGlvbi5pbmRleE9mKCcvJykgIT09IC0xKSB7XG4gICAgY29uc3QgZGVjaW1hbFBhcnRzID0gZnJhY3Rpb24uc3BsaXQoJy8nKTtcbiAgICBjb25zdCBkZWNpbWFsID0gcGFyc2VJbnQoZGVjaW1hbFBhcnRzWzBdKSAvIHBhcnNlSW50KGRlY2ltYWxQYXJ0c1sxXSk7XG4gICAgcmV0dXJuIGRlY2ltYWw7XG4gIH1cbiAgcmV0dXJuIHBhcnNlSW50KGZyYWN0aW9uKTtcbn07XG5cbmNvbnN0IGZvcm1hdENvbXBvbmVudE5hbWUgPSBzdHJpbmcgPT4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuY29uc3QgZm9ybWF0V2lkdGhGcm9tQ3NzID0gKGNzc0NsYXNzKSA9PiB7XG4gIGlmICghY3NzQ2xhc3MpIHJldHVybiB7fTtcbiAgY29uc3Qgd2lkdGhTdGFydHMgPSBjc3NDbGFzcy5pbmRleE9mKCdbJyk7XG4gIGNvbnN0IHdpZHRoRW5kcyA9IGNzc0NsYXNzLmluZGV4T2YoJ10nKTtcblxuICBpZiAod2lkdGhTdGFydHMgPT09IC0xIHx8IHdpZHRoRW5kcyA9PT0gLTEpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBjb25zdCB3aWR0aCA9IGNzc0NsYXNzXG4gICAgLnN1YnN0cmluZyh3aWR0aFN0YXJ0cyArIDEsIHdpZHRoRW5kcylcbiAgICAuc3BsaXQoJywnKVxuICAgIC5tYXAoaXRlbSA9PiBmcmFjMmRlYyhpdGVtLnJlcGxhY2UoL1xccy9nLCAnJykpKTtcblxuICBjb25zdCBjbGVhbmVkQ3NzQ2xhc3MgPSBgJHtjc3NDbGFzcy5yZXBsYWNlKFxuICAgIGNzc0NsYXNzLnN1YnN0cmluZyh3aWR0aFN0YXJ0cywgd2lkdGhFbmRzICsgMSksXG4gICAgJycsXG4gICl9IGN1c3RvbS13aWR0aGA7XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBjbGVhbmVkQ3NzQ2xhc3MsXG4gIH07XG59O1xuXG5jb25zdCBSZW5kZXJGaWVsZCA9ICh7XG4gIGZpZWxkLFxuICBmb3JtVmFsdWVzLFxuICBzdWJtaXRGYWlsZWQsXG4gIHN1Ym1pdFN1Y2Nlc3MsXG4gIHNldFRvdWNoZWQsXG4gIHRvdWNoZWQsXG4gIHVwZGF0ZUZvcm0sXG4gIHBhZ2VzLFxuICBwcmV2U3RlcCxcbiAgbmV4dFN0ZXAsXG4gIGlzTmV4dERpc2FibGVkLFxuICBzYXZlU3RhdGVUb0h0bWxGaWVsZCxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgY3VzdG9tQ29tcG9uZW50cyxcbiAgZXJyb3IsXG4gIHVuc2V0RXJyb3IsXG59KSA9PiB7XG4gIGNvbnN0IEZvcm1Db21wb25lbnQgPSBGb3JtRmllbGRzW2Zvcm1hdENvbXBvbmVudE5hbWUoZmllbGQudHlwZSldO1xuICBjb25zdCB7IGNsZWFuZWRDc3NDbGFzcywgd2lkdGggfSA9IGZvcm1hdFdpZHRoRnJvbUNzcyhmaWVsZC5jc3NDbGFzcyk7XG4gIGlmICh3aWR0aCkge1xuICAgIGZpZWxkLmNzc0NsYXNzID0gY2xlYW5lZENzc0NsYXNzO1xuICAgIGZpZWxkLndpZHRoID0gd2lkdGg7XG4gIH1cbiAgY29uc3QgdmFsdWUgPSBmb3JtVmFsdWVzW2ZpZWxkLmlkXSA/IGZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlIDogZmllbGQuZGVmYXVsdFZhbHVlO1xuICBjb25zdCBbZmllbGRDbGFzc05hbWUsIHNldEZpZWxkQ2xhc3NOYW1lXSA9IHVzZVN0YXRlKFxuICAgIGAke2ZpZWxkLmNzc0NsYXNzfSR7dmFsdWUgJiYgdmFsdWUgIT09ICcnID8gJ2ZpbGxlZCcgOiAnJ31gLFxuICApO1xuXG4gIGNvbnN0IHNldEZvY3VzQ2xhc3MgPSAoYWN0aW9uKSA9PiB7XG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgaWYgKGZpZWxkQ2xhc3NOYW1lLmluZGV4T2YoJyBmaWxsZWQnKSA9PT0gLTEpIHtcbiAgICAgICAgc2V0RmllbGRDbGFzc05hbWUoYCR7ZmllbGRDbGFzc05hbWV9IGZpbGxlZGApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRGaWVsZENsYXNzTmFtZShmaWVsZENsYXNzTmFtZS5yZXBsYWNlKCcgZmlsbGVkJywgJycpKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUNvbXBvbmVudFxuICAgICAga2V5PXtmaWVsZC5pZH1cbiAgICAgIGZpZWxkPXtmaWVsZH1cbiAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIHVwZGF0ZUZvcm09eyhldmVudCwgZmllbGQpID0+IHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKX1cbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlPXtmb3JtVmFsdWVzW2ZpZWxkLmlkXSA/IGZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbGlkIDogZmFsc2V9XG4gICAgICBzdWJtaXRGYWlsZWQ9e3N1Ym1pdEZhaWxlZH1cbiAgICAgIHN1Ym1pdFN1Y2Nlc3M9e3N1Ym1pdFN1Y2Nlc3N9XG4gICAgICB0b3VjaGVkPXt0b3VjaGVkW2ZpZWxkLmlkXX1cbiAgICAgIHNldFRvdWNoZWQ9e3NldFRvdWNoZWR9XG4gICAgICB1bnNldEVycm9yPXt1bnNldEVycm9yfVxuICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgcGFnZXM9e3BhZ2VzfVxuICAgICAgcHJldlN0ZXA9e3ByZXZTdGVwfVxuICAgICAgbmV4dFN0ZXA9e25leHRTdGVwfVxuICAgICAgaXNOZXh0RGlzYWJsZWQ9e2lzTmV4dERpc2FibGVkfVxuICAgICAgaGlkZUZpZWxkPXtmb3JtVmFsdWVzW2ZpZWxkLmlkXSA/IGZvcm1WYWx1ZXNbZmllbGQuaWRdLmhpZGVGaWVsZCA6IGZhbHNlfVxuICAgICAgc2F2ZVN0YXRlVG9IdG1sRmllbGQ9e1xuICAgICAgICBmaWVsZC50eXBlID09PSAnaHRtbCcgJiYgZmllbGQuY3NzQ2xhc3MuaW5kZXhPZignc2V0LXN0YXRlJykgIT09IC0xXG4gICAgICAgICAgPyB7IGZvcm1WYWx1ZXMsIHNhdmVTdGF0ZVRvSHRtbEZpZWxkIH1cbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9XG4gICAgICBzdHlsZWRDb21wb25lbnRzPXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgY3NzQ2xhc3M9e2ZpZWxkQ2xhc3NOYW1lfVxuICAgICAgc2V0Rm9jdXNDbGFzcz17c2V0Rm9jdXNDbGFzc31cbiAgICAgIGNvbXBvbmVudD17Y3VzdG9tQ29tcG9uZW50cyAmJiBjdXN0b21Db21wb25lbnRzW2ZpZWxkLmlkXX1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyRmllbGQ7XG4iXX0=