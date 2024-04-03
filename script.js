const quiz = [
  {
    Question: "Quel mot-clé est utilisé pour déclarer une variable constante en Java?",
    Option: [
      "static",
      "final",
      "const",
      "volatile"
    ],
    Correcte: "final"
  },
  {
    Question: "Quelle interface est utilisée pour trier les éléments dans un tableau en Java?",
    Option: [
      "Sorter",
      "Sortable",
      "Comparable",
      "Comparator"
    ],
    Correcte: "Comparator"
  },
  {
    Question: "Quelle est la taille de base d'un type de données int en Java?",
    Option: [
      "4 bits",
      "8 bits",
      "16 bits",
      "32 bits"
    ],
    Correcte: "32 bits"
  },
  {
    Question: "Quelle méthode est utilisée pour démarrer l'exécution d'un thread en Java?",
    Option: [
      "start()",
      "run()",
      "execute()",
      "begin()"
    ],
    Correcte: "start()"
  }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("answer");
let currentQuestion = 0;
let score = 0;

function showQuestion() {
  if (currentQuestion >= quiz.length) {
    showScore();
    return;
  }

  const currentQuiz = quiz[currentQuestion];
  let questionNo = currentQuestion + 1;
  questionElement.textContent = questionNo + ". " + currentQuiz.Question;
  optionsElement.innerHTML = '';
  currentQuiz.Option.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('btn');
    button.addEventListener('click', () => checkAnswer(option));
    optionsElement.appendChild(button);
  
  });
}


showQuestion();

function checkAnswer(selectedOption) {
  const currentQuiz = quiz[currentQuestion];
  const correctOption = currentQuiz.Correcte;

  if (selectedOption === correctOption) {
    score++;
  
  }
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.disabled = true;
    if (button.textContent === correctOption) {
      button.classList.add("correct");
    } else if (button.textContent === selectedOption) {
      button.classList.add("incorrect");
    }
  });

  currentQuestion++;
  setTimeout(showQuestion, 1000);
}

function showScore() {
  questionElement.innerHTML = `<img class ="congra"src="images/congra.png">
  Congratulations! Your score: ${score}/${quiz.length}`;
  optionsElement.innerHTML = '<a href="">Play Again</a>';
}


showQuestion();
