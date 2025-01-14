import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  // MagnifyingGlassIcon,
  // ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import { Link } from "react-router-dom";

import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import { navigation } from "./navigation";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import logo from "../../../images/Logo-Estylishkart.png";
import { useLocation, useNavigate } from "react-router-dom";
import AuthModal from "../../Auth/AuthModal";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../../../State/Auth/Action";
import { getCart } from "../../../State/Cart/Action";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [categories, setCategories] = useState([]); // State to store categories
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [searchResults, setSearchResults] = useState([]); // State for search results
  const [anchorEl, setAnchorEl] = useState(null);
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const openUserMenu = Boolean(anchorEl);
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    // Fetch product categories on load
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleSearchChange = async (e) => {
    setSearchQuery(e.target.value);

    if (e.target.value) {
      try {
        const response = await axios.get(
          `http://localhost:5454/api/products/search?query=${e.target.value}`
        );
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpenAuthModal(true);
  };
  const handleClose = () => {
    setOpenAuthModal(false);
    navigate("/");
  };

  const handleCategoryClick = (category, section, item, close) => {
    if (!category?.id || !section?.id || !item?.id) {
      console.error("Invalid parameters passed to handleCategoryClick:", {
        category,
        section,
        item,
      });
      return;
    }

    navigate(`/${category.id}/${section.id}/${item.id}`);
    close();
  };

  // Search bar

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "100%",
        "&:focus": {
          width: "100%",
        },
      },
    },
  }));

  // Calculate the total quantity of items in the cart
  // const cartLength = cartItems
  //   ? cartItems.reduce((total, item) => total + item.quantity, 0)
  //   : 0;

  const totalQuantity = cartItems.reduce((acc, item) => {
    if (item && item.quantity) {
      // Ensure item is defined and has the 'quantity' property
      return acc + item.quantity;
    }
    return acc; // Return accumulator if item or quantity is undefined
  }, 0);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  // Fetch cart when component mounts or on some trigger
  useEffect(() => {
    // Assuming jwt is available
    const jwt = localStorage.getItem("jwt"); // Replace with actual token
    dispatch(getCart(jwt));
  }, [dispatch]);

  useEffect(() => {
    if (auth.user) {
      // handleClose()
    }
    if (location.pathname === "/login" || location.pathname === "/register") {
      // navigate(-1)
    }
  });

  const handleLogout = () => {
    dispatch(logout());
    handleCloseUserMenu();
  };

  return (
    <div className="bg-white pb-">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-[#5b2238] text-[#5b2238]"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium border-none"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <p className="-m-2 block p-2 text-gray-500">
                                    {"item.name"}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="/"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="/" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p
          style={{ backgroundColor: "#5b2338" }}
          className="flex h-10 items-center justify-center px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
        >
          Get FREE delivery on orders over ₹999 in India, Global orders incur
          delivery charges.
        </p>

        <nav aria-label="Top" className="mx-auto">
          <div className="border-b border-gray-200">
            <div className="flex h-22 items-center px-11">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <span className="sr-only">EstylishKart</span>
                  <img
                    src={logo}
                    alt="EstylishKart"
                    className="h-auto w-[12rem] mr-2"
                  />
                </Link>
              </div>

              {/* All Controls */}
              <div className="w-full">
                {/* Search Bar Controls */}
                <div className="w-full flex justify-center items-center pt-2">
                  <div className="relative w-[70%] group">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="w-full h-10 pl-12 pr-4 py-2 text-gray-700 bg-white border-2 border-[#5b2338] rounded-full
            focus:outline-none focus:border-[#5b2338] focus:ring-1 focus:ring-[#5b2338]
            transition-all duration-200 ease-in-out
            placeholder:text-gray-400 text-sm"
                    />
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <svg
                        className="w-4 h-4 text-[#5b2338] group-hover:scale-110 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-start pt-4 pb-1">
                  {" "}
                  {/* Added padding-right here */}
                  <nav aria-label="Top" className="mx-auto">
                    <div className="">
                      <div className="flex h-5 justify-start">
                        {" "}
                        {/* Changed from justify-end to justify-start */}
                        {/* Flyout menus */}
                        <Popover.Group className="hidden lg:ml-0 lg:block lg:self-stretch z-10">
                          <div className="flex h-full space-x-10">
                            {navigation.categories.map((category) => (
                              <Popover key={category.name} className="flex">
                                {({ open, close }) => (
                                  <>
                                    <div className="relative flex">
                                      <Popover.Button
                                        className={classNames(
                                          open
                                            ? "border-[#5b2238] text-[#5b2238]"
                                            : "border-transparent text-gray-700 hover:text-gray-800",
                                          "relative z-10 -mb-px flex items-center border-b-2 pt-px text-[1rem] font-medium transition-colors duration-200 ease-out"
                                        )}
                                        onClick={() =>
                                          handleCategoryClick(category.id)
                                        }
                                      >
                                        {category.name}
                                      </Popover.Button>
                                    </div>

                                    <Transition
                                      as={Fragment}
                                      enter="transition ease-out duration-200"
                                      enterFrom="opacity-0"
                                      enterTo="opacity-100"
                                      leave="transition ease-in duration-150"
                                      leaveFrom="opacity-100"
                                      leaveTo="opacity-0"
                                    >
                                      <Popover.Panel className="absolute inset-x-0 top-full text-[1.2rem] text-gray-500">
                                        <div
                                          className="absolute inset-0 top-1/2 bg-white shadow"
                                          aria-hidden="true"
                                        />
                                        <div className="relative bg-white">
                                          <div className="mx-auto max-w-7xl px-8">
                                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                              <div className="col-start-2 grid grid-cols-2 gap-x-2">
                                                {category.featured.map(
                                                  (item) => (
                                                    <div
                                                      key={item.name}
                                                      className="group relative text-base sm:text-[1.5rem]"
                                                    >
                                                      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                        <img
                                                          src={item.imageSrc}
                                                          alt={item.imageAlt}
                                                          className="object-cover object-center"
                                                        />
                                                      </div>
                                                      <a
                                                        href={item.href}
                                                        className="mt-6 block font-medium text-gray-900 text-[1.2rem]"
                                                      >
                                                        <span
                                                          className="absolute inset-0 z-10"
                                                          aria-hidden="true"
                                                        />
                                                        {item.name}
                                                      </a>
                                                      <p
                                                        aria-hidden="true"
                                                        className="mt-1 text-[1rem]"
                                                      >
                                                        Shop now
                                                      </p>
                                                    </div>
                                                  )
                                                )}
                                              </div>
                                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-[1.2rem] text-left">
                                                {category.sections.map(
                                                  (section) => (
                                                    <div key={section.name}>
                                                      <p
                                                        id={`${section.name}-heading`}
                                                        className="font-medium text-gray-900 text-[1.2rem]"
                                                      >
                                                        {section.name}
                                                      </p>
                                                      <ul
                                                        role="list"
                                                        aria-labelledby={`${section.name}-heading`}
                                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                      >
                                                        {section.items.map(
                                                          (item) => (
                                                            <li
                                                              key={item.name}
                                                              className="flex"
                                                            >
                                                              <p
                                                                onClick={() =>
                                                                  handleCategoryClick(
                                                                    category,
                                                                    section,
                                                                    item,
                                                                    close
                                                                  )
                                                                }
                                                                className="cursor-pointer hover:text-gray-800 text-[1rem]"
                                                              >
                                                                {item.name}
                                                              </p>
                                                            </li>
                                                          )
                                                        )}
                                                      </ul>
                                                    </div>
                                                  )
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Popover.Panel>
                                    </Transition>
                                  </>
                                )}
                              </Popover>
                            ))}

                            {navigation.pages.map((page) => (
                              <a
                                key={page.name}
                                href={page.href}
                                className="flex items-center font-medium text-gray-700 hover:text-gray-800 text-[1.5rem]"
                              >
                                {page.name}
                              </a>
                            ))}
                          </div>
                        </Popover.Group>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>

              {/* Updated position for icons */}
              <div className="ml-4 flex lg:ml-0">
                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    {auth.user?.firstName ? (
                      <div>
                        <Avatar
                          className="text-white"
                          onClick={handleUserClick}
                          aria-controls={open ? "basic-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          // onClick={handleUserClick}
                          sx={{
                            bgcolor: "#5b2338",
                            color: "white",
                            cursor: "pointer",
                            width: "25px",
                            height: "25px",
                          }}
                        >
                          {auth.user?.firstName[0].toUpperCase()}
                        </Avatar>
                        {/* <Button
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleUserClick}
                          >
                            Dashboard
                          </Button> */}
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={openUserMenu}
                          onClose={handleCloseUserMenu}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem> Profile </MenuItem>
                          <MenuItem onClick={() => navigate("/account/order")}>
                            {" "}
                            My Orders{" "}
                          </MenuItem>
                          <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => navigate("/login")}
                          className="px-4 py-2 text-sm font-medium text-[#5b2338] hover:text-white border border-[#5b2338] hover:bg-[#5b2338] rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#5b2338] focus:ring-offset-2"
                        >
                          <div className="flex items-center space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            <span>Login</span>
                          </div>
                        </button>

                        <button
                          onClick={() => navigate("/register")}
                          className="px-4 py-2 text-sm font-medium text-white bg-[#5b2338] hover:bg-[#4a1d2f] rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#5b2338] focus:ring-offset-2"
                        >
                          <div className="flex items-center space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                              />
                            </svg>
                            <span>Register</span>
                          </div>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Cart */}
                  <div className="ml-4 flow-root lg:ml-2">
                    <Link to="/cart">
                      <Button className="group -m-2 flex items-center ">
                        <ShoppingCartIcon
                          className="h-6 w-6 flex-shrink-0 text-gray-400 "
                          aria-hidden="true"
                          sx={{ color: "#5b2338" }}
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                          {totalQuantity}
                        </span>
                        <span className="sr-only">items in cart, view bag</span>
                      </Button>
                    </Link>
                  </div>

                  {/* Search */}
                  <div className="flex items-center lg:ml-6">
                    <p className="p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>

                      <CurrencyRupeeIcon sx={{ color: "#5b2338" }} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <AuthModal handleClose={handleClose} open={openAuthModal} />
    </div>
  );
}
