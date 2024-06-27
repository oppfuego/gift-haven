import Header from "../components/Header";
import Featured from "../components/Featured";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import "./ProductListing.css";
import CallToAction from "../components/CallToAction";

const ProductListing = () => {
  return (
    <div className="product-listing">
      <Header />
      <section className="hero1">
        <div className="take-a-closer-look-at-our-prod-wrapper">
          <h1 className="take-a-closer">Take a closer look at our products!</h1>
        </div>
        <img
          className="hero-image-icon"
          loading="lazy"
          alt=""
          src="/rectangle-1@2x.png"
        />
      </section>

      <CallToAction
          featuredText="Featured Category"
          buttons={[
            { className: "button4", divClassName: "shop6", text: "See All Categories" },
          ]}
          images={[
            { src: "/frame-1410065660@2x.png", alt: "", caption: "Festivals" },
            { src: "/frame-15@2x.png", alt: "", caption: "Family" },
            { src: "/frame-1410065661@2x.png", alt: "", caption: "Close Ones" },
            { src: "/frame-1410065662@2x.png", alt: "", caption: "Luxury" }
          ]}
      /><CallToAction
          featuredText="Treat Yourself"
          buttons={[
            { className: "button4", divClassName: "shop6", text: "See All Gift Cards" },
          ]}
          images={[
            { src: "/frame-50@2x.png", alt: "", caption: "Food Gift Card" },
            { src: "/frame-1410065662@2x.png", alt: "", caption: "Luxury Gift Cards" },
            { src: "/frame-51-1@2x.png", alt: "", caption: "Makeup Gift Cards" },
            { src: "/frame-50-1@2x.png", alt: "", caption: "Baby Shower Gift Card" }
          ]}
      />

      <section className="section-1920x">
        <img
          className="a8b5ac27f3db7c5b294dc4-465-p-1-icon"
          alt=""
          src="/65a8b5ac27f3db7c5b294dc4-465p1600jpg@2x.png"
        />
        <div className="vector-parent">
          <img className="frame-child" alt="" src="/rectangle-4555.svg" />
          <h1 className="refer-a-friend-container">
            <span className="refer-a-friend-container1">
              <p className="refer-a-friend">Refer a friend to earn free</p>
              <p className="brandname-credit">BrandName Credit</p>
            </span>
          </h1>
          <button className="referral-link">
            <b className="refer-a-friend1">Refer a Friend</b>
          </button>
        </div>
      </section>
        <CallToAction
            featuredText="Festivals"
            buttons={[
              { className: "button4", divClassName: "shop6", text: "See All Gift Cards" },
            ]}
            images={[
              { src: "/frame-1410065707@2x.png", alt: "", caption: "Food Gift Card" },
              { src: "/frame-1410065660@2x.png", alt: "", caption: "Luxury Gift Cards" },
              { src: "/frame-1410065661@2x.png", alt: "", caption: "Makeup Gift Cards" },
              { src: "/frame-15-4@2x.png", alt: "", caption: "Haul Gift Cards" }
            ]}
        />

      <Footer />
    </div>
  );
};

export default ProductListing;
