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

var fieldTypes = ['checkbox', 'email', 'hidden', 'html', 'number', 'phone', 'radio', 'select', 'multiselect', 'text', 'textarea', 'website', 'page', 'date', 'fileupload', 'consent'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGRzLmpzeCJdLCJuYW1lcyI6WyJkaXZpZGVGaWVsZHNJbnRvUGFnZXMiLCJmaWVsZHMiLCJwYWdlcyIsInRtcEZpZWxkcyIsIm1hcCIsIml0ZW0iLCJpIiwibGVuZ3RoIiwiYXJyIiwicGFnZU51bWJlciIsInR5cGUiLCJwdXNoIiwiZ2V0TWF4RmllbGRJZCIsIm1heCIsInBhcnNlSW50IiwiaWQiLCJmaWVsZFR5cGVzIiwiaG9uZXlQb3RMYWJsZXMiLCJob25leXBvdExhYmVsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHJvcHMiLCJmb3JtVmFsdWVzIiwidXBkYXRlRm9ybSIsInN1Ym1pdEZhaWxlZCIsInN1Ym1pdFN1Y2Nlc3MiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInBhZ2luYXRpb24iLCJhY3RpdmVQYWdlIiwicHJldlN0ZXAiLCJuZXh0U3RlcCIsImlzTmV4dERpc2FibGVkIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwic2F2ZVN0YXRlVG9IdG1sRmllbGQiLCJlbmFibGVIb25leXBvdCIsInN0eWxlZENvbXBvbmVudHMiLCJkaXZpZGVkRmllbGRzIiwidW5kZWZpbmVkIiwibWF4SUQiLCJob25leXBvdFZhbHVlIiwic2V0SG9uZXlwb3RWYWx1ZSIsInBhZ2UiLCJpbmRleCIsImZpZWxkIiwiaW5jbHVkZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLE1BQUQsRUFBU0MsS0FBVCxFQUFtQjtBQUMvQyxNQUFNQyxTQUFTLEdBQUdELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSxXQUFJLEVBQUo7QUFBQSxHQUFkLENBQWxCOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FB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ekI7QUFVRSxNQUFBLGdCQUFnQixFQUFFRztBQVZwQixNQURHO0FBQUEsR0FETCxDQTlCTixFQThDR0QsY0FBYyxJQUNiO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFO0FBQU8sSUFBQSxPQUFPLGtCQUFXSSxLQUFYLENBQWQ7QUFBa0MsSUFBQSxTQUFTLEVBQUM7QUFBNUMsS0FDR3RCLGFBREgsQ0FERixFQUlFO0FBQ0UsSUFBQSxJQUFJLEVBQUMsTUFEUDtBQUVFLElBQUEsSUFBSSxrQkFBV3NCLEtBQVgsQ0FGTjtBQUdFLElBQUEsRUFBRSxrQkFBV0EsS0FBWCxDQUhKO0FBSUUsSUFBQSxLQUFLLEVBQUVDLGFBSlQ7QUFLRSxJQUFBLFFBQVEsRUFBRSxrQkFBQU0sQ0FBQztBQUFBLGFBQUlMLGdCQUFnQixDQUFDSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFwQjtBQUFBLEtBTGI7QUFNRSxJQUFBLFlBQVksRUFBQztBQU5mLElBSkYsQ0EvQ0osQ0FERjtBQWdFRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlbmRlckZpZWxkIGZyb20gJy4vUmVuZGVyRmllbGQnO1xuXG5jb25zdCBkaXZpZGVGaWVsZHNJbnRvUGFnZXMgPSAoZmllbGRzLCBwYWdlcykgPT4ge1xuICBjb25zdCB0bXBGaWVsZHMgPSBwYWdlcy5tYXAoaXRlbSA9PiBbXSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBhcnIgPSB0bXBGaWVsZHNbZmllbGRzW2ldLnBhZ2VOdW1iZXJdO1xuICAgIGlmICh0bXBGaWVsZHNbZmllbGRzW2ldLnBhZ2VOdW1iZXIgLSAxXSkge1xuICAgICAgLy8gbW92ZSBwYWdlIGZpZWxkIHRvIHRoZSBmaXJzdCBncm91cFxuICAgICAgaWYgKGZpZWxkc1tpXS50eXBlID09PSAncGFnZScpIHtcbiAgICAgICAgdG1wRmllbGRzW2ZpZWxkc1tpXS5wYWdlTnVtYmVyIC0gMl0ucHVzaChmaWVsZHNbaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG1wRmllbGRzW2ZpZWxkc1tpXS5wYWdlTnVtYmVyIC0gMV0ucHVzaChmaWVsZHNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdG1wRmllbGRzO1xufTtcblxuY29uc3QgZ2V0TWF4RmllbGRJZCA9IChmaWVsZHMpID0+IHtcbiAgbGV0IG1heCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBhcnNlSW50KGZpZWxkc1tpXS5pZCkgPiBtYXgpIHtcbiAgICAgIG1heCA9IHBhcnNlSW50KGZpZWxkc1tpXS5pZCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXggKyAxO1xufTtcblxuY29uc3QgZmllbGRUeXBlcyA9IFtcbiAgJ2NoZWNrYm94JyxcbiAgJ2VtYWlsJyxcbiAgJ2hpZGRlbicsXG4gICdodG1sJyxcbiAgJ251bWJlcicsXG4gICdwaG9uZScsXG4gICdyYWRpbycsXG4gICdzZWxlY3QnLFxuICAnbXVsdGlzZWxlY3QnLFxuICAndGV4dCcsXG4gICd0ZXh0YXJlYScsXG4gICd3ZWJzaXRlJyxcbiAgJ3BhZ2UnLFxuICAnZGF0ZScsXG4gICdmaWxldXBsb2FkJyxcbiAgJ2NvbnNlbnQnLFxuXTtcblxuY29uc3QgaG9uZXlQb3RMYWJsZXMgPSBbJ05hbWUnLCAnRW1haWwnLCAnUGhvbmUnLCAnQ29tbWVudHMnXTtcbmNvbnN0IGhvbmV5cG90TGFiZWwgPSBob25leVBvdExhYmxlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDQpKV07XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgZmllbGRzLFxuICAgIGZvcm1WYWx1ZXMsXG4gICAgdXBkYXRlRm9ybSxcbiAgICBzdWJtaXRGYWlsZWQsXG4gICAgc3VibWl0U3VjY2VzcyxcbiAgICB0b3VjaGVkLFxuICAgIHNldFRvdWNoZWQsXG4gICAgcGFnaW5hdGlvbixcbiAgICBhY3RpdmVQYWdlLFxuICAgIHByZXZTdGVwLFxuICAgIG5leHRTdGVwLFxuICAgIGlzTmV4dERpc2FibGVkLFxuICAgIGNoZWNrQ29uZGl0aW9uYWxMb2dpYyxcbiAgICBzYXZlU3RhdGVUb0h0bWxGaWVsZCxcbiAgICBlbmFibGVIb25leXBvdCxcbiAgICBzdHlsZWRDb21wb25lbnRzLFxuICB9ID0gcHJvcHM7XG5cbiAgLy8gZ2V0IHBhZ2UgaW5kZXhlc1xuICBjb25zdCBkaXZpZGVkRmllbGRzID0gcGFnaW5hdGlvbiA/IGRpdmlkZUZpZWxkc0ludG9QYWdlcyhmaWVsZHMsIHBhZ2luYXRpb24ucGFnZXMpIDogdW5kZWZpbmVkO1xuICBjb25zdCBtYXhJRCA9IGdldE1heEZpZWxkSWQoZmllbGRzKTtcbiAgY29uc3QgW2hvbmV5cG90VmFsdWUsIHNldEhvbmV5cG90VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkc1wiPlxuICAgICAge3BhZ2luYXRpb24gJiYgcGFnaW5hdGlvbi5wYWdlcy5sZW5ndGggPiAxXG4gICAgICAgID8gcGFnaW5hdGlvbi5wYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcGFnZSR7YWN0aXZlUGFnZSA9PT0gaW5kZXggKyAxID8gJyBhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgIGtleT17YHBhZ2UtJHtpbmRleH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtkaXZpZGVkRmllbGRzW2luZGV4XS5tYXAoXG4gICAgICAgICAgICAgIGZpZWxkID0+IGZpZWxkVHlwZXMuaW5jbHVkZXMoZmllbGQudHlwZSkgJiYgKFxuICAgICAgICAgICAgICAgIDxSZW5kZXJGaWVsZFxuICAgICAgICAgICAgICAgICAga2V5PXtmaWVsZC5pZH1cbiAgICAgICAgICAgICAgICAgIGZpZWxkPXtmaWVsZH1cbiAgICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e2Zvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgICAgICBzdWJtaXRGYWlsZWQ9e3N1Ym1pdEZhaWxlZH1cbiAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQ9e3NldFRvdWNoZWR9XG4gICAgICAgICAgICAgICAgICBzdWJtaXRTdWNjZXNzPXtzdWJtaXRTdWNjZXNzfVxuICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybT17dXBkYXRlRm9ybX1cbiAgICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XG4gICAgICAgICAgICAgICAgICBwYWdlcz17cGFnaW5hdGlvbi5wYWdlcy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICBwcmV2U3RlcD17cHJldlN0ZXB9XG4gICAgICAgICAgICAgICAgICBuZXh0U3RlcD17bmV4dFN0ZXB9XG4gICAgICAgICAgICAgICAgICBpc05leHREaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICBjaGVja0NvbmRpdGlvbmFsTG9naWM9e2NoZWNrQ29uZGl0aW9uYWxMb2dpY31cbiAgICAgICAgICAgICAgICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkPXtzYXZlU3RhdGVUb0h0bWxGaWVsZH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlZENvbXBvbmVudHM9e3N0eWxlZENvbXBvbmVudHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpXG4gICAgICAgIDogZmllbGRzLm1hcChcbiAgICAgICAgICBmaWVsZCA9PiBmaWVsZFR5cGVzLmluY2x1ZGVzKGZpZWxkLnR5cGUpICYmIChcbiAgICAgICAgICAgIDxSZW5kZXJGaWVsZFxuICAgICAgICAgICAgICBrZXk9e2ZpZWxkLmlkfVxuICAgICAgICAgICAgICBmaWVsZD17ZmllbGR9XG4gICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e2Zvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgIHN1Ym1pdEZhaWxlZD17c3VibWl0RmFpbGVkfVxuICAgICAgICAgICAgICBzZXRUb3VjaGVkPXtzZXRUb3VjaGVkfVxuICAgICAgICAgICAgICBzdWJtaXRTdWNjZXNzPXtzdWJtaXRTdWNjZXNzfVxuICAgICAgICAgICAgICB1cGRhdGVGb3JtPXt1cGRhdGVGb3JtfVxuICAgICAgICAgICAgICB0b3VjaGVkPXt0b3VjaGVkfVxuICAgICAgICAgICAgICBjaGVja0NvbmRpdGlvbmFsTG9naWM9e2NoZWNrQ29uZGl0aW9uYWxMb2dpY31cbiAgICAgICAgICAgICAgc3R5bGVkQ29tcG9uZW50cz17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSxcbiAgICAgICAgKX1cbiAgICAgIHtlbmFibGVIb25leXBvdCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZCBnZm9ybV92YWxpZGF0aW9uX2NvbnRhaW5lclwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgaW5wdXRfJHttYXhJRH1gfSBjbGFzc05hbWU9XCJnZi1sYWJlbCBcIj5cbiAgICAgICAgICAgIHtob25leXBvdExhYmVsfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHttYXhJRH1gfVxuICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke21heElEfWB9XG4gICAgICAgICAgICB2YWx1ZT17aG9uZXlwb3RWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEhvbmV5cG90VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19