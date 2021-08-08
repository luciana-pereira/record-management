import styles from './Footer.module.css';

const Footer = () => {
  	return (

    <footer className={styles.footer}>
      	<p className={styles.title}>✊🏾GrifAfro.</p>
      	<p className={styles.text}>
        	Criado por 
        	<a href={"https://github.com/luciana-pereira"}>Luciana Pereira</a>
      	</p>
    </footer>
  );
}
  
export default Footer;