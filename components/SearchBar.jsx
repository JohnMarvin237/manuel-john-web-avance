import styles from "./SearchBar.module.css";

// Creation d'un composant SearchBar qui affiche une barre de recherche
export default function SearchBar() {
    return <>
        <div className={styles.searchBar}>
            <input type="text" placeholder="Search" />
        </div>
    </>;
};