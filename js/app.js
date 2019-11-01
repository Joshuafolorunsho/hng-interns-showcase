(function() {
	const showMoreBtn = document.querySelector('#showmore');
	const more = document.querySelector('.more');
	let state = false;
	//listening for a click event on showmore button
	showMoreBtn.addEventListener('click', function() {
		console.log(state);
		if (!state) {
			more.style.display = 'block';
			showMoreBtn.textContent = 'Show Less';
			state = true;
		} else {
			more.style.display = 'none';
			showMoreBtn.textContent = 'Show More';
			state = false;
		}
	});
})();

// Toggle menu function
function toggleMenu() {
	let menuBar = $('#navMenu');
	menuBar.toggle();
}
