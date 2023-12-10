async function getMovies() {
    const apiKey = 'f216d7eca0917cf435a3770fe4b56d2d';
    const titleName = document.getElementById('title-name').value.trim();

    if (titleName !== '') {
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${titleName}&include_adult=false&language=pt-BR&page=1`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const movie = data.results[0];

            updateMovieDetails(movie);

        } else {
            showError('Filme não encontrado.');
        }
    } else {
        showError('Por favor, insira um título de filme.');
    }
}

function updateMovieDetails(movie) {
    const imgSearchElement = document.getElementById('imgSearch');
    imgSearchElement.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" style="max-width: 350px;">`;

    const titleElement = document.querySelector('#container2 h3');
    titleElement.textContent = movie.title;

    const plotElement = document.querySelector('#container2 p');
    plotElement.textContent = movie.overview;

    const imdbIDElement = document.getElementById('imdbid');
    imdbIDElement.textContent = 'ID do Imdb: ' + movie.id;
}

function showError(message) {
    alert(message);
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('random').addEventListener('click', getRandomMovie);
});

async function getRandomMovie() {
    const apiKey = 'f216d7eca0917cf435a3770fe4b56d2d';


    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&page=1`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const randomMovie = data.results[randomIndex];

        updateMovieDetails1(randomMovie);
    } else {
        showError('Nenhum filme encontrado.');
    }

}

function updateMovieDetails1(movie) {
    const imgSearchElement = document.getElementById('moviePoster1');
    imgSearchElement.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" style="max-width: 350px;">`;

    const titleElement = document.querySelector('#container1 h3');
    titleElement.textContent = movie.title;

    const plotElement = document.querySelector('#container1 p');
    plotElement.textContent = movie.overview;

    const imdbIDElement = document.getElementById('#container1 imdbid');
    imdbIDElement.textContent = 'ID do Imdb: ' + movie.id;
}


