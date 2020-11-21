import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Div } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import bg_main from '../img/bg.jpg';
import button1 from '../img/button1.png';
import button2 from '../img/button2.png';
import './lending.css';


const osName = platform();

const Persik = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>
			здесь будет header
		</PanelHeader>
		<img className="bg_main" align="right" src={bg_main} alt="bg_main"/>
		<p className="title">
			<b>СУПЕР КЛАССНЫЙ ЗАГОЛОВОК</b>
			<p className="subtitle">
			<b>и такой же супер пупер крутой подзаголовок!!!! текст!! тексттекст</b>
		</p>
		</p>
		
		
		
		<div className="line1">
			<Button className="but" onClick={go} data-to="reg">
				<img className="button1" src={button1}/>
			</Button>
			<Button className="but" onClick={go} data-to="reg">
				<img className="button2" src={button2} />
			</Button>
			
		</div>
		</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
