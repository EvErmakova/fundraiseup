import React from 'react';
import styles from './input.module.scss';

function Input({id, placeholder, ...props}) {
    return (
        <div className="control">
            {props.children && <div className={styles.icon}>{props.children}</div>}
            <input className={`control_input ${styles.input}`} type="text" placeholder={placeholder} id={id} />
        </div>
    );
}

export default Input;
