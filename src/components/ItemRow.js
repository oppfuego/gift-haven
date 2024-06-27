import PropTypes from "prop-types";
import "./ItemRow.css";

const ItemRow = ({
  className = "",
  fentyBeauty50OFFGiftCard,
  discount20OFF,
}) => {
  return (
    <div className={`item-row ${className}`}>
      <div className="item-details">
        <img
          className="item-image-icon"
          loading="lazy"
          alt=""
          src="/rectangle-4554@2x.png"
        />
        <div className="item-title">
          <b className="fenty-beauty-50">{fentyBeauty50OFFGiftCard}</b>
          <b className="discount-20-off">{discount20OFF}</b>
        </div>
        <div className="item-actions">
          <div className="quantity1">
            <b className="quantity-placeholder">$120.00</b>
            <b className="credits">12 Credits</b>
          </div>
          <div className="increase-quantity">
            <div className="plus-button">
              <div className="add-icon-row">
                <img
                  className="icon-plus"
                  loading="lazy"
                  alt=""
                  src="/iconplus.svg"
                />
              </div>
              <b className="increase-placeholder">3</b>
              <input className="remove-button-row" type="checkbox" />
            </div>
            <div className="time-period">
              <b className="hourly">Hourly</b>
              <div className="empty-time-row">
                <img
                  className="hourly-placeholder-icon"
                  alt=""
                  src="/hourly-placeholder.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <b className="item-separator">$120.00</b>
      </div>
      <div className="row-separator" />
    </div>
  );
};

ItemRow.propTypes = {
  className: PropTypes.string,
  fentyBeauty50OFFGiftCard: PropTypes.string,
  discount20OFF: PropTypes.string,
};

export default ItemRow;
