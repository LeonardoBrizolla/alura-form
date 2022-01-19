import { createContext } from 'react';
import { semValidacao } from '../../models/Validacoes';

export const ValidacoesCadastro = createContext({
  cpf: semValidacao,
  senha: semValidacao,
});
