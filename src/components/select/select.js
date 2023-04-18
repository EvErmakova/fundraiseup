import React from 'react';
import {ArrowDownIcon} from '../icon/icon';
import styles from './select.module.scss';

function Select({id, options}) {
    return (
        <div className="control">
            <select className={`control_input ${styles.select}`} id={id}>
                {options.map((item, index) => (
                    <option value={item.value} key={index}>{item.text}</option>
                ))}
            </select>
            <ArrowDownIcon className={styles.arrow} />
        </div>
    );
}

export default Select;
