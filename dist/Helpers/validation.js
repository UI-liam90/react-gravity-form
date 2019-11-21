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

  if ((values && values.length === 0 || isInputsEmpty === inputs.length) && required) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZWxwZXJzL3ZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsiZ2V0TWVzc2FnZSIsIm1lc3NhZ2UiLCJ0eXBlIiwiaXNFbWFpbCIsImVtYWlsIiwicmUiLCJ0ZXN0IiwiY3VzdG9tTWVzc2FnZSIsImlzVXJsIiwic3RyIiwicGF0dGVybiIsIlJlZ0V4cCIsImlzRW1wdHkiLCJ2YWx1ZSIsImlzUmVxdWlyZWQiLCJyZXF1aXJlZCIsImVtcHR5Iiwic2VsZWN0VmFsaWRhdGlvbiIsInBsYWNlaG9sZGVyIiwiY2hlY2tib3hWYWxpZGF0aW9uIiwidmFsdWVzIiwibGVuZ3RoIiwicGFzc3dvcmRWYWxpZGF0aW9uIiwiZmllbGQiLCJpbnB1dHMiLCJtaW5QYXNzd29yZFN0cmVuZ3RoIiwiZXJyb3JNZXNzYWdlIiwicmVxdWlyZWRNc2ciLCJtaXNtYXRjaCIsImlzSW5wdXRzRW1wdHkiLCJmaWx0ZXIiLCJpdGVtIiwidmFsIiwiaXNEYXRlIiwidmFsaWRhdGlvbiIsImkiLCJsYWJlbCIsIm1heCIsIm1pbiIsIm1heExlbmd0aCIsImluZGV4IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwidmFsaWRhdGVGaWVsZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiaXNWYWxpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsT0FBRCxFQUFVQyxJQUFWLEVBQW1CO0FBQ3BDLE1BQUksQ0FBQ0EsSUFBTCxFQUFXLE9BQU8sS0FBUDs7QUFDWCxNQUFJRCxPQUFPLElBQUksUUFBT0EsT0FBUCxNQUFtQixRQUE5QixJQUEwQ0EsT0FBTyxDQUFDQyxJQUFELENBQXJELEVBQTZEO0FBQzNELFdBQU9ELE9BQU8sQ0FBQ0MsSUFBRCxDQUFkO0FBQ0Q7O0FBQ0QsU0FBT0QsT0FBUDtBQUNELENBTkQ7O0FBUUEsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRSCxPQUFSLEVBQW9CO0FBQ2xD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LEdBQUdaLE1BQU0sQ0FBQ3BCLEtBQUQsRUFBUVUsS0FBUixDQUF0QjtBQUNBcUIsTUFBQUEsaUJBQWlCLEdBQUdDLE9BQU8sQ0FBQ3hCLE1BQVIsR0FBaUIsQ0FBakIsR0FBcUJ3QixPQUFyQixHQUErQixLQUFuRDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0QsaUJBQVA7QUFDRCxDQTdCRCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldE1lc3NhZ2UgPSAobWVzc2FnZSwgdHlwZSkgPT4ge1xuICBpZiAoIXR5cGUpIHJldHVybiBmYWxzZTtcbiAgaWYgKG1lc3NhZ2UgJiYgdHlwZW9mIG1lc3NhZ2UgPT09ICdvYmplY3QnICYmIG1lc3NhZ2VbdHlwZV0pIHtcbiAgICByZXR1cm4gbWVzc2FnZVt0eXBlXTtcbiAgfVxuICByZXR1cm4gbWVzc2FnZTtcbn07XG5cbmNvbnN0IGlzRW1haWwgPSAoZW1haWwsIG1lc3NhZ2UpID0+IHtcbiAgY29uc3QgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgaWYgKCFyZS50ZXN0KGVtYWlsKSkge1xuICAgIGNvbnN0IGN1c3RvbU1lc3NhZ2UgPSBnZXRNZXNzYWdlKG1lc3NhZ2UsICdlbWFpbCcpO1xuICAgIHJldHVybiBjdXN0b21NZXNzYWdlIHx8ICdFbnRlciBhIHZhbGlkIGVtYWlsJztcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBpc1VybCA9IChzdHIsIG1lc3NhZ2UpID0+IHtcbiAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoXG4gICAgJ14oaHR0cHM/OlxcXFwvXFxcXC8pPycgKyAvLyBwcm90b2NvbFxuICAgICcoKChbYS16XFxcXGRdKFthLXpcXFxcZC1dKlthLXpcXFxcZF0pKilcXFxcLikrW2Etel17Mix9fCcgKyAvLyBkb21haW4gbmFtZVxuICAgICcoKFxcXFxkezEsM31cXFxcLil7M31cXFxcZHsxLDN9KSknICsgLy8gT1IgaXAgKHY0KSBhZGRyZXNzXG4gICAgJyhcXFxcOlxcXFxkKyk/KFxcXFwvWy1hLXpcXFxcZCVfLn4rXSopKicgKyAvLyBwb3J0IGFuZCBwYXRoXG4gICAgJyhcXFxcP1s7JmEtelxcXFxkJV8ufis9LV0qKT8nICsgLy8gcXVlcnkgc3RyaW5nXG4gICAgICAnKFxcXFwjWy1hLXpcXFxcZF9dKik/JCcsXG4gICAgJ2knXG4gICk7IC8vIGZyYWdtZW50IGxvY2F0b3JcbiAgaWYgKCFwYXR0ZXJuLnRlc3Qoc3RyKSkge1xuICAgIGNvbnN0IGN1c3RvbU1lc3NhZ2UgPSBnZXRNZXNzYWdlKG1lc3NhZ2UsICd1cmwnKTtcbiAgICByZXR1cm4gY3VzdG9tTWVzc2FnZSB8fCAnRW50ZXIgYSB2YWxpZCB1cmwnO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzRW1wdHkgPSAodmFsdWUpID0+IHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzUmVxdWlyZWQgPSAocmVxdWlyZWQsIGVtcHR5LCBtZXNzYWdlKSA9PiB7XG4gIGlmIChyZXF1aXJlZCAmJiBlbXB0eSkge1xuICAgIGNvbnN0IGN1c3RvbU1lc3NhZ2UgPSBnZXRNZXNzYWdlKG1lc3NhZ2UsICdyZXF1aXJlZCcpO1xuICAgIHJldHVybiBjdXN0b21NZXNzYWdlIHx8ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzZWxlY3RWYWxpZGF0aW9uID0gKHJlcXVpcmVkLCB2YWx1ZSwgcGxhY2Vob2xkZXIpID0+ICEodmFsdWUgPT09IHBsYWNlaG9sZGVyICYmIHJlcXVpcmVkKTtcblxuY29uc3QgY2hlY2tib3hWYWxpZGF0aW9uID0gKHZhbHVlcywgbWVzc2FnZSkgPT4ge1xuICBpZiAodmFsdWVzLmxlbmd0aCA8IDEpIHtcbiAgICByZXR1cm4gbWVzc2FnZSB8fCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9uID0gKHZhbHVlcywgZmllbGQpID0+IHtcbiAgY29uc3QgeyBpbnB1dHMsIGlzUmVxdWlyZWQ6IHJlcXVpcmVkLCBtaW5QYXNzd29yZFN0cmVuZ3RoLCBlcnJvck1lc3NhZ2UgfSA9IGZpZWxkIHx8IGZhbHNlO1xuICBjb25zdCB7IHJlcXVpcmVkOiByZXF1aXJlZE1zZywgbWlzbWF0Y2ggfSA9IGVycm9yTWVzc2FnZSB8fCBmYWxzZTtcblxuICAvLyBjaGVjayBpZiBmaWVsZHMgaXMgcmVxdWlyZWQgYW5kIGlzbid0IGVtcHR5XG4gIGNvbnN0IGlzSW5wdXRzRW1wdHkgPSB2YWx1ZXMgJiYgdmFsdWVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS52YWwgPT09ICcnKS5sZW5ndGg7XG5cbiAgaWYgKCgodmFsdWVzICYmIHZhbHVlcy5sZW5ndGggPT09IDApIHx8IGlzSW5wdXRzRW1wdHkgPT09IGlucHV0cy5sZW5ndGgpICYmIHJlcXVpcmVkKSB7XG4gICAgcmV0dXJuIHJlcXVpcmVkTXNnIHx8ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxuXG4gIC8vIGlmIHRoZXJlIGlzIHJlcGVhdCBwYXNzd29yZCBmaWVsZCA9PiBjaGVjayBpZiBtYXRjaFxuICBpZiAodmFsdWVzICYmIHZhbHVlcy5sZW5ndGggPT09IDIgJiYgaW5wdXRzICYmIGlucHV0cy5sZW5ndGggPT09IDIpIHtcbiAgICBpZiAodmFsdWVzWzFdLnZhbCAhPT0gdmFsdWVzWzBdLnZhbCkge1xuICAgICAgcmV0dXJuIG1pc21hdGNoIHx8ICdNaXNtYXRjaCc7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgZm9ybSBwYXNzd29yZCBzdHJlbmd0aFxuICAgIC8vIGlmIChtaW5QYXNzd29yZFN0cmVuZ3RoKSB7XG4gICAgLy8gICByZXR1cm4gZ2Zvcm1QYXNzd29yZFN0cmVuZ3RoKHZhbHVlc1swXS52YWwsIHZhbHVlc1sxXS52YWxbMV0pO1xuICAgIC8vIH1cbiAgfVxuXG4gIC8vIGNoZWNrIGZvcm0gcGFzc3dvcmQgc3RyZW5ndGhcbiAgLy8gaWYgKG1pblBhc3N3b3JkU3RyZW5ndGgpIHtcbiAgLy8gfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzRGF0ZSA9ICh2YWx1ZXMsIGZpZWxkKSA9PiB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodmFsdWVzW2ldKSB7XG4gICAgICBjb25zdCB7IHZhbCwgbGFiZWwgfSA9IHZhbHVlc1tpXTtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgaWYgKGxhYmVsID09PSAnTU0nKSB7XG4gICAgICAgICAgY29uc3QgbWF4ID0gMTI7XG4gICAgICAgICAgY29uc3QgbWluID0gMTtcbiAgICAgICAgICBjb25zdCBtYXhMZW5ndGggPSAyO1xuICAgICAgICAgIGlmICh2YWwubGVuZ3RoID4gbWF4TGVuZ3RoIHx8IHZhbCA8IG1pbiB8fCB2YWwgPiBtYXgpIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25baV0gPSB7XG4gICAgICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgICAgICBtZXNzYWdlOiAnRW50ZXIgYSB2YWxpZCBtb250aCcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChsYWJlbCA9PT0gJ0REJykge1xuICAgICAgICAgIGNvbnN0IG1heCA9IDMxO1xuICAgICAgICAgIGNvbnN0IG1pbiA9IDE7XG4gICAgICAgICAgY29uc3QgbWF4TGVuZ3RoID0gMjtcbiAgICAgICAgICBpZiAodmFsLmxlbmd0aCA+IG1heExlbmd0aCB8fCB2YWwgPCBtaW4gfHwgdmFsID4gbWF4KSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uW2ldID0ge1xuICAgICAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ0VudGVyIGEgdmFsaWQgZGF0ZScsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChsYWJlbCA9PT0gJ1lZWVknKSB7XG4gICAgICAgICAgY29uc3QgbWF4ID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpICsgMTtcbiAgICAgICAgICBjb25zdCBtaW4gPSAxOTIwO1xuICAgICAgICAgIGNvbnN0IG1heExlbmd0aCA9IDQ7XG4gICAgICAgICAgaWYgKHZhbC5sZW5ndGggPiBtYXhMZW5ndGggfHwgdmFsIDwgbWluIHx8IHZhbCA+IG1heCkge1xuICAgICAgICAgICAgdmFsaWRhdGlvbltpXSA9IHtcbiAgICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdFbnRlciBhIHZhbGlkIHllYXInLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbGlkYXRpb247XG59O1xuXG5jb25zdCB2YWxpZGF0ZUZpZWxkID0gKHZhbHVlLCBmaWVsZCkgPT4ge1xuICBjb25zdCB7IHR5cGUsIGlzUmVxdWlyZWQ6IHJlcXVpcmVkIH0gPSBmaWVsZDtcbiAgLy8gQ2hlY2sgZmlyc3QgaWYgcmVxdXJpZWQgY2hlY2tib3ggb3IgcmFkaW9cbiAgaWYgKCh0eXBlID09PSAnY2hlY2tib3gnIHx8IHR5cGUgPT09ICdyYWRpbycpICYmIHJlcXVpcmVkKSB7XG4gICAgcmV0dXJuIGNoZWNrYm94VmFsaWRhdGlvbih2YWx1ZSwgZmllbGQuZXJyb3JNZXNzYWdlKTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAncGFzc3dvcmQnKSB7XG4gICAgcmV0dXJuIHBhc3N3b3JkVmFsaWRhdGlvbih2YWx1ZSwgZmllbGQpO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgZW1wdHlcbiAgY29uc3QgZW1wdHkgPSBpc0VtcHR5KHZhbHVlKTtcbiAgbGV0IHZhbGlkYXRpb25NZXNzYWdlID0gJyc7XG4gIGNvbnN0IG1lc3NhZ2UgPSBmaWVsZCAmJiBmaWVsZC5lcnJvck1lc3NhZ2UgPyBmaWVsZC5lcnJvck1lc3NhZ2UgOiBmYWxzZTtcbiAgLy8gU2V0IHZhbGlkYXRpb24gbWVzc2FnZSBpZiByZXF1aXJlZFxuICB2YWxpZGF0aW9uTWVzc2FnZSA9IHJlcXVpcmVkID8gaXNSZXF1aXJlZChyZXF1aXJlZCwgZW1wdHksIG1lc3NhZ2UpIDogZmFsc2U7XG4gIC8vIFNldCBvdGhlciB2YWxpZGF0aW9uIG1lc3NhZ2VzXG4gIGlmICghdmFsaWRhdGlvbk1lc3NhZ2UgJiYgIWVtcHR5KSB7XG4gICAgaWYgKHR5cGUgPT09ICdlbWFpbCcpIHtcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlID0gaXNFbWFpbCh2YWx1ZSwgbWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnd2Vic2l0ZScpIHtcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlID0gaXNVcmwodmFsdWUsIG1lc3NhZ2UpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICBjb25zdCBpc1ZhbGlkID0gaXNEYXRlKHZhbHVlLCBmaWVsZCk7XG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSA9IGlzVmFsaWQubGVuZ3RoID4gMCA/IGlzVmFsaWQgOiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbGlkYXRpb25NZXNzYWdlO1xufTtcblxuZXhwb3J0IHsgaXNFbXB0eSwgc2VsZWN0VmFsaWRhdGlvbiwgY2hlY2tib3hWYWxpZGF0aW9uLCBpc1VybCwgaXNFbWFpbCwgaXNSZXF1aXJlZCwgdmFsaWRhdGVGaWVsZCB9O1xuXG4iXX0=