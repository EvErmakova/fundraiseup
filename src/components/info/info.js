import React from 'react';
import Card from '../card/card';
import {CheckCircleIcon, CopyIcon, DollarIcon} from '../icon/icon';
import Link from '../link/link';
import styles from './info.module.scss';

function Info() {
    const copyText = (text) => {
        navigator.clipboard.writeText(text);
    }

    return (
        <Card>
            <div className={styles.top}>
                <div>
                    <div className="with-icon">
                        <DollarIcon className="icon-size-base icon-color" />
                        <span className="font-size-md">Donation</span>
                    </div>
                    <div className={`indent-top-1 ${styles.prices}`}>
                        <span className="h2 primary-color no-wrap">$20.60 USD</span>
                        <span className="caption-color no-wrap"> ≈ €17.92 EUR</span>
                    </div>
                </div>

                <div className="font-family-secondary">
                    <div className="caption-color line-height-md">ID</div>
                    <button type="button" className={`indent-top-1 with-icon ${styles.id}`}
                            onClick={() => copyText('TYNY694Y')}
                    >
                        <span>TYNY694Y</span>
                        <CopyIcon className="icon-size-base caption-color" />
                    </button>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.item}>
                    <div className={`font-size-md caption-color ${styles.item_title}`}>Status</div>
                    <div className="with-icon primary-color">
                        <CheckCircleIcon className="icon-size-base" />
                        Succeeded
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={`font-size-md caption-color ${styles.item_title}`}>Supporter</div>
                    <div className="text-truncate">
                        <Link href="#" text="Charlotte Ann" />
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={`font-size-md caption-color ${styles.item_title}`}>Campaign</div>
                    <div className="text-truncate">
                        <Link href="#" text="Heart walk" />
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default Info;
