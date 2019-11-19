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

var fieldTypes = ['checkbox', 'email', 'hidden', 'html', 'number', 'phone', 'radio', 'select', 'multiselect', 'text', 'textarea', 'website', 'page', 'date', 'fileupload', 'consent', 'password'];
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
      styledComponents = props.styledComponents; // get page indexes

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
    }, dividedFields[index].map(function (field) {
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
        styledComponents: styledComponents
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
      styledComponents: styledComponents
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGRzLmpzeCJdLCJuYW1lcyI6WyJkaXZpZGVGaWVsZHNJbnRvUGFnZXMiLCJmaWVsZHMiLCJwYWdlcyIsInRtcEZpZWxkcyIsIm1hcCIsIml0ZW0iLCJpIiwibGVuZ3RoIiwiYXJyIiwicGFnZU51bWJlciIsInR5cGUiLCJwdXNoIiwiZ2V0TWF4RmllbGRJZCIsIm1heCIsInBhcnNlSW50IiwiaWQiLCJmaWVsZFR5cGVzIiwiaG9uZXlQb3RMYWJsZXMiLCJob25leXBvdExhYmVsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHJvcHMiLCJmb3JtVmFsdWVzIiwidXBkYXRlRm9ybSIsInN1Ym1pdEZhaWxlZCIsInN1Ym1pdFN1Y2Nlc3MiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInBhZ2luYXRpb24iLCJhY3RpdmVQYWdlIiwicHJldlN0ZXAiLCJuZXh0U3RlcCIsImlzTmV4dERpc2FibGVkIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwic2F2ZVN0YXRlVG9IdG1sRmllbGQiLCJlbmFibGVIb25leXBvdCIsInN0eWxlZENvbXBvbmVudHMiLCJkaXZpZGVkRmllbGRzIiwidW5kZWZpbmVkIiwibWF4SUQiLCJob25leXBvdFZhbHVlIiwic2V0SG9uZXlwb3RWYWx1ZSIsInBhZ2UiLCJpbmRleCIsImZpZWxkIiwiaW5jbHVkZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLE1BQUQsRUFBU0MsS0FBVCxFQUFtQjtBQUMvQyxNQUFNQyxTQUFTLEdBQUdELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSxXQUFJLEVBQUo7QUFBQSxHQUFkLENBQWxCOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FB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QXFCLEVBQUVPLHFCQVR6QjtBQVVFLE1BQUEsZ0JBQWdCLEVBQUVHO0FBVnBCLE1BREc7QUFBQSxHQURMLENBOUJOLEVBOENHRCxjQUFjLElBQ2I7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0U7QUFBTyxJQUFBLE9BQU8sa0JBQVdJLEtBQVgsQ0FBZDtBQUFrQyxJQUFBLFNBQVMsRUFBQztBQUE1QyxLQUNHdEIsYUFESCxDQURGLEVBSUU7QUFDRSxJQUFBLElBQUksRUFBQyxNQURQO0FBRUUsSUFBQSxJQUFJLGtCQUFXc0IsS0FBWCxDQUZOO0FBR0UsSUFBQSxFQUFFLGtCQUFXQSxLQUFYLENBSEo7QUFJRSxJQUFBLEtBQUssRUFBRUMsYUFKVDtBQUtFLElBQUEsUUFBUSxFQUFFLGtCQUFBTSxDQUFDO0FBQUEsYUFBSUwsZ0JBQWdCLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXBCO0FBQUEsS0FMYjtBQU1FLElBQUEsWUFBWSxFQUFDO0FBTmYsSUFKRixDQS9DSixDQURGO0FBZ0VELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVuZGVyRmllbGQgZnJvbSAnLi9SZW5kZXJGaWVsZCc7XG5cbmNvbnN0IGRpdmlkZUZpZWxkc0ludG9QYWdlcyA9IChmaWVsZHMsIHBhZ2VzKSA9PiB7XG4gIGNvbnN0IHRtcEZpZWxkcyA9IHBhZ2VzLm1hcChpdGVtID0+IFtdKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGFyciA9IHRtcEZpZWxkc1tmaWVsZHNbaV0ucGFnZU51bWJlcl07XG4gICAgaWYgKHRtcEZpZWxkc1tmaWVsZHNbaV0ucGFnZU51bWJlciAtIDFdKSB7XG4gICAgICAvLyBtb3ZlIHBhZ2UgZmllbGQgdG8gdGhlIGZpcnN0IGdyb3VwXG4gICAgICBpZiAoZmllbGRzW2ldLnR5cGUgPT09ICdwYWdlJykge1xuICAgICAgICB0bXBGaWVsZHNbZmllbGRzW2ldLnBhZ2VOdW1iZXIgLSAyXS5wdXNoKGZpZWxkc1tpXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0bXBGaWVsZHNbZmllbGRzW2ldLnBhZ2VOdW1iZXIgLSAxXS5wdXNoKGZpZWxkc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0bXBGaWVsZHM7XG59O1xuXG5jb25zdCBnZXRNYXhGaWVsZElkID0gKGZpZWxkcykgPT4ge1xuICBsZXQgbWF4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocGFyc2VJbnQoZmllbGRzW2ldLmlkKSA+IG1heCkge1xuICAgICAgbWF4ID0gcGFyc2VJbnQoZmllbGRzW2ldLmlkKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1heCArIDE7XG59O1xuXG5jb25zdCBmaWVsZFR5cGVzID0gW1xuICAnY2hlY2tib3gnLFxuICAnZW1haWwnLFxuICAnaGlkZGVuJyxcbiAgJ2h0bWwnLFxuICAnbnVtYmVyJyxcbiAgJ3Bob25lJyxcbiAgJ3JhZGlvJyxcbiAgJ3NlbGVjdCcsXG4gICdtdWx0aXNlbGVjdCcsXG4gICd0ZXh0JyxcbiAgJ3RleHRhcmVhJyxcbiAgJ3dlYnNpdGUnLFxuICAncGFnZScsXG4gICdkYXRlJyxcbiAgJ2ZpbGV1cGxvYWQnLFxuICAnY29uc2VudCcsXG4gICdwYXNzd29yZCcsXG5dO1xuXG5jb25zdCBob25leVBvdExhYmxlcyA9IFsnTmFtZScsICdFbWFpbCcsICdQaG9uZScsICdDb21tZW50cyddO1xuY29uc3QgaG9uZXlwb3RMYWJlbCA9IGhvbmV5UG90TGFibGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoNCkpXTtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmaWVsZHMsXG4gICAgZm9ybVZhbHVlcyxcbiAgICB1cGRhdGVGb3JtLFxuICAgIHN1Ym1pdEZhaWxlZCxcbiAgICBzdWJtaXRTdWNjZXNzLFxuICAgIHRvdWNoZWQsXG4gICAgc2V0VG91Y2hlZCxcbiAgICBwYWdpbmF0aW9uLFxuICAgIGFjdGl2ZVBhZ2UsXG4gICAgcHJldlN0ZXAsXG4gICAgbmV4dFN0ZXAsXG4gICAgaXNOZXh0RGlzYWJsZWQsXG4gICAgY2hlY2tDb25kaXRpb25hbExvZ2ljLFxuICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkLFxuICAgIGVuYWJsZUhvbmV5cG90LFxuICAgIHN0eWxlZENvbXBvbmVudHMsXG4gIH0gPSBwcm9wcztcblxuICAvLyBnZXQgcGFnZSBpbmRleGVzXG4gIGNvbnN0IGRpdmlkZWRGaWVsZHMgPSBwYWdpbmF0aW9uID8gZGl2aWRlRmllbGRzSW50b1BhZ2VzKGZpZWxkcywgcGFnaW5hdGlvbi5wYWdlcykgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IG1heElEID0gZ2V0TWF4RmllbGRJZChmaWVsZHMpO1xuICBjb25zdCBbaG9uZXlwb3RWYWx1ZSwgc2V0SG9uZXlwb3RWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGRzXCI+XG4gICAgICB7cGFnaW5hdGlvbiAmJiBwYWdpbmF0aW9uLnBhZ2VzLmxlbmd0aCA+IDFcbiAgICAgICAgPyBwYWdpbmF0aW9uLnBhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BwYWdlJHthY3RpdmVQYWdlID09PSBpbmRleCArIDEgPyAnIGFjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAga2V5PXtgcGFnZS0ke2luZGV4fWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2RpdmlkZWRGaWVsZHNbaW5kZXhdLm1hcChcbiAgICAgICAgICAgICAgZmllbGQgPT4gZmllbGRUeXBlcy5pbmNsdWRlcyhmaWVsZC50eXBlKSAmJiAoXG4gICAgICAgICAgICAgICAgPFJlbmRlckZpZWxkXG4gICAgICAgICAgICAgICAgICBrZXk9e2ZpZWxkLmlkfVxuICAgICAgICAgICAgICAgICAgZmllbGQ9e2ZpZWxkfVxuICAgICAgICAgICAgICAgICAgZm9ybVZhbHVlcz17Zm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgICAgIHN1Ym1pdEZhaWxlZD17c3VibWl0RmFpbGVkfVxuICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZD17c2V0VG91Y2hlZH1cbiAgICAgICAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M9e3N1Ym1pdFN1Y2Nlc3N9XG4gICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtPXt1cGRhdGVGb3JtfVxuICAgICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cbiAgICAgICAgICAgICAgICAgIHBhZ2VzPXtwYWdpbmF0aW9uLnBhZ2VzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIHByZXZTdGVwPXtwcmV2U3RlcH1cbiAgICAgICAgICAgICAgICAgIG5leHRTdGVwPXtuZXh0U3RlcH1cbiAgICAgICAgICAgICAgICAgIGlzTmV4dERpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgIGNoZWNrQ29uZGl0aW9uYWxMb2dpYz17Y2hlY2tDb25kaXRpb25hbExvZ2ljfVxuICAgICAgICAgICAgICAgICAgc2F2ZVN0YXRlVG9IdG1sRmllbGQ9e3NhdmVTdGF0ZVRvSHRtbEZpZWxkfVxuICAgICAgICAgICAgICAgICAgc3R5bGVkQ29tcG9uZW50cz17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSlcbiAgICAgICAgOiBmaWVsZHMubWFwKFxuICAgICAgICAgIGZpZWxkID0+IGZpZWxkVHlwZXMuaW5jbHVkZXMoZmllbGQudHlwZSkgJiYgKFxuICAgICAgICAgICAgPFJlbmRlckZpZWxkXG4gICAgICAgICAgICAgIGtleT17ZmllbGQuaWR9XG4gICAgICAgICAgICAgIGZpZWxkPXtmaWVsZH1cbiAgICAgICAgICAgICAgZm9ybVZhbHVlcz17Zm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgc3VibWl0RmFpbGVkPXtzdWJtaXRGYWlsZWR9XG4gICAgICAgICAgICAgIHNldFRvdWNoZWQ9e3NldFRvdWNoZWR9XG4gICAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M9e3N1Ym1pdFN1Y2Nlc3N9XG4gICAgICAgICAgICAgIHVwZGF0ZUZvcm09e3VwZGF0ZUZvcm19XG4gICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XG4gICAgICAgICAgICAgIGNoZWNrQ29uZGl0aW9uYWxMb2dpYz17Y2hlY2tDb25kaXRpb25hbExvZ2ljfVxuICAgICAgICAgICAgICBzdHlsZWRDb21wb25lbnRzPXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApLFxuICAgICAgICApfVxuICAgICAge2VuYWJsZUhvbmV5cG90ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkIGdmb3JtX3ZhbGlkYXRpb25fY29udGFpbmVyXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke21heElEfWB9IGNsYXNzTmFtZT1cImdmLWxhYmVsIFwiPlxuICAgICAgICAgICAge2hvbmV5cG90TGFiZWx9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9e2BpbnB1dF8ke21heElEfWB9XG4gICAgICAgICAgICBpZD17YGlucHV0XyR7bWF4SUR9YH1cbiAgICAgICAgICAgIHZhbHVlPXtob25leXBvdFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0SG9uZXlwb3RWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0=