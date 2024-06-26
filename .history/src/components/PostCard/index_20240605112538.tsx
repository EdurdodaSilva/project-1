import React from "react";


export const PostCard = (props) => {
    const post = props.post
    return (
        <h1>Oi</h1>
        <div className="post">
            <img src={ post.cover } alt={post.title}/>
            <div key={post.id} className="post-content">
                <h1>{post.title}</h1>
                <p>{ post.body}</p>
            </div>
        </div>
    );
}