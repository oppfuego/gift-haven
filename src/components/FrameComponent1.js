import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "", yourCart }) => {
  return (
    <section className={`header-parent ${className}`}>
      <header className="header1">
        <div className="user-actions">
          <div className="rating1">
            <div className="excellent1">Excellent</div>
            <div className="out-of-51">4.8 out of 5 Stars</div>
          </div>
          <div className="earn-15-points1">
            Earn 15 Points - Join GiftHaven Rewards
          </div>
          <div className="login-sign1">Login / Sign up</div>
        </div>
        <div className="content1">
          <div className="logo1">
            <h1 className="gifthaven1">GiftHaven</h1>
          </div>
          <nav className="navigation1">
            <nav className="site-links">
              <div className="about3">About</div>
              <div className="blog2">Blog</div>
              <div className="work1">Work</div>
              <div className="platform1">Platform</div>
              <div className="contact2">Contact</div>
              <div className="shop21">Shop</div>
            </nav>
          </nav>
          <div className="shop-button1">
            <button className="button15">
              <div className="shop22">Store Locator</div>
            </button>
          </div>
        </div>
      </header>
      <div className="frame-wrapper">
        <div className="cart-title-parent">
          <div className="cart-title">
            <h1 className="your-cart">{yourCart}</h1>
          </div>
          <b className="view-or-edit">View or edit your cart before checkout</b>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  yourCart: PropTypes.string,
};

export default FrameComponent1;
