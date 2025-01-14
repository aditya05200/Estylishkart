import React, { useState } from "react";
import { IconButton, Button, colors } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";

import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";

const CartItem = ({ item, onRemove, onUpdate }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateCartItem = async (num) => {
    try {
      setIsLoading(true);
      const newQuantity = item.quantity + num;
      if (onUpdate) {
        onUpdate(item._id, newQuantity);
      }
      const data = {
        data: { quantity: newQuantity },
        cartItemId: item._id,
      };
      await dispatch(updateCartItem(data));
    } catch (error) {
      console.error("Failed to update cart item:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveCartItem = async () => {
    try {
      setIsLoading(true);
      await dispatch(removeCartItem(item._id));
      onRemove(item._id);
    } catch (error) {
      console.error("Failed to remove cart item:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="p-5 shadow-lg border rounded-md">
      {/* Product Details */}
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:h-[9rem] lg:w-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item.product?.imageUrl || "/placeholder.jpg"}
            alt={item.product?.title || "Product"}
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.product?.title || "No Title"}</p>
          <p className="opacity-70">
            Size: {item.size || "N/A"}, {item.product?.color || "No Color"}
          </p>
          <p className="opacity-70 mt-2">
            Seller: {item.product?.brand || "Unknown Brand"}
          </p>
          <div className="flex space-x-5 items-center text-gray-900 mt-10">
            <p className="font-semibold">
              Rs {item.product?.discountedPrice || "0"}
            </p>
            <p className="opacity-50 line-through">
              {item.product?.price || "0"}
            </p>
            <p className="text-green-600 font-semibold">
              {item.product?.discountPersent || 0}% off
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton
            sx={{ color: "#5b2338" }}
            onClick={() => handleUpdateCartItem(-1)}
            disabled={item.quantity <= 1 || isLoading}
            aria-label="Decrease quantity"
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>
          <IconButton
            sx={{ color: "#5b2338" }}
            onClick={() => handleUpdateCartItem(1)}
            disabled={isLoading}
            aria-label="Increase quantity"
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>

        <div>
          <Button
            sx={{ color: "#5b2338" }}
            onClick={handleRemoveCartItem}
            disabled={isLoading}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
