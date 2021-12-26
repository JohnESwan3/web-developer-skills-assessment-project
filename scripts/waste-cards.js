const cardData = [
  {
    term: 'Overproduction',
    definition:
      'To produce sooner, faster, or in greater quantities than customer demands.',
  },
  {
    term: 'Inventory',
    definition:
      'Raw material, work in process, or finished goods which is not having value added to it.',
  },
  {
    term: 'Waiting',
    definition: 'People or parts that wait for a work cycle to be completed.',
  },
  {
    term: 'Motion',
    definition:
      'Unnecessary movement of people, parts or machines within a process.',
  },
  {
    term: 'Transportation',
    definition: 'Unnecessary movement of people or parts between processes.',
  },
  {
    term: 'Defects',
    definition:
      'Not right the first time. Repetition or correction of a process. Scrap, rework and defects.',
  },
  {
    term: 'Over Processing',
    definition: 'Processing beyond the standard required by the customer.',
  },
  {
    term: 'Talent',
    definition: "Underutilizing people's talents, skills, and knowledge.",
  },
];

// Event Listeners - El = element
const flashcard = document.getElementById('card');
const btnGroup = document.querySelector('.btn-group');
const termFrontEl = document.getElementById('term-front');
const termBackEl = document.getElementById('term-back');
const definitionEl = document.getElementById('definition');
const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');

// Start array at beginning
let currentCard = 0;

loadCard();

// Setup cards
function loadCard() {
  const currentCardData = cardData[currentCard];

  termFrontEl.innerText = currentCardData.term;
  termBackEl.innerText = currentCardData.term;
  definitionEl.innerText = currentCardData.definition;
}

// Next button
nextBtn.addEventListener('click', () => {
  console.log('next');
  currentCard++;
  if (currentCard < cardData.length) {
    loadCard();
  } else {
    flashcard.innerHTML = `
      <div class="flashcard__inner">
        <div class="flashcard__face flashcard__face--front">
        <div style="flex-direction: column">
        <h2>You Finished!</h2>
        <button class="quiz-button" style="border-radius: 16px" onclick="location.reload()">Restart</button>
        </div>
        </div>
      </div>
      `;
  }
});

// Previous button
previousBtn.addEventListener('click', () => {
  console.log('previous');
  currentCard--;
  loadCard();
});
