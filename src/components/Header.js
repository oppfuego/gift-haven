import PropTypes from "prop-types";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="rewards-login">
        <div className="rating">
          <div className="excellent">Excellent</div>
          <div className="out-of-5">4.8 out of 5 Stars</div>
        </div>
        <div className="earn-15-points">
          Earn 15 Points - Join GiftHaven Rewards
        </div>
        <Link to="/sign-in" className="login-sign">
            Login / Sign up
        </Link>
      </div>
      <div className="logo-nav">
        <Link to="/" className="logo">
          <h1 className="gifthaven">GiftHaven</h1>

        </Link>
        <nav className="navigation">
          <nav className="nav-links">
            <div className="about">About</div>
            <div className="blog">Blog</div>
            <div className="work">Work</div>
            <div className="platform">Platform</div>
            <div className="contact">Contact</div>
            <Link to="/product-listing" className="shop4">
            <div className="shop4">Shop</div>
            </Link>
          </nav>
        </nav>
        <div className="shop-button">
          <button className="button3">
            <Link to="/account">
              <div className="shop5">Store Locator</div>
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
