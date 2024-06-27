import PropTypes from "prop-types";
import "./Footer.css";
import {Link} from "react-router-dom";

const Footer = ({ className = "" }) => {
  return (
      <footer className={`footer ${className}`}>
        <div className="footer-links">
          <div className="footer-logo">
            <img className="logo-icon" loading="lazy" alt="" src="/logo.svg"/>
          </div>
          <div className="footer-meta">
            <h3 className="about1">About</h3>
            <div className="about2">About</div>
            <div className="faq">FAQ</div>
            <div className="contact1">Contact</div>
            <div className="press">Press</div>
            <div className="reviews">Reviews</div>
          </div>
          <div className="product-parent">
            <h3 className="product">Product</h3>
            <div className="businesses">Businesses</div>
            <div className="gift-card-incentives">Gift Card Incentives</div>
          </div>
          <div className="legal-parent">
            <h3 className="legal">Legal</h3>
            <Link to="/site-terms" className="site-terms">Site Terms</Link>
            <Link to="/refund-policy" className="privacy">Privacy</Link>
          </div>
          <div className="use-gifthaven-parent">
            <h3 className="use-gifthaven">Use GiftHaven</h3>
            <div className="how-it-works">How it works</div>
            <div className="why-us">Why Us?</div>
            <div className="redeem">Redeem</div>
          </div>
          <div className="other-stuff-parent">
            <h3 className="other-stuff">Other stuff</h3>
            <div className="blog1">Blog</div>
            <div className="gift-card-worth">Gift Card Worth</div>
            <div className="sitemap">Sitemap</div>
          </div>
        </div>
        <div
            className="categories-restaurants-bars-sp">{`Categories Restaurants Bars Spas Shopping Night Life Food Active Life Arts Hotels & Travel Event Planning & Services`}</div>
  <div className="footer-bottom-line"></div>
        <div className="footer-bottom-container-wrapper">
  <div className="footer-bottom-container">
    <p>AuroraMosaic LLC </p>
    <p>License number: 2325895</p>
    <p>Sharjah Media City (Shams), Al Messaned, Al Bataeh, Sharjah, United Arab Emirates</p>

  </div>

</div>
      </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
