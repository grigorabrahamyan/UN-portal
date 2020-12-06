import React from 'react';

const Preloader = ({ className }) => {
  return (
    <div className={`preloader ${className}`}>
      <div className="loader_block">
        <div className="dot loader_dot_1"></div>
        <div className="dot loader_dot_2"></div>
        <div className="dot loader_dot_3"></div>
      </div>
    </div>
  );
};

export default Preloader;
