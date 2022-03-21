const CNPJ = require("@fnando/cnpj/commonjs");
const CPF = require("@fnando/cpf/commonjs");

const ukpng = require('UK-Phone-Number-Generator');

const Cnpj = (cnpj = "")=> {

  // gera um novo cnpj
  if(!!!cnpj) {
    return CNPJ.generate();
  }

  // valida um anovo cnpj
  return CNPJ.isValid(cnpj);

}

const Cpf = (cpf = "")=> {

  // gera um novo cnpj
  if(!!!cpf) {
    return CPF.generate();
  }

  // valida um anovo cnpj
  return CPF.isValid(cpf);

}

const Phone = ()=> {

  console.log(ukpng.GenerateNumber(3));
}

module.exports = { Cnpj, Cpf, Phone }



