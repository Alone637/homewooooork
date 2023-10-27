import React, { useEffect, useState } from 'react';
import { AppInput } from '../components/AppInput';
import { ProgressBar } from '../components/ProgressBar';
import { Heading } from '../components/Heading';
import { LinkButton } from '../components/LinkButton';

function StepOne() {
  const [answerValue, setAnswerValue] = useState('');

  const [answerError, setAnswerError] = useState(false);

  useEffect(() => {
    if (!answerValue) {
      setAnswerError(true);
    } else {
      setAnswerError(false);
    }
  }, [answerValue]);

  const isNextButtonDisabled = answerError;

  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="single-input-quiz">
            <ProgressBar currentItem={1} />
            <div className="question">
              <Heading headingType="h2" text="1. Занимательный вопрос" />
              <AppInput
                InputLabel="Ваш ответ"
                isRequired
                inputType="text"
                inputName="answer"
                inputId="answer"
                inputPlaceholder="Ваш ответ"
                errorText="Введите номер в правильном формате"
                inputValue={answerValue}
                onInputChange={(e) => setAnswerValue(e.target.value)}
                isError={answerError}
              />
              <LinkButton
                buttonText="Далее"
                path="/step-two"
                type="submit"
                isDisabled={isNextButtonDisabled}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepOne;
