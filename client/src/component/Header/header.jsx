import "./header.css";
import img from "../../asset/background.jpg";
function Header() {
    return (
        <>
            <div className="header">
                <div className="headerTitle">
                    <span className="headerlg">Athletory</span>
                    <span className="headersm"> Glory & Grind</span>
                </div>
                {/*<img className="header-image" src={img} alt=""></img>*/}
            </div>
        </>
    );
}
export default Header;
