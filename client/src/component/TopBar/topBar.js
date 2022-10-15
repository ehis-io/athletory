import "./index.css";
import Logo from "../../asset/logo.jpg";
import { Link } from "react-router-dom";
function TopBar() {
    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-instagram"></i>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/athletoryaid">
                            ATHLETORY AID
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/store">
                            STORE
                        </Link>
                    </li>
                    {user ? (
                        <li className="topListItem">
                            <Link className="link" to="/write">
                                WRITE
                            </Link>
                        </li>
                    ) : null}
                    <li>{user && "LOGOUT"}</li>
                </ul>
            </div>

            <div className="topRight">
                {user ? (
                    <img className="topImg" src={Logo} alt="logo" />
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>

                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}
export default TopBar;
