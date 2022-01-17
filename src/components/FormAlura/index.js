import { TextField, Button, FormControlLabel, Switch } from '@material-ui/core';
import { useState } from 'react';

export const FormAlura = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(false);
  const [novidades, setNovidades] = useState(false);

  return (
    <form
      action="#TODO"
      className="form-alura"
      onSubmit={(event) => {
        event.preventDefault();

        console.log({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={sobrenome}
        onChange={(event) => setSobrenome(event.target.value)}
      />
      <TextField
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={cpf}
        onChange={(event) => setCpf(event.target.value)}
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => setPromocoes(event.target.checked)}
            name="promocoes"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => setNovidades(event.target.checked)}
            name="novidades"
            color="primary"
          />
        }
      />
      <Button type="submit" color="primary" variant="contained">
        Cadastrar
      </Button>
    </form>
  );
};
