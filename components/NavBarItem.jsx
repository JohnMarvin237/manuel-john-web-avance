import styles from './NavBarItem.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBarItem({lien, children}) {
    return <>
        <Link href={lien}>{children}</Link>
    </>;
};