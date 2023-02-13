const quizdb = [
    {
        question: "Q1 What is HTML?",
        a: "HTML describes the structure of a webpage",
        b: "HTML is the standard markup language mainly used to create web pages",
        c: "HTML consists of a set of elements that helps the browser how to view the content",
        d: " All of the mentioned",
        ans: "ans4"
    },

    {
        question: "Q2 Who is the father of HTML?",
        a: "Rasmus Lerdorf",
        b: "Tim Berners-Lee",
        c: "Brendan Eich",
        d: "Sergey Brin",
        ans: "ans2"
    },

    {
        question: "Q3  HTML stands for __________",
        a: "HyperText Markup Language",
        b: "HyperText Machine Language",
        c: "HyperText Marking Language",
        d: "HighText Marking Language",
        ans: "ans1"
    },

    {
        question: "Q4 What is the correct syntax of doctype in HTML5?",
        a: `doctype html`,
        b: `doctype html`,
        c: `doctype html`,
        d: `!doctype html`,
        ans: "ans4"
    },

    {
        question: "Q5 Which of the following is used to read an HTML page and render it?",
        a: "Web server",
        b: "Web network",
        c: "Web browser",
        d: "Web matrix",
        ans: "ans3"
    }
];

const questions = document.querySelector(".question");
const optiona = document.querySelector("#option1");
const optionb = document.querySelector("#option2");
const optionc = document.querySelector("#option3");
const optiond = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showscore = document.querySelector("#show");
const quizcontainer = document.querySelector(".quizcontainer");

let questionCount = 0;
let score = 0;

const loadQuestion = ()=>{
    questions.innerHTML = quizdb[questionCount].question;
    optiona.innerHTML = quizdb[questionCount].a;
    optionb.innerHTML = quizdb[questionCount].b;
    optionc.innerHTML = quizdb[questionCount].c;
    optiond.innerHTML = quizdb[questionCount].d;
}

loadQuestion();

const getAnsId = ()=>{
    let ansId;
    answers.forEach((curAns)=>{
        if(curAns.checked){
            ansId = curAns.id;
        }
    })
    return ansId;
}
const removeChecked = ()=>{
    answers.forEach(elem=>elem.checked = false)
}

submit.addEventListener('click',()=>{
    let checkanswer = getAnsId();
    if(checkanswer === quizdb[questionCount].ans){
        score++;
    }
    questionCount++;

    removeChecked();

    if(questionCount < quizdb.length){
        loadQuestion();
    }else{
        showscore.innerHTML = `
        <h3>Your Score is ${score}/${quizdb.length}</h3>
        <button class="btn" onclick="location.reload()">Again</button>
        `
        showscore.style.display = "flex";
        quizcontainer.style.display = "none";
    }
})

