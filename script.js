const questions = [
  {
    question: "Quel mot-clé est utilisé pour déclarer une variable constante en Java?",
    answers: [
      { text: "static", correct: false },
      { text: "final", correct: true },
      { text: "const", correct: false },
      { text: "volatile", correct: false },
    ],
  },
  {
    question: "Quelle interface est utilisée pour trier les éléments dans un tableau en Java?",
    answers: [
      { text: "Sorter", correct: false },
      { text: "Sortable", correct: false },
      { text: "Comparable", correct: false },
      { text: "Comparator", correct: true },
    ],
  },
  {
    question: "Quelle est la taille de base d'un type de données int en Java?",
    answers: [
      { text: " 4 bits", correct: false },
      { text: "8 bits", correct: false },
      { text: "16 bits", correct: false },
      { text: " 32 bits", correct: true },
    ],
  },
  {
    question: "Quelle méthode est utilisée pour démarrer l'exécution d'un thread en Java?",
    answers: [
      { text: "start()", correct: true },
      { text: "run()", correct: false },
      { text: "execute()", correct: false },
      { text: "begin()", correct: false },
    ],
  },
];
const question = document.getElementById("question");
const answerButtons = document.getElementById("answer");
const next = document.getElementById("next");

let QuestionIndex =0;
let score =0;

function startQuiz(){
     QuestionIndex =0;
     score =0; 
     next.innerHTML = "Next";
     showQuestion();
}
function showQuestion(){
    resetNext() ;
    let Quest = questions[QuestionIndex];
    let questionNo = QuestionIndex + 1;
    question.innerHTML = questionNo + ". " + Quest.
    question;
   
    Quest.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });

 function resetNext(){
    next.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }
 }
 function selectAnswer(e){
    const selectedBtn = e.target;
    //console.log(selectedBtn.dataset);
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    next.style.display = "block";
 }   
}
startQuiz();