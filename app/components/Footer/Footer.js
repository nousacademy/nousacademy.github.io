import React from 'react';
import './style.scss';

let rightUlData = [{url: "https://www.linkedin.com/in/nousacademy/", icon: "fab fa-linkedin-in" },{url: "https://github.com/nousacademy/", icon: "fab fa-github-alt"}];

const Footer = () => (

  <footer>
    <ul className="left">
      <li>
        &copy; {(new Date().getFullYear())} The Architect
      </li>
    </ul>
    <ul className="right">
      {rightUlData.map((item, index)=>
        <li key={index}>
            <a href={item.url} target="_blank">
                <i className={item.icon}></i>
            </a>
        </li>)}
    </ul>
  </footer>
);

export default Footer;
