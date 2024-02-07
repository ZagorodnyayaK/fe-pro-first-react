import logo from 'public/logo192.png';
import "./Header.css";
export function Header() {
    return (
        <div className="header">
            <h1>Free Wallpaper</h1>
            <img src={logo} alt="logo"/>
        </div>
    )
}