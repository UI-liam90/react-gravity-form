"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _rebass = require("rebass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = function _default(_ref) {
  var field = _ref.field,
      value = _ref.value,
      validationMessage = _ref.validationMessage,
      touched = _ref.touched,
      setTouched = _ref.setTouched,
      hideField = _ref.hideField,
      updateForm = _ref.updateForm,
      props = _objectWithoutProperties(_ref, ["field", "value", "validationMessage", "touched", "setTouched", "hideField", "updateForm"]);

  var id = field.id,
      type = field.type,
      label = field.label,
      cssClass = field.cssClass,
      isRequired = field.isRequired,
      choices = field.choices,
      placeholder = field.placeholder,
      description = field.description,
      descriptionPlacement = field.descriptionPlacement,
      labelPlacement = field.labelPlacement,
      width = field.width,
      customName = field.customName; // Map options

  var options = choices.map(function (choice) {
    return {
      value: choice.value,
      label: choice.text
    };
  }); // Handle State

  var _useState = (0, _react.useState)(value || ''),
      _useState2 = _slicedToArray(_useState, 2),
      selectedOption = _useState2[0],
      selectOption = _useState2[1]; // Handle change


  var handleChange = function handleChange(option) {
    selectOption(option);
    var event = {
      target: {
        value: option
      }
    };
    updateForm(event, field);
  }; // Handle Blur


  var handleBlur = function handleBlur() {
    var event = {
      target: {
        value: selectedOption
      }
    };
    updateForm(event, field);
    setTouched(id);
  };

  var customStyles = {
    control: function control(provided, state) {
      return _objectSpread({}, provided, {
        height: 50,
        borderWidth: '2px',
        borderColor: '#DBDBDB'
      });
    }
  };
  return _react["default"].createElement(_rebass.Box, {
    width: width,
    className: validationMessage && touched ? "form-field error ".concat(cssClass) : "form-field ".concat(cssClass),
    style: {
      display: hideField ? 'none' : undefined
    }
  }, _react["default"].createElement("div", {
    className: type
  }, _react["default"].createElement("label", {
    htmlFor: "input_".concat(id),
    className: "gf-label ".concat(labelPlacement)
  }, label, isRequired ? _react["default"].createElement("abbr", null, "*") : null), descriptionPlacement === 'above' && description ? description && _react["default"].createElement("div", {
    className: "description"
  }, description) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactSelect["default"], {
    name: customName || "input_".concat(id),
    required: isRequired,
    value: selectedOption,
    onChange: function onChange(option) {
      return handleChange(option, field);
    },
    onBlur: function onBlur() {
      return handleBlur();
    },
    placeholder: placeholder,
    options: options,
    className: "form-select",
    styles: customStyles,
    inputId: "input_".concat(id)
  }), description && _react["default"].createElement("div", {
    className: "description"
  }, description)), validationMessage && touched && _react["default"].createElement("span", {
    className: "error-message",
    id: "error_".concat(id)
  }, validationMessage)));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvU2VsZWN0LmpzeCJdLCJuYW1lcyI6WyJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsImhpZGVGaWVsZCIsInVwZGF0ZUZvcm0iLCJwcm9wcyIsImlkIiwidHlwZSIsImxhYmVsIiwiY3NzQ2xhc3MiLCJpc1JlcXVpcmVkIiwiY2hvaWNlcyIsInBsYWNlaG9sZGVyIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwib3B0aW9ucyIsIm1hcCIsImNob2ljZSIsInRleHQiLCJzZWxlY3RlZE9wdGlvbiIsInNlbGVjdE9wdGlvbiIsImhhbmRsZUNoYW5nZSIsIm9wdGlvbiIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlQmx1ciIsImN1c3RvbVN0eWxlcyIsImNvbnRyb2wiLCJwcm92aWRlZCIsInN0YXRlIiwiaGVpZ2h0IiwiYm9yZGVyV2lkdGgiLCJib3JkZXJDb2xvciIsImRpc3BsYXkiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRWUsd0JBU1Q7QUFBQSxNQVJKQSxLQVFJLFFBUkpBLEtBUUk7QUFBQSxNQVBKQyxLQU9JLFFBUEpBLEtBT0k7QUFBQSxNQU5KQyxpQkFNSSxRQU5KQSxpQkFNSTtBQUFBLE1BTEpDLE9BS0ksUUFMSkEsT0FLSTtBQUFBLE1BSkpDLFVBSUksUUFKSkEsVUFJSTtBQUFBLE1BSEpDLFNBR0ksUUFISkEsU0FHSTtBQUFBLE1BRkpDLFVBRUksUUFGSkEsVUFFSTtBQUFBLE1BRERDLEtBQ0M7O0FBQUEsTUFFRkMsRUFGRSxHQWNBUixLQWRBLENBRUZRLEVBRkU7QUFBQSxNQUdGQyxJQUhFLEdBY0FULEtBZEEsQ0FHRlMsSUFIRTtBQUFBLE1BSUZDLEtBSkUsR0FjQVYsS0FkQSxDQUlGVSxLQUpFO0FBQUEsTUFLRkMsUUFMRSxHQWNBWCxLQWRBLENBS0ZXLFFBTEU7QUFBQSxNQU1GQyxVQU5FLEdBY0FaLEtBZEEsQ0FNRlksVUFORTtBQUFBLE1BT0ZDLE9BUEUsR0FjQWIsS0FkQSxDQU9GYSxPQVBFO0FBQUEsTUFRRkMsV0FSRSxHQWNBZCxLQWRBLENBUUZjLFdBUkU7QUFBQSxNQVNGQyxXQVRFLEdBY0FmLEtBZEEsQ0FTRmUsV0FURTtBQUFBLE1BVUZDLG9CQVZFLEdBY0FoQixLQWRBLENBVUZnQixvQkFWRTtBQUFBLE1BV0ZDLGNBWEUsR0FjQWpCLEtBZEEsQ0FXRmlCLGNBWEU7QUFBQSxNQVlGQyxLQVpFLEdBY0FsQixLQWRBLENBWUZrQixLQVpFO0FBQUEsTUFhRkMsVUFiRSxHQWNBbkIsS0FkQSxDQWFGbUIsVUFiRSxFQWVKOztBQUNBLE1BQU1DLE9BQU8sR0FBR1AsT0FBTyxDQUFDUSxHQUFSLENBQVksVUFBQUMsTUFBTTtBQUFBLFdBQUs7QUFBRXJCLE1BQUFBLEtBQUssRUFBRXFCLE1BQU0sQ0FBQ3JCLEtBQWhCO0FBQXVCUyxNQUFBQSxLQUFLLEVBQUVZLE1BQU0sQ0FBQ0M7QUFBckMsS0FBTDtBQUFBLEdBQWxCLENBQWhCLENBaEJJLENBaUJKOztBQWpCSSxrQkFrQm1DLHFCQUFTdEIsS0FBSyxJQUFJLEVBQWxCLENBbEJuQztBQUFBO0FBQUEsTUFrQkd1QixjQWxCSDtBQUFBLE1Ba0JtQkMsWUFsQm5CLGtCQW1CSjs7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFZO0FBQy9CRixJQUFBQSxZQUFZLENBQUNFLE1BQUQsQ0FBWjtBQUNBLFFBQU1DLEtBQUssR0FBRztBQUNaQyxNQUFBQSxNQUFNLEVBQUU7QUFDTjVCLFFBQUFBLEtBQUssRUFBRTBCO0FBREQ7QUFESSxLQUFkO0FBS0FyQixJQUFBQSxVQUFVLENBQUNzQixLQUFELEVBQVE1QixLQUFSLENBQVY7QUFDRCxHQVJELENBcEJJLENBNkJKOzs7QUFDQSxNQUFNOEIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixRQUFNRixLQUFLLEdBQUc7QUFDWkMsTUFBQUEsTUFBTSxFQUFFO0FBQ041QixRQUFBQSxLQUFLLEVBQUV1QjtBQUREO0FBREksS0FBZDtBQUtBbEIsSUFBQUEsVUFBVSxDQUFDc0IsS0FBRCxFQUFRNUIsS0FBUixDQUFWO0FBQ0FJLElBQUFBLFVBQVUsQ0FBQ0ksRUFBRCxDQUFWO0FBQ0QsR0FSRDs7QUFTQSxNQUFNdUIsWUFBWSxHQUFHO0FBQ25CQyxJQUFBQSxPQUFPLEVBQUUsaUJBQUNDLFFBQUQsRUFBV0MsS0FBWDtBQUFBLCtCQUNKRCxRQURJO0FBRVBFLFFBQUFBLE1BQU0sRUFBRSxFQUZEO0FBR1BDLFFBQUFBLFdBQVcsRUFBRSxLQUhOO0FBSVBDLFFBQUFBLFdBQVcsRUFBRTtBQUpOO0FBQUE7QUFEVSxHQUFyQjtBQVFBLFNBQ0UsZ0NBQUMsV0FBRDtBQUNFLElBQUEsS0FBSyxFQUFFbkIsS0FEVDtBQUVFLElBQUEsU0FBUyxFQUNQaEIsaUJBQWlCLElBQUlDLE9BQXJCLDhCQUFtRFEsUUFBbkQseUJBQThFQSxRQUE5RSxDQUhKO0FBS0UsSUFBQSxLQUFLLEVBQUU7QUFBRTJCLE1BQUFBLE9BQU8sRUFBRWpDLFNBQVMsR0FBRyxNQUFILEdBQVlrQztBQUFoQztBQUxULEtBT0U7QUFBSyxJQUFBLFNBQVMsRUFBRTlCO0FBQWhCLEtBQ0U7QUFBTyxJQUFBLE9BQU8sa0JBQVdELEVBQVgsQ0FBZDtBQUErQixJQUFBLFNBQVMscUJBQWNTLGNBQWQ7QUFBeEMsS0FDR1AsS0FESCxFQUVHRSxVQUFVLEdBQUcsa0RBQUgsR0FBb0IsSUFGakMsQ0FERixFQUtHSSxvQkFBb0IsS0FBSyxPQUF6QixJQUFvQ0QsV0FBcEMsR0FDQ0EsV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0FEaEIsR0FHQyxnQ0FBQyxpQkFBRCxDQUFPLFFBQVAsUUFDRSxnQ0FBQyx1QkFBRDtBQUNFLElBQUEsSUFBSSxFQUFFSSxVQUFVLG9CQUFhWCxFQUFiLENBRGxCO0FBRUUsSUFBQSxRQUFRLEVBQUVJLFVBRlo7QUFHRSxJQUFBLEtBQUssRUFBRVksY0FIVDtBQUlFLElBQUEsUUFBUSxFQUFFLGtCQUFBRyxNQUFNO0FBQUEsYUFBSUQsWUFBWSxDQUFDQyxNQUFELEVBQVMzQixLQUFULENBQWhCO0FBQUEsS0FKbEI7QUFLRSxJQUFBLE1BQU0sRUFBRTtBQUFBLGFBQU04QixVQUFVLEVBQWhCO0FBQUEsS0FMVjtBQU1FLElBQUEsV0FBVyxFQUFFaEIsV0FOZjtBQU9FLElBQUEsT0FBTyxFQUFFTSxPQVBYO0FBUUUsSUFBQSxTQUFTLEVBQUMsYUFSWjtBQVNFLElBQUEsTUFBTSxFQUFFVyxZQVRWO0FBVUUsSUFBQSxPQUFPLGtCQUFXdkIsRUFBWDtBQVZULElBREYsRUFhR08sV0FBVyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE4QkEsV0FBOUIsQ0FibEIsQ0FSSixFQXdCR2IsaUJBQWlCLElBQUlDLE9BQXJCLElBQ0M7QUFBTSxJQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFnQyxJQUFBLEVBQUUsa0JBQVdLLEVBQVg7QUFBbEMsS0FDR04saUJBREgsQ0F6QkosQ0FQRixDQURGO0FBd0NELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICdyZWJhc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICB0b3VjaGVkLFxuICBzZXRUb3VjaGVkLFxuICBoaWRlRmllbGQsXG4gIHVwZGF0ZUZvcm0sXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIGNzc0NsYXNzLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgY2hvaWNlcyxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBjdXN0b21OYW1lLFxuICB9ID0gZmllbGQ7XG4gIC8vIE1hcCBvcHRpb25zXG4gIGNvbnN0IG9wdGlvbnMgPSBjaG9pY2VzLm1hcChjaG9pY2UgPT4gKHsgdmFsdWU6IGNob2ljZS52YWx1ZSwgbGFiZWw6IGNob2ljZS50ZXh0IH0pKTtcbiAgLy8gSGFuZGxlIFN0YXRlXG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2VsZWN0T3B0aW9uXSA9IHVzZVN0YXRlKHZhbHVlIHx8ICcnKTtcbiAgLy8gSGFuZGxlIGNoYW5nZVxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAob3B0aW9uKSA9PiB7XG4gICAgc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgIH0sXG4gICAgfTtcbiAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gIH07XG4gIC8vIEhhbmRsZSBCbHVyXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsdWU6IHNlbGVjdGVkT3B0aW9uLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICBzZXRUb3VjaGVkKGlkKTtcbiAgfTtcbiAgY29uc3QgY3VzdG9tU3R5bGVzID0ge1xuICAgIGNvbnRyb2w6IChwcm92aWRlZCwgc3RhdGUpID0+ICh7XG4gICAgICAuLi5wcm92aWRlZCxcbiAgICAgIGhlaWdodDogNTAsXG4gICAgICBib3JkZXJXaWR0aDogJzJweCcsXG4gICAgICBib3JkZXJDb2xvcjogJyNEQkRCREInLFxuICAgIH0pLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/ICdub25lJyA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2lkfWB9IGNsYXNzTmFtZT17YGdmLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIHtpc1JlcXVpcmVkID8gPGFiYnI+KjwvYWJicj4gOiBudWxsfVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09ICdhYm92ZScgJiYgZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9YH1cbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29wdGlvbiA9PiBoYW5kbGVDaGFuZ2Uob3B0aW9uLCBmaWVsZCl9XG4gICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gaGFuZGxlQmx1cigpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcbiAgICAgICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXN9XG4gICAgICAgICAgICAgIGlucHV0SWQ9e2BpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2lkfWB9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdfQ==