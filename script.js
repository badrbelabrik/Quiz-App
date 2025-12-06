const quiz = [
  {
    question: "Which keyword is used to define a class in Java?",
    answers: [
      { text: "class", correct: true },
      { text: "define", correct: false },
      { text: "struct", correct: false },
      { text: "object", correct: false }
    ]
  },
  {
    question: "Which method is the entry point of a Java program?",
    answers: [
      { text: "start()", correct: false },
      { text: "main()", correct: true },
      { text: "run()", correct: false },
      { text: "execute()", correct: false }
    ]
  },
  {
    question: "Which keyword is used to create an object in Java?",
    answers: [
      { text: "class", correct: false },
      { text: "this", correct: false },
      { text: "new", correct: true },
      { text: "object", correct: false }
    ]
  },
  {
    question: "Which data type is used to store true/false values?",
    answers: [
      { text: "int", correct: false },
      { text: "boolean", correct: true },
      { text: "char", correct: false },
      { text: "float", correct: false }
    ]
  },
  {
    question: "Which symbol is used for single-line comments in Java?",
    answers: [
      { text: "//", correct: true },
      { text: "/* */", correct: false },
      { text: "#", correct: false },
      { text: "&lt;!-- --&gt;", correct: false }
    ]
  },
  {
    question: "Which keyword is used to inherit a class in Java?",
    answers: [
      { text: "inherits", correct: false },
      { text: "extends", correct: true },
      { text: "implements", correct: false },
      { text: "super", correct: false }
    ]
  },
  {
    question: "What is the size of an int in Java?",
    answers: [
      { text: "8 bits", correct: false },
      { text: "16 bits", correct: false },
      { text: "32 bits", correct: true },
      { text: "64 bits", correct: false }
    ]
  },
  {
    question: "Which OOP concept allows Java to have multiple forms of a method?",
    answers: [
      { text: "Encapsulation", correct: false },
      { text: "Inheritance", correct: false },
      { text: "Polymorphism", correct: true },
      { text: "Abstraction", correct: false }
    ]
  },
  {
    question: "Which loop will always run at least once?",
    answers: [
      { text: "for loop", correct: false },
      { text: "while loop", correct: false },
      { text: "do-while loop", correct: true },
      { text: "foreach loop", correct: false }
    ]
  },
  {
    question: "Which keyword is used to stop a loop in Java?",
    answers: [
      { text: "stop", correct: false },
      { text: "exit", correct: false },
      { text: "break", correct: true },
      { text: "return", correct: false }
    ]
  }
];



let currentQuestion = 0;



function showQuestion(){
    count = currentQuestion+1
    document.getElementById("h3").innerHTML = "Question " + count;
    document.getElementById("question").innerHTML = quiz[currentQuestion].question;
    document.getElementById("answer1").innerHTML = quiz[currentQuestion].answers[0].text;
    document.getElementById("answer1").dataset.correct = quiz[currentQuestion].answers[0].correct;
    document.getElementById("answer2").innerHTML = quiz[currentQuestion].answers[1].text;
    document.getElementById("answer1").dataset.correct = quiz[currentQuestion].answers[1].correct;
    document.getElementById("answer3").innerHTML = quiz[currentQuestion].answers[2].text;
    document.getElementById("answer1").dataset.correct = quiz[currentQuestion].answers[2].correct;
    document.getElementById("answer4").innerHTML = quiz[currentQuestion].answers[3].text;
    document.getElementById("answer1").dataset.correct = quiz[currentQuestion].answers[3].correct;
}

function nextQuestion(){
    currentQuestion++;
    if(currentQuestion >= quiz.length){
        alert("Quiz finished!");
        return;
    }
    showQuestion();
}

function previousQuestion(){
    if(currentQuestion>=1){
            currentQuestion--;
    showQuestion();
    }
}

function showResult(){
const buttons = document.getElementsByClassName("answer");
for (let button of buttons) {
    button.addEventListener("click", function() {
        const isCorrect = button.dataset.correct === "true";
        if(isCorrect){
            button.style.backgroundColor = "green";
        } else{button.style.backgroundColor = "red"}
    for (let button of buttons){
        button.disabled = true;
    }    
    });
}
}


// function skipQuestion(){
//     currentQuestion+=2;
//     showQuestion();
// }

document.addEventListener("DOMContentLoaded", () => {showQuestion();});
document.addEventListener("DOMContentLoaded", () => {showResult();;});