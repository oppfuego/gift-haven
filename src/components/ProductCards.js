import ItemRow from "./ItemRow";
import PropTypes from "prop-types";
import "./ProductCards.css";

const ProductCards = ({ className = "" }) => {
  return (
    <section className={`product-cards ${className}`}>
      <div className="items-container-parent">
        <div className="items-container">
          <div className="header2">
            <div className="header-child" />
            <div className="product-header">
              <b className="product1">Product</b>
            </div>
            <div className="price-quantity">
              <b className="price">Price</b>
              <b className="quantity2">Quantity</b>
            </div>
            <b className="total">Total</b>
          </div>
          <ItemRow
            fentyBeauty50OFFGiftCard="Fenty Beauty 50% OFF Gift Card"
            discount20OFF="Discount: 20% OFF"
          />
          <ItemRow
            fentyBeauty50OFFGiftCard="Shopping Spree Gift Card"
            discount20OFF="Worth USD $400"
          />
          <ItemRow
            fentyBeauty50OFFGiftCard="Travel GiftCard"
            discount20OFF="Worth USD $400"
          />
          <div className="action-buttons">
            <button className="button16">
              <img className="tag-icon" alt="" src="/tag-icon.svg" />
              <b className="button17">Go Back</b>
              <img className="tag-icon1" alt="" src="/tag-icon.svg" />
            </button>
            <button className="button18">
              <img className="tag-icon2" alt="" src="/tag-icon.svg" />
              <b className="button19">Checkout</b>
              <img className="tag-icon3" alt="" src="/tag-icon.svg" />
            </button>
          </div>
        </div>
        <div className="checkout-details">
          <div className="checkout-header">
            <div className="header3">
              <b className="checkout-details1">Checkout Details</b>
            </div>
          </div>
          <div className="subtotal-total">
            <div className="value-container">
              <b className="cart-subtotal">Cart Subtotal</b>
              <b className="value-separator">$360.00</b>
            </div>
          </div>
          <div className="checkout-details2">
            <div className="charges-container">
              <div className="charge-labels">
                <b className="shipping-handling">{`Shipping & Handling`}</b>
                <b className="other-taxes">Other Taxes</b>
              </div>
              <div className="charge-labels1">
                <b className="b">$0.00</b>
                <b className="b1">$0.00</b>
              </div>
            </div>
          </div>
          <div className="summary-divider">
            <div className="summary-divider-child" />
          </div>
          <div className="total-row">
            <div className="grand-total-parent">
              <b className="grand-total">Grand Total</b>
              <b className="b2">$360.00</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProductCards.propTypes = {
  className: PropTypes.string,
};

export default ProductCards;
