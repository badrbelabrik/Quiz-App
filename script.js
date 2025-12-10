const quiz = [
  {
    question: "Which keyword is used to define a class in Java?",
    answers: [
      { text: "class" },
      { text: "define" },
      { text: "struct" },
      { text: "object" }
    ],
    correct: "class",
    userAnswer: null,
    skip: false
  },
  {
    question: "Which method is the entry point of a Java program?",
    answers: [
      { text: "start()" },
      { text: "main()" },
      { text: "run()" },
      { text: "execute()" }
    ],
    correct: "main()",
    userAnswer: null,
    skip: false
  },
  {
    question: "Which keyword is used to create an object in Java?",
    answers: [
      { text: "class" },
      { text: "this" },
      { text: "new" },
      { text: "object" }
    ],
    correct: "new",
    userAnswer: null,
    skip: false
  },
  {
    question: "Which data type is used to store true/false values?",
    answers: [
      { text: "int" },
      { text: "boolean" },
      { text: "char" },
      { text: "float" }
    ],
    correct: "boolean",
    userAnswer: null,
    skip: false
  },
  {
    question: "Which symbol is used for single-line comments in Java?",
    answers: [
      { text: "//" },
      { text: "/* */" },
      { text: "#" },
      { text: "<!-- -->" }
    ],
    correct: "//",
    userAnswer: null,
    skip: false
  },
  {
    question: "Which keyword is used to inherit a class in Java?",
    answers: [
      { text: "inherits" },
      { text: "extends" },
      { text: "implements" },
      { text: "super" }
    ],
    correct: "extends",
    userAnswer: null,
    skip: false
  },
  {
    question: "What is the size of an int in Java?",
    answers: [
      { text: "8 bits" },
      { text: "16 bits" },
      { text: "32 bits" },
      { text: "64 bits" }
    ],
    correct: "32 bits",
    userAnswer: null,
    skip: false
  },
  {
    question: "Which OOP concept allows Java to have multiple forms of a method?",
    answers: [
      { text: "Encapsulation" },
      { text: "Inheritance" },
      { text: "Polymorphism" },
      { text: "Abstraction" }
    ],
    correct: "Polymorphism",
    userAnswer: null,
    skip: false
  },
  {
    question: "Which loop will always run at least once?",
    answers: [
      { text: "for loop" },
      { text: "while loop" },
      { text: "do-while loop" },
      { text: "foreach loop" }
    ],
    correct: "do-while loop",
    userAnswer: null,
    skip: false
  },
  {
    question: "Which keyword is used to stop a loop in Java?",
    answers: [
      { text: "stop" },
      { text: "exit" },
      { text: "break" },
      { text: "return" }
    ],
    correct: "break",
    userAnswer: null,
    skip: false
  }
];



let currentQuestion = 0;
let score = 0;
let reviewingSkipped = false;
let skippedList = [];

function showQuestion(){
      const footerContainer = document.querySelector("footer");
      
      const oldNext = footerContainer.querySelector(".nav-btn.next");
      const oldSkip = footerContainer.querySelector(".nav-btn.skip");
      if (oldNext) {oldNext.remove();}
      if(oldSkip){oldSkip.remove();}

      let skipBtn = document.createElement("button");
      skipBtn.textContent = "Skip Question";
      skipBtn.classList.add("nav-btn", "skip");
      skipBtn.onclick = skipQuestion;
      footerContainer.appendChild(skipBtn);

      let nextBtn = document.createElement("button");
      nextBtn.textContent = "Next";
      nextBtn.classList.add("nav-btn", "next");
      nextBtn.disabled = true;
      nextBtn.style.backgroundColor = "grey";
      nextBtn.style.cursor = "not-allowed";
      nextBtn.onclick = nextQuestion;
      footerContainer.appendChild(nextBtn);

      document.getElementById("h3").innerHTML = "Question"+(currentQuestion+1);
      document.getElementById("question").innerHTML = quiz[currentQuestion].question;
      document.getElementById("progress").innerHTML = (currentQuestion+1)+"/"+quiz.length;
      const answersContainer = document.querySelector(".answers-grid");
        answersContainer.innerHTML = "";


            for(let i=0; i<quiz[currentQuestion].answers.length; i++){
              let btn = document.createElement("button");
              btn.textContent = quiz[currentQuestion].answers[i].text;
              btn.classList.add("answer");
              btn.style.backgroundColor = "";
              
              if(quiz[currentQuestion].userAnswer != null){
                btn.disabled = true;
                
                if(btn.textContent === quiz[currentQuestion].correct){
                  btn.style.backgroundColor = "lightgreen";
                } 
                
                 else if(btn.textContent === quiz[currentQuestion].userAnswer && btn.textContent != quiz[currentQuestion].correct){
                  btn.style.backgroundColor = "lightcoral";
                } 
              } else {
                  btn.disabled = false;
                  btn.addEventListener("click", function(){
                  checkAnswer(quiz[currentQuestion].correct,btn.textContent,btn, quiz[currentQuestion]);
                  nextBtn.disabled = false;
                  nextBtn.style.backgroundColor = "#9d59ff";
                  nextBtn.style.cursor = "pointer";
                });
              }
                answersContainer.appendChild(btn);
              }
      }

function nextQuestion(){
  
   if(currentQuestion < quiz.length-1){
      currentQuestion++;
      showQuestion();
    } else if(currentQuestion == quiz.length-1 && checkSkipped() == 0){
        showResult();
    } else if(checkSkipped() != -1){
      alert("You have skipped some questions! Please answer them.");
      currentQuestion = checkSkipped();
      showQuestion();
      return;
    }
  }

  function showResult(){
        document.getElementById("h3").innerHTML = "";
        document.getElementById("question").innerHTML = "";

                const nextBtn = document.querySelector(".nav-btn.next")
        if(nextBtn){nextBtn.remove()}
        const skipBtn = document.querySelector(".nav-btn.skip")
        if(skipBtn){skipBtn.remove()}

        const answersContainer = document.querySelector(".answers-grid");
        answersContainer.innerHTML = "";
        let result = document.createElement("div");
        result.classList.add("score-screen");
        result.textContent = "your score is "+score+"/"+quiz.length;
        answersContainer.appendChild(result);
  }

  function checkSkipped(){
    for(element of quiz){
      if(element.skip == true){
        return quiz.indexOf(element);
      }
    }
    return -1;
  }

function previousQuestion(){
    if(currentQuestion>0){
      currentQuestion--;
      showQuestion();
    }
}

function checkAnswer(correctAnswer,btnText,btn, question){
  question.userAnswer = btnText;
  
  if(btnText === correctAnswer){
      btn.style.backgroundColor = "lightgreen";
      score++;
    } else{btn.style.background = "lightcoral";}
    const buttons = document.querySelectorAll(".answer");
    for(button of buttons){
      if(button.textContent == correctAnswer){
        button.style.backgroundColor = "lightgreen";
      }
      button.disabled = true;
    }
}

function skipQuestion(){
    quiz[currentQuestion].skip = true;
    currentQuestion++;
    showQuestion();
}

document.addEventListener("DOMContentLoaded", () => {showQuestion();});

