import React from 'react';
import styles from '../assets/css/Structure.module.css';

export const StructureItem = ({item, onClick}) => {

    const _onClick = () => {
        onClick(item.id)
    };

    return (
        <span onClick={ _onClick }
              className={`${styles.item} ${item.selected ? styles.active : ''}`}>
                                {item.name}
                            </span>
    );
};