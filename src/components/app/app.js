import React, {useState} from 'react';
import Search from '../search/search';
import Info from '../info/info';
import Form from '../form/form';
import Menu from '../menu/menu';
import {MenuIcon} from '../icon/icon';
import styles from './app.module.scss';

function App() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className={styles.widget}>
            <div className={styles.header}>
                <Search />
            </div>
            <div className={`${styles.aside} ${showMenu && styles.show}`}>
                <Menu />
            </div>
            <Info />
            <Form />
            <button type="button" className={styles.menu_btn} title="Open Menu" tabIndex="1"
                    onClick={() => setShowMenu(!showMenu)}
            >
                <MenuIcon/>
            </button>
        </div>
    );
}

export default App;
