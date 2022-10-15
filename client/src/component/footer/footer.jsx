import "./footer.css";
const date = new Date();
var year = date.getFullYear();
export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footerTop">
                    <div className="footerLeft">
                        <i className="footerIcon fab fa-facebook-square"></i>
                        <i className="footerIcon fab fa-twitter-square"></i>
                        <i className="footerIcon fab fa-instagram"></i>
                    </div>
                </div>
                <div className="footerCenter">
                    <ul className="footerList">
                        <li className="footerListItem">HOME</li>
                        <li className="footerListItem">BLOG</li>
                        <li className="footerListItem"> STORE</li>
                        <li className="footerListItem"> ATHLETORY AID</li>
                        <li className="footerListItem">STORE</li>
                    </ul>
                </div>
                <p className="copy"> &copy; 2022 -{year} by Athletory</p>
            </div>
        </>
    );
}
