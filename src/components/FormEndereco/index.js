import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

export const FormEndereco = ({ onSubmit }) => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => setCep(event.target.value)}
        id="cep"
        name="cep"
        label="cep"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={endereco}
        onChange={(event) => setEndereco(event.target.value)}
        id="endereco"
        name="endereco"
        label="endereco"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={numero}
        onChange={(event) => setNumero(event.target.value)}
        id="numero"
        name="numero"
        label="numero"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={estado}
        onChange={(event) => setEstado(event.target.value)}
        id="estado"
        name="estado"
        label="estado"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={cidade}
        onChange={(event) => setCidade(event.target.value)}
        id="cidade"
        name="cidade"
        label="cidade"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" color="primary" variant="contained" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
};
