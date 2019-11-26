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

var fieldTypes = ['checkbox', 'email', 'hidden', 'html', 'number', 'phone', 'radio', 'select', 'multiselect', 'text', 'textarea', 'website', 'page', 'date', 'fileupload', 'consent', 'password', 'section'];
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
        styledComponents: styledComponents,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGRzLmpzeCJdLCJuYW1lcyI6WyJkaXZpZGVGaWVsZHNJbnRvUGFnZXMiLCJmaWVsZHMiLCJwYWdlcyIsInRtcEZpZWxkcyIsIm1hcCIsIml0ZW0iLCJpIiwibGVuZ3RoIiwiYXJyIiwicGFnZU51bWJlciIsInR5cGUiLCJwdXNoIiwiZ2V0TWF4RmllbGRJZCIsIm1heCIsInBhcnNlSW50IiwiaWQiLCJmaWVsZFR5cGVzIiwiaG9uZXlQb3RMYWJsZXMiLCJob25leXBvdExhYmVsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHJvcHMiLCJmb3JtVmFsdWVzIiwidXBkYXRlRm9ybSIsInN1Ym1pdEZhaWxlZCIsInN1Ym1pdFN1Y2Nlc3MiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInBhZ2luYXRpb24iLCJhY3RpdmVQYWdlIiwicHJldlN0ZXAiLCJuZXh0U3RlcCIsImlzTmV4dERpc2FibGVkIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwic2F2ZVN0YXRlVG9IdG1sRmllbGQiLCJlbmFibGVIb25leXBvdCIsInN0eWxlZENvbXBvbmVudHMiLCJ1bnNldEVycm9yIiwiZXJyb3JzIiwiZGl2aWRlZEZpZWxkcyIsInVuZGVmaW5lZCIsIm1heElEIiwiaG9uZXlwb3RWYWx1ZSIsInNldEhvbmV5cG90VmFsdWUiLCJwYWdlIiwiaW5kZXgiLCJmaWVsZCIsImluY2x1ZGVzIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxNQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFDL0MsTUFBTUMsU0FBUyxHQUFHRCxLQUFLLENBQUNFLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsV0FBSSxFQUFKO0FBQUEsR0FBZCxDQUFsQjs7QUFFQSxPQUFLLElBQUlDLENBQUMsR0FB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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlbmRlckZpZWxkIGZyb20gJy4vUmVuZGVyRmllbGQnO1xuXG5jb25zdCBkaXZpZGVGaWVsZHNJbnRvUGFnZXMgPSAoZmllbGRzLCBwYWdlcykgPT4ge1xuICBjb25zdCB0bXBGaWVsZHMgPSBwYWdlcy5tYXAoaXRlbSA9PiBbXSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBhcnIgPSB0bXBGaWVsZHNbZmllbGRzW2ldLnBhZ2VOdW1iZXJdO1xuICAgIGlmICh0bXBGaWVsZHNbZmllbGRzW2ldLnBhZ2VOdW1iZXIgLSAxXSkge1xuICAgICAgLy8gbW92ZSBwYWdlIGZpZWxkIHRvIHRoZSBmaXJzdCBncm91cFxuICAgICAgaWYgKGZpZWxkc1tpXS50eXBlID09PSAncGFnZScpIHtcbiAgICAgICAgdG1wRmllbGRzW2ZpZWxkc1tpXS5wYWdlTnVtYmVyIC0gMl0ucHVzaChmaWVsZHNbaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG1wRmllbGRzW2ZpZWxkc1tpXS5wYWdlTnVtYmVyIC0gMV0ucHVzaChmaWVsZHNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdG1wRmllbGRzO1xufTtcblxuY29uc3QgZ2V0TWF4RmllbGRJZCA9IChmaWVsZHMpID0+IHtcbiAgbGV0IG1heCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBhcnNlSW50KGZpZWxkc1tpXS5pZCkgPiBtYXgpIHtcbiAgICAgIG1heCA9IHBhcnNlSW50KGZpZWxkc1tpXS5pZCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXggKyAxO1xufTtcblxuY29uc3QgZmllbGRUeXBlcyA9IFtcbiAgJ2NoZWNrYm94JyxcbiAgJ2VtYWlsJyxcbiAgJ2hpZGRlbicsXG4gICdodG1sJyxcbiAgJ251bWJlcicsXG4gICdwaG9uZScsXG4gICdyYWRpbycsXG4gICdzZWxlY3QnLFxuICAnbXVsdGlzZWxlY3QnLFxuICAndGV4dCcsXG4gICd0ZXh0YXJlYScsXG4gICd3ZWJzaXRlJyxcbiAgJ3BhZ2UnLFxuICAnZGF0ZScsXG4gICdmaWxldXBsb2FkJyxcbiAgJ2NvbnNlbnQnLFxuICAncGFzc3dvcmQnLFxuICAnc2VjdGlvbicsXG5dO1xuXG5jb25zdCBob25leVBvdExhYmxlcyA9IFsnTmFtZScsICdFbWFpbCcsICdQaG9uZScsICdDb21tZW50cyddO1xuY29uc3QgaG9uZXlwb3RMYWJlbCA9IGhvbmV5UG90TGFibGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoNCkpXTtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmaWVsZHMsXG4gICAgZm9ybVZhbHVlcyxcbiAgICB1cGRhdGVGb3JtLFxuICAgIHN1Ym1pdEZhaWxlZCxcbiAgICBzdWJtaXRTdWNjZXNzLFxuICAgIHRvdWNoZWQsXG4gICAgc2V0VG91Y2hlZCxcbiAgICBwYWdpbmF0aW9uLFxuICAgIGFjdGl2ZVBhZ2UsXG4gICAgcHJldlN0ZXAsXG4gICAgbmV4dFN0ZXAsXG4gICAgaXNOZXh0RGlzYWJsZWQsXG4gICAgY2hlY2tDb25kaXRpb25hbExvZ2ljLFxuICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkLFxuICAgIGVuYWJsZUhvbmV5cG90LFxuICAgIHN0eWxlZENvbXBvbmVudHMsXG4gICAgdW5zZXRFcnJvcixcbiAgICBlcnJvcnMsXG4gIH0gPSBwcm9wcztcblxuICAvLyBnZXQgcGFnZSBpbmRleGVzXG4gIGNvbnN0IGRpdmlkZWRGaWVsZHMgPSBwYWdpbmF0aW9uID8gZGl2aWRlRmllbGRzSW50b1BhZ2VzKGZpZWxkcywgcGFnaW5hdGlvbi5wYWdlcykgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IG1heElEID0gZ2V0TWF4RmllbGRJZChmaWVsZHMpO1xuICBjb25zdCBbaG9uZXlwb3RWYWx1ZSwgc2V0SG9uZXlwb3RWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGRzXCI+XG4gICAgICB7cGFnaW5hdGlvbiAmJiBwYWdpbmF0aW9uLnBhZ2VzLmxlbmd0aCA+IDFcbiAgICAgICAgPyBwYWdpbmF0aW9uLnBhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BwYWdlJHthY3RpdmVQYWdlID09PSBpbmRleCArIDEgPyAnIGFjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAga2V5PXtgcGFnZS0ke2luZGV4fWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2RpdmlkZWRGaWVsZHNbaW5kZXhdLm1hcChcbiAgICAgICAgICAgICAgZmllbGQgPT4gZmllbGRUeXBlcy5pbmNsdWRlcyhmaWVsZC50eXBlKSAmJiAoXG4gICAgICAgICAgICAgICAgICA8UmVuZGVyRmllbGRcbiAgICAgICAgICAgICAgICAgICAga2V5PXtmaWVsZC5pZH1cbiAgICAgICAgICAgICAgICAgICAgZmllbGQ9e2ZpZWxkfVxuICAgICAgICAgICAgICAgICAgICBmb3JtVmFsdWVzPXtmb3JtVmFsdWVzfVxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRGYWlsZWQ9e3N1Ym1pdEZhaWxlZH1cbiAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZD17c2V0VG91Y2hlZH1cbiAgICAgICAgICAgICAgICAgICAgc3VibWl0U3VjY2Vzcz17c3VibWl0U3VjY2Vzc31cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybT17dXBkYXRlRm9ybX1cbiAgICAgICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cbiAgICAgICAgICAgICAgICAgICAgcGFnZXM9e3BhZ2luYXRpb24ucGFnZXMubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICBwcmV2U3RlcD17cHJldlN0ZXB9XG4gICAgICAgICAgICAgICAgICAgIG5leHRTdGVwPXtuZXh0U3RlcH1cbiAgICAgICAgICAgICAgICAgICAgaXNOZXh0RGlzYWJsZWQ9e2lzTmV4dERpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICBjaGVja0NvbmRpdGlvbmFsTG9naWM9e2NoZWNrQ29uZGl0aW9uYWxMb2dpY31cbiAgICAgICAgICAgICAgICAgICAgc2F2ZVN0YXRlVG9IdG1sRmllbGQ9e3NhdmVTdGF0ZVRvSHRtbEZpZWxkfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZWRDb21wb25lbnRzPXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzICYmIGVycm9yc1tmaWVsZC5pZF0gPyBlcnJvcnNbZmllbGQuaWRdIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIHVuc2V0RXJyb3I9e3Vuc2V0RXJyb3J9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKVxuICAgICAgICA6IGZpZWxkcy5tYXAoXG4gICAgICAgICAgZmllbGQgPT4gZmllbGRUeXBlcy5pbmNsdWRlcyhmaWVsZC50eXBlKSAmJiAoXG4gICAgICAgICAgICAgIDxSZW5kZXJGaWVsZFxuICAgICAgICAgICAgICAgIGtleT17ZmllbGQuaWR9XG4gICAgICAgICAgICAgICAgZmllbGQ9e2ZpZWxkfVxuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e2Zvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgICAgc3VibWl0RmFpbGVkPXtzdWJtaXRGYWlsZWR9XG4gICAgICAgICAgICAgICAgc2V0VG91Y2hlZD17c2V0VG91Y2hlZH1cbiAgICAgICAgICAgICAgICBzdWJtaXRTdWNjZXNzPXtzdWJtaXRTdWNjZXNzfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm09e3VwZGF0ZUZvcm19XG4gICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cbiAgICAgICAgICAgICAgICBjaGVja0NvbmRpdGlvbmFsTG9naWM9e2NoZWNrQ29uZGl0aW9uYWxMb2dpY31cbiAgICAgICAgICAgICAgICBzdHlsZWRDb21wb25lbnRzPXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMgJiYgZXJyb3JzW2ZpZWxkLmlkXSA/IGVycm9yc1tmaWVsZC5pZF0gOiBmYWxzZX1cbiAgICAgICAgICAgICAgICB1bnNldEVycm9yPXt1bnNldEVycm9yfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSxcbiAgICAgICAgKX1cbiAgICAgIHtlbmFibGVIb25leXBvdCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZCBnZm9ybV92YWxpZGF0aW9uX2NvbnRhaW5lclwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgaW5wdXRfJHttYXhJRH1gfSBjbGFzc05hbWU9XCJnZi1sYWJlbCBcIj5cbiAgICAgICAgICAgIHtob25leXBvdExhYmVsfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHttYXhJRH1gfVxuICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke21heElEfWB9XG4gICAgICAgICAgICB2YWx1ZT17aG9uZXlwb3RWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEhvbmV5cG90VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19