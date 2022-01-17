import { Container, Typography } from '@material-ui/core';
import { FormAlura } from './components/FormAlura';

export const App = () => (
  <Container maxWidth="sm" component="article">
    <Typography color="primary" variant="h3" component="h1" align="center">
      Alura Form
    </Typography>
    <FormAlura />
  </Container>
);
