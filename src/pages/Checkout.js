import FrameComponent1 from "../components/FrameComponent1";
import CheckoutForm from "../components/CheckoutForm";
import Footer from "../components/Footer";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout-1920">
      <FrameComponent1 yourCart="Checkout" />
      <CheckoutForm />
      <Footer />
    </div>
  );
};

export default Checkout;
