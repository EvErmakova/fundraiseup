import React from 'react';
import {ArrowDownIcon} from '../icon/icon';
import styles from './text-select.module.scss';

function TextSelect({id, options}) {
    return (
        <div className={styles.control}>
            <select className={styles.select} id={id}>
                {options.map((item, index) => (
                    <option value={item.value} key={index}>{item.text}</option>
                ))}
            </select>
            <ArrowDownIcon className={styles.arrow} />
        </div>
    );
}

export default TextSelect;
