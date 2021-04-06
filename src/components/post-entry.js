import React from 'react';
import PropTypes from 'prop-types';

// types
import { PostType } from '../types/post.type';
import { UserType } from '../types/user.type';

const PostEntry = ({ post, user, children }) => {
    const { title, body } = post;
    const { name } = user;
    return (
        <article>
            <h2>{title}</h2>
            <h3>by {name}</h3>
            <p>{body}</p>
            {children}
        </article>
    );
};

PostEntry.propTypes = {
    post: PostType.isRequired,
    user: UserType.isRequired,
    children: PropTypes.node.isRequired,
};

export default PostEntry;
