import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import ProductListing from "./pages/ProductListing";
import CartDetails from "./pages/CartDetails";
import Checkout from "./pages/Checkout";
import SignIn from "./pages/SignIn";
import Account from "./pages/Account";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/product-details":
        title = "";
        metaDescription = "";
        break;
      case "/product-listing":
        title = "";
        metaDescription = "";
        break;
      case "/cart-details-1920":
        title = "";
        metaDescription = "";
        break;
      case "/checkout-1920":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/product-listing" element={<ProductListing />} />
      <Route path="/cart-details-1920" element={<CartDetails />} />
      <Route path="/checkout-1920" element={<Checkout />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/account" element={<Account />} />
      <Route path="/site-terms" element={<TermsConditions />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
    </Routes>
  );
}
export default App;
