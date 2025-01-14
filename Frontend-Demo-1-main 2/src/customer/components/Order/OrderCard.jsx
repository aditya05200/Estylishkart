import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { BorderColor } from "@mui/icons-material";

const OrderCard = ({ order }) => {
  const { orderItems, totalPrice, orderStatus, shippingAddress, orderDate } =
    order;

  const firstItem = orderItems[0] || {};

  const getStatusText = () => {
    switch (orderStatus) {
      case "DELIVERED":
        return `Delivered on ${new Date(orderDate).toLocaleDateString()}`;
      case "CANCELLED":
        return "Your order was cancelled";
      case "PLACED":
        return `Expected delivery on ${new Date(
          orderDate
        ).toLocaleDateString()}`;
      default:
        return "Processing...";
    }
  };

  return (
    <div
      className="p-5 rounded-md hover:shadow-lg border shadow-black"
      style={{ borderColor: "#5b2338" }}
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src={
                firstItem.product
                  ? firstItem.product.image
                  : "https://via.placeholder.com/150"
              }
              alt={firstItem.product ? firstItem.product.name : "Product Image"}
            />
            <div className="ml-5 space-y-2">
              <p>
                {firstItem.product ? firstItem.product.name : "Product Name"}
              </p>
              <p className="opacity-50 text-xs font-semibold">
                Size: {firstItem.size || "N/A"}
              </p>
              <p className="opacity-50 text-xs font-semibold">
                Color: {firstItem.color || "N/A"}
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>Rs {totalPrice}</p>
        </Grid>

        <Grid item xs={4}>
          <div>
            <p>
              <AdjustIcon
                sx={{ width: "15px", height: "15px", color: "#5b2338" }}
              />
              <span>{getStatusText()}</span>
            </p>
            {orderStatus === "DELIVERED" && (
              <p className="text-xs">
                Your item has been delivered to {shippingAddress.street},{" "}
                {shippingAddress.city}.
              </p>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
