import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import bg_main from '../img/bg.jpg';
import button1 from '../img/button1.png';
import button2 from '../img/button2.png';
import './lending.css';

const Lending = ({ id, go }) => (
  <Panel id={id}>
    <PanelHeader>а тут header кстати будет!!!</PanelHeader>
    <div className="main_block">
      <img className="bg_main" align="right" src={bg_main} alt="bg_main" />
      <p className="title">
        <b>СУПЕР КЛАССНЫЙ ЗАГОЛОВОК</b>
        <p className="subtitle">
          <b>
            и такой же супер пупер крутой подзаголовок!!!! текст!!
            тексттексттексттексттексттексттексттексттексттексттексттексттексттексттексттекст
          </b>
        </p>
      </p>
      <div className="buttons">
        <Button className="but1" onClick={go} data-to="">
          <img className="but" src={button1} />
        </Button>
        <Button className="but2" onClick={go} data-to="reg_member">
          <img className="but" src={button2} />
        </Button>
      </div>
    </div>
  </Panel>
);

Lending.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Lending;
