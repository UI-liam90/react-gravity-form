import React from "react";
import * as FormFields from "../Fields";

const frac2dec = fraction => {
	/* assumes fraction is in the form  1-1/2 or 1 1/2 */
	/* doesn't work on negative numbers */
	let fractionParts = fraction.split("-");
	if (fractionParts.length === 1) {
		/* try space as divider */
		fractionParts = fraction.split(" ");
	}

	if (fractionParts.length > 1 && fraction.indexOf("/") !== -1) {
		const integer = parseInt(fractionParts[0]);
		const decimalParts = fractionParts[1].split("/");
		const decimal = parseInt(decimalParts[0]) / parseInt(decimalParts[1]);

		return integer + decimal;
	}
	if (fraction.indexOf("/") !== -1) {
		const decimalParts = fraction.split("/");
		const decimal = parseInt(decimalParts[0]) / parseInt(decimalParts[1]);
		return decimal;
	}
	return parseInt(fraction);
};

const formatComponentName = string =>
	string.charAt(0).toUpperCase() + string.slice(1);
const formatWidthFromCss = cssClass => {
	if (!cssClass) return {};
	const widthStarts = cssClass.indexOf("[");
	const widthEnds = cssClass.indexOf("]");

	if (widthStarts === -1 || widthEnds === -1) {
		return {};
	}

	const width = cssClass
		.substring(widthStarts + 1, widthEnds)
		.split(",")
		.map(item => frac2dec(item.replace(/\s/g, "")));

	const cleanedCssClass = cssClass.replace(
		cssClass.substring(widthStarts, widthEnds + 1),
		""
	);

	return {
		width,
		cleanedCssClass
	};
};

const RenderField = ({
	field,
	formValues,
	submitFailed,
	submitSuccess,
	setTouched,
	touched,
	updateForm,
	pages,
	prevStep,
	nextStep,
	isNextDisabled,
	checkConditionalLogic,
	saveStateToHtmlField
}) => {
	const FormComponent = FormFields[formatComponentName(field.type)];
	const { cleanedCssClass, width } = formatWidthFromCss(field.cssClass);
	if (width) {
		field.cssClass = cleanedCssClass;
		field.width = width;
	}

	return (
		<FormComponent
			key={field.id}
			field={field}
			value={
				formValues[field.id] ? formValues[field.id].value : field.defaultValue
			}
			updateForm={(event, field) => updateForm(event, field)}
			validationMessage={
				formValues[field.id] ? formValues[field.id].valid : false
			}
			submitFailed={submitFailed}
			submitSuccess={submitSuccess}
			touched={touched[field.id]}
			setTouched={setTouched}
			pages={pages}
			prevStep={prevStep}
			nextStep={nextStep}
			isNextDisabled={isNextDisabled}
			hideField={formValues[field.id] ? formValues[field.id].hideField : false}
			saveStateToHtmlField={
				field.type === "html" && field.cssClass.indexOf("set-state") !== -1
					? { formValues, saveStateToHtmlField }
					: false
			}
		/>
	);
};

export default RenderField;
