const isEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isUrl = (str) => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' // protocol
    + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' // domain name
    + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
    + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port and path
    + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
      + '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator
  return !!pattern.test(str);
};

const isEmpty = (value) => {
  if (!value) {
    return true;
  }
  return false;
};

const isRequired = (required, empty) => {
  if (required && empty) {
    return 'This field is required';
  }
  return false;
};

const selectValidation = (required, value, placeholder) => !(value === placeholder && required);

const checkboxValidation = (values) => {
  if (values.length < 1) {
    return 'This field is required';
  }
  return false;
};

const isDate = (values, field) => {
  const validation = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i]) {
      const { val, label } = values[i];
      if (val) {
        if (label === 'MM') {
          const max = 12;
          const min = 1;
          const maxLength = 2;
          if (val.length > maxLength || val < min || val > max) {
            validation[i] = {
              index: i,
              message: 'Enter a valid month',
            };
          }
        } else if (label === 'DD') {
          const max = 31;
          const min = 1;
          const maxLength = 2;
          if (val.length > maxLength || val < min || val > max) {
            validation[i] = {
              index: i,
              message: 'Enter a valid date',
            };
          }
        } else if (label === 'YYYY') {
          const max = new Date().getFullYear() + 1;
          const min = 1920;
          const maxLength = 4;
          if (val.length > maxLength || val < min || val > max) {
            validation[i] = {
              index: i,
              message: 'Enter a valid year',
            };
          }
        }
      }
    }
  }
  return validation;
};

const validateField = (value, type, required, field) => {
  // Check first if requried checkbox or radio
  if ((type === 'checkbox' || type === 'radio') && required) {
    return checkboxValidation(value);
  }
  // Check if empty
  const empty = isEmpty(value);
  let validationMessage = '';
  // Set validation message if required
  validationMessage = required ? isRequired(required, empty) : false;
  // Set other validation messages
  if (!validationMessage && !empty) {
    if (type == 'email') {
      validationMessage = isEmail(value) ? false : 'Enter a valid email';
    } else if (type == 'website') {
      validationMessage = isUrl(value) ? false : 'Enter a valid url';
    } else if (type == 'date') {
      const isValid = isDate(value, field);
      validationMessage = isValid.length > 0 ? isValid : false;
    }
  }
  return validationMessage;
};

export {
  isEmpty, selectValidation, checkboxValidation, isUrl, isEmail, isRequired, validateField,
};
