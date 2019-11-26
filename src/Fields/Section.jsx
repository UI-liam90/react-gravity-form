import React from 'react';

export default ({ field, hideField, styledComponents }) => {
  const { cssClass, width, label } = field;

  const { Box = 'div' } = styledComponents || false;

  return (
    <Box
      width={width}
      className={`form-field gsection ${cssClass}`}
      style={{ display: hideField ? 'none' : undefined }}
    >
      <h2 className="gsection_title" dangerouslySetInnerHTML={{ __html: label }} />
    </Box>
  );
};
