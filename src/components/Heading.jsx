import React from 'react';

export const Heading = ({ headerText, type }) => {
  const rerenderHeader = (type1) => {
    switch (type1) {
      case 'h1':
        return <h1>{headerText}</h1>;
      case 'h2':
        return <h2>{headerText}</h2>;
      case 'h3':
        return <h3>{headerText}</h3>;
      case 'h4':
        return <h4>{headerText}</h4>;
      default:
        return <h1>{headerText}</h1>;
    }
  };

  return (rerenderHeader(type));
};
