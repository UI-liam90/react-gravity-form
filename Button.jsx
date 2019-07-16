import React from 'react';
import { Button } from '../styles';
import Icon from '../Icon';
import { ICONS } from '../../static/icons';
// import { Loading } from '../Content/Loading';

export default ({
  text, showLoading, className, isDisabled, icon,
}) => (
  <Button
    type="submit"
    className={`form-submit-button button ${className}`}
    disabled={showLoading || isDisabled}
    mr={20}
  >
    {/* {showLoading ? <Loading inline /> : text} */}
    {text}
    {icon && <Icon icon={ICONS.EMAIL} size={22} viewbox="0 0 511.626 511.626" />}
  </Button>
);
