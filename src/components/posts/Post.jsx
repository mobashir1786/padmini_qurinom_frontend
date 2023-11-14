import React, { useState, useEffect } from 'react';
import './post.css';
import axios from "axios";
import heart from '../../assets/heart.png';
import comment from '../../assets/comment.png';
import share from '../../assets/share.png';
import profile from '../../assets/laraP.png'

const Post = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        let cookie = document.cookie;
        cookie = cookie.split("=");
        console.log(cookie[1]);

        axios.get("https://padmini-qurinom-backend.vercel.app/get_posts", {
            params: {
                token: cookie[1],
            },
        })
            .then((res) => {
                console.log(res.data.allPosts);
                setPostList(res.data.allPosts);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
                if (error.response) {
                    console.error("Server responded with:", error.response.data);
                }
            });
    }, []);

    return (
        <div className='posts'>
            {
                postList.length >= 0 ?
                    postList.map((n) => (
                        <div className="post">
                            <div className="postProfile">
                                {/* <div className="postProfileLeft"> */}
                                <img src={profile} alt="profile" />
                                {/* </div> */}
                                <div className="postProfileRight">
                                    <div className="postname">xyz</div>
                                    <div className="postId">xyz@123</div>
                                </div>
                            </div>
                            <div className="postContent">{n.postContent}</div>
                            <img src={n.postImg} alt="xyz" />
                            <div className="postIntraction">
                                <div className="postIntractionData">
                                    <img src={heart} alt="xyz" />
                                    <div>{8}</div>
                                </div>
                                <div className="postIntractionData">
                                    <img src={comment} alt="xyz" />
                                    <div>{8}</div>
                                </div>
                                <div className="postIntractionData">
                                    <img src={share} alt="xyz" />
                                    <div>{8}</div>
                                </div>
                            </div>
                        </div>
                    )) :
                    <h1 className="post">No Post is there , create your post to see on home Page</h1>
            }
        </div>
    )
}

export default Post
