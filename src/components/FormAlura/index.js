import { FormEndereco } from '../FormEndereco';
import { FormPessoal } from '../FormPessoal';
import { FormUsuario } from '../FormUsuario';

export const FormAlura = ({ onSubmit, validaCpf }) => (
  <>
    <FormPessoal onSubmit={onSubmit} validaCpf={validaCpf} />
    <FormUsuario />
    <FormEndereco />
  </>
);
