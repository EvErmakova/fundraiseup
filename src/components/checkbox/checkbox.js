import React, {useState} from 'react';
import styles from './checkbox.module.scss';

function Checkbox({id, name, value, text, selected}) {
    const [activeCheckbox, setActiveCheckbox] = useState(selected);

    return (
        <div className={styles.control}>
            <input className={styles.checkbox} type="checkbox" id={id} name={name} value={value}
                   checked={activeCheckbox == true}
                   onChange={() => setActiveCheckbox(!activeCheckbox)}
            />
            <label className={styles.label} htmlFor={id}>{text}</label>
        </div>
    );
}

export default Checkbox;
