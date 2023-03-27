import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactElement } from 'react';
import { getUserAuthData } from '@/entities/User';

interface PrivateRouteProps {
    children:ReactElement;
}

export const PrivateRoute = ({ children }:PrivateRouteProps) => {
    const isAuth = useSelector(getUserAuthData);

    if (!isAuth) {
        return <Navigate to="/" />;
    }

    return children;
};
