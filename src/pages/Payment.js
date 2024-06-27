import FrameComponent1 from "../components/FrameComponent1";
import ContactAndCarholder from "../components/ContactAndCarholder";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="payment-1920">
      <div className="payment-1920-inner">
        <FrameComponent1 />
      </div>
      <div className="rectangle-parent">
        <div className="frame-child" />
        <ContactAndCarholder />
      </div>
    </div>
  );
};

export default Payment;
