const validaCpf = (cpf) => {
  if (cpf.length !== 11) {
    return { valido: false, text: 'CPF deve conter 11 dígitos' };
  } else {
    return { valido: true, text: '' };
  }
};

const validaSenha = (senha) => {
  if (senha.length < 4 || senha.length > 15) {
    return { valido: false, text: 'Senha deve conter entre 4 e 15 dígitos' };
  } else {
    return { valido: true, text: '' };
  }
};

export { validaCpf, validaSenha };
