import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
// import {RotateLeftOutlined} from "@ant-design/icons";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import Shop from "./pages/Shop";
import CategoriesList from "./pages/CategoriesList";
import Cart from "./pages/Carts";
import PrivateRoute from "./components/routes/PrivateRoute";
import Dashboard from "./pages/user/Dashboard";
import UserProfile from "./pages/user/Profile";
import UserOrders from "./pages/user/Orders";


const App = () => {
    return (


            <BrowserRouter>
                <Toaster position="top-right" />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/categories" element={<CategoriesList />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<PrivateRoute />}>
                        <Route path="user" element={<Dashboard />} />
                        <Route path="user/profile" element={<UserProfile />} />
                        <Route path="user/orders" element={<UserOrders />} />
                    </Route>
                </Routes>


            </BrowserRouter>

    );
};

export default App;