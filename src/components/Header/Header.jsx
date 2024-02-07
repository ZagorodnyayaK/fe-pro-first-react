import logo from 'public/images/logo1.png';
import "./Header.css";
export function Header() {
    return (
        <div className="header">
            <h1>Free Wallpaper</h1>
            <img src={logo} alt="logo"/>
        </div>
    )
}