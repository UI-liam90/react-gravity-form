"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _RenderField = _interopRequireDefault(require("./RenderField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var divideFieldsIntoPages = function divideFieldsIntoPages(fields, pages) {
  var tmpFields = pages.map(function (item) {
    return [];
  });

  for (var i = 0; i < fields.length; i++) {
    var arr = tmpFields[fields[i].pageNumber];

    if (tmpFields[fields[i].pageNumber - 1]) {
      // move page field to the first group
      if (fields[i].type === 'page') {
        tmpFields[fields[i].pageNumber - 2].push(fields[i]);
      } else {
        tmpFields[fields[i].pageNumber - 1].push(fields[i]);
      }
    }
  }

  return tmpFields;
};

var getMaxFieldId = function getMaxFieldId(fields) {
  var max = 0;

  for (var i = 0; i < fields.length; i++) {
    if (parseInt(fields[i].id) > max) {
      max = parseInt(fields[i].id);
    }
  }

  return max + 1;
};

var fieldTypes = ['checkbox', 'email', 'hidden', 'html', 'number', 'phone', 'radio', 'select', 'multiselect', 'text', 'textarea', 'website', 'page', 'date', 'fileupload', 'consent', 'password', 'section', 'custom'];
var honeyPotLables = ['Name', 'Email', 'Phone', 'Comments'];
var honeypotLabel = honeyPotLables[Math.floor(Math.random() * Math.floor(4))];

