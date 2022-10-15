import "./home.css";
import Posts from "../../../component/post/posts/posts";
import SideBar from "../../../component/sideBar/sideBar";
import Header from "../../../component/Header/header";
export default function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                {/* / <SideBar />*/}
            </div>
        </>
    );
}
