import React, { forwardRef, useState } from 'react';

import placeholder from 'assets/img/food.png';

const LazyImage = forwardRef(({ alt = 'alt', src = placeholder, ...rest }, ref) => {
  const [uri, setUri] = useState(src);
  return <img src={uri} onError={() => setUri(placeholder)} alt={alt} ref={ref} {...rest} />;
});

export default LazyImage;
