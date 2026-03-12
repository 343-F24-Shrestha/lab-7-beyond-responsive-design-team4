const cards = JSON.parse(localStorage.getItem('cards')) || [];

const template = document.getElementById('card-template');

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];

  const cardView = template.content.cloneNode(true);

  
  cardView.querySelector('.title-text').textContent = card.title;
  cardView.querySelector('.subtitle-text').textContent = card.subtitle;
  cardView.querySelector('.to-text').textContent = card.to;
  cardView.querySelector('.message-text').textContent = card.message;
  cardView.querySelector('.from-text').textContent = card.from;

  const deleteBtn = cardView.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', function () {
    cards.splice(i, 1);
    localStorage.setItem('cards', JSON.stringify(cards));
    location.reload();
  });

  function updateCard() {
    cards[i].title = titleText.textContent;
    cards[i].subtitle = subtitleText.textContent;
    cards[i].to = toText.textContent;
    cards[i].message = messageText.textContent;
    cards[i].from = fromText.textContent;
    localStorage.setItem('cards', JSON.stringify(cards));
  }

  titleText.addEventListener('input', updateCard);
  subtitleText.addEventListener('input', updateCard);
  toText.addEventListener('input', updateCard);
  messageText.addEventListener('input', updateCard);
  fromText.addEventListener('input', updateCard);

  document.getElementById('card-list').appendChild(cardView);
}