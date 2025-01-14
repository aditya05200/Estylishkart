import axios from "axios";
import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
} from "./ActionType";
import { api } from "../../config/apiConfig";

export const createOrder = (address) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });
    try {
      const { data } = await api.post("api/orders", {
        address,
      });

      if (data) {
        localStorage.setItem("orderData", JSON.stringify(data));
      }

      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: data,
      });

      return data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      dispatch({
        type: CREATE_ORDER_FAILURE,
        payload: errorMessage,
      });
      throw new Error(errorMessage);
    }
  };
};

export const getOrderById = (orderId) => async (dispatch) => {
  dispatch({ type: GET_ORDER_BY_ID_REQUEST });
  try {
    const { data } = await api.get(`api/orders/${orderId}`);
    console.log("Fetched order:", data);
    dispatch({
      type: GET_ORDER_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("Error fetching order", error);
    dispatch({
      type: GET_ORDER_BY_ID_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};
