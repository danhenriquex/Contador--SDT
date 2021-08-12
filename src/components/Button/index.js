import React from 'react';

import './style.css';

export function Button({ title, ...rest }) {
  return (
    <button type="button" {...rest}>
      {title}
    </button>
  );
}
