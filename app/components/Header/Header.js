import React from 'react';
import { NavLink } from 'react-router-dom';
// import Banner from './images/banner.jpg';
import './style.scss';

let navData = [{path: "/", text: "Home"}, {path: "/portfolio", text: "Portfolio"}, {path: "/resume", text: "Resume"}];

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <ul className="nav-bar">
          {navData.map((item, index) =>
            <li className="nav-item" key={index}>
              <NavLink to={item.path} exact>{item.text}</NavLink>
            </li>)}
        </ul>
      </div>
    );
  }
}

export default Header;
