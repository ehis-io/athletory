import "./singlePost.css";
import img from "../../asset/background.jpg";
import axios from "axios";
import { useState, useEffect } from "react";
// const [post, setPost] = useState({
//    "post_title":"",
//     "post_text":"",
//     "post_image_id":"",
//     "user_id":""
    
  
    
// })

export default function SinglePost () {
    const postId = 1
    const baseUrl = `http://localhost:3030/post/${postId}`
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState({
        "post_title":"",
        "post_text": "",
        "post_date":"",
        "post_image_id":"",
        "user_id":""  
    })

    useEffect(() => {

        const fetchPost = async () => {
            axios.get(baseUrl).then(res => {
                setPost(res.data)
                //console.log(post)
            })
                .catch(function (error) {
                    console.log(error)
        
                })
                .then(function () {
                    setLoading(false)
                })
        }
        fetchPost()
        //console.log(post)

    }, [])

    return (
        <>
            <div className="singlePost">
                <div className="singlePostWrapper">
                    <h1 className="title">{ post.post_title}</h1>
                    <img className="image" src={img} alt=""></img>
                    <br />
                    <div className="singlePostEdit">
                        <i className="singlePostEditIcon far fa-edit"></i>
                        <i className="singlePostEditIcon far fa-trash-alt"></i>
                    </div>

                    <div className="singlePostInfo">
                        <span className="author">
                            {" "}
                            Author: <b>Faith Fidelis</b>
                        </span>
                        <span className="date"> { post.post_date}</span>
                    </div>
                    <p className="singlePostDescription">
                        {post.post_text}
                    </p>
                </div>
            </div>
        </>
    );
}
