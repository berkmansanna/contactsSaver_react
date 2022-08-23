import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getLoggedInStatus } from 'redux/auth/auth-selector';

const Navigation = () => {
  const loggedInStatus = useSelector(getLoggedInStatus);
  return (
    <Box as="nav" display="flex">
      {loggedInStatus && (
        <NavLink to="/contacts">
          <Typography sx={{ p: 2, display: 'block' }}>Contacts</Typography>
        </NavLink>
      )}
    </Box>
  );
};

export default Navigation;
