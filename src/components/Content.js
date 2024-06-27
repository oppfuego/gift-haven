import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content ${className}`}>
      <img
        className="gift-card-image"
        loading="lazy"
        alt=""
        src="/frame-65@2x.png"
      />
      <div className="product-details1">
        <div className="product-options">
          <div className="dropdown">
            <h1 className="giftcard-variant-1">Giftcard Variant 1</h1>
            <div className="option">
              <h3 className="select-an-option">Select an Option</h3>
              <div className="review-stars-parent">
                <div className="review-stars">
                  <img
                    className="review-stars-child"
                    loading="lazy"
                    alt=""
                    src="/star-6.svg"
                  />
                  <img
                    className="review-stars-item"
                    loading="lazy"
                    alt=""
                    src="/star-6.svg"
                  />
                  <img
                    className="review-stars-inner"
                    loading="lazy"
                    alt=""
                    src="/star-6.svg"
                  />
                  <img
                    className="star-icon"
                    loading="lazy"
                    alt=""
                    src="/star-6.svg"
                  />
                  <img
                    className="review-stars-child1"
                    loading="lazy"
                    alt=""
                    src="/star-10.svg"
                  />
                </div>
                <div className="reviews1">4.4 (1000 Reviews+)</div>
              </div>
            </div>
          </div>
          <div className="image-gallery">
            <div className="quantity-selector">
              <div className="quantity">Quantity</div>
              <div className="quantity-input">
                <img
                  className="quantity-icon"
                  alt=""
                  src="/quantity-icon.svg"
                />
              </div>
            </div>
            <div className="shop-wrapper">
              <div className="shop11">USD 10</div>
            </div>
            <div className="shop-container">
              <div className="shop12">USD 20</div>
            </div>
            <button className="shop-frame">
              <div className="shop13">USD 25</div>
            </button>
            <div className="frame-div">
              <div className="shop14">USD 50</div>
            </div>
            <button className="frame-button">
              <div className="shop15">USD 100</div>
            </button>
          </div>
          <div className="description">
            <div className="the-gift-card-container">
              <p className="the-gift-card">{`The Gift Card is a super card, redeemable at all of our partner brands in the UAE (Online & In-store brands). It's the ultimate birthday surprise for anyone and everyone!`}</p>
              <p className="blank-line2">&nbsp;</p>
              <p className="as-a-single">{`As a single choice card, family and loved ones can spend the HappyYou Birthday Card at top Brands across Online Shopping, Digital Entertainment, Groceries, Food Delivery, Electronics, Fashion, Kids, Malls, Leisure, Spas, Restaurants, Travel & much more.`}</p>
            </div>
            <div className="shop-buttons1">
              <button className="button10">
                <div className="shop16">Buy Now</div>
              </button>
              <button className="button11">
                <div className="shop17">Gift a Friend</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
