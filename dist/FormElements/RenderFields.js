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
      if (fields[i].type === "page") {
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

var fieldTypes = ["checkbox", "email", "hidden", "html", "number", "phone", "radio", "select", "multiselect", "text", "textarea", "website", "page", "date", "fileupload", "consent", "password", "section", "custom"];
var honeyPotLables = ["Name", "Email", "Phone", "Comments"];
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

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      honeypotValue = _useState2[0],
      setHoneypotValue = _useState2[1];

  return _react["default"].createElement("div", {
    className: "form-fields".concat(pagination && pagination.pages.length > 1 ? " hasPages" : "")
  }, pagination && pagination.pages.length > 1 ? pagination.pages.map(function (page, index) {
    return _react["default"].createElement("div", {
      className: "page".concat(activePage === index + 1 ? " active" : ""),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGRzLmpzeCJdLCJuYW1lcyI6WyJkaXZpZGVGaWVsZHNJbnRvUGFnZXMiLCJmaWVsZHMiLCJwYWdlcyIsInRtcEZpZWxkcyIsIm1hcCIsIml0ZW0iLCJpIiwibGVuZ3RoIiwiYXJyIiwicGFnZU51bWJlciIsInR5cGUiLCJwdXNoIiwiZ2V0TWF4RmllbGRJZCIsIm1heCIsInBhcnNlSW50IiwiaWQiLCJmaWVsZFR5cGVzIiwiaG9uZXlQb3RMYWJsZXMiLCJob25leXBvdExhYmVsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHJvcHMiLCJmb3JtVmFsdWVzIiwidXBkYXRlRm9ybSIsInN1Ym1pdEZhaWxlZCIsInN1Ym1pdFN1Y2Nlc3MiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInBhZ2luYXRpb24iLCJhY3RpdmVQYWdlIiwicHJldlN0ZXAiLCJuZXh0U3RlcCIsImlzTmV4dERpc2FibGVkIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwic2F2ZVN0YXRlVG9IdG1sRmllbGQiLCJlbmFibGVIb25leXBvdCIsInN0eWxlZENvbXBvbmVudHMiLCJjdXN0b21Db21wb25lbnRzIiwidW5zZXRFcnJvciIsImVycm9ycyIsImRyb3B6b25lVGV4dCIsImRpdmlkZWRGaWVsZHMiLCJ1bmRlZmluZWQiLCJtYXhJRCIsImhvbmV5cG90VmFsdWUiLCJzZXRIb25leXBvdFZhbHVlIiwicGFnZSIsImluZGV4IiwiZmllbGQiLCJpbmNsdWRlcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsTUFBRCxFQUFTQyxLQUFULEVBQW1CO0FBQy9DLE1BQU1DLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLFdBQUksRUFBSjtBQUFBLEdB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RUdMLGNBQWMsSUFDYjtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRTtBQUFPLElBQUEsT0FBTyxrQkFBV1EsS0FBWCxDQUFkO0FBQWtDLElBQUEsU0FBUyxFQUFDO0FBQTVDLEtBQ0cxQixhQURILENBREYsRUFJRTtBQUNFLElBQUEsSUFBSSxFQUFDLE1BRFA7QUFFRSxJQUFBLElBQUksa0JBQVcwQixLQUFYLENBRk47QUFHRSxJQUFBLEVBQUUsa0JBQVdBLEtBQVgsQ0FISjtBQUlFLElBQUEsS0FBSyxFQUFFQyxhQUpUO0FBS0UsSUFBQSxRQUFRLEVBQUUsa0JBQUFNLENBQUM7QUFBQSxhQUFJTCxnQkFBZ0IsQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBcEI7QUFBQSxLQUxiO0FBTUUsSUFBQSxZQUFZLEVBQUM7QUFOZixJQUpGLENBbkVKLENBREY7QUFvRkQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlbmRlckZpZWxkIGZyb20gXCIuL1JlbmRlckZpZWxkXCI7XG5cbmNvbnN0IGRpdmlkZUZpZWxkc0ludG9QYWdlcyA9IChmaWVsZHMsIHBhZ2VzKSA9PiB7XG4gIGNvbnN0IHRtcEZpZWxkcyA9IHBhZ2VzLm1hcChpdGVtID0+IFtdKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGFyciA9IHRtcEZpZWxkc1tmaWVsZHNbaV0ucGFnZU51bWJlcl07XG4gICAgaWYgKHRtcEZpZWxkc1tmaWVsZHNbaV0ucGFnZU51bWJlciAtIDFdKSB7XG4gICAgICAvLyBtb3ZlIHBhZ2UgZmllbGQgdG8gdGhlIGZpcnN0IGdyb3VwXG4gICAgICBpZiAoZmllbGRzW2ldLnR5cGUgPT09IFwicGFnZVwiKSB7XG4gICAgICAgIHRtcEZpZWxkc1tmaWVsZHNbaV0ucGFnZU51bWJlciAtIDJdLnB1c2goZmllbGRzW2ldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRtcEZpZWxkc1tmaWVsZHNbaV0ucGFnZU51bWJlciAtIDFdLnB1c2goZmllbGRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRtcEZpZWxkcztcbn07XG5cbmNvbnN0IGdldE1heEZpZWxkSWQgPSBmaWVsZHMgPT4ge1xuICBsZXQgbWF4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocGFyc2VJbnQoZmllbGRzW2ldLmlkKSA+IG1heCkge1xuICAgICAgbWF4ID0gcGFyc2VJbnQoZmllbGRzW2ldLmlkKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1heCArIDE7XG59O1xuXG5jb25zdCBmaWVsZFR5cGVzID0gW1xuICBcImNoZWNrYm94XCIsXG4gIFwiZW1haWxcIixcbiAgXCJoaWRkZW5cIixcbiAgXCJodG1sXCIsXG4gIFwibnVtYmVyXCIsXG4gIFwicGhvbmVcIixcbiAgXCJyYWRpb1wiLFxuICBcInNlbGVjdFwiLFxuICBcIm11bHRpc2VsZWN0XCIsXG4gIFwidGV4dFwiLFxuICBcInRleHRhcmVhXCIsXG4gIFwid2Vic2l0ZVwiLFxuICBcInBhZ2VcIixcbiAgXCJkYXRlXCIsXG4gIFwiZmlsZXVwbG9hZFwiLFxuICBcImNvbnNlbnRcIixcbiAgXCJwYXNzd29yZFwiLFxuICBcInNlY3Rpb25cIixcbiAgXCJjdXN0b21cIlxuXTtcblxuY29uc3QgaG9uZXlQb3RMYWJsZXMgPSBbXCJOYW1lXCIsIFwiRW1haWxcIiwgXCJQaG9uZVwiLCBcIkNvbW1lbnRzXCJdO1xuY29uc3QgaG9uZXlwb3RMYWJlbCA9IGhvbmV5UG90TGFibGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoNCkpXTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4ge1xuICBjb25zdCB7XG4gICAgZmllbGRzLFxuICAgIGZvcm1WYWx1ZXMsXG4gICAgdXBkYXRlRm9ybSxcbiAgICBzdWJtaXRGYWlsZWQsXG4gICAgc3VibWl0U3VjY2VzcyxcbiAgICB0b3VjaGVkLFxuICAgIHNldFRvdWNoZWQsXG4gICAgcGFnaW5hdGlvbixcbiAgICBhY3RpdmVQYWdlLFxuICAgIHByZXZTdGVwLFxuICAgIG5leHRTdGVwLFxuICAgIGlzTmV4dERpc2FibGVkLFxuICAgIGNoZWNrQ29uZGl0aW9uYWxMb2dpYyxcbiAgICBzYXZlU3RhdGVUb0h0bWxGaWVsZCxcbiAgICBlbmFibGVIb25leXBvdCxcbiAgICBzdHlsZWRDb21wb25lbnRzLFxuICAgIGN1c3RvbUNvbXBvbmVudHMsXG4gICAgdW5zZXRFcnJvcixcbiAgICBlcnJvcnMsXG4gICAgZHJvcHpvbmVUZXh0XG4gIH0gPSBwcm9wcztcblxuICAvLyBnZXQgcGFnZSBpbmRleGVzXG4gIGNvbnN0IGRpdmlkZWRGaWVsZHMgPSBwYWdpbmF0aW9uXG4gICAgPyBkaXZpZGVGaWVsZHNJbnRvUGFnZXMoZmllbGRzLCBwYWdpbmF0aW9uLnBhZ2VzKVxuICAgIDogdW5kZWZpbmVkO1xuICBjb25zdCBtYXhJRCA9IGdldE1heEZpZWxkSWQoZmllbGRzKTtcbiAgY29uc3QgW2hvbmV5cG90VmFsdWUsIHNldEhvbmV5cG90VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Bmb3JtLWZpZWxkcyR7XG4gICAgICAgIHBhZ2luYXRpb24gJiYgcGFnaW5hdGlvbi5wYWdlcy5sZW5ndGggPiAxID8gXCIgaGFzUGFnZXNcIiA6IFwiXCJcbiAgICAgIH1gfVxuICAgID5cbiAgICAgIHtwYWdpbmF0aW9uICYmIHBhZ2luYXRpb24ucGFnZXMubGVuZ3RoID4gMVxuICAgICAgICA/IHBhZ2luYXRpb24ucGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwYWdlJHthY3RpdmVQYWdlID09PSBpbmRleCArIDEgPyBcIiBhY3RpdmVcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAga2V5PXtgcGFnZS0ke2luZGV4fWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwYWdlICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmX3N0ZXBcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntwYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge2RpdmlkZWRGaWVsZHNbaW5kZXhdLm1hcChcbiAgICAgICAgICAgICAgICBmaWVsZCA9PlxuICAgICAgICAgICAgICAgICAgZmllbGRUeXBlcy5pbmNsdWRlcyhmaWVsZC50eXBlKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZW5kZXJGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIGtleT17ZmllbGQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQ9e2ZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e2Zvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgc3VibWl0RmFpbGVkPXtzdWJtaXRGYWlsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZD17c2V0VG91Y2hlZH1cbiAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRTdWNjZXNzPXtzdWJtaXRTdWNjZXNzfVxuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm09e3VwZGF0ZUZvcm19XG4gICAgICAgICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cbiAgICAgICAgICAgICAgICAgICAgICBwYWdlcz17cGFnaW5hdGlvbi5wYWdlcy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgcHJldlN0ZXA9e3ByZXZTdGVwfVxuICAgICAgICAgICAgICAgICAgICAgIG5leHRTdGVwPXtuZXh0U3RlcH1cbiAgICAgICAgICAgICAgICAgICAgICBpc05leHREaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tDb25kaXRpb25hbExvZ2ljPXtjaGVja0NvbmRpdGlvbmFsTG9naWN9XG4gICAgICAgICAgICAgICAgICAgICAgc2F2ZVN0YXRlVG9IdG1sRmllbGQ9e3NhdmVTdGF0ZVRvSHRtbEZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlZENvbXBvbmVudHM9e3N0eWxlZENvbXBvbmVudHN9XG4gICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ29tcG9uZW50cz17Y3VzdG9tQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgJiYgZXJyb3JzW2ZpZWxkLmlkXSA/IGVycm9yc1tmaWVsZC5pZF0gOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB1bnNldEVycm9yPXt1bnNldEVycm9yfVxuICAgICAgICAgICAgICAgICAgICAgIGRyb3B6b25lVGV4dD17ZHJvcHpvbmVUZXh0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSlcbiAgICAgICAgOiBmaWVsZHMubWFwKFxuICAgICAgICAgICAgZmllbGQgPT5cbiAgICAgICAgICAgICAgZmllbGRUeXBlcy5pbmNsdWRlcyhmaWVsZC50eXBlKSAmJiAoXG4gICAgICAgICAgICAgICAgPFJlbmRlckZpZWxkXG4gICAgICAgICAgICAgICAgICBrZXk9e2ZpZWxkLmlkfVxuICAgICAgICAgICAgICAgICAgZmllbGQ9e2ZpZWxkfVxuICAgICAgICAgICAgICAgICAgZm9ybVZhbHVlcz17Zm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgICAgIHN1Ym1pdEZhaWxlZD17c3VibWl0RmFpbGVkfVxuICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZD17c2V0VG91Y2hlZH1cbiAgICAgICAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M9e3N1Ym1pdFN1Y2Nlc3N9XG4gICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtPXt1cGRhdGVGb3JtfVxuICAgICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cbiAgICAgICAgICAgICAgICAgIGNoZWNrQ29uZGl0aW9uYWxMb2dpYz17Y2hlY2tDb25kaXRpb25hbExvZ2ljfVxuICAgICAgICAgICAgICAgICAgc3R5bGVkQ29tcG9uZW50cz17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMgJiYgZXJyb3JzW2ZpZWxkLmlkXSA/IGVycm9yc1tmaWVsZC5pZF0gOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHVuc2V0RXJyb3I9e3Vuc2V0RXJyb3J9XG4gICAgICAgICAgICAgICAgICBkcm9wem9uZVRleHQ9e2Ryb3B6b25lVGV4dH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKX1cbiAgICAgIHtlbmFibGVIb25leXBvdCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZCBnZm9ybV92YWxpZGF0aW9uX2NvbnRhaW5lclwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgaW5wdXRfJHttYXhJRH1gfSBjbGFzc05hbWU9XCJnZi1sYWJlbCBcIj5cbiAgICAgICAgICAgIHtob25leXBvdExhYmVsfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHttYXhJRH1gfVxuICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke21heElEfWB9XG4gICAgICAgICAgICB2YWx1ZT17aG9uZXlwb3RWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEhvbmV5cG90VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19