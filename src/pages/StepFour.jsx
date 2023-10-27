import React, { useState } from 'react';
import { LinkButton } from '../components/LinkButton';
import { ProgressBar } from '../components/ProgressBar';
import { NumberVariant } from '../components/NumberVariant';

function StepFour() {
  const [selectedAnswerId, setselectedAnswerId] = useState();

  const answerData = [
    {
      id: 'variant-1',
      value: 1,
    },
    {
      id: 'variant-2',
      value: 2,
    },
    {
      id: 'variant-3',
      value: 3,
    },
    {
      id: 'variant-4',
      value: 4,
    },
    {
      id: 'variant-5',
      value: 5,
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentItem={4} />
          <div className="question">
            <h2>4. Занимательный вопрос</h2>
            <ul className="level-variants">
              {answerData.map((answer) => (
                <NumberVariant
                  key={answer.id}
                  id={answer.id}
                  optionItem={answer.value}
                  isAnswerChecked={answer.id === selectedAnswerId}
                  onClick={() => setselectedAnswerId(answer.id)}
                />
              ))}
            </ul>
            <LinkButton
              path="/thanks"
              isDisabled={!selectedAnswerId}
              buttonText="Далее"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepFour;
