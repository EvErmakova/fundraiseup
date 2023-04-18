import React from 'react';
import {Tabs, Panel} from "../tabs/tabs";
import styles from './form.module.scss';
import BehaviorForm from "./behaviorForm";

function Form() {
    return (
        <div className="card">
            <Tabs>
                <Panel title="Behavior">
                    <BehaviorForm />
                </Panel>

                <Panel title="Appearance">
                    <div className={styles.content}>
                        form Appearance
                    </div>
                </Panel>

                <Panel title="Custom Fields">
                    <div className={styles.content}>
                        form Custom Fields
                    </div>
                </Panel>

                <Panel title="Questions">
                    <div className={styles.content}>
                        form Questions
                    </div>
                </Panel>

                <Panel title="URL Control">
                    <div className={styles.content}>
                        form URL Control
                    </div>
                </Panel>
            </Tabs>
        </div>
    );
}

export default Form;
