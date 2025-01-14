import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/Navigation/Navigation.jsx";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails.jsx";
import Checkout from "../customer/components/Checkout/Checkout.jsx";
import Order from "../customer/components/Order/Order.jsx";
import OrderDetails from "../customer/components/Order/OrderDetails.jsx";
import AboutUs from "../customer/pages/AboutUs.jsx";
import PrivacyPolicy from "../customer/pages/PrivacyPolicy.jsx";
import TermsCondition from "../customer/pages/TermsCondition.jsx";
import Return from "../customer/pages/Return.jsx";
import Shipping from "../customer/pages/Shipping.jsx";
import LoginForm from "../customer/Auth/LoginForm.jsx";
import RegisterForm from "../customer/Auth/RegisterForm.jsx";
import OrderSummary from "../customer/components/Checkout/OrderSummary.jsx";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms-conditions" element={<TermsCondition />}></Route>
        <Route path="/return" element={<Return />}></Route>
        <Route path="/shipping" element={<Shipping />}></Route>
        <Route path="/register" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:levelOne/:levelTwo/:lavelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout/" element={<Checkout />}></Route>
        <Route path="/account/Order" element={<Order />}></Route>
        <Route
          path="/account/order/:OrderId"
          element={<OrderDetails />}
        ></Route>
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
