import React, {useState} from 'react';
import styles from './radio.module.scss';

function Radio({name, options, selected}) {
    const [activeRadio, setActiveRadio] = useState(selected);

    return (
        <>
            {options.map((item, index) => (
                <div className={styles.control} key={index}>
                    <input className={styles.radio} type="radio" name={name} id={item.id} value={item.value}
                           checked={activeRadio === index}
                           onChange={() => setActiveRadio(index)}
                    />
                    <label className={styles.label} htmlFor={item.id}>{item.text}</label>
                </div>
            ))}
        </>
    );
}

export default Radio;
