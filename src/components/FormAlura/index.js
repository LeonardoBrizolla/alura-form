import { useState, useEffect } from 'react';
import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import { FormEndereco } from '../FormEndereco';
import { FormPessoal } from '../FormPessoal';
import { FormUsuario } from '../FormUsuario';

export const FormAlura = ({ onSubmit }) => {
  const [etapaForm, setEtapaForm] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});

  const coletarDados = (dados) => {
    setDadosColetados({ ...dadosColetados, ...dados });
    nextForm();
  };

  const forms = [
    <FormUsuario onSubmit={coletarDados} />,
    <FormPessoal onSubmit={coletarDados} />,
    <FormEndereco onSubmit={coletarDados} />,
    <Typography variant="h5">Cadastro concluído com sucesso!</Typography>,
  ];

  useEffect(() => {
    if (etapaForm === forms.length - 1) {
      onSubmit(dadosColetados);
    }
  }, [etapaForm, dadosColetados, forms.length, onSubmit]);

  const nextForm = () => {
    setEtapaForm((old) => old + 1);
  };

  return (
    <>
      <Stepper activeStep={etapaForm}>
        <Step>
          <StepLabel>Usuário</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Endereço</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>

      {forms[etapaForm]}
    </>
  );
};
