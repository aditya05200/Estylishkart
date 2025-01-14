// import { type } from "@testing-library/user-event/dist/type";
import { api, API_BASE_URL } from "../../config/apiConfig";
import {
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
} from "./ActionType";

// Function to convert array to query string
const arrayToQueryString = (paramName, array) => {
  if (!array || array.length === 0) return "";
  return array
    .map((item) => `${paramName}=${encodeURIComponent(item)}`)
    .join("&");
};

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
  console.log("Request Data:", reqData);

  // Construct query string based on available parameters
  let queryParams = "";

  queryParams +=
    colors && colors.length > 0
      ? `&${arrayToQueryString("color", colors)}`
      : "";
  queryParams +=
    sizes && sizes.length > 0 ? `&${arrayToQueryString("size", sizes)}` : "";
  queryParams += minPrice ? `&minPrice=${minPrice}` : "";
  queryParams += maxPrice ? `&maxPrice=${maxPrice}` : "";
  queryParams += minDiscount ? `&minDiscount=${minDiscount}` : "";
  queryParams += category ? `&category=${category}` : "";
  queryParams += stock ? `&stock=${stock}` : "";
  queryParams += sort ? `&sort=${sort}` : "";
  queryParams += pageNumber ? `&pageNumber=${pageNumber}` : "";
  queryParams += pageSize ? `&pageSize=${pageSize}` : "";

  try {
    const { data } = await api.get(`api/products?${queryParams}`);

    // const { data } = await api.get(
    //     `api/products?category=blazzers-coats-men`
    // );
    console.log("Product Data", data);
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  try {
    const { data } = await api.get(`api/products/id/${productId}`);
    console.log("Product Data", data);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PRODUCT_REQUEST });
    const { data } = await api.post(
      `${API_BASE_URL}api/admin/products/`,
      product
    );
    console.log("Created Products", data);
    dispatch({
      type: CREATE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message });
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });
    console.log(`Deleting product with ID: ${productId}`);

    const { data } = await api.delete(
      `${API_BASE_URL}api/admin/products/${productId}/`
      // {
      //   headers: {
      //     Authorization: `Bearer ${token}`, // if needed
      //   },
      // }
    );
    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: productId,
    });
    console.log("Product deleted successfully:", data);
  } catch (error) {
    console.error(
      "Error deleting product:",
      error.response?.data || error.message
    );
    dispatch({
      type: DELETE_PRODUCT_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};
