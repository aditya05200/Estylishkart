import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MapPin,
  Building2,
  MapPinned,
  Phone,
  Package2,
  Check,
} from "lucide-react";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";

export default function DeliveryAddressForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: "", show: false });

  useEffect(() => {
    setError("");
  }, [auth.user]);

  const validateAddress = (address) => {
    if (
      !address.street ||
      !address.city ||
      !address.state ||
      !address.zipCode ||
      !address.phone
    ) {
      throw new Error("All fields are required.");
    }
    if (!/^\d{10}$/.test(address.phone)) {
      throw new Error("Please enter a valid 10-digit phone number.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData(e.currentTarget);
      const address = {
        street: formData.get("street"),
        city: formData.get("city"),
        state: formData.get("state"),
        zipCode: formData.get("zipCode"),
        phone: formData.get("phone"),
      };

      validateAddress(address);

      const response = await dispatch(createOrder(address));
      const orderId = response?._id; // Ensure `_id` is returned from the backend

      setToast({ message: "Address saved successfully!", show: true });
      setTimeout(() => setToast({ ...toast, show: false }), 3000);
      navigate(`/order-summary?order_id=${orderId}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateOrder = async (address) => {
    setLoading(true);
    setError("");
    try {
      validateAddress(address);
      const response = await dispatch(createOrder(address));
      const orderId = response?._id;

      setToast({ message: "Order created successfully!", show: true });
      setTimeout(() => setToast({ ...toast, show: false }), 3000);
      navigate(`/order-summary?order_id=${orderId}`);
    } catch (err) {
      setError(err.message || "Failed to create order.");
    } finally {
      setLoading(false);
    }
  };

  if (!auth.user) {
    return (
      <div className="text-center p-6">
        <p className="text-red-500">
          Please login to continue with your order.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {toast.show && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          {toast.message}
        </div>
      )}

      <div className="lg:col-span-5">
        <div className="border rounded-lg shadow-md h-[30.5rem] overflow-y-auto bg-white">
          {auth.user?.addresses?.length ? (
            auth.user.addresses.map((address) => (
              <div
                key={address._id}
                onClick={() => setSelectedAddress(address)}
                className={`p-6 border-b cursor-pointer transition-colors ${
                  selectedAddress?._id === address._id
                    ? "bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#5b2338] mt-1" />
                  <div className="flex-1">
                    <p className="text-gray-900">{address.street}</p>
                    <p className="text-gray-600">{`${address.city}, ${address.state} ${address.zipCode}`}</p>
                    <p className="text-gray-600">{address.phone}</p>
                  </div>
                  {selectedAddress?._id === address._id && (
                    <Check className="w-5 h-5 text-green-500" />
                  )}
                </div>
                {selectedAddress?._id === address._id && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCreateOrder(address);
                    }}
                    disabled={loading}
                    className="mt-4 w-full bg-[#5b2338] text-white py-2 px-4 rounded-lg hover:bg-[#471c2b] transition-colors disabled:bg-blue-300"
                  >
                    {loading ? "Processing..." : "Deliver Here"}
                  </button>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 p-6">
              No saved addresses. Add a new address below.
            </p>
          )}
        </div>
      </div>

      <div className="lg:col-span-7">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Add New Address
          </h2>

          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <MapPin className="w-4 h-4" />
                Street Address
              </label>
              <input
                type="text"
                name="street"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                  <Building2 className="w-4 h-4" />
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                  <MapPinned className="w-4 h-4" />
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                  <Package2 className="w-4 h-4" />
                  ZIP Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                  <Phone className="w-4 h-4" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#5b2338] text-white py-3 px-4 rounded-lg hover:bg-[#4d1e2f] transition-colors disabled:bg-blue-300"
          >
            {loading ? "Processing..." : "Add Address & Deliver Here"}
          </button>
        </form>
      </div>
    </div>
  );
}
