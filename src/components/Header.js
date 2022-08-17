import { useSelector, useDispatch } from 'react-redux';

import classes from './Header.module.css';
import { authActions } from '../store/Auth-slice';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href='/'>Meus Produtos</a>
            </li>
            <li>
              <a href='/'>Minhas Vendas</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Sair</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;