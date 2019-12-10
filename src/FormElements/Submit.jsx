import React from 'react';

const Submit = ({
 Button, Loading, formData, isDisabled, submitting, prevStep 
}) => {
  const SButton = Button || 'button';

  return (
    <React.Fragment>
      <div className="footer">
        <input type="hidden" name="nonce" value={formData.nonce} />
        <SButton type="submit" mr={20} disabled={isDisabled || submitting}>
          {formData.button.text}
        </SButton>
        {formData.lastPageButton && (
          <SButton className="prev" onClick={e => prevStep(e)}>
            {formData.lastPageButton.text}
          </SButton>
        )}
      </div>
      {Loading && <Loading isLoading={submitting} />}
    </React.Fragment>
  );
};

export default Submit;
