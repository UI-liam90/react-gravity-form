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

var fieldTypes = ['checkbox', 'email', 'hidden', 'html', 'number', 'phone', 'radio', 'select', 'multiselect', 'text', 'textarea', 'website', 'page', 'date'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGRzLmpzeCJdLCJuYW1lcyI6WyJkaXZpZGVGaWVsZHNJbnRvUGFnZXMiLCJmaWVsZHMiLCJwYWdlcyIsInRtcEZpZWxkcyIsIm1hcCIsIml0ZW0iLCJpIiwibGVuZ3RoIiwiYXJyIiwicGFnZU51bWJlciIsInR5cGUiLCJwdXNoIiwiZ2V0TWF4RmllbGRJZCIsIm1heCIsInBhcnNlSW50IiwiaWQiLCJmaWVsZFR5cGVzIiwiaG9uZXlQb3RMYWJsZXMiLCJob25leXBvdExhYmVsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHJvcHMiLCJmb3JtVmFsdWVzIiwidXBkYXRlRm9ybSIsInN1Ym1pdEZhaWxlZCIsInN1Ym1pdFN1Y2Nlc3MiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInBhZ2luYXRpb24iLCJhY3RpdmVQYWdlIiwicHJldlN0ZXAiLCJuZXh0U3RlcCIsImlzTmV4dERpc2FibGVkIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwic2F2ZVN0YXRlVG9IdG1sRmllbGQiLCJlbmFibGVIb25leXBvdCIsInN0eWxlZENvbXBvbmVudHMiLCJkaXZpZGVkRmllbGRzIiwidW5kZWZpbmVkIiwibWF4SUQiLCJob25leXBvdFZhbHVlIiwic2V0SG9uZXlwb3RWYWx1ZSIsInBhZ2UiLCJpbmRleCIsImZpZWxkIiwiaW5jbHVkZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLE1BQUQsRUFBU0MsS0FBVCxFQUFtQjtBQUMvQyxNQUFNQyxTQUFTLEdBQUdELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSxXQUFVLEVBQVY7QUFBQSxHQUFWLENBQWxCOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FB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VmxCLE1BRko7QUFBQSxHQURGLENBL0JOLEVBZ0RHRCxjQUFjLElBQ2I7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0U7QUFBTyxJQUFBLE9BQU8sa0JBQVdJLEtBQVgsQ0FBZDtBQUFrQyxJQUFBLFNBQVMsRUFBQztBQUE1QyxLQUNHdEIsYUFESCxDQURGLEVBSUU7QUFDRSxJQUFBLElBQUksRUFBQyxNQURQO0FBRUUsSUFBQSxJQUFJLGtCQUFXc0IsS0FBWCxDQUZOO0FBR0UsSUFBQSxFQUFFLGtCQUFXQSxLQUFYLENBSEo7QUFJRSxJQUFBLEtBQUssRUFBRUMsYUFKVDtBQUtFLElBQUEsUUFBUSxFQUFFLGtCQUFDTSxDQUFEO0FBQUEsYUFBT0wsZ0JBQWdCLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXZCO0FBQUEsS0FMWjtBQU1FLElBQUEsWUFBWSxFQUFDO0FBTmYsSUFKRixDQWpESixDQURGO0FBa0VELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVuZGVyRmllbGQgZnJvbSAnLi9SZW5kZXJGaWVsZCc7XG5cbmNvbnN0IGRpdmlkZUZpZWxkc0ludG9QYWdlcyA9IChmaWVsZHMsIHBhZ2VzKSA9PiB7XG4gIGNvbnN0IHRtcEZpZWxkcyA9IHBhZ2VzLm1hcCgoaXRlbSkgPT4gW10pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYXJyID0gdG1wRmllbGRzW2ZpZWxkc1tpXS5wYWdlTnVtYmVyXTtcbiAgICBpZiAodG1wRmllbGRzW2ZpZWxkc1tpXS5wYWdlTnVtYmVyIC0gMV0pIHtcbiAgICAgIC8vIG1vdmUgcGFnZSBmaWVsZCB0byB0aGUgZmlyc3QgZ3JvdXBcbiAgICAgIGlmIChmaWVsZHNbaV0udHlwZSA9PT0gJ3BhZ2UnKSB7XG4gICAgICAgIHRtcEZpZWxkc1tmaWVsZHNbaV0ucGFnZU51bWJlciAtIDJdLnB1c2goZmllbGRzW2ldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRtcEZpZWxkc1tmaWVsZHNbaV0ucGFnZU51bWJlciAtIDFdLnB1c2goZmllbGRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRtcEZpZWxkcztcbn07XG5cbmNvbnN0IGdldE1heEZpZWxkSWQgPSAoZmllbGRzKSA9PiB7XG4gIGxldCBtYXggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwYXJzZUludChmaWVsZHNbaV0uaWQpID4gbWF4KSB7XG4gICAgICBtYXggPSBwYXJzZUludChmaWVsZHNbaV0uaWQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWF4ICsgMTtcbn07XG5cbmNvbnN0IGZpZWxkVHlwZXMgPSBbXG4gICdjaGVja2JveCcsXG4gICdlbWFpbCcsXG4gICdoaWRkZW4nLFxuICAnaHRtbCcsXG4gICdudW1iZXInLFxuICAncGhvbmUnLFxuICAncmFkaW8nLFxuICAnc2VsZWN0JyxcbiAgJ211bHRpc2VsZWN0JyxcbiAgJ3RleHQnLFxuICAndGV4dGFyZWEnLFxuICAnd2Vic2l0ZScsXG4gICdwYWdlJyxcbiAgJ2RhdGUnLFxuXTtcblxuY29uc3QgaG9uZXlQb3RMYWJsZXMgPSBbJ05hbWUnLCAnRW1haWwnLCAnUGhvbmUnLCAnQ29tbWVudHMnXTtcbmNvbnN0IGhvbmV5cG90TGFiZWwgPSBob25leVBvdExhYmxlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDQpKV07XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgZmllbGRzLFxuICAgIGZvcm1WYWx1ZXMsXG4gICAgdXBkYXRlRm9ybSxcbiAgICBzdWJtaXRGYWlsZWQsXG4gICAgc3VibWl0U3VjY2VzcyxcbiAgICB0b3VjaGVkLFxuICAgIHNldFRvdWNoZWQsXG4gICAgcGFnaW5hdGlvbixcbiAgICBhY3RpdmVQYWdlLFxuICAgIHByZXZTdGVwLFxuICAgIG5leHRTdGVwLFxuICAgIGlzTmV4dERpc2FibGVkLFxuICAgIGNoZWNrQ29uZGl0aW9uYWxMb2dpYyxcbiAgICBzYXZlU3RhdGVUb0h0bWxGaWVsZCxcbiAgICBlbmFibGVIb25leXBvdCxcbiAgICBzdHlsZWRDb21wb25lbnRzLFxuICB9ID0gcHJvcHM7XG5cbiAgLy8gZ2V0IHBhZ2UgaW5kZXhlc1xuICBjb25zdCBkaXZpZGVkRmllbGRzID0gcGFnaW5hdGlvbiA/IGRpdmlkZUZpZWxkc0ludG9QYWdlcyhmaWVsZHMsIHBhZ2luYXRpb24ucGFnZXMpIDogdW5kZWZpbmVkO1xuICBjb25zdCBtYXhJRCA9IGdldE1heEZpZWxkSWQoZmllbGRzKTtcbiAgY29uc3QgW2hvbmV5cG90VmFsdWUsIHNldEhvbmV5cG90VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZHNcIj5cbiAgICAgIHtwYWdpbmF0aW9uICYmIHBhZ2luYXRpb24ucGFnZXMubGVuZ3RoID4gMVxuICAgICAgICA/IHBhZ2luYXRpb24ucGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwYWdlJHthY3RpdmVQYWdlID09PSBpbmRleCArIDEgPyAnIGFjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgICBrZXk9e2BwYWdlLSR7aW5kZXh9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2RpdmlkZWRGaWVsZHNbaW5kZXhdLm1hcChcbiAgICAgICAgICAgICAgICAoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgICBmaWVsZFR5cGVzLmluY2x1ZGVzKGZpZWxkLnR5cGUpICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFJlbmRlckZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtmaWVsZC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZD17ZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgZm9ybVZhbHVlcz17Zm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRGYWlsZWQ9e3N1Ym1pdEZhaWxlZH1cbiAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkPXtzZXRUb3VjaGVkfVxuICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M9e3N1Ym1pdFN1Y2Nlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybT17dXBkYXRlRm9ybX1cbiAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVkPXt0b3VjaGVkfVxuICAgICAgICAgICAgICAgICAgICAgIHBhZ2VzPXtwYWdpbmF0aW9uLnBhZ2VzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICBwcmV2U3RlcD17cHJldlN0ZXB9XG4gICAgICAgICAgICAgICAgICAgICAgbmV4dFN0ZXA9e25leHRTdGVwfVxuICAgICAgICAgICAgICAgICAgICAgIGlzTmV4dERpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICBjaGVja0NvbmRpdGlvbmFsTG9naWM9e2NoZWNrQ29uZGl0aW9uYWxMb2dpY31cbiAgICAgICAgICAgICAgICAgICAgICBzYXZlU3RhdGVUb0h0bWxGaWVsZD17c2F2ZVN0YXRlVG9IdG1sRmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGVkQ29tcG9uZW50cz17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpXG4gICAgICAgIDogZmllbGRzLm1hcChcbiAgICAgICAgICAgIChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgZmllbGRUeXBlcy5pbmNsdWRlcyhmaWVsZC50eXBlKSAmJiAoXG4gICAgICAgICAgICAgICAgPFJlbmRlckZpZWxkXG4gICAgICAgICAgICAgICAga2V5PXtmaWVsZC5pZH1cbiAgICAgICAgICAgICAgICBmaWVsZD17ZmllbGR9XG4gICAgICAgICAgICAgICAgZm9ybVZhbHVlcz17Zm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgICBzdWJtaXRGYWlsZWQ9e3N1Ym1pdEZhaWxlZH1cbiAgICAgICAgICAgICAgICBzZXRUb3VjaGVkPXtzZXRUb3VjaGVkfVxuICAgICAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M9e3N1Ym1pdFN1Y2Nlc3N9XG4gICAgICAgICAgICAgICAgdXBkYXRlRm9ybT17dXBkYXRlRm9ybX1cbiAgICAgICAgICAgICAgICB0b3VjaGVkPXt0b3VjaGVkfVxuICAgICAgICAgICAgICAgIGNoZWNrQ29uZGl0aW9uYWxMb2dpYz17Y2hlY2tDb25kaXRpb25hbExvZ2ljfVxuICAgICAgICAgICAgICAgIHN0eWxlZENvbXBvbmVudHM9e3N0eWxlZENvbXBvbmVudHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICB7ZW5hYmxlSG9uZXlwb3QgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGQgZ2Zvcm1fdmFsaWRhdGlvbl9jb250YWluZXJcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGlucHV0XyR7bWF4SUR9YH0gY2xhc3NOYW1lPVwiZ2YtbGFiZWwgXCI+XG4gICAgICAgICAgICB7aG9uZXlwb3RMYWJlbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT17YGlucHV0XyR7bWF4SUR9YH1cbiAgICAgICAgICAgIGlkPXtgaW5wdXRfJHttYXhJRH1gfVxuICAgICAgICAgICAgdmFsdWU9e2hvbmV5cG90VmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEhvbmV5cG90VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19