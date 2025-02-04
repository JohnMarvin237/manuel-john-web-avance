import Link from 'next/link';

export default function NavBarItem({lien, children}) {
    return <>
        <Link href={lien}>{children}</Link>
    </>;
};