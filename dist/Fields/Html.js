"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-next-line
var _default = function _default(_ref) {
  var field = _ref.field,
      saveStateToHtmlField = _ref.saveStateToHtmlField,
      hideField = _ref.hideField,
      styledComponents = _ref.styledComponents;
  var content = field.content,
      cssClass = field.cssClass,
      width = field.width; // only for UAF project
  // you can remove it
  // here I collect valus based on GF field class and save it to the HTML field

  if (saveStateToHtmlField) {
    var states = saveStateToHtmlField.saveStateToHtmlField,
        formValues = saveStateToHtmlField.formValues;
    var classes = Object.keys(states);
    var values = [];

    if (classes) {
      for (var id in formValues) {
        var _field = formValues[id];
        var value = "";

        for (var y = 0; y < classes.length; y++) {
          if (_field.cssClass.indexOf(classes[y]) !== -1 && !_field.valid) {
            values[states[classes[y]]] = _field.value;
          }
        }
      }
    }

    if (values) {
      var replacedValues = Object.keys(values);

      for (var i = 0; i < replacedValues.length; i++) {
        if (replacedValues[i] === "%price%") {
          values[replacedValues[i]] = "\u20AC".concat(values[replacedValues[i]]);
        }

        content = content.replace(replacedValues[i], values[replacedValues[i]]);
      }
    }
  }

  var _ref2 = styledComponents || false,
      _ref2$Box = _ref2.Box,
      Box = _ref2$Box === void 0 ? "div" : _ref2$Box;

  return (// eslint-disable-next-line
    _react["default"].createElement(Box, {
      width: width,
      className: "form-field ".concat(cssClass),
      style: {
        display: hideField ? "none" : undefined
      }
    }, _react["default"].createElement("div", {
      className: "html-content",
      dangerouslySetInnerHTML: {
        __html: content
      }
    }))
  );
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvSHRtbC5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJzYXZlU3RhdGVUb0h0bWxGaWVsZCIsImhpZGVGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJjb250ZW50IiwiY3NzQ2xhc3MiLCJ3aWR0aCIsInN0YXRlcyIsImZvcm1WYWx1ZXMiLCJjbGFzc2VzIiwiT2JqZWN0Iiwia2V5cyIsInZhbHVlcyIsImlkIiwidmFsdWUiLCJ5IiwibGVuZ3RoIiwiaW5kZXhPZiIsInZhbGlkIiwicmVwbGFjZWRWYWx1ZXMiLCJpIiwicmVwbGFjZSIsIkJveCIsImRpc3BsYXkiLCJ1bmRlZmluZWQiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBO2VBQ2Usd0JBS1Q7QUFBQSxNQUpMQSxLQUlLLFFBSkxBLEtBSUs7QUFBQSxNQUhMQyxvQkFHSyxRQUhMQSxvQkFHSztBQUFBLE1BRkxDLFNBRUssUUFGTEEsU0FFSztBQUFBLE1BRExDLGdCQUNLLFFBRExBLGdCQUNLO0FBQUEsTUFDQ0MsT0FERCxHQUM4QkosS0FEOUIsQ0FDQ0ksT0FERDtBQUFBLE1BQ1VDLFFBRFYsR0FDOEJMLEtBRDlCLENBQ1VLLFFBRFY7QUFBQSxNQUNvQkMsS0FEcEIsR0FDOEJOLEtBRDlCLENBQ29CTSxLQURwQixFQUdMO0FBQ0E7QUFDQTs7QUFDQSxNQUFJTCxvQkFBSixFQUEwQjtBQUFBLFFBQ0tNLE1BREwsR0FDNEJOLG9CQUQ1QixDQUNqQkEsb0JBRGlCO0FBQUEsUUFDYU8sVUFEYixHQUM0QlAsb0JBRDVCLENBQ2FPLFVBRGI7QUFFekIsUUFBTUMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUosTUFBWixDQUFoQjtBQUNBLFFBQU1LLE1BQU0sR0FBRyxFQUFmOztBQUNBLFFBQUlILE9BQUosRUFBYTtBQUNaLFdBQUssSUFBTUksRUFBWCxJQUFpQkwsVUFBakIsRUFBNkI7QUFDNUIsWUFBTVIsTUFBSyxHQUFHUSxVQUFVLENBQUNLLEVBQUQsQ0FBeEI7QUFDQSxZQUFNQyxLQUFLLEdBQUcsRUFBZDs7QUFDQSxhQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdOLE9BQU8sQ0FBQ08sTUFBNUIsRUFBb0NELENBQUMsRUFBckMsRUFBeUM7QUFDeEMsY0FBSWYsTUFBSyxDQUFDSyxRQUFOLENBQWVZLE9BQWYsQ0FBdUJSLE9BQU8sQ0FBQ00sQ0FBRCxDQUE5QixNQUF1QyxDQUFDLENBQXhDLElBQTZDLENBQUNmLE1BQUssQ0FBQ2tCLEtBQXhELEVBQStEO0FBQzlETixZQUFBQSxNQUFNLENBQUNMLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDTSxDQUFELENBQVIsQ0FBUCxDQUFOLEdBQTZCZixNQUFLLENBQUNjLEtBQW5DO0FBQ0E7QUFDRDtBQUNEO0FBQ0Q7O0FBQ0QsUUFBSUYsTUFBSixFQUFZO0FBQ1gsVUFBTU8sY0FBYyxHQUFHVCxNQUFNLENBQUNDLElBQVAsQ0FBWUMsTUFBWixDQUF2Qjs7QUFDQSxXQUFLLElBQUlRLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELGNBQWMsQ0FBQ0gsTUFBbkMsRUFBMkNJLENBQUMsRUFBNUMsRUFBZ0Q7QUFDL0MsWUFBSUQsY0FBYyxDQUFDQyxDQUFELENBQWQsS0FBc0IsU0FBMUIsRUFBcUM7QUFDcENSLFVBQUFBLE1BQU0sQ0FBQ08sY0FBYyxDQUFDQyxDQUFELENBQWYsQ0FBTixtQkFBZ0NSLE1BQU0sQ0FBQ08sY0FBYyxDQUFDQyxDQUFELENBQWYsQ0FBdEM7QUFDQTs7QUFDRGhCLFFBQUFBLE9BQU8sR0FBR0EsT0FBTyxDQUFDaUIsT0FBUixDQUFnQkYsY0FBYyxDQUFDQyxDQUFELENBQTlCLEVBQW1DUixNQUFNLENBQUNPLGNBQWMsQ0FBQ0MsQ0FBRCxDQUFmLENBQXpDLENBQVY7QUFDQTtBQUNEO0FBQ0Q7O0FBOUJJLGNBZ0NtQmpCLGdCQUFnQixJQUFJLEtBaEN2QztBQUFBLHdCQWdDR21CLEdBaENIO0FBQUEsTUFnQ0dBLEdBaENILDBCQWdDUyxLQWhDVDs7QUFrQ0wsU0FDQztBQUNBLG9DQUFDLEdBQUQ7QUFDQyxNQUFBLEtBQUssRUFBRWhCLEtBRFI7QUFFQyxNQUFBLFNBQVMsdUJBQWdCRCxRQUFoQixDQUZWO0FBR0MsTUFBQSxLQUFLLEVBQUU7QUFBRWtCLFFBQUFBLE9BQU8sRUFBRXJCLFNBQVMsR0FBRyxNQUFILEdBQVlzQjtBQUFoQztBQUhSLE9BS0M7QUFDQyxNQUFBLFNBQVMsRUFBQyxjQURYO0FBRUMsTUFBQSx1QkFBdUIsRUFBRTtBQUFFQyxRQUFBQSxNQUFNLEVBQUVyQjtBQUFWO0FBRjFCLE1BTEQ7QUFGRDtBQWFBLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuZXhwb3J0IGRlZmF1bHQgKHtcblx0ZmllbGQsXG5cdHNhdmVTdGF0ZVRvSHRtbEZpZWxkLFxuXHRoaWRlRmllbGQsXG5cdHN0eWxlZENvbXBvbmVudHNcbn0pID0+IHtcblx0bGV0IHsgY29udGVudCwgY3NzQ2xhc3MsIHdpZHRoIH0gPSBmaWVsZDtcblxuXHQvLyBvbmx5IGZvciBVQUYgcHJvamVjdFxuXHQvLyB5b3UgY2FuIHJlbW92ZSBpdFxuXHQvLyBoZXJlIEkgY29sbGVjdCB2YWx1cyBiYXNlZCBvbiBHRiBmaWVsZCBjbGFzcyBhbmQgc2F2ZSBpdCB0byB0aGUgSFRNTCBmaWVsZFxuXHRpZiAoc2F2ZVN0YXRlVG9IdG1sRmllbGQpIHtcblx0XHRjb25zdCB7IHNhdmVTdGF0ZVRvSHRtbEZpZWxkOiBzdGF0ZXMsIGZvcm1WYWx1ZXMgfSA9IHNhdmVTdGF0ZVRvSHRtbEZpZWxkO1xuXHRcdGNvbnN0IGNsYXNzZXMgPSBPYmplY3Qua2V5cyhzdGF0ZXMpO1xuXHRcdGNvbnN0IHZhbHVlcyA9IFtdO1xuXHRcdGlmIChjbGFzc2VzKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGlkIGluIGZvcm1WYWx1ZXMpIHtcblx0XHRcdFx0Y29uc3QgZmllbGQgPSBmb3JtVmFsdWVzW2lkXTtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBcIlwiO1xuXHRcdFx0XHRmb3IgKGxldCB5ID0gMDsgeSA8IGNsYXNzZXMubGVuZ3RoOyB5KyspIHtcblx0XHRcdFx0XHRpZiAoZmllbGQuY3NzQ2xhc3MuaW5kZXhPZihjbGFzc2VzW3ldKSAhPT0gLTEgJiYgIWZpZWxkLnZhbGlkKSB7XG5cdFx0XHRcdFx0XHR2YWx1ZXNbc3RhdGVzW2NsYXNzZXNbeV1dXSA9IGZpZWxkLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodmFsdWVzKSB7XG5cdFx0XHRjb25zdCByZXBsYWNlZFZhbHVlcyA9IE9iamVjdC5rZXlzKHZhbHVlcyk7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJlcGxhY2VkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChyZXBsYWNlZFZhbHVlc1tpXSA9PT0gXCIlcHJpY2UlXCIpIHtcblx0XHRcdFx0XHR2YWx1ZXNbcmVwbGFjZWRWYWx1ZXNbaV1dID0gYOKCrCR7dmFsdWVzW3JlcGxhY2VkVmFsdWVzW2ldXX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UocmVwbGFjZWRWYWx1ZXNbaV0sIHZhbHVlc1tyZXBsYWNlZFZhbHVlc1tpXV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IHsgQm94ID0gXCJkaXZcIiB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuXHRyZXR1cm4gKFxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXHRcdDxCb3hcblx0XHRcdHdpZHRoPXt3aWR0aH1cblx0XHRcdGNsYXNzTmFtZT17YGZvcm0tZmllbGQgJHtjc3NDbGFzc31gfVxuXHRcdFx0c3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gXCJub25lXCIgOiB1bmRlZmluZWQgfX1cblx0XHQ+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cImh0bWwtY29udGVudFwiXG5cdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29udGVudCB9fVxuXHRcdFx0Lz5cblx0XHQ8L0JveD5cblx0KTtcbn07XG4iXX0=