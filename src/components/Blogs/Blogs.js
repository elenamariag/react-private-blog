import React from "react";
import posts from '../../data/posts.json';
import {Link} from "react-router-dom";

function Blogs (){
    return (
        <section>
            <h1>Blog overzicht</h1>
            <h3>Aantal blog posts: {posts.length}</h3>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}><Link to={`blog/${post.id}`}>{post.title}</Link></li>})}
            </ul>
        </section>
    )
}

export default Blogs;