import React from 'react';
import styles from '../assets/css/GreetingMessageControls.module.css';
import poshta from '../assets/images/poshta.jpg';
import {Switch, Input} from 'antd';

const {TextArea} = Input;

export const GreetingMessageControls = ({options,
                                         setCommonOptions,
                                         switchAddPicture,
                                         setShowModal,
                                         onMessageChange}) => {

    const _showModal = () => {
        setShowModal(true);
    };

    return (
        <div className={styles.container}>
            <span className={styles.title}>
                Приветственное сообщение
            </span>

            <div className={styles.imageWrapper}>
                <img src={poshta} alt={''}/>
            </div>

            <div className={styles.addImageContainer}>
                <span>Прикрепить картинку ?</span>
                <Switch checked={options.withImage} onChange={switchAddPicture}/>
            </div>

            <div className={styles.textareaWrapper}>
                <TextArea rows={3} value={options.message}
                          onChange={onMessageChange} placeholder={'Write your message here...'}/>
            </div>

            <div onClick={ _showModal } className={styles.addButton}>
               + добавить кнопку
            </div>

        </div>
    );
};