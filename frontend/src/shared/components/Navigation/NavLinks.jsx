import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../FormElements/Button';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
  const auth = useContext(AuthContext);

  return <ul className="nav-links">
    <li>
      <NavLink to="/">Все пользователи</NavLink>
    </li>
    {auth.isLoggedIn && (
      <>
        <li>
          <NavLink to="/u1/places">Мои места</NavLink>
        </li>

        <li>
          <NavLink to="/places/new">Добавить место</NavLink>
        </li>
      </>
    )}
    {!auth.isLoggedIn && (
      <li>
        <NavLink to="/auth">Войти</NavLink>
      </li>
    )}
    {auth.isLoggedIn && (
      <li>
        <Button onClick={auth.logout}>Выйти</Button>
      </li>
    )}
  </ul>
};

export default NavLinks;