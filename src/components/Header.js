import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>Meus Produtos</a>
          </li>
          <li>
            <a href='/'>Minhas Vendas</a>
          </li>
          <li>
            <button>Sair</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
