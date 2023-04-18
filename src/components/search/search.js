import React from 'react';
import {SearchIcon} from '../icon/icon';
import TextSelect from '../text-select/text-select';
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

                <TextSelect id="status" options={[
                    {value: 'All statuses', text: 'All statuses'},
                    {value: 'Succeeded', text: 'Succeeded'},
                    {value: 'Errored', text: 'Errored'},
                ]} />
            </div>
        </div>
    );
}

export default Search;
