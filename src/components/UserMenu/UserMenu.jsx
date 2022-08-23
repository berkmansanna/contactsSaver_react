import { useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/auth-selector';
import { useLogoutUserMutation } from 'redux/contacts/contactsApi';
import { Box, IconButton, Typography } from '@mui/material';
import { LogoutOutlined } from '@mui/icons-material';

const UserMenu = () => {
  const [userLogout] = useLogoutUserMutation();
  const name = useSelector(getUserName);
  return (
    <Box display="flex" sx={{ mr: '5px' }}>
      <Typography sx={{ p: 2, display: 'block' }}>Wellcom, {name}</Typography>
      <IconButton onClick={() => userLogout(null)}>
        <LogoutOutlined sx={{ color: 'white' }} />
      </IconButton>
    </Box>
  );
};

export default UserMenu;
