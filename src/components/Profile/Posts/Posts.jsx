import React from 'react';

import InputPost from './InputPost/InputPost';
import Post from './Post/Post';
import style from './Posts.module.scss';

const Posts = ({posts, inputValue, onChangeHandler, addPostHandler}) => {
    return (
        <div className={style.posts__container}>
            <InputPost 
                value={inputValue} 
                onChangeHandler={onChangeHandler}
                addPostHandler={addPostHandler}
            />
            {posts.map((post, i) => <Post key={i} text={post} />)}
        </div>
    );
};

export default Posts;