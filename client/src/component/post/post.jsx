import "./post.css";
import img from "../../asset/joy.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Post () {

    const baseUrl = `http://localhost:3030/post/findAll`

    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    //Getting data
    
    const data = async () => {
        setLoading(true)

        try {
            
            const res = await axios.get(baseUrl)
            setPost(await res.data)
            setLoading(true)
        
                
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }


    useEffect(() => {
        data()
    
    }, [post])

    return (
        <>
            { post.map((posts) => (
                <div className="post" key = {posts.post_id}>
                    <img className="postImage" src={ img } alt="" />
                    <div className="postInfo">
                    <span className="category"> Sport Media</span>
                    <span className="category"> Biography</span>

                    <div className="postTitle">{ posts.post_title}</div>
                    <div className="postDate"> {posts.post_date}</div>

                    <div className="description">
                        <p className="postDescription">{ posts.post_text}</p>
                    </div>
                    </div>
                </div>
            ))
            }

        </>
    );
}
