import React from 'react';
import Card from '../card/card';
import {CalendarIcon, RepeatIcon, WalletIcon, XCircleIcon} from '../icon/icon';
import styles from './menu.module.scss';

function Menu() {
    return (
        <Card>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <button type="button" className={`with-icon ${styles.button}`}>
                        <RepeatIcon className="icon-size-base" />
                        Change amount
                    </button>
                </li>
                <li className={styles.item}>
                    <button type="button" className={`with-icon ${styles.button}`}>
                        <WalletIcon className="icon-size-base" />
                        Change payment method
                    </button>
                </li>
                <li className={styles.item}>
                    <button type="button" className={`with-icon ${styles.button}`}>
                        <CalendarIcon className="icon-size-base" />
                        Change date
                    </button>
                </li>
                <li className={styles.item}>
                    <button type="button" className={`with-icon ${styles.button}`}>
                        <XCircleIcon className="icon-size-base" />
                        Cancel recurring
                    </button>
                </li>
            </ul>
        </Card>
    );
}

export default Menu;
