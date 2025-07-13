import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
          <Route path="/login" element={<Userlogin />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/Signuplogin" element={<Signuplogin />} />


          <Route path="/Adminpanel" element={
            <PrivateRoute>
              <Adminpanel />
            </PrivateRoute>
          } />

          <Route element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }>
            <Route path="/get_fit" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

const PrivateRoute = ({ child }) => {
  const isAuthUser = JSON.parse(localStorage.getItem("user"));
  return isAuthUser ? child : <Navigate to="/login" />
}
export default App;
