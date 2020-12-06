import React from 'react';
import { UncontrolledTooltip } from 'reactstrap';

const LabelTooltip = ({ id, value, tooltip, required }) => {
  return (
    <span className="label-tooltip">
      {value} {!!required && <span className="text-danger ml-1">*</span>}
      {!!tooltip && (
        <>
          <i className="icon icon-help-circle text-muted ml-2" id={id}></i>
          <UncontrolledTooltip placement="top" target={id}>
            {tooltip}
          </UncontrolledTooltip>
        </>
      )}
    </span>
  );
};

export default LabelTooltip;
