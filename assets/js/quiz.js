const question = document.querySelector('#question');
const choices = document.querySelector('.choice-text');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Which Spanish artist painted the series known as Fantasy and Invention in the 18th century?',
        choice1: 'Francisco Goya',
        choice2: 'Diego Velázquez',
        choice3: 'Pablo Picasso',
        choice4: 'Josefa Bayeu',
        answer: 1,
    },

    {
        question: 'Which artist said Everything you can imagine is real?',
        choice1: 'Francisco Goya',
        choice2: 'Diego Velázquez',
        choice3: 'Pablo Picasso',
        choice4: 'Josefa Bayeu',
        answer: 3,
    },

    {
        question: 'Surrealist painter Rene Magritte was born in which country?',
        choice1: 'Belgium',
        choice2: 'England',
        choice3: 'France',
        choice4: 'Ireland',
        answer: 1,
    },

    {
        question: 'The Lady Lever Art Gallery is in which English city?',
        choice1: 'London',
        choice2: 'Liverpool',
        choice3: 'Manchester',
        choice4: 'Birmingham',
        answer: 2,
    },

    {
        question: 'Bowl of Fruit, Violin and Bottle is the work of which artist?',
        choice1: 'Francisco Goya',
        choice2: 'Diego Velázquez',
        choice3: 'Pablo Picasso',
        choice4: 'Josefa Bayeu',
        answer: 3,
    }
]