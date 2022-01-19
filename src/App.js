import { Container, Typography } from '@material-ui/core';
import { FormAlura } from './components/FormAlura';
import { ValidacoesCadastro } from './contexts/ValidacoesCadastro';
import { validaCpf, validaSenha } from './models/Validacoes';

export const App = () => {
  const handleSubmit = (data) => console.log(data);

  return (
    <Container maxWidth="sm" component="article">
      <Typography color="primary" variant="h3" component="h1" align="center">
        Alura Form
      </Typography>
      <ValidacoesCadastro.Provider
        value={{ cpf: validaCpf, senha: validaSenha }}
      >
        <FormAlura onSubmit={handleSubmit} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
};
