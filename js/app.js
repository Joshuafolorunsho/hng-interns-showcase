(function() {
	const showMoreBtn = document.querySelector('#showmore');
	showMoreBtn.addEventListener('click', function() {
		const displayNone = document.querySelector('.togglenone');
		if (showMoreBtn.textContent == 'Show More') {
			displayNone.classList.toggle('togglenone');
			showMore.textContent = 'Show Less';
		}
		// else {
		// 	displayNone.classList.toggle('togglenone');
		// 	displayNone.className = 'togglenone';
		// 	showMore.textContent = 'Show More';
		// }
	});
})();

function toggleMenu() {
	let menuBar = $('#navMenu');
	menuBar.toggle();
}

function grabHeight() {
	var D = document;
	return Math.max(
		D.body.scrollHeight,
		D.documentElement.scrollHeight,
		D.body.offsetHeight,
		D.documentElement.offsetHeight,
		D.body.clientHeight,
		D.documentElement.clientHeight
	);
}

let prev = 0;
function mainfunc() {
	//prev = pctScrolled;
	var winheight =
		window.innerHeight ||
		(document.documentElement || document.body).clientHeight;
	var docheight = grabHeight();
	var scrollTop =
		window.pageYOffset ||
		(document.documentElement || document.body.parentNode || document.body)
			.scrollTop;
	var trackLength = docheight - winheight;
	var pctScrolled = (scrollTop / trackLength) * 100;

	if (scrollTop > prev) {
		document.getElementById('header').classList.add('navbg2');
		document.getElementById('header').classList.remove('navbg');
		document.getElementById('header').classList.remove('dynamic');
	} else {
		document.getElementById('header').classList.add('navbg');
		document.getElementById('header').classList.remove('navbg2');
		document.getElementById('header').classList.add('dynamic');
	}
	if (pctScrolled < 0.3) {
		document.getElementById('header').classList.add('navbg2');
		document.getElementById('header').classList.remove('navbg');
		document.getElementById('header').classList.remove('dynamic');
	}

	return (prev = scrollTop <= 0 ? 0 : scrollTop);
}
window.addEventListener('scroll', function() {
	mainfunc();
});
