import React, { useState } from 'react';
import { ProgressBar } from '../components/ProgressBar';
import { ImgAnswer } from '../components/ImgAnswer';
import { LinkButton } from '../components/LinkButton';

function StepThree() {
  const [selectedAnswerId, setSelectedAnswerId] = useState();

  const answersData = [
    {
      id: 'variant-1',
      text: 'Ваш ответ 1',
      imgSrc: './img/laugh.png',
      alt: 'laugh',
    },
    {
      id: 'variant-2',
      text: 'Ваш ответ 2',
      imgSrc: './img/hearts.png',
      alt: 'hearts',
    },
    {
      id: 'variant-3',
      text: 'Ваш ответ 3',
      imgSrc: './img/smirk.png',
      alt: 'smirk',
    },
    {
      id: 'variant-4',
      text: 'Ваш ответ 4',
      imgSrc: './img/fright.png',
      alt: 'fright',
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <div className="question">
            <ProgressBar currentItem={3} />
            <ul className="emoji-variants">
              {
                answersData.map((answerItem) => (
                  <ImgAnswer
                    key={answerItem.id}
                    id={answerItem.id}
                    answerText={answerItem.text}
                    isChecked={answerItem.id === selectedAnswerId}
                    imgSrc={answerItem.imgSrc}
                    onChange={() => setSelectedAnswerId(answerItem.id)}
                  />
                ))
              }
            </ul>
            <LinkButton
              isDisabled={!selectedAnswerId}
              buttonText="Далее"
              path="/step-four"
              type="submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepThree;
