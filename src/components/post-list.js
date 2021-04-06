import React from 'react';
import PropTypes from 'prop-types';

// components
import PostEntry from './post-entry';
import Review from './review';

// types
import { PostType } from '../types/post.type';
import { UserType } from '../types/user.type';

const PostList = ({ posts, users, updatePost }) => {
    return posts.map(post => {
        const user = users.find(({ id }) => id === post.userId);
        return (
            <PostEntry key={post.id} post={post} user={user}>
                <Review
                    postId={post.id}
                    updatePost={updatePost}
                    liked={post.liked}
                />
            </PostEntry>
        );
    });
};

PostList.propTypes = {
    posts: PropTypes.arrayOf(PostType).isRequired,
    users: PropTypes.arrayOf(UserType).isRequired,
    updatePost: PropTypes.func.isRequired,
};

export default PostList;
