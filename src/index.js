import React, { useEffect, useState } from "react";
import { FormConfirmation, FormError, RenderFields, Submit } from "./FormElements";
import {
  checkConditionalLogic,
  fetchForm,
  nextStep,
  onSubmit,
  prevStep,
  setTouchedHandler,
  unsetError,
  updateFieldsValuesBasedOnEntry,
  updateFormHandler} from './Helpers/form'

import { validateField } from "./Helpers/validation";
import { equalShallow } from "./Helpers/utils";

function usePrevious(data){
  const ref = React.useRef();
  React.useEffect(()=>{
    ref.current = data
  }, [data])
  return ref.current
}

const GravityForm = (props) => {
  const [ submitFailed, setSubmitFailed ] = useState(false);
  const [ errorMessages, setErrorMessages ] = useState(false);
  const [ formValues, setFormValues ] = useState({});
  const [ loading, setLoading ] = useState(true);
  const [ submitting, setSubmitting ] = useState(false);
  const [ submitSuccess, setSubmitSuccess ] = useState(false);
  const [ confirmationMessage, setConfirmationMessage ] = useState(false);
  const [ isValid, setIsValid ] = useState(false);
  const [ formData, setFormData ] = useState({});
  const [ touched, setTouched ] = useState({});
  const [ activePage, setActivePage ] = useState(false);
  const [ conditionFields, setConditionFields ] = useState({});
  const [ conditioanlIds, setConditioanlIds ] = useState({});
  const [ isMultipart, setIsMultiPart ] = useState(false);
  const [ pageClicked, setPageClicked ] = useState(false);
  const [ showPageValidationMsg, setShowPageValidationMsg ] = useState(false);
  const [ pages, setPages ] = useState({});
  const [ populatedEntry, setPopulatedEntry ] = useState({});
  const [ isMounted, setIsMounted ] = useState(false);
  const [ wrapperRef, setWrapperRef ] = useState(null);

  const prevProps = usePrevious(props);

  useEffect(() => {
    const {
      backendUrl,
      populatedFields,
      populatedEntry,
      fetchOptions,
      initialPage,
      getParams,
    } = props;
      setIsMounted(true);
      let isMultipart = false;
      const queryString = getParams
        ? Object.keys(getParams)
          .map((key) => `${key}=${getParams[key]}`)
          .join("&")
        : "";
      const requestUrl = `${backendUrl}/${formID}${
        queryString ? `?${queryString}` : ""
      }`;

    fetchForm(
      initialPage,
      isMultipart,
      requestUrl,
      fetchOptions,
      setFormData,
      setFormValues,
      setActivePage,
      setConditionFields,
      setConditioanlIds,
      setPages,
      setIsMultiPart,
      populatedFields,
      populatedEntry,
      setPopulatedEntry,
      isMounted,
      checkConditionalLogic);

    if (initialPage && initialPage !== activePage) {
      setActivePage(initialPage);
    }

    return () => {
      setIsMounted(false);
    }

    const { populatedEntry: prevPopulatedEntry } = prevProps;

    if (
      populatedEntry &&
      prevPopulatedEntry &&
      !equalShallow(populatedEntry, prevPopulatedEntry)
    ) {
      updateFieldsValuesBasedOnEntry(populatedEntry, formValues, formData, setFormValues);
    }

    if (initialPage && initialPage !== activePage) {
      setActivePage(initialPage);
    }

    if (nextStep) {
      nextStep(() => nextStep);
    }
    if (prevStep) {
      prevStep(() => prevStep);
    }
    if (activePage) {
      activePage(activePage);
    }
  }, [isMounted])

  const setActivePageHandler = () => {
    // check if form is multipages
    if (!activePage) return false;
    const keys = errorMessages ? Object.keys(errorMessages) : false;
    if (keys && keys.length > 0) {
      const field = formData.fields.filter((item) => item.id == keys[0]);
      if (field && field.length > 0 && field[0].pageNumber) {
        setActivePage(field[0].pageNumber);
      }
    }
  };

  /**
   * Check if field is disabled (valid)
   */
  const isFieldDisabled = (formValues) => {

    const keys = Object.keys(formValues);
    const isDisabled = keys.some((x) => {
      // if pagination enabled
      if (formData && formData.pagination) {
        // check if field is valid and if page field belongs to was visible (hideField === false)
        const fieldPage = formValues[x].pageNumber;
        const curFieldPage = keys.filter(
          (key) =>
            formValues[key].type === "page" &&
            formValues[key].pageNumber == fieldPage
        );

        if (curFieldPage && curFieldPage.length > 0) {
          return (
            !formValues[x].hideField &&
            formValues[x].valid &&
            !formValues[curFieldPage[0]].hideField
          );
        }
      }

      return !formValues[x].hideField && formValues[x].valid;
    });
    return isDisabled;
  };

    const {
      title,
      formID,
      submitIcon,
      saveStateToHtmlField,
      styledComponents,
      customComponents,
      errorMessage,
      dropzoneText,
      loadingSpinner,
      onError,
    } = props;

    const {
      Button,
      Loading,
      FormError: SFormError,
      FormConfirmation: SFormConfirmation,
    } = styledComponents || false;

    const { cssClass } = formData;

    return (
      <div
        ref={(el) => setWrapperRef(el)}
        className="form-wrapper"
        css={{ position: "relative" }}
        id={`gravity_form_${formID}`}
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

        {submitSuccess && confirmationMessage && (
          <FormConfirmation
            confirmation={confirmationMessage}
            SFormConfirmation={SFormConfirmation}
          />
        )}

        {!submitSuccess && formData.fields ? (
          <form
            onSubmit={(e) =>
              onSubmit(
              e,
              props,
              wrapperRef,
              formValues,
              activePage,
              setShowPageValidationMsg,
              setSubmitting,
              setSubmitSuccess,
              setSubmitFailed,
              setTouched,
              setConfirmationMessage,
              setErrorMessages)}
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
                updateForm={(event, field) => updateFormHandler(field, event, formValues, setFormValues, conditioanlIds, conditionFields)}
                touched={touched}
                setTouched={(id) => setTouchedHandler(id, touched, setTouched)}
                pagination={formData.pagination}
                activePage={activePage}
                prevStep={(e) => prevStep(e, props, formValues, pages, activePage, setActivePage, setPageClicked)}
                nextStep={(e) => nextStep(e, props, pages, formValues, activePage, setActivePage, setPageClicked, setTouched, setShowPageValidationMsg)}
                checkConditionalLogic={(condition, fields) => checkConditionalLogic(condition, fields = false)}
                saveStateToHtmlField={saveStateToHtmlField}
                enableHoneypot={formData.enableHoneypot}
                errors={errorMessages}
                unsetError={(id) => unsetError(id, errorMessages)}
                dropzoneText={dropzoneText}
                pageClicked={pageClicked}
              />
              {(!formData.pagination ||
                (formData.pagination &&
                  formData.pagination.pages.length === activePage)) && (
                <Submit
                  Button={Button}
                  Loading={Loading}
                  formData={formData}
                  submitIcon={submitIcon}
                  submitting={submitting}
                  prevStep={prevStep}
                  loadingSpinner={loadingSpinner}
                />
              )}
            </div>
          </form>
        ) : (
          ""
        )}
      </div>
    );
}

GravityForm.defaultProps = {
  title: true,
  submitIcon: false,
  saveStateToHtmlField: false,
  jumpToConfirmation: true,
};

export { validateField, FormConfirmation, FormError, RenderFields, Submit };

export default GravityForm;
