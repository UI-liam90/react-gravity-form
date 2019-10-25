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
      isNextDisabled = _ref.isNextDisabled;
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
      pageNumber = field.pageNumber,
      styledComponents = field.styledComponents;
  var SButton = styledComponents && styledComponents["Button"] ? styledComponents["Button"] : "button";

  var _ref2 = styledComponents || false,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? "div" : _ref2$Box;

  return _react["default"].createElement(Box, {
    className: "form-field"
  }, pageNumber - 1 > 1 && _react["default"].createElement(SButton, {
    onClick: function onClick(e) {
      return prevStep(e);
    }
  }, previousButton.text), pageNumber <= pages && _react["default"].createElement(SButton, {
    onClick: nextStep,
    color: "pink",
    p: "7px 20px",
    mt: 20,
    disabled: isNextDisabled
  }, nextButton.text));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUGFnZS5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJwYWdlcyIsIm5leHRTdGVwIiwicHJldlN0ZXAiLCJpc05leHREaXNhYmxlZCIsImlkIiwidHlwZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJpc1JlcXVpcmVkIiwibWF4TGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50IiwiY3NzQ2xhc3MiLCJ3aWR0aCIsIm5leHRCdXR0b24iLCJwcmV2aW91c0J1dHRvbiIsInBhZ2VOdW1iZXIiLCJzdHlsZWRDb21wb25lbnRzIiwiU0J1dHRvbiIsIkJveCIsImUiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7ZUFFZSx3QkFBMEQ7QUFBQSxNQUF2REEsS0FBdUQsUUFBdkRBLEtBQXVEO0FBQUEsTUFBaERDLEtBQWdELFFBQWhEQSxLQUFnRDtBQUFBLE1BQXpDQyxRQUF5QyxRQUF6Q0EsUUFBeUM7QUFBQSxNQUEvQkMsUUFBK0IsUUFBL0JBLFFBQStCO0FBQUEsTUFBckJDLGNBQXFCLFFBQXJCQSxjQUFxQjtBQUFBLE1BRXZFQyxFQUZ1RSxHQWlCcEVMLEtBakJvRSxDQUV2RUssRUFGdUU7QUFBQSxNQUd2RUMsSUFIdUUsR0FpQnBFTixLQWpCb0UsQ0FHdkVNLElBSHVFO0FBQUEsTUFJdkVDLEtBSnVFLEdBaUJwRVAsS0FqQm9FLENBSXZFTyxLQUp1RTtBQUFBLE1BS3ZFQyxXQUx1RSxHQWlCcEVSLEtBakJvRSxDQUt2RVEsV0FMdUU7QUFBQSxNQU12RUMsVUFOdUUsR0FpQnBFVCxLQWpCb0UsQ0FNdkVTLFVBTnVFO0FBQUEsTUFPdkVDLFNBUHVFLEdBaUJwRVYsS0FqQm9FLENBT3ZFVSxTQVB1RTtBQUFBLE1BUXZFQyxXQVJ1RSxHQWlCcEVYLEtBakJvRSxDQVF2RVcsV0FSdUU7QUFBQSxNQVN2RUMsb0JBVHVFLEdBaUJwRVosS0FqQm9FLENBU3ZFWSxvQkFUdUU7QUFBQSxNQVV2RUMsY0FWdUUsR0FpQnBFYixLQWpCb0UsQ0FVdkVhLGNBVnVFO0FBQUEsTUFXdkVDLFFBWHVFLEdBaUJwRWQsS0FqQm9FLENBV3ZFYyxRQVh1RTtBQUFBLE1BWXZFQyxLQVp1RSxHQWlCcEVmLEtBakJvRSxDQVl2RWUsS0FadUU7QUFBQSxNQWF2RUMsVUFidUUsR0FpQnBFaEIsS0FqQm9FLENBYXZFZ0IsVUFidUU7QUFBQSxNQWN2RUMsY0FkdUUsR0FpQnBFakIsS0FqQm9FLENBY3ZFaUIsY0FkdUU7QUFBQSxNQWV2RUMsVUFmdUUsR0FpQnBFbEIsS0FqQm9FLENBZXZFa0IsVUFmdUU7QUFBQSxNQWdCdkVDLGdCQWhCdUUsR0FpQnBFbkIsS0FqQm9FLENBZ0J2RW1CLGdCQWhCdUU7QUFtQnhFLE1BQU1DLE9BQU8sR0FDWkQsZ0JBQWdCLElBQUlBLGdCQUFnQixDQUFDLFFBQUQsQ0FBcEMsR0FDR0EsZ0JBQWdCLENBQUMsUUFBRCxDQURuQixHQUVHLFFBSEo7O0FBbkJ3RSxjQXdCaERBLGdCQUFnQixJQUFJLEtBeEI0QjtBQUFBLHdCQXdCaEVFLEdBeEJnRTtBQUFBLE1Bd0JoRUEsR0F4QmdFLDBCQXdCMUQsS0F4QjBEOztBQTBCeEUsU0FDQyxnQ0FBQyxHQUFEO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFSCxVQUFVLEdBQUcsQ0FBYixHQUFpQixDQUFqQixJQUNBLGdDQUFDLE9BQUQ7QUFBUyxJQUFBLE9BQU8sRUFBRSxpQkFBQUksQ0FBQztBQUFBLGFBQUluQixRQUFRLENBQUNtQixDQUFELENBQVo7QUFBQTtBQUFuQixLQUFxQ0wsY0FBYyxDQUFDTSxJQUFwRCxDQUZGLEVBSUVMLFVBQVUsSUFBSWpCLEtBQWQsSUFDQSxnQ0FBQyxPQUFEO0FBQ0MsSUFBQSxPQUFPLEVBQUVDLFFBRFY7QUFFQyxJQUFBLEtBQUssRUFBQyxNQUZQO0FBR0MsSUFBQSxDQUFDLEVBQUMsVUFISDtBQUlDLElBQUEsRUFBRSxFQUFFLEVBSkw7QUFLQyxJQUFBLFFBQVEsRUFBRUU7QUFMWCxLQU9FWSxVQUFVLENBQUNPLElBUGIsQ0FMRixDQUREO0FBa0JBLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGZpZWxkLCBwYWdlcywgbmV4dFN0ZXAsIHByZXZTdGVwLCBpc05leHREaXNhYmxlZCB9KSA9PiB7XG5cdGNvbnN0IHtcblx0XHRpZCxcblx0XHR0eXBlLFxuXHRcdGxhYmVsLFxuXHRcdHBsYWNlaG9sZGVyLFxuXHRcdGlzUmVxdWlyZWQsXG5cdFx0bWF4TGVuZ3RoLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuXHRcdGxhYmVsUGxhY2VtZW50LFxuXHRcdGNzc0NsYXNzLFxuXHRcdHdpZHRoLFxuXHRcdG5leHRCdXR0b24sXG5cdFx0cHJldmlvdXNCdXR0b24sXG5cdFx0cGFnZU51bWJlcixcblx0XHRzdHlsZWRDb21wb25lbnRzXG5cdH0gPSBmaWVsZDtcblxuXHRjb25zdCBTQnV0dG9uID1cblx0XHRzdHlsZWRDb21wb25lbnRzICYmIHN0eWxlZENvbXBvbmVudHNbXCJCdXR0b25cIl1cblx0XHRcdD8gc3R5bGVkQ29tcG9uZW50c1tcIkJ1dHRvblwiXVxuXHRcdFx0OiBcImJ1dHRvblwiO1xuXG5cdGNvbnN0IHsgQm94ID0gXCJkaXZcIiB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuXHRyZXR1cm4gKFxuXHRcdDxCb3ggY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxuXHRcdFx0e3BhZ2VOdW1iZXIgLSAxID4gMSAmJiAoXG5cdFx0XHRcdDxTQnV0dG9uIG9uQ2xpY2s9e2UgPT4gcHJldlN0ZXAoZSl9PntwcmV2aW91c0J1dHRvbi50ZXh0fTwvU0J1dHRvbj5cblx0XHRcdCl9XG5cdFx0XHR7cGFnZU51bWJlciA8PSBwYWdlcyAmJiAoXG5cdFx0XHRcdDxTQnV0dG9uXG5cdFx0XHRcdFx0b25DbGljaz17bmV4dFN0ZXB9XG5cdFx0XHRcdFx0Y29sb3I9XCJwaW5rXCJcblx0XHRcdFx0XHRwPVwiN3B4IDIwcHhcIlxuXHRcdFx0XHRcdG10PXsyMH1cblx0XHRcdFx0XHRkaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7bmV4dEJ1dHRvbi50ZXh0fVxuXHRcdFx0XHQ8L1NCdXR0b24+XG5cdFx0XHQpfVxuXHRcdDwvQm94PlxuXHQpO1xufTtcbiJdfQ==