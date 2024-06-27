import PropTypes from "prop-types";
import "./StoreLocator.css";

const StoreLocator = ({ className = "" }) => {
  return (
    <section className={`store-locator ${className}`}>
      <div className="locator-details">
        <div className="locator-content">
          <div className="find-out-where-you-can-shop-as-parent">
            <h1 className="find-out-where">
              Find out where you can shop as an Gifthaven shopper in your area
            </h1>
            <div className="locator-button">
              <div className="button-wrapper">
                <div className="button8">Zip Code</div>
              </div>
              <button className="button9">
                <div className="shop10">Show Stores</div>
              </button>
            </div>
          </div>
          <div className="have-a-question">Have a question? View our FAQs</div>
        </div>
      </div>
      <div className="popular-stores">
        <div className="popular-stores-on">Popular Stores on Gifthaven</div>
        <div className="store-logos">
          <img
            className="store-logo-details"
            loading="lazy"
            alt=""
            src="/frame-1410065678@2x.png"
          />
          <img
            className="store-logo-details1"
            loading="lazy"
            alt=""
            src="/frame-1410065679@2x.png"
          />
          <div className="store-logo-details2">
            <div className="store-logo-container">
              <div className="store-logo-placeholder" />
              <img className="image-12-icon" alt="" src="/image-12@2x.png" />
            </div>
          </div>
          <img
            className="store-logo-details3"
            alt=""
            src="/store-logo-details@2x.png"
          />
          <img
            className="store-logo-details4"
            alt=""
            src="/frame-1410065678-1@2x.png"
          />
          <img
            className="store-logo-details5"
            alt=""
            src="/frame-1410065679-1@2x.png"
          />
          <img
            className="store-logo-details6"
            alt=""
            src="/store-logo-details@2x.png"
          />
          <img
            className="store-logo-details7"
            alt=""
            src="/frame-1410065677-1@2x.png"
          />
          <img
            className="store-logo-details8"
            alt=""
            src="/frame-1410065678-2@2x.png"
          />
          <img
            className="store-logo-details9"
            alt=""
            src="/frame-1410065679-2@2x.png"
          />
          <img
            className="store-logo-details10"
            alt=""
            src="/frame-1410065680-1@2x.png"
          />
          <img
            className="store-logo-details11"
            alt=""
            src="/frame-1410065677-2@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

StoreLocator.propTypes = {
  className: PropTypes.string,
};

export default StoreLocator;
