import Header from "../components/Header";
import CallToAction from "../components/CallToAction";
import GiftCategories from "../components/GiftCategories";
import StoreLocator from "../components/StoreLocator";
import Reviews1920x from "../components/Reviews1920x";
import Footer from "../components/Footer";
import CallToActionSecondType from "../components/CallToActionSecondType/CallToActionSecondType";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <section className="hero">
        <h1 className="give-the-gift">
          Give the Gift of Choice with Our Versatile Gift Cards!
        </h1>
        <div className="hero-search">
          <div className="search-bar">
            <input
              className="search-input"
              placeholder="Search the perfect gift for the perfect occasion"
              type="text"
            />
            <img
              className="search-normal-icon"
              alt=""
              src="/searchnormal.svg"
            />
          </div>
        </div>
      </section>

      <CallToAction
          featuredText="Featured Cards"
          buttons={[
            { className: "button4", divClassName: "shop6", text: "Online" },
            { className: "button5", divClassName: "shop7", text: "In Store" }
          ]}
          images={[
            { src: "/frame-1410065660@2x.png", alt: "", caption: "Festivals" },
            { src: "/frame-15@2x.png", alt: "", caption: "Family" },
            { src: "/frame-1410065661@2x.png", alt: "", caption: "Close Ones" },
            { src: "/frame-1410065662@2x.png", alt: "", caption: "Luxury" }
          ]}
      />
      <section className="about-intro-parent">
        <img
          className="about-intro-icon"
          loading="lazy"
          alt=""
          src="/frame-42@2x.png"
        />
        <div className="about-details">
          <h1 className="about-gifthaven">About GiftHaven</h1>
          <div className="gifthaven-is-the-container">
            <p className="gifthaven-is-the">
              Gifthaven is the leading Digital Gift Card Company in the Middle
              East.
            </p>
            <p className="blank-line">&nbsp;</p>
            <p className="our-digital-gifting">
              Our digital gifting platform is used by individuals and businesses
              to celebrate, reward, motivate and show appreciation to friends,
              loved ones, employees, customers and business partners.
            </p>
            <p className="blank-line1">&nbsp;</p>
            <p className="our-business-solution">
              Our business solution has also been adopted by major customer
              loyalty programs across leading telcos, banks, airlines delivering
              unparalleled choice of rewards, a memorable customer service
              experience, and best-in-class technology tailored to partner
              needs.
            </p>
          </div>
          <button className="button">
            <div className="shop">Learn More</div>
          </button>
        </div>
      </section>
      <CallToActionSecondType/>
      <div className="frame-parent">
        <div className="maps-zoom-levels-2-city-wrapper">
          <div className="maps-zoom-levels-2-city">
            <img
              className="map-of-birmingham-city"
              alt=""
              src="/map-of-birmingham-city@2x.png"
            />
            <div className="shop-parent">
              <div className="shop1">Store Locator</div>
              <img className="instance-child" alt="" src="/arrow-1.svg" />
            </div>
            <div className="find-nearby-products-wrapper">
              <b className="find-nearby-products">Find Nearby Products</b>
            </div>
          </div>
        </div>
        <div className="image-11-parent">
          <img className="image-11-icon" alt="" src="/image-11@2x.png" />
          <b className="title">TITLE</b>
          <b className="upgrading-the-world">
            Upgrading the world to a positive gifting system
          </b>
        </div>
      </div>
      <StoreLocator />
      <Reviews1920x />
      <Footer />
    </div>
  );
};

export default HomePage;
