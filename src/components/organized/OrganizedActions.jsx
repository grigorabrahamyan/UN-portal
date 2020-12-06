import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

function OrganizedActionsItem({ img, date, title, text, btn }) {
  return (
    <div className="organized-item">
      <img src={img} alt="image" />
      <div className="item-content">
        <div className="item-date">
          <p>{date}</p>
        </div>
        <h5>{title}</h5>
        <p>{text}</p>
        {
          btn && (
          <div className="item-button">
            <Button> Գրանցվել</Button>
          </div>
          )
        }

      </div>
    </div>
  );
}
OrganizedActionsItem.PropTypes = {
  img: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};
OrganizedActionsItem.defaultProps = {
  img: '',
  date: '',
  title: '',
  text: '',
};
export default OrganizedActionsItem;
