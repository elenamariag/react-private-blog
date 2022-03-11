import React from 'react';
import posts from '../../data/posts.json';
import {useParams} from "react-router-dom";

function BlogPosts () {

    const {id} = useParams();

    const check = posts.find (post => {
        return post.id === id })

    return (
        <article>
            <h1>{check.title}</h1>
            <h2>{check.date}</h2>
            <p>{check.content}</p>
        </article>
    );
};

export default BlogPosts;