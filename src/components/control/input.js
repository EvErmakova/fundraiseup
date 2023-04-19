import React from 'react';
import styles from './control.module.scss';

function Input({id, name, placeholder, required, ...props}) {
    return (
        <div className={styles.control}>
            {props.children && <div className={styles.icon}>{props.children}</div>}
            <input className={styles.input} type="text" placeholder={placeholder} id={id} name={name} required={required} />
        </div>
    );
}

export default Input;
