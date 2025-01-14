import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { getOrderById } from "../../../State/Order/Action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { order } = useSelector((store) => store);

  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id"); // Extract order_id from URL query parameters
  console.log("Location search params:", location.search); // Debugging line
  console.log("orderId:", orderId);

  // Fetch order when orderId is available
  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId)); // Dispatch action to fetch order by id
    } else {
      console.log("Invalid Order Id");
    }
  }, [dispatch, orderId]);

  // Loading state while order is being fetched
  if (!order || !order.order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-8 w-32 bg-gray-200 rounded"></div>
          <div className="text-gray-500">Loading order details...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Order Status Banner */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="h-5 w-5 text-green-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <h2 className="text-green-800 font-semibold">Order Confirmed</h2>
            <p className="text-green-700 text-sm">Order #{orderId}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Left Column - Items and Address */}
        <div className="lg:col-span-8">
          {/* Shipping Address */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Shipping Address
            </h2>
            <AddressCard address={order.order?.shippingAddress} />
          </div>

          {/* Order Items */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Order Items
            </h2>
            <div className="space-y-4">
              {order.order?.orderItems?.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:col-span-4 mt-8 lg:mt-0">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Order Summary
            </h2>

            <div className="space-y-4">
              {/* Price Breakdown */}
              <div className="space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{order.order.totalPrice}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Discount</span>
                  <span className="text-green-600">
                    -₹{order.order.discount || 0}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span className="text-green-600">Free</span>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-green-600">
                    ₹{order.order.totalPrice}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mt-1">
                  Including GST and all applicable taxes
                </p>
              </div>

              {/* Action Button */}
              <button className="w-full bg-[#5b2338] hover:bg-[#421928] text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                Proceed to Payment
              </button>

              {/* Order Protection */}
              <div className="bg-gray-50 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-gray-600 mt-0.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Secure Order
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Your order is protected by our secure payment system
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
