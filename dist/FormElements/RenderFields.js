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
      errors = props.errors,
      dropzoneText = props.dropzoneText; // get page indexes

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
        unsetError: unsetError,
        dropzoneText: dropzoneText
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
      unsetError: unsetError,
      dropzoneText: dropzoneText
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGRzLmpzeCJdLCJuYW1lcyI6WyJkaXZpZGVGaWVsZHNJbnRvUGFnZXMiLCJmaWVsZHMiLCJwYWdlcyIsInRtcEZpZWxkcyIsIm1hcCIsIml0ZW0iLCJpIiwibGVuZ3RoIiwiYXJyIiwicGFnZU51bWJlciIsInR5cGUiLCJwdXNoIiwiZ2V0TWF4RmllbGRJZCIsIm1heCIsInBhcnNlSW50IiwiaWQiLCJmaWVsZFR5cGVzIiwiaG9uZXlQb3RMYWJsZXMiLCJob25leXBvdExhYmVsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHJvcHMiLCJmb3JtVmFsdWVzIiwidXBkYXRlRm9ybSIsInN1Ym1pdEZhaWxlZCIsInN1Ym1pdFN1Y2Nlc3MiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInBhZ2luYXRpb24iLCJhY3RpdmVQYWdlIiwicHJldlN0ZXAiLCJuZXh0U3RlcCIsImlzTmV4dERpc2FibGVkIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwic2F2ZVN0YXRlVG9IdG1sRmllbGQiLCJlbmFibGVIb25leXBvdCIsInN0eWxlZENvbXBvbmVudHMiLCJjdXN0b21Db21wb25lbnRzIiwidW5zZXRFcnJvciIsImVycm9ycyIsImRyb3B6b25lVGV4dCIsImRpdmlkZWRGaWVsZHMiLCJ1bmRlZmluZWQiLCJtYXhJRCIsImhvbmV5cG90VmFsdWUiLCJzZXRIb25leXBvdFZhbHVlIiwicGFnZSIsImluZGV4IiwiZmllbGQiLCJpbmNsdWRlcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsTUFBRCxFQUFTQyxLQUFULEVBQW1CO0FBQy9DLE1BQU1DLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLFdBQUksRUFBSjtBQUFBLEdB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QUFrQyxJQUFBLFNBQVMsRUFBQztBQUE1QyxLQUNHMUIsYUFESCxDQURGLEVBSUU7QUFDRSxJQUFBLElBQUksRUFBQyxNQURQO0FBRUUsSUFBQSxJQUFJLGtCQUFXMEIsS0FBWCxDQUZOO0FBR0UsSUFBQSxFQUFFLGtCQUFXQSxLQUFYLENBSEo7QUFJRSxJQUFBLEtBQUssRUFBRUMsYUFKVDtBQUtFLElBQUEsUUFBUSxFQUFFLGtCQUFBTSxDQUFDO0FBQUEsYUFBSUwsZ0JBQWdCLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXBCO0FBQUEsS0FMYjtBQU1FLElBQUEsWUFBWSxFQUFDO0FBTmYsSUFKRixDQTNESixDQURGO0FBNEVELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVuZGVyRmllbGQgZnJvbSAnLi9SZW5kZXJGaWVsZCc7XG5cbmNvbnN0IGRpdmlkZUZpZWxkc0ludG9QYWdlcyA9IChmaWVsZHMsIHBhZ2VzKSA9PiB7XG4gIGNvbnN0IHRtcEZpZWxkcyA9IHBhZ2VzLm1hcChpdGVtID0+IFtdKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGFyciA9IHRtcEZpZWxkc1tmaWVsZHNbaV0ucGFnZU51bWJlcl07XG4gICAgaWYgKHRtcEZpZWxkc1tmaWVsZHNbaV0ucGFnZU51bWJlciAtIDFdKSB7XG4gICAgICAvLyBtb3ZlIHBhZ2UgZmllbGQgdG8gdGhlIGZpcnN0IGdyb3VwXG4gICAgICBpZiAoZmllbGRzW2ldLnR5cGUgPT09ICdwYWdlJykge1xuICAgICAgICB0bXBGaWVsZHNbZmllbGRzW2ldLnBhZ2VOdW1iZXIgLSAyXS5wdXNoKGZpZWxkc1tpXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0bXBGaWVsZHNbZmllbGRzW2ldLnBhZ2VOdW1iZXIgLSAxXS5wdXNoKGZpZWxkc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0bXBGaWVsZHM7XG59O1xuXG5jb25zdCBnZXRNYXhGaWVsZElkID0gKGZpZWxkcykgPT4ge1xuICBsZXQgbWF4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocGFyc2VJbnQoZmllbGRzW2ldLmlkKSA+IG1heCkge1xuICAgICAgbWF4ID0gcGFyc2VJbnQoZmllbGRzW2ldLmlkKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1heCArIDE7XG59O1xuXG5jb25zdCBmaWVsZFR5cGVzID0gW1xuICAnY2hlY2tib3gnLFxuICAnZW1haWwnLFxuICAnaGlkZGVuJyxcbiAgJ2h0bWwnLFxuICAnbnVtYmVyJyxcbiAgJ3Bob25lJyxcbiAgJ3JhZGlvJyxcbiAgJ3NlbGVjdCcsXG4gICdtdWx0aXNlbGVjdCcsXG4gICd0ZXh0JyxcbiAgJ3RleHRhcmVhJyxcbiAgJ3dlYnNpdGUnLFxuICAncGFnZScsXG4gICdkYXRlJyxcbiAgJ2ZpbGV1cGxvYWQnLFxuICAnY29uc2VudCcsXG4gICdwYXNzd29yZCcsXG4gICdzZWN0aW9uJyxcbiAgJ2N1c3RvbScsXG5dO1xuXG5jb25zdCBob25leVBvdExhYmxlcyA9IFsnTmFtZScsICdFbWFpbCcsICdQaG9uZScsICdDb21tZW50cyddO1xuY29uc3QgaG9uZXlwb3RMYWJlbCA9IGhvbmV5UG90TGFibGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoNCkpXTtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmaWVsZHMsXG4gICAgZm9ybVZhbHVlcyxcbiAgICB1cGRhdGVGb3JtLFxuICAgIHN1Ym1pdEZhaWxlZCxcbiAgICBzdWJtaXRTdWNjZXNzLFxuICAgIHRvdWNoZWQsXG4gICAgc2V0VG91Y2hlZCxcbiAgICBwYWdpbmF0aW9uLFxuICAgIGFjdGl2ZVBhZ2UsXG4gICAgcHJldlN0ZXAsXG4gICAgbmV4dFN0ZXAsXG4gICAgaXNOZXh0RGlzYWJsZWQsXG4gICAgY2hlY2tDb25kaXRpb25hbExvZ2ljLFxuICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkLFxuICAgIGVuYWJsZUhvbmV5cG90LFxuICAgIHN0eWxlZENvbXBvbmVudHMsXG4gICAgY3VzdG9tQ29tcG9uZW50cyxcbiAgICB1bnNldEVycm9yLFxuICAgIGVycm9ycyxcbiAgICBkcm9wem9uZVRleHQsXG4gIH0gPSBwcm9wcztcblxuICAvLyBnZXQgcGFnZSBpbmRleGVzXG4gIGNvbnN0IGRpdmlkZWRGaWVsZHMgPSBwYWdpbmF0aW9uID8gZGl2aWRlRmllbGRzSW50b1BhZ2VzKGZpZWxkcywgcGFnaW5hdGlvbi5wYWdlcykgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IG1heElEID0gZ2V0TWF4RmllbGRJZChmaWVsZHMpO1xuICBjb25zdCBbaG9uZXlwb3RWYWx1ZSwgc2V0SG9uZXlwb3RWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGRzXCI+XG4gICAgICB7cGFnaW5hdGlvbiAmJiBwYWdpbmF0aW9uLnBhZ2VzLmxlbmd0aCA+IDFcbiAgICAgICAgPyBwYWdpbmF0aW9uLnBhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BwYWdlJHthY3RpdmVQYWdlID09PSBpbmRleCArIDEgPyAnIGFjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAga2V5PXtgcGFnZS0ke2luZGV4fWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3BhZ2UgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmX3N0ZXBcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57cGFnZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtkaXZpZGVkRmllbGRzW2luZGV4XS5tYXAoXG4gICAgICAgICAgICAgIGZpZWxkID0+IGZpZWxkVHlwZXMuaW5jbHVkZXMoZmllbGQudHlwZSkgJiYgKFxuICAgICAgICAgICAgICAgICAgPFJlbmRlckZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGtleT17ZmllbGQuaWR9XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkPXtmaWVsZH1cbiAgICAgICAgICAgICAgICAgICAgZm9ybVZhbHVlcz17Zm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgICAgICAgc3VibWl0RmFpbGVkPXtzdWJtaXRGYWlsZWR9XG4gICAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQ9e3NldFRvdWNoZWR9XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M9e3N1Ym1pdFN1Y2Nlc3N9XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm09e3VwZGF0ZUZvcm19XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzPXtwYWdpbmF0aW9uLnBhZ2VzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgcHJldlN0ZXA9e3ByZXZTdGVwfVxuICAgICAgICAgICAgICAgICAgICBuZXh0U3RlcD17bmV4dFN0ZXB9XG4gICAgICAgICAgICAgICAgICAgIGlzTmV4dERpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tDb25kaXRpb25hbExvZ2ljPXtjaGVja0NvbmRpdGlvbmFsTG9naWN9XG4gICAgICAgICAgICAgICAgICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkPXtzYXZlU3RhdGVUb0h0bWxGaWVsZH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVkQ29tcG9uZW50cz17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ29tcG9uZW50cz17Y3VzdG9tQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycyAmJiBlcnJvcnNbZmllbGQuaWRdID8gZXJyb3JzW2ZpZWxkLmlkXSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgICB1bnNldEVycm9yPXt1bnNldEVycm9yfVxuICAgICAgICAgICAgICAgICAgICBkcm9wem9uZVRleHQ9e2Ryb3B6b25lVGV4dH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpXG4gICAgICAgIDogZmllbGRzLm1hcChcbiAgICAgICAgICBmaWVsZCA9PiBmaWVsZFR5cGVzLmluY2x1ZGVzKGZpZWxkLnR5cGUpICYmIChcbiAgICAgICAgICAgICAgPFJlbmRlckZpZWxkXG4gICAgICAgICAgICAgICAga2V5PXtmaWVsZC5pZH1cbiAgICAgICAgICAgICAgICBmaWVsZD17ZmllbGR9XG4gICAgICAgICAgICAgICAgZm9ybVZhbHVlcz17Zm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgICBzdWJtaXRGYWlsZWQ9e3N1Ym1pdEZhaWxlZH1cbiAgICAgICAgICAgICAgICBzZXRUb3VjaGVkPXtzZXRUb3VjaGVkfVxuICAgICAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M9e3N1Ym1pdFN1Y2Nlc3N9XG4gICAgICAgICAgICAgICAgdXBkYXRlRm9ybT17dXBkYXRlRm9ybX1cbiAgICAgICAgICAgICAgICB0b3VjaGVkPXt0b3VjaGVkfVxuICAgICAgICAgICAgICAgIGNoZWNrQ29uZGl0aW9uYWxMb2dpYz17Y2hlY2tDb25kaXRpb25hbExvZ2ljfVxuICAgICAgICAgICAgICAgIHN0eWxlZENvbXBvbmVudHM9e3N0eWxlZENvbXBvbmVudHN9XG4gICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycyAmJiBlcnJvcnNbZmllbGQuaWRdID8gZXJyb3JzW2ZpZWxkLmlkXSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgIHVuc2V0RXJyb3I9e3Vuc2V0RXJyb3J9XG4gICAgICAgICAgICAgICAgZHJvcHpvbmVUZXh0PXtkcm9wem9uZVRleHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApLFxuICAgICAgICApfVxuICAgICAge2VuYWJsZUhvbmV5cG90ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkIGdmb3JtX3ZhbGlkYXRpb25fY29udGFpbmVyXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke21heElEfWB9IGNsYXNzTmFtZT1cImdmLWxhYmVsIFwiPlxuICAgICAgICAgICAge2hvbmV5cG90TGFiZWx9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9e2BpbnB1dF8ke21heElEfWB9XG4gICAgICAgICAgICBpZD17YGlucHV0XyR7bWF4SUR9YH1cbiAgICAgICAgICAgIHZhbHVlPXtob25leXBvdFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0SG9uZXlwb3RWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0=