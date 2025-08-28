// Função para exibir as informações de jogadores ao clicar
const jogadores = [
  { nome: "Abel Ferreira", posicao: "Técnico", numero: null },
  { nome: "Gustavo Gómez", posicao: "Zagueiro", numero: 15 },
  { nome: "Dudu", posicao: "Atacante", numero: 7 },
  { nome: "Raphael Veiga", posicao: "Meio-campo", numero: 23 },
  { nome: "Weverton", posicao: "Goleiro", numero: 21 },
];

// Função para popular a lista de jogadores
function mostrarJogadores() {
  const listaJogadores = document.getElementById("lista-jogadores");
  listaJogadores.innerHTML = ""; // Limpa a lista atual

  jogadores.forEach(jogador => {
    const li = document.createElement("li");
    li.textContent = `${jogador.nome} - ${jogador.posicao}${jogador.numero ? " - Número: " + jogador.numero : ""}`;
    listaJogadores.appendChild(li);
  });
}

// Função para alternar a visibilidade das seções
function alternarVisibilidade(secao) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.display = section.id === secao ? 'block' : 'none';
  });
}

// F
