import React from 'react';
import {ArrowDownIcon} from '../icon/icon';
import styles from './control.module.scss';

function Select({id, options}) {
    return (
        <div className={styles.control}>
            <select className={`${styles.input} ${styles.select}`} id={id}>
                {options.map((item, index) => (
                    <option value={item.value} key={index}>{item.text}</option>
                ))}
            </select>
            <ArrowDownIcon className={`${styles.icon} ${styles.arrow}`} />
        </div>
    );
}

export default Select;
