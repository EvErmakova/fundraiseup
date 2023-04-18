import React from 'react';
import {ArrowDownIcon, SearchIcon} from '../icon/icon';
import styles from './search.module.scss';

function Search() {
    return (
        <div className="card">
            <div className={`card_top ${styles.card_top}`}>
                <h2>Donations</h2>
            </div>
            <div className={`card_bottom ${styles.card_bottom}`}>
                <div className={`control ${styles.search}`}>
                    <div className="control_icon">
                        <SearchIcon className="caption-color icon-size-base" />
                    </div>
                    <input className="control_input" type="text" placeholder="Search" id="search" />
                </div>
                <div className="text-control">
                    <select className="control_select" name="status" id="status" defaultValue="All statuses">
                        <option value="All statuses">All statuses</option>
                        <option value="Succeeded">Succeeded</option>
                        <option value="Errored">Errored</option>
                    </select>
                    <ArrowDownIcon className="control_arrow" />
                </div>
            </div>
        </div>
    );
}

export default Search;
