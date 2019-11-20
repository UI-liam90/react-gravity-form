"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateField = exports.isRequired = exports.isEmail = exports.isUrl = exports.checkboxValidation = exports.selectValidation = exports.isEmpty = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var getMessage = function getMessage(message, type) {
  if (!type) return false;

  if (message && _typeof(message) === 'object' && message[type]) {
    return message[type];
  }

  return message;
};

var isEmail = function isEmail(email, message) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(email)) {
    var customMessage = getMessage(message, 'email');
    return customMessage || 'Enter a valid email';
  }

  return true;
};

exports.isEmail = isEmail;

var isUrl = function isUrl(str, message) {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
  '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

  if (!pattern.test(str)) {
    var customMessage = getMessage(message, 'url');
    return customMessage || 'Enter a valid url';
  }

  return true;
};

exports.isUrl = isUrl;

var isEmpty = function isEmpty(value) {
  if (!value) {
    return true;
  }

  return false;
};

exports.isEmpty = isEmpty;

var isRequired = function isRequired(required, empty, message) {
  if (required && empty) {
    var customMessage = getMessage(message, 'required');
    return customMessage || 'This field is required';
  }

  return false;
};

exports.isRequired = isRequired;

var selectValidation = function selectValidation(required, value, placeholder) {
  return !(value === placeholder && required);
};

exports.selectValidation = selectValidation;

var checkboxValidation = function checkboxValidation(values, message) {
  if (values.length < 1) {
    return message || 'This field is required';
  }

  return false;
};

exports.checkboxValidation = checkboxValidation;

var passwordValidation = function passwordValidation(values, field) {
  var inputs = field.inputs,
      required = field.isRequired,
      minPasswordStrength = field.minPasswordStrength,
      errorMessage = field.errorMessage;
  var requiredMsg = errorMessage.required,
      mismatch = errorMessage.mismatch; // check if fields is required and isn't empty

  var isInputsEmpty = values && values.filter(function (item) {
    return item.val === '';
  }).length;

  if (isInputsEmpty === inputs.length && required) {
    return requiredMsg || 'This field is required';
  } // if there is repeat password field => check if match


  if (values && values.length === 2 && inputs && inputs.length === 2) {
    if (values[1].val !== values[0].val) {
      return mismatch || 'Mismatch';
    } // check form password strength
    // if (minPasswordStrength) {
    //   return gformPasswordStrength(values[0].val, values[1].val[1]);
    // }

  } // check form password strength
  // if (minPasswordStrength) {
  // }


  return false;
};

var isDate = function isDate(values, field) {
  var validation = [];

  for (var i = 0; i < values.length; i++) {
    if (values[i]) {
      var _values$i = values[i],
          val = _values$i.val,
          label = _values$i.label;

      if (val) {
        if (label === 'MM') {
          var max = 12;
          var min = 1;
          var maxLength = 2;

          if (val.length > maxLength || val < min || val > max) {
            validation[i] = {
              index: i,
              message: 'Enter a valid month'
            };
          }
        } else if (label === 'DD') {
          var _max = 31;
          var _min = 1;
          var _maxLength = 2;

          if (val.length > _maxLength || val < _min || val > _max) {
            validation[i] = {
              index: i,
              message: 'Enter a valid date'
            };
          }
        } else if (label === 'YYYY') {
          var _max2 = new Date().getFullYear() + 1;

          var _min2 = 1920;
          var _maxLength2 = 4;

          if (val.length > _maxLength2 || val < _min2 || val > _max2) {
            validation[i] = {
              index: i,
              message: 'Enter a valid year'
            };
          }
        }
      }
    }
  }

  return validation;
};

