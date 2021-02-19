import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.scss';

const NavigationBar = () => (
  <>
    <div className="navigation-bar">
      <div className="d-flex justify-content-around align-items-center navigation-group">
        <Link className="d-flex justify-content-around align-items-center navigation-icon" to="/"><img src="/images/icons/history.svg" alt="history-icon" /></Link>
        <img className="add-button-holder" src="/images/icons/add-button-holder.png" alt="add-button-holder" />
        <Link className="d-flex justify-content-around align-items-center navigation-icon" to="/"><img src="/images/icons/person.svg" alt="person-icon" /></Link>
      </div>
      <Link to="/dashboard" className="add-button"><img src="/images/icons/pokeball-nonactive.svg" alt="add-icon" /></Link>
    </div>
  </>
);

export default NavigationBar;
