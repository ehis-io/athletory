import "./write.css";
import img from "../../../asset/background.jpg";
import {useState} from 'react'


export default function Write() {
    const [data, setData] = useState(
        {
        title :"",
        text : "",
        
    })

    function handle(e) {
        const newdata ={...data, [e.target.name]: e.target.value}
        setData(newdata)
     
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(data)
       
    }
    return (
        <>
            <div className="write">
                <form onSubmit={handleSubmit} 
                className="writeForm">
                    <img className="writeImage" src={img} alt=""></img>
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
                            id = "title"
                            autoFocus={true}
                            
                            value ={data.value}
                            onChange = {handle}
                            
                            
                             
                        />

                    </div>

                    <div className="writeFormGroup">
                        <textarea
                            placeholder="Write article here..."
                            type="text"
                            className="writeInput writeText"
                            id = "text"
                            value = {data.value}
                            onChange={handle}
                            
                            
                        ></textarea>
                    </div>

                    <button className="writeSubmit" type = "button">
                        Publish
                    </button>
                </form>
            </div>
        </>
    );
}
