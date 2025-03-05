import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();
  console.log(location.pathname);

  if (
    !isAuthenticated &&
    !(
      location.pathname ==="/auth/login" ||
      location.pathname ==="/auth/signup"
    )
  ) {
    return <Navigate to="/auth/login" /> 
  }

  if (
    isAuthenticated &&
    ( location.pathname ==="/auth/login" ||
      location.pathname ==="/auth/signup")
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop" />;
    }
  }

  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("/admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("/shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}

export default CheckAuth;
