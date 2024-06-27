import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  foodGiftCardContent,
  foodGiftCard,
  propWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`food-gift-card-content-parent ${className}`}
      style={frameDivStyle}
    >
      <img
        className="food-gift-card-content"
        loading="lazy"
        alt=""
        src={foodGiftCardContent}
      />
      <h3 className="food-gift-card">{foodGiftCard}</h3>
      <button className="button14">
        <div className="shop20">Buy Now</div>
      </button>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  foodGiftCardContent: PropTypes.string,
  foodGiftCard: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default FrameComponent;