var _default = function _default(props) {
  var fields = props.fields,
      formValues = props.formValues,
      updateForm = props.updateForm,
      submitFailed = props.submitFailed,
      submitSuccess = props.submitSuccess,
      touched = props.touched,
      setTouched = props.setTouched,
      pagination = props.pagination,
      activePage = props.activePage,
      prevStep = props.prevStep,
      nextStep = props.nextStep,
      isNextDisabled = props.isNextDisabled,
      checkConditionalLogic = props.checkConditionalLogic,
      saveStateToHtmlField = props.saveStateToHtmlField,
      enableHoneypot = props.enableHoneypot,
      styledComponents = props.styledComponents,
      customComponents = props.customComponents,
      unsetError = props.unsetError,
      errors = props.errors; // get page indexes

  var dividedFields = pagination ? divideFieldsIntoPages(fields, pagination.pages) : undefined;
  var maxID = getMaxFieldId(fields);

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      honeypotValue = _useState2[0],
      setHoneypotValue = _useState2[1];

  return _react["default"].createElement("div", {
    className: "form-fields"
  }, pagination && pagination.pages.length > 1 ? pagination.pages.map(function (page, index) {
    return _react["default"].createElement("div", {
      className: "page".concat(activePage === index + 1 ? ' active' : ''),
      key: "page-".concat(index)
    }, page && _react["default"].createElement("div", {
      className: "gf_step"
    }, _react["default"].createElement("span", null, page)), dividedFields[index].map(function (field) {
      return fieldTypes.includes(field.type) && _react["default"].createElement(_RenderField["default"], {
        key: field.id,
        field: field,
        formValues: formValues,
        submitFailed: submitFailed,
        setTouched: setTouched,
        submitSuccess: submitSuccess,
        updateForm: updateForm,
        touched: touched,
        pages: pagination.pages.length,
        prevStep: prevStep,
        nextStep: nextStep,
        isNextDisabled: isNextDisabled,
        checkConditionalLogic: checkConditionalLogic,
        saveStateToHtmlField: saveStateToHtmlField,
        styledComponents: styledComponents,
        customComponents: customComponents,
        error: errors && errors[field.id] ? errors[field.id] : false,
        unsetError: unsetError
      });
    }));
  }) : fields.map(function (field) {
    return fieldTypes.includes(field.type) && _react["default"].createElement(_RenderField["default"], {
      key: field.id,
      field: field,
      formValues: formValues,
      submitFailed: submitFailed,
      setTouched: setTouched,
      submitSuccess: submitSuccess,
      updateForm: updateForm,
      touched: touched,
      checkConditionalLogic: checkConditionalLogic,
      styledComponents: styledComponents,
      error: errors && errors[field.id] ? errors[field.id] : false,
      unsetError: unsetError
    });
  }), enableHoneypot && _react["default"].createElement("div", {
    className: "form-field gform_validation_container"
  }, _react["default"].createElement("label", {
    htmlFor: "input_".concat(maxID),
    className: "gf-label "
  }, honeypotLabel), _react["default"].createElement("input", {
    type: "text",
    name: "input_".concat(maxID),
    id: "input_".concat(maxID),
    value: honeypotValue,
    onChange: function onChange(e) {
      return setHoneypotValue(e.target.value);
    },
    autoComplete: "off"
  })));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGRzLmpzeCJdLCJuYW1lcyI6WyJkaXZpZGVGaWVsZHNJbnRvUGFnZXMiLCJmaWVsZHMiLCJwYWdlcyIsInRtcEZpZWxkcyIsIm1hcCIsIml0ZW0iLCJpIiwibGVuZ3RoIiwiYXJyIiwicGFnZU51bWJlciIsInR5cGUiLCJwdXNoIiwiZ2V0TWF4RmllbGRJZCIsIm1heCIsInBhcnNlSW50IiwiaWQiLCJmaWVsZFR5cGVzIiwiaG9uZXlQb3RMYWJsZXMiLCJob25leXBvdExhYmVsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHJvcHMiLCJmb3JtVmFsdWVzIiwidXBkYXRlRm9ybSIsInN1Ym1pdEZhaWxlZCIsInN1Ym1pdFN1Y2Nlc3MiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInBhZ2luYXRpb24iLCJhY3RpdmVQYWdlIiwicHJldlN0ZXAiLCJuZXh0U3RlcCIsImlzTmV4dERpc2FibGVkIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwic2F2ZVN0YXRlVG9IdG1sRmllbGQiLCJlbmFibGVIb25leXBvdCIsInN0eWxlZENvbXBvbmVudHMiLCJjdXN0b21Db21wb25lbnRzIiwidW5zZXRFcnJvciIsImVycm9ycyIsImRpdmlkZWRGaWVsZHMiLCJ1bmRlZmluZWQiLCJtYXhJRCIsImhvbmV5cG90VmFsdWUiLCJzZXRIb25leXBvdFZhbHVlIiwicGFnZSIsImluZGV4IiwiZmllbGQiLCJpbmNsdWRlcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsTUFBRCxFQUFTQyxLQUFULEVBQW1CO0FBQy9DLE1BQU1DLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLFdBQUksRUFBSjtBQUFBLEdBQWQsQ0FBbEI7O0FBRUEs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QUFXQSxLQUFYLENBSEo7QUFJRSxJQUFBLEtBQUssRUFBRUMsYUFKVDtBQUtFLElBQUEsUUFBUSxFQUFFLGtCQUFBTSxDQUFDO0FBQUEsYUFBSUwsZ0JBQWdCLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXBCO0FBQUEsS0FMYjtBQU1FLElBQUEsWUFBWSxFQUFDO0FBTmYsSUFKRixDQXpESixDQURGO0FBMEVELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVuZGVyRmllbGQgZnJvbSAnLi9SZW5kZXJGaWVsZCc7XG5cbmNvbnN0IGRpdmlkZUZpZWxkc0ludG9QYWdlcyA9IChmaWVsZHMsIHBhZ2VzKSA9PiB7XG4gIGNvbnN0IHRtcEZpZWxkcyA9IHBhZ2VzLm1hcChpdGVtID0+IFtdKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGFyciA9IHRtcEZpZWxkc1tmaWVsZHNbaV0ucGFnZU51bWJlcl07XG4gICAgaWYgKHRtcEZpZWxkc1tmaWVsZHNbaV0ucGFnZU51bWJlciAtIDFdKSB7XG4gICAgICAvLyBtb3ZlIHBhZ2UgZmllbGQgdG8gdGhlIGZpcnN0IGdyb3VwXG4gICAgICBpZiAoZmllbGRzW2ldLnR5cGUgPT09ICdwYWdlJykge1xuICAgICAgICB0bXBGaWVsZHNbZmllbGRzW2ldLnBhZ2VOdW1iZXIgLSAyXS5wdXNoKGZpZWxkc1tpXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0bXBGaWVsZHNbZmllbGRzW2ldLnBhZ2VOdW1iZXIgLSAxXS5wdXNoKGZpZWxkc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0bXBGaWVsZHM7XG59O1xuXG5jb25zdCBnZXRNYXhGaWVsZElkID0gKGZpZWxkcykgPT4ge1xuICBsZXQgbWF4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocGFyc2VJbnQoZmllbGRzW2ldLmlkKSA+IG1heCkge1xuICAgICAgbWF4ID0gcGFyc2VJbnQoZmllbGRzW2ldLmlkKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1heCArIDE7XG59O1xuXG5jb25zdCBmaWVsZFR5cGVzID0gW1xuICAnY2hlY2tib3gnLFxuICAnZW1haWwnLFxuICAnaGlkZGVuJyxcbiAgJ2h0bWwnLFxuICAnbnVtYmVyJyxcbiAgJ3Bob25lJyxcbiAgJ3JhZGlvJyxcbiAgJ3NlbGVjdCcsXG4gICdtdWx0aXNlbGVjdCcsXG4gICd0ZXh0JyxcbiAgJ3RleHRhcmVhJyxcbiAgJ3dlYnNpdGUnLFxuICAncGFnZScsXG4gICdkYXRlJyxcbiAgJ2ZpbGV1cGxvYWQnLFxuICAnY29uc2VudCcsXG4gICdwYXNzd29yZCcsXG4gICdzZWN0aW9uJyxcbiAgJ2N1c3RvbScsXG5dO1xuXG5jb25zdCBob25leVBvdExhYmxlcyA9IFsnTmFtZScsICdFbWFpbCcsICdQaG9uZScsICdDb21tZW50cyddO1xuY29uc3QgaG9uZXlwb3RMYWJlbCA9IGhvbmV5UG90TGFibGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoNCkpXTtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmaWVsZHMsXG4gICAgZm9ybVZhbHVlcyxcbiAgICB1cGRhdGVGb3JtLFxuICAgIHN1Ym1pdEZhaWxlZCxcbiAgICBzdWJtaXRTdWNjZXNzLFxuICAgIHRvdWNoZWQsXG4gICAgc2V0VG91Y2hlZCxcbiAgICBwYWdpbmF0aW9uLFxuICAgIGFjdGl2ZVBhZ2UsXG4gICAgcHJldlN0ZXAsXG4gICAgbmV4dFN0ZXAsXG4gICAgaXNOZXh0RGlzYWJsZWQsXG4gICAgY2hlY2tDb25kaXRpb25hbExvZ2ljLFxuICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkLFxuICAgIGVuYWJsZUhvbmV5cG90LFxuICAgIHN0eWxlZENvbXBvbmVudHMsXG4gICAgY3VzdG9tQ29tcG9uZW50cyxcbiAgICB1bnNldEVycm9yLFxuICAgIGVycm9ycyxcbiAgfSA9IHByb3BzO1xuXG4gIC8vIGdldCBwYWdlIGluZGV4ZXNcbiAgY29uc3QgZGl2aWRlZEZpZWxkcyA9IHBhZ2luYXRpb24gPyBkaXZpZGVGaWVsZHNJbnRvUGFnZXMoZmllbGRzLCBwYWdpbmF0aW9uLnBhZ2VzKSA6IHVuZGVmaW5lZDtcbiAgY29uc3QgbWF4SUQgPSBnZXRNYXhGaWVsZElkKGZpZWxkcyk7XG4gIGNvbnN0IFtob25leXBvdFZhbHVlLCBzZXRIb25leXBvdFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZHNcIj5cbiAgICAgIHtwYWdpbmF0aW9uICYmIHBhZ2luYXRpb24ucGFnZXMubGVuZ3RoID4gMVxuICAgICAgICA/IHBhZ2luYXRpb24ucGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHBhZ2Uke2FjdGl2ZVBhZ2UgPT09IGluZGV4ICsgMSA/ICcgYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICBrZXk9e2BwYWdlLSR7aW5kZXh9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cGFnZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2Zfc3RlcFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPntwYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2RpdmlkZWRGaWVsZHNbaW5kZXhdLm1hcChcbiAgICAgICAgICAgICAgZmllbGQgPT4gZmllbGRUeXBlcy5pbmNsdWRlcyhmaWVsZC50eXBlKSAmJiAoXG4gICAgICAgICAgICAgICAgICA8UmVuZGVyRmllbGRcbiAgICAgICAgICAgICAgICAgICAga2V5PXtmaWVsZC5pZH1cbiAgICAgICAgICAgICAgICAgICAgZmllbGQ9e2ZpZWxkfVxuICAgICAgICAgICAgICAgICAgICBmb3JtVmFsdWVzPXtmb3JtVmFsdWVzfVxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRGYWlsZWQ9e3N1Ym1pdEZhaWxlZH1cbiAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZD17c2V0VG91Y2hlZH1cbiAgICAgICAgICAgICAgICAgICAgc3VibWl0U3VjY2Vzcz17c3VibWl0U3VjY2Vzc31cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybT17dXBkYXRlRm9ybX1cbiAgICAgICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cbiAgICAgICAgICAgICAgICAgICAgcGFnZXM9e3BhZ2luYXRpb24ucGFnZXMubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICBwcmV2U3RlcD17cHJldlN0ZXB9XG4gICAgICAgICAgICAgICAgICAgIG5leHRTdGVwPXtuZXh0U3RlcH1cbiAgICAgICAgICAgICAgICAgICAgaXNOZXh0RGlzYWJsZWQ9e2lzTmV4dERpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICBjaGVja0NvbmRpdGlvbmFsTG9naWM9e2NoZWNrQ29uZGl0aW9uYWxMb2dpY31cbiAgICAgICAgICAgICAgICAgICAgc2F2ZVN0YXRlVG9IdG1sRmllbGQ9e3NhdmVTdGF0ZVRvSHRtbEZpZWxkfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZWRDb21wb25lbnRzPXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAgICAgICAgICAgICBjdXN0b21Db21wb25lbnRzPXtjdXN0b21Db21wb25lbnRzfVxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzICYmIGVycm9yc1tmaWVsZC5pZF0gPyBlcnJvcnNbZmllbGQuaWRdIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIHVuc2V0RXJyb3I9e3Vuc2V0RXJyb3J9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKVxuICAgICAgICA6IGZpZWxkcy5tYXAoXG4gICAgICAgICAgZmllbGQgPT4gZmllbGRUeXBlcy5pbmNsdWRlcyhmaWVsZC50eXBlKSAmJiAoXG4gICAgICAgICAgICAgIDxSZW5kZXJGaWVsZFxuICAgICAgICAgICAgICAgIGtleT17ZmllbGQuaWR9XG4gICAgICAgICAgICAgICAgZmllbGQ9e2ZpZWxkfVxuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e2Zvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgICAgc3VibWl0RmFpbGVkPXtzdWJtaXRGYWlsZWR9XG4gICAgICAgICAgICAgICAgc2V0VG91Y2hlZD17c2V0VG91Y2hlZH1cbiAgICAgICAgICAgICAgICBzdWJtaXRTdWNjZXNzPXtzdWJtaXRTdWNjZXNzfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm09e3VwZGF0ZUZvcm19XG4gICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cbiAgICAgICAgICAgICAgICBjaGVja0NvbmRpdGlvbmFsTG9naWM9e2NoZWNrQ29uZGl0aW9uYWxMb2dpY31cbiAgICAgICAgICAgICAgICBzdHlsZWRDb21wb25lbnRzPXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMgJiYgZXJyb3JzW2ZpZWxkLmlkXSA/IGVycm9yc1tmaWVsZC5pZF0gOiBmYWxzZX1cbiAgICAgICAgICAgICAgICB1bnNldEVycm9yPXt1bnNldEVycm9yfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSxcbiAgICAgICAgKX1cbiAgICAgIHtlbmFibGVIb25leXBvdCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZCBnZm9ybV92YWxpZGF0aW9uX2NvbnRhaW5lclwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgaW5wdXRfJHttYXhJRH1gfSBjbGFzc05hbWU9XCJnZi1sYWJlbCBcIj5cbiAgICAgICAgICAgIHtob25leXBvdExhYmVsfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHttYXhJRH1gfVxuICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke21heElEfWB9XG4gICAgICAgICAgICB2YWx1ZT17aG9uZXlwb3RWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEhvbmV5cG90VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19