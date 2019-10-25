import React from "react";

export default ({ field, pages, nextStep, prevStep, isNextDisabled }) => {
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
		styledComponents
	} = field;

	const SButton =
		styledComponents && styledComponents["Button"]
			? styledComponents["Button"]
			: "button";

	const { Box = "div" } = styledComponents || false;

	return (
		<Box className="form-field">
			{pageNumber - 1 > 1 && (
				<SButton onClick={e => prevStep(e)}>{previousButton.text}</SButton>
			)}
			{pageNumber <= pages && (
				<SButton
					onClick={nextStep}
					color="pink"
					p="7px 20px"
					mt={20}
					disabled={isNextDisabled}
				>
					{nextButton.text}
				</SButton>
			)}
		</Box>
	);
};
