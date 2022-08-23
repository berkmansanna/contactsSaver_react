import { Container, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { change } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilterChange = value => dispatch(change(value));

  return (
    <Container>
      <TextField
        label="Find contacts by name"
        variant="standard"
        value={filter}
        onChange={e => handleFilterChange(e.target.value)}
      />
    </Container>
  );
};
