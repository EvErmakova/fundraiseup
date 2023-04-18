import React from 'react';
import Select from "../select/select";
import {ArrowDownIcon} from "../icon/icon";
import styles from "./form.module.scss";

function BehaviorForm() {
    return (
        <form action="#">
            <div className={styles.content}>
                <div className={styles.group}>
                    <label className={styles.label} htmlFor="designation">Designation</label>
                    <div className={styles.controls}>
                        <Select id="designation" options={[
                            {value: 'Match Checkout Setting', text: 'Match Checkout Setting'},
                            {value: 'Succeeded', text: 'Succeeded'},
                            {value: 'Errored', text: 'Errored'},
                        ]} />
                    </div>
                </div>

                <div className={styles.group}>
                    <label className={styles.label} htmlFor="goal">Goal</label>
                    <div className={`${styles.controls} ${styles.goal}`}>
                        <div className="control">
                            <input className="control_input" type="text" placeholder="$10.00" id="goal" />
                        </div>
                        <div className={styles.currency}>
                            <Select id="currency" options={[
                                {value: 'USD', text: 'USD'},
                                {value: 'EUR', text: 'EUR'},
                            ]} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`card_bottom ${styles.card_bottom}`}>
                <button className="btn btn-primary" type="submit">Save changes</button>
                <button className="btn" type="reset">Cancel</button>
            </div>
        </form>
    );
}

export default BehaviorForm;
