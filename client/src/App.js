import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "../src/pages/user/Home"
import Login from "../src/pages/auth/login"

const App = () => {
    return (
       <BrowserRouter>
           <Toaster />
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login/>}/>

           </Routes>
       </BrowserRouter>
    );
};

export default App;