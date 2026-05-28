// BOTÃO
const botao = document.getElementById("botaoConverter");

// RESULTADO
const resultado = document.getElementById("resultado");

// LISTA
const lista = document.getElementById("listaConversoes");

// EVENTO
botao.addEventListener("click", converter);

// FUNÇÃO
function converter(){

  // PEGANDO VALORES
  let ingrediente =
  document.getElementById("ingrediente").value;
  let valor =
  Number(document.getElementById("valor").value);
  let origem =
  document.getElementById("origem").value;
  let destino =
  document.getElementById("destino").value;

  // OBJETO
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
    resultado.innerHTML = "Erro";
    return;
  }

  // CONVERSÃO
  let valorBase =
  valor * medidas[origem];

  let resultadoFinal =
  valorBase / medidas[destino];

  // CASAS DECIMAIS
  resultadoFinal =
  resultadoFinal.toFixed(2);

  // MOSTRAR RESULTADO
  resultado.innerHTML =
  resultadoFinal;

  // REMOVER MENSAGEM
  lista.innerHTML += "";

  // ITEM
  let item =
  document.createElement("li");
  item.innerHTML =
  `<strong>${ingrediente}</strong><br>
  ${valor} ${origem}
  → ${resultadoFinal} ${destino}`;

  // ADICIONAR
  lista.appendChild(item);
}