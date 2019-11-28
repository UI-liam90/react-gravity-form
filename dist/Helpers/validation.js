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
    if (values[1] && values[0] && values[1].val !== '' && values[1].val !== values[0].val) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZWxwZXJzL3ZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsiZ2V0TWVzc2FnZSIsIm1lc3NhZ2UiLCJ0eXBlIiwiaXNFbWFpbCIsImVtYWlsIiwicmUiLCJ0ZXN0IiwiY3VzdG9tTWVzc2FnZSIsImlzVXJsIiwic3RyIiwicGF0dGVybiIsIlJlZ0V4cCIsImlzRW1wdHkiLCJ2YWx1ZSIsImlzUmVxdWlyZWQiLCJyZXF1aXJlZCIsImVtcHR5Iiwic2VsZWN0VmFsaWRhdGlvbiIsInBsYWNlaG9sZGVyIiwiY2hlY2tib3hWYWxpZGF0aW9uIiwidmFsdWVzIiwibGVuZ3RoIiwicGFzc3dvcmRWYWxpZGF0aW9uIiwiZmllbGQiLCJpbnB1dHMiLCJlcnJvck1lc3NhZ2UiLCJyZXF1aXJlZE1zZyIsIm1pc21hdGNoIiwiaXNJbnB1dHNFbXB0eSIsImZpbHRlciIsIml0ZW0iLCJ2YWwiLCJpc0RhdGUiLCJ2YWxpZGF0aW9uIiwiaSIsImxhYmVsIiwibWF4IiwibWluIiwibWF4TGVuZ3RoIiwiaW5kZXgiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJ2YWxpZGF0ZUZpZWxkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJpc1ZhbGlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQVVDLElBQVYsRUFBbUI7QUFDcEMsTUFBSSxDQUFDQSxJQUFMLEVBQVcsT0FBTyxLQUFQOztBQUNYLE1BQUlELE9BQU8sSUFBSSxRQUFPQSxPQUFQLE1BQW1CLFFBQTlCLElBQTBDQSxPQUFPLENBQUNDLElBQUQsQ0FBckQsRUFBNkQ7QUFDM0QsV0FBT0QsT0FBTyxDQUFDQyxJQUFELENBQWQ7QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FORDs7QUFRQSxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFILE9BQVIsRUFBb0I7QUFDbEMsTUFBTUksRUFBRSxHQUFHLHdKQUFY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QUksS0FBSyxNQUFiLEVBQXFCO0FBQzFCLFVBQU0wQyxPQUFPLEdBQUdaLE1BQU0sQ0FBQ25CLEtBQUQsRUFBUVUsS0FBUixDQUF0QjtBQUNBb0IsTUFBQUEsaUJBQWlCLEdBQUdDLE9BQU8sQ0FBQ3ZCLE1BQVIsR0FBaUIsQ0FBakIsR0FBcUJ1QixPQUFyQixHQUErQixLQUFuRDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0QsaUJBQVA7QUFDRCxDQTdCRCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldE1lc3NhZ2UgPSAobWVzc2FnZSwgdHlwZSkgPT4ge1xuICBpZiAoIXR5cGUpIHJldHVybiBmYWxzZTtcbiAgaWYgKG1lc3NhZ2UgJiYgdHlwZW9mIG1lc3NhZ2UgPT09ICdvYmplY3QnICYmIG1lc3NhZ2VbdHlwZV0pIHtcbiAgICByZXR1cm4gbWVzc2FnZVt0eXBlXTtcbiAgfVxuICByZXR1cm4gbWVzc2FnZTtcbn07XG5cbmNvbnN0IGlzRW1haWwgPSAoZW1haWwsIG1lc3NhZ2UpID0+IHtcbiAgY29uc3QgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgaWYgKCFyZS50ZXN0KGVtYWlsKSkge1xuICAgIGNvbnN0IGN1c3RvbU1lc3NhZ2UgPSBnZXRNZXNzYWdlKG1lc3NhZ2UsICdlbWFpbCcpO1xuICAgIHJldHVybiBjdXN0b21NZXNzYWdlIHx8ICdFbnRlciBhIHZhbGlkIGVtYWlsJztcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBpc1VybCA9IChzdHIsIG1lc3NhZ2UpID0+IHtcbiAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoXG4gICAgJ14oaHR0cHM/OlxcXFwvXFxcXC8pPycgLy8gcHJvdG9jb2xcbiAgICArICcoKChbYS16XFxcXGRdKFthLXpcXFxcZC1dKlthLXpcXFxcZF0pKilcXFxcLikrW2Etel17Mix9fCcgLy8gZG9tYWluIG5hbWVcbiAgICArICcoKFxcXFxkezEsM31cXFxcLil7M31cXFxcZHsxLDN9KSknIC8vIE9SIGlwICh2NCkgYWRkcmVzc1xuICAgICsgJyhcXFxcOlxcXFxkKyk/KFxcXFwvWy1hLXpcXFxcZCVfLn4rXSopKicgLy8gcG9ydCBhbmQgcGF0aFxuICAgICsgJyhcXFxcP1s7JmEtelxcXFxkJV8ufis9LV0qKT8nIC8vIHF1ZXJ5IHN0cmluZ1xuICAgICAgKyAnKFxcXFwjWy1hLXpcXFxcZF9dKik/JCcsXG4gICAgJ2knLFxuICApOyAvLyBmcmFnbWVudCBsb2NhdG9yXG4gIGlmICghcGF0dGVybi50ZXN0KHN0cikpIHtcbiAgICBjb25zdCBjdXN0b21NZXNzYWdlID0gZ2V0TWVzc2FnZShtZXNzYWdlLCAndXJsJyk7XG4gICAgcmV0dXJuIGN1c3RvbU1lc3NhZ2UgfHwgJ0VudGVyIGEgdmFsaWQgdXJsJztcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBpc0VtcHR5ID0gKHZhbHVlKSA9PiB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBpc1JlcXVpcmVkID0gKHJlcXVpcmVkLCBlbXB0eSwgbWVzc2FnZSkgPT4ge1xuICBpZiAocmVxdWlyZWQgJiYgZW1wdHkpIHtcbiAgICBjb25zdCBjdXN0b21NZXNzYWdlID0gZ2V0TWVzc2FnZShtZXNzYWdlLCAncmVxdWlyZWQnKTtcbiAgICByZXR1cm4gY3VzdG9tTWVzc2FnZSB8fCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3Qgc2VsZWN0VmFsaWRhdGlvbiA9IChyZXF1aXJlZCwgdmFsdWUsIHBsYWNlaG9sZGVyKSA9PiAhKHZhbHVlID09PSBwbGFjZWhvbGRlciAmJiByZXF1aXJlZCk7XG5cbmNvbnN0IGNoZWNrYm94VmFsaWRhdGlvbiA9ICh2YWx1ZXMsIG1lc3NhZ2UpID0+IHtcbiAgaWYgKHZhbHVlcy5sZW5ndGggPCAxKSB7XG4gICAgcmV0dXJuIG1lc3NhZ2UgfHwgJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHBhc3N3b3JkVmFsaWRhdGlvbiA9ICh2YWx1ZXMsIGZpZWxkKSA9PiB7XG4gIGNvbnN0IHsgaW5wdXRzLCBpc1JlcXVpcmVkOiByZXF1aXJlZCwgZXJyb3JNZXNzYWdlIH0gPSBmaWVsZCB8fCBmYWxzZTtcbiAgY29uc3QgeyByZXF1aXJlZDogcmVxdWlyZWRNc2csIG1pc21hdGNoIH0gPSBlcnJvck1lc3NhZ2UgfHwgZmFsc2U7XG5cbiAgLy8gY2hlY2sgaWYgZmllbGRzIGlzIHJlcXVpcmVkIGFuZCBpc24ndCBlbXB0eVxuICBjb25zdCBpc0lucHV0c0VtcHR5ID0gdmFsdWVzICYmIHZhbHVlcy5maWx0ZXIoaXRlbSA9PiBpdGVtICYmIGl0ZW0udmFsID09PSAnJykubGVuZ3RoO1xuXG4gIGlmICgoKHZhbHVlcyAmJiB2YWx1ZXMubGVuZ3RoID09PSAwKSB8fCBpc0lucHV0c0VtcHR5ID09PSBpbnB1dHMubGVuZ3RoKSAmJiByZXF1aXJlZCkge1xuICAgIHJldHVybiByZXF1aXJlZE1zZyB8fCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cblxuICAvLyBpZiB0aGVyZSBpcyByZXBlYXQgcGFzc3dvcmQgZmllbGQgPT4gY2hlY2sgaWYgbWF0Y2hcbiAgaWYgKHZhbHVlcyAmJiB2YWx1ZXMubGVuZ3RoID09PSAyICYmIGlucHV0cyAmJiBpbnB1dHMubGVuZ3RoID09PSAyKSB7XG4gICAgaWYgKHZhbHVlc1sxXSAmJiB2YWx1ZXNbMF0gJiYgdmFsdWVzWzFdLnZhbCAhPT0gJycgJiYgdmFsdWVzWzFdLnZhbCAhPT0gdmFsdWVzWzBdLnZhbCkge1xuICAgICAgcmV0dXJuIG1pc21hdGNoIHx8ICdNaXNtYXRjaCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNEYXRlID0gKHZhbHVlcywgZmllbGQpID0+IHtcbiAgY29uc3QgdmFsaWRhdGlvbiA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh2YWx1ZXNbaV0pIHtcbiAgICAgIGNvbnN0IHsgdmFsLCBsYWJlbCB9ID0gdmFsdWVzW2ldO1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBpZiAobGFiZWwgPT09ICdNTScpIHtcbiAgICAgICAgICBjb25zdCBtYXggPSAxMjtcbiAgICAgICAgICBjb25zdCBtaW4gPSAxO1xuICAgICAgICAgIGNvbnN0IG1heExlbmd0aCA9IDI7XG4gICAgICAgICAgaWYgKHZhbC5sZW5ndGggPiBtYXhMZW5ndGggfHwgdmFsIDwgbWluIHx8IHZhbCA+IG1heCkge1xuICAgICAgICAgICAgdmFsaWRhdGlvbltpXSA9IHtcbiAgICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdFbnRlciBhIHZhbGlkIG1vbnRoJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGxhYmVsID09PSAnREQnKSB7XG4gICAgICAgICAgY29uc3QgbWF4ID0gMzE7XG4gICAgICAgICAgY29uc3QgbWluID0gMTtcbiAgICAgICAgICBjb25zdCBtYXhMZW5ndGggPSAyO1xuICAgICAgICAgIGlmICh2YWwubGVuZ3RoID4gbWF4TGVuZ3RoIHx8IHZhbCA8IG1pbiB8fCB2YWwgPiBtYXgpIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25baV0gPSB7XG4gICAgICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgICAgICBtZXNzYWdlOiAnRW50ZXIgYSB2YWxpZCBkYXRlJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGxhYmVsID09PSAnWVlZWScpIHtcbiAgICAgICAgICBjb25zdCBtYXggPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgKyAxO1xuICAgICAgICAgIGNvbnN0IG1pbiA9IDE5MjA7XG4gICAgICAgICAgY29uc3QgbWF4TGVuZ3RoID0gNDtcbiAgICAgICAgICBpZiAodmFsLmxlbmd0aCA+IG1heExlbmd0aCB8fCB2YWwgPCBtaW4gfHwgdmFsID4gbWF4KSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uW2ldID0ge1xuICAgICAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ0VudGVyIGEgdmFsaWQgeWVhcicsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsaWRhdGlvbjtcbn07XG5cbmNvbnN0IHZhbGlkYXRlRmllbGQgPSAodmFsdWUsIGZpZWxkKSA9PiB7XG4gIGNvbnN0IHsgdHlwZSwgaXNSZXF1aXJlZDogcmVxdWlyZWQgfSA9IGZpZWxkO1xuICAvLyBDaGVjayBmaXJzdCBpZiByZXF1cmllZCBjaGVja2JveCBvciByYWRpb1xuICBpZiAoKHR5cGUgPT09ICdjaGVja2JveCcgfHwgdHlwZSA9PT0gJ3JhZGlvJykgJiYgcmVxdWlyZWQpIHtcbiAgICByZXR1cm4gY2hlY2tib3hWYWxpZGF0aW9uKHZhbHVlLCBmaWVsZC5lcnJvck1lc3NhZ2UpO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICByZXR1cm4gcGFzc3dvcmRWYWxpZGF0aW9uKHZhbHVlLCBmaWVsZCk7XG4gIH1cblxuICAvLyBDaGVjayBpZiBlbXB0eVxuICBjb25zdCBlbXB0eSA9IGlzRW1wdHkodmFsdWUpO1xuICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2UgPSAnJztcbiAgY29uc3QgbWVzc2FnZSA9IGZpZWxkICYmIGZpZWxkLmVycm9yTWVzc2FnZSA/IGZpZWxkLmVycm9yTWVzc2FnZSA6IGZhbHNlO1xuICAvLyBTZXQgdmFsaWRhdGlvbiBtZXNzYWdlIGlmIHJlcXVpcmVkXG4gIHZhbGlkYXRpb25NZXNzYWdlID0gcmVxdWlyZWQgPyBpc1JlcXVpcmVkKHJlcXVpcmVkLCBlbXB0eSwgbWVzc2FnZSkgOiBmYWxzZTtcbiAgLy8gU2V0IG90aGVyIHZhbGlkYXRpb24gbWVzc2FnZXNcbiAgaWYgKCF2YWxpZGF0aW9uTWVzc2FnZSAmJiAhZW1wdHkpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2VtYWlsJykge1xuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgPSBpc0VtYWlsKHZhbHVlLCBtZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd3ZWJzaXRlJykge1xuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgPSBpc1VybCh2YWx1ZSwgbWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgIGNvbnN0IGlzVmFsaWQgPSBpc0RhdGUodmFsdWUsIGZpZWxkKTtcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlID0gaXNWYWxpZC5sZW5ndGggPiAwID8gaXNWYWxpZCA6IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsaWRhdGlvbk1lc3NhZ2U7XG59O1xuXG5leHBvcnQge1xuIGlzRW1wdHksIHNlbGVjdFZhbGlkYXRpb24sIGNoZWNrYm94VmFsaWRhdGlvbiwgaXNVcmwsIGlzRW1haWwsIGlzUmVxdWlyZWQsIHZhbGlkYXRlRmllbGQgXG59O1xuIl19