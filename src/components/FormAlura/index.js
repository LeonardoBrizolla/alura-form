import { FormPessoal } from '../FormPessoal';
import { FormUsuario } from '../FormUsuario';

export const FormAlura = ({ onSubmit, validaCpf }) => (
  <>
    <FormPessoal />
    <FormUsuario />
  </>
);
