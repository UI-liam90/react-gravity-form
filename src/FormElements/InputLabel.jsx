import React from 'react';

const InputLabel = ({
  formId, id, label, isRequired, labelPlacement, styledComponents,
}) => {
  const {
    Label = 'label',
  } = styledComponents || false;

  return (
    <Label
      htmlFor={`input_${formId}_${id}`}
      className={`gf-label ${labelPlacement}`}
      style={{ display: labelPlacement === 'hidden_label' ? 'none' : undefined }}
    >
      {label}
      {isRequired ? <abbr>*</abbr> : null}
    </Label>
  );
};

export default InputLabel;
