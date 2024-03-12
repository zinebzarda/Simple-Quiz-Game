const questions = [
  {
    question: "aaaaaaaaaa",
    answers: [
      { text: "bbb", correct: false },
      { text: "bbb", correct: true },
      { text: "bbb", correct: false },
      { text: "bbb", correct: false },
    ],
  },
  {
    question: "aaaaaaaaaa",
    answers: [
      { text: "bbb", correct: false },
      { text: "bbb", correct: true },
      { text: "bbb", correct: false },
      { text: "bbb", correct: false },
    ],
  },
  {
    question: "aaaaaaaaaa",
    answers: [
      { text: "bbb", correct: false },
      { text: "bbb", correct: true },
      { text: "bbb", correct: false },
      { text: "bbb", correct: false },
    ],
  },
  {
    question: "aaaaaaaaaa",
    answers: [
      { text: "bbb", correct: false },
      { text: "bbb", correct: true },
      { text: "bbb", correct: false },
      { text: "bbb", correct: false },
    ],
  },
];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const next = document.getElementById("next");

let QuestionIndex =0;
let score =0;

function startQuiz(){
     QuestionIndex =0;
     score =0; 
     next.innerHTML = "Next";
     Question();
}

function Question(){
    let Quest = questions[QuestionIndex];
    let  
}
