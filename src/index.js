import React, { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import {
  FormConfirmation, FormError, RenderFields, Submit,
} from './FormElements';

import {
  checkConditionalLogic,
  fetchForm,
  forceValidationOfCurrentPage,
  nextStep,
  prevStep, scrollToConfirmation,
  setTouchedHandler,
  unsetError,
  updateFieldsValuesBasedOnEntry,
  updateFormHandler,
  usePrevious,
} from './Helpers/form';

import { validateField } from './Helpers/validation';
import { equalShallow } from './Helpers/utils';

const GravityForm = (props) => {
  const [submitFailed, setSubmitFailed] = useState(false);
  const [errorMessages, setErrorMessages] = useState(false);
  const [formValues, setFormValues] = useState({});
  // const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState(false);
  // const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState({});
  const [touched, setTouched] = useState({});
  const [activePage, setActivePage] = useState(false);
  const [conditionFields, setConditionFields] = useState({});
  const [conditionalIds, setConditionalIds] = useState({});
  const [isMultipart, setIsMultiPart] = useState(false);
  const [pageClicked, setPageClicked] = useState(false);
  const [showPageValidationMsg, setShowPageValidationMsg] = useState(false);
  const [pages, setPages] = useState({});
  const [populatedEntry, setPopulatedEntry] = useState({});
  const [isMounted, setIsMounted] = useState(false);
  const [wrapperRef, setWrapperRef] = useState(null);

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
    const isMultipart = false;
    const queryString = getParams
      ? Object.keys(getParams)
        .map(key => `${key}=${getParams[key]}`)
        .join('&')
      : '';
    const requestUrl = `${backendUrl}/${formID}${
      queryString ? `?${queryString}` : ''
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
      setConditionalIds,
      setPages,
      setIsMultiPart,
      populatedFields,
      populatedEntry,
      setPopulatedEntry,
      isMounted,
      checkConditionalLogic,
    );

    if (initialPage && initialPage !== activePage) {
      setActivePage(initialPage);
    }

    return () => {
      setIsMounted(false);
    };

    const { populatedEntry: prevPopulatedEntry } = prevProps;

    if (
      populatedEntry
      && prevPopulatedEntry
      && !equalShallow(populatedEntry, prevPopulatedEntry)
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
  }, [isMounted, wrapperRef, confirmationMessage]);

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

  const onSubmit = async (event) => {
    const { onSubmit: customOnSubmit } = props;
    const formData = new FormData(event.target);

    event.preventDefault();

    const isPageValid = forceValidationOfCurrentPage(activePage, formValues, setShowPageValidationMsg, setTouched);
    if (!isPageValid) return false;

    if (customOnSubmit) {
      customOnSubmit(formData);
    } else {
      setSubmitting(true);
      setSubmitSuccess(false);
      setSubmitFailed(false);
      setConfirmationMessage(false);
      setErrorMessages(false);

      const {
        formID,
        backendUrl,
        jumpToConfirmation,
        onSubmitSuccess,
        onError,
      } = props;
      const gfSubmissionUrl = backendUrl.substring(
        0,
        backendUrl.indexOf('/wp-json'),
      );

      fetch(`${gfSubmissionUrl}/wp-json/gf/v2/forms/${formID}/submissions`, {
        method: 'POST',
        body: formData,
      })
        .then(resp => resp.json())
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
            if (type && link && type === 'redirect') {
              if (typeof window !== 'undefined') {
                window.location.replace(link);
                return false;
              }
            }
            setSubmitting(false);
            setSubmitSuccess(true);
            setConfirmationMessage(confirmationMessage);

            if (jumpToConfirmation) {
              scrollToConfirmation(props, wrapperRef);
            }
          } else {
            throw {
              response,
            };
          }
        })
        .catch((error) => {
          const errorMessages = error && error.response && error.response.validation_messages
            ? error.response.validation_messages
            : 'Something went wrong';

          if (onError) {
            onError(errorMessages);
            setSubmitting(false);
            setSubmitFailed(true);
          } else {
            setSubmitting(false);
            setSubmitFailed(true);
            setErrorMessages(errorMessages);
          }

          if (jumpToConfirmation) {
            scrollToConfirmation(props, wrapperRef);
          }
        });
    }
  };

  return (
    <div
      ref={el => setWrapperRef(el)}
      className="form-wrapper"
      css={{ position: 'relative' }}
      id={`gravity_form_${formID}`}
    >
      {formData.title ? null : Loading && <Loading isLoading />}

      {submitFailed && !submitSuccess && !onError && (
        <FormError
          SFormError={SFormError || false}
          errorMessage={
            errorMessage || 'There was a problem with your submission'
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
          onSubmit={event => onSubmit(event)}
          className={cssClass}
          encType={isMultipart ? 'multipart/form-data' : undefined}
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
              updateForm={(event, field, inputID) => updateFormHandler(field, event, inputID, formValues, setFormValues, conditionalIds, conditionFields)}
              touched={touched}
              setTouched={id => setTouchedHandler(id, touched, setTouched)}
              pagination={formData.pagination}
              activePage={activePage}
              prevStep={e => prevStep(e, props, formValues, pages, activePage, setActivePage, setPageClicked)}
              nextStep={e => nextStep(e, props, pages, formValues, activePage, setActivePage, setPageClicked, setTouched, setShowPageValidationMsg)}
              checkConditionalLogic={(condition, fields) => checkConditionalLogic(condition, fields = false)}
              saveStateToHtmlField={saveStateToHtmlField}
              enableHoneypot={formData.enableHoneypot}
              errors={errorMessages}
              unsetError={id => unsetError(id, errorMessages)}
              dropzoneText={dropzoneText}
              pageClicked={pageClicked}
            />
            {(!formData.pagination
                || (formData.pagination
                  && formData.pagination.pages.length === activePage)) && (
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
        ''
      )}
    </div>
  );
};

GravityForm.defaultProps = {
  title: true,
  submitIcon: false,
  saveStateToHtmlField: false,
  jumpToConfirmation: true,
};

export {
  validateField, FormConfirmation, FormError, RenderFields, Submit,
};

export default GravityForm;
