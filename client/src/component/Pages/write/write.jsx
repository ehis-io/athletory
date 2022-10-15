import "./write.css";
import img from "../../../asset/background.jpg";
export default function Write() {
    return (
        <>
            <div className="write">
                <form className="writeForm">
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
                            autoFocus={true}
                        />
                    </div>
                    <div className="writeFormGroup">
                        <textarea
                            placeholder="Write article here..."
                            type="text"
                            className="writeInput writeText"
                        ></textarea>
                    </div>
                    <button className="writeSubmit"> Publish</button>
                </form>
            </div>
        </>
    );
}
