document.getElementById('preview-button').addEventListener('click', function () {
  document.querySelector('.title-text').textContent = document.getElementById('title').value;
  document.querySelector('.subtitle-text').textContent = document.getElementById('subtitle').value;
  document.querySelector('.to-text').textContent = document.getElementById('to').value;
  document.querySelector('.message-text').textContent = document.getElementById('message').value;
  document.querySelector('.from-text').textContent = document.getElementById('from').value;
});

document.querySelector('.card-form').addEventListener('submit', function (e) {
  e.preventDefault();

  
  const existing = localStorage.getItem('cards');
  const cards = existing ? JSON.parse(existing) : [];


  const card = {
    to:       document.getElementById('to').value,
    from:     document.getElementById('from').value,
    title:    document.getElementById('title').value,
    subtitle: document.getElementById('subtitle').value,
    message:  document.getElementById('message').value,
  };

  cards.push(card);
  localStorage.setItem('cards', JSON.stringify(cards));
});