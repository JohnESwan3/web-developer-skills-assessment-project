const cardData = [];

// Banner Event Listeners
const showCardBox = document.getElementById('show-card-box');
const deleCards = document.getElementById('delete-cards');

// Input Event Listeners
const termInput = document.getElementById('term-input');
const definitionInput = document.getElementById('definition-input');
const submitBtn = document.getElementById('submit');

// Flashcard Event Listeners
const flashcard = document.getElementById('card');
const btnGroup = document.querySelector('.btn-group');
const termFrontEl = document.getElementById('term-front');
const termBackEl = document.getElementById('term-back');
const definitionEl = document.getElementById('definition');
const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');

// Create Flash Card Functions

// Flashcard Functions
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
            <h2>You Finished!</h2>
        </div>
      </div>
      `;
    btnGroup.innerHTML = `
        <button class="quiz-button" onclick="location.reload()">Restart</button>
    `;
  }
});

// Previous button
previousBtn.addEventListener('click', () => {
  console.log('previous');
  currentCard--;
  loadCard();
});
