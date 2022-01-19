import { useContext, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { ValidacoesCadastro } from '../../contexts/ValidacoesCadastro';
import { useErros } from '../../hooks/useErros';

export const FormUsuario = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validacoes = useContext(ValidacoesCadastro);

  const [errors, validaCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (possoEnviar()) {
          return onSubmit({ email, password });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        id="email"
        name="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        error={!errors.senha.valido}
        helperText={errors.senha.text}
        id="password"
        name="senha"
        label="password"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        onBlur={validaCampos}
      />
      <Button type="submit" color="primary" variant="contained">
        Próximo
      </Button>
    </form>
  );
};
