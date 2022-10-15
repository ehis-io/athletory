import "./sideBar.css";
import img from "../../asset/joy.jpg";

export default function sideBar() {
    return (
        <>
            <div className="sideBar">
                <div className="about">
                    <span className="sidebarTitle">ABOUT ME</span>
                    <br />
                    <img className="image" src={img} alt="" />
                    <p className="text">
                        TypeScript supports JSX and can correctly model the
                        patterns used in React codebases like useState. Getting
                        Set Up With a React Project Today there are many
                        frameworks which support TypeScript out of the box:
                        Create React App - TS docs Next.js - TS docs Gatsby - TS
                        Docs
                    </p>
                    <div className="sidebarItem">
                        <p className="sidebarTitle">CATEGORIES</p>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">Sport Media</li>
                            <li className="sidebarListItem"> Viral News</li>
                            <li className="sidebarListItem">Career</li>
                            <li className="sidebarListItem"> World Events</li>
                        </ul>
                    </div>
                    <div>
                        <span className="sidebarItem"> FOLLOW US</span>
                        <div className="sidebarFollow">
                            <i className="topIcon fab fa-facebook-square"></i>
                            <i className="topIcon fab fa-twitter-square"></i>
                            <i className="topIcon fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
