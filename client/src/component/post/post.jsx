import "./post.css";
import img from "../../asset/joy.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Post () {

    const baseUrl = `http://localhost:3030/post/findAll`

    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const auth_key = JSON.stringify(localStorage.getItem('access_token'))
    //console.log(auth_key)

    //Getting data
    
    const data = async () => {
        setLoading(true)

        try {
            
            const res = await axios.get(baseUrl,
            {
                headers: {
        
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `Bearer ${auth_key}`,
                    'Accept': 'application/json'
        
                }
            })
            
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
                <div className="post" key = {posts.id}>
                    <img className="postImage" src={ img } alt="" />
                    <div className="postInfo">
                    <span className="category"> Sport Media</span>
                    <span className="category"> Biography</span>

                    <div className="postTitle">{ posts.post_title}</div>
                    <div className="postDate"> {posts.post_date.split('T', 1)}</div>

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
