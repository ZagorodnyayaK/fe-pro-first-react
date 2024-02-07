import logo from '../../images/logo3.png';
import "./Header.css";

export function Header() {
    console.log({logo})
    return (
        <div className="header">
            <div className="title">
                <h1>Free Wallpaper</h1>
            </div>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>

        </div>
    )
}