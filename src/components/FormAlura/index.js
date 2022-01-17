import { InputAlura } from '../../objects/InputAlura';
import { Button } from '@material-ui/core';

export const FormAlura = () => {
  return (
    <form action="#TODO" className="form-alura">
      <InputAlura id="name" contentLabel="Nome" />
      <InputAlura id="lastName" contentLabel="Nome" />
      <InputAlura id="cpf" contentLabel="CPF" />
      <InputAlura id="promotion" contentLabel="Promoções" type="checkbox" />
      <InputAlura id="news" contentLabel="Novidades" type="checkbox" />
      <Button color="primary" variant="contained">
        Cadastrar
      </Button>
    </form>
  );
};
