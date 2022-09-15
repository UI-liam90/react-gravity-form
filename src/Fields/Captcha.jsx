import ReCAPTCHA from "react-google-recaptcha";

const Captcha = ({ field, validationMessage, cssClass, sitekey, ...props }) => {
  const { id, captchaTheme, formId, captchaLanguage } = field;
  if (!sitekey) return null;

  return (
    <div className={`captcha ${cssClass}`}>
      <ReCAPTCHA sitekey={sitekey} theme={captchaTheme} hl={captchaLanguage} />
      {validationMessage && (
        <span className="error-message" id={`error_${formId}_${id}`}>
          {validationMessage}
        </span>
      )}
    </div>
  );
};

export default Captcha;
