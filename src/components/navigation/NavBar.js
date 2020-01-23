import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/navBarStyles.css';

const NavBar = (props) => (
  <div id='nav' className="sticky">
  <ul>
    <li>
      <Link to='/'>HOME</Link>
    </li>
    <li>
      <NavLink to='/registration'
      onClick={props.resetEditToFalse}
      activeClassName="current">REGISTRATION</NavLink>
    </li>
    <li>
      <NavLink to='/contact' activeClassName="current">CONTACT</NavLink>
    </li>
    <li>
      <NavLink to='/activities' activeClassName="current">ACTIVITIES</NavLink>
    </li>
    <li>
      <NavLink to='/people' activeClassName="current">REGISTER</NavLink>
    </li>
    <li>
      <NavLink to='/restrictions' activeClassName="current">RESTRICTIONS</NavLink>
    </li>
  </ul>
  </div>
);

export default NavBar;
