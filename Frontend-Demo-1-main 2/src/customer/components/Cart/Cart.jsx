import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart, updateCartItem } from "../../../State/Cart/Action";
import axios from "axios";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store);
  const [localCart, setLocalCart] = useState([]);
  const [availableCoupons, setAvailableCoupons] = useState([]);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getCart());
        const couponResponse = await axios.get(
          "http://localhost:5454/api/coupons"
        );
        setAvailableCoupons(couponResponse.data.coupons);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (cart?.cartItems) {
      setLocalCart(cart.cartItems);
    }
  }, [cart.cartItems]);

  const handleUpdateCartItem = (cartItemId, newQuantity) => {
    setLocalCart((prevItems) =>
      prevItems.map((item) =>
        item._id === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveCartItem = (removedItemId) => {
    setLocalCart((prevItems) =>
      prevItems.filter((item) => item._id !== removedItemId)
    );
  };

  const handleApplyCoupon = (coupon) => {
    setSelectedCoupon(coupon);
    setIsOpen(false);
  };

  const getTotalPrice = () => {
    const total = localCart.reduce((acc, item) => {
      // Check if item.product is defined and has discountedPrice
      if (item.product?.discountedPrice) {
        return acc + item.product.discountedPrice * item.quantity;
      }
      return acc; // If no valid product info, don't add to total
    }, 0);
    return total;
  };

  const totalPrice = getTotalPrice();
  const discountedPrice = selectedCoupon
    ? totalPrice - (totalPrice * selectedCoupon.discountPercentage) / 100
    : totalPrice;

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  if (localCart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600 text-xl font-semibold">
          Your cart is empty!
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {localCart && localCart.length > 0 ? (
              localCart
                .filter((item) => item && item._id)
                .map((item) => (
                  <CartItem
                    key={item._id}
                    item={item}
                    onUpdate={handleUpdateCartItem} // Pass the handler to update quantity
                    onRemove={handleRemoveCartItem}
                  />
                ))
            ) : (
              <p className="text-gray-500 text-center text-lg">
                No items in the cart.
              </p>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-4">
            <div className="bg-white rounded-3xl shadow-lg p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-4">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Price</span>
                  <span className="font-medium">₹{cart.cart?.totalPrice}</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-medium text-green-600">
                    {selectedCoupon
                      ? `- ₹${(
                          (totalPrice * selectedCoupon.discountPercentage) /
                          100
                        ).toFixed(2)}`
                      : "-"}
                  </span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Delivery Charge</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
              </div>

              {/* Coupons Section */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 text-lg">
                  Apply Coupon
                </h3>
                {availableCoupons.length > 0 ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full px-4 py-3 border rounded-lg text-left text-base flex justify-between items-center bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#5b2338] transition duration-150 ease-in-out"
                    >
                      <span className="text-gray-700">
                        {selectedCoupon
                          ? `${selectedCoupon.code} (${selectedCoupon.discountPercentage}% Off)`
                          : "Select a coupon"}
                      </span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isOpen ? "transform rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {isOpen && (
                      <div className="absolute z-10 w-full mt-2 bg-white border rounded-lg shadow-xl">
                        {availableCoupons.map((coupon) => (
                          <button
                            key={coupon.code}
                            onClick={() => handleApplyCoupon(coupon)}
                            className="w-full px-4 py-3 text-base text-left hover:bg-gray-50 flex justify-between items-center first:rounded-t-lg last:rounded-b-lg transition duration-150 ease-in-out"
                          >
                            <span>{coupon.code}</span>
                            <span className="text-green-600 font-medium">
                              {coupon.discountPercentage}% Off
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-base text-gray-500">
                    No coupons available at the moment
                  </p>
                )}
              </div>

              {/* Total */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-gray-900">
                    Total Amount
                  </span>
                  <span className="text-2xl font-bold text-[#5b2338]">
                    ₹{discountedPrice?.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-[#5b2338] text-white py-4 px-6 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-[#532c3d] focus:outline-none focus:ring-2 focus:ring-[#5b2338] focus:ring-offset-2 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
