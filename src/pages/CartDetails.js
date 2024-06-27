import FrameComponent1 from "../components/FrameComponent1";
import ProductCards from "../components/ProductCards";
import Footer from "../components/Footer";
import "./CartDetails.css";

const CartDetails = () => {
  return (
    <div className="cart-details-1920">
      <FrameComponent1 yourCart="Your Cart" />
      <ProductCards />
      <Footer />
    </div>
  );
};

export default CartDetails;
