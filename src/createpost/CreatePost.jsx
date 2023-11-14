import React, { useState } from 'react';
import './createPost.css';
import axios from "axios";


const CreatePost = () => {
    const [postList, setPostList] = useState([]);
    const createPostBtn = (event) => {
        event.preventDefault();
        const postContent = event.target[0].value;
        const postImg = event.target[1].value;

        axios.post("https://padmini-qurinom-backend.vercel.app/create_post", { postContent, postImg })
            .then(res => {
                console.log(res)
                window.location.href = 'http://localhost:3000'
            }).catch(e => {
                console.log(e);
            })
    }
    return (
        <div className='createpost createblur'>
            <div className="createpostform">
                <form onSubmit={createPostBtn} className='signupbox'>
                    <input placeholder='Enter your post data' type="text" required />
                    <input placeholder='enter image url' type="text" required />
                    <button type="submit" >Create</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost
