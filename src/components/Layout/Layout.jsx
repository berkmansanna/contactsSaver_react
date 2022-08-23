import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/Navigation/AuthNav/AuthNav';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { getLoggedInStatus } from 'redux/auth/auth-selector';
import { useSelector } from 'react-redux';
import { Loader } from 'pages/Contacts/Loader/Loader';
import { AppBar, Container, Box, Toolbar, Typography } from '@mui/material';
import { AddIcCallOutlined } from '@mui/icons-material/';
const Layout = () => {
  const isLoggedIn = useSelector(getLoggedInStatus);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <AppBar position="fixed">
          <Container fixed maxWidth="xl">
            <Toolbar>
              <AddIcCallOutlined
                sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
              />
              <Typography
                variant="h6"
                sx={{
                  mr: 2,
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                }}
              >
                ContactSaver
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
