import React from 'react';
import Card from '../card/card';
import {Tabs, Panel} from '../tabs/tabs';
import BehaviorForm from './behaviorForm';
import styles from './form.module.scss';

function Form() {
    return (
        <Card>
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
        </Card>
    );
}

export default Form;
