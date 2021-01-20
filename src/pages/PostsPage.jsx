import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import styles from '../assets/css/PostsPage.module.css';
import {Preloader} from "../components/Preloader";
import {Post} from "../components/Post";
import {postAPI} from '../api/API';
import {Modal} from "antd";

const PostsPage = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const params = useParams();

    useEffect(() => {
        const getAll = async () => {
            setLoading(true);
            try {
                const response = await postAPI.getAllPosts();
                setPosts(response)
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        };

        const getSingle = async (id) => {
            setLoading(true);
            try {
                const response = await postAPI.getSinglePost(id);
                setPost(response);
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false);
            }
        };

        if (params.id) {
            getSingle(params.id);
        } else {
            getAll();
        }

    }, [params.id]);

    return (
        <div className={styles.postsPageBody}>
            {loading && <Preloader/>}

            {(!!posts.length) &&
            <div className={styles.postsContainer}>
                {posts.map(post =>
                    <div key={post.id} className={styles.gridWrap}>
                    <Post short
                          id={post.id}
                          text={post.body}
                          title={post.title}/>
                    </div>)}
            </div>}


            {(params.id && !!Object.keys(post).length) &&

            <Modal width={600}
                   centered
                   visible={params.id}
                   onCancel={() => history.push('/posts')}
                   footer={null}
                   title={null}
            >
                <Post title={post.title} text={post.body} id={post.id}/>
            </Modal>}

        </div>
    )
};

export default PostsPage;