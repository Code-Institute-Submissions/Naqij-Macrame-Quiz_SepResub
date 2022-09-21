const start_btn = document.querySelector(".start_quiz");
const quiz_box = document.querySelector(".quiz-box");
const question_input = quiz_box.querySelector(".question_input");
const options_box = quiz_box.querySelector(".options");
const next_btn = document.querySelector(".next-btn");
const total_q = document.querySelector(".quiz-bottom .total_q");
const count_que = document.querySelector(".quiz-bottom .count_que");
const result_box = document.querySelector(".result-box");
const total_que_r = document.querySelector(".total-question span");
const right_ans_r = document.querySelector(".correct-answers span");
const wrong_ans_r = document.querySelector(".wrong-answer span");
const score = document.querySelector(".score span");
const again_quiz = document.querySelector(".end-btn .play-again");

const mark_wrong = '<i class="fa fa-times"></i>';
const mark_check = '<i class="fa fa-check"></i>';

start_btn.onclick =()=>{
    quiz_box.classList.remove("hidden");
    start_btn.classList.add("hidden");
}

var que_index = 0;
var right_answers = 0;
var wrong_answers = 0;
count_que.innerText = que_index+1;
ShowQuestion(que_index);