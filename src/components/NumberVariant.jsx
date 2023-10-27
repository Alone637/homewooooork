import React from 'react';

export function NumberVariant({
  id, optionItem, isAnswerChecked, onClick,
}) {
  return (
    <li className="variant-wrapper" onClick={onClick}>
      <input required type="radio" name="variant" id={id} checked={isAnswerChecked} />
      <label htmlFor={id}>{optionItem}</label>
    </li>
  );
}
