import styles from './Footer.module.css';
import Link from 'next/link';
export default function Footer() {
    return <footer className={styles.footer}>
        <div>
            <nav className={styles.nav}>
                <ul className={styles.footerList}>
                    <li><Link href="/" className={styles.footerItems}>À PROPOS</Link></li>
                    <li><Link href="/" className={styles.footerItems}>CARRIÈRE</Link></li>
                    <li><Link href="/" className={styles.footerItems}>CONTACT</Link></li>

                </ul>
            </nav>

            <div className={styles.footerText}>
                &copy; John-Manuel Dev Solutions<br />
                Développé par Manuel Wonda & John Ndekebitik
            </div>
        </div>

    </footer>


}
