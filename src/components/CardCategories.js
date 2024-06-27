import PropTypes from "prop-types";
import "./CardCategories.css";

const CardCategories = ({ className = "" }) => {
  return (
    <div className={`card-categories ${className}`}>
      <div className="category-list">
        <img
          className="category-items-icon"
          loading="lazy"
          alt=""
          src="/frame-1410065660@2x.png"
        />
        <h3 className="festivals3">Festivals</h3>
      </div>
      <div className="category-list1">
        <img
          className="category-list-child"
          loading="lazy"
          alt=""
          src="/frame-15@2x.png"
        />
        <h3 className="family2">Family</h3>
      </div>
      <div className="category-list2">
        <img
          className="category-list-item"
          loading="lazy"
          alt=""
          src="/frame-1410065661@2x.png"
        />
        <h3 className="close-ones2">Close Ones</h3>
      </div>
      <div className="category-list3">
        <img
          className="category-list-inner"
          loading="lazy"
          alt=""
          src="/frame-1410065662@2x.png"
        />
        <h3 className="luxury2">Luxury</h3>
      </div>
    </div>
  );
};

CardCategories.propTypes = {
  className: PropTypes.string,
};

export default CardCategories;
