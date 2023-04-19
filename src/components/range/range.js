import React, {useEffect, useState} from 'react';
import styles from './range.module.scss';

function Range({id, name, min, max, step, value, unit}) {
    const [rangeValue, setRangeValue] = useState(value);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        changeRangeValue(value);
    }, []);

    const changeRangeValue = (value) => {
        const possibleValues = max - min;
        const relativeValue = (value - min) / possibleValues;
        const percentRaw = relativeValue * 100;
        setRangeValue(value);
        setPercent(+percentRaw.toFixed(2));
    }

    return (
        <div className={styles.control}>
            <input className={styles.range} type="range" id={id} name={name} min={min} max={max} step={step}
                   value={rangeValue} onChange={(evt) => changeRangeValue(evt.target.value)}
                   style={{'--percent': `${percent}%`}}
            />
            <span>{rangeValue}{unit}</span>
        </div>
    );
}

export default Range;
