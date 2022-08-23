import { useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/auth-selector';
import { useLogoutUserMutation } from 'redux/contacts/contactsApi';
import { Container, IconButton, Typography } from '@mui/material';
import { LogoutOutlined } from '@mui/icons-material';

const UserMenu = () => {
  const [userLogout] = useLogoutUserMutation();
  const name = useSelector(getUserName);
  return (
    <Container>
      <Typography>Wellcom, {name}</Typography>
      <IconButton onClick={() => userLogout(null)}>
        <LogoutOutlined color="inherit" />
      </IconButton>
    </Container>
  );
};

export default UserMenu;
