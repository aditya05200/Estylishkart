import { CssBaseline, Drawer, ListItemText, useTheme } from "@mui/material";
import { List, ListItem, ListItemButton, ListItemIcon, Toolbar, useMediaQuery, useScrollTrigger } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import InboxIcon from '@mui/icons-material/Inbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dashboard from "./components/Dashboard";
import CreateProductForm from "./components/CreateProductForm";
import ProductTable from "./components/ProductTable";
import OrderTable from "./components/OrdersTable";
import CustomersTable from "./components/CustomersTable";
import AdminDashboard from "./components/Dashboard";
import Coupon from "./components/Coupon";

const menu = [
    { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
    { name: "Products", path: "/admin/products", icon: <DashboardIcon /> },
    { name: "Customers", path: "/admin/customers", icon: <DashboardIcon /> },
    { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },
    { name: "AddProduct", path: "/admin/product/create", icon: <DashboardIcon /> },
    { name: "Coupons", path: "/admin/coupons", icon: <DashboardIcon /> },
]

const Admin = () => {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const navigate = useNavigate();

    const drawer = (
        <Box
            sx={{
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100vh",
            }}
        >
            {/* {isLargeScreen && <Toolbar />} */}
            <List>
                {menu.map((item, index) => (
                    <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <EmailIcon />}
                            </ListItemIcon>
                            <ListItemText>{item.name}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <List>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText>Account</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )



    return (
        <div>
            <div className="flex h-full">

                <CssBaseline />
                <div className="border border-r-gray-900 w-[15%] fixed top-0"
                >
                    {drawer}
                </div>

                <Box sx={{width:"100%", padding:'10px', marginLeft:'15%'}}>
                    <Routes>

                        <Route path="/" element={<AdminDashboard/>}></Route>
                        <Route path="/product/create" element={<CreateProductForm/>}></Route>
                        <Route path="/products" element={<ProductTable/>}></Route>
                        <Route path="/orders" element={<OrderTable/>}></Route>
                        <Route path="/customers" element={<CustomersTable/>}></Route>
                        <Route path="/coupons" element={<Coupon/>}></Route>

                    </Routes>
                </Box>

            </div>
        </div>
    )
}

export default Admin;