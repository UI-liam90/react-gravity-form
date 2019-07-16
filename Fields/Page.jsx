import React from 'react';
import { Box } from 'rebass';
import { Button } from '../../styles';

export default ({
  field, pages, nextStep, prevStep, isNextDisabled,
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

  return (
    <Box className="form-field">
      {pageNumber - 1 > 1 && <Button onClick={e => prevStep(e)}>{previousButton.text}</Button>}
      {pageNumber <= pages && (
        <Button
          type="button"
          onClick={nextStep}
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
