//https://opentdb.com/api.php?amount=10&category=25&type=multiple

const question = document.querySelector('.question');
const options = Array.from(document.querySelectorAll('.option-text'));
const score-text = document.querySelector('.score');

let currentQuestion = {}

let acceptAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []

let question = {
    {
        question: 'What is 2 + 2?',
        option1: '2',
        option2: '4',
        option3: '1',
        option4: '8',
        answer: 2,
    },
}

const SCORE_POINTS = 100;
const MAX-QUESTIONS = 4;

startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion();
}

getNewQuestion = () => {
    if
}