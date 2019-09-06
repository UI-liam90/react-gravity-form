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

var fieldTypes = ['checkbox', 'email', 'hidden', 'html', 'number', 'phone', 'radio', 'select', 'multiselect', 'text', 'textarea', 'website', 'page', 'date', 'fileupload'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGRzLmpzeCJdLCJuYW1lcyI6WyJkaXZpZGVGaWVsZHNJbnRvUGFnZXMiLCJmaWVsZHMiLCJwYWdlcyIsInRtcEZpZWxkcyIsIm1hcCIsIml0ZW0iLCJpIiwibGVuZ3RoIiwiYXJyIiwicGFnZU51bWJlciIsInR5cGUiLCJwdXNoIiwiZ2V0TWF4RmllbGRJZCIsIm1heCIsInBhcnNlSW50IiwiaWQiLCJmaWVsZFR5cGVzIiwiaG9uZXlQb3RMYWJsZXMiLCJob25leXBvdExhYmVsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHJvcHMiLCJmb3JtVmFsdWVzIiwidXBkYXRlRm9ybSIsInN1Ym1pdEZhaWxlZCIsInN1Ym1pdFN1Y2Nlc3MiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInBhZ2luYXRpb24iLCJhY3RpdmVQYWdlIiwicHJldlN0ZXAiLCJuZXh0U3RlcCIsImlzTmV4dERpc2FibGVkIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwic2F2ZVN0YXRlVG9IdG1sRmllbGQiLCJlbmFibGVIb25leXBvdCIsInN0eWxlZENvbXBvbmVudHMiLCJkaXZpZGVkRmllbGRzIiwidW5kZWZpbmVkIiwibWF4SUQiLCJob25leXBvdFZhbHVlIiwic2V0SG9uZXlwb3RWYWx1ZSIsInBhZ2UiLCJpbmRleCIsImZpZWxkIiwiaW5jbHVkZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLE1BQUQsRUFBU0MsS0FBVCxFQUFtQjtBQUMvQyxNQUFNQyxTQUFTLEdBQUdELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSxXQUFJLEVBQUo7QUFBQSxHQUFkLENBQWxCOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FB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QkFBZ0IsRUFBRUc7QUFWcEIsTUFERztBQUFBLEdBREwsQ0E5Qk4sRUE4Q0dELGNBQWMsSUFDYjtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRTtBQUFPLElBQUEsT0FBTyxrQkFBV0ksS0FBWCxDQUFkO0FBQWtDLElBQUEsU0FBUyxFQUFDO0FBQTVDLEtBQ0d0QixhQURILENBREYsRUFJRTtBQUNFLElBQUEsSUFBSSxFQUFDLE1BRFA7QUFFRSxJQUFBLElBQUksa0JBQVdzQixLQUFYLENBRk47QUFHRSxJQUFBLEVBQUUsa0JBQVdBLEtBQVgsQ0FISjtBQUlFLElBQUEsS0FBSyxFQUFFQyxhQUpUO0FBS0UsSUFBQSxRQUFRLEVBQUUsa0JBQUFNLENBQUM7QUFBQSxhQUFJTCxnQkFBZ0IsQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBcEI7QUFBQSxLQUxiO0FBTUUsSUFBQSxZQUFZLEVBQUM7QUFOZixJQUpGLENBL0NKLENBREY7QUFnRUQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZW5kZXJGaWVsZCBmcm9tICcuL1JlbmRlckZpZWxkJztcblxuY29uc3QgZGl2aWRlRmllbGRzSW50b1BhZ2VzID0gKGZpZWxkcywgcGFnZXMpID0+IHtcbiAgY29uc3QgdG1wRmllbGRzID0gcGFnZXMubWFwKGl0ZW0gPT4gW10pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYXJyID0gdG1wRmllbGRzW2ZpZWxkc1tpXS5wYWdlTnVtYmVyXTtcbiAgICBpZiAodG1wRmllbGRzW2ZpZWxkc1tpXS5wYWdlTnVtYmVyIC0gMV0pIHtcbiAgICAgIC8vIG1vdmUgcGFnZSBmaWVsZCB0byB0aGUgZmlyc3QgZ3JvdXBcbiAgICAgIGlmIChmaWVsZHNbaV0udHlwZSA9PT0gJ3BhZ2UnKSB7XG4gICAgICAgIHRtcEZpZWxkc1tmaWVsZHNbaV0ucGFnZU51bWJlciAtIDJdLnB1c2goZmllbGRzW2ldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRtcEZpZWxkc1tmaWVsZHNbaV0ucGFnZU51bWJlciAtIDFdLnB1c2goZmllbGRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRtcEZpZWxkcztcbn07XG5cbmNvbnN0IGdldE1heEZpZWxkSWQgPSAoZmllbGRzKSA9PiB7XG4gIGxldCBtYXggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwYXJzZUludChmaWVsZHNbaV0uaWQpID4gbWF4KSB7XG4gICAgICBtYXggPSBwYXJzZUludChmaWVsZHNbaV0uaWQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWF4ICsgMTtcbn07XG5cbmNvbnN0IGZpZWxkVHlwZXMgPSBbXG4gICdjaGVja2JveCcsXG4gICdlbWFpbCcsXG4gICdoaWRkZW4nLFxuICAnaHRtbCcsXG4gICdudW1iZXInLFxuICAncGhvbmUnLFxuICAncmFkaW8nLFxuICAnc2VsZWN0JyxcbiAgJ211bHRpc2VsZWN0JyxcbiAgJ3RleHQnLFxuICAndGV4dGFyZWEnLFxuICAnd2Vic2l0ZScsXG4gICdwYWdlJyxcbiAgJ2RhdGUnLFxuICAnZmlsZXVwbG9hZCcsXG5dO1xuXG5jb25zdCBob25leVBvdExhYmxlcyA9IFsnTmFtZScsICdFbWFpbCcsICdQaG9uZScsICdDb21tZW50cyddO1xuY29uc3QgaG9uZXlwb3RMYWJlbCA9IGhvbmV5UG90TGFibGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoNCkpXTtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmaWVsZHMsXG4gICAgZm9ybVZhbHVlcyxcbiAgICB1cGRhdGVGb3JtLFxuICAgIHN1Ym1pdEZhaWxlZCxcbiAgICBzdWJtaXRTdWNjZXNzLFxuICAgIHRvdWNoZWQsXG4gICAgc2V0VG91Y2hlZCxcbiAgICBwYWdpbmF0aW9uLFxuICAgIGFjdGl2ZVBhZ2UsXG4gICAgcHJldlN0ZXAsXG4gICAgbmV4dFN0ZXAsXG4gICAgaXNOZXh0RGlzYWJsZWQsXG4gICAgY2hlY2tDb25kaXRpb25hbExvZ2ljLFxuICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkLFxuICAgIGVuYWJsZUhvbmV5cG90LFxuICAgIHN0eWxlZENvbXBvbmVudHMsXG4gIH0gPSBwcm9wcztcblxuICAvLyBnZXQgcGFnZSBpbmRleGVzXG4gIGNvbnN0IGRpdmlkZWRGaWVsZHMgPSBwYWdpbmF0aW9uID8gZGl2aWRlRmllbGRzSW50b1BhZ2VzKGZpZWxkcywgcGFnaW5hdGlvbi5wYWdlcykgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IG1heElEID0gZ2V0TWF4RmllbGRJZChmaWVsZHMpO1xuICBjb25zdCBbaG9uZXlwb3RWYWx1ZSwgc2V0SG9uZXlwb3RWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGRzXCI+XG4gICAgICB7cGFnaW5hdGlvbiAmJiBwYWdpbmF0aW9uLnBhZ2VzLmxlbmd0aCA+IDFcbiAgICAgICAgPyBwYWdpbmF0aW9uLnBhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BwYWdlJHthY3RpdmVQYWdlID09PSBpbmRleCArIDEgPyAnIGFjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAga2V5PXtgcGFnZS0ke2luZGV4fWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2RpdmlkZWRGaWVsZHNbaW5kZXhdLm1hcChcbiAgICAgICAgICAgICAgZmllbGQgPT4gZmllbGRUeXBlcy5pbmNsdWRlcyhmaWVsZC50eXBlKSAmJiAoXG4gICAgICAgICAgICAgICAgPFJlbmRlckZpZWxkXG4gICAgICAgICAgICAgICAgICBrZXk9e2ZpZWxkLmlkfVxuICAgICAgICAgICAgICAgICAgZmllbGQ9e2ZpZWxkfVxuICAgICAgICAgICAgICAgICAgZm9ybVZhbHVlcz17Zm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgICAgIHN1Ym1pdEZhaWxlZD17c3VibWl0RmFpbGVkfVxuICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZD17c2V0VG91Y2hlZH1cbiAgICAgICAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M9e3N1Ym1pdFN1Y2Nlc3N9XG4gICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtPXt1cGRhdGVGb3JtfVxuICAgICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cbiAgICAgICAgICAgICAgICAgIHBhZ2VzPXtwYWdpbmF0aW9uLnBhZ2VzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIHByZXZTdGVwPXtwcmV2U3RlcH1cbiAgICAgICAgICAgICAgICAgIG5leHRTdGVwPXtuZXh0U3RlcH1cbiAgICAgICAgICAgICAgICAgIGlzTmV4dERpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgIGNoZWNrQ29uZGl0aW9uYWxMb2dpYz17Y2hlY2tDb25kaXRpb25hbExvZ2ljfVxuICAgICAgICAgICAgICAgICAgc2F2ZVN0YXRlVG9IdG1sRmllbGQ9e3NhdmVTdGF0ZVRvSHRtbEZpZWxkfVxuICAgICAgICAgICAgICAgICAgc3R5bGVkQ29tcG9uZW50cz17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSlcbiAgICAgICAgOiBmaWVsZHMubWFwKFxuICAgICAgICAgIGZpZWxkID0+IGZpZWxkVHlwZXMuaW5jbHVkZXMoZmllbGQudHlwZSkgJiYgKFxuICAgICAgICAgICAgPFJlbmRlckZpZWxkXG4gICAgICAgICAgICAgIGtleT17ZmllbGQuaWR9XG4gICAgICAgICAgICAgIGZpZWxkPXtmaWVsZH1cbiAgICAgICAgICAgICAgZm9ybVZhbHVlcz17Zm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgc3VibWl0RmFpbGVkPXtzdWJtaXRGYWlsZWR9XG4gICAgICAgICAgICAgIHNldFRvdWNoZWQ9e3NldFRvdWNoZWR9XG4gICAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M9e3N1Ym1pdFN1Y2Nlc3N9XG4gICAgICAgICAgICAgIHVwZGF0ZUZvcm09e3VwZGF0ZUZvcm19XG4gICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XG4gICAgICAgICAgICAgIGNoZWNrQ29uZGl0aW9uYWxMb2dpYz17Y2hlY2tDb25kaXRpb25hbExvZ2ljfVxuICAgICAgICAgICAgICBzdHlsZWRDb21wb25lbnRzPXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApLFxuICAgICAgICApfVxuICAgICAge2VuYWJsZUhvbmV5cG90ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkIGdmb3JtX3ZhbGlkYXRpb25fY29udGFpbmVyXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke21heElEfWB9IGNsYXNzTmFtZT1cImdmLWxhYmVsIFwiPlxuICAgICAgICAgICAge2hvbmV5cG90TGFiZWx9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9e2BpbnB1dF8ke21heElEfWB9XG4gICAgICAgICAgICBpZD17YGlucHV0XyR7bWF4SUR9YH1cbiAgICAgICAgICAgIHZhbHVlPXtob25leXBvdFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0SG9uZXlwb3RWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0=