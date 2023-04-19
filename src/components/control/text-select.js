import React from 'react';
import {ArrowDownIcon} from '../icon/icon';
import styles from './control.module.scss';

function TextSelect({id, options}) {
    return (
        <div className={styles.text_control}>
            <select className={styles.text_select} id={id}>
                {options.map((item, index) => (
                    <option value={item.value} key={index}>{item.text}</option>
                ))}
            </select>
            <ArrowDownIcon className={`${styles.icon} ${styles.arrow}`} />
        </div>
    );
}

export default TextSelect;
