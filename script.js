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
const next = document.getElementById("next");
let currentQuestion = 0;
let score = 0;
let i=0;

function showQuestion(){
  if(i==quiz.length){
    showScore();
  }else{

  
  let questionNo = i + 1;
  questionElement.innerHTML = questionNo + ". " + quiz[i].Question;
   // questionElement.innerHTML = quiz[i].Question;
    for(let j = 0 ; j < quiz[i].Option.length ; j++){
      optionsElement.innerHTML += 
      `
      <button id="btn" class="btn">${quiz[i].Option[j]}</button>
       `
    }
  }

}
showQuestion();


function startQuiz() {
  // console.log(i);
    document.querySelectorAll(".btn").forEach((e)=>{
        e.addEventListener("click",function(){
            if(quiz[i].Option.length>0 && i<quiz[i].Option.length ){
                optionsElement.innerHTML=""
            }
            if(this.innerText == quiz[i].Correcte){
                score +=1;
              
            }
            nextQuestion();

        })
    })


}
function showScore() {
  
    questionElement.innerHTML = `You scored ${score} out of ${quiz.length}!`;
    optionsElement.innerHTML = `<a href="" >Play Again`;
}

     startQuiz();

     function nextQuestion(){
      i++;
      showQuestion();
      startQuiz();
    
     }
