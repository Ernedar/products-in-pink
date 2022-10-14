import React, { FC } from 'react';

import './Loading.css';

const Loading: FC = () => {
  return (
    <div className="loading-wrapper">
      <h2>Loading...</h2>
      <p>Your products are being prepared.</p>
    </div>
  );
};

export default Loading;

