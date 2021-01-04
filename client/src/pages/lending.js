import React, { Component} from 'react';
import bg_main from '../img/bg1.png';
import button1 from '../img/button1.png';
import button2 from '../img/button2.png';
import './lending.css';
import styled from 'styled-components';
import {AuthPage} from './auth';

export const Lending = ({go}) => {
  return (
    <div className="main_block">
			<img className="bg_main" align="right" src={bg_main} alt="bg_main"/>
			<p className="title">
				<b>СУПЕР КЛАССНЫЙ ЗАГОЛОВОК</b>
        </p>
			<p className="subtitle">
				<b>тексттексттексттексттексттексттексттексттексттекст<br></br>тексттексттексттексттексттексттексттексттексттексттексттекст<br></br>тексттекст</b>
			</p>
			<div className="buttons">
			<form action="/login">
			<button className="but1" onClick={go} data-to="">
				<img className="but" src={button1}/>
			</button>
			<button className="but2" onClick={go} data-to="">
				<img className="but" src={button2} />
			</button>
			</form>
			</div>
		</div>
  );
}
