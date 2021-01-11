import React from 'react';

import InputLabel from '../FormElements/InputLabel';

const postcodeApi = require('postcode-nl').promises;

export default ({
  formData,
  formValues,
  field,
  value,
  validationMessage,
  touched,
  setTouched,
  setErrorMessages,
  hideField,
  updateForm,
  styledComponents,
  error,
  unsetError,
  setFocusClass,
  cssClass,
  postcodeApiKey,
  ...props
}) => {
  const {
    id,
    formId,
    type,
    label,
    placeholder,
    isRequired,
    description,
    descriptionPlacement,
    labelPlacement,
    width,
    customName,
  } = field;
  const { Input = 'input', Label = 'label', Box = 'div' } = styledComponents || false;

  const getAddressByPostalCode = (postalCode) => {
    const options = {
      returnRateLimit: true,
      apiKey: postcodeApiKey,
    };
    const query = {
      postcode: postalCode,
    };
    return new Promise(((resolve, reject) => {
      postcodeApi
        .getAddresses(options, query)
        .then((resolved) => {
          resolve(resolved.result._embedded.addresses[0]);
        })
        .catch((error) => {
          reject(error);
        });
    }));
  };

  async function getAddress(
    event,
  ) {
    value = event.target ? event.target.value.toUpperCase() : null;
    let hasAddress;
    if (!hasAddress) {
      let response;
      let postalcodeError = 'Ongeldige postcode.';
      response = await getAddressByPostalCode(value).catch((err) => {
        formValues[id].valid = postalcodeError;
        setErrorMessages({
          [id]: postalcodeError,
        });
        hasAddress = false;
      });

      if (response) {
        hasAddress = true;
        updateForm(
          {
            target: {
              value,
            },
            street: response.street,
            city: response.city.label,
          },
          field,
        );
      } else {
        formValues[id].valid = postalcodeError;
        setErrorMessages({
          [id]: postalcodeError,
        });
      }
    } else {
      hasAddress = false;
    }
  }

  return (
    <Box
      width={width}
      className={
        (validationMessage && touched) || error
          ? `form-field error ${cssClass}`
          : `form-field ${cssClass}`
      }
      style={{ display: hideField ? 'none' : undefined }}
    >
      <div className={type}>
        <InputLabel
          formId={formId}
          id={id}
          label={label}
          labelPlacement={labelPlacement}
          isRequired={isRequired}
          styledComponent={styledComponents}
        />
        {descriptionPlacement === 'above' && description && (
          <div className="description">{description}</div>
        )}
        <Input
          id={`input_${formId}_${id}`}
          name={customName || `input_${id}`}
          type={type}
          value={!value ? '' : value}
          placeholder={placeholder}
          maxLength={6}
          required={isRequired}
          onChange={(event) => {
            updateForm(event, field);
            unsetError(id);
          }}
          onBlur={(event) => {
            updateForm(event, field);
            getAddress(event);
            setTouched(id);
            setFocusClass(value !== '');
          }}
          onFocus={() => setFocusClass(true)}
          aria-label={label}
          aria-describedby={`error_${formId}_${id}`}
          aria-invalid={(!!validationMessage && touched) || !!error}
        />
        {descriptionPlacement !== 'above' && description && <div className="description">{description}</div>}
        {((validationMessage && touched) || error) && (
          <span className="error-message" id={`error_${formId}_${id}`}>
            {validationMessage || error}
          </span>
        )}
      </div>
    </Box>
  );
};
