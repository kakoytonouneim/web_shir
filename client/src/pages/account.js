import React, { Component } from 'react';
import './account.css';
import styled from 'styled-components';
import axios from 'axios';

export const Account = ({go}) => {
  return (
    <div>
        <div className="header">
        </div>
        
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
}