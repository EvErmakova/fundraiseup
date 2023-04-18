import React, {useState} from 'react';
import styles from './tabs.module.scss';

function Panel(props) {
    return (
        <>{props.children}</>
    )
}

function Tabs(props) {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <>
            <div className={styles.tabs}>
                <ul className={styles.list}>
                    {props.children.map((elem, index) => {
                        return (
                            <li key={index}>
                                <button className={`${styles.item} ${index === activeTab ? styles.active: ''}`}
                                        onClick={() => setActiveTab(index)}
                                        type="button"
                                >
                                    {elem.props.title}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            {props.children[activeTab]}
        </>
    )
}

export {Panel, Tabs};
