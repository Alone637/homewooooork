import React from 'react';

function Thanks() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <h1>Спасибо за прохождение опроса!</h1>
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <linkbutton id="get-link">Получить ссылку</linkbutton>
        </div>
      </div>
    </div>
  );
}

export default Thanks;
