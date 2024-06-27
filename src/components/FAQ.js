import PropTypes from "prop-types";
import "./FAQ.css";

const FAQ = ({ className = "" }) => {
  return (
    <form className={`f-a-q ${className}`}>
      <div className="f-a-q-content">
        <div className="f-a-q-items">
          <div className="question">
            <h1 className="faqs">FAQs</h1>
          </div>
          <div className="find-our-most">
            Find our most common questions below
          </div>
        </div>
      </div>
      <div className="answers">
        <div className="answer-list">
          <div className="how-to-use">How to use the card?</div>
          <div className="answer-details">
            <img className="answer-icons" alt="" src="/answer-icons.svg" />
          </div>
        </div>
        <div className="answer-list1">
          <div className="what-exactly-is">What exactly is a giftcard?</div>
          <div className="answer-list-inner">
            <img className="frame-item" alt="" src="/answer-icons.svg" />
          </div>
        </div>
        <div className="answer-list2">
          <div className="how-to-send">How to send this to a friend?</div>
          <div className="answer-list-child">
            <img className="frame-inner" alt="" src="/answer-icons.svg" />
          </div>
        </div>
        <div className="answer-list3">
          <div className="what-exactly-is1">What exactly is Brandname?</div>
          <div className="answer-list-inner1">
            <img className="vector-icon" alt="" src="/answer-icons.svg" />
          </div>
        </div>
      </div>
      <div className="brand-info">
        <div className="what-exactly-is2">What exactly is Brandname?</div>
        <div className="brand-icon">
          <img className="brand-image-icon" alt="" src="/answer-icons.svg" />
        </div>
      </div>
      <div className="footer-shop-button">
        <button className="button12">
          <div className="shop18">View All FAQs</div>
        </button>
      </div>
    </form>
  );
};

FAQ.propTypes = {
  className: PropTypes.string,
};

export default FAQ;
