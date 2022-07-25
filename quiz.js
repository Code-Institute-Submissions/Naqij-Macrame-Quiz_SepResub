const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "Which Spanish artist painted the series known as Fantasy and Invention in the 18th century?",
        choice1: "Francisco Goya",
        choice2: "Diego Velázquez",
        choice3: "Pablo Picasso",
        choice4: "Josefa Bayeu",
        answer: 1,
    },

    {
        question: "Which artist said Everything you can imagine is real?",
        choice1: "Francisco Goya",
        choice2: "Diego Velázquez",
        choice3: "Pablo Picasso",
        choice4: "Josefa Bayeu",
        answer: 3,
    },

    {
        question: "Surrealist painter Rene Magritte was born in which country?",
        choice1: "Belgium",
        choice2: "England",
        choice3: "France",
        choice4: "Ireland",
        answer: 1,
    },

    {
        question: "The Lady Lever Art Gallery is in which English city?",
        choice1: "London",
        choice2: "Liverpool",
        choice3: "Manchester",
        choice4: "Birmingham",
        answer: 2,
    },

    {
        question: "Bowl of Fruit, Violin and Bottle is the work of which artist?",
        choice1: "Francisco Goya",
        choice2: "Diego Velázquez",
        choice3: "Pablo Picasso",
        choice4: "Josefa Bayeu",
        answer: 3,
    }
]

const SCORE_POINTS = 20
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/finish.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()