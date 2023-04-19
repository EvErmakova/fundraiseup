import React from 'react';
import Select from '../select/select';
import Radio from '../radio/radio';
import Checkbox from '../checkbox/checkbox';
import Input from '../input/input';
import Range from '../range/range';
import styles from './form.module.scss';

function BehaviorForm() {
    return (
        <form action="#">
            <div className={styles.content}>
                <div className={`${styles.group} ${styles.center}`}>
                    <label className={styles.label} htmlFor="designation">Designation</label>
                    <div className={styles.controls}>
                        <Select id="designation" options={[
                            {value: 'Match Checkout Setting', text: 'Match Checkout Setting'},
                            {value: 'Succeeded', text: 'Succeeded'},
                            {value: 'Errored', text: 'Errored'},
                        ]} />
                    </div>
                </div>

                <div className={`${styles.group} ${styles.center}`}>
                    <label className={styles.label} htmlFor="goal">Goal</label>
                    <div className={styles.controls}>
                        <Input id="goal" placeholder="$10.00" />

                        <div className={styles.currency}>
                            <Select id="currency" options={[
                                {value: 'USD', text: 'USD'},
                                {value: 'EUR', text: 'EUR'},
                            ]} />
                        </div>
                    </div>
                </div>

                <div className={styles.group}>
                    <label className={styles.label}>Default Amount</label>
                    <div>
                        <Radio name="amount" selected={1} options={[
                            {id: 'match-amount', value: 'Match Checkout Setting', text: 'Match Checkout Setting'},
                            {id: 'customize-amount', value: 'Customize', text: 'Customize', selected: true},
                        ]} />

                        <div className="indent-top-6">
                            <Checkbox id="allow-donor" value="Allow donor to change default currency"
                                      text="Allow donor to change default currency" selected={true}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.group}>
                    <label className={styles.label}>Border size</label>
                    <Range id="border-size" name="border-size" min="0" max="3" step="1" value="2" unit="px" />
                </div>

                <div className={styles.group}>
                    <label className={styles.label}>Border radius</label>
                    <Range id="border-radius" name="border-radius" min="0" max="20" step="1" value="15" unit="px" />
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
