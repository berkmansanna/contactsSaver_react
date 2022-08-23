import { Box, Container, TextField, Button } from '@mui/material';
import { useLoginUserMutation } from 'redux/contacts/contactsApi';

const Login = () => {
  const [loginUser] = useLoginUserMutation();

  const handelSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const logIn = { email, password };

    loginUser(logIn);

    form.reset();
  };
  return (
    <Container sx={{ mt: '1rem' }}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 8, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handelSubmit}
      >
        <TextField label="Email" variant="standard" type="email" name="email" />
        <TextField
          label="Password"
          variant="standard"
          type="text"
          name="password"
        />
        <Button variant="outlined" type="submit">
          Enter
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
