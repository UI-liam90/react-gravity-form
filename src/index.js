import React, { Component } from 'react';
import axios from 'axios';
import RenderFields from './FormElements/RenderFields';
import FormError from './FormElements/FormError';
import FormConfirmation from './FormElements/FormConfirmation';
import { validateField } from './Helpers/validation';
import Submit from './FormElements/Submit';

class GravityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitFailed: false,
      errorMessages: false,
      formValues: {},
      loading: true,
      submitting: false,
      submitSuccess: false,
      confirmationMessage: false,
      isValid: false,
      formData: {},
      touched: {},
      activePage: false,
      conditionFields: {},
      conditioanlIds: {},
    };
  }

  async componentDidMount() {
    const { formID, backendUrl } = this.props;
    this._isMounted = true;
    const form = await axios
      .get(`${backendUrl}/${formID}`)
      .then(response => response.data)
      .catch(() => false);

    if (form && this._isMounted) {
      const formValues = {};
      const conditionFields = [];
      const conditioanlIds = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const field of form.fields) {
        let value;
        if (field.type === 'checkbox') {
          value = field.choices.filter(choice => choice.isSelected).map(choice => choice.value);
        } else if (field.type === 'radio') {
          const preselected = field.choices.find(choice => choice.isSelected);
          value = preselected ? preselected.value : '';
        } else {
          value = field.defaultValue;
        }

        // grab all conditional logic fields
        if (field.conditionalLogic) {
          const tmpField = {
            id: field.id,
            conditionalLogic: field.conditionalLogic,
          };
          const ids = field.conditionalLogic.rules.map(item => item.fieldId);
          for (let i = 0; i < ids.length; i++) {
            const id = parseInt(ids[i]);
            if (conditioanlIds.indexOf(id) === -1) {
              conditioanlIds.push(id);
            }
          }
          conditionFields.push(tmpField);
        }

        formValues[field.id] = {
          valid: validateField(value, field.type, field.isRequired),
          value,
          label: field.label,
          pageNumber: field.pageNumber,
          cssClass: field.cssClass,
          isRequired: field.isRequired,
        };
      }
      // check condition logic
      for (let i = 0; i < conditionFields.length; i++) {
        formValues[conditionFields[i].id].hideField = this.checkConditionalLogic(
          conditionFields[i].conditionalLogic,
          formValues,
        );
      }

      this.setState({
        formData: form,
        formValues,
        activePage: form.pagination ? 1 : false,
        conditionFields,
        conditioanlIds,
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  setTouched = (id) => {
    this.setState({
      touched: { ...this.state.touched, [id]: true },
    });
  };

  updateFormHandler = (event, field) => {
    const { formValues, conditioanlIds, conditionFields } = this.state;
    let { id, type, isRequired } = field;
    // Set new value
    let value;
    if (field.type === 'checkbox') {
      const values = [...formValues[field.id].value];
      const index = values.indexOf(event.target.value);
      if (index > -1) {
        values.splice(index, 1);
      } else {
        values.push(event.target.value);
      }
      value = values;
    } else if (field.type == 'date') {
      const { subId, dateLabel } = field;
      const values = [...formValues[field.id].value];
      values[subId] = {
        val: event.target.value,
        label: dateLabel,
      };
      value = values;
    } else {
      value = event.target ? event.target.value : 'null';
    }
    // if field is IBAN
    if (type === 'text' && field.cssClass.indexOf('iban') > -1) {
      type = 'iban';
    }
    // Validate field
    const valid = validateField(value, type, isRequired, field);

    // if field ID is somewhere in conditional fields
    // recalculate all conditions
    if (conditioanlIds.indexOf(id) !== -1) {
      formValues[id].value = value;
      for (let i = 0; i < conditionFields.length; i++) {
        const { id } = conditionFields[i];
        const hide = this.checkConditionalLogic(conditionFields[i].conditionalLogic, formValues);
        formValues[id].hideField = hide;
        if (hide) {
          if (formValues[id].isRequired && hide) {
            formValues[id].value = '';
          }
          formValues[id].valid = !!formValues[id].isRequired;
        }
      }
    }

    this.setState({
      formValues: {
        ...formValues,
        [id]: {
          value,
          id,
          valid,
          label: field.label,
          pageNumber: field.pageNumber,
          cssClass: field.cssClass,
          isRequired: field.isRequired,
        },
      },
    });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({
      submitting: true,
      submitSuccess: false,
      submitFailed: false,
      confirmationMessage: false,
      errorMessages: false,
    });
    const { formID, backendUrl } = this.props;
    const data = new FormData(event.target);
    const response = await axios.post(`${backendUrl}/${formID}/submissions`, data);

    if (response.data && response.data.is_valid) {
      this.setState({
        submitting: false,
        submitSuccess: true,
        confirmationMessage: response.data.confirmation_message,
      });
    } else {
      this.setState({
        submitting: false,
        submitFailed: true,
        errorMessages: response.data.validation_messages,
      });
    }
  };

  nextStep = () => {
    const { activePage } = this.state;
    this.setState({
      activePage: activePage + 1,
    });
  };

  prevStep = (e) => {
    e.preventDefault();
    const { activePage } = this.state;
    this.setState({
      activePage: activePage - 1,
    });
  };

  checkConditionalLogic = (condition, fields = false) => {
    const { rules, actionType } = condition;
    if (!rules) return true;

    const formValues = fields || this.state.formValues;

    // show only if is selected "All fields" (it should be tweaked in future)
    // works only "show/hide when field is equal to"
    let hideField = actionType !== 'hide';
    const hideBasedOnRules = [];
    for (let i = 0; i < rules.length; i++) {
      const { fieldId, value } = rules[i];
      const conditionFieldValue = formValues[fieldId].value;

      const stringValue = Array.isArray(conditionFieldValue)
        ? conditionFieldValue.join('')
        : conditionFieldValue;
      if (stringValue && value === stringValue) {
        hideBasedOnRules[i] = actionType === 'hide';
      } else {
        hideBasedOnRules[i] = actionType !== 'hide';
      }
    }
    hideField = hideBasedOnRules.every(i => i === true);
    // formValues[id].hideField = hideField;
    // this.setState({ formValues });
    return hideField;
  };

  render() {
    const {
      formData,
      formValues,
      submitFailed,
      submitSuccess,
      touched,
      submitting,
      activePage,
    } = this.state;
    const {
      title, submitIcon, saveStateToHtmlField, styledComponents,
    } = this.props;
    const { Button, Loading, GFWrapper } = styledComponents || false;
    const { cssClass } = formData;

    const isDisabled = Object.keys(formValues).some(
      x => !formValues[x].hideField && formValues[x].valid,
    );
    const isNextDisabled = activePage
      ? Object.keys(formValues).some(
        x => formValues[x].pageNumber === activePage
            && !formValues[x].hideField
            && formValues[x].valid,
      )
      : false;

    return (
      <div
        className="form-wrapper"
        css={{ position: 'realtive' }}
        id={`gravity_form_${this.props.formID}`}
      >
        {formData.title ? null : Loading && <Loading isLoading />}

        {submitFailed && !submitSuccess && (
          <FormError
            fields={formValues}
            errors={this.state.errorMessages}
            errorMessage="There was a problem with your submission"
          />
        )}

        {submitSuccess && this.state.confirmationMessage && (
          <FormConfirmation confirmation={this.state.confirmationMessage} />
        )}

        {!submitSuccess && formData.fields ? (
          <form onSubmit={e => this.onSubmit(e)} className={cssClass} noValidate>
            {(formData.title || formData.description) && (
              <div>
                {formData.title && title ? <h3 className="form-title">{formData.title}</h3> : null}
                {formData.description ? (
                  <p className="form-description">{formData.description}</p>
                ) : null}
              </div>
            )}

            <div className="form-wrapper">
              <RenderFields
								styledComponents={styledComponents}
								fields={formData.fields}
								formValues={formValues}
								submitFailed={submitFailed}
								submitSuccess={submitSuccess}
								updateForm={this.updateFormHandler}
								touched={touched}
								setTouched={this.setTouched}
								pagination={formData.pagination}
								activePage={activePage}
								prevStep={this.prevStep}
								nextStep={this.nextStep}
								isNextDisabled={isNextDisabled}
								checkConditionalLogic={this.checkConditionalLogic}
								saveStateToHtmlField={saveStateToHtmlField}
								enableHoneypot={formData.enableHoneypot}
              />
              {(!formData.pagination
                || (formData.pagination && formData.pagination.pages.length === activePage)) && (
                <Submit
                  Button={Button}
                  Loading={Loading}
                  formData={formData}
                  submitIcon={submitIcon}
                  isDisabled={isDisabled}
                  submitting={submitting}
                  prevStep={this.prevStep}
                />
              )}
            </div>
          </form>
        ) : (
          ''
        )}
      </div>
    );
  }
}

GravityForm.defaultProps = {
  title: true,
  submitIcon: false,
  saveStateToHtmlField: false,
};

export default GravityForm;
