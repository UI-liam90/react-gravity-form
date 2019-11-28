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
      errorMessage = _ref.errorMessage;

  var _ref2 = errorMessage || false,
      requiredMsg = _ref2.required,
      mismatch = _ref2.mismatch; // check if fields is required and isn't empty


  var isInputsEmpty = values && values.filter(function (item) {
    return item && item.val === '';
  }).length;

  if ((values && values.length === 0 || isInputsEmpty === inputs.length) && required) {
    return requiredMsg || 'This field is required';
  } // if there is repeat password field => check if match


  if (values && values.length === 2 && inputs && inputs.length === 2) {
    if (values[1] && values[0] && values[1].val !== values[0].val) {
      return mismatch || 'Mismatch';
    }
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZWxwZXJzL3ZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsiZ2V0TWVzc2FnZSIsIm1lc3NhZ2UiLCJ0eXBlIiwiaXNFbWFpbCIsImVtYWlsIiwicmUiLCJ0ZXN0IiwiY3VzdG9tTWVzc2FnZSIsImlzVXJsIiwic3RyIiwicGF0dGVybiIsIlJlZ0V4cCIsImlzRW1wdHkiLCJ2YWx1ZSIsImlzUmVxdWlyZWQiLCJyZXF1aXJlZCIsImVtcHR5Iiwic2VsZWN0VmFsaWRhdGlvbiIsInBsYWNlaG9sZGVyIiwiY2hlY2tib3hWYWxpZGF0aW9uIiwidmFsdWVzIiwibGVuZ3RoIiwicGFzc3dvcmRWYWxpZGF0aW9uIiwiZmllbGQiLCJpbnB1dHMiLCJlcnJvck1lc3NhZ2UiLCJyZXF1aXJlZE1zZyIsIm1pc21hdGNoIiwiaXNJbnB1dHNFbXB0eSIsImZpbHRlciIsIml0ZW0iLCJ2YWwiLCJpc0RhdGUiLCJ2YWxpZGF0aW9uIiwiaSIsImxhYmVsIiwibWF4IiwibWluIiwibWF4TGVuZ3RoIiwiaW5kZXgiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJ2YWxpZGF0ZUZpZWxkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJpc1ZhbGlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQVVDLElBQVYsRUFBbUI7QUFDcEMsTUFBSSxDQUFDQSxJQUFMLEVBQVcsT0FBTyxLQUFQOztBQUNYLE1BQUlELE9BQU8sSUFBSSxRQUFPQSxPQUFQLE1BQW1CLFFBQTlCLElBQTBDQSxPQUFPLENBQUNDLElBQUQsQ0FBckQsRUFBNkQ7QUFDM0QsV0FBT0QsT0FBTyxDQUFDQyxJQUFELENBQWQ7QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FORDs7QUFRQSxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFILE9BQVIsRUFBb0I7QUFDbEMsTUFBTUksRUFBRSxHQUFHLHdKQUFY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O0FBQ0FvQixNQUFBQSxpQkFBaUIsR0FBR0MsT0FBTyxDQUFDdkIsTUFBUixHQUFpQixDQUFqQixHQUFxQnVCLE9BQXJCLEdBQStCLEtBQW5EO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPRCxpQkFBUDtBQUNELENBN0JEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0TWVzc2FnZSA9IChtZXNzYWdlLCB0eXBlKSA9PiB7XG4gIGlmICghdHlwZSkgcmV0dXJuIGZhbHNlO1xuICBpZiAobWVzc2FnZSAmJiB0eXBlb2YgbWVzc2FnZSA9PT0gJ29iamVjdCcgJiYgbWVzc2FnZVt0eXBlXSkge1xuICAgIHJldHVybiBtZXNzYWdlW3R5cGVdO1xuICB9XG4gIHJldHVybiBtZXNzYWdlO1xufTtcblxuY29uc3QgaXNFbWFpbCA9IChlbWFpbCwgbWVzc2FnZSkgPT4ge1xuICBjb25zdCByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICBpZiAoIXJlLnRlc3QoZW1haWwpKSB7XG4gICAgY29uc3QgY3VzdG9tTWVzc2FnZSA9IGdldE1lc3NhZ2UobWVzc2FnZSwgJ2VtYWlsJyk7XG4gICAgcmV0dXJuIGN1c3RvbU1lc3NhZ2UgfHwgJ0VudGVyIGEgdmFsaWQgZW1haWwnO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzVXJsID0gKHN0ciwgbWVzc2FnZSkgPT4ge1xuICBjb25zdCBwYXR0ZXJuID0gbmV3IFJlZ0V4cChcbiAgICAnXihodHRwcz86XFxcXC9cXFxcLyk/JyArIC8vIHByb3RvY29sXG4gICAgJygoKFthLXpcXFxcZF0oW2EtelxcXFxkLV0qW2EtelxcXFxkXSkqKVxcXFwuKStbYS16XXsyLH18JyArIC8vIGRvbWFpbiBuYW1lXG4gICAgJygoXFxcXGR7MSwzfVxcXFwuKXszfVxcXFxkezEsM30pKScgKyAvLyBPUiBpcCAodjQpIGFkZHJlc3NcbiAgICAnKFxcXFw6XFxcXGQrKT8oXFxcXC9bLWEtelxcXFxkJV8ufitdKikqJyArIC8vIHBvcnQgYW5kIHBhdGhcbiAgICAnKFxcXFw/WzsmYS16XFxcXGQlXy5+Kz0tXSopPycgKyAvLyBxdWVyeSBzdHJpbmdcbiAgICAgICcoXFxcXCNbLWEtelxcXFxkX10qKT8kJyxcbiAgICAnaSdcbiAgKTsgLy8gZnJhZ21lbnQgbG9jYXRvclxuICBpZiAoIXBhdHRlcm4udGVzdChzdHIpKSB7XG4gICAgY29uc3QgY3VzdG9tTWVzc2FnZSA9IGdldE1lc3NhZ2UobWVzc2FnZSwgJ3VybCcpO1xuICAgIHJldHVybiBjdXN0b21NZXNzYWdlIHx8ICdFbnRlciBhIHZhbGlkIHVybCc7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNFbXB0eSA9ICh2YWx1ZSkgPT4ge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNSZXF1aXJlZCA9IChyZXF1aXJlZCwgZW1wdHksIG1lc3NhZ2UpID0+IHtcbiAgaWYgKHJlcXVpcmVkICYmIGVtcHR5KSB7XG4gICAgY29uc3QgY3VzdG9tTWVzc2FnZSA9IGdldE1lc3NhZ2UobWVzc2FnZSwgJ3JlcXVpcmVkJyk7XG4gICAgcmV0dXJuIGN1c3RvbU1lc3NhZ2UgfHwgJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHNlbGVjdFZhbGlkYXRpb24gPSAocmVxdWlyZWQsIHZhbHVlLCBwbGFjZWhvbGRlcikgPT4gISh2YWx1ZSA9PT0gcGxhY2Vob2xkZXIgJiYgcmVxdWlyZWQpO1xuXG5jb25zdCBjaGVja2JveFZhbGlkYXRpb24gPSAodmFsdWVzLCBtZXNzYWdlKSA9PiB7XG4gIGlmICh2YWx1ZXMubGVuZ3RoIDwgMSkge1xuICAgIHJldHVybiBtZXNzYWdlIHx8ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBwYXNzd29yZFZhbGlkYXRpb24gPSAodmFsdWVzLCBmaWVsZCkgPT4ge1xuICBjb25zdCB7IGlucHV0cywgaXNSZXF1aXJlZDogcmVxdWlyZWQsIGVycm9yTWVzc2FnZSB9ID0gZmllbGQgfHwgZmFsc2U7XG4gIGNvbnN0IHsgcmVxdWlyZWQ6IHJlcXVpcmVkTXNnLCBtaXNtYXRjaCB9ID0gZXJyb3JNZXNzYWdlIHx8IGZhbHNlO1xuXG4gIC8vIGNoZWNrIGlmIGZpZWxkcyBpcyByZXF1aXJlZCBhbmQgaXNuJ3QgZW1wdHlcbiAgY29uc3QgaXNJbnB1dHNFbXB0eSA9IHZhbHVlcyAmJiB2YWx1ZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICYmIGl0ZW0udmFsID09PSAnJykubGVuZ3RoO1xuXG4gIGlmICgoKHZhbHVlcyAmJiB2YWx1ZXMubGVuZ3RoID09PSAwKSB8fCBpc0lucHV0c0VtcHR5ID09PSBpbnB1dHMubGVuZ3RoKSAmJiByZXF1aXJlZCkge1xuICAgIHJldHVybiByZXF1aXJlZE1zZyB8fCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cblxuICAvLyBpZiB0aGVyZSBpcyByZXBlYXQgcGFzc3dvcmQgZmllbGQgPT4gY2hlY2sgaWYgbWF0Y2hcbiAgaWYgKHZhbHVlcyAmJiB2YWx1ZXMubGVuZ3RoID09PSAyICYmIGlucHV0cyAmJiBpbnB1dHMubGVuZ3RoID09PSAyKSB7XG4gICAgaWYgKHZhbHVlc1sxXSAmJiB2YWx1ZXNbMF0gJiYgdmFsdWVzWzFdLnZhbCAhPT0gdmFsdWVzWzBdLnZhbCkge1xuICAgICAgcmV0dXJuIG1pc21hdGNoIHx8ICdNaXNtYXRjaCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNEYXRlID0gKHZhbHVlcywgZmllbGQpID0+IHtcbiAgY29uc3QgdmFsaWRhdGlvbiA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh2YWx1ZXNbaV0pIHtcbiAgICAgIGNvbnN0IHsgdmFsLCBsYWJlbCB9ID0gdmFsdWVzW2ldO1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBpZiAobGFiZWwgPT09ICdNTScpIHtcbiAgICAgICAgICBjb25zdCBtYXggPSAxMjtcbiAgICAgICAgICBjb25zdCBtaW4gPSAxO1xuICAgICAgICAgIGNvbnN0IG1heExlbmd0aCA9IDI7XG4gICAgICAgICAgaWYgKHZhbC5sZW5ndGggPiBtYXhMZW5ndGggfHwgdmFsIDwgbWluIHx8IHZhbCA+IG1heCkge1xuICAgICAgICAgICAgdmFsaWRhdGlvbltpXSA9IHtcbiAgICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdFbnRlciBhIHZhbGlkIG1vbnRoJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGxhYmVsID09PSAnREQnKSB7XG4gICAgICAgICAgY29uc3QgbWF4ID0gMzE7XG4gICAgICAgICAgY29uc3QgbWluID0gMTtcbiAgICAgICAgICBjb25zdCBtYXhMZW5ndGggPSAyO1xuICAgICAgICAgIGlmICh2YWwubGVuZ3RoID4gbWF4TGVuZ3RoIHx8IHZhbCA8IG1pbiB8fCB2YWwgPiBtYXgpIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25baV0gPSB7XG4gICAgICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgICAgICBtZXNzYWdlOiAnRW50ZXIgYSB2YWxpZCBkYXRlJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGxhYmVsID09PSAnWVlZWScpIHtcbiAgICAgICAgICBjb25zdCBtYXggPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgKyAxO1xuICAgICAgICAgIGNvbnN0IG1pbiA9IDE5MjA7XG4gICAgICAgICAgY29uc3QgbWF4TGVuZ3RoID0gNDtcbiAgICAgICAgICBpZiAodmFsLmxlbmd0aCA+IG1heExlbmd0aCB8fCB2YWwgPCBtaW4gfHwgdmFsID4gbWF4KSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uW2ldID0ge1xuICAgICAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ0VudGVyIGEgdmFsaWQgeWVhcicsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsaWRhdGlvbjtcbn07XG5cbmNvbnN0IHZhbGlkYXRlRmllbGQgPSAodmFsdWUsIGZpZWxkKSA9PiB7XG4gIGNvbnN0IHsgdHlwZSwgaXNSZXF1aXJlZDogcmVxdWlyZWQgfSA9IGZpZWxkO1xuICAvLyBDaGVjayBmaXJzdCBpZiByZXF1cmllZCBjaGVja2JveCBvciByYWRpb1xuICBpZiAoKHR5cGUgPT09ICdjaGVja2JveCcgfHwgdHlwZSA9PT0gJ3JhZGlvJykgJiYgcmVxdWlyZWQpIHtcbiAgICByZXR1cm4gY2hlY2tib3hWYWxpZGF0aW9uKHZhbHVlLCBmaWVsZC5lcnJvck1lc3NhZ2UpO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICByZXR1cm4gcGFzc3dvcmRWYWxpZGF0aW9uKHZhbHVlLCBmaWVsZCk7XG4gIH1cblxuICAvLyBDaGVjayBpZiBlbXB0eVxuICBjb25zdCBlbXB0eSA9IGlzRW1wdHkodmFsdWUpO1xuICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2UgPSAnJztcbiAgY29uc3QgbWVzc2FnZSA9IGZpZWxkICYmIGZpZWxkLmVycm9yTWVzc2FnZSA/IGZpZWxkLmVycm9yTWVzc2FnZSA6IGZhbHNlO1xuICAvLyBTZXQgdmFsaWRhdGlvbiBtZXNzYWdlIGlmIHJlcXVpcmVkXG4gIHZhbGlkYXRpb25NZXNzYWdlID0gcmVxdWlyZWQgPyBpc1JlcXVpcmVkKHJlcXVpcmVkLCBlbXB0eSwgbWVzc2FnZSkgOiBmYWxzZTtcbiAgLy8gU2V0IG90aGVyIHZhbGlkYXRpb24gbWVzc2FnZXNcbiAgaWYgKCF2YWxpZGF0aW9uTWVzc2FnZSAmJiAhZW1wdHkpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2VtYWlsJykge1xuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgPSBpc0VtYWlsKHZhbHVlLCBtZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd3ZWJzaXRlJykge1xuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgPSBpc1VybCh2YWx1ZSwgbWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgIGNvbnN0IGlzVmFsaWQgPSBpc0RhdGUodmFsdWUsIGZpZWxkKTtcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlID0gaXNWYWxpZC5sZW5ndGggPiAwID8gaXNWYWxpZCA6IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsaWRhdGlvbk1lc3NhZ2U7XG59O1xuXG5leHBvcnQgeyBpc0VtcHR5LCBzZWxlY3RWYWxpZGF0aW9uLCBjaGVja2JveFZhbGlkYXRpb24sIGlzVXJsLCBpc0VtYWlsLCBpc1JlcXVpcmVkLCB2YWxpZGF0ZUZpZWxkIH07XG4iXX0=