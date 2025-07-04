import { Outlet, useLocation } from "react-router-dom";
import Navbars from "./navbar";

export const MainLayout = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";

  return (
    <>
      {!hideNavbar && <Navbars />}
      <Outlet /> 
    </>
  );
};