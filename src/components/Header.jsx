import logo from '../assets/images/tomu-logo.webp';
import '../styles/components/Header.scss';

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logo} />
      <div className="header__right">
        <p className="header__right__text">Join community</p>
        <button className="header__right__button">Join waitlist</button>
      </div>
    </div>
  );
};

export default Header;
