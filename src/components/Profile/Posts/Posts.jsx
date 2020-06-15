import React from 'react';

import InputPost from './InputPost/InputPost';
import Post from './Post/Post';
import style from './Posts.module.scss';

const Posts = ({inputValue, onChangeHandler}) => {
    const posts = ['hello', 'world']
    return (
        <div className={style.posts__container}>
            <InputPost value={inputValue} onChangeHandler={onChangeHandler}/>
            {posts.map((post, i) => <Post key={i} text={post} />)}
        </div>
    );
};

export default Posts;