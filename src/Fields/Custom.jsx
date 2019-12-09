import React from 'react';

// eslint-disable-next-line
export default ({ field, styledComponents, component }) => {
  const { cssClass, width } = field;

  const { Box = 'div' } = styledComponents || false;
  // get component
  const Component = component;

  return Component ? (
    <Box width={width} className={`form-field ${cssClass}`}>
      <Component />
    </Box>
  ) : (
    ''
  );
};
