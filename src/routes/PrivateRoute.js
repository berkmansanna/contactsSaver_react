import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getLoggedInStatus } from 'redux/auth/auth-selector';

export const PrivateRoute = ({ redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getLoggedInStatus);
  return isLoggedIn ? <Outlet /> : <Navigate replace to={redirectTo} />;
};
