import React, {Children} from 'react';
import styles from './card.module.scss';

function Card({children}) {

    return (
        <div className={styles.card}>
            { Children.count(children) > 1 ? (
                <>
                    <div className={styles.top}>{children[0]}</div>
                    <div className={styles.bottom}>{children[1]}</div>
                </>
            ) : children }
        </div>
    );
}

export default Card;
