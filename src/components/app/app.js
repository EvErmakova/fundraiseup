import React from 'react';
import Search from '../search/search';
import Info from '../info/info';
import Form from '../form/form';
import Menu from '../menu/menu';
import styles from './app.module.scss';

function App() {
    return (
        <div className={styles.widget}>
            <div className={styles.header}>
                <Search />
            </div>
            <div className={styles.aside}>
                <Menu />
            </div>
            <Info />
            <Form />
        </div>
    );
}

export default App;
