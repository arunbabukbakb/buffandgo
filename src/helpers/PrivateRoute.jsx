import React from 'react';
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
    if (!localStorage.getItem("buffuser")) {
        return <Navigate to="/login" replace />
    }
    return children;
}

export default PrivateRoute;
