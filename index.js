const perguntas = [ // atribuimos a variável perguntas valores (array)
  {
    pergunta: "O que significa a sigla 'DOM' em JavaScript?",
    respostas: [
      "Documento Orientado a Modelos",
      "Dinâmica de Objeto de Modelo",
      "Modelo de Objeto de Documento"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
    respostas: [
      "Verificar o tipo de uma variável",
      "Realizar uma comparação estrita",
      "Iniciar um loop"
    ],
    correta: 0
  },
  {
    pergunta: "Como se declara uma variável em JavaScript?",
    respostas: [
      "newVar = 10;",
      "variavel == 10;",
      "let novaVariavel = 10;"
    ],
    correta: 2
  },
  {
    pergunta: "O que é o 'hoisting' em JavaScript?",
    respostas: [
      "Um tipo de loop",
      "Efeito colateral indesejado",
      "Comportamento onde as declarações são movidas para o topo do seu escopo"
    ],
    correta: 2
  },
  {
    pergunta: "Como se faz um comentário de uma única linha em JavaScript?",
    respostas: [
      "// Isso é um comentário",
      "# Isso é um comentário",
      "' Isso é um comentário"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do método 'map()' em arrays JavaScript?",
    respostas: [
      "Filtrar elementos",
      "Mapear valores para um novo array",
      "Ordenar elementos"
    ],
    correta: 1
  },
  {
    pergunta: "O que é um 'callback' em JavaScript?",
    respostas: [
      "Uma função que é passada como argumento para outra função",
      "Um tipo de erro",
      "Uma variável global"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
    respostas: [
      "'let' é usado para constantes e 'const' para variáveis",
      "'let' permite reatribuição e 'const' é para valores constantes",
      "'let' é para variáveis locais e 'const' para variáveis globais"
    ],
    correta: 1
  },
  {
    pergunta: "O que é um 'closure' em JavaScript?",
    respostas: [
      "Um tipo de erro",
      "Um bloco de código dentro de um loop",
      "Uma função que 'lembra' do ambiente em que foi criada"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a principal diferença entre '==' e '===' em JavaScript?",
    respostas: [
      "'==' compara apenas valores, '===' compara valores e tipos",
      "'==' é usado para atribuição, '===' é usado para comparação",
      "'==' é usado para comparação estrita, '===' para comparação solta"
    ],
    correta: 0
  }
];

const quiz = document.querySelector('div#quiz') // utilizando DOM (document) e utilizando querySelector para buscar um elemento HTML em JS
const template = document.querySelector('template') //

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição
for (const item of perguntas){
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta // textContent para mudar o conteúdo

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta // true
      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove() //remove o 'Resposta A' (elemento)

  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}