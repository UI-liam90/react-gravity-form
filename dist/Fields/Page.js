"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _rebass = require("rebass");

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
  var SButton = styledComponents && styledComponents['Button'] ? styledComponents['Button'] : 'button';
  return _react["default"].createElement(_rebass.Box, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUGFnZS5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJwYWdlcyIsIm5leHRTdGVwIiwicHJldlN0ZXAiLCJpc05leHREaXNhYmxlZCIsImlkIiwidHlwZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJpc1JlcXVpcmVkIiwibWF4TGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50IiwiY3NzQ2xhc3MiLCJ3aWR0aCIsIm5leHRCdXR0b24iLCJwcmV2aW91c0J1dHRvbiIsInBhZ2VOdW1iZXIiLCJzdHlsZWRDb21wb25lbnRzIiwiU0J1dHRvbiIsImUiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7ZUFFZSx3QkFBMEQ7QUFBQSxNQUF2REEsS0FBdUQsUUFBdkRBLEtBQXVEO0FBQUEsTUFBaERDLEtBQWdELFFBQWhEQSxLQUFnRDtBQUFBLE1BQXpDQyxRQUF5QyxRQUF6Q0EsUUFBeUM7QUFBQSxNQUEvQkMsUUFBK0IsUUFBL0JBLFFBQStCO0FBQUEsTUFBckJDLGNBQXFCLFFBQXJCQSxjQUFxQjtBQUFBLE1BRXJFQyxFQUZxRSxHQWlCbkVMLEtBakJtRSxDQUVyRUssRUFGcUU7QUFBQSxNQUdyRUMsSUFIcUUsR0FpQm5FTixLQWpCbUUsQ0FHckVNLElBSHFFO0FBQUEsTUFJckVDLEtBSnFFLEdBaUJuRVAsS0FqQm1FLENBSXJFTyxLQUpxRTtBQUFBLE1BS3JFQyxXQUxxRSxHQWlCbkVSLEtBakJtRSxDQUtyRVEsV0FMcUU7QUFBQSxNQU1yRUMsVUFOcUUsR0FpQm5FVCxLQWpCbUUsQ0FNckVTLFVBTnFFO0FBQUEsTUFPckVDLFNBUHFFLEdBaUJuRVYsS0FqQm1FLENBT3JFVSxTQVBxRTtBQUFBLE1BUXJFQyxXQVJxRSxHQWlCbkVYLEtBakJtRSxDQVFyRVcsV0FScUU7QUFBQSxNQVNyRUMsb0JBVHFFLEdBaUJuRVosS0FqQm1FLENBU3JFWSxvQkFUcUU7QUFBQSxNQVVyRUMsY0FWcUUsR0FpQm5FYixLQWpCbUUsQ0FVckVhLGNBVnFFO0FBQUEsTUFXckVDLFFBWHFFLEdBaUJuRWQsS0FqQm1FLENBV3JFYyxRQVhxRTtBQUFBLE1BWXJFQyxLQVpxRSxHQWlCbkVmLEtBakJtRSxDQVlyRWUsS0FacUU7QUFBQSxNQWFyRUMsVUFicUUsR0FpQm5FaEIsS0FqQm1FLENBYXJFZ0IsVUFicUU7QUFBQSxNQWNyRUMsY0FkcUUsR0FpQm5FakIsS0FqQm1FLENBY3JFaUIsY0FkcUU7QUFBQSxNQWVyRUMsVUFmcUUsR0FpQm5FbEIsS0FqQm1FLENBZXJFa0IsVUFmcUU7QUFBQSxNQWdCckVDLGdCQWhCcUUsR0FpQm5FbkIsS0FqQm1FLENBZ0JyRW1CLGdCQWhCcUU7QUFtQnZFLE1BQU1DLE9BQU8sR0FDWEQsZ0JBQWdCLElBQUlBLGdCQUFnQixDQUFDLFFBQUQsQ0FBcEMsR0FBaURBLGdCQUFnQixDQUFDLFFBQUQsQ0FBakUsR0FBOEUsUUFEaEY7QUFHQSxTQUNFLGdDQUFDLFdBQUQ7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0dELFVBQVUsR0FBRyxDQUFiLEdBQWlCLENBQWpCLElBQXNCLGdDQUFDLE9BQUQ7QUFBUyxJQUFBLE9BQU8sRUFBRSxpQkFBQ0csQ0FBRDtBQUFBLGFBQU9sQixRQUFRLENBQUNrQixDQUFELENBQWY7QUFBQTtBQUFsQixLQUF1Q0osY0FBYyxDQUFDSyxJQUF0RCxDQUR6QixFQUVHSixVQUFVLElBQUlqQixLQUFkLElBQ0MsZ0NBQUMsT0FBRDtBQUFTLElBQUEsT0FBTyxFQUFFQyxRQUFsQjtBQUE0QixJQUFBLEtBQUssRUFBQyxNQUFsQztBQUF5QyxJQUFBLENBQUMsRUFBQyxVQUEzQztBQUFzRCxJQUFBLEVBQUUsRUFBRSxFQUExRDtBQUE4RCxJQUFBLFFBQVEsRUFBRUU7QUFBeEUsS0FDR1ksVUFBVSxDQUFDTSxJQURkLENBSEosQ0FERjtBQVVELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAncmViYXNzJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgZmllbGQsIHBhZ2VzLCBuZXh0U3RlcCwgcHJldlN0ZXAsIGlzTmV4dERpc2FibGVkIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIHR5cGUsXG4gICAgbGFiZWwsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBtYXhMZW5ndGgsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgY3NzQ2xhc3MsXG4gICAgd2lkdGgsXG4gICAgbmV4dEJ1dHRvbixcbiAgICBwcmV2aW91c0J1dHRvbixcbiAgICBwYWdlTnVtYmVyLFxuICAgIHN0eWxlZENvbXBvbmVudHMsXG4gIH0gPSBmaWVsZDtcblxuICBjb25zdCBTQnV0dG9uID1cbiAgICBzdHlsZWRDb21wb25lbnRzICYmIHN0eWxlZENvbXBvbmVudHNbJ0J1dHRvbiddID8gc3R5bGVkQ29tcG9uZW50c1snQnV0dG9uJ10gOiAnYnV0dG9uJztcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxuICAgICAge3BhZ2VOdW1iZXIgLSAxID4gMSAmJiA8U0J1dHRvbiBvbkNsaWNrPXsoZSkgPT4gcHJldlN0ZXAoZSl9PntwcmV2aW91c0J1dHRvbi50ZXh0fTwvU0J1dHRvbj59XG4gICAgICB7cGFnZU51bWJlciA8PSBwYWdlcyAmJiAoXG4gICAgICAgIDxTQnV0dG9uIG9uQ2xpY2s9e25leHRTdGVwfSBjb2xvcj1cInBpbmtcIiBwPVwiN3B4IDIwcHhcIiBtdD17MjB9IGRpc2FibGVkPXtpc05leHREaXNhYmxlZH0+XG4gICAgICAgICAge25leHRCdXR0b24udGV4dH1cbiAgICAgICAgPC9TQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXX0=