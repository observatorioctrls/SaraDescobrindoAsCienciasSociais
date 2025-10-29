<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Jogo de Memória — Ciências Sociais</title>
<style>
  body {
    margin: 0;
    background: radial-gradient(circle at center, #0a0a0a, #1a1a1a);
    font-family: "Georgia", serif;
    color: #f0e6d2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  h1 {
    color: #cbb67a;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 24px;
  }

  .tabuleiro {
    display: grid;
    grid-template-columns: repeat(6, 120px);
    grid-gap: 12px;
    justify-content: center;
  }

  .carta {
    width: 120px;
    height: 120px;
    background: #2b1d14;
    border: 2px solid #b89f72;
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    perspective: 1000px;
    position: relative;
  }

  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    box-sizing: border-box;
    text-align: center;
    transition: transform 0.5s;
  }

  .frente {
    background: #b89f72;
    color: #1a0f08;
    transform: rotateY(180deg);
    font-size: 12px;
  }

  .verso {
    background: linear-gradient(to bottom, #3c2f2f, #1e1a1a);
    color: #e0d6c6;
    font-size: 14px;
    font-weight: bold;
  }

  .virada .frente { transform: rotateY(0); }
  .virada .verso { transform: rotateY(180deg); }

  .vitoria {
    margin-top: 20px;
    color: #cbb67a;
    font-size: 18px;
    text-align: center;
    display: none;
  }

  button {
    margin-top: 25px;
    background: #3c2f2f;
    color: #f0e6d2;
    border: 2px solid #b89f72;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-family: "Georgia", serif;
  }

  button:hover {
    background: #5a453d;
  }
</style>
</head>
<body>

<h1>Jogo de Memória — Ciências Sociais</h1>
<div class="tabuleiro" id="tabuleiro"></div>
<div class="vitoria" id="vitoria">🎉 Parabéns! Você encontrou todos os pares! 🎉</div>
<button onclick="reiniciarJogo()">Reiniciar</button>

<script>
const cartasInfo = [
  // POLÍTICA
  { autor: "Maquiavel", trecho: "É melhor ser temido do que amado, se não se pode ser ambos." },
  { autor: "Hobbes", trecho: "O homem é o lobo do homem." },
  { autor: "Rousseau", trecho: "O homem nasce livre, e por toda parte encontra-se acorrentado." },
  { autor: "Marx", trecho: "Os trabalhadores nada têm a perder a não ser suas correntes." },
  { autor: "Arendt", trecho: "O poder surge onde as pessoas se reúnem e agem em concerto." },
  { autor: "Foucault", trecho: "O poder provém de todos os lugares." },

  // ANTROPOLOGIA
  { autor: "Mauss", trecho: "Dar, receber e retribuir são obrigações fundamentais que mantêm a sociedade unida." },
  { autor: "Malinowski", trecho: "Somente a observação participante permite compreender a lógica interna da vida social." },
  { autor: "Boas", trecho: "O comportamento humano é moldado pelos padrões culturais, não pela herança biológica." },
  { autor: "Lévi-Strauss", trecho: "O parentesco é uma linguagem universal." },
  { autor: "Geertz", trecho: "O homem é um animal amarrado a teias de significados que ele mesmo teceu." },
  { autor: "Mead", trecho: "A turbulência da adolescência depende do contexto cultural." },

  // SOCIOLOGIA
  { autor: "Durkheim", trecho: "O fato social deve ser explicado não pelo indivíduo, mas pela sociedade." },
  { autor: "Weber", trecho: "A racionalização econômica formou o capitalismo moderno." },
  { autor: "Simmel", trecho: "A vida moderna exige um espírito blasé como defesa." },
  { autor: "Bourdieu", trecho: "O gosto classifica e classifica aquele que classifica." },
  { autor: "Bauman", trecho: "Vivemos tempos líquidos, em que nada é feito para durar." },
  { autor: "Goffman", trecho: "A vida social é como um teatro, e cada pessoa um ator." },
];

let cartas = [];

function criarCartas() {
  cartas = [];
  const embaralhar = [...cartasInfo].sort(() => Math.random() - 0.5);

  embaralhar.forEach(item => {
    cartas.push({ tipo: "autor", valor: item.autor, id: item.autor });
    cartas.push({ tipo: "trecho", valor: item.trecho, id: item.autor });
  });

  cartas.sort(() => Math.random() - 0.5);
}

function montarTabuleiro() {
  const tabuleiro = document.getElementById("tabuleiro");
  tabuleiro.innerHTML = "";

  cartas.forEach((carta, index) => {
    const div = document.createElement("div");
    div.classList.add("carta");
    div.dataset.id = carta.id;
    div.innerHTML = `
      <div class="face frente">${carta.valor}</div>
      <div class="face verso">📖</div>
    `;
    div.addEventListener("click", () => virarCarta(div));
    tabuleiro.appendChild(div);
  });
}

let primeira = null;
let segunda = null;
let bloqueado = false;
let paresEncontrados = 0;

function virarCarta(carta) {
  if (bloqueado || carta.classList.contains("virada")) return;
  carta.classList.add("virada");

  if (!primeira) {
    primeira = carta;
  } else {
    segunda = carta;
    verificarPar();
  }
}

function verificarPar() {
  bloqueado = true;
  const id1 = primeira.dataset.id;
  const id2 = segunda.dataset.id;

  if (id1 === id2 && primeira !== segunda) {
    paresEncontrados++;
    primeira = null;
    segunda = null;
    bloqueado = false;
    if (paresEncontrados === cartasInfo.length) {
      document.getElementById("vitoria").style.display = "block";
    }
  } else {
    setTimeout(() => {
      primeira.classList.remove("virada");
      segunda.classList.remove("virada");
      primeira = null;
      segunda = null;
      bloqueado = false;
    }, 1000);
  }
}

function reiniciarJogo() {
  document.getElementById("vitoria").style.display = "none";
  paresEncontrados = 0;
  criarCartas();
  montarTabuleiro();
}

criarCartas();
montarTabuleiro();
</script>

</body>
</html>
