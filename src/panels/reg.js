import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import './reg.css';



const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>давай регацааа</PanelHeader>

		<Group title="Navigation Example">
			<Div>
				<div className="but1">
				<Button className="test1" size="xl" level="2" onClick={go} data-to="">
				а давай
				</Button></div>
				<div className="but2">
				<Button className="test2" size="xl" level="2" onClick={go} data-to="lending">
				не хочу...
				</Button></div>
				
				

			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
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

export default Home;
