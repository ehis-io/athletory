import "./single.css";
import SinglePost from "../../../component/singlePost/singlePost";
import SideBar from "../../../component/sideBar/sideBar";
export default function Single() {
    return (
        <>
            <div className="single">
                <SinglePost />
                <SideBar />
            </div>
        </>
    );
}
