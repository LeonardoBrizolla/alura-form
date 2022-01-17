import { Container, Typography } from '@material-ui/core';
import { FormAlura } from './components/FormAlura';

export const App = () => {
  const handleSubmit = (data) => console.log(data);

  const validaCpf = (cpf) => {
    if (cpf.length !== 11) {
      return { valido: false, text: 'CPF deve conter 11 digitos' };
    } else {
      return { valido: true, text: '' };
    }
  };

  return (
    <Container maxWidth="sm" component="article">
      <Typography color="primary" variant="h3" component="h1" align="center">
        Alura Form
      </Typography>
      <FormAlura onSubmit={handleSubmit} validaCpf={validaCpf} />
    </Container>
  );
};
