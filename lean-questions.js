const quizData = [
  {
    question: 'What is 6S',
    a: 'Study, Sort, Shine, Set in Order, Standardize, Sustain',
    b: 'Study, Simplify, Standardize, Safety, Scout, Set',
    c: 'Study, Sustain, Sort, Simplify, Sanctify, Sequence',
    d: 'Amplify, Sort, Standardize, Gemba, State, Sequence',
    correct: 'a',
  },
  {
    question: 'Where does the name for A3 Report come from',
    a: '11x17 Paper',
    b: 'Solidworks',
    c: 'Steel Type',
    d: 'Military Aircraft',
    correct: 'a',
  },
  {
    question: 'What is Autonomation',
    a: 'A machine that acts independantly',
    b: 'A self driving car',
    c: 'Automation with a human touch',
    d: 'A welding technique',
    correct: 'c',
  },
  {
    question: 'What does FIFO stand for',
    a: 'Fire Inside, Flood Outside',
    b: 'First Item Focused On',
    c: 'Finish It Fine Once',
    d: 'First In First Out',
    correct: 'd',
  },
  {
    question: 'What is JIT (Just In Time) in relation to LEAN',
    a: 'A tool in Tailwind CSS',
    b: 'Delivering a product to the customer exactly when they need it',
    c: 'Making it to work right before you would be late',
    d: 'Meeting production goals',
    correct: 'b',
  },
  {
    question: 'What is the purpose of LEAN',
    a: 'Create value by minimizing waste',
    b: 'Create  as much invintory as possible',
    c: 'Low staff - High Output',
    d: 'More hours, less production',
    correct: 'a',
  },
  {
    question: 'What is Over-production',
    a: 'Too many people working at once',
    b: 'Too much material being unused',
    c: 'Any step or process that does not add value in the eyes of the customer',
    d: 'Making too much, too soon, too fast',
    correct: 'd',
  },
  {
    question: 'What is PDCA (Plan-Do-Check-Act)',
    a: 'A problem-solving method that leads you through reporting unproductive co-workers',
    b: 'A problem-solving method that leads you through continuous improvement cycles',
    c: 'A problem-solving method that leads you through continuous deployment',
    d: 'A problem-solving method that leads you through reporting out-of-stock material',
    correct: 'b',
  },
  {
    question: 'What is Red Team',
    a: 'Welders',
    b: 'Cleanup-crew',
    c: 'Engineers',
    d: 'A group of people from departments well versed in LEAN that help coach people through solving problems within the company',
    correct: 'd',
  },
  {
    question: 'What is the Theory of Constraints',
    a: 'Approach to capacity improvement by focusing on improving the contraint or bottleneck',
    b: 'Approach to wasted time by either increasing or decreasing staff working',
    c: 'Approach to improving product quality by reusing materials',
    d: 'Approach to decreasing downtime by taking less breaks',
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
