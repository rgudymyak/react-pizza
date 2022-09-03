import React from 'react';

import styles from './NotFoundBlock.module.scss';


export const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <h1>
            Ничего не найдено :(
            </h1>
            <p className={styles.description}>Извините, данной страницы нет в нашем интернет магазине!</p>
        </div>
        
    )
}