var validateField = function validateField(value, field) {
  var type = field.type,
      required = field.isRequired; // Check first if requried checkbox or radio

  if ((type === 'checkbox' || type === 'radio') && required) {
    return checkboxValidation(value, field.errorMessage);
  }

  if (type === 'password') {
    return passwordValidation(value, field);
  } // Check if empty


  var empty = isEmpty(value);
  var validationMessage = '';
  var message = field && field.errorMessage ? field.errorMessage : false; // Set validation message if required

  validationMessage = required ? isRequired(required, empty, message) : false; // Set other validation messages

  if (!validationMessage && !empty) {
    if (type === 'email') {
      validationMessage = isEmail(value, message);
    } else if (type === 'website') {
      validationMessage = isUrl(value, message);
    } else if (type === 'date') {
      var isValid = isDate(value, field);
      validationMessage = isValid.length > 0 ? isValid : false;
    }
  }

  return validationMessage;
};

exports.validateField = validateField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZWxwZXJzL3ZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsiZ2V0TWVzc2FnZSIsIm1lc3NhZ2UiLCJ0eXBlIiwiaXNFbWFpbCIsImVtYWlsIiwicmUiLCJ0ZXN0IiwiY3VzdG9tTWVzc2FnZSIsImlzVXJsIiwic3RyIiwicGF0dGVybiIsIlJlZ0V4cCIsImlzRW1wdHkiLCJ2YWx1ZSIsImlzUmVxdWlyZWQiLCJyZXF1aXJlZCIsImVtcHR5Iiwic2VsZWN0VmFsaWRhdGlvbiIsInBsYWNlaG9sZGVyIiwiY2hlY2tib3hWYWxpZGF0aW9uIiwidmFsdWVzIiwibGVuZ3RoIiwicGFzc3dvcmRWYWxpZGF0aW9uIiwiZmllbGQiLCJpbnB1dHMiLCJtaW5QYXNzd29yZFN0cmVuZ3RoIiwiZXJyb3JNZXNzYWdlIiwicmVxdWlyZWRNc2ciLCJtaXNtYXRjaCIsImlzSW5wdXRzRW1wdHkiLCJmaWx0ZXIiLCJpdGVtIiwidmFsIiwiaXNEYXRlIiwidmFsaWRhdGlvbiIsImkiLCJsYWJlbCIsIm1heCIsIm1pbiIsIm1heExlbmd0aCIsImluZGV4IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwidmFsaWRhdGVGaWVsZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiaXNWYWxpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsT0FBRCxFQUFVQyxJQUFWLEVBQW1CO0FBQ3BDLE1BQUksQ0FBQ0EsSUFBTCxFQUFXLE9BQU8sS0FBUDs7QUFDWCxNQUFJRCxPQUFPLElBQUksUUFBT0EsT0FBUCxNQUFtQixRQUE5QixJQUEwQ0EsT0FBTyxDQUFDQyxJQUFELENBQXJELEVBQTZEO0FBQzNELFdBQU9ELE9BQU8sQ0FBQ0MsSUFBRCxDQUFkO0FBQ0Q7O0FBQ0QsU0FBT0QsT0FBUDtBQUNELENBTkQ7O0FBUUEsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRSCxPQUFSLEVBQW9CO0FBQ2xDLE1BQU1JLEVBQUUsR0FBRyx3SkFBWDs7QUFDQSxNQUFJLENBQUNBLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRRixLQUFSLENBQUwsRUFBcUI7QUFDbkIsUUFBTUcsYUFBYSxHQUFHUCxVQUFVLENBQUNDLE9BQUQsRUFBVSxPQUFWLENBQWhDO0FBQ0EsV0FBT00sYUFBYSxJQUFJLHFCQUF4QjtBQUNEOztBQUNELFNBQU8sSUFBUDtBQUNELENBUEQ7Ozs7QUFTQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxHQUFELEVBQU1SLE9BQU4sRUFBa0I7QUFDOUIsTUFBTVMsT0FBTyxHQUFHLElBQUlDLE1BQUosQ0FDZCxzQkFBc0I7QUFDdEIsb0RBREEsR0FDcUQ7QUFDckQsK0JBRkEsR0FFZ0M7QUFDaEMsbUNBSEEsR0FHb0M7QUFDcEMsNEJBSkEsR0FJNkI7QUFDM0Isc0JBTlksRUFPZCxHQVBjLENBQWhCLENBRDhCLENBUzNCOztBQUNILE1BQUksQ0FBQ0QsT0FBTyxDQUFDSixJQUFSLENBQWFHLEdBQWIsQ0FBTCxFQUF3QjtBQUN0QixRQUFNRixhQUFhLEdBQUdQLFVBQVUsQ0FBQ0MsT0FBRCxFQUFVLEtBQVYsQ0FBaEM7QUFDQSxXQUFPTSxhQUFhLElBQUksbUJBQXhCO0FBQ0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQ0FmRDs7OztBQWlCQSxJQUFNSyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDekIsTUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDVixXQUFPLElBQVA7QUFDRDs7QUFDRCxTQUFPLEtBQVA7QUFDRCxDQUxEOzs7O0FBT0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsUUFBRCxFQUFXQyxLQUFYLEVBQWtCZixPQUFsQixFQUE4QjtBQUMvQyxNQUFJYyxRQUFRLElBQUlDLEtBQWhCLEVBQXVCO0FBQ3JCLFFBQU1ULGFBQWEsR0FBR1AsVUFBVSxDQUFDQyxPQUFELEVBQVUsVUFBVixDQUFoQztBQUNBLFdBQU9NLGFBQWEsSUFBSSx3QkFBeEI7QUFDRDs7QUFDRCxTQUFPLEtBQVA7QUFDRCxDQU5EOzs7O0FBUUEsSUFBTVUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDRixRQUFELEVBQVdGLEtBQVgsRUFBa0JLLFdBQWxCO0FBQUEsU0FBa0MsRUFBRUwsS0FBSyxLQUFLSyxXQUFWLElBQXlCSCxRQUEzQixDQUFsQztBQUFBLENBQXpCOzs7O0FBRUEsSUFBTUksa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxNQUFELEVBQVNuQixPQUFULEVBQXFCO0FBQzlDLE1BQUltQixNQUFNLENBQUNDLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsV0FBT3BCLE9BQU8sSUFBSSx3QkFBbEI7QUFDRDs7QUFDRCxTQUFPLEtBQVA7QUFDRCxDQUxEOzs7O0FBT0EsSUFBTXFCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0YsTUFBRCxFQUFTRyxLQUFULEVBQW1CO0FBQUEsTUFDcENDLE1BRG9DLEdBQ2dDRCxLQURoQyxDQUNwQ0MsTUFEb0M7QUFBQSxNQUNoQlQsUUFEZ0IsR0FDZ0NRLEtBRGhDLENBQzVCVCxVQUQ0QjtBQUFBLE1BQ05XLG1CQURNLEdBQ2dDRixLQURoQyxDQUNORSxtQkFETTtBQUFBLE1BQ2VDLFlBRGYsR0FDZ0NILEtBRGhDLENBQ2VHLFlBRGY7QUFBQSxNQUUxQkMsV0FGMEIsR0FFQUQsWUFGQSxDQUVwQ1gsUUFGb0M7QUFBQSxNQUViYSxRQUZhLEdBRUFGLFlBRkEsQ0FFYkUsUUFGYSxFQUk1Qzs7QUFDQSxNQUFNQyxhQUFhLEdBQUdULE1BQU0sSUFBSUEsTUFBTSxDQUFDVSxNQUFQLENBQWMsVUFBQ0MsSUFBRDtBQUFBLFdBQVVBLElBQUksQ0FBQ0MsR0FBTCxLQUFhLEVBQXZCO0FBQUEsR0FBZCxFQUF5Q1gsTUFBekU7O0FBQ0EsTUFBSVEsYUFBYSxLQUFLTCxNQUFNLENBQUNILE1BQXpCLElBQW1DTixRQUF2QyxFQUFpRDtBQUMvQyxXQUFPWSxXQUFXLElBQUksd0JBQXRCO0FBQ0QsR0FSMkMsQ0FVNUM7OztBQUNBLE1BQUlQLE1BQU0sSUFBSUEsTUFBTSxDQUFDQyxNQUFQLEtBQWtCLENBQTVCLElBQWlDRyxNQUFqQyxJQUEyQ0EsTUFBTSxDQUFDSCxNQUFQLEtBQWtCLENBQWpFLEVBQW9FO0FBQ2xFLFFBQUlELE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVksR0FBVixLQUFrQlosTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVWSxHQUFoQyxFQUFxQztBQUNuQyxhQUFPSixRQUFRLElBQUksVUFBbkI7QUFDRCxLQUhpRSxDQUtsRTtBQUNBO0FBQ0E7QUFDQTs7QUFDRCxHQXBCMkMsQ0FzQjVDO0FBQ0E7QUFDQTs7O0FBRUEsU0FBTyxLQUFQO0FBQ0QsQ0EzQkQ7O0FBNkJBLElBQU1LLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNiLE1BQUQsRUFBU0csS0FBVCxFQUFtQjtBQUNoQyxNQUFNVyxVQUFVLEdBQUcsRUFBbkI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHZixNQUFNLENBQUNDLE1BQTNCLEVBQW1DYyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDLFFBQUlmLE1BQU0sQ0FBQ2UsQ0FBRCxDQUFWLEVBQWU7QUFBQSxzQkFDVWYsTUFBTSxDQUFDZSxDQUFELENBRGhCO0FBQUEsVUFDTEgsR0FESyxhQUNMQSxHQURLO0FBQUEsVUFDQUksS0FEQSxhQUNBQSxLQURBOztBQUViLFVBQUlKLEdBQUosRUFBUztBQUNQLFlBQUlJLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCLGNBQU1DLEdBQUcsR0FBRyxFQUFaO0FBQ0EsY0FBTUMsR0FBRyxHQUFHLENBQVo7QUFDQSxjQUFNQyxTQUFTLEdBQUcsQ0FBbEI7O0FBQ0EsY0FBSVAsR0FBRyxDQUFDWCxNQUFKLEdBQWFrQixTQUFiLElBQTBCUCxHQUFHLEdBQUdNLEdBQWhDLElBQXVDTixHQUFHLEdBQUdLLEdBQWpELEVBQXNEO0FBQ3BESCxZQUFBQSxVQUFVLENBQUNDLENBQUQsQ0FBVixHQUFnQjtBQUNkSyxjQUFBQSxLQUFLLEVBQUVMLENBRE87QUFFZGxDLGNBQUFBLE9BQU8sRUFBRTtBQUZLLGFBQWhCO0FBSUQ7QUFDRixTQVZELE1BVU8sSUFBSW1DLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ3pCLGNBQU1DLElBQUcsR0FBRyxFQUFaO0FBQ0EsY0FBTUMsSUFBRyxHQUFHLENBQVo7QUFDQSxjQUFNQyxVQUFTLEdBQUcsQ0FBbEI7O0FBQ0EsY0FBSVAsR0FBRyxDQUFDWCxNQUFKLEdBQWFrQixVQUFiLElBQTBCUCxHQUFHLEdBQUdNLElBQWhDLElBQXVDTixHQUFHLEdBQUdLLElBQWpELEVBQXNEO0FBQ3BESCxZQUFBQSxVQUFVLENBQUNDLENBQUQsQ0FBVixHQUFnQjtBQUNkSyxjQUFBQSxLQUFLLEVBQUVMLENBRE87QUFFZGxDLGNBQUFBLE9BQU8sRUFBRTtBQUZLLGFBQWhCO0FBSUQ7QUFDRixTQVZNLE1BVUEsSUFBSW1DLEtBQUssS0FBSyxNQUFkLEVBQXNCO0FBQzNCLGNBQU1DLEtBQUcsR0FBRyxJQUFJSSxJQUFKLEdBQVdDLFdBQVgsS0FBMkIsQ0FBdkM7O0FBQ0EsY0FBTUosS0FBRyxHQUFHLElBQVo7QUFDQSxjQUFNQyxXQUFTLEdBQUcsQ0FBbEI7O0FBQ0EsY0FBSVAsR0FBRyxDQUFDWCxNQUFKLEdBQWFrQixXQUFiLElBQTBCUCxHQUFHLEdBQUdNLEtBQWhDLElBQXVDTixHQUFHLEdBQUdLLEtBQWpELEVBQXNEO0FBQ3BESCxZQUFBQSxVQUFVLENBQUNDLENBQUQsQ0FBVixHQUFnQjtBQUNkSyxjQUFBQSxLQUFLLEVBQUVMLENBRE87QUFFZGxDLGNBQUFBLE9BQU8sRUFBRTtBQUZLLGFBQWhCO0FBSUQ7QUFDRjtBQUNGO0FBQ0Y7QUFDRjs7QUFDRCxTQUFPaUMsVUFBUDtBQUNELENBekNEOztBQTJDQSxJQUFNUyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUM5QixLQUFELEVBQVFVLEtBQVIsRUFBa0I7QUFBQSxNQUM5QnJCLElBRDhCLEdBQ0NxQixLQURELENBQzlCckIsSUFEOEI7QUFBQSxNQUNaYSxRQURZLEdBQ0NRLEtBREQsQ0FDeEJULFVBRHdCLEVBRXRDOztBQUNBLE1BQUksQ0FBQ1osSUFBSSxLQUFLLFVBQVQsSUFBdUJBLElBQUksS0FBSyxPQUFqQyxLQUE2Q2EsUUFBakQsRUFBMkQ7QUFDekQsV0FBT0ksa0JBQWtCLENBQUNOLEtBQUQsRUFBUVUsS0FBSyxDQUFDRyxZQUFkLENBQXpCO0FBQ0Q7O0FBRUQsTUFBSXhCLElBQUksS0FBSyxVQUFiLEVBQXlCO0FBQ3ZCLFdBQU9vQixrQkFBa0IsQ0FBQ1QsS0FBRCxFQUFRVSxLQUFSLENBQXpCO0FBQ0QsR0FUcUMsQ0FXdEM7OztBQUNBLE1BQU1QLEtBQUssR0FBR0osT0FBTyxDQUFDQyxLQUFELENBQXJCO0FBQ0EsTUFBSStCLGlCQUFpQixHQUFHLEVBQXhCO0FBQ0EsTUFBTTNDLE9BQU8sR0FBR3NCLEtBQUssSUFBSUEsS0FBSyxDQUFDRyxZQUFmLEdBQThCSCxLQUFLLENBQUNHLFlBQXBDLEdBQW1ELEtBQW5FLENBZHNDLENBZXRDOztBQUNBa0IsRUFBQUEsaUJBQWlCLEdBQUc3QixRQUFRLEdBQUdELFVBQVUsQ0FBQ0MsUUFBRCxFQUFXQyxLQUFYLEVBQWtCZixPQUFsQixDQUFiLEdBQTBDLEtBQXRFLENBaEJzQyxDQWlCdEM7O0FBQ0EsTUFBSSxDQUFDMkMsaUJBQUQsSUFBc0IsQ0FBQzVCLEtBQTNCLEVBQWtDO0FBQ2hDLFFBQUlkLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQ3BCMEMsTUFBQUEsaUJBQWlCLEdBQUd6QyxPQUFPLENBQUNVLEtBQUQsRUFBUVosT0FBUixDQUEzQjtBQUNELEtBRkQsTUFFTyxJQUFJQyxJQUFJLEtBQUssU0FBYixFQUF3QjtBQUM3QjBDLE1BQUFBLGlCQUFpQixHQUFHcEMsS0FBSyxDQUFDSyxLQUFELEVBQVFaLE9BQVIsQ0FBekI7QUFDRCxLQUZNLE1BRUEsSUFBSUMsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDMUIsVUFBTTJDLE9BQU8sR0FBR1osTUFBTSxDQUFDcEIsS0FBRCxFQUFRVSxLQUFSLENBQXRCO0FBQ0FxQixNQUFBQSxpQkFBaUIsR0FBR0MsT0FBTyxDQUFDeEIsTUFBUixHQUFpQixDQUFqQixHQUFxQndCLE9BQXJCLEdBQStCLEtBQW5EO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPRCxpQkFBUDtBQUNELENBN0JEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0TWVzc2FnZSA9IChtZXNzYWdlLCB0eXBlKSA9PiB7XG4gIGlmICghdHlwZSkgcmV0dXJuIGZhbHNlO1xuICBpZiAobWVzc2FnZSAmJiB0eXBlb2YgbWVzc2FnZSA9PT0gJ29iamVjdCcgJiYgbWVzc2FnZVt0eXBlXSkge1xuICAgIHJldHVybiBtZXNzYWdlW3R5cGVdO1xuICB9XG4gIHJldHVybiBtZXNzYWdlO1xufTtcblxuY29uc3QgaXNFbWFpbCA9IChlbWFpbCwgbWVzc2FnZSkgPT4ge1xuICBjb25zdCByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICBpZiAoIXJlLnRlc3QoZW1haWwpKSB7XG4gICAgY29uc3QgY3VzdG9tTWVzc2FnZSA9IGdldE1lc3NhZ2UobWVzc2FnZSwgJ2VtYWlsJyk7XG4gICAgcmV0dXJuIGN1c3RvbU1lc3NhZ2UgfHwgJ0VudGVyIGEgdmFsaWQgZW1haWwnO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgaXNVcmwgPSAoc3RyLCBtZXNzYWdlKSA9PiB7XG4gIGNvbnN0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKFxuICAgICdeKGh0dHBzPzpcXFxcL1xcXFwvKT8nICsgLy8gcHJvdG9jb2xcbiAgICAnKCgoW2EtelxcXFxkXShbYS16XFxcXGQtXSpbYS16XFxcXGRdKSopXFxcXC4pK1thLXpdezIsfXwnICsgLy8gZG9tYWluIG5hbWVcbiAgICAnKChcXFxcZHsxLDN9XFxcXC4pezN9XFxcXGR7MSwzfSkpJyArIC8vIE9SIGlwICh2NCkgYWRkcmVzc1xuICAgICcoXFxcXDpcXFxcZCspPyhcXFxcL1stYS16XFxcXGQlXy5+K10qKSonICsgLy8gcG9ydCBhbmQgcGF0aFxuICAgICcoXFxcXD9bOyZhLXpcXFxcZCVfLn4rPS1dKik/JyArIC8vIHF1ZXJ5IHN0cmluZ1xuICAgICAgJyhcXFxcI1stYS16XFxcXGRfXSopPyQnLFxuICAgICdpJ1xuICApOyAvLyBmcmFnbWVudCBsb2NhdG9yXG4gIGlmICghcGF0dGVybi50ZXN0KHN0cikpIHtcbiAgICBjb25zdCBjdXN0b21NZXNzYWdlID0gZ2V0TWVzc2FnZShtZXNzYWdlLCAndXJsJyk7XG4gICAgcmV0dXJuIGN1c3RvbU1lc3NhZ2UgfHwgJ0VudGVyIGEgdmFsaWQgdXJsJztcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IGlzRW1wdHkgPSAodmFsdWUpID0+IHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzUmVxdWlyZWQgPSAocmVxdWlyZWQsIGVtcHR5LCBtZXNzYWdlKSA9PiB7XG4gIGlmIChyZXF1aXJlZCAmJiBlbXB0eSkge1xuICAgIGNvbnN0IGN1c3RvbU1lc3NhZ2UgPSBnZXRNZXNzYWdlKG1lc3NhZ2UsICdyZXF1aXJlZCcpO1xuICAgIHJldHVybiBjdXN0b21NZXNzYWdlIHx8ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzZWxlY3RWYWxpZGF0aW9uID0gKHJlcXVpcmVkLCB2YWx1ZSwgcGxhY2Vob2xkZXIpID0+ICEodmFsdWUgPT09IHBsYWNlaG9sZGVyICYmIHJlcXVpcmVkKTtcblxuY29uc3QgY2hlY2tib3hWYWxpZGF0aW9uID0gKHZhbHVlcywgbWVzc2FnZSkgPT4ge1xuICBpZiAodmFsdWVzLmxlbmd0aCA8IDEpIHtcbiAgICByZXR1cm4gbWVzc2FnZSB8fCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9uID0gKHZhbHVlcywgZmllbGQpID0+IHtcbiAgY29uc3QgeyBpbnB1dHMsIGlzUmVxdWlyZWQ6IHJlcXVpcmVkLCBtaW5QYXNzd29yZFN0cmVuZ3RoLCBlcnJvck1lc3NhZ2UgfSA9IGZpZWxkO1xuICBjb25zdCB7IHJlcXVpcmVkOiByZXF1aXJlZE1zZywgbWlzbWF0Y2ggfSA9IGVycm9yTWVzc2FnZTtcblxuICAvLyBjaGVjayBpZiBmaWVsZHMgaXMgcmVxdWlyZWQgYW5kIGlzbid0IGVtcHR5XG4gIGNvbnN0IGlzSW5wdXRzRW1wdHkgPSB2YWx1ZXMgJiYgdmFsdWVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS52YWwgPT09ICcnKS5sZW5ndGg7XG4gIGlmIChpc0lucHV0c0VtcHR5ID09PSBpbnB1dHMubGVuZ3RoICYmIHJlcXVpcmVkKSB7XG4gICAgcmV0dXJuIHJlcXVpcmVkTXNnIHx8ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxuXG4gIC8vIGlmIHRoZXJlIGlzIHJlcGVhdCBwYXNzd29yZCBmaWVsZCA9PiBjaGVjayBpZiBtYXRjaFxuICBpZiAodmFsdWVzICYmIHZhbHVlcy5sZW5ndGggPT09IDIgJiYgaW5wdXRzICYmIGlucHV0cy5sZW5ndGggPT09IDIpIHtcbiAgICBpZiAodmFsdWVzWzFdLnZhbCAhPT0gdmFsdWVzWzBdLnZhbCkge1xuICAgICAgcmV0dXJuIG1pc21hdGNoIHx8ICdNaXNtYXRjaCc7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgZm9ybSBwYXNzd29yZCBzdHJlbmd0aFxuICAgIC8vIGlmIChtaW5QYXNzd29yZFN0cmVuZ3RoKSB7XG4gICAgLy8gICByZXR1cm4gZ2Zvcm1QYXNzd29yZFN0cmVuZ3RoKHZhbHVlc1swXS52YWwsIHZhbHVlc1sxXS52YWxbMV0pO1xuICAgIC8vIH1cbiAgfVxuXG4gIC8vIGNoZWNrIGZvcm0gcGFzc3dvcmQgc3RyZW5ndGhcbiAgLy8gaWYgKG1pblBhc3N3b3JkU3RyZW5ndGgpIHtcbiAgLy8gfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzRGF0ZSA9ICh2YWx1ZXMsIGZpZWxkKSA9PiB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodmFsdWVzW2ldKSB7XG4gICAgICBjb25zdCB7IHZhbCwgbGFiZWwgfSA9IHZhbHVlc1tpXTtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgaWYgKGxhYmVsID09PSAnTU0nKSB7XG4gICAgICAgICAgY29uc3QgbWF4ID0gMTI7XG4gICAgICAgICAgY29uc3QgbWluID0gMTtcbiAgICAgICAgICBjb25zdCBtYXhMZW5ndGggPSAyO1xuICAgICAgICAgIGlmICh2YWwubGVuZ3RoID4gbWF4TGVuZ3RoIHx8IHZhbCA8IG1pbiB8fCB2YWwgPiBtYXgpIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25baV0gPSB7XG4gICAgICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgICAgICBtZXNzYWdlOiAnRW50ZXIgYSB2YWxpZCBtb250aCcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChsYWJlbCA9PT0gJ0REJykge1xuICAgICAgICAgIGNvbnN0IG1heCA9IDMxO1xuICAgICAgICAgIGNvbnN0IG1pbiA9IDE7XG4gICAgICAgICAgY29uc3QgbWF4TGVuZ3RoID0gMjtcbiAgICAgICAgICBpZiAodmFsLmxlbmd0aCA+IG1heExlbmd0aCB8fCB2YWwgPCBtaW4gfHwgdmFsID4gbWF4KSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uW2ldID0ge1xuICAgICAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ0VudGVyIGEgdmFsaWQgZGF0ZScsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChsYWJlbCA9PT0gJ1lZWVknKSB7XG4gICAgICAgICAgY29uc3QgbWF4ID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpICsgMTtcbiAgICAgICAgICBjb25zdCBtaW4gPSAxOTIwO1xuICAgICAgICAgIGNvbnN0IG1heExlbmd0aCA9IDQ7XG4gICAgICAgICAgaWYgKHZhbC5sZW5ndGggPiBtYXhMZW5ndGggfHwgdmFsIDwgbWluIHx8IHZhbCA+IG1heCkge1xuICAgICAgICAgICAgdmFsaWRhdGlvbltpXSA9IHtcbiAgICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdFbnRlciBhIHZhbGlkIHllYXInLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbGlkYXRpb247XG59O1xuXG5jb25zdCB2YWxpZGF0ZUZpZWxkID0gKHZhbHVlLCBmaWVsZCkgPT4ge1xuICBjb25zdCB7IHR5cGUsIGlzUmVxdWlyZWQ6IHJlcXVpcmVkIH0gPSBmaWVsZDtcbiAgLy8gQ2hlY2sgZmlyc3QgaWYgcmVxdXJpZWQgY2hlY2tib3ggb3IgcmFkaW9cbiAgaWYgKCh0eXBlID09PSAnY2hlY2tib3gnIHx8IHR5cGUgPT09ICdyYWRpbycpICYmIHJlcXVpcmVkKSB7XG4gICAgcmV0dXJuIGNoZWNrYm94VmFsaWRhdGlvbih2YWx1ZSwgZmllbGQuZXJyb3JNZXNzYWdlKTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAncGFzc3dvcmQnKSB7XG4gICAgcmV0dXJuIHBhc3N3b3JkVmFsaWRhdGlvbih2YWx1ZSwgZmllbGQpO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgZW1wdHlcbiAgY29uc3QgZW1wdHkgPSBpc0VtcHR5KHZhbHVlKTtcbiAgbGV0IHZhbGlkYXRpb25NZXNzYWdlID0gJyc7XG4gIGNvbnN0IG1lc3NhZ2UgPSBmaWVsZCAmJiBmaWVsZC5lcnJvck1lc3NhZ2UgPyBmaWVsZC5lcnJvck1lc3NhZ2UgOiBmYWxzZTtcbiAgLy8gU2V0IHZhbGlkYXRpb24gbWVzc2FnZSBpZiByZXF1aXJlZFxuICB2YWxpZGF0aW9uTWVzc2FnZSA9IHJlcXVpcmVkID8gaXNSZXF1aXJlZChyZXF1aXJlZCwgZW1wdHksIG1lc3NhZ2UpIDogZmFsc2U7XG4gIC8vIFNldCBvdGhlciB2YWxpZGF0aW9uIG1lc3NhZ2VzXG4gIGlmICghdmFsaWRhdGlvbk1lc3NhZ2UgJiYgIWVtcHR5KSB7XG4gICAgaWYgKHR5cGUgPT09ICdlbWFpbCcpIHtcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlID0gaXNFbWFpbCh2YWx1ZSwgbWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnd2Vic2l0ZScpIHtcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlID0gaXNVcmwodmFsdWUsIG1lc3NhZ2UpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICBjb25zdCBpc1ZhbGlkID0gaXNEYXRlKHZhbHVlLCBmaWVsZCk7XG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSA9IGlzVmFsaWQubGVuZ3RoID4gMCA/IGlzVmFsaWQgOiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbGlkYXRpb25NZXNzYWdlO1xufTtcblxuZXhwb3J0IHsgaXNFbXB0eSwgc2VsZWN0VmFsaWRhdGlvbiwgY2hlY2tib3hWYWxpZGF0aW9uLCBpc1VybCwgaXNFbWFpbCwgaXNSZXF1aXJlZCwgdmFsaWRhdGVGaWVsZCB9O1xuXG4iXX0=