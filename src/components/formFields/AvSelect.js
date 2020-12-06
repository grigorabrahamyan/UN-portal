import React, { useEffect, useState } from 'react';
import AvField from 'availity-reactstrap-validation/lib/AvField';
import instance from 'services/api';

const memo = {};
const promises = {};

const AvSelect = ({ ep, options = [], placeholder, ...rest }) => {
  const [opts, setOpts] = useState(options);

  useEffect(() => {
    if (ep) {
      if (memo[ep]) {
        setOpts(memo[ep]);
      } else {
        if (!promises[ep]) {
          promises[ep] = instance.get(ep);
        }
        promises[ep].then(({ data: { data } }) => {
          memo[ep] = data;
          setOpts(data);
        });
      }
    }
  }, [ep]);
  return (
    <AvField {...rest} type="select">
      <option value="" disabled>
        {placeholder}
      </option>
      {opts.map((opt) => (
        <option key={opt.id} value={opt.id}>
          {opt.name}
        </option>
      ))}
    </AvField>
  );
};

export default AvSelect;
