import React, { FC } from 'react';

import './Errors.css';

type errorProps = {
  error?: Error;
};

const Errors: FC<errorProps> = ({ error = undefined }) => {
  return (
    <div>
      {error && (
        <div className="error-message">
          <h2>{error.name}</h2>
          <p>{error.message}</p>
        </div>
      )}
    </div>
  );
};

export default Errors;

