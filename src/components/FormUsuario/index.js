import { Button, TextField } from '@material-ui/core';

export const FormUsuario = () => (
  <form>
    <TextField
      id="email"
      label="email"
      type="email"
      variant="outlined"
      margin="normal"
      fullWidth
      required
    />
    <TextField
      id="password"
      label="password"
      type="password"
      variant="outlined"
      margin="normal"
      fullWidth
      required
    />
    <Button type="submit" color="primary" variant="contained">
      Cadastrar
    </Button>
  </form>
);
