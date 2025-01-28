import React from 'react';
import styles from './Banner.module.css';

export default function Banner({ fontImage, slogan, ctaButton }) {
    return (
        <div className={styles.banner} style={{ backgroundImage: {fontImage} }}>
            <div className={styles.overlay}>
                <h1>{slogan}</h1>
                <button className={styles.ctaButton}>{ctaButton}</button>
            </div>
        </div>
    );
}
