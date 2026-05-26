// BOTÃO
const botao = document.getElementById("converter");

// LISTA
const lista = document.getElementById("listaConversoes");

// EVENTO
botao.addEventListener("click", converter);


// FUNÇÃO
function converter(){

  // PEGANDO VALORES
  let ingrediente = document.getElementById("ingrediente").value;

  let tipo = document.getElementById("tipo").value;

  let valor = Number(document.getElementById("valor").value);

  let origem = document.getElementById("origem").value;

  let destino = document.getElementById("destino").value;

  // OBJETO COM EQUIVALÊNCIAS
  const medidas = {

    xicara: 240,
    colher_sopa: 15,
    colher_cha: 5,
    ml: 1,
    l: 1000,
    g: 1,
    kg: 1000

  };

  // VALIDAÇÃO
  if(valor <= 0){

    document.getElementById("resultado").innerHTML =
    "Digite um valor válido.";

    return;

  }

  // CONVERSÃO
  let valorEmBase = valor * medidas[origem];

  let resultado = valorEmBase / medidas[destino];

  // CONDICIONAL
  if(tipo === "liquido"){

    resultado = resultado.toFixed(2);

  }else{

    resultado = resultado.toFixed(1);

  }

  // RESULTADO NA TELA
  document.getElementById("resultado").innerHTML =
  `${valor} ${origem} de ${ingrediente}
   equivalem a ${resultado} ${destino}.`;

  // CRIANDO ITEM
  let item = document.createElement("li");

  item.innerHTML =
  `${ingrediente}: ${valor} ${origem}
   → ${resultado} ${destino}`;

  // ADICIONANDO NA LISTA
  lista.appendChild(item);

}