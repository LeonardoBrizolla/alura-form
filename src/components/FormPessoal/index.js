import { useContext, useState } from 'react';
import { TextField, Button, FormControlLabel, Switch } from '@material-ui/core';
import { ValidacoesCadastro } from '../../contexts/ValidacoesCadastro';
import { useErros } from '../../hooks/useErros';

export const FormPessoal = ({ onSubmit }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(false);
  const [novidades, setNovidades] = useState(false);
  const validacoes = useContext(ValidacoesCadastro);

  const [errors, validaCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      className="form-alura"
      onSubmit={(event) => {
        event.preventDefault();

        if (possoEnviar())
          return onSubmit({
            nome,
            sobrenome,
            cpf,
            promocoes,
            novidades,
            errors,
          });
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        value={sobrenome}
        onChange={(event) => setSobrenome(event.target.value)}
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        value={cpf}
        onChange={(event) => setCpf(event.target.value)}
        id="CPF"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        error={!errors.cpf.valido}
        helperText={errors.cpf.text}
        onBlur={validaCampos}
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
        Próximo
      </Button>
    </form>
  );
};
