import React from 'react';
import {SearchIcon} from '../icon/icon';
import TextSelect from '../text-select/text-select';
import Input from '../input/input';
import styles from './search.module.scss';

function Search() {
    return (
        <div className="card">
            <div className={`card_top ${styles.card_top}`}>
                <h2>Donations</h2>
            </div>
            <div className={`card_bottom ${styles.card_bottom}`}>
                <div className={styles.search}>
                    <Input placeholder="Search" id="search">
                        <SearchIcon className="caption-color icon-size-base" />
                    </Input>
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
