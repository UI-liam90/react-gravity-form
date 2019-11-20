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

  return false;
};

exports.isEmail = isEmail;

var isUrl = function isUrl(str, message) {
  var pattern = new RegExp('^(https?:\\/\\/)?' // protocol
  + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' // domain name
  + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
  + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port and path
  + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
  + '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

  if (!pattern.test(str)) {
    var customMessage = getMessage(message, 'url');
    return customMessage || 'Enter a valid url';
  }

  return false;
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
  var _ref = field || false,
      inputs = _ref.inputs,
      required = _ref.isRequired,
      minPasswordStrength = _ref.minPasswordStrength,
      errorMessage = _ref.errorMessage;

  var _ref2 = errorMessage || false,
      requiredMsg = _ref2.required,
      mismatch = _ref2.mismatch; // check if fields is required and isn't empty


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZWxwZXJzL3ZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsiZ2V0TWVzc2FnZSIsIm1lc3NhZ2UiLCJ0eXBlIiwiaXNFbWFpbCIsImVtYWlsIiwicmUiLCJ0ZXN0IiwiY3VzdG9tTWVzc2FnZSIsImlzVXJsIiwic3RyIiwicGF0dGVybiIsIlJlZ0V4cCIsImlzRW1wdHkiLCJ2YWx1ZSIsImlzUmVxdWlyZWQiLCJyZXF1aXJlZCIsImVtcHR5Iiwic2VsZWN0VmFsaWRhdGlvbiIsInBsYWNlaG9sZGVyIiwiY2hlY2tib3hWYWxpZGF0aW9uIiwidmFsdWVzIiwibGVuZ3RoIiwicGFzc3dvcmRWYWxpZGF0aW9uIiwiZmllbGQiLCJpbnB1dHMiLCJtaW5QYXNzd29yZFN0cmVuZ3RoIiwiZXJyb3JNZXNzYWdlIiwicmVxdWlyZWRNc2ciLCJtaXNtYXRjaCIsImlzSW5wdXRzRW1wdHkiLCJmaWx0ZXIiLCJpdGVtIiwidmFsIiwiaXNEYXRlIiwidmFsaWRhdGlvbiIsImkiLCJsYWJlbCIsIm1heCIsIm1pbiIsIm1heExlbmd0aCIsImluZGV4IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwidmFsaWRhdGVGaWVsZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiaXNWYWxpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsT0FBRCxFQUFVQyxJQUFWLEVBQW1CO0FBQ3BDLE1BQUksQ0FBQ0EsSUFBTCxFQUFXLE9BQU8sS0FBUDs7QUFDWCxNQUFJRCxPQUFPLElBQUksUUFBT0EsT0FBUCxNQUFtQixRQUE5QixJQUEwQ0EsT0FBTyxDQUFDQyxJQUFELENBQXJELEVBQTZEO0FBQzNELFdBQU9ELE9BQU8sQ0FBQ0MsSUFBRCxDQUFkO0FBQ0Q7O0FBQ0QsU0FBT0QsT0FBUDtBQUNELENBTkQ7O0FBUUEsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRSCxPQUFSLEVBQW9CO0FBQ2xD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QUFRVSxLQUFSLENBQXRCO0FBQ0FxQixNQUFBQSxpQkFBaUIsR0FBR0MsT0FBTyxDQUFDeEIsTUFBUixHQUFpQixDQUFqQixHQUFxQndCLE9BQXJCLEdBQStCLEtBQW5EO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPRCxpQkFBUDtBQUNELENBN0JEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0TWVzc2FnZSA9IChtZXNzYWdlLCB0eXBlKSA9PiB7XG4gIGlmICghdHlwZSkgcmV0dXJuIGZhbHNlO1xuICBpZiAobWVzc2FnZSAmJiB0eXBlb2YgbWVzc2FnZSA9PT0gJ29iamVjdCcgJiYgbWVzc2FnZVt0eXBlXSkge1xuICAgIHJldHVybiBtZXNzYWdlW3R5cGVdO1xuICB9XG4gIHJldHVybiBtZXNzYWdlO1xufTtcblxuY29uc3QgaXNFbWFpbCA9IChlbWFpbCwgbWVzc2FnZSkgPT4ge1xuICBjb25zdCByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICBpZiAoIXJlLnRlc3QoZW1haWwpKSB7XG4gICAgY29uc3QgY3VzdG9tTWVzc2FnZSA9IGdldE1lc3NhZ2UobWVzc2FnZSwgJ2VtYWlsJyk7XG4gICAgcmV0dXJuIGN1c3RvbU1lc3NhZ2UgfHwgJ0VudGVyIGEgdmFsaWQgZW1haWwnO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzVXJsID0gKHN0ciwgbWVzc2FnZSkgPT4ge1xuICBjb25zdCBwYXR0ZXJuID0gbmV3IFJlZ0V4cChcbiAgICAnXihodHRwcz86XFxcXC9cXFxcLyk/JyAvLyBwcm90b2NvbFxuICAgICsgJygoKFthLXpcXFxcZF0oW2EtelxcXFxkLV0qW2EtelxcXFxkXSkqKVxcXFwuKStbYS16XXsyLH18JyAvLyBkb21haW4gbmFtZVxuICAgICsgJygoXFxcXGR7MSwzfVxcXFwuKXszfVxcXFxkezEsM30pKScgLy8gT1IgaXAgKHY0KSBhZGRyZXNzXG4gICAgKyAnKFxcXFw6XFxcXGQrKT8oXFxcXC9bLWEtelxcXFxkJV8ufitdKikqJyAvLyBwb3J0IGFuZCBwYXRoXG4gICAgKyAnKFxcXFw/WzsmYS16XFxcXGQlXy5+Kz0tXSopPycgLy8gcXVlcnkgc3RyaW5nXG4gICAgICArICcoXFxcXCNbLWEtelxcXFxkX10qKT8kJyxcbiAgICAnaScsXG4gICk7IC8vIGZyYWdtZW50IGxvY2F0b3JcbiAgaWYgKCFwYXR0ZXJuLnRlc3Qoc3RyKSkge1xuICAgIGNvbnN0IGN1c3RvbU1lc3NhZ2UgPSBnZXRNZXNzYWdlKG1lc3NhZ2UsICd1cmwnKTtcbiAgICByZXR1cm4gY3VzdG9tTWVzc2FnZSB8fCAnRW50ZXIgYSB2YWxpZCB1cmwnO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzRW1wdHkgPSAodmFsdWUpID0+IHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzUmVxdWlyZWQgPSAocmVxdWlyZWQsIGVtcHR5LCBtZXNzYWdlKSA9PiB7XG4gIGlmIChyZXF1aXJlZCAmJiBlbXB0eSkge1xuICAgIGNvbnN0IGN1c3RvbU1lc3NhZ2UgPSBnZXRNZXNzYWdlKG1lc3NhZ2UsICdyZXF1aXJlZCcpO1xuICAgIHJldHVybiBjdXN0b21NZXNzYWdlIHx8ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzZWxlY3RWYWxpZGF0aW9uID0gKHJlcXVpcmVkLCB2YWx1ZSwgcGxhY2Vob2xkZXIpID0+ICEodmFsdWUgPT09IHBsYWNlaG9sZGVyICYmIHJlcXVpcmVkKTtcblxuY29uc3QgY2hlY2tib3hWYWxpZGF0aW9uID0gKHZhbHVlcywgbWVzc2FnZSkgPT4ge1xuICBpZiAodmFsdWVzLmxlbmd0aCA8IDEpIHtcbiAgICByZXR1cm4gbWVzc2FnZSB8fCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9uID0gKHZhbHVlcywgZmllbGQpID0+IHtcbiAgY29uc3Qge1xuIGlucHV0cywgaXNSZXF1aXJlZDogcmVxdWlyZWQsIG1pblBhc3N3b3JkU3RyZW5ndGgsIGVycm9yTWVzc2FnZSBcbn0gPSBmaWVsZCB8fCBmYWxzZTtcbiAgY29uc3QgeyByZXF1aXJlZDogcmVxdWlyZWRNc2csIG1pc21hdGNoIH0gPSBlcnJvck1lc3NhZ2UgfHwgZmFsc2U7XG5cbiAgLy8gY2hlY2sgaWYgZmllbGRzIGlzIHJlcXVpcmVkIGFuZCBpc24ndCBlbXB0eVxuICBjb25zdCBpc0lucHV0c0VtcHR5ID0gdmFsdWVzICYmIHZhbHVlcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnZhbCA9PT0gJycpLmxlbmd0aDtcbiAgaWYgKGlzSW5wdXRzRW1wdHkgPT09IGlucHV0cy5sZW5ndGggJiYgcmVxdWlyZWQpIHtcbiAgICByZXR1cm4gcmVxdWlyZWRNc2cgfHwgJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG5cbiAgLy8gaWYgdGhlcmUgaXMgcmVwZWF0IHBhc3N3b3JkIGZpZWxkID0+IGNoZWNrIGlmIG1hdGNoXG4gIGlmICh2YWx1ZXMgJiYgdmFsdWVzLmxlbmd0aCA9PT0gMiAmJiBpbnB1dHMgJiYgaW5wdXRzLmxlbmd0aCA9PT0gMikge1xuICAgIGlmICh2YWx1ZXNbMV0udmFsICE9PSB2YWx1ZXNbMF0udmFsKSB7XG4gICAgICByZXR1cm4gbWlzbWF0Y2ggfHwgJ01pc21hdGNoJztcbiAgICB9XG5cbiAgICAvLyBjaGVjayBmb3JtIHBhc3N3b3JkIHN0cmVuZ3RoXG4gICAgLy8gaWYgKG1pblBhc3N3b3JkU3RyZW5ndGgpIHtcbiAgICAvLyAgIHJldHVybiBnZm9ybVBhc3N3b3JkU3RyZW5ndGgodmFsdWVzWzBdLnZhbCwgdmFsdWVzWzFdLnZhbFsxXSk7XG4gICAgLy8gfVxuICB9XG5cbiAgLy8gY2hlY2sgZm9ybSBwYXNzd29yZCBzdHJlbmd0aFxuICAvLyBpZiAobWluUGFzc3dvcmRTdHJlbmd0aCkge1xuICAvLyB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNEYXRlID0gKHZhbHVlcywgZmllbGQpID0+IHtcbiAgY29uc3QgdmFsaWRhdGlvbiA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh2YWx1ZXNbaV0pIHtcbiAgICAgIGNvbnN0IHsgdmFsLCBsYWJlbCB9ID0gdmFsdWVzW2ldO1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBpZiAobGFiZWwgPT09ICdNTScpIHtcbiAgICAgICAgICBjb25zdCBtYXggPSAxMjtcbiAgICAgICAgICBjb25zdCBtaW4gPSAxO1xuICAgICAgICAgIGNvbnN0IG1heExlbmd0aCA9IDI7XG4gICAgICAgICAgaWYgKHZhbC5sZW5ndGggPiBtYXhMZW5ndGggfHwgdmFsIDwgbWluIHx8IHZhbCA+IG1heCkge1xuICAgICAgICAgICAgdmFsaWRhdGlvbltpXSA9IHtcbiAgICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdFbnRlciBhIHZhbGlkIG1vbnRoJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGxhYmVsID09PSAnREQnKSB7XG4gICAgICAgICAgY29uc3QgbWF4ID0gMzE7XG4gICAgICAgICAgY29uc3QgbWluID0gMTtcbiAgICAgICAgICBjb25zdCBtYXhMZW5ndGggPSAyO1xuICAgICAgICAgIGlmICh2YWwubGVuZ3RoID4gbWF4TGVuZ3RoIHx8IHZhbCA8IG1pbiB8fCB2YWwgPiBtYXgpIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25baV0gPSB7XG4gICAgICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgICAgICBtZXNzYWdlOiAnRW50ZXIgYSB2YWxpZCBkYXRlJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGxhYmVsID09PSAnWVlZWScpIHtcbiAgICAgICAgICBjb25zdCBtYXggPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgKyAxO1xuICAgICAgICAgIGNvbnN0IG1pbiA9IDE5MjA7XG4gICAgICAgICAgY29uc3QgbWF4TGVuZ3RoID0gNDtcbiAgICAgICAgICBpZiAodmFsLmxlbmd0aCA+IG1heExlbmd0aCB8fCB2YWwgPCBtaW4gfHwgdmFsID4gbWF4KSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uW2ldID0ge1xuICAgICAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ0VudGVyIGEgdmFsaWQgeWVhcicsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsaWRhdGlvbjtcbn07XG5cbmNvbnN0IHZhbGlkYXRlRmllbGQgPSAodmFsdWUsIGZpZWxkKSA9PiB7XG4gIGNvbnN0IHsgdHlwZSwgaXNSZXF1aXJlZDogcmVxdWlyZWQgfSA9IGZpZWxkO1xuICAvLyBDaGVjayBmaXJzdCBpZiByZXF1cmllZCBjaGVja2JveCBvciByYWRpb1xuICBpZiAoKHR5cGUgPT09ICdjaGVja2JveCcgfHwgdHlwZSA9PT0gJ3JhZGlvJykgJiYgcmVxdWlyZWQpIHtcbiAgICByZXR1cm4gY2hlY2tib3hWYWxpZGF0aW9uKHZhbHVlLCBmaWVsZC5lcnJvck1lc3NhZ2UpO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICByZXR1cm4gcGFzc3dvcmRWYWxpZGF0aW9uKHZhbHVlLCBmaWVsZCk7XG4gIH1cblxuICAvLyBDaGVjayBpZiBlbXB0eVxuICBjb25zdCBlbXB0eSA9IGlzRW1wdHkodmFsdWUpO1xuICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2UgPSAnJztcbiAgY29uc3QgbWVzc2FnZSA9IGZpZWxkICYmIGZpZWxkLmVycm9yTWVzc2FnZSA/IGZpZWxkLmVycm9yTWVzc2FnZSA6IGZhbHNlO1xuICAvLyBTZXQgdmFsaWRhdGlvbiBtZXNzYWdlIGlmIHJlcXVpcmVkXG4gIHZhbGlkYXRpb25NZXNzYWdlID0gcmVxdWlyZWQgPyBpc1JlcXVpcmVkKHJlcXVpcmVkLCBlbXB0eSwgbWVzc2FnZSkgOiBmYWxzZTtcbiAgLy8gU2V0IG90aGVyIHZhbGlkYXRpb24gbWVzc2FnZXNcbiAgaWYgKCF2YWxpZGF0aW9uTWVzc2FnZSAmJiAhZW1wdHkpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2VtYWlsJykge1xuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgPSBpc0VtYWlsKHZhbHVlLCBtZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd3ZWJzaXRlJykge1xuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgPSBpc1VybCh2YWx1ZSwgbWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgIGNvbnN0IGlzVmFsaWQgPSBpc0RhdGUodmFsdWUsIGZpZWxkKTtcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlID0gaXNWYWxpZC5sZW5ndGggPiAwID8gaXNWYWxpZCA6IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsaWRhdGlvbk1lc3NhZ2U7XG59O1xuXG5leHBvcnQge1xuIGlzRW1wdHksIHNlbGVjdFZhbGlkYXRpb24sIGNoZWNrYm94VmFsaWRhdGlvbiwgaXNVcmwsIGlzRW1haWwsIGlzUmVxdWlyZWQsIHZhbGlkYXRlRmllbGQgXG59O1xuXG4iXX0=