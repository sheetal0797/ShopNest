import {
    Box,
    CssBaseline,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import DashboardIcon from "@mui/icons-material/Dashboard";
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminDashboard from "./Components/AdminDashboard";
import CreateProductForm from "./Components/CreateProductForm";
import ProductsTable from "./Components/ProductsTable";
import OrdersTable from "./Components/OrdersTable";
import CustomersTable from "./Components/CustomersTable";
// import Dashboard from "./Dashboard";

const menu = [
    { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
    { name: "Products", path: "/admin/products", icon: <DashboardIcon /> },
    { name: "Customers", path: "/admin/customers", icon: <DashboardIcon /> },
    { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },

    {
        name: "Add Product",
        path: "/admin/product/create",
        icon: <DashboardIcon />,
    },
];

const Admin = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = React.useState(false);
    const navigate = useNavigate();

    const drawer = (
        <Box
            sx={{
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            {/* {isLargeScreen && <Toolbar />} */}
            <List>
                {menu.map((item, index) => (
                    <ListItem
                        key={item.name}
                        disablePadding
                        onClick={() => navigate(item.path)}
                    >
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <List sx={{ position: "absolute", bottom: 0, width: "15%" }}>
                <Divider />
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
    );
    return (
        <div className="relative flex h-[100vh]  ">
            <CssBaseline />
            {/* <AdminNavbar handleSideBarViewInMobile={handleSideBarViewInMobile} /> */}
            <div className="'shadow-lg shadow-gray-600' w-[15%] h-full fixed top-0">
                {drawer}
            </div>

            <div className="w-[85%] h-full ml-[15%]">
                <Routes>
                    <Route path="/" element={<AdminDashboard />}></Route>
                    <Route path="/product/create" element={<CreateProductForm />}></Route>
                    <Route path="/products" element={<ProductsTable />}></Route>
                    <Route path="/orders" element={<OrdersTable />}></Route>
                    <Route path="/customers" element={<CustomersTable />}></Route>
                </Routes>
            </div>
        </div>
    );
};
export default Admin;