import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
// import {RotateLeftOutlined} from "@ant-design/icons";
import Login from "./pages/auth/Login";
import Home from "./pages/user/Home";
import Register from "./pages/auth/Register";
import Shop from "./pages/user/Shop";

const App = () => {
    return (
        <BrowserRouter>
            <Toaster position="top-right" />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>


        </BrowserRouter>
    );
};

export default App;