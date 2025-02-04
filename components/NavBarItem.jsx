import Link from 'next/link';

// Creation d'un composant NavBarItem qui prend en paramètre un lien et un texte et qui affiche un lien de navigation
export default function NavBarItem({ lien, children }) {
    return <>
        <Link href={lien}>{children}</Link>
    </>;
};