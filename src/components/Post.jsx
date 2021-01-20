import React from 'react';
import styles from '../assets/css/Post.module.css';
import { useHistory } from "react-router-dom";

export const Post = ({title, text, id, short}) => {
    const history = useHistory();

    return (
        <div onClick={ () => history.push(`/posts/${id}`) } className={styles.postWrapper}>
            <span className={styles.title}>
                {title}
            </span>
            <span className={styles.postText}>
                {!!short ? text.slice(0).split(' ', 15).join(' | ') : text}
            </span>
        </div>
    );
};