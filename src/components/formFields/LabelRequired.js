import React from 'react';
import PropTypes from 'prop-types';

const LabelRequired = ({ children }) => (
  <>
    {children} <span className="text-wrong-label">*</span>
  </>
);
LabelRequired.prototype = {
  children: PropTypes.node,
};
LabelRequired.defaultProps = {
  children: '',
};
export default LabelRequired;
