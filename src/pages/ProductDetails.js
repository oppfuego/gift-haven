import Header from "../components/Header";
import Content from "../components/Content";
import Recommendations from "../components/Recommendations";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import "./ProductDetails.css";
import CallToAction from "../components/CallToAction";

const ProductDetails = () => {
  return (
    <div className="product-details">
      <Header />
      <Content />
        <CallToAction
            featuredText="Recommended Cards"
            images={[
                { src: "/frame-1410065660@2x.png", alt: "", caption: "Festivals" },
                { src: "/frame-15@2x.png", alt: "", caption: "Family" },
                { src: "/frame-1410065661@2x.png", alt: "", caption: "Close Ones" },
                { src: "/frame-1410065662@2x.png", alt: "", caption: "Luxury" }
            ]}
        />
      <FAQ />
      <Footer />
    </div>
  );
};

export default ProductDetails;
