import React from "react";
import './styles.css'

export const PostCard = ({ title, cover, body, id }) => (
    <div className="post">
        <img src={cover} alt={title} />
        <div className="post-content">
        <h1>{title} ID:{id}</h1>
        <p>{body}</p>
        </div>
    </div>
);
