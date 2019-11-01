import React from 'react';

export default ({
  field, pages, nextStep, prevStep, isNextDisabled, styledComponents,
}) => {
  const {
    id,
    type,
    label,
    placeholder,
    isRequired,
    maxLength,
    description,
    descriptionPlacement,
    labelPlacement,
    cssClass,
    width,
    nextButton,
    previousButton,
    pageNumber,
  } = field;

  const { Box = 'div', Button = 'button' } = styledComponents || false;

  return (
    <Box className="form-field">
      {pageNumber - 1 > 1 && (
        <Button mr={10} onClick={e => prevStep(e)}>
          {previousButton.text}
        </Button>
      )}
      {pageNumber <= pages && (
        <Button
          onClick={e => nextStep(e)}
          color="pink"
          p="7px 20px"
          mt={20}
          disabled={isNextDisabled}
        >
          {nextButton.text}
        </Button>
      )}
    </Box>
  );
};
