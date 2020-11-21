import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import './reg_member.css';



const Reg = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>тут все тот же header!!!</PanelHeader>

		<Group title="Navigation">
			<Div>
				<p className="text"><b>Имя</b></p>
				<input type="text" className="input_text" name="reg_member_input"  />
				<p className="text"><b>Фамилия</b></p>
				<input type="text" className="input_text" name="reg_member_input"  />
				<p className="text"><b>Город</b></p>
				<input type="text" className="input_text" name="reg_member_input"  />
				<p className="text"><b>Возраст</b></p>
				<input type="text" className="input_text" name="reg_member_input"  />
				<p className="text"><b>Основные навыки</b></p>
				<input type="text" className="input_text" name="reg_member_input"  />
				<p className="text"><b>Чем может быть полезен</b></p>
				<input type="text" className="input_text" name="reg_member_input"  />
				<p className="text"><b>Контакты для связи</b></p>
				<input type="text" className="input_text" name="reg_member_input"  />
				<p className="text"><b>Почта</b></p>
				<input type="text" className="input_text" name="reg_member_input"  />
				<p className="text"><b>Пароль</b></p>
				<input type="text" className="input_text" name="reg_member_input"  />
				<div className="but3">
				<Button className="test1" size="xl" level="2" onClick={go} data-to="">
				все заполниль
				</Button></div>
				<div className="but4">
				<Button className="test2" size="xl" level="2" onClick={go} data-to="lending">
				отстань со своей регистрацией...
				</Button></div>
				

			</Div>
		</Group>
	</Panel>
);

Reg.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Reg;
