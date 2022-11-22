let nomeCompleto
let dataDeNascimento
let endereco
let cpf
let escolaridade
let temCNH
let numeroFilhos
let cargoAtual
let salario
let recebeComissao
let anoDeAdmissao

nomeCompleto=prompt("Digite seu nome completo:")
dataDeNascimento=prompt("Informe sua data de nascimento 00/00/0000")
endereco=prompt("Qual é seu endereço?")
cpf=prompt("Digite seu CPF")
escolaridade=prompt("Qual é o seu nível de escolaridade?")
temCNH=prompt("Você possui Carteira Nacional de Habilitação?")
numeroFilhos=prompt("Quantos filhos você tem?")
cargoAtual=prompt("Qual é o cargo que você exerce atualmente?")
salario=prompt("Qual é o seu salário?")
recebeComissao=prompt("Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero")
anoDeAdmissao=prompt("Informe o ano de admissão:")

console.log(
    typeof(nomeCompleto),
    typeof(dataDeNascimento),
    typeof(endereco),
    typeof Number(cpf),
    typeof(escolaridade),
    typeof Boolean(temCNH),
    typeof Number(numeroFilhos),
    typeof(cargoAtual),
    typeof Number(salario),
    typeof Number(recebeComissao),
    typeof(anoDeAdmissao)
)

console.log(
    "Nome completo: "+nomeCompleto,
    "Data de Nascimento: "+dataDeNascimento,
    "Endereço: "+endereco,
    "CPF: "+cpf,
    "Escolaridade: "+escolaridade,
    "Tem CNH: "+temCNH,
    "Número de filhos: "+numeroFilhos,
    "Cargo atual: "+cargoAtual,
    "Salário: "+salario,
    "Comissão: "+recebeComissao,
    "Ano de admissão: "+anoDeAdmissao
)