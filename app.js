/** @format */
const button = document.querySelectorAll('[data-btn]');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelectorAll('.close-btn');

button.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const cardName = e.target.dataset.btn;
		const card = document.querySelector('.' + cardName);
		console.log(card.querySelector('h3').innerText);
		modal.classList.add('open');
		modal.querySelector('h3').textContent = card.querySelector('h3').innerText;
	});
});
closeModalBtn.forEach((close) => {
	close.addEventListener('click', () => {
		modal.classList.remove('open');
	});
});
