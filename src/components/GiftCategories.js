import PropTypes from "prop-types";
import "./GiftCategories.css";

const GiftCategories = ({ className = "" }) => {
  return (
    <section className={`gift-categories ${className}`}>
      <div className="gift-card-shop-buttons">
        <h1 className="single-brand-gift">Single Brand Gift Cards</h1>
        <button className="button6">
          <div className="shop8">Online</div>
        </button>
        <button className="button7">
          <div className="shop9">In Store</div>
        </button>
      </div>
      <div className="gift-card-types">
        <img
          className="gift-card-type-details"
          alt=""
          src="/frame-1410065660@2x.png"
        />
        <div className="festivals2">Festivals</div>
      </div>
      <div className="gift-card-types1">
        <img className="gift-card-types-child" alt="" src="/frame-15@2x.png" />
        <div className="family1">Family</div>
      </div>
      <div className="gift-card-types2">
        <img
          className="gift-card-types-item"
          alt=""
          src="/frame-1410065661@2x.png"
        />
        <div className="close-ones1">Close Ones</div>
      </div>
      <div className="gift-card-types3">
        <img
          className="gift-card-types-inner"
          alt=""
          src="/frame-1410065662@2x.png"
        />
        <div className="luxury1">Luxury</div>
      </div>
      <div className="gift-card-types4">
        <img className="frame-icon" alt="" src="/frame-15-2@2x.png" />
        <div className="sports">Sports</div>
      </div>
      <div className="gift-card-types5">
        <img
          className="gift-card-types-child1"
          loading="lazy"
          alt=""
          src="/frame-16@2x.png"
        />
        <div className="travel">Travel</div>
      </div>
      <div className="gift-card-types6">
        <img
          className="gift-card-types-child2"
          alt=""
          src="/frame-15-3@2x.png"
        />
        <div className="clothes">Clothes</div>
      </div>
      <div className="gift-card-types7">
        <img
          className="gift-card-types-child3"
          alt=""
          src="/frame-15-4@2x.png"
        />
        <div className="clothes1">Clothes</div>
      </div>
    </section>
  );
};

GiftCategories.propTypes = {
  className: PropTypes.string,
};

export default GiftCategories;
