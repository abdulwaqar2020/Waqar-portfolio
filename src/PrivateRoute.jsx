import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');

 // If there is  no token in local Storage,then redirect to the login page
  if (!token) {
    return  <Navigate to="/login" />;
  }

  // If token exists, render the children (which will be the Home or any protected component)
  return children;
};

export default PrivateRoute;
