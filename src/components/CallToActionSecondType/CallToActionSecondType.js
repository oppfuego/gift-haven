import PropTypes from "prop-types";
import "./CallToActionSecondType.css";

const CallToAction = ({ className = "" }) => {
    return (
        <section className={`call-to-action ${className}`}>
            <div className="shop-buttons">
                <h1 className="featured-cards">Single Brand Gift Cards</h1>
                <button className="button4">
                    <div className="shop6">Online</div>
                </button>
                <button className="button5">
                    <div className="shop7">In Store</div>
                </button>
            </div>
            <div className="categories-row">
                <div className="category-cards">
                    <img
                        className="category-card-details"
                        loading="lazy"
                        alt=""
                        src="/frame-1410065660@2x.png"
                    />
                    <div className="festivals1">Festivals</div>
                </div>
                <div className="category-cards">
                    <img
                        className="category-cards-child"
                        loading="lazy"
                        alt=""
                        src="/frame-15@2x.png"
                    />
                    <div className="family">Family</div>
                </div>
                <div className="category-cards">
                    <img
                        className="category-cards-item"
                        loading="lazy"
                        alt=""
                        src="/frame-1410065661@2x.png"
                    />
                    <div className="close-ones">Close Ones</div>
                </div>
                <div className="category-cards">
                    <img
                        className="category-cards-inner"
                        loading="lazy"
                        alt=""
                        src="/frame-1410065662@2x.png"
                    />
                    <div className="luxury">Luxury</div>
                </div>
            </div>
            <div className="categories-row">
                <div className="category-cards">
                    <img className="category-card-details" alt="" src="/frame-15-2@2x.png"/>
                    <div className="festivals1">Sports</div>
                </div>
                <div className="category-cards">

                    <img
                        className="category-cards-child"
                        loading="lazy"
                        alt=""
                        src="/frame-16@2x.png"
                    />
                    <div className="family">Travel</div>
                </div>
                <div className="category-cards">
                    <img
                        className="category-cards-item"
                        alt=""
                        src="/frame-15-3@2x.png"
                    />
                    <div className="close-ones">Clothes</div>
                </div>
                <div className="category-cards">

                        <img
                            className="category-cards-inner"
                            alt=""
                            src="/frame-15-4@2x.png"
                        />
                        <div className="luxury">Clothes</div>
                </div>
            </div>
        </section>
    );
};

CallToAction.propTypes = {
    className: PropTypes.string,
};

export default CallToAction;
