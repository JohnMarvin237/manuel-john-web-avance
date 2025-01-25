import Header from '@/components/Header';
import styles from './Layout.module.css';
import './globals.css';
import {Roboto, Poppins} from 'next/font/google';
import Footer from '@/components/Footer';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-roboto'
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: '700',
    display: 'swap',
    variable: '--font-poppins'
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
        <body className={styles.body}>
            <Header/>
            <main className={styles.main}>
                {children}
            </main>
            <Footer />

        </body>
    </html>;
}
