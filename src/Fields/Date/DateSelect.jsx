import React from 'react';
import ReactSelect from 'react-select';

export default ({
  startDate,
  defaultProps,
}) => {

  const {
    field,
    value,
    validationMessage,
    touched,
    setTouched,
    updateForm,
    formattedInputs,
    error,
    unsetError,
    setFocusClass,
    setDate,
  } = defaultProps;

  const {
    id, isRequired, formId, type, customName,
  } = field;

  const RSelect = ReactSelect || 'select';

  const getNumberDropdown = (selected_value, start_number, end_number) => {
    const options = [];
    const increment = start_number < end_number ? 1 : -1;
    for (let i = start_number; i != end_number + increment; i += increment) {
      options.push({
        value: i,
        label: i,
        selected: parseInt(i) === parseInt(selected_value),
      });
    }
    return options;
  };

  const handleChange = (value, field, index) => {
    const tmp = startDate || [];
    const key = index === 0 ? 2 : index === 2 ? 0 : 1;
    tmp[key] = value.value;

    setDate(tmp);

    const event = {
      target: {
        value: value.value,
      },
    };
    updateForm(event, field);
  };

  const getValueByIndex = (index) => {
    if (!startDate) return;

    const i = index === 0 ? 2 : index === 1 ? 1 : 0;

    return startDate[i]
      ? { value: startDate[i], label: startDate[i] }
      : undefined;
  };

  return (
    <>
      {formattedInputs
      && formattedInputs.map((input, index) => (
        <div key={input.id} className="gfield_date_dropdown">
          <RSelect
            required={isRequired}
            placeholder={input.placeholder}
            options={
              index === 0
                ? getNumberDropdown(1, 1, 31)
                : index === 1
                  ? getNumberDropdown(3, 1, 12)
                  : getNumberDropdown(
                    0,
                    1920,
                    new Date().getFullYear(),
                  )
            }
            value={getValueByIndex(index)}
            id={`input_${formId}_${id}_${index + 1}`}
            name={customName || `input_${id}[]`}
            onBlur={(event) => {
              const value = getValueByIndex(index);
              if (!value) {
                const tmpState = {
                  ...field,
                  subId: index,
                  dateLabel: input.label,
                };
                handleChange({ value: '' }, tmpState, index);
              }
              setTouched(id);
              unsetError(id);
              setFocusClass(input.value !== '');
            }}
            onChange={(option) => {
              const tmpState = {
                ...field,
                subId: index,
                dateLabel: input.label,
              };
              handleChange(option, tmpState, index);
              unsetError(id);
            }}
            onFocus={() => setFocusClass(true)}
          />
        </div>
      ))}
      {((validationMessage && touched) || error) && (
        <span className="error-message" id={`error_${formId}_${id}`}>
          {validationMessage || error}
        </span>
      )}
    </>
  );
};
