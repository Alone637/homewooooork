import React from 'react';

export function ProgressBar({ currentItem }) {
  const progressBarItems = [1, 2, 3, 4];

  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">
          Скидка за прохождение опроса:
        </span>
        <span className="indicator__value">15%</span>
      </div>
      <div className="indicator__progressbar">
        {progressBarItems.map((item) => (
          <div
            key={item}
            className={`indicator_unit indicator_unit-1 ${
              item <= currentItem && '_active'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
