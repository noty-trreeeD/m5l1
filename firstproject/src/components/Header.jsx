import cs2logo from '../assets/cs2logoSvg.svg';
import '../styles/Header.css'

export const Header = () => {
    return (
        <div className="header">
            <img className='logo' src={cs2logo} alt="CS2 Logo" />
            <a href="">Main</a>
            <a href="">About</a>
            <a href="">Contact us</a>
            <button className='header-btn'>Click me!</button>
        </div>
    );
};