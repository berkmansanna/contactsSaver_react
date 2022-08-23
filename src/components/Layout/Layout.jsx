import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/Navigation/AuthNav/AuthNav';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { getLoggedInStatus } from 'redux/auth/auth-selector';
import { useSelector } from 'react-redux';
import { Loader } from 'pages/Contacts/Loader/Loader';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
const Layout = () => {
  const isLoggedIn = useSelector(getLoggedInStatus);

  return (
    <Container maxWidth="xl">
      <Suspense fallback={<Loader />}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" sx={{ flexGrow: 2 }}>
              ContactSaver
            </Typography>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </AppBar>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
