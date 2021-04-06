import React from 'react';
import PropTypes from 'prop-types';

const Review = ({ postId, updatePost, liked }) => {
    return (
        <>
            <button type="button" onClick={() => updatePost(postId)}>
                {liked ? 'dislike' : 'like'}
            </button>
        </>
    );
};

Review.propTypes = {
    postId: PropTypes.number.isRequired,
    updatePost: PropTypes.func.isRequired,
    liked: PropTypes.bool,
};

Review.defaultProps = {
    liked: false,
};

export default Review;
