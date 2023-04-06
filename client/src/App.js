import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
// import {RotateLeftOutlined} from "@ant-design/icons";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Register from "./pages/auth/Register";

const App = () => {
    return (
        <BrowserRouter>
            <Toaster position="top-right" />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>


        </BrowserRouter>
    );
};

export default App;