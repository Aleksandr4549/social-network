import React from 'react';

import InputPost from './InputPost/InputPost';
import Post from './Post/Post';
import style from './Posts.module.scss';

const Posts = ({ posts = ['Hello', 'World'] }) => {
    return (
        <div className={style.posts__container}>
            <InputPost value='added post' onChangeHandler={(e) => console.log(e)}/>
            {posts.map((post, i) => <Post key={i} text={post} />)}
        </div>
    );
};

export default Posts;