import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./navbars.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./products.css";

import Adminpanel from "./admin_panel";
import Userlogin from "./userlogin";
import HomePage from "./HomePage";
import { MainLayout } from "./MainLayout";
import AdminLogin from "./adminlogin";
import Signuplogin from "./signuplogin";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false }); //once is onetime if true else it will false for many times
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Userlogin />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/Adminpanel" element={<Adminpanel />} />
          <Route path="/Signuplogin" element={<Signuplogin />} />

          <Route element={<MainLayout />}>
            <Route path="/get_fit" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
