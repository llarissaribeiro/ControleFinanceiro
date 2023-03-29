let dinheiro = parseFloat(prompt("Seja bem-vindo(a)!" + "\nInforme abaixo a quantidade de dinheiro disponível"))
let opcoes = ""

do{
  opcoes = prompt(
    "Saldo disponível: R$ " + dinheiro +
    "\n\nQual ação você gostaria de fazer?\n" +
    "\n1 - Adicionar Dinheiro" +
    "\n2 - Remover Dinheiro" +
    "\n3 - Sair"
  )

  switch(opcoes){
    case "1":
      dinheiro += parseFloat(prompt("Informe o valor a ser adicionado:"))
      alert("Saldo disponível: R$ " + dinheiro)
      break
    case "2":
      dinheiro -= parseFloat(prompt("Informe o valor a ser retirado:"))
      alert("Saldo disponível: R$ " + dinheiro);
      break
    case "3":
    alert("Saindo...")  
    break
  }


} while (opcoes !== "3")