import { Box, TextField, Button, Container } from '@mui/material';
import { useCreateUserMutation } from 'redux/contacts/contactsApi';

const Register = () => {
  const [createUser] = useCreateUserMutation();
  const handelSubmit = e => {
    e.preventDefault();

    const form = e.target;

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const newUser = { name, email, password };

    createUser(newUser);

    form.reset();
  };
  return (
    <Container>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 8, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handelSubmit}
      >
        <TextField label="Name" variant="standard" type="text" name="name" />
        <TextField label="Email" variant="standard" type="email" name="email" />
        <TextField
          label="Password"
          variant="standard"
          type="text"
          name="password"
        />
        <Button variant="outlined" type="submit">
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
