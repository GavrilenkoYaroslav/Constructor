import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../assets/css/HomePage.module.css';
import { FireFilled } from '@ant-design/icons';
import girl from '../assets/images/unnamed.png';
import logo from '../assets/images/decenter-logo.svg';

export const HomePage = () => {
    const history = useHistory();

    const onStart = () => {
        history.push('/start');
    };

    return (
        <>
            <div className={styles.logo}>
                <img src={logo} alt={''}/>
            </div>

            <div className={styles.greetingsBox}>
                <span className={styles.title}>
                    Создайте филиал или магазин
                с нуля в Telegram, автоматизируйте продажи
                </span>
                <span className={styles.subTitle}>
                    Лучшая платформа с автоматизированным приемом
                платежей в Bitcoin
                </span>
                <button onClick={ onStart } className={styles.startButton}><FireFilled />Начать бесплатно!</button>
                <p>Регистрация не требуется</p>
            </div>

            <img src={girl} alt={''} className={styles.bigImage}/>
        </>
    );
};