import CardCategories from "./CardCategories";
import PropTypes from "prop-types";
import "./Recommendations.css";

const Recommendations = ({ className = "" }) => {
  return (
    <section className={`recommendations ${className}`}>
      <div className="recommendations-title">
        <h1 className="recommended-cards">Recommended Cards</h1>
      </div>
      <CardCategories />
    </section>
  );
};

Recommendations.propTypes = {
  className: PropTypes.string,
};

export default Recommendations;
