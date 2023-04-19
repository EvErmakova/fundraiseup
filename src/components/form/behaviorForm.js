import React from 'react';
import Input from '../control/input';
import Select from '../control/select';
import Radio from '../radio/radio';
import Checkbox from '../checkbox/checkbox';
import Range from '../range/range';
import Button from '../button/button';
import styles from './form.module.scss';

function BehaviorForm() {
    return (
        <form action="#">
            <div className={styles.content}>
                <div className={`${styles.group} ${styles.center}`}>
                    <label className={styles.label} htmlFor="designation">Designation</label>
                    <div className={styles.controls}>
                        <Select id="designation" name="designation" options={[
                            {value: 'Match Checkout Setting', text: 'Match Checkout Setting'},
                            {value: 'Succeeded', text: 'Succeeded'},
                            {value: 'Errored', text: 'Errored'},
                        ]} />
                    </div>
                </div>

                <div className={`${styles.group} ${styles.center}`}>
                    <label className={styles.label} htmlFor="goal">Goal</label>
                    <div className={styles.controls}>
                        <Input id="goal" name="goal" placeholder="$10.00" required={true} />

                        <div className={styles.currency}>
                            <Select id="currency" name="currency" options={[
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
                            <Checkbox id="allow-donor" name="allow-donor" value="true"
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

            <div className={styles.bottom}>
                <Button type="submit" text="Save changes" color="primary" />
                <Button type="reset" text="Cancel" />
            </div>
        </form>
    );
}

export default BehaviorForm;
