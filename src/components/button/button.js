import React from 'react';
import styles from './button.module.scss';

function Button({type, text, color}) {
    return (
        <button className={`${styles.btn} ${color ? styles[color] : styles.default}`} type={type}>{text}</button>
    );
}

export default Button;
