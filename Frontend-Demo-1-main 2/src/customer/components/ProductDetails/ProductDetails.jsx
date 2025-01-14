import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import Grid from "@mui/material/Grid";
import { Avatar, Box, Rating, LinearProgress } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { findProductsById } from "../../../Redux/Customers/Product/Action";
import { addItemToCart } from "../../../State/Cart/Action";
import ProductReviewCard from "./ProductReviewCard";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { mens_kurta } from "../../../Data/mens_kurta";

const Toast = ({ message, duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-4 right-4 transform transition-all duration-500 ease-in-out ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="bg-[#5b2338] text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 13l4 4L19 7"></path>
        </svg>
        <span className="font-medium">Items Added To Cart</span>
      </div>
    </div>
  );
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [open, setOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const product = useSelector((store) => store.product?.product || {});

  const handleAddToCart = () => {
    if (!selectedSize) {
      setToastMessage("Please select a size before adding to cart.");
      return;
    }

    dispatch(
      addItemToCart({
        productId: params.productId,
        size: selectedSize?.name,
        color: selectedColor?.name,
      })
    );
    setToastMessage(`${product?.title} has been added to your cart.`);
  };

  useEffect(() => {
    if (params.productId) {
      const data = { productId: params.productId };
      dispatch(findProductsById(data));
    }
  }, [params.productId, dispatch]);

  useEffect(() => {
    if (product?.sizes?.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
    if (product?.imageALL?.length > 0) {
      setMainImage(product.imageALL[0]);
    }
  }, [product]);

  useEffect(() => {
    if (product?.colors?.length > 0 && !selectedColor) {
      setMainImage(product.colors[0].imageUrl);
    }
  }, [product, selectedColor]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    if (color?.imageUrl) {
      setMainImage(color.imageUrl);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-white lg:px-10">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product?.breadcrumbs?.map((breadcrumb) => (
              <li key={breadcrumb?.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb?.href}
                    className="mr-2 text-sm font-medium text-[#5b2238]"
                  >
                    {breadcrumb?.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product?.href}
                aria-current="page"
                className="font-medium text-[#5b2338] hover:text-gray-600"
              >
                {product?.name}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            {mainImage && (
              <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                <img
                  src={mainImage}
                  alt="Main product image"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="grid grid-cols-2 gap-5 justify-center">
              {product?.imageALL?.slice(0).map((image, index) => (
                <div
                  key={index}
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[15rem] max-h-[20rem] mt-4"
                >
                  <img
                    src={image}
                    alt={`Product thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200">
              <h1 className="text-left text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product?.title}
              </h1>
            </div>

            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="text-2xl font-semibold">
                  {product?.discountedPrice}
                </p>
                <p className="opacity-50 line-through">{product?.price}</p>
                <p className="text-green-600 font-semibold">
                  -{product?.discountPersent}%
                </p>
              </div>

              <form className="mt-10">
                {/* Colors */}
                <div>
                  <h3 className="text-left text-sm font-medium text-gray-900">
                    Color
                  </h3>

                  <fieldset aria-label="Choose a color" className="mt-4">
                    <RadioGroup
                      value={selectedColor}
                      onChange={handleColorChange}
                      className="flex items-center space-x-3"
                    >
                      {product?.colors?.map((color, index) => (
                        <Radio
                          key={index}
                          value={color}
                          aria-label={color?.name}
                          className={classNames(
                            color?.selectedClass,
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
                          )}
                        >
                          <AcUnitIcon
                            sx={{
                              backgroundColor: color?.hexCode,
                              width: 32,
                              height: 32,
                              border:
                                selectedColor?.name === color?.name
                                  ? `2px solid ${color?.hexCode}`
                                  : "none",
                              transition: "border 0.3s",
                              "&:hover": {
                                border: `2px solid ${color?.hexCode}`,
                              },
                            }}
                          />
                        </Radio>
                      ))}
                    </RadioGroup>
                    {selectedColor && (
                      <p className="mt-2 text-sm text-[#5b2338] text-left">
                        Selected Color: {selectedColor?.name}
                      </p>
                    )}
                  </fieldset>
                </div>

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium px-4 text-[#5b2338]"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClickOpen();
                      }}
                    >
                      Size Chart
                      <ChevronRightOutlinedIcon
                        className=""
                        sx={{ fontSize: "small" }}
                      />
                    </a>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-6">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-6 gap-2 sm:grid-cols-8"
                    >
                      {product?.sizes?.map((size) => (
                        <Radio
                          key={size?._id}
                          value={size}
                          className={classNames(
                            "h-9 w-9 rounded-full border-2",
                            "flex items-center justify-center",
                            "text-xs font-medium uppercase",
                            "transition-all duration-150",
                            "focus:outline-none focus:ring-2 focus:ring-[#5b2338] focus:ring-offset-1",
                            size?.quantity === 0
                              ? "cursor-not-allowed border-gray-200 bg-gray-50 text-gray-400"
                              : selectedSize?._name === size?._name
                              ? "border-[#5b2338] bg-[#5b2338] text-white"
                              : "border-gray-200 text-gray-900 hover:border-[#5b2338] hover:bg-[#5b2338]/5"
                          )}
                          disabled={size?.quantity === 0}
                        >
                          {size?.name?.[0]}
                        </Radio>
                      ))}
                    </RadioGroup>

                    {selectedSize && (
                      <div className="mt-2 flex items-center text-xs text-[#5b2338] font-semibold">
                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-[#5b2338]" />
                        Selected: {selectedSize.name}
                      </div>
                    )}
                  </fieldset>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="mt-10 w-full bg-[#5b2338] text-white py-3 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#532c3d] hover:bg-[#532c3d] transition-colors duration-200"
                >
                  Add to cart
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="px-4 mt-8">
          <h1 className="font-semibold text-lg pb-1">Description</h1>
          <div>{product?.description}</div>
        </section>

        <section className="px-4 mt-8">
          <h1 className="font-semibold text-lg pb-1">
            Recent Review & Ratings
          </h1>
          <div className="border p-5">
            <Grid container spacing={2}>
              <Grid item xs={12} md={7}>
                <div className="space-y-5">
                  {[1, 1, 1].map((item, index) => (
                    <ProductReviewCard key={index} />
                  ))}
                </div>
              </Grid>
              <Grid item xs={12} md={5}>
                <h1 className="text-xl font-semibold pb-1">Product Ratings</h1>
                <div className="flex items-center space-x-3">
                  <Rating value={4.6} precision={0.5} readOnly />
                  <p className="opacity-60">5948 Ratings</p>
                </div>

                <Box className="mt-5 space-y-2">
                  {[
                    { label: "Excellent", value: 60, color: "success" },
                    { label: "Very Good", value: 80, color: "success" },
                    { label: "Good", value: 40, color: "warning" },
                    { label: "Average", value: 10, color: "warning" },
                    { label: "Poor", value: 5, color: "error" },
                  ].map((item, index) => (
                    <Grid container key={index} alignItems="center" spacing={1}>
                      <Grid item xs={4} sm={2}>
                        <p>{item.label}</p>
                      </Grid>
                      <Grid item xs={8} sm={7}>
                        <LinearProgress
                          sx={{ bgcolor: "#d0d0d0" }}
                          variant="determinate"
                          value={item.value}
                          color={item.color}
                        />
                      </Grid>
                    </Grid>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>

        <section className="px-4 mt-8">
          <h1 className="py-5 font-bold text-xl">Similar Products</h1>

          <div className="flex flex-wrap space-x-5 space-y-5">
            {mens_kurta?.slice(0, 10)?.map((item) => (
              <HomeSectionCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </div>

      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}
    </div>
  );
}
