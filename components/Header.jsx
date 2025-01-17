import styles from './Header.module.css';
/*import { useState } from 'react';
const [loggedIn, setLoggedIn] = useState(false);*/

export default function Header() {
    
    return <header className={ styles.header }>
        <h1 className={ styles.title }>John-Manuel Dev Solutions</h1>
        <nav className={ styles.nav}>
            <ul className={ styles.navList }>
                <li><a href="#home" className={ styles.navItem }>Accueil</a></li>
                <li><a href="#products" className={ styles.navItem }>Produits</a></li>
                <li><a href="#solutions" className={ styles.navItem }>Solutions</a></li>
                <li><a href="#sales-and-support" className={ styles.navItem }>Ventes&support</a></li>
                <li><a href="#contact" className={ styles.navItem }>Contact</a></li>
            </ul>
        </nav>
        {/*<button onClick={ () => setLoggedIn(!loggedIn)}>
            {loggedIn ? "Déconnexion" : "Connexion"}
        </button>*/}
    </header>
};