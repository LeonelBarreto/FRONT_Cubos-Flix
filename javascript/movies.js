const movies = document.querySelector('.movies');
const modal = document.querySelector('.modal');


let allMovies = [];
let moviesSearch = [];


const getMovies = async () => {
    const response = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false');
    const films = await response.json();
    allMovies = films.results;
    moviesSearch = allMovies;
};


const buildElements = (item) => {
    const poster = document.createElement('div');
    poster.classList.add('movie');
    poster.style.backgroundImage = `url(${item.poster_path})`;
    
    poster.addEventListener('click', async () => {
        modal.classList.remove('hidden');
        
        const response = await (await fetch(`https://tmdb-proxy.cubos-academy.workers.dev/3/movie/${item.id}?language=pt-BR`)).json();

        
        const titleBr = document.querySelector('.modal__title');
        titleBr.textContent = response.title;
        
        const img = document.querySelector('.modal__img');
        img.src = response.backdrop_path;
        
        const sinopse = document.querySelector('.modal__description');
        sinopse.textContent = response.overview;
        
        const score = document.querySelector('.modal__average');
        score.textContent = response.vote_average;
        
        const gender = document.querySelector('.modal__genres');
        gender.innerHTML = "";

       response.genres.forEach((item) => {            
            const genres = document.createElement('span');
            genres.classList.add('modal__genre');
            genres.textContent = item.name;
            
            gender.append(genres);
        });
                
        modal.addEventListener('click', () => modal.classList.add('hidden'));

        const btnClose = document.querySelector('.modal__close');
        btnClose.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
        
    });
    
    const info = document.createElement('div');
    info.classList.add('movie__info');

    const title = document.createElement('span');
    title.classList.add('movie__title');
    title.textContent = item.title;

    const rating = document.createElement('span');
    rating.classList.add('movie__rating');
    rating.textContent = item.vote_average;

    const stars = document.createElement('img');
    stars.src = './assets/estrela.svg';
    stars.alt = 'stars';

    rating.appendChild(stars);
    info.append(title, rating);
    poster.appendChild(info);

    movies.append(poster);
};


const makeCardsMovies = (start, end) => {
    const temp = moviesSearch.slice(start, end);
    movies.innerHTML = '';
    temp.forEach(item => {
        buildElements(item);
    });
};


const init = async () => {
    await getMovies();
    makeCardsMovies(0, 5);
};

init();