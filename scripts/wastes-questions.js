const quizData = [
  {
    question: 'What is Overproduction',
    a: 'To produce sooner, faster, or in greater quantities than customer demands',
    b: 'Demand is greater than supply',
    c: 'To have more materials than needed',
    d: 'To more waste than expected',
    correct: 'd',
  },
  {
    question: 'What is inventory',
    a: 'Jobsite',
    b: 'Value-added product',
    c: 'Processing beyond the standard required by the customer',
    d: 'Raw material, work in process, or finished goods which is not having value added to it',
  },
  {
    question:
      'People or parts that wait for a work cycle to be completed are...',
    a: 'Impatient',
    b: 'Waiting',
    c: 'Ambitious',
    d: 'Defects',
    correct: 'b',
  },
  {
    question:
      'Unnecessary movement of people, parts or machines within a process is called ...',
    a: 'Motion',
    b: 'Assembly',
    c: 'Notion',
    d: 'Conscription',
    correct: 'a',
  },
  {
    question:
      'What is the unnecessary movement of people or parts BETWEEN processes',
    a: 'Transmographication',
    b: 'Assembly',
    c: 'Transportation',
    d: 'Unending Movement',
    correct: 'c',
  },
  {
    question: 'What are Defects',
    a: 'Not right the first time. Repetition or correction of a process',
    b: 'The process before metal is bent',
    c: 'Moving too fast',
    d: 'Moving too slow',
    correct: 'a',
  },
  {
    question: 'Processing beyond the standard required by the customer is ...',
    a: 'Over Engineering',
    b: 'Under Engineering',
    c: 'Over Processing',
    d: 'Under Processing',
    correct: 'c',
  },
  {
    question: 'According to the 8 Wastes, what is the definition of Talent',
    a: 'Under-utilizing talents, skills and knowledge',
    b: 'Over-utilizing talents, skills and knowledge',
    c: 'Not utilizing talents, skills and knowledge',
    d: 'Raw material',
    correct: 'a',
  },
];

// Variables - El stands for Element
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

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

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <div class="quiz-header"
      <h2>You answered ${score}/${quizData.length} questions correctly</h2> 
      </div>
      <button class="quiz-button" onclick="location.reload()">Reload</button>`;
    }
  }
});
