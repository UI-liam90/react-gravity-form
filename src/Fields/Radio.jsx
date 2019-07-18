import React, { Component } from 'react';
import { Box } from 'rebass';

function formatMoney(amount, decimalCount = 2, decimal = '.', thousands = ',') {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    const i = parseInt((amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))).toString();
    const j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign
      + (j ? i.substr(0, j) + thousands : '')
      + i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${thousands}`)
      + (decimalCount
        ? decimal
          + Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : '')
    );
  } catch (e) {
    console.log(e);
  }
}

class Radio extends Component {
  state = {
    otherValue: false,
    inputValue: false,
  };

  onFocus = (e) => {
    let { value } = e.target;
    const { otherValue, inputValue } = this.state;

    if (otherValue === value) {
      value = '';
    }
    this.otherRadio.click();
    this.otherRadio.checked = true;
    this.setState({ inputValue: value });
  };

  onBlur = (e) => {
    const { value } = e.target;
    if (value.replace(' ', '') == '') {
      this.setState({ inputValue: this.state.otherValue });
      this.otherRadio.checked = false;
    } else {
      this.setState({ inputValue: formatMoney(value) });
    }
  };

  onChange = (e) => {
    const { value } = e.target;

    this.setState({ inputValue: value });
  };

  setFocus = (e) => {
    this.otherChoise.focus();
  };

  render() {
    const {
      field,
      value,
      validationMessage,
      touched,
      setTouched,
      updateForm,
      hideField,
    } = this.props;
    const {
      id,
      type,
      label,
      cssClass,
      isRequired,
      choices,
      description,
      descriptionPlacement,
      labelPlacement,
      width,
      customName,
    } = field;
    const { inputValue } = this.state;

    return (
      <Box
        width={width}
        className={
          validationMessage && touched ? `form-field error ${cssClass}` : `form-field ${cssClass}`
        }
        style={{ display: hideField ? 'none' : undefined }}
      >
        <fieldset className="radios">
          <legend className={`group-label ${labelPlacement}`}>
            {label}
            {isRequired ? <abbr>*</abbr> : null}
          </legend>
          {descriptionPlacement === 'above' && description ? (
            description && <div className="description">{description}</div>
          ) : (
            <React.Fragment>
              {choices.map((choice, i) => (
                <div className={type} key={choice.value}>
                  <input
                    id={`input_${id}_${i}`}
                    type="radio"
                    name={customName || `input_${id}`}
                    value={choice.value}
                    checked={value === choice.value}
                    onChange={(event) => {
                      updateForm(event, field);
                      setTouched(id);
                    }}
                  />
                  <label htmlFor={`input_${id}_${i}`}>{choice.text}</label>
                </div>
              ))}
              {field.enableOtherChoice && (
                <div className={`${type} other-choise`}>
                  <input
                    id={`input_${id}_${choices.length}`}
                    type="radio"
                    name={`input_${id}`}
                    value={inputValue}
                    onChange={(event) => {
                      updateForm(event, field);
                      setTouched(id);
                    }}
                    ref={e => (this.otherRadio = e)}
                    onFocus={e => this.setFocus(e)}
                  />
                  <input
                    id={`input_${id}_${choices.length}_other`}
                    type="text"
                    value={inputValue}
                    onFocus={e => this.onFocus(e)}
                    onBlur={(e) => {
                      updateForm(e, field);
                      this.onBlur(e);
                    }}
                    onChange={(e) => {
                      // updateForm(e, field);
                      // setTouched(id);
                      this.onChange(e);
                    }}
                    ref={e => (this.otherChoise = e)}
                  />
                </div>
              )}
              {description && <div className="description">{description}</div>}
            </React.Fragment>
          )}
          {validationMessage && touched && (
            <span className="error-message" id={`error_${id}`}>
              {validationMessage}
            </span>
          )}
        </fieldset>
      </Box>
    );
  }
}

export default Radio;
