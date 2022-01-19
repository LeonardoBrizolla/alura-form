import { useState } from 'react';

export const useErros = (validacoes) => {
  const estadoInicialErro = criaEstadoInicialErro(validacoes);
  const [errors, setErrors] = useState(estadoInicialErro);

  const validaCampos = (event) => {
    const { name, value } = event.target;
    const novoEstado = { ...errors };
    novoEstado[name] = validacoes[name](value);
    setErrors(novoEstado);
  };

  const possoEnviar = () => {
    for (let campo in errors) {
      if (!errors[campo].valido) {
        return false;
      }
    }
    return true;
  };

  return [errors, validaCampos, possoEnviar];
};

const criaEstadoInicialErro = (validacoes) => {
  const inicialErro = {};
  for (let campo in validacoes) {
    inicialErro[campo] = { valido: true, text: '' };
  }
  return inicialErro;
};
