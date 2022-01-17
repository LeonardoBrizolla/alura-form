import { TextField, Button, FormControlLabel, Switch } from '@material-ui/core';

export const FormAlura = () => {
  return (
    <form action="#TODO" className="form-alura">
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        label="Promoções"
        control={<Switch defaultChecked name="promocoes" color="primary" />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch defaultChecked name="novidades" color="primary" />}
      />
      <Button color="primary" variant="contained">
        Cadastrar
      </Button>
    </form>
  );
};
