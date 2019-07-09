import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h1>Im some other page</h1>
      <Link to="/">Go back to home page!</Link>
    </div>
  );
};
