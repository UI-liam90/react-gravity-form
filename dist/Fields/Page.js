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
    mr: 10,
    onClick: function onClick(e) {
      return prevStep(e);
    }
  }, previousButton.text), pageNumber <= pages && _react["default"].createElement(Button, {
    onClick: function onClick(e) {
      return nextStep(e);
    },
    color: "pink",
    p: "7px 20px",
    mt: 20,
    disabled: isNextDisabled
  }, nextButton.text));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUGFnZS5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJwYWdlcyIsIm5leHRTdGVwIiwicHJldlN0ZXAiLCJpc05leHREaXNhYmxlZCIsInN0eWxlZENvbXBvbmVudHMiLCJpZCIsInR5cGUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiaXNSZXF1aXJlZCIsIm1heExlbmd0aCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsImNzc0NsYXNzIiwid2lkdGgiLCJuZXh0QnV0dG9uIiwicHJldmlvdXNCdXR0b24iLCJwYWdlTnVtYmVyIiwiQm94IiwiQnV0dG9uIiwiZSIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUVlLHdCQUVUO0FBQUEsTUFESkEsS0FDSSxRQURKQSxLQUNJO0FBQUEsTUFER0MsS0FDSCxRQURHQSxLQUNIO0FBQUEsTUFEVUMsUUFDVixRQURVQSxRQUNWO0FBQUEsTUFEb0JDLFFBQ3BCLFFBRG9CQSxRQUNwQjtBQUFBLE1BRDhCQyxjQUM5QixRQUQ4QkEsY0FDOUI7QUFBQSxNQUQ4Q0MsZ0JBQzlDLFFBRDhDQSxnQkFDOUM7QUFBQSxNQUVGQyxFQUZFLEdBZ0JBTixLQWhCQSxDQUVGTSxFQUZFO0FBQUEsTUFHRkMsSUFIRSxHQWdCQVAsS0FoQkEsQ0FHRk8sSUFIRTtBQUFBLE1BSUZDLEtBSkUsR0FnQkFSLEtBaEJBLENBSUZRLEtBSkU7QUFBQSxNQUtGQyxXQUxFLEdBZ0JBVCxLQWhCQSxDQUtGUyxXQUxFO0FBQUEsTUFNRkMsVUFORSxHQWdCQVYsS0FoQkEsQ0FNRlUsVUFORTtBQUFBLE1BT0ZDLFNBUEUsR0FnQkFYLEtBaEJBLENBT0ZXLFNBUEU7QUFBQSxNQVFGQyxXQVJFLEdBZ0JBWixLQWhCQSxDQVFGWSxXQVJFO0FBQUEsTUFTRkMsb0JBVEUsR0FnQkFiLEtBaEJBLENBU0ZhLG9CQVRFO0FBQUEsTUFVRkMsY0FWRSxHQWdCQWQsS0FoQkEsQ0FVRmMsY0FWRTtBQUFBLE1BV0ZDLFFBWEUsR0FnQkFmLEtBaEJBLENBV0ZlLFFBWEU7QUFBQSxNQVlGQyxLQVpFLEdBZ0JBaEIsS0FoQkEsQ0FZRmdCLEtBWkU7QUFBQSxNQWFGQyxVQWJFLEdBZ0JBakIsS0FoQkEsQ0FhRmlCLFVBYkU7QUFBQSxNQWNGQyxjQWRFLEdBZ0JBbEIsS0FoQkEsQ0FjRmtCLGNBZEU7QUFBQSxNQWVGQyxVQWZFLEdBZ0JBbkIsS0FoQkEsQ0FlRm1CLFVBZkU7O0FBQUEsY0FrQnVDZCxnQkFBZ0IsSUFBSSxLQWxCM0Q7QUFBQSx3QkFrQkllLEdBbEJKO0FBQUEsTUFrQklBLEdBbEJKLDBCQWtCVSxLQWxCVjtBQUFBLDJCQWtCaUJDLE1BbEJqQjtBQUFBLE1Ba0JpQkEsTUFsQmpCLDZCQWtCMEIsUUFsQjFCOztBQW9CSixTQUNFLGdDQUFDLEdBQUQ7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0dGLFVBQVUsR0FBRyxDQUFiLEdBQWlCLENBQWpCLElBQ0MsZ0NBQUMsTUFBRDtBQUFRLElBQUEsRUFBRSxFQUFFLEVBQVo7QUFBZ0IsSUFBQSxPQUFPLEVBQUUsaUJBQUFHLENBQUM7QUFBQSxhQUFJbkIsUUFBUSxDQUFDbUIsQ0FBRCxDQUFaO0FBQUE7QUFBMUIsS0FDR0osY0FBYyxDQUFDSyxJQURsQixDQUZKLEVBTUdKLFVBQVUsSUFBSWxCLEtBQWQsSUFDQyxnQ0FBQyxNQUFEO0FBQ0UsSUFBQSxPQUFPLEVBQUUsaUJBQUFxQixDQUFDO0FBQUEsYUFBSXBCLFFBQVEsQ0FBQ29CLENBQUQsQ0FBWjtBQUFBLEtBRFo7QUFFRSxJQUFBLEtBQUssRUFBQyxNQUZSO0FBR0UsSUFBQSxDQUFDLEVBQUMsVUFISjtBQUlFLElBQUEsRUFBRSxFQUFFLEVBSk47QUFLRSxJQUFBLFFBQVEsRUFBRWxCO0FBTFosS0FPR2EsVUFBVSxDQUFDTSxJQVBkLENBUEosQ0FERjtBQW9CRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsIHBhZ2VzLCBuZXh0U3RlcCwgcHJldlN0ZXAsIGlzTmV4dERpc2FibGVkLCBzdHlsZWRDb21wb25lbnRzLFxufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgdHlwZSxcbiAgICBsYWJlbCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBpc1JlcXVpcmVkLFxuICAgIG1heExlbmd0aCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICBjc3NDbGFzcyxcbiAgICB3aWR0aCxcbiAgICBuZXh0QnV0dG9uLFxuICAgIHByZXZpb3VzQnV0dG9uLFxuICAgIHBhZ2VOdW1iZXIsXG4gIH0gPSBmaWVsZDtcblxuICBjb25zdCB7IEJveCA9ICdkaXYnLCBCdXR0b24gPSAnYnV0dG9uJyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxuICAgICAge3BhZ2VOdW1iZXIgLSAxID4gMSAmJiAoXG4gICAgICAgIDxCdXR0b24gbXI9ezEwfSBvbkNsaWNrPXtlID0+IHByZXZTdGVwKGUpfT5cbiAgICAgICAgICB7cHJldmlvdXNCdXR0b24udGV4dH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgICAge3BhZ2VOdW1iZXIgPD0gcGFnZXMgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17ZSA9PiBuZXh0U3RlcChlKX1cbiAgICAgICAgICBjb2xvcj1cInBpbmtcIlxuICAgICAgICAgIHA9XCI3cHggMjBweFwiXG4gICAgICAgICAgbXQ9ezIwfVxuICAgICAgICAgIGRpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgPlxuICAgICAgICAgIHtuZXh0QnV0dG9uLnRleHR9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXX0=