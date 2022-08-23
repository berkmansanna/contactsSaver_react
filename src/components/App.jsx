import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './Layout/Layout';
import { useSelector } from 'react-redux';
import { useFetchCurrentUserQuery } from 'redux/contacts/contactsApi';
import { getToken } from 'redux/auth/auth-selector';
import { PrivateRoute } from 'routes/PrivateRoute';
import { PublicRoute } from 'routes/PublicRoute';

const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const isToken = useSelector(getToken);
  const { isLoading: isRefreshing } = useFetchCurrentUserQuery(undefined, {
    skip: !isToken,
  });

  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<PublicRoute redirectTo="/" />}>
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/login" element={<PublicRoute redirectTo="/contacts" />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" />}>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Route>
    </Routes>
  );
};
