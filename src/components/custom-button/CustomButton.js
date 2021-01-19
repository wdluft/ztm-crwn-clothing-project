/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './custom-button-styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
