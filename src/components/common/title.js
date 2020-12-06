import React from 'react';
import PropTypes from 'prop-types';

function Title({ title }) {
  return (
    <div className="page-title">
      <h1>{title}</h1>
    </div>
  );
}
Title.prototype = {
  title: PropTypes.string.isRequired,
};
Title.defaultProps = {
  title: '',
};
export default Title;
