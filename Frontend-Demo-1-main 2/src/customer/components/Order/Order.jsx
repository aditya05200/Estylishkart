import React, { useState } from "react";
import { Grid } from "@mui/material";
import OrderCard from "./OrderCard";
import { useNavigate } from "react-router-dom";

const orderStatus = [
  { Label: "In Progress", value: "on_the_way" },
  { Label: "Delivered", value: "delivered" },
  { Label: "Cancelled", value: "cancelled" },
];

const Order = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]); // Assuming you will set orders here after fetching from backend

  // For demonstration, hardcoded orders
  // Replace this with a fetch call to get the user's orders
  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:5454/api/orders/user");
      const data = await response.json();
      if (Array.isArray(data)) {
        setOrders(data);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // Call fetchOrders when the component mounts
  React.useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="px-5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div
            className="h-auto shadow-lg bg-white p-5 sticky top-5 rounded-md border"
            style={{ borderColor: "#5b2338" }}
          >
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">Order Status</h1>
              {orderStatus.map((Option) => (
                <div className="flex items-center" key={Option.value}>
                  <input
                    type="checkbox"
                    defaultValue={Option.value}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={Option.value}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {Option.Label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-5">
            {orders.length === 0 ? (
              <p>No orders found</p>
            ) : (
              orders.map((order) => (
                <OrderCard
                  key={order._id}
                  order={order}
                  onClick={() => navigate(`/account/order/${order._id}`)}
                />
              ))
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
