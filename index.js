document.addEventListener('DOMContentLoaded', function () {
	const searchInput = document.getElementById('search-input');
	const searchForm = document.querySelector('form');

	searchForm.addEventListener('submit', function (e) {
		e.preventDefault();

		const searchText = searchInput.value.trim();

		const searchURL = 'https://www.google.com/search?q=' + searchText;

		window.location.href = searchURL;
	});
});
