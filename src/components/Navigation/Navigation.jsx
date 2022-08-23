import { Box, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getLoggedInStatus } from 'redux/auth/auth-selector';

const Navigation = () => {
  const loggedInStatus = useSelector(getLoggedInStatus);
  return (
    <Container>
      <Box>
        <NavLink to="/">Home</NavLink>;
        {loggedInStatus ? (
          <NavLink to="/contacts">Contacts</NavLink>
        ) : (
          'Need to register or login'
        )}
      </Box>
    </Container>
  );
};

export default Navigation;
