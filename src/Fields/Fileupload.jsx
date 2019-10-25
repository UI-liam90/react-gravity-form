import React, { Component } from "react";

class Fileupload extends Component {
	state = {
		selectedFile: null,
		uploadFileText: "No file chosen"
	};

	inputFile = React.createRef();

	onChangeHandler = event => {
		this.setState({
			selectedFile: event.target.files[0],
			uploadFileText: event.target.files[0]
				? event.target.files[0].name
				: "No file chosen"
		});
	};

	prepareAllowedTypes = types => {
		let accept = types.split(",");
		accept = accept.map(str => `.${str.replace(/\s/g, "")}`).join(", ");
		return accept;
	};

	onButtonClickHandler = () => {
		this.inputFile.current.click();
	};

	render() {
		const { selectedFile, uploadFileText } = this.state;
		const {
			field,
			value,
			validationMessage,
			touched,
			setTouched,
			hideField,
			updateForm,
			formID,
			fieldError,
			styledComponents
		} = this.props;
		const {
			id,
			type,
			label,
			cssClass,
			isRequired,
			description,
			descriptionPlacement,
			labelPlacement,
			width,
			allowedExtensions
		} = field;
		const {
			Button = "button",
			Label = "label",
			FileWrapper = "div",
			Box = "div"
		} = styledComponents || false;
		return (
			<Box
				width={width}
				className={
					validationMessage && touched
						? `form-field error ${cssClass}`
						: `form-field ${cssClass}`
				}
				style={{ display: hideField ? "none" : undefined }}
			>
				<FileWrapper className={type}>
					<Label
						htmlFor={`input_${formID}_${id}`}
						className={`gf-label ${labelPlacement}`}
					>
						{label}
						{isRequired ? <abbr>*</abbr> : null}
					</Label>
					{descriptionPlacement === "above" && description ? (
						description && <div className="description">{description}</div>
					) : (
						<React.Fragment>
							<input
								id={`input_${formID}_${id}`}
								name={`input_${id}`}
								type="file"
								required={isRequired}
								ref={this.inputFile}
								onChange={event => {
									this.onChangeHandler(event);
									updateForm(event, field);
									setTouched(id);
								}}
								onBlur={event => {
									updateForm(event, field);
									setTouched(id);
								}}
								accept={
									this.prepareAllowedTypes(allowedExtensions) || undefined
								}
								aria-label={label}
								aria-describedby={`error_${formID}_${id}`}
								aria-invalid={!!validationMessage}
								hidden="hidden"
							/>
							<div
								aria-pressed="false"
								tabIndex="0"
								role="button"
								className="fileUpload"
								onClick={this.onButtonClickHandler}
							>
								<Button color="yellow" tabIndex="-1" type="button">
									Choose a file
								</Button>
								<span>{uploadFileText}</span>
							</div>

							{description && <div className="description">{description}</div>}
						</React.Fragment>
					)}
					{validationMessage && touched && (
						<span className="error-message" id={`error_${id}`}>
							{validationMessage}
						</span>
					)}
					{fieldError && (
						<span className="error-message" id={`error_${formID}_${id}`}>
							{fieldError}
						</span>
					)}
				</FileWrapper>
			</Box>
		);
	}
}

export default Fileupload;
