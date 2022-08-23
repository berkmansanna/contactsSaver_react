import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';

const AuthNav = () => {
  return (
    <>
      <NavLink to="/register">
        <Typography sx={{ p: 2, display: 'block' }}>Register</Typography>
      </NavLink>
      <NavLink to="/login">
        <Typography sx={{ p: 2, display: 'block' }}>Login</Typography>
      </NavLink>
    </>
  );
};

export default AuthNav;
