import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import {RotateLeftOutlined} from "@ant-design/icons";
import Menu from "./components/nav/Menu";
import PrivateRoute from "./components/routes/PrivateRoute";
import Cart from "./pages/Cart";
import CategoriesList from "./pages/CategoriesList";
import CategoryView from "./pages/CategoryView";
import Home from "./pages/Home";
import ProductView from "./pages/ProductVIew";
import Search from "./pages/Search";
import Shop from "./pages/Shop";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/user/Dashboard";
import UserOrders from "./pages/user/Orders";
import UserProfile from "./pages/user/Profile";
import AdminRoute from "./components/routes/AdminRoute";
import AdminCategory from "./pages/admin/Category";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminProduct from "./pages/admin/Product";
import AdminProducts from "./pages/admin/Products";
const PageNotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            404 | Page not found
        </div>
    );
};


const App = () => {
    return (


            <BrowserRouter>
                <Menu />
                <Toaster position="top-right" />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/categories" element={<CategoriesList />} />
                    <Route path="/category/:slug" element={<CategoryView />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/product/:slug" element={<ProductView />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<PrivateRoute />}>
                        <Route path="user" element={<Dashboard />} />
                        <Route path="user/profile" element={<UserProfile />} />
                        <Route path="user/orders" element={<UserOrders />} />
                    </Route>
                    <Route path="/dashboard" element={<AdminRoute />}>
                        <Route path="admin" element={<AdminDashboard />} />
                        <Route path="admin/category" element={<AdminCategory />} />
                        <Route path="admin/product" element={<AdminProduct />} />
                        <Route path="admin/products" element={<AdminProducts />} />

                    </Route>

                    <Route path="*" element={<PageNotFound />} replace />
                </Routes>


            </BrowserRouter>

    );
};

export default App;