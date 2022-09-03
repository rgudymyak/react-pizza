import React from 'react';
import { SearchContext } from '../../App';

import debounce from 'lodash.debounce';

import searchPng from '../../assets/img/search.png';
import styles from './Search.module.scss';




export const Search = () => {
    const [value, setValue] = React.useState('')
    const { setSearchText } = React.useContext(SearchContext);
    const inputRef = React.useRef();

    const onClickClear = () => {
        setSearchText('');
        setValue('');
        inputRef.current.focus();
    }

    const updateSearchValue = React.useCallback(
        debounce((str) => {
            setSearchText(str)
        }, 1000),
        [],
    );

    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }

    return (
        <div className={styles.root}>
            <img className={styles.icon} src={searchPng} alt="searchIcon" />
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                className={styles.input}
                placeholder='Поиск пиццы' />


            {value && (
                <svg
                    onClick={onClickClear}
                    className={styles.clear}
                    version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000">
                    <path d="M638.6,500l322.7-322.7c38.3-38.3,38.3-100.3,0-138.6C923,0.4,861,0.4,822.7,38.7L500,361.4L177.3,38.7C139,0.4,77,0.4,38.7,38.7C0.4,77,0.4,139,38.7,177.3L361.4,500L38.7,822.7C0.4,861,0.4,923,38.7,961.3C57.9,980.4,82.9,990,108,990s50.1-9.6,69.3-28.7L500,638.6l322.7,322.7c19.1,19.1,44.2,28.7,69.3,28.7c25.1,0,50.1-9.6,69.3-28.7c38.3-38.3,38.3-100.3,0-138.6L638.6,500z" />
                </svg>)}

        </div>
    )
}
