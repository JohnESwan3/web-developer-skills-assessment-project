var contentArr = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : [];

//   Event Listeners
document.getElementById('save-card').addEventListener('click', () => {
  addFlashcard();
});

document.getElementById('delete-cards').addEventListener('click', () => {
  localStorage.clear();
  flashcards.innerHTML = '';
  contentArr = [];
});

document.getElementById('show-card-box').addEventListener('click', () => {
  document.getElementById('create-card').style.display = 'block';
});

document.getElementById('close-card-box').addEventListener('click', () => {
  document.getElementById('create-card').style.display = 'none';
});

flashcardMaker = (text) => {
  const flashcard = document.createElement('div');
  const question = document.createElement('h2');
  const answer = document.createElement('h2');

  flashcard.className = 'flashcard';

  //   question.setAttribute('style',)
  question.textContent = text.my_question;

  answer.textContent = text.my_answer;

  flashcard.appendChild(question);
  flashcard.appendChild(answer);

  flashcard.addEventListener('click', () => {
    if (answer.style.display == 'none') answer.style.display = 'block';
    else answer.style.display = 'none';
  });

  document.querySelector('#flashcards').appendChild(flashcard);
};

contentArr.forEach(flashcardMaker);

addFlashcard = () => {
  const question = document.querySelector('#question');
  const answer = document.querySelector('#answer');

  let flashcard_info = {
    my_question: question.ariaValueMax,
    my_answer: answer.value,
  };

  contentArr.push(flashcard_info);
  localStorage.setItem('items', JSON.stringify(contentArr));
  flashcardMaker(contentArr[contentArr.length - 1]);
  question.value = '';
  answer.value = '';
};
