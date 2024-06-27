import PropTypes from "prop-types";
import "./CallToAction.css";
import {Link} from "react-router-dom";

const CallToAction = ({ className = "", featuredText = "Featured Cards", buttons = [], images = [] }) => {
  return (
      <section className={`call-to-action ${className}`}>
        <div className="shop-buttons">
          <h1 className="featured-cards">{featuredText}</h1>
          {buttons.map((button, index) => (
              <button key={index} className={button.className}>
                <div className={button.divClassName}>{button.text}</div>
              </button>
          ))}
        </div>
        <div className="categories-row">
          {images.map((image, index) => (
              <div key={index} className="category-cards">
                  <Link to="/product-details">
                      <img
                          className="category-card-details"
                          loading="lazy"
                          alt={image.alt}
                          src={image.src}
                      />
                  </Link>
                  <Link to="/product-details">
                      <div className="festivals1">{image.caption}</div>

                  </Link>

              </div>
          ))}
        </div>
      </section>
  );
};

CallToAction.propTypes = {
  className: PropTypes.string,
  featuredText: PropTypes.string,
  buttons: PropTypes.arrayOf(
      PropTypes.shape({
        className: PropTypes.string,
        divClassName: PropTypes.string,
        text: PropTypes.string,
      })
  ),
  images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
        caption: PropTypes.string,
      })
  ),
};

export default CallToAction;