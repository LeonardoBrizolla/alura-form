import { useContext, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { ValidacoesCadastro } from '../../contexts/ValidacoesCadastro';

export const FormUsuario = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ senha: { valido: true, text: '' } });

  const validacoes = useContext(ValidacoesCadastro);

  const validaCampos = (event) => {
    const { name, value } = event.target;
    const novoEstado = { ...errors };
    novoEstado[name] = validacoes[name](value);
    setErrors(novoEstado);
  };

  const possoEnviar = () => {
    for (let campo in errors) {
      if (!errors[campo].valido) return false;
      return true;
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (possoEnviar()) onSubmit({ email, password });
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
        onBlur={validaCampos}
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
      />
      <Button type="submit" color="primary" variant="contained">
        Próximo
      </Button>
    </form>
  );
};
