import React from "react";
// import { Loading } from "../styles";

const Submit = ({ formData, isDisabled, submitting, prevStep }) => (
	<React.Fragment>
		<div className="footer">
			<input type="hidden" name="nonce" value={formData.nonce} />
			<button disabled={isDisabled || submitting}>
				{formData.button.text}
			</button>
			{formData.lastPageButton && (
				<button onClick={e => prevStep(e)}>
					{formData.lastPageButton.text}
				</button>
			)}
		</div>
		{/* <Loading isLoading={submitting} /> */}
	</React.Fragment>
);

export default Submit;
