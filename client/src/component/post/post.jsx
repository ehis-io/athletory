import "./post.css";
import img from "../../asset/joy.jpg";

export default function Post() {
    return (
        <>
            <div className="post">
                <img className="postImage" src={img} alt="" />
                <div className="postInfo">
                    <span className="category"> Sport Media</span>
                    <span className="category"> Biography</span>

                    <div className="postTitle">The Struggle of The Athlete</div>

                    <div className="postDate"> posted 1 hour ago</div>

                    <div className="description">
                        <p className="postDescription">
                            {" "}
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            'Content here, content here', making it look like
                            readable English. Many desktop publishing packages
                            and web page editors now use Lorem Ipsum as their
                            default model text, and a search for 'lorem ipsum'
                            will uncover many web sites still in their infancy.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
