import React from 'react';
import Card from '../card/card';
import {SearchIcon} from '../icon/icon';
import TextSelect from '../control/text-select';
import Input from '../control/input';
import styles from './search.module.scss';

function Search() {
    return (
        <Card>
            <div className={styles.top}>
                <h2>Donations</h2>
            </div>

            <div className={styles.bottom}>
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
        </Card>
    );
}

export default Search;
