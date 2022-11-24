import "./posts.css";
import Post from "../post";

export default function Posts(post) {
   


    return (
        <>
            <div className="posts">
            
                <Post blog={ post } key={ post.id} />
                {/* <Post blog={ post } key={ post.id } />
                <Post blog={ post } key={ post.id } />
                <Post blog={ post } key={ post.id } />
                <Post blog={ post } key={ post.id } /> */}
            </div>
        </>
    );
}
