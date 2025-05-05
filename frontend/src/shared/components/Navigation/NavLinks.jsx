import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/">Все пользователи</NavLink>
    </li>
    <li>
      <NavLink to="/u1/places">Мои места</NavLink>
    </li>
    <li>
      <NavLink to="/places/new">Добавить место</NavLink>
    </li>
    <li>
      <NavLink to="/auth">Войти</NavLink>
    </li>
  </ul>
};

export default NavLinks;