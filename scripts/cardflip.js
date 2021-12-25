// Handles card flip
const card = document.querySelector('.flashcard__inner');

card.addEventListener('click', function (e) {
  card.classList.toggle('is-flipped');
});
