import CardCategories from "./CardCategories";
import PropTypes from "prop-types";
import "./Featured.css";

const Featured = ({ className = "" }) => {
  return (
    <section className={`featured ${className}`}>
      <div className="featured-title">
        <h1 className="featured-category">Featured Category</h1>
        <button className="button13">
          <div className="shop19">See All Categories</div>
        </button>
      </div>
      <CardCategories />
    </section>
  );
};

Featured.propTypes = {
  className: PropTypes.string,
};

export default Featured;
