// Quiz Get Elements
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

// Take data from local storage - put into array

let quizData = JSON.parse(localStorage.getItem('MyQuiz'));

const addQuiz = (ev) => {
  ev.preventDefault();

  let quizForm = {
    question: document.getElementById('question-input').value,
    a: document.getElementById('a-input').value,
    b: document.getElementById('b-input').value,
    c: document.getElementById('c-input').value,
    d: document.getElementById('d-input').value,
    correct: document.getElementById('correct-input').value,
  };

  quizData.push(quizForm);
  document.forms[0].reset();

  console.warn('added', { quizData });

  localStorage.setItem('MyQuiz', JSON.stringify(quizData));
};
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submitForm').addEventListener('click', addQuiz);
  console.log(quizData);
});

let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz() {
  // Previous selection remains checked without this
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  // Check to see the answer
  const answer = getSelected();
  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    // Convert Score to Percentage
    const scorePercent = Math.floor((score / quizData.length) * 100);
    console.log(scorePercent);

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <div class="quiz-header"
      <h2>You answered ${scorePercent}% of the questions correctly</h2> 
      </div>
      <button class="quiz-button" onclick="location.reload()">Reload</button>`;
    }
  }
});
