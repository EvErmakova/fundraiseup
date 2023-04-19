import React from 'react';
import styles from './link.module.scss';

function Link({href, text}) {
    return (
        <a className={styles.link} href={href} target="_blank" title={text}>{text}</a>
    );
}

export default Link;
