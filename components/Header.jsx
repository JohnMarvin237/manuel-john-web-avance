import styles from './Header.module.css';
import Image from 'next/image';
import logo from "@/public/logo.jpg";
import Link from 'next/link';

// Creation d'un composant Header qui affiche le logo et la navigation
export default function Header() {

    return <>
        <header className={styles.header}>

            <Image className={styles.image} src={logo} alt="logo" />

            <h1 className={styles.title}>John-Manuel Dev Solutions</h1>

            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li>
                        <Link href="/" className={styles.navItem}>
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className={styles.navItem}>
                            Projets
                        </Link>
                    </li>
                    <li>
                        <Link href="/solutions" className={styles.navItem}>
                            Solutions
                        </Link>
                    </li>
                    <li>
                        <Link href="#sales-and-support" className={styles.navItem}>
                            Ventes&support
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className={styles.navItem}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>;
};