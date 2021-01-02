import React from 'react';
import './account.css';

export const Account = () => {
  return (
    <div>
      <div className="header"></div>

      <div className="user">
        <div className="left_panel">
          <div className="otstup"></div>
          <p className="menu">Искать сокомандника</p>
          <p className="menu">Мой профиль</p>
          <p className="menu">Моя команда</p>
          <p className="menu">Настройки</p>
          <p className="menu">Выйти из аккаунта</p>
        </div>
        <div className="user_card">
          <p className="text">*тут будет карточка пользователя!*</p>
        </div>
      </div>
    </div>
  );
};
