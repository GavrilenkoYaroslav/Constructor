import axios from "axios";


const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        "Content-Type": "application/json",
    },
});

export const postAPI = {

    getAllPosts() {
       return api.get('/posts').then(res => res.data);
    },

    getSinglePost(id) {
       return api.get(`/posts/${id}`).then(res => res.data);
    },

};