import React from 'react';
import PropTypes from 'prop-types';

function DonorItem({name, point}) {
  return(
    <div className="donor-item">
      <h6>{name}</h6>
       <p>{point}կգ մթերք </p>
    </div>
  )
}
DonorItem.prototype = {
  name: PropTypes.string,
  point: PropTypes.instanceOf([PropTypes.string, PropTypes.number])
};
DonorItem.defaultProps = {
  title: '',
  point: 0
}
export default DonorItem;