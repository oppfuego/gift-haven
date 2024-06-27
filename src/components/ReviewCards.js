import PropTypes from "prop-types";
import "./ReviewCards.css";

const ReviewCards = ({
  className = "",
  reviewerImages,
  millieB,
  texasUSA,
  exceptionalValueWithVeriz,
}) => {
  return (
    <div className={`review-cards ${className}`}>
      <img
        className="reviewer-images-icon"
        loading="lazy"
        alt=""
        src={reviewerImages}
      />
      <div className="reviewer-details">
        <h3 className="millie-b">{millieB}</h3>
        <div className="texas-usa">{texasUSA}</div>
      </div>
      <div className="review-content">
        <h1 className="h1">“</h1>
        <div className="exceptional-value-with">
          {exceptionalValueWithVeriz}
        </div>
      </div>
    </div>
  );
};

ReviewCards.propTypes = {
  className: PropTypes.string,
  reviewerImages: PropTypes.string,
  millieB: PropTypes.string,
  texasUSA: PropTypes.string,
  exceptionalValueWithVeriz: PropTypes.string,
};

export default ReviewCards;
