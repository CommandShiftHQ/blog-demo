import React, { useState } from 'react';

// components
import PostList from './components/post-list';

// mock data
import posts from './data/posts.json';
import users from './data/users.json';

const App = () => {
    const [postList, updatePostList] = useState(posts);

    const updatePost = id => {
        updatePostList(prev => {
            return prev.map(post => {
                if (post.id === id) {
                    return { ...post, liked: !post.liked };
                }
                return post;
            });
        });
    };

    return (
        <>
            <header className="App-header">
                <h1>Blog Demo</h1>
            </header>
            <PostList posts={postList} users={users} updatePost={updatePost} />
        </>
    );
};

export default App;
