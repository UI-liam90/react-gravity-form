"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var field = _ref.field,
      pages = _ref.pages,
      nextStep = _ref.nextStep,
      prevStep = _ref.prevStep,
      isNextDisabled = _ref.isNextDisabled,
      styledComponents = _ref.styledComponents;
  var id = field.id,
      type = field.type,
      label = field.label,
      placeholder = field.placeholder,
      isRequired = field.isRequired,
      maxLength = field.maxLength,
      description = field.description,
      descriptionPlacement = field.descriptionPlacement,
      labelPlacement = field.labelPlacement,
      cssClass = field.cssClass,
      width = field.width,
      nextButton = field.nextButton,
      previousButton = field.previousButton,
      pageNumber = field.pageNumber;

  var _ref2 = styledComponents || false,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? 'div' : _ref2$Box,
      _ref2$Button = _ref2.Button,
      Button = _ref2$Button === void 0 ? 'button' : _ref2$Button;

  return _react["default"].createElement(Box, {
    className: "form-field"
  }, pageNumber - 1 > 1 && _react["default"].createElement(Button, {
    className: "prev",
    mr: 10,
    onClick: function onClick(e) {
      return prevStep(e);
    }
  }, previousButton.text), pageNumber <= pages && _react["default"].createElement(Button, {
    className: "next",
    onClick: function onClick(e) {
      return nextStep(e);
    },
    mt: 20,
    disabled: isNextDisabled
  }, nextButton.text));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUGFnZS5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJwYWdlcyIsIm5leHRTdGVwIiwicHJldlN0ZXAiLCJpc05leHREaXNhYmxlZCIsInN0eWxlZENvbXBvbmVudHMiLCJpZCIsInR5cGUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiaXNSZXF1aXJlZCIsIm1heExlbmd0aCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsImNzc0NsYXNzIiwid2lkdGgiLCJuZXh0QnV0dG9uIiwicHJldmlvdXNCdXR0b24iLCJwYWdlTnVtYmVyIiwiQm94IiwiQnV0dG9uIiwiZSIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUVlLHdCQUE0RTtBQUFBLE1BQXpFQSxLQUF5RSxRQUF6RUEsS0FBeUU7QUFBQSxNQUFsRUMsS0FBa0UsUUFBbEVBLEtBQWtFO0FBQUEsTUFBM0RDLFFBQTJELFFBQTNEQSxRQUEyRDtBQUFBLE1BQWpEQyxRQUFpRCxRQUFqREEsUUFBaUQ7QUFBQSxNQUF2Q0MsY0FBdUMsUUFBdkNBLGNBQXVDO0FBQUEsTUFBdkJDLGdCQUF1QixRQUF2QkEsZ0JBQXVCO0FBQUEsTUFFdkZDLEVBRnVGLEdBZ0JyRk4sS0FoQnFGLENBRXZGTSxFQUZ1RjtBQUFBLE1BR3ZGQyxJQUh1RixHQWdCckZQLEtBaEJxRixDQUd2Rk8sSUFIdUY7QUFBQSxNQUl2RkMsS0FKdUYsR0FnQnJGUixLQWhCcUYsQ0FJdkZRLEtBSnVGO0FBQUEsTUFLdkZDLFdBTHVGLEdBZ0JyRlQsS0FoQnFGLENBS3ZGUyxXQUx1RjtBQUFBLE1BTXZGQyxVQU51RixHQWdCckZWLEtBaEJxRixDQU12RlUsVUFOdUY7QUFBQSxNQU92RkMsU0FQdUYsR0FnQnJGWCxLQWhCcUYsQ0FPdkZXLFNBUHVGO0FBQUEsTUFRdkZDLFdBUnVGLEdBZ0JyRlosS0FoQnFGLENBUXZGWSxXQVJ1RjtBQUFBLE1BU3ZGQyxvQkFUdUYsR0FnQnJGYixLQWhCcUYsQ0FTdkZhLG9CQVR1RjtBQUFBLE1BVXZGQyxjQVZ1RixHQWdCckZkLEtBaEJxRixDQVV2RmMsY0FWdUY7QUFBQSxNQVd2RkMsUUFYdUYsR0FnQnJGZixLQWhCcUYsQ0FXdkZlLFFBWHVGO0FBQUEsTUFZdkZDLEtBWnVGLEdBZ0JyRmhCLEtBaEJxRixDQVl2RmdCLEtBWnVGO0FBQUEsTUFhdkZDLFVBYnVGLEdBZ0JyRmpCLEtBaEJxRixDQWF2RmlCLFVBYnVGO0FBQUEsTUFjdkZDLGNBZHVGLEdBZ0JyRmxCLEtBaEJxRixDQWN2RmtCLGNBZHVGO0FBQUEsTUFldkZDLFVBZnVGLEdBZ0JyRm5CLEtBaEJxRixDQWV2Rm1CLFVBZnVGOztBQUFBLGNBa0I5Q2QsZ0JBQWdCLElBQUksS0FsQjBCO0FBQUEsd0JBa0JqRmUsR0FsQmlGO0FBQUEsTUFrQmpGQSxHQWxCaUYsMEJBa0IzRSxLQWxCMkU7QUFBQSwyQkFrQnBFQyxNQWxCb0U7QUFBQSxNQWtCcEVBLE1BbEJvRSw2QkFrQjNELFFBbEIyRDs7QUFvQnpGLFNBQ0UsZ0NBQUMsR0FBRDtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDR0YsVUFBVSxHQUFHLENBQWIsR0FBaUIsQ0FBakIsSUFDQyxnQ0FBQyxNQUFEO0FBQVEsSUFBQSxTQUFTLEVBQUMsTUFBbEI7QUFBeUIsSUFBQSxFQUFFLEVBQUUsRUFBN0I7QUFBaUMsSUFBQSxPQUFPLEVBQUUsaUJBQUFHLENBQUM7QUFBQSxhQUFJbkIsUUFBUSxDQUFDbUIsQ0FBRCxDQUFaO0FBQUE7QUFBM0MsS0FDR0osY0FBYyxDQUFDSyxJQURsQixDQUZKLEVBTUdKLFVBQVUsSUFBSWxCLEtBQWQsSUFDQyxnQ0FBQyxNQUFEO0FBQVEsSUFBQSxTQUFTLEVBQUMsTUFBbEI7QUFBeUIsSUFBQSxPQUFPLEVBQUUsaUJBQUFxQixDQUFDO0FBQUEsYUFBSXBCLFFBQVEsQ0FBQ29CLENBQUQsQ0FBWjtBQUFBLEtBQW5DO0FBQW9ELElBQUEsRUFBRSxFQUFFLEVBQXhEO0FBQTRELElBQUEsUUFBUSxFQUFFbEI7QUFBdEUsS0FDR2EsVUFBVSxDQUFDTSxJQURkLENBUEosQ0FERjtBQWNELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBmaWVsZCwgcGFnZXMsIG5leHRTdGVwLCBwcmV2U3RlcCwgaXNOZXh0RGlzYWJsZWQsIHN0eWxlZENvbXBvbmVudHMgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBpc1JlcXVpcmVkLFxuICAgIG1heExlbmd0aCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICBjc3NDbGFzcyxcbiAgICB3aWR0aCxcbiAgICBuZXh0QnV0dG9uLFxuICAgIHByZXZpb3VzQnV0dG9uLFxuICAgIHBhZ2VOdW1iZXIsXG4gIH0gPSBmaWVsZDtcblxuICBjb25zdCB7IEJveCA9ICdkaXYnLCBCdXR0b24gPSAnYnV0dG9uJyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxuICAgICAge3BhZ2VOdW1iZXIgLSAxID4gMSAmJiAoXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwicHJldlwiIG1yPXsxMH0gb25DbGljaz17ZSA9PiBwcmV2U3RlcChlKX0+XG4gICAgICAgICAge3ByZXZpb3VzQnV0dG9uLnRleHR9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICAgIHtwYWdlTnVtYmVyIDw9IHBhZ2VzICYmIChcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJuZXh0XCIgb25DbGljaz17ZSA9PiBuZXh0U3RlcChlKX0gbXQ9ezIwfSBkaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9PlxuICAgICAgICAgIHtuZXh0QnV0dG9uLnRleHR9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXX0=