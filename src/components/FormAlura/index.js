import { useState } from 'react';
import { Typography } from '@material-ui/core';
import { FormEndereco } from '../FormEndereco';
import { FormPessoal } from '../FormPessoal';
import { FormUsuario } from '../FormUsuario';

export const FormAlura = ({ onSubmit, validaCpf }) => {
  const [etapaForm, setEtapaForm] = useState(0);

  const formController = (etapa) => {
    switch (etapa) {
      case 0:
        return <FormUsuario />;
      case 1:
        return <FormPessoal onSubmit={onSubmit} validaCpf={validaCpf} />;
      case 2:
        return <FormEndereco />;
      default:
        return <Typography>Erro etapa form</Typography>;
    }
  };

  return formController(etapaForm);
};
