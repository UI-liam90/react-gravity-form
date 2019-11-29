import React, { Component } from 'react';

class Fileupload extends Component {
  state = {
    imagePreviewUrl: null,
    selectedFile: null,
    uploadFileText: 'No file chosen',
  };

  inputFile = React.createRef();

  onChangeHandler = (event) => {
    const { hasPreview, allowedExtensions } = this.props.field;
    this.setState({
      imagePreviewUrl: null,
      selectedFile: event.target.files[0],
      uploadFileText: event.target.files[0] ? event.target.files[0].name : 'No file chosen',
    });

    if (hasPreview && event.target && event.target.files[0]) {
      // check file type
      const extension = event.target.files[0].name
        .split('.')
        .pop()
        .toLowerCase(); // file extension from input file
      const isSuccess = allowedExtensions.indexOf(extension) > -1; // is extension in acceptable types
      if (isSuccess) {
        const reader = new FileReader();

        reader.onloadend = () => {
          this.setState({
            imagePreviewUrl: reader.result,
          });
        };

        reader.readAsDataURL(event.target.files[0]);
      }
    }
  };

  removeFilePreview = () => {
    this.setState({ imagePreviewUrl: null, selectedFile: null });
  };

  prepareAllowedTypes = (types) => {
    let accept = types.split(',');
    accept = accept.map(str => `.${str.replace(/\s/g, '')}`).join(', ');
    return accept;
  };

  onButtonClickHandler = () => {
    this.inputFile.current.click();
  };

  render() {
    const { selectedFile, uploadFileText, imagePreviewUrl } = this.state;
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
      styledComponents,
      error,
      unsetError,
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
      allowedExtensions,
      buttonText,
      hasPreview,
    } = field;
    const {
 Button = 'button', Label = 'label', FileWrapper = 'div', Box = 'div' 
} =      styledComponents || false;
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
        <FileWrapper className={type}>
          <Label htmlFor={`input_${formID}_${id}`} className={`gf-label ${labelPlacement}`}>
            {label}
            {isRequired ? <abbr>*</abbr> : null}
          </Label>
          {descriptionPlacement === 'above' && description ? (
            description && <div className="description">{description}</div>
          ) : (
            <React.Fragment>
              <input
                id={`input_${formID}_${id}`}
                name={`input_${id}`}
                type="file"
                required={isRequired}
                ref={this.inputFile}
                onChange={(event) => {
                  this.onChangeHandler(event);
                  updateForm(event, field);
                  setTouched(id);
                  unsetError(id);
                }}
                onBlur={(event) => {
                  updateForm(event, field);
                  setTouched(id);
                }}
                accept={this.prepareAllowedTypes(allowedExtensions) || undefined}
                aria-label={label}
                aria-describedby={`error_${formID}_${id}`}
                aria-invalid={!!validationMessage || !!error}
                hidden="hidden"
              />
              {hasPreview && (
                <div
                  className="file-preview"
                  style={
                    selectedFile && imagePreviewUrl
                      ? { backgroundImage: `url(${imagePreviewUrl})` }
                      : undefined
                  }
                >
                  {selectedFile && imagePreviewUrl && (
                    <button
                      type="button"
                      className="remove-file"
                      onClick={() => this.removeFilePreview()}
                    />
                  )}
                </div>
              )}
              <div
                aria-pressed="false"
                tabIndex="0"
                role="button"
                className="fileUpload"
                onClick={this.onButtonClickHandler}
              >
                <Button color="yellow" tabIndex="-1" type="button">
                  {buttonText || 'Choose a file'}
                </Button>
                <span>{uploadFileText}</span>
              </div>

              {description && <div className="description">{description}</div>}
            </React.Fragment>
          )}
          {((validationMessage && touched) || error) && (
            <span className="error-message" id={`error_${id}`}>
              {validationMessage || error}
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
