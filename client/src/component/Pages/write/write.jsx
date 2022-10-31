import "./write.css";
import img from "../../../asset/background.jpg";
import {useState} from 'react'
import axios from 'axios'
const baseUrl = 'http://localhost:3030/post/post'



export default function Write() {
    const [post, setPost] = useState(
        {
            post_title:"",
            post_text:"",
            post_image_id:"",
            user_id:"",

            
    })

    function handle(e) {
        const newPost ={...post, [e.target.id]: e.target.value}
        setPost(newPost)
     
    }

    function handleSubmit(e){
        e.preventDefault()
        //console.log(post)
        axios.post(baseUrl, post).then(res=>{
            console.log(res)
            console.log(res.data)
        })
       
    }
    return (
        <>
            <div className="write">
                <form onSubmit={handleSubmit} 
                className="writeForm">
{/*                     
                    <img className="writeImage" src='' alt=""></img> */}
                    <div className="writeFormGroup">
                        <label htmlFor="fileInput">
                            <i className=" addIcon fas fa-plus"></i>
                        </label>

                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                        />

                        <input
                            type="text"
                            placeholder="title"
                            className="writeInput"
                            id = "post_title"
                            autoFocus={true}
                            
                            value ={post.post_title}
                            onChange = {handle}
                            
                            
                             
                        />

                    </div>

                    <div className="writeFormGroup">
                        <textarea
                            placeholder="Write article here..."
                            type="text"
                            className="writeInput writeText"
                            id = "post_text"
                            value = {post.text_text}
                            onChange={handle}
                            
                            
                        ></textarea>
                    </div>

                    <button onClick={handleSubmit} className="writeSubmit" type = "button">
                        Publish
                    </button>
                </form>
            </div>
        </>
    );
}
