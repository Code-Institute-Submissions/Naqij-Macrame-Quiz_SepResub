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
        question: "What area did Macramé originated from?",
        choice1: "Africa",
        choice2: "Arab",
        choice3: "Asia",
        choice4: "America",
        answer: 2,
    },

    {
        question: "What type of craft is Macramé?",
        choice1: "Paper craft",
        choice2: "Stone craft",
        choice3: "Fiber art",
        choice4: "All the above",
        answer: 3,
    },

    {
        question: "Macramé can be used to make?",
        choice1: "Plant hangers",
        choice2: "Jewellery",
        choice3: "Clothing",
        choice4: "All the above",
        answer: 4,
    },

    {
        question: "Which of the following is NOT a type of Macramé knot?",
        choice1: "Larks head",
        choice2: "Spiral Knot",
        choice3: "Cordinal beak knot",
        choice4: "Clove hitch",
        answer: 3,
    },

    {
        question: "According to the wonder, why did sailors practice Macramé on their ships?",
        choice1: "To pass time",
        choice2: "Mend torn cloths",
        choice3: "To repair the sail",
        choice4: "To create containers",
        answer: 1,
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

        return window.location.assign('finish.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    
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

        if(classToApply === 'incorrect') {
            e.target('correct')
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

