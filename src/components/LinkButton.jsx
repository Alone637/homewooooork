import React from 'react';
import { Link } from 'react-router-dom';
import { AppButton } from './AppButton';

export function LinkButton({ path, ...props }) {
  return (
    <Link to={path}>
      <AppButton {...props} />
    </Link>
  );
}
