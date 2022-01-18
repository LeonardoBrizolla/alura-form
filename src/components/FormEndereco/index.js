import { Button, TextField } from '@material-ui/core';

export const FormEndereco = () => (
  <form>
    <TextField
      id="cep"
      label="cep"
      type="number"
      variant="outlined"
      margin="normal"
      required
    />
    <TextField
      id="endereco"
      label="endereco"
      type="text"
      variant="outlined"
      margin="normal"
      fullWidth
      required
    />
    <TextField
      id="numero"
      label="numero"
      type="number"
      variant="outlined"
      margin="normal"
      required
    />
    <TextField
      id="estado"
      label="estado"
      type="text"
      variant="outlined"
      margin="normal"
      required
    />
    <TextField
      id="cidade"
      label="cidade"
      type="text"
      variant="outlined"
      margin="normal"
      required
    />
    <Button type="submit" color="primary" variant="contained" fullWidth>
      Finalizar Cadastro
    </Button>
  </form>
);
