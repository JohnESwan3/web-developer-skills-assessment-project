// Banner Event Listeners
const showCardBox = document.getElementById('show-card-box');
const deleCards = document.getElementById('delete-cards');

// // Input Event Listeners
// const termInput = document.getElementById('term-input');
// const definitionInput = document.getElementById('definition-input');
// const submitBtn = document.getElementById('submit');

// Flashcard Event Listeners
const flashcard = document.getElementById('card');
const btnGroup = document.querySelector('.btn-group');
const termFrontEl = document.getElementById('term-front');
const termBackEl = document.getElementById('term-back');
const definitionEl = document.getElementById('definition');
const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');

// Take data from local storage
let cardData = JSON.parse(localStorage.getItem('MyFlashcards'));

const addFlashCard = (ev) => {
  ev.preventDefault(); // Stop form submitting
  let card = {
    // id: Date.now(),
    term: document.getElementById('term-input').value,
    definition: document.getElementById('definition-input').value,
  };
  cardData.push(card);
  document.forms[0].reset(); // Clear the form for next entries

  // Display purposes only
  console.warn('added', { cardData });

  // Save to LS
  localStorage.setItem('MyFlashcards', JSON.stringify(cardData));
};
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submit').addEventListener('click', addFlashCard);
  console.log(cardData);
});

// Create Flash Card Functions

// Flashcard Functions
// Start array at beginning
let currentCard = 0;

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
loadCard();
