/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
import Logo from '../../Assets/Logo.jfif';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { Badge } from '../Badge/Badge';


const Header = () => {
    return (
        <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
            <img className="brand" href="/" className={styles.img} src={Logo} />
            <p className={styles.title}>GrifAfro</p>
            <div className={styles.options}>
              <Link to="/accessories">Acessórios 💍 |</Link>
              <Badge />
              <Link to="/signin">Entrar</Link>
            </div>
        </nav>
      </header>
    );
  }
  
  export default Header;