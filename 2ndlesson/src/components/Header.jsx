import reactSvg from '../assets/react.svg';
import '../styles/Header.css'

export const Header = () => {
    return (
        <div className="header">
            <img className='logo' src={reactSvg} alt="CS2 Logo" />
            <div className="links">
                <a href="">Main</a>
                <a href="">About</a>
                <a href="">Contact us</a>
            </div>
        </div>
    );
};