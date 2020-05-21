import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import RenderFields from "./FormElements/RenderFields";
import FormError from "./FormElements/FormError";
import FormConfirmation from "./FormElements/FormConfirmation";
import { validateField } from "./Helpers/validation";
import Submit from "./FormElements/Submit";

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
      isMultipart: false,
    };
  }

  async componentDidMount() {
    const {
      formID,
      backendUrl,
      populatedFields,
      populatedEntry,
      fetchOptions,
      initialPage,
      getParams,
    } = this.props;
    this._isMounted = true;
    let isMultipart = false;

    const queryString = getParams
      ? Object.keys(getParams)
          .map((key) => `${key}=${getParams[key]}`)
          .join("&")
      : "";
    const requestUrl = `${backendUrl}/${formID}${
      queryString ? `?${queryString}` : ""
    }`;

    const form = await fetch(requestUrl, fetchOptions)
      .then((resp) => resp.json())
      .then((response) => response)
      .catch(() => false);

    if (form && this._isMounted) {
      const formValues = {};
      const conditionFields = [];
      const conditioanlIds = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const field of form.fields) {
        let value;
        let hasPopulatedEntry = false;
        const hasPopulation =
          field.inputName &&
          populatedFields &&
          populatedFields[field.inputName];

        if (populatedEntry && populatedEntry[field.id]) {
          hasPopulatedEntry = true;
        } else if (populatedEntry && field.inputs) {
          field.inputs.some((input) => {
            if (populatedEntry[input.id]) {
              hasPopulatedEntry = true;
            }
          });
        }

        if (field.type === "checkbox") {
          value = field.choices
            .filter((choice) =>
              hasPopulation
                ? choice.value === populatedFields[field.inputName]
                : choice.isSelected
            )
            .map((choice) => choice.value);

          if (hasPopulatedEntry) {
            value = field.inputs
              .filter((choice) => populatedEntry[choice.id])
              .map((choice) => choice.label);
          }
        } else if (field.type === "radio") {
          if (hasPopulation) {
            value = populatedFields[field.inputName];
          } else {
            const preselected = field.choices.find(
              (choice) => choice.isSelected
            );
            value = preselected ? preselected.value : "";
          }
        } else if (field.type === "select") {
          const selectedOption = field.choices
            .filter((choice) =>
              hasPopulation
                ? choice.value === populatedFields[field.inputName]
                : choice.isSelected
            )
            .map((item) => ({ value: item.value, label: item.text }));
          value =
            selectedOption && selectedOption.length > 0
              ? selectedOption[0]
              : "";
        } else {
          value = hasPopulation
            ? populatedFields[field.inputName]
            : hasPopulatedEntry
            ? populatedEntry[field.id]
            : field.defaultValue;
          if (field.type === "fileupload") {
            isMultipart = true;
          }
        }

        // grab all conditional logic fields
        if (field.conditionalLogic) {
          const tmpField = {
            id: field.id,
            conditionalLogic: field.conditionalLogic,
          };
          const ids = field.conditionalLogic.rules.map((item) => item.fieldId);
          for (let i = 0; i < ids.length; i++) {
            const id = parseInt(ids[i]);
            if (conditioanlIds.indexOf(id) === -1) {
              conditioanlIds.push(id);
            }
          }
          conditionFields.push(tmpField);
        }

        formValues[field.id] = {
          valid: validateField(value, field),
          value,
          label: field.label,
          pageNumber: field.pageNumber,
          cssClass: field.cssClass,
          isRequired: field.isRequired,
        };
      }
      // check condition logic
      for (let i = 0; i < conditionFields.length; i++) {
        formValues[
          conditionFields[i].id
        ].hideField = this.checkConditionalLogic(
          conditionFields[i].conditionalLogic,
          formValues
        );
      }

      this.setState(
        {
          formData: form,
          formValues,
          activePage: initialPage || (form.pagination ? 1 : false),
          conditionFields,
          conditioanlIds,
          isMultipart,
        },
        () => {
          // pass state to parent component
          const { nextStep, prevStep, activePage } = this.props;
          if (nextStep) {
            nextStep(() => this.nextStep);
          }
          if (prevStep) {
            prevStep(() => this.prevStep);
          }
          if (activePage) {
            activePage(this.state.activePage);
          }
        }
      );
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

  unsetError = (id) => {
    const { errorMessages } = this.state;
    if (!errorMessages) return;

    if (errorMessages[id]) {
      delete errorMessages[id];
      this.setState({ errorMessages });
    }
  };

  updateFormHandler = (event, field) => {
    const { formValues, conditioanlIds, conditionFields } = this.state;
    let { id, type, isRequired } = field;
    // Set new value
    let value;

    if (field.type === "checkbox") {
      const values = [...formValues[field.id].value];
      const index = values.indexOf(event.target.value);
      if (index > -1) {
        values.splice(index, 1);
      } else {
        values.push(event.target.value);
      }
      value = values;
    } else if (field.type == "date" && field.dateType !== "datepicker") {
      const { subId, dateLabel } = field;
      const values = [...formValues[field.id].value];
      values[subId] = {
        val: event.target.value,
        label: dateLabel,
      };
      value = values;
    } else if (field.type == "consent") {
      value = event.target ? event.target.checked : "null";
    } else if (
      field.type === "password" ||
      (field.type === "email" && field.emailConfirmEnabled)
    ) {
      const { subId } = field;
      const values =
        formValues[field.id] && formValues[field.id].value
          ? [...formValues[field.id].value]
          : [];
      values[subId] = {
        val: event.target.value,
      };
      value = values;
    } else {
      value = event.target ? event.target.value : "null";
    }
    // if field is IBAN
    if (type === "text" && field.cssClass.indexOf("iban") > -1) {
      type = "iban";
    }

    // Validate field
    const valid = validateField(value, field);

    // if field ID is somewhere in conditional fields
    // recalculate all conditions
    if (conditioanlIds.indexOf(id) !== -1) {
      formValues[id].value = value;
      for (let i = 0; i < conditionFields.length; i++) {
        const { id } = conditionFields[i];
        const hide = this.checkConditionalLogic(
          conditionFields[i].conditionalLogic,
          formValues
        );
        formValues[id].hideField = hide;
        if (hide) {
          if (formValues[id].isRequired && hide) {
            formValues[id].value = "";
          }
          formValues[id].valid = !!formValues[id].isRequired;
        }
      }
    }

    this.setState(
      {
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
      },
      () => {
        // pass state to parent component
        const { onChange, onChangeField } = this.props;
        if (onChange) {
          onChange(this.state.formValues);
        }
        if (onChangeField) {
          onChangeField({
            [id]: {
              value,
              id,
              valid,
              label: field.label,
              pageNumber: field.pageNumber,
              cssClass: field.cssClass,
              isRequired: field.isRequired,
            },
          });
        }
      }
    );
  };

  scrollToConfirmation = () => {
    const rect = this.wrapperRef
      ? this.wrapperRef.getBoundingClientRect()
      : false;
    if (rect && window) {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({
        top: scrollTop + rect.top - 100,
      });
    }
  };

  onSubmit = async (event) => {
    const { onSubmit: customOnSubmit } = this.props;
    const formData = new FormData(event.target);

    event.preventDefault();

    if (customOnSubmit) {
      customOnSubmit(formData);
    } else {
      this.setState({
        submitting: true,
        submitSuccess: false,
        submitFailed: false,
        confirmationMessage: false,
        errorMessages: false,
      });
      const {
        formID,
        backendUrl,
        jumpToConfirmation,
        onSubmitSuccess,
        onError,
      } = this.props;
      const gfSubmissionUrl = backendUrl.substring(
        0,
        backendUrl.indexOf("/wp-json")
      );

      fetch(`${gfSubmissionUrl}/wp-json/gf/v2/forms/${formID}/submissions`, {
        method: "POST",
        body: formData,
      })
        .then((resp) => resp.json())
        .then((response) => {
          if (response && response.is_valid) {
            if (onSubmitSuccess) {
              const res = onSubmitSuccess(response);
              if (!res) {
                return false;
              }
            }
            const confirmationMessage = response.confirmation_message;
            const { type, link } = confirmationMessage || false;
            if (type && link && type === "redirect") {
              if (typeof window !== "undefined") {
                window.location.replace(link);
                return false;
              }
            }
            this.setState({
              submitting: false,
              submitSuccess: true,
              confirmationMessage: response.confirmation_message,
            });
            if (jumpToConfirmation) {
              this.scrollToConfirmation();
            }
          } else {
            throw {
              response,
            };
          }
        })
        .catch((error) => {
          const errorMessages =
            error && error.response && error.response.validation_messages
              ? error.response.validation_messages
              : "Something went wrong";

          if (onError) {
            onError(errorMessages);
            this.setState({
              submitting: false,
              submitFailed: true,
            });
          } else {
            this.setState({
              submitting: false,
              submitFailed: true,
              errorMessages,
            });
          }

          if (jumpToConfirmation) {
            this.scrollToConfirmation();
          }
        });
    }
  };

  nextStep = (e) => {
    e && e.preventDefault();
    const { activePage } = this.state;
    const { activePage: setActive } = this.props;

    setActive && setActive(activePage + 1);
    this.setState(
      {
        activePage: activePage + 1,
      },
      () => this.scrollToConfirmation()
    );
  };

  prevStep = (e) => {
    e && e.preventDefault();
    const { activePage } = this.state;
    const { activePage: setActive } = this.props;

    setActive && setActive(activePage - 1);
    this.setState(
      {
        activePage: activePage - 1,
      },
      () => this.scrollToConfirmation()
    );
  };

  checkConditionalLogic = (condition, fields = false) => {
    const { rules, actionType } = condition;
    if (!rules) return true;

    const formValues = fields || this.state.formValues;

    // show only if is selected "All fields" (it should be tweaked in future)
    // works only "show/hide when field is equal to"
    let hideField = actionType !== "hide";
    const hideBasedOnRules = [];
    for (let i = 0; i < rules.length; i++) {
      const { fieldId, value, operator } = rules[i];
      const conditionFieldValue =
        formValues[fieldId].value && formValues[fieldId].value.value
          ? formValues[fieldId].value.value
          : formValues[fieldId].value || false;

      const stringValue = Array.isArray(conditionFieldValue)
        ? conditionFieldValue.join("")
        : conditionFieldValue;

      // Check if comparision value is empty
      if (!value) {
        if (!stringValue && !value) {
          hideBasedOnRules[i] = actionType === "hide";
        } else {
          hideBasedOnRules[i] = actionType !== "hide";
        }
      } else if (stringValue && value == stringValue) {
        hideBasedOnRules[i] = actionType === "hide";
      } else if (stringValue && stringValue.includes(value)) {
        hideBasedOnRules[i] = actionType === "hide";
      } else {
        hideBasedOnRules[i] = actionType !== "hide";
      }

      // If operator is 'isnot' reverse value
      if (operator === "isnot") {
        hideBasedOnRules[i] = !hideBasedOnRules[i];
      }
    }

    hideField = hideBasedOnRules.every((i) => i === true);
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
      isMultipart,
    } = this.state;
    const {
      title,
      submitIcon,
      saveStateToHtmlField,
      styledComponents,
      customComponents,
      errorMessage,
      dropzoneText,
      loadingSpinner,
      onError,
    } = this.props;
    const { Button, Loading, GFWrapper = "div", FormError: SFormError } =
      styledComponents || false;

    const { cssClass } = formData;

    const isDisabled = Object.keys(formValues).some(
      (x) => !formValues[x].hideField && formValues[x].valid
    );
    const isNextDisabled = activePage
      ? Object.keys(formValues).some(
          (x) =>
            formValues[x].pageNumber === activePage &&
            !formValues[x].hideField &&
            formValues[x].valid
        )
      : false;

    return (
      <GFWrapper
        ref={(el) => (this.wrapperRef = el)}
        className="form-wrapper"
        css={{ position: "relative" }}
        id={`gravity_form_${this.props.formID}`}
      >
        {formData.title ? null : Loading && <Loading isLoading />}

        {submitFailed && !submitSuccess && !onError && (
          <FormError
            SFormError={SFormError || false}
            errorMessage={
              errorMessage || "There was a problem with your submission"
            }
          />
        )}

        {submitSuccess && this.state.confirmationMessage && (
          <FormConfirmation confirmation={this.state.confirmationMessage} />
        )}

        {!submitSuccess && formData.fields ? (
          <form
            onSubmit={(e) => this.onSubmit(e)}
            className={cssClass}
            encType={isMultipart ? "multipart/form-data" : undefined}
            noValidate
          >
            {(formData.title || formData.description) && (
              <div>
                {formData.title && title ? (
                  <h3 className="form-title">{formData.title}</h3>
                ) : null}
                {formData.description ? (
                  <p className="form-description">{formData.description}</p>
                ) : null}
              </div>
            )}

            <div className="form-wrapper">
              <RenderFields
                styledComponents={styledComponents}
                customComponents={customComponents}
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
                errors={this.state.errorMessages}
                unsetError={this.unsetError}
                dropzoneText={dropzoneText}
              />
              {(!formData.pagination ||
                (formData.pagination &&
                  formData.pagination.pages.length === activePage)) && (
                <Submit
                  Button={Button}
                  Loading={Loading}
                  formData={formData}
                  submitIcon={submitIcon}
                  isDisabled={isDisabled}
                  submitting={submitting}
                  prevStep={this.prevStep}
                  loadingSpinner={loadingSpinner}
                />
              )}
            </div>
          </form>
        ) : (
          ""
        )}
      </GFWrapper>
    );
  }
}

GravityForm.defaultProps = {
  title: true,
  submitIcon: false,
  saveStateToHtmlField: false,
  jumpToConfirmation: true,
};

export { validateField, FormConfirmation, FormError, RenderFields, Submit };

export default GravityForm;
