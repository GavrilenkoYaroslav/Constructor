import React, { useCallback } from 'react';
import styles from '../assets/css/Structure.module.css';
import {StructureItem} from "./StructureItem";

export const StructureGroup = ({ group, onClick, ...props }) => {

    const _onClick = useCallback(itemId => {
        onClick(group.id, itemId)
    },[group.id, onClick]);


    return (
        <div {...props}>
            <div className={styles.title}>
                {group.title}
            </div>
            <div className={styles.itemsWrapper}>
                {!!group.items.length && group.items.map((item, i) => <StructureItem key={i} onClick={ _onClick } item={item}/>)}

                {!group.items.length && <span className={styles.item}>+</span>}
            </div>
        </div>
    );
};